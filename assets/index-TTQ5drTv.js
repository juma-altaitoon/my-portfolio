(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function U0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Mh={exports:{}},Io={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v;function qS(){if($v)return Io;$v=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:a,type:r,key:f,ref:l!==void 0?l:null,props:u}}return Io.Fragment=e,Io.jsx=n,Io.jsxs=n,Io}var e_;function jS(){return e_||(e_=1,Mh.exports=qS()),Mh.exports}var Z=jS(),Eh={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function YS(){if(t_)return ct;t_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(A){return A===null||typeof A!="object"?null:(A=v&&A[v]||A["@@iterator"],typeof A=="function"?A:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function y(A,G,se){this.props=A,this.context=G,this.refs=b,this.updater=se||S}y.prototype.isReactComponent={},y.prototype.setState=function(A,G){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,G,"setState")},y.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function _(){}_.prototype=y.prototype;function N(A,G,se){this.props=A,this.context=G,this.refs=b,this.updater=se||S}var L=N.prototype=new _;L.constructor=N,E(L,y.prototype),L.isPureReactComponent=!0;var U=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function z(A,G,se,le,Ee,Ue){return se=Ue.ref,{$$typeof:a,type:A,key:G,ref:se!==void 0?se:null,props:Ue}}function q(A,G){return z(A.type,G,void 0,void 0,void 0,A.props)}function C(A){return typeof A=="object"&&A!==null&&A.$$typeof===a}function D(A){var G={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(se){return G[se]})}var V=/\/+/g;function te(A,G){return typeof A=="object"&&A!==null&&A.key!=null?D(""+A.key):G.toString(36)}function ce(){}function ve(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(ce,ce):(A.status="pending",A.then(function(G){A.status==="pending"&&(A.status="fulfilled",A.value=G)},function(G){A.status==="pending"&&(A.status="rejected",A.reason=G)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function fe(A,G,se,le,Ee){var Ue=typeof A;(Ue==="undefined"||Ue==="boolean")&&(A=null);var J=!1;if(A===null)J=!0;else switch(Ue){case"bigint":case"string":case"number":J=!0;break;case"object":switch(A.$$typeof){case a:case e:J=!0;break;case g:return J=A._init,fe(J(A._payload),G,se,le,Ee)}}if(J)return Ee=Ee(A),J=le===""?"."+te(A,0):le,U(Ee)?(se="",J!=null&&(se=J.replace(V,"$&/")+"/"),fe(Ee,G,se,"",function(qe){return qe})):Ee!=null&&(C(Ee)&&(Ee=q(Ee,se+(Ee.key==null||A&&A.key===Ee.key?"":(""+Ee.key).replace(V,"$&/")+"/")+J)),G.push(Ee)),1;J=0;var me=le===""?".":le+":";if(U(A))for(var be=0;be<A.length;be++)le=A[be],Ue=me+te(le,be),J+=fe(le,G,se,Ue,Ee);else if(be=x(A),typeof be=="function")for(A=be.call(A),be=0;!(le=A.next()).done;)le=le.value,Ue=me+te(le,be++),J+=fe(le,G,se,Ue,Ee);else if(Ue==="object"){if(typeof A.then=="function")return fe(ve(A),G,se,le,Ee);throw G=String(A),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return J}function I(A,G,se){if(A==null)return A;var le=[],Ee=0;return fe(A,le,"","",function(Ue){return G.call(se,Ue,Ee++)}),le}function W(A){if(A._status===-1){var G=A._result;G=G(),G.then(function(se){(A._status===0||A._status===-1)&&(A._status=1,A._result=se)},function(se){(A._status===0||A._status===-1)&&(A._status=2,A._result=se)}),A._status===-1&&(A._status=0,A._result=G)}if(A._status===1)return A._result.default;throw A._result}var j=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function xe(){}return ct.Children={map:I,forEach:function(A,G,se){I(A,function(){G.apply(this,arguments)},se)},count:function(A){var G=0;return I(A,function(){G++}),G},toArray:function(A){return I(A,function(G){return G})||[]},only:function(A){if(!C(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},ct.Component=y,ct.Fragment=n,ct.Profiler=l,ct.PureComponent=N,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ct.__COMPILER_RUNTIME={__proto__:null,c:function(A){return P.H.useMemoCache(A)}},ct.cache=function(A){return function(){return A.apply(null,arguments)}},ct.cloneElement=function(A,G,se){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var le=E({},A.props),Ee=A.key,Ue=void 0;if(G!=null)for(J in G.ref!==void 0&&(Ue=void 0),G.key!==void 0&&(Ee=""+G.key),G)!H.call(G,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&G.ref===void 0||(le[J]=G[J]);var J=arguments.length-2;if(J===1)le.children=se;else if(1<J){for(var me=Array(J),be=0;be<J;be++)me[be]=arguments[be+2];le.children=me}return z(A.type,Ee,void 0,void 0,Ue,le)},ct.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},ct.createElement=function(A,G,se){var le,Ee={},Ue=null;if(G!=null)for(le in G.key!==void 0&&(Ue=""+G.key),G)H.call(G,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(Ee[le]=G[le]);var J=arguments.length-2;if(J===1)Ee.children=se;else if(1<J){for(var me=Array(J),be=0;be<J;be++)me[be]=arguments[be+2];Ee.children=me}if(A&&A.defaultProps)for(le in J=A.defaultProps,J)Ee[le]===void 0&&(Ee[le]=J[le]);return z(A,Ue,void 0,void 0,null,Ee)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(A){return{$$typeof:h,render:A}},ct.isValidElement=C,ct.lazy=function(A){return{$$typeof:g,_payload:{_status:-1,_result:A},_init:W}},ct.memo=function(A,G){return{$$typeof:p,type:A,compare:G===void 0?null:G}},ct.startTransition=function(A){var G=P.T,se={};P.T=se;try{var le=A(),Ee=P.S;Ee!==null&&Ee(se,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(xe,j)}catch(Ue){j(Ue)}finally{P.T=G}},ct.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ct.use=function(A){return P.H.use(A)},ct.useActionState=function(A,G,se){return P.H.useActionState(A,G,se)},ct.useCallback=function(A,G){return P.H.useCallback(A,G)},ct.useContext=function(A){return P.H.useContext(A)},ct.useDebugValue=function(){},ct.useDeferredValue=function(A,G){return P.H.useDeferredValue(A,G)},ct.useEffect=function(A,G,se){var le=P.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return le.useEffect(A,G)},ct.useId=function(){return P.H.useId()},ct.useImperativeHandle=function(A,G,se){return P.H.useImperativeHandle(A,G,se)},ct.useInsertionEffect=function(A,G){return P.H.useInsertionEffect(A,G)},ct.useLayoutEffect=function(A,G){return P.H.useLayoutEffect(A,G)},ct.useMemo=function(A,G){return P.H.useMemo(A,G)},ct.useOptimistic=function(A,G){return P.H.useOptimistic(A,G)},ct.useReducer=function(A,G,se){return P.H.useReducer(A,G,se)},ct.useRef=function(A){return P.H.useRef(A)},ct.useState=function(A){return P.H.useState(A)},ct.useSyncExternalStore=function(A,G,se){return P.H.useSyncExternalStore(A,G,se)},ct.useTransition=function(){return P.H.useTransition()},ct.version="19.1.1",ct}var n_;function lp(){return n_||(n_=1,Eh.exports=YS()),Eh.exports}var de=lp();const Ft=U0(de);var bh={exports:{}},Fo={},Th={exports:{}},Ah={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function ZS(){return i_||(i_=1,(function(a){function e(I,W){var j=I.length;I.push(W);e:for(;0<j;){var xe=j-1>>>1,A=I[xe];if(0<l(A,W))I[xe]=W,I[j]=A,j=xe;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var W=I[0],j=I.pop();if(j!==W){I[0]=j;e:for(var xe=0,A=I.length,G=A>>>1;xe<G;){var se=2*(xe+1)-1,le=I[se],Ee=se+1,Ue=I[Ee];if(0>l(le,j))Ee<A&&0>l(Ue,le)?(I[xe]=Ue,I[Ee]=j,xe=Ee):(I[xe]=le,I[se]=j,xe=se);else if(Ee<A&&0>l(Ue,j))I[xe]=Ue,I[Ee]=j,xe=Ee;else break e}}return W}function l(I,W){var j=I.sortIndex-W.sortIndex;return j!==0?j:I.id-W.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,v=null,x=3,S=!1,E=!1,b=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var W=n(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=I)r(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=n(p)}}function P(I){if(b=!1,U(I),!E)if(n(m)!==null)E=!0,H||(H=!0,te());else{var W=n(p);W!==null&&fe(P,W.startTime-I)}}var H=!1,z=-1,q=5,C=-1;function D(){return y?!0:!(a.unstable_now()-C<q)}function V(){if(y=!1,H){var I=a.unstable_now();C=I;var W=!0;try{e:{E=!1,b&&(b=!1,N(z),z=-1),S=!0;var j=x;try{t:{for(U(I),v=n(m);v!==null&&!(v.expirationTime>I&&D());){var xe=v.callback;if(typeof xe=="function"){v.callback=null,x=v.priorityLevel;var A=xe(v.expirationTime<=I);if(I=a.unstable_now(),typeof A=="function"){v.callback=A,U(I),W=!0;break t}v===n(m)&&r(m),U(I)}else r(m);v=n(m)}if(v!==null)W=!0;else{var G=n(p);G!==null&&fe(P,G.startTime-I),W=!1}}break e}finally{v=null,x=j,S=!1}W=void 0}}finally{W?te():H=!1}}}var te;if(typeof L=="function")te=function(){L(V)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ve=ce.port2;ce.port1.onmessage=V,te=function(){ve.postMessage(null)}}else te=function(){_(V,0)};function fe(I,W){z=_(function(){I(a.unstable_now())},W)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(I){I.callback=null},a.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<I?Math.floor(1e3/I):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(I){switch(x){case 1:case 2:case 3:var W=3;break;default:W=x}var j=x;x=W;try{return I()}finally{x=j}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(I,W){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=x;x=I;try{return W()}finally{x=j}},a.unstable_scheduleCallback=function(I,W,j){var xe=a.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?xe+j:xe):j=xe,I){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=j+A,I={id:g++,callback:W,priorityLevel:I,startTime:j,expirationTime:A,sortIndex:-1},j>xe?(I.sortIndex=j,e(p,I),n(m)===null&&I===n(p)&&(b?(N(z),z=-1):b=!0,fe(P,j-xe))):(I.sortIndex=A,e(m,I),E||S||(E=!0,H||(H=!0,te()))),I},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(I){var W=x;return function(){var j=x;x=W;try{return I.apply(this,arguments)}finally{x=j}}}})(Ah)),Ah}var a_;function KS(){return a_||(a_=1,Th.exports=ZS()),Th.exports}var Rh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function QS(){if(r_)return Ln;r_=1;var a=lp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Ln.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.1.1",Ln}var s_;function JS(){if(s_)return Rh.exports;s_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Rh.exports=QS(),Rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function $S(){if(o_)return Fo;o_=1;var a=KS(),e=lp(),n=JS();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function m(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,o=i;;){var c=s.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){s=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===s)return h(c),t;if(d===o)return h(c),i;d=d.sibling}throw Error(r(188))}if(s.return!==o.return)s=c,o=d;else{for(var M=!1,R=c.child;R;){if(R===s){M=!0,s=c,o=d;break}if(R===o){M=!0,o=c,s=d;break}R=R.sibling}if(!M){for(R=d.child;R;){if(R===s){M=!0,s=d,o=c;break}if(R===o){M=!0,o=d,s=c;break}R=R.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==o)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function p(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=p(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case P:return"Suspense";case H:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case L:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case U:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:ve(t.type)||"Memo";case q:i=t._payload,t=t._init;try{return ve(t(i))}catch{}}return null}var fe=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},xe=[],A=-1;function G(t){return{current:t}}function se(t){0>A||(t.current=xe[A],xe[A]=null,A--)}function le(t,i){A++,xe[A]=t.current,t.current=i}var Ee=G(null),Ue=G(null),J=G(null),me=G(null);function be(t,i){switch(le(J,i),le(Ue,t),le(Ee,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Rv(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Rv(i),t=wv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}se(Ee),le(Ee,t)}function qe(){se(Ee),se(Ue),se(J)}function He(t){t.memoizedState!==null&&le(me,t);var i=Ee.current,s=wv(i,t.type);i!==s&&(le(Ue,t),le(Ee,s))}function je(t){Ue.current===t&&(se(Ee),se(Ue)),me.current===t&&(se(me),Uo._currentValue=j)}var kt=Object.prototype.hasOwnProperty,B=a.unstable_scheduleCallback,Ut=a.unstable_cancelCallback,ot=a.unstable_shouldYield,at=a.unstable_requestPaint,Fe=a.unstable_now,Gt=a.unstable_getCurrentPriorityLevel,Xe=a.unstable_ImmediatePriority,lt=a.unstable_UserBlockingPriority,Yt=a.unstable_NormalPriority,Zt=a.unstable_LowPriority,O=a.unstable_IdlePriority,T=a.log,ne=a.unstable_setDisableYieldValue,pe=null,ye=null;function he(t){if(typeof T=="function"&&ne(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(pe,t)}catch{}}var Be=Math.clz32?Math.clz32:Ke,Ce=Math.log,Ye=Math.LN2;function Ke(t){return t>>>=0,t===0?32:31-(Ce(t)/Ye|0)|0}var Te=256,Oe=4194304;function Je(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function We(t,i,s){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?c=Je(o):(M&=R,M!==0?c=Je(M):s||(s=R&~t,s!==0&&(c=Je(s))))):(R=o&~d,R!==0?c=Je(R):M!==0?c=Je(M):s||(s=o&~t,s!==0&&(c=Je(s)))),c===0?0:i!==0&&i!==c&&(i&d)===0&&(d=c&-c,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:c}function Ne(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ut(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=Te;return Te<<=1,(Te&4194048)===0&&(Te=256),t}function we(){var t=Oe;return Oe<<=1,(Oe&62914560)===0&&(Oe=4194304),t}function De(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function ze(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ae(t,i,s,o,c,d){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,F=t.expirationTimes,ee=t.hiddenUpdates;for(s=M&~s;0<s;){var ge=31-Be(s),Se=1<<ge;R[ge]=0,F[ge]=-1;var ie=ee[ge];if(ie!==null)for(ee[ge]=null,ge=0;ge<ie.length;ge++){var ae=ie[ge];ae!==null&&(ae.lane&=-536870913)}s&=~Se}o!==0&&Me(t,o,0),d!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=d&~(M&~i))}function Me(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-Be(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|s&4194090}function ke(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var o=31-Be(s),c=1<<o;c&i|t[o]&i&&(t[o]|=i),s&=~c}}function st(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function wt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Et(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:jv(t.type))}function _i(t,i){var s=W.p;try{return W.p=t,i()}finally{W.p=s}}var pn=Math.random().toString(36).slice(2),mn="__reactFiber$"+pn,Jt="__reactProps$"+pn,Ci="__reactContainer$"+pn,Or="__reactEvents$"+pn,ul="__reactListeners$"+pn,Pr="__reactHandles$"+pn,Vs="__reactResources$"+pn,Di="__reactMarker$"+pn;function Ir(t){delete t[mn],delete t[Jt],delete t[Or],delete t[ul],delete t[Pr]}function Xi(t){var i=t[mn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ci]||s[mn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Nv(t);t!==null;){if(s=t[mn])return s;t=Nv(t)}return i}t=s,s=t.parentNode}return null}function xa(t){if(t=t[mn]||t[Ci]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function tr(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function ya(t){var i=t[Vs];return i||(i=t[Vs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function un(t){t[Di]=!0}var cl=new Set,fl={};function w(t,i){Y(t,i),Y(t+"Capture",i)}function Y(t,i){for(fl[t]=i,t=0;t<i.length;t++)cl.add(i[t])}var oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},Q={};function Re(t){return kt.call(Q,t)?!0:kt.call(ue,t)?!1:oe.test(t)?Q[t]=!0:(ue[t]=!0,!1)}function Le(t,i,s){if(Re(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Ge(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Pe(t,i,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+o)}}var et,nt;function Ze(t){if(et===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);et=i&&i[1]||"",nt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+et+t+nt}var ht=!1;function bt(t,i){if(!t||ht)return"";ht=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(ae){var ie=ae}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(ae){ie=ae}t.call(Se.prototype)}}else{try{throw Error()}catch(ae){ie=ae}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(ae){if(ae&&ie&&typeof ae.stack=="string")return[ae.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],R=d[1];if(M&&R){var F=M.split(`
`),ee=R.split(`
`);for(c=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;c<ee.length&&!ee[c].includes("DetermineComponentFrameRoot");)c++;if(o===F.length||c===ee.length)for(o=F.length-1,c=ee.length-1;1<=o&&0<=c&&F[o]!==ee[c];)c--;for(;1<=o&&0<=c;o--,c--)if(F[o]!==ee[c]){if(o!==1||c!==1)do if(o--,c--,0>c||F[o]!==ee[c]){var ge=`
`+F[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=c);break}}}finally{ht=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Ze(s):""}function qt(t){switch(t.tag){case 26:case 27:case 5:return Ze(t.type);case 16:return Ze("Lazy");case 13:return Ze("Suspense");case 19:return Ze("SuspenseList");case 0:case 15:return bt(t.type,!1);case 11:return bt(t.type.render,!1);case 1:return bt(t.type,!0);case 31:return Ze("Activity");default:return""}}function Nt(t){try{var i="";do i+=qt(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function dt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $e(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Xt(t){var i=$e(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),o=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,d=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){o=""+M,d.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function vt(t){t._valueTracker||(t._valueTracker=Xt(t))}function Dn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return t&&(o=$e(t)?t.checked?"true":"false":t.value),t=o,t!==s?(i.setValue(t),!0):!1}function xi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var In=/[\n"\\]/g;function yn(t){return t.replace(In,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function zt(t,i,s,o,c,d,M,R){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+dt(i)):t.value!==""+dt(i)&&(t.value=""+dt(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?Un(t,M,dt(i)):s!=null?Un(t,M,dt(s)):o!=null&&t.removeAttribute("value"),c==null&&d!=null&&(t.defaultChecked=!!d),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+dt(R):t.removeAttribute("name")}function Fn(t,i,s,o,c,d,M,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;s=s!=null?""+dt(s):"",i=i!=null?""+dt(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Un(t,i,s){i==="number"&&xi(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function $t(t,i,s,o){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&o&&(t[s].defaultSelected=!0)}else{for(s=""+dt(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function An(t,i,s){if(i!=null&&(i=""+dt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+dt(s):""}function Fr(t,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(r(92));if(fe(o)){if(1<o.length)throw Error(r(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=dt(i),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o)}function Vn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var kx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rp(t,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,s):typeof s!="number"||s===0||kx.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function wp(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in i)o=i[c],i.hasOwnProperty(c)&&s[c]!==o&&Rp(t,c,o)}else for(var d in i)i.hasOwnProperty(d)&&Rp(t,d,i[d])}function yc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hl(t){return Wx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Sc=null;function Mc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Br=null,zr=null;function Cp(t){var i=xa(t);if(i&&(t=i.stateNode)){var s=t[Jt]||null;e:switch(t=i.stateNode,i.type){case"input":if(zt(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+yn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==t&&o.form===t.form){var c=o[Jt]||null;if(!c)throw Error(r(90));zt(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===t.form&&Dn(o)}break e;case"textarea":An(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&$t(t,!!s.multiple,i,!1)}}}var Ec=!1;function Dp(t,i,s){if(Ec)return t(i,s);Ec=!0;try{var o=t(i);return o}finally{if(Ec=!1,(Br!==null||zr!==null)&&(Ql(),Br&&(i=Br,t=zr,zr=Br=null,Cp(i),t)))for(i=0;i<t.length;i++)Cp(t[i])}}function ks(t,i){var s=t.stateNode;if(s===null)return null;var o=s[Jt]||null;if(o===null)return null;s=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bc=!1;if(Wi)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){bc=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{bc=!1}var Sa=null,Tc=null,dl=null;function Up(){if(dl)return dl;var t,i=Tc,s=i.length,o,c="value"in Sa?Sa.value:Sa.textContent,d=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(o=1;o<=M&&i[s-o]===c[d-o];o++);return dl=c.slice(t,1<o?1-o:void 0)}function pl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function Np(){return!1}function kn(t){function i(s,o,c,d,M){this._reactName=s,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ml:Np,this.isPropagationStopped=Np,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),i}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=kn(nr),Ws=g({},nr,{view:0,detail:0}),qx=kn(Ws),Ac,Rc,qs,vl=g({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(Ac=t.screenX-qs.screenX,Rc=t.screenY-qs.screenY):Rc=Ac=0,qs=t),Ac)},movementY:function(t){return"movementY"in t?t.movementY:Rc}}),Lp=kn(vl),jx=g({},vl,{dataTransfer:0}),Yx=kn(jx),Zx=g({},Ws,{relatedTarget:0}),wc=kn(Zx),Kx=g({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qx=kn(Kx),Jx=g({},nr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$x=kn(Jx),ey=g({},nr,{data:0}),Op=kn(ey),ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=iy[t])?!!i[t]:!1}function Cc(){return ay}var ry=g({},Ws,{key:function(t){if(t.key){var i=ty[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ny[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sy=kn(ry),oy=g({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=kn(oy),ly=g({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),uy=kn(ly),cy=g({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fy=kn(cy),hy=g({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=kn(hy),py=g({},nr,{newState:0,oldState:0}),my=kn(py),gy=[9,13,27,32],Dc=Wi&&"CompositionEvent"in window,js=null;Wi&&"documentMode"in document&&(js=document.documentMode);var vy=Wi&&"TextEvent"in window&&!js,Ip=Wi&&(!Dc||js&&8<js&&11>=js),Fp=" ",Bp=!1;function zp(t,i){switch(t){case"keyup":return gy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function _y(t,i){switch(t){case"compositionend":return Hp(i);case"keypress":return i.which!==32?null:(Bp=!0,Fp);case"textInput":return t=i.data,t===Fp&&Bp?null:t;default:return null}}function xy(t,i){if(Hr)return t==="compositionend"||!Dc&&zp(t,i)?(t=Up(),dl=Tc=Sa=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ip&&i.locale!=="ko"?null:i.data;default:return null}}var yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!yy[t.type]:i==="textarea"}function Vp(t,i,s,o){Br?zr?zr.push(o):zr=[o]:Br=o,i=iu(i,"onChange"),0<i.length&&(s=new gl("onChange","change",null,s,o),t.push({event:s,listeners:i}))}var Ys=null,Zs=null;function Sy(t){Mv(t,0)}function _l(t){var i=tr(t);if(Dn(i))return t}function kp(t,i){if(t==="change")return i}var Xp=!1;if(Wi){var Uc;if(Wi){var Nc="oninput"in document;if(!Nc){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Nc=typeof Wp.oninput=="function"}Uc=Nc}else Uc=!1;Xp=Uc&&(!document.documentMode||9<document.documentMode)}function qp(){Ys&&(Ys.detachEvent("onpropertychange",jp),Zs=Ys=null)}function jp(t){if(t.propertyName==="value"&&_l(Zs)){var i=[];Vp(i,Zs,t,Mc(t)),Dp(Sy,i)}}function My(t,i,s){t==="focusin"?(qp(),Ys=i,Zs=s,Ys.attachEvent("onpropertychange",jp)):t==="focusout"&&qp()}function Ey(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _l(Zs)}function by(t,i){if(t==="click")return _l(i)}function Ty(t,i){if(t==="input"||t==="change")return _l(i)}function Ay(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:Ay;function Ks(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var c=s[o];if(!kt.call(i,c)||!Qn(t[c],i[c]))return!1}return!0}function Yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zp(t,i){var s=Yp(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=i&&o>=i)return{node:s,offset:i-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Yp(s)}}function Kp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Kp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Qp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=xi(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=xi(t.document)}return i}function Lc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var Ry=Wi&&"documentMode"in document&&11>=document.documentMode,Gr=null,Oc=null,Qs=null,Pc=!1;function Jp(t,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Pc||Gr==null||Gr!==xi(o)||(o=Gr,"selectionStart"in o&&Lc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Qs&&Ks(Qs,o)||(Qs=o,o=iu(Oc,"onSelect"),0<o.length&&(i=new gl("onSelect","select",null,i,s),t.push({event:i,listeners:o}),i.target=Gr)))}function ir(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Vr={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},Ic={},$p={};Wi&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function ar(t){if(Ic[t])return Ic[t];if(!Vr[t])return t;var i=Vr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in $p)return Ic[t]=i[s];return t}var em=ar("animationend"),tm=ar("animationiteration"),nm=ar("animationstart"),wy=ar("transitionrun"),Cy=ar("transitionstart"),Dy=ar("transitioncancel"),im=ar("transitionend"),am=new Map,Fc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fc.push("scrollEnd");function yi(t,i){am.set(t,i),w(i,[t])}var rm=new WeakMap;function oi(t,i){if(typeof t=="object"&&t!==null){var s=rm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Nt(i)},rm.set(t,i),i)}return{value:t,source:i,stack:Nt(i)}}var li=[],kr=0,Bc=0;function xl(){for(var t=kr,i=Bc=kr=0;i<t;){var s=li[i];li[i++]=null;var o=li[i];li[i++]=null;var c=li[i];li[i++]=null;var d=li[i];if(li[i++]=null,o!==null&&c!==null){var M=o.pending;M===null?c.next=c:(c.next=M.next,M.next=c),o.pending=c}d!==0&&sm(s,c,d)}}function yl(t,i,s,o){li[kr++]=t,li[kr++]=i,li[kr++]=s,li[kr++]=o,Bc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function zc(t,i,s,o){return yl(t,i,s,o),Sl(t)}function Xr(t,i){return yl(t,null,null,i),Sl(t)}function sm(t,i,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var c=!1,d=t.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(c=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,c&&i!==null&&(c=31-Be(s),t=d.hiddenUpdates,o=t[c],o===null?t[c]=[i]:o.push(i),i.lane=s|536870912),d):null}function Sl(t){if(50<Eo)throw Eo=0,qf=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Wr={};function Uy(t,i,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,i,s,o){return new Uy(t,i,s,o)}function Hc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,i){var s=t.alternate;return s===null?(s=Jn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function om(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Ml(t,i,s,o,c,d){var M=0;if(o=t,typeof t=="function")Hc(t)&&(M=1);else if(typeof t=="string")M=LS(t,s,Ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Jn(31,s,i,c),t.elementType=C,t.lanes=d,t;case E:return rr(s.children,c,d,i);case b:M=8,c|=24;break;case y:return t=Jn(12,s,i,c|2),t.elementType=y,t.lanes=d,t;case P:return t=Jn(13,s,i,c),t.elementType=P,t.lanes=d,t;case H:return t=Jn(19,s,i,c),t.elementType=H,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case L:M=10;break e;case N:M=9;break e;case U:M=11;break e;case z:M=14;break e;case q:M=16,o=null;break e}M=29,s=Error(r(130,t===null?"null":typeof t,"")),o=null}return i=Jn(M,s,i,c),i.elementType=t,i.type=o,i.lanes=d,i}function rr(t,i,s,o){return t=Jn(7,t,o,i),t.lanes=s,t}function Gc(t,i,s){return t=Jn(6,t,null,i),t.lanes=s,t}function Vc(t,i,s){return i=Jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var qr=[],jr=0,El=null,bl=0,ui=[],ci=0,sr=null,ji=1,Yi="";function or(t,i){qr[jr++]=bl,qr[jr++]=El,El=t,bl=i}function lm(t,i,s){ui[ci++]=ji,ui[ci++]=Yi,ui[ci++]=sr,sr=t;var o=ji;t=Yi;var c=32-Be(o)-1;o&=~(1<<c),s+=1;var d=32-Be(i)+c;if(30<d){var M=c-c%5;d=(o&(1<<M)-1).toString(32),o>>=M,c-=M,ji=1<<32-Be(i)+c|s<<c|o,Yi=d+t}else ji=1<<d|s<<c|o,Yi=t}function kc(t){t.return!==null&&(or(t,1),lm(t,1,0))}function Xc(t){for(;t===El;)El=qr[--jr],qr[jr]=null,bl=qr[--jr],qr[jr]=null;for(;t===sr;)sr=ui[--ci],ui[ci]=null,Yi=ui[--ci],ui[ci]=null,ji=ui[--ci],ui[ci]=null}var Bn=null,en=null,Rt=!1,lr=null,Ui=!1,Wc=Error(r(519));function ur(t){var i=Error(r(418,""));throw eo(oi(i,t)),Wc}function um(t){var i=t.stateNode,s=t.type,o=t.memoizedProps;switch(i[mn]=t,i[Jt]=o,s){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(s=0;s<To.length;s++)xt(To[s],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":xt("invalid",i),Fn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),vt(i);break;case"select":xt("invalid",i);break;case"textarea":xt("invalid",i),Fr(i,o.value,o.defaultValue,o.children),vt(i)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||Av(i.textContent,s)?(o.popover!=null&&(xt("beforetoggle",i),xt("toggle",i)),o.onScroll!=null&&xt("scroll",i),o.onScrollEnd!=null&&xt("scrollend",i),o.onClick!=null&&(i.onclick=au),i=!0):i=!1,i||ur(t)}function cm(t){for(Bn=t.return;Bn;)switch(Bn.tag){case 5:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Bn=Bn.return}}function Js(t){if(t!==Bn)return!1;if(!Rt)return cm(t),Rt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||lh(t.type,t.memoizedProps)),s=!s),s&&en&&ur(t),cm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){en=Mi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}en=null}}else i===27?(i=en,Fa(t.type)?(t=hh,hh=null,en=t):en=i):en=Bn?Mi(t.stateNode.nextSibling):null;return!0}function $s(){en=Bn=null,Rt=!1}function fm(){var t=lr;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),lr=null),t}function eo(t){lr===null?lr=[t]:lr.push(t)}var qc=G(null),cr=null,Zi=null;function Ma(t,i,s){le(qc,i._currentValue),i._currentValue=s}function Ki(t){t._currentValue=qc.current,se(qc)}function jc(t,i,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===s)break;t=t.return}}function Yc(t,i,s,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var d=c.dependencies;if(d!==null){var M=c.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=c;for(var F=0;F<i.length;F++)if(R.context===i[F]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),jc(d.return,s,t),o||(M=null);break e}d=R.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(r(341));M.lanes|=s,d=M.alternate,d!==null&&(d.lanes|=s),jc(M,s,t),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===t){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function to(t,i,s,o){t=null;for(var c=i,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var R=c.type;Qn(c.pendingProps.value,M.value)||(t!==null?t.push(R):t=[R])}}else if(c===me.current){if(M=c.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Uo):t=[Uo])}c=c.return}t!==null&&Yc(i,t,s,o),i.flags|=262144}function Tl(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function fr(t){cr=t,Zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return hm(cr,t)}function Al(t,i){return cr===null&&fr(t),hm(t,i)}function hm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Zi===null){if(t===null)throw Error(r(308));Zi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Zi=Zi.next=i;return s}var Ny=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},Ly=a.unstable_scheduleCallback,Oy=a.unstable_NormalPriority,gn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zc(){return{controller:new Ny,data:new Map,refCount:0}}function no(t){t.refCount--,t.refCount===0&&Ly(Oy,function(){t.controller.abort()})}var io=null,Kc=0,Yr=0,Zr=null;function Py(t,i){if(io===null){var s=io=[];Kc=0,Yr=$f(),Zr={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Kc++,i.then(dm,dm),i}function dm(){if(--Kc===0&&io!==null){Zr!==null&&(Zr.status="fulfilled");var t=io;io=null,Yr=0,Zr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Iy(t,i){var s=[],o={status:"pending",value:null,reason:null,then:function(c){s.push(c)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var c=0;c<s.length;c++)(0,s[c])(i)},function(c){for(o.status="rejected",o.reason=c,c=0;c<s.length;c++)(0,s[c])(void 0)}),o}var pm=I.S;I.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Py(t,i),pm!==null&&pm(t,i)};var hr=G(null);function Qc(){var t=hr.current;return t!==null?t:Vt.pooledCache}function Rl(t,i){i===null?le(hr,hr.current):le(hr,i.pool)}function mm(){var t=Qc();return t===null?null:{parent:gn._currentValue,pool:t}}var ao=Error(r(460)),gm=Error(r(474)),wl=Error(r(542)),Jc={then:function(){}};function vm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cl(){}function _m(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Cl,Cl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ym(t),t;default:if(typeof i.status=="string")i.then(Cl,Cl);else{if(t=Vt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=o}},function(o){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ym(t),t}throw ro=i,ao}}var ro=null;function xm(){if(ro===null)throw Error(r(459));var t=ro;return ro=null,t}function ym(t){if(t===ao||t===wl)throw Error(r(483))}var Ea=!1;function $c(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ef(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ta(t,i,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ct&2)!==0){var c=o.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),o.pending=i,i=Sl(t),sm(t,null,s),i}return yl(t,o,i,s),Sl(t)}function so(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,ke(t,s)}}function tf(t,i){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var c=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?c=d=M:d=d.next=M,s=s.next}while(s!==null);d===null?c=d=i:d=d.next=i}else c=d=i;s={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var nf=!1;function oo(){if(nf){var t=Zr;if(t!==null)throw t}}function lo(t,i,s,o){nf=!1;var c=t.updateQueue;Ea=!1;var d=c.firstBaseUpdate,M=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var F=R,ee=F.next;F.next=null,M===null?d=ee:M.next=ee,M=F;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,R=ge.lastBaseUpdate,R!==M&&(R===null?ge.firstBaseUpdate=ee:R.next=ee,ge.lastBaseUpdate=F))}if(d!==null){var Se=c.baseState;M=0,ge=ee=F=null,R=d;do{var ie=R.lane&-536870913,ae=ie!==R.lane;if(ae?(Mt&ie)===ie:(o&ie)===ie){ie!==0&&ie===Yr&&(nf=!0),ge!==null&&(ge=ge.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var rt=t,tt=R;ie=i;var Pt=s;switch(tt.tag){case 1:if(rt=tt.payload,typeof rt=="function"){Se=rt.call(Pt,Se,ie);break e}Se=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=tt.payload,ie=typeof rt=="function"?rt.call(Pt,Se,ie):rt,ie==null)break e;Se=g({},Se,ie);break e;case 2:Ea=!0}}ie=R.callback,ie!==null&&(t.flags|=64,ae&&(t.flags|=8192),ae=c.callbacks,ae===null?c.callbacks=[ie]:ae.push(ie))}else ae={lane:ie,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ge===null?(ee=ge=ae,F=Se):ge=ge.next=ae,M|=ie;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ae=R,R=ae.next,ae.next=null,c.lastBaseUpdate=ae,c.shared.pending=null}}while(!0);ge===null&&(F=Se),c.baseState=F,c.firstBaseUpdate=ee,c.lastBaseUpdate=ge,d===null&&(c.shared.lanes=0),La|=M,t.lanes=M,t.memoizedState=Se}}function Sm(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Mm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Sm(s[t],i)}var Kr=G(null),Dl=G(0);function Em(t,i){t=ia,le(Dl,t),le(Kr,i),ia=t|i.baseLanes}function af(){le(Dl,ia),le(Kr,Kr.current)}function rf(){ia=Dl.current,se(Kr),se(Dl)}var Aa=0,mt=null,Lt=null,cn=null,Ul=!1,Qr=!1,dr=!1,Nl=0,uo=0,Jr=null,Fy=0;function an(){throw Error(r(321))}function sf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Qn(t[s],i[s]))return!1;return!0}function of(t,i,s,o,c,d){return Aa=d,mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=t===null||t.memoizedState===null?sg:og,dr=!1,d=s(o,c),dr=!1,Qr&&(d=Tm(i,s,o,c)),bm(t),d}function bm(t){I.H=Bl;var i=Lt!==null&&Lt.next!==null;if(Aa=0,cn=Lt=mt=null,Ul=!1,uo=0,Jr=null,i)throw Error(r(300));t===null||Sn||(t=t.dependencies,t!==null&&Tl(t)&&(Sn=!0))}function Tm(t,i,s,o){mt=t;var c=0;do{if(Qr&&(Jr=null),uo=0,Qr=!1,25<=c)throw Error(r(301));if(c+=1,cn=Lt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=Xy,d=i(s,o)}while(Qr);return d}function By(){var t=I.H,i=t.useState()[0];return i=typeof i.then=="function"?co(i):i,t=t.useState()[0],(Lt!==null?Lt.memoizedState:null)!==t&&(mt.flags|=1024),i}function lf(){var t=Nl!==0;return Nl=0,t}function uf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function cf(t){if(Ul){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Ul=!1}Aa=0,cn=Lt=mt=null,Qr=!1,uo=Nl=0,Jr=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?mt.memoizedState=cn=t:cn=cn.next=t,cn}function fn(){if(Lt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var i=cn===null?mt.memoizedState:cn.next;if(i!==null)cn=i,Lt=t;else{if(t===null)throw mt.alternate===null?Error(r(467)):Error(r(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},cn===null?mt.memoizedState=cn=t:cn=cn.next=t}return cn}function ff(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(t){var i=uo;return uo+=1,Jr===null&&(Jr=[]),t=_m(Jr,t,i),i=mt,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?sg:og),t}function Ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return co(t);if(t.$$typeof===L)return Nn(t)}throw Error(r(438,String(t)))}function hf(t){var i=null,s=mt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=ff(),mt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),o=0;o<t;o++)s[o]=D;return i.index++,s}function Qi(t,i){return typeof i=="function"?i(t):i}function Ol(t){var i=fn();return df(i,Lt,t)}function df(t,i,s){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=s;var c=t.baseQueue,d=o.pending;if(d!==null){if(c!==null){var M=c.next;c.next=d.next,d.next=M}i.baseQueue=c=d,o.pending=null}if(d=t.baseState,c===null)t.memoizedState=d;else{i=c.next;var R=M=null,F=null,ee=i,ge=!1;do{var Se=ee.lane&-536870913;if(Se!==ee.lane?(Mt&Se)===Se:(Aa&Se)===Se){var ie=ee.revertLane;if(ie===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),Se===Yr&&(ge=!0);else if((Aa&ie)===ie){ee=ee.next,ie===Yr&&(ge=!0);continue}else Se={lane:0,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},F===null?(R=F=Se,M=d):F=F.next=Se,mt.lanes|=ie,La|=ie;Se=ee.action,dr&&s(d,Se),d=ee.hasEagerState?ee.eagerState:s(d,Se)}else ie={lane:Se,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},F===null?(R=F=ie,M=d):F=F.next=ie,mt.lanes|=Se,La|=Se;ee=ee.next}while(ee!==null&&ee!==i);if(F===null?M=d:F.next=R,!Qn(d,t.memoizedState)&&(Sn=!0,ge&&(s=Zr,s!==null)))throw s;t.memoizedState=d,t.baseState=M,t.baseQueue=F,o.lastRenderedState=d}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function pf(t){var i=fn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var o=s.dispatch,c=s.pending,d=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do d=t(d,M.action),M=M.next;while(M!==c);Qn(d,i.memoizedState)||(Sn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,o]}function Am(t,i,s){var o=mt,c=fn(),d=Rt;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var M=!Qn((Lt||c).memoizedState,s);M&&(c.memoizedState=s,Sn=!0),c=c.queue;var R=Cm.bind(null,o,c,t);if(fo(2048,8,R,[t]),c.getSnapshot!==i||M||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,$r(9,Pl(),wm.bind(null,o,c,s,i),null),Vt===null)throw Error(r(349));d||(Aa&124)!==0||Rm(o,i,s)}return s}function Rm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=mt.updateQueue,i===null?(i=ff(),mt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function wm(t,i,s,o){i.value=s,i.getSnapshot=o,Dm(i)&&Um(t)}function Cm(t,i,s){return s(function(){Dm(i)&&Um(t)})}function Dm(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Qn(t,s)}catch{return!0}}function Um(t){var i=Xr(t,2);i!==null&&ii(i,t,2)}function mf(t){var i=Xn();if(typeof t=="function"){var s=t;if(t=s(),dr){he(!0);try{s()}finally{he(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:t},i}function Nm(t,i,s,o){return t.baseState=s,df(t,Lt,typeof o=="function"?o:Qi)}function zy(t,i,s,o,c){if(Fl(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};I.T!==null?s(!0):d.isTransition=!1,o(d),s=i.pending,s===null?(d.next=i.pending=d,Lm(i,d)):(d.next=s.next,i.pending=s.next=d)}}function Lm(t,i){var s=i.action,o=i.payload,c=t.state;if(i.isTransition){var d=I.T,M={};I.T=M;try{var R=s(c,o),F=I.S;F!==null&&F(M,R),Om(t,i,R)}catch(ee){gf(t,i,ee)}finally{I.T=d}}else try{d=s(c,o),Om(t,i,d)}catch(ee){gf(t,i,ee)}}function Om(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Pm(t,i,o)},function(o){return gf(t,i,o)}):Pm(t,i,s)}function Pm(t,i,s){i.status="fulfilled",i.value=s,Im(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Lm(t,s)))}function gf(t,i,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,Im(i),i=i.next;while(i!==o)}t.action=null}function Im(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Fm(t,i){return i}function Bm(t,i){if(Rt){var s=Vt.formState;if(s!==null){e:{var o=mt;if(Rt){if(en){t:{for(var c=en,d=Ui;c.nodeType!==8;){if(!d){c=null;break t}if(c=Mi(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){en=Mi(c.nextSibling),o=c.data==="F!";break e}}ur(o)}o=!1}o&&(i=s[0])}}return s=Xn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fm,lastRenderedState:i},s.queue=o,s=ig.bind(null,mt,o),o.dispatch=s,o=mf(!1),d=Sf.bind(null,mt,!1,o.queue),o=Xn(),c={state:i,dispatch:null,action:t,pending:null},o.queue=c,s=zy.bind(null,mt,c,d,s),c.dispatch=s,o.memoizedState=t,[i,s,!1]}function zm(t){var i=fn();return Hm(i,Lt,t)}function Hm(t,i,s){if(i=df(t,i,Fm)[0],t=Ol(Qi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=co(i)}catch(M){throw M===ao?wl:M}else o=i;i=fn();var c=i.queue,d=c.dispatch;return s!==i.memoizedState&&(mt.flags|=2048,$r(9,Pl(),Hy.bind(null,c,s),null)),[o,d,t]}function Hy(t,i){t.action=i}function Gm(t){var i=fn(),s=Lt;if(s!==null)return Hm(i,s,t);fn(),i=i.memoizedState,s=fn();var o=s.queue.dispatch;return s.memoizedState=t,[i,o,!1]}function $r(t,i,s,o){return t={tag:t,create:s,deps:o,inst:i,next:null},i=mt.updateQueue,i===null&&(i=ff(),mt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,i.lastEffect=t),t}function Pl(){return{destroy:void 0,resource:void 0}}function Vm(){return fn().memoizedState}function Il(t,i,s,o){var c=Xn();o=o===void 0?null:o,mt.flags|=t,c.memoizedState=$r(1|i,Pl(),s,o)}function fo(t,i,s,o){var c=fn();o=o===void 0?null:o;var d=c.memoizedState.inst;Lt!==null&&o!==null&&sf(o,Lt.memoizedState.deps)?c.memoizedState=$r(i,d,s,o):(mt.flags|=t,c.memoizedState=$r(1|i,d,s,o))}function km(t,i){Il(8390656,8,t,i)}function Xm(t,i){fo(2048,8,t,i)}function Wm(t,i){return fo(4,2,t,i)}function qm(t,i){return fo(4,4,t,i)}function jm(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ym(t,i,s){s=s!=null?s.concat([t]):null,fo(4,4,jm.bind(null,i,t),s)}function vf(){}function Zm(t,i){var s=fn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&sf(i,o[1])?o[0]:(s.memoizedState=[t,i],t)}function Km(t,i){var s=fn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&sf(i,o[1]))return o[0];if(o=t(),dr){he(!0);try{t()}finally{he(!1)}}return s.memoizedState=[o,i],o}function _f(t,i,s){return s===void 0||(Aa&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=$g(),mt.lanes|=t,La|=t,s)}function Qm(t,i,s,o){return Qn(s,i)?s:Kr.current!==null?(t=_f(t,s,o),Qn(t,i)||(Sn=!0),t):(Aa&42)===0?(Sn=!0,t.memoizedState=s):(t=$g(),mt.lanes|=t,La|=t,i)}function Jm(t,i,s,o,c){var d=W.p;W.p=d!==0&&8>d?d:8;var M=I.T,R={};I.T=R,Sf(t,!1,i,s);try{var F=c(),ee=I.S;if(ee!==null&&ee(R,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ge=Iy(F,o);ho(t,i,ge,ni(t))}else ho(t,i,o,ni(t))}catch(Se){ho(t,i,{then:function(){},status:"rejected",reason:Se},ni())}finally{W.p=d,I.T=M}}function Gy(){}function xf(t,i,s,o){if(t.tag!==5)throw Error(r(476));var c=$m(t).queue;Jm(t,c,i,j,s===null?Gy:function(){return eg(t),s(o)})}function $m(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:j},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function eg(t){var i=$m(t).next.queue;ho(t,i,{},ni())}function yf(){return Nn(Uo)}function tg(){return fn().memoizedState}function ng(){return fn().memoizedState}function Vy(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ni();t=ba(s);var o=Ta(i,t,s);o!==null&&(ii(o,i,s),so(o,i,s)),i={cache:Zc()},t.payload=i;return}i=i.return}}function ky(t,i,s){var o=ni();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Fl(t)?ag(i,s):(s=zc(t,i,s,o),s!==null&&(ii(s,t,o),rg(s,i,o)))}function ig(t,i,s){var o=ni();ho(t,i,s,o)}function ho(t,i,s,o){var c={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Fl(t))ag(i,c);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var M=i.lastRenderedState,R=d(M,s);if(c.hasEagerState=!0,c.eagerState=R,Qn(R,M))return yl(t,i,c,0),Vt===null&&xl(),!1}catch{}finally{}if(s=zc(t,i,c,o),s!==null)return ii(s,t,o),rg(s,i,o),!0}return!1}function Sf(t,i,s,o){if(o={lane:2,revertLane:$f(),action:o,hasEagerState:!1,eagerState:null,next:null},Fl(t)){if(i)throw Error(r(479))}else i=zc(t,s,o,2),i!==null&&ii(i,t,2)}function Fl(t){var i=t.alternate;return t===mt||i!==null&&i===mt}function ag(t,i){Qr=Ul=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function rg(t,i,s){if((s&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,ke(t,s)}}var Bl={readContext:Nn,use:Ll,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},sg={readContext:Nn,use:Ll,useCallback:function(t,i){return Xn().memoizedState=[t,i===void 0?null:i],t},useContext:Nn,useEffect:km,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Il(4194308,4,jm.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Il(4194308,4,t,i)},useInsertionEffect:function(t,i){Il(4,2,t,i)},useMemo:function(t,i){var s=Xn();i=i===void 0?null:i;var o=t();if(dr){he(!0);try{t()}finally{he(!1)}}return s.memoizedState=[o,i],o},useReducer:function(t,i,s){var o=Xn();if(s!==void 0){var c=s(i);if(dr){he(!0);try{s(i)}finally{he(!1)}}}else c=i;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=ky.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var i=Xn();return t={current:t},i.memoizedState=t},useState:function(t){t=mf(t);var i=t.queue,s=ig.bind(null,mt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:vf,useDeferredValue:function(t,i){var s=Xn();return _f(s,t,i)},useTransition:function(){var t=mf(!1);return t=Jm.bind(null,mt,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var o=mt,c=Xn();if(Rt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Vt===null)throw Error(r(349));(Mt&124)!==0||Rm(o,i,s)}c.memoizedState=s;var d={value:s,getSnapshot:i};return c.queue=d,km(Cm.bind(null,o,d,t),[t]),o.flags|=2048,$r(9,Pl(),wm.bind(null,o,d,s,i),null),s},useId:function(){var t=Xn(),i=Vt.identifierPrefix;if(Rt){var s=Yi,o=ji;s=(o&~(1<<32-Be(o)-1)).toString(32)+s,i="«"+i+"R"+s,s=Nl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=Fy++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:yf,useFormState:Bm,useActionState:Bm,useOptimistic:function(t){var i=Xn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Sf.bind(null,mt,!0,s),s.dispatch=i,[t,i]},useMemoCache:hf,useCacheRefresh:function(){return Xn().memoizedState=Vy.bind(null,mt)}},og={readContext:Nn,use:Ll,useCallback:Zm,useContext:Nn,useEffect:Xm,useImperativeHandle:Ym,useInsertionEffect:Wm,useLayoutEffect:qm,useMemo:Km,useReducer:Ol,useRef:Vm,useState:function(){return Ol(Qi)},useDebugValue:vf,useDeferredValue:function(t,i){var s=fn();return Qm(s,Lt.memoizedState,t,i)},useTransition:function(){var t=Ol(Qi)[0],i=fn().memoizedState;return[typeof t=="boolean"?t:co(t),i]},useSyncExternalStore:Am,useId:tg,useHostTransitionStatus:yf,useFormState:zm,useActionState:zm,useOptimistic:function(t,i){var s=fn();return Nm(s,Lt,t,i)},useMemoCache:hf,useCacheRefresh:ng},Xy={readContext:Nn,use:Ll,useCallback:Zm,useContext:Nn,useEffect:Xm,useImperativeHandle:Ym,useInsertionEffect:Wm,useLayoutEffect:qm,useMemo:Km,useReducer:pf,useRef:Vm,useState:function(){return pf(Qi)},useDebugValue:vf,useDeferredValue:function(t,i){var s=fn();return Lt===null?_f(s,t,i):Qm(s,Lt.memoizedState,t,i)},useTransition:function(){var t=pf(Qi)[0],i=fn().memoizedState;return[typeof t=="boolean"?t:co(t),i]},useSyncExternalStore:Am,useId:tg,useHostTransitionStatus:yf,useFormState:Gm,useActionState:Gm,useOptimistic:function(t,i){var s=fn();return Lt!==null?Nm(s,Lt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:hf,useCacheRefresh:ng},es=null,po=0;function zl(t){var i=po;return po+=1,es===null&&(es=[]),_m(es,t,i)}function mo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Hl(t,i){throw i.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function lg(t){var i=t._init;return i(t._payload)}function ug(t){function i(K,k){if(t){var $=K.deletions;$===null?(K.deletions=[k],K.flags|=16):$.push(k)}}function s(K,k){if(!t)return null;for(;k!==null;)i(K,k),k=k.sibling;return null}function o(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function c(K,k){return K=qi(K,k),K.index=0,K.sibling=null,K}function d(K,k,$){return K.index=$,t?($=K.alternate,$!==null?($=$.index,$<k?(K.flags|=67108866,k):$):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function M(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,k,$,_e){return k===null||k.tag!==6?(k=Gc($,K.mode,_e),k.return=K,k):(k=c(k,$),k.return=K,k)}function F(K,k,$,_e){var Ve=$.type;return Ve===E?ge(K,k,$.props.children,_e,$.key):k!==null&&(k.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===q&&lg(Ve)===k.type)?(k=c(k,$.props),mo(k,$),k.return=K,k):(k=Ml($.type,$.key,$.props,null,K.mode,_e),mo(k,$),k.return=K,k)}function ee(K,k,$,_e){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Vc($,K.mode,_e),k.return=K,k):(k=c(k,$.children||[]),k.return=K,k)}function ge(K,k,$,_e,Ve){return k===null||k.tag!==7?(k=rr($,K.mode,_e,Ve),k.return=K,k):(k=c(k,$),k.return=K,k)}function Se(K,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Gc(""+k,K.mode,$),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return $=Ml(k.type,k.key,k.props,null,K.mode,$),mo($,k),$.return=K,$;case S:return k=Vc(k,K.mode,$),k.return=K,k;case q:var _e=k._init;return k=_e(k._payload),Se(K,k,$)}if(fe(k)||te(k))return k=rr(k,K.mode,$,null),k.return=K,k;if(typeof k.then=="function")return Se(K,zl(k),$);if(k.$$typeof===L)return Se(K,Al(K,k),$);Hl(K,k)}return null}function ie(K,k,$,_e){var Ve=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ve!==null?null:R(K,k,""+$,_e);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Ve?F(K,k,$,_e):null;case S:return $.key===Ve?ee(K,k,$,_e):null;case q:return Ve=$._init,$=Ve($._payload),ie(K,k,$,_e)}if(fe($)||te($))return Ve!==null?null:ge(K,k,$,_e,null);if(typeof $.then=="function")return ie(K,k,zl($),_e);if($.$$typeof===L)return ie(K,k,Al(K,$),_e);Hl(K,$)}return null}function ae(K,k,$,_e,Ve){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return K=K.get($)||null,R(k,K,""+_e,Ve);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case x:return K=K.get(_e.key===null?$:_e.key)||null,F(k,K,_e,Ve);case S:return K=K.get(_e.key===null?$:_e.key)||null,ee(k,K,_e,Ve);case q:var gt=_e._init;return _e=gt(_e._payload),ae(K,k,$,_e,Ve)}if(fe(_e)||te(_e))return K=K.get($)||null,ge(k,K,_e,Ve,null);if(typeof _e.then=="function")return ae(K,k,$,zl(_e),Ve);if(_e.$$typeof===L)return ae(K,k,$,Al(k,_e),Ve);Hl(k,_e)}return null}function rt(K,k,$,_e){for(var Ve=null,gt=null,Qe=k,it=k=0,En=null;Qe!==null&&it<$.length;it++){Qe.index>it?(En=Qe,Qe=null):En=Qe.sibling;var Tt=ie(K,Qe,$[it],_e);if(Tt===null){Qe===null&&(Qe=En);break}t&&Qe&&Tt.alternate===null&&i(K,Qe),k=d(Tt,k,it),gt===null?Ve=Tt:gt.sibling=Tt,gt=Tt,Qe=En}if(it===$.length)return s(K,Qe),Rt&&or(K,it),Ve;if(Qe===null){for(;it<$.length;it++)Qe=Se(K,$[it],_e),Qe!==null&&(k=d(Qe,k,it),gt===null?Ve=Qe:gt.sibling=Qe,gt=Qe);return Rt&&or(K,it),Ve}for(Qe=o(Qe);it<$.length;it++)En=ae(Qe,K,it,$[it],_e),En!==null&&(t&&En.alternate!==null&&Qe.delete(En.key===null?it:En.key),k=d(En,k,it),gt===null?Ve=En:gt.sibling=En,gt=En);return t&&Qe.forEach(function(Va){return i(K,Va)}),Rt&&or(K,it),Ve}function tt(K,k,$,_e){if($==null)throw Error(r(151));for(var Ve=null,gt=null,Qe=k,it=k=0,En=null,Tt=$.next();Qe!==null&&!Tt.done;it++,Tt=$.next()){Qe.index>it?(En=Qe,Qe=null):En=Qe.sibling;var Va=ie(K,Qe,Tt.value,_e);if(Va===null){Qe===null&&(Qe=En);break}t&&Qe&&Va.alternate===null&&i(K,Qe),k=d(Va,k,it),gt===null?Ve=Va:gt.sibling=Va,gt=Va,Qe=En}if(Tt.done)return s(K,Qe),Rt&&or(K,it),Ve;if(Qe===null){for(;!Tt.done;it++,Tt=$.next())Tt=Se(K,Tt.value,_e),Tt!==null&&(k=d(Tt,k,it),gt===null?Ve=Tt:gt.sibling=Tt,gt=Tt);return Rt&&or(K,it),Ve}for(Qe=o(Qe);!Tt.done;it++,Tt=$.next())Tt=ae(Qe,K,it,Tt.value,_e),Tt!==null&&(t&&Tt.alternate!==null&&Qe.delete(Tt.key===null?it:Tt.key),k=d(Tt,k,it),gt===null?Ve=Tt:gt.sibling=Tt,gt=Tt);return t&&Qe.forEach(function(WS){return i(K,WS)}),Rt&&or(K,it),Ve}function Pt(K,k,$,_e){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:e:{for(var Ve=$.key;k!==null;){if(k.key===Ve){if(Ve=$.type,Ve===E){if(k.tag===7){s(K,k.sibling),_e=c(k,$.props.children),_e.return=K,K=_e;break e}}else if(k.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===q&&lg(Ve)===k.type){s(K,k.sibling),_e=c(k,$.props),mo(_e,$),_e.return=K,K=_e;break e}s(K,k);break}else i(K,k);k=k.sibling}$.type===E?(_e=rr($.props.children,K.mode,_e,$.key),_e.return=K,K=_e):(_e=Ml($.type,$.key,$.props,null,K.mode,_e),mo(_e,$),_e.return=K,K=_e)}return M(K);case S:e:{for(Ve=$.key;k!==null;){if(k.key===Ve)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){s(K,k.sibling),_e=c(k,$.children||[]),_e.return=K,K=_e;break e}else{s(K,k);break}else i(K,k);k=k.sibling}_e=Vc($,K.mode,_e),_e.return=K,K=_e}return M(K);case q:return Ve=$._init,$=Ve($._payload),Pt(K,k,$,_e)}if(fe($))return rt(K,k,$,_e);if(te($)){if(Ve=te($),typeof Ve!="function")throw Error(r(150));return $=Ve.call($),tt(K,k,$,_e)}if(typeof $.then=="function")return Pt(K,k,zl($),_e);if($.$$typeof===L)return Pt(K,k,Al(K,$),_e);Hl(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(s(K,k.sibling),_e=c(k,$),_e.return=K,K=_e):(s(K,k),_e=Gc($,K.mode,_e),_e.return=K,K=_e),M(K)):s(K,k)}return function(K,k,$,_e){try{po=0;var Ve=Pt(K,k,$,_e);return es=null,Ve}catch(Qe){if(Qe===ao||Qe===wl)throw Qe;var gt=Jn(29,Qe,null,K.mode);return gt.lanes=_e,gt.return=K,gt}finally{}}}var ts=ug(!0),cg=ug(!1),fi=G(null),Ni=null;function Ra(t){var i=t.alternate;le(vn,vn.current&1),le(fi,t),Ni===null&&(i===null||Kr.current!==null||i.memoizedState!==null)&&(Ni=t)}function fg(t){if(t.tag===22){if(le(vn,vn.current),le(fi,t),Ni===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Ni=t)}}else wa()}function wa(){le(vn,vn.current),le(fi,fi.current)}function Ji(t){se(fi),Ni===t&&(Ni=null),se(vn)}var vn=G(0);function Gl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||fh(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Mf(t,i,s,o){i=t.memoizedState,s=s(o,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ef={enqueueSetState:function(t,i,s){t=t._reactInternals;var o=ni(),c=ba(o);c.payload=i,s!=null&&(c.callback=s),i=Ta(t,c,o),i!==null&&(ii(i,t,o),so(i,t,o))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var o=ni(),c=ba(o);c.tag=1,c.payload=i,s!=null&&(c.callback=s),i=Ta(t,c,o),i!==null&&(ii(i,t,o),so(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ni(),o=ba(s);o.tag=2,i!=null&&(o.callback=i),i=Ta(t,o,s),i!==null&&(ii(i,t,s),so(i,t,s))}};function hg(t,i,s,o,c,d,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,M):i.prototype&&i.prototype.isPureReactComponent?!Ks(s,o)||!Ks(c,d):!0}function dg(t,i,s,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==t&&Ef.enqueueReplaceState(i,i.state,null)}function pr(t,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var c in t)s[c]===void 0&&(s[c]=t[c])}return s}var Vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function pg(t){Vl(t)}function mg(t){console.error(t)}function gg(t){Vl(t)}function kl(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function vg(t,i,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function bf(t,i,s){return s=ba(s),s.tag=3,s.payload={element:null},s.callback=function(){kl(t,i)},s}function _g(t){return t=ba(t),t.tag=3,t}function xg(t,i,s,o){var c=s.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;t.payload=function(){return c(d)},t.callback=function(){vg(i,s,o)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){vg(i,s,o),typeof c!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Wy(t,i,s,o,c){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&to(i,s,c,!0),s=fi.current,s!==null){switch(s.tag){case 13:return Ni===null?Yf():s.alternate===null&&tn===0&&(tn=3),s.flags&=-257,s.flags|=65536,s.lanes=c,o===Jc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Kf(t,o,c)),!1;case 22:return s.flags|=65536,o===Jc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Kf(t,o,c)),!1}throw Error(r(435,s.tag))}return Kf(t,o,c),Yf(),!1}if(Rt)return i=fi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=c,o!==Wc&&(t=Error(r(422),{cause:o}),eo(oi(t,s)))):(o!==Wc&&(i=Error(r(423),{cause:o}),eo(oi(i,s))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=oi(o,s),c=bf(t.stateNode,o,c),tf(t,c),tn!==4&&(tn=2)),!1;var d=Error(r(520),{cause:o});if(d=oi(d,s),Mo===null?Mo=[d]:Mo.push(d),tn!==4&&(tn=2),i===null)return!0;o=oi(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=c&-c,s.lanes|=t,t=bf(s.stateNode,o,t),tf(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Oa===null||!Oa.has(d))))return s.flags|=65536,c&=-c,s.lanes|=c,c=_g(c),xg(c,t,s,o),tf(s,c),!1}s=s.return}while(s!==null);return!1}var yg=Error(r(461)),Sn=!1;function Rn(t,i,s,o){i.child=t===null?cg(i,null,s,o):ts(i,t.child,s,o)}function Sg(t,i,s,o,c){s=s.render;var d=i.ref;if("ref"in o){var M={};for(var R in o)R!=="ref"&&(M[R]=o[R])}else M=o;return fr(i),o=of(t,i,s,M,d,c),R=lf(),t!==null&&!Sn?(uf(t,i,c),$i(t,i,c)):(Rt&&R&&kc(i),i.flags|=1,Rn(t,i,o,c),i.child)}function Mg(t,i,s,o,c){if(t===null){var d=s.type;return typeof d=="function"&&!Hc(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,Eg(t,i,d,o,c)):(t=Ml(s.type,null,o,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Nf(t,c)){var M=d.memoizedProps;if(s=s.compare,s=s!==null?s:Ks,s(M,o)&&t.ref===i.ref)return $i(t,i,c)}return i.flags|=1,t=qi(d,o),t.ref=i.ref,t.return=i,i.child=t}function Eg(t,i,s,o,c){if(t!==null){var d=t.memoizedProps;if(Ks(d,o)&&t.ref===i.ref)if(Sn=!1,i.pendingProps=o=d,Nf(t,c))(t.flags&131072)!==0&&(Sn=!0);else return i.lanes=t.lanes,$i(t,i,c)}return Tf(t,i,s,o,c)}function bg(t,i,s){var o=i.pendingProps,c=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=d!==null?d.baseLanes|s:s,t!==null){for(c=i.child=t.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;i.childLanes=d&~o}else i.childLanes=0,i.child=null;return Tg(t,i,o,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Rl(i,d!==null?d.cachePool:null),d!==null?Em(i,d):af(),fg(i);else return i.lanes=i.childLanes=536870912,Tg(t,i,d!==null?d.baseLanes|s:s,s)}else d!==null?(Rl(i,d.cachePool),Em(i,d),wa(),i.memoizedState=null):(t!==null&&Rl(i,null),af(),wa());return Rn(t,i,c,s),i.child}function Tg(t,i,s,o){var c=Qc();return c=c===null?null:{parent:gn._currentValue,pool:c},i.memoizedState={baseLanes:s,cachePool:c},t!==null&&Rl(i,null),af(),fg(i),t!==null&&to(t,i,o,!0),null}function Xl(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Tf(t,i,s,o,c){return fr(i),s=of(t,i,s,o,void 0,c),o=lf(),t!==null&&!Sn?(uf(t,i,c),$i(t,i,c)):(Rt&&o&&kc(i),i.flags|=1,Rn(t,i,s,c),i.child)}function Ag(t,i,s,o,c,d){return fr(i),i.updateQueue=null,s=Tm(i,o,s,c),bm(t),o=lf(),t!==null&&!Sn?(uf(t,i,d),$i(t,i,d)):(Rt&&o&&kc(i),i.flags|=1,Rn(t,i,s,d),i.child)}function Rg(t,i,s,o,c){if(fr(i),i.stateNode===null){var d=Wr,M=s.contextType;typeof M=="object"&&M!==null&&(d=Nn(M)),d=new s(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ef,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},$c(i),M=s.contextType,d.context=typeof M=="object"&&M!==null?Nn(M):Wr,d.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(Mf(i,s,M,o),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&Ef.enqueueReplaceState(d,d.state,null),lo(i,o,d,c),oo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){d=i.stateNode;var R=i.memoizedProps,F=pr(s,R);d.props=F;var ee=d.context,ge=s.contextType;M=Wr,typeof ge=="object"&&ge!==null&&(M=Nn(ge));var Se=s.getDerivedStateFromProps;ge=typeof Se=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,ge||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ee!==M)&&dg(i,d,o,M),Ea=!1;var ie=i.memoizedState;d.state=ie,lo(i,o,d,c),oo(),ee=i.memoizedState,R||ie!==ee||Ea?(typeof Se=="function"&&(Mf(i,s,Se,o),ee=i.memoizedState),(F=Ea||hg(i,s,F,o,ie,ee,M))?(ge||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=ee),d.props=o,d.state=ee,d.context=M,o=F):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,ef(t,i),M=i.memoizedProps,ge=pr(s,M),d.props=ge,Se=i.pendingProps,ie=d.context,ee=s.contextType,F=Wr,typeof ee=="object"&&ee!==null&&(F=Nn(ee)),R=s.getDerivedStateFromProps,(ee=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==Se||ie!==F)&&dg(i,d,o,F),Ea=!1,ie=i.memoizedState,d.state=ie,lo(i,o,d,c),oo();var ae=i.memoizedState;M!==Se||ie!==ae||Ea||t!==null&&t.dependencies!==null&&Tl(t.dependencies)?(typeof R=="function"&&(Mf(i,s,R,o),ae=i.memoizedState),(ge=Ea||hg(i,s,ge,o,ie,ae,F)||t!==null&&t.dependencies!==null&&Tl(t.dependencies))?(ee||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ae,F),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ae,F)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ae),d.props=o,d.state=ae,d.context=F,o=ge):(typeof d.componentDidUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(i.flags|=1024),o=!1)}return d=o,Xl(t,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&o?(i.child=ts(i,t.child,null,c),i.child=ts(i,null,s,c)):Rn(t,i,s,c),i.memoizedState=d.state,t=i.child):t=$i(t,i,c),t}function wg(t,i,s,o){return $s(),i.flags|=256,Rn(t,i,s,o),i.child}var Af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rf(t){return{baseLanes:t,cachePool:mm()}}function wf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=hi),t}function Cg(t,i,s){var o=i.pendingProps,c=!1,d=(i.flags&128)!==0,M;if((M=d)||(M=t!==null&&t.memoizedState===null?!1:(vn.current&2)!==0),M&&(c=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(Rt){if(c?Ra(i):wa(),Rt){var R=en,F;if(F=R){e:{for(F=R,R=Ui;F.nodeType!==8;){if(!R){R=null;break e}if(F=Mi(F.nextSibling),F===null){R=null;break e}}R=F}R!==null?(i.memoizedState={dehydrated:R,treeContext:sr!==null?{id:ji,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},F=Jn(18,null,null,0),F.stateNode=R,F.return=i,i.child=F,Bn=i,en=null,F=!0):F=!1}F||ur(i)}if(R=i.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return fh(R)?i.lanes=32:i.lanes=536870912,null;Ji(i)}return R=o.children,o=o.fallback,c?(wa(),c=i.mode,R=Wl({mode:"hidden",children:R},c),o=rr(o,c,s,null),R.return=i,o.return=i,R.sibling=o,i.child=R,c=i.child,c.memoizedState=Rf(s),c.childLanes=wf(t,M,s),i.memoizedState=Af,o):(Ra(i),Cf(i,R))}if(F=t.memoizedState,F!==null&&(R=F.dehydrated,R!==null)){if(d)i.flags&256?(Ra(i),i.flags&=-257,i=Df(t,i,s)):i.memoizedState!==null?(wa(),i.child=t.child,i.flags|=128,i=null):(wa(),c=o.fallback,R=i.mode,o=Wl({mode:"visible",children:o.children},R),c=rr(c,R,s,null),c.flags|=2,o.return=i,c.return=i,o.sibling=c,i.child=o,ts(i,t.child,null,s),o=i.child,o.memoizedState=Rf(s),o.childLanes=wf(t,M,s),i.memoizedState=Af,i=c);else if(Ra(i),fh(R)){if(M=R.nextSibling&&R.nextSibling.dataset,M)var ee=M.dgst;M=ee,o=Error(r(419)),o.stack="",o.digest=M,eo({value:o,source:null,stack:null}),i=Df(t,i,s)}else if(Sn||to(t,i,s,!1),M=(s&t.childLanes)!==0,Sn||M){if(M=Vt,M!==null&&(o=s&-s,o=(o&42)!==0?1:st(o),o=(o&(M.suspendedLanes|s))!==0?0:o,o!==0&&o!==F.retryLane))throw F.retryLane=o,Xr(t,o),ii(M,t,o),yg;R.data==="$?"||Yf(),i=Df(t,i,s)}else R.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=F.treeContext,en=Mi(R.nextSibling),Bn=i,Rt=!0,lr=null,Ui=!1,t!==null&&(ui[ci++]=ji,ui[ci++]=Yi,ui[ci++]=sr,ji=t.id,Yi=t.overflow,sr=i),i=Cf(i,o.children),i.flags|=4096);return i}return c?(wa(),c=o.fallback,R=i.mode,F=t.child,ee=F.sibling,o=qi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,ee!==null?c=qi(ee,c):(c=rr(c,R,s,null),c.flags|=2),c.return=i,o.return=i,o.sibling=c,i.child=o,o=c,c=i.child,R=t.child.memoizedState,R===null?R=Rf(s):(F=R.cachePool,F!==null?(ee=gn._currentValue,F=F.parent!==ee?{parent:ee,pool:ee}:F):F=mm(),R={baseLanes:R.baseLanes|s,cachePool:F}),c.memoizedState=R,c.childLanes=wf(t,M,s),i.memoizedState=Af,o):(Ra(i),s=t.child,t=s.sibling,s=qi(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=s,i.memoizedState=null,s)}function Cf(t,i){return i=Wl({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Wl(t,i){return t=Jn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Df(t,i,s){return ts(i,t.child,null,s),t=Cf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Dg(t,i,s){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),jc(t.return,i,s)}function Uf(t,i,s,o,c){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:c}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=s,d.tailMode=c)}function Ug(t,i,s){var o=i.pendingProps,c=o.revealOrder,d=o.tail;if(Rn(t,i,o.children,s),o=vn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dg(t,s,i);else if(t.tag===19)Dg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(le(vn,o),c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&Gl(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Uf(i,!1,c,s,d);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Gl(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Uf(i,!0,s,null,d);break;case"together":Uf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $i(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),La|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(to(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=qi(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=qi(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Nf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Tl(t)))}function qy(t,i,s){switch(i.tag){case 3:be(i,i.stateNode.containerInfo),Ma(i,gn,t.memoizedState.cache),$s();break;case 27:case 5:He(i);break;case 4:be(i,i.stateNode.containerInfo);break;case 10:Ma(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ra(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Cg(t,i,s):(Ra(i),t=$i(t,i,s),t!==null?t.sibling:null);Ra(i);break;case 19:var c=(t.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(to(t,i,s,!1),o=(s&i.childLanes)!==0),c){if(o)return Ug(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),le(vn,vn.current),o)break;return null;case 22:case 23:return i.lanes=0,bg(t,i,s);case 24:Ma(i,gn,t.memoizedState.cache)}return $i(t,i,s)}function Ng(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Sn=!0;else{if(!Nf(t,s)&&(i.flags&128)===0)return Sn=!1,qy(t,i,s);Sn=(t.flags&131072)!==0}else Sn=!1,Rt&&(i.flags&1048576)!==0&&lm(i,bl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var o=i.elementType,c=o._init;if(o=c(o._payload),i.type=o,typeof o=="function")Hc(o)?(t=pr(o,t),i.tag=1,i=Rg(null,i,o,t,s)):(i.tag=0,i=Tf(null,i,o,t,s));else{if(o!=null){if(c=o.$$typeof,c===U){i.tag=11,i=Sg(null,i,o,t,s);break e}else if(c===z){i.tag=14,i=Mg(null,i,o,t,s);break e}}throw i=ve(o)||o,Error(r(306,i,""))}}return i;case 0:return Tf(t,i,i.type,i.pendingProps,s);case 1:return o=i.type,c=pr(o,i.pendingProps),Rg(t,i,o,c,s);case 3:e:{if(be(i,i.stateNode.containerInfo),t===null)throw Error(r(387));o=i.pendingProps;var d=i.memoizedState;c=d.element,ef(t,i),lo(i,o,null,s);var M=i.memoizedState;if(o=M.cache,Ma(i,gn,o),o!==d.cache&&Yc(i,[gn],s,!0),oo(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=wg(t,i,o,s);break e}else if(o!==c){c=oi(Error(r(424)),i),eo(c),i=wg(t,i,o,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=Mi(t.firstChild),Bn=i,Rt=!0,lr=null,Ui=!0,s=cg(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if($s(),o===c){i=$i(t,i,s);break e}Rn(t,i,o,s)}i=i.child}return i;case 26:return Xl(t,i),t===null?(s=Iv(i.type,null,i.pendingProps,null))?i.memoizedState=s:Rt||(s=i.type,t=i.pendingProps,o=ru(J.current).createElement(s),o[mn]=i,o[Jt]=t,Cn(o,s,t),un(o),i.stateNode=o):i.memoizedState=Iv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return He(i),t===null&&Rt&&(o=i.stateNode=Lv(i.type,i.pendingProps,J.current),Bn=i,Ui=!0,c=en,Fa(i.type)?(hh=c,en=Mi(o.firstChild)):en=c),Rn(t,i,i.pendingProps.children,s),Xl(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Rt&&((c=o=en)&&(o=yS(o,i.type,i.pendingProps,Ui),o!==null?(i.stateNode=o,Bn=i,en=Mi(o.firstChild),Ui=!1,c=!0):c=!1),c||ur(i)),He(i),c=i.type,d=i.pendingProps,M=t!==null?t.memoizedProps:null,o=d.children,lh(c,d)?o=null:M!==null&&lh(c,M)&&(i.flags|=32),i.memoizedState!==null&&(c=of(t,i,By,null,null,s),Uo._currentValue=c),Xl(t,i),Rn(t,i,o,s),i.child;case 6:return t===null&&Rt&&((t=s=en)&&(s=SS(s,i.pendingProps,Ui),s!==null?(i.stateNode=s,Bn=i,en=null,t=!0):t=!1),t||ur(i)),null;case 13:return Cg(t,i,s);case 4:return be(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=ts(i,null,o,s):Rn(t,i,o,s),i.child;case 11:return Sg(t,i,i.type,i.pendingProps,s);case 7:return Rn(t,i,i.pendingProps,s),i.child;case 8:return Rn(t,i,i.pendingProps.children,s),i.child;case 12:return Rn(t,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Ma(i,i.type,o.value),Rn(t,i,o.children,s),i.child;case 9:return c=i.type._context,o=i.pendingProps.children,fr(i),c=Nn(c),o=o(c),i.flags|=1,Rn(t,i,o,s),i.child;case 14:return Mg(t,i,i.type,i.pendingProps,s);case 15:return Eg(t,i,i.type,i.pendingProps,s);case 19:return Ug(t,i,s);case 31:return o=i.pendingProps,s=i.mode,o={mode:o.mode,children:o.children},t===null?(s=Wl(o,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=qi(t.child,o),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return bg(t,i,s);case 24:return fr(i),o=Nn(gn),t===null?(c=Qc(),c===null&&(c=Vt,d=Zc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=s),c=d),i.memoizedState={parent:o,cache:c},$c(i),Ma(i,gn,c)):((t.lanes&s)!==0&&(ef(t,i),lo(i,null,null,s),oo()),c=t.memoizedState,d=i.memoizedState,c.parent!==o?(c={parent:o,cache:o},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),Ma(i,gn,o)):(o=d.cache,Ma(i,gn,o),o!==c.cache&&Yc(i,[gn],s,!0))),Rn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function ea(t){t.flags|=4}function Lg(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Gv(i)){if(i=fi.current,i!==null&&((Mt&4194048)===Mt?Ni!==null:(Mt&62914560)!==Mt&&(Mt&536870912)===0||i!==Ni))throw ro=Jc,gm;t.flags|=8192}}function ql(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?we():536870912,t.lanes|=i,rs|=i)}function go(t,i){if(!Rt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=s,i}function jy(t,i,s){var o=i.pendingProps;switch(Xc(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(i),null;case 1:return Kt(i),null;case 3:return s=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Ki(gn),qe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Js(i)?ea(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fm())),Kt(i),null;case 26:return s=i.memoizedState,t===null?(ea(i),s!==null?(Kt(i),Lg(i,s)):(Kt(i),i.flags&=-16777217)):s?s!==t.memoizedState?(ea(i),Kt(i),Lg(i,s)):(Kt(i),i.flags&=-16777217):(t.memoizedProps!==o&&ea(i),Kt(i),i.flags&=-16777217),null;case 27:je(i),s=J.current;var c=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==o&&ea(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return Kt(i),null}t=Ee.current,Js(i)?um(i):(t=Lv(c,o,s),i.stateNode=t,ea(i))}return Kt(i),null;case 5:if(je(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&ea(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return Kt(i),null}if(t=Ee.current,Js(i))um(i);else{switch(c=ru(J.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(s,{is:o.is}):c.createElement(s)}}t[mn]=i,t[Jt]=o;e:for(c=i.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===i)break e;for(;c.sibling===null;){if(c.return===null||c.return===i)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}i.stateNode=t;e:switch(Cn(t,s,o),s){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ea(i)}}return Kt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&ea(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(r(166));if(t=J.current,Js(i)){if(t=i.stateNode,s=i.memoizedProps,o=null,c=Bn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[mn]=i,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Av(t.nodeValue,s)),t||ur(i)}else t=ru(t).createTextNode(o),t[mn]=i,i.stateNode=t}return Kt(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Js(i),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[mn]=i}else $s(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Kt(i),c=!1}else c=fm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return i.flags&256?(Ji(i),i):(Ji(i),null)}if(Ji(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=o!==null,t=t!==null&&t.memoizedState!==null,s){o=i.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),ql(i,i.updateQueue),Kt(i),null;case 4:return qe(),t===null&&ih(i.stateNode.containerInfo),Kt(i),null;case 10:return Ki(i.type),Kt(i),null;case 19:if(se(vn),c=i.memoizedState,c===null)return Kt(i),null;if(o=(i.flags&128)!==0,d=c.rendering,d===null)if(o)go(c,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Gl(t),d!==null){for(i.flags|=128,go(c,!1),t=d.updateQueue,i.updateQueue=t,ql(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)om(s,t),s=s.sibling;return le(vn,vn.current&1|2),i.child}t=t.sibling}c.tail!==null&&Fe()>Zl&&(i.flags|=128,o=!0,go(c,!1),i.lanes=4194304)}else{if(!o)if(t=Gl(d),t!==null){if(i.flags|=128,o=!0,t=t.updateQueue,i.updateQueue=t,ql(i,t),go(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Rt)return Kt(i),null}else 2*Fe()-c.renderingStartTime>Zl&&s!==536870912&&(i.flags|=128,o=!0,go(c,!1),i.lanes=4194304);c.isBackwards?(d.sibling=i.child,i.child=d):(t=c.last,t!==null?t.sibling=d:i.child=d,c.last=d)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=Fe(),i.sibling=null,t=vn.current,le(vn,o?t&1|2:t&1),i):(Kt(i),null);case 22:case 23:return Ji(i),rf(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(Kt(i),i.subtreeFlags&6&&(i.flags|=8192)):Kt(i),s=i.updateQueue,s!==null&&ql(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),t!==null&&se(hr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ki(gn),Kt(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function Yy(t,i){switch(Xc(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ki(gn),qe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return je(i),null;case 13:if(Ji(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));$s()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return se(vn),null;case 4:return qe(),null;case 10:return Ki(i.type),null;case 22:case 23:return Ji(i),rf(),t!==null&&se(hr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ki(gn),null;case 25:return null;default:return null}}function Og(t,i){switch(Xc(i),i.tag){case 3:Ki(gn),qe();break;case 26:case 27:case 5:je(i);break;case 4:qe();break;case 13:Ji(i);break;case 19:se(vn);break;case 10:Ki(i.type);break;case 22:case 23:Ji(i),rf(),t!==null&&se(hr);break;case 24:Ki(gn)}}function vo(t,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var c=o.next;s=c;do{if((s.tag&t)===t){o=void 0;var d=s.create,M=s.inst;o=d(),M.destroy=o}s=s.next}while(s!==c)}}catch(R){Ht(i,i.return,R)}}function Ca(t,i,s){try{var o=i.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&t)===t){var M=o.inst,R=M.destroy;if(R!==void 0){M.destroy=void 0,c=i;var F=s,ee=R;try{ee()}catch(ge){Ht(c,F,ge)}}}o=o.next}while(o!==d)}}catch(ge){Ht(i,i.return,ge)}}function Pg(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Mm(i,s)}catch(o){Ht(t,t.return,o)}}}function Ig(t,i,s){s.props=pr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){Ht(t,i,o)}}function _o(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(c){Ht(t,i,c)}}function Li(t,i){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(c){Ht(t,i,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(c){Ht(t,i,c)}else s.current=null}function Fg(t){var i=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(c){Ht(t,t.return,c)}}function Lf(t,i,s){try{var o=t.stateNode;mS(o,t.type,s,i),o[Jt]=i}catch(c){Ht(t,t.return,c)}}function Bg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function Of(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pf(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=au));else if(o!==4&&(o===27&&Fa(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Pf(t,i,s),t=t.sibling;t!==null;)Pf(t,i,s),t=t.sibling}function jl(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(o!==4&&(o===27&&Fa(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(jl(t,i,s),t=t.sibling;t!==null;)jl(t,i,s),t=t.sibling}function zg(t){var i=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,c=i.attributes;c.length;)i.removeAttributeNode(c[0]);Cn(i,o,s),i[mn]=t,i[Jt]=s}catch(d){Ht(t,t.return,d)}}var ta=!1,rn=!1,If=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Zy(t,i){if(t=t.containerInfo,sh=fu,t=Qp(t),Lc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var M=0,R=-1,F=-1,ee=0,ge=0,Se=t,ie=null;t:for(;;){for(var ae;Se!==s||c!==0&&Se.nodeType!==3||(R=M+c),Se!==d||o!==0&&Se.nodeType!==3||(F=M+o),Se.nodeType===3&&(M+=Se.nodeValue.length),(ae=Se.firstChild)!==null;)ie=Se,Se=ae;for(;;){if(Se===t)break t;if(ie===s&&++ee===c&&(R=M),ie===d&&++ge===o&&(F=M),(ae=Se.nextSibling)!==null)break;Se=ie,ie=Se.parentNode}Se=ae}s=R===-1||F===-1?null:{start:R,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(oh={focusedElem:t,selectionRange:s},fu=!1,Mn=i;Mn!==null;)if(i=Mn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Mn=t;else for(;Mn!==null;){switch(i=Mn,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,c=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var rt=pr(s.type,c,s.elementType===s.type);t=o.getSnapshotBeforeUpdate(rt,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ht(s,s.return,tt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)ch(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ch(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Mn=t;break}Mn=i.return}}function Gg(t,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Da(t,s),o&4&&vo(5,s);break;case 1:if(Da(t,s),o&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(M){Ht(s,s.return,M)}else{var c=pr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(c,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Ht(s,s.return,M)}}o&64&&Pg(s),o&512&&_o(s,s.return);break;case 3:if(Da(t,s),o&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Mm(t,i)}catch(M){Ht(s,s.return,M)}}break;case 27:i===null&&o&4&&zg(s);case 26:case 5:Da(t,s),i===null&&o&4&&Fg(s),o&512&&_o(s,s.return);break;case 12:Da(t,s);break;case 13:Da(t,s),o&4&&Xg(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=aS.bind(null,s),MS(t,s))));break;case 22:if(o=s.memoizedState!==null||ta,!o){i=i!==null&&i.memoizedState!==null||rn,c=ta;var d=rn;ta=o,(rn=i)&&!d?Ua(t,s,(s.subtreeFlags&8772)!==0):Da(t,s),ta=c,rn=d}break;case 30:break;default:Da(t,s)}}function Vg(t){var i=t.alternate;i!==null&&(t.alternate=null,Vg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Ir(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Wn=!1;function na(t,i,s){for(s=s.child;s!==null;)kg(t,i,s),s=s.sibling}function kg(t,i,s){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(pe,s)}catch{}switch(s.tag){case 26:rn||Li(s,i),na(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:rn||Li(s,i);var o=jt,c=Wn;Fa(s.type)&&(jt=s.stateNode,Wn=!1),na(t,i,s),Ro(s.stateNode),jt=o,Wn=c;break;case 5:rn||Li(s,i);case 6:if(o=jt,c=Wn,jt=null,na(t,i,s),jt=o,Wn=c,jt!==null)if(Wn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(s.stateNode)}catch(d){Ht(s,i,d)}else try{jt.removeChild(s.stateNode)}catch(d){Ht(s,i,d)}break;case 18:jt!==null&&(Wn?(t=jt,Uv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Po(t)):Uv(jt,s.stateNode));break;case 4:o=jt,c=Wn,jt=s.stateNode.containerInfo,Wn=!0,na(t,i,s),jt=o,Wn=c;break;case 0:case 11:case 14:case 15:rn||Ca(2,s,i),rn||Ca(4,s,i),na(t,i,s);break;case 1:rn||(Li(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Ig(s,i,o)),na(t,i,s);break;case 21:na(t,i,s);break;case 22:rn=(o=rn)||s.memoizedState!==null,na(t,i,s),rn=o;break;default:na(t,i,s)}}function Xg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Po(t)}catch(s){Ht(i,i.return,s)}}function Ky(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new Hg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new Hg),i;default:throw Error(r(435,t.tag))}}function Ff(t,i){var s=Ky(t);i.forEach(function(o){var c=rS.bind(null,t,o);s.has(o)||(s.add(o),o.then(c,c))})}function $n(t,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var c=s[o],d=t,M=i,R=M;e:for(;R!==null;){switch(R.tag){case 27:if(Fa(R.type)){jt=R.stateNode,Wn=!1;break e}break;case 5:jt=R.stateNode,Wn=!1;break e;case 3:case 4:jt=R.stateNode.containerInfo,Wn=!0;break e}R=R.return}if(jt===null)throw Error(r(160));kg(d,M,c),jt=null,Wn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Wg(i,t),i=i.sibling}var Si=null;function Wg(t,i){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$n(i,t),ei(t),o&4&&(Ca(3,t,t.return),vo(3,t),Ca(5,t,t.return));break;case 1:$n(i,t),ei(t),o&512&&(rn||s===null||Li(s,s.return)),o&64&&ta&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var c=Si;if($n(i,t),ei(t),o&512&&(rn||s===null||Li(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Di]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),Cn(d,o,s),d[mn]=t,un(d),o=d;break e;case"link":var M=zv("link","href",c).get(o+(s.href||""));if(M){for(var R=0;R<M.length;R++)if(d=M[R],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(R,1);break t}}d=c.createElement(o),Cn(d,o,s),c.head.appendChild(d);break;case"meta":if(M=zv("meta","content",c).get(o+(s.content||""))){for(R=0;R<M.length;R++)if(d=M[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(R,1);break t}}d=c.createElement(o),Cn(d,o,s),c.head.appendChild(d);break;default:throw Error(r(468,o))}d[mn]=t,un(d),o=d}t.stateNode=o}else Hv(c,t.type,t.stateNode);else t.stateNode=Bv(c,o,t.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?Hv(c,t.type,t.stateNode):Bv(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Lf(t,t.memoizedProps,s.memoizedProps)}break;case 27:$n(i,t),ei(t),o&512&&(rn||s===null||Li(s,s.return)),s!==null&&o&4&&Lf(t,t.memoizedProps,s.memoizedProps);break;case 5:if($n(i,t),ei(t),o&512&&(rn||s===null||Li(s,s.return)),t.flags&32){c=t.stateNode;try{Vn(c,"")}catch(ae){Ht(t,t.return,ae)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,Lf(t,c,s!==null?s.memoizedProps:c)),o&1024&&(If=!0);break;case 6:if($n(i,t),ei(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(ae){Ht(t,t.return,ae)}}break;case 3:if(lu=null,c=Si,Si=su(i.containerInfo),$n(i,t),Si=c,ei(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Po(i.containerInfo)}catch(ae){Ht(t,t.return,ae)}If&&(If=!1,qg(t));break;case 4:o=Si,Si=su(t.stateNode.containerInfo),$n(i,t),ei(t),Si=o;break;case 12:$n(i,t),ei(t);break;case 13:$n(i,t),ei(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(kf=Fe()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ff(t,o)));break;case 22:c=t.memoizedState!==null;var F=s!==null&&s.memoizedState!==null,ee=ta,ge=rn;if(ta=ee||c,rn=ge||F,$n(i,t),rn=ge,ta=ee,ei(t),o&8192)e:for(i=t.stateNode,i._visibility=c?i._visibility&-2:i._visibility|1,c&&(s===null||F||ta||rn||mr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){F=s=i;try{if(d=F.stateNode,c)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{R=F.stateNode;var Se=F.memoizedProps.style,ie=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(ae){Ht(F,F.return,ae)}}}else if(i.tag===6){if(s===null){F=i;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(ae){Ht(F,F.return,ae)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Ff(t,s))));break;case 19:$n(i,t),ei(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ff(t,o)));break;case 30:break;case 21:break;default:$n(i,t),ei(t)}}function ei(t){var i=t.flags;if(i&2){try{for(var s,o=t.return;o!==null;){if(Bg(o)){s=o;break}o=o.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var c=s.stateNode,d=Of(t);jl(t,d,c);break;case 5:var M=s.stateNode;s.flags&32&&(Vn(M,""),s.flags&=-33);var R=Of(t);jl(t,R,M);break;case 3:case 4:var F=s.stateNode.containerInfo,ee=Of(t);Pf(t,ee,F);break;default:throw Error(r(161))}}catch(ge){Ht(t,t.return,ge)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function qg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;qg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Da(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Gg(t,i.alternate,i),i=i.sibling}function mr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ca(4,i,i.return),mr(i);break;case 1:Li(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Ig(i,i.return,s),mr(i);break;case 27:Ro(i.stateNode);case 26:case 5:Li(i,i.return),mr(i);break;case 22:i.memoizedState===null&&mr(i);break;case 30:mr(i);break;default:mr(i)}t=t.sibling}}function Ua(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,c=t,d=i,M=d.flags;switch(d.tag){case 0:case 11:case 15:Ua(c,d,s),vo(4,d);break;case 1:if(Ua(c,d,s),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ee){Ht(o,o.return,ee)}if(o=d,c=o.updateQueue,c!==null){var R=o.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)Sm(F[c],R)}catch(ee){Ht(o,o.return,ee)}}s&&M&64&&Pg(d),_o(d,d.return);break;case 27:zg(d);case 26:case 5:Ua(c,d,s),s&&o===null&&M&4&&Fg(d),_o(d,d.return);break;case 12:Ua(c,d,s);break;case 13:Ua(c,d,s),s&&M&4&&Xg(c,d);break;case 22:d.memoizedState===null&&Ua(c,d,s),_o(d,d.return);break;case 30:break;default:Ua(c,d,s)}i=i.sibling}}function Bf(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&no(s))}function zf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&no(t))}function Oi(t,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)jg(t,i,s,o),i=i.sibling}function jg(t,i,s,o){var c=i.flags;switch(i.tag){case 0:case 11:case 15:Oi(t,i,s,o),c&2048&&vo(9,i);break;case 1:Oi(t,i,s,o);break;case 3:Oi(t,i,s,o),c&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&no(t)));break;case 12:if(c&2048){Oi(t,i,s,o),t=i.stateNode;try{var d=i.memoizedProps,M=d.id,R=d.onPostCommit;typeof R=="function"&&R(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Ht(i,i.return,F)}}else Oi(t,i,s,o);break;case 13:Oi(t,i,s,o);break;case 23:break;case 22:d=i.stateNode,M=i.alternate,i.memoizedState!==null?d._visibility&2?Oi(t,i,s,o):xo(t,i):d._visibility&2?Oi(t,i,s,o):(d._visibility|=2,ns(t,i,s,o,(i.subtreeFlags&10256)!==0)),c&2048&&Bf(M,i);break;case 24:Oi(t,i,s,o),c&2048&&zf(i.alternate,i);break;default:Oi(t,i,s,o)}}function ns(t,i,s,o,c){for(c=c&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,M=i,R=s,F=o,ee=M.flags;switch(M.tag){case 0:case 11:case 15:ns(d,M,R,F,c),vo(8,M);break;case 23:break;case 22:var ge=M.stateNode;M.memoizedState!==null?ge._visibility&2?ns(d,M,R,F,c):xo(d,M):(ge._visibility|=2,ns(d,M,R,F,c)),c&&ee&2048&&Bf(M.alternate,M);break;case 24:ns(d,M,R,F,c),c&&ee&2048&&zf(M.alternate,M);break;default:ns(d,M,R,F,c)}i=i.sibling}}function xo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,o=i,c=o.flags;switch(o.tag){case 22:xo(s,o),c&2048&&Bf(o.alternate,o);break;case 24:xo(s,o),c&2048&&zf(o.alternate,o);break;default:xo(s,o)}i=i.sibling}}var yo=8192;function is(t){if(t.subtreeFlags&yo)for(t=t.child;t!==null;)Yg(t),t=t.sibling}function Yg(t){switch(t.tag){case 26:is(t),t.flags&yo&&t.memoizedState!==null&&PS(Si,t.memoizedState,t.memoizedProps);break;case 5:is(t);break;case 3:case 4:var i=Si;Si=su(t.stateNode.containerInfo),is(t),Si=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=yo,yo=16777216,is(t),yo=i):is(t));break;default:is(t)}}function Zg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function So(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Mn=o,Qg(o,t)}Zg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Kg(t),t=t.sibling}function Kg(t){switch(t.tag){case 0:case 11:case 15:So(t),t.flags&2048&&Ca(9,t,t.return);break;case 3:So(t);break;case 12:So(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Yl(t)):So(t);break;default:So(t)}}function Yl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];Mn=o,Qg(o,t)}Zg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ca(8,i,i.return),Yl(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Yl(i));break;default:Yl(i)}t=t.sibling}}function Qg(t,i){for(;Mn!==null;){var s=Mn;switch(s.tag){case 0:case 11:case 15:Ca(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:no(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,Mn=o;else e:for(s=t;Mn!==null;){o=Mn;var c=o.sibling,d=o.return;if(Vg(o),o===s){Mn=null;break e}if(c!==null){c.return=d,Mn=c;break e}Mn=d}}}var Qy={getCacheForType:function(t){var i=Nn(gn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},Jy=typeof WeakMap=="function"?WeakMap:Map,Ct=0,Vt=null,_t=null,Mt=0,Dt=0,ti=null,Na=!1,as=!1,Hf=!1,ia=0,tn=0,La=0,gr=0,Gf=0,hi=0,rs=0,Mo=null,qn=null,Vf=!1,kf=0,Zl=1/0,Kl=null,Oa=null,wn=0,Pa=null,ss=null,os=0,Xf=0,Wf=null,Jg=null,Eo=0,qf=null;function ni(){if((Ct&2)!==0&&Mt!==0)return Mt&-Mt;if(I.T!==null){var t=Yr;return t!==0?t:$f()}return Et()}function $g(){hi===0&&(hi=(Mt&536870912)===0||Rt?X():536870912);var t=fi.current;return t!==null&&(t.flags|=32),hi}function ii(t,i,s){(t===Vt&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)&&(ls(t,0),Ia(t,Mt,hi,!1)),ze(t,s),((Ct&2)===0||t!==Vt)&&(t===Vt&&((Ct&2)===0&&(gr|=s),tn===4&&Ia(t,Mt,hi,!1)),Pi(t))}function ev(t,i,s){if((Ct&6)!==0)throw Error(r(327));var o=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Ne(t,i),c=o?tS(t,i):Zf(t,i,!0),d=o;do{if(c===0){as&&!o&&Ia(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!$y(s)){c=Zf(t,i,!1),d=!1;continue}if(c===2){if(d=i,t.errorRecoveryDisabledLanes&d)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var R=t;c=Mo;var F=R.current.memoizedState.isDehydrated;if(F&&(ls(R,M).flags|=256),M=Zf(R,M,!1),M!==2){if(Hf&&!F){R.errorRecoveryDisabledLanes|=d,gr|=d,c=4;break e}d=qn,qn=c,d!==null&&(qn===null?qn=d:qn.push.apply(qn,d))}c=M}if(d=!1,c!==2)continue}}if(c===1){ls(t,0),Ia(t,i,0,!0);break}e:{switch(o=t,d=c,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Ia(o,i,hi,!Na);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(c=kf+300-Fe(),10<c)){if(Ia(o,i,hi,!Na),We(o,0,!0)!==0)break e;o.timeoutHandle=Cv(tv.bind(null,o,s,qn,Kl,Vf,i,hi,gr,rs,Na,d,2,-0,0),c);break e}tv(o,s,qn,Kl,Vf,i,hi,gr,rs,Na,d,0,-0,0)}}break}while(!0);Pi(t)}function tv(t,i,s,o,c,d,M,R,F,ee,ge,Se,ie,ae){if(t.timeoutHandle=-1,Se=i.subtreeFlags,(Se&8192||(Se&16785408)===16785408)&&(Do={stylesheets:null,count:0,unsuspend:OS},Yg(i),Se=IS(),Se!==null)){t.cancelPendingCommit=Se(lv.bind(null,t,i,d,s,o,c,M,R,F,ge,1,ie,ae)),Ia(t,d,M,!ee);return}lv(t,i,d,s,o,c,M,R,F)}function $y(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var c=s[o],d=c.getSnapshot;c=c.value;try{if(!Qn(d(),c))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ia(t,i,s,o){i&=~Gf,i&=~gr,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var c=i;0<c;){var d=31-Be(c),M=1<<d;o[d]=-1,c&=~M}s!==0&&Me(t,s,i)}function Ql(){return(Ct&6)===0?(bo(0),!1):!0}function jf(){if(_t!==null){if(Dt===0)var t=_t.return;else t=_t,Zi=cr=null,cf(t),es=null,po=0,t=_t;for(;t!==null;)Og(t.alternate,t),t=t.return;_t=null}}function ls(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,vS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),jf(),Vt=t,_t=s=qi(t.current,null),Mt=i,Dt=0,ti=null,Na=!1,as=Ne(t,i),Hf=!1,rs=hi=Gf=gr=La=tn=0,qn=Mo=null,Vf=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var c=31-Be(o),d=1<<c;i|=t[c],o&=~d}return ia=i,xl(),s}function nv(t,i){mt=null,I.H=Bl,i===ao||i===wl?(i=xm(),Dt=3):i===gm?(i=xm(),Dt=4):Dt=i===yg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ti=i,_t===null&&(tn=1,kl(t,oi(i,t.current)))}function iv(){var t=I.H;return I.H=Bl,t===null?Bl:t}function av(){var t=I.A;return I.A=Qy,t}function Yf(){tn=4,Na||(Mt&4194048)!==Mt&&fi.current!==null||(as=!0),(La&134217727)===0&&(gr&134217727)===0||Vt===null||Ia(Vt,Mt,hi,!1)}function Zf(t,i,s){var o=Ct;Ct|=2;var c=iv(),d=av();(Vt!==t||Mt!==i)&&(Kl=null,ls(t,i)),i=!1;var M=tn;e:do try{if(Dt!==0&&_t!==null){var R=_t,F=ti;switch(Dt){case 8:jf(),M=6;break e;case 3:case 2:case 9:case 6:fi.current===null&&(i=!0);var ee=Dt;if(Dt=0,ti=null,us(t,R,F,ee),s&&as){M=0;break e}break;default:ee=Dt,Dt=0,ti=null,us(t,R,F,ee)}}eS(),M=tn;break}catch(ge){nv(t,ge)}while(!0);return i&&t.shellSuspendCounter++,Zi=cr=null,Ct=o,I.H=c,I.A=d,_t===null&&(Vt=null,Mt=0,xl()),M}function eS(){for(;_t!==null;)rv(_t)}function tS(t,i){var s=Ct;Ct|=2;var o=iv(),c=av();Vt!==t||Mt!==i?(Kl=null,Zl=Fe()+500,ls(t,i)):as=Ne(t,i);e:do try{if(Dt!==0&&_t!==null){i=_t;var d=ti;t:switch(Dt){case 1:Dt=0,ti=null,us(t,i,d,1);break;case 2:case 9:if(vm(d)){Dt=0,ti=null,sv(i);break}i=function(){Dt!==2&&Dt!==9||Vt!==t||(Dt=7),Pi(t)},d.then(i,i);break e;case 3:Dt=7;break e;case 4:Dt=5;break e;case 7:vm(d)?(Dt=0,ti=null,sv(i)):(Dt=0,ti=null,us(t,i,d,7));break;case 5:var M=null;switch(_t.tag){case 26:M=_t.memoizedState;case 5:case 27:var R=_t;if(!M||Gv(M)){Dt=0,ti=null;var F=R.sibling;if(F!==null)_t=F;else{var ee=R.return;ee!==null?(_t=ee,Jl(ee)):_t=null}break t}}Dt=0,ti=null,us(t,i,d,5);break;case 6:Dt=0,ti=null,us(t,i,d,6);break;case 8:jf(),tn=6;break e;default:throw Error(r(462))}}nS();break}catch(ge){nv(t,ge)}while(!0);return Zi=cr=null,I.H=o,I.A=c,Ct=s,_t!==null?0:(Vt=null,Mt=0,xl(),tn)}function nS(){for(;_t!==null&&!ot();)rv(_t)}function rv(t){var i=Ng(t.alternate,t,ia);t.memoizedProps=t.pendingProps,i===null?Jl(t):_t=i}function sv(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Ag(s,i,i.pendingProps,i.type,void 0,Mt);break;case 11:i=Ag(s,i,i.pendingProps,i.type.render,i.ref,Mt);break;case 5:cf(i);default:Og(s,i),i=_t=om(i,ia),i=Ng(s,i,ia)}t.memoizedProps=t.pendingProps,i===null?Jl(t):_t=i}function us(t,i,s,o){Zi=cr=null,cf(i),es=null,po=0;var c=i.return;try{if(Wy(t,c,i,s,Mt)){tn=1,kl(t,oi(s,t.current)),_t=null;return}}catch(d){if(c!==null)throw _t=c,d;tn=1,kl(t,oi(s,t.current)),_t=null;return}i.flags&32768?(Rt||o===1?t=!0:as||(Mt&536870912)!==0?t=!1:(Na=t=!0,(o===2||o===9||o===3||o===6)&&(o=fi.current,o!==null&&o.tag===13&&(o.flags|=16384))),ov(i,t)):Jl(i)}function Jl(t){var i=t;do{if((i.flags&32768)!==0){ov(i,Na);return}t=i.return;var s=jy(i.alternate,i,ia);if(s!==null){_t=s;return}if(i=i.sibling,i!==null){_t=i;return}_t=i=t}while(i!==null);tn===0&&(tn=5)}function ov(t,i){do{var s=Yy(t.alternate,t);if(s!==null){s.flags&=32767,_t=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){_t=t;return}_t=t=s}while(t!==null);tn=6,_t=null}function lv(t,i,s,o,c,d,M,R,F){t.cancelPendingCommit=null;do $l();while(wn!==0);if((Ct&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=Bc,Ae(t,s,d,M,R,F),t===Vt&&(_t=Vt=null,Mt=0),ss=i,Pa=t,os=s,Xf=d,Wf=c,Jg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sS(Yt,function(){return dv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,c=W.p,W.p=2,M=Ct,Ct|=4;try{Zy(t,i,s)}finally{Ct=M,W.p=c,I.T=o}}wn=1,uv(),cv(),fv()}}function uv(){if(wn===1){wn=0;var t=Pa,i=ss,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var o=W.p;W.p=2;var c=Ct;Ct|=4;try{Wg(i,t);var d=oh,M=Qp(t.containerInfo),R=d.focusedElem,F=d.selectionRange;if(M!==R&&R&&R.ownerDocument&&Kp(R.ownerDocument.documentElement,R)){if(F!==null&&Lc(R)){var ee=F.start,ge=F.end;if(ge===void 0&&(ge=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(ge,R.value.length);else{var Se=R.ownerDocument||document,ie=Se&&Se.defaultView||window;if(ie.getSelection){var ae=ie.getSelection(),rt=R.textContent.length,tt=Math.min(F.start,rt),Pt=F.end===void 0?tt:Math.min(F.end,rt);!ae.extend&&tt>Pt&&(M=Pt,Pt=tt,tt=M);var K=Zp(R,tt),k=Zp(R,Pt);if(K&&k&&(ae.rangeCount!==1||ae.anchorNode!==K.node||ae.anchorOffset!==K.offset||ae.focusNode!==k.node||ae.focusOffset!==k.offset)){var $=Se.createRange();$.setStart(K.node,K.offset),ae.removeAllRanges(),tt>Pt?(ae.addRange($),ae.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ae.addRange($))}}}}for(Se=[],ae=R;ae=ae.parentNode;)ae.nodeType===1&&Se.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var _e=Se[R];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}fu=!!sh,oh=sh=null}finally{Ct=c,W.p=o,I.T=s}}t.current=i,wn=2}}function cv(){if(wn===2){wn=0;var t=Pa,i=ss,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var o=W.p;W.p=2;var c=Ct;Ct|=4;try{Gg(t,i.alternate,i)}finally{Ct=c,W.p=o,I.T=s}}wn=3}}function fv(){if(wn===4||wn===3){wn=0,at();var t=Pa,i=ss,s=os,o=Jg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?wn=5:(wn=0,ss=Pa=null,hv(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Oa=null),wt(s),i=i.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(pe,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=I.T,c=W.p,W.p=2,I.T=null;try{for(var d=t.onRecoverableError,M=0;M<o.length;M++){var R=o[M];d(R.value,{componentStack:R.stack})}}finally{I.T=i,W.p=c}}(os&3)!==0&&$l(),Pi(t),c=t.pendingLanes,(s&4194090)!==0&&(c&42)!==0?t===qf?Eo++:(Eo=0,qf=t):Eo=0,bo(0)}}function hv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,no(i)))}function $l(t){return uv(),cv(),fv(),dv()}function dv(){if(wn!==5)return!1;var t=Pa,i=Xf;Xf=0;var s=wt(os),o=I.T,c=W.p;try{W.p=32>s?32:s,I.T=null,s=Wf,Wf=null;var d=Pa,M=os;if(wn=0,ss=Pa=null,os=0,(Ct&6)!==0)throw Error(r(331));var R=Ct;if(Ct|=4,Kg(d.current),jg(d,d.current,M,s),Ct=R,bo(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(pe,d)}catch{}return!0}finally{W.p=c,I.T=o,hv(t,i)}}function pv(t,i,s){i=oi(s,i),i=bf(t.stateNode,i,2),t=Ta(t,i,2),t!==null&&(ze(t,2),Pi(t))}function Ht(t,i,s){if(t.tag===3)pv(t,t,s);else for(;i!==null;){if(i.tag===3){pv(i,t,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))){t=oi(s,t),s=_g(2),o=Ta(i,s,2),o!==null&&(xg(s,o,i,t),ze(o,2),Pi(o));break}}i=i.return}}function Kf(t,i,s){var o=t.pingCache;if(o===null){o=t.pingCache=new Jy;var c=new Set;o.set(i,c)}else c=o.get(i),c===void 0&&(c=new Set,o.set(i,c));c.has(s)||(Hf=!0,c.add(s),t=iS.bind(null,t,i,s),i.then(t,t))}function iS(t,i,s){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Vt===t&&(Mt&s)===s&&(tn===4||tn===3&&(Mt&62914560)===Mt&&300>Fe()-kf?(Ct&2)===0&&ls(t,0):Gf|=s,rs===Mt&&(rs=0)),Pi(t)}function mv(t,i){i===0&&(i=we()),t=Xr(t,i),t!==null&&(ze(t,i),Pi(t))}function aS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),mv(t,s)}function rS(t,i){var s=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(i),mv(t,s)}function sS(t,i){return B(t,i)}var eu=null,cs=null,Qf=!1,tu=!1,Jf=!1,vr=0;function Pi(t){t!==cs&&t.next===null&&(cs===null?eu=cs=t:cs=cs.next=t),tu=!0,Qf||(Qf=!0,lS())}function bo(t,i){if(!Jf&&tu){Jf=!0;do for(var s=!1,o=eu;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var M=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Be(42|t)+1)-1,d&=c&~(M&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,xv(o,d))}else d=Mt,d=We(o,o===Vt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ne(o,d)||(s=!0,xv(o,d));o=o.next}while(s);Jf=!1}}function oS(){gv()}function gv(){tu=Qf=!1;var t=0;vr!==0&&(gS()&&(t=vr),vr=0);for(var i=Fe(),s=null,o=eu;o!==null;){var c=o.next,d=vv(o,i);d===0?(o.next=null,s===null?eu=c:s.next=c,c===null&&(cs=s)):(s=o,(t!==0||(d&3)!==0)&&(tu=!0)),o=c}bo(t)}function vv(t,i){for(var s=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var M=31-Be(d),R=1<<M,F=c[M];F===-1?((R&s)===0||(R&o)!==0)&&(c[M]=ut(R,i)):F<=i&&(t.expiredLanes|=R),d&=~R}if(i=Vt,s=Mt,s=We(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===i&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ut(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ne(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(o!==null&&Ut(o),wt(s)){case 2:case 8:s=lt;break;case 32:s=Yt;break;case 268435456:s=O;break;default:s=Yt}return o=_v.bind(null,t),s=B(s,o),t.callbackPriority=i,t.callbackNode=s,i}return o!==null&&o!==null&&Ut(o),t.callbackPriority=2,t.callbackNode=null,2}function _v(t,i){if(wn!==0&&wn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if($l()&&t.callbackNode!==s)return null;var o=Mt;return o=We(t,t===Vt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(ev(t,o,i),vv(t,Fe()),t.callbackNode!=null&&t.callbackNode===s?_v.bind(null,t):null)}function xv(t,i){if($l())return null;ev(t,i,!0)}function lS(){_S(function(){(Ct&6)!==0?B(Xe,oS):gv()})}function $f(){return vr===0&&(vr=X()),vr}function yv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:hl(""+t)}function Sv(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function uS(t,i,s,o,c){if(i==="submit"&&s&&s.stateNode===c){var d=yv((c[Jt]||null).action),M=o.submitter;M&&(i=(i=M[Jt]||null)?yv(i.formAction):M.getAttribute("formAction"),i!==null&&(d=i,M=null));var R=new gl("action","action",null,o,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(vr!==0){var F=M?Sv(c,M):new FormData(c);xf(s,{pending:!0,data:F,method:c.method,action:d},null,F)}}else typeof d=="function"&&(R.preventDefault(),F=M?Sv(c,M):new FormData(c),xf(s,{pending:!0,data:F,method:c.method,action:d},d,F))},currentTarget:c}]})}}for(var eh=0;eh<Fc.length;eh++){var th=Fc[eh],cS=th.toLowerCase(),fS=th[0].toUpperCase()+th.slice(1);yi(cS,"on"+fS)}yi(em,"onAnimationEnd"),yi(tm,"onAnimationIteration"),yi(nm,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(wy,"onTransitionRun"),yi(Cy,"onTransitionStart"),yi(Dy,"onTransitionCancel"),yi(im,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function Mv(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],c=o.event;o=o.listeners;e:{var d=void 0;if(i)for(var M=o.length-1;0<=M;M--){var R=o[M],F=R.instance,ee=R.currentTarget;if(R=R.listener,F!==d&&c.isPropagationStopped())break e;d=R,c.currentTarget=ee;try{d(c)}catch(ge){Vl(ge)}c.currentTarget=null,d=F}else for(M=0;M<o.length;M++){if(R=o[M],F=R.instance,ee=R.currentTarget,R=R.listener,F!==d&&c.isPropagationStopped())break e;d=R,c.currentTarget=ee;try{d(c)}catch(ge){Vl(ge)}c.currentTarget=null,d=F}}}}function xt(t,i){var s=i[Or];s===void 0&&(s=i[Or]=new Set);var o=t+"__bubble";s.has(o)||(Ev(i,t,2,!1),s.add(o))}function nh(t,i,s){var o=0;i&&(o|=4),Ev(s,t,o,i)}var nu="_reactListening"+Math.random().toString(36).slice(2);function ih(t){if(!t[nu]){t[nu]=!0,cl.forEach(function(s){s!=="selectionchange"&&(hS.has(s)||nh(s,!1,t),nh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[nu]||(i[nu]=!0,nh("selectionchange",!1,i))}}function Ev(t,i,s,o){switch(jv(i)){case 2:var c=zS;break;case 8:c=HS;break;default:c=vh}s=c.bind(null,i,s,t),c=void 0,!bc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function ah(t,i,s,o,c){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var R=o.stateNode.containerInfo;if(R===c)break;if(M===4)for(M=o.return;M!==null;){var F=M.tag;if((F===3||F===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;R!==null;){if(M=Xi(R),M===null)return;if(F=M.tag,F===5||F===6||F===26||F===27){o=d=M;continue e}R=R.parentNode}}o=o.return}Dp(function(){var ee=d,ge=Mc(s),Se=[];e:{var ie=am.get(t);if(ie!==void 0){var ae=gl,rt=t;switch(t){case"keypress":if(pl(s)===0)break e;case"keydown":case"keyup":ae=sy;break;case"focusin":rt="focus",ae=wc;break;case"focusout":rt="blur",ae=wc;break;case"beforeblur":case"afterblur":ae=wc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=Yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=uy;break;case em:case tm:case nm:ae=Qx;break;case im:ae=fy;break;case"scroll":case"scrollend":ae=qx;break;case"wheel":ae=dy;break;case"copy":case"cut":case"paste":ae=$x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=Pp;break;case"toggle":case"beforetoggle":ae=my}var tt=(i&4)!==0,Pt=!tt&&(t==="scroll"||t==="scrollend"),K=tt?ie!==null?ie+"Capture":null:ie;tt=[];for(var k=ee,$;k!==null;){var _e=k;if($=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||$===null||K===null||(_e=ks(k,K),_e!=null&&tt.push(Ao(k,_e,$))),Pt)break;k=k.return}0<tt.length&&(ie=new ae(ie,rt,null,s,ge),Se.push({event:ie,listeners:tt}))}}if((i&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",ae=t==="mouseout"||t==="pointerout",ie&&s!==Sc&&(rt=s.relatedTarget||s.fromElement)&&(Xi(rt)||rt[Ci]))break e;if((ae||ie)&&(ie=ge.window===ge?ge:(ie=ge.ownerDocument)?ie.defaultView||ie.parentWindow:window,ae?(rt=s.relatedTarget||s.toElement,ae=ee,rt=rt?Xi(rt):null,rt!==null&&(Pt=u(rt),tt=rt.tag,rt!==Pt||tt!==5&&tt!==27&&tt!==6)&&(rt=null)):(ae=null,rt=ee),ae!==rt)){if(tt=Lp,_e="onMouseLeave",K="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Pp,_e="onPointerLeave",K="onPointerEnter",k="pointer"),Pt=ae==null?ie:tr(ae),$=rt==null?ie:tr(rt),ie=new tt(_e,k+"leave",ae,s,ge),ie.target=Pt,ie.relatedTarget=$,_e=null,Xi(ge)===ee&&(tt=new tt(K,k+"enter",rt,s,ge),tt.target=$,tt.relatedTarget=Pt,_e=tt),Pt=_e,ae&&rt)t:{for(tt=ae,K=rt,k=0,$=tt;$;$=fs($))k++;for($=0,_e=K;_e;_e=fs(_e))$++;for(;0<k-$;)tt=fs(tt),k--;for(;0<$-k;)K=fs(K),$--;for(;k--;){if(tt===K||K!==null&&tt===K.alternate)break t;tt=fs(tt),K=fs(K)}tt=null}else tt=null;ae!==null&&bv(Se,ie,ae,tt,!1),rt!==null&&Pt!==null&&bv(Se,Pt,rt,tt,!0)}}e:{if(ie=ee?tr(ee):window,ae=ie.nodeName&&ie.nodeName.toLowerCase(),ae==="select"||ae==="input"&&ie.type==="file")var Ve=kp;else if(Gp(ie))if(Xp)Ve=Ty;else{Ve=Ey;var gt=My}else ae=ie.nodeName,!ae||ae.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?ee&&yc(ee.elementType)&&(Ve=kp):Ve=by;if(Ve&&(Ve=Ve(t,ee))){Vp(Se,Ve,s,ge);break e}gt&&gt(t,ie,ee),t==="focusout"&&ee&&ie.type==="number"&&ee.memoizedProps.value!=null&&Un(ie,"number",ie.value)}switch(gt=ee?tr(ee):window,t){case"focusin":(Gp(gt)||gt.contentEditable==="true")&&(Gr=gt,Oc=ee,Qs=null);break;case"focusout":Qs=Oc=Gr=null;break;case"mousedown":Pc=!0;break;case"contextmenu":case"mouseup":case"dragend":Pc=!1,Jp(Se,s,ge);break;case"selectionchange":if(Ry)break;case"keydown":case"keyup":Jp(Se,s,ge)}var Qe;if(Dc)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else Hr?zp(t,s)&&(it="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(it="onCompositionStart");it&&(Ip&&s.locale!=="ko"&&(Hr||it!=="onCompositionStart"?it==="onCompositionEnd"&&Hr&&(Qe=Up()):(Sa=ge,Tc="value"in Sa?Sa.value:Sa.textContent,Hr=!0)),gt=iu(ee,it),0<gt.length&&(it=new Op(it,t,null,s,ge),Se.push({event:it,listeners:gt}),Qe?it.data=Qe:(Qe=Hp(s),Qe!==null&&(it.data=Qe)))),(Qe=vy?_y(t,s):xy(t,s))&&(it=iu(ee,"onBeforeInput"),0<it.length&&(gt=new Op("onBeforeInput","beforeinput",null,s,ge),Se.push({event:gt,listeners:it}),gt.data=Qe)),uS(Se,t,ee,s,ge)}Mv(Se,i)})}function Ao(t,i,s){return{instance:t,listener:i,currentTarget:s}}function iu(t,i){for(var s=i+"Capture",o=[];t!==null;){var c=t,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=ks(t,s),c!=null&&o.unshift(Ao(t,c,d)),c=ks(t,i),c!=null&&o.push(Ao(t,c,d))),t.tag===3)return o;t=t.return}return[]}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bv(t,i,s,o,c){for(var d=i._reactName,M=[];s!==null&&s!==o;){var R=s,F=R.alternate,ee=R.stateNode;if(R=R.tag,F!==null&&F===o)break;R!==5&&R!==26&&R!==27||ee===null||(F=ee,c?(ee=ks(s,d),ee!=null&&M.unshift(Ao(s,ee,F))):c||(ee=ks(s,d),ee!=null&&M.push(Ao(s,ee,F)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var dS=/\r\n?/g,pS=/\u0000|\uFFFD/g;function Tv(t){return(typeof t=="string"?t:""+t).replace(dS,`
`).replace(pS,"")}function Av(t,i){return i=Tv(i),Tv(t)===i}function au(){}function Ot(t,i,s,o,c,d){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Vn(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Vn(t,""+o);break;case"className":Ge(t,"class",o);break;case"tabIndex":Ge(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ge(t,s,o);break;case"style":wp(t,o,d);break;case"data":if(i!=="object"){Ge(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=hl(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Ot(t,i,"name",c.name,c,null),Ot(t,i,"formEncType",c.formEncType,c,null),Ot(t,i,"formMethod",c.formMethod,c,null),Ot(t,i,"formTarget",c.formTarget,c,null)):(Ot(t,i,"encType",c.encType,c,null),Ot(t,i,"method",c.method,c,null),Ot(t,i,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=hl(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=au);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=hl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Le(t,"popover",o);break;case"xlinkActuate":Pe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Le(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Xx.get(s)||s,Le(t,s,o))}}function rh(t,i,s,o,c,d){switch(s){case"style":wp(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof o=="string"?Vn(t,o):(typeof o=="number"||typeof o=="bigint")&&Vn(t,""+o);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=au);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fl.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(c=s.endsWith("Capture"),i=s.slice(2,c?s.length-7:void 0),d=t[Jt]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,o,c);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):Le(t,s,o)}}}function Cn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var o=!1,c=!1,d;for(d in s)if(s.hasOwnProperty(d)){var M=s[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Ot(t,i,d,M,s,null)}}c&&Ot(t,i,"srcSet",s.srcSet,s,null),o&&Ot(t,i,"src",s.src,s,null);return;case"input":xt("invalid",t);var R=d=M=c=null,F=null,ee=null;for(o in s)if(s.hasOwnProperty(o)){var ge=s[o];if(ge!=null)switch(o){case"name":c=ge;break;case"type":M=ge;break;case"checked":F=ge;break;case"defaultChecked":ee=ge;break;case"value":d=ge;break;case"defaultValue":R=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,i));break;default:Ot(t,i,o,ge,s,null)}}Fn(t,d,R,F,ee,M,c,!1),vt(t);return;case"select":xt("invalid",t),o=M=d=null;for(c in s)if(s.hasOwnProperty(c)&&(R=s[c],R!=null))switch(c){case"value":d=R;break;case"defaultValue":M=R;break;case"multiple":o=R;default:Ot(t,i,c,R,s,null)}i=d,s=M,t.multiple=!!o,i!=null?$t(t,!!o,i,!1):s!=null&&$t(t,!!o,s,!0);return;case"textarea":xt("invalid",t),d=c=o=null;for(M in s)if(s.hasOwnProperty(M)&&(R=s[M],R!=null))switch(M){case"value":o=R;break;case"defaultValue":c=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Ot(t,i,M,R,s,null)}Fr(t,o,c,d),vt(t);return;case"option":for(F in s)if(s.hasOwnProperty(F)&&(o=s[F],o!=null))switch(F){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ot(t,i,F,o,s,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(o=0;o<To.length;o++)xt(To[o],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in s)if(s.hasOwnProperty(ee)&&(o=s[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Ot(t,i,ee,o,s,null)}return;default:if(yc(i)){for(ge in s)s.hasOwnProperty(ge)&&(o=s[ge],o!==void 0&&rh(t,i,ge,o,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(o=s[R],o!=null&&Ot(t,i,R,o,s,null))}function mS(t,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,M=null,R=null,F=null,ee=null,ge=null;for(ae in s){var Se=s[ae];if(s.hasOwnProperty(ae)&&Se!=null)switch(ae){case"checked":break;case"value":break;case"defaultValue":F=Se;default:o.hasOwnProperty(ae)||Ot(t,i,ae,null,o,Se)}}for(var ie in o){var ae=o[ie];if(Se=s[ie],o.hasOwnProperty(ie)&&(ae!=null||Se!=null))switch(ie){case"type":d=ae;break;case"name":c=ae;break;case"checked":ee=ae;break;case"defaultChecked":ge=ae;break;case"value":M=ae;break;case"defaultValue":R=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,i));break;default:ae!==Se&&Ot(t,i,ie,ae,o,Se)}}zt(t,M,R,F,ee,ge,d,c);return;case"select":ae=M=R=ie=null;for(d in s)if(F=s[d],s.hasOwnProperty(d)&&F!=null)switch(d){case"value":break;case"multiple":ae=F;default:o.hasOwnProperty(d)||Ot(t,i,d,null,o,F)}for(c in o)if(d=o[c],F=s[c],o.hasOwnProperty(c)&&(d!=null||F!=null))switch(c){case"value":ie=d;break;case"defaultValue":R=d;break;case"multiple":M=d;default:d!==F&&Ot(t,i,c,d,o,F)}i=R,s=M,o=ae,ie!=null?$t(t,!!s,ie,!1):!!o!=!!s&&(i!=null?$t(t,!!s,i,!0):$t(t,!!s,s?[]:"",!1));return;case"textarea":ae=ie=null;for(R in s)if(c=s[R],s.hasOwnProperty(R)&&c!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ot(t,i,R,null,o,c)}for(M in o)if(c=o[M],d=s[M],o.hasOwnProperty(M)&&(c!=null||d!=null))switch(M){case"value":ie=c;break;case"defaultValue":ae=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==d&&Ot(t,i,M,c,o,d)}An(t,ie,ae);return;case"option":for(var rt in s)if(ie=s[rt],s.hasOwnProperty(rt)&&ie!=null&&!o.hasOwnProperty(rt))switch(rt){case"selected":t.selected=!1;break;default:Ot(t,i,rt,null,o,ie)}for(F in o)if(ie=o[F],ae=s[F],o.hasOwnProperty(F)&&ie!==ae&&(ie!=null||ae!=null))switch(F){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Ot(t,i,F,ie,o,ae)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in s)ie=s[tt],s.hasOwnProperty(tt)&&ie!=null&&!o.hasOwnProperty(tt)&&Ot(t,i,tt,null,o,ie);for(ee in o)if(ie=o[ee],ae=s[ee],o.hasOwnProperty(ee)&&ie!==ae&&(ie!=null||ae!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,i));break;default:Ot(t,i,ee,ie,o,ae)}return;default:if(yc(i)){for(var Pt in s)ie=s[Pt],s.hasOwnProperty(Pt)&&ie!==void 0&&!o.hasOwnProperty(Pt)&&rh(t,i,Pt,void 0,o,ie);for(ge in o)ie=o[ge],ae=s[ge],!o.hasOwnProperty(ge)||ie===ae||ie===void 0&&ae===void 0||rh(t,i,ge,ie,o,ae);return}}for(var K in s)ie=s[K],s.hasOwnProperty(K)&&ie!=null&&!o.hasOwnProperty(K)&&Ot(t,i,K,null,o,ie);for(Se in o)ie=o[Se],ae=s[Se],!o.hasOwnProperty(Se)||ie===ae||ie==null&&ae==null||Ot(t,i,Se,ie,o,ae)}var sh=null,oh=null;function ru(t){return t.nodeType===9?t:t.ownerDocument}function Rv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function lh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var uh=null;function gS(){var t=window.event;return t&&t.type==="popstate"?t===uh?!1:(uh=t,!0):(uh=null,!1)}var Cv=typeof setTimeout=="function"?setTimeout:void 0,vS=typeof clearTimeout=="function"?clearTimeout:void 0,Dv=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof Dv<"u"?function(t){return Dv.resolve(null).then(t).catch(xS)}:Cv;function xS(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function Uv(t,i){var s=i,o=0,c=0;do{var d=s.nextSibling;if(t.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<o&&8>o){s=o;var M=t.ownerDocument;if(s&1&&Ro(M.documentElement),s&2&&Ro(M.body),s&4)for(s=M.head,Ro(s),M=s.firstChild;M;){var R=M.nextSibling,F=M.nodeName;M[Di]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=R}}if(c===0){t.removeChild(d),Po(i);return}c--}else s==="$"||s==="$?"||s==="$!"?c++:o=s.charCodeAt(0)-48;else o=0;s=d}while(s);Po(i)}function ch(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ch(s),Ir(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function yS(t,i,s,o){for(;t.nodeType===1;){var c=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Di])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function SS(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Mi(t.nextSibling),t===null))return null;return t}function fh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function MS(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Mi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var hh=null;function Nv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function Lv(t,i,s){switch(i=ru(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ro(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ir(t)}var di=new Map,Ov=new Set;function su(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var aa=W.d;W.d={f:ES,r:bS,D:TS,C:AS,L:RS,m:wS,X:DS,S:CS,M:US};function ES(){var t=aa.f(),i=Ql();return t||i}function bS(t){var i=xa(t);i!==null&&i.tag===5&&i.type==="form"?eg(i):aa.r(t)}var hs=typeof document>"u"?null:document;function Pv(t,i,s){var o=hs;if(o&&typeof i=="string"&&i){var c=yn(i);c='link[rel="'+t+'"][href="'+c+'"]',typeof s=="string"&&(c+='[crossorigin="'+s+'"]'),Ov.has(c)||(Ov.add(c),t={rel:t,crossOrigin:s,href:i},o.querySelector(c)===null&&(i=o.createElement("link"),Cn(i,"link",t),un(i),o.head.appendChild(i)))}}function TS(t){aa.D(t),Pv("dns-prefetch",t,null)}function AS(t,i){aa.C(t,i),Pv("preconnect",t,i)}function RS(t,i,s){aa.L(t,i,s);var o=hs;if(o&&t&&i){var c='link[rel="preload"][as="'+yn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(c+='[imagesrcset="'+yn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(c+='[imagesizes="'+yn(s.imageSizes)+'"]')):c+='[href="'+yn(t)+'"]';var d=c;switch(i){case"style":d=ds(t);break;case"script":d=ps(t)}di.has(d)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),di.set(d,t),o.querySelector(c)!==null||i==="style"&&o.querySelector(wo(d))||i==="script"&&o.querySelector(Co(d))||(i=o.createElement("link"),Cn(i,"link",t),un(i),o.head.appendChild(i)))}}function wS(t,i){aa.m(t,i);var s=hs;if(s&&t){var o=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+yn(o)+'"][href="'+yn(t)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ps(t)}if(!di.has(d)&&(t=g({rel:"modulepreload",href:t},i),di.set(d,t),s.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Co(d)))return}o=s.createElement("link"),Cn(o,"link",t),un(o),s.head.appendChild(o)}}}function CS(t,i,s){aa.S(t,i,s);var o=hs;if(o&&t){var c=ya(o).hoistableStyles,d=ds(t);i=i||"default";var M=c.get(d);if(!M){var R={loading:0,preload:null};if(M=o.querySelector(wo(d)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=di.get(d))&&dh(t,s);var F=M=o.createElement("link");un(F),Cn(F,"link",t),F._p=new Promise(function(ee,ge){F.onload=ee,F.onerror=ge}),F.addEventListener("load",function(){R.loading|=1}),F.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ou(M,i,o)}M={type:"stylesheet",instance:M,count:1,state:R},c.set(d,M)}}}function DS(t,i){aa.X(t,i);var s=hs;if(s&&t){var o=ya(s).hoistableScripts,c=ps(t),d=o.get(c);d||(d=s.querySelector(Co(c)),d||(t=g({src:t,async:!0},i),(i=di.get(c))&&ph(t,i),d=s.createElement("script"),un(d),Cn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function US(t,i){aa.M(t,i);var s=hs;if(s&&t){var o=ya(s).hoistableScripts,c=ps(t),d=o.get(c);d||(d=s.querySelector(Co(c)),d||(t=g({src:t,async:!0,type:"module"},i),(i=di.get(c))&&ph(t,i),d=s.createElement("script"),un(d),Cn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function Iv(t,i,s,o){var c=(c=J.current)?su(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=ds(s.href),s=ya(c).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=ds(s.href);var d=ya(c).hoistableStyles,M=d.get(t);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,M),(d=c.querySelector(wo(t)))&&!d._p&&(M.instance=d,M.state.loading=5),di.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},di.set(t,s),d||NS(c,t,s,M.state))),i&&o===null)throw Error(r(528,""));return M}if(i&&o!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ps(s),s=ya(c).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ds(t){return'href="'+yn(t)+'"'}function wo(t){return'link[rel="stylesheet"]['+t+"]"}function Fv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function NS(t,i,s,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Cn(i,"link",s),un(i),t.head.appendChild(i))}function ps(t){return'[src="'+yn(t)+'"]'}function Co(t){return"script[async]"+t}function Bv(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+yn(s.href)+'"]');if(o)return i.instance=o,un(o),o;var c=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),un(o),Cn(o,"style",c),ou(o,s.precedence,t),i.instance=o;case"stylesheet":c=ds(s.href);var d=t.querySelector(wo(c));if(d)return i.state.loading|=4,i.instance=d,un(d),d;o=Fv(s),(c=di.get(c))&&dh(o,c),d=(t.ownerDocument||t).createElement("link"),un(d);var M=d;return M._p=new Promise(function(R,F){M.onload=R,M.onerror=F}),Cn(d,"link",o),i.state.loading|=4,ou(d,s.precedence,t),i.instance=d;case"script":return d=ps(s.src),(c=t.querySelector(Co(d)))?(i.instance=c,un(c),c):(o=s,(c=di.get(d))&&(o=g({},s),ph(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),un(c),Cn(c,"link",o),t.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,ou(o,s.precedence,t));return i.instance}function ou(t,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,M=0;M<o.length;M++){var R=o[M];if(R.dataset.precedence===i)d=R;else if(d!==c)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function dh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function ph(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var lu=null;function zv(t,i,s){if(lu===null){var o=new Map,c=lu=new Map;c.set(s,o)}else c=lu,o=c.get(s),o||(o=new Map,c.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),c=0;c<s.length;c++){var d=s[c];if(!(d[Di]||d[mn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(i)||"";M=t+M;var R=o.get(M);R?R.push(d):o.set(M,[d])}}return o}function Hv(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function LS(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Gv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Do=null;function OS(){}function PS(t,i,s){if(Do===null)throw Error(r(475));var o=Do;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=ds(s.href),d=t.querySelector(wo(c));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=uu.bind(o),t.then(o,o)),i.state.loading|=4,i.instance=d,un(d);return}d=t.ownerDocument||t,s=Fv(s),(c=di.get(c))&&dh(s,c),d=d.createElement("link"),un(d);var M=d;M._p=new Promise(function(R,F){M.onload=R,M.onerror=F}),Cn(d,"link",s),i.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=uu.bind(o),t.addEventListener("load",i),t.addEventListener("error",i))}}function IS(){if(Do===null)throw Error(r(475));var t=Do;return t.stylesheets&&t.count===0&&mh(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&mh(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function uu(){if(this.count--,this.count===0){if(this.stylesheets)mh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cu=null;function mh(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cu=new Map,i.forEach(FS,t),cu=null,uu.call(t))}function FS(t,i){if(!(i.state.loading&4)){var s=cu.get(t);if(s)var o=s.get(null);else{s=new Map,cu.set(t,s);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var M=c[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),o=M)}o&&s.set(null,o)}c=i.instance,M=c.getAttribute("data-precedence"),d=s.get(M)||o,d===o&&s.set(null,c),s.set(M,c),this.count++,o=uu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),i.state.loading|=4}}var Uo={$$typeof:L,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function BS(t,i,s,o,c,d,M,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function Vv(t,i,s,o,c,d,M,R,F,ee,ge,Se){return t=new BS(t,i,s,M,R,F,ee,Se),i=1,d===!0&&(i|=24),d=Jn(3,null,null,i),t.current=d,d.stateNode=t,i=Zc(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:i},$c(d),t}function kv(t){return t?(t=Wr,t):Wr}function Xv(t,i,s,o,c,d){c=kv(c),o.context===null?o.context=c:o.pendingContext=c,o=ba(i),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=Ta(t,o,i),s!==null&&(ii(s,t,i),so(s,t,i))}function Wv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function gh(t,i){Wv(t,i),(t=t.alternate)&&Wv(t,i)}function qv(t){if(t.tag===13){var i=Xr(t,67108864);i!==null&&ii(i,t,67108864),gh(t,67108864)}}var fu=!0;function zS(t,i,s,o){var c=I.T;I.T=null;var d=W.p;try{W.p=2,vh(t,i,s,o)}finally{W.p=d,I.T=c}}function HS(t,i,s,o){var c=I.T;I.T=null;var d=W.p;try{W.p=8,vh(t,i,s,o)}finally{W.p=d,I.T=c}}function vh(t,i,s,o){if(fu){var c=_h(o);if(c===null)ah(t,i,o,hu,s),Yv(t,o);else if(VS(c,t,i,s,o))o.stopPropagation();else if(Yv(t,o),i&4&&-1<GS.indexOf(t)){for(;c!==null;){var d=xa(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Je(d.pendingLanes);if(M!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;M;){var F=1<<31-Be(M);R.entanglements[1]|=F,M&=~F}Pi(d),(Ct&6)===0&&(Zl=Fe()+500,bo(0))}}break;case 13:R=Xr(d,2),R!==null&&ii(R,d,2),Ql(),gh(d,2)}if(d=_h(o),d===null&&ah(t,i,o,hu,s),d===c)break;c=d}c!==null&&o.stopPropagation()}else ah(t,i,o,null,s)}}function _h(t){return t=Mc(t),xh(t)}var hu=null;function xh(t){if(hu=null,t=Xi(t),t!==null){var i=u(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return hu=t,null}function jv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case Xe:return 2;case lt:return 8;case Yt:case Zt:return 32;case O:return 268435456;default:return 32}default:return 32}}var yh=!1,Ba=null,za=null,Ha=null,No=new Map,Lo=new Map,Ga=[],GS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yv(t,i){switch(t){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":No.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(i.pointerId)}}function Oo(t,i,s,o,c,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},i!==null&&(i=xa(i),i!==null&&qv(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function VS(t,i,s,o,c){switch(i){case"focusin":return Ba=Oo(Ba,t,i,s,o,c),!0;case"dragenter":return za=Oo(za,t,i,s,o,c),!0;case"mouseover":return Ha=Oo(Ha,t,i,s,o,c),!0;case"pointerover":var d=c.pointerId;return No.set(d,Oo(No.get(d)||null,t,i,s,o,c)),!0;case"gotpointercapture":return d=c.pointerId,Lo.set(d,Oo(Lo.get(d)||null,t,i,s,o,c)),!0}return!1}function Zv(t){var i=Xi(t.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,_i(t.priority,function(){if(s.tag===13){var o=ni();o=st(o);var c=Xr(s,o);c!==null&&ii(c,s,o),gh(s,o)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function du(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=_h(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);Sc=o,s.target.dispatchEvent(o),Sc=null}else return i=xa(s),i!==null&&qv(i),t.blockedOn=s,!1;i.shift()}return!0}function Kv(t,i,s){du(t)&&s.delete(i)}function kS(){yh=!1,Ba!==null&&du(Ba)&&(Ba=null),za!==null&&du(za)&&(za=null),Ha!==null&&du(Ha)&&(Ha=null),No.forEach(Kv),Lo.forEach(Kv)}function pu(t,i){t.blockedOn===i&&(t.blockedOn=null,yh||(yh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,kS)))}var mu=null;function Qv(t){mu!==t&&(mu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){mu===t&&(mu=null);for(var i=0;i<t.length;i+=3){var s=t[i],o=t[i+1],c=t[i+2];if(typeof o!="function"){if(xh(o||s)===null)continue;break}var d=xa(s);d!==null&&(t.splice(i,3),i-=3,xf(d,{pending:!0,data:c,method:s.method,action:o},o,c))}}))}function Po(t){function i(F){return pu(F,t)}Ba!==null&&pu(Ba,t),za!==null&&pu(za,t),Ha!==null&&pu(Ha,t),No.forEach(i),Lo.forEach(i);for(var s=0;s<Ga.length;s++){var o=Ga[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ga.length&&(s=Ga[0],s.blockedOn===null);)Zv(s),s.blockedOn===null&&Ga.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var c=s[o],d=s[o+1],M=c[Jt]||null;if(typeof d=="function")M||Qv(s);else if(M){var R=null;if(d&&d.hasAttribute("formAction")){if(c=d,M=d[Jt]||null)R=M.formAction;else if(xh(c)!==null)continue}else R=M.action;typeof R=="function"?s[o+1]=R:(s.splice(o,3),o-=3),Qv(s)}}}function Sh(t){this._internalRoot=t}gu.prototype.render=Sh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,o=ni();Xv(s,o,t,i,null,null)},gu.prototype.unmount=Sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Xv(t.current,2,null,t,null,null),Ql(),i[Ci]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var i=Et();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Ga.length&&i!==0&&i<Ga[s].priority;s++);Ga.splice(s,0,t),s===0&&Zv(t)}};var Jv=e.version;if(Jv!=="19.1.1")throw Error(r(527,Jv,"19.1.1"));W.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(i),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var XS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{pe=vu.inject(XS),ye=vu}catch{}}return Fo.createRoot=function(t,i){if(!l(t))throw Error(r(299));var s=!1,o="",c=pg,d=mg,M=gg,R=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(R=i.unstable_transitionCallbacks)),i=Vv(t,1,!1,null,null,s,o,c,d,M,R,null),t[Ci]=i.current,ih(t),new Sh(i)},Fo.hydrateRoot=function(t,i,s){if(!l(t))throw Error(r(299));var o=!1,c="",d=pg,M=mg,R=gg,F=null,ee=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(F=s.unstable_transitionCallbacks),s.formState!==void 0&&(ee=s.formState)),i=Vv(t,1,!0,i,s??null,o,c,d,M,R,F,ee),i.context=kv(null),s=i.current,o=ni(),o=st(o),c=ba(o),c.callback=null,Ta(s,c,o),s=o,i.current.lanes=s,ze(i,s),Pi(i),t[Ci]=i.current,ih(t),new gu(i)},Fo.version="19.1.1",Fo}var l_;function eM(){if(l_)return bh.exports;l_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),bh.exports=$S(),bh.exports}var tM=eM();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var u_="popstate";function nM(a={}){function e(r,l){let{pathname:u,search:f,hash:h}=r.location;return dd("",{pathname:u,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:qo(l)}return aM(e,n,null,a)}function Qt(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function Hi(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iM(){return Math.random().toString(36).substring(2,10)}function c_(a,e){return{usr:a.state,key:a.key,idx:e}}function dd(a,e,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Bs(e):e,state:n,key:e&&e.key||r||iM()}}function qo({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function Bs(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function aM(a,e,n,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,h="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function v(){h="POP";let y=g(),_=y==null?null:y-p;p=y,m&&m({action:h,location:b.location,delta:_})}function x(y,_){h="PUSH";let N=dd(b.location,y,_);p=g()+1;let L=c_(N,p),U=b.createHref(N);try{f.pushState(L,"",U)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;l.location.assign(U)}u&&m&&m({action:h,location:b.location,delta:1})}function S(y,_){h="REPLACE";let N=dd(b.location,y,_);p=g();let L=c_(N,p),U=b.createHref(N);f.replaceState(L,"",U),u&&m&&m({action:h,location:b.location,delta:0})}function E(y){return rM(y)}let b={get action(){return h},get location(){return a(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(u_,v),m=y,()=>{l.removeEventListener(u_,v),m=null}},createHref(y){return e(l,y)},createURL:E,encodeLocation(y){let _=E(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:S,go(y){return f.go(y)}};return b}function rM(a,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:qo(a);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function N0(a,e,n="/"){return sM(a,e,n,!1)}function sM(a,e,n,r){let l=typeof e=="string"?Bs(e):e,u=ga(l.pathname||"/",n);if(u==null)return null;let f=L0(a);oM(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=_M(u);h=gM(f[m],p,r)}return h}function L0(a,e=[],n=[],r="",l=!1){let u=(f,h,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;Qt(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=pa([r,g.relativePath]),x=n.concat(g);f.children&&f.children.length>0&&(Qt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),L0(f.children,e,x,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:pM(v,f.index),routesMeta:x})};return a.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))u(f,h);else for(let m of O0(f.path))u(f,h,!0,m)}),e}function O0(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,l=n.endsWith("?"),u=n.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=O0(r.join("/")),h=[];return h.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&h.push(...f),h.map(m=>a.startsWith("/")&&m===""?"/":m)}function oM(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:mM(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var lM=/^:[\w-]+$/,uM=3,cM=2,fM=1,hM=10,dM=-2,f_=a=>a==="*";function pM(a,e){let n=a.split("/"),r=n.length;return n.some(f_)&&(r+=dM),e&&(r+=cM),n.filter(l=>!f_(l)).reduce((l,u)=>l+(lM.test(u)?uM:u===""?fM:hM),r)}function mM(a,e){return a.length===e.length&&a.slice(0,-1).every((r,l)=>r===e[l])?a[a.length-1]-e[e.length-1]:0}function gM(a,e,n=!1){let{routesMeta:r}=a,l={},u="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",v=tc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),x=m.route;if(!v&&p&&n&&!r[r.length-1].route.index&&(v=tc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:pa([u,v.pathname]),pathnameBase:MM(pa([u,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(u=pa([u,v.pathnameBase]))}return f}function tc(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=vM(a.path,a.caseSensitive,a.end),l=e.match(n);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},x)=>{if(g==="*"){let E=h[x]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const S=h[x];return v&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:a}}function vM(a,e=!1,n=!0){Hi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(r.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function _M(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function ga(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}function xM(a,e="/"){let{pathname:n,search:r="",hash:l=""}=typeof a=="string"?Bs(a):a;return{pathname:n?n.startsWith("/")?n:yM(n,e):e,search:EM(r),hash:bM(l)}}function yM(a,e){let n=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function wh(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function SM(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function P0(a){let e=SM(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function I0(a,e,n,r=!1){let l;typeof a=="string"?l=Bs(a):(l={...a},Qt(!l.pathname||!l.pathname.includes("?"),wh("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),wh("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),wh("#","search","hash",l)));let u=a===""||l.pathname==="",f=u?"/":l.pathname,h;if(f==null)h=n;else{let v=e.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),v-=1;l.pathname=x.join("/")}h=v>=0?e[v]:"/"}let m=xM(l,h),p=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var pa=a=>a.join("/").replace(/\/\/+/g,"/"),MM=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),EM=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,bM=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function TM(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var F0=["POST","PUT","PATCH","DELETE"];new Set(F0);var AM=["GET",...F0];new Set(AM);var zs=de.createContext(null);zs.displayName="DataRouter";var fc=de.createContext(null);fc.displayName="DataRouterState";de.createContext(!1);var B0=de.createContext({isTransitioning:!1});B0.displayName="ViewTransition";var RM=de.createContext(new Map);RM.displayName="Fetchers";var wM=de.createContext(null);wM.displayName="Await";var Gi=de.createContext(null);Gi.displayName="Navigation";var el=de.createContext(null);el.displayName="Location";var Vi=de.createContext({outlet:null,matches:[],isDataRoute:!1});Vi.displayName="Route";var up=de.createContext(null);up.displayName="RouteError";function CM(a,{relative:e}={}){Qt(tl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=de.useContext(Gi),{hash:l,pathname:u,search:f}=nl(a,{relative:e}),h=u;return n!=="/"&&(h=u==="/"?n:pa([n,u])),r.createHref({pathname:h,search:f,hash:l})}function tl(){return de.useContext(el)!=null}function Nr(){return Qt(tl(),"useLocation() may be used only in the context of a <Router> component."),de.useContext(el).location}var z0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function H0(a){de.useContext(Gi).static||de.useLayoutEffect(a)}function DM(){let{isDataRoute:a}=de.useContext(Vi);return a?XM():UM()}function UM(){Qt(tl(),"useNavigate() may be used only in the context of a <Router> component.");let a=de.useContext(zs),{basename:e,navigator:n}=de.useContext(Gi),{matches:r}=de.useContext(Vi),{pathname:l}=Nr(),u=JSON.stringify(P0(r)),f=de.useRef(!1);return H0(()=>{f.current=!0}),de.useCallback((m,p={})=>{if(Hi(f.current,z0),!f.current)return;if(typeof m=="number"){n.go(m);return}let g=I0(m,JSON.parse(u),l,p.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:pa([e,g.pathname])),(p.replace?n.replace:n.push)(g,p.state,p)},[e,n,u,l,a])}de.createContext(null);function NM(){let{matches:a}=de.useContext(Vi),e=a[a.length-1];return e?e.params:{}}function nl(a,{relative:e}={}){let{matches:n}=de.useContext(Vi),{pathname:r}=Nr(),l=JSON.stringify(P0(n));return de.useMemo(()=>I0(a,JSON.parse(l),r,e==="path"),[a,l,r,e])}function LM(a,e){return G0(a,e)}function G0(a,e,n,r,l){Qt(tl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=de.useContext(Gi),{matches:f}=de.useContext(Vi),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",v=h&&h.route;{let N=v&&v.path||"";V0(p,!v||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let x=Nr(),S;if(e){let N=typeof e=="string"?Bs(e):e;Qt(g==="/"||N.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${N.pathname}" was given in the \`location\` prop.`),S=N}else S=x;let E=S.pathname||"/",b=E;if(g!=="/"){let N=g.replace(/^\//,"").split("/");b="/"+E.replace(/^\//,"").split("/").slice(N.length).join("/")}let y=N0(a,{pathname:b});Hi(v||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Hi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=BM(y&&y.map(N=>Object.assign({},N,{params:Object.assign({},m,N.params),pathname:pa([g,u.encodeLocation?u.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?g:pa([g,u.encodeLocation?u.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),f,n,r,l);return e&&_?de.createElement(el.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},_):_}function OM(){let a=kM(),e=TM(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=de.createElement(de.Fragment,null,de.createElement("p",null,"💿 Hey developer 👋"),de.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",de.createElement("code",{style:u},"ErrorBoundary")," or"," ",de.createElement("code",{style:u},"errorElement")," prop on your route.")),de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),n?de.createElement("pre",{style:l},n):null,f)}var PM=de.createElement(OM,null),IM=class extends de.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.unstable_onError?this.props.unstable_onError(a,e):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?de.createElement(Vi.Provider,{value:this.props.routeContext},de.createElement(up.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function FM({routeContext:a,match:e,children:n}){let r=de.useContext(zs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),de.createElement(Vi.Provider,{value:a},n)}function BM(a,e=[],n=null,r=null,l=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let u=a,f=n?.errors;if(f!=null){let p=u.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Qt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,p+1))}let h=!1,m=-1;if(n)for(let p=0;p<u.length;p++){let g=u[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:v,errors:x}=n,S=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||S){h=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((p,g,v)=>{let x,S=!1,E=null,b=null;n&&(x=f&&g.route.id?f[g.route.id]:void 0,E=g.route.errorElement||PM,h&&(m<0&&v===0?(V0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,b=null):m===v&&(S=!0,b=g.route.hydrateFallbackElement||null)));let y=e.concat(u.slice(0,v+1)),_=()=>{let N;return x?N=E:S?N=b:g.route.Component?N=de.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=p,de.createElement(FM,{match:g,routeContext:{outlet:p,matches:y,isDataRoute:n!=null},children:N})};return n&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?de.createElement(IM,{location:n.location,revalidation:n.revalidation,component:E,error:x,children:_(),routeContext:{outlet:null,matches:y,isDataRoute:!0},unstable_onError:r}):_()},null)}function cp(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zM(a){let e=de.useContext(zs);return Qt(e,cp(a)),e}function HM(a){let e=de.useContext(fc);return Qt(e,cp(a)),e}function GM(a){let e=de.useContext(Vi);return Qt(e,cp(a)),e}function fp(a){let e=GM(a),n=e.matches[e.matches.length-1];return Qt(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function VM(){return fp("useRouteId")}function kM(){let a=de.useContext(up),e=HM("useRouteError"),n=fp("useRouteError");return a!==void 0?a:e.errors?.[n]}function XM(){let{router:a}=zM("useNavigate"),e=fp("useNavigate"),n=de.useRef(!1);return H0(()=>{n.current=!0}),de.useCallback(async(l,u={})=>{Hi(n.current,z0),n.current&&(typeof l=="number"?a.navigate(l):await a.navigate(l,{fromRouteId:e,...u}))},[a,e])}var h_={};function V0(a,e,n){!e&&!h_[a]&&(h_[a]=!0,Hi(!1,n))}de.memo(WM);function WM({routes:a,future:e,state:n,unstable_onError:r}){return G0(a,void 0,n,r,e)}function Za(a){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qM({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:l,static:u=!1}){Qt(!tl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),h=de.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof n=="string"&&(n=Bs(n));let{pathname:m="/",search:p="",hash:g="",state:v=null,key:x="default"}=n,S=de.useMemo(()=>{let E=ga(m,f);return E==null?null:{location:{pathname:E,search:p,hash:g,state:v,key:x},navigationType:r}},[f,m,p,g,v,x,r]);return Hi(S!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:de.createElement(Gi.Provider,{value:h},de.createElement(el.Provider,{children:e,value:S}))}function jM({children:a,location:e}){return LM(pd(a),e)}function pd(a,e=[]){let n=[];return de.Children.forEach(a,(r,l)=>{if(!de.isValidElement(r))return;let u=[...e,l];if(r.type===de.Fragment){n.push.apply(n,pd(r.props.children,u));return}Qt(r.type===Za,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=pd(r.props.children,u)),n.push(f)}),n}var qu="get",ju="application/x-www-form-urlencoded";function hc(a){return a!=null&&typeof a.tagName=="string"}function YM(a){return hc(a)&&a.tagName.toLowerCase()==="button"}function ZM(a){return hc(a)&&a.tagName.toLowerCase()==="form"}function KM(a){return hc(a)&&a.tagName.toLowerCase()==="input"}function QM(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function JM(a,e){return a.button===0&&(!e||e==="_self")&&!QM(a)}var _u=null;function $M(){if(_u===null)try{new FormData(document.createElement("form"),0),_u=!1}catch{_u=!0}return _u}var eE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ch(a){return a!=null&&!eE.has(a)?(Hi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ju}"`),null):a}function tE(a,e){let n,r,l,u,f;if(ZM(a)){let h=a.getAttribute("action");r=h?ga(h,e):null,n=a.getAttribute("method")||qu,l=Ch(a.getAttribute("enctype"))||ju,u=new FormData(a)}else if(YM(a)||KM(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||h.getAttribute("action");if(r=m?ga(m,e):null,n=a.getAttribute("formmethod")||h.getAttribute("method")||qu,l=Ch(a.getAttribute("formenctype"))||Ch(h.getAttribute("enctype"))||ju,u=new FormData(h,a),!$M()){let{name:p,type:g,value:v}=a;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,v)}}else{if(hc(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=qu,r=null,l=ju,f=a}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:n.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function hp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function nE(a,e,n){let r=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&ga(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function iE(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function aE(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function rE(a,e,n){let r=await Promise.all(a.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await iE(u,n);return f.links?f.links():[]}return[]}));return uE(r.flat(1).filter(aE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function d_(a,e,n,r,l,u){let f=(m,p)=>n[p]?m.route.id!==n[p].route.id:!0,h=(m,p)=>n[p].pathname!==m.pathname||n[p].route.path?.endsWith("*")&&n[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):u==="data"?e.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function sE(a,e,{includeHydrateFallback:n}={}){return oE(a.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function oE(a){return[...new Set(a)]}function lE(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function uE(a,e){let n=new Set;return new Set(e),a.reduce((r,l)=>{let u=JSON.stringify(lE(l));return n.has(u)||(n.add(u),r.push({key:u,link:l})),r},[])}function k0(){let a=de.useContext(zs);return hp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function cE(){let a=de.useContext(fc);return hp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var dp=de.createContext(void 0);dp.displayName="FrameworkContext";function X0(){let a=de.useContext(dp);return hp(a,"You must render this element inside a <HydratedRouter> element"),a}function fE(a,e){let n=de.useContext(dp),[r,l]=de.useState(!1),[u,f]=de.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,x=de.useRef(null);de.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let b=_=>{_.forEach(N=>{f(N.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[a]),de.useEffect(()=>{if(r){let b=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(b)}}},[r]);let S=()=>{l(!0)},E=()=>{l(!1),f(!1)};return n?a!=="intent"?[u,x,{}]:[u,x,{onFocus:Bo(h,S),onBlur:Bo(m,E),onMouseEnter:Bo(p,S),onMouseLeave:Bo(g,E),onTouchStart:Bo(v,S)}]:[!1,x,{}]}function Bo(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function hE({page:a,...e}){let{router:n}=k0(),r=de.useMemo(()=>N0(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?de.createElement(pE,{page:a,matches:r,...e}):null}function dE(a){let{manifest:e,routeModules:n}=X0(),[r,l]=de.useState([]);return de.useEffect(()=>{let u=!1;return rE(a,e,n).then(f=>{u||l(f)}),()=>{u=!0}},[a,e,n]),r}function pE({page:a,matches:e,...n}){let r=Nr(),{manifest:l,routeModules:u}=X0(),{basename:f}=k0(),{loaderData:h,matches:m}=cE(),p=de.useMemo(()=>d_(a,e,m,l,r,"data"),[a,e,m,l,r]),g=de.useMemo(()=>d_(a,e,m,l,r,"assets"),[a,e,m,l,r]),v=de.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let E=new Set,b=!1;if(e.forEach(_=>{let N=l.routes[_.route.id];!N||!N.hasLoader||(!p.some(L=>L.route.id===_.route.id)&&_.route.id in h&&u[_.route.id]?.shouldRevalidate||N.hasClientLoader?b=!0:E.add(_.route.id))}),E.size===0)return[];let y=nE(a,f,"data");return b&&E.size>0&&y.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[y.pathname+y.search]},[f,h,r,l,p,e,a,u]),x=de.useMemo(()=>sE(g,l),[g,l]),S=dE(g);return de.createElement(de.Fragment,null,v.map(E=>de.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...n})),x.map(E=>de.createElement("link",{key:E,rel:"modulepreload",href:E,...n})),S.map(({key:E,link:b})=>de.createElement("link",{key:E,nonce:n.nonce,...b})))}function mE(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var W0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{W0&&(window.__reactRouterVersion="7.9.1")}catch{}function gE({basename:a,children:e,window:n}){let r=de.useRef();r.current==null&&(r.current=nM({window:n,v5Compat:!0}));let l=r.current,[u,f]=de.useState({action:l.action,location:l.location}),h=de.useCallback(m=>{de.startTransition(()=>f(m))},[f]);return de.useLayoutEffect(()=>l.listen(h),[l,h]),de.createElement(qM,{basename:a,children:e,location:u.location,navigationType:u.action,navigator:l})}var q0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tn=de.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,state:h,target:m,to:p,preventScrollReset:g,viewTransition:v,...x},S){let{basename:E}=de.useContext(Gi),b=typeof p=="string"&&q0.test(p),y,_=!1;if(typeof p=="string"&&b&&(y=p,W0))try{let C=new URL(window.location.href),D=p.startsWith("//")?new URL(C.protocol+p):new URL(p),V=ga(D.pathname,E);D.origin===C.origin&&V!=null?p=V+D.search+D.hash:_=!0}catch{Hi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=CM(p,{relative:l}),[L,U,P]=fE(r,x),H=yE(p,{replace:f,state:h,target:m,preventScrollReset:g,relative:l,viewTransition:v});function z(C){e&&e(C),C.defaultPrevented||H(C)}let q=de.createElement("a",{...x,...P,href:y||N,onClick:_||u?e:z,ref:mE(S,U),target:m,"data-discover":!b&&n==="render"?"true":void 0});return L&&!b?de.createElement(de.Fragment,null,q,de.createElement(hE,{page:N})):q});Tn.displayName="Link";var vE=de.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:h,children:m,...p},g){let v=nl(f,{relative:p.relative}),x=Nr(),S=de.useContext(fc),{navigator:E,basename:b}=de.useContext(Gi),y=S!=null&&TE(v)&&h===!0,_=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,N=x.pathname,L=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(N=N.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&b&&(L=ga(L,b)||L);const U=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let P=N===_||!l&&N.startsWith(_)&&N.charAt(U)==="/",H=L!=null&&(L===_||!l&&L.startsWith(_)&&L.charAt(_.length)==="/"),z={isActive:P,isPending:H,isTransitioning:y},q=P?e:void 0,C;typeof r=="function"?C=r(z):C=[r,P?"active":null,H?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let D=typeof u=="function"?u(z):u;return de.createElement(Tn,{...p,"aria-current":q,className:C,ref:g,style:D,to:f,viewTransition:h},typeof m=="function"?m(z):m)});vE.displayName="NavLink";var _E=de.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:l,state:u,method:f=qu,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,...x},S)=>{let E=EE(),b=bE(h,{relative:p}),y=f.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&q0.test(h),N=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let U=L.nativeEvent.submitter,P=U?.getAttribute("formmethod")||f;E(U||L.currentTarget,{fetcherKey:e,method:P,navigate:n,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:v})};return de.createElement("form",{ref:S,method:y,action:b,onSubmit:r?m:N,...x,"data-discover":!_&&a==="render"?"true":void 0})});_E.displayName="Form";function xE(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function j0(a){let e=de.useContext(zs);return Qt(e,xE(a)),e}function yE(a,{target:e,replace:n,state:r,preventScrollReset:l,relative:u,viewTransition:f}={}){let h=DM(),m=Nr(),p=nl(a,{relative:u});return de.useCallback(g=>{if(JM(g,e)){g.preventDefault();let v=n!==void 0?n:qo(m)===qo(p);h(a,{replace:v,state:r,preventScrollReset:l,relative:u,viewTransition:f})}},[m,h,p,n,r,e,a,l,u,f])}var SE=0,ME=()=>`__${String(++SE)}__`;function EE(){let{router:a}=j0("useSubmit"),{basename:e}=de.useContext(Gi),n=VM();return de.useCallback(async(r,l={})=>{let{action:u,method:f,encType:h,formData:m,body:p}=tE(r,e);if(l.navigate===!1){let g=l.fetcherKey||ME();await a.fetch(g,n,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await a.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,e,n])}function bE(a,{relative:e}={}){let{basename:n}=de.useContext(Gi),r=de.useContext(Vi);Qt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...nl(a||".",{relative:e})},f=Nr();if(a==null){u.search=f.search;let h=new URLSearchParams(u.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(v=>v).forEach(v=>h.append("index",v));let g=h.toString();u.search=g?`?${g}`:""}}return(!a||a===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:pa([n,u.pathname])),qo(u)}function TE(a,{relative:e}={}){let n=de.useContext(B0);Qt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=j0("useViewTransitionState"),l=nl(a,{relative:e});if(!n.isTransitioning)return!1;let u=ga(n.currentLocation.pathname,r)||n.currentLocation.pathname,f=ga(n.nextLocation.pathname,r)||n.nextLocation.pathname;return tc(l.pathname,f)!=null||tc(l.pathname,u)!=null}const AE="Juma",RE="Altaitoon",wE="Software Engineer | Cybersecurity | ML",CE="A passionate software developer with a focus on full-stack development, cybersecurity, and machine learning. I enjoy solving complex problems and creating innovative solutions. My skills span from application development to securing systems and leveraging data science.",DE="Kingdom of Bahrain",UE="/Portfolio_avatar.png",NE=[{domain:"Software Development",items:["Python","JavaScript","Django","React","HTML5","CSS3","Material UI","Tailwind CSS","PostgreSQL","MongoDB","REST APIs"]},{domain:"Cybersecurity",items:["Network Security","Secure Software Development Lifecycle (SSDLC)","Linux Administration","Windows Administration"]},{domain:"Machine Learning",items:["Amazon Sagemaker","PyTorch","Scikit-learn"]},{domain:"Cloud Computing",items:["AWS","Docker","CI/CD"]}],LE=[{title:"AWS Certified Machine Learning - Specialty",issuer:"Amazon Web Services (AWS)",description:"Validates expertise in building, training, tuning, and deploying machine learning models on AWS Cloud.",badge:"certifications/AWS_ML_Specialty.png"},{title:"GIAC Certified Incident Handler (GCIH)",issuer:"GIAC",description:"Focuses on detecting, responding to, and resolving security incidents using real-world tools and techniques.",badge:"certifications/GCIH_badge.png"},{title:"GIAC Security Essentials (GSEC)",issuer:"GIAC",description:"Demonstrates hands-on knowledge of information security principles, including access control, cryptography, and network defense.",badge:"certifications/GSEC_badge.png"},{title:"GIAC Foundational Cybersecurity Technologies (GFACT)",issuer:"GIAC",description:"Covers core computing, networking, OS, and security fundamentals for entry-level cybersecurity professionals.",badge:"certifications/GFACT_badge.png"}],OE=["Machine Learning","Football","Cloud Computing","Cybersecurity Research"],PE="juma.altaitoon@gmail.com",IE="My short-term goal is to contribute to a major open-source project. My long-term goal is to lead a team of talented developers and build innovative products.",FE="https://github.com/juma-altaitoon",BE="https://www.linkedin.com/in/juma-altaitoon",zE="https://johndoe.com",nn={firstName:AE,lastName:RE,tagline:wE,bio:CE,location:DE,avatar:UE,skills:NE,certifications:LE,interests:OE,email:PE,goals:IE,githubUrl:FE,linkedinUrl:BE,websiteUrl:zE};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pp="180",HE=0,p_=1,GE=2,Y0=1,VE=2,ca=3,$a=0,Yn=1,fa=2,Qa=0,Us=1,m_=2,g_=3,v_=4,kE=5,Ar=100,XE=101,WE=102,qE=103,jE=104,YE=200,ZE=201,KE=202,QE=203,md=204,gd=205,JE=206,$E=207,eb=208,tb=209,nb=210,ib=211,ab=212,rb=213,sb=214,vd=0,_d=1,xd=2,Ls=3,yd=4,Sd=5,Md=6,Ed=7,Z0=0,ob=1,lb=2,Ja=0,ub=1,cb=2,fb=3,hb=4,db=5,pb=6,mb=7,K0=300,Os=301,Ps=302,bd=303,Td=304,dc=306,Ad=1e3,wr=1001,Rd=1002,wi=1003,gb=1004,xu=1005,Fi=1006,Dh=1007,Cr=1008,va=1009,Q0=1010,J0=1011,jo=1012,mp=1013,Dr=1014,ha=1015,il=1016,gp=1017,vp=1018,Yo=1020,$0=35902,ex=35899,tx=1021,nx=1022,Ri=1023,Zo=1026,Ko=1027,ix=1028,_p=1029,ax=1030,xp=1031,yp=1033,Yu=33776,Zu=33777,Ku=33778,Qu=33779,wd=35840,Cd=35841,Dd=35842,Ud=35843,Nd=36196,Ld=37492,Od=37496,Pd=37808,Id=37809,Fd=37810,Bd=37811,zd=37812,Hd=37813,Gd=37814,Vd=37815,kd=37816,Xd=37817,Wd=37818,qd=37819,jd=37820,Yd=37821,Zd=36492,Kd=36494,Qd=36495,Jd=36283,$d=36284,ep=36285,tp=36286,vb=3200,_b=3201,xb=0,yb=1,Ka="",mi="srgb",Is="srgb-linear",nc="linear",It="srgb",ms=7680,__=519,Sb=512,Mb=513,Eb=514,rx=515,bb=516,Tb=517,Ab=518,Rb=519,x_=35044,y_="300 es",Bi=2e3,ic=2001;class Hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(n);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ju=Math.PI/180,np=180/Math.PI;function al(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[a&255]+On[a>>8&255]+On[a>>16&255]+On[a>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[n&63|128]+On[n>>8&255]+"-"+On[n>>16&255]+On[n>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function yt(a,e,n){return Math.max(e,Math.min(n,a))}function wb(a,e){return(a%e+e)%e}function Uh(a,e,n){return(1-n)*a+n*e}function zo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function jn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(e=0,n=0){Bt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6],this.y=l[1]*n+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),l=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*l+e.x,this.y=u*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rl{constructor(e=0,n=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=l}static slerpFlat(e,n,r,l,u,f,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[f+0],S=u[f+1],E=u[f+2],b=u[f+3];if(h===0){e[n+0]=m,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(h===1){e[n+0]=x,e[n+1]=S,e[n+2]=E,e[n+3]=b;return}if(v!==b||m!==x||p!==S||g!==E){let y=1-h;const _=m*x+p*S+g*E+v*b,N=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const P=Math.sqrt(L),H=Math.atan2(P,_*N);y=Math.sin(y*H)/P,h=Math.sin(h*H)/P}const U=h*N;if(m=m*y+x*U,p=p*y+S*U,g=g*y+E*U,v=v*y+b*U,y===1-h){const P=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=P,p*=P,g*=P,v*=P}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,l,u,f){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[f],x=u[f+1],S=u[f+2],E=u[f+3];return e[n]=h*E+g*v+m*S-p*x,e[n+1]=m*E+g*x+p*v-h*S,e[n+2]=p*E+g*S+h*x-m*v,e[n+3]=g*E-h*v-m*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,l){return this._x=e,this._y=n,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,l=e._y,u=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(u/2),x=m(r/2),S=m(l/2),E=m(u/2);switch(f){case"XYZ":this._x=x*g*v+p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v-x*S*E;break;case"YXZ":this._x=x*g*v+p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v+x*S*E;break;case"ZXY":this._x=x*g*v-p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v-x*S*E;break;case"ZYX":this._x=x*g*v-p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v+x*S*E;break;case"YZX":this._x=x*g*v+p*S*E,this._y=p*S*v+x*g*E,this._z=p*g*E-x*S*v,this._w=p*g*v-x*S*E;break;case"XZY":this._x=x*g*v-p*S*E,this._y=p*S*v-x*g*E,this._z=p*g*E+x*S*v,this._w=p*g*v+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],l=n[4],u=n[8],f=n[1],h=n[5],m=n[9],p=n[2],g=n[6],v=n[10],x=r+h+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-m)*S,this._y=(u-p)*S,this._z=(f-l)*S}else if(r>h&&r>v){const S=2*Math.sqrt(1+r-h-v);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(u+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-r-v);this._w=(u-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+v-r-h);this._w=(f-l)/S,this._x=(u+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,n/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,l=e._y,u=e._z,f=e._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=r*g+f*h+l*p-u*m,this._y=l*g+f*m+u*h-r*p,this._z=u*g+f*p+r*m-l*h,this._w=f*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,f=this._w;let h=f*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*l+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-n)*g)/p,x=Math.sin(n*g)/p;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,n=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(S_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(S_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*l,this.y=u[1]*n+u[4]*r+u[7]*l,this.z=u[2]*n+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,l=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,l=this.z,u=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),g=2*(h*n-u*l),v=2*(u*r-f*n);return this.x=n+m*p+f*v-h*g,this.y=r+m*g+h*p-u*v,this.z=l+m*v+u*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*l,this.y=u[1]*n+u[5]*r+u[9]*l,this.z=u[2]*n+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,l=e.y,u=e.z,f=n.x,h=n.y,m=n.z;return this.x=l*m-u*h,this.y=u*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Nh.copy(this).projectOnVector(e),this.sub(Nh)}reflect(e){return this.sub(Nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return n*n+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const l=Math.sin(n)*e;return this.x=l*Math.sin(r),this.y=Math.cos(n)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=l,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nh=new re,S_=new rl;class ft{constructor(e,n,r,l,u,f,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,l,u,f,h,m,p)}set(e,n,r,l,u,f,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=n,g[4]=u,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,l=n.elements,u=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],S=r[5],E=r[8],b=l[0],y=l[3],_=l[6],N=l[1],L=l[4],U=l[7],P=l[2],H=l[5],z=l[8];return u[0]=f*b+h*N+m*P,u[3]=f*y+h*L+m*H,u[6]=f*_+h*U+m*z,u[1]=p*b+g*N+v*P,u[4]=p*y+g*L+v*H,u[7]=p*_+g*U+v*z,u[2]=x*b+S*N+E*P,u[5]=x*y+S*L+E*H,u[8]=x*_+S*U+E*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return n*f*g-n*h*p-r*u*g+r*h*m+l*u*p-l*f*m}invert(){const e=this.elements,n=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=g*f-h*p,x=h*m-g*u,S=p*u-f*m,E=n*v+r*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=v*b,e[1]=(l*p-g*r)*b,e[2]=(h*r-l*f)*b,e[3]=x*b,e[4]=(g*n-l*m)*b,e[5]=(l*u-h*n)*b,e[6]=S*b,e[7]=(r*m-p*n)*b,e[8]=(f*n-r*u)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,l,u,f,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Lh.makeScale(e,n)),this}rotate(e){return this.premultiply(Lh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let l=0;l<9;l++)if(n[l]!==r[l])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lh=new ft;function sx(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ac(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Cb(){const a=ac("canvas");return a.style.display="block",a}const M_={};function Qo(a){a in M_||(M_[a]=!0,console.warn(a))}function Db(a,e,n){return new Promise(function(r,l){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const E_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),b_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ub(){const a={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===It&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===It&&(l.r=Ns(l.r),l.g=Ns(l.g),l.b=Ns(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ka?nc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Qo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Qo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Is]:{primaries:e,whitePoint:r,transfer:nc,toXYZ:E_,fromXYZ:b_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:It,toXYZ:E_,fromXYZ:b_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),a}const At=Ub();function ma(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ns(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let gs;class Nb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{gs===void 0&&(gs=ac("canvas")),gs.width=e.width,gs.height=e.height;const l=gs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=gs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ac("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ma(u[f]/255)*255;return r.putImageData(l,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ma(n[r]/255)*255):n[r]=ma(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lb=0;class Sp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=al(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?u.push(Oh(l[f].image)):u.push(Oh(l[f]))}else u=Oh(l);r.url=u}return n||(e.images[this.uuid]=r),r}}function Oh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Nb.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ob=0;const Ph=new re;class Zn extends Hs{constructor(e=Zn.DEFAULT_IMAGE,n=Zn.DEFAULT_MAPPING,r=wr,l=wr,u=Fi,f=Cr,h=Ri,m=va,p=Zn.DEFAULT_ANISOTROPY,g=Ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=al(),this.name="",this.source=new Sp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ph).x}get height(){return this.source.getSize(Ph).y}get depth(){return this.source.getSize(Ph).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==K0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ad:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case Rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ad:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case Rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=K0;Zn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,n=0,r=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,l){return this.x=e,this.y=n,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],S=m[5],E=m[9],b=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-b)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+b)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(p+1)/2,U=(S+1)/2,P=(_+1)/2,H=(g+x)/4,z=(v+b)/4,q=(E+y)/4;return L>U&&L>P?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=H/r,u=z/r):U>P?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=H/l,u=q/l):P<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(P),r=z/u,l=q/u),this.set(r,l,u,n),this}let N=Math.sqrt((y-E)*(y-E)+(v-b)*(v-b)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(y-E)/N,this.y=(v-b)/N,this.z=(x-g)/N,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this.w=yt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this.w=yt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pb extends Hs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new sn(0,0,e,n),this.scissorTest=!1,this.viewport=new sn(0,0,e,n);const l={width:e,height:n,depth:r.depth},u=new Zn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Fi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=n,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},e.textures[n].image);this.textures[n].source=new Sp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends Pb{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class ox extends Zn{constructor(e=null,n=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:l},this.magFilter=wi,this.minFilter=wi,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ib extends Zn{constructor(e=null,n=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:l},this.magFilter=wi,this.minFilter=wi,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(e=new re(1/0,1/0,1/0),n=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ei):Ei.fromBufferAttribute(u,f),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yu.copy(r.boundingBox)),yu.applyMatrix4(e.matrixWorld),this.union(yu)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),Su.subVectors(this.max,Ho),vs.subVectors(e.a,Ho),_s.subVectors(e.b,Ho),xs.subVectors(e.c,Ho),ka.subVectors(_s,vs),Xa.subVectors(xs,_s),_r.subVectors(vs,xs);let n=[0,-ka.z,ka.y,0,-Xa.z,Xa.y,0,-_r.z,_r.y,ka.z,0,-ka.x,Xa.z,0,-Xa.x,_r.z,0,-_r.x,-ka.y,ka.x,0,-Xa.y,Xa.x,0,-_r.y,_r.x,0];return!Ih(n,vs,_s,xs,Su)||(n=[1,0,0,0,1,0,0,0,1],!Ih(n,vs,_s,xs,Su))?!1:(Mu.crossVectors(ka,Xa),n=[Mu.x,Mu.y,Mu.z],Ih(n,vs,_s,xs,Su))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ra=[new re,new re,new re,new re,new re,new re,new re,new re],Ei=new re,yu=new sl,vs=new re,_s=new re,xs=new re,ka=new re,Xa=new re,_r=new re,Ho=new re,Su=new re,Mu=new re,xr=new re;function Ih(a,e,n,r,l){for(let u=0,f=a.length-3;u<=f;u+=3){xr.fromArray(a,u);const h=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=e.dot(xr),p=n.dot(xr),g=r.dot(xr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const Fb=new sl,Go=new re,Fh=new re;class pc{constructor(e=new re,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Fb.setFromPoints(e).getCenter(r);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const n=Go.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),l=(r-this.radius)*.5;this.center.addScaledVector(Go,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Fh)),this.expandByPoint(Go.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const sa=new re,Bh=new re,Eu=new re,Wa=new re,zh=new re,bu=new re,Hh=new re;class lx{constructor(e=new re,n=new re(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=sa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(sa.copy(this.origin).addScaledVector(this.direction,n),sa.distanceToSquared(e))}distanceSqToSegment(e,n,r,l){Bh.copy(e).add(n).multiplyScalar(.5),Eu.copy(n).sub(e).normalize(),Wa.copy(this.origin).sub(Bh);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Eu),h=Wa.dot(this.direction),m=-Wa.dot(Eu),p=Wa.lengthSq(),g=Math.abs(1-f*f);let v,x,S,E;if(g>0)if(v=f*m-h,x=f*h-m,E=u*g,v>=0)if(x>=-E)if(x<=E){const b=1/g;v*=b,x*=b,S=v*(v+f*x+2*h)+x*(f*v+x+2*m)+p}else x=u,v=Math.max(0,-(f*x+h)),S=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(f*x+h)),S=-v*v+x*(x+2*m)+p;else x<=-E?(v=Math.max(0,-(-f*u+h)),x=v>0?-u:Math.min(Math.max(-u,-m),u),S=-v*v+x*(x+2*m)+p):x<=E?(v=0,x=Math.min(Math.max(-u,-m),u),S=x*(x+2*m)+p):(v=Math.max(0,-(f*u+h)),x=v>0?u:Math.min(Math.max(-u,-m),u),S=-v*v+x*(x+2*m)+p);else x=f>0?-u:u,v=Math.max(0,-(f*x+h)),S=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Bh).addScaledVector(Eu,x),S}intersectSphere(e,n){sa.subVectors(e.center,this.origin);const r=sa.dot(this.direction),l=sa.dot(sa)-r*r,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,l,u,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(h=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,n)}intersectsBox(e){return this.intersectBox(e,sa)!==null}intersectTriangle(e,n,r,l,u){zh.subVectors(n,e),bu.subVectors(r,e),Hh.crossVectors(zh,bu);let f=this.direction.dot(Hh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Wa.subVectors(this.origin,e);const m=h*this.direction.dot(bu.crossVectors(Wa,bu));if(m<0)return null;const p=h*this.direction.dot(zh.cross(Wa));if(p<0||m+p>f)return null;const g=-h*Wa.dot(Hh);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(e,n,r,l,u,f,h,m,p,g,v,x,S,E,b,y){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,l,u,f,h,m,p,g,v,x,S,E,b,y)}set(e,n,r,l,u,f,h,m,p,g,v,x,S,E,b,y){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=l,_[1]=u,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=E,_[11]=b,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,l=1/ys.setFromMatrixColumn(e,0).length(),u=1/ys.setFromMatrixColumn(e,1).length(),f=1/ys.setFromMatrixColumn(e,2).length();return n[0]=r[0]*l,n[1]=r[1]*l,n[2]=r[2]*l,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,l=e.y,u=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=f*g,S=f*v,E=h*g,b=h*v;n[0]=m*g,n[4]=-m*v,n[8]=p,n[1]=S+E*p,n[5]=x-b*p,n[9]=-h*m,n[2]=b-x*p,n[6]=E+S*p,n[10]=f*m}else if(e.order==="YXZ"){const x=m*g,S=m*v,E=p*g,b=p*v;n[0]=x+b*h,n[4]=E*h-S,n[8]=f*p,n[1]=f*v,n[5]=f*g,n[9]=-h,n[2]=S*h-E,n[6]=b+x*h,n[10]=f*m}else if(e.order==="ZXY"){const x=m*g,S=m*v,E=p*g,b=p*v;n[0]=x-b*h,n[4]=-f*v,n[8]=E+S*h,n[1]=S+E*h,n[5]=f*g,n[9]=b-x*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(e.order==="ZYX"){const x=f*g,S=f*v,E=h*g,b=h*v;n[0]=m*g,n[4]=E*p-S,n[8]=x*p+b,n[1]=m*v,n[5]=b*p+x,n[9]=S*p-E,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(e.order==="YZX"){const x=f*m,S=f*p,E=h*m,b=h*p;n[0]=m*g,n[4]=b-x*v,n[8]=E*v+S,n[1]=v,n[5]=f*g,n[9]=-h*g,n[2]=-p*g,n[6]=S*v+E,n[10]=x-b*v}else if(e.order==="XZY"){const x=f*m,S=f*p,E=h*m,b=h*p;n[0]=m*g,n[4]=-v,n[8]=p*g,n[1]=x*v+b,n[5]=f*g,n[9]=S*v-E,n[2]=E*v-S,n[6]=h*g,n[10]=b*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bb,e,zb)}lookAt(e,n,r){const l=this.elements;return ai.subVectors(e,n),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),qa.crossVectors(r,ai),qa.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),qa.crossVectors(r,ai)),qa.normalize(),Tu.crossVectors(ai,qa),l[0]=qa.x,l[4]=Tu.x,l[8]=ai.x,l[1]=qa.y,l[5]=Tu.y,l[9]=ai.y,l[2]=qa.z,l[6]=Tu.z,l[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,l=n.elements,u=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],S=r[13],E=r[2],b=r[6],y=r[10],_=r[14],N=r[3],L=r[7],U=r[11],P=r[15],H=l[0],z=l[4],q=l[8],C=l[12],D=l[1],V=l[5],te=l[9],ce=l[13],ve=l[2],fe=l[6],I=l[10],W=l[14],j=l[3],xe=l[7],A=l[11],G=l[15];return u[0]=f*H+h*D+m*ve+p*j,u[4]=f*z+h*V+m*fe+p*xe,u[8]=f*q+h*te+m*I+p*A,u[12]=f*C+h*ce+m*W+p*G,u[1]=g*H+v*D+x*ve+S*j,u[5]=g*z+v*V+x*fe+S*xe,u[9]=g*q+v*te+x*I+S*A,u[13]=g*C+v*ce+x*W+S*G,u[2]=E*H+b*D+y*ve+_*j,u[6]=E*z+b*V+y*fe+_*xe,u[10]=E*q+b*te+y*I+_*A,u[14]=E*C+b*ce+y*W+_*G,u[3]=N*H+L*D+U*ve+P*j,u[7]=N*z+L*V+U*fe+P*xe,u[11]=N*q+L*te+U*I+P*A,u[15]=N*C+L*ce+U*W+P*G,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],l=e[8],u=e[12],f=e[1],h=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],S=e[14],E=e[3],b=e[7],y=e[11],_=e[15];return E*(+u*m*v-l*p*v-u*h*x+r*p*x+l*h*S-r*m*S)+b*(+n*m*S-n*p*x+u*f*x-l*f*S+l*p*g-u*m*g)+y*(+n*p*v-n*h*S-u*f*v+r*f*S+u*h*g-r*p*g)+_*(-l*h*g-n*m*v+n*h*x+l*f*v-r*f*x+r*m*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=n,l[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],S=e[11],E=e[12],b=e[13],y=e[14],_=e[15],N=v*y*p-b*x*p+b*m*S-h*y*S-v*m*_+h*x*_,L=E*x*p-g*y*p-E*m*S+f*y*S+g*m*_-f*x*_,U=g*b*p-E*v*p+E*h*S-f*b*S-g*h*_+f*v*_,P=E*v*m-g*b*m-E*h*x+f*b*x+g*h*y-f*v*y,H=n*N+r*L+l*U+u*P;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/H;return e[0]=N*z,e[1]=(b*x*u-v*y*u-b*l*S+r*y*S+v*l*_-r*x*_)*z,e[2]=(h*y*u-b*m*u+b*l*p-r*y*p-h*l*_+r*m*_)*z,e[3]=(v*m*u-h*x*u-v*l*p+r*x*p+h*l*S-r*m*S)*z,e[4]=L*z,e[5]=(g*y*u-E*x*u+E*l*S-n*y*S-g*l*_+n*x*_)*z,e[6]=(E*m*u-f*y*u-E*l*p+n*y*p+f*l*_-n*m*_)*z,e[7]=(f*x*u-g*m*u+g*l*p-n*x*p-f*l*S+n*m*S)*z,e[8]=U*z,e[9]=(E*v*u-g*b*u-E*r*S+n*b*S+g*r*_-n*v*_)*z,e[10]=(f*b*u-E*h*u+E*r*p-n*b*p-f*r*_+n*h*_)*z,e[11]=(g*h*u-f*v*u-g*r*p+n*v*p+f*r*S-n*h*S)*z,e[12]=P*z,e[13]=(g*b*l-E*v*l+E*r*x-n*b*x-g*r*y+n*v*y)*z,e[14]=(E*h*l-f*b*l-E*r*m+n*b*m+f*r*y-n*h*y)*z,e[15]=(f*v*l-g*h*l+g*r*m-n*v*m-f*r*x+n*h*x)*z,this}scale(e){const n=this.elements,r=e.x,l=e.y,u=e.z;return n[0]*=r,n[4]*=l,n[8]*=u,n[1]*=r,n[5]*=l,n[9]*=u,n[2]*=r,n[6]*=l,n[10]*=u,n[3]*=r,n[7]*=l,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,l))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),l=Math.sin(n),u=1-r,f=e.x,h=e.y,m=e.z,p=u*f,g=u*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*f,0,p*m-l*h,g*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,l,u,f){return this.set(1,r,u,0,e,1,f,0,n,l,1,0,0,0,0,1),this}compose(e,n,r){const l=this.elements,u=n._x,f=n._y,h=n._z,m=n._w,p=u+u,g=f+f,v=h+h,x=u*p,S=u*g,E=u*v,b=f*g,y=f*v,_=h*v,N=m*p,L=m*g,U=m*v,P=r.x,H=r.y,z=r.z;return l[0]=(1-(b+_))*P,l[1]=(S+U)*P,l[2]=(E-L)*P,l[3]=0,l[4]=(S-U)*H,l[5]=(1-(x+_))*H,l[6]=(y+N)*H,l[7]=0,l[8]=(E+L)*z,l[9]=(y-N)*z,l[10]=(1-(x+b))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,n,r){const l=this.elements;let u=ys.set(l[0],l[1],l[2]).length();const f=ys.set(l[4],l[5],l[6]).length(),h=ys.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],bi.copy(this);const p=1/u,g=1/f,v=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,n.setFromRotationMatrix(bi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,n,r,l,u,f,h=Bi,m=!1){const p=this.elements,g=2*u/(n-e),v=2*u/(r-l),x=(n+e)/(n-e),S=(r+l)/(r-l);let E,b;if(m)E=u/(f-u),b=f*u/(f-u);else if(h===Bi)E=-(f+u)/(f-u),b=-2*f*u/(f-u);else if(h===ic)E=-f/(f-u),b=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,l,u,f,h=Bi,m=!1){const p=this.elements,g=2/(n-e),v=2/(r-l),x=-(n+e)/(n-e),S=-(r+l)/(r-l);let E,b;if(m)E=1/(f-u),b=f/(f-u);else if(h===Bi)E=-2/(f-u),b=-(f+u)/(f-u);else if(h===ic)E=-1/(f-u),b=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let l=0;l<16;l++)if(n[l]!==r[l])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ys=new re,bi=new dn,Bb=new re(0,0,0),zb=new re(1,1,1),qa=new re,Tu=new re,ai=new re,T_=new dn,A_=new rl;class _a{constructor(e=0,n=0,r=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,l=this._order){return this._x=e,this._y=n,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const l=e.elements,u=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],S=l[10];switch(n){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(yt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return T_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(T_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return A_.setFromEuler(this),this.setFromQuaternion(A_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class ux{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hb=0;const R_=new re,Ss=new rl,oa=new dn,Au=new re,Vo=new re,Gb=new re,Vb=new rl,w_=new re(1,0,0),C_=new re(0,1,0),D_=new re(0,0,1),U_={type:"added"},kb={type:"removed"},Ms={type:"childadded",child:null},Gh={type:"childremoved",child:null};class Kn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new re,n=new _a,r=new rl,l=new re(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new ft}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(w_,e)}rotateY(e){return this.rotateOnAxis(C_,e)}rotateZ(e){return this.rotateOnAxis(D_,e)}translateOnAxis(e,n){return R_.copy(e).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(w_,e)}translateY(e){return this.translateOnAxis(C_,e)}translateZ(e){return this.translateOnAxis(D_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Au.copy(e):Au.set(e,n,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Vo,Au,this.up):oa.lookAt(Au,Vo,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),Ss.setFromRotationMatrix(oa),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(U_),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kb),Gh.child=e,this.dispatchEvent(Gh),Gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oa.multiply(e.parent.matrixWorld)),e.applyMatrix4(oa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(U_),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,Gb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,Vb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(n){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),S=f(e.animations),E=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Kn.DEFAULT_UP=new re(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new re,la=new re,Vh=new re,ua=new re,Es=new re,bs=new re,N_=new re,kh=new re,Xh=new re,Wh=new re,qh=new sn,jh=new sn,Yh=new sn;class gi{constructor(e=new re,n=new re,r=new re){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,l){l.subVectors(r,n),Ti.subVectors(e,n),l.cross(Ti);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,n,r,l,u){Ti.subVectors(l,n),la.subVectors(r,n),Vh.subVectors(e,n);const f=Ti.dot(Ti),h=Ti.dot(la),m=Ti.dot(Vh),p=la.dot(la),g=la.dot(Vh),v=f*p-h*h;if(v===0)return u.set(0,0,0),null;const x=1/v,S=(p*m-h*g)*x,E=(f*g-h*m)*x;return u.set(1-S-E,E,S)}static containsPoint(e,n,r,l){return this.getBarycoord(e,n,r,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,n,r,l,u,f,h,m){return this.getBarycoord(e,n,r,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ua.x),m.addScaledVector(f,ua.y),m.addScaledVector(h,ua.z),m)}static getInterpolatedAttribute(e,n,r,l,u,f){return qh.setScalar(0),jh.setScalar(0),Yh.setScalar(0),qh.fromBufferAttribute(e,n),jh.fromBufferAttribute(e,r),Yh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(qh,u.x),f.addScaledVector(jh,u.y),f.addScaledVector(Yh,u.z),f}static isFrontFacing(e,n,r,l){return Ti.subVectors(r,n),la.subVectors(e,n),Ti.cross(la).dot(l)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,l){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,n,r,l){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),la.subVectors(this.a,this.b),Ti.cross(la).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return gi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,l,u){return gi.getInterpolation(e,this.a,this.b,this.c,n,r,l,u)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,l=this.b,u=this.c;let f,h;Es.subVectors(l,r),bs.subVectors(u,r),kh.subVectors(e,r);const m=Es.dot(kh),p=bs.dot(kh);if(m<=0&&p<=0)return n.copy(r);Xh.subVectors(e,l);const g=Es.dot(Xh),v=bs.dot(Xh);if(g>=0&&v<=g)return n.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(r).addScaledVector(Es,f);Wh.subVectors(e,u);const S=Es.dot(Wh),E=bs.dot(Wh);if(E>=0&&S<=E)return n.copy(u);const b=S*p-m*E;if(b<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(r).addScaledVector(bs,h);const y=g*E-S*v;if(y<=0&&v-g>=0&&S-E>=0)return N_.subVectors(u,l),h=(v-g)/(v-g+(S-E)),n.copy(l).addScaledVector(N_,h);const _=1/(y+b+x);return f=b*_,h=x*_,n.copy(r).addScaledVector(Es,f).addScaledVector(bs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},Ru={h:0,s:0,l:0};function Zh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class St{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,n),this}setRGB(e,n,r,l=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.colorSpaceToWorking(this,l),this}setHSL(e,n,r,l=At.workingColorSpace){if(e=wb(e,1),n=yt(n,0,1),r=yt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Zh(f,u,e+1/3),this.g=Zh(f,u,e),this.b=Zh(f,u,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,n=mi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mi){const r=cx[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return At.workingToColorSpace(Pn.copy(this),e),Math.round(yt(Pn.r*255,0,255))*65536+Math.round(yt(Pn.g*255,0,255))*256+Math.round(yt(Pn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.workingToColorSpace(Pn.copy(this),n);const r=Pn.r,l=Pn.g,u=Pn.b,f=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=g<=.5?v/(f+h):v/(2-f-h),f){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=At.workingColorSpace){return At.workingToColorSpace(Pn.copy(this),n),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=mi){At.workingToColorSpace(Pn.copy(this),e);const n=Pn.r,r=Pn.g,l=Pn.b;return e!==mi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,n,r){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+n,ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(ja),e.getHSL(Ru);const r=Uh(ja.h,Ru.h,n),l=Uh(ja.s,Ru.s,n),u=Uh(ja.l,Ru.l,n);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*l,this.g=u[1]*n+u[4]*r+u[7]*l,this.b=u[2]*n+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new St;St.NAMES=cx;let Xb=0;class ol extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=al(),this.name="",this.type="Material",this.blending=Us,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=md,this.blendDst=gd,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=__,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==md&&(r.blendSrc=this.blendSrc),this.blendDst!==gd&&(r.blendDst=this.blendDst),this.blendEquation!==Ar&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==__&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}if(n){const u=l(e.textures),f=l(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const l=n.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fx extends ol{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=Z0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new re,wu=new Bt;let Wb=0;class zi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=x_,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=n.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)wu.fromBufferAttribute(this,n),wu.applyMatrix3(e),this.setXY(n,wu.x,wu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=zo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zo(n,this.array)),n}setX(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zo(n,this.array)),n}setY(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zo(n,this.array)),n}setW(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),r=jn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,l){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),r=jn(r,this.array),l=jn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,n,r,l,u){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),r=jn(r,this.array),l=jn(l,this.array),u=jn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==x_&&(e.usage=this.usage),e}}class hx extends zi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class dx extends zi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class vi extends zi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let qb=0;const pi=new dn,Kh=new Kn,Ts=new re,ri=new sl,ko=new sl,bn=new re;class ki extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sx(e)?dx:hx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,n,r){return pi.makeTranslation(e,n,r),this.applyMatrix4(pi),this}scale(e,n,r){return pi.makeScale(e,n,r),this.applyMatrix4(pi),this}lookAt(e){return Kh.lookAt(e),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new vi(r,3))}else{const r=Math.min(e.length,n.count);for(let l=0;l<r;l++){const u=e[l];n.setXYZ(l,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,l=n.length;r<l;r++){const u=n[r];ri.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const h=n[u];ko.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ri.min,ko.min),ri.expandByPoint(bn),bn.addVectors(ri.max,ko.max),ri.expandByPoint(bn)):(ri.expandByPoint(ko.min),ri.expandByPoint(ko.max))}ri.getCenter(r);let l=0;for(let u=0,f=e.count;u<f;u++)bn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(bn));if(n)for(let u=0,f=n.length;u<f;u++){const h=n[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)bn.fromBufferAttribute(h,p),m&&(Ts.fromBufferAttribute(e,p),bn.add(Ts)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,l=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<r.count;q++)h[q]=new re,m[q]=new re;const p=new re,g=new re,v=new re,x=new Bt,S=new Bt,E=new Bt,b=new re,y=new re;function _(q,C,D){p.fromBufferAttribute(r,q),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,D),x.fromBufferAttribute(u,q),S.fromBufferAttribute(u,C),E.fromBufferAttribute(u,D),g.sub(p),v.sub(p),S.sub(x),E.sub(x);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(V),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(V),h[q].add(b),h[C].add(b),h[D].add(b),m[q].add(y),m[C].add(y),m[D].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let q=0,C=N.length;q<C;++q){const D=N[q],V=D.start,te=D.count;for(let ce=V,ve=V+te;ce<ve;ce+=3)_(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const L=new re,U=new re,P=new re,H=new re;function z(q){P.fromBufferAttribute(l,q),H.copy(P);const C=h[q];L.copy(C),L.sub(P.multiplyScalar(P.dot(C))).normalize(),U.crossVectors(H,C);const V=U.dot(m[q])<0?-1:1;f.setXYZW(q,L.x,L.y,L.z,V)}for(let q=0,C=N.length;q<C;++q){const D=N[q],V=D.start,te=D.count;for(let ce=V,ve=V+te;ce<ve;ce+=3)z(e.getX(ce+0)),z(e.getX(ce+1)),z(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new zi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const l=new re,u=new re,f=new re,h=new re,m=new re,p=new re,g=new re,v=new re;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),b=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,y),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,y),h.add(g),m.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=n.count;x<S;x+=3)l.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)bn.fromBufferAttribute(e,n),bn.normalize(),e.setXYZ(n,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let S=0,E=0;for(let b=0,y=m.length;b<y;b++){h.isInterleavedBufferAttribute?S=m[b]*h.data.stride+h.offset:S=m[b]*g;for(let _=0;_<g;_++)x[E++]=p[S++]}return new zi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ki,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);n.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],S=e(x,r);m.push(S)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const S=p[v];g.push(S.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(n))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const L_=new dn,yr=new lx,Cu=new pc,O_=new re,Du=new re,Uu=new re,Nu=new re,Qh=new re,Lu=new re,P_=new re,Ou=new re;class da extends Kn{constructor(e=new ki,n=new fx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,n){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){Lu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],v=u[m];g!==0&&(Qh.fromBufferAttribute(v,e),f?Lu.addScaledVector(Qh,g):Lu.addScaledVector(Qh.sub(n),g))}n.add(Lu)}return n}raycast(e,n){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cu.copy(r.boundingSphere),Cu.applyMatrix4(u),yr.copy(e.ray).recast(e.near),!(Cu.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Cu,O_)===null||yr.origin.distanceToSquared(O_)>(e.far-e.near)**2))&&(L_.copy(u).invert(),yr.copy(e.ray).applyMatrix4(L_),!(r.boundingBox!==null&&yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,yr)))}_computeIntersections(e,n,r){let l;const u=this.geometry,f=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,S=u.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,b=x.length;E<b;E++){const y=x[E],_=f[y.materialIndex],N=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let U=N,P=L;U<P;U+=3){const H=h.getX(U),z=h.getX(U+1),q=h.getX(U+2);l=Pu(this,_,e,r,p,g,v,H,z,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,n.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(h.count,S.start+S.count);for(let y=E,_=b;y<_;y+=3){const N=h.getX(y),L=h.getX(y+1),U=h.getX(y+2);l=Pu(this,f,e,r,p,g,v,N,L,U),l&&(l.faceIndex=Math.floor(y/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,b=x.length;E<b;E++){const y=x[E],_=f[y.materialIndex],N=Math.max(y.start,S.start),L=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let U=N,P=L;U<P;U+=3){const H=U,z=U+1,q=U+2;l=Pu(this,_,e,r,p,g,v,H,z,q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,n.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let y=E,_=b;y<_;y+=3){const N=y,L=y+1,U=y+2;l=Pu(this,f,e,r,p,g,v,N,L,U),l&&(l.faceIndex=Math.floor(y/3),n.push(l))}}}}function jb(a,e,n,r,l,u,f,h){let m;if(e.side===Yn?m=r.intersectTriangle(f,u,l,!0,h):m=r.intersectTriangle(l,u,f,e.side===$a,h),m===null)return null;Ou.copy(h),Ou.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(Ou);return p<n.near||p>n.far?null:{distance:p,point:Ou.clone(),object:a}}function Pu(a,e,n,r,l,u,f,h,m,p){a.getVertexPosition(h,Du),a.getVertexPosition(m,Uu),a.getVertexPosition(p,Nu);const g=jb(a,e,n,r,Du,Uu,Nu,P_);if(g){const v=new re;gi.getBarycoord(P_,Du,Uu,Nu,v),l&&(g.uv=gi.getInterpolatedAttribute(l,h,m,p,v,new Bt)),u&&(g.uv1=gi.getInterpolatedAttribute(u,h,m,p,v,new Bt)),f&&(g.normal=gi.getInterpolatedAttribute(f,h,m,p,v,new re),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new re,materialIndex:0};gi.getNormal(Du,Uu,Nu,x.normal),g.face=x,g.barycoord=v}return g}class Lr extends ki{constructor(e=1,n=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const h=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],g=[],v=[];let x=0,S=0;E("z","y","x",-1,-1,r,n,e,f,u,0),E("z","y","x",1,-1,r,n,-e,f,u,1),E("x","z","y",1,1,e,r,n,l,f,2),E("x","z","y",1,-1,e,r,-n,l,f,3),E("x","y","z",1,-1,e,n,r,l,u,4),E("x","y","z",-1,-1,e,n,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new vi(p,3)),this.setAttribute("normal",new vi(g,3)),this.setAttribute("uv",new vi(v,2));function E(b,y,_,N,L,U,P,H,z,q,C){const D=U/z,V=P/q,te=U/2,ce=P/2,ve=H/2,fe=z+1,I=q+1;let W=0,j=0;const xe=new re;for(let A=0;A<I;A++){const G=A*V-ce;for(let se=0;se<fe;se++){const le=se*D-te;xe[b]=le*N,xe[y]=G*L,xe[_]=ve,p.push(xe.x,xe.y,xe.z),xe[b]=0,xe[y]=0,xe[_]=H>0?1:-1,g.push(xe.x,xe.y,xe.z),v.push(se/z),v.push(1-A/q),W+=1}}for(let A=0;A<q;A++)for(let G=0;G<z;G++){const se=x+G+fe*A,le=x+G+fe*(A+1),Ee=x+(G+1)+fe*(A+1),Ue=x+(G+1)+fe*A;m.push(se,le,Ue),m.push(le,Ee,Ue),j+=6}h.addGroup(S,j,C),S+=j,x+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const l=a[n][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=l.clone():Array.isArray(l)?e[n][r]=l.slice():e[n][r]=l}}return e}function Hn(a){const e={};for(let n=0;n<a.length;n++){const r=Fs(a[n]);for(const l in r)e[l]=r[l]}return e}function Yb(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function px(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Zb={clone:Fs,merge:Hn};var Kb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends ol{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kb,this.fragmentShader=Qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Yb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class mx extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new re,I_=new Bt,F_=new Bt;class si extends mx{constructor(e=50,n=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=np*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ju*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return np*2*Math.atan(Math.tan(Ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z)}getViewSize(e,n){return this.getViewBounds(e,I_,F_),n.subVectors(F_,I_)}setViewOffset(e,n,r,l,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ju*.5*this.fov)/this.zoom,r=2*n,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,n-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const As=-90,Rs=1;class Jb extends Kn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(As,Rs,e,n);l.layers=this.layers,this.add(l);const u=new si(As,Rs,e,n);u.layers=this.layers,this.add(u);const f=new si(As,Rs,e,n);f.layers=this.layers,this.add(f);const h=new si(As,Rs,e,n);h.layers=this.layers,this.add(h);const m=new si(As,Rs,e,n);m.layers=this.layers,this.add(m);const p=new si(As,Rs,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,l,u,f,h,m]=n;for(const p of n)this.remove(p);if(e===Bi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ic)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(n,u),e.setRenderTarget(r,1,l),e.render(n,f),e.setRenderTarget(r,2,l),e.render(n,h),e.setRenderTarget(r,3,l),e.render(n,m),e.setRenderTarget(r,4,l),e.render(n,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,l),e.render(n,g),e.setRenderTarget(v,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class gx extends Zn{constructor(e=[],n=Os,r,l,u,f,h,m,p,g){super(e,n,r,l,u,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $b extends Ur{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new gx(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Lr(5,5,5),u=new er({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:Qa});u.uniforms.tEquirect.value=n;const f=new da(l,u),h=n.minFilter;return n.minFilter===Cr&&(n.minFilter=Fi),new Jb(1,10,this).update(e,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,l);e.setRenderTarget(u)}}class Cs extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eT={type:"move"};class Jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let l=null,u=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const b of e.hand.values()){const y=n.getJointPose(b,r),_=this._getHandJoint(p,b);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=n.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(eT)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Cs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class vx extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $h=new re,tT=new re,nT=new ft;class br{constructor(e=new re(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,l){return this.normal.set(e,n,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const l=$h.subVectors(r,n).cross(tT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta($h),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||nT.getNormalMatrix(e),l=this.coplanarPoint($h).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new pc,iT=new Bt(.5,.5),Iu=new re;class _x{constructor(e=new br,n=new br,r=new br,l=new br,u=new br,f=new br){this.planes=[e,n,r,l,u,f]}set(e,n,r,l,u,f){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Bi,r=!1){const l=this.planes,u=e.elements,f=u[0],h=u[1],m=u[2],p=u[3],g=u[4],v=u[5],x=u[6],S=u[7],E=u[8],b=u[9],y=u[10],_=u[11],N=u[12],L=u[13],U=u[14],P=u[15];if(l[0].setComponents(p-f,S-g,_-E,P-N).normalize(),l[1].setComponents(p+f,S+g,_+E,P+N).normalize(),l[2].setComponents(p+h,S+v,_+b,P+L).normalize(),l[3].setComponents(p-h,S-v,_-b,P-L).normalize(),r)l[4].setComponents(m,x,y,U).normalize(),l[5].setComponents(p-m,S-x,_-y,P-U).normalize();else if(l[4].setComponents(p-m,S-x,_-y,P-U).normalize(),n===Bi)l[5].setComponents(p+m,S+x,_+y,P+U).normalize();else if(n===ic)l[5].setComponents(m,x,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){Sr.center.set(0,0,0);const n=iT.distanceTo(e.center);return Sr.radius=.7071067811865476+n,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const n=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const l=n[r];if(Iu.x=l.normal.x>0?e.max.x:e.min.x,Iu.y=l.normal.y>0?e.max.y:e.min.y,Iu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Iu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mc extends ol{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rc=new re,sc=new re,B_=new dn,Xo=new lx,Fu=new pc,ed=new re,z_=new re;class aT extends Kn{constructor(e=new ki,n=new mc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let l=1,u=n.count;l<u;l++)rc.fromBufferAttribute(n,l-1),sc.fromBufferAttribute(n,l),r[l]=r[l-1],r[l]+=rc.distanceTo(sc);e.setAttribute("lineDistance",new vi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fu.copy(r.boundingSphere),Fu.applyMatrix4(l),Fu.radius+=u,e.ray.intersectsSphere(Fu)===!1)return;B_.copy(l).invert(),Xo.copy(e.ray).applyMatrix4(B_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const S=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let b=S,y=E-1;b<y;b+=p){const _=g.getX(b),N=g.getX(b+1),L=Bu(this,e,Xo,m,_,N,b);L&&n.push(L)}if(this.isLineLoop){const b=g.getX(E-1),y=g.getX(S),_=Bu(this,e,Xo,m,b,y,E-1);_&&n.push(_)}}else{const S=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let b=S,y=E-1;b<y;b+=p){const _=Bu(this,e,Xo,m,b,b+1,b);_&&n.push(_)}if(this.isLineLoop){const b=Bu(this,e,Xo,m,E-1,S,E-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Bu(a,e,n,r,l,u,f){const h=a.geometry.attributes.position;if(rc.fromBufferAttribute(h,l),sc.fromBufferAttribute(h,u),n.distanceSqToSegment(rc,sc,ed,z_)>r)return;ed.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo(ed);if(!(p<e.near||p>e.far))return{distance:p,point:z_.clone().applyMatrix4(a.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:a}}const H_=new re,G_=new re;class Mp extends aT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let l=0,u=n.count;l<u;l+=2)H_.fromBufferAttribute(n,l),G_.fromBufferAttribute(n,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+H_.distanceTo(G_);e.setAttribute("lineDistance",new vi(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xx extends Zn{constructor(e,n,r=Dr,l,u,f,h=wi,m=wi,p,g=Zo,v=1){if(g!==Zo&&g!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:v};super(x,l,u,f,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class yx extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const zu=new re,Hu=new re,td=new re,Gu=new gi;class Sx extends ki{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const l=Math.pow(10,4),u=Math.cos(Ju*n),f=e.getIndex(),h=e.getAttribute("position"),m=f?f.count:h.count,p=[0,0,0],g=["a","b","c"],v=new Array(3),x={},S=[];for(let E=0;E<m;E+=3){f?(p[0]=f.getX(E),p[1]=f.getX(E+1),p[2]=f.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:b,b:y,c:_}=Gu;if(b.fromBufferAttribute(h,p[0]),y.fromBufferAttribute(h,p[1]),_.fromBufferAttribute(h,p[2]),Gu.getNormal(td),v[0]=`${Math.round(b.x*l)},${Math.round(b.y*l)},${Math.round(b.z*l)}`,v[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,v[2]=`${Math.round(_.x*l)},${Math.round(_.y*l)},${Math.round(_.z*l)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let N=0;N<3;N++){const L=(N+1)%3,U=v[N],P=v[L],H=Gu[g[N]],z=Gu[g[L]],q=`${U}_${P}`,C=`${P}_${U}`;C in x&&x[C]?(td.dot(x[C].normal)<=u&&(S.push(H.x,H.y,H.z),S.push(z.x,z.y,z.z)),x[C]=null):q in x||(x[q]={index0:p[N],index1:p[L],normal:td.clone()})}}for(const E in x)if(x[E]){const{index0:b,index1:y}=x[E];zu.fromBufferAttribute(h,b),Hu.fromBufferAttribute(h,y),S.push(zu.x,zu.y,zu.z),S.push(Hu.x,Hu.y,Hu.z)}this.setAttribute("position",new vi(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class gc extends ki{constructor(e=1,n=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:l};const u=e/2,f=n/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=e/h,x=n/m,S=[],E=[],b=[],y=[];for(let _=0;_<g;_++){const N=_*x-f;for(let L=0;L<p;L++){const U=L*v-u;E.push(U,-N,0),b.push(0,0,1),y.push(L/h),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let N=0;N<h;N++){const L=N+p*_,U=N+p*(_+1),P=N+1+p*(_+1),H=N+1+p*_;S.push(L,U,H),S.push(U,P,H)}this.setIndex(S),this.setAttribute("position",new vi(E,3)),this.setAttribute("normal",new vi(b,3)),this.setAttribute("uv",new vi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gc(e.width,e.height,e.widthSegments,e.heightSegments)}}class rT extends ol{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sT extends ol{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class oT extends mx{constructor(e=-1,n=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,f=r+e,h=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class lT extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Mx extends Mp{constructor(e=10,n=10,r=4473924,l=8947848){r=new St(r),l=new St(l);const u=n/2,f=e/n,h=e/2,m=[],p=[];for(let x=0,S=0,E=-h;x<=n;x++,E+=f){m.push(-h,0,E,h,0,E),m.push(E,0,-h,E,0,h);const b=x===u?r:l;b.toArray(p,S),S+=3,b.toArray(p,S),S+=3,b.toArray(p,S),S+=3,b.toArray(p,S),S+=3}const g=new ki;g.setAttribute("position",new vi(m,3)),g.setAttribute("color",new vi(p,3));const v=new mc({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function V_(a,e,n,r){const l=uT(r);switch(n){case tx:return a*e;case ix:return a*e/l.components*l.byteLength;case _p:return a*e/l.components*l.byteLength;case ax:return a*e*2/l.components*l.byteLength;case xp:return a*e*2/l.components*l.byteLength;case nx:return a*e*3/l.components*l.byteLength;case Ri:return a*e*4/l.components*l.byteLength;case yp:return a*e*4/l.components*l.byteLength;case Yu:case Zu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ku:case Qu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Cd:case Ud:return Math.max(a,16)*Math.max(e,8)/4;case wd:case Dd:return Math.max(a,8)*Math.max(e,8)/2;case Nd:case Ld:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Od:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case kd:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case qd:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case jd:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Yd:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Zd:case Kd:case Qd:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Jd:case $d:return Math.ceil(a/4)*Math.ceil(e/4)*8;case ep:case tp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function uT(a){switch(a){case va:case Q0:return{byteLength:1,components:1};case jo:case J0:case il:return{byteLength:2,components:1};case gp:case vp:return{byteLength:2,components:4};case Dr:case mp:case ha:return{byteLength:4,components:1};case $0:case ex:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ex(){let a=null,e=!1,n=null,r=null;function l(u,f){n(u,f),r=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){a=u}}}function cT(a){const e=new WeakMap;function n(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=a.createBuffer();a.bindBuffer(m,x),a.bufferData(m,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=a.SHORT;else if(p instanceof Uint32Array)S=a.UNSIGNED_INT;else if(p instanceof Int32Array)S=a.INT;else if(p instanceof Int8Array)S=a.BYTE;else if(p instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(a.bindBuffer(p,h),v.length===0)a.bufferSubData(p,0,g);else{v.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<v.length;S++){const E=v[x],b=v[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,v[x]=b)}v.length=x+1;for(let S=0,E=v.length;S<E;S++){const b=v[S];a.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:f}}var fT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hT=`#ifdef USE_ALPHAHASH
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
#endif`,dT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vT=`#ifdef USE_AOMAP
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
#endif`,_T=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xT=`#ifdef USE_BATCHING
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
#endif`,yT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ST=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ET=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bT=`#ifdef USE_IRIDESCENCE
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
#endif`,TT=`#ifdef USE_BUMPMAP
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
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,UT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,LT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,OT=`#define PI 3.141592653589793
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
} // validated`,PT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IT=`vec3 transformedNormal = objectNormal;
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
#endif`,FT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GT="gl_FragColor = linearToOutputTexel( gl_FragColor );",VT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kT=`#ifdef USE_ENVMAP
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
#endif`,XT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WT=`#ifdef USE_ENVMAP
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
#endif`,qT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jT=`#ifdef USE_ENVMAP
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
#endif`,YT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JT=`#ifdef USE_GRADIENTMAP
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
}`,$T=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nA=`uniform bool receiveShadow;
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
#endif`,iA=`#ifdef USE_ENVMAP
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
#endif`,aA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lA=`PhysicalMaterial material;
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
#endif`,uA=`struct PhysicalMaterial {
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
}`,cA=`
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
#endif`,fA=`#if defined( RE_IndirectDiffuse )
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
#endif`,hA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_A=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yA=`#if defined( USE_POINTS_UV )
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
#endif`,SA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AA=`#ifdef USE_MORPHTARGETS
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
#endif`,RA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LA=`#ifdef USE_NORMALMAP
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
#endif`,OA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,jA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZA=`float getShadowMask() {
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
}`,KA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QA=`#ifdef USE_SKINNING
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
#endif`,JA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$A=`#ifdef USE_SKINNING
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
#endif`,e1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#ifdef USE_TRANSMISSION
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
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
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
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`#include <common>
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
}`,v1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_1=`#define DISTANCE
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
}`,x1=`#define DISTANCE
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`uniform float scale;
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
}`,E1=`uniform vec3 diffuse;
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
}`,b1=`#include <common>
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
}`,T1=`uniform vec3 diffuse;
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
}`,A1=`#define LAMBERT
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
}`,R1=`#define LAMBERT
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
}`,w1=`#define MATCAP
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
}`,C1=`#define MATCAP
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
}`,D1=`#define NORMAL
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
}`,U1=`#define NORMAL
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
}`,N1=`#define PHONG
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
}`,L1=`#define PHONG
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
}`,O1=`#define STANDARD
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
}`,P1=`#define STANDARD
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
}`,I1=`#define TOON
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
}`,F1=`#define TOON
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
}`,B1=`uniform float size;
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
}`,z1=`uniform vec3 diffuse;
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
}`,H1=`#include <common>
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
}`,G1=`uniform vec3 color;
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
}`,V1=`uniform float rotation;
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
}`,k1=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:fT,alphahash_pars_fragment:hT,alphamap_fragment:dT,alphamap_pars_fragment:pT,alphatest_fragment:mT,alphatest_pars_fragment:gT,aomap_fragment:vT,aomap_pars_fragment:_T,batching_pars_vertex:xT,batching_vertex:yT,begin_vertex:ST,beginnormal_vertex:MT,bsdfs:ET,iridescence_fragment:bT,bumpmap_pars_fragment:TT,clipping_planes_fragment:AT,clipping_planes_pars_fragment:RT,clipping_planes_pars_vertex:wT,clipping_planes_vertex:CT,color_fragment:DT,color_pars_fragment:UT,color_pars_vertex:NT,color_vertex:LT,common:OT,cube_uv_reflection_fragment:PT,defaultnormal_vertex:IT,displacementmap_pars_vertex:FT,displacementmap_vertex:BT,emissivemap_fragment:zT,emissivemap_pars_fragment:HT,colorspace_fragment:GT,colorspace_pars_fragment:VT,envmap_fragment:kT,envmap_common_pars_fragment:XT,envmap_pars_fragment:WT,envmap_pars_vertex:qT,envmap_physical_pars_fragment:iA,envmap_vertex:jT,fog_vertex:YT,fog_pars_vertex:ZT,fog_fragment:KT,fog_pars_fragment:QT,gradientmap_pars_fragment:JT,lightmap_pars_fragment:$T,lights_lambert_fragment:eA,lights_lambert_pars_fragment:tA,lights_pars_begin:nA,lights_toon_fragment:aA,lights_toon_pars_fragment:rA,lights_phong_fragment:sA,lights_phong_pars_fragment:oA,lights_physical_fragment:lA,lights_physical_pars_fragment:uA,lights_fragment_begin:cA,lights_fragment_maps:fA,lights_fragment_end:hA,logdepthbuf_fragment:dA,logdepthbuf_pars_fragment:pA,logdepthbuf_pars_vertex:mA,logdepthbuf_vertex:gA,map_fragment:vA,map_pars_fragment:_A,map_particle_fragment:xA,map_particle_pars_fragment:yA,metalnessmap_fragment:SA,metalnessmap_pars_fragment:MA,morphinstance_vertex:EA,morphcolor_vertex:bA,morphnormal_vertex:TA,morphtarget_pars_vertex:AA,morphtarget_vertex:RA,normal_fragment_begin:wA,normal_fragment_maps:CA,normal_pars_fragment:DA,normal_pars_vertex:UA,normal_vertex:NA,normalmap_pars_fragment:LA,clearcoat_normal_fragment_begin:OA,clearcoat_normal_fragment_maps:PA,clearcoat_pars_fragment:IA,iridescence_pars_fragment:FA,opaque_fragment:BA,packing:zA,premultiplied_alpha_fragment:HA,project_vertex:GA,dithering_fragment:VA,dithering_pars_fragment:kA,roughnessmap_fragment:XA,roughnessmap_pars_fragment:WA,shadowmap_pars_fragment:qA,shadowmap_pars_vertex:jA,shadowmap_vertex:YA,shadowmask_pars_fragment:ZA,skinbase_vertex:KA,skinning_pars_vertex:QA,skinning_vertex:JA,skinnormal_vertex:$A,specularmap_fragment:e1,specularmap_pars_fragment:t1,tonemapping_fragment:n1,tonemapping_pars_fragment:i1,transmission_fragment:a1,transmission_pars_fragment:r1,uv_pars_fragment:s1,uv_pars_vertex:o1,uv_vertex:l1,worldpos_vertex:u1,background_vert:c1,background_frag:f1,backgroundCube_vert:h1,backgroundCube_frag:d1,cube_vert:p1,cube_frag:m1,depth_vert:g1,depth_frag:v1,distanceRGBA_vert:_1,distanceRGBA_frag:x1,equirect_vert:y1,equirect_frag:S1,linedashed_vert:M1,linedashed_frag:E1,meshbasic_vert:b1,meshbasic_frag:T1,meshlambert_vert:A1,meshlambert_frag:R1,meshmatcap_vert:w1,meshmatcap_frag:C1,meshnormal_vert:D1,meshnormal_frag:U1,meshphong_vert:N1,meshphong_frag:L1,meshphysical_vert:O1,meshphysical_frag:P1,meshtoon_vert:I1,meshtoon_frag:F1,points_vert:B1,points_frag:z1,shadow_vert:H1,shadow_frag:G1,sprite_vert:V1,sprite_frag:k1},Ie={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ii={basic:{uniforms:Hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Hn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Hn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new St(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Hn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Hn([Ie.points,Ie.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Hn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Hn([Ie.common,Ie.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Hn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Hn([Ie.sprite,Ie.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Hn([Ie.common,Ie.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Hn([Ie.lights,Ie.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Ii.physical={uniforms:Hn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Vu={r:0,b:0,g:0},Mr=new _a,X1=new dn;function W1(a,e,n,r,l,u,f){const h=new St(0);let m=u===!0?0:1,p,g,v=null,x=0,S=null;function E(L){let U=L.isScene===!0?L.background:null;return U&&U.isTexture&&(U=(L.backgroundBlurriness>0?n:e).get(U)),U}function b(L){let U=!1;const P=E(L);P===null?_(h,m):P&&P.isColor&&(_(P,1),U=!0);const H=a.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(a.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(L,U){const P=E(U);P&&(P.isCubeTexture||P.mapping===dc)?(g===void 0&&(g=new da(new Lr(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Fs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,z,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Mr.copy(U.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(X1.makeRotationFromEuler(Mr)),g.material.toneMapped=At.getTransfer(P.colorSpace)!==It,(v!==P||x!==P.version||S!==a.toneMapping)&&(g.material.needsUpdate=!0,v=P,x=P.version,S=a.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new da(new gc(2,2),new er({name:"BackgroundMaterial",uniforms:Fs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=At.getTransfer(P.colorSpace)!==It,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||x!==P.version||S!==a.toneMapping)&&(p.material.needsUpdate=!0,v=P,x=P.version,S=a.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,U){L.getRGB(Vu,px(a)),r.buffers.color.setClear(Vu.r,Vu.g,Vu.b,U,f)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,U=1){h.set(L),m=U,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(h,m)},render:b,addToRenderList:y,dispose:N}}function q1(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,f=!1;function h(D,V,te,ce,ve){let fe=!1;const I=v(ce,te,V);u!==I&&(u=I,p(u.object)),fe=S(D,ce,te,ve),fe&&E(D,ce,te,ve),ve!==null&&e.update(ve,a.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,U(D,V,te,ce),ve!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ve).buffer))}function m(){return a.createVertexArray()}function p(D){return a.bindVertexArray(D)}function g(D){return a.deleteVertexArray(D)}function v(D,V,te){const ce=te.wireframe===!0;let ve=r[D.id];ve===void 0&&(ve={},r[D.id]=ve);let fe=ve[V.id];fe===void 0&&(fe={},ve[V.id]=fe);let I=fe[ce];return I===void 0&&(I=x(m()),fe[ce]=I),I}function x(D){const V=[],te=[],ce=[];for(let ve=0;ve<n;ve++)V[ve]=0,te[ve]=0,ce[ve]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:te,attributeDivisors:ce,object:D,attributes:{},index:null}}function S(D,V,te,ce){const ve=u.attributes,fe=V.attributes;let I=0;const W=te.getAttributes();for(const j in W)if(W[j].location>=0){const A=ve[j];let G=fe[j];if(G===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(G=D.instanceColor)),A===void 0||A.attribute!==G||G&&A.data!==G.data)return!0;I++}return u.attributesNum!==I||u.index!==ce}function E(D,V,te,ce){const ve={},fe=V.attributes;let I=0;const W=te.getAttributes();for(const j in W)if(W[j].location>=0){let A=fe[j];A===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(A=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(A=D.instanceColor));const G={};G.attribute=A,A&&A.data&&(G.data=A.data),ve[j]=G,I++}u.attributes=ve,u.attributesNum=I,u.index=ce}function b(){const D=u.newAttributes;for(let V=0,te=D.length;V<te;V++)D[V]=0}function y(D){_(D,0)}function _(D,V){const te=u.newAttributes,ce=u.enabledAttributes,ve=u.attributeDivisors;te[D]=1,ce[D]===0&&(a.enableVertexAttribArray(D),ce[D]=1),ve[D]!==V&&(a.vertexAttribDivisor(D,V),ve[D]=V)}function N(){const D=u.newAttributes,V=u.enabledAttributes;for(let te=0,ce=V.length;te<ce;te++)V[te]!==D[te]&&(a.disableVertexAttribArray(te),V[te]=0)}function L(D,V,te,ce,ve,fe,I){I===!0?a.vertexAttribIPointer(D,V,te,ve,fe):a.vertexAttribPointer(D,V,te,ce,ve,fe)}function U(D,V,te,ce){b();const ve=ce.attributes,fe=te.getAttributes(),I=V.defaultAttributeValues;for(const W in fe){const j=fe[W];if(j.location>=0){let xe=ve[W];if(xe===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),xe!==void 0){const A=xe.normalized,G=xe.itemSize,se=e.get(xe);if(se===void 0)continue;const le=se.buffer,Ee=se.type,Ue=se.bytesPerElement,J=Ee===a.INT||Ee===a.UNSIGNED_INT||xe.gpuType===mp;if(xe.isInterleavedBufferAttribute){const me=xe.data,be=me.stride,qe=xe.offset;if(me.isInstancedInterleavedBuffer){for(let He=0;He<j.locationSize;He++)_(j.location+He,me.meshPerAttribute);D.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let He=0;He<j.locationSize;He++)y(j.location+He);a.bindBuffer(a.ARRAY_BUFFER,le);for(let He=0;He<j.locationSize;He++)L(j.location+He,G/j.locationSize,Ee,A,be*Ue,(qe+G/j.locationSize*He)*Ue,J)}else{if(xe.isInstancedBufferAttribute){for(let me=0;me<j.locationSize;me++)_(j.location+me,xe.meshPerAttribute);D.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let me=0;me<j.locationSize;me++)y(j.location+me);a.bindBuffer(a.ARRAY_BUFFER,le);for(let me=0;me<j.locationSize;me++)L(j.location+me,G/j.locationSize,Ee,A,G*Ue,G/j.locationSize*me*Ue,J)}}else if(I!==void 0){const A=I[W];if(A!==void 0)switch(A.length){case 2:a.vertexAttrib2fv(j.location,A);break;case 3:a.vertexAttrib3fv(j.location,A);break;case 4:a.vertexAttrib4fv(j.location,A);break;default:a.vertexAttrib1fv(j.location,A)}}}}N()}function P(){q();for(const D in r){const V=r[D];for(const te in V){const ce=V[te];for(const ve in ce)g(ce[ve].object),delete ce[ve];delete V[te]}delete r[D]}}function H(D){if(r[D.id]===void 0)return;const V=r[D.id];for(const te in V){const ce=V[te];for(const ve in ce)g(ce[ve].object),delete ce[ve];delete V[te]}delete r[D.id]}function z(D){for(const V in r){const te=r[V];if(te[D.id]===void 0)continue;const ce=te[D.id];for(const ve in ce)g(ce[ve].object),delete ce[ve];delete te[D.id]}}function q(){C(),f=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:H,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:y,disableUnusedAttributes:N}}function j1(a,e,n){let r;function l(p){r=p}function u(p,g){a.drawArrays(r,p,g),n.update(g,r,1)}function f(p,g,v){v!==0&&(a.drawArraysInstanced(r,p,g,v),n.update(g,r,v))}function h(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];n.update(S,r,1)}function m(p,g,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b]*x[b];n.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function Y1(a,e,n,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Ri&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const q=z===il&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==va&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ha&&!q)}function m(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),N=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),L=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),P=E>0,H=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:U,vertexTextures:P,maxSamples:H}}function Z1(a){const e=this;let n=null,r=0,l=!1,u=!1;const f=new br,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||l;return l=x,r=v.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=g(v,x,0)},this.setState=function(v,x,S){const E=v.clippingPlanes,b=v.clipIntersection,y=v.clipShadows,_=a.get(v);if(!l||E===null||E.length===0||u&&!y)u?g(null):p();else{const N=u?0:r,L=N*4;let U=_.clippingState||null;m.value=U,U=g(E,x,L,S);for(let P=0;P!==L;++P)U[P]=n[P];_.clippingState=U,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,S,E){const b=v!==null?v.length:0;let y=null;if(b!==0){if(y=m.value,E!==!0||y===null){const _=S+b*4,N=x.matrixWorldInverse;h.getNormalMatrix(N),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,U=S;L!==b;++L,U+=4)f.copy(v[L]).applyMatrix4(N,h),f.normal.toArray(y,U),y[U+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function K1(a){let e=new WeakMap;function n(f,h){return h===bd?f.mapping=Os:h===Td&&(f.mapping=Ps),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===bd||h===Td)if(e.has(f)){const m=e.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new $b(m.height);return p.fromEquirectangularTexture(a,f),e.set(f,p),f.addEventListener("dispose",l),n(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Ds=4,k_=[.125,.215,.35,.446,.526,.582],Rr=20,nd=new oT,X_=new St;let id=null,ad=0,rd=0,sd=!1;const Tr=(1+Math.sqrt(5))/2,ws=1/Tr,W_=[new re(-Tr,ws,0),new re(Tr,ws,0),new re(-ws,0,Tr),new re(ws,0,Tr),new re(0,Tr,-ws),new re(0,Tr,ws),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)],Q1=new re;class q_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,l=100,u={}){const{size:f=256,position:h=Q1}=u;id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(id,ad,rd),this._renderer.xr.enabled=sd,e.scissorTest=!1,ku(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),id=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:il,format:Ri,colorSpace:Is,depthBuffer:!1},l=j_(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=j_(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J1(u)),this._blurMaterial=$1(u,e,n)}return l}_compileMaterial(e){const n=new da(this._lodPlanes[0],e);this._renderer.compile(n,nd)}_sceneToCubeUV(e,n,r,l,u){const m=new si(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(X_),v.toneMapping=Ja,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const b=new fx({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),y=new da(new Lr,b);let _=!1;const N=e.background;N?N.isColor&&(b.color.copy(N),e.background=null,_=!0):(b.color.copy(X_),_=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[L],u.y,u.z)):U===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[L]));const P=this._cubeSize;ku(l,U*P,L>2?P:0,P,P),v.setRenderTarget(l),_&&v.render(y,m),v.render(e,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=N}_textureToCubeUV(e,n){const r=this._renderer,l=e.mapping===Os||e.mapping===Ps;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y_());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new da(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;ku(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,nd)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=W_[(l-u-1)%W_.length];this._blur(e,u-1,u,f,h)}n.autoClear=r}_blur(e,n,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,l,"latitudinal",u),this._halfBlur(f,e,r,r,l,"longitudinal",u)}_halfBlur(e,n,r,l,u,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new da(this._lodPlanes[l],p),x=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Rr-1),b=u/E,y=isFinite(u)?1+Math.floor(g*b):Rr;y>Rr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rr}`);const _=[];let N=0;for(let z=0;z<Rr;++z){const q=z/b,C=Math.exp(-q*q/2);_.push(C),z===0?N+=C:z<y&&(N+=2*C)}for(let z=0;z<_.length;z++)_[z]=_[z]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-r;const U=this._sizeLods[l],P=3*U*(l>L-Ds?l-L+Ds:0),H=4*(this._cubeSize-U);ku(n,P,H,3*U,2*U),m.setRenderTarget(n),m.render(v,nd)}}function J1(a){const e=[],n=[],r=[];let l=a;const u=a-Ds+1+k_.length;for(let f=0;f<u;f++){const h=Math.pow(2,l);n.push(h);let m=1/h;f>a-Ds?m=k_[f-a+Ds-1]:f===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,b=3,y=2,_=1,N=new Float32Array(b*E*S),L=new Float32Array(y*E*S),U=new Float32Array(_*E*S);for(let H=0;H<S;H++){const z=H%3*2/3-1,q=H>2?0:-1,C=[z,q,0,z+2/3,q,0,z+2/3,q+1,0,z,q,0,z+2/3,q+1,0,z,q+1,0];N.set(C,b*E*H),L.set(x,y*E*H);const D=[H,H,H,H,H,H];U.set(D,_*E*H)}const P=new ki;P.setAttribute("position",new zi(N,b)),P.setAttribute("uv",new zi(L,y)),P.setAttribute("faceIndex",new zi(U,_)),e.push(P),l>Ds&&l--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function j_(a,e,n){const r=new Ur(a,e,n);return r.texture.mapping=dc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ku(a,e,n,r,l){a.viewport.set(e,n,r,l),a.scissor.set(e,n,r,l)}function $1(a,e,n){const r=new Float32Array(Rr),l=new re(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Y_(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Z_(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Ep(){return`

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
	`}function eR(a){let e=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===bd||m===Td,g=m===Os||m===Ps;if(p||g){let v=e.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new q_(a)),v=p?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&l(S)?(n===null&&(n=new q_(a)),v=p?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function tR(a){const e={};function n(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(r)}return e[r]=l,l}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const l=n(r);return l===null&&Qo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function nR(a,e,n,r){const l={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,n.memory.geometries++),x}function m(v){const x=v.attributes;for(const S in x)e.update(x[S],a.ARRAY_BUFFER)}function p(v){const x=[],S=v.index,E=v.attributes.position;let b=0;if(S!==null){const N=S.array;b=S.version;for(let L=0,U=N.length;L<U;L+=3){const P=N[L+0],H=N[L+1],z=N[L+2];x.push(P,H,H,z,z,P)}}else if(E!==void 0){const N=E.array;b=E.version;for(let L=0,U=N.length/3-1;L<U;L+=3){const P=L+0,H=L+1,z=L+2;x.push(P,H,H,z,z,P)}}else return;const y=new(sx(x)?dx:hx)(x,1);y.version=b;const _=u.get(v);_&&e.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function iR(a,e,n){let r;function l(x){r=x}let u,f;function h(x){u=x.type,f=x.bytesPerElement}function m(x,S){a.drawElements(r,S,u,x*f),n.update(S,r,1)}function p(x,S,E){E!==0&&(a.drawElementsInstanced(r,S,u,x*f,E),n.update(S,r,E))}function g(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,E);let y=0;for(let _=0;_<E;_++)y+=S[_];n.update(y,r,1)}function v(x,S,E,b){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/f,S[_],b[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,b,0,E);let _=0;for(let N=0;N<E;N++)_+=S[N]*b[N];n.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function aR(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,h){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=h*(u/3);break;case a.LINES:n.lines+=h*(u/2);break;case a.LINE_STRIP:n.lines+=h*(u-1);break;case a.LINE_LOOP:n.lines+=h*u;break;case a.POINTS:n.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:l,update:r}}function rR(a,e,n){const r=new WeakMap,l=new sn;function u(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let D=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var S=D;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let U=0;E===!0&&(U=1),b===!0&&(U=2),y===!0&&(U=3);let P=h.attributes.position.count*U,H=1;P>e.maxTextureSize&&(H=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const z=new Float32Array(P*H*4*v),q=new ox(z,P,H,v);q.type=ha,q.needsUpdate=!0;const C=U*4;for(let V=0;V<v;V++){const te=_[V],ce=N[V],ve=L[V],fe=P*H*4*V;for(let I=0;I<te.count;I++){const W=I*C;E===!0&&(l.fromBufferAttribute(te,I),z[fe+W+0]=l.x,z[fe+W+1]=l.y,z[fe+W+2]=l.z,z[fe+W+3]=0),b===!0&&(l.fromBufferAttribute(ce,I),z[fe+W+4]=l.x,z[fe+W+5]=l.y,z[fe+W+6]=l.z,z[fe+W+7]=0),y===!0&&(l.fromBufferAttribute(ve,I),z[fe+W+8]=l.x,z[fe+W+9]=l.y,z[fe+W+10]=l.z,z[fe+W+11]=ve.itemSize===4?l.w:1)}}x={count:v,texture:q,size:new Bt(P,H)},r.set(h,x),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const b=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",b),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:u}}function sR(a,e,n,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(n.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,a.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:u,dispose:f}}const bx=new Zn,K_=new xx(1,1),Tx=new ox,Ax=new Ib,Rx=new gx,Q_=[],J_=[],$_=new Float32Array(16),e0=new Float32Array(9),t0=new Float32Array(4);function Gs(a,e,n){const r=a[0];if(r<=0||r>0)return a;const l=e*n;let u=Q_[l];if(u===void 0&&(u=new Float32Array(l),Q_[l]=u),e!==0){r.toArray(u,0);for(let f=1,h=0;f!==e;++f)h+=n,a[f].toArray(u,h)}return u}function _n(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function xn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function vc(a,e){let n=J_[e];n===void 0&&(n=new Int32Array(e),J_[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function oR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function lR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;a.uniform2fv(this.addr,e),xn(n,e)}}function uR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_n(n,e))return;a.uniform3fv(this.addr,e),xn(n,e)}}function cR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;a.uniform4fv(this.addr,e),xn(n,e)}}function fR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),xn(n,e)}else{if(_n(n,r))return;t0.set(r),a.uniformMatrix2fv(this.addr,!1,t0),xn(n,r)}}function hR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),xn(n,e)}else{if(_n(n,r))return;e0.set(r),a.uniformMatrix3fv(this.addr,!1,e0),xn(n,r)}}function dR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),xn(n,e)}else{if(_n(n,r))return;$_.set(r),a.uniformMatrix4fv(this.addr,!1,$_),xn(n,r)}}function pR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function mR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;a.uniform2iv(this.addr,e),xn(n,e)}}function gR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;a.uniform3iv(this.addr,e),xn(n,e)}}function vR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;a.uniform4iv(this.addr,e),xn(n,e)}}function _R(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function xR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;a.uniform2uiv(this.addr,e),xn(n,e)}}function yR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;a.uniform3uiv(this.addr,e),xn(n,e)}}function SR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;a.uniform4uiv(this.addr,e),xn(n,e)}}function MR(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l);let u;this.type===a.SAMPLER_2D_SHADOW?(K_.compareFunction=rx,u=K_):u=bx,n.setTexture2D(e||u,l)}function ER(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTexture3D(e||Ax,l)}function bR(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTextureCube(e||Rx,l)}function TR(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTexture2DArray(e||Tx,l)}function AR(a){switch(a){case 5126:return oR;case 35664:return lR;case 35665:return uR;case 35666:return cR;case 35674:return fR;case 35675:return hR;case 35676:return dR;case 5124:case 35670:return pR;case 35667:case 35671:return mR;case 35668:case 35672:return gR;case 35669:case 35673:return vR;case 5125:return _R;case 36294:return xR;case 36295:return yR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return MR;case 35679:case 36299:case 36307:return ER;case 35680:case 36300:case 36308:case 36293:return bR;case 36289:case 36303:case 36311:case 36292:return TR}}function RR(a,e){a.uniform1fv(this.addr,e)}function wR(a,e){const n=Gs(e,this.size,2);a.uniform2fv(this.addr,n)}function CR(a,e){const n=Gs(e,this.size,3);a.uniform3fv(this.addr,n)}function DR(a,e){const n=Gs(e,this.size,4);a.uniform4fv(this.addr,n)}function UR(a,e){const n=Gs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function NR(a,e){const n=Gs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function LR(a,e){const n=Gs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function OR(a,e){a.uniform1iv(this.addr,e)}function PR(a,e){a.uniform2iv(this.addr,e)}function IR(a,e){a.uniform3iv(this.addr,e)}function FR(a,e){a.uniform4iv(this.addr,e)}function BR(a,e){a.uniform1uiv(this.addr,e)}function zR(a,e){a.uniform2uiv(this.addr,e)}function HR(a,e){a.uniform3uiv(this.addr,e)}function GR(a,e){a.uniform4uiv(this.addr,e)}function VR(a,e,n){const r=this.cache,l=e.length,u=vc(n,l);_n(r,u)||(a.uniform1iv(this.addr,u),xn(r,u));for(let f=0;f!==l;++f)n.setTexture2D(e[f]||bx,u[f])}function kR(a,e,n){const r=this.cache,l=e.length,u=vc(n,l);_n(r,u)||(a.uniform1iv(this.addr,u),xn(r,u));for(let f=0;f!==l;++f)n.setTexture3D(e[f]||Ax,u[f])}function XR(a,e,n){const r=this.cache,l=e.length,u=vc(n,l);_n(r,u)||(a.uniform1iv(this.addr,u),xn(r,u));for(let f=0;f!==l;++f)n.setTextureCube(e[f]||Rx,u[f])}function WR(a,e,n){const r=this.cache,l=e.length,u=vc(n,l);_n(r,u)||(a.uniform1iv(this.addr,u),xn(r,u));for(let f=0;f!==l;++f)n.setTexture2DArray(e[f]||Tx,u[f])}function qR(a){switch(a){case 5126:return RR;case 35664:return wR;case 35665:return CR;case 35666:return DR;case 35674:return UR;case 35675:return NR;case 35676:return LR;case 5124:case 35670:return OR;case 35667:case 35671:return PR;case 35668:case 35672:return IR;case 35669:case 35673:return FR;case 5125:return BR;case 36294:return zR;case 36295:return HR;case 36296:return GR;case 35678:case 36198:case 36298:case 36306:case 35682:return VR;case 35679:case 36299:case 36307:return kR;case 35680:case 36300:case 36308:case 36293:return XR;case 36289:case 36303:case 36311:case 36292:return WR}}class jR{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=AR(n.type)}}class YR{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=qR(n.type)}}class ZR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const h=l[u];h.setValue(e,n[h.id],r)}}}const od=/(\w+)(\])?(\[|\.)?/g;function n0(a,e){a.seq.push(e),a.map[e.id]=e}function KR(a,e,n){const r=a.name,l=r.length;for(od.lastIndex=0;;){const u=od.exec(r),f=od.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){n0(n,p===void 0?new jR(h,a,e):new YR(h,a,e));break}else{let v=n.map[h];v===void 0&&(v=new ZR(h),n0(n,v)),n=v}}}class $u{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(n,l),f=e.getUniformLocation(n,u.name);KR(u,f,this)}}setValue(e,n,r,l){const u=this.map[n];u!==void 0&&u.setValue(e,r,l)}setOptional(e,n,r){const l=n[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,n,r,l){for(let u=0,f=n.length;u!==f;++u){const h=n[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,n){const r=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in n&&r.push(f)}return r}}function i0(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const QR=37297;let JR=0;function $R(a,e){const n=a.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=l;f<u;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${n[f]}`)}return r.join(`
`)}const a0=new ft;function ew(a){At._getMatrix(a0,At.workingColorSpace,a);const e=`mat3( ${a0.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(a)){case nc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function r0(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),u=(a.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+u+`

`+$R(a.getShaderSource(e),h)}else return u}function tw(a,e){const n=ew(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nw(a,e){let n;switch(e){case ub:n="Linear";break;case cb:n="Reinhard";break;case fb:n="Cineon";break;case hb:n="ACESFilmic";break;case pb:n="AgX";break;case mb:n="Neutral";break;case db:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xu=new re;function iw(){At.getLuminanceCoefficients(Xu);const a=Xu.x.toFixed(4),e=Xu.y.toFixed(4),n=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aw(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function rw(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function sw(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=a.getActiveAttrib(e,l),f=u.name;let h=1;u.type===a.FLOAT_MAT2&&(h=2),u.type===a.FLOAT_MAT3&&(h=3),u.type===a.FLOAT_MAT4&&(h=4),n[f]={type:u.type,location:a.getAttribLocation(e,f),locationSize:h}}return n}function Wo(a){return a!==""}function s0(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o0(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(a){return a.replace(ow,uw)}const lw=new Map;function uw(a,e){let n=pt[e];if(n===void 0){const r=lw.get(e);if(r!==void 0)n=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ip(n)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l0(a){return a.replace(cw,fw)}function fw(a,e,n,r){let l="";for(let u=parseInt(e);u<parseInt(n);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function u0(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hw(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Y0?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===VE?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ca&&(e="SHADOWMAP_TYPE_VSM"),e}function dw(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Os:case Ps:e="ENVMAP_TYPE_CUBE";break;case dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pw(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function mw(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Z0:e="ENVMAP_BLENDING_MULTIPLY";break;case ob:e="ENVMAP_BLENDING_MIX";break;case lb:e="ENVMAP_BLENDING_ADD";break}return e}function gw(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function vw(a,e,n,r){const l=a.getContext(),u=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=hw(n),p=dw(n),g=pw(n),v=mw(n),x=gw(n),S=aw(n),E=rw(u),b=l.createProgram();let y,_,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Wo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Wo).join(`
`),_.length>0&&(_+=`
`)):(y=[u0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),_=[u0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ja?"#define TONE_MAPPING":"",n.toneMapping!==Ja?pt.tonemapping_pars_fragment:"",n.toneMapping!==Ja?nw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,tw("linearToOutputTexel",n.outputColorSpace),iw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wo).join(`
`)),f=ip(f),f=s0(f,n),f=o0(f,n),h=ip(h),h=s0(h,n),h=o0(h,n),f=l0(f),h=l0(h),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",n.glslVersion===y_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===y_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=N+y+f,U=N+_+h,P=i0(l,l.VERTEX_SHADER,L),H=i0(l,l.FRAGMENT_SHADER,U);l.attachShader(b,P),l.attachShader(b,H),n.index0AttributeName!==void 0?l.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function z(V){if(a.debug.checkShaderErrors){const te=l.getProgramInfoLog(b)||"",ce=l.getShaderInfoLog(P)||"",ve=l.getShaderInfoLog(H)||"",fe=te.trim(),I=ce.trim(),W=ve.trim();let j=!0,xe=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(j=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,b,P,H);else{const A=r0(l,P,"vertex"),G=r0(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+fe+`
`+A+`
`+G)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(I===""||W==="")&&(xe=!1);xe&&(V.diagnostics={runnable:j,programLog:fe,vertexShader:{log:I,prefix:y},fragmentShader:{log:W,prefix:_}})}l.deleteShader(P),l.deleteShader(H),q=new $u(l,b),C=sw(l,b)}let q;this.getUniforms=function(){return q===void 0&&z(this),q};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(b,QR)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JR++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=H,this}let _w=0;class xw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new yw(e),n.set(e,r)),r}}class yw{constructor(e){this.id=_w++,this.code=e,this.usedTimes=0}}function Sw(a,e,n,r,l,u,f){const h=new ux,m=new xw,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,D,V,te,ce){const ve=te.fog,fe=ce.geometry,I=C.isMeshStandardMaterial?te.environment:null,W=(C.isMeshStandardMaterial?n:e).get(C.envMap||I),j=W&&W.mapping===dc?W.image.height:null,xe=E[C.type];C.precision!==null&&(S=l.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const A=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,G=A!==void 0?A.length:0;let se=0;fe.morphAttributes.position!==void 0&&(se=1),fe.morphAttributes.normal!==void 0&&(se=2),fe.morphAttributes.color!==void 0&&(se=3);let le,Ee,Ue,J;if(xe){const Et=Ii[xe];le=Et.vertexShader,Ee=Et.fragmentShader}else le=C.vertexShader,Ee=C.fragmentShader,m.update(C),Ue=m.getVertexShaderID(C),J=m.getFragmentShaderID(C);const me=a.getRenderTarget(),be=a.state.buffers.depth.getReversed(),qe=ce.isInstancedMesh===!0,He=ce.isBatchedMesh===!0,je=!!C.map,kt=!!C.matcap,B=!!W,Ut=!!C.aoMap,ot=!!C.lightMap,at=!!C.bumpMap,Fe=!!C.normalMap,Gt=!!C.displacementMap,Xe=!!C.emissiveMap,lt=!!C.metalnessMap,Yt=!!C.roughnessMap,Zt=C.anisotropy>0,O=C.clearcoat>0,T=C.dispersion>0,ne=C.iridescence>0,pe=C.sheen>0,ye=C.transmission>0,he=Zt&&!!C.anisotropyMap,Be=O&&!!C.clearcoatMap,Ce=O&&!!C.clearcoatNormalMap,Ye=O&&!!C.clearcoatRoughnessMap,Ke=ne&&!!C.iridescenceMap,Te=ne&&!!C.iridescenceThicknessMap,Oe=pe&&!!C.sheenColorMap,Je=pe&&!!C.sheenRoughnessMap,We=!!C.specularMap,Ne=!!C.specularColorMap,ut=!!C.specularIntensityMap,X=ye&&!!C.transmissionMap,we=ye&&!!C.thicknessMap,De=!!C.gradientMap,ze=!!C.alphaMap,Ae=C.alphaTest>0,Me=!!C.alphaHash,ke=!!C.extensions;let st=Ja;C.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(st=a.toneMapping);const wt={shaderID:xe,shaderType:C.type,shaderName:C.name,vertexShader:le,fragmentShader:Ee,defines:C.defines,customVertexShaderID:Ue,customFragmentShaderID:J,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:He,batchingColor:He&&ce._colorsTexture!==null,instancing:qe,instancingColor:qe&&ce.instanceColor!==null,instancingMorph:qe&&ce.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:me===null?a.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Is,alphaToCoverage:!!C.alphaToCoverage,map:je,matcap:kt,envMap:B,envMapMode:B&&W.mapping,envMapCubeUVHeight:j,aoMap:Ut,lightMap:ot,bumpMap:at,normalMap:Fe,displacementMap:x&&Gt,emissiveMap:Xe,normalMapObjectSpace:Fe&&C.normalMapType===yb,normalMapTangentSpace:Fe&&C.normalMapType===xb,metalnessMap:lt,roughnessMap:Yt,anisotropy:Zt,anisotropyMap:he,clearcoat:O,clearcoatMap:Be,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Ye,dispersion:T,iridescence:ne,iridescenceMap:Ke,iridescenceThicknessMap:Te,sheen:pe,sheenColorMap:Oe,sheenRoughnessMap:Je,specularMap:We,specularColorMap:Ne,specularIntensityMap:ut,transmission:ye,transmissionMap:X,thicknessMap:we,gradientMap:De,opaque:C.transparent===!1&&C.blending===Us&&C.alphaToCoverage===!1,alphaMap:ze,alphaTest:Ae,alphaHash:Me,combine:C.combine,mapUv:je&&b(C.map.channel),aoMapUv:Ut&&b(C.aoMap.channel),lightMapUv:ot&&b(C.lightMap.channel),bumpMapUv:at&&b(C.bumpMap.channel),normalMapUv:Fe&&b(C.normalMap.channel),displacementMapUv:Gt&&b(C.displacementMap.channel),emissiveMapUv:Xe&&b(C.emissiveMap.channel),metalnessMapUv:lt&&b(C.metalnessMap.channel),roughnessMapUv:Yt&&b(C.roughnessMap.channel),anisotropyMapUv:he&&b(C.anisotropyMap.channel),clearcoatMapUv:Be&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Je&&b(C.sheenRoughnessMap.channel),specularMapUv:We&&b(C.specularMap.channel),specularColorMapUv:Ne&&b(C.specularColorMap.channel),specularIntensityMapUv:ut&&b(C.specularIntensityMap.channel),transmissionMapUv:X&&b(C.transmissionMap.channel),thicknessMapUv:we&&b(C.thicknessMap.channel),alphaMapUv:ze&&b(C.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Fe||Zt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!fe.attributes.uv&&(je||ze),fog:!!ve,useFog:C.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:be,skinning:ce.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:se,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:a.shadowMap.enabled&&V.length>0,shadowMapType:a.shadowMap.type,toneMapping:st,decodeVideoTexture:je&&C.map.isVideoTexture===!0&&At.getTransfer(C.map.colorSpace)===It,decodeVideoTextureEmissive:Xe&&C.emissiveMap.isVideoTexture===!0&&At.getTransfer(C.emissiveMap.colorSpace)===It,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===fa,flipSided:C.side===Yn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ke&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&C.extensions.multiDraw===!0||He)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return wt.vertexUv1s=p.has(1),wt.vertexUv2s=p.has(2),wt.vertexUv3s=p.has(3),p.clear(),wt}function _(C){const D=[];if(C.shaderID?D.push(C.shaderID):(D.push(C.customVertexShaderID),D.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)D.push(V),D.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(N(D,C),L(D,C),D.push(a.outputColorSpace)),D.push(C.customProgramCacheKey),D.join()}function N(C,D){C.push(D.precision),C.push(D.outputColorSpace),C.push(D.envMapMode),C.push(D.envMapCubeUVHeight),C.push(D.mapUv),C.push(D.alphaMapUv),C.push(D.lightMapUv),C.push(D.aoMapUv),C.push(D.bumpMapUv),C.push(D.normalMapUv),C.push(D.displacementMapUv),C.push(D.emissiveMapUv),C.push(D.metalnessMapUv),C.push(D.roughnessMapUv),C.push(D.anisotropyMapUv),C.push(D.clearcoatMapUv),C.push(D.clearcoatNormalMapUv),C.push(D.clearcoatRoughnessMapUv),C.push(D.iridescenceMapUv),C.push(D.iridescenceThicknessMapUv),C.push(D.sheenColorMapUv),C.push(D.sheenRoughnessMapUv),C.push(D.specularMapUv),C.push(D.specularColorMapUv),C.push(D.specularIntensityMapUv),C.push(D.transmissionMapUv),C.push(D.thicknessMapUv),C.push(D.combine),C.push(D.fogExp2),C.push(D.sizeAttenuation),C.push(D.morphTargetsCount),C.push(D.morphAttributeCount),C.push(D.numDirLights),C.push(D.numPointLights),C.push(D.numSpotLights),C.push(D.numSpotLightMaps),C.push(D.numHemiLights),C.push(D.numRectAreaLights),C.push(D.numDirLightShadows),C.push(D.numPointLightShadows),C.push(D.numSpotLightShadows),C.push(D.numSpotLightShadowsWithMaps),C.push(D.numLightProbes),C.push(D.shadowMapType),C.push(D.toneMapping),C.push(D.numClippingPlanes),C.push(D.numClipIntersection),C.push(D.depthPacking)}function L(C,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),C.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),C.push(h.mask)}function U(C){const D=E[C.type];let V;if(D){const te=Ii[D];V=Zb.clone(te.uniforms)}else V=C.uniforms;return V}function P(C,D){let V;for(let te=0,ce=g.length;te<ce;te++){const ve=g[te];if(ve.cacheKey===D){V=ve,++V.usedTimes;break}}return V===void 0&&(V=new vw(a,D,C,u),g.push(V)),V}function H(C){if(--C.usedTimes===0){const D=g.indexOf(C);g[D]=g[g.length-1],g.pop(),C.destroy()}}function z(C){m.remove(C)}function q(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:U,acquireProgram:P,releaseProgram:H,releaseShaderCache:z,programs:g,dispose:q}}function Mw(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function r(f){a.delete(f)}function l(f,h,m){a.get(f)[h]=m}function u(){a=new WeakMap}return{has:e,get:n,remove:r,update:l,dispose:u}}function Ew(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function c0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function f0(){const a=[];let e=0;const n=[],r=[],l=[];function u(){e=0,n.length=0,r.length=0,l.length=0}function f(v,x,S,E,b,y){let _=a[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:E,renderOrder:v.renderOrder,z:b,group:y},a[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=b,_.group=y),e++,_}function h(v,x,S,E,b,y){const _=f(v,x,S,E,b,y);S.transmission>0?r.push(_):S.transparent===!0?l.push(_):n.push(_)}function m(v,x,S,E,b,y){const _=f(v,x,S,E,b,y);S.transmission>0?r.unshift(_):S.transparent===!0?l.unshift(_):n.unshift(_)}function p(v,x){n.length>1&&n.sort(v||Ew),r.length>1&&r.sort(x||c0),l.length>1&&l.sort(x||c0)}function g(){for(let v=e,x=a.length;v<x;v++){const S=a[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function bw(){let a=new WeakMap;function e(r,l){const u=a.get(r);let f;return u===void 0?(f=new f0,a.set(r,[f])):l>=u.length?(f=new f0,u.push(f)):f=u[l],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function Tw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new re,color:new St};break;case"SpotLight":n={position:new re,direction:new re,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new re,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new re,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new re,halfWidth:new re,halfHeight:new re};break}return a[e.id]=n,n}}}function Aw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let Rw=0;function ww(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Cw(a){const e=new Tw,n=Aw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new re);const l=new re,u=new dn,f=new dn;function h(p){let g=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,E=0,b=0,y=0,_=0,N=0,L=0,U=0,P=0,H=0,z=0;p.sort(ww);for(let C=0,D=p.length;C<D;C++){const V=p[C],te=V.color,ce=V.intensity,ve=V.distance,fe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=te.r*ce,v+=te.g*ce,x+=te.b*ce;else if(V.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(V.sh.coefficients[I],ce);z++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const W=V.shadow,j=n.get(V);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,r.directionalShadow[S]=j,r.directionalShadowMap[S]=fe,r.directionalShadowMatrix[S]=V.shadow.matrix,N++}r.directional[S]=I,S++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(te).multiplyScalar(ce),I.distance=ve,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,r.spot[b]=I;const W=V.shadow;if(V.map&&(r.spotLightMap[P]=V.map,P++,W.updateMatrices(V),V.castShadow&&H++),r.spotLightMatrix[b]=W.matrix,V.castShadow){const j=n.get(V);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,r.spotShadow[b]=j,r.spotShadowMap[b]=fe,U++}b++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy(te).multiplyScalar(ce),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=I,y++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const W=V.shadow,j=n.get(V);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=fe,r.pointShadowMatrix[E]=V.shadow.matrix,L++}r.point[E]=I,E++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(ce),I.groundColor.copy(V.groundColor).multiplyScalar(ce),r.hemi[_]=I,_++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const q=r.hash;(q.directionalLength!==S||q.pointLength!==E||q.spotLength!==b||q.rectAreaLength!==y||q.hemiLength!==_||q.numDirectionalShadows!==N||q.numPointShadows!==L||q.numSpotShadows!==U||q.numSpotMaps!==P||q.numLightProbes!==z)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=U+P-H,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=z,q.directionalLength=S,q.pointLength=E,q.spotLength=b,q.rectAreaLength=y,q.hemiLength=_,q.numDirectionalShadows=N,q.numPointShadows=L,q.numSpotShadows=U,q.numSpotMaps=P,q.numLightProbes=z,r.version=Rw++)}function m(p,g){let v=0,x=0,S=0,E=0,b=0;const y=g.matrixWorldInverse;for(let _=0,N=p.length;_<N;_++){const L=p[_];if(L.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),v++}else if(L.isSpotLight){const U=r.spot[S];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),f.identity(),u.copy(L.matrixWorld),u.premultiply(y),f.extractRotation(u),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const U=r.hemi[b];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(y),b++}}}return{setup:h,setupView:m,state:r}}function h0(a){const e=new Cw(a),n=[],r=[];function l(g){p.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function f(g){r.push(g)}function h(){e.setup(n)}function m(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:f}}function Dw(a){let e=new WeakMap;function n(l,u=0){const f=e.get(l);let h;return f===void 0?(h=new h0(a),e.set(l,[h])):u>=f.length?(h=new h0(a),f.push(h)):h=f[u],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const Uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nw=`uniform sampler2D shadow_pass;
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
}`;function Lw(a,e,n){let r=new _x;const l=new Bt,u=new Bt,f=new sn,h=new rT({depthPacking:_b}),m=new sT,p={},g=n.maxTextureSize,v={[$a]:Yn,[Yn]:$a,[fa]:fa},x=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Uw,fragmentShader:Nw}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new ki;E.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new da(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y0;let _=this.type;this.render=function(H,z,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const C=a.getRenderTarget(),D=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),te=a.state;te.setBlending(Qa),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const ce=_!==ca&&this.type===ca,ve=_===ca&&this.type!==ca;for(let fe=0,I=H.length;fe<I;fe++){const W=H[fe],j=W.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const xe=j.getFrameExtents();if(l.multiply(xe),u.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/xe.x),l.x=u.x*xe.x,j.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/xe.y),l.y=u.y*xe.y,j.mapSize.y=u.y)),j.map===null||ce===!0||ve===!0){const G=this.type!==ca?{minFilter:wi,magFilter:wi}:{};j.map!==null&&j.map.dispose(),j.map=new Ur(l.x,l.y,G),j.map.texture.name=W.name+".shadowMap",j.camera.updateProjectionMatrix()}a.setRenderTarget(j.map),a.clear();const A=j.getViewportCount();for(let G=0;G<A;G++){const se=j.getViewport(G);f.set(u.x*se.x,u.y*se.y,u.x*se.z,u.y*se.w),te.viewport(f),j.updateMatrices(W,G),r=j.getFrustum(),U(z,q,j.camera,W,this.type)}j.isPointLightShadow!==!0&&this.type===ca&&N(j,q),j.needsUpdate=!1}_=this.type,y.needsUpdate=!1,a.setRenderTarget(C,D,V)};function N(H,z){const q=e.update(b);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ur(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,a.setRenderTarget(H.mapPass),a.clear(),a.renderBufferDirect(z,null,q,x,b,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,a.setRenderTarget(H.map),a.clear(),a.renderBufferDirect(z,null,q,S,b,null)}function L(H,z,q,C){let D=null;const V=q.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)D=V;else if(D=q.isPointLight===!0?m:h,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const te=D.uuid,ce=z.uuid;let ve=p[te];ve===void 0&&(ve={},p[te]=ve);let fe=ve[ce];fe===void 0&&(fe=D.clone(),ve[ce]=fe,z.addEventListener("dispose",P)),D=fe}if(D.visible=z.visible,D.wireframe=z.wireframe,C===ca?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:v[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,q.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const te=a.properties.get(D);te.light=q}return D}function U(H,z,q,C,D){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&D===ca)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,H.matrixWorld);const ce=e.update(H),ve=H.material;if(Array.isArray(ve)){const fe=ce.groups;for(let I=0,W=fe.length;I<W;I++){const j=fe[I],xe=ve[j.materialIndex];if(xe&&xe.visible){const A=L(H,xe,C,D);H.onBeforeShadow(a,H,z,q,ce,A,j),a.renderBufferDirect(q,null,ce,A,H,j),H.onAfterShadow(a,H,z,q,ce,A,j)}}}else if(ve.visible){const fe=L(H,ve,C,D);H.onBeforeShadow(a,H,z,q,ce,fe,null),a.renderBufferDirect(q,null,ce,fe,H,null),H.onAfterShadow(a,H,z,q,ce,fe,null)}}const te=H.children;for(let ce=0,ve=te.length;ce<ve;ce++)U(te[ce],z,q,C,D)}function P(H){H.target.removeEventListener("dispose",P);for(const q in p){const C=p[q],D=H.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}const Ow={[vd]:_d,[xd]:Md,[yd]:Ed,[Ls]:Sd,[_d]:vd,[Md]:xd,[Ed]:yd,[Sd]:Ls};function Pw(a,e){function n(){let X=!1;const we=new sn;let De=null;const ze=new sn(0,0,0,0);return{setMask:function(Ae){De!==Ae&&!X&&(a.colorMask(Ae,Ae,Ae,Ae),De=Ae)},setLocked:function(Ae){X=Ae},setClear:function(Ae,Me,ke,st,wt){wt===!0&&(Ae*=st,Me*=st,ke*=st),we.set(Ae,Me,ke,st),ze.equals(we)===!1&&(a.clearColor(Ae,Me,ke,st),ze.copy(we))},reset:function(){X=!1,De=null,ze.set(-1,0,0,0)}}}function r(){let X=!1,we=!1,De=null,ze=null,Ae=null;return{setReversed:function(Me){if(we!==Me){const ke=e.get("EXT_clip_control");Me?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),we=Me;const st=Ae;Ae=null,this.setClear(st)}},getReversed:function(){return we},setTest:function(Me){Me?me(a.DEPTH_TEST):be(a.DEPTH_TEST)},setMask:function(Me){De!==Me&&!X&&(a.depthMask(Me),De=Me)},setFunc:function(Me){if(we&&(Me=Ow[Me]),ze!==Me){switch(Me){case vd:a.depthFunc(a.NEVER);break;case _d:a.depthFunc(a.ALWAYS);break;case xd:a.depthFunc(a.LESS);break;case Ls:a.depthFunc(a.LEQUAL);break;case yd:a.depthFunc(a.EQUAL);break;case Sd:a.depthFunc(a.GEQUAL);break;case Md:a.depthFunc(a.GREATER);break;case Ed:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ze=Me}},setLocked:function(Me){X=Me},setClear:function(Me){Ae!==Me&&(we&&(Me=1-Me),a.clearDepth(Me),Ae=Me)},reset:function(){X=!1,De=null,ze=null,Ae=null,we=!1}}}function l(){let X=!1,we=null,De=null,ze=null,Ae=null,Me=null,ke=null,st=null,wt=null;return{setTest:function(Et){X||(Et?me(a.STENCIL_TEST):be(a.STENCIL_TEST))},setMask:function(Et){we!==Et&&!X&&(a.stencilMask(Et),we=Et)},setFunc:function(Et,_i,pn){(De!==Et||ze!==_i||Ae!==pn)&&(a.stencilFunc(Et,_i,pn),De=Et,ze=_i,Ae=pn)},setOp:function(Et,_i,pn){(Me!==Et||ke!==_i||st!==pn)&&(a.stencilOp(Et,_i,pn),Me=Et,ke=_i,st=pn)},setLocked:function(Et){X=Et},setClear:function(Et){wt!==Et&&(a.clearStencil(Et),wt=Et)},reset:function(){X=!1,we=null,De=null,ze=null,Ae=null,Me=null,ke=null,st=null,wt=null}}}const u=new n,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,S=[],E=null,b=!1,y=null,_=null,N=null,L=null,U=null,P=null,H=null,z=new St(0,0,0),q=0,C=!1,D=null,V=null,te=null,ce=null,ve=null;const fe=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,W=0;const j=a.getParameter(a.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),I=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),I=W>=2);let xe=null,A={};const G=a.getParameter(a.SCISSOR_BOX),se=a.getParameter(a.VIEWPORT),le=new sn().fromArray(G),Ee=new sn().fromArray(se);function Ue(X,we,De,ze){const Ae=new Uint8Array(4),Me=a.createTexture();a.bindTexture(X,Me),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ke=0;ke<De;ke++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(we,0,a.RGBA,1,1,ze,0,a.RGBA,a.UNSIGNED_BYTE,Ae):a.texImage2D(we+ke,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ae);return Me}const J={};J[a.TEXTURE_2D]=Ue(a.TEXTURE_2D,a.TEXTURE_2D,1),J[a.TEXTURE_CUBE_MAP]=Ue(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[a.TEXTURE_2D_ARRAY]=Ue(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),J[a.TEXTURE_3D]=Ue(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),me(a.DEPTH_TEST),f.setFunc(Ls),at(!1),Fe(p_),me(a.CULL_FACE),Ut(Qa);function me(X){g[X]!==!0&&(a.enable(X),g[X]=!0)}function be(X){g[X]!==!1&&(a.disable(X),g[X]=!1)}function qe(X,we){return v[X]!==we?(a.bindFramebuffer(X,we),v[X]=we,X===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=we),X===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=we),!0):!1}function He(X,we){let De=S,ze=!1;if(X){De=x.get(we),De===void 0&&(De=[],x.set(we,De));const Ae=X.textures;if(De.length!==Ae.length||De[0]!==a.COLOR_ATTACHMENT0){for(let Me=0,ke=Ae.length;Me<ke;Me++)De[Me]=a.COLOR_ATTACHMENT0+Me;De.length=Ae.length,ze=!0}}else De[0]!==a.BACK&&(De[0]=a.BACK,ze=!0);ze&&a.drawBuffers(De)}function je(X){return E!==X?(a.useProgram(X),E=X,!0):!1}const kt={[Ar]:a.FUNC_ADD,[XE]:a.FUNC_SUBTRACT,[WE]:a.FUNC_REVERSE_SUBTRACT};kt[qE]=a.MIN,kt[jE]=a.MAX;const B={[YE]:a.ZERO,[ZE]:a.ONE,[KE]:a.SRC_COLOR,[md]:a.SRC_ALPHA,[nb]:a.SRC_ALPHA_SATURATE,[eb]:a.DST_COLOR,[JE]:a.DST_ALPHA,[QE]:a.ONE_MINUS_SRC_COLOR,[gd]:a.ONE_MINUS_SRC_ALPHA,[tb]:a.ONE_MINUS_DST_COLOR,[$E]:a.ONE_MINUS_DST_ALPHA,[ib]:a.CONSTANT_COLOR,[ab]:a.ONE_MINUS_CONSTANT_COLOR,[rb]:a.CONSTANT_ALPHA,[sb]:a.ONE_MINUS_CONSTANT_ALPHA};function Ut(X,we,De,ze,Ae,Me,ke,st,wt,Et){if(X===Qa){b===!0&&(be(a.BLEND),b=!1);return}if(b===!1&&(me(a.BLEND),b=!0),X!==kE){if(X!==y||Et!==C){if((_!==Ar||U!==Ar)&&(a.blendEquation(a.FUNC_ADD),_=Ar,U=Ar),Et)switch(X){case Us:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case m_:a.blendFunc(a.ONE,a.ONE);break;case g_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case v_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Us:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case m_:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case g_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case v_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}N=null,L=null,P=null,H=null,z.set(0,0,0),q=0,y=X,C=Et}return}Ae=Ae||we,Me=Me||De,ke=ke||ze,(we!==_||Ae!==U)&&(a.blendEquationSeparate(kt[we],kt[Ae]),_=we,U=Ae),(De!==N||ze!==L||Me!==P||ke!==H)&&(a.blendFuncSeparate(B[De],B[ze],B[Me],B[ke]),N=De,L=ze,P=Me,H=ke),(st.equals(z)===!1||wt!==q)&&(a.blendColor(st.r,st.g,st.b,wt),z.copy(st),q=wt),y=X,C=!1}function ot(X,we){X.side===fa?be(a.CULL_FACE):me(a.CULL_FACE);let De=X.side===Yn;we&&(De=!De),at(De),X.blending===Us&&X.transparent===!1?Ut(Qa):Ut(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),u.setMask(X.colorWrite);const ze=X.stencilWrite;h.setTest(ze),ze&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Xe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?me(a.SAMPLE_ALPHA_TO_COVERAGE):be(a.SAMPLE_ALPHA_TO_COVERAGE)}function at(X){D!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),D=X)}function Fe(X){X!==HE?(me(a.CULL_FACE),X!==V&&(X===p_?a.cullFace(a.BACK):X===GE?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):be(a.CULL_FACE),V=X}function Gt(X){X!==te&&(I&&a.lineWidth(X),te=X)}function Xe(X,we,De){X?(me(a.POLYGON_OFFSET_FILL),(ce!==we||ve!==De)&&(a.polygonOffset(we,De),ce=we,ve=De)):be(a.POLYGON_OFFSET_FILL)}function lt(X){X?me(a.SCISSOR_TEST):be(a.SCISSOR_TEST)}function Yt(X){X===void 0&&(X=a.TEXTURE0+fe-1),xe!==X&&(a.activeTexture(X),xe=X)}function Zt(X,we,De){De===void 0&&(xe===null?De=a.TEXTURE0+fe-1:De=xe);let ze=A[De];ze===void 0&&(ze={type:void 0,texture:void 0},A[De]=ze),(ze.type!==X||ze.texture!==we)&&(xe!==De&&(a.activeTexture(De),xe=De),a.bindTexture(X,we||J[X]),ze.type=X,ze.texture=we)}function O(){const X=A[xe];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{a.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ne(){try{a.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{a.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ye(){try{a.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{a.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Be(){try{a.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{a.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ye(){try{a.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ke(){try{a.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{a.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(X){le.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),le.copy(X))}function Je(X){Ee.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),Ee.copy(X))}function We(X,we){let De=p.get(we);De===void 0&&(De=new WeakMap,p.set(we,De));let ze=De.get(X);ze===void 0&&(ze=a.getUniformBlockIndex(we,X.name),De.set(X,ze))}function Ne(X,we){const ze=p.get(we).get(X);m.get(we)!==ze&&(a.uniformBlockBinding(we,ze,X.__bindingPointIndex),m.set(we,ze))}function ut(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},xe=null,A={},v={},x=new WeakMap,S=[],E=null,b=!1,y=null,_=null,N=null,L=null,U=null,P=null,H=null,z=new St(0,0,0),q=0,C=!1,D=null,V=null,te=null,ce=null,ve=null,le.set(0,0,a.canvas.width,a.canvas.height),Ee.set(0,0,a.canvas.width,a.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:me,disable:be,bindFramebuffer:qe,drawBuffers:He,useProgram:je,setBlending:Ut,setMaterial:ot,setFlipSided:at,setCullFace:Fe,setLineWidth:Gt,setPolygonOffset:Xe,setScissorTest:lt,activeTexture:Yt,bindTexture:Zt,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:ne,texImage2D:Ke,texImage3D:Te,updateUBOMapping:We,uniformBlockBinding:Ne,texStorage2D:Ce,texStorage3D:Ye,texSubImage2D:pe,texSubImage3D:ye,compressedTexSubImage2D:he,compressedTexSubImage3D:Be,scissor:Oe,viewport:Je,reset:ut}}function Iw(a,e,n,r,l,u,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Bt,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return S?new OffscreenCanvas(O,T):ac("canvas")}function b(O,T,ne){let pe=1;const ye=Zt(O);if((ye.width>ne||ye.height>ne)&&(pe=ne/Math.max(ye.width,ye.height)),pe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const he=Math.floor(pe*ye.width),Be=Math.floor(pe*ye.height);v===void 0&&(v=E(he,Be));const Ce=T?E(he,Be):v;return Ce.width=he,Ce.height=Be,Ce.getContext("2d").drawImage(O,0,0,he,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+he+"x"+Be+")."),Ce}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),O;return O}function y(O){return O.generateMipmaps}function _(O){a.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?a.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function L(O,T,ne,pe,ye=!1){if(O!==null){if(a[O]!==void 0)return a[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he=T;if(T===a.RED&&(ne===a.FLOAT&&(he=a.R32F),ne===a.HALF_FLOAT&&(he=a.R16F),ne===a.UNSIGNED_BYTE&&(he=a.R8)),T===a.RED_INTEGER&&(ne===a.UNSIGNED_BYTE&&(he=a.R8UI),ne===a.UNSIGNED_SHORT&&(he=a.R16UI),ne===a.UNSIGNED_INT&&(he=a.R32UI),ne===a.BYTE&&(he=a.R8I),ne===a.SHORT&&(he=a.R16I),ne===a.INT&&(he=a.R32I)),T===a.RG&&(ne===a.FLOAT&&(he=a.RG32F),ne===a.HALF_FLOAT&&(he=a.RG16F),ne===a.UNSIGNED_BYTE&&(he=a.RG8)),T===a.RG_INTEGER&&(ne===a.UNSIGNED_BYTE&&(he=a.RG8UI),ne===a.UNSIGNED_SHORT&&(he=a.RG16UI),ne===a.UNSIGNED_INT&&(he=a.RG32UI),ne===a.BYTE&&(he=a.RG8I),ne===a.SHORT&&(he=a.RG16I),ne===a.INT&&(he=a.RG32I)),T===a.RGB_INTEGER&&(ne===a.UNSIGNED_BYTE&&(he=a.RGB8UI),ne===a.UNSIGNED_SHORT&&(he=a.RGB16UI),ne===a.UNSIGNED_INT&&(he=a.RGB32UI),ne===a.BYTE&&(he=a.RGB8I),ne===a.SHORT&&(he=a.RGB16I),ne===a.INT&&(he=a.RGB32I)),T===a.RGBA_INTEGER&&(ne===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),ne===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),ne===a.UNSIGNED_INT&&(he=a.RGBA32UI),ne===a.BYTE&&(he=a.RGBA8I),ne===a.SHORT&&(he=a.RGBA16I),ne===a.INT&&(he=a.RGBA32I)),T===a.RGB&&(ne===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),ne===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),T===a.RGBA){const Be=ye?nc:At.getTransfer(pe);ne===a.FLOAT&&(he=a.RGBA32F),ne===a.HALF_FLOAT&&(he=a.RGBA16F),ne===a.UNSIGNED_BYTE&&(he=Be===It?a.SRGB8_ALPHA8:a.RGBA8),ne===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),ne===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function U(O,T){let ne;return O?T===null||T===Dr||T===Yo?ne=a.DEPTH24_STENCIL8:T===ha?ne=a.DEPTH32F_STENCIL8:T===jo&&(ne=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Dr||T===Yo?ne=a.DEPTH_COMPONENT24:T===ha?ne=a.DEPTH_COMPONENT32F:T===jo&&(ne=a.DEPTH_COMPONENT16),ne}function P(O,T){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==wi&&O.minFilter!==Fi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function H(O){const T=O.target;T.removeEventListener("dispose",H),q(T),T.isVideoTexture&&g.delete(T)}function z(O){const T=O.target;T.removeEventListener("dispose",z),D(T)}function q(O){const T=r.get(O);if(T.__webglInit===void 0)return;const ne=O.source,pe=x.get(ne);if(pe){const ye=pe[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&C(O),Object.keys(pe).length===0&&x.delete(ne)}r.remove(O)}function C(O){const T=r.get(O);a.deleteTexture(T.__webglTexture);const ne=O.source,pe=x.get(ne);delete pe[T.__cacheKey],f.memory.textures--}function D(O){const T=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ye=0;ye<T.__webglFramebuffer[pe].length;ye++)a.deleteFramebuffer(T.__webglFramebuffer[pe][ye]);else a.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)a.deleteFramebuffer(T.__webglFramebuffer[pe]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ne=O.textures;for(let pe=0,ye=ne.length;pe<ye;pe++){const he=r.get(ne[pe]);he.__webglTexture&&(a.deleteTexture(he.__webglTexture),f.memory.textures--),r.remove(ne[pe])}r.remove(O)}let V=0;function te(){V=0}function ce(){const O=V;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function ve(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function fe(O,T){const ne=r.get(O);if(O.isVideoTexture&&lt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ne.__version!==O.version){const pe=O.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(ne,O,T);return}}else O.isExternalTexture&&(ne.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,ne.__webglTexture,a.TEXTURE0+T)}function I(O,T){const ne=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ne.__version!==O.version){J(ne,O,T);return}n.bindTexture(a.TEXTURE_2D_ARRAY,ne.__webglTexture,a.TEXTURE0+T)}function W(O,T){const ne=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ne.__version!==O.version){J(ne,O,T);return}n.bindTexture(a.TEXTURE_3D,ne.__webglTexture,a.TEXTURE0+T)}function j(O,T){const ne=r.get(O);if(O.version>0&&ne.__version!==O.version){me(ne,O,T);return}n.bindTexture(a.TEXTURE_CUBE_MAP,ne.__webglTexture,a.TEXTURE0+T)}const xe={[Ad]:a.REPEAT,[wr]:a.CLAMP_TO_EDGE,[Rd]:a.MIRRORED_REPEAT},A={[wi]:a.NEAREST,[gb]:a.NEAREST_MIPMAP_NEAREST,[xu]:a.NEAREST_MIPMAP_LINEAR,[Fi]:a.LINEAR,[Dh]:a.LINEAR_MIPMAP_NEAREST,[Cr]:a.LINEAR_MIPMAP_LINEAR},G={[Sb]:a.NEVER,[Rb]:a.ALWAYS,[Mb]:a.LESS,[rx]:a.LEQUAL,[Eb]:a.EQUAL,[Ab]:a.GEQUAL,[bb]:a.GREATER,[Tb]:a.NOTEQUAL};function se(O,T){if(T.type===ha&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Fi||T.magFilter===Dh||T.magFilter===xu||T.magFilter===Cr||T.minFilter===Fi||T.minFilter===Dh||T.minFilter===xu||T.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(O,a.TEXTURE_WRAP_S,xe[T.wrapS]),a.texParameteri(O,a.TEXTURE_WRAP_T,xe[T.wrapT]),(O===a.TEXTURE_3D||O===a.TEXTURE_2D_ARRAY)&&a.texParameteri(O,a.TEXTURE_WRAP_R,xe[T.wrapR]),a.texParameteri(O,a.TEXTURE_MAG_FILTER,A[T.magFilter]),a.texParameteri(O,a.TEXTURE_MIN_FILTER,A[T.minFilter]),T.compareFunction&&(a.texParameteri(O,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(O,a.TEXTURE_COMPARE_FUNC,G[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wi||T.minFilter!==xu&&T.minFilter!==Cr||T.type===ha&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");a.texParameterf(O,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function le(O,T){let ne=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",H));const pe=T.source;let ye=x.get(pe);ye===void 0&&(ye={},x.set(pe,ye));const he=ve(T);if(he!==O.__cacheKey){ye[he]===void 0&&(ye[he]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,ne=!0),ye[he].usedTimes++;const Be=ye[O.__cacheKey];Be!==void 0&&(ye[O.__cacheKey].usedTimes--,Be.usedTimes===0&&C(T)),O.__cacheKey=he,O.__webglTexture=ye[he].texture}return ne}function Ee(O,T,ne){return Math.floor(Math.floor(O/ne)/T)}function Ue(O,T,ne,pe){const he=O.updateRanges;if(he.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,ne,pe,T.data);else{he.sort((Te,Oe)=>Te.start-Oe.start);let Be=0;for(let Te=1;Te<he.length;Te++){const Oe=he[Be],Je=he[Te],We=Oe.start+Oe.count,Ne=Ee(Je.start,T.width,4),ut=Ee(Oe.start,T.width,4);Je.start<=We+1&&Ne===ut&&Ee(Je.start+Je.count-1,T.width,4)===Ne?Oe.count=Math.max(Oe.count,Je.start+Je.count-Oe.start):(++Be,he[Be]=Je)}he.length=Be+1;const Ce=a.getParameter(a.UNPACK_ROW_LENGTH),Ye=a.getParameter(a.UNPACK_SKIP_PIXELS),Ke=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let Te=0,Oe=he.length;Te<Oe;Te++){const Je=he[Te],We=Math.floor(Je.start/4),Ne=Math.ceil(Je.count/4),ut=We%T.width,X=Math.floor(We/T.width),we=Ne,De=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ut),a.pixelStorei(a.UNPACK_SKIP_ROWS,X),n.texSubImage2D(a.TEXTURE_2D,0,ut,X,we,De,ne,pe,T.data)}O.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ce),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Ye),a.pixelStorei(a.UNPACK_SKIP_ROWS,Ke)}}function J(O,T,ne){let pe=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=a.TEXTURE_3D);const ye=le(O,T),he=T.source;n.bindTexture(pe,O.__webglTexture,a.TEXTURE0+ne);const Be=r.get(he);if(he.version!==Be.__version||ye===!0){n.activeTexture(a.TEXTURE0+ne);const Ce=At.getPrimaries(At.workingColorSpace),Ye=T.colorSpace===Ka?null:At.getPrimaries(T.colorSpace),Ke=T.colorSpace===Ka||Ce===Ye?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let Te=b(T.image,!1,l.maxTextureSize);Te=Yt(T,Te);const Oe=u.convert(T.format,T.colorSpace),Je=u.convert(T.type);let We=L(T.internalFormat,Oe,Je,T.colorSpace,T.isVideoTexture);se(pe,T);let Ne;const ut=T.mipmaps,X=T.isVideoTexture!==!0,we=Be.__version===void 0||ye===!0,De=he.dataReady,ze=P(T,Te);if(T.isDepthTexture)We=U(T.format===Ko,T.type),we&&(X?n.texStorage2D(a.TEXTURE_2D,1,We,Te.width,Te.height):n.texImage2D(a.TEXTURE_2D,0,We,Te.width,Te.height,0,Oe,Je,null));else if(T.isDataTexture)if(ut.length>0){X&&we&&n.texStorage2D(a.TEXTURE_2D,ze,We,ut[0].width,ut[0].height);for(let Ae=0,Me=ut.length;Ae<Me;Ae++)Ne=ut[Ae],X?De&&n.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Ne.width,Ne.height,Oe,Je,Ne.data):n.texImage2D(a.TEXTURE_2D,Ae,We,Ne.width,Ne.height,0,Oe,Je,Ne.data);T.generateMipmaps=!1}else X?(we&&n.texStorage2D(a.TEXTURE_2D,ze,We,Te.width,Te.height),De&&Ue(T,Te,Oe,Je)):n.texImage2D(a.TEXTURE_2D,0,We,Te.width,Te.height,0,Oe,Je,Te.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&we&&n.texStorage3D(a.TEXTURE_2D_ARRAY,ze,We,ut[0].width,ut[0].height,Te.depth);for(let Ae=0,Me=ut.length;Ae<Me;Ae++)if(Ne=ut[Ae],T.format!==Ri)if(Oe!==null)if(X){if(De)if(T.layerUpdates.size>0){const ke=V_(Ne.width,Ne.height,T.format,T.type);for(const st of T.layerUpdates){const wt=Ne.data.subarray(st*ke/Ne.data.BYTES_PER_ELEMENT,(st+1)*ke/Ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,st,Ne.width,Ne.height,1,Oe,wt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,0,Ne.width,Ne.height,Te.depth,Oe,Ne.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Ae,We,Ne.width,Ne.height,Te.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?De&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,0,Ne.width,Ne.height,Te.depth,Oe,Je,Ne.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Ae,We,Ne.width,Ne.height,Te.depth,0,Oe,Je,Ne.data)}else{X&&we&&n.texStorage2D(a.TEXTURE_2D,ze,We,ut[0].width,ut[0].height);for(let Ae=0,Me=ut.length;Ae<Me;Ae++)Ne=ut[Ae],T.format!==Ri?Oe!==null?X?De&&n.compressedTexSubImage2D(a.TEXTURE_2D,Ae,0,0,Ne.width,Ne.height,Oe,Ne.data):n.compressedTexImage2D(a.TEXTURE_2D,Ae,We,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?De&&n.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Ne.width,Ne.height,Oe,Je,Ne.data):n.texImage2D(a.TEXTURE_2D,Ae,We,Ne.width,Ne.height,0,Oe,Je,Ne.data)}else if(T.isDataArrayTexture)if(X){if(we&&n.texStorage3D(a.TEXTURE_2D_ARRAY,ze,We,Te.width,Te.height,Te.depth),De)if(T.layerUpdates.size>0){const Ae=V_(Te.width,Te.height,T.format,T.type);for(const Me of T.layerUpdates){const ke=Te.data.subarray(Me*Ae/Te.data.BYTES_PER_ELEMENT,(Me+1)*Ae/Te.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Me,Te.width,Te.height,1,Oe,Je,ke)}T.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Oe,Je,Te.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,We,Te.width,Te.height,Te.depth,0,Oe,Je,Te.data);else if(T.isData3DTexture)X?(we&&n.texStorage3D(a.TEXTURE_3D,ze,We,Te.width,Te.height,Te.depth),De&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Oe,Je,Te.data)):n.texImage3D(a.TEXTURE_3D,0,We,Te.width,Te.height,Te.depth,0,Oe,Je,Te.data);else if(T.isFramebufferTexture){if(we)if(X)n.texStorage2D(a.TEXTURE_2D,ze,We,Te.width,Te.height);else{let Ae=Te.width,Me=Te.height;for(let ke=0;ke<ze;ke++)n.texImage2D(a.TEXTURE_2D,ke,We,Ae,Me,0,Oe,Je,null),Ae>>=1,Me>>=1}}else if(ut.length>0){if(X&&we){const Ae=Zt(ut[0]);n.texStorage2D(a.TEXTURE_2D,ze,We,Ae.width,Ae.height)}for(let Ae=0,Me=ut.length;Ae<Me;Ae++)Ne=ut[Ae],X?De&&n.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Oe,Je,Ne):n.texImage2D(a.TEXTURE_2D,Ae,We,Oe,Je,Ne);T.generateMipmaps=!1}else if(X){if(we){const Ae=Zt(Te);n.texStorage2D(a.TEXTURE_2D,ze,We,Ae.width,Ae.height)}De&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Oe,Je,Te)}else n.texImage2D(a.TEXTURE_2D,0,We,Oe,Je,Te);y(T)&&_(pe),Be.__version=he.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function me(O,T,ne){if(T.image.length!==6)return;const pe=le(O,T),ye=T.source;n.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+ne);const he=r.get(ye);if(ye.version!==he.__version||pe===!0){n.activeTexture(a.TEXTURE0+ne);const Be=At.getPrimaries(At.workingColorSpace),Ce=T.colorSpace===Ka?null:At.getPrimaries(T.colorSpace),Ye=T.colorSpace===Ka||Be===Ce?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const Ke=T.isCompressedTexture||T.image[0].isCompressedTexture,Te=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let Me=0;Me<6;Me++)!Ke&&!Te?Oe[Me]=b(T.image[Me],!0,l.maxCubemapSize):Oe[Me]=Te?T.image[Me].image:T.image[Me],Oe[Me]=Yt(T,Oe[Me]);const Je=Oe[0],We=u.convert(T.format,T.colorSpace),Ne=u.convert(T.type),ut=L(T.internalFormat,We,Ne,T.colorSpace),X=T.isVideoTexture!==!0,we=he.__version===void 0||pe===!0,De=ye.dataReady;let ze=P(T,Je);se(a.TEXTURE_CUBE_MAP,T);let Ae;if(Ke){X&&we&&n.texStorage2D(a.TEXTURE_CUBE_MAP,ze,ut,Je.width,Je.height);for(let Me=0;Me<6;Me++){Ae=Oe[Me].mipmaps;for(let ke=0;ke<Ae.length;ke++){const st=Ae[ke];T.format!==Ri?We!==null?X?De&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,0,0,st.width,st.height,We,st.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,ut,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,0,0,st.width,st.height,We,Ne,st.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke,ut,st.width,st.height,0,We,Ne,st.data)}}}else{if(Ae=T.mipmaps,X&&we){Ae.length>0&&ze++;const Me=Zt(Oe[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,ze,ut,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Te){X?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Oe[Me].width,Oe[Me].height,We,Ne,Oe[Me].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ut,Oe[Me].width,Oe[Me].height,0,We,Ne,Oe[Me].data);for(let ke=0;ke<Ae.length;ke++){const wt=Ae[ke].image[Me].image;X?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,0,0,wt.width,wt.height,We,Ne,wt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,ut,wt.width,wt.height,0,We,Ne,wt.data)}}else{X?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,We,Ne,Oe[Me]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ut,We,Ne,Oe[Me]);for(let ke=0;ke<Ae.length;ke++){const st=Ae[ke];X?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,0,0,We,Ne,st.image[Me]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ke+1,ut,We,Ne,st.image[Me])}}}y(T)&&_(a.TEXTURE_CUBE_MAP),he.__version=ye.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function be(O,T,ne,pe,ye,he){const Be=u.convert(ne.format,ne.colorSpace),Ce=u.convert(ne.type),Ye=L(ne.internalFormat,Be,Ce,ne.colorSpace),Ke=r.get(T),Te=r.get(ne);if(Te.__renderTarget=T,!Ke.__hasExternalTextures){const Oe=Math.max(1,T.width>>he),Je=Math.max(1,T.height>>he);ye===a.TEXTURE_3D||ye===a.TEXTURE_2D_ARRAY?n.texImage3D(ye,he,Ye,Oe,Je,T.depth,0,Be,Ce,null):n.texImage2D(ye,he,Ye,Oe,Je,0,Be,Ce,null)}n.bindFramebuffer(a.FRAMEBUFFER,O),Xe(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pe,ye,Te.__webglTexture,0,Gt(T)):(ye===a.TEXTURE_2D||ye>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,pe,ye,Te.__webglTexture,he),n.bindFramebuffer(a.FRAMEBUFFER,null)}function qe(O,T,ne){if(a.bindRenderbuffer(a.RENDERBUFFER,O),T.depthBuffer){const pe=T.depthTexture,ye=pe&&pe.isDepthTexture?pe.type:null,he=U(T.stencilBuffer,ye),Be=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=Gt(T);Xe(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ce,he,T.width,T.height):ne?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ce,he,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,he,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Be,a.RENDERBUFFER,O)}else{const pe=T.textures;for(let ye=0;ye<pe.length;ye++){const he=pe[ye],Be=u.convert(he.format,he.colorSpace),Ce=u.convert(he.type),Ye=L(he.internalFormat,Be,Ce,he.colorSpace),Ke=Gt(T);ne&&Xe(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ke,Ye,T.width,T.height):Xe(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ke,Ye,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Ye,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function He(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),fe(T.depthTexture,0);const ye=pe.__webglTexture,he=Gt(T);if(T.depthTexture.format===Zo)Xe(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ye,0,he):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ye,0);else if(T.depthTexture.format===Ko)Xe(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ye,0,he):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function je(O){const T=r.get(O),ne=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const pe=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ye=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ye)};pe.addEventListener("dispose",ye),T.__depthDisposeCallback=ye}T.__boundDepthTexture=pe}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");const pe=O.texture.mipmaps;pe&&pe.length>0?He(T.__webglFramebuffer[0],O):He(T.__webglFramebuffer,O)}else if(ne){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=a.createRenderbuffer(),qe(T.__webglDepthbuffer[pe],O,!1);else{const ye=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[pe];a.bindRenderbuffer(a.RENDERBUFFER,he),a.framebufferRenderbuffer(a.FRAMEBUFFER,ye,a.RENDERBUFFER,he)}}else{const pe=O.texture.mipmaps;if(pe&&pe.length>0?n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),qe(T.__webglDepthbuffer,O,!1);else{const ye=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,he),a.framebufferRenderbuffer(a.FRAMEBUFFER,ye,a.RENDERBUFFER,he)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function kt(O,T,ne){const pe=r.get(O);T!==void 0&&be(pe.__webglFramebuffer,O,O.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ne!==void 0&&je(O)}function B(O){const T=O.texture,ne=r.get(O),pe=r.get(T);O.addEventListener("dispose",z);const ye=O.textures,he=O.isWebGLCubeRenderTarget===!0,Be=ye.length>1;if(Be||(pe.__webglTexture===void 0&&(pe.__webglTexture=a.createTexture()),pe.__version=T.version,f.memory.textures++),he){ne.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer[Ce]=[];for(let Ye=0;Ye<T.mipmaps.length;Ye++)ne.__webglFramebuffer[Ce][Ye]=a.createFramebuffer()}else ne.__webglFramebuffer[Ce]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)ne.__webglFramebuffer[Ce]=a.createFramebuffer()}else ne.__webglFramebuffer=a.createFramebuffer();if(Be)for(let Ce=0,Ye=ye.length;Ce<Ye;Ce++){const Ke=r.get(ye[Ce]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=a.createTexture(),f.memory.textures++)}if(O.samples>0&&Xe(O)===!1){ne.__webglMultisampledFramebuffer=a.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ye.length;Ce++){const Ye=ye[Ce];ne.__webglColorRenderbuffer[Ce]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce]);const Ke=u.convert(Ye.format,Ye.colorSpace),Te=u.convert(Ye.type),Oe=L(Ye.internalFormat,Ke,Te,Ye.colorSpace,O.isXRRenderTarget===!0),Je=Gt(O);a.renderbufferStorageMultisample(a.RENDERBUFFER,Je,Oe,O.width,O.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,ne.__webglColorRenderbuffer[Ce])}a.bindRenderbuffer(a.RENDERBUFFER,null),O.depthBuffer&&(ne.__webglDepthRenderbuffer=a.createRenderbuffer(),qe(ne.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(he){n.bindTexture(a.TEXTURE_CUBE_MAP,pe.__webglTexture),se(a.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ye=0;Ye<T.mipmaps.length;Ye++)be(ne.__webglFramebuffer[Ce][Ye],O,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ye);else be(ne.__webglFramebuffer[Ce],O,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&_(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Be){for(let Ce=0,Ye=ye.length;Ce<Ye;Ce++){const Ke=ye[Ce],Te=r.get(Ke);let Oe=a.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Oe=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Oe,Te.__webglTexture),se(Oe,Ke),be(ne.__webglFramebuffer,O,Ke,a.COLOR_ATTACHMENT0+Ce,Oe,0),y(Ke)&&_(Oe)}n.unbindTexture()}else{let Ce=a.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ce=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ce,pe.__webglTexture),se(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Ye=0;Ye<T.mipmaps.length;Ye++)be(ne.__webglFramebuffer[Ye],O,T,a.COLOR_ATTACHMENT0,Ce,Ye);else be(ne.__webglFramebuffer,O,T,a.COLOR_ATTACHMENT0,Ce,0);y(T)&&_(Ce),n.unbindTexture()}O.depthBuffer&&je(O)}function Ut(O){const T=O.textures;for(let ne=0,pe=T.length;ne<pe;ne++){const ye=T[ne];if(y(ye)){const he=N(O),Be=r.get(ye).__webglTexture;n.bindTexture(he,Be),_(he),n.unbindTexture()}}}const ot=[],at=[];function Fe(O){if(O.samples>0){if(Xe(O)===!1){const T=O.textures,ne=O.width,pe=O.height;let ye=a.COLOR_BUFFER_BIT;const he=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Be=r.get(O),Ce=T.length>1;if(Ce)for(let Ke=0;Ke<T.length;Ke++)n.bindFramebuffer(a.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ke,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ke,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Ye=O.texture.mipmaps;Ye&&Ye.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ke=0;Ke<T.length;Ke++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ye|=a.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ye|=a.STENCIL_BUFFER_BIT)),Ce){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Be.__webglColorRenderbuffer[Ke]);const Te=r.get(T[Ke]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Te,0)}a.blitFramebuffer(0,0,ne,pe,0,0,ne,pe,ye,a.NEAREST),m===!0&&(ot.length=0,at.length=0,ot.push(a.COLOR_ATTACHMENT0+Ke),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ot.push(he),at.push(he),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,at)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ot))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ce)for(let Ke=0;Ke<T.length;Ke++){n.bindFramebuffer(a.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ke,a.RENDERBUFFER,Be.__webglColorRenderbuffer[Ke]);const Te=r.get(T[Ke]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ke,a.TEXTURE_2D,Te,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function Gt(O){return Math.min(l.maxSamples,O.samples)}function Xe(O){const T=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function lt(O){const T=f.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function Yt(O,T){const ne=O.colorSpace,pe=O.format,ye=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ne!==Is&&ne!==Ka&&(At.getTransfer(ne)===It?(pe!==Ri||ye!==va)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),T}function Zt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ce,this.resetTextureUnits=te,this.setTexture2D=fe,this.setTexture2DArray=I,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=kt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Xe}function Fw(a,e){function n(r,l=Ka){let u;const f=At.getTransfer(l);if(r===va)return a.UNSIGNED_BYTE;if(r===gp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===vp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===$0)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===ex)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===Q0)return a.BYTE;if(r===J0)return a.SHORT;if(r===jo)return a.UNSIGNED_SHORT;if(r===mp)return a.INT;if(r===Dr)return a.UNSIGNED_INT;if(r===ha)return a.FLOAT;if(r===il)return a.HALF_FLOAT;if(r===tx)return a.ALPHA;if(r===nx)return a.RGB;if(r===Ri)return a.RGBA;if(r===Zo)return a.DEPTH_COMPONENT;if(r===Ko)return a.DEPTH_STENCIL;if(r===ix)return a.RED;if(r===_p)return a.RED_INTEGER;if(r===ax)return a.RG;if(r===xp)return a.RG_INTEGER;if(r===yp)return a.RGBA_INTEGER;if(r===Yu||r===Zu||r===Ku||r===Qu)if(f===It)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Yu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Yu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ku)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wd||r===Cd||r===Dd||r===Ud)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===wd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ud)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nd||r===Ld||r===Od)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Nd||r===Ld)return f===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Od)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pd||r===Id||r===Fd||r===Bd||r===zd||r===Hd||r===Gd||r===Vd||r===kd||r===Xd||r===Wd||r===qd||r===jd||r===Yd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Pd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Id)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===jd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zd||r===Kd||r===Qd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Zd)return f===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jd||r===$d||r===ep||r===tp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Jd)return u.COMPRESSED_RED_RGTC1_EXT;if(r===$d)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ep)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yo?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const Bw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zw=`
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

}`;class Hw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new yx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new er({vertexShader:Bw,fragmentShader:zw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new da(new gc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gw extends Hs{constructor(e,n){super();const r=this;let l=null,u=1,f=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,S=null,E=null;const b=typeof XRWebGLBinding<"u",y=new Hw,_={},N=n.getContextAttributes();let L=null,U=null;const P=[],H=[],z=new Bt;let q=null;const C=new si;C.viewport=new sn;const D=new si;D.viewport=new sn;const V=[C,D],te=new lT;let ce=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=P[J];return me===void 0&&(me=new Jh,P[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=P[J];return me===void 0&&(me=new Jh,P[J]=me),me.getGripSpace()},this.getHand=function(J){let me=P[J];return me===void 0&&(me=new Jh,P[J]=me),me.getHandSpace()};function fe(J){const me=H.indexOf(J.inputSource);if(me===-1)return;const be=P[me];be!==void 0&&(be.update(J.inputSource,J.frame,p||f),be.dispatchEvent({type:J.type,data:J.inputSource}))}function I(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",W);for(let J=0;J<P.length;J++){const me=H[J];me!==null&&(H[J]=null,P[J].disconnect(me))}ce=null,ve=null,y.reset();for(const J in _)delete _[J];e.setRenderTarget(L),S=null,x=null,v=null,l=null,U=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(l,n)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",I),l.addEventListener("inputsourceschange",W),N.xrCompatible!==!0&&await n.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(z),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,qe=null,He=null;N.depth&&(He=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=N.stencil?Ko:Zo,qe=N.stencil?Yo:Dr);const je={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:u};v=this.getBinding(),x=v.createProjectionLayer(je),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new Ur(x.textureWidth,x.textureHeight,{format:Ri,type:va,depthTexture:new xx(x.textureWidth,x.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const be={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,n,be),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Ur(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:va,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ue.setContext(l),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(J){for(let me=0;me<J.removed.length;me++){const be=J.removed[me],qe=H.indexOf(be);qe>=0&&(H[qe]=null,P[qe].disconnect(be))}for(let me=0;me<J.added.length;me++){const be=J.added[me];let qe=H.indexOf(be);if(qe===-1){for(let je=0;je<P.length;je++)if(je>=H.length){H.push(be),qe=je;break}else if(H[je]===null){H[je]=be,qe=je;break}if(qe===-1)break}const He=P[qe];He&&He.connect(be)}}const j=new re,xe=new re;function A(J,me,be){j.setFromMatrixPosition(me.matrixWorld),xe.setFromMatrixPosition(be.matrixWorld);const qe=j.distanceTo(xe),He=me.projectionMatrix.elements,je=be.projectionMatrix.elements,kt=He[14]/(He[10]-1),B=He[14]/(He[10]+1),Ut=(He[9]+1)/He[5],ot=(He[9]-1)/He[5],at=(He[8]-1)/He[0],Fe=(je[8]+1)/je[0],Gt=kt*at,Xe=kt*Fe,lt=qe/(-at+Fe),Yt=lt*-at;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Yt),J.translateZ(lt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),He[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Zt=kt+lt,O=B+lt,T=Gt-Yt,ne=Xe+(qe-Yt),pe=Ut*B/O*Zt,ye=ot*B/O*Zt;J.projectionMatrix.makePerspective(T,ne,pe,ye,Zt,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function G(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let me=J.near,be=J.far;y.texture!==null&&(y.depthNear>0&&(me=y.depthNear),y.depthFar>0&&(be=y.depthFar)),te.near=D.near=C.near=me,te.far=D.far=C.far=be,(ce!==te.near||ve!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),ce=te.near,ve=te.far),te.layers.mask=J.layers.mask|6,C.layers.mask=te.layers.mask&3,D.layers.mask=te.layers.mask&5;const qe=J.parent,He=te.cameras;G(te,qe);for(let je=0;je<He.length;je++)G(He[je],qe);He.length===2?A(te,C,D):te.projectionMatrix.copy(C.projectionMatrix),se(J,te,qe)};function se(J,me,be){be===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(be.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=np*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(J){m=J,x!==null&&(x.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(te)},this.getCameraTexture=function(J){return _[J]};let le=null;function Ee(J,me){if(g=me.getViewerPose(p||f),E=me,g!==null){const be=g.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let qe=!1;be.length!==te.cameras.length&&(te.cameras.length=0,qe=!0);for(let B=0;B<be.length;B++){const Ut=be[B];let ot=null;if(S!==null)ot=S.getViewport(Ut);else{const Fe=v.getViewSubImage(x,Ut);ot=Fe.viewport,B===0&&(e.setRenderTargetTextures(U,Fe.colorTexture,Fe.depthStencilTexture),e.setRenderTarget(U))}let at=V[B];at===void 0&&(at=new si,at.layers.enable(B),at.viewport=new sn,V[B]=at),at.matrix.fromArray(Ut.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ut.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ot.x,ot.y,ot.width,ot.height),B===0&&(te.matrix.copy(at.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),qe===!0&&te.cameras.push(at)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){v=r.getBinding();const B=v.getDepthInformation(be[0]);B&&B.isValid&&B.texture&&y.init(B,l.renderState)}if(He&&He.includes("camera-access")&&b){e.state.unbindTexture(),v=r.getBinding();for(let B=0;B<be.length;B++){const Ut=be[B].camera;if(Ut){let ot=_[Ut];ot||(ot=new yx,_[Ut]=ot);const at=v.getCameraImage(Ut);ot.sourceTexture=at}}}}for(let be=0;be<P.length;be++){const qe=H[be],He=P[be];qe!==null&&He!==void 0&&He.update(qe,me,p||f)}le&&le(J,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),E=null}const Ue=new Ex;Ue.setAnimationLoop(Ee),this.setAnimationLoop=function(J){le=J},this.dispose=function(){}}}const Er=new _a,Vw=new dn;function kw(a,e){function n(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,px(a)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,N,L,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,U)):_.isMeshMatcapMaterial?(u(y,_),E(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),b(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?m(y,_,N,L):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,n(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Yn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,n(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Yn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,n(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,n(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const N=e.get(_),L=N.envMap,U=N.envMapRotation;L&&(y.envMap.value=L,Er.copy(U),Er.x*=-1,Er.y*=-1,Er.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),y.envMapRotation.value.setFromMatrix4(Vw.makeRotationFromEuler(Er)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,N,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*N,y.scale.value=L*.5,_.map&&(y.map.value=_.map,n(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,N){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function b(y,_){const N=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Xw(a,e,n,r){let l={},u={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const U=L.program;r.uniformBlockBinding(N,U)}function p(N,L){let U=l[N.id];U===void 0&&(E(N),U=g(N),l[N.id]=U,N.addEventListener("dispose",y));const P=L.program;r.updateUBOMapping(N,P);const H=e.render.frame;u[N.id]!==H&&(x(N),u[N.id]=H)}function g(N){const L=v();N.__bindingPointIndex=L;const U=a.createBuffer(),P=N.__size,H=N.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,P,H),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,U),U}function v(){for(let N=0;N<h;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=l[N.id],U=N.uniforms,P=N.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let H=0,z=U.length;H<z;H++){const q=Array.isArray(U[H])?U[H]:[U[H]];for(let C=0,D=q.length;C<D;C++){const V=q[C];if(S(V,H,C,P)===!0){const te=V.__offset,ce=Array.isArray(V.value)?V.value:[V.value];let ve=0;for(let fe=0;fe<ce.length;fe++){const I=ce[fe],W=b(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,a.bufferSubData(a.UNIFORM_BUFFER,te+ve,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,ve),ve+=W.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,te,V.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(N,L,U,P){const H=N.value,z=L+"_"+U;if(P[z]===void 0)return typeof H=="number"||typeof H=="boolean"?P[z]=H:P[z]=H.clone(),!0;{const q=P[z];if(typeof H=="number"||typeof H=="boolean"){if(q!==H)return P[z]=H,!0}else if(q.equals(H)===!1)return q.copy(H),!0}return!1}function E(N){const L=N.uniforms;let U=0;const P=16;for(let z=0,q=L.length;z<q;z++){const C=Array.isArray(L[z])?L[z]:[L[z]];for(let D=0,V=C.length;D<V;D++){const te=C[D],ce=Array.isArray(te.value)?te.value:[te.value];for(let ve=0,fe=ce.length;ve<fe;ve++){const I=ce[ve],W=b(I),j=U%P,xe=j%W.boundary,A=j+xe;U+=xe,A!==0&&P-A<W.storage&&(U+=P-A),te.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=U,U+=W.storage}}}const H=U%P;return H>0&&(U+=P-H),N.__size=U,N.__cache={},this}function b(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function y(N){const L=N.target;L.removeEventListener("dispose",y);const U=f.indexOf(L.__bindingPointIndex);f.splice(U,1),a.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const N in l)a.deleteBuffer(l[N]);f=[],l={},u={}}return{bind:m,update:p,dispose:_}}class wx{constructor(e={}){const{canvas:n=Cb(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),b=new Int32Array(4);let y=null,_=null;const N=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let P=!1;this._outputColorSpace=mi;let H=0,z=0,q=null,C=-1,D=null;const V=new sn,te=new sn;let ce=null;const ve=new St(0);let fe=0,I=n.width,W=n.height,j=1,xe=null,A=null;const G=new sn(0,0,I,W),se=new sn(0,0,I,W);let le=!1;const Ee=new _x;let Ue=!1,J=!1;const me=new dn,be=new re,qe=new sn,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function kt(){return q===null?j:1}let B=r;function Ut(w,Y){return n.getContext(w,Y)}try{const w={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pp}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),B===null){const Y="webgl2";if(B=Ut(Y,w),B===null)throw Ut(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ot,at,Fe,Gt,Xe,lt,Yt,Zt,O,T,ne,pe,ye,he,Be,Ce,Ye,Ke,Te,Oe,Je,We,Ne,ut;function X(){ot=new tR(B),ot.init(),We=new Fw(B,ot),at=new Y1(B,ot,e,We),Fe=new Pw(B,ot),at.reversedDepthBuffer&&x&&Fe.buffers.depth.setReversed(!0),Gt=new aR(B),Xe=new Mw,lt=new Iw(B,ot,Fe,Xe,at,We,Gt),Yt=new K1(U),Zt=new eR(U),O=new cT(B),Ne=new q1(B,O),T=new nR(B,O,Gt,Ne),ne=new sR(B,T,O,Gt),Te=new rR(B,at,lt),Ce=new Z1(Xe),pe=new Sw(U,Yt,Zt,ot,at,Ne,Ce),ye=new kw(U,Xe),he=new bw,Be=new Dw(ot),Ke=new W1(U,Yt,Zt,Fe,ne,S,m),Ye=new Lw(U,ne,at),ut=new Xw(B,Gt,at,Fe),Oe=new j1(B,ot,Gt),Je=new iR(B,ot,Gt),Gt.programs=pe.programs,U.capabilities=at,U.extensions=ot,U.properties=Xe,U.renderLists=he,U.shadowMap=Ye,U.state=Fe,U.info=Gt}X();const we=new Gw(U,B);this.xr=we,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=ot.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ot.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(I,W,!1))},this.getSize=function(w){return w.set(I,W)},this.setSize=function(w,Y,oe=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=w,W=Y,n.width=Math.floor(w*j),n.height=Math.floor(Y*j),oe===!0&&(n.style.width=w+"px",n.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(I*j,W*j).floor()},this.setDrawingBufferSize=function(w,Y,oe){I=w,W=Y,j=oe,n.width=Math.floor(w*oe),n.height=Math.floor(Y*oe),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(G)},this.setViewport=function(w,Y,oe,ue){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,Y,oe,ue),Fe.viewport(V.copy(G).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,Y,oe,ue){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,Y,oe,ue),Fe.scissor(te.copy(se).multiplyScalar(j).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(w){Fe.setScissorTest(le=w)},this.setOpaqueSort=function(w){xe=w},this.setTransparentSort=function(w){A=w},this.getClearColor=function(w){return w.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,oe=!0){let ue=0;if(w){let Q=!1;if(q!==null){const Re=q.texture.format;Q=Re===yp||Re===xp||Re===_p}if(Q){const Re=q.texture.type,Le=Re===va||Re===Dr||Re===jo||Re===Yo||Re===gp||Re===vp,Ge=Ke.getClearColor(),Pe=Ke.getClearAlpha(),et=Ge.r,nt=Ge.g,Ze=Ge.b;Le?(E[0]=et,E[1]=nt,E[2]=Ze,E[3]=Pe,B.clearBufferuiv(B.COLOR,0,E)):(b[0]=et,b[1]=nt,b[2]=Ze,b[3]=Pe,B.clearBufferiv(B.COLOR,0,b))}else ue|=B.COLOR_BUFFER_BIT}Y&&(ue|=B.DEPTH_BUFFER_BIT),oe&&(ue|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),Ke.dispose(),he.dispose(),Be.dispose(),Xe.dispose(),Yt.dispose(),Zt.dispose(),ne.dispose(),Ne.dispose(),ut.dispose(),pe.dispose(),we.dispose(),we.removeEventListener("sessionstart",pn),we.removeEventListener("sessionend",mn),Jt.stop()};function De(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=Gt.autoReset,Y=Ye.enabled,oe=Ye.autoUpdate,ue=Ye.needsUpdate,Q=Ye.type;X(),Gt.autoReset=w,Ye.enabled=Y,Ye.autoUpdate=oe,Ye.needsUpdate=ue,Ye.type=Q}function Ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Me(w){const Y=w.target;Y.removeEventListener("dispose",Me),ke(Y)}function ke(w){st(w),Xe.remove(w)}function st(w){const Y=Xe.get(w).programs;Y!==void 0&&(Y.forEach(function(oe){pe.releaseProgram(oe)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,oe,ue,Q,Re){Y===null&&(Y=He);const Le=Q.isMesh&&Q.matrixWorld.determinant()<0,Ge=xa(w,Y,oe,ue,Q);Fe.setMaterial(ue,Le);let Pe=oe.index,et=1;if(ue.wireframe===!0){if(Pe=T.getWireframeAttribute(oe),Pe===void 0)return;et=2}const nt=oe.drawRange,Ze=oe.attributes.position;let ht=nt.start*et,bt=(nt.start+nt.count)*et;Re!==null&&(ht=Math.max(ht,Re.start*et),bt=Math.min(bt,(Re.start+Re.count)*et)),Pe!==null?(ht=Math.max(ht,0),bt=Math.min(bt,Pe.count)):Ze!=null&&(ht=Math.max(ht,0),bt=Math.min(bt,Ze.count));const qt=bt-ht;if(qt<0||qt===1/0)return;Ne.setup(Q,ue,Ge,oe,Pe);let Nt,dt=Oe;if(Pe!==null&&(Nt=O.get(Pe),dt=Je,dt.setIndex(Nt)),Q.isMesh)ue.wireframe===!0?(Fe.setLineWidth(ue.wireframeLinewidth*kt()),dt.setMode(B.LINES)):dt.setMode(B.TRIANGLES);else if(Q.isLine){let $e=ue.linewidth;$e===void 0&&($e=1),Fe.setLineWidth($e*kt()),Q.isLineSegments?dt.setMode(B.LINES):Q.isLineLoop?dt.setMode(B.LINE_LOOP):dt.setMode(B.LINE_STRIP)}else Q.isPoints?dt.setMode(B.POINTS):Q.isSprite&&dt.setMode(B.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Qo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))dt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const $e=Q._multiDrawStarts,Xt=Q._multiDrawCounts,vt=Q._multiDrawCount,Dn=Pe?O.get(Pe).bytesPerElement:1,xi=Xe.get(ue).currentProgram.getUniforms();for(let In=0;In<vt;In++)xi.setValue(B,"_gl_DrawID",In),dt.render($e[In]/Dn,Xt[In])}else if(Q.isInstancedMesh)dt.renderInstances(ht,qt,Q.count);else if(oe.isInstancedBufferGeometry){const $e=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Xt=Math.min(oe.instanceCount,$e);dt.renderInstances(ht,qt,Xt)}else dt.render(ht,qt)};function wt(w,Y,oe){w.transparent===!0&&w.side===fa&&w.forceSinglePass===!1?(w.side=Yn,w.needsUpdate=!0,Di(w,Y,oe),w.side=$a,w.needsUpdate=!0,Di(w,Y,oe),w.side=fa):Di(w,Y,oe)}this.compile=function(w,Y,oe=null){oe===null&&(oe=w),_=Be.get(oe),_.init(Y),L.push(_),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),w!==oe&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),_.setupLights();const ue=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Re=Q.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){const Ge=Re[Le];wt(Ge,oe,Q),ue.add(Ge)}else wt(Re,oe,Q),ue.add(Re)}),_=L.pop(),ue},this.compileAsync=function(w,Y,oe=null){const ue=this.compile(w,Y,oe);return new Promise(Q=>{function Re(){if(ue.forEach(function(Le){Xe.get(Le).currentProgram.isReady()&&ue.delete(Le)}),ue.size===0){Q(w);return}setTimeout(Re,10)}ot.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Et=null;function _i(w){Et&&Et(w)}function pn(){Jt.stop()}function mn(){Jt.start()}const Jt=new Ex;Jt.setAnimationLoop(_i),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(w){Et=w,we.setAnimationLoop(w),w===null?Jt.stop():Jt.start()},we.addEventListener("sessionstart",pn),we.addEventListener("sessionend",mn),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(Y),Y=we.getCamera()),w.isScene===!0&&w.onBeforeRender(U,w,Y,q),_=Be.get(w,L.length),_.init(Y),L.push(_),me.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ee.setFromProjectionMatrix(me,Bi,Y.reversedDepth),J=this.localClippingEnabled,Ue=Ce.init(this.clippingPlanes,J),y=he.get(w,N.length),y.init(),N.push(y),we.enabled===!0&&we.isPresenting===!0){const Re=U.xr.getDepthSensingMesh();Re!==null&&Ci(Re,Y,-1/0,U.sortObjects)}Ci(w,Y,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(xe,A),je=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,je&&Ke.addToRenderList(y,w),this.info.render.frame++,Ue===!0&&Ce.beginShadows();const oe=_.state.shadowsArray;Ye.render(oe,w,Y),Ue===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=y.opaque,Q=y.transmissive;if(_.setupLights(),Y.isArrayCamera){const Re=Y.cameras;if(Q.length>0)for(let Le=0,Ge=Re.length;Le<Ge;Le++){const Pe=Re[Le];ul(ue,Q,w,Pe)}je&&Ke.render(w);for(let Le=0,Ge=Re.length;Le<Ge;Le++){const Pe=Re[Le];Or(y,w,Pe,Pe.viewport)}}else Q.length>0&&ul(ue,Q,w,Y),je&&Ke.render(w),Or(y,w,Y);q!==null&&z===0&&(lt.updateMultisampleRenderTarget(q),lt.updateRenderTargetMipmap(q)),w.isScene===!0&&w.onAfterRender(U,w,Y),Ne.resetDefaultState(),C=-1,D=null,L.pop(),L.length>0?(_=L[L.length-1],Ue===!0&&Ce.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Ci(w,Y,oe,ue){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)oe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ee.intersectsSprite(w)){ue&&qe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);const Le=ne.update(w),Ge=w.material;Ge.visible&&y.push(w,Le,Ge,oe,qe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ee.intersectsObject(w))){const Le=ne.update(w),Ge=w.material;if(ue&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),qe.copy(w.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),qe.copy(Le.boundingSphere.center)),qe.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray(Ge)){const Pe=Le.groups;for(let et=0,nt=Pe.length;et<nt;et++){const Ze=Pe[et],ht=Ge[Ze.materialIndex];ht&&ht.visible&&y.push(w,Le,ht,oe,qe.z,Ze)}}else Ge.visible&&y.push(w,Le,Ge,oe,qe.z,null)}}const Re=w.children;for(let Le=0,Ge=Re.length;Le<Ge;Le++)Ci(Re[Le],Y,oe,ue)}function Or(w,Y,oe,ue){const Q=w.opaque,Re=w.transmissive,Le=w.transparent;_.setupLightsView(oe),Ue===!0&&Ce.setGlobalState(U.clippingPlanes,oe),ue&&Fe.viewport(V.copy(ue)),Q.length>0&&Pr(Q,Y,oe),Re.length>0&&Pr(Re,Y,oe),Le.length>0&&Pr(Le,Y,oe),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function ul(w,Y,oe,ue){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ue.id]===void 0&&(_.state.transmissionRenderTarget[ue.id]=new Ur(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?il:va,minFilter:Cr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Re=_.state.transmissionRenderTarget[ue.id],Le=ue.viewport||V;Re.setSize(Le.z*U.transmissionResolutionScale,Le.w*U.transmissionResolutionScale);const Ge=U.getRenderTarget(),Pe=U.getActiveCubeFace(),et=U.getActiveMipmapLevel();U.setRenderTarget(Re),U.getClearColor(ve),fe=U.getClearAlpha(),fe<1&&U.setClearColor(16777215,.5),U.clear(),je&&Ke.render(oe);const nt=U.toneMapping;U.toneMapping=Ja;const Ze=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),_.setupLightsView(ue),Ue===!0&&Ce.setGlobalState(U.clippingPlanes,ue),Pr(w,oe,ue),lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re),ot.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let bt=0,qt=Y.length;bt<qt;bt++){const Nt=Y[bt],dt=Nt.object,$e=Nt.geometry,Xt=Nt.material,vt=Nt.group;if(Xt.side===fa&&dt.layers.test(ue.layers)){const Dn=Xt.side;Xt.side=Yn,Xt.needsUpdate=!0,Vs(dt,oe,ue,$e,Xt,vt),Xt.side=Dn,Xt.needsUpdate=!0,ht=!0}}ht===!0&&(lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re))}U.setRenderTarget(Ge,Pe,et),U.setClearColor(ve,fe),Ze!==void 0&&(ue.viewport=Ze),U.toneMapping=nt}function Pr(w,Y,oe){const ue=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Re=w.length;Q<Re;Q++){const Le=w[Q],Ge=Le.object,Pe=Le.geometry,et=Le.group;let nt=Le.material;nt.allowOverride===!0&&ue!==null&&(nt=ue),Ge.layers.test(oe.layers)&&Vs(Ge,Y,oe,Pe,nt,et)}}function Vs(w,Y,oe,ue,Q,Re){w.onBeforeRender(U,Y,oe,ue,Q,Re),w.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(U,Y,oe,ue,w,Re),Q.transparent===!0&&Q.side===fa&&Q.forceSinglePass===!1?(Q.side=Yn,Q.needsUpdate=!0,U.renderBufferDirect(oe,Y,ue,Q,w,Re),Q.side=$a,Q.needsUpdate=!0,U.renderBufferDirect(oe,Y,ue,Q,w,Re),Q.side=fa):U.renderBufferDirect(oe,Y,ue,Q,w,Re),w.onAfterRender(U,Y,oe,ue,Q,Re)}function Di(w,Y,oe){Y.isScene!==!0&&(Y=He);const ue=Xe.get(w),Q=_.state.lights,Re=_.state.shadowsArray,Le=Q.state.version,Ge=pe.getParameters(w,Q.state,Re,Y,oe),Pe=pe.getProgramCacheKey(Ge);let et=ue.programs;ue.environment=w.isMeshStandardMaterial?Y.environment:null,ue.fog=Y.fog,ue.envMap=(w.isMeshStandardMaterial?Zt:Yt).get(w.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",Me),et=new Map,ue.programs=et);let nt=et.get(Pe);if(nt!==void 0){if(ue.currentProgram===nt&&ue.lightsStateVersion===Le)return Xi(w,Ge),nt}else Ge.uniforms=pe.getUniforms(w),w.onBeforeCompile(Ge,U),nt=pe.acquireProgram(Ge,Pe),et.set(Pe,nt),ue.uniforms=Ge.uniforms;const Ze=ue.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=Ce.uniform),Xi(w,Ge),ue.needsLights=ya(w),ue.lightsStateVersion=Le,ue.needsLights&&(Ze.ambientLightColor.value=Q.state.ambient,Ze.lightProbe.value=Q.state.probe,Ze.directionalLights.value=Q.state.directional,Ze.directionalLightShadows.value=Q.state.directionalShadow,Ze.spotLights.value=Q.state.spot,Ze.spotLightShadows.value=Q.state.spotShadow,Ze.rectAreaLights.value=Q.state.rectArea,Ze.ltc_1.value=Q.state.rectAreaLTC1,Ze.ltc_2.value=Q.state.rectAreaLTC2,Ze.pointLights.value=Q.state.point,Ze.pointLightShadows.value=Q.state.pointShadow,Ze.hemisphereLights.value=Q.state.hemi,Ze.directionalShadowMap.value=Q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ze.spotShadowMap.value=Q.state.spotShadowMap,Ze.spotLightMatrix.value=Q.state.spotLightMatrix,Ze.spotLightMap.value=Q.state.spotLightMap,Ze.pointShadowMap.value=Q.state.pointShadowMap,Ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),ue.currentProgram=nt,ue.uniformsList=null,nt}function Ir(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=$u.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Xi(w,Y){const oe=Xe.get(w);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function xa(w,Y,oe,ue,Q){Y.isScene!==!0&&(Y=He),lt.resetTextureUnits();const Re=Y.fog,Le=ue.isMeshStandardMaterial?Y.environment:null,Ge=q===null?U.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Is,Pe=(ue.isMeshStandardMaterial?Zt:Yt).get(ue.envMap||Le),et=ue.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,nt=!!oe.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ze=!!oe.morphAttributes.position,ht=!!oe.morphAttributes.normal,bt=!!oe.morphAttributes.color;let qt=Ja;ue.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(qt=U.toneMapping);const Nt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,dt=Nt!==void 0?Nt.length:0,$e=Xe.get(ue),Xt=_.state.lights;if(Ue===!0&&(J===!0||w!==D)){const $t=w===D&&ue.id===C;Ce.setState(ue,w,$t)}let vt=!1;ue.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Xt.state.version||$e.outputColorSpace!==Ge||Q.isBatchedMesh&&$e.batching===!1||!Q.isBatchedMesh&&$e.batching===!0||Q.isBatchedMesh&&$e.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&$e.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&$e.instancing===!1||!Q.isInstancedMesh&&$e.instancing===!0||Q.isSkinnedMesh&&$e.skinning===!1||!Q.isSkinnedMesh&&$e.skinning===!0||Q.isInstancedMesh&&$e.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&$e.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&$e.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&$e.instancingMorph===!1&&Q.morphTexture!==null||$e.envMap!==Pe||ue.fog===!0&&$e.fog!==Re||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ce.numPlanes||$e.numIntersection!==Ce.numIntersection)||$e.vertexAlphas!==et||$e.vertexTangents!==nt||$e.morphTargets!==Ze||$e.morphNormals!==ht||$e.morphColors!==bt||$e.toneMapping!==qt||$e.morphTargetsCount!==dt)&&(vt=!0):(vt=!0,$e.__version=ue.version);let Dn=$e.currentProgram;vt===!0&&(Dn=Di(ue,Y,Q));let xi=!1,In=!1,yn=!1;const zt=Dn.getUniforms(),Fn=$e.uniforms;if(Fe.useProgram(Dn.program)&&(xi=!0,In=!0,yn=!0),ue.id!==C&&(C=ue.id,In=!0),xi||D!==w){Fe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),zt.setValue(B,"projectionMatrix",w.projectionMatrix),zt.setValue(B,"viewMatrix",w.matrixWorldInverse);const An=zt.map.cameraPosition;An!==void 0&&An.setValue(B,be.setFromMatrixPosition(w.matrixWorld)),at.logarithmicDepthBuffer&&zt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&zt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,In=!0,yn=!0)}if(Q.isSkinnedMesh){zt.setOptional(B,Q,"bindMatrix"),zt.setOptional(B,Q,"bindMatrixInverse");const $t=Q.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),zt.setValue(B,"boneTexture",$t.boneTexture,lt))}Q.isBatchedMesh&&(zt.setOptional(B,Q,"batchingTexture"),zt.setValue(B,"batchingTexture",Q._matricesTexture,lt),zt.setOptional(B,Q,"batchingIdTexture"),zt.setValue(B,"batchingIdTexture",Q._indirectTexture,lt),zt.setOptional(B,Q,"batchingColorTexture"),Q._colorsTexture!==null&&zt.setValue(B,"batchingColorTexture",Q._colorsTexture,lt));const Un=oe.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Te.update(Q,oe,Dn),(In||$e.receiveShadow!==Q.receiveShadow)&&($e.receiveShadow=Q.receiveShadow,zt.setValue(B,"receiveShadow",Q.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Fn.envMap.value=Pe,Fn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Y.environment!==null&&(Fn.envMapIntensity.value=Y.environmentIntensity),In&&(zt.setValue(B,"toneMappingExposure",U.toneMappingExposure),$e.needsLights&&tr(Fn,yn),Re&&ue.fog===!0&&ye.refreshFogUniforms(Fn,Re),ye.refreshMaterialUniforms(Fn,ue,j,W,_.state.transmissionRenderTarget[w.id]),$u.upload(B,Ir($e),Fn,lt)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&($u.upload(B,Ir($e),Fn,lt),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&zt.setValue(B,"center",Q.center),zt.setValue(B,"modelViewMatrix",Q.modelViewMatrix),zt.setValue(B,"normalMatrix",Q.normalMatrix),zt.setValue(B,"modelMatrix",Q.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const $t=ue.uniformsGroups;for(let An=0,Fr=$t.length;An<Fr;An++){const Vn=$t[An];ut.update(Vn,Dn),ut.bind(Vn,Dn)}}return Dn}function tr(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function ya(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(w,Y,oe){const ue=Xe.get(w);ue.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),Xe.get(w.texture).__webglTexture=Y,Xe.get(w.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:oe,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const oe=Xe.get(w);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0};const un=B.createFramebuffer();this.setRenderTarget=function(w,Y=0,oe=0){q=w,H=Y,z=oe;let ue=!0,Q=null,Re=!1,Le=!1;if(w){const Pe=Xe.get(w);if(Pe.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(B.FRAMEBUFFER,null),ue=!1;else if(Pe.__webglFramebuffer===void 0)lt.setupRenderTarget(w);else if(Pe.__hasExternalTextures)lt.rebindTextures(w,Xe.get(w.texture).__webglTexture,Xe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ze=w.depthTexture;if(Pe.__boundDepthTexture!==Ze){if(Ze!==null&&Xe.has(Ze)&&(w.width!==Ze.image.width||w.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Le=!0);const nt=Xe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(nt[Y])?Q=nt[Y][oe]:Q=nt[Y],Re=!0):w.samples>0&&lt.useMultisampledRTT(w)===!1?Q=Xe.get(w).__webglMultisampledFramebuffer:Array.isArray(nt)?Q=nt[oe]:Q=nt,V.copy(w.viewport),te.copy(w.scissor),ce=w.scissorTest}else V.copy(G).multiplyScalar(j).floor(),te.copy(se).multiplyScalar(j).floor(),ce=le;if(oe!==0&&(Q=un),Fe.bindFramebuffer(B.FRAMEBUFFER,Q)&&ue&&Fe.drawBuffers(w,Q),Fe.viewport(V),Fe.scissor(te),Fe.setScissorTest(ce),Re){const Pe=Xe.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe.__webglTexture,oe)}else if(Le){const Pe=Y;for(let et=0;et<w.textures.length;et++){const nt=Xe.get(w.textures[et]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+et,nt.__webglTexture,oe,Pe)}}else if(w!==null&&oe!==0){const Pe=Xe.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pe.__webglTexture,oe)}C=-1},this.readRenderTargetPixels=function(w,Y,oe,ue,Q,Re,Le,Ge=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Pe=Pe[Le]),Pe){Fe.bindFramebuffer(B.FRAMEBUFFER,Pe);try{const et=w.textures[Ge],nt=et.format,Ze=et.type;if(!at.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-ue&&oe>=0&&oe<=w.height-Q&&(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ge),B.readPixels(Y,oe,ue,Q,We.convert(nt),We.convert(Ze),Re))}finally{const et=q!==null?Xe.get(q).__webglFramebuffer:null;Fe.bindFramebuffer(B.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(w,Y,oe,ue,Q,Re,Le,Ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Pe=Pe[Le]),Pe)if(Y>=0&&Y<=w.width-ue&&oe>=0&&oe<=w.height-Q){Fe.bindFramebuffer(B.FRAMEBUFFER,Pe);const et=w.textures[Ge],nt=et.format,Ze=et.type;if(!at.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ht),B.bufferData(B.PIXEL_PACK_BUFFER,Re.byteLength,B.STREAM_READ),w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ge),B.readPixels(Y,oe,ue,Q,We.convert(nt),We.convert(Ze),0);const bt=q!==null?Xe.get(q).__webglFramebuffer:null;Fe.bindFramebuffer(B.FRAMEBUFFER,bt);const qt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Db(B,qt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ht),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Re),B.deleteBuffer(ht),B.deleteSync(qt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,oe=0){const ue=Math.pow(2,-oe),Q=Math.floor(w.image.width*ue),Re=Math.floor(w.image.height*ue),Le=Y!==null?Y.x:0,Ge=Y!==null?Y.y:0;lt.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,oe,0,0,Le,Ge,Q,Re),Fe.unbindTexture()};const cl=B.createFramebuffer(),fl=B.createFramebuffer();this.copyTextureToTexture=function(w,Y,oe=null,ue=null,Q=0,Re=null){Re===null&&(Q!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=Q,Q=0):Re=0);let Le,Ge,Pe,et,nt,Ze,ht,bt,qt;const Nt=w.isCompressedTexture?w.mipmaps[Re]:w.image;if(oe!==null)Le=oe.max.x-oe.min.x,Ge=oe.max.y-oe.min.y,Pe=oe.isBox3?oe.max.z-oe.min.z:1,et=oe.min.x,nt=oe.min.y,Ze=oe.isBox3?oe.min.z:0;else{const Un=Math.pow(2,-Q);Le=Math.floor(Nt.width*Un),Ge=Math.floor(Nt.height*Un),w.isDataArrayTexture?Pe=Nt.depth:w.isData3DTexture?Pe=Math.floor(Nt.depth*Un):Pe=1,et=0,nt=0,Ze=0}ue!==null?(ht=ue.x,bt=ue.y,qt=ue.z):(ht=0,bt=0,qt=0);const dt=We.convert(Y.format),$e=We.convert(Y.type);let Xt;Y.isData3DTexture?(lt.setTexture3D(Y,0),Xt=B.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(lt.setTexture2DArray(Y,0),Xt=B.TEXTURE_2D_ARRAY):(lt.setTexture2D(Y,0),Xt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);const vt=B.getParameter(B.UNPACK_ROW_LENGTH),Dn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),xi=B.getParameter(B.UNPACK_SKIP_PIXELS),In=B.getParameter(B.UNPACK_SKIP_ROWS),yn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,et),B.pixelStorei(B.UNPACK_SKIP_ROWS,nt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze);const zt=w.isDataArrayTexture||w.isData3DTexture,Fn=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const Un=Xe.get(w),$t=Xe.get(Y),An=Xe.get(Un.__renderTarget),Fr=Xe.get($t.__renderTarget);Fe.bindFramebuffer(B.READ_FRAMEBUFFER,An.__webglFramebuffer),Fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let Vn=0;Vn<Pe;Vn++)zt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(w).__webglTexture,Q,Ze+Vn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(Y).__webglTexture,Re,qt+Vn)),B.blitFramebuffer(et,nt,Le,Ge,ht,bt,Le,Ge,B.DEPTH_BUFFER_BIT,B.NEAREST);Fe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||Xe.has(w)){const Un=Xe.get(w),$t=Xe.get(Y);Fe.bindFramebuffer(B.READ_FRAMEBUFFER,cl),Fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,fl);for(let An=0;An<Pe;An++)zt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Un.__webglTexture,Q,Ze+An):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Un.__webglTexture,Q),Fn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$t.__webglTexture,Re,qt+An):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,$t.__webglTexture,Re),Q!==0?B.blitFramebuffer(et,nt,Le,Ge,ht,bt,Le,Ge,B.COLOR_BUFFER_BIT,B.NEAREST):Fn?B.copyTexSubImage3D(Xt,Re,ht,bt,qt+An,et,nt,Le,Ge):B.copyTexSubImage2D(Xt,Re,ht,bt,et,nt,Le,Ge);Fe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Fn?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Xt,Re,ht,bt,qt,Le,Ge,Pe,dt,$e,Nt.data):Y.isCompressedArrayTexture?B.compressedTexSubImage3D(Xt,Re,ht,bt,qt,Le,Ge,Pe,dt,Nt.data):B.texSubImage3D(Xt,Re,ht,bt,qt,Le,Ge,Pe,dt,$e,Nt):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Re,ht,bt,Le,Ge,dt,$e,Nt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Re,ht,bt,Nt.width,Nt.height,dt,Nt.data):B.texSubImage2D(B.TEXTURE_2D,Re,ht,bt,Le,Ge,dt,$e,Nt);B.pixelStorei(B.UNPACK_ROW_LENGTH,vt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Dn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,xi),B.pixelStorei(B.UNPACK_SKIP_ROWS,In),B.pixelStorei(B.UNPACK_SKIP_IMAGES,yn),Re===0&&Y.generateMipmaps&&B.generateMipmap(Xt),Fe.unbindTexture()},this.initRenderTarget=function(w){Xe.get(w).__webglFramebuffer===void 0&&lt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?lt.setTextureCube(w,0):w.isData3DTexture?lt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?lt.setTexture2DArray(w,0):lt.setTexture2D(w,0),Fe.unbindTexture()},this.resetState=function(){H=0,z=0,q=null,Fe.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}function Ww(){const a=de.useRef();return de.useEffect(()=>{let e,n,r,l=0,u=0,f;const h=()=>{n=new vx,n.background=new St(657946),e=new si(75,window.innerWidth/window.innerHeight,.1,1e3),e.position.set(0,2,50),r=new wx({antialias:!0,canvas:a.current}),r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight);const v=new Mx(500,500,2450411,2450411);v.position.y=0,n.add(v);const S=(()=>{const E=new Cs,b=new St(3900150),y=new mc({color:b,linewidth:1}),_=500,N=100;for(let L=0;L<_;L++){const U=Math.random()*50+5,P=Math.random()*5+2,H=Math.random()*5+2,z=new Lr(P,U,H),q=new Sx(z),C=new Mp(q,y),D=(Math.random()-.5)*N,V=(Math.random()-.5)*N;C.position.set(D,U/2,V),E.add(C)}return E})();n.add(S),document.addEventListener("mousemove",m,!1),window.addEventListener("resize",p,!1)},m=v=>{l=v.clientX/window.innerWidth*2-1,u=-(v.clientY/window.innerHeight)*2+1},p=()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)},g=()=>{r&&(e.position.z-=.2,e.rotation.y=l*.2,e.rotation.x=u*.1,e.position.z<-50&&(e.position.z=50),r.render(n,e)),f=requestAnimationFrame(g)};return h(),g(),()=>{cancelAnimationFrame(f),document.removeEventListener("mousemove",m,!1),window.removeEventListener("resize",p,!1),r&&r.dispose()}},[]),Z.jsxs("section",{className:"relative w-full h-[85vh] rounded-4xl overflow-hidden shadow-lg",children:[Z.jsx("canvas",{ref:a,className:"absolute inset-0 z-0 w-full h-full"}),Z.jsxs("div",{className:"absolute inset-0 z-10 p-8 text-center bg-transparent justify-center items-center text-white rounded-xl shadow-lg m-4 max-h-screen dark",children:[Z.jsx("img",{src:nn.avatar,alt:"Profile Avatar",className:"w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-700"}),Z.jsxs("h1",{className:"text-4xl font-bold text-white my-4",children:["Hello, I'm ",nn.firstName," ",nn.lastName," ",Z.jsx("span",{className:"animate-pulse delay-100",children:"👋"})]}),Z.jsx("h3",{className:"text-2xl font-bold text-gray-100 my-10",children:"Welcome to my portfolio"}),Z.jsxs("div",{className:"space-x-4 mt-10",children:[Z.jsx(Tn,{to:"/profile",children:Z.jsx("button",{className:"mx-4 text-xl font-semibold bg-blue-700 p-4 border-2 rounded-xl hover:p-5 hover:bg-blue-600",children:"Profile"})}),Z.jsx(Tn,{to:"/projects",children:Z.jsx("button",{className:"mx-4 text-xl font-semibold bg-blue-700 p-4 border-2 rounded-xl hover:p-5 hover:bg-blue-600",children:"Projects"})})]})]})]})}function qw(){return Z.jsxs("div",{className:"p-4 bg-transparent rounded-xl shadow-lg",children:[Z.jsx("h1",{className:"text-3xl text-center font-bold text-white mb-4",children:"About Me"}),Z.jsxs("div",{className:"text-gray-300 h-125 space-y-4 overflow-y-scroll mt-10",children:[Z.jsxs("div",{className:"flex fle-wrap",children:[Z.jsxs("div",{className:"flex flex-wrap mt-4 w-1/2 px-2",children:[Z.jsx("p",{className:"text-lg font-semibold font-mono",children:nn.bio}),Z.jsxs("div",{className:"px-2",children:[Z.jsx("h2",{className:"mb-2 text-2xl font-semibold text-blue-400",children:"Interests"}),Z.jsx("ul",{className:"list-disc pl-6 space-y-2 mb-4",children:nn.interests.map((a,e)=>Z.jsx("li",{className:"text-gray-300 font-semibold",children:a},e))}),Z.jsx("h2",{className:"my-2 text-2xl font-semibold text-blue-400",children:"Goals "}),Z.jsx("p",{className:"text-gray-300 font-semibold font-mono",children:nn.goals})]})]}),Z.jsxs("div",{className:"w-1/2 py-4 px-2 rounded-lg shadow-inner",children:[Z.jsx("h2",{className:"text-2xl font-semibold text-blue-400 mb-4",children:"Skills & Technologies"}),nn.skills.map((a,e)=>Z.jsxs("div",{className:"mb-8 last:mb-0",children:[Z.jsx("h4",{className:"text-xl font-semibold mb-4",children:a.domain}),Z.jsx("div",{className:"flex flex-wrap gap-2",children:a.items.map((n,r)=>Z.jsx("span",{className:"bg-blue-800 text-white text-sm font-semibold px-3 py-1 rounded-full",children:n},r))})]},e))]})]}),Z.jsx("div",{className:"flex flex-wrap",children:Z.jsxs("div",{className:"mb-4 w-3/4 px-2",children:[Z.jsx("h2",{className:"text-2xl font-semibold text-blue-400 mb-4",children:"Certifications"}),Z.jsx("ul",{className:"list-image-none space-y-4",children:nn.certifications.map((a,e)=>Z.jsxs("li",{className:"flex",children:[Z.jsx("img",{src:a.badge,className:"w-20 h-20 my-auto mr-4"}),Z.jsxs("div",{children:[Z.jsx("div",{className:"text-lg font-semibold text-white",children:a.title}),Z.jsxs("p",{className:"text-gray-300",children:[Z.jsx("span",{className:"font-bold",children:"Issued by : "})," ",a.issuer," - ",a.description]})]})]},e))})]})})]})]})}var Cx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},d0=Ft.createContext&&Ft.createContext(Cx),jw=["attr","size","title"];function Yw(a,e){if(a==null)return{};var n=Zw(a,e),r,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);for(l=0;l<u.length;l++)r=u[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(n[r]=a[r])}return n}function Zw(a,e){if(a==null)return{};var n={};for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r)){if(e.indexOf(r)>=0)continue;n[r]=a[r]}return n}function oc(){return oc=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(a[r]=n[r])}return a},oc.apply(this,arguments)}function p0(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable})),n.push.apply(n,r)}return n}function lc(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?p0(Object(n),!0).forEach(function(r){Kw(a,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):p0(Object(n)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(n,r))})}return a}function Kw(a,e,n){return e=Qw(e),e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function Qw(a){var e=Jw(a,"string");return typeof e=="symbol"?e:e+""}function Jw(a,e){if(typeof a!="object"||!a)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var r=n.call(a,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function Dx(a){return a&&a.map((e,n)=>Ft.createElement(e.tag,lc({key:n},e.attr),Dx(e.child)))}function ll(a){return e=>Ft.createElement($w,oc({attr:lc({},a.attr)},e),Dx(a.child))}function $w(a){var e=n=>{var{attr:r,size:l,title:u}=a,f=Yw(a,jw),h=l||n.size||"1em",m;return n.className&&(m=n.className),a.className&&(m=(m?m+" ":"")+a.className),Ft.createElement("svg",oc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,f,{className:m,style:lc(lc({color:a.color||n.color},n.style),a.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),u&&Ft.createElement("title",null,u),a.children)};return d0!==void 0?Ft.createElement(d0.Consumer,null,n=>e(n)):e(Cx)}function Ux(a){return ll({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 1h13l.5.5v12l-.5.5h-13l-.5-.5v-12l.5-.5zM2 5v8h12V5H2zm0-1h12V2H2v2z"},child:[]}]})(a)}function Nx(a){return ll({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"},child:[]}]})(a)}function eC({project:a}){return Z.jsx("div",{className:"bg-blue-800 rounded-lg shadow-inner flex flex-col h-auto z-50 hover:shadow-white overflow-y",children:Z.jsxs(Tn,{to:`/projects/${a.slug}`,children:[Z.jsx("img",{src:a.thumbnail,alt:`${a.title} thumbnail`,className:"w-full h-auto rounded-lg mb-4",loading:"lazy"}),Z.jsx("h3",{className:"text-xl font-semibold text-blue-100 mb-2",children:a.title}),Z.jsx("p",{className:"text-gray-100 text-sm text-left flex-grow mx-1 p-2",children:a.description}),Z.jsx("div",{className:"mb-1 p-2",children:Z.jsx("div",{className:"mt-2 block",children:Z.jsx("div",{className:"flex flex-wrap gap-2",children:a.techStack.map((e,n)=>Z.jsx("span",{className:"bg-gray-600 text-gray-200 text-xs font-semibold px-2 rounded-full",children:e},n))})})})]})})}const Lx=[{title:"Personal Portfolio Website",slug:"portfolio-website",description:"A modern, frontend, responsive portfolio site built with React and Tailwind CSS. It features dynamic routing and a clean, minimalist design.",techStack:["React","Tailwind CSS","Vite","JavaScript","React-Router"],thumbnail:"https://placehold.co/400x250/333/FFF?text=Portfolio+Site",media:["https://placehold.co/800x600/333/FFF?text=Screenshot+1","https://placehold.co/800x600/333/FFF?text=Screenshot+2"],demoUrl:"#",repoUrl:"#"},{title:"AI Travel Planner",slug:"ai-travel-planner",description:"AI Travel Planner is a full-stack M.E.R.N (MongoDB, Express, React, Node.js) web application designed to help users easily plan trips with AI-generated itineraries. The platform streamlines travel planning, offering personalized recommendations, authentication, and interactive features.",techStack:["JavaScript","React","Nodejs","MongoDB Atlas","Express","Material UI","Vercel","Github Models API","OpenAI API","Nodemailer","JWT Authentication"],thumbnail:"/projects/ai-travel-planner/Screenshot1.png",media:["/projects/ai-travel-planner/Screenshot1.png","/projects/ai-travel-planner/Screenshot2.png","/projects/ai-travel-planner/Screenshot3.png","/projects/ai-travel-planner/Screenshot4.png"],demoUrl:"https://ai-travel-planner-frontend-indol.vercel.app/",repoUrl:"https://github.com/juma-altaitoon/ai-travel-planner"},{title:"Portfolio/Profile using Streamlit",slug:"streamlit-portfolio",description:"A Streamlit portfolio project to familiarize myself with the Streamlit framework in preparation for an upcoming ML/AI projects with streamlit.",techStack:["Python","Streamlit"],thumbnail:"/projects/streamlit-portfolio/Screenshot1.png",media:["/projects/streamlit-portfolio/Screenshot1.png","/projects/streamlit-portfolio/Screenshot2.png"],demoUrl:"#",repoUrl:"#"}];function tC(){return Z.jsxs("div",{className:"px-8 py-2 text-center bg-transparent rounded-xl shadow-lg m-4",children:[Z.jsx("h1",{className:"text-3xl font-bold text-white mb-6",children:"My Projects"}),Z.jsx("div",{className:"h-130 overflow-y-auto scroll-smooth",children:Z.jsx("div",{className:"m-4 grid grid-cols-1 lg:grid-cols-2 gap-8",children:Lx.map((a,e)=>Z.jsx(eC,{project:a},e))})})]})}function nC(){return Z.jsxs("div",{className:"p-8 text-cente rounded-xl shadow-lg m-4",children:[Z.jsx("h1",{className:"text-4xl font-bold text-white text-center my-4",children:"Case Study"}),Z.jsx("h4",{className:"text-blue-400 text-2xl font-bold my-6",children:"Working on it..."})]})}var ld={exports:{}},ud,m0;function iC(){if(m0)return ud;m0=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ud=a,ud}var cd,g0;function aC(){if(g0)return cd;g0=1;var a=iC();function e(){}function n(){}return n.resetWarningCache=e,cd=function(){function r(f,h,m,p,g,v){if(v!==a){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}r.isRequired=r;function l(){return r}var u={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:l,element:r,elementType:r,instanceOf:l,node:r,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:n,resetWarningCache:e};return u.PropTypes=u,u},cd}var v0;function rC(){return v0||(v0=1,ld.exports=aC()()),ld.exports}var sC=rC();const Wt=U0(sC);function _0(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable})),n.push.apply(n,r)}return n}function x0(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_0(Object(n),!0).forEach(function(r){Ox(a,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):_0(Object(n)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(n,r))})}return a}function ec(a){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ec=function(e){return typeof e}:ec=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ec(a)}function Ox(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function oC(a,e){if(a==null)return{};var n={},r=Object.keys(a),l,u;for(u=0;u<r.length;u++)l=r[u],!(e.indexOf(l)>=0)&&(n[l]=a[l]);return n}function lC(a,e){if(a==null)return{};var n=oC(a,e),r,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);for(l=0;l<u.length;l++)r=u[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(n[r]=a[r])}return n}function uC(a,e){return cC(a)||fC(a,e)||hC(a,e)||dC()}function cC(a){if(Array.isArray(a))return a}function fC(a,e){var n=a&&(typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"]);if(n!=null){var r=[],l=!0,u=!1,f,h;try{for(n=n.call(a);!(l=(f=n.next()).done)&&(r.push(f.value),!(e&&r.length===e));l=!0);}catch(m){u=!0,h=m}finally{try{!l&&n.return!=null&&n.return()}finally{if(u)throw h}}return r}}function hC(a,e){if(a){if(typeof a=="string")return y0(a,e);var n=Object.prototype.toString.call(a).slice(8,-1);if(n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set")return Array.from(a);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y0(a,e)}}function y0(a,e){(e==null||e>a.length)&&(e=a.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=a[n];return r}function dC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var zn=function(e,n,r){var l=!!r,u=Ft.useRef(r);Ft.useEffect(function(){u.current=r},[r]),Ft.useEffect(function(){if(!l||!e)return function(){};var f=function(){u.current&&u.current.apply(u,arguments)};return e.on(n,f),function(){e.off(n,f)}},[l,n,e,u])},pC=function(e){var n=Ft.useRef(e);return Ft.useEffect(function(){n.current=e},[e]),n.current},uc=function(e){return e!==null&&ec(e)==="object"},S0="[object Object]",mC=function a(e,n){if(!uc(e)||!uc(n))return e===n;var r=Array.isArray(e),l=Array.isArray(n);if(r!==l)return!1;var u=Object.prototype.toString.call(e)===S0,f=Object.prototype.toString.call(n)===S0;if(u!==f)return!1;if(!u&&!r)return e===n;var h=Object.keys(e),m=Object.keys(n);if(h.length!==m.length)return!1;for(var p={},g=0;g<h.length;g+=1)p[h[g]]=!0;for(var v=0;v<m.length;v+=1)p[m[v]]=!0;var x=Object.keys(p);if(x.length!==h.length)return!1;var S=e,E=n,b=function(_){return a(S[_],E[_])};return x.every(b)},gC=function(e,n,r){return uc(e)?Object.keys(e).reduce(function(l,u){var f=!uc(n)||!mC(e[u],n[u]);return r.includes(u)?(f&&console.warn("Unsupported prop change: options.".concat(u," is not a mutable property.")),l):f?x0(x0({},l||{}),{},Ox({},u,e[u])):l},null):null},Px=Ft.createContext(null);Px.displayName="ElementsContext";var vC=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e};Wt.any,Wt.object;Wt.func.isRequired;var Ix=Ft.createContext(null);Ix.displayName="CheckoutSdkContext";var _C=function(e,n){if(!e)throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(n," in an <CheckoutProvider> provider."));return e},xC=Ft.createContext(null);xC.displayName="CheckoutContext";Wt.any,Wt.shape({fetchClientSecret:Wt.func.isRequired,elementsOptions:Wt.object}).isRequired;var M0=function(e){var n=Ft.useContext(Ix),r=Ft.useContext(Px);if(n&&r)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CheckoutProvider> and <Elements> providers."));return n?_C(n,e):vC(r,e)},yC=["mode"],SC=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},on=function(e,n){var r="".concat(SC(e),"Element"),l=function(m){var p=m.id,g=m.className,v=m.options,x=v===void 0?{}:v,S=m.onBlur,E=m.onFocus,b=m.onReady,y=m.onChange,_=m.onEscape,N=m.onClick,L=m.onLoadError,U=m.onLoaderStart,P=m.onNetworksChange,H=m.onConfirm,z=m.onCancel,q=m.onShippingAddressChange,C=m.onShippingRateChange,D=m.onSavedPaymentMethodRemove,V=m.onSavedPaymentMethodUpdate,te=M0("mounts <".concat(r,">")),ce="elements"in te?te.elements:null,ve="checkoutSdk"in te?te.checkoutSdk:null,fe=Ft.useState(null),I=uC(fe,2),W=I[0],j=I[1],xe=Ft.useRef(null),A=Ft.useRef(null);zn(W,"blur",S),zn(W,"focus",E),zn(W,"escape",_),zn(W,"click",N),zn(W,"loaderror",L),zn(W,"loaderstart",U),zn(W,"networkschange",P),zn(W,"confirm",H),zn(W,"cancel",z),zn(W,"shippingaddresschange",q),zn(W,"shippingratechange",C),zn(W,"savedpaymentmethodremove",D),zn(W,"savedpaymentmethodupdate",V),zn(W,"change",y);var G;b&&(e==="expressCheckout"?G=b:G=function(){b(W)}),zn(W,"ready",G),Ft.useLayoutEffect(function(){if(xe.current===null&&A.current!==null&&(ce||ve)){var le=null;if(ve)switch(e){case"payment":le=ve.createPaymentElement(x);break;case"address":if("mode"in x){var Ee=x.mode,Ue=lC(x,yC);if(Ee==="shipping")le=ve.createShippingAddressElement(Ue);else if(Ee==="billing")le=ve.createBillingAddressElement(Ue);else throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.")}else throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");break;case"expressCheckout":le=ve.createExpressCheckoutElement(x);break;case"currencySelector":le=ve.createCurrencySelectorElement();break;case"taxId":le=ve.createTaxIdElement(x);break;default:throw new Error("Invalid Element type ".concat(r,". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."))}else ce&&(le=ce.create(e,x));xe.current=le,j(le),le&&le.mount(A.current)}},[ce,ve,x]);var se=pC(x);return Ft.useEffect(function(){if(xe.current){var le=gC(x,se,["paymentRequest"]);le&&"update"in xe.current&&xe.current.update(le)}},[x,se]),Ft.useLayoutEffect(function(){return function(){if(xe.current&&typeof xe.current.destroy=="function")try{xe.current.destroy(),xe.current=null}catch{}}},[]),Ft.createElement("div",{id:p,className:g,ref:A})},u=function(m){M0("mounts <".concat(r,">"));var p=m.id,g=m.className;return Ft.createElement("div",{id:p,className:g})},f=n?u:l;return f.propTypes={id:Wt.string,className:Wt.string,onChange:Wt.func,onBlur:Wt.func,onFocus:Wt.func,onReady:Wt.func,onEscape:Wt.func,onClick:Wt.func,onLoadError:Wt.func,onLoaderStart:Wt.func,onNetworksChange:Wt.func,onConfirm:Wt.func,onCancel:Wt.func,onShippingAddressChange:Wt.func,onShippingRateChange:Wt.func,onSavedPaymentMethodRemove:Wt.func,onSavedPaymentMethodUpdate:Wt.func,options:Wt.object},f.displayName=r,f.__elementType=e,f},ln=typeof window>"u",MC=Ft.createContext(null);MC.displayName="EmbeddedCheckoutProviderContext";on("auBankAccount",ln);var EC=on("card",ln);on("cardNumber",ln);on("cardExpiry",ln);on("cardCvc",ln);on("fpxBank",ln);on("iban",ln);on("idealBank",ln);on("p24Bank",ln);on("epsBank",ln);on("payment",ln);on("expressCheckout",ln);on("currencySelector",ln);on("paymentRequestButton",ln);on("linkAuthentication",ln);on("address",ln);on("shippingAddress",ln);on("paymentMethodMessaging",ln);on("affirmMessage",ln);on("afterpayClearpayMessage",ln);on("taxId",ln);var fd,E0;function bC(){if(E0)return fd;E0=1;var a=Object.defineProperty,e=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,l=(A,G)=>{for(var se in G)a(A,se,{get:G[se],enumerable:!0})},u=(A,G,se,le)=>{if(G&&typeof G=="object"||typeof G=="function")for(let Ee of n(G))!r.call(A,Ee)&&Ee!==se&&a(A,Ee,{get:()=>G[Ee],enumerable:!(le=e(G,Ee))||le.enumerable});return A},f=A=>u(a({},"__esModule",{value:!0}),A),h=(A,G,se)=>new Promise((le,Ee)=>{var Ue=be=>{try{me(se.next(be))}catch(qe){Ee(qe)}},J=be=>{try{me(se.throw(be))}catch(qe){Ee(qe)}},me=be=>be.done?le(be.value):Promise.resolve(be.value).then(Ue,J);me((se=se.apply(A,G)).next())}),m={};l(m,{SubmissionError:()=>U,appendExtraData:()=>ce,createClient:()=>W,getDefaultClient:()=>j,isSubmissionError:()=>L}),fd=f(m);var p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",g=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function v(A){A=String(A);for(var G,se,le,Ee,Ue="",J=0,me=A.length%3;J<A.length;){if((se=A.charCodeAt(J++))>255||(le=A.charCodeAt(J++))>255||(Ee=A.charCodeAt(J++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");G=se<<16|le<<8|Ee,Ue+=p.charAt(G>>18&63)+p.charAt(G>>12&63)+p.charAt(G>>6&63)+p.charAt(G&63)}return me?Ue.slice(0,me-3)+"===".substring(me):Ue}function x(A){if(A=String(A).replace(/[\t\n\f\r ]+/g,""),!g.test(A))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");A+="==".slice(2-(A.length&3));for(var G,se="",le,Ee,Ue=0;Ue<A.length;)G=p.indexOf(A.charAt(Ue++))<<18|p.indexOf(A.charAt(Ue++))<<12|(le=p.indexOf(A.charAt(Ue++)))<<6|(Ee=p.indexOf(A.charAt(Ue++))),se+=le===64?String.fromCharCode(G>>16&255):Ee===64?String.fromCharCode(G>>16&255,G>>8&255):String.fromCharCode(G>>16&255,G>>8&255,G&255);return se}var S=()=>navigator.webdriver||!!document.documentElement.getAttribute(x("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,E=class{constructor(){this.loadedAt=Date.now(),this.webdriver=S()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},b=class{constructor(A){this.kind="success",this.next=A.next}};function y(A){return"next"in A&&typeof A.next=="string"}var _=class{constructor(A,G){this.paymentIntentClientSecret=A,this.resubmitKey=G,this.kind="stripePluginPending"}};function N(A){if("stripe"in A&&"resubmitKey"in A&&typeof A.resubmitKey=="string"){let{stripe:G}=A;return typeof G=="object"&&G!=null&&"paymentIntentClientSecret"in G&&typeof G.paymentIntentClientSecret=="string"}return!1}function L(A){return A.kind==="error"}var U=class{constructor(...A){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var G;for(let se of A){if(!se.field){this.formErrors.push({code:se.code&&P(se.code)?se.code:"UNSPECIFIED",message:se.message});continue}let le=(G=this.fieldErrors.get(se.field))!=null?G:[];le.push({code:se.code&&z(se.code)?se.code:"UNSPECIFIED",message:se.message}),this.fieldErrors.set(se.field,le)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(A){var G;return(G=this.fieldErrors.get(A))!=null?G:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function P(A){return A in H}var H={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function z(A){return A in q}var q={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function C(A){return"errors"in A&&Array.isArray(A.errors)&&A.errors.every(G=>typeof G.message=="string")||"error"in A&&typeof A.error=="string"}var D="4.0.0",V=A=>v(JSON.stringify(A)),te=A=>{let G=`@formspree/core@${D}`;return A?`${A} ${G}`:G};function ce(A,G,se){A instanceof FormData?A.append(G,se):A[G]=se}function ve(A){return A!==null&&typeof A=="object"}var fe=class{constructor(A={}){this.project=A.project,this.stripe=A.stripe,typeof window<"u"&&(this.session=new E)}submitForm(A,G){return h(this,arguments,function*(se,le,Ee={}){let Ue=Ee.endpoint||"https://formspree.io",J=this.project?`${Ue}/p/${this.project}/f/${se}`:`${Ue}/f/${se}`,me={Accept:"application/json","Formspree-Client":te(Ee.clientName)};this.session&&(me["Formspree-Session-Data"]=V(this.session.data())),le instanceof FormData||(me["Content-Type"]="application/json");function be(He){return h(this,null,function*(){try{let je=yield(yield fetch(J,{method:"POST",mode:"cors",body:He instanceof FormData?He:JSON.stringify(He),headers:me})).json();if(ve(je)){if(C(je))return Array.isArray(je.errors)?new U(...je.errors):new U({message:je.error});if(N(je))return new _(je.stripe.paymentIntentClientSecret,je.resubmitKey);if(y(je))return new b({next:je.next})}return new U({message:"Unexpected response format"})}catch(je){let kt=je instanceof Error?je.message:`Unknown error while posting to Formspree: ${JSON.stringify(je)}`;return new U({message:kt})}})}if(this.stripe&&Ee.createPaymentMethod){let He=yield Ee.createPaymentMethod();if(He.error)return new U({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});ce(le,"paymentMethod",He.paymentMethod.id);let je=yield be(le);if(je.kind==="error")return je;if(je.kind==="stripePluginPending"){let kt=yield this.stripe.handleCardAction(je.paymentIntentClientSecret);if(kt.error)return new U({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});le instanceof FormData?le.delete("paymentMethod"):delete le.paymentMethod,ce(le,"paymentIntent",kt.paymentIntent.id),ce(le,"resubmitKey",je.resubmitKey);let B=yield be(le);return I(B),B}return je}let qe=yield be(le);return I(qe),qe})}};function I(A){let{kind:G}=A;if(G!=="success"&&G!=="error")throw new Error(`Unexpected submission result (kind: ${G})`)}var W=A=>new fe(A),j=()=>(xe||(xe=W()),xe),xe;return fd}var bp=bC();function hd(a){let{prefix:e,field:n,errors:r,...l}=a;if(r==null)return null;let u=n?r.getFieldErrors(n):r.getFormErrors();return u.length===0?null:Ft.createElement("div",{...l},e?`${e} `:null,u.map(f=>f.message).join(", "))}var TC=de.createContext({elements:null});function AC(){return de.useContext(TC)}var RC=Ft.createContext(null);function wC(){return de.useContext(RC)??{client:bp.getDefaultClient()}}var CC="3.0.0",DC=`@formspree/react@${CC}`;function UC(a,e={}){let n=wC(),{client:r=n.client,extraData:l,origin:u}=e,{elements:f}=AC(),{stripe:h}=r;return async function(m){let p=NC(m)?LC(m):m;if(typeof l=="object")for(let[x,S]of Object.entries(l)){let E;typeof S=="function"?E=await S():E=S,E!==void 0&&bp.appendExtraData(p,x,E)}let g=f?.getElement(EC),v=h&&g?()=>h.createPaymentMethod({type:"card",card:g,billing_details:OC(p)}):void 0;return r.submitForm(a,p,{endpoint:u,clientName:DC,createPaymentMethod:v})}}function NC(a){return"preventDefault"in a&&typeof a.preventDefault=="function"}function LC(a){a.preventDefault();let e=a.currentTarget;if(e.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(e)}function OC(a){let e={address:PC(a)};for(let n of["name","email","phone"]){let r=a instanceof FormData?a.get(n):a[n];r&&typeof r=="string"&&(e[n]=r)}return e}function PC(a){let e={};for(let[n,r]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let l=a instanceof FormData?a.get(n):a[n];l&&typeof l=="string"&&(e[r]=l)}return e}function IC(a,e={}){let[n,r]=de.useState(null),[l,u]=de.useState(null),[f,h]=de.useState(!1),[m,p]=de.useState(!1),g=UC(a,{client:e.client,extraData:e.data,origin:e.endpoint});return[{errors:n,result:l,submitting:f,succeeded:m},async function(v){h(!0);let x=await g(v);h(!1),bp.isSubmissionError(x)?(r(x),p(!1)):(r(null),u(x),p(!0))},function(){r(null),u(null),h(!1),p(!1)}]}function FC(){const[a,e]=IC("mjkenboz");return a.succeeded?Z.jsx("p",{className:"my-50 text-center text-4xl text-white font-bold",children:" Thanks for contacting us."}):Z.jsxs("div",{className:"p-8 text-center bg-transparent rounded-xl shadow-lg m-4",children:[Z.jsx("h1",{className:"text-3xl font-bold text-white mb-4",children:"Contact Me"}),Z.jsx("p",{className:"text-lg text-gray-300 mb-6",children:"Reach out to me via the form below, email, or through my social media profiles."}),Z.jsxs("form",{onSubmit:e,className:"space-y-6",children:[Z.jsxs("div",{children:[Z.jsx("label",{htmlFor:"name",className:"block text-gray-300 font-semibold mb-2"}),Z.jsx("input",{type:"text",id:"name",name:"name",className:"w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Your Name..."}),Z.jsx(hd,{prefix:"Name",field:"name",errors:a.errors})]}),Z.jsxs("div",{children:[Z.jsx("label",{htmlFor:"email",className:"block text-gray-300 font-semibold mb-2"}),Z.jsx("input",{type:"email",id:"email",name:"email",className:"w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"your.email@example.com"}),Z.jsx(hd,{prefix:"Email",field:"email",errors:a.errors})]}),Z.jsxs("div",{children:[Z.jsx("label",{htmlFor:"message",className:"block text-gray-300 font-semibold mb-2"}),Z.jsx("textarea",{id:"message",name:"message",rows:"5",className:"w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Your Message..."}),Z.jsx(hd,{prefix:"Message",field:"message",errors:a.errors})]}),Z.jsx("button",{type:"submit",className:"w-1/4 text-xl py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors duration-200",disabled:a.submitting,children:"Send Message"})]})]})}function BC(){const[a,e]=de.useState(!1);return Z.jsx("header",{className:"bg-black text-white p-4 sticky top-0 z-10 shadow-lg rounded-b-xl",children:Z.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[Z.jsx(Tn,{to:"/",children:Z.jsxs("h1",{className:"text-2xl font-bold font inter text-blue-600 hover:text-blue-700 animate-pulse",children:[nn.firstName," ",nn.lastName]})}),Z.jsxs("nav",{className:"hidden sm:flex space-x-4",children:[Z.jsx(Tn,{to:"/profile",className:"hover:text-blue-300 transition-colors duration-200",children:"Profile"}),Z.jsx(Tn,{to:"/projects",className:"hover:text-blue-300 transition-colors duration-200",children:"Projects"}),Z.jsx(Tn,{to:"/case-study",className:"hover:text-blue-300 transition-colors duration-200",children:"Case Study"}),Z.jsx(Tn,{to:"/contact",className:"hover:text-blue-300 transition-colors duration-200",children:"Contact"})]}),Z.jsxs("div",{className:"sm:hidden",children:[Z.jsx("button",{onClick:()=>e(!a),className:"focus:outline-none","aria-label":"Toggle navigation menu",children:Z.jsxs("svg",{width:"30",height:"30",fill:"currentColor",children:[Z.jsx("rect",{y:"7",width:"32",height:"4",rx:"2"}),Z.jsx("rect",{y:"15",width:"32",height:"4",rx:"2"}),Z.jsx("rect",{y:"23",width:"32",height:"4",rx:"2"})]})}),a&&Z.jsxs("nav",{className:"absolute right-4 top-16 bg-blue-800 rounded-lg shadow-lg p-4 flex flex-col space-y-2 z-10",children:[Z.jsx(Tn,{to:"/profile",onClick:()=>e(!1),className:"hover:text-blue-300 transition-colors duration-200",children:"Profile"}),Z.jsx(Tn,{to:"/projects",onClick:()=>e(!1),className:"hover:text-blue-300 transition-colors duration-200",children:"Projects"}),Z.jsx(Tn,{to:"/case-study",onClick:()=>e(!1),className:"hover:text-blue-300 transition-colors duration-200",children:"Case Study"}),Z.jsx(Tn,{to:"/contact",onClick:()=>e(!1),className:"hover:text-blue-300 transition-colors duration-200",children:"Contact"})]})]})]})})}function zC(){return Z.jsx("footer",{className:"bg-grey-700 text-white p-6 mt-auto rounded-t-xl shadow-lg",children:Z.jsx("div",{className:"container mx-auto text-center",children:Z.jsxs("p",{children:["@ ",new Date().getFullYear()," Juma • Built with React + Vite + Tailwind"]})})})}function HC(a){return ll({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"},child:[]}]})(a)}function GC(a){return ll({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z"},child:[]}]})(a)}function VC(a){return ll({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(a)}function kC(){return Z.jsxs("aside",{className:"hidden md:block h-140 w-60 bg-gradient-to-br from-blue-700 to-black text-white p-3 rounded-4xl shadow-lg shadow-blue-500 mr-10 space-y-4 sticky overflow-hidden",children:[Z.jsx("img",{src:"Portfolio_avatar.png",alt:`${nn.firstName}'s Avatar`,loading:"lazy",className:"rounded-full w-32 h-32 my-4 mx-auto"}),Z.jsxs("h2",{className:"text-lg font-bold mb-2 text-center",children:[nn.firstName," ",nn.lastName]}),Z.jsx("p",{className:"text-sm mb-4",children:nn.tagline}),Z.jsxs("p",{className:"flex justify-start",children:[Z.jsx(GC,{size:25,className:"mr-2"}),nn.location," "]}),Z.jsxs("p",{className:"flex justify-start",children:[Z.jsx(HC,{size:25,className:"mr-2"}),nn.email," "]}),Z.jsxs("div",{className:"flex flex-wrap justify-start space-y-4 space-x-6 my-10",children:[Z.jsx("a",{href:nn.linkedinUrl,target:"_blank",rel:"noopener noreferrer",children:Z.jsx(VC,{size:60})}),Z.jsx("a",{href:nn.githubUrl,target:"_blank",rel:"noopener noreferrer",children:Z.jsx(Nx,{size:60})}),Z.jsx("a",{href:nn.websiteUrl,target:"_blank",rel:"noopener noreferrer",children:Z.jsx(Ux,{size:60})}),Z.jsx(Tn,{to:"/profile",className:"my-auto hover:underline font-bold",children:"more..."})]})]})}function XC(){const[a,e]=de.useState(0),{slug:n}=NM(),r=Lx.find(f=>f.slug===n);if(!r)return Z.jsx("div",{className:"text-white text-center p-8",children:"Project Not Found"});const l=()=>{e((a+1)%r.media.length)},u=()=>{e((a-1+r.media.length)%r.media.length)};return Z.jsxs("div",{className:"p-4 bg-transparent rounded-xl shadow-lg m-4",children:[Z.jsx(Tn,{to:"/projects",className:"text-left text-blue-400 hover:text-blue-200 transition-colors duration-200",children:"← Back to Projects"}),Z.jsx("h1",{className:"text-4xl font-bold text-white text-center my-4",children:r.title}),Z.jsxs("div",{className:"flex flex-wrap mt-4",children:[Z.jsx("p",{className:"text-gray-300 text-lg md:w-1/2 w-full mb-6 p-3",children:r.description}),r.media&&r.media.length>0&&Z.jsxs("div",{className:"md:w-1/2 w-full relative mb-8 border-4 border-blue-700 rounded-2xl",children:[Z.jsx("img",{src:r.media[a],alt:`Screenshot ${a+1} of ${r.title}`,className:"w-full h-auto rounded-lg shadow-md object-cover",loading:"lazy",onError:f=>{f.target.src="https://placehold.co/800x600/333/FFF?text=Image+Not+Found"}}),Z.jsxs("p",{className:"dark:text-white text-center font-bold",children:[a,"/",r.media.length]}),r.media.length>1&&Z.jsxs(Z.Fragment,{children:[Z.jsx("button",{onClick:u,className:"absolute left-4 top-1/2 -translate-y-1/2 bg-transparent text-blue-700 text-2xl font-bold p-2 rounded-full","aria-label":"Previous Image",children:"‹"}),Z.jsx("button",{onClick:l,className:"absolute right-4 top-1/2 -translate-y-1/2 bg-transparent text-blue-700 text-2xl font-bold p-2 rounded-full","aria-label":"Next Image",children:"›"})]})]})]}),Z.jsxs("div",{className:"flex flex-wrap",children:[Z.jsxs("div",{className:"p-4 rounded-lg mb-4 md:w-1/2 w-full",children:[Z.jsx("h2",{className:"text-2xl font-semibold text-blue-400 mb-4",children:"Tech Stack"}),Z.jsx("div",{className:"flex flex-wrap gap-2",children:r.techStack.map((f,h)=>Z.jsx("span",{className:"bg-blue-700 text-white text-sm font-semibold p-2 rounded-full",children:f},h))})]}),Z.jsxs("div",{className:"p-4 rounded-lg mb-4 md:w-1/2 w-full",children:[Z.jsx("h2",{className:"text-2xl font-semibold text-blue-400 mb-4",children:"Project Links"}),Z.jsxs("div",{className:"flex justify-center space-x-10 mx-auto",children:[r.demoUrl&&Z.jsx("a",{href:r.demoUrl,target:"_blank",rel:"noopener noreferrer",className:"bg-blue-700 my-auto text-white font-bold p-2 rounded-lg hover:bg-blue-900 transition-colors duration-200",children:Z.jsx(Ux,{size:50})}),r.repoUrl&&Z.jsx("a",{href:r.repoUrl,target:"_blank",rel:"noopener noreferrer",className:"bg-blue-700 my-auto text-white font-bold p-2 rounded-lg hover:bg-blue-900 transition-colors duration-200",children:Z.jsx(Nx,{size:50})})]})]})]})]})}function WC(){const a=de.useRef();return de.useEffect(()=>{let e,n,r,l=0,u=0,f;const h=()=>{n=new vx,n.background=new St(657946),e=new si(75,window.innerWidth/window.innerHeight,.1,1e3),e.position.set(0,2,50),r=new wx({antialias:!0,canvas:a.current}),r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight);const v=new Mx(500,500,2450411,2450411);v.position.y=0,n.add(v);const S=(()=>{const E=new Cs,b=new St(3900150),y=new mc({color:b,linewidth:1}),_=500,N=100;for(let L=0;L<_;L++){const U=Math.random()*50+5,P=Math.random()*5+2,H=Math.random()*5+2,z=new Lr(P,U,H),q=new Sx(z),C=new Mp(q,y),D=(Math.random()-.5)*N,V=(Math.random()-.5)*N;C.position.set(D,U/2,V),E.add(C)}return E})();n.add(S),document.addEventListener("mousemove",m,!1),window.addEventListener("resize",p,!1)},m=v=>{l=v.clientX/window.innerWidth*2-1,u=-(v.clientY/window.innerHeight)*2+1},p=()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)},g=()=>{r&&(e.position.z-=.2,e.rotation.y=l*.2,e.rotation.x=u*.1,e.position.z<-50&&(e.position.z=50),r.render(n,e)),f=requestAnimationFrame(g)};return h(),g(),()=>{cancelAnimationFrame(f),document.removeEventListener("mousemove",m,!1),window.removeEventListener("resize",p,!1),r&&r.dispose()}},[]),Z.jsxs("section",{className:"relative w-full h-[85vh] rounded-4xl overflow-hidden shadow-lg",children:[Z.jsx("canvas",{ref:a,className:"absolute inset-0 z-0 w-full h-full"}),Z.jsxs("div",{className:"absolute inset-0 z-10 p-8 text-center bg-transparent justify-center items-center text-white rounded-xl shadow-lg m-4 max-h-screen",children:[Z.jsx("img",{src:nn.avatar,alt:"Profile Avatar",className:"w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-700"}),Z.jsxs("h1",{className:"text-4xl font-bold text-white my-4",children:["Hello, I'm ",nn.firstName," ",nn.lastName," ",Z.jsx("span",{className:"animate-pulse delay-100",children:"👋"})]}),Z.jsx("h3",{className:"text-2xl font-bold text-gray-100 my-10",children:"Welcome to my portfolio"}),Z.jsxs("div",{className:"space-x-4 mt-10",children:[Z.jsx(Tn,{to:"/profile",children:Z.jsx("button",{className:"mx-4 text-xl font-semibold bg-blue-700 p-4 border-2 rounded-xl hover:p-5 hover:bg-blue-600",children:"Profile"})}),Z.jsx(Tn,{to:"/projects",children:Z.jsx("button",{className:"mx-4 text-xl font-semibold bg-blue-700 p-4 border-2 rounded-4xl hover:p-5 hover:bg-blue-600",children:"Projects"})})]})]})]})}function qC(){return Z.jsx(Z.Fragment,{children:Z.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-black to-blue-950 text-grey-200 flex flex-col font-sans",children:[Z.jsx(BC,{}),Z.jsxs("main",{className:"container mx-auto flex-1 flex flex-col md:flex-row py-1 px-2",children:[Z.jsx(kC,{}),Z.jsx("div",{className:"flex-1",children:Z.jsxs(jM,{children:[Z.jsx(Za,{path:"/",element:Z.jsx(Ww,{})}),Z.jsx(Za,{path:"/profile",element:Z.jsx(qw,{})}),Z.jsx(Za,{path:"/projects",element:Z.jsx(tC,{})}),Z.jsx(Za,{path:"/projects/:slug",element:Z.jsx(XC,{})}),Z.jsx(Za,{path:"/case-study",element:Z.jsx(nC,{})}),Z.jsx(Za,{path:"/contact",element:Z.jsx(FC,{})}),Z.jsx(Za,{path:"/home",element:Z.jsx(WC,{})})]})})]}),Z.jsx(zC,{})]})})}var _c=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(a){return this.listeners.add(a),this.onSubscribe(),()=>{this.listeners.delete(a),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},jC={setTimeout:(a,e)=>setTimeout(a,e),clearTimeout:a=>clearTimeout(a),setInterval:(a,e)=>setInterval(a,e),clearInterval:a=>clearInterval(a)},YC=class{#e=jC;#t=!1;setTimeoutProvider(a){this.#e=a}setTimeout(a,e){return this.#e.setTimeout(a,e)}clearTimeout(a){this.#e.clearTimeout(a)}setInterval(a,e){return this.#e.setInterval(a,e)}clearInterval(a){this.#e.clearInterval(a)}},ap=new YC;function ZC(a){setTimeout(a,0)}var xc=typeof window>"u"||"Deno"in globalThis;function Ai(){}function KC(a,e){return typeof a=="function"?a(e):a}function QC(a){return typeof a=="number"&&a>=0&&a!==1/0}function JC(a,e){return Math.max(a+(e||0)-Date.now(),0)}function rp(a,e){return typeof a=="function"?a(e):a}function $C(a,e){return typeof a=="function"?a(e):a}function b0(a,e){const{type:n="all",exact:r,fetchStatus:l,predicate:u,queryKey:f,stale:h}=a;if(f){if(r){if(e.queryHash!==Tp(f,e.options))return!1}else if(!$o(e.queryKey,f))return!1}if(n!=="all"){const m=e.isActive();if(n==="active"&&!m||n==="inactive"&&m)return!1}return!(typeof h=="boolean"&&e.isStale()!==h||l&&l!==e.state.fetchStatus||u&&!u(e))}function T0(a,e){const{exact:n,status:r,predicate:l,mutationKey:u}=a;if(u){if(!e.options.mutationKey)return!1;if(n){if(Jo(e.options.mutationKey)!==Jo(u))return!1}else if(!$o(e.options.mutationKey,u))return!1}return!(r&&e.state.status!==r||l&&!l(e))}function Tp(a,e){return(e?.queryKeyHashFn||Jo)(a)}function Jo(a){return JSON.stringify(a,(e,n)=>sp(n)?Object.keys(n).sort().reduce((r,l)=>(r[l]=n[l],r),{}):n)}function $o(a,e){return a===e?!0:typeof a!=typeof e?!1:a&&e&&typeof a=="object"&&typeof e=="object"?Object.keys(e).every(n=>$o(a[n],e[n])):!1}var e2=Object.prototype.hasOwnProperty;function Fx(a,e){if(a===e)return a;const n=A0(a)&&A0(e);if(!n&&!(sp(a)&&sp(e)))return e;const l=(n?a:Object.keys(a)).length,u=n?e:Object.keys(e),f=u.length,h=n?new Array(f):{};let m=0;for(let p=0;p<f;p++){const g=n?p:u[p],v=a[g],x=e[g];if(v===x){h[g]=v,(n?p<l:e2.call(a,g))&&m++;continue}if(v===null||x===null||typeof v!="object"||typeof x!="object"){h[g]=x;continue}const S=Fx(v,x);h[g]=S,S===v&&m++}return l===f&&m===l?a:h}function A0(a){return Array.isArray(a)&&a.length===Object.keys(a).length}function sp(a){if(!R0(a))return!1;const e=a.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!R0(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(a)!==Object.prototype)}function R0(a){return Object.prototype.toString.call(a)==="[object Object]"}function t2(a){return new Promise(e=>{ap.setTimeout(e,a)})}function n2(a,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(a,e):n.structuralSharing!==!1?Fx(a,e):e}function i2(a,e,n=0){const r=[...a,e];return n&&r.length>n?r.slice(1):r}function a2(a,e,n=0){const r=[e,...a];return n&&r.length>n?r.slice(0,-1):r}var Ap=Symbol();function Bx(a,e){return!a.queryFn&&e?.initialPromise?()=>e.initialPromise:!a.queryFn||a.queryFn===Ap?()=>Promise.reject(new Error(`Missing queryFn: '${a.queryHash}'`)):a.queryFn}var r2=class extends _c{#e;#t;#n;constructor(){super(),this.#n=a=>{if(!xc&&window.addEventListener){const e=()=>a();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(a){this.#n=a,this.#t?.(),this.#t=a(e=>{typeof e=="boolean"?this.setFocused(e):this.onFocus()})}setFocused(a){this.#e!==a&&(this.#e=a,this.onFocus())}onFocus(){const a=this.isFocused();this.listeners.forEach(e=>{e(a)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},zx=new r2;function s2(){let a,e;const n=new Promise((l,u)=>{a=l,e=u});n.status="pending",n.catch(()=>{});function r(l){Object.assign(n,l),delete n.resolve,delete n.reject}return n.resolve=l=>{r({status:"fulfilled",value:l}),a(l)},n.reject=l=>{r({status:"rejected",reason:l}),e(l)},n}var o2=ZC;function l2(){let a=[],e=0,n=h=>{h()},r=h=>{h()},l=o2;const u=h=>{e?a.push(h):l(()=>{n(h)})},f=()=>{const h=a;a=[],h.length&&l(()=>{r(()=>{h.forEach(m=>{n(m)})})})};return{batch:h=>{let m;e++;try{m=h()}finally{e--,e||f()}return m},batchCalls:h=>(...m)=>{u(()=>{h(...m)})},schedule:u,setNotifyFunction:h=>{n=h},setBatchNotifyFunction:h=>{r=h},setScheduler:h=>{l=h}}}var Gn=l2(),u2=class extends _c{#e=!0;#t;#n;constructor(){super(),this.#n=a=>{if(!xc&&window.addEventListener){const e=()=>a(!0),n=()=>a(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",n)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(a){this.#n=a,this.#t?.(),this.#t=a(this.setOnline.bind(this))}setOnline(a){this.#e!==a&&(this.#e=a,this.listeners.forEach(n=>{n(a)}))}isOnline(){return this.#e}},cc=new u2;function c2(a){return Math.min(1e3*2**a,3e4)}function Hx(a){return(a??"online")==="online"?cc.isOnline():!0}var op=class extends Error{constructor(a){super("CancelledError"),this.revert=a?.revert,this.silent=a?.silent}};function Gx(a){let e=!1,n=0,r;const l=s2(),u=()=>l.status!=="pending",f=b=>{if(!u()){const y=new op(b);x(y),a.onCancel?.(y)}},h=()=>{e=!0},m=()=>{e=!1},p=()=>zx.isFocused()&&(a.networkMode==="always"||cc.isOnline())&&a.canRun(),g=()=>Hx(a.networkMode)&&a.canRun(),v=b=>{u()||(r?.(),l.resolve(b))},x=b=>{u()||(r?.(),l.reject(b))},S=()=>new Promise(b=>{r=y=>{(u()||p())&&b(y)},a.onPause?.()}).then(()=>{r=void 0,u()||a.onContinue?.()}),E=()=>{if(u())return;let b;const y=n===0?a.initialPromise:void 0;try{b=y??a.fn()}catch(_){b=Promise.reject(_)}Promise.resolve(b).then(v).catch(_=>{if(u())return;const N=a.retry??(xc?0:3),L=a.retryDelay??c2,U=typeof L=="function"?L(n,_):L,P=N===!0||typeof N=="number"&&n<N||typeof N=="function"&&N(n,_);if(e||!P){x(_);return}n++,a.onFail?.(n,_),t2(U).then(()=>p()?void 0:S()).then(()=>{e?x(_):E()})})};return{promise:l,status:()=>l.status,cancel:f,continue:()=>(r?.(),l),cancelRetry:h,continueRetry:m,canStart:g,start:()=>(g()?E():S().then(E),l)}}var Vx=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),QC(this.gcTime)&&(this.#e=ap.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(a){this.gcTime=Math.max(this.gcTime||0,a??(xc?1/0:300*1e3))}clearGcTimeout(){this.#e&&(ap.clearTimeout(this.#e),this.#e=void 0)}},f2=class extends Vx{#e;#t;#n;#a;#i;#s;#o;constructor(a){super(),this.#o=!1,this.#s=a.defaultOptions,this.setOptions(a.options),this.observers=[],this.#a=a.client,this.#n=this.#a.getQueryCache(),this.queryKey=a.queryKey,this.queryHash=a.queryHash,this.#e=w0(this.options),this.state=a.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(a){if(this.options={...this.#s,...a},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const e=w0(this.options);e.data!==void 0&&(this.setData(e.data,{updatedAt:e.dataUpdatedAt,manual:!0}),this.#e=e)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#n.remove(this)}setData(a,e){const n=n2(this.state.data,a,this.options);return this.#r({data:n,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),n}setState(a,e){this.#r({type:"setState",state:a,setStateOptions:e})}cancel(a){const e=this.#i?.promise;return this.#i?.cancel(a),e?e.then(Ai).catch(Ai):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(a=>$C(a.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Ap||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(a=>rp(a.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(a=>a.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(a=0){return this.state.data===void 0?!0:a==="static"?!1:this.state.isInvalidated?!0:!JC(this.state.dataUpdatedAt,a)}onFocus(){this.observers.find(e=>e.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){this.observers.find(e=>e.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(a){this.observers.includes(a)||(this.observers.push(a),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",query:this,observer:a}))}removeObserver(a){this.observers.includes(a)&&(this.observers=this.observers.filter(e=>e!==a),this.observers.length||(this.#i&&(this.#o?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#n.notify({type:"observerRemoved",query:this,observer:a}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#r({type:"invalidate"})}async fetch(a,e){if(this.state.fetchStatus!=="idle"&&this.#i?.status()!=="rejected"){if(this.state.data!==void 0&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(a&&this.setOptions(a),!this.options.queryFn){const h=this.observers.find(m=>m.options.queryFn);h&&this.setOptions(h.options)}const n=new AbortController,r=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(this.#o=!0,n.signal)})},l=()=>{const h=Bx(this.options,e),p=(()=>{const g={client:this.#a,queryKey:this.queryKey,meta:this.meta};return r(g),g})();return this.#o=!1,this.options.persister?this.options.persister(h,p,this):h(p)},f=(()=>{const h={fetchOptions:e,options:this.options,queryKey:this.queryKey,client:this.#a,state:this.state,fetchFn:l};return r(h),h})();this.options.behavior?.onFetch(f,this),this.#t=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==f.fetchOptions?.meta)&&this.#r({type:"fetch",meta:f.fetchOptions?.meta}),this.#i=Gx({initialPromise:e?.initialPromise,fn:f.fetchFn,onCancel:h=>{h instanceof op&&h.revert&&this.setState({...this.#t,fetchStatus:"idle"}),n.abort()},onFail:(h,m)=>{this.#r({type:"failed",failureCount:h,error:m})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:f.options.retry,retryDelay:f.options.retryDelay,networkMode:f.options.networkMode,canRun:()=>!0});try{const h=await this.#i.start();if(h===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(h),this.#n.config.onSuccess?.(h,this),this.#n.config.onSettled?.(h,this.state.error,this),h}catch(h){if(h instanceof op){if(h.silent)return this.#i.promise;if(h.revert){if(this.state.data===void 0)throw h;return this.state.data}}throw this.#r({type:"error",error:h}),this.#n.config.onError?.(h,this),this.#n.config.onSettled?.(this.state.data,h,this),h}finally{this.scheduleGc()}}#r(a){const e=n=>{switch(a.type){case"failed":return{...n,fetchFailureCount:a.failureCount,fetchFailureReason:a.error};case"pause":return{...n,fetchStatus:"paused"};case"continue":return{...n,fetchStatus:"fetching"};case"fetch":return{...n,...h2(n.data,this.options),fetchMeta:a.meta??null};case"success":const r={...n,data:a.data,dataUpdateCount:n.dataUpdateCount+1,dataUpdatedAt:a.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!a.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#t=a.manual?r:void 0,r;case"error":const l=a.error;return{...n,error:l,errorUpdateCount:n.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:n.fetchFailureCount+1,fetchFailureReason:l,fetchStatus:"idle",status:"error"};case"invalidate":return{...n,isInvalidated:!0};case"setState":return{...n,...a.state}}};this.state=e(this.state),Gn.batch(()=>{this.observers.forEach(n=>{n.onQueryUpdate()}),this.#n.notify({query:this,type:"updated",action:a})})}};function h2(a,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Hx(e.networkMode)?"fetching":"paused",...a===void 0&&{error:null,status:"pending"}}}function w0(a){const e=typeof a.initialData=="function"?a.initialData():a.initialData,n=e!==void 0,r=n?typeof a.initialDataUpdatedAt=="function"?a.initialDataUpdatedAt():a.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}function C0(a){return{onFetch:(e,n)=>{const r=e.options,l=e.fetchOptions?.meta?.fetchMore?.direction,u=e.state.data?.pages||[],f=e.state.data?.pageParams||[];let h={pages:[],pageParams:[]},m=0;const p=async()=>{let g=!1;const v=E=>{Object.defineProperty(E,"signal",{enumerable:!0,get:()=>(e.signal.aborted?g=!0:e.signal.addEventListener("abort",()=>{g=!0}),e.signal)})},x=Bx(e.options,e.fetchOptions),S=async(E,b,y)=>{if(g)return Promise.reject();if(b==null&&E.pages.length)return Promise.resolve(E);const N=(()=>{const H={client:e.client,queryKey:e.queryKey,pageParam:b,direction:y?"backward":"forward",meta:e.options.meta};return v(H),H})(),L=await x(N),{maxPages:U}=e.options,P=y?a2:i2;return{pages:P(E.pages,L,U),pageParams:P(E.pageParams,b,U)}};if(l&&u.length){const E=l==="backward",b=E?d2:D0,y={pages:u,pageParams:f},_=b(r,y);h=await S(y,_,E)}else{const E=a??u.length;do{const b=m===0?f[0]??r.initialPageParam:D0(r,h);if(m>0&&b==null)break;h=await S(h,b),m++}while(m<E)}return h};e.options.persister?e.fetchFn=()=>e.options.persister?.(p,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n):e.fetchFn=p}}}function D0(a,{pages:e,pageParams:n}){const r=e.length-1;return e.length>0?a.getNextPageParam(e[r],e,n[r],n):void 0}function d2(a,{pages:e,pageParams:n}){return e.length>0?a.getPreviousPageParam?.(e[0],e,n[0],n):void 0}var p2=class extends Vx{#e;#t;#n;constructor(a){super(),this.mutationId=a.mutationId,this.#t=a.mutationCache,this.#e=[],this.state=a.state||m2(),this.setOptions(a.options),this.scheduleGc()}setOptions(a){this.options=a,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(a){this.#e.includes(a)||(this.#e.push(a),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",mutation:this,observer:a}))}removeObserver(a){this.#e=this.#e.filter(e=>e!==a),this.scheduleGc(),this.#t.notify({type:"observerRemoved",mutation:this,observer:a})}optionalRemove(){this.#e.length||(this.state.status==="pending"?this.scheduleGc():this.#t.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(a){const e=()=>{this.#a({type:"continue"})};this.#n=Gx({fn:()=>this.options.mutationFn?this.options.mutationFn(a):Promise.reject(new Error("No mutationFn found")),onFail:(l,u)=>{this.#a({type:"failed",failureCount:l,error:u})},onPause:()=>{this.#a({type:"pause"})},onContinue:e,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#t.canRun(this)});const n=this.state.status==="pending",r=!this.#n.canStart();try{if(n)e();else{this.#a({type:"pending",variables:a,isPaused:r}),await this.#t.config.onMutate?.(a,this);const u=await this.options.onMutate?.(a);u!==this.state.context&&this.#a({type:"pending",context:u,variables:a,isPaused:r})}const l=await this.#n.start();return await this.#t.config.onSuccess?.(l,a,this.state.context,this),await this.options.onSuccess?.(l,a,this.state.context),await this.#t.config.onSettled?.(l,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(l,null,a,this.state.context),this.#a({type:"success",data:l}),l}catch(l){try{throw await this.#t.config.onError?.(l,a,this.state.context,this),await this.options.onError?.(l,a,this.state.context),await this.#t.config.onSettled?.(void 0,l,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,l,a,this.state.context),l}finally{this.#a({type:"error",error:l})}}finally{this.#t.runNext(this)}}#a(a){const e=n=>{switch(a.type){case"failed":return{...n,failureCount:a.failureCount,failureReason:a.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"pending":return{...n,context:a.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:a.isPaused,status:"pending",variables:a.variables,submittedAt:Date.now()};case"success":return{...n,data:a.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:a.error,failureCount:n.failureCount+1,failureReason:a.error,isPaused:!1,status:"error"}}};this.state=e(this.state),Gn.batch(()=>{this.#e.forEach(n=>{n.onMutationUpdate(a)}),this.#t.notify({mutation:this,type:"updated",action:a})})}};function m2(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var g2=class extends _c{constructor(a={}){super(),this.config=a,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(a,e,n){const r=new p2({mutationCache:this,mutationId:++this.#n,options:a.defaultMutationOptions(e),state:n});return this.add(r),r}add(a){this.#e.add(a);const e=Wu(a);if(typeof e=="string"){const n=this.#t.get(e);n?n.push(a):this.#t.set(e,[a])}this.notify({type:"added",mutation:a})}remove(a){if(this.#e.delete(a)){const e=Wu(a);if(typeof e=="string"){const n=this.#t.get(e);if(n)if(n.length>1){const r=n.indexOf(a);r!==-1&&n.splice(r,1)}else n[0]===a&&this.#t.delete(e)}}this.notify({type:"removed",mutation:a})}canRun(a){const e=Wu(a);if(typeof e=="string"){const r=this.#t.get(e)?.find(l=>l.state.status==="pending");return!r||r===a}else return!0}runNext(a){const e=Wu(a);return typeof e=="string"?this.#t.get(e)?.find(r=>r!==a&&r.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){Gn.batch(()=>{this.#e.forEach(a=>{this.notify({type:"removed",mutation:a})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(a){const e={exact:!0,...a};return this.getAll().find(n=>T0(e,n))}findAll(a={}){return this.getAll().filter(e=>T0(a,e))}notify(a){Gn.batch(()=>{this.listeners.forEach(e=>{e(a)})})}resumePausedMutations(){const a=this.getAll().filter(e=>e.state.isPaused);return Gn.batch(()=>Promise.all(a.map(e=>e.continue().catch(Ai))))}};function Wu(a){return a.options.scope?.id}var v2=class extends _c{constructor(a={}){super(),this.config=a,this.#e=new Map}#e;build(a,e,n){const r=e.queryKey,l=e.queryHash??Tp(r,e);let u=this.get(l);return u||(u=new f2({client:a,queryKey:r,queryHash:l,options:a.defaultQueryOptions(e),state:n,defaultOptions:a.getQueryDefaults(r)}),this.add(u)),u}add(a){this.#e.has(a.queryHash)||(this.#e.set(a.queryHash,a),this.notify({type:"added",query:a}))}remove(a){const e=this.#e.get(a.queryHash);e&&(a.destroy(),e===a&&this.#e.delete(a.queryHash),this.notify({type:"removed",query:a}))}clear(){Gn.batch(()=>{this.getAll().forEach(a=>{this.remove(a)})})}get(a){return this.#e.get(a)}getAll(){return[...this.#e.values()]}find(a){const e={exact:!0,...a};return this.getAll().find(n=>b0(e,n))}findAll(a={}){const e=this.getAll();return Object.keys(a).length>0?e.filter(n=>b0(a,n)):e}notify(a){Gn.batch(()=>{this.listeners.forEach(e=>{e(a)})})}onFocus(){Gn.batch(()=>{this.getAll().forEach(a=>{a.onFocus()})})}onOnline(){Gn.batch(()=>{this.getAll().forEach(a=>{a.onOnline()})})}},_2=class{#e;#t;#n;#a;#i;#s;#o;#r;constructor(a={}){this.#e=a.queryCache||new v2,this.#t=a.mutationCache||new g2,this.#n=a.defaultOptions||{},this.#a=new Map,this.#i=new Map,this.#s=0}mount(){this.#s++,this.#s===1&&(this.#o=zx.subscribe(async a=>{a&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#r=cc.subscribe(async a=>{a&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#s--,this.#s===0&&(this.#o?.(),this.#o=void 0,this.#r?.(),this.#r=void 0)}isFetching(a){return this.#e.findAll({...a,fetchStatus:"fetching"}).length}isMutating(a){return this.#t.findAll({...a,status:"pending"}).length}getQueryData(a){const e=this.defaultQueryOptions({queryKey:a});return this.#e.get(e.queryHash)?.state.data}ensureQueryData(a){const e=this.defaultQueryOptions(a),n=this.#e.build(this,e),r=n.state.data;return r===void 0?this.fetchQuery(a):(a.revalidateIfStale&&n.isStaleByTime(rp(e.staleTime,n))&&this.prefetchQuery(e),Promise.resolve(r))}getQueriesData(a){return this.#e.findAll(a).map(({queryKey:e,state:n})=>{const r=n.data;return[e,r]})}setQueryData(a,e,n){const r=this.defaultQueryOptions({queryKey:a}),u=this.#e.get(r.queryHash)?.state.data,f=KC(e,u);if(f!==void 0)return this.#e.build(this,r).setData(f,{...n,manual:!0})}setQueriesData(a,e,n){return Gn.batch(()=>this.#e.findAll(a).map(({queryKey:r})=>[r,this.setQueryData(r,e,n)]))}getQueryState(a){const e=this.defaultQueryOptions({queryKey:a});return this.#e.get(e.queryHash)?.state}removeQueries(a){const e=this.#e;Gn.batch(()=>{e.findAll(a).forEach(n=>{e.remove(n)})})}resetQueries(a,e){const n=this.#e;return Gn.batch(()=>(n.findAll(a).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...a},e)))}cancelQueries(a,e={}){const n={revert:!0,...e},r=Gn.batch(()=>this.#e.findAll(a).map(l=>l.cancel(n)));return Promise.all(r).then(Ai).catch(Ai)}invalidateQueries(a,e={}){return Gn.batch(()=>(this.#e.findAll(a).forEach(n=>{n.invalidate()}),a?.refetchType==="none"?Promise.resolve():this.refetchQueries({...a,type:a?.refetchType??a?.type??"active"},e)))}refetchQueries(a,e={}){const n={...e,cancelRefetch:e.cancelRefetch??!0},r=Gn.batch(()=>this.#e.findAll(a).filter(l=>!l.isDisabled()&&!l.isStatic()).map(l=>{let u=l.fetch(void 0,n);return n.throwOnError||(u=u.catch(Ai)),l.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(r).then(Ai)}fetchQuery(a){const e=this.defaultQueryOptions(a);e.retry===void 0&&(e.retry=!1);const n=this.#e.build(this,e);return n.isStaleByTime(rp(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(a){return this.fetchQuery(a).then(Ai).catch(Ai)}fetchInfiniteQuery(a){return a.behavior=C0(a.pages),this.fetchQuery(a)}prefetchInfiniteQuery(a){return this.fetchInfiniteQuery(a).then(Ai).catch(Ai)}ensureInfiniteQueryData(a){return a.behavior=C0(a.pages),this.ensureQueryData(a)}resumePausedMutations(){return cc.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(a){this.#n=a}setQueryDefaults(a,e){this.#a.set(Jo(a),{queryKey:a,defaultOptions:e})}getQueryDefaults(a){const e=[...this.#a.values()],n={};return e.forEach(r=>{$o(a,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(a,e){this.#i.set(Jo(a),{mutationKey:a,defaultOptions:e})}getMutationDefaults(a){const e=[...this.#i.values()],n={};return e.forEach(r=>{$o(a,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(a){if(a._defaulted)return a;const e={...this.#n.queries,...this.getQueryDefaults(a.queryKey),...a,_defaulted:!0};return e.queryHash||(e.queryHash=Tp(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===Ap&&(e.enabled=!1),e}defaultMutationOptions(a){return a?._defaulted?a:{...this.#n.mutations,...a?.mutationKey&&this.getMutationDefaults(a.mutationKey),...a,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},x2=de.createContext(void 0),y2=({client:a,children:e})=>(de.useEffect(()=>(a.mount(),()=>{a.unmount()}),[a]),Z.jsx(x2.Provider,{value:a,children:e}));const S2=new _2;tM.createRoot(document.getElementById("root")).render(Z.jsx(de.StrictMode,{children:Z.jsx(y2,{client:S2,children:Z.jsx(gE,{children:Z.jsx(qC,{})})})}));
