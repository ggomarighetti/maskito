!function(){"use strict";function e(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,i,r,u,a=[],m=!0,c=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;m=!1}else for(;!(m=(o=r.call(n)).done)&&(a.push(o.value),a.length!==t);m=!0);}catch(e){c=!0,i=e}finally{try{if(!m&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(c)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function r(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[2139],{70997:function(e,t,n){n.d(t,{fV:function(){return m}});var o,r=n(74788),a=n(41823),m=((o=i(function e(){u(this,e)})).\u0275fac=function(e){return new(e||o)},o.\u0275mod=r.oAB({type:o}),o.\u0275inj=r.cJS({imports:[a.JF,a.mG,a.Lx,a.Lq,a.u4]}),o)},42139:function(n,o,r){r.r(o),r.d(o,{TimeMaskDocModule:function(){return J}});var a,m=r(12057),c=r(87862),s=r(86561),l=r(52494),p=r(70997),d=r(44427),f=r(79588),g=r(21673),h=r(14707),y=r(64916),M=r(74788),x=r(41823),v=(0,y.rC)({mode:"HH:MM:SS"}),T=r(94853),Z=r(49510),C=r(47258),b=((a=i(function e(){u(this,e),this.mask=v,this.value="23:59:59"})).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=M.Xpm({type:a,selectors:[["time-mask-doc-example-1"]],decls:3,vars:4,consts:[["tuiTextfieldCustomContent","tuiIconClockLarge","tuiTextfieldFiller","hh:mm:ss",3,"ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito"]],template:function(e,t){1&e&&(M.TgZ(0,"tui-input",0),M.NdJ("ngModelChange",function(e){return t.value=e}),M._uU(1," HH:MM:SS "),M._UZ(2,"input",1),M.qZA()),2&e&&(M.Udp("max-width",20,"rem"),M.Q6J("ngModel",t.value),M.xp6(2),M.Q6J("maskito",t.mask))},directives:[g.K3,g.wU,f.B7,f.kD,c.JJ,c.On,T.MB,Z.F,C.r],encapsulation:2,changeDetection:0}),a),k=(0,y.rC)({mode:"HH:MM",timeSegmentMaxValues:{hours:12}}),U=function(){var e=function(){function e(){u(this,e),this.value="11:59",this.mask=k}return i(e,[{key:"onBlur",value:function(){var e=t(this.value.split(":"),2),n=e[0],o=e[1],i=void 0===o?"":o;this.value=[n,i].map(function(e){return e.padEnd(2,"0")}).join(":")}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=M.Xpm({type:e,selectors:[["time-mask-doc-example-2"]],decls:2,vars:5,consts:[["tuiTextfieldCustomContent","tuiIconClockLarge","tuiTextfieldFiller","hh:mm",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfield","",3,"maskito","blur"]],template:function(e,t){1&e&&(M.TgZ(0,"tui-input",0),M.NdJ("ngModelChange",function(e){return t.value=e}),M.TgZ(1,"input",1),M.NdJ("blur",function(){return t.onBlur()}),M.qZA(),M.qZA()),2&e&&(M.Udp("max-width",20,"rem"),M.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",t.value),M.xp6(1),M.Q6J("maskito",t.mask))},directives:[g.K3,g.wU,f.B7,f.kD,f.xT,c.JJ,c.On,T.MB,Z.F,C.r],encapsulation:2,changeDetection:0}),e}();function w(e,t){1&e&&(M.TgZ(0,"p",6),M._uU(1," Use "),M.TgZ(2,"code"),M._uU(3,"mode"),M.qZA(),M._uU(4," property to set time format. "),M.qZA(),M.TgZ(5,"p",7),M.TgZ(6,"strong"),M._uU(7,"Available options"),M.qZA(),M._uU(8," : "),M.TgZ(9,"code"),M._uU(10,"HH:MM"),M.qZA(),M._uU(11," , "),M.TgZ(12,"code"),M._uU(13,"HH:MM:SS"),M.qZA(),M._uU(14," or "),M.TgZ(15,"code"),M._uU(16,"HH:MM:SS.MSS"),M.qZA(),M._uU(17," . "),M.qZA())}function S(e,t){1&e&&(M.TgZ(0,"p",6),M._uU(1," Property "),M.TgZ(2,"code"),M._uU(3,"timeSegmentMaxValues"),M.qZA(),M._uU(4," allows you to set max value for every time segment. "),M.qZA(),M.TgZ(5,"p",7),M.TgZ(6,"strong"),M._uU(7,"Time segments"),M.qZA(),M._uU(8," are units of the time which form time string. For example, "),M.TgZ(9,"code"),M._uU(10,"HH:MM"),M.qZA(),M._uU(11," consists of two time segments: hours and minutes. "),M.qZA())}function _(e,t){if(1&e&&(M._uU(0," Use "),M.TgZ(1,"code"),M._uU(2,"maskitoTimeOptionsGenerator"),M.qZA(),M._uU(3," to create a mask for time input. "),M.TgZ(4,"tui-doc-example",2),M.YNc(5,w,18,0,"ng-template",null,3,M.W1O),M._UZ(7,"time-mask-doc-example-1"),M.qZA(),M.TgZ(8,"tui-doc-example",4),M.YNc(9,S,12,0,"ng-template",null,5,M.W1O),M._UZ(11,"time-mask-doc-example-2"),M.qZA()),2&e){var n=M.MAs(6),o=M.MAs(10),i=M.oxw();M.xp6(4),M.Q6J("content",i.modeExample1)("description",n),M.xp6(4),M.Q6J("content",i.modeExample2)("description",o)}}function A(e,t){if(1&e&&(M.TgZ(0,"tui-input",11),M._uU(1," Enter time "),M._UZ(2,"input",12),M.qZA()),2&e){var n=M.oxw(2);M.Q6J("formControl",n.apiPageControl)("tuiTextfieldFiller",n.mode.toLowerCase()),M.xp6(2),M.Q6J("maskito",n.maskitoOptions)}}function P(e,t){1&e&&M._uU(0," Time format mode ")}function O(e,t){1&e&&M._uU(0," Max value for every time segment ")}function H(e,t){if(1&e){var n=M.EpF();M.TgZ(0,"tui-doc-demo",8),M.YNc(1,A,3,3,"ng-template"),M.qZA(),M.TgZ(2,"tui-doc-documentation"),M.YNc(3,P,1,0,"ng-template",9),M.NdJ("documentationPropertyValueChange",function(e){return M.CHM(n),M.oxw().mode=e})("documentationPropertyValueChange",function(){return M.CHM(n),M.oxw().updateOptions()}),M.YNc(4,O,1,0,"ng-template",10),M.NdJ("documentationPropertyValueChange",function(e){return M.CHM(n),M.oxw().timeSegmentMaxValues=e})("documentationPropertyValueChange",function(){return M.CHM(n),M.oxw().updateOptions()}),M.qZA()}if(2&e){var o=M.oxw();M.Q6J("control",o.apiPageControl),M.xp6(3),M.Q6J("documentationPropertyValues",o.modeOptions)("documentationPropertyValue",o.mode),M.xp6(1),M.Q6J("documentationPropertyValues",o.timeSegmentMaxValuesOptions)("documentationPropertyValue",o.timeSegmentMaxValues)}}var V=function(){var t=function(){function t(){u(this,t),this.modeExample1=e({},h.C.MaskitoOptions,r.e(2921).then(r.t.bind(r,52921,17))),this.modeExample2=e({},h.C.MaskitoOptions,r.e(8729).then(r.t.bind(r,78729,17))),this.apiPageControl=new c.NI(""),this.modeOptions=["HH:MM","HH:MM:SS","HH:MM:SS.MSS","HH"],this.timeSegmentMaxValuesOptions=[{hours:23,minutes:59,seconds:59,milliseconds:999},{hours:11}],this.mode=this.modeOptions[0],this.timeSegmentMaxValues=this.timeSegmentMaxValuesOptions[0],this.maskitoOptions=(0,y.rC)(this)}return i(t,[{key:"updateOptions",value:function(){this.maskitoOptions=(0,y.rC)(this)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=M.Xpm({type:t,selectors:[["time-mask-doc"]],decls:3,vars:0,consts:[["header","Time","package","KIT"],["pageTab",""],["id","mode","heading","Mode",3,"content","description"],["modeDescription",""],["id","twelve-hours","heading","12-hours format",3,"content","description"],["timeSegmentMaxValuesDescription",""],[1,"tui-space_top-0","tui-space_bottom-1"],[1,"tui-space_top-0"],[3,"control"],["documentationPropertyMode","input","documentationPropertyName","mode","documentationPropertyType","MaskitoTimeMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","timeSegmentMaxValues","documentationPropertyType","MaskitoTimeSegments<number>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiTextfieldCustomContent","tuiIconClockLarge",1,"input-time",3,"formControl","tuiTextfieldFiller"],["inputmode","numeric","tuiTextfield","",3,"maskito"]],template:function(e,t){1&e&&(M.TgZ(0,"tui-doc-page",0),M.YNc(1,_,12,4,"ng-template",1),M.YNc(2,H,5,5,"ng-template",1),M.qZA())},directives:[x.qo,x.nj,x.f2,b,U,x.FU,x.zb,x.B7,g.K3,g.wU,f.B7,c.JJ,c.oH,f.kD,T.MB,Z.F,C.r],styles:[".input-time[_ngcontent-%COMP%]{max-width:25rem}.input-time[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}"],changeDetection:0}),t}(),J=function(){var e=i(function e(){u(this,e)});return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=M.oAB({type:e}),e.\u0275inj=M.cJS({imports:[[m.ez,c.u5,c.UX,l.U5,p.fV,g.Qf,f.cn,s.Bz.forChild((0,d.Ve)(V))]]}),e}()}}])}();