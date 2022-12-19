import{s as h,j as s,r as E}from"./index-a5d9ac49.js";const P=h.div`
  width: 900px;
  height: 100%;
  background-color: #e6e1e1;
  border-radius: 13px;
  margin: 0 0 .3rem 0;
`,Fe="/assets/logo_llave-44a90bf0.png",Ie="/assets/logo_principal-72b1a69d.png",Re=()=>s.exports.jsx(P,{children:s.exports.jsxs(We,{children:[s.exports.jsx(Z,{children:s.exports.jsx(Pe,{children:s.exports.jsx(Q,{alt:"Cargando",src:Fe})})}),s.exports.jsx(He,{children:s.exports.jsx("span",{children:"INGRESO DE PERSONAL"})}),s.exports.jsx(Z,{children:s.exports.jsx(Me,{children:s.exports.jsx(Q,{alt:"Cargando",src:Ie})})})]})}),We=h.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`,Z=h.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`,Pe=h.div`
  width: 80px;
  height: 80px;
`,Me=h.div`
  width: 175px;
  height: 80px;
`,Q=h.img`
  width: 100%;
  height: 100%;
`,He=h.div`
  width: 75%;
  text-decoration-line: underline overline;
  color: var(--secondColor);
  font-size: 2.5rem;
  margin-top: 1rem; 
`,Be=()=>{const n="*";return s.exports.jsx(P,{children:s.exports.jsx(Ne,{children:s.exports.jsxs(Ye,{children:[s.exports.jsxs(De,{children:["El presente formulario permite el ingreso de datos personales para los colaboradores de la ",s.exports.jsx("strong",{children:"llave"}),s.exports.jsxs("strong",{children:[" ","es importante llenar toda la información para que su proceso y información pueda guardarse inmediatamente y de forma correcta,"," "]}),"por registro interno todos los instrumentos legales tendrán un tiempo de caducidad",s.exports.jsxs("strong",{children:[" ","por lo que es necesario que una vez abierto este enlace sea llenado en las 24 horas posterior."]})]}),s.exports.jsxs(Ue,{children:["Todos los campos ",n," son obligatorios"]})]})})})},Ne=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 0.25rem;
`,Ye=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 6px solid var(--thirdColor);
  padding: 1rem;
  border-radius: 13px;
`,De=h.p`
  text-align: justify;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 4px solid var(--PrimaryColor);
`,Ue=h.span`
  margin-bottom: 1rem;
  font-weight: bold;
`,Xe=()=>{const n="*";return s.exports.jsx(P,{children:s.exports.jsxs(Ve,{children:[s.exports.jsxs(qe,{children:["CEDULA DE IDENTIDAD",n]}),s.exports.jsx(Ke,{type:"text",maxLength:10})]})})},Ve=h.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius:  13px;
  padding: 0 0 .7rem 0;
`,qe=h.label`
  height: 100%;
  width: 100%;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: var(--primaryColor);
`,Ke=h.input`
  width: 90%;
  height: 2.2rem;
  background-color: #d0d5e8;
  color: var(--primaryColor);
  outline: none;

