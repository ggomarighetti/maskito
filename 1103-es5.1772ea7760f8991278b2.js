!function(){"use strict";function e(e,t,n){return(t=i(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,i(o.key),o)}}function o(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[1103],{81103:function(n,i,r){r.r(i),r.d(i,{PlaceholderDocModule:function(){return I}});var s,u,a=r(12057),c=r(87862),l=r(2586),p=r(52494),d=r(70997),f=r(44427),m=r(61824),h=r(82847),g=r(79588),v=r(21673),x=r(14707),Z=r(74788),k=r(84800),_=r(58295),T=Object.assign(Object.assign({},(0,_.Oe)("xxx")),{mask:/^\d{0,3}$/}),U=r(94853),y=r(49510),b=r(47258),w=["inputRef"],A=((s=function(){function e(){t(this,e),this.maskitoOptions=T,this.value="xxx"}return o(e,[{key:"onFocus",value:function(){var e=this,t=this.value.indexOf("x");setTimeout(function(){e.inputRef.nativeElement.setSelectionRange(t,t)})}}]),e}()).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=Z.Xpm({type:s,selectors:[["placeholder-doc-example-1"]],viewQuery:function(e,t){var n;1&e&&Z.Gf(w,5,Z.SBq),2&e&&Z.iGM(n=Z.CRH())&&(t.inputRef=n.first)},decls:4,vars:4,consts:[["tuiTextfieldCustomContent","tuiIconCreditCardLarge",3,"ngModel","ngModelChange"],["tuiTextfield","","inputmode","numeric",3,"maskito","focus"],["inputRef",""]],template:function(e,t){1&e&&(Z.TgZ(0,"tui-input",0),Z.NdJ("ngModelChange",function(e){return t.value=e}),Z._uU(1," Enter CVC code "),Z.TgZ(2,"input",1,2),Z.NdJ("focus",function(){return t.onFocus()}),Z.qZA(),Z.qZA()),2&e&&(Z.Udp("max-width",20,"rem"),Z.Q6J("ngModel",t.value),Z.xp6(2),Z.Q6J("maskito",t.maskitoOptions))},directives:[v.K3,v.wU,g.B7,c.JJ,c.On,U.MB,y.F,b.r],encapsulation:2,changeDetection:0}),s),C=r(64762),q=r(73331),M="+\u2000 (\u2000\u2000\u2000) ___-____",O=(u=(0,_.Oe)(M)).removePlaceholder,J=(0,C._T)(u,["removePlaceholder"]),P={preprocessor:J.preprocessor,postprocessor:(0,q.Zu)((0,_.jX)("+1"),J.postprocessor),mask:["+","1"," ","(",/\d/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/]},R=["inputRef"];function E(e,t){1&e&&(Z._UZ(0,"img",4),Z.ALo(1,"tuiFlag")),2&e&&Z.Q6J("src",Z.lcZ(1,1,"US"),Z.LSH)}var Q,B=function(){var e=function(){function e(){t(this,e),this.maskitoOptions=P,this.value=""}return o(e,[{key:"onBlur",value:function(){var e=O(this.value);this.value="+1"===e?"":e}},{key:"onFocus",value:function(){var e=this,t=this.value||"+1 (";this.value=t+M.slice(t.length),setTimeout(function(){e.inputRef.nativeElement.setSelectionRange(t.length,t.length)})}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Z.Xpm({type:e,selectors:[["placeholder-doc-example-2"]],viewQuery:function(e,t){var n;(1&e&&Z.Gf(R,5,Z.SBq),2&e)&&(Z.iGM(n=Z.CRH())&&(t.inputRef=n.first))},decls:6,vars:5,consts:[[3,"tuiTextfieldCustomContent","ngModel","ngModelChange"],["tuiTextfield","","inputmode","tel",3,"maskito","focus","blur"],["inputRef",""],["usFlag",""],["width","28","alt","Flag of the United States",3,"src"]],template:function(e,t){if(1&e&&(Z.TgZ(0,"tui-input",0),Z.NdJ("ngModelChange",function(e){return t.value=e}),Z._uU(1," Enter US phone number "),Z.TgZ(2,"input",1,2),Z.NdJ("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()}),Z.qZA(),Z.YNc(4,E,2,3,"ng-template",null,3,Z.W1O),Z.qZA()),2&e){var n=Z.MAs(5);Z.Udp("max-width",20,"rem"),Z.Q6J("tuiTextfieldCustomContent",n)("ngModel",t.value),Z.xp6(2),Z.Q6J("maskito",t.maskitoOptions)}},directives:[v.K3,v.wU,g.B7,c.JJ,c.On,U.MB,y.F,b.r],pipes:[m.T],encapsulation:2,changeDetection:0}),e}(),D="dd/mm/yyyy",S=(0,_.tr)({mode:"dd/mm/yyyy",separator:"/"}),j=(Q=(0,_.Oe)(D)).removePlaceholder,F=(0,C._T)(Q,["removePlaceholder"]),L=Object.assign(Object.assign({},S),{preprocessor:(0,q.Zu)(F.preprocessor,S.preprocessor),postprocessor:(0,q.Zu)(S.postprocessor,F.postprocessor)}),N=["inputRef"],W=function(){var e=function(){function e(){t(this,e),this.maskitoOptions=L,this.value=""}return o(e,[{key:"onBlur",value:function(){this.value=j(this.value)}},{key:"onFocus",value:function(){var e=this,t=this.value;this.value=t+D.slice(this.value.length),setTimeout(function(){e.inputRef.nativeElement.setSelectionRange(t.length,t.length)})}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Z.Xpm({type:e,selectors:[["placeholder-doc-example-3"]],viewQuery:function(e,t){var n;(1&e&&Z.Gf(N,5,Z.SBq),2&e)&&(Z.iGM(n=Z.CRH())&&(t.inputRef=n.first))},decls:4,vars:4,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"ngModel","ngModelChange"],["tuiTextfield","","inputmode","numeric",3,"maskito","focus","blur"],["inputRef",""]],template:function(e,t){1&e&&(Z.TgZ(0,"tui-input",0),Z.NdJ("ngModelChange",function(e){return t.value=e}),Z._uU(1," Enter date "),Z.TgZ(2,"input",1,2),Z.NdJ("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()}),Z.qZA(),Z.qZA()),2&e&&(Z.Udp("max-width",20,"rem"),Z.Q6J("ngModel",t.value),Z.xp6(2),Z.Q6J("maskito",t.maskitoOptions))},directives:[v.K3,v.wU,g.B7,c.JJ,c.On,U.MB,y.F,b.r],encapsulation:2,changeDetection:0}),e}();function G(e,t){if(1&e&&(Z.TgZ(0,"p",8),Z._uU(1," This example is the simplest demonstration how to create masked input with "),Z.TgZ(2,"strong"),Z._uU(3,"placeholder"),Z.qZA(),Z._uU(4," . "),Z.qZA(),Z.TgZ(5,"p",9),Z._uU(6," The only required prerequisite is basic understanding of "),Z.TgZ(7,"a",10),Z._uU(8,' "Mask\xa0expression" '),Z.qZA(),Z._uU(9," concept. "),Z.qZA()),2&e){var n=Z.oxw();Z.xp6(7),Z.Q6J("routerLink",n.maskExpressionDocPage)}}function V(e,t){if(1&e&&(Z.TgZ(0,"p",8),Z._uU(1," The following example explains return type of "),Z.TgZ(2,"code"),Z._uU(3,"maskitoWithPlaceholder"),Z.qZA(),Z._uU(4," utility \u2014 an\xa0object which partially implements "),Z.TgZ(5,"code"),Z._uU(6,"MaskitoOptions"),Z.qZA(),Z._uU(7," interface. It contains its own "),Z.TgZ(8,"a",10),Z._uU(9," processor and postprocessor "),Z.qZA(),Z._uU(10," . "),Z.qZA(),Z._UZ(11,"p",8),Z.TgZ(12,"p",9),Z._uU(13," Also, this complex example uses built-in postprocessor "),Z.TgZ(14,"a",11),Z._uU(15," maskitoPrefixPostprocessorGenerator "),Z.qZA(),Z._uU(16," from "),Z.TgZ(17,"code"),Z._uU(18,"@maskito/kit"),Z.qZA(),Z._uU(19," . "),Z.qZA()),2&e){var n=Z.oxw();Z.xp6(8),Z.Q6J("routerLink",n.processorsDocPage),Z.xp6(6),Z.Q6J("routerLink",n.prefixDocPage)}}function X(e,t){1&e&&(Z._uU(0," This last example demonstrates how to integrate "),Z.TgZ(1,"code"),Z._uU(2,"maskitoWithPlaceholder"),Z.qZA(),Z._uU(3," with any built-in mask from "),Z.TgZ(4,"code"),Z._uU(5,"@maskito/kit"),Z.qZA(),Z._uU(6," . "))}var H=function(){var n=o(function n(){var o,i;t(this,n),this.maskExpressionDocPage="/core-concepts/mask-expression",this.processorsDocPage="/core-concepts/processors",this.prefixDocPage="/recipes/prefix",this.cvcExample1=e({},x.C.MaskitoOptions,r.e(960).then(r.t.bind(r,10960,17))),this.phoneExample2=(e(o={},x.C.MaskitoOptions,r.e(6304).then(r.t.bind(r,36304,17))),e(o,x.C.Angular,r.e(7948).then(r.t.bind(r,87948,17))),o),this.dateExample3=(e(i={},x.C.MaskitoOptions,r.e(5691).then(r.t.bind(r,35691,17))),e(i,x.C.Angular,r.e(6048).then(r.t.bind(r,66048,17))),i)});return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=Z.Xpm({type:n,selectors:[["placeholder-doc"]],decls:17,vars:6,consts:[["header","With placeholder","package","Recipes"],[1,"tui-space_top-0"],["id","cvc","heading","Card Verification Code",3,"content","description"],["cvcDescription",""],["id","phone","heading","Phone",3,"content","description"],["phoneDescription",""],["id","date","heading","Date",3,"content","description"],["dateExampleDescription",""],[1,"tui-space_top-0","tui-space_bottom-2"],[1,"tui-space_top-0","tui-space_bottom-0"],["tuiLink","",3,"routerLink"],["tuiLink","","fragment","by-postprocessor",3,"routerLink"]],template:function(e,t){if(1&e&&(Z.TgZ(0,"tui-doc-page",0),Z.TgZ(1,"p",1),Z.TgZ(2,"code"),Z._uU(3,"maskitoWithPlaceholder"),Z.qZA(),Z._uU(4," helps to show placeholder mask characters. The placeholder character represents the fillable spot in the mask. "),Z.qZA(),Z.TgZ(5,"tui-doc-example",2),Z.YNc(6,G,10,1,"ng-template",null,3,Z.W1O),Z._UZ(8,"placeholder-doc-example-1"),Z.qZA(),Z.TgZ(9,"tui-doc-example",4),Z.YNc(10,V,20,2,"ng-template",null,5,Z.W1O),Z._UZ(12,"placeholder-doc-example-2"),Z.qZA(),Z.TgZ(13,"tui-doc-example",6),Z.YNc(14,X,7,0,"ng-template",null,7,Z.W1O),Z._UZ(16,"placeholder-doc-example-3"),Z.qZA(),Z.qZA()),2&e){var n=Z.MAs(7),o=Z.MAs(11),i=Z.MAs(15);Z.xp6(5),Z.Q6J("content",t.cvcExample1)("description",n),Z.xp6(4),Z.Q6J("content",t.phoneExample2)("description",o),Z.xp6(4),Z.Q6J("content",t.dateExample3)("description",i)}},directives:[k.qo,k.f2,A,B,W,h.V,l.yS],encapsulation:2,changeDetection:0}),n}(),I=function(){var e=o(function e(){t(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=Z.oAB({type:e}),e.\u0275inj=Z.cJS({imports:[[a.ez,c.u5,p.U5,d.fV,m.I,v.Qf,h.j,g.cn,l.Bz.forChild((0,f.Ve)(H))]]}),e}()}}])}();