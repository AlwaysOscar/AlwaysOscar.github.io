(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Nc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zc={exports:{}},jl={},_c={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),UA=Symbol.for("react.portal"),WA=Symbol.for("react.fragment"),YA=Symbol.for("react.strict_mode"),GA=Symbol.for("react.profiler"),KA=Symbol.for("react.provider"),XA=Symbol.for("react.context"),ZA=Symbol.for("react.forward_ref"),qA=Symbol.for("react.suspense"),ep=Symbol.for("react.memo"),tp=Symbol.for("react.lazy"),tu=Symbol.iterator;function np(e){return e===null||typeof e!="object"?null:(e=tu&&e[tu]||e["@@iterator"],typeof e=="function"?e:null)}var jc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pc=Object.assign,Mc={};function mr(e,t,n){this.props=e,this.context=t,this.refs=Mc,this.updater=n||jc}mr.prototype.isReactComponent={};mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Hc(){}Hc.prototype=mr.prototype;function Ya(e,t,n){this.props=e,this.context=t,this.refs=Mc,this.updater=n||jc}var Ga=Ya.prototype=new Hc;Ga.constructor=Ya;Pc(Ga,mr.prototype);Ga.isPureReactComponent=!0;var nu=Array.isArray,Rc=Object.prototype.hasOwnProperty,Ka={current:null},Lc={key:!0,ref:!0,__self:!0,__source:!0};function Fc(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Rc.call(t,r)&&!Lc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:mo,type:e,key:l,ref:i,props:o,_owner:Ka.current}}function rp(e,t){return{$$typeof:mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xa(e){return typeof e=="object"&&e!==null&&e.$$typeof===mo}function op(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ru=/\/+/g;function fi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?op(""+e.key):t.toString(36)}function Jo(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case mo:case UA:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+fi(i,0):r,nu(o)?(n="",e!=null&&(n=e.replace(ru,"$&/")+"/"),Jo(o,t,n,"",function(u){return u})):o!=null&&(Xa(o)&&(o=rp(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(ru,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",nu(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+fi(l,a);i+=Jo(l,t,n,s,o)}else if(s=np(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+fi(l,a++),i+=Jo(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Eo(e,t,n){if(e==null)return e;var r=[],o=0;return Jo(e,r,"","",function(l){return t.call(n,l,o++)}),r}function lp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},Uo={transition:null},ip={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Uo,ReactCurrentOwner:Ka};function Vc(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Eo,forEach:function(e,t,n){Eo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Eo(e,function(){t++}),t},toArray:function(e){return Eo(e,function(t){return t})||[]},only:function(e){if(!Xa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=mr;U.Fragment=WA;U.Profiler=GA;U.PureComponent=Ya;U.StrictMode=YA;U.Suspense=qA;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ip;U.act=Vc;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pc({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Ka.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Rc.call(t,s)&&!Lc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:mo,type:e.type,key:o,ref:l,props:r,_owner:i}};U.createContext=function(e){return e={$$typeof:XA,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:KA,_context:e},e.Consumer=e};U.createElement=Fc;U.createFactory=function(e){var t=Fc.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:ZA,render:e}};U.isValidElement=Xa;U.lazy=function(e){return{$$typeof:tp,_payload:{_status:-1,_result:e},_init:lp}};U.memo=function(e,t){return{$$typeof:ep,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Uo.transition;Uo.transition={};try{e()}finally{Uo.transition=t}};U.unstable_act=Vc;U.useCallback=function(e,t){return Me.current.useCallback(e,t)};U.useContext=function(e){return Me.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};U.useEffect=function(e,t){return Me.current.useEffect(e,t)};U.useId=function(){return Me.current.useId()};U.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Me.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};U.useRef=function(e){return Me.current.useRef(e)};U.useState=function(e){return Me.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Me.current.useTransition()};U.version="18.3.1";_c.exports=U;var w=_c.exports;const m=Nc(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap=w,sp=Symbol.for("react.element"),up=Symbol.for("react.fragment"),cp=Object.prototype.hasOwnProperty,dp=ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fp={key:!0,ref:!0,__self:!0,__source:!0};function Jc(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)cp.call(t,r)&&!fp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:sp,type:e,key:l,ref:i,props:o,_owner:dp.current}}jl.Fragment=up;jl.jsx=Jc;jl.jsxs=Jc;zc.exports=jl;var y=zc.exports,Uc={exports:{}},Xe={},Wc={exports:{}},Yc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(B,I){var z=B.length;B.push(I);e:for(;0<z;){var W=z-1>>>1,F=B[W];if(0<o(F,I))B[W]=I,B[z]=F,z=W;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var I=B[0],z=B.pop();if(z!==I){B[0]=z;e:for(var W=0,F=B.length,j=F>>>1;W<j;){var P=2*(W+1)-1,Y=B[P],M=P+1,V=B[M];if(0>o(Y,z))M<F&&0>o(V,Y)?(B[W]=V,B[M]=z,W=M):(B[W]=Y,B[P]=z,W=P);else if(M<F&&0>o(V,z))B[W]=V,B[M]=z,W=M;else break e}}return I}function o(B,I){var z=B.sortIndex-I.sortIndex;return z!==0?z:B.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],u=[],h=1,A=null,p=3,v=!1,x=!1,k=!1,$=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(B){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=B)r(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(u)}}function g(B){if(k=!1,f(B),!x)if(n(s)!==null)x=!0,ve(C);else{var I=n(u);I!==null&&ye(g,I.startTime-B)}}function C(B,I){x=!1,k&&(k=!1,d(T),T=-1),v=!0;var z=p;try{for(f(I),A=n(s);A!==null&&(!(A.expirationTime>I)||B&&!Z());){var W=A.callback;if(typeof W=="function"){A.callback=null,p=A.priorityLevel;var F=W(A.expirationTime<=I);I=e.unstable_now(),typeof F=="function"?A.callback=F:A===n(s)&&r(s),f(I)}else r(s);A=n(s)}if(A!==null)var j=!0;else{var P=n(u);P!==null&&ye(g,P.startTime-I),j=!1}return j}finally{A=null,p=z,v=!1}}var E=!1,S=null,T=-1,H=5,_=-1;function Z(){return!(e.unstable_now()-_<H)}function q(){if(S!==null){var B=e.unstable_now();_=B;var I=!0;try{I=S(!0,B)}finally{I?de():(E=!1,S=null)}}else E=!1}var de;if(typeof c=="function")de=function(){c(q)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ae=fe.port2;fe.port1.onmessage=q,de=function(){ae.postMessage(null)}}else de=function(){$(q,0)};function ve(B){S=B,E||(E=!0,de())}function ye(B,I){T=$(function(){B(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,ve(C))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(B){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var z=p;p=I;try{return B()}finally{p=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,I){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var z=p;p=B;try{return I()}finally{p=z}},e.unstable_scheduleCallback=function(B,I,z){var W=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?W+z:W):z=W,B){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=z+F,B={id:h++,callback:I,priorityLevel:B,startTime:z,expirationTime:F,sortIndex:-1},z>W?(B.sortIndex=z,t(u,B),n(s)===null&&B===n(u)&&(k?(d(T),T=-1):k=!0,ye(g,z-W))):(B.sortIndex=F,t(s,B),x||v||(x=!0,ve(C))),B},e.unstable_shouldYield=Z,e.unstable_wrapCallback=function(B){var I=p;return function(){var z=p;p=I;try{return B.apply(this,arguments)}finally{p=z}}}})(Yc);Wc.exports=Yc;var Ap=Wc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp=w,Ke=Ap;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gc=new Set,Gr={};function In(e,t){lr(e,t),lr(e+"Capture",t)}function lr(e,t){for(Gr[e]=t,e=0;e<t.length;e++)Gc.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fi=Object.prototype.hasOwnProperty,hp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ou={},lu={};function gp(e){return Fi.call(lu,e)?!0:Fi.call(ou,e)?!1:hp.test(e)?lu[e]=!0:(ou[e]=!0,!1)}function mp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vp(e,t,n,r){if(t===null||typeof t>"u"||mp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var Za=/[\-:]([a-z])/g;function qa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Za,qa);Ie[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Za,qa);Ie[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Za,qa);Ie[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function es(e,t,n,r){var o=Ie.hasOwnProperty(t)?Ie[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vp(t,n,o,r)&&(n=null),r||o===null?gp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),ts=Symbol.for("react.strict_mode"),Vi=Symbol.for("react.profiler"),Kc=Symbol.for("react.provider"),Xc=Symbol.for("react.context"),ns=Symbol.for("react.forward_ref"),Ji=Symbol.for("react.suspense"),Ui=Symbol.for("react.suspense_list"),rs=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),Zc=Symbol.for("react.offscreen"),iu=Symbol.iterator;function kr(e){return e===null||typeof e!="object"?null:(e=iu&&e[iu]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Ai;function Nr(e){if(Ai===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ai=t&&t[1]||""}return`
`+Ai+e}var pi=!1;function hi(e,t){if(!e||pi)return"";pi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{pi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nr(e):""}function yp(e){switch(e.tag){case 5:return Nr(e.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return e=hi(e.type,!1),e;case 11:return e=hi(e.type.render,!1),e;case 1:return e=hi(e.type,!0),e;default:return""}}function Wi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Mn:return"Portal";case Vi:return"Profiler";case ts:return"StrictMode";case Ji:return"Suspense";case Ui:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xc:return(e.displayName||"Context")+".Consumer";case Kc:return(e._context.displayName||"Context")+".Provider";case ns:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rs:return t=e.displayName||null,t!==null?t:Wi(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return Wi(e(t))}catch{}}return null}function wp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wi(t);case 8:return t===ts?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xp(e){var t=qc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){e._valueTracker||(e._valueTracker=xp(e))}function ed(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yi(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function td(e,t){t=t.checked,t!=null&&es(e,"checked",t,!1)}function Gi(e,t){td(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ki(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ki(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function su(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ki(e,t,n){(t!=="number"||sl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zr=Array.isArray;function qn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Xi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(O(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(O(92));if(zr(n)){if(1<n.length)throw Error(O(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function nd(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function rd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bo,od=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bo=Bo||document.createElement("div"),Bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kp=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){kp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function ld(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function id(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ld(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ep=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qi(e,t){if(t){if(Ep[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(O(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(O(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(O(61))}if(t.style!=null&&typeof t.style!="object")throw Error(O(62))}}function ea(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ta=null;function os(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var na=null,er=null,tr=null;function du(e){if(e=wo(e)){if(typeof na!="function")throw Error(O(280));var t=e.stateNode;t&&(t=Ll(t),na(e.stateNode,e.type,t))}}function ad(e){er?tr?tr.push(e):tr=[e]:er=e}function sd(){if(er){var e=er,t=tr;if(tr=er=null,du(e),t)for(e=0;e<t.length;e++)du(t[e])}}function ud(e,t){return e(t)}function cd(){}var gi=!1;function dd(e,t,n){if(gi)return e(t,n);gi=!0;try{return ud(e,t,n)}finally{gi=!1,(er!==null||tr!==null)&&(cd(),sd())}}function Xr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ll(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(O(231,t,typeof n));return n}var ra=!1;if(Nt)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){ra=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{ra=!1}function Cp(e,t,n,r,o,l,i,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Hr=!1,ul=null,cl=!1,oa=null,Sp={onError:function(e){Hr=!0,ul=e}};function Bp(e,t,n,r,o,l,i,a,s){Hr=!1,ul=null,Cp.apply(Sp,arguments)}function Dp(e,t,n,r,o,l,i,a,s){if(Bp.apply(this,arguments),Hr){if(Hr){var u=ul;Hr=!1,ul=null}else throw Error(O(198));cl||(cl=!0,oa=u)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fu(e){if(Qn(e)!==e)throw Error(O(188))}function Op(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(O(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return fu(o),e;if(l===r)return fu(o),t;l=l.sibling}throw Error(O(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?e:t}function Ad(e){return e=Op(e),e!==null?pd(e):null}function pd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pd(e);if(t!==null)return t;e=e.sibling}return null}var hd=Ke.unstable_scheduleCallback,Au=Ke.unstable_cancelCallback,bp=Ke.unstable_shouldYield,$p=Ke.unstable_requestPaint,he=Ke.unstable_now,Tp=Ke.unstable_getCurrentPriorityLevel,ls=Ke.unstable_ImmediatePriority,gd=Ke.unstable_UserBlockingPriority,dl=Ke.unstable_NormalPriority,Ip=Ke.unstable_LowPriority,md=Ke.unstable_IdlePriority,Pl=null,kt=null;function Qp(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Pl,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:_p,Np=Math.log,zp=Math.LN2;function _p(e){return e>>>=0,e===0?32:31-(Np(e)/zp|0)|0}var Do=64,Oo=4194304;function _r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=_r(a):(l&=i,l!==0&&(r=_r(l)))}else i=n&~o,i!==0?r=_r(i):l!==0&&(r=_r(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),o=1<<n,r|=e[n],t&=~o;return r}function jp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-dt(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=jp(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function la(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vd(){var e=Do;return Do<<=1,!(Do&4194240)&&(Do=64),e}function mi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function Mp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-dt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function is(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ee=0;function yd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wd,as,xd,kd,Ed,ia=!1,bo=[],Gt=null,Kt=null,Xt=null,Zr=new Map,qr=new Map,Jt=[],Hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pu(e,t){switch(e){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(t.pointerId)}}function Cr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=wo(t),t!==null&&as(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Rp(e,t,n,r,o){switch(t){case"focusin":return Gt=Cr(Gt,e,t,n,r,o),!0;case"dragenter":return Kt=Cr(Kt,e,t,n,r,o),!0;case"mouseover":return Xt=Cr(Xt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Zr.set(l,Cr(Zr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,qr.set(l,Cr(qr.get(l)||null,e,t,n,r,o)),!0}return!1}function Cd(e){var t=gn(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=fd(n),t!==null){e.blockedOn=t,Ed(e.priority,function(){xd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ta=r,n.target.dispatchEvent(r),ta=null}else return t=wo(n),t!==null&&as(t),e.blockedOn=n,!1;t.shift()}return!0}function hu(e,t,n){Wo(e)&&n.delete(t)}function Lp(){ia=!1,Gt!==null&&Wo(Gt)&&(Gt=null),Kt!==null&&Wo(Kt)&&(Kt=null),Xt!==null&&Wo(Xt)&&(Xt=null),Zr.forEach(hu),qr.forEach(hu)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,ia||(ia=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Lp)))}function eo(e){function t(o){return Sr(o,e)}if(0<bo.length){Sr(bo[0],e);for(var n=1;n<bo.length;n++){var r=bo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Gt!==null&&Sr(Gt,e),Kt!==null&&Sr(Kt,e),Xt!==null&&Sr(Xt,e),Zr.forEach(t),qr.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)Cd(n),n.blockedOn===null&&Jt.shift()}var nr=Pt.ReactCurrentBatchConfig,Al=!0;function Fp(e,t,n,r){var o=ee,l=nr.transition;nr.transition=null;try{ee=1,ss(e,t,n,r)}finally{ee=o,nr.transition=l}}function Vp(e,t,n,r){var o=ee,l=nr.transition;nr.transition=null;try{ee=4,ss(e,t,n,r)}finally{ee=o,nr.transition=l}}function ss(e,t,n,r){if(Al){var o=aa(e,t,n,r);if(o===null)Di(e,t,r,pl,n),pu(e,r);else if(Rp(o,e,t,n,r))r.stopPropagation();else if(pu(e,r),t&4&&-1<Hp.indexOf(e)){for(;o!==null;){var l=wo(o);if(l!==null&&wd(l),l=aa(e,t,n,r),l===null&&Di(e,t,r,pl,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Di(e,t,r,null,n)}}var pl=null;function aa(e,t,n,r){if(pl=null,e=os(r),e=gn(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pl=e,null}function Sd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tp()){case ls:return 1;case gd:return 4;case dl:case Ip:return 16;case md:return 536870912;default:return 16}default:return 16}}var Wt=null,us=null,Yo=null;function Bd(){if(Yo)return Yo;var e,t=us,n=t.length,r,o="value"in Wt?Wt.value:Wt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return Yo=o.slice(e,1<r?1-r:void 0)}function Go(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function gu(){return!1}function Ze(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?$o:gu,this.isPropagationStopped=gu,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),t}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=Ze(vr),yo=ce({},vr,{view:0,detail:0}),Jp=Ze(yo),vi,yi,Br,Ml=ce({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ds,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(vi=e.screenX-Br.screenX,yi=e.screenY-Br.screenY):yi=vi=0,Br=e),vi)},movementY:function(e){return"movementY"in e?e.movementY:yi}}),mu=Ze(Ml),Up=ce({},Ml,{dataTransfer:0}),Wp=Ze(Up),Yp=ce({},yo,{relatedTarget:0}),wi=Ze(Yp),Gp=ce({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kp=Ze(Gp),Xp=ce({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zp=Ze(Xp),qp=ce({},vr,{data:0}),vu=Ze(qp),eh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},th={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nh[e])?!!t[e]:!1}function ds(){return rh}var oh=ce({},yo,{key:function(e){if(e.key){var t=eh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?th[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ds,charCode:function(e){return e.type==="keypress"?Go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lh=Ze(oh),ih=ce({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yu=Ze(ih),ah=ce({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ds}),sh=Ze(ah),uh=ce({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ch=Ze(uh),dh=ce({},Ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fh=Ze(dh),Ah=[9,13,27,32],fs=Nt&&"CompositionEvent"in window,Rr=null;Nt&&"documentMode"in document&&(Rr=document.documentMode);var ph=Nt&&"TextEvent"in window&&!Rr,Dd=Nt&&(!fs||Rr&&8<Rr&&11>=Rr),wu=" ",xu=!1;function Od(e,t){switch(e){case"keyup":return Ah.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function hh(e,t){switch(e){case"compositionend":return bd(t);case"keypress":return t.which!==32?null:(xu=!0,wu);case"textInput":return e=t.data,e===wu&&xu?null:e;default:return null}}function gh(e,t){if(Rn)return e==="compositionend"||!fs&&Od(e,t)?(e=Bd(),Yo=us=Wt=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dd&&t.locale!=="ko"?null:t.data;default:return null}}var mh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mh[e.type]:t==="textarea"}function $d(e,t,n,r){ad(r),t=hl(t,"onChange"),0<t.length&&(n=new cs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Lr=null,to=null;function vh(e){Rd(e,0)}function Hl(e){var t=Vn(e);if(ed(t))return e}function yh(e,t){if(e==="change")return t}var Td=!1;if(Nt){var xi;if(Nt){var ki="oninput"in document;if(!ki){var Eu=document.createElement("div");Eu.setAttribute("oninput","return;"),ki=typeof Eu.oninput=="function"}xi=ki}else xi=!1;Td=xi&&(!document.documentMode||9<document.documentMode)}function Cu(){Lr&&(Lr.detachEvent("onpropertychange",Id),to=Lr=null)}function Id(e){if(e.propertyName==="value"&&Hl(to)){var t=[];$d(t,to,e,os(e)),dd(vh,t)}}function wh(e,t,n){e==="focusin"?(Cu(),Lr=t,to=n,Lr.attachEvent("onpropertychange",Id)):e==="focusout"&&Cu()}function xh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hl(to)}function kh(e,t){if(e==="click")return Hl(t)}function Eh(e,t){if(e==="input"||e==="change")return Hl(t)}function Ch(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Ch;function no(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Fi.call(t,o)||!pt(e[o],t[o]))return!1}return!0}function Su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bu(e,t){var n=Su(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Su(n)}}function Qd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Qd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nd(){for(var e=window,t=sl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sl(e.document)}return t}function As(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sh(e){var t=Nd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Qd(n.ownerDocument.documentElement,n)){if(r!==null&&As(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Bu(n,l);var i=Bu(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bh=Nt&&"documentMode"in document&&11>=document.documentMode,Ln=null,sa=null,Fr=null,ua=!1;function Du(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ua||Ln==null||Ln!==sl(r)||(r=Ln,"selectionStart"in r&&As(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fr&&no(Fr,r)||(Fr=r,r=hl(sa,"onSelect"),0<r.length&&(t=new cs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ln)))}function To(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fn={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},Ei={},zd={};Nt&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function Rl(e){if(Ei[e])return Ei[e];if(!Fn[e])return e;var t=Fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zd)return Ei[e]=t[n];return e}var _d=Rl("animationend"),jd=Rl("animationiteration"),Pd=Rl("animationstart"),Md=Rl("transitionend"),Hd=new Map,Ou="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){Hd.set(e,t),In(t,[e])}for(var Ci=0;Ci<Ou.length;Ci++){var Si=Ou[Ci],Dh=Si.toLowerCase(),Oh=Si[0].toUpperCase()+Si.slice(1);un(Dh,"on"+Oh)}un(_d,"onAnimationEnd");un(jd,"onAnimationIteration");un(Pd,"onAnimationStart");un("dblclick","onDoubleClick");un("focusin","onFocus");un("focusout","onBlur");un(Md,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));In("onBeforeInput",["compositionend","keypress","textInput","paste"]);In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bh=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function bu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dp(r,t,void 0,e),e.currentTarget=null}function Rd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;bu(o,a,u),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,u=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;bu(o,a,u),l=s}}}if(cl)throw e=oa,cl=!1,oa=null,e}function ne(e,t){var n=t[pa];n===void 0&&(n=t[pa]=new Set);var r=e+"__bubble";n.has(r)||(Ld(t,e,2,!1),n.add(r))}function Bi(e,t,n){var r=0;t&&(r|=4),Ld(n,e,r,t)}var Io="_reactListening"+Math.random().toString(36).slice(2);function ro(e){if(!e[Io]){e[Io]=!0,Gc.forEach(function(n){n!=="selectionchange"&&(bh.has(n)||Bi(n,!1,e),Bi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Io]||(t[Io]=!0,Bi("selectionchange",!1,t))}}function Ld(e,t,n,r){switch(Sd(t)){case 1:var o=Fp;break;case 4:o=Vp;break;default:o=ss}n=o.bind(null,t,n,e),o=void 0,!ra||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Di(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=gn(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}dd(function(){var u=l,h=os(n),A=[];e:{var p=Hd.get(e);if(p!==void 0){var v=cs,x=e;switch(e){case"keypress":if(Go(n)===0)break e;case"keydown":case"keyup":v=lh;break;case"focusin":x="focus",v=wi;break;case"focusout":x="blur",v=wi;break;case"beforeblur":case"afterblur":v=wi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Wp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=sh;break;case _d:case jd:case Pd:v=Kp;break;case Md:v=ch;break;case"scroll":v=Jp;break;case"wheel":v=fh;break;case"copy":case"cut":case"paste":v=Zp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=yu}var k=(t&4)!==0,$=!k&&e==="scroll",d=k?p!==null?p+"Capture":null:p;k=[];for(var c=u,f;c!==null;){f=c;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Xr(c,d),g!=null&&k.push(oo(c,g,f)))),$)break;c=c.return}0<k.length&&(p=new v(p,x,null,n,h),A.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==ta&&(x=n.relatedTarget||n.fromElement)&&(gn(x)||x[zt]))break e;if((v||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?gn(x):null,x!==null&&($=Qn(x),x!==$||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(k=mu,g="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=yu,g="onPointerLeave",d="onPointerEnter",c="pointer"),$=v==null?p:Vn(v),f=x==null?p:Vn(x),p=new k(g,c+"leave",v,n,h),p.target=$,p.relatedTarget=f,g=null,gn(h)===u&&(k=new k(d,c+"enter",x,n,h),k.target=f,k.relatedTarget=$,g=k),$=g,v&&x)t:{for(k=v,d=x,c=0,f=k;f;f=zn(f))c++;for(f=0,g=d;g;g=zn(g))f++;for(;0<c-f;)k=zn(k),c--;for(;0<f-c;)d=zn(d),f--;for(;c--;){if(k===d||d!==null&&k===d.alternate)break t;k=zn(k),d=zn(d)}k=null}else k=null;v!==null&&$u(A,p,v,k,!1),x!==null&&$!==null&&$u(A,$,x,k,!0)}}e:{if(p=u?Vn(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var C=yh;else if(ku(p))if(Td)C=Eh;else{C=xh;var E=wh}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=kh);if(C&&(C=C(e,u))){$d(A,C,n,h);break e}E&&E(e,p,u),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&Ki(p,"number",p.value)}switch(E=u?Vn(u):window,e){case"focusin":(ku(E)||E.contentEditable==="true")&&(Ln=E,sa=u,Fr=null);break;case"focusout":Fr=sa=Ln=null;break;case"mousedown":ua=!0;break;case"contextmenu":case"mouseup":case"dragend":ua=!1,Du(A,n,h);break;case"selectionchange":if(Bh)break;case"keydown":case"keyup":Du(A,n,h)}var S;if(fs)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Rn?Od(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Dd&&n.locale!=="ko"&&(Rn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Rn&&(S=Bd()):(Wt=h,us="value"in Wt?Wt.value:Wt.textContent,Rn=!0)),E=hl(u,T),0<E.length&&(T=new vu(T,e,null,n,h),A.push({event:T,listeners:E}),S?T.data=S:(S=bd(n),S!==null&&(T.data=S)))),(S=ph?hh(e,n):gh(e,n))&&(u=hl(u,"onBeforeInput"),0<u.length&&(h=new vu("onBeforeInput","beforeinput",null,n,h),A.push({event:h,listeners:u}),h.data=S))}Rd(A,t)})}function oo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Xr(e,n),l!=null&&r.unshift(oo(e,l,o)),l=Xr(e,t),l!=null&&r.push(oo(e,l,o))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $u(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Xr(n,l),s!=null&&i.unshift(oo(n,s,a))):o||(s=Xr(n,l),s!=null&&i.push(oo(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var $h=/\r\n?/g,Th=/\u0000|\uFFFD/g;function Tu(e){return(typeof e=="string"?e:""+e).replace($h,`
`).replace(Th,"")}function Qo(e,t,n){if(t=Tu(t),Tu(e)!==t&&n)throw Error(O(425))}function gl(){}var ca=null,da=null;function fa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Aa=typeof setTimeout=="function"?setTimeout:void 0,Ih=typeof clearTimeout=="function"?clearTimeout:void 0,Iu=typeof Promise=="function"?Promise:void 0,Qh=typeof queueMicrotask=="function"?queueMicrotask:typeof Iu<"u"?function(e){return Iu.resolve(null).then(e).catch(Nh)}:Aa;function Nh(e){setTimeout(function(){throw e})}function Oi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),eo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);eo(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yr=Math.random().toString(36).slice(2),xt="__reactFiber$"+yr,lo="__reactProps$"+yr,zt="__reactContainer$"+yr,pa="__reactEvents$"+yr,zh="__reactListeners$"+yr,_h="__reactHandles$"+yr;function gn(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qu(e);e!==null;){if(n=e[xt])return n;e=Qu(e)}return t}e=n,n=e.parentNode}return null}function wo(e){return e=e[xt]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(O(33))}function Ll(e){return e[lo]||null}var ha=[],Jn=-1;function cn(e){return{current:e}}function oe(e){0>Jn||(e.current=ha[Jn],ha[Jn]=null,Jn--)}function te(e,t){Jn++,ha[Jn]=e.current,e.current=t}var ln={},_e=cn(ln),Fe=cn(!1),Cn=ln;function ir(e,t){var n=e.type.contextTypes;if(!n)return ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ve(e){return e=e.childContextTypes,e!=null}function ml(){oe(Fe),oe(_e)}function Nu(e,t,n){if(_e.current!==ln)throw Error(O(168));te(_e,t),te(Fe,n)}function Fd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(O(108,wp(e)||"Unknown",o));return ce({},n,r)}function vl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ln,Cn=_e.current,te(_e,e),te(Fe,Fe.current),!0}function zu(e,t,n){var r=e.stateNode;if(!r)throw Error(O(169));n?(e=Fd(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,oe(Fe),oe(_e),te(_e,e)):oe(Fe),te(Fe,n)}var $t=null,Fl=!1,bi=!1;function Vd(e){$t===null?$t=[e]:$t.push(e)}function jh(e){Fl=!0,Vd(e)}function dn(){if(!bi&&$t!==null){bi=!0;var e=0,t=ee;try{var n=$t;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$t=null,Fl=!1}catch(o){throw $t!==null&&($t=$t.slice(e+1)),hd(ls,dn),o}finally{ee=t,bi=!1}}return null}var Un=[],Wn=0,yl=null,wl=0,et=[],tt=0,Sn=null,Tt=1,It="";function pn(e,t){Un[Wn++]=wl,Un[Wn++]=yl,yl=e,wl=t}function Jd(e,t,n){et[tt++]=Tt,et[tt++]=It,et[tt++]=Sn,Sn=e;var r=Tt;e=It;var o=32-dt(r)-1;r&=~(1<<o),n+=1;var l=32-dt(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Tt=1<<32-dt(t)+o|n<<o|r,It=l+e}else Tt=1<<l|n<<o|r,It=e}function ps(e){e.return!==null&&(pn(e,1),Jd(e,1,0))}function hs(e){for(;e===yl;)yl=Un[--Wn],Un[Wn]=null,wl=Un[--Wn],Un[Wn]=null;for(;e===Sn;)Sn=et[--tt],et[tt]=null,It=et[--tt],et[tt]=null,Tt=et[--tt],et[tt]=null}var Ge=null,Ye=null,ie=!1,ct=null;function Ud(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _u(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,Ye=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sn!==null?{id:Tt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,Ye=null,!0):!1;default:return!1}}function ga(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ma(e){if(ie){var t=Ye;if(t){var n=t;if(!_u(e,t)){if(ga(e))throw Error(O(418));t=Zt(n.nextSibling);var r=Ge;t&&_u(e,t)?Ud(r,n):(e.flags=e.flags&-4097|2,ie=!1,Ge=e)}}else{if(ga(e))throw Error(O(418));e.flags=e.flags&-4097|2,ie=!1,Ge=e}}}function ju(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function No(e){if(e!==Ge)return!1;if(!ie)return ju(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fa(e.type,e.memoizedProps)),t&&(t=Ye)){if(ga(e))throw Wd(),Error(O(418));for(;t;)Ud(e,t),t=Zt(t.nextSibling)}if(ju(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(O(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Ge?Zt(e.stateNode.nextSibling):null;return!0}function Wd(){for(var e=Ye;e;)e=Zt(e.nextSibling)}function ar(){Ye=Ge=null,ie=!1}function gs(e){ct===null?ct=[e]:ct.push(e)}var Ph=Pt.ReactCurrentBatchConfig;function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,e))}return e}function zo(e,t){throw e=Object.prototype.toString.call(t),Error(O(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pu(e){var t=e._init;return t(e._payload)}function Yd(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=nn(d,c),d.index=0,d.sibling=null,d}function l(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,g){return c===null||c.tag!==6?(c=_i(f,d.mode,g),c.return=d,c):(c=o(c,f),c.return=d,c)}function s(d,c,f,g){var C=f.type;return C===Hn?h(d,c,f.props.children,g,f.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ft&&Pu(C)===c.type)?(g=o(c,f.props),g.ref=Dr(d,c,f),g.return=d,g):(g=nl(f.type,f.key,f.props,null,d.mode,g),g.ref=Dr(d,c,f),g.return=d,g)}function u(d,c,f,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=ji(f,d.mode,g),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function h(d,c,f,g,C){return c===null||c.tag!==7?(c=kn(f,d.mode,g,C),c.return=d,c):(c=o(c,f),c.return=d,c)}function A(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=_i(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Co:return f=nl(c.type,c.key,c.props,null,d.mode,f),f.ref=Dr(d,null,c),f.return=d,f;case Mn:return c=ji(c,d.mode,f),c.return=d,c;case Ft:var g=c._init;return A(d,g(c._payload),f)}if(zr(c)||kr(c))return c=kn(c,d.mode,f,null),c.return=d,c;zo(d,c)}return null}function p(d,c,f,g){var C=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:a(d,c,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Co:return f.key===C?s(d,c,f,g):null;case Mn:return f.key===C?u(d,c,f,g):null;case Ft:return C=f._init,p(d,c,C(f._payload),g)}if(zr(f)||kr(f))return C!==null?null:h(d,c,f,g,null);zo(d,f)}return null}function v(d,c,f,g,C){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,a(c,d,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Co:return d=d.get(g.key===null?f:g.key)||null,s(c,d,g,C);case Mn:return d=d.get(g.key===null?f:g.key)||null,u(c,d,g,C);case Ft:var E=g._init;return v(d,c,f,E(g._payload),C)}if(zr(g)||kr(g))return d=d.get(f)||null,h(c,d,g,C,null);zo(c,g)}return null}function x(d,c,f,g){for(var C=null,E=null,S=c,T=c=0,H=null;S!==null&&T<f.length;T++){S.index>T?(H=S,S=null):H=S.sibling;var _=p(d,S,f[T],g);if(_===null){S===null&&(S=H);break}e&&S&&_.alternate===null&&t(d,S),c=l(_,c,T),E===null?C=_:E.sibling=_,E=_,S=H}if(T===f.length)return n(d,S),ie&&pn(d,T),C;if(S===null){for(;T<f.length;T++)S=A(d,f[T],g),S!==null&&(c=l(S,c,T),E===null?C=S:E.sibling=S,E=S);return ie&&pn(d,T),C}for(S=r(d,S);T<f.length;T++)H=v(S,d,T,f[T],g),H!==null&&(e&&H.alternate!==null&&S.delete(H.key===null?T:H.key),c=l(H,c,T),E===null?C=H:E.sibling=H,E=H);return e&&S.forEach(function(Z){return t(d,Z)}),ie&&pn(d,T),C}function k(d,c,f,g){var C=kr(f);if(typeof C!="function")throw Error(O(150));if(f=C.call(f),f==null)throw Error(O(151));for(var E=C=null,S=c,T=c=0,H=null,_=f.next();S!==null&&!_.done;T++,_=f.next()){S.index>T?(H=S,S=null):H=S.sibling;var Z=p(d,S,_.value,g);if(Z===null){S===null&&(S=H);break}e&&S&&Z.alternate===null&&t(d,S),c=l(Z,c,T),E===null?C=Z:E.sibling=Z,E=Z,S=H}if(_.done)return n(d,S),ie&&pn(d,T),C;if(S===null){for(;!_.done;T++,_=f.next())_=A(d,_.value,g),_!==null&&(c=l(_,c,T),E===null?C=_:E.sibling=_,E=_);return ie&&pn(d,T),C}for(S=r(d,S);!_.done;T++,_=f.next())_=v(S,d,T,_.value,g),_!==null&&(e&&_.alternate!==null&&S.delete(_.key===null?T:_.key),c=l(_,c,T),E===null?C=_:E.sibling=_,E=_);return e&&S.forEach(function(q){return t(d,q)}),ie&&pn(d,T),C}function $(d,c,f,g){if(typeof f=="object"&&f!==null&&f.type===Hn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Co:e:{for(var C=f.key,E=c;E!==null;){if(E.key===C){if(C=f.type,C===Hn){if(E.tag===7){n(d,E.sibling),c=o(E,f.props.children),c.return=d,d=c;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ft&&Pu(C)===E.type){n(d,E.sibling),c=o(E,f.props),c.ref=Dr(d,E,f),c.return=d,d=c;break e}n(d,E);break}else t(d,E);E=E.sibling}f.type===Hn?(c=kn(f.props.children,d.mode,g,f.key),c.return=d,d=c):(g=nl(f.type,f.key,f.props,null,d.mode,g),g.ref=Dr(d,c,f),g.return=d,d=g)}return i(d);case Mn:e:{for(E=f.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=ji(f,d.mode,g),c.return=d,d=c}return i(d);case Ft:return E=f._init,$(d,c,E(f._payload),g)}if(zr(f))return x(d,c,f,g);if(kr(f))return k(d,c,f,g);zo(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,f),c.return=d,d=c):(n(d,c),c=_i(f,d.mode,g),c.return=d,d=c),i(d)):n(d,c)}return $}var sr=Yd(!0),Gd=Yd(!1),xl=cn(null),kl=null,Yn=null,ms=null;function vs(){ms=Yn=kl=null}function ys(e){var t=xl.current;oe(xl),e._currentValue=t}function va(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rr(e,t){kl=e,ms=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(ms!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(kl===null)throw Error(O(308));Yn=e,kl.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var mn=null;function ws(e){mn===null?mn=[e]:mn.push(e)}function Kd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ws(t)):(n.next=o.next,o.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function xs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,_t(e,n)}return o=r.interleaved,o===null?(t.next=t,ws(r)):(t.next=o.next,o.next=t),r.interleaved=t,_t(e,n)}function Ko(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,is(e,n)}}function Mu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function El(e,t,n,r){var o=e.updateQueue;Vt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,i===null?l=u:i.next=u,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==i&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=s))}if(l!==null){var A=o.baseState;i=0,h=u=s=null,a=l;do{var p=a.lane,v=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,k=a;switch(p=t,v=n,k.tag){case 1:if(x=k.payload,typeof x=="function"){A=x.call(v,A,p);break e}A=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,p=typeof x=="function"?x.call(v,A,p):x,p==null)break e;A=ce({},A,p);break e;case 2:Vt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=v,s=A):h=h.next=v,i|=p;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;p=a,a=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(h===null&&(s=A),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Dn|=i,e.lanes=i,e.memoizedState=A}}function Hu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(O(191,o));o.call(r)}}}var xo={},Et=cn(xo),io=cn(xo),ao=cn(xo);function vn(e){if(e===xo)throw Error(O(174));return e}function ks(e,t){switch(te(ao,t),te(io,e),te(Et,xo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Zi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Zi(t,e)}oe(Et),te(Et,t)}function ur(){oe(Et),oe(io),oe(ao)}function Zd(e){vn(ao.current);var t=vn(Et.current),n=Zi(t,e.type);t!==n&&(te(io,e),te(Et,n))}function Es(e){io.current===e&&(oe(Et),oe(io))}var se=cn(0);function Cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $i=[];function Cs(){for(var e=0;e<$i.length;e++)$i[e]._workInProgressVersionPrimary=null;$i.length=0}var Xo=Pt.ReactCurrentDispatcher,Ti=Pt.ReactCurrentBatchConfig,Bn=0,ue=null,xe=null,Ce=null,Sl=!1,Vr=!1,so=0,Mh=0;function Qe(){throw Error(O(321))}function Ss(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function Bs(e,t,n,r,o,l){if(Bn=l,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xo.current=e===null||e.memoizedState===null?Fh:Vh,e=n(r,o),Vr){l=0;do{if(Vr=!1,so=0,25<=l)throw Error(O(301));l+=1,Ce=xe=null,t.updateQueue=null,Xo.current=Jh,e=n(r,o)}while(Vr)}if(Xo.current=Bl,t=xe!==null&&xe.next!==null,Bn=0,Ce=xe=ue=null,Sl=!1,t)throw Error(O(300));return e}function Ds(){var e=so!==0;return so=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ue.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function lt(){if(xe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ce===null?ue.memoizedState:Ce.next;if(t!==null)Ce=t,xe=e;else{if(e===null)throw Error(O(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ce===null?ue.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function uo(e,t){return typeof t=="function"?t(e):t}function Ii(e){var t=lt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=xe,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,u=l;do{var h=u.lane;if((Bn&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var A={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=A,i=r):s=s.next=A,ue.lanes|=h,Dn|=h}u=u.next}while(u!==null&&u!==l);s===null?i=r:s.next=a,pt(r,t.memoizedState)||(Le=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,ue.lanes|=l,Dn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qi(e){var t=lt(),n=t.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);pt(l,t.memoizedState)||(Le=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function qd(){}function ef(e,t){var n=ue,r=lt(),o=t(),l=!pt(r.memoizedState,o);if(l&&(r.memoizedState=o,Le=!0),r=r.queue,Os(rf.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,co(9,nf.bind(null,n,r,o,t),void 0,null),De===null)throw Error(O(349));Bn&30||tf(n,t,o)}return o}function tf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nf(e,t,n,r){t.value=n,t.getSnapshot=r,of(t)&&lf(e)}function rf(e,t,n){return n(function(){of(t)&&lf(e)})}function of(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function lf(e){var t=_t(e,1);t!==null&&ft(t,e,1,-1)}function Ru(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:e},t.queue=e,e=e.dispatch=Lh.bind(null,ue,e),[t.memoizedState,e]}function co(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function af(){return lt().memoizedState}function Zo(e,t,n,r){var o=yt();ue.flags|=e,o.memoizedState=co(1|t,n,void 0,r===void 0?null:r)}function Vl(e,t,n,r){var o=lt();r=r===void 0?null:r;var l=void 0;if(xe!==null){var i=xe.memoizedState;if(l=i.destroy,r!==null&&Ss(r,i.deps)){o.memoizedState=co(t,n,l,r);return}}ue.flags|=e,o.memoizedState=co(1|t,n,l,r)}function Lu(e,t){return Zo(8390656,8,e,t)}function Os(e,t){return Vl(2048,8,e,t)}function sf(e,t){return Vl(4,2,e,t)}function uf(e,t){return Vl(4,4,e,t)}function cf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function df(e,t,n){return n=n!=null?n.concat([e]):null,Vl(4,4,cf.bind(null,t,e),n)}function bs(){}function ff(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ss(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Af(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ss(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pf(e,t,n){return Bn&21?(pt(n,t)||(n=vd(),ue.lanes|=n,Dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=n)}function Hh(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Ti.transition;Ti.transition={};try{e(!1),t()}finally{ee=n,Ti.transition=r}}function hf(){return lt().memoizedState}function Rh(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gf(e))mf(t,n);else if(n=Kd(e,t,n,r),n!==null){var o=Pe();ft(n,e,r,o),vf(n,t,r)}}function Lh(e,t,n){var r=tn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gf(e))mf(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,pt(a,i)){var s=t.interleaved;s===null?(o.next=o,ws(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Kd(e,t,o,r),n!==null&&(o=Pe(),ft(n,e,r,o),vf(n,t,r))}}function gf(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function mf(e,t){Vr=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,is(e,n)}}var Bl={readContext:ot,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},Fh={readContext:ot,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Lu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zo(4194308,4,cf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zo(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rh.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:Ru,useDebugValue:bs,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=Ru(!1),t=e[0];return e=Hh.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,o=yt();if(ie){if(n===void 0)throw Error(O(407));n=n()}else{if(n=t(),De===null)throw Error(O(349));Bn&30||tf(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Lu(rf.bind(null,r,l,e),[e]),r.flags|=2048,co(9,nf.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=yt(),t=De.identifierPrefix;if(ie){var n=It,r=Tt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=so++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Vh={readContext:ot,useCallback:ff,useContext:ot,useEffect:Os,useImperativeHandle:df,useInsertionEffect:sf,useLayoutEffect:uf,useMemo:Af,useReducer:Ii,useRef:af,useState:function(){return Ii(uo)},useDebugValue:bs,useDeferredValue:function(e){var t=lt();return pf(t,xe.memoizedState,e)},useTransition:function(){var e=Ii(uo)[0],t=lt().memoizedState;return[e,t]},useMutableSource:qd,useSyncExternalStore:ef,useId:hf,unstable_isNewReconciler:!1},Jh={readContext:ot,useCallback:ff,useContext:ot,useEffect:Os,useImperativeHandle:df,useInsertionEffect:sf,useLayoutEffect:uf,useMemo:Af,useReducer:Qi,useRef:af,useState:function(){return Qi(uo)},useDebugValue:bs,useDeferredValue:function(e){var t=lt();return xe===null?t.memoizedState=e:pf(t,xe.memoizedState,e)},useTransition:function(){var e=Qi(uo)[0],t=lt().memoizedState;return[e,t]},useMutableSource:qd,useSyncExternalStore:ef,useId:hf,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ya(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jl={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=tn(e),l=Qt(r,o);l.payload=t,n!=null&&(l.callback=n),t=qt(e,l,o),t!==null&&(ft(t,e,o,r),Ko(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=tn(e),l=Qt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=qt(e,l,o),t!==null&&(ft(t,e,o,r),Ko(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=tn(e),o=Qt(n,r);o.tag=2,t!=null&&(o.callback=t),t=qt(e,o,r),t!==null&&(ft(t,e,r,n),Ko(t,e,r))}};function Fu(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!no(n,r)||!no(o,l):!0}function yf(e,t,n){var r=!1,o=ln,l=t.contextType;return typeof l=="object"&&l!==null?l=ot(l):(o=Ve(t)?Cn:_e.current,r=t.contextTypes,l=(r=r!=null)?ir(e,o):ln),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Jl.enqueueReplaceState(t,t.state,null)}function wa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},xs(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=ot(l):(l=Ve(t)?Cn:_e.current,o.context=ir(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ya(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Jl.enqueueReplaceState(o,o.state,null),El(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,t){try{var n="",r=t;do n+=yp(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Ni(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Uh=typeof WeakMap=="function"?WeakMap:Map;function wf(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ol||(Ol=!0,Ta=r),xa(e,t)},n}function xf(e,t,n){n=Qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){xa(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){xa(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Ju(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Uh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ig.bind(null,e,t,n),t.then(e,e))}function Uu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,qt(n,t,1))),n.lanes|=1),e)}var Wh=Pt.ReactCurrentOwner,Le=!1;function je(e,t,n,r){t.child=e===null?Gd(t,null,n,r):sr(t,e.child,n,r)}function Yu(e,t,n,r,o){n=n.render;var l=t.ref;return rr(t,o),r=Bs(e,t,n,r,l,o),n=Ds(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(ie&&n&&ps(t),t.flags|=1,je(e,t,r,o),t.child)}function Gu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!js(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,kf(e,t,l,r,o)):(e=nl(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(i,r)&&e.ref===t.ref)return jt(e,t,o)}return t.flags|=1,e=nn(l,r),e.ref=t.ref,e.return=t,t.child=e}function kf(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(no(l,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,jt(e,t,o)}return ka(e,t,n,r,o)}function Ef(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Kn,We),We|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Kn,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,te(Kn,We),We|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,te(Kn,We),We|=r;return je(e,t,o,n),t.child}function Cf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ka(e,t,n,r,o){var l=Ve(n)?Cn:_e.current;return l=ir(t,l),rr(t,o),n=Bs(e,t,n,r,l,o),r=Ds(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(ie&&r&&ps(t),t.flags|=1,je(e,t,n,o),t.child)}function Ku(e,t,n,r,o){if(Ve(n)){var l=!0;vl(t)}else l=!1;if(rr(t,o),t.stateNode===null)qo(e,t),yf(t,n,r),wa(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=Ve(n)?Cn:_e.current,u=ir(t,u));var h=n.getDerivedStateFromProps,A=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";A||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Vu(t,i,r,u),Vt=!1;var p=t.memoizedState;i.state=p,El(t,r,i,o),s=t.memoizedState,a!==r||p!==s||Fe.current||Vt?(typeof h=="function"&&(ya(t,n,h,r),s=t.memoizedState),(a=Vt||Fu(t,n,a,r,p,s,u))?(A||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Xd(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:st(t.type,a),i.props=u,A=t.pendingProps,p=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=ot(s):(s=Ve(n)?Cn:_e.current,s=ir(t,s));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==A||p!==s)&&Vu(t,i,r,s),Vt=!1,p=t.memoizedState,i.state=p,El(t,r,i,o);var x=t.memoizedState;a!==A||p!==x||Fe.current||Vt?(typeof v=="function"&&(ya(t,n,v,r),x=t.memoizedState),(u=Vt||Fu(t,n,u,r,p,x,s)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ea(e,t,n,r,l,o)}function Ea(e,t,n,r,o,l){Cf(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&zu(t,n,!1),jt(e,t,l);r=t.stateNode,Wh.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=sr(t,e.child,null,l),t.child=sr(t,null,a,l)):je(e,t,a,l),t.memoizedState=r.state,o&&zu(t,n,!0),t.child}function Sf(e){var t=e.stateNode;t.pendingContext?Nu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nu(e,t.context,!1),ks(e,t.containerInfo)}function Xu(e,t,n,r,o){return ar(),gs(o),t.flags|=256,je(e,t,n,r),t.child}var Ca={dehydrated:null,treeContext:null,retryLane:0};function Sa(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bf(e,t,n){var r=t.pendingProps,o=se.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),te(se,o&1),e===null)return ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Yl(i,r,0,null),e=kn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Sa(n),t.memoizedState=Ca,e):$s(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Yh(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=nn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=nn(a,l):(l=kn(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Sa(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Ca,r}return l=e.child,e=l.sibling,r=nn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $s(e,t){return t=Yl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _o(e,t,n,r){return r!==null&&gs(r),sr(t,e.child,null,n),e=$s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yh(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Ni(Error(O(422))),_o(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Yl({mode:"visible",children:r.children},o,0,null),l=kn(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&sr(t,e.child,null,i),t.child.memoizedState=Sa(i),t.memoizedState=Ca,l);if(!(t.mode&1))return _o(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(O(419)),r=Ni(l,r,void 0),_o(e,t,i,r)}if(a=(i&e.childLanes)!==0,Le||a){if(r=De,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,_t(e,o),ft(r,e,o,-1))}return _s(),r=Ni(Error(O(421))),_o(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ag.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ye=Zt(o.nextSibling),Ge=t,ie=!0,ct=null,e!==null&&(et[tt++]=Tt,et[tt++]=It,et[tt++]=Sn,Tt=e.id,It=e.overflow,Sn=t),t=$s(t,r.children),t.flags|=4096,t)}function Zu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),va(e.return,t,n)}function zi(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Df(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(je(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zu(e,n,t);else if(e.tag===19)Zu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(se,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Cl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),zi(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Cl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}zi(t,!0,n,null,l);break;case"together":zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(O(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gh(e,t,n){switch(t.tag){case 3:Sf(t),ar();break;case 5:Zd(t);break;case 1:Ve(t.type)&&vl(t);break;case 4:ks(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;te(xl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?Bf(e,t,n):(te(se,se.current&1),e=jt(e,t,n),e!==null?e.sibling:null);te(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Df(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Ef(e,t,n)}return jt(e,t,n)}var Of,Ba,bf,$f;Of=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ba=function(){};bf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,vn(Et.current);var l=null;switch(n){case"input":o=Yi(e,o),r=Yi(e,r),l=[];break;case"select":o=ce({},o,{value:void 0}),r=ce({},r,{value:void 0}),l=[];break;case"textarea":o=Xi(e,o),r=Xi(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gl)}qi(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Gr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Gr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ne("scroll",e),l||a===s||(l=[])):(l=l||[]).push(u,s))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};$f=function(e,t,n,r){n!==r&&(t.flags|=4)};function Or(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kh(e,t,n){var r=t.pendingProps;switch(hs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ve(t.type)&&ml(),Ne(t),null;case 3:return r=t.stateNode,ur(),oe(Fe),oe(_e),Cs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(No(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(Na(ct),ct=null))),Ba(e,t),Ne(t),null;case 5:Es(t);var o=vn(ao.current);if(n=t.type,e!==null&&t.stateNode!=null)bf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(O(166));return Ne(t),null}if(e=vn(Et.current),No(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[xt]=t,r[lo]=l,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(o=0;o<jr.length;o++)ne(jr[o],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":au(r,l),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ne("invalid",r);break;case"textarea":uu(r,l),ne("invalid",r)}qi(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Qo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Qo(r.textContent,a,e),o=["children",""+a]):Gr.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&ne("scroll",r)}switch(n){case"input":So(r),su(r,l,!0);break;case"textarea":So(r),cu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=gl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[xt]=t,e[lo]=r,Of(e,t,!1,!1),t.stateNode=e;e:{switch(i=ea(n,r),n){case"dialog":ne("cancel",e),ne("close",e),o=r;break;case"iframe":case"object":case"embed":ne("load",e),o=r;break;case"video":case"audio":for(o=0;o<jr.length;o++)ne(jr[o],e);o=r;break;case"source":ne("error",e),o=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),o=r;break;case"details":ne("toggle",e),o=r;break;case"input":au(e,r),o=Yi(e,r),ne("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ce({},r,{value:void 0}),ne("invalid",e);break;case"textarea":uu(e,r),o=Xi(e,r),ne("invalid",e);break;default:o=r}qi(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?id(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&od(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Kr(e,s):typeof s=="number"&&Kr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Gr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&ne("scroll",e):s!=null&&es(e,l,s,i))}switch(n){case"input":So(e),su(e,r,!1);break;case"textarea":So(e),cu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?qn(e,!!r.multiple,l,!1):r.defaultValue!=null&&qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)$f(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(O(166));if(n=vn(ao.current),vn(Et.current),No(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(l=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:Qo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Qo(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Ne(t),null;case 13:if(oe(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ye!==null&&t.mode&1&&!(t.flags&128))Wd(),ar(),t.flags|=98560,l=!1;else if(l=No(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(O(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(O(317));l[xt]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),l=!1}else ct!==null&&(Na(ct),ct=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ke===0&&(ke=3):_s())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return ur(),Ba(e,t),e===null&&ro(t.stateNode.containerInfo),Ne(t),null;case 10:return ys(t.type._context),Ne(t),null;case 17:return Ve(t.type)&&ml(),Ne(t),null;case 19:if(oe(se),l=t.memoizedState,l===null)return Ne(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Or(l,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Cl(e),i!==null){for(t.flags|=128,Or(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(se,se.current&1|2),t.child}e=e.sibling}l.tail!==null&&he()>dr&&(t.flags|=128,r=!0,Or(l,!1),t.lanes=4194304)}else{if(!r)if(e=Cl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Or(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ie)return Ne(t),null}else 2*he()-l.renderingStartTime>dr&&n!==1073741824&&(t.flags|=128,r=!0,Or(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=he(),t.sibling=null,n=se.current,te(se,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return zs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?We&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(O(156,t.tag))}function Xh(e,t){switch(hs(t),t.tag){case 1:return Ve(t.type)&&ml(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),oe(Fe),oe(_e),Cs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Es(t),null;case 13:if(oe(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(O(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return oe(se),null;case 4:return ur(),null;case 10:return ys(t.type._context),null;case 22:case 23:return zs(),null;case 24:return null;default:return null}}var jo=!1,ze=!1,Zh=typeof WeakSet=="function"?WeakSet:Set,N=null;function Gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(e,t,r)}else n.current=null}function Da(e,t,n){try{n()}catch(r){Ae(e,t,r)}}var qu=!1;function qh(e,t){if(ca=Al,e=Nd(),As(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,u=0,h=0,A=e,p=null;t:for(;;){for(var v;A!==n||o!==0&&A.nodeType!==3||(a=i+o),A!==l||r!==0&&A.nodeType!==3||(s=i+r),A.nodeType===3&&(i+=A.nodeValue.length),(v=A.firstChild)!==null;)p=A,A=v;for(;;){if(A===e)break t;if(p===n&&++u===o&&(a=i),p===l&&++h===r&&(s=i),(v=A.nextSibling)!==null)break;A=p,p=A.parentNode}A=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(da={focusedElem:e,selectionRange:n},Al=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,$=x.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?k:st(t.type,k),$);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(g){Ae(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=qu,qu=!1,x}function Jr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Da(t,n,l)}o=o.next}while(o!==r)}}function Ul(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tf(e){var t=e.alternate;t!==null&&(e.alternate=null,Tf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[lo],delete t[pa],delete t[zh],delete t[_h])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function If(e){return e.tag===5||e.tag===3||e.tag===4}function ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||If(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gl));else if(r!==4&&(e=e.child,e!==null))for(ba(e,t,n),e=e.sibling;e!==null;)ba(e,t,n),e=e.sibling}function $a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for($a(e,t,n),e=e.sibling;e!==null;)$a(e,t,n),e=e.sibling}var be=null,ut=!1;function Ht(e,t,n){for(n=n.child;n!==null;)Qf(e,t,n),n=n.sibling}function Qf(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Pl,n)}catch{}switch(n.tag){case 5:ze||Gn(n,t);case 6:var r=be,o=ut;be=null,Ht(e,t,n),be=r,ut=o,be!==null&&(ut?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(ut?(e=be,n=n.stateNode,e.nodeType===8?Oi(e.parentNode,n):e.nodeType===1&&Oi(e,n),eo(e)):Oi(be,n.stateNode));break;case 4:r=be,o=ut,be=n.stateNode.containerInfo,ut=!0,Ht(e,t,n),be=r,ut=o;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Da(n,t,i),o=o.next}while(o!==r)}Ht(e,t,n);break;case 1:if(!ze&&(Gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ae(n,t,a)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Ht(e,t,n),ze=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function tc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zh),t.forEach(function(r){var o=sg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:be=a.stateNode,ut=!1;break e;case 3:be=a.stateNode.containerInfo,ut=!0;break e;case 4:be=a.stateNode.containerInfo,ut=!0;break e}a=a.return}if(be===null)throw Error(O(160));Qf(l,i,o),be=null,ut=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){Ae(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nf(t,e),t=t.sibling}function Nf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),vt(e),r&4){try{Jr(3,e,e.return),Ul(3,e)}catch(k){Ae(e,e.return,k)}try{Jr(5,e,e.return)}catch(k){Ae(e,e.return,k)}}break;case 1:at(t,e),vt(e),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(at(t,e),vt(e),r&512&&n!==null&&Gn(n,n.return),e.flags&32){var o=e.stateNode;try{Kr(o,"")}catch(k){Ae(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&td(o,l),ea(a,i);var u=ea(a,l);for(i=0;i<s.length;i+=2){var h=s[i],A=s[i+1];h==="style"?id(o,A):h==="dangerouslySetInnerHTML"?od(o,A):h==="children"?Kr(o,A):es(o,h,A,u)}switch(a){case"input":Gi(o,l);break;case"textarea":nd(o,l);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?qn(o,!!l.multiple,v,!1):p!==!!l.multiple&&(l.defaultValue!=null?qn(o,!!l.multiple,l.defaultValue,!0):qn(o,!!l.multiple,l.multiple?[]:"",!1))}o[lo]=l}catch(k){Ae(e,e.return,k)}}break;case 6:if(at(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(O(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(k){Ae(e,e.return,k)}}break;case 3:if(at(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(t.containerInfo)}catch(k){Ae(e,e.return,k)}break;case 4:at(t,e),vt(e);break;case 13:at(t,e),vt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Qs=he())),r&4&&tc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(u=ze)||h,at(t,e),ze=u):at(t,e),vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(A=N=h;N!==null;){switch(p=N,v=p.child,p.tag){case 0:case 11:case 14:case 15:Jr(4,p,p.return);break;case 1:Gn(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){Ae(r,n,k)}}break;case 5:Gn(p,p.return);break;case 22:if(p.memoizedState!==null){rc(A);continue}}v!==null?(v.return=p,N=v):rc(A)}h=h.sibling}e:for(h=null,A=e;;){if(A.tag===5){if(h===null){h=A;try{o=A.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=A.stateNode,s=A.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=ld("display",i))}catch(k){Ae(e,e.return,k)}}}else if(A.tag===6){if(h===null)try{A.stateNode.nodeValue=u?"":A.memoizedProps}catch(k){Ae(e,e.return,k)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===e)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break e;for(;A.sibling===null;){if(A.return===null||A.return===e)break e;h===A&&(h=null),A=A.return}h===A&&(h=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:at(t,e),vt(e),r&4&&tc(e);break;case 21:break;default:at(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(If(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Kr(o,""),r.flags&=-33);var l=ec(e);$a(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=ec(e);ba(e,a,i);break;default:throw Error(O(161))}}catch(s){Ae(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function eg(e,t,n){N=e,zf(e)}function zf(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var o=N,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||jo;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ze;a=jo;var u=ze;if(jo=i,(ze=s)&&!u)for(N=o;N!==null;)i=N,s=i.child,i.tag===22&&i.memoizedState!==null?oc(o):s!==null?(s.return=i,N=s):oc(o);for(;l!==null;)N=l,zf(l),l=l.sibling;N=o,jo=a,ze=u}nc(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,N=l):nc(e)}}function nc(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||Ul(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Hu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var A=h.dehydrated;A!==null&&eo(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}ze||t.flags&512&&Oa(t)}catch(p){Ae(t,t.return,p)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function rc(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function oc(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ul(4,t)}catch(s){Ae(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){Ae(t,o,s)}}var l=t.return;try{Oa(t)}catch(s){Ae(t,l,s)}break;case 5:var i=t.return;try{Oa(t)}catch(s){Ae(t,i,s)}}}catch(s){Ae(t,t.return,s)}if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}var tg=Math.ceil,Dl=Pt.ReactCurrentDispatcher,Ts=Pt.ReactCurrentOwner,rt=Pt.ReactCurrentBatchConfig,G=0,De=null,me=null,$e=0,We=0,Kn=cn(0),ke=0,fo=null,Dn=0,Wl=0,Is=0,Ur=null,Re=null,Qs=0,dr=1/0,Ot=null,Ol=!1,Ta=null,en=null,Po=!1,Yt=null,bl=0,Wr=0,Ia=null,el=-1,tl=0;function Pe(){return G&6?he():el!==-1?el:el=he()}function tn(e){return e.mode&1?G&2&&$e!==0?$e&-$e:Ph.transition!==null?(tl===0&&(tl=vd()),tl):(e=ee,e!==0||(e=window.event,e=e===void 0?16:Sd(e.type)),e):1}function ft(e,t,n,r){if(50<Wr)throw Wr=0,Ia=null,Error(O(185));vo(e,n,r),(!(G&2)||e!==De)&&(e===De&&(!(G&2)&&(Wl|=n),ke===4&&Ut(e,$e)),Je(e,r),n===1&&G===0&&!(t.mode&1)&&(dr=he()+500,Fl&&dn()))}function Je(e,t){var n=e.callbackNode;Pp(e,t);var r=fl(e,e===De?$e:0);if(r===0)n!==null&&Au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Au(n),t===1)e.tag===0?jh(lc.bind(null,e)):Vd(lc.bind(null,e)),Qh(function(){!(G&6)&&dn()}),n=null;else{switch(yd(r)){case 1:n=ls;break;case 4:n=gd;break;case 16:n=dl;break;case 536870912:n=md;break;default:n=dl}n=Ff(n,_f.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _f(e,t){if(el=-1,tl=0,G&6)throw Error(O(327));var n=e.callbackNode;if(or()&&e.callbackNode!==n)return null;var r=fl(e,e===De?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$l(e,r);else{t=r;var o=G;G|=2;var l=Pf();(De!==e||$e!==t)&&(Ot=null,dr=he()+500,xn(e,t));do try{og();break}catch(a){jf(e,a)}while(!0);vs(),Dl.current=l,G=o,me!==null?t=0:(De=null,$e=0,t=ke)}if(t!==0){if(t===2&&(o=la(e),o!==0&&(r=o,t=Qa(e,o))),t===1)throw n=fo,xn(e,0),Ut(e,r),Je(e,he()),n;if(t===6)Ut(e,r);else{if(o=e.current.alternate,!(r&30)&&!ng(o)&&(t=$l(e,r),t===2&&(l=la(e),l!==0&&(r=l,t=Qa(e,l))),t===1))throw n=fo,xn(e,0),Ut(e,r),Je(e,he()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(O(345));case 2:hn(e,Re,Ot);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=Qs+500-he(),10<t)){if(fl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Aa(hn.bind(null,e,Re,Ot),t);break}hn(e,Re,Ot);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-dt(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tg(r/1960))-r,10<r){e.timeoutHandle=Aa(hn.bind(null,e,Re,Ot),r);break}hn(e,Re,Ot);break;case 5:hn(e,Re,Ot);break;default:throw Error(O(329))}}}return Je(e,he()),e.callbackNode===n?_f.bind(null,e):null}function Qa(e,t){var n=Ur;return e.current.memoizedState.isDehydrated&&(xn(e,t).flags|=256),e=$l(e,t),e!==2&&(t=Re,Re=n,t!==null&&Na(t)),e}function Na(e){Re===null?Re=e:Re.push.apply(Re,e)}function ng(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!pt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~Is,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(G&6)throw Error(O(327));or();var t=fl(e,0);if(!(t&1))return Je(e,he()),null;var n=$l(e,t);if(e.tag!==0&&n===2){var r=la(e);r!==0&&(t=r,n=Qa(e,r))}if(n===1)throw n=fo,xn(e,0),Ut(e,t),Je(e,he()),n;if(n===6)throw Error(O(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,Re,Ot),Je(e,he()),null}function Ns(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(dr=he()+500,Fl&&dn())}}function On(e){Yt!==null&&Yt.tag===0&&!(G&6)&&or();var t=G;G|=1;var n=rt.transition,r=ee;try{if(rt.transition=null,ee=1,e)return e()}finally{ee=r,rt.transition=n,G=t,!(G&6)&&dn()}}function zs(){We=Kn.current,oe(Kn)}function xn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ih(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(hs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ml();break;case 3:ur(),oe(Fe),oe(_e),Cs();break;case 5:Es(r);break;case 4:ur();break;case 13:oe(se);break;case 19:oe(se);break;case 10:ys(r.type._context);break;case 22:case 23:zs()}n=n.return}if(De=e,me=e=nn(e.current,null),$e=We=t,ke=0,fo=null,Is=Wl=Dn=0,Re=Ur=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}mn=null}return e}function jf(e,t){do{var n=me;try{if(vs(),Xo.current=Bl,Sl){for(var r=ue.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Sl=!1}if(Bn=0,Ce=xe=ue=null,Vr=!1,so=0,Ts.current=null,n===null||n.return===null){ke=1,fo=t,me=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=$e,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=a,A=h.tag;if(!(h.mode&1)&&(A===0||A===11||A===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Uu(i);if(v!==null){v.flags&=-257,Wu(v,i,a,l,t),v.mode&1&&Ju(l,u,t),t=v,s=u;var x=t.updateQueue;if(x===null){var k=new Set;k.add(s),t.updateQueue=k}else x.add(s);break e}else{if(!(t&1)){Ju(l,u,t),_s();break e}s=Error(O(426))}}else if(ie&&a.mode&1){var $=Uu(i);if($!==null){!($.flags&65536)&&($.flags|=256),Wu($,i,a,l,t),gs(cr(s,a));break e}}l=s=cr(s,a),ke!==4&&(ke=2),Ur===null?Ur=[l]:Ur.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=wf(l,s,t);Mu(l,d);break e;case 1:a=s;var c=l.type,f=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(en===null||!en.has(f)))){l.flags|=65536,t&=-t,l.lanes|=t;var g=xf(l,a,t);Mu(l,g);break e}}l=l.return}while(l!==null)}Hf(n)}catch(C){t=C,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Pf(){var e=Dl.current;return Dl.current=Bl,e===null?Bl:e}function _s(){(ke===0||ke===3||ke===2)&&(ke=4),De===null||!(Dn&268435455)&&!(Wl&268435455)||Ut(De,$e)}function $l(e,t){var n=G;G|=2;var r=Pf();(De!==e||$e!==t)&&(Ot=null,xn(e,t));do try{rg();break}catch(o){jf(e,o)}while(!0);if(vs(),G=n,Dl.current=r,me!==null)throw Error(O(261));return De=null,$e=0,ke}function rg(){for(;me!==null;)Mf(me)}function og(){for(;me!==null&&!bp();)Mf(me)}function Mf(e){var t=Lf(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?Hf(e):me=t,Ts.current=null}function Hf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Xh(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,me=null;return}}else if(n=Kh(n,t,We),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ke===0&&(ke=5)}function hn(e,t,n){var r=ee,o=rt.transition;try{rt.transition=null,ee=1,lg(e,t,n,r)}finally{rt.transition=o,ee=r}return null}function lg(e,t,n,r){do or();while(Yt!==null);if(G&6)throw Error(O(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(O(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Mp(e,l),e===De&&(me=De=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Po||(Po=!0,Ff(dl,function(){return or(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=rt.transition,rt.transition=null;var i=ee;ee=1;var a=G;G|=4,Ts.current=null,qh(e,n),Nf(n,e),Sh(da),Al=!!ca,da=ca=null,e.current=n,eg(n),$p(),G=a,ee=i,rt.transition=l}else e.current=n;if(Po&&(Po=!1,Yt=e,bl=o),l=e.pendingLanes,l===0&&(en=null),Qp(n.stateNode),Je(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ol)throw Ol=!1,e=Ta,Ta=null,e;return bl&1&&e.tag!==0&&or(),l=e.pendingLanes,l&1?e===Ia?Wr++:(Wr=0,Ia=e):Wr=0,dn(),null}function or(){if(Yt!==null){var e=yd(bl),t=rt.transition,n=ee;try{if(rt.transition=null,ee=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,bl=0,G&6)throw Error(O(331));var o=G;for(G|=4,N=e.current;N!==null;){var l=N,i=l.child;if(N.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(N=u;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:Jr(8,h,l)}var A=h.child;if(A!==null)A.return=h,N=A;else for(;N!==null;){h=N;var p=h.sibling,v=h.return;if(Tf(h),h===u){N=null;break}if(p!==null){p.return=v,N=p;break}N=v}}}var x=l.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var $=k.sibling;k.sibling=null,k=$}while(k!==null)}}N=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,N=i;else e:for(;N!==null;){if(l=N,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Jr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,N=d;break e}N=l.return}}var c=e.current;for(N=c;N!==null;){i=N;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,N=f;else e:for(i=c;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ul(9,a)}}catch(C){Ae(a,a.return,C)}if(a===i){N=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,N=g;break e}N=a.return}}if(G=o,dn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Pl,e)}catch{}r=!0}return r}finally{ee=n,rt.transition=t}}return!1}function ic(e,t,n){t=cr(n,t),t=wf(e,t,1),e=qt(e,t,1),t=Pe(),e!==null&&(vo(e,1,t),Je(e,t))}function Ae(e,t,n){if(e.tag===3)ic(e,e,n);else for(;t!==null;){if(t.tag===3){ic(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=cr(n,e),e=xf(t,e,1),t=qt(t,e,1),e=Pe(),t!==null&&(vo(t,1,e),Je(t,e));break}}t=t.return}}function ig(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,De===e&&($e&n)===n&&(ke===4||ke===3&&($e&130023424)===$e&&500>he()-Qs?xn(e,0):Is|=n),Je(e,t)}function Rf(e,t){t===0&&(e.mode&1?(t=Oo,Oo<<=1,!(Oo&130023424)&&(Oo=4194304)):t=1);var n=Pe();e=_t(e,t),e!==null&&(vo(e,t,n),Je(e,n))}function ag(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rf(e,n)}function sg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(t),Rf(e,n)}var Lf;Lf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Le=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Le=!1,Gh(e,t,n);Le=!!(e.flags&131072)}else Le=!1,ie&&t.flags&1048576&&Jd(t,wl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qo(e,t),e=t.pendingProps;var o=ir(t,_e.current);rr(t,n),o=Bs(null,t,r,e,o,n);var l=Ds();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(r)?(l=!0,vl(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,xs(t),o.updater=Jl,t.stateNode=o,o._reactInternals=t,wa(t,r,e,n),t=Ea(null,t,r,!0,l,n)):(t.tag=0,ie&&l&&ps(t),je(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=cg(r),e=st(r,e),o){case 0:t=ka(null,t,r,e,n);break e;case 1:t=Ku(null,t,r,e,n);break e;case 11:t=Yu(null,t,r,e,n);break e;case 14:t=Gu(null,t,r,st(r.type,e),n);break e}throw Error(O(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),ka(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Ku(e,t,r,o,n);case 3:e:{if(Sf(t),e===null)throw Error(O(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Xd(e,t),El(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=cr(Error(O(423)),t),t=Xu(e,t,r,n,o);break e}else if(r!==o){o=cr(Error(O(424)),t),t=Xu(e,t,r,n,o);break e}else for(Ye=Zt(t.stateNode.containerInfo.firstChild),Ge=t,ie=!0,ct=null,n=Gd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===o){t=jt(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return Zd(t),e===null&&ma(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,fa(r,o)?i=null:l!==null&&fa(r,l)&&(t.flags|=32),Cf(e,t),je(e,t,i,n),t.child;case 6:return e===null&&ma(t),null;case 13:return Bf(e,t,n);case 4:return ks(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sr(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Yu(e,t,r,o,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,te(xl,r._currentValue),r._currentValue=i,l!==null)if(pt(l.value,i)){if(l.children===o.children&&!Fe.current){t=jt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=Qt(-1,n&-n),s.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),va(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(O(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),va(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}je(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,rr(t,n),o=ot(o),r=r(o),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,o=st(r,t.pendingProps),o=st(r.type,o),Gu(e,t,r,o,n);case 15:return kf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),qo(e,t),t.tag=1,Ve(r)?(e=!0,vl(t)):e=!1,rr(t,n),yf(t,r,o),wa(t,r,o,n),Ea(null,t,r,!0,e,n);case 19:return Df(e,t,n);case 22:return Ef(e,t,n)}throw Error(O(156,t.tag))};function Ff(e,t){return hd(e,t)}function ug(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new ug(e,t,n,r)}function js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cg(e){if(typeof e=="function")return js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ns)return 11;if(e===rs)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function nl(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")js(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Hn:return kn(n.children,o,l,t);case ts:i=8,o|=8;break;case Vi:return e=nt(12,n,t,o|2),e.elementType=Vi,e.lanes=l,e;case Ji:return e=nt(13,n,t,o),e.elementType=Ji,e.lanes=l,e;case Ui:return e=nt(19,n,t,o),e.elementType=Ui,e.lanes=l,e;case Zc:return Yl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kc:i=10;break e;case Xc:i=9;break e;case ns:i=11;break e;case rs:i=14;break e;case Ft:i=16,r=null;break e}throw Error(O(130,e==null?e:typeof e,""))}return t=nt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function kn(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function Yl(e,t,n,r){return e=nt(22,e,r,t),e.elementType=Zc,e.lanes=n,e.stateNode={isHidden:!1},e}function _i(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function ji(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mi(0),this.expirationTimes=mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ps(e,t,n,r,o,l,i,a,s){return e=new dg(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=nt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xs(l),e}function fg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vf(e){if(!e)return ln;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(O(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(O(171))}if(e.tag===1){var n=e.type;if(Ve(n))return Fd(e,n,t)}return t}function Jf(e,t,n,r,o,l,i,a,s){return e=Ps(n,r,!0,e,o,l,i,a,s),e.context=Vf(null),n=e.current,r=Pe(),o=tn(n),l=Qt(r,o),l.callback=t??null,qt(n,l,o),e.current.lanes=o,vo(e,o,r),Je(e,r),e}function Gl(e,t,n,r){var o=t.current,l=Pe(),i=tn(o);return n=Vf(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=qt(o,t,i),e!==null&&(ft(e,o,i,l),Ko(e,o,i)),i}function Tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ms(e,t){ac(e,t),(e=e.alternate)&&ac(e,t)}function Ag(){return null}var Uf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hs(e){this._internalRoot=e}Kl.prototype.render=Hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(O(409));Gl(e,t,null,null)};Kl.prototype.unmount=Hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;On(function(){Gl(null,e,null,null)}),t[zt]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=kd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&Cd(e)}};function Rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sc(){}function pg(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=Tl(i);l.call(u)}}var i=Jf(t,r,e,0,null,!1,!1,"",sc);return e._reactRootContainer=i,e[zt]=i.current,ro(e.nodeType===8?e.parentNode:e),On(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Tl(s);a.call(u)}}var s=Ps(e,0,!1,null,null,!1,!1,"",sc);return e._reactRootContainer=s,e[zt]=s.current,ro(e.nodeType===8?e.parentNode:e),On(function(){Gl(t,s,n,r)}),s}function Zl(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=Tl(i);a.call(s)}}Gl(t,i,e,o)}else i=pg(n,t,e,o,r);return Tl(i)}wd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_r(t.pendingLanes);n!==0&&(is(t,n|1),Je(t,he()),!(G&6)&&(dr=he()+500,dn()))}break;case 13:On(function(){var r=_t(e,1);if(r!==null){var o=Pe();ft(r,e,1,o)}}),Ms(e,1)}};as=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=Pe();ft(t,e,134217728,n)}Ms(e,134217728)}};xd=function(e){if(e.tag===13){var t=tn(e),n=_t(e,t);if(n!==null){var r=Pe();ft(n,e,t,r)}Ms(e,t)}};kd=function(){return ee};Ed=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};na=function(e,t,n){switch(t){case"input":if(Gi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ll(r);if(!o)throw Error(O(90));ed(r),Gi(r,o)}}}break;case"textarea":nd(e,n);break;case"select":t=n.value,t!=null&&qn(e,!!n.multiple,t,!1)}};ud=Ns;cd=On;var hg={usingClientEntryPoint:!1,Events:[wo,Vn,Ll,ad,sd,Ns]},br={findFiberByHostInstance:gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gg={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ad(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||Ag,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{Pl=Mo.inject(gg),kt=Mo}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hg;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rs(t))throw Error(O(200));return fg(e,t,null,n)};Xe.createRoot=function(e,t){if(!Rs(e))throw Error(O(299));var n=!1,r="",o=Uf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ps(e,1,!1,null,null,n,!1,r,o),e[zt]=t.current,ro(e.nodeType===8?e.parentNode:e),new Hs(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(O(188)):(e=Object.keys(e).join(","),Error(O(268,e)));return e=Ad(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return On(e)};Xe.hydrate=function(e,t,n){if(!Xl(t))throw Error(O(200));return Zl(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!Rs(e))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Uf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Jf(t,null,e,1,n??null,o,!1,l,i),e[zt]=t.current,ro(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Kl(t)};Xe.render=function(e,t,n){if(!Xl(t))throw Error(O(200));return Zl(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!Xl(e))throw Error(O(40));return e._reactRootContainer?(On(function(){Zl(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};Xe.unstable_batchedUpdates=Ns;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xl(n))throw Error(O(200));if(e==null||e._reactInternals===void 0)throw Error(O(38));return Zl(e,t,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function Wf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wf)}catch(e){console.error(e)}}Wf(),Uc.exports=Xe;var Yf=Uc.exports,Gf,uc=Yf;Gf=uc.createRoot,uc.hydrateRoot;var mg=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`,Be=function(){return Be=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Be.apply(this,arguments)};function Ao(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,l;r<o;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var re="-ms-",Yr="-moz-",X="-webkit-",Kf="comm",ql="rule",Ls="decl",vg="@import",Xf="@keyframes",yg="@layer",Zf=Math.abs,Fs=String.fromCharCode,za=Object.assign;function wg(e,t){return Se(e,0)^45?(((t<<2^Se(e,0))<<2^Se(e,1))<<2^Se(e,2))<<2^Se(e,3):0}function qf(e){return e.trim()}function bt(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function rl(e,t,n){return e.indexOf(t,n)}function Se(e,t){return e.charCodeAt(t)|0}function fr(e,t,n){return e.slice(t,n)}function wt(e){return e.length}function eA(e){return e.length}function Pr(e,t){return t.push(e),e}function xg(e,t){return e.map(t).join("")}function cc(e,t){return e.filter(function(n){return!bt(n,t)})}var ei=1,Ar=1,tA=0,it=0,ge=0,wr="";function ti(e,t,n,r,o,l,i,a){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:ei,column:Ar,length:i,return:"",siblings:a}}function Lt(e,t){return za(ti("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function _n(e){for(;e.root;)e=Lt(e.root,{children:[e]});Pr(e,e.siblings)}function kg(){return ge}function Eg(){return ge=it>0?Se(wr,--it):0,Ar--,ge===10&&(Ar=1,ei--),ge}function At(){return ge=it<tA?Se(wr,it++):0,Ar++,ge===10&&(Ar=1,ei++),ge}function En(){return Se(wr,it)}function ol(){return it}function ni(e,t){return fr(wr,e,t)}function _a(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Cg(e){return ei=Ar=1,tA=wt(wr=e),it=0,[]}function Sg(e){return wr="",e}function Pi(e){return qf(ni(it-1,ja(e===91?e+2:e===40?e+1:e)))}function Bg(e){for(;(ge=En())&&ge<33;)At();return _a(e)>2||_a(ge)>3?"":" "}function Dg(e,t){for(;--t&&At()&&!(ge<48||ge>102||ge>57&&ge<65||ge>70&&ge<97););return ni(e,ol()+(t<6&&En()==32&&At()==32))}function ja(e){for(;At();)switch(ge){case e:return it;case 34:case 39:e!==34&&e!==39&&ja(ge);break;case 40:e===41&&ja(e);break;case 92:At();break}return it}function Og(e,t){for(;At()&&e+ge!==57;)if(e+ge===84&&En()===47)break;return"/*"+ni(t,it-1)+"*"+Fs(e===47?e:At())}function bg(e){for(;!_a(En());)At();return ni(e,it)}function $g(e){return Sg(ll("",null,null,null,[""],e=Cg(e),0,[0],e))}function ll(e,t,n,r,o,l,i,a,s){for(var u=0,h=0,A=i,p=0,v=0,x=0,k=1,$=1,d=1,c=0,f="",g=o,C=l,E=r,S=f;$;)switch(x=c,c=At()){case 40:if(x!=108&&Se(S,A-1)==58){rl(S+=L(Pi(c),"&","&\f"),"&\f",Zf(u?a[u-1]:0))!=-1&&(d=-1);break}case 34:case 39:case 91:S+=Pi(c);break;case 9:case 10:case 13:case 32:S+=Bg(x);break;case 92:S+=Dg(ol()-1,7);continue;case 47:switch(En()){case 42:case 47:Pr(Tg(Og(At(),ol()),t,n,s),s);break;default:S+="/"}break;case 123*k:a[u++]=wt(S)*d;case 125*k:case 59:case 0:switch(c){case 0:case 125:$=0;case 59+h:d==-1&&(S=L(S,/\f/g,"")),v>0&&wt(S)-A&&Pr(v>32?fc(S+";",r,n,A-1,s):fc(L(S," ","")+";",r,n,A-2,s),s);break;case 59:S+=";";default:if(Pr(E=dc(S,t,n,u,h,o,a,f,g=[],C=[],A,l),l),c===123)if(h===0)ll(S,t,E,E,g,l,A,a,C);else switch(p===99&&Se(S,3)===110?100:p){case 100:case 108:case 109:case 115:ll(e,E,E,r&&Pr(dc(e,E,E,0,0,o,a,f,o,g=[],A,C),C),o,C,A,a,r?g:C);break;default:ll(S,E,E,E,[""],C,0,a,C)}}u=h=v=0,k=d=1,f=S="",A=i;break;case 58:A=1+wt(S),v=x;default:if(k<1){if(c==123)--k;else if(c==125&&k++==0&&Eg()==125)continue}switch(S+=Fs(c),c*k){case 38:d=h>0?1:(S+="\f",-1);break;case 44:a[u++]=(wt(S)-1)*d,d=1;break;case 64:En()===45&&(S+=Pi(At())),p=En(),h=A=wt(f=S+=bg(ol())),c++;break;case 45:x===45&&wt(S)==2&&(k=0)}}return l}function dc(e,t,n,r,o,l,i,a,s,u,h,A){for(var p=o-1,v=o===0?l:[""],x=eA(v),k=0,$=0,d=0;k<r;++k)for(var c=0,f=fr(e,p+1,p=Zf($=i[k])),g=e;c<x;++c)(g=qf($>0?v[c]+" "+f:L(f,/&\f/g,v[c])))&&(s[d++]=g);return ti(e,t,n,o===0?ql:a,s,u,h,A)}function Tg(e,t,n,r){return ti(e,t,n,Kf,Fs(kg()),fr(e,2,-2),0,r)}function fc(e,t,n,r,o){return ti(e,t,n,Ls,fr(e,0,r),fr(e,r+1,-1),r,o)}function nA(e,t,n){switch(wg(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 4789:return Yr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+Yr+e+re+e+e;case 5936:switch(Se(e,t+11)){case 114:return X+e+re+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+re+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+re+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return X+e+re+e+e;case 6165:return X+e+re+"flex-"+e+e;case 5187:return X+e+L(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+re+"flex-$1$2")+e;case 5443:return X+e+re+"flex-item-"+L(e,/flex-|-self/g,"")+(bt(e,/flex-|baseline/)?"":re+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return X+e+re+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return X+e+re+L(e,"shrink","negative")+e;case 5292:return X+e+re+L(e,"basis","preferred-size")+e;case 6060:return X+"box-"+L(e,"-grow","")+X+e+re+L(e,"grow","positive")+e;case 4554:return X+L(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+re+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4200:if(!bt(e,/flex-|baseline/))return re+"grid-column-align"+fr(e,t)+e;break;case 2592:case 3360:return re+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,bt(r.props,/grid-\w+-end/)})?~rl(e+(n=n[t].value),"span",0)?e:re+L(e,"-start","")+e+re+"grid-row-span:"+(~rl(n,"span",0)?bt(n,/\d+/):+bt(n,/\d+/)-+bt(e,/\d+/))+";":re+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return bt(r.props,/grid-\w+-start/)})?e:re+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(wt(e)-1-t>6)switch(Se(e,t+1)){case 109:if(Se(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+Yr+(Se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~rl(e,"stretch",0)?nA(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,l,i,a,s,u){return re+o+":"+l+u+(i?re+o+"-span:"+(a?s:+s-+l)+u:"")+e});case 4949:if(Se(e,t+6)===121)return L(e,":",":"+X)+e;break;case 6444:switch(Se(e,Se(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+X+(Se(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+re+"$2box$3")+e;case 100:return L(e,":",":"+re)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function Il(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ig(e,t,n,r){switch(e.type){case yg:if(e.children.length)break;case vg:case Ls:return e.return=e.return||e.value;case Kf:return"";case Xf:return e.return=e.value+"{"+Il(e.children,r)+"}";case ql:if(!wt(e.value=e.props.join(",")))return""}return wt(n=Il(e.children,r))?e.return=e.value+"{"+n+"}":""}function Qg(e){var t=eA(e);return function(n,r,o,l){for(var i="",a=0;a<t;a++)i+=e[a](n,r,o,l)||"";return i}}function Ng(e){return function(t){t.root||(t=t.return)&&e(t)}}function zg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ls:e.return=nA(e.value,e.length,n);return;case Xf:return Il([Lt(e,{value:L(e.value,"@","@"+X)})],r);case ql:if(e.length)return xg(n=e.props,function(o){switch(bt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_n(Lt(e,{props:[L(o,/:(read-\w+)/,":"+Yr+"$1")]})),_n(Lt(e,{props:[o]})),za(e,{props:cc(n,r)});break;case"::placeholder":_n(Lt(e,{props:[L(o,/:(plac\w+)/,":"+X+"input-$1")]})),_n(Lt(e,{props:[L(o,/:(plac\w+)/,":"+Yr+"$1")]})),_n(Lt(e,{props:[L(o,/:(plac\w+)/,re+"input-$1")]})),_n(Lt(e,{props:[o]})),za(e,{props:cc(n,r)});break}return""})}}var _g={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ue={},pr=typeof process<"u"&&Ue!==void 0&&(Ue.REACT_APP_SC_ATTR||Ue.SC_ATTR)||"data-styled",rA="active",oA="data-styled-version",ri="6.1.12",Vs=`/*!sc*/
`,Ql=typeof window<"u"&&"HTMLElement"in window,jg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ue.REACT_APP_SC_DISABLE_SPEEDY!==""?Ue.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ue.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ue!==void 0&&Ue.SC_DISABLE_SPEEDY!==void 0&&Ue.SC_DISABLE_SPEEDY!==""&&Ue.SC_DISABLE_SPEEDY!=="false"&&Ue.SC_DISABLE_SPEEDY),Pg={},oi=Object.freeze([]),hr=Object.freeze({});function lA(e,t,n){return n===void 0&&(n=hr),e.theme!==n.theme&&e.theme||t||n.theme}var iA=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Mg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Hg=/(^-|-$)/g;function Ac(e){return e.replace(Mg,"-").replace(Hg,"")}var Rg=/(a)(d)/gi,Ho=52,pc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pa(e){var t,n="";for(t=Math.abs(e);t>Ho;t=t/Ho|0)n=pc(t%Ho)+n;return(pc(t%Ho)+n).replace(Rg,"$1-$2")}var Mi,aA=5381,Xn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},sA=function(e){return Xn(aA,e)};function uA(e){return Pa(sA(e)>>>0)}function Lg(e){return e.displayName||e.name||"Component"}function Hi(e){return typeof e=="string"&&!0}var cA=typeof Symbol=="function"&&Symbol.for,dA=cA?Symbol.for("react.memo"):60115,Fg=cA?Symbol.for("react.forward_ref"):60112,Vg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Jg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ug=((Mi={})[Fg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Mi[dA]=fA,Mi);function hc(e){return("type"in(t=e)&&t.type.$$typeof)===dA?fA:"$$typeof"in e?Ug[e.$$typeof]:Vg;var t}var Wg=Object.defineProperty,Yg=Object.getOwnPropertyNames,gc=Object.getOwnPropertySymbols,Gg=Object.getOwnPropertyDescriptor,Kg=Object.getPrototypeOf,mc=Object.prototype;function AA(e,t,n){if(typeof t!="string"){if(mc){var r=Kg(t);r&&r!==mc&&AA(e,r,n)}var o=Yg(t);gc&&(o=o.concat(gc(t)));for(var l=hc(e),i=hc(t),a=0;a<o.length;++a){var s=o[a];if(!(s in Jg||n&&n[s]||i&&s in i||l&&s in l)){var u=Gg(t,s);try{Wg(e,s,u)}catch{}}}}return e}function bn(e){return typeof e=="function"}function Js(e){return typeof e=="object"&&"styledComponentId"in e}function yn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ma(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function po(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ha(e,t,n){if(n===void 0&&(n=!1),!n&&!po(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ha(e[r],t[r]);else if(po(t))for(var r in t)e[r]=Ha(e[r],t[r]);return e}function Us(e,t){Object.defineProperty(e,"toString",{value:t})}function $n(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Xg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,l=o;t>=l;)if((l<<=1)<0)throw $n(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var i=o;i<l;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(t+1),s=(i=0,n.length);i<s;i++)this.tag.insertRule(a,n[i])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var l=r;l<o;l++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),l=o+r,i=o;i<l;i++)n+="".concat(this.tag.getRule(i)).concat(Vs);return n},e}(),il=new Map,Nl=new Map,al=1,Ro=function(e){if(il.has(e))return il.get(e);for(;Nl.has(al);)al++;var t=al++;return il.set(e,t),Nl.set(t,e),t},Zg=function(e,t){al=t+1,il.set(e,t),Nl.set(t,e)},qg="style[".concat(pr,"][").concat(oA,'="').concat(ri,'"]'),em=new RegExp("^".concat(pr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),tm=function(e,t,n){for(var r,o=n.split(","),l=0,i=o.length;l<i;l++)(r=o[l])&&e.registerName(t,r)},nm=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Vs),o=[],l=0,i=r.length;l<i;l++){var a=r[l].trim();if(a){var s=a.match(em);if(s){var u=0|parseInt(s[1],10),h=s[2];u!==0&&(Zg(h,u),tm(e,h,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},vc=function(e){for(var t=document.querySelectorAll(qg),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(pr)!==rA&&(nm(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function rm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var pA=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(pr,"]")));return s[s.length-1]}(n),l=o!==void 0?o.nextSibling:null;r.setAttribute(pr,rA),r.setAttribute(oA,ri);var i=rm();return i&&r.setAttribute("nonce",i),n.insertBefore(r,l),r},om=function(){function e(t){this.element=pA(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,l=r.length;o<l;o++){var i=r[o];if(i.ownerNode===n)return i}throw $n(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),lm=function(){function e(t){this.element=pA(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),im=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),yc=Ql,am={isServer:!Ql,useCSSOMInjection:!jg},zl=function(){function e(t,n,r){t===void 0&&(t=hr),n===void 0&&(n={});var o=this;this.options=Be(Be({},am),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ql&&yc&&(yc=!1,vc(this)),Us(this,function(){return function(l){for(var i=l.getTag(),a=i.length,s="",u=function(A){var p=function(d){return Nl.get(d)}(A);if(p===void 0)return"continue";var v=l.names.get(p),x=i.getGroup(A);if(v===void 0||!v.size||x.length===0)return"continue";var k="".concat(pr,".g").concat(A,'[id="').concat(p,'"]'),$="";v!==void 0&&v.forEach(function(d){d.length>0&&($+="".concat(d,","))}),s+="".concat(x).concat(k,'{content:"').concat($,'"}').concat(Vs)},h=0;h<a;h++)u(h);return s}(o)})}return e.registerId=function(t){return Ro(t)},e.prototype.rehydrate=function(){!this.server&&Ql&&vc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Be(Be({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new im(o):r?new om(o):new lm(o)}(this.options),new Xg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ro(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ro(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ro(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),sm=/&/g,um=/^\s*\/\/.*$/gm;function hA(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=hA(n.children,t)),n})}function cm(e){var t,n,r,o=hr,l=o.options,i=l===void 0?hr:l,a=o.plugins,s=a===void 0?oi:a,u=function(p,v,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):p},h=s.slice();h.push(function(p){p.type===ql&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(sm,n).replace(r,u))}),i.prefix&&h.push(zg),h.push(Ig);var A=function(p,v,x,k){v===void 0&&(v=""),x===void 0&&(x=""),k===void 0&&(k="&"),t=k,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var $=p.replace(um,""),d=$g(x||v?"".concat(x," ").concat(v," { ").concat($," }"):$);i.namespace&&(d=hA(d,i.namespace));var c=[];return Il(d,Qg(h.concat(Ng(function(f){return c.push(f)})))),c};return A.hash=s.length?s.reduce(function(p,v){return v.name||$n(15),Xn(p,v.name)},aA).toString():"",A}var dm=new zl,Ra=cm(),gA=m.createContext({shouldForwardProp:void 0,styleSheet:dm,stylis:Ra});gA.Consumer;m.createContext(void 0);function La(){return w.useContext(gA)}var fm=function(){function e(t,n){var r=this;this.inject=function(o,l){l===void 0&&(l=Ra);var i=r.name+l.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,l(r.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Us(this,function(){throw $n(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ra),this.name+t.hash},e}(),Am=function(e){return e>="A"&&e<="Z"};function wc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Am(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var mA=function(e){return e==null||e===!1||e===""},vA=function(e){var t,n,r=[];for(var o in e){var l=e[o];e.hasOwnProperty(o)&&!mA(l)&&(Array.isArray(l)&&l.isCss||bn(l)?r.push("".concat(wc(o),":"),l,";"):po(l)?r.push.apply(r,Ao(Ao(["".concat(o," {")],vA(l),!1),["}"],!1)):r.push("".concat(wc(o),": ").concat((t=o,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in _g||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function rn(e,t,n,r){if(mA(e))return[];if(Js(e))return[".".concat(e.styledComponentId)];if(bn(e)){if(!bn(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var o=e(t);return rn(o,t,n,r)}var l;return e instanceof fm?n?(e.inject(n,r),[e.getName(r)]):[e]:po(e)?vA(e):Array.isArray(e)?Array.prototype.concat.apply(oi,e.map(function(i){return rn(i,t,n,r)})):[e.toString()]}function yA(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(bn(n)&&!Js(n))return!1}return!0}var pm=sA(ri),hm=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&yA(t),this.componentId=n,this.baseHash=Xn(pm,n),this.baseStyle=r,zl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=yn(o,this.staticRulesId);else{var l=Ma(rn(this.rules,t,n,r)),i=Pa(Xn(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,i)){var a=r(l,".".concat(i),void 0,this.componentId);n.insertRules(this.componentId,i,a)}o=yn(o,i),this.staticRulesId=i}else{for(var s=Xn(this.baseHash,r.hash),u="",h=0;h<this.rules.length;h++){var A=this.rules[h];if(typeof A=="string")u+=A;else if(A){var p=Ma(rn(A,t,n,r));s=Xn(s,p+h),u+=p}}if(u){var v=Pa(s>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),o=yn(o,v)}}return o},e}(),ho=m.createContext(void 0);ho.Consumer;function gm(e){var t=m.useContext(ho),n=w.useMemo(function(){return function(r,o){if(!r)throw $n(14);if(bn(r)){var l=r(o);return l}if(Array.isArray(r)||typeof r!="object")throw $n(8);return o?Be(Be({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?m.createElement(ho.Provider,{value:n},e.children):null}var Ri={};function mm(e,t,n){var r=Js(e),o=e,l=!Hi(e),i=t.attrs,a=i===void 0?oi:i,s=t.componentId,u=s===void 0?function(g,C){var E=typeof g!="string"?"sc":Ac(g);Ri[E]=(Ri[E]||0)+1;var S="".concat(E,"-").concat(uA(ri+E+Ri[E]));return C?"".concat(C,"-").concat(S):S}(t.displayName,t.parentComponentId):s,h=t.displayName,A=h===void 0?function(g){return Hi(g)?"styled.".concat(g):"Styled(".concat(Lg(g),")")}(e):h,p=t.displayName&&t.componentId?"".concat(Ac(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var $=t.shouldForwardProp;x=function(g,C){return k(g,C)&&$(g,C)}}else x=k}var d=new hm(n,p,r?o.componentStyle:void 0);function c(g,C){return function(E,S,T){var H=E.attrs,_=E.componentStyle,Z=E.defaultProps,q=E.foldedComponentIds,de=E.styledComponentId,fe=E.target,ae=m.useContext(ho),ve=La(),ye=E.shouldForwardProp||ve.shouldForwardProp,B=lA(S,ae,Z)||hr,I=function(Y,M,V){for(var Ee,b=Be(Be({},M),{className:void 0,theme:V}),R=0;R<Y.length;R+=1){var J=bn(Ee=Y[R])?Ee(b):Ee;for(var K in J)b[K]=K==="className"?yn(b[K],J[K]):K==="style"?Be(Be({},b[K]),J[K]):J[K]}return M.className&&(b.className=yn(b.className,M.className)),b}(H,S,B),z=I.as||fe,W={};for(var F in I)I[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&I.theme===B||(F==="forwardedAs"?W.as=I.forwardedAs:ye&&!ye(F,z)||(W[F]=I[F]));var j=function(Y,M){var V=La(),Ee=Y.generateAndInjectStyles(M,V.styleSheet,V.stylis);return Ee}(_,I),P=yn(q,de);return j&&(P+=" "+j),I.className&&(P+=" "+I.className),W[Hi(z)&&!iA.has(z)?"class":"className"]=P,W.ref=T,w.createElement(z,W)}(f,g,C)}c.displayName=A;var f=m.forwardRef(c);return f.attrs=v,f.componentStyle=d,f.displayName=A,f.shouldForwardProp=x,f.foldedComponentIds=r?yn(o.foldedComponentIds,o.styledComponentId):"",f.styledComponentId=p,f.target=r?o.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(C){for(var E=[],S=1;S<arguments.length;S++)E[S-1]=arguments[S];for(var T=0,H=E;T<H.length;T++)Ha(C,H[T],!0);return C}({},o.defaultProps,g):g}}),Us(f,function(){return".".concat(f.styledComponentId)}),l&&AA(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function xc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var kc=function(e){return Object.assign(e,{isCss:!0})};function Q(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(bn(e)||po(e))return kc(rn(xc(oi,Ao([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?rn(r):kc(rn(xc(r,t)))}function Fa(e,t,n){if(n===void 0&&(n=hr),!t)throw $n(1,t);var r=function(o){for(var l=[],i=1;i<arguments.length;i++)l[i-1]=arguments[i];return e(t,n,Q.apply(void 0,Ao([o],l,!1)))};return r.attrs=function(o){return Fa(e,t,Be(Be({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Fa(e,t,Be(Be({},n),o))},r}var wA=function(e){return Fa(mm,e)},D=wA;iA.forEach(function(e){D[e]=wA(e)});var vm=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=yA(t),zl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var l=o(Ma(rn(this.rules,n,r,o)),""),i=this.componentId+t;r.insertRules(i,i,l)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&zl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function ym(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Q.apply(void 0,Ao([e],t,!1)),o="sc-global-".concat(uA(JSON.stringify(r))),l=new vm(r,o),i=function(s){var u=La(),h=m.useContext(ho),A=m.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(A,s,u.styleSheet,h,u.stylis),m.useLayoutEffect(function(){if(!u.styleSheet.server)return a(A,s,u.styleSheet,h,u.stylis),function(){return l.removeStyles(A,u.styleSheet)}},[A,s,u.styleSheet,h,u.stylis]),null};function a(s,u,h,A,p){if(l.isStatic)l.renderStyles(s,Pg,h,p);else{var v=Be(Be({},u),{theme:lA(u,A,i.defaultProps)});l.renderStyles(s,v,h,p)}}return m.memo(i)}const Ws="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Ys="inset 2px 2px 3px rgba(0,0,0,0.2)",ht=()=>Q`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,gt=({background:e="material",color:t="materialText"}={})=>Q`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,ko=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>Q`
  background-image: ${[`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`].join(",")};
  background-color: ${t};
  background-size: ${`${n*2}px ${n*2}px`};
  background-position: 0 0, ${`${n}px ${n}px`};
`,Tn=()=>Q`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,jn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},wm=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?Ws:!1,o?Ys:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),pe=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return Q`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[jn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[jn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[jn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[jn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>wm({theme:r,topLeftInner:jn[t][n.topLeftInner],bottomRightInner:jn[t][n.bottomRightInner],hasShadow:o})};
  `},gr=()=>Q`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,xm=e=>Buffer.from(e).toString("base64"),km=typeof btoa<"u"?btoa:xm,Lo=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${km(n)})`},Gs=(e="default")=>Q`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>ko({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${gt()}
    ${e==="flat"?Tn():pe({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${gt()}
    ${e==="flat"?Tn():pe({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${e==="default"?pe({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>Lo(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>Lo(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>Lo(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>Lo(t.materialText,0)};
  }
`,Em=D.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,Cm=w.forwardRef(({children:e,underline:t=!0,...n},r)=>m.createElement(Em,{ref:r,underline:t,...n},e));Cm.displayName="Anchor";const Sm=D.header`
  ${pe()};
  ${gt()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,xA=w.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>m.createElement(Sm,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));xA.displayName="AppBar";const Nn=()=>{};function wn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function Bm(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Ec(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(Bm(t)))}function an(e){return typeof e=="number"?`${e}px`:e}const Dm=D.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Om=D.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,bm=w.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:l,...i},a)=>m.createElement(Dm,{noBorder:n,ref:a,size:an(r),square:o,src:l,...i},l?m.createElement(Om,{src:l,alt:e}):t));bm.displayName="Avatar";const Te={sm:"28px",md:"36px",lg:"44px"},$m=Q`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Te[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?Te[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,li=D.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?Q`
          ${Tn()}
          ${n?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&gr}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?Q`
          ${gt()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&pe({style:"buttonThin"})}
          }
          &:active {
            ${!t&&pe({style:"buttonThinPressed"})}
          }
          ${e&&pe({style:"buttonThinPressed"})}
          ${t&&ht()}
        `:Q`
          ${gt()};
          border: none;
          ${t&&ht()}
          ${e?ko({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?Q`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:Q`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${pe(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&pe({style:o==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&gr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${$m}
`,mt=w.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:l="md",square:i=!1,active:a=!1,onTouchStart:s=Nn,primary:u=!1,variant:h="default",...A},p)=>m.createElement(li,{active:a,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:u,ref:p,size:l,square:i,type:r,variant:h,...A},n));mt.displayName="Button";function sn({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:l="value"}){const i=o!==void 0,[a,s]=w.useState(e),u=w.useCallback(h=>{i||s(h)},[i]);if(i&&typeof t!="function"&&!r){const h=`Warning: You provided a \`${l}\` prop to a component without an \`${n}\` handler.${l==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${l}\`.`}`;console.warn(h)}return[i?o:a,u]}const Va=D.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Te[e.size]};
  width: ${e=>e.square?Te[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Te[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&ht()}
`,kA=w.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:l,...i},a)=>m.createElement(Va,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:l,role:"menuitem",ref:a,"aria-disabled":t,...i},r));kA.displayName="MenuListItem";const EA=D.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${pe({style:"window"})}
  ${gt()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;EA.displayName="MenuList";const Ct=20,_l=D.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Ct}px;
  height: ${Ct}px;
  opacity: 0;
  z-index: -1;
`,Ks=D.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&ht()}

  ${Va} & {
    margin: 0;
    height: 100%;
  }
  ${Va}:hover & {
    ${({$disabled:e,theme:t})=>!e&&Q`
        color: ${t.materialTextInvert};
      `};
  }
`,Xs=D.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${_l}:focus ~ & {
    ${gr}
  }
  ${_l}:not(:disabled) ~ &:active {
    ${gr}
  }
`,St=D.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${Ys};`}
  }
`,Tm=D.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Gs()}
`,CA=w.forwardRef(({children:e,shadow:t=!0,...n},r)=>m.createElement(St,{ref:r,shadow:t,...n},m.createElement(Tm,null,e)));CA.displayName="ScrollView";const SA=Q`
  width: ${Ct}px;
  height: ${Ct}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Im=D(St)`
  ${SA}
  width: ${Ct}px;
  height: ${Ct}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Qm=D.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${SA}
  width: ${Ct-4}px;
  height: ${Ct-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,Nm=D.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,zm=D.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>ko({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,_m={flat:Qm,default:Im},jm=w.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:l="",onChange:i=Nn,style:a={},value:s,variant:u="default",...h},A)=>{var p;const[v,x]=sn({defaultValue:n,onChange:i,readOnly:(p=h.readOnly)!==null&&p!==void 0?p:r,value:e}),k=w.useCallback(c=>{const f=c.target.checked;x(f),i(c)},[i,x]),$=_m[u];let d=null;return o?d=zm:v&&(d=Nm),m.createElement(Ks,{$disabled:r,className:t,style:a},m.createElement(_l,{disabled:r,onChange:r?void 0:k,readOnly:r,type:"checkbox",value:s,checked:v,"data-indeterminate":o,ref:A,...h}),m.createElement($,{$disabled:r,role:"presentation"},d&&m.createElement(d,{$disabled:r,variant:u})),l&&m.createElement(Xs,null,l))});jm.displayName="Checkbox";const BA=D.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${an(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${an(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;BA.displayName="Separator";const Pm=D(li)`
  padding-left: 8px;
`,Mm=D(BA)`
  height: 21px;
  position: relative;
  top: 0;
`,DA=D.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,Hm=D.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?Q`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:Q`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${DA}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${gr}
    outline-offset: -8px;
  }
`,Rm=D.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?Q`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:Q`
          border-top: 6px solid ${({theme:t})=>t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>e==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,Lm=w.forwardRef(({value:e,defaultValue:t,onChange:n=Nn,disabled:r=!1,variant:o="default",...l},i)=>{var a;const[s,u]=sn({defaultValue:t,onChange:n,readOnly:(a=l.readOnly)!==null&&a!==void 0?a:r,value:e}),h=A=>{const p=A.target.value;u(p),n(A)};return m.createElement(Pm,{disabled:r,as:"div",variant:o,size:"md"},m.createElement(DA,{onChange:h,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:i,...l}),m.createElement(Hm,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&m.createElement(Mm,{orientation:"vertical"}),m.createElement(Rm,{$disabled:r,variant:o}))});Lm.displayName="ColorInput";const Fm=D.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>Q`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${ko({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e*2}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e*2}px);
      top: ${e}px;
      left: ${e*2}px;
    }
  `}
`,Cc=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Vm=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Jm({digit:e=0,pixelSize:t=2,...n}){const r=Vm[Number(e)].map((o,l)=>o?`${Cc[l]} active`:Cc[l]);return m.createElement(Fm,{pixelSize:t,...n},r.map((o,l)=>m.createElement("span",{className:o,key:l})))}const Um=D.div`
  ${pe({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Wm={sm:1,md:2,lg:3,xl:4},Ym=w.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const l=w.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return m.createElement(Um,{ref:o,...r},l.map((i,a)=>m.createElement(Jm,{digit:i,pixelSize:Wm[n],key:a})))});Ym.displayName="Counter";const OA=Q`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Te.md};
`,Gm=D(St).attrs({"data-testid":"variant-default"})`
  ${OA}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,Km=D.div.attrs({"data-testid":"variant-flat"})`
  ${Tn()}
  ${OA}
  position: relative;
`,bA=Q`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&ht()}
`,Xm=D.input`
  ${bA}
  padding: 0 8px;
`,Zm=D.textarea`
  ${bA}
  padding: 8px;
  resize: none;
  ${({variant:e})=>Gs(e)}
`,Zs=w.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Nn,shadow:o=!0,style:l,variant:i="default",...a},s)=>{const u=i==="flat"?Km:Gm,h=w.useMemo(()=>{var A;return a.multiline?m.createElement(Zm,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:i,...a}):m.createElement(Xm,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(A=a.type)!==null&&A!==void 0?A:"text",variant:i,...a})},[t,r,a,s,i]);return m.createElement(u,{className:e,fullWidth:n,$disabled:t,shadow:o,style:l},h)});Zs.displayName="TextInput";const qm=D.div`
  display: inline-flex;
  align-items: center;
`,Ja=D(mt)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?Q`
          height: calc(50% - 1px);
        `:Q`
          height: 50%;
        `}
`,e0=D.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?Q`
          height: calc(${Te.md} - 4px);
        `:Q`
          height: ${Te.md};
          margin-left: 2px;
        `}
`,Sc=D.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?Q`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:Q`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${Ja}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?Q`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:Q`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,$A=w.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:l,readOnly:i,step:a=1,style:s,value:u,variant:h="default",width:A,...p},v)=>{const[x,k]=sn({defaultValue:t,onChange:l,readOnly:i,value:u}),$=w.useCallback(E=>{const S=parseFloat(E.target.value);k(S)},[k]),d=w.useCallback(E=>{const S=wn(parseFloat(((x??0)+E).toFixed(2)),o??null,r??null);k(S),l==null||l(S)},[r,o,l,k,x]),c=w.useCallback(()=>{x!==void 0&&(l==null||l(x))},[l,x]),f=w.useCallback(()=>{d(a)},[d,a]),g=w.useCallback(()=>{d(-a)},[d,a]),C=h==="flat"?"flat":"raised";return m.createElement(qm,{className:e,style:{...s,width:A!==void 0?an(A):"auto"},...p},m.createElement(Zs,{value:x,variant:h,onChange:$,disabled:n,type:"number",readOnly:i,ref:v,fullWidth:!0,onBlur:c}),m.createElement(e0,{variant:h},m.createElement(Ja,{"data-testid":"increment",variant:C,disabled:n||i,onClick:f},m.createElement(Sc,{invert:!0})),m.createElement(Ja,{"data-testid":"decrement",variant:C,disabled:n||i,onClick:g},m.createElement(Sc,null))))});$A.displayName="NumberInput";function t0(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const TA=e=>w.useMemo(()=>t0(),[e]),IA=Q`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,QA=Q`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,qs=D.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,n0=D.div`
  ${IA}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${qs}:focus & {
    ${QA}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,NA=Q`
  height: ${Te.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?ht():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,r0=D(St)`
  ${NA}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,o0=D.div`
  ${Tn()}
  ${NA}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,l0=D.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${IA}
  cursor: pointer;
  &:disabled {
    ${ht()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,zA=D(li).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?Q`
          height: 100%;
          margin-right: 0;
        `:Q`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,i0=D.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${zA}:active & {
    margin-top: 2px;
  }
`,a0=D.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${Ws};
  ${({variant:e="default"})=>e==="flat"?Q`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:Q`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>Gs(e)}
`,s0=D.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Te.md} - 4px);
  line-height: calc(${Te.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?QA:""}
  user-select: none;
`,u0=[],_A=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:l=u0,readOnly:i,style:a,value:s,variant:u,width:h})=>{var A;const p=w.useMemo(()=>l.filter(Boolean),[l]),[v,x]=sn({defaultValue:t??((A=p==null?void 0:p[0])===null||A===void 0?void 0:A.value),onChange:o,readOnly:i,value:s}),k=!(n||i),$=w.useMemo(()=>({className:e,style:{...a,width:h}}),[e,a,h]),d=w.useMemo(()=>m.createElement(zA,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:u==="flat"?"flat":"raised"},m.createElement(i0,{"data-testid":"select-icon",$disabled:n})),[n,r,u]),c=w.useMemo(()=>u==="flat"?o0:r0,[u]);return w.useMemo(()=>({isEnabled:k,options:p,value:v,setValue:x,wrapperProps:$,DropdownButton:d,Wrapper:c}),[d,c,k,p,x,v,$])},c0={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},d0=1e3,f0=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:l,onOpen:i,open:a,options:s,readOnly:u,value:h,selectRef:A,setValue:p,wrapperRef:v})=>{const x=w.useRef(null),k=w.useRef([]),$=w.useRef(0),d=w.useRef(0),c=w.useRef(),f=w.useRef("search"),g=w.useRef(""),C=w.useRef(),[E,S]=sn({defaultValue:!1,onChange:i,onChangePropName:"onOpen",readOnly:u,value:a,valuePropName:"open"}),T=w.useMemo(()=>{const b=s.findIndex(R=>R.value===h);return $.current=wn(b,0,null),s[b]},[s,h]),[H,_]=w.useState(s[0]),Z=w.useCallback(b=>{const R=x.current,J=k.current[b];if(!J||!R){c.current=b;return}c.current=void 0;const K=R.clientHeight,le=R.scrollTop,Oe=R.scrollTop+K,we=J.offsetTop,qe=J.offsetHeight,Bt=J.offsetTop+J.offsetHeight;we<le&&R.scrollTo(0,we),Bt>Oe&&R.scrollTo(0,we-K+qe),J.focus({preventScroll:!0})},[x]),q=w.useCallback((b,{scroll:R}={})=>{var J;const K=s.length-1;let le;switch(b){case"first":{le=0;break}case"last":{le=K;break}case"next":{le=wn(d.current+1,0,K);break}case"previous":{le=wn(d.current-1,0,K);break}case"selected":{le=wn((J=$.current)!==null&&J!==void 0?J:0,0,K);break}default:le=b}d.current=le,_(s[le]),R&&Z(le)},[d,s,Z]),de=w.useCallback(({fromEvent:b})=>{S(!0),q("selected",{scroll:!0}),i==null||i({fromEvent:b})},[q,i,S]),fe=w.useCallback(()=>{f.current="search",g.current="",clearTimeout(C.current)},[]),ae=w.useCallback(({focusSelect:b,fromEvent:R})=>{var J;n==null||n({fromEvent:R}),S(!1),_(s[0]),fe(),c.current=void 0,b&&((J=A.current)===null||J===void 0||J.focus())},[fe,n,s,A,S]),ve=w.useCallback(({fromEvent:b})=>{E?ae({focusSelect:!1,fromEvent:b}):de({fromEvent:b})},[ae,de,E]),ye=w.useCallback((b,{fromEvent:R})=>{$.current!==b&&($.current=b,p(s[b].value),t==null||t(s[b],{fromEvent:R}))},[t,s,p]),B=w.useCallback(({focusSelect:b,fromEvent:R})=>{ye(d.current,{fromEvent:R}),ae({focusSelect:b,fromEvent:R})},[ae,ye]),I=w.useCallback((b,{fromEvent:R,select:J})=>{var K;switch(f.current==="cycleFirstLetter"&&b!==g.current&&(f.current="search"),b===g.current?f.current="cycleFirstLetter":g.current+=b,f.current){case"search":{let le=s.findIndex(Oe=>{var we;return((we=Oe.label)===null||we===void 0?void 0:we.toLocaleUpperCase().indexOf(g.current))===0});le<0&&(le=s.findIndex(Oe=>{var we;return((we=Oe.label)===null||we===void 0?void 0:we.toLocaleUpperCase().indexOf(b))===0}),g.current=b),le>=0&&(J?ye(le,{fromEvent:R}):q(le,{scroll:!0}));break}case"cycleFirstLetter":{const le=J?(K=$.current)!==null&&K!==void 0?K:-1:d.current;let Oe=s.findIndex((we,qe)=>{var Bt;return qe>le&&((Bt=we.label)===null||Bt===void 0?void 0:Bt.toLocaleUpperCase().indexOf(b))===0});Oe<0&&(Oe=s.findIndex(we=>{var qe;return((qe=we.label)===null||qe===void 0?void 0:qe.toLocaleUpperCase().indexOf(b))===0})),Oe>=0&&(J?ye(Oe,{fromEvent:R}):q(Oe,{scroll:!0}));break}}clearTimeout(C.current),C.current=setTimeout(()=>{f.current==="search"&&(g.current="")},d0)},[q,s,ye]),z=w.useCallback(b=>{var R;b.button===0&&(b.preventDefault(),(R=A.current)===null||R===void 0||R.focus(),ve({fromEvent:b}),l==null||l(b))},[l,A,ve]),W=w.useCallback(b=>{B({focusSelect:!0,fromEvent:b})},[B]),F=w.useCallback(b=>{const{altKey:R,code:J,ctrlKey:K,metaKey:le,shiftKey:Oe}=b,{ARROW_DOWN:we,ARROW_UP:qe,END:Bt,ENTER:fn,ESC:Mt,HOME:ci,SPACE:di,TAB:xr}=c0,eu=R||K||le||Oe;if(!(J===xr&&(R||K||le)||J!==xr&&eu))switch(J){case we:{if(b.preventDefault(),!E){de({fromEvent:b});return}q("next",{scroll:!0});break}case qe:{if(b.preventDefault(),!E){de({fromEvent:b});return}q("previous",{scroll:!0});break}case Bt:{if(b.preventDefault(),!E){de({fromEvent:b});return}q("last",{scroll:!0});break}case fn:{if(!E)return;b.preventDefault(),B({focusSelect:!0,fromEvent:b});break}case Mt:{if(!E)return;b.preventDefault(),ae({focusSelect:!0,fromEvent:b});break}case ci:{if(b.preventDefault(),!E){de({fromEvent:b});return}q("first",{scroll:!0});break}case di:{b.preventDefault(),E?B({focusSelect:!0,fromEvent:b}):de({fromEvent:b});break}case xr:{if(!E)return;Oe||b.preventDefault(),B({focusSelect:!Oe,fromEvent:b});break}default:!eu&&J.match(/^Key/)&&(b.preventDefault(),b.stopPropagation(),I(J.replace(/^Key/,""),{select:!E,fromEvent:b}))}},[q,ae,E,de,I,B]),j=w.useCallback(b=>{F(b),o==null||o(b)},[F,o]),P=w.useCallback(b=>{q(b)},[q]),Y=w.useCallback(b=>{E||(fe(),e==null||e(b))},[fe,e,E]),M=w.useCallback(b=>{fe(),r==null||r(b)},[fe,r]),V=w.useCallback(b=>{x.current=b,c.current!==void 0&&Z(c.current)},[Z]),Ee=w.useCallback((b,R)=>{k.current[R]=b,c.current===R&&Z(c.current)},[Z]);return w.useEffect(()=>{if(!E)return()=>{};const b=R=>{var J;const K=R.target;!((J=v.current)===null||J===void 0)&&J.contains(K)||(R.preventDefault(),ae({focusSelect:!1,fromEvent:R}))};return document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}},[ae,E,v]),w.useMemo(()=>({activeOption:H,handleActivateOptionIndex:P,handleBlur:Y,handleButtonKeyDown:j,handleDropdownKeyDown:F,handleFocus:M,handleMouseDown:z,handleOptionClick:W,handleSetDropdownRef:V,handleSetOptionRef:Ee,open:E,selectedOption:T}),[H,P,Y,j,M,F,z,W,V,Ee,E,T])},A0=w.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:l,style:i,value:a,variant:s,width:u,...h},A)=>{const{isEnabled:p,options:v,setValue:x,value:k,DropdownButton:$,Wrapper:d}=_A({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:l,value:a,variant:s}),c=w.useCallback(f=>{const g=v.find(C=>C.value===f.target.value);g&&(x(g.value),r==null||r(g,{fromEvent:f}))},[r,v,x]);return m.createElement(d,{className:e,style:{...i,width:u}},m.createElement(qs,null,m.createElement(l0,{...h,disabled:n,onChange:p?c:Nn,ref:A,value:k},v.map((f,g)=>{var C;return m.createElement("option",{key:`${f.value}-${g}`,value:f.value},(C=f.label)!==null&&C!==void 0?C:f.value)})),$))});A0.displayName="SelectNative";function p0({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:l,setRef:i}){const a=w.useCallback(()=>{e(n)},[e,n]),s=w.useCallback(h=>{i(h,n)},[n,i]),u=TA();return m.createElement(s0,{active:t,"aria-selected":l?"true":void 0,"data-value":o.value,id:u,onClick:r,onMouseEnter:a,ref:s,role:"option",tabIndex:0},o.label)}function h0({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:l,inputProps:i,labelId:a,menuMaxHeight:s,name:u,onBlur:h,onChange:A,onClose:p,onFocus:v,onKeyDown:x,onMouseDown:k,onOpen:$,open:d,options:c,readOnly:f,shadow:g=!0,style:C,variant:E="default",value:S,width:T="auto",...H},_){const{isEnabled:Z,options:q,setValue:de,value:fe,wrapperProps:ae,DropdownButton:ve,Wrapper:ye}=_A({className:n,defaultValue:r,disabled:o,native:!1,onChange:A,options:c,style:C,readOnly:f,value:S,variant:E,width:T}),B=w.useRef(null),I=w.useRef(null),z=w.useRef(null),{activeOption:W,handleActivateOptionIndex:F,handleBlur:j,handleButtonKeyDown:P,handleDropdownKeyDown:Y,handleFocus:M,handleMouseDown:V,handleOptionClick:Ee,handleSetDropdownRef:b,handleSetOptionRef:R,open:J,selectedOption:K}=f0({onBlur:h,onChange:A,onClose:p,onFocus:v,onKeyDown:x,onMouseDown:k,onOpen:$,open:d,options:q,value:fe,selectRef:I,setValue:de,wrapperRef:z});w.useImperativeHandle(_,()=>({focus:fn=>{var Mt;(Mt=I.current)===null||Mt===void 0||Mt.focus(fn)},node:B.current,value:String(fe)}),[fe]);const le=w.useMemo(()=>K?typeof l=="function"?l(K):K.label:"",[l,K]),Oe=Z?1:void 0,we=w.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),qe=TA(),Bt=w.useMemo(()=>q.map((fn,Mt)=>{const ci=`${fe}-${Mt}`,di=fn===W,xr=fn===K;return m.createElement(p0,{activateOptionIndex:F,active:di,index:Mt,key:ci,onClick:Ee,option:fn,selected:xr,setRef:R})}),[W,F,Ee,R,q,K,fe]);return m.createElement(ye,{...ae,$disabled:o,ref:z,shadow:g,style:{...C,width:T}},m.createElement("input",{name:u,ref:B,type:"hidden",value:String(fe),...i}),m.createElement(qs,{"aria-disabled":o,"aria-expanded":J,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??a,"aria-owns":Z&&J?qe:void 0,onBlur:j,onFocus:M,onKeyDown:P,onMouseDown:Z?V:k,ref:I,role:"button",tabIndex:Oe,...H},m.createElement(n0,null,le),ve),Z&&J&&m.createElement(a0,{id:qe,onKeyDown:Y,ref:b,role:"listbox",style:we,tabIndex:0,variant:E},Bt))}const jA=w.forwardRef(h0);jA.displayName="Select";const g0=D.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,go=w.forwardRef(function({children:t,noPadding:n=!1,...r},o){return m.createElement(g0,{noPadding:n,ref:o,...r},t)});go.displayName="Toolbar";const m0=D.div`
  padding: 16px;
`,ii=w.forwardRef(function({children:t,...n},r){return m.createElement(m0,{ref:r,...n},t)});ii.displayName="WindowContent";const v0=D.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?Q`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:Q`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${li} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,ai=w.forwardRef(function({active:t=!0,children:n,...r},o){return m.createElement(v0,{active:t,ref:o,...r},n)});ai.displayName="WindowHeader";const y0=D.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${pe({style:"window"})}
  ${gt()}
