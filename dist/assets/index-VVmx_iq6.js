(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function sw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gg={exports:{}},Ya={},Kg={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ys=Symbol.for("react.element"),ow=Symbol.for("react.portal"),aw=Symbol.for("react.fragment"),lw=Symbol.for("react.strict_mode"),cw=Symbol.for("react.profiler"),uw=Symbol.for("react.provider"),dw=Symbol.for("react.context"),fw=Symbol.for("react.forward_ref"),hw=Symbol.for("react.suspense"),pw=Symbol.for("react.memo"),gw=Symbol.for("react.lazy"),dh=Symbol.iterator;function mw(t){return t===null||typeof t!="object"?null:(t=dh&&t[dh]||t["@@iterator"],typeof t=="function"?t:null)}var qg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yg=Object.assign,Qg={};function Ci(t,e,n){this.props=t,this.context=e,this.refs=Qg,this.updater=n||qg}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ci.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jg(){}Jg.prototype=Ci.prototype;function rd(t,e,n){this.props=t,this.context=e,this.refs=Qg,this.updater=n||qg}var id=rd.prototype=new Jg;id.constructor=rd;Yg(id,Ci.prototype);id.isPureReactComponent=!0;var fh=Array.isArray,Xg=Object.prototype.hasOwnProperty,sd={current:null},Zg={key:!0,ref:!0,__self:!0,__source:!0};function em(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xg.call(e,r)&&!Zg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ys,type:t,key:s,ref:o,props:i,_owner:sd.current}}function yw(t,e){return{$$typeof:Ys,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function od(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ys}function _w(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hh=/\/+/g;function zl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_w(""+t.key):e.toString(36)}function Lo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ys:case ow:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+zl(o,0):r,fh(i)?(n="",t!=null&&(n=t.replace(hh,"$&/")+"/"),Lo(i,e,n,"",function(c){return c})):i!=null&&(od(i)&&(i=yw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(hh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",fh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+zl(s,a);o+=Lo(s,e,n,l,i)}else if(l=mw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+zl(s,a++),o+=Lo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function po(t,e,n){if(t==null)return t;var r=[],i=0;return Lo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function vw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Be={current:null},jo={transition:null},ww={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:jo,ReactCurrentOwner:sd};function tm(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:po,forEach:function(t,e,n){po(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return po(t,function(){e++}),e},toArray:function(t){return po(t,function(e){return e})||[]},only:function(t){if(!od(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=Ci;B.Fragment=aw;B.Profiler=cw;B.PureComponent=rd;B.StrictMode=lw;B.Suspense=hw;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ww;B.act=tm;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Xg.call(e,l)&&!Zg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ys,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:dw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:uw,_context:t},t.Consumer=t};B.createElement=em;B.createFactory=function(t){var e=em.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:fw,render:t}};B.isValidElement=od;B.lazy=function(t){return{$$typeof:gw,_payload:{_status:-1,_result:t},_init:vw}};B.memo=function(t,e){return{$$typeof:pw,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=jo.transition;jo.transition={};try{t()}finally{jo.transition=e}};B.unstable_act=tm;B.useCallback=function(t,e){return Be.current.useCallback(t,e)};B.useContext=function(t){return Be.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return Be.current.useDeferredValue(t)};B.useEffect=function(t,e){return Be.current.useEffect(t,e)};B.useId=function(){return Be.current.useId()};B.useImperativeHandle=function(t,e,n){return Be.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return Be.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return Be.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return Be.current.useMemo(t,e)};B.useReducer=function(t,e,n){return Be.current.useReducer(t,e,n)};B.useRef=function(t){return Be.current.useRef(t)};B.useState=function(t){return Be.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return Be.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return Be.current.useTransition()};B.version="18.3.1";Kg.exports=B;var A=Kg.exports;const Sw=sw(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ew=A,Cw=Symbol.for("react.element"),Iw=Symbol.for("react.fragment"),Tw=Object.prototype.hasOwnProperty,kw=Ew.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xw={key:!0,ref:!0,__self:!0,__source:!0};function nm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Tw.call(e,r)&&!xw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Cw,type:t,key:s,ref:o,props:i,_owner:kw.current}}Ya.Fragment=Iw;Ya.jsx=nm;Ya.jsxs=nm;Gg.exports=Ya;var u=Gg.exports,Mc={},rm={exports:{}},it={},im={exports:{}},sm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,j){var L=N.length;N.push(j);e:for(;0<L;){var te=L-1>>>1,ue=N[te];if(0<i(ue,j))N[te]=j,N[L]=ue,L=te;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var j=N[0],L=N.pop();if(L!==j){N[0]=L;e:for(var te=0,ue=N.length,Rr=ue>>>1;te<Rr;){var Ht=2*(te+1)-1,Di=N[Ht],$t=Ht+1,Nr=N[$t];if(0>i(Di,L))$t<ue&&0>i(Nr,Di)?(N[te]=Nr,N[$t]=L,te=$t):(N[te]=Di,N[Ht]=L,te=Ht);else if($t<ue&&0>i(Nr,L))N[te]=Nr,N[$t]=L,te=$t;else break e}}return j}function i(N,j){var L=N.sortIndex-j.sortIndex;return L!==0?L:N.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,h=3,g=!1,_=!1,w=!1,I=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=N)r(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function v(N){if(w=!1,y(N),!_)if(n(l)!==null)_=!0,Oi(E);else{var j=n(c);j!==null&&Mi(v,j.startTime-N)}}function E(N,j){_=!1,w&&(w=!1,m(R),R=-1),g=!0;var L=h;try{for(y(j),f=n(l);f!==null&&(!(f.expirationTime>j)||N&&!fe());){var te=f.callback;if(typeof te=="function"){f.callback=null,h=f.priorityLevel;var ue=te(f.expirationTime<=j);j=t.unstable_now(),typeof ue=="function"?f.callback=ue:f===n(l)&&r(l),y(j)}else r(l);f=n(l)}if(f!==null)var Rr=!0;else{var Ht=n(c);Ht!==null&&Mi(v,Ht.startTime-j),Rr=!1}return Rr}finally{f=null,h=L,g=!1}}var S=!1,T=null,R=-1,W=5,O=-1;function fe(){return!(t.unstable_now()-O<W)}function gt(){if(T!==null){var N=t.unstable_now();O=N;var j=!0;try{j=T(!0,N)}finally{j?V():(S=!1,T=null)}}else S=!1}var V;if(typeof p=="function")V=function(){p(gt)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,Re=Pt.port2;Pt.port1.onmessage=gt,V=function(){Re.postMessage(null)}}else V=function(){I(gt,0)};function Oi(N){T=N,S||(S=!0,V())}function Mi(N,j){R=I(function(){N(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Oi(E))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var L=h;h=j;try{return N()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=h;h=N;try{return j()}finally{h=L}},t.unstable_scheduleCallback=function(N,j,L){var te=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?te+L:te):L=te,N){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=L+ue,N={id:d++,callback:j,priorityLevel:N,startTime:L,expirationTime:ue,sortIndex:-1},L>te?(N.sortIndex=L,e(c,N),n(l)===null&&N===n(c)&&(w?(m(R),R=-1):w=!0,Mi(v,L-te))):(N.sortIndex=ue,e(l,N),_||g||(_=!0,Oi(E))),N},t.unstable_shouldYield=fe,t.unstable_wrapCallback=function(N){var j=h;return function(){var L=h;h=j;try{return N.apply(this,arguments)}finally{h=L}}}})(sm);im.exports=sm;var Rw=im.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nw=A,rt=Rw;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var om=new Set,_s={};function Sr(t,e){oi(t,e),oi(t+"Capture",e)}function oi(t,e){for(_s[t]=e,t=0;t<e.length;t++)om.add(e[t])}var sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dc=Object.prototype.hasOwnProperty,Pw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ph={},gh={};function Aw(t){return Dc.call(gh,t)?!0:Dc.call(ph,t)?!1:Pw.test(t)?gh[t]=!0:(ph[t]=!0,!1)}function bw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ow(t,e,n,r){if(e===null||typeof e>"u"||bw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function We(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ke[t]=new We(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ke[e]=new We(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ke[t]=new We(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ke[t]=new We(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ke[t]=new We(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ke[t]=new We(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ke[t]=new We(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ke[t]=new We(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ke[t]=new We(t,5,!1,t.toLowerCase(),null,!1,!1)});var ad=/[\-:]([a-z])/g;function ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ad,ld);ke[e]=new We(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ad,ld);ke[e]=new We(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ad,ld);ke[e]=new We(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ke[t]=new We(t,1,!1,t.toLowerCase(),null,!1,!1)});ke.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ke[t]=new We(t,1,!1,t.toLowerCase(),null,!0,!0)});function cd(t,e,n,r){var i=ke.hasOwnProperty(e)?ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ow(e,n,i,r)&&(n=null),r||i===null?Aw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fn=Nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,go=Symbol.for("react.element"),br=Symbol.for("react.portal"),Or=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),Lc=Symbol.for("react.profiler"),am=Symbol.for("react.provider"),lm=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),jc=Symbol.for("react.suspense"),Fc=Symbol.for("react.suspense_list"),fd=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),cm=Symbol.for("react.offscreen"),mh=Symbol.iterator;function Li(t){return t===null||typeof t!="object"?null:(t=mh&&t[mh]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,Bl;function Yi(t){if(Bl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bl=e&&e[1]||""}return`
`+Bl+t}var Wl=!1;function Vl(t,e){if(!t||Wl)return"";Wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Yi(t):""}function Mw(t){switch(t.tag){case 5:return Yi(t.type);case 16:return Yi("Lazy");case 13:return Yi("Suspense");case 19:return Yi("SuspenseList");case 0:case 2:case 15:return t=Vl(t.type,!1),t;case 11:return t=Vl(t.type.render,!1),t;case 1:return t=Vl(t.type,!0),t;default:return""}}function Uc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Or:return"Fragment";case br:return"Portal";case Lc:return"Profiler";case ud:return"StrictMode";case jc:return"Suspense";case Fc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lm:return(t.displayName||"Context")+".Consumer";case am:return(t._context.displayName||"Context")+".Provider";case dd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fd:return e=t.displayName||null,e!==null?e:Uc(t.type)||"Memo";case mn:e=t._payload,t=t._init;try{return Uc(t(e))}catch{}}return null}function Dw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uc(e);case 8:return e===ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Un(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function um(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lw(t){var e=um(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mo(t){t._valueTracker||(t._valueTracker=Lw(t))}function dm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=um(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Zo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zc(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function yh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Un(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fm(t,e){e=e.checked,e!=null&&cd(t,"checked",e,!1)}function Bc(t,e){fm(t,e);var n=Un(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wc(t,e.type,Un(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _h(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wc(t,e,n){(e!=="number"||Zo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qi=Array.isArray;function Gr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Un(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Vc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Qi(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Un(n)}}function hm(t,e){var n=Un(e.value),r=Un(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var yo,gm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(yo=yo||document.createElement("div"),yo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function vs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jw=["Webkit","ms","Moz","O"];Object.keys(ts).forEach(function(t){jw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ts[e]=ts[t]})});function mm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ts.hasOwnProperty(t)&&ts[t]?(""+e).trim():e+"px"}function ym(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=mm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Fw=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $c(t,e){if(e){if(Fw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Gc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kc=null;function hd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qc=null,Kr=null,qr=null;function Sh(t){if(t=Xs(t)){if(typeof qc!="function")throw Error(k(280));var e=t.stateNode;e&&(e=el(e),qc(t.stateNode,t.type,e))}}function _m(t){Kr?qr?qr.push(t):qr=[t]:Kr=t}function vm(){if(Kr){var t=Kr,e=qr;if(qr=Kr=null,Sh(t),e)for(t=0;t<e.length;t++)Sh(e[t])}}function wm(t,e){return t(e)}function Sm(){}var Hl=!1;function Em(t,e,n){if(Hl)return t(e,n);Hl=!0;try{return wm(t,e,n)}finally{Hl=!1,(Kr!==null||qr!==null)&&(Sm(),vm())}}function ws(t,e){var n=t.stateNode;if(n===null)return null;var r=el(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Yc=!1;if(sn)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){Yc=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{Yc=!1}function Uw(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ns=!1,ea=null,ta=!1,Qc=null,zw={onError:function(t){ns=!0,ea=t}};function Bw(t,e,n,r,i,s,o,a,l){ns=!1,ea=null,Uw.apply(zw,arguments)}function Ww(t,e,n,r,i,s,o,a,l){if(Bw.apply(this,arguments),ns){if(ns){var c=ea;ns=!1,ea=null}else throw Error(k(198));ta||(ta=!0,Qc=c)}}function Er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Eh(t){if(Er(t)!==t)throw Error(k(188))}function Vw(t){var e=t.alternate;if(!e){if(e=Er(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Eh(i),t;if(s===r)return Eh(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Im(t){return t=Vw(t),t!==null?Tm(t):null}function Tm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Tm(t);if(e!==null)return e;t=t.sibling}return null}var km=rt.unstable_scheduleCallback,Ch=rt.unstable_cancelCallback,Hw=rt.unstable_shouldYield,$w=rt.unstable_requestPaint,ce=rt.unstable_now,Gw=rt.unstable_getCurrentPriorityLevel,pd=rt.unstable_ImmediatePriority,xm=rt.unstable_UserBlockingPriority,na=rt.unstable_NormalPriority,Kw=rt.unstable_LowPriority,Rm=rt.unstable_IdlePriority,Qa=null,Lt=null;function qw(t){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(Qa,t,void 0,(t.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Jw,Yw=Math.log,Qw=Math.LN2;function Jw(t){return t>>>=0,t===0?32:31-(Yw(t)/Qw|0)|0}var _o=64,vo=4194304;function Ji(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ra(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ji(a):(s&=o,s!==0&&(r=Ji(s)))}else o=n&~i,o!==0?r=Ji(o):s!==0&&(r=Ji(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Et(e),i=1<<n,r|=t[n],e&=~i;return r}function Xw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Et(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Xw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Jc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nm(){var t=_o;return _o<<=1,!(_o&4194240)&&(_o=64),t}function $l(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Et(e),t[e]=n}function eS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Et(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Et(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var K=0;function Pm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Am,md,bm,Om,Mm,Xc=!1,wo=[],Rn=null,Nn=null,Pn=null,Ss=new Map,Es=new Map,_n=[],tS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ih(t,e){switch(t){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Ss.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Es.delete(e.pointerId)}}function Fi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xs(e),e!==null&&md(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function nS(t,e,n,r,i){switch(e){case"focusin":return Rn=Fi(Rn,t,e,n,r,i),!0;case"dragenter":return Nn=Fi(Nn,t,e,n,r,i),!0;case"mouseover":return Pn=Fi(Pn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ss.set(s,Fi(Ss.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Es.set(s,Fi(Es.get(s)||null,t,e,n,r,i)),!0}return!1}function Dm(t){var e=tr(t.target);if(e!==null){var n=Er(e);if(n!==null){if(e=n.tag,e===13){if(e=Cm(n),e!==null){t.blockedOn=e,Mm(t.priority,function(){bm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kc=r,n.target.dispatchEvent(r),Kc=null}else return e=Xs(n),e!==null&&md(e),t.blockedOn=n,!1;e.shift()}return!0}function Th(t,e,n){Fo(t)&&n.delete(e)}function rS(){Xc=!1,Rn!==null&&Fo(Rn)&&(Rn=null),Nn!==null&&Fo(Nn)&&(Nn=null),Pn!==null&&Fo(Pn)&&(Pn=null),Ss.forEach(Th),Es.forEach(Th)}function Ui(t,e){t.blockedOn===e&&(t.blockedOn=null,Xc||(Xc=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,rS)))}function Cs(t){function e(i){return Ui(i,t)}if(0<wo.length){Ui(wo[0],t);for(var n=1;n<wo.length;n++){var r=wo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rn!==null&&Ui(Rn,t),Nn!==null&&Ui(Nn,t),Pn!==null&&Ui(Pn,t),Ss.forEach(e),Es.forEach(e),n=0;n<_n.length;n++)r=_n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)Dm(n),n.blockedOn===null&&_n.shift()}var Yr=fn.ReactCurrentBatchConfig,ia=!0;function iS(t,e,n,r){var i=K,s=Yr.transition;Yr.transition=null;try{K=1,yd(t,e,n,r)}finally{K=i,Yr.transition=s}}function sS(t,e,n,r){var i=K,s=Yr.transition;Yr.transition=null;try{K=4,yd(t,e,n,r)}finally{K=i,Yr.transition=s}}function yd(t,e,n,r){if(ia){var i=Zc(t,e,n,r);if(i===null)tc(t,e,r,sa,n),Ih(t,r);else if(nS(i,t,e,n,r))r.stopPropagation();else if(Ih(t,r),e&4&&-1<tS.indexOf(t)){for(;i!==null;){var s=Xs(i);if(s!==null&&Am(s),s=Zc(t,e,n,r),s===null&&tc(t,e,r,sa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else tc(t,e,r,null,n)}}var sa=null;function Zc(t,e,n,r){if(sa=null,t=hd(r),t=tr(t),t!==null)if(e=Er(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sa=t,null}function Lm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gw()){case pd:return 1;case xm:return 4;case na:case Kw:return 16;case Rm:return 536870912;default:return 16}default:return 16}}var In=null,_d=null,Uo=null;function jm(){if(Uo)return Uo;var t,e=_d,n=e.length,r,i="value"in In?In.value:In.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Uo=i.slice(t,1<r?1-r:void 0)}function zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function So(){return!0}function kh(){return!1}function st(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?So:kh,this.isPropagationStopped=kh,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),e}var Ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vd=st(Ii),Js=se({},Ii,{view:0,detail:0}),oS=st(Js),Gl,Kl,zi,Ja=se({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zi&&(zi&&t.type==="mousemove"?(Gl=t.screenX-zi.screenX,Kl=t.screenY-zi.screenY):Kl=Gl=0,zi=t),Gl)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),xh=st(Ja),aS=se({},Ja,{dataTransfer:0}),lS=st(aS),cS=se({},Js,{relatedTarget:0}),ql=st(cS),uS=se({},Ii,{animationName:0,elapsedTime:0,pseudoElement:0}),dS=st(uS),fS=se({},Ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hS=st(fS),pS=se({},Ii,{data:0}),Rh=st(pS),gS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _S(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yS[t])?!!e[t]:!1}function wd(){return _S}var vS=se({},Js,{key:function(t){if(t.key){var e=gS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wd,charCode:function(t){return t.type==="keypress"?zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wS=st(vS),SS=se({},Ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nh=st(SS),ES=se({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wd}),CS=st(ES),IS=se({},Ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),TS=st(IS),kS=se({},Ja,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xS=st(kS),RS=[9,13,27,32],Sd=sn&&"CompositionEvent"in window,rs=null;sn&&"documentMode"in document&&(rs=document.documentMode);var NS=sn&&"TextEvent"in window&&!rs,Fm=sn&&(!Sd||rs&&8<rs&&11>=rs),Ph=" ",Ah=!1;function Um(t,e){switch(t){case"keyup":return RS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mr=!1;function PS(t,e){switch(t){case"compositionend":return zm(e);case"keypress":return e.which!==32?null:(Ah=!0,Ph);case"textInput":return t=e.data,t===Ph&&Ah?null:t;default:return null}}function AS(t,e){if(Mr)return t==="compositionend"||!Sd&&Um(t,e)?(t=jm(),Uo=_d=In=null,Mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fm&&e.locale!=="ko"?null:e.data;default:return null}}var bS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bS[t.type]:e==="textarea"}function Bm(t,e,n,r){_m(r),e=oa(e,"onChange"),0<e.length&&(n=new vd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var is=null,Is=null;function OS(t){Xm(t,0)}function Xa(t){var e=jr(t);if(dm(e))return t}function MS(t,e){if(t==="change")return e}var Wm=!1;if(sn){var Yl;if(sn){var Ql="oninput"in document;if(!Ql){var Oh=document.createElement("div");Oh.setAttribute("oninput","return;"),Ql=typeof Oh.oninput=="function"}Yl=Ql}else Yl=!1;Wm=Yl&&(!document.documentMode||9<document.documentMode)}function Mh(){is&&(is.detachEvent("onpropertychange",Vm),Is=is=null)}function Vm(t){if(t.propertyName==="value"&&Xa(Is)){var e=[];Bm(e,Is,t,hd(t)),Em(OS,e)}}function DS(t,e,n){t==="focusin"?(Mh(),is=e,Is=n,is.attachEvent("onpropertychange",Vm)):t==="focusout"&&Mh()}function LS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xa(Is)}function jS(t,e){if(t==="click")return Xa(e)}function FS(t,e){if(t==="input"||t==="change")return Xa(e)}function US(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kt=typeof Object.is=="function"?Object.is:US;function Ts(t,e){if(kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dc.call(e,i)||!kt(t[i],e[i]))return!1}return!0}function Dh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lh(t,e){var n=Dh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dh(n)}}function Hm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $m(){for(var t=window,e=Zo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zo(t.document)}return e}function Ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zS(t){var e=$m(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hm(n.ownerDocument.documentElement,n)){if(r!==null&&Ed(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Lh(n,s);var o=Lh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var BS=sn&&"documentMode"in document&&11>=document.documentMode,Dr=null,eu=null,ss=null,tu=!1;function jh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tu||Dr==null||Dr!==Zo(r)||(r=Dr,"selectionStart"in r&&Ed(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ss&&Ts(ss,r)||(ss=r,r=oa(eu,"onSelect"),0<r.length&&(e=new vd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Dr)))}function Eo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Lr={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},Jl={},Gm={};sn&&(Gm=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Za(t){if(Jl[t])return Jl[t];if(!Lr[t])return t;var e=Lr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gm)return Jl[t]=e[n];return t}var Km=Za("animationend"),qm=Za("animationiteration"),Ym=Za("animationstart"),Qm=Za("transitionend"),Jm=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(t,e){Jm.set(t,e),Sr(e,[t])}for(var Xl=0;Xl<Fh.length;Xl++){var Zl=Fh[Xl],WS=Zl.toLowerCase(),VS=Zl[0].toUpperCase()+Zl.slice(1);Vn(WS,"on"+VS)}Vn(Km,"onAnimationEnd");Vn(qm,"onAnimationIteration");Vn(Ym,"onAnimationStart");Vn("dblclick","onDoubleClick");Vn("focusin","onFocus");Vn("focusout","onBlur");Vn(Qm,"onTransitionEnd");oi("onMouseEnter",["mouseout","mouseover"]);oi("onMouseLeave",["mouseout","mouseover"]);oi("onPointerEnter",["pointerout","pointerover"]);oi("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xi));function Uh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ww(r,e,void 0,t),t.currentTarget=null}function Xm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Uh(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Uh(i,a,c),s=l}}}if(ta)throw t=Qc,ta=!1,Qc=null,t}function Z(t,e){var n=e[ou];n===void 0&&(n=e[ou]=new Set);var r=t+"__bubble";n.has(r)||(Zm(e,t,2,!1),n.add(r))}function ec(t,e,n){var r=0;e&&(r|=4),Zm(n,t,r,e)}var Co="_reactListening"+Math.random().toString(36).slice(2);function ks(t){if(!t[Co]){t[Co]=!0,om.forEach(function(n){n!=="selectionchange"&&(HS.has(n)||ec(n,!1,t),ec(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Co]||(e[Co]=!0,ec("selectionchange",!1,e))}}function Zm(t,e,n,r){switch(Lm(e)){case 1:var i=iS;break;case 4:i=sS;break;default:i=yd}n=i.bind(null,e,n,t),i=void 0,!Yc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function tc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=tr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Em(function(){var c=s,d=hd(n),f=[];e:{var h=Jm.get(t);if(h!==void 0){var g=vd,_=t;switch(t){case"keypress":if(zo(n)===0)break e;case"keydown":case"keyup":g=wS;break;case"focusin":_="focus",g=ql;break;case"focusout":_="blur",g=ql;break;case"beforeblur":case"afterblur":g=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=lS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=CS;break;case Km:case qm:case Ym:g=dS;break;case Qm:g=TS;break;case"scroll":g=oS;break;case"wheel":g=xS;break;case"copy":case"cut":case"paste":g=hS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Nh}var w=(e&4)!==0,I=!w&&t==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var p=c,y;p!==null;){y=p;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,m!==null&&(v=ws(p,m),v!=null&&w.push(xs(p,v,y)))),I)break;p=p.return}0<w.length&&(h=new g(h,_,null,n,d),f.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==Kc&&(_=n.relatedTarget||n.fromElement)&&(tr(_)||_[on]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=c,_=_?tr(_):null,_!==null&&(I=Er(_),_!==I||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=c),g!==_)){if(w=xh,v="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Nh,v="onPointerLeave",m="onPointerEnter",p="pointer"),I=g==null?h:jr(g),y=_==null?h:jr(_),h=new w(v,p+"leave",g,n,d),h.target=I,h.relatedTarget=y,v=null,tr(d)===c&&(w=new w(m,p+"enter",_,n,d),w.target=y,w.relatedTarget=I,v=w),I=v,g&&_)t:{for(w=g,m=_,p=0,y=w;y;y=Pr(y))p++;for(y=0,v=m;v;v=Pr(v))y++;for(;0<p-y;)w=Pr(w),p--;for(;0<y-p;)m=Pr(m),y--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=Pr(w),m=Pr(m)}w=null}else w=null;g!==null&&zh(f,h,g,w,!1),_!==null&&I!==null&&zh(f,I,_,w,!0)}}e:{if(h=c?jr(c):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var E=MS;else if(bh(h))if(Wm)E=FS;else{E=LS;var S=DS}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=jS);if(E&&(E=E(t,c))){Bm(f,E,n,d);break e}S&&S(t,h,c),t==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Wc(h,"number",h.value)}switch(S=c?jr(c):window,t){case"focusin":(bh(S)||S.contentEditable==="true")&&(Dr=S,eu=c,ss=null);break;case"focusout":ss=eu=Dr=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,jh(f,n,d);break;case"selectionchange":if(BS)break;case"keydown":case"keyup":jh(f,n,d)}var T;if(Sd)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Mr?Um(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Fm&&n.locale!=="ko"&&(Mr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Mr&&(T=jm()):(In=d,_d="value"in In?In.value:In.textContent,Mr=!0)),S=oa(c,R),0<S.length&&(R=new Rh(R,t,null,n,d),f.push({event:R,listeners:S}),T?R.data=T:(T=zm(n),T!==null&&(R.data=T)))),(T=NS?PS(t,n):AS(t,n))&&(c=oa(c,"onBeforeInput"),0<c.length&&(d=new Rh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}Xm(f,e)})}function xs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ws(t,n),s!=null&&r.unshift(xs(t,s,i)),s=ws(t,e),s!=null&&r.push(xs(t,s,i))),t=t.return}return r}function Pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=ws(n,s),l!=null&&o.unshift(xs(n,l,a))):i||(l=ws(n,s),l!=null&&o.push(xs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $S=/\r\n?/g,GS=/\u0000|\uFFFD/g;function Bh(t){return(typeof t=="string"?t:""+t).replace($S,`
`).replace(GS,"")}function Io(t,e,n){if(e=Bh(e),Bh(t)!==e&&n)throw Error(k(425))}function aa(){}var nu=null,ru=null;function iu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,KS=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,qS=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(t){return Wh.resolve(null).then(t).catch(YS)}:su;function YS(t){setTimeout(function(){throw t})}function nc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Cs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Cs(e)}function An(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ti=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Ti,Rs="__reactProps$"+Ti,on="__reactContainer$"+Ti,ou="__reactEvents$"+Ti,QS="__reactListeners$"+Ti,JS="__reactHandles$"+Ti;function tr(t){var e=t[Ot];if(e)return e;for(var n=t.parentNode;n;){if(e=n[on]||n[Ot]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vh(t);t!==null;){if(n=t[Ot])return n;t=Vh(t)}return e}t=n,n=t.parentNode}return null}function Xs(t){return t=t[Ot]||t[on],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function el(t){return t[Rs]||null}var au=[],Fr=-1;function Hn(t){return{current:t}}function ee(t){0>Fr||(t.current=au[Fr],au[Fr]=null,Fr--)}function X(t,e){Fr++,au[Fr]=t.current,t.current=e}var zn={},Me=Hn(zn),Ke=Hn(!1),lr=zn;function ai(t,e){var n=t.type.contextTypes;if(!n)return zn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qe(t){return t=t.childContextTypes,t!=null}function la(){ee(Ke),ee(Me)}function Hh(t,e,n){if(Me.current!==zn)throw Error(k(168));X(Me,e),X(Ke,n)}function ey(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,Dw(t)||"Unknown",i));return se({},n,r)}function ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zn,lr=Me.current,X(Me,t),X(Ke,Ke.current),!0}function $h(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=ey(t,e,lr),r.__reactInternalMemoizedMergedChildContext=t,ee(Ke),ee(Me),X(Me,t)):ee(Ke),X(Ke,n)}var qt=null,tl=!1,rc=!1;function ty(t){qt===null?qt=[t]:qt.push(t)}function XS(t){tl=!0,ty(t)}function $n(){if(!rc&&qt!==null){rc=!0;var t=0,e=K;try{var n=qt;for(K=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qt=null,tl=!1}catch(i){throw qt!==null&&(qt=qt.slice(t+1)),km(pd,$n),i}finally{K=e,rc=!1}}return null}var Ur=[],zr=0,ua=null,da=0,at=[],lt=0,cr=null,Yt=1,Qt="";function Jn(t,e){Ur[zr++]=da,Ur[zr++]=ua,ua=t,da=e}function ny(t,e,n){at[lt++]=Yt,at[lt++]=Qt,at[lt++]=cr,cr=t;var r=Yt;t=Qt;var i=32-Et(r)-1;r&=~(1<<i),n+=1;var s=32-Et(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-Et(e)+i|n<<i|r,Qt=s+t}else Yt=1<<s|n<<i|r,Qt=t}function Cd(t){t.return!==null&&(Jn(t,1),ny(t,1,0))}function Id(t){for(;t===ua;)ua=Ur[--zr],Ur[zr]=null,da=Ur[--zr],Ur[zr]=null;for(;t===cr;)cr=at[--lt],at[lt]=null,Qt=at[--lt],at[lt]=null,Yt=at[--lt],at[lt]=null}var tt=null,et=null,ne=!1,vt=null;function ry(t,e){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tt=t,et=An(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tt=t,et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=cr!==null?{id:Yt,overflow:Qt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tt=t,et=null,!0):!1;default:return!1}}function lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function cu(t){if(ne){var e=et;if(e){var n=e;if(!Gh(t,e)){if(lu(t))throw Error(k(418));e=An(n.nextSibling);var r=tt;e&&Gh(t,e)?ry(r,n):(t.flags=t.flags&-4097|2,ne=!1,tt=t)}}else{if(lu(t))throw Error(k(418));t.flags=t.flags&-4097|2,ne=!1,tt=t}}}function Kh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tt=t}function To(t){if(t!==tt)return!1;if(!ne)return Kh(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!iu(t.type,t.memoizedProps)),e&&(e=et)){if(lu(t))throw iy(),Error(k(418));for(;e;)ry(t,e),e=An(e.nextSibling)}if(Kh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){et=An(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}et=null}}else et=tt?An(t.stateNode.nextSibling):null;return!0}function iy(){for(var t=et;t;)t=An(t.nextSibling)}function li(){et=tt=null,ne=!1}function Td(t){vt===null?vt=[t]:vt.push(t)}var ZS=fn.ReactCurrentBatchConfig;function Bi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function ko(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qh(t){var e=t._init;return e(t._payload)}function sy(t){function e(m,p){if(t){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Dn(m,p),m.index=0,m.sibling=null,m}function s(m,p,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,v){return p===null||p.tag!==6?(p=uc(y,m.mode,v),p.return=m,p):(p=i(p,y),p.return=m,p)}function l(m,p,y,v){var E=y.type;return E===Or?d(m,p,y.props.children,v,y.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mn&&qh(E)===p.type)?(v=i(p,y.props),v.ref=Bi(m,p,y),v.return=m,v):(v=Ko(y.type,y.key,y.props,null,m.mode,v),v.ref=Bi(m,p,y),v.return=m,v)}function c(m,p,y,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=dc(y,m.mode,v),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function d(m,p,y,v,E){return p===null||p.tag!==7?(p=ar(y,m.mode,v,E),p.return=m,p):(p=i(p,y),p.return=m,p)}function f(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=uc(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case go:return y=Ko(p.type,p.key,p.props,null,m.mode,y),y.ref=Bi(m,null,p),y.return=m,y;case br:return p=dc(p,m.mode,y),p.return=m,p;case mn:var v=p._init;return f(m,v(p._payload),y)}if(Qi(p)||Li(p))return p=ar(p,m.mode,y,null),p.return=m,p;ko(m,p)}return null}function h(m,p,y,v){var E=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:a(m,p,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case go:return y.key===E?l(m,p,y,v):null;case br:return y.key===E?c(m,p,y,v):null;case mn:return E=y._init,h(m,p,E(y._payload),v)}if(Qi(y)||Li(y))return E!==null?null:d(m,p,y,v,null);ko(m,y)}return null}function g(m,p,y,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(y)||null,a(p,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case go:return m=m.get(v.key===null?y:v.key)||null,l(p,m,v,E);case br:return m=m.get(v.key===null?y:v.key)||null,c(p,m,v,E);case mn:var S=v._init;return g(m,p,y,S(v._payload),E)}if(Qi(v)||Li(v))return m=m.get(y)||null,d(p,m,v,E,null);ko(p,v)}return null}function _(m,p,y,v){for(var E=null,S=null,T=p,R=p=0,W=null;T!==null&&R<y.length;R++){T.index>R?(W=T,T=null):W=T.sibling;var O=h(m,T,y[R],v);if(O===null){T===null&&(T=W);break}t&&T&&O.alternate===null&&e(m,T),p=s(O,p,R),S===null?E=O:S.sibling=O,S=O,T=W}if(R===y.length)return n(m,T),ne&&Jn(m,R),E;if(T===null){for(;R<y.length;R++)T=f(m,y[R],v),T!==null&&(p=s(T,p,R),S===null?E=T:S.sibling=T,S=T);return ne&&Jn(m,R),E}for(T=r(m,T);R<y.length;R++)W=g(T,m,R,y[R],v),W!==null&&(t&&W.alternate!==null&&T.delete(W.key===null?R:W.key),p=s(W,p,R),S===null?E=W:S.sibling=W,S=W);return t&&T.forEach(function(fe){return e(m,fe)}),ne&&Jn(m,R),E}function w(m,p,y,v){var E=Li(y);if(typeof E!="function")throw Error(k(150));if(y=E.call(y),y==null)throw Error(k(151));for(var S=E=null,T=p,R=p=0,W=null,O=y.next();T!==null&&!O.done;R++,O=y.next()){T.index>R?(W=T,T=null):W=T.sibling;var fe=h(m,T,O.value,v);if(fe===null){T===null&&(T=W);break}t&&T&&fe.alternate===null&&e(m,T),p=s(fe,p,R),S===null?E=fe:S.sibling=fe,S=fe,T=W}if(O.done)return n(m,T),ne&&Jn(m,R),E;if(T===null){for(;!O.done;R++,O=y.next())O=f(m,O.value,v),O!==null&&(p=s(O,p,R),S===null?E=O:S.sibling=O,S=O);return ne&&Jn(m,R),E}for(T=r(m,T);!O.done;R++,O=y.next())O=g(T,m,R,O.value,v),O!==null&&(t&&O.alternate!==null&&T.delete(O.key===null?R:O.key),p=s(O,p,R),S===null?E=O:S.sibling=O,S=O);return t&&T.forEach(function(gt){return e(m,gt)}),ne&&Jn(m,R),E}function I(m,p,y,v){if(typeof y=="object"&&y!==null&&y.type===Or&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case go:e:{for(var E=y.key,S=p;S!==null;){if(S.key===E){if(E=y.type,E===Or){if(S.tag===7){n(m,S.sibling),p=i(S,y.props.children),p.return=m,m=p;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mn&&qh(E)===S.type){n(m,S.sibling),p=i(S,y.props),p.ref=Bi(m,S,y),p.return=m,m=p;break e}n(m,S);break}else e(m,S);S=S.sibling}y.type===Or?(p=ar(y.props.children,m.mode,v,y.key),p.return=m,m=p):(v=Ko(y.type,y.key,y.props,null,m.mode,v),v.ref=Bi(m,p,y),v.return=m,m=v)}return o(m);case br:e:{for(S=y.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=dc(y,m.mode,v),p.return=m,m=p}return o(m);case mn:return S=y._init,I(m,p,S(y._payload),v)}if(Qi(y))return _(m,p,y,v);if(Li(y))return w(m,p,y,v);ko(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=uc(y,m.mode,v),p.return=m,m=p),o(m)):n(m,p)}return I}var ci=sy(!0),oy=sy(!1),fa=Hn(null),ha=null,Br=null,kd=null;function xd(){kd=Br=ha=null}function Rd(t){var e=fa.current;ee(fa),t._currentValue=e}function uu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qr(t,e){ha=t,kd=Br=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(He=!0),t.firstContext=null)}function ht(t){var e=t._currentValue;if(kd!==t)if(t={context:t,memoizedValue:e,next:null},Br===null){if(ha===null)throw Error(k(308));Br=t,ha.dependencies={lanes:0,firstContext:t}}else Br=Br.next=t;return e}var nr=null;function Nd(t){nr===null?nr=[t]:nr.push(t)}function ay(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Nd(e)):(n.next=i.next,i.next=n),e.interleaved=n,an(t,r)}function an(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yn=!1;function Pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ly(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function bn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,an(t,n)}return i=r.interleaved,i===null?(e.next=e,Nd(r)):(e.next=i.next,i.next=e),r.interleaved=e,an(t,n)}function Bo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gd(t,n)}}function Yh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pa(t,e,n,r){var i=t.updateQueue;yn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,w=a;switch(h=e,g=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){f=_.call(g,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,h=typeof _=="function"?_.call(g,f,h):_,h==null)break e;f=se({},f,h);break e;case 2:yn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=f):d=d.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);dr|=o,t.lanes=o,t.memoizedState=f}}function Qh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Zs={},jt=Hn(Zs),Ns=Hn(Zs),Ps=Hn(Zs);function rr(t){if(t===Zs)throw Error(k(174));return t}function Ad(t,e){switch(X(Ps,e),X(Ns,t),X(jt,Zs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hc(e,t)}ee(jt),X(jt,e)}function ui(){ee(jt),ee(Ns),ee(Ps)}function cy(t){rr(Ps.current);var e=rr(jt.current),n=Hc(e,t.type);e!==n&&(X(Ns,t),X(jt,n))}function bd(t){Ns.current===t&&(ee(jt),ee(Ns))}var re=Hn(0);function ga(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ic=[];function Od(){for(var t=0;t<ic.length;t++)ic[t]._workInProgressVersionPrimary=null;ic.length=0}var Wo=fn.ReactCurrentDispatcher,sc=fn.ReactCurrentBatchConfig,ur=0,ie=null,he=null,ye=null,ma=!1,os=!1,As=0,eE=0;function Ne(){throw Error(k(321))}function Md(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kt(t[n],e[n]))return!1;return!0}function Dd(t,e,n,r,i,s){if(ur=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wo.current=t===null||t.memoizedState===null?iE:sE,t=n(r,i),os){s=0;do{if(os=!1,As=0,25<=s)throw Error(k(301));s+=1,ye=he=null,e.updateQueue=null,Wo.current=oE,t=n(r,i)}while(os)}if(Wo.current=ya,e=he!==null&&he.next!==null,ur=0,ye=he=ie=null,ma=!1,e)throw Error(k(300));return t}function Ld(){var t=As!==0;return As=0,t}function bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?ie.memoizedState=ye=t:ye=ye.next=t,ye}function pt(){if(he===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=he.next;var e=ye===null?ie.memoizedState:ye.next;if(e!==null)ye=e,he=t;else{if(t===null)throw Error(k(310));he=t,t={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ye===null?ie.memoizedState=ye=t:ye=ye.next=t}return ye}function bs(t,e){return typeof e=="function"?e(t):e}function oc(t){var e=pt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=he,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((ur&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,ie.lanes|=d,dr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,kt(r,e.memoizedState)||(He=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ie.lanes|=s,dr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ac(t){var e=pt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kt(s,e.memoizedState)||(He=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function uy(){}function dy(t,e){var n=ie,r=pt(),i=e(),s=!kt(r.memoizedState,i);if(s&&(r.memoizedState=i,He=!0),r=r.queue,jd(py.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,Os(9,hy.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(k(349));ur&30||fy(n,e,i)}return i}function fy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function hy(t,e,n,r){e.value=n,e.getSnapshot=r,gy(e)&&my(t)}function py(t,e,n){return n(function(){gy(e)&&my(t)})}function gy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kt(t,n)}catch{return!0}}function my(t){var e=an(t,1);e!==null&&Ct(e,t,1,-1)}function Jh(t){var e=bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:t},e.queue=t,t=t.dispatch=rE.bind(null,ie,t),[e.memoizedState,t]}function Os(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yy(){return pt().memoizedState}function Vo(t,e,n,r){var i=bt();ie.flags|=t,i.memoizedState=Os(1|e,n,void 0,r===void 0?null:r)}function nl(t,e,n,r){var i=pt();r=r===void 0?null:r;var s=void 0;if(he!==null){var o=he.memoizedState;if(s=o.destroy,r!==null&&Md(r,o.deps)){i.memoizedState=Os(e,n,s,r);return}}ie.flags|=t,i.memoizedState=Os(1|e,n,s,r)}function Xh(t,e){return Vo(8390656,8,t,e)}function jd(t,e){return nl(2048,8,t,e)}function _y(t,e){return nl(4,2,t,e)}function vy(t,e){return nl(4,4,t,e)}function wy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sy(t,e,n){return n=n!=null?n.concat([t]):null,nl(4,4,wy.bind(null,e,t),n)}function Fd(){}function Ey(t,e){var n=pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Md(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Cy(t,e){var n=pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Md(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Iy(t,e,n){return ur&21?(kt(n,e)||(n=Nm(),ie.lanes|=n,dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,He=!0),t.memoizedState=n)}function tE(t,e){var n=K;K=n!==0&&4>n?n:4,t(!0);var r=sc.transition;sc.transition={};try{t(!1),e()}finally{K=n,sc.transition=r}}function Ty(){return pt().memoizedState}function nE(t,e,n){var r=Mn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ky(t))xy(e,n);else if(n=ay(t,e,n,r),n!==null){var i=Fe();Ct(n,t,r,i),Ry(n,e,r)}}function rE(t,e,n){var r=Mn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ky(t))xy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kt(a,o)){var l=e.interleaved;l===null?(i.next=i,Nd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ay(t,e,i,r),n!==null&&(i=Fe(),Ct(n,t,r,i),Ry(n,e,r))}}function ky(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function xy(t,e){os=ma=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ry(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gd(t,n)}}var ya={readContext:ht,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},iE={readContext:ht,useCallback:function(t,e){return bt().memoizedState=[t,e===void 0?null:e],t},useContext:ht,useEffect:Xh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Vo(4194308,4,wy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Vo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Vo(4,2,t,e)},useMemo:function(t,e){var n=bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nE.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var e=bt();return t={current:t},e.memoizedState=t},useState:Jh,useDebugValue:Fd,useDeferredValue:function(t){return bt().memoizedState=t},useTransition:function(){var t=Jh(!1),e=t[0];return t=tE.bind(null,t[1]),bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ie,i=bt();if(ne){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Se===null)throw Error(k(349));ur&30||fy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xh(py.bind(null,r,s,t),[t]),r.flags|=2048,Os(9,hy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=bt(),e=Se.identifierPrefix;if(ne){var n=Qt,r=Yt;n=(r&~(1<<32-Et(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=As++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sE={readContext:ht,useCallback:Ey,useContext:ht,useEffect:jd,useImperativeHandle:Sy,useInsertionEffect:_y,useLayoutEffect:vy,useMemo:Cy,useReducer:oc,useRef:yy,useState:function(){return oc(bs)},useDebugValue:Fd,useDeferredValue:function(t){var e=pt();return Iy(e,he.memoizedState,t)},useTransition:function(){var t=oc(bs)[0],e=pt().memoizedState;return[t,e]},useMutableSource:uy,useSyncExternalStore:dy,useId:Ty,unstable_isNewReconciler:!1},oE={readContext:ht,useCallback:Ey,useContext:ht,useEffect:jd,useImperativeHandle:Sy,useInsertionEffect:_y,useLayoutEffect:vy,useMemo:Cy,useReducer:ac,useRef:yy,useState:function(){return ac(bs)},useDebugValue:Fd,useDeferredValue:function(t){var e=pt();return he===null?e.memoizedState=t:Iy(e,he.memoizedState,t)},useTransition:function(){var t=ac(bs)[0],e=pt().memoizedState;return[t,e]},useMutableSource:uy,useSyncExternalStore:dy,useId:Ty,unstable_isNewReconciler:!1};function yt(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function du(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rl={isMounted:function(t){return(t=t._reactInternals)?Er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Fe(),i=Mn(t),s=tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=bn(t,s,i),e!==null&&(Ct(e,t,i,r),Bo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Fe(),i=Mn(t),s=tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=bn(t,s,i),e!==null&&(Ct(e,t,i,r),Bo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Fe(),r=Mn(t),i=tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=bn(t,i,r),e!==null&&(Ct(e,t,r,n),Bo(e,t,r))}};function Zh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ts(n,r)||!Ts(i,s):!0}function Ny(t,e,n){var r=!1,i=zn,s=e.contextType;return typeof s=="object"&&s!==null?s=ht(s):(i=qe(e)?lr:Me.current,r=e.contextTypes,s=(r=r!=null)?ai(t,i):zn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ep(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&rl.enqueueReplaceState(e,e.state,null)}function fu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Pd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ht(s):(s=qe(e)?lr:Me.current,i.context=ai(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(du(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&rl.enqueueReplaceState(i,i.state,null),pa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function di(t,e){try{var n="",r=e;do n+=Mw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aE=typeof WeakMap=="function"?WeakMap:Map;function Py(t,e,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){va||(va=!0,Cu=r),hu(t,e)},n}function Ay(t,e,n){n=tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){hu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){hu(t,e),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=SE.bind(null,t,e,n),e.then(t,t))}function np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function rp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=tn(-1,1),e.tag=2,bn(n,e,1))),n.lanes|=1),t)}var lE=fn.ReactCurrentOwner,He=!1;function Le(t,e,n,r){e.child=t===null?oy(e,null,n,r):ci(e,t.child,n,r)}function ip(t,e,n,r,i){n=n.render;var s=e.ref;return Qr(e,i),r=Dd(t,e,n,r,s,i),n=Ld(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ln(t,e,i)):(ne&&n&&Cd(e),e.flags|=1,Le(t,e,r,i),e.child)}function sp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Gd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,by(t,e,s,r,i)):(t=Ko(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ts,n(o,r)&&t.ref===e.ref)return ln(t,e,i)}return e.flags|=1,t=Dn(s,r),t.ref=e.ref,t.return=e,e.child=t}function by(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ts(s,r)&&t.ref===e.ref)if(He=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(He=!0);else return e.lanes=t.lanes,ln(t,e,i)}return pu(t,e,n,r,i)}function Oy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Vr,Xe),Xe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(Vr,Xe),Xe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Vr,Xe),Xe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Vr,Xe),Xe|=r;return Le(t,e,i,n),e.child}function My(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pu(t,e,n,r,i){var s=qe(n)?lr:Me.current;return s=ai(e,s),Qr(e,i),n=Dd(t,e,n,r,s,i),r=Ld(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,ln(t,e,i)):(ne&&r&&Cd(e),e.flags|=1,Le(t,e,n,i),e.child)}function op(t,e,n,r,i){if(qe(n)){var s=!0;ca(e)}else s=!1;if(Qr(e,i),e.stateNode===null)Ho(t,e),Ny(e,n,r),fu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ht(c):(c=qe(n)?lr:Me.current,c=ai(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&ep(e,o,r,c),yn=!1;var h=e.memoizedState;o.state=h,pa(e,r,o,i),l=e.memoizedState,a!==r||h!==l||Ke.current||yn?(typeof d=="function"&&(du(e,n,d,r),l=e.memoizedState),(a=yn||Zh(e,n,a,r,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ly(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:yt(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ht(l):(l=qe(n)?lr:Me.current,l=ai(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&ep(e,o,r,l),yn=!1,h=e.memoizedState,o.state=h,pa(e,r,o,i);var _=e.memoizedState;a!==f||h!==_||Ke.current||yn?(typeof g=="function"&&(du(e,n,g,r),_=e.memoizedState),(c=yn||Zh(e,n,c,r,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return gu(t,e,n,r,s,i)}function gu(t,e,n,r,i,s){My(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$h(e,n,!1),ln(t,e,s);r=e.stateNode,lE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ci(e,t.child,null,s),e.child=ci(e,null,a,s)):Le(t,e,a,s),e.memoizedState=r.state,i&&$h(e,n,!0),e.child}function Dy(t){var e=t.stateNode;e.pendingContext?Hh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Hh(t,e.context,!1),Ad(t,e.containerInfo)}function ap(t,e,n,r,i){return li(),Td(i),e.flags|=256,Le(t,e,n,r),e.child}var mu={dehydrated:null,treeContext:null,retryLane:0};function yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ly(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(re,i&1),t===null)return cu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ol(o,r,0,null),t=ar(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=yu(n),e.memoizedState=mu,t):Ud(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return cE(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Dn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Dn(a,s):(s=ar(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?yu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mu,r}return s=t.child,t=s.sibling,r=Dn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ud(t,e){return e=ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xo(t,e,n,r){return r!==null&&Td(r),ci(e,t.child,null,n),t=Ud(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=lc(Error(k(422))),xo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ol({mode:"visible",children:r.children},i,0,null),s=ar(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ci(e,t.child,null,o),e.child.memoizedState=yu(o),e.memoizedState=mu,s);if(!(e.mode&1))return xo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=lc(s,r,void 0),xo(t,e,o,r)}if(a=(o&t.childLanes)!==0,He||a){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,an(t,i),Ct(r,t,i,-1))}return $d(),r=lc(Error(k(421))),xo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=EE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,et=An(i.nextSibling),tt=e,ne=!0,vt=null,t!==null&&(at[lt++]=Yt,at[lt++]=Qt,at[lt++]=cr,Yt=t.id,Qt=t.overflow,cr=e),e=Ud(e,r.children),e.flags|=4096,e)}function lp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),uu(t.return,e,n)}function cc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Le(t,e,r.children,n),r=re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lp(t,n,e);else if(t.tag===19)lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ga(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),cc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ga(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}cc(e,!0,n,null,s);break;case"together":cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ho(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Dn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uE(t,e,n){switch(e.tag){case 3:Dy(e),li();break;case 5:cy(e);break;case 1:qe(e.type)&&ca(e);break;case 4:Ad(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(fa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),e.flags|=128,null):n&e.child.childLanes?Ly(t,e,n):(X(re,re.current&1),t=ln(t,e,n),t!==null?t.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return jy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return e.lanes=0,Oy(t,e,n)}return ln(t,e,n)}var Fy,_u,Uy,zy;Fy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_u=function(){};Uy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,rr(jt.current);var s=null;switch(n){case"input":i=zc(t,i),r=zc(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=Vc(t,i),r=Vc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=aa)}$c(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_s.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_s.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Z("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};zy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Wi(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dE(t,e,n){var r=e.pendingProps;switch(Id(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return qe(e.type)&&la(),Pe(e),null;case 3:return r=e.stateNode,ui(),ee(Ke),ee(Me),Od(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(To(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vt!==null&&(ku(vt),vt=null))),_u(t,e),Pe(e),null;case 5:bd(e);var i=rr(Ps.current);if(n=e.type,t!==null&&e.stateNode!=null)Uy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Pe(e),null}if(t=rr(jt.current),To(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ot]=e,r[Rs]=s,t=(e.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<Xi.length;i++)Z(Xi[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":yh(r,s),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Z("invalid",r);break;case"textarea":vh(r,s),Z("invalid",r)}$c(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Io(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Io(r.textContent,a,t),i=["children",""+a]):_s.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Z("scroll",r)}switch(n){case"input":mo(r),_h(r,s,!0);break;case"textarea":mo(r),wh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=aa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ot]=e,t[Rs]=r,Fy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gc(n,r),n){case"dialog":Z("cancel",t),Z("close",t),i=r;break;case"iframe":case"object":case"embed":Z("load",t),i=r;break;case"video":case"audio":for(i=0;i<Xi.length;i++)Z(Xi[i],t);i=r;break;case"source":Z("error",t),i=r;break;case"img":case"image":case"link":Z("error",t),Z("load",t),i=r;break;case"details":Z("toggle",t),i=r;break;case"input":yh(t,r),i=zc(t,r),Z("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),Z("invalid",t);break;case"textarea":vh(t,r),i=Vc(t,r),Z("invalid",t);break;default:i=r}$c(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ym(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&vs(t,l):typeof l=="number"&&vs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_s.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Z("scroll",t):l!=null&&cd(t,s,l,o))}switch(n){case"input":mo(t),_h(t,r,!1);break;case"textarea":mo(t),wh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Un(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=aa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pe(e),null;case 6:if(t&&e.stateNode!=null)zy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=rr(Ps.current),rr(jt.current),To(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ot]=e,(s=r.nodeValue!==n)&&(t=tt,t!==null))switch(t.tag){case 3:Io(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Io(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=e,e.stateNode=r}return Pe(e),null;case 13:if(ee(re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&et!==null&&e.mode&1&&!(e.flags&128))iy(),li(),e.flags|=98560,s=!1;else if(s=To(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Ot]=e}else li(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pe(e),s=!1}else vt!==null&&(ku(vt),vt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||re.current&1?pe===0&&(pe=3):$d())),e.updateQueue!==null&&(e.flags|=4),Pe(e),null);case 4:return ui(),_u(t,e),t===null&&ks(e.stateNode.containerInfo),Pe(e),null;case 10:return Rd(e.type._context),Pe(e),null;case 17:return qe(e.type)&&la(),Pe(e),null;case 19:if(ee(re),s=e.memoizedState,s===null)return Pe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Wi(s,!1);else{if(pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ga(t),o!==null){for(e.flags|=128,Wi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(re,re.current&1|2),e.child}t=t.sibling}s.tail!==null&&ce()>fi&&(e.flags|=128,r=!0,Wi(s,!1),e.lanes=4194304)}else{if(!r)if(t=ga(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Pe(e),null}else 2*ce()-s.renderingStartTime>fi&&n!==1073741824&&(e.flags|=128,r=!0,Wi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ce(),e.sibling=null,n=re.current,X(re,r?n&1|2:n&1),e):(Pe(e),null);case 22:case 23:return Hd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xe&1073741824&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function fE(t,e){switch(Id(e),e.tag){case 1:return qe(e.type)&&la(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ui(),ee(Ke),ee(Me),Od(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bd(e),null;case 13:if(ee(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));li()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ee(re),null;case 4:return ui(),null;case 10:return Rd(e.type._context),null;case 22:case 23:return Hd(),null;case 24:return null;default:return null}}var Ro=!1,be=!1,hE=typeof WeakSet=="function"?WeakSet:Set,P=null;function Wr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(t,e,r)}else n.current=null}function vu(t,e,n){try{n()}catch(r){oe(t,e,r)}}var cp=!1;function pE(t,e){if(nu=ia,t=$m(),Ed(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===t)break t;if(h===n&&++c===i&&(a=o),h===s&&++d===r&&(l=o),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ru={focusedElem:t,selectionRange:n},ia=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,I=_.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:yt(e.type,w),I);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){oe(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return _=cp,cp=!1,_}function as(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vu(e,n,s)}i=i.next}while(i!==r)}}function il(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function By(t){var e=t.alternate;e!==null&&(t.alternate=null,By(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ot],delete e[Rs],delete e[ou],delete e[QS],delete e[JS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Wy(t){return t.tag===5||t.tag===3||t.tag===4}function up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Wy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Su(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=aa));else if(r!==4&&(t=t.child,t!==null))for(Su(t,e,n),t=t.sibling;t!==null;)Su(t,e,n),t=t.sibling}function Eu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Eu(t,e,n),t=t.sibling;t!==null;)Eu(t,e,n),t=t.sibling}var Ee=null,_t=!1;function pn(t,e,n){for(n=n.child;n!==null;)Vy(t,e,n),n=n.sibling}function Vy(t,e,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(Qa,n)}catch{}switch(n.tag){case 5:be||Wr(n,e);case 6:var r=Ee,i=_t;Ee=null,pn(t,e,n),Ee=r,_t=i,Ee!==null&&(_t?(t=Ee,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(_t?(t=Ee,n=n.stateNode,t.nodeType===8?nc(t.parentNode,n):t.nodeType===1&&nc(t,n),Cs(t)):nc(Ee,n.stateNode));break;case 4:r=Ee,i=_t,Ee=n.stateNode.containerInfo,_t=!0,pn(t,e,n),Ee=r,_t=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vu(n,e,o),i=i.next}while(i!==r)}pn(t,e,n);break;case 1:if(!be&&(Wr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,e,a)}pn(t,e,n);break;case 21:pn(t,e,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,pn(t,e,n),be=r):pn(t,e,n);break;default:pn(t,e,n)}}function dp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hE),e.forEach(function(r){var i=CE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ee=a.stateNode,_t=!1;break e;case 3:Ee=a.stateNode.containerInfo,_t=!0;break e;case 4:Ee=a.stateNode.containerInfo,_t=!0;break e}a=a.return}if(Ee===null)throw Error(k(160));Vy(s,o,i),Ee=null,_t=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){oe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hy(e,t),e=e.sibling}function Hy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mt(e,t),At(t),r&4){try{as(3,t,t.return),il(3,t)}catch(w){oe(t,t.return,w)}try{as(5,t,t.return)}catch(w){oe(t,t.return,w)}}break;case 1:mt(e,t),At(t),r&512&&n!==null&&Wr(n,n.return);break;case 5:if(mt(e,t),At(t),r&512&&n!==null&&Wr(n,n.return),t.flags&32){var i=t.stateNode;try{vs(i,"")}catch(w){oe(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&fm(i,s),Gc(a,o);var c=Gc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?ym(i,f):d==="dangerouslySetInnerHTML"?gm(i,f):d==="children"?vs(i,f):cd(i,d,f,c)}switch(a){case"input":Bc(i,s);break;case"textarea":hm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Gr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Gr(i,!!s.multiple,s.defaultValue,!0):Gr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Rs]=s}catch(w){oe(t,t.return,w)}}break;case 6:if(mt(e,t),At(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){oe(t,t.return,w)}}break;case 3:if(mt(e,t),At(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Cs(e.containerInfo)}catch(w){oe(t,t.return,w)}break;case 4:mt(e,t),At(t);break;case 13:mt(e,t),At(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wd=ce())),r&4&&dp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(be=(c=be)||d,mt(e,t),be=c):mt(e,t),At(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(P=t,d=t.child;d!==null;){for(f=P=d;P!==null;){switch(h=P,g=h.child,h.tag){case 0:case 11:case 14:case 15:as(4,h,h.return);break;case 1:Wr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){oe(r,n,w)}}break;case 5:Wr(h,h.return);break;case 22:if(h.memoizedState!==null){hp(f);continue}}g!==null?(g.return=h,P=g):hp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=mm("display",o))}catch(w){oe(t,t.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){oe(t,t.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:mt(e,t),At(t),r&4&&dp(t);break;case 21:break;default:mt(e,t),At(t)}}function At(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Wy(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(vs(i,""),r.flags&=-33);var s=up(t);Eu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=up(t);Su(t,a,o);break;default:throw Error(k(161))}}catch(l){oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gE(t,e,n){P=t,$y(t)}function $y(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ro;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||be;a=Ro;var c=be;if(Ro=o,(be=l)&&!c)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?pp(i):l!==null?(l.return=o,P=l):pp(i);for(;s!==null;)P=s,$y(s),s=s.sibling;P=i,Ro=a,be=c}fp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):fp(t)}}function fp(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:be||il(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Cs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}be||e.flags&512&&wu(e)}catch(h){oe(e,e.return,h)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function hp(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function pp(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{il(4,e)}catch(l){oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){oe(e,i,l)}}var s=e.return;try{wu(e)}catch(l){oe(e,s,l)}break;case 5:var o=e.return;try{wu(e)}catch(l){oe(e,o,l)}}}catch(l){oe(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var mE=Math.ceil,_a=fn.ReactCurrentDispatcher,zd=fn.ReactCurrentOwner,dt=fn.ReactCurrentBatchConfig,H=0,Se=null,de=null,Te=0,Xe=0,Vr=Hn(0),pe=0,Ms=null,dr=0,sl=0,Bd=0,ls=null,Ve=null,Wd=0,fi=1/0,Kt=null,va=!1,Cu=null,On=null,No=!1,Tn=null,wa=0,cs=0,Iu=null,$o=-1,Go=0;function Fe(){return H&6?ce():$o!==-1?$o:$o=ce()}function Mn(t){return t.mode&1?H&2&&Te!==0?Te&-Te:ZS.transition!==null?(Go===0&&(Go=Nm()),Go):(t=K,t!==0||(t=window.event,t=t===void 0?16:Lm(t.type)),t):1}function Ct(t,e,n,r){if(50<cs)throw cs=0,Iu=null,Error(k(185));Qs(t,n,r),(!(H&2)||t!==Se)&&(t===Se&&(!(H&2)&&(sl|=n),pe===4&&vn(t,Te)),Ye(t,r),n===1&&H===0&&!(e.mode&1)&&(fi=ce()+500,tl&&$n()))}function Ye(t,e){var n=t.callbackNode;Zw(t,e);var r=ra(t,t===Se?Te:0);if(r===0)n!==null&&Ch(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ch(n),e===1)t.tag===0?XS(gp.bind(null,t)):ty(gp.bind(null,t)),qS(function(){!(H&6)&&$n()}),n=null;else{switch(Pm(r)){case 1:n=pd;break;case 4:n=xm;break;case 16:n=na;break;case 536870912:n=Rm;break;default:n=na}n=Zy(n,Gy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Gy(t,e){if($o=-1,Go=0,H&6)throw Error(k(327));var n=t.callbackNode;if(Jr()&&t.callbackNode!==n)return null;var r=ra(t,t===Se?Te:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sa(t,r);else{e=r;var i=H;H|=2;var s=qy();(Se!==t||Te!==e)&&(Kt=null,fi=ce()+500,or(t,e));do try{vE();break}catch(a){Ky(t,a)}while(!0);xd(),_a.current=s,H=i,de!==null?e=0:(Se=null,Te=0,e=pe)}if(e!==0){if(e===2&&(i=Jc(t),i!==0&&(r=i,e=Tu(t,i))),e===1)throw n=Ms,or(t,0),vn(t,r),Ye(t,ce()),n;if(e===6)vn(t,r);else{if(i=t.current.alternate,!(r&30)&&!yE(i)&&(e=Sa(t,r),e===2&&(s=Jc(t),s!==0&&(r=s,e=Tu(t,s))),e===1))throw n=Ms,or(t,0),vn(t,r),Ye(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Xn(t,Ve,Kt);break;case 3:if(vn(t,r),(r&130023424)===r&&(e=Wd+500-ce(),10<e)){if(ra(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Fe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=su(Xn.bind(null,t,Ve,Kt),e);break}Xn(t,Ve,Kt);break;case 4:if(vn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Et(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mE(r/1960))-r,10<r){t.timeoutHandle=su(Xn.bind(null,t,Ve,Kt),r);break}Xn(t,Ve,Kt);break;case 5:Xn(t,Ve,Kt);break;default:throw Error(k(329))}}}return Ye(t,ce()),t.callbackNode===n?Gy.bind(null,t):null}function Tu(t,e){var n=ls;return t.current.memoizedState.isDehydrated&&(or(t,e).flags|=256),t=Sa(t,e),t!==2&&(e=Ve,Ve=n,e!==null&&ku(e)),t}function ku(t){Ve===null?Ve=t:Ve.push.apply(Ve,t)}function yE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vn(t,e){for(e&=~Bd,e&=~sl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Et(e),r=1<<n;t[n]=-1,e&=~r}}function gp(t){if(H&6)throw Error(k(327));Jr();var e=ra(t,0);if(!(e&1))return Ye(t,ce()),null;var n=Sa(t,e);if(t.tag!==0&&n===2){var r=Jc(t);r!==0&&(e=r,n=Tu(t,r))}if(n===1)throw n=Ms,or(t,0),vn(t,e),Ye(t,ce()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xn(t,Ve,Kt),Ye(t,ce()),null}function Vd(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(fi=ce()+500,tl&&$n())}}function fr(t){Tn!==null&&Tn.tag===0&&!(H&6)&&Jr();var e=H;H|=1;var n=dt.transition,r=K;try{if(dt.transition=null,K=1,t)return t()}finally{K=r,dt.transition=n,H=e,!(H&6)&&$n()}}function Hd(){Xe=Vr.current,ee(Vr)}function or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,KS(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Id(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&la();break;case 3:ui(),ee(Ke),ee(Me),Od();break;case 5:bd(r);break;case 4:ui();break;case 13:ee(re);break;case 19:ee(re);break;case 10:Rd(r.type._context);break;case 22:case 23:Hd()}n=n.return}if(Se=t,de=t=Dn(t.current,null),Te=Xe=e,pe=0,Ms=null,Bd=sl=dr=0,Ve=ls=null,nr!==null){for(e=0;e<nr.length;e++)if(n=nr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}nr=null}return t}function Ky(t,e){do{var n=de;try{if(xd(),Wo.current=ya,ma){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ma=!1}if(ur=0,ye=he=ie=null,os=!1,As=0,zd.current=null,n===null||n.return===null){pe=1,Ms=e,de=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Te,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=np(o);if(g!==null){g.flags&=-257,rp(g,o,a,s,e),g.mode&1&&tp(s,c,e),e=g,l=c;var _=e.updateQueue;if(_===null){var w=new Set;w.add(l),e.updateQueue=w}else _.add(l);break e}else{if(!(e&1)){tp(s,c,e),$d();break e}l=Error(k(426))}}else if(ne&&a.mode&1){var I=np(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),rp(I,o,a,s,e),Td(di(l,a));break e}}s=l=di(l,a),pe!==4&&(pe=2),ls===null?ls=[s]:ls.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Py(s,l,e);Yh(s,m);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(On===null||!On.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=Ay(s,a,e);Yh(s,v);break e}}s=s.return}while(s!==null)}Qy(n)}catch(E){e=E,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function qy(){var t=_a.current;return _a.current=ya,t===null?ya:t}function $d(){(pe===0||pe===3||pe===2)&&(pe=4),Se===null||!(dr&268435455)&&!(sl&268435455)||vn(Se,Te)}function Sa(t,e){var n=H;H|=2;var r=qy();(Se!==t||Te!==e)&&(Kt=null,or(t,e));do try{_E();break}catch(i){Ky(t,i)}while(!0);if(xd(),H=n,_a.current=r,de!==null)throw Error(k(261));return Se=null,Te=0,pe}function _E(){for(;de!==null;)Yy(de)}function vE(){for(;de!==null&&!Hw();)Yy(de)}function Yy(t){var e=Xy(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?Qy(t):de=e,zd.current=null}function Qy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fE(n,e),n!==null){n.flags&=32767,de=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pe=6,de=null;return}}else if(n=dE(n,e,Xe),n!==null){de=n;return}if(e=e.sibling,e!==null){de=e;return}de=e=t}while(e!==null);pe===0&&(pe=5)}function Xn(t,e,n){var r=K,i=dt.transition;try{dt.transition=null,K=1,wE(t,e,n,r)}finally{dt.transition=i,K=r}return null}function wE(t,e,n,r){do Jr();while(Tn!==null);if(H&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eS(t,s),t===Se&&(de=Se=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||No||(No=!0,Zy(na,function(){return Jr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=dt.transition,dt.transition=null;var o=K;K=1;var a=H;H|=4,zd.current=null,pE(t,n),Hy(n,t),zS(ru),ia=!!nu,ru=nu=null,t.current=n,gE(n),$w(),H=a,K=o,dt.transition=s}else t.current=n;if(No&&(No=!1,Tn=t,wa=i),s=t.pendingLanes,s===0&&(On=null),qw(n.stateNode),Ye(t,ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(va)throw va=!1,t=Cu,Cu=null,t;return wa&1&&t.tag!==0&&Jr(),s=t.pendingLanes,s&1?t===Iu?cs++:(cs=0,Iu=t):cs=0,$n(),null}function Jr(){if(Tn!==null){var t=Pm(wa),e=dt.transition,n=K;try{if(dt.transition=null,K=16>t?16:t,Tn===null)var r=!1;else{if(t=Tn,Tn=null,wa=0,H&6)throw Error(k(331));var i=H;for(H|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(P=c;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:as(8,d,s)}var f=d.child;if(f!==null)f.return=d,P=f;else for(;P!==null;){d=P;var h=d.sibling,g=d.return;if(By(d),d===c){P=null;break}if(h!==null){h.return=g,P=h;break}P=g}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var I=w.sibling;w.sibling=null,w=I}while(w!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:as(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,P=m;break e}P=s.return}}var p=t.current;for(P=p;P!==null;){o=P;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,P=y;else e:for(o=p;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:il(9,a)}}catch(E){oe(a,a.return,E)}if(a===o){P=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,P=v;break e}P=a.return}}if(H=i,$n(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(Qa,t)}catch{}r=!0}return r}finally{K=n,dt.transition=e}}return!1}function mp(t,e,n){e=di(n,e),e=Py(t,e,1),t=bn(t,e,1),e=Fe(),t!==null&&(Qs(t,1,e),Ye(t,e))}function oe(t,e,n){if(t.tag===3)mp(t,t,n);else for(;e!==null;){if(e.tag===3){mp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){t=di(n,t),t=Ay(e,t,1),e=bn(e,t,1),t=Fe(),e!==null&&(Qs(e,1,t),Ye(e,t));break}}e=e.return}}function SE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Fe(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Te&n)===n&&(pe===4||pe===3&&(Te&130023424)===Te&&500>ce()-Wd?or(t,0):Bd|=n),Ye(t,e)}function Jy(t,e){e===0&&(t.mode&1?(e=vo,vo<<=1,!(vo&130023424)&&(vo=4194304)):e=1);var n=Fe();t=an(t,e),t!==null&&(Qs(t,e,n),Ye(t,n))}function EE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jy(t,n)}function CE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),Jy(t,n)}var Xy;Xy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)He=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return He=!1,uE(t,e,n);He=!!(t.flags&131072)}else He=!1,ne&&e.flags&1048576&&ny(e,da,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ho(t,e),t=e.pendingProps;var i=ai(e,Me.current);Qr(e,n),i=Dd(null,e,r,t,i,n);var s=Ld();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qe(r)?(s=!0,ca(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pd(e),i.updater=rl,e.stateNode=i,i._reactInternals=e,fu(e,r,t,n),e=gu(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&Cd(e),Le(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ho(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TE(r),t=yt(r,t),i){case 0:e=pu(null,e,r,t,n);break e;case 1:e=op(null,e,r,t,n);break e;case 11:e=ip(null,e,r,t,n);break e;case 14:e=sp(null,e,r,yt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),pu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),op(t,e,r,i,n);case 3:e:{if(Dy(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ly(t,e),pa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=di(Error(k(423)),e),e=ap(t,e,r,n,i);break e}else if(r!==i){i=di(Error(k(424)),e),e=ap(t,e,r,n,i);break e}else for(et=An(e.stateNode.containerInfo.firstChild),tt=e,ne=!0,vt=null,n=oy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(li(),r===i){e=ln(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return cy(e),t===null&&cu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,iu(r,i)?o=null:s!==null&&iu(r,s)&&(e.flags|=32),My(t,e),Le(t,e,o,n),e.child;case 6:return t===null&&cu(e),null;case 13:return Ly(t,e,n);case 4:return Ad(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ci(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),ip(t,e,r,i,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(fa,r._currentValue),r._currentValue=o,s!==null)if(kt(s.value,o)){if(s.children===i.children&&!Ke.current){e=ln(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=tn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),uu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),uu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Le(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qr(e,n),i=ht(i),r=r(i),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,i=yt(r,e.pendingProps),i=yt(r.type,i),sp(t,e,r,i,n);case 15:return by(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:yt(r,i),Ho(t,e),e.tag=1,qe(r)?(t=!0,ca(e)):t=!1,Qr(e,n),Ny(e,r,i),fu(e,r,i,n),gu(null,e,r,!0,t,n);case 19:return jy(t,e,n);case 22:return Oy(t,e,n)}throw Error(k(156,e.tag))};function Zy(t,e){return km(t,e)}function IE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(t,e,n,r){return new IE(t,e,n,r)}function Gd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TE(t){if(typeof t=="function")return Gd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dd)return 11;if(t===fd)return 14}return 2}function Dn(t,e){var n=t.alternate;return n===null?(n=ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ko(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Gd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Or:return ar(n.children,i,s,e);case ud:o=8,i|=8;break;case Lc:return t=ct(12,n,e,i|2),t.elementType=Lc,t.lanes=s,t;case jc:return t=ct(13,n,e,i),t.elementType=jc,t.lanes=s,t;case Fc:return t=ct(19,n,e,i),t.elementType=Fc,t.lanes=s,t;case cm:return ol(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case am:o=10;break e;case lm:o=9;break e;case dd:o=11;break e;case fd:o=14;break e;case mn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ar(t,e,n,r){return t=ct(7,t,r,e),t.lanes=n,t}function ol(t,e,n,r){return t=ct(22,t,r,e),t.elementType=cm,t.lanes=n,t.stateNode={isHidden:!1},t}function uc(t,e,n){return t=ct(6,t,null,e),t.lanes=n,t}function dc(t,e,n){return e=ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function kE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kd(t,e,n,r,i,s,o,a,l){return t=new kE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ct(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pd(s),t}function xE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function e_(t){if(!t)return zn;t=t._reactInternals;e:{if(Er(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(qe(n))return ey(t,n,e)}return e}function t_(t,e,n,r,i,s,o,a,l){return t=Kd(n,r,!0,t,i,s,o,a,l),t.context=e_(null),n=t.current,r=Fe(),i=Mn(n),s=tn(r,i),s.callback=e??null,bn(n,s,i),t.current.lanes=i,Qs(t,i,r),Ye(t,r),t}function al(t,e,n,r){var i=e.current,s=Fe(),o=Mn(i);return n=e_(n),e.context===null?e.context=n:e.pendingContext=n,e=tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=bn(i,e,o),t!==null&&(Ct(t,i,o,s),Bo(t,i,o)),o}function Ea(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qd(t,e){yp(t,e),(t=t.alternate)&&yp(t,e)}function RE(){return null}var n_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yd(t){this._internalRoot=t}ll.prototype.render=Yd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));al(t,e,null,null)};ll.prototype.unmount=Yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fr(function(){al(null,t,null,null)}),e[on]=null}};function ll(t){this._internalRoot=t}ll.prototype.unstable_scheduleHydration=function(t){if(t){var e=Om();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_n.length&&e!==0&&e<_n[n].priority;n++);_n.splice(n,0,t),n===0&&Dm(t)}};function Qd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _p(){}function NE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ea(o);s.call(c)}}var o=t_(e,r,t,0,null,!1,!1,"",_p);return t._reactRootContainer=o,t[on]=o.current,ks(t.nodeType===8?t.parentNode:t),fr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ea(l);a.call(c)}}var l=Kd(t,0,!1,null,null,!1,!1,"",_p);return t._reactRootContainer=l,t[on]=l.current,ks(t.nodeType===8?t.parentNode:t),fr(function(){al(e,l,n,r)}),l}function ul(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ea(o);a.call(l)}}al(e,o,t,i)}else o=NE(n,e,t,i,r);return Ea(o)}Am=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ji(e.pendingLanes);n!==0&&(gd(e,n|1),Ye(e,ce()),!(H&6)&&(fi=ce()+500,$n()))}break;case 13:fr(function(){var r=an(t,1);if(r!==null){var i=Fe();Ct(r,t,1,i)}}),qd(t,1)}};md=function(t){if(t.tag===13){var e=an(t,134217728);if(e!==null){var n=Fe();Ct(e,t,134217728,n)}qd(t,134217728)}};bm=function(t){if(t.tag===13){var e=Mn(t),n=an(t,e);if(n!==null){var r=Fe();Ct(n,t,e,r)}qd(t,e)}};Om=function(){return K};Mm=function(t,e){var n=K;try{return K=t,e()}finally{K=n}};qc=function(t,e,n){switch(e){case"input":if(Bc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=el(r);if(!i)throw Error(k(90));dm(r),Bc(r,i)}}}break;case"textarea":hm(t,n);break;case"select":e=n.value,e!=null&&Gr(t,!!n.multiple,e,!1)}};wm=Vd;Sm=fr;var PE={usingClientEntryPoint:!1,Events:[Xs,jr,el,_m,vm,Vd]},Vi={findFiberByHostInstance:tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AE={bundleType:Vi.bundleType,version:Vi.version,rendererPackageName:Vi.rendererPackageName,rendererConfig:Vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Im(t),t===null?null:t.stateNode},findFiberByHostInstance:Vi.findFiberByHostInstance||RE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{Qa=Po.inject(AE),Lt=Po}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PE;it.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qd(e))throw Error(k(200));return xE(t,e,null,n)};it.createRoot=function(t,e){if(!Qd(t))throw Error(k(299));var n=!1,r="",i=n_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kd(t,1,!1,null,null,n,!1,r,i),t[on]=e.current,ks(t.nodeType===8?t.parentNode:t),new Yd(e)};it.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Im(e),t=t===null?null:t.stateNode,t};it.flushSync=function(t){return fr(t)};it.hydrate=function(t,e,n){if(!cl(e))throw Error(k(200));return ul(null,t,e,!0,n)};it.hydrateRoot=function(t,e,n){if(!Qd(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=n_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=t_(e,null,t,1,n??null,i,!1,s,o),t[on]=e.current,ks(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ll(e)};it.render=function(t,e,n){if(!cl(e))throw Error(k(200));return ul(null,t,e,!1,n)};it.unmountComponentAtNode=function(t){if(!cl(t))throw Error(k(40));return t._reactRootContainer?(fr(function(){ul(null,null,t,!1,function(){t._reactRootContainer=null,t[on]=null})}),!0):!1};it.unstable_batchedUpdates=Vd;it.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!cl(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return ul(t,e,n,!1,r)};it.version="18.3.1-next-f1338f8080-20240426";function r_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r_)}catch(t){console.error(t)}}r_(),rm.exports=it;var bE=rm.exports,vp=bE;Mc.createRoot=vp.createRoot,Mc.hydrateRoot=vp.hydrateRoot;var wp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw ki(e)},ki=function(t){return new Error("Firebase Database ("+i_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},OE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Jd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(h=64)),r.push(n[d],n[f],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new ME;const h=s<<2|a>>4;if(r.push(h),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const _=c<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ME extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const o_=function(t){const e=s_(t);return Jd.encodeByteArray(e,!0)},Ca=function(t){return o_(t).replace(/\./g,"")},Ia=function(t){try{return Jd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(t){return a_(void 0,t)}function a_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!LE(n)||(t[n]=a_(t[n],e[n]));return t}function LE(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE=()=>jE().__FIREBASE_DEFAULTS__,UE=()=>{if(typeof process>"u"||typeof wp>"u")return;const t=wp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ia(t[1]);return e&&JSON.parse(e)},Xd=()=>{try{return FE()||UE()||zE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},l_=t=>{var e,n;return(n=(e=Xd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},BE=t=>{const e=l_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},c_=()=>{var t;return(t=Xd())===null||t===void 0?void 0:t.config},u_=t=>{var e;return(e=Xd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ca(JSON.stringify(n)),Ca(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function VE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function d_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function f_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HE(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $E(){return i_.NODE_ADMIN===!0}function h_(){try{return typeof indexedDB=="object"}catch{return!1}}function p_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function GE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KE,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cr.prototype.create)}}class Cr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Bt(i,a,r)}}function qE(t,e){return t.replace(YE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ds(Ia(s[0])||""),n=Ds(Ia(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},QE=function(t){const e=g_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},JE=function(t){const e=g_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function xu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ta(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ls(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Sp(s)&&Sp(o)){if(!Ls(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function es(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):f<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+c+l+d+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function ZE(t,e){const n=new e1(t,e);return n.subscribe.bind(n)}class e1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");t1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=fc),i.error===void 0&&(i.error=fc),i.complete===void 0&&(i.complete=fc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function t1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fc(){}function dl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=1e3,i1=2,s1=4*60*60*1e3,o1=.5;function Ep(t,e=r1,n=i1){const r=e*Math.pow(n,t),i=Math.round(o1*r*(Math.random()-.5)*2);return Math.min(s1,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t){return t&&t._delegate?t._delegate:t}class xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new eo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(c1(e))try{this.getOrInitializeService({instanceIdentifier:Zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zn){return this.instances.has(e)}getOptions(e=Zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:l1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zn){return this.component?this.component.multipleInstances?e:Zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function l1(t){return t===Zn?void 0:t}function c1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new a1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const d1={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},f1=q.INFO,h1={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},p1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=h1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hl{constructor(e){this.name=e,this._logLevel=f1,this._logHandler=p1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?d1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const g1=(t,e)=>e.some(n=>t instanceof n);let Cp,Ip;function m1(){return Cp||(Cp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function y1(){return Ip||(Ip=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m_=new WeakMap,Ru=new WeakMap,y_=new WeakMap,hc=new WeakMap,ef=new WeakMap;function _1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ln(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&m_.set(n,t)}).catch(()=>{}),ef.set(e,t),e}function v1(t){if(Ru.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ru.set(t,e)}let Nu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ru.get(t);if(e==="objectStoreNames")return t.objectStoreNames||y_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function w1(t){Nu=t(Nu)}function S1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pc(this),e,...n);return y_.set(r,e.sort?e.sort():[e]),Ln(r)}:y1().includes(t)?function(...e){return t.apply(pc(this),e),Ln(m_.get(this))}:function(...e){return Ln(t.apply(pc(this),e))}}function E1(t){return typeof t=="function"?S1(t):(t instanceof IDBTransaction&&v1(t),g1(t,m1())?new Proxy(t,Nu):t)}function Ln(t){if(t instanceof IDBRequest)return _1(t);if(hc.has(t))return hc.get(t);const e=E1(t);return e!==t&&(hc.set(t,e),ef.set(e,t)),e}const pc=t=>ef.get(t);function __(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ln(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ln(o.result),l.oldVersion,l.newVersion,Ln(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const C1=["get","getKey","getAll","getAllKeys","count"],I1=["put","add","delete","clear"],gc=new Map;function Tp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gc.get(e))return gc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=I1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||C1.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return gc.set(e,s),s}w1(t=>({...t,get:(e,n,r)=>Tp(e,n)||t.get(e,n,r),has:(e,n)=>!!Tp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(k1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function k1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pu="@firebase/app",kp="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new hl("@firebase/app"),x1="@firebase/app-compat",R1="@firebase/analytics-compat",N1="@firebase/analytics",P1="@firebase/app-check-compat",A1="@firebase/app-check",b1="@firebase/auth",O1="@firebase/auth-compat",M1="@firebase/database",D1="@firebase/data-connect",L1="@firebase/database-compat",j1="@firebase/functions",F1="@firebase/functions-compat",U1="@firebase/installations",z1="@firebase/installations-compat",B1="@firebase/messaging",W1="@firebase/messaging-compat",V1="@firebase/performance",H1="@firebase/performance-compat",$1="@firebase/remote-config",G1="@firebase/remote-config-compat",K1="@firebase/storage",q1="@firebase/storage-compat",Y1="@firebase/firestore",Q1="@firebase/vertexai-preview",J1="@firebase/firestore-compat",X1="firebase",Z1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="[DEFAULT]",eC={[Pu]:"fire-core",[x1]:"fire-core-compat",[N1]:"fire-analytics",[R1]:"fire-analytics-compat",[A1]:"fire-app-check",[P1]:"fire-app-check-compat",[b1]:"fire-auth",[O1]:"fire-auth-compat",[M1]:"fire-rtdb",[D1]:"fire-data-connect",[L1]:"fire-rtdb-compat",[j1]:"fire-fn",[F1]:"fire-fn-compat",[U1]:"fire-iid",[z1]:"fire-iid-compat",[B1]:"fire-fcm",[W1]:"fire-fcm-compat",[V1]:"fire-perf",[H1]:"fire-perf-compat",[$1]:"fire-rc",[G1]:"fire-rc-compat",[K1]:"fire-gcs",[q1]:"fire-gcs-compat",[Y1]:"fire-fst",[J1]:"fire-fst-compat",[Q1]:"fire-vertex","fire-js":"fire-js",[X1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new Map,tC=new Map,bu=new Map;function xp(t,e){try{t.container.addComponent(e)}catch(n){cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zt(t){const e=t.name;if(bu.has(e))return cn.debug(`There were multiple attempts to register component ${e}.`),!1;bu.set(e,t);for(const n of ka.values())xp(n,t);for(const n of tC.values())xp(n,t);return!0}function Ir(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new Cr("app","Firebase",nC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=Z1;function tf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Au,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jn.create("bad-app-name",{appName:String(i)});if(n||(n=c_()),!n)throw jn.create("no-options");const s=ka.get(i);if(s){if(Ls(n,s.options)&&Ls(r,s.config))return s;throw jn.create("duplicate-app",{appName:i})}const o=new u1(i);for(const l of bu.values())o.addComponent(l);const a=new rC(n,r,o);return ka.set(i,a),a}function nf(t=Au){const e=ka.get(t);if(!e&&t===Au&&c_())return tf();if(!e)throw jn.create("no-app",{appName:t});return e}function ft(t,e,n){var r;let i=(r=eC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cn.warn(a.join(" "));return}zt(new xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC="firebase-heartbeat-database",sC=1,js="firebase-heartbeat-store";let mc=null;function v_(){return mc||(mc=__(iC,sC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(js)}catch(n){console.warn(n)}}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),mc}async function oC(t){try{const n=(await v_()).transaction(js),r=await n.objectStore(js).get(w_(t));return await n.done,r}catch(e){if(e instanceof Bt)cn.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cn.warn(n.message)}}}async function Rp(t,e){try{const r=(await v_()).transaction(js,"readwrite");await r.objectStore(js).put(e,w_(t)),await r.done}catch(n){if(n instanceof Bt)cn.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cn.warn(r.message)}}}function w_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=1024,lC=30*24*60*60*1e3;class cC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Np();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=lC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Np(),{heartbeatsToSend:r,unsentEntries:i}=uC(this._heartbeatsCache.heartbeats),s=Ca(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return cn.warn(n),""}}}function Np(){return new Date().toISOString().substring(0,10)}function uC(t,e=aC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return h_()?p_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pp(t){return Ca(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){zt(new xt("platform-logger",e=>new T1(e),"PRIVATE")),zt(new xt("heartbeat",e=>new cC(e),"PRIVATE")),ft(Pu,kp,t),ft(Pu,kp,"esm2017"),ft("fire-js","")}fC("");var hC="firebase",pC="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft(hC,pC,"app");const S_="@firebase/installations",rf="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=1e4,C_=`w:${rf}`,I_="FIS_v2",gC="https://firebaseinstallations.googleapis.com/v1",mC=60*60*1e3,yC="installations",_C="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},hr=new Cr(yC,_C,vC);function T_(t){return t instanceof Bt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_({projectId:t}){return`${gC}/projects/${t}/installations`}function x_(t){return{token:t.token,requestStatus:2,expiresIn:SC(t.expiresIn),creationTime:Date.now()}}async function R_(t,e){const r=(await e.json()).error;return hr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function N_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function wC(t,{refreshToken:e}){const n=N_(t);return n.append("Authorization",EC(e)),n}async function P_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function SC(t){return Number(t.replace("s","000"))}function EC(t){return`${I_} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=k_(t),i=N_(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:I_,appId:t.appId,sdkVersion:C_},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await P_(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:x_(c.authToken)}}else throw await R_("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=/^[cdef][\w-]{21}$/,Ou="";function kC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=xC(t);return TC.test(n)?n:Ou}catch{return Ou}}function xC(t){return IC(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=new Map;function O_(t,e){const n=pl(t);M_(n,e),RC(n,e)}function M_(t,e){const n=b_.get(t);if(n)for(const r of n)r(e)}function RC(t,e){const n=NC();n&&n.postMessage({key:t,fid:e}),PC()}let ir=null;function NC(){return!ir&&"BroadcastChannel"in self&&(ir=new BroadcastChannel("[Firebase] FID Change"),ir.onmessage=t=>{M_(t.data.key,t.data.fid)}),ir}function PC(){b_.size===0&&ir&&(ir.close(),ir=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC="firebase-installations-database",bC=1,pr="firebase-installations-store";let yc=null;function sf(){return yc||(yc=__(AC,bC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pr)}}})),yc}async function xa(t,e){const n=pl(t),i=(await sf()).transaction(pr,"readwrite"),s=i.objectStore(pr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&O_(t,e.fid),e}async function D_(t){const e=pl(t),r=(await sf()).transaction(pr,"readwrite");await r.objectStore(pr).delete(e),await r.done}async function gl(t,e){const n=pl(t),i=(await sf()).transaction(pr,"readwrite"),s=i.objectStore(pr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&O_(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function of(t){let e;const n=await gl(t.appConfig,r=>{const i=OC(r),s=MC(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ou?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function OC(t){const e=t||{fid:kC(),registrationStatus:0};return L_(e)}function MC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(hr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=DC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:LC(t)}:{installationEntry:e}}async function DC(t,e){try{const n=await CC(t,e);return xa(t.appConfig,n)}catch(n){throw T_(n)&&n.customData.serverCode===409?await D_(t.appConfig):await xa(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function LC(t){let e=await Ap(t.appConfig);for(;e.registrationStatus===1;)await A_(100),e=await Ap(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await of(t);return r||n}return e}function Ap(t){return gl(t,e=>{if(!e)throw hr.create("installation-not-found");return L_(e)})}function L_(t){return jC(t)?{fid:t.fid,registrationStatus:0}:t}function jC(t){return t.registrationStatus===1&&t.registrationTime+E_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FC({appConfig:t,heartbeatServiceProvider:e},n){const r=UC(t,n),i=wC(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:C_,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await P_(()=>fetch(r,a));if(l.ok){const c=await l.json();return x_(c)}else throw await R_("Generate Auth Token",l)}function UC(t,{fid:e}){return`${k_(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function af(t,e=!1){let n;const r=await gl(t.appConfig,s=>{if(!j_(s))throw hr.create("not-registered");const o=s.authToken;if(!e&&WC(o))return s;if(o.requestStatus===1)return n=zC(t,e),s;{if(!navigator.onLine)throw hr.create("app-offline");const a=HC(s);return n=BC(t,a),a}});return n?await n:r.authToken}async function zC(t,e){let n=await bp(t.appConfig);for(;n.authToken.requestStatus===1;)await A_(100),n=await bp(t.appConfig);const r=n.authToken;return r.requestStatus===0?af(t,e):r}function bp(t){return gl(t,e=>{if(!j_(e))throw hr.create("not-registered");const n=e.authToken;return $C(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function BC(t,e){try{const n=await FC(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await xa(t.appConfig,r),n}catch(n){if(T_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await D_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await xa(t.appConfig,r)}throw n}}function j_(t){return t!==void 0&&t.registrationStatus===2}function WC(t){return t.requestStatus===2&&!VC(t)}function VC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+mC}function HC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function $C(t){return t.requestStatus===1&&t.requestTime+E_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GC(t){const e=t,{installationEntry:n,registrationPromise:r}=await of(e);return r?r.catch(console.error):af(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KC(t,e=!1){const n=t;return await qC(n),(await af(n,e)).token}async function qC(t){const{registrationPromise:e}=await of(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){if(!t||!t.options)throw _c("App Configuration");if(!t.name)throw _c("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _c(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _c(t){return hr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="installations",QC="installations-internal",JC=t=>{const e=t.getProvider("app").getImmediate(),n=YC(e),r=Ir(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},XC=t=>{const e=t.getProvider("app").getImmediate(),n=Ir(e,F_).getImmediate();return{getId:()=>GC(n),getToken:i=>KC(n,i)}};function ZC(){zt(new xt(F_,JC,"PUBLIC")),zt(new xt(QC,XC,"PRIVATE"))}ZC();ft(S_,rf);ft(S_,rf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="analytics",eI="firebase_id",tI="origin",nI=60*1e3,rI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",lf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe=new hl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},nt=new Cr("analytics","Analytics",iI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t){if(!t.startsWith(lf)){const e=nt.create("invalid-gtag-resource",{gtagURL:t});return Qe.warn(e.message),""}return t}function U_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function oI(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function aI(t,e){const n=oI("firebase-js-sdk-policy",{createScriptURL:sI}),r=document.createElement("script"),i=`${lf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function lI(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function cI(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await U_(n)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Qe.error(a)}t("config",i,s)}async function uI(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await U_(n);for(const l of o){const c=a.find(f=>f.measurementId===l),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Qe.error(s)}}function dI(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await uI(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await cI(t,e,n,r,a,l)}else if(s==="consent"){const[a,l]=o;t("consent",a,l)}else if(s==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){Qe.error(a)}}return i}function fI(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=dI(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function hI(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(lf)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=30,gI=1e3;class mI{constructor(e={},n=gI){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const z_=new mI;function yI(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function _I(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:yI(r)},s=rI.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function vI(t,e=z_,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw nt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw nt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new EI;return setTimeout(async()=>{a.abort()},nI),B_({appId:r,apiKey:i,measurementId:s},o,a,e)}async function B_(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=z_){var s;const{appId:o,measurementId:a}=t;try{await wI(r,e)}catch(l){if(a)return Qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await _I(t);return i.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!SI(c)){if(i.deleteThrottleMetadata(o),a)return Qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ep(n,i.intervalMillis,pI):Ep(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,f),Qe.debug(`Calling attemptFetch again in ${d} millis`),B_(t,f,r,i)}}function wI(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function SI(t){if(!(t instanceof Bt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class EI{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function CI(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(){if(h_())try{await p_()}catch(t){return Qe.warn(nt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Qe.warn(nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function TI(t,e,n,r,i,s,o){var a;const l=vI(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Qe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Qe.error(g)),e.push(l);const c=II().then(g=>{if(g)return r.getId()}),[d,f]=await Promise.all([l,c]);hI(s)||aI(s,d.measurementId),i("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[tI]="firebase",h.update=!0,f!=null&&(h[eI]=f),i("config",d.measurementId,h),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e){this.app=e}_delete(){return delete us[this.app.options.appId],Promise.resolve()}}let us={},Op=[];const Mp={};let vc="dataLayer",xI="gtag",Dp,W_,Lp=!1;function RI(){const t=[];if(d_()&&t.push("This is a browser extension environment."),GE()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=nt.create("invalid-analytics-context",{errorInfo:e});Qe.warn(n.message)}}function NI(t,e,n){RI();const r=t.options.appId;if(!r)throw nt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw nt.create("no-api-key");if(us[r]!=null)throw nt.create("already-exists",{id:r});if(!Lp){lI(vc);const{wrappedGtag:s,gtagCore:o}=fI(us,Op,Mp,vc,xI);W_=s,Dp=o,Lp=!0}return us[r]=TI(t,Op,Mp,e,Dp,vc,n),new kI(t)}function PI(t=nf()){t=De(t);const e=Ir(t,Ra);return e.isInitialized()?e.getImmediate():AI(t)}function AI(t,e={}){const n=Ir(t,Ra);if(n.isInitialized()){const i=n.getImmediate();if(Ls(e,n.getOptions()))return i;throw nt.create("already-initialized")}return n.initialize({options:e})}function bI(t,e,n,r){t=De(t),CI(W_,us[t.app.options.appId],e,n,r).catch(i=>Qe.error(i))}const jp="@firebase/analytics",Fp="0.10.8";function OI(){zt(new xt(Ra,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return NI(r,i,n)},"PUBLIC")),zt(new xt("analytics-internal",t,"PRIVATE")),ft(jp,Fp),ft(jp,Fp,"esm2017");function t(e){try{const n=e.getProvider(Ra).getImmediate();return{logEvent:(r,i,s)=>bI(n,r,i,s)}}catch(n){throw nt.create("interop-component-reg-failed",{reason:n})}}}OI();const cf={apiKey:"AIzaSyBzV9o5D7pfKmpTFiyGiF52waHT3JZTUXs",authDomain:"among-us-event.firebaseapp.com",projectId:"among-us-event",databaseURL:" https://among-us-event-default-rtdb.firebaseio.com",storageBucket:"among-us-event.firebasestorage.app",messagingSenderId:"345348274817",appId:"1:345348274817:web:7089f775af93f417aa6b80",measurementId:"G-T6Y4MELJ9C"},MI=tf(cf);PI(MI);var Up={};const zp="@firebase/database",Bp="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let V_="";function DI(t){V_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ds(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Wt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new LI(e)}}catch{}return new jI},sr=H_("localStorage"),FI=H_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new hl("@firebase/database"),UI=function(){let t=1;return function(){return t++}}(),$_=function(t){const e=n1(t),n=new XE;n.update(e);const r=n.digest();return Jd.encodeByteArray(r)},to=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=to.apply(null,r):typeof r=="object"?e+=we(r):e+=r,e+=" "}return e};let ds=null,Wp=!0;const zI=function(t,e){x(!0,"Can't turn on custom loggers persistently."),Xr.logLevel=q.VERBOSE,ds=Xr.log.bind(Xr)},Ie=function(...t){if(Wp===!0&&(Wp=!1,ds===null&&FI.get("logging_enabled")===!0&&zI()),ds){const e=to.apply(null,t);ds(e)}},no=function(t){return function(...e){Ie(t,...e)}},Mu=function(...t){const e="FIREBASE INTERNAL ERROR: "+to(...t);Xr.error(e)},un=function(...t){const e=`FIREBASE FATAL ERROR: ${to(...t)}`;throw Xr.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+to(...t);Xr.warn(e)},BI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},WI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},pi="[MIN_NAME]",gr="[MAX_NAME]",Tr=function(t,e){if(t===e)return 0;if(t===pi||e===gr)return-1;if(e===pi||t===gr)return 1;{const n=Vp(t),r=Vp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},VI=function(t,e){return t===e?0:t<e?-1:1},Hi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},df=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=we(e[r]),n+=":",n+=df(t[e[r]]);return n+="}",n},G_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const K_=function(t){x(!uf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},HI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$I=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function GI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const KI=new RegExp("^-?(0*)\\d{1,10}$"),qI=-2147483648,YI=2147483647,Vp=function(t){if(KI.test(t)){const e=Number(t);if(e>=qI&&e<=YI)return e}return null},Ni=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},QI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class qo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff="5",q_="v",Y_="s",Q_="r",J_="f",X_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Z_="ls",ev="p",Du="ac",tv="websocket",nv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ZI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function iv(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===tv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===nv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ZI(t)&&(n.ns=t.namespace);const i=[];return xe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(){this.counters_={}}incrementCounter(e,n=1){Wt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return DE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc={},Sc={};function hf(t){const e=t.toString();return wc[e]||(wc[e]=new eT),wc[e]}function tT(t,e){const n=t.toString();return Sc[n]||(Sc[n]=e()),Sc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ni(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="start",rT="close",iT="pLPCommand",sT="pRTLPCB",sv="id",ov="pw",av="ser",oT="cb",aT="seg",lT="ts",cT="d",uT="dframe",lv=1870,cv=30,dT=lv-cv,fT=25e3,hT=3e4;class Hr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=no(e),this.stats_=hf(n),this.urlFn=l=>(this.appCheckToken&&(l[Du]=this.appCheckToken),iv(n,nv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new nT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hT)),WI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pf((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hp)this.id=a,this.password=l;else if(o===rT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Hp]="t",r[av]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[oT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[q_]=ff,this.transportSessionId&&(r[Y_]=this.transportSessionId),this.lastSessionId&&(r[Z_]=this.lastSessionId),this.applicationId&&(r[ev]=this.applicationId),this.appCheckToken&&(r[Du]=this.appCheckToken),typeof location<"u"&&location.hostname&&X_.test(location.hostname)&&(r[Q_]=J_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Hr.forceAllow_=!0}static forceDisallow(){Hr.forceDisallow_=!0}static isAvailable(){return Hr.forceAllow_?!0:!Hr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!HI()&&!$I()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=o_(n),i=G_(r,dT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[uT]="t",r[sv]=e,r[ov]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class pf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=UI(),window[iT+this.uniqueCallbackIdentifier]=e,window[sT+this.uniqueCallbackIdentifier]=n,this.myIFrame=pf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ie("frame writing exception"),a.stack&&Ie(a.stack),Ie(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sv]=this.myID,e[ov]=this.myPW,e[av]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cv+r.length<=lv;){const o=this.pendingSegs.shift();r=r+"&"+aT+i+"="+o.seg+"&"+lT+i+"="+o.ts+"&"+cT+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(fT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT=16384,gT=45e3;let Na=null;typeof MozWebSocket<"u"?Na=MozWebSocket:typeof WebSocket<"u"&&(Na=WebSocket);class wt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=no(this.connId),this.stats_=hf(n),this.connURL=wt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[q_]=ff,typeof location<"u"&&location.hostname&&X_.test(location.hostname)&&(o[Q_]=J_),n&&(o[Y_]=n),r&&(o[Z_]=r),i&&(o[Du]=i),s&&(o[ev]=s),iv(e,tv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sr.set("previous_websocket_failure",!0);try{let r;$E(),this.mySock=new Na(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){wt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Na!==null&&!wt.forceDisallow_}static previouslyFailed(){return sr.isInMemoryStorage||sr.get("previous_websocket_failure")===!0}markConnectionHealthy(){sr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ds(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=G_(n,pT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}wt.responsesRequiredToBeHealthy=2;wt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Hr,wt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=wt&&wt.isAvailable();let r=n&&!wt.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[wt];else{const i=this.transports_=[];for(const s of Fs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Fs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=6e4,yT=5e3,_T=10*1024,vT=100*1024,Ec="t",$p="d",wT="s",Gp="r",ST="e",Kp="o",qp="a",Yp="n",Qp="p",ET="h";class CT{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=no("c:"+this.id+":"),this.transportManager_=new Fs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=fs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>vT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_T?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ec in e){const n=e[Ec];n===qp?this.upgradeIfSecondaryHealthy_():n===Gp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Kp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Hi("t",e),r=Hi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Hi("t",e),r=Hi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Hi(Ec,e);if($p in e){const r=e[$p];if(n===ET){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Yp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===wT?this.onConnectionShutdown_(r):n===Gp?this.onReset_(r):n===ST?Mu("Server Error: "+r):n===Kp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ff!==r&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),fs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends dv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Pa}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=32,Xp=768;class Y{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new Y("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bn(t){return t.pieces_.length-t.pieceNum_}function J(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Y(t.pieces_,e)}function gf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function IT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Us(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function fv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Y(e,0)}function ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Y)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Y(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function $e(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return $e(J(t),J(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function TT(t,e){const n=Us(t,0),r=Us(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Tr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function mf(t,e){if(Bn(t)!==Bn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Bn(t)>Bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class kT{constructor(e,n){this.errorPrefix_=n,this.parts_=Us(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=fl(this.parts_[r]);hv(this)}}function xT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=fl(e),hv(t)}function RT(t){const e=t.parts_.pop();t.byteLength_-=fl(e),t.parts_.length>0&&(t.byteLength_-=1)}function hv(t){if(t.byteLength_>Xp)throw new Error(t.errorPrefix_+"has a key path longer than "+Xp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Jp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Jp+") or object contains a cycle "+er(t))}function er(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf extends dv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new yf}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=1e3,NT=60*5*1e3,Zp=30*1e3,PT=1.3,AT=3e4,bT="server_kill",eg=3;class nn extends uv{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=nn.nextPersistentConnectionId_++,this.log_=no("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$i,this.maxReconnectDelay_=NT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(we(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new eo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;nn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Wt(e,"w")){const r=hi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||JE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=QE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Mu("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$i,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$i,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>AT&&(this.reconnectDelay_=$i),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*PT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+nn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){x(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new CT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Ue(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(bT)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ue(f),l())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xu(this.interruptReasons_)&&(this.reconnectDelay_=$i,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>df(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Y(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=eg&&(this.reconnectDelay_=Zp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=eg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+V_.replace(/\./g,"-")]=1,Zd()?e["framework.cordova"]=1:f_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pa.getInstance().currentlyOnline();return xu(this.interruptReasons_)&&e}}nn.nextPersistentConnectionId_=0;nn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(pi,e),i=new U(pi,n);return this.compare(r,i)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao;class pv extends ml{static get __EMPTY_NODE(){return Ao}static set __EMPTY_NODE(e){Ao=e}compare(e,n){return Tr(e.name,n.name)}isDefinedOn(e){throw ki("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(gr,Ao)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,Ao)}toString(){return".key"}}const Zr=new pv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class _e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??_e.RED,this.left=i??Ge.EMPTY_NODE,this.right=s??Ge.EMPTY_NODE}copy(e,n,r,i,s){return new _e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,_e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,_e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}_e.RED=!0;_e.BLACK=!1;class OT{copy(e,n,r,i,s){return this}insert(e,n,r){return new _e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,_e.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,_e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bo(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new OT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t,e){return Tr(t.name,e.name)}function _f(t,e){return Tr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu;function DT(t){Lu=t}const gv=function(t){return typeof t=="number"?"number:"+K_(t):"string:"+t},mv=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Wt(e,".sv"),"Priority must be a string or number.")}else x(t===Lu||t.isEmpty(),"priority of unexpected type.");x(t===Lu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tg;class me{constructor(e,n=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mv(this.priorityNode_)}static set __childrenNodeConstructor(e){tg=e}static get __childrenNodeConstructor(){return tg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:F(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||Bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(J(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=K_(this.value_):e+=this.value_,this.lazyHash_=$_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=me.VALUE_TYPE_ORDER.indexOf(n),s=me.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yv,_v;function LT(t){yv=t}function jT(t){_v=t}class FT extends ml{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Tr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(gr,new me("[PRIORITY-POST]",_v))}makePost(e,n){const r=yv(e);return new U(n,new me("[PRIORITY-POST]",r))}toString(){return".priority"}}const le=new FT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=Math.log(2);class zT{constructor(e){const n=s=>parseInt(Math.log(s)/UT,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Aa=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let f,h;if(d===0)return null;if(d===1)return f=t[l],h=n?n(f):f,new _e(h,f.node,_e.BLACK,null,null);{const g=parseInt(d/2,10)+l,_=i(l,g),w=i(g+1,c);return f=t[g],h=n?n(f):f,new _e(h,f.node,_e.BLACK,_,w)}},s=function(l){let c=null,d=null,f=t.length;const h=function(_,w){const I=f-_,m=f;f-=_;const p=i(I+1,m),y=t[I],v=n?n(y):y;g(new _e(v,y.node,w,null,p))},g=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<l.count;++_){const w=l.nextBitIsOne(),I=Math.pow(2,l.count-(_+1));w?h(I,_e.BLACK):(h(I,_e.BLACK),h(I,_e.RED))}return d},o=new zT(t.length),a=s(o);return new Ge(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cc;const Ar={};class Jt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(Ar&&le,"ChildrenNode.ts has not been loaded"),Cc=Cc||new Jt({".priority":Ar},{".priority":le}),Cc}get(e){const n=hi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return Wt(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Zr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Aa(r,e.getCompare()):a=Ar;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Jt(d,c)}addToIndexes(e,n){const r=Ta(this.indexes_,(i,s)=>{const o=hi(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===Ar)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(U.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Aa(a,o.getCompare())}else return Ar;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new U(e.name,a))),l.insert(e,e.node)}});return new Jt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ta(this.indexes_,i=>{if(i===Ar)return i;{const s=n.get(e.name);return s?i.remove(new U(e.name,s)):i}});return new Jt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi;class D{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&mv(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Gi||(Gi=new D(new Ge(_f),null,Jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Gi}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Gi:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(J(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Gi:this.priorityNode_;return new D(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{x(F(e)!==".priority"||Bn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(J(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(le,(o,a)=>{n[o]=a.val(e),r++,s&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+gv(this.getPriority().val())+":"),this.forEachChild(le,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":$_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ro?-1:0}withIndex(e){if(e===Zr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(le),i=n.getIterator(le);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Zr?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class BT extends D{constructor(){super(new Ge(_f),D.EMPTY_NODE,Jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const ro=new BT;Object.defineProperties(U,{MIN:{value:new U(pi,D.EMPTY_NODE)},MAX:{value:new U(gr,ro)}});pv.__EMPTY_NODE=D.EMPTY_NODE;me.__childrenNodeConstructor=D;DT(ro);jT(ro);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=!0;function ve(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new me(n,ve(e))}if(!(t instanceof Array)&&WT){const n=[];let r=!1;if(xe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ve(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new U(o,l)))}}),n.length===0)return D.EMPTY_NODE;const s=Aa(n,MT,o=>o.name,_f);if(r){const o=Aa(n,le.getCompare());return new D(s,ve(e),new Jt({".priority":o},{".priority":le}))}else return new D(s,ve(e),Jt.Default)}else{let n=D.EMPTY_NODE;return xe(t,(r,i)=>{if(Wt(t,r)&&r.substring(0,1)!=="."){const s=ve(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ve(e))}}LT(ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT extends ml{constructor(e){super(),this.indexPath_=e,x(!z(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Tr(e.name,n.name):s}makePost(e,n){const r=ve(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,ro);return new U(gr,e)}toString(){return Us(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT extends ml{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Tr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=ve(e);return new U(n,r)}toString(){return".value"}}const $T=new HT;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(t){return{type:"value",snapshotNode:t}}function gi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function zs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Bs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function GT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(zs(n,a)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(gi(n,r)):o.trackChildChange(Bs(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(le,(i,s)=>{n.hasChild(i)||r.trackChildChange(zs(i,s))}),n.isLeafNode()||n.forEachChild(le,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Bs(i,s,o))}else r.trackChildChange(gi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.indexedFilter_=new vf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ws.getStartPost_(e),this.endPost_=Ws.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new U(n,r))||(r=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const s=this;return n.forEachChild(le,(o,a)=>{s.matches(new U(o,a))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ws(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new U(n,r))||(r=D.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(h,g)=>f(g,h)}else o=this.index_.getCompare();const a=e;x(a.numChildren()===this.limit_,"");const l=new U(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Bs(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(zs(n,f));const w=a.updateImmediateChild(n,D.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(gi(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(zs(c.name,c.node)),s.trackChildChange(gi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,D.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pi}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:gr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new wf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qT(t){return t.loadsAllData()?new vf(t.getIndex()):t.hasLimit()?new KT(t):new Ws(t)}function ng(t){const e={};if(t.isDefault())return e;let n;if(t.index_===le?n="$priority":t.index_===$T?n="$value":t.index_===Zr?n="$key":(x(t.index_ instanceof VT,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=we(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+we(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=we(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+we(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function rg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends uv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=no("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ba.getListenId_(e,r),a={};this.listens_[o]=a;const l=ng(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),hi(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=ba.getListenId_(e,n);delete this.listens_[r]}get(e){const n=ng(e._queryParams),r=e._path.toString(),i=new eo;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ds(a.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(){return{value:null,children:new Map}}function wv(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,Oa());const i=t.children.get(r);e=J(e),wv(i,e,n)}}function ju(t,e,n){t.value!==null?n(e,t.value):QT(t,(r,i)=>{const s=new Y(e.toString()+"/"+r);ju(i,s,n)})}function QT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&xe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=10*1e3,XT=30*1e3,ZT=5*60*1e3;class ek{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new JT(e);const r=ig+(XT-ig)*Math.random();fs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;xe(e,(i,s)=>{s>0&&Wt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),fs(this.reportStats_.bind(this),Math.floor(Math.random()*2*ZT))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function Sf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ef(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Cf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=St.ACK_USER_WRITE,this.source=Sf()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Y(e));return new Ma($(),n,this.revert)}}else return x(F(this.path)===e,"operationForChild called for unrelated child."),new Ma(J(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.source=e,this.path=n,this.type=St.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new Vs(this.source,$()):new Vs(this.source,J(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=St.OVERWRITE}operationForChild(e){return z(this.path)?new mr(this.source,$(),this.snap.getImmediateChild(e)):new mr(this.source,J(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=St.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new Y(e));return n.isEmpty()?null:n.value?new mr(this.source,$(),n.value):new mi(this.source,$(),n)}else return x(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mi(this.source,J(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function nk(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(GT(o.childName,o.snapshotNode))}),Ki(t,i,"child_removed",e,r,n),Ki(t,i,"child_added",e,r,n),Ki(t,i,"child_moved",s,r,n),Ki(t,i,"child_changed",e,r,n),Ki(t,i,"value",e,r,n),i}function Ki(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>ik(t,a,l)),o.forEach(a=>{const l=rk(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function rk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ik(t,e,n){if(e.childName==null||n.childName==null)throw ki("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t,e){return{eventCache:t,serverCache:e}}function hs(t,e,n,r){return yl(new yr(e,n,r),t.serverCache)}function Sv(t,e,n,r){return yl(t.eventCache,new yr(e,n,r))}function Fu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function _r(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic;const sk=()=>(Ic||(Ic=new Ge(VI)),Ic);class Q{constructor(e,n=sk()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return xe(e,(r,i)=>{n=n.set(new Y(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(z(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(J(e),n);return s!=null?{path:ae(new Y(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(J(e)):new Q(null)}}set(e,n){if(z(e))return new Q(n,this.children);{const r=F(e),s=(this.children.get(r)||new Q(null)).set(J(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(J(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(J(e)):null}}setTree(e,n){if(z(e))return n;{const r=F(e),s=(this.children.get(r)||new Q(null)).setTree(J(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(J(e),ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(J(e),ae(n,i),r):new Q(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.writeTree_=e}static empty(){return new It(new Q(null))}}function ps(t,e,n){if(z(e))return new It(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=$e(i,e);return s=s.updateChild(o,n),new It(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new It(s)}}}function Uu(t,e,n){let r=t;return xe(n,(i,s)=>{r=ps(r,ae(e,i),s)}),r}function sg(t,e){if(z(e))return It.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new It(n)}}function zu(t,e){return kr(t,e)!=null}function kr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($e(n.path,e)):null}function og(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(r,i)=>{e.push(new U(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new U(r,i.value))}),e}function Fn(t,e){if(z(e))return t;{const n=kr(t,e);return n!=null?new It(new Q(n)):new It(t.writeTree_.subtree(e))}}function Bu(t){return t.writeTree_.isEmpty()}function yi(t,e){return Ev($(),t.writeTree_,e)}function Ev(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Ev(ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ae(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(t,e){return kv(e,t)}function ok(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ps(t.visibleWrites,e,n)),t.lastWriteId=r}function ak(t,e,n,r){x(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Uu(t.visibleWrites,e,n),t.lastWriteId=r}function lk(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function ck(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&uk(a,r.path)?i=!1:ut(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return dk(t),!0;if(r.snap)t.visibleWrites=sg(t.visibleWrites,r.path);else{const a=r.children;xe(a,l=>{t.visibleWrites=sg(t.visibleWrites,ae(r.path,l))})}return!0}else return!1}function uk(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(ae(t.path,n),e))return!0;return!1}function dk(t){t.visibleWrites=Cv(t.allWrites,fk,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function fk(t){return t.visible}function Cv(t,e,n){let r=It.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)ut(n,o)?(a=$e(n,o),r=ps(r,a,s.snap)):ut(o,n)&&(a=$e(o,n),r=ps(r,$(),s.snap.getChild(a)));else if(s.children){if(ut(n,o))a=$e(n,o),r=Uu(r,a,s.children);else if(ut(o,n))if(a=$e(o,n),z(a))r=Uu(r,$(),s.children);else{const l=hi(s.children,F(a));if(l){const c=l.getChild(J(a));r=ps(r,$(),c)}}}else throw ki("WriteRecord should have .snap or .children")}}return r}function Iv(t,e,n,r,i){if(!r&&!i){const s=kr(t.visibleWrites,e);if(s!=null)return s;{const o=Fn(t.visibleWrites,e);if(Bu(o))return n;if(n==null&&!zu(o,$()))return null;{const a=n||D.EMPTY_NODE;return yi(o,a)}}}else{const s=Fn(t.visibleWrites,e);if(!i&&Bu(s))return n;if(!i&&n==null&&!zu(s,$()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(ut(c.path,e)||ut(e,c.path))},a=Cv(t.allWrites,o,e),l=n||D.EMPTY_NODE;return yi(a,l)}}}function hk(t,e,n){let r=D.EMPTY_NODE;const i=kr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Fn(t.visibleWrites,e);return n.forEachChild(le,(o,a)=>{const l=yi(Fn(s,new Y(o)),a);r=r.updateImmediateChild(o,l)}),og(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Fn(t.visibleWrites,e);return og(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function pk(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if(zu(t.visibleWrites,s))return null;{const o=Fn(t.visibleWrites,s);return Bu(o)?i.getChild(n):yi(o,i.getChild(n))}}function gk(t,e,n,r){const i=ae(e,n),s=kr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Fn(t.visibleWrites,i);return yi(o,r.getNode().getImmediateChild(n))}else return null}function mk(t,e){return kr(t.visibleWrites,e)}function yk(t,e,n,r,i,s,o){let a;const l=Fn(t.visibleWrites,e),c=kr(l,$());if(c!=null)a=c;else if(n!=null)a=yi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)f(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function _k(){return{visibleWrites:It.empty(),allWrites:[],lastWriteId:-1}}function Da(t,e,n,r){return Iv(t.writeTree,t.treePath,e,n,r)}function Tf(t,e){return hk(t.writeTree,t.treePath,e)}function ag(t,e,n,r){return pk(t.writeTree,t.treePath,e,n,r)}function La(t,e){return mk(t.writeTree,ae(t.treePath,e))}function vk(t,e,n,r,i,s){return yk(t.writeTree,t.treePath,e,n,r,i,s)}function kf(t,e,n){return gk(t.writeTree,t.treePath,e,n)}function Tv(t,e){return kv(ae(t.treePath,e),t.writeTree)}function kv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Bs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,zs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,gi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Bs(r,e.snapshotNode,i.oldSnap));else throw ki("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const xv=new Sk;class xf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new yr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return kf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_r(this.viewCache_),s=vk(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){return{filter:t}}function Ck(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ik(t,e,n,r,i){const s=new wk;let o,a;if(n.type===St.OVERWRITE){const c=n;c.source.fromUser?o=Wu(t,e,c.path,c.snap,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!z(c.path),o=ja(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===St.MERGE){const c=n;c.source.fromUser?o=kk(t,e,c.path,c.children,r,i,s):(x(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Vu(t,e,c.path,c.children,r,i,a,s))}else if(n.type===St.ACK_USER_WRITE){const c=n;c.revert?o=Nk(t,e,c.path,r,i,s):o=xk(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===St.LISTEN_COMPLETE)o=Rk(t,e,n.path,r,s);else throw ki("Unknown operation type: "+n.type);const l=s.getChanges();return Tk(e,o,l),{viewCache:o,changes:l}}function Tk(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Fu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(vv(Fu(e)))}}function Rv(t,e,n,r,i,s){const o=e.eventCache;if(La(r,n)!=null)return e;{let a,l;if(z(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=_r(e),d=c instanceof D?c:D.EMPTY_NODE,f=Tf(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Da(r,_r(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=F(n);if(c===".priority"){x(Bn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const f=ag(r,n,d,l);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=J(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=ag(r,n,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(c).updateChild(d,h):f=o.getNode().getImmediateChild(c)}else f=kf(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,i,s):a=o.getNode()}}return hs(e,a,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function ja(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(z(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),g,null)}else{const g=F(n);if(!l.isCompleteForPath(n)&&Bn(n)>1)return e;const _=J(n),I=l.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?c=d.updatePriority(l.getNode(),I):c=d.updateChild(l.getNode(),g,I,_,xv,null)}const f=Sv(e,c,l.isFullyInitialized()||z(n),d.filtersNodes()),h=new xf(i,f,s);return Rv(t,f,n,i,h,a)}function Wu(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new xf(i,e,s);if(z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=hs(e,c,!0,t.filter.filtersNodes());else{const f=F(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=hs(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=J(n),g=a.getNode().getImmediateChild(f);let _;if(z(h))_=r;else{const w=d.getCompleteChild(f);w!=null?gf(h)===".priority"&&w.getChild(fv(h)).isEmpty()?_=w:_=w.updateChild(h,r):_=D.EMPTY_NODE}if(g.equals(_))l=e;else{const w=t.filter.updateChild(a.getNode(),f,_,h,d,o);l=hs(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function lg(t,e){return t.eventCache.isCompleteForChild(e)}function kk(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=ae(n,l);lg(e,F(d))&&(a=Wu(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=ae(n,l);lg(e,F(d))||(a=Wu(t,a,d,c,i,s,o))}),a}function cg(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Vu(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;z(n)?c=r:c=new Q(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,h)=>{if(d.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),_=cg(t,g,h);l=ja(t,l,new Y(f),_,i,s,o,a)}}),c.children.inorderTraversal((f,h)=>{const g=!e.serverCache.isCompleteForChild(f)&&h.value===null;if(!d.hasChild(f)&&!g){const _=e.serverCache.getNode().getImmediateChild(f),w=cg(t,_,h);l=ja(t,l,new Y(f),w,i,s,o,a)}}),l}function xk(t,e,n,r,i,s,o){if(La(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ja(t,e,n,l.getNode().getChild(n),i,s,a,o);if(z(n)){let c=new Q(null);return l.getNode().forEachChild(Zr,(d,f)=>{c=c.set(new Y(d),f)}),Vu(t,e,n,c,i,s,a,o)}else return e}else{let c=new Q(null);return r.foreach((d,f)=>{const h=ae(n,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),Vu(t,e,n,c,i,s,a,o)}}function Rk(t,e,n,r,i){const s=e.serverCache,o=Sv(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return Rv(t,o,n,r,xv,i)}function Nk(t,e,n,r,i,s){let o;if(La(r,n)!=null)return e;{const a=new xf(r,e,i),l=e.eventCache.getNode();let c;if(z(n)||F(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Da(r,_r(e));else{const f=e.serverCache.getNode();x(f instanceof D,"serverChildren would be complete if leaf node"),d=Tf(r,f)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=F(n);let f=kf(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=l.getImmediateChild(d)),f!=null?c=t.filter.updateChild(l,d,f,J(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,D.EMPTY_NODE,J(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Da(r,_r(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||La(r,$())!=null,hs(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new vf(r.getIndex()),s=qT(r);this.processor_=Ek(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(D.EMPTY_NODE,a.getNode(),null),d=new yr(l,o.isFullyInitialized(),i.filtersNodes()),f=new yr(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=yl(f,d),this.eventGenerator_=new tk(this.query_)}get query(){return this.query_}}function Ak(t){return t.viewCache_.serverCache.getNode()}function bk(t,e){const n=_r(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function ug(t){return t.eventRegistrations_.length===0}function Ok(t,e){t.eventRegistrations_.push(e)}function dg(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function fg(t,e,n,r){e.type===St.MERGE&&e.source.queryId!==null&&(x(_r(t.viewCache_),"We should always have a full cache before handling merges"),x(Fu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Ik(t.processor_,i,e,n,r);return Ck(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Nv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Mk(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(s,o)=>{r.push(gi(s,o))}),n.isFullyInitialized()&&r.push(vv(n.getNode())),Nv(t,r,n.getNode(),e)}function Nv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return nk(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fa;class Dk{constructor(){this.views=new Map}}function Lk(t){x(!Fa,"__referenceConstructor has already been defined"),Fa=t}function jk(){return x(Fa,"Reference.ts has not been loaded"),Fa}function Fk(t){return t.views.size===0}function Rf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),fg(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(fg(o,e,n,r));return s}}function Uk(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Da(n,i?r:null),l=!1;a?l=!0:r instanceof D?(a=Tf(n,r),l=!1):(a=D.EMPTY_NODE,l=!1);const c=yl(new yr(a,l,!1),new yr(r,i,!1));return new Pk(e,c)}return o}function zk(t,e,n,r,i,s){const o=Uk(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ok(o,n),Mk(o,n)}function Bk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Wn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(dg(c,n,r)),ug(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(dg(l,n,r)),ug(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Wn(t)&&s.push(new(jk())(e._repo,e._path)),{removed:s,events:o}}function Pv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ei(t,e){let n=null;for(const r of t.views.values())n=n||bk(r,e);return n}function Av(t,e){if(e._queryParams.loadsAllData())return _l(t);{const r=e._queryIdentifier;return t.views.get(r)}}function bv(t,e){return Av(t,e)!=null}function Wn(t){return _l(t)!=null}function _l(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua;function Wk(t){x(!Ua,"__referenceConstructor has already been defined"),Ua=t}function Vk(){return x(Ua,"Reference.ts has not been loaded"),Ua}let Hk=1;class hg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=_k(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ov(t,e,n,r,i){return ok(t.pendingWriteTree_,e,n,r,i),i?Pi(t,new mr(Sf(),e,n)):[]}function $k(t,e,n,r){ak(t.pendingWriteTree_,e,n,r);const i=Q.fromObject(n);return Pi(t,new mi(Sf(),e,i))}function kn(t,e,n=!1){const r=lk(t.pendingWriteTree_,e);if(ck(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set($(),!0):xe(r.children,o=>{s=s.set(new Y(o),!0)}),Pi(t,new Ma(r.path,s,n))}else return[]}function vl(t,e,n){return Pi(t,new mr(Ef(),e,n))}function Gk(t,e,n){const r=Q.fromObject(n);return Pi(t,new mi(Ef(),e,r))}function Kk(t,e){return Pi(t,new Vs(Ef(),e))}function qk(t,e,n){const r=Pf(t,n);if(r){const i=Af(r),s=i.path,o=i.queryId,a=$e(s,e),l=new Vs(Cf(o),a);return bf(t,s,l)}else return[]}function Hu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||bv(o,e))){const l=Bk(o,e,n,r);Fk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(h,g)=>Wn(g));if(d&&!f){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=Jk(h);for(let _=0;_<g.length;++_){const w=g[_],I=w.query,m=Lv(t,w);t.listenProvider_.startListening(gs(I),za(t,I),m.hashFn,m.onComplete)}}}!f&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(gs(e),null):c.forEach(h=>{const g=t.queryToTagMap.get(wl(h));t.listenProvider_.stopListening(gs(h),g)}))}Xk(t,c)}return a}function Yk(t,e,n,r){const i=Pf(t,r);if(i!=null){const s=Af(i),o=s.path,a=s.queryId,l=$e(o,e),c=new mr(Cf(a),l,n);return bf(t,o,c)}else return[]}function Qk(t,e,n,r){const i=Pf(t,r);if(i){const s=Af(i),o=s.path,a=s.queryId,l=$e(o,e),c=Q.fromObject(n),d=new mi(Cf(a),l,c);return bf(t,o,d)}else return[]}function pg(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const _=$e(h,i);s=s||ei(g,_),o=o||Wn(g)});let a=t.syncPointTree_.get(i);a?(o=o||Wn(a),s=s||ei(a,$())):(a=new Dk,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const w=ei(_,$());w&&(s=s.updateImmediateChild(g,w))}));const c=bv(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=wl(e);x(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=Zk();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=If(t.pendingWriteTree_,i);let f=zk(a,e,n,d,s,l);if(!c&&!o&&!r){const h=Av(a,e);f=f.concat(ex(t,e,h))}return f}function Nf(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=$e(o,e),c=ei(a,l);if(c)return c});return Iv(i,e,s,n,!0)}function Pi(t,e){return Mv(e,t.syncPointTree_,null,If(t.pendingWriteTree_,$()))}function Mv(t,e,n,r){if(z(t.path))return Dv(t,e,n,r);{const i=e.get($());n==null&&i!=null&&(n=ei(i,$()));let s=[];const o=F(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=Tv(r,o);s=s.concat(Mv(a,l,c,d))}return i&&(s=s.concat(Rf(i,t,r,n))),s}}function Dv(t,e,n,r){const i=e.get($());n==null&&i!=null&&(n=ei(i,$()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Tv(r,o),d=t.operationForChild(o);d&&(s=s.concat(Dv(d,a,l,c)))}),i&&(s=s.concat(Rf(i,t,r,n))),s}function Lv(t,e){const n=e.query,r=za(t,n);return{hashFn:()=>(Ak(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?qk(t,n._path,r):Kk(t,n._path);{const s=GI(i,n);return Hu(t,n,null,s)}}}}function za(t,e){const n=wl(e);return t.queryToTagMap.get(n)}function wl(t){return t._path.toString()+"$"+t._queryIdentifier}function Pf(t,e){return t.tagToQueryMap.get(e)}function Af(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Y(t.substr(0,e))}}function bf(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=If(t.pendingWriteTree_,e);return Rf(r,n,i,null)}function Jk(t){return t.fold((e,n,r)=>{if(n&&Wn(n))return[_l(n)];{let i=[];return n&&(i=Pv(n)),xe(r,(s,o)=>{i=i.concat(o)}),i}})}function gs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Vk())(t._repo,t._path):t}function Xk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=wl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Zk(){return Hk++}function ex(t,e,n){const r=e._path,i=za(t,e),s=Lv(t,n),o=t.listenProvider_.startListening(gs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)x(!Wn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,f)=>{if(!z(c)&&d&&Wn(d))return[_l(d).query];{let h=[];return d&&(h=h.concat(Pv(d).map(g=>g.query))),xe(f,(g,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(gs(d),za(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Of(n)}node(){return this.node_}}class Mf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new Mf(this.syncTree_,n)}node(){return Nf(this.syncTree_,this.path_)}}const tx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},gg=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return nx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return rx(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},nx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},rx=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},jv=function(t,e,n,r){return Df(e,new Mf(n,t),r)},Fv=function(t,e,n){return Df(t,new Of(e),n)};function Df(t,e,n){const r=t.getPriority().val(),i=gg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=gg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new me(a,ve(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new me(i))),o.forEachChild(le,(a,l)=>{const c=Df(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function jf(t,e){let n=e instanceof Y?e:new Y(e),r=t,i=F(n);for(;i!==null;){const s=hi(r.node.children,i)||{children:{},childCount:0};r=new Lf(i,r,s),n=J(n),i=F(n)}return r}function Ai(t){return t.node.value}function Uv(t,e){t.node.value=e,$u(t)}function zv(t){return t.node.childCount>0}function ix(t){return Ai(t)===void 0&&!zv(t)}function Sl(t,e){xe(t.node.children,(n,r)=>{e(new Lf(n,t,r))})}function Bv(t,e,n,r){n&&e(t),Sl(t,i=>{Bv(i,e,!0)})}function sx(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function io(t){return new Y(t.parent===null?t.name:io(t.parent)+"/"+t.name)}function $u(t){t.parent!==null&&ox(t.parent,t.name,t)}function ox(t,e,n){const r=ix(n),i=Wt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,$u(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,$u(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax=/[\[\].#$\/\u0000-\u001F\u007F]/,lx=/[\[\].#$\u0000-\u001F\u007F]/,Tc=10*1024*1024,Ff=function(t){return typeof t=="string"&&t.length!==0&&!ax.test(t)},Wv=function(t){return typeof t=="string"&&t.length!==0&&!lx.test(t)},cx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Wv(t)},ux=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!uf(t)||t&&typeof t=="object"&&Wt(t,".sv")},dx=function(t,e,n,r){El(dl(t,"value"),e,n)},El=function(t,e,n){const r=n instanceof Y?new kT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+er(r));if(typeof e=="function")throw new Error(t+"contains a function "+er(r)+" with contents = "+e.toString());if(uf(e))throw new Error(t+"contains "+e.toString()+" "+er(r));if(typeof e=="string"&&e.length>Tc/3&&fl(e)>Tc)throw new Error(t+"contains a string greater than "+Tc+" utf8 bytes "+er(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(xe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ff(o)))throw new Error(t+" contains an invalid key ("+o+") "+er(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);xT(r,o),El(t,a,r),RT(r)}),i&&s)throw new Error(t+' contains ".value" child '+er(r)+" in addition to actual children.")}},fx=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Us(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Ff(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(TT);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&ut(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},hx=function(t,e,n,r){const i=dl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];xe(e,(o,a)=>{const l=new Y(o);if(El(i,a,ae(n,l)),gf(l)===".priority"&&!ux(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),fx(i,s)},Vv=function(t,e,n,r){if(!Wv(n))throw new Error(dl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},px=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Vv(t,e,n)},gx=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},mx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ff(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!cx(n))throw new Error(dl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Cl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!mf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Hv(t,e,n){Cl(t,n),$v(t,r=>mf(r,e))}function Rt(t,e,n){Cl(t,n),$v(t,r=>ut(r,e)||ut(e,r))}function $v(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(_x(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function _x(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ds&&Ie("event: "+n.toString()),Ni(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="repo_interrupt",wx=25;class Sx{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new yx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oa(),this.transactionQueueTree_=new Lf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ex(t,e,n){if(t.stats_=hf(t.repoInfo_),t.forceRestClient_||QI())t.server_=new ba(t.repoInfo_,(r,i,s,o)=>{mg(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>yg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new nn(t.repoInfo_,e,(r,i,s,o)=>{mg(t,r,i,s,o)},r=>{yg(t,r)},r=>{Ix(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=tT(t.repoInfo_,()=>new ek(t.stats_,t.server_)),t.infoData_=new YT,t.infoSyncTree_=new hg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=vl(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Uf(t,"connected",!1),t.serverSyncTree_=new hg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Rt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Cx(t){const n=t.infoData_.getNode(new Y(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Il(t){return tx({timestamp:Cx(t)})}function mg(t,e,n,r,i){t.dataUpdateCount++;const s=new Y(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Ta(n,c=>ve(c));o=Qk(t.serverSyncTree_,s,l,i)}else{const l=ve(n);o=Yk(t.serverSyncTree_,s,l,i)}else if(r){const l=Ta(n,c=>ve(c));o=Gk(t.serverSyncTree_,s,l)}else{const l=ve(n);o=vl(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=_i(t,s)),Rt(t.eventQueue_,a,o)}function yg(t,e){Uf(t,"connected",e),e===!1&&xx(t)}function Ix(t,e){xe(e,(n,r)=>{Uf(t,n,r)})}function Uf(t,e,n){const r=new Y("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(r,i);const s=vl(t.infoSyncTree_,r,i);Rt(t.eventQueue_,r,s)}function zf(t){return t.nextWriteId_++}function Tx(t,e,n,r,i){Tl(t,"set",{path:e.toString(),value:n,priority:r});const s=Il(t),o=ve(n,r),a=Nf(t.serverSyncTree_,e),l=Fv(o,a,s),c=zf(t),d=Ov(t.serverSyncTree_,e,l,c,!0);Cl(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const _=h==="ok";_||Ue("set at "+e+" failed: "+h);const w=kn(t.serverSyncTree_,c,!_);Rt(t.eventQueue_,e,w),Gu(t,i,h,g)});const f=Wf(t,e);_i(t,f),Rt(t.eventQueue_,f,[])}function kx(t,e,n,r){Tl(t,"update",{path:e.toString(),value:n});let i=!0;const s=Il(t),o={};if(xe(n,(a,l)=>{i=!1,o[a]=jv(ae(e,a),ve(l),t.serverSyncTree_,s)}),i)Ie("update() called with empty data.  Don't do anything."),Gu(t,r,"ok",void 0);else{const a=zf(t),l=$k(t.serverSyncTree_,e,o,a);Cl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const f=c==="ok";f||Ue("update at "+e+" failed: "+c);const h=kn(t.serverSyncTree_,a,!f),g=h.length>0?_i(t,e):e;Rt(t.eventQueue_,g,h),Gu(t,r,c,d)}),xe(n,c=>{const d=Wf(t,ae(e,c));_i(t,d)}),Rt(t.eventQueue_,e,[])}}function xx(t){Tl(t,"onDisconnectEvents");const e=Il(t),n=Oa();ju(t.onDisconnect_,$(),(i,s)=>{const o=jv(i,s,t.serverSyncTree_,e);wv(n,i,o)});let r=[];ju(n,$(),(i,s)=>{r=r.concat(vl(t.serverSyncTree_,i,s));const o=Wf(t,i);_i(t,o)}),t.onDisconnect_=Oa(),Rt(t.eventQueue_,$(),r)}function Rx(t,e,n){let r;F(e._path)===".info"?r=pg(t.infoSyncTree_,e,n):r=pg(t.serverSyncTree_,e,n),Hv(t.eventQueue_,e._path,r)}function Gv(t,e,n){let r;F(e._path)===".info"?r=Hu(t.infoSyncTree_,e,n):r=Hu(t.serverSyncTree_,e,n),Hv(t.eventQueue_,e._path,r)}function Nx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(vx)}function Tl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function Gu(t,e,n,r){e&&Ni(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Kv(t,e,n){return Nf(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function Bf(t,e=t.transactionQueueTree_){if(e||kl(t,e),Ai(e)){const n=Yv(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Px(t,io(e),n)}else zv(e)&&Sl(e,n=>{Bf(t,n)})}function Px(t,e,n){const r=n.map(c=>c.currentWriteId),i=Kv(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];x(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=$e(e,d.path);s=s.updateChild(f,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Tl(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(kn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();kl(t,jf(t.transactionQueueTree_,e)),Bf(t,t.transactionQueueTree_),Rt(t.eventQueue_,e,d);for(let h=0;h<f.length;h++)Ni(f[h])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ue("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}_i(t,e)}},o)}function _i(t,e){const n=qv(t,e),r=io(n),i=Yv(t,n);return Ax(t,i,r),r}function Ax(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=$e(n,l.path);let d=!1,f;if(x(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,f=l.abortReason,i=i.concat(kn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=wx)d=!0,f="maxretry",i=i.concat(kn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Kv(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){El("transaction failed: Data returned ",g,l.path);let _=ve(g);typeof g=="object"&&g!=null&&Wt(g,".priority")||(_=_.updatePriority(h.getPriority()));const I=l.currentWriteId,m=Il(t),p=Fv(_,h,m);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=p,l.currentWriteId=zf(t),o.splice(o.indexOf(I),1),i=i.concat(Ov(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(kn(t.serverSyncTree_,I,!0))}else d=!0,f="nodata",i=i.concat(kn(t.serverSyncTree_,l.currentWriteId,!0))}Rt(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}kl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ni(r[a]);Bf(t,t.transactionQueueTree_)}function qv(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&Ai(r)===void 0;)r=jf(r,n),e=J(e),n=F(e);return r}function Yv(t,e){const n=[];return Qv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Qv(t,e,n){const r=Ai(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Sl(e,i=>{Qv(t,i,n)})}function kl(t,e){const n=Ai(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Uv(e,n.length>0?n:void 0)}Sl(e,r=>{kl(t,r)})}function Wf(t,e){const n=io(qv(t,e)),r=jf(t.transactionQueueTree_,e);return sx(r,i=>{kc(t,i)}),kc(t,r),Bv(r,i=>{kc(t,i)}),n}function kc(t,e){const n=Ai(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(kn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Uv(e,void 0):n.length=s+1,Rt(t.eventQueue_,io(e),i);for(let o=0;o<r.length;o++)Ni(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ox(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const _g=function(t,e){const n=Mx(t),r=n.namespace;n.domain==="firebase.com"&&un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||BI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new rv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Y(n.pathString)}},Mx=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(i=bx(t.substring(d,f)));const h=Ox(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class Lx{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:gf(this._path)}get ref(){return new Gn(this._repo,this._path)}get _queryIdentifier(){const e=rg(this._queryParams),n=df(e);return n==="{}"?"default":n}get _queryObject(){return rg(this._queryParams)}isEqual(e){if(e=De(e),!(e instanceof Vf))return!1;const n=this._repo===e._repo,r=mf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+IT(this._path)}}class Gn extends Vf{constructor(e,n){super(e,n,new wf,!1)}get parent(){const e=fv(this._path);return e===null?null:new Gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ba{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Y(e),r=Ku(this.ref,e);return new Ba(this._node.getChild(n),r,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ba(i,Ku(this.ref,r),le)))}hasChild(e){const n=new Y(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Hf(t,e){return t=De(t),t._checkNotDeleted("ref"),e!==void 0?Ku(t._root,e):t._root}function Ku(t,e){return t=De(t),F(t._path)===null?px("child","path",e):Vv("child","path",e),new Gn(t._repo,ae(t._path,e))}function Fx(t,e){t=De(t),gx("set",t._path),dx("set",e,t._path);const n=new eo;return Tx(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Ux(t,e){hx("update",e,t._path);const n=new eo;return kx(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class $f{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Dx("value",this,new Ba(e.snapshotNode,new Gn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lx(this,e,n):null}matches(e){return e instanceof $f?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function zx(t,e,n,r,i){const s=new jx(n,void 0),o=new $f(s);return Rx(t._repo,t,o),()=>Gv(t._repo,t,o)}function Bx(t,e,n,r){return zx(t,"value",e)}function Wx(t,e,n){Gv(t._repo,t,null)}Lk(Gn);Wk(Gn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx="FIREBASE_DATABASE_EMULATOR_HOST",qu={};let Hx=!1;function $x(t,e,n,r){t.repoInfo_=new rv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Gx(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=_g(s,i),a=o.repoInfo,l;typeof process<"u"&&Up&&(l=Up[Vx]),l?(s=`http://${l}?ns=${a.namespace}`,o=_g(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new XI(t.name,t.options,e);mx("Invalid Firebase Database URL",o),z(o.path)||un("Database URL must point to the root of a Firebase Database (not including a child path).");const d=qx(a,t,c,new JI(t.name,n));return new Yx(d,t)}function Kx(t,e){const n=qu[e];(!n||n[t.key]!==t)&&un(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Nx(t),delete n[t.key]}function qx(t,e,n,r){let i=qu[e.name];i||(i={},qu[e.name]=i);let s=i[t.toURLString()];return s&&un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Sx(t,Hx,n,r),i[t.toURLString()]=s,s}class Yx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ex(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gn(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Kx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&un("Cannot call "+e+" on a deleted database.")}}function Qx(t=nf(),e){const n=Ir(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=BE("database");r&&Jx(n,...r)}return n}function Jx(t,e,n,r={}){t=De(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&un("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new qo(qo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:WE(r.mockUserToken,t.app.options.projectId);s=new qo(o)}$x(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(t){DI(Ri),zt(new xt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Gx(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ft(zp,Bp,t),ft(zp,Bp,"esm2017")}nn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};nn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Xx();function Gf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Jv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zx=Jv,Xv=new Cr("auth","Firebase",Jv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new hl("@firebase/auth");function eR(t,...e){Wa.logLevel<=q.WARN&&Wa.warn(`Auth (${Ri}): ${t}`,...e)}function Yo(t,...e){Wa.logLevel<=q.ERROR&&Wa.error(`Auth (${Ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,...e){throw Kf(t,...e)}function Ft(t,...e){return Kf(t,...e)}function Zv(t,e,n){const r=Object.assign(Object.assign({},Zx()),{[e]:n});return new Cr("auth","Firebase",r).create(e,{appName:t.name})}function rn(t){return Zv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xv.create(t,...e)}function M(t,e,...n){if(!t)throw Kf(e,...n)}function Xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yo(e),new Error(e)}function dn(t,e){t||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tR(){return vg()==="http:"||vg()==="https:"}function vg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tR()||d_()||"connection"in navigator)?navigator.onLine:!0}function rR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=Zd()||f_()}get(){return nR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qf(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=new so(3e4,6e4);function Kn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qn(t,e,n,r,i={}){return t0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=xi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return VE()||(c.referrerPolicy="no-referrer"),e0.fetch()(n0(t,t.config.apiHost,n,a),c)})}async function t0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iR),e);try{const i=new aR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Oo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Oo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Oo(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Zv(t,d,c);Nt(t,d)}}catch(i){if(i instanceof Bt)throw i;Nt(t,"network-request-failed",{message:String(i)})}}async function oo(t,e,n,r,i={}){const s=await qn(t,e,n,r,i);return"mfaPendingCredential"in s&&Nt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function n0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?qf(t.config,i):`${t.config.apiScheme}://${i}`}function oR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ft(this.auth,"network-request-failed")),sR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ft(t,e,r);return i.customData._tokenResponse=n,i}function wg(t){return t!==void 0&&t.enterprise!==void 0}class lR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return oR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function cR(t,e){return qn(t,"GET","/v2/recaptchaConfig",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uR(t,e){return qn(t,"POST","/v1/accounts:delete",e)}async function r0(t,e){return qn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dR(t,e=!1){const n=De(t),r=await n.getIdToken(e),i=Yf(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ms(xc(i.auth_time)),issuedAtTime:ms(xc(i.iat)),expirationTime:ms(xc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xc(t){return Number(t)*1e3}function Yf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ia(n);return i?JSON.parse(i):(Yo("Failed to decode base64 JWT payload"),null)}catch(i){return Yo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Sg(t){const e=Yf(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&fR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ms(this.lastLoginAt),this.creationTime=ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hs(t,r0(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?i0(s.providerUserInfo):[],a=gR(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Qu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function pR(t){const e=De(t);await Va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function i0(t){return t.map(e=>{var{providerId:n}=e,r=Gf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mR(t,e){const n=await t0(t,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=n0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",e0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yR(t,e){return qn(t,"POST","/v2/accounts:revokeToken",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=Sg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ti;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ti,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Gf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hs(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dR(this,e)}reload(){return pR(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Va(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(rn(this.auth));const e=await this.getIdToken();return await Hs(this,uR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:y,emailVerified:v,isAnonymous:E,providerData:S,stsTokenManager:T}=n;M(y&&T,e,"internal-error");const R=ti.fromJSON(this.name,T);M(typeof y=="string",e,"internal-error"),gn(f,e.name),gn(h,e.name),M(typeof v=="boolean",e,"internal-error"),M(typeof E=="boolean",e,"internal-error"),gn(g,e.name),gn(_,e.name),gn(w,e.name),gn(I,e.name),gn(m,e.name),gn(p,e.name);const W=new Zt({uid:y,auth:e,email:h,emailVerified:v,displayName:f,isAnonymous:E,photoURL:_,phoneNumber:g,tenantId:w,stsTokenManager:R,createdAt:m,lastLoginAt:p});return S&&Array.isArray(S)&&(W.providerData=S.map(O=>Object.assign({},O))),I&&(W._redirectEventId=I),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new ti;i.updateFromServerResponse(n);const s=new Zt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Va(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?i0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ti;a.updateFromIdToken(r);const l=new Zt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Qu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=new Map;function en(t){dn(t instanceof Function,"Expected a class definition");let e=Eg.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Eg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}s0.type="NONE";const Cg=s0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t,e,n){return`firebase:${t}:${e}:${n}`}class ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ni(en(Cg),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||en(Cg);const o=Qo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Zt._fromJSON(e,d);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ni(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ni(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(o0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d0(e))return"Blackberry";if(f0(e))return"Webos";if(a0(e))return"Safari";if((e.includes("chrome/")||l0(e))&&!e.includes("edge/"))return"Chrome";if(u0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function o0(t=ze()){return/firefox\//i.test(t)}function a0(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function l0(t=ze()){return/crios\//i.test(t)}function c0(t=ze()){return/iemobile/i.test(t)}function u0(t=ze()){return/android/i.test(t)}function d0(t=ze()){return/blackberry/i.test(t)}function f0(t=ze()){return/webos/i.test(t)}function Qf(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _R(t=ze()){var e;return Qf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vR(){return HE()&&document.documentMode===10}function h0(t=ze()){return Qf(t)||u0(t)||f0(t)||d0(t)||/windows phone/i.test(t)||c0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t,e=[]){let n;switch(t){case"Browser":n=Ig(ze());break;case"Worker":n=`${Ig(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(t,e={}){return qn(t,"GET","/v2/passwordPolicy",Kn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=6;class CR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ER,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tg(this),this.idTokenSubscription=new Tg(this),this.beforeStateQueue=new wR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ni.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await r0(this,{idToken:e}),r=await Zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Va(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(rn(this));const n=e?De(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SR(this),n=new CR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Cr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await ni.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=p0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xr(t){return De(t)}class Tg{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZE(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TR(t){xl=t}function g0(t){return xl.loadJS(t)}function kR(){return xl.recaptchaEnterpriseScript}function xR(){return xl.gapiScript}function RR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const NR="recaptcha-enterprise",PR="NO_RECAPTCHA";class AR{constructor(e){this.type=NR,this.auth=xr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{cR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new lR(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;wg(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(PR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&wg(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=kR();l.length!==0&&(l+=a),g0(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function kg(t,e,n,r=!1){const i=new AR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ju(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await kg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await kg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(t,e){const n=Ir(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ls(s,e??{}))return i;Nt(i,"already-initialized")}return n.initialize({options:e})}function OR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function MR(t,e,n){const r=xr(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=m0(e),{host:o,port:a}=DR(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),LR()}function m0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DR(t){const e=m0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xg(o)}}}function xg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,n){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}async function jR(t,e){return qn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(t,e){return oo(t,"POST","/v1/accounts:signInWithPassword",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(t,e){return oo(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}async function zR(t,e){return oo(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends Jf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $s(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $s(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ju(e,n,"signInWithPassword",FR);case"emailLink":return UR(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ju(e,r,"signUpPassword",jR);case"emailLink":return zR(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(t,e){return oo(t,"POST","/v1/accounts:signInWithIdp",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR="http://localhost";class vr extends Jf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Gf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ri(e,n)}buildRequest(){const e={requestUri:BR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function VR(t){const e=Zi(es(t)).link,n=e?Zi(es(e)).deep_link_id:null,r=Zi(es(t)).deep_link_id;return(r?Zi(es(r)).link:null)||r||n||e||t}class Xf{constructor(e){var n,r,i,s,o,a;const l=Zi(es(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=WR((i=l.mode)!==null&&i!==void 0?i:null);M(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=VR(e);try{return new Xf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.providerId=bi.PROVIDER_ID}static credential(e,n){return $s._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xf.parseLink(n);return M(r,"argument-error"),$s._fromEmailAndCode(e,r.code,r.tenantId)}}bi.PROVIDER_ID="password";bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends y0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends ao{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends ao{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends ao{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HR(t,e){return oo(t,"POST","/v1/accounts:signUp",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zt._fromIdTokenResponse(e,r,i),o=Rg(r);return new wr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Rg(r);return new wr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Rg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends Bt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ha.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ha(e,n,r,i)}}function _0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ha._fromErrorAndOperation(t,s,e,r):s})}async function $R(t,e,n=!1){const r=await Hs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GR(t,e,n=!1){const{auth:r}=t;if(Mt(r.app))return Promise.reject(rn(r));const i="reauthenticate";try{const s=await Hs(t,_0(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Yf(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),wr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(t,e,n=!1){if(Mt(t.app))return Promise.reject(rn(t));const r="signIn",i=await _0(t,r,e),s=await wr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function KR(t,e){return v0(xr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w0(t){const e=xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qR(t,e,n){if(Mt(t.app))return Promise.reject(rn(t));const r=xr(t),o=await Ju(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&w0(t),l}),a=await wr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function YR(t,e,n){return Mt(t.app)?Promise.reject(rn(t)):KR(De(t),bi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&w0(t),r})}function QR(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function JR(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function XR(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function ZR(t){return De(t).signOut()}const $a="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($a,"1"),this.storage.removeItem($a),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=1e3,tN=10;class E0 extends S0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=h0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}E0.type="LOCAL";const nN=E0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0 extends S0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}C0.type="SESSION";const I0=C0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Rl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await rN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Zf("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(){return window}function sN(t){Ut().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function oN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lN(){return T0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="firebaseLocalStorageDb",cN=1,Ga="firebaseLocalStorage",x0="fbase_key";class lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nl(t,e){return t.transaction([Ga],e?"readwrite":"readonly").objectStore(Ga)}function uN(){const t=indexedDB.deleteDatabase(k0);return new lo(t).toPromise()}function Xu(){const t=indexedDB.open(k0,cN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ga,{keyPath:x0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ga)?e(r):(r.close(),await uN(),e(await Xu()))})})}async function Ng(t,e,n){const r=Nl(t,!0).put({[x0]:e,value:n});return new lo(r).toPromise()}async function dN(t,e){const n=Nl(t,!1).get(e),r=await new lo(n).toPromise();return r===void 0?null:r.value}function Pg(t,e){const n=Nl(t,!0).delete(e);return new lo(n).toPromise()}const fN=800,hN=3;class R0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return T0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rl._getInstance(lN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oN(),!this.activeServiceWorker)return;this.sender=new iN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xu();return await Ng(e,$a,"1"),await Pg(e,$a),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ng(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Nl(i,!1).getAll();return new lo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R0.type="LOCAL";const pN=R0;new so(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t,e){return e?en(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh extends Jf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mN(t){return v0(t.auth,new eh(t),t.bypassAuthState)}function yN(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),GR(n,new eh(t),t.bypassAuthState)}async function _N(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),$R(n,new eh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mN;case"linkViaPopup":case"linkViaRedirect":return _N;case"reauthViaPopup":case"reauthViaRedirect":return yN;default:Nt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=new so(2e3,1e4);class $r extends N0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Zf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vN.get())};e()}}$r.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN="pendingRedirect",Jo=new Map;class SN extends N0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jo.get(this.auth._key());if(!e){try{const r=await EN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jo.set(this.auth._key(),e)}return this.bypassAuthState||Jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EN(t,e){const n=TN(e),r=IN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function CN(t,e){Jo.set(t._key(),e)}function IN(t){return en(t._redirectPersistence)}function TN(t){return Qo(wN,t.config.apiKey,t.name)}async function kN(t,e,n=!1){if(Mt(t.app))return Promise.reject(rn(t));const r=xr(t),i=gN(r,e),o=await new SN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN=10*60*1e3;class RN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!P0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ag(e))}saveEventToCache(e){this.cachedEventUids.add(Ag(e)),this.lastProcessedEventTime=Date.now()}}function Ag(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function P0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return P0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e={}){return qn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bN=/^https?/;async function ON(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PN(t);for(const n of e)try{if(MN(n))return}catch{}Nt(t,"unauthorized-domain")}function MN(t){const e=Yu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bN.test(n))return!1;if(AN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=new so(3e4,6e4);function bg(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LN(t){return new Promise((e,n)=>{var r,i,s;function o(){bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bg(),n(Ft(t,"network-request-failed"))},timeout:DN.get()})}if(!((i=(r=Ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ut().gapi)===null||s===void 0)&&s.load)o();else{const a=RR("iframefcb");return Ut()[a]=()=>{gapi.load?o():n(Ft(t,"network-request-failed"))},g0(`${xR()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function jN(t){return Xo=Xo||LN(t),Xo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=new so(5e3,15e3),UN="__/auth/iframe",zN="emulator/auth/iframe",BN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function VN(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qf(e,zN):`https://${t.config.authDomain}/${UN}`,r={apiKey:e.apiKey,appName:t.name,v:Ri},i=WN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xi(r).slice(1)}`}async function HN(t){const e=await jN(t),n=Ut().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:VN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),a=Ut().setTimeout(()=>{s(o)},FN.get());function l(){Ut().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GN=500,KN=600,qN="_blank",YN="http://localhost";class Og{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QN(t,e,n,r=GN,i=KN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},$N),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ze().toLowerCase();n&&(a=l0(c)?qN:n),o0(c)&&(e=e||YN,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[g,_])=>`${h}${g}=${_},`,"");if(_R(c)&&a!=="_self")return JN(e||"",a),new Og(null);const f=window.open(e||"",a,d);M(f,t,"popup-blocked");try{f.focus()}catch{}return new Og(f)}function JN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN="__/auth/handler",ZN="emulator/auth/handler",eP=encodeURIComponent("fac");async function Mg(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ri,eventId:i};if(e instanceof y0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof ao){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${eP}=${encodeURIComponent(l)}`:"";return`${tP(t)}?${xi(a).slice(1)}${c}`}function tP({config:t}){return t.emulator?qf(t,ZN):`https://${t.authDomain}/${XN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc="webStorageSupport";class nP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=I0,this._completeRedirectFn=kN,this._overrideRedirectResult=CN}async _openPopup(e,n,r,i){var s;dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Mg(e,n,r,Yu(),i);return QN(e,o,Zf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Mg(e,n,r,Yu(),i);return sN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await HN(e),r=new RN(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rc,{type:Rc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rc];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ON(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return h0()||a0()||Qf()}}const rP=nP;var Dg="@firebase/auth",Lg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oP(t){zt(new xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:p0(t)},c=new IR(r,i,s,l);return OR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zt(new xt("auth-internal",e=>{const n=xr(e.getProvider("auth").getImmediate());return(r=>new iP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(Dg,Lg,sP(t)),ft(Dg,Lg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=5*60,lP=u_("authIdTokenMaxAge")||aP;let jg=null;const cP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lP)return;const i=n==null?void 0:n.token;jg!==i&&(jg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uP(t=nf()){const e=Ir(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bR(t,{popupRedirectResolver:rP,persistence:[pN,nN,I0]}),r=u_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=cP(s.toString());JR(n,o,()=>o(n.currentUser)),QR(n,a=>o(a))}}const i=l_("auth");return i&&MR(n,`http://${i}`),n}function dP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}TR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ft("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oP("Browser");const A0=tf(cf),th=Qx(A0),Pl=uP(A0),fP=(t,e)=>YR(Pl,t,e),Fg=()=>ZR(Pl),hP=(t,e)=>qR(Pl,t,e),pP=t=>XR(Pl,t),qi=(t,e)=>Fx(Hf(th,t),e),Ae=(t,e)=>Ux(Hf(th,t),e);function Gs(t,e){const n=Hf(th,t);return Bx(n,r=>e(r.val())),()=>Wx(n)}const Ug={phase:"lobby",players:{},votes:{},kickedPlayer:"",votingOpen:!1,impostorCount:1,gameDurationMs:45*60*1e3,gameRemainingMs:45*60*1e3,gameTimerRunning:!1,gameTimerStartedAt:0,gameStarted:!1,createdAt:0},Dt={Red:"#c51111",Blue:"#132ed1",Green:"#117f2d",Pink:"#ed54ba",Orange:"#ef7d0e",Yellow:"#f5f557",Black:"#8394a4",White:"#d6e0f0",Purple:"#6b31bc",Brown:"#71491e",Cyan:"#38fedc",Lime:"#50ef39",Maroon:"#6b2737",Rose:"#ff63d4",Banana:"#fff883",Coral:"#ec7578",Tan:"#c49c6b",Sky:"#5af0ee"},zg=Object.keys(Dt),b={bg:"#070b12",card:"rgba(12,17,30,0.97)",border:"rgba(255,255,255,0.07)",accent:"#e8334a"};function gP(){const t="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";return Array.from({length:6},()=>t[Math.floor(Math.random()*t.length)]).join("")}function ii({color:t=b.accent,children:e,style:n}){return u.jsx("span",{style:{background:`${t}22`,border:`1px solid ${t}55`,color:t,borderRadius:999,padding:"3px 11px",fontSize:"0.62rem",letterSpacing:"2px",fontWeight:700,textTransform:"uppercase",...n},children:e})}function Ce({children:t,onClick:e,disabled:n,color:r=b.accent,full:i,danger:s,style:o}){return u.jsx("button",{onClick:e,disabled:n,style:{background:n?"#0e1422":s?"#1a0505":`${r}14`,border:`1.5px solid ${n?"#1e2d50":r}`,color:n?"#2a3a5a":r,borderRadius:11,padding:i?"13px 18px":"9px 18px",fontSize:"0.8rem",letterSpacing:"1.5px",fontWeight:700,cursor:n?"not-allowed":"pointer",textTransform:"uppercase",width:i?"100%":void 0,transition:"all 0.15s",opacity:n?.5:1,...o},children:t})}function Oe({children:t,style:e}){return u.jsx("div",{style:{background:b.card,border:`1px solid ${b.border}`,borderRadius:16,padding:20,...e},children:t})}function Ze({children:t}){return u.jsx("div",{style:{fontSize:"0.6rem",letterSpacing:"3px",color:"#2a3a60",textTransform:"uppercase",marginBottom:12,paddingBottom:8,borderBottom:`1px solid ${b.border}`},children:t})}function nh({phase:t}){const e={lobby:["#ffcc00","Lobby"],voting:["#e8334a","Voting"],results:["#b044ff","Results"]},[n,r]=e[t]||["#555",t];return u.jsx(ii,{color:n,children:r})}function Tt(){const t=Array.from({length:55},(e,n)=>({x:((Math.sin(n*137.508)*.5+.5)*100).toFixed(2),y:((Math.cos(n*97.31)*.5+.5)*100).toFixed(2),r:n%4===0?1.3:.65,o:(.1+n%6*.06).toFixed(2)}));return u.jsx("svg",{style:{position:"fixed",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0},preserveAspectRatio:"xMidYMid slice",viewBox:"0 0 100 100",children:t.map((e,n)=>u.jsx("circle",{cx:`${e.x}%`,cy:`${e.y}%`,r:e.r,fill:"white",opacity:e.o},n))})}function Ks({color:t=b.accent}){return u.jsx("div",{style:{width:36,height:36,border:`3px solid ${t}`,borderTopColor:"transparent",borderRadius:"50%",animation:"spin 0.8s linear infinite",margin:"0 auto"}})}function si({value:t,onChange:e,onKeyDown:n,placeholder:r,type:i="text",style:s}){return u.jsx("input",{type:i,value:t,onChange:e,onKeyDown:n,placeholder:r,style:{width:"100%",background:"#080d18",border:`2px solid ${b.border}`,color:"#d0daf0",borderRadius:10,padding:"12px 14px",fontSize:"0.9rem",outline:"none",...s}})}const mP=[["1","Go to firebase.google.com and sign in with Google"],["2","Click Add project→ give it a name → Continue"],["3","Sidebar → Realtime Database → Create database → Start in test mode"],["4","Sidebar → Authentication → Get started → Enable Email/Password"],["5","Click ⚙ gear → Project Settings → Your apps → </> → register web app"],["6","Copy the firebaseConfig and paste into src/firebase/config.js"],["7","Run npm install && npm run dev"],["8","Go to /admin to create your admin account, then create a room 🚀"]];function yP(){return u.jsxs("div",{style:{minHeight:"100vh",background:b.bg,display:"flex",alignItems:"center",justifyContent:"center",padding:20,position:"relative"},children:[u.jsx(Tt,{}),u.jsxs("div",{style:{position:"relative",zIndex:1,width:"min(500px,100%)",textAlign:"center"},children:[u.jsx("div",{style:{fontSize:"3rem",marginBottom:12},children:"🔥"}),u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",fontSize:"1.6rem",letterSpacing:"3px",color:b.accent,marginBottom:6},children:"FIREBASE SETUP"}),u.jsx("div",{style:{color:"#3a4a6a",fontSize:"0.78rem",lineHeight:1.9,marginBottom:24},children:"Paste your Firebase config to enable real-time sync across all devices."}),u.jsxs(Oe,{style:{textAlign:"left"},children:[u.jsx(Ze,{children:"Setup Guide"}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:mP.map(([t,e])=>u.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start"},children:[u.jsx("div",{style:{width:24,height:24,borderRadius:"50%",background:`${b.accent}22`,border:`1px solid ${b.accent}55`,color:b.accent,fontSize:"0.7rem",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1,fontWeight:700},children:t}),u.jsx("div",{style:{color:"#8a9ab8",fontSize:"0.78rem",lineHeight:1.7},children:e})]},t))})]})]})]})}function je({color:t="Red",size:e=48,dead:n=!1,glow:r=!1,style:i={}}){const s=Dt[t]||"#888",o=n?"grayscale(1) brightness(0.35)":r?`drop-shadow(0 0 10px ${s}) drop-shadow(0 0 22px ${s}99)`:"drop-shadow(0 2px 8px #000a)";return u.jsxs("svg",{width:e,height:e*1.25,viewBox:"0 0 80 100",style:{filter:o,transition:"filter 0.3s",display:"block",...i},children:[u.jsx("ellipse",{cx:"40",cy:"32",rx:"28",ry:"26",fill:s}),u.jsx("ellipse",{cx:"40",cy:"28",rx:"18",ry:"14",fill:n?"#333":"#7dd8ff",opacity:"0.93"}),!n&&u.jsx("ellipse",{cx:"34",cy:"22",rx:"6",ry:"4",fill:"white",opacity:"0.45"}),u.jsx("ellipse",{cx:"40",cy:"68",rx:"28",ry:"26",fill:s}),u.jsx("rect",{x:"62",y:"50",width:"13",height:"22",rx:"5",fill:s,opacity:"0.8"}),u.jsx("rect",{x:"63",y:"53",width:"11",height:"16",rx:"3",fill:"#00000033"}),u.jsx("rect",{x:"22",y:"86",width:"14",height:"12",rx:"5",fill:s}),u.jsx("rect",{x:"44",y:"86",width:"14",height:"12",rx:"5",fill:s}),n&&u.jsxs(u.Fragment,{children:[u.jsx("line",{x1:"28",y1:"22",x2:"36",y2:"30",stroke:"#ff3a3a",strokeWidth:"3",strokeLinecap:"round"}),u.jsx("line",{x1:"36",y1:"22",x2:"28",y2:"30",stroke:"#ff3a3a",strokeWidth:"3",strokeLinecap:"round"}),u.jsx("line",{x1:"44",y1:"22",x2:"52",y2:"30",stroke:"#ff3a3a",strokeWidth:"3",strokeLinecap:"round"}),u.jsx("line",{x1:"52",y1:"22",x2:"44",y2:"30",stroke:"#ff3a3a",strokeWidth:"3",strokeLinecap:"round"})]})]})}function _P(){const[t,e]=A.useState("login"),[n,r]=A.useState(""),[i,s]=A.useState(""),[o,a]=A.useState(""),[l,c]=A.useState(""),[d,f]=A.useState(!1),[h,g]=A.useState(!1),_=()=>{g(!0),setTimeout(()=>g(!1),500)},w=async()=>{if(c(""),!n.trim()||!i){c("Fill in all fields"),_();return}if(t==="register"&&i!==o){c("Passwords don't match"),_();return}if(i.length<6){c("Password must be at least 6 characters"),_();return}f(!0);try{t==="login"?await fP(n.trim(),i):await hP(n.trim(),i)}catch(I){c({"auth/user-not-found":"No admin account found. Register first.","auth/wrong-password":"Wrong password.","auth/invalid-email":"Invalid email address.","auth/email-already-in-use":"Email already registered. Login instead.","auth/invalid-credential":"Wrong email or password."}[I.code]||I.message),_()}finally{f(!1)}};return u.jsxs("div",{style:{minHeight:"100vh",background:b.bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20,position:"relative"},children:[u.jsx(Tt,{}),u.jsxs("div",{style:{position:"relative",zIndex:1,width:"min(380px,100%)",textAlign:"center"},children:[u.jsxs("div",{style:{marginBottom:28},children:[u.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:u.jsx(je,{color:"Red",size:68,glow:!0})}),u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",fontSize:"1.8rem",letterSpacing:"5px",color:b.accent},children:"ADMIN"}),u.jsx("div",{style:{color:"#2a3a60",fontSize:"0.65rem",letterSpacing:"4px",marginTop:4},children:"EMERGENCY CONTROL PANEL"})]}),u.jsxs(Oe,{style:{animation:h?"shake 0.4s ease":"none",textAlign:"left"},children:[u.jsx(Ze,{children:t==="login"?"Sign In":"Create Admin Account"}),l&&u.jsx("div",{style:{background:"#1a0505",border:"1px solid #c5111133",borderRadius:8,padding:"10px 12px",color:"#ff5555",fontSize:"0.73rem",marginBottom:14,lineHeight:1.6},children:l}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:14},children:[u.jsx(si,{type:"email",value:n,onChange:I=>{r(I.target.value),c("")},onKeyDown:I=>I.key==="Enter"&&w(),placeholder:"Admin email…"}),u.jsx(si,{type:"password",value:i,onChange:I=>{s(I.target.value),c("")},onKeyDown:I=>I.key==="Enter"&&w(),placeholder:"Password…"}),t==="register"&&u.jsx(si,{type:"password",value:o,onChange:I=>{a(I.target.value),c("")},onKeyDown:I=>I.key==="Enter"&&w(),placeholder:"Confirm password…"})]}),u.jsx(Ce,{full:!0,onClick:w,disabled:d,color:b.accent,children:d?"Please wait…":t==="login"?"🔐 Sign In":"✅ Create Account"}),u.jsx("div",{style:{marginTop:16,textAlign:"center"},children:u.jsx("button",{onClick:()=>{e(t==="login"?"register":"login"),c("")},style:{background:"none",border:"none",color:"#3a4a6a",fontSize:"0.7rem",cursor:"pointer",letterSpacing:"1px",textDecoration:"underline"},children:t==="login"?"No account? Register here":"Already have an account? Sign in"})})]}),u.jsxs("div",{style:{marginTop:20,color:"#1e2e50",fontSize:"0.65rem",letterSpacing:"2px",textAlign:"center"},children:["ARE YOU A PLAYER?"," ",u.jsx("a",{href:"/",style:{color:"#4488ff",textDecoration:"none"},children:"JOIN AS CREWMATE →"})]})]})]})}var co={},vP=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},b0={},ot={};let rh;const wP=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];ot.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};ot.getSymbolTotalCodewords=function(e){return wP[e]};ot.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};ot.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');rh=e};ot.isKanjiModeEnabled=function(){return typeof rh<"u"};ot.toSJIS=function(e){return rh(e)};var Al={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(Al);function O0(){this.buffer=[],this.length=0}O0.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var SP=O0;function uo(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}uo.prototype.set=function(t,e,n,r){const i=t*this.size+e;this.data[i]=n,r&&(this.reservedBit[i]=!0)};uo.prototype.get=function(t,e){return this.data[t*this.size+e]};uo.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};uo.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var EP=uo,M0={};(function(t){const e=ot.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,s=e(r),o=s===145?26:Math.ceil((s-13)/(2*i-2))*2,a=[s-7];for(let l=1;l<i-1;l++)a[l]=a[l-1]-o;return a.push(6),a.reverse()},t.getPositions=function(r){const i=[],s=t.getRowColCoords(r),o=s.length;for(let a=0;a<o;a++)for(let l=0;l<o;l++)a===0&&l===0||a===0&&l===o-1||a===o-1&&l===0||i.push([s[a],s[l]]);return i}})(M0);var D0={};const CP=ot.getSymbolSize,Bg=7;D0.getPositions=function(e){const n=CP(e);return[[0,0],[n-Bg,0],[0,n-Bg]]};var L0={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const s=i.size;let o=0,a=0,l=0,c=null,d=null;for(let f=0;f<s;f++){a=l=0,c=d=null;for(let h=0;h<s;h++){let g=i.get(f,h);g===c?a++:(a>=5&&(o+=e.N1+(a-5)),c=g,a=1),g=i.get(h,f),g===d?l++:(l>=5&&(o+=e.N1+(l-5)),d=g,l=1)}a>=5&&(o+=e.N1+(a-5)),l>=5&&(o+=e.N1+(l-5))}return o},t.getPenaltyN2=function(i){const s=i.size;let o=0;for(let a=0;a<s-1;a++)for(let l=0;l<s-1;l++){const c=i.get(a,l)+i.get(a,l+1)+i.get(a+1,l)+i.get(a+1,l+1);(c===4||c===0)&&o++}return o*e.N2},t.getPenaltyN3=function(i){const s=i.size;let o=0,a=0,l=0;for(let c=0;c<s;c++){a=l=0;for(let d=0;d<s;d++)a=a<<1&2047|i.get(c,d),d>=10&&(a===1488||a===93)&&o++,l=l<<1&2047|i.get(d,c),d>=10&&(l===1488||l===93)&&o++}return o*e.N3},t.getPenaltyN4=function(i){let s=0;const o=i.data.length;for(let l=0;l<o;l++)s+=i.data[l];return Math.abs(Math.ceil(s*100/o/5)-10)*e.N4};function n(r,i,s){switch(r){case t.Patterns.PATTERN000:return(i+s)%2===0;case t.Patterns.PATTERN001:return i%2===0;case t.Patterns.PATTERN010:return s%3===0;case t.Patterns.PATTERN011:return(i+s)%3===0;case t.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case t.Patterns.PATTERN101:return i*s%2+i*s%3===0;case t.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case t.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(i,s){const o=s.size;for(let a=0;a<o;a++)for(let l=0;l<o;l++)s.isReserved(l,a)||s.xor(l,a,n(i,l,a))},t.getBestMask=function(i,s){const o=Object.keys(t.Patterns).length;let a=0,l=1/0;for(let c=0;c<o;c++){s(c),t.applyMask(c,i);const d=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(c,i),d<l&&(l=d,a=c)}return a}})(L0);var bl={};const xn=Al,Mo=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Do=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];bl.getBlocksCount=function(e,n){switch(n){case xn.L:return Mo[(e-1)*4+0];case xn.M:return Mo[(e-1)*4+1];case xn.Q:return Mo[(e-1)*4+2];case xn.H:return Mo[(e-1)*4+3];default:return}};bl.getTotalCodewordsCount=function(e,n){switch(n){case xn.L:return Do[(e-1)*4+0];case xn.M:return Do[(e-1)*4+1];case xn.Q:return Do[(e-1)*4+2];case xn.H:return Do[(e-1)*4+3];default:return}};var j0={},Ol={};const ys=new Uint8Array(512),Ka=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)ys[n]=e,Ka[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)ys[n]=ys[n-255]})();Ol.log=function(e){if(e<1)throw new Error("log("+e+")");return Ka[e]};Ol.exp=function(e){return ys[e]};Ol.mul=function(e,n){return e===0||n===0?0:ys[Ka[e]+Ka[n]]};(function(t){const e=Ol;t.mul=function(r,i){const s=new Uint8Array(r.length+i.length-1);for(let o=0;o<r.length;o++)for(let a=0;a<i.length;a++)s[o+a]^=e.mul(r[o],i[a]);return s},t.mod=function(r,i){let s=new Uint8Array(r);for(;s.length-i.length>=0;){const o=s[0];for(let l=0;l<i.length;l++)s[l]^=e.mul(i[l],o);let a=0;for(;a<s.length&&s[a]===0;)a++;s=s.slice(a)}return s},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let s=0;s<r;s++)i=t.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(j0);const F0=j0;function ih(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}ih.prototype.initialize=function(e){this.degree=e,this.genPoly=F0.generateECPolynomial(this.degree)};ih.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const r=F0.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(r,i),s}return r};var IP=ih,U0={},Yn={},sh={};sh.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Vt={};const z0="[0-9]+",TP="[A-Z $%*+\\-./:]+";let qs="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";qs=qs.replace(/u/g,"\\u");const kP="(?:(?![A-Z0-9 $%*+\\-./:]|"+qs+`)(?:.|[\r
]))+`;Vt.KANJI=new RegExp(qs,"g");Vt.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");Vt.BYTE=new RegExp(kP,"g");Vt.NUMERIC=new RegExp(z0,"g");Vt.ALPHANUMERIC=new RegExp(TP,"g");const xP=new RegExp("^"+qs+"$"),RP=new RegExp("^"+z0+"$"),NP=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Vt.testKanji=function(e){return xP.test(e)};Vt.testNumeric=function(e){return RP.test(e)};Vt.testAlphanumeric=function(e){return NP.test(e)};(function(t){const e=sh,n=Vt;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(s,o){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(o))throw new Error("Invalid version: "+o);return o>=1&&o<10?s.ccBits[0]:o<27?s.ccBits[1]:s.ccBits[2]},t.getBestModeForData=function(s){return n.testNumeric(s)?t.NUMERIC:n.testAlphanumeric(s)?t.ALPHANUMERIC:n.testKanji(s)?t.KANJI:t.BYTE},t.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},t.isValid=function(s){return s&&s.bit&&s.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+i)}}t.from=function(s,o){if(t.isValid(s))return s;try{return r(s)}catch{return o}}})(Yn);(function(t){const e=ot,n=bl,r=Al,i=Yn,s=sh,o=7973,a=e.getBCHDigit(o);function l(h,g,_){for(let w=1;w<=40;w++)if(g<=t.getCapacity(w,_,h))return w}function c(h,g){return i.getCharCountIndicator(h,g)+4}function d(h,g){let _=0;return h.forEach(function(w){const I=c(w.mode,g);_+=I+w.getBitsLength()}),_}function f(h,g){for(let _=1;_<=40;_++)if(d(h,_)<=t.getCapacity(_,g,i.MIXED))return _}t.from=function(g,_){return s.isValid(g)?parseInt(g,10):_},t.getCapacity=function(g,_,w){if(!s.isValid(g))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=i.BYTE);const I=e.getSymbolTotalCodewords(g),m=n.getTotalCodewordsCount(g,_),p=(I-m)*8;if(w===i.MIXED)return p;const y=p-c(w,g);switch(w){case i.NUMERIC:return Math.floor(y/10*3);case i.ALPHANUMERIC:return Math.floor(y/11*2);case i.KANJI:return Math.floor(y/13);case i.BYTE:default:return Math.floor(y/8)}},t.getBestVersionForData=function(g,_){let w;const I=r.from(_,r.M);if(Array.isArray(g)){if(g.length>1)return f(g,I);if(g.length===0)return 1;w=g[0]}else w=g;return l(w.mode,w.getLength(),I)},t.getEncodedBits=function(g){if(!s.isValid(g)||g<7)throw new Error("Invalid QR Code version");let _=g<<12;for(;e.getBCHDigit(_)-a>=0;)_^=o<<e.getBCHDigit(_)-a;return g<<12|_}})(U0);var B0={};const Zu=ot,W0=1335,PP=21522,Wg=Zu.getBCHDigit(W0);B0.getEncodedBits=function(e,n){const r=e.bit<<3|n;let i=r<<10;for(;Zu.getBCHDigit(i)-Wg>=0;)i^=W0<<Zu.getBCHDigit(i)-Wg;return(r<<10|i)^PP};var V0={};const AP=Yn;function vi(t){this.mode=AP.NUMERIC,this.data=t.toString()}vi.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};vi.prototype.getLength=function(){return this.data.length};vi.prototype.getBitsLength=function(){return vi.getBitsLength(this.data.length)};vi.prototype.write=function(e){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),e.put(i,10);const s=this.data.length-n;s>0&&(r=this.data.substr(n),i=parseInt(r,10),e.put(i,s*3+1))};var bP=vi;const OP=Yn,Nc=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function wi(t){this.mode=OP.ALPHANUMERIC,this.data=t}wi.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};wi.prototype.getLength=function(){return this.data.length};wi.prototype.getBitsLength=function(){return wi.getBitsLength(this.data.length)};wi.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let r=Nc.indexOf(this.data[n])*45;r+=Nc.indexOf(this.data[n+1]),e.put(r,11)}this.data.length%2&&e.put(Nc.indexOf(this.data[n]),6)};var MP=wi;const DP=Yn;function Si(t){this.mode=DP.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}Si.getBitsLength=function(e){return e*8};Si.prototype.getLength=function(){return this.data.length};Si.prototype.getBitsLength=function(){return Si.getBitsLength(this.data.length)};Si.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var LP=Si;const jP=Yn,FP=ot;function Ei(t){this.mode=jP.KANJI,this.data=t}Ei.getBitsLength=function(e){return e*13};Ei.prototype.getLength=function(){return this.data.length};Ei.prototype.getBitsLength=function(){return Ei.getBitsLength(this.data.length)};Ei.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=FP.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var UP=Ei,H0={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,r,i){var s={},o={};o[r]=0;var a=e.PriorityQueue.make();a.push(r,0);for(var l,c,d,f,h,g,_,w,I;!a.empty();){l=a.pop(),c=l.value,f=l.cost,h=n[c]||{};for(d in h)h.hasOwnProperty(d)&&(g=h[d],_=f+g,w=o[d],I=typeof o[d]>"u",(I||w>_)&&(o[d]=_,a.push(d,_),s[d]=c))}if(typeof i<"u"&&typeof o[i]>"u"){var m=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(m)}return s},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],s=r;s;)i.push(s),n[s],s=n[s];return i.reverse(),i},find_path:function(n,r,i){var s=e.single_source_shortest_paths(n,r,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(n){var r=e.PriorityQueue,i={},s;n=n||{};for(s in r)r.hasOwnProperty(s)&&(i[s]=r[s]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(H0);var zP=H0.exports;(function(t){const e=Yn,n=bP,r=MP,i=LP,s=UP,o=Vt,a=ot,l=zP;function c(m){return unescape(encodeURIComponent(m)).length}function d(m,p,y){const v=[];let E;for(;(E=m.exec(y))!==null;)v.push({data:E[0],index:E.index,mode:p,length:E[0].length});return v}function f(m){const p=d(o.NUMERIC,e.NUMERIC,m),y=d(o.ALPHANUMERIC,e.ALPHANUMERIC,m);let v,E;return a.isKanjiModeEnabled()?(v=d(o.BYTE,e.BYTE,m),E=d(o.KANJI,e.KANJI,m)):(v=d(o.BYTE_KANJI,e.BYTE,m),E=[]),p.concat(y,v,E).sort(function(T,R){return T.index-R.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function h(m,p){switch(p){case e.NUMERIC:return n.getBitsLength(m);case e.ALPHANUMERIC:return r.getBitsLength(m);case e.KANJI:return s.getBitsLength(m);case e.BYTE:return i.getBitsLength(m)}}function g(m){return m.reduce(function(p,y){const v=p.length-1>=0?p[p.length-1]:null;return v&&v.mode===y.mode?(p[p.length-1].data+=y.data,p):(p.push(y),p)},[])}function _(m){const p=[];for(let y=0;y<m.length;y++){const v=m[y];switch(v.mode){case e.NUMERIC:p.push([v,{data:v.data,mode:e.ALPHANUMERIC,length:v.length},{data:v.data,mode:e.BYTE,length:v.length}]);break;case e.ALPHANUMERIC:p.push([v,{data:v.data,mode:e.BYTE,length:v.length}]);break;case e.KANJI:p.push([v,{data:v.data,mode:e.BYTE,length:c(v.data)}]);break;case e.BYTE:p.push([{data:v.data,mode:e.BYTE,length:c(v.data)}])}}return p}function w(m,p){const y={},v={start:{}};let E=["start"];for(let S=0;S<m.length;S++){const T=m[S],R=[];for(let W=0;W<T.length;W++){const O=T[W],fe=""+S+W;R.push(fe),y[fe]={node:O,lastCount:0},v[fe]={};for(let gt=0;gt<E.length;gt++){const V=E[gt];y[V]&&y[V].node.mode===O.mode?(v[V][fe]=h(y[V].lastCount+O.length,O.mode)-h(y[V].lastCount,O.mode),y[V].lastCount+=O.length):(y[V]&&(y[V].lastCount=O.length),v[V][fe]=h(O.length,O.mode)+4+e.getCharCountIndicator(O.mode,p))}}E=R}for(let S=0;S<E.length;S++)v[E[S]].end=0;return{map:v,table:y}}function I(m,p){let y;const v=e.getBestModeForData(m);if(y=e.from(p,v),y!==e.BYTE&&y.bit<v.bit)throw new Error('"'+m+'" cannot be encoded with mode '+e.toString(y)+`.
 Suggested mode is: `+e.toString(v));switch(y===e.KANJI&&!a.isKanjiModeEnabled()&&(y=e.BYTE),y){case e.NUMERIC:return new n(m);case e.ALPHANUMERIC:return new r(m);case e.KANJI:return new s(m);case e.BYTE:return new i(m)}}t.fromArray=function(p){return p.reduce(function(y,v){return typeof v=="string"?y.push(I(v,null)):v.data&&y.push(I(v.data,v.mode)),y},[])},t.fromString=function(p,y){const v=f(p,a.isKanjiModeEnabled()),E=_(v),S=w(E,y),T=l.find_path(S.map,"start","end"),R=[];for(let W=1;W<T.length-1;W++)R.push(S.table[T[W]].node);return t.fromArray(g(R))},t.rawSplit=function(p){return t.fromArray(f(p,a.isKanjiModeEnabled()))}})(V0);const Ml=ot,Pc=Al,BP=SP,WP=EP,VP=M0,HP=D0,ed=L0,td=bl,$P=IP,qa=U0,GP=B0,KP=Yn,Ac=V0;function qP(t,e){const n=t.size,r=HP.getPositions(e);for(let i=0;i<r.length;i++){const s=r[i][0],o=r[i][1];for(let a=-1;a<=7;a++)if(!(s+a<=-1||n<=s+a))for(let l=-1;l<=7;l++)o+l<=-1||n<=o+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?t.set(s+a,o+l,!0,!0):t.set(s+a,o+l,!1,!0))}}function YP(t){const e=t.size;for(let n=8;n<e-8;n++){const r=n%2===0;t.set(n,6,r,!0),t.set(6,n,r,!0)}}function QP(t,e){const n=VP.getPositions(e);for(let r=0;r<n.length;r++){const i=n[r][0],s=n[r][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?t.set(i+o,s+a,!0,!0):t.set(i+o,s+a,!1,!0)}}function JP(t,e){const n=t.size,r=qa.getEncodedBits(e);let i,s,o;for(let a=0;a<18;a++)i=Math.floor(a/3),s=a%3+n-8-3,o=(r>>a&1)===1,t.set(i,s,o,!0),t.set(s,i,o,!0)}function bc(t,e,n){const r=t.size,i=GP.getEncodedBits(e,n);let s,o;for(s=0;s<15;s++)o=(i>>s&1)===1,s<6?t.set(s,8,o,!0):s<8?t.set(s+1,8,o,!0):t.set(r-15+s,8,o,!0),s<8?t.set(8,r-s-1,o,!0):s<9?t.set(8,15-s-1+1,o,!0):t.set(8,15-s-1,o,!0);t.set(r-8,8,1,!0)}function XP(t,e){const n=t.size;let r=-1,i=n-1,s=7,o=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!t.isReserved(i,a-l)){let c=!1;o<e.length&&(c=(e[o]>>>s&1)===1),t.set(i,a-l,c),s--,s===-1&&(o++,s=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function ZP(t,e,n){const r=new BP;n.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),KP.getCharCountIndicator(l.mode,t)),l.write(r)});const i=Ml.getSymbolTotalCodewords(t),s=td.getTotalCodewordsCount(t,e),o=(i-s)*8;for(r.getLengthInBits()+4<=o&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(o-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return eA(r,t,e)}function eA(t,e,n){const r=Ml.getSymbolTotalCodewords(e),i=td.getTotalCodewordsCount(e,n),s=r-i,o=td.getBlocksCount(e,n),a=r%o,l=o-a,c=Math.floor(r/o),d=Math.floor(s/o),f=d+1,h=c-d,g=new $P(h);let _=0;const w=new Array(o),I=new Array(o);let m=0;const p=new Uint8Array(t.buffer);for(let T=0;T<o;T++){const R=T<l?d:f;w[T]=p.slice(_,_+R),I[T]=g.encode(w[T]),_+=R,m=Math.max(m,R)}const y=new Uint8Array(r);let v=0,E,S;for(E=0;E<m;E++)for(S=0;S<o;S++)E<w[S].length&&(y[v++]=w[S][E]);for(E=0;E<h;E++)for(S=0;S<o;S++)y[v++]=I[S][E];return y}function tA(t,e,n,r){let i;if(Array.isArray(t))i=Ac.fromArray(t);else if(typeof t=="string"){let c=e;if(!c){const d=Ac.rawSplit(t);c=qa.getBestVersionForData(d,n)}i=Ac.fromString(t,c||40)}else throw new Error("Invalid data");const s=qa.getBestVersionForData(i,n);if(!s)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=s;else if(e<s)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+s+`.
`);const o=ZP(e,n,i),a=Ml.getSymbolSize(e),l=new WP(a);return qP(l,e),YP(l),QP(l,e),bc(l,n,0),e>=7&&JP(l,e),XP(l,o),isNaN(r)&&(r=ed.getBestMask(l,bc.bind(null,l,n))),ed.applyMask(r,l),bc(l,n,r),{modules:l,version:e,errorCorrectionLevel:n,maskPattern:r,segments:i}}b0.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let r=Pc.M,i,s;return typeof n<"u"&&(r=Pc.from(n.errorCorrectionLevel,Pc.M),i=qa.from(n.version),s=ed.from(n.maskPattern),n.toSJISFunc&&Ml.setToSJISFunction(n.toSJISFunc)),tA(e,i,r,s)};var $0={},oh={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(s){return[s,s]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,s=r.width&&r.width>=21?r.width:void 0,o=r.scale||4;return{width:s,scale:s?4:o,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const s=t.getScale(r,i);return Math.floor((r+i.margin*2)*s)},t.qrToImageData=function(r,i,s){const o=i.modules.size,a=i.modules.data,l=t.getScale(o,s),c=Math.floor((o+s.margin*2)*l),d=s.margin*l,f=[s.color.light,s.color.dark];for(let h=0;h<c;h++)for(let g=0;g<c;g++){let _=(h*c+g)*4,w=s.color.light;if(h>=d&&g>=d&&h<c-d&&g<c-d){const I=Math.floor((h-d)/l),m=Math.floor((g-d)/l);w=f[a[I*o+m]?1:0]}r[_++]=w.r,r[_++]=w.g,r[_++]=w.b,r[_]=w.a}}})(oh);(function(t){const e=oh;function n(i,s,o){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=o,s.width=o,s.style.height=o+"px",s.style.width=o+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(s,o,a){let l=a,c=o;typeof l>"u"&&(!o||!o.getContext)&&(l=o,o=void 0),o||(c=r()),l=e.getOptions(l);const d=e.getImageWidth(s.modules.size,l),f=c.getContext("2d"),h=f.createImageData(d,d);return e.qrToImageData(h.data,s,l),n(f,c,d),f.putImageData(h,0,0),c},t.renderToDataURL=function(s,o,a){let l=a;typeof l>"u"&&(!o||!o.getContext)&&(l=o,o=void 0),l||(l={});const c=t.render(s,o,l),d=l.type||"image/png",f=l.rendererOpts||{};return c.toDataURL(d,f.quality)}})($0);var G0={};const nA=oh;function Vg(t,e){const n=t.a/255,r=e+'="'+t.hex+'"';return n<1?r+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function Oc(t,e,n){let r=t+e;return typeof n<"u"&&(r+=" "+n),r}function rA(t,e,n){let r="",i=0,s=!1,o=0;for(let a=0;a<t.length;a++){const l=Math.floor(a%e),c=Math.floor(a/e);!l&&!s&&(s=!0),t[a]?(o++,a>0&&l>0&&t[a-1]||(r+=s?Oc("M",l+n,.5+c+n):Oc("m",i,0),i=0,s=!1),l+1<e&&t[a+1]||(r+=Oc("h",o),o=0)):i++}return r}G0.render=function(e,n,r){const i=nA.getOptions(n),s=e.modules.size,o=e.modules.data,a=s+i.margin*2,l=i.color.light.a?"<path "+Vg(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+Vg(i.color.dark,"stroke")+' d="'+rA(o,s,i.margin)+'"/>',d='viewBox="0 0 '+a+" "+a+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+d+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof r=="function"&&r(null,h),h};const iA=vP,nd=b0,K0=$0,sA=G0;function ah(t,e,n,r,i){const s=[].slice.call(arguments,1),o=s.length,a=typeof s[o-1]=="function";if(!a&&!iA())throw new Error("Callback required as last argument");if(a){if(o<2)throw new Error("Too few arguments provided");o===2?(i=n,n=e,e=r=void 0):o===3&&(e.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(n=e,e=r=void 0):o===2&&!e.getContext&&(r=n,n=e,e=void 0),new Promise(function(l,c){try{const d=nd.create(n,r);l(t(d,e,r))}catch(d){c(d)}})}try{const l=nd.create(n,r);i(null,t(l,e,r))}catch(l){i(l)}}co.create=nd.create;co.toCanvas=ah.bind(null,K0.render);co.toDataURL=ah.bind(null,K0.renderToDataURL);co.toString=ah.bind(null,function(t,e,n){return sA.render(t,n)});function oA({url:t,size:e=200}){const n=A.useRef(null),[r,i]=A.useState(!1);return A.useEffect(()=>{!t||!n.current||co.toCanvas(n.current,t,{width:e,margin:2,color:{dark:"#d0daf0",light:"#0a0f1c"}},s=>{s&&i(!0)})},[t,e]),r?u.jsx("div",{style:{width:e,height:e,display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0f1c",borderRadius:12,color:"#3a4a6a",fontSize:"0.7rem",textAlign:"center",padding:12},children:"QR generation failed"}):u.jsx("canvas",{ref:n,style:{borderRadius:12,display:"block"}})}function q0({alivePlayers:t,votes:e,votingOpen:n}){const r={};return Object.values(e).forEach(i=>{r[i]=(r[i]||0)+1}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:9},children:[u.jsxs("div",{style:{fontSize:"0.6rem",letterSpacing:"2px",color:"#2a3a60",marginBottom:4,display:"flex",alignItems:"center",gap:8},children:["LIVE TALLY ",n&&u.jsx("span",{style:{color:"#00cc77",animation:"blink 1s infinite"},children:"● syncing"})]}),t.map(i=>{const s=r[i.name]||0,o=t.length?s/t.length:0;return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsx(je,{color:i.color,size:20}),u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:3},children:[u.jsx("span",{style:{fontSize:"0.75rem",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:i.name}),s>0&&u.jsxs("span",{style:{fontSize:"0.7rem",color:"#ff5a5a",fontWeight:700,flexShrink:0,marginLeft:4},children:[s," 🗳"]})]}),u.jsx("div",{style:{height:3,background:"#0e1422",borderRadius:999},children:u.jsx("div",{style:{height:"100%",width:`${o*100}%`,background:b.accent,borderRadius:999,transition:"width 0.5s ease"}})})]})]},i.id)}),(r.skip||0)>0&&u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,paddingTop:8,borderTop:`1px solid ${b.border}`},children:[u.jsx("span",{style:{width:20,textAlign:"center",fontSize:"0.9rem"},children:"⏭"}),u.jsx("span",{style:{fontSize:"0.75rem",flex:1},children:"Skip"}),u.jsxs("span",{style:{fontSize:"0.7rem",color:"#ffcc00",fontWeight:700},children:[r.skip," 🗳"]})]})]})}function lh({votes:t,kickedPlayer:e,players:n,myName:r}){const i={};Object.values(t).forEach(a=>{i[a]=(i[a]||0)+1});const s=Object.entries(i).sort((a,l)=>l[1]-a[1]),o=e&&e===r;return u.jsxs("div",{style:{animation:"fadeUp 0.5s ease"},children:[u.jsx("div",{style:{textAlign:"center",marginBottom:20},children:u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",color:"#b044ff",fontSize:"1.7rem",letterSpacing:"4px"},children:"VOTES REVEALED"})}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:9,marginBottom:18},children:s.map(([a,l],c)=>{const d=n.find(h=>h.name===a),f=a===e;return u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,background:f?"#140304":b.card,border:`1.5px solid ${f?"#c51111":"#1a2844"}`,borderRadius:12,padding:"10px 14px",animation:`fadeUp 0.4s ease ${c*.08}s both`},children:[d?u.jsx(je,{color:d.color,size:36,dead:f}):u.jsx("span",{style:{fontSize:"1.5rem",width:36,textAlign:"center"},children:"⏭"}),u.jsxs("div",{style:{flex:1},children:[u.jsx("div",{style:{fontWeight:700,fontSize:"0.88rem"},children:a==="skip"?"Skip Vote":a}),f&&u.jsx(ii,{color:"#c51111",style:{marginTop:3},children:"ejected"})]}),u.jsxs("div",{style:{fontWeight:700,fontSize:"1.25rem",color:f?"#ff4444":"#3a4a6a"},children:[l," 🗳"]})]},a)})}),e&&e!=="skip"?u.jsx(Oe,{style:{border:"1.5px solid #c5111155",textAlign:"center",background:o?"#120204":b.card},children:o?u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{fontSize:"2.8rem",marginBottom:8},children:"💀"}),u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",color:"#ff4444",fontSize:"1.5rem",letterSpacing:"3px"},children:"YOU WERE EJECTED"})]}):u.jsxs(u.Fragment,{children:[(()=>{const a=n.find(l=>l.name===e);return a?u.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:8},children:u.jsx(je,{color:a.color,size:62,dead:!0})}):null})(),u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",color:"#ff4444",fontSize:"1.4rem",letterSpacing:"3px"},children:"EJECTED"}),u.jsx("div",{style:{color:"#d0daf0",fontWeight:700,marginTop:4},children:e})]})}):u.jsxs(Oe,{style:{border:"1.5px solid #00cc7733",textAlign:"center"},children:[u.jsx("div",{style:{fontSize:"2rem",marginBottom:8},children:"🤷"}),u.jsx("div",{style:{color:"#00cc77",fontWeight:700},children:"No ejection — tied or skipped"})]})]})}function aA({color:t,x:e,delay:n,size:r,duration:i}){return u.jsx("div",{style:{position:"fixed",left:`${e}%`,top:"-20px",width:r,height:r*.6,background:t,borderRadius:2,animation:`confetti ${i}s ease-in ${n}s forwards`,zIndex:10,pointerEvents:"none"}})}const Hg=["#e8334a","#4488ff","#00cc77","#ffcc00","#b044ff","#38fedc","#ff63d4","#f5f557"];function Y0({kickedPlayer:t,players:e,isImpostor:n,onDone:r}){const[i,s]=A.useState("falling"),o=e.find(l=>l.name===t),a=Array.from({length:60},(l,c)=>({color:Hg[c%Hg.length],x:Math.random()*100,delay:Math.random()*1.5,size:8+Math.random()*10,duration:2+Math.random()*2}));return A.useEffect(()=>{const l=setTimeout(()=>s("reveal"),1800),c=setTimeout(()=>{s("done"),r==null||r()},7e3);return()=>{clearTimeout(l),clearTimeout(c)}},[]),u.jsxs("div",{style:{position:"fixed",inset:0,zIndex:999,background:n?"#020a04":"#0a0202",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:[u.jsx("svg",{style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"},preserveAspectRatio:"xMidYMid slice",viewBox:"0 0 100 100",children:Array.from({length:40},(l,c)=>u.jsx("circle",{cx:`${((Math.sin(c*137.5)*.5+.5)*100).toFixed(1)}%`,cy:`${((Math.cos(c*97.3)*.5+.5)*100).toFixed(1)}%`,r:c%3===0?1.2:.6,fill:"white",opacity:.08+c%5*.05},c))}),n&&a.map((l,c)=>u.jsx(aA,{...l},c)),o&&i==="falling"&&u.jsx("div",{style:{animation:"fall 1.6s cubic-bezier(0.25,0.46,0.45,0.94) forwards",position:"absolute",top:"20%"},children:u.jsx(je,{color:o.color,size:100,dead:!0})}),i==="reveal"&&u.jsxs("div",{style:{textAlign:"center",padding:"0 24px",animation:"celebrate 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards",zIndex:20},children:[o&&u.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:16},children:u.jsx(je,{color:o.color,size:80,dead:!0})}),u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",fontSize:"1.1rem",letterSpacing:"3px",color:"#888",marginBottom:8},children:t}),n?u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{fontFamily:"'Russo One',sans-serif",fontSize:"2.2rem",letterSpacing:"4px",color:"#00cc77",lineHeight:1.1,marginBottom:12,textShadow:"0 0 30px #00cc77aa"},children:["WAS THE",u.jsx("br",{}),"IMPOSTOR! ✅"]}),u.jsx("div",{style:{fontSize:"0.8rem",color:"#4a6a4a",letterSpacing:"2px",marginBottom:20},children:"CREWMATES WIN 🎉"}),u.jsx("div",{style:{fontSize:"3rem",animation:"float 1.5s ease-in-out infinite"},children:"🎉🚀🎉"})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{fontFamily:"'Russo One',sans-serif",fontSize:"2.2rem",letterSpacing:"4px",color:"#e8334a",lineHeight:1.1,marginBottom:12,textShadow:"0 0 30px #e8334aaa",animation:"shake 0.4s ease 0.2s"},children:["WAS NOT",u.jsx("br",{}),"THE IMPOSTOR. ❌"]}),u.jsx("div",{style:{fontSize:"0.8rem",color:"#6a3a3a",letterSpacing:"2px",marginBottom:20},children:"IMPOSTORS STILL LURK 😱"}),u.jsx("div",{style:{fontSize:"3rem",animation:"float 1.5s ease-in-out infinite"},children:"😱👻😱"})]}),u.jsx("button",{onClick:r,style:{marginTop:28,background:"transparent",border:"1px solid #2a3a60",color:"#3a4a6a",borderRadius:8,padding:"8px 20px",fontSize:"0.7rem",letterSpacing:"2px",cursor:"pointer"},children:"CONTINUE →"})]})]})}function lA(t){const e=Math.max(0,t),n=Math.ceil(e/1e3),r=Math.floor(n/60),i=n%60;return`${String(r).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function cA({adminUser:t}){const[e,n]=A.useState(null),[r,i]=A.useState(null),[s,o]=A.useState(null),[a,l]=A.useState(""),[c,d]=A.useState("Red"),[f,h]=A.useState(1),[g,_]=A.useState(!1),[w,I]=A.useState(""),[m,p]=A.useState(!1),[y,v]=A.useState(!1),[E,S]=A.useState(!1),[T,R]=A.useState(!1),[W,O]=A.useState(null),[fe,gt]=A.useState(Date.now());A.useEffect(()=>Gs(`admins/${t.uid}/rooms`,G=>{n(G||{})}),[t.uid]),A.useEffect(()=>{if(!r){o(null);return}return Gs(`rooms/${r}`,G=>{o(G)})},[r]),A.useEffect(()=>{if(!(s!=null&&s.gameTimerRunning))return;const C=setInterval(()=>gt(Date.now()),1e3);return()=>clearInterval(C)},[s==null?void 0:s.gameTimerRunning]),A.useEffect(()=>{typeof(s==null?void 0:s.impostorCount)=="number"&&h(s.impostorCount)},[s==null?void 0:s.impostorCount]),A.useEffect(()=>{s&&(W!=="results"&&s.phase==="results"&&s.kickedPlayer&&s.kickedPlayer!=="skip"&&p(!0),O(s.phase))},[s==null?void 0:s.phase]);const V=s?Object.values(s.players||{}):[],Pt=V.map(C=>C.color);A.useEffect(()=>{const C=zg.filter(G=>!Pt.includes(G));!C.includes(c)&&C.length>0&&d(C[0])},[Pt.join(",")]);const Re=async C=>{_(!0);try{await C()}finally{_(!1)}},Oi=()=>Re(async()=>{const C=gP(),G={...Ug,code:C,createdAt:Date.now(),adminUid:t.uid};await qi(`rooms/${C}`,G),await Ae(`admins/${t.uid}/rooms`,{[C]:{code:C,createdAt:Date.now()}}),i(C)}),Mi=C=>Re(async()=>{await qi(`rooms/${C}`,null),await qi(`admins/${t.uid}/rooms/${C}`,null),r===C&&i(null)}),N=()=>Re(async()=>{const C=a.trim();if(!C){I("Enter a name");return}if(V.find(Je=>Je.name.toLowerCase()===C.toLowerCase())){I("Name taken");return}const G=`p_${Date.now()}`;await Ae(`rooms/${r}/players/${G}`,{id:G,name:C,color:c,alive:!0,isImpostor:!1}),l(""),I("")}),j=C=>Re(()=>qi(`rooms/${r}/players/${C}`,null)),L=()=>{const C=(s==null?void 0:s.gameDurationMs)||27e5,G=(s==null?void 0:s.gameRemainingMs)??C;return s!=null&&s.gameTimerRunning&&(s!=null&&s.gameTimerStartedAt)?Math.max(0,G-(Date.now()-s.gameTimerStartedAt)):Math.max(0,G)},te=C=>Re(async()=>{const G=Math.max(1,Math.min(3,C)),Je=Math.max(1,Math.floor(V.length/2)),ge=Math.min(G,Je);await Ae(`rooms/${r}`,{impostorCount:ge});const hn=V.filter(Gt=>Gt.isImpostor);if(hn.length>ge){const Gt=hn.slice(ge);await Promise.all(Gt.map(ho=>Ae(`rooms/${r}/players/${ho.id}`,{isImpostor:!1})))}}),ue=C=>Re(async()=>{const G=V.find(Gt=>Gt.id===C);if(!G)return;if(G.isImpostor){await Ae(`rooms/${r}/players/${C}`,{isImpostor:!1}),I("");return}const Je=Math.max(1,Math.floor(V.length/2)),ge=Math.min(f,Je);if(V.filter(Gt=>Gt.isImpostor).length>=ge){I(`Only ${ge} impostor(s) allowed. Increase impostor count first.`);return}await Ae(`rooms/${r}/players/${C}`,{isImpostor:!0}),I("")}),Rr=()=>Re(async()=>{if(V.length<2){I("Need at least 2 players");return}const C=Math.min(f,Math.floor(V.length/2)),G=[...V].sort(()=>Math.random()-.5),Je=new Set(G.slice(0,C).map(ge=>ge.id));await Ae(`rooms/${r}`,{impostorCount:C}),await Promise.all(V.map(ge=>Ae(`rooms/${r}/players/${ge.id}`,{isImpostor:Je.has(ge.id)}))),I("")}),Ht=()=>Re(async()=>{const C=(s==null?void 0:s.gameDurationMs)||27e5;await Ae(`rooms/${r}`,{gameStarted:!0,gameDurationMs:C,gameRemainingMs:C,gameTimerRunning:!0,gameTimerStartedAt:Date.now()})}),Di=()=>Re(async()=>{const C=L();await Ae(`rooms/${r}`,{gameRemainingMs:C,gameTimerRunning:!1,gameTimerStartedAt:0})}),$t=()=>Re(async()=>{const C=L();C<=0||await Ae(`rooms/${r}`,{gameStarted:!0,gameRemainingMs:C,gameTimerRunning:!0,gameTimerStartedAt:Date.now()})}),Nr=()=>Re(async()=>{const C={phase:"voting",votes:{},votingOpen:!0,kickedPlayer:""};s!=null&&s.gameStarted&&(s!=null&&s.gameTimerRunning)&&(C.gameRemainingMs=L(),C.gameTimerRunning=!1,C.gameTimerStartedAt=0),await Ae(`rooms/${r}`,C)}),Q0=()=>Re(async()=>{const C=s.votes||{},G={};Object.values(C).forEach(Qn=>{G[Qn]=(G[Qn]||0)+1});const Je=Object.entries(G).sort((Qn,Ul)=>Ul[1]-Qn[1]);let ge="";if(Je.length>0&&(Je.length===1||Je[0][1]!==Je[1][1])&&(ge=Je[0][0],ge!=="skip")){const Qn=V.find(Ul=>Ul.name===ge);Qn&&await Ae(`rooms/${r}/players/${Qn.id}`,{alive:!1})}const hn={phase:"results",votingOpen:!1,kickedPlayer:ge},Gt=!ge||ge==="skip",ho=L();Gt&&(s!=null&&s.gameStarted)&&ho>0&&(hn.gameRemainingMs=ho,hn.gameTimerRunning=!0,hn.gameTimerStartedAt=Date.now()),await Ae(`rooms/${r}`,hn)}),J0=()=>Re(async()=>{const C={phase:"lobby",votes:{},votingOpen:!1,kickedPlayer:""},G=L();s!=null&&s.gameStarted&&G>0&&(C.gameRemainingMs=G,C.gameTimerRunning=!0,C.gameTimerStartedAt=Date.now()),await Ae(`rooms/${r}`,C)}),X0=()=>Re(async()=>{const C={...Ug,code:r,createdAt:s.createdAt,adminUid:t.uid};await qi(`rooms/${r}`,C)}),Dl=r?`${window.location.origin}/?room=${r}`:"",ch=r?`${window.location.origin}/display?room=${r}`:"",Z0=()=>{navigator.clipboard.writeText(Dl).then(()=>{S(!0),setTimeout(()=>S(!1),2e3)})},ew=()=>{navigator.clipboard.writeText(ch).then(()=>{R(!0),setTimeout(()=>R(!1),2e3)})},fo=(s==null?void 0:s.votes)||{},Ll=V.filter(C=>C.alive),uh=Object.keys(fo).length,jl=V.find(C=>C.name===(s==null?void 0:s.kickedPlayer)),tw=(jl==null?void 0:jl.isImpostor)||!1,nw=(s==null?void 0:s.gameDurationMs)||45*60*1e3,rw=(s==null?void 0:s.gameRemainingMs)??nw,iw=s!=null&&s.gameTimerRunning&&(s!=null&&s.gameTimerStartedAt)?fe-s.gameTimerStartedAt:0,Fl=Math.max(0,rw-iw);return r?s?u.jsxs("div",{style:{minHeight:"100vh",background:b.bg,color:"#d0daf0",paddingBottom:24,position:"relative"},children:[u.jsx(Tt,{}),m&&s.kickedPlayer&&s.kickedPlayer!=="skip"&&u.jsx(Y0,{kickedPlayer:s.kickedPlayer,players:V,isImpostor:tw,onDone:()=>p(!1)}),u.jsxs("div",{style:{position:"relative",zIndex:1},children:[u.jsxs("header",{style:{background:"linear-gradient(135deg,#0c0416,#090f20)",borderBottom:`2px solid ${b.accent}33`,padding:"12px 16px",display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",rowGap:8},children:[u.jsx("button",{onClick:()=>i(null),style:{background:"none",border:"1px solid #1e2d50",color:"#3a4a6a",borderRadius:8,padding:"5px 10px",fontSize:"0.65rem",cursor:"pointer"},children:"← ROOMS"}),u.jsxs("div",{children:[u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",fontSize:"1.1rem",letterSpacing:"3px",color:b.accent},children:"ROOM"}),u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",fontSize:"1.6rem",letterSpacing:"5px",color:"#4488ff",lineHeight:1},children:r})]}),u.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8,alignItems:"center"},children:[u.jsx(nh,{phase:s.phase}),u.jsx("button",{onClick:Fg,style:{background:"none",border:"1px solid #1e2d50",color:"#3a4a6a",borderRadius:8,padding:"5px 10px",fontSize:"0.65rem",cursor:"pointer"},children:"LOGOUT"})]})]}),u.jsxs("div",{style:{background:"#080d18",borderBottom:`1px solid ${b.border}`,padding:"10px 16px",display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[u.jsx("span",{style:{fontSize:"0.62rem",color:"#2a3a60",letterSpacing:"1px",flexShrink:0},children:"JOIN URL"}),u.jsx("div",{style:{flex:1,minWidth:0,background:"#0a0f1c",border:`1px solid ${b.border}`,borderRadius:8,padding:"6px 10px",fontSize:"0.72rem",color:"#4488ff",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Dl}),u.jsx("button",{onClick:Z0,style:{background:`${E?"#00cc77":"#4488ff"}14`,border:`1px solid ${E?"#00cc77":"#4488ff"}`,color:E?"#00cc77":"#4488ff",borderRadius:8,padding:"6px 12px",fontSize:"0.68rem",cursor:"pointer",flexShrink:0,letterSpacing:"1px",transition:"all 0.2s"},children:E?"COPIED ✓":"COPY"}),u.jsx("button",{onClick:()=>v(!y),style:{background:y?`${b.accent}14`:"transparent",border:`1px solid ${y?b.accent:"#2a3a60"}`,color:y?b.accent:"#3a4a6a",borderRadius:8,padding:"6px 12px",fontSize:"0.68rem",cursor:"pointer",flexShrink:0,letterSpacing:"1px"},children:y?"HIDE QR":"QR CODE"})]}),u.jsxs("div",{style:{background:"#080d18",borderBottom:`1px solid ${b.border}`,padding:"10px 16px",display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[u.jsx("span",{style:{fontSize:"0.62rem",color:"#2a3a60",letterSpacing:"1px",flexShrink:0},children:"DISPLAY URL"}),u.jsx("div",{style:{flex:1,minWidth:0,background:"#0a0f1c",border:`1px solid ${b.border}`,borderRadius:8,padding:"6px 10px",fontSize:"0.72rem",color:"#00cc77",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:ch}),u.jsx("button",{onClick:ew,style:{background:"#00cc7714",border:"1px solid #00cc77",color:"#00cc77",borderRadius:8,padding:"6px 12px",fontSize:"0.68rem",cursor:"pointer",flexShrink:0,letterSpacing:"1px",transition:"all 0.2s"},children:T?"COPIED ✓":"COPY"})]}),y&&u.jsxs("div",{style:{background:"#080d18",borderBottom:`1px solid ${b.border}`,padding:"20px",display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[u.jsx(oA,{url:Dl,size:200}),u.jsxs("div",{style:{fontSize:"0.65rem",color:"#2a3a60",letterSpacing:"2px",textAlign:"center"},children:["Scan to join room ",u.jsx("strong",{style:{color:"#4488ff"},children:r})]})]}),u.jsxs("main",{style:{maxWidth:920,margin:"0 auto",padding:"16px 14px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:16},children:[u.jsxs(Oe,{children:[u.jsx(Ze,{children:"Crewmates"}),w&&u.jsx("div",{style:{color:"#ff5555",fontSize:"0.72rem",marginBottom:8},children:w}),u.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12},children:[u.jsx("input",{value:a,onChange:C=>{l(C.target.value),I("")},onKeyDown:C=>C.key==="Enter"&&N(),placeholder:"Player name…",style:{flex:1,background:"#080d18",border:`1px solid ${b.border}`,color:"#d0daf0",borderRadius:9,padding:"9px 12px",fontSize:"0.82rem",outline:"none"}}),u.jsx(Ce,{onClick:N,disabled:g||!a.trim(),color:"#00cc77",children:"+ ADD"})]}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:7,marginBottom:12,padding:10,background:"#080d18",borderRadius:10,border:`1px solid ${b.border}`},children:zg.map(C=>u.jsx("button",{title:Pt.includes(C)?`${C} (taken)`:C,onClick:()=>!Pt.includes(C)&&d(C),disabled:Pt.includes(C),style:{width:26,height:26,borderRadius:"50%",background:Dt[C],border:c===C?"3px solid #fff":"2px solid transparent",cursor:Pt.includes(C)?"not-allowed":"pointer",opacity:Pt.includes(C)?.2:1,padding:0,flexShrink:0,transition:"all 0.15s",boxShadow:c===C?`0 0 10px ${Dt[C]}`:"none"}},C))}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16,padding:"8px 12px",background:"#080d18",borderRadius:9,border:`1px solid ${b.border}`},children:[u.jsx(je,{color:c,size:36}),u.jsx("span",{style:{color:Dt[c],fontWeight:700,fontSize:"0.85rem"},children:c})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16,padding:"12px",background:"#0a0515",borderRadius:10,border:"1px solid #c5111122"},children:[u.jsx("span",{style:{fontSize:"0.72rem",color:"#c51111",letterSpacing:"1px",flex:1},children:"🔪 IMPOSTORS"}),u.jsx("button",{onClick:()=>te(f-1),disabled:g,style:{background:"#1a0505",border:"1px solid #c5111133",color:"#c51111",borderRadius:6,width:28,height:28,cursor:"pointer",fontSize:"1rem"},children:"−"}),u.jsx("span",{style:{fontFamily:"'Russo One',sans-serif",fontSize:"1.2rem",color:"#e8334a",minWidth:20,textAlign:"center"},children:f}),u.jsx("button",{onClick:()=>te(f+1),disabled:g,style:{background:"#1a0505",border:"1px solid #c5111133",color:"#c51111",borderRadius:6,width:28,height:28,cursor:"pointer",fontSize:"1rem"},children:"+"}),u.jsx(Ce,{onClick:Rr,disabled:g||V.length<2,color:"#c51111",style:{padding:"6px 12px",fontSize:"0.7rem"},children:"RANDOM"})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:7,maxHeight:320,overflowY:"auto"},children:[V.length===0&&u.jsx("div",{style:{color:"#2a3a60",fontSize:"0.78rem",textAlign:"center",padding:"18px 0"},children:"No crewmates yet"}),V.map(C=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,background:C.isImpostor?"#0f0408":C.alive?"#080d18":"#0a0404",border:`1px solid ${C.isImpostor?"#c5111133":C.alive?b.border:"#c5111122"}`,borderRadius:10,padding:"8px 12px",opacity:C.alive?1:.55},children:[u.jsx(je,{color:C.color,size:28,dead:!C.alive}),u.jsxs("div",{style:{flex:1,minWidth:0},children:[u.jsx("div",{style:{fontSize:"0.83rem",fontWeight:700,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:C.name}),u.jsx("div",{style:{fontSize:"0.6rem",color:Dt[C.color]},children:C.color})]}),C.isImpostor&&u.jsx(ii,{color:"#c51111",children:"impostor"}),!C.alive&&u.jsx(ii,{color:"#555",children:"dead"}),fo[C.name]&&C.alive&&u.jsx(ii,{color:"#4488ff",children:"voted ✓"}),u.jsx("button",{onClick:()=>ue(C.id),disabled:g||s.phase!=="lobby"||!C.alive,style:{background:C.isImpostor?"#c5111122":"transparent",border:`1px solid ${C.isImpostor?"#c51111":"#2a3a60"}`,color:C.isImpostor?"#ff6666":"#7a8cab",borderRadius:6,padding:"4px 8px",fontSize:"0.64rem",cursor:"pointer",letterSpacing:"1px"},children:C.isImpostor?"UNSET":"SET"}),u.jsx("button",{onClick:()=>j(C.id),disabled:g,style:{background:"none",border:"none",color:"#c51111",cursor:"pointer",fontSize:"1.1rem",lineHeight:1,padding:"2px 4px"},children:"✕"})]},C.id))]})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsxs(Oe,{children:[u.jsx(Ze,{children:"Game Timer"}),u.jsxs("div",{style:{marginBottom:12,padding:"10px 12px",background:"#080d18",border:`1px solid ${b.border}`,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[u.jsx("span",{style:{color:"#2a3a60",fontSize:"0.68rem",letterSpacing:"2px"},children:"REMAINING"}),u.jsx("span",{style:{fontFamily:"'Russo One',sans-serif",color:Fl>0?"#00cc77":"#ff6666",fontSize:"1.4rem",letterSpacing:"2px"},children:lA(Fl)})]}),u.jsxs("div",{style:{display:"flex",gap:8,marginBottom:14},children:[u.jsx(Ce,{full:!0,onClick:Ht,disabled:g||s.phase!=="lobby",color:"#00cc77",children:"▶ Start 45m"}),u.jsx(Ce,{full:!0,onClick:Di,disabled:g||!s.gameTimerRunning,color:"#ffcc00",children:"⏸ Pause"}),u.jsx(Ce,{full:!0,onClick:$t,disabled:g||s.phase!=="lobby"||s.gameTimerRunning||Fl<=0||!s.gameStarted,color:"#4488ff",children:"⏵ Resume"})]}),u.jsx(Ze,{children:"Meeting Controls"}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[u.jsx(Ce,{full:!0,onClick:Nr,disabled:g||Ll.length<2||s.phase==="voting",color:"#4488ff",children:"🚨 Start Emergency Meeting"}),u.jsxs(Ce,{full:!0,onClick:Q0,disabled:g||s.phase!=="voting"||uh===0,color:"#b044ff",children:["📊 Reveal Votes (",uh,"/",Ll.length,")"]}),u.jsx(Ce,{full:!0,onClick:J0,disabled:g||s.phase==="lobby",color:"#ffcc00",children:"🔄 Back to Lobby"}),u.jsx(Ce,{full:!0,onClick:X0,disabled:g,color:"#c51111",danger:!0,children:"⚠ Reset Room"})]})]}),s.phase==="voting"&&u.jsx(Oe,{children:u.jsx(q0,{alivePlayers:Ll,votes:fo,votingOpen:s.votingOpen})}),s.phase==="results"&&u.jsxs(Oe,{style:{border:`1px solid ${s.kickedPlayer&&s.kickedPlayer!=="skip"?"#c5111144":"#00cc7733"}`},children:[u.jsx(Ze,{children:"Result"}),u.jsx(lh,{votes:fo,kickedPlayer:s.kickedPlayer,players:V})]})]})]})]})]}):u.jsxs("div",{style:{minHeight:"100vh",background:b.bg,display:"flex",alignItems:"center",justifyContent:"center"},children:[u.jsx(Tt,{}),u.jsx("div",{style:{position:"relative",zIndex:1},children:u.jsx(Ks,{})})]}):u.jsxs("div",{style:{minHeight:"100vh",background:b.bg,color:"#d0daf0",paddingBottom:32,position:"relative"},children:[u.jsx(Tt,{}),u.jsxs("div",{style:{position:"relative",zIndex:1},children:[u.jsxs("header",{style:{background:"linear-gradient(135deg,#0c0416,#090f20)",borderBottom:`2px solid ${b.accent}33`,padding:"14px 20px",display:"flex",alignItems:"center",gap:12},children:[u.jsx("span",{style:{fontSize:"1.8rem"},children:"🔴"}),u.jsx("div",{children:u.jsx("div",{style:{fontSize:"0.58rem",color:"#2a3a60",letterSpacing:"3px"},children:"ADMIN PANEL"})}),u.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8,alignItems:"center"},children:[u.jsx("span",{style:{fontSize:"0.65rem",color:"#3a4a6a"},children:t.email}),u.jsx("button",{onClick:Fg,style:{background:"none",border:"1px solid #1e2d50",color:"#3a4a6a",borderRadius:8,padding:"5px 10px",fontSize:"0.65rem",cursor:"pointer"},children:"LOGOUT"})]})]}),u.jsxs("main",{style:{maxWidth:600,margin:"0 auto",padding:"24px 14px"},children:[u.jsxs(Oe,{style:{marginBottom:16,textAlign:"center"},children:[u.jsx(Ze,{children:"Rooms"}),u.jsx(Ce,{onClick:Oi,disabled:g,color:"#00cc77",full:!0,children:"+ Create New Room"})]}),e===null&&u.jsx("div",{style:{textAlign:"center",padding:24},children:u.jsx(Ks,{})}),e!==null&&Object.values(e).length===0&&u.jsx("div",{style:{textAlign:"center",color:"#2a3a60",fontSize:"0.8rem",padding:24},children:"No rooms yet. Create one to start!"}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:Object.values(e||{}).sort((C,G)=>G.createdAt-C.createdAt).map(C=>u.jsx(Oe,{children:u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[u.jsxs("div",{style:{flex:1},children:[u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",fontSize:"1.5rem",letterSpacing:"4px",color:"#4488ff"},children:C.code}),u.jsxs("div",{style:{fontSize:"0.62rem",color:"#2a3a60",marginTop:2},children:["Created ",new Date(C.createdAt).toLocaleDateString()]})]}),u.jsx(Ce,{onClick:()=>i(C.code),color:"#4488ff",children:"MANAGE"}),u.jsx(Ce,{onClick:()=>Mi(C.code),disabled:g,color:"#c51111",danger:!0,children:"DELETE"})]})},C.code))})]})]})]})}function uA({initialRoomCode:t,onJoin:e}){const[n,r]=A.useState(t?"name":"code"),[i,s]=A.useState(t||""),[o,a]=A.useState(""),[l,c]=A.useState(null),[d,f]=A.useState(!!t),[h,g]=A.useState(""),[_,w]=A.useState(!1),I=()=>{w(!0),setTimeout(()=>w(!1),500)};A.useEffect(()=>i?(f(!0),Gs(`rooms/${i.toUpperCase()}`,E=>{c(E),f(!1),E||g("Room not found. Check the code.")})):void 0,[i]);const m=()=>{const v=i.trim().toUpperCase();if(!v||v.length<4){g("Enter a valid room code"),I();return}s(v),r("name"),g("")},p=()=>{const v=o.trim();if(!v){g("Enter your name"),I();return}if(!l){g("Room not loaded yet");return}const S=Object.values(l.players||{}).find(T=>T.name.toLowerCase()===v.toLowerCase());if(!S){g("Name not in player list — ask admin to add you"),I();return}e({room:l,roomCode:i.toUpperCase(),player:S})},y=l?Object.values(l.players||{}).filter(v=>v.alive):[];return u.jsxs("div",{style:{minHeight:"100vh",background:b.bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20,position:"relative"},children:[u.jsx(Tt,{}),u.jsxs("div",{style:{position:"relative",zIndex:1,width:"min(380px,100%)"},children:[u.jsxs("div",{style:{textAlign:"center",marginBottom:28},children:[u.jsx("div",{style:{display:"flex",justifyContent:"center",gap:4,marginBottom:14},children:["Red","Blue","Green","Pink","Orange"].map((v,E)=>u.jsx("div",{style:{marginLeft:E?-10:0,zIndex:5-E,position:"relative",animation:`float ${2+E*.3}s ease-in-out infinite`,animationDelay:`${E*.2}s`},children:u.jsx(je,{color:v,size:42})},v))}),u.jsx("div",{style:{color:"#2a3a60",fontSize:"0.65rem",letterSpacing:"4px",marginTop:4},children:"LIVE ACTION • VOTING SYSTEM"})]}),u.jsxs(Oe,{style:{animation:_?"shake 0.4s ease":"none"},children:[n==="code"&&u.jsxs(u.Fragment,{children:[u.jsx(Ze,{children:"Enter Room Code"}),h&&u.jsx("div",{style:{background:"#1a0505",border:"1px solid #c5111133",borderRadius:8,padding:"10px 12px",color:"#ff5555",fontSize:"0.73rem",marginBottom:12,lineHeight:1.6},children:h}),u.jsx(si,{value:i,onChange:v=>{s(v.target.value.toUpperCase()),g("")},onKeyDown:v=>v.key==="Enter"&&m(),placeholder:"e.g. XK92AF",style:{textTransform:"uppercase",letterSpacing:"4px",textAlign:"center",fontSize:"1.2rem",marginBottom:12}}),u.jsx(Ce,{full:!0,onClick:m,color:"#4488ff",children:"FIND ROOM →"})]}),n==="name"&&u.jsxs(u.Fragment,{children:[d&&u.jsxs("div",{style:{textAlign:"center",padding:"12px 0"},children:[u.jsx(Ks,{}),u.jsx("div",{style:{color:"#2a3a60",fontSize:"0.72rem",marginTop:10},children:"Loading room…"})]}),!d&&!l&&u.jsxs(u.Fragment,{children:[u.jsx(Ze,{children:"Room Not Found"}),u.jsxs("div",{style:{color:"#ff5555",fontSize:"0.78rem",marginBottom:12},children:["Room ",u.jsx("strong",{children:i})," doesn't exist."]}),u.jsx(Ce,{full:!0,onClick:()=>{r("code"),s(""),g("")},color:"#4488ff",children:"← Try Again"})]}),!d&&l&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16,padding:"10px 12px",background:"#080d18",border:`1px solid ${b.border}`,borderRadius:10},children:[u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",fontSize:"1.3rem",letterSpacing:"3px",color:"#4488ff"},children:i}),u.jsx("div",{style:{fontSize:"0.62rem",color:"#2a3a60",flex:1},children:"Room found ✓"}),u.jsx("button",{onClick:()=>{r("code"),s(""),c(null),g("")},style:{background:"none",border:"none",color:"#3a4a6a",cursor:"pointer",fontSize:"0.7rem"},children:"change"})]}),u.jsx(Ze,{children:"Who are you?"}),h&&u.jsx("div",{style:{background:"#1a0505",border:"1px solid #c5111133",borderRadius:8,padding:"10px 12px",color:"#ff5555",fontSize:"0.73rem",marginBottom:12,lineHeight:1.6},children:h}),u.jsx(si,{value:o,onChange:v=>{a(v.target.value),g("")},onKeyDown:v=>v.key==="Enter"&&p(),placeholder:"Your crewmate name…",style:{marginBottom:12}}),u.jsx(Ce,{full:!0,onClick:p,color:"#4488ff",children:"🚀 Board the Ship"}),y.length>0&&u.jsxs("div",{style:{marginTop:16},children:[u.jsx(Ze,{children:"Crewmates online"}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:y.map(v=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,background:"#080d18",borderRadius:8,padding:"5px 9px",border:`1px solid ${b.border}`},onClick:()=>o===v.name?p():a(v.name),children:[u.jsx(je,{color:v.color,size:18}),u.jsx("span",{style:{fontSize:"0.73rem"},children:v.name})]},v.id))})]})]})]})]}),u.jsxs("div",{style:{marginTop:20,textAlign:"center",color:"#1e2e50",fontSize:"0.65rem",letterSpacing:"2px"},children:["HOST?"," ",u.jsx("a",{href:"/admin",style:{color:b.accent,textDecoration:"none"},children:"ADMIN PANEL →"})]})]})]})}function dA({roomCode:t,initialPlayer:e,onLeave:n}){const[r,i]=A.useState(null),[s,o]=A.useState(!1),[a,l]=A.useState(!1),[c,d]=A.useState(!1),f=A.useRef(null);if(A.useEffect(()=>Gs(`rooms/${t}`,T=>i(T)),[t]),A.useEffect(()=>{r&&r.phase!==f.current&&(l(!0),setTimeout(()=>l(!1),600),r.phase==="results"&&r.kickedPlayer&&r.kickedPlayer!=="skip"&&d(!0),f.current=r.phase)},[r==null?void 0:r.phase]),!r)return u.jsxs("div",{style:{minHeight:"100vh",background:b.bg,display:"flex",alignItems:"center",justifyContent:"center",color:"#2a3a60",fontSize:"0.78rem",letterSpacing:"2px",position:"relative"},children:[u.jsx(Tt,{}),u.jsx("div",{style:{position:"relative",zIndex:1},children:"CONNECTING…"})]});const h=Object.values(r.players||{}),g=r.votes||{},_=h.find(S=>S.id===e.id)||e,w=g[_.name],I=h.filter(S=>S.alive&&S.name!==_.name),m=Object.keys(g).length,p=h.filter(S=>S.alive).length,y=h.find(S=>S.name===r.kickedPlayer),v=(y==null?void 0:y.isImpostor)||!1,E=async S=>{if(!(s||!r.votingOpen||w)){o(!0);try{await Ae(`rooms/${t}/votes`,{[_.name]:S})}finally{o(!1)}}};return _.alive?u.jsxs("div",{style:{minHeight:"100vh",background:a?"#150a12":b.bg,color:"#d0daf0",paddingBottom:24,position:"relative",transition:"background 0.4s"},children:[u.jsx(Tt,{}),c&&r.kickedPlayer&&r.kickedPlayer!=="skip"&&u.jsx(Y0,{kickedPlayer:r.kickedPlayer,players:h,isImpostor:v,onDone:()=>d(!1)}),u.jsxs("div",{style:{position:"relative",zIndex:1},children:[u.jsxs("header",{style:{background:"linear-gradient(135deg,#0c0416,#090f20)",borderBottom:`1px solid ${b.border}`,padding:"11px 16px",display:"flex",alignItems:"center",gap:10},children:[u.jsx(je,{color:_.color,size:34}),u.jsxs("div",{children:[u.jsx("div",{style:{fontWeight:700,fontSize:"0.9rem"},children:_.name}),u.jsx("div",{style:{fontSize:"0.6rem",color:_.isImpostor?"#e8334a":Dt[_.color]},children:_.isImpostor?"⚠ IMPOSTOR":`${_.color} crewmate`})]}),u.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8,alignItems:"center"},children:[u.jsx("span",{style:{fontFamily:"'Russo One',sans-serif",fontSize:"0.9rem",color:"#4488ff",letterSpacing:"2px"},children:t}),u.jsx(nh,{phase:r.phase}),u.jsx("button",{onClick:n,style:{background:"none",border:"1px solid #1e2d50",color:"#3a4a6a",borderRadius:8,padding:"5px 10px",fontSize:"0.65rem",cursor:"pointer"},children:"LEAVE"})]})]}),r.phase==="lobby"&&u.jsx("div",{style:{padding:"10px 20px",background:_.isImpostor?"linear-gradient(135deg,#1a0505,#0d0012)":"linear-gradient(135deg,#050a1a,#030d14)",borderBottom:`1px solid ${_.isImpostor?"#c5111133":"#4488ff22"}`,textAlign:"center",animation:_.isImpostor?"glow 2s ease-in-out infinite":"none"},children:_.isImpostor?u.jsxs("div",{children:[u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",color:"#e8334a",fontSize:"1.1rem",letterSpacing:"3px"},children:"🔪 YOU ARE THE IMPOSTOR"}),u.jsx("div",{style:{color:"#6a2020",fontSize:"0.68rem",marginTop:2},children:"Blend in. Don't get caught."})]}):u.jsxs("div",{children:[u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",color:"#4488ff",fontSize:"1.1rem",letterSpacing:"3px"},children:"✅ YOU ARE A CREWMATE"}),u.jsx("div",{style:{color:"#2a3a60",fontSize:"0.68rem",marginTop:2},children:"Find the impostors among you."})]})}),u.jsxs("div",{style:{maxWidth:480,margin:"0 auto",padding:"20px 14px"},children:[r.phase==="lobby"&&u.jsxs("div",{style:{textAlign:"center",paddingTop:28},children:[u.jsx("div",{style:{display:"inline-block",fontSize:"3.5rem",marginBottom:14,animation:"float 3s ease-in-out infinite"},children:"🚀"}),u.jsx("div",{style:{color:"#1e2e50",fontSize:"0.8rem",letterSpacing:"3px",marginBottom:6},children:"WAITING FOR"}),u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",color:"#4488ff",fontSize:"1.5rem",letterSpacing:"3px"},children:"EMERGENCY MEETING"}),u.jsx("div",{style:{color:"#1a2a40",fontSize:"0.68rem",marginTop:6,marginBottom:24},children:"The admin will start when ready"}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center"},children:h.filter(S=>S.alive).map(S=>u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,background:b.card,borderRadius:9,padding:"6px 10px",border:`1px solid ${b.border}`},children:[u.jsx(je,{color:S.color,size:22}),u.jsx("span",{style:{fontSize:"0.75rem"},children:S.name})]},S.id))})]}),r.phase==="voting"&&!w&&u.jsxs("div",{children:[u.jsxs("div",{style:{textAlign:"center",marginBottom:22},children:[u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",color:b.accent,fontSize:"1.9rem",letterSpacing:"4px",animation:"blink 0.8s infinite",lineHeight:1},children:"🚨 VOTE NOW 🚨"}),u.jsx("div",{style:{color:"#4a5a7a",fontSize:"0.72rem",letterSpacing:"2px",marginTop:6},children:_.isImpostor?"Vote carefully… 😈":"Who is the impostor?"})]}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:11,marginBottom:11},children:I.map(S=>u.jsxs("button",{onClick:()=>E(S.name),disabled:s,style:{background:b.card,border:`2px solid ${b.border}`,borderRadius:14,padding:"16px 10px",cursor:s?"wait":"pointer",textAlign:"center",color:"#d0daf0",transition:"border 0.15s,background 0.15s"},onMouseEnter:T=>{T.currentTarget.style.border=`2px solid ${Dt[S.color]}77`,T.currentTarget.style.background=`${Dt[S.color]}0f`},onMouseLeave:T=>{T.currentTarget.style.border=`2px solid ${b.border}`,T.currentTarget.style.background=b.card},children:[u.jsx("div",{style:{display:"flex",justifyContent:"center"},children:u.jsx(je,{color:S.color,size:52})}),u.jsx("div",{style:{fontWeight:700,marginTop:8,fontSize:"0.86rem"},children:S.name}),u.jsx("div",{style:{fontSize:"0.6rem",color:Dt[S.color],marginTop:2},children:S.color})]},S.id))}),u.jsx("button",{onClick:()=>E("skip"),disabled:s,style:{width:"100%",background:b.card,border:`2px solid ${b.border}`,borderRadius:14,padding:"13px",cursor:s?"wait":"pointer",color:"#ffcc00",fontSize:"0.8rem",letterSpacing:"2px",fontWeight:700,textTransform:"uppercase",transition:"border 0.15s,background 0.15s"},onMouseEnter:S=>{S.currentTarget.style.border="2px solid #ffcc0055",S.currentTarget.style.background="#ffcc000e"},onMouseLeave:S=>{S.currentTarget.style.border=`2px solid ${b.border}`,S.currentTarget.style.background=b.card},children:"⏭ Skip Vote"})]}),r.phase==="voting"&&w&&u.jsxs("div",{style:{textAlign:"center",paddingTop:36},children:[u.jsx("div",{style:{fontSize:"3.2rem",marginBottom:12},children:"✅"}),u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",color:"#00cc77",fontSize:"1.1rem",letterSpacing:"2px"},children:"Vote Locked In"}),u.jsxs("div",{style:{color:"#4a5a7a",fontSize:"0.8rem",marginTop:8},children:["You voted: ",u.jsx("strong",{style:{color:"#d0daf0"},children:w==="skip"?"Skip":w})]}),u.jsxs("div",{style:{marginTop:20,color:"#1e2e50",fontSize:"0.68rem",letterSpacing:"1.5px"},children:[m," of ",p," voted — waiting for admin to reveal"]}),u.jsx("div",{style:{marginTop:20,display:"flex",justifyContent:"center",flexWrap:"wrap",gap:6},children:h.filter(S=>S.alive).map(S=>u.jsx("div",{title:`${S.name}${g[S.name]?" (voted)":""}`,children:u.jsx(je,{color:S.color,size:32,glow:!!g[S.name]})},S.id))}),u.jsx("div",{style:{fontSize:"0.6rem",color:"#1a2a40",marginTop:8,letterSpacing:"1px"},children:"glowing = voted"})]}),r.phase==="results"&&!c&&u.jsx(lh,{votes:g,kickedPlayer:r.kickedPlayer,players:h,myName:_.name})]})]})]}):u.jsxs("div",{style:{minHeight:"100vh",background:"#080104",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"},children:[u.jsx(Tt,{}),u.jsxs("div",{style:{position:"relative",zIndex:1,textAlign:"center"},children:[u.jsx(je,{color:_.color,size:100,dead:!0}),u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",fontSize:"2.6rem",letterSpacing:"6px",color:"#c51111",marginTop:18},children:"EJECTED"}),u.jsxs("div",{style:{color:"#2a3a60",fontSize:"0.73rem",letterSpacing:"2px",marginTop:8},children:[_.name," • ",_.color]}),_.isImpostor&&u.jsx("div",{style:{marginTop:12},children:u.jsx(ii,{color:"#c51111",children:"You were the Impostor"})}),u.jsx("button",{onClick:n,style:{marginTop:28,background:"none",border:"1px solid #1e2d50",color:"#3a4a6a",borderRadius:8,padding:"8px 20px",fontSize:"0.68rem",letterSpacing:"2px",cursor:"pointer"},children:"LEAVE SHIP"})]})]})}function fA(t){const e=Math.max(0,t),n=Math.ceil(e/1e3),r=Math.floor(n/60),i=n%60;return`${String(r).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function hA({initialRoomCode:t}){const[e,n]=A.useState((t||"").toUpperCase()),[r,i]=A.useState((t||"").toUpperCase()),[s,o]=A.useState(null),[a,l]=A.useState(!!t),[c,d]=A.useState(""),[f,h]=A.useState(Date.now());A.useEffect(()=>r?(l(!0),Gs(`rooms/${r}`,T=>{o(T),l(!1),d(T?"":"Room not found")})):void 0,[r]),A.useEffect(()=>{if(!(s!=null&&s.gameTimerRunning))return;const S=setInterval(()=>h(Date.now()),1e3);return()=>clearInterval(S)},[s==null?void 0:s.gameTimerRunning]);const g=()=>{const S=e.trim().toUpperCase();if(!S){d("Enter a room code");return}i(S),d("")},_=A.useMemo(()=>Object.values((s==null?void 0:s.players)||{}),[s]),w=A.useMemo(()=>_.filter(S=>S.alive),[_]),I=(s==null?void 0:s.votes)||{},m=(s==null?void 0:s.gameDurationMs)||45*60*1e3,p=(s==null?void 0:s.gameRemainingMs)??m,y=s!=null&&s.gameTimerRunning&&(s!=null&&s.gameTimerStartedAt)?f-s.gameTimerStartedAt:0,v=Math.max(0,p-y),E=(s==null?void 0:s.phase)==="voting"||(s==null?void 0:s.phase)==="results";return u.jsxs("div",{style:{minHeight:"100vh",background:b.bg,color:"#d0daf0",position:"relative",padding:"20px 14px"},children:[u.jsx(Tt,{}),u.jsxs("div",{style:{maxWidth:960,margin:"0 auto",position:"relative",zIndex:1},children:[u.jsxs(Oe,{style:{marginBottom:14},children:[u.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"},children:[u.jsx(Ze,{style:{margin:0},children:"Display Screen"}),u.jsxs("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:8,width:"min(360px, 100%)"},children:[u.jsx(si,{value:e,onChange:S=>n(S.target.value.toUpperCase()),onKeyDown:S=>S.key==="Enter"&&g(),placeholder:"Room code",style:{flex:1,marginBottom:0,textTransform:"uppercase",letterSpacing:"3px"}}),u.jsx(Ce,{onClick:g,color:"#4488ff",children:"Load"})]})]}),c&&u.jsx("div",{style:{marginTop:10,color:"#ff6666",fontSize:"0.8rem"},children:c})]}),a&&u.jsx(Oe,{style:{textAlign:"center",padding:"48px 16px"},children:u.jsx(Ks,{})}),!a&&s&&u.jsxs(u.Fragment,{children:[u.jsxs(Oe,{style:{marginBottom:14,display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",fontSize:"1.6rem",letterSpacing:"5px",color:"#4488ff"},children:r}),u.jsx(nh,{phase:s.phase})]}),E?u.jsxs(Oe,{style:{border:`1px solid ${s.phase==="voting"?"#4488ff55":"#b044ff55"}`},children:[u.jsx(Ze,{children:s.phase==="voting"?"Emergency Meeting":"Meeting Results"}),s.phase==="voting"?u.jsx(q0,{alivePlayers:w,votes:I,votingOpen:s.votingOpen}):u.jsx(lh,{votes:I,kickedPlayer:s.kickedPlayer,players:_})]}):u.jsxs(Oe,{style:{textAlign:"center",padding:"50px 20px",border:"1px solid #00cc7744"},children:[u.jsx("div",{style:{color:"#2a3a60",letterSpacing:"2px",fontSize:"0.8rem",marginBottom:8},children:"GAME TIMER"}),u.jsx("div",{style:{fontFamily:"'Russo One',sans-serif",color:v>0?"#00cc77":"#ff6666",fontSize:"clamp(3rem, 14vw, 8rem)",letterSpacing:"4px",lineHeight:1},children:fA(v)}),u.jsxs("div",{style:{marginTop:12,color:"#7a8cab",fontSize:"0.9rem",letterSpacing:"1px"},children:[!s.gameStarted&&"Waiting for admin to start the 45-minute game",s.gameStarted&&s.gameTimerRunning&&"Game in progress",s.gameStarted&&!s.gameTimerRunning&&v>0&&"Paused",s.gameStarted&&v<=0&&"Time is up"]})]})]})]})]})}const $g=!Object.values(cf).some(t=>typeof t=="string"&&t.startsWith("PASTE_"));function pA(){return new URLSearchParams(window.location.search).get("room")||null}function gA(){return window.location.pathname.startsWith("/admin")}function mA(){return window.location.pathname.startsWith("/display")}function yA(){const[t,e]=A.useState(!0),[n,r]=A.useState(null),[i,s]=A.useState(()=>{try{const c=sessionStorage.getItem("amogus_player");return c?JSON.parse(c):null}catch{return null}}),o=pA();A.useEffect(()=>$g?pP(d=>{r(d),e(!1)}):void 0,[]);const a=({room:c,roomCode:d,player:f})=>{const h={roomCode:d,playerId:f.id,player:f};s(h);try{sessionStorage.setItem("amogus_player",JSON.stringify(h))}catch{}},l=()=>{s(null);try{sessionStorage.removeItem("amogus_player")}catch{}window.history.replaceState({},"",window.location.pathname)};return $g?t?u.jsxs("div",{style:{minHeight:"100vh",background:b.bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16,position:"relative"},children:[u.jsx(Tt,{}),u.jsxs("div",{style:{position:"relative",zIndex:1,textAlign:"center"},children:[u.jsx(Ks,{}),u.jsx("div",{style:{color:"#2a3a60",fontSize:"0.78rem",letterSpacing:"2px",marginTop:16},children:"INITIALISING…"})]})]}):gA()?n?u.jsx(cA,{adminUser:n}):u.jsx(_P,{}):mA()?u.jsx(hA,{initialRoomCode:o}):i?u.jsx(dA,{roomCode:i.roomCode,initialPlayer:i.player,onLeave:l}):u.jsx(uA,{initialRoomCode:o,onJoin:a}):u.jsx(yP,{})}Mc.createRoot(document.getElementById("root")).render(u.jsx(Sw.StrictMode,{children:u.jsx(yA,{})}));
