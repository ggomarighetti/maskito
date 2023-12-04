"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8354],{997:(U,m,e)=>{e.d(m,{TuiAddonDocModule:()=>l});var p=e(9724),s=e(1243);let l=(()=>{class c{}return c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=p.oAB({type:c}),c.\u0275inj=p.cJS({imports:[s.JF,s.mG,s.Lx,s.Lq,s.u4]}),c})()},8354:(U,m,e)=>{e.r(m),e.d(m,{AngularDocPageModule:()=>Q});var p=e(1048),s=e(2552),l=e(3238),v=e(1516),c=e(997),h=e(4427),r=e(2847),A=e(885),u=e(1673),x=e(3063),t=e(9724),g=e(1243),f=e(7258);let D=(()=>{class o{constructor(){this.value="",this.nameMask={mask:/^[a-zA-Z\s]+$/,postprocessors:[({value:n,selection:a})=>({value:n.toUpperCase(),selection:a})]},this.predicate=n=>n.querySelector("tui-input input")}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["nested-doc-example-1"]],decls:2,vars:2,consts:[[3,"maskito","ngModel","ngModelChange"]],template:function(n,a){1&n&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(d){return a.value=d}),t._uU(1," Name on the card\n"),t.qZA()),2&n&&t.Q6J("maskito",a.nameMask)("ngModel",a.value)},directives:[u.K3,u.wU,f.r,s.JJ,s.On],encapsulation:2,changeDetection:0}),o})(),M=(()=>{class o{constructor(){this.show=!1,this.value=""}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["nested-doc-example-2"]],decls:4,vars:3,consts:[[1,"tui-space_bottom-3",3,"ngModel","ngModelChange"],[3,"disabled","ngModel","ngModelChange"]],template:function(n,a){1&n&&(t.TgZ(0,"tui-checkbox-labeled",0),t.NdJ("ngModelChange",function(d){return a.show=d}),t._uU(1," Add card holder name\n"),t.qZA(),t.TgZ(2,"tui-input",1),t.NdJ("ngModelChange",function(d){return a.value=d}),t._uU(3," Name on the card\n"),t.qZA()),2&n&&(t.Q6J("ngModel",a.show),t.xp6(2),t.Q6J("disabled",!a.show)("ngModel",a.value))},directives:[x.p,s.JJ,s.On,u.K3,u.wU],encapsulation:2,changeDetection:0}),o})();var T=e(3358),y=e(9510);let E=(()=>{class o{constructor(){this.control=new s.NI,this.maskito=(0,T.f8)({precision:2})}setValue(){this.control.setValue(12345.67)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["cva-doc-example-3"]],decls:3,vars:2,consts:[[3,"formControl","maskito"],[3,"click"]],template:function(n,a){1&n&&(t._UZ(0,"input",0),t.TgZ(1,"button",1),t.NdJ("click",function(){return a.setValue()}),t._uU(2,"Set 12345.67"),t.qZA()),2&n&&t.Q6J("formControl",a.control)("maskito",a.maskito)},directives:[s.Fj,y.F,s.JJ,s.oH,f.r],encapsulation:2,changeDetection:0}),o})();var C=e(635);let J=(()=>{class o{constructor(){this.value=12345.67,this.options=(0,T.f8)({precision:2})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["pipe-doc-example-4"]],decls:2,vars:4,template:function(n,a){1&n&&(t._uU(0),t.ALo(1,"maskito")),2&n&&t.hij("Balance: $",t.xi3(1,1,a.value,a.options),"\n")},pipes:[C.c],encapsulation:2,changeDetection:0}),o})();function P(o,i){if(1&o&&(t.TgZ(0,"code"),t._uU(1,"@maskito/angular"),t.qZA(),t._uU(2," is a light-weighted library to use "),t.TgZ(3,"strong"),t._uU(4,"Maskito"),t.qZA(),t._uU(5," in an Angular-way. "),t.TgZ(6,"tui-notification",3)(7,"strong"),t._uU(8,"Prerequisites"),t.qZA(),t.TgZ(9,"p",4),t._uU(10," To get the most out of this guide, you should review the topic "),t.TgZ(11,"a",5),t._uU(12,' "Core\xa0Concepts" '),t.qZA(),t._uU(13," first. "),t.qZA()(),t.TgZ(14,"section",6)(15,"h2"),t._uU(16,"Write less code"),t.qZA(),t.TgZ(17,"ul",7)(18,"li",8)(19,"strong"),t._uU(20,"No need to query element from DOM."),t.qZA(),t._uU(21," Just pass all required options to "),t.TgZ(22,"code"),t._uU(23,"[maskito]"),t.qZA(),t._uU(24," directive. "),t.qZA(),t.TgZ(25,"li",8)(26,"strong"),t._uU(27,"No need to worry about clean-ups."),t.qZA(),t._uU(28," All created event listeners are automatically removed after element is detached from DOM. "),t.qZA()()(),t.TgZ(29,"section",6)(30,"h2"),t._uU(31,"Basic directive approach"),t.qZA(),t.TgZ(32,"p"),t._uU(33,"Use it when you have direct access to native input element."),t.qZA(),t._UZ(34,"tui-doc-code",9),t.qZA(),t.TgZ(35,"section",6)(36,"h2"),t._uU(37,"Nested input element"),t.qZA(),t.TgZ(38,"p"),t._uU(39," Pass a predicate to "),t.TgZ(40,"strong"),t._uU(41,"maskito"),t.qZA(),t._uU(42," to find input element for you, if you do not have a direct access to it. "),t.qZA(),t.TgZ(43,"tui-notification"),t._uU(44," By default "),t.TgZ(45,"strong"),t._uU(46,"maskito"),t.qZA(),t._uU(47," will try to find input/textarea by querying its host: "),t.TgZ(48,"code"),t._uU(49,"host.querySelector('input,textarea')"),t.qZA(),t._uU(50," so that might be sufficient. Use custom predicate if you need custom logic. "),t.qZA(),t._UZ(51,"tui-doc-code",9),t.qZA(),t.TgZ(52,"tui-doc-example",10)(53,"tui-notification",11),t._uU(54," Default behavior is enough for "),t.TgZ(55,"a",12),t._uU(56," Taiga UI "),t.qZA(),t._uU(57," inputs "),t.qZA(),t._UZ(58,"nested-doc-example-1",13,14),t.TgZ(60,"tui-notification",15),t._uU(61," Custom predicate is required if target input is not the first on in the DOM "),t.qZA(),t._UZ(62,"nested-doc-example-2",16),t.qZA(),t.TgZ(63,"tui-doc-example",17),t._UZ(64,"cva-doc-example-3"),t.qZA(),t.TgZ(65,"tui-doc-example",18),t._UZ(66,"pipe-doc-example-4"),t.qZA()),2&o){const n=t.MAs(59),a=t.oxw();t.xp6(11),t.Q6J("routerLink",a.coreConceptsOverviewDocPage),t.xp6(23),t.Q6J("code",a.basicDirectiveApproach),t.xp6(17),t.Q6J("code",a.customInputExample),t.xp6(1),t.Q6J("content",a.nestedInputExample),t.xp6(10),t.Q6J("maskito",n.nameMask)("maskitoElement",n.predicate),t.xp6(1),t.Q6J("content",a.cvaExample),t.xp6(2),t.Q6J("content",a.pipeExample)}}function N(o,i){if(1&o&&(t.TgZ(0,"section")(1,"ol",19)(2,"li",8),t._uU(3," Install libraries "),t._UZ(4,"tui-doc-code",20),t.qZA(),t.TgZ(5,"li",21),t._uU(6," Import "),t.TgZ(7,"code"),t._uU(8,"MaskitoModule"),t.qZA(),t._uU(9," to your module "),t._UZ(10,"tui-doc-code",22),t.qZA()()()),2&o){const n=t.oxw();t.xp6(10),t.Q6J("code",n.importMaskitoModuleExample)}}let O=(()=>{class o{constructor(){this.coreConceptsOverviewDocPage="/core-concepts/overview",this.importMaskitoModuleExample=e.e(8935).then(e.t.bind(e,8935,17)),this.basicDirectiveApproach=e.e(1069).then(e.t.bind(e,1069,17)),this.customInputExample=e.e(8602).then(e.t.bind(e,8602,17)),this.nestedInputExample={TypeScript:e.e(2472).then(e.t.bind(e,2472,17)),Default:e.e(1026).then(e.t.bind(e,1026,17)),Custom:e.e(8884).then(e.t.bind(e,8884,17))},this.cvaExample={TypeScript:e.e(1541).then(e.t.bind(e,1541,17)),HTML:e.e(7383).then(e.t.bind(e,7383,17))},this.pipeExample={TypeScript:e.e(608).then(e.t.bind(e,608,17)),HTML:e.e(8307).then(e.t.bind(e,3082,17))}}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["angular-doc-page"]],decls:3,vars:0,consts:[["header","Angular","path","angular"],["pageTab","Overview"],["pageTab","Setup"],["status","warning",1,"tui-space_top-6"],[1,"tui-space_bottom-0"],["tuiLink","",3,"routerLink"],[1,"tui-space_top-12"],[1,"tui-list"],[1,"tui-list__item"],["filename","your.component.ts",3,"code"],["description","See querying nested input in action","heading","Custom input",3,"content"],[1,"example","tui-space_bottom-3"],["href","https://github.com/Tinkoff/taiga-ui","tuiLink",""],[1,"example"],["example",""],[1,"example","tui-space_vertical-3"],[1,"example",3,"maskito","maskitoElement"],["description","When directly on native input/textarea tag, maskito directive formats value set programmatically with Angular forms.","heading","Form controls",3,"content"],["description","Format arbitrary value with the same options","heading","Pipe",3,"content"],[1,"tui-list","tui-list_ordered"],["code","npm install @maskito/{core,angular}","filename","/your/project/path>"],[1,"tui-list__item","tui-space_top-8"],["filename","your.module.ts",3,"code"]],template:function(n,a){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,P,67,8,"ng-template",1),t.YNc(2,N,11,1,"ng-template",2),t.qZA())},directives:[g.qo,g.nj,A.L,r.V,l.yS,g.c0,g.f2,D,M,f.r,E,J],styles:[".example[_ngcontent-%COMP%]{display:block;width:20rem}"],changeDetection:0}),o})(),Q=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez,s.u5,s.UX,v.U5,u.Qf,r.j,A.H,x.s,c.TuiAddonDocModule,l.Bz.forChild((0,h.Ve)(O))]]}),o})()}}]);