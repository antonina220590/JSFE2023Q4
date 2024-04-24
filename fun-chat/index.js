(()=>{"use strict";var e={281:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(601),s=t.n(a),o=t(314),l=t.n(o)()(s());l.push([e.id,".login-form__wrapper {\n    position: absolute;\n    border: 1px solid black;\n    width: 30vw;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 20px;\n}\n\n.login-form__title {\n    color: #0c0c0e;\n    text-align: center;\n    font-family: Forum;\n    font-size: 27px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 20px;\n    letter-spacing: 0.4px;\n}\n\n.login__form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 20px;\n}\n\n.error_box {\n    margin-top: 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    height: 9vh;\n    width: 20vh;\n}\n\n.login__form_input {\n    margin-bottom: 10px;\n    width: 210px;\n    border: none;\n    outline: 1px solid #bb945f;\n}\n\n.input {\n    font-family: sans-serif;\n    font-size: 100%;\n    line-height: 1.7;\n    margin: 0;\n}\n\n.button_login {\n    background-color: #fff;\n    border-radius: 2px;\n    border: 1px solid #0c0c0e;\n    cursor: pointer;\n    margin-top: 10px;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    padding-top: 0.7rem;\n    padding-bottom: 0.7rem;\n    width: 7.5rem;\n    cursor: pointer;\n}\n\n.button_inactive {\n    cursor: default;\n}\n\n.button:hover {\n    background-color: #bb945f;\n    border-radius: 2px;\n    border: 1px solid #bb945f;\n    transition: all 0.2s ease-in-out;\n}\n\n.error_label {\n    text-align: center;\n    color: red;\n    font-size: 12px;\n}\n\n.error {\n    border: 1px solid red;\n}\n",""]);const r=l},510:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(601),s=t.n(a),o=t(314),l=t.n(o)()(s());l.push([e.id,".footer {\n    min-height: 8vh;\n    display: flex;\n    padding: 0 5vh;\n    justify-content: space-between;\n    align-items: center;\n    border: 2px solid black;\n    border-radius: 10px;\n    margin-top: 2vh;\n}\n\n.github_link {\n    text-decoration: none;\n    color: black;\n}\n",""]);const r=l},994:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(601),s=t.n(a),o=t(314),l=t.n(o)()(s());l.push([e.id,".header {\n    min-height: 8vh;\n    display: flex;\n    padding: 0 5vh;\n    justify-content: space-between;\n    align-items: center;\n    border: 2px solid black;\n    border-radius: 10px;\n    margin-bottom: 2vh;\n}\n\n.user_name_container {\n    width: 40%;\n}\n\n.header_text {\n    font-weight: 300;\n    font-size: 20px;\n}\n\n.btns_box {\n    display: flex;\n    gap: 10px;\n}\n\n.button_btn {\n    color: #0c0c0e;\n    text-align: center;\n    font-family: Inter;\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: normal;\n    letter-spacing: 1px;\n    background-color: #fff;\n    border-radius: 2px;\n    border: 1px solid #0c0c0e;\n    cursor: pointer;\n    padding-bottom: 8px;\n    padding-top: 0.2rem;\n    padding-bottom: 0.2rem;\n    width: 4rem;\n    cursor: pointer;\n}\n\n.button:hover {\n    background-color: #bb945f;\n    border-radius: 2px;\n    border: 1px solid #bb945f;\n    transition: all 0.2s ease-in-out;\n}\n\n@media screen and (max-width: 600px) {\n    .user_name_container {\n        display: flex;\n        flex-wrap: wrap;\n    }\n\n    .header_text {\n        font-size: 15px;\n    }\n}\n\n@media screen and (max-width: 500px) {\n    .user_name_container {\n        display: flex;\n        flex-wrap: wrap;\n    }\n\n    .header_text {\n        font-size: 10px;\n    }\n\n    .header {\n        padding: 0 2vh;\n    }\n\n    .btns_box {\n        flex-wrap: wrap;\n        gap: 2px;\n        justify-content: center;\n    }\n\n    .button_btn {\n        width: 3rem;\n        font-size: 8px;\n    }\n}\n",""]);const r=l},298:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(601),s=t.n(a),o=t(314),l=t.n(o)()(s());l.push([e.id,".main {\n    min-height: 75vh;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.left-side__wrapper {\n    height: 60vh;\n    border: 2px solid black;\n    border-radius: 10px;\n    padding: 20px;\n    width: 30vw;\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n}\n\n.right-side__wrapper {\n    height: 60vh;\n    border: 2px solid black;\n    border-radius: 10px;\n    padding: 20px;\n    width: 60vw;\n    margin-left: 20px;\n}\n\n.users_list {\n    margin-top: 1rem;\n    list-style-type: none;\n}\n\n.user_container {\n    align-items: center;\n    border-radius: 2px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    padding: 1% 5%;\n    width: 100%;\n}\n\n.status_container {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 2px solid black;\n    height: 3vh;\n}\n\n.user_status {\n    border: 1px solid;\n    border-radius: 50%;\n    box-sizing: border-box;\n    height: 6px;\n    margin: 0 5% 0 0;\n    width: 6px;\n    background: greenyellow;\n}\n\n.user_status_inactive {\n    border: 1px solid;\n    border-radius: 50%;\n    box-sizing: border-box;\n    height: 6px;\n    margin: 0 5% 0 0;\n    width: 6px;\n    background: red;\n}\n\n.messages_container {\n    height: 52vh;\n}\n\n.message {\n    margin-top: 10px;\n    align-items: center;\n    background: #f5f5f5;\n    border-radius: 5px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    padding: 1%;\n    width: 60%;\n}\n\n.message_header {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    font-size: 0.7rem;\n    justify-content: space-between;\n    width: 80%;\n}\n\n.invisible {\n    display: none;\n}\n\n.message_text {\n    background: #fdfdfd;\n    border-radius: 5px;\n    box-sizing: border-box;\n    margin: 2% 0 0;\n    padding: 3%;\n    text-align: justify;\n    width: 100%;\n}\n\n.message_footer {\n    align-items: center;\n    display: flex;\n    flex-direction: row;\n    font-size: 0.7rem;\n    justify-content: flex-end;\n    width: 90%;\n}\n\n.dialog_input_container {\n    align-items: center;\n    border-top: 2px solid;\n    display: flex;\n    height: 10vh;\n    justify-content: space-between;\n    margin: 1% 0 0;\n    max-height: 35px;\n    padding: 0.5% 0.5% 0;\n    width: 100%;\n}\n\n.dialog_input {\n    height: 28px;\n    outline: none;\n    padding: 0 5%;\n    width: 70%;\n}\n\n@media screen and (max-width: 530px) {\n    .left-side__wrapper {\n        padding: 20px 5px;\n        width: 50vw;\n    }\n\n    .user_login_name {\n        font-size: 10px;\n    }\n\n    input {\n        font-size: 50%;\n    }\n\n    .user_status_text {\n        font-size: 10px;\n    }\n\n    .message {\n        width: 100%;\n    }\n\n    .message_info {\n        font-size: 7px;\n        display: flex;\n        flex-wrap: wrap;\n    }\n\n    .delivary_status {\n        font-size: 7px;\n    }\n}\n",""]);const r=l},955:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(601),s=t.n(a),o=t(314),l=t.n(o)()(s());l.push([e.id,".main-page__container {\n    margin: 10px 40px;\n}\n",""]);const r=l},319:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(601),s=t.n(a),o=t(314),l=t.n(o)()(s());l.push([e.id,".info_wrapper {\n    position: absolute;\n    border: 1px solid black;\n    width: 30vw;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 20px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    gap: 20px;\n}\n\n.chat_info {\n    display: flex;\n    text-align: center;\n    font-size: 25px;\n}\n\n.github__link {\n    font-size: 20px;\n}\n\n.button_close_info {\n    color: #0c0c0e;\n    text-align: center;\n    font-family: Inter;\n    font-size: 15px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: normal;\n    letter-spacing: 1px;\n    margin-top: 1rem;\n    padding: 10px;\n    cursor: pointer;\n}\n\n.button:hover {\n    background-color: #bb945f;\n    border-radius: 2px;\n    border: 1px solid #bb945f;\n    transition: all 0.2s ease-in-out;\n}\n\n@media screen and (max-width: 500px) {\n    .title {\n        font-size: 20px;\n    }\n\n    .chat_info {\n        font-size: 15px;\n    }\n\n    .github_link {\n        font-size: 13px;\n    }\n\n    .button_close_info {\n        font-size: 10px;\n        padding: 3px;\n    }\n}\n",""]);const r=l},456:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(601),s=t.n(a),o=t(314),l=t.n(o)()(s());l.push([e.id,".modal__logout_overlay {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: rgba(41, 41, 41, 0.6);\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n    width: 100wv;\n    opacity: 0;\n    visibility: hidden;\n    z-index: 1;\n}\n\n.modal__logout_overlay_active {\n    opacity: 1;\n    visibility: visible;\n}\n\n.modal__logout__form {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    height: auto;\n    max-width: 250px;\n    height: 100px;\n    width: 100%;\n    background-color: white;\n    margin: 0 auto;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    opacity: 0;\n    visibility: hidden;\n    border-radius: 20px;\n    align-items: center;\n    justify-content: center;\n}\n\n.modal__logout__form_active {\n    opacity: 1;\n    visibility: visible;\n}\n\n.modal-window__inside {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n.modal-window__btns-box {\n    display: flex;\n    gap: 40px;\n}\n\n.modal-window__title {\n    color: black;\n    text-align: center;\n    font-family: Pacifico;\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 20px; /* 100% */\n    letter-spacing: 0.4px;\n}\n\n.button_log-in {\n    color: #0c0c0e;\n    text-align: center;\n    font-family: Inter;\n    font-size: 15px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: normal;\n    letter-spacing: 1px;\n}\n\n.button_log-in:hover {\n    background-color: #bb945f;\n    border-radius: 2px;\n    border: 1px solid #bb945f;\n    transition: all 0.2s ease-in-out;\n}\n\n.modal-window__btns-box {\n    display: flex;\n    gap: 40px;\n}\n\n.modal_btn {\n    background-color: cornflowerblue;\n    cursor: pointer;\n    padding: 5px 10px;\n}\n",""]);const r=l},208:(e,n,t)=>{t.d(n,{A:()=>m});var a=t(601),s=t.n(a),o=t(314),l=t.n(o),r=t(417),i=t.n(r),d=new URL(t(406),t.b),c=l()(s()),u=i()(d);c.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background: url(${u});\n    width: 100vw;\n    /* height: 100vh; */\n    background-size: cover;\n    background-position: center center;\n    /* display: flex; */\n    justify-content: center;\n    align-items: center;\n}\n`,""]);const m=c},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,s,o){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(a)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(l[i]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);a&&l[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),s&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=s):c[4]="".concat(s)),n.push(c))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},l=[],r=0;r<e.length;r++){var i=e[r],d=a.base?i[0]+a.base:i[0],c=o[d]||0,u="".concat(d," ").concat(c);o[d]=c+1;var m=t(u),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==m)n[m].references++,n[m].updater(p);else{var g=s(p,a);a.byIndex=r,n.splice(r,0,{identifier:u,updater:g,references:1})}l.push(u)}return l}function s(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,s){var o=a(e=e||[],s=s||{});return function(e){e=e||[];for(var l=0;l<o.length;l++){var r=t(o[l]);n[r].references--}for(var i=a(e,s),d=0;d<o.length;d++){var c=t(o[d]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}o=i}}},659:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var s=void 0!==t.layer;s&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,s&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},406:(e,n,t)=>{e.exports=t.p+"images/backimg.jpg"}},n={};function t(a){var s=n[a];if(void 0!==s)return s.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var s=a.length-1;s>-1&&(!e||!/^http(s?):/.test(e));)e=a[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),n=t.n(e),a=t(825),s=t.n(a),o=t(659),l=t.n(o),r=t(56),i=t.n(r),d=t(540),c=t.n(d),u=t(113),m=t.n(u),p=t(208),g={};g.styleTagTransform=m(),g.setAttributes=i(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=c(),n()(p.A,g),p.A&&p.A.locals&&p.A.locals;var b=t(281),f={};f.styleTagTransform=m(),f.setAttributes=i(),f.insert=l().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=c(),n()(b.A,f),b.A&&b.A.locals&&b.A.locals;class h{constructor(e){var n;const t=document.createElement(null!==(n=e.HTMLtag)&&void 0!==n?n:"div");this.element=t,e.classNames&&(this.addClasses(e.classNames),this.toggleClasses(e.classNames),this.removeClasses(e.classNames)),this.createNewElement(e)}createNewElement(e){var n;this.element=document.createElement(null!==(n=e.HTMLtag)&&void 0!==n?n:"div"),this.addTextContent(e.text),void 0!==e.callback&&null!==typeof e.callback&&this.addCallback(e.callback)}addClasses(e){e.forEach((e=>{this.element.classList.add(e)}))}toggleClasses(e){e.forEach((e=>{this.element.classList.toggle(e)}))}removeClasses(e){e.forEach((e=>{this.element.classList.toggle(e)}))}addTextContent(e){this.element.textContent=e}appendElement(e){e instanceof h?this.element.append(e.getElement()):this.element.append(e)}setAttribute(e,n){this.element.setAttribute(e,n)}addCallback(e){"function"==typeof e&&this.element.addEventListener("click",(n=>e(n)))}getElement(){return this.element}}class x{constructor(e){this.elementCreator=this.createView(e)}getHtmlElement(){return this.elementCreator.getElement()}createView(e){const n={HTMLtag:e.HTMLtag,classNames:e.classNames,text:e.text,src:"",callback:void 0};return this.elementCreator=new h(n),this.elementCreator}}const _="login__form__label",w="error_box",v="error_box_name",y="button_login",E="login__form__input_name",C="error_label",T="input",A="";var L=t(955),k={};k.styleTagTransform=m(),k.setAttributes=i(),k.insert=l().bind(null,"head"),k.domAPI=s(),k.insertStyleElement=c(),n()(L.A,k),L.A&&L.A.locals&&L.A.locals;var H=t(994),I={};I.styleTagTransform=m(),I.setAttributes=i(),I.insert=l().bind(null,"head"),I.domAPI=s(),I.insertStyleElement=c(),n()(H.A,I),H.A&&H.A.locals&&H.A.locals;const M="header_text",S="button_btn";class B extends x{constructor(){super({HTMLtag:"div",text:"",callback:null}),this.elementCreator.addClasses(["header"]),this.additionalView()}additionalView(){const e={HTMLtag:"div",text:"",callback:null},n=new h(e);n.addClasses(["user_name_container"]);const t={HTMLtag:"span",text:"",callback:null},a={HTMLtag:"button",text:"",callback:null},s=new h(t);s.addClasses(["user",M]),s.addTextContent("User: ");const o=new h(t);o.addClasses(["username",M,"logged_user"]),o.addTextContent("User"),o.setAttribute("id","currentUser");const l=new h(t);l.addClasses(["app_name",M]),l.addTextContent("Fun Chat"),s.getElement().append(o.getElement()),n.getElement().append(s.getElement());const r=new h(e);r.addClasses(["btns_box"]);const i=new h(a);i.addClasses([S,"info_button"]),i.setAttribute("id","infoBTN"),i.addTextContent("Info");const d=new h(a);d.addClasses([S]),d.setAttribute("id","logoutBtn"),d.addTextContent("Log Out"),r.getElement().append(i.getElement(),d.getElement()),this.getHtmlElement().append(n.getElement(),l.getElement(),r.getElement())}}var z=t(298),N={};N.styleTagTransform=m(),N.setAttributes=i(),N.insert=l().bind(null,"head"),N.domAPI=s(),N.insertStyleElement=c(),n()(z.A,N),z.A&&z.A.locals&&z.A.locals;const P="user_login_name",j="logged_user",O="";class U extends x{constructor(){super({HTMLtag:"div",text:O,callback:null}),this.elementCreator.addClasses(["main"]),this.addLeftSide(),this.addRightSide()}addLeftSide(){const e={HTMLtag:"div",text:O,callback:null},n={HTMLtag:"input",text:O,callback:null},t={HTMLtag:"ul",text:O,callback:null},a={HTMLtag:"li",text:O,callback:null},s={HTMLtag:"label",text:O,callback:null},o=new h(e);o.addClasses(["left-side__wrapper"]);const l=new h(n);l.addClasses(["search_input"]),l.setAttribute("id","searchInput"),l.setAttribute("placeholder","Search...");const r=new h(t);r.addClasses(["users_list"]),r.setAttribute("id","userUl");const i=new h(a);i.addClasses(["user_container"]),new h(e).addClasses(["user_status"]);const d=new h(s);d.addClasses([P,j]),d.addTextContent("User"),r.getElement().append(i.getElement()),o.getElement().append(l.getElement(),r.getElement()),this.elementCreator.getElement().append(o.getElement())}addRightSide(){const e={HTMLtag:"div",text:O,callback:null},n={HTMLtag:"label",text:O,callback:null},t=new h(e);t.addClasses(["right-side__wrapper"]);const a=new h(e);a.addClasses(["status_container"]);const s=new h(n);s.addClasses([P,j]),s.addTextContent("user");const o=new h(n);o.addClasses(["user_status_text"]),o.addTextContent("online"),a.getElement().append(s.getElement(),o.getElement());const l=new h(e);l.addClasses(["messages_container"]);const r=new h(e);r.addClasses(["message__wrapper"]);const i=new h(e);i.addClasses(["message"]);const d=new h(e);d.addClasses(["message_header"]);const c=new h(n);c.addClasses(["user_login_name",j]),c.addTextContent("user");const u=new h(n);u.addClasses(["message_info"]),u.addTextContent("17/04/2024, 21:05:11");const m=new h(e);m.addClasses(["message_text"]),m.addTextContent("Hello");const p=new h(e);p.addClasses(["message_footer"]);const g=new h(n);g.addClasses(["delivary_status"]),g.addTextContent("delivered"),p.appendElement(g.getElement()),d.getElement().append(c.getElement(),u.getElement(),m.getElement(),p.getElement()),i.getElement().append(d.getElement()),r.getElement().append(i.getElement()),l.getElement().append(r.getElement()),t.getElement().append(a.getElement(),l.getElement()),this.elementCreator.getElement().append(t.getElement())}}var R=t(510),V={};V.styleTagTransform=m(),V.setAttributes=i(),V.insert=l().bind(null,"head"),V.domAPI=s(),V.insertStyleElement=c(),n()(R.A,V),R.A&&R.A.locals&&R.A.locals;const $="footer_github",J="footer_text",F="github_link";class q extends x{constructor(){super({HTMLtag:"div",text:"",callback:null}),this.elementCreator.addClasses(["footer"]),this.additionalView()}additionalView(){const e={HTMLtag:"div",text:"",callback:null},n={HTMLtag:"a",text:"",callback:null},t=new h(e);t.addClasses(["footer_year",J]),t.addTextContent("2024");const a=new h(e);a.addClasses(["footer_rss",J]);const s=new h(n);s.addClasses([F]),s.setAttribute("href","https://rs.school/courses/javascript-mentoring-program"),s.setAttribute("target","_blank"),s.addTextContent("RSS"),a.appendElement(s.getElement());const o=new h(e);o.addClasses([$,$]);const l=new h(n);l.addClasses([F]),l.setAttribute("href","https://github.com/antonina220590"),l.setAttribute("target","_blank"),l.addTextContent("Antonina Tyurina"),o.appendElement(l.getElement()),this.elementCreator.getElement().append(t.getElement(),a.getElement(),o.getElement())}}var D=t(319),G={};G.styleTagTransform=m(),G.setAttributes=i(),G.insert=l().bind(null,"head"),G.domAPI=s(),G.insertStyleElement=c(),n()(D.A,G),D.A&&D.A.locals&&D.A.locals;const W="";function Q(e){if(null==e)throw Error("Element is not found")}const Z=[];function K(){const e=document.getElementById("logename"),n=document.getElementById("logpassword");Q(e),Q(n);const t=new WebSocket("ws://localhost:4000"),a={id:`${crypto.randomUUID()}`,type:"USER_LOGIN",payload:{user:{login:`${e.value}`,password:`${n.value}`}}},s=JSON.stringify({id:"",type:"USER_ACTIVE",payload:null}),o=JSON.stringify({id:"",type:"USER_INACTIVE",payload:null}),l=JSON.stringify(a);t.addEventListener("open",(e=>{t.send(l),t.send(s),t.send(o)}));let r={username:"",password:"",isLogined:!1};e&&n&&(r={username:`${e.value}`,password:`${n.value}`,isLogined:!0}),t.addEventListener("message",(e=>{const n=JSON.parse(e.data),t=document.getElementById("serverErr");Z.push(n.payload.users),"ERROR"===n.type?(function(){const e=document.getElementById("overlay");null==e||e.classList.add("modal__logout_overlay_active");const n=document.getElementById("form");null==n||n.classList.add("modal__logout__form_active")}(),t&&(t.innerHTML=`${n.payload.error}`)):"ERROR"!==n.type&&sessionStorage.setItem("userAt",JSON.stringify(r))}))}let X="false",Y="false";function ee(){const e=document.getElementById("logename"),n=document.getElementById("errorName"),t=e.value;Q(n);const a=/[A-Z][\\-a-zA-z]+$/.test(t);return n.innerText="",!1===a&&(n.innerText="",setTimeout((()=>{n.innerText="Invalid symbols / First letter is capital"}),0),e.classList.add("error"),X="false"),!0===a&&(setTimeout((()=>{n.innerText=""}),0),e.classList.remove("error"),X="true"),te(X,Y),X}function ne(){const e=document.getElementById("logpassword"),n=document.getElementById("errorPassword"),t=e.value;return Q(n),t.length<8?(n.innerText="",setTimeout((()=>{n.innerText="Password must contain at least 8 characters"}),100),e.classList.add("error"),Y="false"):(n.innerText="",e.classList.remove("error"),Y="true"),te(X,Y),Y}function te(e,n){const t=document.getElementById("logBtn");"true"===e&&"true"===n?null==t||t.removeAttribute("disabled"):null==t||t.setAttribute("disabled","")}const ae="user_status",se="user_status_inactive",oe="invisible";function le(){const e=document.getElementById("searchInput").value;Array.from(document.getElementsByClassName("user_login_name")).forEach((n=>{var t,a,s;(null===(t=n.textContent)||void 0===t?void 0:t.includes(e))?null===(s=n.closest(".user_container"))||void 0===s||s.classList.remove(oe):null===(a=n.closest(".user_container"))||void 0===a||a.classList.add(oe)}))}var re=t(456),ie={};ie.styleTagTransform=m(),ie.setAttributes=i(),ie.insert=l().bind(null,"head"),ie.domAPI=s(),ie.insertStyleElement=c(),n()(re.A,ie),re.A&&re.A.locals&&re.A.locals;class de extends x{constructor(){super({HTMLtag:"div",text:"",callback:null}),this.elementCreator.addClasses(["modal-window"]),this.showChildren()}showChildren(){const e={HTMLtag:"div",text:"",callback:null},n=new h(e);n.addClasses(["modal__logout_overlay"]),n.setAttribute("id","overlay");const t=new h(e);t.setAttribute("id","form"),t.addClasses(["modal__logout__form"]),n.appendElement(t.getElement());const a=new h(e);a.addClasses(["modal-window__inside"]),t.appendElement(a.getElement());const s=new h({HTMLtag:"p",text:"",callback:null});s.addClasses(["modal-window__title"]),s.setAttribute("id","serverErr"),a.appendElement(s.getElement());const o=new h(e);o.addClasses(["modal-window__btns-box"]),a.appendElement(o.getElement());const l=new h({HTMLtag:"button",text:"Ok",callback:null});l.setAttribute("id","okBtn"),l.addClasses(["button_log-in","modal_btn"]),o.appendElement(l.getElement()),l.getElement().addEventListener("click",(function(){const e=document.getElementById("overlay");null==e||e.classList.remove("modal__logout_overlay_active");const n=document.getElementById("form");null==n||n.classList.remove("modal__logout__form_active")})),this.elementCreator.appendElement(n.getElement())}}const ce=new class extends x{constructor(e){super({HTMLtag:"div",text:A,callback:null}),this.elementCreator.addClasses(["login-form__wrapper"]),this.elementCreator.setAttribute("id",e),this.additionalView()}additionalView(){const e={HTMLtag:"p",text:A,callback:null},n=new h({HTMLtag:"p",text:"LOGIN",callback:null});n.addClasses(["login-form__title"]);const t=new h({HTMLtag:"form",text:A,callback:null});t.addClasses(["login__form"]),t.setAttribute("action",""),t.setAttribute("id","login__form");const a={HTMLtag:"label",text:A,callback:null},s={HTMLtag:"div",text:A,callback:null},o=new h(s);o.addClasses([w,v]);const l=new h(s);l.addClasses([w,"error_box_name"]);const r={HTMLtag:"input",text:A,callback:null},i=new h({HTMLtag:"button",text:"Log In",callback:null});i.setAttribute("id","logBtn"),i.addClasses([y]),i.setAttribute("type","button"),i.setAttribute("disabled","");const d=new h({HTMLtag:"button",text:"Info",callback:null});d.setAttribute("id","logInfoBtn"),d.addClasses([y,"info_button"]);const c=new h(r);c.addClasses([v,E,T]),c.setAttribute("type","text"),c.setAttribute("name","logename"),c.setAttribute("data-register","name"),c.setAttribute("id","logename"),c.setAttribute("required","");const u=new h(a);u.addClasses([C]),u.setAttribute("id","errorName");const m=new h(r);m.addClasses([v,E,T]),m.setAttribute("type","password"),m.setAttribute("name","logpassword"),m.setAttribute("id","logpassword"),m.setAttribute("required","");const p=new h(a);p.addClasses([C]),p.setAttribute("id","errorPassword"),o.getElement().append(c.getElement(),u.getElement()),l.getElement().append(m.getElement(),p.getElement());const g=new h(e);g.addTextContent("Name");const b=new h(e);b.addTextContent("Password");const f=new h(a);f.addClasses([_,"login__form__label__password"]),f.getElement().append(b.getElement(),l.getElement());const x=new h(a);x.addClasses([_,"login__form__label__name"]),x.getElement().append(g.getElement(),o.getElement()),t.getElement().append(x.getElement(),f.getElement()),this.getHtmlElement().append(n.getElement(),t.getElement(),i.getElement(),d.getElement())}}("login-page").getHtmlElement(),ue=new class extends x{constructor(e){super({HTMLtag:"div",text:"",callback:null}),this.elementCreator.addClasses(["main-page__container"]),this.elementCreator.setAttribute("id",e),this.showChilder()}showChilder(){const e=new B,n=new U,t=new q;this.getHtmlElement().append(e.getHtmlElement(),n.getHtmlElement(),t.getHtmlElement())}}("chat-page").getHtmlElement(),me=new class extends x{constructor(e){super({HTMLtag:"div",text:W,callback:null}),this.elementCreator.addClasses(["info_wrapper"]),this.elementCreator.setAttribute("id",e),this.additionalView()}additionalView(){const e={HTMLtag:"h1",text:W,callback:null},n={HTMLtag:"span",text:W,callback:null},t={HTMLtag:"div",text:W,callback:null},a={HTMLtag:"a",text:W,callback:null},s=new h({HTMLtag:"button",text:W,callback:null});s.addClasses(["button_close_info"]),s.setAttribute("id","closeBtn"),s.addTextContent("Close");const o=new h(e);o.addClasses(["title"]),o.addTextContent("Fun Chat");const l=new h(n);l.addClasses(["chat_info"]),l.addTextContent("Welcome to our Fun Chat application! This is an amazing application that makes the people you love closer than ever.");const r=new h(t),i=new h(a);i.addClasses(["github_link"]),i.setAttribute("href","https://github.com/antonina220590"),i.setAttribute("target","_blank"),i.addTextContent("Antonina Tyurina"),r.appendElement(i),this.elementCreator.getElement().append(o.getElement(),l.getElement(),r.getElement(),s.getElement())}}("info-page").getHtmlElement();class pe{constructor(){this.createView(),pe.goToLoginPage(),pe.goToChatPage(),pe.validation(),pe.goToInfoPage(),pe.searchUser()}createView(){const e=Object.values(sessionStorage);let n={username:"",password:"",isLogined:!1};e.forEach((e=>{n=JSON.parse(e)}));const t=n.username;document.body.append(ce),sessionStorage.length<=0||t.length<=0?(document.body.innerHTML="",document.body.append(ce),pe.goToLoginPage(),pe.validation()):sessionStorage.length>0&&(document.body.innerHTML="",document.body.append(ue),pe.goToChatPage());const a=new de;document.body.append(a.getHtmlElement())}static validation(){const e=document.getElementById("logename"),n=document.getElementById("logpassword");e&&e.addEventListener("input",ee),n&&n.addEventListener("input",ne)}static goToChatPage(){const e=document.getElementById("logBtn"),n=Object.values(sessionStorage),t=document.getElementById("logename"),a=document.getElementById("logpassword");let s={username:"",password:"",isLogined:!1};n.forEach((e=>{s=JSON.parse(e)}));const o=s.username;function l(){if(sessionStorage.length>0||o.length>0){document.body.innerHTML="",document.body.append(ue);const e=document.getElementById("infoBTN");null==e||e.addEventListener("click",pe.goToInfoPage),pe.goToLoginPage(),function(){let e="";const n=Object.values(sessionStorage);for(let t=0;t<n.length;t+=1){const a=JSON.parse(n[t]);e=a.username}Array.from(document.getElementsByClassName("logged_user")).forEach((n=>{n.innerHTML=`${e}`}))}(),function(){const e=document.getElementById("currentUser");Array.isArray(Z[2])&&Array.isArray(Z[1])&&[...Z[1],...Z[2]].filter((n=>n.login!==(null==e?void 0:e.innerHTML))).find((e=>{const n=document.getElementById("userUl"),t=document.createElement("li");t.classList.add("user_container");const a=document.createElement("div");!1===e.isLogined?(a.classList.remove(ae),a.classList.add(se)):(a.classList.remove(se),a.classList.add(ae));const s=document.createElement("label");s.classList.add("user_login_name"),s.textContent=`${e.login}`,t.append(a,s);for(let e=0;e<Z.length;e+=1)null==n||n.append(t)}))}(),pe.searchUser()}}null==e||e.addEventListener("click",K),null==e||e.addEventListener("click",l),document.addEventListener("keydown",(function(e){try{t.value&&a.value&&13===e.keyCode&&(pe.validation(),K(),l())}catch(e){Error("error")}}))}static goToLoginPage(){const e=document.getElementById("logoutBtn");null==e||e.addEventListener("click",(function(){sessionStorage.clear(),document.body.innerHTML="",document.body.append(ce),function(){const e=document.getElementById("logpassword"),n=document.getElementById("logename");n&&(n.value=""),e&&(e.value="")}(),pe.goToChatPage()}))}static goToInfoPage(){const e=Array.from(document.getElementsByClassName("info_button")),n=Object.values(sessionStorage);let t={username:"",password:"",isLogined:!1};n.forEach((e=>{t=JSON.parse(e)}));const a=t.username;function s(){sessionStorage.length<=0||a.length<=0?(document.body.innerHTML="",document.body.append(ce)):(sessionStorage.length>0||a.length>0)&&(document.body.innerHTML="",document.body.append(ue))}function o(){document.body.innerHTML="",document.body.append(me);const e=document.getElementById("closeBtn");e&&e.addEventListener("click",s)}e.forEach((e=>{e.addEventListener("click",o)}))}static searchUser(){const e=document.getElementById("searchInput");e&&e.addEventListener("input",le)}}new pe})()})();