`,w0=D.span`
  ${({theme:e})=>Q`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,si=w.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},l)=>m.createElement(y0,{ref:l,shadow:r,...o},e,t&&m.createElement(w0,{"data-testid":"resizeHandle",ref:n})));si.displayName="Window";const x0=D(CA)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,k0=D.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,E0=D.div`
  display: flex;
  flex-wrap: wrap;
`,Dt=D.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,C0=D.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,S0=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function B0(e,t){return new Date(e,t+1,0).getDate()}function D0(e,t,n){return new Date(e,t,n).getDay()}function O0(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const b0=w.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},l)=>{const[i,a]=w.useState(()=>O0(t)),{year:s,month:u,day:h}=i,A=w.useCallback(({value:$})=>{a(d=>({...d,month:$}))},[]),p=w.useCallback($=>{a(d=>({...d,year:$}))},[]),v=w.useCallback($=>{a(d=>({...d,day:$}))},[]),x=w.useCallback(()=>{const $=[i.year,i.month+1,i.day].map(d=>String(d).padStart(2,"0")).join("-");n==null||n($)},[i.day,i.month,i.year,n]),k=w.useMemo(()=>{const $=Array.from({length:42}),d=D0(s,u,1);let c=h;const f=B0(s,u);return c=c<f?c:f,$.forEach((g,C)=>{if(C>=d&&C<f+d){const E=C-d+1;$[C]=m.createElement(Dt,{key:C,onClick:()=>{v(E)}},m.createElement(C0,{active:E===c},E))}else $[C]=m.createElement(Dt,{key:C})}),$},[h,v,u,s]);return m.createElement(si,{className:e,ref:l,shadow:o,style:{margin:20}},m.createElement(ai,null,m.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),m.createElement(ii,null,m.createElement(go,{noPadding:!0,style:{justifyContent:"space-between"}},m.createElement(jA,{options:S0,value:u,onChange:A,width:128,menuMaxHeight:200}),m.createElement($A,{value:s,onChange:p,width:100})),m.createElement(x0,null,m.createElement(k0,null,m.createElement(Dt,null,"S"),m.createElement(Dt,null,"M"),m.createElement(Dt,null,"T"),m.createElement(Dt,null,"W"),m.createElement(Dt,null,"T"),m.createElement(Dt,null,"F"),m.createElement(Dt,null,"S")),m.createElement(E0,null,k)),m.createElement(go,{noPadding:!0,style:{justifyContent:"space-between"}},m.createElement(mt,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),m.createElement(mt,{fullWidth:!0,onClick:n?x:void 0,disabled:!n},"OK"))))});b0.displayName="DatePicker";const $0=e=>{switch(e){case"status":case"well":return Q`
        ${pe({style:"status"})}
      `;case"window":case"outside":return Q`
        ${pe({style:"window"})}
      `;case"field":return Q`
        ${pe({style:"field"})}
      `;default:return Q`
        ${pe()}
      `}},T0=D.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>$0(e)}
  ${({variant:e})=>gt(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,I0=w.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>m.createElement(T0,{ref:o,shadow:t,variant:n,...r},e));I0.displayName="Frame";const Q0=D.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&Q`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&ht()}
