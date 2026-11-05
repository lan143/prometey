(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();var $t,I,Rs,X,Cr,qs,Os,Nt,ot,Fe,Hs,rr,Wt,zt,mt={},ft=[],Bi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,yt=Array.isArray;function Y(t,e){for(var r in e)t[r]=e[r];return t}function sr(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Wi(t,e,r){var s,i,n,o={};for(n in e)n=="key"?s=e[n]:n=="ref"?i=e[n]:o[n]=e[n];if(arguments.length>2&&(o.children=arguments.length>3?$t.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)o[n]===void 0&&(o[n]=t.defaultProps[n]);return at(t,o,s,i,null)}function at(t,e,r,s,i){var n={type:t,props:e,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Rs,__i:-1,__u:0};return i==null&&I.vnode!=null&&I.vnode(n),n}function z(t){return t.children}function lt(t,e){this.props=t,this.context=e}function fe(t,e){if(e==null)return t.__?fe(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?fe(t):null}function zi(t){if(t.__P&&t.__d){var e=t.__v,r=e.__e,s=[],i=[],n=Y({},e);n.__v=e.__v+1,I.vnode&&I.vnode(n),ir(t.__P,n,e,t.__n,t.__P.namespaceURI,32&e.__u?[r]:null,s,r??fe(e),!!(32&e.__u),i),n.__v=e.__v,n.__.__k[n.__i]=n,zs(s,n,i),e.__e=e.__=null,n.__e!=r&&Fs(n)}}function Fs(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),Fs(t)}function Mr(t){(!t.__d&&(t.__d=!0)&&X.push(t)&&!gt.__r++||Cr!=I.debounceRendering)&&((Cr=I.debounceRendering)||qs)(gt)}function gt(){try{for(var t,e=1;X.length;)X.length>e&&X.sort(Os),t=X.shift(),e=X.length,zi(t)}finally{X.length=gt.__r=0}}function Ls(t,e,r,s,i,n,o,d,l,h,u){var p,c,m,_,y,v,b=s&&s.__k||ft,g=e.length;for(l=ji(r,e,b,l,g),p=0;p<g;p++)(m=r.__k[p])!=null&&(c=m.__i!=-1&&b[m.__i]||mt,m.__i=p,v=ir(t,m,c,i,n,o,d,l,h,u),_=m.__e,m.ref&&c.ref!=m.ref&&(c.ref&&nr(c.ref,null,m),u.push(m.ref,m.__c||_,m)),y==null&&_!=null&&(y=_),4&m.__u?(l=Bs(m,l,t),c.__e&&(c.__e=null)):typeof m.type=="function"&&v!==void 0?l=v:_&&(l=_.nextSibling),m.__u&=-7);return r.__e=y,l}function ji(t,e,r,s,i){var n,o,d,l,h,u=r.length,p=u,c=0;for(t.__k=new Array(i),n=0;n<i;n++)(o=e[n])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=t.__k[n]=at(null,o,null,null,null):yt(o)?o=t.__k[n]=at(z,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=t.__k[n]=at(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):t.__k[n]=o,l=n+c,o.__=t,o.__b=t.__b+1,d=null,(h=o.__i=Vi(o,r,l,p))!=-1&&(p--,(d=r[h])&&(d.__u|=2)),d==null||d.__v==null?(h==-1&&(i>u?c--:i<u&&c++),typeof o.type!="function"&&(o.__u|=4)):h!=l&&(h==l-1?c--:h==l+1?c++:(h>l?c--:c++,o.__u|=4))):t.__k[n]=null;if(p)for(n=0;n<u;n++)(d=r[n])!=null&&(2&d.__u)==0&&(d.__e==s&&(s=fe(d)),Vs(d,d));return s}function Bs(t,e,r){var s,i;if(typeof t.type=="function"){for(s=t.__k,i=0;s&&i<s.length;i++)s[i]&&(s[i].__=t,e=Bs(s[i],e,r));return e}t.__e!=e&&(e&&t.type&&!e.parentNode&&(e=fe(t)),e=r.insertBefore(t.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Vi(t,e,r,s){var i,n,o,d=t.key,l=t.type,h=e[r],u=h!=null&&(2&h.__u)==0;if(h===null&&d==null||u&&d==h.key&&l==h.type)return r;if(s>(u?1:0)){for(i=r-1,n=r+1;i>=0||n<e.length;)if((h=e[o=i>=0?i--:n++])!=null&&(2&h.__u)==0&&d==h.key&&l==h.type)return o}return-1}function Ir(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||Bi.test(e)?r:r+"px"}function tt(t,e,r,s,i){var n,o;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof s=="string"&&(t.style.cssText=s=""),s)for(e in s)r&&e in r||Ir(t.style,e,"");if(r)for(e in r)s&&r[e]==s[e]||Ir(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")n=e!=(e=e.replace(Hs,"$1")),o=e.toLowerCase(),e=o in t||e=="onFocusOut"||e=="onFocusIn"?o.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=r,r?s?r[Fe]=s[Fe]:(r[Fe]=rr,t.addEventListener(e,n?zt:Wt,n)):t.removeEventListener(e,n?zt:Wt,n);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function Nr(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e[ot]==null)e[ot]=rr++;else if(e[ot]<r[Fe])return;return r(I.event?I.event(e):e)}}}function ir(t,e,r,s,i,n,o,d,l,h){var u,p,c,m,_,y,v,b,g,P,D,E,O,w,U,k,S=e.type;if(e.constructor!==void 0)return null;128&r.__u&&(l=!!(32&r.__u),n=[d=e.__e=r.__e]),(u=I.__b)&&u(e);e:if(typeof S=="function"){p=o.length;try{if(g=e.props,P=S.prototype&&S.prototype.render,D=(u=S.contextType)&&s[u.__c],E=u?D?D.props.value:u.__:s,r.__c?b=(c=e.__c=r.__c).__=c.__E:(P?e.__c=c=new S(g,E):(e.__c=c=new lt(g,E),c.constructor=S,c.render=Qi),D&&D.sub(c),c.state||(c.state={}),c.__n=s,m=c.__d=!0,c.__h=[],c._sb=[]),P&&c.__s==null&&(c.__s=c.state),P&&S.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Y({},c.__s)),Y(c.__s,S.getDerivedStateFromProps(g,c.__s))),_=c.props,y=c.state,c.__v=e,m)P&&S.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),P&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(P&&S.getDerivedStateFromProps==null&&g!==_&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(g,E),e.__v==r.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(g,c.__s,E)===!1){e.__v!=r.__v&&(c.props=g,c.state=c.__s,c.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(B){B&&(B.__=e)}),ft.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&o.push(c),d=fe(r);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(g,c.__s,E),P&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(_,y,v)})}if(c.context=E,c.props=g,c.__P=t,c.__e=!1,O=I.__r,w=0,P)c.state=c.__s,c.__d=!1,O&&O(e),u=c.render(c.props,c.state,c.context),ft.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,O&&O(e),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++w<25);c.state=c.__s,c.getChildContext!=null&&(s=Y(Y({},s),c.getChildContext())),P&&!m&&c.getSnapshotBeforeUpdate!=null&&(v=c.getSnapshotBeforeUpdate(_,y)),U=u!=null&&u.type===z&&u.key==null?js(u.props.children):u,d=Ls(t,yt(U)?U:[U],e,r,s,i,n,o,d,l,h),c.base=e.__e,e.__u&=-161,c.__h.length&&o.push(c),b&&(c.__E=c.__=null)}catch(B){if(o.length=p,e.__v=null,l||n!=null){if(B.then){for(e.__u|=l?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;n!=null&&(n[n.indexOf(d)]=null),e.__e=d}else if(n!=null)for(k=n.length;k--;)sr(n[k])}else e.__e=r.__e;e.__k==null&&(e.__k=r.__k||[]),B.then||Ws(e),I.__e(B,e,r)}}else n==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):d=e.__e=Ki(r.__e,e,r,s,i,n,o,l,h);return(u=I.diffed)&&u(e),128&e.__u?void 0:d}function Ws(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(Ws))}function zs(t,e,r){for(var s=0;s<r.length;s++)nr(r[s],r[++s],r[++s]);I.__c&&I.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(n){n.call(i)})}catch(n){I.__e(n,i.__v)}})}function js(t){return typeof t!="object"||t==null||t.__b>0?t:yt(t)?t.map(js):t.constructor!==void 0?null:Y({},t)}function Ki(t,e,r,s,i,n,o,d,l){var h,u,p,c,m,_,y,v=r.props||mt,b=e.props,g=e.type;if(g=="svg"?i="http://www.w3.org/2000/svg":g=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),n!=null){for(h=0;h<n.length;h++)if((m=n[h])&&"setAttribute"in m==!!g&&(g?m.localName==g:m.nodeType==3)){t=m,n[h]=null;break}}if(t==null){if(g==null)return document.createTextNode(b);t=document.createElementNS(i,g,b.is&&b),d&&(I.__m&&I.__m(e,n),d=!1),n=null}if(g==null)v===b||d&&t.data==b||(t.data=b);else{if(n=g=="textarea"&&b.defaultValue!=null?null:n&&$t.call(t.childNodes),!d&&n!=null)for(v={},h=0;h<t.attributes.length;h++)v[(m=t.attributes[h]).name]=m.value;for(h in v)m=v[h],h=="dangerouslySetInnerHTML"?p=m:h=="children"||h in b||h=="value"&&"defaultValue"in b||h=="checked"&&"defaultChecked"in b||tt(t,h,null,m,i);for(h in b)m=b[h],h=="children"?c=m:h=="dangerouslySetInnerHTML"?u=m:h=="value"?_=m:h=="checked"?y=m:d&&typeof m!="function"||v[h]===m||tt(t,h,m,v[h],i);if(u)d||p&&(u.__html==p.__html||u.__html==t.innerHTML)||(t.innerHTML=u.__html),e.__k=[];else if(p&&(t.innerHTML=""),Ls(e.type=="template"?t.content:t,yt(c)?c:[c],e,r,s,g=="foreignObject"?"http://www.w3.org/1999/xhtml":i,n,o,n?n[0]:r.__k&&fe(r,0),d,l),n!=null)for(h=n.length;h--;)sr(n[h]);d&&g!="textarea"||(h="value",g=="progress"&&_==null?t.removeAttribute("value"):_!=null&&(_!==t[h]||g=="progress"&&!_||g=="option"&&_!=v[h])&&tt(t,h,_,v[h],i),h="checked",y!=null&&y!=t[h]&&tt(t,h,y,v[h],i))}return t}function nr(t,e,r){try{if(typeof t=="function"){var s=typeof t.__u=="function";s&&t.__u(),s&&e==null||(t.__u=t(e))}else t.current=e}catch(i){I.__e(i,r)}}function Vs(t,e,r){var s,i;if(I.unmount&&I.unmount(t),(s=t.ref)&&(s.current&&s.current!=t.__e||nr(s,null,e)),(s=t.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(n){I.__e(n,e)}s.base=s.__P=s.__n=null}if(s=t.__k)for(i=0;i<s.length;i++)s[i]&&Vs(s[i],e,r||typeof t.type!="function");r||sr(t.__e),t.__c=t.__=t.__e=void 0}function Qi(t,e,r){return this.constructor(t,r)}function Ji(t,e,r){var s,i,n,o;e==document&&(e=document.documentElement),I.__&&I.__(t,e),i=(s=!1)?null:e.__k,n=[],o=[],ir(e,t=e.__k=Wi(z,null,[t]),i||mt,mt,e.namespaceURI,i?null:e.firstChild?$t.call(e.childNodes):null,n,i?i.__e:e.firstChild,s,o),zs(n,t,o),t.props.children=null}$t=ft.slice,I={__e:function(t,e,r,s){for(var i,n,o;e=e.__;)if((i=e.__c)&&!i.__)try{if((n=i.constructor)&&n.getDerivedStateFromError!=null&&(i.setState(n.getDerivedStateFromError(t)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,s||{}),o=i.__d),o)return i.__E=i}catch(d){t=d}throw t}},Rs=0,lt.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Y({},this.state),typeof t=="function"&&(t=t(Y({},r),this.props)),t&&Y(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),Mr(this))},lt.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Mr(this))},lt.prototype.render=z,X=[],qs=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Os=function(t,e){return t.__v.__b-e.__v.__b},gt.__r=0,Nt=Math.random().toString(8),ot="__d"+Nt,Fe="__a"+Nt,Hs=/(PointerCapture)$|Capture$/i,rr=0,Wt=Nr(!1),zt=Nr(!0);var Gi=0;function a(t,e,r,s,i,n){e||(e={});var o,d,l=e;if("ref"in l)for(d in l={},e)d=="ref"?o=e[d]:l[d]=e[d];var h={type:t,props:l,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Gi,__i:-1,__u:0,__source:i,__self:n};if(typeof t=="function"&&(o=t.defaultProps))for(d in o)l[d]===void 0&&(l[d]=o[d]);return I.vnode&&I.vnode(h),h}var ke,q,Dt,Dr,Ve=0,Ks=[],F=I,Ur=F.__b,Rr=F.__r,qr=F.diffed,Or=F.__c,Hr=F.unmount,Fr=F.__;function wt(t,e){F.__h&&F.__h(q,t,Ve||e),Ve=0;var r=q.__H||(q.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function $(t){return Ve=1,Zi(Js,t)}function Zi(t,e,r){var s=wt(ke++,2);if(s.t=t,!s.__c&&(s.__=[Js(void 0,e),function(d){var l=s.__N?s.__N[0]:s.__[0],h=s.t(l,d);l!==h&&(s.__N=[h,s.__[1]],s.__c.setState({}))}],s.__c=q,!q.__f)){var i=function(d,l,h){if(!s.__c.__H)return!0;var u=!1,p=s.__c.props!==d;if(s.__c.__H.__.some(function(m){if(m.__N){u=!0;var _=m.__[0];m.__=m.__N,m.__N=void 0,_!==m.__[0]&&(p=!0)}}),n){var c=n.call(this,d,l,h);return u?c||p:c}return!u||p};q.__f=!0;var n=q.shouldComponentUpdate,o=q.componentWillUpdate;q.componentWillUpdate=function(d,l,h){if(this.__e){var u=n;n=void 0,i(d,l,h),n=u}o&&o.call(this,d,l,h)},q.shouldComponentUpdate=i}return s.__N||s.__}function J(t,e){var r=wt(ke++,3);!F.__s&&Qs(r.__H,e)&&(r.__=t,r.u=e,q.__H.__h.push(r))}function St(t){return Ve=5,At(function(){return{current:t}},[])}function At(t,e){var r=wt(ke++,7);return Qs(r.__H,e)&&(r.__=t(),r.__H=e,r.__h=t),r.__}function W(t,e){return Ve=8,At(function(){return t},e)}function or(){var t=wt(ke++,11);if(!t.__){for(var e=q.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var r=e.__m||(e.__m=[0,0]);t.__="P"+r[0]+"-"+r[1]++}return t.__}function Yi(){for(var t;t=Ks.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(dt),e.__h.some(jt),e.__h=[]}catch(r){e.__h=[],F.__e(r,t.__v)}}}F.__b=function(t){q=null,Ur&&Ur(t)},F.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Fr&&Fr(t,e)},F.__r=function(t){Rr&&Rr(t),ke=0;var e=(q=t.__c).__H;e&&(Dt===q?(e.__h=[],q.__h=[],e.__.some(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(e.__h.some(dt),e.__h.some(jt),e.__h=[],ke=0)),Dt=q},F.diffed=function(t){qr&&qr(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ks.push(e)!==1&&Dr===F.requestAnimationFrame||((Dr=F.requestAnimationFrame)||Xi)(Yi)),e.__H.__.some(function(r){r.u&&(r.__H=r.u,r.u=void 0)})),Dt=q=null},F.__c=function(t,e){e.some(function(r){try{r.__h.some(dt),r.__h=r.__h.filter(function(s){return!s.__||jt(s)})}catch(s){e.some(function(i){i.__h&&(i.__h=[])}),e=[],F.__e(s,r.__v)}}),Or&&Or(t,e)},F.unmount=function(t){Hr&&Hr(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.some(function(s){try{dt(s)}catch(i){e=i}}),r.__H=void 0,e&&F.__e(e,r.__v))};var Lr=typeof requestAnimationFrame=="function";function Xi(t){var e,r=function(){clearTimeout(s),Lr&&cancelAnimationFrame(e),setTimeout(t)},s=setTimeout(r,35);Lr&&(e=requestAnimationFrame(r))}function dt(t){var e=q,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),q=e}function jt(t){var e=q;t.__c=t.__(),q=e}function Qs(t,e){return!t||t.length!==e.length||e.some(function(r,s){return r!==t[s]})}function Js(t,e){return typeof e=="function"?e(t):e}const f={mqtt:{hostMin:1,hostMax:63,loginMax:31,passwordMax:31,haDiscoveryPrefixMin:1,haDiscoveryPrefixMax:63,topicMin:1,topicMax:63},boiler:{topicMax:63,fieldMax:15,savableDrivers:[1],savableOutdoorSensors:[1]},room:{count:8,idMin:0,idMax:7,nameMax:31,topicMax:63,temperatureFieldMax:15,savableTemperatureSensorTypes:[1],pidMin:0},valve:{count:9,idMin:0,idMax:8,channelMin:0,channelMax:15,roomIdMin:0,roomIdMax:7,fullTravelTimeMin:0,fullTravelTimeMax:6e5,windowTimeMin:0,windowTimeMax:6e5,savableTypes:[1]}},Tt="Device returned an empty response (config too large for its 4KB JSON limit — shorten names/topics)",ar="Device returned an empty response.",Gs="Could not reach the device. Check that you are connected to its network and try again.",rt={};function Zs(){return{ok:!1,message:Gs}}function en(t){try{const e=JSON.parse(t);if(e&&typeof e=="object"&&"message"in e){const r=e.message;if(typeof r=="string"&&r)return r}}catch{}}async function Ys(t){let e=`Request failed (HTTP ${t.status}).`;try{const r=await t.text();r&&(e=en(r)??e)}catch{}return{ok:!1,status:t.status,message:e}}async function ve(t,e){let r;try{r=await fetch(t,{headers:{Accept:"application/json"}})}catch{return Zs()}if(!r.ok)return Ys(r);let s;try{s=await r.text()}catch{return{ok:!1,status:r.status,message:Gs}}if(!s.trim())return{ok:!1,status:r.status,message:e};try{return{ok:!0,data:JSON.parse(s)}}catch{return{ok:!1,status:r.status,message:e}}}async function lr(t,e){let r;try{r=await fetch(t,e)}catch{return Zs()}if(!r.ok)return Ys(r);let s="";try{s=await r.text()}catch{return{ok:!0,data:rt}}if(!s.trim())return{ok:!0,data:rt};try{const i=JSON.parse(s);return{ok:!0,data:i&&typeof i=="object"?i:rt}}catch{return{ok:!0,data:rt}}}function Xs(t,e){return lr(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:e.toString()})}function ei(t,e){return lr(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}function V(t,e,r,s=!1){if(typeof t!="string")throw new Error(`${e} is required.`);if(!s&&t.length===0)throw new Error(`${e} must not be empty.`);if(t.length>r)throw new Error(`${e} must be at most ${r} characters.`);return t}function H(t,e,r,s){if(typeof t!="number"||!Number.isFinite(t))throw new Error(`${e} must be a number.`);if(t<r||t>s)throw new Error(`${e} must be between ${r} and ${s}.`);return t}function dr(t,e){if(typeof t!="boolean")throw new Error(`${e} must be true or false.`);return t}function tn(){return ve("/api/settings",Tt)}function rn(){return ve("/api/settings/boiler",Tt)}function sn(){return ve("/api/settings/rooms",Tt)}function nn(){return ve("/api/settings/valves",Tt)}function ti(){return ve("/api/status",ar)}function ri(){return ve("/healthcheck/healty",ar)}function on(){return ve("/healthcheck/ready",ar)}function an(t){const e=V(t.host,"MQTT host",f.mqtt.hostMax),r=H(t.port,"MQTT port",1,65535),s=V(t.login,"MQTT login",f.mqtt.loginMax,!0),i=V(t.password,"MQTT password",f.mqtt.passwordMax,!0),n=V(t.haDiscoveryPrefix,"HA discovery prefix",f.mqtt.haDiscoveryPrefixMax),o=dr(t.mqttIsHADiscovery,"HA discovery flag"),d=V(t.stateTopic,"State topic",f.mqtt.topicMax),l=V(t.commandTopic,"Command topic",f.mqtt.topicMax),h=new URLSearchParams;return h.set("host",e),h.set("port",String(r)),h.set("login",s),h.set("password",i),h.set("haDiscoveryPrefix",n),h.set("mqttIsHADiscovery",o?"true":"false"),h.set("stateTopic",d),h.set("commandTopic",l),Xs("/api/settings/mqtt",h)}function ln(t){const e=H(t.driver,"Boiler driver",0,1),r=H(t.modbusAddress,"Modbus address",0,255),s=H(t.modbusSpeed,"Modbus speed",0,1e6),i=H(t.K,"Weather curve K",-1e6,1e6),n=H(t.B,"Weather curve B",-1e6,1e6),o=H(t.P,"Weather curve P",-1e6,1e6),d=H(t.I,"Weather curve I",-1e6,1e6),l=H(t.minSetPoint,"Minimum setpoint",30,80);if(e!==1)throw new Error('Boiler driver must be ECTOControlV2 (1); the device rejects "No select".');const h=H(t.outdoorSensor,"Outdoor sensor",0,1);if(h!==1)throw new Error('Outdoor sensor must be MQTT (1); the device rejects "No select".');const u=V(t.outdoorSensorMqttTopic??"","Outdoor sensor topic",f.boiler.topicMax,!0),p=V(t.outdoorSensorMqttField??"","Outdoor sensor field",f.boiler.fieldMax,!0);if(h===1&&u.length===0)throw new Error("Outdoor sensor topic is required when MQTT is selected.");const c=new URLSearchParams;return c.set("driver",String(e)),c.set("modbusAddress",String(r)),c.set("modbusSpeed",String(s)),c.set("K",String(i)),c.set("B",String(n)),c.set("P",String(o)),c.set("I",String(d)),c.set("minSetPoint",String(l)),c.set("outdoorSensor",String(h)),c.set("outdoorSensorMqttTopic",u),c.set("outdoorSensorMqttField",p),Xs("/api/settings/boiler/update",c)}function Vt(t){const e=H(t.id,"Room id",f.room.idMin,f.room.idMax),r=dr(t.enabled,"Room enabled"),s=H(t.temperatureSensorType,"Temperature sensor type",1,1),i=V(t.name,"Room name",f.room.nameMax),n=V(t.mqttCommandTopic,"Room command topic",f.room.topicMax),o=V(t.mqttStateTopic,"Room state topic",f.room.topicMax),d=V(t.mqttTemperatureSensorTopic,"Temperature topic",f.room.topicMax),l=V(t.mqttTemperatureSensorField.trim(),"Temperature field",f.room.temperatureFieldMax,!0),h=H(t.kP,"Room kP",f.room.pidMin,1e6),u=H(t.kI,"Room kI",f.room.pidMin,1e6),p=H(t.kD,"Room kD",f.room.pidMin,1e6);return ei("/api/settings/room",{id:e,enabled:r,temperatureSensorType:s,name:i,mqttCommandTopic:n,mqttStateTopic:o,mqttTemperatureSensorTopic:d,mqttTemperatureSensorField:l,kP:h,kI:u,kD:p})}function Kt(t){const e=H(t.id,"Valve id",f.valve.idMin,f.valve.idMax),r=dr(t.enabled,"Valve enabled"),s=H(t.type,"Valve type",1,1),i=H(t.channel,"Valve channel",f.valve.channelMin,f.valve.channelMax),n=H(t.fullTravelTime,"Full travel time",f.valve.fullTravelTimeMin,f.valve.fullTravelTimeMax),o=H(t.windowTime,"Window time",f.valve.windowTimeMin,f.valve.windowTimeMax),d=H(t.roomID,"Room id",f.valve.roomIdMin,f.valve.roomIdMax);return ei("/api/settings/valve",{id:e,enabled:r,type:s,channel:i,fullTravelTime:n,windowTime:o,roomID:d})}function dn(){return lr("/api/reboot",{method:"POST"})}function cn({tabs:t,active:e,onSelect:r}){return a("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:t.map(s=>a("button",{type:"button",role:"tab",id:`tab-${s.id}`,"aria-selected":s.id===e,"aria-controls":`panel-${s.id}`,class:s.id===e?"active":void 0,onClick:()=>r(s.id),children:s.label},s.id))})}function C({kind:t="info",message:e,onClose:r}){return a("div",{class:`banner banner-${t}`,role:"status",children:[a("span",{children:e}),r?a("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:r,children:"×"}):null]})}function hn(t){switch(t){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function R({children:t,variant:e="default",type:r="button",disabled:s,title:i,onClick:n}){return a("button",{type:r,class:hn(e),disabled:s,title:i,onClick:n,children:t})}function cr(t){return a(R,{...t,variant:"danger"})}function K({title:t,children:e,class:r}){return a("section",{class:r?`card ${r}`:"card",children:[t?a("h2",{children:t}):null,e]})}const Ut=2e3,un=12e4;function pn(){const[t,e]=$("idle"),r=St(0);J(()=>{if(t!=="rebooting")return;let o=!1,d;const l=()=>{ri().then(h=>{if(!o){if(h.ok){e("ready");return}if(r.current+=1,r.current*Ut>=un){e("timeout");return}d=window.setTimeout(l,Ut)}})};return d=window.setTimeout(l,Ut),()=>{o=!0,d!==void 0&&window.clearTimeout(d)}},[t]);const s=W(()=>{r.current=0,e("rebooting")},[]),i=W(()=>e("idle"),[]),n=W(()=>{r.current=0,e("rebooting")},[]);return At(()=>({phase:t,start:s,dismiss:i,retry:n}),[t,s,i,n])}function mn({flow:t}){return t.phase==="idle"?null:a("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:a("div",{class:"reboot-dialog card",children:[a("h2",{children:"Device is rebooting"}),t.phase==="rebooting"?a(z,{children:[a("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),a("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,t.phase==="ready"?a(z,{children:[a(C,{kind:"success",message:"The device is back online."}),a("div",{class:"form-actions",children:a(R,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,t.phase==="timeout"?a(z,{children:[a(C,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),a("div",{class:"form-actions",children:[a(R,{onClick:t.retry,children:"Keep waiting"}),a(R,{onClick:t.dismiss,children:"Dismiss"})]})]}):null]})})}const fn=1e4;function gn(t){const e=Math.max(0,Math.floor(t)),r=Math.floor(e/86400),s=Math.floor(e%86400/3600),i=Math.floor(e%3600/60),n=e%60,o=[];return r&&o.push(`${r}d`),(r||s)&&o.push(`${s}h`),(r||s||i)&&o.push(`${i}m`),o.push(`${n}s`),o.join(" ")}function _n(t){return Number.isFinite(t)?`${Math.round(t/1024)} KB (${Math.round(t)} bytes)`:String(t)}function bn(){const[t,e]=$(null),[r,s]=$(null),[i,n]=$(!1),[o,d]=$(null),[l,h]=$(null),[u,p]=$(!0),[c,m]=$(null),[_,y]=$(!1),v=pn(),b=W(async()=>{const O=await ti();O.ok?(e(O.data),s(null)):s(O.message),n(!0)},[]),g=W(async()=>{p(!0);const[O,w]=await Promise.all([ri(),on()]);d(O),h(w),p(!1)},[]);J(()=>{b();const O=window.setInterval(()=>{b()},fn);return()=>window.clearInterval(O)},[b]),J(()=>{g()},[g]);const P=W(async()=>{if(!window.confirm("Reboot the device now? Heating control will be offline for about 20-60 seconds."))return;m(null),y(!0);const w=await dn();y(!1),w.ok?v.start():m(w.message)},[v.start]),D=u&&!o?a("p",{class:"muted",children:"Checking device health…"}):o?o.ok?a(C,{kind:o.data.healty?"success":"error",message:o.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):a(C,{kind:"error",message:o.message}):null,E=l?l.ok?a(C,{kind:l.data.ready?"success":"info",message:l.data.ready?"All registered services are ready.":`Not ready: ${l.data.message}`}):l.status===500?a(C,{kind:"info",message:`Not ready: ${l.message}`}):a(C,{kind:"error",message:l.message}):null;return a("div",{class:"stack",children:[a(K,{title:"Device",children:[i?r?a(z,{children:[a(C,{kind:"error",message:r}),a("div",{class:"form-actions",children:a(R,{onClick:()=>{b()},children:"Retry"})})]}):t?a("dl",{class:"kv",children:[a("dt",{children:"Free heap"}),a("dd",{children:_n(t.freeHeap)}),a("dt",{children:"Uptime"}),a("dd",{children:gn(t.uptime)}),a("dt",{children:"Last reset reason"}),a("dd",{children:t.lastResetReason})]}):null:a("p",{class:"muted",children:"Loading status…"}),a("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),a(K,{title:"Health",children:[D,E,a("div",{class:"form-actions",children:a(R,{onClick:()=>{g()},disabled:u,children:u?"Checking…":"Refresh health"})})]}),a(K,{title:"Maintenance",children:[a("p",{class:"muted",children:"A reboot briefly interrupts heating control. Configuration changes saved on the other tabs only take effect after a reboot."}),c?a(C,{kind:"error",message:c,onClose:()=>m(null)}):null,a("div",{class:"form-actions",children:a(cr,{onClick:()=>{P()},disabled:_||v.phase!=="idle",children:"Reboot device"})})]}),a(mn,{flow:v})]})}function vn({label:t,checked:e,onChange:r,disabled:s,help:i,name:n}){const o=or();return a("div",{class:"checkbox-field",children:[a("label",{class:"checkbox-label",for:o,children:[a("input",{id:o,name:n,type:"checkbox",checked:e,disabled:s,onChange:l=>{r?.(l.currentTarget.checked)}}),a("span",{children:t})]}),i?a("span",{class:"field-help",children:i}):null]})}function A({label:t,value:e,onInput:r,type:s="text",name:i,placeholder:n,maxLength:o,min:d,max:l,step:h,error:u,help:p,disabled:c,required:m,autoComplete:_,inputMode:y}){const v=or();return a("label",{class:"field",for:v,children:[a("span",{class:"field-label",children:t}),a("input",{id:v,name:i,type:s,value:e,placeholder:n,maxLength:o,min:d,max:l,step:h,disabled:c,required:m,autoComplete:_,inputMode:y,onInput:g=>{r?.(g.currentTarget.value)},"aria-invalid":u?!0:void 0}),p&&!u?a("span",{class:"field-help",children:p}):null,u?a("span",{class:"field-error",children:u}):null]})}function Ne(){return a(C,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."})}function $n({label:t,value:e,onInput:r,maxLength:s,error:i,help:n,disabled:o,autoComplete:d}){const[l,h]=$(!1);return a("div",{class:"password-field",children:[a(A,{label:t,value:e,onInput:r,type:l?"text":"password",maxLength:s,error:i,help:n,disabled:o,autoComplete:d}),a("button",{type:"button",class:"btn reveal-toggle","aria-pressed":l,disabled:o,onClick:()=>h(u=>!u),children:l?"Hide":"Show"})]})}const yn={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:""};function wn(t){const e={};t.host.trim().length===0?e.host="Host is required.":t.host.length>f.mqtt.hostMax&&(e.host=`At most ${f.mqtt.hostMax} characters.`);const r=Number(t.port);return t.port.trim()===""?e.port="Port is required.":(!Number.isInteger(r)||r<1||r>65535)&&(e.port="Port must be an integer between 1 and 65535."),t.login.length>f.mqtt.loginMax&&(e.login=`At most ${f.mqtt.loginMax} characters.`),t.password.length>f.mqtt.passwordMax&&(e.password=`At most ${f.mqtt.passwordMax} characters.`),t.haDiscoveryPrefix.trim().length===0?e.haDiscoveryPrefix="Discovery prefix is required.":t.haDiscoveryPrefix.length>f.mqtt.haDiscoveryPrefixMax&&(e.haDiscoveryPrefix=`At most ${f.mqtt.haDiscoveryPrefixMax} characters.`),t.stateTopic.trim().length===0?e.stateTopic="Required - the device crashes if the state topic is missing.":t.stateTopic.length>f.mqtt.topicMax&&(e.stateTopic=`At most ${f.mqtt.topicMax} characters.`),t.commandTopic.trim().length===0?e.commandTopic="Required - the device crashes if the command topic is missing.":t.commandTopic.length>f.mqtt.topicMax&&(e.commandTopic=`At most ${f.mqtt.topicMax} characters.`),e}function Sn(t){return Object.keys(t).length>0}function An(){const[t,e]=$(!1),[r,s]=$(null),[i,n]=$(yn),[o,d]=$({}),[l,h]=$(!1),[u,p]=$(null),[c,m]=$(null),_=W(async()=>{s(null);const b=await tn();b.ok?n({host:b.data.mqttHost,port:String(b.data.mqttPort),login:b.data.mqttLogin,password:b.data.mqttPassword,haDiscoveryPrefix:b.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:b.data.mqttIsHADiscovery,stateTopic:b.data.mqttStateTopic,commandTopic:b.data.mqttCommandTopic}):s(b.message),e(!0)},[]);J(()=>{_()},[_]);const y=b=>n(g=>({...g,...b})),v=W(async b=>{b.preventDefault();const g=wn(i);if(d(g),p(null),m(null),Sn(g))return;h(!0);const P=await an({host:i.host,port:Number(i.port),login:i.login,password:i.password,haDiscoveryPrefix:i.haDiscoveryPrefix,mqttIsHADiscovery:i.mqttIsHADiscovery,stateTopic:i.stateTopic,commandTopic:i.commandTopic});h(!1),P.ok?p("MQTT settings saved to flash."):m(P.message)},[i]);return t?a("div",{class:"stack",children:[a(Ne,{}),r?a(z,{children:[a(C,{kind:"error",message:r}),a("div",{class:"form-actions",children:a(R,{onClick:()=>{_()},children:"Retry"})})]}):null,a(K,{title:"MQTT",children:a("form",{onSubmit:v,children:[a(A,{label:"Host",value:i.host,onInput:b=>y({host:b}),maxLength:f.mqtt.hostMax,error:o.host,autoComplete:"off"}),a(A,{label:"Port",value:i.port,onInput:b=>y({port:b}),type:"number",min:1,max:65535,inputMode:"numeric",error:o.port}),a(A,{label:"Login",value:i.login,onInput:b=>y({login:b}),maxLength:f.mqtt.loginMax,error:o.login,autoComplete:"off"}),a($n,{label:"Password",value:i.password,onInput:b=>y({password:b}),maxLength:f.mqtt.passwordMax,error:o.password,autoComplete:"new-password"}),a(A,{label:"HA discovery prefix",value:i.haDiscoveryPrefix,onInput:b=>y({haDiscoveryPrefix:b}),maxLength:f.mqtt.haDiscoveryPrefixMax,error:o.haDiscoveryPrefix,autoComplete:"off"}),a(vn,{label:"Enable Home Assistant discovery",checked:i.mqttIsHADiscovery,onChange:b=>y({mqttIsHADiscovery:b})}),a(A,{label:"State topic",value:i.stateTopic,onInput:b=>y({stateTopic:b}),maxLength:f.mqtt.topicMax,error:o.stateTopic,help:"Must not be empty: the device crashes on a missing state topic.",autoComplete:"off"}),a(A,{label:"Command topic",value:i.commandTopic,onInput:b=>y({commandTopic:b}),maxLength:f.mqtt.topicMax,error:o.commandTopic,help:"Must not be empty: the device crashes on a missing command topic.",autoComplete:"off"}),u?a(C,{kind:"success",message:u,onClose:()=>p(null)}):null,c?a(C,{kind:"error",message:c,onClose:()=>m(null)}):null,a("div",{class:"form-actions",children:a(R,{type:"submit",variant:"primary",disabled:l,children:l?"Saving…":"Save MQTT"})})]})})]}):a(K,{title:"Connections",children:a("p",{class:"muted",children:"Loading connection settings…"})})}function ct({label:t,value:e,options:r,onChange:s,error:i,help:n,disabled:o,required:d,name:l}){const h=or(),u=p=>{s?.(p.currentTarget.value)};return a("label",{class:"field",for:h,children:[a("span",{class:"field-label",children:t}),a("select",{id:h,name:l,value:String(e),disabled:o,required:d,onChange:u,"aria-invalid":i?!0:void 0,children:r.map(p=>a("option",{value:p.value,disabled:p.disabled,children:p.label},p.value))}),n&&!i?a("span",{class:"field-help",children:n}):null,i?a("span",{class:"field-error",children:i}):null]})}const Tn=640,Br=360,Z=56,ye=624,Oe=16,Te=312,si=ye-Z,ii=Te-Oe,Qt=20,ni=-30,Jt=20,oi=85,Wr=80,kn=[20,10,0,-10,-20,-30],xn=[20,30,40,50,60,70,80],En=1,Pn=7.2,Cn=50;function Rt(t,e){return Number.isFinite(t)?t:e}function zr(t){return Z+(Qt-t)/(Qt-ni)*si}function st(t){return Te-(t-Jt)/(oi-Jt)*ii}function Mn(t){return t>0?`+${t}`:String(t)}function In({k:t,b:e,minSetPoint:r}){const s=Rt(t,En),i=Rt(e,Pn),n=Rt(r,Cn),o=-.21*s-.06,d=6.04*s+1.98,l=-5.06*s+18.06,h=[];for(let c=Qt;c>=ni;c-=1){const m=-.2*c+5,_=o*m*m+d*m+l+i,y=Math.min(Wr,Math.max(n,_));h.push(`${zr(c).toFixed(2)},${st(y).toFixed(2)}`)}const u=st(Math.min(oi,Math.max(Jt,n))),p=st(Wr);return a("svg",{class:"weather-curve",viewBox:`0 0 ${Tn} ${Br}`,preserveAspectRatio:"xMidYMid meet",role:"img","aria-label":"Weather curve: computed boiler setpoint versus outdoor temperature",children:[a("rect",{class:"wc-plot",x:Z,y:Oe,width:si,height:ii}),xn.map(c=>{const m=st(c);return a("g",{children:[a("line",{class:"wc-grid",x1:Z,y1:m,x2:ye,y2:m}),a("text",{class:"wc-tick",x:Z-8,y:m+4,"text-anchor":"end",children:c})]},`sp-${c}`)}),kn.map(c=>{const m=zr(c);return a("g",{children:[a("line",{class:"wc-grid",x1:m,y1:Oe,x2:m,y2:Te}),a("text",{class:"wc-tick",x:m,y:Te+18,"text-anchor":"middle",children:Mn(c)})]},`out-${c}`)}),a("line",{class:"wc-max",x1:Z,y1:p,x2:ye,y2:p}),a("text",{class:"wc-max-label",x:ye-4,y:p-5,"text-anchor":"end",children:"max 80"}),a("polyline",{class:"wc-curve",points:h.join(" ")}),a("line",{class:"wc-min",x1:Z,y1:u,x2:ye,y2:u}),a("text",{class:"wc-min-label",x:Z+4,y:u-5,"text-anchor":"start",children:"min"}),a("text",{class:"wc-axis-title",x:(Z+ye)/2,y:Br-8,"text-anchor":"middle",children:"Outdoor, °C"}),a("text",{class:"wc-axis-title",x:16,y:(Oe+Te)/2,"text-anchor":"middle",transform:`rotate(-90 16 ${(Oe+Te)/2})`,children:"Setpoint, °C"})]})}const jr=[1200,2400,4800,9600,19200,38400,57600,115200],Nn={driver:"0",modbusAddress:"1",modbusSpeed:"9600",K:"0",B:"0",P:"0",I:"0",minSetPoint:"50",outdoorSensor:"0",outdoorSensorMqttTopic:"",outdoorSensorMqttField:""};function He(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function Dn(t){return Object.keys(t).length>0}function Un(t){const e={};t.driver!=="1"&&(e.driver='Saving requires ECTOControlV2 (1); the device rejects "No select".');const r=He(t.modbusAddress);(r===null||!Number.isInteger(r)||r<1||r>247)&&(e.modbusAddress="Address must be an integer between 1 and 247.");const s=He(t.modbusSpeed);(s===null||s<=0)&&(e.modbusSpeed="Speed must be a positive number.");const i=[["K",t.K,"K"],["B",t.B,"B"],["P",t.P,"P"],["I",t.I,"I"]];for(const[o,d,l]of i)He(d)===null&&(e[o]=`${l} must be a number.`);const n=He(t.minSetPoint);return(n===null||n<30||n>80)&&(e.minSetPoint="Minimum setpoint must be between 30 and 80."),t.outdoorSensor!=="1"&&(e.outdoorSensor='Saving requires MQTT (1); the device rejects "No".'),t.outdoorSensorMqttTopic.trim().length===0?e.outdoorSensorMqttTopic="Topic is required when MQTT is selected.":t.outdoorSensorMqttTopic.length>f.boiler.topicMax&&(e.outdoorSensorMqttTopic=`At most ${f.boiler.topicMax} characters.`),t.outdoorSensorMqttField.length>f.boiler.fieldMax&&(e.outdoorSensorMqttField=`At most ${f.boiler.fieldMax} characters.`),e}function Rn(t){const e=jr.map(s=>({value:String(s),label:String(s)})),r=He(t);return r!==null&&!jr.includes(r)&&e.unshift({value:t,label:`${t} (current)`}),e}function qn(){const[t,e]=$(!1),[r,s]=$(null),[i,n]=$(Nn),[o,d]=$({}),[l,h]=$(!1),[u,p]=$(null),[c,m]=$(null),_=At(()=>Rn(i.modbusSpeed),[i.modbusSpeed]),y=W(async()=>{s(null);const g=await rn();g.ok?n({driver:String(g.data.driver),modbusAddress:String(g.data.modbusAddress),modbusSpeed:String(g.data.modbusSpeed),K:String(g.data.K),B:String(g.data.B),P:String(g.data.P),I:String(g.data.I),minSetPoint:String(g.data.minSetPoint),outdoorSensor:String(g.data.outdoorSensor),outdoorSensorMqttTopic:g.data.outdoorSensorMqttTopic,outdoorSensorMqttField:g.data.outdoorSensorMqttField}):s(g.message),e(!0)},[]);J(()=>{y()},[y]);const v=g=>n(P=>({...P,...g})),b=W(async g=>{g.preventDefault();const P=Un(i);if(d(P),p(null),m(null),Dn(P))return;h(!0);const D=await ln({driver:Number(i.driver),modbusAddress:Number(i.modbusAddress),modbusSpeed:Number(i.modbusSpeed),K:Number(i.K),B:Number(i.B),P:Number(i.P),I:Number(i.I),minSetPoint:Number(i.minSetPoint),outdoorSensor:Number(i.outdoorSensor),outdoorSensorMqttTopic:i.outdoorSensorMqttTopic,outdoorSensorMqttField:i.outdoorSensorMqttField});h(!1),D.ok?p("Boiler settings saved to flash."):m(D.message)},[i]);return t?a("div",{class:"stack",children:[a(Ne,{}),r?a(z,{children:[a(C,{kind:"error",message:r}),a("div",{class:"form-actions",children:a(R,{onClick:()=>{y()},children:"Retry"})})]}):null,a(K,{title:"Boiler driver",children:a("form",{onSubmit:b,children:[a(ct,{label:"Driver",value:i.driver,onChange:g=>v({driver:g}),options:[{value:"0",label:"No select (0) - not savable"},{value:"1",label:"ECTOControlV2 (1)"}],error:o.driver,help:"The device accepts only ECTOControlV2 when saving."}),a(A,{label:"Modbus address",value:i.modbusAddress,onInput:g=>v({modbusAddress:g}),type:"number",min:1,max:247,step:1,inputMode:"numeric",error:o.modbusAddress,help:"1-247 (the firmware does not range-check this)."}),a(ct,{label:"Modbus speed (baud)",value:i.modbusSpeed,onChange:g=>v({modbusSpeed:g}),options:_,error:o.modbusSpeed}),a("h3",{children:"Weather curve"}),a(A,{label:"K (curve scale)",value:i.K,onInput:g=>v({K:g}),type:"number",step:.1,error:o.K}),a(A,{label:"B (offset, °C)",value:i.B,onInput:g=>v({B:g}),type:"number",step:.1,error:o.B}),a(A,{label:"P (trim gain)",value:i.P,onInput:g=>v({P:g}),type:"number",step:.1,error:o.P}),a(A,{label:"I (trim integral, °C/s)",value:i.I,onInput:g=>v({I:g}),type:"number",step:.1,error:o.I}),a(A,{label:"Minimum setpoint (°C)",value:i.minSetPoint,onInput:g=>v({minSetPoint:g}),type:"number",min:30,max:80,step:1,inputMode:"numeric",error:o.minSetPoint,help:"Lower bound for the computed setpoint (30-80 °C)."}),a("p",{class:"muted",children:"Base curve without room trim. Effective setpoint = curve + trim, clamped to [min, 80]."}),a(In,{k:Number(i.K),b:Number(i.B),minSetPoint:Number(i.minSetPoint)}),a("h3",{children:"Outdoor sensor"}),a(ct,{label:"Source",value:i.outdoorSensor,onChange:g=>v({outdoorSensor:g}),options:[{value:"0",label:"No (0) - not savable"},{value:"1",label:"MQTT (1)"}],error:o.outdoorSensor,help:"The device accepts only MQTT when saving."}),a(A,{label:"Outdoor sensor MQTT topic",value:i.outdoorSensorMqttTopic,onInput:g=>v({outdoorSensorMqttTopic:g}),maxLength:f.boiler.topicMax,disabled:i.outdoorSensor!=="1",error:o.outdoorSensorMqttTopic,help:"Required when the source is MQTT.",autoComplete:"off"}),a(A,{label:"Outdoor sensor MQTT field",value:i.outdoorSensorMqttField,onInput:g=>v({outdoorSensorMqttField:g}),placeholder:"value",maxLength:f.boiler.fieldMax,disabled:i.outdoorSensor!=="1",error:o.outdoorSensorMqttField,help:"Optional; leave empty if the payload is a bare number (parsed as float, not JSON).",autoComplete:"off"}),u?a(C,{kind:"success",message:u,onClose:()=>p(null)}):null,c?a(C,{kind:"error",message:c,onClose:()=>m(null)}):null,a("div",{class:"form-actions",children:a(R,{type:"submit",variant:"primary",disabled:l,children:l?"Saving…":"Save boiler settings"})})]})})]}):a(K,{title:"Boiler",children:a("p",{class:"muted",children:"Loading boiler settings…"})})}const On="60000",Hn="30000";function qt(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function ai(t){return Object.keys(t).length>0}function li(t,e){const r={},s=qt(t.channel);s===null||!Number.isInteger(s)||s<f.valve.channelMin||s>f.valve.channelMax?r.channel=`Channel must be an integer between ${f.valve.channelMin} and ${f.valve.channelMax}.`:e?.has(s)&&(r.channel=`Channel ${s} is already used by another enabled valve.`);const i=qt(t.fullTravelTime);(i===null||!Number.isInteger(i)||i<f.valve.fullTravelTimeMin||i>f.valve.fullTravelTimeMax)&&(r.fullTravelTime=`Full travel time must be an integer number of milliseconds between ${f.valve.fullTravelTimeMin} and ${f.valve.fullTravelTimeMax}.`);const n=qt(t.windowTime);return(n===null||!Number.isInteger(n)||n<f.valve.windowTimeMin||n>f.valve.windowTimeMax)&&(r.windowTime=`Window time must be an integer number of milliseconds between ${f.valve.windowTimeMin} and ${f.valve.windowTimeMax}.`),r}function Vr(t){return{channel:String(t.channel),fullTravelTime:String(t.fullTravelTime),windowTime:String(t.windowTime)}}function Fn({id:t,valve:e,onSaved:r,onNotice:s,takenChannels:i}){const[n,o]=$(!1),[d,l]=$(()=>Vr(e)),[h,u]=$({}),[p,c]=$(!1),[m,_]=$(!1),[y,v]=$(null),[b,g]=$(null),[P,D]=$(null),E=k=>l(S=>({...S,...k})),O=()=>{n||(l(Vr(e)),u({}),v(null),g(null)),o(k=>!k)},w=async k=>{k.preventDefault();const S=li(d,i);if(u(S),v(null),g(null),ai(S))return;const B=Number(d.channel),Xe=Number(d.fullTravelTime),et=Number(d.windowTime);c(!0);try{const Q=await Kt({id:t,enabled:!0,type:f.valve.savableTypes[0],channel:B,fullTravelTime:Xe,windowTime:et,roomID:e.roomID});c(!1),Q.ok?(v("Valve saved to flash."),r(t,{...e,enabled:!0,type:f.valve.savableTypes[0],channel:B,fullTravelTime:Xe,windowTime:et,roomID:e.roomID})):g(Q.message)}catch(Q){c(!1),g(Q instanceof Error?Q.message:String(Q))}},U=async()=>{if(window.confirm("Valve will be unbound on next reboot. Continue?")){D(null),_(!0);try{const S=await Kt({id:t,enabled:!1,type:f.valve.savableTypes[0],channel:e.channel,fullTravelTime:e.fullTravelTime,windowTime:e.windowTime,roomID:e.roomID});_(!1),S.ok?(r(t,{...e,enabled:!1,type:f.valve.savableTypes[0]}),s("Valve unbound. Reboot to apply.")):D(S.message)}catch(S){_(!1),D(S instanceof Error?S.message:String(S))}}};return a("li",{class:"valve-row",children:[a("div",{class:"row",children:[a("span",{class:"valve-summary",children:["Valve ",a("span",{class:"mono",children:t}),a("span",{class:"sep","aria-hidden":"true",children:"·"}),"channel ",a("span",{class:"mono",children:e.channel}),a("span",{class:"sep","aria-hidden":"true",children:"·"}),a("span",{class:"mono",children:e.fullTravelTime})," ",a("span",{class:"unit",children:"ms travel"}),a("span",{class:"sep","aria-hidden":"true",children:"·"}),a("span",{class:"mono",children:e.windowTime})," ",a("span",{class:"unit",children:"ms window"})]}),a("div",{class:"form-actions",children:[a(R,{onClick:O,disabled:p||m,children:n?"Close":"Edit"}),a(cr,{onClick:()=>{U()},disabled:m||p,children:m?"Deleting…":"Delete"})]})]}),P?a(C,{kind:"error",message:P,onClose:()=>D(null)}):null,n?a("form",{onSubmit:w,children:[a(A,{label:"Channel",value:d.channel,onInput:k=>E({channel:k}),type:"number",min:f.valve.channelMin,max:f.valve.channelMax,step:1,inputMode:"numeric",error:h.channel}),a(A,{label:"Full travel time (ms)",value:d.fullTravelTime,onInput:k=>E({fullTravelTime:k}),type:"number",min:f.valve.fullTravelTimeMin,max:f.valve.fullTravelTimeMax,step:1,inputMode:"numeric",error:h.fullTravelTime}),a(A,{label:"Window time (ms)",value:d.windowTime,onInput:k=>E({windowTime:k}),type:"number",min:f.valve.windowTimeMin,max:f.valve.windowTimeMax,step:1,inputMode:"numeric",error:h.windowTime}),y?a(C,{kind:"success",message:y,onClose:()=>v(null)}):null,b?a(C,{kind:"error",message:b,onClose:()=>g(null)}):null,a(Ne,{}),a("div",{class:"form-actions",children:a(R,{type:"submit",variant:"primary",disabled:p||m,children:p?"Saving…":`Save valve ${t}`})})]}):null]})}function Ln({slot:t,roomSlot:e,suggestedChannel:r,takenChannels:s,onAdded:i,onCancel:n}){const[o,d]=$(()=>({channel:String(r),fullTravelTime:On,windowTime:Hn})),[l,h]=$({}),[u,p]=$(!1),[c,m]=$(null),_=v=>d(b=>({...b,...v}));return a("form",{onSubmit:async v=>{v.preventDefault();const b=li(o,s);if(h(b),m(null),ai(b))return;const g=Number(o.channel),P=Number(o.fullTravelTime),D=Number(o.windowTime);p(!0);try{const E=await Kt({id:t,enabled:!0,type:f.valve.savableTypes[0],channel:g,fullTravelTime:P,windowTime:D,roomID:e});p(!1),E.ok?i(t,{enabled:!0,type:f.valve.savableTypes[0],channel:g,fullTravelTime:P,windowTime:D,roomID:e}):m(E.message)}catch(E){p(!1),m(E instanceof Error?E.message:String(E))}},children:[a(C,{kind:"info",message:"Suggested channel and timings are prefilled. Review before adding."}),a(A,{label:"Channel",value:o.channel,onInput:v=>_({channel:v}),type:"number",min:f.valve.channelMin,max:f.valve.channelMax,step:1,inputMode:"numeric",error:l.channel}),a(A,{label:"Full travel time (ms)",value:o.fullTravelTime,onInput:v=>_({fullTravelTime:v}),type:"number",min:f.valve.fullTravelTimeMin,max:f.valve.fullTravelTimeMax,step:1,inputMode:"numeric",error:l.fullTravelTime}),a(A,{label:"Window time (ms)",value:o.windowTime,onInput:v=>_({windowTime:v}),type:"number",min:f.valve.windowTimeMin,max:f.valve.windowTimeMax,step:1,inputMode:"numeric",error:l.windowTime}),c?a(C,{kind:"error",message:c,onClose:()=>m(null)}):null,a(Ne,{}),a("div",{class:"form-actions",children:[a(R,{type:"submit",variant:"primary",disabled:u,children:u?"Adding…":`Add valve ${t}`}),a(R,{onClick:n,disabled:u,children:"Cancel"})]})]})}function Bn({roomSlot:t,valves:e,valvesError:r,onRetry:s,onSaved:i}){const[n,o]=$(!1),[d,l]=$(null),h=W((_,y)=>{i(_,y),o(!1),l("Valve added to this room. Reboot to apply.")},[i]);if(r)return a("div",{class:"mt valve-section",children:[a("h4",{children:"Valves"}),a(C,{kind:"error",message:r}),a("div",{class:"form-actions",children:a(R,{onClick:s,children:"Retry"})})]});if(!e)return a("div",{class:"mt valve-section",children:[a("h4",{children:"Valves"}),a("p",{class:"muted",children:"Loading valves…"})]});const u=e.map((_,y)=>({valve:_,id:y})).filter(_=>_.valve.enabled&&_.valve.roomID===t),p=e.findIndex(_=>!_.enabled),c=new Set(e.filter(_=>_.enabled).map(_=>_.channel));let m=f.valve.channelMin;for(;m<=f.valve.channelMax&&c.has(m);)m+=1;return m>f.valve.channelMax&&(m=f.valve.channelMin),a("div",{class:"mt valve-section",children:[a("h4",{children:"Valves"}),d?a(C,{kind:"success",message:d,onClose:()=>l(null)}):null,u.length===0?a("p",{class:"muted",children:"No valves bound."}):a("ul",{class:"valve-list",children:u.map(({valve:_,id:y})=>{const v=new Set(e.filter((b,g)=>b.enabled&&g!==y).map(b=>b.channel));return a(Fn,{id:y,valve:_,onSaved:i,onNotice:b=>l(b),takenChannels:v},y)})}),p>=0?n?a(Ln,{slot:p,roomSlot:t,suggestedChannel:m,takenChannels:c,onAdded:h,onCancel:()=>o(!1)}):a("div",{class:"form-actions",children:a(R,{onClick:()=>o(!0),children:"Add valve"})}):a("p",{class:"muted",children:"All 9 valve slots are in use."})]})}function Wn(t){if(t.trim()==="")return null;const e=Number(t);return Number.isFinite(e)?e:null}function di(t){return Object.keys(t).length>0}function ci(t){const e={};t.name.trim().length===0?e.name="Name is required.":t.name.length>f.room.nameMax&&(e.name=`At most ${f.room.nameMax} characters.`);const r=[["mqttCommandTopic",t.mqttCommandTopic,"Command topic",f.room.topicMax],["mqttStateTopic",t.mqttStateTopic,"State topic",f.room.topicMax],["mqttTemperatureSensorTopic",t.mqttTemperatureSensorTopic,"Temperature topic",f.room.topicMax]];for(const[i,n,o,d]of r)n.trim().length===0?e[i]=`${o} is required.`:n.length>d&&(e[i]=`At most ${d} characters.`);t.mqttTemperatureSensorField.trim().length>f.room.temperatureFieldMax&&(e.mqttTemperatureSensorField=`At most ${f.room.temperatureFieldMax} characters.`);const s=[["kP",t.kP,"kP"],["kI",t.kI,"kI"],["kD",t.kD,"kD"]];for(const[i,n,o]of s){const d=Wn(n);(d===null||d<f.room.pidMin||d>1e6)&&(e[i]=`${o} must be a number greater than or equal to ${f.room.pidMin} and at most 1000000.`)}return e}function Kr(t,e){const r=t.name||`Room ${e+1}`,s=t.mqttCommandTopic||`prometey/room${e}/set`,i=t.mqttStateTopic||`prometey/room${e}/state`,n=t.mqttTemperatureSensorTopic||`prometey/room${e}/temperature`,o=t.mqttTemperatureSensorField;return{usedPlaceholders:(t.name||"").trim().length===0||(t.mqttCommandTopic||"").trim().length===0||(t.mqttStateTopic||"").trim().length===0||(t.mqttTemperatureSensorTopic||"").trim().length===0,form:{enabled:t.enabled,name:r,mqttCommandTopic:s,mqttStateTopic:i,mqttTemperatureSensorTopic:n,mqttTemperatureSensorField:o,kP:String(t.kP),kI:String(t.kI),kD:String(t.kD)}}}function zn(t){return{enabled:!0,name:`Room ${t+1}`,mqttCommandTopic:`prometey/room${t}/set`,mqttStateTopic:`prometey/room${t}/state`,mqttTemperatureSensorTopic:`prometey/room${t}/temperature`,mqttTemperatureSensorField:"",kP:"1",kI:"0.01",kD:"0"}}function jn(t,e,r){return{id:e,enabled:r,temperatureSensorType:f.room.savableTemperatureSensorTypes[0],name:t.name,mqttCommandTopic:t.mqttCommandTopic,mqttStateTopic:t.mqttStateTopic,mqttTemperatureSensorTopic:t.mqttTemperatureSensorTopic,mqttTemperatureSensorField:t.mqttTemperatureSensorField,kP:t.kP,kI:t.kI,kD:t.kD}}function Vn({slot:t,room:e,valves:r,valvesError:s,onRetryValves:i,onValveSaved:n,onSaved:o,onDeleted:d}){const[l,h]=$(!1),[u,p]=$(()=>Kr(e,t).form),[c,m]=$(!1),[_,y]=$({}),[v,b]=$(!1),[g,P]=$(!1),[D,E]=$(null),[O,w]=$(null),[U,k]=$(null),S=M=>p(j=>({...j,...M})),B=()=>{if(!l){const M=Kr(e,t);p(M.form),m(M.usedPlaceholders),y({}),E(null),w(null)}h(M=>!M)},Xe=async M=>{M.preventDefault();const j=ci(u);if(y(j),E(null),w(null),!di(j)){b(!0);try{const $e=await Vt({id:t,enabled:u.enabled,temperatureSensorType:f.room.savableTemperatureSensorTypes[0],name:u.name,mqttCommandTopic:u.mqttCommandTopic,mqttStateTopic:u.mqttStateTopic,mqttTemperatureSensorTopic:u.mqttTemperatureSensorTopic,mqttTemperatureSensorField:u.mqttTemperatureSensorField,kP:Number(u.kP),kI:Number(u.kI),kD:Number(u.kD)});b(!1),$e.ok?(E("Room saved to flash."),m(!1),o(t,{...e,id:t,enabled:u.enabled,name:u.name,mqttCommandTopic:u.mqttCommandTopic,mqttStateTopic:u.mqttStateTopic,mqttTemperatureSensorTopic:u.mqttTemperatureSensorTopic,mqttTemperatureSensorField:u.mqttTemperatureSensorField,kP:Number(u.kP),kI:Number(u.kI),kD:Number(u.kD)})):w($e.message)}catch($e){b(!1),w($e instanceof Error?$e.message:String($e))}}},et=async()=>{if(window.confirm(`Delete room "${e.name||`slot ${t}`}"? This sets enabled=false and keeps the stored config; the DEVICE WILL NEED A REBOOT for heating control to stop.`)){k(null),P(!0);try{const j=await Vt(jn(e,t,!1));P(!1),j.ok?d(t):k(j.message)}catch(j){P(!1),k(j instanceof Error?j.message:String(j))}}},Q=[];e.I!==void 0&&Q.push(["PID I (runtime)",String(e.I)]),e.prevError!==void 0&&Q.push(["prevError (runtime)",String(e.prevError)]),e.valveOpeningPercent!==void 0&&Q.push(["Valve opening",`${e.valveOpeningPercent}%`]),e.prevTime!==void 0&&Q.push(["prevTime (raw)",String(e.prevTime)]);const It=r?r.filter(M=>M.enabled&&M.roomID===t).length:null;return a(K,{class:"room-card",children:[a("div",{class:"card-header",children:[a("h3",{children:[e.name||`Room ${t+1}`," ",a("span",{class:"badge badge-slot",children:["slot ",t]})]}),It!==null?a("span",{class:"muted",children:[It," valve",It===1?"":"s"," bound"]}):null]}),e.id!==t?a(C,{kind:"info",message:`Stored id is ${e.id} but this entry sits in slot ${t}; saving rewrites slot ${t} and normalizes the id.`}):null,a("dl",{class:"kv",children:[e.id!==t?a(z,{children:[a("dt",{children:"Stored id"}),a("dd",{children:e.id})]}):null,a("dt",{children:"Command topic"}),a("dd",{children:e.mqttCommandTopic||a("span",{class:"muted",children:"(empty)"})}),a("dt",{children:"State topic"}),a("dd",{children:e.mqttStateTopic||a("span",{class:"muted",children:"(empty)"})}),a("dt",{children:"Temperature topic"}),a("dd",{children:e.mqttTemperatureSensorTopic||a("span",{class:"muted",children:"(empty)"})}),a("dt",{children:"Temperature field"}),a("dd",{children:e.mqttTemperatureSensorField||a("span",{class:"muted",children:"(empty)"})}),a("dt",{children:"kP / kI / kD"}),a("dd",{children:[e.kP," / ",e.kI," / ",e.kD]}),Q.map(([M,j])=>a(z,{children:[a("dt",{children:M}),a("dd",{children:j})]},M))]}),a("div",{class:"form-actions",children:[a(R,{onClick:B,disabled:v||g,children:l?"Close editor":"Edit room"}),a(cr,{onClick:()=>{et()},disabled:g||v,children:g?"Deleting…":"Delete room"})]}),U?a(C,{kind:"error",message:U,onClose:()=>k(null)}):null,l?a("div",{class:"room-editor",children:[a("form",{onSubmit:Xe,children:[c?a(C,{kind:"info",message:"This room had empty required fields; suggested defaults were prefilled. Review and adjust before saving."}):null,a(A,{label:"Room id",value:t,disabled:!0,help:"Fixed slot index; the device writes to this position."}),a(ct,{label:"Temperature sensor type",value:f.room.savableTemperatureSensorTypes[0],disabled:!0,options:[{value:"1",label:"MQTT (1)"}],help:"Only MQTT is accepted by the firmware, even for disabled rooms."}),a(A,{label:"Name",value:u.name,onInput:M=>S({name:M}),maxLength:f.room.nameMax,error:_.name,autoComplete:"off"}),a(A,{label:"Command topic",value:u.mqttCommandTopic,onInput:M=>S({mqttCommandTopic:M}),maxLength:f.room.topicMax,error:_.mqttCommandTopic,autoComplete:"off"}),a(A,{label:"State topic",value:u.mqttStateTopic,onInput:M=>S({mqttStateTopic:M}),maxLength:f.room.topicMax,error:_.mqttStateTopic,autoComplete:"off"}),a(A,{label:"Temperature topic",value:u.mqttTemperatureSensorTopic,onInput:M=>S({mqttTemperatureSensorTopic:M}),maxLength:f.room.topicMax,error:_.mqttTemperatureSensorTopic,autoComplete:"off"}),a(A,{label:"Temperature field",value:u.mqttTemperatureSensorField,onInput:M=>S({mqttTemperatureSensorField:M}),placeholder:"value",maxLength:f.room.temperatureFieldMax,error:_.mqttTemperatureSensorField,help:"Optional; leave empty if the message payload is a bare number (parsed as float, not JSON).",autoComplete:"off"}),a(A,{label:"kP",value:u.kP,onInput:M=>S({kP:M}),type:"number",min:f.room.pidMin,step:.1,error:_.kP}),a(A,{label:"kI",value:u.kI,onInput:M=>S({kI:M}),type:"number",min:f.room.pidMin,step:.1,error:_.kI}),a(A,{label:"kD",value:u.kD,onInput:M=>S({kD:M}),type:"number",min:f.room.pidMin,step:.1,error:_.kD}),D?a(C,{kind:"success",message:D,onClose:()=>E(null)}):null,O?a(C,{kind:"error",message:O,onClose:()=>w(null)}):null,a(Ne,{}),a("div",{class:"form-actions",children:a(R,{type:"submit",variant:"primary",disabled:v||g,children:v?"Saving…":`Save room ${t}`})})]}),a(Bn,{roomSlot:t,valves:r,valvesError:s,onRetry:i,onSaved:n})]}):null]})}function Qr({freeSlot:t,onAdded:e,onCancel:r}){const[s,i]=$(()=>zn(t)),[n,o]=$({}),[d,l]=$(!1),[h,u]=$(null),p=m=>i(_=>({..._,...m}));return a("form",{onSubmit:async m=>{m.preventDefault();const _=ci(s);if(o(_),u(null),di(_))return;const y=Number(s.kP),v=Number(s.kI),b=Number(s.kD);l(!0);try{const g=await Vt({id:t,enabled:!0,temperatureSensorType:f.room.savableTemperatureSensorTypes[0],name:s.name,mqttCommandTopic:s.mqttCommandTopic,mqttStateTopic:s.mqttStateTopic,mqttTemperatureSensorTopic:s.mqttTemperatureSensorTopic,mqttTemperatureSensorField:s.mqttTemperatureSensorField,kP:y,kI:v,kD:b});l(!1),g.ok?e(t,{id:t,enabled:!0,temperatureSensorType:f.room.savableTemperatureSensorTypes[0],name:s.name,mqttCommandTopic:s.mqttCommandTopic,mqttStateTopic:s.mqttStateTopic,mqttTemperatureSensorTopic:s.mqttTemperatureSensorTopic,mqttTemperatureSensorField:s.mqttTemperatureSensorField,kP:y,kI:v,kD:b}):u(g.message)}catch(g){l(!1),u(g instanceof Error?g.message:String(g))}},children:[a(C,{kind:"info",message:`Suggested defaults for slot ${t} are prefilled. Review and adjust before adding.`}),a(A,{label:"Room id",value:t,disabled:!0,help:"Lowest free slot; the device writes to this position."}),a(A,{label:"Name",value:s.name,onInput:m=>p({name:m}),maxLength:f.room.nameMax,error:n.name,autoComplete:"off"}),a(A,{label:"Command topic",value:s.mqttCommandTopic,onInput:m=>p({mqttCommandTopic:m}),maxLength:f.room.topicMax,error:n.mqttCommandTopic,autoComplete:"off"}),a(A,{label:"State topic",value:s.mqttStateTopic,onInput:m=>p({mqttStateTopic:m}),maxLength:f.room.topicMax,error:n.mqttStateTopic,autoComplete:"off"}),a(A,{label:"Temperature topic",value:s.mqttTemperatureSensorTopic,onInput:m=>p({mqttTemperatureSensorTopic:m}),maxLength:f.room.topicMax,error:n.mqttTemperatureSensorTopic,autoComplete:"off"}),a(A,{label:"Temperature field",value:s.mqttTemperatureSensorField,onInput:m=>p({mqttTemperatureSensorField:m}),placeholder:"value",maxLength:f.room.temperatureFieldMax,error:n.mqttTemperatureSensorField,help:"Optional; leave empty if the message payload is a bare number (parsed as float, not JSON).",autoComplete:"off"}),a(A,{label:"kP",value:s.kP,onInput:m=>p({kP:m}),type:"number",min:f.room.pidMin,step:.1,error:n.kP,help:"Suggested starting value."}),a(A,{label:"kI",value:s.kI,onInput:m=>p({kI:m}),type:"number",min:f.room.pidMin,step:.01,error:n.kI,help:"Suggested starting value."}),a(A,{label:"kD",value:s.kD,onInput:m=>p({kD:m}),type:"number",min:f.room.pidMin,step:.1,error:n.kD,help:"Suggested starting value."}),h?a(C,{kind:"error",message:h,onClose:()=>u(null)}):null,a(Ne,{}),a("div",{class:"form-actions",children:[a(R,{type:"submit",variant:"primary",disabled:d,children:d?"Adding…":`Add room ${t}`}),a(R,{onClick:r,disabled:d,children:"Cancel"})]})]})}function Kn(){const[t,e]=$(null),[r,s]=$(!1),[i,n]=$(null),[o,d]=$(null),[l,h]=$(null),[u,p]=$(!1),[c,m]=$(null),_=W(async()=>{n(null);const w=await sn();w.ok?Array.isArray(w.data.rooms)?e(w.data.rooms):n("Device returned an unexpected rooms payload."):n(w.message),s(!0)},[]),y=W(async()=>{h(null);const w=await nn();w.ok?Array.isArray(w.data.valves)?d(w.data.valves):h("Device returned an unexpected valves payload."):h(w.message)},[]);J(()=>{_(),y()},[_,y]);const v=W((w,U)=>{e(k=>k&&k.map((S,B)=>B===w?U:S))},[]),b=W((w,U)=>{d(k=>k&&k.map((S,B)=>B===w?U:S))},[]),g=W((w,U)=>{e(k=>k&&k.map((S,B)=>B===w?U:S)),p(!1),m("Room added. Reboot to apply.")},[]),P=W(w=>{e(U=>U&&U.map((k,S)=>S===w?{...k,id:w,enabled:!1}:k)),m("Room removed from heating. Reboot to apply.")},[]);if(!r)return a(K,{title:"Rooms",children:a("p",{class:"muted",children:"Loading rooms…"})});const D=(t??[]).map((w,U)=>({room:w,slot:U})).filter(w=>w.room.enabled),E=t?t.findIndex(w=>!w.enabled):-1,O=E>=0?a(K,{title:"Add room",children:u?a(Qr,{freeSlot:E,onAdded:g,onCancel:()=>p(!1)},E):a("div",{class:"form-actions",children:a(R,{variant:"primary",onClick:()=>p(!0),children:"Add room"})})}):a(K,{title:"Add room",children:a("p",{class:"muted",children:"All 8 room slots are in use. Disable a room before adding another."})});return a("div",{class:"stack",children:i?a(K,{title:"Rooms",children:[a(C,{kind:"error",message:i}),a("div",{class:"form-actions",children:a(R,{onClick:()=>{_()},children:"Retry"})})]}):t?a(z,{children:[c?a(C,{kind:"info",message:c,onClose:()=>m(null)}):null,D.length===0?a(K,{title:"Rooms",children:u&&E>=0?a(Qr,{freeSlot:E,onAdded:g,onCancel:()=>p(!1)},E):a(z,{children:[a("p",{class:"muted",children:"No rooms are enabled yet. Add a room to start controlling heating."}),E>=0?a("div",{class:"form-actions",children:a(R,{variant:"primary",onClick:()=>p(!0),children:"Add room"})}):a("p",{class:"muted",children:"All 8 room slots are in use. Disable a room before adding another."})]})}):a(z,{children:[D.map(({room:w,slot:U})=>a(Vn,{slot:U,room:w,valves:o,valvesError:l,onRetryValves:()=>{y()},onValveSaved:b,onSaved:v,onDeleted:P},U)),O]})]}):null})}const Qn="Download a zip of everything the device has stored: config.bin + boiler state + room states (8). It contains your Wi-Fi and MQTT credentials in plaintext, so keep the archive somewhere safe. Download the FULL BACKUP zip before uploading the web UI: filesystem uploads (pio run -e kc868a16 -t uploadfs) ERASE LittleFS, so /config.bin, /boiler.bin and every /room_*.bin are gone.",Jn="Download config.bin only. It contains your Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.",Gn="Uploading this archive REPLACES config.bin, boiler state and room states on the device AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?",Zn="Uploading REPLACES /config.bin on the device AND REBOOTS IT IMMEDIATELY. Unsaved in-RAM settings will be lost. The device will be offline 20-60 seconds. Continue?";function Yn(){const t=St(null);return J(()=>{const e=document.createElement("edc-config-backup-page");return e.setAttribute("device-name","Prometey"),e.setAttribute("archive-file-name","prometey-config.zip"),e.setAttribute("zip-notes",Qn),e.setAttribute("bin-notes",Jn),e.setAttribute("zip-confirm-text",Gn),e.setAttribute("bin-confirm-text",Zn),t.current?.append(e),()=>e.remove()},[]),a("div",{ref:t})}function Xn(){const t=St(null);return J(()=>{const e=document.createElement("edn-network-page");return t.current?.append(e),()=>e.remove()},[]),a("div",{ref:t})}function eo(){const t=St(null);return J(()=>{const e=document.createElement("edu-log-settings-page");return e.setAttribute("device-name","Prometey"),t.current?.append(e),()=>e.remove()},[]),a("div",{ref:t})}const to=[{id:"status",label:"Status"},{id:"connections",label:"MQTT"},{id:"network",label:"Network"},{id:"boiler",label:"Boiler"},{id:"rooms",label:"Rooms"},{id:"logger",label:"Logger"},{id:"backup",label:"Backup"}];function ro(t){switch(t){case"status":return a(bn,{});case"connections":return a(An,{});case"network":return a(Xn,{});case"boiler":return a(qn,{});case"rooms":return a(Kn,{});case"logger":return a(eo,{});case"backup":return a(Yn,{})}}function so(){const[t,e]=$("status"),[r,s]=$(null);return J(()=>{let i=!0;return ti().then(n=>{i&&n.ok&&n.data.fwVersion&&s(n.data.fwVersion)}),()=>{i=!1}},[]),a(z,{children:[a("header",{class:"app-header",children:[a("div",{class:"brand",children:[a("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:[a("path",{fill:"currentColor",d:"M12 23c4.4 0 7.5-2.7 7.5-6.7 0-2.3-1-4.3-2.3-6.1-.8 1.6-1.8 2.6-2.9 3.3.4-1.4.2-3.1-.7-5C12.7 6.1 11.3 4.3 10.4 2c-.3 2.3-1.4 4-2.7 5.5C6.4 9.1 4.5 11 4.5 15c0 4 3.1 8 7.5 8z"}),a("path",{fill:"currentColor",opacity:".45",d:"M12 21.2c-1.6 0-2.8-1.1-2.8-2.8 0-1.3.7-2.1 1.5-3 .3.7.8 1.1 1.4 1.4-.2-1.2.1-2.4 1-3.5.9 1.2 1.4 2.6 1.4 4 0 2.3-1.4 3.9-2.5 3.9z"})]}),a("h1",{children:"Prometey"})]}),a("div",{class:"versions",children:[a("span",{class:"hint",children:"offline device panel"}),a("span",{class:"hint version",children:["FW ",r??"—"]}),a("span",{class:"hint version",children:["UI ","4c7dd09-dirty"]})]})]}),a(cn,{tabs:to,active:t,onSelect:e}),a("main",{class:"tab-content",id:`panel-${t}`,role:"tabpanel","aria-labelledby":`tab-${t}`,children:ro(t)})]})}function io(t){if(t&&typeof t=="object"&&"error"in t){let e=t.error;if(typeof e=="string"&&e.length>0)return e}}function hi(t={}){let e=t.baseUrl??"",r=t.headers??{};async function s(i,n){let o;try{o=await fetch(`${e}${i}`,{...n,headers:{Accept:"application/json",...n?.body===void 0?{}:{"Content-Type":"application/json"},...r}})}catch(u){return n?.signal?.aborted===!0||typeof u=="object"&&u&&u.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let d=await o.text().catch(()=>""),l,h=!1;if(d.length>0)try{l=JSON.parse(d),h=!0}catch{h=!1}if(!o.ok){let u=io(l);return{ok:!1,status:o.status,message:u??`Request failed with HTTP ${o.status}.`}}return h?{ok:!0,data:l}:{ok:!1,status:o.status,message:`Unexpected response from server (HTTP ${o.status}).`}}return{getSettings(i){return s("/api/network/settings",{signal:i})},saveSettings(i,n){return s("/api/network/settings",{method:"POST",body:JSON.stringify(i),signal:n})},getStatus(i){return s("/api/network/status",{signal:i})},wifiList(i){return s("/api/wifi/list",{signal:i})}}}var ht=globalThis,hr=ht.ShadowRoot&&(ht.ShadyCSS===void 0||ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ur=Symbol(),Jr=new WeakMap,ui=class{constructor(e,r,s){if(this._$cssResult$=!0,s!==ur)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(hr&&e===void 0){let s=r!==void 0&&r.length===1;s&&(e=Jr.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Jr.set(r,e))}return e}toString(){return this.cssText}},no=t=>new ui(typeof t=="string"?t:t+"",void 0,ur),pr=(t,...e)=>new ui(t.length===1?t[0]:e.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]),t,ur),oo=(t,e)=>{if(hr)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),i=ht.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,t.appendChild(s)}},Gr=hr?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return no(r)})(t):t,{is:ao,defineProperty:lo,getOwnPropertyDescriptor:co,getOwnPropertyNames:ho,getOwnPropertySymbols:uo,getPrototypeOf:po}=Object,kt=globalThis,Zr=kt.trustedTypes,mo=Zr?Zr.emptyScript:"",fo=kt.reactiveElementPolyfillSupport,Le=(t,e)=>t,Gt={toAttribute(t,e){switch(e){case Boolean:t=t?mo:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},pi=(t,e)=>!ao(t,e),Yr={attribute:!0,type:String,converter:Gt,reflect:!1,useDefault:!1,hasChanged:pi};Symbol.metadata??=Symbol("metadata"),kt.litPropertyMetadata??=new WeakMap;var we=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Yr){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,r);i!==void 0&&lo(this.prototype,e,i)}}static getPropertyDescriptor(e,r,s){let{get:i,set:n}=co(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get:i,set(o){let d=i?.call(this);n?.call(this,o),this.requestUpdate(e,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Yr}static _$Ei(){if(this.hasOwnProperty(Le("elementProperties")))return;let e=po(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Le("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Le("properties"))){let r=this.properties,s=[...ho(r),...uo(r)];for(let i of s)this.createProperty(i,r[i])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[s,i]of r)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[r,s]of this.elementProperties){let i=this._$Eu(r,s);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)r.unshift(Gr(i))}else e!==void 0&&r.push(Gr(e));return r}static _$Eu(e,r){let s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let s of r.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,s){this._$AK(e,s)}_$ET(e,r){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute===void 0?Gt:s.converter).toAttribute(r,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,r){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Gt:n.converter;this._$Em=i;let d=o.fromAttribute(r,n.type);this[i]=d??this._$Ej?.get(i)??d,this._$Em=null}}requestUpdate(e,r,s,i=!1,n){if(e!==void 0){let o=this.constructor;if(i===!1&&(n=this[e]),s??=o.getPropertyOptions(e),!((s.hasChanged??pi)(n,r)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??r??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(r=void 0),this._$AL.set(e,r)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:o}=n,d=this[i];o!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,n,d)}}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(r)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};we.elementStyles=[],we.shadowRootOptions={mode:"open"},we[Le("elementProperties")]=new Map,we[Le("finalized")]=new Map,fo?.({ReactiveElement:we}),(kt.reactiveElementVersions??=[]).push("2.1.2");var mr=globalThis,Xr=t=>t,_t=mr.trustedTypes,es=_t?_t.createPolicy("lit-html",{createHTML:t=>t}):void 0,mi="$lit$",ee=`lit$${Math.random().toFixed(9).slice(2)}$`,fi="?"+ee,go=`<${fi}>`,ge=document,Ke=()=>ge.createComment(""),Qe=t=>t===null||typeof t!="object"&&typeof t!="function",fr=Array.isArray,_o=t=>fr(t)||typeof t?.[Symbol.iterator]=="function",Ot=`[ 	
\f\r]`,De=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ts=/-->/g,rs=/>/g,se=RegExp(`>|${Ot}(?:([^\\s"'>=/]+)(${Ot}*=${Ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ss=/'/g,is=/"/g,gi=/^(?:script|style|textarea|title)$/i,T=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),xe=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),ns=new WeakMap,oe=ge.createTreeWalker(ge,129);function _i(t,e){if(!fr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return es===void 0?e:es.createHTML(e)}var bo=(t,e)=>{let r=t.length-1,s=[],i,n=e===2?"<svg>":e===3?"<math>":"",o=De;for(let d=0;d<r;d++){let l=t[d],h,u,p=-1,c=0;for(;c<l.length&&(o.lastIndex=c,u=o.exec(l),u!==null);)c=o.lastIndex,o===De?u[1]==="!--"?o=ts:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(o=se):(gi.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=se):o=rs:o===se?u[0]===">"?(o=i??De,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?se:u[3]==='"'?is:ss):o===is||o===ss?o=se:o===ts||o===rs?o=De:(o=se,i=void 0);let m=o===se&&t[d+1].startsWith("/>")?" ":"";n+=o===De?l+go:p>=0?(s.push(h),l.slice(0,p)+mi+l.slice(p)+ee+m):l+ee+(p===-2?d:m)}return[_i(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},Zt=class bi{constructor({strings:e,_$litType$:r},s){let i;this.parts=[];let n=0,o=0,d=e.length-1,l=this.parts,[h,u]=bo(e,r);if(this.el=bi.createElement(h,s),oe.currentNode=this.el.content,r===2||r===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=oe.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(mi)){let c=u[o++],m=i.getAttribute(p).split(ee),_=/([.?@])?(.*)/.exec(c);l.push({type:1,index:n,name:_[2],strings:m,ctor:_[1]==="."?$o:_[1]==="?"?yo:_[1]==="@"?wo:xt}),i.removeAttribute(p)}else p.startsWith(ee)&&(l.push({type:6,index:n}),i.removeAttribute(p));if(gi.test(i.tagName)){let p=i.textContent.split(ee),c=p.length-1;if(c>0){i.textContent=_t?_t.emptyScript:"";for(let m=0;m<c;m++)i.append(p[m],Ke()),oe.nextNode(),l.push({type:2,index:++n});i.append(p[c],Ke())}}}else if(i.nodeType===8)if(i.data===fi)l.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(ee,p+1))!==-1;)l.push({type:7,index:n}),p+=ee.length-1}n++}}static createElement(e,r){let s=ge.createElement("template");return s.innerHTML=e,s}};function Ee(t,e,r=t,s){if(e===xe)return e;let i=s===void 0?r._$Cl:r._$Co?.[s],n=Qe(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,s)),s===void 0?r._$Cl=i:(r._$Co??=[])[s]=i),i!==void 0&&(e=Ee(t,i._$AS(t,e.values),i,s)),e}var vo=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:s}=this._$AD,i=(e?.creationScope??ge).importNode(r,!0);oe.currentNode=i;let n=oe.nextNode(),o=0,d=0,l=s[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new gr(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new So(n,this,e)),this._$AV.push(h),l=s[++d]}o!==l?.index&&(n=oe.nextNode(),o++)}return oe.currentNode=ge,i}p(e){let r=0;for(let s of this._$AV)s!==void 0&&(s.strings===void 0?s._$AI(e[r]):(s._$AI(e,s,r),r+=s.strings.length-2)),r++}},gr=class vi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,s,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ee(this,e,r),Qe(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==xe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?_o(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&Qe(this._$AH)?this._$AA.nextSibling.data=e:this.T(ge.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Zt.createElement(_i(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(r);else{let n=new vo(i,this),o=n.u(this.options);n.p(r),this.T(o),this._$AH=n}}_$AC(e){let r=ns.get(e.strings);return r===void 0&&ns.set(e.strings,r=new Zt(e)),r}k(e){fr(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,i=0;for(let n of e)i===r.length?r.push(s=new vi(this.O(Ke()),this.O(Ke()),this,this.options)):s=r[i],s._$AI(n),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){let s=Xr(e).nextSibling;Xr(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},xt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,s,i,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=x}_$AI(e,r=this,s,i){let n=this.strings,o=!1;if(n===void 0)e=Ee(this,e,r,0),o=!Qe(e)||e!==this._$AH&&e!==xe,o&&(this._$AH=e);else{let d=e,l,h;for(e=n[0],l=0;l<n.length-1;l++)h=Ee(this,d[s+l],r,l),h===xe&&(h=this._$AH[l]),o||=!Qe(h)||h!==this._$AH[l],h===x?e=x:e!==x&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!i&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},$o=class extends xt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},yo=class extends xt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},wo=class extends xt{constructor(e,r,s,i,n){super(e,r,s,i,n),this.type=5}_$AI(e,r=this){if((e=Ee(this,e,r,0)??x)===xe)return;let s=this._$AH,i=e===x&&s!==x||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==x&&(s===x||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},So=class{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Ee(this,e)}},Ao=mr.litHtmlPolyfillSupport;Ao?.(Zt,gr),(mr.litHtmlVersions??=[]).push("3.3.3");var To=(t,e,r)=>{let s=r?.renderBefore??e,i=s._$litPart$;if(i===void 0){let n=r?.renderBefore??null;s._$litPart$=i=new gr(e.insertBefore(Ke(),n),n,void 0,r??{})}return i._$AI(t),i},_r=globalThis,de=class extends we{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=To(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return xe}};de._$litElement$=!0,de.finalized=!0,_r.litElementHydrateSupport?.({LitElement:de});var ko=_r.litElementPolyfillSupport;ko?.({LitElement:de}),(_r.litElementVersions??=[]).push("4.2.2");var xo={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function Eo(t){return t===void 0||Number.isNaN(t)?"Unknown":t>=-55?"Excellent":t>=-67?"Good":t>=-75?"Fair":"Weak"}function Po(t){return t===1?"Full":t===0?"Half":`Unknown (${t})`}function Co(t){let e=r=>String(r).padStart(2,"0");return`${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`}var ce,Mo=(ce=class extends de{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(e){e.has("pollIntervalMs")&&this.startPolling();let r=e.get("baseUrl");e.has("baseUrl")&&r!==void 0&&r!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let e=this.status;return T`
      <div class="card">
        <header class="head">
          ${e?T`<span class="badge badge-${e.mode}">${xo[e.mode]}</span>`:T`<span class="badge badge-unknown">Unknown</span>`}
          ${e?T`<span class="state ${e.connected?"state-up":"state-down"}">
                ${e.connected?"Connected":"Disconnected"}
              </span>`:x}
          ${this.loading?T`<span class="muted loading">Refreshing…</span>`:x}
        </header>

        ${e?.fallbackAP?T`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:x}
        ${this.errorMessage?T`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:x}
        ${e?this.renderSections(e):T`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?T`Updated ${Co(this.lastUpdated)}`:T`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(e){switch(e.mode){case"wifi":return this.renderWifi(e);case"wifi_ap":return this.renderAp(e);case"ethernet":return this.renderEthernet(e)}}renderWifi(e){return T`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",e.ssid)}
          ${this.row("Signal",e.rssi===void 0?void 0:`${e.rssi} dBm (${Eo(e.rssi)})`)}
          ${this.row("IP address",e.ip)} ${this.row("MAC address",e.mac)}
        </dl>
      </section>
    `}renderAp(e){let r=e.ap;return T`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",r?.ssid)} ${this.row("IP address",r?.ip)}
          ${this.row("Stations",r?.stations)}
        </dl>
      </section>
    `}renderEthernet(e){let r=e.eth;return T`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",r?.ip)} ${this.row("MAC address",r?.mac)}
          ${this.row("Link",r===void 0?void 0:r.linkUp?"Up":"Down")}
          ${this.row("Speed",r===void 0?void 0:`${r.speed} Mbps`)}
          ${this.row("Duplex",r===void 0?void 0:Po(r.duplex))}
        </dl>
      </section>
    `}row(e,r){return r===void 0||r===""?x:T`<dt>${e}</dt>
          <dd>${r}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=hi({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let e=++this.refreshSeq;this.loading=!0;let r=await this.ensureClient().getStatus();if(e===this.refreshSeq){if(this.loading=!1,r.ok){this.status=r.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=r.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:r.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let e=Number(this.pollIntervalMs);!Number.isFinite(e)||e<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},e))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},ce.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},ce.styles=pr`
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
  `,ce);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",Mo);var it=32,Ue=64,Ht=8,Io=5e3,No=new TextEncoder;function nt(t){return No.encode(t).length}function os(t){return t.isAPMode?"ap":"station"}var he,Do=(he=class extends de{constructor(...e){super(...e),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=r=>{this.draftWifiSSID=r.target.value},this.handleWifiPasswordInput=r=>{this.draftWifiPassword=r.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=r=>{this.draftApSSID=r.target.value},this.handleApPasswordInput=r=>{this.draftApPassword=r.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=r=>{this.draftApHasPassword=r.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=r=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=r,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=r=>{r.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(e){let r=e.get("baseUrl");e.has("baseUrl")&&r!==void 0&&r!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let e=this.settings;return T`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?T`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:x}
        ${this.successMessage?T`<div class="banner banner-success" role="status">${this.successMessage}</div>`:x}
        ${e?T`${this.renderForm(e)} ${this.renderScan()}`:this.loading?T`<p class="status">Loading settings…</p>`:T`<p class="status">Settings unavailable.</p>`}
      </div>
    `}renderForm(e){return T`
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
          ${this.dirty?T`<span class="muted">Unsaved changes</span>`:x}
        </div>
      </form>
    `}renderStation(e){return T`
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
        ${e.hasWifiPassword?T`<p class="hint">Password saved •••• (leave blank to keep)</p>`:x}
        ${this.renderPasswordClearWarning("wifiPassword")}
        ${this.renderFieldError("wifiPassword")}
      </section>
    `}renderAccessPoint(e){return T`
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
        ${this.draftApHasPassword?T`
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
              ${e.hasWifiAPPassword?T`<p class="hint">Password saved •••• (leave blank to keep)</p>`:x}
              ${this.renderPasswordClearWarning("wifiAPPassword")}
              ${this.renderFieldError("wifiAPPassword")}
            `:x}
      </section>
    `}renderScan(){return T`
      <section class="group">
        <div class="scan-head">
          <h2>Wi-Fi scan</h2>
          <button type="button" @click=${this.handleScan} ?disabled=${this.scanning}>
            ${this.scanning?"Scanning…":"Scan"}
          </button>
        </div>
        ${this.scanError?T`<div class="banner banner-error" role="alert">${this.scanError}</div>`:x}
        ${this.scanResults.length>0?T`<ul class="networks">
              ${this.scanResults.map(e=>this.renderNetwork(e))}
            </ul>`:x}
      </section>
    `}renderNetwork(e){return T`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(e.ssid)}>
          <span class="ssid">${e.ssid}</span>
          <span class="meta">
            ${e.encrypted?T`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:x}
            ${e.rssi} dBm · Ch ${e.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(e){let r=this.fieldErrors[e];return r?T`<p class="field-error" role="alert">${r}</p>`:x}renderPasswordClearWarning(e){return(e==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?T`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:x}get dirty(){let e=this.settings;return e?this.draftMode!==os(e)||this.draftWifiSSID!==e.wifiSSID||this.draftApSSID!==e.wifiAPSSID||this.draftApHasPassword!==e.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=hi({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let e=++this.loadToken;this.loading=!0;let r=await this.ensureClient().getSettings();if(e!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,r.ok){this.applyServerSettings(r.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=r.message,this.emitError(r.message)}applyServerSettings(e){this.settings=e,this.settingsBaseUrl=this.baseUrl,this.draftMode=os(e),this.draftWifiSSID=e.wifiSSID,this.draftApSSID=e.wifiAPSSID,this.draftApHasPassword=e.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let e=this.settings,r={};if(!e)return r;let s=this.draftMode==="ap";if(nt(this.draftWifiSSID)>it&&(r.wifiSSID=`Wi-Fi name must be ${it} characters or fewer.`),nt(this.draftApSSID)>it&&(r.wifiAPSSID=`Access point name must be ${it} characters or fewer.`),s?this.draftApSSID.length===0&&(r.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(r.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&nt(this.draftWifiPassword)>Ue&&(r.wifiPassword=`Wi-Fi password must be ${Ue} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let i=nt(this.draftApPassword);(i<Ht||i>Ue)&&(r.wifiAPPassword=`Access point password must be ${Ht}–${Ue} characters.`)}else e.hasWifiAPPassword||(r.wifiAPPassword=`Enter an access point password (${Ht}–${Ue} characters).`);return r}buildPatch(){let e=this.settings,r={};if(!e)return r;let s=this.draftMode==="ap";return s!==e.isAPMode&&(r.isAPMode=s),this.draftWifiSSID!==e.wifiSSID&&(r.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(r.wifiPassword=this.draftWifiPassword),this.draftApSSID!==e.wifiAPSSID&&(r.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==e.wifiAPHasPassword&&(r.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(r.wifiAPPassword=this.draftApPassword),r}async handleSave(){if(this.submitting||!this.settings)return;let e=this.validate();if(this.fieldErrors=e,Object.keys(e).length>0)return;let r=this.buildPatch();if(Object.keys(r).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let s=await this.ensureClient().saveSettings(r);if(this.submitting=!1,s.ok){this.applyServerSettings(s.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:s.data,bubbles:!0,composed:!0}));return}let i=s.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":s.message;this.errorMessage=i,this.emitError(i)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let e=new AbortController;this.scanController=e;let r,s=new Promise(n=>{r=setTimeout(()=>{e.abort(),n({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},Io)}),i=await Promise.race([this.ensureClient().wifiList(e.signal),s]);if(r!==void 0&&clearTimeout(r),this.scanController===e&&(this.scanController=void 0),this.scanning=!1,i.ok){this.scanResults=[...i.data.networks].sort((n,o)=>o.rssi-n.rssi);return}i.message!=="Request aborted."&&(this.scanError=i.message,this.emitError(i.message))}emitError(e){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:e},bubbles:!0,composed:!0}))}setMode(e){this.draftMode!==e&&(this.draftMode=e,this.fieldErrors={})}},he.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},he.styles=pr`
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
  `,he);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",Do);var Uo=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],ue,Ro=(ue=class extends de{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return T`
      <div class="tabs" role="tablist" aria-label="Network">
        ${Uo.map(e=>T`
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
    `}renderActive(){return this.activeTab==="settings"?T`<edn-network-settings base-url=${this.baseUrl}></edn-network-settings>`:T`
      <edn-network-status
        base-url=${this.baseUrl}
        poll-interval-ms=${this.pollIntervalMs}
      ></edn-network-status>
    `}selectTab(e){this.activeTab!==e&&(this.activeTab=e,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:e},bubbles:!0,composed:!0})))}},ue.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},ue.styles=pr`
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
  `,ue);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",Ro);var $i="Network request failed. Check the device connection and try again.",qo={};function Oo(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function Ho(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function yi(t,e){return Ho(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:$i}}async function wi(t,e){let r=e;try{let s=await t.text();if(s.length>0)try{r=Oo(JSON.parse(s))??r}catch{}}catch{}return{ok:!1,status:t.status,message:r}}async function as(t,e,r,s,i,n){let o;try{o=await fetch(t,{headers:{Accept:e,...i},signal:n})}catch(l){return yi(l,n)}if(!o.ok)return wi(o,o.status===404?s:`Request failed with HTTP ${o.status}.`);let d;try{d=new Uint8Array(await o.arrayBuffer())}catch{return{ok:!1,status:o.status,message:$i}}return d.byteLength===0?{ok:!1,status:o.status,message:r}:{ok:!0,data:d}}async function ls(t,e,r,s,i){if(e.byteLength===0)return{ok:!1,message:r};let n=new ArrayBuffer(e.byteLength);new Uint8Array(n).set(e);let o;try{o=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/octet-stream",...s},body:n,signal:i})}catch(d){return yi(d,i)}return o.ok?(await o.text().catch(()=>""),{ok:!0,data:qo}):wi(o,`Upload failed with HTTP ${o.status}.`)}function Fo(t={}){let e=t.baseUrl??"",r=t.backupPath??"/api/config/backup",s=t.configPath??"/api/config",i=t.headers??{},n=`${e}${r}`,o=`${e}${s}`;return{downloadBackup(d){return as(n,"application/zip","Device returned an empty archive.","The device has no config files yet.",i,d)},downloadConfig(d){return as(o,"application/octet-stream","Device returned an empty config file.","The device has no saved config yet (no config file on flash).",i,d)},uploadBackup(d,l){return ls(n,d,"Cannot upload an empty archive.",i,l)},uploadConfig(d,l){return ls(o,d,"Cannot upload an empty config file.",i,l)}}}var ut=globalThis,br=ut.ShadowRoot&&(ut.ShadyCSS===void 0||ut.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vr=Symbol(),ds=new WeakMap,Si=class{constructor(e,r,s){if(this._$cssResult$=!0,s!==vr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o,r=this.t;if(br&&e===void 0){let s=r!==void 0&&r.length===1;s&&(e=ds.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ds.set(r,e))}return e}toString(){return this.cssText}},Lo=t=>new Si(typeof t=="string"?t:t+"",void 0,vr),Bo=(t,...e)=>new Si(t.length===1?t[0]:e.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]),t,vr),Wo=(t,e)=>{if(br)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),i=ut.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,t.appendChild(s)}},cs=br?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return Lo(r)})(t):t,{is:zo,defineProperty:jo,getOwnPropertyDescriptor:Vo,getOwnPropertyNames:Ko,getOwnPropertySymbols:Qo,getPrototypeOf:Jo}=Object,Et=globalThis,hs=Et.trustedTypes,Go=hs?hs.emptyScript:"",Zo=Et.reactiveElementPolyfillSupport,Be=(t,e)=>t,Yt={toAttribute(t,e){switch(e){case Boolean:t=t?Go:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ai=(t,e)=>!zo(t,e),us={attribute:!0,type:String,converter:Yt,reflect:!1,useDefault:!1,hasChanged:Ai};Symbol.metadata??=Symbol("metadata"),Et.litPropertyMetadata??=new WeakMap;var Se=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=us){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,r);i!==void 0&&jo(this.prototype,e,i)}}static getPropertyDescriptor(e,r,s){let{get:i,set:n}=Vo(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get:i,set(o){let d=i?.call(this);n?.call(this,o),this.requestUpdate(e,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??us}static _$Ei(){if(this.hasOwnProperty(Be("elementProperties")))return;let e=Jo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Be("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Be("properties"))){let r=this.properties,s=[...Ko(r),...Qo(r)];for(let i of s)this.createProperty(i,r[i])}let e=this[Symbol.metadata];if(e!==null){let r=litPropertyMetadata.get(e);if(r!==void 0)for(let[s,i]of r)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[r,s]of this.elementProperties){let i=this._$Eu(r,s);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let r=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)r.unshift(cs(i))}else e!==void 0&&r.push(cs(e));return r}static _$Eu(e,r){let s=r.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,r=this.constructor.elementProperties;for(let s of r.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Wo(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,s){this._$AK(e,s)}_$ET(e,r){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute===void 0?Yt:s.converter).toAttribute(r,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,r){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Yt:n.converter;this._$Em=i;let d=o.fromAttribute(r,n.type);this[i]=d??this._$Ej?.get(i)??d,this._$Em=null}}requestUpdate(e,r,s,i=!1,n){if(e!==void 0){let o=this.constructor;if(i===!1&&(n=this[e]),s??=o.getPropertyOptions(e),!((s.hasChanged??Ai)(n,r)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,r,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??r??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(r=void 0),this._$AL.set(e,r)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:o}=n,d=this[i];o!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,n,d)}}let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(r)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};Se.elementStyles=[],Se.shadowRootOptions={mode:"open"},Se[Be("elementProperties")]=new Map,Se[Be("finalized")]=new Map,Zo?.({ReactiveElement:Se}),(Et.reactiveElementVersions??=[]).push("2.1.2");var $r=globalThis,ps=t=>t,bt=$r.trustedTypes,ms=bt?bt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ti="$lit$",te=`lit$${Math.random().toFixed(9).slice(2)}$`,ki="?"+te,Yo=`<${ki}>`,_e=document,Je=()=>_e.createComment(""),Ge=t=>t===null||typeof t!="object"&&typeof t!="function",yr=Array.isArray,Xo=t=>yr(t)||typeof t?.[Symbol.iterator]=="function",Ft=`[ 	
\f\r]`,Re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fs=/-->/g,gs=/>/g,ie=RegExp(`>|${Ft}(?:([^\\s"'>=/]+)(${Ft}*=${Ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_s=/'/g,bs=/"/g,xi=/^(?:script|style|textarea|title)$/i,G=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),Pe=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),vs=new WeakMap,ae=_e.createTreeWalker(_e,129);function Ei(t,e){if(!yr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ms===void 0?e:ms.createHTML(e)}var ea=(t,e)=>{let r=t.length-1,s=[],i,n=e===2?"<svg>":e===3?"<math>":"",o=Re;for(let d=0;d<r;d++){let l=t[d],h,u,p=-1,c=0;for(;c<l.length&&(o.lastIndex=c,u=o.exec(l),u!==null);)c=o.lastIndex,o===Re?u[1]==="!--"?o=fs:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(o=ie):(xi.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=ie):o=gs:o===ie?u[0]===">"?(o=i??Re,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?ie:u[3]==='"'?bs:_s):o===bs||o===_s?o=ie:o===fs||o===gs?o=Re:(o=ie,i=void 0);let m=o===ie&&t[d+1].startsWith("/>")?" ":"";n+=o===Re?l+Yo:p>=0?(s.push(h),l.slice(0,p)+Ti+l.slice(p)+te+m):l+te+(p===-2?d:m)}return[Ei(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},Xt=class Pi{constructor({strings:e,_$litType$:r},s){let i;this.parts=[];let n=0,o=0,d=e.length-1,l=this.parts,[h,u]=ea(e,r);if(this.el=Pi.createElement(h,s),ae.currentNode=this.el.content,r===2||r===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=ae.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(Ti)){let c=u[o++],m=i.getAttribute(p).split(te),_=/([.?@])?(.*)/.exec(c);l.push({type:1,index:n,name:_[2],strings:m,ctor:_[1]==="."?ra:_[1]==="?"?sa:_[1]==="@"?ia:Pt}),i.removeAttribute(p)}else p.startsWith(te)&&(l.push({type:6,index:n}),i.removeAttribute(p));if(xi.test(i.tagName)){let p=i.textContent.split(te),c=p.length-1;if(c>0){i.textContent=bt?bt.emptyScript:"";for(let m=0;m<c;m++)i.append(p[m],Je()),ae.nextNode(),l.push({type:2,index:++n});i.append(p[c],Je())}}}else if(i.nodeType===8)if(i.data===ki)l.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(te,p+1))!==-1;)l.push({type:7,index:n}),p+=te.length-1}n++}}static createElement(e,r){let s=_e.createElement("template");return s.innerHTML=e,s}};function Ce(t,e,r=t,s){if(e===Pe)return e;let i=s===void 0?r._$Cl:r._$Co?.[s],n=Ge(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,s)),s===void 0?r._$Cl=i:(r._$Co??=[])[s]=i),i!==void 0&&(e=Ce(t,i._$AS(t,e.values),i,s)),e}var ta=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:r},parts:s}=this._$AD,i=(e?.creationScope??_e).importNode(r,!0);ae.currentNode=i;let n=ae.nextNode(),o=0,d=0,l=s[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new wr(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new na(n,this,e)),this._$AV.push(h),l=s[++d]}o!==l?.index&&(n=ae.nextNode(),o++)}return ae.currentNode=_e,i}p(e){let r=0;for(let s of this._$AV)s!==void 0&&(s.strings===void 0?s._$AI(e[r]):(s._$AI(e,s,r),r+=s.strings.length-2)),r++}},wr=class Ci{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,s,i){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ce(this,e,r),Ge(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==Pe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Xo(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==N&&Ge(this._$AH)?this._$AA.nextSibling.data=e:this.T(_e.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Xt.createElement(Ei(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(r);else{let n=new ta(i,this),o=n.u(this.options);n.p(r),this.T(o),this._$AH=n}}_$AC(e){let r=vs.get(e.strings);return r===void 0&&vs.set(e.strings,r=new Xt(e)),r}k(e){yr(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,i=0;for(let n of e)i===r.length?r.push(s=new Ci(this.O(Je()),this.O(Je()),this,this.options)):s=r[i],s._$AI(n),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){let s=ps(e).nextSibling;ps(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Pt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,s,i,n){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=N}_$AI(e,r=this,s,i){let n=this.strings,o=!1;if(n===void 0)e=Ce(this,e,r,0),o=!Ge(e)||e!==this._$AH&&e!==Pe,o&&(this._$AH=e);else{let d=e,l,h;for(e=n[0],l=0;l<n.length-1;l++)h=Ce(this,d[s+l],r,l),h===Pe&&(h=this._$AH[l]),o||=!Ge(h)||h!==this._$AH[l],h===N?e=N:e!==N&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!i&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ra=class extends Pt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}},sa=class extends Pt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}},ia=class extends Pt{constructor(e,r,s,i,n){super(e,r,s,i,n),this.type=5}_$AI(e,r=this){if((e=Ce(this,e,r,0)??N)===Pe)return;let s=this._$AH,i=e===N&&s!==N||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==N&&(s===N||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},na=class{constructor(e,r,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Ce(this,e)}},oa=$r.litHtmlPolyfillSupport;oa?.(Xt,wr),($r.litHtmlVersions??=[]).push("3.3.3");var aa=(t,e,r)=>{let s=r?.renderBefore??e,i=s._$litPart$;if(i===void 0){let n=r?.renderBefore??null;s._$litPart$=i=new wr(e.insertBefore(Je(),n),n,void 0,r??{})}return i._$AI(t),i},Sr=globalThis,We=class extends Se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=aa(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Pe}};We._$litElement$=!0,We.finalized=!0,Sr.litElementHydrateSupport?.({LitElement:We});var la=Sr.litElementPolyfillSupport;la?.({LitElement:We}),(Sr.litElementVersions??=[]).push("4.2.2");var $s=2e3,da=12e4,ys="Unsupported file type. Choose a .zip full backup or a .bin config file.";function Lt(t){let e=t.toLowerCase();return e.endsWith(".zip")?"archive":e.endsWith(".bin")?"config":null}function ca(t,e){if(typeof URL.createObjectURL!="function")return;let r=new ArrayBuffer(t.byteLength);new Uint8Array(r).set(t);let s=new Blob([r],{type:"application/octet-stream"}),i=URL.createObjectURL(s),n=document.createElement("a");n.href=i,n.download=e,document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),0)}var pe,ha=(pe=class extends We{constructor(...e){super(...e),this.baseUrl="",this.backupPath="/api/config/backup",this.configPath="/api/config",this.healthPath="/healthcheck/healty",this.deviceName="device",this.archiveFileName="config-backup.zip",this.binFileName="config.bin",this.maxUploadBytes=16384,this.zipNotes="",this.binNotes="",this.zipConfirmText="",this.binConfirmText="",this.downloading=!1,this.downloadNotice=null,this.selectedFile=null,this.fileError=null,this.uploading=!1,this.uploadError=null,this.phase="idle",this._attempts=0}disconnectedCallback(){this.clearPollTimer(),super.disconnectedCallback()}get busy(){return this.uploading||this.phase!=="idle"}get effectiveZipNotes(){return this.zipNotes||`Download a zip of everything stored on the ${this.deviceName}: ${this.binFileName} plus the device's persisted state files. Restoring this archive overwrites the stored config and state files. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveBinNotes(){return this.binNotes||`Download only ${this.binFileName}, the raw stored config. Restoring it replaces just that file. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveZipConfirmText(){return this.zipConfirmText||`Uploading this archive REPLACES ${this.binFileName} and the device's stored state files on the ${this.deviceName} AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?`}get effectiveBinConfirmText(){return this.binConfirmText||`Uploading REPLACES ${this.binFileName} on the ${this.deviceName} AND REBOOTS IT IMMEDIATELY. The device will be offline 20-60 seconds. Continue?`}render(){return G`
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
            ${this.fileError?G`<span class="field-error" role="alert">${this.fileError}</span>`:N}
          </label>
          ${this.selectedFile&&!this.fileError?G`<p class="muted">
                Selected: ${this.selectedFile.name} (${this.selectedFile.size}
                bytes)${Lt(this.selectedFile.name)==="archive"?" — full backup (all files)":` — ${this.binFileName} only`}
              </p>`:N}
          ${this.uploadError?G`<div class="banner banner-error" role="alert">
                ${this.uploadError}
              </div>`:N}
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
    `}renderNotice(e){return e?G`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.message}
    </div>`:N}renderRebootOverlay(){return this.phase==="idle"?N:G`
      <div
        class="reboot-overlay"
        role="alertdialog"
        aria-modal="true"
        aria-label="Device rebooting"
      >
        <div class="reboot-dialog">
          <h2>Device is rebooting</h2>
          ${this.phase==="rebooting"?G`
                <p>
                  Waiting for the ${this.deviceName} to come back online. This
                  usually takes 20–60 seconds.
                </p>
                <p class="muted" aria-live="polite">
                  Polling device health…
                </p>
                <div class="spinner" aria-hidden="true"></div>
              `:N}
          ${this.phase==="ready"?G`
                <div class="banner banner-success" role="status">
                  The ${this.deviceName} is back online.
                </div>
                <div class="form-actions">
                  <button type="button" @click=${()=>this.dismissReboot()}>
                    Dismiss
                  </button>
                </div>
              `:N}
          ${this.phase==="timeout"?G`
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
              `:N}
        </div>
      </div>
    `}createClient(){return Fo({baseUrl:this.baseUrl,backupPath:this.backupPath,configPath:this.configPath})}async handleDownload(e){if(!(this.downloading||this.phase!=="idle")){this.downloading=!0,this.downloadNotice=null;try{let r=this.createClient(),s=e==="archive"?await r.downloadBackup():await r.downloadConfig();if(!s.ok){this.downloadNotice={kind:"error",message:s.message};return}let i=e==="archive"?this.archiveFileName:this.binFileName;ca(s.data,i),this.downloadNotice={kind:"info",message:e==="archive"?`Full backup downloaded as ${i}.`:`Config downloaded as ${i}.`}}finally{this.downloading=!1}}}handleFileChange(e){let r=e.currentTarget,s=r.files&&r.files[0]?r.files[0]:null;this.selectedFile=s,this.uploadError=null,this.fileError=s?s.size===0?"The selected file is empty.":s.size>this.maxUploadBytes?`This does not look like a ${this.deviceName} backup file (max ${this.maxUploadBytes} bytes).`:Lt(s.name)?null:ys:null}async handleUpload(){if(!this.selectedFile||this.fileError||this.busy)return;let e=Lt(this.selectedFile.name);if(!e)this.uploadError=ys;else if(window.confirm(e==="archive"?this.effectiveZipConfirmText:this.effectiveBinConfirmText)){this.uploading=!0,this.uploadError=null;try{let r;try{r=new Uint8Array(await this.selectedFile.arrayBuffer())}catch{this.uploadError="Could not read the selected backup file.";return}let s=this.createClient(),i=e==="archive"?await s.uploadBackup(r):await s.uploadConfig(r);if(!i.ok){this.uploadError=i.message;return}if(this.clearSelection(),!this.isConnected)return;this.dispatchEvent(new CustomEvent("edc-restore-committed",{detail:{kind:e},bubbles:!0,composed:!0})),this.startReboot()}finally{this.uploading=!1}}}clearSelection(){this.selectedFile=null,this.fileError=null;let e=this.renderRoot.querySelector("#edc-restore-file");e&&(e.value="")}startReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}retryReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}dismissReboot(){this.clearPollTimer(),this.phase="idle"}schedulePoll(){this.clearPollTimer(),this._pollTimer=window.setTimeout(()=>{this._pollTimer=void 0,this.pollHealth()},$s)}clearPollTimer(){this._pollTimer!==void 0&&(window.clearTimeout(this._pollTimer),this._pollTimer=void 0)}async pollHealth(){if(this.phase!=="rebooting")return;let e=!1;try{let r=await fetch(`${this.baseUrl}${this.healthPath}`,{headers:{Accept:"application/json"}});if(r.ok){let s=await r.json();e=!!s&&typeof s=="object"&&s.healty===!0}}catch{e=!1}this.isConnected&&this.phase==="rebooting"&&(e?this.phase="ready":(this._attempts+=1,this._attempts*$s>=da?this.phase="timeout":this.schedulePoll()))}},pe.properties={baseUrl:{type:String,attribute:"base-url"},backupPath:{type:String,attribute:"backup-path"},configPath:{type:String,attribute:"config-path"},healthPath:{type:String,attribute:"health-path"},deviceName:{type:String,attribute:"device-name"},archiveFileName:{type:String,attribute:"archive-file-name"},binFileName:{type:String,attribute:"bin-file-name"},maxUploadBytes:{type:Number,attribute:"max-upload-bytes"},zipNotes:{type:String,attribute:"zip-notes"},binNotes:{type:String,attribute:"bin-notes"},zipConfirmText:{type:String,attribute:"zip-confirm-text"},binConfirmText:{type:String,attribute:"bin-confirm-text"},downloading:{state:!0},downloadNotice:{state:!0},selectedFile:{state:!0},fileError:{state:!0},uploading:{state:!0},uploadError:{state:!0},phase:{state:!0}},pe.styles=Bo`
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
  `,pe);typeof customElements<"u"&&!customElements.get("edc-config-backup-page")&&customElements.define("edc-config-backup-page",ha);var ws="Invalid settings response.";function ua(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function pa(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function Mi(t,e){return pa(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}async function Ii(t,e){let r=e;try{let s=await t.text();if(s.length>0)try{r=ua(JSON.parse(s))??r}catch{}}catch{}return{ok:!1,status:t.status,message:r}}function ma(t){if(!t||typeof t!="object")return;let{host:e,uri:r,port:s,enabled:i}=t;if(typeof e=="string"&&typeof r=="string"&&typeof s=="number"&&Number.isFinite(s)&&typeof i=="boolean")return{host:e,uri:r,port:s,enabled:i}}async function Ni(t){let e;try{e=await t.json()}catch{return{ok:!1,status:t.status,message:ws}}let r=ma(e);return r?{ok:!0,data:r}:{ok:!1,status:t.status,message:ws}}async function fa(t,e,r){let s;try{s=await fetch(t,{headers:{Accept:"application/json",...e},signal:r})}catch(i){return Mi(i,r)}return s.ok?Ni(s):Ii(s,"Could not load the logger settings from the device.")}async function ga(t,e,r,s){let i;try{i=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...r},body:JSON.stringify(e),signal:s})}catch(n){return Mi(n,s)}return i.ok?Ni(i):Ii(i,"The device rejected the logger settings.")}function _a(t={}){let e=t.baseUrl??"",r=t.settingsPath??"/api/log/settings",s=t.headers??{},i=`${e}${r}`;return{getSettings(n){return fa(i,s,n)},saveSettings(n,o){return ga(i,n,s,o)}}}var pt=globalThis,Ar=pt.ShadowRoot&&(pt.ShadyCSS===void 0||pt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Tr=Symbol(),Ss=new WeakMap,Di=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Tr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Ar&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=Ss.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ss.set(e,t))}return t}toString(){return this.cssText}},ba=t=>new Di(typeof t=="string"?t:t+"",void 0,Tr),va=(t,...e)=>new Di(t.length===1?t[0]:e.reduce((r,s,i)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]),t,Tr),$a=(t,e)=>{if(Ar)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of e){let s=document.createElement("style"),i=pt.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=r.cssText,t.appendChild(s)}},As=Ar?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(let s of e.cssRules)r+=s.cssText;return ba(r)})(t):t,{is:ya,defineProperty:wa,getOwnPropertyDescriptor:Sa,getOwnPropertyNames:Aa,getOwnPropertySymbols:Ta,getPrototypeOf:ka}=Object,Ct=globalThis,Ts=Ct.trustedTypes,xa=Ts?Ts.emptyScript:"",Ea=Ct.reactiveElementPolyfillSupport,ze=(t,e)=>t,er={toAttribute(t,e){switch(e){case Boolean:t=t?xa:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ui=(t,e)=>!ya(t,e),ks={attribute:!0,type:String,converter:er,reflect:!1,useDefault:!1,hasChanged:Ui};Symbol.metadata??=Symbol("metadata"),Ct.litPropertyMetadata??=new WeakMap;var Ae=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ks){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&wa(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){let{get:s,set:i}=Sa(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){let o=s?.call(this);i?.call(this,n),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ks}static _$Ei(){if(this.hasOwnProperty(ze("elementProperties")))return;let t=ka(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ze("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ze("properties"))){let e=this.properties,r=[...Aa(e),...Ta(e)];for(let s of r)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let s of r)e.unshift(As(s))}else t!==void 0&&e.push(As(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $a(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){let r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute===void 0?er:r.converter).toAttribute(e,r.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){let r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let i=r.getPropertyOptions(s),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute===void 0?er:i.converter;this._$Em=s;let o=n.fromAttribute(e,i.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,r,s=!1,i){if(t!==void 0){let n=this.constructor;if(s===!1&&(i=this[t]),r??=n.getPropertyOptions(t),!((r.hasChanged??Ui)(i,e)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,r))))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:s,wrapped:i},n){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),i!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[s,i]of r){let{wrapped:n}=i,o=this[s];n!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,i,o)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Ae.elementStyles=[],Ae.shadowRootOptions={mode:"open"},Ae[ze("elementProperties")]=new Map,Ae[ze("finalized")]=new Map,Ea?.({ReactiveElement:Ae}),(Ct.reactiveElementVersions??=[]).push("2.1.2");var kr=globalThis,xs=t=>t,vt=kr.trustedTypes,Es=vt?vt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ri="$lit$",re=`lit$${Math.random().toFixed(9).slice(2)}$`,qi="?"+re,Pa=`<${qi}>`,be=document,Ze=()=>be.createComment(""),Ye=t=>t===null||typeof t!="object"&&typeof t!="function",xr=Array.isArray,Ca=t=>xr(t)||typeof t?.[Symbol.iterator]=="function",Bt=`[ 	
\f\r]`,qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ps=/-->/g,Cs=/>/g,ne=RegExp(`>|${Bt}(?:([^\\s"'>=/]+)(${Bt}*=${Bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ms=/'/g,Is=/"/g,Oi=/^(?:script|style|textarea|title)$/i,Ns=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),Me=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Ds=new WeakMap,le=be.createTreeWalker(be,129);function Hi(t,e){if(!xr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Es===void 0?e:Es.createHTML(e)}var Ma=(t,e)=>{let r=t.length-1,s=[],i,n=e===2?"<svg>":e===3?"<math>":"",o=qe;for(let d=0;d<r;d++){let l=t[d],h,u,p=-1,c=0;for(;c<l.length&&(o.lastIndex=c,u=o.exec(l),u!==null);)c=o.lastIndex,o===qe?u[1]==="!--"?o=Ps:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(o=ne):(Oi.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=ne):o=Cs:o===ne?u[0]===">"?(o=i??qe,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?ne:u[3]==='"'?Is:Ms):o===Is||o===Ms?o=ne:o===Ps||o===Cs?o=qe:(o=ne,i=void 0);let m=o===ne&&t[d+1].startsWith("/>")?" ":"";n+=o===qe?l+Pa:p>=0?(s.push(h),l.slice(0,p)+Ri+l.slice(p)+re+m):l+re+(p===-2?d:m)}return[Hi(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},tr=class Fi{constructor({strings:e,_$litType$:r},s){let i;this.parts=[];let n=0,o=0,d=e.length-1,l=this.parts,[h,u]=Ma(e,r);if(this.el=Fi.createElement(h,s),le.currentNode=this.el.content,r===2||r===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=le.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(Ri)){let c=u[o++],m=i.getAttribute(p).split(re),_=/([.?@])?(.*)/.exec(c);l.push({type:1,index:n,name:_[2],strings:m,ctor:_[1]==="."?Na:_[1]==="?"?Da:_[1]==="@"?Ua:Mt}),i.removeAttribute(p)}else p.startsWith(re)&&(l.push({type:6,index:n}),i.removeAttribute(p));if(Oi.test(i.tagName)){let p=i.textContent.split(re),c=p.length-1;if(c>0){i.textContent=vt?vt.emptyScript:"";for(let m=0;m<c;m++)i.append(p[m],Ze()),le.nextNode(),l.push({type:2,index:++n});i.append(p[c],Ze())}}}else if(i.nodeType===8)if(i.data===qi)l.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(re,p+1))!==-1;)l.push({type:7,index:n}),p+=re.length-1}n++}}static createElement(e,r){let s=be.createElement("template");return s.innerHTML=e,s}};function Ie(t,e,r=t,s){if(e===Me)return e;let i=s===void 0?r._$Cl:r._$Co?.[s],n=Ye(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,r,s)),s===void 0?r._$Cl=i:(r._$Co??=[])[s]=i),i!==void 0&&(e=Ie(t,i._$AS(t,e.values),i,s)),e}var Ia=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??be).importNode(e,!0);le.currentNode=s;let i=le.nextNode(),n=0,o=0,d=r[0];for(;d!==void 0;){if(n===d.index){let l;d.type===2?l=new Er(i,i.nextSibling,this,t):d.type===1?l=new d.ctor(i,d.name,d.strings,this,t):d.type===6&&(l=new Ra(i,this,t)),this._$AV.push(l),d=r[++o]}n!==d?.index&&(i=le.nextNode(),n++)}return le.currentNode=be,s}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(t[e]):(r._$AI(t,r,e),e+=r.strings.length-2)),e++}},Er=class Li{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,s,i){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Ie(this,e,r),Ye(e)?e===L||e==null||e===""?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==Me&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ca(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==L&&Ye(this._$AH)?this._$AA.nextSibling.data=e:this.T(be.createTextNode(e)),this._$AH=e}$(e){let{values:r,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=tr.createElement(Hi(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(r);else{let n=new Ia(i,this),o=n.u(this.options);n.p(r),this.T(o),this._$AH=n}}_$AC(e){let r=Ds.get(e.strings);return r===void 0&&Ds.set(e.strings,r=new tr(e)),r}k(e){xr(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,s,i=0;for(let n of e)i===r.length?r.push(s=new Li(this.O(Ze()),this.O(Ze()),this,this.options)):s=r[i],s._$AI(n),i++;i<r.length&&(this._$AR(s&&s._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){let s=xs(e).nextSibling;xs(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Mt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,i){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=L}_$AI(t,e=this,r,s){let i=this.strings,n=!1;if(i===void 0)t=Ie(this,t,e,0),n=!Ye(t)||t!==this._$AH&&t!==Me,n&&(this._$AH=t);else{let o=t,d,l;for(t=i[0],d=0;d<i.length-1;d++)l=Ie(this,o[r+d],e,d),l===Me&&(l=this._$AH[d]),n||=!Ye(l)||l!==this._$AH[d],l===L?t=L:t!==L&&(t+=(l??"")+i[d+1]),this._$AH[d]=l}n&&!s&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Na=class extends Mt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}},Da=class extends Mt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}},Ua=class extends Mt{constructor(t,e,r,s,i){super(t,e,r,s,i),this.type=5}_$AI(t,e=this){if((t=Ie(this,t,e,0)??L)===Me)return;let r=this._$AH,s=t===L&&r!==L||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==L&&(r===L||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ra=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ie(this,t)}},qa=kr.litHtmlPolyfillSupport;qa?.(tr,Er),(kr.litHtmlVersions??=[]).push("3.3.3");var Oa=(t,e,r)=>{let s=r?.renderBefore??e,i=s._$litPart$;if(i===void 0){let n=r?.renderBefore??null;s._$litPart$=i=new Er(e.insertBefore(Ze(),n),n,void 0,r??{})}return i._$AI(t),i},Pr=globalThis,je=class extends Ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Oa(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Me}};je._$litElement$=!0,je.finalized=!0,Pr.litElementHydrateSupport?.({LitElement:je});var Ha=Pr.litElementPolyfillSupport;Ha?.({LitElement:je}),(Pr.litElementVersions??=[]).push("4.2.2");var me,Fa=(me=class extends je{constructor(...e){super(...e),this.baseUrl="",this.settingsPath="/api/log/settings",this.deviceName="logger",this.maxHostLength=63,this.formHost="",this.formUri="",this.formPort="",this.formEnabled=!1,this.loading=!1,this.saving=!1,this.notice=null,this.loaded=!1,this._loadStarted=!1}connectedCallback(){super.connectedCallback(),this.load()}firstUpdated(){this._loadStarted||this.load()}render(){return Ns`
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
    `}renderNotice(e){return e?Ns`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.text}
    </div>`:L}createClient(){return _a({baseUrl:this.baseUrl,settingsPath:this.settingsPath})}async load(){if(!(this.loading||this.saving)){this._loadStarted=!0,this.loading=!0,this.notice=null;try{let e=await this.createClient().getSettings();if(!e.ok){this.notice={kind:"error",text:e.message};return}this.applySettings(e.data),this.loaded=!0}finally{this.loading=!1}}}applySettings(e){this.formHost=e.host,this.formUri=e.uri,this.formPort=String(e.port),this.formEnabled=e.enabled}handleHostInput(e){this.formHost=e.currentTarget.value}handleUriInput(e){this.formUri=e.currentTarget.value}handlePortInput(e){this.formPort=e.currentTarget.value}handleEnabledChange(e){this.formEnabled=e.currentTarget.checked}validate(){let e=this.formHost.trim(),r=this.formUri.trim();if(e.length===0)return"Host is required.";if(e.length>this.maxHostLength)return`Host must be ${this.maxHostLength} characters or fewer.`;if(r.length===0)return"URI is required.";if(r.length>this.maxHostLength)return`URI must be ${this.maxHostLength} characters or fewer.`;let s=this.formPort.trim();if(!/^\d+$/.test(s))return"Port must be a whole number between 1 and 65535.";let i=Number(s);return!Number.isInteger(i)||i<1||i>65535?"Port must be a whole number between 1 and 65535.":{host:e,uri:r,port:i,enabled:this.formEnabled}}async handleSave(){if(this.loading||this.saving)return;let e=this.validate();if(typeof e=="string")this.notice={kind:"error",text:e};else{this.saving=!0,this.notice=null;try{let r=await this.createClient().saveSettings(e);if(!r.ok){this.notice={kind:"error",text:r.message};return}this.applySettings(r.data),this.loaded=!0,this.notice={kind:"info",text:"Settings saved."},this.dispatchEvent(new CustomEvent("edu-log-saved",{detail:r.data,bubbles:!0,composed:!0}))}finally{this.saving=!1}}}},me.properties={baseUrl:{type:String,attribute:"base-url"},settingsPath:{type:String,attribute:"settings-path"},deviceName:{type:String,attribute:"device-name"},maxHostLength:{type:Number,attribute:"max-host-length"},formHost:{state:!0},formUri:{state:!0},formPort:{state:!0},formEnabled:{state:!0},loading:{state:!0},saving:{state:!0},notice:{state:!0},loaded:{state:!0}},me.styles=va`
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
  `,me);typeof customElements<"u"&&!customElements.get("edu-log-settings-page")&&customElements.define("edu-log-settings-page",Fa);const Us=document.getElementById("app");Us&&Ji(a(so,{}),Us);
