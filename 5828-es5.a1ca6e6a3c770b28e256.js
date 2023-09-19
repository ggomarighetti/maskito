!function(){"use strict";function t(t,e,n){return(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,o(a.key),a)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[5828],{70997:function(t,e,o){o.d(e,{fV:function(){return c}});var i,r=o(74788),u=o(41823),c=((i=n(function t(){a(this,t)})).\u0275fac=function(t){return new(t||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[u.JF,u.mG,u.Lx,u.Lq,u.u4]}),i)},95828:function(e,o,i){i.r(o),i.d(o,{DateMaskDocModule:function(){return S}});var r,u=i(12057),c=i(87862),m=i(86561),d=i(52494),p=i(70997),s=i(44427),l=i(82847),y=i(79588),f=i(21673),g=i(14707),h=i(64916),x=i(74788),P=i(41823),Z=(0,h.tr)({mode:"yyyy/mm/dd",separator:"/"}),C=i(94853),M=i(49510),U=i(47258),w=((r=n(function t(){a(this,t),this.value="2005/10/21",this.filler="yyyy/mm/dd",this.mask=Z})).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=x.Xpm({type:r,selectors:[["date-mask-doc-example-1"]],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(t,e){1&t&&(x.TgZ(0,"tui-input",0),x.NdJ("ngModelChange",function(t){return e.value=t}),x._uU(1," Localization "),x._UZ(2,"input",1),x.qZA()),2&t&&(x.Udp("max-width",30,"rem"),x.Q6J("tuiTextfieldFiller",e.filler)("ngModel",e.value),x.xp6(2),x.Q6J("maskito",e.mask))},directives:[f.K3,f.wU,y.B7,y.kD,c.JJ,c.On,C.MB,M.F,U.r],encapsulation:2,changeDetection:0}),r),T=(0,h.tr)({mode:"dd/mm/yyyy",min:new Date(2e3,0,1),max:new Date(2025,4,10)}),v=function(){var t=n(function t(){a(this,t),this.value="20.01.2023",this.filler="dd.mm.yyyy",this.mask=T});return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=x.Xpm({type:t,selectors:[["date-mask-doc-example-2"]],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(t,e){1&t&&(x.TgZ(0,"tui-input",0),x.NdJ("ngModelChange",function(t){return e.value=t}),x._uU(1," Date "),x._UZ(2,"input",1),x.qZA()),2&t&&(x.Udp("max-width",30,"rem"),x.Q6J("tuiTextfieldFiller",e.filler)("ngModel",e.value),x.xp6(2),x.Q6J("maskito",e.mask))},directives:[f.K3,f.wU,y.B7,y.kD,c.JJ,c.On,C.MB,M.F,U.r],encapsulation:2,changeDetection:0}),t}();function k(t,e){1&t&&(x._uU(0," Use "),x.TgZ(1,"code"),x._uU(2,"mode"),x.qZA(),x._uU(3," and "),x.TgZ(4,"code"),x._uU(5,"separator"),x.qZA(),x._uU(6," properties to get a mask with a locale specific representation of dates. "))}function _(t,e){1&t&&(x._uU(0," Properties "),x.TgZ(1,"code"),x._uU(2,"min"),x.qZA(),x._uU(3," and "),x.TgZ(4,"code"),x._uU(5,"max"),x.qZA(),x._uU(6," allow you to set the earliest and the latest available dates. They accept native "),x.TgZ(7,"a",6),x._uU(8," Date "),x.qZA(),x._uU(9," . "))}function D(t,e){if(1&t&&(x._uU(0," Use "),x.TgZ(1,"code"),x._uU(2,"maskitoDateOptionsGenerator"),x.qZA(),x._uU(3," to create a mask for date input. "),x.TgZ(4,"tui-doc-example",2),x.YNc(5,k,7,0,"ng-template",null,3,x.W1O),x._UZ(7,"date-mask-doc-example-1"),x.qZA(),x.TgZ(8,"tui-doc-example",4),x.YNc(9,_,10,0,"ng-template",null,5,x.W1O),x._UZ(11,"date-mask-doc-example-2"),x.qZA()),2&t){var n=x.MAs(6),o=x.MAs(10),a=x.oxw();x.xp6(4),x.Q6J("content",a.dateLocalization)("description",n),x.xp6(4),x.Q6J("content",a.dateMinMax)("description",o)}}function V(t,e){if(1&t&&(x.TgZ(0,"tui-input",12),x._uU(1," Enter date "),x._UZ(2,"input",13),x.qZA()),2&t){var n=x.oxw(2);x.Q6J("formControl",n.apiPageControl),x.xp6(2),x.Q6J("maskito",n.maskitoOptions)}}function O(t,e){1&t&&x._uU(0," Date format mode ")}function b(t,e){1&t&&(x._uU(0," Symbol for separating date-segments (days, months, years) "),x.TgZ(1,"p",14),x.TgZ(2,"strong"),x._uU(3,"Default:"),x.qZA(),x.TgZ(4,"code"),x._uU(5,"."),x.qZA(),x._uU(6," (dot) "),x.qZA())}function J(t,e){1&t&&(x._uU(0," Earliest date "),x.TgZ(1,"p",14),x.TgZ(2,"strong"),x._uU(3,"Default:"),x.qZA(),x.TgZ(4,"code"),x._uU(5,"new Date('0001-01-01')"),x.qZA(),x.qZA())}function A(t,e){1&t&&(x._uU(0," Latest date "),x.TgZ(1,"p",14),x.TgZ(2,"strong"),x._uU(3,"Default:"),x.qZA(),x.TgZ(4,"code"),x._uU(5,"new Date('9999-12-31')"),x.qZA(),x.qZA())}function q(t,e){if(1&t){var n=x.EpF();x.TgZ(0,"tui-doc-demo",7),x.YNc(1,V,3,2,"ng-template"),x.qZA(),x.TgZ(2,"tui-doc-documentation"),x.YNc(3,O,1,0,"ng-template",8),x.NdJ("documentationPropertyValueChange",function(t){return x.CHM(n),x.oxw().mode=t})("documentationPropertyValueChange",function(){return x.CHM(n),x.oxw().updateOptions()}),x.YNc(4,b,7,0,"ng-template",9),x.NdJ("documentationPropertyValueChange",function(t){return x.CHM(n),x.oxw().separator=t})("documentationPropertyValueChange",function(){return x.CHM(n),x.oxw().updateOptions()}),x.YNc(5,J,6,0,"ng-template",10),x.NdJ("documentationPropertyValueChange",function(t){return x.CHM(n),x.oxw().minStr=t})("documentationPropertyValueChange",function(){return x.CHM(n),x.oxw().updateDate()}),x.YNc(6,A,6,0,"ng-template",11),x.NdJ("documentationPropertyValueChange",function(t){return x.CHM(n),x.oxw().maxStr=t})("documentationPropertyValueChange",function(){return x.CHM(n),x.oxw().updateDate()}),x.qZA()}if(2&t){var o=x.oxw();x.Q6J("control",o.apiPageControl),x.xp6(3),x.Q6J("documentationPropertyValues",o.modeOptions)("documentationPropertyValue",o.mode),x.xp6(1),x.Q6J("documentationPropertyValues",o.separatorOptions)("documentationPropertyValue",o.separator),x.xp6(1),x.Q6J("documentationPropertyValues",o.minMaxOptions)("documentationPropertyValue",o.minStr),x.xp6(1),x.Q6J("documentationPropertyValues",o.minMaxOptions)("documentationPropertyValue",o.maxStr)}}var N=function(){var e=function(){function e(){a(this,e),this.apiPageControl=new c.NI(""),this.dateLocalization=t({},g.C.MaskitoOptions,i.e(1465).then(i.t.bind(i,81465,17))),this.dateMinMax=t({},g.C.MaskitoOptions,i.e(9899).then(i.t.bind(i,39899,17))),this.modeOptions=["dd/mm/yyyy","mm/dd/yyyy","yyyy/mm/dd","mm/yy","mm/yyyy","yyyy/mm","yyyy"],this.separatorOptions=[".","/","-"],this.minMaxOptions=["0001-01-01","9999-12-31","2000-01-01","2025-05-10"],this.minStr=this.minMaxOptions[0],this.maxStr=this.minMaxOptions[1],this.mode=this.modeOptions[0],this.separator=this.separatorOptions[0],this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.maskitoOptions=(0,h.tr)(this)}return n(e,[{key:"updateDate",value:function(){this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.updateOptions()}},{key:"updateOptions",value:function(){this.maskitoOptions=(0,h.tr)(this)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=x.Xpm({type:e,selectors:[["date-mask-doc"]],decls:3,vars:0,consts:[["header","Date","package","KIT"],["pageTab",""],["id","date-localization","heading","Date localization",3,"content","description"],["dateLocalizationDescription",""],["id","min-max","heading","Min/Max",3,"content","description"],["minMaxDescription",""],["href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date","rel","noreferrer","target","_blank","tuiLink",""],[3,"control"],["documentationPropertyMode","input","documentationPropertyName","mode","documentationPropertyType","MaskitoDateMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","separator","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiTextfieldCustomContent","tuiIconCalendarLarge",1,"input-date",3,"formControl"],["inputmode","numeric","tuiTextfield","",3,"maskito"],[1,"tui-space_bottom-0"]],template:function(t,e){1&t&&(x.TgZ(0,"tui-doc-page",0),x.YNc(1,D,12,4,"ng-template",1),x.YNc(2,q,7,9,"ng-template",1),x.qZA())},directives:[P.qo,P.nj,P.f2,w,v,l.V,P.FU,P.zb,P.B7,f.K3,f.wU,y.B7,c.JJ,c.oH,C.MB,M.F,U.r],styles:[".input-date[_ngcontent-%COMP%]{max-width:25rem}.input-date[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}"],changeDetection:0}),e}(),S=function(){var t=n(function t(){a(this,t)});return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=x.oAB({type:t}),t.\u0275inj=x.cJS({imports:[[u.ez,c.u5,c.UX,d.U5,p.fV,f.Qf,l.j,y.cn,m.Bz.forChild((0,s.Ve)(N))]]}),t}()}}])}();