"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5430],{5430:(ee,h,m)=>{m.r(h),m.d(h,{default:()=>q});var x=m(7270),p=m(8832),M=m(1760),u=m(8844),d=m(3465),C=m(4314),E=m(7355),s=m(6801),r=m(4225);const P=(0,d.lp)({dateMode:"mm/dd/yyyy",timeMode:"HH:MM",dateSeparator:"/"});var e=m(2978),_=m(5014);let V=(()=>{var t;class i{constructor(){this.value="09/20/2020, 15:30",this.filler="mm/dd/yyyy, hh:mm",this.mask=P}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["date-time-mask-doc-example-1"]],standalone:!0,features:[e.aNF],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","@tui.calendar",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfieldLegacy","",3,"maskito"]],template:function(o,a){1&o&&(e.j41(0,"tui-input",0),e.bIt("ngModelChange",function(c){return a.value=c}),e.EFF(1," Localization "),e.nrm(2,"input",1),e.k0s()),2&o&&(e.xc7("max-width",30,"rem"),e.Y8G("tuiTextfieldFiller",a.filler)("ngModel",a.value),e.R7$(2),e.Y8G("maskito",a.mask))},dependencies:[p.YN,p.BC,p.vS,u.u,s.zi,s.mp,s.Ws,_.Bw,r.CN,r.Rd,r.V4],encapsulation:2,changeDetection:0}),i})();const S=(0,d.lp)({dateMode:"dd/mm/yyyy",timeMode:"HH:MM",dateTimeSeparator:"; "});let j=(()=>{var t;class i{constructor(){this.value="05.02.2004; 10:10",this.filler="dd.mm.yyyy; hh:mm",this.mask=S}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["date-time-mask-doc-example-2"]],standalone:!0,features:[e.aNF],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","@tui.calendar",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfieldLegacy","",3,"maskito"]],template:function(o,a){1&o&&(e.j41(0,"tui-input",0),e.bIt("ngModelChange",function(c){return a.value=c}),e.EFF(1," Custom date and time separator "),e.nrm(2,"input",1),e.k0s()),2&o&&(e.xc7("max-width",30,"rem"),e.Y8G("tuiTextfieldFiller",a.filler)("ngModel",a.value),e.R7$(2),e.Y8G("maskito",a.mask))},dependencies:[p.YN,p.BC,p.vS,u.u,s.zi,s.mp,s.Ws,_.Bw,r.CN,r.Rd,r.V4],encapsulation:2,changeDetection:0}),i})();const v=(0,d.lp)({dateMode:"dd/mm/yyyy",timeMode:"HH:MM",dateSeparator:"-",min:new Date(2010,1,15,12,30,0),max:new Date(2020,8,15,18,30,0)});let N=(()=>{var t;class i{constructor(){this.value="09-01-2018,\xa015:30",this.filler="dd-mm-yyyy,\xa0hh:mm",this.mask=v}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["date-time-mask-doc-example-3"]],standalone:!0,features:[e.aNF],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","@tui.calendar",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfieldLegacy","",3,"maskito"]],template:function(o,a){1&o&&(e.j41(0,"tui-input",0),e.bIt("ngModelChange",function(c){return a.value=c}),e.EFF(1," Min-max "),e.nrm(2,"input",1),e.k0s()),2&o&&(e.xc7("max-width",30,"rem"),e.Y8G("tuiTextfieldFiller",a.filler)("ngModel",a.value),e.R7$(2),e.Y8G("maskito",a.mask))},dependencies:[p.YN,p.BC,p.vS,u.u,s.zi,s.mp,s.Ws,_.Bw,r.CN,r.Rd,r.V4],encapsulation:2,changeDetection:0}),i})();const G=(0,d.lp)({dateMode:"dd/mm/yyyy",timeMode:"HH:MM",timeStep:1});let B=(()=>{var t;class i{constructor(){this.value="09.01.2018,\xa015:30",this.filler="dd.mm.yyyy,\xa0hh:mm",this.mask=G}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["date-time-mask-doc-example-4"]],standalone:!0,features:[e.aNF],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","@tui.calendar",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfieldLegacy","",3,"maskito"]],template:function(o,a){1&o&&(e.j41(0,"tui-input",0),e.bIt("ngModelChange",function(c){return a.value=c}),e.EFF(1," Time Stepping "),e.nrm(2,"input",1),e.k0s()),2&o&&(e.xc7("max-width",30,"rem"),e.Y8G("tuiTextfieldFiller",a.filler)("ngModel",a.value),e.R7$(2),e.Y8G("maskito",a.mask))},dependencies:[p.YN,p.BC,p.vS,u.u,s.zi,s.mp,s.Ws,_.Bw,r.CN,r.Rd,r.V4],encapsulation:2,changeDetection:0}),i})();const k=(0,d.lp)({dateMode:"dd/mm/yyyy",timeMode:"HH:MM AA",dateTimeSeparator:", ",dateSeparator:"/"}),O={...k,plugins:[...k.plugins,(0,d.tR)(t=>{t.inputMode=t.selectionStart>=17?"text":"numeric"})]};let R=(()=>{var t;class i{constructor(){this.value="20/09/2020, 03:30\xa0PM",this.filler="mm/dd/yyyy, hh:mm aa",this.mask=O}}return(t=i).\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.VBU({type:t,selectors:[["date-time-mask-doc-example-5"]],standalone:!0,features:[e.aNF],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","@tui.calendar",3,"tuiTextfieldFiller","ngModel","ngModelChange"],["tuiTextfieldLegacy","",3,"maskito"]],template:function(o,a){1&o&&(e.j41(0,"tui-input",0),e.bIt("ngModelChange",function(c){return a.value=c}),e.EFF(1," With 12-hour time format "),e.nrm(2,"input",1),e.k0s()),2&o&&(e.xc7("max-width",30,"rem"),e.Y8G("tuiTextfieldFiller",a.filler)("ngModel",a.value),e.R7$(2),e.Y8G("maskito",a.mask))},dependencies:[p.YN,p.BC,p.vS,u.u,s.zi,s.mp,s.Ws,_.Bw,r.CN,r.Rd,r.V4],encapsulation:2,changeDetection:0}),i})();var D,g=m(2317);function H(t,i){1&t&&(e.EFF(0," Use "),e.j41(1,"code"),e.EFF(2,"dateMode"),e.k0s(),e.EFF(3," , "),e.j41(4,"code"),e.EFF(5,"timeMode"),e.k0s(),e.EFF(6," and "),e.j41(7,"code"),e.EFF(8,"dateSeparator"),e.k0s(),e.EFF(9," parameters to get a mask with a locale specific representation of dates. "))}function $(t,i){1&t&&(e.EFF(0," Use "),e.j41(1,"code"),e.EFF(2,"dateTimeSeparator"),e.k0s(),e.EFF(3," parameter to configure separator between date and time strings. "))}function X(t,i){1&t&&(e.EFF(0," Parameters "),e.j41(1,"code"),e.EFF(2,"min"),e.k0s(),e.EFF(3," and "),e.j41(4,"code"),e.EFF(5,"max"),e.k0s(),e.EFF(6," allow to set the earliest and the latest available dates. They accept native "),e.j41(7,"a",12),e.EFF(8," Date "),e.k0s(),e.EFF(9," . "))}function w(t,i){1&t&&(e.j41(0,"p",13),e.EFF(1," Property "),e.j41(2,"code"),e.EFF(3,"timeStep"),e.k0s(),e.EFF(4," allows you to increment / decrement time segments by pressing "),e.j41(5,"code"),e.EFF(6,"ArrowUp"),e.k0s(),e.EFF(7," / "),e.j41(8,"code"),e.EFF(9,"ArrowDown"),e.k0s(),e.EFF(10," . "),e.k0s(),e.j41(11,"p",14),e.EFF(12," Use "),e.j41(13,"code"),e.EFF(14,"step === 0"),e.k0s(),e.EFF(15," (default value) to disable this feature. "),e.k0s())}function A(t,i){1&t&&(e.EFF(0," Any "),e.j41(1,"code"),e.EFF(2,"timeMode"),e.k0s(),e.EFF(3," ending with "),e.j41(4,"code"),e.EFF(5,"AA"),e.k0s(),e.EFF(6," is 12-hour time format with meridiem part. "))}function z(t,i){if(1&t&&(e.EFF(0," Use "),e.j41(1,"code"),e.EFF(2,"maskitoDateTimeOptionsGenerator"),e.k0s(),e.EFF(3," to create a mask to input both date and time. "),e.j41(4,"tui-doc-example",2),e.DNE(5,H,10,0,"ng-template",null,3,e.C5r),e.nrm(7,"date-time-mask-doc-example-1"),e.k0s(),e.j41(8,"tui-doc-example",4),e.DNE(9,$,4,0,"ng-template",null,5,e.C5r),e.nrm(11,"date-time-mask-doc-example-2"),e.k0s(),e.j41(12,"tui-doc-example",6),e.DNE(13,X,10,0,"ng-template",null,7,e.C5r),e.nrm(15,"date-time-mask-doc-example-3"),e.k0s(),e.j41(16,"tui-doc-example",8),e.DNE(17,w,16,0,"ng-template",null,9,e.C5r),e.nrm(19,"date-time-mask-doc-example-4"),e.k0s(),e.j41(20,"tui-doc-example",10),e.DNE(21,A,7,0,"ng-template",null,11,e.C5r),e.nrm(23,"date-time-mask-doc-example-5"),e.k0s()),2&t){const n=e.sdS(6),o=e.sdS(10),a=e.sdS(14),l=e.sdS(18),c=e.sdS(22),T=e.XpG();e.R7$(4),e.Y8G("content",T.dateTimeLocalizationExample)("description",n),e.R7$(4),e.Y8G("content",T.dateTimeSeparatorExample)("description",o),e.R7$(4),e.Y8G("content",T.dateTimeMinMaxExample)("description",a),e.R7$(4),e.Y8G("content",T.dateTimeTimeStepExample)("description",l),e.R7$(4),e.Y8G("content",T.amPmExample)("description",c)}}function I(t,i){if(1&t&&(e.j41(0,"tui-input",23),e.EFF(1," Enter date and time "),e.nrm(2,"input",24),e.k0s()),2&t){const n=e.XpG(2);e.Y8G("formControl",n.apiPageControl)("tuiTextfieldFiller",n.getPlaceholder(n.dateMode,n.timeMode,n.dateSeparator,n.dateTimeSeparator)),e.R7$(2),e.Y8G("maskito",n.maskitoOptions)}}function L(t,i){1&t&&e.EFF(0," Date format mode ")}function U(t,i){1&t&&e.EFF(0," Time format mode ")}function b(t,i){1&t&&(e.EFF(0," Date separator "),e.j41(1,"p")(2,"strong"),e.EFF(3,"Default:"),e.k0s(),e.j41(4,"code"),e.EFF(5,"."),e.k0s(),e.EFF(6," (dot). "),e.k0s())}function W(t,i){1&t&&(e.EFF(0," Separator between date and time "),e.j41(1,"p")(2,"strong"),e.EFF(3,"Default:"),e.k0s(),e.j41(4,"code"),e.EFF(5,",\xa0"),e.k0s(),e.EFF(6," (comma and space) "),e.k0s())}function J(t,i){1&t&&(e.EFF(0," The value by which the keyboard arrows increment/decrement time segments "),e.j41(1,"p")(2,"strong"),e.EFF(3,"Default:"),e.k0s(),e.j41(4,"code"),e.EFF(5,"0"),e.k0s(),e.EFF(6," (disable stepping) "),e.k0s())}function K(t,i){1&t&&e.EFF(0," Earliest date ")}function Q(t,i){1&t&&e.EFF(0," Latest date ")}function Z(t,i){if(1&t){const n=e.RV6();e.j41(0,"tui-doc-demo",15),e.DNE(1,I,3,3,"ng-template"),e.k0s(),e.j41(2,"tui-doc-documentation"),e.DNE(3,L,1,0,"ng-template",16),e.bIt("documentationPropertyValueChange",function(a){e.eBV(n);const l=e.XpG();return e.Njj(l.dateMode=a)})("documentationPropertyValueChange",function(){e.eBV(n);const a=e.XpG();return e.Njj(a.updateOptions())}),e.DNE(4,U,1,0,"ng-template",17),e.bIt("documentationPropertyValueChange",function(a){e.eBV(n);const l=e.XpG();return e.Njj(l.timeMode=a)})("documentationPropertyValueChange",function(){e.eBV(n);const a=e.XpG();return e.Njj(a.updateOptions())}),e.DNE(5,b,7,0,"ng-template",18),e.bIt("documentationPropertyValueChange",function(a){e.eBV(n);const l=e.XpG();return e.Njj(l.dateSeparator=a)})("documentationPropertyValueChange",function(){e.eBV(n);const a=e.XpG();return e.Njj(a.updateOptions())}),e.DNE(6,W,7,0,"ng-template",19),e.bIt("documentationPropertyValueChange",function(a){e.eBV(n);const l=e.XpG();return e.Njj(l.dateTimeSeparator=a)})("documentationPropertyValueChange",function(){e.eBV(n);const a=e.XpG();return e.Njj(a.updateOptions())}),e.DNE(7,J,7,0,"ng-template",20),e.bIt("documentationPropertyValueChange",function(a){e.eBV(n);const l=e.XpG();return e.Njj(l.timeStep=a)})("documentationPropertyValueChange",function(){e.eBV(n);const a=e.XpG();return e.Njj(a.updateOptions())}),e.DNE(8,K,1,0,"ng-template",21),e.bIt("documentationPropertyValueChange",function(a){e.eBV(n);const l=e.XpG();return e.Njj(l.minStr=a)})("documentationPropertyValueChange",function(){e.eBV(n);const a=e.XpG();return e.Njj(a.updateDate())}),e.DNE(9,Q,1,0,"ng-template",22),e.bIt("documentationPropertyValueChange",function(a){e.eBV(n);const l=e.XpG();return e.Njj(l.maxStr=a)})("documentationPropertyValueChange",function(){e.eBV(n);const a=e.XpG();return e.Njj(a.updateDate())}),e.k0s()}if(2&t){const n=e.XpG();e.Y8G("control",n.apiPageControl),e.R7$(3),e.Y8G("documentationPropertyValues",n.dateModeOptions)("documentationPropertyValue",n.dateMode),e.R7$(1),e.Y8G("documentationPropertyValues",n.timeModeOptions)("documentationPropertyValue",n.timeMode),e.R7$(1),e.Y8G("documentationPropertyValue",n.dateSeparator),e.R7$(1),e.Y8G("documentationPropertyValue",n.dateTimeSeparator),e.R7$(1),e.Y8G("documentationPropertyValue",n.timeStep),e.R7$(1),e.Y8G("documentationPropertyValues",n.minMaxOptions)("documentationPropertyValue",n.minStr),e.R7$(1),e.Y8G("documentationPropertyValues",n.minMaxOptions)("documentationPropertyValue",n.maxStr)}}class y{constructor(){this.dateTimeLocalizationExample={[M.w.MaskitoOptions]:m.e(7948).then(m.t.bind(m,7948,17))},this.dateTimeSeparatorExample={[M.w.MaskitoOptions]:m.e(9613).then(m.t.bind(m,9613,17))},this.dateTimeMinMaxExample={[M.w.MaskitoOptions]:m.e(3029).then(m.t.bind(m,3029,17))},this.dateTimeTimeStepExample={[M.w.MaskitoOptions]:m.e(7545).then(m.t.bind(m,7545,17))},this.amPmExample={[M.w.MaskitoOptions]:m.e(6080).then(m.t.bind(m,6080,17))},this.apiPageControl=new p.MJ(""),this.dateModeOptions=["dd/mm/yyyy","mm/dd/yyyy","yyyy/mm/dd"],this.timeModeOptions=["HH:MM","HH:MM AA","HH:MM:SS","HH:MM:SS AA","HH:MM:SS.MSS","HH:MM:SS.MSS AA"],this.minMaxOptions=["0001-01-01T00:00:00","9999-12-31T23:59:59","2000-01-01T12:30","2025-05-10T18:30"],this.minStr=this.minMaxOptions[0],this.maxStr=this.minMaxOptions[1],this.dateMode=this.dateModeOptions[0],this.timeMode=this.timeModeOptions[0],this.dateTimeSeparator=", ",this.dateSeparator=".",this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.timeStep=0,this.maskitoOptions=(0,d.lp)(this)}getPlaceholder(i,n,o,a){return`${i.replaceAll("/",o)}${a}${n}`}updateOptions(){this.maskitoOptions=(0,d.lp)(this)}updateDate(){this.min=new Date(this.minStr),this.max=new Date(this.maxStr),this.updateOptions()}}(D=y).\u0275fac=function(i){return new(i||D)},D.\u0275cmp=e.VBU({type:D,selectors:[["date-time-mask-doc"]],standalone:!0,features:[e.aNF],decls:3,vars:0,consts:[["header","DateTime","package","KIT"],["pageTab",""],["id","localization","heading","Localization",3,"content","description"],["localizationDescription",""],["id","date-time-separator","heading","Custom separator between date and time",3,"content","description"],["dateTimeSeparatorDescription",""],["id","min-max","heading","Min and max",3,"content","description"],["minMaxDescription",""],["id","time-step","heading","Time segments stepping via arrows",3,"content","description"],["timeStepDescription",""],["id","am-pm","heading","AM / PM",3,"content","description"],["amPmDescription",""],["href","https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date","rel","noreferrer","target","_blank","tuiLink",""],[1,"tui-space_top-0","tui-space_bottom-1"],[1,"tui-space_top-0"],[3,"control"],["documentationPropertyMode","input","documentationPropertyName","dateMode","documentationPropertyType","MaskitoDateMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","timeMode","documentationPropertyType","MaskitoTimeMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","dateSeparator","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","dateTimeSeparator","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","timeStep","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","Date",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["tuiTextfieldCustomContent","@tui.calendar",3,"formControl","tuiTextfieldFiller"],["inputmode","numeric","tuiTextfieldLegacy","",3,"maskito"]],template:function(i,n){1&i&&(e.j41(0,"tui-doc-page",0),e.DNE(1,z,24,10,"ng-template",1),e.DNE(2,Z,10,12,"ng-template",1),e.k0s())},dependencies:[V,j,N,B,R,u.u,p.X1,p.BC,p.l_,g.aD,g.FS,g.FC,g.df,g.e3,g.ic,s.zi,s.mp,s.Ws,_.Bw,E.Jc,r.CN,r.Rd,r.V4],encapsulation:2,changeDetection:0}),(0,x.Cg)([C.PE],y.prototype,"getPlaceholder",null);const q=y}}]);