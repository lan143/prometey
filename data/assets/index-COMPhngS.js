(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();var it,I,Gr,Y,sr,Yr,Zr,mt,Ve,Me,Xr,Nt,St,Tt,Xe={},et=[],zs=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,nt=Array.isArray;function G(t,e){for(var r in e)t[r]=e[r];return t}function qt(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function js(t,e,r){var s,i,n,a={};for(n in e)n=="key"?s=e[n]:n=="ref"?i=e[n]:a[n]=e[n];if(arguments.length>2&&(a.children=arguments.length>3?it.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)a[n]===void 0&&(a[n]=t.defaultProps[n]);return Ke(t,a,s,i,null)}function Ke(t,e,r,s,i){var n={type:t,props:e,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Gr,__i:-1,__u:0};return i==null&&I.vnode!=null&&I.vnode(n),n}function W(t){return t.children}function Qe(t,e){this.props=t,this.context=e}function ce(t,e){if(e==null)return t.__?ce(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?ce(t):null}function Vs(t){if(t.__P&&t.__d){var e=t.__v,r=e.__e,s=[],i=[],n=G({},e);n.__v=e.__v+1,I.vnode&&I.vnode(n),Rt(t.__P,n,e,t.__n,t.__P.namespaceURI,32&e.__u?[r]:null,s,r??ce(e),!!(32&e.__u),i),n.__v=e.__v,n.__.__k[n.__i]=n,is(s,n,i),e.__e=e.__=null,n.__e!=r&&es(n)}}function es(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),es(t)}function ir(t){(!t.__d&&(t.__d=!0)&&Y.push(t)&&!tt.__r++||sr!=I.debounceRendering)&&((sr=I.debounceRendering)||Yr)(tt)}function tt(){try{for(var t,e=1;Y.length;)Y.length>e&&Y.sort(Zr),t=Y.shift(),e=Y.length,Vs(t)}finally{Y.length=tt.__r=0}}function ts(t,e,r,s,i,n,a,l,c,u,h){var m,d,p,b,y,v,g=s&&s.__k||et,_=e.length;for(c=Ks(r,e,g,c,_),m=0;m<_;m++)(p=r.__k[m])!=null&&(d=p.__i!=-1&&g[p.__i]||Xe,p.__i=m,v=Rt(t,p,d,i,n,a,l,c,u,h),b=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&Ut(d.ref,null,p),h.push(p.ref,p.__c||b,p)),y==null&&b!=null&&(y=b),4&p.__u?(c=rs(p,c,t),d.__e&&(d.__e=null)):typeof p.type=="function"&&v!==void 0?c=v:b&&(c=b.nextSibling),p.__u&=-7);return r.__e=y,c}function Ks(t,e,r,s,i){var n,a,l,c,u,h=r.length,m=h,d=0;for(t.__k=new Array(i),n=0;n<i;n++)(a=e[n])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=t.__k[n]=Ke(null,a,null,null,null):nt(a)?a=t.__k[n]=Ke(W,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=t.__k[n]=Ke(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):t.__k[n]=a,c=n+d,a.__=t,a.__b=t.__b+1,l=null,(u=a.__i=Qs(a,r,c,m))!=-1&&(m--,(l=r[u])&&(l.__u|=2)),l==null||l.__v==null?(u==-1&&(i>h?d--:i<h&&d++),typeof a.type!="function"&&(a.__u|=4)):u!=c&&(u==c-1?d--:u==c+1?d++:(u>c?d--:d++,a.__u|=4))):t.__k[n]=null;if(m)for(n=0;n<h;n++)(l=r[n])!=null&&(2&l.__u)==0&&(l.__e==s&&(s=ce(l)),os(l,l));return s}function rs(t,e,r){var s,i;if(typeof t.type=="function"){for(s=t.__k,i=0;s&&i<s.length;i++)s[i]&&(s[i].__=t,e=rs(s[i],e,r));return e}t.__e!=e&&(e&&t.type&&!e.parentNode&&(e=ce(t)),e=r.insertBefore(t.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Qs(t,e,r,s){var i,n,a,l=t.key,c=t.type,u=e[r],h=u!=null&&(2&u.__u)==0;if(u===null&&l==null||h&&l==u.key&&c==u.type)return r;if(s>(h?1:0)){for(i=r-1,n=r+1;i>=0||n<e.length;)if((u=e[a=i>=0?i--:n++])!=null&&(2&u.__u)==0&&l==u.key&&c==u.type)return a}return-1}function nr(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||zs.test(e)?r:r+"px"}function Le(t,e,r,s,i){var n,a;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof s=="string"&&(t.style.cssText=s=""),s)for(e in s)r&&e in r||nr(t.style,e,"");if(r)for(e in r)s&&r[e]==s[e]||nr(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")n=e!=(e=e.replace(Xr,"$1")),a=e.toLowerCase(),e=a in t||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=r,r?s?r[Me]=s[Me]:(r[Me]=Nt,t.addEventListener(e,n?Tt:St,n)):t.removeEventListener(e,n?Tt:St,n);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function or(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e[Ve]==null)e[Ve]=Nt++;else if(e[Ve]<r[Me])return;return r(I.event?I.event(e):e)}}}function Rt(t,e,r,s,i,n,a,l,c,u){var h,m,d,p,b,y,v,g,_,E,N,P,O,w,q,A,S=e.type;if(e.constructor!==void 0)return null;128&r.__u&&(c=!!(32&r.__u),n=[l=e.__e=r.__e]),(h=I.__b)&&h(e);e:if(typeof S=="function"){m=a.length;try{if(_=e.props,E=S.prototype&&S.prototype.render,N=(h=S.contextType)&&s[h.__c],P=h?N?N.props.value:h.__:s,r.__c?g=(d=e.__c=r.__c).__=d.__E:(E?e.__c=d=new S(_,P):(e.__c=d=new Qe(_,P),d.constructor=S,d.render=Gs),N&&N.sub(d),d.state||(d.state={}),d.__n=s,p=d.__d=!0,d.__h=[],d._sb=[]),E&&d.__s==null&&(d.__s=d.state),E&&S.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=G({},d.__s)),G(d.__s,S.getDerivedStateFromProps(_,d.__s))),b=d.props,y=d.state,d.__v=e,p)E&&S.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),E&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(E&&S.getDerivedStateFromProps==null&&_!==b&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(_,P),e.__v==r.__v||!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(_,d.__s,P)===!1){e.__v!=r.__v&&(d.props=_,d.state=d.__s,d.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(L){L&&(L.__=e)}),et.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&a.push(d),l=ce(r);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(_,d.__s,P),E&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(b,y,v)})}if(d.context=P,d.props=_,d.__P=t,d.__e=!1,O=I.__r,w=0,E)d.state=d.__s,d.__d=!1,O&&O(e),h=d.render(d.props,d.state,d.context),et.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,O&&O(e),h=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++w<25);d.state=d.__s,d.getChildContext!=null&&(s=G(G({},s),d.getChildContext())),E&&!p&&d.getSnapshotBeforeUpdate!=null&&(v=d.getSnapshotBeforeUpdate(b,y)),q=h!=null&&h.type===W&&h.key==null?ns(h.props.children):h,l=ts(t,nt(q)?q:[q],e,r,s,i,n,a,l,c,u),d.base=e.__e,e.__u&=-161,d.__h.length&&a.push(d),g&&(d.__E=d.__=null)}catch(L){if(a.length=m,e.__v=null,c||n!=null){if(L.then){for(e.__u|=c?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;n!=null&&(n[n.indexOf(l)]=null),e.__e=l}else if(n!=null)for(A=n.length;A--;)qt(n[A])}else e.__e=r.__e;e.__k==null&&(e.__k=r.__k||[]),L.then||ss(e),I.__e(L,e,r)}}else n==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):l=e.__e=Js(r.__e,e,r,s,i,n,a,c,u);return(h=I.diffed)&&h(e),128&e.__u?void 0:l}function ss(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(ss))}function is(t,e,r){for(var s=0;s<r.length;s++)Ut(r[s],r[++s],r[++s]);I.__c&&I.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(n){n.call(i)})}catch(n){I.__e(n,i.__v)}})}function ns(t){return typeof t!="object"||t==null||t.__b>0?t:nt(t)?t.map(ns):t.constructor!==void 0?null:G({},t)}function Js(t,e,r,s,i,n,a,l,c){var u,h,m,d,p,b,y,v=r.props||Xe,g=e.props,_=e.type;if(_=="svg"?i="http://www.w3.org/2000/svg":_=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),n!=null){for(u=0;u<n.length;u++)if((p=n[u])&&"setAttribute"in p==!!_&&(_?p.localName==_:p.nodeType==3)){t=p,n[u]=null;break}}if(t==null){if(_==null)return document.createTextNode(g);t=document.createElementNS(i,_,g.is&&g),l&&(I.__m&&I.__m(e,n),l=!1),n=null}if(_==null)v===g||l&&t.data==g||(t.data=g);else{if(n=_=="textarea"&&g.defaultValue!=null?null:n&&it.call(t.childNodes),!l&&n!=null)for(v={},u=0;u<t.attributes.length;u++)v[(p=t.attributes[u]).name]=p.value;for(u in v)p=v[u],u=="dangerouslySetInnerHTML"?m=p:u=="children"||u in g||u=="value"&&"defaultValue"in g||u=="checked"&&"defaultChecked"in g||Le(t,u,null,p,i);for(u in g)p=g[u],u=="children"?d=p:u=="dangerouslySetInnerHTML"?h=p:u=="value"?b=p:u=="checked"?y=p:l&&typeof p!="function"||v[u]===p||Le(t,u,p,v[u],i);if(h)l||m&&(h.__html==m.__html||h.__html==t.innerHTML)||(t.innerHTML=h.__html),e.__k=[];else if(m&&(t.innerHTML=""),ts(e.type=="template"?t.content:t,nt(d)?d:[d],e,r,s,_=="foreignObject"?"http://www.w3.org/1999/xhtml":i,n,a,n?n[0]:r.__k&&ce(r,0),l,c),n!=null)for(u=n.length;u--;)qt(n[u]);l&&_!="textarea"||(u="value",_=="progress"&&b==null?t.removeAttribute("value"):b!=null&&(b!==t[u]||_=="progress"&&!b||_=="option"&&b!=v[u])&&Le(t,u,b,v[u],i),u="checked",y!=null&&y!=t[u]&&Le(t,u,y,v[u],i))}return t}function Ut(t,e,r){try{if(typeof t=="function"){var s=typeof t.__u=="function";s&&t.__u(),s&&e==null||(t.__u=t(e))}else t.current=e}catch(i){I.__e(i,r)}}function os(t,e,r){var s,i;if(I.unmount&&I.unmount(t),(s=t.ref)&&(s.current&&s.current!=t.__e||Ut(s,null,e)),(s=t.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(n){I.__e(n,e)}s.base=s.__P=s.__n=null}if(s=t.__k)for(i=0;i<s.length;i++)s[i]&&os(s[i],e,r||typeof t.type!="function");r||qt(t.__e),t.__c=t.__=t.__e=void 0}function Gs(t,e,r){return this.constructor(t,r)}function Ys(t,e,r){var s,i,n,a;e==document&&(e=document.documentElement),I.__&&I.__(t,e),i=(s=!1)?null:e.__k,n=[],a=[],Rt(e,t=e.__k=js(W,null,[t]),i||Xe,Xe,e.namespaceURI,i?null:e.firstChild?it.call(e.childNodes):null,n,i?i.__e:e.firstChild,s,a),is(n,t,a),t.props.children=null}it=et.slice,I={__e:function(t,e,r,s){for(var i,n,a;e=e.__;)if((i=e.__c)&&!i.__)try{if((n=i.constructor)&&n.getDerivedStateFromError!=null&&(i.setState(n.getDerivedStateFromError(t)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,s||{}),a=i.__d),a)return i.__E=i}catch(l){t=l}throw t}},Gr=0,Qe.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=G({},this.state),typeof t=="function"&&(t=t(G({},r),this.props)),t&&G(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),ir(this))},Qe.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ir(this))},Qe.prototype.render=W,Y=[],Yr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Zr=function(t,e){return t.__v.__b-e.__v.__b},tt.__r=0,mt=Math.random().toString(8),Ve="__d"+mt,Me="__a"+mt,Xr=/(PointerCapture)$|Capture$/i,Nt=0,St=or(!1),Tt=or(!0);var Zs=0;function o(t,e,r,s,i,n){e||(e={});var a,l,c=e;if("ref"in c)for(l in c={},e)l=="ref"?a=e[l]:c[l]=e[l];var u={type:t,props:c,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Zs,__i:-1,__u:0,__source:i,__self:n};if(typeof t=="function"&&(a=t.defaultProps))for(l in a)c[l]===void 0&&(c[l]=a[l]);return I.vnode&&I.vnode(u),u}var ve,U,ft,ar,Ne=0,as=[],H=I,lr=H.__b,dr=H.__r,cr=H.diffed,ur=H.__c,hr=H.unmount,pr=H.__;function ot(t,e){H.__h&&H.__h(U,t,Ne||e),Ne=0;var r=U.__H||(U.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function $(t){return Ne=1,Xs(ds,t)}function Xs(t,e,r){var s=ot(ve++,2);if(s.t=t,!s.__c&&(s.__=[ds(void 0,e),function(l){var c=s.__N?s.__N[0]:s.__[0],u=s.t(c,l);c!==u&&(s.__N=[u,s.__[1]],s.__c.setState({}))}],s.__c=U,!U.__f)){var i=function(l,c,u){if(!s.__c.__H)return!0;var h=!1,m=s.__c.props!==l;if(s.__c.__H.__.some(function(p){if(p.__N){h=!0;var b=p.__[0];p.__=p.__N,p.__N=void 0,b!==p.__[0]&&(m=!0)}}),n){var d=n.call(this,l,c,u);return h?d||m:d}return!h||m};U.__f=!0;var n=U.shouldComponentUpdate,a=U.componentWillUpdate;U.componentWillUpdate=function(l,c,u){if(this.__e){var h=n;n=void 0,i(l,c,u),n=h}a&&a.call(this,l,c,u)},U.shouldComponentUpdate=i}return s.__N||s.__}function ee(t,e){var r=ot(ve++,3);!H.__s&&ls(r.__H,e)&&(r.__=t,r.u=e,U.__H.__h.push(r))}function Ot(t){return Ne=5,at(function(){return{current:t}},[])}function at(t,e){var r=ot(ve++,7);return ls(r.__H,e)&&(r.__=t(),r.__H=e,r.__h=t),r.__}function B(t,e){return Ne=8,at(function(){return t},e)}function Ft(){var t=ot(ve++,11);if(!t.__){for(var e=U.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var r=e.__m||(e.__m=[0,0]);t.__="P"+r[0]+"-"+r[1]++}return t.__}function ei(){for(var t;t=as.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(Je),e.__h.some(kt),e.__h=[]}catch(r){e.__h=[],H.__e(r,t.__v)}}}H.__b=function(t){U=null,lr&&lr(t)},H.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),pr&&pr(t,e)},H.__r=function(t){dr&&dr(t),ve=0;var e=(U=t.__c).__H;e&&(ft===U?(e.__h=[],U.__h=[],e.__.some(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(e.__h.some(Je),e.__h.some(kt),e.__h=[],ve=0)),ft=U},H.diffed=function(t){cr&&cr(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(as.push(e)!==1&&ar===H.requestAnimationFrame||((ar=H.requestAnimationFrame)||ti)(ei)),e.__H.__.some(function(r){r.u&&(r.__H=r.u,r.u=void 0)})),ft=U=null},H.__c=function(t,e){e.some(function(r){try{r.__h.some(Je),r.__h=r.__h.filter(function(s){return!s.__||kt(s)})}catch(s){e.some(function(i){i.__h&&(i.__h=[])}),e=[],H.__e(s,r.__v)}}),ur&&ur(t,e)},H.unmount=function(t){hr&&hr(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.some(function(s){try{Je(s)}catch(i){e=i}}),r.__H=void 0,e&&H.__e(e,r.__v))};var mr=typeof requestAnimationFrame=="function";function ti(t){var e,r=function(){clearTimeout(s),mr&&cancelAnimationFrame(e),setTimeout(t)},s=setTimeout(r,35);mr&&(e=requestAnimationFrame(r))}function Je(t){var e=U,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),U=e}function kt(t){var e=U;t.__c=t.__(),U=e}function ls(t,e){return!t||t.length!==e.length||e.some(function(r,s){return r!==t[s]})}function ds(t,e){return typeof e=="function"?e(t):e}function ri({tabs:t,active:e,onSelect:r}){return o("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:t.map(s=>o("button",{type:"button",role:"tab",id:`tab-${s.id}`,"aria-selected":s.id===e,"aria-controls":`panel-${s.id}`,class:s.id===e?"active":void 0,onClick:()=>r(s.id),children:s.label},s.id))})}const f={mqtt:{hostMin:1,hostMax:63,loginMax:31,passwordMax:31,haDiscoveryPrefixMin:1,haDiscoveryPrefixMax:63,topicMin:1,topicMax:63},boiler:{topicMax:63,fieldMax:15,savableDrivers:[1],savableOutdoorSensors:[1]},room:{count:8,idMin:0,idMax:7,nameMax:31,topicMax:63,temperatureFieldMax:15,savableTemperatureSensorTypes:[1],pidMin:0},valve:{count:9,idMin:0,idMax:8,channelMin:0,channelMax:15,roomIdMin:0,roomIdMax:7,fullTravelTimeMin:0,fullTravelTimeMax:6e5,windowTimeMin:0,windowTimeMax:6e5,savableTypes:[1]}},lt="Device returned an empty response (config too large for its 4KB JSON limit — shorten names/topics)",Ht="Device returned an empty response.",cs="Could not reach the device. Check that you are connected to its network and try again.",Be={};function us(){return{ok:!1,message:cs}}function si(t){try{const e=JSON.parse(t);if(e&&typeof e=="object"&&"message"in e){const r=e.message;if(typeof r=="string"&&r)return r}}catch{}}async function hs(t){let e=`Request failed (HTTP ${t.status}).`;try{const r=await t.text();r&&(e=si(r)??e)}catch{}return{ok:!1,status:t.status,message:e}}async function pe(t,e){let r;try{r=await fetch(t,{headers:{Accept:"application/json"}})}catch{return us()}if(!r.ok)return hs(r);let s;try{s=await r.text()}catch{return{ok:!1,status:r.status,message:cs}}if(!s.trim())return{ok:!1,status:r.status,message:e};try{return{ok:!0,data:JSON.parse(s)}}catch{return{ok:!1,status:r.status,message:e}}}async function Lt(t,e){let r;try{r=await fetch(t,e)}catch{return us()}if(!r.ok)return hs(r);let s="";try{s=await r.text()}catch{return{ok:!0,data:Be}}if(!s.trim())return{ok:!0,data:Be};try{const i=JSON.parse(s);return{ok:!0,data:i&&typeof i=="object"?i:Be}}catch{return{ok:!0,data:Be}}}function ps(t,e){return Lt(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:e.toString()})}function ms(t,e){return Lt(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}function j(t,e,r,s=!1){if(typeof t!="string")throw new Error(`${e} is required.`);if(!s&&t.length===0)throw new Error(`${e} must not be empty.`);if(t.length>r)throw new Error(`${e} must be at most ${r} characters.`);return t}function F(t,e,r,s){if(typeof t!="number"||!Number.isFinite(t))throw new Error(`${e} must be a number.`);if(t<r||t>s)throw new Error(`${e} must be between ${r} and ${s}.`);return t}function Bt(t,e){if(typeof t!="boolean")throw new Error(`${e} must be true or false.`);return t}function ii(){return pe("/api/settings",lt)}function ni(){return pe("/api/settings/boiler",lt)}function oi(){return pe("/api/settings/rooms",lt)}function ai(){return pe("/api/settings/valves",lt)}function li(){return pe("/api/status",Ht)}function fs(){return pe("/healthcheck/healty",Ht)}function di(){return pe("/healthcheck/ready",Ht)}function ci(t){const e=j(t.host,"MQTT host",f.mqtt.hostMax),r=F(t.port,"MQTT port",1,65535),s=j(t.login,"MQTT login",f.mqtt.loginMax,!0),i=j(t.password,"MQTT password",f.mqtt.passwordMax,!0),n=j(t.haDiscoveryPrefix,"HA discovery prefix",f.mqtt.haDiscoveryPrefixMax),a=Bt(t.mqttIsHADiscovery,"HA discovery flag"),l=j(t.stateTopic,"State topic",f.mqtt.topicMax),c=j(t.commandTopic,"Command topic",f.mqtt.topicMax),u=new URLSearchParams;return u.set("host",e),u.set("port",String(r)),u.set("login",s),u.set("password",i),u.set("haDiscoveryPrefix",n),u.set("mqttIsHADiscovery",a?"true":"false"),u.set("stateTopic",l),u.set("commandTopic",c),ps("/api/settings/mqtt",u)}function ui(t){const e=F(t.driver,"Boiler driver",0,1),r=F(t.modbusAddress,"Modbus address",0,255),s=F(t.modbusSpeed,"Modbus speed",0,1e6),i=F(t.K,"Weather curve K",-1e6,1e6),n=F(t.B,"Weather curve B",-1e6,1e6),a=F(t.P,"Weather curve P",-1e6,1e6),l=F(t.I,"Weather curve I",-1e6,1e6),c=F(t.minSetPoint,"Minimum setpoint",30,80);if(e!==1)throw new Error('Boiler driver must be ECTOControlV2 (1); the device rejects "No select".');const u=F(t.outdoorSensor,"Outdoor sensor",0,1);if(u!==1)throw new Error('Outdoor sensor must be MQTT (1); the device rejects "No select".');const h=j(t.outdoorSensorMqttTopic??"","Outdoor sensor topic",f.boiler.topicMax,!0),m=j(t.outdoorSensorMqttField??"","Outdoor sensor field",f.boiler.fieldMax,!0);if(u===1&&h.length===0)throw new Error("Outdoor sensor topic is required when MQTT is selected.");if(u===1&&m.length===0)throw new Error("Outdoor sensor field is required when MQTT is selected.");const d=new URLSearchParams;return d.set("driver",String(e)),d.set("modbusAddress",String(r)),d.set("modbusSpeed",String(s)),d.set("K",String(i)),d.set("B",String(n)),d.set("P",String(a)),d.set("I",String(l)),d.set("minSetPoint",String(c)),d.set("outdoorSensor",String(u)),d.set("outdoorSensorMqttTopic",h),d.set("outdoorSensorMqttField",m),ps("/api/settings/boiler/update",d)}function At(t){const e=F(t.id,"Room id",f.room.idMin,f.room.idMax),r=Bt(t.enabled,"Room enabled"),s=F(t.temperatureSensorType,"Temperature sensor type",1,1),i=j(t.name,"Room name",f.room.nameMax),n=j(t.mqttCommandTopic,"Room command topic",f.room.topicMax),a=j(t.mqttStateTopic,"Room state topic",f.room.topicMax),l=j(t.mqttTemperatureSensorTopic,"Temperature topic",f.room.topicMax),c=j(t.mqttTemperatureSensorField.trim(),"Temperature field",f.room.temperatureFieldMax,!0),u=F(t.kP,"Room kP",f.room.pidMin,1e6),h=F(t.kI,"Room kI",f.room.pidMin,1e6),m=F(t.kD,"Room kD",f.room.pidMin,1e6);return ms("/api/settings/room",{id:e,enabled:r,temperatureSensorType:s,name:i,mqttCommandTopic:n,mqttStateTopic:a,mqttTemperatureSensorTopic:l,mqttTemperatureSensorField:c,kP:u,kI:h,kD:m})}function xt(t){const e=F(t.id,"Valve id",f.valve.idMin,f.valve.idMax),r=Bt(t.enabled,"Valve enabled"),s=F(t.type,"Valve type",1,1),i=F(t.channel,"Valve channel",f.valve.channelMin,f.valve.channelMax),n=F(t.fullTravelTime,"Full travel time",f.valve.fullTravelTimeMin,f.valve.fullTravelTimeMax),a=F(t.windowTime,"Window time",f.valve.windowTimeMin,f.valve.windowTimeMax),l=F(t.roomID,"Room id",f.valve.roomIdMin,f.valve.roomIdMax);return ms("/api/settings/valve",{id:e,enabled:r,type:s,channel:i,fullTravelTime:n,windowTime:a,roomID:l})}function hi(){return Lt("/api/reboot",{method:"POST"})}function M({kind:t="info",message:e,onClose:r}){return o("div",{class:`banner banner-${t}`,role:"status",children:[o("span",{children:e}),r?o("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:r,children:"×"}):null]})}function pi(t){switch(t){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function R({children:t,variant:e="default",type:r="button",disabled:s,title:i,onClick:n}){return o("button",{type:r,class:pi(e),disabled:s,title:i,onClick:n,children:t})}function Wt(t){return o(R,{...t,variant:"danger"})}function V({title:t,children:e,class:r}){return o("section",{class:r?`card ${r}`:"card",children:[t?o("h2",{children:t}):null,e]})}const _t=2e3,mi=12e4;function fi(){const[t,e]=$("idle"),r=Ot(0);ee(()=>{if(t!=="rebooting")return;let a=!1,l;const c=()=>{fs().then(u=>{if(!a){if(u.ok){e("ready");return}if(r.current+=1,r.current*_t>=mi){e("timeout");return}l=window.setTimeout(c,_t)}})};return l=window.setTimeout(c,_t),()=>{a=!0,l!==void 0&&window.clearTimeout(l)}},[t]);const s=B(()=>{r.current=0,e("rebooting")},[]),i=B(()=>e("idle"),[]),n=B(()=>{r.current=0,e("rebooting")},[]);return at(()=>({phase:t,start:s,dismiss:i,retry:n}),[t,s,i,n])}function _i({flow:t}){return t.phase==="idle"?null:o("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:o("div",{class:"reboot-dialog card",children:[o("h2",{children:"Device is rebooting"}),t.phase==="rebooting"?o(W,{children:[o("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),o("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,t.phase==="ready"?o(W,{children:[o(M,{kind:"success",message:"The device is back online."}),o("div",{class:"form-actions",children:o(R,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,t.phase==="timeout"?o(W,{children:[o(M,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),o("div",{class:"form-actions",children:[o(R,{onClick:t.retry,children:"Keep waiting"}),o(R,{onClick:t.dismiss,children:"Dismiss"})]})]}):null]})})}const bi=1e4;function gi(t){const e=Math.max(0,Math.floor(t)),r=Math.floor(e/86400),s=Math.floor(e%86400/3600),i=Math.floor(e%3600/60),n=e%60,a=[];return r&&a.push(`${r}d`),(r||s)&&a.push(`${s}h`),(r||s||i)&&a.push(`${i}m`),a.push(`${n}s`),a.join(" ")}function vi(t){return Number.isFinite(t)?`${Math.round(t/1024)} KB (${Math.round(t)} bytes)`:String(t)}function $i(){const[t,e]=$(null),[r,s]=$(null),[i,n]=$(!1),[a,l]=$(null),[c,u]=$(null),[h,m]=$(!0),[d,p]=$(null),[b,y]=$(!1),v=fi(),g=B(async()=>{const O=await li();O.ok?(e(O.data),s(null)):s(O.message),n(!0)},[]),_=B(async()=>{m(!0);const[O,w]=await Promise.all([fs(),di()]);l(O),u(w),m(!1)},[]);ee(()=>{g();const O=window.setInterval(()=>{g()},bi);return()=>window.clearInterval(O)},[g]),ee(()=>{_()},[_]);const E=B(async()=>{if(!window.confirm("Reboot the device now? Heating control will be offline for about 20-60 seconds."))return;p(null),y(!0);const w=await hi();y(!1),w.ok?v.start():p(w.message)},[v.start]),N=h&&!a?o("p",{class:"muted",children:"Checking device health…"}):a?a.ok?o(M,{kind:a.data.healty?"success":"error",message:a.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):o(M,{kind:"error",message:a.message}):null,P=c?c.ok?o(M,{kind:c.data.ready?"success":"info",message:c.data.ready?"All registered services are ready.":`Not ready: ${c.data.message}`}):c.status===500?o(M,{kind:"info",message:`Not ready: ${c.message}`}):o(M,{kind:"error",message:c.message}):null;return o("div",{class:"stack",children:[o(V,{title:"Device",children:[i?r?o(W,{children:[o(M,{kind:"error",message:r}),o("div",{class:"form-actions",children:o(R,{onClick:()=>{g()},children:"Retry"})})]}):t?o("dl",{class:"kv",children:[o("dt",{children:"Free heap"}),o("dd",{children:vi(t.freeHeap)}),o("dt",{children:"Uptime"}),o("dd",{children:gi(t.uptime)}),o("dt",{children:"Last reset reason"}),o("dd",{children:t.lastResetReason})]}):null:o("p",{class:"muted",children:"Loading status…"}),o("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),o(V,{title:"Health",children:[N,P,o("div",{class:"form-actions",children:o(R,{onClick:()=>{_()},disabled:h,children:h?"Checking…":"Refresh health"})})]}),o(V,{title:"Maintenance",children:[o("p",{class:"muted",children:"A reboot briefly interrupts heating control. Configuration changes saved on the other tabs only take effect after a reboot."}),d?o(M,{kind:"error",message:d,onClose:()=>p(null)}):null,o("div",{class:"form-actions",children:o(Wt,{onClick:()=>{E()},disabled:b||v.phase!=="idle",children:"Reboot device"})})]}),o(_i,{flow:v})]})}function yi({label:t,checked:e,onChange:r,disabled:s,help:i,name:n}){const a=Ft();return o("div",{class:"checkbox-field",children:[o("label",{class:"checkbox-label",for:a,children:[o("input",{id:a,name:n,type:"checkbox",checked:e,disabled:s,onChange:c=>{r?.(c.currentTarget.checked)}}),o("span",{children:t})]}),i?o("span",{class:"field-help",children:i}):null]})}function T({label:t,value:e,onInput:r,type:s="text",name:i,placeholder:n,maxLength:a,min:l,max:c,step:u,error:h,help:m,disabled:d,required:p,autoComplete:b,inputMode:y}){const v=Ft();return o("label",{class:"field",for:v,children:[o("span",{class:"field-label",children:t}),o("input",{id:v,name:i,type:s,value:e,placeholder:n,maxLength:a,min:l,max:c,step:u,disabled:d,required:p,autoComplete:b,inputMode:y,onInput:_=>{r?.(_.currentTarget.value)},"aria-invalid":h?!0:void 0}),m&&!h?o("span",{class:"field-help",children:m}):null,h?o("span",{class:"field-error",children:h}):null]})}function Te(){return o(M,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."})}function wi({label:t,value:e,onInput:r,maxLength:s,error:i,help:n,disabled:a,autoComplete:l}){const[c,u]=$(!1);return o("div",{class:"password-field",children:[o(T,{label:t,value:e,onInput:r,type:c?"text":"password",maxLength:s,error:i,help:n,disabled:a,autoComplete:l}),o("button",{type:"button",class:"btn reveal-toggle","aria-pressed":c,disabled:a,onClick:()=>u(h=>!h),children:c?"Hide":"Show"})]})}const Si={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:""};function Ti(t){const e={};t.host.trim().length===0?e.host="Host is required.":t.host.length>f.mqtt.hostMax&&(e.host=`At most ${f.mqtt.hostMax} characters.`);const r=Number(t.port);return t.port.trim()===""?e.port="Port is required.":(!Number.isInteger(r)||r<1||r>65535)&&(e.port="Port must be an integer between 1 and 65535."),t.login.length>f.mqtt.loginMax&&(e.login=`At most ${f.mqtt.loginMax} characters.`),t.password.length>f.mqtt.passwordMax&&(e.password=`At most ${f.mqtt.passwordMax} characters.`),t.haDiscoveryPrefix.trim().length===0?e.haDiscoveryPrefix="Discovery prefix is required.":t.haDiscoveryPrefix.length>f.mqtt.haDiscoveryPrefixMax&&(e.haDiscoveryPrefix=`At most ${f.mqtt.haDiscoveryPrefixMax} characters.`),t.stateTopic.trim().length===0?e.stateTopic="Required - the device crashes if the state topic is missing.":t.stateTopic.length>f.mqtt.topicMax&&(e.stateTopic=`At most ${f.mqtt.topicMax} characters.`),t.commandTopic.trim().length===0?e.commandTopic="Required - the device crashes if the command topic is missing.":t.commandTopic.length>f.mqtt.topicMax&&(e.commandTopic=`At most ${f.mqtt.topicMax} characters.`),e}function ki(t){return Object.keys(t).length>0}function Ai(){const[t,e]=$(!1),[r,s]=$(null),[i,n]=$(Si),[a,l]=$({}),[c,u]=$(!1),[h,m]=$(null),[d,p]=$(null),b=B(async()=>{s(null);const g=await ii();g.ok?n({host:g.data.mqttHost,port:String(g.data.mqttPort),login:g.data.mqttLogin,password:g.data.mqttPassword,haDiscoveryPrefix:g.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:g.data.mqttIsHADiscovery,stateTopic:g.data.mqttStateTopic,commandTopic:g.data.mqttCommandTopic}):s(g.message),e(!0)},[]);ee(()=>{b()},[b]);const y=g=>n(_=>({..._,...g})),v=B(async g=>{g.preventDefault();const _=Ti(i);if(l(_),m(null),p(null),ki(_))return;u(!0);const E=await ci({host:i.host,port:Number(i.port),login:i.login,password:i.password,haDiscoveryPrefix:i.haDiscoveryPrefix,mqttIsHADiscovery:i.mqttIsHADiscovery,stateTopic:i.stateTopic,commandTopic:i.commandTopic});u(!1),E.ok?m("MQTT settings saved to flash."):p(E.message)},[i]);return t?o("div",{class:"stack",children:[o(Te,{}),r?o(W,{children:[o(M,{kind:"error",message:r}),o("div",{class:"form-actions",children:o(R,{onClick:()=>{b()},children:"Retry"})})]}):null,o(V,{title:"MQTT",children:o("form",{onSubmit:v,children:[o(T,{label:"Host",value:i.host,onInput:g=>y({host:g}),maxLength:f.mqtt.hostMax,error:a.host,autoComplete:"off"}),o(T,{label:"Port",value:i.port,onInput:g=>y({port:g}),type:"number",min:1,max:65535,inputMode:"numeric",error:a.port}),o(T,{label:"Login",value:i.login,onInput:g=>y({login:g}),maxLength:f.mqtt.loginMax,error:a.login,autoComplete:"off"}),o(wi,{label:"Password",value:i.password,onInput:g=>y({password:g}),maxLength:f.mqtt.passwordMax,error:a.password,autoComplete:"new-password"}),o(T,{label:"HA discovery prefix",value:i.haDiscoveryPrefix,onInput:g=>y({haDiscoveryPrefix:g}),maxLength:f.mqtt.haDiscoveryPrefixMax,error:a.haDiscoveryPrefix,autoComplete:"off"}),o(yi,{label:"Enable Home Assistant discovery",checked:i.mqttIsHADiscovery,onChange:g=>y({mqttIsHADiscovery:g})}),o(T,{label:"State topic",value:i.stateTopic,onInput:g=>y({stateTopic:g}),maxLength:f.mqtt.topicMax,error:a.stateTopic,help:"Must not be empty: the device crashes on a missing state topic.",autoComplete:"off"}),o(T,{label:"Command topic",value:i.commandTopic,onInput:g=>y({commandTopic:g}),maxLength:f.mqtt.topicMax,error:a.commandTopic,help:"Must not be empty: the device crashes on a missing command topic.",autoComplete:"off"}),h?o(M,{kind:"success",message:h,onClose:()=>m(null)}):null,d?o(M,{kind:"error",message:d,onClose:()=>p(null)}):null,o("div",{class:"form-actions",children:o(R,{type:"submit",variant:"primary",disabled:c,children:c?"Saving…":"Save MQTT"})})]})})]}):o(V,{title:"Connections",children:o("p",{class:"muted",children:"Loading connection settings…"})})}function Ge({label:t,value:e,options:r,onChange:s,error:i,help:n,disabled:a,required:l,name:c}){const u=Ft(),h=m=>{s?.(m.currentTarget.value)};return o("label",{class:"field",for:u,children:[o("span",{class:"field-label",children:t}),o("select",{id:u,name:c,value:String(e),disabled:a,required:l,onChange:h,"aria-invalid":i?!0:void 0,children:r.map(m=>o("option",{value:m.value,disabled:m.disabled,children:m.label},m.value))}),n&&!i?o("span",{class:"field-help",children:n}):null,i?o("span",{class:"field-error",children:i}):null]})}const xi=640,fr=360,J=56,fe=624,Pe=16,ge=312,_s=fe-J,bs=ge-Pe,Pt=20,gs=-30,Et=20,vs=85,_r=80,Pi=[20,10,0,-10,-20,-30],Ei=[20,30,40,50,60,70,80],Mi=1,Ci=7.2,Ii=50;function bt(t,e){return Number.isFinite(t)?t:e}function br(t){return J+(Pt-t)/(Pt-gs)*_s}function We(t){return ge-(t-Et)/(vs-Et)*bs}function Di(t){return t>0?`+${t}`:String(t)}function Ni({k:t,b:e,minSetPoint:r}){const s=bt(t,Mi),i=bt(e,Ci),n=bt(r,Ii),a=-.21*s-.06,l=6.04*s+1.98,c=-5.06*s+18.06,u=[];for(let d=Pt;d>=gs;d-=1){const p=-.2*d+5,b=a*p*p+l*p+c+i,y=Math.min(_r,Math.max(n,b));u.push(`${br(d).toFixed(2)},${We(y).toFixed(2)}`)}const h=We(Math.min(vs,Math.max(Et,n))),m=We(_r);return o("svg",{class:"weather-curve",viewBox:`0 0 ${xi} ${fr}`,preserveAspectRatio:"xMidYMid meet",role:"img","aria-label":"Weather curve: computed boiler setpoint versus outdoor temperature",children:[o("rect",{class:"wc-plot",x:J,y:Pe,width:_s,height:bs}),Ei.map(d=>{const p=We(d);return o("g",{children:[o("line",{class:"wc-grid",x1:J,y1:p,x2:fe,y2:p}),o("text",{class:"wc-tick",x:J-8,y:p+4,"text-anchor":"end",children:d})]},`sp-${d}`)}),Pi.map(d=>{const p=br(d);return o("g",{children:[o("line",{class:"wc-grid",x1:p,y1:Pe,x2:p,y2:ge}),o("text",{class:"wc-tick",x:p,y:ge+18,"text-anchor":"middle",children:Di(d)})]},`out-${d}`)}),o("line",{class:"wc-max",x1:J,y1:m,x2:fe,y2:m}),o("text",{class:"wc-max-label",x:fe-4,y:m-5,"text-anchor":"end",children:"max 80"}),o("polyline",{class:"wc-curve",points:u.join(" ")}),o("line",{class:"wc-min",x1:J,y1:h,x2:fe,y2:h}),o("text",{class:"wc-min-label",x:J+4,y:h-5,"text-anchor":"start",children:"min"}),o("text",{class:"wc-axis-title",x:(J+fe)/2,y:fr-8,"text-anchor":"middle",children:"Outdoor, °C"}),o("text",{class:"wc-axis-title",x:16,y:(Pe+ge)/2,"text-anchor":"middle",transform:`rotate(-90 16 ${(Pe+ge)/2})`,children:"Setpoint, °C"})]})}const gr=[1200,2400,4800,9600,19200,38400,57600,115200],qi={driver:"0",modbusAddress:"1",modbusSpeed:"9600",K:"0",B:"0",P:"0",I:"0",minSetPoint:"50",outdoorSensor:"0",outdoorSensorMqttTopic:"",outdoorSensorMqttField:""};function Ee(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function Ri(t){return Object.keys(t).length>0}function Ui(t){const e={};t.driver!=="1"&&(e.driver='Saving requires ECTOControlV2 (1); the device rejects "No select".');const r=Ee(t.modbusAddress);(r===null||!Number.isInteger(r)||r<1||r>247)&&(e.modbusAddress="Address must be an integer between 1 and 247.");const s=Ee(t.modbusSpeed);(s===null||s<=0)&&(e.modbusSpeed="Speed must be a positive number.");const i=[["K",t.K,"K"],["B",t.B,"B"],["P",t.P,"P"],["I",t.I,"I"]];for(const[a,l,c]of i)Ee(l)===null&&(e[a]=`${c} must be a number.`);const n=Ee(t.minSetPoint);return(n===null||n<30||n>80)&&(e.minSetPoint="Minimum setpoint must be between 30 and 80."),t.outdoorSensor!=="1"&&(e.outdoorSensor='Saving requires MQTT (1); the device rejects "No".'),t.outdoorSensorMqttTopic.trim().length===0?e.outdoorSensorMqttTopic="Topic is required when MQTT is selected.":t.outdoorSensorMqttTopic.length>f.boiler.topicMax&&(e.outdoorSensorMqttTopic=`At most ${f.boiler.topicMax} characters.`),t.outdoorSensorMqttField.trim().length===0?e.outdoorSensorMqttField="Field is required when MQTT is selected.":t.outdoorSensorMqttField.length>f.boiler.fieldMax&&(e.outdoorSensorMqttField=`At most ${f.boiler.fieldMax} characters.`),e}function Oi(t){const e=gr.map(s=>({value:String(s),label:String(s)})),r=Ee(t);return r!==null&&!gr.includes(r)&&e.unshift({value:t,label:`${t} (current)`}),e}function Fi(){const[t,e]=$(!1),[r,s]=$(null),[i,n]=$(qi),[a,l]=$({}),[c,u]=$(!1),[h,m]=$(null),[d,p]=$(null),b=at(()=>Oi(i.modbusSpeed),[i.modbusSpeed]),y=B(async()=>{s(null);const _=await ni();_.ok?n({driver:String(_.data.driver),modbusAddress:String(_.data.modbusAddress),modbusSpeed:String(_.data.modbusSpeed),K:String(_.data.K),B:String(_.data.B),P:String(_.data.P),I:String(_.data.I),minSetPoint:String(_.data.minSetPoint),outdoorSensor:String(_.data.outdoorSensor),outdoorSensorMqttTopic:_.data.outdoorSensorMqttTopic,outdoorSensorMqttField:_.data.outdoorSensorMqttField}):s(_.message),e(!0)},[]);ee(()=>{y()},[y]);const v=_=>n(E=>({...E,..._})),g=B(async _=>{_.preventDefault();const E=Ui(i);if(l(E),m(null),p(null),Ri(E))return;u(!0);const N=await ui({driver:Number(i.driver),modbusAddress:Number(i.modbusAddress),modbusSpeed:Number(i.modbusSpeed),K:Number(i.K),B:Number(i.B),P:Number(i.P),I:Number(i.I),minSetPoint:Number(i.minSetPoint),outdoorSensor:Number(i.outdoorSensor),outdoorSensorMqttTopic:i.outdoorSensorMqttTopic,outdoorSensorMqttField:i.outdoorSensorMqttField});u(!1),N.ok?m("Boiler settings saved to flash."):p(N.message)},[i]);return t?o("div",{class:"stack",children:[o(Te,{}),r?o(W,{children:[o(M,{kind:"error",message:r}),o("div",{class:"form-actions",children:o(R,{onClick:()=>{y()},children:"Retry"})})]}):null,o(V,{title:"Boiler driver",children:o("form",{onSubmit:g,children:[o(Ge,{label:"Driver",value:i.driver,onChange:_=>v({driver:_}),options:[{value:"0",label:"No select (0) - not savable"},{value:"1",label:"ECTOControlV2 (1)"}],error:a.driver,help:"The device accepts only ECTOControlV2 when saving."}),o(T,{label:"Modbus address",value:i.modbusAddress,onInput:_=>v({modbusAddress:_}),type:"number",min:1,max:247,step:1,inputMode:"numeric",error:a.modbusAddress,help:"1-247 (the firmware does not range-check this)."}),o(Ge,{label:"Modbus speed (baud)",value:i.modbusSpeed,onChange:_=>v({modbusSpeed:_}),options:b,error:a.modbusSpeed}),o("h3",{children:"Weather curve"}),o(T,{label:"K (curve scale)",value:i.K,onInput:_=>v({K:_}),type:"number",step:.1,error:a.K}),o(T,{label:"B (offset, °C)",value:i.B,onInput:_=>v({B:_}),type:"number",step:.1,error:a.B}),o(T,{label:"P (trim gain)",value:i.P,onInput:_=>v({P:_}),type:"number",step:.1,error:a.P}),o(T,{label:"I (trim integral, °C/s)",value:i.I,onInput:_=>v({I:_}),type:"number",step:.1,error:a.I}),o(T,{label:"Minimum setpoint (°C)",value:i.minSetPoint,onInput:_=>v({minSetPoint:_}),type:"number",min:30,max:80,step:1,inputMode:"numeric",error:a.minSetPoint,help:"Lower bound for the computed setpoint (30-80 °C)."}),o("p",{class:"muted",children:"Base curve without room trim. Effective setpoint = curve + trim, clamped to [min, 80]."}),o(Ni,{k:Number(i.K),b:Number(i.B),minSetPoint:Number(i.minSetPoint)}),o("h3",{children:"Outdoor sensor"}),o(Ge,{label:"Source",value:i.outdoorSensor,onChange:_=>v({outdoorSensor:_}),options:[{value:"0",label:"No (0) - not savable"},{value:"1",label:"MQTT (1)"}],error:a.outdoorSensor,help:"The device accepts only MQTT when saving."}),o(T,{label:"Outdoor sensor MQTT topic",value:i.outdoorSensorMqttTopic,onInput:_=>v({outdoorSensorMqttTopic:_}),maxLength:f.boiler.topicMax,disabled:i.outdoorSensor!=="1",error:a.outdoorSensorMqttTopic,help:"Required when the source is MQTT.",autoComplete:"off"}),o(T,{label:"Outdoor sensor MQTT field",value:i.outdoorSensorMqttField,onInput:_=>v({outdoorSensorMqttField:_}),maxLength:f.boiler.fieldMax,disabled:i.outdoorSensor!=="1",error:a.outdoorSensorMqttField,help:"Required when the source is MQTT.",autoComplete:"off"}),h?o(M,{kind:"success",message:h,onClose:()=>m(null)}):null,d?o(M,{kind:"error",message:d,onClose:()=>p(null)}):null,o("div",{class:"form-actions",children:o(R,{type:"submit",variant:"primary",disabled:c,children:c?"Saving…":"Save boiler settings"})})]})})]}):o(V,{title:"Boiler",children:o("p",{class:"muted",children:"Loading boiler settings…"})})}const Hi="60000",Li="30000";function gt(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function $s(t){return Object.keys(t).length>0}function ys(t,e){const r={},s=gt(t.channel);s===null||!Number.isInteger(s)||s<f.valve.channelMin||s>f.valve.channelMax?r.channel=`Channel must be an integer between ${f.valve.channelMin} and ${f.valve.channelMax}.`:e?.has(s)&&(r.channel=`Channel ${s} is already used by another enabled valve.`);const i=gt(t.fullTravelTime);(i===null||!Number.isInteger(i)||i<f.valve.fullTravelTimeMin||i>f.valve.fullTravelTimeMax)&&(r.fullTravelTime=`Full travel time must be an integer number of milliseconds between ${f.valve.fullTravelTimeMin} and ${f.valve.fullTravelTimeMax}.`);const n=gt(t.windowTime);return(n===null||!Number.isInteger(n)||n<f.valve.windowTimeMin||n>f.valve.windowTimeMax)&&(r.windowTime=`Window time must be an integer number of milliseconds between ${f.valve.windowTimeMin} and ${f.valve.windowTimeMax}.`),r}function vr(t){return{channel:String(t.channel),fullTravelTime:String(t.fullTravelTime),windowTime:String(t.windowTime)}}function Bi({id:t,valve:e,onSaved:r,onNotice:s,takenChannels:i}){const[n,a]=$(!1),[l,c]=$(()=>vr(e)),[u,h]=$({}),[m,d]=$(!1),[p,b]=$(!1),[y,v]=$(null),[g,_]=$(null),[E,N]=$(null),P=A=>c(S=>({...S,...A})),O=()=>{n||(c(vr(e)),h({}),v(null),_(null)),a(A=>!A)},w=async A=>{A.preventDefault();const S=ys(l,i);if(h(S),v(null),_(null),$s(S))return;const L=Number(l.channel),Fe=Number(l.fullTravelTime),He=Number(l.windowTime);d(!0);try{const K=await xt({id:t,enabled:!0,type:f.valve.savableTypes[0],channel:L,fullTravelTime:Fe,windowTime:He,roomID:e.roomID});d(!1),K.ok?(v("Valve saved to flash."),r(t,{...e,enabled:!0,type:f.valve.savableTypes[0],channel:L,fullTravelTime:Fe,windowTime:He,roomID:e.roomID})):_(K.message)}catch(K){d(!1),_(K instanceof Error?K.message:String(K))}},q=async()=>{if(window.confirm("Valve will be unbound on next reboot. Continue?")){N(null),b(!0);try{const S=await xt({id:t,enabled:!1,type:f.valve.savableTypes[0],channel:e.channel,fullTravelTime:e.fullTravelTime,windowTime:e.windowTime,roomID:e.roomID});b(!1),S.ok?(r(t,{...e,enabled:!1,type:f.valve.savableTypes[0]}),s("Valve unbound. Reboot to apply.")):N(S.message)}catch(S){b(!1),N(S instanceof Error?S.message:String(S))}}};return o("li",{class:"valve-row",children:[o("div",{class:"row",children:[o("span",{class:"valve-summary",children:["Valve ",o("span",{class:"mono",children:t}),o("span",{class:"sep","aria-hidden":"true",children:"·"}),"channel ",o("span",{class:"mono",children:e.channel}),o("span",{class:"sep","aria-hidden":"true",children:"·"}),o("span",{class:"mono",children:e.fullTravelTime})," ",o("span",{class:"unit",children:"ms travel"}),o("span",{class:"sep","aria-hidden":"true",children:"·"}),o("span",{class:"mono",children:e.windowTime})," ",o("span",{class:"unit",children:"ms window"})]}),o("div",{class:"form-actions",children:[o(R,{onClick:O,disabled:m||p,children:n?"Close":"Edit"}),o(Wt,{onClick:()=>{q()},disabled:p||m,children:p?"Deleting…":"Delete"})]})]}),E?o(M,{kind:"error",message:E,onClose:()=>N(null)}):null,n?o("form",{onSubmit:w,children:[o(T,{label:"Channel",value:l.channel,onInput:A=>P({channel:A}),type:"number",min:f.valve.channelMin,max:f.valve.channelMax,step:1,inputMode:"numeric",error:u.channel}),o(T,{label:"Full travel time (ms)",value:l.fullTravelTime,onInput:A=>P({fullTravelTime:A}),type:"number",min:f.valve.fullTravelTimeMin,max:f.valve.fullTravelTimeMax,step:1,inputMode:"numeric",error:u.fullTravelTime}),o(T,{label:"Window time (ms)",value:l.windowTime,onInput:A=>P({windowTime:A}),type:"number",min:f.valve.windowTimeMin,max:f.valve.windowTimeMax,step:1,inputMode:"numeric",error:u.windowTime}),y?o(M,{kind:"success",message:y,onClose:()=>v(null)}):null,g?o(M,{kind:"error",message:g,onClose:()=>_(null)}):null,o(Te,{}),o("div",{class:"form-actions",children:o(R,{type:"submit",variant:"primary",disabled:m||p,children:m?"Saving…":`Save valve ${t}`})})]}):null]})}function Wi({slot:t,roomSlot:e,suggestedChannel:r,takenChannels:s,onAdded:i,onCancel:n}){const[a,l]=$(()=>({channel:String(r),fullTravelTime:Hi,windowTime:Li})),[c,u]=$({}),[h,m]=$(!1),[d,p]=$(null),b=v=>l(g=>({...g,...v}));return o("form",{onSubmit:async v=>{v.preventDefault();const g=ys(a,s);if(u(g),p(null),$s(g))return;const _=Number(a.channel),E=Number(a.fullTravelTime),N=Number(a.windowTime);m(!0);try{const P=await xt({id:t,enabled:!0,type:f.valve.savableTypes[0],channel:_,fullTravelTime:E,windowTime:N,roomID:e});m(!1),P.ok?i(t,{enabled:!0,type:f.valve.savableTypes[0],channel:_,fullTravelTime:E,windowTime:N,roomID:e}):p(P.message)}catch(P){m(!1),p(P instanceof Error?P.message:String(P))}},children:[o(M,{kind:"info",message:"Suggested channel and timings are prefilled. Review before adding."}),o(T,{label:"Channel",value:a.channel,onInput:v=>b({channel:v}),type:"number",min:f.valve.channelMin,max:f.valve.channelMax,step:1,inputMode:"numeric",error:c.channel}),o(T,{label:"Full travel time (ms)",value:a.fullTravelTime,onInput:v=>b({fullTravelTime:v}),type:"number",min:f.valve.fullTravelTimeMin,max:f.valve.fullTravelTimeMax,step:1,inputMode:"numeric",error:c.fullTravelTime}),o(T,{label:"Window time (ms)",value:a.windowTime,onInput:v=>b({windowTime:v}),type:"number",min:f.valve.windowTimeMin,max:f.valve.windowTimeMax,step:1,inputMode:"numeric",error:c.windowTime}),d?o(M,{kind:"error",message:d,onClose:()=>p(null)}):null,o(Te,{}),o("div",{class:"form-actions",children:[o(R,{type:"submit",variant:"primary",disabled:h,children:h?"Adding…":`Add valve ${t}`}),o(R,{onClick:n,disabled:h,children:"Cancel"})]})]})}function zi({roomSlot:t,valves:e,valvesError:r,onRetry:s,onSaved:i}){const[n,a]=$(!1),[l,c]=$(null),u=B((b,y)=>{i(b,y),a(!1),c("Valve added to this room. Reboot to apply.")},[i]);if(r)return o("div",{class:"mt valve-section",children:[o("h4",{children:"Valves"}),o(M,{kind:"error",message:r}),o("div",{class:"form-actions",children:o(R,{onClick:s,children:"Retry"})})]});if(!e)return o("div",{class:"mt valve-section",children:[o("h4",{children:"Valves"}),o("p",{class:"muted",children:"Loading valves…"})]});const h=e.map((b,y)=>({valve:b,id:y})).filter(b=>b.valve.enabled&&b.valve.roomID===t),m=e.findIndex(b=>!b.enabled),d=new Set(e.filter(b=>b.enabled).map(b=>b.channel));let p=f.valve.channelMin;for(;p<=f.valve.channelMax&&d.has(p);)p+=1;return p>f.valve.channelMax&&(p=f.valve.channelMin),o("div",{class:"mt valve-section",children:[o("h4",{children:"Valves"}),l?o(M,{kind:"success",message:l,onClose:()=>c(null)}):null,h.length===0?o("p",{class:"muted",children:"No valves bound."}):o("ul",{class:"valve-list",children:h.map(({valve:b,id:y})=>{const v=new Set(e.filter((g,_)=>g.enabled&&_!==y).map(g=>g.channel));return o(Bi,{id:y,valve:b,onSaved:i,onNotice:g=>c(g),takenChannels:v},y)})}),m>=0?n?o(Wi,{slot:m,roomSlot:t,suggestedChannel:p,takenChannels:d,onAdded:u,onCancel:()=>a(!1)}):o("div",{class:"form-actions",children:o(R,{onClick:()=>a(!0),children:"Add valve"})}):o("p",{class:"muted",children:"All 9 valve slots are in use."})]})}function ji(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function ws(t){return Object.keys(t).length>0}function Ss(t){const e={};t.name.trim().length===0?e.name="Name is required.":t.name.length>f.room.nameMax&&(e.name=`At most ${f.room.nameMax} characters.`);const r=[["mqttCommandTopic",t.mqttCommandTopic,"Command topic",f.room.topicMax],["mqttStateTopic",t.mqttStateTopic,"State topic",f.room.topicMax],["mqttTemperatureSensorTopic",t.mqttTemperatureSensorTopic,"Temperature topic",f.room.topicMax]];for(const[i,n,a,l]of r)n.trim().length===0?e[i]=`${a} is required.`:n.length>l&&(e[i]=`At most ${l} characters.`);t.mqttTemperatureSensorField.trim().length>f.room.temperatureFieldMax&&(e.mqttTemperatureSensorField=`At most ${f.room.temperatureFieldMax} characters.`);const s=[["kP",t.kP,"kP"],["kI",t.kI,"kI"],["kD",t.kD,"kD"]];for(const[i,n,a]of s){const l=ji(n);(l===null||l<f.room.pidMin||l>1e6)&&(e[i]=`${a} must be a number greater than or equal to ${f.room.pidMin} and at most 1000000.`)}return e}function $r(t,e){const r=t.name||`Room ${e+1}`,s=t.mqttCommandTopic||`prometey/room${e}/set`,i=t.mqttStateTopic||`prometey/room${e}/state`,n=t.mqttTemperatureSensorTopic||`prometey/room${e}/temperature`,a=t.mqttTemperatureSensorField;return{usedPlaceholders:(t.name||"").trim().length===0||(t.mqttCommandTopic||"").trim().length===0||(t.mqttStateTopic||"").trim().length===0||(t.mqttTemperatureSensorTopic||"").trim().length===0,form:{enabled:t.enabled,name:r,mqttCommandTopic:s,mqttStateTopic:i,mqttTemperatureSensorTopic:n,mqttTemperatureSensorField:a,kP:String(t.kP),kI:String(t.kI),kD:String(t.kD)}}}function Vi(t){return{enabled:!0,name:`Room ${t+1}`,mqttCommandTopic:`prometey/room${t}/set`,mqttStateTopic:`prometey/room${t}/state`,mqttTemperatureSensorTopic:`prometey/room${t}/temperature`,mqttTemperatureSensorField:"",kP:"1",kI:"0.01",kD:"0"}}function Ki(t,e,r){return{id:e,enabled:r,temperatureSensorType:f.room.savableTemperatureSensorTypes[0],name:t.name,mqttCommandTopic:t.mqttCommandTopic,mqttStateTopic:t.mqttStateTopic,mqttTemperatureSensorTopic:t.mqttTemperatureSensorTopic,mqttTemperatureSensorField:t.mqttTemperatureSensorField,kP:t.kP,kI:t.kI,kD:t.kD}}function Qi({slot:t,room:e,valves:r,valvesError:s,onRetryValves:i,onValveSaved:n,onSaved:a,onDeleted:l}){const[c,u]=$(!1),[h,m]=$(()=>$r(e,t).form),[d,p]=$(!1),[b,y]=$({}),[v,g]=$(!1),[_,E]=$(!1),[N,P]=$(null),[O,w]=$(null),[q,A]=$(null),S=C=>m(z=>({...z,...C})),L=()=>{if(!c){const C=$r(e,t);m(C.form),p(C.usedPlaceholders),y({}),P(null),w(null)}u(C=>!C)},Fe=async C=>{C.preventDefault();const z=Ss(h);if(y(z),P(null),w(null),!ws(z)){g(!0);try{const me=await At({id:t,enabled:h.enabled,temperatureSensorType:f.room.savableTemperatureSensorTypes[0],name:h.name,mqttCommandTopic:h.mqttCommandTopic,mqttStateTopic:h.mqttStateTopic,mqttTemperatureSensorTopic:h.mqttTemperatureSensorTopic,mqttTemperatureSensorField:h.mqttTemperatureSensorField,kP:Number(h.kP),kI:Number(h.kI),kD:Number(h.kD)});g(!1),me.ok?(P("Room saved to flash."),p(!1),a(t,{...e,id:t,enabled:h.enabled,name:h.name,mqttCommandTopic:h.mqttCommandTopic,mqttStateTopic:h.mqttStateTopic,mqttTemperatureSensorTopic:h.mqttTemperatureSensorTopic,mqttTemperatureSensorField:h.mqttTemperatureSensorField,kP:Number(h.kP),kI:Number(h.kI),kD:Number(h.kD)})):w(me.message)}catch(me){g(!1),w(me instanceof Error?me.message:String(me))}}},He=async()=>{if(window.confirm(`Delete room "${e.name||`slot ${t}`}"? This sets enabled=false and keeps the stored config; the DEVICE WILL NEED A REBOOT for heating control to stop.`)){A(null),E(!0);try{const z=await At(Ki(e,t,!1));E(!1),z.ok?l(t):A(z.message)}catch(z){E(!1),A(z instanceof Error?z.message:String(z))}}},K=[];e.I!==void 0&&K.push(["PID I (runtime)",String(e.I)]),e.prevError!==void 0&&K.push(["prevError (runtime)",String(e.prevError)]),e.valveOpeningPercent!==void 0&&K.push(["Valve opening",`${e.valveOpeningPercent}%`]),e.prevTime!==void 0&&K.push(["prevTime (raw)",String(e.prevTime)]);const pt=r?r.filter(C=>C.enabled&&C.roomID===t).length:null;return o(V,{class:"room-card",children:[o("div",{class:"card-header",children:[o("h3",{children:[e.name||`Room ${t+1}`," ",o("span",{class:"badge badge-slot",children:["slot ",t]})]}),pt!==null?o("span",{class:"muted",children:[pt," valve",pt===1?"":"s"," bound"]}):null]}),e.id!==t?o(M,{kind:"info",message:`Stored id is ${e.id} but this entry sits in slot ${t}; saving rewrites slot ${t} and normalizes the id.`}):null,o("dl",{class:"kv",children:[e.id!==t?o(W,{children:[o("dt",{children:"Stored id"}),o("dd",{children:e.id})]}):null,o("dt",{children:"Command topic"}),o("dd",{children:e.mqttCommandTopic||o("span",{class:"muted",children:"(empty)"})}),o("dt",{children:"State topic"}),o("dd",{children:e.mqttStateTopic||o("span",{class:"muted",children:"(empty)"})}),o("dt",{children:"Temperature topic"}),o("dd",{children:e.mqttTemperatureSensorTopic||o("span",{class:"muted",children:"(empty)"})}),o("dt",{children:"Temperature field"}),o("dd",{children:e.mqttTemperatureSensorField||o("span",{class:"muted",children:"(empty)"})}),o("dt",{children:"kP / kI / kD"}),o("dd",{children:[e.kP," / ",e.kI," / ",e.kD]}),K.map(([C,z])=>o(W,{children:[o("dt",{children:C}),o("dd",{children:z})]},C))]}),o("div",{class:"form-actions",children:[o(R,{onClick:L,disabled:v||_,children:c?"Close editor":"Edit room"}),o(Wt,{onClick:()=>{He()},disabled:_||v,children:_?"Deleting…":"Delete room"})]}),q?o(M,{kind:"error",message:q,onClose:()=>A(null)}):null,c?o("div",{class:"room-editor",children:[o("form",{onSubmit:Fe,children:[d?o(M,{kind:"info",message:"This room had empty required fields; suggested defaults were prefilled. Review and adjust before saving."}):null,o(T,{label:"Room id",value:t,disabled:!0,help:"Fixed slot index; the device writes to this position."}),o(Ge,{label:"Temperature sensor type",value:f.room.savableTemperatureSensorTypes[0],disabled:!0,options:[{value:"1",label:"MQTT (1)"}],help:"Only MQTT is accepted by the firmware, even for disabled rooms."}),o(T,{label:"Name",value:h.name,onInput:C=>S({name:C}),maxLength:f.room.nameMax,error:b.name,autoComplete:"off"}),o(T,{label:"Command topic",value:h.mqttCommandTopic,onInput:C=>S({mqttCommandTopic:C}),maxLength:f.room.topicMax,error:b.mqttCommandTopic,autoComplete:"off"}),o(T,{label:"State topic",value:h.mqttStateTopic,onInput:C=>S({mqttStateTopic:C}),maxLength:f.room.topicMax,error:b.mqttStateTopic,autoComplete:"off"}),o(T,{label:"Temperature topic",value:h.mqttTemperatureSensorTopic,onInput:C=>S({mqttTemperatureSensorTopic:C}),maxLength:f.room.topicMax,error:b.mqttTemperatureSensorTopic,autoComplete:"off"}),o(T,{label:"Temperature field",value:h.mqttTemperatureSensorField,onInput:C=>S({mqttTemperatureSensorField:C}),placeholder:"value",maxLength:f.room.temperatureFieldMax,error:b.mqttTemperatureSensorField,help:"Optional; leave empty if the message payload is a bare number (parsed as float, not JSON).",autoComplete:"off"}),o(T,{label:"kP",value:h.kP,onInput:C=>S({kP:C}),type:"number",min:f.room.pidMin,step:.1,error:b.kP}),o(T,{label:"kI",value:h.kI,onInput:C=>S({kI:C}),type:"number",min:f.room.pidMin,step:.1,error:b.kI}),o(T,{label:"kD",value:h.kD,onInput:C=>S({kD:C}),type:"number",min:f.room.pidMin,step:.1,error:b.kD}),N?o(M,{kind:"success",message:N,onClose:()=>P(null)}):null,O?o(M,{kind:"error",message:O,onClose:()=>w(null)}):null,o(Te,{}),o("div",{class:"form-actions",children:o(R,{type:"submit",variant:"primary",disabled:v||_,children:v?"Saving…":`Save room ${t}`})})]}),o(zi,{roomSlot:t,valves:r,valvesError:s,onRetry:i,onSaved:n})]}):null]})}function yr({freeSlot:t,onAdded:e,onCancel:r}){const[s,i]=$(()=>Vi(t)),[n,a]=$({}),[l,c]=$(!1),[u,h]=$(null),m=p=>i(b=>({...b,...p}));return o("form",{onSubmit:async p=>{p.preventDefault();const b=Ss(s);if(a(b),h(null),ws(b))return;const y=Number(s.kP),v=Number(s.kI),g=Number(s.kD);c(!0);try{const _=await At({id:t,enabled:!0,temperatureSensorType:f.room.savableTemperatureSensorTypes[0],name:s.name,mqttCommandTopic:s.mqttCommandTopic,mqttStateTopic:s.mqttStateTopic,mqttTemperatureSensorTopic:s.mqttTemperatureSensorTopic,mqttTemperatureSensorField:s.mqttTemperatureSensorField,kP:y,kI:v,kD:g});c(!1),_.ok?e(t,{id:t,enabled:!0,temperatureSensorType:f.room.savableTemperatureSensorTypes[0],name:s.name,mqttCommandTopic:s.mqttCommandTopic,mqttStateTopic:s.mqttStateTopic,mqttTemperatureSensorTopic:s.mqttTemperatureSensorTopic,mqttTemperatureSensorField:s.mqttTemperatureSensorField,kP:y,kI:v,kD:g}):h(_.message)}catch(_){c(!1),h(_ instanceof Error?_.message:String(_))}},children:[o(M,{kind:"info",message:`Suggested defaults for slot ${t} are prefilled. Review and adjust before adding.`}),o(T,{label:"Room id",value:t,disabled:!0,help:"Lowest free slot; the device writes to this position."}),o(T,{label:"Name",value:s.name,onInput:p=>m({name:p}),maxLength:f.room.nameMax,error:n.name,autoComplete:"off"}),o(T,{label:"Command topic",value:s.mqttCommandTopic,onInput:p=>m({mqttCommandTopic:p}),maxLength:f.room.topicMax,error:n.mqttCommandTopic,autoComplete:"off"}),o(T,{label:"State topic",value:s.mqttStateTopic,onInput:p=>m({mqttStateTopic:p}),maxLength:f.room.topicMax,error:n.mqttStateTopic,autoComplete:"off"}),o(T,{label:"Temperature topic",value:s.mqttTemperatureSensorTopic,onInput:p=>m({mqttTemperatureSensorTopic:p}),maxLength:f.room.topicMax,error:n.mqttTemperatureSensorTopic,autoComplete:"off"}),o(T,{label:"Temperature field",value:s.mqttTemperatureSensorField,onInput:p=>m({mqttTemperatureSensorField:p}),placeholder:"value",maxLength:f.room.temperatureFieldMax,error:n.mqttTemperatureSensorField,help:"Optional; leave empty if the message payload is a bare number (parsed as float, not JSON).",autoComplete:"off"}),o(T,{label:"kP",value:s.kP,onInput:p=>m({kP:p}),type:"number",min:f.room.pidMin,step:.1,error:n.kP,help:"Suggested starting value."}),o(T,{label:"kI",value:s.kI,onInput:p=>m({kI:p}),type:"number",min:f.room.pidMin,step:.01,error:n.kI,help:"Suggested starting value."}),o(T,{label:"kD",value:s.kD,onInput:p=>m({kD:p}),type:"number",min:f.room.pidMin,step:.1,error:n.kD,help:"Suggested starting value."}),u?o(M,{kind:"error",message:u,onClose:()=>h(null)}):null,o(Te,{}),o("div",{class:"form-actions",children:[o(R,{type:"submit",variant:"primary",disabled:l,children:l?"Adding…":`Add room ${t}`}),o(R,{onClick:r,disabled:l,children:"Cancel"})]})]})}function Ji(){const[t,e]=$(null),[r,s]=$(!1),[i,n]=$(null),[a,l]=$(null),[c,u]=$(null),[h,m]=$(!1),[d,p]=$(null),b=B(async()=>{n(null);const w=await oi();w.ok?Array.isArray(w.data.rooms)?e(w.data.rooms):n("Device returned an unexpected rooms payload."):n(w.message),s(!0)},[]),y=B(async()=>{u(null);const w=await ai();w.ok?Array.isArray(w.data.valves)?l(w.data.valves):u("Device returned an unexpected valves payload."):u(w.message)},[]);ee(()=>{b(),y()},[b,y]);const v=B((w,q)=>{e(A=>A&&A.map((S,L)=>L===w?q:S))},[]),g=B((w,q)=>{l(A=>A&&A.map((S,L)=>L===w?q:S))},[]),_=B((w,q)=>{e(A=>A&&A.map((S,L)=>L===w?q:S)),m(!1),p("Room added. Reboot to apply.")},[]),E=B(w=>{e(q=>q&&q.map((A,S)=>S===w?{...A,id:w,enabled:!1}:A)),p("Room removed from heating. Reboot to apply.")},[]);if(!r)return o(V,{title:"Rooms",children:o("p",{class:"muted",children:"Loading rooms…"})});const N=(t??[]).map((w,q)=>({room:w,slot:q})).filter(w=>w.room.enabled),P=t?t.findIndex(w=>!w.enabled):-1,O=P>=0?o(V,{title:"Add room",children:h?o(yr,{freeSlot:P,onAdded:_,onCancel:()=>m(!1)},P):o("div",{class:"form-actions",children:o(R,{variant:"primary",onClick:()=>m(!0),children:"Add room"})})}):o(V,{title:"Add room",children:o("p",{class:"muted",children:"All 8 room slots are in use. Disable a room before adding another."})});return o("div",{class:"stack",children:i?o(V,{title:"Rooms",children:[o(M,{kind:"error",message:i}),o("div",{class:"form-actions",children:o(R,{onClick:()=>{b()},children:"Retry"})})]}):t?o(W,{children:[d?o(M,{kind:"info",message:d,onClose:()=>p(null)}):null,N.length===0?o(V,{title:"Rooms",children:h&&P>=0?o(yr,{freeSlot:P,onAdded:_,onCancel:()=>m(!1)},P):o(W,{children:[o("p",{class:"muted",children:"No rooms are enabled yet. Add a room to start controlling heating."}),P>=0?o("div",{class:"form-actions",children:o(R,{variant:"primary",onClick:()=>m(!0),children:"Add room"})}):o("p",{class:"muted",children:"All 8 room slots are in use. Disable a room before adding another."})]})}):o(W,{children:[N.map(({room:w,slot:q})=>o(Qi,{slot:q,room:w,valves:a,valvesError:c,onRetryValves:()=>{y()},onValveSaved:g,onSaved:v,onDeleted:E},q)),O]})]}):null})}const Gi="Download a zip of everything the device has stored: config.bin + boiler state + room states (8). It contains your Wi-Fi and MQTT credentials in plaintext, so keep the archive somewhere safe. Download the FULL BACKUP zip before uploading the web UI: filesystem uploads (pio run -e kc868a16 -t uploadfs) ERASE LittleFS, so /config.bin, /boiler.bin and every /room_*.bin are gone.",Yi="Download config.bin only. It contains your Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.",Zi="Uploading this archive REPLACES config.bin, boiler state and room states on the device AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?",Xi="Uploading REPLACES /config.bin on the device AND REBOOTS IT IMMEDIATELY. Unsaved in-RAM settings will be lost. The device will be offline 20-60 seconds. Continue?";function en(){const t=Ot(null);return ee(()=>{const e=document.createElement("edc-config-backup-page");return e.setAttribute("device-name","Prometey"),e.setAttribute("archive-file-name","prometey-config.zip"),e.setAttribute("zip-notes",Gi),e.setAttribute("bin-notes",Yi),e.setAttribute("zip-confirm-text",Zi),e.setAttribute("bin-confirm-text",Xi),t.current?.append(e),()=>e.remove()},[]),o("div",{ref:t})}function tn(){const t=Ot(null);return ee(()=>{const e=document.createElement("edn-network-page");return t.current?.append(e),()=>e.remove()},[]),o("div",{ref:t})}const rn=[{id:"status",label:"Status"},{id:"connections",label:"MQTT"},{id:"network",label:"Network"},{id:"boiler",label:"Boiler"},{id:"rooms",label:"Rooms"},{id:"backup",label:"Backup"}];function sn(t){switch(t){case"status":return o($i,{});case"connections":return o(Ai,{});case"network":return o(tn,{});case"boiler":return o(Fi,{});case"rooms":return o(Ji,{});case"backup":return o(en,{})}}function nn(){const[t,e]=$("status");return o(W,{children:[o("header",{class:"app-header",children:[o("div",{class:"brand",children:[o("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:[o("path",{fill:"currentColor",d:"M12 23c4.4 0 7.5-2.7 7.5-6.7 0-2.3-1-4.3-2.3-6.1-.8 1.6-1.8 2.6-2.9 3.3.4-1.4.2-3.1-.7-5C12.7 6.1 11.3 4.3 10.4 2c-.3 2.3-1.4 4-2.7 5.5C6.4 9.1 4.5 11 4.5 15c0 4 3.1 8 7.5 8z"}),o("path",{fill:"currentColor",opacity:".45",d:"M12 21.2c-1.6 0-2.8-1.1-2.8-2.8 0-1.3.7-2.1 1.5-3 .3.7.8 1.1 1.4 1.4-.2-1.2.1-2.4 1-3.5.9 1.2 1.4 2.6 1.4 4 0 2.3-1.4 3.9-2.5 3.9z"})]}),o("h1",{children:"Prometey"})]}),o("span",{class:"hint",children:"offline device panel"})]}),o(ri,{tabs:rn,active:t,onSelect:e}),o("main",{class:"tab-content",id:`panel-${t}`,role:"tabpanel","aria-labelledby":`tab-${t}`,children:sn(t)})]})}function on(t){if(t&&typeof t=="object"&&"error"in t){let e=t.error;if(typeof e=="string"&&e.length>0)return e}}function Ts(t={}){let e=t.baseUrl??"",r=t.headers??{};async function s(i,n){let a;try{a=await fetch(`${e}${i}`,{...n,headers:{Accept:"application/json",...n?.body===void 0?{}:{"Content-Type":"application/json"},...r}})}catch(h){return n?.signal?.aborted===!0||typeof h=="object"&&h&&h.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let l=await a.text().catch(()=>""),c,u=!1;if(l.length>0)try{c=JSON.parse(l),u=!0}catch{u=!1}if(!a.ok){let h=on(c);return{ok:!1,status:a.status,message:h??`Request failed with HTTP ${a.status}.`}}return u?{ok:!0,data:c}:{ok:!1,status:a.status,message:`Unexpected response from server (HTTP ${a.status}).`}}return{getSettings(i){return s("/api/network/settings",{signal:i})},saveSettings(i,n){return s("/api/network/settings",{method:"POST",body:JSON.stringify(i),signal:n})},getStatus(i){return s("/api/network/status",{signal:i})},wifiList(i){return s("/api/wifi/list",{signal:i})}}}var Ye=globalThis,zt=Ye.ShadowRoot&&(Ye.ShadyCSS===void 0||Ye.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jt=Symbol(),wr=new WeakMap,ks=class{constructor(e,r,s){if(this._$cssResult$=!0,s!==jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(zt&&e===void 0){let s=r!==void 0&&r.length===1;s&&(e=wr.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&wr.set(r,e))}return e}toString(){return this.cssText}},an=t=>new ks(typeof t=="string"?t:t+"",void 0,jt),Vt=(t,...e)=>new ks(t.length===1?t[0]:e.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]),t,jt),ln=(t,e)=>{if(zt)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),i=Ye.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,t.appendChild(s)}},Sr=zt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return an(r)})(t):t,{is:dn,defineProperty:cn,getOwnPropertyDescriptor:un,getOwnPropertyNames:hn,getOwnPropertySymbols:pn,getPrototypeOf:mn}=Object,dt=globalThis,Tr=dt.trustedTypes,fn=Tr?Tr.emptyScript:"",_n=dt.reactiveElementPolyfillSupport,Ce=(t,e)=>t,Mt={toAttribute(t,e){switch(e){case Boolean:t=t?fn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},As=(t,e)=>!dn(t,e),kr={attribute:!0,type:String,converter:Mt,reflect:!1,useDefault:!1,hasChanged:As};Symbol.metadata??=Symbol("metadata"),dt.litPropertyMetadata??=new WeakMap;var _e=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=kr){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,r);i!==void 0&&cn(this.prototype,e,i)}}static getPropertyDescriptor(e,r,s){let{get:i,set:n}=un(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get:i,set(a){let l=i?.call(this);n?.call(this,a),this.requestUpdate(e,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??kr}static _$Ei(){if(this.hasOwnProperty(Ce("elementProperties")))return;let e=mn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ce("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ce("properties"))){let r=this.properties,s=[...hn(r),...pn(r)];for(let i of s)this.createProperty(i,r[i])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[s,i]of r)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[r,s]of this.elementProperties){let i=this._$Eu(r,s);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)r.unshift(Sr(i))}else e!==void 0&&r.push(Sr(e));return r}static _$Eu(e,r){let s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let s of r.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ln(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,s){this._$AK(e,s)}_$ET(e,r){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute===void 0?Mt:s.converter).toAttribute(r,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,r){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Mt:n.converter;this._$Em=i;let l=a.fromAttribute(r,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,r,s,i=!1,n){if(e!==void 0){let a=this.constructor;if(i===!1&&(n=this[e]),s??=a.getPropertyOptions(e),!((s.hasChanged??As)(n,r)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,s))))return;this.C(e,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:s,reflect:i,wrapped:n},a){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??r??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(r=void 0),this._$AL.set(e,r)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:a}=n,l=this[i];a!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(r)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};_e.elementStyles=[],_e.shadowRootOptions={mode:"open"},_e[Ce("elementProperties")]=new Map,_e[Ce("finalized")]=new Map,_n?.({ReactiveElement:_e}),(dt.reactiveElementVersions??=[]).push("2.1.2");var Kt=globalThis,Ar=t=>t,rt=Kt.trustedTypes,xr=rt?rt.createPolicy("lit-html",{createHTML:t=>t}):void 0,xs="$lit$",Z=`lit$${Math.random().toFixed(9).slice(2)}$`,Ps="?"+Z,bn=`<${Ps}>`,ue=document,qe=()=>ue.createComment(""),Re=t=>t===null||typeof t!="object"&&typeof t!="function",Qt=Array.isArray,gn=t=>Qt(t)||typeof t?.[Symbol.iterator]=="function",vt=`[ 	
\f\r]`,ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pr=/-->/g,Er=/>/g,te=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mr=/'/g,Cr=/"/g,Es=/^(?:script|style|textarea|title)$/i,k=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),$e=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Ir=new WeakMap,se=ue.createTreeWalker(ue,129);function Ms(t,e){if(!Qt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return xr===void 0?e:xr.createHTML(e)}var vn=(t,e)=>{let r=t.length-1,s=[],i,n=e===2?"<svg>":e===3?"<math>":"",a=ke;for(let l=0;l<r;l++){let c=t[l],u,h,m=-1,d=0;for(;d<c.length&&(a.lastIndex=d,h=a.exec(c),h!==null);)d=a.lastIndex,a===ke?h[1]==="!--"?a=Pr:h[1]===void 0?h[2]===void 0?h[3]!==void 0&&(a=te):(Es.test(h[2])&&(i=RegExp("</"+h[2],"g")),a=te):a=Er:a===te?h[0]===">"?(a=i??ke,m=-1):h[1]===void 0?m=-2:(m=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?te:h[3]==='"'?Cr:Mr):a===Cr||a===Mr?a=te:a===Pr||a===Er?a=ke:(a=te,i=void 0);let p=a===te&&t[l+1].startsWith("/>")?" ":"";n+=a===ke?c+bn:m>=0?(s.push(u),c.slice(0,m)+xs+c.slice(m)+Z+p):c+Z+(m===-2?l:p)}return[Ms(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},Ct=class Cs{constructor({strings:e,_$litType$:r},s){let i;this.parts=[];let n=0,a=0,l=e.length-1,c=this.parts,[u,h]=vn(e,r);if(this.el=Cs.createElement(u,s),se.currentNode=this.el.content,r===2||r===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(i=se.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let m of i.getAttributeNames())if(m.endsWith(xs)){let d=h[a++],p=i.getAttribute(m).split(Z),b=/([.?@])?(.*)/.exec(d);c.push({type:1,index:n,name:b[2],strings:p,ctor:b[1]==="."?yn:b[1]==="?"?wn:b[1]==="@"?Sn:ct}),i.removeAttribute(m)}else m.startsWith(Z)&&(c.push({type:6,index:n}),i.removeAttribute(m));if(Es.test(i.tagName)){let m=i.textContent.split(Z),d=m.length-1;if(d>0){i.textContent=rt?rt.emptyScript:"";for(let p=0;p<d;p++)i.append(m[p],qe()),se.nextNode(),c.push({type:2,index:++n});i.append(m[d],qe())}}}else if(i.nodeType===8)if(i.data===Ps)c.push({type:2,index:n});else{let m=-1;for(;(m=i.data.indexOf(Z,m+1))!==-1;)c.push({type:7,index:n}),m+=Z.length-1}n++}}static createElement(e,r){let s=ue.createElement("template");return s.innerHTML=e,s}};function ye(t,e,r=t,s){if(e===$e)return e;let i=s===void 0?r._$Cl:r._$Co?.[s],n=Re(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,s)),s===void 0?r._$Cl=i:(r._$Co??=[])[s]=i),i!==void 0&&(e=ye(t,i._$AS(t,e.values),i,s)),e}var $n=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:s}=this._$AD,i=(e?.creationScope??ue).importNode(r,!0);se.currentNode=i;let n=se.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new Jt(n,n.nextSibling,this,e):c.type===1?u=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(u=new Tn(n,this,e)),this._$AV.push(u),c=s[++l]}a!==c?.index&&(n=se.nextNode(),a++)}return se.currentNode=ue,i}p(e){let r=0;for(let s of this._$AV)s!==void 0&&(s.strings===void 0?s._$AI(e[r]):(s._$AI(e,s,r),r+=s.strings.length-2)),r++}},Jt=class Is{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,s,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=ye(this,e,r),Re(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==$e&&this._(e):e._$litType$===void 0?e.nodeType===void 0?gn(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&Re(this._$AH)?this._$AA.nextSibling.data=e:this.T(ue.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Ct.createElement(Ms(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(r);else{let n=new $n(i,this),a=n.u(this.options);n.p(r),this.T(a),this._$AH=n}}_$AC(e){let r=Ir.get(e.strings);return r===void 0&&Ir.set(e.strings,r=new Ct(e)),r}k(e){Qt(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,i=0;for(let n of e)i===r.length?r.push(s=new Is(this.O(qe()),this.O(qe()),this,this.options)):s=r[i],s._$AI(n),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){let s=Ar(e).nextSibling;Ar(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,s,i,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=x}_$AI(e,r=this,s,i){let n=this.strings,a=!1;if(n===void 0)e=ye(this,e,r,0),a=!Re(e)||e!==this._$AH&&e!==$e,a&&(this._$AH=e);else{let l=e,c,u;for(e=n[0],c=0;c<n.length-1;c++)u=ye(this,l[s+c],r,c),u===$e&&(u=this._$AH[c]),a||=!Re(u)||u!==this._$AH[c],u===x?e=x:e!==x&&(e+=(u??"")+n[c+1]),this._$AH[c]=u}a&&!i&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},yn=class extends ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},wn=class extends ct{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},Sn=class extends ct{constructor(e,r,s,i,n){super(e,r,s,i,n),this.type=5}_$AI(e,r=this){if((e=ye(this,e,r,0)??x)===$e)return;let s=this._$AH,i=e===x&&s!==x||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==x&&(s===x||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Tn=class{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){ye(this,e)}},kn=Kt.litHtmlPolyfillSupport;kn?.(Ct,Jt),(Kt.litHtmlVersions??=[]).push("3.3.3");var An=(t,e,r)=>{let s=r?.renderBefore??e,i=s._$litPart$;if(i===void 0){let n=r?.renderBefore??null;s._$litPart$=i=new Jt(e.insertBefore(qe(),n),n,void 0,r??{})}return i._$AI(t),i},Gt=globalThis,ne=class extends _e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=An(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $e}};ne._$litElement$=!0,ne.finalized=!0,Gt.litElementHydrateSupport?.({LitElement:ne});var xn=Gt.litElementPolyfillSupport;xn?.({LitElement:ne}),(Gt.litElementVersions??=[]).push("4.2.2");var Pn={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function En(t){return t===void 0||Number.isNaN(t)?"Unknown":t>=-55?"Excellent":t>=-67?"Good":t>=-75?"Fair":"Weak"}function Mn(t){return t===1?"Full":t===0?"Half":`Unknown (${t})`}function Cn(t){let e=r=>String(r).padStart(2,"0");return`${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`}var oe,In=(oe=class extends ne{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(e){e.has("pollIntervalMs")&&this.startPolling();let r=e.get("baseUrl");e.has("baseUrl")&&r!==void 0&&r!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let e=this.status;return k`
      <div class="card">
        <header class="head">
          ${e?k`<span class="badge badge-${e.mode}">${Pn[e.mode]}</span>`:k`<span class="badge badge-unknown">Unknown</span>`}
          ${e?k`<span class="state ${e.connected?"state-up":"state-down"}">
                ${e.connected?"Connected":"Disconnected"}
              </span>`:x}
          ${this.loading?k`<span class="muted loading">Refreshing…</span>`:x}
        </header>

        ${e?.fallbackAP?k`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:x}
        ${this.errorMessage?k`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:x}
        ${e?this.renderSections(e):k`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?k`Updated ${Cn(this.lastUpdated)}`:k`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(e){switch(e.mode){case"wifi":return this.renderWifi(e);case"wifi_ap":return this.renderAp(e);case"ethernet":return this.renderEthernet(e)}}renderWifi(e){return k`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",e.ssid)}
          ${this.row("Signal",e.rssi===void 0?void 0:`${e.rssi} dBm (${En(e.rssi)})`)}
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
          ${this.row("Duplex",r===void 0?void 0:Mn(r.duplex))}
        </dl>
      </section>
    `}row(e,r){return r===void 0||r===""?x:k`<dt>${e}</dt>
          <dd>${r}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=Ts({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let e=++this.refreshSeq;this.loading=!0;let r=await this.ensureClient().getStatus();if(e===this.refreshSeq){if(this.loading=!1,r.ok){this.status=r.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=r.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:r.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let e=Number(this.pollIntervalMs);!Number.isFinite(e)||e<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},e))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},oe.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},oe.styles=Vt`
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
  `,oe);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",In);var ze=32,Ae=64,$t=8,Dn=5e3,Nn=new TextEncoder;function je(t){return Nn.encode(t).length}function Dr(t){return t.isAPMode?"ap":"station"}var ae,qn=(ae=class extends ne{constructor(...e){super(...e),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=r=>{this.draftWifiSSID=r.target.value},this.handleWifiPasswordInput=r=>{this.draftWifiPassword=r.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=r=>{this.draftApSSID=r.target.value},this.handleApPasswordInput=r=>{this.draftApPassword=r.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=r=>{this.draftApHasPassword=r.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=r=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=r,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=r=>{r.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(e){let r=e.get("baseUrl");e.has("baseUrl")&&r!==void 0&&r!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let e=this.settings;return k`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?k`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:x}
        ${this.successMessage?k`<div class="banner banner-success" role="status">${this.successMessage}</div>`:x}
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
          ${this.dirty?k`<span class="muted">Unsaved changes</span>`:x}
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
        ${e.hasWifiPassword?k`<p class="hint">Password saved •••• (leave blank to keep)</p>`:x}
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
              ${e.hasWifiAPPassword?k`<p class="hint">Password saved •••• (leave blank to keep)</p>`:x}
              ${this.renderPasswordClearWarning("wifiAPPassword")}
              ${this.renderFieldError("wifiAPPassword")}
            `:x}
      </section>
    `}renderScan(){return k`
      <section class="group">
        <div class="scan-head">
          <h2>Wi-Fi scan</h2>
          <button type="button" @click=${this.handleScan} ?disabled=${this.scanning}>
            ${this.scanning?"Scanning…":"Scan"}
          </button>
        </div>
        ${this.scanError?k`<div class="banner banner-error" role="alert">${this.scanError}</div>`:x}
        ${this.scanResults.length>0?k`<ul class="networks">
              ${this.scanResults.map(e=>this.renderNetwork(e))}
            </ul>`:x}
      </section>
    `}renderNetwork(e){return k`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(e.ssid)}>
          <span class="ssid">${e.ssid}</span>
          <span class="meta">
            ${e.encrypted?k`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:x}
            ${e.rssi} dBm · Ch ${e.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(e){let r=this.fieldErrors[e];return r?k`<p class="field-error" role="alert">${r}</p>`:x}renderPasswordClearWarning(e){return(e==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?k`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:x}get dirty(){let e=this.settings;return e?this.draftMode!==Dr(e)||this.draftWifiSSID!==e.wifiSSID||this.draftApSSID!==e.wifiAPSSID||this.draftApHasPassword!==e.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=Ts({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let e=++this.loadToken;this.loading=!0;let r=await this.ensureClient().getSettings();if(e!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,r.ok){this.applyServerSettings(r.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=r.message,this.emitError(r.message)}applyServerSettings(e){this.settings=e,this.settingsBaseUrl=this.baseUrl,this.draftMode=Dr(e),this.draftWifiSSID=e.wifiSSID,this.draftApSSID=e.wifiAPSSID,this.draftApHasPassword=e.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let e=this.settings,r={};if(!e)return r;let s=this.draftMode==="ap";if(je(this.draftWifiSSID)>ze&&(r.wifiSSID=`Wi-Fi name must be ${ze} characters or fewer.`),je(this.draftApSSID)>ze&&(r.wifiAPSSID=`Access point name must be ${ze} characters or fewer.`),s?this.draftApSSID.length===0&&(r.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(r.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&je(this.draftWifiPassword)>Ae&&(r.wifiPassword=`Wi-Fi password must be ${Ae} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let i=je(this.draftApPassword);(i<$t||i>Ae)&&(r.wifiAPPassword=`Access point password must be ${$t}–${Ae} characters.`)}else e.hasWifiAPPassword||(r.wifiAPPassword=`Enter an access point password (${$t}–${Ae} characters).`);return r}buildPatch(){let e=this.settings,r={};if(!e)return r;let s=this.draftMode==="ap";return s!==e.isAPMode&&(r.isAPMode=s),this.draftWifiSSID!==e.wifiSSID&&(r.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(r.wifiPassword=this.draftWifiPassword),this.draftApSSID!==e.wifiAPSSID&&(r.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==e.wifiAPHasPassword&&(r.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(r.wifiAPPassword=this.draftApPassword),r}async handleSave(){if(this.submitting||!this.settings)return;let e=this.validate();if(this.fieldErrors=e,Object.keys(e).length>0)return;let r=this.buildPatch();if(Object.keys(r).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let s=await this.ensureClient().saveSettings(r);if(this.submitting=!1,s.ok){this.applyServerSettings(s.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:s.data,bubbles:!0,composed:!0}));return}let i=s.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":s.message;this.errorMessage=i,this.emitError(i)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let e=new AbortController;this.scanController=e;let r,s=new Promise(n=>{r=setTimeout(()=>{e.abort(),n({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},Dn)}),i=await Promise.race([this.ensureClient().wifiList(e.signal),s]);if(r!==void 0&&clearTimeout(r),this.scanController===e&&(this.scanController=void 0),this.scanning=!1,i.ok){this.scanResults=[...i.data.networks].sort((n,a)=>a.rssi-n.rssi);return}i.message!=="Request aborted."&&(this.scanError=i.message,this.emitError(i.message))}emitError(e){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:e},bubbles:!0,composed:!0}))}setMode(e){this.draftMode!==e&&(this.draftMode=e,this.fieldErrors={})}},ae.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},ae.styles=Vt`
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
  `,ae);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",qn);var Rn=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],le,Un=(le=class extends ne{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return k`
      <div class="tabs" role="tablist" aria-label="Network">
        ${Rn.map(e=>k`
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
    `}selectTab(e){this.activeTab!==e&&(this.activeTab=e,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:e},bubbles:!0,composed:!0})))}},le.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},le.styles=Vt`
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
  `,le);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",Un);var Ds="Network request failed. Check the device connection and try again.",On={};function Fn(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function Hn(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function Ns(t,e){return Hn(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:Ds}}async function qs(t,e){let r=e;try{let s=await t.text();if(s.length>0)try{r=Fn(JSON.parse(s))??r}catch{}}catch{}return{ok:!1,status:t.status,message:r}}async function Nr(t,e,r,s,i,n){let a;try{a=await fetch(t,{headers:{Accept:e,...i},signal:n})}catch(c){return Ns(c,n)}if(!a.ok)return qs(a,a.status===404?s:`Request failed with HTTP ${a.status}.`);let l;try{l=new Uint8Array(await a.arrayBuffer())}catch{return{ok:!1,status:a.status,message:Ds}}return l.byteLength===0?{ok:!1,status:a.status,message:r}:{ok:!0,data:l}}async function qr(t,e,r,s,i){if(e.byteLength===0)return{ok:!1,message:r};let n=new ArrayBuffer(e.byteLength);new Uint8Array(n).set(e);let a;try{a=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/octet-stream",...s},body:n,signal:i})}catch(l){return Ns(l,i)}return a.ok?(await a.text().catch(()=>""),{ok:!0,data:On}):qs(a,`Upload failed with HTTP ${a.status}.`)}function Ln(t={}){let e=t.baseUrl??"",r=t.backupPath??"/api/config/backup",s=t.configPath??"/api/config",i=t.headers??{},n=`${e}${r}`,a=`${e}${s}`;return{downloadBackup(l){return Nr(n,"application/zip","Device returned an empty archive.","The device has no config files yet.",i,l)},downloadConfig(l){return Nr(a,"application/octet-stream","Device returned an empty config file.","The device has no saved config yet (no config file on flash).",i,l)},uploadBackup(l,c){return qr(n,l,"Cannot upload an empty archive.",i,c)},uploadConfig(l,c){return qr(a,l,"Cannot upload an empty config file.",i,c)}}}var Ze=globalThis,Yt=Ze.ShadowRoot&&(Ze.ShadyCSS===void 0||Ze.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zt=Symbol(),Rr=new WeakMap,Rs=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Zt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Yt&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=Rr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Rr.set(e,t))}return t}toString(){return this.cssText}},Bn=t=>new Rs(typeof t=="string"?t:t+"",void 0,Zt),Wn=(t,...e)=>new Rs(t.length===1?t[0]:e.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]),t,Zt),zn=(t,e)=>{if(Yt)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),i=Ze.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,t.appendChild(s)}},Ur=Yt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return Bn(r)})(t):t,{is:jn,defineProperty:Vn,getOwnPropertyDescriptor:Kn,getOwnPropertyNames:Qn,getOwnPropertySymbols:Jn,getPrototypeOf:Gn}=Object,ut=globalThis,Or=ut.trustedTypes,Yn=Or?Or.emptyScript:"",Zn=ut.reactiveElementPolyfillSupport,Ie=(t,e)=>t,It={toAttribute(t,e){switch(e){case Boolean:t=t?Yn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Us=(t,e)=>!jn(t,e),Fr={attribute:!0,type:String,converter:It,reflect:!1,useDefault:!1,hasChanged:Us};Symbol.metadata??=Symbol("metadata"),ut.litPropertyMetadata??=new WeakMap;var be=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Fr){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&Vn(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){let{get:s,set:i}=Kn(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let a=s?.call(this);i?.call(this,n),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Fr}static _$Ei(){if(this.hasOwnProperty(Ie("elementProperties")))return;let t=Gn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ie("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ie("properties"))){let e=this.properties,r=[...Qn(e),...Jn(e)];for(let s of r)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let s of r)e.unshift(Ur(s))}else t!==void 0&&e.push(Ur(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zn(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute===void 0?It:r.converter).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){let r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let i=r.getPropertyOptions(s),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute===void 0?It:i.converter;this._$Em=s;let a=n.fromAttribute(e,i.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,r,s=!1,i){if(t!==void 0){let n=this.constructor;if(s===!1&&(i=this[t]),r??=n.getPropertyOptions(t),!((r.hasChanged??Us)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:i},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),i!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[s,i]of r){let{wrapped:n}=i,a=this[s];n!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,i,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};be.elementStyles=[],be.shadowRootOptions={mode:"open"},be[Ie("elementProperties")]=new Map,be[Ie("finalized")]=new Map,Zn?.({ReactiveElement:be}),(ut.reactiveElementVersions??=[]).push("2.1.2");var Xt=globalThis,Hr=t=>t,st=Xt.trustedTypes,Lr=st?st.createPolicy("lit-html",{createHTML:t=>t}):void 0,Os="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,Fs="?"+X,Xn=`<${Fs}>`,he=document,Ue=()=>he.createComment(""),Oe=t=>t===null||typeof t!="object"&&typeof t!="function",er=Array.isArray,eo=t=>er(t)||typeof t?.[Symbol.iterator]=="function",yt=`[ 	
\f\r]`,xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Br=/-->/g,Wr=/>/g,re=RegExp(`>|${yt}(?:([^\\s"'>=/]+)(${yt}*=${yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zr=/'/g,jr=/"/g,Hs=/^(?:script|style|textarea|title)$/i,Q=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),we=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),Vr=new WeakMap,ie=he.createTreeWalker(he,129);function Ls(t,e){if(!er(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Lr===void 0?e:Lr.createHTML(e)}var to=(t,e)=>{let r=t.length-1,s=[],i,n=e===2?"<svg>":e===3?"<math>":"",a=xe;for(let l=0;l<r;l++){let c=t[l],u,h,m=-1,d=0;for(;d<c.length&&(a.lastIndex=d,h=a.exec(c),h!==null);)d=a.lastIndex,a===xe?h[1]==="!--"?a=Br:h[1]===void 0?h[2]===void 0?h[3]!==void 0&&(a=re):(Hs.test(h[2])&&(i=RegExp("</"+h[2],"g")),a=re):a=Wr:a===re?h[0]===">"?(a=i??xe,m=-1):h[1]===void 0?m=-2:(m=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?re:h[3]==='"'?jr:zr):a===jr||a===zr?a=re:a===Br||a===Wr?a=xe:(a=re,i=void 0);let p=a===re&&t[l+1].startsWith("/>")?" ":"";n+=a===xe?c+Xn:m>=0?(s.push(u),c.slice(0,m)+Os+c.slice(m)+X+p):c+X+(m===-2?l:p)}return[Ls(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},Dt=class Bs{constructor({strings:e,_$litType$:r},s){let i;this.parts=[];let n=0,a=0,l=e.length-1,c=this.parts,[u,h]=to(e,r);if(this.el=Bs.createElement(u,s),ie.currentNode=this.el.content,r===2||r===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(i=ie.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let m of i.getAttributeNames())if(m.endsWith(Os)){let d=h[a++],p=i.getAttribute(m).split(X),b=/([.?@])?(.*)/.exec(d);c.push({type:1,index:n,name:b[2],strings:p,ctor:b[1]==="."?so:b[1]==="?"?io:b[1]==="@"?no:ht}),i.removeAttribute(m)}else m.startsWith(X)&&(c.push({type:6,index:n}),i.removeAttribute(m));if(Hs.test(i.tagName)){let m=i.textContent.split(X),d=m.length-1;if(d>0){i.textContent=st?st.emptyScript:"";for(let p=0;p<d;p++)i.append(m[p],Ue()),ie.nextNode(),c.push({type:2,index:++n});i.append(m[d],Ue())}}}else if(i.nodeType===8)if(i.data===Fs)c.push({type:2,index:n});else{let m=-1;for(;(m=i.data.indexOf(X,m+1))!==-1;)c.push({type:7,index:n}),m+=X.length-1}n++}}static createElement(e,r){let s=he.createElement("template");return s.innerHTML=e,s}};function Se(t,e,r=t,s){if(e===we)return e;let i=s===void 0?r._$Cl:r._$Co?.[s],n=Oe(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,s)),s===void 0?r._$Cl=i:(r._$Co??=[])[s]=i),i!==void 0&&(e=Se(t,i._$AS(t,e.values),i,s)),e}var ro=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??he).importNode(e,!0);ie.currentNode=s;let i=ie.nextNode(),n=0,a=0,l=r[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new tr(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new oo(i,this,t)),this._$AV.push(c),l=r[++a]}n!==l?.index&&(i=ie.nextNode(),n++)}return ie.currentNode=he,s}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(t[e]):(r._$AI(t,r,e),e+=r.strings.length-2)),e++}},tr=class Ws{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,s,i){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Se(this,e,r),Oe(e)?e===D||e==null||e===""?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==we&&this._(e):e._$litType$===void 0?e.nodeType===void 0?eo(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==D&&Oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(he.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Dt.createElement(Ls(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(r);else{let n=new ro(i,this),a=n.u(this.options);n.p(r),this.T(a),this._$AH=n}}_$AC(e){let r=Vr.get(e.strings);return r===void 0&&Vr.set(e.strings,r=new Dt(e)),r}k(e){er(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,i=0;for(let n of e)i===r.length?r.push(s=new Ws(this.O(Ue()),this.O(Ue()),this,this.options)):s=r[i],s._$AI(n),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){let s=Hr(e).nextSibling;Hr(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ht=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,i){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=D}_$AI(t,e=this,r,s){let i=this.strings,n=!1;if(i===void 0)t=Se(this,t,e,0),n=!Oe(t)||t!==this._$AH&&t!==we,n&&(this._$AH=t);else{let a=t,l,c;for(t=i[0],l=0;l<i.length-1;l++)c=Se(this,a[r+l],e,l),c===we&&(c=this._$AH[l]),n||=!Oe(c)||c!==this._$AH[l],c===D?t=D:t!==D&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}n&&!s&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},so=class extends ht{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}},io=class extends ht{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}},no=class extends ht{constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){if((t=Se(this,t,e,0)??D)===we)return;let r=this._$AH,s=t===D&&r!==D||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==D&&(r===D||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},oo=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Se(this,t)}},ao=Xt.litHtmlPolyfillSupport;ao?.(Dt,tr),(Xt.litHtmlVersions??=[]).push("3.3.3");var lo=(t,e,r)=>{let s=r?.renderBefore??e,i=s._$litPart$;if(i===void 0){let n=r?.renderBefore??null;s._$litPart$=i=new tr(e.insertBefore(Ue(),n),n,void 0,r??{})}return i._$AI(t),i},rr=globalThis,De=class extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=lo(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return we}};De._$litElement$=!0,De.finalized=!0,rr.litElementHydrateSupport?.({LitElement:De});var co=rr.litElementPolyfillSupport;co?.({LitElement:De}),(rr.litElementVersions??=[]).push("4.2.2");var Kr=2e3,uo=12e4,Qr="Unsupported file type. Choose a .zip full backup or a .bin config file.";function wt(t){let e=t.toLowerCase();return e.endsWith(".zip")?"archive":e.endsWith(".bin")?"config":null}function ho(t,e){if(typeof URL.createObjectURL!="function")return;let r=new ArrayBuffer(t.byteLength);new Uint8Array(r).set(t);let s=new Blob([r],{type:"application/octet-stream"}),i=URL.createObjectURL(s),n=document.createElement("a");n.href=i,n.download=e,document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),0)}var de,po=(de=class extends De{constructor(...e){super(...e),this.baseUrl="",this.backupPath="/api/config/backup",this.configPath="/api/config",this.healthPath="/healthcheck/healty",this.deviceName="device",this.archiveFileName="config-backup.zip",this.binFileName="config.bin",this.maxUploadBytes=16384,this.zipNotes="",this.binNotes="",this.zipConfirmText="",this.binConfirmText="",this.downloading=!1,this.downloadNotice=null,this.selectedFile=null,this.fileError=null,this.uploading=!1,this.uploadError=null,this.phase="idle",this._attempts=0}disconnectedCallback(){this.clearPollTimer(),super.disconnectedCallback()}get busy(){return this.uploading||this.phase!=="idle"}get effectiveZipNotes(){return this.zipNotes||`Download a zip of everything stored on the ${this.deviceName}: ${this.binFileName} plus the device's persisted state files. Restoring this archive overwrites the stored config and state files. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveBinNotes(){return this.binNotes||`Download only ${this.binFileName}, the raw stored config. Restoring it replaces just that file. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveZipConfirmText(){return this.zipConfirmText||`Uploading this archive REPLACES ${this.binFileName} and the device's stored state files on the ${this.deviceName} AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?`}get effectiveBinConfirmText(){return this.binConfirmText||`Uploading REPLACES ${this.binFileName} on the ${this.deviceName} AND REBOOTS IT IMMEDIATELY. The device will be offline 20-60 seconds. Continue?`}render(){return Q`
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
            ${this.fileError?Q`<span class="field-error" role="alert">${this.fileError}</span>`:D}
          </label>
          ${this.selectedFile&&!this.fileError?Q`<p class="muted">
                Selected: ${this.selectedFile.name} (${this.selectedFile.size}
                bytes)${wt(this.selectedFile.name)==="archive"?" — full backup (all files)":` — ${this.binFileName} only`}
              </p>`:D}
          ${this.uploadError?Q`<div class="banner banner-error" role="alert">
                ${this.uploadError}
              </div>`:D}
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
    `}renderNotice(e){return e?Q`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.message}
    </div>`:D}renderRebootOverlay(){return this.phase==="idle"?D:Q`
      <div
        class="reboot-overlay"
        role="alertdialog"
        aria-modal="true"
        aria-label="Device rebooting"
      >
        <div class="reboot-dialog">
          <h2>Device is rebooting</h2>
          ${this.phase==="rebooting"?Q`
                <p>
                  Waiting for the ${this.deviceName} to come back online. This
                  usually takes 20–60 seconds.
                </p>
                <p class="muted" aria-live="polite">
                  Polling device health…
                </p>
                <div class="spinner" aria-hidden="true"></div>
              `:D}
          ${this.phase==="ready"?Q`
                <div class="banner banner-success" role="status">
                  The ${this.deviceName} is back online.
                </div>
                <div class="form-actions">
                  <button type="button" @click=${()=>this.dismissReboot()}>
                    Dismiss
                  </button>
                </div>
              `:D}
          ${this.phase==="timeout"?Q`
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
              `:D}
        </div>
      </div>
    `}createClient(){return Ln({baseUrl:this.baseUrl,backupPath:this.backupPath,configPath:this.configPath})}async handleDownload(e){if(!(this.downloading||this.phase!=="idle")){this.downloading=!0,this.downloadNotice=null;try{let r=this.createClient(),s=e==="archive"?await r.downloadBackup():await r.downloadConfig();if(!s.ok){this.downloadNotice={kind:"error",message:s.message};return}let i=e==="archive"?this.archiveFileName:this.binFileName;ho(s.data,i),this.downloadNotice={kind:"info",message:e==="archive"?`Full backup downloaded as ${i}.`:`Config downloaded as ${i}.`}}finally{this.downloading=!1}}}handleFileChange(e){let r=e.currentTarget,s=r.files&&r.files[0]?r.files[0]:null;this.selectedFile=s,this.uploadError=null,this.fileError=s?s.size===0?"The selected file is empty.":s.size>this.maxUploadBytes?`This does not look like a ${this.deviceName} backup file (max ${this.maxUploadBytes} bytes).`:wt(s.name)?null:Qr:null}async handleUpload(){if(!this.selectedFile||this.fileError||this.busy)return;let e=wt(this.selectedFile.name);if(!e)this.uploadError=Qr;else if(window.confirm(e==="archive"?this.effectiveZipConfirmText:this.effectiveBinConfirmText)){this.uploading=!0,this.uploadError=null;try{let r;try{r=new Uint8Array(await this.selectedFile.arrayBuffer())}catch{this.uploadError="Could not read the selected backup file.";return}let s=this.createClient(),i=e==="archive"?await s.uploadBackup(r):await s.uploadConfig(r);if(!i.ok){this.uploadError=i.message;return}if(this.clearSelection(),!this.isConnected)return;this.dispatchEvent(new CustomEvent("edc-restore-committed",{detail:{kind:e},bubbles:!0,composed:!0})),this.startReboot()}finally{this.uploading=!1}}}clearSelection(){this.selectedFile=null,this.fileError=null;let e=this.renderRoot.querySelector("#edc-restore-file");e&&(e.value="")}startReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}retryReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}dismissReboot(){this.clearPollTimer(),this.phase="idle"}schedulePoll(){this.clearPollTimer(),this._pollTimer=window.setTimeout(()=>{this._pollTimer=void 0,this.pollHealth()},Kr)}clearPollTimer(){this._pollTimer!==void 0&&(window.clearTimeout(this._pollTimer),this._pollTimer=void 0)}async pollHealth(){if(this.phase!=="rebooting")return;let e=!1;try{let r=await fetch(`${this.baseUrl}${this.healthPath}`,{headers:{Accept:"application/json"}});if(r.ok){let s=await r.json();e=!!s&&typeof s=="object"&&s.healty===!0}}catch{e=!1}this.isConnected&&this.phase==="rebooting"&&(e?this.phase="ready":(this._attempts+=1,this._attempts*Kr>=uo?this.phase="timeout":this.schedulePoll()))}},de.properties={baseUrl:{type:String,attribute:"base-url"},backupPath:{type:String,attribute:"backup-path"},configPath:{type:String,attribute:"config-path"},healthPath:{type:String,attribute:"health-path"},deviceName:{type:String,attribute:"device-name"},archiveFileName:{type:String,attribute:"archive-file-name"},binFileName:{type:String,attribute:"bin-file-name"},maxUploadBytes:{type:Number,attribute:"max-upload-bytes"},zipNotes:{type:String,attribute:"zip-notes"},binNotes:{type:String,attribute:"bin-notes"},zipConfirmText:{type:String,attribute:"zip-confirm-text"},binConfirmText:{type:String,attribute:"bin-confirm-text"},downloading:{state:!0},downloadNotice:{state:!0},selectedFile:{state:!0},fileError:{state:!0},uploading:{state:!0},uploadError:{state:!0},phase:{state:!0}},de.styles=Wn`
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
  `,de);typeof customElements<"u"&&!customElements.get("edc-config-backup-page")&&customElements.define("edc-config-backup-page",po);const Jr=document.getElementById("app");Jr&&Ys(o(nn,{}),Jr);
