(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();var St,U,Bs,ee,Ur,zs,js,qt,dt,We,Vs,dr,Qt,Jt,bt={},vt=[],Gi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,At=Array.isArray;function X(t,e){for(var r in e)t[r]=e[r];return t}function cr(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Zi(t,e,r){var s,i,n,a={};for(n in e)n=="key"?s=e[n]:n=="ref"?i=e[n]:a[n]=e[n];if(arguments.length>2&&(a.children=arguments.length>3?St.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)a[n]===void 0&&(a[n]=t.defaultProps[n]);return ct(t,a,s,i,null)}function ct(t,e,r,s,i){var n={type:t,props:e,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Bs,__i:-1,__u:0};return i==null&&U.vnode!=null&&U.vnode(n),n}function V(t){return t.children}function ht(t,e){this.props=t,this.context=e}function be(t,e){if(e==null)return t.__?be(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?be(t):null}function Yi(t){if(t.__P&&t.__d){var e=t.__v,r=e.__e,s=[],i=[],n=X({},e);n.__v=e.__v+1,U.vnode&&U.vnode(n),hr(t.__P,n,e,t.__n,t.__P.namespaceURI,32&e.__u?[r]:null,s,r??be(e),!!(32&e.__u),i),n.__v=e.__v,n.__.__k[n.__i]=n,Zs(s,n,i),e.__e=e.__=null,n.__e!=r&&Ks(n)}}function Ks(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),Ks(t)}function qr(t){(!t.__d&&(t.__d=!0)&&ee.push(t)&&!_t.__r++||Ur!=U.debounceRendering)&&((Ur=U.debounceRendering)||zs)(_t)}function _t(){try{for(var t,e=1;ee.length;)ee.length>e&&ee.sort(js),t=ee.shift(),e=ee.length,Yi(t)}finally{ee.length=_t.__r=0}}function Qs(t,e,r,s,i,n,a,l,d,h,u){var p,c,m,b,y,_,v=s&&s.__k||vt,f=e.length;for(d=Xi(r,e,v,d,f),p=0;p<f;p++)(m=r.__k[p])!=null&&(c=m.__i!=-1&&v[m.__i]||bt,m.__i=p,_=hr(t,m,c,i,n,a,l,d,h,u),b=m.__e,m.ref&&c.ref!=m.ref&&(c.ref&&ur(c.ref,null,m),u.push(m.ref,m.__c||b,m)),y==null&&b!=null&&(y=b),4&m.__u?(d=Js(m,d,t),c.__e&&(c.__e=null)):typeof m.type=="function"&&_!==void 0?d=_:b&&(d=b.nextSibling),m.__u&=-7);return r.__e=y,d}function Xi(t,e,r,s,i){var n,a,l,d,h,u=r.length,p=u,c=0;for(t.__k=new Array(i),n=0;n<i;n++)(a=e[n])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=t.__k[n]=ct(null,a,null,null,null):At(a)?a=t.__k[n]=ct(V,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=t.__k[n]=ct(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):t.__k[n]=a,d=n+c,a.__=t,a.__b=t.__b+1,l=null,(h=a.__i=en(a,r,d,p))!=-1&&(p--,(l=r[h])&&(l.__u|=2)),l==null||l.__v==null?(h==-1&&(i>u?c--:i<u&&c++),typeof a.type!="function"&&(a.__u|=4)):h!=d&&(h==d-1?c--:h==d+1?c++:(h>d?c--:c++,a.__u|=4))):t.__k[n]=null;if(p)for(n=0;n<u;n++)(l=r[n])!=null&&(2&l.__u)==0&&(l.__e==s&&(s=be(l)),Xs(l,l));return s}function Js(t,e,r){var s,i;if(typeof t.type=="function"){for(s=t.__k,i=0;s&&i<s.length;i++)s[i]&&(s[i].__=t,e=Js(s[i],e,r));return e}t.__e!=e&&(e&&t.type&&!e.parentNode&&(e=be(t)),e=r.insertBefore(t.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function en(t,e,r,s){var i,n,a,l=t.key,d=t.type,h=e[r],u=h!=null&&(2&h.__u)==0;if(h===null&&l==null||u&&l==h.key&&d==h.type)return r;if(s>(u?1:0)){for(i=r-1,n=r+1;i>=0||n<e.length;)if((h=e[a=i>=0?i--:n++])!=null&&(2&h.__u)==0&&l==h.key&&d==h.type)return a}return-1}function Hr(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||Gi.test(e)?r:r+"px"}function st(t,e,r,s,i){var n,a;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof s=="string"&&(t.style.cssText=s=""),s)for(e in s)r&&e in r||Hr(t.style,e,"");if(r)for(e in r)s&&r[e]==s[e]||Hr(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")n=e!=(e=e.replace(Vs,"$1")),a=e.toLowerCase(),e=a in t||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=r,r?s?r[We]=s[We]:(r[We]=dr,t.addEventListener(e,n?Jt:Qt,n)):t.removeEventListener(e,n?Jt:Qt,n);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function Or(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e[dt]==null)e[dt]=dr++;else if(e[dt]<r[We])return;return r(U.event?U.event(e):e)}}}function hr(t,e,r,s,i,n,a,l,d,h){var u,p,c,m,b,y,_,v,f,P,N,x,H,A,D,w,S=e.type;if(e.constructor!==void 0)return null;128&r.__u&&(d=!!(32&r.__u),n=[l=e.__e=r.__e]),(u=U.__b)&&u(e);e:if(typeof S=="function"){p=a.length;try{if(f=e.props,P=S.prototype&&S.prototype.render,N=(u=S.contextType)&&s[u.__c],x=u?N?N.props.value:u.__:s,r.__c?v=(c=e.__c=r.__c).__=c.__E:(P?e.__c=c=new S(f,x):(e.__c=c=new ht(f,x),c.constructor=S,c.render=rn),N&&N.sub(c),c.state||(c.state={}),c.__n=s,m=c.__d=!0,c.__h=[],c._sb=[]),P&&c.__s==null&&(c.__s=c.state),P&&S.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=X({},c.__s)),X(c.__s,S.getDerivedStateFromProps(f,c.__s))),b=c.props,y=c.state,c.__v=e,m)P&&S.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),P&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(P&&S.getDerivedStateFromProps==null&&f!==b&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(f,x),e.__v==r.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(f,c.__s,x)===!1){e.__v!=r.__v&&(c.props=f,c.state=c.__s,c.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(R){R&&(R.__=e)}),vt.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&a.push(c),l=be(r);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(f,c.__s,x),P&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(b,y,_)})}if(c.context=x,c.props=f,c.__P=t,c.__e=!1,H=U.__r,A=0,P)c.state=c.__s,c.__d=!1,H&&H(e),u=c.render(c.props,c.state,c.context),vt.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,H&&H(e),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++A<25);c.state=c.__s,c.getChildContext!=null&&(s=X(X({},s),c.getChildContext())),P&&!m&&c.getSnapshotBeforeUpdate!=null&&(_=c.getSnapshotBeforeUpdate(b,y)),D=u!=null&&u.type===V&&u.key==null?Ys(u.props.children):u,l=Qs(t,At(D)?D:[D],e,r,s,i,n,a,l,d,h),c.base=e.__e,e.__u&=-161,c.__h.length&&a.push(c),v&&(c.__E=c.__=null)}catch(R){if(a.length=p,e.__v=null,d||n!=null){if(R.then){for(e.__u|=d?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;n!=null&&(n[n.indexOf(l)]=null),e.__e=l}else if(n!=null)for(w=n.length;w--;)cr(n[w])}else e.__e=r.__e;e.__k==null&&(e.__k=r.__k||[]),R.then||Gs(e),U.__e(R,e,r)}}else n==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):l=e.__e=tn(r.__e,e,r,s,i,n,a,d,h);return(u=U.diffed)&&u(e),128&e.__u?void 0:l}function Gs(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(Gs))}function Zs(t,e,r){for(var s=0;s<r.length;s++)ur(r[s],r[++s],r[++s]);U.__c&&U.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(n){n.call(i)})}catch(n){U.__e(n,i.__v)}})}function Ys(t){return typeof t!="object"||t==null||t.__b>0?t:At(t)?t.map(Ys):t.constructor!==void 0?null:X({},t)}function tn(t,e,r,s,i,n,a,l,d){var h,u,p,c,m,b,y,_=r.props||bt,v=e.props,f=e.type;if(f=="svg"?i="http://www.w3.org/2000/svg":f=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),n!=null){for(h=0;h<n.length;h++)if((m=n[h])&&"setAttribute"in m==!!f&&(f?m.localName==f:m.nodeType==3)){t=m,n[h]=null;break}}if(t==null){if(f==null)return document.createTextNode(v);t=document.createElementNS(i,f,v.is&&v),l&&(U.__m&&U.__m(e,n),l=!1),n=null}if(f==null)_===v||l&&t.data==v||(t.data=v);else{if(n=f=="textarea"&&v.defaultValue!=null?null:n&&St.call(t.childNodes),!l&&n!=null)for(_={},h=0;h<t.attributes.length;h++)_[(m=t.attributes[h]).name]=m.value;for(h in _)m=_[h],h=="dangerouslySetInnerHTML"?p=m:h=="children"||h in v||h=="value"&&"defaultValue"in v||h=="checked"&&"defaultChecked"in v||st(t,h,null,m,i);for(h in v)m=v[h],h=="children"?c=m:h=="dangerouslySetInnerHTML"?u=m:h=="value"?b=m:h=="checked"?y=m:l&&typeof m!="function"||_[h]===m||st(t,h,m,_[h],i);if(u)l||p&&(u.__html==p.__html||u.__html==t.innerHTML)||(t.innerHTML=u.__html),e.__k=[];else if(p&&(t.innerHTML=""),Qs(e.type=="template"?t.content:t,At(c)?c:[c],e,r,s,f=="foreignObject"?"http://www.w3.org/1999/xhtml":i,n,a,n?n[0]:r.__k&&be(r,0),l,d),n!=null)for(h=n.length;h--;)cr(n[h]);l&&f!="textarea"||(h="value",f=="progress"&&b==null?t.removeAttribute("value"):b!=null&&(b!==t[h]||f=="progress"&&!b||f=="option"&&b!=_[h])&&st(t,h,b,_[h],i),h="checked",y!=null&&y!=t[h]&&st(t,h,y,_[h],i))}return t}function ur(t,e,r){try{if(typeof t=="function"){var s=typeof t.__u=="function";s&&t.__u(),s&&e==null||(t.__u=t(e))}else t.current=e}catch(i){U.__e(i,r)}}function Xs(t,e,r){var s,i;if(U.unmount&&U.unmount(t),(s=t.ref)&&(s.current&&s.current!=t.__e||ur(s,null,e)),(s=t.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(n){U.__e(n,e)}s.base=s.__P=s.__n=null}if(s=t.__k)for(i=0;i<s.length;i++)s[i]&&Xs(s[i],e,r||typeof t.type!="function");r||cr(t.__e),t.__c=t.__=t.__e=void 0}function rn(t,e,r){return this.constructor(t,r)}function sn(t,e,r){var s,i,n,a;e==document&&(e=document.documentElement),U.__&&U.__(t,e),i=(s=!1)?null:e.__k,n=[],a=[],hr(e,t=e.__k=Zi(V,null,[t]),i||bt,bt,e.namespaceURI,i?null:e.firstChild?St.call(e.childNodes):null,n,i?i.__e:e.firstChild,s,a),Zs(n,t,a),t.props.children=null}St=vt.slice,U={__e:function(t,e,r,s){for(var i,n,a;e=e.__;)if((i=e.__c)&&!i.__)try{if((n=i.constructor)&&n.getDerivedStateFromError!=null&&(i.setState(n.getDerivedStateFromError(t)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,s||{}),a=i.__d),a)return i.__E=i}catch(l){t=l}throw t}},Bs=0,ht.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=X({},this.state),typeof t=="function"&&(t=t(X({},r),this.props)),t&&X(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),qr(this))},ht.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),qr(this))},ht.prototype.render=V,ee=[],zs=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,js=function(t,e){return t.__v.__b-e.__v.__b},_t.__r=0,qt=Math.random().toString(8),dt="__d"+qt,We="__a"+qt,Vs=/(PointerCapture)$|Capture$/i,dr=0,Qt=Or(!1),Jt=Or(!0);var nn=0;function o(t,e,r,s,i,n){e||(e={});var a,l,d=e;if("ref"in d)for(l in d={},e)l=="ref"?a=e[l]:d[l]=e[l];var h={type:t,props:d,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--nn,__i:-1,__u:0,__source:i,__self:n};if(typeof t=="function"&&(a=t.defaultProps))for(l in a)d[l]===void 0&&(d[l]=a[l]);return U.vnode&&U.vnode(h),h}var Ee,F,Ht,Fr,Qe=0,ei=[],W=U,Lr=W.__b,Wr=W.__r,Br=W.diffed,zr=W.__c,jr=W.unmount,Vr=W.__;function Tt(t,e){W.__h&&W.__h(F,t,Qe||e),Qe=0;var r=F.__H||(F.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function $(t){return Qe=1,on(ri,t)}function on(t,e,r){var s=Tt(Ee++,2);if(s.t=t,!s.__c&&(s.__=[ri(void 0,e),function(l){var d=s.__N?s.__N[0]:s.__[0],h=s.t(d,l);d!==h&&(s.__N=[h,s.__[1]],s.__c.setState({}))}],s.__c=F,!F.__f)){var i=function(l,d,h){if(!s.__c.__H)return!0;var u=!1,p=s.__c.props!==l;if(s.__c.__H.__.some(function(m){if(m.__N){u=!0;var b=m.__[0];m.__=m.__N,m.__N=void 0,b!==m.__[0]&&(p=!0)}}),n){var c=n.call(this,l,d,h);return u?c||p:c}return!u||p};F.__f=!0;var n=F.shouldComponentUpdate,a=F.componentWillUpdate;F.componentWillUpdate=function(l,d,h){if(this.__e){var u=n;n=void 0,i(l,d,h),n=u}a&&a.call(this,l,d,h)},F.shouldComponentUpdate=i}return s.__N||s.__}function G(t,e){var r=Tt(Ee++,3);!W.__s&&ti(r.__H,e)&&(r.__=t,r.u=e,F.__H.__h.push(r))}function tt(t){return Qe=5,kt(function(){return{current:t}},[])}function kt(t,e){var r=Tt(Ee++,7);return ti(r.__H,e)&&(r.__=t(),r.__H=e,r.__h=t),r.__}function L(t,e){return Qe=8,kt(function(){return t},e)}function pr(){var t=Tt(Ee++,11);if(!t.__){for(var e=F.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var r=e.__m||(e.__m=[0,0]);t.__="P"+r[0]+"-"+r[1]++}return t.__}function an(){for(var t;t=ei.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(ut),e.__h.some(Gt),e.__h=[]}catch(r){e.__h=[],W.__e(r,t.__v)}}}W.__b=function(t){F=null,Lr&&Lr(t)},W.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Vr&&Vr(t,e)},W.__r=function(t){Wr&&Wr(t),Ee=0;var e=(F=t.__c).__H;e&&(Ht===F?(e.__h=[],F.__h=[],e.__.some(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(e.__h.some(ut),e.__h.some(Gt),e.__h=[],Ee=0)),Ht=F},W.diffed=function(t){Br&&Br(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(ei.push(e)!==1&&Fr===W.requestAnimationFrame||((Fr=W.requestAnimationFrame)||ln)(an)),e.__H.__.some(function(r){r.u&&(r.__H=r.u,r.u=void 0)})),Ht=F=null},W.__c=function(t,e){e.some(function(r){try{r.__h.some(ut),r.__h=r.__h.filter(function(s){return!s.__||Gt(s)})}catch(s){e.some(function(i){i.__h&&(i.__h=[])}),e=[],W.__e(s,r.__v)}}),zr&&zr(t,e)},W.unmount=function(t){jr&&jr(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.some(function(s){try{ut(s)}catch(i){e=i}}),r.__H=void 0,e&&W.__e(e,r.__v))};var Kr=typeof requestAnimationFrame=="function";function ln(t){var e,r=function(){clearTimeout(s),Kr&&cancelAnimationFrame(e),setTimeout(t)},s=setTimeout(r,35);Kr&&(e=requestAnimationFrame(r))}function ut(t){var e=F,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),F=e}function Gt(t){var e=F;t.__c=t.__(),F=e}function ti(t,e){return!t||t.length!==e.length||e.some(function(r,s){return r!==t[s]})}function ri(t,e){return typeof e=="function"?e(t):e}const g={mqtt:{hostMin:1,hostMax:63,loginMax:31,passwordMax:31,haDiscoveryPrefixMin:1,haDiscoveryPrefixMax:63,topicMin:1,topicMax:63},boiler:{topicMax:63,fieldMax:15,savableDrivers:[1],savableOutdoorSensors:[1]},room:{count:8,idMin:0,idMax:7,nameMax:31,topicMax:63,temperatureFieldMax:15,savableTemperatureSensorTypes:[1],pidMin:0},valve:{count:9,idMin:0,idMax:8,channelMin:0,channelMax:15,roomIdMin:0,roomIdMax:7,fullTravelTimeMin:0,fullTravelTimeMax:6e5,windowTimeMin:0,windowTimeMax:6e5,savableTypes:[1]}},xt="Device returned an empty response (config too large for its 4KB JSON limit — shorten names/topics)",Et="Device returned an empty response.",si="Could not reach the device. Check that you are connected to its network and try again.",it={};function ii(){return{ok:!1,message:si}}function dn(t){try{const e=JSON.parse(t);if(e&&typeof e=="object"&&"message"in e){const r=e.message;if(typeof r=="string"&&r)return r}}catch{}}async function ni(t){let e=`Request failed (HTTP ${t.status}).`;try{const r=await t.text();r&&(e=dn(r)??e)}catch{}return{ok:!1,status:t.status,message:e}}async function ie(t,e){let r;try{r=await fetch(t,{headers:{Accept:"application/json"}})}catch{return ii()}if(!r.ok)return ni(r);let s;try{s=await r.text()}catch{return{ok:!1,status:r.status,message:si}}if(!s.trim())return{ok:!1,status:r.status,message:e};try{return{ok:!0,data:JSON.parse(s)}}catch{return{ok:!1,status:r.status,message:e}}}async function mr(t,e){let r;try{r=await fetch(t,e)}catch{return ii()}if(!r.ok)return ni(r);let s="";try{s=await r.text()}catch{return{ok:!0,data:it}}if(!s.trim())return{ok:!0,data:it};try{const i=JSON.parse(s);return{ok:!0,data:i&&typeof i=="object"?i:it}}catch{return{ok:!0,data:it}}}function oi(t,e){return mr(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:e.toString()})}function Pt(t,e){return mr(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}function Q(t,e,r,s=!1){if(typeof t!="string")throw new Error(`${e} is required.`);if(!s&&t.length===0)throw new Error(`${e} must not be empty.`);if(t.length>r)throw new Error(`${e} must be at most ${r} characters.`);return t}function O(t,e,r,s){if(typeof t!="number"||!Number.isFinite(t))throw new Error(`${e} must be a number.`);if(t<r||t>s)throw new Error(`${e} must be between ${r} and ${s}.`);return t}function fr(t,e){if(typeof t!="boolean")throw new Error(`${e} must be true or false.`);return t}function Zt(t,e,r){if(typeof t!="string"||!r.includes(t))throw new Error(`${e} must be one of: ${r.join(", ")}.`);return t}function cn(){return ie("/api/settings",xt)}function hn(){return ie("/api/settings/boiler",xt)}function un(){return ie("/api/settings/rooms",xt)}function pn(){return ie("/api/settings/valves",xt)}function ai(){return ie("/api/status",Et)}function mn(){return ie("/api/control",Et)}function li(){return ie("/healthcheck/healty",Et)}function fn(){return ie("/healthcheck/ready",Et)}function gn(t){const e=Q(t.host,"MQTT host",g.mqtt.hostMax),r=O(t.port,"MQTT port",1,65535),s=Q(t.login,"MQTT login",g.mqtt.loginMax,!0),i=Q(t.password,"MQTT password",g.mqtt.passwordMax,!0),n=Q(t.haDiscoveryPrefix,"HA discovery prefix",g.mqtt.haDiscoveryPrefixMax),a=fr(t.mqttIsHADiscovery,"HA discovery flag"),l=Q(t.stateTopic,"State topic",g.mqtt.topicMax),d=Q(t.commandTopic,"Command topic",g.mqtt.topicMax),h=new URLSearchParams;return h.set("host",e),h.set("port",String(r)),h.set("login",s),h.set("password",i),h.set("haDiscoveryPrefix",n),h.set("mqttIsHADiscovery",a?"true":"false"),h.set("stateTopic",l),h.set("commandTopic",d),oi("/api/settings/mqtt",h)}function bn(t){const e=O(t.driver,"Boiler driver",0,1),r=O(t.modbusAddress,"Modbus address",0,255),s=O(t.modbusSpeed,"Modbus speed",0,1e6),i=O(t.K,"Weather curve K",-1e6,1e6),n=O(t.B,"Weather curve B",-1e6,1e6),a=O(t.P,"Weather curve P",-1e6,1e6),l=O(t.I,"Weather curve I",-1e6,1e6),d=O(t.minSetPoint,"Minimum setpoint",30,80);if(e!==1)throw new Error('Boiler driver must be ECTOControlV2 (1); the device rejects "No select".');const h=O(t.outdoorSensor,"Outdoor sensor",0,1);if(h!==1)throw new Error('Outdoor sensor must be MQTT (1); the device rejects "No select".');const u=Q(t.outdoorSensorMqttTopic??"","Outdoor sensor topic",g.boiler.topicMax,!0),p=Q(t.outdoorSensorMqttField??"","Outdoor sensor field",g.boiler.fieldMax,!0);if(h===1&&u.length===0)throw new Error("Outdoor sensor topic is required when MQTT is selected.");const c=new URLSearchParams;return c.set("driver",String(e)),c.set("modbusAddress",String(r)),c.set("modbusSpeed",String(s)),c.set("K",String(i)),c.set("B",String(n)),c.set("P",String(a)),c.set("I",String(l)),c.set("minSetPoint",String(d)),c.set("outdoorSensor",String(h)),c.set("outdoorSensorMqttTopic",u),c.set("outdoorSensorMqttField",p),oi("/api/settings/boiler/update",c)}function Yt(t){const e=O(t.id,"Room id",g.room.idMin,g.room.idMax),r=fr(t.enabled,"Room enabled"),s=O(t.temperatureSensorType,"Temperature sensor type",1,1),i=Q(t.name,"Room name",g.room.nameMax),n=Q(t.mqttCommandTopic,"Room command topic",g.room.topicMax),a=Q(t.mqttStateTopic,"Room state topic",g.room.topicMax),l=Q(t.mqttTemperatureSensorTopic,"Temperature topic",g.room.topicMax),d=Q(t.mqttTemperatureSensorField.trim(),"Temperature field",g.room.temperatureFieldMax,!0),h=O(t.kP,"Room kP",g.room.pidMin,1e6),u=O(t.kI,"Room kI",g.room.pidMin,1e6),p=O(t.kD,"Room kD",g.room.pidMin,1e6);return Pt("/api/settings/room",{id:e,enabled:r,temperatureSensorType:s,name:i,mqttCommandTopic:n,mqttStateTopic:a,mqttTemperatureSensorTopic:l,mqttTemperatureSensorField:d,kP:h,kI:u,kD:p})}function Xt(t){const e=O(t.id,"Valve id",g.valve.idMin,g.valve.idMax),r=fr(t.enabled,"Valve enabled"),s=O(t.type,"Valve type",1,1),i=O(t.channel,"Valve channel",g.valve.channelMin,g.valve.channelMax),n=O(t.fullTravelTime,"Full travel time",g.valve.fullTravelTimeMin,g.valve.fullTravelTimeMax),a=O(t.windowTime,"Window time",g.valve.windowTimeMin,g.valve.windowTimeMax),l=O(t.roomID,"Room id",g.valve.roomIdMin,g.valve.roomIdMax);return Pt("/api/settings/valve",{id:e,enabled:r,type:s,channel:i,fullTravelTime:n,windowTime:a,roomID:l})}function vn(t){const e={};if(t.centralHeatingMode!==void 0&&(e.centralHeatingMode=Zt(t.centralHeatingMode,"Central heating mode",["off","heat","auto"])),t.centralHeatingSetPoint!==void 0&&(e.centralHeatingSetPoint=O(t.centralHeatingSetPoint,"Central heating setpoint",30,80)),t.hotWaterMode!==void 0&&(e.hotWaterMode=Zt(t.hotWaterMode,"Hot water mode",["off","gas"])),t.hotWaterSetPoint!==void 0&&(e.hotWaterSetPoint=O(t.hotWaterSetPoint,"Hot water setpoint",-1e6,1e6)),Object.keys(e).length===0)throw new Error("At least one boiler command field is required.");return Pt("/api/control/boiler",e)}function _n(t){const e=O(t.id,"Room id",g.room.idMin,g.room.idMax);if(!Number.isInteger(e))throw new Error("Room id must be an integer.");const r={id:e};if(t.mode!==void 0&&(r.mode=Zt(t.mode,"Room mode",["off","heat"])),t.setPoint!==void 0&&(r.setPoint=O(t.setPoint,"Room setpoint",16,32)),t.mode===void 0&&t.setPoint===void 0)throw new Error("Room mode or setpoint is required.");return Pt("/api/control/room",r)}function $n(){return mr("/api/reboot",{method:"POST"})}function yn({tabs:t,active:e,onSelect:r}){return o("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:t.map(s=>o("button",{type:"button",role:"tab",id:`tab-${s.id}`,"aria-selected":s.id===e,"aria-controls":`panel-${s.id}`,class:s.id===e?"active":void 0,onClick:()=>r(s.id),children:s.label},s.id))})}function E({kind:t="info",message:e,onClose:r}){return o("div",{class:`banner banner-${t}`,role:"status",children:[o("span",{children:e}),r?o("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:r,children:"×"}):null]})}function wn(t){switch(t){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function I({children:t,variant:e="default",type:r="button",disabled:s,title:i,onClick:n}){return o("button",{type:r,class:wn(e),disabled:s,title:i,onClick:n,children:t})}function gr(t){return o(I,{...t,variant:"danger"})}function z({title:t,children:e,class:r}){return o("section",{class:r?`card ${r}`:"card",children:[t?o("h2",{children:t}):null,e]})}const Ot=2e3,Sn=12e4;function An(){const[t,e]=$("idle"),r=tt(0);G(()=>{if(t!=="rebooting")return;let a=!1,l;const d=()=>{li().then(h=>{if(!a){if(h.ok){e("ready");return}if(r.current+=1,r.current*Ot>=Sn){e("timeout");return}l=window.setTimeout(d,Ot)}})};return l=window.setTimeout(d,Ot),()=>{a=!0,l!==void 0&&window.clearTimeout(l)}},[t]);const s=L(()=>{r.current=0,e("rebooting")},[]),i=L(()=>e("idle"),[]),n=L(()=>{r.current=0,e("rebooting")},[]);return kt(()=>({phase:t,start:s,dismiss:i,retry:n}),[t,s,i,n])}function Tn({flow:t}){return t.phase==="idle"?null:o("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:o("div",{class:"reboot-dialog card",children:[o("h2",{children:"Device is rebooting"}),t.phase==="rebooting"?o(V,{children:[o("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),o("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,t.phase==="ready"?o(V,{children:[o(E,{kind:"success",message:"The device is back online."}),o("div",{class:"form-actions",children:o(I,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,t.phase==="timeout"?o(V,{children:[o(E,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),o("div",{class:"form-actions",children:[o(I,{onClick:t.retry,children:"Keep waiting"}),o(I,{onClick:t.dismiss,children:"Dismiss"})]})]}):null]})})}const kn=1e4;function xn(t){const e=Math.max(0,Math.floor(t)),r=Math.floor(e/86400),s=Math.floor(e%86400/3600),i=Math.floor(e%3600/60),n=e%60,a=[];return r&&a.push(`${r}d`),(r||s)&&a.push(`${s}h`),(r||s||i)&&a.push(`${i}m`),a.push(`${n}s`),a.join(" ")}function En(t){return Number.isFinite(t)?`${Math.round(t/1024)} KB (${Math.round(t)} bytes)`:String(t)}function Pn(){const[t,e]=$(null),[r,s]=$(null),[i,n]=$(!1),[a,l]=$(null),[d,h]=$(null),[u,p]=$(!0),[c,m]=$(null),[b,y]=$(!1),_=An(),v=L(async()=>{const H=await ai();H.ok?(e(H.data),s(null)):s(H.message),n(!0)},[]),f=L(async()=>{p(!0);const[H,A]=await Promise.all([li(),fn()]);l(H),h(A),p(!1)},[]);G(()=>{v();const H=window.setInterval(()=>{v()},kn);return()=>window.clearInterval(H)},[v]),G(()=>{f()},[f]);const P=L(async()=>{if(!window.confirm("Reboot the device now? Heating control will be offline for about 20-60 seconds."))return;m(null),y(!0);const A=await $n();y(!1),A.ok?_.start():m(A.message)},[_.start]),N=u&&!a?o("p",{class:"muted",children:"Checking device health…"}):a?a.ok?o(E,{kind:a.data.healty?"success":"error",message:a.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):o(E,{kind:"error",message:a.message}):null,x=d?d.ok?o(E,{kind:d.data.ready?"success":"info",message:d.data.ready?"All registered services are ready.":`Not ready: ${d.data.message}`}):d.status===500?o(E,{kind:"info",message:`Not ready: ${d.message}`}):o(E,{kind:"error",message:d.message}):null;return o("div",{class:"stack",children:[o(z,{title:"Device",children:[i?r?o(V,{children:[o(E,{kind:"error",message:r}),o("div",{class:"form-actions",children:o(I,{onClick:()=>{v()},children:"Retry"})})]}):t?o("dl",{class:"kv",children:[o("dt",{children:"Free heap"}),o("dd",{children:En(t.freeHeap)}),o("dt",{children:"Uptime"}),o("dd",{children:xn(t.uptime)}),o("dt",{children:"Last reset reason"}),o("dd",{children:t.lastResetReason})]}):null:o("p",{class:"muted",children:"Loading status…"}),o("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),o(z,{title:"Health",children:[N,x,o("div",{class:"form-actions",children:o(I,{onClick:()=>{f()},disabled:u,children:u?"Checking…":"Refresh health"})})]}),o(z,{title:"Maintenance",children:[o("p",{class:"muted",children:"A reboot briefly interrupts heating control. Configuration changes saved on the other tabs only take effect after a reboot."}),c?o(E,{kind:"error",message:c,onClose:()=>m(null)}):null,o("div",{class:"form-actions",children:o(gr,{onClick:()=>{P()},disabled:b||_.phase!=="idle",children:"Reboot device"})})]}),o(Tn,{flow:_})]})}function T({label:t,value:e,onInput:r,type:s="text",name:i,placeholder:n,maxLength:a,min:l,max:d,step:h,error:u,help:p,disabled:c,required:m,autoComplete:b,inputMode:y}){const _=pr();return o("label",{class:"field",for:_,children:[o("span",{class:"field-label",children:t}),o("input",{id:_,name:i,type:s,value:e,placeholder:n,maxLength:a,min:l,max:d,step:h,disabled:c,required:m,autoComplete:b,inputMode:y,onInput:f=>{r?.(f.currentTarget.value)},"aria-invalid":u?!0:void 0}),p&&!u?o("span",{class:"field-help",children:p}):null,u?o("span",{class:"field-error",children:u}):null]})}const Cn=3e3,di="—",Mn=[["off","Off"],["heat","Heat"],["auto","Auto"]];function Ft(t){if(t==="true")return!0;if(t==="false")return!1}function we(t){return t===void 0||!Number.isFinite(t)?di:`${t.toFixed(1)} °C`}function ci(t){return t===void 0||!Number.isFinite(t)?di:`${t}%`}function nt(t){return t&&t.length>0?t:"no data"}function Qr(t){return t===void 0||!Number.isFinite(t)?"":String(Number(t.toFixed(2)))}function er({label:t,value:e,min:r,max:s,step:i,disabled:n,help:a,pending:l,submitLabel:d="Apply",onSubmit:h}){const[u,p]=$(()=>Qr(e)),[c,m]=$(null);return G(()=>{p(Qr(e))},[e]),o("form",{onSubmit:y=>{y.preventDefault();const _=u.trim(),v=Number(_);if(_===""||!Number.isFinite(v)){m("Enter a number.");return}if(r!==void 0&&v<r){m(`Must be at least ${r}.`);return}if(s!==void 0&&v>s){m(`Must be at most ${s}.`);return}m(null),h(v)},children:[o(T,{label:t,value:u,onInput:y=>{p(y),m(null)},type:"number",min:r,max:s,step:i,disabled:n,error:c??void 0,help:a}),o("div",{class:"form-actions",children:o(I,{type:"submit",variant:"primary",disabled:l||n,children:l?"Applying…":d})})]})}function Nn({room:t,pending:e,error:r,onCommand:s,onDismissError:i}){const n=t.active;return o("div",{class:"valve-row",children:[o("div",{class:"row",children:[o("strong",{children:[t.name||`Room ${t.id}`," ",o("span",{class:"badge badge-slot",children:["slot ",t.id]})]}),o(I,{variant:n?"default":"primary",disabled:e,onClick:()=>s(t.id,{id:t.id,mode:n?"off":"heat"}),children:n?"Disable":"Enable"})]}),o("dl",{class:"kv mt",children:[o("dt",{children:"Status"}),o("dd",{children:n?"active":"inactive"}),o("dt",{children:"Current temperature"}),o("dd",{children:t.temperatureValid?we(t.currentTemperature):"no data"}),o("dt",{children:"Valve opening"}),o("dd",{children:ci(t.valveOpening)})]}),r?o(E,{kind:"error",message:r,onClose:()=>i(t.id)}):null,o("div",{class:"mt",children:o(er,{label:"Room setpoint (\\u00b0C)",value:t.setPoint,min:16,max:32,step:.1,pending:e,onSubmit:a=>s(t.id,{id:t.id,setPoint:a})})})]})}function In(){const[t,e]=$(null),[r,s]=$(!1),[i,n]=$(null),[a,l]=$(!1),[d,h]=$(null),[u,p]=$({}),c=tt(!1),m=L(async()=>{if(c.current)return;const w=await mn();w.ok?(e(w.data),n(null)):n(w.message),s(!0)},[]);G(()=>{m();const w=window.setInterval(()=>{m()},Cn);return()=>window.clearInterval(w)},[m]);const b=L(async(w,S)=>{if(c.current)return;c.current=!0,l(!0);let R=!1;try{const j=await w();j.ok?R=!0:S(j.message)}catch(j){S(j instanceof Error?j.message:String(j))}c.current=!1,l(!1),R&&await m()},[m]),y=L(w=>{h(null),b(()=>vn(w),h)},[b]),_=L((w,S)=>{p(R=>{const j={...R};return delete j[w],j}),b(()=>_n(S),R=>p(j=>({...j,[w]:R})))},[b]),v=L(w=>{p(S=>{const R={...S};return delete R[w],R})},[]);if(!r)return o(z,{title:"Control",children:o("p",{class:"muted",children:"Loading live control state…"})});if(!t)return o(z,{title:"Control",children:[o(E,{kind:"error",message:i??"No control data received."}),o("div",{class:"form-actions",children:o(I,{onClick:()=>{m()},children:"Retry"})})]});const f=t.boiler,P=f.requestedMode,N=P==="auto",x=f.hotWaterMode!==void 0&&f.hotWaterMode!=="off",H=Ft(f.isFlameActive),A=Ft(f.isFault),D=Ft(f.isHotWaterActive);return o("div",{class:"stack",children:[i?o(E,{kind:"error",message:i,onClose:()=>n(null)}):null,o(z,{title:"Boiler",children:[d?o(E,{kind:"error",message:d,onClose:()=>h(null)}):null,o("div",{class:"row",children:[o("span",{class:"muted",children:"Requested mode"}),Mn.map(([w,S])=>o(I,{variant:P===w?"primary":"default",disabled:a,onClick:()=>y({centralHeatingMode:w}),children:S},w))]}),N?o("p",{class:"muted mt",children:"Manual central-heating setpoint is ignored while mode is auto."}):null,o("div",{class:"mt",children:o(er,{label:"CH setpoint (\\u00b0C)",value:f.centralHeatingSetPoint,min:30,max:80,step:.1,disabled:N,help:N?"Disabled while the boiler runs the weather curve in AUTO mode.":"Applies immediately; the firmware clamps it to 30–80 °C.",pending:a,submitLabel:"Apply CH setpoint",onSubmit:w=>y({centralHeatingSetPoint:w})})}),o("h3",{children:"Hot water"}),o("div",{class:"row",children:[o("span",{class:"muted",children:["Requested mode: ",nt(f.hotWaterMode)]}),o(I,{variant:x?"primary":"default",disabled:a,onClick:()=>y({hotWaterMode:x?"off":"gas"}),children:x?"Turn hot water off":"Turn hot water on"})]}),o("div",{class:"mt",children:o(er,{label:"DHW setpoint (\\u00b0C)",value:f.hotWaterSetPoint,step:.1,help:"Written to the boiler immediately.",pending:a,submitLabel:"Apply DHW setpoint",onSubmit:w=>y({hotWaterSetPoint:w})})}),o("h3",{children:"Live readout"}),o("dl",{class:"kv",children:[o("dt",{children:"CH mode"}),o("dd",{children:nt(f.centralHeatingMode)}),o("dt",{children:"CH state"}),o("dd",{children:nt(f.centralHeatingState)}),o("dt",{children:"CH setpoint"}),o("dd",{children:we(f.centralHeatingSetPoint)}),o("dt",{children:"CH current temperature"}),o("dd",{children:we(f.centralHeatingCurrentTemperature)}),o("dt",{children:"DHW mode"}),o("dd",{children:nt(f.hotWaterMode)}),o("dt",{children:"DHW setpoint"}),o("dd",{children:we(f.hotWaterSetPoint)}),o("dt",{children:"DHW current temperature"}),o("dd",{children:we(f.hotWaterCurrentTemperature)}),o("dt",{children:"DHW active"}),o("dd",{children:D===void 0?"no data":D?"yes":"no"}),o("dt",{children:"Modulation"}),o("dd",{children:ci(f.modulation)}),o("dt",{children:"Outdoor temperature"}),o("dd",{children:we(f.outdoorTemperature)}),o("dt",{children:"Flame"}),o("dd",{children:H===void 0?o("span",{class:"muted",children:"no data"}):o("span",{class:H?"badge badge-on":"badge badge-off",children:H?"active":"inactive"})}),o("dt",{children:"Fault"}),o("dd",{children:A===void 0?o("span",{class:"muted",children:"no data"}):o("span",{class:A?"badge":"badge badge-off",style:A?{color:"var(--danger)",borderColor:"var(--danger-border)",background:"var(--danger-soft)"}:void 0,children:A?"fault active":"no fault"})})]}),o("p",{class:"muted mt",children:"Live values refresh automatically every 3 seconds. Commands apply immediately; no reboot is required."})]}),o(z,{title:"Rooms",children:t.rooms.length===0?o("p",{class:"muted",children:"No enabled rooms."}):o("div",{class:"valve-list",children:t.rooms.map(w=>o(Nn,{room:w,pending:a,error:u[w.id]??null,onCommand:_,onDismissError:v},w.id))})})]})}function Dn({label:t,checked:e,onChange:r,disabled:s,help:i,name:n}){const a=pr();return o("div",{class:"checkbox-field",children:[o("label",{class:"checkbox-label",for:a,children:[o("input",{id:a,name:n,type:"checkbox",checked:e,disabled:s,onChange:d=>{r?.(d.currentTarget.checked)}}),o("span",{children:t})]}),i?o("span",{class:"field-help",children:i}):null]})}function Re(){return o(E,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."})}function Rn({label:t,value:e,onInput:r,maxLength:s,error:i,help:n,disabled:a,autoComplete:l}){const[d,h]=$(!1);return o("div",{class:"password-field",children:[o(T,{label:t,value:e,onInput:r,type:d?"text":"password",maxLength:s,error:i,help:n,disabled:a,autoComplete:l}),o("button",{type:"button",class:"btn reveal-toggle","aria-pressed":d,disabled:a,onClick:()=>h(u=>!u),children:d?"Hide":"Show"})]})}const Un={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:""};function qn(t){const e={};t.host.trim().length===0?e.host="Host is required.":t.host.length>g.mqtt.hostMax&&(e.host=`At most ${g.mqtt.hostMax} characters.`);const r=Number(t.port);return t.port.trim()===""?e.port="Port is required.":(!Number.isInteger(r)||r<1||r>65535)&&(e.port="Port must be an integer between 1 and 65535."),t.login.length>g.mqtt.loginMax&&(e.login=`At most ${g.mqtt.loginMax} characters.`),t.password.length>g.mqtt.passwordMax&&(e.password=`At most ${g.mqtt.passwordMax} characters.`),t.haDiscoveryPrefix.trim().length===0?e.haDiscoveryPrefix="Discovery prefix is required.":t.haDiscoveryPrefix.length>g.mqtt.haDiscoveryPrefixMax&&(e.haDiscoveryPrefix=`At most ${g.mqtt.haDiscoveryPrefixMax} characters.`),t.stateTopic.trim().length===0?e.stateTopic="Required - the device crashes if the state topic is missing.":t.stateTopic.length>g.mqtt.topicMax&&(e.stateTopic=`At most ${g.mqtt.topicMax} characters.`),t.commandTopic.trim().length===0?e.commandTopic="Required - the device crashes if the command topic is missing.":t.commandTopic.length>g.mqtt.topicMax&&(e.commandTopic=`At most ${g.mqtt.topicMax} characters.`),e}function Hn(t){return Object.keys(t).length>0}function On(){const[t,e]=$(!1),[r,s]=$(null),[i,n]=$(Un),[a,l]=$({}),[d,h]=$(!1),[u,p]=$(null),[c,m]=$(null),b=L(async()=>{s(null);const v=await cn();v.ok?n({host:v.data.mqttHost,port:String(v.data.mqttPort),login:v.data.mqttLogin,password:v.data.mqttPassword,haDiscoveryPrefix:v.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:v.data.mqttIsHADiscovery,stateTopic:v.data.mqttStateTopic,commandTopic:v.data.mqttCommandTopic}):s(v.message),e(!0)},[]);G(()=>{b()},[b]);const y=v=>n(f=>({...f,...v})),_=L(async v=>{v.preventDefault();const f=qn(i);if(l(f),p(null),m(null),Hn(f))return;h(!0);const P=await gn({host:i.host,port:Number(i.port),login:i.login,password:i.password,haDiscoveryPrefix:i.haDiscoveryPrefix,mqttIsHADiscovery:i.mqttIsHADiscovery,stateTopic:i.stateTopic,commandTopic:i.commandTopic});h(!1),P.ok?p("MQTT settings saved to flash."):m(P.message)},[i]);return t?o("div",{class:"stack",children:[o(Re,{}),r?o(V,{children:[o(E,{kind:"error",message:r}),o("div",{class:"form-actions",children:o(I,{onClick:()=>{b()},children:"Retry"})})]}):null,o(z,{title:"MQTT",children:o("form",{onSubmit:_,children:[o(T,{label:"Host",value:i.host,onInput:v=>y({host:v}),maxLength:g.mqtt.hostMax,error:a.host,autoComplete:"off"}),o(T,{label:"Port",value:i.port,onInput:v=>y({port:v}),type:"number",min:1,max:65535,inputMode:"numeric",error:a.port}),o(T,{label:"Login",value:i.login,onInput:v=>y({login:v}),maxLength:g.mqtt.loginMax,error:a.login,autoComplete:"off"}),o(Rn,{label:"Password",value:i.password,onInput:v=>y({password:v}),maxLength:g.mqtt.passwordMax,error:a.password,autoComplete:"new-password"}),o(T,{label:"HA discovery prefix",value:i.haDiscoveryPrefix,onInput:v=>y({haDiscoveryPrefix:v}),maxLength:g.mqtt.haDiscoveryPrefixMax,error:a.haDiscoveryPrefix,autoComplete:"off"}),o(Dn,{label:"Enable Home Assistant discovery",checked:i.mqttIsHADiscovery,onChange:v=>y({mqttIsHADiscovery:v})}),o(T,{label:"State topic",value:i.stateTopic,onInput:v=>y({stateTopic:v}),maxLength:g.mqtt.topicMax,error:a.stateTopic,help:"Must not be empty: the device crashes on a missing state topic.",autoComplete:"off"}),o(T,{label:"Command topic",value:i.commandTopic,onInput:v=>y({commandTopic:v}),maxLength:g.mqtt.topicMax,error:a.commandTopic,help:"Must not be empty: the device crashes on a missing command topic.",autoComplete:"off"}),u?o(E,{kind:"success",message:u,onClose:()=>p(null)}):null,c?o(E,{kind:"error",message:c,onClose:()=>m(null)}):null,o("div",{class:"form-actions",children:o(I,{type:"submit",variant:"primary",disabled:d,children:d?"Saving…":"Save MQTT"})})]})})]}):o(z,{title:"Connections",children:o("p",{class:"muted",children:"Loading connection settings…"})})}function pt({label:t,value:e,options:r,onChange:s,error:i,help:n,disabled:a,required:l,name:d}){const h=pr(),u=p=>{s?.(p.currentTarget.value)};return o("label",{class:"field",for:h,children:[o("span",{class:"field-label",children:t}),o("select",{id:h,name:d,value:String(e),disabled:a,required:l,onChange:u,"aria-invalid":i?!0:void 0,children:r.map(p=>o("option",{value:p.value,disabled:p.disabled,children:p.label},p.value))}),n&&!i?o("span",{class:"field-help",children:n}):null,i?o("span",{class:"field-error",children:i}):null]})}const Fn=640,Jr=360,Y=56,Se=624,Fe=16,xe=312,hi=Se-Y,ui=xe-Fe,tr=20,pi=-30,rr=20,mi=85,Gr=80,Ln=[20,10,0,-10,-20,-30],Wn=[20,30,40,50,60,70,80],Bn=1,zn=7.2,jn=50;function Lt(t,e){return Number.isFinite(t)?t:e}function Zr(t){return Y+(tr-t)/(tr-pi)*hi}function ot(t){return xe-(t-rr)/(mi-rr)*ui}function Vn(t){return t>0?`+${t}`:String(t)}function Kn({k:t,b:e,minSetPoint:r}){const s=Lt(t,Bn),i=Lt(e,zn),n=Lt(r,jn),a=-.21*s-.06,l=6.04*s+1.98,d=-5.06*s+18.06,h=[];for(let c=tr;c>=pi;c-=1){const m=-.2*c+5,b=a*m*m+l*m+d+i,y=Math.min(Gr,Math.max(n,b));h.push(`${Zr(c).toFixed(2)},${ot(y).toFixed(2)}`)}const u=ot(Math.min(mi,Math.max(rr,n))),p=ot(Gr);return o("svg",{class:"weather-curve",viewBox:`0 0 ${Fn} ${Jr}`,preserveAspectRatio:"xMidYMid meet",role:"img","aria-label":"Weather curve: computed boiler setpoint versus outdoor temperature",children:[o("rect",{class:"wc-plot",x:Y,y:Fe,width:hi,height:ui}),Wn.map(c=>{const m=ot(c);return o("g",{children:[o("line",{class:"wc-grid",x1:Y,y1:m,x2:Se,y2:m}),o("text",{class:"wc-tick",x:Y-8,y:m+4,"text-anchor":"end",children:c})]},`sp-${c}`)}),Ln.map(c=>{const m=Zr(c);return o("g",{children:[o("line",{class:"wc-grid",x1:m,y1:Fe,x2:m,y2:xe}),o("text",{class:"wc-tick",x:m,y:xe+18,"text-anchor":"middle",children:Vn(c)})]},`out-${c}`)}),o("line",{class:"wc-max",x1:Y,y1:p,x2:Se,y2:p}),o("text",{class:"wc-max-label",x:Se-4,y:p-5,"text-anchor":"end",children:"max 80"}),o("polyline",{class:"wc-curve",points:h.join(" ")}),o("line",{class:"wc-min",x1:Y,y1:u,x2:Se,y2:u}),o("text",{class:"wc-min-label",x:Y+4,y:u-5,"text-anchor":"start",children:"min"}),o("text",{class:"wc-axis-title",x:(Y+Se)/2,y:Jr-8,"text-anchor":"middle",children:"Outdoor, °C"}),o("text",{class:"wc-axis-title",x:16,y:(Fe+xe)/2,"text-anchor":"middle",transform:`rotate(-90 16 ${(Fe+xe)/2})`,children:"Setpoint, °C"})]})}const Yr=[1200,2400,4800,9600,19200,38400,57600,115200],Qn={driver:"0",modbusAddress:"1",modbusSpeed:"9600",K:"0",B:"0",P:"0",I:"0",minSetPoint:"50",outdoorSensor:"0",outdoorSensorMqttTopic:"",outdoorSensorMqttField:""};function Le(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function Jn(t){return Object.keys(t).length>0}function Gn(t){const e={};t.driver!=="1"&&(e.driver='Saving requires ECTOControlV2 (1); the device rejects "No select".');const r=Le(t.modbusAddress);(r===null||!Number.isInteger(r)||r<1||r>247)&&(e.modbusAddress="Address must be an integer between 1 and 247.");const s=Le(t.modbusSpeed);(s===null||s<=0)&&(e.modbusSpeed="Speed must be a positive number.");const i=[["K",t.K,"K"],["B",t.B,"B"],["P",t.P,"P"],["I",t.I,"I"]];for(const[a,l,d]of i)Le(l)===null&&(e[a]=`${d} must be a number.`);const n=Le(t.minSetPoint);return(n===null||n<30||n>80)&&(e.minSetPoint="Minimum setpoint must be between 30 and 80."),t.outdoorSensor!=="1"&&(e.outdoorSensor='Saving requires MQTT (1); the device rejects "No".'),t.outdoorSensorMqttTopic.trim().length===0?e.outdoorSensorMqttTopic="Topic is required when MQTT is selected.":t.outdoorSensorMqttTopic.length>g.boiler.topicMax&&(e.outdoorSensorMqttTopic=`At most ${g.boiler.topicMax} characters.`),t.outdoorSensorMqttField.length>g.boiler.fieldMax&&(e.outdoorSensorMqttField=`At most ${g.boiler.fieldMax} characters.`),e}function Zn(t){const e=Yr.map(s=>({value:String(s),label:String(s)})),r=Le(t);return r!==null&&!Yr.includes(r)&&e.unshift({value:t,label:`${t} (current)`}),e}function Yn(){const[t,e]=$(!1),[r,s]=$(null),[i,n]=$(Qn),[a,l]=$({}),[d,h]=$(!1),[u,p]=$(null),[c,m]=$(null),b=kt(()=>Zn(i.modbusSpeed),[i.modbusSpeed]),y=L(async()=>{s(null);const f=await hn();f.ok?n({driver:String(f.data.driver),modbusAddress:String(f.data.modbusAddress),modbusSpeed:String(f.data.modbusSpeed),K:String(f.data.K),B:String(f.data.B),P:String(f.data.P),I:String(f.data.I),minSetPoint:String(f.data.minSetPoint),outdoorSensor:String(f.data.outdoorSensor),outdoorSensorMqttTopic:f.data.outdoorSensorMqttTopic,outdoorSensorMqttField:f.data.outdoorSensorMqttField}):s(f.message),e(!0)},[]);G(()=>{y()},[y]);const _=f=>n(P=>({...P,...f})),v=L(async f=>{f.preventDefault();const P=Gn(i);if(l(P),p(null),m(null),Jn(P))return;h(!0);const N=await bn({driver:Number(i.driver),modbusAddress:Number(i.modbusAddress),modbusSpeed:Number(i.modbusSpeed),K:Number(i.K),B:Number(i.B),P:Number(i.P),I:Number(i.I),minSetPoint:Number(i.minSetPoint),outdoorSensor:Number(i.outdoorSensor),outdoorSensorMqttTopic:i.outdoorSensorMqttTopic,outdoorSensorMqttField:i.outdoorSensorMqttField});h(!1),N.ok?p("Boiler settings saved to flash."):m(N.message)},[i]);return t?o("div",{class:"stack",children:[o(Re,{}),r?o(V,{children:[o(E,{kind:"error",message:r}),o("div",{class:"form-actions",children:o(I,{onClick:()=>{y()},children:"Retry"})})]}):null,o(z,{title:"Boiler driver",children:o("form",{onSubmit:v,children:[o(pt,{label:"Driver",value:i.driver,onChange:f=>_({driver:f}),options:[{value:"0",label:"No select (0) - not savable"},{value:"1",label:"ECTOControlV2 (1)"}],error:a.driver,help:"The device accepts only ECTOControlV2 when saving."}),o(T,{label:"Modbus address",value:i.modbusAddress,onInput:f=>_({modbusAddress:f}),type:"number",min:1,max:247,step:1,inputMode:"numeric",error:a.modbusAddress,help:"1-247 (the firmware does not range-check this)."}),o(pt,{label:"Modbus speed (baud)",value:i.modbusSpeed,onChange:f=>_({modbusSpeed:f}),options:b,error:a.modbusSpeed}),o("h3",{children:"Weather curve"}),o(T,{label:"K (curve scale)",value:i.K,onInput:f=>_({K:f}),type:"number",step:1e-4,error:a.K}),o(T,{label:"B (offset, °C)",value:i.B,onInput:f=>_({B:f}),type:"number",step:1e-4,error:a.B}),o(T,{label:"P (trim gain)",value:i.P,onInput:f=>_({P:f}),type:"number",step:1e-4,error:a.P}),o(T,{label:"I (trim integral, °C/s)",value:i.I,onInput:f=>_({I:f}),type:"number",step:1e-4,error:a.I}),o(T,{label:"Minimum setpoint (°C)",value:i.minSetPoint,onInput:f=>_({minSetPoint:f}),type:"number",min:30,max:80,step:1e-4,inputMode:"numeric",error:a.minSetPoint,help:"Lower bound for the computed setpoint (30-80 °C)."}),o("p",{class:"muted",children:"Base curve without room trim. Effective setpoint = curve + trim, clamped to [min, 80]."}),o(Kn,{k:Number(i.K),b:Number(i.B),minSetPoint:Number(i.minSetPoint)}),o("h3",{children:"Outdoor sensor"}),o(pt,{label:"Source",value:i.outdoorSensor,onChange:f=>_({outdoorSensor:f}),options:[{value:"0",label:"No (0) - not savable"},{value:"1",label:"MQTT (1)"}],error:a.outdoorSensor,help:"The device accepts only MQTT when saving."}),o(T,{label:"Outdoor sensor MQTT topic",value:i.outdoorSensorMqttTopic,onInput:f=>_({outdoorSensorMqttTopic:f}),maxLength:g.boiler.topicMax,disabled:i.outdoorSensor!=="1",error:a.outdoorSensorMqttTopic,help:"Required when the source is MQTT.",autoComplete:"off"}),o(T,{label:"Outdoor sensor MQTT field",value:i.outdoorSensorMqttField,onInput:f=>_({outdoorSensorMqttField:f}),placeholder:"value",maxLength:g.boiler.fieldMax,disabled:i.outdoorSensor!=="1",error:a.outdoorSensorMqttField,help:"Optional; leave empty if the payload is a bare number (parsed as float, not JSON).",autoComplete:"off"}),u?o(E,{kind:"success",message:u,onClose:()=>p(null)}):null,c?o(E,{kind:"error",message:c,onClose:()=>m(null)}):null,o("div",{class:"form-actions",children:o(I,{type:"submit",variant:"primary",disabled:d,children:d?"Saving…":"Save boiler settings"})})]})})]}):o(z,{title:"Boiler",children:o("p",{class:"muted",children:"Loading boiler settings…"})})}const Xn="60000",eo="30000";function Wt(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function fi(t){return Object.keys(t).length>0}function gi(t,e){const r={},s=Wt(t.channel);s===null||!Number.isInteger(s)||s<g.valve.channelMin||s>g.valve.channelMax?r.channel=`Channel must be an integer between ${g.valve.channelMin} and ${g.valve.channelMax}.`:e?.has(s)&&(r.channel=`Channel ${s} is already used by another enabled valve.`);const i=Wt(t.fullTravelTime);(i===null||!Number.isInteger(i)||i<g.valve.fullTravelTimeMin||i>g.valve.fullTravelTimeMax)&&(r.fullTravelTime=`Full travel time must be an integer number of milliseconds between ${g.valve.fullTravelTimeMin} and ${g.valve.fullTravelTimeMax}.`);const n=Wt(t.windowTime);return(n===null||!Number.isInteger(n)||n<g.valve.windowTimeMin||n>g.valve.windowTimeMax)&&(r.windowTime=`Window time must be an integer number of milliseconds between ${g.valve.windowTimeMin} and ${g.valve.windowTimeMax}.`),r}function Xr(t){return{channel:String(t.channel),fullTravelTime:String(t.fullTravelTime),windowTime:String(t.windowTime)}}function to({id:t,valve:e,onSaved:r,onNotice:s,takenChannels:i}){const[n,a]=$(!1),[l,d]=$(()=>Xr(e)),[h,u]=$({}),[p,c]=$(!1),[m,b]=$(!1),[y,_]=$(null),[v,f]=$(null),[P,N]=$(null),x=w=>d(S=>({...S,...w})),H=()=>{n||(d(Xr(e)),u({}),_(null),f(null)),a(w=>!w)},A=async w=>{w.preventDefault();const S=gi(l,i);if(u(S),_(null),f(null),fi(S))return;const R=Number(l.channel),j=Number(l.fullTravelTime),rt=Number(l.windowTime);c(!0);try{const J=await Xt({id:t,enabled:!0,type:g.valve.savableTypes[0],channel:R,fullTravelTime:j,windowTime:rt,roomID:e.roomID});c(!1),J.ok?(_("Valve saved to flash."),r(t,{...e,enabled:!0,type:g.valve.savableTypes[0],channel:R,fullTravelTime:j,windowTime:rt,roomID:e.roomID})):f(J.message)}catch(J){c(!1),f(J instanceof Error?J.message:String(J))}},D=async()=>{if(window.confirm("Valve will be unbound on next reboot. Continue?")){N(null),b(!0);try{const S=await Xt({id:t,enabled:!1,type:g.valve.savableTypes[0],channel:e.channel,fullTravelTime:e.fullTravelTime,windowTime:e.windowTime,roomID:e.roomID});b(!1),S.ok?(r(t,{...e,enabled:!1,type:g.valve.savableTypes[0]}),s("Valve unbound. Reboot to apply.")):N(S.message)}catch(S){b(!1),N(S instanceof Error?S.message:String(S))}}};return o("li",{class:"valve-row",children:[o("div",{class:"row",children:[o("span",{class:"valve-summary",children:["Valve ",o("span",{class:"mono",children:t}),o("span",{class:"sep","aria-hidden":"true",children:"·"}),"channel ",o("span",{class:"mono",children:e.channel}),o("span",{class:"sep","aria-hidden":"true",children:"·"}),o("span",{class:"mono",children:e.fullTravelTime})," ",o("span",{class:"unit",children:"ms travel"}),o("span",{class:"sep","aria-hidden":"true",children:"·"}),o("span",{class:"mono",children:e.windowTime})," ",o("span",{class:"unit",children:"ms window"})]}),o("div",{class:"form-actions",children:[o(I,{onClick:H,disabled:p||m,children:n?"Close":"Edit"}),o(gr,{onClick:()=>{D()},disabled:m||p,children:m?"Deleting…":"Delete"})]})]}),P?o(E,{kind:"error",message:P,onClose:()=>N(null)}):null,n?o("form",{onSubmit:A,children:[o(T,{label:"Channel",value:l.channel,onInput:w=>x({channel:w}),type:"number",min:g.valve.channelMin,max:g.valve.channelMax,step:1,inputMode:"numeric",error:h.channel}),o(T,{label:"Full travel time (ms)",value:l.fullTravelTime,onInput:w=>x({fullTravelTime:w}),type:"number",min:g.valve.fullTravelTimeMin,max:g.valve.fullTravelTimeMax,step:1,inputMode:"numeric",error:h.fullTravelTime}),o(T,{label:"Window time (ms)",value:l.windowTime,onInput:w=>x({windowTime:w}),type:"number",min:g.valve.windowTimeMin,max:g.valve.windowTimeMax,step:1,inputMode:"numeric",error:h.windowTime}),y?o(E,{kind:"success",message:y,onClose:()=>_(null)}):null,v?o(E,{kind:"error",message:v,onClose:()=>f(null)}):null,o(Re,{}),o("div",{class:"form-actions",children:o(I,{type:"submit",variant:"primary",disabled:p||m,children:p?"Saving…":`Save valve ${t}`})})]}):null]})}function ro({slot:t,roomSlot:e,suggestedChannel:r,takenChannels:s,onAdded:i,onCancel:n}){const[a,l]=$(()=>({channel:String(r),fullTravelTime:Xn,windowTime:eo})),[d,h]=$({}),[u,p]=$(!1),[c,m]=$(null),b=_=>l(v=>({...v,..._}));return o("form",{onSubmit:async _=>{_.preventDefault();const v=gi(a,s);if(h(v),m(null),fi(v))return;const f=Number(a.channel),P=Number(a.fullTravelTime),N=Number(a.windowTime);p(!0);try{const x=await Xt({id:t,enabled:!0,type:g.valve.savableTypes[0],channel:f,fullTravelTime:P,windowTime:N,roomID:e});p(!1),x.ok?i(t,{enabled:!0,type:g.valve.savableTypes[0],channel:f,fullTravelTime:P,windowTime:N,roomID:e}):m(x.message)}catch(x){p(!1),m(x instanceof Error?x.message:String(x))}},children:[o(E,{kind:"info",message:"Suggested channel and timings are prefilled. Review before adding."}),o(T,{label:"Channel",value:a.channel,onInput:_=>b({channel:_}),type:"number",min:g.valve.channelMin,max:g.valve.channelMax,step:1,inputMode:"numeric",error:d.channel}),o(T,{label:"Full travel time (ms)",value:a.fullTravelTime,onInput:_=>b({fullTravelTime:_}),type:"number",min:g.valve.fullTravelTimeMin,max:g.valve.fullTravelTimeMax,step:1,inputMode:"numeric",error:d.fullTravelTime}),o(T,{label:"Window time (ms)",value:a.windowTime,onInput:_=>b({windowTime:_}),type:"number",min:g.valve.windowTimeMin,max:g.valve.windowTimeMax,step:1,inputMode:"numeric",error:d.windowTime}),c?o(E,{kind:"error",message:c,onClose:()=>m(null)}):null,o(Re,{}),o("div",{class:"form-actions",children:[o(I,{type:"submit",variant:"primary",disabled:u,children:u?"Adding…":`Add valve ${t}`}),o(I,{onClick:n,disabled:u,children:"Cancel"})]})]})}function so({roomSlot:t,valves:e,valvesError:r,onRetry:s,onSaved:i}){const[n,a]=$(!1),[l,d]=$(null),h=L((b,y)=>{i(b,y),a(!1),d("Valve added to this room. Reboot to apply.")},[i]);if(r)return o("div",{class:"mt valve-section",children:[o("h4",{children:"Valves"}),o(E,{kind:"error",message:r}),o("div",{class:"form-actions",children:o(I,{onClick:s,children:"Retry"})})]});if(!e)return o("div",{class:"mt valve-section",children:[o("h4",{children:"Valves"}),o("p",{class:"muted",children:"Loading valves…"})]});const u=e.map((b,y)=>({valve:b,id:y})).filter(b=>b.valve.enabled&&b.valve.roomID===t),p=e.findIndex(b=>!b.enabled),c=new Set(e.filter(b=>b.enabled).map(b=>b.channel));let m=g.valve.channelMin;for(;m<=g.valve.channelMax&&c.has(m);)m+=1;return m>g.valve.channelMax&&(m=g.valve.channelMin),o("div",{class:"mt valve-section",children:[o("h4",{children:"Valves"}),l?o(E,{kind:"success",message:l,onClose:()=>d(null)}):null,u.length===0?o("p",{class:"muted",children:"No valves bound."}):o("ul",{class:"valve-list",children:u.map(({valve:b,id:y})=>{const _=new Set(e.filter((v,f)=>v.enabled&&f!==y).map(v=>v.channel));return o(to,{id:y,valve:b,onSaved:i,onNotice:v=>d(v),takenChannels:_},y)})}),p>=0?n?o(ro,{slot:p,roomSlot:t,suggestedChannel:m,takenChannels:c,onAdded:h,onCancel:()=>a(!1)}):o("div",{class:"form-actions",children:o(I,{onClick:()=>a(!0),children:"Add valve"})}):o("p",{class:"muted",children:"All 9 valve slots are in use."})]})}function io(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function bi(t){return Object.keys(t).length>0}function vi(t){const e={};t.name.trim().length===0?e.name="Name is required.":t.name.length>g.room.nameMax&&(e.name=`At most ${g.room.nameMax} characters.`);const r=[["mqttCommandTopic",t.mqttCommandTopic,"Command topic",g.room.topicMax],["mqttStateTopic",t.mqttStateTopic,"State topic",g.room.topicMax],["mqttTemperatureSensorTopic",t.mqttTemperatureSensorTopic,"Temperature topic",g.room.topicMax]];for(const[i,n,a,l]of r)n.trim().length===0?e[i]=`${a} is required.`:n.length>l&&(e[i]=`At most ${l} characters.`);t.mqttTemperatureSensorField.trim().length>g.room.temperatureFieldMax&&(e.mqttTemperatureSensorField=`At most ${g.room.temperatureFieldMax} characters.`);const s=[["kP",t.kP,"kP"],["kI",t.kI,"kI"],["kD",t.kD,"kD"]];for(const[i,n,a]of s){const l=io(n);(l===null||l<g.room.pidMin||l>1e6)&&(e[i]=`${a} must be a number greater than or equal to ${g.room.pidMin} and at most 1000000.`)}return e}function es(t,e){const r=t.name||`Room ${e+1}`,s=t.mqttCommandTopic||`prometey/room${e}/set`,i=t.mqttStateTopic||`prometey/room${e}/state`,n=t.mqttTemperatureSensorTopic||`prometey/room${e}/temperature`,a=t.mqttTemperatureSensorField;return{usedPlaceholders:(t.name||"").trim().length===0||(t.mqttCommandTopic||"").trim().length===0||(t.mqttStateTopic||"").trim().length===0||(t.mqttTemperatureSensorTopic||"").trim().length===0,form:{enabled:t.enabled,name:r,mqttCommandTopic:s,mqttStateTopic:i,mqttTemperatureSensorTopic:n,mqttTemperatureSensorField:a,kP:String(t.kP),kI:String(t.kI),kD:String(t.kD)}}}function no(t){return{enabled:!0,name:`Room ${t+1}`,mqttCommandTopic:`prometey/room${t}/set`,mqttStateTopic:`prometey/room${t}/state`,mqttTemperatureSensorTopic:`prometey/room${t}/temperature`,mqttTemperatureSensorField:"",kP:"1",kI:"0.01",kD:"0"}}function oo(t,e,r){return{id:e,enabled:r,temperatureSensorType:g.room.savableTemperatureSensorTypes[0],name:t.name,mqttCommandTopic:t.mqttCommandTopic,mqttStateTopic:t.mqttStateTopic,mqttTemperatureSensorTopic:t.mqttTemperatureSensorTopic,mqttTemperatureSensorField:t.mqttTemperatureSensorField,kP:t.kP,kI:t.kI,kD:t.kD}}function ao({slot:t,room:e,valves:r,valvesError:s,onRetryValves:i,onValveSaved:n,onSaved:a,onDeleted:l}){const[d,h]=$(!1),[u,p]=$(()=>es(e,t).form),[c,m]=$(!1),[b,y]=$({}),[_,v]=$(!1),[f,P]=$(!1),[N,x]=$(null),[H,A]=$(null),[D,w]=$(null),S=M=>p(K=>({...K,...M})),R=()=>{if(!d){const M=es(e,t);p(M.form),m(M.usedPlaceholders),y({}),x(null),A(null)}h(M=>!M)},j=async M=>{M.preventDefault();const K=vi(u);if(y(K),x(null),A(null),!bi(K)){v(!0);try{const ye=await Yt({id:t,enabled:u.enabled,temperatureSensorType:g.room.savableTemperatureSensorTypes[0],name:u.name,mqttCommandTopic:u.mqttCommandTopic,mqttStateTopic:u.mqttStateTopic,mqttTemperatureSensorTopic:u.mqttTemperatureSensorTopic,mqttTemperatureSensorField:u.mqttTemperatureSensorField,kP:Number(u.kP),kI:Number(u.kI),kD:Number(u.kD)});v(!1),ye.ok?(x("Room saved to flash."),m(!1),a(t,{...e,id:t,enabled:u.enabled,name:u.name,mqttCommandTopic:u.mqttCommandTopic,mqttStateTopic:u.mqttStateTopic,mqttTemperatureSensorTopic:u.mqttTemperatureSensorTopic,mqttTemperatureSensorField:u.mqttTemperatureSensorField,kP:Number(u.kP),kI:Number(u.kI),kD:Number(u.kD)})):A(ye.message)}catch(ye){v(!1),A(ye instanceof Error?ye.message:String(ye))}}},rt=async()=>{if(window.confirm(`Delete room "${e.name||`slot ${t}`}"? This sets enabled=false and keeps the stored config; the DEVICE WILL NEED A REBOOT for heating control to stop.`)){w(null),P(!0);try{const K=await Yt(oo(e,t,!1));P(!1),K.ok?l(t):w(K.message)}catch(K){P(!1),w(K instanceof Error?K.message:String(K))}}},J=[];e.I!==void 0&&J.push(["PID I (runtime)",String(e.I)]),e.prevError!==void 0&&J.push(["prevError (runtime)",String(e.prevError)]),e.valveOpeningPercent!==void 0&&J.push(["Valve opening",`${e.valveOpeningPercent}%`]),e.prevTime!==void 0&&J.push(["prevTime (raw)",String(e.prevTime)]);const Ut=r?r.filter(M=>M.enabled&&M.roomID===t).length:null;return o(z,{class:"room-card",children:[o("div",{class:"card-header",children:[o("h3",{children:[e.name||`Room ${t+1}`," ",o("span",{class:"badge badge-slot",children:["slot ",t]})]}),Ut!==null?o("span",{class:"muted",children:[Ut," valve",Ut===1?"":"s"," bound"]}):null]}),e.id!==t?o(E,{kind:"info",message:`Stored id is ${e.id} but this entry sits in slot ${t}; saving rewrites slot ${t} and normalizes the id.`}):null,o("dl",{class:"kv",children:[e.id!==t?o(V,{children:[o("dt",{children:"Stored id"}),o("dd",{children:e.id})]}):null,o("dt",{children:"Command topic"}),o("dd",{children:e.mqttCommandTopic||o("span",{class:"muted",children:"(empty)"})}),o("dt",{children:"State topic"}),o("dd",{children:e.mqttStateTopic||o("span",{class:"muted",children:"(empty)"})}),o("dt",{children:"Temperature topic"}),o("dd",{children:e.mqttTemperatureSensorTopic||o("span",{class:"muted",children:"(empty)"})}),o("dt",{children:"Temperature field"}),o("dd",{children:e.mqttTemperatureSensorField||o("span",{class:"muted",children:"(empty)"})}),o("dt",{children:"kP / kI / kD"}),o("dd",{children:[e.kP," / ",e.kI," / ",e.kD]}),J.map(([M,K])=>o(V,{children:[o("dt",{children:M}),o("dd",{children:K})]},M))]}),o("div",{class:"form-actions",children:[o(I,{onClick:R,disabled:_||f,children:d?"Close editor":"Edit room"}),o(gr,{onClick:()=>{rt()},disabled:f||_,children:f?"Deleting…":"Delete room"})]}),D?o(E,{kind:"error",message:D,onClose:()=>w(null)}):null,d?o("div",{class:"room-editor",children:[o("form",{onSubmit:j,children:[c?o(E,{kind:"info",message:"This room had empty required fields; suggested defaults were prefilled. Review and adjust before saving."}):null,o(T,{label:"Room id",value:t,disabled:!0,help:"Fixed slot index; the device writes to this position."}),o(pt,{label:"Temperature sensor type",value:g.room.savableTemperatureSensorTypes[0],disabled:!0,options:[{value:"1",label:"MQTT (1)"}],help:"Only MQTT is accepted by the firmware, even for disabled rooms."}),o(T,{label:"Name",value:u.name,onInput:M=>S({name:M}),maxLength:g.room.nameMax,error:b.name,autoComplete:"off"}),o(T,{label:"Command topic",value:u.mqttCommandTopic,onInput:M=>S({mqttCommandTopic:M}),maxLength:g.room.topicMax,error:b.mqttCommandTopic,autoComplete:"off"}),o(T,{label:"State topic",value:u.mqttStateTopic,onInput:M=>S({mqttStateTopic:M}),maxLength:g.room.topicMax,error:b.mqttStateTopic,autoComplete:"off"}),o(T,{label:"Temperature topic",value:u.mqttTemperatureSensorTopic,onInput:M=>S({mqttTemperatureSensorTopic:M}),maxLength:g.room.topicMax,error:b.mqttTemperatureSensorTopic,autoComplete:"off"}),o(T,{label:"Temperature field",value:u.mqttTemperatureSensorField,onInput:M=>S({mqttTemperatureSensorField:M}),placeholder:"value",maxLength:g.room.temperatureFieldMax,error:b.mqttTemperatureSensorField,help:"Optional; leave empty if the message payload is a bare number (parsed as float, not JSON).",autoComplete:"off"}),o(T,{label:"kP",value:u.kP,onInput:M=>S({kP:M}),type:"number",min:g.room.pidMin,step:1e-4,error:b.kP}),o(T,{label:"kI",value:u.kI,onInput:M=>S({kI:M}),type:"number",min:g.room.pidMin,step:1e-4,error:b.kI}),o(T,{label:"kD",value:u.kD,onInput:M=>S({kD:M}),type:"number",min:g.room.pidMin,step:1e-4,error:b.kD}),N?o(E,{kind:"success",message:N,onClose:()=>x(null)}):null,H?o(E,{kind:"error",message:H,onClose:()=>A(null)}):null,o(Re,{}),o("div",{class:"form-actions",children:o(I,{type:"submit",variant:"primary",disabled:_||f,children:_?"Saving…":`Save room ${t}`})})]}),o(so,{roomSlot:t,valves:r,valvesError:s,onRetry:i,onSaved:n})]}):null]})}function ts({freeSlot:t,onAdded:e,onCancel:r}){const[s,i]=$(()=>no(t)),[n,a]=$({}),[l,d]=$(!1),[h,u]=$(null),p=m=>i(b=>({...b,...m}));return o("form",{onSubmit:async m=>{m.preventDefault();const b=vi(s);if(a(b),u(null),bi(b))return;const y=Number(s.kP),_=Number(s.kI),v=Number(s.kD);d(!0);try{const f=await Yt({id:t,enabled:!0,temperatureSensorType:g.room.savableTemperatureSensorTypes[0],name:s.name,mqttCommandTopic:s.mqttCommandTopic,mqttStateTopic:s.mqttStateTopic,mqttTemperatureSensorTopic:s.mqttTemperatureSensorTopic,mqttTemperatureSensorField:s.mqttTemperatureSensorField,kP:y,kI:_,kD:v});d(!1),f.ok?e(t,{id:t,enabled:!0,temperatureSensorType:g.room.savableTemperatureSensorTypes[0],name:s.name,mqttCommandTopic:s.mqttCommandTopic,mqttStateTopic:s.mqttStateTopic,mqttTemperatureSensorTopic:s.mqttTemperatureSensorTopic,mqttTemperatureSensorField:s.mqttTemperatureSensorField,kP:y,kI:_,kD:v}):u(f.message)}catch(f){d(!1),u(f instanceof Error?f.message:String(f))}},children:[o(E,{kind:"info",message:`Suggested defaults for slot ${t} are prefilled. Review and adjust before adding.`}),o(T,{label:"Room id",value:t,disabled:!0,help:"Lowest free slot; the device writes to this position."}),o(T,{label:"Name",value:s.name,onInput:m=>p({name:m}),maxLength:g.room.nameMax,error:n.name,autoComplete:"off"}),o(T,{label:"Command topic",value:s.mqttCommandTopic,onInput:m=>p({mqttCommandTopic:m}),maxLength:g.room.topicMax,error:n.mqttCommandTopic,autoComplete:"off"}),o(T,{label:"State topic",value:s.mqttStateTopic,onInput:m=>p({mqttStateTopic:m}),maxLength:g.room.topicMax,error:n.mqttStateTopic,autoComplete:"off"}),o(T,{label:"Temperature topic",value:s.mqttTemperatureSensorTopic,onInput:m=>p({mqttTemperatureSensorTopic:m}),maxLength:g.room.topicMax,error:n.mqttTemperatureSensorTopic,autoComplete:"off"}),o(T,{label:"Temperature field",value:s.mqttTemperatureSensorField,onInput:m=>p({mqttTemperatureSensorField:m}),placeholder:"value",maxLength:g.room.temperatureFieldMax,error:n.mqttTemperatureSensorField,help:"Optional; leave empty if the message payload is a bare number (parsed as float, not JSON).",autoComplete:"off"}),o(T,{label:"kP",value:s.kP,onInput:m=>p({kP:m}),type:"number",min:g.room.pidMin,step:1e-4,error:n.kP,help:"Suggested starting value."}),o(T,{label:"kI",value:s.kI,onInput:m=>p({kI:m}),type:"number",min:g.room.pidMin,step:1e-4,error:n.kI,help:"Suggested starting value."}),o(T,{label:"kD",value:s.kD,onInput:m=>p({kD:m}),type:"number",min:g.room.pidMin,step:1e-4,error:n.kD,help:"Suggested starting value."}),h?o(E,{kind:"error",message:h,onClose:()=>u(null)}):null,o(Re,{}),o("div",{class:"form-actions",children:[o(I,{type:"submit",variant:"primary",disabled:l,children:l?"Adding…":`Add room ${t}`}),o(I,{onClick:r,disabled:l,children:"Cancel"})]})]})}function lo(){const[t,e]=$(null),[r,s]=$(!1),[i,n]=$(null),[a,l]=$(null),[d,h]=$(null),[u,p]=$(!1),[c,m]=$(null),b=L(async()=>{n(null);const A=await un();A.ok?Array.isArray(A.data.rooms)?e(A.data.rooms):n("Device returned an unexpected rooms payload."):n(A.message),s(!0)},[]),y=L(async()=>{h(null);const A=await pn();A.ok?Array.isArray(A.data.valves)?l(A.data.valves):h("Device returned an unexpected valves payload."):h(A.message)},[]);G(()=>{b(),y()},[b,y]);const _=L((A,D)=>{e(w=>w&&w.map((S,R)=>R===A?D:S))},[]),v=L((A,D)=>{l(w=>w&&w.map((S,R)=>R===A?D:S))},[]),f=L((A,D)=>{e(w=>w&&w.map((S,R)=>R===A?D:S)),p(!1),m("Room added. Reboot to apply.")},[]),P=L(A=>{e(D=>D&&D.map((w,S)=>S===A?{...w,id:A,enabled:!1}:w)),m("Room removed from heating. Reboot to apply.")},[]);if(!r)return o(z,{title:"Rooms",children:o("p",{class:"muted",children:"Loading rooms…"})});const N=(t??[]).map((A,D)=>({room:A,slot:D})).filter(A=>A.room.enabled),x=t?t.findIndex(A=>!A.enabled):-1,H=x>=0?o(z,{title:"Add room",children:u?o(ts,{freeSlot:x,onAdded:f,onCancel:()=>p(!1)},x):o("div",{class:"form-actions",children:o(I,{variant:"primary",onClick:()=>p(!0),children:"Add room"})})}):o(z,{title:"Add room",children:o("p",{class:"muted",children:"All 8 room slots are in use. Disable a room before adding another."})});return o("div",{class:"stack",children:i?o(z,{title:"Rooms",children:[o(E,{kind:"error",message:i}),o("div",{class:"form-actions",children:o(I,{onClick:()=>{b()},children:"Retry"})})]}):t?o(V,{children:[c?o(E,{kind:"info",message:c,onClose:()=>m(null)}):null,N.length===0?o(z,{title:"Rooms",children:u&&x>=0?o(ts,{freeSlot:x,onAdded:f,onCancel:()=>p(!1)},x):o(V,{children:[o("p",{class:"muted",children:"No rooms are enabled yet. Add a room to start controlling heating."}),x>=0?o("div",{class:"form-actions",children:o(I,{variant:"primary",onClick:()=>p(!0),children:"Add room"})}):o("p",{class:"muted",children:"All 8 room slots are in use. Disable a room before adding another."})]})}):o(V,{children:[N.map(({room:A,slot:D})=>o(ao,{slot:D,room:A,valves:a,valvesError:d,onRetryValves:()=>{y()},onValveSaved:v,onSaved:_,onDeleted:P},D)),H]})]}):null})}const co="Download a zip of everything the device has stored: config.bin + boiler state + room states (8). It contains your Wi-Fi and MQTT credentials in plaintext, so keep the archive somewhere safe. Download the FULL BACKUP zip before uploading the web UI: filesystem uploads (pio run -e kc868a16 -t uploadfs) ERASE LittleFS, so /config.bin, /boiler.bin and every /room_*.bin are gone.",ho="Download config.bin only. It contains your Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.",uo="Uploading this archive REPLACES config.bin, boiler state and room states on the device AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?",po="Uploading REPLACES /config.bin on the device AND REBOOTS IT IMMEDIATELY. Unsaved in-RAM settings will be lost. The device will be offline 20-60 seconds. Continue?";function mo(){const t=tt(null);return G(()=>{const e=document.createElement("edc-config-backup-page");return e.setAttribute("device-name","Prometey"),e.setAttribute("archive-file-name","prometey-config.zip"),e.setAttribute("zip-notes",co),e.setAttribute("bin-notes",ho),e.setAttribute("zip-confirm-text",uo),e.setAttribute("bin-confirm-text",po),t.current?.append(e),()=>e.remove()},[]),o("div",{ref:t})}function fo(){const t=tt(null);return G(()=>{const e=document.createElement("edn-network-page");return t.current?.append(e),()=>e.remove()},[]),o("div",{ref:t})}function go(){const t=tt(null);return G(()=>{const e=document.createElement("edu-log-settings-page");return e.setAttribute("device-name","Prometey"),t.current?.append(e),()=>e.remove()},[]),o("div",{ref:t})}const bo=[{id:"status",label:"Status"},{id:"control",label:"Control"},{id:"connections",label:"MQTT"},{id:"network",label:"Network"},{id:"boiler",label:"Boiler"},{id:"rooms",label:"Rooms"},{id:"logger",label:"Logger"},{id:"backup",label:"Backup"}];function vo(t){switch(t){case"status":return o(Pn,{});case"control":return o(In,{});case"connections":return o(On,{});case"network":return o(fo,{});case"boiler":return o(Yn,{});case"rooms":return o(lo,{});case"logger":return o(go,{});case"backup":return o(mo,{})}}function _o(){const[t,e]=$("status"),[r,s]=$(null);return G(()=>{let i=!0;return ai().then(n=>{i&&n.ok&&n.data.fwVersion&&s(n.data.fwVersion)}),()=>{i=!1}},[]),o(V,{children:[o("header",{class:"app-header",children:[o("div",{class:"brand",children:[o("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:[o("path",{fill:"currentColor",d:"M12 23c4.4 0 7.5-2.7 7.5-6.7 0-2.3-1-4.3-2.3-6.1-.8 1.6-1.8 2.6-2.9 3.3.4-1.4.2-3.1-.7-5C12.7 6.1 11.3 4.3 10.4 2c-.3 2.3-1.4 4-2.7 5.5C6.4 9.1 4.5 11 4.5 15c0 4 3.1 8 7.5 8z"}),o("path",{fill:"currentColor",opacity:".45",d:"M12 21.2c-1.6 0-2.8-1.1-2.8-2.8 0-1.3.7-2.1 1.5-3 .3.7.8 1.1 1.4 1.4-.2-1.2.1-2.4 1-3.5.9 1.2 1.4 2.6 1.4 4 0 2.3-1.4 3.9-2.5 3.9z"})]}),o("h1",{children:"Prometey"})]}),o("div",{class:"versions",children:[o("span",{class:"hint",children:"offline device panel"}),o("span",{class:"hint version",children:["FW ",r??"—"]}),o("span",{class:"hint version",children:["UI ","9c64de9-dirty"]})]})]}),o(yn,{tabs:bo,active:t,onSelect:e}),o("main",{class:"tab-content",id:`panel-${t}`,role:"tabpanel","aria-labelledby":`tab-${t}`,children:vo(t)})]})}function $o(t){if(t&&typeof t=="object"&&"error"in t){let e=t.error;if(typeof e=="string"&&e.length>0)return e}}function _i(t={}){let e=t.baseUrl??"",r=t.headers??{};async function s(i,n){let a;try{a=await fetch(`${e}${i}`,{...n,headers:{Accept:"application/json",...n?.body===void 0?{}:{"Content-Type":"application/json"},...r}})}catch(u){return n?.signal?.aborted===!0||typeof u=="object"&&u&&u.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let l=await a.text().catch(()=>""),d,h=!1;if(l.length>0)try{d=JSON.parse(l),h=!0}catch{h=!1}if(!a.ok){let u=$o(d);return{ok:!1,status:a.status,message:u??`Request failed with HTTP ${a.status}.`}}return h?{ok:!0,data:d}:{ok:!1,status:a.status,message:`Unexpected response from server (HTTP ${a.status}).`}}return{getSettings(i){return s("/api/network/settings",{signal:i})},saveSettings(i,n){return s("/api/network/settings",{method:"POST",body:JSON.stringify(i),signal:n})},getStatus(i){return s("/api/network/status",{signal:i})},wifiList(i){return s("/api/wifi/list",{signal:i})}}}var mt=globalThis,br=mt.ShadowRoot&&(mt.ShadyCSS===void 0||mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vr=Symbol(),rs=new WeakMap,$i=class{constructor(e,r,s){if(this._$cssResult$=!0,s!==vr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(br&&e===void 0){let s=r!==void 0&&r.length===1;s&&(e=rs.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&rs.set(r,e))}return e}toString(){return this.cssText}},yo=t=>new $i(typeof t=="string"?t:t+"",void 0,vr),_r=(t,...e)=>new $i(t.length===1?t[0]:e.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]),t,vr),wo=(t,e)=>{if(br)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),i=mt.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,t.appendChild(s)}},ss=br?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return yo(r)})(t):t,{is:So,defineProperty:Ao,getOwnPropertyDescriptor:To,getOwnPropertyNames:ko,getOwnPropertySymbols:xo,getPrototypeOf:Eo}=Object,Ct=globalThis,is=Ct.trustedTypes,Po=is?is.emptyScript:"",Co=Ct.reactiveElementPolyfillSupport,Be=(t,e)=>t,sr={toAttribute(t,e){switch(e){case Boolean:t=t?Po:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},yi=(t,e)=>!So(t,e),ns={attribute:!0,type:String,converter:sr,reflect:!1,useDefault:!1,hasChanged:yi};Symbol.metadata??=Symbol("metadata"),Ct.litPropertyMetadata??=new WeakMap;var Ae=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=ns){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,r);i!==void 0&&Ao(this.prototype,e,i)}}static getPropertyDescriptor(e,r,s){let{get:i,set:n}=To(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get:i,set(a){let l=i?.call(this);n?.call(this,a),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ns}static _$Ei(){if(this.hasOwnProperty(Be("elementProperties")))return;let e=Eo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Be("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Be("properties"))){let r=this.properties,s=[...ko(r),...xo(r)];for(let i of s)this.createProperty(i,r[i])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[s,i]of r)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[r,s]of this.elementProperties){let i=this._$Eu(r,s);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)r.unshift(ss(i))}else e!==void 0&&r.push(ss(e));return r}static _$Eu(e,r){let s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let s of r.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,s){this._$AK(e,s)}_$ET(e,r){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute===void 0?sr:s.converter).toAttribute(r,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,r){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?sr:n.converter;this._$Em=i;let l=a.fromAttribute(r,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,r,s,i=!1,n){if(e!==void 0){let a=this.constructor;if(i===!1&&(n=this[e]),s??=a.getPropertyOptions(e),!((s.hasChanged??yi)(n,r)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,s))))return;this.C(e,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:s,reflect:i,wrapped:n},a){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??r??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(r=void 0),this._$AL.set(e,r)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:a}=n,l=this[i];a!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(r)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};Ae.elementStyles=[],Ae.shadowRootOptions={mode:"open"},Ae[Be("elementProperties")]=new Map,Ae[Be("finalized")]=new Map,Co?.({ReactiveElement:Ae}),(Ct.reactiveElementVersions??=[]).push("2.1.2");var $r=globalThis,os=t=>t,$t=$r.trustedTypes,as=$t?$t.createPolicy("lit-html",{createHTML:t=>t}):void 0,wi="$lit$",te=`lit$${Math.random().toFixed(9).slice(2)}$`,Si="?"+te,Mo=`<${Si}>`,ve=document,Je=()=>ve.createComment(""),Ge=t=>t===null||typeof t!="object"&&typeof t!="function",yr=Array.isArray,No=t=>yr(t)||typeof t?.[Symbol.iterator]=="function",Bt=`[ 	
\f\r]`,Ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ls=/-->/g,ds=/>/g,ne=RegExp(`>|${Bt}(?:([^\\s"'>=/]+)(${Bt}*=${Bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),cs=/'/g,hs=/"/g,Ai=/^(?:script|style|textarea|title)$/i,k=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),Pe=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),us=new WeakMap,le=ve.createTreeWalker(ve,129);function Ti(t,e){if(!yr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return as===void 0?e:as.createHTML(e)}var Io=(t,e)=>{let r=t.length-1,s=[],i,n=e===2?"<svg>":e===3?"<math>":"",a=Ue;for(let l=0;l<r;l++){let d=t[l],h,u,p=-1,c=0;for(;c<d.length&&(a.lastIndex=c,u=a.exec(d),u!==null);)c=a.lastIndex,a===Ue?u[1]==="!--"?a=ls:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(a=ne):(Ai.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=ne):a=ds:a===ne?u[0]===">"?(a=i??Ue,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?ne:u[3]==='"'?hs:cs):a===hs||a===cs?a=ne:a===ls||a===ds?a=Ue:(a=ne,i=void 0);let m=a===ne&&t[l+1].startsWith("/>")?" ":"";n+=a===Ue?d+Mo:p>=0?(s.push(h),d.slice(0,p)+wi+d.slice(p)+te+m):d+te+(p===-2?l:m)}return[Ti(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},ir=class ki{constructor({strings:e,_$litType$:r},s){let i;this.parts=[];let n=0,a=0,l=e.length-1,d=this.parts,[h,u]=Io(e,r);if(this.el=ki.createElement(h,s),le.currentNode=this.el.content,r===2||r===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=le.nextNode())!==null&&d.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(wi)){let c=u[a++],m=i.getAttribute(p).split(te),b=/([.?@])?(.*)/.exec(c);d.push({type:1,index:n,name:b[2],strings:m,ctor:b[1]==="."?Ro:b[1]==="?"?Uo:b[1]==="@"?qo:Mt}),i.removeAttribute(p)}else p.startsWith(te)&&(d.push({type:6,index:n}),i.removeAttribute(p));if(Ai.test(i.tagName)){let p=i.textContent.split(te),c=p.length-1;if(c>0){i.textContent=$t?$t.emptyScript:"";for(let m=0;m<c;m++)i.append(p[m],Je()),le.nextNode(),d.push({type:2,index:++n});i.append(p[c],Je())}}}else if(i.nodeType===8)if(i.data===Si)d.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(te,p+1))!==-1;)d.push({type:7,index:n}),p+=te.length-1}n++}}static createElement(e,r){let s=ve.createElement("template");return s.innerHTML=e,s}};function Ce(t,e,r=t,s){if(e===Pe)return e;let i=s===void 0?r._$Cl:r._$Co?.[s],n=Ge(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,s)),s===void 0?r._$Cl=i:(r._$Co??=[])[s]=i),i!==void 0&&(e=Ce(t,i._$AS(t,e.values),i,s)),e}var Do=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:s}=this._$AD,i=(e?.creationScope??ve).importNode(r,!0);le.currentNode=i;let n=le.nextNode(),a=0,l=0,d=s[0];for(;d!==void 0;){if(a===d.index){let h;d.type===2?h=new wr(n,n.nextSibling,this,e):d.type===1?h=new d.ctor(n,d.name,d.strings,this,e):d.type===6&&(h=new Ho(n,this,e)),this._$AV.push(h),d=s[++l]}a!==d?.index&&(n=le.nextNode(),a++)}return le.currentNode=ve,i}p(e){let r=0;for(let s of this._$AV)s!==void 0&&(s.strings===void 0?s._$AI(e[r]):(s._$AI(e,s,r),r+=s.strings.length-2)),r++}},wr=class xi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,s,i){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ce(this,e,r),Ge(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==Pe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?No(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==C&&Ge(this._$AH)?this._$AA.nextSibling.data=e:this.T(ve.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ir.createElement(Ti(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(r);else{let n=new Do(i,this),a=n.u(this.options);n.p(r),this.T(a),this._$AH=n}}_$AC(e){let r=us.get(e.strings);return r===void 0&&us.set(e.strings,r=new ir(e)),r}k(e){yr(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,i=0;for(let n of e)i===r.length?r.push(s=new xi(this.O(Je()),this.O(Je()),this,this.options)):s=r[i],s._$AI(n),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){let s=os(e).nextSibling;os(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Mt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,s,i,n){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=C}_$AI(e,r=this,s,i){let n=this.strings,a=!1;if(n===void 0)e=Ce(this,e,r,0),a=!Ge(e)||e!==this._$AH&&e!==Pe,a&&(this._$AH=e);else{let l=e,d,h;for(e=n[0],d=0;d<n.length-1;d++)h=Ce(this,l[s+d],r,d),h===Pe&&(h=this._$AH[d]),a||=!Ge(h)||h!==this._$AH[d],h===C?e=C:e!==C&&(e+=(h??"")+n[d+1]),this._$AH[d]=h}a&&!i&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ro=class extends Mt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}},Uo=class extends Mt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}},qo=class extends Mt{constructor(e,r,s,i,n){super(e,r,s,i,n),this.type=5}_$AI(e,r=this){if((e=Ce(this,e,r,0)??C)===Pe)return;let s=this._$AH,i=e===C&&s!==C||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==C&&(s===C||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ho=class{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Ce(this,e)}},Oo=$r.litHtmlPolyfillSupport;Oo?.(ir,wr),($r.litHtmlVersions??=[]).push("3.3.3");var Fo=(t,e,r)=>{let s=r?.renderBefore??e,i=s._$litPart$;if(i===void 0){let n=r?.renderBefore??null;s._$litPart$=i=new wr(e.insertBefore(Je(),n),n,void 0,r??{})}return i._$AI(t),i},Sr=globalThis,he=class extends Ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fo(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Pe}};he._$litElement$=!0,he.finalized=!0,Sr.litElementHydrateSupport?.({LitElement:he});var Lo=Sr.litElementPolyfillSupport;Lo?.({LitElement:he}),(Sr.litElementVersions??=[]).push("4.2.2");var Wo={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function Bo(t){return t===void 0||Number.isNaN(t)?"Unknown":t>=-55?"Excellent":t>=-67?"Good":t>=-75?"Fair":"Weak"}function zo(t){return t===1?"Full":t===0?"Half":`Unknown (${t})`}function jo(t){let e=r=>String(r).padStart(2,"0");return`${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`}var ue,Vo=(ue=class extends he{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(e){e.has("pollIntervalMs")&&this.startPolling();let r=e.get("baseUrl");e.has("baseUrl")&&r!==void 0&&r!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let e=this.status;return k`
      <div class="card">
        <header class="head">
          ${e?k`<span class="badge badge-${e.mode}">${Wo[e.mode]}</span>`:k`<span class="badge badge-unknown">Unknown</span>`}
          ${e?k`<span class="state ${e.connected?"state-up":"state-down"}">
                ${e.connected?"Connected":"Disconnected"}
              </span>`:C}
          ${this.loading?k`<span class="muted loading">Refreshing…</span>`:C}
        </header>

        ${e?.fallbackAP?k`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:C}
        ${this.errorMessage?k`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:C}
        ${e?this.renderSections(e):k`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?k`Updated ${jo(this.lastUpdated)}`:k`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(e){switch(e.mode){case"wifi":return this.renderWifi(e);case"wifi_ap":return this.renderAp(e);case"ethernet":return this.renderEthernet(e)}}renderWifi(e){return k`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",e.ssid)}
          ${this.row("Signal",e.rssi===void 0?void 0:`${e.rssi} dBm (${Bo(e.rssi)})`)}
          ${this.row("IP address",e.ip)} ${this.row("MAC address",e.mac)}
        </dl>
      </section>
    `}renderAp(e){let r=e.ap;return k`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",r?.ssid)} ${this.row("IP address",r?.ip)}
          ${this.row("Stations",r?.stations)}
        </dl>
      </section>
    `}renderEthernet(e){let r=e.eth;return k`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",r?.ip)} ${this.row("MAC address",r?.mac)}
          ${this.row("Link",r===void 0?void 0:r.linkUp?"Up":"Down")}
          ${this.row("Speed",r===void 0?void 0:`${r.speed} Mbps`)}
          ${this.row("Duplex",r===void 0?void 0:zo(r.duplex))}
        </dl>
      </section>
    `}row(e,r){return r===void 0||r===""?C:k`<dt>${e}</dt>
          <dd>${r}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=_i({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let e=++this.refreshSeq;this.loading=!0;let r=await this.ensureClient().getStatus();if(e===this.refreshSeq){if(this.loading=!1,r.ok){this.status=r.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=r.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:r.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let e=Number(this.pollIntervalMs);!Number.isFinite(e)||e<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},e))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},ue.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},ue.styles=_r`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edn-accent, #2563eb);
      --_danger: var(--edn-danger, #dc2626);
      --_muted: var(--edn-muted, #6b7280);
      --_border: #e2e5ea;
      --_surface: #ffffff;
    }

    .card {
      background: var(--_surface);
      border: 1px solid var(--_border);
      border-radius: 10px;
      padding: 1rem 1.25rem;
      max-width: 28rem;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }

    .head {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .badge {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      padding: 0.15rem 0.5rem;
      border-radius: 999px;
      background: #eef2ff;
      color: var(--_accent);
    }

    .badge-ethernet {
      background: #e0f2fe;
      color: #0369a1;
    }

    .badge-wifi_ap {
      background: #fef3c7;
      color: #b45309;
    }

    .badge-unknown {
      background: #f3f4f6;
      color: var(--_muted);
    }

    .state {
      font-size: 0.85rem;
      font-weight: 600;
    }

    .state-up {
      color: #15803d;
    }

    .state-down {
      color: var(--_muted);
    }

    .loading {
      font-size: 0.8rem;
      margin-left: auto;
    }

    .banner {
      margin-top: 0.75rem;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-between;
    }

    .banner-warn {
      background: #fffbeb;
      border: 1px solid #fde68a;
      color: #92400e;
    }

    .banner-error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: var(--_danger);
    }

    section {
      margin-top: 1rem;
    }

    h2 {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
      margin: 0 0 0.5rem;
    }

    .rows {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.35rem 0.75rem;
      margin: 0;
    }

    dt {
      color: var(--_muted);
      font-size: 0.85rem;
    }

    dd {
      margin: 0;
      font-size: 0.9rem;
      word-break: break-word;
    }

    .muted {
      color: var(--_muted);
    }

    .foot {
      margin-top: 1rem;
      font-size: 0.75rem;
    }

    button {
      font: inherit;
      font-size: 0.8rem;
      padding: 0.25rem 0.6rem;
      border-radius: 6px;
      border: 1px solid currentColor;
      background: transparent;
      color: var(--_accent);
      cursor: pointer;
    }

    button:hover {
      background: rgba(37, 99, 235, 0.08);
    }
  `,ue);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",Vo);var at=32,qe=64,zt=8,Ko=5e3,Qo=new TextEncoder;function lt(t){return Qo.encode(t).length}function ps(t){return t.isAPMode?"ap":"station"}var pe,Jo=(pe=class extends he{constructor(...e){super(...e),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=r=>{this.draftWifiSSID=r.target.value},this.handleWifiPasswordInput=r=>{this.draftWifiPassword=r.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=r=>{this.draftApSSID=r.target.value},this.handleApPasswordInput=r=>{this.draftApPassword=r.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=r=>{this.draftApHasPassword=r.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=r=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=r,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=r=>{r.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(e){let r=e.get("baseUrl");e.has("baseUrl")&&r!==void 0&&r!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let e=this.settings;return k`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?k`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:C}
        ${this.successMessage?k`<div class="banner banner-success" role="status">${this.successMessage}</div>`:C}
        ${e?k`${this.renderForm(e)} ${this.renderScan()}`:this.loading?k`<p class="status">Loading settings…</p>`:k`<p class="status">Settings unavailable.</p>`}
      </div>
    `}renderForm(e){return k`
      <form @submit=${this.handleSubmit}>
        <fieldset>
          <legend>Mode</legend>
          <div class="segmented" role="group" aria-label="Network mode">
            <button
              type="button"
              class="seg ${this.draftMode==="station"?"active":""}"
              aria-pressed=${this.draftMode==="station"}
              @click=${()=>this.setMode("station")}
            >
              Station
            </button>
            <button
              type="button"
              class="seg ${this.draftMode==="ap"?"active":""}"
              aria-pressed=${this.draftMode==="ap"}
              @click=${()=>this.setMode("ap")}
            >
              Access Point
            </button>
          </div>
        </fieldset>

        ${this.draftMode==="station"?this.renderStation(e):this.renderAccessPoint(e)}

        <div class="actions">
          <button class="primary" type="submit" ?disabled=${this.submitting||!this.dirty}>
            ${this.submitting?"Saving…":"Save"}
          </button>
          ${this.dirty?k`<span class="muted">Unsaved changes</span>`:C}
        </div>
      </form>
    `}renderStation(e){return k`
      <section class="group">
        <h2>Station</h2>
        <label>
          Wi-Fi name
          <input
            name="wifiSSID"
            type="text"
            autocomplete="off"
            .value=${this.draftWifiSSID}
            @input=${this.handleWifiSSIDInput}
          />
        </label>
        ${this.renderFieldError("wifiSSID")}
        <label>
          Wi-Fi password
          <input
            name="wifiPassword"
            type="password"
            autocomplete="new-password"
            placeholder=${e.hasWifiPassword?"Leave blank to keep saved password":"No password set"}
            .value=${this.draftWifiPassword}
            @input=${this.handleWifiPasswordInput}
          />
        </label>
        ${e.hasWifiPassword?k`<p class="hint">Password saved •••• (leave blank to keep)</p>`:C}
        ${this.renderPasswordClearWarning("wifiPassword")}
        ${this.renderFieldError("wifiPassword")}
      </section>
    `}renderAccessPoint(e){return k`
      <section class="group">
        <h2>Access point</h2>
        <label>
          Access point name
          <input
            name="wifiAPSSID"
            type="text"
            autocomplete="off"
            .value=${this.draftApSSID}
            @input=${this.handleApSSIDInput}
          />
        </label>
        ${this.renderFieldError("wifiAPSSID")}
        <label class="check">
          <input
            type="checkbox"
            .checked=${this.draftApHasPassword}
            @change=${this.handleApHasPasswordChange}
          />
          Require password
        </label>
        ${this.draftApHasPassword?k`
              <label>
                Access point password
                <input
                  name="wifiAPPassword"
                  type="password"
                  autocomplete="new-password"
                  placeholder=${e.hasWifiAPPassword?"Leave blank to keep saved password":"At least 8 characters"}
                  .value=${this.draftApPassword}
                  @input=${this.handleApPasswordInput}
                />
              </label>
              ${e.hasWifiAPPassword?k`<p class="hint">Password saved •••• (leave blank to keep)</p>`:C}
              ${this.renderPasswordClearWarning("wifiAPPassword")}
              ${this.renderFieldError("wifiAPPassword")}
            `:C}
      </section>
    `}renderScan(){return k`
      <section class="group">
        <div class="scan-head">
          <h2>Wi-Fi scan</h2>
          <button type="button" @click=${this.handleScan} ?disabled=${this.scanning}>
            ${this.scanning?"Scanning…":"Scan"}
          </button>
        </div>
        ${this.scanError?k`<div class="banner banner-error" role="alert">${this.scanError}</div>`:C}
        ${this.scanResults.length>0?k`<ul class="networks">
              ${this.scanResults.map(e=>this.renderNetwork(e))}
            </ul>`:C}
      </section>
    `}renderNetwork(e){return k`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(e.ssid)}>
          <span class="ssid">${e.ssid}</span>
          <span class="meta">
            ${e.encrypted?k`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:C}
            ${e.rssi} dBm · Ch ${e.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(e){let r=this.fieldErrors[e];return r?k`<p class="field-error" role="alert">${r}</p>`:C}renderPasswordClearWarning(e){return(e==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?k`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:C}get dirty(){let e=this.settings;return e?this.draftMode!==ps(e)||this.draftWifiSSID!==e.wifiSSID||this.draftApSSID!==e.wifiAPSSID||this.draftApHasPassword!==e.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=_i({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let e=++this.loadToken;this.loading=!0;let r=await this.ensureClient().getSettings();if(e!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,r.ok){this.applyServerSettings(r.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=r.message,this.emitError(r.message)}applyServerSettings(e){this.settings=e,this.settingsBaseUrl=this.baseUrl,this.draftMode=ps(e),this.draftWifiSSID=e.wifiSSID,this.draftApSSID=e.wifiAPSSID,this.draftApHasPassword=e.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let e=this.settings,r={};if(!e)return r;let s=this.draftMode==="ap";if(lt(this.draftWifiSSID)>at&&(r.wifiSSID=`Wi-Fi name must be ${at} characters or fewer.`),lt(this.draftApSSID)>at&&(r.wifiAPSSID=`Access point name must be ${at} characters or fewer.`),s?this.draftApSSID.length===0&&(r.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(r.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&lt(this.draftWifiPassword)>qe&&(r.wifiPassword=`Wi-Fi password must be ${qe} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let i=lt(this.draftApPassword);(i<zt||i>qe)&&(r.wifiAPPassword=`Access point password must be ${zt}–${qe} characters.`)}else e.hasWifiAPPassword||(r.wifiAPPassword=`Enter an access point password (${zt}–${qe} characters).`);return r}buildPatch(){let e=this.settings,r={};if(!e)return r;let s=this.draftMode==="ap";return s!==e.isAPMode&&(r.isAPMode=s),this.draftWifiSSID!==e.wifiSSID&&(r.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(r.wifiPassword=this.draftWifiPassword),this.draftApSSID!==e.wifiAPSSID&&(r.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==e.wifiAPHasPassword&&(r.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(r.wifiAPPassword=this.draftApPassword),r}async handleSave(){if(this.submitting||!this.settings)return;let e=this.validate();if(this.fieldErrors=e,Object.keys(e).length>0)return;let r=this.buildPatch();if(Object.keys(r).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let s=await this.ensureClient().saveSettings(r);if(this.submitting=!1,s.ok){this.applyServerSettings(s.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:s.data,bubbles:!0,composed:!0}));return}let i=s.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":s.message;this.errorMessage=i,this.emitError(i)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let e=new AbortController;this.scanController=e;let r,s=new Promise(n=>{r=setTimeout(()=>{e.abort(),n({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},Ko)}),i=await Promise.race([this.ensureClient().wifiList(e.signal),s]);if(r!==void 0&&clearTimeout(r),this.scanController===e&&(this.scanController=void 0),this.scanning=!1,i.ok){this.scanResults=[...i.data.networks].sort((n,a)=>a.rssi-n.rssi);return}i.message!=="Request aborted."&&(this.scanError=i.message,this.emitError(i.message))}emitError(e){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:e},bubbles:!0,composed:!0}))}setMode(e){this.draftMode!==e&&(this.draftMode=e,this.fieldErrors={})}},pe.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},pe.styles=_r`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edn-accent, #2563eb);
      --_danger: var(--edn-danger, #dc2626);
      --_muted: var(--edn-muted, #6b7280);
      --_border: #e2e5ea;
      --_surface: #ffffff;
    }

    .card {
      background: var(--_surface);
      border: 1px solid var(--_border);
      border-radius: 10px;
      padding: 1rem 1.25rem;
      max-width: 30rem;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }

    h1 {
      font-size: 1rem;
      margin: 0 0 0.75rem;
    }

    h2 {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
      margin: 0 0 0.5rem;
    }

    .banner {
      margin: 0 0 0.75rem;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-between;
    }

    .banner-error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: var(--_danger);
    }

    .banner-success {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #15803d;
    }

    fieldset {
      border: 0;
      padding: 0;
      margin: 0 0 0.75rem;
    }

    legend {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
      margin-bottom: 0.35rem;
    }

    .segmented {
      display: inline-flex;
      border: 1px solid var(--_border);
      border-radius: 8px;
      overflow: hidden;
    }

    .seg {
      font: inherit;
      font-size: 0.85rem;
      padding: 0.35rem 0.85rem;
      border: 0;
      background: transparent;
      color: var(--_muted);
      cursor: pointer;
    }

    .seg.active {
      background: var(--_accent);
      color: #ffffff;
    }

    .group {
      border-top: 1px solid var(--_border);
      padding-top: 0.75rem;
      margin-bottom: 0.75rem;
    }

    label {
      display: block;
      font-size: 0.85rem;
      margin-bottom: 0.6rem;
    }

    input[type='text'],
    input[type='password'] {
      display: block;
      width: 100%;
      box-sizing: border-box;
      margin-top: 0.25rem;
      font: inherit;
      font-size: 0.9rem;
      padding: 0.4rem 0.55rem;
      border: 1px solid var(--_border);
      border-radius: 6px;
      background: #fff;
      color: inherit;
    }

    input[type='text']:focus,
    input[type='password']:focus {
      outline: 2px solid color-mix(in srgb, var(--_accent) 45%, transparent);
      outline-offset: 1px;
      border-color: var(--_accent);
    }

    .check {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.85rem;
    }

    .hint {
      font-size: 0.78rem;
      color: var(--_muted);
      margin: -0.3rem 0 0.5rem;
    }

    .field-error {
      font-size: 0.78rem;
      color: var(--_danger);
      margin: -0.3rem 0 0.6rem;
    }

    .clear-warning {
      font-size: 0.78rem;
      color: var(--_danger);
      margin: -0.3rem 0 0.6rem;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      border-top: 1px solid var(--_border);
      padding-top: 0.75rem;
    }

    button {
      font: inherit;
      font-size: 0.8rem;
      padding: 0.3rem 0.7rem;
      border-radius: 6px;
      border: 1px solid currentColor;
      background: transparent;
      color: var(--_accent);
      cursor: pointer;
    }

    button:hover:not(:disabled) {
      background: rgba(37, 99, 235, 0.08);
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .primary {
      background: var(--_accent);
      border-color: var(--_accent);
      color: #ffffff;
    }

    .primary:hover:not(:disabled) {
      background: color-mix(in srgb, var(--_accent) 88%, #000);
    }

    .scan-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }

    .scan-head h2 {
      margin: 0;
    }

    ul.networks {
      list-style: none;
      margin: 0.5rem 0 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }

    .network {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      width: 100%;
      text-align: left;
      border: 1px solid var(--_border);
      border-radius: 6px;
      padding: 0.35rem 0.55rem;
      color: inherit;
    }

    .network .ssid {
      font-size: 0.85rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .network .meta {
      font-size: 0.75rem;
      color: var(--_muted);
      white-space: nowrap;
    }

    .lock {
      color: var(--_muted);
    }

    .muted {
      color: var(--_muted);
    }

    .status {
      font-size: 0.85rem;
      color: var(--_muted);
    }
  `,pe);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",Jo);var Go=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],me,Zo=(me=class extends he{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return k`
      <div class="tabs" role="tablist" aria-label="Network">
        ${Go.map(e=>k`
            <button
              type="button"
              role="tab"
              id="tab-${e.id}"
              aria-controls="panel-${e.id}"
              aria-selected=${this.activeTab===e.id}
              @click=${()=>this.selectTab(e.id)}
            >
              ${e.label}
            </button>
          `)}
      </div>
      <div class="panel" id="panel-${this.activeTab}" role="tabpanel">
        ${this.renderActive()}
      </div>
    `}renderActive(){return this.activeTab==="settings"?k`<edn-network-settings base-url=${this.baseUrl}></edn-network-settings>`:k`
      <edn-network-status
        base-url=${this.baseUrl}
        poll-interval-ms=${this.pollIntervalMs}
      ></edn-network-status>
    `}selectTab(e){this.activeTab!==e&&(this.activeTab=e,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:e},bubbles:!0,composed:!0})))}},me.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},me.styles=_r`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edn-accent, #2563eb);
      --_border: #e2e5ea;
    }

    .tabs {
      display: flex;
      gap: 0.25rem;
      border-bottom: 1px solid var(--_border);
      max-width: 30rem;
    }

    [role='tab'] {
      font: inherit;
      font-size: 0.85rem;
      padding: 0.45rem 0.8rem;
      border: 0;
      border-bottom: 2px solid transparent;
      background: transparent;
      color: var(--edn-muted, #6b7280);
      cursor: pointer;
      margin-bottom: -1px;
    }

    [role='tab'][aria-selected='true'] {
      color: var(--_accent);
      border-bottom-color: var(--_accent);
      font-weight: 600;
    }

    .panel {
      margin-top: 1rem;
    }
  `,me);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",Zo);var Ei="Network request failed. Check the device connection and try again.",Yo={};function Xo(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function ea(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function Pi(t,e){return ea(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:Ei}}async function Ci(t,e){let r=e;try{let s=await t.text();if(s.length>0)try{r=Xo(JSON.parse(s))??r}catch{}}catch{}return{ok:!1,status:t.status,message:r}}async function ms(t,e,r,s,i,n){let a;try{a=await fetch(t,{headers:{Accept:e,...i},signal:n})}catch(d){return Pi(d,n)}if(!a.ok)return Ci(a,a.status===404?s:`Request failed with HTTP ${a.status}.`);let l;try{l=new Uint8Array(await a.arrayBuffer())}catch{return{ok:!1,status:a.status,message:Ei}}return l.byteLength===0?{ok:!1,status:a.status,message:r}:{ok:!0,data:l}}async function fs(t,e,r,s,i){if(e.byteLength===0)return{ok:!1,message:r};let n=new ArrayBuffer(e.byteLength);new Uint8Array(n).set(e);let a;try{a=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/octet-stream",...s},body:n,signal:i})}catch(l){return Pi(l,i)}return a.ok?(await a.text().catch(()=>""),{ok:!0,data:Yo}):Ci(a,`Upload failed with HTTP ${a.status}.`)}function ta(t={}){let e=t.baseUrl??"",r=t.backupPath??"/api/config/backup",s=t.configPath??"/api/config",i=t.headers??{},n=`${e}${r}`,a=`${e}${s}`;return{downloadBackup(l){return ms(n,"application/zip","Device returned an empty archive.","The device has no config files yet.",i,l)},downloadConfig(l){return ms(a,"application/octet-stream","Device returned an empty config file.","The device has no saved config yet (no config file on flash).",i,l)},uploadBackup(l,d){return fs(n,l,"Cannot upload an empty archive.",i,d)},uploadConfig(l,d){return fs(a,l,"Cannot upload an empty config file.",i,d)}}}var ft=globalThis,Ar=ft.ShadowRoot&&(ft.ShadyCSS===void 0||ft.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Tr=Symbol(),gs=new WeakMap,Mi=class{constructor(e,r,s){if(this._$cssResult$=!0,s!==Tr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(Ar&&e===void 0){let s=r!==void 0&&r.length===1;s&&(e=gs.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&gs.set(r,e))}return e}toString(){return this.cssText}},ra=t=>new Mi(typeof t=="string"?t:t+"",void 0,Tr),sa=(t,...e)=>new Mi(t.length===1?t[0]:e.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]),t,Tr),ia=(t,e)=>{if(Ar)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),i=ft.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,t.appendChild(s)}},bs=Ar?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return ra(r)})(t):t,{is:na,defineProperty:oa,getOwnPropertyDescriptor:aa,getOwnPropertyNames:la,getOwnPropertySymbols:da,getPrototypeOf:ca}=Object,Nt=globalThis,vs=Nt.trustedTypes,ha=vs?vs.emptyScript:"",ua=Nt.reactiveElementPolyfillSupport,ze=(t,e)=>t,nr={toAttribute(t,e){switch(e){case Boolean:t=t?ha:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ni=(t,e)=>!na(t,e),_s={attribute:!0,type:String,converter:nr,reflect:!1,useDefault:!1,hasChanged:Ni};Symbol.metadata??=Symbol("metadata"),Nt.litPropertyMetadata??=new WeakMap;var Te=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=_s){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,r);i!==void 0&&oa(this.prototype,e,i)}}static getPropertyDescriptor(e,r,s){let{get:i,set:n}=aa(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get:i,set(a){let l=i?.call(this);n?.call(this,a),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_s}static _$Ei(){if(this.hasOwnProperty(ze("elementProperties")))return;let e=ca(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ze("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ze("properties"))){let r=this.properties,s=[...la(r),...da(r)];for(let i of s)this.createProperty(i,r[i])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[s,i]of r)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[r,s]of this.elementProperties){let i=this._$Eu(r,s);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)r.unshift(bs(i))}else e!==void 0&&r.push(bs(e));return r}static _$Eu(e,r){let s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let s of r.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ia(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,s){this._$AK(e,s)}_$ET(e,r){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute===void 0?nr:s.converter).toAttribute(r,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,r){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?nr:n.converter;this._$Em=i;let l=a.fromAttribute(r,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,r,s,i=!1,n){if(e!==void 0){let a=this.constructor;if(i===!1&&(n=this[e]),s??=a.getPropertyOptions(e),!((s.hasChanged??Ni)(n,r)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,s))))return;this.C(e,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:s,reflect:i,wrapped:n},a){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??r??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(r=void 0),this._$AL.set(e,r)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:a}=n,l=this[i];a!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(r)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};Te.elementStyles=[],Te.shadowRootOptions={mode:"open"},Te[ze("elementProperties")]=new Map,Te[ze("finalized")]=new Map,ua?.({ReactiveElement:Te}),(Nt.reactiveElementVersions??=[]).push("2.1.2");var kr=globalThis,$s=t=>t,yt=kr.trustedTypes,ys=yt?yt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ii="$lit$",re=`lit$${Math.random().toFixed(9).slice(2)}$`,Di="?"+re,pa=`<${Di}>`,_e=document,Ze=()=>_e.createComment(""),Ye=t=>t===null||typeof t!="object"&&typeof t!="function",xr=Array.isArray,ma=t=>xr(t)||typeof t?.[Symbol.iterator]=="function",jt=`[ 	
\f\r]`,He=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ws=/-->/g,Ss=/>/g,oe=RegExp(`>|${jt}(?:([^\\s"'>=/]+)(${jt}*=${jt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),As=/'/g,Ts=/"/g,Ri=/^(?:script|style|textarea|title)$/i,Z=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),Me=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),ks=new WeakMap,de=_e.createTreeWalker(_e,129);function Ui(t,e){if(!xr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ys===void 0?e:ys.createHTML(e)}var fa=(t,e)=>{let r=t.length-1,s=[],i,n=e===2?"<svg>":e===3?"<math>":"",a=He;for(let l=0;l<r;l++){let d=t[l],h,u,p=-1,c=0;for(;c<d.length&&(a.lastIndex=c,u=a.exec(d),u!==null);)c=a.lastIndex,a===He?u[1]==="!--"?a=ws:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(a=oe):(Ri.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=oe):a=Ss:a===oe?u[0]===">"?(a=i??He,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?oe:u[3]==='"'?Ts:As):a===Ts||a===As?a=oe:a===ws||a===Ss?a=He:(a=oe,i=void 0);let m=a===oe&&t[l+1].startsWith("/>")?" ":"";n+=a===He?d+pa:p>=0?(s.push(h),d.slice(0,p)+Ii+d.slice(p)+re+m):d+re+(p===-2?l:m)}return[Ui(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},or=class qi{constructor({strings:e,_$litType$:r},s){let i;this.parts=[];let n=0,a=0,l=e.length-1,d=this.parts,[h,u]=fa(e,r);if(this.el=qi.createElement(h,s),de.currentNode=this.el.content,r===2||r===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=de.nextNode())!==null&&d.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(Ii)){let c=u[a++],m=i.getAttribute(p).split(re),b=/([.?@])?(.*)/.exec(c);d.push({type:1,index:n,name:b[2],strings:m,ctor:b[1]==="."?ba:b[1]==="?"?va:b[1]==="@"?_a:It}),i.removeAttribute(p)}else p.startsWith(re)&&(d.push({type:6,index:n}),i.removeAttribute(p));if(Ri.test(i.tagName)){let p=i.textContent.split(re),c=p.length-1;if(c>0){i.textContent=yt?yt.emptyScript:"";for(let m=0;m<c;m++)i.append(p[m],Ze()),de.nextNode(),d.push({type:2,index:++n});i.append(p[c],Ze())}}}else if(i.nodeType===8)if(i.data===Di)d.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(re,p+1))!==-1;)d.push({type:7,index:n}),p+=re.length-1}n++}}static createElement(e,r){let s=_e.createElement("template");return s.innerHTML=e,s}};function Ne(t,e,r=t,s){if(e===Me)return e;let i=s===void 0?r._$Cl:r._$Co?.[s],n=Ye(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,s)),s===void 0?r._$Cl=i:(r._$Co??=[])[s]=i),i!==void 0&&(e=Ne(t,i._$AS(t,e.values),i,s)),e}var ga=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:s}=this._$AD,i=(e?.creationScope??_e).importNode(r,!0);de.currentNode=i;let n=de.nextNode(),a=0,l=0,d=s[0];for(;d!==void 0;){if(a===d.index){let h;d.type===2?h=new Er(n,n.nextSibling,this,e):d.type===1?h=new d.ctor(n,d.name,d.strings,this,e):d.type===6&&(h=new $a(n,this,e)),this._$AV.push(h),d=s[++l]}a!==d?.index&&(n=de.nextNode(),a++)}return de.currentNode=_e,i}p(e){let r=0;for(let s of this._$AV)s!==void 0&&(s.strings===void 0?s._$AI(e[r]):(s._$AI(e,s,r),r+=s.strings.length-2)),r++}},Er=class Hi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,s,i){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ne(this,e,r),Ye(e)?e===q||e==null||e===""?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==Me&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ma(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&Ye(this._$AH)?this._$AA.nextSibling.data=e:this.T(_e.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=or.createElement(Ui(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(r);else{let n=new ga(i,this),a=n.u(this.options);n.p(r),this.T(a),this._$AH=n}}_$AC(e){let r=ks.get(e.strings);return r===void 0&&ks.set(e.strings,r=new or(e)),r}k(e){xr(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,i=0;for(let n of e)i===r.length?r.push(s=new Hi(this.O(Ze()),this.O(Ze()),this,this.options)):s=r[i],s._$AI(n),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){let s=$s(e).nextSibling;$s(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},It=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,s,i,n){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=q}_$AI(e,r=this,s,i){let n=this.strings,a=!1;if(n===void 0)e=Ne(this,e,r,0),a=!Ye(e)||e!==this._$AH&&e!==Me,a&&(this._$AH=e);else{let l=e,d,h;for(e=n[0],d=0;d<n.length-1;d++)h=Ne(this,l[s+d],r,d),h===Me&&(h=this._$AH[d]),a||=!Ye(h)||h!==this._$AH[d],h===q?e=q:e!==q&&(e+=(h??"")+n[d+1]),this._$AH[d]=h}a&&!i&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ba=class extends It{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}},va=class extends It{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}},_a=class extends It{constructor(e,r,s,i,n){super(e,r,s,i,n),this.type=5}_$AI(e,r=this){if((e=Ne(this,e,r,0)??q)===Me)return;let s=this._$AH,i=e===q&&s!==q||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==q&&(s===q||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},$a=class{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Ne(this,e)}},ya=kr.litHtmlPolyfillSupport;ya?.(or,Er),(kr.litHtmlVersions??=[]).push("3.3.3");var wa=(t,e,r)=>{let s=r?.renderBefore??e,i=s._$litPart$;if(i===void 0){let n=r?.renderBefore??null;s._$litPart$=i=new Er(e.insertBefore(Ze(),n),n,void 0,r??{})}return i._$AI(t),i},Pr=globalThis,je=class extends Te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=wa(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Me}};je._$litElement$=!0,je.finalized=!0,Pr.litElementHydrateSupport?.({LitElement:je});var Sa=Pr.litElementPolyfillSupport;Sa?.({LitElement:je}),(Pr.litElementVersions??=[]).push("4.2.2");var xs=2e3,Aa=12e4,Es="Unsupported file type. Choose a .zip full backup or a .bin config file.";function Vt(t){let e=t.toLowerCase();return e.endsWith(".zip")?"archive":e.endsWith(".bin")?"config":null}function Ta(t,e){if(typeof URL.createObjectURL!="function")return;let r=new ArrayBuffer(t.byteLength);new Uint8Array(r).set(t);let s=new Blob([r],{type:"application/octet-stream"}),i=URL.createObjectURL(s),n=document.createElement("a");n.href=i,n.download=e,document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),0)}var fe,ka=(fe=class extends je{constructor(...e){super(...e),this.baseUrl="",this.backupPath="/api/config/backup",this.configPath="/api/config",this.healthPath="/healthcheck/healty",this.deviceName="device",this.archiveFileName="config-backup.zip",this.binFileName="config.bin",this.maxUploadBytes=16384,this.zipNotes="",this.binNotes="",this.zipConfirmText="",this.binConfirmText="",this.downloading=!1,this.downloadNotice=null,this.selectedFile=null,this.fileError=null,this.uploading=!1,this.uploadError=null,this.phase="idle",this._attempts=0}disconnectedCallback(){this.clearPollTimer(),super.disconnectedCallback()}get busy(){return this.uploading||this.phase!=="idle"}get effectiveZipNotes(){return this.zipNotes||`Download a zip of everything stored on the ${this.deviceName}: ${this.binFileName} plus the device's persisted state files. Restoring this archive overwrites the stored config and state files. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveBinNotes(){return this.binNotes||`Download only ${this.binFileName}, the raw stored config. Restoring it replaces just that file. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveZipConfirmText(){return this.zipConfirmText||`Uploading this archive REPLACES ${this.binFileName} and the device's stored state files on the ${this.deviceName} AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?`}get effectiveBinConfirmText(){return this.binConfirmText||`Uploading REPLACES ${this.binFileName} on the ${this.deviceName} AND REBOOTS IT IMMEDIATELY. The device will be offline 20-60 seconds. Continue?`}render(){return Z`
      <div class="stack">
        <section class="card" aria-labelledby="edc-download-heading">
          <h2 id="edc-download-heading">Download backup</h2>
          ${this.renderNotice(this.downloadNotice)}
          <div class="download-row">
            <div class="download-copy">
              <strong>Full backup (.zip)</strong>
              <p class="muted">${this.effectiveZipNotes}</p>
            </div>
            <button
              type="button"
              class="primary"
              data-action="download-backup"
              ?disabled=${this.downloading||this.phase!=="idle"}
              @click=${()=>{this.handleDownload("archive")}}
            >
              ${this.downloading?"Downloading…":"Download full backup (.zip)"}
            </button>
          </div>
          <div class="download-row">
            <div class="download-copy">
              <strong>${this.binFileName} only</strong>
              <p class="muted">${this.effectiveBinNotes}</p>
            </div>
            <button
              type="button"
              data-action="download-config"
              ?disabled=${this.downloading||this.phase!=="idle"}
              @click=${()=>{this.handleDownload("config")}}
            >
              Download ${this.binFileName} only
            </button>
          </div>
        </section>

        <section class="card" aria-labelledby="edc-restore-heading">
          <h2 id="edc-restore-heading">Restore from file</h2>
          <p class="muted">
            Restore a previously downloaded .zip full backup, or a single .bin
            config file. The device validates size, version and CRC and, for a
            full archive, commits all members atomically before rebooting. A
            rejected file changes nothing.
          </p>
          <label class="field" for="edc-restore-file">
            <span class="field-label">Backup file</span>
            <input
              id="edc-restore-file"
              type="file"
              accept=".zip,.bin,application/octet-stream"
              ?disabled=${this.busy}
              @change=${e=>this.handleFileChange(e)}
            />
            ${this.fileError?Z`<span class="field-error" role="alert">${this.fileError}</span>`:q}
          </label>
          ${this.selectedFile&&!this.fileError?Z`<p class="muted">
                Selected: ${this.selectedFile.name} (${this.selectedFile.size}
                bytes)${Vt(this.selectedFile.name)==="archive"?" — full backup (all files)":` — ${this.binFileName} only`}
              </p>`:q}
          ${this.uploadError?Z`<div class="banner banner-error" role="alert">
                ${this.uploadError}
              </div>`:q}
          <div class="form-actions">
            <button
              type="button"
              class="danger"
              data-action="upload"
              ?disabled=${!this.selectedFile||!!this.fileError||this.busy}
              @click=${()=>{this.handleUpload()}}
            >
              ${this.uploading?"Uploading…":"Upload & reboot device"}
            </button>
          </div>
        </section>
      </div>
      ${this.renderRebootOverlay()}
    `}renderNotice(e){return e?Z`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.message}
    </div>`:q}renderRebootOverlay(){return this.phase==="idle"?q:Z`
      <div
        class="reboot-overlay"
        role="alertdialog"
        aria-modal="true"
        aria-label="Device rebooting"
      >
        <div class="reboot-dialog">
          <h2>Device is rebooting</h2>
          ${this.phase==="rebooting"?Z`
                <p>
                  Waiting for the ${this.deviceName} to come back online. This
                  usually takes 20–60 seconds.
                </p>
                <p class="muted" aria-live="polite">
                  Polling device health…
                </p>
                <div class="spinner" aria-hidden="true"></div>
              `:q}
          ${this.phase==="ready"?Z`
                <div class="banner banner-success" role="status">
                  The ${this.deviceName} is back online.
                </div>
                <div class="form-actions">
                  <button type="button" @click=${()=>this.dismissReboot()}>
                    Dismiss
                  </button>
                </div>
              `:q}
          ${this.phase==="timeout"?Z`
                <div class="banner banner-error" role="alert">
                  No response after about two minutes. Check the power and
                  network, then keep waiting or dismiss.
                </div>
                <div class="form-actions">
                  <button type="button" @click=${()=>this.retryReboot()}>
                    Keep waiting
                  </button>
                  <button type="button" @click=${()=>this.dismissReboot()}>
                    Dismiss
                  </button>
                </div>
              `:q}
        </div>
      </div>
    `}createClient(){return ta({baseUrl:this.baseUrl,backupPath:this.backupPath,configPath:this.configPath})}async handleDownload(e){if(!(this.downloading||this.phase!=="idle")){this.downloading=!0,this.downloadNotice=null;try{let r=this.createClient(),s=e==="archive"?await r.downloadBackup():await r.downloadConfig();if(!s.ok){this.downloadNotice={kind:"error",message:s.message};return}let i=e==="archive"?this.archiveFileName:this.binFileName;Ta(s.data,i),this.downloadNotice={kind:"info",message:e==="archive"?`Full backup downloaded as ${i}.`:`Config downloaded as ${i}.`}}finally{this.downloading=!1}}}handleFileChange(e){let r=e.currentTarget,s=r.files&&r.files[0]?r.files[0]:null;this.selectedFile=s,this.uploadError=null,this.fileError=s?s.size===0?"The selected file is empty.":s.size>this.maxUploadBytes?`This does not look like a ${this.deviceName} backup file (max ${this.maxUploadBytes} bytes).`:Vt(s.name)?null:Es:null}async handleUpload(){if(!this.selectedFile||this.fileError||this.busy)return;let e=Vt(this.selectedFile.name);if(!e)this.uploadError=Es;else if(window.confirm(e==="archive"?this.effectiveZipConfirmText:this.effectiveBinConfirmText)){this.uploading=!0,this.uploadError=null;try{let r;try{r=new Uint8Array(await this.selectedFile.arrayBuffer())}catch{this.uploadError="Could not read the selected backup file.";return}let s=this.createClient(),i=e==="archive"?await s.uploadBackup(r):await s.uploadConfig(r);if(!i.ok){this.uploadError=i.message;return}if(this.clearSelection(),!this.isConnected)return;this.dispatchEvent(new CustomEvent("edc-restore-committed",{detail:{kind:e},bubbles:!0,composed:!0})),this.startReboot()}finally{this.uploading=!1}}}clearSelection(){this.selectedFile=null,this.fileError=null;let e=this.renderRoot.querySelector("#edc-restore-file");e&&(e.value="")}startReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}retryReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}dismissReboot(){this.clearPollTimer(),this.phase="idle"}schedulePoll(){this.clearPollTimer(),this._pollTimer=window.setTimeout(()=>{this._pollTimer=void 0,this.pollHealth()},xs)}clearPollTimer(){this._pollTimer!==void 0&&(window.clearTimeout(this._pollTimer),this._pollTimer=void 0)}async pollHealth(){if(this.phase!=="rebooting")return;let e=!1;try{let r=await fetch(`${this.baseUrl}${this.healthPath}`,{headers:{Accept:"application/json"}});if(r.ok){let s=await r.json();e=!!s&&typeof s=="object"&&s.healty===!0}}catch{e=!1}this.isConnected&&this.phase==="rebooting"&&(e?this.phase="ready":(this._attempts+=1,this._attempts*xs>=Aa?this.phase="timeout":this.schedulePoll()))}},fe.properties={baseUrl:{type:String,attribute:"base-url"},backupPath:{type:String,attribute:"backup-path"},configPath:{type:String,attribute:"config-path"},healthPath:{type:String,attribute:"health-path"},deviceName:{type:String,attribute:"device-name"},archiveFileName:{type:String,attribute:"archive-file-name"},binFileName:{type:String,attribute:"bin-file-name"},maxUploadBytes:{type:Number,attribute:"max-upload-bytes"},zipNotes:{type:String,attribute:"zip-notes"},binNotes:{type:String,attribute:"bin-notes"},zipConfirmText:{type:String,attribute:"zip-confirm-text"},binConfirmText:{type:String,attribute:"bin-confirm-text"},downloading:{state:!0},downloadNotice:{state:!0},selectedFile:{state:!0},fileError:{state:!0},uploading:{state:!0},uploadError:{state:!0},phase:{state:!0}},fe.styles=sa`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edc-accent, #2563eb);
      --_danger: var(--edc-danger, #dc2626);
      --_muted: var(--edc-muted, #6b7280);
      --_border: #e2e5ea;
      --_surface: #ffffff;
    }

    .stack {
      display: grid;
      gap: 1rem;
      max-width: 34rem;
    }

    .card {
      background: var(--_surface);
      border: 1px solid var(--_border);
      border-radius: 10px;
      padding: 1rem 1.25rem;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }

    h2 {
      font-size: 1rem;
      margin: 0 0 0.5rem;
    }

    p {
      margin: 0 0 0.75rem;
      font-size: 0.875rem;
      line-height: 1.45;
    }

    .muted {
      color: var(--_muted);
    }

    .form-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .download-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.75rem 0;
      border-top: 1px solid var(--_border);
    }

    .download-row:first-of-type {
      border-top: 0;
      padding-top: 0;
    }

    .download-row:last-of-type {
      padding-bottom: 0;
    }

    .download-copy {
      min-width: 0;
    }

    .download-copy p {
      margin-bottom: 0;
    }

    .download-copy strong {
      display: block;
      font-size: 0.85rem;
      margin-bottom: 0.2rem;
    }

    button {
      font: inherit;
      font-size: 0.85rem;
      padding: 0.45rem 0.85rem;
      border-radius: 8px;
      border: 1px solid var(--_border);
      background: var(--_surface);
      color: inherit;
      cursor: pointer;
    }

    button:hover:not(:disabled) {
      border-color: var(--_accent);
    }

    button.primary {
      background: var(--_accent);
      border-color: var(--_accent);
      color: #ffffff;
    }

    button.danger {
      background: var(--_danger);
      border-color: var(--_danger);
      color: #ffffff;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .field {
      display: grid;
      gap: 0.35rem;
      margin-bottom: 0.75rem;
    }

    .field-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
    }

    input[type='file'] {
      font: inherit;
      font-size: 0.85rem;
      max-width: 100%;
    }

    .field-error {
      color: var(--_danger);
      font-size: 0.8rem;
    }

    .banner {
      margin: 0 0 0.75rem;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
    }

    .banner-error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: var(--_danger);
    }

    .banner-info {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1d4ed8;
    }

    .banner-success {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #15803d;
    }

    .reboot-overlay {
      position: fixed;
      inset: 0;
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      background: rgba(15, 23, 42, 0.55);
    }

    .reboot-dialog {
      width: min(26rem, 100%);
      background: var(--_surface);
      border-radius: 12px;
      padding: 1.25rem;
      box-shadow: 0 20px 50px rgba(15, 23, 42, 0.35);
    }

    .spinner {
      width: 1.5rem;
      height: 1.5rem;
      border: 3px solid var(--_border);
      border-top-color: var(--_accent);
      border-radius: 50%;
      animation: edc-spin 0.9s linear infinite;
    }

    @keyframes edc-spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .spinner {
        animation: none;
      }
    }
  `,fe);typeof customElements<"u"&&!customElements.get("edc-config-backup-page")&&customElements.define("edc-config-backup-page",ka);var Ps="Invalid settings response.";function xa(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function Ea(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function Oi(t,e){return Ea(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}async function Fi(t,e){let r=e;try{let s=await t.text();if(s.length>0)try{r=xa(JSON.parse(s))??r}catch{}}catch{}return{ok:!1,status:t.status,message:r}}function Pa(t){if(!t||typeof t!="object")return;let{host:e,uri:r,port:s,enabled:i}=t;if(typeof e=="string"&&typeof r=="string"&&typeof s=="number"&&Number.isFinite(s)&&typeof i=="boolean")return{host:e,uri:r,port:s,enabled:i}}async function Li(t){let e;try{e=await t.json()}catch{return{ok:!1,status:t.status,message:Ps}}let r=Pa(e);return r?{ok:!0,data:r}:{ok:!1,status:t.status,message:Ps}}async function Ca(t,e,r){let s;try{s=await fetch(t,{headers:{Accept:"application/json",...e},signal:r})}catch(i){return Oi(i,r)}return s.ok?Li(s):Fi(s,"Could not load the logger settings from the device.")}async function Ma(t,e,r,s){let i;try{i=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...r},body:JSON.stringify(e),signal:s})}catch(n){return Oi(n,s)}return i.ok?Li(i):Fi(i,"The device rejected the logger settings.")}function Na(t={}){let e=t.baseUrl??"",r=t.settingsPath??"/api/log/settings",s=t.headers??{},i=`${e}${r}`;return{getSettings(n){return Ca(i,s,n)},saveSettings(n,a){return Ma(i,n,s,a)}}}var gt=globalThis,Cr=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mr=Symbol(),Cs=new WeakMap,Wi=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Mr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Cr&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=Cs.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Cs.set(e,t))}return t}toString(){return this.cssText}},Ia=t=>new Wi(typeof t=="string"?t:t+"",void 0,Mr),Da=(t,...e)=>new Wi(t.length===1?t[0]:e.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]),t,Mr),Ra=(t,e)=>{if(Cr)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),i=gt.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,t.appendChild(s)}},Ms=Cr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return Ia(r)})(t):t,{is:Ua,defineProperty:qa,getOwnPropertyDescriptor:Ha,getOwnPropertyNames:Oa,getOwnPropertySymbols:Fa,getPrototypeOf:La}=Object,Dt=globalThis,Ns=Dt.trustedTypes,Wa=Ns?Ns.emptyScript:"",Ba=Dt.reactiveElementPolyfillSupport,Ve=(t,e)=>t,ar={toAttribute(t,e){switch(e){case Boolean:t=t?Wa:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Bi=(t,e)=>!Ua(t,e),Is={attribute:!0,type:String,converter:ar,reflect:!1,useDefault:!1,hasChanged:Bi};Symbol.metadata??=Symbol("metadata"),Dt.litPropertyMetadata??=new WeakMap;var ke=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Is){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&qa(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){let{get:s,set:i}=Ha(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let a=s?.call(this);i?.call(this,n),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Is}static _$Ei(){if(this.hasOwnProperty(Ve("elementProperties")))return;let t=La(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ve("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ve("properties"))){let e=this.properties,r=[...Oa(e),...Fa(e)];for(let s of r)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let s of r)e.unshift(Ms(s))}else t!==void 0&&e.push(Ms(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ra(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute===void 0?ar:r.converter).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){let r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let i=r.getPropertyOptions(s),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute===void 0?ar:i.converter;this._$Em=s;let a=n.fromAttribute(e,i.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,r,s=!1,i){if(t!==void 0){let n=this.constructor;if(s===!1&&(i=this[t]),r??=n.getPropertyOptions(t),!((r.hasChanged??Bi)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:i},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),i!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[s,i]of r){let{wrapped:n}=i,a=this[s];n!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,i,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};ke.elementStyles=[],ke.shadowRootOptions={mode:"open"},ke[Ve("elementProperties")]=new Map,ke[Ve("finalized")]=new Map,Ba?.({ReactiveElement:ke}),(Dt.reactiveElementVersions??=[]).push("2.1.2");var Nr=globalThis,Ds=t=>t,wt=Nr.trustedTypes,Rs=wt?wt.createPolicy("lit-html",{createHTML:t=>t}):void 0,zi="$lit$",se=`lit$${Math.random().toFixed(9).slice(2)}$`,ji="?"+se,za=`<${ji}>`,$e=document,Xe=()=>$e.createComment(""),et=t=>t===null||typeof t!="object"&&typeof t!="function",Ir=Array.isArray,ja=t=>Ir(t)||typeof t?.[Symbol.iterator]=="function",Kt=`[ 	
\f\r]`,Oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Us=/-->/g,qs=/>/g,ae=RegExp(`>|${Kt}(?:([^\\s"'>=/]+)(${Kt}*=${Kt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hs=/'/g,Os=/"/g,Vi=/^(?:script|style|textarea|title)$/i,Fs=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),Ie=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Ls=new WeakMap,ce=$e.createTreeWalker($e,129);function Ki(t,e){if(!Ir(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rs===void 0?e:Rs.createHTML(e)}var Va=(t,e)=>{let r=t.length-1,s=[],i,n=e===2?"<svg>":e===3?"<math>":"",a=Oe;for(let l=0;l<r;l++){let d=t[l],h,u,p=-1,c=0;for(;c<d.length&&(a.lastIndex=c,u=a.exec(d),u!==null);)c=a.lastIndex,a===Oe?u[1]==="!--"?a=Us:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(a=ae):(Vi.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=ae):a=qs:a===ae?u[0]===">"?(a=i??Oe,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?ae:u[3]==='"'?Os:Hs):a===Os||a===Hs?a=ae:a===Us||a===qs?a=Oe:(a=ae,i=void 0);let m=a===ae&&t[l+1].startsWith("/>")?" ":"";n+=a===Oe?d+za:p>=0?(s.push(h),d.slice(0,p)+zi+d.slice(p)+se+m):d+se+(p===-2?l:m)}return[Ki(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},lr=class Qi{constructor({strings:e,_$litType$:r},s){let i;this.parts=[];let n=0,a=0,l=e.length-1,d=this.parts,[h,u]=Va(e,r);if(this.el=Qi.createElement(h,s),ce.currentNode=this.el.content,r===2||r===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=ce.nextNode())!==null&&d.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(zi)){let c=u[a++],m=i.getAttribute(p).split(se),b=/([.?@])?(.*)/.exec(c);d.push({type:1,index:n,name:b[2],strings:m,ctor:b[1]==="."?Qa:b[1]==="?"?Ja:b[1]==="@"?Ga:Rt}),i.removeAttribute(p)}else p.startsWith(se)&&(d.push({type:6,index:n}),i.removeAttribute(p));if(Vi.test(i.tagName)){let p=i.textContent.split(se),c=p.length-1;if(c>0){i.textContent=wt?wt.emptyScript:"";for(let m=0;m<c;m++)i.append(p[m],Xe()),ce.nextNode(),d.push({type:2,index:++n});i.append(p[c],Xe())}}}else if(i.nodeType===8)if(i.data===ji)d.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(se,p+1))!==-1;)d.push({type:7,index:n}),p+=se.length-1}n++}}static createElement(e,r){let s=$e.createElement("template");return s.innerHTML=e,s}};function De(t,e,r=t,s){if(e===Ie)return e;let i=s===void 0?r._$Cl:r._$Co?.[s],n=et(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,s)),s===void 0?r._$Cl=i:(r._$Co??=[])[s]=i),i!==void 0&&(e=De(t,i._$AS(t,e.values),i,s)),e}var Ka=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??$e).importNode(e,!0);ce.currentNode=s;let i=ce.nextNode(),n=0,a=0,l=r[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new Dr(i,i.nextSibling,this,t):l.type===1?d=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(d=new Za(i,this,t)),this._$AV.push(d),l=r[++a]}n!==l?.index&&(i=ce.nextNode(),n++)}return ce.currentNode=$e,s}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(t[e]):(r._$AI(t,r,e),e+=r.strings.length-2)),e++}},Dr=class Ji{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,s,i){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=De(this,e,r),et(e)?e===B||e==null||e===""?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==Ie&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ja(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&et(this._$AH)?this._$AA.nextSibling.data=e:this.T($e.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=lr.createElement(Ki(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(r);else{let n=new Ka(i,this),a=n.u(this.options);n.p(r),this.T(a),this._$AH=n}}_$AC(e){let r=Ls.get(e.strings);return r===void 0&&Ls.set(e.strings,r=new lr(e)),r}k(e){Ir(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,i=0;for(let n of e)i===r.length?r.push(s=new Ji(this.O(Xe()),this.O(Xe()),this,this.options)):s=r[i],s._$AI(n),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){let s=Ds(e).nextSibling;Ds(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Rt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,i){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=B}_$AI(t,e=this,r,s){let i=this.strings,n=!1;if(i===void 0)t=De(this,t,e,0),n=!et(t)||t!==this._$AH&&t!==Ie,n&&(this._$AH=t);else{let a=t,l,d;for(t=i[0],l=0;l<i.length-1;l++)d=De(this,a[r+l],e,l),d===Ie&&(d=this._$AH[l]),n||=!et(d)||d!==this._$AH[l],d===B?t=B:t!==B&&(t+=(d??"")+i[l+1]),this._$AH[l]=d}n&&!s&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Qa=class extends Rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}},Ja=class extends Rt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}},Ga=class extends Rt{constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){if((t=De(this,t,e,0)??B)===Ie)return;let r=this._$AH,s=t===B&&r!==B||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==B&&(r===B||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Za=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){De(this,t)}},Ya=Nr.litHtmlPolyfillSupport;Ya?.(lr,Dr),(Nr.litHtmlVersions??=[]).push("3.3.3");var Xa=(t,e,r)=>{let s=r?.renderBefore??e,i=s._$litPart$;if(i===void 0){let n=r?.renderBefore??null;s._$litPart$=i=new Dr(e.insertBefore(Xe(),n),n,void 0,r??{})}return i._$AI(t),i},Rr=globalThis,Ke=class extends ke{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Xa(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ie}};Ke._$litElement$=!0,Ke.finalized=!0,Rr.litElementHydrateSupport?.({LitElement:Ke});var el=Rr.litElementPolyfillSupport;el?.({LitElement:Ke}),(Rr.litElementVersions??=[]).push("4.2.2");var ge,tl=(ge=class extends Ke{constructor(...e){super(...e),this.baseUrl="",this.settingsPath="/api/log/settings",this.deviceName="logger",this.maxHostLength=63,this.formHost="",this.formUri="",this.formPort="",this.formEnabled=!1,this.loading=!1,this.saving=!1,this.notice=null,this.loaded=!1,this._loadStarted=!1}connectedCallback(){super.connectedCallback(),this.load()}firstUpdated(){this._loadStarted||this.load()}render(){return Fs`
      <div class="stack">
        <section class="card" aria-labelledby="edu-log-heading">
          <h2 id="edu-log-heading">${this.deviceName} settings</h2>
          <p class="muted">
            Configure the network logger on the ${this.deviceName}. Changes apply
            immediately; persistence depends on the device firmware.
          </p>
          ${this.renderNotice(this.notice)}
          <label class="field" for="edu-log-host">
            <span class="field-label">Host</span>
            <input
              id="edu-log-host"
              type="text"
              .value=${this.formHost}
              maxlength=${this.maxHostLength}
              ?disabled=${this.loading||this.saving}
              @input=${e=>this.handleHostInput(e)}
            />
          </label>
          <label class="field" for="edu-log-uri">
            <span class="field-label">URI</span>
            <input
              id="edu-log-uri"
              type="text"
              .value=${this.formUri}
              maxlength=${this.maxHostLength}
              ?disabled=${this.loading||this.saving}
              @input=${e=>this.handleUriInput(e)}
            />
          </label>
          <label class="field" for="edu-log-port">
            <span class="field-label">Port</span>
            <input
              id="edu-log-port"
              type="number"
              min="1"
              max="65535"
              inputmode="numeric"
              .value=${this.formPort}
              ?disabled=${this.loading||this.saving}
              @input=${e=>this.handlePortInput(e)}
            />
          </label>
          <label class="checkbox-row" for="edu-log-enabled">
            <input
              id="edu-log-enabled"
              type="checkbox"
              .checked=${this.formEnabled}
              ?disabled=${this.loading||this.saving}
              @change=${e=>this.handleEnabledChange(e)}
            />
            <span>Enabled</span>
          </label>
          <div class="form-actions">
            <button
              type="button"
              class="primary"
              data-action="save"
              ?disabled=${this.loading||this.saving}
              @click=${()=>{this.handleSave()}}
            >
              ${this.saving?"Saving…":"Save"}
            </button>
            <button
              type="button"
              data-action="reload"
              ?disabled=${this.loading||this.saving}
              @click=${()=>{this.load()}}
            >
              ${this.loading?"Loading…":"Reload"}
            </button>
          </div>
        </section>
      </div>
    `}renderNotice(e){return e?Fs`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.text}
    </div>`:B}createClient(){return Na({baseUrl:this.baseUrl,settingsPath:this.settingsPath})}async load(){if(!(this.loading||this.saving)){this._loadStarted=!0,this.loading=!0,this.notice=null;try{let e=await this.createClient().getSettings();if(!e.ok){this.notice={kind:"error",text:e.message};return}this.applySettings(e.data),this.loaded=!0}finally{this.loading=!1}}}applySettings(e){this.formHost=e.host,this.formUri=e.uri,this.formPort=String(e.port),this.formEnabled=e.enabled}handleHostInput(e){this.formHost=e.currentTarget.value}handleUriInput(e){this.formUri=e.currentTarget.value}handlePortInput(e){this.formPort=e.currentTarget.value}handleEnabledChange(e){this.formEnabled=e.currentTarget.checked}validate(){let e=this.formHost.trim(),r=this.formUri.trim();if(e.length===0)return"Host is required.";if(e.length>this.maxHostLength)return`Host must be ${this.maxHostLength} characters or fewer.`;if(r.length===0)return"URI is required.";if(r.length>this.maxHostLength)return`URI must be ${this.maxHostLength} characters or fewer.`;let s=this.formPort.trim();if(!/^\d+$/.test(s))return"Port must be a whole number between 1 and 65535.";let i=Number(s);return!Number.isInteger(i)||i<1||i>65535?"Port must be a whole number between 1 and 65535.":{host:e,uri:r,port:i,enabled:this.formEnabled}}async handleSave(){if(this.loading||this.saving)return;let e=this.validate();if(typeof e=="string")this.notice={kind:"error",text:e};else{this.saving=!0,this.notice=null;try{let r=await this.createClient().saveSettings(e);if(!r.ok){this.notice={kind:"error",text:r.message};return}this.applySettings(r.data),this.loaded=!0,this.notice={kind:"info",text:"Settings saved."},this.dispatchEvent(new CustomEvent("edu-log-saved",{detail:r.data,bubbles:!0,composed:!0}))}finally{this.saving=!1}}}},ge.properties={baseUrl:{type:String,attribute:"base-url"},settingsPath:{type:String,attribute:"settings-path"},deviceName:{type:String,attribute:"device-name"},maxHostLength:{type:Number,attribute:"max-host-length"},formHost:{state:!0},formUri:{state:!0},formPort:{state:!0},formEnabled:{state:!0},loading:{state:!0},saving:{state:!0},notice:{state:!0},loaded:{state:!0}},ge.styles=Da`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edu-accent, #2563eb);
      --_danger: var(--edu-danger, #dc2626);
      --_muted: var(--edu-muted, #6b7280);
      --_border: #e2e5ea;
      --_surface: #ffffff;
    }

    .stack {
      display: grid;
      gap: 1rem;
      max-width: 34rem;
    }

    .card {
      background: var(--_surface);
      border: 1px solid var(--_border);
      border-radius: 10px;
      padding: 1rem 1.25rem;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }

    h2 {
      font-size: 1rem;
      margin: 0 0 0.5rem;
    }

    p {
      margin: 0 0 0.75rem;
      font-size: 0.875rem;
      line-height: 1.45;
    }

    .muted {
      color: var(--_muted);
    }

    .field {
      display: grid;
      gap: 0.35rem;
      margin-bottom: 0.75rem;
    }

    .field-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
    }

    input[type='text'],
    input[type='number'] {
      font: inherit;
      font-size: 0.875rem;
      padding: 0.45rem 0.6rem;
      border: 1px solid var(--_border);
      border-radius: 8px;
      background: var(--_surface);
      color: inherit;
      max-width: 100%;
    }

    input:focus {
      outline: 2px solid var(--_accent);
      outline-offset: 1px;
    }

    .checkbox-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      margin-bottom: 0.75rem;
    }

    .form-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    button {
      font: inherit;
      font-size: 0.85rem;
      padding: 0.45rem 0.85rem;
      border-radius: 8px;
      border: 1px solid var(--_border);
      background: var(--_surface);
      color: inherit;
      cursor: pointer;
    }

    button:hover:not(:disabled) {
      border-color: var(--_accent);
    }

    button.primary {
      background: var(--_accent);
      border-color: var(--_accent);
      color: #ffffff;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .banner {
      margin: 0 0 0.75rem;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
    }

    .banner-error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: var(--_danger);
    }

    .banner-info {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1d4ed8;
    }
  `,ge);typeof customElements<"u"&&!customElements.get("edu-log-settings-page")&&customElements.define("edu-log-settings-page",tl);const Ws=document.getElementById("app");Ws&&sn(o(_o,{}),Ws);
