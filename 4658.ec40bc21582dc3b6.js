"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4658],{4658:(gt,x,s)=>{s.r(x),s.d(x,{default:()=>ct});var m=s(1760),D=s(7355),w=s(9738),l=s(8832),g=s(8844),t=s(2978),h=s(9131),P=s(1028),f=s(9702),d=s(5014),u=s(4225),y=s(1623),k=s(8448),T=s(965),M=s(3527),O=s(4314),v=s(6610),F=s(5173),S=s(8395),E=s(4712),G=s(4822);function R(e,a){if(1&e){const i=t.RV6();t.j41(0,"tui-icon",7),t.bIt("click",function(){t.eBV(i);const o=t.XpG(3);return t.Njj(o.togglePasswordVisibility())})("mousedown.silent.prevent",function(){return 0})("mouseup.silent.prevent",function(){return 0}),t.nI1(1,"async"),t.k0s()}if(2&e){const i=a.polymorpheusOutlet,n=t.XpG().ngIf,o=t.sdS(3),p=t.XpG(2);t.AVh("t-icon_small","s"===p.size),t.Y8G("icon",i.toString())("tuiHint",n[0]&&n[1]&&o)("tuiHintAppearance",t.bMT(1,6,p.computedAppearance$)||"")("tuiHintDirection",(null==p.hintOptions?null:p.hintOptions.direction)||"bottom-left")}}function j(e,a){if(1&e&&t.EFF(0),2&e){const i=t.XpG().ngIf,n=t.XpG(2);t.SpI(" ",n.isPasswordHidden?i[0]:i[1]," ")}}const N=function(e){return{$implicit:e}};function b(e,a){if(1&e&&(t.qex(0),t.DNE(1,R,2,8,"tui-icon",4),t.DNE(2,j,1,1,"ng-template",5,6,t.C5r),t.bVm()),2&e){const i=t.XpG(2);t.R7$(1),t.Y8G("polymorpheusOutlet",i.icon)("polymorpheusOutletContext",t.eq3(2,N,i.size))}}function $(e,a){if(1&e&&(t.DNE(0,b,4,4,"ng-container",3),t.nI1(1,"async")),2&e){const i=t.XpG();t.Y8G("ngIf",t.bMT(1,1,i.passwordTexts$))}}const L=["*",[["input"]]],Y=["*","input"],_=(0,O.gc)({icons:{hide:()=>"@tui.eye",show:()=>"@tui.eye-off"}});let B=(()=>{var e;class a extends f.Er{constructor(){var n;super(...arguments),this.textfieldSize=(0,t.WQX)(u.tI),this.hintOptions=(0,t.WQX)(h.bk,{optional:!0}),this.directive$=(null==(n=this.hintOptions)?void 0:n.change$)||k.w,this.isPasswordHidden=!0,this.computedAppearance$=this.directive$.pipe((0,T.Z)(null),(0,M.T)(()=>{var o;return(null==(o=this.hintOptions)?void 0:o.appearance)||""}),(0,T.Z)("")),this.passwordTexts$=(0,t.WQX)(P.ig),this.options=(0,t.WQX)(_)}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){var n;return!(null==(n=this.textfield)||!n.focused)}get inputType(){return this.isPasswordHidden||this.computedDisabled?"password":"text"}onValueChange(n){this.value=n}get size(){return this.textfieldSize.size}get icon(){return this.isPasswordHidden?this.options.icons.show:this.options.icons.hide}onFocused(n){this.updateFocused(n)}togglePasswordVisibility(){this.isPasswordHidden=!this.isPasswordHidden}getFallbackValue(){return""}}return(e=a).\u0275fac=function(){let i;return function(o){return(i||(i=t.xGo(e)))(o||e)}}(),e.\u0275cmp=t.VBU({type:e,selectors:[["tui-input-password"]],viewQuery:function(n,o){if(1&n&&t.GBs(d.eD,5),2&n){let p;t.mGM(p=t.lsd())&&(o.textfield=p.first)}},hostVars:1,hostBindings:function(n,o){2&n&&t.BMQ("data-size",o.size)},features:[t.Jv_([(0,y.Jr)(e),(0,f.SN)(e)]),t.Vt3],ngContentSelectors:Y,decls:5,vars:11,consts:[[1,"t-textfield",3,"disabled","focusable","invalid","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiTextfieldIcon","value","valueChange","focusedChange"],[3,"polymorpheus"],["iconContent","polymorpheus"],[4,"ngIf"],["automation-id","tui-password__icon","tuiAppearance","icon","class","t-icon",3,"t-icon_small","icon","tuiHint","tuiHintAppearance","tuiHintDirection","click","mousedown.silent.prevent","mouseup.silent.prevent",4,"polymorpheusOutlet","polymorpheusOutletContext"],["polymorpheus",""],["hintContent","polymorpheus"],["automation-id","tui-password__icon","tuiAppearance","icon",1,"t-icon",3,"icon","tuiHint","tuiHintAppearance","tuiHintDirection","click","mousedown.silent.prevent","mouseup.silent.prevent"]],template:function(n,o){if(1&n&&(t.NAR(L),t.j41(0,"tui-primitive-textfield",0),t.bIt("valueChange",function(c){return o.value=c})("focusedChange",function(c){return o.onFocused(c)}),t.SdG(1),t.SdG(2,1,["ngProjectAs","input",5,["input"]]),t.k0s(),t.DNE(3,$,2,3,"ng-template",1,2,t.C5r)),2&n){const p=t.sdS(4);t.Y8G("disabled",o.computedDisabled)("focusable",o.focusable)("invalid",o.computedInvalid)("nativeId",o.nativeId)("pseudoActive",o.pseudoActive)("pseudoFocus",o.pseudoFocus)("pseudoHover",o.pseudoHover)("readOnly",o.readOnly)("tuiTextfieldIcon",o.computedDisabled?"":p)("value",o.value),t.R7$(3),t.Y8G("polymorpheus",o.type)}},dependencies:[h.XZ,v.bT,F.xr,F.A7,d.eD,d.gt,u.OC,S.bC,E.q,v.Jj],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-icon[_ngcontent-%COMP%]{cursor:pointer;pointer-events:auto}.t-icon_small[_ngcontent-%COMP%]{border-width:.25rem}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),a})(),H=(()=>{var e;class a extends f.aX{onValueChange(n){this.host.onValueChange(n)}process(n){this.input=n}ngDoCheck(){this.host.nativeFocusableElement&&(0,G.r_)(this.host.nativeFocusableElement)&&(this.host.nativeFocusableElement.type=this.host.inputType)}}return(e=a).\u0275fac=function(){let i;return function(o){return(i||(i=t.xGo(e)))(o||e)}}(),e.\u0275dir=t.FsC({type:e,selectors:[["tui-input-password"]],features:[t.Jv_([(0,y.Sc)(e)]),t.Vt3]}),a})(),U=(()=>{var e;class a{}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[h.pp,v.MD,l.YN,d.Rp,u.CN,E.q]}),a})();const A={mask:[/\d/,/\d/,/\d/]};let V=(()=>{var e;class a{constructor(){this.maskitoOptions=A,this.value=""}}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.VBU({type:e,selectors:[["input-type-password-example"]],standalone:!0,features:[t.aNF],decls:3,vars:5,consts:[["tuiHintContent","Only 3 digits are allowed",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],["tuiTextfieldLegacy","","type","password",3,"maskito"]],template:function(n,o){1&n&&(t.j41(0,"tui-input-password",0),t.bIt("ngModelChange",function(c){return o.value=c}),t.EFF(1," Enter password "),t.nrm(2,"input",1),t.k0s()),2&n&&(t.xc7("max-width",20,"rem"),t.Y8G("tuiTextfieldLabelOutside",!0)("ngModel",o.value),t.R7$(2),t.Y8G("maskito",o.maskitoOptions))},dependencies:[l.YN,l.BC,l.vS,g.u,h.bk,U,B,H,d.Bw,u.CN,u.kf],encapsulation:2,changeDetection:0}),a})();var r=s(6801);const X={mask:/^[a-z]+$/i};let z=(()=>{var e;class a{constructor(){this.maskitoOptions=X,this.value=""}}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.VBU({type:e,selectors:[["input-type-search-example"]],standalone:!0,features:[t.aNF],decls:3,vars:5,consts:[["tuiTextfieldIconLeft","@tui.search",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],["tuiTextfieldLegacy","","type","search",3,"maskito"]],template:function(n,o){1&n&&(t.j41(0,"tui-input",0),t.bIt("ngModelChange",function(c){return o.value=c}),t.EFF(1," Enter any english word "),t.nrm(2,"input",1),t.k0s()),2&n&&(t.xc7("max-width",20,"rem"),t.Y8G("tuiTextfieldLabelOutside",!0)("ngModel",o.value),t.R7$(2),t.Y8G("maskito",o.maskitoOptions))},dependencies:[l.YN,l.BC,l.vS,g.u,r.zi,r.mp,r.Ws,d.Bw,u.CN,u.kf,u.dx],encapsulation:2,changeDetection:0}),a})();var W=s(2176),J=s(5771),Q=s(9449);const Z=(0,J.K)({metadata:Q.default,countryIsoCode:"US"});function K(e,a){1&e&&(t.nrm(0,"img",3),t.nI1(1,"tuiFlag")),2&e&&(t.xc7("border-radius",50,"%"),t.Y8G("src",t.bMT(1,3,"US"),t.B4B))}let q=(()=>{var e;class a{constructor(){this.maskitoOptions=Z,this.value=""}}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.VBU({type:e,selectors:[["input-type-tel-example"]],standalone:!0,features:[t.aNF],decls:5,vars:6,consts:[[3,"tuiTextfieldCustomContent","tuiTextfieldLabelOutside","ngModel","ngModelChange"],["tuiTextfieldLegacy","","type","tel",3,"maskito"],["usFlag",""],["alt","Flag of the United States","width","28",3,"src"]],template:function(n,o){if(1&n&&(t.j41(0,"tui-input",0),t.bIt("ngModelChange",function(c){return o.value=c}),t.EFF(1," Enter phone number "),t.nrm(2,"input",1),t.k0s(),t.DNE(3,K,2,5,"ng-template",null,2,t.C5r)),2&n){const p=t.sdS(4);t.xc7("max-width",20,"rem"),t.Y8G("tuiTextfieldCustomContent",p)("tuiTextfieldLabelOutside",!0)("ngModel",o.value),t.R7$(2),t.Y8G("maskito",o.maskitoOptions)}},dependencies:[l.YN,l.BC,l.vS,g.u,W.d,r.zi,r.mp,r.Ws,d.Bw,u.CN,u.Rd,u.kf],encapsulation:2,changeDetection:0}),a})();const et=(0,s(3465).d5)({mode:"HH:MM"});let nt=(()=>{var e;class a{constructor(){this.maskitoOptions=et,this.value=""}}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.VBU({type:e,selectors:[["input-type-text-example"]],standalone:!0,features:[t.aNF],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","@tui.clock",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],["inputmode","decimal","tuiTextfieldLegacy","","type","text",3,"maskito"]],template:function(n,o){1&n&&(t.j41(0,"tui-input",0),t.bIt("ngModelChange",function(c){return o.value=c}),t.EFF(1," Enter time "),t.nrm(2,"input",1),t.k0s()),2&n&&(t.xc7("max-width",20,"rem"),t.Y8G("tuiTextfieldLabelOutside",!0)("ngModel",o.value),t.R7$(2),t.Y8G("maskito",o.maskitoOptions))},dependencies:[l.YN,l.BC,l.vS,g.u,r.zi,r.mp,r.Ws,d.Bw,u.CN,u.Rd,u.kf],encapsulation:2,changeDetection:0}),a})();const ot={mask:/^[\w/:.@]+$/};let it=(()=>{var e;class a{constructor(){this.maskitoOptions=ot,this.value=""}}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.VBU({type:e,selectors:[["input-type-url-example"]],standalone:!0,features:[t.aNF],decls:3,vars:5,consts:[["tuiTextfieldCustomContent","@tui.globe",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],["tuiTextfieldLegacy","","type","url",3,"maskito"]],template:function(n,o){1&n&&(t.j41(0,"tui-input",0),t.bIt("ngModelChange",function(c){return o.value=c}),t.EFF(1," Enter url "),t.nrm(2,"input",1),t.k0s()),2&n&&(t.xc7("max-width",20,"rem"),t.Y8G("tuiTextfieldLabelOutside",!0)("ngModel",o.value),t.R7$(2),t.Y8G("maskito",o.maskitoOptions))},dependencies:[l.YN,l.BC,l.vS,g.u,r.zi,r.mp,r.Ws,d.Bw,u.CN,u.Rd,u.kf],encapsulation:2,changeDetection:0}),a})();var C=s(2317);function st(e,a){if(1&e&&(t.j41(0,"code"),t.EFF(1),t.k0s(),t.EFF(2," is the default, the simplest and the most popular type of input-element. "),t.nrm(3,"br"),t.EFF(4," Use it if you don't know which type to choose. ")),2&e){const i=t.XpG();t.R7$(1),t.JRh(i.getInput("text"))}}function at(e,a){if(1&e&&(t.j41(0,"code"),t.EFF(1),t.k0s(),t.EFF(2," is a control for entering a telephone number. "),t.nrm(3,"br"),t.EFF(4," Displays a telephone keypad in some devices with dynamic keypads. ")),2&e){const i=t.XpG();t.R7$(1),t.JRh(i.getInput("tel"))}}function pt(e,a){if(1&e&&(t.j41(0,"code"),t.EFF(1),t.k0s(),t.EFF(2," is a single-line text field whose value is obscured. ")),2&e){const i=t.XpG();t.R7$(1),t.JRh(i.getInput("password"))}}function ut(e,a){if(1&e&&(t.j41(0,"code"),t.EFF(1),t.k0s(),t.EFF(2," is a field for entering a URL. "),t.nrm(3,"br"),t.EFF(4," Looks like a text input, but has relevant keyboard in supporting browsers and devices with dynamic keyboards. ")),2&e){const i=t.XpG();t.R7$(1),t.JRh(i.getInput("url"))}}function lt(e,a){if(1&e&&(t.j41(0,"code"),t.EFF(1),t.k0s(),t.EFF(2," is a single-line text field for entering search strings. "),t.nrm(3,"br"),t.EFF(4," Displays a search icon instead of enter key on some devices with dynamic keypads. ")),2&e){const i=t.XpG();t.R7$(1),t.JRh(i.getInput("search"))}}const ct=(()=>{var e;class a{constructor(){this.textTypeExample={[m.w.MaskitoOptions]:s.e(9086).then(s.t.bind(s,9086,17))},this.telTypeExample={[m.w.MaskitoOptions]:s.e(9304).then(s.t.bind(s,9304,17))},this.passwordTypeExample={[m.w.MaskitoOptions]:s.e(2884).then(s.t.bind(s,2884,17))},this.urlTypeExample={[m.w.MaskitoOptions]:s.e(9116).then(s.t.bind(s,9116,17))},this.searchTypeExample={[m.w.MaskitoOptions]:s.e(5807).then(s.t.bind(s,5807,17))}}getInput(n){return`<input\xa0type="${n}"\xa0/>`}}return(e=a).\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.VBU({type:e,selectors:[["supported-input-types-doc-page"]],standalone:!0,features:[t.aNF],decls:69,vars:10,consts:[["header","Supported <input /> types"],["appearance","warning","size","m"],[1,"tui-space_top-4"],[1,"tui-list"],[1,"tui-list__item"],["href","https://html.spec.whatwg.org/multipage/input.html#concept-input-apply","rel","noreferrer","target","_blank","tuiLink",""],["id","text","heading","text",3,"content","description"],["textDescription",""],["id","tel","heading","tel",3,"content","description"],["telDescription",""],["id","password","heading","password",3,"content","description"],["passwordDescription",""],["id","url","heading","url",3,"content","description"],["urlDescription",""],["id","search","heading","search",3,"content","description"],["searchDescription",""]],template:function(n,o){if(1&n&&(t.j41(0,"tui-doc-page",0)(1,"tui-notification",1)(2,"div")(3,"strong"),t.EFF(4,"Maskito"),t.k0s(),t.EFF(5," supports only limited types of "),t.j41(6,"code"),t.EFF(7,"HTMLInputElement"),t.k0s(),t.EFF(8," due to some browser limitations! "),t.k0s()(),t.j41(9,"section",2)(10,"p")(11,"strong"),t.EFF(12,"Maskito"),t.k0s(),t.EFF(13," accepts only the types whose support the following native properties/methods: "),t.k0s(),t.j41(14,"ul",3)(15,"li",4)(16,"code"),t.EFF(17,"selectionStart"),t.k0s()(),t.j41(18,"li",4)(19,"code"),t.EFF(20,"selectionEnd"),t.k0s()(),t.j41(21,"li",4)(22,"code"),t.EFF(23,"setSelectionRange"),t.k0s()()(),t.j41(24,"p"),t.EFF(25," According to the "),t.j41(26,"a",5),t.EFF(27," WHATWG\xa0forms\xa0spec "),t.k0s(),t.EFF(28," they apply only to inputs of types "),t.j41(29,"code"),t.EFF(30,"text"),t.k0s(),t.EFF(31," , "),t.j41(32,"code"),t.EFF(33,"search"),t.k0s(),t.EFF(34," , "),t.j41(35,"code"),t.EFF(36,"URL"),t.k0s(),t.EFF(37," , "),t.j41(38,"code"),t.EFF(39,"tel"),t.k0s(),t.EFF(40," and "),t.j41(41,"code"),t.EFF(42,"password"),t.k0s(),t.EFF(43," . "),t.nrm(44,"br"),t.j41(45,"strong"),t.EFF(46,"All other types will not work properly with Maskito!"),t.k0s()()(),t.j41(47,"p"),t.EFF(48,"All examples below are demonstrations to see different supported types in action."),t.k0s(),t.j41(49,"tui-doc-example",6),t.DNE(50,st,5,1,"ng-template",null,7,t.C5r),t.nrm(52,"input-type-text-example"),t.k0s(),t.j41(53,"tui-doc-example",8),t.DNE(54,at,5,1,"ng-template",null,9,t.C5r),t.nrm(56,"input-type-tel-example"),t.k0s(),t.j41(57,"tui-doc-example",10),t.DNE(58,pt,3,1,"ng-template",null,11,t.C5r),t.nrm(60,"input-type-password-example"),t.k0s(),t.j41(61,"tui-doc-example",12),t.DNE(62,ut,5,1,"ng-template",null,13,t.C5r),t.nrm(64,"input-type-url-example"),t.k0s(),t.j41(65,"tui-doc-example",14),t.DNE(66,lt,5,1,"ng-template",null,15,t.C5r),t.nrm(68,"input-type-search-example"),t.k0s()()),2&n){const p=t.sdS(51),c=t.sdS(55),rt=t.sdS(59),dt=t.sdS(63),mt=t.sdS(67);t.R7$(49),t.Y8G("content",o.textTypeExample)("description",p),t.R7$(4),t.Y8G("content",o.telTypeExample)("description",c),t.R7$(4),t.Y8G("content",o.passwordTypeExample)("description",rt),t.R7$(4),t.Y8G("content",o.urlTypeExample)("description",dt),t.R7$(4),t.Y8G("content",o.searchTypeExample)("description",mt)}},dependencies:[V,z,q,nt,it,C.FS,C.e3,D.Jc,w.wS],encapsulation:2,changeDetection:0}),a})()}}]);