`,N0=D.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,z0=w.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},l)=>m.createElement(Q0,{"aria-disabled":t,$disabled:t,variant:n,ref:l,...o},e&&m.createElement(N0,{variant:n},e),r));z0.displayName="GroupBox";const _0=D.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${an(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;_0.displayName="Handle";const j0="url('data:image/gif;base64,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')",P0=D.div`
  display: inline-block;
  height: ${({size:e})=>an(e)};
  width: ${({size:e})=>an(e)};
`,M0=D.span`
  display: block;
  background: ${j0};
  background-size: cover;
  width: 100%;
  height: 100%;
`,H0=w.forwardRef(({size:e=30,...t},n)=>m.createElement(P0,{size:e,ref:n,...t},m.createElement(M0,null)));H0.displayName="Hourglass";const R0=D.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,L0=D.div`
  position: relative;
`,F0=D.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,V0=D(St).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,J0=D.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,U0=w.forwardRef(({backgroundStyles:e,children:t,...n},r)=>m.createElement(R0,{ref:r,...n},m.createElement(L0,null,m.createElement(F0,null,m.createElement(V0,{style:e},t)),m.createElement(J0,null))));U0.displayName="Monitor";const W0=D.div`
  display: inline-block;
  height: ${Te.md};
  width: 100%;
