"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6973],{6973:(Q,b,r)=>{r.d(b,{IU:()=>H,Ih:()=>S,bC:()=>X});var t=r(2978),M=r(811),v=r(7434),P=r(2734),x=r(9131),_=r(9702),u=r(5014),h=r(4198),g=r(4225),m=r(1623),T=r(453),d=r(6610),c=r(8832),C=r(599),O=r(5852),E=r(5173),f=r(4712),y=r(8395);const z=["focusableElement"];function D(e,a){1&e&&t.eu8(0)}function I(e,a){if(1&e&&(t.j41(0,"div",19),t.EFF(1),t.k0s()),2&e){const o=t.XpG();t.R7$(1),t.Lme(" ",o.value.length,"/",o.maxLength," ")}}function w(e,a){if(1&e&&(t.j41(0,"div",20),t.SdG(1,1),t.k0s()),2&e){const o=t.XpG();t.AVh("t-placeholder_raised",o.placeholderRaised)}}function k(e,a){1&e&&t.nrm(0,"tui-icon",23),2&e&&t.Y8G("icon",a.polymorpheusOutlet.toString())}const p=function(e){return{$implicit:e}};function R(e,a){if(1&e&&(t.j41(0,"div",21),t.DNE(1,k,1,1,"tui-icon",22),t.k0s()),2&e){const o=t.XpG();t.R7$(1),t.Y8G("polymorpheusOutlet",o.iconLeftContent)("polymorpheusOutletContext",t.eq3(2,p,o.size))}}function G(e,a){1&e&&t.nrm(0,"tui-icon",25),2&e&&t.Y8G("icon",a.polymorpheusOutlet)}function L(e,a){if(1&e&&(t.qex(0),t.DNE(1,G,1,1,"tui-icon",24),t.bVm()),2&e){const o=t.XpG();t.R7$(1),t.Y8G("polymorpheusOutlet",o.controller.customContent)}}function B(e,a){if(1&e){const o=t.RV6();t.j41(0,"tui-icon",27),t.bIt("click.stop",function(){t.eBV(o);const n=t.XpG(2);return t.Njj(n.onValueChange(""))}),t.k0s()}2&e&&t.Y8G("icon",a.polymorpheusOutlet.toString())}function A(e,a){if(1&e&&(t.qex(0),t.DNE(1,B,1,1,"tui-icon",26),t.bVm()),2&e){const o=t.XpG();t.R7$(1),t.Y8G("polymorpheusOutlet",o.iconCleaner)("polymorpheusOutletContext",t.eq3(2,p,o.size))}}function W(e,a){if(1&e&&t.nrm(0,"tui-tooltip",28),2&e){const o=t.XpG();t.Y8G("content",null==o.hintOptions?null:o.hintOptions.content)("describeId",o.id)}}function Y(e,a){1&e&&t.nrm(0,"tui-icon",23),2&e&&t.Y8G("icon",a.polymorpheusOutlet.toString())}function F(e,a){if(1&e&&(t.j41(0,"div",29),t.DNE(1,Y,1,1,"tui-icon",22),t.k0s()),2&e){const o=t.XpG();t.R7$(1),t.Y8G("polymorpheusOutlet",o.iconContent)("polymorpheusOutletContext",t.eq3(2,p,o.size))}}const U=[[["textarea"]],"*"],V=function(){return{standalone:!0}},K=["textarea","*"];let H=(()=>{var e;class a extends _.Er{constructor(){super(...arguments),this.options=(0,t.WQX)(P.KB),this.isIOS=(0,t.WQX)(M.mg),this.controller=(0,t.WQX)(g.xX),this.hintOptions=(0,t.WQX)(x.bk,{optional:!0}),this.rows=20,this.maxLength=null,this.expandable=!1}get nativeFocusableElement(){var i,n;return this.computedDisabled?null:(null==(i=this.textfield)?void 0:i.nativeElement)||(null==(n=this.focusableElement)?void 0:n.nativeElement)||null}get focused(){return(0,v.X)(this.nativeFocusableElement)}get computeMaxHeight(){return this.expandable?this.rows*this.lineHeight:null}onValueChange(i){this.value=i}get labelOutside(){return"table"===this.options.appearance()||this.controller.labelOutside}get size(){return this.controller.size}get borderStart(){return this.iconLeftContent?u.HW[this.size]:0}get borderEnd(){return(0,T.f3)(!!this.iconContent,this.hasCleaner,this.hasTooltip,this.hasCustomContent,this.size)}get hasTooltip(){var i;return!(null==(i=this.hintOptions)||!i.content)&&(this.controller.options.hintOnDisabled||!this.computedDisabled)}get hasValue(){return""!==this.value}get hasCounter(){return!!this.maxLength&&this.interactive}get appearance(){return"table"===this.options.appearance()?"table":this.controller.appearance}get hasCleaner(){return this.controller.cleaner&&this.hasValue&&this.interactive}get hasPlaceholder(){return this.placeholderRaisable||!this.hasValue&&!this.hasExampleText}get hasCustomContent(){return!!this.controller.customContent}get iconLeftContent(){return this.controller.iconStart}get iconContent(){return this.controller.icon}get iconCleaner(){return this.controller.options.iconCleaner}get hasExampleText(){var i;return!(null==(i=this.textfield)||!i.nativeElement.placeholder)&&this.focused&&!this.hasValue&&!this.readOnly}get placeholderRaised(){return this.placeholderRaisable&&(this.computedFocused&&!this.readOnly||this.hasValue)}get fittedContent(){return this.value.slice(0,this.maxLength||1/0)}get extraContent(){return this.value.slice(this.maxLength||1/0)}onFocused(i){this.updateFocused(i)}onMouseDown(i){i.target!==this.nativeFocusableElement&&(i.preventDefault(),this.nativeFocusableElement&&this.nativeFocusableElement.focus())}getFallbackValue(){return""}get lineHeight(){return"m"===this.controller.size?20:24}get placeholderRaisable(){return"s"!==this.size&&!this.controller.labelOutside}}return(e=a).\u0275fac=function(){let o;return function(n){return(o||(o=t.xGo(e)))(n||e)}}(),e.\u0275cmp=t.VBU({type:e,selectors:[["tui-textarea"]],contentQueries:function(i,n,s){if(1&i&&t.wni(s,u.Bw,5,t.aKT),2&i){let l;t.mGM(l=t.lsd())&&(n.textfield=l.first)}},viewQuery:function(i,n){if(1&i&&t.GBs(z,5),2&i){let s;t.mGM(s=t.lsd())&&(n.focusableElement=s.first)}},hostVars:17,hostBindings:function(i,n){1&i&&t.bIt("focusin",function(){return n.onFocused(!0)})("focusout",function(){return n.onFocused(!1)}),2&i&&(t.BMQ("data-size",n.size),t.xc7("--border-end",n.borderEnd,"rem")("--border-start",n.borderStart,"rem"),t.AVh("_ios",n.isIOS)("_expandable",n.expandable)("_has-counter",n.hasCounter)("_label-outside",n.labelOutside)("_has-tooltip",n.hasTooltip)("_has-value",n.hasValue))},inputs:{rows:"rows",maxLength:"maxLength",expandable:"expandable"},features:[t.Jv_([(0,m.Jr)(e),(0,_.SN)(e),g.ZW]),t.Vt3],ngContentSelectors:K,decls:23,vars:27,consts:[[4,"ngIf"],["automation-id","tui-text-area__wrapper","tuiWrapper","",1,"t-outline",3,"appearance","disabled","focus","hover","invalid","readOnly"],["automation-id","tui-text-area__counter","class","t-counter",4,"ngIf"],[1,"t-content",3,"mousedown"],[1,"t-wrapper"],["automation-id","tui-text-area__placeholder","class","t-placeholder",3,"t-placeholder_raised",4,"ngIf"],["automation-id","tui-text-area__scrollbar",1,"t-box"],[1,"t-input-wrapper"],[1,"t-relative"],["aria-hidden","true",1,"t-pseudo-content"],[3,"textContent"],[1,"t-pseudo-content__extra",3,"textContent"],[1,"t-caret"],["automation-id","tui-text-area__native",1,"t-input",3,"disabled","id","ngModelOptions","readOnly","tabIndex","ngModel","ngModelChange"],["focusableElement",""],[1,"t-icons"],["class","t-icon t-icon_left t-textfield-icon",4,"ngIf"],["automation-id","tui-text-area__tooltip",3,"content","describeId",4,"ngIf"],["class","t-icon t-textfield-icon",4,"ngIf"],["automation-id","tui-text-area__counter",1,"t-counter"],["automation-id","tui-text-area__placeholder",1,"t-placeholder"],[1,"t-icon","t-icon_left","t-textfield-icon"],["tuiAppearance","icon",3,"icon",4,"polymorpheusOutlet","polymorpheusOutletContext"],["tuiAppearance","icon",3,"icon"],[3,"icon",4,"polymorpheusOutlet"],[3,"icon"],["tuiAppearance","icon","class","t-cleaner",3,"icon","click.stop",4,"polymorpheusOutlet","polymorpheusOutletContext"],["tuiAppearance","icon",1,"t-cleaner",3,"icon","click.stop"],["automation-id","tui-text-area__tooltip",3,"content","describeId"],[1,"t-icon","t-textfield-icon"]],template:function(i,n){1&i&&(t.NAR(U),t.DNE(0,D,1,0,"ng-container",0),t.nI1(1,"async"),t.j41(2,"div",1),t.DNE(3,I,2,2,"div",2),t.j41(4,"label",3),t.bIt("mousedown",function(l){return n.onMouseDown(l)}),t.j41(5,"div",4),t.DNE(6,w,2,2,"div",5),t.j41(7,"tui-scrollbar",6)(8,"div",7)(9,"div",8)(10,"div",9),t.nrm(11,"span",10)(12,"span",11)(13,"span",12),t.k0s(),t.j41(14,"textarea",13,14),t.bIt("ngModelChange",function(l){return n.value=l}),t.k0s(),t.SdG(16),t.k0s()()()(),t.j41(17,"div",15),t.DNE(18,R,2,4,"div",16),t.DNE(19,L,2,1,"ng-container",0),t.DNE(20,A,2,4,"ng-container",0),t.DNE(21,W,1,2,"tui-tooltip",17),t.DNE(22,F,2,4,"div",18),t.k0s()()()),2&i&&(t.Y8G("ngIf",t.bMT(1,24,null==n.hintOptions?null:n.hintOptions.change$)),t.R7$(2),t.Y8G("appearance",n.appearance)("disabled",n.disabled)("focus",n.computedFocused)("hover",n.pseudoHover)("invalid",n.computedInvalid)("readOnly",n.readOnly),t.R7$(1),t.Y8G("ngIf",n.hasCounter),t.R7$(3),t.Y8G("ngIf",n.hasPlaceholder),t.R7$(1),t.xc7("max-height",n.computeMaxHeight,"px"),t.R7$(4),t.Y8G("textContent",n.fittedContent||(null==n.nativeFocusableElement?null:n.nativeFocusableElement.placeholder)),t.R7$(1),t.Y8G("textContent",n.extraContent),t.R7$(2),t.Y8G("disabled",n.computedDisabled)("id",n.id)("ngModelOptions",t.lJ4(26,V))("readOnly",n.readOnly)("tabIndex",n.computedFocusable?0:-1)("ngModel",n.value),t.R7$(4),t.Y8G("ngIf",n.iconLeftContent),t.R7$(1),t.Y8G("ngIf",n.hasCustomContent),t.R7$(1),t.Y8G("ngIf",n.hasCleaner),t.R7$(1),t.Y8G("ngIf",n.hasTooltip),t.R7$(1),t.Y8G("ngIf",n.iconContent))},dependencies:[d.bT,c.me,c.BC,c.vS,C.N0,O.x,h.l,E.xr,f.q,y.bC,d.Jj],styles:["[_nghost-%COMP%]{position:relative;z-index:0;display:flex;flex-direction:column;min-block-size:var(--tui-textarea-height);border-radius:var(--tui-radius-m);color:var(--tui-text-primary)}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}[data-size=s][_nghost-%COMP%]{--tui-height: var(--tui-height-s);--tui-textarea-height: 4.5625rem;font:var(--tui-font-text-s)}[data-size=m][_nghost-%COMP%]{--tui-height: var(--tui-height-m);--tui-textarea-height: 5.5rem;font:var(--tui-font-text-s)}[data-size=l][_nghost-%COMP%]{--tui-height: var(--tui-height-l);--tui-textarea-height: 6.75rem;font:var(--tui-font-text-m)}[data-size=m]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 6.625rem}[data-size=l]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 7.875rem}@supports (-webkit-hyphens: none){[_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%], [_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{text-wrap:balance}}.t-outline[_ngcontent-%COMP%]{min-block-size:inherit}.t-content[_ngcontent-%COMP%]{display:block;margin-top:0;margin-bottom:0;min-block-size:inherit;box-sizing:border-box;overflow:hidden;cursor:text}._disabled[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{cursor:auto;opacity:var(--tui-disabled-opacity)}[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:1px;right:0;min-block-size:auto}._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1.6875rem}._label-outside._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1rem}.t-wrapper[_ngcontent-%COMP%]{position:relative;inline-size:100%;block-size:100%;min-block-size:inherit;box-sizing:border-box;padding:calc((var(--tui-height) - 1.25rem) / 2) 0}[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) 0}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.25rem) / 2) 0}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.625rem) / 2) 0}table[data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-bottom:.75rem}table[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-bottom:1rem}.t-input-wrapper[_ngcontent-%COMP%]{min-block-size:inherit;inline-size:100%;flex:1}.t-relative[_ngcontent-%COMP%]{position:relative;min-block-size:inherit}.t-box[_ngcontent-%COMP%]{display:flex;min-block-size:calc(100% - 1rem);inline-size:100%}[_nghost-%COMP%]:not(._expandable)   .t-box[_ngcontent-%COMP%]{block-size:calc(100% - 1rem)}[_nghost-%COMP%]:not(._expandable)._label-outside   .t-box[_ngcontent-%COMP%]{block-size:100%}._has-counter._expandable[_nghost-%COMP%]   .t-box[_ngcontent-%COMP%]{margin-bottom:1.25rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-block-start:1rem solid transparent}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-block-start:1.25rem solid transparent}.t-pseudo-content[_ngcontent-%COMP%]{white-space:pre-wrap;overflow-wrap:break-word;word-break:keep-all;pointer-events:none;color:transparent;overflow:hidden;border:0 solid transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0)}[data-size=s][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 1rem}.t-pseudo-content__extra[_ngcontent-%COMP%]{background-color:var(--tui-status-negative-pale)}.t-input[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;-webkit-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;inline-size:100%;block-size:100%;box-sizing:border-box;resize:none;overflow:hidden;outline:none;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0)}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{-webkit-text-fill-color:var(--tui-text-primary)!important;border-color:var(--tui-service-autofill-background);box-shadow:0 0 0 100rem var(--tui-service-autofill-background) inset!important}.t-input[_ngcontent-%COMP%]:not(:last-of-type){display:none}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-tertiary);opacity:0}._focused[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:not(:read-only)::placeholder{opacity:1}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 .75rem;font:var(--tui-font-text-s)}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 1rem;font:var(--tui-font-text-m)}@supports (-webkit-marquee-repetition: infinite) and (object-fit: fill){._ios[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding-left:.8125rem}}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;inline-size:100%;-webkit-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-secondary);pointer-events:none;will-change:transform;transform:translateY(0);position:absolute;top:calc(var(--tui-height) / 2 - .625rem);left:0;max-inline-size:100%;border:0 solid transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);box-sizing:border-box}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-text-negative)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-tertiary)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-primary)}[data-size=s][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=m][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 1rem}._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{overflow:initial;block-size:auto;white-space:initial}.t-icons[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;display:flex;justify-content:flex-end;pointer-events:none;padding:calc((var(--tui-height) - 1.5rem) / 2) 1rem}[data-size=m][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) .625rem}.t-icons[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){margin-inline-start:.25rem}.t-icon[_ngcontent-%COMP%]{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}.t-icon_left[_ngcontent-%COMP%]{margin-inline-end:auto}.t-cleaner[_ngcontent-%COMP%]{position:relative;display:flex;inline-size:1.5rem;block-size:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto;border-width:.25rem}._readonly[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%]{pointer-events:none}.t-caret[_ngcontent-%COMP%]{display:inline-block;block-size:1rem;inline-size:0}.t-counter[_ngcontent-%COMP%]{position:absolute;right:.75rem;bottom:.5rem;font:var(--tui-font-text-s);pointer-events:none;margin-top:auto;text-align:end;color:var(--tui-text-tertiary)}._readonly[_nghost-%COMP%]   .t-textfield-icon[_ngcontent-%COMP%]     [tuiAppearance][data-appearance=icon]{pointer-events:none}@media (hover: hover) and (pointer: fine){[_nghost-%COMP%]:not(._readonly):not(._disabled):hover   .t-textfield-icon[_ngcontent-%COMP%]     [tuiAppearance][data-appearance=icon]:after{color:var(--tui-text-secondary)}}"],changeDetection:0}),a})(),S=(()=>{var e;class a extends _.aX{onValueChange(i){this.host.onValueChange(i)}}return(e=a).\u0275fac=function(){let o;return function(n){return(o||(o=t.xGo(e)))(n||e)}}(),e.\u0275dir=t.FsC({type:e,selectors:[["tui-textarea"]],features:[t.Jv_([(0,m.Sc)(e)]),t.Vt3]}),a})(),X=(()=>{var e;class a{}return(e=a).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[d.MD,c.YN,C.N0,O.q,h.E,u.Rp,f.q]}),a})()}}]);