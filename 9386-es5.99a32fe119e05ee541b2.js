!function(){"use strict";function e(t,n){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e(t,n)}function t(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var i,o=r(e);if(t){var a=r(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return n(this,i)}}function n(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function i(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,u=[],s=!0,l=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(u.push(r.value),u.length!==t);s=!0);}catch(c){l=!0,i=c}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw i}}return u}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"))?o:String(o)),r)}var i,o}function l(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[9386],{70997:function(e,t,n){n.d(t,{fV:function(){return a}});var r,i=n(74788),o=n(84800),a=((r=l(function e(){c(this,e)})).\u0275fac=function(e){return new(e||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({imports:[o.JF,o.mG,o.Lx,o.Lq,o.u4]}),r)},52494:function(e,t,n){n.d(t,{U5:function(){return o}}),n(49510),n(47258);var r,i=n(74788),o=((r=l(function e(){c(this,e)})).\u0275fac=function(e){return new(e||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({}),r);n(40635)},49510:function(e,t,n){n.d(t,{F:function(){return u}});var r,i=n(87862),o=n(9513),a=n(74788),u=((r=l(function e(t){var n=this;c(this,e),this.accessor=t,this.maskito=o.A_;var r=t.writeValue.bind(t);t.writeValue=function(e){r((0,o.CV)(String(null!=e?e:""),n.maskito))}})).\u0275fac=function(e){return new(e||r)(a.Y36(i.Fj))},r.\u0275dir=a.lG2({type:r,selectors:[["input","maskito",""],["textarea","maskito",""]],hostBindings:function(e,t){1&e&&a.NdJ("input",function(e){return t.accessor._handleInput(e.target.value)})("blur",function(){return t.accessor.onTouched()})("compositionstart",function(){return t.accessor._compositionStart()})("compositionend",function(e){return t.accessor._compositionEnd(e.target.value)})},inputs:{maskito:"maskito"},features:[a._Bn([i.Fj,{provide:i.JU,multi:!0,useExisting:i.Fj}])]}),r)},47258:function(e,t,n){n.d(t,{r:function(){return a}});var r,i=n(74788),o=n(9513),a=((r=function(){function e(t,n){c(this,e),this.ngZone=t,this.elementRef=n,this.maskedElement=null,this.maskito=o.A_,this.maskitoElement=o.gI}return l(e,[{key:"ngOnChanges",value:function(){var e,t=this;null===(e=this.maskedElement)||void 0===e||e.destroy(),this.ngZone.runOutsideAngular(function(){t.maskedElement=new o.C8(t.maskitoElement(t.elementRef.nativeElement),t.maskito)})}},{key:"ngOnDestroy",value:function(){var e;null===(e=this.maskedElement)||void 0===e||e.destroy()}}]),e}()).\u0275fac=function(e){return new(e||r)(i.Y36(i.R0b),i.Y36(i.SBq))},r.\u0275dir=i.lG2({type:r,selectors:[["","maskito",""]],inputs:{maskito:"maskito",maskitoElement:"maskitoElement"},features:[i.TTD]}),r)},40635:function(e,t,n){n.d(t,{c:function(){return a}});var r,i=n(9513),o=n(74788),a=((r=function(){function e(){c(this,e)}return l(e,[{key:"transform",value:function(e,t){return(0,i.CV)(String(null!=e?e:""),t)}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275pipe=o.Yjl({name:"maskito",type:r,pure:!0}),r)},9513:function(n,r,a){a.d(r,{gI:function(){return u},A_:function(){return f},C8:function(){return D},Zu:function(){return O},CV:function(){return j}});var u=function(e){return e.querySelector("input,textarea")||e};function s(e){return e}var f={mask:/^.*$/,preprocessor:s,postprocessor:s,plugins:[],overwriteMode:"shift"};function v(e){return"string"==typeof e}function h(e,t,n,r){for(var i="",o=t.length;o<e.length;o++){var a=e[o],u=(null==r?void 0:r.value[o])===a;if(!v(a)||a===n&&!u)return i;i+=a}return i}function p(e,t){return Array.isArray(t)?e.length===t.length&&Array.from(e).every(function(e,n){var r=t[n];return v(r)?e===r:e.match(r)}):t.test(e)}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(p(e.value,t))return e;var r=Array.isArray(t)?function(e,t,n){var r=null,i=null,o=Array.from(e.value).reduce(function(o,a,u){var s=o+h(t,o,a,n),l=t[s.length];return v(l)?s+l:a.match(l)?(null===r&&u>=e.selection[0]&&(r=s.length),null===i&&u>=e.selection[1]&&(i=s.length),s+a):s},""),a=h(t,o,"",n);return{value:p(o+a,t)?o+a:o,selection:[null!=r?r:o.length,null!=i?i:o.length]}}(e,t,n):function(e,t){var n=e.value,r=o(e.selection,2),i=r[0],a=r[1],u=i,s=a;return{value:Array.from(n).reduce(function(e,n,r){var o=e+n;return i===r&&(u=e.length),a===r&&(s=e.length),o.match(t)?o:e},""),selection:[u,s]}}(e,t),i=r.value,a=r.selection;return{selection:a,value:Array.isArray(t)?i.slice(0,t.length):i}}function y(e,t){if(!Array.isArray(t))return e;var n=o(e.selection,2),r=n[0],a=n[1],u=[],s=Array.from(e.value).reduce(function(e,n,i){var o=t[i];return i===r&&u.push(e.length),i===a&&u.push(e.length),v(o)&&o===n?e:e+n},"");return u.length<2&&u.push.apply(u,i(Array(2-u.length).fill(s.length))),{value:s,selection:[u[0],u[1]]}}var m=function(){function e(t,n){c(this,e),this.initialElementState=t,this.maskOptions=n,this.value="",this.selection=[0,0];var r=d(t,this.getMaskExpression(t)),i=r.value,o=r.selection;this.value=i,this.selection=o}return l(e,[{key:"addCharacters",value:function(e,t){var n=o(e,2),r=n[0],i=n[1],a=this.value,u=this.getMaskExpression({value:a.slice(0,r)+t+a.slice(i),selection:[r+t.length,r+t.length]}),s={value:a,selection:[r,i]},l=y(s,u),c=o(function(e,t,n){var r=e.value,i=e.selection,a=o(i,2),u=a[0],s=a[1];return{value:r,selection:"replace"===("function"==typeof n?n({value:r,selection:i}):n)?[u,u+t.length]:[u,s]}}(l,t,this.maskOptions.overwriteMode).selection,2),f=c[0],v=c[1],h=l.value.slice(0,f)+t,p=h.length,m=d({value:h+l.value.slice(v),selection:[p,p]},u,s);if(a.slice(0,f)===d({value:h,selection:[p,p]},u,s).value||function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.every(function(t){var n=t.value,r=t.selection;return n===e.value&&r[0]===e.selection[0]&&r[1]===e.selection[1]})}(this,m))throw new Error("Invalid mask value");this.value=m.value,this.selection=m.selection}},{key:"deleteCharacters",value:function(e){var t=o(e,2),n=t[0],r=t[1];if(n!==r&&r){var i=this.value,a=this.getMaskExpression({value:i.slice(0,n)+i.slice(r),selection:[n,n]}),u={value:i,selection:[n,r]},s=y(u,a),l=o(s.selection,2),c=l[0],f=l[1],v=d({value:s.value.slice(0,c)+s.value.slice(f),selection:[c,c]},a,u);this.value=v.value,this.selection=v.selection}}},{key:"getMaskExpression",value:function(e){var t=this.maskOptions.mask;return"function"==typeof t?t(e):t}}]),e}(),g=function(){function e(t){c(this,e),this.element=t,this.listeners=[]}return l(e,[{key:"listen",value:function(e,t,n){var r=this,i=t;this.element.addEventListener(e,i,n),this.listeners.push(function(){return r.element.removeEventListener(e,i)})}},{key:"destroy",value:function(){this.listeners.forEach(function(e){return e()})}}]),e}();function w(e,t,n){return e.ctrlKey===!!(1&t)&&e.altKey===!!(2&t)&&e.shiftKey===!!(4&t)&&e.metaKey===!!(8&t)&&e.keyCode===n}function k(e,t){var n=e.value,r=o(e.selection,2),i=r[0],a=r[1];if(i!==a)return[i,a];var u=t?n.slice(i).indexOf("\n")+1||n.length:n.slice(0,a).lastIndexOf("\n")+1;return[t?i:u,t?u:a]}function b(e,t){var n=e.value,r=o(e.selection,2),i=r[0],a=r[1];return i!==a?[i,a]:(t?[i,a+1]:[i-1,a]).map(function(e){return Math.min(Math.max(e,0),n.length)})}var E=/\s+$/g,S=/^\s+/g,F=/\s/;function A(e,t){var n=e.value,r=o(e.selection,2),i=r[0],a=r[1];if(i!==a)return[i,a];if(t){var u=n.slice(i),s=o(u.match(S)||[""],1)[0],l=u.replace(S,"").search(F);return[i,-1!==l?i+s.length+l:n.length]}var c=n.slice(0,a),f=o(c.match(E)||[""],1)[0],v=c.replace(E,"").split("").reverse().findIndex(function(e){return e.match(F)});return[-1!==v?a-f.length-v:0,a]}function O(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return t.filter(function(e){return!!e}).reduce(function(e,t){return Object.assign(Object.assign({},e),t.apply(void 0,[e].concat(r)))},e)}}function j(e,t){var n=Object.assign(Object.assign({},f),t),r="string"==typeof e?{value:e,selection:[0,0]}:e,i=n.preprocessor({elementState:r,data:""},"validation").elementState,o=new m(i,n),a=n.postprocessor(o,r),u=a.value,s=a.selection;return"string"==typeof e?u:{value:u,selection:s}}var D=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&e(t,n)}(i,n);var r=t(i);function i(e,t){var n;return c(this,i),(n=r.call(this)).element=e,n.maskitoOptions=t,n.isTextArea="TEXTAREA"===n.element.nodeName,n.eventListener=new g(n.element),n.options=Object.assign(Object.assign({},f),n.maskitoOptions),n.teardowns=n.options.plugins.map(function(e){return e(n.element,n.options)}),n.ensureValueFitsMask(),n.updateHistory(n.elementState),n.eventListener.listen("keydown",function(e){return w(t=e,1,89)||w(t,5,90)||w(t,12,90)?(e.preventDefault(),n.redo()):function(e){return w(e,1,90)||w(e,8,90)}(e)?(e.preventDefault(),n.undo()):void 0;var t}),"onbeforeinput"in e?n.eventListener.listen("beforeinput",function(e){var t=e.inputType.includes("Forward");switch(n.updateHistory(n.elementState),e.inputType){case"historyUndo":return e.preventDefault(),n.undo();case"historyRedo":return e.preventDefault(),n.redo();case"deleteByCut":case"deleteContentBackward":case"deleteContentForward":return n.handleDelete({event:e,isForward:t,selection:b(n.elementState,t)});case"deleteWordForward":case"deleteWordBackward":return n.handleDelete({event:e,isForward:t,selection:A(n.elementState,t),force:!0});case"deleteSoftLineBackward":case"deleteSoftLineForward":case"deleteHardLineBackward":case"deleteHardLineForward":return n.handleDelete({event:e,isForward:t,selection:k(n.elementState,t),force:!0});case"insertLineBreak":return n.handleEnter(e);default:return n.handleInsert(e,e.data||"")}}):(n.eventListener.listen("keydown",function(e){return n.handleKeydown(e)}),n.eventListener.listen("paste",function(e){var t;return n.handleInsert(e,(null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text/plain"))||"")})),n.eventListener.listen("input",function(){n.ensureValueFitsMask(),n.updateHistory(n.elementState)}),n}return l(i,[{key:"elementState",get:function(){var e=this.element;return{value:e.value,selection:[e.selectionStart||0,e.selectionEnd||0]}}},{key:"destroy",value:function(){this.eventListener.destroy(),this.teardowns.forEach(function(e){return null==e?void 0:e()})}},{key:"updateElementState",value:function(e){var t=e.value,n=e.selection,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inputType:"insertText",data:null},i=this.elementState.value;this.updateValue(t),this.updateSelectionRange(n),i!==t&&this.dispatchInputEvent(r)}},{key:"updateSelectionRange",value:function(e){var t,n,r=o(e,2),i=r[0],a=r[1];(this.element.selectionStart!==i||this.element.selectionEnd!==a)&&(null===(n=(t=this.element).setSelectionRange)||void 0===n||n.call(t,i,a))}},{key:"updateValue",value:function(e){this.element.value=e}},{key:"ensureValueFitsMask",value:function(){this.updateElementState(j(this.elementState,this.options))}},{key:"dispatchInputEvent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inputType:"insertText",data:null},t="undefined"!=typeof window?window:globalThis;(null==t?void 0:t.InputEvent)&&this.element.dispatchEvent(new InputEvent("input",Object.assign(Object.assign({},e),{bubbles:!0,cancelable:!1})))}},{key:"handleKeydown",value:function(e){var t=e.key,n="Delete"===t;switch(t){case"Backspace":case"Delete":return this.handleDelete({event:e,isForward:n,selection:b(this.elementState,n)});case"Enter":return this.handleEnter(e)}!function(e){var t=e.key,n=e.ctrlKey,r=e.metaKey,i=e.altKey,o=n||r||i,a=/^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(t);return!o&&"Backspace"!==t&&a}(e)||this.handleInsert(e,t)}},{key:"handleDelete",value:function(e){var t=e.event,n=e.selection,r=e.isForward,i=e.force,a=void 0!==i&&i,u={value:this.elementState.value,selection:n},s=o(u.selection,2),l=s[0],c=s[1],f=this.options.preprocessor({elementState:u,data:""},r?"deleteForward":"deleteBackward").elementState,v=new m(f,this.options),h=o(f.selection,2),p=h[0],d=h[1];v.deleteCharacters([p,d]);var y=this.options.postprocessor(v,u);if(u.value.slice(0,l)+u.value.slice(c)!==y.value||a)return t.preventDefault(),function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.every(function(t){return t.value===e.value})}(u,f,v,y)?this.updateSelectionRange(r?[d,d]:[p,p]):(this.updateElementState(y,{inputType:"inputType"in t?t.inputType:r?"deleteContentForward":"deleteContentBackward",data:null}),void this.updateHistory(y))}},{key:"handleInsert",value:function(e,t){var n=this.elementState,r=this.options.preprocessor({data:t,elementState:n},"insert"),i=r.elementState,a=r.data,u=void 0===a?t:a,s=new m(i,this.options);try{s.addCharacters(i.selection,u)}catch(p){return e.preventDefault()}var l=o(i.selection,2),c=l[0],f=l[1],v=i.value.slice(0,c)+t+i.value.slice(f),h=this.options.postprocessor(s,n);v!==h.value&&(e.preventDefault(),this.updateElementState(h,{data:t,inputType:"inputType"in e?e.inputType:"insertText"}),this.updateHistory(h))}},{key:"handleEnter",value:function(e){this.isTextArea&&this.handleInsert(e,"\n")}}]),i}(function(){function e(){c(this,e),this.now=null,this.past=[],this.future=[]}return l(e,[{key:"undo",value:function(){var e=this.past.pop();e&&this.now&&(this.future.push(this.now),this.updateElement(e,"historyUndo"))}},{key:"redo",value:function(){var e=this.future.pop();e&&this.now&&(this.past.push(this.now),this.updateElement(e,"historyRedo"))}},{key:"updateHistory",value:function(e){if(this.now){var t=this.now.value!==e.value,n=this.now.selection.some(function(t,n){return t!==e.selection[n]});!t&&!n||(t&&(this.past.push(this.now),this.future=[]),this.now=e)}else this.now=e}},{key:"updateElement",value:function(e,t){this.now=e,this.updateElementState(e,{inputType:t,data:null})}}]),e}())}}])}();