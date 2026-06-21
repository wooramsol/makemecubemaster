var jy=Object.defineProperty;var Zy=(s,t,i)=>t in s?jy(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var fn=(s,t,i)=>Zy(s,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Kf={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function Ky(){if(D_)return Ro;D_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Ro.Fragment=t,Ro.jsx=i,Ro.jsxs=i,Ro}var U_;function Qy(){return U_||(U_=1,Kf.exports=Ky()),Kf.exports}var kt=Qy(),Qf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function Jy(){if(L_)return re;L_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function y(O,rt,yt){this.props=O,this.context=rt,this.refs=M,this.updater=yt||E}y.prototype.isReactComponent={},y.prototype.setState=function(O,rt){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,rt,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function I(){}I.prototype=y.prototype;function U(O,rt,yt){this.props=O,this.context=rt,this.refs=M,this.updater=yt||E}var w=U.prototype=new I;w.constructor=U,R(w,y.prototype),w.isPureReactComponent=!0;var k=Array.isArray;function B(){}var P={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function D(O,rt,yt){var J=yt.ref;return{$$typeof:s,type:O,key:rt,ref:J!==void 0?J:null,props:yt}}function T(O,rt){return D(O.type,rt,O.props)}function z(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function Y(O){var rt={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(yt){return rt[yt]})}var Z=/\/+/g;function tt(O,rt){return typeof O=="object"&&O!==null&&O.key!=null?Y(""+O.key):rt.toString(36)}function lt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(B,B):(O.status="pending",O.then(function(rt){O.status==="pending"&&(O.status="fulfilled",O.value=rt)},function(rt){O.status==="pending"&&(O.status="rejected",O.reason=rt)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function N(O,rt,yt,J,ht){var Mt=typeof O;(Mt==="undefined"||Mt==="boolean")&&(O=null);var xt=!1;if(O===null)xt=!0;else switch(Mt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(O.$$typeof){case s:case t:xt=!0;break;case g:return xt=O._init,N(xt(O._payload),rt,yt,J,ht)}}if(xt)return ht=ht(O),xt=J===""?"."+tt(O,0):J,k(ht)?(yt="",xt!=null&&(yt=xt.replace(Z,"$&/")+"/"),N(ht,rt,yt,"",function(Kt){return Kt})):ht!=null&&(z(ht)&&(ht=T(ht,yt+(ht.key==null||O&&O.key===ht.key?"":(""+ht.key).replace(Z,"$&/")+"/")+xt)),rt.push(ht)),1;xt=0;var Ft=J===""?".":J+":";if(k(O))for(var jt=0;jt<O.length;jt++)J=O[jt],Mt=Ft+tt(J,jt),xt+=N(J,rt,yt,Mt,ht);else if(jt=S(O),typeof jt=="function")for(O=jt.call(O),jt=0;!(J=O.next()).done;)J=J.value,Mt=Ft+tt(J,jt++),xt+=N(J,rt,yt,Mt,ht);else if(Mt==="object"){if(typeof O.then=="function")return N(lt(O),rt,yt,J,ht);throw rt=String(O),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return xt}function $(O,rt,yt){if(O==null)return O;var J=[],ht=0;return N(O,J,"","",function(Mt){return rt.call(yt,Mt,ht++)}),J}function j(O){if(O._status===-1){var rt=O._result;rt=rt(),rt.then(function(yt){(O._status===0||O._status===-1)&&(O._status=1,O._result=yt)},function(yt){(O._status===0||O._status===-1)&&(O._status=2,O._result=yt)}),O._status===-1&&(O._status=0,O._result=rt)}if(O._status===1)return O._result.default;throw O._result}var vt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Tt={map:$,forEach:function(O,rt,yt){$(O,function(){rt.apply(this,arguments)},yt)},count:function(O){var rt=0;return $(O,function(){rt++}),rt},toArray:function(O){return $(O,function(rt){return rt})||[]},only:function(O){if(!z(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return re.Activity=_,re.Children=Tt,re.Component=y,re.Fragment=i,re.Profiler=l,re.PureComponent=U,re.StrictMode=r,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,re.__COMPILER_RUNTIME={__proto__:null,c:function(O){return P.H.useMemoCache(O)}},re.cache=function(O){return function(){return O.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(O,rt,yt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var J=R({},O.props),ht=O.key;if(rt!=null)for(Mt in rt.key!==void 0&&(ht=""+rt.key),rt)!V.call(rt,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&rt.ref===void 0||(J[Mt]=rt[Mt]);var Mt=arguments.length-2;if(Mt===1)J.children=yt;else if(1<Mt){for(var xt=Array(Mt),Ft=0;Ft<Mt;Ft++)xt[Ft]=arguments[Ft+2];J.children=xt}return D(O.type,ht,J)},re.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},re.createElement=function(O,rt,yt){var J,ht={},Mt=null;if(rt!=null)for(J in rt.key!==void 0&&(Mt=""+rt.key),rt)V.call(rt,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ht[J]=rt[J]);var xt=arguments.length-2;if(xt===1)ht.children=yt;else if(1<xt){for(var Ft=Array(xt),jt=0;jt<xt;jt++)Ft[jt]=arguments[jt+2];ht.children=Ft}if(O&&O.defaultProps)for(J in xt=O.defaultProps,xt)ht[J]===void 0&&(ht[J]=xt[J]);return D(O,Mt,ht)},re.createRef=function(){return{current:null}},re.forwardRef=function(O){return{$$typeof:d,render:O}},re.isValidElement=z,re.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:j}},re.memo=function(O,rt){return{$$typeof:m,type:O,compare:rt===void 0?null:rt}},re.startTransition=function(O){var rt=P.T,yt={};P.T=yt;try{var J=O(),ht=P.S;ht!==null&&ht(yt,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(B,vt)}catch(Mt){vt(Mt)}finally{rt!==null&&yt.types!==null&&(rt.types=yt.types),P.T=rt}},re.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},re.use=function(O){return P.H.use(O)},re.useActionState=function(O,rt,yt){return P.H.useActionState(O,rt,yt)},re.useCallback=function(O,rt){return P.H.useCallback(O,rt)},re.useContext=function(O){return P.H.useContext(O)},re.useDebugValue=function(){},re.useDeferredValue=function(O,rt){return P.H.useDeferredValue(O,rt)},re.useEffect=function(O,rt){return P.H.useEffect(O,rt)},re.useEffectEvent=function(O){return P.H.useEffectEvent(O)},re.useId=function(){return P.H.useId()},re.useImperativeHandle=function(O,rt,yt){return P.H.useImperativeHandle(O,rt,yt)},re.useInsertionEffect=function(O,rt){return P.H.useInsertionEffect(O,rt)},re.useLayoutEffect=function(O,rt){return P.H.useLayoutEffect(O,rt)},re.useMemo=function(O,rt){return P.H.useMemo(O,rt)},re.useOptimistic=function(O,rt){return P.H.useOptimistic(O,rt)},re.useReducer=function(O,rt,yt){return P.H.useReducer(O,rt,yt)},re.useRef=function(O){return P.H.useRef(O)},re.useState=function(O){return P.H.useState(O)},re.useSyncExternalStore=function(O,rt,yt){return P.H.useSyncExternalStore(O,rt,yt)},re.useTransition=function(){return P.H.useTransition()},re.version="19.2.7",re}var N_;function Ld(){return N_||(N_=1,Qf.exports=Jy()),Qf.exports}var ie=Ld(),Jf={exports:{}},Co={},$f={exports:{}},th={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function $y(){return O_||(O_=1,(function(s){function t(N,$){var j=N.length;N.push($);t:for(;0<j;){var vt=j-1>>>1,Tt=N[vt];if(0<l(Tt,$))N[vt]=$,N[j]=Tt,j=vt;else break t}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var $=N[0],j=N.pop();if(j!==$){N[0]=j;t:for(var vt=0,Tt=N.length,O=Tt>>>1;vt<O;){var rt=2*(vt+1)-1,yt=N[rt],J=rt+1,ht=N[J];if(0>l(yt,j))J<Tt&&0>l(ht,yt)?(N[vt]=ht,N[J]=j,vt=J):(N[vt]=yt,N[rt]=j,vt=rt);else if(J<Tt&&0>l(ht,j))N[vt]=ht,N[J]=j,vt=J;else break t}}return $}function l(N,$){var j=N.sortIndex-$.sortIndex;return j!==0?j:N.id-$.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,_=null,v=3,S=!1,E=!1,R=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(N){for(var $=i(m);$!==null;){if($.callback===null)r(m);else if($.startTime<=N)r(m),$.sortIndex=$.expirationTime,t(p,$);else break;$=i(m)}}function k(N){if(R=!1,w(N),!E)if(i(p)!==null)E=!0,B||(B=!0,Y());else{var $=i(m);$!==null&&lt(k,$.startTime-N)}}var B=!1,P=-1,V=5,D=-1;function T(){return M?!0:!(s.unstable_now()-D<V)}function z(){if(M=!1,B){var N=s.unstable_now();D=N;var $=!0;try{t:{E=!1,R&&(R=!1,I(P),P=-1),S=!0;var j=v;try{e:{for(w(N),_=i(p);_!==null&&!(_.expirationTime>N&&T());){var vt=_.callback;if(typeof vt=="function"){_.callback=null,v=_.priorityLevel;var Tt=vt(_.expirationTime<=N);if(N=s.unstable_now(),typeof Tt=="function"){_.callback=Tt,w(N),$=!0;break e}_===i(p)&&r(p),w(N)}else r(p);_=i(p)}if(_!==null)$=!0;else{var O=i(m);O!==null&&lt(k,O.startTime-N),$=!1}}break t}finally{_=null,v=j,S=!1}$=void 0}}finally{$?Y():B=!1}}}var Y;if(typeof U=="function")Y=function(){U(z)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,tt=Z.port2;Z.port1.onmessage=z,Y=function(){tt.postMessage(null)}}else Y=function(){y(z,0)};function lt(N,$){P=y(function(){N(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(N){N.callback=null},s.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<N?Math.floor(1e3/N):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(N){switch(v){case 1:case 2:case 3:var $=3;break;default:$=v}var j=v;v=$;try{return N()}finally{v=j}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(N,$){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var j=v;v=N;try{return $()}finally{v=j}},s.unstable_scheduleCallback=function(N,$,j){var vt=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?vt+j:vt):j=vt,N){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=j+Tt,N={id:g++,callback:$,priorityLevel:N,startTime:j,expirationTime:Tt,sortIndex:-1},j>vt?(N.sortIndex=j,t(m,N),i(p)===null&&N===i(m)&&(R?(I(P),P=-1):R=!0,lt(k,j-vt))):(N.sortIndex=Tt,t(p,N),E||S||(E=!0,B||(B=!0,Y()))),N},s.unstable_shouldYield=T,s.unstable_wrapCallback=function(N){var $=v;return function(){var j=v;v=$;try{return N.apply(this,arguments)}finally{v=j}}}})(th)),th}var z_;function tS(){return z_||(z_=1,$f.exports=$y()),$f.exports}var eh={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function eS(){if(P_)return An;P_=1;var s=Ld();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,An.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},An.flushSync=function(p){var m=f.T,g=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=g,r.d.f()}},An.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},An.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},An.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},An.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},An.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,_=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},An.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},An.requestFormReset=function(p){r.d.r(p)},An.unstable_batchedUpdates=function(p,m){return p(m)},An.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},An.useFormStatus=function(){return f.H.useHostTransitionStatus()},An.version="19.2.7",An}var B_;function nS(){if(B_)return eh.exports;B_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),eh.exports=eS(),eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function iS(){if(F_)return Co;F_=1;var s=tS(),t=Ld(),i=nS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),e;if(h===o)return p(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var x=!1,b=u.child;b;){if(b===a){x=!0,a=u,o=h;break}if(b===o){x=!0,o=u,a=h;break}b=b.sibling}if(!x){for(b=h.child;b;){if(b===a){x=!0,a=h,o=u;break}if(b===o){x=!0,o=h,a=u;break}b=b.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),T=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Symbol.for("react.client.reference");function tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case k:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:tt(e.type)||"Memo";case V:n=e._payload,e=e._init;try{return tt(e(n))}catch{}}return null}var lt=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},vt=[],Tt=-1;function O(e){return{current:e}}function rt(e){0>Tt||(e.current=vt[Tt],vt[Tt]=null,Tt--)}function yt(e,n){Tt++,vt[Tt]=e.current,e.current=n}var J=O(null),ht=O(null),Mt=O(null),xt=O(null);function Ft(e,n){switch(yt(Mt,n),yt(ht,e),yt(J,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?$g(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=$g(n),e=t_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rt(J),yt(J,e)}function jt(){rt(J),rt(ht),rt(Mt)}function Kt(e){e.memoizedState!==null&&yt(xt,e);var n=J.current,a=t_(n,e.type);n!==a&&(yt(ht,e),yt(J,a))}function Ve(e){ht.current===e&&(rt(J),rt(ht)),xt.current===e&&(rt(xt),Eo._currentValue=j)}var He,fe;function H(e){if(He===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);He=n&&n[1]||"",fe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+He+e+fe}var Tn=!1;function he(e,n){if(!e||Tn)return"";Tn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ct){var it=ct}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ct){it=ct}e.call(gt.prototype)}}else{try{throw Error()}catch(ct){it=ct}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ct){if(ct&&it&&typeof ct.stack=="string")return[ct.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),x=h[0],b=h[1];if(x&&b){var F=x.split(`
`),nt=b.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===nt.length)for(o=F.length-1,u=nt.length-1;1<=o&&0<=u&&F[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==nt[u]){var ft=`
`+F[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=u);break}}}finally{Tn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?H(a):""}function ge(e,n){switch(e.tag){case 26:case 27:case 5:return H(e.type);case 16:return H("Lazy");case 13:return e.child!==n&&n!==null?H("Suspense Fallback"):H("Suspense");case 19:return H("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return H("Activity");default:return""}}function Xt(e){try{var n="",a=null;do n+=ge(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var De=Object.prototype.hasOwnProperty,Vt=s.unstable_scheduleCallback,L=s.unstable_cancelCallback,A=s.unstable_shouldYield,at=s.unstable_requestPaint,dt=s.unstable_now,St=s.unstable_getCurrentPriorityLevel,mt=s.unstable_ImmediatePriority,Ht=s.unstable_UserBlockingPriority,Rt=s.unstable_NormalPriority,zt=s.unstable_LowPriority,_e=s.unstable_IdlePriority,bt=s.log,Pt=s.unstable_setDisableYieldValue,Zt=null,Gt=null;function Nt(e){if(typeof bt=="function"&&Pt(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Zt,e)}catch{}}var $t=Math.clz32?Math.clz32:W,se=Math.log,Oe=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(se(e)/Oe|0)|0}var Ct=256,ut=262144,_t=4194304;function At(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~h,o!==0?u=At(o):(x&=b,x!==0?u=At(x):a||(a=b&~e,a!==0&&(u=At(a))))):(b=o&~h,b!==0?u=At(b):x!==0?u=At(x):a||(a=o&~e,a!==0&&(u=At(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function ee(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function qe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ln(){var e=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),e}function Te(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function _n(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pi(e,n,a,o,u,h){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,F=e.expirationTimes,nt=e.hiddenUpdates;for(a=x&~a;0<a;){var ft=31-$t(a),gt=1<<ft;b[ft]=0,F[ft]=-1;var it=nt[ft];if(it!==null)for(nt[ft]=null,ft=0;ft<it.length;ft++){var ct=it[ft];ct!==null&&(ct.lane&=-536870913)}a&=~gt}o!==0&&Os(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(x&~n))}function Os(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-$t(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function zs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-$t(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ai(e,n){var a=n&-n;return a=(a&42)!==0?1:Ya(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ya(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Rr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ps(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:E_(e.type))}function ja(e,n){var a=$.p;try{return $.p=e,n()}finally{$.p=a}}var mi=Math.random().toString(36).slice(2),Ze="__reactFiber$"+mi,vn="__reactProps$"+mi,zi="__reactContainer$"+mi,Bs="__reactEvents$"+mi,kc="__reactListeners$"+mi,Xc="__reactHandles$"+mi,qo="__reactResources$"+mi,Za="__reactMarker$"+mi;function Fs(e){delete e[Ze],delete e[vn],delete e[Bs],delete e[kc],delete e[Xc]}function C(e){var n=e[Ze];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zi]||a[Ze]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=o_(e);e!==null;){if(a=e[Ze])return a;e=o_(e)}return n}e=a,a=e.parentNode}return null}function q(e){if(e=e[Ze]||e[zi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function st(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ot(e){var n=e[qo];return n||(n=e[qo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(e){e[Za]=!0}var Et=new Set,Dt={};function Lt(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(Dt[e]=n,e=0;e<n.length;e++)Et.add(n[e])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},Wt={};function ye(e){return De.call(Wt,e)?!0:De.call(Jt,e)?!1:ne.test(e)?Wt[e]=!0:(Jt[e]=!0,!1)}function Se(e,n,a){if(ye(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ke(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function be(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function cn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,h.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ee(e){if(!e._valueTracker){var n=Yt(e)?"checked":"value";e._valueTracker=cn(e,n,""+e[n])}}function On(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Yt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Dn=/[\n"\\]/g;function pn(e){return e.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ze(e,n,a,o,u,h,x,b){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ae(n)):e.value!==""+ae(n)&&(e.value=""+ae(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?bn(e,x,ae(n)):a!=null?bn(e,x,ae(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+ae(b):e.removeAttribute("name")}function Un(e,n,a,o,u,h,x,b){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Ee(e);return}a=a!=null?""+ae(a):"",n=n!=null?""+ae(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Ee(e)}function bn(e,n,a){n==="number"&&gi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ke(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ae(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function xn(e,n,a){if(n!=null&&(n=""+ae(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ae(a):""}function Cr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(lt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ae(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ee(e)}function zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var k0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||k0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Qd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Kd(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Kd(e,h,n[h])}function Wc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var X0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),W0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(e){return W0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pi(){}var qc=null;function Yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Dr=null;function Jd(e){var n=q(e);if(n&&(e=n.stateNode)){var a=e[vn]||null;t:switch(e=n.stateNode,n.type){case"input":if(ze(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[vn]||null;if(!u)throw Error(r(90));ze(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&On(o)}break t;case"textarea":xn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ke(e,!!a.multiple,n,!1)}}}var jc=!1;function $d(e,n,a){if(jc)return e(n,a);jc=!0;try{var o=e(n);return o}finally{if(jc=!1,(wr!==null||Dr!==null)&&(Ol(),wr&&(n=wr,e=Dr,Dr=wr=null,Jd(n),e)))for(n=0;n<e.length;n++)Jd(e[n])}}function Is(e,n){var a=e.stateNode;if(a===null)return null;var o=a[vn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=!1;if(Bi)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{Zc=!1}var da=null,Kc=null,jo=null;function tp(){if(jo)return jo;var e,n=Kc,a=n.length,o,u="value"in da?da.value:da.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[h-o];o++);return jo=u.slice(e,1<o?1-o:void 0)}function Zo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ko(){return!0}function ep(){return!1}function Pn(e){function n(a,o,u,h,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ko:ep,this.isPropagationStopped=ep,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=Pn(Ka),Gs=_({},Ka,{view:0,detail:0}),q0=Pn(Gs),Qc,Jc,Vs,Jo=_({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vs&&(Vs&&e.type==="mousemove"?(Qc=e.screenX-Vs.screenX,Jc=e.screenY-Vs.screenY):Jc=Qc=0,Vs=e),Qc)},movementY:function(e){return"movementY"in e?e.movementY:Jc}}),np=Pn(Jo),Y0=_({},Jo,{dataTransfer:0}),j0=Pn(Y0),Z0=_({},Gs,{relatedTarget:0}),$c=Pn(Z0),K0=_({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Q0=Pn(K0),J0=_({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$0=Pn(J0),tx=_({},Ka,{data:0}),ip=Pn(tx),ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ix[e])?!!n[e]:!1}function tu(){return ax}var rx=_({},Gs,{key:function(e){if(e.key){var n=ex[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(e){return e.type==="keypress"?Zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sx=Pn(rx),ox=_({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=Pn(ox),lx=_({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),cx=Pn(lx),ux=_({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=Pn(ux),hx=_({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dx=Pn(hx),px=_({},Ka,{newState:0,oldState:0}),mx=Pn(px),gx=[9,13,27,32],eu=Bi&&"CompositionEvent"in window,ks=null;Bi&&"documentMode"in document&&(ks=document.documentMode);var _x=Bi&&"TextEvent"in window&&!ks,rp=Bi&&(!eu||ks&&8<ks&&11>=ks),sp=" ",op=!1;function lp(e,n){switch(e){case"keyup":return gx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function vx(e,n){switch(e){case"compositionend":return cp(n);case"keypress":return n.which!==32?null:(op=!0,sp);case"textInput":return e=n.data,e===sp&&op?null:e;default:return null}}function xx(e,n){if(Ur)return e==="compositionend"||!eu&&lp(e,n)?(e=tp(),jo=Kc=da=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rp&&n.locale!=="ko"?null:n.data;default:return null}}var yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yx[e.type]:n==="textarea"}function fp(e,n,a,o){wr?Dr?Dr.push(o):Dr=[o]:wr=o,n=Gl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Xs=null,Ws=null;function Sx(e){Yg(e,0)}function $o(e){var n=st(e);if(On(n))return e}function hp(e,n){if(e==="change")return n}var dp=!1;if(Bi){var nu;if(Bi){var iu="oninput"in document;if(!iu){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),iu=typeof pp.oninput=="function"}nu=iu}else nu=!1;dp=nu&&(!document.documentMode||9<document.documentMode)}function mp(){Xs&&(Xs.detachEvent("onpropertychange",gp),Ws=Xs=null)}function gp(e){if(e.propertyName==="value"&&$o(Ws)){var n=[];fp(n,Ws,e,Yc(e)),$d(Sx,n)}}function Mx(e,n,a){e==="focusin"?(mp(),Xs=n,Ws=a,Xs.attachEvent("onpropertychange",gp)):e==="focusout"&&mp()}function Ex(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(Ws)}function Tx(e,n){if(e==="click")return $o(n)}function bx(e,n){if(e==="input"||e==="change")return $o(n)}function Ax(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Ax;function qs(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!De.call(n,u)||!Wn(e[u],n[u]))return!1}return!0}function _p(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vp(e,n){var a=_p(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=_p(a)}}function xp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gi(e.document)}return n}function au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Rx=Bi&&"documentMode"in document&&11>=document.documentMode,Lr=null,ru=null,Ys=null,su=!1;function Sp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||Lr==null||Lr!==gi(o)||(o=Lr,"selectionStart"in o&&au(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ys&&qs(Ys,o)||(Ys=o,o=Gl(ru,"onSelect"),0<o.length&&(n=new Qo("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Lr)))}function Qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Nr={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},ou={},Mp={};Bi&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Ja(e){if(ou[e])return ou[e];if(!Nr[e])return e;var n=Nr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Mp)return ou[e]=n[a];return e}var Ep=Ja("animationend"),Tp=Ja("animationiteration"),bp=Ja("animationstart"),Cx=Ja("transitionrun"),wx=Ja("transitionstart"),Dx=Ja("transitioncancel"),Ap=Ja("transitionend"),Rp=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function _i(e,n){Rp.set(e,n),Lt(n,[e])}var tl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ei=[],Or=0,cu=0;function el(){for(var e=Or,n=cu=Or=0;n<e;){var a=ei[n];ei[n++]=null;var o=ei[n];ei[n++]=null;var u=ei[n];ei[n++]=null;var h=ei[n];if(ei[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}h!==0&&Cp(a,u,h)}}function nl(e,n,a,o){ei[Or++]=e,ei[Or++]=n,ei[Or++]=a,ei[Or++]=o,cu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function uu(e,n,a,o){return nl(e,n,a,o),il(e)}function $a(e,n){return nl(e,null,null,n),il(e)}function Cp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-$t(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function il(e){if(50<go)throw go=0,yf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function Ux(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,o){return new Ux(e,n,a,o)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function al(e,n,a,o,u,h){var x=0;if(o=e,typeof e=="function")fu(e)&&(x=1);else if(typeof e=="string")x=Py(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=qn(31,a,n,u),e.elementType=D,e.lanes=h,e;case R:return tr(a.children,u,h,n);case M:x=8,u|=24;break;case y:return e=qn(12,a,n,u|2),e.elementType=y,e.lanes=h,e;case k:return e=qn(13,a,n,u),e.elementType=k,e.lanes=h,e;case B:return e=qn(19,a,n,u),e.elementType=B,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:x=10;break t;case I:x=9;break t;case w:x=11;break t;case P:x=14;break t;case V:x=16,o=null;break t}x=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=qn(x,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function tr(e,n,a,o){return e=qn(7,e,o,n),e.lanes=a,e}function hu(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function Dp(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function du(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Up=new WeakMap;function ni(e,n){if(typeof e=="object"&&e!==null){var a=Up.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Xt(n)},Up.set(e,n),n)}return{value:e,source:n,stack:Xt(n)}}var Pr=[],Br=0,rl=null,js=0,ii=[],ai=0,pa=null,Ri=1,Ci="";function Ii(e,n){Pr[Br++]=js,Pr[Br++]=rl,rl=e,js=n}function Lp(e,n,a){ii[ai++]=Ri,ii[ai++]=Ci,ii[ai++]=pa,pa=e;var o=Ri;e=Ci;var u=32-$t(o)-1;o&=~(1<<u),a+=1;var h=32-$t(n)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ri=1<<32-$t(n)+u|a<<u|o,Ci=h+e}else Ri=1<<h|a<<u|o,Ci=e}function pu(e){e.return!==null&&(Ii(e,1),Lp(e,1,0))}function mu(e){for(;e===rl;)rl=Pr[--Br],Pr[Br]=null,js=Pr[--Br],Pr[Br]=null;for(;e===pa;)pa=ii[--ai],ii[ai]=null,Ci=ii[--ai],ii[ai]=null,Ri=ii[--ai],ii[ai]=null}function Np(e,n){ii[ai++]=Ri,ii[ai++]=Ci,ii[ai++]=pa,Ri=n.id,Ci=n.overflow,pa=e}var yn=null,Xe=null,Me=!1,ma=null,ri=!1,gu=Error(r(519));function ga(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zs(ni(n,e)),gu}function Op(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Ze]=e,n[vn]=o,a){case"dialog":pe("cancel",n),pe("close",n);break;case"iframe":case"object":case"embed":pe("load",n);break;case"video":case"audio":for(a=0;a<vo.length;a++)pe(vo[a],n);break;case"source":pe("error",n);break;case"img":case"image":case"link":pe("error",n),pe("load",n);break;case"details":pe("toggle",n);break;case"input":pe("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":pe("invalid",n);break;case"textarea":pe("invalid",n),Cr(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Qg(n.textContent,a)?(o.popover!=null&&(pe("beforetoggle",n),pe("toggle",n)),o.onScroll!=null&&pe("scroll",n),o.onScrollEnd!=null&&pe("scrollend",n),o.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||ga(e,!0)}function zp(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:yn=yn.return}}function Fr(e){if(e!==yn)return!1;if(!Me)return zp(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zf(e.type,e.memoizedProps)),a=!a),a&&Xe&&ga(e),zp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Xe=s_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Xe=s_(e)}else n===27?(n=Xe,Da(e.type)?(e=Hf,Hf=null,Xe=e):Xe=n):Xe=yn?oi(e.stateNode.nextSibling):null;return!0}function er(){Xe=yn=null,Me=!1}function _u(){var e=ma;return e!==null&&(Hn===null?Hn=e:Hn.push.apply(Hn,e),ma=null),e}function Zs(e){ma===null?ma=[e]:ma.push(e)}var vu=O(null),nr=null,Hi=null;function _a(e,n,a){yt(vu,n._currentValue),n._currentValue=a}function Gi(e){e._currentValue=vu.current,rt(vu)}function xu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function yu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var x=u.child;h=h.firstContext;t:for(;h!==null;){var b=h;h=u;for(var F=0;F<n.length;F++)if(b.context===n[F]){h.lanes|=a,b=h.alternate,b!==null&&(b.lanes|=a),xu(h.return,a,e),o||(x=null);break t}h=b.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,h=x.alternate,h!==null&&(h.lanes|=a),xu(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Ir(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var b=u.type;Wn(u.pendingProps.value,x.value)||(e!==null?e.push(b):e=[b])}}else if(u===xt.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Eo):e=[Eo])}u=u.return}e!==null&&yu(n,e,a,o),n.flags|=262144}function sl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ir(e){nr=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Sn(e){return Pp(nr,e)}function ol(e,n){return nr===null&&ir(e),Pp(e,n)}function Pp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(e===null)throw Error(r(308));Hi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Hi=Hi.next=n;return a}var Lx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Nx=s.unstable_scheduleCallback,Ox=s.unstable_NormalPriority,nn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Su(){return{controller:new Lx,data:new Map,refCount:0}}function Ks(e){e.refCount--,e.refCount===0&&Nx(Ox,function(){e.controller.abort()})}var Qs=null,Mu=0,Hr=0,Gr=null;function zx(e,n){if(Qs===null){var a=Qs=[];Mu=0,Hr=Af(),Gr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Mu++,n.then(Bp,Bp),n}function Bp(){if(--Mu===0&&Qs!==null){Gr!==null&&(Gr.status="fulfilled");var e=Qs;Qs=null,Hr=0,Gr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Px(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Fp=N.S;N.S=function(e,n){Sg=dt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&zx(e,n),Fp!==null&&Fp(e,n)};var ar=O(null);function Eu(){var e=ar.current;return e!==null?e:Ge.pooledCache}function ll(e,n){n===null?yt(ar,ar.current):yt(ar,n.pool)}function Ip(){var e=Eu();return e===null?null:{parent:nn._currentValue,pool:e}}var Vr=Error(r(460)),Tu=Error(r(474)),cl=Error(r(542)),ul={then:function(){}};function Hp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e}throw sr=n,Vr}}function rr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(sr=a,Vr):a}}var sr=null;function Vp(){if(sr===null)throw Error(r(459));var e=sr;return sr=null,e}function kp(e){if(e===Vr||e===cl)throw Error(r(483))}var kr=null,Js=0;function fl(e){var n=Js;return Js+=1,kr===null&&(kr=[]),Gp(kr,e,n)}function $s(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function hl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Xp(e){function n(K,G){if(e){var et=K.deletions;et===null?(K.deletions=[G],K.flags|=16):et.push(G)}}function a(K,G){if(!e)return null;for(;G!==null;)n(K,G),G=G.sibling;return null}function o(K){for(var G=new Map;K!==null;)K.key!==null?G.set(K.key,K):G.set(K.index,K),K=K.sibling;return G}function u(K,G){return K=Fi(K,G),K.index=0,K.sibling=null,K}function h(K,G,et){return K.index=et,e?(et=K.alternate,et!==null?(et=et.index,et<G?(K.flags|=67108866,G):et):(K.flags|=67108866,G)):(K.flags|=1048576,G)}function x(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function b(K,G,et,pt){return G===null||G.tag!==6?(G=hu(et,K.mode,pt),G.return=K,G):(G=u(G,et),G.return=K,G)}function F(K,G,et,pt){var qt=et.type;return qt===R?ft(K,G,et.props.children,pt,et.key):G!==null&&(G.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===V&&rr(qt)===G.type)?(G=u(G,et.props),$s(G,et),G.return=K,G):(G=al(et.type,et.key,et.props,null,K.mode,pt),$s(G,et),G.return=K,G)}function nt(K,G,et,pt){return G===null||G.tag!==4||G.stateNode.containerInfo!==et.containerInfo||G.stateNode.implementation!==et.implementation?(G=du(et,K.mode,pt),G.return=K,G):(G=u(G,et.children||[]),G.return=K,G)}function ft(K,G,et,pt,qt){return G===null||G.tag!==7?(G=tr(et,K.mode,pt,qt),G.return=K,G):(G=u(G,et),G.return=K,G)}function gt(K,G,et){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=hu(""+G,K.mode,et),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case S:return et=al(G.type,G.key,G.props,null,K.mode,et),$s(et,G),et.return=K,et;case E:return G=du(G,K.mode,et),G.return=K,G;case V:return G=rr(G),gt(K,G,et)}if(lt(G)||Y(G))return G=tr(G,K.mode,et,null),G.return=K,G;if(typeof G.then=="function")return gt(K,fl(G),et);if(G.$$typeof===U)return gt(K,ol(K,G),et);hl(K,G)}return null}function it(K,G,et,pt){var qt=G!==null?G.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return qt!==null?null:b(K,G,""+et,pt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case S:return et.key===qt?F(K,G,et,pt):null;case E:return et.key===qt?nt(K,G,et,pt):null;case V:return et=rr(et),it(K,G,et,pt)}if(lt(et)||Y(et))return qt!==null?null:ft(K,G,et,pt,null);if(typeof et.then=="function")return it(K,G,fl(et),pt);if(et.$$typeof===U)return it(K,G,ol(K,et),pt);hl(K,et)}return null}function ct(K,G,et,pt,qt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get(et)||null,b(G,K,""+pt,qt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case S:return K=K.get(pt.key===null?et:pt.key)||null,F(G,K,pt,qt);case E:return K=K.get(pt.key===null?et:pt.key)||null,nt(G,K,pt,qt);case V:return pt=rr(pt),ct(K,G,et,pt,qt)}if(lt(pt)||Y(pt))return K=K.get(et)||null,ft(G,K,pt,qt,null);if(typeof pt.then=="function")return ct(K,G,et,fl(pt),qt);if(pt.$$typeof===U)return ct(K,G,et,ol(G,pt),qt);hl(G,pt)}return null}function Bt(K,G,et,pt){for(var qt=null,Ae=null,It=G,le=G=0,xe=null;It!==null&&le<et.length;le++){It.index>le?(xe=It,It=null):xe=It.sibling;var Re=it(K,It,et[le],pt);if(Re===null){It===null&&(It=xe);break}e&&It&&Re.alternate===null&&n(K,It),G=h(Re,G,le),Ae===null?qt=Re:Ae.sibling=Re,Ae=Re,It=xe}if(le===et.length)return a(K,It),Me&&Ii(K,le),qt;if(It===null){for(;le<et.length;le++)It=gt(K,et[le],pt),It!==null&&(G=h(It,G,le),Ae===null?qt=It:Ae.sibling=It,Ae=It);return Me&&Ii(K,le),qt}for(It=o(It);le<et.length;le++)xe=ct(It,K,le,et[le],pt),xe!==null&&(e&&xe.alternate!==null&&It.delete(xe.key===null?le:xe.key),G=h(xe,G,le),Ae===null?qt=xe:Ae.sibling=xe,Ae=xe);return e&&It.forEach(function(za){return n(K,za)}),Me&&Ii(K,le),qt}function Qt(K,G,et,pt){if(et==null)throw Error(r(151));for(var qt=null,Ae=null,It=G,le=G=0,xe=null,Re=et.next();It!==null&&!Re.done;le++,Re=et.next()){It.index>le?(xe=It,It=null):xe=It.sibling;var za=it(K,It,Re.value,pt);if(za===null){It===null&&(It=xe);break}e&&It&&za.alternate===null&&n(K,It),G=h(za,G,le),Ae===null?qt=za:Ae.sibling=za,Ae=za,It=xe}if(Re.done)return a(K,It),Me&&Ii(K,le),qt;if(It===null){for(;!Re.done;le++,Re=et.next())Re=gt(K,Re.value,pt),Re!==null&&(G=h(Re,G,le),Ae===null?qt=Re:Ae.sibling=Re,Ae=Re);return Me&&Ii(K,le),qt}for(It=o(It);!Re.done;le++,Re=et.next())Re=ct(It,K,le,Re.value,pt),Re!==null&&(e&&Re.alternate!==null&&It.delete(Re.key===null?le:Re.key),G=h(Re,G,le),Ae===null?qt=Re:Ae.sibling=Re,Ae=Re);return e&&It.forEach(function(Yy){return n(K,Yy)}),Me&&Ii(K,le),qt}function Fe(K,G,et,pt){if(typeof et=="object"&&et!==null&&et.type===R&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case S:t:{for(var qt=et.key;G!==null;){if(G.key===qt){if(qt=et.type,qt===R){if(G.tag===7){a(K,G.sibling),pt=u(G,et.props.children),pt.return=K,K=pt;break t}}else if(G.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===V&&rr(qt)===G.type){a(K,G.sibling),pt=u(G,et.props),$s(pt,et),pt.return=K,K=pt;break t}a(K,G);break}else n(K,G);G=G.sibling}et.type===R?(pt=tr(et.props.children,K.mode,pt,et.key),pt.return=K,K=pt):(pt=al(et.type,et.key,et.props,null,K.mode,pt),$s(pt,et),pt.return=K,K=pt)}return x(K);case E:t:{for(qt=et.key;G!==null;){if(G.key===qt)if(G.tag===4&&G.stateNode.containerInfo===et.containerInfo&&G.stateNode.implementation===et.implementation){a(K,G.sibling),pt=u(G,et.children||[]),pt.return=K,K=pt;break t}else{a(K,G);break}else n(K,G);G=G.sibling}pt=du(et,K.mode,pt),pt.return=K,K=pt}return x(K);case V:return et=rr(et),Fe(K,G,et,pt)}if(lt(et))return Bt(K,G,et,pt);if(Y(et)){if(qt=Y(et),typeof qt!="function")throw Error(r(150));return et=qt.call(et),Qt(K,G,et,pt)}if(typeof et.then=="function")return Fe(K,G,fl(et),pt);if(et.$$typeof===U)return Fe(K,G,ol(K,et),pt);hl(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,G!==null&&G.tag===6?(a(K,G.sibling),pt=u(G,et),pt.return=K,K=pt):(a(K,G),pt=hu(et,K.mode,pt),pt.return=K,K=pt),x(K)):a(K,G)}return function(K,G,et,pt){try{Js=0;var qt=Fe(K,G,et,pt);return kr=null,qt}catch(It){if(It===Vr||It===cl)throw It;var Ae=qn(29,It,null,K.mode);return Ae.lanes=pt,Ae.return=K,Ae}finally{}}}var or=Xp(!0),Wp=Xp(!1),va=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(we&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=il(e),Cp(e,null,a),n}return nl(e,o,n,a),il(e)}function to(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,zs(e,a)}}function Ru(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=x:h=h.next=x,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Cu=!1;function eo(){if(Cu){var e=Gr;if(e!==null)throw e}}function no(e,n,a,o){Cu=!1;var u=e.updateQueue;va=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var F=b,nt=F.next;F.next=null,x===null?h=nt:x.next=nt,x=F;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==x&&(b===null?ft.firstBaseUpdate=nt:b.next=nt,ft.lastBaseUpdate=F))}if(h!==null){var gt=u.baseState;x=0,ft=nt=F=null,b=h;do{var it=b.lane&-536870913,ct=it!==b.lane;if(ct?(ve&it)===it:(o&it)===it){it!==0&&it===Hr&&(Cu=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Bt=e,Qt=b;it=n;var Fe=a;switch(Qt.tag){case 1:if(Bt=Qt.payload,typeof Bt=="function"){gt=Bt.call(Fe,gt,it);break t}gt=Bt;break t;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=Qt.payload,it=typeof Bt=="function"?Bt.call(Fe,gt,it):Bt,it==null)break t;gt=_({},gt,it);break t;case 2:va=!0}}it=b.callback,it!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[it]:ct.push(it))}else ct={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?(nt=ft=ct,F=gt):ft=ft.next=ct,x|=it;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ct=b,b=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);ft===null&&(F=gt),u.baseState=F,u.firstBaseUpdate=nt,u.lastBaseUpdate=ft,h===null&&(u.shared.lanes=0),ba|=x,e.lanes=x,e.memoizedState=gt}}function qp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Yp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)qp(a[e],n)}var Xr=O(null),dl=O(0);function jp(e,n){e=Ki,yt(dl,e),yt(Xr,n),Ki=e|n.baseLanes}function wu(){yt(dl,Ki),yt(Xr,Xr.current)}function Du(){Ki=dl.current,rt(Xr),rt(dl)}var Yn=O(null),si=null;function Sa(e){var n=e.alternate;yt(tn,tn.current&1),yt(Yn,e),si===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(si=e)}function Uu(e){yt(tn,tn.current),yt(Yn,e),si===null&&(si=e)}function Zp(e){e.tag===22?(yt(tn,tn.current),yt(Yn,e),si===null&&(si=e)):Ma()}function Ma(){yt(tn,tn.current),yt(Yn,Yn.current)}function jn(e){rt(Yn),si===e&&(si=null),rt(tn)}var tn=O(0);function pl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||If(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,oe=null,Pe=null,an=null,ml=!1,Wr=!1,lr=!1,gl=0,io=0,qr=null,Bx=0;function Qe(){throw Error(r(321))}function Lu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Nu(e,n,a,o,u,h){return Vi=h,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?Lm:ju,lr=!1,h=a(o,u),lr=!1,Wr&&(h=Qp(n,a,o,u)),Kp(e),h}function Kp(e){N.H=so;var n=Pe!==null&&Pe.next!==null;if(Vi=0,an=Pe=oe=null,ml=!1,io=0,qr=null,n)throw Error(r(300));e===null||rn||(e=e.dependencies,e!==null&&sl(e)&&(rn=!0))}function Qp(e,n,a,o){oe=e;var u=0;do{if(Wr&&(qr=null),io=0,Wr=!1,25<=u)throw Error(r(301));if(u+=1,an=Pe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}N.H=Nm,h=n(a,o)}while(Wr);return h}function Fx(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?ao(n):n,e=e.useState()[0],(Pe!==null?Pe.memoizedState:null)!==e&&(oe.flags|=1024),n}function Ou(){var e=gl!==0;return gl=0,e}function zu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Pu(e){if(ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ml=!1}Vi=0,an=Pe=oe=null,Wr=!1,io=gl=0,qr=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?oe.memoizedState=an=e:an=an.next=e,an}function en(){if(Pe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var n=an===null?oe.memoizedState:an.next;if(n!==null)an=n,Pe=e;else{if(e===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},an===null?oe.memoizedState=an=e:an=an.next=e}return an}function _l(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(e){var n=io;return io+=1,qr===null&&(qr=[]),e=Gp(qr,e,n),n=oe,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Lm:ju),e}function vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===U)return Sn(e)}throw Error(r(438,String(e)))}function Bu(e){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=oe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=_l(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=T;return n.index++,a}function ki(e,n){return typeof n=="function"?n(e):n}function xl(e){var n=en();return Fu(n,Pe,e)}function Fu(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var b=x=null,F=null,nt=n,ft=!1;do{var gt=nt.lane&-536870913;if(gt!==nt.lane?(ve&gt)===gt:(Vi&gt)===gt){var it=nt.revertLane;if(it===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),gt===Hr&&(ft=!0);else if((Vi&it)===it){nt=nt.next,it===Hr&&(ft=!0);continue}else gt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(b=F=gt,x=h):F=F.next=gt,oe.lanes|=it,ba|=it;gt=nt.action,lr&&a(h,gt),h=nt.hasEagerState?nt.eagerState:a(h,gt)}else it={lane:gt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},F===null?(b=F=it,x=h):F=F.next=it,oe.lanes|=gt,ba|=gt;nt=nt.next}while(nt!==null&&nt!==n);if(F===null?x=h:F.next=b,!Wn(h,e.memoizedState)&&(rn=!0,ft&&(a=Gr,a!==null)))throw a;e.memoizedState=h,e.baseState=x,e.baseQueue=F,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Iu(e){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);Wn(h,n.memoizedState)||(rn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Jp(e,n,a){var o=oe,u=en(),h=Me;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Wn((Pe||u).memoizedState,a);if(x&&(u.memoizedState=a,rn=!0),u=u.queue,Vu(em.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,Yr(9,{destroy:void 0},tm.bind(null,o,u,a,n),null),Ge===null)throw Error(r(349));h||(Vi&127)!==0||$p(o,n,a)}return a}function $p(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=_l(),oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function tm(e,n,a,o){n.value=a,n.getSnapshot=o,nm(n)&&im(e)}function em(e,n,a){return a(function(){nm(n)&&im(e)})}function nm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function im(e){var n=$a(e,2);n!==null&&Gn(n,e,2)}function Hu(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),lr){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},n}function am(e,n,a,o){return e.baseState=a,Fu(e,Pe,typeof o=="function"?o:ki)}function Ix(e,n,a,o,u){if(Ml(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){h.listeners.push(x)}};N.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,rm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function rm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=N.T,x={};N.T=x;try{var b=a(u,o),F=N.S;F!==null&&F(x,b),sm(e,n,b)}catch(nt){Gu(e,n,nt)}finally{h!==null&&x.types!==null&&(h.types=x.types),N.T=h}}else try{h=a(u,o),sm(e,n,h)}catch(nt){Gu(e,n,nt)}}function sm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){om(e,n,o)},function(o){return Gu(e,n,o)}):om(e,n,a)}function om(e,n,a){n.status="fulfilled",n.value=a,lm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,rm(e,a)))}function Gu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,lm(n),n=n.next;while(n!==o)}e.action=null}function lm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function cm(e,n){return n}function um(e,n){if(Me){var a=Ge.formState;if(a!==null){t:{var o=oe;if(Me){if(Xe){e:{for(var u=Xe,h=ri;u.nodeType!==8;){if(!h){u=null;break e}if(u=oi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Xe=oi(u.nextSibling),o=u.data==="F!";break t}}ga(o)}o=!1}o&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cm,lastRenderedState:n},a.queue=o,a=wm.bind(null,oe,o),o.dispatch=a,o=Hu(!1),h=Yu.bind(null,oe,!1,o.queue),o=Ln(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Ix.bind(null,oe,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function fm(e){var n=en();return hm(n,Pe,e)}function hm(e,n,a){if(n=Fu(e,n,cm)[0],e=xl(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ao(n)}catch(x){throw x===Vr?cl:x}else o=n;n=en();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,Yr(9,{destroy:void 0},Hx.bind(null,u,a),null)),[o,h,e]}function Hx(e,n){e.action=n}function dm(e){var n=en(),a=Pe;if(a!==null)return hm(n,a,e);en(),n=n.memoizedState,a=en();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Yr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=oe.updateQueue,n===null&&(n=_l(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function pm(){return en().memoizedState}function yl(e,n,a,o){var u=Ln();oe.flags|=e,u.memoizedState=Yr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Sl(e,n,a,o){var u=en();o=o===void 0?null:o;var h=u.memoizedState.inst;Pe!==null&&o!==null&&Lu(o,Pe.memoizedState.deps)?u.memoizedState=Yr(n,h,a,o):(oe.flags|=e,u.memoizedState=Yr(1|n,h,a,o))}function mm(e,n){yl(8390656,8,e,n)}function Vu(e,n){Sl(2048,8,e,n)}function Gx(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=_l(),oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function gm(e){var n=en().memoizedState;return Gx({ref:n,nextImpl:e}),function(){if((we&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function _m(e,n){return Sl(4,2,e,n)}function vm(e,n){return Sl(4,4,e,n)}function xm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ym(e,n,a){a=a!=null?a.concat([e]):null,Sl(4,4,xm.bind(null,n,e),a)}function ku(){}function Sm(e,n){var a=en();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Lu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Mm(e,n){var a=en();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Lu(n,o[1]))return o[0];if(o=e(),lr){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[o,n],o}function Xu(e,n,a){return a===void 0||(Vi&1073741824)!==0&&(ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Eg(),oe.lanes|=e,ba|=e,a)}function Em(e,n,a,o){return Wn(a,n)?a:Xr.current!==null?(e=Xu(e,a,o),Wn(e,n)||(rn=!0),e):(Vi&42)===0||(Vi&1073741824)!==0&&(ve&261930)===0?(rn=!0,e.memoizedState=a):(e=Eg(),oe.lanes|=e,ba|=e,n)}function Tm(e,n,a,o,u){var h=$.p;$.p=h!==0&&8>h?h:8;var x=N.T,b={};N.T=b,Yu(e,!1,n,a);try{var F=u(),nt=N.S;if(nt!==null&&nt(b,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ft=Px(F,o);ro(e,n,ft,Qn(e))}else ro(e,n,o,Qn(e))}catch(gt){ro(e,n,{then:function(){},status:"rejected",reason:gt},Qn())}finally{$.p=h,x!==null&&b.types!==null&&(x.types=b.types),N.T=x}}function Vx(){}function Wu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=bm(e).queue;Tm(e,u,n,j,a===null?Vx:function(){return Am(e),a(o)})}function bm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Am(e){var n=bm(e);n.next===null&&(n=e.alternate.memoizedState),ro(e,n.next.queue,{},Qn())}function qu(){return Sn(Eo)}function Rm(){return en().memoizedState}function Cm(){return en().memoizedState}function kx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=xa(a);var o=ya(n,e,a);o!==null&&(Gn(o,n,a),to(o,n,a)),n={cache:Su()},e.payload=n;return}n=n.return}}function Xx(e,n,a){var o=Qn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(e)?Dm(n,a):(a=uu(e,n,a,o),a!==null&&(Gn(a,e,o),Um(a,n,o)))}function wm(e,n,a){var o=Qn();ro(e,n,a,o)}function ro(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(e))Dm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var x=n.lastRenderedState,b=h(x,a);if(u.hasEagerState=!0,u.eagerState=b,Wn(b,x))return nl(e,n,u,0),Ge===null&&el(),!1}catch{}finally{}if(a=uu(e,n,u,o),a!==null)return Gn(a,e,o),Um(a,n,o),!0}return!1}function Yu(e,n,a,o){if(o={lane:2,revertLane:Af(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ml(e)){if(n)throw Error(r(479))}else n=uu(e,a,o,2),n!==null&&Gn(n,e,2)}function Ml(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function Dm(e,n){Wr=ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Um(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,zs(e,a)}}var so={readContext:Sn,use:vl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};so.useEffectEvent=Qe;var Lm={readContext:Sn,use:vl,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:Sn,useEffect:mm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,yl(4194308,4,xm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return yl(4194308,4,e,n)},useInsertionEffect:function(e,n){yl(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var o=e();if(lr){Nt(!0);try{e()}finally{Nt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Ln();if(a!==void 0){var u=a(n);if(lr){Nt(!0);try{a(n)}finally{Nt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Xx.bind(null,oe,e),[o.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Hu(e);var n=e.queue,a=wm.bind(null,oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(e,n){var a=Ln();return Xu(a,e,n)},useTransition:function(){var e=Hu(!1);return e=Tm.bind(null,oe,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=oe,u=Ln();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ge===null)throw Error(r(349));(ve&127)!==0||$p(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,mm(em.bind(null,o,h,e),[e]),o.flags|=2048,Yr(9,{destroy:void 0},tm.bind(null,o,h,a,n),null),a},useId:function(){var e=Ln(),n=Ge.identifierPrefix;if(Me){var a=Ci,o=Ri;a=(o&~(1<<32-$t(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Bx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:qu,useFormState:um,useActionState:um,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yu.bind(null,oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Bu,useCacheRefresh:function(){return Ln().memoizedState=kx.bind(null,oe)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ju={readContext:Sn,use:vl,useCallback:Sm,useContext:Sn,useEffect:Vu,useImperativeHandle:ym,useInsertionEffect:_m,useLayoutEffect:vm,useMemo:Mm,useReducer:xl,useRef:pm,useState:function(){return xl(ki)},useDebugValue:ku,useDeferredValue:function(e,n){var a=en();return Em(a,Pe.memoizedState,e,n)},useTransition:function(){var e=xl(ki)[0],n=en().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Jp,useId:Rm,useHostTransitionStatus:qu,useFormState:fm,useActionState:fm,useOptimistic:function(e,n){var a=en();return am(a,Pe,e,n)},useMemoCache:Bu,useCacheRefresh:Cm};ju.useEffectEvent=gm;var Nm={readContext:Sn,use:vl,useCallback:Sm,useContext:Sn,useEffect:Vu,useImperativeHandle:ym,useInsertionEffect:_m,useLayoutEffect:vm,useMemo:Mm,useReducer:Iu,useRef:pm,useState:function(){return Iu(ki)},useDebugValue:ku,useDeferredValue:function(e,n){var a=en();return Pe===null?Xu(a,e,n):Em(a,Pe.memoizedState,e,n)},useTransition:function(){var e=Iu(ki)[0],n=en().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:Jp,useId:Rm,useHostTransitionStatus:qu,useFormState:dm,useActionState:dm,useOptimistic:function(e,n){var a=en();return Pe!==null?am(a,Pe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Bu,useCacheRefresh:Cm};Nm.useEffectEvent=gm;function Zu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ku={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=xa(o);u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(Gn(n,e,o),to(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,o),n!==null&&(Gn(n,e,o),to(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=xa(a);o.tag=2,n!=null&&(o.callback=n),n=ya(e,o,a),n!==null&&(Gn(n,e,a),to(n,e,a))}};function Om(e,n,a,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):n.prototype&&n.prototype.isPureReactComponent?!qs(a,o)||!qs(u,h):!0}function zm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ku.enqueueReplaceState(n,n.state,null)}function cr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Pm(e){tl(e)}function Bm(e){console.error(e)}function Fm(e){tl(e)}function El(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Im(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qu(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){El(e,n)},a}function Hm(e){return e=xa(e),e.tag=3,e}function Gm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Im(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Im(n,a,o),typeof u!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Wx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ir(n,a,u,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return si===null?zl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Ef(e,o,u)),!1;case 22:return a.flags|=65536,o===ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Ef(e,o,u)),!1}throw Error(r(435,a.tag))}return Ef(e,o,u),zl(),!1}if(Me)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==gu&&(e=Error(r(422),{cause:o}),Zs(ni(e,a)))):(o!==gu&&(n=Error(r(423),{cause:o}),Zs(ni(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ni(o,a),u=Qu(e.stateNode,o,u),Ru(e,u),Je!==4&&(Je=2)),!1;var h=Error(r(520),{cause:o});if(h=ni(h,a),mo===null?mo=[h]:mo.push(h),Je!==4&&(Je=2),n===null)return!0;o=ni(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Qu(a.stateNode,o,e),Ru(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Aa===null||!Aa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Hm(u),Gm(u,e,a,o),Ru(a,u),!1}a=a.return}while(a!==null);return!1}var Ju=Error(r(461)),rn=!1;function Mn(e,n,a,o){n.child=e===null?Wp(n,null,a,o):or(n,e.child,a,o)}function Vm(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var x={};for(var b in o)b!=="ref"&&(x[b]=o[b])}else x=o;return ir(n),o=Nu(e,n,a,x,h,u),b=Ou(),e!==null&&!rn?(zu(e,n,u),Xi(e,n,u)):(Me&&b&&pu(n),n.flags|=1,Mn(e,n,o,u),n.child)}function km(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!fu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Xm(e,n,h,o,u)):(e=al(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!of(e,u)){var x=h.memoizedProps;if(a=a.compare,a=a!==null?a:qs,a(x,o)&&e.ref===n.ref)return Xi(e,n,u)}return n.flags|=1,e=Fi(h,o),e.ref=n.ref,e.return=n,n.child=e}function Xm(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(qs(h,o)&&e.ref===n.ref)if(rn=!1,n.pendingProps=o=h,of(e,u))(e.flags&131072)!==0&&(rn=!0);else return n.lanes=e.lanes,Xi(e,n,u)}return $u(e,n,a,o,u)}function Wm(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return qm(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ll(n,h!==null?h.cachePool:null),h!==null?jp(n,h):wu(),Zp(n);else return o=n.lanes=536870912,qm(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(ll(n,h.cachePool),jp(n,h),Ma(),n.memoizedState=null):(e!==null&&ll(n,null),wu(),Ma());return Mn(e,n,u,a),n.child}function oo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function qm(e,n,a,o,u){var h=Eu();return h=h===null?null:{parent:nn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&ll(n,null),wu(),Zp(n),e!==null&&Ir(e,n,o,!0),n.childLanes=u,null}function Tl(e,n){return n=Al({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Ym(e,n,a){return or(n,e.child,null,a),e=Tl(n,n.pendingProps),e.flags|=2,jn(n),n.memoizedState=null,e}function qx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=Tl(n,o),n.lanes=536870912,oo(null,e);if(Uu(n),(e=Xe)?(e=r_(e,ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Dp(e),a.return=n,n.child=a,yn=n,Xe=null)):e=null,e===null)throw ga(n);return n.lanes=536870912,null}return Tl(n,o)}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(Uu(n),u)if(n.flags&256)n.flags&=-257,n=Ym(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(rn||Ir(e,n,a,!1),u=(a&e.childLanes)!==0,rn||u){if(o=Ge,o!==null&&(x=Ai(o,a),x!==0&&x!==h.retryLane))throw h.retryLane=x,$a(e,x),Gn(o,e,x),Ju;zl(),n=Ym(e,n,a)}else e=h.treeContext,Xe=oi(x.nextSibling),yn=n,Me=!0,ma=null,ri=!1,e!==null&&Np(n,e),n=Tl(n,o),n.flags|=4096;return n}return e=Fi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function bl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function $u(e,n,a,o,u){return ir(n),a=Nu(e,n,a,o,void 0,u),o=Ou(),e!==null&&!rn?(zu(e,n,u),Xi(e,n,u)):(Me&&o&&pu(n),n.flags|=1,Mn(e,n,a,u),n.child)}function jm(e,n,a,o,u,h){return ir(n),n.updateQueue=null,a=Qp(n,o,a,u),Kp(e),o=Ou(),e!==null&&!rn?(zu(e,n,h),Xi(e,n,h)):(Me&&o&&pu(n),n.flags|=1,Mn(e,n,a,h),n.child)}function Zm(e,n,a,o,u){if(ir(n),n.stateNode===null){var h=zr,x=a.contextType;typeof x=="object"&&x!==null&&(h=Sn(x)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Ku,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},bu(n),x=a.contextType,h.context=typeof x=="object"&&x!==null?Sn(x):zr,h.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Zu(n,a,x,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(x=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),x!==h.state&&Ku.enqueueReplaceState(h,h.state,null),no(n,o,h,u),eo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var b=n.memoizedProps,F=cr(a,b);h.props=F;var nt=h.context,ft=a.contextType;x=zr,typeof ft=="object"&&ft!==null&&(x=Sn(ft));var gt=a.getDerivedStateFromProps;ft=typeof gt=="function"||typeof h.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b||nt!==x)&&zm(n,h,o,x),va=!1;var it=n.memoizedState;h.state=it,no(n,o,h,u),eo(),nt=n.memoizedState,b||it!==nt||va?(typeof gt=="function"&&(Zu(n,a,gt,o),nt=n.memoizedState),(F=va||Om(n,a,F,o,it,nt,x))?(ft||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),h.props=o,h.state=nt,h.context=x,o=F):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Au(e,n),x=n.memoizedProps,ft=cr(a,x),h.props=ft,gt=n.pendingProps,it=h.context,nt=a.contextType,F=zr,typeof nt=="object"&&nt!==null&&(F=Sn(nt)),b=a.getDerivedStateFromProps,(nt=typeof b=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x!==gt||it!==F)&&zm(n,h,o,F),va=!1,it=n.memoizedState,h.state=it,no(n,o,h,u),eo();var ct=n.memoizedState;x!==gt||it!==ct||va||e!==null&&e.dependencies!==null&&sl(e.dependencies)?(typeof b=="function"&&(Zu(n,a,b,o),ct=n.memoizedState),(ft=va||Om(n,a,ft,o,it,ct,F)||e!==null&&e.dependencies!==null&&sl(e.dependencies))?(nt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ct,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ct,F)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),h.props=o,h.state=ct,h.context=F,o=ft):(typeof h.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,bl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=or(n,e.child,null,u),n.child=or(n,null,a,u)):Mn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Xi(e,n,u),e}function Km(e,n,a,o){return er(),n.flags|=256,Mn(e,n,a,o),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:Ip()}}function nf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kn),e}function Qm(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,x;if((x=h)||(x=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?Sa(n):Ma(),(e=Xe)?(e=r_(e,ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Dp(e),a.return=n,n.child=a,yn=n,Xe=null)):e=null,e===null)throw ga(n);return If(e)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,u?(Ma(),u=n.mode,b=Al({mode:"hidden",children:b},u),o=tr(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=ef(a),o.childLanes=nf(e,x,a),n.memoizedState=tf,oo(null,o)):(Sa(n),af(n,b))}var F=e.memoizedState;if(F!==null&&(b=F.dehydrated,b!==null)){if(h)n.flags&256?(Sa(n),n.flags&=-257,n=rf(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),b=o.fallback,u=n.mode,o=Al({mode:"visible",children:o.children},u),b=tr(b,u,a,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,or(n,e.child,null,a),o=n.child,o.memoizedState=ef(a),o.childLanes=nf(e,x,a),n.memoizedState=tf,n=oo(null,o));else if(Sa(n),If(b)){if(x=b.nextSibling&&b.nextSibling.dataset,x)var nt=x.dgst;x=nt,o=Error(r(419)),o.stack="",o.digest=x,Zs({value:o,source:null,stack:null}),n=rf(e,n,a)}else if(rn||Ir(e,n,a,!1),x=(a&e.childLanes)!==0,rn||x){if(x=Ge,x!==null&&(o=Ai(x,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,$a(e,o),Gn(x,e,o),Ju;Ff(b)||zl(),n=rf(e,n,a)}else Ff(b)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,Xe=oi(b.nextSibling),yn=n,Me=!0,ma=null,ri=!1,e!==null&&Np(n,e),n=af(n,o.children),n.flags|=4096);return n}return u?(Ma(),b=o.fallback,u=n.mode,F=e.child,nt=F.sibling,o=Fi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,nt!==null?b=Fi(nt,b):(b=tr(b,u,a,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,oo(null,o),o=n.child,b=e.child.memoizedState,b===null?b=ef(a):(u=b.cachePool,u!==null?(F=nn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Ip(),b={baseLanes:b.baseLanes|a,cachePool:u}),o.memoizedState=b,o.childLanes=nf(e,x,a),n.memoizedState=tf,oo(e.child,o)):(Sa(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function af(e,n){return n=Al({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Al(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function rf(e,n,a){return or(n,e.child,null,a),e=af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Jm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),xu(e.return,n,a)}function sf(e,n,a,o,u,h){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=h)}function $m(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var x=tn.current,b=(x&2)!==0;if(b?(x=x&1|2,n.flags|=128):x&=1,yt(tn,x),Mn(e,n,o,a),o=Me?js:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jm(e,a,n);else if(e.tag===19)Jm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&pl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),sf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&pl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}sf(n,!0,a,null,h,o);break;case"together":sf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Xi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ir(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&sl(e)))}function Yx(e,n,a){switch(n.tag){case 3:Ft(n,n.stateNode.containerInfo),_a(n,nn,e.memoizedState.cache),er();break;case 27:case 5:Kt(n);break;case 4:Ft(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Sa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Qm(e,n,a):(Sa(n),e=Xi(e,n,a),e!==null?e.sibling:null);Sa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ir(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return $m(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(tn,tn.current),o)break;return null;case 22:return n.lanes=0,Wm(e,n,a,n.pendingProps);case 24:_a(n,nn,e.memoizedState.cache)}return Xi(e,n,a)}function tg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)rn=!0;else{if(!of(e,a)&&(n.flags&128)===0)return rn=!1,Yx(e,n,a);rn=(e.flags&131072)!==0}else rn=!1,Me&&(n.flags&1048576)!==0&&Lp(n,js,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=rr(n.elementType),n.type=e,typeof e=="function")fu(e)?(o=cr(e,o),n.tag=1,n=Zm(null,n,e,o,a)):(n.tag=0,n=$u(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=Vm(null,n,e,o,a);break t}else if(u===P){n.tag=14,n=km(null,n,e,o,a);break t}}throw n=tt(e)||e,Error(r(306,n,""))}}return n;case 0:return $u(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=cr(o,n.pendingProps),Zm(e,n,o,u,a);case 3:t:{if(Ft(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Au(e,n),no(n,o,null,a);var x=n.memoizedState;if(o=x.cache,_a(n,nn,o),o!==h.cache&&yu(n,[nn],a,!0),eo(),o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Km(e,n,o,a);break t}else if(o!==u){u=ni(Error(r(424)),n),Zs(u),n=Km(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xe=oi(e.firstChild),yn=n,Me=!0,ma=null,ri=!0,a=Wp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(er(),o===u){n=Xi(e,n,a);break t}Mn(e,n,o,a)}n=n.child}return n;case 26:return bl(e,n),e===null?(a=f_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,o=Vl(Mt.current).createElement(a),o[Ze]=n,o[vn]=e,En(o,a,e),X(o),n.stateNode=o):n.memoizedState=f_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Me&&(o=n.stateNode=l_(n.type,n.pendingProps,Mt.current),yn=n,ri=!0,u=Xe,Da(n.type)?(Hf=u,Xe=oi(o.firstChild)):Xe=u),Mn(e,n,n.pendingProps.children,a),bl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=o=Xe)&&(o=Ey(o,n.type,n.pendingProps,ri),o!==null?(n.stateNode=o,yn=n,Xe=oi(o.firstChild),ri=!1,u=!0):u=!1),u||ga(n)),Kt(n),u=n.type,h=n.pendingProps,x=e!==null?e.memoizedProps:null,o=h.children,zf(u,h)?o=null:x!==null&&zf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Nu(e,n,Fx,null,null,a),Eo._currentValue=u),bl(e,n),Mn(e,n,o,a),n.child;case 6:return e===null&&Me&&((e=a=Xe)&&(a=Ty(a,n.pendingProps,ri),a!==null?(n.stateNode=a,yn=n,Xe=null,e=!0):e=!1),e||ga(n)),null;case 13:return Qm(e,n,a);case 4:return Ft(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=or(n,null,o,a):Mn(e,n,o,a),n.child;case 11:return Vm(e,n,n.type,n.pendingProps,a);case 7:return Mn(e,n,n.pendingProps,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,_a(n,n.type,o.value),Mn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ir(n),u=Sn(u),o=o(u),n.flags|=1,Mn(e,n,o,a),n.child;case 14:return km(e,n,n.type,n.pendingProps,a);case 15:return Xm(e,n,n.type,n.pendingProps,a);case 19:return $m(e,n,a);case 31:return qx(e,n,a);case 22:return Wm(e,n,a,n.pendingProps);case 24:return ir(n),o=Sn(nn),e===null?(u=Eu(),u===null&&(u=Ge,h=Su(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},bu(n),_a(n,nn,u)):((e.lanes&a)!==0&&(Au(e,n),no(n,null,null,a),eo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),_a(n,nn,o)):(o=h.cache,_a(n,nn,o),o!==u.cache&&yu(n,[nn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(e){e.flags|=4}function lf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Rg())e.flags|=8192;else throw sr=ul,Tu}else e.flags&=-16777217}function eg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!g_(n))if(Rg())e.flags|=8192;else throw sr=ul,Tu}function Rl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ln():536870912,e.lanes|=n,Qr|=n)}function lo(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function We(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function jx(e,n,a){var o=n.pendingProps;switch(mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Gi(nn),jt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fr(n)?Wi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_u())),We(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(Wi(n),h!==null?(We(n),eg(n,h)):(We(n),lf(n,u,null,o,a))):h?h!==e.memoizedState?(Wi(n),We(n),eg(n,h)):(We(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Wi(n),We(n),lf(n,u,e,o,a)),null;case 27:if(Ve(n),a=Mt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}e=J.current,Fr(n)?Op(n):(e=l_(u,o,a),n.stateNode=e,Wi(n))}return We(n),null;case 5:if(Ve(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(h=J.current,Fr(n))Op(n);else{var x=Vl(Mt.current);switch(h){case 1:h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=x.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}h[Ze]=n,h[vn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)h.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=h;t:switch(En(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Wi(n)}}return We(n),lf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Wi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=Mt.current,Fr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=yn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Ze]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Qg(e.nodeValue,a)),e||ga(n,!0)}else e=Vl(e).createTextNode(o),e[Ze]=n,n.stateNode=e}return We(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Fr(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Ze]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),e=!1}else a=_u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return We(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Fr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Ze]=n}else er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=_u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Rl(n,n.updateQueue),We(n),null);case 4:return jt(),e===null&&Df(n.stateNode.containerInfo),We(n),null;case 10:return Gi(n.type),We(n),null;case 19:if(rt(tn),o=n.memoizedState,o===null)return We(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)lo(o,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=pl(e),h!==null){for(n.flags|=128,lo(o,!1),e=h.updateQueue,n.updateQueue=e,Rl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)wp(a,e),a=a.sibling;return yt(tn,tn.current&1|2),Me&&Ii(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&dt()>Ll&&(n.flags|=128,u=!0,lo(o,!1),n.lanes=4194304)}else{if(!u)if(e=pl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Rl(n,e),lo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Me)return We(n),null}else 2*dt()-o.renderingStartTime>Ll&&a!==536870912&&(n.flags|=128,u=!0,lo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=dt(),e.sibling=null,a=tn.current,yt(tn,u?a&1|2:a&1),Me&&Ii(n,o.treeForkCount),e):(We(n),null);case 22:case 23:return jn(n),Du(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&Rl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&rt(ar),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(nn),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Zx(e,n){switch(mu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gi(nn),jt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ve(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(r(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));er()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return rt(tn),null;case 4:return jt(),null;case 10:return Gi(n.type),null;case 22:case 23:return jn(n),Du(),e!==null&&rt(ar),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Gi(nn),null;case 25:return null;default:return null}}function ng(e,n){switch(mu(n),n.tag){case 3:Gi(nn),jt();break;case 26:case 27:case 5:Ve(n);break;case 4:jt();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:rt(tn);break;case 10:Gi(n.type);break;case 22:case 23:jn(n),Du(),e!==null&&rt(ar);break;case 24:Gi(nn)}}function co(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,x=a.inst;o=h(),x.destroy=o}a=a.next}while(a!==u)}}catch(b){Le(n,n.return,b)}}function Ea(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var x=o.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,u=n;var F=a,nt=b;try{nt()}catch(ft){Le(u,F,ft)}}}o=o.next}while(o!==h)}}catch(ft){Le(n,n.return,ft)}}function ig(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Yp(n,a)}catch(o){Le(e,e.return,o)}}}function ag(e,n,a){a.props=cr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Le(e,n,o)}}function uo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Le(e,n,u)}}function wi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Le(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Le(e,n,u)}else a.current=null}function rg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Le(e,e.return,u)}}function cf(e,n,a){try{var o=e.stateNode;_y(o,e.type,a,n),o[vn]=n}catch(u){Le(e,e.return,u)}}function sg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||sg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function Cl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Cl(e,n,a),e=e.sibling;e!==null;)Cl(e,n,a),e=e.sibling}function og(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,a),n[Ze]=e,n[vn]=a}catch(h){Le(e,e.return,h)}}var qi=!1,sn=!1,hf=!1,lg=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Kx(e,n){if(e=e.containerInfo,Nf=Zl,e=yp(e),au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var x=0,b=-1,F=-1,nt=0,ft=0,gt=e,it=null;e:for(;;){for(var ct;gt!==a||u!==0&&gt.nodeType!==3||(b=x+u),gt!==h||o!==0&&gt.nodeType!==3||(F=x+o),gt.nodeType===3&&(x+=gt.nodeValue.length),(ct=gt.firstChild)!==null;)it=gt,gt=ct;for(;;){if(gt===e)break e;if(it===a&&++nt===u&&(b=x),it===h&&++ft===o&&(F=x),(ct=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=ct}a=b===-1||F===-1?null:{start:b,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:e,selectionRange:a},Zl=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Bt=cr(a.type,u);e=o.getSnapshotBeforeUpdate(Bt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(Qt){Le(a,a.return,Qt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Bf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}}function cg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),o&4&&co(5,a);break;case 1:if(ji(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Le(a,a.return,x)}else{var u=cr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Le(a,a.return,x)}}o&64&&ig(a),o&512&&uo(a,a.return);break;case 3:if(ji(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Yp(e,n)}catch(x){Le(a,a.return,x)}}break;case 27:n===null&&o&4&&og(a);case 26:case 5:ji(e,a),n===null&&o&4&&rg(a),o&512&&uo(a,a.return);break;case 12:ji(e,a);break;case 31:ji(e,a),o&4&&hg(e,a);break;case 13:ji(e,a),o&4&&dg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ry.bind(null,a),by(e,a))));break;case 22:if(o=a.memoizedState!==null||qi,!o){n=n!==null&&n.memoizedState!==null||sn,u=qi;var h=sn;qi=o,(sn=n)&&!h?Zi(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),qi=u,sn=h}break;case 30:break;default:ji(e,a)}}function ug(e){var n=e.alternate;n!==null&&(e.alternate=null,ug(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Fs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,Bn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)fg(e,n,a),a=a.sibling}function fg(e,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Zt,a)}catch{}switch(a.tag){case 26:sn||wi(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||wi(a,n);var o=Ye,u=Bn;Da(a.type)&&(Ye=a.stateNode,Bn=!1),Yi(e,n,a),yo(a.stateNode),Ye=o,Bn=u;break;case 5:sn||wi(a,n);case 6:if(o=Ye,u=Bn,Ye=null,Yi(e,n,a),Ye=o,Bn=u,Ye!==null)if(Bn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(h){Le(a,n,h)}else try{Ye.removeChild(a.stateNode)}catch(h){Le(a,n,h)}break;case 18:Ye!==null&&(Bn?(e=Ye,i_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rs(e)):i_(Ye,a.stateNode));break;case 4:o=Ye,u=Bn,Ye=a.stateNode.containerInfo,Bn=!0,Yi(e,n,a),Ye=o,Bn=u;break;case 0:case 11:case 14:case 15:Ea(2,a,n),sn||Ea(4,a,n),Yi(e,n,a);break;case 1:sn||(wi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ag(a,n,o)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:sn=(o=sn)||a.memoizedState!==null,Yi(e,n,a),sn=o;break;default:Yi(e,n,a)}}function hg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rs(e)}catch(a){Le(n,n.return,a)}}}function dg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rs(e)}catch(a){Le(n,n.return,a)}}function Qx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new lg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new lg),n;default:throw Error(r(435,e.tag))}}function wl(e,n){var a=Qx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=sy.bind(null,e,o);o.then(u,u)}})}function Fn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,x=n,b=x;t:for(;b!==null;){switch(b.tag){case 27:if(Da(b.type)){Ye=b.stateNode,Bn=!1;break t}break;case 5:Ye=b.stateNode,Bn=!1;break t;case 3:case 4:Ye=b.stateNode.containerInfo,Bn=!0;break t}b=b.return}if(Ye===null)throw Error(r(160));fg(h,x,u),Ye=null,Bn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)pg(n,e),n=n.sibling}var vi=null;function pg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(n,e),In(e),o&4&&(Ea(3,e,e.return),co(3,e),Ea(5,e,e.return));break;case 1:Fn(n,e),In(e),o&512&&(sn||a===null||wi(a,a.return)),o&64&&qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=vi;if(Fn(n,e),In(e),o&512&&(sn||a===null||wi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Za]||h[Ze]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),En(h,o,a),h[Ze]=e,X(h),o=h;break t;case"link":var x=p_("link","href",u).get(o+(a.href||""));if(x){for(var b=0;b<x.length;b++)if(h=x[b],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(b,1);break e}}h=u.createElement(o),En(h,o,a),u.head.appendChild(h);break;case"meta":if(x=p_("meta","content",u).get(o+(a.content||""))){for(b=0;b<x.length;b++)if(h=x[b],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(b,1);break e}}h=u.createElement(o),En(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[Ze]=e,X(h),o=h}e.stateNode=o}else m_(u,e.type,e.stateNode);else e.stateNode=d_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?m_(u,e.type,e.stateNode):d_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,e),In(e),o&512&&(sn||a===null||wi(a,a.return)),a!==null&&o&4&&cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,e),In(e),o&512&&(sn||a===null||wi(a,a.return)),e.flags&32){u=e.stateNode;try{zn(u,"")}catch(Bt){Le(e,e.return,Bt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,cf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(hf=!0);break;case 6:if(Fn(n,e),In(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Bt){Le(e,e.return,Bt)}}break;case 3:if(Wl=null,u=vi,vi=kl(n.containerInfo),Fn(n,e),vi=u,In(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{rs(n.containerInfo)}catch(Bt){Le(e,e.return,Bt)}hf&&(hf=!1,mg(e));break;case 4:o=vi,vi=kl(e.stateNode.containerInfo),Fn(n,e),In(e),vi=o;break;case 12:Fn(n,e),In(e);break;case 31:Fn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wl(e,o)));break;case 13:Fn(n,e),In(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ul=dt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wl(e,o)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,nt=qi,ft=sn;if(qi=nt||u,sn=ft||F,Fn(n,e),sn=ft,qi=nt,In(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||qi||sn||ur(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(h=F.stateNode,u)x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{b=F.stateNode;var gt=F.memoizedProps.style,it=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Bt){Le(F,F.return,Bt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Bt){Le(F,F.return,Bt)}}}else if(n.tag===18){if(a===null){F=n;try{var ct=F.stateNode;u?a_(ct,!0):a_(F.stateNode,!1)}catch(Bt){Le(F,F.return,Bt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,wl(e,a))));break;case 19:Fn(n,e),In(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wl(e,o)));break;case 30:break;case 21:break;default:Fn(n,e),In(e)}}function In(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(sg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=uf(e);Cl(e,h,u);break;case 5:var x=a.stateNode;a.flags&32&&(zn(x,""),a.flags&=-33);var b=uf(e);Cl(e,b,x);break;case 3:case 4:var F=a.stateNode.containerInfo,nt=uf(e);ff(e,nt,F);break;default:throw Error(r(161))}}catch(ft){Le(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function mg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;mg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)cg(e,n.alternate,n),n=n.sibling}function ur(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),ur(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ag(n,n.return,a),ur(n);break;case 27:yo(n.stateNode);case 26:case 5:wi(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}e=e.sibling}}function Zi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,x=h.flags;switch(h.tag){case 0:case 11:case 15:Zi(u,h,a),co(4,h);break;case 1:if(Zi(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){Le(o,o.return,nt)}if(o=h,u=o.updateQueue,u!==null){var b=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)qp(F[u],b)}catch(nt){Le(o,o.return,nt)}}a&&x&64&&ig(h),uo(h,h.return);break;case 27:og(h);case 26:case 5:Zi(u,h,a),a&&o===null&&x&4&&rg(h),uo(h,h.return);break;case 12:Zi(u,h,a);break;case 31:Zi(u,h,a),a&&x&4&&hg(u,h);break;case 13:Zi(u,h,a),a&&x&4&&dg(u,h);break;case 22:h.memoizedState===null&&Zi(u,h,a),uo(h,h.return);break;case 30:break;default:Zi(u,h,a)}n=n.sibling}}function df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ks(a))}function pf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ks(e))}function xi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)gg(e,n,a,o),n=n.sibling}function gg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,o),u&2048&&co(9,n);break;case 1:xi(e,n,a,o);break;case 3:xi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ks(e)));break;case 12:if(u&2048){xi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,x=h.id,b=h.onPostCommit;typeof b=="function"&&b(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){Le(n,n.return,F)}}else xi(e,n,a,o);break;case 31:xi(e,n,a,o);break;case 13:xi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,x=n.alternate,n.memoizedState!==null?h._visibility&2?xi(e,n,a,o):fo(e,n):h._visibility&2?xi(e,n,a,o):(h._visibility|=2,jr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&df(x,n);break;case 24:xi(e,n,a,o),u&2048&&pf(n.alternate,n);break;default:xi(e,n,a,o)}}function jr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,x=n,b=a,F=o,nt=x.flags;switch(x.tag){case 0:case 11:case 15:jr(h,x,b,F,u),co(8,x);break;case 23:break;case 22:var ft=x.stateNode;x.memoizedState!==null?ft._visibility&2?jr(h,x,b,F,u):fo(h,x):(ft._visibility|=2,jr(h,x,b,F,u)),u&&nt&2048&&df(x.alternate,x);break;case 24:jr(h,x,b,F,u),u&&nt&2048&&pf(x.alternate,x);break;default:jr(h,x,b,F,u)}n=n.sibling}}function fo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:fo(a,o),u&2048&&df(o.alternate,o);break;case 24:fo(a,o),u&2048&&pf(o.alternate,o);break;default:fo(a,o)}n=n.sibling}}var ho=8192;function Zr(e,n,a){if(e.subtreeFlags&ho)for(e=e.child;e!==null;)_g(e,n,a),e=e.sibling}function _g(e,n,a){switch(e.tag){case 26:Zr(e,n,a),e.flags&ho&&e.memoizedState!==null&&By(a,vi,e.memoizedState,e.memoizedProps);break;case 5:Zr(e,n,a);break;case 3:case 4:var o=vi;vi=kl(e.stateNode.containerInfo),Zr(e,n,a),vi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ho,ho=16777216,Zr(e,n,a),ho=o):Zr(e,n,a));break;default:Zr(e,n,a)}}function vg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function po(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,yg(o,e)}vg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xg(e),e=e.sibling}function xg(e){switch(e.tag){case 0:case 11:case 15:po(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:po(e);break;case 12:po(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Dl(e)):po(e);break;default:po(e)}}function Dl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,yg(o,e)}vg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Dl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Dl(n));break;default:Dl(n)}e=e.sibling}}function yg(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ks(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else t:for(a=e;mn!==null;){o=mn;var u=o.sibling,h=o.return;if(ug(o),o===a){mn=null;break t}if(u!==null){u.return=h,mn=u;break t}mn=h}}}var Jx={getCacheForType:function(e){var n=Sn(nn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Sn(nn).controller.signal}},$x=typeof WeakMap=="function"?WeakMap:Map,we=0,Ge=null,de=null,ve=0,Ue=0,Zn=null,Ta=!1,Kr=!1,mf=!1,Ki=0,Je=0,ba=0,fr=0,gf=0,Kn=0,Qr=0,mo=null,Hn=null,_f=!1,Ul=0,Sg=0,Ll=1/0,Nl=null,Aa=null,un=0,Ra=null,Jr=null,Qi=0,vf=0,xf=null,Mg=null,go=0,yf=null;function Qn(){return(we&2)!==0&&ve!==0?ve&-ve:N.T!==null?Af():Ps()}function Eg(){if(Kn===0)if((ve&536870912)===0||Me){var e=ut;ut<<=1,(ut&3932160)===0&&(ut=262144),Kn=e}else Kn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Kn}function Gn(e,n,a){(e===Ge&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&($r(e,0),Ca(e,ve,Kn,!1)),_n(e,a),((we&2)===0||e!==Ge)&&(e===Ge&&((we&2)===0&&(fr|=a),Je===4&&Ca(e,ve,Kn,!1)),Di(e))}function Tg(e,n,a){if((we&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ee(e,n),u=o?ny(e,n):Mf(e,n,!0),h=o;do{if(u===0){Kr&&!o&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!ty(a)){u=Mf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var b=e;u=mo;var F=b.current.memoizedState.isDehydrated;if(F&&($r(b,x).flags|=256),x=Mf(b,x,!1),x!==2){if(mf&&!F){b.errorRecoveryDisabledLanes|=h,fr|=h,u=4;break t}h=Hn,Hn=u,h!==null&&(Hn===null?Hn=h:Hn.push.apply(Hn,h))}u=x}if(h=!1,u!==2)continue}}if(u===1){$r(e,0),Ca(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ca(o,n,Kn,!Ta);break t;case 2:Hn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ul+300-dt(),10<u)){if(Ca(o,n,Kn,!Ta),wt(o,0,!0)!==0)break t;Qi=n,o.timeoutHandle=e_(bg.bind(null,o,a,Hn,Nl,_f,n,Kn,fr,Qr,Ta,h,"Throttled",-0,0),u);break t}bg(o,a,Hn,Nl,_f,n,Kn,fr,Qr,Ta,h,null,-0,0)}}break}while(!0);Di(e)}function bg(e,n,a,o,u,h,x,b,F,nt,ft,gt,it,ct){if(e.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},_g(n,h,gt);var Bt=(h&62914560)===h?Ul-dt():(h&4194048)===h?Sg-dt():0;if(Bt=Fy(gt,Bt),Bt!==null){Qi=h,e.cancelPendingCommit=Bt(Ng.bind(null,e,n,h,a,o,u,x,b,F,ft,gt,null,it,ct)),Ca(e,h,x,!nt);return}}Ng(e,n,h,a,o,u,x,b,F)}function ty(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Wn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,o){n&=~gf,n&=~fr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-$t(u),x=1<<h;o[h]=-1,u&=~x}a!==0&&Os(e,a,n)}function Ol(){return(we&6)===0?(_o(0),!1):!0}function Sf(){if(de!==null){if(Ue===0)var e=de.return;else e=de,Hi=nr=null,Pu(e),kr=null,Js=0,e=de;for(;e!==null;)ng(e.alternate,e),e=e.return;de=null}}function $r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,yy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qi=0,Sf(),Ge=e,de=a=Fi(e.current,null),ve=n,Ue=0,Zn=null,Ta=!1,Kr=ee(e,n),mf=!1,Qr=Kn=gf=fr=ba=Je=0,Hn=mo=null,_f=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-$t(o),h=1<<u;n|=e[u],o&=~h}return Ki=n,el(),a}function Ag(e,n){oe=null,N.H=so,n===Vr||n===cl?(n=Vp(),Ue=3):n===Tu?(n=Vp(),Ue=4):Ue=n===Ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,de===null&&(Je=1,El(e,ni(n,e.current)))}function Rg(){var e=Yn.current;return e===null?!0:(ve&4194048)===ve?si===null:(ve&62914560)===ve||(ve&536870912)!==0?e===si:!1}function Cg(){var e=N.H;return N.H=so,e===null?so:e}function wg(){var e=N.A;return N.A=Jx,e}function zl(){Je=4,Ta||(ve&4194048)!==ve&&Yn.current!==null||(Kr=!0),(ba&134217727)===0&&(fr&134217727)===0||Ge===null||Ca(Ge,ve,Kn,!1)}function Mf(e,n,a){var o=we;we|=2;var u=Cg(),h=wg();(Ge!==e||ve!==n)&&(Nl=null,$r(e,n)),n=!1;var x=Je;t:do try{if(Ue!==0&&de!==null){var b=de,F=Zn;switch(Ue){case 8:Sf(),x=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var nt=Ue;if(Ue=0,Zn=null,ts(e,b,F,nt),a&&Kr){x=0;break t}break;default:nt=Ue,Ue=0,Zn=null,ts(e,b,F,nt)}}ey(),x=Je;break}catch(ft){Ag(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Hi=nr=null,we=o,N.H=u,N.A=h,de===null&&(Ge=null,ve=0,el()),x}function ey(){for(;de!==null;)Dg(de)}function ny(e,n){var a=we;we|=2;var o=Cg(),u=wg();Ge!==e||ve!==n?(Nl=null,Ll=dt()+500,$r(e,n)):Kr=ee(e,n);t:do try{if(Ue!==0&&de!==null){n=de;var h=Zn;e:switch(Ue){case 1:Ue=0,Zn=null,ts(e,n,h,1);break;case 2:case 9:if(Hp(h)){Ue=0,Zn=null,Ug(n);break}n=function(){Ue!==2&&Ue!==9||Ge!==e||(Ue=7),Di(e)},h.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Hp(h)?(Ue=0,Zn=null,Ug(n)):(Ue=0,Zn=null,ts(e,n,h,7));break;case 5:var x=null;switch(de.tag){case 26:x=de.memoizedState;case 5:case 27:var b=de;if(x?g_(x):b.stateNode.complete){Ue=0,Zn=null;var F=b.sibling;if(F!==null)de=F;else{var nt=b.return;nt!==null?(de=nt,Pl(nt)):de=null}break e}}Ue=0,Zn=null,ts(e,n,h,5);break;case 6:Ue=0,Zn=null,ts(e,n,h,6);break;case 8:Sf(),Je=6;break t;default:throw Error(r(462))}}iy();break}catch(ft){Ag(e,ft)}while(!0);return Hi=nr=null,N.H=o,N.A=u,we=a,de!==null?0:(Ge=null,ve=0,el(),Je)}function iy(){for(;de!==null&&!A();)Dg(de)}function Dg(e){var n=tg(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?Pl(e):de=n}function Ug(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=jm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=jm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Pu(n);default:ng(a,n),n=de=wp(n,Ki),n=tg(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?Pl(e):de=n}function ts(e,n,a,o){Hi=nr=null,Pu(n),kr=null,Js=0;var u=n.return;try{if(Wx(e,u,n,a,ve)){Je=1,El(e,ni(a,e.current)),de=null;return}}catch(h){if(u!==null)throw de=u,h;Je=1,El(e,ni(a,e.current)),de=null;return}n.flags&32768?(Me||o===1?e=!0:Kr||(ve&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=Yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Lg(n,e)):Pl(n)}function Pl(e){var n=e;do{if((n.flags&32768)!==0){Lg(n,Ta);return}e=n.return;var a=jx(n.alternate,n,Ki);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);Je===0&&(Je=5)}function Lg(e,n){do{var a=Zx(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Je=6,de=null}function Ng(e,n,a,o,u,h,x,b,F){e.cancelPendingCommit=null;do Bl();while(un!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=cu,pi(e,a,h,x,b,F),e===Ge&&(de=Ge=null,ve=0),Jr=n,Ra=e,Qi=a,vf=h,xf=u,Mg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,oy(Rt,function(){return Fg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=$.p,$.p=2,x=we,we|=4;try{Kx(e,n,a)}finally{we=x,$.p=u,N.T=o}}un=1,Og(),zg(),Pg()}}function Og(){if(un===1){un=0;var e=Ra,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=$.p;$.p=2;var u=we;we|=4;try{pg(n,e);var h=Of,x=yp(e.containerInfo),b=h.focusedElem,F=h.selectionRange;if(x!==b&&b&&b.ownerDocument&&xp(b.ownerDocument.documentElement,b)){if(F!==null&&au(b)){var nt=F.start,ft=F.end;if(ft===void 0&&(ft=nt),"selectionStart"in b)b.selectionStart=nt,b.selectionEnd=Math.min(ft,b.value.length);else{var gt=b.ownerDocument||document,it=gt&&gt.defaultView||window;if(it.getSelection){var ct=it.getSelection(),Bt=b.textContent.length,Qt=Math.min(F.start,Bt),Fe=F.end===void 0?Qt:Math.min(F.end,Bt);!ct.extend&&Qt>Fe&&(x=Fe,Fe=Qt,Qt=x);var K=vp(b,Qt),G=vp(b,Fe);if(K&&G&&(ct.rangeCount!==1||ct.anchorNode!==K.node||ct.anchorOffset!==K.offset||ct.focusNode!==G.node||ct.focusOffset!==G.offset)){var et=gt.createRange();et.setStart(K.node,K.offset),ct.removeAllRanges(),Qt>Fe?(ct.addRange(et),ct.extend(G.node,G.offset)):(et.setEnd(G.node,G.offset),ct.addRange(et))}}}}for(gt=[],ct=b;ct=ct.parentNode;)ct.nodeType===1&&gt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var pt=gt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Zl=!!Nf,Of=Nf=null}finally{we=u,$.p=o,N.T=a}}e.current=n,un=2}}function zg(){if(un===2){un=0;var e=Ra,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=$.p;$.p=2;var u=we;we|=4;try{cg(e,n.alternate,n)}finally{we=u,$.p=o,N.T=a}}un=3}}function Pg(){if(un===4||un===3){un=0,at();var e=Ra,n=Jr,a=Qi,o=Mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,Jr=Ra=null,Bg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Aa=null),Rr(a),n=n.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Zt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=$.p,$.p=2,N.T=null;try{for(var h=e.onRecoverableError,x=0;x<o.length;x++){var b=o[x];h(b.value,{componentStack:b.stack})}}finally{N.T=n,$.p=u}}(Qi&3)!==0&&Bl(),Di(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===yf?go++:(go=0,yf=e):go=0,_o(0)}}function Bg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ks(n)))}function Bl(){return Og(),zg(),Pg(),Fg()}function Fg(){if(un!==5)return!1;var e=Ra,n=vf;vf=0;var a=Rr(Qi),o=N.T,u=$.p;try{$.p=32>a?32:a,N.T=null,a=xf,xf=null;var h=Ra,x=Qi;if(un=0,Jr=Ra=null,Qi=0,(we&6)!==0)throw Error(r(331));var b=we;if(we|=4,xg(h.current),gg(h,h.current,x,a),we=b,_o(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Zt,h)}catch{}return!0}finally{$.p=u,N.T=o,Bg(e,n)}}function Ig(e,n,a){n=ni(a,n),n=Qu(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(_n(e,2),Di(e))}function Le(e,n,a){if(e.tag===3)Ig(e,e,a);else for(;n!==null;){if(n.tag===3){Ig(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=ni(a,e),a=Hm(2),o=ya(n,a,2),o!==null&&(Gm(a,o,n,e),_n(o,2),Di(o));break}}n=n.return}}function Ef(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new $x;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(mf=!0,u.add(a),e=ay.bind(null,e,n,a),n.then(e,e))}function ay(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ge===e&&(ve&a)===a&&(Je===4||Je===3&&(ve&62914560)===ve&&300>dt()-Ul?(we&2)===0&&$r(e,0):gf|=a,Qr===ve&&(Qr=0)),Di(e)}function Hg(e,n){n===0&&(n=ln()),e=$a(e,n),e!==null&&(_n(e,n),Di(e))}function ry(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Hg(e,a)}function sy(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Hg(e,a)}function oy(e,n){return Vt(e,n)}var Fl=null,es=null,Tf=!1,Il=!1,bf=!1,wa=0;function Di(e){e!==es&&e.next===null&&(es===null?Fl=es=e:es=es.next=e),Il=!0,Tf||(Tf=!0,cy())}function _o(e,n){if(!bf&&Il){bf=!0;do for(var a=!1,o=Fl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var x=o.suspendedLanes,b=o.pingedLanes;h=(1<<31-$t(42|e)+1)-1,h&=u&~(x&~b),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Xg(o,h))}else h=ve,h=wt(o,o===Ge?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||ee(o,h)||(a=!0,Xg(o,h));o=o.next}while(a);bf=!1}}function ly(){Gg()}function Gg(){Il=Tf=!1;var e=0;wa!==0&&xy()&&(e=wa);for(var n=dt(),a=null,o=Fl;o!==null;){var u=o.next,h=Vg(o,n);h===0?(o.next=null,a===null?Fl=u:a.next=u,u===null&&(es=a)):(a=o,(e!==0||(h&3)!==0)&&(Il=!0)),o=u}un!==0&&un!==5||_o(e),wa!==0&&(wa=0)}function Vg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var x=31-$t(h),b=1<<x,F=u[x];F===-1?((b&a)===0||(b&o)!==0)&&(u[x]=qe(b,n)):F<=n&&(e.expiredLanes|=b),h&=~b}if(n=Ge,a=ve,a=wt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&L(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ee(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&L(o),Rr(a)){case 2:case 8:a=Ht;break;case 32:a=Rt;break;case 268435456:a=_e;break;default:a=Rt}return o=kg.bind(null,e),a=Vt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&L(o),e.callbackPriority=2,e.callbackNode=null,2}function kg(e,n){if(un!==0&&un!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bl()&&e.callbackNode!==a)return null;var o=ve;return o=wt(e,e===Ge?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Tg(e,o,n),Vg(e,dt()),e.callbackNode!=null&&e.callbackNode===a?kg.bind(null,e):null)}function Xg(e,n){if(Bl())return null;Tg(e,n,!0)}function cy(){Sy(function(){(we&6)!==0?Vt(mt,ly):Gg()})}function Af(){if(wa===0){var e=Hr;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),wa=e}return wa}function Wg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yo(""+e)}function qg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function uy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Wg((u[vn]||null).action),x=o.submitter;x&&(n=(n=x[vn]||null)?Wg(n.formAction):x.getAttribute("formAction"),n!==null&&(h=n,x=null));var b=new Qo("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(wa!==0){var F=x?qg(u,x):new FormData(u);Wu(a,{pending:!0,data:F,method:u.method,action:h},null,F)}}else typeof h=="function"&&(b.preventDefault(),F=x?qg(u,x):new FormData(u),Wu(a,{pending:!0,data:F,method:u.method,action:h},h,F))},currentTarget:u}]})}}for(var Rf=0;Rf<lu.length;Rf++){var Cf=lu[Rf],fy=Cf.toLowerCase(),hy=Cf[0].toUpperCase()+Cf.slice(1);_i(fy,"on"+hy)}_i(Ep,"onAnimationEnd"),_i(Tp,"onAnimationIteration"),_i(bp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Cx,"onTransitionRun"),_i(wx,"onTransitionStart"),_i(Dx,"onTransitionCancel"),_i(Ap,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vo));function Yg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var x=o.length-1;0<=x;x--){var b=o[x],F=b.instance,nt=b.currentTarget;if(b=b.listener,F!==h&&u.isPropagationStopped())break t;h=b,u.currentTarget=nt;try{h(u)}catch(ft){tl(ft)}u.currentTarget=null,h=F}else for(x=0;x<o.length;x++){if(b=o[x],F=b.instance,nt=b.currentTarget,b=b.listener,F!==h&&u.isPropagationStopped())break t;h=b,u.currentTarget=nt;try{h(u)}catch(ft){tl(ft)}u.currentTarget=null,h=F}}}}function pe(e,n){var a=n[Bs];a===void 0&&(a=n[Bs]=new Set);var o=e+"__bubble";a.has(o)||(jg(n,e,2,!1),a.add(o))}function wf(e,n,a){var o=0;n&&(o|=4),jg(a,e,o,n)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function Df(e){if(!e[Hl]){e[Hl]=!0,Et.forEach(function(a){a!=="selectionchange"&&(dy.has(a)||wf(a,!1,e),wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Hl]||(n[Hl]=!0,wf("selectionchange",!1,n))}}function jg(e,n,a,o){switch(E_(n)){case 2:var u=Gy;break;case 8:u=Vy;break;default:u=Wf}a=u.bind(null,n,a,e),u=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Uf(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var b=o.stateNode.containerInfo;if(b===u)break;if(x===4)for(x=o.return;x!==null;){var F=x.tag;if((F===3||F===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;b!==null;){if(x=C(b),x===null)return;if(F=x.tag,F===5||F===6||F===26||F===27){o=h=x;continue t}b=b.parentNode}}o=o.return}$d(function(){var nt=h,ft=Yc(a),gt=[];t:{var it=Rp.get(e);if(it!==void 0){var ct=Qo,Bt=e;switch(e){case"keypress":if(Zo(a)===0)break t;case"keydown":case"keyup":ct=sx;break;case"focusin":Bt="focus",ct=$c;break;case"focusout":Bt="blur",ct=$c;break;case"beforeblur":case"afterblur":ct=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=cx;break;case Ep:case Tp:case bp:ct=Q0;break;case Ap:ct=fx;break;case"scroll":case"scrollend":ct=q0;break;case"wheel":ct=dx;break;case"copy":case"cut":case"paste":ct=$0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=ap;break;case"toggle":case"beforetoggle":ct=mx}var Qt=(n&4)!==0,Fe=!Qt&&(e==="scroll"||e==="scrollend"),K=Qt?it!==null?it+"Capture":null:it;Qt=[];for(var G=nt,et;G!==null;){var pt=G;if(et=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||et===null||K===null||(pt=Is(G,K),pt!=null&&Qt.push(xo(G,pt,et))),Fe)break;G=G.return}0<Qt.length&&(it=new ct(it,Bt,null,a,ft),gt.push({event:it,listeners:Qt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",it&&a!==qc&&(Bt=a.relatedTarget||a.fromElement)&&(C(Bt)||Bt[zi]))break t;if((ct||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,ct?(Bt=a.relatedTarget||a.toElement,ct=nt,Bt=Bt?C(Bt):null,Bt!==null&&(Fe=c(Bt),Qt=Bt.tag,Bt!==Fe||Qt!==5&&Qt!==27&&Qt!==6)&&(Bt=null)):(ct=null,Bt=nt),ct!==Bt)){if(Qt=np,pt="onMouseLeave",K="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Qt=ap,pt="onPointerLeave",K="onPointerEnter",G="pointer"),Fe=ct==null?it:st(ct),et=Bt==null?it:st(Bt),it=new Qt(pt,G+"leave",ct,a,ft),it.target=Fe,it.relatedTarget=et,pt=null,C(ft)===nt&&(Qt=new Qt(K,G+"enter",Bt,a,ft),Qt.target=et,Qt.relatedTarget=Fe,pt=Qt),Fe=pt,ct&&Bt)e:{for(Qt=py,K=ct,G=Bt,et=0,pt=K;pt;pt=Qt(pt))et++;pt=0;for(var qt=G;qt;qt=Qt(qt))pt++;for(;0<et-pt;)K=Qt(K),et--;for(;0<pt-et;)G=Qt(G),pt--;for(;et--;){if(K===G||G!==null&&K===G.alternate){Qt=K;break e}K=Qt(K),G=Qt(G)}Qt=null}else Qt=null;ct!==null&&Zg(gt,it,ct,Qt,!1),Bt!==null&&Fe!==null&&Zg(gt,Fe,Bt,Qt,!0)}}t:{if(it=nt?st(nt):window,ct=it.nodeName&&it.nodeName.toLowerCase(),ct==="select"||ct==="input"&&it.type==="file")var Ae=hp;else if(up(it))if(dp)Ae=bx;else{Ae=Ex;var It=Mx}else ct=it.nodeName,!ct||ct.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?nt&&Wc(nt.elementType)&&(Ae=hp):Ae=Tx;if(Ae&&(Ae=Ae(e,nt))){fp(gt,Ae,a,ft);break t}It&&It(e,it,nt),e==="focusout"&&nt&&it.type==="number"&&nt.memoizedProps.value!=null&&bn(it,"number",it.value)}switch(It=nt?st(nt):window,e){case"focusin":(up(It)||It.contentEditable==="true")&&(Lr=It,ru=nt,Ys=null);break;case"focusout":Ys=ru=Lr=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,Sp(gt,a,ft);break;case"selectionchange":if(Rx)break;case"keydown":case"keyup":Sp(gt,a,ft)}var le;if(eu)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Ur?lp(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(rp&&a.locale!=="ko"&&(Ur||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Ur&&(le=tp()):(da=ft,Kc="value"in da?da.value:da.textContent,Ur=!0)),It=Gl(nt,xe),0<It.length&&(xe=new ip(xe,e,null,a,ft),gt.push({event:xe,listeners:It}),le?xe.data=le:(le=cp(a),le!==null&&(xe.data=le)))),(le=_x?vx(e,a):xx(e,a))&&(xe=Gl(nt,"onBeforeInput"),0<xe.length&&(It=new ip("onBeforeInput","beforeinput",null,a,ft),gt.push({event:It,listeners:xe}),It.data=le)),uy(gt,e,nt,a,ft)}Yg(gt,n)})}function xo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Gl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Is(e,a),u!=null&&o.unshift(xo(e,u,h)),u=Is(e,n),u!=null&&o.push(xo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function py(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zg(e,n,a,o,u){for(var h=n._reactName,x=[];a!==null&&a!==o;){var b=a,F=b.alternate,nt=b.stateNode;if(b=b.tag,F!==null&&F===o)break;b!==5&&b!==26&&b!==27||nt===null||(F=nt,u?(nt=Is(a,h),nt!=null&&x.unshift(xo(a,nt,F))):u||(nt=Is(a,h),nt!=null&&x.push(xo(a,nt,F)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var my=/\r\n?/g,gy=/\u0000|\uFFFD/g;function Kg(e){return(typeof e=="string"?e:""+e).replace(my,`
`).replace(gy,"")}function Qg(e,n){return n=Kg(n),Kg(e)===n}function Be(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||zn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&zn(e,""+o);break;case"className":ke(e,"class",o);break;case"tabIndex":ke(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ke(e,a,o);break;case"style":Qd(e,o,h);break;case"data":if(n!=="object"){ke(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Yo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",u.name,u,null),Be(e,n,"formEncType",u.formEncType,u,null),Be(e,n,"formMethod",u.formMethod,u,null),Be(e,n,"formTarget",u.formTarget,u,null)):(Be(e,n,"encType",u.encType,u,null),Be(e,n,"method",u.method,u,null),Be(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Yo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Pi);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Yo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":pe("beforetoggle",e),pe("toggle",e),Se(e,"popover",o);break;case"xlinkActuate":be(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":be(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":be(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":be(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":be(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":be(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":be(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":be(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":be(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Se(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=X0.get(a)||a,Se(e,a,o))}}function Lf(e,n,a,o,u,h){switch(a){case"style":Qd(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?zn(e,o):(typeof o=="number"||typeof o=="bigint")&&zn(e,""+o);break;case"onScroll":o!=null&&pe("scroll",e);break;case"onScrollEnd":o!=null&&pe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[vn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Se(e,a,o)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pe("error",e),pe("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var x=a[h];if(x!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,h,x,a,null)}}u&&Be(e,n,"srcSet",a.srcSet,a,null),o&&Be(e,n,"src",a.src,a,null);return;case"input":pe("invalid",e);var b=h=x=u=null,F=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":u=ft;break;case"type":x=ft;break;case"checked":F=ft;break;case"defaultChecked":nt=ft;break;case"value":h=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Be(e,n,o,ft,a,null)}}Un(e,h,b,F,nt,x,u,!1);return;case"select":pe("invalid",e),o=x=h=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":h=b;break;case"defaultValue":x=b;break;case"multiple":o=b;default:Be(e,n,u,b,a,null)}n=h,a=x,e.multiple=!!o,n!=null?Ke(e,!!o,n,!1):a!=null&&Ke(e,!!o,a,!0);return;case"textarea":pe("invalid",e),h=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(b=a[x],b!=null))switch(x){case"value":o=b;break;case"defaultValue":u=b;break;case"children":h=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Be(e,n,x,b,a,null)}Cr(e,o,u,h);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(o=a[F],o!=null))switch(F){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Be(e,n,F,o,a,null)}return;case"dialog":pe("beforetoggle",e),pe("toggle",e),pe("cancel",e),pe("close",e);break;case"iframe":case"object":pe("load",e);break;case"video":case"audio":for(o=0;o<vo.length;o++)pe(vo[o],e);break;case"image":pe("error",e),pe("load",e);break;case"details":pe("toggle",e);break;case"embed":case"source":case"link":pe("error",e),pe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,nt,o,a,null)}return;default:if(Wc(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Lf(e,n,ft,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Be(e,n,b,o,a,null))}function _y(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,x=null,b=null,F=null,nt=null,ft=null;for(ct in a){var gt=a[ct];if(a.hasOwnProperty(ct)&&gt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":F=gt;default:o.hasOwnProperty(ct)||Be(e,n,ct,null,o,gt)}}for(var it in o){var ct=o[it];if(gt=a[it],o.hasOwnProperty(it)&&(ct!=null||gt!=null))switch(it){case"type":h=ct;break;case"name":u=ct;break;case"checked":nt=ct;break;case"defaultChecked":ft=ct;break;case"value":x=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==gt&&Be(e,n,it,ct,o,gt)}}ze(e,x,b,F,nt,ft,h,u);return;case"select":ct=x=b=it=null;for(h in a)if(F=a[h],a.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":ct=F;default:o.hasOwnProperty(h)||Be(e,n,h,null,o,F)}for(u in o)if(h=o[u],F=a[u],o.hasOwnProperty(u)&&(h!=null||F!=null))switch(u){case"value":it=h;break;case"defaultValue":b=h;break;case"multiple":x=h;default:h!==F&&Be(e,n,u,h,o,F)}n=b,a=x,o=ct,it!=null?Ke(e,!!a,it,!1):!!o!=!!a&&(n!=null?Ke(e,!!a,n,!0):Ke(e,!!a,a?[]:"",!1));return;case"textarea":ct=it=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Be(e,n,b,null,o,u)}for(x in o)if(u=o[x],h=a[x],o.hasOwnProperty(x)&&(u!=null||h!=null))switch(x){case"value":it=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Be(e,n,x,u,o,h)}xn(e,it,ct);return;case"option":for(var Bt in a)if(it=a[Bt],a.hasOwnProperty(Bt)&&it!=null&&!o.hasOwnProperty(Bt))switch(Bt){case"selected":e.selected=!1;break;default:Be(e,n,Bt,null,o,it)}for(F in o)if(it=o[F],ct=a[F],o.hasOwnProperty(F)&&it!==ct&&(it!=null||ct!=null))switch(F){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Be(e,n,F,it,o,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)it=a[Qt],a.hasOwnProperty(Qt)&&it!=null&&!o.hasOwnProperty(Qt)&&Be(e,n,Qt,null,o,it);for(nt in o)if(it=o[nt],ct=a[nt],o.hasOwnProperty(nt)&&it!==ct&&(it!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Be(e,n,nt,it,o,ct)}return;default:if(Wc(n)){for(var Fe in a)it=a[Fe],a.hasOwnProperty(Fe)&&it!==void 0&&!o.hasOwnProperty(Fe)&&Lf(e,n,Fe,void 0,o,it);for(ft in o)it=o[ft],ct=a[ft],!o.hasOwnProperty(ft)||it===ct||it===void 0&&ct===void 0||Lf(e,n,ft,it,o,ct);return}}for(var K in a)it=a[K],a.hasOwnProperty(K)&&it!=null&&!o.hasOwnProperty(K)&&Be(e,n,K,null,o,it);for(gt in o)it=o[gt],ct=a[gt],!o.hasOwnProperty(gt)||it===ct||it==null&&ct==null||Be(e,n,gt,it,o,ct)}function Jg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,x=u.initiatorType,b=u.duration;if(h&&b&&Jg(x)){for(x=0,b=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],nt=F.startTime;if(nt>b)break;var ft=F.transferSize,gt=F.initiatorType;ft&&Jg(gt)&&(F=F.responseEnd,x+=ft*(F<b?1:(b-nt)/(F-nt)))}if(--o,n+=8*(h+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nf=null,Of=null;function Vl(e){return e.nodeType===9?e:e.ownerDocument}function $g(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function xy(){var e=window.event;return e&&e.type==="popstate"?e===Pf?!1:(Pf=e,!0):(Pf=null,!1)}var e_=typeof setTimeout=="function"?setTimeout:void 0,yy=typeof clearTimeout=="function"?clearTimeout:void 0,n_=typeof Promise=="function"?Promise:void 0,Sy=typeof queueMicrotask=="function"?queueMicrotask:typeof n_<"u"?function(e){return n_.resolve(null).then(e).catch(My)}:e_;function My(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function i_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),rs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")yo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,yo(a);for(var h=a.firstChild;h;){var x=h.nextSibling,b=h.nodeName;h[Za]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=x}}else a==="body"&&yo(e.ownerDocument.body);a=u}while(a);rs(n)}function a_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Bf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bf(a),Fs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ey(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Za])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=oi(e.nextSibling),e===null)break}return null}function Ty(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=oi(e.nextSibling),e===null))return null;return e}function r_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=oi(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$?"||e.data==="$~"}function If(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function by(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function oi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Hf=null;function s_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return oi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function o_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function l_(e,n,a){switch(n=Vl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Fs(e)}var li=new Map,c_=new Set;function kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=$.d;$.d={f:Ay,r:Ry,D:Cy,C:wy,L:Dy,m:Uy,X:Ny,S:Ly,M:Oy};function Ay(){var e=Ji.f(),n=Ol();return e||n}function Ry(e){var n=q(e);n!==null&&n.tag===5&&n.type==="form"?Am(n):Ji.r(e)}var ns=typeof document>"u"?null:document;function u_(e,n,a){var o=ns;if(o&&typeof n=="string"&&n){var u=pn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),c_.has(u)||(c_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",e),X(n),o.head.appendChild(n)))}}function Cy(e){Ji.D(e),u_("dns-prefetch",e,null)}function wy(e,n){Ji.C(e,n),u_("preconnect",e,n)}function Dy(e,n,a){Ji.L(e,n,a);var o=ns;if(o&&e&&n){var u='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pn(a.imageSizes)+'"]')):u+='[href="'+pn(e)+'"]';var h=u;switch(n){case"style":h=is(e);break;case"script":h=as(e)}li.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(So(h))||n==="script"&&o.querySelector(Mo(h))||(n=o.createElement("link"),En(n,"link",e),X(n),o.head.appendChild(n)))}}function Uy(e,n){Ji.m(e,n);var a=ns;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pn(o)+'"][href="'+pn(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=as(e)}if(!li.has(h)&&(e=_({rel:"modulepreload",href:e},n),li.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Mo(h)))return}o=a.createElement("link"),En(o,"link",e),X(o),a.head.appendChild(o)}}}function Ly(e,n,a){Ji.S(e,n,a);var o=ns;if(o&&e){var u=ot(o).hoistableStyles,h=is(e);n=n||"default";var x=u.get(h);if(!x){var b={loading:0,preload:null};if(x=o.querySelector(So(h)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(h))&&Gf(e,a);var F=x=o.createElement("link");X(F),En(F,"link",e),F._p=new Promise(function(nt,ft){F.onload=nt,F.onerror=ft}),F.addEventListener("load",function(){b.loading|=1}),F.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Xl(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:b},u.set(h,x)}}}function Ny(e,n){Ji.X(e,n);var a=ns;if(a&&e){var o=ot(a).hoistableScripts,u=as(e),h=o.get(u);h||(h=a.querySelector(Mo(u)),h||(e=_({src:e,async:!0},n),(n=li.get(u))&&Vf(e,n),h=a.createElement("script"),X(h),En(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Oy(e,n){Ji.M(e,n);var a=ns;if(a&&e){var o=ot(a).hoistableScripts,u=as(e),h=o.get(u);h||(h=a.querySelector(Mo(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=li.get(u))&&Vf(e,n),h=a.createElement("script"),X(h),En(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function f_(e,n,a,o){var u=(u=Mt.current)?kl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=ot(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=is(a.href);var h=ot(u).hoistableStyles,x=h.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,x),(h=u.querySelector(So(e)))&&!h._p&&(x.instance=h,x.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),h||zy(u,e,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=ot(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function is(e){return'href="'+pn(e)+'"'}function So(e){return'link[rel="stylesheet"]['+e+"]"}function h_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function zy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),X(n),e.head.appendChild(n))}function as(e){return'[src="'+pn(e)+'"]'}function Mo(e){return"script[async]"+e}function d_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+pn(a.href)+'"]');if(o)return n.instance=o,X(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),X(o),En(o,"style",u),Xl(o,a.precedence,e),n.instance=o;case"stylesheet":u=is(a.href);var h=e.querySelector(So(u));if(h)return n.state.loading|=4,n.instance=h,X(h),h;o=h_(a),(u=li.get(u))&&Gf(o,u),h=(e.ownerDocument||e).createElement("link"),X(h);var x=h;return x._p=new Promise(function(b,F){x.onload=b,x.onerror=F}),En(h,"link",o),n.state.loading|=4,Xl(h,a.precedence,e),n.instance=h;case"script":return h=as(a.src),(u=e.querySelector(Mo(h)))?(n.instance=u,X(u),u):(o=a,(u=li.get(h))&&(o=_({},a),Vf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),X(u),En(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Xl(o,a.precedence,e));return n.instance}function Xl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,x=0;x<o.length;x++){var b=o[x];if(b.dataset.precedence===n)h=b;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Wl=null;function p_(e,n,a){if(Wl===null){var o=new Map,u=Wl=new Map;u.set(a,o)}else u=Wl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Za]||h[Ze]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var x=h.getAttribute(n)||"";x=e+x;var b=o.get(x);b?b.push(h):o.set(x,[h])}}return o}function m_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Py(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function g_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function By(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=is(o.href),h=n.querySelector(So(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ql.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,X(h);return}h=n.ownerDocument||n,o=h_(o),(u=li.get(u))&&Gf(o,u),h=h.createElement("link"),X(h);var x=h;x._p=new Promise(function(b,F){x.onload=b,x.onerror=F}),En(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ql.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var kf=0;function Fy(e,n){return e.stylesheets&&e.count===0&&jl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&jl(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&kf===0&&(kf=62500*vy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&jl(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>kf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yl=null;function jl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yl=new Map,n.forEach(Iy,e),Yl=null,ql.call(e))}function Iy(e,n){if(!(n.state.loading&4)){var a=Yl.get(e);if(a)var o=a.get(null);else{a=new Map,Yl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var x=u[h];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),h=a.get(x)||o,h===o&&a.set(null,u),a.set(x,u),this.count++,o=ql.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Eo={$$typeof:U,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Hy(e,n,a,o,u,h,x,b,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function __(e,n,a,o,u,h,x,b,F,nt,ft,gt){return e=new Hy(e,n,a,x,F,nt,ft,gt,b),n=1,h===!0&&(n|=24),h=qn(3,null,null,n),e.current=h,h.stateNode=e,n=Su(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},bu(h),e}function v_(e){return e?(e=zr,e):zr}function x_(e,n,a,o,u,h){u=v_(u),o.context===null?o.context=u:o.pendingContext=u,o=xa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=ya(e,o,n),a!==null&&(Gn(a,e,n),to(a,e,n))}function y_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Xf(e,n){y_(e,n),(e=e.alternate)&&y_(e,n)}function S_(e){if(e.tag===13||e.tag===31){var n=$a(e,67108864);n!==null&&Gn(n,e,67108864),Xf(e,67108864)}}function M_(e){if(e.tag===13||e.tag===31){var n=Qn();n=Ya(n);var a=$a(e,n);a!==null&&Gn(a,e,n),Xf(e,n)}}var Zl=!0;function Gy(e,n,a,o){var u=N.T;N.T=null;var h=$.p;try{$.p=2,Wf(e,n,a,o)}finally{$.p=h,N.T=u}}function Vy(e,n,a,o){var u=N.T;N.T=null;var h=$.p;try{$.p=8,Wf(e,n,a,o)}finally{$.p=h,N.T=u}}function Wf(e,n,a,o){if(Zl){var u=qf(o);if(u===null)Uf(e,n,o,Kl,a),T_(e,o);else if(Xy(u,e,n,a,o))o.stopPropagation();else if(T_(e,o),n&4&&-1<ky.indexOf(e)){for(;u!==null;){var h=q(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var x=At(h.pendingLanes);if(x!==0){var b=h;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var F=1<<31-$t(x);b.entanglements[1]|=F,x&=~F}Di(h),(we&6)===0&&(Ll=dt()+500,_o(0))}}break;case 31:case 13:b=$a(h,2),b!==null&&Gn(b,h,2),Ol(),Xf(h,2)}if(h=qf(o),h===null&&Uf(e,n,o,Kl,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Uf(e,n,o,null,a)}}function qf(e){return e=Yc(e),Yf(e)}var Kl=null;function Yf(e){if(Kl=null,e=C(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Kl=e,null}function E_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(St()){case mt:return 2;case Ht:return 8;case Rt:case zt:return 32;case _e:return 268435456;default:return 32}default:return 32}}var jf=!1,Ua=null,La=null,Na=null,To=new Map,bo=new Map,Oa=[],ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function T_(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":To.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function Ao(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=q(n),n!==null&&S_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Xy(e,n,a,o,u){switch(n){case"focusin":return Ua=Ao(Ua,e,n,a,o,u),!0;case"dragenter":return La=Ao(La,e,n,a,o,u),!0;case"mouseover":return Na=Ao(Na,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return To.set(h,Ao(To.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,bo.set(h,Ao(bo.get(h)||null,e,n,a,o,u)),!0}return!1}function b_(e){var n=C(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,ja(e.priority,function(){M_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,ja(e.priority,function(){M_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ql(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);qc=o,a.target.dispatchEvent(o),qc=null}else return n=q(a),n!==null&&S_(n),e.blockedOn=a,!1;n.shift()}return!0}function A_(e,n,a){Ql(e)&&a.delete(n)}function Wy(){jf=!1,Ua!==null&&Ql(Ua)&&(Ua=null),La!==null&&Ql(La)&&(La=null),Na!==null&&Ql(Na)&&(Na=null),To.forEach(A_),bo.forEach(A_)}function Jl(e,n){e.blockedOn===n&&(e.blockedOn=null,jf||(jf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Wy)))}var $l=null;function R_(e){$l!==e&&($l=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){$l===e&&($l=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Yf(o||a)===null)continue;break}var h=q(a);h!==null&&(e.splice(n,3),n-=3,Wu(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function rs(e){function n(F){return Jl(F,e)}Ua!==null&&Jl(Ua,e),La!==null&&Jl(La,e),Na!==null&&Jl(Na,e),To.forEach(n),bo.forEach(n);for(var a=0;a<Oa.length;a++){var o=Oa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)b_(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],x=u[vn]||null;if(typeof h=="function")x||R_(a);else if(x){var b=null;if(h&&h.hasAttribute("formAction")){if(u=h,x=h[vn]||null)b=x.formAction;else if(Yf(u)!==null)continue}else b=x.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),R_(a)}}}function C_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Zf(e){this._internalRoot=e}tc.prototype.render=Zf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Qn();x_(a,o,e,n,null,null)},tc.prototype.unmount=Zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;x_(e.current,2,null,e,null,null),Ol(),n[zi]=null}};function tc(e){this._internalRoot=e}tc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ps();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&b_(e)}};var w_=t.version;if(w_!=="19.2.7")throw Error(r(527,w_,"19.2.7"));$.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var qy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ec.isDisabled&&ec.supportsFiber)try{Zt=ec.inject(qy),Gt=ec}catch{}}return Co.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Pm,h=Bm,x=Fm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=__(e,1,!1,null,null,a,o,null,u,h,x,C_),e[zi]=n.current,Df(e),new Zf(n)},Co.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=Pm,x=Bm,b=Fm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=__(e,1,!0,n,a??null,o,u,F,h,x,b,C_),n.context=v_(null),a=n.current,o=Qn(),o=Ya(o),u=xa(o),u.callback=null,ya(a,u,o),a=o,n.current.lanes=a,_n(n,a),Di(n),e[zi]=n.current,Df(e),new tc(n)},Co.version="19.2.7",Co}var I_;function aS(){if(I_)return Jf.exports;I_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Jf.exports=iS(),Jf.exports}var rS=aS();const sS="modulepreload",oS=function(s){return"/makemecubemaster/"+s},H_={},lS=function(t,i,r){let l=Promise.resolve();if(i&&i.length>0){let f=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));l=f(i.map(m=>{if(m=oS(m),m in H_)return;H_[m]=!0;const g=m.endsWith(".css"),_=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${_}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":sS,g||(v.as="script"),v.crossOrigin="",v.href=m,p&&v.setAttribute("nonce",p),document.head.appendChild(v),g)return new Promise((S,E)=>{v.addEventListener("load",S),v.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${m}`)))})}))}function c(f){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=f,window.dispatchEvent(d),!d.defaultPrevented)throw f}return l.then(f=>{for(const d of f||[])d.status==="rejected"&&c(d.reason);return t().catch(c)})};function cS(s={}){const{immediate:t=!1,onNeedReload:i,onNeedRefresh:r,onOfflineReady:l,onRegistered:c,onRegisteredSW:f,onRegisterError:d}=s;let p,m;const g=async(v=!0)=>{await m};async function _(){if("serviceWorker"in navigator){if(p=await lS(async()=>{const{Workbox:v}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:v}},[]).then(({Workbox:v})=>new v("/makemecubemaster/sw.js",{scope:"/makemecubemaster/",type:"classic"})).catch(v=>{d==null||d(v)}),!p)return;p.addEventListener("activated",v=>{(v.isUpdate||v.isExternal)&&(i?i():window.location.reload())}),p.addEventListener("installed",v=>{v.isUpdate||l==null||l()}),p.register({immediate:t}).then(v=>{f?f("/makemecubemaster/sw.js",v):c==null||c(v)}).catch(v=>{d==null||d(v)})}}return m=_(),g}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nd="175",uS=0,G_=1,fS=2,Zv=1,hS=2,aa=3,Wa=0,kn=1,ra=2,ka=0,Es=1,V_=2,k_=3,X_=4,dS=5,yr=100,pS=101,mS=102,gS=103,_S=104,vS=200,xS=201,yS=202,SS=203,Vh=204,kh=205,MS=206,ES=207,TS=208,bS=209,AS=210,RS=211,CS=212,wS=213,DS=214,Xh=0,Wh=1,qh=2,Rs=3,Yh=4,jh=5,Zh=6,Kh=7,Kv=0,US=1,LS=2,Xa=0,NS=1,OS=2,zS=3,PS=4,BS=5,FS=6,IS=7,Qv=300,Cs=301,ws=302,Qh=303,Jh=304,Fc=306,$h=1e3,Mr=1001,td=1002,bi=1003,HS=1004,nc=1005,Ni=1006,nh=1007,Er=1008,ca=1009,Jv=1010,$v=1011,Bo=1012,Od=1013,br=1014,sa=1015,Go=1016,zd=1017,Pd=1018,Fo=1020,t0=35902,e0=1021,n0=1022,Ti=1023,i0=1024,a0=1025,Io=1026,Ho=1027,r0=1028,Bd=1029,s0=1030,Fd=1031,Id=1033,bc=33776,Ac=33777,Rc=33778,Cc=33779,ed=35840,nd=35841,id=35842,ad=35843,rd=36196,sd=37492,od=37496,ld=37808,cd=37809,ud=37810,fd=37811,hd=37812,dd=37813,pd=37814,md=37815,gd=37816,_d=37817,vd=37818,xd=37819,yd=37820,Sd=37821,wc=36492,Md=36494,Ed=36495,o0=36283,Td=36284,bd=36285,Ad=36286,GS=3200,VS=3201,kS=0,XS=1,Va="",fi="srgb",Ds="srgb-linear",zc="linear",Ie="srgb",ss=7680,W_=519,WS=512,qS=513,YS=514,l0=515,jS=516,ZS=517,KS=518,QS=519,q_=35044,Y_="300 es",oa=2e3,Pc=2001;class Ls{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ih=Math.PI/180,Rd=180/Math.PI;function Vo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function me(s,t,i){return Math.max(t,Math.min(i,s))}function JS(s,t){return(s%t+t)%t}function ah(s,t,i){return(1-i)*s+i*t}function wo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class te{constructor(t=0,i=0){te.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,i,r,l,c,f,d,p,m){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,p,m)}set(t,i,r,l,c,f,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],g=r[4],_=r[7],v=r[2],S=r[5],E=r[8],R=l[0],M=l[3],y=l[6],I=l[1],U=l[4],w=l[7],k=l[2],B=l[5],P=l[8];return c[0]=f*R+d*I+p*k,c[3]=f*M+d*U+p*B,c[6]=f*y+d*w+p*P,c[1]=m*R+g*I+_*k,c[4]=m*M+g*U+_*B,c[7]=m*y+g*w+_*P,c[2]=v*R+S*I+E*k,c[5]=v*M+S*U+E*B,c[8]=v*y+S*w+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*d*m-r*c*g+r*d*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=g*f-d*m,v=d*p-g*c,S=m*c-f*p,E=i*_+r*v+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=_*R,t[1]=(l*m-g*r)*R,t[2]=(d*r-l*f)*R,t[3]=v*R,t[4]=(g*i-l*p)*R,t[5]=(l*c-d*i)*R,t[6]=S*R,t[7]=(r*p-m*i)*R,t[8]=(f*i-r*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(rh.makeScale(t,i)),this}rotate(t){return this.premultiply(rh.makeRotation(-t)),this}translate(t,i){return this.premultiply(rh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rh=new ce;function c0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Bc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $S(){const s=Bc("canvas");return s.style.display="block",s}const j_={};function Dc(s){s in j_||(j_[s]=!0,console.warn(s))}function tM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function eM(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nM(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Z_=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),K_=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iM(){const s={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ie&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ie&&(l.r=Ts(l.r),l.g=Ts(l.g),l.b=Ts(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?zc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ds]:{primaries:t,whitePoint:r,transfer:zc,toXYZ:Z_,fromXYZ:K_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:Z_,fromXYZ:K_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),s}const Ce=iM();function la(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class aM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{os===void 0&&(os=Bc("canvas")),os.width=t.width,os.height=t.height;const l=os.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=os}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Bc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=la(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(la(i[r]/255)*255):i[r]=la(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rM=0;class Hd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Vo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(sh(l[f].image)):c.push(sh(l[f]))}else c=sh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function sh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?aM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sM=0;class Xn extends Ls{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,r=Mr,l=Mr,c=Ni,f=Er,d=Ti,p=ca,m=Xn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Vo(),this.name="",this.source=new Hd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $h:t.x=t.x-Math.floor(t.x);break;case Mr:t.x=t.x<0?0:1;break;case td:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $h:t.y=t.y-Math.floor(t.y);break;case Mr:t.y=t.y<0?0:1;break;case td:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Qv;Xn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const p=t.elements,m=p[0],g=p[4],_=p[8],v=p[1],S=p[5],E=p[9],R=p[2],M=p[6],y=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+R)<.1&&Math.abs(E+M)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,w=(S+1)/2,k=(y+1)/2,B=(g+v)/4,P=(_+R)/4,V=(E+M)/4;return U>w&&U>k?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=B/r,c=P/r):w>k?w<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),r=B/l,c=V/l):k<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),r=P/c,l=V/c),this.set(r,l,c,i),this}let I=Math.sqrt((M-E)*(M-E)+(_-R)*(_-R)+(v-g)*(v-g));return Math.abs(I)<.001&&(I=1),this.x=(M-E)/I,this.y=(_-R)/I,this.z=(v-g)/I,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this.w=me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this.w=me(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oM extends Ls{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new $e(0,0,t,i),this.scissorTest=!1,this.viewport=new $e(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Xn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Hd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends oM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class u0 extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lM extends Xn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=bi,this.minFilter=bi,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ko{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,d){let p=r[l+0],m=r[l+1],g=r[l+2],_=r[l+3];const v=c[f+0],S=c[f+1],E=c[f+2],R=c[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=v,t[i+1]=S,t[i+2]=E,t[i+3]=R;return}if(_!==R||p!==v||m!==S||g!==E){let M=1-d;const y=p*v+m*S+g*E+_*R,I=y>=0?1:-1,U=1-y*y;if(U>Number.EPSILON){const k=Math.sqrt(U),B=Math.atan2(k,y*I);M=Math.sin(M*B)/k,d=Math.sin(d*B)/k}const w=d*I;if(p=p*M+v*w,m=m*M+S*w,g=g*M+E*w,_=_*M+R*w,M===1-d){const k=1/Math.sqrt(p*p+m*m+g*g+_*_);p*=k,m*=k,g*=k,_*=k}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,c,f){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],_=c[f],v=c[f+1],S=c[f+2],E=c[f+3];return t[i]=d*E+g*_+p*S-m*v,t[i+1]=p*E+g*v+m*_-d*S,t[i+2]=m*E+g*S+d*v-p*_,t[i+3]=g*E-d*_-p*v-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),_=d(c/2),v=p(r/2),S=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=v*g*_+m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_+v*S*E;break;case"YZX":this._x=v*g*_+m*S*E,this._y=m*S*_+v*g*E,this._z=m*g*E-v*S*_,this._w=m*g*_-v*S*E;break;case"XZY":this._x=v*g*_-m*S*E,this._y=m*S*_-v*g*E,this._z=m*g*E+v*S*_,this._w=m*g*_+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],g=i[6],_=i[10],v=r+d+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-m)*S,this._z=(f-l)*S}else if(r>d&&r>_){const S=2*Math.sqrt(1+r-d-_);this._w=(g-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+m)/S}else if(d>_){const S=2*Math.sqrt(1+d-r-_);this._w=(c-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+_-r-d);this._w=(f-l)/S,this._x=(c+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+f*d+l*m-c*p,this._y=l*g+f*p+c*d-r*m,this._z=c*g+f*m+r*p-l*d,this._w=f*g-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),_=Math.sin((1-i)*g)/m,v=Math.sin(i*g)/m;return this._w=f*_+this._w*v,this._x=r*_+this._x*v,this._y=l*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,i=0,r=0){Q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Q_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Q_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*r),g=2*(d*i-c*l),_=2*(c*r-f*i);return this.x=i+p*m+f*_-d*g,this.y=r+p*g+d*m-c*_,this.z=l+p*_+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=me(this.x,t.x,i.x),this.y=me(this.y,t.y,i.y),this.z=me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=me(this.x,t,i),this.y=me(this.y,t,i),this.z=me(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-r*p,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return oh.copy(this).projectOnVector(t),this.sub(oh)}reflect(t){return this.sub(oh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oh=new Q,Q_=new ko;class Xo{constructor(t=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,yi):yi.fromBufferAttribute(c,f),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ic.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ic.copy(r.boundingBox)),ic.applyMatrix4(t.matrixWorld),this.union(ic)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Do),ac.subVectors(this.max,Do),ls.subVectors(t.a,Do),cs.subVectors(t.b,Do),us.subVectors(t.c,Do),Pa.subVectors(cs,ls),Ba.subVectors(us,cs),hr.subVectors(ls,us);let i=[0,-Pa.z,Pa.y,0,-Ba.z,Ba.y,0,-hr.z,hr.y,Pa.z,0,-Pa.x,Ba.z,0,-Ba.x,hr.z,0,-hr.x,-Pa.y,Pa.x,0,-Ba.y,Ba.x,0,-hr.y,hr.x,0];return!lh(i,ls,cs,us,ac)||(i=[1,0,0,0,1,0,0,0,1],!lh(i,ls,cs,us,ac))?!1:(rc.crossVectors(Pa,Ba),i=[rc.x,rc.y,rc.z],lh(i,ls,cs,us,ac))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $i=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],yi=new Q,ic=new Xo,ls=new Q,cs=new Q,us=new Q,Pa=new Q,Ba=new Q,hr=new Q,Do=new Q,ac=new Q,rc=new Q,dr=new Q;function lh(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){dr.fromArray(s,c);const d=l.x*Math.abs(dr.x)+l.y*Math.abs(dr.y)+l.z*Math.abs(dr.z),p=t.dot(dr),m=i.dot(dr),g=r.dot(dr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const cM=new Xo,Uo=new Q,ch=new Q;class Gd{constructor(t=new Q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):cM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Uo.subVectors(t,this.center);const i=Uo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Uo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ch.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Uo.copy(t.center).add(ch)),this.expandByPoint(Uo.copy(t.center).sub(ch))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ta=new Q,uh=new Q,sc=new Q,Fa=new Q,fh=new Q,oc=new Q,hh=new Q;class uM{constructor(t=new Q,i=new Q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){uh.copy(t).add(i).multiplyScalar(.5),sc.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(uh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(sc),d=Fa.dot(this.direction),p=-Fa.dot(sc),m=Fa.lengthSq(),g=Math.abs(1-f*f);let _,v,S,E;if(g>0)if(_=f*p-d,v=f*d-p,E=c*g,_>=0)if(v>=-E)if(v<=E){const R=1/g;_*=R,v*=R,S=_*(_+f*v+2*d)+v*(f*_+v+2*p)+m}else v=c,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*p)+m;else v=-c,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*p)+m;else v<=-E?(_=Math.max(0,-(-f*c+d)),v=_>0?-c:Math.min(Math.max(-c,-p),c),S=-_*_+v*(v+2*p)+m):v<=E?(_=0,v=Math.min(Math.max(-c,-p),c),S=v*(v+2*p)+m):(_=Math.max(0,-(f*c+d)),v=_>0?c:Math.min(Math.max(-c,-p),c),S=-_*_+v*(v+2*p)+m);else v=f>0?-c:c,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(uh).addScaledVector(sc,v),S}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return m>=0?(r=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(r=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(t.min.z-v.z)*_,p=(t.max.z-v.z)*_):(d=(t.max.z-v.z)*_,p=(t.min.z-v.z)*_),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,c){fh.subVectors(i,t),oc.subVectors(r,t),hh.crossVectors(fh,oc);let f=this.direction.dot(hh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Fa.subVectors(this.origin,t);const p=d*this.direction.dot(oc.crossVectors(Fa,oc));if(p<0)return null;const m=d*this.direction.dot(fh.cross(Fa));if(m<0||p+m>f)return null;const g=-d*Fa.dot(hh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,r,l,c,f,d,p,m,g,_,v,S,E,R,M){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,p,m,g,_,v,S,E,R,M)}set(t,i,r,l,c,f,d,p,m,g,_,v,S,E,R,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=r,y[12]=l,y[1]=c,y[5]=f,y[9]=d,y[13]=p,y[2]=m,y[6]=g,y[10]=_,y[14]=v,y[3]=S,y[7]=E,y[11]=R,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/fs.setFromMatrixColumn(t,0).length(),c=1/fs.setFromMatrixColumn(t,1).length(),f=1/fs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,S=f*_,E=d*g,R=d*_;i[0]=p*g,i[4]=-p*_,i[8]=m,i[1]=S+E*m,i[5]=v-R*m,i[9]=-d*p,i[2]=R-v*m,i[6]=E+S*m,i[10]=f*p}else if(t.order==="YXZ"){const v=p*g,S=p*_,E=m*g,R=m*_;i[0]=v+R*d,i[4]=E*d-S,i[8]=f*m,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=S*d-E,i[6]=R+v*d,i[10]=f*p}else if(t.order==="ZXY"){const v=p*g,S=p*_,E=m*g,R=m*_;i[0]=v-R*d,i[4]=-f*_,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*g,i[9]=R-v*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const v=f*g,S=f*_,E=d*g,R=d*_;i[0]=p*g,i[4]=E*m-S,i[8]=v*m+R,i[1]=p*_,i[5]=R*m+v,i[9]=S*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const v=f*p,S=f*m,E=d*p,R=d*m;i[0]=p*g,i[4]=R-v*_,i[8]=E*_+S,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-m*g,i[6]=S*_+E,i[10]=v-R*_}else if(t.order==="XZY"){const v=f*p,S=f*m,E=d*p,R=d*m;i[0]=p*g,i[4]=-_,i[8]=m*g,i[1]=v*_+R,i[5]=f*g,i[9]=S*_-E,i[2]=E*_-S,i[6]=d*g,i[10]=R*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fM,t,hM)}lookAt(t,i,r){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ia.crossVectors(r,Jn),Ia.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ia.crossVectors(r,Jn)),Ia.normalize(),lc.crossVectors(Jn,Ia),l[0]=Ia.x,l[4]=lc.x,l[8]=Jn.x,l[1]=Ia.y,l[5]=lc.y,l[9]=Jn.y,l[2]=Ia.z,l[6]=lc.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],g=r[1],_=r[5],v=r[9],S=r[13],E=r[2],R=r[6],M=r[10],y=r[14],I=r[3],U=r[7],w=r[11],k=r[15],B=l[0],P=l[4],V=l[8],D=l[12],T=l[1],z=l[5],Y=l[9],Z=l[13],tt=l[2],lt=l[6],N=l[10],$=l[14],j=l[3],vt=l[7],Tt=l[11],O=l[15];return c[0]=f*B+d*T+p*tt+m*j,c[4]=f*P+d*z+p*lt+m*vt,c[8]=f*V+d*Y+p*N+m*Tt,c[12]=f*D+d*Z+p*$+m*O,c[1]=g*B+_*T+v*tt+S*j,c[5]=g*P+_*z+v*lt+S*vt,c[9]=g*V+_*Y+v*N+S*Tt,c[13]=g*D+_*Z+v*$+S*O,c[2]=E*B+R*T+M*tt+y*j,c[6]=E*P+R*z+M*lt+y*vt,c[10]=E*V+R*Y+M*N+y*Tt,c[14]=E*D+R*Z+M*$+y*O,c[3]=I*B+U*T+w*tt+k*j,c[7]=I*P+U*z+w*lt+k*vt,c[11]=I*V+U*Y+w*N+k*Tt,c[15]=I*D+U*Z+w*$+k*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],d=t[5],p=t[9],m=t[13],g=t[2],_=t[6],v=t[10],S=t[14],E=t[3],R=t[7],M=t[11],y=t[15];return E*(+c*p*_-l*m*_-c*d*v+r*m*v+l*d*S-r*p*S)+R*(+i*p*S-i*m*v+c*f*v-l*f*S+l*m*g-c*p*g)+M*(+i*m*_-i*d*S-c*f*_+r*f*S+c*d*g-r*m*g)+y*(-l*d*g-i*p*_+i*d*v+l*f*_-r*f*v+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],_=t[9],v=t[10],S=t[11],E=t[12],R=t[13],M=t[14],y=t[15],I=_*M*m-R*v*m+R*p*S-d*M*S-_*p*y+d*v*y,U=E*v*m-g*M*m-E*p*S+f*M*S+g*p*y-f*v*y,w=g*R*m-E*_*m+E*d*S-f*R*S-g*d*y+f*_*y,k=E*_*p-g*R*p-E*d*v+f*R*v+g*d*M-f*_*M,B=i*I+r*U+l*w+c*k;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/B;return t[0]=I*P,t[1]=(R*v*c-_*M*c-R*l*S+r*M*S+_*l*y-r*v*y)*P,t[2]=(d*M*c-R*p*c+R*l*m-r*M*m-d*l*y+r*p*y)*P,t[3]=(_*p*c-d*v*c-_*l*m+r*v*m+d*l*S-r*p*S)*P,t[4]=U*P,t[5]=(g*M*c-E*v*c+E*l*S-i*M*S-g*l*y+i*v*y)*P,t[6]=(E*p*c-f*M*c-E*l*m+i*M*m+f*l*y-i*p*y)*P,t[7]=(f*v*c-g*p*c+g*l*m-i*v*m-f*l*S+i*p*S)*P,t[8]=w*P,t[9]=(E*_*c-g*R*c-E*r*S+i*R*S+g*r*y-i*_*y)*P,t[10]=(f*R*c-E*d*c+E*r*m-i*R*m-f*r*y+i*d*y)*P,t[11]=(g*d*c-f*_*c-g*r*m+i*_*m+f*r*S-i*d*S)*P,t[12]=k*P,t[13]=(g*R*l-E*_*l+E*r*v-i*R*v-g*r*M+i*_*M)*P,t[14]=(E*d*l-f*R*l-E*r*p+i*R*p+f*r*M-i*d*M)*P,t[15]=(f*_*l-g*d*l+g*r*p-i*_*p-f*r*v+i*d*v)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,d=t.y,p=t.z,m=c*f,g=c*d;return this.set(m*f+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*f,0,m*p-l*d,g*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,g=f+f,_=d+d,v=c*m,S=c*g,E=c*_,R=f*g,M=f*_,y=d*_,I=p*m,U=p*g,w=p*_,k=r.x,B=r.y,P=r.z;return l[0]=(1-(R+y))*k,l[1]=(S+w)*k,l[2]=(E-U)*k,l[3]=0,l[4]=(S-w)*B,l[5]=(1-(v+y))*B,l[6]=(M+I)*B,l[7]=0,l[8]=(E+U)*P,l[9]=(M-I)*P,l[10]=(1-(v+R))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=fs.set(l[0],l[1],l[2]).length();const f=fs.set(l[4],l[5],l[6]).length(),d=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Si.copy(this);const m=1/c,g=1/f,_=1/d;return Si.elements[0]*=m,Si.elements[1]*=m,Si.elements[2]*=m,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=_,Si.elements[9]*=_,Si.elements[10]*=_,i.setFromRotationMatrix(Si),r.x=c,r.y=f,r.z=d,this}makePerspective(t,i,r,l,c,f,d=oa){const p=this.elements,m=2*c/(i-t),g=2*c/(r-l),_=(i+t)/(i-t),v=(r+l)/(r-l);let S,E;if(d===oa)S=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===Pc)S=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,d=oa){const p=this.elements,m=1/(i-t),g=1/(r-l),_=1/(f-c),v=(i+t)*m,S=(r+l)*g;let E,R;if(d===oa)E=(f+c)*_,R=-2*_;else if(d===Pc)E=c*_,R=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=R,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const fs=new Q,Si=new je,fM=new Q(0,0,0),hM=new Q(1,1,1),Ia=new Q,lc=new Q,Jn=new Q,J_=new je,$_=new ko;class ua{constructor(t=0,i=0,r=0,l=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],_=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return J_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(J_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return $_.setFromEuler(this),this.setFromQuaternion($_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class f0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dM=0;const tv=new Q,hs=new ko,ea=new je,cc=new Q,Lo=new Q,pM=new Q,mM=new ko,ev=new Q(1,0,0),nv=new Q(0,1,0),iv=new Q(0,0,1),av={type:"added"},gM={type:"removed"},ds={type:"childadded",child:null},dh={type:"childremoved",child:null};class wn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new Q,i=new ua,r=new ko,l=new Q(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new ce}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(ev,t)}rotateY(t){return this.rotateOnAxis(nv,t)}rotateZ(t){return this.rotateOnAxis(iv,t)}translateOnAxis(t,i){return tv.copy(t).applyQuaternion(this.quaternion),this.position.add(tv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(ev,t)}translateY(t){return this.translateOnAxis(nv,t)}translateZ(t){return this.translateOnAxis(iv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?cc.copy(t):cc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Lo,cc,this.up):ea.lookAt(cc,Lo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),hs.setFromRotationMatrix(ea),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(av),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(gM),dh.child=t,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ea.multiply(t.parent.matrixWorld)),t.applyMatrix4(ea),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(av),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,t,pM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,mM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const _=p[m];c(t.shapes,_)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),S=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new Q(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new Q,na=new Q,ph=new Q,ia=new Q,ps=new Q,ms=new Q,rv=new Q,mh=new Q,gh=new Q,_h=new Q,vh=new $e,xh=new $e,yh=new $e;class Ei{constructor(t=new Q,i=new Q,r=new Q){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Mi.subVectors(t,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Mi.subVectors(l,i),na.subVectors(r,i),ph.subVectors(t,i);const f=Mi.dot(Mi),d=Mi.dot(na),p=Mi.dot(ph),m=na.dot(na),g=na.dot(ph),_=f*m-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,S=(m*p-d*g)*v,E=(f*g-d*p)*v;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,c,f,d,p){return this.getBarycoord(t,i,r,l,ia)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ia.x),p.addScaledVector(f,ia.y),p.addScaledVector(d,ia.z),p)}static getInterpolatedAttribute(t,i,r,l,c,f){return vh.setScalar(0),xh.setScalar(0),yh.setScalar(0),vh.fromBufferAttribute(t,i),xh.fromBufferAttribute(t,r),yh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(vh,c.x),f.addScaledVector(xh,c.y),f.addScaledVector(yh,c.z),f}static isFrontFacing(t,i,r,l){return Mi.subVectors(r,i),na.subVectors(t,i),Mi.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),Mi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ei.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return Ei.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,d;ps.subVectors(l,r),ms.subVectors(c,r),mh.subVectors(t,r);const p=ps.dot(mh),m=ms.dot(mh);if(p<=0&&m<=0)return i.copy(r);gh.subVectors(t,l);const g=ps.dot(gh),_=ms.dot(gh);if(g>=0&&_<=g)return i.copy(l);const v=p*_-g*m;if(v<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(r).addScaledVector(ps,f);_h.subVectors(t,c);const S=ps.dot(_h),E=ms.dot(_h);if(E>=0&&S<=E)return i.copy(c);const R=S*m-p*E;if(R<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(ms,d);const M=g*E-S*_;if(M<=0&&_-g>=0&&S-E>=0)return rv.subVectors(c,l),d=(_-g)/(_-g+(S-E)),i.copy(l).addScaledVector(rv,d);const y=1/(M+R+v);return f=R*y,d=v*y,i.copy(r).addScaledVector(ps,f).addScaledVector(ms,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const h0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},uc={h:0,s:0,l:0};function Sh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ne{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ce.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ce.workingColorSpace){if(t=JS(t,1),i=me(i,0,1),r=me(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Sh(f,c,t+1/3),this.g=Sh(f,c,t),this.b=Sh(f,c,t-1/3)}return Ce.toWorkingColorSpace(this,l),this}setStyle(t,i=fi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=h0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Ce.fromWorkingColorSpace(Cn.copy(this),t),Math.round(me(Cn.r*255,0,255))*65536+Math.round(me(Cn.g*255,0,255))*256+Math.round(me(Cn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.fromWorkingColorSpace(Cn.copy(this),i);const r=Cn.r,l=Cn.g,c=Cn.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=g<=.5?_/(f+d):_/(2-f-d),f){case r:p=(l-c)/_+(l<c?6:0);break;case l:p=(c-r)/_+2;break;case c:p=(r-l)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=fi){Ce.fromWorkingColorSpace(Cn.copy(this),t);const i=Cn.r,r=Cn.g,l=Cn.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+i,Ha.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ha),t.getHSL(uc);const r=ah(Ha.h,uc.h,i),l=ah(Ha.s,uc.s,i),c=ah(Ha.l,uc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ne;Ne.NAMES=h0;let _M=0;class Ic extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=Es,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=kh,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(r.blending=this.blending),this.side!==Wa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Vh&&(r.blendSrc=this.blendSrc),this.blendDst!==kh&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==W_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vd extends Ic{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=Kv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const on=new Q,fc=new te;let vM=0;class Oi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=q_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)fc.fromBufferAttribute(this,i),fc.applyMatrix3(t),this.setXY(i,fc.x,fc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(t),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.transformDirection(t),this.setXYZ(i,on.x,on.y,on.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=wo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=wo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=wo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=wo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=wo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==q_&&(t.usage=this.usage),t}}class d0 extends Oi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class p0 extends Oi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ti extends Oi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let xM=0;const ci=new je,Mh=new wn,gs=new Q,$n=new Xo,No=new Xo,gn=new Q;class fa extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(c0(t)?p0:d0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ce().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,r){return ci.makeTranslation(t,i,r),this.applyMatrix4(ci),this}scale(t,i,r){return ci.makeScale(t,i,r),this.applyMatrix4(ci),this}lookAt(t){return Mh.lookAt(t),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ti(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];No.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors($n.min,No.min),$n.expandByPoint(gn),gn.addVectors($n.max,No.max),$n.expandByPoint(gn)):($n.expandByPoint(No.min),$n.expandByPoint(No.max))}$n.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)gn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)gn.fromBufferAttribute(d,m),p&&(gs.fromBufferAttribute(t,m),gn.add(gs)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<r.count;V++)d[V]=new Q,p[V]=new Q;const m=new Q,g=new Q,_=new Q,v=new te,S=new te,E=new te,R=new Q,M=new Q;function y(V,D,T){m.fromBufferAttribute(r,V),g.fromBufferAttribute(r,D),_.fromBufferAttribute(r,T),v.fromBufferAttribute(c,V),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,T),g.sub(m),_.sub(m),S.sub(v),E.sub(v);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(z),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(z),d[V].add(R),d[D].add(R),d[T].add(R),p[V].add(M),p[D].add(M),p[T].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let V=0,D=I.length;V<D;++V){const T=I[V],z=T.start,Y=T.count;for(let Z=z,tt=z+Y;Z<tt;Z+=3)y(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const U=new Q,w=new Q,k=new Q,B=new Q;function P(V){k.fromBufferAttribute(l,V),B.copy(k);const D=d[V];U.copy(D),U.sub(k.multiplyScalar(k.dot(D))).normalize(),w.crossVectors(B,D);const z=w.dot(p[V])<0?-1:1;f.setXYZW(V,U.x,U.y,U.z,z)}for(let V=0,D=I.length;V<D;++V){const T=I[V],z=T.start,Y=T.count;for(let Z=z,tt=z+Y;Z<tt;Z+=3)P(t.getX(Z+0)),P(t.getX(Z+1)),P(t.getX(Z+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const l=new Q,c=new Q,f=new Q,d=new Q,p=new Q,m=new Q,g=new Q,_=new Q;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),R=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,M),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,M),d.add(g),p.add(g),m.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,_=d.normalized,v=new m.constructor(p.length*g);let S=0,E=0;for(let R=0,M=p.length;R<M;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*g;for(let y=0;y<g;y++)v[E++]=m[S++]}return new Oi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new fa,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,_=m.length;g<_;g++){const v=m[g],S=t(v,r);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let _=0,v=m.length;_<v;_++){const S=m[_];g.push(S.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],_=c[m];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sv=new je,pr=new uM,hc=new Gd,ov=new Q,dc=new Q,pc=new Q,mc=new Q,Eh=new Q,gc=new Q,lv=new Q,_c=new Q;class di extends wn{constructor(t=new fa,i=new Vd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){gc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],_=c[p];g!==0&&(Eh.fromBufferAttribute(_,t),f?gc.addScaledVector(Eh,g):gc.addScaledVector(Eh.sub(i),g))}i.add(gc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hc.copy(r.boundingSphere),hc.applyMatrix4(c),pr.copy(t.ray).recast(t.near),!(hc.containsPoint(pr.origin)===!1&&(pr.intersectSphere(hc,ov)===null||pr.origin.distanceToSquared(ov)>(t.far-t.near)**2))&&(sv.copy(c).invert(),pr.copy(t.ray).applyMatrix4(sv),!(r.boundingBox!==null&&pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,pr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,R=v.length;E<R;E++){const M=v[E],y=f[M.materialIndex],I=Math.max(M.start,S.start),U=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let w=I,k=U;w<k;w+=3){const B=d.getX(w),P=d.getX(w+1),V=d.getX(w+2);l=vc(this,y,t,r,m,g,_,B,P,V),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let M=E,y=R;M<y;M+=3){const I=d.getX(M),U=d.getX(M+1),w=d.getX(M+2);l=vc(this,f,t,r,m,g,_,I,U,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,R=v.length;E<R;E++){const M=v[E],y=f[M.materialIndex],I=Math.max(M.start,S.start),U=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let w=I,k=U;w<k;w+=3){const B=w,P=w+1,V=w+2;l=vc(this,y,t,r,m,g,_,B,P,V),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let M=E,y=R;M<y;M+=3){const I=M,U=M+1,w=M+2;l=vc(this,f,t,r,m,g,_,I,U,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function yM(s,t,i,r,l,c,f,d){let p;if(t.side===kn?p=r.intersectTriangle(f,c,l,!0,d):p=r.intersectTriangle(l,c,f,t.side===Wa,d),p===null)return null;_c.copy(d),_c.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(_c);return m<i.near||m>i.far?null:{distance:m,point:_c.clone(),object:s}}function vc(s,t,i,r,l,c,f,d,p,m){s.getVertexPosition(d,dc),s.getVertexPosition(p,pc),s.getVertexPosition(m,mc);const g=yM(s,t,i,r,dc,pc,mc,lv);if(g){const _=new Q;Ei.getBarycoord(lv,dc,pc,mc,_),l&&(g.uv=Ei.getInterpolatedAttribute(l,d,p,m,_,new te)),c&&(g.uv1=Ei.getInterpolatedAttribute(c,d,p,m,_,new te)),f&&(g.normal=Ei.getInterpolatedAttribute(f,d,p,m,_,new Q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new Q,materialIndex:0};Ei.getNormal(dc,pc,mc,v.normal),g.face=v,g.barycoord=_}return g}class Wo extends fa{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new ti(m,3)),this.setAttribute("normal",new ti(g,3)),this.setAttribute("uv",new ti(_,2));function E(R,M,y,I,U,w,k,B,P,V,D){const T=w/P,z=k/V,Y=w/2,Z=k/2,tt=B/2,lt=P+1,N=V+1;let $=0,j=0;const vt=new Q;for(let Tt=0;Tt<N;Tt++){const O=Tt*z-Z;for(let rt=0;rt<lt;rt++){const yt=rt*T-Y;vt[R]=yt*I,vt[M]=O*U,vt[y]=tt,m.push(vt.x,vt.y,vt.z),vt[R]=0,vt[M]=0,vt[y]=B>0?1:-1,g.push(vt.x,vt.y,vt.z),_.push(rt/P),_.push(1-Tt/V),$+=1}}for(let Tt=0;Tt<V;Tt++)for(let O=0;O<P;O++){const rt=v+O+lt*Tt,yt=v+O+lt*(Tt+1),J=v+(O+1)+lt*(Tt+1),ht=v+(O+1)+lt*Tt;p.push(rt,yt,ht),p.push(yt,J,ht),j+=6}d.addGroup(S,j,D),S+=j,v+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(s){const t={};for(let i=0;i<s.length;i++){const r=Us(s[i]);for(const l in r)t[l]=r[l]}return t}function SM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function m0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const MM={clone:Us,merge:Nn};var EM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Ic{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EM,this.fragmentShader=TM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=SM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class g0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=oa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new Q,cv=new te,uv=new te;class hi extends g0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Rd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ih*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,i){return this.getViewBounds(t,cv,uv),i.subVectors(uv,cv)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ih*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _s=-90,vs=1;class bM extends wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(_s,vs,t,i);l.layers=this.layers,this.add(l);const c=new hi(_s,vs,t,i);c.layers=this.layers,this.add(c);const f=new hi(_s,vs,t,i);f.layers=this.layers,this.add(f);const d=new hi(_s,vs,t,i);d.layers=this.layers,this.add(d);const p=new hi(_s,vs,t,i);p.layers=this.layers,this.add(p);const m=new hi(_s,vs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(t===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Pc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(_,v,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class _0 extends Xn{constructor(t=[],i=Cs,r,l,c,f,d,p,m,g){super(t,i,r,l,c,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class AM extends Ar{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new _0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ni}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Wo(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:Us(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ka});c.uniforms.tEquirect.value=i;const f=new di(l,c),d=i.minFilter;return i.minFilter===Er&&(i.minFilter=Ni),new bM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class Tr extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RM={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,r),y=this._getHandJoint(m,R);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;m.inputState.pinching&&v>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(RM)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Tr;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class CM extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const bh=new Q,wM=new Q,DM=new ce;class vr{constructor(t=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=bh.subVectors(r,i).cross(wM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(bh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||DM.getNormalMatrix(t),l=this.coplanarPoint(bh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Gd,xc=new Q;class kd{constructor(t=new vr,i=new vr,r=new vr,l=new vr,c=new vr,f=new vr){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=oa){const r=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],p=l[3],m=l[4],g=l[5],_=l[6],v=l[7],S=l[8],E=l[9],R=l[10],M=l[11],y=l[12],I=l[13],U=l[14],w=l[15];if(r[0].setComponents(p-c,v-m,M-S,w-y).normalize(),r[1].setComponents(p+c,v+m,M+S,w+y).normalize(),r[2].setComponents(p+f,v+g,M+E,w+I).normalize(),r[3].setComponents(p-f,v-g,M-E,w-I).normalize(),r[4].setComponents(p-d,v-_,M-R,w-U).normalize(),i===oa)r[5].setComponents(p+d,v+_,M+R,w+U).normalize();else if(i===Pc)r[5].setComponents(d,_,R,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(t){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(xc.x=l.normal.x>0?t.max.x:t.min.x,xc.y=l.normal.y>0?t.max.y:t.min.y,xc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class v0 extends Xn{constructor(t,i,r=br,l,c,f,d=bi,p=bi,m,g=Io){if(g!==Io&&g!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ha{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const r=this.getUtoTmapping(t);return this.getPoint(r,i)}getPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPoint(r/t));return i}getSpacedPoints(t=5){const i=[];for(let r=0;r<=t;r++)i.push(this.getPointAt(r/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let r,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)r=this.getPoint(f/t),c+=r.distanceTo(l),i.push(c),l=r;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const r=this.getLengths();let l=0;const c=r.length;let f;i?f=i:f=t*r[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=r[l]-f,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===f)return l/(c-1);const g=r[l],v=r[l+1]-g,S=(f-g)/v;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),p=i||(f.isVector2?new te:new Q);return p.copy(d).sub(f).normalize(),p}getTangentAt(t,i){const r=this.getUtoTmapping(t);return this.getTangent(r,i)}computeFrenetFrames(t,i=!1){const r=new Q,l=[],c=[],f=[],d=new Q,p=new je;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new Q)}c[0]=new Q,f[0]=new Q;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),v=Math.abs(l[0].z);g<=m&&(m=g,r.set(1,0,0)),_<=m&&(m=_,r.set(0,1,0)),v<=m&&r.set(0,0,1),d.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(me(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(d,E))}f[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(me(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class x0 extends ha{constructor(t=0,i=0,r=1,l=1,c=0,f=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new te){const r=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=p-this.aX,S=m-this.aY;p=v*g-S*_+this.aX,m=v*_+S*g+this.aY}return r.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class UM extends x0{constructor(t,i,r,l,c,f){super(t,i,r,r,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Xd(){let s=0,t=0,i=0,r=0;function l(c,f,d,p){s=c,t=d,i=-3*c+3*f-2*d-p,r=2*c-2*f+d+p}return{initCatmullRom:function(c,f,d,p,m){l(f,d,m*(d-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,d,p,m,g,_){let v=(f-c)/m-(d-c)/(m+g)+(d-f)/g,S=(d-f)/g-(p-f)/(g+_)+(p-d)/_;v*=g,S*=g,l(f,d,v,S)},calc:function(c){const f=c*c,d=f*c;return s+t*c+i*f+r*d}}}const yc=new Q,Ah=new Xd,Rh=new Xd,Ch=new Xd;class y0 extends ha{constructor(t=[],i=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=r,this.tension=l}getPoint(t,i=new Q){const r=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),p=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,g;this.closed||d>0?m=l[(d-1)%c]:(yc.subVectors(l[0],l[1]).add(l[0]),m=yc);const _=l[d%c],v=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(yc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=yc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),S),R=Math.pow(_.distanceToSquared(v),S),M=Math.pow(v.distanceToSquared(g),S);R<1e-4&&(R=1),E<1e-4&&(E=R),M<1e-4&&(M=R),Ah.initNonuniformCatmullRom(m.x,_.x,v.x,g.x,E,R,M),Rh.initNonuniformCatmullRom(m.y,_.y,v.y,g.y,E,R,M),Ch.initNonuniformCatmullRom(m.z,_.z,v.z,g.z,E,R,M)}else this.curveType==="catmullrom"&&(Ah.initCatmullRom(m.x,_.x,v.x,g.x,this.tension),Rh.initCatmullRom(m.y,_.y,v.y,g.y,this.tension),Ch.initCatmullRom(m.z,_.z,v.z,g.z,this.tension));return r.set(Ah.calc(p),Rh.calc(p),Ch.calc(p)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new Q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function fv(s,t,i,r,l){const c=(r-t)*.5,f=(l-i)*.5,d=s*s,p=s*d;return(2*i-2*r+c+f)*p+(-3*i+3*r-2*c-f)*d+c*s+i}function LM(s,t){const i=1-s;return i*i*t}function NM(s,t){return 2*(1-s)*s*t}function OM(s,t){return s*s*t}function zo(s,t,i,r){return LM(s,t)+NM(s,i)+OM(s,r)}function zM(s,t){const i=1-s;return i*i*i*t}function PM(s,t){const i=1-s;return 3*i*i*s*t}function BM(s,t){return 3*(1-s)*s*s*t}function FM(s,t){return s*s*s*t}function Po(s,t,i,r,l){return zM(s,t)+PM(s,i)+BM(s,r)+FM(s,l)}class IM extends ha{constructor(t=new te,i=new te,r=new te,l=new te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new te){const r=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return r.set(Po(t,l.x,c.x,f.x,d.x),Po(t,l.y,c.y,f.y,d.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class HM extends ha{constructor(t=new Q,i=new Q,r=new Q,l=new Q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=r,this.v3=l}getPoint(t,i=new Q){const r=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return r.set(Po(t,l.x,c.x,f.x,d.x),Po(t,l.y,c.y,f.y,d.y),Po(t,l.z,c.z,f.z,d.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class GM extends ha{constructor(t=new te,i=new te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new te){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new te){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class VM extends ha{constructor(t=new Q,i=new Q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new Q){const r=i;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Q){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kM extends ha{constructor(t=new te,i=new te,r=new te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new te){const r=i,l=this.v0,c=this.v1,f=this.v2;return r.set(zo(t,l.x,c.x,f.x),zo(t,l.y,c.y,f.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class S0 extends ha{constructor(t=new Q,i=new Q,r=new Q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=r}getPoint(t,i=new Q){const r=i,l=this.v0,c=this.v1,f=this.v2;return r.set(zo(t,l.x,c.x,f.x),zo(t,l.y,c.y,f.y),zo(t,l.z,c.z,f.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class XM extends ha{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new te){const r=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,p=l[f===0?f:f-1],m=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return r.set(fv(d,p.x,m.x,g.x,_.x),fv(d,p.y,m.y,g.y,_.y)),r}copy(t){super.copy(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,r=this.points.length;i<r;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,r=t.points.length;i<r;i++){const l=t.points[i];this.points.push(new te().fromArray(l))}return this}}var WM=Object.freeze({__proto__:null,ArcCurve:UM,CatmullRomCurve3:y0,CubicBezierCurve:IM,CubicBezierCurve3:HM,EllipseCurve:x0,LineCurve:GM,LineCurve3:VM,QuadraticBezierCurve:kM,QuadraticBezierCurve3:S0,SplineCurve:XM});class Wd extends fa{constructor(t=1,i=1,r=1,l=32,c=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],v=[],S=[];let E=0;const R=[],M=r/2;let y=0;I(),f===!1&&(t>0&&U(!0),i>0&&U(!1)),this.setIndex(g),this.setAttribute("position",new ti(_,3)),this.setAttribute("normal",new ti(v,3)),this.setAttribute("uv",new ti(S,2));function I(){const w=new Q,k=new Q;let B=0;const P=(i-t)/r;for(let V=0;V<=c;V++){const D=[],T=V/c,z=T*(i-t)+t;for(let Y=0;Y<=l;Y++){const Z=Y/l,tt=Z*p+d,lt=Math.sin(tt),N=Math.cos(tt);k.x=z*lt,k.y=-T*r+M,k.z=z*N,_.push(k.x,k.y,k.z),w.set(lt,P,N).normalize(),v.push(w.x,w.y,w.z),S.push(Z,1-T),D.push(E++)}R.push(D)}for(let V=0;V<l;V++)for(let D=0;D<c;D++){const T=R[D][V],z=R[D+1][V],Y=R[D+1][V+1],Z=R[D][V+1];(t>0||D!==0)&&(g.push(T,z,Z),B+=3),(i>0||D!==c-1)&&(g.push(z,Y,Z),B+=3)}m.addGroup(y,B,0),y+=B}function U(w){const k=E,B=new te,P=new Q;let V=0;const D=w===!0?t:i,T=w===!0?1:-1;for(let Y=1;Y<=l;Y++)_.push(0,M*T,0),v.push(0,T,0),S.push(.5,.5),E++;const z=E;for(let Y=0;Y<=l;Y++){const tt=Y/l*p+d,lt=Math.cos(tt),N=Math.sin(tt);P.x=D*N,P.y=M*T,P.z=D*lt,_.push(P.x,P.y,P.z),v.push(0,T,0),B.x=lt*.5+.5,B.y=N*.5*T+.5,S.push(B.x,B.y),E++}for(let Y=0;Y<l;Y++){const Z=k+Y,tt=z+Y;w===!0?g.push(tt,tt+1,Z):g.push(tt+1,tt,Z),V+=3}m.addGroup(y,V,w===!0?1:2),y+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qd extends Wd{constructor(t=1,i=1,r=32,l=1,c=!1,f=0,d=Math.PI*2){super(0,t,i,r,l,c,f,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:d}}static fromJSON(t){return new qd(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hc extends fa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,_=t/d,v=i/p,S=[],E=[],R=[],M=[];for(let y=0;y<g;y++){const I=y*v-f;for(let U=0;U<m;U++){const w=U*_-c;E.push(w,-I,0),R.push(0,0,1),M.push(U/d),M.push(1-y/p)}}for(let y=0;y<p;y++)for(let I=0;I<d;I++){const U=I+m*y,w=I+m*(y+1),k=I+1+m*(y+1),B=I+1+m*y;S.push(U,w,B),S.push(w,k,B)}this.setIndex(S),this.setAttribute("position",new ti(E,3)),this.setAttribute("normal",new ti(R,3)),this.setAttribute("uv",new ti(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Yd extends fa{constructor(t=new S0(new Q(-1,-1,0),new Q(-1,1,0),new Q(1,1,0)),i=64,r=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:l,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new Q,p=new Q,m=new te;let g=new Q;const _=[],v=[],S=[],E=[];R(),this.setIndex(E),this.setAttribute("position",new ti(_,3)),this.setAttribute("normal",new ti(v,3)),this.setAttribute("uv",new ti(S,2));function R(){for(let U=0;U<i;U++)M(U);M(c===!1?i:0),I(),y()}function M(U){g=t.getPointAt(U/i,g);const w=f.normals[U],k=f.binormals[U];for(let B=0;B<=l;B++){const P=B/l*Math.PI*2,V=Math.sin(P),D=-Math.cos(P);p.x=D*w.x+V*k.x,p.y=D*w.y+V*k.y,p.z=D*w.z+V*k.z,p.normalize(),v.push(p.x,p.y,p.z),d.x=g.x+r*p.x,d.y=g.y+r*p.y,d.z=g.z+r*p.z,_.push(d.x,d.y,d.z)}}function y(){for(let U=1;U<=i;U++)for(let w=1;w<=l;w++){const k=(l+1)*(U-1)+(w-1),B=(l+1)*U+(w-1),P=(l+1)*U+w,V=(l+1)*(U-1)+w;E.push(k,B,V),E.push(B,P,V)}}function I(){for(let U=0;U<=i;U++)for(let w=0;w<=l;w++)m.x=U/i,m.y=w/l,S.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Yd(new WM[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class qM extends Ic{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class YM extends Ic{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class M0 extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const wh=new je,hv=new Q,dv=new Q;class jM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;hv.setFromMatrixPosition(t.matrixWorld),i.position.copy(hv),dv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(dv),i.updateMatrixWorld(),wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class E0 extends g0{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ZM extends jM{constructor(){super(new E0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class KM extends M0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new ZM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class QM extends M0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class JM extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function pv(s,t,i,r){const l=$M(r);switch(i){case e0:return s*t;case i0:return s*t;case a0:return s*t*2;case r0:return s*t/l.components*l.byteLength;case Bd:return s*t/l.components*l.byteLength;case s0:return s*t*2/l.components*l.byteLength;case Fd:return s*t*2/l.components*l.byteLength;case n0:return s*t*3/l.components*l.byteLength;case Ti:return s*t*4/l.components*l.byteLength;case Id:return s*t*4/l.components*l.byteLength;case bc:case Ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Rc:case Cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nd:case ad:return Math.max(s,16)*Math.max(t,8)/4;case ed:case id:return Math.max(s,8)*Math.max(t,8)/2;case rd:case sd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case od:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ld:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ud:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case fd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case hd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case dd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case pd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case md:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _d:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case xd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case yd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Sd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case wc:case Md:case Ed:return Math.ceil(s/4)*Math.ceil(t/4)*16;case o0:case Td:return Math.ceil(s/4)*Math.ceil(t/4)*8;case bd:case Ad:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $M(s){switch(s){case ca:case Jv:return{byteLength:1,components:1};case Bo:case $v:case Go:return{byteLength:2,components:1};case zd:case Pd:return{byteLength:2,components:4};case br:case Od:case sa:return{byteLength:4,components:1};case t0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function T0(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function tE(s){const t=new WeakMap;function i(d,p){const m=d.array,g=d.usage,_=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,g),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const g=p.array,_=p.updateRanges;if(s.bindBuffer(m,d),_.length===0)s.bufferSubData(m,0,g);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],R=_[S];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++v,_[v]=R)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const R=_[S];s.bufferSubData(m,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(s.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var eE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nE=`#ifdef USE_ALPHAHASH
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
#endif`,iE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oE=`#ifdef USE_AOMAP
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
#endif`,lE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cE=`#ifdef USE_BATCHING
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
#endif`,uE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pE=`#ifdef USE_IRIDESCENCE
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
#endif`,mE=`#ifdef USE_BUMPMAP
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
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,TE=`#define PI 3.141592653589793
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
} // validated`,bE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,AE=`vec3 transformedNormal = objectNormal;
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
#endif`,RE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UE="gl_FragColor = linearToOutputTexel( gl_FragColor );",LE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zE=`#ifdef USE_ENVMAP
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
#endif`,PE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,FE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VE=`#ifdef USE_GRADIENTMAP
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
}`,kE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qE=`uniform bool receiveShadow;
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
#endif`,YE=`#ifdef USE_ENVMAP
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
#endif`,jE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JE=`PhysicalMaterial material;
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
#endif`,$E=`struct PhysicalMaterial {
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
}`,tT=`
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
#endif`,eT=`#if defined( RE_IndirectDiffuse )
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
#endif`,nT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uT=`#if defined( USE_POINTS_UV )
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
#endif`,fT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gT=`#ifdef USE_MORPHTARGETS
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
#endif`,_T=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ST=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ET=`#ifdef USE_NORMALMAP
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
#endif`,TT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IT=`float getShadowMask() {
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
}`,HT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GT=`#ifdef USE_SKINNING
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
#endif`,VT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kT=`#ifdef USE_SKINNING
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
#endif`,XT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jT=`#ifdef USE_TRANSMISSION
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
#endif`,ZT=`#ifdef USE_TRANSMISSION
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
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$T=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eb=`uniform sampler2D t2D;
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
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`#include <common>
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
}`,ob=`#if DEPTH_PACKING == 3200
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
}`,lb=`#define DISTANCE
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
}`,cb=`#define DISTANCE
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`uniform float scale;
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
}`,db=`uniform vec3 diffuse;
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
}`,pb=`#include <common>
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
}`,mb=`uniform vec3 diffuse;
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
}`,gb=`#define LAMBERT
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
}`,_b=`#define LAMBERT
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
}`,vb=`#define MATCAP
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
}`,xb=`#define MATCAP
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
}`,yb=`#define NORMAL
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
}`,Sb=`#define NORMAL
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
}`,Mb=`#define PHONG
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
}`,Eb=`#define PHONG
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
}`,Tb=`#define STANDARD
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
}`,bb=`#define STANDARD
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
}`,Ab=`#define TOON
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
}`,Rb=`#define TOON
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
}`,Cb=`uniform float size;
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
}`,wb=`uniform vec3 diffuse;
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
}`,Db=`#include <common>
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
}`,Ub=`uniform vec3 color;
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
}`,Lb=`uniform float rotation;
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
}`,Nb=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:eE,alphahash_pars_fragment:nE,alphamap_fragment:iE,alphamap_pars_fragment:aE,alphatest_fragment:rE,alphatest_pars_fragment:sE,aomap_fragment:oE,aomap_pars_fragment:lE,batching_pars_vertex:cE,batching_vertex:uE,begin_vertex:fE,beginnormal_vertex:hE,bsdfs:dE,iridescence_fragment:pE,bumpmap_pars_fragment:mE,clipping_planes_fragment:gE,clipping_planes_pars_fragment:_E,clipping_planes_pars_vertex:vE,clipping_planes_vertex:xE,color_fragment:yE,color_pars_fragment:SE,color_pars_vertex:ME,color_vertex:EE,common:TE,cube_uv_reflection_fragment:bE,defaultnormal_vertex:AE,displacementmap_pars_vertex:RE,displacementmap_vertex:CE,emissivemap_fragment:wE,emissivemap_pars_fragment:DE,colorspace_fragment:UE,colorspace_pars_fragment:LE,envmap_fragment:NE,envmap_common_pars_fragment:OE,envmap_pars_fragment:zE,envmap_pars_vertex:PE,envmap_physical_pars_fragment:YE,envmap_vertex:BE,fog_vertex:FE,fog_pars_vertex:IE,fog_fragment:HE,fog_pars_fragment:GE,gradientmap_pars_fragment:VE,lightmap_pars_fragment:kE,lights_lambert_fragment:XE,lights_lambert_pars_fragment:WE,lights_pars_begin:qE,lights_toon_fragment:jE,lights_toon_pars_fragment:ZE,lights_phong_fragment:KE,lights_phong_pars_fragment:QE,lights_physical_fragment:JE,lights_physical_pars_fragment:$E,lights_fragment_begin:tT,lights_fragment_maps:eT,lights_fragment_end:nT,logdepthbuf_fragment:iT,logdepthbuf_pars_fragment:aT,logdepthbuf_pars_vertex:rT,logdepthbuf_vertex:sT,map_fragment:oT,map_pars_fragment:lT,map_particle_fragment:cT,map_particle_pars_fragment:uT,metalnessmap_fragment:fT,metalnessmap_pars_fragment:hT,morphinstance_vertex:dT,morphcolor_vertex:pT,morphnormal_vertex:mT,morphtarget_pars_vertex:gT,morphtarget_vertex:_T,normal_fragment_begin:vT,normal_fragment_maps:xT,normal_pars_fragment:yT,normal_pars_vertex:ST,normal_vertex:MT,normalmap_pars_fragment:ET,clearcoat_normal_fragment_begin:TT,clearcoat_normal_fragment_maps:bT,clearcoat_pars_fragment:AT,iridescence_pars_fragment:RT,opaque_fragment:CT,packing:wT,premultiplied_alpha_fragment:DT,project_vertex:UT,dithering_fragment:LT,dithering_pars_fragment:NT,roughnessmap_fragment:OT,roughnessmap_pars_fragment:zT,shadowmap_pars_fragment:PT,shadowmap_pars_vertex:BT,shadowmap_vertex:FT,shadowmask_pars_fragment:IT,skinbase_vertex:HT,skinning_pars_vertex:GT,skinning_vertex:VT,skinnormal_vertex:kT,specularmap_fragment:XT,specularmap_pars_fragment:WT,tonemapping_fragment:qT,tonemapping_pars_fragment:YT,transmission_fragment:jT,transmission_pars_fragment:ZT,uv_pars_fragment:KT,uv_pars_vertex:QT,uv_vertex:JT,worldpos_vertex:$T,background_vert:tb,background_frag:eb,backgroundCube_vert:nb,backgroundCube_frag:ib,cube_vert:ab,cube_frag:rb,depth_vert:sb,depth_frag:ob,distanceRGBA_vert:lb,distanceRGBA_frag:cb,equirect_vert:ub,equirect_frag:fb,linedashed_vert:hb,linedashed_frag:db,meshbasic_vert:pb,meshbasic_frag:mb,meshlambert_vert:gb,meshlambert_frag:_b,meshmatcap_vert:vb,meshmatcap_frag:xb,meshnormal_vert:yb,meshnormal_frag:Sb,meshphong_vert:Mb,meshphong_frag:Eb,meshphysical_vert:Tb,meshphysical_frag:bb,meshtoon_vert:Ab,meshtoon_frag:Rb,points_vert:Cb,points_frag:wb,shadow_vert:Db,shadow_frag:Ub,sprite_vert:Lb,sprite_frag:Nb},Ut={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Li={basic:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Nn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Nn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Nn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Nn([Ut.points,Ut.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Nn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Nn([Ut.common,Ut.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Nn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Nn([Ut.sprite,Ut.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Nn([Ut.common,Ut.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Nn([Ut.lights,Ut.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Li.physical={uniforms:Nn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Sc={r:0,b:0,g:0},gr=new ua,Ob=new je;function zb(s,t,i,r,l,c,f){const d=new Ne(0);let p=c===!0?0:1,m,g,_=null,v=0,S=null;function E(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function R(U){let w=!1;const k=E(U);k===null?y(d,p):k&&k.isColor&&(y(k,1),w=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(U,w){const k=E(w);k&&(k.isCubeTexture||k.mapping===Fc)?(g===void 0&&(g=new di(new Wo(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Us(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,P,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gr.copy(w.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(gr)),g.material.toneMapped=Ce.getTransfer(k.colorSpace)!==Ie,(_!==k||v!==k.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=k,v=k.version,S=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(m===void 0&&(m=new di(new Hc(2,2),new qa({name:"BackgroundMaterial",uniforms:Us(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=k,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=Ce.getTransfer(k.colorSpace)!==Ie,k.matrixAutoUpdate===!0&&k.updateMatrix(),m.material.uniforms.uvTransform.value.copy(k.matrix),(_!==k||v!==k.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,_=k,v=k.version,S=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function y(U,w){U.getRGB(Sc,m0(s)),r.buffers.color.setClear(Sc.r,Sc.g,Sc.b,w,f)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,w=1){d.set(U),p=w,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,y(d,p)},render:R,addToRenderList:M,dispose:I}}function Pb(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,f=!1;function d(T,z,Y,Z,tt){let lt=!1;const N=_(Z,Y,z);c!==N&&(c=N,m(c.object)),lt=S(T,Z,Y,tt),lt&&E(T,Z,Y,tt),tt!==null&&t.update(tt,s.ELEMENT_ARRAY_BUFFER),(lt||f)&&(f=!1,w(T,z,Y,Z),tt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function p(){return s.createVertexArray()}function m(T){return s.bindVertexArray(T)}function g(T){return s.deleteVertexArray(T)}function _(T,z,Y){const Z=Y.wireframe===!0;let tt=r[T.id];tt===void 0&&(tt={},r[T.id]=tt);let lt=tt[z.id];lt===void 0&&(lt={},tt[z.id]=lt);let N=lt[Z];return N===void 0&&(N=v(p()),lt[Z]=N),N}function v(T){const z=[],Y=[],Z=[];for(let tt=0;tt<i;tt++)z[tt]=0,Y[tt]=0,Z[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:Z,object:T,attributes:{},index:null}}function S(T,z,Y,Z){const tt=c.attributes,lt=z.attributes;let N=0;const $=Y.getAttributes();for(const j in $)if($[j].location>=0){const Tt=tt[j];let O=lt[j];if(O===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(O=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(O=T.instanceColor)),Tt===void 0||Tt.attribute!==O||O&&Tt.data!==O.data)return!0;N++}return c.attributesNum!==N||c.index!==Z}function E(T,z,Y,Z){const tt={},lt=z.attributes;let N=0;const $=Y.getAttributes();for(const j in $)if($[j].location>=0){let Tt=lt[j];Tt===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Tt=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Tt=T.instanceColor));const O={};O.attribute=Tt,Tt&&Tt.data&&(O.data=Tt.data),tt[j]=O,N++}c.attributes=tt,c.attributesNum=N,c.index=Z}function R(){const T=c.newAttributes;for(let z=0,Y=T.length;z<Y;z++)T[z]=0}function M(T){y(T,0)}function y(T,z){const Y=c.newAttributes,Z=c.enabledAttributes,tt=c.attributeDivisors;Y[T]=1,Z[T]===0&&(s.enableVertexAttribArray(T),Z[T]=1),tt[T]!==z&&(s.vertexAttribDivisor(T,z),tt[T]=z)}function I(){const T=c.newAttributes,z=c.enabledAttributes;for(let Y=0,Z=z.length;Y<Z;Y++)z[Y]!==T[Y]&&(s.disableVertexAttribArray(Y),z[Y]=0)}function U(T,z,Y,Z,tt,lt,N){N===!0?s.vertexAttribIPointer(T,z,Y,tt,lt):s.vertexAttribPointer(T,z,Y,Z,tt,lt)}function w(T,z,Y,Z){R();const tt=Z.attributes,lt=Y.getAttributes(),N=z.defaultAttributeValues;for(const $ in lt){const j=lt[$];if(j.location>=0){let vt=tt[$];if(vt===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(vt=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(vt=T.instanceColor)),vt!==void 0){const Tt=vt.normalized,O=vt.itemSize,rt=t.get(vt);if(rt===void 0)continue;const yt=rt.buffer,J=rt.type,ht=rt.bytesPerElement,Mt=J===s.INT||J===s.UNSIGNED_INT||vt.gpuType===Od;if(vt.isInterleavedBufferAttribute){const xt=vt.data,Ft=xt.stride,jt=vt.offset;if(xt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<j.locationSize;Kt++)y(j.location+Kt,xt.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Kt=0;Kt<j.locationSize;Kt++)M(j.location+Kt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let Kt=0;Kt<j.locationSize;Kt++)U(j.location+Kt,O/j.locationSize,J,Tt,Ft*ht,(jt+O/j.locationSize*Kt)*ht,Mt)}else{if(vt.isInstancedBufferAttribute){for(let xt=0;xt<j.locationSize;xt++)y(j.location+xt,vt.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let xt=0;xt<j.locationSize;xt++)M(j.location+xt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let xt=0;xt<j.locationSize;xt++)U(j.location+xt,O/j.locationSize,J,Tt,O*ht,O/j.locationSize*xt*ht,Mt)}}else if(N!==void 0){const Tt=N[$];if(Tt!==void 0)switch(Tt.length){case 2:s.vertexAttrib2fv(j.location,Tt);break;case 3:s.vertexAttrib3fv(j.location,Tt);break;case 4:s.vertexAttrib4fv(j.location,Tt);break;default:s.vertexAttrib1fv(j.location,Tt)}}}}I()}function k(){V();for(const T in r){const z=r[T];for(const Y in z){const Z=z[Y];for(const tt in Z)g(Z[tt].object),delete Z[tt];delete z[Y]}delete r[T]}}function B(T){if(r[T.id]===void 0)return;const z=r[T.id];for(const Y in z){const Z=z[Y];for(const tt in Z)g(Z[tt].object),delete Z[tt];delete z[Y]}delete r[T.id]}function P(T){for(const z in r){const Y=r[z];if(Y[T.id]===void 0)continue;const Z=Y[T.id];for(const tt in Z)g(Z[tt].object),delete Z[tt];delete Y[T.id]}}function V(){D(),f=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:D,dispose:k,releaseStatesOfGeometry:B,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:M,disableUnusedAttributes:I}}function Bb(s,t,i){let r;function l(m){r=m}function c(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function f(m,g,_){_!==0&&(s.drawArraysInstanced(r,m,g,_),i.update(g,r,_))}function d(m,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];i.update(S,r,1)}function p(m,g,_,v){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,_);let E=0;for(let R=0;R<_;R++)E+=g[R]*v[R];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Fb(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==Ti&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const V=P===Go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ca&&r.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==sa&&!V)}function p(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:I,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:k,maxSamples:B}}function Ib(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new vr,d=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||l;return l=v,r=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,R=_.clipIntersection,M=_.clipShadows,y=s.get(_);if(!l||E===null||E.length===0||c&&!M)c?g(null):m();else{const I=c?0:r,U=I*4;let w=y.clippingState||null;p.value=w,w=g(E,v,U,S);for(let k=0;k!==U;++k)w[k]=i[k];y.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,v,S,E){const R=_!==null?_.length:0;let M=null;if(R!==0){if(M=p.value,E!==!0||M===null){const y=S+R*4,I=v.matrixWorldInverse;d.getNormalMatrix(I),(M===null||M.length<y)&&(M=new Float32Array(y));for(let U=0,w=S;U!==R;++U,w+=4)f.copy(_[U]).applyMatrix4(I,d),f.normal.toArray(M,w),M[w+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function Hb(s){let t=new WeakMap;function i(f,d){return d===Qh?f.mapping=Cs:d===Jh&&(f.mapping=ws),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Qh||d===Jh)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new AM(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ms=4,mv=[.125,.215,.35,.446,.526,.582],Sr=20,Dh=new E0,gv=new Ne;let Uh=null,Lh=0,Nh=0,Oh=!1;const xr=(1+Math.sqrt(5))/2,xs=1/xr,_v=[new Q(-xr,xs,0),new Q(xr,xs,0),new Q(-xs,0,xr),new Q(xs,0,xr),new Q(0,xr,-xs),new Q(0,xr,xs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],Gb=new Q;class vv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=Gb}=c;Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uh,Lh,Nh),this._renderer.xr.enabled=Oh,t.scissorTest=!1,Mc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Cs||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Nh=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:Go,format:Ti,colorSpace:Ds,depthBuffer:!1},l=xv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vb(c)),this._blurMaterial=kb(c,t,i)}return l}_compileMaterial(t){const i=new di(this._lodPlanes[0],t);this._renderer.compile(i,Dh)}_sceneToCubeUV(t,i,r,l,c){const p=new hi(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(gv),_.toneMapping=Xa,_.autoClear=!1;const E=new Vd({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),R=new di(new Wo,E);let M=!1;const y=t.background;y?y.isColor&&(E.color.copy(y),t.background=null,M=!0):(E.color.copy(gv),M=!0);for(let I=0;I<6;I++){const U=I%3;U===0?(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[I],c.y,c.z)):U===1?(p.up.set(0,0,m[I]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[I],c.z)):(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[I]));const w=this._cubeSize;Mc(l,U*w,I>2?w:0,w,w),_.setRenderTarget(l),M&&_.render(R,p),_.render(t,p)}R.geometry.dispose(),R.material.dispose(),_.toneMapping=S,_.autoClear=v,t.background=y}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Cs||t.mapping===ws;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new di(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;Mc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,Dh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=_v[(l-c-1)%_v.length];this._blur(t,c-1,c,f,d)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new di(this._lodPlanes[l],m),v=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Sr-1),R=c/E,M=isFinite(c)?1+Math.floor(g*R):Sr;M>Sr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Sr}`);const y=[];let I=0;for(let P=0;P<Sr;++P){const V=P/R,D=Math.exp(-V*V/2);y.push(D),P===0?I+=D:P<M&&(I+=2*D)}for(let P=0;P<y.length;P++)y[P]=y[P]/I;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=y,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-r;const w=this._sizeLods[l],k=3*w*(l>U-Ms?l-U+Ms:0),B=4*(this._cubeSize-w);Mc(i,k,B,3*w,2*w),p.setRenderTarget(i),p.render(_,Dh)}}function Vb(s){const t=[],i=[],r=[];let l=s;const c=s-Ms+1+mv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>s-Ms?p=mv[f-s+Ms-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,_=1+m,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,R=3,M=2,y=1,I=new Float32Array(R*E*S),U=new Float32Array(M*E*S),w=new Float32Array(y*E*S);for(let B=0;B<S;B++){const P=B%3*2/3-1,V=B>2?0:-1,D=[P,V,0,P+2/3,V,0,P+2/3,V+1,0,P,V,0,P+2/3,V+1,0,P,V+1,0];I.set(D,R*E*B),U.set(v,M*E*B);const T=[B,B,B,B,B,B];w.set(T,y*E*B)}const k=new fa;k.setAttribute("position",new Oi(I,R)),k.setAttribute("uv",new Oi(U,M)),k.setAttribute("faceIndex",new Oi(w,y)),t.push(k),l>Ms&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function xv(s,t,i){const r=new Ar(s,t,i);return r.texture.mapping=Fc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Mc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function kb(s,t,i){const r=new Float32Array(Sr),l=new Q(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jd(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function yv(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Sv(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function jd(){return`

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
	`}function Xb(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Qh||p===Jh,g=p===Cs||p===ws;if(m||g){let _=t.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new vv(s)),_=m?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return m&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new vv(s)),_=m?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Wb(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Dc("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function qb(s,t,i,r){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const S=c.get(v);S&&(t.remove(S),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function p(_){const v=_.attributes;for(const S in v)t.update(v[S],s.ARRAY_BUFFER)}function m(_){const v=[],S=_.index,E=_.attributes.position;let R=0;if(S!==null){const I=S.array;R=S.version;for(let U=0,w=I.length;U<w;U+=3){const k=I[U+0],B=I[U+1],P=I[U+2];v.push(k,B,B,P,P,k)}}else if(E!==void 0){const I=E.array;R=E.version;for(let U=0,w=I.length/3-1;U<w;U+=3){const k=U+0,B=U+1,P=U+2;v.push(k,B,B,P,P,k)}}else return;const M=new(c0(v)?p0:d0)(v,1);M.version=R;const y=c.get(_);y&&t.remove(y),c.set(_,M)}function g(_){const v=c.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function Yb(s,t,i){let r;function l(v){r=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function p(v,S){s.drawElements(r,S,c,v*f),i.update(S,r,1)}function m(v,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,v*f,E),i.update(S,r,E))}function g(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,v,0,E);let M=0;for(let y=0;y<E;y++)M+=S[y];i.update(M,r,1)}function _(v,S,E,R){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<v.length;y++)m(v[y]/f,S[y],R[y]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,v,0,R,0,E);let y=0;for(let I=0;I<E;I++)y+=S[I]*R[I];i.update(y,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function jb(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Zb(s,t,i){const r=new WeakMap,l=new $e;function c(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let D=function(){P.dispose(),r.delete(d),d.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();const S=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],y=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let U=0;S===!0&&(U=1),E===!0&&(U=2),R===!0&&(U=3);let w=d.attributes.position.count*U,k=1;w>t.maxTextureSize&&(k=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const B=new Float32Array(w*k*4*_),P=new u0(B,w,k,_);P.type=sa,P.needsUpdate=!0;const V=U*4;for(let T=0;T<_;T++){const z=M[T],Y=y[T],Z=I[T],tt=w*k*4*T;for(let lt=0;lt<z.count;lt++){const N=lt*V;S===!0&&(l.fromBufferAttribute(z,lt),B[tt+N+0]=l.x,B[tt+N+1]=l.y,B[tt+N+2]=l.z,B[tt+N+3]=0),E===!0&&(l.fromBufferAttribute(Y,lt),B[tt+N+4]=l.x,B[tt+N+5]=l.y,B[tt+N+6]=l.z,B[tt+N+7]=0),R===!0&&(l.fromBufferAttribute(Z,lt),B[tt+N+8]=l.x,B[tt+N+9]=l.y,B[tt+N+10]=l.z,B[tt+N+11]=Z.itemSize===4?l.w:1)}}v={count:_,texture:P,size:new te(w,k)},r.set(d,v),d.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let S=0;for(let R=0;R<m.length;R++)S+=m[R];const E=d.morphTargetsRelative?1:1-S;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function Kb(s,t,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,_=t.get(p,g);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return _}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const b0=new Xn,Mv=new v0(1,1),A0=new u0,R0=new lM,C0=new _0,Ev=[],Tv=[],bv=new Float32Array(16),Av=new Float32Array(9),Rv=new Float32Array(4);function Ns(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=Ev[l];if(c===void 0&&(c=new Float32Array(l),Ev[l]=c),t!==0){r.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(c,d)}return c}function hn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function dn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Gc(s,t){let i=Tv[t];i===void 0&&(i=new Int32Array(t),Tv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function Qb(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function Jb(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2fv(this.addr,t),dn(i,t)}}function $b(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(hn(i,t))return;s.uniform3fv(this.addr,t),dn(i,t)}}function tA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4fv(this.addr,t),dn(i,t)}}function eA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;Rv.set(r),s.uniformMatrix2fv(this.addr,!1,Rv),dn(i,r)}}function nA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;Av.set(r),s.uniformMatrix3fv(this.addr,!1,Av),dn(i,r)}}function iA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(hn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),dn(i,t)}else{if(hn(i,r))return;bv.set(r),s.uniformMatrix4fv(this.addr,!1,bv),dn(i,r)}}function aA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function rA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2iv(this.addr,t),dn(i,t)}}function sA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3iv(this.addr,t),dn(i,t)}}function oA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4iv(this.addr,t),dn(i,t)}}function lA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function cA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(hn(i,t))return;s.uniform2uiv(this.addr,t),dn(i,t)}}function uA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(hn(i,t))return;s.uniform3uiv(this.addr,t),dn(i,t)}}function fA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(hn(i,t))return;s.uniform4uiv(this.addr,t),dn(i,t)}}function hA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Mv.compareFunction=l0,c=Mv):c=b0,i.setTexture2D(t||c,l)}function dA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||R0,l)}function pA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||C0,l)}function mA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||A0,l)}function gA(s){switch(s){case 5126:return Qb;case 35664:return Jb;case 35665:return $b;case 35666:return tA;case 35674:return eA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return aA;case 35667:case 35671:return rA;case 35668:case 35672:return sA;case 35669:case 35673:return oA;case 5125:return lA;case 36294:return cA;case 36295:return uA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}function _A(s,t){s.uniform1fv(this.addr,t)}function vA(s,t){const i=Ns(t,this.size,2);s.uniform2fv(this.addr,i)}function xA(s,t){const i=Ns(t,this.size,3);s.uniform3fv(this.addr,i)}function yA(s,t){const i=Ns(t,this.size,4);s.uniform4fv(this.addr,i)}function SA(s,t){const i=Ns(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function MA(s,t){const i=Ns(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function EA(s,t){const i=Ns(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function TA(s,t){s.uniform1iv(this.addr,t)}function bA(s,t){s.uniform2iv(this.addr,t)}function AA(s,t){s.uniform3iv(this.addr,t)}function RA(s,t){s.uniform4iv(this.addr,t)}function CA(s,t){s.uniform1uiv(this.addr,t)}function wA(s,t){s.uniform2uiv(this.addr,t)}function DA(s,t){s.uniform3uiv(this.addr,t)}function UA(s,t){s.uniform4uiv(this.addr,t)}function LA(s,t,i){const r=this.cache,l=t.length,c=Gc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||b0,c[f])}function NA(s,t,i){const r=this.cache,l=t.length,c=Gc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||R0,c[f])}function OA(s,t,i){const r=this.cache,l=t.length,c=Gc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||C0,c[f])}function zA(s,t,i){const r=this.cache,l=t.length,c=Gc(i,l);hn(r,c)||(s.uniform1iv(this.addr,c),dn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||A0,c[f])}function PA(s){switch(s){case 5126:return _A;case 35664:return vA;case 35665:return xA;case 35666:return yA;case 35674:return SA;case 35675:return MA;case 35676:return EA;case 5124:case 35670:return TA;case 35667:case 35671:return bA;case 35668:case 35672:return AA;case 35669:case 35673:return RA;case 5125:return CA;case 36294:return wA;case 36295:return DA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return NA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return zA}}class BA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=gA(i.type)}}class FA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PA(i.type)}}class IA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function Cv(s,t){s.seq.push(t),s.map[t.id]=t}function HA(s,t,i){const r=s.name,l=r.length;for(zh.lastIndex=0;;){const c=zh.exec(r),f=zh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){Cv(i,m===void 0?new BA(d,s,t):new FA(d,s,t));break}else{let _=i.map[d];_===void 0&&(_=new IA(d),Cv(i,_)),i=_}}}class Uc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);HA(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function wv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const GA=37297;let VA=0;function kA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const Dv=new ce;function XA(s){Ce._getMatrix(Dv,Ce.workingColorSpace,s);const t=`mat3( ${Dv.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(s)){case zc:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Uv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+kA(s.getShaderSource(t),f)}else return l}function WA(s,t){const i=XA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function qA(s,t){let i;switch(t){case NS:i="Linear";break;case OS:i="Reinhard";break;case zS:i="Cineon";break;case PS:i="ACESFilmic";break;case FS:i="AgX";break;case IS:i="Neutral";break;case BS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ec=new Q;function YA(){Ce.getLuminanceCoefficients(Ec);const s=Ec.x.toFixed(4),t=Ec.y.toFixed(4),i=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function ZA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function KA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function Oo(s){return s!==""}function Lv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const QA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(s){return s.replace(QA,$A)}const JA=new Map;function $A(s,t){let i=ue[t];if(i===void 0){const r=JA.get(t);if(r!==void 0)i=ue[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Cd(i)}const t1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ov(s){return s.replace(t1,e1)}function e1(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function zv(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function n1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===hS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===aa&&(t="SHADOWMAP_TYPE_VSM"),t}function i1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Cs:case ws:t="ENVMAP_TYPE_CUBE";break;case Fc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function a1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function r1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Kv:t="ENVMAP_BLENDING_MULTIPLY";break;case US:t="ENVMAP_BLENDING_MIX";break;case LS:t="ENVMAP_BLENDING_ADD";break}return t}function s1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function o1(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=n1(i),m=i1(i),g=a1(i),_=r1(i),v=s1(i),S=jA(i),E=ZA(c),R=l.createProgram();let M,y,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Oo).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Oo).join(`
`),y.length>0&&(y+=`
`)):(M=[zv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),y=[zv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?ue.tonemapping_pars_fragment:"",i.toneMapping!==Xa?qA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,WA("linearToOutputTexel",i.outputColorSpace),YA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Oo).join(`
`)),f=Cd(f),f=Lv(f,i),f=Nv(f,i),d=Cd(d),d=Lv(d,i),d=Nv(d,i),f=Ov(f),d=Ov(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===Y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=I+M+f,w=I+y+d,k=wv(l,l.VERTEX_SHADER,U),B=wv(l,l.FRAGMENT_SHADER,w);l.attachShader(R,k),l.attachShader(R,B),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function P(z){if(s.debug.checkShaderErrors){const Y=l.getProgramInfoLog(R).trim(),Z=l.getShaderInfoLog(k).trim(),tt=l.getShaderInfoLog(B).trim();let lt=!0,N=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(lt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,k,B);else{const $=Uv(l,k,"vertex"),j=Uv(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Y+`
`+$+`
`+j)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(Z===""||tt==="")&&(N=!1);N&&(z.diagnostics={runnable:lt,programLog:Y,vertexShader:{log:Z,prefix:M},fragmentShader:{log:tt,prefix:y}})}l.deleteShader(k),l.deleteShader(B),V=new Uc(l,R),D=KA(l,R)}let V;this.getUniforms=function(){return V===void 0&&P(this),V};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let T=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=l.getProgramParameter(R,GA)),T},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=VA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=k,this.fragmentShader=B,this}let l1=0;class c1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new u1(t),i.set(t,r)),r}}class u1{constructor(t){this.id=l1++,this.code=t,this.usedTimes=0}}function f1(s,t,i,r,l,c,f){const d=new f0,p=new c1,m=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return m.add(D),D===0?"uv":`uv${D}`}function M(D,T,z,Y,Z){const tt=Y.fog,lt=Z.geometry,N=D.isMeshStandardMaterial?Y.environment:null,$=(D.isMeshStandardMaterial?i:t).get(D.envMap||N),j=$&&$.mapping===Fc?$.image.height:null,vt=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const Tt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,O=Tt!==void 0?Tt.length:0;let rt=0;lt.morphAttributes.position!==void 0&&(rt=1),lt.morphAttributes.normal!==void 0&&(rt=2),lt.morphAttributes.color!==void 0&&(rt=3);let yt,J,ht,Mt;if(vt){const Te=Li[vt];yt=Te.vertexShader,J=Te.fragmentShader}else yt=D.vertexShader,J=D.fragmentShader,p.update(D),ht=p.getVertexShaderID(D),Mt=p.getFragmentShaderID(D);const xt=s.getRenderTarget(),Ft=s.state.buffers.depth.getReversed(),jt=Z.isInstancedMesh===!0,Kt=Z.isBatchedMesh===!0,Ve=!!D.map,He=!!D.matcap,fe=!!$,H=!!D.aoMap,Tn=!!D.lightMap,he=!!D.bumpMap,ge=!!D.normalMap,Xt=!!D.displacementMap,De=!!D.emissiveMap,Vt=!!D.metalnessMap,L=!!D.roughnessMap,A=D.anisotropy>0,at=D.clearcoat>0,dt=D.dispersion>0,St=D.iridescence>0,mt=D.sheen>0,Ht=D.transmission>0,Rt=A&&!!D.anisotropyMap,zt=at&&!!D.clearcoatMap,_e=at&&!!D.clearcoatNormalMap,bt=at&&!!D.clearcoatRoughnessMap,Pt=St&&!!D.iridescenceMap,Zt=St&&!!D.iridescenceThicknessMap,Gt=mt&&!!D.sheenColorMap,Nt=mt&&!!D.sheenRoughnessMap,$t=!!D.specularMap,se=!!D.specularColorMap,Oe=!!D.specularIntensityMap,W=Ht&&!!D.transmissionMap,Ct=Ht&&!!D.thicknessMap,ut=!!D.gradientMap,_t=!!D.alphaMap,At=D.alphaTest>0,wt=!!D.alphaHash,ee=!!D.extensions;let qe=Xa;D.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(qe=s.toneMapping);const ln={shaderID:vt,shaderType:D.type,shaderName:D.name,vertexShader:yt,fragmentShader:J,defines:D.defines,customVertexShaderID:ht,customFragmentShaderID:Mt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Kt,batchingColor:Kt&&Z._colorsTexture!==null,instancing:jt,instancingColor:jt&&Z.instanceColor!==null,instancingMorph:jt&&Z.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:xt===null?s.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Ds,alphaToCoverage:!!D.alphaToCoverage,map:Ve,matcap:He,envMap:fe,envMapMode:fe&&$.mapping,envMapCubeUVHeight:j,aoMap:H,lightMap:Tn,bumpMap:he,normalMap:ge,displacementMap:v&&Xt,emissiveMap:De,normalMapObjectSpace:ge&&D.normalMapType===XS,normalMapTangentSpace:ge&&D.normalMapType===kS,metalnessMap:Vt,roughnessMap:L,anisotropy:A,anisotropyMap:Rt,clearcoat:at,clearcoatMap:zt,clearcoatNormalMap:_e,clearcoatRoughnessMap:bt,dispersion:dt,iridescence:St,iridescenceMap:Pt,iridescenceThicknessMap:Zt,sheen:mt,sheenColorMap:Gt,sheenRoughnessMap:Nt,specularMap:$t,specularColorMap:se,specularIntensityMap:Oe,transmission:Ht,transmissionMap:W,thicknessMap:Ct,gradientMap:ut,opaque:D.transparent===!1&&D.blending===Es&&D.alphaToCoverage===!1,alphaMap:_t,alphaTest:At,alphaHash:wt,combine:D.combine,mapUv:Ve&&R(D.map.channel),aoMapUv:H&&R(D.aoMap.channel),lightMapUv:Tn&&R(D.lightMap.channel),bumpMapUv:he&&R(D.bumpMap.channel),normalMapUv:ge&&R(D.normalMap.channel),displacementMapUv:Xt&&R(D.displacementMap.channel),emissiveMapUv:De&&R(D.emissiveMap.channel),metalnessMapUv:Vt&&R(D.metalnessMap.channel),roughnessMapUv:L&&R(D.roughnessMap.channel),anisotropyMapUv:Rt&&R(D.anisotropyMap.channel),clearcoatMapUv:zt&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:_e&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&R(D.sheenRoughnessMap.channel),specularMapUv:$t&&R(D.specularMap.channel),specularColorMapUv:se&&R(D.specularColorMap.channel),specularIntensityMapUv:Oe&&R(D.specularIntensityMap.channel),transmissionMapUv:W&&R(D.transmissionMap.channel),thicknessMapUv:Ct&&R(D.thicknessMap.channel),alphaMapUv:_t&&R(D.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(ge||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!lt.attributes.uv&&(Ve||_t),fog:!!tt,useFog:D.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ft,skinning:Z.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:rt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ve&&D.map.isVideoTexture===!0&&Ce.getTransfer(D.map.colorSpace)===Ie,decodeVideoTextureEmissive:De&&D.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(D.emissiveMap.colorSpace)===Ie,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ra,flipSided:D.side===kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:ee&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&D.extensions.multiDraw===!0||Kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return ln.vertexUv1s=m.has(1),ln.vertexUv2s=m.has(2),ln.vertexUv3s=m.has(3),m.clear(),ln}function y(D){const T=[];if(D.shaderID?T.push(D.shaderID):(T.push(D.customVertexShaderID),T.push(D.customFragmentShaderID)),D.defines!==void 0)for(const z in D.defines)T.push(z),T.push(D.defines[z]);return D.isRawShaderMaterial===!1&&(I(T,D),U(T,D),T.push(s.outputColorSpace)),T.push(D.customProgramCacheKey),T.join()}function I(D,T){D.push(T.precision),D.push(T.outputColorSpace),D.push(T.envMapMode),D.push(T.envMapCubeUVHeight),D.push(T.mapUv),D.push(T.alphaMapUv),D.push(T.lightMapUv),D.push(T.aoMapUv),D.push(T.bumpMapUv),D.push(T.normalMapUv),D.push(T.displacementMapUv),D.push(T.emissiveMapUv),D.push(T.metalnessMapUv),D.push(T.roughnessMapUv),D.push(T.anisotropyMapUv),D.push(T.clearcoatMapUv),D.push(T.clearcoatNormalMapUv),D.push(T.clearcoatRoughnessMapUv),D.push(T.iridescenceMapUv),D.push(T.iridescenceThicknessMapUv),D.push(T.sheenColorMapUv),D.push(T.sheenRoughnessMapUv),D.push(T.specularMapUv),D.push(T.specularColorMapUv),D.push(T.specularIntensityMapUv),D.push(T.transmissionMapUv),D.push(T.thicknessMapUv),D.push(T.combine),D.push(T.fogExp2),D.push(T.sizeAttenuation),D.push(T.morphTargetsCount),D.push(T.morphAttributeCount),D.push(T.numDirLights),D.push(T.numPointLights),D.push(T.numSpotLights),D.push(T.numSpotLightMaps),D.push(T.numHemiLights),D.push(T.numRectAreaLights),D.push(T.numDirLightShadows),D.push(T.numPointLightShadows),D.push(T.numSpotLightShadows),D.push(T.numSpotLightShadowsWithMaps),D.push(T.numLightProbes),D.push(T.shadowMapType),D.push(T.toneMapping),D.push(T.numClippingPlanes),D.push(T.numClipIntersection),D.push(T.depthPacking)}function U(D,T){d.disableAll(),T.supportsVertexTextures&&d.enable(0),T.instancing&&d.enable(1),T.instancingColor&&d.enable(2),T.instancingMorph&&d.enable(3),T.matcap&&d.enable(4),T.envMap&&d.enable(5),T.normalMapObjectSpace&&d.enable(6),T.normalMapTangentSpace&&d.enable(7),T.clearcoat&&d.enable(8),T.iridescence&&d.enable(9),T.alphaTest&&d.enable(10),T.vertexColors&&d.enable(11),T.vertexAlphas&&d.enable(12),T.vertexUv1s&&d.enable(13),T.vertexUv2s&&d.enable(14),T.vertexUv3s&&d.enable(15),T.vertexTangents&&d.enable(16),T.anisotropy&&d.enable(17),T.alphaHash&&d.enable(18),T.batching&&d.enable(19),T.dispersion&&d.enable(20),T.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),T.fog&&d.enable(0),T.useFog&&d.enable(1),T.flatShading&&d.enable(2),T.logarithmicDepthBuffer&&d.enable(3),T.reverseDepthBuffer&&d.enable(4),T.skinning&&d.enable(5),T.morphTargets&&d.enable(6),T.morphNormals&&d.enable(7),T.morphColors&&d.enable(8),T.premultipliedAlpha&&d.enable(9),T.shadowMapEnabled&&d.enable(10),T.doubleSided&&d.enable(11),T.flipSided&&d.enable(12),T.useDepthPacking&&d.enable(13),T.dithering&&d.enable(14),T.transmission&&d.enable(15),T.sheen&&d.enable(16),T.opaque&&d.enable(17),T.pointsUvs&&d.enable(18),T.decodeVideoTexture&&d.enable(19),T.decodeVideoTextureEmissive&&d.enable(20),T.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const T=E[D.type];let z;if(T){const Y=Li[T];z=MM.clone(Y.uniforms)}else z=D.uniforms;return z}function k(D,T){let z;for(let Y=0,Z=g.length;Y<Z;Y++){const tt=g[Y];if(tt.cacheKey===T){z=tt,++z.usedTimes;break}}return z===void 0&&(z=new o1(s,T,D,c),g.push(z)),z}function B(D){if(--D.usedTimes===0){const T=g.indexOf(D);g[T]=g[g.length-1],g.pop(),D.destroy()}}function P(D){p.remove(D)}function V(){p.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:w,acquireProgram:k,releaseProgram:B,releaseShaderCache:P,programs:g,dispose:V}}function h1(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,p){s.get(f)[d]=p}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function d1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Pv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Bv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(_,v,S,E,R,M){let y=s[t];return y===void 0?(y={id:_.id,object:_,geometry:v,material:S,groupOrder:E,renderOrder:_.renderOrder,z:R,group:M},s[t]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=S,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=R,y.group=M),t++,y}function d(_,v,S,E,R,M){const y=f(_,v,S,E,R,M);S.transmission>0?r.push(y):S.transparent===!0?l.push(y):i.push(y)}function p(_,v,S,E,R,M){const y=f(_,v,S,E,R,M);S.transmission>0?r.unshift(y):S.transparent===!0?l.unshift(y):i.unshift(y)}function m(_,v){i.length>1&&i.sort(_||d1),r.length>1&&r.sort(v||Pv),l.length>1&&l.sort(v||Pv)}function g(){for(let _=t,v=s.length;_<v;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function p1(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new Bv,s.set(r,[f])):l>=c.length?(f=new Bv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function m1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Q,color:new Ne};break;case"SpotLight":i={position:new Q,direction:new Q,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":i={color:new Ne,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[t.id]=i,i}}}function g1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let _1=0;function v1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function x1(s){const t=new m1,i=g1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const l=new Q,c=new je,f=new je;function d(m){let g=0,_=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,E=0,R=0,M=0,y=0,I=0,U=0,w=0,k=0,B=0,P=0;m.sort(v1);for(let D=0,T=m.length;D<T;D++){const z=m[D],Y=z.color,Z=z.intensity,tt=z.distance,lt=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=Y.r*Z,_+=Y.g*Z,v+=Y.b*Z;else if(z.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(z.sh.coefficients[N],Z);P++}else if(z.isDirectionalLight){const N=t.get(z);if(N.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const $=z.shadow,j=i.get(z);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,r.directionalShadow[S]=j,r.directionalShadowMap[S]=lt,r.directionalShadowMatrix[S]=z.shadow.matrix,I++}r.directional[S]=N,S++}else if(z.isSpotLight){const N=t.get(z);N.position.setFromMatrixPosition(z.matrixWorld),N.color.copy(Y).multiplyScalar(Z),N.distance=tt,N.coneCos=Math.cos(z.angle),N.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),N.decay=z.decay,r.spot[R]=N;const $=z.shadow;if(z.map&&(r.spotLightMap[k]=z.map,k++,$.updateMatrices(z),z.castShadow&&B++),r.spotLightMatrix[R]=$.matrix,z.castShadow){const j=i.get(z);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,r.spotShadow[R]=j,r.spotShadowMap[R]=lt,w++}R++}else if(z.isRectAreaLight){const N=t.get(z);N.color.copy(Y).multiplyScalar(Z),N.halfWidth.set(z.width*.5,0,0),N.halfHeight.set(0,z.height*.5,0),r.rectArea[M]=N,M++}else if(z.isPointLight){const N=t.get(z);if(N.color.copy(z.color).multiplyScalar(z.intensity),N.distance=z.distance,N.decay=z.decay,z.castShadow){const $=z.shadow,j=i.get(z);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=lt,r.pointShadowMatrix[E]=z.shadow.matrix,U++}r.point[E]=N,E++}else if(z.isHemisphereLight){const N=t.get(z);N.skyColor.copy(z.color).multiplyScalar(Z),N.groundColor.copy(z.groundColor).multiplyScalar(Z),r.hemi[y]=N,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const V=r.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==R||V.rectAreaLength!==M||V.hemiLength!==y||V.numDirectionalShadows!==I||V.numPointShadows!==U||V.numSpotShadows!==w||V.numSpotMaps!==k||V.numLightProbes!==P)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=M,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=w+k-B,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=P,V.directionalLength=S,V.pointLength=E,V.spotLength=R,V.rectAreaLength=M,V.hemiLength=y,V.numDirectionalShadows=I,V.numPointShadows=U,V.numSpotShadows=w,V.numSpotMaps=k,V.numLightProbes=P,r.version=_1++)}function p(m,g){let _=0,v=0,S=0,E=0,R=0;const M=g.matrixWorldInverse;for(let y=0,I=m.length;y<I;y++){const U=m[y];if(U.isDirectionalLight){const w=r.directional[_];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),_++}else if(U.isSpotLight){const w=r.spot[S];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const w=r.point[v];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(M),v++}else if(U.isHemisphereLight){const w=r.hemi[R];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(M),R++}}}return{setup:d,setupView:p,state:r}}function Fv(s){const t=new x1(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function d(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function y1(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Fv(s),t.set(l,[d])):c>=f.length?(d=new Fv(s),f.push(d)):d=f[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const S1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M1=`uniform sampler2D shadow_pass;
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
}`;function E1(s,t,i){let r=new kd;const l=new te,c=new te,f=new $e,d=new qM({depthPacking:VS}),p=new YM,m={},g=i.maxTextureSize,_={[Wa]:kn,[kn]:Wa,[ra]:ra},v=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:S1,fragmentShader:M1}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new fa;E.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new di(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zv;let y=this.type;this.render=function(B,P,V){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;const D=s.getRenderTarget(),T=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(ka),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Z=y!==aa&&this.type===aa,tt=y===aa&&this.type!==aa;for(let lt=0,N=B.length;lt<N;lt++){const $=B[lt],j=$.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const vt=j.getFrameExtents();if(l.multiply(vt),c.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/vt.x),l.x=c.x*vt.x,j.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/vt.y),l.y=c.y*vt.y,j.mapSize.y=c.y)),j.map===null||Z===!0||tt===!0){const O=this.type!==aa?{minFilter:bi,magFilter:bi}:{};j.map!==null&&j.map.dispose(),j.map=new Ar(l.x,l.y,O),j.map.texture.name=$.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const Tt=j.getViewportCount();for(let O=0;O<Tt;O++){const rt=j.getViewport(O);f.set(c.x*rt.x,c.y*rt.y,c.x*rt.z,c.y*rt.w),Y.viewport(f),j.updateMatrices($,O),r=j.getFrustum(),w(P,V,j.camera,$,this.type)}j.isPointLightShadow!==!0&&this.type===aa&&I(j,V),j.needsUpdate=!1}y=this.type,M.needsUpdate=!1,s.setRenderTarget(D,T,z)};function I(B,P){const V=t.update(R);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ar(l.x,l.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(P,null,V,v,R,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(P,null,V,S,R,null)}function U(B,P,V,D){let T=null;const z=V.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(z!==void 0)T=z;else if(T=V.isPointLight===!0?p:d,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Y=T.uuid,Z=P.uuid;let tt=m[Y];tt===void 0&&(tt={},m[Y]=tt);let lt=tt[Z];lt===void 0&&(lt=T.clone(),tt[Z]=lt,P.addEventListener("dispose",k)),T=lt}if(T.visible=P.visible,T.wireframe=P.wireframe,D===aa?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:_[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,V.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Y=s.properties.get(T);Y.light=V}return T}function w(B,P,V,D,T){if(B.visible===!1)return;if(B.layers.test(P.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&T===aa)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,B.matrixWorld);const Z=t.update(B),tt=B.material;if(Array.isArray(tt)){const lt=Z.groups;for(let N=0,$=lt.length;N<$;N++){const j=lt[N],vt=tt[j.materialIndex];if(vt&&vt.visible){const Tt=U(B,vt,D,T);B.onBeforeShadow(s,B,P,V,Z,Tt,j),s.renderBufferDirect(V,null,Z,Tt,B,j),B.onAfterShadow(s,B,P,V,Z,Tt,j)}}}else if(tt.visible){const lt=U(B,tt,D,T);B.onBeforeShadow(s,B,P,V,Z,lt,null),s.renderBufferDirect(V,null,Z,lt,B,null),B.onAfterShadow(s,B,P,V,Z,lt,null)}}const Y=B.children;for(let Z=0,tt=Y.length;Z<tt;Z++)w(Y[Z],P,V,D,T)}function k(B){B.target.removeEventListener("dispose",k);for(const V in m){const D=m[V],T=B.target.uuid;T in D&&(D[T].dispose(),delete D[T])}}}const T1={[Xh]:Wh,[qh]:Zh,[Yh]:Kh,[Rs]:jh,[Wh]:Xh,[Zh]:qh,[Kh]:Yh,[jh]:Rs};function b1(s,t){function i(){let W=!1;const Ct=new $e;let ut=null;const _t=new $e(0,0,0,0);return{setMask:function(At){ut!==At&&!W&&(s.colorMask(At,At,At,At),ut=At)},setLocked:function(At){W=At},setClear:function(At,wt,ee,qe,ln){ln===!0&&(At*=qe,wt*=qe,ee*=qe),Ct.set(At,wt,ee,qe),_t.equals(Ct)===!1&&(s.clearColor(At,wt,ee,qe),_t.copy(Ct))},reset:function(){W=!1,ut=null,_t.set(-1,0,0,0)}}}function r(){let W=!1,Ct=!1,ut=null,_t=null,At=null;return{setReversed:function(wt){if(Ct!==wt){const ee=t.get("EXT_clip_control");wt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),Ct=wt;const qe=At;At=null,this.setClear(qe)}},getReversed:function(){return Ct},setTest:function(wt){wt?xt(s.DEPTH_TEST):Ft(s.DEPTH_TEST)},setMask:function(wt){ut!==wt&&!W&&(s.depthMask(wt),ut=wt)},setFunc:function(wt){if(Ct&&(wt=T1[wt]),_t!==wt){switch(wt){case Xh:s.depthFunc(s.NEVER);break;case Wh:s.depthFunc(s.ALWAYS);break;case qh:s.depthFunc(s.LESS);break;case Rs:s.depthFunc(s.LEQUAL);break;case Yh:s.depthFunc(s.EQUAL);break;case jh:s.depthFunc(s.GEQUAL);break;case Zh:s.depthFunc(s.GREATER);break;case Kh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=wt}},setLocked:function(wt){W=wt},setClear:function(wt){At!==wt&&(Ct&&(wt=1-wt),s.clearDepth(wt),At=wt)},reset:function(){W=!1,ut=null,_t=null,At=null,Ct=!1}}}function l(){let W=!1,Ct=null,ut=null,_t=null,At=null,wt=null,ee=null,qe=null,ln=null;return{setTest:function(Te){W||(Te?xt(s.STENCIL_TEST):Ft(s.STENCIL_TEST))},setMask:function(Te){Ct!==Te&&!W&&(s.stencilMask(Te),Ct=Te)},setFunc:function(Te,_n,pi){(ut!==Te||_t!==_n||At!==pi)&&(s.stencilFunc(Te,_n,pi),ut=Te,_t=_n,At=pi)},setOp:function(Te,_n,pi){(wt!==Te||ee!==_n||qe!==pi)&&(s.stencilOp(Te,_n,pi),wt=Te,ee=_n,qe=pi)},setLocked:function(Te){W=Te},setClear:function(Te){ln!==Te&&(s.clearStencil(Te),ln=Te)},reset:function(){W=!1,Ct=null,ut=null,_t=null,At=null,wt=null,ee=null,qe=null,ln=null}}}const c=new i,f=new r,d=new l,p=new WeakMap,m=new WeakMap;let g={},_={},v=new WeakMap,S=[],E=null,R=!1,M=null,y=null,I=null,U=null,w=null,k=null,B=null,P=new Ne(0,0,0),V=0,D=!1,T=null,z=null,Y=null,Z=null,tt=null;const lt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,$=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),N=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),N=$>=2);let vt=null,Tt={};const O=s.getParameter(s.SCISSOR_BOX),rt=s.getParameter(s.VIEWPORT),yt=new $e().fromArray(O),J=new $e().fromArray(rt);function ht(W,Ct,ut,_t){const At=new Uint8Array(4),wt=s.createTexture();s.bindTexture(W,wt),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ee=0;ee<ut;ee++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ct,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(Ct+ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return wt}const Mt={};Mt[s.TEXTURE_2D]=ht(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=ht(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=ht(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=ht(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),xt(s.DEPTH_TEST),f.setFunc(Rs),he(!1),ge(G_),xt(s.CULL_FACE),H(ka);function xt(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function Ft(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function jt(W,Ct){return _[W]!==Ct?(s.bindFramebuffer(W,Ct),_[W]=Ct,W===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ct),W===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Kt(W,Ct){let ut=S,_t=!1;if(W){ut=v.get(Ct),ut===void 0&&(ut=[],v.set(Ct,ut));const At=W.textures;if(ut.length!==At.length||ut[0]!==s.COLOR_ATTACHMENT0){for(let wt=0,ee=At.length;wt<ee;wt++)ut[wt]=s.COLOR_ATTACHMENT0+wt;ut.length=At.length,_t=!0}}else ut[0]!==s.BACK&&(ut[0]=s.BACK,_t=!0);_t&&s.drawBuffers(ut)}function Ve(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const He={[yr]:s.FUNC_ADD,[pS]:s.FUNC_SUBTRACT,[mS]:s.FUNC_REVERSE_SUBTRACT};He[gS]=s.MIN,He[_S]=s.MAX;const fe={[vS]:s.ZERO,[xS]:s.ONE,[yS]:s.SRC_COLOR,[Vh]:s.SRC_ALPHA,[AS]:s.SRC_ALPHA_SATURATE,[TS]:s.DST_COLOR,[MS]:s.DST_ALPHA,[SS]:s.ONE_MINUS_SRC_COLOR,[kh]:s.ONE_MINUS_SRC_ALPHA,[bS]:s.ONE_MINUS_DST_COLOR,[ES]:s.ONE_MINUS_DST_ALPHA,[RS]:s.CONSTANT_COLOR,[CS]:s.ONE_MINUS_CONSTANT_COLOR,[wS]:s.CONSTANT_ALPHA,[DS]:s.ONE_MINUS_CONSTANT_ALPHA};function H(W,Ct,ut,_t,At,wt,ee,qe,ln,Te){if(W===ka){R===!0&&(Ft(s.BLEND),R=!1);return}if(R===!1&&(xt(s.BLEND),R=!0),W!==dS){if(W!==M||Te!==D){if((y!==yr||w!==yr)&&(s.blendEquation(s.FUNC_ADD),y=yr,w=yr),Te)switch(W){case Es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case V_:s.blendFunc(s.ONE,s.ONE);break;case k_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case X_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case V_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case k_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case X_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}I=null,U=null,k=null,B=null,P.set(0,0,0),V=0,M=W,D=Te}return}At=At||Ct,wt=wt||ut,ee=ee||_t,(Ct!==y||At!==w)&&(s.blendEquationSeparate(He[Ct],He[At]),y=Ct,w=At),(ut!==I||_t!==U||wt!==k||ee!==B)&&(s.blendFuncSeparate(fe[ut],fe[_t],fe[wt],fe[ee]),I=ut,U=_t,k=wt,B=ee),(qe.equals(P)===!1||ln!==V)&&(s.blendColor(qe.r,qe.g,qe.b,ln),P.copy(qe),V=ln),M=W,D=!1}function Tn(W,Ct){W.side===ra?Ft(s.CULL_FACE):xt(s.CULL_FACE);let ut=W.side===kn;Ct&&(ut=!ut),he(ut),W.blending===Es&&W.transparent===!1?H(ka):H(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const _t=W.stencilWrite;d.setTest(_t),_t&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),De(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xt(s.SAMPLE_ALPHA_TO_COVERAGE):Ft(s.SAMPLE_ALPHA_TO_COVERAGE)}function he(W){T!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),T=W)}function ge(W){W!==uS?(xt(s.CULL_FACE),W!==z&&(W===G_?s.cullFace(s.BACK):W===fS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ft(s.CULL_FACE),z=W}function Xt(W){W!==Y&&(N&&s.lineWidth(W),Y=W)}function De(W,Ct,ut){W?(xt(s.POLYGON_OFFSET_FILL),(Z!==Ct||tt!==ut)&&(s.polygonOffset(Ct,ut),Z=Ct,tt=ut)):Ft(s.POLYGON_OFFSET_FILL)}function Vt(W){W?xt(s.SCISSOR_TEST):Ft(s.SCISSOR_TEST)}function L(W){W===void 0&&(W=s.TEXTURE0+lt-1),vt!==W&&(s.activeTexture(W),vt=W)}function A(W,Ct,ut){ut===void 0&&(vt===null?ut=s.TEXTURE0+lt-1:ut=vt);let _t=Tt[ut];_t===void 0&&(_t={type:void 0,texture:void 0},Tt[ut]=_t),(_t.type!==W||_t.texture!==Ct)&&(vt!==ut&&(s.activeTexture(ut),vt=ut),s.bindTexture(W,Ct||Mt[W]),_t.type=W,_t.texture=Ct)}function at(){const W=Tt[vt];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function dt(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function mt(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ht(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function zt(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Gt(W){yt.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),yt.copy(W))}function Nt(W){J.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),J.copy(W))}function $t(W,Ct){let ut=m.get(Ct);ut===void 0&&(ut=new WeakMap,m.set(Ct,ut));let _t=ut.get(W);_t===void 0&&(_t=s.getUniformBlockIndex(Ct,W.name),ut.set(W,_t))}function se(W,Ct){const _t=m.get(Ct).get(W);p.get(Ct)!==_t&&(s.uniformBlockBinding(Ct,_t,W.__bindingPointIndex),p.set(Ct,_t))}function Oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},vt=null,Tt={},_={},v=new WeakMap,S=[],E=null,R=!1,M=null,y=null,I=null,U=null,w=null,k=null,B=null,P=new Ne(0,0,0),V=0,D=!1,T=null,z=null,Y=null,Z=null,tt=null,yt.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:xt,disable:Ft,bindFramebuffer:jt,drawBuffers:Kt,useProgram:Ve,setBlending:H,setMaterial:Tn,setFlipSided:he,setCullFace:ge,setLineWidth:Xt,setPolygonOffset:De,setScissorTest:Vt,activeTexture:L,bindTexture:A,unbindTexture:at,compressedTexImage2D:dt,compressedTexImage3D:St,texImage2D:Pt,texImage3D:Zt,updateUBOMapping:$t,uniformBlockBinding:se,texStorage2D:_e,texStorage3D:bt,texSubImage2D:mt,texSubImage3D:Ht,compressedTexSubImage2D:Rt,compressedTexSubImage3D:zt,scissor:Gt,viewport:Nt,reset:Oe}}function A1(s,t,i,r,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new te,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,A){return S?new OffscreenCanvas(L,A):Bc("canvas")}function R(L,A,at){let dt=1;const St=Vt(L);if((St.width>at||St.height>at)&&(dt=at/Math.max(St.width,St.height)),dt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const mt=Math.floor(dt*St.width),Ht=Math.floor(dt*St.height);_===void 0&&(_=E(mt,Ht));const Rt=A?E(mt,Ht):_;return Rt.width=mt,Rt.height=Ht,Rt.getContext("2d").drawImage(L,0,0,mt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+mt+"x"+Ht+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),L;return L}function M(L){return L.generateMipmaps}function y(L){s.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(L,A,at,dt,St=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let mt=A;if(A===s.RED&&(at===s.FLOAT&&(mt=s.R32F),at===s.HALF_FLOAT&&(mt=s.R16F),at===s.UNSIGNED_BYTE&&(mt=s.R8)),A===s.RED_INTEGER&&(at===s.UNSIGNED_BYTE&&(mt=s.R8UI),at===s.UNSIGNED_SHORT&&(mt=s.R16UI),at===s.UNSIGNED_INT&&(mt=s.R32UI),at===s.BYTE&&(mt=s.R8I),at===s.SHORT&&(mt=s.R16I),at===s.INT&&(mt=s.R32I)),A===s.RG&&(at===s.FLOAT&&(mt=s.RG32F),at===s.HALF_FLOAT&&(mt=s.RG16F),at===s.UNSIGNED_BYTE&&(mt=s.RG8)),A===s.RG_INTEGER&&(at===s.UNSIGNED_BYTE&&(mt=s.RG8UI),at===s.UNSIGNED_SHORT&&(mt=s.RG16UI),at===s.UNSIGNED_INT&&(mt=s.RG32UI),at===s.BYTE&&(mt=s.RG8I),at===s.SHORT&&(mt=s.RG16I),at===s.INT&&(mt=s.RG32I)),A===s.RGB_INTEGER&&(at===s.UNSIGNED_BYTE&&(mt=s.RGB8UI),at===s.UNSIGNED_SHORT&&(mt=s.RGB16UI),at===s.UNSIGNED_INT&&(mt=s.RGB32UI),at===s.BYTE&&(mt=s.RGB8I),at===s.SHORT&&(mt=s.RGB16I),at===s.INT&&(mt=s.RGB32I)),A===s.RGBA_INTEGER&&(at===s.UNSIGNED_BYTE&&(mt=s.RGBA8UI),at===s.UNSIGNED_SHORT&&(mt=s.RGBA16UI),at===s.UNSIGNED_INT&&(mt=s.RGBA32UI),at===s.BYTE&&(mt=s.RGBA8I),at===s.SHORT&&(mt=s.RGBA16I),at===s.INT&&(mt=s.RGBA32I)),A===s.RGB&&at===s.UNSIGNED_INT_5_9_9_9_REV&&(mt=s.RGB9_E5),A===s.RGBA){const Ht=St?zc:Ce.getTransfer(dt);at===s.FLOAT&&(mt=s.RGBA32F),at===s.HALF_FLOAT&&(mt=s.RGBA16F),at===s.UNSIGNED_BYTE&&(mt=Ht===Ie?s.SRGB8_ALPHA8:s.RGBA8),at===s.UNSIGNED_SHORT_4_4_4_4&&(mt=s.RGBA4),at===s.UNSIGNED_SHORT_5_5_5_1&&(mt=s.RGB5_A1)}return(mt===s.R16F||mt===s.R32F||mt===s.RG16F||mt===s.RG32F||mt===s.RGBA16F||mt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function w(L,A){let at;return L?A===null||A===br||A===Fo?at=s.DEPTH24_STENCIL8:A===sa?at=s.DEPTH32F_STENCIL8:A===Bo&&(at=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===br||A===Fo?at=s.DEPTH_COMPONENT24:A===sa?at=s.DEPTH_COMPONENT32F:A===Bo&&(at=s.DEPTH_COMPONENT16),at}function k(L,A){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==bi&&L.minFilter!==Ni?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function B(L){const A=L.target;A.removeEventListener("dispose",B),V(A),A.isVideoTexture&&g.delete(A)}function P(L){const A=L.target;A.removeEventListener("dispose",P),T(A)}function V(L){const A=r.get(L);if(A.__webglInit===void 0)return;const at=L.source,dt=v.get(at);if(dt){const St=dt[A.__cacheKey];St.usedTimes--,St.usedTimes===0&&D(L),Object.keys(dt).length===0&&v.delete(at)}r.remove(L)}function D(L){const A=r.get(L);s.deleteTexture(A.__webglTexture);const at=L.source,dt=v.get(at);delete dt[A.__cacheKey],f.memory.textures--}function T(L){const A=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(A.__webglFramebuffer[dt]))for(let St=0;St<A.__webglFramebuffer[dt].length;St++)s.deleteFramebuffer(A.__webglFramebuffer[dt][St]);else s.deleteFramebuffer(A.__webglFramebuffer[dt]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[dt])}else{if(Array.isArray(A.__webglFramebuffer))for(let dt=0;dt<A.__webglFramebuffer.length;dt++)s.deleteFramebuffer(A.__webglFramebuffer[dt]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let dt=0;dt<A.__webglColorRenderbuffer.length;dt++)A.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[dt]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const at=L.textures;for(let dt=0,St=at.length;dt<St;dt++){const mt=r.get(at[dt]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),f.memory.textures--),r.remove(at[dt])}r.remove(L)}let z=0;function Y(){z=0}function Z(){const L=z;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),z+=1,L}function tt(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function lt(L,A){const at=r.get(L);if(L.isVideoTexture&&Xt(L),L.isRenderTargetTexture===!1&&L.version>0&&at.__version!==L.version){const dt=L.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(at,L,A);return}}i.bindTexture(s.TEXTURE_2D,at.__webglTexture,s.TEXTURE0+A)}function N(L,A){const at=r.get(L);if(L.version>0&&at.__version!==L.version){J(at,L,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,at.__webglTexture,s.TEXTURE0+A)}function $(L,A){const at=r.get(L);if(L.version>0&&at.__version!==L.version){J(at,L,A);return}i.bindTexture(s.TEXTURE_3D,at.__webglTexture,s.TEXTURE0+A)}function j(L,A){const at=r.get(L);if(L.version>0&&at.__version!==L.version){ht(at,L,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture,s.TEXTURE0+A)}const vt={[$h]:s.REPEAT,[Mr]:s.CLAMP_TO_EDGE,[td]:s.MIRRORED_REPEAT},Tt={[bi]:s.NEAREST,[HS]:s.NEAREST_MIPMAP_NEAREST,[nc]:s.NEAREST_MIPMAP_LINEAR,[Ni]:s.LINEAR,[nh]:s.LINEAR_MIPMAP_NEAREST,[Er]:s.LINEAR_MIPMAP_LINEAR},O={[WS]:s.NEVER,[QS]:s.ALWAYS,[qS]:s.LESS,[l0]:s.LEQUAL,[YS]:s.EQUAL,[KS]:s.GEQUAL,[jS]:s.GREATER,[ZS]:s.NOTEQUAL};function rt(L,A){if(A.type===sa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Ni||A.magFilter===nh||A.magFilter===nc||A.magFilter===Er||A.minFilter===Ni||A.minFilter===nh||A.minFilter===nc||A.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,vt[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,vt[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,vt[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Tt[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Tt[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,O[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===bi||A.minFilter!==nc&&A.minFilter!==Er||A.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const at=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function yt(L,A){let at=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",B));const dt=A.source;let St=v.get(dt);St===void 0&&(St={},v.set(dt,St));const mt=tt(A);if(mt!==L.__cacheKey){St[mt]===void 0&&(St[mt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,at=!0),St[mt].usedTimes++;const Ht=St[L.__cacheKey];Ht!==void 0&&(St[L.__cacheKey].usedTimes--,Ht.usedTimes===0&&D(A)),L.__cacheKey=mt,L.__webglTexture=St[mt].texture}return at}function J(L,A,at){let dt=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(dt=s.TEXTURE_3D);const St=yt(L,A),mt=A.source;i.bindTexture(dt,L.__webglTexture,s.TEXTURE0+at);const Ht=r.get(mt);if(mt.version!==Ht.__version||St===!0){i.activeTexture(s.TEXTURE0+at);const Rt=Ce.getPrimaries(Ce.workingColorSpace),zt=A.colorSpace===Va?null:Ce.getPrimaries(A.colorSpace),_e=A.colorSpace===Va||Rt===zt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let bt=R(A.image,!1,l.maxTextureSize);bt=De(A,bt);const Pt=c.convert(A.format,A.colorSpace),Zt=c.convert(A.type);let Gt=U(A.internalFormat,Pt,Zt,A.colorSpace,A.isVideoTexture);rt(dt,A);let Nt;const $t=A.mipmaps,se=A.isVideoTexture!==!0,Oe=Ht.__version===void 0||St===!0,W=mt.dataReady,Ct=k(A,bt);if(A.isDepthTexture)Gt=w(A.format===Ho,A.type),Oe&&(se?i.texStorage2D(s.TEXTURE_2D,1,Gt,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,Gt,bt.width,bt.height,0,Pt,Zt,null));else if(A.isDataTexture)if($t.length>0){se&&Oe&&i.texStorage2D(s.TEXTURE_2D,Ct,Gt,$t[0].width,$t[0].height);for(let ut=0,_t=$t.length;ut<_t;ut++)Nt=$t[ut],se?W&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Nt.width,Nt.height,Pt,Zt,Nt.data):i.texImage2D(s.TEXTURE_2D,ut,Gt,Nt.width,Nt.height,0,Pt,Zt,Nt.data);A.generateMipmaps=!1}else se?(Oe&&i.texStorage2D(s.TEXTURE_2D,Ct,Gt,bt.width,bt.height),W&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt.width,bt.height,Pt,Zt,bt.data)):i.texImage2D(s.TEXTURE_2D,0,Gt,bt.width,bt.height,0,Pt,Zt,bt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){se&&Oe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Gt,$t[0].width,$t[0].height,bt.depth);for(let ut=0,_t=$t.length;ut<_t;ut++)if(Nt=$t[ut],A.format!==Ti)if(Pt!==null)if(se){if(W)if(A.layerUpdates.size>0){const At=pv(Nt.width,Nt.height,A.format,A.type);for(const wt of A.layerUpdates){const ee=Nt.data.subarray(wt*At/Nt.data.BYTES_PER_ELEMENT,(wt+1)*At/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,wt,Nt.width,Nt.height,1,Pt,ee)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Nt.width,Nt.height,bt.depth,Pt,Nt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,Gt,Nt.width,Nt.height,bt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?W&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,Nt.width,Nt.height,bt.depth,Pt,Zt,Nt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ut,Gt,Nt.width,Nt.height,bt.depth,0,Pt,Zt,Nt.data)}else{se&&Oe&&i.texStorage2D(s.TEXTURE_2D,Ct,Gt,$t[0].width,$t[0].height);for(let ut=0,_t=$t.length;ut<_t;ut++)Nt=$t[ut],A.format!==Ti?Pt!==null?se?W&&i.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,Nt.width,Nt.height,Pt,Nt.data):i.compressedTexImage2D(s.TEXTURE_2D,ut,Gt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?W&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Nt.width,Nt.height,Pt,Zt,Nt.data):i.texImage2D(s.TEXTURE_2D,ut,Gt,Nt.width,Nt.height,0,Pt,Zt,Nt.data)}else if(A.isDataArrayTexture)if(se){if(Oe&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ct,Gt,bt.width,bt.height,bt.depth),W)if(A.layerUpdates.size>0){const ut=pv(bt.width,bt.height,A.format,A.type);for(const _t of A.layerUpdates){const At=bt.data.subarray(_t*ut/bt.data.BYTES_PER_ELEMENT,(_t+1)*ut/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,Pt,Zt,At)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Pt,Zt,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Gt,bt.width,bt.height,bt.depth,0,Pt,Zt,bt.data);else if(A.isData3DTexture)se?(Oe&&i.texStorage3D(s.TEXTURE_3D,Ct,Gt,bt.width,bt.height,bt.depth),W&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Pt,Zt,bt.data)):i.texImage3D(s.TEXTURE_3D,0,Gt,bt.width,bt.height,bt.depth,0,Pt,Zt,bt.data);else if(A.isFramebufferTexture){if(Oe)if(se)i.texStorage2D(s.TEXTURE_2D,Ct,Gt,bt.width,bt.height);else{let ut=bt.width,_t=bt.height;for(let At=0;At<Ct;At++)i.texImage2D(s.TEXTURE_2D,At,Gt,ut,_t,0,Pt,Zt,null),ut>>=1,_t>>=1}}else if($t.length>0){if(se&&Oe){const ut=Vt($t[0]);i.texStorage2D(s.TEXTURE_2D,Ct,Gt,ut.width,ut.height)}for(let ut=0,_t=$t.length;ut<_t;ut++)Nt=$t[ut],se?W&&i.texSubImage2D(s.TEXTURE_2D,ut,0,0,Pt,Zt,Nt):i.texImage2D(s.TEXTURE_2D,ut,Gt,Pt,Zt,Nt);A.generateMipmaps=!1}else if(se){if(Oe){const ut=Vt(bt);i.texStorage2D(s.TEXTURE_2D,Ct,Gt,ut.width,ut.height)}W&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Pt,Zt,bt)}else i.texImage2D(s.TEXTURE_2D,0,Gt,Pt,Zt,bt);M(A)&&y(dt),Ht.__version=mt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ht(L,A,at){if(A.image.length!==6)return;const dt=yt(L,A),St=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+at);const mt=r.get(St);if(St.version!==mt.__version||dt===!0){i.activeTexture(s.TEXTURE0+at);const Ht=Ce.getPrimaries(Ce.workingColorSpace),Rt=A.colorSpace===Va?null:Ce.getPrimaries(A.colorSpace),zt=A.colorSpace===Va||Ht===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const _e=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,Pt=[];for(let _t=0;_t<6;_t++)!_e&&!bt?Pt[_t]=R(A.image[_t],!0,l.maxCubemapSize):Pt[_t]=bt?A.image[_t].image:A.image[_t],Pt[_t]=De(A,Pt[_t]);const Zt=Pt[0],Gt=c.convert(A.format,A.colorSpace),Nt=c.convert(A.type),$t=U(A.internalFormat,Gt,Nt,A.colorSpace),se=A.isVideoTexture!==!0,Oe=mt.__version===void 0||dt===!0,W=St.dataReady;let Ct=k(A,Zt);rt(s.TEXTURE_CUBE_MAP,A);let ut;if(_e){se&&Oe&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,$t,Zt.width,Zt.height);for(let _t=0;_t<6;_t++){ut=Pt[_t].mipmaps;for(let At=0;At<ut.length;At++){const wt=ut[At];A.format!==Ti?Gt!==null?se?W&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,wt.width,wt.height,Gt,wt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,$t,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,wt.width,wt.height,Gt,Nt,wt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,$t,wt.width,wt.height,0,Gt,Nt,wt.data)}}}else{if(ut=A.mipmaps,se&&Oe){ut.length>0&&Ct++;const _t=Vt(Pt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ct,$t,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){se?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt[_t].width,Pt[_t].height,Gt,Nt,Pt[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,$t,Pt[_t].width,Pt[_t].height,0,Gt,Nt,Pt[_t].data);for(let At=0;At<ut.length;At++){const ee=ut[At].image[_t].image;se?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,ee.width,ee.height,Gt,Nt,ee.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,$t,ee.width,ee.height,0,Gt,Nt,ee.data)}}else{se?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Gt,Nt,Pt[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,$t,Gt,Nt,Pt[_t]);for(let At=0;At<ut.length;At++){const wt=ut[At];se?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Gt,Nt,wt.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,$t,Gt,Nt,wt.image[_t])}}}M(A)&&y(s.TEXTURE_CUBE_MAP),mt.__version=St.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Mt(L,A,at,dt,St,mt){const Ht=c.convert(at.format,at.colorSpace),Rt=c.convert(at.type),zt=U(at.internalFormat,Ht,Rt,at.colorSpace),_e=r.get(A),bt=r.get(at);if(bt.__renderTarget=A,!_e.__hasExternalTextures){const Pt=Math.max(1,A.width>>mt),Zt=Math.max(1,A.height>>mt);St===s.TEXTURE_3D||St===s.TEXTURE_2D_ARRAY?i.texImage3D(St,mt,zt,Pt,Zt,A.depth,0,Ht,Rt,null):i.texImage2D(St,mt,zt,Pt,Zt,0,Ht,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),ge(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,St,bt.__webglTexture,0,he(A)):(St===s.TEXTURE_2D||St>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,St,bt.__webglTexture,mt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(L,A,at){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){const dt=A.depthTexture,St=dt&&dt.isDepthTexture?dt.type:null,mt=w(A.stencilBuffer,St),Ht=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=he(A);ge(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,mt,A.width,A.height):at?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,mt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,mt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ht,s.RENDERBUFFER,L)}else{const dt=A.textures;for(let St=0;St<dt.length;St++){const mt=dt[St],Ht=c.convert(mt.format,mt.colorSpace),Rt=c.convert(mt.type),zt=U(mt.internalFormat,Ht,Rt,mt.colorSpace),_e=he(A);at&&ge(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,zt,A.width,A.height):ge(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,zt,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,zt,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ft(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(A.depthTexture);dt.__renderTarget=A,(!dt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),lt(A.depthTexture,0);const St=dt.__webglTexture,mt=he(A);if(A.depthTexture.format===Io)ge(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0);else if(A.depthTexture.format===Ho)ge(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function jt(L){const A=r.get(L),at=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const dt=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),dt){const St=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,dt.removeEventListener("dispose",St)};dt.addEventListener("dispose",St),A.__depthDisposeCallback=St}A.__boundDepthTexture=dt}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");Ft(A.__webglFramebuffer,L)}else if(at){A.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[dt]),A.__webglDepthbuffer[dt]===void 0)A.__webglDepthbuffer[dt]=s.createRenderbuffer(),xt(A.__webglDepthbuffer[dt],L,!1);else{const St=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=A.__webglDepthbuffer[dt];s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,mt)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),xt(A.__webglDepthbuffer,L,!1);else{const dt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,St)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(L,A,at){const dt=r.get(L);A!==void 0&&Mt(dt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),at!==void 0&&jt(L)}function Ve(L){const A=L.texture,at=r.get(L),dt=r.get(A);L.addEventListener("dispose",P);const St=L.textures,mt=L.isWebGLCubeRenderTarget===!0,Ht=St.length>1;if(Ht||(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=A.version,f.memory.textures++),mt){at.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer[Rt]=[];for(let zt=0;zt<A.mipmaps.length;zt++)at.__webglFramebuffer[Rt][zt]=s.createFramebuffer()}else at.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer=[];for(let Rt=0;Rt<A.mipmaps.length;Rt++)at.__webglFramebuffer[Rt]=s.createFramebuffer()}else at.__webglFramebuffer=s.createFramebuffer();if(Ht)for(let Rt=0,zt=St.length;Rt<zt;Rt++){const _e=r.get(St[Rt]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&ge(L)===!1){at.__webglMultisampledFramebuffer=s.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Rt=0;Rt<St.length;Rt++){const zt=St[Rt];at.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,at.__webglColorRenderbuffer[Rt]);const _e=c.convert(zt.format,zt.colorSpace),bt=c.convert(zt.type),Pt=U(zt.internalFormat,_e,bt,zt.colorSpace,L.isXRRenderTarget===!0),Zt=he(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,Pt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,at.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(at.__webglDepthRenderbuffer=s.createRenderbuffer(),xt(at.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(mt){i.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),rt(s.TEXTURE_CUBE_MAP,A);for(let Rt=0;Rt<6;Rt++)if(A.mipmaps&&A.mipmaps.length>0)for(let zt=0;zt<A.mipmaps.length;zt++)Mt(at.__webglFramebuffer[Rt][zt],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,zt);else Mt(at.__webglFramebuffer[Rt],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(A)&&y(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let Rt=0,zt=St.length;Rt<zt;Rt++){const _e=St[Rt],bt=r.get(_e);i.bindTexture(s.TEXTURE_2D,bt.__webglTexture),rt(s.TEXTURE_2D,_e),Mt(at.__webglFramebuffer,L,_e,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,0),M(_e)&&y(s.TEXTURE_2D)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),rt(Rt,A),A.mipmaps&&A.mipmaps.length>0)for(let zt=0;zt<A.mipmaps.length;zt++)Mt(at.__webglFramebuffer[zt],L,A,s.COLOR_ATTACHMENT0,Rt,zt);else Mt(at.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,Rt,0);M(A)&&y(Rt),i.unbindTexture()}L.depthBuffer&&jt(L)}function He(L){const A=L.textures;for(let at=0,dt=A.length;at<dt;at++){const St=A[at];if(M(St)){const mt=I(L),Ht=r.get(St).__webglTexture;i.bindTexture(mt,Ht),y(mt),i.unbindTexture()}}}const fe=[],H=[];function Tn(L){if(L.samples>0){if(ge(L)===!1){const A=L.textures,at=L.width,dt=L.height;let St=s.COLOR_BUFFER_BIT;const mt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ht=r.get(L),Rt=A.length>1;if(Rt)for(let zt=0;zt<A.length;zt++)i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let zt=0;zt<A.length;zt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(St|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(St|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const _e=r.get(A[zt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,at,dt,0,0,at,dt,St,s.NEAREST),p===!0&&(fe.length=0,H.length=0,fe.push(s.COLOR_ATTACHMENT0+zt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(fe.push(mt),H.push(mt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let zt=0;zt<A.length;zt++){i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const _e=r.get(A[zt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+zt,s.TEXTURE_2D,_e,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function he(L){return Math.min(l.maxSamples,L.samples)}function ge(L){const A=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Xt(L){const A=f.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function De(L,A){const at=L.colorSpace,dt=L.format,St=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||at!==Ds&&at!==Va&&(Ce.getTransfer(at)===Ie?(dt!==Ti||St!==ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),A}function Vt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=Y,this.setTexture2D=lt,this.setTexture2DArray=N,this.setTexture3D=$,this.setTextureCube=j,this.rebindTextures=Kt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=ge}function R1(s,t){function i(r,l=Va){let c;const f=Ce.getTransfer(l);if(r===ca)return s.UNSIGNED_BYTE;if(r===zd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===t0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Jv)return s.BYTE;if(r===$v)return s.SHORT;if(r===Bo)return s.UNSIGNED_SHORT;if(r===Od)return s.INT;if(r===br)return s.UNSIGNED_INT;if(r===sa)return s.FLOAT;if(r===Go)return s.HALF_FLOAT;if(r===e0)return s.ALPHA;if(r===n0)return s.RGB;if(r===Ti)return s.RGBA;if(r===i0)return s.LUMINANCE;if(r===a0)return s.LUMINANCE_ALPHA;if(r===Io)return s.DEPTH_COMPONENT;if(r===Ho)return s.DEPTH_STENCIL;if(r===r0)return s.RED;if(r===Bd)return s.RED_INTEGER;if(r===s0)return s.RG;if(r===Fd)return s.RG_INTEGER;if(r===Id)return s.RGBA_INTEGER;if(r===bc||r===Ac||r===Rc||r===Cc)if(f===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===bc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ac)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===bc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ac)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ed||r===nd||r===id||r===ad)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ed)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===id)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ad)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rd||r===sd||r===od)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===rd||r===sd)return f===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===od)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ld||r===cd||r===ud||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===yd||r===Sd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ld)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ud)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===md)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_d)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wc||r===Md||r===Ed)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===wc)return f===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Md)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ed)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===o0||r===Td||r===bd||r===Ad)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===wc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Td)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ad)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const C1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w1=`
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

}`;class D1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Xn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new qa({vertexShader:C1,fragmentShader:w1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new di(new Hc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U1 extends Ls{constructor(t,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,g=null,_=null,v=null,S=null,E=null;const R=new D1,M=i.getContextAttributes();let y=null,I=null;const U=[],w=[],k=new te;let B=null;const P=new hi;P.viewport=new $e;const V=new hi;V.viewport=new $e;const D=[P,V],T=new JM;let z=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ht=U[J];return ht===void 0&&(ht=new Th,U[J]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(J){let ht=U[J];return ht===void 0&&(ht=new Th,U[J]=ht),ht.getGripSpace()},this.getHand=function(J){let ht=U[J];return ht===void 0&&(ht=new Th,U[J]=ht),ht.getHandSpace()};function Z(J){const ht=w.indexOf(J.inputSource);if(ht===-1)return;const Mt=U[ht];Mt!==void 0&&(Mt.update(J.inputSource,J.frame,m||f),Mt.dispatchEvent({type:J.type,data:J.inputSource}))}function tt(){l.removeEventListener("select",Z),l.removeEventListener("selectstart",Z),l.removeEventListener("selectend",Z),l.removeEventListener("squeeze",Z),l.removeEventListener("squeezestart",Z),l.removeEventListener("squeezeend",Z),l.removeEventListener("end",tt),l.removeEventListener("inputsourceschange",lt);for(let J=0;J<U.length;J++){const ht=w[J];ht!==null&&(w[J]=null,U[J].disconnect(ht))}z=null,Y=null,R.reset(),t.setRenderTarget(y),S=null,v=null,_=null,l=null,I=null,yt.stop(),r.isPresenting=!1,t.setPixelRatio(B),t.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(y=t.getRenderTarget(),l.addEventListener("select",Z),l.addEventListener("selectstart",Z),l.addEventListener("selectend",Z),l.addEventListener("squeeze",Z),l.addEventListener("squeezestart",Z),l.addEventListener("squeezeend",Z),l.addEventListener("end",tt),l.addEventListener("inputsourceschange",lt),M.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,xt=null,Ft=null;M.depth&&(Ft=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=M.stencil?Ho:Io,xt=M.stencil?Fo:br);const jt={colorFormat:i.RGBA8,depthFormat:Ft,scaleFactor:c};_=new XRWebGLBinding(l,i),v=_.createProjectionLayer(jt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),I=new Ar(v.textureWidth,v.textureHeight,{format:Ti,type:ca,depthTexture:new v0(v.textureWidth,v.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Mt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Ar(S.framebufferWidth,S.framebufferHeight,{format:Ti,type:ca,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function lt(J){for(let ht=0;ht<J.removed.length;ht++){const Mt=J.removed[ht],xt=w.indexOf(Mt);xt>=0&&(w[xt]=null,U[xt].disconnect(Mt))}for(let ht=0;ht<J.added.length;ht++){const Mt=J.added[ht];let xt=w.indexOf(Mt);if(xt===-1){for(let jt=0;jt<U.length;jt++)if(jt>=w.length){w.push(Mt),xt=jt;break}else if(w[jt]===null){w[jt]=Mt,xt=jt;break}if(xt===-1)break}const Ft=U[xt];Ft&&Ft.connect(Mt)}}const N=new Q,$=new Q;function j(J,ht,Mt){N.setFromMatrixPosition(ht.matrixWorld),$.setFromMatrixPosition(Mt.matrixWorld);const xt=N.distanceTo($),Ft=ht.projectionMatrix.elements,jt=Mt.projectionMatrix.elements,Kt=Ft[14]/(Ft[10]-1),Ve=Ft[14]/(Ft[10]+1),He=(Ft[9]+1)/Ft[5],fe=(Ft[9]-1)/Ft[5],H=(Ft[8]-1)/Ft[0],Tn=(jt[8]+1)/jt[0],he=Kt*H,ge=Kt*Tn,Xt=xt/(-H+Tn),De=Xt*-H;if(ht.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(De),J.translateZ(Xt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ft[10]===-1)J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Vt=Kt+Xt,L=Ve+Xt,A=he-De,at=ge+(xt-De),dt=He*Ve/L*Vt,St=fe*Ve/L*Vt;J.projectionMatrix.makePerspective(A,at,dt,St,Vt,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function vt(J,ht){ht===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ht.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let ht=J.near,Mt=J.far;R.texture!==null&&(R.depthNear>0&&(ht=R.depthNear),R.depthFar>0&&(Mt=R.depthFar)),T.near=V.near=P.near=ht,T.far=V.far=P.far=Mt,(z!==T.near||Y!==T.far)&&(l.updateRenderState({depthNear:T.near,depthFar:T.far}),z=T.near,Y=T.far),P.layers.mask=J.layers.mask|2,V.layers.mask=J.layers.mask|4,T.layers.mask=P.layers.mask|V.layers.mask;const xt=J.parent,Ft=T.cameras;vt(T,xt);for(let jt=0;jt<Ft.length;jt++)vt(Ft[jt],xt);Ft.length===2?j(T,P,V):T.projectionMatrix.copy(P.projectionMatrix),Tt(J,T,xt)};function Tt(J,ht,Mt){Mt===null?J.matrix.copy(ht.matrixWorld):(J.matrix.copy(Mt.matrixWorld),J.matrix.invert(),J.matrix.multiply(ht.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ht.projectionMatrix),J.projectionMatrixInverse.copy(ht.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Rd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(J){p=J,v!==null&&(v.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(T)};let O=null;function rt(J,ht){if(g=ht.getViewerPose(m||f),E=ht,g!==null){const Mt=g.views;S!==null&&(t.setRenderTargetFramebuffer(I,S.framebuffer),t.setRenderTarget(I));let xt=!1;Mt.length!==T.cameras.length&&(T.cameras.length=0,xt=!0);for(let Kt=0;Kt<Mt.length;Kt++){const Ve=Mt[Kt];let He=null;if(S!==null)He=S.getViewport(Ve);else{const H=_.getViewSubImage(v,Ve);He=H.viewport,Kt===0&&(t.setRenderTargetTextures(I,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(I))}let fe=D[Kt];fe===void 0&&(fe=new hi,fe.layers.enable(Kt),fe.viewport=new $e,D[Kt]=fe),fe.matrix.fromArray(Ve.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ve.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(He.x,He.y,He.width,He.height),Kt===0&&(T.matrix.copy(fe.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),xt===!0&&T.cameras.push(fe)}const Ft=l.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const Kt=_.getDepthInformation(Mt[0]);Kt&&Kt.isValid&&Kt.texture&&R.init(t,Kt,l.renderState)}}for(let Mt=0;Mt<U.length;Mt++){const xt=w[Mt],Ft=U[Mt];xt!==null&&Ft!==void 0&&Ft.update(xt,ht,m||f)}O&&O(J,ht),ht.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ht}),E=null}const yt=new T0;yt.setAnimationLoop(rt),this.setAnimationLoop=function(J){O=J},this.dispose=function(){}}}const _r=new ua,L1=new je;function N1(s,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,m0(s)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,I,U,w){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),_(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y)):y.isMeshStandardMaterial?(c(M,y),v(M,y),y.isMeshPhysicalMaterial&&S(M,y,w)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),R(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?p(M,y,I,U):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===kn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===kn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const I=t.get(y),U=I.envMap,w=I.envMapRotation;U&&(M.envMap.value=U,_r.copy(w),_r.x*=-1,_r.y*=-1,_r.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),M.envMapRotation.value.setFromMatrix4(L1.makeRotationFromEuler(_r)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function p(M,y,I,U){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*I,M.scale.value=U*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function _(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,I){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===kn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function R(M,y){const I=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function O1(s,t,i,r){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,U){const w=U.program;r.uniformBlockBinding(I,w)}function m(I,U){let w=l[I.id];w===void 0&&(E(I),w=g(I),l[I.id]=w,I.addEventListener("dispose",M));const k=U.program;r.updateUBOMapping(I,k);const B=t.render.frame;c[I.id]!==B&&(v(I),c[I.id]=B)}function g(I){const U=_();I.__bindingPointIndex=U;const w=s.createBuffer(),k=I.__size,B=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,k,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,w),w}function _(){for(let I=0;I<d;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const U=l[I.id],w=I.uniforms,k=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let B=0,P=w.length;B<P;B++){const V=Array.isArray(w[B])?w[B]:[w[B]];for(let D=0,T=V.length;D<T;D++){const z=V[D];if(S(z,B,D,k)===!0){const Y=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value];let tt=0;for(let lt=0;lt<Z.length;lt++){const N=Z[lt],$=R(N);typeof N=="number"||typeof N=="boolean"?(z.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,Y+tt,z.__data)):N.isMatrix3?(z.__data[0]=N.elements[0],z.__data[1]=N.elements[1],z.__data[2]=N.elements[2],z.__data[3]=0,z.__data[4]=N.elements[3],z.__data[5]=N.elements[4],z.__data[6]=N.elements[5],z.__data[7]=0,z.__data[8]=N.elements[6],z.__data[9]=N.elements[7],z.__data[10]=N.elements[8],z.__data[11]=0):(N.toArray(z.__data,tt),tt+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,U,w,k){const B=I.value,P=U+"_"+w;if(k[P]===void 0)return typeof B=="number"||typeof B=="boolean"?k[P]=B:k[P]=B.clone(),!0;{const V=k[P];if(typeof B=="number"||typeof B=="boolean"){if(V!==B)return k[P]=B,!0}else if(V.equals(B)===!1)return V.copy(B),!0}return!1}function E(I){const U=I.uniforms;let w=0;const k=16;for(let P=0,V=U.length;P<V;P++){const D=Array.isArray(U[P])?U[P]:[U[P]];for(let T=0,z=D.length;T<z;T++){const Y=D[T],Z=Array.isArray(Y.value)?Y.value:[Y.value];for(let tt=0,lt=Z.length;tt<lt;tt++){const N=Z[tt],$=R(N),j=w%k,vt=j%$.boundary,Tt=j+vt;w+=vt,Tt!==0&&k-Tt<$.storage&&(w+=k-Tt),Y.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=$.storage}}}const B=w%k;return B>0&&(w+=k-B),I.__size=w,I.__cache={},this}function R(I){const U={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(U.boundary=4,U.storage=4):I.isVector2?(U.boundary=8,U.storage=8):I.isVector3||I.isColor?(U.boundary=16,U.storage=12):I.isVector4?(U.boundary=16,U.storage=16):I.isMatrix3?(U.boundary=48,U.storage=48):I.isMatrix4?(U.boundary=64,U.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),U}function M(I){const U=I.target;U.removeEventListener("dispose",M);const w=f.indexOf(U.__bindingPointIndex);f.splice(w,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function y(){for(const I in l)s.deleteBuffer(l[I]);f=[],l={},c={}}return{bind:p,update:m,dispose:y}}class z1{constructor(t={}){const{canvas:i=$S(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),R=new Int32Array(4);let M=null,y=null;const I=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let k=!1;this._outputColorSpace=fi;let B=0,P=0,V=null,D=-1,T=null;const z=new $e,Y=new $e;let Z=null;const tt=new Ne(0);let lt=0,N=i.width,$=i.height,j=1,vt=null,Tt=null;const O=new $e(0,0,N,$),rt=new $e(0,0,N,$);let yt=!1;const J=new kd;let ht=!1,Mt=!1;const xt=new je,Ft=new je,jt=new Q,Kt=new $e,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function fe(){return V===null?j:1}let H=r;function Tn(C,q){return i.getContext(C,q)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Nd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",wt,!1),H===null){const q="webgl2";if(H=Tn(q,C),H===null)throw Tn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let he,ge,Xt,De,Vt,L,A,at,dt,St,mt,Ht,Rt,zt,_e,bt,Pt,Zt,Gt,Nt,$t,se,Oe,W;function Ct(){he=new Wb(H),he.init(),se=new R1(H,he),ge=new Fb(H,he,t,se),Xt=new b1(H,he),ge.reverseDepthBuffer&&v&&Xt.buffers.depth.setReversed(!0),De=new jb(H),Vt=new h1,L=new A1(H,he,Xt,Vt,ge,se,De),A=new Hb(w),at=new Xb(w),dt=new tE(H),Oe=new Pb(H,dt),St=new qb(H,dt,De,Oe),mt=new Kb(H,St,dt,De),Gt=new Zb(H,ge,L),bt=new Ib(Vt),Ht=new f1(w,A,at,he,ge,Oe,bt),Rt=new N1(w,Vt),zt=new p1,_e=new y1(he),Zt=new zb(w,A,at,Xt,mt,S,p),Pt=new E1(w,mt,ge),W=new O1(H,De,ge,Xt),Nt=new Bb(H,he,De),$t=new Yb(H,he,De),De.programs=Ht.programs,w.capabilities=ge,w.extensions=he,w.properties=Vt,w.renderLists=zt,w.shadowMap=Pt,w.state=Xt,w.info=De}Ct();const ut=new U1(w,H);this.xr=ut,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=he.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=he.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(N,$,!1))},this.getSize=function(C){return C.set(N,$)},this.setSize=function(C,q,st=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,$=q,i.width=Math.floor(C*j),i.height=Math.floor(q*j),st===!0&&(i.style.width=C+"px",i.style.height=q+"px"),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(N*j,$*j).floor()},this.setDrawingBufferSize=function(C,q,st){N=C,$=q,j=st,i.width=Math.floor(C*st),i.height=Math.floor(q*st),this.setViewport(0,0,C,q)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,q,st,ot){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,q,st,ot),Xt.viewport(z.copy(O).multiplyScalar(j).round())},this.getScissor=function(C){return C.copy(rt)},this.setScissor=function(C,q,st,ot){C.isVector4?rt.set(C.x,C.y,C.z,C.w):rt.set(C,q,st,ot),Xt.scissor(Y.copy(rt).multiplyScalar(j).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(C){Xt.setScissorTest(yt=C)},this.setOpaqueSort=function(C){vt=C},this.setTransparentSort=function(C){Tt=C},this.getClearColor=function(C){return C.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,st=!0){let ot=0;if(C){let X=!1;if(V!==null){const Et=V.texture.format;X=Et===Id||Et===Fd||Et===Bd}if(X){const Et=V.texture.type,Dt=Et===ca||Et===br||Et===Bo||Et===Fo||Et===zd||Et===Pd,Lt=Zt.getClearColor(),Ot=Zt.getClearAlpha(),ne=Lt.r,Jt=Lt.g,Wt=Lt.b;Dt?(E[0]=ne,E[1]=Jt,E[2]=Wt,E[3]=Ot,H.clearBufferuiv(H.COLOR,0,E)):(R[0]=ne,R[1]=Jt,R[2]=Wt,R[3]=Ot,H.clearBufferiv(H.COLOR,0,R))}else ot|=H.COLOR_BUFFER_BIT}q&&(ot|=H.DEPTH_BUFFER_BIT),st&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",wt,!1),Zt.dispose(),zt.dispose(),_e.dispose(),Vt.dispose(),A.dispose(),at.dispose(),mt.dispose(),Oe.dispose(),W.dispose(),Ht.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Os),ut.removeEventListener("sessionend",zs),Ai.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const C=De.autoReset,q=Pt.enabled,st=Pt.autoUpdate,ot=Pt.needsUpdate,X=Pt.type;Ct(),De.autoReset=C,Pt.enabled=q,Pt.autoUpdate=st,Pt.needsUpdate=ot,Pt.type=X}function wt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ee(C){const q=C.target;q.removeEventListener("dispose",ee),qe(q)}function qe(C){ln(C),Vt.remove(C)}function ln(C){const q=Vt.get(C).programs;q!==void 0&&(q.forEach(function(st){Ht.releaseProgram(st)}),C.isShaderMaterial&&Ht.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,st,ot,X,Et){q===null&&(q=Ve);const Dt=X.isMesh&&X.matrixWorld.determinant()<0,Lt=Bs(C,q,st,ot,X);Xt.setMaterial(ot,Dt);let Ot=st.index,ne=1;if(ot.wireframe===!0){if(Ot=St.getWireframeAttribute(st),Ot===void 0)return;ne=2}const Jt=st.drawRange,Wt=st.attributes.position;let ye=Jt.start*ne,Se=(Jt.start+Jt.count)*ne;Et!==null&&(ye=Math.max(ye,Et.start*ne),Se=Math.min(Se,(Et.start+Et.count)*ne)),Ot!==null?(ye=Math.max(ye,0),Se=Math.min(Se,Ot.count)):Wt!=null&&(ye=Math.max(ye,0),Se=Math.min(Se,Wt.count));const ke=Se-ye;if(ke<0||ke===1/0)return;Oe.setup(X,ot,Lt,st,Ot);let be,ae=Nt;if(Ot!==null&&(be=dt.get(Ot),ae=$t,ae.setIndex(be)),X.isMesh)ot.wireframe===!0?(Xt.setLineWidth(ot.wireframeLinewidth*fe()),ae.setMode(H.LINES)):ae.setMode(H.TRIANGLES);else if(X.isLine){let Yt=ot.linewidth;Yt===void 0&&(Yt=1),Xt.setLineWidth(Yt*fe()),X.isLineSegments?ae.setMode(H.LINES):X.isLineLoop?ae.setMode(H.LINE_LOOP):ae.setMode(H.LINE_STRIP)}else X.isPoints?ae.setMode(H.POINTS):X.isSprite&&ae.setMode(H.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Dc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))ae.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Yt=X._multiDrawStarts,cn=X._multiDrawCounts,Ee=X._multiDrawCount,On=Ot?dt.get(Ot).bytesPerElement:1,gi=Vt.get(ot).currentProgram.getUniforms();for(let Dn=0;Dn<Ee;Dn++)gi.setValue(H,"_gl_DrawID",Dn),ae.render(Yt[Dn]/On,cn[Dn])}else if(X.isInstancedMesh)ae.renderInstances(ye,ke,X.count);else if(st.isInstancedBufferGeometry){const Yt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,cn=Math.min(st.instanceCount,Yt);ae.renderInstances(ye,ke,cn)}else ae.render(ye,ke)};function Te(C,q,st){C.transparent===!0&&C.side===ra&&C.forceSinglePass===!1?(C.side=kn,C.needsUpdate=!0,Ze(C,q,st),C.side=Wa,C.needsUpdate=!0,Ze(C,q,st),C.side=ra):Ze(C,q,st)}this.compile=function(C,q,st=null){st===null&&(st=C),y=_e.get(st),y.init(q),U.push(y),st.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),C!==st&&C.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const ot=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Et=X.material;if(Et)if(Array.isArray(Et))for(let Dt=0;Dt<Et.length;Dt++){const Lt=Et[Dt];Te(Lt,st,X),ot.add(Lt)}else Te(Et,st,X),ot.add(Et)}),y=U.pop(),ot},this.compileAsync=function(C,q,st=null){const ot=this.compile(C,q,st);return new Promise(X=>{function Et(){if(ot.forEach(function(Dt){Vt.get(Dt).currentProgram.isReady()&&ot.delete(Dt)}),ot.size===0){X(C);return}setTimeout(Et,10)}he.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let _n=null;function pi(C){_n&&_n(C)}function Os(){Ai.stop()}function zs(){Ai.start()}const Ai=new T0;Ai.setAnimationLoop(pi),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(C){_n=C,ut.setAnimationLoop(C),C===null?Ai.stop():Ai.start()},ut.addEventListener("sessionstart",Os),ut.addEventListener("sessionend",zs),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(q),q=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,q,V),y=_e.get(C,U.length),y.init(q),U.push(y),Ft.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(Ft),Mt=this.localClippingEnabled,ht=bt.init(this.clippingPlanes,Mt),M=zt.get(C,I.length),M.init(),I.push(M),ut.enabled===!0&&ut.isPresenting===!0){const Et=w.xr.getDepthSensingMesh();Et!==null&&Ya(Et,q,-1/0,w.sortObjects)}Ya(C,q,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(vt,Tt),He=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,He&&Zt.addToRenderList(M,C),this.info.render.frame++,ht===!0&&bt.beginShadows();const st=y.state.shadowsArray;Pt.render(st,C,q),ht===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,X=M.transmissive;if(y.setupLights(),q.isArrayCamera){const Et=q.cameras;if(X.length>0)for(let Dt=0,Lt=Et.length;Dt<Lt;Dt++){const Ot=Et[Dt];Ps(ot,X,C,Ot)}He&&Zt.render(C);for(let Dt=0,Lt=Et.length;Dt<Lt;Dt++){const Ot=Et[Dt];Rr(M,C,Ot,Ot.viewport)}}else X.length>0&&Ps(ot,X,C,q),He&&Zt.render(C),Rr(M,C,q);V!==null&&P===0&&(L.updateMultisampleRenderTarget(V),L.updateRenderTargetMipmap(V)),C.isScene===!0&&C.onAfterRender(w,C,q),Oe.resetDefaultState(),D=-1,T=null,U.pop(),U.length>0?(y=U[U.length-1],ht===!0&&bt.setGlobalState(w.clippingPlanes,y.state.camera)):y=null,I.pop(),I.length>0?M=I[I.length-1]:M=null};function Ya(C,q,st,ot){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||J.intersectsSprite(C)){ot&&Kt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ft);const Dt=mt.update(C),Lt=C.material;Lt.visible&&M.push(C,Dt,Lt,st,Kt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||J.intersectsObject(C))){const Dt=mt.update(C),Lt=C.material;if(ot&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Kt.copy(C.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Kt.copy(Dt.boundingSphere.center)),Kt.applyMatrix4(C.matrixWorld).applyMatrix4(Ft)),Array.isArray(Lt)){const Ot=Dt.groups;for(let ne=0,Jt=Ot.length;ne<Jt;ne++){const Wt=Ot[ne],ye=Lt[Wt.materialIndex];ye&&ye.visible&&M.push(C,Dt,ye,st,Kt.z,Wt)}}else Lt.visible&&M.push(C,Dt,Lt,st,Kt.z,null)}}const Et=C.children;for(let Dt=0,Lt=Et.length;Dt<Lt;Dt++)Ya(Et[Dt],q,st,ot)}function Rr(C,q,st,ot){const X=C.opaque,Et=C.transmissive,Dt=C.transparent;y.setupLightsView(st),ht===!0&&bt.setGlobalState(w.clippingPlanes,st),ot&&Xt.viewport(z.copy(ot)),X.length>0&&ja(X,q,st),Et.length>0&&ja(Et,q,st),Dt.length>0&&ja(Dt,q,st),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Ps(C,q,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ot.id]===void 0&&(y.state.transmissionRenderTarget[ot.id]=new Ar(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Go:ca,minFilter:Er,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const Et=y.state.transmissionRenderTarget[ot.id],Dt=ot.viewport||z;Et.setSize(Dt.z*w.transmissionResolutionScale,Dt.w*w.transmissionResolutionScale);const Lt=w.getRenderTarget();w.setRenderTarget(Et),w.getClearColor(tt),lt=w.getClearAlpha(),lt<1&&w.setClearColor(16777215,.5),w.clear(),He&&Zt.render(st);const Ot=w.toneMapping;w.toneMapping=Xa;const ne=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),y.setupLightsView(ot),ht===!0&&bt.setGlobalState(w.clippingPlanes,ot),ja(C,st,ot),L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et),he.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Wt=0,ye=q.length;Wt<ye;Wt++){const Se=q[Wt],ke=Se.object,be=Se.geometry,ae=Se.material,Yt=Se.group;if(ae.side===ra&&ke.layers.test(ot.layers)){const cn=ae.side;ae.side=kn,ae.needsUpdate=!0,mi(ke,st,ot,be,ae,Yt),ae.side=cn,ae.needsUpdate=!0,Jt=!0}}Jt===!0&&(L.updateMultisampleRenderTarget(Et),L.updateRenderTargetMipmap(Et))}w.setRenderTarget(Lt),w.setClearColor(tt,lt),ne!==void 0&&(ot.viewport=ne),w.toneMapping=Ot}function ja(C,q,st){const ot=q.isScene===!0?q.overrideMaterial:null;for(let X=0,Et=C.length;X<Et;X++){const Dt=C[X],Lt=Dt.object,Ot=Dt.geometry,ne=Dt.group;let Jt=Dt.material;Jt.allowOverride===!0&&ot!==null&&(Jt=ot),Lt.layers.test(st.layers)&&mi(Lt,q,st,Ot,Jt,ne)}}function mi(C,q,st,ot,X,Et){C.onBeforeRender(w,q,st,ot,X,Et),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(w,q,st,ot,C,Et),X.transparent===!0&&X.side===ra&&X.forceSinglePass===!1?(X.side=kn,X.needsUpdate=!0,w.renderBufferDirect(st,q,ot,X,C,Et),X.side=Wa,X.needsUpdate=!0,w.renderBufferDirect(st,q,ot,X,C,Et),X.side=ra):w.renderBufferDirect(st,q,ot,X,C,Et),C.onAfterRender(w,q,st,ot,X,Et)}function Ze(C,q,st){q.isScene!==!0&&(q=Ve);const ot=Vt.get(C),X=y.state.lights,Et=y.state.shadowsArray,Dt=X.state.version,Lt=Ht.getParameters(C,X.state,Et,q,st),Ot=Ht.getProgramCacheKey(Lt);let ne=ot.programs;ot.environment=C.isMeshStandardMaterial?q.environment:null,ot.fog=q.fog,ot.envMap=(C.isMeshStandardMaterial?at:A).get(C.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,ne===void 0&&(C.addEventListener("dispose",ee),ne=new Map,ot.programs=ne);let Jt=ne.get(Ot);if(Jt!==void 0){if(ot.currentProgram===Jt&&ot.lightsStateVersion===Dt)return zi(C,Lt),Jt}else Lt.uniforms=Ht.getUniforms(C),C.onBeforeCompile(Lt,w),Jt=Ht.acquireProgram(Lt,Ot),ne.set(Ot,Jt),ot.uniforms=Lt.uniforms;const Wt=ot.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Wt.clippingPlanes=bt.uniform),zi(C,Lt),ot.needsLights=Xc(C),ot.lightsStateVersion=Dt,ot.needsLights&&(Wt.ambientLightColor.value=X.state.ambient,Wt.lightProbe.value=X.state.probe,Wt.directionalLights.value=X.state.directional,Wt.directionalLightShadows.value=X.state.directionalShadow,Wt.spotLights.value=X.state.spot,Wt.spotLightShadows.value=X.state.spotShadow,Wt.rectAreaLights.value=X.state.rectArea,Wt.ltc_1.value=X.state.rectAreaLTC1,Wt.ltc_2.value=X.state.rectAreaLTC2,Wt.pointLights.value=X.state.point,Wt.pointLightShadows.value=X.state.pointShadow,Wt.hemisphereLights.value=X.state.hemi,Wt.directionalShadowMap.value=X.state.directionalShadowMap,Wt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Wt.spotShadowMap.value=X.state.spotShadowMap,Wt.spotLightMatrix.value=X.state.spotLightMatrix,Wt.spotLightMap.value=X.state.spotLightMap,Wt.pointShadowMap.value=X.state.pointShadowMap,Wt.pointShadowMatrix.value=X.state.pointShadowMatrix),ot.currentProgram=Jt,ot.uniformsList=null,Jt}function vn(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Uc.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function zi(C,q){const st=Vt.get(C);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function Bs(C,q,st,ot,X){q.isScene!==!0&&(q=Ve),L.resetTextureUnits();const Et=q.fog,Dt=ot.isMeshStandardMaterial?q.environment:null,Lt=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ds,Ot=(ot.isMeshStandardMaterial?at:A).get(ot.envMap||Dt),ne=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Jt=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Wt=!!st.morphAttributes.position,ye=!!st.morphAttributes.normal,Se=!!st.morphAttributes.color;let ke=Xa;ot.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ke=w.toneMapping);const be=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ae=be!==void 0?be.length:0,Yt=Vt.get(ot),cn=y.state.lights;if(ht===!0&&(Mt===!0||C!==T)){const Ke=C===T&&ot.id===D;bt.setState(ot,C,Ke)}let Ee=!1;ot.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==cn.state.version||Yt.outputColorSpace!==Lt||X.isBatchedMesh&&Yt.batching===!1||!X.isBatchedMesh&&Yt.batching===!0||X.isBatchedMesh&&Yt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Yt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Yt.instancing===!1||!X.isInstancedMesh&&Yt.instancing===!0||X.isSkinnedMesh&&Yt.skinning===!1||!X.isSkinnedMesh&&Yt.skinning===!0||X.isInstancedMesh&&Yt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Yt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Yt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Yt.instancingMorph===!1&&X.morphTexture!==null||Yt.envMap!==Ot||ot.fog===!0&&Yt.fog!==Et||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==bt.numPlanes||Yt.numIntersection!==bt.numIntersection)||Yt.vertexAlphas!==ne||Yt.vertexTangents!==Jt||Yt.morphTargets!==Wt||Yt.morphNormals!==ye||Yt.morphColors!==Se||Yt.toneMapping!==ke||Yt.morphTargetsCount!==ae)&&(Ee=!0):(Ee=!0,Yt.__version=ot.version);let On=Yt.currentProgram;Ee===!0&&(On=Ze(ot,q,X));let gi=!1,Dn=!1,pn=!1;const ze=On.getUniforms(),Un=Yt.uniforms;if(Xt.useProgram(On.program)&&(gi=!0,Dn=!0,pn=!0),ot.id!==D&&(D=ot.id,Dn=!0),gi||T!==C){Xt.buffers.depth.getReversed()?(xt.copy(C.projectionMatrix),eM(xt),nM(xt),ze.setValue(H,"projectionMatrix",xt)):ze.setValue(H,"projectionMatrix",C.projectionMatrix),ze.setValue(H,"viewMatrix",C.matrixWorldInverse);const xn=ze.map.cameraPosition;xn!==void 0&&xn.setValue(H,jt.setFromMatrixPosition(C.matrixWorld)),ge.logarithmicDepthBuffer&&ze.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&ze.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,Dn=!0,pn=!0)}if(X.isSkinnedMesh){ze.setOptional(H,X,"bindMatrix"),ze.setOptional(H,X,"bindMatrixInverse");const Ke=X.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),ze.setValue(H,"boneTexture",Ke.boneTexture,L))}X.isBatchedMesh&&(ze.setOptional(H,X,"batchingTexture"),ze.setValue(H,"batchingTexture",X._matricesTexture,L),ze.setOptional(H,X,"batchingIdTexture"),ze.setValue(H,"batchingIdTexture",X._indirectTexture,L),ze.setOptional(H,X,"batchingColorTexture"),X._colorsTexture!==null&&ze.setValue(H,"batchingColorTexture",X._colorsTexture,L));const bn=st.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&Gt.update(X,st,On),(Dn||Yt.receiveShadow!==X.receiveShadow)&&(Yt.receiveShadow=X.receiveShadow,ze.setValue(H,"receiveShadow",X.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Un.envMap.value=Ot,Un.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&q.environment!==null&&(Un.envMapIntensity.value=q.environmentIntensity),Dn&&(ze.setValue(H,"toneMappingExposure",w.toneMappingExposure),Yt.needsLights&&kc(Un,pn),Et&&ot.fog===!0&&Rt.refreshFogUniforms(Un,Et),Rt.refreshMaterialUniforms(Un,ot,j,$,y.state.transmissionRenderTarget[C.id]),Uc.upload(H,vn(Yt),Un,L)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Uc.upload(H,vn(Yt),Un,L),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&ze.setValue(H,"center",X.center),ze.setValue(H,"modelViewMatrix",X.modelViewMatrix),ze.setValue(H,"normalMatrix",X.normalMatrix),ze.setValue(H,"modelMatrix",X.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Ke=ot.uniformsGroups;for(let xn=0,Cr=Ke.length;xn<Cr;xn++){const zn=Ke[xn];W.update(zn,On),W.bind(zn,On)}}return On}function kc(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Xc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(C,q,st){const ot=Vt.get(C);ot.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Vt.get(C.texture).__webglTexture=q,Vt.get(C.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const st=Vt.get(C);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const qo=H.createFramebuffer();this.setRenderTarget=function(C,q=0,st=0){V=C,B=q,P=st;let ot=!0,X=null,Et=!1,Dt=!1;if(C){const Ot=Vt.get(C);if(Ot.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1;else if(Ot.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(Ot.__hasExternalTextures)L.rebindTextures(C,Vt.get(C.texture).__webglTexture,Vt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Wt=C.depthTexture;if(Ot.__boundDepthTexture!==Wt){if(Wt!==null&&Vt.has(Wt)&&(C.width!==Wt.image.width||C.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const ne=C.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Dt=!0);const Jt=Vt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Jt[q])?X=Jt[q][st]:X=Jt[q],Et=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?X=Vt.get(C).__webglMultisampledFramebuffer:Array.isArray(Jt)?X=Jt[st]:X=Jt,z.copy(C.viewport),Y.copy(C.scissor),Z=C.scissorTest}else z.copy(O).multiplyScalar(j).floor(),Y.copy(rt).multiplyScalar(j).floor(),Z=yt;if(st!==0&&(X=qo),Xt.bindFramebuffer(H.FRAMEBUFFER,X)&&ot&&Xt.drawBuffers(C,X),Xt.viewport(z),Xt.scissor(Y),Xt.setScissorTest(Z),Et){const Ot=Vt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,st)}else if(Dt){const Ot=Vt.get(C.texture),ne=q;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ot.__webglTexture,st,ne)}else if(C!==null&&st!==0){const Ot=Vt.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ot.__webglTexture,st)}D=-1},this.readRenderTargetPixels=function(C,q,st,ot,X,Et,Dt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Vt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt]),Lt){Xt.bindFramebuffer(H.FRAMEBUFFER,Lt);try{const Ot=C.texture,ne=Ot.format,Jt=Ot.type;if(!ge.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-ot&&st>=0&&st<=C.height-X&&H.readPixels(q,st,ot,X,se.convert(ne),se.convert(Jt),Et)}finally{const Ot=V!==null?Vt.get(V).__webglFramebuffer:null;Xt.bindFramebuffer(H.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(C,q,st,ot,X,Et,Dt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Vt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt]),Lt)if(q>=0&&q<=C.width-ot&&st>=0&&st<=C.height-X){Xt.bindFramebuffer(H.FRAMEBUFFER,Lt);const Ot=C.texture,ne=Ot.format,Jt=Ot.type;if(!ge.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Wt),H.bufferData(H.PIXEL_PACK_BUFFER,Et.byteLength,H.STREAM_READ),H.readPixels(q,st,ot,X,se.convert(ne),se.convert(Jt),0);const ye=V!==null?Vt.get(V).__webglFramebuffer:null;Xt.bindFramebuffer(H.FRAMEBUFFER,ye);const Se=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await tM(H,Se,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Wt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Et),H.deleteBuffer(Wt),H.deleteSync(Se),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,st=0){const ot=Math.pow(2,-st),X=Math.floor(C.image.width*ot),Et=Math.floor(C.image.height*ot),Dt=q!==null?q.x:0,Lt=q!==null?q.y:0;L.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,st,0,0,Dt,Lt,X,Et),Xt.unbindTexture()};const Za=H.createFramebuffer(),Fs=H.createFramebuffer();this.copyTextureToTexture=function(C,q,st=null,ot=null,X=0,Et=null){Et===null&&(X!==0?(Dc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=X,X=0):Et=0);let Dt,Lt,Ot,ne,Jt,Wt,ye,Se,ke;const be=C.isCompressedTexture?C.mipmaps[Et]:C.image;if(st!==null)Dt=st.max.x-st.min.x,Lt=st.max.y-st.min.y,Ot=st.isBox3?st.max.z-st.min.z:1,ne=st.min.x,Jt=st.min.y,Wt=st.isBox3?st.min.z:0;else{const bn=Math.pow(2,-X);Dt=Math.floor(be.width*bn),Lt=Math.floor(be.height*bn),C.isDataArrayTexture?Ot=be.depth:C.isData3DTexture?Ot=Math.floor(be.depth*bn):Ot=1,ne=0,Jt=0,Wt=0}ot!==null?(ye=ot.x,Se=ot.y,ke=ot.z):(ye=0,Se=0,ke=0);const ae=se.convert(q.format),Yt=se.convert(q.type);let cn;q.isData3DTexture?(L.setTexture3D(q,0),cn=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),cn=H.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),cn=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Ee=H.getParameter(H.UNPACK_ROW_LENGTH),On=H.getParameter(H.UNPACK_IMAGE_HEIGHT),gi=H.getParameter(H.UNPACK_SKIP_PIXELS),Dn=H.getParameter(H.UNPACK_SKIP_ROWS),pn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,be.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,be.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ne),H.pixelStorei(H.UNPACK_SKIP_ROWS,Jt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Wt);const ze=C.isDataArrayTexture||C.isData3DTexture,Un=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const bn=Vt.get(C),Ke=Vt.get(q),xn=Vt.get(bn.__renderTarget),Cr=Vt.get(Ke.__renderTarget);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,xn.__webglFramebuffer),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let zn=0;zn<Ot;zn++)ze&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.get(C).__webglTexture,X,Wt+zn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Vt.get(q).__webglTexture,Et,ke+zn)),H.blitFramebuffer(ne,Jt,Dt,Lt,ye,Se,Dt,Lt,H.DEPTH_BUFFER_BIT,H.NEAREST);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(X!==0||C.isRenderTargetTexture||Vt.has(C)){const bn=Vt.get(C),Ke=Vt.get(q);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,Za),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Fs);for(let xn=0;xn<Ot;xn++)ze?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bn.__webglTexture,X,Wt+xn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bn.__webglTexture,X),Un?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ke.__webglTexture,Et,ke+xn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ke.__webglTexture,Et),X!==0?H.blitFramebuffer(ne,Jt,Dt,Lt,ye,Se,Dt,Lt,H.COLOR_BUFFER_BIT,H.NEAREST):Un?H.copyTexSubImage3D(cn,Et,ye,Se,ke+xn,ne,Jt,Dt,Lt):H.copyTexSubImage2D(cn,Et,ye,Se,ne,Jt,Dt,Lt);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Un?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(cn,Et,ye,Se,ke,Dt,Lt,Ot,ae,Yt,be.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(cn,Et,ye,Se,ke,Dt,Lt,Ot,ae,be.data):H.texSubImage3D(cn,Et,ye,Se,ke,Dt,Lt,Ot,ae,Yt,be):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Et,ye,Se,Dt,Lt,ae,Yt,be.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Et,ye,Se,be.width,be.height,ae,be.data):H.texSubImage2D(H.TEXTURE_2D,Et,ye,Se,Dt,Lt,ae,Yt,be);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ee),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,On),H.pixelStorei(H.UNPACK_SKIP_PIXELS,gi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Dn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,pn),Et===0&&q.generateMipmaps&&H.generateMipmap(cn),Xt.unbindTexture()},this.copyTextureToTexture3D=function(C,q,st=null,ot=null,X=0){return Dc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,q,st,ot,X)},this.initRenderTarget=function(C){Vt.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Xt.unbindTexture()},this.resetState=function(){B=0,P=0,V=null,Xt.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const P1={U:[0,1,0],D:[0,-1,0],F:[0,0,1],B:[0,0,-1],R:[1,0,0],L:[-1,0,0]},B1={R:[1,0,0],L:[1,0,0],U:[0,1,0],D:[0,1,0],F:[0,0,1],B:[0,0,1]};function w0(s){return s.endsWith("2")?Math.PI:s.endsWith("'")?-Math.PI/2:Math.PI/2}function D0(s){return s.replace("'","").replace("2","")}function Iv(s){return s.endsWith("'")&&!s.endsWith("2")}function F1(s){return s.endsWith("2")}const I1=16777215,H1=.72;class G1{constructor(t){fn(this,"renderer");fn(this,"scene");fn(this,"camera");fn(this,"arrowGroup");fn(this,"currentMove",null);fn(this,"width",1);fn(this,"height",1);this.renderer=new z1({canvas:t,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0),this.scene=new CM,this.camera=new hi(45,1,.01,100),this.camera.position.set(0,0,3);const i=new QM(16777215,.9),r=new KM(16777215,.6);r.position.set(2,3,4),this.scene.add(i,r),this.arrowGroup=new Tr,this.scene.add(this.arrowGroup)}resize(t,i){this.width=t,this.height=i,this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix()}setMove(t){t!==this.currentMove&&(this.currentMove=t,this.rebuildArrow(t))}render(t){if(!t||!this.currentMove){this.renderer.render(this.scene,this.camera);return}const i=new Tr,r=new je;r.set(t.rotationMatrix[0],t.rotationMatrix[1],t.rotationMatrix[2],0,t.rotationMatrix[3],t.rotationMatrix[4],t.rotationMatrix[5],0,t.rotationMatrix[6],t.rotationMatrix[7],t.rotationMatrix[8],0,0,0,0,1),i.setRotationFromMatrix(r);const l=t.size/this.width;i.position.set((t.translation[0]-this.width/2)*l,-(t.translation[1]-this.height/2)*l,t.translation[2]*l),i.scale.setScalar(l*2),this.arrowGroup.matrixAutoUpdate=!1,this.arrowGroup.matrix.copy(i.matrix),this.arrowGroup.matrixWorldNeedsUpdate=!0,this.renderer.render(this.scene,this.camera)}dispose(){this.renderer.dispose(),this.clearArrow()}rebuildArrow(t){if(this.clearArrow(),!t)return;const i=D0(t),r=new Q(...P1[i]),l=new Q(0,1,0);Math.abs(r.dot(l))>.9&&l.set(0,0,1);const c=new Q().crossVectors(l,r).normalize(),f=new Q().crossVectors(r,c).normalize(),d=r.clone().multiplyScalar(.51),p=new Tr;p.position.copy(d);const m=w0(t),g=.28,_=[],v=24,S=Iv(t)?m:0,E=Iv(t)?0:m;for(let P=0;P<=v;P++){const V=S+(E-S)*P/v,D=c.clone().multiplyScalar(Math.cos(V)*g).add(f.clone().multiplyScalar(Math.sin(V)*g));_.push(D)}const R=new y0(_),M=new Yd(R,v,.025,8,!1),y=new Vd({color:I1,transparent:!0,opacity:H1,depthTest:!0,depthWrite:!1}),I=new di(M,y);p.add(I);const U=_[_.length-1],w=_[_.length-2]??U,k=new Q().subVectors(U,w).normalize(),B=new di(new qd(.06,.14,12),y.clone());if(B.position.copy(U),B.quaternion.setFromUnitVectors(new Q(0,1,0),k),p.add(B),F1(t)){const P=p.clone();P.rotation.z=Math.PI,p.add(P)}this.arrowGroup.add(p)}clearArrow(){for(;this.arrowGroup.children.length>0;){const t=this.arrowGroup.children[0];this.arrowGroup.remove(t),V1(t)}}}function V1(s){s.traverse(t=>{t instanceof di&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())})}function k1({pose:s,move:t,width:i,height:r,active:l}){const c=ie.useRef(null),f=ie.useRef(null);return ie.useEffect(()=>{const d=c.current;if(!d)return;const p=new G1(d);return f.current=p,()=>{p.dispose(),f.current=null}},[]),ie.useEffect(()=>{var d;(d=f.current)==null||d.resize(i,r)},[i,r]),ie.useEffect(()=>{var d;(d=f.current)==null||d.setMove(t)},[t]),ie.useEffect(()=>{if(!l)return;let d=0;const p=()=>{var m;(m=f.current)==null||m.render(s),d=requestAnimationFrame(p)};return d=requestAnimationFrame(p),()=>cancelAnimationFrame(d)},[s,l]),kt.jsx("canvas",{ref:c,className:`ar-overlay${l?" active":""}`,"aria-hidden":"true"})}const Ss=["U","F","R","B","L","D"],U0={U:1,F:2,R:3,B:4,L:5,D:6};function X1(s){return`면 ${U0[s]}`}function Lc(s){const t=U0[s];return t===1?"섞인 큐브 그대로 — 아무 면부터 가이드 안에 맞추세요":`면 ${t} — 아직 스캔 안 한 다른 면을 보여주세요`}function W1({phase:s,progress:t,currentFace:i,faceIndex:r,canCapture:l,onCapture:c}){if(s!=="calibrating"||!i)return null;const f=r>0;return kt.jsxs("div",{className:"calibration-overlay",children:[kt.jsxs("p",{className:"calibration-step",children:["2단계 — ",r+1," / 6 · ",X1(i)]}),kt.jsx("p",{className:"calibration-hint",children:Lc(i)}),kt.jsx("div",{className:"calibration-bar",children:kt.jsx("div",{className:"calibration-fill",style:{width:`${t*100}%`}})}),kt.jsx("p",{className:"calibration-sub",children:f?"다른 면을 가이드에 맞춘 뒤 아래 버튼을 누르세요.":"큐브 면을 가이드에 맞추고 준비되면 버튼을 누르세요."}),kt.jsx("button",{type:"button",className:"capture-button",disabled:!l,onClick:c,children:l?"이 면 스캔":"큐브를 가이드 안에 맞추세요"})]})}function q1({setVideoRef:s,onDimensions:t}){const i=ie.useCallback(l=>{l.videoWidth&&l.videoHeight&&(t==null||t(l.videoWidth,l.videoHeight))},[t]),r=ie.useCallback(l=>{s(l),l&&l.readyState>=1&&i(l)},[s,i]);return kt.jsx("video",{ref:r,className:"camera-feed",playsInline:!0,muted:!0,autoPlay:!0,onLoadedMetadata:l=>i(l.currentTarget)})}const Y1={W:"#f5f5f5",Y:"#facc15",R:"#ef4444",O:"#f97316",G:"#22c55e",B:"#3b82f6"},j1={R:"빨",O:"주",Y:"노",G:"초",B:"파",W:"흰"},Z1={searching:"큐브를 찾는 중...",detected:"아래 버튼으로 스캔",stabilizing:"스캔 중",captured:"캡처 완료!"};function K1({feedback:s,visible:t}){if(!t)return null;const i=s.status,r=s.cellColors.length===9;return kt.jsxs("div",{className:"detection-overlay","aria-live":"polite",children:[kt.jsx("div",{className:"guide-frame-css"}),kt.jsxs("div",{className:"scan-ui-panel scan-ui-panel--compact",children:[kt.jsxs("div",{className:`detection-status ${i}`,children:[kt.jsx("span",{className:"status-dot"}),kt.jsx("span",{className:"status-text",children:Z1[s.status]})]}),r&&kt.jsx("div",{className:"cell-grid","aria-label":"칸별 인식 결과",children:s.cellColors.map((l,c)=>kt.jsx("span",{className:"cell-grid-item",style:{background:Y1[l]},title:j1[l]},c))})]})]})}function Hv({message:s="준비 중...",overlay:t=!1}){return kt.jsxs("div",{className:`loading-screen${t?" overlay":""}`,children:[kt.jsx("div",{className:"loading-spinner"}),kt.jsx("p",{children:s})]})}function Q1({phase:s,currentStep:t,totalSteps:i}){return s!=="solving"||i===0?null:kt.jsxs("div",{className:"step-indicator","aria-live":"polite",children:["Step ",t," / ",i]})}function J1(s){return s>18?"노란 조명 — 흰 면으로 보정합니다":s<-12?"푸른 조명 — 흰 면으로 보정합니다":"현재 조명에서 흰색 감지 중"}function $1({visible:s,sample:t,ready:i,error:r,onConfirm:l}){return s?kt.jsxs("div",{className:"wb-overlay","aria-live":"polite",children:[kt.jsx("div",{className:"guide-frame-css"}),kt.jsxs("div",{className:"wb-panel scan-ui-panel",children:[kt.jsx("p",{className:"wb-step",children:"1단계 — 흰색 기준 맞추기"}),kt.jsx("p",{className:"wb-hint",children:"흰 스티커 면을 점선 안에 맞춰 주세요"}),kt.jsx("div",{className:"wb-meter",children:t?kt.jsxs(kt.Fragment,{children:[kt.jsx("div",{className:"wb-preview-swatch",style:{background:`rgb(${Math.round(t.r)}, ${Math.round(t.g)}, ${Math.round(t.b)})`}}),kt.jsx("p",{className:`wb-status ${i?"ready":""}`,children:i?"이 조명의 흰색을 인식했습니다":"흰 면을 찾는 중..."}),kt.jsx("p",{className:"wb-warmth",children:J1(t.warmth)})]}):kt.jsx("p",{className:"wb-status",children:"가이드 안에 흰 면만 보이게 맞춰 주세요"})}),kt.jsx("button",{type:"button",className:"capture-button",disabled:!i,onClick:l,children:i?"흰색 기준 저장 → 스캔 시작":"흰 면을 가이드에 맞추세요"}),r&&kt.jsx("p",{className:"wb-error",children:r})]}),kt.jsx("div",{className:"wb-guide-note",children:kt.jsx("p",{children:"현재 방 조명에서의 흰색을 먼저 학습합니다"})})]}):null}function tR(s){const t=new Map;for(const l of s)t.set(l.faceId,l.colors);const i=["U","R","F","D","L","B"];let r="";for(const l of i){const c=t.get(l);if(!c||c.length!==9)throw new Error(`Missing face data for ${l}`);for(const f of c)r+=eR(f)}return r}function eR(s){return{W:"U",Y:"D",R:"R",O:"L",G:"F",B:"B"}[s]}function nR(s,t){const i=new Array(9).fill(0);for(let r=0;r<3;r++)for(let l=0;l<3;l++){let c=0;for(let f=0;f<3;f++)c+=s[r*3+f]*t[f*3+l];i[r*3+l]=c}return i}function Gv(){return[1,0,0,0,1,0,0,0,1]}function iR(s,t){const[i,r,l]=s,c=Math.hypot(i,r,l)||1,f=i/c,d=r/c,p=l/c,m=Math.cos(t),g=Math.sin(t),_=1-m;return[_*f*f+m,_*f*d-g*p,_*f*p+g*d,_*f*d+g*p,_*d*d+m,_*d*p-g*f,_*f*p-g*d,_*d*p+g*f,_*p*p+m]}function aR(){return new Worker(new URL("/makemecubemaster/assets/solver.worker-DtGqYb1U.js",import.meta.url),{type:"module"})}function bs(s,t){const i=Math.min(s,t)*.55;return{x:(s-i)/2,y:(t-i)/2,size:i}}function rR(s){const{x:t,y:i,size:r}=s;return[{x:t,y:i},{x:t+r,y:i},{x:t+r,y:i+r},{x:t,y:i+r}]}function sR(s,t,i){return s.map(r=>({x:r.x+t,y:r.y+i}))}const L0={r:1,g:1,b:1},oR=.45,lR=2.2,Ph=240;let As={...L0},Zd=!1;function cR(){return As}function wd(){return Zd}function uR(s){s.r,s.g,s.b,As={r:Bh(Ph/Math.max(s.r,1)),g:Bh(Ph/Math.max(s.g,1)),b:Bh(Ph/Math.max(s.b,1))},Zd=!0}function Vv(){As={...L0},Zd=!1}function Bh(s){return Math.min(lR,Math.max(oR,s))}function Fh(s){return Math.min(255,Math.max(0,Math.round(s)))}function fR(s,t,i){return[Fh(s*As.r),Fh(t*As.g),Fh(i*As.b)]}function N0(s,t,i){const r=s.getContext("2d",{willReadFrequently:!0});if(!r)return null;const l=bs(t,i),c=l.size*.22,f=Math.floor(l.x+c),d=Math.floor(l.y+c),p=Math.floor(l.size-c*2),m=Math.floor(l.size-c*2);if(p<=0||m<=0)return null;const g=r.getImageData(f,d,p,m).data,_=[],v=[],S=[];for(let U=0;U<g.length;U+=16){const w=g[U],k=g[U+1],B=g[U+2];(w+k+B)/3<95||Math.max(w,k,B)-Math.min(w,k,B)>95||(_.push(w),v.push(k),S.push(B))}if(_.length<12)return null;const E=Ih(_),R=Ih(v),M=Ih(S),y=(E+R+M)/3,I=(E+R)/2-M;return{r:E,g:R,b:M,brightness:y,warmth:I,ready:y>130&&_.length>=20}}function hR(s,t,i){const r=N0(s,t,i);return!r||!r.ready?null:(uR(r),{gains:cR(),sample:r})}function Ih(s){const t=[...s].sort((r,l)=>r-l),i=Math.floor(t.length/2);return t.length%2===1?t[i]:Math.round((t[i-1]+t[i])/2)}const O0=["R","O","Y","G","B","W"],z0={W:[95,0,0],Y:[88,-4,82],R:[48,62,38],O:[62,42,62],G:[55,-48,32],B:[32,28,-52]};function dR(s,t,i){const r=Hh(s/255),l=Hh(t/255),c=Hh(i/255);return[r*.4124564+l*.3575761+c*.1804375,r*.2126729+l*.7151522+c*.072175,r*.0193339+l*.119192+c*.9503041]}function Hh(s){return s>.04045?((s+.055)/1.055)**2.4:s/12.92}function pR(s,t,i){const f=Gh(s/.95047),d=Gh(t/1),p=Gh(i/1.08883);return[116*d-16,500*(f-d),200*(d-p)]}function Gh(s){return s>.008856?s**(1/3):7.787*s+16/116}function P0(s,t,i){const[r,l,c]=dR(s,t,i);return pR(r,l,c)}function B0(s,t){const i=s[0]-t[0],r=s[1]-t[1],l=s[2]-t[2];return Math.sqrt(i*i+r*r+l*l)}function mR(s,t,i){const r=s/255,l=t/255,c=i/255,f=Math.max(r,l,c),d=Math.min(r,l,c),p=f-d;let m=0;p>0&&(f===r?m=(l-c)/p%6:f===l?m=(c-r)/p+2:m=(r-l)/p+4,m*=60,m<0&&(m+=360));const g=f===0?0:p/f*255,_=f*255;return[m,g,_]}function gR(s,t,i){const r=P0(s,t,i);let l="W",c=1/0;for(const f of O0){const d=B0(r,z0[f]);d<c&&(c=d,l=f)}return l}function F0(s,t,i){const r=Math.max(s,t,i),l=Math.min(s,t,i);return r<38||r<70&&r-l<22}function kv(s,t,i){const r=Math.max(s,t,i),l=Math.min(s,t,i),c=r-l,f=(s+t+i)/3;return r<125||c>42||i>s+22&&i>t+12||s>t+22&&s>i+22||t>s+18&&t>i+18?!1:f>145&&c<38}function _R(s,t,i,r){const l=P0(s,t,i);return 1/(1+B0(l,z0[r]))}function Xv(s,t,i){if([s,t,i]=fR(s,t,i),F0(s,t,i))return gR(s,t,i);const[r,l]=mR(s,t,i),c=l/255,f=Math.max(s,t,i);if(wd()){const g=f-Math.min(s,t,i);if((s+t+i)/3>195&&g<38)return"W"}if(kv(s,t,i))return"W";const d=new Map;for(const g of O0)d.set(g,_R(s,t,i,g));i>=s+14&&i>=t+10&&i>75&&d.set("B",(d.get("B")??0)+.55),s>=t+12&&s>=i+12&&s>85&&d.set("R",(d.get("R")??0)+.45),t>=s+10&&t>=i+10&&t>70&&d.set("G",(d.get("G")??0)+.45),s>95&&t>85&&i<Math.min(s,t)-18&&d.set("Y",(d.get("Y")??0)+.5),s>t+8&&t>i+5&&s>110&&r>=8&&r<42&&d.set("O",(d.get("O")??0)+.45),c>.18&&(r>=38&&r<=72&&d.set("Y",(d.get("Y")??0)+.25),r>=10&&r<38&&d.set("O",(d.get("O")??0)+.2),(r<=12||r>=345)&&d.set("R",(d.get("R")??0)+.2),r>=78&&r<=155&&d.set("G",(d.get("G")??0)+.2),r>=165&&r<=255&&d.set("B",(d.get("B")??0)+.3)),f>175&&c<.22&&!kv(s,t,i)&&d.set("W",(d.get("W")??0)-.35);let p="W",m=-1/0;for(const[g,_]of d)_>m&&(m=_,p=g);return p}function vR(s,t,i,r,l,c){const f=new Map,d=2;for(let g=Math.floor(r);g<Math.floor(c);g+=d)for(let _=Math.floor(i);_<Math.floor(l);_+=d){const v=(g*t+_)*4,S=s[v],E=s[v+1],R=s[v+2];if(F0(S,E,R))continue;const M=Xv(S,E,R);f.set(M,(f.get(M)??0)+1)}if(f.size===0){const g=Math.floor((i+l)/2),v=(Math.floor((r+c)/2)*t+g)*4;return Xv(s[v],s[v+1],s[v+2])}let p="W",m=0;for(const[g,_]of f)_>m&&(m=_,p=g);return p}function I0(s,t,i){const l=s.getImageData(0,0,t,i).data,c=[],f=t/3,d=i/3,p=.24;for(let m=0;m<3;m++)for(let g=0;g<3;g++){const _=g*f+f*p,v=g*f+f*(1-p),S=m*d+d*p,E=m*d+d*(1-p);c.push(vR(l,t,_,S,v,E))}return c}function Vc(){return{R:0,O:0,Y:0,G:0,B:0,W:0}}function H0(s){const t=Vc();for(const i of s)t[i]++;return t}function Dd(s){return!!(s&&s.length===9)}function xR(s){if(!Dd(s))return{valid:!1,colorCounts:Vc(),detectedCenter:null,uniqueColors:0};const t=H0(s),i=Object.values(t).filter(r=>r>0).length;return{valid:!0,colorCounts:t,detectedCenter:s[4]??null,uniqueColors:i}}const ys=200;function Nc(s,t){const i=document.createElement("canvas");i.width=ys,i.height=ys;const r=i.getContext("2d",{willReadFrequently:!0});return r?(r.drawImage(s,t.x,t.y,t.size,t.size,0,0,ys,ys),I0(r,ys,ys)):[]}function yR(s,t){const i=s.getContext("2d",{willReadFrequently:!0});if(!i)return 0;const{x:r,y:l,size:c}=t,f=i.getImageData(Math.floor(r),Math.floor(l),Math.floor(c),Math.floor(c)).data;let d=0,p=0,m=0;for(let _=0;_<f.length;_+=32){const v=(f[_]+f[_+1]+f[_+2])/3;d+=v,p+=v*v,m++}if(m===0)return 0;const g=d/m;return p/m-g*g}function SR(s,t){if(s.length!==9)return!1;const i=new Set(s),r=s.filter(l=>l!=="W").length;return t<120?!1:i.size>=2&&r>=2||i.size>=1&&r>=4&&t>200}const ui=.5,MR=[[-ui,ui,ui],[ui,ui,ui],[ui,-ui,ui],[-ui,-ui,ui]];function ER(s){if(s.length<4)return null;const t=[...s].sort((l,c)=>l.y-c.y),i=t.slice(0,2).sort((l,c)=>l.x-c.x),r=t.slice(2,4).sort((l,c)=>l.x-c.x);return[i[0],i[1],r[1],r[0]]}function Ud(s,t,i){try{return bR(s,t,i)}catch{return TR(s,t)}}function TR(s,t,i){const r={x:s.reduce((c,f)=>c+f.x,0)/4,y:s.reduce((c,f)=>c+f.y,0)/4},l=(Math.hypot(s[1].x-s[0].x,s[1].y-s[0].y)+Math.hypot(s[2].x-s[3].x,s[2].y-s[3].y))/2;return{corners:s,center:r,size:l,rotationMatrix:[1,0,0,0,1,0,0,0,1],translation:[r.x-t/2,r.y,l*3],confidence:.65}}function bR(s,t,i){const r=window.cv,l=t*.9,c=t*.9,f=t/2,d=i/2,p=r.matFromArray(4,1,r.CV_32FC1,MR.flat()),m=r.matFromArray(4,1,r.CV_32FC1,[s[0].x,s[0].y,s[1].x,s[1].y,s[2].x,s[2].y,s[3].x,s[3].y]),g=r.matFromArray(3,3,r.CV_32FC1,[l,0,f,0,c,d,0,0,1]),_=r.matFromArray(4,1,r.CV_32FC1,[0,0,0,0]),v=new r.Mat,S=new r.Mat,E=new r.Mat;r.solvePnP(p,m,g,_,v,S),r.Rodrigues(v,E);const R=[];for(let U=0;U<9;U++)R.push(E.data32F[U]??E.floatAt(Math.floor(U/3),U%3));const M=[S.data32F[0]??S.floatAt(0,0),S.data32F[1]??S.floatAt(1,0),S.data32F[2]??S.floatAt(2,0)],y={x:s.reduce((U,w)=>U+w.x,0)/4,y:s.reduce((U,w)=>U+w.y,0)/4},I=(Math.hypot(s[1].x-s[0].x,s[1].y-s[0].y)+Math.hypot(s[2].x-s[3].x,s[2].y-s[3].y))/2;return p.delete(),m.delete(),g.delete(),_.delete(),v.delete(),S.delete(),E.delete(),{corners:s,center:y,size:I,rotationMatrix:R,translation:M,confidence:.8}}const Ui=200;function AR(s){const t=(l,c)=>Math.hypot(l.x-c.x,l.y-c.y),i=[t(s[0],s[1]),t(s[1],s[2]),t(s[2],s[3]),t(s[3],s[0])],r=i.reduce((l,c)=>l+c,0)/4;return r<1?!1:i.every(l=>Math.abs(l-r)/r<.55)}function RR(s,t,i,r){const l=i*r;let c=null,f=0;for(let d=0;d<s.size();d++){const p=s.get(d),m=t.contourArea(p);if(m<l*.02){p.delete();continue}const g=t.arcLength(p,!0);for(const _ of[.02,.035,.05,.08]){const v=new t.Mat;if(t.approxPolyDP(p,v,_*g,!0),v.rows===4){const S=[];for(let R=0;R<4;R++)S.push({x:v.data32S[R*2],y:v.data32S[R*2+1]});const E=ER(S);E&&AR(E)&&m>f&&(f=m,c=E)}v.delete()}p.delete()}return c}function Wv(s,t,i){var r;if(!((r=window.cv)!=null&&r.Mat))return null;try{const l=window.cv,c=l.imread(s),f=new l.Mat,d=new l.Mat,p=new l.Mat,m=new l.Mat,g=new l.MatVector,_=new l.Mat;l.cvtColor(c,f,l.COLOR_RGBA2RGB),l.cvtColor(f,d,l.COLOR_RGB2GRAY),l.GaussianBlur(d,p,new l.Size(5,5),0),l.Canny(p,m,20,80),l.findContours(m,g,_,l.RETR_LIST,l.CHAIN_APPROX_SIMPLE);const v=RR(g,l,t,i);return c.delete(),f.delete(),d.delete(),p.delete(),m.delete(),g.delete(),_.delete(),v}catch{return null}}function G0(s,t,i){const r=bs(t,i),l=Nc(s,r),c=yR(s,r);return SR(l,c)?{corners:rR(r),colors:l}:null}function V0(s,t,i){const r=bs(t,i),l=document.createElement("canvas");l.width=r.size,l.height=r.size;const c=l.getContext("2d");if(c){c.drawImage(s,r.x,r.y,r.size,r.size,0,0,r.size,r.size);const p=Wv(l,r.size,r.size);if(p)return sR(p,r.x,r.y)}const f=Wv(s,t,i);if(f)return f;const d=G0(s,t,i);return(d==null?void 0:d.corners)??null}function qv(s,t,i){const r=V0(s,t,i);if(r){const c=wR(s,r),f=Ud(r,t,i);return{colors:c,pose:f}}const l=G0(s,t,i);if(l){const c=Ud(l.corners,t,i);return c.confidence=.7,{colors:l.colors,pose:c}}return null}function CR(s){const t=window.cv,i=t.imread(s),r=new t.Mat;return t.cvtColor(i,r,t.COLOR_RGBA2GRAY),i.delete(),r}function wR(s,t){var i;if(!((i=window.cv)!=null&&i.Mat)){const r=bs(s.width,s.height);return Nc(s,r)}try{const r=window.cv,l=r.imread(s),c=new r.Mat;r.cvtColor(l,c,r.COLOR_RGBA2RGB);const f=r.matFromArray(4,1,r.CV_32FC1,[t[0].x,t[0].y,t[1].x,t[1].y,t[2].x,t[2].y,t[3].x,t[3].y]),d=r.matFromArray(4,1,r.CV_32FC1,[0,0,Ui,0,Ui,Ui,0,Ui]),p=r.getPerspectiveTransform(f,d),m=new r.Mat;r.warpPerspective(c,m,p,new r.Size(Ui,Ui));const g=document.createElement("canvas");g.width=Ui,g.height=Ui,r.imshow(g,m);const _=g.getContext("2d",{willReadFrequently:!0}),v=_?I0(_,Ui,Ui):[];return l.delete(),c.delete(),f.delete(),d.delete(),p.delete(),m.delete(),v.length===9?v:Nc(s,bs(s.width,s.height))}catch{return Nc(s,bs(s.width,s.height))}}const Yv=45;class DR{constructor(){fn(this,"prevGray",null);fn(this,"trackedCorners",null);fn(this,"lostFrames",0)}getLostFrames(){return this.lostFrames}reset(){var t;(t=this.prevGray)==null||t.delete(),this.prevGray=null,this.trackedCorners=null,this.lostFrames=0}update(t,i){var g;const r=window.cv;if(i)return this.trackedCorners=i,this.lostFrames=0,(g=this.prevGray)==null||g.delete(),this.prevGray=t.clone(),i;if(!this.prevGray||!this.trackedCorners)return null;const l=r.matFromArray(4,1,r.CV_32FC2,UR(this.trackedCorners)),c=new r.Mat,f=new r.Mat,d=new r.Mat;r.calcOpticalFlowPyrLK(this.prevGray,t,l,c,f,d);const p=[];let m=0;for(let _=0;_<4;_++){const v=f.data[_]===1,S=c.data32F[_*2],E=c.data32F[_*2+1];v&&Number.isFinite(S)&&Number.isFinite(E)?(p.push({x:S,y:E}),m++):p.push(this.trackedCorners[_])}return l.delete(),c.delete(),f.delete(),d.delete(),this.prevGray.delete(),this.prevGray=t.clone(),m<2?(this.lostFrames++,this.lostFrames>Yv?(this.reset(),null):this.trackedCorners):(this.trackedCorners=p,this.lostFrames++,this.lostFrames>Yv?(this.reset(),null):this.trackedCorners)}}function UR(s){return s.flatMap(t=>[t.x,t.y])}const LR=.65,NR=4;class OR{constructor(){fn(this,"state",{lastMatrix:Gv(),stableCount:0,pendingMove:null});fn(this,"initialized",!1)}reset(){this.state={lastMatrix:Gv(),stableCount:0,pendingMove:null},this.initialized=!1}update(t){if(!this.initialized)return this.state.lastMatrix=[...t],this.initialized=!0,null;const i=nR(zR(t),this.state.lastMatrix),r=BR(i);if(r)if(this.state.pendingMove===r){if(this.state.stableCount++,this.state.stableCount>=NR)return this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,r}else this.state.pendingMove=r,this.state.stableCount=1;else this.state.pendingMove=null,this.state.stableCount=0,this.state.lastMatrix=PR(this.state.lastMatrix,t,.15);return null}sync(t){this.state.lastMatrix=[...t],this.state.pendingMove=null,this.state.stableCount=0,this.initialized=!0}}function zR(s){return[s[0],s[3],s[6],s[1],s[4],s[7],s[2],s[5],s[8]]}function PR(s,t,i){return s.map((r,l)=>r*(1-i)+t[l]*i)}function BR(s){const t=["R","R'","R2","L","L'","L2","U","U'","U2","D","D'","D2","F","F'","F2","B","B'","B2"];let i=null,r=LR;for(const l of t){const c=D0(l);let f=B1[c];(c==="L"||c==="D"||c==="B")&&(f=[-f[0],-f[1],-f[2]]);const d=iR(f,w0(l)),p=FR(s,d);p>r&&(r=p,i=l)}return i}function FR(s,t){let i=0;for(let r=0;r<9;r++)i+=1-Math.abs(s[r]-t[r])/2;return i/9}class IR{constructor(){fn(this,"rotationDetector",new OR);fn(this,"flowTracker",new DR);fn(this,"trackingEnabled",!1);fn(this,"processCanvas");fn(this,"processCtx");fn(this,"lastColors",null);this.processCanvas=document.createElement("canvas");const t=this.processCanvas.getContext("2d",{willReadFrequently:!0});if(!t)throw new Error("Canvas 2D context unavailable");this.processCtx=t}enableTracking(){this.trackingEnabled=!0,this.rotationDetector.reset(),this.flowTracker.reset()}disableTracking(){this.trackingEnabled=!1,this.rotationDetector.reset(),this.flowTracker.reset(),this.lastColors=null}syncPose(t){this.rotationDetector.sync(t.rotationMatrix)}getFrameCanvas(){return this.processCanvas}captureFrame(t){const i=t.videoWidth,r=t.videoHeight;return!i||!r?!1:(this.processCanvas.width=i,this.processCanvas.height=r,this.processCtx.drawImage(t,0,0,i,r),!0)}getWhiteBalanceSample(t,i){return N0(this.processCanvas,t,i)}process(t){const i=t.videoWidth,r=t.videoHeight;if(!i||!r)return{pose:null,detectedFace:null,rotationMove:null};this.processCanvas.width=i,this.processCanvas.height=r,this.processCtx.drawImage(t,0,0,i,r);try{return this.trackingEnabled?this.processWithTracking(i,r):this.processDetectionOnly(i,r)}catch{return{pose:null,detectedFace:null,rotationMove:null}}}processDetectionOnly(t,i){const r=qv(this.processCanvas,t,i);return r?(this.lastColors=r.colors,{pose:r.pose,detectedFace:r,rotationMove:null}):{pose:null,detectedFace:null,rotationMove:null}}processWithTracking(t,i){const r=V0(this.processCanvas,t,i),l=CR(this.processCanvas),c=this.flowTracker.update(l,r);if(l.delete(),!c)return{pose:null,detectedFace:null,rotationMove:null};let f=this.lastColors;if(r){const g=qv(this.processCanvas,t,i);g&&(f=g.colors,this.lastColors=f)}const d=Ud(c,t,i);d.confidence=r?.85:Math.max(.35,.85-this.flowTracker.getLostFrames()*.01);const p=f?{colors:f,pose:d}:null,m=this.rotationDetector.update(d.rotationMatrix);return{pose:d,detectedFace:p,rotationMove:m}}readStableFace(t,i=5){const r=[];let l=null;for(let f=0;f<i;f++){const d=this.process(t);if(!d.detectedFace)return null;r.push(d.detectedFace.colors),l=d.detectedFace.pose}return l?{colors:HR(r),pose:l}:null}}function HR(s){const t=[];for(let i=0;i<9;i++){const r=new Map;for(const f of s){const d=f[i];r.set(d,(r.get(d)??0)+1)}let l="W",c=0;for(const[f,d]of r)d>c&&(c=d,l=f);t.push(l)}return t}const GR="https://docs.opencv.org/4.9.0/opencv.js";let Tc=null;function VR(){return Tc||(Tc=new Promise((s,t)=>{var r;if((r=window.cv)!=null&&r.Mat){s();return}const i=document.createElement("script");i.src=GR,i.async=!0,i.onload=()=>{(()=>{var c;(c=window.cv)!=null&&c.Mat?s():(window.cv=window.cv??{},window.cv.onRuntimeInitialized=()=>s())})()},i.onerror=()=>t(new Error("OpenCV.js 로드에 실패했습니다.")),document.head.appendChild(i)}),Tc)}const kR=["U","R","F","D","L","B"];function jv(s,t){if(s.length!==9||t.length!==9)return!0;let i=0;for(let r=0;r<9;r++)s[r]!==t[r]&&i++;return i>=3}function XR(s){if(s.length!==54)return"큐브 색상 데이터가 부족합니다. 6면을 다시 스캔해 주세요.";const t=new Map;for(const i of s)t.set(i,(t.get(i)??0)+1);for(const i of kR)if(t.get(i)!==9)return"색상 인식이 맞지 않습니다. 조명을 밝게 하고 6면을 다시 스캔해 주세요.";return null}const Oc={status:"searching",stableProgress:0,stableTarget:0,detectedCenter:null,colorCounts:Vc(),cellColors:[]},WR={phase:"loading",error:null,scannedFaces:[],currentCalibrationFace:Ss[0],calibrationProgress:0,solution:null,currentPose:null,solverReady:!1,calibrationHint:"",detectionFeedback:Oc,canCaptureFace:!1,whiteBalanceSample:null,whiteBalanceReady:!1,whiteBalanceError:null,whiteBalanceCalibrated:!1};function qR(s){const[t,i]=ie.useState(WR),r=ie.useRef(null),l=ie.useRef(null),c=ie.useRef(""),f=ie.useRef(0),d=ie.useRef(0),p=ie.useRef("loading"),m=ie.useRef(null),g=ie.useRef(null),_=ie.useRef(0),v=ie.useRef(null),S=ie.useCallback(()=>{v.current&&(clearTimeout(v.current),v.current=null)},[]),E=ie.useCallback((T,z)=>{var Z,tt;S();const Y=++d.current;(Z=l.current)==null||Z.postMessage({type:"solve",facelet:T,id:Y}),(tt=r.current)==null||tt.syncPose(z),v.current=setTimeout(()=>{i(lt=>lt.phase!=="computing"?lt:{...lt,phase:"error",error:"해법 계산 시간이 초과되었습니다. 다시 스캔해 주세요."})},2e4)},[S]);ie.useEffect(()=>{p.current=t.phase,m.current=t.solution},[t.phase,t.solution]);const R=ie.useCallback(T=>{var Y;const z=++d.current;(Y=l.current)==null||Y.postMessage({type:"apply",move:T,facelet:c.current,id:z}),i(Z=>{if(!Z.solution)return Z;const tt=Z.solution.moves[Z.solution.currentIndex];if(T!==tt)return Z;const lt=Z.solution.currentIndex+1;return lt>=Z.solution.moves.length?{...Z,phase:"solved",solution:{...Z.solution,currentIndex:lt}}:{...Z,solution:{...Z.solution,currentIndex:lt}}})},[]),M=ie.useCallback((T,z,Y)=>{const{detectedCenter:Z,colorCounts:tt}=xR(z),lt=Dd(z);let N="searching";return!T||!lt?N="searching":N="detected",{status:N,stableProgress:0,stableTarget:0,detectedCenter:Z,colorCounts:tt,cellColors:lt&&z?[...z]:[]}},[]),y=ie.useCallback(async()=>{try{await VR(),r.current=new IR;const T=aR();l.current=T,T.onmessage=z=>{var Z;const Y=z.data;Y.type==="ready"?i(tt=>({...tt,solverReady:!0})):Y.type==="solution"?(S(),_.current=Date.now(),i(tt=>({...tt,phase:Y.moves.length===0?"solved":"solving",solution:{moves:Y.moves,currentIndex:0},calibrationHint:"",detectionFeedback:Oc,canCaptureFace:!1})),Y.moves.length>0&&((Z=r.current)==null||Z.enableTracking())):Y.type==="facelet"?c.current=Y.facelet:Y.type==="error"&&(S(),i(tt=>({...tt,phase:"error",error:Y.message.includes("Invalid")||Y.message.includes("invalid")?"인식된 큐브 상태가 올바르지 않습니다. 조명을 밝게 하고 6면을 다시 스캔해 주세요.":Y.message})))},T.postMessage({type:"init"}),Vv(),i(z=>({...z,phase:"whiteBalance",whiteBalanceCalibrated:!1,whiteBalanceSample:null,whiteBalanceReady:!1,whiteBalanceError:null}))}catch(T){i(z=>({...z,phase:"error",error:T instanceof Error?T.message:"초기화 실패"}))}},[S]);ie.useEffect(()=>(y(),()=>{var T,z;cancelAnimationFrame(f.current),S(),(T=l.current)==null||T.terminate(),(z=r.current)==null||z.disableTracking()}),[y,S]);const I=ie.useCallback(()=>{var tt;const T=s.current,z=r.current;if(!T||!z||T.readyState<2||!z.captureFrame(T))return;const Y=z.getFrameCanvas(),Z=hR(Y,T.videoWidth,T.videoHeight);if(!Z){i(lt=>({...lt,whiteBalanceError:"흰색 영역을 찾지 못했습니다. 흰 스티커 면을 가이드 안에 밝게 맞춰 주세요."}));return}g.current=null,i(lt=>({...lt,phase:"calibrating",error:null,scannedFaces:[],currentCalibrationFace:Ss[0],calibrationProgress:0,calibrationHint:Lc(Ss[0]),detectionFeedback:Oc,canCaptureFace:!1,whiteBalanceSample:Z.sample,whiteBalanceReady:!0,whiteBalanceError:null,whiteBalanceCalibrated:!0})),(tt=r.current)==null||tt.disableTracking()},[s]),U=ie.useCallback(()=>{var T;if(!wd()){Vv(),i(z=>({...z,phase:"whiteBalance",whiteBalanceSample:null,whiteBalanceReady:!1,whiteBalanceError:null,whiteBalanceCalibrated:!1}));return}g.current=null,i(z=>({...z,phase:"calibrating",scannedFaces:[],currentCalibrationFace:Ss[0],calibrationProgress:0,calibrationHint:Lc(Ss[0]),detectionFeedback:Oc,canCaptureFace:!1})),(T=r.current)==null||T.disableTracking()},[]),w=ie.useCallback(()=>{const T=g.current;T&&i(z=>{if(z.phase!=="calibrating"||!z.currentCalibrationFace)return z;const Y=z.currentCalibrationFace,Z=z.scannedFaces[z.scannedFaces.length-1];if(Z&&!jv(T.colors,Z.colors))return z;const tt={faceId:Y,colors:T.colors},lt=[...z.scannedFaces,tt],N=Ss[lt.length]??null;if(g.current=null,N)return{...z,scannedFaces:lt,currentCalibrationFace:N,calibrationProgress:lt.length/6,calibrationHint:Lc(N),canCaptureFace:!1,detectionFeedback:{status:"captured",stableProgress:0,stableTarget:0,detectedCenter:T.colors[4]??null,colorCounts:H0(T.colors),cellColors:[...T.colors]}};try{const $=tR(lt),j=XR($);return j?{...z,phase:"error",error:j}:(c.current=$,queueMicrotask(()=>E($,T.pose)),{...z,phase:"computing",scannedFaces:lt,currentCalibrationFace:null,calibrationProgress:1,calibrationHint:"",canCaptureFace:!1,detectionFeedback:{status:"captured",stableProgress:0,stableTarget:0,detectedCenter:null,colorCounts:Vc(),cellColors:[]}})}catch($){return{...z,phase:"error",error:$ instanceof Error?$.message:"큐브 상태 생성 실패"}}})},[E]),k=ie.useCallback(()=>{const T=s.current,z=r.current;if(!T||!z||T.readyState<2)return;const Y=z.process(T),Z=p.current;if(Z==="whiteBalance"){z.captureFrame(T);const tt=z.getWhiteBalanceSample(T.videoWidth,T.videoHeight);i(lt=>({...lt,whiteBalanceSample:tt,whiteBalanceReady:(tt==null?void 0:tt.ready)??!1,whiteBalanceError:null}));return}if(Z==="calibrating"){if(!wd()){i(tt=>({...tt,phase:"whiteBalance",whiteBalanceCalibrated:!1}));return}i(tt=>{var vt;if(!tt.currentCalibrationFace)return{...tt,currentPose:Y.pose};const lt=((vt=Y.detectedFace)==null?void 0:vt.colors)??null,N=!!Y.pose&&Dd(lt);let $=N;const j=tt.scannedFaces[tt.scannedFaces.length-1];return $&&j&&lt&&($=jv(lt,j.colors)),N&&lt&&Y.pose?g.current={colors:lt,pose:Y.pose}:g.current=null,{...tt,currentPose:Y.pose,canCaptureFace:$,detectionFeedback:M(!!Y.pose,lt,$)}});return}if(i(tt=>({...tt,currentPose:Y.pose})),Z==="solving"&&Y.rotationMove){if(Date.now()-_.current<3e3)return;const tt=m.current;if(tt){const lt=tt.moves[tt.currentIndex];Y.rotationMove===lt&&(R(Y.rotationMove),Y.pose&&z.syncPose(Y.pose))}}},[s,R,M]),B=ie.useCallback(()=>{k(),f.current=requestAnimationFrame(B)},[k]),P=ie.useCallback(()=>{cancelAnimationFrame(f.current),f.current=requestAnimationFrame(B)},[B]),V=ie.useCallback(()=>{cancelAnimationFrame(f.current)},[]),D=t.solution&&t.solution.currentIndex<t.solution.moves.length?t.solution.moves[t.solution.currentIndex]??null:null;return{state:t,currentMove:D,confirmWhiteBalance:I,startCalibration:U,captureCurrentFace:w,startTracking:P,stopTracking:V}}function YR(){const s=ie.useRef(null),t=ie.useRef(null),[i,r]=ie.useState({stream:null,error:null,isReady:!1}),l=ie.useCallback(async p=>{const m=t.current;if(!(!m||p.srcObject===m)){p.srcObject=m;try{await p.play()}catch{}}},[]),c=ie.useCallback(p=>{s.current=p,p&&l(p)},[l]),f=ie.useCallback(async()=>{try{const p=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720},frameRate:{ideal:60}},audio:!1});t.current=p;const m=s.current;m&&await l(m),r({stream:p,error:null,isReady:!0})}catch(p){t.current=null,r({stream:null,error:p instanceof Error?p.message:"카메라 접근 실패",isReady:!1})}},[l]),d=ie.useCallback(()=>{var p;(p=t.current)==null||p.getTracks().forEach(m=>m.stop()),t.current=null,s.current&&(s.current.srcObject=null),r({stream:null,error:null,isReady:!1})},[]);return ie.useEffect(()=>()=>d(),[d]),{videoRef:s,setVideoRef:c,state:i,start:f,stop:d}}function jR(){var U,w;const{videoRef:s,setVideoRef:t,state:i,start:r}=YR(),{state:l,currentMove:c,confirmWhiteBalance:f,captureCurrentFace:d,startTracking:p,stopTracking:m}=qR(s),[g,_]=ie.useState({width:0,height:0});ie.useEffect(()=>{r()},[r]),ie.useEffect(()=>{if(i.isReady&&l.phase!=="loading")return p(),m},[i.isReady,l.phase,p,m]);const v=ie.useCallback((k,B)=>{_({width:k,height:B})},[]),S=l.phase==="loading"||!i.isReady,E=!!(l.error||i.error),R=l.phase==="computing",M=((U=l.solution)==null?void 0:U.moves.length)??0,y=(((w=l.solution)==null?void 0:w.currentIndex)??0)+1,I=l.phase==="solving";return kt.jsx("main",{className:"app",children:kt.jsxs("div",{className:"viewport",children:[kt.jsx(q1,{setVideoRef:t,onDimensions:v}),!S&&!E&&kt.jsxs(kt.Fragment,{children:[kt.jsx(k1,{pose:l.currentPose,move:c,width:g.width,height:g.height,active:I}),kt.jsx($1,{visible:l.phase==="whiteBalance",sample:l.whiteBalanceSample,ready:l.whiteBalanceReady,error:l.whiteBalanceError,onConfirm:f}),kt.jsx(K1,{feedback:l.detectionFeedback,visible:l.phase==="calibrating"}),kt.jsx(Q1,{phase:l.phase,currentStep:y,totalSteps:M}),kt.jsx(W1,{phase:l.phase,progress:l.calibrationProgress,currentFace:l.currentCalibrationFace,faceIndex:l.scannedFaces.length,canCapture:l.canCaptureFace,onCapture:d}),l.phase==="solving"&&c&&kt.jsxs("div",{className:"solving-banner",children:[kt.jsx("p",{className:"solving-move",children:c}),kt.jsx("p",{className:"solving-hint",children:"화살표 방향으로 면을 돌리세요"})]}),l.phase==="solved"&&kt.jsx("div",{className:"solved-banner",children:kt.jsx("p",{children:"완료!"})})]}),R&&kt.jsx(Hv,{overlay:!0,message:"6면 스캔 완료 — 해법 계산 중..."}),S&&kt.jsx(Hv,{overlay:!0,message:l.phase==="loading"?"AI 엔진 로딩 중...":"카메라 연결 중..."}),E&&!S&&kt.jsx("div",{className:"error-screen overlay",children:kt.jsx("p",{children:l.error??i.error})})]})})}cS({immediate:!0});rS.createRoot(document.getElementById("root")).render(kt.jsx(ie.StrictMode,{children:kt.jsx(jR,{})}));