`,Y0=D(St)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,PA=Q`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,G0=D.div`
  position: relative;
  top: 4px;
  ${PA}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,K0=D.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${PA}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,X0=D.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,MA=17,Z0=D.span`
  display: inline-block;
  width: ${MA}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,q0=w.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},l)=>{const i=e?null:`${n}%`,a=w.useRef(null),[s,u]=w.useState([]),h=w.useCallback(()=>{if(!a.current||n===void 0)return;const A=a.current.getBoundingClientRect().width,p=Math.round(n/100*A/MA);u(Array.from({length:p}))},[n]);return w.useEffect(()=>(h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)),[h]),m.createElement(W0,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:l,role:"progressbar",variant:r,...o},m.createElement(Y0,{variant:r,shadow:t},r==="default"?m.createElement(m.Fragment,null,m.createElement(G0,{"data-testid":"defaultProgress1"},i),m.createElement(K0,{"data-testid":"defaultProgress2",value:n},i)):m.createElement(X0,{ref:a,"data-testid":"tileProgress"},s.map((A,p)=>m.createElement(Z0,{key:p})))))});q0.displayName="ProgressBar";const HA=Q`
  width: ${Ct}px;
  height: ${Ct}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,ev=D(St)`
  ${HA}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,tv=D.div`
  ${Tn()}
  ${HA}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,nv=D.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,rv={flat:tv,default:ev},ov=w.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:l={},variant:i="default",...a},s)=>{const u=rv[i];return m.createElement(Ks,{$disabled:n,className:t,style:l},m.createElement(u,{$disabled:n,role:"presentation"},e&&m.createElement(nv,{$disabled:n,variant:i})),m.createElement(_l,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...a}),r&&m.createElement(Xs,null,r))});ov.displayName="Radio";const lv=typeof window<"u"?w.useLayoutEffect:w.useEffect;function An(e){const t=w.useRef(e);return lv(()=>{t.current=e}),w.useCallback((...n)=>(0,t.current)(...n),[])}function Bc(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Dc(e,t){return w.useMemo(()=>e==null&&t==null?null:n=>{Bc(e,n),Bc(t,n)},[e,t])}let ui=!0,Ua=!1,Oc;const iv={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function av(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&iv[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function sv(e){e.metaKey||e.altKey||e.ctrlKey||(ui=!0)}function Li(){ui=!1}function uv(){this.visibilityState==="hidden"&&Ua&&(ui=!0)}function cv(e){e.addEventListener("keydown",sv,!0),e.addEventListener("mousedown",Li,!0),e.addEventListener("pointerdown",Li,!0),e.addEventListener("touchstart",Li,!0),e.addEventListener("visibilitychange",uv,!0)}function dv(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return ui||av(t)}function fv(){Ua=!0,window.clearTimeout(Oc),Oc=window.setTimeout(()=>{Ua=!1},100)}function Av(){const e=w.useCallback(t=>{const n=Yf.findDOMNode(t);n!=null&&cv(n.ownerDocument)},[]);return{isFocusVisible:dv,onBlurVisible:fv,ref:e}}function pv(e,t,n){return(n-t)*e+t}function Fo(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Vo(e){return e&&e.ownerDocument||document}function hv(e,t){var n;const{index:r}=(n=e.reduce((o,l,i)=>{const a=Math.abs(t-l);return o===null||a<o.distance||a===o.distance?{distance:a,index:i}:o},null))!==null&&n!==void 0?n:{};return r??-1}const gv=D.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>e==="vertical"?Q`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:Q`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,RA=()=>Q`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?Q`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:Q`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,mv=D(St)`
  ${RA()}
`,vv=D(St)`
  ${RA()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,yv=D.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?Q`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:Q`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?Q`
          ${Tn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:Q`
          ${gt()}
          ${pe()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&ko({mainColor:t.material,secondaryColor:t.borderLightest})}
`,Zn=6,wv=D.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?Q`
          right: ${-Zn-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Zn}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:Q`
          bottom: ${-Zn}px;
          height: ${Zn}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&Q`
      ${ht()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,xv=D.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?Q`
          transform: translate(${Zn+2}px, ${Zn+1}px);
        `:Q`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,kv=w.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:l,onChange:i,onChangeCommitted:a,onMouseDown:s,orientation:u="horizontal",size:h="100%",step:A=1,value:p,variant:v="default",...x},k)=>{const $=v==="flat"?vv:mv,d=u==="vertical",[c=o,f]=sn({defaultValue:e,onChange:i??a,value:p}),{isFocusVisible:g,onBlurVisible:C,ref:E}=Av(),[S,T]=w.useState(!1),H=w.useRef(),_=w.useRef(null),Z=Dc(E,H),q=Dc(k,Z),de=An(j=>{g(j)&&T(!0)}),fe=An(()=>{S!==!1&&(T(!1),C())}),ae=w.useRef(),ve=w.useMemo(()=>n===!0&&Number.isFinite(A)?[...Array(Math.round((r-o)/A)+1)].map((j,P)=>({label:void 0,value:o+A*P})):Array.isArray(n)?n:[],[n,r,o,A]),ye=An(j=>{const P=(r-o)/10,Y=ve.map(Ee=>Ee.value),M=Y.indexOf(c);let V=0;switch(j.key){case"Home":V=o;break;case"End":V=r;break;case"PageUp":A&&(V=c+P);break;case"PageDown":A&&(V=c-P);break;case"ArrowRight":case"ArrowUp":A?V=c+A:V=Y[M+1]||Y[Y.length-1];break;case"ArrowLeft":case"ArrowDown":A?V=c-A:V=Y[M-1]||Y[0];break;default:return}j.preventDefault(),A&&(V=Ec(V,A,o)),V=wn(V,o,r),f(V),T(!0),i==null||i(V),a==null||a(V)}),B=w.useCallback(j=>{if(!H.current)return 0;const P=H.current.getBoundingClientRect();let Y;d?Y=(P.bottom-j.y)/P.height:Y=(j.x-P.left)/P.width;let M;if(M=pv(Y,o,r),A)M=Ec(M,A,o);else{const V=ve.map(b=>b.value),Ee=hv(V,M);M=V[Ee]}return M=wn(M,o,r),M},[ve,r,o,A,d]),I=An(j=>{var P;const Y=Fo(j,ae.current);if(!Y)return;const M=B(Y);(P=_.current)===null||P===void 0||P.focus(),f(M),T(!0),i==null||i(M)}),z=An(j=>{const P=Fo(j,ae.current);if(!P)return;const Y=B(P);a==null||a(Y),ae.current=void 0;const M=Vo(H.current);M.removeEventListener("mousemove",I),M.removeEventListener("mouseup",z),M.removeEventListener("touchmove",I),M.removeEventListener("touchend",z)}),W=An(j=>{var P;s==null||s(j),j.preventDefault(),(P=_.current)===null||P===void 0||P.focus(),T(!0);const Y=Fo(j,ae.current);if(Y){const V=B(Y);f(V),i==null||i(V)}const M=Vo(H.current);M.addEventListener("mousemove",I),M.addEventListener("mouseup",z)}),F=An(j=>{var P;j.preventDefault();const Y=j.changedTouches[0];Y!=null&&(ae.current=Y.identifier),(P=_.current)===null||P===void 0||P.focus(),T(!0);const M=Fo(j,ae.current);if(M){const Ee=B(M);f(Ee),i==null||i(Ee)}const V=Vo(H.current);V.addEventListener("touchmove",I),V.addEventListener("touchend",z)});return w.useEffect(()=>{const{current:j}=H;j==null||j.addEventListener("touchstart",F);const P=Vo(j);return()=>{j==null||j.removeEventListener("touchstart",F),P.removeEventListener("mousemove",I),P.removeEventListener("mouseup",z),P.removeEventListener("touchmove",I),P.removeEventListener("touchend",z)}},[z,I,F]),m.createElement(gv,{$disabled:t,hasMarks:!!ve.length,isFocused:S,onMouseDown:W,orientation:u,ref:q,size:an(h),...x},m.createElement("input",{disabled:t,name:l,type:"hidden",value:c??0}),ve&&ve.map(j=>m.createElement(wv,{$disabled:t,"data-testid":"tick",key:j.value/(r-o)*100,orientation:u,style:{[d?"bottom":"left"]:`${(j.value-o)/(r-o)*100}%`}},j.label&&m.createElement(xv,{"aria-hidden":!0,"data-testid":"mark",orientation:u},j.label))),m.createElement($,{orientation:u,variant:v}),m.createElement(yv,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":u,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":c,onBlur:fe,onFocus:de,onKeyDown:ye,orientation:u,ref:_,role:"slider",style:{[d?"bottom":"left"]:`${(d?-100:0)+100*(c-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:v}))});kv.displayName="Slider";const Ev=D.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${Ys};
  overflow-y: auto;
`,Cv=w.forwardRef(function({children:t,...n},r){return m.createElement(Ev,{ref:r,...n},t)});Cv.displayName="TableBody";const Sv=D.td`
  padding: 0 8px;
`,Bv=w.forwardRef(function({children:t,...n},r){return m.createElement(Sv,{ref:r,...n},t)});Bv.displayName="TableDataCell";const Dv=D.thead`
  display: table-header-group;
`,Ov=w.forwardRef(function({children:t,...n},r){return m.createElement(Dv,{ref:r,...n},t)});Ov.displayName="TableHead";const bv=D.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${pe()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&Q`
      &:active {
        &:before {
          ${pe({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&ht()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&ht()}
  }
`,$v=w.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Nn,sort:l,...i},a){const s=l==="asc"?"ascending":l==="desc"?"descending":void 0;return m.createElement(bv,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:a,...i},m.createElement("div",null,n))});$v.displayName="TableHeadCell";const Tv=D.tr`
  color: inherit;
  display: table-row;
  height: calc(${Te.md} - 2px);
  line-height: calc(${Te.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,Iv=w.forwardRef(function({children:t,...n},r){return m.createElement(Tv,{ref:r,...n},t)});Iv.displayName="TableRow";const Qv=D.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Nv=D(St)`
  &:before {
    box-shadow: none;
  }
`,zv=w.forwardRef(({children:e,...t},n)=>m.createElement(Nv,null,m.createElement(Qv,{ref:n,...t},e)));zv.displayName="Table";const _v=D.button`
  ${gt()}
  ${pe()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Te.md};
  line-height: ${Te.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${gr}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${Te.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,jv=w.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},l)=>m.createElement(_v,{"aria-selected":n,selected:n,onClick:i=>t==null?void 0:t(e,i),ref:l,role:"tab",...o},r));jv.displayName="Tab";const Pv=D.div`
  ${gt()}
  ${pe()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Mv=w.forwardRef(({children:e,...t},n)=>m.createElement(Pv,{ref:n,...t},e));Mv.displayName="TabBody";const Hv=D.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,Rv=D.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;function Lv(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const Fv=w.forwardRef(({value:e,onChange:t=Nn,children:n,rows:r=1,...o},l)=>{const i=w.useMemo(()=>{var a;const s=(a=m.Children.map(n,A=>{if(!m.isValidElement(A))return null;const p={selected:A.props.value===e,onClick:t};return m.cloneElement(A,p)}))!==null&&a!==void 0?a:[],u=Lv(s,r).map((A,p)=>({key:p,tabs:A})),h=u.findIndex(A=>A.tabs.some(p=>p.props.selected));return u.push(u.splice(h,1)[0]),u},[n,t,r,e]);return m.createElement(Hv,{...o,isMultiRow:r>1,role:"tablist",ref:l},i.map(a=>m.createElement(Rv,{key:a.key},a.tabs)))});Fv.displayName="Tabs";const Vv=["blur","focus"],Jv=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function bc(e){return"nativeEvent"in e&&Vv.includes(e.type)}function $c(e){return"nativeEvent"in e&&Jv.includes(e.type)}const Uv={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Wv=D.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${Ws};
  text-align: center;
  font-size: 1rem;
  ${e=>Uv[e.position]}
`,Yv=D.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,Gv=w.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:l=0,onBlur:i,onClose:a,onFocus:s,onMouseEnter:u,onMouseLeave:h,onOpen:A,style:p,text:v,position:x="top",...k},$)=>{const[d,c]=w.useState(!1),[f,g]=w.useState(),[C,E]=w.useState(),S=!n,T=!r,H=B=>{window.clearTimeout(f),window.clearTimeout(C);const I=window.setTimeout(()=>{c(!0),A==null||A(B)},o);g(I)},_=B=>{B.persist(),bc(B)?s==null||s(B):$c(B)&&(u==null||u(B)),H(B)},Z=B=>{window.clearTimeout(f),window.clearTimeout(C);const I=window.setTimeout(()=>{c(!1),a==null||a(B)},l);E(I)},q=B=>{B.persist(),bc(B)?i==null||i(B):$c(B)&&(h==null||h(B)),Z(B)},de=S?q:void 0,fe=S?_:void 0,ae=T?_:void 0,ve=T?q:void 0,ye=S?0:void 0;return m.createElement(Yv,{"data-testid":"tooltip-wrapper",onBlur:de,onFocus:fe,onMouseEnter:ae,onMouseLeave:ve,tabIndex:ye},m.createElement(Wv,{className:e,"data-testid":"tooltip",position:x,ref:$,show:d,style:p,...k},v),t)});Gv.displayName="Tooltip";const Wa=D(Xs)`
  white-space: nowrap;
`,LA=Q`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":Q`
          cursor: pointer;

          :focus {
            ${Wa} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,Kv=D.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&Q`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:t})=>t.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,Xv=D.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?Q`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `:Q`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,Zv=D.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,qv=D.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${LA};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,Tc=D(Ks)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${LA};
`,e1=D.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Ic(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function Qc(e){e.preventDefault()}function FA({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:l,selected:i,style:a,tree:s=[]}){const u=o===0,h=w.useCallback(A=>{var p,v;const x=!!(A.items&&A.items.length>0),k=n.includes(A.id),$=(p=t||A.disabled)!==null&&p!==void 0?p:!1,d=$?Qc:C=>l(C,A),c=$?Qc:C=>l(C,A),f=i===A.id,g=m.createElement(e1,{"aria-hidden":!0},A.icon);return m.createElement(Xv,{key:A.label,isRootLevel:u,role:"treeitem","aria-expanded":k,"aria-selected":f,hasItems:x},x?m.createElement(Zv,{open:k},m.createElement(qv,{onClick:d,$disabled:$},m.createElement(Tc,{$disabled:$},g,m.createElement(Wa,null,A.label))),k&&m.createElement(FA,{className:e,disabled:$,expanded:n,level:o+1,select:l,selected:i,style:a,tree:(v=A.items)!==null&&v!==void 0?v:[]})):m.createElement(Tc,{as:"button",$disabled:$,onClick:c},g,m.createElement(Wa,null,A.label)))},[e,t,n,u,o,l,i,a]);return m.createElement(Kv,{className:u?e:void 0,style:u?a:void 0,ref:u?r:void 0,role:u?"tree":"group",isRootLevel:u},s.map(h))}function t1({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:l,onNodeToggle:i,selected:a,style:s,tree:u=[]},h){const[A,p]=sn({defaultValue:t,onChange:i,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[v,x]=sn({defaultValue:n,onChange:l,onChangePropName:"onNodeSelect",value:a,valuePropName:"selected"}),k=w.useCallback((c,f)=>{if(i){const g=Ic(A,f);i(c,g)}p(g=>Ic(g,f))},[A,i,p]),$=w.useCallback((c,f)=>{x(f),l&&l(c,f)},[l,x]),d=w.useCallback((c,f)=>{c.preventDefault(),$(c,f.id),f.items&&f.items.length&&k(c,f.id)},[$,k]);return m.createElement(FA,{className:e,disabled:r,expanded:A,level:0,innerRef:h,select:d,selected:v,style:s,tree:u})}const n1=w.forwardRef(t1);n1.displayName="TreeView";const r1="/assets/windows-CjnvdAtX.png";function o1({ContactOpen:e,setContactOpen:t}){return y.jsx(xA,{className:"myAppbar",children:y.jsx(go,{style:{justifyContent:"space-between"},children:y.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[y.jsxs(mt,{onClick:()=>t(!e),active:e,style:{fontWeight:"bold"},children:[y.jsx("img",{className:"windows-logo",src:r1,alt:""}),"Start"]}),e&&y.jsx(EA,{style:{position:"absolute",left:"0",bottom:"100%",zIndex:"9"},onClick:()=>t(!1),children:y.jsx(kA,{children:y.jsx("p",{children:"Howdy"})})})]})})})}const l1="data:image/png;base64,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",i1="data:image/png;base64,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",a1="data:image/png;base64,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",s1="/assets/linkedin_icon-CnULRo-M.png",u1="/assets/github_icon-DW-CJ5Fe.png";function c1({setIsOpen:e,setIsProjectOpen:t}){return y.jsxs("div",{className:"desktop-app",children:[y.jsxs("div",{onClick:()=>{e(!0)},style:{cursor:"pointer"},className:"logo-box",children:[y.jsx("img",{className:"desktop-logo",src:l1,alt:""}),y.jsx("p",{children:"About"})]}),y.jsxs("div",{onClick:()=>{t(!0)},style:{cursor:"pointer"},className:"logo-box",children:[y.jsx("img",{className:"desktop-logo",src:i1,alt:""}),y.jsx("p",{children:"Projects"})]}),y.jsx("a",{href:"https://drive.google.com/file/d/1JzCww0I3qbdKmaHvqDPbs0nJwsvypYS6/view?usp=sharing",target:"_blank",rel:"noreferrer",children:y.jsxs("div",{style:{cursor:"pointer"},className:"logo-box",children:[y.jsx("img",{className:"desktop-logo",src:a1,alt:""}),y.jsx("p",{children:"Resume"})]})}),y.jsx("a",{href:"https://www.linkedin.com/in/alwaysoscar",target:"_blank",rel:"noreferrer",children:y.jsxs("div",{style:{cursor:"pointer"},className:"logo-box",children:[y.jsx("img",{className:"desktop-logo",src:s1,alt:""}),y.jsx("p",{children:"Linkedln"})]})}),y.jsx("a",{href:"https://github.com/AlwaysOscar",target:"_blank",rel:"noreferrer",children:y.jsxs("div",{style:{cursor:"pointer"},className:"logo-box",children:[y.jsx("img",{className:"desktop-logo",src:u1,alt:""}),y.jsx("p",{children:"Github"})]})})]})}const d1="_navbar_15fkf_5",f1="_menu_15fkf_23",A1="_menuBtn_15fkf_31",p1="_menuItems_15fkf_39",h1="_opacity_15fkf_1",g1="_img_15fkf_87",m1="_menuOpen_15fkf_173",Pn={navbar:d1,menu:f1,menuBtn:A1,menuItems:p1,opacity:h1,img:g1,menuOpen:m1},v1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACkSURBVHgB7dWxDcIwFATQMxsg6PEK7AEbwHrZAVGwyqegooA2lXMpHFkpHSXfxT3p5Pyk+UWsA0REVhXKIaW053FjDvDxYZ4hBMsvpgW5XOTxYiJ8GXPmkv9x2BUfLvBfbhSZex7KBRPa0eeHcsGOecOfMY88zC/JiceVOcLHl+n4//0g0gg1SQWDmmQ5NUktNYk0R01SwaAmWU5NUktNIiJbGwBK00gfRw3LTgAAAABJRU5ErkJggg==",y1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEOSURBVHgB7ZdtDoMgDIa7XWDLPIBX1RPOnaijERJmWsZHhcT0SfhjYnnziBQADMMwjCwQ8ebGExqhGlQLtHFFFzc2NyaoxL37cuNNtUALb47CBSjkDIXQOz5cYFEx6T/Jhr8UmYzMxXw0lkyYYBJC/jXJmAvhqpdKaqIikwlzxUskN2S2yW7mhImTJrubY0KKJoeZY0JKJseZY0JyJseaY0LOQkgVc3fQATOf9QX5v/W4Jsd8YpT/1qqOox1O3OewouNoh5PMxRt1de9uDZfdIbqbxIoO0c0kNvTW003ifmBt6q0Jk+0HVtyP/GupOabOfAhJNfUuT75gU2+NTK6gDepdOx94xrXTMAzjonwB63HGEH1flEQAAAAASUVORK5CYII=";function w1(){const[e,t]=w.useState(!1);return y.jsxs("nav",{className:Pn.navbar,children:[y.jsx("img",{className:Pn.img,src:"https://miro.medium.com/v2/resize:fit:1400/0*qErad8kQZFwFKiEg.gif",alt:"logo"}),y.jsxs("div",{className:Pn.menu,children:[y.jsx("img",{className:Pn.menuBtn,src:e?y1:v1,alt:"menu-button",onClick:()=>t(!e)}),y.jsxs("ul",{className:`${Pn.menuItems} ${e&&Pn.menuOpen}`,onClick:()=>t(!1),children:[y.jsx("li",{children:y.jsx("a",{href:"#education",children:"Education"})}),y.jsx("li",{children:y.jsx("a",{href:"#experience",children:"Experience"})}),y.jsx("li",{children:y.jsx("a",{href:"#contact",children:"Contact"})})]})]})]})}const x1="_container_1ixim_5",k1="_content_1ixim_19",E1="_title_1ixim_35",C1="_description_1ixim_49",S1="_profileImg_1ixim_65",B1="_floating_1ixim_1",$r={container:x1,content:k1,title:E1,description:C1,profileImg:S1,floating:B1},D1="/assets/profile_img-XYAs1STI.png";function O1(){return y.jsxs("section",{className:$r.container,children:[y.jsxs("div",{className:$r.content,children:[y.jsx("h1",{className:$r.title,children:"Oscar Rodriguez"}),y.jsx("p",{className:$r.description,children:"I’m a Software Engineering student at the University of California - Irvine and set to graduate in the summer of 2025. Open to any Internship opportunities."}),y.jsx("a",{href:"https://drive.google.com/file/d/1JzCww0I3qbdKmaHvqDPbs0nJwsvypYS6/view?usp=sharing",target:"_blank",rel:"noreferrer",children:y.jsx(mt,{children:"View Resume📝"})})]}),y.jsx("img",{src:D1,alt:"Profile image",className:$r.profileImg})]})}const b1="_container_10xfm_5",$1="_content_10xfm_37",T1="_history_10xfm_51",I1="_historyItem_10xfm_67",Q1="_historyItemDetails_10xfm_95",Tr={container:b1,content:$1,history:T1,historyItem:I1,historyItemDetails:Q1},N1=[{role:"Embedded Tutor",organisation:"Mt. San Antonio College",startDate:"Aug. 2022",endDate:"Dec. 2022",experiences:["Facilitated bi-weekly instructional sessions on C programming and debugging, allowing students to independently trouble-shoot code and strengthen their problem-solving abilities","Assisted with hands-on Arduino based labs, providing students with real-world embedded systems development experience"],imageSrc:"https://pbs.twimg.com/profile_images/1060283864206127104/kL35bFGu_400x400.jpg"},{role:"Robotics Team Captain",organisation:"Mt. San Antonio College",startDate:"March 2021",endDate:"March 2022",experiences:["Led a team in engineering a versatile robot that achieved a regular season record of 17-5-0 and ranked 11th place at VEXU Worlds 2022","Spearheaded documentation efforts, crafted a pivotal engineering notebook for judges’ review, and played a crucial role in winning the Southern California VEXU League Excellence Award and qualifying for VEXU Worlds","Introduced GNATT charts and strategically elected specialized team members for tasks, ensuring efficient timelines and leveraging individual strengths","Volunteered as a robot inspector/ referee at our college’s high school VEX tournament, contributing to the qualification of the winning team for VEX Worlds and fostering STEM opportunities for youth"],imageSrc:"https://recf.org/wp-content/uploads/2022/12/vex-u-logo-featured.png"}];function z1(){return y.jsxs("section",{className:Tr.container,id:"experience",children:[y.jsx("h2",{children:"Experience"}),y.jsx("div",{className:Tr.content,children:y.jsx("ul",{className:Tr.history,children:N1.map((e,t)=>y.jsx("li",{className:Tr.historyItem,children:y.jsxs("div",{className:Tr.historyItemDetails,children:[y.jsx("img",{src:e.imageSrc,alt:`${e.organisation} Logo`}),y.jsx("h3",{children:`${e.role}, ${e.organisation}`}),y.jsx("p",{children:`${e.startDate} - ${e.endDate}`}),y.jsx("ul",{children:e.experiences.map((n,r)=>y.jsx("li",{children:n},r))})]})},t))})})]})}const _1="_container_1ckyc_5",j1="_education_1ckyc_39",P1="_educationItem_1ckyc_53",M1="_educationItemDetails_1ckyc_81",Ir={container:_1,education:j1,educationItem:P1,educationItemDetails:M1},H1=[{collegeName:"University of California, Irvine",degreeType:"Bachelor of Science",major:"Software Engineering",startDate:"June 2023",endDate:"June 2025",imageSrc:"https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/University_of_California%2C_Irvine_seal.svg/1200px-University_of_California%2C_Irvine_seal.svg.png"},{collegeName:"Mt. San Antonio College",degreeType:"Transfer",major:"Computer Science",startDate:"August 2020",endDate:"June 2023",imageSrc:"https://www.mtsac.edu/marketing/brand/logo-reversed-maroon.png"}];function R1(){return y.jsxs("section",{className:Ir.container,id:"education",children:[y.jsx("h1",{className:Ir.title,children:"Education"}),y.jsx("ul",{className:Ir.education,children:H1.map((e,t)=>y.jsxs("li",{className:Ir.educationItem,children:[y.jsx("img",{src:e.imageSrc,alt:`${e.collegeName} Logo`}),y.jsxs("div",{className:Ir.educationItemDetails,children:[y.jsx("h2",{children:e.collegeName}),y.jsx("h3",{children:`${e.degreeType}, ${e.major}`}),y.jsx("p",{children:`${e.startDate} - ${e.endDate}`})]})]},t))})]})}const L1="_container_1i51e_5",F1="_links_1i51e_43",V1="_link_1i51e_43",Qr={container:L1,links:F1,link:V1};function J1(){return y.jsxs("footer",{id:"contact",className:Qr.container,children:[y.jsx("h2",{children:"Contact"}),y.jsxs("ul",{className:Qr.links,children:[y.jsxs("li",{className:Qr.link,children:[y.jsx("img",{src:"https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png",alt:"Email icon"}),y.jsx("a",{href:"mailto:oscarjr@uci.edu",children:"oscarjr@uci.edu"})]}),y.jsxs("li",{className:Qr.link,children:[y.jsx("img",{src:"https://cdn.icon-icons.com/icons2/2873/PNG/512/linkedin_pixel_logo_icon_181925.png",alt:"LinkedIn icon"}),y.jsx("a",{href:"https://www.linkedin.com/in/alwaysoscar/",children:"linkedin.com/alwaysoscar"})]}),y.jsxs("li",{className:Qr.link,children:[y.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/25/25231.png",alt:"Github icon"}),y.jsx("a",{href:"https://github.com/AlwaysOscar",children:"github.com/AlwaysOscar"})]})]})]})}function U1(){return y.jsxs(y.Fragment,{children:[y.jsx(w1,{}),y.jsx(O1,{}),y.jsx(R1,{}),y.jsx(z1,{}),y.jsx(J1,{})]})}const VA="data:image/svg+xml,%3csvg%20width='9'%20height='9'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%200H0v9h9V0zM8%202H1v6h7V2z'%20fill='%23000'/%3e%3c/svg%3e",JA="data:image/svg+xml,%3csvg%20width='8'%20height='7'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%200h2v1h1v1h2V1h1V0h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1V5h1V4h1V3H2V2H1V1H0V0z'%20fill='%23000'/%3e%3c/svg%3e";function W1({setIsOpen:e,setIsProjectOpen:t,setContactOpen:n}){const[r,o]=w.useState(!1);return y.jsx("div",{className:r?"window-div max-window-div":"window-div",children:y.jsxs(si,{resizable:!0,className:r?"window max-window":"window",children:[y.jsx("strong",{className:"cursor",children:y.jsxs(ai,{className:"title-bar",children:[y.jsx("div",{className:"title-bar-text",children:"About Me"}),y.jsxs("div",{className:"title-bar-controls",children:[y.jsx(mt,{onClick:()=>{o(!r)},className:"btn",children:y.jsx("img",{className:"window-btn",src:VA,alt:""})}),y.jsx(mt,{onClick:()=>{e(!1)},className:"btn",children:y.jsx("img",{className:"window-btn",src:JA,alt:""})})]})]})}),y.jsx(ii,{children:y.jsx("div",{className:r?"my-content max-my-content":"my-content",children:y.jsx(U1,{setIsProjectOpen:t,setContactOpen:n})})})]})})}const Y1="_projects_1adam_5",G1={projects:Y1},K1=[{title:"NFL Trivia Web App",imageSrc:"/src/assets/nfl_player_trivia.png",description:"Description: Designed UI layout in Figma and implemented front-end with React JS. User picks category of positions and scored based off correct answers.",source:"https://github.com/AlwaysOscar/NFLPlayerTrivia"},{title:"Heist Maze Game",imageSrc:"/src/assets/maze_game.png",description:"Description: Developed a C++ Console-based game called Heist Maze project, that challenges the user to steal loot from a maze filled with enemies of different variants.",source:"https://github.com/AlwaysOscar/HeistMazeGame"},{title:"VEXU Robotics Documentation",imageSrc:"/src/assets/notebook.png",description:"This is out entire VEXU robotics Engineering Notebook, which includes the entire documentation throughout the 2021-2022 season.",source:"https://drive.google.com/file/d/1au5SpVF4Ri56CWoyGWrVXN46zt9Hz92V/view?usp=sharing"},{title:"Mini Basketball Game",imageSrc:"/src/assets/basketball_game.png",description:"Description: Collaborated to develop an Arduino UNO R3-based basketball game that transmitted data between the ball’s and the display on the backboard via Bluetooth.",source:"https://docs.google.com/presentation/d/1i7dK5DlB9ifdKj-ttwD1BY0i8t-8tpZvXg5GS82ivto/edit#slide=id.p"},{title:"Busy Box",imageSrc:"/src/assets/busybox.png",description:"Description: Collaborated to develop a Arduino UNO R3-compact device with three independent games for short-term memorization practice. Programmed in C.",source:"https://docs.google.com/presentation/d/1y5O9ORJ21KEzN6MVj5AcqZsmrtq5Av0Apwb0pUpUUf0/edit?usp=sharing"}],X1="_container_1l5p3_5",Z1="_wing_1l5p3_17",q1="_rocketBody_1l5p3_27",ey="_nose_1l5p3_41",ty="_rocketBodyDetails_1l5p3_55",ny="_title_1l5p3_77",ry="_description_1l5p3_97",Rt={container:X1,wing:Z1,rocketBody:q1,nose:ey,rocketBodyDetails:ty,title:ny,description:ry},oy=({project:{title:e,imageSrc:t,description:n,source:r}})=>y.jsxs("div",{className:Rt.container,children:[y.jsx("img",{className:Rt.wing,src:"/src/assets/rocket_LWing.png"}),y.jsxs("div",{className:Rt.rocketBody,children:[y.jsx("img",{className:Rt.nose,src:"/src/assets/rocket_nose.png"}),y.jsxs("div",{className:Rt.rocketBodyDetails,children:[y.jsx("h3",{className:Rt.title,children:e}),y.jsx("img",{src:t,alt:`Image of ${e}`}),y.jsx("p",{className:Rt.description,children:n}),y.jsx("a",{href:r,children:y.jsx(mt,{primary:!0,children:"View"})})]})]}),y.jsx("img",{className:Rt.wing,src:"/src/assets/rocket_RWing.png"})]});function ly(){return y.jsx("div",{className:G1.projects,children:K1.map((e,t)=>y.jsx(oy,{project:e},t))})}function iy(){return y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"title",children:[y.jsx("img",{className:"title-img",src:"https://media.tenor.com/MWIAxMsqaGUAAAAj/glorp-gets-what-it-deserves.gif"}),y.jsx("h1",{children:"Oscar's Project Showcase"}),y.jsx("img",{className:"title-img",src:"https://64.media.tumblr.com/39e12d0291df01ff234654ab6f21ff3f/8e0ad206adb48fae-b1/s400x600/2a7dca3b403fdfbd107be1aa2ef70d1bbee2fa41.gif"})]}),y.jsx(ly,{})]})}function ay({setIsProjectOpen:e}){const[t,n]=w.useState(!1);return y.jsx("div",{className:t?"window-div max-window-div":"project-window-div window-div",children:y.jsxs(si,{resizable:!0,className:t?"window max-window":"window",children:[y.jsx("strong",{className:"cursor",children:y.jsxs(ai,{className:"title-bar",children:[y.jsx("div",{className:"title-bar-text",children:"Projects"}),y.jsxs("div",{className:"title-bar-controls",children:[y.jsx(mt,{onClick:()=>{n(!t)},className:"btn",children:y.jsx("img",{className:"window-btn",src:VA,alt:""})}),y.jsx(mt,{onClick:()=>{e(!1)},className:"btn",children:y.jsx("img",{className:"window-btn",src:JA,alt:""})})]})]})}),y.jsx(go,{children:y.jsx(Zs,{defaultValue:"https://github.com/AlwaysOscar",fullWidth:!0})}),y.jsx(ii,{children:y.jsx("div",{className:t?"project-content my-content max-my-content":"project-content my-content",children:y.jsx(iy,{})})})]})})}var sy={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},uy=sy;const cy=Nc(uy),dy="/assets/ms_sans_serif-Du8rjN1q.woff2",fy="/assets/ms_sans_serif_bold-D5dpRRHG.woff2",Ay=ym`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${dy}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${fy}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  ${mg}
`,py=()=>{const[e,t]=w.useState(!0),[n,r]=w.useState(!1),[o,l]=w.useState(!1);return y.jsxs("div",{children:[y.jsx(Ay,{}),y.jsxs(gm,{theme:cy,children:[e&&y.jsx(W1,{setIsOpen:t,setIsProjectOpen:r,setContactOpen:l}),n&&y.jsx(ay,{setIsProjectOpen:r}),y.jsx(c1,{setIsOpen:t,setIsProjectOpen:r}),y.jsx(o1,{ContactOpen:o,setContactOpen:l})]})]})};Gf(document.getElementById("root")).render(y.jsx(w.StrictMode,{children:y.jsx(py,{})}));