`;function Ge(n){if(Array.isArray(n))return n}function Je(n,i){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var t,r,o,a,l=[],u=!0,c=!1;try{if(o=(e=e.call(n)).next,i===0){if(Object(e)!==e)return;u=!1}else for(;!(u=(t=o.call(e)).done)&&(l.push(t.value),l.length!==i);u=!0);}catch(f){c=!0,r=f}finally{try{if(!u&&e.return!=null&&(a=e.return(),Object(a)!==a))return}finally{if(c)throw r}}return l}}function J(n,i){(i==null||i>n.length)&&(i=n.length);for(var e=0,t=new Array(i);e<i;e++)t[e]=n[e];return t}function ne(n,i){if(!!n){if(typeof n=="string")return J(n,i);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return J(n,i)}}function ze(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ze(n,i){return Ge(n)||Je(n,i)||ne(n,i)||ze()}function A(n){return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},A(n)}function Qe(){for(var n=arguments.length,i=new Array(n),e=0;e<n;e++)i[e]=arguments[e];if(i){for(var t=[],r=0;r<i.length;r++){var o=i[r];if(!!o){var a=A(o);if(a==="string"||a==="number")t.push(o);else if(a==="object"){var l=Array.isArray(o)?o:Object.entries(o).map(function(u){var c=Ze(u,2),f=c[0],g=c[1];return g?f:null});t=l.length?t.concat(l.filter(function(u){return!!u})):t}}}return t.join(" ")}}function re(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function $e(n,i){if(A(n)!=="object"||n===null)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var t=e.call(n,i||"default");if(A(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(n)}function ie(n){var i=$e(n,"string");return A(i)==="symbol"?i:String(i)}function $(n,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,ie(t.key),t)}}function oe(n,i,e){return i&&$(n.prototype,i),e&&$(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}function ae(n,i,e){return i=ie(i),i in n?Object.defineProperty(n,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[i]=e,n}function G(n,i){var e=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=_e(n))||i&&n&&typeof n.length=="number"){e&&(n=e);var t=0,r=function(){};return{s:r,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,a=!1,l;return{s:function(){e=e.call(n)},n:function(){var c=e.next();return o=c.done,c},e:function(c){a=!0,l=c},f:function(){try{!o&&e.return!=null&&e.return()}finally{if(a)throw l}}}}function _e(n,i){if(!!n){if(typeof n=="string")return _(n,i);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return _(n,i)}}function _(n,i){(i==null||i>n.length)&&(i=n.length);for(var e=0,t=new Array(i);e<i;e++)t[e]=n[e];return t}var V=function(){function n(){re(this,n)}return oe(n,null,[{key:"innerWidth",value:function(e){if(e){var t=e.offsetWidth,r=getComputedStyle(e);return t+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),t}return 0}},{key:"width",value:function(e){if(e){var t=e.offsetWidth,r=getComputedStyle(e);return t-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),t}return 0}},{key:"getBrowserLanguage",value:function(){return navigator.userLanguage||navigator.languages&&navigator.languages.length&&navigator.languages[0]||navigator.language||navigator.browserLanguage||navigator.systemLanguage||"en"}},{key:"getWindowScrollTop",value:function(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}},{key:"getWindowScrollLeft",value:function(){var e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}},{key:"getOuterWidth",value:function(e,t){if(e){var r=e.offsetWidth||e.getBoundingClientRect().width;if(t){var o=getComputedStyle(e);r+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return r}return 0}},{key:"getOuterHeight",value:function(e,t){if(e){var r=e.offsetHeight||e.getBoundingClientRect().height;if(t){var o=getComputedStyle(e);r+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return r}return 0}},{key:"getClientHeight",value:function(e,t){if(e){var r=e.clientHeight;if(t){var o=getComputedStyle(e);r+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return r}return 0}},{key:"getClientWidth",value:function(e,t){if(e){var r=e.clientWidth;if(t){var o=getComputedStyle(e);r+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return r}return 0}},{key:"getViewport",value:function(){var e=window,t=document,r=t.documentElement,o=t.getElementsByTagName("body")[0],a=e.innerWidth||r.clientWidth||o.clientWidth,l=e.innerHeight||r.clientHeight||o.clientHeight;return{width:a,height:l}}},{key:"getOffset",value:function(e){if(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}},{key:"index",value:function(e){if(e)for(var t=e.parentNode.childNodes,r=0,o=0;o<t.length;o++){if(t[o]===e)return r;t[o].nodeType===1&&r++}return-1}},{key:"addMultipleClasses",value:function(e,t){if(e&&t)if(e.classList)for(var r=t.split(" "),o=0;o<r.length;o++)e.classList.add(r[o]);else for(var a=t.split(" "),l=0;l<a.length;l++)e.className+=" "+a[l]}},{key:"removeMultipleClasses",value:function(e,t){if(e&&t)if(e.classList)for(var r=t.split(" "),o=0;o<r.length;o++)e.classList.remove(r[o]);else for(var a=t.split(" "),l=0;l<a.length;l++)e.className=e.className.replace(new RegExp("(^|\\b)"+a[l].split(" ").join("|")+"(\\b|$)","gi")," ")}},{key:"addClass",value:function(e,t){e&&t&&(e.classList?e.classList.add(t):e.className+=" "+t)}},{key:"removeClass",value:function(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1}},{key:"find",value:function(e,t){return e?Array.from(e.querySelectorAll(t)):[]}},{key:"findSingle",value:function(e,t){return e?e.querySelector(t):null}},{key:"getHeight",value:function(e){if(e){var t=e.offsetHeight,r=getComputedStyle(e);return t-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),t}return 0}},{key:"getWidth",value:function(e){if(e){var t=e.offsetWidth,r=getComputedStyle(e);return t-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),t}return 0}},{key:"alignOverlay",value:function(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;e&&t&&(r==="self"?this.relativePosition(e,t):(o&&(e.style.minWidth=n.getOuterWidth(t)+"px"),this.absolutePosition(e,t)))}},{key:"absolutePosition",value:function(e,t){if(e){var r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),o=r.height,a=r.width,l=t.offsetHeight,u=t.offsetWidth,c=t.getBoundingClientRect(),f=this.getWindowScrollTop(),g=this.getWindowScrollLeft(),p=this.getViewport(),d,w;c.top+l+o>p.height?(d=c.top+f-o,d<0&&(d=f),e.style.transformOrigin="bottom"):(d=l+c.top+f,e.style.transformOrigin="top"),c.left+u+a>p.width?w=Math.max(0,c.left+g+u-a):w=c.left+g,e.style.top=d+"px",e.style.left=w+"px"}}},{key:"relativePosition",value:function(e,t){if(e){var r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),o=t.offsetHeight,a=t.getBoundingClientRect(),l=this.getViewport(),u,c;a.top+o+r.height>l.height?(u=-1*r.height,a.top+u<0&&(u=-1*a.top),e.style.transformOrigin="bottom"):(u=o,e.style.transformOrigin="top"),r.width>l.width?c=a.left*-1:a.left+r.width>l.width?c=(a.left+r.width-l.width)*-1:c=0,e.style.top=u+"px",e.style.left=c+"px"}}},{key:"flipfitCollision",value:function(e,t){var r=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left top",a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"left bottom",l=arguments.length>4?arguments[4]:void 0;if(e&&t){var u=t.getBoundingClientRect(),c=this.getViewport(),f=o.split(" "),g=a.split(" "),p=function(v,x){return x?+v.substring(v.search(/(\+|-)/g))||0:v.substring(0,v.search(/(\+|-)/g))||v},d={my:{x:p(f[0]),y:p(f[1]||f[0]),offsetX:p(f[0],!0),offsetY:p(f[1]||f[0],!0)},at:{x:p(g[0]),y:p(g[1]||g[0]),offsetX:p(g[0],!0),offsetY:p(g[1]||g[0],!0)}},w={left:function(){var v=d.my.offsetX+d.at.offsetX;return v+u.left+(d.my.x==="left"?0:-1*(d.my.x==="center"?r.getOuterWidth(e)/2:r.getOuterWidth(e)))},top:function(){var v=d.my.offsetY+d.at.offsetY;return v+u.top+(d.my.y==="top"?0:-1*(d.my.y==="center"?r.getOuterHeight(e)/2:r.getOuterHeight(e)))}},C={count:{x:0,y:0},left:function(){var v=w.left(),x=n.getWindowScrollLeft();e.style.left=v+x+"px",this.count.x===2?(e.style.left=x+"px",this.count.x=0):v<0&&(this.count.x++,d.my.x="left",d.at.x="right",d.my.offsetX*=-1,d.at.offsetX*=-1,this.right())},right:function(){var v=w.left()+n.getOuterWidth(t),x=n.getWindowScrollLeft();e.style.left=v+x+"px",this.count.x===2?(e.style.left=c.width-n.getOuterWidth(e)+x+"px",this.count.x=0):v+n.getOuterWidth(e)>c.width&&(this.count.x++,d.my.x="right",d.at.x="left",d.my.offsetX*=-1,d.at.offsetX*=-1,this.left())},top:function(){var v=w.top(),x=n.getWindowScrollTop();e.style.top=v+x+"px",this.count.y===2?(e.style.left=x+"px",this.count.y=0):v<0&&(this.count.y++,d.my.y="top",d.at.y="bottom",d.my.offsetY*=-1,d.at.offsetY*=-1,this.bottom())},bottom:function(){var v=w.top()+n.getOuterHeight(t),x=n.getWindowScrollTop();e.style.top=v+x+"px",this.count.y===2?(e.style.left=c.height-n.getOuterHeight(e)+x+"px",this.count.y=0):v+n.getOuterHeight(t)>c.height&&(this.count.y++,d.my.y="bottom",d.at.y="top",d.my.offsetY*=-1,d.at.offsetY*=-1,this.top())},center:function(v){if(v==="y"){var x=w.top()+n.getOuterHeight(t)/2;e.style.top=x+n.getWindowScrollTop()+"px",x<0?this.bottom():x+n.getOuterHeight(t)>c.height&&this.top()}else{var I=w.left()+n.getOuterWidth(t)/2;e.style.left=I+n.getWindowScrollLeft()+"px",I<0?this.left():I+n.getOuterWidth(e)>c.width&&this.right()}}};C[d.at.x]("x"),C[d.at.y]("y"),this.isFunction(l)&&l(d)}}},{key:"findCollisionPosition",value:function(e){if(e){var t=e==="top"||e==="bottom",r=e==="left"?"right":"left",o=e==="top"?"bottom":"top";return t?{axis:"y",my:"center ".concat(o),at:"center ".concat(e)}:{axis:"x",my:"".concat(r," center"),at:"".concat(e," center")}}}},{key:"getParents",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))}},{key:"getScrollableParents",value:function(e){var t=[];if(e){var r=this.getParents(e),o=/(auto|scroll)/,a=function(v){var x=v?getComputedStyle(v):null;return x&&(o.test(x.getPropertyValue("overflow"))||o.test(x.getPropertyValue("overflowX"))||o.test(x.getPropertyValue("overflowY")))},l=G(r),u;try{for(l.s();!(u=l.n()).done;){var c=u.value,f=c.nodeType===1&&c.dataset.scrollselectors;if(f){var g=f.split(","),p=G(g),d;try{for(p.s();!(d=p.n()).done;){var w=d.value,C=this.findSingle(c,w);C&&a(C)&&t.push(C)}}catch(j){p.e(j)}finally{p.f()}}c.nodeType!==9&&a(c)&&t.push(c)}}catch(j){l.e(j)}finally{l.f()}}return t}},{key:"getHiddenElementOuterHeight",value:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}return 0}},{key:"getHiddenElementOuterWidth",value:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}return 0}},{key:"getHiddenElementDimensions",value:function(e){var t={};return e&&(e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible"),t}},{key:"fadeIn",value:function(e,t){if(e){e.style.opacity=0;var r=+new Date,o=0,a=function l(){o=+e.style.opacity+(new Date().getTime()-r)/t,e.style.opacity=o,r=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(l)||setTimeout(l,16))};a()}}},{key:"fadeOut",value:function(e,t){if(e)var r=1,o=50,a=o/t,l=setInterval(function(){r-=a,r<=0&&(r=0,clearInterval(l)),e.style.opacity=r},o)}},{key:"getUserAgent",value:function(){return navigator.userAgent}},{key:"isIOS",value:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}},{key:"isAndroid",value:function(){return/(android)/i.test(navigator.userAgent)}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"appendChild",value:function(e,t){if(this.isElement(t))t.appendChild(e);else if(t.el&&t.el.nativeElement)t.el.nativeElement.appendChild(e);else throw new Error("Cannot append "+t+" to "+e)}},{key:"removeChild",value:function(e,t){if(this.isElement(t))t.removeChild(e);else if(t.el&&t.el.nativeElement)t.el.nativeElement.removeChild(e);else throw new Error("Cannot remove "+e+" from "+t)}},{key:"isElement",value:function(e){return(typeof HTMLElement>"u"?"undefined":A(HTMLElement))==="object"?e instanceof HTMLElement:e&&A(e)==="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}},{key:"scrollInView",value:function(e,t){var r=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=r?parseFloat(r):0,a=getComputedStyle(e).getPropertyValue("paddingTop"),l=a?parseFloat(a):0,u=e.getBoundingClientRect(),c=t.getBoundingClientRect(),f=c.top+document.body.scrollTop-(u.top+document.body.scrollTop)-o-l,g=e.scrollTop,p=e.clientHeight,d=this.getOuterHeight(t);f<0?e.scrollTop=g+f:f+d>p&&(e.scrollTop=g+f-p+d)}},{key:"clearSelection",value:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}},{key:"calculateScrollbarWidth",value:function(e){if(e){var t=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)}else{if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var r=document.createElement("div");r.className="p-scrollbar-measure",document.body.appendChild(r);var o=r.offsetWidth-r.clientWidth;return document.body.removeChild(r),this.calculatedScrollbarWidth=o,o}}},{key:"getBrowser",value:function(){if(!this.browser){var e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}},{key:"resolveUserAgent",value:function(){var e=navigator.userAgent.toLowerCase(),t=/(chrome)[ ]([\w.]+)/.exec(e)||/(webkit)[ ]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}}},{key:"isVisible",value:function(e){return e&&(e.clientHeight!==0||e.getClientRects().length!==0||getComputedStyle(e).display!=="none")}},{key:"isExist",value:function(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}},{key:"hasDOM",value:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}},{key:"getFocusableElements",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=n.find(e,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(t,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(t)),o=[],a=G(r),l;try{for(a.s();!(l=a.n()).done;){var u=l.value;getComputedStyle(u).display!=="none"&&getComputedStyle(u).visibility!=="hidden"&&o.push(u)}}catch(c){a.e(c)}finally{a.f()}return o}},{key:"getFirstFocusableElement",value:function(e,t){var r=n.getFocusableElements(e,t);return r.length>0?r[0]:null}},{key:"getLastFocusableElement",value:function(e,t){var r=n.getFocusableElements(e,t);return r.length>0?r[r.length-1]:null}},{key:"focus",value:function(e,t){var r=t===void 0?!0:!t;e&&document.activeElement!==e&&e.focus({preventScroll:r})}},{key:"getCursorOffset",value:function(e,t,r,o){if(e){var a=getComputedStyle(e),l=document.createElement("div");l.style.position="absolute",l.style.top="0px",l.style.left="0px",l.style.visibility="hidden",l.style.pointerEvents="none",l.style.overflow=a.overflow,l.style.width=a.width,l.style.height=a.height,l.style.padding=a.padding,l.style.border=a.border,l.style.overflowWrap=a.overflowWrap,l.style.whiteSpace=a.whiteSpace,l.style.lineHeight=a.lineHeight,l.innerHTML=t.replace(/\r\n|\r|\n/g,"<br />");var u=document.createElement("span");u.textContent=o,l.appendChild(u);var c=document.createTextNode(r);l.appendChild(c),document.body.appendChild(l);var f=u.offsetLeft,g=u.offsetTop,p=u.clientHeight;return document.body.removeChild(l),{left:Math.abs(f-e.scrollLeft),top:Math.abs(g-e.scrollTop)+p}}return{top:"auto",left:"auto"}}},{key:"invokeElementMethod",value:function(e,t,r){e[t].apply(e,r)}},{key:"isClickable",value:function(e){var t=e.nodeName,r=e.parentElement&&e.parentElement.nodeName;return t==="INPUT"||t==="TEXTAREA"||t==="BUTTON"||t==="A"||r==="INPUT"||r==="TEXTAREA"||r==="BUTTON"||r==="A"||this.hasClass(e,"p-button")||this.hasClass(e.parentElement,"p-button")||this.hasClass(e.parentElement,"p-checkbox")||this.hasClass(e.parentElement,"p-radiobutton")}},{key:"applyStyle",value:function(e,t){if(typeof t=="string")e.style.cssText=this.style;else for(var r in this.style)e.style[r]=t[r]}},{key:"exportCSV",value:function(e,t){var r=new Blob([e],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(r,t+".csv");else{var o=n.saveAs({name:t+".csv",src:URL.createObjectURL(r)});o||(e="data:text/csv;charset=utf-8,"+e,window.open(encodeURI(e)))}}},{key:"saveAs",value:function(e){if(e){var t=document.createElement("a");if(t.download!==void 0){var r=e.name,o=e.src;return t.setAttribute("href",o),t.setAttribute("download",r),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t),!0}}return!1}},{key:"createInlineStyle",value:function(e){var t=document.createElement("style");try{e||(e={}.REACT_APP_CSS_NONCE)}catch{}return e&&t.setAttribute("nonce",e),document.head.appendChild(t),t}},{key:"removeInlineStyle",value:function(e){if(this.isExist(e)){try{document.head.removeChild(e)}catch{}e=null}return e}},{key:"getTargetElement",value:function(e){if(!e)return null;if(e==="document")return document;if(e==="window")return window;if(A(e)==="object"&&e.hasOwnProperty("current"))return this.isExist(e.current)?e.current:null;var t=function(a){return!!(a&&a.constructor&&a.call&&a.apply)},r=t(e)?e():e;return r&&r.nodeType===9||this.isExist(r)?r:null}},{key:"getAttributeNames",value:function(e){var t,r,o;for(r=[],o=e.attributes,t=0;t<o.length;++t)r.push(o[t].nodeName);return r.sort(),r}},{key:"isEqualElement",value:function(e,t){var r,o,a,l,u;if(r=n.getAttributeNames(e),o=n.getAttributeNames(t),r.join(",")!==o.join(","))return!1;for(var c=0;c<r.length;++c)if(a=r[c],a==="style")for(var f=e.style,g=t.style,p=/^\d+$/,d=0,w=Object.keys(f);d<w.length;d++){var C=w[d];if(!p.test(C)&&f[C]!==g[C])return!1}else if(e.getAttribute(a)!==t.getAttribute(a))return!1;for(l=e.firstChild,u=t.firstChild;l&&u;l=l.nextSibling,u=u.nextSibling){if(l.nodeType!==u.nodeType)return!1;if(l.nodeType===1){if(!n.isEqualElement(l,u))return!1}else if(l.nodeValue!==u.nodeValue)return!1}return!(l||u)}}]),n}();ae(V,"DATA_PROPS",["data-"]);ae(V,"ARIA_PROPS",["aria","focus-target"]);function et(n){if(Array.isArray(n))return J(n)}function tt(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function nt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rt(n){return et(n)||tt(n)||ne(n)||nt()}var se=function(){function n(){re(this,n)}return oe(n,null,[{key:"equals",value:function(e,t,r){return r&&e&&A(e)==="object"&&t&&A(t)==="object"?this.resolveFieldData(e,r)===this.resolveFieldData(t,r):this.deepEquals(e,t)}},{key:"deepEquals",value:function(e,t){if(e===t)return!0;if(e&&t&&A(e)=="object"&&A(t)=="object"){var r=Array.isArray(e),o=Array.isArray(t),a,l,u;if(r&&o){if(l=e.length,l!==t.length)return!1;for(a=l;a--!==0;)if(!this.deepEquals(e[a],t[a]))return!1;return!0}if(r!==o)return!1;var c=e instanceof Date,f=t instanceof Date;if(c!==f)return!1;if(c&&f)return e.getTime()===t.getTime();var g=e instanceof RegExp,p=t instanceof RegExp;if(g!==p)return!1;if(g&&p)return e.toString()===t.toString();var d=Object.keys(e);if(l=d.length,l!==Object.keys(t).length)return!1;for(a=l;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,d[a]))return!1;for(a=l;a--!==0;)if(u=d[a],!this.deepEquals(e[u],t[u]))return!1;return!0}return e!==e&&t!==t}},{key:"resolveFieldData",value:function(e,t){if(e&&Object.keys(e).length&&t){if(this.isFunction(t))return t(e);if(n.isNotEmpty(e[t]))return e[t];if(t.indexOf(".")===-1)return e[t];for(var r=t.split("."),o=e,a=0,l=r.length;a<l;++a){if(o==null)return null;o=o[r[a]]}return o}else return null}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"isLetter",value:function(e){return e&&(e.toUpperCase()!=e.toLowerCase()||e.codePointAt(0)>127)}},{key:"findDiffKeys",value:function(e,t){return!e||!t?{}:Object.keys(e).filter(function(r){return!t.hasOwnProperty(r)}).reduce(function(r,o){return r[o]=e[o],r},{})}},{key:"reduceKeys",value:function(e,t){var r={};return!e||!t||t.length===0||Object.keys(e).filter(function(o){return t.some(function(a){return o.startsWith(a)})}).forEach(function(o){r[o]=e[o],delete e[o]}),r}},{key:"reorderArray",value:function(e,t,r){var o;if(e&&t!==r){if(r>=e.length)for(o=r-e.length;o--+1;)e.push(void 0);e.splice(r,0,e.splice(t,1)[0])}}},{key:"findIndexInList",value:function(e,t,r){var o=this;return t?r?t.findIndex(function(a){return o.equals(a,e,r)}):t.findIndex(function(a){return a===e}):-1}},{key:"getJSXElement",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return this.isFunction(e)?e.apply(void 0,r):e}},{key:"getPropValue",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];var a=r;return r&&r.length===1&&(a=r[0]),this.isFunction(e)?e.apply(void 0,rt(a)):e}},{key:"getRefElement",value:function(e){return e?A(e)==="object"&&e.hasOwnProperty("current")?e.current:e:null}},{key:"combinedRefs",value:function(e,t){e&&t&&(typeof t=="function"?t(e.current):t.current=e.current)}},{key:"removeAccents",value:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e}},{key:"isEmpty",value:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&A(e)==="object"&&Object.keys(e).length===0}},{key:"isNotEmpty",value:function(e){return!this.isEmpty(e)}},{key:"sort",value:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,o=arguments.length>3?arguments[3]:void 0,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,l=n.compare(e,t,o,r),u=r;return(n.isEmpty(e)||n.isEmpty(t))&&(u=a===1?r:a),u*l}},{key:"compare",value:function(e,t,r){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,a=-1,l=n.isEmpty(e),u=n.isEmpty(t);return l&&u?a=0:l?a=o:u?a=-o:typeof e=="string"&&typeof t=="string"?a=e.localeCompare(t,r,{numeric:!0}):a=e<t?-1:e>t?1:0,a}}]),n}(),it=function(i){var e=E.exports.useRef(void 0);return E.exports.useEffect(function(){e.current=i}),e.current},ot=function(i){return E.exports.useEffect(function(){return i},[])},Y=function(i){var e=i.target,t=e===void 0?"document":e,r=i.type,o=i.listener,a=i.options,l=i.when,u=l===void 0?!0:l,c=E.exports.useRef(null),f=E.exports.useRef(null),g=it(a),p=function(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};se.isNotEmpty(C.target)&&(d(),(C.when||u)&&(c.current=V.getTargetElement(C.target))),!f.current&&c.current&&(f.current=function(j){return o&&o(j)},c.current.addEventListener(r,f.current,a))},d=function(){f.current&&(c.current.removeEventListener(r,f.current,a),f.current=null)};return E.exports.useEffect(function(){u?c.current=V.getTargetElement(t):(d(),c.current=null)},[t,u]),E.exports.useEffect(function(){f.current&&(f.current!==o||g!==a)&&(d(),u&&p())},[o,a]),ot(function(){d()}),[p,d]};function z(){return z=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},z.apply(this,arguments)}function at(n){if(Array.isArray(n))return n}function st(n,i){var e=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(e!=null){var t,r,o,a,l=[],u=!0,c=!1;try{if(o=(e=e.call(n)).next,i===0){if(Object(e)!==e)return;u=!1}else for(;!(u=(t=o.call(e)).done)&&(l.push(t.value),l.length!==i);u=!0);}catch(f){c=!0,r=f}finally{try{if(!u&&e.return!=null&&(a=e.return(),Object(a)!==a))return}finally{if(c)throw r}}return l}}function ee(n,i){(i==null||i>n.length)&&(i=n.length);for(var e=0,t=new Array(i);e<i;e++)t[e]=n[e];return t}function lt(n,i){if(!!n){if(typeof n=="string")return ee(n,i);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ee(n,i)}}function ut(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D(n,i){return at(n)||st(n,i)||lt(n,i)||ut()}var k=40,U=50,X=50,W=4*Math.PI/3,F=-Math.PI/3,q=E.exports.memo(E.exports.forwardRef(function(n,i){var e=E.exports.useRef(null),t=!n.disabled&&!n.readOnly,r=Y({target:"window",type:"mousemove",listener:function(m){K(m.offsetX,m.offsetY),m.preventDefault()},when:t}),o=D(r,2),a=o[0],l=o[1],u=Y({target:"window",type:"mouseup",listener:function(m){l(),g(),m.preventDefault()},when:t}),c=D(u,2),f=c[0],g=c[1],p=Y({target:"window",type:"touchmove",listener:function(m){if(m.touches.length===1){var O=e.current.getBoundingClientRect(),L=m.targetTouches.item(0),R=L.clientX-O.left,M=L.clientY-O.top;K(R,M),m.preventDefault()}},when:t}),d=D(p,2),w=d[0],C=d[1],j=Y({target:"window",type:"touchend",listener:function(){C(),I()},when:t}),v=D(j,2),x=v[0],I=v[1],H=function(m,O,L,R,M){return(m-O)*(M-R)/(L-O)+R},B=function(){return H(n.min>0&&n.max>0?n.min:0,n.min,n.max,W,F)},N=function(){return H(n.value,n.min,n.max,W,F)},le=function(){return U+Math.cos(W)*k},ue=function(){return X-Math.sin(W)*k},ce=function(){return U+Math.cos(F)*k},de=function(){return X-Math.sin(F)*k},fe=function(){return U+Math.cos(B())*k},pe=function(){return X-Math.sin(B())*k},he=function(){return U+Math.cos(N())*k},ve=function(){return X-Math.sin(N())*k},ge=function(){return Math.abs(B()-N())<Math.PI?0:1},ye=function(){return N()>B()?0:1},xe="M ".concat(le()," ").concat(ue()," A ").concat(k," ").concat(k," 0 1 1 ").concat(ce()," ").concat(de()),me="M ".concat(fe()," ").concat(pe()," A ").concat(k," ").concat(k," 0 ").concat(ge()," ").concat(ye()," ").concat(he()," ").concat(ve()),be=function(){return n.valueTemplate.replace("{value}",n.value.toString())},K=function(m,O){var L=m-n.size/2,R=n.size/2-O,M=Math.atan2(R,L),Oe=-Math.PI/2-Math.PI/6;we(M,Oe)},we=function(m,O){var L;if(m>F)L=H(m,W,F,n.min,n.max);else if(m<O)L=H(m+2*Math.PI,W,F,n.min,n.max);else return;n.onChange&&n.onChange({value:Math.round((L-n.min)/n.step)*n.step+n.min})},Ce=function(m){!n.disabled&&!n.readOnly&&K(m.nativeEvent.offsetX,m.nativeEvent.offsetY)},Ee=function(m){a(),f(),m.preventDefault()},je=function(){l(),g()},Ae=function(){w(),x()},Te=function(){C(),I()};E.exports.useImperativeHandle(i,function(){return{props:n,getElement:function(){return e.current}}});var Se=se.findDiffKeys(n,q.defaultProps),ke=Qe("p-knob p-component",{"p-disabled":n.disabled},n.className),Le=n.showValue&&E.exports.createElement("text",{x:50,y:57,textAnchor:"middle",fill:n.textColor,className:"p-knob-text",name:n.name},be());return E.exports.createElement("div",z({ref:e,id:n.id,className:ke,style:n.style},Se),E.exports.createElement("svg",{viewBox:"0 0 100 100",width:n.size,height:n.size,onClick:Ce,onMouseDown:Ee,onMouseUp:je,onTouchStart:Ae,onTouchEnd:Te},E.exports.createElement("path",{d:xe,strokeWidth:n.strokeWidth,stroke:n.rangeColor,className:"p-knob-range"}),E.exports.createElement("path",{d:me,strokeWidth:n.strokeWidth,stroke:n.valueColor,className:"p-knob-value"}),Le))}));q.displayName="Knob";q.defaultProps={__TYPE:"Knob",id:null,style:null,className:null,value:null,size:100,disabled:!1,readOnly:!1,showValue:!0,step:1,min:0,max:100,strokeWidth:14,name:null,valueColor:"var(--primary-color, Black)",rangeColor:"var(--surface-border, LightGray)",textColor:"var(--text-color-secondary, Black)",valueTemplate:"{value}",onChange:null};const ct=()=>{const[n,i]=E.exports.useState(0);return s.exports.jsx(P,{children:s.exports.jsx(dt,{children:s.exports.jsxs(ft,{children:[s.exports.jsx(q,{value:n,valueTemplate:"{value}/14",size:160,valueColor:"#588525",readOnly:!0}),s.exports.jsx(pt,{for:"upload",children:"Carga De Archivos Requeridos"})]})})})},dt=h.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`,ft=h.div`
  background-color: #58852576;
  width: 90%;
  height: 250px;
  margin: 0 1rem 0 0;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,pt=h.label`
  display: inline-block;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  margin-top: 1rem;
