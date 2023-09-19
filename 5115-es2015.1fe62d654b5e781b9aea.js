"use strict";(self.webpackChunkmaskito=self.webpackChunkmaskito||[]).push([[5115],{70997:function(e,t,n){n.d(t,{fV:function(){return o}});var i=n(74788),a=n(41823);let o=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[a.JF,a.mG,a.Lx,a.Lq,a.u4]}),e})()},35115:function(e,t,n){n.r(t),n.d(t,{PluginsDocPageModule:function(){return U}});var i=n(12057),a=n(87862),o=n(86561),r=n(52494),s=n(70997),c=n(44427),u=n(82847),l=n(60885),p=n(21673),d=n(13805),m=n(14707),g=n(74788),f=n(41823),h=n(64916),v={mask:/^\d{0,3}$/,plugins:[e=>{const t=()=>{const t=e.value;e.addEventListener("beforeinput",n=>{n.defaultPrevented&&t===e.value&&e.dispatchEvent(new CustomEvent("maskitoReject",{bubbles:!0}))},{once:!0})};return e.addEventListener("beforeinput",t,!0),()=>e.removeEventListener("beforeinput",t,!0)}]},k=n(94853),b=n(49510),j=n(47258);let Z=(()=>{class e{constructor(){this.maskitoOptions=Object.assign(Object.assign({},v),{plugins:[h.Bb]}),this.value="",this.reject=-1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=g.Xpm({type:e,selectors:[["plugins-reject-doc-example-1"]],decls:3,vars:4,consts:[[1,"input",3,"ngModel","ngModelChange","maskitoReject"],["tuiTextfield","",3,"maskito"]],template:function(e,t){1&e&&(g.TgZ(0,"tui-input",0),g.NdJ("ngModelChange",function(e){return t.value=e})("maskitoReject",function(){return t.reject=t.reject+1}),g._uU(1," CVC "),g._UZ(2,"input",1),g.qZA()),2&e&&(g.Udp("animation-name","reject-"+t.reject%2),g.Q6J("ngModel",t.value),g.xp6(2),g.Q6J("maskito",t.maskitoOptions))},directives:[p.K3,p.wU,a.JJ,a.On,k.MB,b.F,j.r],styles:["@keyframes reject-0{0%{box-shadow:0 0 var(--tui-error-fill)}to{box-shadow:0 0 1rem var(--tui-error-bg)}}@keyframes reject-1{0%{box-shadow:0 0 var(--tui-error-fill)}to{box-shadow:0 0 1rem var(--tui-error-bg)}}.input[_ngcontent-%COMP%]{max-width:20rem;animation:.3s 1}"],changeDetection:0}),e})();var x=n(56119);let w=(()=>{class e{constructor(){this.rejectExample={[m.C.MaskitoOptions]:n.e(3360).then(n.t.bind(n,93360,17))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=g.Xpm({type:e,selectors:[["plugins-mode-doc-page"]],decls:15,vars:1,consts:[["header","Plugins"],[1,"tui-space_top-0"],["id","reject","heading","Visualize rejected characters",3,"content"],[1,"tui-space_bottom-3"]],template:function(e,t){1&e&&(g.TgZ(0,"tui-doc-page",0),g.TgZ(1,"p",1),g.TgZ(2,"strong"),g._uU(3,"Plugins"),g.qZA(),g._uU(4," are functions that are called with input/textarea element and mask options as arguments upon mask initialization. They can optionally return cleanup logic and allow you to extend mask with arbitrary additional behavior. "),g.qZA(),g.TgZ(5,"tui-doc-example",2),g.TgZ(6,"tui-notification",3),g._uU(7," This plugin is available as "),g.TgZ(8,"code"),g._uU(9,"maskitoRejectEvent"),g.qZA(),g._uU(10," in "),g.TgZ(11,"code"),g._uU(12,"@maskito/kit"),g.qZA(),g.qZA(),g._UZ(13,"plugins-reject-doc-example-1"),g.qZA(),g._UZ(14,"next-steps"),g.qZA()),2&e&&(g.xp6(5),g.Q6J("content",t.rejectExample))},directives:[f.qo,f.f2,l.L,Z,x.R],encapsulation:2,changeDetection:0}),e})(),U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g.oAB({type:e}),e.\u0275inj=g.cJS({imports:[[i.ez,a.u5,r.U5,u.j,p.Qf,l.H,d.L,s.fV,o.Bz.forChild((0,c.Ve)(w))]]}),e})()}}]);