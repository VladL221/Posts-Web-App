"use strict";(self.webpackChunkmean_course=self.webpackChunkmean_course||[]).push([[124],{3124:(O,p,r)=>{r.r(p),r.d(p,{AuthModule:()=>F});var u=r(8583),i=r(665),_=r(4786),l=r(5727),t=r(3018),c=r(384),g=r(3738),f=r(4885),m=r(8295),d=r(9983),h=r(1095);function v(n,e){1&n&&t._UZ(0,"mat-spinner")}function S(n,e){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter a valid email."),t.qZA())}function Z(n,e){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter a valid password."),t.qZA())}function A(n,e){1&n&&(t.TgZ(0,"button",9),t._uU(1,"Login"),t.qZA())}function C(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"form",2,3),t.NdJ("submit",function(){t.CHM(o);const s=t.MAs(1);return t.oxw().onLogin(s)}),t.TgZ(2,"mat-form-field"),t._UZ(3,"input",4,5),t.YNc(5,S,2,0,"mat-error",0),t.qZA(),t.TgZ(6,"mat-form-field"),t._UZ(7,"input",6,7),t.YNc(9,Z,2,0,"mat-error",0),t.qZA(),t.YNc(10,A,2,0,"button",8),t.qZA()}if(2&n){const o=t.MAs(4),a=t.MAs(8),s=t.oxw();t.xp6(5),t.Q6J("ngIf",o.invalid),t.xp6(4),t.Q6J("ngIf",a.invalid),t.xp6(1),t.Q6J("ngIf",!s.isLoading)}}function L(n,e){1&n&&t._UZ(0,"mat-spinner")}function x(n,e){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter a valid email."),t.qZA())}function M(n,e){1&n&&(t.TgZ(0,"mat-error"),t._uU(1,"Please enter a valid password."),t.qZA())}function I(n,e){1&n&&(t.TgZ(0,"button",9),t._uU(1,"Signup"),t.qZA())}function b(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"form",2,3),t.NdJ("submit",function(){t.CHM(o);const s=t.MAs(1);return t.oxw().onSignup(s)}),t.TgZ(2,"mat-form-field"),t._UZ(3,"input",4,5),t.YNc(5,x,2,0,"mat-error",0),t.qZA(),t.TgZ(6,"mat-form-field"),t._UZ(7,"input",6,7),t.YNc(9,M,2,0,"mat-error",0),t.qZA(),t.YNc(10,I,2,0,"button",8),t.qZA()}if(2&n){const o=t.MAs(4),a=t.MAs(8),s=t.oxw();t.xp6(5),t.Q6J("ngIf",o.invalid),t.xp6(4),t.Q6J("ngIf",a.invalid),t.xp6(1),t.Q6J("ngIf",!s.isLoading)}}const y=[{path:"login",component:(()=>{class n{constructor(o){this.authService=o,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(o=>{this.isLoading=!1})}onLogin(o){o.invalid||(this.isLoading=!0,this.authService.login(o.value.email,o.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(c.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["loginForm","ngForm"],["name","email","matInput","","ngModel","","type","email","placeholder","E-mail","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","required","","placeholder","Password"],["passwordInput","ngModel"],["mat-raised-button","","color","primary","type","submit",4,"ngIf"],["mat-raised-button","","color","primary","type","submit"]],template:function(o,a){1&o&&(t.TgZ(0,"mat-card"),t.YNc(1,v,1,0,"mat-spinner",0),t.YNc(2,C,11,3,"form",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",a.isLoading),t.xp6(1),t.Q6J("ngIf",!a.isLoading))},directives:[g.a8,u.O5,f.$g,i._Y,i.JL,i.F,m.KE,d.Nt,i.Fj,i.JJ,i.On,i.Q7,i.on,m.TO,h.lW],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),n})()},{path:"signup",component:(()=>{class n{constructor(o){this.authService=o,this.isLoading=!1}ngOnInit(){this.authStatusSub=this.authService.getAuthStatusListener().subscribe(o=>{this.isLoading=!1})}onSignup(o){o.invalid||(this.isLoading=!0,this.authService.createUser(o.value.email,o.value.password))}ngOnDestroy(){this.authStatusSub.unsubscribe()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(c.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["signupForm","ngForm"],["name","email","matInput","","ngModel","","type","email","placeholder","E-mail","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","required","","placeholder","Password"],["passwordInput","ngModel"],["mat-raised-button","","color","primary","type","submit",4,"ngIf"],["mat-raised-button","","color","primary","type","submit"]],template:function(o,a){1&o&&(t.TgZ(0,"mat-card"),t.YNc(1,L,1,0,"mat-spinner",0),t.YNc(2,b,11,3,"form",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",a.isLoading),t.xp6(1),t.Q6J("ngIf",!a.isLoading))},directives:[g.a8,u.O5,f.$g,i._Y,i.JL,i.F,m.KE,d.Nt,i.Fj,i.JJ,i.On,i.Q7,i.on,m.TO,h.lW],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),n})()}];let J=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(y)],l.Bz]}),n})(),F=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.ez,_.h,i.u5,J]]}),n})()}}]);