`,ht=()=>{const n="*";return s.exports.jsxs(P,{children:[s.exports.jsxs(vt,{children:[s.exports.jsxs(te,{children:[s.exports.jsxs(T,{children:[s.exports.jsxs(b,{children:["Foto Frontal (1) ",n]}),s.exports.jsx(S,{type:"file"})]}),s.exports.jsxs(T,{children:[s.exports.jsxs(b,{children:["Curriculum Vitae (1) ",n]}),s.exports.jsx(S,{type:"file"})]}),s.exports.jsxs(T,{children:[s.exports.jsxs(b,{children:["Certificado de Educación (1) ",n]}),s.exports.jsx(b,{children:"( Certificado de estudios)"}),s.exports.jsx(S,{type:"file"})]}),s.exports.jsxs(T,{children:[s.exports.jsx(b,{children:"Certificado de Trabajo (opcional)"}),s.exports.jsx(S,{type:"file"})]}),s.exports.jsxs(T,{children:[s.exports.jsx(b,{children:"Certificado o Acta de "}),s.exports.jsx(b,{children:"Matrimonio (opcional)"}),s.exports.jsx(S,{type:"file"})]}),s.exports.jsxs(T,{children:[s.exports.jsx(b,{children:"Certificados De Partida de Nacimiento"}),s.exports.jsx(b,{children:"De los hijos (opcional)"}),s.exports.jsx(S,{type:"file"})]}),s.exports.jsxs(T,{children:[s.exports.jsx(b,{children:"Certificados De Partida de Nacimiento"}),s.exports.jsx(b,{children:"De los hijos (opcional)"}),s.exports.jsx(S,{type:"file"})]}),s.exports.jsxs(T,{children:[s.exports.jsx(b,{children:"Copia o screenshot de cuenta de"}),s.exports.jsxs(b,{children:[" ahorros Banco Internacional (1) ",n]}),s.exports.jsx(b,{children:"(o copia de planilla de servicios)"}),s.exports.jsx(S,{type:"file"})]})]}),s.exports.jsxs(te,{children:[s.exports.jsxs(T,{children:[s.exports.jsxs(b,{children:["Cedula o DNI (1) ",n]}),s.exports.jsx(S,{type:"file"})]}),s.exports.jsxs(T,{children:[s.exports.jsxs(b,{children:["Certificado de votación (1) ",n]}),s.exports.jsx(S,{type:"file"})]}),s.exports.jsxs(T,{children:[s.exports.jsx(b,{children:"Licencia de Conducir (opcional)"}),s.exports.jsx(S,{type:"file"})]}),s.exports.jsxs(T,{children:[s.exports.jsx(b,{children:"Carnet De discapacidad (opcional)"}),s.exports.jsx(S,{type:"file"})]}),s.exports.jsxs(T,{children:[s.exports.jsx(b,{children:"Copias de Certificados de"}),s.exports.jsx(b,{children:"capacitación (opcional)"}),s.exports.jsx(S,{type:"file"})]}),s.exports.jsxs(T,{children:[s.exports.jsx(b,{children:"Formulario 107 En caso de haber laborado"}),s.exports.jsx(b,{children:" en relación de dependencia (opcional)"}),s.exports.jsx(S,{type:"file"})]})]})]}),s.exports.jsx(gt,{children:s.exports.jsx(yt,{children:"ENVIAR"})})]})},vt=h.div`
  width: 100%;
  height: 1200px;
  display: flex;
