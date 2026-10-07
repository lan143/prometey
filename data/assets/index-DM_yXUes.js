(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();var Be,D,ur,J,It,hr,pr,tt,Ie,be,mr,gt,dt,ct,Fe={},Oe=[],Qr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,We=Array.isArray;function Q(e,t){for(var r in t)e[r]=t[r];return e}function bt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Jr(e,t,r){var n,s,o,a={};for(o in t)o=="key"?n=t[o]:o=="ref"?s=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?Be.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return qe(e,a,n,s,null)}function qe(e,t,r,n,s){var o={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++ur,__i:-1,__u:0};return s==null&&D.vnode!=null&&D.vnode(o),o}function B(e){return e.children}function De(e,t){this.props=e,this.context=t}function se(e,t){if(t==null)return e.__?se(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?se(e):null}function Gr(e){if(e.__P&&e.__d){var t=e.__v,r=t.__e,n=[],s=[],o=Q({},t);o.__v=t.__v+1,D.vnode&&D.vnode(o),wt(e.__P,o,t,e.__n,e.__P.namespaceURI,32&t.__u?[r]:null,n,r??se(t),!!(32&t.__u),s),o.__v=t.__v,o.__.__k[o.__i]=o,br(n,o,s),t.__e=t.__=null,o.__e!=r&&fr(o)}}function fr(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),fr(e)}function qt(e){(!e.__d&&(e.__d=!0)&&J.push(e)&&!Le.__r++||It!=D.debounceRendering)&&((It=D.debounceRendering)||hr)(Le)}function Le(){try{for(var e,t=1;J.length;)J.length>t&&J.sort(pr),e=J.shift(),t=J.length,Gr(e)}finally{J.length=Le.__r=0}}function _r(e,t,r,n,s,o,a,d,u,c,h){var f,l,p,v,y,b,g=n&&n.__k||Oe,_=t.length;for(u=Yr(r,t,g,u,_),f=0;f<_;f++)(p=r.__k[f])!=null&&(l=p.__i!=-1&&g[p.__i]||Fe,p.__i=f,b=wt(e,p,l,s,o,a,d,u,c,h),v=p.__e,p.ref&&l.ref!=p.ref&&(l.ref&&yt(l.ref,null,p),h.push(p.ref,p.__c||v,p)),y==null&&v!=null&&(y=v),4&p.__u?(u=vr(p,u,e),l.__e&&(l.__e=null)):typeof p.type=="function"&&b!==void 0?u=b:v&&(u=v.nextSibling),p.__u&=-7);return r.__e=y,u}function Yr(e,t,r,n,s){var o,a,d,u,c,h=r.length,f=h,l=0;for(e.__k=new Array(s),o=0;o<s;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[o]=qe(null,a,null,null,null):We(a)?a=e.__k[o]=qe(B,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[o]=qe(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[o]=a,u=o+l,a.__=e,a.__b=e.__b+1,d=null,(c=a.__i=Xr(a,r,u,f))!=-1&&(f--,(d=r[c])&&(d.__u|=2)),d==null||d.__v==null?(c==-1&&(s>h?l--:s<h&&l++),typeof a.type!="function"&&(a.__u|=4)):c!=u&&(c==u-1?l--:c==u+1?l++:(c>u?l--:l++,a.__u|=4))):e.__k[o]=null;if(f)for(o=0;o<h;o++)(d=r[o])!=null&&(2&d.__u)==0&&(d.__e==n&&(n=se(d)),yr(d,d));return n}function vr(e,t,r){var n,s;if(typeof e.type=="function"){for(n=e.__k,s=0;n&&s<n.length;s++)n[s]&&(n[s].__=e,t=vr(n[s],t,r));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=se(e)),t=r.insertBefore(e.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Xr(e,t,r,n){var s,o,a,d=e.key,u=e.type,c=t[r],h=c!=null&&(2&c.__u)==0;if(c===null&&d==null||h&&d==c.key&&u==c.type)return r;if(n>(h?1:0)){for(s=r-1,o=r+1;s>=0||o<t.length;)if((c=t[a=s>=0?s--:o++])!=null&&(2&c.__u)==0&&d==c.key&&u==c.type)return a}return-1}function Dt(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Qr.test(t)?r:r+"px"}function Me(e,t,r,n,s){var o,a;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Dt(e.style,t,"");if(r)for(t in r)n&&r[t]==n[t]||Dt(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(mr,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?n?r[be]=n[be]:(r[be]=gt,e.addEventListener(t,o?ct:dt,o)):e.removeEventListener(t,o?ct:dt,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Nt(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t[Ie]==null)t[Ie]=gt++;else if(t[Ie]<r[be])return;return r(D.event?D.event(t):t)}}}function wt(e,t,r,n,s,o,a,d,u,c){var h,f,l,p,v,y,b,g,_,C,T,$,q,S,R,x,k=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(u=!!(32&r.__u),o=[d=t.__e=r.__e]),(h=D.__b)&&h(t);e:if(typeof k=="function"){f=a.length;try{if(_=t.props,C=k.prototype&&k.prototype.render,T=(h=k.contextType)&&n[h.__c],$=h?T?T.props.value:h.__:n,r.__c?g=(l=t.__c=r.__c).__=l.__E:(C?t.__c=l=new k(_,$):(t.__c=l=new De(_,$),l.constructor=k,l.render=es),T&&T.sub(l),l.state||(l.state={}),l.__n=n,p=l.__d=!0,l.__h=[],l._sb=[]),C&&l.__s==null&&(l.__s=l.state),C&&k.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Q({},l.__s)),Q(l.__s,k.getDerivedStateFromProps(_,l.__s))),v=l.props,y=l.state,l.__v=t,p)C&&k.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),C&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(C&&k.getDerivedStateFromProps==null&&_!==v&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(_,$),t.__v==r.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(_,l.__s,$)===!1){t.__v!=r.__v&&(l.props=_,l.state=l.__s,l.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(H){H&&(H.__=t)}),Oe.push.apply(l.__h,l._sb),l._sb=[],l.__h.length&&a.push(l),d=se(r);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(_,l.__s,$),C&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(v,y,b)})}if(l.context=$,l.props=_,l.__P=e,l.__e=!1,q=D.__r,S=0,C)l.state=l.__s,l.__d=!1,q&&q(t),h=l.render(l.props,l.state,l.context),Oe.push.apply(l.__h,l._sb),l._sb=[];else do l.__d=!1,q&&q(t),h=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++S<25);l.state=l.__s,l.getChildContext!=null&&(n=Q(Q({},n),l.getChildContext())),C&&!p&&l.getSnapshotBeforeUpdate!=null&&(b=l.getSnapshotBeforeUpdate(v,y)),R=h!=null&&h.type===B&&h.key==null?wr(h.props.children):h,d=_r(e,We(R)?R:[R],t,r,n,s,o,a,d,u,c),l.base=t.__e,t.__u&=-161,l.__h.length&&a.push(l),g&&(l.__E=l.__=null)}catch(H){if(a.length=f,t.__v=null,u||o!=null){if(H.then){for(t.__u|=u?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;o!=null&&(o[o.indexOf(d)]=null),t.__e=d}else if(o!=null)for(x=o.length;x--;)bt(o[x])}else t.__e=r.__e;t.__k==null&&(t.__k=r.__k||[]),H.then||gr(t),D.__e(H,t,r)}}else o==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=Zr(r.__e,t,r,n,s,o,a,u,c);return(h=D.diffed)&&h(t),128&t.__u?void 0:d}function gr(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(gr))}function br(e,t,r){for(var n=0;n<r.length;n++)yt(r[n],r[++n],r[++n]);D.__c&&D.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(o){o.call(s)})}catch(o){D.__e(o,s.__v)}})}function wr(e){return typeof e!="object"||e==null||e.__b>0?e:We(e)?e.map(wr):e.constructor!==void 0?null:Q({},e)}function Zr(e,t,r,n,s,o,a,d,u){var c,h,f,l,p,v,y,b=r.props||Fe,g=t.props,_=t.type;if(_=="svg"?s="http://www.w3.org/2000/svg":_=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(c=0;c<o.length;c++)if((p=o[c])&&"setAttribute"in p==!!_&&(_?p.localName==_:p.nodeType==3)){e=p,o[c]=null;break}}if(e==null){if(_==null)return document.createTextNode(g);e=document.createElementNS(s,_,g.is&&g),d&&(D.__m&&D.__m(t,o),d=!1),o=null}if(_==null)b===g||d&&e.data==g||(e.data=g);else{if(o=_=="textarea"&&g.defaultValue!=null?null:o&&Be.call(e.childNodes),!d&&o!=null)for(b={},c=0;c<e.attributes.length;c++)b[(p=e.attributes[c]).name]=p.value;for(c in b)p=b[c],c=="dangerouslySetInnerHTML"?f=p:c=="children"||c in g||c=="value"&&"defaultValue"in g||c=="checked"&&"defaultChecked"in g||Me(e,c,null,p,s);for(c in g)p=g[c],c=="children"?l=p:c=="dangerouslySetInnerHTML"?h=p:c=="value"?v=p:c=="checked"?y=p:d&&typeof p!="function"||b[c]===p||Me(e,c,p,b[c],s);if(h)d||f&&(h.__html==f.__html||h.__html==e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(f&&(e.innerHTML=""),_r(t.type=="template"?e.content:e,We(l)?l:[l],t,r,n,_=="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,a,o?o[0]:r.__k&&se(r,0),d,u),o!=null)for(c=o.length;c--;)bt(o[c]);d&&_!="textarea"||(c="value",_=="progress"&&v==null?e.removeAttribute("value"):v!=null&&(v!==e[c]||_=="progress"&&!v||_=="option"&&v!=b[c])&&Me(e,c,v,b[c],s),c="checked",y!=null&&y!=e[c]&&Me(e,c,y,b[c],s))}return e}function yt(e,t,r){try{if(typeof e=="function"){var n=typeof e.__u=="function";n&&e.__u(),n&&t==null||(e.__u=e(t))}else e.current=t}catch(s){D.__e(s,r)}}function yr(e,t,r){var n,s;if(D.unmount&&D.unmount(e),(n=e.ref)&&(n.current&&n.current!=e.__e||yt(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){D.__e(o,t)}n.base=n.__P=n.__n=null}if(n=e.__k)for(s=0;s<n.length;s++)n[s]&&yr(n[s],t,r||typeof e.type!="function");r||bt(e.__e),e.__c=e.__=e.__e=void 0}function es(e,t,r){return this.constructor(e,r)}function ts(e,t,r){var n,s,o,a;t==document&&(t=document.documentElement),D.__&&D.__(e,t),s=(n=!1)?null:t.__k,o=[],a=[],wt(t,e=t.__k=Jr(B,null,[e]),s||Fe,Fe,t.namespaceURI,s?null:t.firstChild?Be.call(t.childNodes):null,o,s?s.__e:t.firstChild,n,a),br(o,e,a),e.props.children=null}Be=Oe.slice,D={__e:function(e,t,r,n){for(var s,o,a;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,n||{}),a=s.__d),a)return s.__E=s}catch(d){e=d}throw e}},ur=0,De.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Q({},this.state),typeof e=="function"&&(e=e(Q({},r),this.props)),e&&Q(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),qt(this))},De.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),qt(this))},De.prototype.render=B,J=[],hr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,pr=function(e,t){return e.__v.__b-t.__v.__b},Le.__r=0,tt=Math.random().toString(8),Ie="__d"+tt,be="__a"+tt,mr=/(PointerCapture)$|Capture$/i,gt=0,dt=Nt(!1),ct=Nt(!0);var rs=0;function i(e,t,r,n,s,o){t||(t={});var a,d,u=t;if("ref"in u)for(d in u={},t)d=="ref"?a=t[d]:u[d]=t[d];var c={type:e,props:u,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--rs,__i:-1,__u:0,__source:s,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(d in a)u[d]===void 0&&(u[d]=a[d]);return D.vnode&&D.vnode(c),c}var ue,U,rt,Rt,ye=0,Sr=[],L=D,Ut=L.__b,Ft=L.__r,Ot=L.diffed,Lt=L.__c,Ht=L.unmount,Bt=L.__;function ze(e,t){L.__h&&L.__h(U,e,ye||t),ye=0;var r=U.__H||(U.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function w(e){return ye=1,ss($r,e)}function ss(e,t,r){var n=ze(ue++,2);if(n.t=e,!n.__c&&(n.__=[$r(void 0,t),function(d){var u=n.__N?n.__N[0]:n.__[0],c=n.t(u,d);u!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=U,!U.__f)){var s=function(d,u,c){if(!n.__c.__H)return!0;var h=!1,f=n.__c.props!==d;if(n.__c.__H.__.some(function(p){if(p.__N){h=!0;var v=p.__[0];p.__=p.__N,p.__N=void 0,v!==p.__[0]&&(f=!0)}}),o){var l=o.call(this,d,u,c);return h?l||f:l}return!h||f};U.__f=!0;var o=U.shouldComponentUpdate,a=U.componentWillUpdate;U.componentWillUpdate=function(d,u,c){if(this.__e){var h=o;o=void 0,s(d,u,c),o=h}a&&a.call(this,d,u,c)},U.shouldComponentUpdate=s}return n.__N||n.__}function ne(e,t){var r=ze(ue++,3);!L.__s&&Tr(r.__H,t)&&(r.__=e,r.u=t,U.__H.__h.push(r))}function St(e){return ye=5,je(function(){return{current:e}},[])}function je(e,t){var r=ze(ue++,7);return Tr(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function O(e,t){return ye=8,je(function(){return e},t)}function Ve(){var e=ze(ue++,11);if(!e.__){for(var t=U.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var r=t.__m||(t.__m=[0,0]);e.__="P"+r[0]+"-"+r[1]++}return e.__}function ns(){for(var e;e=Sr.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Ne),t.__h.some(ut),t.__h=[]}catch(r){t.__h=[],L.__e(r,e.__v)}}}L.__b=function(e){U=null,Ut&&Ut(e)},L.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Bt&&Bt(e,t)},L.__r=function(e){Ft&&Ft(e),ue=0;var t=(U=e.__c).__H;t&&(rt===U?(t.__h=[],U.__h=[],t.__.some(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.some(Ne),t.__h.some(ut),t.__h=[],ue=0)),rt=U},L.diffed=function(e){Ot&&Ot(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Sr.push(t)!==1&&Rt===L.requestAnimationFrame||((Rt=L.requestAnimationFrame)||is)(ns)),t.__H.__.some(function(r){r.u&&(r.__H=r.u,r.u=void 0)})),rt=U=null},L.__c=function(e,t){t.some(function(r){try{r.__h.some(Ne),r.__h=r.__h.filter(function(n){return!n.__||ut(n)})}catch(n){t.some(function(s){s.__h&&(s.__h=[])}),t=[],L.__e(n,r.__v)}}),Lt&&Lt(e,t)},L.unmount=function(e){Ht&&Ht(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.some(function(n){try{Ne(n)}catch(s){t=s}}),r.__H=void 0,t&&L.__e(t,r.__v))};var Wt=typeof requestAnimationFrame=="function";function is(e){var t,r=function(){clearTimeout(n),Wt&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,35);Wt&&(t=requestAnimationFrame(r))}function Ne(e){var t=U,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),U=t}function ut(e){var t=U;e.__c=e.__(),U=t}function Tr(e,t){return!e||e.length!==t.length||t.some(function(r,n){return r!==e[n]})}function $r(e,t){return typeof t=="function"?t(e):t}function os({tabs:e,active:t,onSelect:r}){return i("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:e.map(n=>i("button",{type:"button",role:"tab",id:`tab-${n.id}`,"aria-selected":n.id===t,"aria-controls":`panel-${n.id}`,class:n.id===t?"active":void 0,onClick:()=>r(n.id),children:n.label},n.id))})}const m={mqtt:{hostMin:1,hostMax:63,loginMax:31,passwordMax:31,haDiscoveryPrefixMin:1,haDiscoveryPrefixMax:63,topicMin:1,topicMax:63},boiler:{topicMax:63,fieldMax:15,savableDrivers:[1],savableOutdoorSensors:[1]},room:{count:8,idMin:0,idMax:7,nameMax:31,topicMax:63,temperatureFieldMax:15,savableTemperatureSensorTypes:[1],pidMin:0},valve:{count:9,idMin:0,idMax:8,channelMin:0,channelMax:15,roomIdMin:0,roomIdMax:7,fullTravelTimeMin:0,fullTravelTimeMax:6e5,windowTimeMin:0,windowTimeMax:6e5,savableTypes:[1]}},Ke="Device returned an empty response (config too large for its 4KB JSON limit — shorten names/topics)",Tt="Device returned an empty response.",Qe="Could not reach the device. Check that you are connected to its network and try again.",xe={};function Je(){return{ok:!1,message:Qe}}function kr(e){try{const t=JSON.parse(e);if(t&&typeof t=="object"&&"message"in t){const r=t.message;if(typeof r=="string"&&r)return r}}catch{}}async function Ge(e){let t=`Request failed (HTTP ${e.status}).`;try{const r=await e.text();r&&(t=kr(r)??t)}catch{}return{ok:!1,status:e.status,message:t}}async function oe(e,t){let r;try{r=await fetch(e,{headers:{Accept:"application/json"}})}catch{return Je()}if(!r.ok)return Ge(r);let n;try{n=await r.text()}catch{return{ok:!1,status:r.status,message:Qe}}if(!n.trim())return{ok:!1,status:r.status,message:t};try{return{ok:!0,data:JSON.parse(n)}}catch{return{ok:!1,status:r.status,message:t}}}async function $e(e,t){let r;try{r=await fetch(e,t)}catch{return Je()}if(!r.ok)return Ge(r);let n="";try{n=await r.text()}catch{return{ok:!0,data:xe}}if(!n.trim())return{ok:!0,data:xe};try{const s=JSON.parse(n);return{ok:!0,data:s&&typeof s=="object"?s:xe}}catch{return{ok:!0,data:xe}}}function Ar(e,t){return $e(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()})}function Mr(e,t){return $e(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}function j(e,t,r,n=!1){if(typeof e!="string")throw new Error(`${t} is required.`);if(!n&&e.length===0)throw new Error(`${t} must not be empty.`);if(e.length>r)throw new Error(`${t} must be at most ${r} characters.`);return e}function F(e,t,r,n){if(typeof e!="number"||!Number.isFinite(e))throw new Error(`${t} must be a number.`);if(e<r||e>n)throw new Error(`${t} must be between ${r} and ${n}.`);return e}function $t(e,t){if(typeof e!="boolean")throw new Error(`${t} must be true or false.`);return e}function as(){return oe("/api/settings",Ke)}function ls(){return oe("/api/settings/boiler",Ke)}function ds(){return oe("/api/settings/rooms",Ke)}function cs(){return oe("/api/settings/valves",Ke)}function us(){return oe("/api/status",Tt)}function xr(){return oe("/healthcheck/healty",Tt)}function hs(){return oe("/healthcheck/ready",Tt)}async function ps(){let e;try{e=await fetch("/api/config",{headers:{Accept:"application/octet-stream"}})}catch{return Je()}if(e.status===404)return{ok:!1,status:404,message:"The device has no saved config yet (no /config.bin on flash)."};if(!e.ok)return Ge(e);let t;try{t=new Uint8Array(await e.arrayBuffer())}catch{return{ok:!1,status:e.status,message:Qe}}return t.byteLength===0?{ok:!1,status:e.status,message:"Device returned an empty config file."}:{ok:!0,data:t}}async function ms(){let e;try{e=await fetch("/api/config/backup",{headers:{Accept:"application/zip"}})}catch{return Je()}if(!e.ok){if(e.status===404){let r="Device has no config files yet.";try{const n=await e.text();n&&(r=kr(n)??r)}catch{}return{ok:!1,status:404,message:r}}return Ge(e)}let t;try{t=new Uint8Array(await e.arrayBuffer())}catch{return{ok:!1,status:e.status,message:Qe}}return t.byteLength===0?{ok:!1,status:e.status,message:"Device returned an empty archive."}:{ok:!0,data:t}}function fs(e){const t=j(e.host,"MQTT host",m.mqtt.hostMax),r=F(e.port,"MQTT port",1,65535),n=j(e.login,"MQTT login",m.mqtt.loginMax,!0),s=j(e.password,"MQTT password",m.mqtt.passwordMax,!0),o=j(e.haDiscoveryPrefix,"HA discovery prefix",m.mqtt.haDiscoveryPrefixMax),a=$t(e.mqttIsHADiscovery,"HA discovery flag"),d=j(e.stateTopic,"State topic",m.mqtt.topicMax),u=j(e.commandTopic,"Command topic",m.mqtt.topicMax),c=new URLSearchParams;return c.set("host",t),c.set("port",String(r)),c.set("login",n),c.set("password",s),c.set("haDiscoveryPrefix",o),c.set("mqttIsHADiscovery",a?"true":"false"),c.set("stateTopic",d),c.set("commandTopic",u),Ar("/api/settings/mqtt",c)}function _s(e){const t=F(e.driver,"Boiler driver",0,1),r=F(e.modbusAddress,"Modbus address",0,255),n=F(e.modbusSpeed,"Modbus speed",0,1e6),s=F(e.K,"Weather curve K",-1e6,1e6),o=F(e.B,"Weather curve B",-1e6,1e6),a=F(e.P,"Weather curve P",-1e6,1e6),d=F(e.I,"Weather curve I",-1e6,1e6),u=F(e.minSetPoint,"Minimum setpoint",30,80);if(t!==1)throw new Error('Boiler driver must be ECTOControlV2 (1); the device rejects "No select".');const c=F(e.outdoorSensor,"Outdoor sensor",0,1);if(c!==1)throw new Error('Outdoor sensor must be MQTT (1); the device rejects "No select".');const h=j(e.outdoorSensorMqttTopic??"","Outdoor sensor topic",m.boiler.topicMax,!0),f=j(e.outdoorSensorMqttField??"","Outdoor sensor field",m.boiler.fieldMax,!0);if(c===1&&h.length===0)throw new Error("Outdoor sensor topic is required when MQTT is selected.");if(c===1&&f.length===0)throw new Error("Outdoor sensor field is required when MQTT is selected.");const l=new URLSearchParams;return l.set("driver",String(t)),l.set("modbusAddress",String(r)),l.set("modbusSpeed",String(n)),l.set("K",String(s)),l.set("B",String(o)),l.set("P",String(a)),l.set("I",String(d)),l.set("minSetPoint",String(u)),l.set("outdoorSensor",String(c)),l.set("outdoorSensorMqttTopic",h),l.set("outdoorSensorMqttField",f),Ar("/api/settings/boiler/update",l)}function ht(e){const t=F(e.id,"Room id",m.room.idMin,m.room.idMax),r=$t(e.enabled,"Room enabled"),n=F(e.temperatureSensorType,"Temperature sensor type",1,1),s=j(e.name,"Room name",m.room.nameMax),o=j(e.mqttCommandTopic,"Room command topic",m.room.topicMax),a=j(e.mqttStateTopic,"Room state topic",m.room.topicMax),d=j(e.mqttTemperatureSensorTopic,"Temperature topic",m.room.topicMax),u=j(e.mqttTemperatureSensorField.trim(),"Temperature field",m.room.temperatureFieldMax,!0),c=F(e.kP,"Room kP",m.room.pidMin,1e6),h=F(e.kI,"Room kI",m.room.pidMin,1e6),f=F(e.kD,"Room kD",m.room.pidMin,1e6);return Mr("/api/settings/room",{id:t,enabled:r,temperatureSensorType:n,name:s,mqttCommandTopic:o,mqttStateTopic:a,mqttTemperatureSensorTopic:d,mqttTemperatureSensorField:u,kP:c,kI:h,kD:f})}function pt(e){const t=F(e.id,"Valve id",m.valve.idMin,m.valve.idMax),r=$t(e.enabled,"Valve enabled"),n=F(e.type,"Valve type",1,1),s=F(e.channel,"Valve channel",m.valve.channelMin,m.valve.channelMax),o=F(e.fullTravelTime,"Full travel time",m.valve.fullTravelTimeMin,m.valve.fullTravelTimeMax),a=F(e.windowTime,"Window time",m.valve.windowTimeMin,m.valve.windowTimeMax),d=F(e.roomID,"Room id",m.valve.roomIdMin,m.valve.roomIdMax);return Mr("/api/settings/valve",{id:t,enabled:r,type:n,channel:s,fullTravelTime:o,windowTime:a,roomID:d})}function vs(e){if(e.byteLength===0)throw new Error("Cannot upload an empty config file.");const t=new ArrayBuffer(e.byteLength);return new Uint8Array(t).set(e),$e("/api/config",{method:"POST",headers:{"Content-Type":"application/octet-stream"},body:t})}function gs(e){if(e.byteLength===0)throw new Error("Cannot upload an empty archive.");const t=new ArrayBuffer(e.byteLength);return new Uint8Array(t).set(e),$e("/api/config/backup",{method:"POST",headers:{"Content-Type":"application/octet-stream"},body:t})}function bs(){return $e("/api/reboot",{method:"POST"})}function P({kind:e="info",message:t,onClose:r}){return i("div",{class:`banner banner-${e}`,role:"status",children:[i("span",{children:t}),r?i("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:r,children:"×"}):null]})}function ws(e){switch(e){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function N({children:e,variant:t="default",type:r="button",disabled:n,title:s,onClick:o}){return i("button",{type:r,class:ws(t),disabled:n,title:s,onClick:o,children:e})}function Ye(e){return i(N,{...e,variant:"danger"})}function W({title:e,children:t,class:r}){return i("section",{class:r?`card ${r}`:"card",children:[e?i("h2",{children:e}):null,t]})}const st=2e3,ys=12e4;function Pr(){const[e,t]=w("idle"),r=St(0);ne(()=>{if(e!=="rebooting")return;let a=!1,d;const u=()=>{xr().then(c=>{if(!a){if(c.ok){t("ready");return}if(r.current+=1,r.current*st>=ys){t("timeout");return}d=window.setTimeout(u,st)}})};return d=window.setTimeout(u,st),()=>{a=!0,d!==void 0&&window.clearTimeout(d)}},[e]);const n=O(()=>{r.current=0,t("rebooting")},[]),s=O(()=>t("idle"),[]),o=O(()=>{r.current=0,t("rebooting")},[]);return je(()=>({phase:e,start:n,dismiss:s,retry:o}),[e,n,s,o])}function Cr({flow:e}){return e.phase==="idle"?null:i("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:i("div",{class:"reboot-dialog card",children:[i("h2",{children:"Device is rebooting"}),e.phase==="rebooting"?i(B,{children:[i("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),i("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,e.phase==="ready"?i(B,{children:[i(P,{kind:"success",message:"The device is back online."}),i("div",{class:"form-actions",children:i(N,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,e.phase==="timeout"?i(B,{children:[i(P,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),i("div",{class:"form-actions",children:[i(N,{onClick:e.retry,children:"Keep waiting"}),i(N,{onClick:e.dismiss,children:"Dismiss"})]})]}):null]})})}const Ss=1e4;function Ts(e){const t=Math.max(0,Math.floor(e)),r=Math.floor(t/86400),n=Math.floor(t%86400/3600),s=Math.floor(t%3600/60),o=t%60,a=[];return r&&a.push(`${r}d`),(r||n)&&a.push(`${n}h`),(r||n||s)&&a.push(`${s}m`),a.push(`${o}s`),a.join(" ")}function $s(e){return Number.isFinite(e)?`${Math.round(e/1024)} KB (${Math.round(e)} bytes)`:String(e)}function ks(){const[e,t]=w(null),[r,n]=w(null),[s,o]=w(!1),[a,d]=w(null),[u,c]=w(null),[h,f]=w(!0),[l,p]=w(null),[v,y]=w(!1),b=Pr(),g=O(async()=>{const q=await us();q.ok?(t(q.data),n(null)):n(q.message),o(!0)},[]),_=O(async()=>{f(!0);const[q,S]=await Promise.all([xr(),hs()]);d(q),c(S),f(!1)},[]);ne(()=>{g();const q=window.setInterval(()=>{g()},Ss);return()=>window.clearInterval(q)},[g]),ne(()=>{_()},[_]);const C=O(async()=>{if(!window.confirm("Reboot the device now? Heating control will be offline for about 20-60 seconds."))return;p(null),y(!0);const S=await bs();y(!1),S.ok?b.start():p(S.message)},[b.start]),T=h&&!a?i("p",{class:"muted",children:"Checking device health…"}):a?a.ok?i(P,{kind:a.data.healty?"success":"error",message:a.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):i(P,{kind:"error",message:a.message}):null,$=u?u.ok?i(P,{kind:u.data.ready?"success":"info",message:u.data.ready?"All registered services are ready.":`Not ready: ${u.data.message}`}):u.status===500?i(P,{kind:"info",message:`Not ready: ${u.message}`}):i(P,{kind:"error",message:u.message}):null;return i("div",{class:"stack",children:[i(W,{title:"Device",children:[s?r?i(B,{children:[i(P,{kind:"error",message:r}),i("div",{class:"form-actions",children:i(N,{onClick:()=>{g()},children:"Retry"})})]}):e?i("dl",{class:"kv",children:[i("dt",{children:"Free heap"}),i("dd",{children:$s(e.freeHeap)}),i("dt",{children:"Uptime"}),i("dd",{children:Ts(e.uptime)}),i("dt",{children:"Last reset reason"}),i("dd",{children:e.lastResetReason})]}):null:i("p",{class:"muted",children:"Loading status…"}),i("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),i(W,{title:"Health",children:[T,$,i("div",{class:"form-actions",children:i(N,{onClick:()=>{_()},disabled:h,children:h?"Checking…":"Refresh health"})})]}),i(W,{title:"Maintenance",children:[i("p",{class:"muted",children:"A reboot briefly interrupts heating control. Configuration changes saved on the other tabs only take effect after a reboot."}),l?i(P,{kind:"error",message:l,onClose:()=>p(null)}):null,i("div",{class:"form-actions",children:i(Ye,{onClick:()=>{C()},disabled:v||b.phase!=="idle",children:"Reboot device"})})]}),i(Cr,{flow:b})]})}function As({label:e,checked:t,onChange:r,disabled:n,help:s,name:o}){const a=Ve();return i("div",{class:"checkbox-field",children:[i("label",{class:"checkbox-label",for:a,children:[i("input",{id:a,name:o,type:"checkbox",checked:t,disabled:n,onChange:u=>{r?.(u.currentTarget.checked)}}),i("span",{children:e})]}),s?i("span",{class:"field-help",children:s}):null]})}function A({label:e,value:t,onInput:r,type:n="text",name:s,placeholder:o,maxLength:a,min:d,max:u,step:c,error:h,help:f,disabled:l,required:p,autoComplete:v,inputMode:y}){const b=Ve();return i("label",{class:"field",for:b,children:[i("span",{class:"field-label",children:e}),i("input",{id:b,name:s,type:n,value:t,placeholder:o,maxLength:a,min:d,max:u,step:c,disabled:l,required:p,autoComplete:v,inputMode:y,onInput:_=>{r?.(_.currentTarget.value)},"aria-invalid":h?!0:void 0}),f&&!h?i("span",{class:"field-help",children:f}):null,h?i("span",{class:"field-error",children:h}):null]})}function me(){return i(P,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."})}function Ms({label:e,value:t,onInput:r,maxLength:n,error:s,help:o,disabled:a,autoComplete:d}){const[u,c]=w(!1);return i("div",{class:"password-field",children:[i(A,{label:e,value:t,onInput:r,type:u?"text":"password",maxLength:n,error:s,help:o,disabled:a,autoComplete:d}),i("button",{type:"button",class:"btn reveal-toggle","aria-pressed":u,disabled:a,onClick:()=>c(h=>!h),children:u?"Hide":"Show"})]})}const xs={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:""};function Ps(e){const t={};e.host.trim().length===0?t.host="Host is required.":e.host.length>m.mqtt.hostMax&&(t.host=`At most ${m.mqtt.hostMax} characters.`);const r=Number(e.port);return e.port.trim()===""?t.port="Port is required.":(!Number.isInteger(r)||r<1||r>65535)&&(t.port="Port must be an integer between 1 and 65535."),e.login.length>m.mqtt.loginMax&&(t.login=`At most ${m.mqtt.loginMax} characters.`),e.password.length>m.mqtt.passwordMax&&(t.password=`At most ${m.mqtt.passwordMax} characters.`),e.haDiscoveryPrefix.trim().length===0?t.haDiscoveryPrefix="Discovery prefix is required.":e.haDiscoveryPrefix.length>m.mqtt.haDiscoveryPrefixMax&&(t.haDiscoveryPrefix=`At most ${m.mqtt.haDiscoveryPrefixMax} characters.`),e.stateTopic.trim().length===0?t.stateTopic="Required - the device crashes if the state topic is missing.":e.stateTopic.length>m.mqtt.topicMax&&(t.stateTopic=`At most ${m.mqtt.topicMax} characters.`),e.commandTopic.trim().length===0?t.commandTopic="Required - the device crashes if the command topic is missing.":e.commandTopic.length>m.mqtt.topicMax&&(t.commandTopic=`At most ${m.mqtt.topicMax} characters.`),t}function Cs(e){return Object.keys(e).length>0}function Es(){const[e,t]=w(!1),[r,n]=w(null),[s,o]=w(xs),[a,d]=w({}),[u,c]=w(!1),[h,f]=w(null),[l,p]=w(null),v=O(async()=>{n(null);const g=await as();g.ok?o({host:g.data.mqttHost,port:String(g.data.mqttPort),login:g.data.mqttLogin,password:g.data.mqttPassword,haDiscoveryPrefix:g.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:g.data.mqttIsHADiscovery,stateTopic:g.data.mqttStateTopic,commandTopic:g.data.mqttCommandTopic}):n(g.message),t(!0)},[]);ne(()=>{v()},[v]);const y=g=>o(_=>({..._,...g})),b=O(async g=>{g.preventDefault();const _=Ps(s);if(d(_),f(null),p(null),Cs(_))return;c(!0);const C=await fs({host:s.host,port:Number(s.port),login:s.login,password:s.password,haDiscoveryPrefix:s.haDiscoveryPrefix,mqttIsHADiscovery:s.mqttIsHADiscovery,stateTopic:s.stateTopic,commandTopic:s.commandTopic});c(!1),C.ok?f("MQTT settings saved to flash."):p(C.message)},[s]);return e?i("div",{class:"stack",children:[i(me,{}),r?i(B,{children:[i(P,{kind:"error",message:r}),i("div",{class:"form-actions",children:i(N,{onClick:()=>{v()},children:"Retry"})})]}):null,i(W,{title:"MQTT",children:i("form",{onSubmit:b,children:[i(A,{label:"Host",value:s.host,onInput:g=>y({host:g}),maxLength:m.mqtt.hostMax,error:a.host,autoComplete:"off"}),i(A,{label:"Port",value:s.port,onInput:g=>y({port:g}),type:"number",min:1,max:65535,inputMode:"numeric",error:a.port}),i(A,{label:"Login",value:s.login,onInput:g=>y({login:g}),maxLength:m.mqtt.loginMax,error:a.login,autoComplete:"off"}),i(Ms,{label:"Password",value:s.password,onInput:g=>y({password:g}),maxLength:m.mqtt.passwordMax,error:a.password,autoComplete:"new-password"}),i(A,{label:"HA discovery prefix",value:s.haDiscoveryPrefix,onInput:g=>y({haDiscoveryPrefix:g}),maxLength:m.mqtt.haDiscoveryPrefixMax,error:a.haDiscoveryPrefix,autoComplete:"off"}),i(As,{label:"Enable Home Assistant discovery",checked:s.mqttIsHADiscovery,onChange:g=>y({mqttIsHADiscovery:g})}),i(A,{label:"State topic",value:s.stateTopic,onInput:g=>y({stateTopic:g}),maxLength:m.mqtt.topicMax,error:a.stateTopic,help:"Must not be empty: the device crashes on a missing state topic.",autoComplete:"off"}),i(A,{label:"Command topic",value:s.commandTopic,onInput:g=>y({commandTopic:g}),maxLength:m.mqtt.topicMax,error:a.commandTopic,help:"Must not be empty: the device crashes on a missing command topic.",autoComplete:"off"}),h?i(P,{kind:"success",message:h,onClose:()=>f(null)}):null,l?i(P,{kind:"error",message:l,onClose:()=>p(null)}):null,i("div",{class:"form-actions",children:i(N,{type:"submit",variant:"primary",disabled:u,children:u?"Saving…":"Save MQTT"})})]})})]}):i(W,{title:"Connections",children:i("p",{class:"muted",children:"Loading connection settings…"})})}function Re({label:e,value:t,options:r,onChange:n,error:s,help:o,disabled:a,required:d,name:u}){const c=Ve(),h=f=>{n?.(f.currentTarget.value)};return i("label",{class:"field",for:c,children:[i("span",{class:"field-label",children:e}),i("select",{id:c,name:u,value:String(t),disabled:a,required:d,onChange:h,"aria-invalid":s?!0:void 0,children:r.map(f=>i("option",{value:f.value,disabled:f.disabled,children:f.label},f.value))}),o&&!s?i("span",{class:"field-help",children:o}):null,s?i("span",{class:"field-error",children:s}):null]})}const Is=640,zt=360,K=56,le=624,ve=16,ce=312,Er=le-K,Ir=ce-ve,mt=20,qr=-30,ft=20,Dr=85,jt=80,qs=[20,10,0,-10,-20,-30],Ds=[20,30,40,50,60,70,80],Ns=1,Rs=7.2,Us=50;function nt(e,t){return Number.isFinite(e)?e:t}function Vt(e){return K+(mt-e)/(mt-qr)*Er}function Pe(e){return ce-(e-ft)/(Dr-ft)*Ir}function Fs(e){return e>0?`+${e}`:String(e)}function Os({k:e,b:t,minSetPoint:r}){const n=nt(e,Ns),s=nt(t,Rs),o=nt(r,Us),a=-.21*n-.06,d=6.04*n+1.98,u=-5.06*n+18.06,c=[];for(let l=mt;l>=qr;l-=1){const p=-.2*l+5,v=a*p*p+d*p+u+s,y=Math.min(jt,Math.max(o,v));c.push(`${Vt(l).toFixed(2)},${Pe(y).toFixed(2)}`)}const h=Pe(Math.min(Dr,Math.max(ft,o))),f=Pe(jt);return i("svg",{class:"weather-curve",viewBox:`0 0 ${Is} ${zt}`,preserveAspectRatio:"xMidYMid meet",role:"img","aria-label":"Weather curve: computed boiler setpoint versus outdoor temperature",children:[i("rect",{class:"wc-plot",x:K,y:ve,width:Er,height:Ir}),Ds.map(l=>{const p=Pe(l);return i("g",{children:[i("line",{class:"wc-grid",x1:K,y1:p,x2:le,y2:p}),i("text",{class:"wc-tick",x:K-8,y:p+4,"text-anchor":"end",children:l})]},`sp-${l}`)}),qs.map(l=>{const p=Vt(l);return i("g",{children:[i("line",{class:"wc-grid",x1:p,y1:ve,x2:p,y2:ce}),i("text",{class:"wc-tick",x:p,y:ce+18,"text-anchor":"middle",children:Fs(l)})]},`out-${l}`)}),i("line",{class:"wc-max",x1:K,y1:f,x2:le,y2:f}),i("text",{class:"wc-max-label",x:le-4,y:f-5,"text-anchor":"end",children:"max 80"}),i("polyline",{class:"wc-curve",points:c.join(" ")}),i("line",{class:"wc-min",x1:K,y1:h,x2:le,y2:h}),i("text",{class:"wc-min-label",x:K+4,y:h-5,"text-anchor":"start",children:"min"}),i("text",{class:"wc-axis-title",x:(K+le)/2,y:zt-8,"text-anchor":"middle",children:"Outdoor, °C"}),i("text",{class:"wc-axis-title",x:16,y:(ve+ce)/2,"text-anchor":"middle",transform:`rotate(-90 16 ${(ve+ce)/2})`,children:"Setpoint, °C"})]})}const Kt=[1200,2400,4800,9600,19200,38400,57600,115200],Ls={driver:"0",modbusAddress:"1",modbusSpeed:"9600",K:"0",B:"0",P:"0",I:"0",minSetPoint:"50",outdoorSensor:"0",outdoorSensorMqttTopic:"",outdoorSensorMqttField:""};function ge(e){if(e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function Hs(e){return Object.keys(e).length>0}function Bs(e){const t={};e.driver!=="1"&&(t.driver='Saving requires ECTOControlV2 (1); the device rejects "No select".');const r=ge(e.modbusAddress);(r===null||!Number.isInteger(r)||r<1||r>247)&&(t.modbusAddress="Address must be an integer between 1 and 247.");const n=ge(e.modbusSpeed);(n===null||n<=0)&&(t.modbusSpeed="Speed must be a positive number.");const s=[["K",e.K,"K"],["B",e.B,"B"],["P",e.P,"P"],["I",e.I,"I"]];for(const[a,d,u]of s)ge(d)===null&&(t[a]=`${u} must be a number.`);const o=ge(e.minSetPoint);return(o===null||o<30||o>80)&&(t.minSetPoint="Minimum setpoint must be between 30 and 80."),e.outdoorSensor!=="1"&&(t.outdoorSensor='Saving requires MQTT (1); the device rejects "No".'),e.outdoorSensorMqttTopic.trim().length===0?t.outdoorSensorMqttTopic="Topic is required when MQTT is selected.":e.outdoorSensorMqttTopic.length>m.boiler.topicMax&&(t.outdoorSensorMqttTopic=`At most ${m.boiler.topicMax} characters.`),e.outdoorSensorMqttField.trim().length===0?t.outdoorSensorMqttField="Field is required when MQTT is selected.":e.outdoorSensorMqttField.length>m.boiler.fieldMax&&(t.outdoorSensorMqttField=`At most ${m.boiler.fieldMax} characters.`),t}function Ws(e){const t=Kt.map(n=>({value:String(n),label:String(n)})),r=ge(e);return r!==null&&!Kt.includes(r)&&t.unshift({value:e,label:`${e} (current)`}),t}function zs(){const[e,t]=w(!1),[r,n]=w(null),[s,o]=w(Ls),[a,d]=w({}),[u,c]=w(!1),[h,f]=w(null),[l,p]=w(null),v=je(()=>Ws(s.modbusSpeed),[s.modbusSpeed]),y=O(async()=>{n(null);const _=await ls();_.ok?o({driver:String(_.data.driver),modbusAddress:String(_.data.modbusAddress),modbusSpeed:String(_.data.modbusSpeed),K:String(_.data.K),B:String(_.data.B),P:String(_.data.P),I:String(_.data.I),minSetPoint:String(_.data.minSetPoint),outdoorSensor:String(_.data.outdoorSensor),outdoorSensorMqttTopic:_.data.outdoorSensorMqttTopic,outdoorSensorMqttField:_.data.outdoorSensorMqttField}):n(_.message),t(!0)},[]);ne(()=>{y()},[y]);const b=_=>o(C=>({...C,..._})),g=O(async _=>{_.preventDefault();const C=Bs(s);if(d(C),f(null),p(null),Hs(C))return;c(!0);const T=await _s({driver:Number(s.driver),modbusAddress:Number(s.modbusAddress),modbusSpeed:Number(s.modbusSpeed),K:Number(s.K),B:Number(s.B),P:Number(s.P),I:Number(s.I),minSetPoint:Number(s.minSetPoint),outdoorSensor:Number(s.outdoorSensor),outdoorSensorMqttTopic:s.outdoorSensorMqttTopic,outdoorSensorMqttField:s.outdoorSensorMqttField});c(!1),T.ok?f("Boiler settings saved to flash."):p(T.message)},[s]);return e?i("div",{class:"stack",children:[i(me,{}),r?i(B,{children:[i(P,{kind:"error",message:r}),i("div",{class:"form-actions",children:i(N,{onClick:()=>{y()},children:"Retry"})})]}):null,i(W,{title:"Boiler driver",children:i("form",{onSubmit:g,children:[i(Re,{label:"Driver",value:s.driver,onChange:_=>b({driver:_}),options:[{value:"0",label:"No select (0) - not savable"},{value:"1",label:"ECTOControlV2 (1)"}],error:a.driver,help:"The device accepts only ECTOControlV2 when saving."}),i(A,{label:"Modbus address",value:s.modbusAddress,onInput:_=>b({modbusAddress:_}),type:"number",min:1,max:247,step:1,inputMode:"numeric",error:a.modbusAddress,help:"1-247 (the firmware does not range-check this)."}),i(Re,{label:"Modbus speed (baud)",value:s.modbusSpeed,onChange:_=>b({modbusSpeed:_}),options:v,error:a.modbusSpeed}),i("h3",{children:"Weather curve"}),i(A,{label:"K (curve scale)",value:s.K,onInput:_=>b({K:_}),type:"number",step:.1,error:a.K}),i(A,{label:"B (offset, °C)",value:s.B,onInput:_=>b({B:_}),type:"number",step:.1,error:a.B}),i(A,{label:"P (trim gain)",value:s.P,onInput:_=>b({P:_}),type:"number",step:.1,error:a.P}),i(A,{label:"I (trim integral, °C/s)",value:s.I,onInput:_=>b({I:_}),type:"number",step:.1,error:a.I}),i(A,{label:"Minimum setpoint (°C)",value:s.minSetPoint,onInput:_=>b({minSetPoint:_}),type:"number",min:30,max:80,step:1,inputMode:"numeric",error:a.minSetPoint,help:"Lower bound for the computed setpoint (30-80 °C)."}),i("p",{class:"muted",children:"Base curve without room trim. Effective setpoint = curve + trim, clamped to [min, 80]."}),i(Os,{k:Number(s.K),b:Number(s.B),minSetPoint:Number(s.minSetPoint)}),i("h3",{children:"Outdoor sensor"}),i(Re,{label:"Source",value:s.outdoorSensor,onChange:_=>b({outdoorSensor:_}),options:[{value:"0",label:"No (0) - not savable"},{value:"1",label:"MQTT (1)"}],error:a.outdoorSensor,help:"The device accepts only MQTT when saving."}),i(A,{label:"Outdoor sensor MQTT topic",value:s.outdoorSensorMqttTopic,onInput:_=>b({outdoorSensorMqttTopic:_}),maxLength:m.boiler.topicMax,disabled:s.outdoorSensor!=="1",error:a.outdoorSensorMqttTopic,help:"Required when the source is MQTT.",autoComplete:"off"}),i(A,{label:"Outdoor sensor MQTT field",value:s.outdoorSensorMqttField,onInput:_=>b({outdoorSensorMqttField:_}),maxLength:m.boiler.fieldMax,disabled:s.outdoorSensor!=="1",error:a.outdoorSensorMqttField,help:"Required when the source is MQTT.",autoComplete:"off"}),h?i(P,{kind:"success",message:h,onClose:()=>f(null)}):null,l?i(P,{kind:"error",message:l,onClose:()=>p(null)}):null,i("div",{class:"form-actions",children:i(N,{type:"submit",variant:"primary",disabled:u,children:u?"Saving…":"Save boiler settings"})})]})})]}):i(W,{title:"Boiler",children:i("p",{class:"muted",children:"Loading boiler settings…"})})}const js="60000",Vs="30000";function it(e){if(e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function Nr(e){return Object.keys(e).length>0}function Rr(e,t){const r={},n=it(e.channel);n===null||!Number.isInteger(n)||n<m.valve.channelMin||n>m.valve.channelMax?r.channel=`Channel must be an integer between ${m.valve.channelMin} and ${m.valve.channelMax}.`:t?.has(n)&&(r.channel=`Channel ${n} is already used by another enabled valve.`);const s=it(e.fullTravelTime);(s===null||!Number.isInteger(s)||s<m.valve.fullTravelTimeMin||s>m.valve.fullTravelTimeMax)&&(r.fullTravelTime=`Full travel time must be an integer number of milliseconds between ${m.valve.fullTravelTimeMin} and ${m.valve.fullTravelTimeMax}.`);const o=it(e.windowTime);return(o===null||!Number.isInteger(o)||o<m.valve.windowTimeMin||o>m.valve.windowTimeMax)&&(r.windowTime=`Window time must be an integer number of milliseconds between ${m.valve.windowTimeMin} and ${m.valve.windowTimeMax}.`),r}function Qt(e){return{channel:String(e.channel),fullTravelTime:String(e.fullTravelTime),windowTime:String(e.windowTime)}}function Ks({id:e,valve:t,onSaved:r,onNotice:n,takenChannels:s}){const[o,a]=w(!1),[d,u]=w(()=>Qt(t)),[c,h]=w({}),[f,l]=w(!1),[p,v]=w(!1),[y,b]=w(null),[g,_]=w(null),[C,T]=w(null),$=x=>u(k=>({...k,...x})),q=()=>{o||(u(Qt(t)),h({}),b(null),_(null)),a(x=>!x)},S=async x=>{x.preventDefault();const k=Rr(d,s);if(h(k),b(null),_(null),Nr(k))return;const H=Number(d.channel),ke=Number(d.fullTravelTime),Ae=Number(d.windowTime);l(!0);try{const V=await pt({id:e,enabled:!0,type:m.valve.savableTypes[0],channel:H,fullTravelTime:ke,windowTime:Ae,roomID:t.roomID});l(!1),V.ok?(b("Valve saved to flash."),r(e,{...t,enabled:!0,type:m.valve.savableTypes[0],channel:H,fullTravelTime:ke,windowTime:Ae,roomID:t.roomID})):_(V.message)}catch(V){l(!1),_(V instanceof Error?V.message:String(V))}},R=async()=>{if(window.confirm("Valve will be unbound on next reboot. Continue?")){T(null),v(!0);try{const k=await pt({id:e,enabled:!1,type:m.valve.savableTypes[0],channel:t.channel,fullTravelTime:t.fullTravelTime,windowTime:t.windowTime,roomID:t.roomID});v(!1),k.ok?(r(e,{...t,enabled:!1,type:m.valve.savableTypes[0]}),n("Valve unbound. Reboot to apply.")):T(k.message)}catch(k){v(!1),T(k instanceof Error?k.message:String(k))}}};return i("li",{class:"valve-row",children:[i("div",{class:"row",children:[i("span",{class:"valve-summary",children:["Valve ",i("span",{class:"mono",children:e}),i("span",{class:"sep","aria-hidden":"true",children:"·"}),"channel ",i("span",{class:"mono",children:t.channel}),i("span",{class:"sep","aria-hidden":"true",children:"·"}),i("span",{class:"mono",children:t.fullTravelTime})," ",i("span",{class:"unit",children:"ms travel"}),i("span",{class:"sep","aria-hidden":"true",children:"·"}),i("span",{class:"mono",children:t.windowTime})," ",i("span",{class:"unit",children:"ms window"})]}),i("div",{class:"form-actions",children:[i(N,{onClick:q,disabled:f||p,children:o?"Close":"Edit"}),i(Ye,{onClick:()=>{R()},disabled:p||f,children:p?"Deleting…":"Delete"})]})]}),C?i(P,{kind:"error",message:C,onClose:()=>T(null)}):null,o?i("form",{onSubmit:S,children:[i(A,{label:"Channel",value:d.channel,onInput:x=>$({channel:x}),type:"number",min:m.valve.channelMin,max:m.valve.channelMax,step:1,inputMode:"numeric",error:c.channel}),i(A,{label:"Full travel time (ms)",value:d.fullTravelTime,onInput:x=>$({fullTravelTime:x}),type:"number",min:m.valve.fullTravelTimeMin,max:m.valve.fullTravelTimeMax,step:1,inputMode:"numeric",error:c.fullTravelTime}),i(A,{label:"Window time (ms)",value:d.windowTime,onInput:x=>$({windowTime:x}),type:"number",min:m.valve.windowTimeMin,max:m.valve.windowTimeMax,step:1,inputMode:"numeric",error:c.windowTime}),y?i(P,{kind:"success",message:y,onClose:()=>b(null)}):null,g?i(P,{kind:"error",message:g,onClose:()=>_(null)}):null,i(me,{}),i("div",{class:"form-actions",children:i(N,{type:"submit",variant:"primary",disabled:f||p,children:f?"Saving…":`Save valve ${e}`})})]}):null]})}function Qs({slot:e,roomSlot:t,suggestedChannel:r,takenChannels:n,onAdded:s,onCancel:o}){const[a,d]=w(()=>({channel:String(r),fullTravelTime:js,windowTime:Vs})),[u,c]=w({}),[h,f]=w(!1),[l,p]=w(null),v=b=>d(g=>({...g,...b}));return i("form",{onSubmit:async b=>{b.preventDefault();const g=Rr(a,n);if(c(g),p(null),Nr(g))return;const _=Number(a.channel),C=Number(a.fullTravelTime),T=Number(a.windowTime);f(!0);try{const $=await pt({id:e,enabled:!0,type:m.valve.savableTypes[0],channel:_,fullTravelTime:C,windowTime:T,roomID:t});f(!1),$.ok?s(e,{enabled:!0,type:m.valve.savableTypes[0],channel:_,fullTravelTime:C,windowTime:T,roomID:t}):p($.message)}catch($){f(!1),p($ instanceof Error?$.message:String($))}},children:[i(P,{kind:"info",message:"Suggested channel and timings are prefilled. Review before adding."}),i(A,{label:"Channel",value:a.channel,onInput:b=>v({channel:b}),type:"number",min:m.valve.channelMin,max:m.valve.channelMax,step:1,inputMode:"numeric",error:u.channel}),i(A,{label:"Full travel time (ms)",value:a.fullTravelTime,onInput:b=>v({fullTravelTime:b}),type:"number",min:m.valve.fullTravelTimeMin,max:m.valve.fullTravelTimeMax,step:1,inputMode:"numeric",error:u.fullTravelTime}),i(A,{label:"Window time (ms)",value:a.windowTime,onInput:b=>v({windowTime:b}),type:"number",min:m.valve.windowTimeMin,max:m.valve.windowTimeMax,step:1,inputMode:"numeric",error:u.windowTime}),l?i(P,{kind:"error",message:l,onClose:()=>p(null)}):null,i(me,{}),i("div",{class:"form-actions",children:[i(N,{type:"submit",variant:"primary",disabled:h,children:h?"Adding…":`Add valve ${e}`}),i(N,{onClick:o,disabled:h,children:"Cancel"})]})]})}function Js({roomSlot:e,valves:t,valvesError:r,onRetry:n,onSaved:s}){const[o,a]=w(!1),[d,u]=w(null),c=O((v,y)=>{s(v,y),a(!1),u("Valve added to this room. Reboot to apply.")},[s]);if(r)return i("div",{class:"mt valve-section",children:[i("h4",{children:"Valves"}),i(P,{kind:"error",message:r}),i("div",{class:"form-actions",children:i(N,{onClick:n,children:"Retry"})})]});if(!t)return i("div",{class:"mt valve-section",children:[i("h4",{children:"Valves"}),i("p",{class:"muted",children:"Loading valves…"})]});const h=t.map((v,y)=>({valve:v,id:y})).filter(v=>v.valve.enabled&&v.valve.roomID===e),f=t.findIndex(v=>!v.enabled),l=new Set(t.filter(v=>v.enabled).map(v=>v.channel));let p=m.valve.channelMin;for(;p<=m.valve.channelMax&&l.has(p);)p+=1;return p>m.valve.channelMax&&(p=m.valve.channelMin),i("div",{class:"mt valve-section",children:[i("h4",{children:"Valves"}),d?i(P,{kind:"success",message:d,onClose:()=>u(null)}):null,h.length===0?i("p",{class:"muted",children:"No valves bound."}):i("ul",{class:"valve-list",children:h.map(({valve:v,id:y})=>{const b=new Set(t.filter((g,_)=>g.enabled&&_!==y).map(g=>g.channel));return i(Ks,{id:y,valve:v,onSaved:s,onNotice:g=>u(g),takenChannels:b},y)})}),f>=0?o?i(Qs,{slot:f,roomSlot:e,suggestedChannel:p,takenChannels:l,onAdded:c,onCancel:()=>a(!1)}):i("div",{class:"form-actions",children:i(N,{onClick:()=>a(!0),children:"Add valve"})}):i("p",{class:"muted",children:"All 9 valve slots are in use."})]})}function Gs(e){if(e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function Ur(e){return Object.keys(e).length>0}function Fr(e){const t={};e.name.trim().length===0?t.name="Name is required.":e.name.length>m.room.nameMax&&(t.name=`At most ${m.room.nameMax} characters.`);const r=[["mqttCommandTopic",e.mqttCommandTopic,"Command topic",m.room.topicMax],["mqttStateTopic",e.mqttStateTopic,"State topic",m.room.topicMax],["mqttTemperatureSensorTopic",e.mqttTemperatureSensorTopic,"Temperature topic",m.room.topicMax]];for(const[s,o,a,d]of r)o.trim().length===0?t[s]=`${a} is required.`:o.length>d&&(t[s]=`At most ${d} characters.`);e.mqttTemperatureSensorField.trim().length>m.room.temperatureFieldMax&&(t.mqttTemperatureSensorField=`At most ${m.room.temperatureFieldMax} characters.`);const n=[["kP",e.kP,"kP"],["kI",e.kI,"kI"],["kD",e.kD,"kD"]];for(const[s,o,a]of n){const d=Gs(o);(d===null||d<m.room.pidMin||d>1e6)&&(t[s]=`${a} must be a number greater than or equal to ${m.room.pidMin} and at most 1000000.`)}return t}function Jt(e,t){const r=e.name||`Room ${t+1}`,n=e.mqttCommandTopic||`prometey/room${t}/set`,s=e.mqttStateTopic||`prometey/room${t}/state`,o=e.mqttTemperatureSensorTopic||`prometey/room${t}/temperature`,a=e.mqttTemperatureSensorField;return{usedPlaceholders:(e.name||"").trim().length===0||(e.mqttCommandTopic||"").trim().length===0||(e.mqttStateTopic||"").trim().length===0||(e.mqttTemperatureSensorTopic||"").trim().length===0,form:{enabled:e.enabled,name:r,mqttCommandTopic:n,mqttStateTopic:s,mqttTemperatureSensorTopic:o,mqttTemperatureSensorField:a,kP:String(e.kP),kI:String(e.kI),kD:String(e.kD)}}}function Ys(e){return{enabled:!0,name:`Room ${e+1}`,mqttCommandTopic:`prometey/room${e}/set`,mqttStateTopic:`prometey/room${e}/state`,mqttTemperatureSensorTopic:`prometey/room${e}/temperature`,mqttTemperatureSensorField:"",kP:"1",kI:"0.01",kD:"0"}}function Xs(e,t,r){return{id:t,enabled:r,temperatureSensorType:m.room.savableTemperatureSensorTypes[0],name:e.name,mqttCommandTopic:e.mqttCommandTopic,mqttStateTopic:e.mqttStateTopic,mqttTemperatureSensorTopic:e.mqttTemperatureSensorTopic,mqttTemperatureSensorField:e.mqttTemperatureSensorField,kP:e.kP,kI:e.kI,kD:e.kD}}function Zs({slot:e,room:t,valves:r,valvesError:n,onRetryValves:s,onValveSaved:o,onSaved:a,onDeleted:d}){const[u,c]=w(!1),[h,f]=w(()=>Jt(t,e).form),[l,p]=w(!1),[v,y]=w({}),[b,g]=w(!1),[_,C]=w(!1),[T,$]=w(null),[q,S]=w(null),[R,x]=w(null),k=I=>f(z=>({...z,...I})),H=()=>{if(!u){const I=Jt(t,e);f(I.form),p(I.usedPlaceholders),y({}),$(null),S(null)}c(I=>!I)},ke=async I=>{I.preventDefault();const z=Fr(h);if(y(z),$(null),S(null),!Ur(z)){g(!0);try{const ae=await ht({id:e,enabled:h.enabled,temperatureSensorType:m.room.savableTemperatureSensorTypes[0],name:h.name,mqttCommandTopic:h.mqttCommandTopic,mqttStateTopic:h.mqttStateTopic,mqttTemperatureSensorTopic:h.mqttTemperatureSensorTopic,mqttTemperatureSensorField:h.mqttTemperatureSensorField,kP:Number(h.kP),kI:Number(h.kI),kD:Number(h.kD)});g(!1),ae.ok?($("Room saved to flash."),p(!1),a(e,{...t,id:e,enabled:h.enabled,name:h.name,mqttCommandTopic:h.mqttCommandTopic,mqttStateTopic:h.mqttStateTopic,mqttTemperatureSensorTopic:h.mqttTemperatureSensorTopic,mqttTemperatureSensorField:h.mqttTemperatureSensorField,kP:Number(h.kP),kI:Number(h.kI),kD:Number(h.kD)})):S(ae.message)}catch(ae){g(!1),S(ae instanceof Error?ae.message:String(ae))}}},Ae=async()=>{if(window.confirm(`Delete room "${t.name||`slot ${e}`}"? This sets enabled=false and keeps the stored config; the DEVICE WILL NEED A REBOOT for heating control to stop.`)){x(null),C(!0);try{const z=await ht(Xs(t,e,!1));C(!1),z.ok?d(e):x(z.message)}catch(z){C(!1),x(z instanceof Error?z.message:String(z))}}},V=[];t.I!==void 0&&V.push(["PID I (runtime)",String(t.I)]),t.prevError!==void 0&&V.push(["prevError (runtime)",String(t.prevError)]),t.valveOpeningPercent!==void 0&&V.push(["Valve opening",`${t.valveOpeningPercent}%`]),t.prevTime!==void 0&&V.push(["prevTime (raw)",String(t.prevTime)]);const et=r?r.filter(I=>I.enabled&&I.roomID===e).length:null;return i(W,{class:"room-card",children:[i("div",{class:"card-header",children:[i("h3",{children:[t.name||`Room ${e+1}`," ",i("span",{class:"badge badge-slot",children:["slot ",e]})]}),et!==null?i("span",{class:"muted",children:[et," valve",et===1?"":"s"," bound"]}):null]}),t.id!==e?i(P,{kind:"info",message:`Stored id is ${t.id} but this entry sits in slot ${e}; saving rewrites slot ${e} and normalizes the id.`}):null,i("dl",{class:"kv",children:[t.id!==e?i(B,{children:[i("dt",{children:"Stored id"}),i("dd",{children:t.id})]}):null,i("dt",{children:"Command topic"}),i("dd",{children:t.mqttCommandTopic||i("span",{class:"muted",children:"(empty)"})}),i("dt",{children:"State topic"}),i("dd",{children:t.mqttStateTopic||i("span",{class:"muted",children:"(empty)"})}),i("dt",{children:"Temperature topic"}),i("dd",{children:t.mqttTemperatureSensorTopic||i("span",{class:"muted",children:"(empty)"})}),i("dt",{children:"Temperature field"}),i("dd",{children:t.mqttTemperatureSensorField||i("span",{class:"muted",children:"(empty)"})}),i("dt",{children:"kP / kI / kD"}),i("dd",{children:[t.kP," / ",t.kI," / ",t.kD]}),V.map(([I,z])=>i(B,{children:[i("dt",{children:I}),i("dd",{children:z})]},I))]}),i("div",{class:"form-actions",children:[i(N,{onClick:H,disabled:b||_,children:u?"Close editor":"Edit room"}),i(Ye,{onClick:()=>{Ae()},disabled:_||b,children:_?"Deleting…":"Delete room"})]}),R?i(P,{kind:"error",message:R,onClose:()=>x(null)}):null,u?i("div",{class:"room-editor",children:[i("form",{onSubmit:ke,children:[l?i(P,{kind:"info",message:"This room had empty required fields; suggested defaults were prefilled. Review and adjust before saving."}):null,i(A,{label:"Room id",value:e,disabled:!0,help:"Fixed slot index; the device writes to this position."}),i(Re,{label:"Temperature sensor type",value:m.room.savableTemperatureSensorTypes[0],disabled:!0,options:[{value:"1",label:"MQTT (1)"}],help:"Only MQTT is accepted by the firmware, even for disabled rooms."}),i(A,{label:"Name",value:h.name,onInput:I=>k({name:I}),maxLength:m.room.nameMax,error:v.name,autoComplete:"off"}),i(A,{label:"Command topic",value:h.mqttCommandTopic,onInput:I=>k({mqttCommandTopic:I}),maxLength:m.room.topicMax,error:v.mqttCommandTopic,autoComplete:"off"}),i(A,{label:"State topic",value:h.mqttStateTopic,onInput:I=>k({mqttStateTopic:I}),maxLength:m.room.topicMax,error:v.mqttStateTopic,autoComplete:"off"}),i(A,{label:"Temperature topic",value:h.mqttTemperatureSensorTopic,onInput:I=>k({mqttTemperatureSensorTopic:I}),maxLength:m.room.topicMax,error:v.mqttTemperatureSensorTopic,autoComplete:"off"}),i(A,{label:"Temperature field",value:h.mqttTemperatureSensorField,onInput:I=>k({mqttTemperatureSensorField:I}),placeholder:"value",maxLength:m.room.temperatureFieldMax,error:v.mqttTemperatureSensorField,help:"Optional; leave empty if the message payload is a bare number (parsed as float, not JSON).",autoComplete:"off"}),i(A,{label:"kP",value:h.kP,onInput:I=>k({kP:I}),type:"number",min:m.room.pidMin,step:.1,error:v.kP}),i(A,{label:"kI",value:h.kI,onInput:I=>k({kI:I}),type:"number",min:m.room.pidMin,step:.1,error:v.kI}),i(A,{label:"kD",value:h.kD,onInput:I=>k({kD:I}),type:"number",min:m.room.pidMin,step:.1,error:v.kD}),T?i(P,{kind:"success",message:T,onClose:()=>$(null)}):null,q?i(P,{kind:"error",message:q,onClose:()=>S(null)}):null,i(me,{}),i("div",{class:"form-actions",children:i(N,{type:"submit",variant:"primary",disabled:b||_,children:b?"Saving…":`Save room ${e}`})})]}),i(Js,{roomSlot:e,valves:r,valvesError:n,onRetry:s,onSaved:o})]}):null]})}function Gt({freeSlot:e,onAdded:t,onCancel:r}){const[n,s]=w(()=>Ys(e)),[o,a]=w({}),[d,u]=w(!1),[c,h]=w(null),f=p=>s(v=>({...v,...p}));return i("form",{onSubmit:async p=>{p.preventDefault();const v=Fr(n);if(a(v),h(null),Ur(v))return;const y=Number(n.kP),b=Number(n.kI),g=Number(n.kD);u(!0);try{const _=await ht({id:e,enabled:!0,temperatureSensorType:m.room.savableTemperatureSensorTypes[0],name:n.name,mqttCommandTopic:n.mqttCommandTopic,mqttStateTopic:n.mqttStateTopic,mqttTemperatureSensorTopic:n.mqttTemperatureSensorTopic,mqttTemperatureSensorField:n.mqttTemperatureSensorField,kP:y,kI:b,kD:g});u(!1),_.ok?t(e,{id:e,enabled:!0,temperatureSensorType:m.room.savableTemperatureSensorTypes[0],name:n.name,mqttCommandTopic:n.mqttCommandTopic,mqttStateTopic:n.mqttStateTopic,mqttTemperatureSensorTopic:n.mqttTemperatureSensorTopic,mqttTemperatureSensorField:n.mqttTemperatureSensorField,kP:y,kI:b,kD:g}):h(_.message)}catch(_){u(!1),h(_ instanceof Error?_.message:String(_))}},children:[i(P,{kind:"info",message:`Suggested defaults for slot ${e} are prefilled. Review and adjust before adding.`}),i(A,{label:"Room id",value:e,disabled:!0,help:"Lowest free slot; the device writes to this position."}),i(A,{label:"Name",value:n.name,onInput:p=>f({name:p}),maxLength:m.room.nameMax,error:o.name,autoComplete:"off"}),i(A,{label:"Command topic",value:n.mqttCommandTopic,onInput:p=>f({mqttCommandTopic:p}),maxLength:m.room.topicMax,error:o.mqttCommandTopic,autoComplete:"off"}),i(A,{label:"State topic",value:n.mqttStateTopic,onInput:p=>f({mqttStateTopic:p}),maxLength:m.room.topicMax,error:o.mqttStateTopic,autoComplete:"off"}),i(A,{label:"Temperature topic",value:n.mqttTemperatureSensorTopic,onInput:p=>f({mqttTemperatureSensorTopic:p}),maxLength:m.room.topicMax,error:o.mqttTemperatureSensorTopic,autoComplete:"off"}),i(A,{label:"Temperature field",value:n.mqttTemperatureSensorField,onInput:p=>f({mqttTemperatureSensorField:p}),placeholder:"value",maxLength:m.room.temperatureFieldMax,error:o.mqttTemperatureSensorField,help:"Optional; leave empty if the message payload is a bare number (parsed as float, not JSON).",autoComplete:"off"}),i(A,{label:"kP",value:n.kP,onInput:p=>f({kP:p}),type:"number",min:m.room.pidMin,step:.1,error:o.kP,help:"Suggested starting value."}),i(A,{label:"kI",value:n.kI,onInput:p=>f({kI:p}),type:"number",min:m.room.pidMin,step:.01,error:o.kI,help:"Suggested starting value."}),i(A,{label:"kD",value:n.kD,onInput:p=>f({kD:p}),type:"number",min:m.room.pidMin,step:.1,error:o.kD,help:"Suggested starting value."}),c?i(P,{kind:"error",message:c,onClose:()=>h(null)}):null,i(me,{}),i("div",{class:"form-actions",children:[i(N,{type:"submit",variant:"primary",disabled:d,children:d?"Adding…":`Add room ${e}`}),i(N,{onClick:r,disabled:d,children:"Cancel"})]})]})}function en(){const[e,t]=w(null),[r,n]=w(!1),[s,o]=w(null),[a,d]=w(null),[u,c]=w(null),[h,f]=w(!1),[l,p]=w(null),v=O(async()=>{o(null);const S=await ds();S.ok?Array.isArray(S.data.rooms)?t(S.data.rooms):o("Device returned an unexpected rooms payload."):o(S.message),n(!0)},[]),y=O(async()=>{c(null);const S=await cs();S.ok?Array.isArray(S.data.valves)?d(S.data.valves):c("Device returned an unexpected valves payload."):c(S.message)},[]);ne(()=>{v(),y()},[v,y]);const b=O((S,R)=>{t(x=>x&&x.map((k,H)=>H===S?R:k))},[]),g=O((S,R)=>{d(x=>x&&x.map((k,H)=>H===S?R:k))},[]),_=O((S,R)=>{t(x=>x&&x.map((k,H)=>H===S?R:k)),f(!1),p("Room added. Reboot to apply.")},[]),C=O(S=>{t(R=>R&&R.map((x,k)=>k===S?{...x,id:S,enabled:!1}:x)),p("Room removed from heating. Reboot to apply.")},[]);if(!r)return i(W,{title:"Rooms",children:i("p",{class:"muted",children:"Loading rooms…"})});const T=(e??[]).map((S,R)=>({room:S,slot:R})).filter(S=>S.room.enabled),$=e?e.findIndex(S=>!S.enabled):-1,q=$>=0?i(W,{title:"Add room",children:h?i(Gt,{freeSlot:$,onAdded:_,onCancel:()=>f(!1)},$):i("div",{class:"form-actions",children:i(N,{variant:"primary",onClick:()=>f(!0),children:"Add room"})})}):i(W,{title:"Add room",children:i("p",{class:"muted",children:"All 8 room slots are in use. Disable a room before adding another."})});return i("div",{class:"stack",children:s?i(W,{title:"Rooms",children:[i(P,{kind:"error",message:s}),i("div",{class:"form-actions",children:i(N,{onClick:()=>{v()},children:"Retry"})})]}):e?i(B,{children:[l?i(P,{kind:"info",message:l,onClose:()=>p(null)}):null,T.length===0?i(W,{title:"Rooms",children:h&&$>=0?i(Gt,{freeSlot:$,onAdded:_,onCancel:()=>f(!1)},$):i(B,{children:[i("p",{class:"muted",children:"No rooms are enabled yet. Add a room to start controlling heating."}),$>=0?i("div",{class:"form-actions",children:i(N,{variant:"primary",onClick:()=>f(!0),children:"Add room"})}):i("p",{class:"muted",children:"All 8 room slots are in use. Disable a room before adding another."})]})}):i(B,{children:[T.map(({room:S,slot:R})=>i(Zs,{slot:R,room:S,valves:a,valvesError:u,onRetryValves:()=>{y()},onValveSaved:g,onSaved:b,onDeleted:C},R)),q]})]}):null})}const tn=16384,rn="Uploading this archive REPLACES config.bin, boiler state and room states on the device AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?",sn="Uploading REPLACES /config.bin on the device AND REBOOTS IT IMMEDIATELY. Unsaved in-RAM settings will be lost. The device will be offline 20-60 seconds. Continue?";function ot(e){const t=e.toLowerCase();return t.endsWith(".zip")?"zip":t.endsWith(".bin")?"bin":null}function Yt(e,t){const r=new ArrayBuffer(e.byteLength);new Uint8Array(r).set(e);const n=new Blob([r],{type:"application/octet-stream"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=t,document.body.appendChild(o),o.click(),o.remove(),window.setTimeout(()=>URL.revokeObjectURL(s),0)}function nn(){const e=Ve(),t=St(null),[r,n]=w(!1),[s,o]=w(null),[a,d]=w(null),[u,c]=w(null),[h,f]=w(!1),[l,p]=w(null),v=Pr(),y=h||v.phase!=="idle",b=O(async()=>{n(!0),o(null);const T=await ms();if(n(!1),!T.ok){o({kind:"error",message:T.message});return}Yt(T.data,"prometey-config.zip"),o({kind:"info",message:"Full backup downloaded as prometey-config.zip. It contains config.bin + boiler state + room states (8). It contains your Wi-Fi and MQTT credentials in plaintext — store it safely."})},[]),g=O(async()=>{n(!0),o(null);const T=await ps();if(n(!1),!T.ok){o({kind:"error",message:T.message});return}Yt(T.data,"config.bin"),o({kind:"info",message:"Config downloaded as config.bin. It contains your Wi-Fi and MQTT credentials in plaintext — store it safely."})},[]),_=O(T=>{const $=T.files&&T.files[0]?T.files[0]:null;if(d($),p(null),!$){c(null);return}if($.size===0){c("The selected file is empty.");return}if($.size>tn){c("This does not look like a Prometey backup file (max 16 KB).");return}if(!ot($.name)){c("Unsupported file type. Choose a .zip full backup or a .bin config file.");return}c(null)},[]),C=O(async()=>{if(!a||u)return;const T=ot(a.name);if(!T){p("Unsupported file type. Choose a .zip full backup or a .bin config file.");return}if(window.confirm(T==="zip"?rn:sn)){f(!0),p(null);try{const q=new Uint8Array(await a.arrayBuffer()),S=T==="zip"?await gs(q):await vs(q);S.ok?(t.current&&(t.current.value=""),d(null),c(null),v.start()):p(S.message)}catch(q){p(q instanceof Error?q.message:"Could not read the selected backup file.")}finally{f(!1)}}},[a,u,v.start]);return i("div",{class:"stack",children:[i(P,{kind:"info",message:"Download the FULL BACKUP zip before uploading the web UI: filesystem uploads (pio run -e kc868a16 -t uploadfs) ERASE LittleFS, so /config.bin, /boiler.bin and every /room_*.bin are gone."}),i(W,{title:"Download backup",children:[i("p",{class:"muted",children:"Download a zip of everything the device has stored: config.bin + boiler state + room states (8). It contains your Wi-Fi and MQTT credentials in plaintext, so keep the archive somewhere safe."}),s?i(P,{kind:s.kind,message:s.message,onClose:()=>o(null)}):null,i("div",{class:"form-actions",children:[i(N,{variant:"primary",onClick:()=>{b()},disabled:r||v.phase!=="idle",children:r?"Downloading…":"Download full backup (.zip)"}),i(N,{onClick:()=>{g()},disabled:r||v.phase!=="idle",children:"Download config.bin only"})]})]}),i(W,{title:"Restore from file",class:"danger-zone",children:[i("p",{class:"muted",children:"Restore a previously downloaded .zip full backup, or a single .bin config file. The device validates size, version and CRC and, for a full archive, commits all members atomically before rebooting. A rejected file changes nothing: size/version/CRC errors mean the file did not match this firmware."}),i("label",{class:"field",for:e,children:[i("span",{class:"field-label",children:"Backup file"}),i("input",{id:e,ref:t,type:"file",accept:".zip,.bin,application/octet-stream",disabled:y,onChange:T=>_(T.currentTarget)}),u?i("span",{class:"field-error",children:u}):null]}),a&&!u?i("p",{class:"muted",children:["Selected: ",a.name," (",a.size," bytes)",ot(a.name)==="zip"?" — full backup (all files)":" — config.bin only"]}):null,l?i(P,{kind:"error",message:l,onClose:()=>p(null)}):null,i("div",{class:"form-actions",children:i(Ye,{onClick:()=>{C()},disabled:!a||!!u||y,children:h?"Uploading…":"Upload & reboot device"})})]}),i(Cr,{flow:v})]})}function on(){const e=St(null);return ne(()=>{const t=document.createElement("edn-network-page");return e.current?.append(t),()=>t.remove()},[]),i("div",{ref:e})}const an=[{id:"status",label:"Status"},{id:"connections",label:"MQTT"},{id:"network",label:"Network"},{id:"boiler",label:"Boiler"},{id:"rooms",label:"Rooms"},{id:"backup",label:"Backup"}];function ln(e){switch(e){case"status":return i(ks,{});case"connections":return i(Es,{});case"network":return i(on,{});case"boiler":return i(zs,{});case"rooms":return i(en,{});case"backup":return i(nn,{})}}function dn(){const[e,t]=w("status");return i(B,{children:[i("header",{class:"app-header",children:[i("div",{class:"brand",children:[i("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:[i("path",{fill:"currentColor",d:"M12 23c4.4 0 7.5-2.7 7.5-6.7 0-2.3-1-4.3-2.3-6.1-.8 1.6-1.8 2.6-2.9 3.3.4-1.4.2-3.1-.7-5C12.7 6.1 11.3 4.3 10.4 2c-.3 2.3-1.4 4-2.7 5.5C6.4 9.1 4.5 11 4.5 15c0 4 3.1 8 7.5 8z"}),i("path",{fill:"currentColor",opacity:".45",d:"M12 21.2c-1.6 0-2.8-1.1-2.8-2.8 0-1.3.7-2.1 1.5-3 .3.7.8 1.1 1.4 1.4-.2-1.2.1-2.4 1-3.5.9 1.2 1.4 2.6 1.4 4 0 2.3-1.4 3.9-2.5 3.9z"})]}),i("h1",{children:"Prometey"})]}),i("span",{class:"hint",children:"offline device panel"})]}),i(os,{tabs:an,active:e,onSelect:t}),i("main",{class:"tab-content",id:`panel-${e}`,role:"tabpanel","aria-labelledby":`tab-${e}`,children:ln(e)})]})}function cn(e){if(e&&typeof e=="object"&&"error"in e){let t=e.error;if(typeof t=="string"&&t.length>0)return t}}function Or(e={}){let t=e.baseUrl??"",r=e.headers??{};async function n(s,o){let a;try{a=await fetch(`${t}${s}`,{...o,headers:{Accept:"application/json",...o?.body===void 0?{}:{"Content-Type":"application/json"},...r}})}catch(h){return o?.signal?.aborted===!0||typeof h=="object"&&h&&h.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let d=await a.text().catch(()=>""),u,c=!1;if(d.length>0)try{u=JSON.parse(d),c=!0}catch{c=!1}if(!a.ok){let h=cn(u);return{ok:!1,status:a.status,message:h??`Request failed with HTTP ${a.status}.`}}return c?{ok:!0,data:u}:{ok:!1,status:a.status,message:`Unexpected response from server (HTTP ${a.status}).`}}return{getSettings(s){return n("/api/network/settings",{signal:s})},saveSettings(s,o){return n("/api/network/settings",{method:"POST",body:JSON.stringify(s),signal:o})},getStatus(s){return n("/api/network/status",{signal:s})},wifiList(s){return n("/api/wifi/list",{signal:s})}}}var Ue=globalThis,kt=Ue.ShadowRoot&&(Ue.ShadyCSS===void 0||Ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,At=Symbol(),Xt=new WeakMap,Lr=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==At)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(kt&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=Xt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Xt.set(t,e))}return e}toString(){return this.cssText}},un=e=>new Lr(typeof e=="string"?e:e+"",void 0,At),Mt=(e,...t)=>new Lr(e.length===1?e[0]:t.reduce((r,n,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]),e,At),hn=(e,t)=>{if(kt)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of t){let n=document.createElement("style"),s=Ue.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=r.cssText,e.appendChild(n)}},Zt=kt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let n of t.cssRules)r+=n.cssText;return un(r)})(e):e,{is:pn,defineProperty:mn,getOwnPropertyDescriptor:fn,getOwnPropertyNames:_n,getOwnPropertySymbols:vn,getPrototypeOf:gn}=Object,Xe=globalThis,er=Xe.trustedTypes,bn=er?er.emptyScript:"",wn=Xe.reactiveElementPolyfillSupport,we=(e,t)=>e,_t={toAttribute(e,t){switch(t){case Boolean:e=e?bn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Hr=(e,t)=>!pn(e,t),tr={attribute:!0,type:String,converter:_t,reflect:!1,useDefault:!1,hasChanged:Hr};Symbol.metadata??=Symbol("metadata"),Xe.litPropertyMetadata??=new WeakMap;var de=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=tr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(e,r,t);n!==void 0&&mn(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){let{get:n,set:s}=fn(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:n,set(o){let a=n?.call(this);s?.call(this,o),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tr}static _$Ei(){if(this.hasOwnProperty(we("elementProperties")))return;let e=gn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(we("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(we("properties"))){let t=this.properties,r=[..._n(t),...vn(t)];for(let n of r)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,n]of t)this.elementProperties.set(r,n)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let n=this._$Eu(t,r);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let n of r)t.unshift(Zt(n))}else e!==void 0&&t.push(Zt(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return hn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){let s=(r.converter?.toAttribute===void 0?_t:r.converter).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(e,t){let r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let s=r.getPropertyOptions(n),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute===void 0?_t:s.converter;this._$Em=n;let a=o.fromAttribute(t,s.type);this[n]=a??this._$Ej?.get(n)??a,this._$Em=null}}requestUpdate(e,t,r,n=!1,s){if(e!==void 0){let o=this.constructor;if(n===!1&&(s=this[e]),r??=o.getPropertyOptions(e),!((r.hasChanged??Hr)(s,t)||r.useDefault&&r.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:n,wrapped:s},o){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),s!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[n,s]of r){let{wrapped:o}=s,a=this[n];o!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,s,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};de.elementStyles=[],de.shadowRootOptions={mode:"open"},de[we("elementProperties")]=new Map,de[we("finalized")]=new Map,wn?.({ReactiveElement:de}),(Xe.reactiveElementVersions??=[]).push("2.1.2");var xt=globalThis,rr=e=>e,He=xt.trustedTypes,sr=He?He.createPolicy("lit-html",{createHTML:e=>e}):void 0,Br="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,Wr="?"+G,yn=`<${Wr}>`,ie=document,Se=()=>ie.createComment(""),Te=e=>e===null||typeof e!="object"&&typeof e!="function",Pt=Array.isArray,Sn=e=>Pt(e)||typeof e?.[Symbol.iterator]=="function",at=`[ 	
\f\r]`,fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nr=/-->/g,ir=/>/g,Y=RegExp(`>|${at}(?:([^\\s"'>=/]+)(${at}*=${at}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),or=/'/g,ar=/"/g,zr=/^(?:script|style|textarea|title)$/i,M=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),he=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),lr=new WeakMap,X=ie.createTreeWalker(ie,129);function jr(e,t){if(!Pt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return sr===void 0?t:sr.createHTML(t)}var Tn=(e,t)=>{let r=e.length-1,n=[],s,o=t===2?"<svg>":t===3?"<math>":"",a=fe;for(let d=0;d<r;d++){let u=e[d],c,h,f=-1,l=0;for(;l<u.length&&(a.lastIndex=l,h=a.exec(u),h!==null);)l=a.lastIndex,a===fe?h[1]==="!--"?a=nr:h[1]===void 0?h[2]===void 0?h[3]!==void 0&&(a=Y):(zr.test(h[2])&&(s=RegExp("</"+h[2],"g")),a=Y):a=ir:a===Y?h[0]===">"?(a=s??fe,f=-1):h[1]===void 0?f=-2:(f=a.lastIndex-h[2].length,c=h[1],a=h[3]===void 0?Y:h[3]==='"'?ar:or):a===ar||a===or?a=Y:a===nr||a===ir?a=fe:(a=Y,s=void 0);let p=a===Y&&e[d+1].startsWith("/>")?" ":"";o+=a===fe?u+yn:f>=0?(n.push(c),u.slice(0,f)+Br+u.slice(f)+G+p):u+G+(f===-2?d:p)}return[jr(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},vt=class Vr{constructor({strings:t,_$litType$:r},n){let s;this.parts=[];let o=0,a=0,d=t.length-1,u=this.parts,[c,h]=Tn(t,r);if(this.el=Vr.createElement(c,n),X.currentNode=this.el.content,r===2||r===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=X.nextNode())!==null&&u.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(let f of s.getAttributeNames())if(f.endsWith(Br)){let l=h[a++],p=s.getAttribute(f).split(G),v=/([.?@])?(.*)/.exec(l);u.push({type:1,index:o,name:v[2],strings:p,ctor:v[1]==="."?kn:v[1]==="?"?An:v[1]==="@"?Mn:Ze}),s.removeAttribute(f)}else f.startsWith(G)&&(u.push({type:6,index:o}),s.removeAttribute(f));if(zr.test(s.tagName)){let f=s.textContent.split(G),l=f.length-1;if(l>0){s.textContent=He?He.emptyScript:"";for(let p=0;p<l;p++)s.append(f[p],Se()),X.nextNode(),u.push({type:2,index:++o});s.append(f[l],Se())}}}else if(s.nodeType===8)if(s.data===Wr)u.push({type:2,index:o});else{let f=-1;for(;(f=s.data.indexOf(G,f+1))!==-1;)u.push({type:7,index:o}),f+=G.length-1}o++}}static createElement(t,r){let n=ie.createElement("template");return n.innerHTML=t,n}};function pe(e,t,r=e,n){if(t===he)return t;let s=n===void 0?r._$Cl:r._$Co?.[n],o=Te(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(e),s._$AT(e,r,n)),n===void 0?r._$Cl=s:(r._$Co??=[])[n]=s),s!==void 0&&(t=pe(e,s._$AS(e,t.values),s,n)),t}var $n=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??ie).importNode(t,!0);X.currentNode=n;let s=X.nextNode(),o=0,a=0,d=r[0];for(;d!==void 0;){if(o===d.index){let u;d.type===2?u=new Ct(s,s.nextSibling,this,e):d.type===1?u=new d.ctor(s,d.name,d.strings,this,e):d.type===6&&(u=new xn(s,this,e)),this._$AV.push(u),d=r[++a]}o!==d?.index&&(s=X.nextNode(),o++)}return X.currentNode=ie,n}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(e[t]):(r._$AI(e,r,t),t+=r.strings.length-2)),t++}},Ct=class Kr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,n,s){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=pe(this,t,r),Te(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==he&&this._(t):t._$litType$===void 0?t.nodeType===void 0?Sn(t)?this.k(t):this._(t):this.T(t):this.$(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&Te(this._$AH)?this._$AA.nextSibling.data=t:this.T(ie.createTextNode(t)),this._$AH=t}$(t){let{values:r,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=vt.createElement(jr(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(r);else{let o=new $n(s,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(t){let r=lr.get(t.strings);return r===void 0&&lr.set(t.strings,r=new vt(t)),r}k(t){Pt(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,n,s=0;for(let o of t)s===r.length?r.push(n=new Kr(this.O(Se()),this.O(Se()),this,this.options)):n=r[s],n._$AI(o),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){let n=rr(t).nextSibling;rr(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Ze=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=E}_$AI(e,t=this,r,n){let s=this.strings,o=!1;if(s===void 0)e=pe(this,e,t,0),o=!Te(e)||e!==this._$AH&&e!==he,o&&(this._$AH=e);else{let a=e,d,u;for(e=s[0],d=0;d<s.length-1;d++)u=pe(this,a[r+d],t,d),u===he&&(u=this._$AH[d]),o||=!Te(u)||u!==this._$AH[d],u===E?e=E:e!==E&&(e+=(u??"")+s[d+1]),this._$AH[d]=u}o&&!n&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},kn=class extends Ze{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}},An=class extends Ze{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}},Mn=class extends Ze{constructor(e,t,r,n,s){super(e,t,r,n,s),this.type=5}_$AI(e,t=this){if((e=pe(this,e,t,0)??E)===he)return;let r=this._$AH,n=e===E&&r!==E||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==E&&(r===E||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},xn=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){pe(this,e)}},Pn=xt.litHtmlPolyfillSupport;Pn?.(vt,Ct),(xt.litHtmlVersions??=[]).push("3.3.3");var Cn=(e,t,r)=>{let n=r?.renderBefore??t,s=n._$litPart$;if(s===void 0){let o=r?.renderBefore??null;n._$litPart$=s=new Ct(t.insertBefore(Se(),o),o,void 0,r??{})}return s._$AI(e),s},Et=globalThis,Z=class extends de{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Cn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return he}};Z._$litElement$=!0,Z.finalized=!0,Et.litElementHydrateSupport?.({LitElement:Z});var En=Et.litElementPolyfillSupport;En?.({LitElement:Z}),(Et.litElementVersions??=[]).push("4.2.2");var In={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function qn(e){return e===void 0||Number.isNaN(e)?"Unknown":e>=-55?"Excellent":e>=-67?"Good":e>=-75?"Fair":"Weak"}function Dn(e){return e===1?"Full":e===0?"Half":`Unknown (${e})`}function Nn(e){let t=r=>String(r).padStart(2,"0");return`${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`}var ee,Rn=(ee=class extends Z{constructor(...t){super(...t),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(t){t.has("pollIntervalMs")&&this.startPolling();let r=t.get("baseUrl");t.has("baseUrl")&&r!==void 0&&r!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let t=this.status;return M`
      <div class="card">
        <header class="head">
          ${t?M`<span class="badge badge-${t.mode}">${In[t.mode]}</span>`:M`<span class="badge badge-unknown">Unknown</span>`}
          ${t?M`<span class="state ${t.connected?"state-up":"state-down"}">
                ${t.connected?"Connected":"Disconnected"}
              </span>`:E}
          ${this.loading?M`<span class="muted loading">Refreshing…</span>`:E}
        </header>

        ${t?.fallbackAP?M`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:E}
        ${this.errorMessage?M`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:E}
        ${t?this.renderSections(t):M`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?M`Updated ${Nn(this.lastUpdated)}`:M`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(t){switch(t.mode){case"wifi":return this.renderWifi(t);case"wifi_ap":return this.renderAp(t);case"ethernet":return this.renderEthernet(t)}}renderWifi(t){return M`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",t.ssid)}
          ${this.row("Signal",t.rssi===void 0?void 0:`${t.rssi} dBm (${qn(t.rssi)})`)}
          ${this.row("IP address",t.ip)} ${this.row("MAC address",t.mac)}
        </dl>
      </section>
    `}renderAp(t){let r=t.ap;return M`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",r?.ssid)} ${this.row("IP address",r?.ip)}
          ${this.row("Stations",r?.stations)}
        </dl>
      </section>
    `}renderEthernet(t){let r=t.eth;return M`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",r?.ip)} ${this.row("MAC address",r?.mac)}
          ${this.row("Link",r===void 0?void 0:r.linkUp?"Up":"Down")}
          ${this.row("Speed",r===void 0?void 0:`${r.speed} Mbps`)}
          ${this.row("Duplex",r===void 0?void 0:Dn(r.duplex))}
        </dl>
      </section>
    `}row(t,r){return r===void 0||r===""?E:M`<dt>${t}</dt>
          <dd>${r}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=Or({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let t=++this.refreshSeq;this.loading=!0;let r=await this.ensureClient().getStatus();if(t===this.refreshSeq){if(this.loading=!1,r.ok){this.status=r.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=r.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:r.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let t=Number(this.pollIntervalMs);!Number.isFinite(t)||t<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},t))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},ee.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},ee.styles=Mt`
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
  `,ee);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",Rn);var Ce=32,_e=64,lt=8,Un=5e3,Fn=new TextEncoder;function Ee(e){return Fn.encode(e).length}function dr(e){return e.isAPMode?"ap":"station"}var te,On=(te=class extends Z{constructor(...t){super(...t),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=r=>{this.draftWifiSSID=r.target.value},this.handleWifiPasswordInput=r=>{this.draftWifiPassword=r.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=r=>{this.draftApSSID=r.target.value},this.handleApPasswordInput=r=>{this.draftApPassword=r.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=r=>{this.draftApHasPassword=r.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=r=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=r,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=r=>{r.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(t){let r=t.get("baseUrl");t.has("baseUrl")&&r!==void 0&&r!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let t=this.settings;return M`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?M`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:E}
        ${this.successMessage?M`<div class="banner banner-success" role="status">${this.successMessage}</div>`:E}
        ${t?M`${this.renderForm(t)} ${this.renderScan()}`:this.loading?M`<p class="status">Loading settings…</p>`:M`<p class="status">Settings unavailable.</p>`}
      </div>
    `}renderForm(t){return M`
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

        ${this.draftMode==="station"?this.renderStation(t):this.renderAccessPoint(t)}

        <div class="actions">
          <button class="primary" type="submit" ?disabled=${this.submitting||!this.dirty}>
            ${this.submitting?"Saving…":"Save"}
          </button>
          ${this.dirty?M`<span class="muted">Unsaved changes</span>`:E}
        </div>
      </form>
    `}renderStation(t){return M`
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
            placeholder=${t.hasWifiPassword?"Leave blank to keep saved password":"No password set"}
            .value=${this.draftWifiPassword}
            @input=${this.handleWifiPasswordInput}
          />
        </label>
        ${t.hasWifiPassword?M`<p class="hint">Password saved •••• (leave blank to keep)</p>`:E}
        ${this.renderPasswordClearWarning("wifiPassword")}
        ${this.renderFieldError("wifiPassword")}
      </section>
    `}renderAccessPoint(t){return M`
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
        ${this.draftApHasPassword?M`
              <label>
                Access point password
                <input
                  name="wifiAPPassword"
                  type="password"
                  autocomplete="new-password"
                  placeholder=${t.hasWifiAPPassword?"Leave blank to keep saved password":"At least 8 characters"}
                  .value=${this.draftApPassword}
                  @input=${this.handleApPasswordInput}
                />
              </label>
              ${t.hasWifiAPPassword?M`<p class="hint">Password saved •••• (leave blank to keep)</p>`:E}
              ${this.renderPasswordClearWarning("wifiAPPassword")}
              ${this.renderFieldError("wifiAPPassword")}
            `:E}
      </section>
    `}renderScan(){return M`
      <section class="group">
        <div class="scan-head">
          <h2>Wi-Fi scan</h2>
          <button type="button" @click=${this.handleScan} ?disabled=${this.scanning}>
            ${this.scanning?"Scanning…":"Scan"}
          </button>
        </div>
        ${this.scanError?M`<div class="banner banner-error" role="alert">${this.scanError}</div>`:E}
        ${this.scanResults.length>0?M`<ul class="networks">
              ${this.scanResults.map(t=>this.renderNetwork(t))}
            </ul>`:E}
      </section>
    `}renderNetwork(t){return M`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(t.ssid)}>
          <span class="ssid">${t.ssid}</span>
          <span class="meta">
            ${t.encrypted?M`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:E}
            ${t.rssi} dBm · Ch ${t.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(t){let r=this.fieldErrors[t];return r?M`<p class="field-error" role="alert">${r}</p>`:E}renderPasswordClearWarning(t){return(t==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?M`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:E}get dirty(){let t=this.settings;return t?this.draftMode!==dr(t)||this.draftWifiSSID!==t.wifiSSID||this.draftApSSID!==t.wifiAPSSID||this.draftApHasPassword!==t.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=Or({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let t=++this.loadToken;this.loading=!0;let r=await this.ensureClient().getSettings();if(t!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,r.ok){this.applyServerSettings(r.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=r.message,this.emitError(r.message)}applyServerSettings(t){this.settings=t,this.settingsBaseUrl=this.baseUrl,this.draftMode=dr(t),this.draftWifiSSID=t.wifiSSID,this.draftApSSID=t.wifiAPSSID,this.draftApHasPassword=t.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let t=this.settings,r={};if(!t)return r;let n=this.draftMode==="ap";if(Ee(this.draftWifiSSID)>Ce&&(r.wifiSSID=`Wi-Fi name must be ${Ce} characters or fewer.`),Ee(this.draftApSSID)>Ce&&(r.wifiAPSSID=`Access point name must be ${Ce} characters or fewer.`),n?this.draftApSSID.length===0&&(r.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(r.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&Ee(this.draftWifiPassword)>_e&&(r.wifiPassword=`Wi-Fi password must be ${_e} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let s=Ee(this.draftApPassword);(s<lt||s>_e)&&(r.wifiAPPassword=`Access point password must be ${lt}–${_e} characters.`)}else t.hasWifiAPPassword||(r.wifiAPPassword=`Enter an access point password (${lt}–${_e} characters).`);return r}buildPatch(){let t=this.settings,r={};if(!t)return r;let n=this.draftMode==="ap";return n!==t.isAPMode&&(r.isAPMode=n),this.draftWifiSSID!==t.wifiSSID&&(r.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(r.wifiPassword=this.draftWifiPassword),this.draftApSSID!==t.wifiAPSSID&&(r.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==t.wifiAPHasPassword&&(r.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(r.wifiAPPassword=this.draftApPassword),r}async handleSave(){if(this.submitting||!this.settings)return;let t=this.validate();if(this.fieldErrors=t,Object.keys(t).length>0)return;let r=this.buildPatch();if(Object.keys(r).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let n=await this.ensureClient().saveSettings(r);if(this.submitting=!1,n.ok){this.applyServerSettings(n.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:n.data,bubbles:!0,composed:!0}));return}let s=n.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":n.message;this.errorMessage=s,this.emitError(s)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let t=new AbortController;this.scanController=t;let r,n=new Promise(o=>{r=setTimeout(()=>{t.abort(),o({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},Un)}),s=await Promise.race([this.ensureClient().wifiList(t.signal),n]);if(r!==void 0&&clearTimeout(r),this.scanController===t&&(this.scanController=void 0),this.scanning=!1,s.ok){this.scanResults=[...s.data.networks].sort((o,a)=>a.rssi-o.rssi);return}s.message!=="Request aborted."&&(this.scanError=s.message,this.emitError(s.message))}emitError(t){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:t},bubbles:!0,composed:!0}))}setMode(t){this.draftMode!==t&&(this.draftMode=t,this.fieldErrors={})}},te.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},te.styles=Mt`
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
  `,te);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",On);var Ln=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],re,Hn=(re=class extends Z{constructor(...t){super(...t),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return M`
      <div class="tabs" role="tablist" aria-label="Network">
        ${Ln.map(t=>M`
            <button
              type="button"
              role="tab"
              id="tab-${t.id}"
              aria-controls="panel-${t.id}"
              aria-selected=${this.activeTab===t.id}
              @click=${()=>this.selectTab(t.id)}
            >
              ${t.label}
            </button>
          `)}
      </div>
      <div class="panel" id="panel-${this.activeTab}" role="tabpanel">
        ${this.renderActive()}
      </div>
    `}renderActive(){return this.activeTab==="settings"?M`<edn-network-settings base-url=${this.baseUrl}></edn-network-settings>`:M`
      <edn-network-status
        base-url=${this.baseUrl}
        poll-interval-ms=${this.pollIntervalMs}
      ></edn-network-status>
    `}selectTab(t){this.activeTab!==t&&(this.activeTab=t,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:t},bubbles:!0,composed:!0})))}},re.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},re.styles=Mt`
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
  `,re);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",Hn);const cr=document.getElementById("app");cr&&ts(i(dn,{}),cr);
