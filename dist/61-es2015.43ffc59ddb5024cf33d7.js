(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"/D9e":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("tk/3"),o=r("lJxs"),i=r("sXtk"),s=r("fXoL");let a=(()=>{class e{constructor(e,t){this.handler=e,this.envService=t,this.baseUrl="",this.http=new n.c(e),this.baseUrl=t.backend}upload(e,t="file"){var r=new FormData;return r.append("file",e),this.http.post(this.baseUrl+"/fileupload/"+t,r).pipe(Object(o.a)(e=>e.fileName))}}return e.\u0275fac=function(t){return new(t||e)(s.Xb(n.b),s.Xb(i.a))},e.\u0275prov=s.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},TBb5:function(e,t,r){"use strict";r.r(t),r.d(t,"UserProfileModule",(function(){return D}));var n=r("ofXK"),o=r("tyNb"),i=r("3Pt+"),s=r("/D9e"),a=r("Vvus"),c=r("+Kgr"),l=r("Y0L5"),m=r("sXtk"),d=r("fXoL"),u=r("dNgK"),b=r("b6Qw"),p=r("XiUz"),h=r("/t3+"),f=r("bTqV"),g=r("Qu3c"),w=r("NFeN"),x=r("Wp6s"),P=r("0IaG"),y=r("kmnG"),S=r("qFsG");const C=["profilePic"];function M(e,t){1&e&&(d.Tb(0,"mat-error"),d.Rc(1," Username required "),d.Sb())}function T(e,t){1&e&&(d.Tb(0,"mat-error"),d.Rc(1," Alphabets, Numbers and spaces only allowed "),d.Sb())}function O(e,t){1&e&&(d.Tb(0,"mat-error"),d.Rc(1," Email required "),d.Sb())}function v(e,t){1&e&&(d.Tb(0,"mat-error"),d.Rc(1," Enter Valid Email Id "),d.Sb())}function I(e,t){1&e&&(d.Tb(0,"mat-error"),d.Rc(1," First name required "),d.Sb())}function N(e,t){1&e&&(d.Tb(0,"mat-error"),d.Rc(1," Alphabets, Numbers and spaces only allowed "),d.Sb())}function _(e,t){1&e&&(d.Tb(0,"mat-error"),d.Rc(1," Last name required "),d.Sb())}function U(e,t){1&e&&(d.Tb(0,"mat-error"),d.Rc(1," Alphabets, Numbers and spaces only allowed "),d.Sb())}function k(e,t){if(1&e&&(d.Tb(0,"mat-hint",37),d.Rc(1),d.Sb()),2&e){const e=d.fc();d.Cb(1),d.Tc(" ",e.errorMessage," ")}}function F(e,t){1&e&&(d.Tb(0,"mat-icon"),d.Rc(1,"visibility"),d.Sb())}function R(e,t){1&e&&(d.Tb(0,"mat-icon"),d.Rc(1,"visibility_off"),d.Sb())}function L(e,t){1&e&&(d.Tb(0,"mat-error"),d.Rc(1,"Password should contain 1 Uppercase, 1 Special character and minimum 8 charaters long."),d.Sb())}function q(e,t){1&e&&(d.Tb(0,"mat-icon"),d.Rc(1,"visibility"),d.Sb())}function V(e,t){1&e&&(d.Tb(0,"mat-icon"),d.Rc(1,"visibility_off"),d.Sb())}function z(e,t){1&e&&(d.Tb(0,"mat-error"),d.Rc(1,"Password should contain 1 Uppercase, 1 Special character and minimum 8 charaters long."),d.Sb())}const E=[{path:"",component:(()=>{class e{constructor(e,t,r,n,o,i,s,a,c){this.fb=e,this.fileService=t,this.ownerService=r,this.cd=n,this.snackbar=o,this.authenticationService=i,this.cookieService=s,this.loginReportService=a,this.envService=c,this.fileSize=0,this.baseUrl="",this.attachment="",this.userName="",this.firstName="",this.lastName="",this.role="",this.isUploadSuccess=!0,this.errorMessage="",this.newPasswordInputType="password",this.newPasswordVisible=!1,this.confirmPasswordInputType="password",this.confirmPasswordVisible=!1,this.userId=this.cookieService.get("userId"),this.baseUrl=c.backendForFiles,this.fileSize=Math.floor(c.MaxBytes/1e6)}ngOnInit(){this.userId&&this.getUserDeatils(this.userId),this.groupForm=this.fb.group({profileFile:[null,i.y.compose([i.y.required])],username:[null,i.y.compose([i.y.required])],email:[null,i.y.compose([i.y.required])],firstname:[null,i.y.compose([i.y.required])],lastname:[null,i.y.compose([i.y.required])],role:[null,i.y.compose([i.y.required])]}),this.groupForm.controls.username.disable(),this.groupForm.controls.email.disable(),this.groupForm.controls.role.disable(),this.groupForm.controls.firstname.disable(),this.groupForm.controls.lastname.disable(),this.groupPassword=this.fb.group({newPassword:[null,i.y.compose([i.y.required,i.y.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-zd$@$!%*#?&].{8,}")])],confirmPassword:[null,i.y.compose([i.y.required,i.y.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-zd$@$!%*#?&].{8,}")])]}),this.image="assets/img/avatars/two.png"}uploadPhoto(){var e=this.profilePic.nativeElement;this.isUploadSuccess=!1,this.errorMessage="",this.image="assets/img/avatars/two.png";let t=e.files[0].name;t.substring(t.lastIndexOf(".")+1),this.fileService.upload(e.files[0],"image").subscribe({next:e=>{this.attachment=e,this.image=this.baseUrl+"/uploads/"+this.attachment,this.isUploadSuccess=!0},error:e=>{this.isUploadSuccess=!1,this.errorMessage=null==e.error.message?e.error.Message:e.error.message,"Request body too large."==this.errorMessage&&(this.errorMessage="Max. allowed File size is "+this.fileSize+"MB. Please upload file with smaller size.")}})}saveData(){this.authenticationService.updateUserDetailInformation({id:this.userId,email:this.email,username:this.userName,image:this.attachment,role:this.role}).subscribe({next:e=>{"Success"===e.status?(this.notificationMessage("User information updated successfully","green-snackbar"),this.attachment&&this.loginReportService.setIsProfiledUser(this.attachment)):this.notificationMessage("User information updation failed","red-snackbar")},error:e=>{this.notificationMessage("User information updation failed","red-snackbar")}})}resetPassword(){this.newPassword===this.confirmPassword?this.authenticationService.updateUserPassword({id:this.userId,userName:this.userName,email:this.email,token:"",password:this.confirmPassword}).subscribe({next:e=>{"Success"===e.status?this.notificationMessage("User password reset successfully","green-snackbar"):this.notificationMessage("User password reset failed","red-snackbar")},error:e=>{this.notificationMessage("User password reset failed","red-snackbar")}}):this.notificationMessage("User password does not  match","red-snackbar")}getUserDeatils(e){this.ownerService.getUserDeatils(e).subscribe({next:e=>{e?(this.image=""==e.photo?"assets/img/avatars/two.png":this.baseUrl+"/uploads/"+e.photo,this.firstName=e.firstName,this.lastName=e.lastName,this.userName=e.accountNumber,this.email=e.email,this.role=e.role):(this.image="",this.firstName="",this.lastName="",this.userName="",this.email="",this.role="")},error:e=>{this.notificationMessage("user details not found","red-snackbar")}})}notificationMessage(e,t){this.snackbar.open(e,null,{duration:5e3,verticalPosition:"top",horizontalPosition:"end",panelClass:[t]})}toggleNewPasswordVisibility(){this.newPasswordVisible?(this.newPasswordInputType="password",this.newPasswordVisible=!1,this.cd.markForCheck()):(this.newPasswordInputType="text",this.newPasswordVisible=!0,this.cd.markForCheck())}toggleConfirmPasswordVisibility(){this.confirmPasswordVisible?(this.confirmPasswordInputType="password",this.confirmPasswordVisible=!1,this.cd.markForCheck()):(this.confirmPasswordInputType="text",this.confirmPasswordVisible=!0,this.cd.markForCheck())}}return e.\u0275fac=function(t){return new(t||e)(d.Nb(i.f),d.Nb(s.a),d.Nb(a.a),d.Nb(d.h),d.Nb(u.b),d.Nb(c.a),d.Nb(b.a),d.Nb(l.a),d.Nb(m.a))},e.\u0275cmp=d.Hb({type:e,selectors:[["fury-userprofile"]],viewQuery:function(e,t){var r;1&e&&d.Vc(C,!0),2&e&&d.zc(r=d.cc())&&(t.profilePic=r.first)},decls:93,vars:34,consts:[["mode","card"],["fxLayout","column",1,"content"],[2,"padding","20px","margin-top","-28px"],["color","primary",1,"position-fixed",2,"width","100%"],["src","assets/img/fav-icon.png",1,"img-style"],[1,"toolbar-spacer"],[1,"fury-flex-form-field"],["matTooltip","Save","mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon",3,"click"],[2,"height","100%"],[1,"customMatToolbar",2,"padding-top","20px"],["mat-dialog-title",""],["fxLayout","row","fxLayout.xs","column","fxLayout.sm","column","fxLayoutGap","20px",2,"padding-left","27px","margin-top","10px","max-width","100%","display","inline-flex","flex-flow","row wrap"],["fxLayout","column","fxLayout.xs","column","fxLayout.sm","column","fxLayoutGap","10px"],["fxFlex",""],["appearance","outline","fxFlex",""],["pattern","[a-zA-Z0-9\\s]*$","required","","name","username","matInput","","id","usernameId",3,"formControl","ngModel","ngModelChange"],[4,"ngIf"],["pattern","[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$","type","email","required","","name","email","matInput","","id","emailId",3,"formControl","ngModel","ngModelChange"],["required","","name","role","matInput","","id","role",3,"formControl","ngModel","ngModelChange"],["fxLayout","row","fxLayout.xs","column","fxLayout.sm","column","fxLayoutGap","20px",2,"padding-left","27px","padding-bottom","10px","max-width","100%","display","inline-flex","flex-flow","row wrap"],["pattern","[a-zA-Z0-9\\s]*$","required","","name","firstname","matInput","","id","firstnameId",3,"formControl","ngModel","ngModelChange"],["pattern","[a-zA-Z0-9\\s]*$","required","","name","lastname","matInput","","id","lastnameId",3,"formControl","ngModel","ngModelChange"],["fxLayout","row","fxLayout.xs","column","fxLayout.sm","column","fxLayoutGap","10px"],[2,"width","76px","height","76px","border-radius","50%",3,"src"],["fxLayout","column","fxLayout.xs","row","fxLayout.sm","row","fxLayoutGap","20px",2,"padding-top","25px"],["fxFlex","","type","file","id","picture","id","InputFile","name","InputFile",1,"input-file",3,"formControl","change"],["profilePic",""],["fxLayout","column","fxLayout.xs","row","fxLayout.sm","row"],["class","errorMessage",4,"ngIf"],[1,"customMatToolbar"],["fxLayout","row","fxLayout.xs","column","fxLayout.sm","column","fxLayoutGap","20px",2,"margin-top","23px","padding-left","27px","margin-bottom","20px","max-width","100%","display","inline-flex","flex-flow","row wrap"],["fxLayout","column","fxLayoutGap","10px"],["appearance","outline"],["name","newPassword","matInput","","id","newPasswordId",3,"type","formControl","ngModel","ngModelChange"],["type","button","mat-icon-button","","matSuffix","","matTooltip","Toggle Visibility",3,"click"],["name","confirmPassword","matInput","","id","confirmPasswordId",3,"type","formControl","ngModel","ngModelChange"],["color","primary","mat-button","","type","button",2,"width","40%","text-align","left","padding-top","10px",3,"disabled","click"],[1,"errorMessage"]],template:function(e,t){1&e&&(d.Tb(0,"fury-page-layout",0),d.Tb(1,"fury-page-layout-content",1),d.Tb(2,"div",2),d.Tb(3,"mat-toolbar",3),d.Ob(4,"img",4),d.Tb(5,"span"),d.Rc(6,"Profile"),d.Sb(),d.Ob(7,"span",5),d.Tb(8,"div",6),d.Tb(9,"button",7),d.bc("click",(function(){return t.saveData()})),d.Tb(10,"mat-icon"),d.Rc(11,"save"),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(12,"mat-card",8),d.Tb(13,"h6",9),d.Tb(14,"div",10),d.Rc(15,"Personal Information"),d.Sb(),d.Sb(),d.Tb(16,"div",11),d.Tb(17,"div",12),d.Tb(18,"label",13),d.Tb(19,"b"),d.Rc(20,"User Name"),d.Sb(),d.Sb(),d.Tb(21,"mat-form-field",14),d.Tb(22,"input",15),d.bc("ngModelChange",(function(e){return t.userName=e})),d.Sb(),d.Pc(23,M,2,0,"mat-error",16),d.Pc(24,T,2,0,"mat-error",16),d.Sb(),d.Sb(),d.Tb(25,"div",12),d.Tb(26,"label",13),d.Tb(27,"b"),d.Rc(28,"Email"),d.Sb(),d.Sb(),d.Tb(29,"mat-form-field",14),d.Tb(30,"input",17),d.bc("ngModelChange",(function(e){return t.email=e})),d.Sb(),d.Pc(31,O,2,0,"mat-error",16),d.Pc(32,v,2,0,"mat-error",16),d.Sb(),d.Sb(),d.Tb(33,"div",12),d.Tb(34,"label",13),d.Tb(35,"b"),d.Rc(36,"Role"),d.Sb(),d.Sb(),d.Tb(37,"mat-form-field",14),d.Tb(38,"input",18),d.bc("ngModelChange",(function(e){return t.role=e})),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(39,"div",19),d.Tb(40,"div",12),d.Tb(41,"label",13),d.Tb(42,"b"),d.Rc(43,"First name"),d.Sb(),d.Sb(),d.Tb(44,"mat-form-field",14),d.Tb(45,"input",20),d.bc("ngModelChange",(function(e){return t.firstName=e})),d.Sb(),d.Pc(46,I,2,0,"mat-error",16),d.Pc(47,N,2,0,"mat-error",16),d.Sb(),d.Sb(),d.Tb(48,"div",12),d.Tb(49,"label",13),d.Tb(50,"b"),d.Rc(51,"Last name"),d.Sb(),d.Sb(),d.Tb(52,"mat-form-field",14),d.Tb(53,"input",21),d.bc("ngModelChange",(function(e){return t.lastName=e})),d.Sb(),d.Pc(54,_,2,0,"mat-error",16),d.Pc(55,U,2,0,"mat-error",16),d.Sb(),d.Sb(),d.Tb(56,"div",22),d.Ob(57,"img",23),d.Tb(58,"div",24),d.Tb(59,"input",25,26),d.bc("change",(function(){return t.uploadPhoto()})),d.Sb(),d.Sb(),d.Tb(61,"div",27),d.Pc(62,k,2,1,"mat-hint",28),d.Sb(),d.Sb(),d.Sb(),d.Tb(63,"h6",29),d.Tb(64,"div",10),d.Rc(65,"Change Password"),d.Sb(),d.Sb(),d.Tb(66,"div",30),d.Tb(67,"div",31),d.Tb(68,"label",13),d.Tb(69,"b"),d.Rc(70,"New Password"),d.Sb(),d.Sb(),d.Tb(71,"mat-form-field",32),d.Tb(72,"input",33),d.bc("ngModelChange",(function(e){return t.newPassword=e})),d.Sb(),d.Tb(73,"button",34),d.bc("click",(function(){return t.toggleNewPasswordVisibility()})),d.Pc(74,F,2,0,"mat-icon",16),d.Pc(75,R,2,0,"mat-icon",16),d.Sb(),d.Tb(76,"mat-hint"),d.Rc(77,"Enter your new password."),d.Sb(),d.Pc(78,L,2,0,"mat-error",16),d.Sb(),d.Sb(),d.Tb(79,"div",31),d.Tb(80,"label",13),d.Tb(81,"b"),d.Rc(82,"Confirm Password"),d.Sb(),d.Sb(),d.Tb(83,"mat-form-field",32),d.Tb(84,"input",35),d.bc("ngModelChange",(function(e){return t.confirmPassword=e})),d.Sb(),d.Tb(85,"button",34),d.bc("click",(function(){return t.toggleConfirmPasswordVisibility()})),d.Pc(86,q,2,0,"mat-icon",16),d.Pc(87,V,2,0,"mat-icon",16),d.Sb(),d.Tb(88,"mat-hint"),d.Rc(89,"Re-enter new password."),d.Sb(),d.Pc(90,z,2,0,"mat-error",16),d.Sb(),d.Sb(),d.Tb(91,"button",36),d.bc("click",(function(){return t.resetPassword()})),d.Rc(92,"RESET "),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Sb()),2&e&&(d.Cb(22),d.mc("formControl",t.groupForm.controls.username)("ngModel",t.userName),d.Cb(1),d.mc("ngIf",t.groupForm.controls.username.hasError("required")),d.Cb(1),d.mc("ngIf",null==t.groupForm.controls.username.errors?null:t.groupForm.controls.username.errors.pattern),d.Cb(6),d.mc("formControl",t.groupForm.controls.email)("ngModel",t.email),d.Cb(1),d.mc("ngIf",t.groupForm.controls.email.hasError("required")),d.Cb(1),d.mc("ngIf",null==t.groupForm.controls.email.errors?null:t.groupForm.controls.email.errors.pattern),d.Cb(6),d.mc("formControl",t.groupForm.controls.role)("ngModel",t.role),d.Cb(7),d.mc("formControl",t.groupForm.controls.firstname)("ngModel",t.firstName),d.Cb(1),d.mc("ngIf",t.groupForm.controls.firstname.hasError("required")),d.Cb(1),d.mc("ngIf",null==t.groupForm.controls.firstname.errors?null:t.groupForm.controls.firstname.errors.pattern),d.Cb(6),d.mc("formControl",t.groupForm.controls.lastname)("ngModel",t.lastName),d.Cb(1),d.mc("ngIf",t.groupForm.controls.lastname.hasError("required")),d.Cb(1),d.mc("ngIf",null==t.groupForm.controls.lastname.errors?null:t.groupForm.controls.lastname.errors.pattern),d.Cb(2),d.nc("src",t.image,d.Gc),d.Cb(2),d.mc("formControl",t.groupForm.controls.profileFile),d.Cb(3),d.mc("ngIf",0==t.isUploadSuccess),d.Cb(10),d.mc("type",t.newPasswordInputType)("formControl",t.groupPassword.controls.newPassword)("ngModel",t.newPassword),d.Cb(2),d.mc("ngIf",t.newPasswordVisible),d.Cb(1),d.mc("ngIf",!t.newPasswordVisible),d.Cb(3),d.mc("ngIf",null==t.groupPassword?null:t.groupPassword.get("newPassword").hasError("pattern")),d.Cb(6),d.mc("type",t.confirmPasswordInputType)("formControl",t.groupPassword.controls.confirmPassword)("ngModel",t.confirmPassword),d.Cb(2),d.mc("ngIf",t.confirmPasswordVisible),d.Cb(1),d.mc("ngIf",!t.confirmPasswordVisible),d.Cb(3),d.mc("ngIf",null==t.groupPassword?null:t.groupPassword.get("confirmPassword").hasError("pattern")),d.Cb(1),d.mc("disabled",t.groupPassword.pristine))},directives:[p.d,h.a,f.a,g.a,w.a,x.a,P.i,p.e,p.b,y.d,S.b,i.c,i.v,i.x,i.q,i.h,n.o,y.j,y.g,y.c],styles:[".toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.img-style[_ngcontent-%COMP%]{width:32px}.heading[_ngcontent-%COMP%]{background:#1976d2;font-size:17px;height:0}.profile[_ngcontent-%COMP%]{width:50%;display:flex}.profileImage[_ngcontent-%COMP%]{border-radius:50%;width:76px;height:76px}@media only screen and (max-width:375px){.informationHeight[_ngcontent-%COMP%]{height:831px}.firstNameSection[_ngcontent-%COMP%], .passwordSection[_ngcontent-%COMP%], .userNameSection[_ngcontent-%COMP%]{flex-direction:column}.cardHeight[_ngcontent-%COMP%]{height:225px}.flex-container[_ngcontent-%COMP%]{flex-direction:column}hr[_ngcontent-%COMP%]{width:255px}}@media only screen and (max-width:425px){.informationHeight[_ngcontent-%COMP%]{height:831px}.firstNameSection[_ngcontent-%COMP%], .passwordSection[_ngcontent-%COMP%], .userNameSection[_ngcontent-%COMP%]{flex-direction:column}.cardHeight[_ngcontent-%COMP%]{height:225px}.flex-container[_ngcontent-%COMP%]{flex-direction:column}hr[_ngcontent-%COMP%]{width:361px}}@media only screen and (min-width:768px){.informationHeight[_ngcontent-%COMP%]{height:455px}.firstNameSection[_ngcontent-%COMP%], .passwordSection[_ngcontent-%COMP%], .userNameSection[_ngcontent-%COMP%]{flex-direction:row}.cardHeight[_ngcontent-%COMP%]{height:225px}.flex-container[_ngcontent-%COMP%]{flex-direction:row}hr[_ngcontent-%COMP%]{width:705px}}@media only screen and (min-width:1024px){.informationHeight[_ngcontent-%COMP%]{height:455px}.firstNameSection[_ngcontent-%COMP%], .passwordSection[_ngcontent-%COMP%], .userNameSection[_ngcontent-%COMP%]{flex-direction:row}.cardHeight[_ngcontent-%COMP%]{height:125px}.flex-container[_ngcontent-%COMP%]{flex-direction:row}hr[_ngcontent-%COMP%]{width:988px}}@media only screen and (min-width:1440px){.informationHeight[_ngcontent-%COMP%]{height:455px}.firstNameSection[_ngcontent-%COMP%], .passwordSection[_ngcontent-%COMP%], .userNameSection[_ngcontent-%COMP%]{flex-direction:row}.cardHeight[_ngcontent-%COMP%]{height:225px}.flex-container[_ngcontent-%COMP%]{flex-direction:row}hr[_ngcontent-%COMP%]{width:1095px}}@media only screen and (min-width:2560px){.informationHeight[_ngcontent-%COMP%]{height:455px}.firstNameSection[_ngcontent-%COMP%], .passwordSection[_ngcontent-%COMP%], .userNameSection[_ngcontent-%COMP%]{flex-direction:row}.cardHeight[_ngcontent-%COMP%]{height:225px}.flex-container[_ngcontent-%COMP%]{flex-direction:row}hr[_ngcontent-%COMP%]{width:2210px}}.content[_ngcontent-%COMP%]{margin-top:2%}.position-fixed[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;top:0;z-index:5}.customMatToolbar[_ngcontent-%COMP%]{font-weight:35px;font-size:larger;margin-left:25px;margin-bottom:30px;color:#40407a!important}.errorMessage[_ngcontent-%COMP%]{color:red;float:right;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}"]}),e})()}];let H=(()=>{class e{}return e.\u0275mod=d.Lb({type:e}),e.\u0275inj=d.Kb({factory:function(t){return new(t||e)},imports:[[o.j.forChild(E)],o.j]}),e})();var G=r("KthW"),A=r("VE2z");let D=(()=>{class e{}return e.\u0275mod=d.Lb({type:e}),e.\u0275inj=d.Kb({factory:function(t){return new(t||e)},imports:[[n.c,A.a,H,S.c,y.f,x.g,i.l,i.w,G.a]]}),e})()},Vvus:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("tk/3"),o=r("sXtk"),i=r("fXoL");let s=(()=>{class e{constructor(e,t){this.http=e,this.envService=t,this.baseUrl="",this.baseUrl=t.backend}getOwners(){return this.http.get(this.baseUrl+"/owners")}getclientOwners(e){return this.http.get(this.baseUrl+"/owners/GetAllClientOwners/"+e)}getNewlyRegisteredUsers(e){return this.http.get(this.baseUrl+"/owners/newlyRegisteredOwners/"+e)}getUnits(e){return this.http.get(this.baseUrl+"/owners/"+e+"/GetUnits")}createOwner(e){return this.http.post(this.baseUrl+"/owners",e)}updateOwnerById(e,t){return this.http.put(this.baseUrl+"/owners/"+e,t)}deleteOwnerById(e){return this.http.delete(this.baseUrl+"/owners/"+e)}uploadLogo(e){const t=new FormData;t.append("file",e);const r={headers:new n.e({"Content-Type":"application/json"}),body:t};return this.http.post(this.baseUrl+"/upload",r)}getMovedOutTenants(e){return this.http.get(this.baseUrl+"/owners/movedOutTenants/clientId/"+e)}registerOwner(e){return this.http.post(this.baseUrl+"/owners/register",e)}getUserDeatils(e){let t=new n.f;return e&&(t=t.append("userId",e)),this.http.get(this.baseUrl+"/owners/user/details",{params:t})}checkTRNDuplication(e,t,r){let o=new n.f;return o=o.append("queryType",e),o=o.append("tRNNumber",t),o=o.append("id",r),this.http.get(this.baseUrl+"/owners/TRNNumber",{params:o})}}return e.\u0275fac=function(t){return new(t||e)(i.Xb(n.c),i.Xb(o.a))},e.\u0275prov=i.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);