`,te=h.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`,T=h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 1rem 0;
`,b=h.label`
  display: inline-block;
  color: var(--primaryColor);
  font-family: sans-serif;
  border-radius: 0.3rem;
  margin: 0 0 0.5rem 0;
`,S=h.input`
  background-color: #f8f9fc;
  border: 1px solid #e2e9f3;
  border-radius: 13px;
  height: 60px;
  width: 300px;
  color: #565a90;

  &::file-selector-button {
    border: none;
    border-radius: 4px;
    color: white;
    background-color: var(--primaryColor);
    border: 1px solid #595ef1bd;
    height: 40px;
    cursor: pointer;
    transition: all 0.25s ease-in;
    cursor: pointer;
  }
  &::file-selector-button:hover {
    background-color: #fff;
    color: #565a90;
    transition: all 0.25s ease-in;
  }
`,gt=h.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`,yt=h.button`
  border: none;
  background-color: var(--secondColor);
  color: white;
  border-radius: 8px;
  width: 90%;
  height: 40px;
  cursor: pointer;
`,xt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAmCAYAAAAWR3O2AAAD4UlEQVR42u1ci63jIBB0CSnBJbgESnAJLiEl0EFKoISUQAV3XAeU4BJyRFqLiN3sBnCcxGak0ZM/8QeG3VmQX9fQsCn+/P03BvrA20LYtoGXwL5raLgDBHFjOAeeuoZj4y4CiCA3gZeu4Vi4i4MQiwNBSJy6hmPgIYroZL95USwWMfqac6DqGvYBIooMsP8s+BUTOMbriJFobmlrByD8yRw4wd9bQg/HxkAVOCBTLNN0Db8JppNd4JWOEvT5S/pqfmengAhxe0IF5/Rx3iWLs3S8zdn8GO4G95mBheMD0/ESHXgg31LTTsAIZioXC57IA+GQ12pR5ofACKYvFgumW1JbUkWZQJXzfCv6tLF7EcnvdO35Gff1aOBhjzhV9bNMiy5UaF4NRCEVeEbmGFM/lO8zEsqbBBOFiiu9bxbMk+kMgwayuBQT23wtwYyUYARfglNI9DuOTU1RAHYrwTBi1t8oGKGDB2KQ65w2JCKXZXhBnZynNvllGZOrk4YwuYKprALnQJOK+AsFo5PZc59sn6h09aL4TKBl+lRGRrjqq0p1+j7jmwXjEsGiBvwmwRDpcwickn2K2Gf49ovTGGsI5orCFaYp7yi5inqHYKBR0X2IEN1/kWAM1eZJJ3u8D78H4Xc0da1ATfHpivTDEoCOngbxXFOVCII01YKRU6NmwrT9iGDkyNwzx86BirMMVPpFgmFIvZQDQnnGphO1RrnOCKlfWTAaNRb/fOqjgsEdafjjuMzGs/N4wFcJJqEnbxSpV6pMRub6ZYKRjZ6jQi56/w8KhmgXg54Xt+mFSDuWiC6eEZ4LVBTxS2Fq5phboSy0jCBtnWBwKC7g+YOC8YXP3CPx4+2JEYwtCX+0i8Yca9MRI0hTKxguQuYY8C0EUz8Li8tsfiDWC8ZwC4ZMgw4vViaY8Nu80Y1Hj0CXGGwlUCNR8wKw0jMUnD8naUYJvNJltuw9xSoJcxI7Fh5oZkSjCRPZR0PLK73E9BZSFaaDHglmA6IIJ0VRucy2YnaRaZHPqKAFOvI4XQYq2h+tv2hWUc7arQRTXlHhRUimLK8VDF772ZgjvKBfxCSMJlXAPn8JIRId24anzMJCRUK6T7aZNT/1Igd0Y6YEdm8S1Onh3pf24dsPgvz8Ndb0l8J8bIi0N3cN+wGkChcrhhiWM3KfYdLdtWvYH0AgPtAkhnWphnySugyI7QR07UuBAwH5Gp5+MUeLWNqH+gdC1tQ6niRz7QuBAwHM71wmmJim2tcBBwIYVmRwpZlfYfZYdw37RjK5ltItJldY+LPtvzYcDJCmNHDkjOvjHEwTSsNL6axr2BX+A7qsy93BDbybAAAAAElFTkSuQmCC",mt="/assets/grupovilaseca-4bf73d2d.png",bt=()=>s.exports.jsx(P,{children:s.exports.jsxs(wt,{children:[s.exports.jsxs(Ct,{children:[s.exports.jsx(Et,{children:s.exports.jsx("img",{src:xt,alt:"cargando"})}),s.exports.jsx("br",{}),s.exports.jsxs(At,{children:[s.exports.jsx("p",{children:"Guayaquil – Guayas: Av. Juan Tanca Marengo, Km. 2.5 Quito"}),s.exports.jsx("p",{children:"Pichincha: Av. Amazonas n44-153 entre Av. el Inca y Río Coca"}),s.exports.jsx("p",{children:"Correo: info@la-llave.com"}),s.exports.jsx("p",{children:"Teléfonos: Guayaquil (04) 259-6900 – Quito (02) 394-9400"})]})]}),s.exports.jsx(Tt,{children:s.exports.jsx(jt,{children:s.exports.jsx("img",{src:mt,alt:"cargando"})})})]})}),wt=h.div`
  width: 100%;
  height: 170px;
  display: flex;
  background-color: #588525;
  border-radius: 13px;
`,Ct=h.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Et=h.div`
  width: 100%;
  display: flex;
  justify-content: center;
`,jt=h.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  display: flex;
  justify-content: center;
`,At=h.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  color: #c4c4c4;
  line-height: 1.4;
`,Tt=h.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`,kt=()=>s.exports.jsxs(s.exports.Fragment,{children:[s.exports.jsx(Re,{}),s.exports.jsx(Be,{}),s.exports.jsx(Xe,{}),s.exports.jsx(ct,{}),s.exports.jsx(ht,{}),s.exports.jsx(bt,{})]});export{kt as default};
