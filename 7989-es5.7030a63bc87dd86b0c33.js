!function(){"use strict";function t(t,e,n){return(e=i(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,i(o.key),o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[7989],{70997:function(t,e,n){n.d(e,{fV:function(){return u}});var o,i=n(74788),s=n(41823),u=((o=r(function t(){a(this,t)})).\u0275fac=function(t){return new(t||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[s.JF,s.mG,s.Lx,s.Lq,s.u4]}),o)},77989:function(n,o,i){i.r(o),i.d(o,{PostfixDocModule:function(){return E}});var s,u=i(12057),c=i(87862),p=i(86561),f=i(52494),l=i(70997),m=i(44427),d=i(82847),h=i(60885),g=i(21673),v=i(14707),y=i(74788),x=i(41823),b={mask:function(t){var n=t.value,o=Array.from(n.replace(/%/g,"")).map(function(){return/\d/});return o.length?[].concat(e(o),["%"]):[/\d/]}},k=i(94853),w=i(49510),A=i(47258),Z=((s=r(function t(){a(this,t),this.maskitoOptions=b,this.value=""})).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=y.Xpm({type:s,selectors:[["postfix-doc-example-1"]],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["inputmode","tel","tuiTextfield","",3,"maskito"]],template:function(t,e){1&t&&(y.TgZ(0,"tui-input",0),y.NdJ("ngModelChange",function(t){return e.value=t}),y._uU(1," Enter percentage amount "),y._UZ(2,"input",1),y.qZA()),2&t&&(y.Udp("max-width",20,"rem"),y.Q6J("ngModel",e.value),y.xp6(2),y.Q6J("maskito",e.maskitoOptions))},directives:[g.K3,g.wU,c.JJ,c.On,k.MB,w.F,A.r],encapsulation:2,changeDetection:0}),s),U=i(64916),T={mask:/^\$?\d*(\.0{0,2})?$/,postprocessors:[(0,U.jX)("$"),(0,U.A7)(".00")],plugins:[(0,U.nQ)(function(t){return["$".length,t.length-".00".length]})]},M=["inputRef"],_=function(){var t=function(){function t(){a(this,t),this.maskitoOptions=T,this.value=""}return r(t,[{key:"onFocus",value:function(){this.value||(this.value="$.00")}},{key:"onBlur",value:function(){"$.00"===this.value&&(this.value="")}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=y.Xpm({type:t,selectors:[["postfix-doc-example-2"]],viewQuery:function(t,e){var n;(1&t&&y.Gf(M,5,y.SBq),2&t)&&(y.iGM(n=y.CRH())&&(e.inputElement=n.first))},decls:4,vars:4,consts:[[3,"ngModel","ngModelChange"],["inputmode","numeric","tuiTextfield","",3,"maskito","blur","focus"],["inputRef",""]],template:function(t,e){1&t&&(y.TgZ(0,"tui-input",0),y.NdJ("ngModelChange",function(t){return e.value=t}),y._uU(1," Enter price "),y.TgZ(2,"input",1,2),y.NdJ("blur",function(){return e.onBlur()})("focus",function(){return e.onFocus()}),y.qZA(),y.qZA()),2&t&&(y.Udp("max-width",20,"rem"),y.Q6J("ngModel",e.value),y.xp6(2),y.Q6J("maskito",e.maskitoOptions))},directives:[g.K3,g.wU,c.JJ,c.On,k.MB,w.F,A.r],encapsulation:2,changeDetection:0}),t}();function q(t,e){if(1&t&&(y._uU(0," This example demonstrates how to create postfix via dynamic "),y.TgZ(1,"strong"),y.TgZ(2,"a",5),y._uU(3," pattern\xa0mask\xa0expression "),y.qZA(),y.qZA(),y._uU(4," . Percent symbol is a trailing fixed character, which will be automatically added when user enters the first digit. ")),2&t){var n=y.oxw();y.xp6(2),y.Q6J("routerLink",n.maskExpressionDocPage)}}function J(t,e){if(1&t&&(y.TgZ(0,"p",6),y._uU(1," This example demonstrates how to create postfix via "),y.TgZ(2,"strong"),y.TgZ(3,"a",5),y._uU(4," postprocessor "),y.qZA(),y.qZA(),y._uU(5," . It provides more flexibility, and you can configure any desired behaviour. You can use built-in "),y.TgZ(6,"code"),y._uU(7,"maskitoPostfixPostprocessorGenerator"),y.qZA(),y._uU(8," or create your own. "),y.qZA(),y.TgZ(9,"tui-notification",7),y._uU(10," Don't forget that "),y.TgZ(11,"code"),y._uU(12,"mask"),y.qZA(),y._uU(13," property should be compatible with a new prefix / postfix! "),y.qZA()),2&t){var n=y.oxw();y.xp6(3),y.Q6J("routerLink",n.processorsDocPage)}}var O=function(){var e=r(function e(){a(this,e),this.maskExpressionDocPage="/core-concepts/mask-expression",this.processorsDocPage="/core-concepts/processors",this.patternMaskApproachExample1=t({},v.C.MaskitoOptions,i.e(6988).then(i.t.bind(i,36988,17))),this.postprocessorApproachExample2=t({},v.C.MaskitoOptions,i.e(1165).then(i.t.bind(i,71165,17)))});return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=y.Xpm({type:e,selectors:[["postfix-doc"]],decls:13,vars:4,consts:[["header","With postfix","package","Recipes"],["id","by-pattern-mask-expression","heading","By pattern mask expression",3,"content","description"],["patternMaskApproachDescription",""],["id","by-postprocessor","heading","By postprocessor",3,"content","description"],["postprocessorApproachDescription",""],["tuiLink","",3,"routerLink"],[1,"tui-space_top-0"],["status","warning"]],template:function(t,e){if(1&t&&(y.TgZ(0,"tui-doc-page",0),y._uU(1," There are two approaches to add "),y.TgZ(2,"strong"),y._uU(3,"postfix"),y.qZA(),y._uU(4," for masked input. Every approach has its own behaviour and requires basic understanding of different core concepts. "),y.TgZ(5,"tui-doc-example",1),y.YNc(6,q,5,1,"ng-template",null,2,y.W1O),y._UZ(8,"postfix-doc-example-1"),y.qZA(),y.TgZ(9,"tui-doc-example",3),y.YNc(10,J,14,1,"ng-template",null,4,y.W1O),y._UZ(12,"postfix-doc-example-2"),y.qZA(),y.qZA()),2&t){var n=y.MAs(7),o=y.MAs(11);y.xp6(5),y.Q6J("content",e.patternMaskApproachExample1)("description",n),y.xp6(4),y.Q6J("content",e.postprocessorApproachExample2)("description",o)}},directives:[x.qo,x.f2,Z,_,d.V,p.yS,h.L],encapsulation:2,changeDetection:0}),e}(),E=function(){var t=r(function t(){a(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=y.oAB({type:t}),t.\u0275inj=y.cJS({imports:[[u.ez,c.u5,f.U5,l.fV,g.Qf,d.j,h.H,p.Bz.forChild((0,m.Ve)(O))]]}),t}()}}])}();