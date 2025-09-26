(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function D0(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Sh={exports:{}},Po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv;function VS(){if(Jv)return Po;Jv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:a,type:r,key:f,ref:l!==void 0?l:null,props:u}}return Po.Fragment=e,Po.jsx=n,Po.jsxs=n,Po}var $v;function kS(){return $v||($v=1,Sh.exports=VS()),Sh.exports}var J=kS(),Eh={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function XS(){if(e_)return ct;e_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(A){return A===null||typeof A!="object"?null:(A=v&&A[v]||A["@@iterator"],typeof A=="function"?A:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function y(A,G,se){this.props=A,this.context=G,this.refs=b,this.updater=se||S}y.prototype.isReactComponent={},y.prototype.setState=function(A,G){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,G,"setState")},y.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function _(){}_.prototype=y.prototype;function N(A,G,se){this.props=A,this.context=G,this.refs=b,this.updater=se||S}var L=N.prototype=new _;L.constructor=N,M(L,y.prototype),L.isPureReactComponent=!0;var U=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function z(A,G,se,le,Me,Ue){return se=Ue.ref,{$$typeof:a,type:A,key:G,ref:se!==void 0?se:null,props:Ue}}function Y(A,G){return z(A.type,G,void 0,void 0,void 0,A.props)}function w(A){return typeof A=="object"&&A!==null&&A.$$typeof===a}function D(A){var G={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(se){return G[se]})}var V=/\/+/g;function te(A,G){return typeof A=="object"&&A!==null&&A.key!=null?D(""+A.key):G.toString(36)}function ce(){}function ve(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(ce,ce):(A.status="pending",A.then(function(G){A.status==="pending"&&(A.status="fulfilled",A.value=G)},function(G){A.status==="pending"&&(A.status="rejected",A.reason=G)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function fe(A,G,se,le,Me){var Ue=typeof A;(Ue==="undefined"||Ue==="boolean")&&(A=null);var Q=!1;if(A===null)Q=!0;else switch(Ue){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(A.$$typeof){case a:case e:Q=!0;break;case g:return Q=A._init,fe(Q(A._payload),G,se,le,Me)}}if(Q)return Me=Me(A),Q=le===""?"."+te(A,0):le,U(Me)?(se="",Q!=null&&(se=Q.replace(V,"$&/")+"/"),fe(Me,G,se,"",function(qe){return qe})):Me!=null&&(w(Me)&&(Me=Y(Me,se+(Me.key==null||A&&A.key===Me.key?"":(""+Me.key).replace(V,"$&/")+"/")+Q)),G.push(Me)),1;Q=0;var me=le===""?".":le+":";if(U(A))for(var be=0;be<A.length;be++)le=A[be],Ue=me+te(le,be),Q+=fe(le,G,se,Ue,Me);else if(be=x(A),typeof be=="function")for(A=be.call(A),be=0;!(le=A.next()).done;)le=le.value,Ue=me+te(le,be++),Q+=fe(le,G,se,Ue,Me);else if(Ue==="object"){if(typeof A.then=="function")return fe(ve(A),G,se,le,Me);throw G=String(A),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return Q}function I(A,G,se){if(A==null)return A;var le=[],Me=0;return fe(A,le,"","",function(Ue){return G.call(se,Ue,Me++)}),le}function W(A){if(A._status===-1){var G=A._result;G=G(),G.then(function(se){(A._status===0||A._status===-1)&&(A._status=1,A._result=se)},function(se){(A._status===0||A._status===-1)&&(A._status=2,A._result=se)}),A._status===-1&&(A._status=0,A._result=G)}if(A._status===1)return A._result.default;throw A._result}var q=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function xe(){}return ct.Children={map:I,forEach:function(A,G,se){I(A,function(){G.apply(this,arguments)},se)},count:function(A){var G=0;return I(A,function(){G++}),G},toArray:function(A){return I(A,function(G){return G})||[]},only:function(A){if(!w(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},ct.Component=y,ct.Fragment=n,ct.Profiler=l,ct.PureComponent=N,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ct.__COMPILER_RUNTIME={__proto__:null,c:function(A){return P.H.useMemoCache(A)}},ct.cache=function(A){return function(){return A.apply(null,arguments)}},ct.cloneElement=function(A,G,se){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var le=M({},A.props),Me=A.key,Ue=void 0;if(G!=null)for(Q in G.ref!==void 0&&(Ue=void 0),G.key!==void 0&&(Me=""+G.key),G)!H.call(G,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&G.ref===void 0||(le[Q]=G[Q]);var Q=arguments.length-2;if(Q===1)le.children=se;else if(1<Q){for(var me=Array(Q),be=0;be<Q;be++)me[be]=arguments[be+2];le.children=me}return z(A.type,Me,void 0,void 0,Ue,le)},ct.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},ct.createElement=function(A,G,se){var le,Me={},Ue=null;if(G!=null)for(le in G.key!==void 0&&(Ue=""+G.key),G)H.call(G,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(Me[le]=G[le]);var Q=arguments.length-2;if(Q===1)Me.children=se;else if(1<Q){for(var me=Array(Q),be=0;be<Q;be++)me[be]=arguments[be+2];Me.children=me}if(A&&A.defaultProps)for(le in Q=A.defaultProps,Q)Me[le]===void 0&&(Me[le]=Q[le]);return z(A,Ue,void 0,void 0,null,Me)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(A){return{$$typeof:h,render:A}},ct.isValidElement=w,ct.lazy=function(A){return{$$typeof:g,_payload:{_status:-1,_result:A},_init:W}},ct.memo=function(A,G){return{$$typeof:p,type:A,compare:G===void 0?null:G}},ct.startTransition=function(A){var G=P.T,se={};P.T=se;try{var le=A(),Me=P.S;Me!==null&&Me(se,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(xe,q)}catch(Ue){q(Ue)}finally{P.T=G}},ct.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ct.use=function(A){return P.H.use(A)},ct.useActionState=function(A,G,se){return P.H.useActionState(A,G,se)},ct.useCallback=function(A,G){return P.H.useCallback(A,G)},ct.useContext=function(A){return P.H.useContext(A)},ct.useDebugValue=function(){},ct.useDeferredValue=function(A,G){return P.H.useDeferredValue(A,G)},ct.useEffect=function(A,G,se){var le=P.H;if(typeof se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return le.useEffect(A,G)},ct.useId=function(){return P.H.useId()},ct.useImperativeHandle=function(A,G,se){return P.H.useImperativeHandle(A,G,se)},ct.useInsertionEffect=function(A,G){return P.H.useInsertionEffect(A,G)},ct.useLayoutEffect=function(A,G){return P.H.useLayoutEffect(A,G)},ct.useMemo=function(A,G){return P.H.useMemo(A,G)},ct.useOptimistic=function(A,G){return P.H.useOptimistic(A,G)},ct.useReducer=function(A,G,se){return P.H.useReducer(A,G,se)},ct.useRef=function(A){return P.H.useRef(A)},ct.useState=function(A){return P.H.useState(A)},ct.useSyncExternalStore=function(A,G,se){return P.H.useSyncExternalStore(A,G,se)},ct.useTransition=function(){return P.H.useTransition()},ct.version="19.1.1",ct}var t_;function op(){return t_||(t_=1,Eh.exports=XS()),Eh.exports}var de=op();const Ft=D0(de);var Mh={exports:{}},Io={},bh={exports:{}},Th={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function WS(){return n_||(n_=1,(function(a){function e(I,W){var q=I.length;I.push(W);e:for(;0<q;){var xe=q-1>>>1,A=I[xe];if(0<l(A,W))I[xe]=W,I[q]=A,q=xe;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var W=I[0],q=I.pop();if(q!==W){I[0]=q;e:for(var xe=0,A=I.length,G=A>>>1;xe<G;){var se=2*(xe+1)-1,le=I[se],Me=se+1,Ue=I[Me];if(0>l(le,q))Me<A&&0>l(Ue,le)?(I[xe]=Ue,I[Me]=q,xe=Me):(I[xe]=le,I[se]=q,xe=se);else if(Me<A&&0>l(Ue,q))I[xe]=Ue,I[Me]=q,xe=Me;else break e}}return W}function l(I,W){var q=I.sortIndex-W.sortIndex;return q!==0?q:I.id-W.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();a.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,v=null,x=3,S=!1,M=!1,b=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var W=n(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=I)r(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=n(p)}}function P(I){if(b=!1,U(I),!M)if(n(m)!==null)M=!0,H||(H=!0,te());else{var W=n(p);W!==null&&fe(P,W.startTime-I)}}var H=!1,z=-1,Y=5,w=-1;function D(){return y?!0:!(a.unstable_now()-w<Y)}function V(){if(y=!1,H){var I=a.unstable_now();w=I;var W=!0;try{e:{M=!1,b&&(b=!1,N(z),z=-1),S=!0;var q=x;try{t:{for(U(I),v=n(m);v!==null&&!(v.expirationTime>I&&D());){var xe=v.callback;if(typeof xe=="function"){v.callback=null,x=v.priorityLevel;var A=xe(v.expirationTime<=I);if(I=a.unstable_now(),typeof A=="function"){v.callback=A,U(I),W=!0;break t}v===n(m)&&r(m),U(I)}else r(m);v=n(m)}if(v!==null)W=!0;else{var G=n(p);G!==null&&fe(P,G.startTime-I),W=!1}}break e}finally{v=null,x=q,S=!1}W=void 0}}finally{W?te():H=!1}}}var te;if(typeof L=="function")te=function(){L(V)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ve=ce.port2;ce.port1.onmessage=V,te=function(){ve.postMessage(null)}}else te=function(){_(V,0)};function fe(I,W){z=_(function(){I(a.unstable_now())},W)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(I){I.callback=null},a.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<I?Math.floor(1e3/I):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(I){switch(x){case 1:case 2:case 3:var W=3;break;default:W=x}var q=x;x=W;try{return I()}finally{x=q}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(I,W){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var q=x;x=I;try{return W()}finally{x=q}},a.unstable_scheduleCallback=function(I,W,q){var xe=a.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?xe+q:xe):q=xe,I){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=q+A,I={id:g++,callback:W,priorityLevel:I,startTime:q,expirationTime:A,sortIndex:-1},q>xe?(I.sortIndex=q,e(p,I),n(m)===null&&I===n(p)&&(b?(N(z),z=-1):b=!0,fe(P,q-xe))):(I.sortIndex=A,e(m,I),M||S||(M=!0,H||(H=!0,te()))),I},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(I){var W=x;return function(){var q=x;x=W;try{return I.apply(this,arguments)}finally{x=q}}}})(Th)),Th}var i_;function qS(){return i_||(i_=1,bh.exports=WS()),bh.exports}var Ah={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function jS(){if(a_)return Nn;a_=1;var a=op();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Nn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.1.1",Nn}var r_;function YS(){if(r_)return Ah.exports;r_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ah.exports=jS(),Ah.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function ZS(){if(s_)return Io;s_=1;var a=qS(),e=op(),n=YS();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function m(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,o=i;;){var c=s.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){s=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===s)return h(c),t;if(d===o)return h(c),i;d=d.sibling}throw Error(r(188))}if(s.return!==o.return)s=c,o=d;else{for(var E=!1,R=c.child;R;){if(R===s){E=!0,s=c,o=d;break}if(R===o){E=!0,o=c,s=d;break}R=R.sibling}if(!E){for(R=d.child;R;){if(R===s){E=!0,s=d,o=c;break}if(R===o){E=!0,o=d,s=c;break}R=R.sibling}if(!E)throw Error(r(189))}}if(s.alternate!==o)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function p(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=p(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function te(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case M:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case P:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case L:return(t.displayName||"Context")+".Provider";case N:return(t._context.displayName||"Context")+".Consumer";case U:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:ve(t.type)||"Memo";case Y:i=t._payload,t=t._init;try{return ve(t(i))}catch{}}return null}var fe=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},xe=[],A=-1;function G(t){return{current:t}}function se(t){0>A||(t.current=xe[A],xe[A]=null,A--)}function le(t,i){A++,xe[A]=t.current,t.current=i}var Me=G(null),Ue=G(null),Q=G(null),me=G(null);function be(t,i){switch(le(Q,i),le(Ue,t),le(Me,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Av(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Av(i),t=Rv(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}se(Me),le(Me,t)}function qe(){se(Me),se(Ue),se(Q)}function He(t){t.memoizedState!==null&&le(me,t);var i=Me.current,s=Rv(i,t.type);i!==s&&(le(Ue,t),le(Me,s))}function je(t){Ue.current===t&&(se(Me),se(Ue)),me.current===t&&(se(me),Do._currentValue=q)}var kt=Object.prototype.hasOwnProperty,B=a.unstable_scheduleCallback,Ut=a.unstable_cancelCallback,ot=a.unstable_shouldYield,at=a.unstable_requestPaint,Fe=a.unstable_now,Gt=a.unstable_getCurrentPriorityLevel,Xe=a.unstable_ImmediatePriority,lt=a.unstable_UserBlockingPriority,Yt=a.unstable_NormalPriority,Zt=a.unstable_LowPriority,O=a.unstable_IdlePriority,T=a.log,ne=a.unstable_setDisableYieldValue,pe=null,ye=null;function he(t){if(typeof T=="function"&&ne(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(pe,t)}catch{}}var Be=Math.clz32?Math.clz32:Ke,we=Math.log,Ye=Math.LN2;function Ke(t){return t>>>=0,t===0?32:31-(we(t)/Ye|0)|0}var Te=256,Oe=4194304;function Je(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function We(t,i,s){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?c=Je(o):(E&=R,E!==0?c=Je(E):s||(s=R&~t,s!==0&&(c=Je(s))))):(R=o&~d,R!==0?c=Je(R):E!==0?c=Je(E):s||(s=o&~t,s!==0&&(c=Je(s)))),c===0?0:i!==0&&i!==c&&(i&d)===0&&(d=c&-c,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:c}function Ne(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ut(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=Te;return Te<<=1,(Te&4194048)===0&&(Te=256),t}function Ce(){var t=Oe;return Oe<<=1,(Oe&62914560)===0&&(Oe=4194304),t}function De(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function ze(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ae(t,i,s,o,c,d){var E=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,F=t.expirationTimes,ee=t.hiddenUpdates;for(s=E&~s;0<s;){var ge=31-Be(s),Se=1<<ge;R[ge]=0,F[ge]=-1;var ie=ee[ge];if(ie!==null)for(ee[ge]=null,ge=0;ge<ie.length;ge++){var ae=ie[ge];ae!==null&&(ae.lane&=-536870913)}s&=~Se}o!==0&&Ee(t,o,0),d!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=d&~(E&~i))}function Ee(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-Be(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|s&4194090}function ke(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var o=31-Be(s),c=1<<o;c&i|t[o]&i&&(t[o]|=i),s&=~c}}function st(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ct(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Et(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:qv(t.type))}function _i(t,i){var s=W.p;try{return W.p=t,i()}finally{W.p=s}}var dn=Math.random().toString(36).slice(2),pn="__reactFiber$"+dn,Jt="__reactProps$"+dn,Di="__reactContainer$"+dn,Or="__reactEvents$"+dn,ul="__reactListeners$"+dn,Pr="__reactHandles$"+dn,Gs="__reactResources$"+dn,Ui="__reactMarker$"+dn;function Ir(t){delete t[pn],delete t[Jt],delete t[Or],delete t[ul],delete t[Pr]}function Xi(t){var i=t[pn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Di]||s[pn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Uv(t);t!==null;){if(s=t[pn])return s;t=Uv(t)}return i}t=s,s=t.parentNode}return null}function xa(t){if(t=t[pn]||t[Di]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function er(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function ya(t){var i=t[Gs];return i||(i=t[Gs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ln(t){t[Ui]=!0}var cl=new Set,fl={};function C(t,i){j(t,i),j(t+"Capture",i)}function j(t,i){for(fl[t]=i,t=0;t<i.length;t++)cl.add(i[t])}var oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},K={};function Re(t){return kt.call(K,t)?!0:kt.call(ue,t)?!1:oe.test(t)?K[t]=!0:(ue[t]=!0,!1)}function Le(t,i,s){if(Re(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Ge(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Pe(t,i,s,o){if(o===null)t.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+o)}}var et,nt;function Ze(t){if(et===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);et=i&&i[1]||"",nt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+et+t+nt}var ht=!1;function bt(t,i){if(!t||ht)return"";ht=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(ae){var ie=ae}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(ae){ie=ae}t.call(Se.prototype)}}else{try{throw Error()}catch(ae){ie=ae}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(ae){if(ae&&ie&&typeof ae.stack=="string")return[ae.stack,ie.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),E=d[0],R=d[1];if(E&&R){var F=E.split(`
`),ee=R.split(`
`);for(c=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;c<ee.length&&!ee[c].includes("DetermineComponentFrameRoot");)c++;if(o===F.length||c===ee.length)for(o=F.length-1,c=ee.length-1;1<=o&&0<=c&&F[o]!==ee[c];)c--;for(;1<=o&&0<=c;o--,c--)if(F[o]!==ee[c]){if(o!==1||c!==1)do if(o--,c--,0>c||F[o]!==ee[c]){var ge=`
`+F[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=c);break}}}finally{ht=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Ze(s):""}function qt(t){switch(t.tag){case 26:case 27:case 5:return Ze(t.type);case 16:return Ze("Lazy");case 13:return Ze("Suspense");case 19:return Ze("SuspenseList");case 0:case 15:return bt(t.type,!1);case 11:return bt(t.type.render,!1);case 1:return bt(t.type,!0);case 31:return Ze("Activity");default:return""}}function Nt(t){try{var i="";do i+=qt(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function dt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $e(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Xt(t){var i=$e(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),o=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,d=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(E){o=""+E,d.call(this,E)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function vt(t){t._valueTracker||(t._valueTracker=Xt(t))}function wn(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return t&&(o=$e(t)?t.checked?"true":"false":t.value),t=o,t!==s?(i.setValue(t),!0):!1}function xi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var In=/[\n"\\]/g;function yn(t){return t.replace(In,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function zt(t,i,s,o,c,d,E,R){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+dt(i)):t.value!==""+dt(i)&&(t.value=""+dt(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?Dn(t,E,dt(i)):s!=null?Dn(t,E,dt(s)):o!=null&&t.removeAttribute("value"),c==null&&d!=null&&(t.defaultChecked=!!d),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+dt(R):t.removeAttribute("name")}function Fn(t,i,s,o,c,d,E,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;s=s!=null?""+dt(s):"",i=i!=null?""+dt(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Dn(t,i,s){i==="number"&&xi(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function $t(t,i,s,o){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&o&&(t[s].defaultSelected=!0)}else{for(s=""+dt(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function Tn(t,i,s){if(i!=null&&(i=""+dt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+dt(s):""}function Fr(t,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(r(92));if(fe(o)){if(1<o.length)throw Error(r(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=dt(i),t.defaultValue=s,o=t.textContent,o===s&&o!==""&&o!==null&&(t.value=o)}function Vn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var zx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ap(t,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,s):typeof s!="number"||s===0||zx.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Rp(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in i)o=i[c],i.hasOwnProperty(c)&&s[c]!==o&&Ap(t,c,o)}else for(var d in i)i.hasOwnProperty(d)&&Ap(t,d,i[d])}function xc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hl(t){return Gx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var yc=null;function Sc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Br=null,zr=null;function Cp(t){var i=xa(t);if(i&&(t=i.stateNode)){var s=t[Jt]||null;e:switch(t=i.stateNode,i.type){case"input":if(zt(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+yn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==t&&o.form===t.form){var c=o[Jt]||null;if(!c)throw Error(r(90));zt(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===t.form&&wn(o)}break e;case"textarea":Tn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&$t(t,!!s.multiple,i,!1)}}}var Ec=!1;function wp(t,i,s){if(Ec)return t(i,s);Ec=!0;try{var o=t(i);return o}finally{if(Ec=!1,(Br!==null||zr!==null)&&(Ql(),Br&&(i=Br,t=zr,zr=Br=null,Cp(i),t)))for(i=0;i<t.length;i++)Cp(t[i])}}function Vs(t,i){var s=t.stateNode;if(s===null)return null;var o=s[Jt]||null;if(o===null)return null;s=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mc=!1;if(Wi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){Mc=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{Mc=!1}var Sa=null,bc=null,dl=null;function Dp(){if(dl)return dl;var t,i=bc,s=i.length,o,c="value"in Sa?Sa.value:Sa.textContent,d=c.length;for(t=0;t<s&&i[t]===c[t];t++);var E=s-t;for(o=1;o<=E&&i[s-o]===c[d-o];o++);return dl=c.slice(t,1<o?1-o:void 0)}function pl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function Up(){return!1}function kn(t){function i(s,o,c,d,E){this._reactName=s,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ml:Up,this.isPropagationStopped=Up,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),i}var tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=kn(tr),Xs=g({},tr,{view:0,detail:0}),Vx=kn(Xs),Tc,Ac,Ws,vl=g({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(Tc=t.screenX-Ws.screenX,Ac=t.screenY-Ws.screenY):Ac=Tc=0,Ws=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:Ac}}),Np=kn(vl),kx=g({},vl,{dataTransfer:0}),Xx=kn(kx),Wx=g({},Xs,{relatedTarget:0}),Rc=kn(Wx),qx=g({},tr,{animationName:0,elapsedTime:0,pseudoElement:0}),jx=kn(qx),Yx=g({},tr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zx=kn(Yx),Kx=g({},tr,{data:0}),Lp=kn(Kx),Qx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ey(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=$x[t])?!!i[t]:!1}function Cc(){return ey}var ty=g({},Xs,{key:function(t){if(t.key){var i=Qx[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ny=kn(ty),iy=g({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=kn(iy),ay=g({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),ry=kn(ay),sy=g({},tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),oy=kn(sy),ly=g({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uy=kn(ly),cy=g({},tr,{newState:0,oldState:0}),fy=kn(cy),hy=[9,13,27,32],wc=Wi&&"CompositionEvent"in window,qs=null;Wi&&"documentMode"in document&&(qs=document.documentMode);var dy=Wi&&"TextEvent"in window&&!qs,Pp=Wi&&(!wc||qs&&8<qs&&11>=qs),Ip=" ",Fp=!1;function Bp(t,i){switch(t){case"keyup":return hy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function py(t,i){switch(t){case"compositionend":return zp(i);case"keypress":return i.which!==32?null:(Fp=!0,Ip);case"textInput":return t=i.data,t===Ip&&Fp?null:t;default:return null}}function my(t,i){if(Hr)return t==="compositionend"||!wc&&Bp(t,i)?(t=Dp(),dl=bc=Sa=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Pp&&i.locale!=="ko"?null:i.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!gy[t.type]:i==="textarea"}function Gp(t,i,s,o){Br?zr?zr.push(o):zr=[o]:Br=o,i=iu(i,"onChange"),0<i.length&&(s=new gl("onChange","change",null,s,o),t.push({event:s,listeners:i}))}var js=null,Ys=null;function vy(t){Sv(t,0)}function _l(t){var i=er(t);if(wn(i))return t}function Vp(t,i){if(t==="change")return i}var kp=!1;if(Wi){var Dc;if(Wi){var Uc="oninput"in document;if(!Uc){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Uc=typeof Xp.oninput=="function"}Dc=Uc}else Dc=!1;kp=Dc&&(!document.documentMode||9<document.documentMode)}function Wp(){js&&(js.detachEvent("onpropertychange",qp),Ys=js=null)}function qp(t){if(t.propertyName==="value"&&_l(Ys)){var i=[];Gp(i,Ys,t,Sc(t)),wp(vy,i)}}function _y(t,i,s){t==="focusin"?(Wp(),js=i,Ys=s,js.attachEvent("onpropertychange",qp)):t==="focusout"&&Wp()}function xy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _l(Ys)}function yy(t,i){if(t==="click")return _l(i)}function Sy(t,i){if(t==="input"||t==="change")return _l(i)}function Ey(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:Ey;function Zs(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var c=s[o];if(!kt.call(i,c)||!Qn(t[c],i[c]))return!1}return!0}function jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yp(t,i){var s=jp(t);t=0;for(var o;s;){if(s.nodeType===3){if(o=t+s.textContent.length,t<=i&&o>=i)return{node:s,offset:i-t};t=o}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=jp(s)}}function Zp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Zp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Kp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=xi(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=xi(t.document)}return i}function Nc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var My=Wi&&"documentMode"in document&&11>=document.documentMode,Gr=null,Lc=null,Ks=null,Oc=!1;function Qp(t,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Oc||Gr==null||Gr!==xi(o)||(o=Gr,"selectionStart"in o&&Nc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ks&&Zs(Ks,o)||(Ks=o,o=iu(Lc,"onSelect"),0<o.length&&(i=new gl("onSelect","select",null,i,s),t.push({event:i,listeners:o}),i.target=Gr)))}function nr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Vr={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Pc={},Jp={};Wi&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function ir(t){if(Pc[t])return Pc[t];if(!Vr[t])return t;var i=Vr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Jp)return Pc[t]=i[s];return t}var $p=ir("animationend"),em=ir("animationiteration"),tm=ir("animationstart"),by=ir("transitionrun"),Ty=ir("transitionstart"),Ay=ir("transitioncancel"),nm=ir("transitionend"),im=new Map,Ic="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ic.push("scrollEnd");function yi(t,i){im.set(t,i),C(i,[t])}var am=new WeakMap;function si(t,i){if(typeof t=="object"&&t!==null){var s=am.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Nt(i)},am.set(t,i),i)}return{value:t,source:i,stack:Nt(i)}}var oi=[],kr=0,Fc=0;function xl(){for(var t=kr,i=Fc=kr=0;i<t;){var s=oi[i];oi[i++]=null;var o=oi[i];oi[i++]=null;var c=oi[i];oi[i++]=null;var d=oi[i];if(oi[i++]=null,o!==null&&c!==null){var E=o.pending;E===null?c.next=c:(c.next=E.next,E.next=c),o.pending=c}d!==0&&rm(s,c,d)}}function yl(t,i,s,o){oi[kr++]=t,oi[kr++]=i,oi[kr++]=s,oi[kr++]=o,Fc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Bc(t,i,s,o){return yl(t,i,s,o),Sl(t)}function Xr(t,i){return yl(t,null,null,i),Sl(t)}function rm(t,i,s){t.lanes|=s;var o=t.alternate;o!==null&&(o.lanes|=s);for(var c=!1,d=t.return;d!==null;)d.childLanes|=s,o=d.alternate,o!==null&&(o.childLanes|=s),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(c=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,c&&i!==null&&(c=31-Be(s),t=d.hiddenUpdates,o=t[c],o===null?t[c]=[i]:o.push(i),i.lane=s|536870912),d):null}function Sl(t){if(50<Eo)throw Eo=0,Wf=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Wr={};function Ry(t,i,s,o){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,i,s,o){return new Ry(t,i,s,o)}function zc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,i){var s=t.alternate;return s===null?(s=Jn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function sm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function El(t,i,s,o,c,d){var E=0;if(o=t,typeof t=="function")zc(t)&&(E=1);else if(typeof t=="string")E=wS(t,s,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=Jn(31,s,i,c),t.elementType=w,t.lanes=d,t;case M:return ar(s.children,c,d,i);case b:E=8,c|=24;break;case y:return t=Jn(12,s,i,c|2),t.elementType=y,t.lanes=d,t;case P:return t=Jn(13,s,i,c),t.elementType=P,t.lanes=d,t;case H:return t=Jn(19,s,i,c),t.elementType=H,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case L:E=10;break e;case N:E=9;break e;case U:E=11;break e;case z:E=14;break e;case Y:E=16,o=null;break e}E=29,s=Error(r(130,t===null?"null":typeof t,"")),o=null}return i=Jn(E,s,i,c),i.elementType=t,i.type=o,i.lanes=d,i}function ar(t,i,s,o){return t=Jn(7,t,o,i),t.lanes=s,t}function Hc(t,i,s){return t=Jn(6,t,null,i),t.lanes=s,t}function Gc(t,i,s){return i=Jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var qr=[],jr=0,Ml=null,bl=0,li=[],ui=0,rr=null,ji=1,Yi="";function sr(t,i){qr[jr++]=bl,qr[jr++]=Ml,Ml=t,bl=i}function om(t,i,s){li[ui++]=ji,li[ui++]=Yi,li[ui++]=rr,rr=t;var o=ji;t=Yi;var c=32-Be(o)-1;o&=~(1<<c),s+=1;var d=32-Be(i)+c;if(30<d){var E=c-c%5;d=(o&(1<<E)-1).toString(32),o>>=E,c-=E,ji=1<<32-Be(i)+c|s<<c|o,Yi=d+t}else ji=1<<d|s<<c|o,Yi=t}function Vc(t){t.return!==null&&(sr(t,1),om(t,1,0))}function kc(t){for(;t===Ml;)Ml=qr[--jr],qr[jr]=null,bl=qr[--jr],qr[jr]=null;for(;t===rr;)rr=li[--ui],li[ui]=null,Yi=li[--ui],li[ui]=null,ji=li[--ui],li[ui]=null}var Bn=null,en=null,Rt=!1,or=null,Ni=!1,Xc=Error(r(519));function lr(t){var i=Error(r(418,""));throw $s(si(i,t)),Xc}function lm(t){var i=t.stateNode,s=t.type,o=t.memoizedProps;switch(i[pn]=t,i[Jt]=o,s){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(s=0;s<bo.length;s++)xt(bo[s],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":xt("invalid",i),Fn(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),vt(i);break;case"select":xt("invalid",i);break;case"textarea":xt("invalid",i),Fr(i,o.value,o.defaultValue,o.children),vt(i)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||Tv(i.textContent,s)?(o.popover!=null&&(xt("beforetoggle",i),xt("toggle",i)),o.onScroll!=null&&xt("scroll",i),o.onScrollEnd!=null&&xt("scrollend",i),o.onClick!=null&&(i.onclick=au),i=!0):i=!1,i||lr(t)}function um(t){for(Bn=t.return;Bn;)switch(Bn.tag){case 5:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:Bn=Bn.return}}function Qs(t){if(t!==Bn)return!1;if(!Rt)return um(t),Rt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||oh(t.type,t.memoizedProps)),s=!s),s&&en&&lr(t),um(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){en=Ei(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}en=null}}else i===27?(i=en,Fa(t.type)?(t=fh,fh=null,en=t):en=i):en=Bn?Ei(t.stateNode.nextSibling):null;return!0}function Js(){en=Bn=null,Rt=!1}function cm(){var t=or;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),or=null),t}function $s(t){or===null?or=[t]:or.push(t)}var Wc=G(null),ur=null,Zi=null;function Ea(t,i,s){le(Wc,i._currentValue),i._currentValue=s}function Ki(t){t._currentValue=Wc.current,se(Wc)}function qc(t,i,s){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===s)break;t=t.return}}function jc(t,i,s,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var d=c.dependencies;if(d!==null){var E=c.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=c;for(var F=0;F<i.length;F++)if(R.context===i[F]){d.lanes|=s,R=d.alternate,R!==null&&(R.lanes|=s),qc(d.return,s,t),o||(E=null);break e}d=R.next}}else if(c.tag===18){if(E=c.return,E===null)throw Error(r(341));E.lanes|=s,d=E.alternate,d!==null&&(d.lanes|=s),qc(E,s,t),E=null}else E=c.child;if(E!==null)E.return=c;else for(E=c;E!==null;){if(E===t){E=null;break}if(c=E.sibling,c!==null){c.return=E.return,E=c;break}E=E.return}c=E}}function eo(t,i,s,o){t=null;for(var c=i,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var E=c.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var R=c.type;Qn(c.pendingProps.value,E.value)||(t!==null?t.push(R):t=[R])}}else if(c===me.current){if(E=c.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Do):t=[Do])}c=c.return}t!==null&&jc(i,t,s,o),i.flags|=262144}function Tl(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function cr(t){ur=t,Zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Un(t){return fm(ur,t)}function Al(t,i){return ur===null&&cr(t),fm(t,i)}function fm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Zi===null){if(t===null)throw Error(r(308));Zi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Zi=Zi.next=i;return s}var Cy=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},wy=a.unstable_scheduleCallback,Dy=a.unstable_NormalPriority,mn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yc(){return{controller:new Cy,data:new Map,refCount:0}}function to(t){t.refCount--,t.refCount===0&&wy(Dy,function(){t.controller.abort()})}var no=null,Zc=0,Yr=0,Zr=null;function Uy(t,i){if(no===null){var s=no=[];Zc=0,Yr=Jf(),Zr={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Zc++,i.then(hm,hm),i}function hm(){if(--Zc===0&&no!==null){Zr!==null&&(Zr.status="fulfilled");var t=no;no=null,Yr=0,Zr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Ny(t,i){var s=[],o={status:"pending",value:null,reason:null,then:function(c){s.push(c)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var c=0;c<s.length;c++)(0,s[c])(i)},function(c){for(o.status="rejected",o.reason=c,c=0;c<s.length;c++)(0,s[c])(void 0)}),o}var dm=I.S;I.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&Uy(t,i),dm!==null&&dm(t,i)};var fr=G(null);function Kc(){var t=fr.current;return t!==null?t:Vt.pooledCache}function Rl(t,i){i===null?le(fr,fr.current):le(fr,i.pool)}function pm(){var t=Kc();return t===null?null:{parent:mn._currentValue,pool:t}}var io=Error(r(460)),mm=Error(r(474)),Cl=Error(r(542)),Qc={then:function(){}};function gm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wl(){}function vm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(wl,wl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,xm(t),t;default:if(typeof i.status=="string")i.then(wl,wl);else{if(t=Vt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=o}},function(o){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,xm(t),t}throw ao=i,io}}var ao=null;function _m(){if(ao===null)throw Error(r(459));var t=ao;return ao=null,t}function xm(t){if(t===io||t===Cl)throw Error(r(483))}var Ma=!1;function Jc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $c(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ta(t,i,s){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(wt&2)!==0){var c=o.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),o.pending=i,i=Sl(t),rm(t,null,s),i}return yl(t,o,i,s),Sl(t)}function ro(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,ke(t,s)}}function ef(t,i){var s=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var c=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?c=d=E:d=d.next=E,s=s.next}while(s!==null);d===null?c=d=i:d=d.next=i}else c=d=i;s={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var tf=!1;function so(){if(tf){var t=Zr;if(t!==null)throw t}}function oo(t,i,s,o){tf=!1;var c=t.updateQueue;Ma=!1;var d=c.firstBaseUpdate,E=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var F=R,ee=F.next;F.next=null,E===null?d=ee:E.next=ee,E=F;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,R=ge.lastBaseUpdate,R!==E&&(R===null?ge.firstBaseUpdate=ee:R.next=ee,ge.lastBaseUpdate=F))}if(d!==null){var Se=c.baseState;E=0,ge=ee=F=null,R=d;do{var ie=R.lane&-536870913,ae=ie!==R.lane;if(ae?(St&ie)===ie:(o&ie)===ie){ie!==0&&ie===Yr&&(tf=!0),ge!==null&&(ge=ge.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var rt=t,tt=R;ie=i;var Pt=s;switch(tt.tag){case 1:if(rt=tt.payload,typeof rt=="function"){Se=rt.call(Pt,Se,ie);break e}Se=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=tt.payload,ie=typeof rt=="function"?rt.call(Pt,Se,ie):rt,ie==null)break e;Se=g({},Se,ie);break e;case 2:Ma=!0}}ie=R.callback,ie!==null&&(t.flags|=64,ae&&(t.flags|=8192),ae=c.callbacks,ae===null?c.callbacks=[ie]:ae.push(ie))}else ae={lane:ie,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ge===null?(ee=ge=ae,F=Se):ge=ge.next=ae,E|=ie;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;ae=R,R=ae.next,ae.next=null,c.lastBaseUpdate=ae,c.shared.pending=null}}while(!0);ge===null&&(F=Se),c.baseState=F,c.firstBaseUpdate=ee,c.lastBaseUpdate=ge,d===null&&(c.shared.lanes=0),La|=E,t.lanes=E,t.memoizedState=Se}}function ym(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Sm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)ym(s[t],i)}var Kr=G(null),Dl=G(0);function Em(t,i){t=ia,le(Dl,t),le(Kr,i),ia=t|i.baseLanes}function nf(){le(Dl,ia),le(Kr,Kr.current)}function af(){ia=Dl.current,se(Kr),se(Dl)}var Aa=0,mt=null,Lt=null,un=null,Ul=!1,Qr=!1,hr=!1,Nl=0,lo=0,Jr=null,Ly=0;function nn(){throw Error(r(321))}function rf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Qn(t[s],i[s]))return!1;return!0}function sf(t,i,s,o,c,d){return Aa=d,mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=t===null||t.memoizedState===null?rg:sg,hr=!1,d=s(o,c),hr=!1,Qr&&(d=bm(i,s,o,c)),Mm(t),d}function Mm(t){I.H=Bl;var i=Lt!==null&&Lt.next!==null;if(Aa=0,un=Lt=mt=null,Ul=!1,lo=0,Jr=null,i)throw Error(r(300));t===null||Sn||(t=t.dependencies,t!==null&&Tl(t)&&(Sn=!0))}function bm(t,i,s,o){mt=t;var c=0;do{if(Qr&&(Jr=null),lo=0,Qr=!1,25<=c)throw Error(r(301));if(c+=1,un=Lt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=Hy,d=i(s,o)}while(Qr);return d}function Oy(){var t=I.H,i=t.useState()[0];return i=typeof i.then=="function"?uo(i):i,t=t.useState()[0],(Lt!==null?Lt.memoizedState:null)!==t&&(mt.flags|=1024),i}function of(){var t=Nl!==0;return Nl=0,t}function lf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function uf(t){if(Ul){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Ul=!1}Aa=0,un=Lt=mt=null,Qr=!1,lo=Nl=0,Jr=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?mt.memoizedState=un=t:un=un.next=t,un}function cn(){if(Lt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var i=un===null?mt.memoizedState:un.next;if(i!==null)un=i,Lt=t;else{if(t===null)throw mt.alternate===null?Error(r(467)):Error(r(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},un===null?mt.memoizedState=un=t:un=un.next=t}return un}function cf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(t){var i=lo;return lo+=1,Jr===null&&(Jr=[]),t=vm(Jr,t,i),i=mt,(un===null?i.memoizedState:un.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?rg:sg),t}function Ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return uo(t);if(t.$$typeof===L)return Un(t)}throw Error(r(438,String(t)))}function ff(t){var i=null,s=mt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=cf(),mt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),o=0;o<t;o++)s[o]=D;return i.index++,s}function Qi(t,i){return typeof i=="function"?i(t):i}function Ol(t){var i=cn();return hf(i,Lt,t)}function hf(t,i,s){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=s;var c=t.baseQueue,d=o.pending;if(d!==null){if(c!==null){var E=c.next;c.next=d.next,d.next=E}i.baseQueue=c=d,o.pending=null}if(d=t.baseState,c===null)t.memoizedState=d;else{i=c.next;var R=E=null,F=null,ee=i,ge=!1;do{var Se=ee.lane&-536870913;if(Se!==ee.lane?(St&Se)===Se:(Aa&Se)===Se){var ie=ee.revertLane;if(ie===0)F!==null&&(F=F.next={lane:0,revertLane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),Se===Yr&&(ge=!0);else if((Aa&ie)===ie){ee=ee.next,ie===Yr&&(ge=!0);continue}else Se={lane:0,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},F===null?(R=F=Se,E=d):F=F.next=Se,mt.lanes|=ie,La|=ie;Se=ee.action,hr&&s(d,Se),d=ee.hasEagerState?ee.eagerState:s(d,Se)}else ie={lane:Se,revertLane:ee.revertLane,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},F===null?(R=F=ie,E=d):F=F.next=ie,mt.lanes|=Se,La|=Se;ee=ee.next}while(ee!==null&&ee!==i);if(F===null?E=d:F.next=R,!Qn(d,t.memoizedState)&&(Sn=!0,ge&&(s=Zr,s!==null)))throw s;t.memoizedState=d,t.baseState=E,t.baseQueue=F,o.lastRenderedState=d}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function df(t){var i=cn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var o=s.dispatch,c=s.pending,d=i.memoizedState;if(c!==null){s.pending=null;var E=c=c.next;do d=t(d,E.action),E=E.next;while(E!==c);Qn(d,i.memoizedState)||(Sn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,o]}function Tm(t,i,s){var o=mt,c=cn(),d=Rt;if(d){if(s===void 0)throw Error(r(407));s=s()}else s=i();var E=!Qn((Lt||c).memoizedState,s);E&&(c.memoizedState=s,Sn=!0),c=c.queue;var R=Cm.bind(null,o,c,t);if(co(2048,8,R,[t]),c.getSnapshot!==i||E||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,$r(9,Pl(),Rm.bind(null,o,c,s,i),null),Vt===null)throw Error(r(349));d||(Aa&124)!==0||Am(o,i,s)}return s}function Am(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=mt.updateQueue,i===null?(i=cf(),mt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Rm(t,i,s,o){i.value=s,i.getSnapshot=o,wm(i)&&Dm(t)}function Cm(t,i,s){return s(function(){wm(i)&&Dm(t)})}function wm(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Qn(t,s)}catch{return!0}}function Dm(t){var i=Xr(t,2);i!==null&&ii(i,t,2)}function pf(t){var i=Xn();if(typeof t=="function"){var s=t;if(t=s(),hr){he(!0);try{s()}finally{he(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:t},i}function Um(t,i,s,o){return t.baseState=s,hf(t,Lt,typeof o=="function"?o:Qi)}function Py(t,i,s,o,c){if(Fl(t))throw Error(r(485));if(t=i.action,t!==null){var d={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};I.T!==null?s(!0):d.isTransition=!1,o(d),s=i.pending,s===null?(d.next=i.pending=d,Nm(i,d)):(d.next=s.next,i.pending=s.next=d)}}function Nm(t,i){var s=i.action,o=i.payload,c=t.state;if(i.isTransition){var d=I.T,E={};I.T=E;try{var R=s(c,o),F=I.S;F!==null&&F(E,R),Lm(t,i,R)}catch(ee){mf(t,i,ee)}finally{I.T=d}}else try{d=s(c,o),Lm(t,i,d)}catch(ee){mf(t,i,ee)}}function Lm(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Om(t,i,o)},function(o){return mf(t,i,o)}):Om(t,i,s)}function Om(t,i,s){i.status="fulfilled",i.value=s,Pm(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Nm(t,s)))}function mf(t,i,s){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,Pm(i),i=i.next;while(i!==o)}t.action=null}function Pm(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Im(t,i){return i}function Fm(t,i){if(Rt){var s=Vt.formState;if(s!==null){e:{var o=mt;if(Rt){if(en){t:{for(var c=en,d=Ni;c.nodeType!==8;){if(!d){c=null;break t}if(c=Ei(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){en=Ei(c.nextSibling),o=c.data==="F!";break e}}lr(o)}o=!1}o&&(i=s[0])}}return s=Xn(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Im,lastRenderedState:i},s.queue=o,s=ng.bind(null,mt,o),o.dispatch=s,o=pf(!1),d=yf.bind(null,mt,!1,o.queue),o=Xn(),c={state:i,dispatch:null,action:t,pending:null},o.queue=c,s=Py.bind(null,mt,c,d,s),c.dispatch=s,o.memoizedState=t,[i,s,!1]}function Bm(t){var i=cn();return zm(i,Lt,t)}function zm(t,i,s){if(i=hf(t,i,Im)[0],t=Ol(Qi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=uo(i)}catch(E){throw E===io?Cl:E}else o=i;i=cn();var c=i.queue,d=c.dispatch;return s!==i.memoizedState&&(mt.flags|=2048,$r(9,Pl(),Iy.bind(null,c,s),null)),[o,d,t]}function Iy(t,i){t.action=i}function Hm(t){var i=cn(),s=Lt;if(s!==null)return zm(i,s,t);cn(),i=i.memoizedState,s=cn();var o=s.queue.dispatch;return s.memoizedState=t,[i,o,!1]}function $r(t,i,s,o){return t={tag:t,create:s,deps:o,inst:i,next:null},i=mt.updateQueue,i===null&&(i=cf(),mt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(o=s.next,s.next=t,t.next=o,i.lastEffect=t),t}function Pl(){return{destroy:void 0,resource:void 0}}function Gm(){return cn().memoizedState}function Il(t,i,s,o){var c=Xn();o=o===void 0?null:o,mt.flags|=t,c.memoizedState=$r(1|i,Pl(),s,o)}function co(t,i,s,o){var c=cn();o=o===void 0?null:o;var d=c.memoizedState.inst;Lt!==null&&o!==null&&rf(o,Lt.memoizedState.deps)?c.memoizedState=$r(i,d,s,o):(mt.flags|=t,c.memoizedState=$r(1|i,d,s,o))}function Vm(t,i){Il(8390656,8,t,i)}function km(t,i){co(2048,8,t,i)}function Xm(t,i){return co(4,2,t,i)}function Wm(t,i){return co(4,4,t,i)}function qm(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function jm(t,i,s){s=s!=null?s.concat([t]):null,co(4,4,qm.bind(null,i,t),s)}function gf(){}function Ym(t,i){var s=cn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&rf(i,o[1])?o[0]:(s.memoizedState=[t,i],t)}function Zm(t,i){var s=cn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&rf(i,o[1]))return o[0];if(o=t(),hr){he(!0);try{t()}finally{he(!1)}}return s.memoizedState=[o,i],o}function vf(t,i,s){return s===void 0||(Aa&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=Jg(),mt.lanes|=t,La|=t,s)}function Km(t,i,s,o){return Qn(s,i)?s:Kr.current!==null?(t=vf(t,s,o),Qn(t,i)||(Sn=!0),t):(Aa&42)===0?(Sn=!0,t.memoizedState=s):(t=Jg(),mt.lanes|=t,La|=t,i)}function Qm(t,i,s,o,c){var d=W.p;W.p=d!==0&&8>d?d:8;var E=I.T,R={};I.T=R,yf(t,!1,i,s);try{var F=c(),ee=I.S;if(ee!==null&&ee(R,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ge=Ny(F,o);fo(t,i,ge,ni(t))}else fo(t,i,o,ni(t))}catch(Se){fo(t,i,{then:function(){},status:"rejected",reason:Se},ni())}finally{W.p=d,I.T=E}}function Fy(){}function _f(t,i,s,o){if(t.tag!==5)throw Error(r(476));var c=Jm(t).queue;Qm(t,c,i,q,s===null?Fy:function(){return $m(t),s(o)})}function Jm(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function $m(t){var i=Jm(t).next.queue;fo(t,i,{},ni())}function xf(){return Un(Do)}function eg(){return cn().memoizedState}function tg(){return cn().memoizedState}function By(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ni();t=ba(s);var o=Ta(i,t,s);o!==null&&(ii(o,i,s),ro(o,i,s)),i={cache:Yc()},t.payload=i;return}i=i.return}}function zy(t,i,s){var o=ni();s={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Fl(t)?ig(i,s):(s=Bc(t,i,s,o),s!==null&&(ii(s,t,o),ag(s,i,o)))}function ng(t,i,s){var o=ni();fo(t,i,s,o)}function fo(t,i,s,o){var c={lane:o,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Fl(t))ig(i,c);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,R=d(E,s);if(c.hasEagerState=!0,c.eagerState=R,Qn(R,E))return yl(t,i,c,0),Vt===null&&xl(),!1}catch{}finally{}if(s=Bc(t,i,c,o),s!==null)return ii(s,t,o),ag(s,i,o),!0}return!1}function yf(t,i,s,o){if(o={lane:2,revertLane:Jf(),action:o,hasEagerState:!1,eagerState:null,next:null},Fl(t)){if(i)throw Error(r(479))}else i=Bc(t,s,o,2),i!==null&&ii(i,t,2)}function Fl(t){var i=t.alternate;return t===mt||i!==null&&i===mt}function ig(t,i){Qr=Ul=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function ag(t,i,s){if((s&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,s|=o,i.lanes=s,ke(t,s)}}var Bl={readContext:Un,use:Ll,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn},rg={readContext:Un,use:Ll,useCallback:function(t,i){return Xn().memoizedState=[t,i===void 0?null:i],t},useContext:Un,useEffect:Vm,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Il(4194308,4,qm.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Il(4194308,4,t,i)},useInsertionEffect:function(t,i){Il(4,2,t,i)},useMemo:function(t,i){var s=Xn();i=i===void 0?null:i;var o=t();if(hr){he(!0);try{t()}finally{he(!1)}}return s.memoizedState=[o,i],o},useReducer:function(t,i,s){var o=Xn();if(s!==void 0){var c=s(i);if(hr){he(!0);try{s(i)}finally{he(!1)}}}else c=i;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=zy.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var i=Xn();return t={current:t},i.memoizedState=t},useState:function(t){t=pf(t);var i=t.queue,s=ng.bind(null,mt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:gf,useDeferredValue:function(t,i){var s=Xn();return vf(s,t,i)},useTransition:function(){var t=pf(!1);return t=Qm.bind(null,mt,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var o=mt,c=Xn();if(Rt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Vt===null)throw Error(r(349));(St&124)!==0||Am(o,i,s)}c.memoizedState=s;var d={value:s,getSnapshot:i};return c.queue=d,Vm(Cm.bind(null,o,d,t),[t]),o.flags|=2048,$r(9,Pl(),Rm.bind(null,o,d,s,i),null),s},useId:function(){var t=Xn(),i=Vt.identifierPrefix;if(Rt){var s=Yi,o=ji;s=(o&~(1<<32-Be(o)-1)).toString(32)+s,i="«"+i+"R"+s,s=Nl++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=Ly++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:xf,useFormState:Fm,useActionState:Fm,useOptimistic:function(t){var i=Xn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=yf.bind(null,mt,!0,s),s.dispatch=i,[t,i]},useMemoCache:ff,useCacheRefresh:function(){return Xn().memoizedState=By.bind(null,mt)}},sg={readContext:Un,use:Ll,useCallback:Ym,useContext:Un,useEffect:km,useImperativeHandle:jm,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:Ol,useRef:Gm,useState:function(){return Ol(Qi)},useDebugValue:gf,useDeferredValue:function(t,i){var s=cn();return Km(s,Lt.memoizedState,t,i)},useTransition:function(){var t=Ol(Qi)[0],i=cn().memoizedState;return[typeof t=="boolean"?t:uo(t),i]},useSyncExternalStore:Tm,useId:eg,useHostTransitionStatus:xf,useFormState:Bm,useActionState:Bm,useOptimistic:function(t,i){var s=cn();return Um(s,Lt,t,i)},useMemoCache:ff,useCacheRefresh:tg},Hy={readContext:Un,use:Ll,useCallback:Ym,useContext:Un,useEffect:km,useImperativeHandle:jm,useInsertionEffect:Xm,useLayoutEffect:Wm,useMemo:Zm,useReducer:df,useRef:Gm,useState:function(){return df(Qi)},useDebugValue:gf,useDeferredValue:function(t,i){var s=cn();return Lt===null?vf(s,t,i):Km(s,Lt.memoizedState,t,i)},useTransition:function(){var t=df(Qi)[0],i=cn().memoizedState;return[typeof t=="boolean"?t:uo(t),i]},useSyncExternalStore:Tm,useId:eg,useHostTransitionStatus:xf,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,i){var s=cn();return Lt!==null?Um(s,Lt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:ff,useCacheRefresh:tg},es=null,ho=0;function zl(t){var i=ho;return ho+=1,es===null&&(es=[]),vm(es,t,i)}function po(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Hl(t,i){throw i.$$typeof===v?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function og(t){var i=t._init;return i(t._payload)}function lg(t){function i(Z,k){if(t){var $=Z.deletions;$===null?(Z.deletions=[k],Z.flags|=16):$.push(k)}}function s(Z,k){if(!t)return null;for(;k!==null;)i(Z,k),k=k.sibling;return null}function o(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function c(Z,k){return Z=qi(Z,k),Z.index=0,Z.sibling=null,Z}function d(Z,k,$){return Z.index=$,t?($=Z.alternate,$!==null?($=$.index,$<k?(Z.flags|=67108866,k):$):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function E(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,k,$,_e){return k===null||k.tag!==6?(k=Hc($,Z.mode,_e),k.return=Z,k):(k=c(k,$),k.return=Z,k)}function F(Z,k,$,_e){var Ve=$.type;return Ve===M?ge(Z,k,$.props.children,_e,$.key):k!==null&&(k.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===Y&&og(Ve)===k.type)?(k=c(k,$.props),po(k,$),k.return=Z,k):(k=El($.type,$.key,$.props,null,Z.mode,_e),po(k,$),k.return=Z,k)}function ee(Z,k,$,_e){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Gc($,Z.mode,_e),k.return=Z,k):(k=c(k,$.children||[]),k.return=Z,k)}function ge(Z,k,$,_e,Ve){return k===null||k.tag!==7?(k=ar($,Z.mode,_e,Ve),k.return=Z,k):(k=c(k,$),k.return=Z,k)}function Se(Z,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Hc(""+k,Z.mode,$),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case x:return $=El(k.type,k.key,k.props,null,Z.mode,$),po($,k),$.return=Z,$;case S:return k=Gc(k,Z.mode,$),k.return=Z,k;case Y:var _e=k._init;return k=_e(k._payload),Se(Z,k,$)}if(fe(k)||te(k))return k=ar(k,Z.mode,$,null),k.return=Z,k;if(typeof k.then=="function")return Se(Z,zl(k),$);if(k.$$typeof===L)return Se(Z,Al(Z,k),$);Hl(Z,k)}return null}function ie(Z,k,$,_e){var Ve=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ve!==null?null:R(Z,k,""+$,_e);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===Ve?F(Z,k,$,_e):null;case S:return $.key===Ve?ee(Z,k,$,_e):null;case Y:return Ve=$._init,$=Ve($._payload),ie(Z,k,$,_e)}if(fe($)||te($))return Ve!==null?null:ge(Z,k,$,_e,null);if(typeof $.then=="function")return ie(Z,k,zl($),_e);if($.$$typeof===L)return ie(Z,k,Al(Z,$),_e);Hl(Z,$)}return null}function ae(Z,k,$,_e,Ve){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return Z=Z.get($)||null,R(k,Z,""+_e,Ve);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case x:return Z=Z.get(_e.key===null?$:_e.key)||null,F(k,Z,_e,Ve);case S:return Z=Z.get(_e.key===null?$:_e.key)||null,ee(k,Z,_e,Ve);case Y:var gt=_e._init;return _e=gt(_e._payload),ae(Z,k,$,_e,Ve)}if(fe(_e)||te(_e))return Z=Z.get($)||null,ge(k,Z,_e,Ve,null);if(typeof _e.then=="function")return ae(Z,k,$,zl(_e),Ve);if(_e.$$typeof===L)return ae(Z,k,$,Al(k,_e),Ve);Hl(k,_e)}return null}function rt(Z,k,$,_e){for(var Ve=null,gt=null,Qe=k,it=k=0,Mn=null;Qe!==null&&it<$.length;it++){Qe.index>it?(Mn=Qe,Qe=null):Mn=Qe.sibling;var Tt=ie(Z,Qe,$[it],_e);if(Tt===null){Qe===null&&(Qe=Mn);break}t&&Qe&&Tt.alternate===null&&i(Z,Qe),k=d(Tt,k,it),gt===null?Ve=Tt:gt.sibling=Tt,gt=Tt,Qe=Mn}if(it===$.length)return s(Z,Qe),Rt&&sr(Z,it),Ve;if(Qe===null){for(;it<$.length;it++)Qe=Se(Z,$[it],_e),Qe!==null&&(k=d(Qe,k,it),gt===null?Ve=Qe:gt.sibling=Qe,gt=Qe);return Rt&&sr(Z,it),Ve}for(Qe=o(Qe);it<$.length;it++)Mn=ae(Qe,Z,it,$[it],_e),Mn!==null&&(t&&Mn.alternate!==null&&Qe.delete(Mn.key===null?it:Mn.key),k=d(Mn,k,it),gt===null?Ve=Mn:gt.sibling=Mn,gt=Mn);return t&&Qe.forEach(function(Va){return i(Z,Va)}),Rt&&sr(Z,it),Ve}function tt(Z,k,$,_e){if($==null)throw Error(r(151));for(var Ve=null,gt=null,Qe=k,it=k=0,Mn=null,Tt=$.next();Qe!==null&&!Tt.done;it++,Tt=$.next()){Qe.index>it?(Mn=Qe,Qe=null):Mn=Qe.sibling;var Va=ie(Z,Qe,Tt.value,_e);if(Va===null){Qe===null&&(Qe=Mn);break}t&&Qe&&Va.alternate===null&&i(Z,Qe),k=d(Va,k,it),gt===null?Ve=Va:gt.sibling=Va,gt=Va,Qe=Mn}if(Tt.done)return s(Z,Qe),Rt&&sr(Z,it),Ve;if(Qe===null){for(;!Tt.done;it++,Tt=$.next())Tt=Se(Z,Tt.value,_e),Tt!==null&&(k=d(Tt,k,it),gt===null?Ve=Tt:gt.sibling=Tt,gt=Tt);return Rt&&sr(Z,it),Ve}for(Qe=o(Qe);!Tt.done;it++,Tt=$.next())Tt=ae(Qe,Z,it,Tt.value,_e),Tt!==null&&(t&&Tt.alternate!==null&&Qe.delete(Tt.key===null?it:Tt.key),k=d(Tt,k,it),gt===null?Ve=Tt:gt.sibling=Tt,gt=Tt);return t&&Qe.forEach(function(GS){return i(Z,GS)}),Rt&&sr(Z,it),Ve}function Pt(Z,k,$,_e){if(typeof $=="object"&&$!==null&&$.type===M&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:e:{for(var Ve=$.key;k!==null;){if(k.key===Ve){if(Ve=$.type,Ve===M){if(k.tag===7){s(Z,k.sibling),_e=c(k,$.props.children),_e.return=Z,Z=_e;break e}}else if(k.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===Y&&og(Ve)===k.type){s(Z,k.sibling),_e=c(k,$.props),po(_e,$),_e.return=Z,Z=_e;break e}s(Z,k);break}else i(Z,k);k=k.sibling}$.type===M?(_e=ar($.props.children,Z.mode,_e,$.key),_e.return=Z,Z=_e):(_e=El($.type,$.key,$.props,null,Z.mode,_e),po(_e,$),_e.return=Z,Z=_e)}return E(Z);case S:e:{for(Ve=$.key;k!==null;){if(k.key===Ve)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){s(Z,k.sibling),_e=c(k,$.children||[]),_e.return=Z,Z=_e;break e}else{s(Z,k);break}else i(Z,k);k=k.sibling}_e=Gc($,Z.mode,_e),_e.return=Z,Z=_e}return E(Z);case Y:return Ve=$._init,$=Ve($._payload),Pt(Z,k,$,_e)}if(fe($))return rt(Z,k,$,_e);if(te($)){if(Ve=te($),typeof Ve!="function")throw Error(r(150));return $=Ve.call($),tt(Z,k,$,_e)}if(typeof $.then=="function")return Pt(Z,k,zl($),_e);if($.$$typeof===L)return Pt(Z,k,Al(Z,$),_e);Hl(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(s(Z,k.sibling),_e=c(k,$),_e.return=Z,Z=_e):(s(Z,k),_e=Hc($,Z.mode,_e),_e.return=Z,Z=_e),E(Z)):s(Z,k)}return function(Z,k,$,_e){try{ho=0;var Ve=Pt(Z,k,$,_e);return es=null,Ve}catch(Qe){if(Qe===io||Qe===Cl)throw Qe;var gt=Jn(29,Qe,null,Z.mode);return gt.lanes=_e,gt.return=Z,gt}finally{}}}var ts=lg(!0),ug=lg(!1),ci=G(null),Li=null;function Ra(t){var i=t.alternate;le(gn,gn.current&1),le(ci,t),Li===null&&(i===null||Kr.current!==null||i.memoizedState!==null)&&(Li=t)}function cg(t){if(t.tag===22){if(le(gn,gn.current),le(ci,t),Li===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Li=t)}}else Ca()}function Ca(){le(gn,gn.current),le(ci,ci.current)}function Ji(t){se(ci),Li===t&&(Li=null),se(gn)}var gn=G(0);function Gl(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||ch(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Sf(t,i,s,o){i=t.memoizedState,s=s(o,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Ef={enqueueSetState:function(t,i,s){t=t._reactInternals;var o=ni(),c=ba(o);c.payload=i,s!=null&&(c.callback=s),i=Ta(t,c,o),i!==null&&(ii(i,t,o),ro(i,t,o))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var o=ni(),c=ba(o);c.tag=1,c.payload=i,s!=null&&(c.callback=s),i=Ta(t,c,o),i!==null&&(ii(i,t,o),ro(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ni(),o=ba(s);o.tag=2,i!=null&&(o.callback=i),i=Ta(t,o,s),i!==null&&(ii(i,t,s),ro(i,t,s))}};function fg(t,i,s,o,c,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,E):i.prototype&&i.prototype.isPureReactComponent?!Zs(s,o)||!Zs(c,d):!0}function hg(t,i,s,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==t&&Ef.enqueueReplaceState(i,i.state,null)}function dr(t,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var c in t)s[c]===void 0&&(s[c]=t[c])}return s}var Vl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function dg(t){Vl(t)}function pg(t){console.error(t)}function mg(t){Vl(t)}function kl(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function gg(t,i,s){try{var o=t.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Mf(t,i,s){return s=ba(s),s.tag=3,s.payload={element:null},s.callback=function(){kl(t,i)},s}function vg(t){return t=ba(t),t.tag=3,t}function _g(t,i,s,o){var c=s.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;t.payload=function(){return c(d)},t.callback=function(){gg(i,s,o)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){gg(i,s,o),typeof c!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Gy(t,i,s,o,c){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&eo(i,s,c,!0),s=ci.current,s!==null){switch(s.tag){case 13:return Li===null?jf():s.alternate===null&&tn===0&&(tn=3),s.flags&=-257,s.flags|=65536,s.lanes=c,o===Qc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Zf(t,o,c)),!1;case 22:return s.flags|=65536,o===Qc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Zf(t,o,c)),!1}throw Error(r(435,s.tag))}return Zf(t,o,c),jf(),!1}if(Rt)return i=ci.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=c,o!==Xc&&(t=Error(r(422),{cause:o}),$s(si(t,s)))):(o!==Xc&&(i=Error(r(423),{cause:o}),$s(si(i,s))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=si(o,s),c=Mf(t.stateNode,o,c),ef(t,c),tn!==4&&(tn=2)),!1;var d=Error(r(520),{cause:o});if(d=si(d,s),So===null?So=[d]:So.push(d),tn!==4&&(tn=2),i===null)return!0;o=si(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=c&-c,s.lanes|=t,t=Mf(s.stateNode,o,t),ef(s,t),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Oa===null||!Oa.has(d))))return s.flags|=65536,c&=-c,s.lanes|=c,c=vg(c),_g(c,t,s,o),ef(s,c),!1}s=s.return}while(s!==null);return!1}var xg=Error(r(461)),Sn=!1;function An(t,i,s,o){i.child=t===null?ug(i,null,s,o):ts(i,t.child,s,o)}function yg(t,i,s,o,c){s=s.render;var d=i.ref;if("ref"in o){var E={};for(var R in o)R!=="ref"&&(E[R]=o[R])}else E=o;return cr(i),o=sf(t,i,s,E,d,c),R=of(),t!==null&&!Sn?(lf(t,i,c),$i(t,i,c)):(Rt&&R&&Vc(i),i.flags|=1,An(t,i,o,c),i.child)}function Sg(t,i,s,o,c){if(t===null){var d=s.type;return typeof d=="function"&&!zc(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,Eg(t,i,d,o,c)):(t=El(s.type,null,o,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Uf(t,c)){var E=d.memoizedProps;if(s=s.compare,s=s!==null?s:Zs,s(E,o)&&t.ref===i.ref)return $i(t,i,c)}return i.flags|=1,t=qi(d,o),t.ref=i.ref,t.return=i,i.child=t}function Eg(t,i,s,o,c){if(t!==null){var d=t.memoizedProps;if(Zs(d,o)&&t.ref===i.ref)if(Sn=!1,i.pendingProps=o=d,Uf(t,c))(t.flags&131072)!==0&&(Sn=!0);else return i.lanes=t.lanes,$i(t,i,c)}return bf(t,i,s,o,c)}function Mg(t,i,s){var o=i.pendingProps,c=o.children,d=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=d!==null?d.baseLanes|s:s,t!==null){for(c=i.child=t.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;i.childLanes=d&~o}else i.childLanes=0,i.child=null;return bg(t,i,o,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Rl(i,d!==null?d.cachePool:null),d!==null?Em(i,d):nf(),cg(i);else return i.lanes=i.childLanes=536870912,bg(t,i,d!==null?d.baseLanes|s:s,s)}else d!==null?(Rl(i,d.cachePool),Em(i,d),Ca(),i.memoizedState=null):(t!==null&&Rl(i,null),nf(),Ca());return An(t,i,c,s),i.child}function bg(t,i,s,o){var c=Kc();return c=c===null?null:{parent:mn._currentValue,pool:c},i.memoizedState={baseLanes:s,cachePool:c},t!==null&&Rl(i,null),nf(),cg(i),t!==null&&eo(t,i,o,!0),null}function Xl(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function bf(t,i,s,o,c){return cr(i),s=sf(t,i,s,o,void 0,c),o=of(),t!==null&&!Sn?(lf(t,i,c),$i(t,i,c)):(Rt&&o&&Vc(i),i.flags|=1,An(t,i,s,c),i.child)}function Tg(t,i,s,o,c,d){return cr(i),i.updateQueue=null,s=bm(i,o,s,c),Mm(t),o=of(),t!==null&&!Sn?(lf(t,i,d),$i(t,i,d)):(Rt&&o&&Vc(i),i.flags|=1,An(t,i,s,d),i.child)}function Ag(t,i,s,o,c){if(cr(i),i.stateNode===null){var d=Wr,E=s.contextType;typeof E=="object"&&E!==null&&(d=Un(E)),d=new s(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ef,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Jc(i),E=s.contextType,d.context=typeof E=="object"&&E!==null?Un(E):Wr,d.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(Sf(i,s,E,o),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&Ef.enqueueReplaceState(d,d.state,null),oo(i,o,d,c),so(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){d=i.stateNode;var R=i.memoizedProps,F=dr(s,R);d.props=F;var ee=d.context,ge=s.contextType;E=Wr,typeof ge=="object"&&ge!==null&&(E=Un(ge));var Se=s.getDerivedStateFromProps;ge=typeof Se=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,ge||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||ee!==E)&&hg(i,d,o,E),Ma=!1;var ie=i.memoizedState;d.state=ie,oo(i,o,d,c),so(),ee=i.memoizedState,R||ie!==ee||Ma?(typeof Se=="function"&&(Sf(i,s,Se,o),ee=i.memoizedState),(F=Ma||fg(i,s,F,o,ie,ee,E))?(ge||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=ee),d.props=o,d.state=ee,d.context=E,o=F):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,$c(t,i),E=i.memoizedProps,ge=dr(s,E),d.props=ge,Se=i.pendingProps,ie=d.context,ee=s.contextType,F=Wr,typeof ee=="object"&&ee!==null&&(F=Un(ee)),R=s.getDerivedStateFromProps,(ee=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==Se||ie!==F)&&hg(i,d,o,F),Ma=!1,ie=i.memoizedState,d.state=ie,oo(i,o,d,c),so();var ae=i.memoizedState;E!==Se||ie!==ae||Ma||t!==null&&t.dependencies!==null&&Tl(t.dependencies)?(typeof R=="function"&&(Sf(i,s,R,o),ae=i.memoizedState),(ge=Ma||fg(i,s,ge,o,ie,ae,F)||t!==null&&t.dependencies!==null&&Tl(t.dependencies))?(ee||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ae,F),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ae,F)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ae),d.props=o,d.state=ae,d.context=F,o=ge):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&ie===t.memoizedState||(i.flags|=1024),o=!1)}return d=o,Xl(t,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&o?(i.child=ts(i,t.child,null,c),i.child=ts(i,null,s,c)):An(t,i,s,c),i.memoizedState=d.state,t=i.child):t=$i(t,i,c),t}function Rg(t,i,s,o){return Js(),i.flags|=256,An(t,i,s,o),i.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(t){return{baseLanes:t,cachePool:pm()}}function Rf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=fi),t}function Cg(t,i,s){var o=i.pendingProps,c=!1,d=(i.flags&128)!==0,E;if((E=d)||(E=t!==null&&t.memoizedState===null?!1:(gn.current&2)!==0),E&&(c=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(Rt){if(c?Ra(i):Ca(),Rt){var R=en,F;if(F=R){e:{for(F=R,R=Ni;F.nodeType!==8;){if(!R){R=null;break e}if(F=Ei(F.nextSibling),F===null){R=null;break e}}R=F}R!==null?(i.memoizedState={dehydrated:R,treeContext:rr!==null?{id:ji,overflow:Yi}:null,retryLane:536870912,hydrationErrors:null},F=Jn(18,null,null,0),F.stateNode=R,F.return=i,i.child=F,Bn=i,en=null,F=!0):F=!1}F||lr(i)}if(R=i.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return ch(R)?i.lanes=32:i.lanes=536870912,null;Ji(i)}return R=o.children,o=o.fallback,c?(Ca(),c=i.mode,R=Wl({mode:"hidden",children:R},c),o=ar(o,c,s,null),R.return=i,o.return=i,R.sibling=o,i.child=R,c=i.child,c.memoizedState=Af(s),c.childLanes=Rf(t,E,s),i.memoizedState=Tf,o):(Ra(i),Cf(i,R))}if(F=t.memoizedState,F!==null&&(R=F.dehydrated,R!==null)){if(d)i.flags&256?(Ra(i),i.flags&=-257,i=wf(t,i,s)):i.memoizedState!==null?(Ca(),i.child=t.child,i.flags|=128,i=null):(Ca(),c=o.fallback,R=i.mode,o=Wl({mode:"visible",children:o.children},R),c=ar(c,R,s,null),c.flags|=2,o.return=i,c.return=i,o.sibling=c,i.child=o,ts(i,t.child,null,s),o=i.child,o.memoizedState=Af(s),o.childLanes=Rf(t,E,s),i.memoizedState=Tf,i=c);else if(Ra(i),ch(R)){if(E=R.nextSibling&&R.nextSibling.dataset,E)var ee=E.dgst;E=ee,o=Error(r(419)),o.stack="",o.digest=E,$s({value:o,source:null,stack:null}),i=wf(t,i,s)}else if(Sn||eo(t,i,s,!1),E=(s&t.childLanes)!==0,Sn||E){if(E=Vt,E!==null&&(o=s&-s,o=(o&42)!==0?1:st(o),o=(o&(E.suspendedLanes|s))!==0?0:o,o!==0&&o!==F.retryLane))throw F.retryLane=o,Xr(t,o),ii(E,t,o),xg;R.data==="$?"||jf(),i=wf(t,i,s)}else R.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=F.treeContext,en=Ei(R.nextSibling),Bn=i,Rt=!0,or=null,Ni=!1,t!==null&&(li[ui++]=ji,li[ui++]=Yi,li[ui++]=rr,ji=t.id,Yi=t.overflow,rr=i),i=Cf(i,o.children),i.flags|=4096);return i}return c?(Ca(),c=o.fallback,R=i.mode,F=t.child,ee=F.sibling,o=qi(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,ee!==null?c=qi(ee,c):(c=ar(c,R,s,null),c.flags|=2),c.return=i,o.return=i,o.sibling=c,i.child=o,o=c,c=i.child,R=t.child.memoizedState,R===null?R=Af(s):(F=R.cachePool,F!==null?(ee=mn._currentValue,F=F.parent!==ee?{parent:ee,pool:ee}:F):F=pm(),R={baseLanes:R.baseLanes|s,cachePool:F}),c.memoizedState=R,c.childLanes=Rf(t,E,s),i.memoizedState=Tf,o):(Ra(i),s=t.child,t=s.sibling,s=qi(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=s,i.memoizedState=null,s)}function Cf(t,i){return i=Wl({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Wl(t,i){return t=Jn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function wf(t,i,s){return ts(i,t.child,null,s),t=Cf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function wg(t,i,s){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),qc(t.return,i,s)}function Df(t,i,s,o,c){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:c}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=s,d.tailMode=c)}function Dg(t,i,s){var o=i.pendingProps,c=o.revealOrder,d=o.tail;if(An(t,i,o.children,s),o=gn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wg(t,s,i);else if(t.tag===19)wg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(le(gn,o),c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&Gl(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Df(i,!1,c,s,d);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Gl(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Df(i,!0,s,null,d);break;case"together":Df(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $i(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),La|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(eo(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=qi(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=qi(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Uf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Tl(t)))}function Vy(t,i,s){switch(i.tag){case 3:be(i,i.stateNode.containerInfo),Ea(i,mn,t.memoizedState.cache),Js();break;case 27:case 5:He(i);break;case 4:be(i,i.stateNode.containerInfo);break;case 10:Ea(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Ra(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Cg(t,i,s):(Ra(i),t=$i(t,i,s),t!==null?t.sibling:null);Ra(i);break;case 19:var c=(t.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(eo(t,i,s,!1),o=(s&i.childLanes)!==0),c){if(o)return Dg(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),le(gn,gn.current),o)break;return null;case 22:case 23:return i.lanes=0,Mg(t,i,s);case 24:Ea(i,mn,t.memoizedState.cache)}return $i(t,i,s)}function Ug(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Sn=!0;else{if(!Uf(t,s)&&(i.flags&128)===0)return Sn=!1,Vy(t,i,s);Sn=(t.flags&131072)!==0}else Sn=!1,Rt&&(i.flags&1048576)!==0&&om(i,bl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var o=i.elementType,c=o._init;if(o=c(o._payload),i.type=o,typeof o=="function")zc(o)?(t=dr(o,t),i.tag=1,i=Ag(null,i,o,t,s)):(i.tag=0,i=bf(null,i,o,t,s));else{if(o!=null){if(c=o.$$typeof,c===U){i.tag=11,i=yg(null,i,o,t,s);break e}else if(c===z){i.tag=14,i=Sg(null,i,o,t,s);break e}}throw i=ve(o)||o,Error(r(306,i,""))}}return i;case 0:return bf(t,i,i.type,i.pendingProps,s);case 1:return o=i.type,c=dr(o,i.pendingProps),Ag(t,i,o,c,s);case 3:e:{if(be(i,i.stateNode.containerInfo),t===null)throw Error(r(387));o=i.pendingProps;var d=i.memoizedState;c=d.element,$c(t,i),oo(i,o,null,s);var E=i.memoizedState;if(o=E.cache,Ea(i,mn,o),o!==d.cache&&jc(i,[mn],s,!0),so(),o=E.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Rg(t,i,o,s);break e}else if(o!==c){c=si(Error(r(424)),i),$s(c),i=Rg(t,i,o,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=Ei(t.firstChild),Bn=i,Rt=!0,or=null,Ni=!0,s=ug(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Js(),o===c){i=$i(t,i,s);break e}An(t,i,o,s)}i=i.child}return i;case 26:return Xl(t,i),t===null?(s=Pv(i.type,null,i.pendingProps,null))?i.memoizedState=s:Rt||(s=i.type,t=i.pendingProps,o=ru(Q.current).createElement(s),o[pn]=i,o[Jt]=t,Cn(o,s,t),ln(o),i.stateNode=o):i.memoizedState=Pv(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return He(i),t===null&&Rt&&(o=i.stateNode=Nv(i.type,i.pendingProps,Q.current),Bn=i,Ni=!0,c=en,Fa(i.type)?(fh=c,en=Ei(o.firstChild)):en=c),An(t,i,i.pendingProps.children,s),Xl(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Rt&&((c=o=en)&&(o=gS(o,i.type,i.pendingProps,Ni),o!==null?(i.stateNode=o,Bn=i,en=Ei(o.firstChild),Ni=!1,c=!0):c=!1),c||lr(i)),He(i),c=i.type,d=i.pendingProps,E=t!==null?t.memoizedProps:null,o=d.children,oh(c,d)?o=null:E!==null&&oh(c,E)&&(i.flags|=32),i.memoizedState!==null&&(c=sf(t,i,Oy,null,null,s),Do._currentValue=c),Xl(t,i),An(t,i,o,s),i.child;case 6:return t===null&&Rt&&((t=s=en)&&(s=vS(s,i.pendingProps,Ni),s!==null?(i.stateNode=s,Bn=i,en=null,t=!0):t=!1),t||lr(i)),null;case 13:return Cg(t,i,s);case 4:return be(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=ts(i,null,o,s):An(t,i,o,s),i.child;case 11:return yg(t,i,i.type,i.pendingProps,s);case 7:return An(t,i,i.pendingProps,s),i.child;case 8:return An(t,i,i.pendingProps.children,s),i.child;case 12:return An(t,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,Ea(i,i.type,o.value),An(t,i,o.children,s),i.child;case 9:return c=i.type._context,o=i.pendingProps.children,cr(i),c=Un(c),o=o(c),i.flags|=1,An(t,i,o,s),i.child;case 14:return Sg(t,i,i.type,i.pendingProps,s);case 15:return Eg(t,i,i.type,i.pendingProps,s);case 19:return Dg(t,i,s);case 31:return o=i.pendingProps,s=i.mode,o={mode:o.mode,children:o.children},t===null?(s=Wl(o,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=qi(t.child,o),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Mg(t,i,s);case 24:return cr(i),o=Un(mn),t===null?(c=Kc(),c===null&&(c=Vt,d=Yc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=s),c=d),i.memoizedState={parent:o,cache:c},Jc(i),Ea(i,mn,c)):((t.lanes&s)!==0&&($c(t,i),oo(i,null,null,s),so()),c=t.memoizedState,d=i.memoizedState,c.parent!==o?(c={parent:o,cache:o},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),Ea(i,mn,o)):(o=d.cache,Ea(i,mn,o),o!==c.cache&&jc(i,[mn],s,!0))),An(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function ea(t){t.flags|=4}function Ng(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Hv(i)){if(i=ci.current,i!==null&&((St&4194048)===St?Li!==null:(St&62914560)!==St&&(St&536870912)===0||i!==Li))throw ao=Qc,mm;t.flags|=8192}}function ql(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ce():536870912,t.lanes|=i,rs|=i)}function mo(t,i){if(!Rt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,o=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=s,i}function ky(t,i,s){var o=i.pendingProps;switch(kc(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(i),null;case 1:return Kt(i),null;case 3:return s=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Ki(mn),qe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Qs(i)?ea(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,cm())),Kt(i),null;case 26:return s=i.memoizedState,t===null?(ea(i),s!==null?(Kt(i),Ng(i,s)):(Kt(i),i.flags&=-16777217)):s?s!==t.memoizedState?(ea(i),Kt(i),Ng(i,s)):(Kt(i),i.flags&=-16777217):(t.memoizedProps!==o&&ea(i),Kt(i),i.flags&=-16777217),null;case 27:je(i),s=Q.current;var c=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==o&&ea(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return Kt(i),null}t=Me.current,Qs(i)?lm(i):(t=Nv(c,o,s),i.stateNode=t,ea(i))}return Kt(i),null;case 5:if(je(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&ea(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return Kt(i),null}if(t=Me.current,Qs(i))lm(i);else{switch(c=ru(Q.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(s,{is:o.is}):c.createElement(s)}}t[pn]=i,t[Jt]=o;e:for(c=i.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===i)break e;for(;c.sibling===null;){if(c.return===null||c.return===i)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}i.stateNode=t;e:switch(Cn(t,s,o),s){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ea(i)}}return Kt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&ea(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(r(166));if(t=Q.current,Qs(i)){if(t=i.stateNode,s=i.memoizedProps,o=null,c=Bn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[pn]=i,t=!!(t.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||Tv(t.nodeValue,s)),t||lr(i)}else t=ru(t).createTextNode(o),t[pn]=i,i.stateNode=t}return Kt(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Qs(i),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[pn]=i}else Js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Kt(i),c=!1}else c=cm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return i.flags&256?(Ji(i),i):(Ji(i),null)}if(Ji(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=o!==null,t=t!==null&&t.memoizedState!==null,s){o=i.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),ql(i,i.updateQueue),Kt(i),null;case 4:return qe(),t===null&&nh(i.stateNode.containerInfo),Kt(i),null;case 10:return Ki(i.type),Kt(i),null;case 19:if(se(gn),c=i.memoizedState,c===null)return Kt(i),null;if(o=(i.flags&128)!==0,d=c.rendering,d===null)if(o)mo(c,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Gl(t),d!==null){for(i.flags|=128,mo(c,!1),t=d.updateQueue,i.updateQueue=t,ql(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)sm(s,t),s=s.sibling;return le(gn,gn.current&1|2),i.child}t=t.sibling}c.tail!==null&&Fe()>Zl&&(i.flags|=128,o=!0,mo(c,!1),i.lanes=4194304)}else{if(!o)if(t=Gl(d),t!==null){if(i.flags|=128,o=!0,t=t.updateQueue,i.updateQueue=t,ql(i,t),mo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Rt)return Kt(i),null}else 2*Fe()-c.renderingStartTime>Zl&&s!==536870912&&(i.flags|=128,o=!0,mo(c,!1),i.lanes=4194304);c.isBackwards?(d.sibling=i.child,i.child=d):(t=c.last,t!==null?t.sibling=d:i.child=d,c.last=d)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=Fe(),i.sibling=null,t=gn.current,le(gn,o?t&1|2:t&1),i):(Kt(i),null);case 22:case 23:return Ji(i),af(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(Kt(i),i.subtreeFlags&6&&(i.flags|=8192)):Kt(i),s=i.updateQueue,s!==null&&ql(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),t!==null&&se(fr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ki(mn),Kt(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function Xy(t,i){switch(kc(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ki(mn),qe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return je(i),null;case 13:if(Ji(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Js()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return se(gn),null;case 4:return qe(),null;case 10:return Ki(i.type),null;case 22:case 23:return Ji(i),af(),t!==null&&se(fr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ki(mn),null;case 25:return null;default:return null}}function Lg(t,i){switch(kc(i),i.tag){case 3:Ki(mn),qe();break;case 26:case 27:case 5:je(i);break;case 4:qe();break;case 13:Ji(i);break;case 19:se(gn);break;case 10:Ki(i.type);break;case 22:case 23:Ji(i),af(),t!==null&&se(fr);break;case 24:Ki(mn)}}function go(t,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var c=o.next;s=c;do{if((s.tag&t)===t){o=void 0;var d=s.create,E=s.inst;o=d(),E.destroy=o}s=s.next}while(s!==c)}}catch(R){Ht(i,i.return,R)}}function wa(t,i,s){try{var o=i.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&t)===t){var E=o.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,c=i;var F=s,ee=R;try{ee()}catch(ge){Ht(c,F,ge)}}}o=o.next}while(o!==d)}}catch(ge){Ht(i,i.return,ge)}}function Og(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Sm(i,s)}catch(o){Ht(t,t.return,o)}}}function Pg(t,i,s){s.props=dr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(o){Ht(t,i,o)}}function vo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof s=="function"?t.refCleanup=s(o):s.current=o}}catch(c){Ht(t,i,c)}}function Oi(t,i){var s=t.ref,o=t.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(c){Ht(t,i,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(c){Ht(t,i,c)}else s.current=null}function Ig(t){var i=t.type,s=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break e;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(c){Ht(t,t.return,c)}}function Nf(t,i,s){try{var o=t.stateNode;fS(o,t.type,s,i),o[Jt]=i}catch(c){Ht(t,t.return,c)}}function Fg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function Lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Of(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=au));else if(o!==4&&(o===27&&Fa(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Of(t,i,s),t=t.sibling;t!==null;)Of(t,i,s),t=t.sibling}function jl(t,i,s){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(o!==4&&(o===27&&Fa(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(jl(t,i,s),t=t.sibling;t!==null;)jl(t,i,s),t=t.sibling}function Bg(t){var i=t.stateNode,s=t.memoizedProps;try{for(var o=t.type,c=i.attributes;c.length;)i.removeAttributeNode(c[0]);Cn(i,o,s),i[pn]=t,i[Jt]=s}catch(d){Ht(t,t.return,d)}}var ta=!1,an=!1,Pf=!1,zg=typeof WeakSet=="function"?WeakSet:Set,En=null;function Wy(t,i){if(t=t.containerInfo,rh=fu,t=Kp(t),Nc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break e}var E=0,R=-1,F=-1,ee=0,ge=0,Se=t,ie=null;t:for(;;){for(var ae;Se!==s||c!==0&&Se.nodeType!==3||(R=E+c),Se!==d||o!==0&&Se.nodeType!==3||(F=E+o),Se.nodeType===3&&(E+=Se.nodeValue.length),(ae=Se.firstChild)!==null;)ie=Se,Se=ae;for(;;){if(Se===t)break t;if(ie===s&&++ee===c&&(R=E),ie===d&&++ge===o&&(F=E),(ae=Se.nextSibling)!==null)break;Se=ie,ie=Se.parentNode}Se=ae}s=R===-1||F===-1?null:{start:R,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(sh={focusedElem:t,selectionRange:s},fu=!1,En=i;En!==null;)if(i=En,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,En=t;else for(;En!==null;){switch(i=En,d=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,s=i,c=d.memoizedProps,d=d.memoizedState,o=s.stateNode;try{var rt=dr(s.type,c,s.elementType===s.type);t=o.getSnapshotBeforeUpdate(rt,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Ht(s,s.return,tt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)uh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":uh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,En=t;break}En=i.return}}function Hg(t,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:Da(t,s),o&4&&go(5,s);break;case 1:if(Da(t,s),o&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(E){Ht(s,s.return,E)}else{var c=dr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(c,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Ht(s,s.return,E)}}o&64&&Og(s),o&512&&vo(s,s.return);break;case 3:if(Da(t,s),o&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Sm(t,i)}catch(E){Ht(s,s.return,E)}}break;case 27:i===null&&o&4&&Bg(s);case 26:case 5:Da(t,s),i===null&&o&4&&Ig(s),o&512&&vo(s,s.return);break;case 12:Da(t,s);break;case 13:Da(t,s),o&4&&kg(t,s),o&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=eS.bind(null,s),_S(t,s))));break;case 22:if(o=s.memoizedState!==null||ta,!o){i=i!==null&&i.memoizedState!==null||an,c=ta;var d=an;ta=o,(an=i)&&!d?Ua(t,s,(s.subtreeFlags&8772)!==0):Da(t,s),ta=c,an=d}break;case 30:break;default:Da(t,s)}}function Gg(t){var i=t.alternate;i!==null&&(t.alternate=null,Gg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Ir(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,Wn=!1;function na(t,i,s){for(s=s.child;s!==null;)Vg(t,i,s),s=s.sibling}function Vg(t,i,s){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(pe,s)}catch{}switch(s.tag){case 26:an||Oi(s,i),na(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:an||Oi(s,i);var o=jt,c=Wn;Fa(s.type)&&(jt=s.stateNode,Wn=!1),na(t,i,s),Ao(s.stateNode),jt=o,Wn=c;break;case 5:an||Oi(s,i);case 6:if(o=jt,c=Wn,jt=null,na(t,i,s),jt=o,Wn=c,jt!==null)if(Wn)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(s.stateNode)}catch(d){Ht(s,i,d)}else try{jt.removeChild(s.stateNode)}catch(d){Ht(s,i,d)}break;case 18:jt!==null&&(Wn?(t=jt,Dv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Oo(t)):Dv(jt,s.stateNode));break;case 4:o=jt,c=Wn,jt=s.stateNode.containerInfo,Wn=!0,na(t,i,s),jt=o,Wn=c;break;case 0:case 11:case 14:case 15:an||wa(2,s,i),an||wa(4,s,i),na(t,i,s);break;case 1:an||(Oi(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Pg(s,i,o)),na(t,i,s);break;case 21:na(t,i,s);break;case 22:an=(o=an)||s.memoizedState!==null,na(t,i,s),an=o;break;default:na(t,i,s)}}function kg(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Oo(t)}catch(s){Ht(i,i.return,s)}}function qy(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new zg),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new zg),i;default:throw Error(r(435,t.tag))}}function If(t,i){var s=qy(t);i.forEach(function(o){var c=tS.bind(null,t,o);s.has(o)||(s.add(o),o.then(c,c))})}function $n(t,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var c=s[o],d=t,E=i,R=E;e:for(;R!==null;){switch(R.tag){case 27:if(Fa(R.type)){jt=R.stateNode,Wn=!1;break e}break;case 5:jt=R.stateNode,Wn=!1;break e;case 3:case 4:jt=R.stateNode.containerInfo,Wn=!0;break e}R=R.return}if(jt===null)throw Error(r(160));Vg(d,E,c),jt=null,Wn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Xg(i,t),i=i.sibling}var Si=null;function Xg(t,i){var s=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$n(i,t),ei(t),o&4&&(wa(3,t,t.return),go(3,t),wa(5,t,t.return));break;case 1:$n(i,t),ei(t),o&512&&(an||s===null||Oi(s,s.return)),o&64&&ta&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var c=Si;if($n(i,t),ei(t),o&512&&(an||s===null||Oi(s,s.return)),o&4){var d=s!==null?s.memoizedState:null;if(o=t.memoizedState,s===null)if(o===null)if(t.stateNode===null){e:{o=t.type,s=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Ui]||d[pn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),Cn(d,o,s),d[pn]=t,ln(d),o=d;break e;case"link":var E=Bv("link","href",c).get(o+(s.href||""));if(E){for(var R=0;R<E.length;R++)if(d=E[R],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(R,1);break t}}d=c.createElement(o),Cn(d,o,s),c.head.appendChild(d);break;case"meta":if(E=Bv("meta","content",c).get(o+(s.content||""))){for(R=0;R<E.length;R++)if(d=E[R],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(R,1);break t}}d=c.createElement(o),Cn(d,o,s),c.head.appendChild(d);break;default:throw Error(r(468,o))}d[pn]=t,ln(d),o=d}t.stateNode=o}else zv(c,t.type,t.stateNode);else t.stateNode=Fv(c,o,t.memoizedProps);else d!==o?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,o===null?zv(c,t.type,t.stateNode):Fv(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Nf(t,t.memoizedProps,s.memoizedProps)}break;case 27:$n(i,t),ei(t),o&512&&(an||s===null||Oi(s,s.return)),s!==null&&o&4&&Nf(t,t.memoizedProps,s.memoizedProps);break;case 5:if($n(i,t),ei(t),o&512&&(an||s===null||Oi(s,s.return)),t.flags&32){c=t.stateNode;try{Vn(c,"")}catch(ae){Ht(t,t.return,ae)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,Nf(t,c,s!==null?s.memoizedProps:c)),o&1024&&(Pf=!0);break;case 6:if($n(i,t),ei(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,s=t.stateNode;try{s.nodeValue=o}catch(ae){Ht(t,t.return,ae)}}break;case 3:if(lu=null,c=Si,Si=su(i.containerInfo),$n(i,t),Si=c,ei(t),o&4&&s!==null&&s.memoizedState.isDehydrated)try{Oo(i.containerInfo)}catch(ae){Ht(t,t.return,ae)}Pf&&(Pf=!1,Wg(t));break;case 4:o=Si,Si=su(t.stateNode.containerInfo),$n(i,t),ei(t),Si=o;break;case 12:$n(i,t),ei(t);break;case 13:$n(i,t),ei(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Vf=Fe()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,If(t,o)));break;case 22:c=t.memoizedState!==null;var F=s!==null&&s.memoizedState!==null,ee=ta,ge=an;if(ta=ee||c,an=ge||F,$n(i,t),an=ge,ta=ee,ei(t),o&8192)e:for(i=t.stateNode,i._visibility=c?i._visibility&-2:i._visibility|1,c&&(s===null||F||ta||an||pr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){F=s=i;try{if(d=F.stateNode,c)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{R=F.stateNode;var Se=F.memoizedProps.style,ie=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(ae){Ht(F,F.return,ae)}}}else if(i.tag===6){if(s===null){F=i;try{F.stateNode.nodeValue=c?"":F.memoizedProps}catch(ae){Ht(F,F.return,ae)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,If(t,s))));break;case 19:$n(i,t),ei(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,If(t,o)));break;case 30:break;case 21:break;default:$n(i,t),ei(t)}}function ei(t){var i=t.flags;if(i&2){try{for(var s,o=t.return;o!==null;){if(Fg(o)){s=o;break}o=o.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var c=s.stateNode,d=Lf(t);jl(t,d,c);break;case 5:var E=s.stateNode;s.flags&32&&(Vn(E,""),s.flags&=-33);var R=Lf(t);jl(t,R,E);break;case 3:case 4:var F=s.stateNode.containerInfo,ee=Lf(t);Of(t,ee,F);break;default:throw Error(r(161))}}catch(ge){Ht(t,t.return,ge)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Wg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;Wg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Da(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Hg(t,i.alternate,i),i=i.sibling}function pr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:wa(4,i,i.return),pr(i);break;case 1:Oi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Pg(i,i.return,s),pr(i);break;case 27:Ao(i.stateNode);case 26:case 5:Oi(i,i.return),pr(i);break;case 22:i.memoizedState===null&&pr(i);break;case 30:pr(i);break;default:pr(i)}t=t.sibling}}function Ua(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,c=t,d=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:Ua(c,d,s),go(4,d);break;case 1:if(Ua(c,d,s),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ee){Ht(o,o.return,ee)}if(o=d,c=o.updateQueue,c!==null){var R=o.stateNode;try{var F=c.shared.hiddenCallbacks;if(F!==null)for(c.shared.hiddenCallbacks=null,c=0;c<F.length;c++)ym(F[c],R)}catch(ee){Ht(o,o.return,ee)}}s&&E&64&&Og(d),vo(d,d.return);break;case 27:Bg(d);case 26:case 5:Ua(c,d,s),s&&o===null&&E&4&&Ig(d),vo(d,d.return);break;case 12:Ua(c,d,s);break;case 13:Ua(c,d,s),s&&E&4&&kg(c,d);break;case 22:d.memoizedState===null&&Ua(c,d,s),vo(d,d.return);break;case 30:break;default:Ua(c,d,s)}i=i.sibling}}function Ff(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&to(s))}function Bf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&to(t))}function Pi(t,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)qg(t,i,s,o),i=i.sibling}function qg(t,i,s,o){var c=i.flags;switch(i.tag){case 0:case 11:case 15:Pi(t,i,s,o),c&2048&&go(9,i);break;case 1:Pi(t,i,s,o);break;case 3:Pi(t,i,s,o),c&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&to(t)));break;case 12:if(c&2048){Pi(t,i,s,o),t=i.stateNode;try{var d=i.memoizedProps,E=d.id,R=d.onPostCommit;typeof R=="function"&&R(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Ht(i,i.return,F)}}else Pi(t,i,s,o);break;case 13:Pi(t,i,s,o);break;case 23:break;case 22:d=i.stateNode,E=i.alternate,i.memoizedState!==null?d._visibility&2?Pi(t,i,s,o):_o(t,i):d._visibility&2?Pi(t,i,s,o):(d._visibility|=2,ns(t,i,s,o,(i.subtreeFlags&10256)!==0)),c&2048&&Ff(E,i);break;case 24:Pi(t,i,s,o),c&2048&&Bf(i.alternate,i);break;default:Pi(t,i,s,o)}}function ns(t,i,s,o,c){for(c=c&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=t,E=i,R=s,F=o,ee=E.flags;switch(E.tag){case 0:case 11:case 15:ns(d,E,R,F,c),go(8,E);break;case 23:break;case 22:var ge=E.stateNode;E.memoizedState!==null?ge._visibility&2?ns(d,E,R,F,c):_o(d,E):(ge._visibility|=2,ns(d,E,R,F,c)),c&&ee&2048&&Ff(E.alternate,E);break;case 24:ns(d,E,R,F,c),c&&ee&2048&&Bf(E.alternate,E);break;default:ns(d,E,R,F,c)}i=i.sibling}}function _o(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,o=i,c=o.flags;switch(o.tag){case 22:_o(s,o),c&2048&&Ff(o.alternate,o);break;case 24:_o(s,o),c&2048&&Bf(o.alternate,o);break;default:_o(s,o)}i=i.sibling}}var xo=8192;function is(t){if(t.subtreeFlags&xo)for(t=t.child;t!==null;)jg(t),t=t.sibling}function jg(t){switch(t.tag){case 26:is(t),t.flags&xo&&t.memoizedState!==null&&US(Si,t.memoizedState,t.memoizedProps);break;case 5:is(t);break;case 3:case 4:var i=Si;Si=su(t.stateNode.containerInfo),is(t),Si=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=xo,xo=16777216,is(t),xo=i):is(t));break;default:is(t)}}function Yg(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function yo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];En=o,Kg(o,t)}Yg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zg(t),t=t.sibling}function Zg(t){switch(t.tag){case 0:case 11:case 15:yo(t),t.flags&2048&&wa(9,t,t.return);break;case 3:yo(t);break;case 12:yo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Yl(t)):yo(t);break;default:yo(t)}}function Yl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];En=o,Kg(o,t)}Yg(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:wa(8,i,i.return),Yl(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Yl(i));break;default:Yl(i)}t=t.sibling}}function Kg(t,i){for(;En!==null;){var s=En;switch(s.tag){case 0:case 11:case 15:wa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:to(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,En=o;else e:for(s=t;En!==null;){o=En;var c=o.sibling,d=o.return;if(Gg(o),o===s){En=null;break e}if(c!==null){c.return=d,En=c;break e}En=d}}}var jy={getCacheForType:function(t){var i=Un(mn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},Yy=typeof WeakMap=="function"?WeakMap:Map,wt=0,Vt=null,_t=null,St=0,Dt=0,ti=null,Na=!1,as=!1,zf=!1,ia=0,tn=0,La=0,mr=0,Hf=0,fi=0,rs=0,So=null,qn=null,Gf=!1,Vf=0,Zl=1/0,Kl=null,Oa=null,Rn=0,Pa=null,ss=null,os=0,kf=0,Xf=null,Qg=null,Eo=0,Wf=null;function ni(){if((wt&2)!==0&&St!==0)return St&-St;if(I.T!==null){var t=Yr;return t!==0?t:Jf()}return Et()}function Jg(){fi===0&&(fi=(St&536870912)===0||Rt?X():536870912);var t=ci.current;return t!==null&&(t.flags|=32),fi}function ii(t,i,s){(t===Vt&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)&&(ls(t,0),Ia(t,St,fi,!1)),ze(t,s),((wt&2)===0||t!==Vt)&&(t===Vt&&((wt&2)===0&&(mr|=s),tn===4&&Ia(t,St,fi,!1)),Ii(t))}function $g(t,i,s){if((wt&6)!==0)throw Error(r(327));var o=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Ne(t,i),c=o?Qy(t,i):Yf(t,i,!0),d=o;do{if(c===0){as&&!o&&Ia(t,i,0,!1);break}else{if(s=t.current.alternate,d&&!Zy(s)){c=Yf(t,i,!1),d=!1;continue}if(c===2){if(d=i,t.errorRecoveryDisabledLanes&d)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var R=t;c=So;var F=R.current.memoizedState.isDehydrated;if(F&&(ls(R,E).flags|=256),E=Yf(R,E,!1),E!==2){if(zf&&!F){R.errorRecoveryDisabledLanes|=d,mr|=d,c=4;break e}d=qn,qn=c,d!==null&&(qn===null?qn=d:qn.push.apply(qn,d))}c=E}if(d=!1,c!==2)continue}}if(c===1){ls(t,0),Ia(t,i,0,!0);break}e:{switch(o=t,d=c,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Ia(o,i,fi,!Na);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(c=Vf+300-Fe(),10<c)){if(Ia(o,i,fi,!Na),We(o,0,!0)!==0)break e;o.timeoutHandle=Cv(ev.bind(null,o,s,qn,Kl,Gf,i,fi,mr,rs,Na,d,2,-0,0),c);break e}ev(o,s,qn,Kl,Gf,i,fi,mr,rs,Na,d,0,-0,0)}}break}while(!0);Ii(t)}function ev(t,i,s,o,c,d,E,R,F,ee,ge,Se,ie,ae){if(t.timeoutHandle=-1,Se=i.subtreeFlags,(Se&8192||(Se&16785408)===16785408)&&(wo={stylesheets:null,count:0,unsuspend:DS},jg(i),Se=NS(),Se!==null)){t.cancelPendingCommit=Se(ov.bind(null,t,i,d,s,o,c,E,R,F,ge,1,ie,ae)),Ia(t,d,E,!ee);return}ov(t,i,d,s,o,c,E,R,F)}function Zy(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var c=s[o],d=c.getSnapshot;c=c.value;try{if(!Qn(d(),c))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ia(t,i,s,o){i&=~Hf,i&=~mr,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var c=i;0<c;){var d=31-Be(c),E=1<<d;o[d]=-1,c&=~E}s!==0&&Ee(t,s,i)}function Ql(){return(wt&6)===0?(Mo(0),!1):!0}function qf(){if(_t!==null){if(Dt===0)var t=_t.return;else t=_t,Zi=ur=null,uf(t),es=null,ho=0,t=_t;for(;t!==null;)Lg(t.alternate,t),t=t.return;_t=null}}function ls(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,dS(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),qf(),Vt=t,_t=s=qi(t.current,null),St=i,Dt=0,ti=null,Na=!1,as=Ne(t,i),zf=!1,rs=fi=Hf=mr=La=tn=0,qn=So=null,Gf=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var c=31-Be(o),d=1<<c;i|=t[c],o&=~d}return ia=i,xl(),s}function tv(t,i){mt=null,I.H=Bl,i===io||i===Cl?(i=_m(),Dt=3):i===mm?(i=_m(),Dt=4):Dt=i===xg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ti=i,_t===null&&(tn=1,kl(t,si(i,t.current)))}function nv(){var t=I.H;return I.H=Bl,t===null?Bl:t}function iv(){var t=I.A;return I.A=jy,t}function jf(){tn=4,Na||(St&4194048)!==St&&ci.current!==null||(as=!0),(La&134217727)===0&&(mr&134217727)===0||Vt===null||Ia(Vt,St,fi,!1)}function Yf(t,i,s){var o=wt;wt|=2;var c=nv(),d=iv();(Vt!==t||St!==i)&&(Kl=null,ls(t,i)),i=!1;var E=tn;e:do try{if(Dt!==0&&_t!==null){var R=_t,F=ti;switch(Dt){case 8:qf(),E=6;break e;case 3:case 2:case 9:case 6:ci.current===null&&(i=!0);var ee=Dt;if(Dt=0,ti=null,us(t,R,F,ee),s&&as){E=0;break e}break;default:ee=Dt,Dt=0,ti=null,us(t,R,F,ee)}}Ky(),E=tn;break}catch(ge){tv(t,ge)}while(!0);return i&&t.shellSuspendCounter++,Zi=ur=null,wt=o,I.H=c,I.A=d,_t===null&&(Vt=null,St=0,xl()),E}function Ky(){for(;_t!==null;)av(_t)}function Qy(t,i){var s=wt;wt|=2;var o=nv(),c=iv();Vt!==t||St!==i?(Kl=null,Zl=Fe()+500,ls(t,i)):as=Ne(t,i);e:do try{if(Dt!==0&&_t!==null){i=_t;var d=ti;t:switch(Dt){case 1:Dt=0,ti=null,us(t,i,d,1);break;case 2:case 9:if(gm(d)){Dt=0,ti=null,rv(i);break}i=function(){Dt!==2&&Dt!==9||Vt!==t||(Dt=7),Ii(t)},d.then(i,i);break e;case 3:Dt=7;break e;case 4:Dt=5;break e;case 7:gm(d)?(Dt=0,ti=null,rv(i)):(Dt=0,ti=null,us(t,i,d,7));break;case 5:var E=null;switch(_t.tag){case 26:E=_t.memoizedState;case 5:case 27:var R=_t;if(!E||Hv(E)){Dt=0,ti=null;var F=R.sibling;if(F!==null)_t=F;else{var ee=R.return;ee!==null?(_t=ee,Jl(ee)):_t=null}break t}}Dt=0,ti=null,us(t,i,d,5);break;case 6:Dt=0,ti=null,us(t,i,d,6);break;case 8:qf(),tn=6;break e;default:throw Error(r(462))}}Jy();break}catch(ge){tv(t,ge)}while(!0);return Zi=ur=null,I.H=o,I.A=c,wt=s,_t!==null?0:(Vt=null,St=0,xl(),tn)}function Jy(){for(;_t!==null&&!ot();)av(_t)}function av(t){var i=Ug(t.alternate,t,ia);t.memoizedProps=t.pendingProps,i===null?Jl(t):_t=i}function rv(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Tg(s,i,i.pendingProps,i.type,void 0,St);break;case 11:i=Tg(s,i,i.pendingProps,i.type.render,i.ref,St);break;case 5:uf(i);default:Lg(s,i),i=_t=sm(i,ia),i=Ug(s,i,ia)}t.memoizedProps=t.pendingProps,i===null?Jl(t):_t=i}function us(t,i,s,o){Zi=ur=null,uf(i),es=null,ho=0;var c=i.return;try{if(Gy(t,c,i,s,St)){tn=1,kl(t,si(s,t.current)),_t=null;return}}catch(d){if(c!==null)throw _t=c,d;tn=1,kl(t,si(s,t.current)),_t=null;return}i.flags&32768?(Rt||o===1?t=!0:as||(St&536870912)!==0?t=!1:(Na=t=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),sv(i,t)):Jl(i)}function Jl(t){var i=t;do{if((i.flags&32768)!==0){sv(i,Na);return}t=i.return;var s=ky(i.alternate,i,ia);if(s!==null){_t=s;return}if(i=i.sibling,i!==null){_t=i;return}_t=i=t}while(i!==null);tn===0&&(tn=5)}function sv(t,i){do{var s=Xy(t.alternate,t);if(s!==null){s.flags&=32767,_t=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){_t=t;return}_t=t=s}while(t!==null);tn=6,_t=null}function ov(t,i,s,o,c,d,E,R,F){t.cancelPendingCommit=null;do $l();while(Rn!==0);if((wt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=Fc,Ae(t,s,d,E,R,F),t===Vt&&(_t=Vt=null,St=0),ss=i,Pa=t,os=s,kf=d,Xf=c,Qg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,nS(Yt,function(){return hv(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,c=W.p,W.p=2,E=wt,wt|=4;try{Wy(t,i,s)}finally{wt=E,W.p=c,I.T=o}}Rn=1,lv(),uv(),cv()}}function lv(){if(Rn===1){Rn=0;var t=Pa,i=ss,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var o=W.p;W.p=2;var c=wt;wt|=4;try{Xg(i,t);var d=sh,E=Kp(t.containerInfo),R=d.focusedElem,F=d.selectionRange;if(E!==R&&R&&R.ownerDocument&&Zp(R.ownerDocument.documentElement,R)){if(F!==null&&Nc(R)){var ee=F.start,ge=F.end;if(ge===void 0&&(ge=ee),"selectionStart"in R)R.selectionStart=ee,R.selectionEnd=Math.min(ge,R.value.length);else{var Se=R.ownerDocument||document,ie=Se&&Se.defaultView||window;if(ie.getSelection){var ae=ie.getSelection(),rt=R.textContent.length,tt=Math.min(F.start,rt),Pt=F.end===void 0?tt:Math.min(F.end,rt);!ae.extend&&tt>Pt&&(E=Pt,Pt=tt,tt=E);var Z=Yp(R,tt),k=Yp(R,Pt);if(Z&&k&&(ae.rangeCount!==1||ae.anchorNode!==Z.node||ae.anchorOffset!==Z.offset||ae.focusNode!==k.node||ae.focusOffset!==k.offset)){var $=Se.createRange();$.setStart(Z.node,Z.offset),ae.removeAllRanges(),tt>Pt?(ae.addRange($),ae.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ae.addRange($))}}}}for(Se=[],ae=R;ae=ae.parentNode;)ae.nodeType===1&&Se.push({element:ae,left:ae.scrollLeft,top:ae.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var _e=Se[R];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}fu=!!rh,sh=rh=null}finally{wt=c,W.p=o,I.T=s}}t.current=i,Rn=2}}function uv(){if(Rn===2){Rn=0;var t=Pa,i=ss,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var o=W.p;W.p=2;var c=wt;wt|=4;try{Hg(t,i.alternate,i)}finally{wt=c,W.p=o,I.T=s}}Rn=3}}function cv(){if(Rn===4||Rn===3){Rn=0,at();var t=Pa,i=ss,s=os,o=Qg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Rn=5:(Rn=0,ss=Pa=null,fv(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Oa=null),Ct(s),i=i.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(pe,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=I.T,c=W.p,W.p=2,I.T=null;try{for(var d=t.onRecoverableError,E=0;E<o.length;E++){var R=o[E];d(R.value,{componentStack:R.stack})}}finally{I.T=i,W.p=c}}(os&3)!==0&&$l(),Ii(t),c=t.pendingLanes,(s&4194090)!==0&&(c&42)!==0?t===Wf?Eo++:(Eo=0,Wf=t):Eo=0,Mo(0)}}function fv(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,to(i)))}function $l(t){return lv(),uv(),cv(),hv()}function hv(){if(Rn!==5)return!1;var t=Pa,i=kf;kf=0;var s=Ct(os),o=I.T,c=W.p;try{W.p=32>s?32:s,I.T=null,s=Xf,Xf=null;var d=Pa,E=os;if(Rn=0,ss=Pa=null,os=0,(wt&6)!==0)throw Error(r(331));var R=wt;if(wt|=4,Zg(d.current),qg(d,d.current,E,s),wt=R,Mo(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(pe,d)}catch{}return!0}finally{W.p=c,I.T=o,fv(t,i)}}function dv(t,i,s){i=si(s,i),i=Mf(t.stateNode,i,2),t=Ta(t,i,2),t!==null&&(ze(t,2),Ii(t))}function Ht(t,i,s){if(t.tag===3)dv(t,t,s);else for(;i!==null;){if(i.tag===3){dv(i,t,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Oa===null||!Oa.has(o))){t=si(s,t),s=vg(2),o=Ta(i,s,2),o!==null&&(_g(s,o,i,t),ze(o,2),Ii(o));break}}i=i.return}}function Zf(t,i,s){var o=t.pingCache;if(o===null){o=t.pingCache=new Yy;var c=new Set;o.set(i,c)}else c=o.get(i),c===void 0&&(c=new Set,o.set(i,c));c.has(s)||(zf=!0,c.add(s),t=$y.bind(null,t,i,s),i.then(t,t))}function $y(t,i,s){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Vt===t&&(St&s)===s&&(tn===4||tn===3&&(St&62914560)===St&&300>Fe()-Vf?(wt&2)===0&&ls(t,0):Hf|=s,rs===St&&(rs=0)),Ii(t)}function pv(t,i){i===0&&(i=Ce()),t=Xr(t,i),t!==null&&(ze(t,i),Ii(t))}function eS(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),pv(t,s)}function tS(t,i){var s=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(i),pv(t,s)}function nS(t,i){return B(t,i)}var eu=null,cs=null,Kf=!1,tu=!1,Qf=!1,gr=0;function Ii(t){t!==cs&&t.next===null&&(cs===null?eu=cs=t:cs=cs.next=t),tu=!0,Kf||(Kf=!0,aS())}function Mo(t,i){if(!Qf&&tu){Qf=!0;do for(var s=!1,o=eu;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var E=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Be(42|t)+1)-1,d&=c&~(E&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,_v(o,d))}else d=St,d=We(o,o===Vt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ne(o,d)||(s=!0,_v(o,d));o=o.next}while(s);Qf=!1}}function iS(){mv()}function mv(){tu=Kf=!1;var t=0;gr!==0&&(hS()&&(t=gr),gr=0);for(var i=Fe(),s=null,o=eu;o!==null;){var c=o.next,d=gv(o,i);d===0?(o.next=null,s===null?eu=c:s.next=c,c===null&&(cs=s)):(s=o,(t!==0||(d&3)!==0)&&(tu=!0)),o=c}Mo(t)}function gv(t,i){for(var s=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var E=31-Be(d),R=1<<E,F=c[E];F===-1?((R&s)===0||(R&o)!==0)&&(c[E]=ut(R,i)):F<=i&&(t.expiredLanes|=R),d&=~R}if(i=Vt,s=St,s=We(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,s===0||t===i&&(Dt===2||Dt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ut(o),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ne(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(o!==null&&Ut(o),Ct(s)){case 2:case 8:s=lt;break;case 32:s=Yt;break;case 268435456:s=O;break;default:s=Yt}return o=vv.bind(null,t),s=B(s,o),t.callbackPriority=i,t.callbackNode=s,i}return o!==null&&o!==null&&Ut(o),t.callbackPriority=2,t.callbackNode=null,2}function vv(t,i){if(Rn!==0&&Rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if($l()&&t.callbackNode!==s)return null;var o=St;return o=We(t,t===Vt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:($g(t,o,i),gv(t,Fe()),t.callbackNode!=null&&t.callbackNode===s?vv.bind(null,t):null)}function _v(t,i){if($l())return null;$g(t,i,!0)}function aS(){pS(function(){(wt&6)!==0?B(Xe,iS):mv()})}function Jf(){return gr===0&&(gr=X()),gr}function xv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:hl(""+t)}function yv(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function rS(t,i,s,o,c){if(i==="submit"&&s&&s.stateNode===c){var d=xv((c[Jt]||null).action),E=o.submitter;E&&(i=(i=E[Jt]||null)?xv(i.formAction):E.getAttribute("formAction"),i!==null&&(d=i,E=null));var R=new gl("action","action",null,o,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(gr!==0){var F=E?yv(c,E):new FormData(c);_f(s,{pending:!0,data:F,method:c.method,action:d},null,F)}}else typeof d=="function"&&(R.preventDefault(),F=E?yv(c,E):new FormData(c),_f(s,{pending:!0,data:F,method:c.method,action:d},d,F))},currentTarget:c}]})}}for(var $f=0;$f<Ic.length;$f++){var eh=Ic[$f],sS=eh.toLowerCase(),oS=eh[0].toUpperCase()+eh.slice(1);yi(sS,"on"+oS)}yi($p,"onAnimationEnd"),yi(em,"onAnimationIteration"),yi(tm,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(by,"onTransitionRun"),yi(Ty,"onTransitionStart"),yi(Ay,"onTransitionCancel"),yi(nm,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function Sv(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var o=t[s],c=o.event;o=o.listeners;e:{var d=void 0;if(i)for(var E=o.length-1;0<=E;E--){var R=o[E],F=R.instance,ee=R.currentTarget;if(R=R.listener,F!==d&&c.isPropagationStopped())break e;d=R,c.currentTarget=ee;try{d(c)}catch(ge){Vl(ge)}c.currentTarget=null,d=F}else for(E=0;E<o.length;E++){if(R=o[E],F=R.instance,ee=R.currentTarget,R=R.listener,F!==d&&c.isPropagationStopped())break e;d=R,c.currentTarget=ee;try{d(c)}catch(ge){Vl(ge)}c.currentTarget=null,d=F}}}}function xt(t,i){var s=i[Or];s===void 0&&(s=i[Or]=new Set);var o=t+"__bubble";s.has(o)||(Ev(i,t,2,!1),s.add(o))}function th(t,i,s){var o=0;i&&(o|=4),Ev(s,t,o,i)}var nu="_reactListening"+Math.random().toString(36).slice(2);function nh(t){if(!t[nu]){t[nu]=!0,cl.forEach(function(s){s!=="selectionchange"&&(lS.has(s)||th(s,!1,t),th(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[nu]||(i[nu]=!0,th("selectionchange",!1,i))}}function Ev(t,i,s,o){switch(qv(i)){case 2:var c=PS;break;case 8:c=IS;break;default:c=gh}s=c.bind(null,i,s,t),c=void 0,!Mc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function ih(t,i,s,o,c){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var R=o.stateNode.containerInfo;if(R===c)break;if(E===4)for(E=o.return;E!==null;){var F=E.tag;if((F===3||F===4)&&E.stateNode.containerInfo===c)return;E=E.return}for(;R!==null;){if(E=Xi(R),E===null)return;if(F=E.tag,F===5||F===6||F===26||F===27){o=d=E;continue e}R=R.parentNode}}o=o.return}wp(function(){var ee=d,ge=Sc(s),Se=[];e:{var ie=im.get(t);if(ie!==void 0){var ae=gl,rt=t;switch(t){case"keypress":if(pl(s)===0)break e;case"keydown":case"keyup":ae=ny;break;case"focusin":rt="focus",ae=Rc;break;case"focusout":rt="blur",ae=Rc;break;case"beforeblur":case"afterblur":ae=Rc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=Xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=ry;break;case $p:case em:case tm:ae=jx;break;case nm:ae=oy;break;case"scroll":case"scrollend":ae=Vx;break;case"wheel":ae=uy;break;case"copy":case"cut":case"paste":ae=Zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=Op;break;case"toggle":case"beforetoggle":ae=fy}var tt=(i&4)!==0,Pt=!tt&&(t==="scroll"||t==="scrollend"),Z=tt?ie!==null?ie+"Capture":null:ie;tt=[];for(var k=ee,$;k!==null;){var _e=k;if($=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||$===null||Z===null||(_e=Vs(k,Z),_e!=null&&tt.push(To(k,_e,$))),Pt)break;k=k.return}0<tt.length&&(ie=new ae(ie,rt,null,s,ge),Se.push({event:ie,listeners:tt}))}}if((i&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",ae=t==="mouseout"||t==="pointerout",ie&&s!==yc&&(rt=s.relatedTarget||s.fromElement)&&(Xi(rt)||rt[Di]))break e;if((ae||ie)&&(ie=ge.window===ge?ge:(ie=ge.ownerDocument)?ie.defaultView||ie.parentWindow:window,ae?(rt=s.relatedTarget||s.toElement,ae=ee,rt=rt?Xi(rt):null,rt!==null&&(Pt=u(rt),tt=rt.tag,rt!==Pt||tt!==5&&tt!==27&&tt!==6)&&(rt=null)):(ae=null,rt=ee),ae!==rt)){if(tt=Np,_e="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Op,_e="onPointerLeave",Z="onPointerEnter",k="pointer"),Pt=ae==null?ie:er(ae),$=rt==null?ie:er(rt),ie=new tt(_e,k+"leave",ae,s,ge),ie.target=Pt,ie.relatedTarget=$,_e=null,Xi(ge)===ee&&(tt=new tt(Z,k+"enter",rt,s,ge),tt.target=$,tt.relatedTarget=Pt,_e=tt),Pt=_e,ae&&rt)t:{for(tt=ae,Z=rt,k=0,$=tt;$;$=fs($))k++;for($=0,_e=Z;_e;_e=fs(_e))$++;for(;0<k-$;)tt=fs(tt),k--;for(;0<$-k;)Z=fs(Z),$--;for(;k--;){if(tt===Z||Z!==null&&tt===Z.alternate)break t;tt=fs(tt),Z=fs(Z)}tt=null}else tt=null;ae!==null&&Mv(Se,ie,ae,tt,!1),rt!==null&&Pt!==null&&Mv(Se,Pt,rt,tt,!0)}}e:{if(ie=ee?er(ee):window,ae=ie.nodeName&&ie.nodeName.toLowerCase(),ae==="select"||ae==="input"&&ie.type==="file")var Ve=Vp;else if(Hp(ie))if(kp)Ve=Sy;else{Ve=xy;var gt=_y}else ae=ie.nodeName,!ae||ae.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?ee&&xc(ee.elementType)&&(Ve=Vp):Ve=yy;if(Ve&&(Ve=Ve(t,ee))){Gp(Se,Ve,s,ge);break e}gt&&gt(t,ie,ee),t==="focusout"&&ee&&ie.type==="number"&&ee.memoizedProps.value!=null&&Dn(ie,"number",ie.value)}switch(gt=ee?er(ee):window,t){case"focusin":(Hp(gt)||gt.contentEditable==="true")&&(Gr=gt,Lc=ee,Ks=null);break;case"focusout":Ks=Lc=Gr=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,Qp(Se,s,ge);break;case"selectionchange":if(My)break;case"keydown":case"keyup":Qp(Se,s,ge)}var Qe;if(wc)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else Hr?Bp(t,s)&&(it="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(it="onCompositionStart");it&&(Pp&&s.locale!=="ko"&&(Hr||it!=="onCompositionStart"?it==="onCompositionEnd"&&Hr&&(Qe=Dp()):(Sa=ge,bc="value"in Sa?Sa.value:Sa.textContent,Hr=!0)),gt=iu(ee,it),0<gt.length&&(it=new Lp(it,t,null,s,ge),Se.push({event:it,listeners:gt}),Qe?it.data=Qe:(Qe=zp(s),Qe!==null&&(it.data=Qe)))),(Qe=dy?py(t,s):my(t,s))&&(it=iu(ee,"onBeforeInput"),0<it.length&&(gt=new Lp("onBeforeInput","beforeinput",null,s,ge),Se.push({event:gt,listeners:it}),gt.data=Qe)),rS(Se,t,ee,s,ge)}Sv(Se,i)})}function To(t,i,s){return{instance:t,listener:i,currentTarget:s}}function iu(t,i){for(var s=i+"Capture",o=[];t!==null;){var c=t,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=Vs(t,s),c!=null&&o.unshift(To(t,c,d)),c=Vs(t,i),c!=null&&o.push(To(t,c,d))),t.tag===3)return o;t=t.return}return[]}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Mv(t,i,s,o,c){for(var d=i._reactName,E=[];s!==null&&s!==o;){var R=s,F=R.alternate,ee=R.stateNode;if(R=R.tag,F!==null&&F===o)break;R!==5&&R!==26&&R!==27||ee===null||(F=ee,c?(ee=Vs(s,d),ee!=null&&E.unshift(To(s,ee,F))):c||(ee=Vs(s,d),ee!=null&&E.push(To(s,ee,F)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var uS=/\r\n?/g,cS=/\u0000|\uFFFD/g;function bv(t){return(typeof t=="string"?t:""+t).replace(uS,`
`).replace(cS,"")}function Tv(t,i){return i=bv(i),bv(t)===i}function au(){}function Ot(t,i,s,o,c,d){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Vn(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Vn(t,""+o);break;case"className":Ge(t,"class",o);break;case"tabIndex":Ge(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ge(t,s,o);break;case"style":Rp(t,o,d);break;case"data":if(i!=="object"){Ge(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=hl(""+o),t.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Ot(t,i,"name",c.name,c,null),Ot(t,i,"formEncType",c.formEncType,c,null),Ot(t,i,"formMethod",c.formMethod,c,null),Ot(t,i,"formTarget",c.formTarget,c,null)):(Ot(t,i,"encType",c.encType,c,null),Ot(t,i,"method",c.method,c,null),Ot(t,i,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(s);break}o=hl(""+o),t.setAttribute(s,o);break;case"onClick":o!=null&&(t.onclick=au);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}s=hl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""+o):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":o===!0?t.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(s,o):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(s,o):t.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(s):t.setAttribute(s,o);break;case"popover":xt("beforetoggle",t),xt("toggle",t),Le(t,"popover",o);break;case"xlinkActuate":Pe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Pe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Pe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Pe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Pe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Pe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Pe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Le(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Hx.get(s)||s,Le(t,s,o))}}function ah(t,i,s,o,c,d){switch(s){case"style":Rp(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(s=o.__html,s!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof o=="string"?Vn(t,o):(typeof o=="number"||typeof o=="bigint")&&Vn(t,""+o);break;case"onScroll":o!=null&&xt("scroll",t);break;case"onScrollEnd":o!=null&&xt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=au);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!fl.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(c=s.endsWith("Capture"),i=s.slice(2,c?s.length-7:void 0),d=t[Jt]||null,d=d!=null?d[s]:null,typeof d=="function"&&t.removeEventListener(i,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,o,c);break e}s in t?t[s]=o:o===!0?t.setAttribute(s,""):Le(t,s,o)}}}function Cn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",t),xt("load",t);var o=!1,c=!1,d;for(d in s)if(s.hasOwnProperty(d)){var E=s[d];if(E!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Ot(t,i,d,E,s,null)}}c&&Ot(t,i,"srcSet",s.srcSet,s,null),o&&Ot(t,i,"src",s.src,s,null);return;case"input":xt("invalid",t);var R=d=E=c=null,F=null,ee=null;for(o in s)if(s.hasOwnProperty(o)){var ge=s[o];if(ge!=null)switch(o){case"name":c=ge;break;case"type":E=ge;break;case"checked":F=ge;break;case"defaultChecked":ee=ge;break;case"value":d=ge;break;case"defaultValue":R=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(r(137,i));break;default:Ot(t,i,o,ge,s,null)}}Fn(t,d,R,F,ee,E,c,!1),vt(t);return;case"select":xt("invalid",t),o=E=d=null;for(c in s)if(s.hasOwnProperty(c)&&(R=s[c],R!=null))switch(c){case"value":d=R;break;case"defaultValue":E=R;break;case"multiple":o=R;default:Ot(t,i,c,R,s,null)}i=d,s=E,t.multiple=!!o,i!=null?$t(t,!!o,i,!1):s!=null&&$t(t,!!o,s,!0);return;case"textarea":xt("invalid",t),d=c=o=null;for(E in s)if(s.hasOwnProperty(E)&&(R=s[E],R!=null))switch(E){case"value":o=R;break;case"defaultValue":c=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Ot(t,i,E,R,s,null)}Fr(t,o,c,d),vt(t);return;case"option":for(F in s)if(s.hasOwnProperty(F)&&(o=s[F],o!=null))switch(F){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ot(t,i,F,o,s,null)}return;case"dialog":xt("beforetoggle",t),xt("toggle",t),xt("cancel",t),xt("close",t);break;case"iframe":case"object":xt("load",t);break;case"video":case"audio":for(o=0;o<bo.length;o++)xt(bo[o],t);break;case"image":xt("error",t),xt("load",t);break;case"details":xt("toggle",t);break;case"embed":case"source":case"link":xt("error",t),xt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in s)if(s.hasOwnProperty(ee)&&(o=s[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Ot(t,i,ee,o,s,null)}return;default:if(xc(i)){for(ge in s)s.hasOwnProperty(ge)&&(o=s[ge],o!==void 0&&ah(t,i,ge,o,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(o=s[R],o!=null&&Ot(t,i,R,o,s,null))}function fS(t,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,E=null,R=null,F=null,ee=null,ge=null;for(ae in s){var Se=s[ae];if(s.hasOwnProperty(ae)&&Se!=null)switch(ae){case"checked":break;case"value":break;case"defaultValue":F=Se;default:o.hasOwnProperty(ae)||Ot(t,i,ae,null,o,Se)}}for(var ie in o){var ae=o[ie];if(Se=s[ie],o.hasOwnProperty(ie)&&(ae!=null||Se!=null))switch(ie){case"type":d=ae;break;case"name":c=ae;break;case"checked":ee=ae;break;case"defaultChecked":ge=ae;break;case"value":E=ae;break;case"defaultValue":R=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,i));break;default:ae!==Se&&Ot(t,i,ie,ae,o,Se)}}zt(t,E,R,F,ee,ge,d,c);return;case"select":ae=E=R=ie=null;for(d in s)if(F=s[d],s.hasOwnProperty(d)&&F!=null)switch(d){case"value":break;case"multiple":ae=F;default:o.hasOwnProperty(d)||Ot(t,i,d,null,o,F)}for(c in o)if(d=o[c],F=s[c],o.hasOwnProperty(c)&&(d!=null||F!=null))switch(c){case"value":ie=d;break;case"defaultValue":R=d;break;case"multiple":E=d;default:d!==F&&Ot(t,i,c,d,o,F)}i=R,s=E,o=ae,ie!=null?$t(t,!!s,ie,!1):!!o!=!!s&&(i!=null?$t(t,!!s,i,!0):$t(t,!!s,s?[]:"",!1));return;case"textarea":ae=ie=null;for(R in s)if(c=s[R],s.hasOwnProperty(R)&&c!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ot(t,i,R,null,o,c)}for(E in o)if(c=o[E],d=s[E],o.hasOwnProperty(E)&&(c!=null||d!=null))switch(E){case"value":ie=c;break;case"defaultValue":ae=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==d&&Ot(t,i,E,c,o,d)}Tn(t,ie,ae);return;case"option":for(var rt in s)if(ie=s[rt],s.hasOwnProperty(rt)&&ie!=null&&!o.hasOwnProperty(rt))switch(rt){case"selected":t.selected=!1;break;default:Ot(t,i,rt,null,o,ie)}for(F in o)if(ie=o[F],ae=s[F],o.hasOwnProperty(F)&&ie!==ae&&(ie!=null||ae!=null))switch(F){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:Ot(t,i,F,ie,o,ae)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in s)ie=s[tt],s.hasOwnProperty(tt)&&ie!=null&&!o.hasOwnProperty(tt)&&Ot(t,i,tt,null,o,ie);for(ee in o)if(ie=o[ee],ae=s[ee],o.hasOwnProperty(ee)&&ie!==ae&&(ie!=null||ae!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,i));break;default:Ot(t,i,ee,ie,o,ae)}return;default:if(xc(i)){for(var Pt in s)ie=s[Pt],s.hasOwnProperty(Pt)&&ie!==void 0&&!o.hasOwnProperty(Pt)&&ah(t,i,Pt,void 0,o,ie);for(ge in o)ie=o[ge],ae=s[ge],!o.hasOwnProperty(ge)||ie===ae||ie===void 0&&ae===void 0||ah(t,i,ge,ie,o,ae);return}}for(var Z in s)ie=s[Z],s.hasOwnProperty(Z)&&ie!=null&&!o.hasOwnProperty(Z)&&Ot(t,i,Z,null,o,ie);for(Se in o)ie=o[Se],ae=s[Se],!o.hasOwnProperty(Se)||ie===ae||ie==null&&ae==null||Ot(t,i,Se,ie,o,ae)}var rh=null,sh=null;function ru(t){return t.nodeType===9?t:t.ownerDocument}function Av(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rv(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function oh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lh=null;function hS(){var t=window.event;return t&&t.type==="popstate"?t===lh?!1:(lh=t,!0):(lh=null,!1)}var Cv=typeof setTimeout=="function"?setTimeout:void 0,dS=typeof clearTimeout=="function"?clearTimeout:void 0,wv=typeof Promise=="function"?Promise:void 0,pS=typeof queueMicrotask=="function"?queueMicrotask:typeof wv<"u"?function(t){return wv.resolve(null).then(t).catch(mS)}:Cv;function mS(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function Dv(t,i){var s=i,o=0,c=0;do{var d=s.nextSibling;if(t.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(0<o&&8>o){s=o;var E=t.ownerDocument;if(s&1&&Ao(E.documentElement),s&2&&Ao(E.body),s&4)for(s=E.head,Ao(s),E=s.firstChild;E;){var R=E.nextSibling,F=E.nodeName;E[Ui]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=R}}if(c===0){t.removeChild(d),Oo(i);return}c--}else s==="$"||s==="$?"||s==="$!"?c++:o=s.charCodeAt(0)-48;else o=0;s=d}while(s);Oo(i)}function uh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":uh(s),Ir(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function gS(t,i,s,o){for(;t.nodeType===1;){var c=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ui])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function vS(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ei(t.nextSibling),t===null))return null;return t}function ch(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function _S(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ei(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var fh=null;function Uv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function Nv(t,i,s){switch(i=ru(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Ao(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ir(t)}var hi=new Map,Lv=new Set;function su(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var aa=W.d;W.d={f:xS,r:yS,D:SS,C:ES,L:MS,m:bS,X:AS,S:TS,M:RS};function xS(){var t=aa.f(),i=Ql();return t||i}function yS(t){var i=xa(t);i!==null&&i.tag===5&&i.type==="form"?$m(i):aa.r(t)}var hs=typeof document>"u"?null:document;function Ov(t,i,s){var o=hs;if(o&&typeof i=="string"&&i){var c=yn(i);c='link[rel="'+t+'"][href="'+c+'"]',typeof s=="string"&&(c+='[crossorigin="'+s+'"]'),Lv.has(c)||(Lv.add(c),t={rel:t,crossOrigin:s,href:i},o.querySelector(c)===null&&(i=o.createElement("link"),Cn(i,"link",t),ln(i),o.head.appendChild(i)))}}function SS(t){aa.D(t),Ov("dns-prefetch",t,null)}function ES(t,i){aa.C(t,i),Ov("preconnect",t,i)}function MS(t,i,s){aa.L(t,i,s);var o=hs;if(o&&t&&i){var c='link[rel="preload"][as="'+yn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(c+='[imagesrcset="'+yn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(c+='[imagesizes="'+yn(s.imageSizes)+'"]')):c+='[href="'+yn(t)+'"]';var d=c;switch(i){case"style":d=ds(t);break;case"script":d=ps(t)}hi.has(d)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),hi.set(d,t),o.querySelector(c)!==null||i==="style"&&o.querySelector(Ro(d))||i==="script"&&o.querySelector(Co(d))||(i=o.createElement("link"),Cn(i,"link",t),ln(i),o.head.appendChild(i)))}}function bS(t,i){aa.m(t,i);var s=hs;if(s&&t){var o=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+yn(o)+'"][href="'+yn(t)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ps(t)}if(!hi.has(d)&&(t=g({rel:"modulepreload",href:t},i),hi.set(d,t),s.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Co(d)))return}o=s.createElement("link"),Cn(o,"link",t),ln(o),s.head.appendChild(o)}}}function TS(t,i,s){aa.S(t,i,s);var o=hs;if(o&&t){var c=ya(o).hoistableStyles,d=ds(t);i=i||"default";var E=c.get(d);if(!E){var R={loading:0,preload:null};if(E=o.querySelector(Ro(d)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=hi.get(d))&&hh(t,s);var F=E=o.createElement("link");ln(F),Cn(F,"link",t),F._p=new Promise(function(ee,ge){F.onload=ee,F.onerror=ge}),F.addEventListener("load",function(){R.loading|=1}),F.addEventListener("error",function(){R.loading|=2}),R.loading|=4,ou(E,i,o)}E={type:"stylesheet",instance:E,count:1,state:R},c.set(d,E)}}}function AS(t,i){aa.X(t,i);var s=hs;if(s&&t){var o=ya(s).hoistableScripts,c=ps(t),d=o.get(c);d||(d=s.querySelector(Co(c)),d||(t=g({src:t,async:!0},i),(i=hi.get(c))&&dh(t,i),d=s.createElement("script"),ln(d),Cn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function RS(t,i){aa.M(t,i);var s=hs;if(s&&t){var o=ya(s).hoistableScripts,c=ps(t),d=o.get(c);d||(d=s.querySelector(Co(c)),d||(t=g({src:t,async:!0,type:"module"},i),(i=hi.get(c))&&dh(t,i),d=s.createElement("script"),ln(d),Cn(d,"link",t),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function Pv(t,i,s,o){var c=(c=Q.current)?su(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=ds(s.href),s=ya(c).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=ds(s.href);var d=ya(c).hoistableStyles,E=d.get(t);if(E||(c=c.ownerDocument||c,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,E),(d=c.querySelector(Ro(t)))&&!d._p&&(E.instance=d,E.state.loading=5),hi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},hi.set(t,s),d||CS(c,t,s,E.state))),i&&o===null)throw Error(r(528,""));return E}if(i&&o!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ps(s),s=ya(c).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ds(t){return'href="'+yn(t)+'"'}function Ro(t){return'link[rel="stylesheet"]['+t+"]"}function Iv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function CS(t,i,s,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Cn(i,"link",s),ln(i),t.head.appendChild(i))}function ps(t){return'[src="'+yn(t)+'"]'}function Co(t){return"script[async]"+t}function Fv(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+yn(s.href)+'"]');if(o)return i.instance=o,ln(o),o;var c=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),ln(o),Cn(o,"style",c),ou(o,s.precedence,t),i.instance=o;case"stylesheet":c=ds(s.href);var d=t.querySelector(Ro(c));if(d)return i.state.loading|=4,i.instance=d,ln(d),d;o=Iv(s),(c=hi.get(c))&&hh(o,c),d=(t.ownerDocument||t).createElement("link"),ln(d);var E=d;return E._p=new Promise(function(R,F){E.onload=R,E.onerror=F}),Cn(d,"link",o),i.state.loading|=4,ou(d,s.precedence,t),i.instance=d;case"script":return d=ps(s.src),(c=t.querySelector(Co(d)))?(i.instance=c,ln(c),c):(o=s,(c=hi.get(d))&&(o=g({},s),dh(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),ln(c),Cn(c,"link",o),t.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,ou(o,s.precedence,t));return i.instance}function ou(t,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,E=0;E<o.length;E++){var R=o[E];if(R.dataset.precedence===i)d=R;else if(d!==c)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function hh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function dh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var lu=null;function Bv(t,i,s){if(lu===null){var o=new Map,c=lu=new Map;c.set(s,o)}else c=lu,o=c.get(s),o||(o=new Map,c.set(s,o));if(o.has(t))return o;for(o.set(t,null),s=s.getElementsByTagName(t),c=0;c<s.length;c++){var d=s[c];if(!(d[Ui]||d[pn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(i)||"";E=t+E;var R=o.get(E);R?R.push(d):o.set(E,[d])}}return o}function zv(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function wS(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Hv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var wo=null;function DS(){}function US(t,i,s){if(wo===null)throw Error(r(475));var o=wo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=ds(s.href),d=t.querySelector(Ro(c));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=uu.bind(o),t.then(o,o)),i.state.loading|=4,i.instance=d,ln(d);return}d=t.ownerDocument||t,s=Iv(s),(c=hi.get(c))&&hh(s,c),d=d.createElement("link"),ln(d);var E=d;E._p=new Promise(function(R,F){E.onload=R,E.onerror=F}),Cn(d,"link",s),i.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=uu.bind(o),t.addEventListener("load",i),t.addEventListener("error",i))}}function NS(){if(wo===null)throw Error(r(475));var t=wo;return t.stylesheets&&t.count===0&&ph(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&ph(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function uu(){if(this.count--,this.count===0){if(this.stylesheets)ph(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cu=null;function ph(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cu=new Map,i.forEach(LS,t),cu=null,uu.call(t))}function LS(t,i){if(!(i.state.loading&4)){var s=cu.get(t);if(s)var o=s.get(null);else{s=new Map,cu.set(t,s);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var E=c[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),o=E)}o&&s.set(null,o)}c=i.instance,E=c.getAttribute("data-precedence"),d=s.get(E)||o,d===o&&s.set(null,c),s.set(E,c),this.count++,o=uu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),i.state.loading|=4}}var Do={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function OS(t,i,s,o,c,d,E,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function Gv(t,i,s,o,c,d,E,R,F,ee,ge,Se){return t=new OS(t,i,s,E,R,F,ee,Se),i=1,d===!0&&(i|=24),d=Jn(3,null,null,i),t.current=d,d.stateNode=t,i=Yc(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:s,cache:i},Jc(d),t}function Vv(t){return t?(t=Wr,t):Wr}function kv(t,i,s,o,c,d){c=Vv(c),o.context===null?o.context=c:o.pendingContext=c,o=ba(i),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=Ta(t,o,i),s!==null&&(ii(s,t,i),ro(s,t,i))}function Xv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function mh(t,i){Xv(t,i),(t=t.alternate)&&Xv(t,i)}function Wv(t){if(t.tag===13){var i=Xr(t,67108864);i!==null&&ii(i,t,67108864),mh(t,67108864)}}var fu=!0;function PS(t,i,s,o){var c=I.T;I.T=null;var d=W.p;try{W.p=2,gh(t,i,s,o)}finally{W.p=d,I.T=c}}function IS(t,i,s,o){var c=I.T;I.T=null;var d=W.p;try{W.p=8,gh(t,i,s,o)}finally{W.p=d,I.T=c}}function gh(t,i,s,o){if(fu){var c=vh(o);if(c===null)ih(t,i,o,hu,s),jv(t,o);else if(BS(c,t,i,s,o))o.stopPropagation();else if(jv(t,o),i&4&&-1<FS.indexOf(t)){for(;c!==null;){var d=xa(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Je(d.pendingLanes);if(E!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var F=1<<31-Be(E);R.entanglements[1]|=F,E&=~F}Ii(d),(wt&6)===0&&(Zl=Fe()+500,Mo(0))}}break;case 13:R=Xr(d,2),R!==null&&ii(R,d,2),Ql(),mh(d,2)}if(d=vh(o),d===null&&ih(t,i,o,hu,s),d===c)break;c=d}c!==null&&o.stopPropagation()}else ih(t,i,o,null,s)}}function vh(t){return t=Sc(t),_h(t)}var hu=null;function _h(t){if(hu=null,t=Xi(t),t!==null){var i=u(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return hu=t,null}function qv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case Xe:return 2;case lt:return 8;case Yt:case Zt:return 32;case O:return 268435456;default:return 32}default:return 32}}var xh=!1,Ba=null,za=null,Ha=null,Uo=new Map,No=new Map,Ga=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jv(t,i){switch(t){case"focusin":case"focusout":Ba=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":Uo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(i.pointerId)}}function Lo(t,i,s,o,c,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},i!==null&&(i=xa(i),i!==null&&Wv(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function BS(t,i,s,o,c){switch(i){case"focusin":return Ba=Lo(Ba,t,i,s,o,c),!0;case"dragenter":return za=Lo(za,t,i,s,o,c),!0;case"mouseover":return Ha=Lo(Ha,t,i,s,o,c),!0;case"pointerover":var d=c.pointerId;return Uo.set(d,Lo(Uo.get(d)||null,t,i,s,o,c)),!0;case"gotpointercapture":return d=c.pointerId,No.set(d,Lo(No.get(d)||null,t,i,s,o,c)),!0}return!1}function Yv(t){var i=Xi(t.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,_i(t.priority,function(){if(s.tag===13){var o=ni();o=st(o);var c=Xr(s,o);c!==null&&ii(c,s,o),mh(s,o)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function du(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=vh(t.nativeEvent);if(s===null){s=t.nativeEvent;var o=new s.constructor(s.type,s);yc=o,s.target.dispatchEvent(o),yc=null}else return i=xa(s),i!==null&&Wv(i),t.blockedOn=s,!1;i.shift()}return!0}function Zv(t,i,s){du(t)&&s.delete(i)}function zS(){xh=!1,Ba!==null&&du(Ba)&&(Ba=null),za!==null&&du(za)&&(za=null),Ha!==null&&du(Ha)&&(Ha=null),Uo.forEach(Zv),No.forEach(Zv)}function pu(t,i){t.blockedOn===i&&(t.blockedOn=null,xh||(xh=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,zS)))}var mu=null;function Kv(t){mu!==t&&(mu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){mu===t&&(mu=null);for(var i=0;i<t.length;i+=3){var s=t[i],o=t[i+1],c=t[i+2];if(typeof o!="function"){if(_h(o||s)===null)continue;break}var d=xa(s);d!==null&&(t.splice(i,3),i-=3,_f(d,{pending:!0,data:c,method:s.method,action:o},o,c))}}))}function Oo(t){function i(F){return pu(F,t)}Ba!==null&&pu(Ba,t),za!==null&&pu(za,t),Ha!==null&&pu(Ha,t),Uo.forEach(i),No.forEach(i);for(var s=0;s<Ga.length;s++){var o=Ga[s];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ga.length&&(s=Ga[0],s.blockedOn===null);)Yv(s),s.blockedOn===null&&Ga.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var c=s[o],d=s[o+1],E=c[Jt]||null;if(typeof d=="function")E||Kv(s);else if(E){var R=null;if(d&&d.hasAttribute("formAction")){if(c=d,E=d[Jt]||null)R=E.formAction;else if(_h(c)!==null)continue}else R=E.action;typeof R=="function"?s[o+1]=R:(s.splice(o,3),o-=3),Kv(s)}}}function yh(t){this._internalRoot=t}gu.prototype.render=yh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,o=ni();kv(s,o,t,i,null,null)},gu.prototype.unmount=yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;kv(t.current,2,null,t,null,null),Ql(),i[Di]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var i=Et();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Ga.length&&i!==0&&i<Ga[s].priority;s++);Ga.splice(s,0,t),s===0&&Yv(t)}};var Qv=e.version;if(Qv!=="19.1.1")throw Error(r(527,Qv,"19.1.1"));W.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(i),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var HS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vu.isDisabled&&vu.supportsFiber)try{pe=vu.inject(HS),ye=vu}catch{}}return Io.createRoot=function(t,i){if(!l(t))throw Error(r(299));var s=!1,o="",c=dg,d=pg,E=mg,R=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(R=i.unstable_transitionCallbacks)),i=Gv(t,1,!1,null,null,s,o,c,d,E,R,null),t[Di]=i.current,nh(t),new yh(i)},Io.hydrateRoot=function(t,i,s){if(!l(t))throw Error(r(299));var o=!1,c="",d=dg,E=pg,R=mg,F=null,ee=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(F=s.unstable_transitionCallbacks),s.formState!==void 0&&(ee=s.formState)),i=Gv(t,1,!0,i,s??null,o,c,d,E,R,F,ee),i.context=Vv(null),s=i.current,o=ni(),o=st(o),c=ba(o),c.callback=null,Ta(s,c,o),s=o,i.current.lanes=s,ze(i,s),Ii(i),t[Di]=i.current,nh(t),new gu(i)},Io.version="19.1.1",Io}var o_;function KS(){if(o_)return Mh.exports;o_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Mh.exports=ZS(),Mh.exports}var QS=KS();/**
 * react-router v7.9.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var l_="popstate";function JS(a={}){function e(l,u){let{pathname:f="/",search:h="",hash:m=""}=Nr(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),hd("",{pathname:f,search:h,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function n(l,u){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof u=="string"?u:qo(u))}function r(l,u){wi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return eE(e,n,r,a)}function Qt(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function wi(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $S(){return Math.random().toString(36).substring(2,10)}function u_(a,e){return{usr:a.state,key:a.key,idx:e}}function hd(a,e,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Nr(e):e,state:n,key:e&&e.key||r||$S()}}function qo({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function Nr(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function eE(a,e,n,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,h="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function v(){h="POP";let y=g(),_=y==null?null:y-p;p=y,m&&m({action:h,location:b.location,delta:_})}function x(y,_){h="PUSH";let N=hd(b.location,y,_);n&&n(N,y),p=g()+1;let L=u_(N,p),U=b.createHref(N);try{f.pushState(L,"",U)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;l.location.assign(U)}u&&m&&m({action:h,location:b.location,delta:1})}function S(y,_){h="REPLACE";let N=hd(b.location,y,_);n&&n(N,y),p=g();let L=u_(N,p),U=b.createHref(N);f.replaceState(L,"",U),u&&m&&m({action:h,location:b.location,delta:0})}function M(y){return tE(y)}let b={get action(){return h},get location(){return a(l,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(l_,v),m=y,()=>{l.removeEventListener(l_,v),m=null}},createHref(y){return e(l,y)},createURL:M,encodeLocation(y){let _=M(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:S,go(y){return f.go(y)}};return b}function tE(a,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Qt(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:qo(a);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function U0(a,e,n="/"){return nE(a,e,n,!1)}function nE(a,e,n,r){let l=typeof e=="string"?Nr(e):e,u=ga(l.pathname||"/",n);if(u==null)return null;let f=N0(a);iE(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=pE(u);h=hE(f[m],p,r)}return h}function N0(a,e=[],n=[],r="",l=!1){let u=(f,h,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;Qt(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=pa([r,g.relativePath]),x=n.concat(g);f.children&&f.children.length>0&&(Qt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),N0(f.children,e,x,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:cE(v,f.index),routesMeta:x})};return a.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))u(f,h);else for(let m of L0(f.path))u(f,h,!0,m)}),e}function L0(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,l=n.endsWith("?"),u=n.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=L0(r.join("/")),h=[];return h.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&h.push(...f),h.map(m=>a.startsWith("/")&&m===""?"/":m)}function iE(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:fE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var aE=/^:[\w-]+$/,rE=3,sE=2,oE=1,lE=10,uE=-2,c_=a=>a==="*";function cE(a,e){let n=a.split("/"),r=n.length;return n.some(c_)&&(r+=uE),e&&(r+=sE),n.filter(l=>!c_(l)).reduce((l,u)=>l+(aE.test(u)?rE:u===""?oE:lE),r)}function fE(a,e){return a.length===e.length&&a.slice(0,-1).every((r,l)=>r===e[l])?a[a.length-1]-e[e.length-1]:0}function hE(a,e,n=!1){let{routesMeta:r}=a,l={},u="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",v=tc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),x=m.route;if(!v&&p&&n&&!r[r.length-1].route.index&&(v=tc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:pa([u,v.pathname]),pathnameBase:_E(pa([u,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(u=pa([u,v.pathnameBase]))}return f}function tc(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=dE(a.path,a.caseSensitive,a.end),l=e.match(n);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},x)=>{if(g==="*"){let M=h[x]||"";f=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const S=h[x];return v&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:a}}function dE(a,e=!1,n=!0){wi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],l="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(r.push({paramName:"*"}),l+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":a!==""&&a!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function pE(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function ga(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}function mE(a,e="/"){let{pathname:n,search:r="",hash:l=""}=typeof a=="string"?Nr(a):a;return{pathname:n?n.startsWith("/")?n:gE(n,e):e,search:xE(r),hash:yE(l)}}function gE(a,e){let n=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Rh(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vE(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function O0(a){let e=vE(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function P0(a,e,n,r=!1){let l;typeof a=="string"?l=Nr(a):(l={...a},Qt(!l.pathname||!l.pathname.includes("?"),Rh("?","pathname","search",l)),Qt(!l.pathname||!l.pathname.includes("#"),Rh("#","pathname","hash",l)),Qt(!l.search||!l.search.includes("#"),Rh("#","search","hash",l)));let u=a===""||l.pathname==="",f=u?"/":l.pathname,h;if(f==null)h=n;else{let v=e.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),v-=1;l.pathname=x.join("/")}h=v>=0?e[v]:"/"}let m=mE(l,h),p=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var pa=a=>a.join("/").replace(/\/\/+/g,"/"),_E=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),xE=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,yE=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a;function SE(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}var I0=["POST","PUT","PATCH","DELETE"];new Set(I0);var EE=["GET",...I0];new Set(EE);var Fs=de.createContext(null);Fs.displayName="DataRouter";var fc=de.createContext(null);fc.displayName="DataRouterState";de.createContext(!1);var F0=de.createContext({isTransitioning:!1});F0.displayName="ViewTransition";var ME=de.createContext(new Map);ME.displayName="Fetchers";var bE=de.createContext(null);bE.displayName="Await";var Gi=de.createContext(null);Gi.displayName="Navigation";var el=de.createContext(null);el.displayName="Location";var Vi=de.createContext({outlet:null,matches:[],isDataRoute:!1});Vi.displayName="Route";var lp=de.createContext(null);lp.displayName="RouteError";function TE(a,{relative:e}={}){Qt(tl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=de.useContext(Gi),{hash:l,pathname:u,search:f}=nl(a,{relative:e}),h=u;return n!=="/"&&(h=u==="/"?n:pa([n,u])),r.createHref({pathname:h,search:f,hash:l})}function tl(){return de.useContext(el)!=null}function Lr(){return Qt(tl(),"useLocation() may be used only in the context of a <Router> component."),de.useContext(el).location}var B0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function z0(a){de.useContext(Gi).static||de.useLayoutEffect(a)}function AE(){let{isDataRoute:a}=de.useContext(Vi);return a?HE():RE()}function RE(){Qt(tl(),"useNavigate() may be used only in the context of a <Router> component.");let a=de.useContext(Fs),{basename:e,navigator:n}=de.useContext(Gi),{matches:r}=de.useContext(Vi),{pathname:l}=Lr(),u=JSON.stringify(O0(r)),f=de.useRef(!1);return z0(()=>{f.current=!0}),de.useCallback((m,p={})=>{if(wi(f.current,B0),!f.current)return;if(typeof m=="number"){n.go(m);return}let g=P0(m,JSON.parse(u),l,p.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:pa([e,g.pathname])),(p.replace?n.replace:n.push)(g,p.state,p)},[e,n,u,l,a])}de.createContext(null);function CE(){let{matches:a}=de.useContext(Vi),e=a[a.length-1];return e?e.params:{}}function nl(a,{relative:e}={}){let{matches:n}=de.useContext(Vi),{pathname:r}=Lr(),l=JSON.stringify(O0(n));return de.useMemo(()=>P0(a,JSON.parse(l),r,e==="path"),[a,l,r,e])}function wE(a,e){return H0(a,e)}function H0(a,e,n,r,l){Qt(tl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=de.useContext(Gi),{matches:f}=de.useContext(Vi),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",v=h&&h.route;{let N=v&&v.path||"";G0(p,!v||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let x=Lr(),S;if(e){let N=typeof e=="string"?Nr(e):e;Qt(g==="/"||N.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${N.pathname}" was given in the \`location\` prop.`),S=N}else S=x;let M=S.pathname||"/",b=M;if(g!=="/"){let N=g.replace(/^\//,"").split("/");b="/"+M.replace(/^\//,"").split("/").slice(N.length).join("/")}let y=U0(a,{pathname:b});wi(v||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),wi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=OE(y&&y.map(N=>Object.assign({},N,{params:Object.assign({},m,N.params),pathname:pa([g,u.encodeLocation?u.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?g:pa([g,u.encodeLocation?u.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),f,n,r,l);return e&&_?de.createElement(el.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},_):_}function DE(){let a=zE(),e=SE(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=de.createElement(de.Fragment,null,de.createElement("p",null,"💿 Hey developer 👋"),de.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",de.createElement("code",{style:u},"ErrorBoundary")," or"," ",de.createElement("code",{style:u},"errorElement")," prop on your route.")),de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),n?de.createElement("pre",{style:l},n):null,f)}var UE=de.createElement(DE,null),NE=class extends de.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.unstable_onError?this.props.unstable_onError(a,e):console.error("React Router caught the following error during render",a)}render(){return this.state.error!==void 0?de.createElement(Vi.Provider,{value:this.props.routeContext},de.createElement(lp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function LE({routeContext:a,match:e,children:n}){let r=de.useContext(Fs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),de.createElement(Vi.Provider,{value:a},n)}function OE(a,e=[],n=null,r=null,l=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let u=a,f=n?.errors;if(f!=null){let p=u.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Qt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,p+1))}let h=!1,m=-1;if(n)for(let p=0;p<u.length;p++){let g=u[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:v,errors:x}=n,S=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||S){h=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((p,g,v)=>{let x,S=!1,M=null,b=null;n&&(x=f&&g.route.id?f[g.route.id]:void 0,M=g.route.errorElement||UE,h&&(m<0&&v===0?(G0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,b=null):m===v&&(S=!0,b=g.route.hydrateFallbackElement||null)));let y=e.concat(u.slice(0,v+1)),_=()=>{let N;return x?N=M:S?N=b:g.route.Component?N=de.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=p,de.createElement(LE,{match:g,routeContext:{outlet:p,matches:y,isDataRoute:n!=null},children:N})};return n&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?de.createElement(NE,{location:n.location,revalidation:n.revalidation,component:M,error:x,children:_(),routeContext:{outlet:null,matches:y,isDataRoute:!0},unstable_onError:r}):_()},null)}function up(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function PE(a){let e=de.useContext(Fs);return Qt(e,up(a)),e}function IE(a){let e=de.useContext(fc);return Qt(e,up(a)),e}function FE(a){let e=de.useContext(Vi);return Qt(e,up(a)),e}function cp(a){let e=FE(a),n=e.matches[e.matches.length-1];return Qt(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function BE(){return cp("useRouteId")}function zE(){let a=de.useContext(lp),e=IE("useRouteError"),n=cp("useRouteError");return a!==void 0?a:e.errors?.[n]}function HE(){let{router:a}=PE("useNavigate"),e=cp("useNavigate"),n=de.useRef(!1);return z0(()=>{n.current=!0}),de.useCallback(async(l,u={})=>{wi(n.current,B0),n.current&&(typeof l=="number"?a.navigate(l):await a.navigate(l,{fromRouteId:e,...u}))},[a,e])}var f_={};function G0(a,e,n){!e&&!f_[a]&&(f_[a]=!0,wi(!1,n))}de.memo(GE);function GE({routes:a,future:e,state:n,unstable_onError:r}){return H0(a,void 0,n,r,e)}function Mr(a){Qt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function VE({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:l,static:u=!1}){Qt(!tl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=a.replace(/^\/*/,"/"),h=de.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof n=="string"&&(n=Nr(n));let{pathname:m="/",search:p="",hash:g="",state:v=null,key:x="default"}=n,S=de.useMemo(()=>{let M=ga(m,f);return M==null?null:{location:{pathname:M,search:p,hash:g,state:v,key:x},navigationType:r}},[f,m,p,g,v,x,r]);return wi(S!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:de.createElement(Gi.Provider,{value:h},de.createElement(el.Provider,{children:e,value:S}))}function kE({children:a,location:e}){return wE(dd(a),e)}function dd(a,e=[]){let n=[];return de.Children.forEach(a,(r,l)=>{if(!de.isValidElement(r))return;let u=[...e,l];if(r.type===de.Fragment){n.push.apply(n,dd(r.props.children,u));return}Qt(r.type===Mr,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=dd(r.props.children,u)),n.push(f)}),n}var qu="get",ju="application/x-www-form-urlencoded";function hc(a){return a!=null&&typeof a.tagName=="string"}function XE(a){return hc(a)&&a.tagName.toLowerCase()==="button"}function WE(a){return hc(a)&&a.tagName.toLowerCase()==="form"}function qE(a){return hc(a)&&a.tagName.toLowerCase()==="input"}function jE(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function YE(a,e){return a.button===0&&(!e||e==="_self")&&!jE(a)}var _u=null;function ZE(){if(_u===null)try{new FormData(document.createElement("form"),0),_u=!1}catch{_u=!0}return _u}var KE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ch(a){return a!=null&&!KE.has(a)?(wi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ju}"`),null):a}function QE(a,e){let n,r,l,u,f;if(WE(a)){let h=a.getAttribute("action");r=h?ga(h,e):null,n=a.getAttribute("method")||qu,l=Ch(a.getAttribute("enctype"))||ju,u=new FormData(a)}else if(XE(a)||qE(a)&&(a.type==="submit"||a.type==="image")){let h=a.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||h.getAttribute("action");if(r=m?ga(m,e):null,n=a.getAttribute("formmethod")||h.getAttribute("method")||qu,l=Ch(a.getAttribute("formenctype"))||Ch(h.getAttribute("enctype"))||ju,u=new FormData(h,a),!ZE()){let{name:p,type:g,value:v}=a;if(g==="image"){let x=p?`${p}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else p&&u.append(p,v)}}else{if(hc(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=qu,r=null,l=ju,f=a}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:n.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function JE(a,e,n){let r=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&ga(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function $E(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function eM(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function tM(a,e,n){let r=await Promise.all(a.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await $E(u,n);return f.links?f.links():[]}return[]}));return rM(r.flat(1).filter(eM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function h_(a,e,n,r,l,u){let f=(m,p)=>n[p]?m.route.id!==n[p].route.id:!0,h=(m,p)=>n[p].pathname!==m.pathname||n[p].route.path?.endsWith("*")&&n[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):u==="data"?e.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function nM(a,e,{includeHydrateFallback:n}={}){return iM(a.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),n&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function iM(a){return[...new Set(a)]}function aM(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function rM(a,e){let n=new Set;return new Set(e),a.reduce((r,l)=>{let u=JSON.stringify(aM(l));return n.has(u)||(n.add(u),r.push({key:u,link:l})),r},[])}function V0(){let a=de.useContext(Fs);return fp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function sM(){let a=de.useContext(fc);return fp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var hp=de.createContext(void 0);hp.displayName="FrameworkContext";function k0(){let a=de.useContext(hp);return fp(a,"You must render this element inside a <HydratedRouter> element"),a}function oM(a,e){let n=de.useContext(hp),[r,l]=de.useState(!1),[u,f]=de.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,x=de.useRef(null);de.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let b=_=>{_.forEach(N=>{f(N.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[a]),de.useEffect(()=>{if(r){let b=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(b)}}},[r]);let S=()=>{l(!0)},M=()=>{l(!1),f(!1)};return n?a!=="intent"?[u,x,{}]:[u,x,{onFocus:Fo(h,S),onBlur:Fo(m,M),onMouseEnter:Fo(p,S),onMouseLeave:Fo(g,M),onTouchStart:Fo(v,S)}]:[!1,x,{}]}function Fo(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function lM({page:a,...e}){let{router:n}=V0(),r=de.useMemo(()=>U0(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?de.createElement(cM,{page:a,matches:r,...e}):null}function uM(a){let{manifest:e,routeModules:n}=k0(),[r,l]=de.useState([]);return de.useEffect(()=>{let u=!1;return tM(a,e,n).then(f=>{u||l(f)}),()=>{u=!0}},[a,e,n]),r}function cM({page:a,matches:e,...n}){let r=Lr(),{manifest:l,routeModules:u}=k0(),{basename:f}=V0(),{loaderData:h,matches:m}=sM(),p=de.useMemo(()=>h_(a,e,m,l,r,"data"),[a,e,m,l,r]),g=de.useMemo(()=>h_(a,e,m,l,r,"assets"),[a,e,m,l,r]),v=de.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let M=new Set,b=!1;if(e.forEach(_=>{let N=l.routes[_.route.id];!N||!N.hasLoader||(!p.some(L=>L.route.id===_.route.id)&&_.route.id in h&&u[_.route.id]?.shouldRevalidate||N.hasClientLoader?b=!0:M.add(_.route.id))}),M.size===0)return[];let y=JE(a,f,"data");return b&&M.size>0&&y.searchParams.set("_routes",e.filter(_=>M.has(_.route.id)).map(_=>_.route.id).join(",")),[y.pathname+y.search]},[f,h,r,l,p,e,a,u]),x=de.useMemo(()=>nM(g,l),[g,l]),S=uM(g);return de.createElement(de.Fragment,null,v.map(M=>de.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),x.map(M=>de.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),S.map(({key:M,link:b})=>de.createElement("link",{key:M,nonce:n.nonce,...b})))}function fM(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var X0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{X0&&(window.__reactRouterVersion="7.9.1")}catch{}function hM({basename:a,children:e,window:n}){let r=de.useRef();r.current==null&&(r.current=JS({window:n,v5Compat:!0}));let l=r.current,[u,f]=de.useState({action:l.action,location:l.location}),h=de.useCallback(m=>{de.startTransition(()=>f(m))},[f]);return de.useLayoutEffect(()=>l.listen(h),[l,h]),de.createElement(VE,{basename:a,children:e,location:u.location,navigationType:u.action,navigator:l})}var W0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pn=de.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,state:h,target:m,to:p,preventScrollReset:g,viewTransition:v,...x},S){let{basename:M}=de.useContext(Gi),b=typeof p=="string"&&W0.test(p),y,_=!1;if(typeof p=="string"&&b&&(y=p,X0))try{let w=new URL(window.location.href),D=p.startsWith("//")?new URL(w.protocol+p):new URL(p),V=ga(D.pathname,M);D.origin===w.origin&&V!=null?p=V+D.search+D.hash:_=!0}catch{wi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=TE(p,{relative:l}),[L,U,P]=oM(r,x),H=gM(p,{replace:f,state:h,target:m,preventScrollReset:g,relative:l,viewTransition:v});function z(w){e&&e(w),w.defaultPrevented||H(w)}let Y=de.createElement("a",{...x,...P,href:y||N,onClick:_||u?e:z,ref:fM(S,U),target:m,"data-discover":!b&&n==="render"?"true":void 0});return L&&!b?de.createElement(de.Fragment,null,Y,de.createElement(lM,{page:N})):Y});Pn.displayName="Link";var dM=de.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:h,children:m,...p},g){let v=nl(f,{relative:p.relative}),x=Lr(),S=de.useContext(fc),{navigator:M,basename:b}=de.useContext(Gi),y=S!=null&&SM(v)&&h===!0,_=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,N=x.pathname,L=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(N=N.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&b&&(L=ga(L,b)||L);const U=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let P=N===_||!l&&N.startsWith(_)&&N.charAt(U)==="/",H=L!=null&&(L===_||!l&&L.startsWith(_)&&L.charAt(_.length)==="/"),z={isActive:P,isPending:H,isTransitioning:y},Y=P?e:void 0,w;typeof r=="function"?w=r(z):w=[r,P?"active":null,H?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let D=typeof u=="function"?u(z):u;return de.createElement(Pn,{...p,"aria-current":Y,className:w,ref:g,style:D,to:f,viewTransition:h},typeof m=="function"?m(z):m)});dM.displayName="NavLink";var pM=de.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:l,state:u,method:f=qu,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,...x},S)=>{let M=xM(),b=yM(h,{relative:p}),y=f.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&W0.test(h),N=L=>{if(m&&m(L),L.defaultPrevented)return;L.preventDefault();let U=L.nativeEvent.submitter,P=U?.getAttribute("formmethod")||f;M(U||L.currentTarget,{fetcherKey:e,method:P,navigate:n,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:v})};return de.createElement("form",{ref:S,method:y,action:b,onSubmit:r?m:N,...x,"data-discover":!_&&a==="render"?"true":void 0})});pM.displayName="Form";function mM(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function q0(a){let e=de.useContext(Fs);return Qt(e,mM(a)),e}function gM(a,{target:e,replace:n,state:r,preventScrollReset:l,relative:u,viewTransition:f}={}){let h=AE(),m=Lr(),p=nl(a,{relative:u});return de.useCallback(g=>{if(YE(g,e)){g.preventDefault();let v=n!==void 0?n:qo(m)===qo(p);h(a,{replace:v,state:r,preventScrollReset:l,relative:u,viewTransition:f})}},[m,h,p,n,r,e,a,l,u,f])}var vM=0,_M=()=>`__${String(++vM)}__`;function xM(){let{router:a}=q0("useSubmit"),{basename:e}=de.useContext(Gi),n=BE();return de.useCallback(async(r,l={})=>{let{action:u,method:f,encType:h,formData:m,body:p}=QE(r,e);if(l.navigate===!1){let g=l.fetcherKey||_M();await a.fetch(g,n,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await a.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[a,e,n])}function yM(a,{relative:e}={}){let{basename:n}=de.useContext(Gi),r=de.useContext(Vi);Qt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...nl(a||".",{relative:e})},f=Lr();if(a==null){u.search=f.search;let h=new URLSearchParams(u.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(v=>v).forEach(v=>h.append("index",v));let g=h.toString();u.search=g?`?${g}`:""}}return(!a||a===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:pa([n,u.pathname])),qo(u)}function SM(a,{relative:e}={}){let n=de.useContext(F0);Qt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=q0("useViewTransitionState"),l=nl(a,{relative:e});if(!n.isTransitioning)return!1;let u=ga(n.currentLocation.pathname,r)||n.currentLocation.pathname,f=ga(n.nextLocation.pathname,r)||n.nextLocation.pathname;return tc(l.pathname,f)!=null||tc(l.pathname,u)!=null}const EM="Juma",MM="Altaitoon",bM="Software Engineer | Cybersecurity | ML",TM="A passionate software developer with a focus on full-stack development, cybersecurity, and machine learning. I enjoy solving complex problems and creating innovative solutions. My skills span from application development to securing systems and leveraging data science.",AM="Kingdom of Bahrain",RM="Portfolio_avatar.png",CM=[{domain:"Software Development",items:["Python","JavaScript","Django","React","HTML5","CSS3","Material UI","Tailwind CSS","PostgreSQL","MongoDB","REST APIs"]},{domain:"Cybersecurity",items:["Network Security","Secure Software Development Lifecycle (SSDLC)","Linux Administration","Windows Administration"]},{domain:"Machine Learning",items:["Amazon Sagemaker","PyTorch","Scikit-learn"]},{domain:"Cloud Computing",items:["AWS","Docker","CI/CD"]}],wM=[{title:"AWS Certified Machine Learning - Specialty",issuer:"Amazon Web Services (AWS)",description:"Validates expertise in building, training, tuning, and deploying machine learning models on AWS Cloud.",badge:"certifications/AWS_ML_Specialty.png"},{title:"GIAC Certified Incident Handler (GCIH)",issuer:"GIAC",description:"Focuses on detecting, responding to, and resolving security incidents using real-world tools and techniques.",badge:"certifications/GCIH_badge.png"},{title:"GIAC Security Essentials (GSEC)",issuer:"GIAC",description:"Demonstrates hands-on knowledge of information security principles, including access control, cryptography, and network defense.",badge:"certifications/GSEC_badge.png"},{title:"GIAC Foundational Cybersecurity Technologies (GFACT)",issuer:"GIAC",description:"Covers core computing, networking, OS, and security fundamentals for entry-level cybersecurity professionals.",badge:"certifications/GFACT_badge.png"}],DM=["Machine Learning","Football","Cloud Computing","Cybersecurity Research"],UM="juma.altaitoon@gmail.com",NM="My short-term goal is to contribute to a major project. My long-term goal is to lead a team of talented developers and build innovative products.",LM="https://github.com/juma-altaitoon",OM="https://www.linkedin.com/in/juma-altaitoon",PM="#",vn={firstName:EM,lastName:MM,tagline:bM,bio:TM,location:AM,avatar:RM,skills:CM,certifications:wM,interests:DM,email:UM,goals:NM,githubUrl:LM,linkedinUrl:OM,websiteUrl:PM};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dp="180",IM=0,d_=1,FM=2,j0=1,BM=2,ca=3,Ja=0,Yn=1,fa=2,Ka=0,Ds=1,p_=2,m_=3,g_=4,zM=5,Ar=100,HM=101,GM=102,VM=103,kM=104,XM=200,WM=201,qM=202,jM=203,pd=204,md=205,YM=206,ZM=207,KM=208,QM=209,JM=210,$M=211,eb=212,tb=213,nb=214,gd=0,vd=1,_d=2,Ns=3,xd=4,yd=5,Sd=6,Ed=7,Y0=0,ib=1,ab=2,Qa=0,rb=1,sb=2,ob=3,lb=4,ub=5,cb=6,fb=7,Z0=300,Ls=301,Os=302,Md=303,bd=304,dc=306,Td=1e3,Cr=1001,Ad=1002,Ci=1003,hb=1004,xu=1005,Bi=1006,wh=1007,wr=1008,va=1009,K0=1010,Q0=1011,jo=1012,pp=1013,Dr=1014,ha=1015,il=1016,mp=1017,gp=1018,Yo=1020,J0=35902,$0=35899,ex=1021,tx=1022,Ri=1023,Zo=1026,Ko=1027,nx=1028,vp=1029,ix=1030,_p=1031,xp=1033,Yu=33776,Zu=33777,Ku=33778,Qu=33779,Rd=35840,Cd=35841,wd=35842,Dd=35843,Ud=36196,Nd=37492,Ld=37496,Od=37808,Pd=37809,Id=37810,Fd=37811,Bd=37812,zd=37813,Hd=37814,Gd=37815,Vd=37816,kd=37817,Xd=37818,Wd=37819,qd=37820,jd=37821,Yd=36492,Zd=36494,Kd=36495,Qd=36283,Jd=36284,$d=36285,ep=36286,db=3200,pb=3201,mb=0,gb=1,Za="",pi="srgb",Ps="srgb-linear",nc="linear",It="srgb",ms=7680,v_=519,vb=512,_b=513,xb=514,ax=515,yb=516,Sb=517,Eb=518,Mb=519,__=35044,x_="300 es",zi=2e3,ic=2001;class Bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(n);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ju=Math.PI/180,tp=180/Math.PI;function al(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[a&255]+Ln[a>>8&255]+Ln[a>>16&255]+Ln[a>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function yt(a,e,n){return Math.max(e,Math.min(n,a))}function bb(a,e){return(a%e+e)%e}function Dh(a,e,n){return(1-n)*a+n*e}function Bo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function jn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(e=0,n=0){Bt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6],this.y=l[1]*n+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),l=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*l+e.x,this.y=u*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rl{constructor(e=0,n=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=l}static slerpFlat(e,n,r,l,u,f,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const x=u[f+0],S=u[f+1],M=u[f+2],b=u[f+3];if(h===0){e[n+0]=m,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(h===1){e[n+0]=x,e[n+1]=S,e[n+2]=M,e[n+3]=b;return}if(v!==b||m!==x||p!==S||g!==M){let y=1-h;const _=m*x+p*S+g*M+v*b,N=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const P=Math.sqrt(L),H=Math.atan2(P,_*N);y=Math.sin(y*H)/P,h=Math.sin(h*H)/P}const U=h*N;if(m=m*y+x*U,p=p*y+S*U,g=g*y+M*U,v=v*y+b*U,y===1-h){const P=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=P,p*=P,g*=P,v*=P}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,l,u,f){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[f],x=u[f+1],S=u[f+2],M=u[f+3];return e[n]=h*M+g*v+m*S-p*x,e[n+1]=m*M+g*x+p*v-h*S,e[n+2]=p*M+g*S+h*x-m*v,e[n+3]=g*M-h*v-m*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,l){return this._x=e,this._y=n,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,l=e._y,u=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(u/2),x=m(r/2),S=m(l/2),M=m(u/2);switch(f){case"XYZ":this._x=x*g*v+p*S*M,this._y=p*S*v-x*g*M,this._z=p*g*M+x*S*v,this._w=p*g*v-x*S*M;break;case"YXZ":this._x=x*g*v+p*S*M,this._y=p*S*v-x*g*M,this._z=p*g*M-x*S*v,this._w=p*g*v+x*S*M;break;case"ZXY":this._x=x*g*v-p*S*M,this._y=p*S*v+x*g*M,this._z=p*g*M+x*S*v,this._w=p*g*v-x*S*M;break;case"ZYX":this._x=x*g*v-p*S*M,this._y=p*S*v+x*g*M,this._z=p*g*M-x*S*v,this._w=p*g*v+x*S*M;break;case"YZX":this._x=x*g*v+p*S*M,this._y=p*S*v+x*g*M,this._z=p*g*M-x*S*v,this._w=p*g*v-x*S*M;break;case"XZY":this._x=x*g*v-p*S*M,this._y=p*S*v-x*g*M,this._z=p*g*M+x*S*v,this._w=p*g*v+x*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],l=n[4],u=n[8],f=n[1],h=n[5],m=n[9],p=n[2],g=n[6],v=n[10],x=r+h+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-m)*S,this._y=(u-p)*S,this._z=(f-l)*S}else if(r>h&&r>v){const S=2*Math.sqrt(1+r-h-v);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(u+p)/S}else if(h>v){const S=2*Math.sqrt(1+h-r-v);this._w=(u-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+v-r-h);this._w=(f-l)/S,this._x=(u+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,n/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,l=e._y,u=e._z,f=e._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=r*g+f*h+l*p-u*m,this._y=l*g+f*m+u*h-r*p,this._z=u*g+f*p+r*m-l*h,this._w=f*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,f=this._w;let h=f*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*l+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-n)*g)/p,x=Math.sin(n*g)/p;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,n=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(y_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(y_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*l,this.y=u[1]*n+u[4]*r+u[7]*l,this.z=u[2]*n+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,l=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,l=this.z,u=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),g=2*(h*n-u*l),v=2*(u*r-f*n);return this.x=n+m*p+f*v-h*g,this.y=r+m*g+h*p-u*v,this.z=l+m*v+u*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*l,this.y=u[1]*n+u[5]*r+u[9]*l,this.z=u[2]*n+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,l=e.y,u=e.z,f=n.x,h=n.y,m=n.z;return this.x=l*m-u*h,this.y=u*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Uh.copy(this).projectOnVector(e),this.sub(Uh)}reflect(e){return this.sub(Uh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return n*n+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const l=Math.sin(n)*e;return this.x=l*Math.sin(r),this.y=Math.cos(n)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=l,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uh=new re,y_=new rl;class ft{constructor(e,n,r,l,u,f,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,l,u,f,h,m,p)}set(e,n,r,l,u,f,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=n,g[4]=u,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,l=n.elements,u=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],x=r[2],S=r[5],M=r[8],b=l[0],y=l[3],_=l[6],N=l[1],L=l[4],U=l[7],P=l[2],H=l[5],z=l[8];return u[0]=f*b+h*N+m*P,u[3]=f*y+h*L+m*H,u[6]=f*_+h*U+m*z,u[1]=p*b+g*N+v*P,u[4]=p*y+g*L+v*H,u[7]=p*_+g*U+v*z,u[2]=x*b+S*N+M*P,u[5]=x*y+S*L+M*H,u[8]=x*_+S*U+M*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return n*f*g-n*h*p-r*u*g+r*h*m+l*u*p-l*f*m}invert(){const e=this.elements,n=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=g*f-h*p,x=h*m-g*u,S=p*u-f*m,M=n*v+r*x+l*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=v*b,e[1]=(l*p-g*r)*b,e[2]=(h*r-l*f)*b,e[3]=x*b,e[4]=(g*n-l*m)*b,e[5]=(l*u-h*n)*b,e[6]=S*b,e[7]=(r*m-p*n)*b,e[8]=(f*n-r*u)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,l,u,f,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Nh.makeScale(e,n)),this}rotate(e){return this.premultiply(Nh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let l=0;l<9;l++)if(n[l]!==r[l])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nh=new ft;function rx(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function ac(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Tb(){const a=ac("canvas");return a.style.display="block",a}const S_={};function Qo(a){a in S_||(S_[a]=!0,console.warn(a))}function Ab(a,e,n){return new Promise(function(r,l){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:l();break;case a.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const E_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),M_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rb(){const a={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===It&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===It&&(l.r=Us(l.r),l.g=Us(l.g),l.b=Us(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Za?nc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Qo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Qo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Ps]:{primaries:e,whitePoint:r,transfer:nc,toXYZ:E_,fromXYZ:M_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:r,transfer:It,toXYZ:E_,fromXYZ:M_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),a}const At=Rb();function ma(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Us(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let gs;class Cb{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{gs===void 0&&(gs=ac("canvas")),gs.width=e.width,gs.height=e.height;const l=gs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=gs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ac("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=ma(u[f]/255)*255;return r.putImageData(l,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ma(n[r]/255)*255):n[r]=ma(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wb=0;class yp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=al(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?u.push(Lh(l[f].image)):u.push(Lh(l[f]))}else u=Lh(l);r.url=u}return n||(e.images[this.uuid]=r),r}}function Lh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Cb.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Db=0;const Oh=new re;class Zn extends Bs{constructor(e=Zn.DEFAULT_IMAGE,n=Zn.DEFAULT_MAPPING,r=Cr,l=Cr,u=Bi,f=wr,h=Ri,m=va,p=Zn.DEFAULT_ANISOTROPY,g=Za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=al(),this.name="",this.source=new yp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oh).x}get height(){return this.source.getSize(Oh).y}get depth(){return this.source.getSize(Oh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Z0;Zn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,n=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,l){return this.x=e,this.y=n,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],x=m[1],S=m[5],M=m[9],b=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(v-b)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+b)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(p+1)/2,U=(S+1)/2,P=(_+1)/2,H=(g+x)/4,z=(v+b)/4,Y=(M+y)/4;return L>U&&L>P?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=H/r,u=z/r):U>P?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=H/l,u=Y/l):P<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(P),r=z/u,l=Y/u),this.set(r,l,u,n),this}let N=Math.sqrt((y-M)*(y-M)+(v-b)*(v-b)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(y-M)/N,this.y=(v-b)/N,this.z=(x-g)/N,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=yt(this.x,e.x,n.x),this.y=yt(this.y,e.y,n.y),this.z=yt(this.z,e.z,n.z),this.w=yt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=yt(this.x,e,n),this.y=yt(this.y,e,n),this.z=yt(this.z,e,n),this.w=yt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ub extends Bs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new rn(0,0,e,n),this.scissorTest=!1,this.viewport=new rn(0,0,e,n);const l={width:e,height:n,depth:r.depth},u=new Zn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Bi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=n,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const l=Object.assign({},e.textures[n].image);this.textures[n].source=new yp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends Ub{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class sx extends Zn{constructor(e=null,n=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nb extends Zn{constructor(e=null,n=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:l},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sl{constructor(e=new re(1/0,1/0,1/0),n=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Mi):Mi.fromBufferAttribute(u,f),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yu.copy(r.boundingBox)),yu.applyMatrix4(e.matrixWorld),this.union(yu)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),Su.subVectors(this.max,zo),vs.subVectors(e.a,zo),_s.subVectors(e.b,zo),xs.subVectors(e.c,zo),ka.subVectors(_s,vs),Xa.subVectors(xs,_s),vr.subVectors(vs,xs);let n=[0,-ka.z,ka.y,0,-Xa.z,Xa.y,0,-vr.z,vr.y,ka.z,0,-ka.x,Xa.z,0,-Xa.x,vr.z,0,-vr.x,-ka.y,ka.x,0,-Xa.y,Xa.x,0,-vr.y,vr.x,0];return!Ph(n,vs,_s,xs,Su)||(n=[1,0,0,0,1,0,0,0,1],!Ph(n,vs,_s,xs,Su))?!1:(Eu.crossVectors(ka,Xa),n=[Eu.x,Eu.y,Eu.z],Ph(n,vs,_s,xs,Su))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ra),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ra=[new re,new re,new re,new re,new re,new re,new re,new re],Mi=new re,yu=new sl,vs=new re,_s=new re,xs=new re,ka=new re,Xa=new re,vr=new re,zo=new re,Su=new re,Eu=new re,_r=new re;function Ph(a,e,n,r,l){for(let u=0,f=a.length-3;u<=f;u+=3){_r.fromArray(a,u);const h=l.x*Math.abs(_r.x)+l.y*Math.abs(_r.y)+l.z*Math.abs(_r.z),m=e.dot(_r),p=n.dot(_r),g=r.dot(_r);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const Lb=new sl,Ho=new re,Ih=new re;class pc{constructor(e=new re,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Lb.setFromPoints(e).getCenter(r);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const n=Ho.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),l=(r-this.radius)*.5;this.center.addScaledVector(Ho,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Ih)),this.expandByPoint(Ho.copy(e.center).sub(Ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const sa=new re,Fh=new re,Mu=new re,Wa=new re,Bh=new re,bu=new re,zh=new re;class ox{constructor(e=new re,n=new re(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=sa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(sa.copy(this.origin).addScaledVector(this.direction,n),sa.distanceToSquared(e))}distanceSqToSegment(e,n,r,l){Fh.copy(e).add(n).multiplyScalar(.5),Mu.copy(n).sub(e).normalize(),Wa.copy(this.origin).sub(Fh);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Mu),h=Wa.dot(this.direction),m=-Wa.dot(Mu),p=Wa.lengthSq(),g=Math.abs(1-f*f);let v,x,S,M;if(g>0)if(v=f*m-h,x=f*h-m,M=u*g,v>=0)if(x>=-M)if(x<=M){const b=1/g;v*=b,x*=b,S=v*(v+f*x+2*h)+x*(f*v+x+2*m)+p}else x=u,v=Math.max(0,-(f*x+h)),S=-v*v+x*(x+2*m)+p;else x=-u,v=Math.max(0,-(f*x+h)),S=-v*v+x*(x+2*m)+p;else x<=-M?(v=Math.max(0,-(-f*u+h)),x=v>0?-u:Math.min(Math.max(-u,-m),u),S=-v*v+x*(x+2*m)+p):x<=M?(v=0,x=Math.min(Math.max(-u,-m),u),S=x*(x+2*m)+p):(v=Math.max(0,-(f*u+h)),x=v>0?u:Math.min(Math.max(-u,-m),u),S=-v*v+x*(x+2*m)+p);else x=f>0?-u:u,v=Math.max(0,-(f*x+h)),S=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Fh).addScaledVector(Mu,x),S}intersectSphere(e,n){sa.subVectors(e.center,this.origin);const r=sa.dot(this.direction),l=sa.dot(sa)-r*r,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,l,u,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(u=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(u=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(h=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,n)}intersectsBox(e){return this.intersectBox(e,sa)!==null}intersectTriangle(e,n,r,l,u){Bh.subVectors(n,e),bu.subVectors(r,e),zh.crossVectors(Bh,bu);let f=this.direction.dot(zh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Wa.subVectors(this.origin,e);const m=h*this.direction.dot(bu.crossVectors(Wa,bu));if(m<0)return null;const p=h*this.direction.dot(Bh.cross(Wa));if(p<0||m+p>f)return null;const g=-h*Wa.dot(zh);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hn{constructor(e,n,r,l,u,f,h,m,p,g,v,x,S,M,b,y){hn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,l,u,f,h,m,p,g,v,x,S,M,b,y)}set(e,n,r,l,u,f,h,m,p,g,v,x,S,M,b,y){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=l,_[1]=u,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=x,_[3]=S,_[7]=M,_[11]=b,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,l=1/ys.setFromMatrixColumn(e,0).length(),u=1/ys.setFromMatrixColumn(e,1).length(),f=1/ys.setFromMatrixColumn(e,2).length();return n[0]=r[0]*l,n[1]=r[1]*l,n[2]=r[2]*l,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,l=e.y,u=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=f*g,S=f*v,M=h*g,b=h*v;n[0]=m*g,n[4]=-m*v,n[8]=p,n[1]=S+M*p,n[5]=x-b*p,n[9]=-h*m,n[2]=b-x*p,n[6]=M+S*p,n[10]=f*m}else if(e.order==="YXZ"){const x=m*g,S=m*v,M=p*g,b=p*v;n[0]=x+b*h,n[4]=M*h-S,n[8]=f*p,n[1]=f*v,n[5]=f*g,n[9]=-h,n[2]=S*h-M,n[6]=b+x*h,n[10]=f*m}else if(e.order==="ZXY"){const x=m*g,S=m*v,M=p*g,b=p*v;n[0]=x-b*h,n[4]=-f*v,n[8]=M+S*h,n[1]=S+M*h,n[5]=f*g,n[9]=b-x*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(e.order==="ZYX"){const x=f*g,S=f*v,M=h*g,b=h*v;n[0]=m*g,n[4]=M*p-S,n[8]=x*p+b,n[1]=m*v,n[5]=b*p+x,n[9]=S*p-M,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(e.order==="YZX"){const x=f*m,S=f*p,M=h*m,b=h*p;n[0]=m*g,n[4]=b-x*v,n[8]=M*v+S,n[1]=v,n[5]=f*g,n[9]=-h*g,n[2]=-p*g,n[6]=S*v+M,n[10]=x-b*v}else if(e.order==="XZY"){const x=f*m,S=f*p,M=h*m,b=h*p;n[0]=m*g,n[4]=-v,n[8]=p*g,n[1]=x*v+b,n[5]=f*g,n[9]=S*v-M,n[2]=M*v-S,n[6]=h*g,n[10]=b*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ob,e,Pb)}lookAt(e,n,r){const l=this.elements;return ai.subVectors(e,n),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),qa.crossVectors(r,ai),qa.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),qa.crossVectors(r,ai)),qa.normalize(),Tu.crossVectors(ai,qa),l[0]=qa.x,l[4]=Tu.x,l[8]=ai.x,l[1]=qa.y,l[5]=Tu.y,l[9]=ai.y,l[2]=qa.z,l[6]=Tu.z,l[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,l=n.elements,u=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],x=r[9],S=r[13],M=r[2],b=r[6],y=r[10],_=r[14],N=r[3],L=r[7],U=r[11],P=r[15],H=l[0],z=l[4],Y=l[8],w=l[12],D=l[1],V=l[5],te=l[9],ce=l[13],ve=l[2],fe=l[6],I=l[10],W=l[14],q=l[3],xe=l[7],A=l[11],G=l[15];return u[0]=f*H+h*D+m*ve+p*q,u[4]=f*z+h*V+m*fe+p*xe,u[8]=f*Y+h*te+m*I+p*A,u[12]=f*w+h*ce+m*W+p*G,u[1]=g*H+v*D+x*ve+S*q,u[5]=g*z+v*V+x*fe+S*xe,u[9]=g*Y+v*te+x*I+S*A,u[13]=g*w+v*ce+x*W+S*G,u[2]=M*H+b*D+y*ve+_*q,u[6]=M*z+b*V+y*fe+_*xe,u[10]=M*Y+b*te+y*I+_*A,u[14]=M*w+b*ce+y*W+_*G,u[3]=N*H+L*D+U*ve+P*q,u[7]=N*z+L*V+U*fe+P*xe,u[11]=N*Y+L*te+U*I+P*A,u[15]=N*w+L*ce+U*W+P*G,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],l=e[8],u=e[12],f=e[1],h=e[5],m=e[9],p=e[13],g=e[2],v=e[6],x=e[10],S=e[14],M=e[3],b=e[7],y=e[11],_=e[15];return M*(+u*m*v-l*p*v-u*h*x+r*p*x+l*h*S-r*m*S)+b*(+n*m*S-n*p*x+u*f*x-l*f*S+l*p*g-u*m*g)+y*(+n*p*v-n*h*S-u*f*v+r*f*S+u*h*g-r*p*g)+_*(-l*h*g-n*m*v+n*h*x+l*f*v-r*f*x+r*m*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=n,l[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=e[9],x=e[10],S=e[11],M=e[12],b=e[13],y=e[14],_=e[15],N=v*y*p-b*x*p+b*m*S-h*y*S-v*m*_+h*x*_,L=M*x*p-g*y*p-M*m*S+f*y*S+g*m*_-f*x*_,U=g*b*p-M*v*p+M*h*S-f*b*S-g*h*_+f*v*_,P=M*v*m-g*b*m-M*h*x+f*b*x+g*h*y-f*v*y,H=n*N+r*L+l*U+u*P;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/H;return e[0]=N*z,e[1]=(b*x*u-v*y*u-b*l*S+r*y*S+v*l*_-r*x*_)*z,e[2]=(h*y*u-b*m*u+b*l*p-r*y*p-h*l*_+r*m*_)*z,e[3]=(v*m*u-h*x*u-v*l*p+r*x*p+h*l*S-r*m*S)*z,e[4]=L*z,e[5]=(g*y*u-M*x*u+M*l*S-n*y*S-g*l*_+n*x*_)*z,e[6]=(M*m*u-f*y*u-M*l*p+n*y*p+f*l*_-n*m*_)*z,e[7]=(f*x*u-g*m*u+g*l*p-n*x*p-f*l*S+n*m*S)*z,e[8]=U*z,e[9]=(M*v*u-g*b*u-M*r*S+n*b*S+g*r*_-n*v*_)*z,e[10]=(f*b*u-M*h*u+M*r*p-n*b*p-f*r*_+n*h*_)*z,e[11]=(g*h*u-f*v*u-g*r*p+n*v*p+f*r*S-n*h*S)*z,e[12]=P*z,e[13]=(g*b*l-M*v*l+M*r*x-n*b*x-g*r*y+n*v*y)*z,e[14]=(M*h*l-f*b*l-M*r*m+n*b*m+f*r*y-n*h*y)*z,e[15]=(f*v*l-g*h*l+g*r*m-n*v*m-f*r*x+n*h*x)*z,this}scale(e){const n=this.elements,r=e.x,l=e.y,u=e.z;return n[0]*=r,n[4]*=l,n[8]*=u,n[1]*=r,n[5]*=l,n[9]*=u,n[2]*=r,n[6]*=l,n[10]*=u,n[3]*=r,n[7]*=l,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,l))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),l=Math.sin(n),u=1-r,f=e.x,h=e.y,m=e.z,p=u*f,g=u*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*f,0,p*m-l*h,g*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,l,u,f){return this.set(1,r,u,0,e,1,f,0,n,l,1,0,0,0,0,1),this}compose(e,n,r){const l=this.elements,u=n._x,f=n._y,h=n._z,m=n._w,p=u+u,g=f+f,v=h+h,x=u*p,S=u*g,M=u*v,b=f*g,y=f*v,_=h*v,N=m*p,L=m*g,U=m*v,P=r.x,H=r.y,z=r.z;return l[0]=(1-(b+_))*P,l[1]=(S+U)*P,l[2]=(M-L)*P,l[3]=0,l[4]=(S-U)*H,l[5]=(1-(x+_))*H,l[6]=(y+N)*H,l[7]=0,l[8]=(M+L)*z,l[9]=(y-N)*z,l[10]=(1-(x+b))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,n,r){const l=this.elements;let u=ys.set(l[0],l[1],l[2]).length();const f=ys.set(l[4],l[5],l[6]).length(),h=ys.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],bi.copy(this);const p=1/u,g=1/f,v=1/h;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,n.setFromRotationMatrix(bi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,n,r,l,u,f,h=zi,m=!1){const p=this.elements,g=2*u/(n-e),v=2*u/(r-l),x=(n+e)/(n-e),S=(r+l)/(r-l);let M,b;if(m)M=u/(f-u),b=f*u/(f-u);else if(h===zi)M=-(f+u)/(f-u),b=-2*f*u/(f-u);else if(h===ic)M=-f/(f-u),b=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,l,u,f,h=zi,m=!1){const p=this.elements,g=2/(n-e),v=2/(r-l),x=-(n+e)/(n-e),S=-(r+l)/(r-l);let M,b;if(m)M=1/(f-u),b=f/(f-u);else if(h===zi)M=-2/(f-u),b=-(f+u)/(f-u);else if(h===ic)M=-1/(f-u),b=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let l=0;l<16;l++)if(n[l]!==r[l])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ys=new re,bi=new hn,Ob=new re(0,0,0),Pb=new re(1,1,1),qa=new re,Tu=new re,ai=new re,b_=new hn,T_=new rl;class _a{constructor(e=0,n=0,r=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,l=this._order){return this._x=e,this._y=n,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const l=e.elements,u=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],x=l[6],S=l[10];switch(n){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(yt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return b_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(b_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return T_.setFromEuler(this),this.setFromQuaternion(T_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class lx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ib=0;const A_=new re,Ss=new rl,oa=new hn,Au=new re,Go=new re,Fb=new re,Bb=new rl,R_=new re(1,0,0),C_=new re(0,1,0),w_=new re(0,0,1),D_={type:"added"},zb={type:"removed"},Es={type:"childadded",child:null},Hh={type:"childremoved",child:null};class Kn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new re,n=new _a,r=new rl,l=new re(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new hn},normalMatrix:{value:new ft}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(R_,e)}rotateY(e){return this.rotateOnAxis(C_,e)}rotateZ(e){return this.rotateOnAxis(w_,e)}translateOnAxis(e,n){return A_.copy(e).applyQuaternion(this.quaternion),this.position.add(A_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(R_,e)}translateY(e){return this.translateOnAxis(C_,e)}translateZ(e){return this.translateOnAxis(w_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Au.copy(e):Au.set(e,n,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(Go,Au,this.up):oa.lookAt(Au,Go,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),Ss.setFromRotationMatrix(oa),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(D_),Es.child=e,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zb),Hh.child=e,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oa.multiply(e.parent.matrixWorld)),e.applyMatrix4(oa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(D_),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,Fb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,Bb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(n){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),S=f(e.animations),M=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=l,r;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Kn.DEFAULT_UP=new re(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new re,la=new re,Gh=new re,ua=new re,Ms=new re,bs=new re,U_=new re,Vh=new re,kh=new re,Xh=new re,Wh=new rn,qh=new rn,jh=new rn;class gi{constructor(e=new re,n=new re,r=new re){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,l){l.subVectors(r,n),Ti.subVectors(e,n),l.cross(Ti);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,n,r,l,u){Ti.subVectors(l,n),la.subVectors(r,n),Gh.subVectors(e,n);const f=Ti.dot(Ti),h=Ti.dot(la),m=Ti.dot(Gh),p=la.dot(la),g=la.dot(Gh),v=f*p-h*h;if(v===0)return u.set(0,0,0),null;const x=1/v,S=(p*m-h*g)*x,M=(f*g-h*m)*x;return u.set(1-S-M,M,S)}static containsPoint(e,n,r,l){return this.getBarycoord(e,n,r,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,n,r,l,u,f,h,m){return this.getBarycoord(e,n,r,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ua.x),m.addScaledVector(f,ua.y),m.addScaledVector(h,ua.z),m)}static getInterpolatedAttribute(e,n,r,l,u,f){return Wh.setScalar(0),qh.setScalar(0),jh.setScalar(0),Wh.fromBufferAttribute(e,n),qh.fromBufferAttribute(e,r),jh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Wh,u.x),f.addScaledVector(qh,u.y),f.addScaledVector(jh,u.z),f}static isFrontFacing(e,n,r,l){return Ti.subVectors(r,n),la.subVectors(e,n),Ti.cross(la).dot(l)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,l){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,n,r,l){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),la.subVectors(this.a,this.b),Ti.cross(la).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return gi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,l,u){return gi.getInterpolation(e,this.a,this.b,this.c,n,r,l,u)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,l=this.b,u=this.c;let f,h;Ms.subVectors(l,r),bs.subVectors(u,r),Vh.subVectors(e,r);const m=Ms.dot(Vh),p=bs.dot(Vh);if(m<=0&&p<=0)return n.copy(r);kh.subVectors(e,l);const g=Ms.dot(kh),v=bs.dot(kh);if(g>=0&&v<=g)return n.copy(l);const x=m*v-g*p;if(x<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(r).addScaledVector(Ms,f);Xh.subVectors(e,u);const S=Ms.dot(Xh),M=bs.dot(Xh);if(M>=0&&S<=M)return n.copy(u);const b=S*p-m*M;if(b<=0&&p>=0&&M<=0)return h=p/(p-M),n.copy(r).addScaledVector(bs,h);const y=g*M-S*v;if(y<=0&&v-g>=0&&S-M>=0)return U_.subVectors(u,l),h=(v-g)/(v-g+(S-M)),n.copy(l).addScaledVector(U_,h);const _=1/(y+b+x);return f=b*_,h=x*_,n.copy(r).addScaledVector(Ms,f).addScaledVector(bs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},Ru={h:0,s:0,l:0};function Yh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Mt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,n),this}setRGB(e,n,r,l=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.colorSpaceToWorking(this,l),this}setHSL(e,n,r,l=At.workingColorSpace){if(e=bb(e,1),n=yt(n,0,1),r=yt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Yh(f,u,e+1/3),this.g=Yh(f,u,e),this.b=Yh(f,u,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,n=pi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pi){const r=ux[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return At.workingToColorSpace(On.copy(this),e),Math.round(yt(On.r*255,0,255))*65536+Math.round(yt(On.g*255,0,255))*256+Math.round(yt(On.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.workingToColorSpace(On.copy(this),n);const r=On.r,l=On.g,u=On.b,f=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=g<=.5?v/(f+h):v/(2-f-h),f){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=At.workingColorSpace){return At.workingToColorSpace(On.copy(this),n),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=pi){At.workingToColorSpace(On.copy(this),e);const n=On.r,r=On.g,l=On.b;return e!==pi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,n,r){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+n,ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(ja),e.getHSL(Ru);const r=Dh(ja.h,Ru.h,n),l=Dh(ja.s,Ru.s,n),u=Dh(ja.l,Ru.l,n);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*l,this.g=u[1]*n+u[4]*r+u[7]*l,this.b=u[2]*n+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Mt;Mt.NAMES=ux;let Hb=0;class ol extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=al(),this.name="",this.type="Material",this.blending=Ds,this.side=Ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(r.blending=this.blending),this.side!==Ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==pd&&(r.blendSrc=this.blendSrc),this.blendDst!==md&&(r.blendDst=this.blendDst),this.blendEquation!==Ar&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}if(n){const u=l(e.textures),f=l(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const l=n.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cx extends ol{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=Y0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new re,Cu=new Bt;let Gb=0;class Hi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=__,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=n.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Cu.fromBufferAttribute(this,n),Cu.applyMatrix3(e),this.setXY(n,Cu.x,Cu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Bo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),r=jn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,l){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),r=jn(r,this.array),l=jn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,n,r,l,u){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),r=jn(r,this.array),l=jn(l,this.array),u=jn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==__&&(e.usage=this.usage),e}}class fx extends Hi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class hx extends Hi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class vi extends Hi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Vb=0;const di=new hn,Zh=new Kn,Ts=new re,ri=new sl,Vo=new sl,bn=new re;class ki extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rx(e)?hx:fx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,n,r){return di.makeTranslation(e,n,r),this.applyMatrix4(di),this}scale(e,n,r){return di.makeScale(e,n,r),this.applyMatrix4(di),this}lookAt(e){return Zh.lookAt(e),Zh.updateMatrix(),this.applyMatrix4(Zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new vi(r,3))}else{const r=Math.min(e.length,n.count);for(let l=0;l<r;l++){const u=e[l];n.setXYZ(l,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,l=n.length;r<l;r++){const u=n[r];ri.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const h=n[u];Vo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ri.min,Vo.min),ri.expandByPoint(bn),bn.addVectors(ri.max,Vo.max),ri.expandByPoint(bn)):(ri.expandByPoint(Vo.min),ri.expandByPoint(Vo.max))}ri.getCenter(r);let l=0;for(let u=0,f=e.count;u<f;u++)bn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(bn));if(n)for(let u=0,f=n.length;u<f;u++){const h=n[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)bn.fromBufferAttribute(h,p),m&&(Ts.fromBufferAttribute(e,p),bn.add(Ts)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,l=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let Y=0;Y<r.count;Y++)h[Y]=new re,m[Y]=new re;const p=new re,g=new re,v=new re,x=new Bt,S=new Bt,M=new Bt,b=new re,y=new re;function _(Y,w,D){p.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,w),v.fromBufferAttribute(r,D),x.fromBufferAttribute(u,Y),S.fromBufferAttribute(u,w),M.fromBufferAttribute(u,D),g.sub(p),v.sub(p),S.sub(x),M.sub(x);const V=1/(S.x*M.y-M.x*S.y);isFinite(V)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(V),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(V),h[Y].add(b),h[w].add(b),h[D].add(b),m[Y].add(y),m[w].add(y),m[D].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let Y=0,w=N.length;Y<w;++Y){const D=N[Y],V=D.start,te=D.count;for(let ce=V,ve=V+te;ce<ve;ce+=3)_(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const L=new re,U=new re,P=new re,H=new re;function z(Y){P.fromBufferAttribute(l,Y),H.copy(P);const w=h[Y];L.copy(w),L.sub(P.multiplyScalar(P.dot(w))).normalize(),U.crossVectors(H,w);const V=U.dot(m[Y])<0?-1:1;f.setXYZW(Y,L.x,L.y,L.z,V)}for(let Y=0,w=N.length;Y<w;++Y){const D=N[Y],V=D.start,te=D.count;for(let ce=V,ve=V+te;ce<ve;ce+=3)z(e.getX(ce+0)),z(e.getX(ce+1)),z(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Hi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const l=new re,u=new re,f=new re,h=new re,m=new re,p=new re,g=new re,v=new re;if(e)for(let x=0,S=e.count;x<S;x+=3){const M=e.getX(x+0),b=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,y),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),h.fromBufferAttribute(r,M),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,y),h.add(g),m.add(g),p.add(g),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=n.count;x<S;x+=3)l.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)bn.fromBufferAttribute(e,n),bn.normalize(),e.setXYZ(n,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,v=h.normalized,x=new p.constructor(m.length*g);let S=0,M=0;for(let b=0,y=m.length;b<y;b++){h.isInterleavedBufferAttribute?S=m[b]*h.data.stride+h.offset:S=m[b]*g;for(let _=0;_<g;_++)x[M++]=p[S++]}return new Hi(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ki,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);n.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,v=p.length;g<v;g++){const x=p[g],S=e(x,r);m.push(S)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,x=p.length;v<x;v++){const S=p[v];g.push(S.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(n))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let x=0,S=v.length;x<S;x++)g.push(v[x].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const N_=new hn,xr=new ox,wu=new pc,L_=new re,Du=new re,Uu=new re,Nu=new re,Kh=new re,Lu=new re,O_=new re,Ou=new re;class da extends Kn{constructor(e=new ki,n=new cx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,n){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){Lu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],v=u[m];g!==0&&(Kh.fromBufferAttribute(v,e),f?Lu.addScaledVector(Kh,g):Lu.addScaledVector(Kh.sub(n),g))}n.add(Lu)}return n}raycast(e,n){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),wu.copy(r.boundingSphere),wu.applyMatrix4(u),xr.copy(e.ray).recast(e.near),!(wu.containsPoint(xr.origin)===!1&&(xr.intersectSphere(wu,L_)===null||xr.origin.distanceToSquared(L_)>(e.far-e.near)**2))&&(N_.copy(u).invert(),xr.copy(e.ray).applyMatrix4(N_),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,r){let l;const u=this.geometry,f=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,S=u.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,b=x.length;M<b;M++){const y=x[M],_=f[y.materialIndex],N=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let U=N,P=L;U<P;U+=3){const H=h.getX(U),z=h.getX(U+1),Y=h.getX(U+2);l=Pu(this,_,e,r,p,g,v,H,z,Y),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,n.push(l))}}else{const M=Math.max(0,S.start),b=Math.min(h.count,S.start+S.count);for(let y=M,_=b;y<_;y+=3){const N=h.getX(y),L=h.getX(y+1),U=h.getX(y+2);l=Pu(this,f,e,r,p,g,v,N,L,U),l&&(l.faceIndex=Math.floor(y/3),n.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let M=0,b=x.length;M<b;M++){const y=x[M],_=f[y.materialIndex],N=Math.max(y.start,S.start),L=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let U=N,P=L;U<P;U+=3){const H=U,z=U+1,Y=U+2;l=Pu(this,_,e,r,p,g,v,H,z,Y),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,n.push(l))}}else{const M=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let y=M,_=b;y<_;y+=3){const N=y,L=y+1,U=y+2;l=Pu(this,f,e,r,p,g,v,N,L,U),l&&(l.faceIndex=Math.floor(y/3),n.push(l))}}}}function kb(a,e,n,r,l,u,f,h){let m;if(e.side===Yn?m=r.intersectTriangle(f,u,l,!0,h):m=r.intersectTriangle(l,u,f,e.side===Ja,h),m===null)return null;Ou.copy(h),Ou.applyMatrix4(a.matrixWorld);const p=n.ray.origin.distanceTo(Ou);return p<n.near||p>n.far?null:{distance:p,point:Ou.clone(),object:a}}function Pu(a,e,n,r,l,u,f,h,m,p){a.getVertexPosition(h,Du),a.getVertexPosition(m,Uu),a.getVertexPosition(p,Nu);const g=kb(a,e,n,r,Du,Uu,Nu,O_);if(g){const v=new re;gi.getBarycoord(O_,Du,Uu,Nu,v),l&&(g.uv=gi.getInterpolatedAttribute(l,h,m,p,v,new Bt)),u&&(g.uv1=gi.getInterpolatedAttribute(u,h,m,p,v,new Bt)),f&&(g.normal=gi.getInterpolatedAttribute(f,h,m,p,v,new re),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new re,materialIndex:0};gi.getNormal(Du,Uu,Nu,x.normal),g.face=x,g.barycoord=v}return g}class zs extends ki{constructor(e=1,n=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const h=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],g=[],v=[];let x=0,S=0;M("z","y","x",-1,-1,r,n,e,f,u,0),M("z","y","x",1,-1,r,n,-e,f,u,1),M("x","z","y",1,1,e,r,n,l,f,2),M("x","z","y",1,-1,e,r,-n,l,f,3),M("x","y","z",1,-1,e,n,r,l,u,4),M("x","y","z",-1,-1,e,n,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new vi(p,3)),this.setAttribute("normal",new vi(g,3)),this.setAttribute("uv",new vi(v,2));function M(b,y,_,N,L,U,P,H,z,Y,w){const D=U/z,V=P/Y,te=U/2,ce=P/2,ve=H/2,fe=z+1,I=Y+1;let W=0,q=0;const xe=new re;for(let A=0;A<I;A++){const G=A*V-ce;for(let se=0;se<fe;se++){const le=se*D-te;xe[b]=le*N,xe[y]=G*L,xe[_]=ve,p.push(xe.x,xe.y,xe.z),xe[b]=0,xe[y]=0,xe[_]=H>0?1:-1,g.push(xe.x,xe.y,xe.z),v.push(se/z),v.push(1-A/Y),W+=1}}for(let A=0;A<Y;A++)for(let G=0;G<z;G++){const se=x+G+fe*A,le=x+G+fe*(A+1),Me=x+(G+1)+fe*(A+1),Ue=x+(G+1)+fe*A;m.push(se,le,Ue),m.push(le,Me,Ue),q+=6}h.addGroup(S,q,w),S+=q,x+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const l=a[n][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=l.clone():Array.isArray(l)?e[n][r]=l.slice():e[n][r]=l}}return e}function Hn(a){const e={};for(let n=0;n<a.length;n++){const r=Is(a[n]);for(const l in r)e[l]=r[l]}return e}function Xb(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function dx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Wb={clone:Is,merge:Hn};var qb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $a extends ol{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qb,this.fragmentShader=jb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class px extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ya=new re,P_=new Bt,I_=new Bt;class mi extends px{constructor(e=50,n=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=tp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ju*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tp*2*Math.atan(Math.tan(Ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z),Ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ya.x,Ya.y).multiplyScalar(-e/Ya.z)}getViewSize(e,n){return this.getViewBounds(e,P_,I_),n.subVectors(I_,P_)}setViewOffset(e,n,r,l,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ju*.5*this.fov)/this.zoom,r=2*n,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,n-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const As=-90,Rs=1;class Yb extends Kn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(As,Rs,e,n);l.layers=this.layers,this.add(l);const u=new mi(As,Rs,e,n);u.layers=this.layers,this.add(u);const f=new mi(As,Rs,e,n);f.layers=this.layers,this.add(f);const h=new mi(As,Rs,e,n);h.layers=this.layers,this.add(h);const m=new mi(As,Rs,e,n);m.layers=this.layers,this.add(m);const p=new mi(As,Rs,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,l,u,f,h,m]=n;for(const p of n)this.remove(p);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ic)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,m,p,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(n,u),e.setRenderTarget(r,1,l),e.render(n,f),e.setRenderTarget(r,2,l),e.render(n,h),e.setRenderTarget(r,3,l),e.render(n,m),e.setRenderTarget(r,4,l),e.render(n,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,l),e.render(n,g),e.setRenderTarget(v,x,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class mx extends Zn{constructor(e=[],n=Ls,r,l,u,f,h,m,p,g){super(e,n,r,l,u,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zb extends Ur{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new mx(l),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new zs(5,5,5),u=new $a({name:"CubemapFromEquirect",uniforms:Is(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:Ka});u.uniforms.tEquirect.value=n;const f=new da(l,u),h=n.minFilter;return n.minFilter===wr&&(n.minFilter=Bi),new Yb(1,10,this).update(e,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,l);e.setRenderTarget(u)}}class Xo extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kb={type:"move"};class Qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let l=null,u=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const b of e.hand.values()){const y=n.getJointPose(b,r),_=this._getHandJoint(p,b);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=g.position.distanceTo(v.position),S=.02,M=.005;p.inputState.pinching&&x>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=n.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Kb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Xo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Qb extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jh=new re,Jb=new re,$b=new ft;class br{constructor(e=new re(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,l){return this.normal.set(e,n,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const l=Jh.subVectors(r,n).cross(Jb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Jh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||$b.getNormalMatrix(e),l=this.coplanarPoint(Jh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new pc,eT=new Bt(.5,.5),Iu=new re;class gx{constructor(e=new br,n=new br,r=new br,l=new br,u=new br,f=new br){this.planes=[e,n,r,l,u,f]}set(e,n,r,l,u,f){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=zi,r=!1){const l=this.planes,u=e.elements,f=u[0],h=u[1],m=u[2],p=u[3],g=u[4],v=u[5],x=u[6],S=u[7],M=u[8],b=u[9],y=u[10],_=u[11],N=u[12],L=u[13],U=u[14],P=u[15];if(l[0].setComponents(p-f,S-g,_-M,P-N).normalize(),l[1].setComponents(p+f,S+g,_+M,P+N).normalize(),l[2].setComponents(p+h,S+v,_+b,P+L).normalize(),l[3].setComponents(p-h,S-v,_-b,P-L).normalize(),r)l[4].setComponents(m,x,y,U).normalize(),l[5].setComponents(p-m,S-x,_-y,P-U).normalize();else if(l[4].setComponents(p-m,S-x,_-y,P-U).normalize(),n===zi)l[5].setComponents(p+m,S+x,_+y,P+U).normalize();else if(n===ic)l[5].setComponents(m,x,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);const n=eT.distanceTo(e.center);return yr.radius=.7071067811865476+n,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const l=n[r];if(Iu.x=l.normal.x>0?e.max.x:e.min.x,Iu.y=l.normal.y>0?e.max.y:e.min.y,Iu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Iu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sp extends ol{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rc=new re,sc=new re,F_=new hn,ko=new ox,Fu=new pc,$h=new re,B_=new re;class tT extends Kn{constructor(e=new ki,n=new Sp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let l=1,u=n.count;l<u;l++)rc.fromBufferAttribute(n,l-1),sc.fromBufferAttribute(n,l),r[l]=r[l-1],r[l]+=rc.distanceTo(sc);e.setAttribute("lineDistance",new vi(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fu.copy(r.boundingSphere),Fu.applyMatrix4(l),Fu.radius+=u,e.ray.intersectsSphere(Fu)===!1)return;F_.copy(l).invert(),ko.copy(e.ray).applyMatrix4(F_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const S=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let b=S,y=M-1;b<y;b+=p){const _=g.getX(b),N=g.getX(b+1),L=Bu(this,e,ko,m,_,N,b);L&&n.push(L)}if(this.isLineLoop){const b=g.getX(M-1),y=g.getX(S),_=Bu(this,e,ko,m,b,y,M-1);_&&n.push(_)}}else{const S=Math.max(0,f.start),M=Math.min(x.count,f.start+f.count);for(let b=S,y=M-1;b<y;b+=p){const _=Bu(this,e,ko,m,b,b+1,b);_&&n.push(_)}if(this.isLineLoop){const b=Bu(this,e,ko,m,M-1,S,M-1);b&&n.push(b)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function Bu(a,e,n,r,l,u,f){const h=a.geometry.attributes.position;if(rc.fromBufferAttribute(h,l),sc.fromBufferAttribute(h,u),n.distanceSqToSegment(rc,sc,$h,B_)>r)return;$h.applyMatrix4(a.matrixWorld);const p=e.ray.origin.distanceTo($h);if(!(p<e.near||p>e.far))return{distance:p,point:B_.clone().applyMatrix4(a.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:a}}const z_=new re,H_=new re;class vx extends tT{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let l=0,u=n.count;l<u;l+=2)z_.fromBufferAttribute(n,l),H_.fromBufferAttribute(n,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+z_.distanceTo(H_);e.setAttribute("lineDistance",new vi(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _x extends Zn{constructor(e,n,r=Dr,l,u,f,h=Ci,m=Ci,p,g=Zo,v=1){if(g!==Zo&&g!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:v};super(x,l,u,f,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class xx extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const zu=new re,Hu=new re,ed=new re,Gu=new gi;class nT extends ki{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const l=Math.pow(10,4),u=Math.cos(Ju*n),f=e.getIndex(),h=e.getAttribute("position"),m=f?f.count:h.count,p=[0,0,0],g=["a","b","c"],v=new Array(3),x={},S=[];for(let M=0;M<m;M+=3){f?(p[0]=f.getX(M),p[1]=f.getX(M+1),p[2]=f.getX(M+2)):(p[0]=M,p[1]=M+1,p[2]=M+2);const{a:b,b:y,c:_}=Gu;if(b.fromBufferAttribute(h,p[0]),y.fromBufferAttribute(h,p[1]),_.fromBufferAttribute(h,p[2]),Gu.getNormal(ed),v[0]=`${Math.round(b.x*l)},${Math.round(b.y*l)},${Math.round(b.z*l)}`,v[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,v[2]=`${Math.round(_.x*l)},${Math.round(_.y*l)},${Math.round(_.z*l)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let N=0;N<3;N++){const L=(N+1)%3,U=v[N],P=v[L],H=Gu[g[N]],z=Gu[g[L]],Y=`${U}_${P}`,w=`${P}_${U}`;w in x&&x[w]?(ed.dot(x[w].normal)<=u&&(S.push(H.x,H.y,H.z),S.push(z.x,z.y,z.z)),x[w]=null):Y in x||(x[Y]={index0:p[N],index1:p[L],normal:ed.clone()})}}for(const M in x)if(x[M]){const{index0:b,index1:y}=x[M];zu.fromBufferAttribute(h,b),Hu.fromBufferAttribute(h,y),S.push(zu.x,zu.y,zu.z),S.push(Hu.x,Hu.y,Hu.z)}this.setAttribute("position",new vi(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class mc extends ki{constructor(e=1,n=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:l};const u=e/2,f=n/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=e/h,x=n/m,S=[],M=[],b=[],y=[];for(let _=0;_<g;_++){const N=_*x-f;for(let L=0;L<p;L++){const U=L*v-u;M.push(U,-N,0),b.push(0,0,1),y.push(L/h),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let N=0;N<h;N++){const L=N+p*_,U=N+p*(_+1),P=N+1+p*(_+1),H=N+1+p*_;S.push(L,U,H),S.push(U,P,H)}this.setIndex(S),this.setAttribute("position",new vi(M,3)),this.setAttribute("normal",new vi(b,3)),this.setAttribute("uv",new vi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.widthSegments,e.heightSegments)}}class iT extends ol{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=db,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aT extends ol{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rT extends px{constructor(e=-1,n=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,f=r+e,h=l+n,m=l-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class sT extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class oT extends vx{constructor(e=10,n=10,r=4473924,l=8947848){r=new Mt(r),l=new Mt(l);const u=n/2,f=e/n,h=e/2,m=[],p=[];for(let x=0,S=0,M=-h;x<=n;x++,M+=f){m.push(-h,0,M,h,0,M),m.push(M,0,-h,M,0,h);const b=x===u?r:l;b.toArray(p,S),S+=3,b.toArray(p,S),S+=3,b.toArray(p,S),S+=3,b.toArray(p,S),S+=3}const g=new ki;g.setAttribute("position",new vi(m,3)),g.setAttribute("color",new vi(p,3));const v=new Sp({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function G_(a,e,n,r){const l=lT(r);switch(n){case ex:return a*e;case nx:return a*e/l.components*l.byteLength;case vp:return a*e/l.components*l.byteLength;case ix:return a*e*2/l.components*l.byteLength;case _p:return a*e*2/l.components*l.byteLength;case tx:return a*e*3/l.components*l.byteLength;case Ri:return a*e*4/l.components*l.byteLength;case xp:return a*e*4/l.components*l.byteLength;case Yu:case Zu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ku:case Qu:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Cd:case Dd:return Math.max(a,16)*Math.max(e,8)/4;case Rd:case wd:return Math.max(a,8)*Math.max(e,8)/2;case Ud:case Nd:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Ld:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Id:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case zd:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case kd:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case jd:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Yd:case Zd:case Kd:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Qd:case Jd:return Math.ceil(a/4)*Math.ceil(e/4)*8;case $d:case ep:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function lT(a){switch(a){case va:case K0:return{byteLength:1,components:1};case jo:case Q0:case il:return{byteLength:2,components:1};case mp:case gp:return{byteLength:2,components:4};case Dr:case pp:case ha:return{byteLength:4,components:1};case J0:case $0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yx(){let a=null,e=!1,n=null,r=null;function l(u,f){n(u,f),r=a.requestAnimationFrame(l)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(l),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){a=u}}}function uT(a){const e=new WeakMap;function n(h,m){const p=h.array,g=h.usage,v=p.byteLength,x=a.createBuffer();a.bindBuffer(m,x),a.bufferData(m,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=a.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=a.SHORT;else if(p instanceof Uint32Array)S=a.UNSIGNED_INT;else if(p instanceof Int32Array)S=a.INT;else if(p instanceof Int8Array)S=a.BYTE;else if(p instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(a.bindBuffer(p,h),v.length===0)a.bufferSubData(p,0,g);else{v.sort((S,M)=>S.start-M.start);let x=0;for(let S=1;S<v.length;S++){const M=v[x],b=v[S];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++x,v[x]=b)}v.length=x+1;for(let S=0,M=v.length;S<M;S++){const b=v[S];a.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(a.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:f}}var cT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fT=`#ifdef USE_ALPHAHASH
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
#endif`,hT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gT=`#ifdef USE_AOMAP
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
#endif`,vT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_T=`#ifdef USE_BATCHING
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
#endif`,xT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ST=`vec3 objectNormal = vec3( normal );
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
} // validated`,MT=`#ifdef USE_IRIDESCENCE
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
#endif`,bT=`#ifdef USE_BUMPMAP
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
#endif`,TT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,LT=`#define PI 3.141592653589793
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
} // validated`,OT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,PT=`vec3 transformedNormal = objectNormal;
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
#endif`,IT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HT="gl_FragColor = linearToOutputTexel( gl_FragColor );",GT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VT=`#ifdef USE_ENVMAP
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
#endif`,kT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XT=`#ifdef USE_ENVMAP
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
#endif`,WT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qT=`#ifdef USE_ENVMAP
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
#endif`,jT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QT=`#ifdef USE_GRADIENTMAP
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
}`,JT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$T=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tA=`uniform bool receiveShadow;
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
#endif`,nA=`#ifdef USE_ENVMAP
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
#endif`,iA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oA=`PhysicalMaterial material;
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
#endif`,lA=`struct PhysicalMaterial {
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
}`,uA=`
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
#endif`,cA=`#if defined( RE_IndirectDiffuse )
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
#endif`,fA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_A=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xA=`#if defined( USE_POINTS_UV )
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
#endif`,yA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TA=`#ifdef USE_MORPHTARGETS
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
#endif`,AA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,wA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NA=`#ifdef USE_NORMALMAP
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
#endif`,LA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,YA=`float getShadowMask() {
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
}`,ZA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KA=`#ifdef USE_SKINNING
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
#endif`,QA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JA=`#ifdef USE_SKINNING
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
#endif`,$A=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i1=`#ifdef USE_TRANSMISSION
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
#endif`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c1=`uniform sampler2D t2D;
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
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`#include <common>
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
}`,g1=`#if DEPTH_PACKING == 3200
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
}`,v1=`#define DISTANCE
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
}`,_1=`#define DISTANCE
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
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`uniform float scale;
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
}`,M1=`#include <common>
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
}`,b1=`uniform vec3 diffuse;
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
}`,T1=`#define LAMBERT
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
}`,A1=`#define LAMBERT
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
}`,R1=`#define MATCAP
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
}`,w1=`#define NORMAL
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
}`,D1=`#define NORMAL
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
}`,U1=`#define PHONG
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
}`,N1=`#define PHONG
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
}`,L1=`#define STANDARD
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
}`,O1=`#define STANDARD
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
}`,P1=`#define TOON
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
}`,I1=`#define TOON
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
}`,F1=`uniform float size;
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
}`,B1=`uniform vec3 diffuse;
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
}`,z1=`#include <common>
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
}`,H1=`uniform vec3 color;
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
}`,G1=`uniform float rotation;
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
}`,V1=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:cT,alphahash_pars_fragment:fT,alphamap_fragment:hT,alphamap_pars_fragment:dT,alphatest_fragment:pT,alphatest_pars_fragment:mT,aomap_fragment:gT,aomap_pars_fragment:vT,batching_pars_vertex:_T,batching_vertex:xT,begin_vertex:yT,beginnormal_vertex:ST,bsdfs:ET,iridescence_fragment:MT,bumpmap_pars_fragment:bT,clipping_planes_fragment:TT,clipping_planes_pars_fragment:AT,clipping_planes_pars_vertex:RT,clipping_planes_vertex:CT,color_fragment:wT,color_pars_fragment:DT,color_pars_vertex:UT,color_vertex:NT,common:LT,cube_uv_reflection_fragment:OT,defaultnormal_vertex:PT,displacementmap_pars_vertex:IT,displacementmap_vertex:FT,emissivemap_fragment:BT,emissivemap_pars_fragment:zT,colorspace_fragment:HT,colorspace_pars_fragment:GT,envmap_fragment:VT,envmap_common_pars_fragment:kT,envmap_pars_fragment:XT,envmap_pars_vertex:WT,envmap_physical_pars_fragment:nA,envmap_vertex:qT,fog_vertex:jT,fog_pars_vertex:YT,fog_fragment:ZT,fog_pars_fragment:KT,gradientmap_pars_fragment:QT,lightmap_pars_fragment:JT,lights_lambert_fragment:$T,lights_lambert_pars_fragment:eA,lights_pars_begin:tA,lights_toon_fragment:iA,lights_toon_pars_fragment:aA,lights_phong_fragment:rA,lights_phong_pars_fragment:sA,lights_physical_fragment:oA,lights_physical_pars_fragment:lA,lights_fragment_begin:uA,lights_fragment_maps:cA,lights_fragment_end:fA,logdepthbuf_fragment:hA,logdepthbuf_pars_fragment:dA,logdepthbuf_pars_vertex:pA,logdepthbuf_vertex:mA,map_fragment:gA,map_pars_fragment:vA,map_particle_fragment:_A,map_particle_pars_fragment:xA,metalnessmap_fragment:yA,metalnessmap_pars_fragment:SA,morphinstance_vertex:EA,morphcolor_vertex:MA,morphnormal_vertex:bA,morphtarget_pars_vertex:TA,morphtarget_vertex:AA,normal_fragment_begin:RA,normal_fragment_maps:CA,normal_pars_fragment:wA,normal_pars_vertex:DA,normal_vertex:UA,normalmap_pars_fragment:NA,clearcoat_normal_fragment_begin:LA,clearcoat_normal_fragment_maps:OA,clearcoat_pars_fragment:PA,iridescence_pars_fragment:IA,opaque_fragment:FA,packing:BA,premultiplied_alpha_fragment:zA,project_vertex:HA,dithering_fragment:GA,dithering_pars_fragment:VA,roughnessmap_fragment:kA,roughnessmap_pars_fragment:XA,shadowmap_pars_fragment:WA,shadowmap_pars_vertex:qA,shadowmap_vertex:jA,shadowmask_pars_fragment:YA,skinbase_vertex:ZA,skinning_pars_vertex:KA,skinning_vertex:QA,skinnormal_vertex:JA,specularmap_fragment:$A,specularmap_pars_fragment:e1,tonemapping_fragment:t1,tonemapping_pars_fragment:n1,transmission_fragment:i1,transmission_pars_fragment:a1,uv_pars_fragment:r1,uv_pars_vertex:s1,uv_vertex:o1,worldpos_vertex:l1,background_vert:u1,background_frag:c1,backgroundCube_vert:f1,backgroundCube_frag:h1,cube_vert:d1,cube_frag:p1,depth_vert:m1,depth_frag:g1,distanceRGBA_vert:v1,distanceRGBA_frag:_1,equirect_vert:x1,equirect_frag:y1,linedashed_vert:S1,linedashed_frag:E1,meshbasic_vert:M1,meshbasic_frag:b1,meshlambert_vert:T1,meshlambert_frag:A1,meshmatcap_vert:R1,meshmatcap_frag:C1,meshnormal_vert:w1,meshnormal_frag:D1,meshphong_vert:U1,meshphong_frag:N1,meshphysical_vert:L1,meshphysical_frag:O1,meshtoon_vert:P1,meshtoon_frag:I1,points_vert:F1,points_frag:B1,shadow_vert:z1,shadow_frag:H1,sprite_vert:G1,sprite_frag:V1},Ie={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Fi={basic:{uniforms:Hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Mt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Hn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Hn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Mt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Hn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Hn([Ie.points,Ie.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Hn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Hn([Ie.common,Ie.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Hn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Hn([Ie.sprite,Ie.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Hn([Ie.common,Ie.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Hn([Ie.lights,Ie.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Fi.physical={uniforms:Hn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Vu={r:0,b:0,g:0},Sr=new _a,k1=new hn;function X1(a,e,n,r,l,u,f){const h=new Mt(0);let m=u===!0?0:1,p,g,v=null,x=0,S=null;function M(L){let U=L.isScene===!0?L.background:null;return U&&U.isTexture&&(U=(L.backgroundBlurriness>0?n:e).get(U)),U}function b(L){let U=!1;const P=M(L);P===null?_(h,m):P&&P.isColor&&(_(P,1),U=!0);const H=a.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(a.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(L,U){const P=M(U);P&&(P.isCubeTexture||P.mapping===dc)?(g===void 0&&(g=new da(new zs(1,1,1),new $a({name:"BackgroundCubeMaterial",uniforms:Is(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,z,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Sr.copy(U.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(k1.makeRotationFromEuler(Sr)),g.material.toneMapped=At.getTransfer(P.colorSpace)!==It,(v!==P||x!==P.version||S!==a.toneMapping)&&(g.material.needsUpdate=!0,v=P,x=P.version,S=a.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new da(new mc(2,2),new $a({name:"BackgroundMaterial",uniforms:Is(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=At.getTransfer(P.colorSpace)!==It,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||x!==P.version||S!==a.toneMapping)&&(p.material.needsUpdate=!0,v=P,x=P.version,S=a.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,U){L.getRGB(Vu,dx(a)),r.buffers.color.setClear(Vu.r,Vu.g,Vu.b,U,f)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,U=1){h.set(L),m=U,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(h,m)},render:b,addToRenderList:y,dispose:N}}function W1(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,f=!1;function h(D,V,te,ce,ve){let fe=!1;const I=v(ce,te,V);u!==I&&(u=I,p(u.object)),fe=S(D,ce,te,ve),fe&&M(D,ce,te,ve),ve!==null&&e.update(ve,a.ELEMENT_ARRAY_BUFFER),(fe||f)&&(f=!1,U(D,V,te,ce),ve!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ve).buffer))}function m(){return a.createVertexArray()}function p(D){return a.bindVertexArray(D)}function g(D){return a.deleteVertexArray(D)}function v(D,V,te){const ce=te.wireframe===!0;let ve=r[D.id];ve===void 0&&(ve={},r[D.id]=ve);let fe=ve[V.id];fe===void 0&&(fe={},ve[V.id]=fe);let I=fe[ce];return I===void 0&&(I=x(m()),fe[ce]=I),I}function x(D){const V=[],te=[],ce=[];for(let ve=0;ve<n;ve++)V[ve]=0,te[ve]=0,ce[ve]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:te,attributeDivisors:ce,object:D,attributes:{},index:null}}function S(D,V,te,ce){const ve=u.attributes,fe=V.attributes;let I=0;const W=te.getAttributes();for(const q in W)if(W[q].location>=0){const A=ve[q];let G=fe[q];if(G===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(G=D.instanceColor)),A===void 0||A.attribute!==G||G&&A.data!==G.data)return!0;I++}return u.attributesNum!==I||u.index!==ce}function M(D,V,te,ce){const ve={},fe=V.attributes;let I=0;const W=te.getAttributes();for(const q in W)if(W[q].location>=0){let A=fe[q];A===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(A=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(A=D.instanceColor));const G={};G.attribute=A,A&&A.data&&(G.data=A.data),ve[q]=G,I++}u.attributes=ve,u.attributesNum=I,u.index=ce}function b(){const D=u.newAttributes;for(let V=0,te=D.length;V<te;V++)D[V]=0}function y(D){_(D,0)}function _(D,V){const te=u.newAttributes,ce=u.enabledAttributes,ve=u.attributeDivisors;te[D]=1,ce[D]===0&&(a.enableVertexAttribArray(D),ce[D]=1),ve[D]!==V&&(a.vertexAttribDivisor(D,V),ve[D]=V)}function N(){const D=u.newAttributes,V=u.enabledAttributes;for(let te=0,ce=V.length;te<ce;te++)V[te]!==D[te]&&(a.disableVertexAttribArray(te),V[te]=0)}function L(D,V,te,ce,ve,fe,I){I===!0?a.vertexAttribIPointer(D,V,te,ve,fe):a.vertexAttribPointer(D,V,te,ce,ve,fe)}function U(D,V,te,ce){b();const ve=ce.attributes,fe=te.getAttributes(),I=V.defaultAttributeValues;for(const W in fe){const q=fe[W];if(q.location>=0){let xe=ve[W];if(xe===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),xe!==void 0){const A=xe.normalized,G=xe.itemSize,se=e.get(xe);if(se===void 0)continue;const le=se.buffer,Me=se.type,Ue=se.bytesPerElement,Q=Me===a.INT||Me===a.UNSIGNED_INT||xe.gpuType===pp;if(xe.isInterleavedBufferAttribute){const me=xe.data,be=me.stride,qe=xe.offset;if(me.isInstancedInterleavedBuffer){for(let He=0;He<q.locationSize;He++)_(q.location+He,me.meshPerAttribute);D.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let He=0;He<q.locationSize;He++)y(q.location+He);a.bindBuffer(a.ARRAY_BUFFER,le);for(let He=0;He<q.locationSize;He++)L(q.location+He,G/q.locationSize,Me,A,be*Ue,(qe+G/q.locationSize*He)*Ue,Q)}else{if(xe.isInstancedBufferAttribute){for(let me=0;me<q.locationSize;me++)_(q.location+me,xe.meshPerAttribute);D.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let me=0;me<q.locationSize;me++)y(q.location+me);a.bindBuffer(a.ARRAY_BUFFER,le);for(let me=0;me<q.locationSize;me++)L(q.location+me,G/q.locationSize,Me,A,G*Ue,G/q.locationSize*me*Ue,Q)}}else if(I!==void 0){const A=I[W];if(A!==void 0)switch(A.length){case 2:a.vertexAttrib2fv(q.location,A);break;case 3:a.vertexAttrib3fv(q.location,A);break;case 4:a.vertexAttrib4fv(q.location,A);break;default:a.vertexAttrib1fv(q.location,A)}}}}N()}function P(){Y();for(const D in r){const V=r[D];for(const te in V){const ce=V[te];for(const ve in ce)g(ce[ve].object),delete ce[ve];delete V[te]}delete r[D]}}function H(D){if(r[D.id]===void 0)return;const V=r[D.id];for(const te in V){const ce=V[te];for(const ve in ce)g(ce[ve].object),delete ce[ve];delete V[te]}delete r[D.id]}function z(D){for(const V in r){const te=r[V];if(te[D.id]===void 0)continue;const ce=te[D.id];for(const ve in ce)g(ce[ve].object),delete ce[ve];delete te[D.id]}}function Y(){w(),f=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:H,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:y,disableUnusedAttributes:N}}function q1(a,e,n){let r;function l(p){r=p}function u(p,g){a.drawArrays(r,p,g),n.update(g,r,1)}function f(p,g,v){v!==0&&(a.drawArraysInstanced(r,p,g,v),n.update(g,r,v))}function h(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let S=0;for(let M=0;M<v;M++)S+=g[M];n.update(S,r,1)}function m(p,g,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)f(p[M],g[M],x[M]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b]*x[b];n.update(M,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function j1(a,e,n,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=a.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Ri&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const Y=z===il&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==va&&r.convert(z)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ha&&!Y)}function m(z){if(z==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),_=a.getParameter(a.MAX_VERTEX_ATTRIBS),N=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),L=a.getParameter(a.MAX_VARYING_VECTORS),U=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),P=M>0,H=a.getParameter(a.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:U,vertexTextures:P,maxSamples:H}}function Y1(a){const e=this;let n=null,r=0,l=!1,u=!1;const f=new br,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||l;return l=x,r=v.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=g(v,x,0)},this.setState=function(v,x,S){const M=v.clippingPlanes,b=v.clipIntersection,y=v.clipShadows,_=a.get(v);if(!l||M===null||M.length===0||u&&!y)u?g(null):p();else{const N=u?0:r,L=N*4;let U=_.clippingState||null;m.value=U,U=g(M,x,L,S);for(let P=0;P!==L;++P)U[P]=n[P];_.clippingState=U,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,x,S,M){const b=v!==null?v.length:0;let y=null;if(b!==0){if(y=m.value,M!==!0||y===null){const _=S+b*4,N=x.matrixWorldInverse;h.getNormalMatrix(N),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,U=S;L!==b;++L,U+=4)f.copy(v[L]).applyMatrix4(N,h),f.normal.toArray(y,U),y[U+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function Z1(a){let e=new WeakMap;function n(f,h){return h===Md?f.mapping=Ls:h===bd&&(f.mapping=Os),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Md||h===bd)if(e.has(f)){const m=e.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Zb(m.height);return p.fromEquirectangularTexture(a,f),e.set(f,p),f.addEventListener("dispose",l),n(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const ws=4,V_=[.125,.215,.35,.446,.526,.582],Rr=20,td=new rT,k_=new Mt;let nd=null,id=0,ad=0,rd=!1;const Tr=(1+Math.sqrt(5))/2,Cs=1/Tr,X_=[new re(-Tr,Cs,0),new re(Tr,Cs,0),new re(-Cs,0,Tr),new re(Cs,0,Tr),new re(0,Tr,-Cs),new re(0,Tr,Cs),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)],K1=new re;class W_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,l=100,u={}){const{size:f=256,position:h=K1}=u;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=j_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nd,id,ad),this._renderer.xr.enabled=rd,e.scissorTest=!1,ku(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ls||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),ad=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:il,format:Ri,colorSpace:Ps,depthBuffer:!1},l=q_(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q_(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q1(u)),this._blurMaterial=J1(u,e,n)}return l}_compileMaterial(e){const n=new da(this._lodPlanes[0],e);this._renderer.compile(n,td)}_sceneToCubeUV(e,n,r,l,u){const m=new mi(90,1,n,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(k_),v.toneMapping=Qa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const b=new cx({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),y=new da(new zs,b);let _=!1;const N=e.background;N?N.isColor&&(b.color.copy(N),e.background=null,_=!0):(b.color.copy(k_),_=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[L],u.y,u.z)):U===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[L]));const P=this._cubeSize;ku(l,U*P,L>2?P:0,P,P),v.setRenderTarget(l),_&&v.render(y,m),v.render(e,m)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=N}_textureToCubeUV(e,n){const r=this._renderer,l=e.mapping===Ls||e.mapping===Os;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=j_());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new da(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;ku(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,td)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=X_[(l-u-1)%X_.length];this._blur(e,u-1,u,f,h)}n.autoClear=r}_blur(e,n,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,l,"latitudinal",u),this._halfBlur(f,e,r,r,l,"longitudinal",u)}_halfBlur(e,n,r,l,u,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new da(this._lodPlanes[l],p),x=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Rr-1),b=u/M,y=isFinite(u)?1+Math.floor(g*b):Rr;y>Rr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rr}`);const _=[];let N=0;for(let z=0;z<Rr;++z){const Y=z/b,w=Math.exp(-Y*Y/2);_.push(w),z===0?N+=w:z<y&&(N+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/N;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=f==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:L}=this;x.dTheta.value=M,x.mipInt.value=L-r;const U=this._sizeLods[l],P=3*U*(l>L-ws?l-L+ws:0),H=4*(this._cubeSize-U);ku(n,P,H,3*U,2*U),m.setRenderTarget(n),m.render(v,td)}}function Q1(a){const e=[],n=[],r=[];let l=a;const u=a-ws+1+V_.length;for(let f=0;f<u;f++){const h=Math.pow(2,l);n.push(h);let m=1/h;f>a-ws?m=V_[f-a+ws-1]:f===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,v=1+p,x=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,M=6,b=3,y=2,_=1,N=new Float32Array(b*M*S),L=new Float32Array(y*M*S),U=new Float32Array(_*M*S);for(let H=0;H<S;H++){const z=H%3*2/3-1,Y=H>2?0:-1,w=[z,Y,0,z+2/3,Y,0,z+2/3,Y+1,0,z,Y,0,z+2/3,Y+1,0,z,Y+1,0];N.set(w,b*M*H),L.set(x,y*M*H);const D=[H,H,H,H,H,H];U.set(D,_*M*H)}const P=new ki;P.setAttribute("position",new Hi(N,b)),P.setAttribute("uv",new Hi(L,y)),P.setAttribute("faceIndex",new Hi(U,_)),e.push(P),l>ws&&l--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function q_(a,e,n){const r=new Ur(a,e,n);return r.texture.mapping=dc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ku(a,e,n,r,l){a.viewport.set(e,n,r,l),a.scissor.set(e,n,r,l)}function J1(a,e,n){const r=new Float32Array(Rr),l=new re(0,1,0);return new $a({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function j_(){return new $a({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ep(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function Y_(){return new $a({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ep(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function Ep(){return`

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
	`}function $1(a){let e=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Md||m===bd,g=m===Ls||m===Os;if(p||g){let v=e.get(h);const x=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return n===null&&(n=new W_(a)),v=p?n.fromEquirectangular(h,v):n.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&l(S)?(n===null&&(n=new W_(a)),v=p?n.fromEquirectangular(h):n.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",u),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function eR(a){const e={};function n(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=a.getExtension(r)}return e[r]=l,l}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const l=n(r);return l===null&&Qo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function tR(a,e,n,r){const l={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",f),delete l[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function h(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,n.memory.geometries++),x}function m(v){const x=v.attributes;for(const S in x)e.update(x[S],a.ARRAY_BUFFER)}function p(v){const x=[],S=v.index,M=v.attributes.position;let b=0;if(S!==null){const N=S.array;b=S.version;for(let L=0,U=N.length;L<U;L+=3){const P=N[L+0],H=N[L+1],z=N[L+2];x.push(P,H,H,z,z,P)}}else if(M!==void 0){const N=M.array;b=M.version;for(let L=0,U=N.length/3-1;L<U;L+=3){const P=L+0,H=L+1,z=L+2;x.push(P,H,H,z,z,P)}}else return;const y=new(rx(x)?hx:fx)(x,1);y.version=b;const _=u.get(v);_&&e.remove(_),u.set(v,y)}function g(v){const x=u.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function nR(a,e,n){let r;function l(x){r=x}let u,f;function h(x){u=x.type,f=x.bytesPerElement}function m(x,S){a.drawElements(r,S,u,x*f),n.update(S,r,1)}function p(x,S,M){M!==0&&(a.drawElementsInstanced(r,S,u,x*f,M),n.update(S,r,M))}function g(x,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,M);let y=0;for(let _=0;_<M;_++)y+=S[_];n.update(y,r,1)}function v(x,S,M,b){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/f,S[_],b[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,b,0,M);let _=0;for(let N=0;N<M;N++)_+=S[N]*b[N];n.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function iR(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,h){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=h*(u/3);break;case a.LINES:n.lines+=h*(u/2);break;case a.LINE_STRIP:n.lines+=h*(u-1);break;case a.LINE_LOOP:n.lines+=h*u;break;case a.POINTS:n.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:l,update:r}}function aR(a,e,n){const r=new WeakMap,l=new rn;function u(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==v){let D=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var S=D;x!==void 0&&x.texture.dispose();const M=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let U=0;M===!0&&(U=1),b===!0&&(U=2),y===!0&&(U=3);let P=h.attributes.position.count*U,H=1;P>e.maxTextureSize&&(H=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const z=new Float32Array(P*H*4*v),Y=new sx(z,P,H,v);Y.type=ha,Y.needsUpdate=!0;const w=U*4;for(let V=0;V<v;V++){const te=_[V],ce=N[V],ve=L[V],fe=P*H*4*V;for(let I=0;I<te.count;I++){const W=I*w;M===!0&&(l.fromBufferAttribute(te,I),z[fe+W+0]=l.x,z[fe+W+1]=l.y,z[fe+W+2]=l.z,z[fe+W+3]=0),b===!0&&(l.fromBufferAttribute(ce,I),z[fe+W+4]=l.x,z[fe+W+5]=l.y,z[fe+W+6]=l.z,z[fe+W+7]=0),y===!0&&(l.fromBufferAttribute(ve,I),z[fe+W+8]=l.x,z[fe+W+9]=l.y,z[fe+W+10]=l.z,z[fe+W+11]=ve.itemSize===4?l.w:1)}}x={count:v,texture:Y,size:new Bt(P,H)},r.set(h,x),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const b=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(a,"morphTargetBaseInfluence",b),m.getUniforms().setValue(a,"morphTargetInfluences",p)}m.getUniforms().setValue(a,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",x.size)}return{update:u}}function rR(a,e,n,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(n.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,a.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:u,dispose:f}}const Sx=new Zn,Z_=new _x(1,1),Ex=new sx,Mx=new Nb,bx=new mx,K_=[],Q_=[],J_=new Float32Array(16),$_=new Float32Array(9),e0=new Float32Array(4);function Hs(a,e,n){const r=a[0];if(r<=0||r>0)return a;const l=e*n;let u=K_[l];if(u===void 0&&(u=new Float32Array(l),K_[l]=u),e!==0){r.toArray(u,0);for(let f=1,h=0;f!==e;++f)h+=n,a[f].toArray(u,h)}return u}function _n(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function xn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function gc(a,e){let n=Q_[e];n===void 0&&(n=new Int32Array(e),Q_[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function sR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function oR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;a.uniform2fv(this.addr,e),xn(n,e)}}function lR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_n(n,e))return;a.uniform3fv(this.addr,e),xn(n,e)}}function uR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;a.uniform4fv(this.addr,e),xn(n,e)}}function cR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),xn(n,e)}else{if(_n(n,r))return;e0.set(r),a.uniformMatrix2fv(this.addr,!1,e0),xn(n,r)}}function fR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),xn(n,e)}else{if(_n(n,r))return;$_.set(r),a.uniformMatrix3fv(this.addr,!1,$_),xn(n,r)}}function hR(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),xn(n,e)}else{if(_n(n,r))return;J_.set(r),a.uniformMatrix4fv(this.addr,!1,J_),xn(n,r)}}function dR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function pR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;a.uniform2iv(this.addr,e),xn(n,e)}}function mR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;a.uniform3iv(this.addr,e),xn(n,e)}}function gR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;a.uniform4iv(this.addr,e),xn(n,e)}}function vR(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function _R(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;a.uniform2uiv(this.addr,e),xn(n,e)}}function xR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;a.uniform3uiv(this.addr,e),xn(n,e)}}function yR(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;a.uniform4uiv(this.addr,e),xn(n,e)}}function SR(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l);let u;this.type===a.SAMPLER_2D_SHADOW?(Z_.compareFunction=ax,u=Z_):u=Sx,n.setTexture2D(e||u,l)}function ER(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTexture3D(e||Mx,l)}function MR(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTextureCube(e||bx,l)}function bR(a,e,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(a.uniform1i(this.addr,l),r[0]=l),n.setTexture2DArray(e||Ex,l)}function TR(a){switch(a){case 5126:return sR;case 35664:return oR;case 35665:return lR;case 35666:return uR;case 35674:return cR;case 35675:return fR;case 35676:return hR;case 5124:case 35670:return dR;case 35667:case 35671:return pR;case 35668:case 35672:return mR;case 35669:case 35673:return gR;case 5125:return vR;case 36294:return _R;case 36295:return xR;case 36296:return yR;case 35678:case 36198:case 36298:case 36306:case 35682:return SR;case 35679:case 36299:case 36307:return ER;case 35680:case 36300:case 36308:case 36293:return MR;case 36289:case 36303:case 36311:case 36292:return bR}}function AR(a,e){a.uniform1fv(this.addr,e)}function RR(a,e){const n=Hs(e,this.size,2);a.uniform2fv(this.addr,n)}function CR(a,e){const n=Hs(e,this.size,3);a.uniform3fv(this.addr,n)}function wR(a,e){const n=Hs(e,this.size,4);a.uniform4fv(this.addr,n)}function DR(a,e){const n=Hs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function UR(a,e){const n=Hs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function NR(a,e){const n=Hs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function LR(a,e){a.uniform1iv(this.addr,e)}function OR(a,e){a.uniform2iv(this.addr,e)}function PR(a,e){a.uniform3iv(this.addr,e)}function IR(a,e){a.uniform4iv(this.addr,e)}function FR(a,e){a.uniform1uiv(this.addr,e)}function BR(a,e){a.uniform2uiv(this.addr,e)}function zR(a,e){a.uniform3uiv(this.addr,e)}function HR(a,e){a.uniform4uiv(this.addr,e)}function GR(a,e,n){const r=this.cache,l=e.length,u=gc(n,l);_n(r,u)||(a.uniform1iv(this.addr,u),xn(r,u));for(let f=0;f!==l;++f)n.setTexture2D(e[f]||Sx,u[f])}function VR(a,e,n){const r=this.cache,l=e.length,u=gc(n,l);_n(r,u)||(a.uniform1iv(this.addr,u),xn(r,u));for(let f=0;f!==l;++f)n.setTexture3D(e[f]||Mx,u[f])}function kR(a,e,n){const r=this.cache,l=e.length,u=gc(n,l);_n(r,u)||(a.uniform1iv(this.addr,u),xn(r,u));for(let f=0;f!==l;++f)n.setTextureCube(e[f]||bx,u[f])}function XR(a,e,n){const r=this.cache,l=e.length,u=gc(n,l);_n(r,u)||(a.uniform1iv(this.addr,u),xn(r,u));for(let f=0;f!==l;++f)n.setTexture2DArray(e[f]||Ex,u[f])}function WR(a){switch(a){case 5126:return AR;case 35664:return RR;case 35665:return CR;case 35666:return wR;case 35674:return DR;case 35675:return UR;case 35676:return NR;case 5124:case 35670:return LR;case 35667:case 35671:return OR;case 35668:case 35672:return PR;case 35669:case 35673:return IR;case 5125:return FR;case 36294:return BR;case 36295:return zR;case 36296:return HR;case 35678:case 36198:case 36298:case 36306:case 35682:return GR;case 35679:case 36299:case 36307:return VR;case 35680:case 36300:case 36308:case 36293:return kR;case 36289:case 36303:case 36311:case 36292:return XR}}class qR{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=TR(n.type)}}class jR{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=WR(n.type)}}class YR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const h=l[u];h.setValue(e,n[h.id],r)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function t0(a,e){a.seq.push(e),a.map[e.id]=e}function ZR(a,e,n){const r=a.name,l=r.length;for(sd.lastIndex=0;;){const u=sd.exec(r),f=sd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){t0(n,p===void 0?new qR(h,a,e):new jR(h,a,e));break}else{let v=n.map[h];v===void 0&&(v=new YR(h),t0(n,v)),n=v}}}class $u{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(n,l),f=e.getUniformLocation(n,u.name);ZR(u,f,this)}}setValue(e,n,r,l){const u=this.map[n];u!==void 0&&u.setValue(e,r,l)}setOptional(e,n,r){const l=n[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,n,r,l){for(let u=0,f=n.length;u!==f;++u){const h=n[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,n){const r=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in n&&r.push(f)}return r}}function n0(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const KR=37297;let QR=0;function JR(a,e){const n=a.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=l;f<u;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${n[f]}`)}return r.join(`
`)}const i0=new ft;function $R(a){At._getMatrix(i0,At.workingColorSpace,a);const e=`mat3( ${i0.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(a)){case nc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function a0(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),u=(a.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+u+`

`+JR(a.getShaderSource(e),h)}else return u}function eC(a,e){const n=$R(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function tC(a,e){let n;switch(e){case rb:n="Linear";break;case sb:n="Reinhard";break;case ob:n="Cineon";break;case lb:n="ACESFilmic";break;case cb:n="AgX";break;case fb:n="Neutral";break;case ub:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xu=new re;function nC(){At.getLuminanceCoefficients(Xu);const a=Xu.x.toFixed(4),e=Xu.y.toFixed(4),n=Xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iC(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function aC(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function rC(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=a.getActiveAttrib(e,l),f=u.name;let h=1;u.type===a.FLOAT_MAT2&&(h=2),u.type===a.FLOAT_MAT3&&(h=3),u.type===a.FLOAT_MAT4&&(h=4),n[f]={type:u.type,location:a.getAttribLocation(e,f),locationSize:h}}return n}function Wo(a){return a!==""}function r0(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function s0(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sC=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(a){return a.replace(sC,lC)}const oC=new Map;function lC(a,e){let n=pt[e];if(n===void 0){const r=oC.get(e);if(r!==void 0)n=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return np(n)}const uC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o0(a){return a.replace(uC,cC)}function cC(a,e,n,r){let l="";for(let u=parseInt(e);u<parseInt(n);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function l0(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}function fC(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===j0?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===BM?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ca&&(e="SHADOWMAP_TYPE_VSM"),e}function hC(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Ls:case Os:e="ENVMAP_TYPE_CUBE";break;case dc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dC(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function pC(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Y0:e="ENVMAP_BLENDING_MULTIPLY";break;case ib:e="ENVMAP_BLENDING_MIX";break;case ab:e="ENVMAP_BLENDING_ADD";break}return e}function mC(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function gC(a,e,n,r){const l=a.getContext(),u=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=fC(n),p=hC(n),g=dC(n),v=pC(n),x=mC(n),S=iC(n),M=aC(u),b=l.createProgram();let y,_,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Wo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Wo).join(`
`),_.length>0&&(_+=`
`)):(y=[l0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),_=[l0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qa?"#define TONE_MAPPING":"",n.toneMapping!==Qa?pt.tonemapping_pars_fragment:"",n.toneMapping!==Qa?tC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,eC("linearToOutputTexel",n.outputColorSpace),nC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wo).join(`
`)),f=np(f),f=r0(f,n),f=s0(f,n),h=np(h),h=r0(h,n),h=s0(h,n),f=o0(f),h=o0(h),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",n.glslVersion===x_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===x_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=N+y+f,U=N+_+h,P=n0(l,l.VERTEX_SHADER,L),H=n0(l,l.FRAGMENT_SHADER,U);l.attachShader(b,P),l.attachShader(b,H),n.index0AttributeName!==void 0?l.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function z(V){if(a.debug.checkShaderErrors){const te=l.getProgramInfoLog(b)||"",ce=l.getShaderInfoLog(P)||"",ve=l.getShaderInfoLog(H)||"",fe=te.trim(),I=ce.trim(),W=ve.trim();let q=!0,xe=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(q=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(l,b,P,H);else{const A=a0(l,P,"vertex"),G=a0(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+fe+`
`+A+`
`+G)}else fe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",fe):(I===""||W==="")&&(xe=!1);xe&&(V.diagnostics={runnable:q,programLog:fe,vertexShader:{log:I,prefix:y},fragmentShader:{log:W,prefix:_}})}l.deleteShader(P),l.deleteShader(H),Y=new $u(l,b),w=rC(l,b)}let Y;this.getUniforms=function(){return Y===void 0&&z(this),Y};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(b,KR)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QR++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=H,this}let vC=0;class _C{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new xC(e),n.set(e,r)),r}}class xC{constructor(e){this.id=vC++,this.code=e,this.usedTimes=0}}function yC(a,e,n,r,l,u,f){const h=new lx,m=new _C,p=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,D,V,te,ce){const ve=te.fog,fe=ce.geometry,I=w.isMeshStandardMaterial?te.environment:null,W=(w.isMeshStandardMaterial?n:e).get(w.envMap||I),q=W&&W.mapping===dc?W.image.height:null,xe=M[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const A=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,G=A!==void 0?A.length:0;let se=0;fe.morphAttributes.position!==void 0&&(se=1),fe.morphAttributes.normal!==void 0&&(se=2),fe.morphAttributes.color!==void 0&&(se=3);let le,Me,Ue,Q;if(xe){const Et=Fi[xe];le=Et.vertexShader,Me=Et.fragmentShader}else le=w.vertexShader,Me=w.fragmentShader,m.update(w),Ue=m.getVertexShaderID(w),Q=m.getFragmentShaderID(w);const me=a.getRenderTarget(),be=a.state.buffers.depth.getReversed(),qe=ce.isInstancedMesh===!0,He=ce.isBatchedMesh===!0,je=!!w.map,kt=!!w.matcap,B=!!W,Ut=!!w.aoMap,ot=!!w.lightMap,at=!!w.bumpMap,Fe=!!w.normalMap,Gt=!!w.displacementMap,Xe=!!w.emissiveMap,lt=!!w.metalnessMap,Yt=!!w.roughnessMap,Zt=w.anisotropy>0,O=w.clearcoat>0,T=w.dispersion>0,ne=w.iridescence>0,pe=w.sheen>0,ye=w.transmission>0,he=Zt&&!!w.anisotropyMap,Be=O&&!!w.clearcoatMap,we=O&&!!w.clearcoatNormalMap,Ye=O&&!!w.clearcoatRoughnessMap,Ke=ne&&!!w.iridescenceMap,Te=ne&&!!w.iridescenceThicknessMap,Oe=pe&&!!w.sheenColorMap,Je=pe&&!!w.sheenRoughnessMap,We=!!w.specularMap,Ne=!!w.specularColorMap,ut=!!w.specularIntensityMap,X=ye&&!!w.transmissionMap,Ce=ye&&!!w.thicknessMap,De=!!w.gradientMap,ze=!!w.alphaMap,Ae=w.alphaTest>0,Ee=!!w.alphaHash,ke=!!w.extensions;let st=Qa;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(st=a.toneMapping);const Ct={shaderID:xe,shaderType:w.type,shaderName:w.name,vertexShader:le,fragmentShader:Me,defines:w.defines,customVertexShaderID:Ue,customFragmentShaderID:Q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:He,batchingColor:He&&ce._colorsTexture!==null,instancing:qe,instancingColor:qe&&ce.instanceColor!==null,instancingMorph:qe&&ce.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:me===null?a.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ps,alphaToCoverage:!!w.alphaToCoverage,map:je,matcap:kt,envMap:B,envMapMode:B&&W.mapping,envMapCubeUVHeight:q,aoMap:Ut,lightMap:ot,bumpMap:at,normalMap:Fe,displacementMap:x&&Gt,emissiveMap:Xe,normalMapObjectSpace:Fe&&w.normalMapType===gb,normalMapTangentSpace:Fe&&w.normalMapType===mb,metalnessMap:lt,roughnessMap:Yt,anisotropy:Zt,anisotropyMap:he,clearcoat:O,clearcoatMap:Be,clearcoatNormalMap:we,clearcoatRoughnessMap:Ye,dispersion:T,iridescence:ne,iridescenceMap:Ke,iridescenceThicknessMap:Te,sheen:pe,sheenColorMap:Oe,sheenRoughnessMap:Je,specularMap:We,specularColorMap:Ne,specularIntensityMap:ut,transmission:ye,transmissionMap:X,thicknessMap:Ce,gradientMap:De,opaque:w.transparent===!1&&w.blending===Ds&&w.alphaToCoverage===!1,alphaMap:ze,alphaTest:Ae,alphaHash:Ee,combine:w.combine,mapUv:je&&b(w.map.channel),aoMapUv:Ut&&b(w.aoMap.channel),lightMapUv:ot&&b(w.lightMap.channel),bumpMapUv:at&&b(w.bumpMap.channel),normalMapUv:Fe&&b(w.normalMap.channel),displacementMapUv:Gt&&b(w.displacementMap.channel),emissiveMapUv:Xe&&b(w.emissiveMap.channel),metalnessMapUv:lt&&b(w.metalnessMap.channel),roughnessMapUv:Yt&&b(w.roughnessMap.channel),anisotropyMapUv:he&&b(w.anisotropyMap.channel),clearcoatMapUv:Be&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:we&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Je&&b(w.sheenRoughnessMap.channel),specularMapUv:We&&b(w.specularMap.channel),specularColorMapUv:Ne&&b(w.specularColorMap.channel),specularIntensityMapUv:ut&&b(w.specularIntensityMap.channel),transmissionMapUv:X&&b(w.transmissionMap.channel),thicknessMapUv:Ce&&b(w.thicknessMap.channel),alphaMapUv:ze&&b(w.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Fe||Zt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!fe.attributes.uv&&(je||ze),fog:!!ve,useFog:w.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:be,skinning:ce.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:se,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&V.length>0,shadowMapType:a.shadowMap.type,toneMapping:st,decodeVideoTexture:je&&w.map.isVideoTexture===!0&&At.getTransfer(w.map.colorSpace)===It,decodeVideoTextureEmissive:Xe&&w.emissiveMap.isVideoTexture===!0&&At.getTransfer(w.emissiveMap.colorSpace)===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===fa,flipSided:w.side===Yn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ke&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&w.extensions.multiDraw===!0||He)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ct.vertexUv1s=p.has(1),Ct.vertexUv2s=p.has(2),Ct.vertexUv3s=p.has(3),p.clear(),Ct}function _(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)D.push(V),D.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(N(D,w),L(D,w),D.push(a.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function N(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function L(w,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),w.push(h.mask)}function U(w){const D=M[w.type];let V;if(D){const te=Fi[D];V=Wb.clone(te.uniforms)}else V=w.uniforms;return V}function P(w,D){let V;for(let te=0,ce=g.length;te<ce;te++){const ve=g[te];if(ve.cacheKey===D){V=ve,++V.usedTimes;break}}return V===void 0&&(V=new gC(a,D,w,u),g.push(V)),V}function H(w){if(--w.usedTimes===0){const D=g.indexOf(w);g[D]=g[g.length-1],g.pop(),w.destroy()}}function z(w){m.remove(w)}function Y(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:U,acquireProgram:P,releaseProgram:H,releaseShaderCache:z,programs:g,dispose:Y}}function SC(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let h=a.get(f);return h===void 0&&(h={},a.set(f,h)),h}function r(f){a.delete(f)}function l(f,h,m){a.get(f)[h]=m}function u(){a=new WeakMap}return{has:e,get:n,remove:r,update:l,dispose:u}}function EC(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function u0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function c0(){const a=[];let e=0;const n=[],r=[],l=[];function u(){e=0,n.length=0,r.length=0,l.length=0}function f(v,x,S,M,b,y){let _=a[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:M,renderOrder:v.renderOrder,z:b,group:y},a[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=M,_.renderOrder=v.renderOrder,_.z=b,_.group=y),e++,_}function h(v,x,S,M,b,y){const _=f(v,x,S,M,b,y);S.transmission>0?r.push(_):S.transparent===!0?l.push(_):n.push(_)}function m(v,x,S,M,b,y){const _=f(v,x,S,M,b,y);S.transmission>0?r.unshift(_):S.transparent===!0?l.unshift(_):n.unshift(_)}function p(v,x){n.length>1&&n.sort(v||EC),r.length>1&&r.sort(x||u0),l.length>1&&l.sort(x||u0)}function g(){for(let v=e,x=a.length;v<x;v++){const S=a[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function MC(){let a=new WeakMap;function e(r,l){const u=a.get(r);let f;return u===void 0?(f=new c0,a.set(r,[f])):l>=u.length?(f=new c0,u.push(f)):f=u[l],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function bC(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new re,color:new Mt};break;case"SpotLight":n={position:new re,direction:new re,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new re,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new re,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":n={color:new Mt,position:new re,halfWidth:new re,halfHeight:new re};break}return a[e.id]=n,n}}}function TC(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let AC=0;function RC(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function CC(a){const e=new bC,n=TC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new re);const l=new re,u=new hn,f=new hn;function h(p){let g=0,v=0,x=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let S=0,M=0,b=0,y=0,_=0,N=0,L=0,U=0,P=0,H=0,z=0;p.sort(RC);for(let w=0,D=p.length;w<D;w++){const V=p[w],te=V.color,ce=V.intensity,ve=V.distance,fe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=te.r*ce,v+=te.g*ce,x+=te.b*ce;else if(V.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(V.sh.coefficients[I],ce);z++}else if(V.isDirectionalLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const W=V.shadow,q=n.get(V);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,r.directionalShadow[S]=q,r.directionalShadowMap[S]=fe,r.directionalShadowMatrix[S]=V.shadow.matrix,N++}r.directional[S]=I,S++}else if(V.isSpotLight){const I=e.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(te).multiplyScalar(ce),I.distance=ve,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,r.spot[b]=I;const W=V.shadow;if(V.map&&(r.spotLightMap[P]=V.map,P++,W.updateMatrices(V),V.castShadow&&H++),r.spotLightMatrix[b]=W.matrix,V.castShadow){const q=n.get(V);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,r.spotShadow[b]=q,r.spotShadowMap[b]=fe,U++}b++}else if(V.isRectAreaLight){const I=e.get(V);I.color.copy(te).multiplyScalar(ce),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=I,y++}else if(V.isPointLight){const I=e.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const W=V.shadow,q=n.get(V);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,q.shadowCameraNear=W.camera.near,q.shadowCameraFar=W.camera.far,r.pointShadow[M]=q,r.pointShadowMap[M]=fe,r.pointShadowMatrix[M]=V.shadow.matrix,L++}r.point[M]=I,M++}else if(V.isHemisphereLight){const I=e.get(V);I.skyColor.copy(V.color).multiplyScalar(ce),I.groundColor.copy(V.groundColor).multiplyScalar(ce),r.hemi[_]=I,_++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const Y=r.hash;(Y.directionalLength!==S||Y.pointLength!==M||Y.spotLength!==b||Y.rectAreaLength!==y||Y.hemiLength!==_||Y.numDirectionalShadows!==N||Y.numPointShadows!==L||Y.numSpotShadows!==U||Y.numSpotMaps!==P||Y.numLightProbes!==z)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=y,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=U+P-H,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=z,Y.directionalLength=S,Y.pointLength=M,Y.spotLength=b,Y.rectAreaLength=y,Y.hemiLength=_,Y.numDirectionalShadows=N,Y.numPointShadows=L,Y.numSpotShadows=U,Y.numSpotMaps=P,Y.numLightProbes=z,r.version=AC++)}function m(p,g){let v=0,x=0,S=0,M=0,b=0;const y=g.matrixWorldInverse;for(let _=0,N=p.length;_<N;_++){const L=p[_];if(L.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),v++}else if(L.isSpotLight){const U=r.spot[S];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const U=r.rectArea[M];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),f.identity(),u.copy(L.matrixWorld),u.premultiply(y),f.extractRotation(u),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),M++}else if(L.isPointLight){const U=r.point[x];U.position.setFromMatrixPosition(L.matrixWorld),U.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const U=r.hemi[b];U.direction.setFromMatrixPosition(L.matrixWorld),U.direction.transformDirection(y),b++}}}return{setup:h,setupView:m,state:r}}function f0(a){const e=new CC(a),n=[],r=[];function l(g){p.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function f(g){r.push(g)}function h(){e.setup(n)}function m(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:f}}function wC(a){let e=new WeakMap;function n(l,u=0){const f=e.get(l);let h;return f===void 0?(h=new f0(a),e.set(l,[h])):u>=f.length?(h=new f0(a),f.push(h)):h=f[u],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const DC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UC=`uniform sampler2D shadow_pass;
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
}`;function NC(a,e,n){let r=new gx;const l=new Bt,u=new Bt,f=new rn,h=new iT({depthPacking:pb}),m=new aT,p={},g=n.maxTextureSize,v={[Ja]:Yn,[Yn]:Ja,[fa]:fa},x=new $a({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:DC,fragmentShader:UC}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const M=new ki;M.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new da(M,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=j0;let _=this.type;this.render=function(H,z,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const w=a.getRenderTarget(),D=a.getActiveCubeFace(),V=a.getActiveMipmapLevel(),te=a.state;te.setBlending(Ka),te.buffers.depth.getReversed()===!0?te.buffers.color.setClear(0,0,0,0):te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const ce=_!==ca&&this.type===ca,ve=_===ca&&this.type!==ca;for(let fe=0,I=H.length;fe<I;fe++){const W=H[fe],q=W.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const xe=q.getFrameExtents();if(l.multiply(xe),u.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/xe.x),l.x=u.x*xe.x,q.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/xe.y),l.y=u.y*xe.y,q.mapSize.y=u.y)),q.map===null||ce===!0||ve===!0){const G=this.type!==ca?{minFilter:Ci,magFilter:Ci}:{};q.map!==null&&q.map.dispose(),q.map=new Ur(l.x,l.y,G),q.map.texture.name=W.name+".shadowMap",q.camera.updateProjectionMatrix()}a.setRenderTarget(q.map),a.clear();const A=q.getViewportCount();for(let G=0;G<A;G++){const se=q.getViewport(G);f.set(u.x*se.x,u.y*se.y,u.x*se.z,u.y*se.w),te.viewport(f),q.updateMatrices(W,G),r=q.getFrustum(),U(z,Y,q.camera,W,this.type)}q.isPointLightShadow!==!0&&this.type===ca&&N(q,Y),q.needsUpdate=!1}_=this.type,y.needsUpdate=!1,a.setRenderTarget(w,D,V)};function N(H,z){const Y=e.update(b);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ur(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,a.setRenderTarget(H.mapPass),a.clear(),a.renderBufferDirect(z,null,Y,x,b,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,a.setRenderTarget(H.map),a.clear(),a.renderBufferDirect(z,null,Y,S,b,null)}function L(H,z,Y,w){let D=null;const V=Y.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)D=V;else if(D=Y.isPointLight===!0?m:h,a.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const te=D.uuid,ce=z.uuid;let ve=p[te];ve===void 0&&(ve={},p[te]=ve);let fe=ve[ce];fe===void 0&&(fe=D.clone(),ve[ce]=fe,z.addEventListener("dispose",P)),D=fe}if(D.visible=z.visible,D.wireframe=z.wireframe,w===ca?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:v[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,Y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const te=a.properties.get(D);te.light=Y}return D}function U(H,z,Y,w,D){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&D===ca)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,H.matrixWorld);const ce=e.update(H),ve=H.material;if(Array.isArray(ve)){const fe=ce.groups;for(let I=0,W=fe.length;I<W;I++){const q=fe[I],xe=ve[q.materialIndex];if(xe&&xe.visible){const A=L(H,xe,w,D);H.onBeforeShadow(a,H,z,Y,ce,A,q),a.renderBufferDirect(Y,null,ce,A,H,q),H.onAfterShadow(a,H,z,Y,ce,A,q)}}}else if(ve.visible){const fe=L(H,ve,w,D);H.onBeforeShadow(a,H,z,Y,ce,fe,null),a.renderBufferDirect(Y,null,ce,fe,H,null),H.onAfterShadow(a,H,z,Y,ce,fe,null)}}const te=H.children;for(let ce=0,ve=te.length;ce<ve;ce++)U(te[ce],z,Y,w,D)}function P(H){H.target.removeEventListener("dispose",P);for(const Y in p){const w=p[Y],D=H.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}const LC={[gd]:vd,[_d]:Sd,[xd]:Ed,[Ns]:yd,[vd]:gd,[Sd]:_d,[Ed]:xd,[yd]:Ns};function OC(a,e){function n(){let X=!1;const Ce=new rn;let De=null;const ze=new rn(0,0,0,0);return{setMask:function(Ae){De!==Ae&&!X&&(a.colorMask(Ae,Ae,Ae,Ae),De=Ae)},setLocked:function(Ae){X=Ae},setClear:function(Ae,Ee,ke,st,Ct){Ct===!0&&(Ae*=st,Ee*=st,ke*=st),Ce.set(Ae,Ee,ke,st),ze.equals(Ce)===!1&&(a.clearColor(Ae,Ee,ke,st),ze.copy(Ce))},reset:function(){X=!1,De=null,ze.set(-1,0,0,0)}}}function r(){let X=!1,Ce=!1,De=null,ze=null,Ae=null;return{setReversed:function(Ee){if(Ce!==Ee){const ke=e.get("EXT_clip_control");Ee?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Ce=Ee;const st=Ae;Ae=null,this.setClear(st)}},getReversed:function(){return Ce},setTest:function(Ee){Ee?me(a.DEPTH_TEST):be(a.DEPTH_TEST)},setMask:function(Ee){De!==Ee&&!X&&(a.depthMask(Ee),De=Ee)},setFunc:function(Ee){if(Ce&&(Ee=LC[Ee]),ze!==Ee){switch(Ee){case gd:a.depthFunc(a.NEVER);break;case vd:a.depthFunc(a.ALWAYS);break;case _d:a.depthFunc(a.LESS);break;case Ns:a.depthFunc(a.LEQUAL);break;case xd:a.depthFunc(a.EQUAL);break;case yd:a.depthFunc(a.GEQUAL);break;case Sd:a.depthFunc(a.GREATER);break;case Ed:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}ze=Ee}},setLocked:function(Ee){X=Ee},setClear:function(Ee){Ae!==Ee&&(Ce&&(Ee=1-Ee),a.clearDepth(Ee),Ae=Ee)},reset:function(){X=!1,De=null,ze=null,Ae=null,Ce=!1}}}function l(){let X=!1,Ce=null,De=null,ze=null,Ae=null,Ee=null,ke=null,st=null,Ct=null;return{setTest:function(Et){X||(Et?me(a.STENCIL_TEST):be(a.STENCIL_TEST))},setMask:function(Et){Ce!==Et&&!X&&(a.stencilMask(Et),Ce=Et)},setFunc:function(Et,_i,dn){(De!==Et||ze!==_i||Ae!==dn)&&(a.stencilFunc(Et,_i,dn),De=Et,ze=_i,Ae=dn)},setOp:function(Et,_i,dn){(Ee!==Et||ke!==_i||st!==dn)&&(a.stencilOp(Et,_i,dn),Ee=Et,ke=_i,st=dn)},setLocked:function(Et){X=Et},setClear:function(Et){Ct!==Et&&(a.clearStencil(Et),Ct=Et)},reset:function(){X=!1,Ce=null,De=null,ze=null,Ae=null,Ee=null,ke=null,st=null,Ct=null}}}const u=new n,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},x=new WeakMap,S=[],M=null,b=!1,y=null,_=null,N=null,L=null,U=null,P=null,H=null,z=new Mt(0,0,0),Y=0,w=!1,D=null,V=null,te=null,ce=null,ve=null;const fe=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,W=0;const q=a.getParameter(a.VERSION);q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(q)[1]),I=W>=1):q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),I=W>=2);let xe=null,A={};const G=a.getParameter(a.SCISSOR_BOX),se=a.getParameter(a.VIEWPORT),le=new rn().fromArray(G),Me=new rn().fromArray(se);function Ue(X,Ce,De,ze){const Ae=new Uint8Array(4),Ee=a.createTexture();a.bindTexture(X,Ee),a.texParameteri(X,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(X,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let ke=0;ke<De;ke++)X===a.TEXTURE_3D||X===a.TEXTURE_2D_ARRAY?a.texImage3D(Ce,0,a.RGBA,1,1,ze,0,a.RGBA,a.UNSIGNED_BYTE,Ae):a.texImage2D(Ce+ke,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ae);return Ee}const Q={};Q[a.TEXTURE_2D]=Ue(a.TEXTURE_2D,a.TEXTURE_2D,1),Q[a.TEXTURE_CUBE_MAP]=Ue(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[a.TEXTURE_2D_ARRAY]=Ue(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Q[a.TEXTURE_3D]=Ue(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),me(a.DEPTH_TEST),f.setFunc(Ns),at(!1),Fe(d_),me(a.CULL_FACE),Ut(Ka);function me(X){g[X]!==!0&&(a.enable(X),g[X]=!0)}function be(X){g[X]!==!1&&(a.disable(X),g[X]=!1)}function qe(X,Ce){return v[X]!==Ce?(a.bindFramebuffer(X,Ce),v[X]=Ce,X===a.DRAW_FRAMEBUFFER&&(v[a.FRAMEBUFFER]=Ce),X===a.FRAMEBUFFER&&(v[a.DRAW_FRAMEBUFFER]=Ce),!0):!1}function He(X,Ce){let De=S,ze=!1;if(X){De=x.get(Ce),De===void 0&&(De=[],x.set(Ce,De));const Ae=X.textures;if(De.length!==Ae.length||De[0]!==a.COLOR_ATTACHMENT0){for(let Ee=0,ke=Ae.length;Ee<ke;Ee++)De[Ee]=a.COLOR_ATTACHMENT0+Ee;De.length=Ae.length,ze=!0}}else De[0]!==a.BACK&&(De[0]=a.BACK,ze=!0);ze&&a.drawBuffers(De)}function je(X){return M!==X?(a.useProgram(X),M=X,!0):!1}const kt={[Ar]:a.FUNC_ADD,[HM]:a.FUNC_SUBTRACT,[GM]:a.FUNC_REVERSE_SUBTRACT};kt[VM]=a.MIN,kt[kM]=a.MAX;const B={[XM]:a.ZERO,[WM]:a.ONE,[qM]:a.SRC_COLOR,[pd]:a.SRC_ALPHA,[JM]:a.SRC_ALPHA_SATURATE,[KM]:a.DST_COLOR,[YM]:a.DST_ALPHA,[jM]:a.ONE_MINUS_SRC_COLOR,[md]:a.ONE_MINUS_SRC_ALPHA,[QM]:a.ONE_MINUS_DST_COLOR,[ZM]:a.ONE_MINUS_DST_ALPHA,[$M]:a.CONSTANT_COLOR,[eb]:a.ONE_MINUS_CONSTANT_COLOR,[tb]:a.CONSTANT_ALPHA,[nb]:a.ONE_MINUS_CONSTANT_ALPHA};function Ut(X,Ce,De,ze,Ae,Ee,ke,st,Ct,Et){if(X===Ka){b===!0&&(be(a.BLEND),b=!1);return}if(b===!1&&(me(a.BLEND),b=!0),X!==zM){if(X!==y||Et!==w){if((_!==Ar||U!==Ar)&&(a.blendEquation(a.FUNC_ADD),_=Ar,U=Ar),Et)switch(X){case Ds:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case p_:a.blendFunc(a.ONE,a.ONE);break;case m_:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case g_:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ds:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case p_:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case m_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}N=null,L=null,P=null,H=null,z.set(0,0,0),Y=0,y=X,w=Et}return}Ae=Ae||Ce,Ee=Ee||De,ke=ke||ze,(Ce!==_||Ae!==U)&&(a.blendEquationSeparate(kt[Ce],kt[Ae]),_=Ce,U=Ae),(De!==N||ze!==L||Ee!==P||ke!==H)&&(a.blendFuncSeparate(B[De],B[ze],B[Ee],B[ke]),N=De,L=ze,P=Ee,H=ke),(st.equals(z)===!1||Ct!==Y)&&(a.blendColor(st.r,st.g,st.b,Ct),z.copy(st),Y=Ct),y=X,w=!1}function ot(X,Ce){X.side===fa?be(a.CULL_FACE):me(a.CULL_FACE);let De=X.side===Yn;Ce&&(De=!De),at(De),X.blending===Ds&&X.transparent===!1?Ut(Ka):Ut(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),u.setMask(X.colorWrite);const ze=X.stencilWrite;h.setTest(ze),ze&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Xe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?me(a.SAMPLE_ALPHA_TO_COVERAGE):be(a.SAMPLE_ALPHA_TO_COVERAGE)}function at(X){D!==X&&(X?a.frontFace(a.CW):a.frontFace(a.CCW),D=X)}function Fe(X){X!==IM?(me(a.CULL_FACE),X!==V&&(X===d_?a.cullFace(a.BACK):X===FM?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):be(a.CULL_FACE),V=X}function Gt(X){X!==te&&(I&&a.lineWidth(X),te=X)}function Xe(X,Ce,De){X?(me(a.POLYGON_OFFSET_FILL),(ce!==Ce||ve!==De)&&(a.polygonOffset(Ce,De),ce=Ce,ve=De)):be(a.POLYGON_OFFSET_FILL)}function lt(X){X?me(a.SCISSOR_TEST):be(a.SCISSOR_TEST)}function Yt(X){X===void 0&&(X=a.TEXTURE0+fe-1),xe!==X&&(a.activeTexture(X),xe=X)}function Zt(X,Ce,De){De===void 0&&(xe===null?De=a.TEXTURE0+fe-1:De=xe);let ze=A[De];ze===void 0&&(ze={type:void 0,texture:void 0},A[De]=ze),(ze.type!==X||ze.texture!==Ce)&&(xe!==De&&(a.activeTexture(De),xe=De),a.bindTexture(X,Ce||Q[X]),ze.type=X,ze.texture=Ce)}function O(){const X=A[xe];X!==void 0&&X.type!==void 0&&(a.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{a.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ne(){try{a.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pe(){try{a.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ye(){try{a.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{a.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Be(){try{a.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function we(){try{a.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ye(){try{a.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ke(){try{a.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(){try{a.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(X){le.equals(X)===!1&&(a.scissor(X.x,X.y,X.z,X.w),le.copy(X))}function Je(X){Me.equals(X)===!1&&(a.viewport(X.x,X.y,X.z,X.w),Me.copy(X))}function We(X,Ce){let De=p.get(Ce);De===void 0&&(De=new WeakMap,p.set(Ce,De));let ze=De.get(X);ze===void 0&&(ze=a.getUniformBlockIndex(Ce,X.name),De.set(X,ze))}function Ne(X,Ce){const ze=p.get(Ce).get(X);m.get(Ce)!==ze&&(a.uniformBlockBinding(Ce,ze,X.__bindingPointIndex),m.set(Ce,ze))}function ut(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},xe=null,A={},v={},x=new WeakMap,S=[],M=null,b=!1,y=null,_=null,N=null,L=null,U=null,P=null,H=null,z=new Mt(0,0,0),Y=0,w=!1,D=null,V=null,te=null,ce=null,ve=null,le.set(0,0,a.canvas.width,a.canvas.height),Me.set(0,0,a.canvas.width,a.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:me,disable:be,bindFramebuffer:qe,drawBuffers:He,useProgram:je,setBlending:Ut,setMaterial:ot,setFlipSided:at,setCullFace:Fe,setLineWidth:Gt,setPolygonOffset:Xe,setScissorTest:lt,activeTexture:Yt,bindTexture:Zt,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:ne,texImage2D:Ke,texImage3D:Te,updateUBOMapping:We,uniformBlockBinding:Ne,texStorage2D:we,texStorage3D:Ye,texSubImage2D:pe,texSubImage3D:ye,compressedTexSubImage2D:he,compressedTexSubImage3D:Be,scissor:Oe,viewport:Je,reset:ut}}function PC(a,e,n,r,l,u,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Bt,g=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,T){return S?new OffscreenCanvas(O,T):ac("canvas")}function b(O,T,ne){let pe=1;const ye=Zt(O);if((ye.width>ne||ye.height>ne)&&(pe=ne/Math.max(ye.width,ye.height)),pe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const he=Math.floor(pe*ye.width),Be=Math.floor(pe*ye.height);v===void 0&&(v=M(he,Be));const we=T?M(he,Be):v;return we.width=he,we.height=Be,we.getContext("2d").drawImage(O,0,0,he,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+he+"x"+Be+")."),we}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),O;return O}function y(O){return O.generateMipmaps}function _(O){a.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?a.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function L(O,T,ne,pe,ye=!1){if(O!==null){if(a[O]!==void 0)return a[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he=T;if(T===a.RED&&(ne===a.FLOAT&&(he=a.R32F),ne===a.HALF_FLOAT&&(he=a.R16F),ne===a.UNSIGNED_BYTE&&(he=a.R8)),T===a.RED_INTEGER&&(ne===a.UNSIGNED_BYTE&&(he=a.R8UI),ne===a.UNSIGNED_SHORT&&(he=a.R16UI),ne===a.UNSIGNED_INT&&(he=a.R32UI),ne===a.BYTE&&(he=a.R8I),ne===a.SHORT&&(he=a.R16I),ne===a.INT&&(he=a.R32I)),T===a.RG&&(ne===a.FLOAT&&(he=a.RG32F),ne===a.HALF_FLOAT&&(he=a.RG16F),ne===a.UNSIGNED_BYTE&&(he=a.RG8)),T===a.RG_INTEGER&&(ne===a.UNSIGNED_BYTE&&(he=a.RG8UI),ne===a.UNSIGNED_SHORT&&(he=a.RG16UI),ne===a.UNSIGNED_INT&&(he=a.RG32UI),ne===a.BYTE&&(he=a.RG8I),ne===a.SHORT&&(he=a.RG16I),ne===a.INT&&(he=a.RG32I)),T===a.RGB_INTEGER&&(ne===a.UNSIGNED_BYTE&&(he=a.RGB8UI),ne===a.UNSIGNED_SHORT&&(he=a.RGB16UI),ne===a.UNSIGNED_INT&&(he=a.RGB32UI),ne===a.BYTE&&(he=a.RGB8I),ne===a.SHORT&&(he=a.RGB16I),ne===a.INT&&(he=a.RGB32I)),T===a.RGBA_INTEGER&&(ne===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),ne===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),ne===a.UNSIGNED_INT&&(he=a.RGBA32UI),ne===a.BYTE&&(he=a.RGBA8I),ne===a.SHORT&&(he=a.RGBA16I),ne===a.INT&&(he=a.RGBA32I)),T===a.RGB&&(ne===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),ne===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),T===a.RGBA){const Be=ye?nc:At.getTransfer(pe);ne===a.FLOAT&&(he=a.RGBA32F),ne===a.HALF_FLOAT&&(he=a.RGBA16F),ne===a.UNSIGNED_BYTE&&(he=Be===It?a.SRGB8_ALPHA8:a.RGBA8),ne===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),ne===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function U(O,T){let ne;return O?T===null||T===Dr||T===Yo?ne=a.DEPTH24_STENCIL8:T===ha?ne=a.DEPTH32F_STENCIL8:T===jo&&(ne=a.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Dr||T===Yo?ne=a.DEPTH_COMPONENT24:T===ha?ne=a.DEPTH_COMPONENT32F:T===jo&&(ne=a.DEPTH_COMPONENT16),ne}function P(O,T){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ci&&O.minFilter!==Bi?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function H(O){const T=O.target;T.removeEventListener("dispose",H),Y(T),T.isVideoTexture&&g.delete(T)}function z(O){const T=O.target;T.removeEventListener("dispose",z),D(T)}function Y(O){const T=r.get(O);if(T.__webglInit===void 0)return;const ne=O.source,pe=x.get(ne);if(pe){const ye=pe[T.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&w(O),Object.keys(pe).length===0&&x.delete(ne)}r.remove(O)}function w(O){const T=r.get(O);a.deleteTexture(T.__webglTexture);const ne=O.source,pe=x.get(ne);delete pe[T.__cacheKey],f.memory.textures--}function D(O){const T=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ye=0;ye<T.__webglFramebuffer[pe].length;ye++)a.deleteFramebuffer(T.__webglFramebuffer[pe][ye]);else a.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)a.deleteFramebuffer(T.__webglFramebuffer[pe]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ne=O.textures;for(let pe=0,ye=ne.length;pe<ye;pe++){const he=r.get(ne[pe]);he.__webglTexture&&(a.deleteTexture(he.__webglTexture),f.memory.textures--),r.remove(ne[pe])}r.remove(O)}let V=0;function te(){V=0}function ce(){const O=V;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),V+=1,O}function ve(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function fe(O,T){const ne=r.get(O);if(O.isVideoTexture&&lt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ne.__version!==O.version){const pe=O.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(ne,O,T);return}}else O.isExternalTexture&&(ne.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,ne.__webglTexture,a.TEXTURE0+T)}function I(O,T){const ne=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ne.__version!==O.version){Q(ne,O,T);return}n.bindTexture(a.TEXTURE_2D_ARRAY,ne.__webglTexture,a.TEXTURE0+T)}function W(O,T){const ne=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ne.__version!==O.version){Q(ne,O,T);return}n.bindTexture(a.TEXTURE_3D,ne.__webglTexture,a.TEXTURE0+T)}function q(O,T){const ne=r.get(O);if(O.version>0&&ne.__version!==O.version){me(ne,O,T);return}n.bindTexture(a.TEXTURE_CUBE_MAP,ne.__webglTexture,a.TEXTURE0+T)}const xe={[Td]:a.REPEAT,[Cr]:a.CLAMP_TO_EDGE,[Ad]:a.MIRRORED_REPEAT},A={[Ci]:a.NEAREST,[hb]:a.NEAREST_MIPMAP_NEAREST,[xu]:a.NEAREST_MIPMAP_LINEAR,[Bi]:a.LINEAR,[wh]:a.LINEAR_MIPMAP_NEAREST,[wr]:a.LINEAR_MIPMAP_LINEAR},G={[vb]:a.NEVER,[Mb]:a.ALWAYS,[_b]:a.LESS,[ax]:a.LEQUAL,[xb]:a.EQUAL,[Eb]:a.GEQUAL,[yb]:a.GREATER,[Sb]:a.NOTEQUAL};function se(O,T){if(T.type===ha&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Bi||T.magFilter===wh||T.magFilter===xu||T.magFilter===wr||T.minFilter===Bi||T.minFilter===wh||T.minFilter===xu||T.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(O,a.TEXTURE_WRAP_S,xe[T.wrapS]),a.texParameteri(O,a.TEXTURE_WRAP_T,xe[T.wrapT]),(O===a.TEXTURE_3D||O===a.TEXTURE_2D_ARRAY)&&a.texParameteri(O,a.TEXTURE_WRAP_R,xe[T.wrapR]),a.texParameteri(O,a.TEXTURE_MAG_FILTER,A[T.magFilter]),a.texParameteri(O,a.TEXTURE_MIN_FILTER,A[T.minFilter]),T.compareFunction&&(a.texParameteri(O,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(O,a.TEXTURE_COMPARE_FUNC,G[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ci||T.minFilter!==xu&&T.minFilter!==wr||T.type===ha&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");a.texParameterf(O,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function le(O,T){let ne=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",H));const pe=T.source;let ye=x.get(pe);ye===void 0&&(ye={},x.set(pe,ye));const he=ve(T);if(he!==O.__cacheKey){ye[he]===void 0&&(ye[he]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,ne=!0),ye[he].usedTimes++;const Be=ye[O.__cacheKey];Be!==void 0&&(ye[O.__cacheKey].usedTimes--,Be.usedTimes===0&&w(T)),O.__cacheKey=he,O.__webglTexture=ye[he].texture}return ne}function Me(O,T,ne){return Math.floor(Math.floor(O/ne)/T)}function Ue(O,T,ne,pe){const he=O.updateRanges;if(he.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,ne,pe,T.data);else{he.sort((Te,Oe)=>Te.start-Oe.start);let Be=0;for(let Te=1;Te<he.length;Te++){const Oe=he[Be],Je=he[Te],We=Oe.start+Oe.count,Ne=Me(Je.start,T.width,4),ut=Me(Oe.start,T.width,4);Je.start<=We+1&&Ne===ut&&Me(Je.start+Je.count-1,T.width,4)===Ne?Oe.count=Math.max(Oe.count,Je.start+Je.count-Oe.start):(++Be,he[Be]=Je)}he.length=Be+1;const we=a.getParameter(a.UNPACK_ROW_LENGTH),Ye=a.getParameter(a.UNPACK_SKIP_PIXELS),Ke=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let Te=0,Oe=he.length;Te<Oe;Te++){const Je=he[Te],We=Math.floor(Je.start/4),Ne=Math.ceil(Je.count/4),ut=We%T.width,X=Math.floor(We/T.width),Ce=Ne,De=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,ut),a.pixelStorei(a.UNPACK_SKIP_ROWS,X),n.texSubImage2D(a.TEXTURE_2D,0,ut,X,Ce,De,ne,pe,T.data)}O.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,we),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Ye),a.pixelStorei(a.UNPACK_SKIP_ROWS,Ke)}}function Q(O,T,ne){let pe=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=a.TEXTURE_3D);const ye=le(O,T),he=T.source;n.bindTexture(pe,O.__webglTexture,a.TEXTURE0+ne);const Be=r.get(he);if(he.version!==Be.__version||ye===!0){n.activeTexture(a.TEXTURE0+ne);const we=At.getPrimaries(At.workingColorSpace),Ye=T.colorSpace===Za?null:At.getPrimaries(T.colorSpace),Ke=T.colorSpace===Za||we===Ye?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let Te=b(T.image,!1,l.maxTextureSize);Te=Yt(T,Te);const Oe=u.convert(T.format,T.colorSpace),Je=u.convert(T.type);let We=L(T.internalFormat,Oe,Je,T.colorSpace,T.isVideoTexture);se(pe,T);let Ne;const ut=T.mipmaps,X=T.isVideoTexture!==!0,Ce=Be.__version===void 0||ye===!0,De=he.dataReady,ze=P(T,Te);if(T.isDepthTexture)We=U(T.format===Ko,T.type),Ce&&(X?n.texStorage2D(a.TEXTURE_2D,1,We,Te.width,Te.height):n.texImage2D(a.TEXTURE_2D,0,We,Te.width,Te.height,0,Oe,Je,null));else if(T.isDataTexture)if(ut.length>0){X&&Ce&&n.texStorage2D(a.TEXTURE_2D,ze,We,ut[0].width,ut[0].height);for(let Ae=0,Ee=ut.length;Ae<Ee;Ae++)Ne=ut[Ae],X?De&&n.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Ne.width,Ne.height,Oe,Je,Ne.data):n.texImage2D(a.TEXTURE_2D,Ae,We,Ne.width,Ne.height,0,Oe,Je,Ne.data);T.generateMipmaps=!1}else X?(Ce&&n.texStorage2D(a.TEXTURE_2D,ze,We,Te.width,Te.height),De&&Ue(T,Te,Oe,Je)):n.texImage2D(a.TEXTURE_2D,0,We,Te.width,Te.height,0,Oe,Je,Te.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Ce&&n.texStorage3D(a.TEXTURE_2D_ARRAY,ze,We,ut[0].width,ut[0].height,Te.depth);for(let Ae=0,Ee=ut.length;Ae<Ee;Ae++)if(Ne=ut[Ae],T.format!==Ri)if(Oe!==null)if(X){if(De)if(T.layerUpdates.size>0){const ke=G_(Ne.width,Ne.height,T.format,T.type);for(const st of T.layerUpdates){const Ct=Ne.data.subarray(st*ke/Ne.data.BYTES_PER_ELEMENT,(st+1)*ke/Ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,st,Ne.width,Ne.height,1,Oe,Ct)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,0,Ne.width,Ne.height,Te.depth,Oe,Ne.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,Ae,We,Ne.width,Ne.height,Te.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?De&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,Ae,0,0,0,Ne.width,Ne.height,Te.depth,Oe,Je,Ne.data):n.texImage3D(a.TEXTURE_2D_ARRAY,Ae,We,Ne.width,Ne.height,Te.depth,0,Oe,Je,Ne.data)}else{X&&Ce&&n.texStorage2D(a.TEXTURE_2D,ze,We,ut[0].width,ut[0].height);for(let Ae=0,Ee=ut.length;Ae<Ee;Ae++)Ne=ut[Ae],T.format!==Ri?Oe!==null?X?De&&n.compressedTexSubImage2D(a.TEXTURE_2D,Ae,0,0,Ne.width,Ne.height,Oe,Ne.data):n.compressedTexImage2D(a.TEXTURE_2D,Ae,We,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?De&&n.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Ne.width,Ne.height,Oe,Je,Ne.data):n.texImage2D(a.TEXTURE_2D,Ae,We,Ne.width,Ne.height,0,Oe,Je,Ne.data)}else if(T.isDataArrayTexture)if(X){if(Ce&&n.texStorage3D(a.TEXTURE_2D_ARRAY,ze,We,Te.width,Te.height,Te.depth),De)if(T.layerUpdates.size>0){const Ae=G_(Te.width,Te.height,T.format,T.type);for(const Ee of T.layerUpdates){const ke=Te.data.subarray(Ee*Ae/Te.data.BYTES_PER_ELEMENT,(Ee+1)*Ae/Te.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ee,Te.width,Te.height,1,Oe,Je,ke)}T.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Oe,Je,Te.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,We,Te.width,Te.height,Te.depth,0,Oe,Je,Te.data);else if(T.isData3DTexture)X?(Ce&&n.texStorage3D(a.TEXTURE_3D,ze,We,Te.width,Te.height,Te.depth),De&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Oe,Je,Te.data)):n.texImage3D(a.TEXTURE_3D,0,We,Te.width,Te.height,Te.depth,0,Oe,Je,Te.data);else if(T.isFramebufferTexture){if(Ce)if(X)n.texStorage2D(a.TEXTURE_2D,ze,We,Te.width,Te.height);else{let Ae=Te.width,Ee=Te.height;for(let ke=0;ke<ze;ke++)n.texImage2D(a.TEXTURE_2D,ke,We,Ae,Ee,0,Oe,Je,null),Ae>>=1,Ee>>=1}}else if(ut.length>0){if(X&&Ce){const Ae=Zt(ut[0]);n.texStorage2D(a.TEXTURE_2D,ze,We,Ae.width,Ae.height)}for(let Ae=0,Ee=ut.length;Ae<Ee;Ae++)Ne=ut[Ae],X?De&&n.texSubImage2D(a.TEXTURE_2D,Ae,0,0,Oe,Je,Ne):n.texImage2D(a.TEXTURE_2D,Ae,We,Oe,Je,Ne);T.generateMipmaps=!1}else if(X){if(Ce){const Ae=Zt(Te);n.texStorage2D(a.TEXTURE_2D,ze,We,Ae.width,Ae.height)}De&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,Oe,Je,Te)}else n.texImage2D(a.TEXTURE_2D,0,We,Oe,Je,Te);y(T)&&_(pe),Be.__version=he.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function me(O,T,ne){if(T.image.length!==6)return;const pe=le(O,T),ye=T.source;n.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+ne);const he=r.get(ye);if(ye.version!==he.__version||pe===!0){n.activeTexture(a.TEXTURE0+ne);const Be=At.getPrimaries(At.workingColorSpace),we=T.colorSpace===Za?null:At.getPrimaries(T.colorSpace),Ye=T.colorSpace===Za||Be===we?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const Ke=T.isCompressedTexture||T.image[0].isCompressedTexture,Te=T.image[0]&&T.image[0].isDataTexture,Oe=[];for(let Ee=0;Ee<6;Ee++)!Ke&&!Te?Oe[Ee]=b(T.image[Ee],!0,l.maxCubemapSize):Oe[Ee]=Te?T.image[Ee].image:T.image[Ee],Oe[Ee]=Yt(T,Oe[Ee]);const Je=Oe[0],We=u.convert(T.format,T.colorSpace),Ne=u.convert(T.type),ut=L(T.internalFormat,We,Ne,T.colorSpace),X=T.isVideoTexture!==!0,Ce=he.__version===void 0||pe===!0,De=ye.dataReady;let ze=P(T,Je);se(a.TEXTURE_CUBE_MAP,T);let Ae;if(Ke){X&&Ce&&n.texStorage2D(a.TEXTURE_CUBE_MAP,ze,ut,Je.width,Je.height);for(let Ee=0;Ee<6;Ee++){Ae=Oe[Ee].mipmaps;for(let ke=0;ke<Ae.length;ke++){const st=Ae[ke];T.format!==Ri?We!==null?X?De&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ke,0,0,st.width,st.height,We,st.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ke,ut,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ke,0,0,st.width,st.height,We,Ne,st.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ke,ut,st.width,st.height,0,We,Ne,st.data)}}}else{if(Ae=T.mipmaps,X&&Ce){Ae.length>0&&ze++;const Ee=Zt(Oe[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,ze,ut,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Te){X?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Oe[Ee].width,Oe[Ee].height,We,Ne,Oe[Ee].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ut,Oe[Ee].width,Oe[Ee].height,0,We,Ne,Oe[Ee].data);for(let ke=0;ke<Ae.length;ke++){const Ct=Ae[ke].image[Ee].image;X?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ke+1,0,0,Ct.width,Ct.height,We,Ne,Ct.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ke+1,ut,Ct.width,Ct.height,0,We,Ne,Ct.data)}}else{X?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,We,Ne,Oe[Ee]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ut,We,Ne,Oe[Ee]);for(let ke=0;ke<Ae.length;ke++){const st=Ae[ke];X?De&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ke+1,0,0,We,Ne,st.image[Ee]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ke+1,ut,We,Ne,st.image[Ee])}}}y(T)&&_(a.TEXTURE_CUBE_MAP),he.__version=ye.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function be(O,T,ne,pe,ye,he){const Be=u.convert(ne.format,ne.colorSpace),we=u.convert(ne.type),Ye=L(ne.internalFormat,Be,we,ne.colorSpace),Ke=r.get(T),Te=r.get(ne);if(Te.__renderTarget=T,!Ke.__hasExternalTextures){const Oe=Math.max(1,T.width>>he),Je=Math.max(1,T.height>>he);ye===a.TEXTURE_3D||ye===a.TEXTURE_2D_ARRAY?n.texImage3D(ye,he,Ye,Oe,Je,T.depth,0,Be,we,null):n.texImage2D(ye,he,Ye,Oe,Je,0,Be,we,null)}n.bindFramebuffer(a.FRAMEBUFFER,O),Xe(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pe,ye,Te.__webglTexture,0,Gt(T)):(ye===a.TEXTURE_2D||ye>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,pe,ye,Te.__webglTexture,he),n.bindFramebuffer(a.FRAMEBUFFER,null)}function qe(O,T,ne){if(a.bindRenderbuffer(a.RENDERBUFFER,O),T.depthBuffer){const pe=T.depthTexture,ye=pe&&pe.isDepthTexture?pe.type:null,he=U(T.stencilBuffer,ye),Be=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=Gt(T);Xe(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,we,he,T.width,T.height):ne?a.renderbufferStorageMultisample(a.RENDERBUFFER,we,he,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,he,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Be,a.RENDERBUFFER,O)}else{const pe=T.textures;for(let ye=0;ye<pe.length;ye++){const he=pe[ye],Be=u.convert(he.format,he.colorSpace),we=u.convert(he.type),Ye=L(he.internalFormat,Be,we,he.colorSpace),Ke=Gt(T);ne&&Xe(T)===!1?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ke,Ye,T.width,T.height):Xe(T)?h.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ke,Ye,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Ye,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function He(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(a.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),fe(T.depthTexture,0);const ye=pe.__webglTexture,he=Gt(T);if(T.depthTexture.format===Zo)Xe(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ye,0,he):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,ye,0);else if(T.depthTexture.format===Ko)Xe(T)?h.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ye,0,he):a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function je(O){const T=r.get(O),ne=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const pe=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ye=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ye)};pe.addEventListener("dispose",ye),T.__depthDisposeCallback=ye}T.__boundDepthTexture=pe}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");const pe=O.texture.mipmaps;pe&&pe.length>0?He(T.__webglFramebuffer[0],O):He(T.__webglFramebuffer,O)}else if(ne){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=a.createRenderbuffer(),qe(T.__webglDepthbuffer[pe],O,!1);else{const ye=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[pe];a.bindRenderbuffer(a.RENDERBUFFER,he),a.framebufferRenderbuffer(a.FRAMEBUFFER,ye,a.RENDERBUFFER,he)}}else{const pe=O.texture.mipmaps;if(pe&&pe.length>0?n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),qe(T.__webglDepthbuffer,O,!1);else{const ye=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,he),a.framebufferRenderbuffer(a.FRAMEBUFFER,ye,a.RENDERBUFFER,he)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function kt(O,T,ne){const pe=r.get(O);T!==void 0&&be(pe.__webglFramebuffer,O,O.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),ne!==void 0&&je(O)}function B(O){const T=O.texture,ne=r.get(O),pe=r.get(T);O.addEventListener("dispose",z);const ye=O.textures,he=O.isWebGLCubeRenderTarget===!0,Be=ye.length>1;if(Be||(pe.__webglTexture===void 0&&(pe.__webglTexture=a.createTexture()),pe.__version=T.version,f.memory.textures++),he){ne.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer[we]=[];for(let Ye=0;Ye<T.mipmaps.length;Ye++)ne.__webglFramebuffer[we][Ye]=a.createFramebuffer()}else ne.__webglFramebuffer[we]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)ne.__webglFramebuffer[we]=a.createFramebuffer()}else ne.__webglFramebuffer=a.createFramebuffer();if(Be)for(let we=0,Ye=ye.length;we<Ye;we++){const Ke=r.get(ye[we]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=a.createTexture(),f.memory.textures++)}if(O.samples>0&&Xe(O)===!1){ne.__webglMultisampledFramebuffer=a.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let we=0;we<ye.length;we++){const Ye=ye[we];ne.__webglColorRenderbuffer[we]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,ne.__webglColorRenderbuffer[we]);const Ke=u.convert(Ye.format,Ye.colorSpace),Te=u.convert(Ye.type),Oe=L(Ye.internalFormat,Ke,Te,Ye.colorSpace,O.isXRRenderTarget===!0),Je=Gt(O);a.renderbufferStorageMultisample(a.RENDERBUFFER,Je,Oe,O.width,O.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+we,a.RENDERBUFFER,ne.__webglColorRenderbuffer[we])}a.bindRenderbuffer(a.RENDERBUFFER,null),O.depthBuffer&&(ne.__webglDepthRenderbuffer=a.createRenderbuffer(),qe(ne.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(he){n.bindTexture(a.TEXTURE_CUBE_MAP,pe.__webglTexture),se(a.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ye=0;Ye<T.mipmaps.length;Ye++)be(ne.__webglFramebuffer[we][Ye],O,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ye);else be(ne.__webglFramebuffer[we],O,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(T)&&_(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Be){for(let we=0,Ye=ye.length;we<Ye;we++){const Ke=ye[we],Te=r.get(Ke);let Oe=a.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Oe=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Oe,Te.__webglTexture),se(Oe,Ke),be(ne.__webglFramebuffer,O,Ke,a.COLOR_ATTACHMENT0+we,Oe,0),y(Ke)&&_(Oe)}n.unbindTexture()}else{let we=a.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(we=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(we,pe.__webglTexture),se(we,T),T.mipmaps&&T.mipmaps.length>0)for(let Ye=0;Ye<T.mipmaps.length;Ye++)be(ne.__webglFramebuffer[Ye],O,T,a.COLOR_ATTACHMENT0,we,Ye);else be(ne.__webglFramebuffer,O,T,a.COLOR_ATTACHMENT0,we,0);y(T)&&_(we),n.unbindTexture()}O.depthBuffer&&je(O)}function Ut(O){const T=O.textures;for(let ne=0,pe=T.length;ne<pe;ne++){const ye=T[ne];if(y(ye)){const he=N(O),Be=r.get(ye).__webglTexture;n.bindTexture(he,Be),_(he),n.unbindTexture()}}}const ot=[],at=[];function Fe(O){if(O.samples>0){if(Xe(O)===!1){const T=O.textures,ne=O.width,pe=O.height;let ye=a.COLOR_BUFFER_BIT;const he=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Be=r.get(O),we=T.length>1;if(we)for(let Ke=0;Ke<T.length;Ke++)n.bindFramebuffer(a.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ke,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ke,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Ye=O.texture.mipmaps;Ye&&Ye.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ke=0;Ke<T.length;Ke++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ye|=a.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ye|=a.STENCIL_BUFFER_BIT)),we){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Be.__webglColorRenderbuffer[Ke]);const Te=r.get(T[Ke]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Te,0)}a.blitFramebuffer(0,0,ne,pe,0,0,ne,pe,ye,a.NEAREST),m===!0&&(ot.length=0,at.length=0,ot.push(a.COLOR_ATTACHMENT0+Ke),O.depthBuffer&&O.resolveDepthBuffer===!1&&(ot.push(he),at.push(he),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,at)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,ot))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),we)for(let Ke=0;Ke<T.length;Ke++){n.bindFramebuffer(a.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ke,a.RENDERBUFFER,Be.__webglColorRenderbuffer[Ke]);const Te=r.get(T[Ke]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ke,a.TEXTURE_2D,Te,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function Gt(O){return Math.min(l.maxSamples,O.samples)}function Xe(O){const T=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function lt(O){const T=f.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function Yt(O,T){const ne=O.colorSpace,pe=O.format,ye=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ne!==Ps&&ne!==Za&&(At.getTransfer(ne)===It?(pe!==Ri||ye!==va)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),T}function Zt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ce,this.resetTextureUnits=te,this.setTexture2D=fe,this.setTexture2DArray=I,this.setTexture3D=W,this.setTextureCube=q,this.rebindTextures=kt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Xe}function IC(a,e){function n(r,l=Za){let u;const f=At.getTransfer(l);if(r===va)return a.UNSIGNED_BYTE;if(r===mp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===gp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===J0)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===$0)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===K0)return a.BYTE;if(r===Q0)return a.SHORT;if(r===jo)return a.UNSIGNED_SHORT;if(r===pp)return a.INT;if(r===Dr)return a.UNSIGNED_INT;if(r===ha)return a.FLOAT;if(r===il)return a.HALF_FLOAT;if(r===ex)return a.ALPHA;if(r===tx)return a.RGB;if(r===Ri)return a.RGBA;if(r===Zo)return a.DEPTH_COMPONENT;if(r===Ko)return a.DEPTH_STENCIL;if(r===nx)return a.RED;if(r===vp)return a.RED_INTEGER;if(r===ix)return a.RG;if(r===_p)return a.RG_INTEGER;if(r===xp)return a.RGBA_INTEGER;if(r===Yu||r===Zu||r===Ku||r===Qu)if(f===It)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Yu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Yu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ku)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rd||r===Cd||r===wd||r===Dd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Rd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ud||r===Nd||r===Ld)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Ud||r===Nd)return f===It?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Ld)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Od||r===Pd||r===Id||r===Fd||r===Bd||r===zd||r===Hd||r===Gd||r===Vd||r===kd||r===Xd||r===Wd||r===qd||r===jd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Od)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Id)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jd)return f===It?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yd||r===Zd||r===Kd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Yd)return f===It?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Kd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qd||r===Jd||r===$d||r===ep)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Qd)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Jd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===$d)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ep)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yo?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const FC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BC=`
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

}`;class zC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new xx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new $a({vertexShader:FC,fragmentShader:BC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new da(new mc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HC extends Bs{constructor(e,n){super();const r=this;let l=null,u=1,f=null,h="local-floor",m=1,p=null,g=null,v=null,x=null,S=null,M=null;const b=typeof XRWebGLBinding<"u",y=new zC,_={},N=n.getContextAttributes();let L=null,U=null;const P=[],H=[],z=new Bt;let Y=null;const w=new mi;w.viewport=new rn;const D=new mi;D.viewport=new rn;const V=[w,D],te=new sT;let ce=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let me=P[Q];return me===void 0&&(me=new Qh,P[Q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Q){let me=P[Q];return me===void 0&&(me=new Qh,P[Q]=me),me.getGripSpace()},this.getHand=function(Q){let me=P[Q];return me===void 0&&(me=new Qh,P[Q]=me),me.getHandSpace()};function fe(Q){const me=H.indexOf(Q.inputSource);if(me===-1)return;const be=P[me];be!==void 0&&(be.update(Q.inputSource,Q.frame,p||f),be.dispatchEvent({type:Q.type,data:Q.inputSource}))}function I(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",W);for(let Q=0;Q<P.length;Q++){const me=H[Q];me!==null&&(H[Q]=null,P[Q].disconnect(me))}ce=null,ve=null,y.reset();for(const Q in _)delete _[Q];e.setRenderTarget(L),S=null,x=null,v=null,l=null,U=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(Y),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(l,n)),v},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",I),l.addEventListener("inputsourceschange",W),N.xrCompatible!==!0&&await n.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(z),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,qe=null,He=null;N.depth&&(He=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=N.stencil?Ko:Zo,qe=N.stencil?Yo:Dr);const je={colorFormat:n.RGBA8,depthFormat:He,scaleFactor:u};v=this.getBinding(),x=v.createProjectionLayer(je),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),U=new Ur(x.textureWidth,x.textureHeight,{format:Ri,type:va,depthTexture:new _x(x.textureWidth,x.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const be={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,n,be),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new Ur(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:va,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Ue.setContext(l),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(Q){for(let me=0;me<Q.removed.length;me++){const be=Q.removed[me],qe=H.indexOf(be);qe>=0&&(H[qe]=null,P[qe].disconnect(be))}for(let me=0;me<Q.added.length;me++){const be=Q.added[me];let qe=H.indexOf(be);if(qe===-1){for(let je=0;je<P.length;je++)if(je>=H.length){H.push(be),qe=je;break}else if(H[je]===null){H[je]=be,qe=je;break}if(qe===-1)break}const He=P[qe];He&&He.connect(be)}}const q=new re,xe=new re;function A(Q,me,be){q.setFromMatrixPosition(me.matrixWorld),xe.setFromMatrixPosition(be.matrixWorld);const qe=q.distanceTo(xe),He=me.projectionMatrix.elements,je=be.projectionMatrix.elements,kt=He[14]/(He[10]-1),B=He[14]/(He[10]+1),Ut=(He[9]+1)/He[5],ot=(He[9]-1)/He[5],at=(He[8]-1)/He[0],Fe=(je[8]+1)/je[0],Gt=kt*at,Xe=kt*Fe,lt=qe/(-at+Fe),Yt=lt*-at;if(me.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Yt),Q.translateZ(lt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),He[10]===-1)Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Zt=kt+lt,O=B+lt,T=Gt-Yt,ne=Xe+(qe-Yt),pe=Ut*B/O*Zt,ye=ot*B/O*Zt;Q.projectionMatrix.makePerspective(T,ne,pe,ye,Zt,O),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function G(Q,me){me===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(me.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let me=Q.near,be=Q.far;y.texture!==null&&(y.depthNear>0&&(me=y.depthNear),y.depthFar>0&&(be=y.depthFar)),te.near=D.near=w.near=me,te.far=D.far=w.far=be,(ce!==te.near||ve!==te.far)&&(l.updateRenderState({depthNear:te.near,depthFar:te.far}),ce=te.near,ve=te.far),te.layers.mask=Q.layers.mask|6,w.layers.mask=te.layers.mask&3,D.layers.mask=te.layers.mask&5;const qe=Q.parent,He=te.cameras;G(te,qe);for(let je=0;je<He.length;je++)G(He[je],qe);He.length===2?A(te,w,D):te.projectionMatrix.copy(w.projectionMatrix),se(Q,te,qe)};function se(Q,me,be){be===null?Q.matrix.copy(me.matrixWorld):(Q.matrix.copy(be.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(me.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=tp*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(te)},this.getCameraTexture=function(Q){return _[Q]};let le=null;function Me(Q,me){if(g=me.getViewerPose(p||f),M=me,g!==null){const be=g.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let qe=!1;be.length!==te.cameras.length&&(te.cameras.length=0,qe=!0);for(let B=0;B<be.length;B++){const Ut=be[B];let ot=null;if(S!==null)ot=S.getViewport(Ut);else{const Fe=v.getViewSubImage(x,Ut);ot=Fe.viewport,B===0&&(e.setRenderTargetTextures(U,Fe.colorTexture,Fe.depthStencilTexture),e.setRenderTarget(U))}let at=V[B];at===void 0&&(at=new mi,at.layers.enable(B),at.viewport=new rn,V[B]=at),at.matrix.fromArray(Ut.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ut.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ot.x,ot.y,ot.width,ot.height),B===0&&(te.matrix.copy(at.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),qe===!0&&te.cameras.push(at)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){v=r.getBinding();const B=v.getDepthInformation(be[0]);B&&B.isValid&&B.texture&&y.init(B,l.renderState)}if(He&&He.includes("camera-access")&&b){e.state.unbindTexture(),v=r.getBinding();for(let B=0;B<be.length;B++){const Ut=be[B].camera;if(Ut){let ot=_[Ut];ot||(ot=new xx,_[Ut]=ot);const at=v.getCameraImage(Ut);ot.sourceTexture=at}}}}for(let be=0;be<P.length;be++){const qe=H[be],He=P[be];qe!==null&&He!==void 0&&He.update(qe,me,p||f)}le&&le(Q,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),M=null}const Ue=new yx;Ue.setAnimationLoop(Me),this.setAnimationLoop=function(Q){le=Q},this.dispose=function(){}}}const Er=new _a,GC=new hn;function VC(a,e){function n(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,dx(a)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,N,L,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),v(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,U)):_.isMeshMatcapMaterial?(u(y,_),M(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),b(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?m(y,_,N,L):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,n(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Yn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,n(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Yn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,n(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,n(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const N=e.get(_),L=N.envMap,U=N.envMapRotation;L&&(y.envMap.value=L,Er.copy(U),Er.x*=-1,Er.y*=-1,Er.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),y.envMapRotation.value.setFromMatrix4(GC.makeRotationFromEuler(Er)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,N,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*N,y.scale.value=L*.5,_.map&&(y.map.value=_.map,n(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,N){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Yn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,_){_.matcap&&(y.matcap.value=_.matcap)}function b(y,_){const N=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function kC(a,e,n,r){let l={},u={},f=[];const h=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const U=L.program;r.uniformBlockBinding(N,U)}function p(N,L){let U=l[N.id];U===void 0&&(M(N),U=g(N),l[N.id]=U,N.addEventListener("dispose",y));const P=L.program;r.updateUBOMapping(N,P);const H=e.render.frame;u[N.id]!==H&&(x(N),u[N.id]=H)}function g(N){const L=v();N.__bindingPointIndex=L;const U=a.createBuffer(),P=N.__size,H=N.usage;return a.bindBuffer(a.UNIFORM_BUFFER,U),a.bufferData(a.UNIFORM_BUFFER,P,H),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,L,U),U}function v(){for(let N=0;N<h;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=l[N.id],U=N.uniforms,P=N.__cache;a.bindBuffer(a.UNIFORM_BUFFER,L);for(let H=0,z=U.length;H<z;H++){const Y=Array.isArray(U[H])?U[H]:[U[H]];for(let w=0,D=Y.length;w<D;w++){const V=Y[w];if(S(V,H,w,P)===!0){const te=V.__offset,ce=Array.isArray(V.value)?V.value:[V.value];let ve=0;for(let fe=0;fe<ce.length;fe++){const I=ce[fe],W=b(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,a.bufferSubData(a.UNIFORM_BUFFER,te+ve,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,ve),ve+=W.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,te,V.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(N,L,U,P){const H=N.value,z=L+"_"+U;if(P[z]===void 0)return typeof H=="number"||typeof H=="boolean"?P[z]=H:P[z]=H.clone(),!0;{const Y=P[z];if(typeof H=="number"||typeof H=="boolean"){if(Y!==H)return P[z]=H,!0}else if(Y.equals(H)===!1)return Y.copy(H),!0}return!1}function M(N){const L=N.uniforms;let U=0;const P=16;for(let z=0,Y=L.length;z<Y;z++){const w=Array.isArray(L[z])?L[z]:[L[z]];for(let D=0,V=w.length;D<V;D++){const te=w[D],ce=Array.isArray(te.value)?te.value:[te.value];for(let ve=0,fe=ce.length;ve<fe;ve++){const I=ce[ve],W=b(I),q=U%P,xe=q%W.boundary,A=q+xe;U+=xe,A!==0&&P-A<W.storage&&(U+=P-A),te.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=U,U+=W.storage}}}const H=U%P;return H>0&&(U+=P-H),N.__size=U,N.__cache={},this}function b(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function y(N){const L=N.target;L.removeEventListener("dispose",y);const U=f.indexOf(L.__bindingPointIndex);f.splice(U,1),a.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const N in l)a.deleteBuffer(l[N]);f=[],l={},u={}}return{bind:m,update:p,dispose:_}}class XC{constructor(e={}){const{canvas:n=Tb(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const M=new Uint32Array(4),b=new Int32Array(4);let y=null,_=null;const N=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let P=!1;this._outputColorSpace=pi;let H=0,z=0,Y=null,w=-1,D=null;const V=new rn,te=new rn;let ce=null;const ve=new Mt(0);let fe=0,I=n.width,W=n.height,q=1,xe=null,A=null;const G=new rn(0,0,I,W),se=new rn(0,0,I,W);let le=!1;const Me=new gx;let Ue=!1,Q=!1;const me=new hn,be=new re,qe=new rn,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function kt(){return Y===null?q:1}let B=r;function Ut(C,j){return n.getContext(C,j)}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${dp}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),B===null){const j="webgl2";if(B=Ut(j,C),B===null)throw Ut(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ot,at,Fe,Gt,Xe,lt,Yt,Zt,O,T,ne,pe,ye,he,Be,we,Ye,Ke,Te,Oe,Je,We,Ne,ut;function X(){ot=new eR(B),ot.init(),We=new IC(B,ot),at=new j1(B,ot,e,We),Fe=new OC(B,ot),at.reversedDepthBuffer&&x&&Fe.buffers.depth.setReversed(!0),Gt=new iR(B),Xe=new SC,lt=new PC(B,ot,Fe,Xe,at,We,Gt),Yt=new Z1(U),Zt=new $1(U),O=new uT(B),Ne=new W1(B,O),T=new tR(B,O,Gt,Ne),ne=new rR(B,T,O,Gt),Te=new aR(B,at,lt),we=new Y1(Xe),pe=new yC(U,Yt,Zt,ot,at,Ne,we),ye=new VC(U,Xe),he=new MC,Be=new wC(ot),Ke=new X1(U,Yt,Zt,Fe,ne,S,m),Ye=new NC(U,ne,at),ut=new kC(B,Gt,at,Fe),Oe=new q1(B,ot,Gt),Je=new nR(B,ot,Gt),Gt.programs=pe.programs,U.capabilities=at,U.extensions=ot,U.properties=Xe,U.renderLists=he,U.shadowMap=Ye,U.state=Fe,U.info=Gt}X();const Ce=new HC(U,B);this.xr=Ce,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=ot.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ot.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(I,W,!1))},this.getSize=function(C){return C.set(I,W)},this.setSize=function(C,j,oe=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,W=j,n.width=Math.floor(C*q),n.height=Math.floor(j*q),oe===!0&&(n.style.width=C+"px",n.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(I*q,W*q).floor()},this.setDrawingBufferSize=function(C,j,oe){I=C,W=j,q=oe,n.width=Math.floor(C*oe),n.height=Math.floor(j*oe),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(G)},this.setViewport=function(C,j,oe,ue){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,j,oe,ue),Fe.viewport(V.copy(G).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(se)},this.setScissor=function(C,j,oe,ue){C.isVector4?se.set(C.x,C.y,C.z,C.w):se.set(C,j,oe,ue),Fe.scissor(te.copy(se).multiplyScalar(q).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(C){Fe.setScissorTest(le=C)},this.setOpaqueSort=function(C){xe=C},this.setTransparentSort=function(C){A=C},this.getClearColor=function(C){return C.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,oe=!0){let ue=0;if(C){let K=!1;if(Y!==null){const Re=Y.texture.format;K=Re===xp||Re===_p||Re===vp}if(K){const Re=Y.texture.type,Le=Re===va||Re===Dr||Re===jo||Re===Yo||Re===mp||Re===gp,Ge=Ke.getClearColor(),Pe=Ke.getClearAlpha(),et=Ge.r,nt=Ge.g,Ze=Ge.b;Le?(M[0]=et,M[1]=nt,M[2]=Ze,M[3]=Pe,B.clearBufferuiv(B.COLOR,0,M)):(b[0]=et,b[1]=nt,b[2]=Ze,b[3]=Pe,B.clearBufferiv(B.COLOR,0,b))}else ue|=B.COLOR_BUFFER_BIT}j&&(ue|=B.DEPTH_BUFFER_BIT),oe&&(ue|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),Ke.dispose(),he.dispose(),Be.dispose(),Xe.dispose(),Yt.dispose(),Zt.dispose(),ne.dispose(),Ne.dispose(),ut.dispose(),pe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",dn),Ce.removeEventListener("sessionend",pn),Jt.stop()};function De(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ze(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const C=Gt.autoReset,j=Ye.enabled,oe=Ye.autoUpdate,ue=Ye.needsUpdate,K=Ye.type;X(),Gt.autoReset=C,Ye.enabled=j,Ye.autoUpdate=oe,Ye.needsUpdate=ue,Ye.type=K}function Ae(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ee(C){const j=C.target;j.removeEventListener("dispose",Ee),ke(j)}function ke(C){st(C),Xe.remove(C)}function st(C){const j=Xe.get(C).programs;j!==void 0&&(j.forEach(function(oe){pe.releaseProgram(oe)}),C.isShaderMaterial&&pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,oe,ue,K,Re){j===null&&(j=He);const Le=K.isMesh&&K.matrixWorld.determinant()<0,Ge=xa(C,j,oe,ue,K);Fe.setMaterial(ue,Le);let Pe=oe.index,et=1;if(ue.wireframe===!0){if(Pe=T.getWireframeAttribute(oe),Pe===void 0)return;et=2}const nt=oe.drawRange,Ze=oe.attributes.position;let ht=nt.start*et,bt=(nt.start+nt.count)*et;Re!==null&&(ht=Math.max(ht,Re.start*et),bt=Math.min(bt,(Re.start+Re.count)*et)),Pe!==null?(ht=Math.max(ht,0),bt=Math.min(bt,Pe.count)):Ze!=null&&(ht=Math.max(ht,0),bt=Math.min(bt,Ze.count));const qt=bt-ht;if(qt<0||qt===1/0)return;Ne.setup(K,ue,Ge,oe,Pe);let Nt,dt=Oe;if(Pe!==null&&(Nt=O.get(Pe),dt=Je,dt.setIndex(Nt)),K.isMesh)ue.wireframe===!0?(Fe.setLineWidth(ue.wireframeLinewidth*kt()),dt.setMode(B.LINES)):dt.setMode(B.TRIANGLES);else if(K.isLine){let $e=ue.linewidth;$e===void 0&&($e=1),Fe.setLineWidth($e*kt()),K.isLineSegments?dt.setMode(B.LINES):K.isLineLoop?dt.setMode(B.LINE_LOOP):dt.setMode(B.LINE_STRIP)}else K.isPoints?dt.setMode(B.POINTS):K.isSprite&&dt.setMode(B.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Qo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))dt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const $e=K._multiDrawStarts,Xt=K._multiDrawCounts,vt=K._multiDrawCount,wn=Pe?O.get(Pe).bytesPerElement:1,xi=Xe.get(ue).currentProgram.getUniforms();for(let In=0;In<vt;In++)xi.setValue(B,"_gl_DrawID",In),dt.render($e[In]/wn,Xt[In])}else if(K.isInstancedMesh)dt.renderInstances(ht,qt,K.count);else if(oe.isInstancedBufferGeometry){const $e=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Xt=Math.min(oe.instanceCount,$e);dt.renderInstances(ht,qt,Xt)}else dt.render(ht,qt)};function Ct(C,j,oe){C.transparent===!0&&C.side===fa&&C.forceSinglePass===!1?(C.side=Yn,C.needsUpdate=!0,Ui(C,j,oe),C.side=Ja,C.needsUpdate=!0,Ui(C,j,oe),C.side=fa):Ui(C,j,oe)}this.compile=function(C,j,oe=null){oe===null&&(oe=C),_=Be.get(oe),_.init(j),L.push(_),oe.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),C!==oe&&C.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights();const ue=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Re=K.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){const Ge=Re[Le];Ct(Ge,oe,K),ue.add(Ge)}else Ct(Re,oe,K),ue.add(Re)}),_=L.pop(),ue},this.compileAsync=function(C,j,oe=null){const ue=this.compile(C,j,oe);return new Promise(K=>{function Re(){if(ue.forEach(function(Le){Xe.get(Le).currentProgram.isReady()&&ue.delete(Le)}),ue.size===0){K(C);return}setTimeout(Re,10)}ot.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Et=null;function _i(C){Et&&Et(C)}function dn(){Jt.stop()}function pn(){Jt.start()}const Jt=new yx;Jt.setAnimationLoop(_i),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(C){Et=C,Ce.setAnimationLoop(C),C===null?Jt.stop():Jt.start()},Ce.addEventListener("sessionstart",dn),Ce.addEventListener("sessionend",pn),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(j),j=Ce.getCamera()),C.isScene===!0&&C.onBeforeRender(U,C,j,Y),_=Be.get(C,L.length),_.init(j),L.push(_),me.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Me.setFromProjectionMatrix(me,zi,j.reversedDepth),Q=this.localClippingEnabled,Ue=we.init(this.clippingPlanes,Q),y=he.get(C,N.length),y.init(),N.push(y),Ce.enabled===!0&&Ce.isPresenting===!0){const Re=U.xr.getDepthSensingMesh();Re!==null&&Di(Re,j,-1/0,U.sortObjects)}Di(C,j,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(xe,A),je=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,je&&Ke.addToRenderList(y,C),this.info.render.frame++,Ue===!0&&we.beginShadows();const oe=_.state.shadowsArray;Ye.render(oe,C,j),Ue===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=y.opaque,K=y.transmissive;if(_.setupLights(),j.isArrayCamera){const Re=j.cameras;if(K.length>0)for(let Le=0,Ge=Re.length;Le<Ge;Le++){const Pe=Re[Le];ul(ue,K,C,Pe)}je&&Ke.render(C);for(let Le=0,Ge=Re.length;Le<Ge;Le++){const Pe=Re[Le];Or(y,C,Pe,Pe.viewport)}}else K.length>0&&ul(ue,K,C,j),je&&Ke.render(C),Or(y,C,j);Y!==null&&z===0&&(lt.updateMultisampleRenderTarget(Y),lt.updateRenderTargetMipmap(Y)),C.isScene===!0&&C.onAfterRender(U,C,j),Ne.resetDefaultState(),w=-1,D=null,L.pop(),L.length>0?(_=L[L.length-1],Ue===!0&&we.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Di(C,j,oe,ue){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Me.intersectsSprite(C)){ue&&qe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const Le=ne.update(C),Ge=C.material;Ge.visible&&y.push(C,Le,Ge,oe,qe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Me.intersectsObject(C))){const Le=ne.update(C),Ge=C.material;if(ue&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qe.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),qe.copy(Le.boundingSphere.center)),qe.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Ge)){const Pe=Le.groups;for(let et=0,nt=Pe.length;et<nt;et++){const Ze=Pe[et],ht=Ge[Ze.materialIndex];ht&&ht.visible&&y.push(C,Le,ht,oe,qe.z,Ze)}}else Ge.visible&&y.push(C,Le,Ge,oe,qe.z,null)}}const Re=C.children;for(let Le=0,Ge=Re.length;Le<Ge;Le++)Di(Re[Le],j,oe,ue)}function Or(C,j,oe,ue){const K=C.opaque,Re=C.transmissive,Le=C.transparent;_.setupLightsView(oe),Ue===!0&&we.setGlobalState(U.clippingPlanes,oe),ue&&Fe.viewport(V.copy(ue)),K.length>0&&Pr(K,j,oe),Re.length>0&&Pr(Re,j,oe),Le.length>0&&Pr(Le,j,oe),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function ul(C,j,oe,ue){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ue.id]===void 0&&(_.state.transmissionRenderTarget[ue.id]=new Ur(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?il:va,minFilter:wr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Re=_.state.transmissionRenderTarget[ue.id],Le=ue.viewport||V;Re.setSize(Le.z*U.transmissionResolutionScale,Le.w*U.transmissionResolutionScale);const Ge=U.getRenderTarget(),Pe=U.getActiveCubeFace(),et=U.getActiveMipmapLevel();U.setRenderTarget(Re),U.getClearColor(ve),fe=U.getClearAlpha(),fe<1&&U.setClearColor(16777215,.5),U.clear(),je&&Ke.render(oe);const nt=U.toneMapping;U.toneMapping=Qa;const Ze=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),_.setupLightsView(ue),Ue===!0&&we.setGlobalState(U.clippingPlanes,ue),Pr(C,oe,ue),lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re),ot.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let bt=0,qt=j.length;bt<qt;bt++){const Nt=j[bt],dt=Nt.object,$e=Nt.geometry,Xt=Nt.material,vt=Nt.group;if(Xt.side===fa&&dt.layers.test(ue.layers)){const wn=Xt.side;Xt.side=Yn,Xt.needsUpdate=!0,Gs(dt,oe,ue,$e,Xt,vt),Xt.side=wn,Xt.needsUpdate=!0,ht=!0}}ht===!0&&(lt.updateMultisampleRenderTarget(Re),lt.updateRenderTargetMipmap(Re))}U.setRenderTarget(Ge,Pe,et),U.setClearColor(ve,fe),Ze!==void 0&&(ue.viewport=Ze),U.toneMapping=nt}function Pr(C,j,oe){const ue=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Re=C.length;K<Re;K++){const Le=C[K],Ge=Le.object,Pe=Le.geometry,et=Le.group;let nt=Le.material;nt.allowOverride===!0&&ue!==null&&(nt=ue),Ge.layers.test(oe.layers)&&Gs(Ge,j,oe,Pe,nt,et)}}function Gs(C,j,oe,ue,K,Re){C.onBeforeRender(U,j,oe,ue,K,Re),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(U,j,oe,ue,C,Re),K.transparent===!0&&K.side===fa&&K.forceSinglePass===!1?(K.side=Yn,K.needsUpdate=!0,U.renderBufferDirect(oe,j,ue,K,C,Re),K.side=Ja,K.needsUpdate=!0,U.renderBufferDirect(oe,j,ue,K,C,Re),K.side=fa):U.renderBufferDirect(oe,j,ue,K,C,Re),C.onAfterRender(U,j,oe,ue,K,Re)}function Ui(C,j,oe){j.isScene!==!0&&(j=He);const ue=Xe.get(C),K=_.state.lights,Re=_.state.shadowsArray,Le=K.state.version,Ge=pe.getParameters(C,K.state,Re,j,oe),Pe=pe.getProgramCacheKey(Ge);let et=ue.programs;ue.environment=C.isMeshStandardMaterial?j.environment:null,ue.fog=j.fog,ue.envMap=(C.isMeshStandardMaterial?Zt:Yt).get(C.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,et===void 0&&(C.addEventListener("dispose",Ee),et=new Map,ue.programs=et);let nt=et.get(Pe);if(nt!==void 0){if(ue.currentProgram===nt&&ue.lightsStateVersion===Le)return Xi(C,Ge),nt}else Ge.uniforms=pe.getUniforms(C),C.onBeforeCompile(Ge,U),nt=pe.acquireProgram(Ge,Pe),et.set(Pe,nt),ue.uniforms=Ge.uniforms;const Ze=ue.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ze.clippingPlanes=we.uniform),Xi(C,Ge),ue.needsLights=ya(C),ue.lightsStateVersion=Le,ue.needsLights&&(Ze.ambientLightColor.value=K.state.ambient,Ze.lightProbe.value=K.state.probe,Ze.directionalLights.value=K.state.directional,Ze.directionalLightShadows.value=K.state.directionalShadow,Ze.spotLights.value=K.state.spot,Ze.spotLightShadows.value=K.state.spotShadow,Ze.rectAreaLights.value=K.state.rectArea,Ze.ltc_1.value=K.state.rectAreaLTC1,Ze.ltc_2.value=K.state.rectAreaLTC2,Ze.pointLights.value=K.state.point,Ze.pointLightShadows.value=K.state.pointShadow,Ze.hemisphereLights.value=K.state.hemi,Ze.directionalShadowMap.value=K.state.directionalShadowMap,Ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ze.spotShadowMap.value=K.state.spotShadowMap,Ze.spotLightMatrix.value=K.state.spotLightMatrix,Ze.spotLightMap.value=K.state.spotLightMap,Ze.pointShadowMap.value=K.state.pointShadowMap,Ze.pointShadowMatrix.value=K.state.pointShadowMatrix),ue.currentProgram=nt,ue.uniformsList=null,nt}function Ir(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=$u.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Xi(C,j){const oe=Xe.get(C);oe.outputColorSpace=j.outputColorSpace,oe.batching=j.batching,oe.batchingColor=j.batchingColor,oe.instancing=j.instancing,oe.instancingColor=j.instancingColor,oe.instancingMorph=j.instancingMorph,oe.skinning=j.skinning,oe.morphTargets=j.morphTargets,oe.morphNormals=j.morphNormals,oe.morphColors=j.morphColors,oe.morphTargetsCount=j.morphTargetsCount,oe.numClippingPlanes=j.numClippingPlanes,oe.numIntersection=j.numClipIntersection,oe.vertexAlphas=j.vertexAlphas,oe.vertexTangents=j.vertexTangents,oe.toneMapping=j.toneMapping}function xa(C,j,oe,ue,K){j.isScene!==!0&&(j=He),lt.resetTextureUnits();const Re=j.fog,Le=ue.isMeshStandardMaterial?j.environment:null,Ge=Y===null?U.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ps,Pe=(ue.isMeshStandardMaterial?Zt:Yt).get(ue.envMap||Le),et=ue.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,nt=!!oe.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ze=!!oe.morphAttributes.position,ht=!!oe.morphAttributes.normal,bt=!!oe.morphAttributes.color;let qt=Qa;ue.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(qt=U.toneMapping);const Nt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,dt=Nt!==void 0?Nt.length:0,$e=Xe.get(ue),Xt=_.state.lights;if(Ue===!0&&(Q===!0||C!==D)){const $t=C===D&&ue.id===w;we.setState(ue,C,$t)}let vt=!1;ue.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Xt.state.version||$e.outputColorSpace!==Ge||K.isBatchedMesh&&$e.batching===!1||!K.isBatchedMesh&&$e.batching===!0||K.isBatchedMesh&&$e.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&$e.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&$e.instancing===!1||!K.isInstancedMesh&&$e.instancing===!0||K.isSkinnedMesh&&$e.skinning===!1||!K.isSkinnedMesh&&$e.skinning===!0||K.isInstancedMesh&&$e.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&$e.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&$e.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&$e.instancingMorph===!1&&K.morphTexture!==null||$e.envMap!==Pe||ue.fog===!0&&$e.fog!==Re||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==we.numPlanes||$e.numIntersection!==we.numIntersection)||$e.vertexAlphas!==et||$e.vertexTangents!==nt||$e.morphTargets!==Ze||$e.morphNormals!==ht||$e.morphColors!==bt||$e.toneMapping!==qt||$e.morphTargetsCount!==dt)&&(vt=!0):(vt=!0,$e.__version=ue.version);let wn=$e.currentProgram;vt===!0&&(wn=Ui(ue,j,K));let xi=!1,In=!1,yn=!1;const zt=wn.getUniforms(),Fn=$e.uniforms;if(Fe.useProgram(wn.program)&&(xi=!0,In=!0,yn=!0),ue.id!==w&&(w=ue.id,In=!0),xi||D!==C){Fe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),zt.setValue(B,"projectionMatrix",C.projectionMatrix),zt.setValue(B,"viewMatrix",C.matrixWorldInverse);const Tn=zt.map.cameraPosition;Tn!==void 0&&Tn.setValue(B,be.setFromMatrixPosition(C.matrixWorld)),at.logarithmicDepthBuffer&&zt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&zt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,In=!0,yn=!0)}if(K.isSkinnedMesh){zt.setOptional(B,K,"bindMatrix"),zt.setOptional(B,K,"bindMatrixInverse");const $t=K.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),zt.setValue(B,"boneTexture",$t.boneTexture,lt))}K.isBatchedMesh&&(zt.setOptional(B,K,"batchingTexture"),zt.setValue(B,"batchingTexture",K._matricesTexture,lt),zt.setOptional(B,K,"batchingIdTexture"),zt.setValue(B,"batchingIdTexture",K._indirectTexture,lt),zt.setOptional(B,K,"batchingColorTexture"),K._colorsTexture!==null&&zt.setValue(B,"batchingColorTexture",K._colorsTexture,lt));const Dn=oe.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Te.update(K,oe,wn),(In||$e.receiveShadow!==K.receiveShadow)&&($e.receiveShadow=K.receiveShadow,zt.setValue(B,"receiveShadow",K.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Fn.envMap.value=Pe,Fn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&j.environment!==null&&(Fn.envMapIntensity.value=j.environmentIntensity),In&&(zt.setValue(B,"toneMappingExposure",U.toneMappingExposure),$e.needsLights&&er(Fn,yn),Re&&ue.fog===!0&&ye.refreshFogUniforms(Fn,Re),ye.refreshMaterialUniforms(Fn,ue,q,W,_.state.transmissionRenderTarget[C.id]),$u.upload(B,Ir($e),Fn,lt)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&($u.upload(B,Ir($e),Fn,lt),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&zt.setValue(B,"center",K.center),zt.setValue(B,"modelViewMatrix",K.modelViewMatrix),zt.setValue(B,"normalMatrix",K.normalMatrix),zt.setValue(B,"modelMatrix",K.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const $t=ue.uniformsGroups;for(let Tn=0,Fr=$t.length;Tn<Fr;Tn++){const Vn=$t[Tn];ut.update(Vn,wn),ut.bind(Vn,wn)}}return wn}function er(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function ya(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,j,oe){const ue=Xe.get(C);ue.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),Xe.get(C.texture).__webglTexture=j,Xe.get(C.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:oe,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const oe=Xe.get(C);oe.__webglFramebuffer=j,oe.__useDefaultFramebuffer=j===void 0};const ln=B.createFramebuffer();this.setRenderTarget=function(C,j=0,oe=0){Y=C,H=j,z=oe;let ue=!0,K=null,Re=!1,Le=!1;if(C){const Pe=Xe.get(C);if(Pe.__useDefaultFramebuffer!==void 0)Fe.bindFramebuffer(B.FRAMEBUFFER,null),ue=!1;else if(Pe.__webglFramebuffer===void 0)lt.setupRenderTarget(C);else if(Pe.__hasExternalTextures)lt.rebindTextures(C,Xe.get(C.texture).__webglTexture,Xe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ze=C.depthTexture;if(Pe.__boundDepthTexture!==Ze){if(Ze!==null&&Xe.has(Ze)&&(C.width!==Ze.image.width||C.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(C)}}const et=C.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Le=!0);const nt=Xe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[j])?K=nt[j][oe]:K=nt[j],Re=!0):C.samples>0&&lt.useMultisampledRTT(C)===!1?K=Xe.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?K=nt[oe]:K=nt,V.copy(C.viewport),te.copy(C.scissor),ce=C.scissorTest}else V.copy(G).multiplyScalar(q).floor(),te.copy(se).multiplyScalar(q).floor(),ce=le;if(oe!==0&&(K=ln),Fe.bindFramebuffer(B.FRAMEBUFFER,K)&&ue&&Fe.drawBuffers(C,K),Fe.viewport(V),Fe.scissor(te),Fe.setScissorTest(ce),Re){const Pe=Xe.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,Pe.__webglTexture,oe)}else if(Le){const Pe=j;for(let et=0;et<C.textures.length;et++){const nt=Xe.get(C.textures[et]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+et,nt.__webglTexture,oe,Pe)}}else if(C!==null&&oe!==0){const Pe=Xe.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pe.__webglTexture,oe)}w=-1},this.readRenderTargetPixels=function(C,j,oe,ue,K,Re,Le,Ge=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Pe=Pe[Le]),Pe){Fe.bindFramebuffer(B.FRAMEBUFFER,Pe);try{const et=C.textures[Ge],nt=et.format,Ze=et.type;if(!at.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-ue&&oe>=0&&oe<=C.height-K&&(C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ge),B.readPixels(j,oe,ue,K,We.convert(nt),We.convert(Ze),Re))}finally{const et=Y!==null?Xe.get(Y).__webglFramebuffer:null;Fe.bindFramebuffer(B.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(C,j,oe,ue,K,Re,Le,Ge=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Xe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Pe=Pe[Le]),Pe)if(j>=0&&j<=C.width-ue&&oe>=0&&oe<=C.height-K){Fe.bindFramebuffer(B.FRAMEBUFFER,Pe);const et=C.textures[Ge],nt=et.format,Ze=et.type;if(!at.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ht),B.bufferData(B.PIXEL_PACK_BUFFER,Re.byteLength,B.STREAM_READ),C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ge),B.readPixels(j,oe,ue,K,We.convert(nt),We.convert(Ze),0);const bt=Y!==null?Xe.get(Y).__webglFramebuffer:null;Fe.bindFramebuffer(B.FRAMEBUFFER,bt);const qt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ab(B,qt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ht),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Re),B.deleteBuffer(ht),B.deleteSync(qt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,oe=0){const ue=Math.pow(2,-oe),K=Math.floor(C.image.width*ue),Re=Math.floor(C.image.height*ue),Le=j!==null?j.x:0,Ge=j!==null?j.y:0;lt.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,oe,0,0,Le,Ge,K,Re),Fe.unbindTexture()};const cl=B.createFramebuffer(),fl=B.createFramebuffer();this.copyTextureToTexture=function(C,j,oe=null,ue=null,K=0,Re=null){Re===null&&(K!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=K,K=0):Re=0);let Le,Ge,Pe,et,nt,Ze,ht,bt,qt;const Nt=C.isCompressedTexture?C.mipmaps[Re]:C.image;if(oe!==null)Le=oe.max.x-oe.min.x,Ge=oe.max.y-oe.min.y,Pe=oe.isBox3?oe.max.z-oe.min.z:1,et=oe.min.x,nt=oe.min.y,Ze=oe.isBox3?oe.min.z:0;else{const Dn=Math.pow(2,-K);Le=Math.floor(Nt.width*Dn),Ge=Math.floor(Nt.height*Dn),C.isDataArrayTexture?Pe=Nt.depth:C.isData3DTexture?Pe=Math.floor(Nt.depth*Dn):Pe=1,et=0,nt=0,Ze=0}ue!==null?(ht=ue.x,bt=ue.y,qt=ue.z):(ht=0,bt=0,qt=0);const dt=We.convert(j.format),$e=We.convert(j.type);let Xt;j.isData3DTexture?(lt.setTexture3D(j,0),Xt=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(lt.setTexture2DArray(j,0),Xt=B.TEXTURE_2D_ARRAY):(lt.setTexture2D(j,0),Xt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=B.getParameter(B.UNPACK_ROW_LENGTH),wn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),xi=B.getParameter(B.UNPACK_SKIP_PIXELS),In=B.getParameter(B.UNPACK_SKIP_ROWS),yn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,et),B.pixelStorei(B.UNPACK_SKIP_ROWS,nt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze);const zt=C.isDataArrayTexture||C.isData3DTexture,Fn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const Dn=Xe.get(C),$t=Xe.get(j),Tn=Xe.get(Dn.__renderTarget),Fr=Xe.get($t.__renderTarget);Fe.bindFramebuffer(B.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let Vn=0;Vn<Pe;Vn++)zt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(C).__webglTexture,K,Ze+Vn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(j).__webglTexture,Re,qt+Vn)),B.blitFramebuffer(et,nt,Le,Ge,ht,bt,Le,Ge,B.DEPTH_BUFFER_BIT,B.NEAREST);Fe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||Xe.has(C)){const Dn=Xe.get(C),$t=Xe.get(j);Fe.bindFramebuffer(B.READ_FRAMEBUFFER,cl),Fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,fl);for(let Tn=0;Tn<Pe;Tn++)zt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dn.__webglTexture,K,Ze+Tn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Dn.__webglTexture,K),Fn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$t.__webglTexture,Re,qt+Tn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,$t.__webglTexture,Re),K!==0?B.blitFramebuffer(et,nt,Le,Ge,ht,bt,Le,Ge,B.COLOR_BUFFER_BIT,B.NEAREST):Fn?B.copyTexSubImage3D(Xt,Re,ht,bt,qt+Tn,et,nt,Le,Ge):B.copyTexSubImage2D(Xt,Re,ht,bt,et,nt,Le,Ge);Fe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Fn?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Xt,Re,ht,bt,qt,Le,Ge,Pe,dt,$e,Nt.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(Xt,Re,ht,bt,qt,Le,Ge,Pe,dt,Nt.data):B.texSubImage3D(Xt,Re,ht,bt,qt,Le,Ge,Pe,dt,$e,Nt):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Re,ht,bt,Le,Ge,dt,$e,Nt.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Re,ht,bt,Nt.width,Nt.height,dt,Nt.data):B.texSubImage2D(B.TEXTURE_2D,Re,ht,bt,Le,Ge,dt,$e,Nt);B.pixelStorei(B.UNPACK_ROW_LENGTH,vt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,wn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,xi),B.pixelStorei(B.UNPACK_SKIP_ROWS,In),B.pixelStorei(B.UNPACK_SKIP_IMAGES,yn),Re===0&&j.generateMipmaps&&B.generateMipmap(Xt),Fe.unbindTexture()},this.initRenderTarget=function(C){Xe.get(C).__webglFramebuffer===void 0&&lt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?lt.setTextureCube(C,0):C.isData3DTexture?lt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?lt.setTexture2DArray(C,0):lt.setTexture2D(C,0),Fe.unbindTexture()},this.resetState=function(){H=0,z=0,Y=null,Fe.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}function WC(){const a=de.useRef();return de.useEffect(()=>{let e,n,r,l=0,u=0,f;const h=()=>{n=new Qb,n.background=new Mt(657946),e=new mi(75,window.innerWidth/window.innerHeight,.1,1e3),e.position.set(0,2,50),r=new XC({antialias:!0,canvas:a.current}),r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight);const v=new oT(500,500,2450411,2450411);v.position.y=0,n.add(v);const S=(()=>{const M=new Xo,b=new Mt(3900150),y=new Sp({color:b,linewidth:1}),_=500,N=100;for(let L=0;L<_;L++){const U=Math.random()*50+5,P=Math.random()*5+2,H=Math.random()*5+2,z=new zs(P,U,H),Y=new nT(z),w=new vx(Y,y),D=(Math.random()-.5)*N,V=(Math.random()-.5)*N;w.position.set(D,U/2,V),M.add(w)}return M})();n.add(S),document.addEventListener("mousemove",m,!1),window.addEventListener("resize",p,!1)},m=v=>{l=v.clientX/window.innerWidth*2-1,u=-(v.clientY/window.innerHeight)*2+1},p=()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)},g=()=>{r&&(e.position.z-=.2,e.rotation.y=l*.2,e.rotation.x=u*.1,e.position.z<-50&&(e.position.z=50),r.render(n,e)),f=requestAnimationFrame(g)};return h(),g(),()=>{cancelAnimationFrame(f),document.removeEventListener("mousemove",m,!1),window.removeEventListener("resize",p,!1),r&&r.dispose()}},[]),J.jsxs("section",{className:"relative w-full h-[85vh] rounded-4xl overflow-hidden shadow-lg",children:[J.jsx("canvas",{ref:a,className:"absolute inset-0 z-0 w-full h-full"}),J.jsxs("div",{className:"absolute inset-0 z-10 p-8 text-center bg-transparent justify-center items-center text-white rounded-xl shadow-lg m-4 max-h-screen dark",children:[J.jsx("img",{src:vn.avatar,alt:"Profile Avatar",className:"w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-700"}),J.jsxs("h1",{className:"text-4xl font-bold text-white my-4",children:["Hello, I'm ",vn.firstName," ",vn.lastName," ",J.jsx("span",{className:"animate-pulse delay-100",children:"👋"})]}),J.jsx("h3",{className:"text-2xl font-bold text-gray-100 my-10",children:"Welcome to my portfolio"}),J.jsxs("div",{className:"space-x-4 mt-10",children:[J.jsx(Pn,{to:"/profile",children:J.jsx("button",{className:"mx-4 text-xl font-semibold bg-blue-700 p-4 border-2 rounded-xl hover:p-5 hover:bg-blue-600",children:"Profile"})}),J.jsx(Pn,{to:"/projects",children:J.jsx("button",{className:"mx-4 text-xl font-semibold bg-blue-700 p-4 border-2 rounded-xl hover:p-5 hover:bg-blue-600",children:"Projects"})})]})]})]})}function qC(){return J.jsxs("div",{className:"p-4 bg-transparent rounded-xl shadow-lg",children:[J.jsx("h1",{className:"text-3xl text-center font-bold text-white mb-4",children:"About Me"}),J.jsxs("div",{className:"text-gray-300 h-125 space-y-4 overflow-y-scroll mt-10",children:[J.jsxs("div",{className:"flex fle-wrap",children:[J.jsxs("div",{className:"flex flex-wrap mt-4 w-1/2 px-2",children:[J.jsx("p",{className:"text-lg font-semibold font-mono",children:vn.bio}),J.jsxs("div",{className:"px-2",children:[J.jsx("h2",{className:"mb-2 text-2xl font-semibold text-blue-400",children:"Interests"}),J.jsx("ul",{className:"list-disc pl-6 space-y-2 mb-4",children:vn.interests.map((a,e)=>J.jsx("li",{className:"text-gray-300 font-semibold",children:a},e))}),J.jsx("h2",{className:"my-2 text-2xl font-semibold text-blue-400",children:"Goals "}),J.jsx("p",{className:"text-gray-300 font-semibold font-mono",children:vn.goals})]})]}),J.jsxs("div",{className:"w-1/2 py-4 px-2 rounded-lg shadow-inner",children:[J.jsx("h2",{className:"text-2xl font-semibold text-blue-400 mb-4",children:"Skills & Technologies"}),vn.skills.map((a,e)=>J.jsxs("div",{className:"mb-8 last:mb-0",children:[J.jsx("h4",{className:"text-xl font-semibold mb-4",children:a.domain}),J.jsx("div",{className:"flex flex-wrap gap-2",children:a.items.map((n,r)=>J.jsx("span",{className:"bg-blue-800 text-white text-sm font-semibold px-3 py-1 rounded-full",children:n},r))})]},e))]})]}),J.jsx("div",{className:"flex flex-wrap",children:J.jsxs("div",{className:"mb-4 w-3/4 px-2",children:[J.jsx("h2",{className:"text-2xl font-semibold text-blue-400 mb-4",children:"Certifications"}),J.jsx("ul",{className:"list-image-none space-y-4",children:vn.certifications.map((a,e)=>J.jsxs("li",{className:"flex",children:[J.jsx("img",{src:a.badge,className:"w-20 h-20 my-auto mr-4"}),J.jsxs("div",{children:[J.jsx("div",{className:"text-lg font-semibold text-white",children:a.title}),J.jsxs("p",{className:"text-gray-300",children:[J.jsx("span",{className:"font-bold",children:"Issued by : "})," ",a.issuer," - ",a.description]})]})]},e))})]})})]})]})}var Tx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h0=Ft.createContext&&Ft.createContext(Tx),jC=["attr","size","title"];function YC(a,e){if(a==null)return{};var n=ZC(a,e),r,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);for(l=0;l<u.length;l++)r=u[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(n[r]=a[r])}return n}function ZC(a,e){if(a==null)return{};var n={};for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r)){if(e.indexOf(r)>=0)continue;n[r]=a[r]}return n}function oc(){return oc=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(a[r]=n[r])}return a},oc.apply(this,arguments)}function d0(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable})),n.push.apply(n,r)}return n}function lc(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?d0(Object(n),!0).forEach(function(r){KC(a,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):d0(Object(n)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(n,r))})}return a}function KC(a,e,n){return e=QC(e),e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function QC(a){var e=JC(a,"string");return typeof e=="symbol"?e:e+""}function JC(a,e){if(typeof a!="object"||!a)return a;var n=a[Symbol.toPrimitive];if(n!==void 0){var r=n.call(a,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function Ax(a){return a&&a.map((e,n)=>Ft.createElement(e.tag,lc({key:n},e.attr),Ax(e.child)))}function ll(a){return e=>Ft.createElement($C,oc({attr:lc({},a.attr)},e),Ax(a.child))}function $C(a){var e=n=>{var{attr:r,size:l,title:u}=a,f=YC(a,jC),h=l||n.size||"1em",m;return n.className&&(m=n.className),a.className&&(m=(m?m+" ":"")+a.className),Ft.createElement("svg",oc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,f,{className:m,style:lc(lc({color:a.color||n.color},n.style),a.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),u&&Ft.createElement("title",null,u),a.children)};return h0!==void 0?Ft.createElement(h0.Consumer,null,n=>e(n)):e(Tx)}function Rx(a){return ll({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 1h13l.5.5v12l-.5.5h-13l-.5-.5v-12l.5-.5zM2 5v8h12V5H2zm0-1h12V2H2v2z"},child:[]}]})(a)}function Cx(a){return ll({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"},child:[]}]})(a)}function ew({project:a}){return J.jsx("div",{className:"bg-blue-800 rounded-lg shadow-inner flex flex-col h-auto z-50 hover:shadow-white overflow-y",children:J.jsxs(Pn,{to:`/projects/${a.slug}`,children:[J.jsx("img",{src:a.thumbnail,alt:`${a.title} thumbnail`,className:"w-full h-auto rounded-lg mb-4",loading:"lazy"}),J.jsx("h3",{className:"text-xl font-semibold text-blue-100 mb-2",children:a.title}),J.jsx("p",{className:"text-gray-100 text-sm text-left flex-grow mx-1 p-2",children:a.description}),J.jsx("div",{className:"mb-1 p-2",children:J.jsx("div",{className:"mt-2 block",children:J.jsx("div",{className:"flex flex-wrap gap-2",children:a.techStack.map((e,n)=>J.jsx("span",{className:"bg-gray-600 text-gray-200 text-xs font-semibold px-2 rounded-full",children:e},n))})})})]})})}const wx=[{title:"Personal Portfolio Website",slug:"portfolio-website",description:"A modern, frontend, responsive portfolio site built with React and Tailwind CSS. It features dynamic routing and a clean, minimalist design.",techStack:["React","Tailwind CSS","Vite","JavaScript","React-Router"],thumbnail:"https://placehold.co/400x250/333/FFF?text=Portfolio+Site",media:["https://placehold.co/800x600/333/FFF?text=Screenshot+1","https://placehold.co/800x600/333/FFF?text=Screenshot+2"],demoUrl:"#",repoUrl:"#"},{title:"AI Travel Planner",slug:"ai-travel-planner",description:"AI Travel Planner is a full-stack M.E.R.N (MongoDB, Express, React, Node.js) web application designed to help users easily plan trips with AI-generated itineraries. The platform streamlines travel planning, offering personalized recommendations, authentication, and interactive features.",techStack:["JavaScript","React","Nodejs","MongoDB Atlas","Express","Material UI","Vercel","Github Models API","OpenAI API","Nodemailer","JWT Authentication"],thumbnail:"projects/ai-travel-planner/Screenshot1.png",media:["projects/ai-travel-planner/Screenshot1.png","projects/ai-travel-planner/Screenshot2.png","projects/ai-travel-planner/Screenshot3.png","projects/ai-travel-planner/Screenshot4.png"],demoUrl:"https://ai-travel-planner-frontend-indol.vercel.app/",repoUrl:"https://github.com/juma-altaitoon/ai-travel-planner"},{title:"Portfolio/Profile using Streamlit",slug:"streamlit-portfolio",description:"A Streamlit portfolio project to familiarize myself with the Streamlit framework in preparation for an upcoming ML/AI projects with streamlit.",techStack:["Python","Streamlit"],thumbnail:"projects/streamlit-portfolio/Screenshot1.png",media:["projects/streamlit-portfolio/Screenshot1.png","projects/streamlit-portfolio/Screenshot2.png"],demoUrl:"#",repoUrl:"#"}];function tw(){return J.jsxs("div",{className:"px-8 py-2 text-center bg-transparent rounded-xl shadow-lg m-4",children:[J.jsx("h1",{className:"text-3xl font-bold text-white mb-6",children:"My Projects"}),J.jsx("div",{className:"h-130 overflow-y-auto scroll-smooth",children:J.jsx("div",{className:"m-4 grid grid-cols-1 lg:grid-cols-2 gap-8",children:wx.map((a,e)=>J.jsx(ew,{project:a},e))})})]})}function nw(){return J.jsxs("div",{className:"p-8 text-cente rounded-xl shadow-lg m-4",children:[J.jsx("h1",{className:"text-4xl font-bold text-white text-center my-4",children:"Case Study"}),J.jsx("h4",{className:"text-blue-400 text-2xl font-bold my-6",children:"Working on it..."})]})}var od={exports:{}},ld,p0;function iw(){if(p0)return ld;p0=1;var a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ld=a,ld}var ud,m0;function aw(){if(m0)return ud;m0=1;var a=iw();function e(){}function n(){}return n.resetWarningCache=e,ud=function(){function r(f,h,m,p,g,v){if(v!==a){var x=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw x.name="Invariant Violation",x}}r.isRequired=r;function l(){return r}var u={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:l,element:r,elementType:r,instanceOf:l,node:r,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:n,resetWarningCache:e};return u.PropTypes=u,u},ud}var g0;function rw(){return g0||(g0=1,od.exports=aw()()),od.exports}var sw=rw();const Wt=D0(sw);function v0(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable})),n.push.apply(n,r)}return n}function _0(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?v0(Object(n),!0).forEach(function(r){Dx(a,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):v0(Object(n)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(n,r))})}return a}function ec(a){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ec=function(e){return typeof e}:ec=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ec(a)}function Dx(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function ow(a,e){if(a==null)return{};var n={},r=Object.keys(a),l,u;for(u=0;u<r.length;u++)l=r[u],!(e.indexOf(l)>=0)&&(n[l]=a[l]);return n}function lw(a,e){if(a==null)return{};var n=ow(a,e),r,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);for(l=0;l<u.length;l++)r=u[l],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(n[r]=a[r])}return n}function uw(a,e){return cw(a)||fw(a,e)||hw(a,e)||dw()}function cw(a){if(Array.isArray(a))return a}function fw(a,e){var n=a&&(typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"]);if(n!=null){var r=[],l=!0,u=!1,f,h;try{for(n=n.call(a);!(l=(f=n.next()).done)&&(r.push(f.value),!(e&&r.length===e));l=!0);}catch(m){u=!0,h=m}finally{try{!l&&n.return!=null&&n.return()}finally{if(u)throw h}}return r}}function hw(a,e){if(a){if(typeof a=="string")return x0(a,e);var n=Object.prototype.toString.call(a).slice(8,-1);if(n==="Object"&&a.constructor&&(n=a.constructor.name),n==="Map"||n==="Set")return Array.from(a);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x0(a,e)}}function x0(a,e){(e==null||e>a.length)&&(e=a.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=a[n];return r}function dw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var zn=function(e,n,r){var l=!!r,u=Ft.useRef(r);Ft.useEffect(function(){u.current=r},[r]),Ft.useEffect(function(){if(!l||!e)return function(){};var f=function(){u.current&&u.current.apply(u,arguments)};return e.on(n,f),function(){e.off(n,f)}},[l,n,e,u])},pw=function(e){var n=Ft.useRef(e);return Ft.useEffect(function(){n.current=e},[e]),n.current},uc=function(e){return e!==null&&ec(e)==="object"},y0="[object Object]",mw=function a(e,n){if(!uc(e)||!uc(n))return e===n;var r=Array.isArray(e),l=Array.isArray(n);if(r!==l)return!1;var u=Object.prototype.toString.call(e)===y0,f=Object.prototype.toString.call(n)===y0;if(u!==f)return!1;if(!u&&!r)return e===n;var h=Object.keys(e),m=Object.keys(n);if(h.length!==m.length)return!1;for(var p={},g=0;g<h.length;g+=1)p[h[g]]=!0;for(var v=0;v<m.length;v+=1)p[m[v]]=!0;var x=Object.keys(p);if(x.length!==h.length)return!1;var S=e,M=n,b=function(_){return a(S[_],M[_])};return x.every(b)},gw=function(e,n,r){return uc(e)?Object.keys(e).reduce(function(l,u){var f=!uc(n)||!mw(e[u],n[u]);return r.includes(u)?(f&&console.warn("Unsupported prop change: options.".concat(u," is not a mutable property.")),l):f?_0(_0({},l||{}),{},Dx({},u,e[u])):l},null):null},Ux=Ft.createContext(null);Ux.displayName="ElementsContext";var vw=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e};Wt.any,Wt.object;Wt.func.isRequired;var Nx=Ft.createContext(null);Nx.displayName="CheckoutSdkContext";var _w=function(e,n){if(!e)throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(n," in an <CheckoutProvider> provider."));return e},xw=Ft.createContext(null);xw.displayName="CheckoutContext";Wt.any,Wt.shape({fetchClientSecret:Wt.func.isRequired,elementsOptions:Wt.object}).isRequired;var S0=function(e){var n=Ft.useContext(Nx),r=Ft.useContext(Ux);if(n&&r)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CheckoutProvider> and <Elements> providers."));return n?_w(n,e):vw(r,e)},yw=["mode"],Sw=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},sn=function(e,n){var r="".concat(Sw(e),"Element"),l=function(m){var p=m.id,g=m.className,v=m.options,x=v===void 0?{}:v,S=m.onBlur,M=m.onFocus,b=m.onReady,y=m.onChange,_=m.onEscape,N=m.onClick,L=m.onLoadError,U=m.onLoaderStart,P=m.onNetworksChange,H=m.onConfirm,z=m.onCancel,Y=m.onShippingAddressChange,w=m.onShippingRateChange,D=m.onSavedPaymentMethodRemove,V=m.onSavedPaymentMethodUpdate,te=S0("mounts <".concat(r,">")),ce="elements"in te?te.elements:null,ve="checkoutSdk"in te?te.checkoutSdk:null,fe=Ft.useState(null),I=uw(fe,2),W=I[0],q=I[1],xe=Ft.useRef(null),A=Ft.useRef(null);zn(W,"blur",S),zn(W,"focus",M),zn(W,"escape",_),zn(W,"click",N),zn(W,"loaderror",L),zn(W,"loaderstart",U),zn(W,"networkschange",P),zn(W,"confirm",H),zn(W,"cancel",z),zn(W,"shippingaddresschange",Y),zn(W,"shippingratechange",w),zn(W,"savedpaymentmethodremove",D),zn(W,"savedpaymentmethodupdate",V),zn(W,"change",y);var G;b&&(e==="expressCheckout"?G=b:G=function(){b(W)}),zn(W,"ready",G),Ft.useLayoutEffect(function(){if(xe.current===null&&A.current!==null&&(ce||ve)){var le=null;if(ve)switch(e){case"payment":le=ve.createPaymentElement(x);break;case"address":if("mode"in x){var Me=x.mode,Ue=lw(x,yw);if(Me==="shipping")le=ve.createShippingAddressElement(Ue);else if(Me==="billing")le=ve.createBillingAddressElement(Ue);else throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.")}else throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");break;case"expressCheckout":le=ve.createExpressCheckoutElement(x);break;case"currencySelector":le=ve.createCurrencySelectorElement();break;case"taxId":le=ve.createTaxIdElement(x);break;default:throw new Error("Invalid Element type ".concat(r,". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."))}else ce&&(le=ce.create(e,x));xe.current=le,q(le),le&&le.mount(A.current)}},[ce,ve,x]);var se=pw(x);return Ft.useEffect(function(){if(xe.current){var le=gw(x,se,["paymentRequest"]);le&&"update"in xe.current&&xe.current.update(le)}},[x,se]),Ft.useLayoutEffect(function(){return function(){if(xe.current&&typeof xe.current.destroy=="function")try{xe.current.destroy(),xe.current=null}catch{}}},[]),Ft.createElement("div",{id:p,className:g,ref:A})},u=function(m){S0("mounts <".concat(r,">"));var p=m.id,g=m.className;return Ft.createElement("div",{id:p,className:g})},f=n?u:l;return f.propTypes={id:Wt.string,className:Wt.string,onChange:Wt.func,onBlur:Wt.func,onFocus:Wt.func,onReady:Wt.func,onEscape:Wt.func,onClick:Wt.func,onLoadError:Wt.func,onLoaderStart:Wt.func,onNetworksChange:Wt.func,onConfirm:Wt.func,onCancel:Wt.func,onShippingAddressChange:Wt.func,onShippingRateChange:Wt.func,onSavedPaymentMethodRemove:Wt.func,onSavedPaymentMethodUpdate:Wt.func,options:Wt.object},f.displayName=r,f.__elementType=e,f},on=typeof window>"u",Ew=Ft.createContext(null);Ew.displayName="EmbeddedCheckoutProviderContext";sn("auBankAccount",on);var Mw=sn("card",on);sn("cardNumber",on);sn("cardExpiry",on);sn("cardCvc",on);sn("fpxBank",on);sn("iban",on);sn("idealBank",on);sn("p24Bank",on);sn("epsBank",on);sn("payment",on);sn("expressCheckout",on);sn("currencySelector",on);sn("paymentRequestButton",on);sn("linkAuthentication",on);sn("address",on);sn("shippingAddress",on);sn("paymentMethodMessaging",on);sn("affirmMessage",on);sn("afterpayClearpayMessage",on);sn("taxId",on);var cd,E0;function bw(){if(E0)return cd;E0=1;var a=Object.defineProperty,e=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,r=Object.prototype.hasOwnProperty,l=(A,G)=>{for(var se in G)a(A,se,{get:G[se],enumerable:!0})},u=(A,G,se,le)=>{if(G&&typeof G=="object"||typeof G=="function")for(let Me of n(G))!r.call(A,Me)&&Me!==se&&a(A,Me,{get:()=>G[Me],enumerable:!(le=e(G,Me))||le.enumerable});return A},f=A=>u(a({},"__esModule",{value:!0}),A),h=(A,G,se)=>new Promise((le,Me)=>{var Ue=be=>{try{me(se.next(be))}catch(qe){Me(qe)}},Q=be=>{try{me(se.throw(be))}catch(qe){Me(qe)}},me=be=>be.done?le(be.value):Promise.resolve(be.value).then(Ue,Q);me((se=se.apply(A,G)).next())}),m={};l(m,{SubmissionError:()=>U,appendExtraData:()=>ce,createClient:()=>W,getDefaultClient:()=>q,isSubmissionError:()=>L}),cd=f(m);var p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",g=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function v(A){A=String(A);for(var G,se,le,Me,Ue="",Q=0,me=A.length%3;Q<A.length;){if((se=A.charCodeAt(Q++))>255||(le=A.charCodeAt(Q++))>255||(Me=A.charCodeAt(Q++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");G=se<<16|le<<8|Me,Ue+=p.charAt(G>>18&63)+p.charAt(G>>12&63)+p.charAt(G>>6&63)+p.charAt(G&63)}return me?Ue.slice(0,me-3)+"===".substring(me):Ue}function x(A){if(A=String(A).replace(/[\t\n\f\r ]+/g,""),!g.test(A))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");A+="==".slice(2-(A.length&3));for(var G,se="",le,Me,Ue=0;Ue<A.length;)G=p.indexOf(A.charAt(Ue++))<<18|p.indexOf(A.charAt(Ue++))<<12|(le=p.indexOf(A.charAt(Ue++)))<<6|(Me=p.indexOf(A.charAt(Ue++))),se+=le===64?String.fromCharCode(G>>16&255):Me===64?String.fromCharCode(G>>16&255,G>>8&255):String.fromCharCode(G>>16&255,G>>8&255,G&255);return se}var S=()=>navigator.webdriver||!!document.documentElement.getAttribute(x("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,M=class{constructor(){this.loadedAt=Date.now(),this.webdriver=S()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},b=class{constructor(A){this.kind="success",this.next=A.next}};function y(A){return"next"in A&&typeof A.next=="string"}var _=class{constructor(A,G){this.paymentIntentClientSecret=A,this.resubmitKey=G,this.kind="stripePluginPending"}};function N(A){if("stripe"in A&&"resubmitKey"in A&&typeof A.resubmitKey=="string"){let{stripe:G}=A;return typeof G=="object"&&G!=null&&"paymentIntentClientSecret"in G&&typeof G.paymentIntentClientSecret=="string"}return!1}function L(A){return A.kind==="error"}var U=class{constructor(...A){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var G;for(let se of A){if(!se.field){this.formErrors.push({code:se.code&&P(se.code)?se.code:"UNSPECIFIED",message:se.message});continue}let le=(G=this.fieldErrors.get(se.field))!=null?G:[];le.push({code:se.code&&z(se.code)?se.code:"UNSPECIFIED",message:se.message}),this.fieldErrors.set(se.field,le)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(A){var G;return(G=this.fieldErrors.get(A))!=null?G:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function P(A){return A in H}var H={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function z(A){return A in Y}var Y={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function w(A){return"errors"in A&&Array.isArray(A.errors)&&A.errors.every(G=>typeof G.message=="string")||"error"in A&&typeof A.error=="string"}var D="4.0.0",V=A=>v(JSON.stringify(A)),te=A=>{let G=`@formspree/core@${D}`;return A?`${A} ${G}`:G};function ce(A,G,se){A instanceof FormData?A.append(G,se):A[G]=se}function ve(A){return A!==null&&typeof A=="object"}var fe=class{constructor(A={}){this.project=A.project,this.stripe=A.stripe,typeof window<"u"&&(this.session=new M)}submitForm(A,G){return h(this,arguments,function*(se,le,Me={}){let Ue=Me.endpoint||"https://formspree.io",Q=this.project?`${Ue}/p/${this.project}/f/${se}`:`${Ue}/f/${se}`,me={Accept:"application/json","Formspree-Client":te(Me.clientName)};this.session&&(me["Formspree-Session-Data"]=V(this.session.data())),le instanceof FormData||(me["Content-Type"]="application/json");function be(He){return h(this,null,function*(){try{let je=yield(yield fetch(Q,{method:"POST",mode:"cors",body:He instanceof FormData?He:JSON.stringify(He),headers:me})).json();if(ve(je)){if(w(je))return Array.isArray(je.errors)?new U(...je.errors):new U({message:je.error});if(N(je))return new _(je.stripe.paymentIntentClientSecret,je.resubmitKey);if(y(je))return new b({next:je.next})}return new U({message:"Unexpected response format"})}catch(je){let kt=je instanceof Error?je.message:`Unknown error while posting to Formspree: ${JSON.stringify(je)}`;return new U({message:kt})}})}if(this.stripe&&Me.createPaymentMethod){let He=yield Me.createPaymentMethod();if(He.error)return new U({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});ce(le,"paymentMethod",He.paymentMethod.id);let je=yield be(le);if(je.kind==="error")return je;if(je.kind==="stripePluginPending"){let kt=yield this.stripe.handleCardAction(je.paymentIntentClientSecret);if(kt.error)return new U({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});le instanceof FormData?le.delete("paymentMethod"):delete le.paymentMethod,ce(le,"paymentIntent",kt.paymentIntent.id),ce(le,"resubmitKey",je.resubmitKey);let B=yield be(le);return I(B),B}return je}let qe=yield be(le);return I(qe),qe})}};function I(A){let{kind:G}=A;if(G!=="success"&&G!=="error")throw new Error(`Unexpected submission result (kind: ${G})`)}var W=A=>new fe(A),q=()=>(xe||(xe=W()),xe),xe;return cd}var Mp=bw();function fd(a){let{prefix:e,field:n,errors:r,...l}=a;if(r==null)return null;let u=n?r.getFieldErrors(n):r.getFormErrors();return u.length===0?null:Ft.createElement("div",{...l},e?`${e} `:null,u.map(f=>f.message).join(", "))}var Tw=de.createContext({elements:null});function Aw(){return de.useContext(Tw)}var Rw=Ft.createContext(null);function Cw(){return de.useContext(Rw)??{client:Mp.getDefaultClient()}}var ww="3.0.0",Dw=`@formspree/react@${ww}`;function Uw(a,e={}){let n=Cw(),{client:r=n.client,extraData:l,origin:u}=e,{elements:f}=Aw(),{stripe:h}=r;return async function(m){let p=Nw(m)?Lw(m):m;if(typeof l=="object")for(let[x,S]of Object.entries(l)){let M;typeof S=="function"?M=await S():M=S,M!==void 0&&Mp.appendExtraData(p,x,M)}let g=f?.getElement(Mw),v=h&&g?()=>h.createPaymentMethod({type:"card",card:g,billing_details:Ow(p)}):void 0;return r.submitForm(a,p,{endpoint:u,clientName:Dw,createPaymentMethod:v})}}function Nw(a){return"preventDefault"in a&&typeof a.preventDefault=="function"}function Lw(a){a.preventDefault();let e=a.currentTarget;if(e.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(e)}function Ow(a){let e={address:Pw(a)};for(let n of["name","email","phone"]){let r=a instanceof FormData?a.get(n):a[n];r&&typeof r=="string"&&(e[n]=r)}return e}function Pw(a){let e={};for(let[n,r]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let l=a instanceof FormData?a.get(n):a[n];l&&typeof l=="string"&&(e[r]=l)}return e}function Iw(a,e={}){let[n,r]=de.useState(null),[l,u]=de.useState(null),[f,h]=de.useState(!1),[m,p]=de.useState(!1),g=Uw(a,{client:e.client,extraData:e.data,origin:e.endpoint});return[{errors:n,result:l,submitting:f,succeeded:m},async function(v){h(!0);let x=await g(v);h(!1),Mp.isSubmissionError(x)?(r(x),p(!1)):(r(null),u(x),p(!0))},function(){r(null),u(null),h(!1),p(!1)}]}function Fw(){const[a,e]=Iw("mjkenboz");return a.succeeded?J.jsx("p",{className:"my-50 text-center text-4xl text-white font-bold",children:" Thanks for contacting us."}):J.jsxs("div",{className:"p-8 text-center bg-transparent rounded-xl shadow-lg m-4",children:[J.jsx("h1",{className:"text-3xl font-bold text-white mb-4",children:"Contact Me"}),J.jsx("p",{className:"text-lg text-gray-300 mb-6",children:"Reach out to me via the form below, email, or through my social media profiles."}),J.jsxs("form",{onSubmit:e,className:"space-y-6",children:[J.jsxs("div",{children:[J.jsx("label",{htmlFor:"name",className:"block text-gray-300 font-semibold mb-2"}),J.jsx("input",{type:"text",id:"name",name:"name",className:"w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Your Name..."}),J.jsx(fd,{prefix:"Name",field:"name",errors:a.errors})]}),J.jsxs("div",{children:[J.jsx("label",{htmlFor:"email",className:"block text-gray-300 font-semibold mb-2"}),J.jsx("input",{type:"email",id:"email",name:"email",className:"w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"your.email@example.com"}),J.jsx(fd,{prefix:"Email",field:"email",errors:a.errors})]}),J.jsxs("div",{children:[J.jsx("label",{htmlFor:"message",className:"block text-gray-300 font-semibold mb-2"}),J.jsx("textarea",{id:"message",name:"message",rows:"5",className:"w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Your Message..."}),J.jsx(fd,{prefix:"Message",field:"message",errors:a.errors})]}),J.jsx("button",{type:"submit",className:"w-1/4 text-xl py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors duration-200",disabled:a.submitting,children:"Send Message"})]})]})}function Bw(){const[a,e]=de.useState(!1);return J.jsx("header",{className:"bg-black text-white p-4 sticky top-0 z-10 shadow-lg rounded-b-xl",children:J.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[J.jsx(Pn,{to:"/",children:J.jsxs("h1",{className:"text-2xl font-bold font inter text-blue-600 hover:text-blue-700 animate-pulse",children:[vn.firstName," ",vn.lastName]})}),J.jsxs("nav",{className:"hidden sm:flex space-x-4",children:[J.jsx(Pn,{to:"/profile",className:"hover:text-blue-300 transition-colors duration-200",children:"Profile"}),J.jsx(Pn,{to:"/projects",className:"hover:text-blue-300 transition-colors duration-200",children:"Projects"}),J.jsx(Pn,{to:"/case-study",className:"hover:text-blue-300 transition-colors duration-200",children:"Case Study"}),J.jsx(Pn,{to:"/contact",className:"hover:text-blue-300 transition-colors duration-200",children:"Contact"})]}),J.jsxs("div",{className:"sm:hidden",children:[J.jsx("button",{onClick:()=>e(!a),className:"focus:outline-none","aria-label":"Toggle navigation menu",children:J.jsxs("svg",{width:"30",height:"30",fill:"currentColor",children:[J.jsx("rect",{y:"7",width:"32",height:"4",rx:"2"}),J.jsx("rect",{y:"15",width:"32",height:"4",rx:"2"}),J.jsx("rect",{y:"23",width:"32",height:"4",rx:"2"})]})}),a&&J.jsxs("nav",{className:"absolute right-4 top-16 bg-blue-800 rounded-lg shadow-lg p-4 flex flex-col space-y-2 z-10",children:[J.jsx(Pn,{to:"/profile",onClick:()=>e(!1),className:"hover:text-blue-300 transition-colors duration-200",children:"Profile"}),J.jsx(Pn,{to:"/projects",onClick:()=>e(!1),className:"hover:text-blue-300 transition-colors duration-200",children:"Projects"}),J.jsx(Pn,{to:"/case-study",onClick:()=>e(!1),className:"hover:text-blue-300 transition-colors duration-200",children:"Case Study"}),J.jsx(Pn,{to:"/contact",onClick:()=>e(!1),className:"hover:text-blue-300 transition-colors duration-200",children:"Contact"})]})]})]})})}function zw(){return J.jsx("footer",{className:"bg-grey-700 text-white p-6 mt-auto rounded-t-xl shadow-lg",children:J.jsx("div",{className:"container mx-auto text-center",children:J.jsxs("p",{children:["@ ",new Date().getFullYear()," Juma • Built with React + Vite + Tailwind"]})})})}function Hw(a){return ll({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"},child:[]}]})(a)}function Gw(a){return ll({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z"},child:[]}]})(a)}function Vw(a){return ll({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(a)}function kw(){return J.jsxs("aside",{className:"hidden md:block h-140 w-60 bg-gradient-to-br from-blue-700 to-black text-white p-3 rounded-4xl shadow-lg shadow-blue-500 mr-10 space-y-4 sticky overflow-hidden",children:[J.jsx("img",{src:"Portfolio_avatar.png",alt:`${vn.firstName}'s Avatar`,loading:"lazy",className:"rounded-full w-32 h-32 my-4 mx-auto"}),J.jsxs("h2",{className:"text-lg font-bold mb-2 text-center",children:[vn.firstName," ",vn.lastName]}),J.jsx("p",{className:"text-sm mb-4",children:vn.tagline}),J.jsxs("p",{className:"flex justify-start",children:[J.jsx(Gw,{size:25,className:"mr-2"}),vn.location," "]}),J.jsxs("p",{className:"flex justify-start",children:[J.jsx(Hw,{size:25,className:"mr-2"}),vn.email," "]}),J.jsxs("div",{className:"flex flex-wrap justify-start space-y-4 space-x-6 my-10",children:[J.jsx("a",{href:vn.linkedinUrl,target:"_blank",rel:"noopener noreferrer",children:J.jsx(Vw,{size:60})}),J.jsx("a",{href:vn.githubUrl,target:"_blank",rel:"noopener noreferrer",children:J.jsx(Cx,{size:60})}),J.jsx("a",{href:vn.websiteUrl,target:"_blank",rel:"noopener noreferrer",children:J.jsx(Rx,{size:60})}),J.jsx(Pn,{to:"/profile",className:"my-auto hover:underline font-bold",children:"more..."})]})]})}function Xw(){const[a,e]=de.useState(0),{slug:n}=CE(),r=wx.find(f=>f.slug===n);if(!r)return J.jsx("div",{className:"text-white text-center p-8",children:"Project Not Found"});const l=()=>{e((a+1)%r.media.length)},u=()=>{e((a-1+r.media.length)%r.media.length)};return J.jsxs("div",{className:"p-4 bg-transparent rounded-xl shadow-lg m-4",children:[J.jsx(Pn,{to:"/projects",className:"text-left text-blue-400 hover:text-blue-200 transition-colors duration-200",children:"← Back to Projects"}),J.jsx("h1",{className:"text-4xl font-bold text-white text-center my-4",children:r.title}),J.jsxs("div",{className:"flex flex-wrap mt-4",children:[J.jsx("p",{className:"text-gray-300 text-lg md:w-1/2 w-full mb-6 p-3",children:r.description}),r.media&&r.media.length>0&&J.jsxs("div",{className:"md:w-1/2 w-full relative mb-8 border-4 border-blue-700 rounded-2xl",children:[J.jsx("img",{src:r.media[a],alt:`Screenshot ${a+1} of ${r.title}`,className:"w-full h-auto rounded-lg shadow-md object-cover",loading:"lazy",onError:f=>{f.target.src="https://placehold.co/800x600/333/FFF?text=Image+Not+Found"}}),J.jsxs("p",{className:"dark:text-white text-center font-bold",children:[a,"/",r.media.length]}),r.media.length>1&&J.jsxs(J.Fragment,{children:[J.jsx("button",{onClick:u,className:"absolute left-4 top-1/2 -translate-y-1/2 bg-transparent text-blue-700 text-2xl font-bold p-2 rounded-full","aria-label":"Previous Image",children:"‹"}),J.jsx("button",{onClick:l,className:"absolute right-4 top-1/2 -translate-y-1/2 bg-transparent text-blue-700 text-2xl font-bold p-2 rounded-full","aria-label":"Next Image",children:"›"})]})]})]}),J.jsxs("div",{className:"flex flex-wrap",children:[J.jsxs("div",{className:"p-4 rounded-lg mb-4 md:w-1/2 w-full",children:[J.jsx("h2",{className:"text-2xl font-semibold text-blue-400 mb-4",children:"Tech Stack"}),J.jsx("div",{className:"flex flex-wrap gap-2",children:r.techStack.map((f,h)=>J.jsx("span",{className:"bg-blue-700 text-white text-sm font-semibold p-2 rounded-full",children:f},h))})]}),J.jsxs("div",{className:"p-4 rounded-lg mb-4 md:w-1/2 w-full",children:[J.jsx("h2",{className:"text-2xl font-semibold text-blue-400 mb-4",children:"Project Links"}),J.jsxs("div",{className:"flex justify-center space-x-10 mx-auto",children:[r.demoUrl&&J.jsx("a",{href:r.demoUrl,target:"_blank",rel:"noopener noreferrer",className:"bg-blue-700 my-auto text-white font-bold p-2 rounded-lg hover:bg-blue-900 transition-colors duration-200",children:J.jsx(Rx,{size:50})}),r.repoUrl&&J.jsx("a",{href:r.repoUrl,target:"_blank",rel:"noopener noreferrer",className:"bg-blue-700 my-auto text-white font-bold p-2 rounded-lg hover:bg-blue-900 transition-colors duration-200",children:J.jsx(Cx,{size:50})})]})]})]})]})}function Ww(){return J.jsx(J.Fragment,{children:J.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-black to-blue-950 text-grey-200 flex flex-col font-sans",children:[J.jsx(Bw,{}),J.jsxs("main",{className:"container mx-auto flex-1 flex flex-col md:flex-row py-1 px-2",children:[J.jsx(kw,{}),J.jsx("div",{className:"flex-1",children:J.jsxs(kE,{children:[J.jsx(Mr,{path:"/",element:J.jsx(WC,{})}),J.jsx(Mr,{path:"/profile",element:J.jsx(qC,{})}),J.jsx(Mr,{path:"/projects",element:J.jsx(tw,{})}),J.jsx(Mr,{path:"/projects/:slug",element:J.jsx(Xw,{})}),J.jsx(Mr,{path:"/case-study",element:J.jsx(nw,{})}),J.jsx(Mr,{path:"/contact",element:J.jsx(Fw,{})})]})})]}),J.jsx(zw,{})]})})}var vc=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(a){return this.listeners.add(a),this.onSubscribe(),()=>{this.listeners.delete(a),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},qw={setTimeout:(a,e)=>setTimeout(a,e),clearTimeout:a=>clearTimeout(a),setInterval:(a,e)=>setInterval(a,e),clearInterval:a=>clearInterval(a)},jw=class{#e=qw;#t=!1;setTimeoutProvider(a){this.#e=a}setTimeout(a,e){return this.#e.setTimeout(a,e)}clearTimeout(a){this.#e.clearTimeout(a)}setInterval(a,e){return this.#e.setInterval(a,e)}clearInterval(a){this.#e.clearInterval(a)}},ip=new jw;function Yw(a){setTimeout(a,0)}var _c=typeof window>"u"||"Deno"in globalThis;function Ai(){}function Zw(a,e){return typeof a=="function"?a(e):a}function Kw(a){return typeof a=="number"&&a>=0&&a!==1/0}function Qw(a,e){return Math.max(a+(e||0)-Date.now(),0)}function ap(a,e){return typeof a=="function"?a(e):a}function Jw(a,e){return typeof a=="function"?a(e):a}function M0(a,e){const{type:n="all",exact:r,fetchStatus:l,predicate:u,queryKey:f,stale:h}=a;if(f){if(r){if(e.queryHash!==bp(f,e.options))return!1}else if(!$o(e.queryKey,f))return!1}if(n!=="all"){const m=e.isActive();if(n==="active"&&!m||n==="inactive"&&m)return!1}return!(typeof h=="boolean"&&e.isStale()!==h||l&&l!==e.state.fetchStatus||u&&!u(e))}function b0(a,e){const{exact:n,status:r,predicate:l,mutationKey:u}=a;if(u){if(!e.options.mutationKey)return!1;if(n){if(Jo(e.options.mutationKey)!==Jo(u))return!1}else if(!$o(e.options.mutationKey,u))return!1}return!(r&&e.state.status!==r||l&&!l(e))}function bp(a,e){return(e?.queryKeyHashFn||Jo)(a)}function Jo(a){return JSON.stringify(a,(e,n)=>rp(n)?Object.keys(n).sort().reduce((r,l)=>(r[l]=n[l],r),{}):n)}function $o(a,e){return a===e?!0:typeof a!=typeof e?!1:a&&e&&typeof a=="object"&&typeof e=="object"?Object.keys(e).every(n=>$o(a[n],e[n])):!1}var $w=Object.prototype.hasOwnProperty;function Lx(a,e){if(a===e)return a;const n=T0(a)&&T0(e);if(!n&&!(rp(a)&&rp(e)))return e;const l=(n?a:Object.keys(a)).length,u=n?e:Object.keys(e),f=u.length,h=n?new Array(f):{};let m=0;for(let p=0;p<f;p++){const g=n?p:u[p],v=a[g],x=e[g];if(v===x){h[g]=v,(n?p<l:$w.call(a,g))&&m++;continue}if(v===null||x===null||typeof v!="object"||typeof x!="object"){h[g]=x;continue}const S=Lx(v,x);h[g]=S,S===v&&m++}return l===f&&m===l?a:h}function T0(a){return Array.isArray(a)&&a.length===Object.keys(a).length}function rp(a){if(!A0(a))return!1;const e=a.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!A0(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(a)!==Object.prototype)}function A0(a){return Object.prototype.toString.call(a)==="[object Object]"}function e2(a){return new Promise(e=>{ip.setTimeout(e,a)})}function t2(a,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(a,e):n.structuralSharing!==!1?Lx(a,e):e}function n2(a,e,n=0){const r=[...a,e];return n&&r.length>n?r.slice(1):r}function i2(a,e,n=0){const r=[e,...a];return n&&r.length>n?r.slice(0,-1):r}var Tp=Symbol();function Ox(a,e){return!a.queryFn&&e?.initialPromise?()=>e.initialPromise:!a.queryFn||a.queryFn===Tp?()=>Promise.reject(new Error(`Missing queryFn: '${a.queryHash}'`)):a.queryFn}var a2=class extends vc{#e;#t;#n;constructor(){super(),this.#n=a=>{if(!_c&&window.addEventListener){const e=()=>a();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(a){this.#n=a,this.#t?.(),this.#t=a(e=>{typeof e=="boolean"?this.setFocused(e):this.onFocus()})}setFocused(a){this.#e!==a&&(this.#e=a,this.onFocus())}onFocus(){const a=this.isFocused();this.listeners.forEach(e=>{e(a)})}isFocused(){return typeof this.#e=="boolean"?this.#e:globalThis.document?.visibilityState!=="hidden"}},Px=new a2;function r2(){let a,e;const n=new Promise((l,u)=>{a=l,e=u});n.status="pending",n.catch(()=>{});function r(l){Object.assign(n,l),delete n.resolve,delete n.reject}return n.resolve=l=>{r({status:"fulfilled",value:l}),a(l)},n.reject=l=>{r({status:"rejected",reason:l}),e(l)},n}var s2=Yw;function o2(){let a=[],e=0,n=h=>{h()},r=h=>{h()},l=s2;const u=h=>{e?a.push(h):l(()=>{n(h)})},f=()=>{const h=a;a=[],h.length&&l(()=>{r(()=>{h.forEach(m=>{n(m)})})})};return{batch:h=>{let m;e++;try{m=h()}finally{e--,e||f()}return m},batchCalls:h=>(...m)=>{u(()=>{h(...m)})},schedule:u,setNotifyFunction:h=>{n=h},setBatchNotifyFunction:h=>{r=h},setScheduler:h=>{l=h}}}var Gn=o2(),l2=class extends vc{#e=!0;#t;#n;constructor(){super(),this.#n=a=>{if(!_c&&window.addEventListener){const e=()=>a(!0),n=()=>a(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",n,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",n)}}}}onSubscribe(){this.#t||this.setEventListener(this.#n)}onUnsubscribe(){this.hasListeners()||(this.#t?.(),this.#t=void 0)}setEventListener(a){this.#n=a,this.#t?.(),this.#t=a(this.setOnline.bind(this))}setOnline(a){this.#e!==a&&(this.#e=a,this.listeners.forEach(n=>{n(a)}))}isOnline(){return this.#e}},cc=new l2;function u2(a){return Math.min(1e3*2**a,3e4)}function Ix(a){return(a??"online")==="online"?cc.isOnline():!0}var sp=class extends Error{constructor(a){super("CancelledError"),this.revert=a?.revert,this.silent=a?.silent}};function Fx(a){let e=!1,n=0,r;const l=r2(),u=()=>l.status!=="pending",f=b=>{if(!u()){const y=new sp(b);x(y),a.onCancel?.(y)}},h=()=>{e=!0},m=()=>{e=!1},p=()=>Px.isFocused()&&(a.networkMode==="always"||cc.isOnline())&&a.canRun(),g=()=>Ix(a.networkMode)&&a.canRun(),v=b=>{u()||(r?.(),l.resolve(b))},x=b=>{u()||(r?.(),l.reject(b))},S=()=>new Promise(b=>{r=y=>{(u()||p())&&b(y)},a.onPause?.()}).then(()=>{r=void 0,u()||a.onContinue?.()}),M=()=>{if(u())return;let b;const y=n===0?a.initialPromise:void 0;try{b=y??a.fn()}catch(_){b=Promise.reject(_)}Promise.resolve(b).then(v).catch(_=>{if(u())return;const N=a.retry??(_c?0:3),L=a.retryDelay??u2,U=typeof L=="function"?L(n,_):L,P=N===!0||typeof N=="number"&&n<N||typeof N=="function"&&N(n,_);if(e||!P){x(_);return}n++,a.onFail?.(n,_),e2(U).then(()=>p()?void 0:S()).then(()=>{e?x(_):M()})})};return{promise:l,status:()=>l.status,cancel:f,continue:()=>(r?.(),l),cancelRetry:h,continueRetry:m,canStart:g,start:()=>(g()?M():S().then(M),l)}}var Bx=class{#e;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Kw(this.gcTime)&&(this.#e=ip.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(a){this.gcTime=Math.max(this.gcTime||0,a??(_c?1/0:300*1e3))}clearGcTimeout(){this.#e&&(ip.clearTimeout(this.#e),this.#e=void 0)}},c2=class extends Bx{#e;#t;#n;#a;#i;#s;#o;constructor(a){super(),this.#o=!1,this.#s=a.defaultOptions,this.setOptions(a.options),this.observers=[],this.#a=a.client,this.#n=this.#a.getQueryCache(),this.queryKey=a.queryKey,this.queryHash=a.queryHash,this.#e=R0(this.options),this.state=a.state??this.#e,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#i?.promise}setOptions(a){if(this.options={...this.#s,...a},this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const e=R0(this.options);e.data!==void 0&&(this.setData(e.data,{updatedAt:e.dataUpdatedAt,manual:!0}),this.#e=e)}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.#n.remove(this)}setData(a,e){const n=t2(this.state.data,a,this.options);return this.#r({data:n,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),n}setState(a,e){this.#r({type:"setState",state:a,setStateOptions:e})}cancel(a){const e=this.#i?.promise;return this.#i?.cancel(a),e?e.then(Ai).catch(Ai):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#e)}isActive(){return this.observers.some(a=>Jw(a.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Tp||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(a=>ap(a.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(a=>a.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(a=0){return this.state.data===void 0?!0:a==="static"?!1:this.state.isInvalidated?!0:!Qw(this.state.dataUpdatedAt,a)}onFocus(){this.observers.find(e=>e.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),this.#i?.continue()}onOnline(){this.observers.find(e=>e.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),this.#i?.continue()}addObserver(a){this.observers.includes(a)||(this.observers.push(a),this.clearGcTimeout(),this.#n.notify({type:"observerAdded",query:this,observer:a}))}removeObserver(a){this.observers.includes(a)&&(this.observers=this.observers.filter(e=>e!==a),this.observers.length||(this.#i&&(this.#o?this.#i.cancel({revert:!0}):this.#i.cancelRetry()),this.scheduleGc()),this.#n.notify({type:"observerRemoved",query:this,observer:a}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#r({type:"invalidate"})}async fetch(a,e){if(this.state.fetchStatus!=="idle"&&this.#i?.status()!=="rejected"){if(this.state.data!==void 0&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#i)return this.#i.continueRetry(),this.#i.promise}if(a&&this.setOptions(a),!this.options.queryFn){const h=this.observers.find(m=>m.options.queryFn);h&&this.setOptions(h.options)}const n=new AbortController,r=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(this.#o=!0,n.signal)})},l=()=>{const h=Ox(this.options,e),p=(()=>{const g={client:this.#a,queryKey:this.queryKey,meta:this.meta};return r(g),g})();return this.#o=!1,this.options.persister?this.options.persister(h,p,this):h(p)},f=(()=>{const h={fetchOptions:e,options:this.options,queryKey:this.queryKey,client:this.#a,state:this.state,fetchFn:l};return r(h),h})();this.options.behavior?.onFetch(f,this),this.#t=this.state,(this.state.fetchStatus==="idle"||this.state.fetchMeta!==f.fetchOptions?.meta)&&this.#r({type:"fetch",meta:f.fetchOptions?.meta}),this.#i=Fx({initialPromise:e?.initialPromise,fn:f.fetchFn,onCancel:h=>{h instanceof sp&&h.revert&&this.setState({...this.#t,fetchStatus:"idle"}),n.abort()},onFail:(h,m)=>{this.#r({type:"failed",failureCount:h,error:m})},onPause:()=>{this.#r({type:"pause"})},onContinue:()=>{this.#r({type:"continue"})},retry:f.options.retry,retryDelay:f.options.retryDelay,networkMode:f.options.networkMode,canRun:()=>!0});try{const h=await this.#i.start();if(h===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(h),this.#n.config.onSuccess?.(h,this),this.#n.config.onSettled?.(h,this.state.error,this),h}catch(h){if(h instanceof sp){if(h.silent)return this.#i.promise;if(h.revert){if(this.state.data===void 0)throw h;return this.state.data}}throw this.#r({type:"error",error:h}),this.#n.config.onError?.(h,this),this.#n.config.onSettled?.(this.state.data,h,this),h}finally{this.scheduleGc()}}#r(a){const e=n=>{switch(a.type){case"failed":return{...n,fetchFailureCount:a.failureCount,fetchFailureReason:a.error};case"pause":return{...n,fetchStatus:"paused"};case"continue":return{...n,fetchStatus:"fetching"};case"fetch":return{...n,...f2(n.data,this.options),fetchMeta:a.meta??null};case"success":const r={...n,data:a.data,dataUpdateCount:n.dataUpdateCount+1,dataUpdatedAt:a.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!a.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return this.#t=a.manual?r:void 0,r;case"error":const l=a.error;return{...n,error:l,errorUpdateCount:n.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:n.fetchFailureCount+1,fetchFailureReason:l,fetchStatus:"idle",status:"error"};case"invalidate":return{...n,isInvalidated:!0};case"setState":return{...n,...a.state}}};this.state=e(this.state),Gn.batch(()=>{this.observers.forEach(n=>{n.onQueryUpdate()}),this.#n.notify({query:this,type:"updated",action:a})})}};function f2(a,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Ix(e.networkMode)?"fetching":"paused",...a===void 0&&{error:null,status:"pending"}}}function R0(a){const e=typeof a.initialData=="function"?a.initialData():a.initialData,n=e!==void 0,r=n?typeof a.initialDataUpdatedAt=="function"?a.initialDataUpdatedAt():a.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}function C0(a){return{onFetch:(e,n)=>{const r=e.options,l=e.fetchOptions?.meta?.fetchMore?.direction,u=e.state.data?.pages||[],f=e.state.data?.pageParams||[];let h={pages:[],pageParams:[]},m=0;const p=async()=>{let g=!1;const v=M=>{Object.defineProperty(M,"signal",{enumerable:!0,get:()=>(e.signal.aborted?g=!0:e.signal.addEventListener("abort",()=>{g=!0}),e.signal)})},x=Ox(e.options,e.fetchOptions),S=async(M,b,y)=>{if(g)return Promise.reject();if(b==null&&M.pages.length)return Promise.resolve(M);const N=(()=>{const H={client:e.client,queryKey:e.queryKey,pageParam:b,direction:y?"backward":"forward",meta:e.options.meta};return v(H),H})(),L=await x(N),{maxPages:U}=e.options,P=y?i2:n2;return{pages:P(M.pages,L,U),pageParams:P(M.pageParams,b,U)}};if(l&&u.length){const M=l==="backward",b=M?h2:w0,y={pages:u,pageParams:f},_=b(r,y);h=await S(y,_,M)}else{const M=a??u.length;do{const b=m===0?f[0]??r.initialPageParam:w0(r,h);if(m>0&&b==null)break;h=await S(h,b),m++}while(m<M)}return h};e.options.persister?e.fetchFn=()=>e.options.persister?.(p,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n):e.fetchFn=p}}}function w0(a,{pages:e,pageParams:n}){const r=e.length-1;return e.length>0?a.getNextPageParam(e[r],e,n[r],n):void 0}function h2(a,{pages:e,pageParams:n}){return e.length>0?a.getPreviousPageParam?.(e[0],e,n[0],n):void 0}var d2=class extends Bx{#e;#t;#n;constructor(a){super(),this.mutationId=a.mutationId,this.#t=a.mutationCache,this.#e=[],this.state=a.state||p2(),this.setOptions(a.options),this.scheduleGc()}setOptions(a){this.options=a,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(a){this.#e.includes(a)||(this.#e.push(a),this.clearGcTimeout(),this.#t.notify({type:"observerAdded",mutation:this,observer:a}))}removeObserver(a){this.#e=this.#e.filter(e=>e!==a),this.scheduleGc(),this.#t.notify({type:"observerRemoved",mutation:this,observer:a})}optionalRemove(){this.#e.length||(this.state.status==="pending"?this.scheduleGc():this.#t.remove(this))}continue(){return this.#n?.continue()??this.execute(this.state.variables)}async execute(a){const e=()=>{this.#a({type:"continue"})};this.#n=Fx({fn:()=>this.options.mutationFn?this.options.mutationFn(a):Promise.reject(new Error("No mutationFn found")),onFail:(l,u)=>{this.#a({type:"failed",failureCount:l,error:u})},onPause:()=>{this.#a({type:"pause"})},onContinue:e,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#t.canRun(this)});const n=this.state.status==="pending",r=!this.#n.canStart();try{if(n)e();else{this.#a({type:"pending",variables:a,isPaused:r}),await this.#t.config.onMutate?.(a,this);const u=await this.options.onMutate?.(a);u!==this.state.context&&this.#a({type:"pending",context:u,variables:a,isPaused:r})}const l=await this.#n.start();return await this.#t.config.onSuccess?.(l,a,this.state.context,this),await this.options.onSuccess?.(l,a,this.state.context),await this.#t.config.onSettled?.(l,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(l,null,a,this.state.context),this.#a({type:"success",data:l}),l}catch(l){try{throw await this.#t.config.onError?.(l,a,this.state.context,this),await this.options.onError?.(l,a,this.state.context),await this.#t.config.onSettled?.(void 0,l,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,l,a,this.state.context),l}finally{this.#a({type:"error",error:l})}}finally{this.#t.runNext(this)}}#a(a){const e=n=>{switch(a.type){case"failed":return{...n,failureCount:a.failureCount,failureReason:a.error};case"pause":return{...n,isPaused:!0};case"continue":return{...n,isPaused:!1};case"pending":return{...n,context:a.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:a.isPaused,status:"pending",variables:a.variables,submittedAt:Date.now()};case"success":return{...n,data:a.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...n,data:void 0,error:a.error,failureCount:n.failureCount+1,failureReason:a.error,isPaused:!1,status:"error"}}};this.state=e(this.state),Gn.batch(()=>{this.#e.forEach(n=>{n.onMutationUpdate(a)}),this.#t.notify({mutation:this,type:"updated",action:a})})}};function p2(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var m2=class extends vc{constructor(a={}){super(),this.config=a,this.#e=new Set,this.#t=new Map,this.#n=0}#e;#t;#n;build(a,e,n){const r=new d2({mutationCache:this,mutationId:++this.#n,options:a.defaultMutationOptions(e),state:n});return this.add(r),r}add(a){this.#e.add(a);const e=Wu(a);if(typeof e=="string"){const n=this.#t.get(e);n?n.push(a):this.#t.set(e,[a])}this.notify({type:"added",mutation:a})}remove(a){if(this.#e.delete(a)){const e=Wu(a);if(typeof e=="string"){const n=this.#t.get(e);if(n)if(n.length>1){const r=n.indexOf(a);r!==-1&&n.splice(r,1)}else n[0]===a&&this.#t.delete(e)}}this.notify({type:"removed",mutation:a})}canRun(a){const e=Wu(a);if(typeof e=="string"){const r=this.#t.get(e)?.find(l=>l.state.status==="pending");return!r||r===a}else return!0}runNext(a){const e=Wu(a);return typeof e=="string"?this.#t.get(e)?.find(r=>r!==a&&r.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){Gn.batch(()=>{this.#e.forEach(a=>{this.notify({type:"removed",mutation:a})}),this.#e.clear(),this.#t.clear()})}getAll(){return Array.from(this.#e)}find(a){const e={exact:!0,...a};return this.getAll().find(n=>b0(e,n))}findAll(a={}){return this.getAll().filter(e=>b0(a,e))}notify(a){Gn.batch(()=>{this.listeners.forEach(e=>{e(a)})})}resumePausedMutations(){const a=this.getAll().filter(e=>e.state.isPaused);return Gn.batch(()=>Promise.all(a.map(e=>e.continue().catch(Ai))))}};function Wu(a){return a.options.scope?.id}var g2=class extends vc{constructor(a={}){super(),this.config=a,this.#e=new Map}#e;build(a,e,n){const r=e.queryKey,l=e.queryHash??bp(r,e);let u=this.get(l);return u||(u=new c2({client:a,queryKey:r,queryHash:l,options:a.defaultQueryOptions(e),state:n,defaultOptions:a.getQueryDefaults(r)}),this.add(u)),u}add(a){this.#e.has(a.queryHash)||(this.#e.set(a.queryHash,a),this.notify({type:"added",query:a}))}remove(a){const e=this.#e.get(a.queryHash);e&&(a.destroy(),e===a&&this.#e.delete(a.queryHash),this.notify({type:"removed",query:a}))}clear(){Gn.batch(()=>{this.getAll().forEach(a=>{this.remove(a)})})}get(a){return this.#e.get(a)}getAll(){return[...this.#e.values()]}find(a){const e={exact:!0,...a};return this.getAll().find(n=>M0(e,n))}findAll(a={}){const e=this.getAll();return Object.keys(a).length>0?e.filter(n=>M0(a,n)):e}notify(a){Gn.batch(()=>{this.listeners.forEach(e=>{e(a)})})}onFocus(){Gn.batch(()=>{this.getAll().forEach(a=>{a.onFocus()})})}onOnline(){Gn.batch(()=>{this.getAll().forEach(a=>{a.onOnline()})})}},v2=class{#e;#t;#n;#a;#i;#s;#o;#r;constructor(a={}){this.#e=a.queryCache||new g2,this.#t=a.mutationCache||new m2,this.#n=a.defaultOptions||{},this.#a=new Map,this.#i=new Map,this.#s=0}mount(){this.#s++,this.#s===1&&(this.#o=Px.subscribe(async a=>{a&&(await this.resumePausedMutations(),this.#e.onFocus())}),this.#r=cc.subscribe(async a=>{a&&(await this.resumePausedMutations(),this.#e.onOnline())}))}unmount(){this.#s--,this.#s===0&&(this.#o?.(),this.#o=void 0,this.#r?.(),this.#r=void 0)}isFetching(a){return this.#e.findAll({...a,fetchStatus:"fetching"}).length}isMutating(a){return this.#t.findAll({...a,status:"pending"}).length}getQueryData(a){const e=this.defaultQueryOptions({queryKey:a});return this.#e.get(e.queryHash)?.state.data}ensureQueryData(a){const e=this.defaultQueryOptions(a),n=this.#e.build(this,e),r=n.state.data;return r===void 0?this.fetchQuery(a):(a.revalidateIfStale&&n.isStaleByTime(ap(e.staleTime,n))&&this.prefetchQuery(e),Promise.resolve(r))}getQueriesData(a){return this.#e.findAll(a).map(({queryKey:e,state:n})=>{const r=n.data;return[e,r]})}setQueryData(a,e,n){const r=this.defaultQueryOptions({queryKey:a}),u=this.#e.get(r.queryHash)?.state.data,f=Zw(e,u);if(f!==void 0)return this.#e.build(this,r).setData(f,{...n,manual:!0})}setQueriesData(a,e,n){return Gn.batch(()=>this.#e.findAll(a).map(({queryKey:r})=>[r,this.setQueryData(r,e,n)]))}getQueryState(a){const e=this.defaultQueryOptions({queryKey:a});return this.#e.get(e.queryHash)?.state}removeQueries(a){const e=this.#e;Gn.batch(()=>{e.findAll(a).forEach(n=>{e.remove(n)})})}resetQueries(a,e){const n=this.#e;return Gn.batch(()=>(n.findAll(a).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...a},e)))}cancelQueries(a,e={}){const n={revert:!0,...e},r=Gn.batch(()=>this.#e.findAll(a).map(l=>l.cancel(n)));return Promise.all(r).then(Ai).catch(Ai)}invalidateQueries(a,e={}){return Gn.batch(()=>(this.#e.findAll(a).forEach(n=>{n.invalidate()}),a?.refetchType==="none"?Promise.resolve():this.refetchQueries({...a,type:a?.refetchType??a?.type??"active"},e)))}refetchQueries(a,e={}){const n={...e,cancelRefetch:e.cancelRefetch??!0},r=Gn.batch(()=>this.#e.findAll(a).filter(l=>!l.isDisabled()&&!l.isStatic()).map(l=>{let u=l.fetch(void 0,n);return n.throwOnError||(u=u.catch(Ai)),l.state.fetchStatus==="paused"?Promise.resolve():u}));return Promise.all(r).then(Ai)}fetchQuery(a){const e=this.defaultQueryOptions(a);e.retry===void 0&&(e.retry=!1);const n=this.#e.build(this,e);return n.isStaleByTime(ap(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(a){return this.fetchQuery(a).then(Ai).catch(Ai)}fetchInfiniteQuery(a){return a.behavior=C0(a.pages),this.fetchQuery(a)}prefetchInfiniteQuery(a){return this.fetchInfiniteQuery(a).then(Ai).catch(Ai)}ensureInfiniteQueryData(a){return a.behavior=C0(a.pages),this.ensureQueryData(a)}resumePausedMutations(){return cc.isOnline()?this.#t.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#e}getMutationCache(){return this.#t}getDefaultOptions(){return this.#n}setDefaultOptions(a){this.#n=a}setQueryDefaults(a,e){this.#a.set(Jo(a),{queryKey:a,defaultOptions:e})}getQueryDefaults(a){const e=[...this.#a.values()],n={};return e.forEach(r=>{$o(a,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(a,e){this.#i.set(Jo(a),{mutationKey:a,defaultOptions:e})}getMutationDefaults(a){const e=[...this.#i.values()],n={};return e.forEach(r=>{$o(a,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(a){if(a._defaulted)return a;const e={...this.#n.queries,...this.getQueryDefaults(a.queryKey),...a,_defaulted:!0};return e.queryHash||(e.queryHash=bp(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===Tp&&(e.enabled=!1),e}defaultMutationOptions(a){return a?._defaulted?a:{...this.#n.mutations,...a?.mutationKey&&this.getMutationDefaults(a.mutationKey),...a,_defaulted:!0}}clear(){this.#e.clear(),this.#t.clear()}},_2=de.createContext(void 0),x2=({client:a,children:e})=>(de.useEffect(()=>(a.mount(),()=>{a.unmount()}),[a]),J.jsx(_2.Provider,{value:a,children:e}));const y2=new v2;QS.createRoot(document.getElementById("root")).render(J.jsx(de.StrictMode,{children:J.jsx(x2,{client:y2,children:J.jsx(hM,{children:J.jsx(Ww,{})})})}));
