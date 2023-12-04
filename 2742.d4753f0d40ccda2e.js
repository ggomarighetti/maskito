"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2742],{997:(h,i,o)=>{o.d(i,{TuiAddonDocModule:()=>u});var c=o(9724),n=o(1243);let u=(()=>{class s{}return s.\u0275fac=function(d){return new(d||s)},s.\u0275mod=c.oAB({type:s}),s.\u0275inj=c.cJS({imports:[n.JF,n.mG,n.Lx,n.Lq,n.u4]}),s})()},2742:(h,i,o)=>{o.r(i),o.d(i,{ProcessorsDocPageModule:()=>A});var c=o(1048),n=o(3238),u=o(997),g=o(4427),s=o(2847),p=o(885),d=o(3805),e=o(9724),m=o(1243),Z=o(6119);let f=(()=>{class t{constructor(){this.preprocessorFirstArgDemo=o.e(2391).then(o.t.bind(o,2391,17)),this.preprocessorsSecondArgDemo=o.e(3245).then(o.t.bind(o,3245,17)),this.preprocessorInActionDemo=o.e(2092).then(o.t.bind(o,2092,17)),this.postprocessorInActionDemo=o.e(7681).then(o.t.bind(o,7681,17)),this.elementStateDocPage="/core-concepts/element-state"}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["processors-doc-page"]],decls:110,vars:5,consts:[["header","Processors"],[1,"tui-space_bottom-6"],[1,"tui-space_top-0"],["href","https://github.com/taiga-family/maskito/blob/main/projects/core/src/lib/types/mask-options.ts","rel","noreferrer","target","_blank","tuiLink",""],["href","https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event","rel","noreferrer","target","_blank","tuiLink",""],["href","https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event","rel","noreferrer","target","_blank","tuiLink",""],[1,"tui-list"],[1,"tui-list__item"],[1,"tui-space_bottom-12"],["tuiLink","",3,"routerLink"],[1,"tui-list","tui-list_ordered"],[1,"tui-space_top-1",3,"code"],[3,"code"],[1,"tui-space_bottom-0"],["status","warning",1,"tui-space_bottom-4"],[1,"tui-space_top-0","tui-space_bottom-0"]],template:function(r,a){1&r&&(e.TgZ(0,"tui-doc-page",0)(1,"section",1)(2,"p",2)(3,"a",3)(4,"code"),e._uU(5,"MaskitoOptions"),e.qZA()(),e._uU(6," have optional parameters "),e.TgZ(7,"code"),e._uU(8,"preprocessors"),e.qZA(),e._uU(9," and "),e.TgZ(10,"code"),e._uU(11,"postprocessors"),e.qZA(),e._uU(12," . Both accept array of pure functions. These functions are triggered on every user's input ( "),e.TgZ(13,"a",4),e._uU(14," beforeinput "),e.qZA(),e._uU(15," and "),e.TgZ(16,"a",5),e._uU(17," input "),e.qZA(),e._uU(18," events). They provide an opportunity to modify value before\xa0/\xa0after the mask is applied. "),e.qZA(),e.TgZ(19,"section")(20,"p"),e._uU(21," Preprocessors and postprocessors accept different types of arguments but they have two important similarities: "),e.qZA(),e.TgZ(22,"ul",6)(23,"li",7),e._uU(24," The first argument always contains object with information that you can change. Object with the same properties and updated values can be returned from the processor. It means that you can keep all properties untouched or you can change any or all of these properties. "),e.qZA(),e.TgZ(25,"li",7),e._uU(26," The rest arguments contain information that can be useful to build some complex logic, but you cannot change it. "),e.qZA()()()(),e.TgZ(27,"tui-notification",8),e._uU(28," Before you learn more about processors, you should learn a single prerequisite \u2014 meaning of the term "),e.TgZ(29,"a",9),e._uU(30,' "Element\xa0state" '),e.qZA(),e._uU(31," . "),e.qZA(),e.TgZ(32,"section",8)(33,"h2"),e._uU(34,"Preprocessors"),e.qZA(),e.TgZ(35,"p"),e._uU(36," Each preprocessor is a function that is called "),e.TgZ(37,"strong"),e._uU(38,"before"),e.qZA(),e._uU(39," mask is applied. "),e.qZA(),e.TgZ(40,"p"),e._uU(41," For example, if user types a new character, all preprocessors will be called first, and only then final value that they returned will be passed into the mask, and finally the mask will accept or reject new typed character and update actual value of the text field. "),e.qZA(),e.TgZ(42,"section",1)(43,"p"),e._uU(44,"Preprocessor accepts two arguments:"),e.qZA(),e.TgZ(45,"ol",10)(46,"li",7)(47,"strong"),e._uU(48," Object with two properties: "),e.TgZ(49,"code"),e._uU(50,"elementState"),e.qZA(),e._uU(51," and "),e.TgZ(52,"code"),e._uU(53,"data"),e.qZA(),e._uU(54," . "),e.qZA(),e._uU(55," Object of the same interface with updated or unchanged properties can be returned from the preprocessor. "),e._UZ(56,"tui-doc-code",11),e.qZA(),e.TgZ(57,"li",7),e._uU(58," Name of the action which triggers current execution. It can be one of the following possible values: "),e._UZ(59,"tui-doc-code",12),e.qZA()()(),e.TgZ(60,"p"),e._uU(61,"Preprocessor returns an objects of the same interface as the first argument."),e.qZA(),e._UZ(62,"tui-doc-code",12),e.qZA(),e.TgZ(63,"section",8)(64,"h2"),e._uU(65,"Postprocessors"),e.qZA(),e.TgZ(66,"p",13),e._uU(67," Each postprocessor is a function that is called "),e.TgZ(68,"strong"),e._uU(69,"after"),e.qZA(),e._uU(70," the mask is applied. When all preprocessors are already called, all mask operations happened and the input's value is about to be updated. You can change everything manually inside a postprocessor. "),e.qZA(),e.TgZ(71,"section",1)(72,"p"),e._uU(73,"Postprocessor accepts two arguments:"),e.qZA(),e.TgZ(74,"ol",10)(75,"li",7)(76,"strong"),e._uU(77,"Element state after mask had been applied."),e.qZA(),e._uU(78," Postprocessor can return updated element state which would then be reflected by the actual text field. "),e.qZA(),e.TgZ(79,"li",7)(80,"strong"),e._uU(81,"Initial element state before preprocessors and mask execution."),e.qZA(),e._uU(82," It is a readonly argument, the past cannot be changed... "),e.qZA()()(),e.TgZ(83,"p"),e._uU(84,"Postprocessor returns an objects of the same interface as the first argument."),e.qZA(),e.TgZ(85,"tui-notification",14)(86,"p",15)(87,"strong"),e._uU(88,"With great power comes great responsibility!"),e.qZA()(),e.TgZ(89,"p",13),e._uU(90," Postprocessor is the final step before input's value update which gives a lot of flexibility. Use postprocessor wisely and return a valid value! "),e.qZA()(),e._UZ(91,"tui-doc-code",12),e.qZA(),e.TgZ(92,"tui-notification")(93,"strong"),e._uU(94,"Stacking of multiple processors"),e.qZA(),e.TgZ(95,"p"),e._uU(96," The "),e.TgZ(97,"strong"),e._uU(98,"Maskito"),e.qZA(),e._uU(99," team likes code decomposition and promotes it! Don't put all complex logic inside a single processor. Both parameters "),e.TgZ(100,"code"),e._uU(101,"preprocessors"),e.qZA(),e._uU(102," and "),e.TgZ(103,"code"),e._uU(104,"postprocessors"),e.qZA(),e._uU(105," accepts "),e.TgZ(106,"strong"),e._uU(107,"array"),e.qZA(),e._uU(108," of same type processors. Break your code into the several independent processors so that each processor implements only a single task. "),e.qZA()(),e._UZ(109,"next-steps"),e.qZA()),2&r&&(e.xp6(29),e.Q6J("routerLink",a.elementStateDocPage),e.xp6(27),e.Q6J("code",a.preprocessorFirstArgDemo),e.xp6(3),e.Q6J("code",a.preprocessorsSecondArgDemo),e.xp6(3),e.Q6J("code",a.preprocessorInActionDemo),e.xp6(29),e.Q6J("code",a.postprocessorInActionDemo))},directives:[m.qo,s.V,p.L,n.yS,m.c0,Z.R],encapsulation:2,changeDetection:0}),t})(),A=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,u.TuiAddonDocModule,s.j,p.H,d.L,n.Bz.forChild((0,g.Ve)(f))]]}),t})()}}]);