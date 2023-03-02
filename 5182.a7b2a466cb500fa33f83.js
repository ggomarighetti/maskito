"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[5182],{5182:(D,d,e)=>{e.r(d),e.d(d,{AngularDocPageModule:()=>y});var f=e(6104),u=e(3738),g=e(5358),A=e(2905),s=e(9409),m=e(2847),p=e(885),l=e(1673),r=e(2963),t=e(4788),Z=e(7258);let T=(()=>{class o{constructor(){this.value="",this.nameMask={mask:/^[a-zA-Z\s]+$/,postprocessor:({value:n,selection:i})=>({value:n.toUpperCase(),selection:i})},this.predicate=n=>n.querySelector("tui-input input")}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["nested-doc-example-1"]],decls:2,vars:2,consts:[[3,"maskito","ngModel","ngModelChange"]],template:function(n,i){1&n&&(t.TgZ(0,"tui-input",0),t.NdJ("ngModelChange",function(c){return i.value=c}),t._uU(1," Name on the card\n"),t.qZA()),2&n&&t.Q6J("maskito",i.nameMask)("ngModel",i.value)},directives:[l.K3,l.wU,Z.r,u.JJ,u.On],encapsulation:2,changeDetection:0}),o})(),U=(()=>{class o{constructor(){this.show=!1,this.value=""}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["nested-doc-example-2"]],decls:4,vars:3,consts:[[1,"tui-space_bottom-3",3,"ngModel","ngModelChange"],[3,"disabled","ngModel","ngModelChange"]],template:function(n,i){1&n&&(t.TgZ(0,"tui-checkbox-labeled",0),t.NdJ("ngModelChange",function(c){return i.show=c}),t._uU(1," Add card holder name\n"),t.qZA(),t.TgZ(2,"tui-input",1),t.NdJ("ngModelChange",function(c){return i.value=c}),t._uU(3," Name on the card\n"),t.qZA()),2&n&&(t.Q6J("ngModel",i.show),t.xp6(2),t.Q6J("disabled",!i.show)("ngModel",i.value))},directives:[r.p,u.JJ,u.On,l.K3,l.wU],encapsulation:2,changeDetection:0}),o})();function v(o,a){if(1&o&&(t.TgZ(0,"code"),t._uU(1,"@maskito/angular"),t.qZA(),t._uU(2," is a light-weighted library to use "),t.TgZ(3,"strong"),t._uU(4,"Maskito"),t.qZA(),t._uU(5," in an Angular-way. "),t.TgZ(6,"tui-notification",3),t.TgZ(7,"strong"),t._uU(8,"Prerequisites"),t.qZA(),t.TgZ(9,"p",4),t._uU(10," To get the most out of this guide, you should review the topic "),t.TgZ(11,"a",5),t._uU(12,' "Core\xa0Concepts" '),t.qZA(),t._uU(13," first. "),t.qZA(),t.qZA(),t.TgZ(14,"section",6),t.TgZ(15,"h2"),t._uU(16,"Write less code"),t.qZA(),t.TgZ(17,"ul",7),t.TgZ(18,"li",8),t.TgZ(19,"strong"),t._uU(20,"No need to query element from DOM."),t.qZA(),t._uU(21," Just pass all required options to "),t.TgZ(22,"code"),t._uU(23,"[maskito]"),t.qZA(),t._uU(24," directive. "),t.qZA(),t.TgZ(25,"li",8),t.TgZ(26,"strong"),t._uU(27,"No need to worry about clean-ups."),t.qZA(),t._uU(28," All created event listeners are automatically removed after element is detached from DOM. "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"section",6),t.TgZ(30,"h2"),t._uU(31,"Basic directive approach"),t.qZA(),t.TgZ(32,"p"),t._uU(33,"Use it when you have direct access to native input element."),t.qZA(),t._UZ(34,"tui-doc-code",9),t.qZA(),t.TgZ(35,"section",6),t.TgZ(36,"h2"),t._uU(37,"Nested input element"),t.qZA(),t.TgZ(38,"p"),t._uU(39," Pass a predicate to "),t.TgZ(40,"strong"),t._uU(41,"maskito"),t.qZA(),t._uU(42," to find input element for you, if you do not have a direct access to it. "),t.qZA(),t.TgZ(43,"tui-notification"),t._uU(44," By default "),t.TgZ(45,"strong"),t._uU(46,"maskito"),t.qZA(),t._uU(47," will try to find input/textarea by querying its host: "),t.TgZ(48,"code"),t._uU(49,"host.querySelector('input,textarea')"),t.qZA(),t._uU(50," so that might be sufficient. Use custom predicate if you need custom logic. "),t.qZA(),t._UZ(51,"tui-doc-code",9),t.qZA(),t.TgZ(52,"tui-doc-example",10),t.TgZ(53,"tui-notification",11),t._uU(54," Default behavior is enough for "),t.TgZ(55,"a",12),t._uU(56," Taiga UI "),t.qZA(),t._uU(57," inputs "),t.qZA(),t._UZ(58,"nested-doc-example-1",13,14),t.TgZ(60,"tui-notification",15),t._uU(61," Custom predicate is required if target input is not the first on in the DOM "),t.qZA(),t._UZ(62,"nested-doc-example-2",16),t.qZA()),2&o){const n=t.MAs(59),i=t.oxw();t.xp6(11),t.Q6J("routerLink",i.coreConceptsOverviewDocPage),t.xp6(23),t.Q6J("code",i.basicDirectiveApproach),t.xp6(17),t.Q6J("code",i.customInputExample),t.xp6(1),t.Q6J("content",i.nestedInputExample),t.xp6(10),t.Q6J("maskito",n.nameMask)("maskitoElement",n.predicate)}}function x(o,a){if(1&o&&(t.TgZ(0,"section"),t.TgZ(1,"ol",17),t.TgZ(2,"li",8),t._uU(3," Install libraries "),t._UZ(4,"tui-doc-code",18),t.qZA(),t.TgZ(5,"li",19),t._uU(6," Import "),t.TgZ(7,"code"),t._uU(8,"MaskitoModule"),t.qZA(),t._uU(9," to your module "),t._UZ(10,"tui-doc-code",20),t.qZA(),t.qZA(),t.qZA()),2&o){const n=t.oxw();t.xp6(10),t.Q6J("code",n.importMaskitoModuleExample)}}let M=(()=>{class o{constructor(){this.coreConceptsOverviewDocPage="/core-concepts/overview",this.importMaskitoModuleExample=e.e(9201).then(e.t.bind(e,9201,17)),this.basicDirectiveApproach=e.e(257).then(e.t.bind(e,257,17)),this.customInputExample=e.e(3953).then(e.t.bind(e,3953,17)),this.nestedInputExample={TypeScript:e.e(4246).then(e.t.bind(e,4246,17)),Default:e.e(9447).then(e.t.bind(e,9447,17)),Custom:e.e(447).then(e.t.bind(e,447,17))}}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["angular-doc-page"]],decls:3,vars:0,consts:[["header","Angular"],["pageTab","Overview"],["pageTab","Setup"],["status","warning",1,"tui-space_top-6"],[1,"tui-space_bottom-0"],["tuiLink","",3,"routerLink"],[1,"tui-space_top-12"],[1,"tui-list"],[1,"tui-list__item"],["filename","your.component.ts",3,"code"],["heading","Custom input","description","See querying nested input in action",3,"content"],[1,"example","tui-space_bottom-3"],["tuiLink","","href","https://github.com/Tinkoff/taiga-ui"],[1,"example"],["example",""],[1,"example","tui-space_vertical-3"],[1,"example",3,"maskito","maskitoElement"],[1,"tui-list","tui-list_ordered"],["code","npm install @maskito/{core,angular}","filename","/your/project/path>"],[1,"tui-list__item","tui-space_top-8"],["filename","your.module.ts",3,"code"]],template:function(n,i){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,v,63,6,"ng-template",1),t.YNc(2,x,11,1,"ng-template",2),t.qZA())},directives:[s.qo,s.nj,p.Ls,m.V,g.yS,s.c0,s.f2,T,U,Z.r],styles:[".example[_ngcontent-%COMP%]{display:block;width:20rem}"],changeDetection:0}),o})(),y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[f.ez,u.u5,A.U,l.Qf,m.j,p.Hi,s.fV,g.Bz.forChild((0,s.Ve)(M)),r.s]]}),o})()}}]);