"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[2856],{2856:(d,i,t)=>{t.r(i),t.d(i,{ProcessorsDocPageModule:()=>Z});var l=t(6104),c=t(5358),r=t(6250),p=t(2847),u=t(885),e=t(4788);let g=(()=>{class o{constructor(){this.elementStateDemo=t.e(1610).then(t.t.bind(t,1610,17)),this.preprocessorFirstArgDemo=t.e(2391).then(t.t.bind(t,2391,17)),this.preprocessorsSecondArgDemo=t.e(3245).then(t.t.bind(t,3245,17)),this.preprocessorInActionDemo=t.e(2092).then(t.t.bind(t,2092,17)),this.postprocessorInActionDemo=t.e(7681).then(t.t.bind(t,7681,17)),this.maskitoPipeDemo=t.e(9743).then(t.t.bind(t,9743,17)),this.maskExpressionDocPage="/core-concepts/mask-expression",this.overwriteModeDocPage="/core-concepts/overwrite-mode"}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["processors-doc-page"]],decls:124,vars:8,consts:[["header","Processors"],[1,"tui-space_bottom-12"],[1,"tui-space_top-0"],["href","https://github.com/Tinkoff/maskito/blob/main/projects/core/src/lib/types/mask-options.ts","target","_blank","tuiLink",""],["href","https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event","target","_blank","tuiLink",""],["href","https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event","target","_blank","tuiLink",""],[1,"tui-list"],[1,"tui-list__item"],[3,"code"],[1,"tui-space_bottom-6"],[1,"tui-list","tui-list_ordered"],[1,"tui-space_top-1",3,"code"],[1,"tui-space_bottom-0"],["status","warning",1,"tui-space_bottom-4"],[1,"tui-space_top-0","tui-space_bottom-0"],["tuiLink","",3,"routerLink"]],template:function(n,s){1&n&&(e.TgZ(0,"tui-doc-page",0),e.TgZ(1,"section",1),e.TgZ(2,"p",2),e.TgZ(3,"a",3),e.TgZ(4,"code"),e._uU(5,"MaskitoOptions"),e.qZA(),e.qZA(),e._uU(6," have optional parameters "),e.TgZ(7,"code"),e._uU(8,"preprocessors"),e.qZA(),e._uU(9," and "),e.TgZ(10,"code"),e._uU(11,"postprocessors"),e.qZA(),e._uU(12," . These are functions triggered on every user's input ( "),e.TgZ(13,"a",4),e._uU(14," beforeinput "),e.qZA(),e._uU(15," and "),e.TgZ(16,"a",5),e._uU(17," input "),e.qZA(),e._uU(18," events). They provide an opportunity to modify value before\xa0/\xa0after the mask is applied. "),e.qZA(),e.TgZ(19,"section"),e.TgZ(20,"p"),e._uU(21," Preprocessors and postprocessors accept different types of arguments but they have two important similarities: "),e.qZA(),e.TgZ(22,"ul",6),e.TgZ(23,"li",7),e._uU(24," The first argument always contains object with information that you can change. Object with the same properties and updated values can be returned from the processor. It means that you can keep all properties untouched or you can change any or all of these properties. The returned value will be passed into the mask. "),e.qZA(),e.TgZ(25,"li",7),e._uU(26," The rest arguments contain information that can be useful to build some complex logic, but you cannot change it. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(27,"section",1),e.TgZ(28,"h2"),e._uU(29,"What is the element state?"),e.qZA(),e.TgZ(30,"p"),e._uU(31," Before you learn more about processors, you should learn a single prerequisite \u2014 meaning of the term "),e.TgZ(32,"strong"),e._uU(33,'"element\xa0state"'),e.qZA(),e._uU(34," . It describes objects which the following interface: "),e.qZA(),e._UZ(35,"tui-doc-code",8),e.TgZ(36,"p"),e._uU(37," Processors actively use this concept. Developer who writes new processor has direct access to element state of the masked input or textarea. Element state can be read and changed via processors. "),e.qZA(),e.qZA(),e.TgZ(38,"section",1),e.TgZ(39,"h2"),e._uU(40,"Preprocessor"),e.qZA(),e.TgZ(41,"p"),e._uU(42," It is a function that is called "),e.TgZ(43,"strong"),e._uU(44,"before"),e.qZA(),e._uU(45," mask is applied. "),e.qZA(),e.TgZ(46,"p"),e._uU(47," For example, if user types a new character, preprocessor will be called first, and only then value that it returned will be passed into the mask, and finally the mask will accept or reject new typed character and update actual value of the text field. "),e.qZA(),e.TgZ(48,"section",9),e.TgZ(49,"p"),e._uU(50,"Preprocessor accepts two arguments:"),e.qZA(),e.TgZ(51,"ol",10),e.TgZ(52,"li",7),e.TgZ(53,"strong"),e._uU(54," Object with two properties: "),e.TgZ(55,"code"),e._uU(56,"elementState"),e.qZA(),e._uU(57," and "),e.TgZ(58,"code"),e._uU(59,"data"),e.qZA(),e._uU(60," . "),e.qZA(),e._uU(61," Object of the same interface with updated or unchanged properties can be returned from the preprocessor. "),e._UZ(62,"tui-doc-code",11),e.qZA(),e.TgZ(63,"li",7),e._uU(64," Name of the action which triggers current execution. It can be one of the following possible values: "),e._UZ(65,"tui-doc-code",8),e.qZA(),e.qZA(),e.qZA(),e.TgZ(66,"p"),e._uU(67," Preprocessor returns an objects of the same interface as the first argument. "),e.qZA(),e._UZ(68,"tui-doc-code",8),e.qZA(),e.TgZ(69,"section",1),e.TgZ(70,"h2"),e._uU(71,"Postprocessor"),e.qZA(),e.TgZ(72,"p",12),e._uU(73," It is a function that is called "),e.TgZ(74,"strong"),e._uU(75,"after"),e.qZA(),e._uU(76," the mask is applied. When the preprocessor is already called, all mask operations happened and the input's value is about to be updated. You can change everything manually inside a postprocessor. "),e.qZA(),e.TgZ(77,"section",9),e.TgZ(78,"p"),e._uU(79,"Postprocessor accepts two arguments:"),e.qZA(),e.TgZ(80,"ol",10),e.TgZ(81,"li",7),e.TgZ(82,"strong"),e._uU(83,"Element state after mask had been applied."),e.qZA(),e._uU(84," Postprocessor can return updated element state which would then be reflected by the actual text field. "),e.qZA(),e.TgZ(85,"li",7),e.TgZ(86,"strong"),e._uU(87," Initial element state before preprocessors and mask execution. "),e.qZA(),e._uU(88," It is a readonly argument, the past cannot be changed... "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(89,"p"),e._uU(90," Postprocessor returns an objects of the same interface as the first argument. "),e.qZA(),e.TgZ(91,"tui-notification",13),e.TgZ(92,"p",14),e.TgZ(93,"strong"),e._uU(94,"With great power comes great responsibility!"),e.qZA(),e.qZA(),e.TgZ(95,"p",12),e._uU(96," Postprocessor is the final step before input's value update which gives a lot of flexibility. Use postprocessor wisely and return a valid value! "),e.qZA(),e.qZA(),e._UZ(97,"tui-doc-code",8),e.qZA(),e.TgZ(98,"section",1),e.TgZ(99,"h2"),e._uU(100,"maskitoPipe"),e.qZA(),e.TgZ(101,"p"),e._uU(102," The "),e.TgZ(103,"strong"),e._uU(104,"Maskito"),e.qZA(),e._uU(105," team likes code decomposition and promotes it! Don't put all complex logic inside a single processor. Break it into the several independent processors so that each processor implements only a single task. "),e.qZA(),e.TgZ(106,"p"),e._uU(107," Use the built-in "),e.TgZ(108,"code"),e._uU(109,"maskitoPipe"),e.qZA(),e._uU(110," to stack multiple processors of the same type: "),e.qZA(),e._UZ(111,"tui-doc-code",8),e.qZA(),e.TgZ(112,"section"),e.TgZ(113,"h2"),e._uU(114,"Next steps"),e.qZA(),e.TgZ(115,"p"),e._uU(116," The following sections are recommended to explore core concepts further: "),e.qZA(),e.TgZ(117,"ul",6),e.TgZ(118,"li",7),e.TgZ(119,"a",15),e._uU(120," Mask expression "),e.qZA(),e.qZA(),e.TgZ(121,"li",7),e.TgZ(122,"a",15),e._uU(123," Overwrite mode "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n&&(e.xp6(35),e.Q6J("code",s.elementStateDemo),e.xp6(27),e.Q6J("code",s.preprocessorFirstArgDemo),e.xp6(3),e.Q6J("code",s.preprocessorsSecondArgDemo),e.xp6(3),e.Q6J("code",s.preprocessorInActionDemo),e.xp6(29),e.Q6J("code",s.postprocessorInActionDemo),e.xp6(14),e.Q6J("code",s.maskitoPipeDemo),e.xp6(8),e.Q6J("routerLink",s.maskExpressionDocPage),e.xp6(3),e.Q6J("routerLink",s.overwriteModeDocPage))},directives:[r.qo,p.V,r.c0,u.Ls,c.yS],encapsulation:2,changeDetection:0}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[l.ez,r.fV,p.j,u.Hi,c.Bz.forChild((0,r.Ve)(g))]]}),o})()}}]);