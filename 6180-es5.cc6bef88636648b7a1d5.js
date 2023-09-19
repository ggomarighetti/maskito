!function(){"use strict";function e(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,a(o.key),o)}}function n(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[6180],{70997:function(e,t,a){a.d(t,{fV:function(){return d}});var i,r=a(74788),u=a(41823),d=((i=n(function e(){o(this,e)})).\u0275fac=function(e){return new(e||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[u.JF,u.mG,u.Lx,u.Lq,u.u4]}),i)},76180:function(t,a,i){i.r(a),i.d(a,{DateRangeMaskDocModule:function(){return X}});var r,u=i(12057),d=i(87862),m=i(86561),c=i(52494),l=i(70997),p=i(44427),s=i(90022),g=i(82847),y=i(79588),f=i(21673),h=i(97582),x=i(14707),P=i(64916),C=i(44358),T=i(74788),M=i(41823),U=(0,P.n9)({mode:"mm/dd/yyyy",dateSeparator:"/"}),Z=i(94853),k=i(49510),v=i(47258),w=((r=function(){function e(){o(this,e),this.usDateFormatter=new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}),this.value="09/20/2020\xa0\u2013\xa002/06/2023",this.filler="mm/dd/yyyy\xa0\u2013\xa0mm/dd/yyyy",this.mask=U}return n(e,[{key:"hint",get:function(){var e=this;return this.value.length<this.filler.length?"Complete the date range!":this.value.split("\xa0\u2013\xa0").map(function(t){return e.usDateFormatter.format(new Date(t))}).join("\xa0\u2013\xa0")}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=T.Xpm({type:r,selectors:[["date-range-mask-doc-example-1"]],decls:3,vars:6,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiHintContent","tuiTextfieldFiller","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(e,t){1&e&&(T.TgZ(0,"tui-input",0),T.NdJ("ngModelChange",function(e){return t.value=e}),T._uU(1," US format "),T._UZ(2,"input",1),T.qZA()),2&e&&(T.Udp("max-width",30,"rem"),T.Q6J("tuiHintContent",t.hint)("tuiTextfieldFiller",t.filler)("ngModel",t.value),T.xp6(2),T.Q6J("maskito",t.mask))},directives:[f.K3,f.wU,y.B7,s.bZ,y.kD,d.JJ,d.On,Z.MB,k.F,v.r],encapsulation:2,changeDetection:0}),r),_=(0,P.n9)({mode:"dd/mm/yyyy",min:new Date("1711-11-19"),max:new Date("1765-04-15")}),V=function(){var e=n(function e(){o(this,e),this.value="19.11.1711\xa0\u2013\xa015.04.1765",this.filler="dd.mm.yyyy\xa0\u2013\xa0dd.mm.yyyy",this.mask=_});return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=T.Xpm({type:e,selectors:[["date-range-mask-doc-example-2"]],decls:2,vars:6,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","tuiTextfieldLabelOutside","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(e,t){1&e&&(T.TgZ(0,"tui-input",0),T.NdJ("ngModelChange",function(e){return t.value=e}),T._UZ(1,"input",1),T.qZA()),2&e&&(T.Udp("max-width",30,"rem"),T.Q6J("tuiTextfieldFiller",t.filler)("tuiTextfieldLabelOutside",!0)("ngModel",t.value),T.xp6(1),T.Q6J("maskito",t.mask))},directives:[f.K3,f.wU,y.B7,y.kD,y.xT,d.JJ,d.On,Z.MB,k.F,v.r],encapsulation:2,changeDetection:0}),e}(),J=(0,P.n9)({mode:"dd/mm/yyyy",minLength:{day:3},maxLength:{month:1}}),D=function(){var e=n(function e(){o(this,e),this.value="01.01.2023\xa0\u2013\xa005.01.2023",this.filler="dd.mm.yyyy\xa0\u2013\xa0dd.mm.yyyy",this.mask=J,this.hint="The right date must be at least 3 days after the left one.\nAlso, the difference between the dates must not exceed 1 month."});return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=T.Xpm({type:e,selectors:[["date-range-mask-doc-example-3"]],decls:2,vars:7,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiHintContent","tuiTextfieldFiller","tuiTextfieldLabelOutside","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(e,t){1&e&&(T.TgZ(0,"tui-input",0),T.NdJ("ngModelChange",function(e){return t.value=e}),T._UZ(1,"input",1),T.qZA()),2&e&&(T.Udp("max-width",30,"rem"),T.Q6J("tuiHintContent",t.hint)("tuiTextfieldFiller",t.filler)("tuiTextfieldLabelOutside",!0)("ngModel",t.value),T.xp6(1),T.Q6J("maskito",t.mask))},directives:[f.K3,f.wU,y.B7,s.bZ,y.kD,y.xT,d.JJ,d.On,Z.MB,k.F,v.r],encapsulation:2,changeDetection:0}),e}(),O=(0,P.n9)({mode:"dd/mm/yyyy",rangeSeparator:" ~ "}),b=function(){var e=n(function e(){o(this,e),this.value="01.01.2023 ~ 05.01.2023",this.filler="dd.mm.yyyy ~ dd.mm.yyyy",this.mask=O});return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=T.Xpm({type:e,selectors:[["date-range-mask-doc-example-4"]],decls:2,vars:6,consts:[["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"tuiTextfieldFiller","tuiTextfieldLabelOutside","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(e,t){1&e&&(T.TgZ(0,"tui-input",0),T.NdJ("ngModelChange",function(e){return t.value=e}),T._UZ(1,"input",1),T.qZA()),2&e&&(T.Udp("max-width",30,"rem"),T.Q6J("tuiTextfieldFiller",t.filler)("tuiTextfieldLabelOutside",!0)("ngModel",t.value),T.xp6(1),T.Q6J("maskito",t.mask))},directives:[f.K3,f.wU,y.B7,y.kD,y.xT,d.JJ,d.On,Z.MB,k.F,v.r],encapsulation:2,changeDetection:0}),e}();function A(e,t){1&e&&(T._uU(0," Use "),T.TgZ(1,"code"),T._uU(2,"mode"),T.qZA(),T._uU(3," and "),T.TgZ(4,"code"),T._uU(5,"separator"),T.qZA(),T._uU(6," parameters to get a mask with a locale specific representation of dates. "))}function S(e,t){1&e&&(T._uU(0," Parameters "),T.TgZ(1,"code"),T._uU(2,"min"),T.qZA(),T._uU(3," and "),T.TgZ(4,"code"),T._uU(5,"max"),T.qZA(),T._uU(6," allow you to set the earliest and the latest available dates. They accept native "),T.TgZ(7,"a",10),T._uU(8," Date "),T.qZA(),T._uU(9," . "))}function L(e,t){1&e&&(T._uU(0," Use "),T.TgZ(1,"code"),T._uU(2,"minLength"),T.qZA(),T._uU(3," and "),T.TgZ(4,"code"),T._uU(5,"maxLength"),T.qZA(),T._uU(6," parameters to set minimal and maximal length of the date range. "))}function N(e,t){1&e&&(T._uU(0," Use "),T.TgZ(1,"code"),T._uU(2,"rangeSeparator"),T.qZA(),T._uU(3," parameter to customize separator between dates of the date range. "))}function q(e,t){if(1&e&&(T._uU(0," Use "),T.TgZ(1,"code"),T._uU(2,"maskitoDateRangeOptionsGenerator"),T.qZA(),T._uU(3," to create a mask to input a range of dates. "),T.TgZ(4,"tui-doc-example",2),T.YNc(5,A,7,0,"ng-template",null,3,T.W1O),T._UZ(7,"date-range-mask-doc-example-1"),T.qZA(),T.TgZ(8,"tui-doc-example",4),T.YNc(9,S,10,0,"ng-template",null,5,T.W1O),T._UZ(11,"date-range-mask-doc-example-2"),T.qZA(),T.TgZ(12,"tui-doc-example",6),T.YNc(13,L,7,0,"ng-template",null,7,T.W1O),T._UZ(15,"date-range-mask-doc-example-3"),T.qZA(),T.TgZ(16,"tui-doc-example",8),T.YNc(17,N,4,0,"ng-template",null,9,T.W1O),T._UZ(19,"date-range-mask-doc-example-4"),T.qZA()),2&e){var n=T.MAs(6),a=T.MAs(10),o=T.MAs(14),i=T.MAs(18),r=T.oxw();T.xp6(4),T.Q6J("content",r.dateLocalizationExample1)("description",n),T.xp6(4),T.Q6J("content",r.minMaxExample2)("description",a),T.xp6(4),T.Q6J("content",r.minMaxLengthExample3)("description",o),T.xp6(4),T.Q6J("content",r.customRangeExample4)("description",i)}}function Q(e,t){if(1&e&&(T.TgZ(0,"tui-input",20),T._uU(1," Enter dates "),T._UZ(2,"input",21),T.qZA()),2&e){var n=T.oxw(2);T.Q6J("formControl",n.apiPageControl)("tuiTextfieldFiller",n.getPlaceholder(n.mode,n.dateSeparator,n.rangeSeparator)),T.xp6(2),T.Q6J("maskito",n.maskitoOptions)}}function F(e,t){1&e&&T._uU(0," Date format mode ")}function H(e,t){1&e&&(T._uU(0," Separator between date segments (days, months and years). "),T.TgZ(1,"p"),T.TgZ(2,"strong"),T._uU(3,"Default:"),T.qZA(),T.TgZ(4,"code"),T._uU(5,"."),T.qZA(),T._uU(6," (dot). "),T.qZA())}function Y(e,t){1&e&&(T._uU(0," Separator between dates of the date range. "),T.TgZ(1,"p"),T.TgZ(2,"strong"),T._uU(3,"Default:"),T.qZA(),T.TgZ(4,"code"),T._uU(5,"\xa0\u2013\xa0"),T.qZA(),T.qZA())}function B(e,t){1&e&&T._uU(0," Earliest date ")}function E(e,t){1&e&&T._uU(0," Latest date ")}function j(e,t){1&e&&T._uU(0," Minimal length of the range ")}function z(e,t){1&e&&T._uU(0," Maximal length of the range ")}function I(e,t){1&e&&(T._uU(0," Use "),T.TgZ(1,"code"),T._uU(2,"dateSeparator"),T.qZA(),T._uU(3," instead. "),T.TgZ(4,"p"),T.TgZ(5,"strong"),T._uU(6,"Default:"),T.qZA(),T.TgZ(7,"code"),T._uU(8,"."),T.qZA(),T._uU(9," (dot). "),T.qZA())}function R(e,t){if(1&e){var n=T.EpF();T.TgZ(0,"tui-doc-demo",11),T.YNc(1,Q,3,3,"ng-template"),T.qZA(),T.TgZ(2,"tui-doc-documentation"),T.YNc(3,F,1,0,"ng-template",12),T.NdJ("documentationPropertyValueChange",function(e){return T.CHM(n),T.oxw().mode=e})("documentationPropertyValueChange",function(){return T.CHM(n),T.oxw().updateOptions()}),T.YNc(4,H,7,0,"ng-template",13),T.NdJ("documentationPropertyValueChange",function(e){return T.CHM(n),T.oxw().dateSeparator=e})("documentationPropertyValueChange",function(){return T.CHM(n),T.oxw().updateOptions()}),T.YNc(5,Y,6,0,"ng-template",14),T.NdJ("documentationPropertyValueChange",function(e){return T.CHM(n),T.oxw().rangeSeparator=e})("documentationPropertyValueChange",function(){return T.CHM(n),T.oxw().updateOptions()}),T.YNc(6,B,1,0,"ng-template",15),T.NdJ("documentationPropertyValueChange",function(e){return T.CHM(n),T.oxw().minStr=e})("documentationPropertyValueChange",function(){return T.CHM(n),T.oxw().updateDate()}),T.YNc(7,E,1,0,"ng-template",16),T.NdJ("documentationPropertyValueChange",function(e){return T.CHM(n),T.oxw().maxStr=e})("documentationPropertyValueChange",function(){return T.CHM(n),T.oxw().updateDate()}),T.YNc(8,j,1,0,"ng-template",17),T.NdJ("documentationPropertyValueChange",function(e){return T.CHM(n),T.oxw().minLength=e})("documentationPropertyValueChange",function(){return T.CHM(n),T.oxw().updateOptions()}),T.YNc(9,z,1,0,"ng-template",18),T.NdJ("documentationPropertyValueChange",function(e){return T.CHM(n),T.oxw().maxLength=e})("documentationPropertyValueChange",function(){return T.CHM(n),T.oxw().updateOptions()}),T.YNc(10,I,10,0,"ng-template",19),T.qZA()}if(2&e){var a=T.oxw();T.Q6J("control",a.apiPageControl),T.xp6(3),T.Q6J("documentationPropertyValues",a.modeOptions)("documentationPropertyValue",a.mode),T.xp6(1),T.Q6J("documentationPropertyValue",a.dateSeparator),T.xp6(1),T.Q6J("documentationPropertyValue",a.rangeSeparator),T.xp6(1),T.Q6J("documentationPropertyValues",a.minMaxOptions)("documentationPropertyValue",a.minStr),T.xp6(1),T.Q6J("documentationPropertyValues",a.minMaxOptions)("documentationPropertyValue",a.maxStr),T.xp6(1),T.Q6J("documentationPropertyValues",a.minLengthOptions)("documentationPropertyValue",a.minLength),T.xp6(1),T.Q6J("documentationPropertyValues",a.maxLengthOptions)("documentationPropertyValue",a.maxLength),T.xp6(1),T.Q6J("documentationPropertyDeprecated",!0)}}var K=function(){function t(){o(this,t),this.dateLocalizationExample1=e({},x.C.MaskitoOptions,i.e(2049).then(i.t.bind(i,82049,17))),this.minMaxExample2=e({},x.C.MaskitoOptions,i.e(6901).then(i.t.bind(i,16901,17))),this.minMaxLengthExample3=e({},x.C.MaskitoOptions,i.e(6880).then(i.t.bind(i,6880,17))),this.customRangeExample4=e({},x.C.MaskitoOptions,i.e(6990).then(i.t.bind(i,46990,17))),this.apiPageControl=new d.NI(""),this.modeOptions=["dd/mm/yyyy","mm/dd/yyyy","yyyy/mm/dd","mm/yy","mm/yyyy","yyyy/mm","yyyy"],this.minMaxOptions=["0001-01-01","9999-12-31","2000-01-01","2025-05-10"],this.minLengthOptions=[{day:3},{day:15}],this.maxLengthOptions=[{day:5},{month:1},{year:1}],this.mode=this.modeOptions[0],this.separator=".",this.minStr=this.minMaxOptions[0],this.maxStr=this.minMaxOptions[1],this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.minLength={},this.maxLength={},this.dateSeparator=".",this.rangeSeparator="\xa0\u2013\xa0",this.maskitoOptions=(0,P.n9)(this)}return n(t,[{key:"getPlaceholder",value:function(e,t,n){var a=e.replace(/\//g,t);return"".concat(a).concat(n).concat(a)}},{key:"updateOptions",value:function(){this.maskitoOptions=(0,P.n9)(this)}},{key:"updateDate",value:function(){this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.updateOptions()}}]),t}();K.\u0275fac=function(e){return new(e||K)},K.\u0275cmp=T.Xpm({type:K,selectors:[["date-range-mask-doc"]],decls:3,vars:0,consts:[["header","DateRange","package","KIT"],["pageTab",""],["id","date-localization","heading","Date localization",3,"content","description"],["dateLocalizationDescription",""],["id","min-max","heading","Min and max dates",3,"content","description"],["minMaxDescription",""],["id","min-max-length","heading","Min and max length of range",3,"content","description"],["minMaxLengthDescription",""],["id","custom-range-separator","heading","Custom range separator",3,"content","description"],["customRangeSeparatorDescription",""],["href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date","rel","noreferrer","target","_blank","tuiLink",""],[3,"control"],["documentationPropertyMode","input","documentationPropertyName","mode","documentationPropertyType","MaskitoDateMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","dateSeparator","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","rangeSeparator","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","minLength","documentationPropertyType","MaskitoDateSegments<number>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","maxLength","documentationPropertyType","MaskitoDateSegments<number>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","separator",3,"documentationPropertyDeprecated"],["tuiTextfieldCustomContent","tuiIconCalendarLarge",3,"formControl","tuiTextfieldFiller"],["inputmode","numeric","tuiTextfield","",3,"maskito"]],template:function(e,t){1&e&&(T.TgZ(0,"tui-doc-page",0),T.YNc(1,q,20,8,"ng-template",1),T.YNc(2,R,11,14,"ng-template",1),T.qZA())},directives:[M.qo,M.nj,M.f2,w,V,D,b,g.V,M.FU,M.zb,M.B7,f.K3,f.wU,y.B7,d.JJ,d.oH,y.kD,Z.MB,k.F,v.r],encapsulation:2,changeDetection:0}),(0,h.gn)([C.UM],K.prototype,"getPlaceholder",null);var X=function(){var e=n(function e(){o(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=T.oAB({type:e}),e.\u0275inj=T.cJS({imports:[[u.ez,d.u5,d.UX,c.U5,l.fV,s.go,f.Qf,g.j,y.cn,m.Bz.forChild((0,p.Ve)(K))]]}),e}()}}])}();