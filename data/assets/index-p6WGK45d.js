(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();var ze,N,pr,Y,qt,mr,fr,st,qe,$e,_r,wt,ut,ht,Le={},He=[],Qr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ve=Array.isArray;function J(e,t){for(var r in t)e[r]=t[r];return e}function yt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Gr(e,t,r){var i,s,o,a={};for(o in t)o=="key"?i=t[o]:o=="ref"?s=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?ze.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return Re(e,a,i,s,null)}function Re(e,t,r,i,s){var o={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++pr,__i:-1,__u:0};return s==null&&N.vnode!=null&&N.vnode(o),o}function K(e){return e.children}function Ne(e,t){this.props=e,this.context=t}function ie(e,t){if(t==null)return e.__?ie(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?ie(e):null}function Jr(e){if(e.__P&&e.__d){var t=e.__v,r=t.__e,i=[],s=[],o=J({},t);o.__v=t.__v+1,N.vnode&&N.vnode(o),St(e.__P,o,t,e.__n,e.__P.namespaceURI,32&t.__u?[r]:null,i,r??ie(t),!!(32&t.__u),s),o.__v=t.__v,o.__.__k[o.__i]=o,yr(i,o,s),t.__e=t.__=null,o.__e!=r&&vr(o)}}function vr(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),vr(e)}function Rt(e){(!e.__d&&(e.__d=!0)&&Y.push(e)&&!Be.__r++||qt!=N.debounceRendering)&&((qt=N.debounceRendering)||mr)(Be)}function Be(){try{for(var e,t=1;Y.length;)Y.length>t&&Y.sort(fr),e=Y.shift(),t=Y.length,Jr(e)}finally{Y.length=Be.__r=0}}function gr(e,t,r,i,s,o,a,d,u,c,h){var f,l,p,_,w,y,v=i&&i.__k||He,g=t.length;for(u=Yr(r,t,v,u,g),f=0;f<g;f++)(p=r.__k[f])!=null&&(l=p.__i!=-1&&v[p.__i]||Le,p.__i=f,y=St(e,p,l,s,o,a,d,u,c,h),_=p.__e,p.ref&&l.ref!=p.ref&&(l.ref&&Tt(l.ref,null,p),h.push(p.ref,p.__c||_,p)),w==null&&_!=null&&(w=_),4&p.__u?(u=br(p,u,e),l.__e&&(l.__e=null)):typeof p.type=="function"&&y!==void 0?u=y:_&&(u=_.nextSibling),p.__u&=-7);return r.__e=w,u}function Yr(e,t,r,i,s){var o,a,d,u,c,h=r.length,f=h,l=0;for(e.__k=new Array(s),o=0;o<s;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[o]=Re(null,a,null,null,null):Ve(a)?a=e.__k[o]=Re(K,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[o]=Re(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[o]=a,u=o+l,a.__=e,a.__b=e.__b+1,d=null,(c=a.__i=Xr(a,r,u,f))!=-1&&(f--,(d=r[c])&&(d.__u|=2)),d==null||d.__v==null?(c==-1&&(s>h?l--:s<h&&l++),typeof a.type!="function"&&(a.__u|=4)):c!=u&&(c==u-1?l--:c==u+1?l++:(c>u?l--:l++,a.__u|=4))):e.__k[o]=null;if(f)for(o=0;o<h;o++)(d=r[o])!=null&&(2&d.__u)==0&&(d.__e==i&&(i=ie(d)),Tr(d,d));return i}function br(e,t,r){var i,s;if(typeof e.type=="function"){for(i=e.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=e,t=br(i[s],t,r));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=ie(e)),t=r.insertBefore(e.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Xr(e,t,r,i){var s,o,a,d=e.key,u=e.type,c=t[r],h=c!=null&&(2&c.__u)==0;if(c===null&&d==null||h&&d==c.key&&u==c.type)return r;if(i>(h?1:0)){for(s=r-1,o=r+1;s>=0||o<t.length;)if((c=t[a=s>=0?s--:o++])!=null&&(2&c.__u)==0&&d==c.key&&u==c.type)return a}return-1}function Nt(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Qr.test(t)?r:r+"px"}function Pe(e,t,r,i,s){var o,a;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)r&&t in r||Nt(e.style,t,"");if(r)for(t in r)i&&r[t]==i[t]||Nt(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(_r,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?i?r[$e]=i[$e]:(r[$e]=wt,e.addEventListener(t,o?ht:ut,o)):e.removeEventListener(t,o?ht:ut,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Ut(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t[qe]==null)t[qe]=wt++;else if(t[qe]<r[$e])return;return r(N.event?N.event(t):t)}}}function St(e,t,r,i,s,o,a,d,u,c){var h,f,l,p,_,w,y,v,g,E,$,T,R,F,S,D,x=t.type;if(t.constructor!==void 0)return null;128&r.__u&&(u=!!(32&r.__u),o=[d=t.__e=r.__e]),(h=N.__b)&&h(t);e:if(typeof x=="function"){f=a.length;try{if(g=t.props,E=x.prototype&&x.prototype.render,$=(h=x.contextType)&&i[h.__c],T=h?$?$.props.value:h.__:i,r.__c?v=(l=t.__c=r.__c).__=l.__E:(E?t.__c=l=new x(g,T):(t.__c=l=new Ne(g,T),l.constructor=x,l.render=es),$&&$.sub(l),l.state||(l.state={}),l.__n=i,p=l.__d=!0,l.__h=[],l._sb=[]),E&&l.__s==null&&(l.__s=l.state),E&&x.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=J({},l.__s)),J(l.__s,x.getDerivedStateFromProps(g,l.__s))),_=l.props,w=l.state,l.__v=t,p)E&&x.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),E&&l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(E&&x.getDerivedStateFromProps==null&&g!==_&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(g,T),t.__v==r.__v||!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(g,l.__s,T)===!1){t.__v!=r.__v&&(l.props=g,l.state=l.__s,l.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(W){W&&(W.__=t)}),He.push.apply(l.__h,l._sb),l._sb=[],l.__h.length&&a.push(l),d=ie(r);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(g,l.__s,T),E&&l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(_,w,y)})}if(l.context=T,l.props=g,l.__P=e,l.__e=!1,R=N.__r,F=0,E)l.state=l.__s,l.__d=!1,R&&R(t),h=l.render(l.props,l.state,l.context),He.push.apply(l.__h,l._sb),l._sb=[];else do l.__d=!1,R&&R(t),h=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++F<25);l.state=l.__s,l.getChildContext!=null&&(i=J(J({},i),l.getChildContext())),E&&!p&&l.getSnapshotBeforeUpdate!=null&&(y=l.getSnapshotBeforeUpdate(_,w)),S=h!=null&&h.type===K&&h.key==null?Sr(h.props.children):h,d=gr(e,Ve(S)?S:[S],t,r,i,s,o,a,d,u,c),l.base=t.__e,t.__u&=-161,l.__h.length&&a.push(l),v&&(l.__E=l.__=null)}catch(W){if(a.length=f,t.__v=null,u||o!=null){if(W.then){for(t.__u|=u?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;o!=null&&(o[o.indexOf(d)]=null),t.__e=d}else if(o!=null)for(D=o.length;D--;)yt(o[D])}else t.__e=r.__e;t.__k==null&&(t.__k=r.__k||[]),W.then||wr(t),N.__e(W,t,r)}}else o==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=Zr(r.__e,t,r,i,s,o,a,u,c);return(h=N.diffed)&&h(t),128&t.__u?void 0:d}function wr(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(wr))}function yr(e,t,r){for(var i=0;i<r.length;i++)Tt(r[i],r[++i],r[++i]);N.__c&&N.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(o){o.call(s)})}catch(o){N.__e(o,s.__v)}})}function Sr(e){return typeof e!="object"||e==null||e.__b>0?e:Ve(e)?e.map(Sr):e.constructor!==void 0?null:J({},e)}function Zr(e,t,r,i,s,o,a,d,u){var c,h,f,l,p,_,w,y=r.props||Le,v=t.props,g=t.type;if(g=="svg"?s="http://www.w3.org/2000/svg":g=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(c=0;c<o.length;c++)if((p=o[c])&&"setAttribute"in p==!!g&&(g?p.localName==g:p.nodeType==3)){e=p,o[c]=null;break}}if(e==null){if(g==null)return document.createTextNode(v);e=document.createElementNS(s,g,v.is&&v),d&&(N.__m&&N.__m(t,o),d=!1),o=null}if(g==null)y===v||d&&e.data==v||(e.data=v);else{if(o=g=="textarea"&&v.defaultValue!=null?null:o&&ze.call(e.childNodes),!d&&o!=null)for(y={},c=0;c<e.attributes.length;c++)y[(p=e.attributes[c]).name]=p.value;for(c in y)p=y[c],c=="dangerouslySetInnerHTML"?f=p:c=="children"||c in v||c=="value"&&"defaultValue"in v||c=="checked"&&"defaultChecked"in v||Pe(e,c,null,p,s);for(c in v)p=v[c],c=="children"?l=p:c=="dangerouslySetInnerHTML"?h=p:c=="value"?_=p:c=="checked"?w=p:d&&typeof p!="function"||y[c]===p||Pe(e,c,p,y[c],s);if(h)d||f&&(h.__html==f.__html||h.__html==e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(f&&(e.innerHTML=""),gr(t.type=="template"?e.content:e,Ve(l)?l:[l],t,r,i,g=="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,a,o?o[0]:r.__k&&ie(r,0),d,u),o!=null)for(c=o.length;c--;)yt(o[c]);d&&g!="textarea"||(c="value",g=="progress"&&_==null?e.removeAttribute("value"):_!=null&&(_!==e[c]||g=="progress"&&!_||g=="option"&&_!=y[c])&&Pe(e,c,_,y[c],s),c="checked",w!=null&&w!=e[c]&&Pe(e,c,w,y[c],s))}return e}function Tt(e,t,r){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(s){N.__e(s,r)}}function Tr(e,t,r){var i,s;if(N.unmount&&N.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||Tt(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){N.__e(o,t)}i.base=i.__P=i.__n=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&Tr(i[s],t,r||typeof e.type!="function");r||yt(e.__e),e.__c=e.__=e.__e=void 0}function es(e,t,r){return this.constructor(e,r)}function ts(e,t,r){var i,s,o,a;t==document&&(t=document.documentElement),N.__&&N.__(e,t),s=(i=!1)?null:t.__k,o=[],a=[],St(t,e=t.__k=Gr(K,null,[e]),s||Le,Le,t.namespaceURI,s?null:t.firstChild?ze.call(t.childNodes):null,o,s?s.__e:t.firstChild,i,a),yr(o,e,a),e.props.children=null}ze=He.slice,N={__e:function(e,t,r,i){for(var s,o,a;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),a=s.__d),a)return s.__E=s}catch(d){e=d}throw e}},pr=0,Ne.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=J({},this.state),typeof e=="function"&&(e=e(J({},r),this.props)),e&&J(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Rt(this))},Ne.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Rt(this))},Ne.prototype.render=K,Y=[],mr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,fr=function(e,t){return e.__v.__b-t.__v.__b},Be.__r=0,st=Math.random().toString(8),qe="__d"+st,$e="__a"+st,_r=/(PointerCapture)$|Capture$/i,wt=0,ut=Ut(!1),ht=Ut(!0);var rs=0;function n(e,t,r,i,s,o){t||(t={});var a,d,u=t;if("ref"in u)for(d in u={},t)d=="ref"?a=t[d]:u[d]=t[d];var c={type:e,props:u,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--rs,__i:-1,__u:0,__source:s,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(d in a)u[d]===void 0&&(u[d]=a[d]);return N.vnode&&N.vnode(c),c}var fe,L,nt,Ft,Ae=0,$r=[],B=N,Ot=B.__b,Lt=B.__r,Ht=B.diffed,Bt=B.__c,Wt=B.unmount,zt=B.__;function je(e,t){B.__h&&B.__h(L,e,Ae||t),Ae=0;var r=L.__H||(L.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function b(e){return Ae=1,ss(Ar,e)}function ss(e,t,r){var i=je(fe++,2);if(i.t=e,!i.__c&&(i.__=[Ar(void 0,t),function(d){var u=i.__N?i.__N[0]:i.__[0],c=i.t(u,d);u!==c&&(i.__N=[c,i.__[1]],i.__c.setState({}))}],i.__c=L,!L.__f)){var s=function(d,u,c){if(!i.__c.__H)return!0;var h=!1,f=i.__c.props!==d;if(i.__c.__H.__.some(function(p){if(p.__N){h=!0;var _=p.__[0];p.__=p.__N,p.__N=void 0,_!==p.__[0]&&(f=!0)}}),o){var l=o.call(this,d,u,c);return h?l||f:l}return!h||f};L.__f=!0;var o=L.shouldComponentUpdate,a=L.componentWillUpdate;L.componentWillUpdate=function(d,u,c){if(this.__e){var h=o;o=void 0,s(d,u,c),o=h}a&&a.call(this,d,u,c)},L.shouldComponentUpdate=s}return i.__N||i.__}function oe(e,t){var r=je(fe++,3);!B.__s&&kr(r.__H,t)&&(r.__=e,r.u=t,L.__H.__h.push(r))}function $t(e){return Ae=5,Ke(function(){return{current:e}},[])}function Ke(e,t){var r=je(fe++,7);return kr(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function O(e,t){return Ae=8,Ke(function(){return e},t)}function Qe(){var e=je(fe++,11);if(!e.__){for(var t=L.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var r=t.__m||(t.__m=[0,0]);e.__="P"+r[0]+"-"+r[1]++}return e.__}function ns(){for(var e;e=$r.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Ue),t.__h.some(pt),t.__h=[]}catch(r){t.__h=[],B.__e(r,e.__v)}}}B.__b=function(e){L=null,Ot&&Ot(e)},B.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),zt&&zt(e,t)},B.__r=function(e){Lt&&Lt(e),fe=0;var t=(L=e.__c).__H;t&&(nt===L?(t.__h=[],L.__h=[],t.__.some(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.some(Ue),t.__h.some(pt),t.__h=[],fe=0)),nt=L},B.diffed=function(e){Ht&&Ht(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&($r.push(t)!==1&&Ft===B.requestAnimationFrame||((Ft=B.requestAnimationFrame)||is)(ns)),t.__H.__.some(function(r){r.u&&(r.__H=r.u,r.u=void 0)})),nt=L=null},B.__c=function(e,t){t.some(function(r){try{r.__h.some(Ue),r.__h=r.__h.filter(function(i){return!i.__||pt(i)})}catch(i){t.some(function(s){s.__h&&(s.__h=[])}),t=[],B.__e(i,r.__v)}}),Bt&&Bt(e,t)},B.unmount=function(e){Wt&&Wt(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.some(function(i){try{Ue(i)}catch(s){t=s}}),r.__H=void 0,t&&B.__e(t,r.__v))};var Vt=typeof requestAnimationFrame=="function";function is(e){var t,r=function(){clearTimeout(i),Vt&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(r,35);Vt&&(t=requestAnimationFrame(r))}function Ue(e){var t=L,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),L=t}function pt(e){var t=L;e.__c=e.__(),L=t}function kr(e,t){return!e||e.length!==t.length||t.some(function(r,i){return r!==e[i]})}function Ar(e,t){return typeof t=="function"?t(e):t}function os({tabs:e,active:t,onSelect:r}){return n("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:e.map(i=>n("button",{type:"button",role:"tab",id:`tab-${i.id}`,"aria-selected":i.id===t,"aria-controls":`panel-${i.id}`,class:i.id===t?"active":void 0,onClick:()=>r(i.id),children:i.label},i.id))})}const m={mqtt:{hostMin:1,hostMax:63,loginMax:31,passwordMax:31,haDiscoveryPrefixMin:1,haDiscoveryPrefixMax:63,topicMin:1,topicMax:63},boiler:{topicMax:63,fieldMax:15,savableDrivers:[1],savableOutdoorSensors:[1]},room:{count:8,idMin:0,idMax:7,nameMax:31,topicMax:63,temperatureFieldMax:15,savableTemperatureSensorTypes:[1],pidMin:0},valve:{count:9,idMin:0,idMax:8,channelMin:0,channelMax:15,roomIdMin:0,roomIdMax:7,fullTravelTimeMin:0,fullTravelTimeMax:6e5,windowTimeMin:0,windowTimeMax:6e5,savableTypes:[1]}},Ge="Device returned an empty response (config too large for its 4KB JSON limit — shorten names/topics)",kt="Device returned an empty response.",Je="Could not reach the device. Check that you are connected to its network and try again.",Ce={};function Ye(){return{ok:!1,message:Je}}function Mr(e){try{const t=JSON.parse(e);if(t&&typeof t=="object"&&"message"in t){const r=t.message;if(typeof r=="string"&&r)return r}}catch{}}async function Xe(e){let t=`Request failed (HTTP ${e.status}).`;try{const r=await e.text();r&&(t=Mr(r)??t)}catch{}return{ok:!1,status:e.status,message:t}}async function le(e,t){let r;try{r=await fetch(e,{headers:{Accept:"application/json"}})}catch{return Ye()}if(!r.ok)return Xe(r);let i;try{i=await r.text()}catch{return{ok:!1,status:r.status,message:Je}}if(!i.trim())return{ok:!1,status:r.status,message:t};try{return{ok:!0,data:JSON.parse(i)}}catch{return{ok:!1,status:r.status,message:t}}}async function de(e,t){let r;try{r=await fetch(e,t)}catch{return Ye()}if(!r.ok)return Xe(r);let i="";try{i=await r.text()}catch{return{ok:!0,data:Ce}}if(!i.trim())return{ok:!0,data:Ce};try{const s=JSON.parse(i);return{ok:!0,data:s&&typeof s=="object"?s:Ce}}catch{return{ok:!0,data:Ce}}}function xr(e,t){return de(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()})}function Pr(e,t){return de(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}function Q(e,t,r,i=!1){if(typeof e!="string")throw new Error(`${t} is required.`);if(!i&&e.length===0)throw new Error(`${t} must not be empty.`);if(e.length>r)throw new Error(`${t} must be at most ${r} characters.`);return e}function H(e,t,r,i){if(typeof e!="number"||!Number.isFinite(e))throw new Error(`${t} must be a number.`);if(e<r||e>i)throw new Error(`${t} must be between ${r} and ${i}.`);return e}function At(e,t){if(typeof e!="boolean")throw new Error(`${t} must be true or false.`);return e}function as(){return le("/api/settings",Ge)}function ls(){return le("/api/settings/boiler",Ge)}function ds(){return le("/api/settings/rooms",Ge)}function cs(){return le("/api/settings/valves",Ge)}function us(){return le("/api/status",kt)}function Cr(){return le("/healthcheck/healty",kt)}function hs(){return le("/healthcheck/ready",kt)}async function ps(){let e;try{e=await fetch("/api/config",{headers:{Accept:"application/octet-stream"}})}catch{return Ye()}if(e.status===404)return{ok:!1,status:404,message:"The device has no saved config yet (no /config.bin on flash)."};if(!e.ok)return Xe(e);let t;try{t=new Uint8Array(await e.arrayBuffer())}catch{return{ok:!1,status:e.status,message:Je}}return t.byteLength===0?{ok:!1,status:e.status,message:"Device returned an empty config file."}:{ok:!0,data:t}}async function ms(){let e;try{e=await fetch("/api/config/backup",{headers:{Accept:"application/zip"}})}catch{return Ye()}if(!e.ok){if(e.status===404){let r="Device has no config files yet.";try{const i=await e.text();i&&(r=Mr(i)??r)}catch{}return{ok:!1,status:404,message:r}}return Xe(e)}let t;try{t=new Uint8Array(await e.arrayBuffer())}catch{return{ok:!1,status:e.status,message:Je}}return t.byteLength===0?{ok:!1,status:e.status,message:"Device returned an empty archive."}:{ok:!0,data:t}}function fs(e){const t=Q(e.host,"MQTT host",m.mqtt.hostMax),r=H(e.port,"MQTT port",1,65535),i=Q(e.login,"MQTT login",m.mqtt.loginMax,!0),s=Q(e.password,"MQTT password",m.mqtt.passwordMax,!0),o=Q(e.haDiscoveryPrefix,"HA discovery prefix",m.mqtt.haDiscoveryPrefixMax),a=At(e.mqttIsHADiscovery,"HA discovery flag"),d=Q(e.stateTopic,"State topic",m.mqtt.topicMax),u=Q(e.commandTopic,"Command topic",m.mqtt.topicMax),c=new URLSearchParams;return c.set("host",t),c.set("port",String(r)),c.set("login",i),c.set("password",s),c.set("haDiscoveryPrefix",o),c.set("mqttIsHADiscovery",a?"true":"false"),c.set("stateTopic",d),c.set("commandTopic",u),xr("/api/settings/mqtt",c)}function _s(e){const t=H(e.driver,"Boiler driver",0,1),r=H(e.modbusAddress,"Modbus address",0,255),i=H(e.modbusSpeed,"Modbus speed",0,1e6),s=H(e.K,"Weather curve K",-1e6,1e6),o=H(e.B,"Weather curve B",-1e6,1e6),a=H(e.P,"Weather curve P",-1e6,1e6),d=H(e.I,"Weather curve I",-1e6,1e6),u=H(e.minSetPoint,"Minimum setpoint",30,80);if(t!==1)throw new Error('Boiler driver must be ECTOControlV2 (1); the device rejects "No select".');const c=H(e.outdoorSensor,"Outdoor sensor",0,1);if(c!==1)throw new Error('Outdoor sensor must be MQTT (1); the device rejects "No select".');const h=Q(e.outdoorSensorMqttTopic??"","Outdoor sensor topic",m.boiler.topicMax,!0),f=Q(e.outdoorSensorMqttField??"","Outdoor sensor field",m.boiler.fieldMax,!0);if(c===1&&h.length===0)throw new Error("Outdoor sensor topic is required when MQTT is selected.");if(c===1&&f.length===0)throw new Error("Outdoor sensor field is required when MQTT is selected.");const l=new URLSearchParams;return l.set("driver",String(t)),l.set("modbusAddress",String(r)),l.set("modbusSpeed",String(i)),l.set("K",String(s)),l.set("B",String(o)),l.set("P",String(a)),l.set("I",String(d)),l.set("minSetPoint",String(u)),l.set("outdoorSensor",String(c)),l.set("outdoorSensorMqttTopic",h),l.set("outdoorSensorMqttField",f),xr("/api/settings/boiler/update",l)}function mt(e){const t=H(e.id,"Room id",m.room.idMin,m.room.idMax),r=At(e.enabled,"Room enabled"),i=H(e.temperatureSensorType,"Temperature sensor type",1,1),s=Q(e.name,"Room name",m.room.nameMax),o=Q(e.mqttCommandTopic,"Room command topic",m.room.topicMax),a=Q(e.mqttStateTopic,"Room state topic",m.room.topicMax),d=Q(e.mqttTemperatureSensorTopic,"Temperature topic",m.room.topicMax),u=Q(e.mqttTemperatureSensorField,"Temperature field",m.room.temperatureFieldMax),c=H(e.kP,"Room kP",m.room.pidMin,1e6),h=H(e.kI,"Room kI",m.room.pidMin,1e6),f=H(e.kD,"Room kD",m.room.pidMin,1e6);return Pr("/api/settings/room",{id:t,enabled:r,temperatureSensorType:i,name:s,mqttCommandTopic:o,mqttStateTopic:a,mqttTemperatureSensorTopic:d,mqttTemperatureSensorField:u,kP:c,kI:h,kD:f})}function ft(e){const t=H(e.id,"Valve id",m.valve.idMin,m.valve.idMax),r=At(e.enabled,"Valve enabled"),i=H(e.type,"Valve type",1,1),s=H(e.channel,"Valve channel",m.valve.channelMin,m.valve.channelMax),o=H(e.fullTravelTime,"Full travel time",m.valve.fullTravelTimeMin,m.valve.fullTravelTimeMax),a=H(e.windowTime,"Window time",m.valve.windowTimeMin,m.valve.windowTimeMax),d=H(e.roomID,"Room id",m.valve.roomIdMin,m.valve.roomIdMax);return Pr("/api/settings/valve",{id:t,enabled:r,type:i,channel:s,fullTravelTime:o,windowTime:a,roomID:d})}function vs(e){if(e.byteLength===0)throw new Error("Cannot upload an empty config file.");const t=new ArrayBuffer(e.byteLength);return new Uint8Array(t).set(e),de("/api/config",{method:"POST",headers:{"Content-Type":"application/octet-stream"},body:t})}function gs(e){if(e.byteLength===0)throw new Error("Cannot upload an empty archive.");const t=new ArrayBuffer(e.byteLength);return new Uint8Array(t).set(e),de("/api/config/backup",{method:"POST",headers:{"Content-Type":"application/octet-stream"},body:t})}function bs(){return de("/api/boiler/state",{method:"DELETE"})}function ws(){return de("/api/rooms/state",{method:"DELETE"})}function ys(){return de("/api/reboot",{method:"POST"})}function P({kind:e="info",message:t,onClose:r}){return n("div",{class:`banner banner-${e}`,role:"status",children:[n("span",{children:t}),r?n("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:r,children:"×"}):null]})}function Ss(e){switch(e){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function U({children:e,variant:t="default",type:r="button",disabled:i,title:s,onClick:o}){return n("button",{type:r,class:Ss(t),disabled:i,title:s,onClick:o,children:e})}function ge(e){return n(U,{...e,variant:"danger"})}function j({title:e,children:t,class:r}){return n("section",{class:r?`card ${r}`:"card",children:[e?n("h2",{children:e}):null,t]})}const it=2e3,Ts=12e4;function Ze(){const[e,t]=b("idle"),r=$t(0);oe(()=>{if(e!=="rebooting")return;let a=!1,d;const u=()=>{Cr().then(c=>{if(!a){if(c.ok){t("ready");return}if(r.current+=1,r.current*it>=Ts){t("timeout");return}d=window.setTimeout(u,it)}})};return d=window.setTimeout(u,it),()=>{a=!0,d!==void 0&&window.clearTimeout(d)}},[e]);const i=O(()=>{r.current=0,t("rebooting")},[]),s=O(()=>t("idle"),[]),o=O(()=>{r.current=0,t("rebooting")},[]);return Ke(()=>({phase:e,start:i,dismiss:s,retry:o}),[e,i,s,o])}function et({flow:e}){return e.phase==="idle"?null:n("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:n("div",{class:"reboot-dialog card",children:[n("h2",{children:"Device is rebooting"}),e.phase==="rebooting"?n(K,{children:[n("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),n("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,e.phase==="ready"?n(K,{children:[n(P,{kind:"success",message:"The device is back online."}),n("div",{class:"form-actions",children:n(U,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,e.phase==="timeout"?n(K,{children:[n(P,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),n("div",{class:"form-actions",children:[n(U,{onClick:e.retry,children:"Keep waiting"}),n(U,{onClick:e.dismiss,children:"Dismiss"})]})]}):null]})})}const $s=1e4;function ks(e){const t=Math.max(0,Math.floor(e)),r=Math.floor(t/86400),i=Math.floor(t%86400/3600),s=Math.floor(t%3600/60),o=t%60,a=[];return r&&a.push(`${r}d`),(r||i)&&a.push(`${i}h`),(r||i||s)&&a.push(`${s}m`),a.push(`${o}s`),a.join(" ")}function As(e){return Number.isFinite(e)?`${Math.round(e/1024)} KB (${Math.round(e)} bytes)`:String(e)}function Ms(){const[e,t]=b(null),[r,i]=b(null),[s,o]=b(!1),[a,d]=b(null),[u,c]=b(null),[h,f]=b(!0),[l,p]=b(null),[_,w]=b(!1),y=Ze(),v=O(async()=>{const R=await us();R.ok?(t(R.data),i(null)):i(R.message),o(!0)},[]),g=O(async()=>{f(!0);const[R,F]=await Promise.all([Cr(),hs()]);d(R),c(F),f(!1)},[]);oe(()=>{v();const R=window.setInterval(()=>{v()},$s);return()=>window.clearInterval(R)},[v]),oe(()=>{g()},[g]);const E=O(async()=>{if(!window.confirm("Reboot the device now? Heating control will be offline for about 20-60 seconds."))return;p(null),w(!0);const F=await ys();w(!1),F.ok?y.start():p(F.message)},[y.start]),$=h&&!a?n("p",{class:"muted",children:"Checking device health…"}):a?a.ok?n(P,{kind:a.data.healty?"success":"error",message:a.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):n(P,{kind:"error",message:a.message}):null,T=u?u.ok?n(P,{kind:u.data.ready?"success":"info",message:u.data.ready?"All registered services are ready.":`Not ready: ${u.data.message}`}):u.status===500?n(P,{kind:"info",message:`Not ready: ${u.message}`}):n(P,{kind:"error",message:u.message}):null;return n("div",{class:"stack",children:[n(j,{title:"Device",children:[s?r?n(K,{children:[n(P,{kind:"error",message:r}),n("div",{class:"form-actions",children:n(U,{onClick:()=>{v()},children:"Retry"})})]}):e?n("dl",{class:"kv",children:[n("dt",{children:"Free heap"}),n("dd",{children:As(e.freeHeap)}),n("dt",{children:"Uptime"}),n("dd",{children:ks(e.uptime)}),n("dt",{children:"Last reset reason"}),n("dd",{children:e.lastResetReason})]}):null:n("p",{class:"muted",children:"Loading status…"}),n("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),n(j,{title:"Health",children:[$,T,n("div",{class:"form-actions",children:n(U,{onClick:()=>{g()},disabled:h,children:h?"Checking…":"Refresh health"})})]}),n(j,{title:"Maintenance",children:[n("p",{class:"muted",children:"A reboot briefly interrupts heating control. Configuration changes saved on the other tabs only take effect after a reboot."}),l?n(P,{kind:"error",message:l,onClose:()=>p(null)}):null,n("div",{class:"form-actions",children:n(ge,{onClick:()=>{E()},disabled:_||y.phase!=="idle",children:"Reboot device"})})]}),n(et,{flow:y})]})}function xs({label:e,checked:t,onChange:r,disabled:i,help:s,name:o}){const a=Qe();return n("div",{class:"checkbox-field",children:[n("label",{class:"checkbox-label",for:a,children:[n("input",{id:a,name:o,type:"checkbox",checked:t,disabled:i,onChange:u=>{r?.(u.currentTarget.checked)}}),n("span",{children:e})]}),s?n("span",{class:"field-help",children:s}):null]})}function A({label:e,value:t,onInput:r,type:i="text",name:s,placeholder:o,maxLength:a,min:d,max:u,step:c,error:h,help:f,disabled:l,required:p,autoComplete:_,inputMode:w}){const y=Qe();return n("label",{class:"field",for:y,children:[n("span",{class:"field-label",children:e}),n("input",{id:y,name:s,type:i,value:t,placeholder:o,maxLength:a,min:d,max:u,step:c,disabled:l,required:p,autoComplete:_,inputMode:w,onInput:g=>{r?.(g.currentTarget.value)},"aria-invalid":h?!0:void 0}),f&&!h?n("span",{class:"field-help",children:f}):null,h?n("span",{class:"field-error",children:h}):null]})}function be(){return n(P,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."})}function Ps({label:e,value:t,onInput:r,maxLength:i,error:s,help:o,disabled:a,autoComplete:d}){const[u,c]=b(!1);return n("div",{class:"password-field",children:[n(A,{label:e,value:t,onInput:r,type:u?"text":"password",maxLength:i,error:s,help:o,disabled:a,autoComplete:d}),n("button",{type:"button",class:"btn reveal-toggle","aria-pressed":u,disabled:a,onClick:()=>c(h=>!h),children:u?"Hide":"Show"})]})}const Cs={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:""};function Es(e){const t={};e.host.trim().length===0?t.host="Host is required.":e.host.length>m.mqtt.hostMax&&(t.host=`At most ${m.mqtt.hostMax} characters.`);const r=Number(e.port);return e.port.trim()===""?t.port="Port is required.":(!Number.isInteger(r)||r<1||r>65535)&&(t.port="Port must be an integer between 1 and 65535."),e.login.length>m.mqtt.loginMax&&(t.login=`At most ${m.mqtt.loginMax} characters.`),e.password.length>m.mqtt.passwordMax&&(t.password=`At most ${m.mqtt.passwordMax} characters.`),e.haDiscoveryPrefix.trim().length===0?t.haDiscoveryPrefix="Discovery prefix is required.":e.haDiscoveryPrefix.length>m.mqtt.haDiscoveryPrefixMax&&(t.haDiscoveryPrefix=`At most ${m.mqtt.haDiscoveryPrefixMax} characters.`),e.stateTopic.trim().length===0?t.stateTopic="Required - the device crashes if the state topic is missing.":e.stateTopic.length>m.mqtt.topicMax&&(t.stateTopic=`At most ${m.mqtt.topicMax} characters.`),e.commandTopic.trim().length===0?t.commandTopic="Required - the device crashes if the command topic is missing.":e.commandTopic.length>m.mqtt.topicMax&&(t.commandTopic=`At most ${m.mqtt.topicMax} characters.`),t}function Is(e){return Object.keys(e).length>0}function Ds(){const[e,t]=b(!1),[r,i]=b(null),[s,o]=b(Cs),[a,d]=b({}),[u,c]=b(!1),[h,f]=b(null),[l,p]=b(null),_=O(async()=>{i(null);const v=await as();v.ok?o({host:v.data.mqttHost,port:String(v.data.mqttPort),login:v.data.mqttLogin,password:v.data.mqttPassword,haDiscoveryPrefix:v.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:v.data.mqttIsHADiscovery,stateTopic:v.data.mqttStateTopic,commandTopic:v.data.mqttCommandTopic}):i(v.message),t(!0)},[]);oe(()=>{_()},[_]);const w=v=>o(g=>({...g,...v})),y=O(async v=>{v.preventDefault();const g=Es(s);if(d(g),f(null),p(null),Is(g))return;c(!0);const E=await fs({host:s.host,port:Number(s.port),login:s.login,password:s.password,haDiscoveryPrefix:s.haDiscoveryPrefix,mqttIsHADiscovery:s.mqttIsHADiscovery,stateTopic:s.stateTopic,commandTopic:s.commandTopic});c(!1),E.ok?f("MQTT settings saved to flash."):p(E.message)},[s]);return e?n("div",{class:"stack",children:[n(be,{}),r?n(K,{children:[n(P,{kind:"error",message:r}),n("div",{class:"form-actions",children:n(U,{onClick:()=>{_()},children:"Retry"})})]}):null,n(j,{title:"MQTT",children:n("form",{onSubmit:y,children:[n(A,{label:"Host",value:s.host,onInput:v=>w({host:v}),maxLength:m.mqtt.hostMax,error:a.host,autoComplete:"off"}),n(A,{label:"Port",value:s.port,onInput:v=>w({port:v}),type:"number",min:1,max:65535,inputMode:"numeric",error:a.port}),n(A,{label:"Login",value:s.login,onInput:v=>w({login:v}),maxLength:m.mqtt.loginMax,error:a.login,autoComplete:"off"}),n(Ps,{label:"Password",value:s.password,onInput:v=>w({password:v}),maxLength:m.mqtt.passwordMax,error:a.password,autoComplete:"new-password"}),n(A,{label:"HA discovery prefix",value:s.haDiscoveryPrefix,onInput:v=>w({haDiscoveryPrefix:v}),maxLength:m.mqtt.haDiscoveryPrefixMax,error:a.haDiscoveryPrefix,autoComplete:"off"}),n(xs,{label:"Enable Home Assistant discovery",checked:s.mqttIsHADiscovery,onChange:v=>w({mqttIsHADiscovery:v})}),n(A,{label:"State topic",value:s.stateTopic,onInput:v=>w({stateTopic:v}),maxLength:m.mqtt.topicMax,error:a.stateTopic,help:"Must not be empty: the device crashes on a missing state topic.",autoComplete:"off"}),n(A,{label:"Command topic",value:s.commandTopic,onInput:v=>w({commandTopic:v}),maxLength:m.mqtt.topicMax,error:a.commandTopic,help:"Must not be empty: the device crashes on a missing command topic.",autoComplete:"off"}),h?n(P,{kind:"success",message:h,onClose:()=>f(null)}):null,l?n(P,{kind:"error",message:l,onClose:()=>p(null)}):null,n("div",{class:"form-actions",children:n(U,{type:"submit",variant:"primary",disabled:u,children:u?"Saving…":"Save MQTT"})})]})})]}):n(j,{title:"Connections",children:n("p",{class:"muted",children:"Loading connection settings…"})})}function Fe({label:e,value:t,options:r,onChange:i,error:s,help:o,disabled:a,required:d,name:u}){const c=Qe(),h=f=>{i?.(f.currentTarget.value)};return n("label",{class:"field",for:c,children:[n("span",{class:"field-label",children:e}),n("select",{id:c,name:u,value:String(t),disabled:a,required:d,onChange:h,"aria-invalid":s?!0:void 0,children:r.map(f=>n("option",{value:f.value,disabled:f.disabled,children:f.label},f.value))}),o&&!s?n("span",{class:"field-help",children:o}):null,s?n("span",{class:"field-error",children:s}):null]})}const qs=640,jt=360,G=56,he=624,Se=16,me=312,Er=he-G,Ir=me-Se,_t=20,Dr=-30,vt=20,qr=85,Kt=80,Rs=[20,10,0,-10,-20,-30],Ns=[20,30,40,50,60,70,80],Us=1,Fs=7.2,Os=50;function ot(e,t){return Number.isFinite(e)?e:t}function Qt(e){return G+(_t-e)/(_t-Dr)*Er}function Ee(e){return me-(e-vt)/(qr-vt)*Ir}function Ls(e){return e>0?`+${e}`:String(e)}function Hs({k:e,b:t,minSetPoint:r}){const i=ot(e,Us),s=ot(t,Fs),o=ot(r,Os),a=-.21*i-.06,d=6.04*i+1.98,u=-5.06*i+18.06,c=[];for(let l=_t;l>=Dr;l-=1){const p=-.2*l+5,_=a*p*p+d*p+u+s,w=Math.min(Kt,Math.max(o,_));c.push(`${Qt(l).toFixed(2)},${Ee(w).toFixed(2)}`)}const h=Ee(Math.min(qr,Math.max(vt,o))),f=Ee(Kt);return n("svg",{class:"weather-curve",viewBox:`0 0 ${qs} ${jt}`,preserveAspectRatio:"xMidYMid meet",role:"img","aria-label":"Weather curve: computed boiler setpoint versus outdoor temperature",children:[n("rect",{class:"wc-plot",x:G,y:Se,width:Er,height:Ir}),Ns.map(l=>{const p=Ee(l);return n("g",{children:[n("line",{class:"wc-grid",x1:G,y1:p,x2:he,y2:p}),n("text",{class:"wc-tick",x:G-8,y:p+4,"text-anchor":"end",children:l})]},`sp-${l}`)}),Rs.map(l=>{const p=Qt(l);return n("g",{children:[n("line",{class:"wc-grid",x1:p,y1:Se,x2:p,y2:me}),n("text",{class:"wc-tick",x:p,y:me+18,"text-anchor":"middle",children:Ls(l)})]},`out-${l}`)}),n("line",{class:"wc-max",x1:G,y1:f,x2:he,y2:f}),n("text",{class:"wc-max-label",x:he-4,y:f-5,"text-anchor":"end",children:"max 80"}),n("polyline",{class:"wc-curve",points:c.join(" ")}),n("line",{class:"wc-min",x1:G,y1:h,x2:he,y2:h}),n("text",{class:"wc-min-label",x:G+4,y:h-5,"text-anchor":"start",children:"min"}),n("text",{class:"wc-axis-title",x:(G+he)/2,y:jt-8,"text-anchor":"middle",children:"Outdoor, °C"}),n("text",{class:"wc-axis-title",x:16,y:(Se+me)/2,"text-anchor":"middle",transform:`rotate(-90 16 ${(Se+me)/2})`,children:"Setpoint, °C"})]})}const Gt=[1200,2400,4800,9600,19200,38400,57600,115200],Bs={driver:"0",modbusAddress:"1",modbusSpeed:"9600",K:"0",B:"0",P:"0",I:"0",minSetPoint:"50",outdoorSensor:"0",outdoorSensorMqttTopic:"",outdoorSensorMqttField:""};function Te(e){if(e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function Ws(e){return Object.keys(e).length>0}function zs(e){const t={};e.driver!=="1"&&(t.driver='Saving requires ECTOControlV2 (1); the device rejects "No select".');const r=Te(e.modbusAddress);(r===null||!Number.isInteger(r)||r<1||r>247)&&(t.modbusAddress="Address must be an integer between 1 and 247.");const i=Te(e.modbusSpeed);(i===null||i<=0)&&(t.modbusSpeed="Speed must be a positive number.");const s=[["K",e.K,"K"],["B",e.B,"B"],["P",e.P,"P"],["I",e.I,"I"]];for(const[a,d,u]of s)Te(d)===null&&(t[a]=`${u} must be a number.`);const o=Te(e.minSetPoint);return(o===null||o<30||o>80)&&(t.minSetPoint="Minimum setpoint must be between 30 and 80."),e.outdoorSensor!=="1"&&(t.outdoorSensor='Saving requires MQTT (1); the device rejects "No".'),e.outdoorSensorMqttTopic.trim().length===0?t.outdoorSensorMqttTopic="Topic is required when MQTT is selected.":e.outdoorSensorMqttTopic.length>m.boiler.topicMax&&(t.outdoorSensorMqttTopic=`At most ${m.boiler.topicMax} characters.`),e.outdoorSensorMqttField.trim().length===0?t.outdoorSensorMqttField="Field is required when MQTT is selected.":e.outdoorSensorMqttField.length>m.boiler.fieldMax&&(t.outdoorSensorMqttField=`At most ${m.boiler.fieldMax} characters.`),t}function Vs(e){const t=Gt.map(i=>({value:String(i),label:String(i)})),r=Te(e);return r!==null&&!Gt.includes(r)&&t.unshift({value:e,label:`${e} (current)`}),t}function js(){const[e,t]=b(!1),[r,i]=b(null),[s,o]=b(Bs),[a,d]=b({}),[u,c]=b(!1),[h,f]=b(null),[l,p]=b(null),[_,w]=b(null),[y,v]=b(!1),g=Ze(),E=Ke(()=>Vs(s.modbusSpeed),[s.modbusSpeed]),$=O(async()=>{i(null);const S=await ls();S.ok?o({driver:String(S.data.driver),modbusAddress:String(S.data.modbusAddress),modbusSpeed:String(S.data.modbusSpeed),K:String(S.data.K),B:String(S.data.B),P:String(S.data.P),I:String(S.data.I),minSetPoint:String(S.data.minSetPoint),outdoorSensor:String(S.data.outdoorSensor),outdoorSensorMqttTopic:S.data.outdoorSensorMqttTopic,outdoorSensorMqttField:S.data.outdoorSensorMqttField}):i(S.message),t(!0)},[]);oe(()=>{$()},[$]);const T=S=>o(D=>({...D,...S})),R=O(async S=>{S.preventDefault();const D=zs(s);if(d(D),f(null),p(null),Ws(D))return;c(!0);const x=await _s({driver:Number(s.driver),modbusAddress:Number(s.modbusAddress),modbusSpeed:Number(s.modbusSpeed),K:Number(s.K),B:Number(s.B),P:Number(s.P),I:Number(s.I),minSetPoint:Number(s.minSetPoint),outdoorSensor:Number(s.outdoorSensor),outdoorSensorMqttTopic:s.outdoorSensorMqttTopic,outdoorSensorMqttField:s.outdoorSensorMqttField});c(!1),x.ok?f("Boiler settings saved to flash."):p(x.message)},[s]),F=O(async()=>{if(!window.confirm("Delete the stored boiler state (/boiler.bin)? The DEVICE WILL REBOOT and heating will be offline for 20-60 seconds."))return;w(null),v(!0);const D=await bs();v(!1),D.ok?g.start():w(D.message)},[g.start]);return e?n("div",{class:"stack",children:[n(be,{}),r?n(K,{children:[n(P,{kind:"error",message:r}),n("div",{class:"form-actions",children:n(U,{onClick:()=>{$()},children:"Retry"})})]}):null,n(j,{title:"Boiler driver",children:n("form",{onSubmit:R,children:[n(Fe,{label:"Driver",value:s.driver,onChange:S=>T({driver:S}),options:[{value:"0",label:"No select (0) - not savable"},{value:"1",label:"ECTOControlV2 (1)"}],error:a.driver,help:"The device accepts only ECTOControlV2 when saving."}),n(A,{label:"Modbus address",value:s.modbusAddress,onInput:S=>T({modbusAddress:S}),type:"number",min:1,max:247,step:1,inputMode:"numeric",error:a.modbusAddress,help:"1-247 (the firmware does not range-check this)."}),n(Fe,{label:"Modbus speed (baud)",value:s.modbusSpeed,onChange:S=>T({modbusSpeed:S}),options:E,error:a.modbusSpeed}),n("h3",{children:"Weather curve"}),n(A,{label:"K (curve scale)",value:s.K,onInput:S=>T({K:S}),type:"number",step:.1,error:a.K}),n(A,{label:"B (offset, °C)",value:s.B,onInput:S=>T({B:S}),type:"number",step:.1,error:a.B}),n(A,{label:"P (trim gain)",value:s.P,onInput:S=>T({P:S}),type:"number",step:.1,error:a.P}),n(A,{label:"I (trim integral, °C/s)",value:s.I,onInput:S=>T({I:S}),type:"number",step:.1,error:a.I}),n(A,{label:"Minimum setpoint (°C)",value:s.minSetPoint,onInput:S=>T({minSetPoint:S}),type:"number",min:30,max:80,step:1,inputMode:"numeric",error:a.minSetPoint,help:"Lower bound for the computed setpoint (30-80 °C)."}),n("p",{class:"muted",children:"Base curve without room trim. Effective setpoint = curve + trim, clamped to [min, 80]."}),n(Hs,{k:Number(s.K),b:Number(s.B),minSetPoint:Number(s.minSetPoint)}),n("h3",{children:"Outdoor sensor"}),n(Fe,{label:"Source",value:s.outdoorSensor,onChange:S=>T({outdoorSensor:S}),options:[{value:"0",label:"No (0) - not savable"},{value:"1",label:"MQTT (1)"}],error:a.outdoorSensor,help:"The device accepts only MQTT when saving."}),n(A,{label:"Outdoor sensor MQTT topic",value:s.outdoorSensorMqttTopic,onInput:S=>T({outdoorSensorMqttTopic:S}),maxLength:m.boiler.topicMax,disabled:s.outdoorSensor!=="1",error:a.outdoorSensorMqttTopic,help:"Required when the source is MQTT.",autoComplete:"off"}),n(A,{label:"Outdoor sensor MQTT field",value:s.outdoorSensorMqttField,onInput:S=>T({outdoorSensorMqttField:S}),maxLength:m.boiler.fieldMax,disabled:s.outdoorSensor!=="1",error:a.outdoorSensorMqttField,help:"Required when the source is MQTT.",autoComplete:"off"}),h?n(P,{kind:"success",message:h,onClose:()=>f(null)}):null,l?n(P,{kind:"error",message:l,onClose:()=>p(null)}):null,n("div",{class:"form-actions",children:n(U,{type:"submit",variant:"primary",disabled:u,children:u?"Saving…":"Save boiler settings"})})]})}),n(j,{title:"Danger zone",class:"danger-zone",children:[n("h3",{children:"Delete boiler state"}),n("p",{class:"muted",children:"Removes /boiler.bin from the device flash. The device reboots immediately afterwards."}),_?n(P,{kind:"error",message:_,onClose:()=>w(null)}):null,n("div",{class:"form-actions",children:n(ge,{onClick:()=>{F()},disabled:y||g.phase!=="idle",children:"Delete boiler state (/boiler.bin)"})})]}),n(et,{flow:g})]}):n(j,{title:"Boiler",children:n("p",{class:"muted",children:"Loading boiler settings…"})})}const Ks="60000",Qs="30000";function at(e){if(e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function Rr(e){return Object.keys(e).length>0}function Nr(e,t){const r={},i=at(e.channel);i===null||!Number.isInteger(i)||i<m.valve.channelMin||i>m.valve.channelMax?r.channel=`Channel must be an integer between ${m.valve.channelMin} and ${m.valve.channelMax}.`:t?.has(i)&&(r.channel=`Channel ${i} is already used by another enabled valve.`);const s=at(e.fullTravelTime);(s===null||!Number.isInteger(s)||s<m.valve.fullTravelTimeMin||s>m.valve.fullTravelTimeMax)&&(r.fullTravelTime=`Full travel time must be an integer number of milliseconds between ${m.valve.fullTravelTimeMin} and ${m.valve.fullTravelTimeMax}.`);const o=at(e.windowTime);return(o===null||!Number.isInteger(o)||o<m.valve.windowTimeMin||o>m.valve.windowTimeMax)&&(r.windowTime=`Window time must be an integer number of milliseconds between ${m.valve.windowTimeMin} and ${m.valve.windowTimeMax}.`),r}function Jt(e){return{channel:String(e.channel),fullTravelTime:String(e.fullTravelTime),windowTime:String(e.windowTime)}}function Gs({id:e,valve:t,onSaved:r,onNotice:i,takenChannels:s}){const[o,a]=b(!1),[d,u]=b(()=>Jt(t)),[c,h]=b({}),[f,l]=b(!1),[p,_]=b(!1),[w,y]=b(null),[v,g]=b(null),[E,$]=b(null),T=D=>u(x=>({...x,...D})),R=()=>{o||(u(Jt(t)),h({}),y(null),g(null)),a(D=>!D)},F=async D=>{D.preventDefault();const x=Nr(d,s);if(h(x),y(null),g(null),Rr(x))return;const W=Number(d.channel),ce=Number(d.fullTravelTime),I=Number(d.windowTime);l(!0);try{const q=await ft({id:e,enabled:!0,type:m.valve.savableTypes[0],channel:W,fullTravelTime:ce,windowTime:I,roomID:t.roomID});l(!1),q.ok?(y("Valve saved to flash."),r(e,{...t,enabled:!0,type:m.valve.savableTypes[0],channel:W,fullTravelTime:ce,windowTime:I,roomID:t.roomID})):g(q.message)}catch(q){l(!1),g(q instanceof Error?q.message:String(q))}},S=async()=>{if(window.confirm("Valve will be unbound on next reboot. Continue?")){$(null),_(!0);try{const x=await ft({id:e,enabled:!1,type:m.valve.savableTypes[0],channel:t.channel,fullTravelTime:t.fullTravelTime,windowTime:t.windowTime,roomID:t.roomID});_(!1),x.ok?(r(e,{...t,enabled:!1,type:m.valve.savableTypes[0]}),i("Valve unbound. Reboot to apply.")):$(x.message)}catch(x){_(!1),$(x instanceof Error?x.message:String(x))}}};return n("li",{class:"valve-row",children:[n("div",{class:"row",children:[n("span",{class:"valve-summary",children:["Valve ",n("span",{class:"mono",children:e}),n("span",{class:"sep","aria-hidden":"true",children:"·"}),"channel ",n("span",{class:"mono",children:t.channel}),n("span",{class:"sep","aria-hidden":"true",children:"·"}),n("span",{class:"mono",children:t.fullTravelTime})," ",n("span",{class:"unit",children:"ms travel"}),n("span",{class:"sep","aria-hidden":"true",children:"·"}),n("span",{class:"mono",children:t.windowTime})," ",n("span",{class:"unit",children:"ms window"})]}),n("div",{class:"form-actions",children:[n(U,{onClick:R,disabled:f||p,children:o?"Close":"Edit"}),n(ge,{onClick:()=>{S()},disabled:p||f,children:p?"Deleting…":"Delete"})]})]}),E?n(P,{kind:"error",message:E,onClose:()=>$(null)}):null,o?n("form",{onSubmit:F,children:[n(A,{label:"Channel",value:d.channel,onInput:D=>T({channel:D}),type:"number",min:m.valve.channelMin,max:m.valve.channelMax,step:1,inputMode:"numeric",error:c.channel}),n(A,{label:"Full travel time (ms)",value:d.fullTravelTime,onInput:D=>T({fullTravelTime:D}),type:"number",min:m.valve.fullTravelTimeMin,max:m.valve.fullTravelTimeMax,step:1,inputMode:"numeric",error:c.fullTravelTime}),n(A,{label:"Window time (ms)",value:d.windowTime,onInput:D=>T({windowTime:D}),type:"number",min:m.valve.windowTimeMin,max:m.valve.windowTimeMax,step:1,inputMode:"numeric",error:c.windowTime}),w?n(P,{kind:"success",message:w,onClose:()=>y(null)}):null,v?n(P,{kind:"error",message:v,onClose:()=>g(null)}):null,n(be,{}),n("div",{class:"form-actions",children:n(U,{type:"submit",variant:"primary",disabled:f||p,children:f?"Saving…":`Save valve ${e}`})})]}):null]})}function Js({slot:e,roomSlot:t,suggestedChannel:r,takenChannels:i,onAdded:s,onCancel:o}){const[a,d]=b(()=>({channel:String(r),fullTravelTime:Ks,windowTime:Qs})),[u,c]=b({}),[h,f]=b(!1),[l,p]=b(null),_=y=>d(v=>({...v,...y}));return n("form",{onSubmit:async y=>{y.preventDefault();const v=Nr(a,i);if(c(v),p(null),Rr(v))return;const g=Number(a.channel),E=Number(a.fullTravelTime),$=Number(a.windowTime);f(!0);try{const T=await ft({id:e,enabled:!0,type:m.valve.savableTypes[0],channel:g,fullTravelTime:E,windowTime:$,roomID:t});f(!1),T.ok?s(e,{enabled:!0,type:m.valve.savableTypes[0],channel:g,fullTravelTime:E,windowTime:$,roomID:t}):p(T.message)}catch(T){f(!1),p(T instanceof Error?T.message:String(T))}},children:[n(P,{kind:"info",message:"Suggested channel and timings are prefilled. Review before adding."}),n(A,{label:"Channel",value:a.channel,onInput:y=>_({channel:y}),type:"number",min:m.valve.channelMin,max:m.valve.channelMax,step:1,inputMode:"numeric",error:u.channel}),n(A,{label:"Full travel time (ms)",value:a.fullTravelTime,onInput:y=>_({fullTravelTime:y}),type:"number",min:m.valve.fullTravelTimeMin,max:m.valve.fullTravelTimeMax,step:1,inputMode:"numeric",error:u.fullTravelTime}),n(A,{label:"Window time (ms)",value:a.windowTime,onInput:y=>_({windowTime:y}),type:"number",min:m.valve.windowTimeMin,max:m.valve.windowTimeMax,step:1,inputMode:"numeric",error:u.windowTime}),l?n(P,{kind:"error",message:l,onClose:()=>p(null)}):null,n(be,{}),n("div",{class:"form-actions",children:[n(U,{type:"submit",variant:"primary",disabled:h,children:h?"Adding…":`Add valve ${e}`}),n(U,{onClick:o,disabled:h,children:"Cancel"})]})]})}function Ys({roomSlot:e,valves:t,valvesError:r,onRetry:i,onSaved:s}){const[o,a]=b(!1),[d,u]=b(null),c=O((_,w)=>{s(_,w),a(!1),u("Valve added to this room. Reboot to apply.")},[s]);if(r)return n("div",{class:"mt valve-section",children:[n("h4",{children:"Valves"}),n(P,{kind:"error",message:r}),n("div",{class:"form-actions",children:n(U,{onClick:i,children:"Retry"})})]});if(!t)return n("div",{class:"mt valve-section",children:[n("h4",{children:"Valves"}),n("p",{class:"muted",children:"Loading valves…"})]});const h=t.map((_,w)=>({valve:_,id:w})).filter(_=>_.valve.enabled&&_.valve.roomID===e),f=t.findIndex(_=>!_.enabled),l=new Set(t.filter(_=>_.enabled).map(_=>_.channel));let p=m.valve.channelMin;for(;p<=m.valve.channelMax&&l.has(p);)p+=1;return p>m.valve.channelMax&&(p=m.valve.channelMin),n("div",{class:"mt valve-section",children:[n("h4",{children:"Valves"}),d?n(P,{kind:"success",message:d,onClose:()=>u(null)}):null,h.length===0?n("p",{class:"muted",children:"No valves bound."}):n("ul",{class:"valve-list",children:h.map(({valve:_,id:w})=>{const y=new Set(t.filter((v,g)=>v.enabled&&g!==w).map(v=>v.channel));return n(Gs,{id:w,valve:_,onSaved:s,onNotice:v=>u(v),takenChannels:y},w)})}),f>=0?o?n(Js,{slot:f,roomSlot:e,suggestedChannel:p,takenChannels:l,onAdded:c,onCancel:()=>a(!1)}):n("div",{class:"form-actions",children:n(U,{onClick:()=>a(!0),children:"Add valve"})}):n("p",{class:"muted",children:"All 9 valve slots are in use."})]})}function Xs(e){if(e.trim()==="")return null;const t=Number(e);return Number.isFinite(t)?t:null}function Ur(e){return Object.keys(e).length>0}function Fr(e){const t={};e.name.trim().length===0?t.name="Name is required.":e.name.length>m.room.nameMax&&(t.name=`At most ${m.room.nameMax} characters.`);const r=[["mqttCommandTopic",e.mqttCommandTopic,"Command topic",m.room.topicMax],["mqttStateTopic",e.mqttStateTopic,"State topic",m.room.topicMax],["mqttTemperatureSensorTopic",e.mqttTemperatureSensorTopic,"Temperature topic",m.room.topicMax],["mqttTemperatureSensorField",e.mqttTemperatureSensorField,"Temperature field",m.room.temperatureFieldMax]];for(const[s,o,a,d]of r)o.trim().length===0?t[s]=`${a} is required.`:o.length>d&&(t[s]=`At most ${d} characters.`);const i=[["kP",e.kP,"kP"],["kI",e.kI,"kI"],["kD",e.kD,"kD"]];for(const[s,o,a]of i){const d=Xs(o);(d===null||d<m.room.pidMin||d>1e6)&&(t[s]=`${a} must be a number greater than or equal to ${m.room.pidMin} and at most 1000000.`)}return t}function Yt(e,t){const r=e.name||`Room ${t+1}`,i=e.mqttCommandTopic||`prometey/room${t}/set`,s=e.mqttStateTopic||`prometey/room${t}/state`,o=e.mqttTemperatureSensorTopic||`prometey/room${t}/temperature`,a=e.mqttTemperatureSensorField||"value";return{usedPlaceholders:(e.name||"").trim().length===0||(e.mqttCommandTopic||"").trim().length===0||(e.mqttStateTopic||"").trim().length===0||(e.mqttTemperatureSensorTopic||"").trim().length===0||(e.mqttTemperatureSensorField||"").trim().length===0,form:{enabled:e.enabled,name:r,mqttCommandTopic:i,mqttStateTopic:s,mqttTemperatureSensorTopic:o,mqttTemperatureSensorField:a,kP:String(e.kP),kI:String(e.kI),kD:String(e.kD)}}}function Zs(e){return{enabled:!0,name:`Room ${e+1}`,mqttCommandTopic:`prometey/room${e}/set`,mqttStateTopic:`prometey/room${e}/state`,mqttTemperatureSensorTopic:`prometey/room${e}/temperature`,mqttTemperatureSensorField:"value",kP:"1",kI:"0.01",kD:"0"}}function en(e,t,r){return{id:t,enabled:r,temperatureSensorType:m.room.savableTemperatureSensorTypes[0],name:e.name,mqttCommandTopic:e.mqttCommandTopic,mqttStateTopic:e.mqttStateTopic,mqttTemperatureSensorTopic:e.mqttTemperatureSensorTopic,mqttTemperatureSensorField:e.mqttTemperatureSensorField,kP:e.kP,kI:e.kI,kD:e.kD}}function tn({slot:e,room:t,valves:r,valvesError:i,onRetryValves:s,onValveSaved:o,onSaved:a,onDeleted:d}){const[u,c]=b(!1),[h,f]=b(()=>Yt(t,e).form),[l,p]=b(!1),[_,w]=b({}),[y,v]=b(!1),[g,E]=b(!1),[$,T]=b(null),[R,F]=b(null),[S,D]=b(null),x=k=>f(z=>({...z,...k})),W=()=>{if(!u){const k=Yt(t,e);f(k.form),p(k.usedPlaceholders),w({}),T(null),F(null)}c(k=>!k)},ce=async k=>{k.preventDefault();const z=Fr(h);if(w(z),T(null),F(null),!Ur(z)){v(!0);try{const ue=await mt({id:e,enabled:h.enabled,temperatureSensorType:m.room.savableTemperatureSensorTypes[0],name:h.name,mqttCommandTopic:h.mqttCommandTopic,mqttStateTopic:h.mqttStateTopic,mqttTemperatureSensorTopic:h.mqttTemperatureSensorTopic,mqttTemperatureSensorField:h.mqttTemperatureSensorField,kP:Number(h.kP),kI:Number(h.kI),kD:Number(h.kD)});v(!1),ue.ok?(T("Room saved to flash."),p(!1),a(e,{...t,id:e,enabled:h.enabled,name:h.name,mqttCommandTopic:h.mqttCommandTopic,mqttStateTopic:h.mqttStateTopic,mqttTemperatureSensorTopic:h.mqttTemperatureSensorTopic,mqttTemperatureSensorField:h.mqttTemperatureSensorField,kP:Number(h.kP),kI:Number(h.kI),kD:Number(h.kD)})):F(ue.message)}catch(ue){v(!1),F(ue instanceof Error?ue.message:String(ue))}}},I=async()=>{if(window.confirm(`Delete room "${t.name||`slot ${e}`}"? This sets enabled=false and keeps the stored config; the DEVICE WILL NEED A REBOOT for heating control to stop.`)){D(null),E(!0);try{const z=await mt(en(t,e,!1));E(!1),z.ok?d(e):D(z.message)}catch(z){E(!1),D(z instanceof Error?z.message:String(z))}}},q=[];t.I!==void 0&&q.push(["PID I (runtime)",String(t.I)]),t.prevError!==void 0&&q.push(["prevError (runtime)",String(t.prevError)]),t.valveOpeningPercent!==void 0&&q.push(["Valve opening",`${t.valveOpeningPercent}%`]),t.prevTime!==void 0&&q.push(["prevTime (raw)",String(t.prevTime)]);const V=r?r.filter(k=>k.enabled&&k.roomID===e).length:null;return n(j,{class:"room-card",children:[n("div",{class:"card-header",children:[n("h3",{children:[t.name||`Room ${e+1}`," ",n("span",{class:"badge badge-slot",children:["slot ",e]})]}),V!==null?n("span",{class:"muted",children:[V," valve",V===1?"":"s"," bound"]}):null]}),t.id!==e?n(P,{kind:"info",message:`Stored id is ${t.id} but this entry sits in slot ${e}; saving rewrites slot ${e} and normalizes the id.`}):null,n("dl",{class:"kv",children:[t.id!==e?n(K,{children:[n("dt",{children:"Stored id"}),n("dd",{children:t.id})]}):null,n("dt",{children:"Command topic"}),n("dd",{children:t.mqttCommandTopic||n("span",{class:"muted",children:"(empty)"})}),n("dt",{children:"State topic"}),n("dd",{children:t.mqttStateTopic||n("span",{class:"muted",children:"(empty)"})}),n("dt",{children:"Temperature topic"}),n("dd",{children:t.mqttTemperatureSensorTopic||n("span",{class:"muted",children:"(empty)"})}),n("dt",{children:"Temperature field"}),n("dd",{children:t.mqttTemperatureSensorField||n("span",{class:"muted",children:"(empty)"})}),n("dt",{children:"kP / kI / kD"}),n("dd",{children:[t.kP," / ",t.kI," / ",t.kD]}),q.map(([k,z])=>n(K,{children:[n("dt",{children:k}),n("dd",{children:z})]},k))]}),n("div",{class:"form-actions",children:[n(U,{onClick:W,disabled:y||g,children:u?"Close editor":"Edit room"}),n(ge,{onClick:()=>{I()},disabled:g||y,children:g?"Deleting…":"Delete room"})]}),S?n(P,{kind:"error",message:S,onClose:()=>D(null)}):null,u?n("div",{class:"room-editor",children:[n("form",{onSubmit:ce,children:[l?n(P,{kind:"info",message:"This room had empty required fields; suggested defaults were prefilled. Review and adjust before saving."}):null,n(A,{label:"Room id",value:e,disabled:!0,help:"Fixed slot index; the device writes to this position."}),n(Fe,{label:"Temperature sensor type",value:m.room.savableTemperatureSensorTypes[0],disabled:!0,options:[{value:"1",label:"MQTT (1)"}],help:"Only MQTT is accepted by the firmware, even for disabled rooms."}),n(A,{label:"Name",value:h.name,onInput:k=>x({name:k}),maxLength:m.room.nameMax,error:_.name,autoComplete:"off"}),n(A,{label:"Command topic",value:h.mqttCommandTopic,onInput:k=>x({mqttCommandTopic:k}),maxLength:m.room.topicMax,error:_.mqttCommandTopic,autoComplete:"off"}),n(A,{label:"State topic",value:h.mqttStateTopic,onInput:k=>x({mqttStateTopic:k}),maxLength:m.room.topicMax,error:_.mqttStateTopic,autoComplete:"off"}),n(A,{label:"Temperature topic",value:h.mqttTemperatureSensorTopic,onInput:k=>x({mqttTemperatureSensorTopic:k}),maxLength:m.room.topicMax,error:_.mqttTemperatureSensorTopic,autoComplete:"off"}),n(A,{label:"Temperature field",value:h.mqttTemperatureSensorField,onInput:k=>x({mqttTemperatureSensorField:k}),maxLength:m.room.temperatureFieldMax,error:_.mqttTemperatureSensorField,autoComplete:"off"}),n(A,{label:"kP",value:h.kP,onInput:k=>x({kP:k}),type:"number",min:m.room.pidMin,step:.1,error:_.kP}),n(A,{label:"kI",value:h.kI,onInput:k=>x({kI:k}),type:"number",min:m.room.pidMin,step:.1,error:_.kI}),n(A,{label:"kD",value:h.kD,onInput:k=>x({kD:k}),type:"number",min:m.room.pidMin,step:.1,error:_.kD}),$?n(P,{kind:"success",message:$,onClose:()=>T(null)}):null,R?n(P,{kind:"error",message:R,onClose:()=>F(null)}):null,n(be,{}),n("div",{class:"form-actions",children:n(U,{type:"submit",variant:"primary",disabled:y||g,children:y?"Saving…":`Save room ${e}`})})]}),n(Ys,{roomSlot:e,valves:r,valvesError:i,onRetry:s,onSaved:o})]}):null]})}function Xt({freeSlot:e,onAdded:t,onCancel:r}){const[i,s]=b(()=>Zs(e)),[o,a]=b({}),[d,u]=b(!1),[c,h]=b(null),f=p=>s(_=>({..._,...p}));return n("form",{onSubmit:async p=>{p.preventDefault();const _=Fr(i);if(a(_),h(null),Ur(_))return;const w=Number(i.kP),y=Number(i.kI),v=Number(i.kD);u(!0);try{const g=await mt({id:e,enabled:!0,temperatureSensorType:m.room.savableTemperatureSensorTypes[0],name:i.name,mqttCommandTopic:i.mqttCommandTopic,mqttStateTopic:i.mqttStateTopic,mqttTemperatureSensorTopic:i.mqttTemperatureSensorTopic,mqttTemperatureSensorField:i.mqttTemperatureSensorField,kP:w,kI:y,kD:v});u(!1),g.ok?t(e,{id:e,enabled:!0,temperatureSensorType:m.room.savableTemperatureSensorTypes[0],name:i.name,mqttCommandTopic:i.mqttCommandTopic,mqttStateTopic:i.mqttStateTopic,mqttTemperatureSensorTopic:i.mqttTemperatureSensorTopic,mqttTemperatureSensorField:i.mqttTemperatureSensorField,kP:w,kI:y,kD:v}):h(g.message)}catch(g){u(!1),h(g instanceof Error?g.message:String(g))}},children:[n(P,{kind:"info",message:`Suggested defaults for slot ${e} are prefilled. Review and adjust before adding.`}),n(A,{label:"Room id",value:e,disabled:!0,help:"Lowest free slot; the device writes to this position."}),n(A,{label:"Name",value:i.name,onInput:p=>f({name:p}),maxLength:m.room.nameMax,error:o.name,autoComplete:"off"}),n(A,{label:"Command topic",value:i.mqttCommandTopic,onInput:p=>f({mqttCommandTopic:p}),maxLength:m.room.topicMax,error:o.mqttCommandTopic,autoComplete:"off"}),n(A,{label:"State topic",value:i.mqttStateTopic,onInput:p=>f({mqttStateTopic:p}),maxLength:m.room.topicMax,error:o.mqttStateTopic,autoComplete:"off"}),n(A,{label:"Temperature topic",value:i.mqttTemperatureSensorTopic,onInput:p=>f({mqttTemperatureSensorTopic:p}),maxLength:m.room.topicMax,error:o.mqttTemperatureSensorTopic,autoComplete:"off"}),n(A,{label:"Temperature field",value:i.mqttTemperatureSensorField,onInput:p=>f({mqttTemperatureSensorField:p}),maxLength:m.room.temperatureFieldMax,error:o.mqttTemperatureSensorField,autoComplete:"off"}),n(A,{label:"kP",value:i.kP,onInput:p=>f({kP:p}),type:"number",min:m.room.pidMin,step:.1,error:o.kP,help:"Suggested starting value."}),n(A,{label:"kI",value:i.kI,onInput:p=>f({kI:p}),type:"number",min:m.room.pidMin,step:.01,error:o.kI,help:"Suggested starting value."}),n(A,{label:"kD",value:i.kD,onInput:p=>f({kD:p}),type:"number",min:m.room.pidMin,step:.1,error:o.kD,help:"Suggested starting value."}),c?n(P,{kind:"error",message:c,onClose:()=>h(null)}):null,n(be,{}),n("div",{class:"form-actions",children:[n(U,{type:"submit",variant:"primary",disabled:d,children:d?"Adding…":`Add room ${e}`}),n(U,{onClick:r,disabled:d,children:"Cancel"})]})]})}function rn(){const[e,t]=b(null),[r,i]=b(!1),[s,o]=b(null),[a,d]=b(null),[u,c]=b(null),[h,f]=b(null),[l,p]=b(!1),[_,w]=b(!1),[y,v]=b(null),g=Ze(),E=O(async()=>{o(null);const I=await ds();I.ok?Array.isArray(I.data.rooms)?t(I.data.rooms):o("Device returned an unexpected rooms payload."):o(I.message),i(!0)},[]),$=O(async()=>{c(null);const I=await cs();I.ok?Array.isArray(I.data.valves)?d(I.data.valves):c("Device returned an unexpected valves payload."):c(I.message)},[]);oe(()=>{E(),$()},[E,$]);const T=O((I,q)=>{t(V=>V&&V.map((k,z)=>z===I?q:k))},[]),R=O((I,q)=>{d(V=>V&&V.map((k,z)=>z===I?q:k))},[]),F=O((I,q)=>{t(V=>V&&V.map((k,z)=>z===I?q:k)),w(!1),v("Room added. Reboot to apply.")},[]),S=O(I=>{t(q=>q&&q.map((V,k)=>k===I?{...V,id:I,enabled:!1}:V)),v("Room removed from heating. Reboot to apply.")},[]),D=O(async()=>{if(!window.confirm("Delete all stored room state (/room_*.bin)? The DEVICE WILL REBOOT and heating will be offline for 20-60 seconds."))return;f(null),p(!0);const q=await ws();p(!1),q.ok?g.start():f(q.message)},[g.start]);if(!r)return n(j,{title:"Rooms",children:n("p",{class:"muted",children:"Loading rooms…"})});const x=(e??[]).map((I,q)=>({room:I,slot:q})).filter(I=>I.room.enabled),W=e?e.findIndex(I=>!I.enabled):-1,ce=W>=0?n(j,{title:"Add room",children:_?n(Xt,{freeSlot:W,onAdded:F,onCancel:()=>w(!1)},W):n("div",{class:"form-actions",children:n(U,{variant:"primary",onClick:()=>w(!0),children:"Add room"})})}):n(j,{title:"Add room",children:n("p",{class:"muted",children:"All 8 room slots are in use. Disable a room before adding another."})});return n("div",{class:"stack",children:[s?n(j,{title:"Rooms",children:[n(P,{kind:"error",message:s}),n("div",{class:"form-actions",children:n(U,{onClick:()=>{E()},children:"Retry"})})]}):e?n(K,{children:[y?n(P,{kind:"info",message:y,onClose:()=>v(null)}):null,x.length===0?n(j,{title:"Rooms",children:_&&W>=0?n(Xt,{freeSlot:W,onAdded:F,onCancel:()=>w(!1)},W):n(K,{children:[n("p",{class:"muted",children:"No rooms are enabled yet. Add a room to start controlling heating."}),W>=0?n("div",{class:"form-actions",children:n(U,{variant:"primary",onClick:()=>w(!0),children:"Add room"})}):n("p",{class:"muted",children:"All 8 room slots are in use. Disable a room before adding another."})]})}):n(K,{children:[x.map(({room:I,slot:q})=>n(tn,{slot:q,room:I,valves:a,valvesError:u,onRetryValves:()=>{$()},onValveSaved:R,onSaved:T,onDeleted:S},q)),ce]})]}):null,n(j,{title:"Danger zone",class:"danger-zone",children:[n("h3",{children:"Reset room state"}),n("p",{class:"muted",children:"Deletes every /room_<i>.bin file from the device flash. The device reboots immediately afterwards."}),h?n(P,{kind:"error",message:h,onClose:()=>f(null)}):null,n("div",{class:"form-actions",children:n(ge,{onClick:()=>{D()},disabled:l||g.phase!=="idle",children:"Reset room state (delete /room_*.bin)"})})]}),n(et,{flow:g})]})}const sn=16384,nn="Uploading this archive REPLACES config.bin, boiler state and room states on the device AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?",on="Uploading REPLACES /config.bin on the device AND REBOOTS IT IMMEDIATELY. Unsaved in-RAM settings will be lost. The device will be offline 20-60 seconds. Continue?";function lt(e){const t=e.toLowerCase();return t.endsWith(".zip")?"zip":t.endsWith(".bin")?"bin":null}function Zt(e,t){const r=new ArrayBuffer(e.byteLength);new Uint8Array(r).set(e);const i=new Blob([r],{type:"application/octet-stream"}),s=URL.createObjectURL(i),o=document.createElement("a");o.href=s,o.download=t,document.body.appendChild(o),o.click(),o.remove(),window.setTimeout(()=>URL.revokeObjectURL(s),0)}function an(){const e=Qe(),t=$t(null),[r,i]=b(!1),[s,o]=b(null),[a,d]=b(null),[u,c]=b(null),[h,f]=b(!1),[l,p]=b(null),_=Ze(),w=h||_.phase!=="idle",y=O(async()=>{i(!0),o(null);const $=await ms();if(i(!1),!$.ok){o({kind:"error",message:$.message});return}Zt($.data,"prometey-config.zip"),o({kind:"info",message:"Full backup downloaded as prometey-config.zip. It contains config.bin + boiler state + room states (8). It contains your Wi-Fi and MQTT credentials in plaintext — store it safely."})},[]),v=O(async()=>{i(!0),o(null);const $=await ps();if(i(!1),!$.ok){o({kind:"error",message:$.message});return}Zt($.data,"config.bin"),o({kind:"info",message:"Config downloaded as config.bin. It contains your Wi-Fi and MQTT credentials in plaintext — store it safely."})},[]),g=O($=>{const T=$.files&&$.files[0]?$.files[0]:null;if(d(T),p(null),!T){c(null);return}if(T.size===0){c("The selected file is empty.");return}if(T.size>sn){c("This does not look like a Prometey backup file (max 16 KB).");return}if(!lt(T.name)){c("Unsupported file type. Choose a .zip full backup or a .bin config file.");return}c(null)},[]),E=O(async()=>{if(!a||u)return;const $=lt(a.name);if(!$){p("Unsupported file type. Choose a .zip full backup or a .bin config file.");return}if(window.confirm($==="zip"?nn:on)){f(!0),p(null);try{const R=new Uint8Array(await a.arrayBuffer()),F=$==="zip"?await gs(R):await vs(R);F.ok?(t.current&&(t.current.value=""),d(null),c(null),_.start()):p(F.message)}catch(R){p(R instanceof Error?R.message:"Could not read the selected backup file.")}finally{f(!1)}}},[a,u,_.start]);return n("div",{class:"stack",children:[n(P,{kind:"info",message:"Download the FULL BACKUP zip before uploading the web UI: filesystem uploads (pio run -e kc868a16 -t uploadfs) ERASE LittleFS, so /config.bin, /boiler.bin and every /room_*.bin are gone."}),n(j,{title:"Download backup",children:[n("p",{class:"muted",children:"Download a zip of everything the device has stored: config.bin + boiler state + room states (8). It contains your Wi-Fi and MQTT credentials in plaintext, so keep the archive somewhere safe."}),s?n(P,{kind:s.kind,message:s.message,onClose:()=>o(null)}):null,n("div",{class:"form-actions",children:[n(U,{variant:"primary",onClick:()=>{y()},disabled:r||_.phase!=="idle",children:r?"Downloading…":"Download full backup (.zip)"}),n(U,{onClick:()=>{v()},disabled:r||_.phase!=="idle",children:"Download config.bin only"})]})]}),n(j,{title:"Restore from file",class:"danger-zone",children:[n("p",{class:"muted",children:"Restore a previously downloaded .zip full backup, or a single .bin config file. The device validates size, version and CRC and, for a full archive, commits all members atomically before rebooting. A rejected file changes nothing: size/version/CRC errors mean the file did not match this firmware."}),n("label",{class:"field",for:e,children:[n("span",{class:"field-label",children:"Backup file"}),n("input",{id:e,ref:t,type:"file",accept:".zip,.bin,application/octet-stream",disabled:w,onChange:$=>g($.currentTarget)}),u?n("span",{class:"field-error",children:u}):null]}),a&&!u?n("p",{class:"muted",children:["Selected: ",a.name," (",a.size," bytes)",lt(a.name)==="zip"?" — full backup (all files)":" — config.bin only"]}):null,l?n(P,{kind:"error",message:l,onClose:()=>p(null)}):null,n("div",{class:"form-actions",children:n(ge,{onClick:()=>{E()},disabled:!a||!!u||w,children:h?"Uploading…":"Upload & reboot device"})})]}),n(et,{flow:_})]})}function ln(){const e=$t(null);return oe(()=>{const t=document.createElement("edn-network-page");return e.current?.append(t),()=>t.remove()},[]),n("div",{ref:e})}const dn=[{id:"status",label:"Status"},{id:"connections",label:"MQTT"},{id:"network",label:"Network"},{id:"boiler",label:"Boiler"},{id:"rooms",label:"Rooms"},{id:"backup",label:"Backup"}];function cn(e){switch(e){case"status":return n(Ms,{});case"connections":return n(Ds,{});case"network":return n(ln,{});case"boiler":return n(js,{});case"rooms":return n(rn,{});case"backup":return n(an,{})}}function un(){const[e,t]=b("status");return n(K,{children:[n("header",{class:"app-header",children:[n("div",{class:"brand",children:[n("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:[n("path",{fill:"currentColor",d:"M12 23c4.4 0 7.5-2.7 7.5-6.7 0-2.3-1-4.3-2.3-6.1-.8 1.6-1.8 2.6-2.9 3.3.4-1.4.2-3.1-.7-5C12.7 6.1 11.3 4.3 10.4 2c-.3 2.3-1.4 4-2.7 5.5C6.4 9.1 4.5 11 4.5 15c0 4 3.1 8 7.5 8z"}),n("path",{fill:"currentColor",opacity:".45",d:"M12 21.2c-1.6 0-2.8-1.1-2.8-2.8 0-1.3.7-2.1 1.5-3 .3.7.8 1.1 1.4 1.4-.2-1.2.1-2.4 1-3.5.9 1.2 1.4 2.6 1.4 4 0 2.3-1.4 3.9-2.5 3.9z"})]}),n("h1",{children:"Prometey"})]}),n("span",{class:"hint",children:"offline device panel"})]}),n(os,{tabs:dn,active:e,onSelect:t}),n("main",{class:"tab-content",id:`panel-${e}`,role:"tabpanel","aria-labelledby":`tab-${e}`,children:cn(e)})]})}function hn(e){if(e&&typeof e=="object"&&"error"in e){let t=e.error;if(typeof t=="string"&&t.length>0)return t}}function Or(e={}){let t=e.baseUrl??"",r=e.headers??{};async function i(s,o){let a;try{a=await fetch(`${t}${s}`,{...o,headers:{Accept:"application/json",...o?.body===void 0?{}:{"Content-Type":"application/json"},...r}})}catch(h){return o?.signal?.aborted===!0||typeof h=="object"&&h&&h.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let d=await a.text().catch(()=>""),u,c=!1;if(d.length>0)try{u=JSON.parse(d),c=!0}catch{c=!1}if(!a.ok){let h=hn(u);return{ok:!1,status:a.status,message:h??`Request failed with HTTP ${a.status}.`}}return c?{ok:!0,data:u}:{ok:!1,status:a.status,message:`Unexpected response from server (HTTP ${a.status}).`}}return{getSettings(s){return i("/api/network/settings",{signal:s})},saveSettings(s,o){return i("/api/network/settings",{method:"POST",body:JSON.stringify(s),signal:o})},getStatus(s){return i("/api/network/status",{signal:s})},wifiList(s){return i("/api/wifi/list",{signal:s})}}}var Oe=globalThis,Mt=Oe.ShadowRoot&&(Oe.ShadyCSS===void 0||Oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xt=Symbol(),er=new WeakMap,Lr=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==xt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Mt&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=er.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&er.set(t,e))}return e}toString(){return this.cssText}},pn=e=>new Lr(typeof e=="string"?e:e+"",void 0,xt),Pt=(e,...t)=>new Lr(e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]),e,xt),mn=(e,t)=>{if(Mt)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of t){let i=document.createElement("style"),s=Oe.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,e.appendChild(i)}},tr=Mt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(let i of t.cssRules)r+=i.cssText;return pn(r)})(e):e,{is:fn,defineProperty:_n,getOwnPropertyDescriptor:vn,getOwnPropertyNames:gn,getOwnPropertySymbols:bn,getPrototypeOf:wn}=Object,tt=globalThis,rr=tt.trustedTypes,yn=rr?rr.emptyScript:"",Sn=tt.reactiveElementPolyfillSupport,ke=(e,t)=>e,gt={toAttribute(e,t){switch(t){case Boolean:e=e?yn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Hr=(e,t)=>!fn(e,t),sr={attribute:!0,type:String,converter:gt,reflect:!1,useDefault:!1,hasChanged:Hr};Symbol.metadata??=Symbol("metadata"),tt.litPropertyMetadata??=new WeakMap;var pe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=sr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&_n(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:s}=vn(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){let a=i?.call(this);s?.call(this,o),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??sr}static _$Ei(){if(this.hasOwnProperty(ke("elementProperties")))return;let e=wn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ke("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ke("properties"))){let t=this.properties,r=[...gn(t),...bn(t)];for(let i of r)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift(tr(i))}else e!==void 0&&t.push(tr(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let s=(r.converter?.toAttribute===void 0?gt:r.converter).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let s=r.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute===void 0?gt:s.converter;this._$Em=i;let a=o.fromAttribute(t,s.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,r,i=!1,s){if(e!==void 0){let o=this.constructor;if(i===!1&&(s=this[e]),r??=o.getPropertyOptions(e),!((r.hasChanged??Hr)(s,t)||r.useDefault&&r.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:s},o){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),s!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,s]of r){let{wrapped:o}=s,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};pe.elementStyles=[],pe.shadowRootOptions={mode:"open"},pe[ke("elementProperties")]=new Map,pe[ke("finalized")]=new Map,Sn?.({ReactiveElement:pe}),(tt.reactiveElementVersions??=[]).push("2.1.2");var Ct=globalThis,nr=e=>e,We=Ct.trustedTypes,ir=We?We.createPolicy("lit-html",{createHTML:e=>e}):void 0,Br="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,Wr="?"+X,Tn=`<${Wr}>`,ae=document,Me=()=>ae.createComment(""),xe=e=>e===null||typeof e!="object"&&typeof e!="function",Et=Array.isArray,$n=e=>Et(e)||typeof e?.[Symbol.iterator]=="function",dt=`[ 	
\f\r]`,we=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,or=/-->/g,ar=/>/g,Z=RegExp(`>|${dt}(?:([^\\s"'>=/]+)(${dt}*=${dt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lr=/'/g,dr=/"/g,zr=/^(?:script|style|textarea|title)$/i,M=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),_e=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),cr=new WeakMap,ee=ae.createTreeWalker(ae,129);function Vr(e,t){if(!Et(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ir===void 0?t:ir.createHTML(t)}var kn=(e,t)=>{let r=e.length-1,i=[],s,o=t===2?"<svg>":t===3?"<math>":"",a=we;for(let d=0;d<r;d++){let u=e[d],c,h,f=-1,l=0;for(;l<u.length&&(a.lastIndex=l,h=a.exec(u),h!==null);)l=a.lastIndex,a===we?h[1]==="!--"?a=or:h[1]===void 0?h[2]===void 0?h[3]!==void 0&&(a=Z):(zr.test(h[2])&&(s=RegExp("</"+h[2],"g")),a=Z):a=ar:a===Z?h[0]===">"?(a=s??we,f=-1):h[1]===void 0?f=-2:(f=a.lastIndex-h[2].length,c=h[1],a=h[3]===void 0?Z:h[3]==='"'?dr:lr):a===dr||a===lr?a=Z:a===or||a===ar?a=we:(a=Z,s=void 0);let p=a===Z&&e[d+1].startsWith("/>")?" ":"";o+=a===we?u+Tn:f>=0?(i.push(c),u.slice(0,f)+Br+u.slice(f)+X+p):u+X+(f===-2?d:p)}return[Vr(e,o+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},bt=class jr{constructor({strings:t,_$litType$:r},i){let s;this.parts=[];let o=0,a=0,d=t.length-1,u=this.parts,[c,h]=kn(t,r);if(this.el=jr.createElement(c,i),ee.currentNode=this.el.content,r===2||r===3){let f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=ee.nextNode())!==null&&u.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(let f of s.getAttributeNames())if(f.endsWith(Br)){let l=h[a++],p=s.getAttribute(f).split(X),_=/([.?@])?(.*)/.exec(l);u.push({type:1,index:o,name:_[2],strings:p,ctor:_[1]==="."?Mn:_[1]==="?"?xn:_[1]==="@"?Pn:rt}),s.removeAttribute(f)}else f.startsWith(X)&&(u.push({type:6,index:o}),s.removeAttribute(f));if(zr.test(s.tagName)){let f=s.textContent.split(X),l=f.length-1;if(l>0){s.textContent=We?We.emptyScript:"";for(let p=0;p<l;p++)s.append(f[p],Me()),ee.nextNode(),u.push({type:2,index:++o});s.append(f[l],Me())}}}else if(s.nodeType===8)if(s.data===Wr)u.push({type:2,index:o});else{let f=-1;for(;(f=s.data.indexOf(X,f+1))!==-1;)u.push({type:7,index:o}),f+=X.length-1}o++}}static createElement(t,r){let i=ae.createElement("template");return i.innerHTML=t,i}};function ve(e,t,r=e,i){if(t===_e)return t;let s=i===void 0?r._$Cl:r._$Co?.[i],o=xe(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(e),s._$AT(e,r,i)),i===void 0?r._$Cl=s:(r._$Co??=[])[i]=s),s!==void 0&&(t=ve(e,s._$AS(e,t.values),s,i)),t}var An=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??ae).importNode(t,!0);ee.currentNode=i;let s=ee.nextNode(),o=0,a=0,d=r[0];for(;d!==void 0;){if(o===d.index){let u;d.type===2?u=new It(s,s.nextSibling,this,e):d.type===1?u=new d.ctor(s,d.name,d.strings,this,e):d.type===6&&(u=new Cn(s,this,e)),this._$AV.push(u),d=r[++a]}o!==d?.index&&(s=ee.nextNode(),o++)}return ee.currentNode=ae,i}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(e[t]):(r._$AI(e,r,t),t+=r.strings.length-2)),t++}},It=class Kr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,s){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=ve(this,t,r),xe(t)?t===C||t==null||t===""?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==_e&&this._(t):t._$litType$===void 0?t.nodeType===void 0?$n(t)?this.k(t):this._(t):this.T(t):this.$(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==C&&xe(this._$AH)?this._$AA.nextSibling.data=t:this.T(ae.createTextNode(t)),this._$AH=t}$(t){let{values:r,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=bt.createElement(Vr(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(r);else{let o=new An(s,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(t){let r=cr.get(t.strings);return r===void 0&&cr.set(t.strings,r=new bt(t)),r}k(t){Et(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,i,s=0;for(let o of t)s===r.length?r.push(i=new Kr(this.O(Me()),this.O(Me()),this,this.options)):i=r[s],i._$AI(o),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){let i=nr(t).nextSibling;nr(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},rt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,s){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=C}_$AI(e,t=this,r,i){let s=this.strings,o=!1;if(s===void 0)e=ve(this,e,t,0),o=!xe(e)||e!==this._$AH&&e!==_e,o&&(this._$AH=e);else{let a=e,d,u;for(e=s[0],d=0;d<s.length-1;d++)u=ve(this,a[r+d],t,d),u===_e&&(u=this._$AH[d]),o||=!xe(u)||u!==this._$AH[d],u===C?e=C:e!==C&&(e+=(u??"")+s[d+1]),this._$AH[d]=u}o&&!i&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Mn=class extends rt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}},xn=class extends rt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}},Pn=class extends rt{constructor(e,t,r,i,s){super(e,t,r,i,s),this.type=5}_$AI(e,t=this){if((e=ve(this,e,t,0)??C)===_e)return;let r=this._$AH,i=e===C&&r!==C||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==C&&(r===C||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Cn=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ve(this,e)}},En=Ct.litHtmlPolyfillSupport;En?.(bt,It),(Ct.litHtmlVersions??=[]).push("3.3.3");var In=(e,t,r)=>{let i=r?.renderBefore??t,s=i._$litPart$;if(s===void 0){let o=r?.renderBefore??null;i._$litPart$=s=new It(t.insertBefore(Me(),o),o,void 0,r??{})}return s._$AI(e),s},Dt=globalThis,te=class extends pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=In(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _e}};te._$litElement$=!0,te.finalized=!0,Dt.litElementHydrateSupport?.({LitElement:te});var Dn=Dt.litElementPolyfillSupport;Dn?.({LitElement:te}),(Dt.litElementVersions??=[]).push("4.2.2");var qn={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function Rn(e){return e===void 0||Number.isNaN(e)?"Unknown":e>=-55?"Excellent":e>=-67?"Good":e>=-75?"Fair":"Weak"}function Nn(e){return e===1?"Full":e===0?"Half":`Unknown (${e})`}function Un(e){let t=r=>String(r).padStart(2,"0");return`${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`}var re,Fn=(re=class extends te{constructor(...t){super(...t),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(t){t.has("pollIntervalMs")&&this.startPolling();let r=t.get("baseUrl");t.has("baseUrl")&&r!==void 0&&r!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let t=this.status;return M`
      <div class="card">
        <header class="head">
          ${t?M`<span class="badge badge-${t.mode}">${qn[t.mode]}</span>`:M`<span class="badge badge-unknown">Unknown</span>`}
          ${t?M`<span class="state ${t.connected?"state-up":"state-down"}">
                ${t.connected?"Connected":"Disconnected"}
              </span>`:C}
          ${this.loading?M`<span class="muted loading">Refreshing…</span>`:C}
        </header>

        ${t?.fallbackAP?M`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:C}
        ${this.errorMessage?M`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:C}
        ${t?this.renderSections(t):M`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?M`Updated ${Un(this.lastUpdated)}`:M`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(t){switch(t.mode){case"wifi":return this.renderWifi(t);case"wifi_ap":return this.renderAp(t);case"ethernet":return this.renderEthernet(t)}}renderWifi(t){return M`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",t.ssid)}
          ${this.row("Signal",t.rssi===void 0?void 0:`${t.rssi} dBm (${Rn(t.rssi)})`)}
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
          ${this.row("Duplex",r===void 0?void 0:Nn(r.duplex))}
        </dl>
      </section>
    `}row(t,r){return r===void 0||r===""?C:M`<dt>${t}</dt>
          <dd>${r}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=Or({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let t=++this.refreshSeq;this.loading=!0;let r=await this.ensureClient().getStatus();if(t===this.refreshSeq){if(this.loading=!1,r.ok){this.status=r.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=r.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:r.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let t=Number(this.pollIntervalMs);!Number.isFinite(t)||t<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},t))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},re.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},re.styles=Pt`
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
  `,re);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",Fn);var Ie=32,ye=64,ct=8,On=5e3,Ln=new TextEncoder;function De(e){return Ln.encode(e).length}function ur(e){return e.isAPMode?"ap":"station"}var se,Hn=(se=class extends te{constructor(...t){super(...t),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=r=>{this.draftWifiSSID=r.target.value},this.handleWifiPasswordInput=r=>{this.draftWifiPassword=r.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=r=>{this.draftApSSID=r.target.value},this.handleApPasswordInput=r=>{this.draftApPassword=r.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=r=>{this.draftApHasPassword=r.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=r=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=r,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=r=>{r.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(t){let r=t.get("baseUrl");t.has("baseUrl")&&r!==void 0&&r!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let t=this.settings;return M`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?M`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:C}
        ${this.successMessage?M`<div class="banner banner-success" role="status">${this.successMessage}</div>`:C}
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
          ${this.dirty?M`<span class="muted">Unsaved changes</span>`:C}
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
        ${t.hasWifiPassword?M`<p class="hint">Password saved •••• (leave blank to keep)</p>`:C}
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
              ${t.hasWifiAPPassword?M`<p class="hint">Password saved •••• (leave blank to keep)</p>`:C}
              ${this.renderPasswordClearWarning("wifiAPPassword")}
              ${this.renderFieldError("wifiAPPassword")}
            `:C}
      </section>
    `}renderScan(){return M`
      <section class="group">
        <div class="scan-head">
          <h2>Wi-Fi scan</h2>
          <button type="button" @click=${this.handleScan} ?disabled=${this.scanning}>
            ${this.scanning?"Scanning…":"Scan"}
          </button>
        </div>
        ${this.scanError?M`<div class="banner banner-error" role="alert">${this.scanError}</div>`:C}
        ${this.scanResults.length>0?M`<ul class="networks">
              ${this.scanResults.map(t=>this.renderNetwork(t))}
            </ul>`:C}
      </section>
    `}renderNetwork(t){return M`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(t.ssid)}>
          <span class="ssid">${t.ssid}</span>
          <span class="meta">
            ${t.encrypted?M`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:C}
            ${t.rssi} dBm · Ch ${t.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(t){let r=this.fieldErrors[t];return r?M`<p class="field-error" role="alert">${r}</p>`:C}renderPasswordClearWarning(t){return(t==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?M`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:C}get dirty(){let t=this.settings;return t?this.draftMode!==ur(t)||this.draftWifiSSID!==t.wifiSSID||this.draftApSSID!==t.wifiAPSSID||this.draftApHasPassword!==t.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=Or({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let t=++this.loadToken;this.loading=!0;let r=await this.ensureClient().getSettings();if(t!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,r.ok){this.applyServerSettings(r.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=r.message,this.emitError(r.message)}applyServerSettings(t){this.settings=t,this.settingsBaseUrl=this.baseUrl,this.draftMode=ur(t),this.draftWifiSSID=t.wifiSSID,this.draftApSSID=t.wifiAPSSID,this.draftApHasPassword=t.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let t=this.settings,r={};if(!t)return r;let i=this.draftMode==="ap";if(De(this.draftWifiSSID)>Ie&&(r.wifiSSID=`Wi-Fi name must be ${Ie} characters or fewer.`),De(this.draftApSSID)>Ie&&(r.wifiAPSSID=`Access point name must be ${Ie} characters or fewer.`),i?this.draftApSSID.length===0&&(r.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(r.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&De(this.draftWifiPassword)>ye&&(r.wifiPassword=`Wi-Fi password must be ${ye} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let s=De(this.draftApPassword);(s<ct||s>ye)&&(r.wifiAPPassword=`Access point password must be ${ct}–${ye} characters.`)}else t.hasWifiAPPassword||(r.wifiAPPassword=`Enter an access point password (${ct}–${ye} characters).`);return r}buildPatch(){let t=this.settings,r={};if(!t)return r;let i=this.draftMode==="ap";return i!==t.isAPMode&&(r.isAPMode=i),this.draftWifiSSID!==t.wifiSSID&&(r.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(r.wifiPassword=this.draftWifiPassword),this.draftApSSID!==t.wifiAPSSID&&(r.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==t.wifiAPHasPassword&&(r.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(r.wifiAPPassword=this.draftApPassword),r}async handleSave(){if(this.submitting||!this.settings)return;let t=this.validate();if(this.fieldErrors=t,Object.keys(t).length>0)return;let r=this.buildPatch();if(Object.keys(r).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let i=await this.ensureClient().saveSettings(r);if(this.submitting=!1,i.ok){this.applyServerSettings(i.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:i.data,bubbles:!0,composed:!0}));return}let s=i.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":i.message;this.errorMessage=s,this.emitError(s)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let t=new AbortController;this.scanController=t;let r,i=new Promise(o=>{r=setTimeout(()=>{t.abort(),o({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},On)}),s=await Promise.race([this.ensureClient().wifiList(t.signal),i]);if(r!==void 0&&clearTimeout(r),this.scanController===t&&(this.scanController=void 0),this.scanning=!1,s.ok){this.scanResults=[...s.data.networks].sort((o,a)=>a.rssi-o.rssi);return}s.message!=="Request aborted."&&(this.scanError=s.message,this.emitError(s.message))}emitError(t){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:t},bubbles:!0,composed:!0}))}setMode(t){this.draftMode!==t&&(this.draftMode=t,this.fieldErrors={})}},se.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},se.styles=Pt`
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
  `,se);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",Hn);var Bn=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],ne,Wn=(ne=class extends te{constructor(...t){super(...t),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return M`
      <div class="tabs" role="tablist" aria-label="Network">
        ${Bn.map(t=>M`
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
    `}selectTab(t){this.activeTab!==t&&(this.activeTab=t,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:t},bubbles:!0,composed:!0})))}},ne.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},ne.styles=Pt`
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
  `,ne);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",Wn);const hr=document.getElementById("app");hr&&ts(n(un,{}),hr);
