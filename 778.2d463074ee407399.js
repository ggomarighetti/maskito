"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[778],{778:($,u,e)=>{e.r(u),e.d(u,{default:()=>M});var h=e(4768),m=e(1760),E=e(7355),F=e(9738),c=e(8832),f=e(8844),p=e(6801);const v={mask:({value:o})=>{const n=Array.from(o.replaceAll("%","")).map(()=>/\d/);return n.length?[...n,"%"]:[/\d/]}};var t=e(2978),x=e(5014);let k=(()=>{var o;class n{constructor(){this.maskitoOptions=v,this.value=""}}return(o=n).\u0275fac=function(s){return new(s||o)},o.\u0275cmp=t.VBU({type:o,selectors:[["postfix-doc-example-1"]],standalone:!0,features:[t.aNF],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["inputmode","tel","tuiTextfieldLegacy","",3,"maskito"]],template:function(s,i){1&s&&(t.j41(0,"tui-input",0),t.bIt("ngModelChange",function(l){return i.value=l}),t.EFF(1," Enter percentage amount "),t.nrm(2,"input",1),t.k0s()),2&s&&(t.xc7("max-width",20,"rem"),t.Y8G("ngModel",i.value),t.R7$(2),t.Y8G("maskito",i.maskitoOptions))},dependencies:[c.YN,c.BC,c.vS,f.u,p.zi,p.mp,p.Ws,x.Bw],encapsulation:2,changeDetection:0}),n})();var r=e(168);const D={mask:/^\$?\d*(\.0{0,2})?$/,postprocessors:[(0,r.Kf)("$"),(0,r.xg)(".00")],plugins:[(0,r.sd)("$.00"),(0,r.A6)("$.00"),(0,r.N_)(o=>[1,o.length-3])]};let P=(()=>{var o;class n{constructor(){this.maskitoOptions=D,this.value=""}}return(o=n).\u0275fac=function(s){return new(s||o)},o.\u0275cmp=t.VBU({type:o,selectors:[["postfix-doc-example-2"]],standalone:!0,features:[t.aNF],decls:3,vars:4,consts:[[3,"ngModel","ngModelChange"],["inputmode","numeric","tuiTextfieldLegacy","",3,"maskito"]],template:function(s,i){1&s&&(t.j41(0,"tui-input",0),t.bIt("ngModelChange",function(l){return i.value=l}),t.EFF(1," Enter price "),t.nrm(2,"input",1),t.k0s()),2&s&&(t.xc7("max-width",20,"rem"),t.Y8G("ngModel",i.value),t.R7$(2),t.Y8G("maskito",i.maskitoOptions))},dependencies:[c.YN,c.BC,c.vS,f.u,p.zi,p.mp,p.Ws,x.Bw],encapsulation:2,changeDetection:0}),n})();var g=e(454);function y(o,n){if(1&o&&(t.EFF(0," This example demonstrates how to create postfix via dynamic "),t.j41(1,"strong")(2,"a",5),t.EFF(3," pattern\xa0mask\xa0expression "),t.k0s()(),t.EFF(4," . Percent symbol is a trailing fixed character, which will be automatically added when user enters the first digit. ")),2&o){const a=t.XpG();t.R7$(2),t.Y8G("routerLink",a.maskExpressionDocPage)}}function C(o,n){if(1&o&&(t.j41(0,"p",6),t.EFF(1," This example demonstrates how to create postfix via "),t.j41(2,"strong")(3,"a",5),t.EFF(4," postprocessor "),t.k0s()(),t.EFF(5," . It provides more flexibility, and you can configure any desired behaviour. You can use built-in "),t.j41(6,"code"),t.EFF(7,"maskitoPostfixPostprocessorGenerator"),t.k0s(),t.EFF(8," or create your own. "),t.k0s(),t.j41(9,"tui-notification",7)(10,"div"),t.EFF(11," Don't forget that "),t.j41(12,"code"),t.EFF(13,"mask"),t.k0s(),t.EFF(14," property should be compatible with a new prefix / postfix! "),t.k0s()()),2&o){const a=t.XpG();t.R7$(3),t.Y8G("routerLink",a.processorsDocPage)}}const M=(()=>{var o;class n{constructor(){this.maskExpressionDocPage="/".concat(m.$.MaskExpression),this.processorsDocPage="/".concat(m.$.Processors),this.patternMaskApproachExample1={[m.w.MaskitoOptions]:e.e(8127).then(e.t.bind(e,8127,17))},this.postprocessorApproachExample2={[m.w.MaskitoOptions]:e.e(1951).then(e.t.bind(e,1951,17))}}}return(o=n).\u0275fac=function(s){return new(s||o)},o.\u0275cmp=t.VBU({type:o,selectors:[["postfix-doc"]],standalone:!0,features:[t.aNF],decls:13,vars:4,consts:[["header","With postfix","package","Recipes"],["id","by-pattern-mask-expression","heading","By pattern mask expression",3,"content","description"],["patternMaskApproachDescription",""],["id","by-postprocessor","heading","By postprocessor",3,"content","description"],["postprocessorApproachDescription",""],["tuiLink","",3,"routerLink"],[1,"tui-space_top-0"],["appearance","warning","size","m"]],template:function(s,i){if(1&s&&(t.j41(0,"tui-doc-page",0),t.EFF(1," There are two approaches to add "),t.j41(2,"strong"),t.EFF(3,"postfix"),t.k0s(),t.EFF(4," for masked input. Every approach has its own behaviour and requires basic understanding of different core concepts. "),t.j41(5,"tui-doc-example",1),t.DNE(6,y,5,1,"ng-template",null,2,t.C5r),t.nrm(8,"postfix-doc-example-1"),t.k0s(),t.j41(9,"tui-doc-example",3),t.DNE(10,C,15,1,"ng-template",null,4,t.C5r),t.nrm(12,"postfix-doc-example-2"),t.k0s()()),2&s){const d=t.sdS(7),l=t.sdS(11);t.R7$(5),t.Y8G("content",i.patternMaskApproachExample1)("description",d),t.R7$(4),t.Y8G("content",i.postprocessorApproachExample2)("description",l)}},dependencies:[k,P,h.Wk,g.FS,g.e3,E.Jc,F.wS],encapsulation:2,changeDetection:0}),n})()}}]);