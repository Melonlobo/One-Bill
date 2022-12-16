!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{uLAc:function(n,o,i){"use strict";i.r(o),i.d(o,"InboxModule",(function(){return Pt}));var a,c=i("vxfF"),r=i("ofXK"),b=i("3Pt+"),l=i("CzEO"),u=i("KthW"),s=i("51bB"),m=i("tyNb"),d=i("1G5W"),f=i("CP7g"),g=i("LRne"),p=i("lJxs"),x=i("5oXs"),v=i("fXoL"),h=((a=function(){function n(){var e=this;t(this,n),this.mails=x.a,this.availableLabels=[],this.mails.forEach((function(t){t.labels.forEach((function(t){e.availableLabels.find((function(n){return n.name===t.name}))||e.availableLabels.push(t)}))}))}return e(n,[{key:"getStarred",value:function(){return Object(g.a)(this.mails).pipe(Object(p.a)((function(t){return t.filter((function(t){return t.starred}))})))}},{key:"getGroup",value:function(t){return Object(g.a)(this.mails).pipe(Object(p.a)((function(n){return n.filter((function(n){return n.group===t}))})))}},{key:"getMail",value:function(t){return Object(g.a)(this.mails).pipe(Object(p.a)((function(n){return n.find((function(n){return n.id===t}))})))}},{key:"toggleStarred",value:function(t){var n=this.find(t);n&&(n.starred=!t.starred)}},{key:"addLabel",value:function(t,n){var e=this.find(n);e&&(e.labels.find((function(n){return n===t}))||(e.labels.push(t),this.addToAvailableIfNotExists(t)))}},{key:"addToAvailableIfNotExists",value:function(t){-1===this.availableLabels.indexOf(t)&&this.availableLabels.push(t)}},{key:"removeLabel",value:function(t,n){var e=this.find(n);if(e){var o=e.labels.findIndex((function(n){return n===t}));o>-1&&e.labels.splice(o,1)}}},{key:"removeMail",value:function(t){var n=this.mails.findIndex((function(n){return n===t}));n>-1&&(this.mails.splice(n,1),this.lastRemovedMail=t,this.lastRemovedMailIndex=n)}},{key:"undoRemove",value:function(){return!(!this.lastRemovedMail||!this.lastRemovedMailIndex)&&(this.mails.splice(this.lastRemovedMailIndex,0,this.lastRemovedMail),this.lastRemovedMail)}},{key:"find",value:function(t){return this.mails.find((function(n){return n.id===t.id}))}},{key:"getLabelColors",value:function(){return Object(g.a)(x.b)}}]),n}()).\u0275fac=function(t){return new(t||a)},a.\u0275prov=v.Jb({token:a,factory:a.\u0275fac}),a),S=i("XiUz"),y=i("bSwM"),C=i("bTqV"),T=i("STbY"),O=i("NFeN"),M=i("ZS9X"),L=i("f0Cb"),w=i("zpSk"),P=i("znSr");function _(t,n){1&t&&(v.Tb(0,"mat-icon",3),v.Rc(1,"star_border"),v.Sb())}function k(t,n){1&t&&(v.Tb(0,"mat-icon",4),v.Rc(1,"star"),v.Sb())}var R,F,A=((R=function(){function n(){t(this,n),this.starred=new v.o}return e(n,[{key:"ngOnInit",value:function(){}},{key:"emitClick",value:function(){this.starred.emit()}}]),n}()).\u0275fac=function(t){return new(t||R)},R.\u0275cmp=v.Hb({type:R,selectors:[["fury-inbox-mail-star"]],inputs:{isStarred:"isStarred"},outputs:{starred:"starred"},decls:3,vars:2,consts:[["type","button","mat-icon-button","",3,"click"],["class","icon",4,"ngIf"],["class","icon active",4,"ngIf"],[1,"icon"],[1,"icon","active"]],template:function(t,n){1&t&&(v.Tb(0,"button",0),v.bc("click",(function(){return n.emitClick()})),v.Pc(1,_,2,0,"mat-icon",1),v.Pc(2,k,2,0,"mat-icon",2),v.Sb()),2&t&&(v.Cb(1),v.mc("ngIf",!n.isStarred),v.Cb(1),v.mc("ngIf",n.isStarred))},directives:[C.a,r.o,O.a],styles:[".icon.active[_ngcontent-%COMP%]{color:#ffc107}"]}),R),I=["*"],H=((F=function(){function n(){t(this,n)}return e(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(t){return new(t||F)},F.\u0275cmp=v.Hb({type:F,selectors:[["fury-inbox-mail-label"]],inputs:{color:"color"},ngContentSelectors:I,decls:4,vars:2,consts:[["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","6px",1,"label","app-bar"],[1,"indicator"],[1,"label-name"]],template:function(t,n){1&t&&(v.lc(),v.Tb(0,"div",0),v.Ob(1,"div",1),v.Tb(2,"div",2),v.kc(3),v.Sb(),v.Sb()),2&t&&(v.Cb(1),v.Mc("background",n.color))},directives:[S.d,S.c,S.e],styles:[".label[_ngcontent-%COMP%]{font:var(--font-caption);padding:2px 8px;white-space:nowrap}.label[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%}"]}),F);function N(t,n){if(1&t&&(v.Tb(0,"fury-inbox-mail-label",26),v.Rc(1),v.Sb()),2&t){var e=n.$implicit;v.mc("color",e.color),v.Cb(1),v.Tc("",e.name," ")}}var G=function(t){return["../mail",t]};function $(t,n){if(1&t){var e=v.Ub();v.Tb(0,"div",8),v.Tb(1,"div",9),v.Tb(2,"mat-checkbox",10),v.bc("click",(function(t){return v.Ec(e),t.stopPropagation()})),v.Sb(),v.Tb(3,"fury-inbox-mail-star",11),v.bc("click",(function(t){return v.Ec(e),t.stopPropagation()}))("starred",(function(){v.Ec(e);var t=n.$implicit;return v.fc().toggleStarred(t)})),v.Sb(),v.Sb(),v.Tb(4,"div",12),v.Tb(5,"div",13),v.Ob(6,"img",14),v.Tb(7,"div",15),v.Rc(8),v.Tb(9,"div",16),v.Rc(10),v.Sb(),v.Sb(),v.Sb(),v.Tb(11,"div",17),v.Tb(12,"div",18),v.Pc(13,N,2,2,"fury-inbox-mail-label",19),v.Sb(),v.Tb(14,"div",20),v.Rc(15),v.Sb(),v.Tb(16,"div",21),v.Rc(17,"\xb7"),v.Sb(),v.Tb(18,"div",22),v.Rc(19),v.Sb(),v.Sb(),v.Sb(),v.Tb(20,"div",23),v.Tb(21,"span",24),v.Rc(22),v.Sb(),v.Tb(23,"button",25),v.bc("click",(function(t){return v.Ec(e),t.stopPropagation()})),v.Tb(24,"mat-icon"),v.Rc(25,"more_vert"),v.Sb(),v.Sb(),v.Sb(),v.Sb()}if(2&t){var o=n.$implicit;v.fc();var i=v.Ac(21);v.Fb("background-hover",o.read),v.mc("routerLink",v.rc(12,G,o.id)),v.Cb(3),v.mc("isStarred",o.starred),v.Cb(3),v.oc("src","http://i.pravatar.cc/30?u=",o.from.name,"",v.Gc),v.Cb(2),v.Tc(" ",o.from.name," "),v.Cb(2),v.Sc(o.when.fromNow()),v.Cb(3),v.mc("ngForOf",o.labels),v.Cb(2),v.Sc(o.subject),v.Cb(4),v.Sc(o.content),v.Cb(3),v.Sc(o.when.fromNow()),v.Cb(1),v.mc("matMenuTriggerFor",i)}}var j,E,q=((j=function(){function n(e,o){t(this,n),this.route=e,this.inboxService=o}return e(n,[{key:"ngOnInit",value:function(){var t=this;this.route.paramMap.pipe(Object(d.a)(Object(f.a)(this))).subscribe((function(n){t.mails$="starred"===n.get("category")?t.inboxService.getStarred():t.inboxService.getGroup(n.get("category"))}))}},{key:"toggleStarred",value:function(t){this.inboxService.toggleStarred(t)}},{key:"ngOnDestroy",value:function(){}}]),n}()).\u0275fac=function(t){return new(t||j)(v.Nb(m.a),v.Nb(h))},j.\u0275cmp=v.Hb({type:j,selectors:[["fury-inbox-mail-list"]],decls:35,vars:4,consts:[["fxLayout","column",1,"mail-list"],["fxFlex","none","fxLayout","row","fxLayoutAlign","start center",1,"header","border-bottom"],["mat-icon-button","","type","button",1,"icon",3,"matMenuTriggerFor"],["fxFlex","auto",1,"content"],["class","mail border-bottom","gdColumns","68px 1fr 140px","gdColumns.lt-md","68px 1fr auto","gdColumns.lt-sm","auto 1fr auto","gdGap","8px",3,"background-hover","routerLink",4,"ngFor","ngForOf"],["menu","matMenu"],["mat-menu-item",""],["mailOptions","matMenu"],["gdColumns","68px 1fr 140px","gdColumns.lt-md","68px 1fr auto","gdColumns.lt-sm","auto 1fr auto","gdGap","8px",1,"mail","border-bottom",3,"routerLink"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","6px","fxHide","","fxShow.gt-xs",""],[1,"checkbox",3,"click"],[3,"isStarred","click","starred"],["gdColumns.gt-sm","150px 1fr","gdRows.lt-md","auto 1fr",1,"content-container"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","16px"],["fxFlex","noshrink","fxHide","","fxShow.gt-sm","",1,"picture",3,"src"],["fxFlex","grow","fxLayout","row","fxLayoutAlign","space-between center",1,"from","text"],["fxHide.gt-sm","",1,"when","secondary-text"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutAlign.gt-sm","start center","fxLayoutGap","8px",1,"content-wrapper"],["fxLayout","row","fxLayoutGap","8px"],[3,"color",4,"ngFor","ngForOf"],["fxFlex","noshrink",1,"subject","text"],["fxHide","","fxShow.gt-sm","",1,"middot","text"],[1,"content","text"],["fxLayout","row","fxLayoutAlign","end center"],["fxHide","","fxShow.gt-sm","",1,"when","secondary-text"],["mat-icon-button","",1,"icon",3,"matMenuTriggerFor","click"],[3,"color"]],template:function(t,n){if(1&t&&(v.Tb(0,"div",0),v.Tb(1,"div",1),v.Ob(2,"mat-checkbox"),v.Tb(3,"button",2),v.Tb(4,"mat-icon"),v.Rc(5,"arrow_drop_down"),v.Sb(),v.Sb(),v.Sb(),v.Tb(6,"fury-scrollbar",3),v.Pc(7,$,26,14,"div",4),v.gc(8,"async"),v.Sb(),v.Sb(),v.Tb(9,"mat-menu",null,5),v.Tb(11,"button",6),v.Tb(12,"span"),v.Rc(13," All "),v.Sb(),v.Sb(),v.Tb(14,"button",6),v.Tb(15,"span"),v.Rc(16," Unread "),v.Sb(),v.Sb(),v.Tb(17,"button",6),v.Tb(18,"span"),v.Rc(19," Read "),v.Sb(),v.Sb(),v.Sb(),v.Tb(20,"mat-menu",null,7),v.Tb(22,"button",6),v.Tb(23,"mat-icon"),v.Rc(24,"markunread_mailbox"),v.Sb(),v.Rc(25," Mark as unread "),v.Sb(),v.Tb(26,"button",6),v.Tb(27,"mat-icon"),v.Rc(28,"label"),v.Sb(),v.Rc(29," Labels "),v.Sb(),v.Ob(30,"mat-divider"),v.Tb(31,"button",6),v.Tb(32,"mat-icon"),v.Rc(33,"delete"),v.Sb(),v.Rc(34," Delete "),v.Sb(),v.Sb()),2&t){var e=v.Ac(10);v.Cb(3),v.mc("matMenuTriggerFor",e),v.Cb(4),v.mc("ngForOf",v.hc(8,2,n.mails$))}},directives:[S.d,S.b,S.c,y.a,C.a,T.d,O.a,M.a,r.n,T.e,T.b,L.a,w.d,w.b,m.g,S.e,P.b,A,w.c,H],pipes:[r.b],styles:[".header[_ngcontent-%COMP%]{height:64px;min-height:64px;max-height:64px;padding-left:24px;padding-right:24px}.mail-list[_ngcontent-%COMP%]{height:100%}.content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]{height:54px;min-height:54px;max-height:54px;padding-left:24px;padding-right:12px;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1);cursor:pointer;outline:none;font:var(--font-body-1)}@media screen and (max-width:599px){.content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]{height:auto;max-height:none;padding-top:12px;padding-bottom:12px}}@media screen and (min-width:599px) and (max-width:959px){.content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]{height:auto;max-height:none;padding-top:12px;padding-bottom:12px}}.content[_ngcontent-%COMP%]   .mail.background-hover[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .mail.background-hover[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .mail.background-hover[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .mail.background-hover[_ngcontent-%COMP%]   .when[_ngcontent-%COMP%]{font-weight:400}.content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]{height:30px;width:30px;border-radius:50%}.content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis}.content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%]   .when[_ngcontent-%COMP%]{white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;font-weight:500}"]}),j),D=i("0IaG"),U=((E=function(){function n(e,o){t(this,n),this.options=e,this.dialogRef=o}return e(n,[{key:"ngOnInit",value:function(){this.content=this.options.content}},{key:"cancel",value:function(){this.dialogRef.close(!1)}},{key:"confirm",value:function(){this.dialogRef.close(!0)}}]),n}()).\u0275fac=function(t){return new(t||E)(v.Nb(D.a),v.Nb(D.h))},E.\u0275cmp=v.Hb({type:E,selectors:[["fury-inbox-mail-confirm-dialog"]],decls:9,vars:1,consts:[["matDialogTitle",""],["align","end"],["type","button","mat-button","",3,"click"],["type","button","mat-button","","color","warn",3,"click"]],template:function(t,n){1&t&&(v.Tb(0,"div",0),v.Rc(1,"Confirm your action"),v.Sb(),v.Tb(2,"mat-dialog-content"),v.Rc(3),v.Sb(),v.Tb(4,"mat-dialog-actions",1),v.Tb(5,"button",2),v.bc("click",(function(){return n.cancel()})),v.Rc(6,"CANCEL"),v.Sb(),v.Tb(7,"button",3),v.bc("click",(function(){return n.confirm()})),v.Rc(8,"CONFIRM"),v.Sb(),v.Sb()),2&t&&(v.Cb(3),v.Tc(" ",n.content,"\n"))},directives:[D.i,D.f,D.c,C.a],styles:[""]}),E),z=i("dNgK"),K=i("Qu3c"),X=i("kmnG"),J=i("d3UM"),B=i("qFsG"),W=i("FKr1");function Y(t,n){if(1&t&&(v.Tb(0,"mat-option",14),v.Ob(1,"span",15),v.Tb(2,"span"),v.Rc(3),v.Sb(),v.Sb()),2&t){var e=n.$implicit;v.mc("value",e.code),v.Cb(1),v.Mc("background",e.code),v.Cb(2),v.Sc(e.name)}}function Q(t,n){if(1&t){var e=v.Ub();v.Tb(0,"div",3),v.bc("click",(function(t){return v.Ec(e),t.stopPropagation()})),v.Rc(1,"Use an Existing Label "),v.Sb()}}function V(t,n){if(1&t){var e=v.Ub();v.Tb(0,"button",16),v.bc("click",(function(t){v.Ec(e);var o=n.$implicit;return v.fc().selectLabelButton(t,o)})),v.Tb(1,"mat-checkbox",17),v.bc("change",(function(t){v.Ec(e);var o=n.$implicit;return v.fc().selectLabel(t,o)})),v.Sb(),v.Rc(2),v.Sb()}if(2&t){var o=n.$implicit,i=v.fc();v.Cb(1),v.mc("checked",i.labelSelected(o)),v.Cb(1),v.Tc(" ",o.name," ")}}var Z,tt=((Z=function(){function n(e,o){t(this,n),this.inboxService=e,this.fb=o,this.icon="label",this.addLabel=new v.o,this.removeLabel=new v.o}return e(n,[{key:"ngOnInit",value:function(){this.labelGroup=this.fb.group({color:[null,b.y.required],name:[null,b.y.required]}),this.colors$=this.inboxService.getLabelColors()}},{key:"selectLabel",value:function(t,n){t.value?this.addLabel.emit(n):this.removeLabel.emit(n)}},{key:"selectLabelButton",value:function(t,n){t&&t.stopPropagation(),this.labelSelected(n)?this.removeLabel.emit(n):this.addLabel.emit(n)}},{key:"labelSelected",value:function(t){return this.labels.indexOf(t)>-1}},{key:"createLabel",value:function(){var t=this;this.addLabel.emit(this.labelGroup.value),setTimeout((function(){t.labelGroup.markAsPristine(),t.labelGroup.markAsUntouched(),t.form.resetForm(),t.labelGroup.reset()}),10)}}]),n}()).\u0275fac=function(t){return new(t||Z)(v.Nb(h),v.Nb(b.f))},Z.\u0275cmp=v.Hb({type:Z,selectors:[["fury-inbox-mail-label-list"]],viewQuery:function(t,n){var e;1&t&&v.Jc(b.k,!0),2&t&&v.zc(e=v.cc())&&(n.form=e.first)},inputs:{icon:"icon",availableLabels:"availableLabels",labels:"labels"},outputs:{addLabel:"addLabel",removeLabel:"removeLabel"},decls:24,vars:9,consts:[["type","button","mat-icon-button","",3,"matMenuTriggerFor"],[1,"fury-inbox-mail-label-list-menu"],["labelMenu","matMenu"],[1,"fury-inbox-mail-label-list-menu-subheading",3,"click"],[3,"formGroup","submit","click"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px",1,"fury-inbox-mail-label-list-create"],["fxFlex","30%",1,"fury-inbox-mail-label-list-color"],["panelClass","fury-inbox-mail-label-list-color-select","formControlName","color"],[3,"value",4,"ngFor","ngForOf"],["fxFlex","70%",1,"fury-inbox-mail-label-list-name"],["matInput","","formControlName","name"],["type","submit","mat-icon-button","","color","primary",3,"disabled"],["class","fury-inbox-mail-label-list-menu-subheading",3,"click",4,"ngIf"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],[3,"value"],[1,"fury-inbox-mail-label-list-color-select-indicator"],["mat-menu-item","",3,"click"],[3,"checked","change"]],template:function(t,n){if(1&t&&(v.Tb(0,"button",0),v.Tb(1,"mat-icon"),v.Rc(2),v.Sb(),v.Sb(),v.Tb(3,"mat-menu",1,2),v.Tb(5,"div",3),v.bc("click",(function(t){return t.stopPropagation()})),v.Rc(6,"Create Label"),v.Sb(),v.Tb(7,"form",4),v.bc("submit",(function(){return n.createLabel()}))("click",(function(t){return t.stopPropagation()})),v.Tb(8,"div",5),v.Tb(9,"mat-form-field",6),v.Tb(10,"mat-label"),v.Rc(11,"Color"),v.Sb(),v.Tb(12,"mat-select",7),v.Pc(13,Y,4,4,"mat-option",8),v.gc(14,"async"),v.Sb(),v.Sb(),v.Tb(15,"mat-form-field",9),v.Tb(16,"mat-label"),v.Rc(17,"Label Name"),v.Sb(),v.Ob(18,"input",10),v.Sb(),v.Tb(19,"button",11),v.Tb(20,"mat-icon"),v.Rc(21,"add"),v.Sb(),v.Sb(),v.Sb(),v.Sb(),v.Pc(22,Q,2,0,"div",12),v.Pc(23,V,3,2,"button",13),v.Sb()),2&t){var e=v.Ac(4);v.mc("matMenuTriggerFor",e),v.Cb(2),v.Sc(n.icon),v.Cb(5),v.mc("formGroup",n.labelGroup),v.Cb(6),v.mc("ngForOf",v.hc(14,7,n.colors$)),v.Cb(6),v.mc("disabled",n.labelGroup.invalid),v.Cb(3),v.mc("ngIf",(null==n.availableLabels?null:n.availableLabels.length)>0),v.Cb(1),v.mc("ngForOf",n.availableLabels)}},directives:[C.a,T.d,O.a,T.e,b.z,b.r,b.k,S.d,S.c,S.e,X.d,S.b,X.h,J.a,b.q,b.i,r.n,B.b,b.c,r.o,W.n,T.b,y.a],pipes:[r.b],styles:[""]}),Z);function nt(t,n){if(1&t&&(v.Tb(0,"fury-inbox-mail-label",34),v.Rc(1),v.Sb()),2&t){var e=n.$implicit;v.mc("color",e.color),v.Cb(1),v.Tc(" ",e.name," ")}}function et(t,n){if(1&t){var e=v.Ub();v.Tb(0,"div",35),v.bc("click",(function(){return v.Ec(e),v.fc().showReply()})),v.Tb(1,"div",21),v.Ob(2,"img",36),v.Tb(3,"div",37),v.Rc(4,"Click to "),v.Tb(5,"span",38),v.Rc(6,"Reply"),v.Sb(),v.Rc(7," or "),v.Tb(8,"span",38),v.Rc(9,"Forward"),v.Sb(),v.Sb(),v.Sb(),v.Tb(10,"div",39),v.Tb(11,"button",10),v.Tb(12,"mat-icon"),v.Rc(13,"reply"),v.Sb(),v.Sb(),v.Tb(14,"button",10),v.Tb(15,"mat-icon"),v.Rc(16,"forward"),v.Sb(),v.Sb(),v.Sb(),v.Sb()}}var ot=function(){return{height:"100px"}};function it(t,n){if(1&t){var e=v.Ub();v.Tb(0,"div",40),v.Ob(1,"quill-editor",41),v.gc(2,"async"),v.Tb(3,"div",42),v.Tb(4,"button",43),v.bc("click",(function(){return v.Ec(e),v.fc().hideReply()})),v.Rc(5,"CANCEL"),v.Sb(),v.Tb(6,"button",44),v.bc("click",(function(){return v.Ec(e),v.fc().hideReply(!0)})),v.Tb(7,"mat-icon"),v.Rc(8,"send"),v.Sb(),v.Sb(),v.Sb(),v.Sb()}if(2&t){var o=v.fc();v.Cb(1),v.Kc(v.qc(5,ot)),v.oc("placeholder","Reply to ",null==v.hc(2,3,o.mail$).from?null:v.hc(2,3,o.mail$).from.name,"")}}var at,ct,rt,bt,lt,ut,st=function(){return["../../"]},mt=((at=function(){function n(e,o,i,a,c){t(this,n),this.route=e,this.inboxService=o,this.dialog=i,this.router=a,this.snackbar=c}return e(n,[{key:"ngOnInit",value:function(){var t=this;this.availableLabels=this.inboxService.availableLabels,this.route.paramMap.subscribe((function(n){t.id=n.get("id"),t.mail$=t.inboxService.getMail(t.id),t.inboxService.getMail(t.id).subscribe((function(n){t._mail=n}))}))}},{key:"toggleStarred",value:function(){this.inboxService.toggleStarred(this._mail)}},{key:"addLabel",value:function(t){this.inboxService.addLabel(t,this._mail)}},{key:"removeLabel",value:function(t){this.inboxService.removeLabel(t,this._mail)}},{key:"removeMail",value:function(){var t=this;this.dialog.open(U,{data:{content:"Are you sure you want to delete this mail?"}}).afterClosed().subscribe((function(n){n&&(t.inboxService.removeMail(t._mail),t.router.navigate(["../../"],{relativeTo:t.route}),t.snackbar.open("You deleted the mail from: "+t._mail.from.name,"UNDO",{duration:3e3}).onAction().subscribe((function(){var n=t.inboxService.undoRemove();n?(t.router.navigate(["/apps/inbox/mail",n.id]),t.snackbar.open("Restored your mail from: "+n.from.name,null,{duration:3e3})):t.snackbar.open("Could not UNDO last delete action. Sorry!",null,{duration:3e3})})))}))}},{key:"showReply",value:function(){this.replying=!0}},{key:"hideReply",value:function(t){this.replying=!1,t&&this.snackbar.open("You replied to "+this._mail.from.name,"UNDO",{duration:3e3})}}]),n}()).\u0275fac=function(t){return new(t||at)(v.Nb(m.a),v.Nb(h),v.Nb(D.b),v.Nb(m.f),v.Nb(z.b))},at.\u0275cmp=v.Hb({type:at,selectors:[["fury-inbox-mail"]],decls:79,vars:42,consts:[["fxLayout","column","fxFlex","grow",1,"inbox-mail"],["fxFlex","none","fxLayout","row","fxLayoutAlign","space-between center","fxLayoutAlign.gt-xs","start center",1,"header","border-bottom"],["type","button","mat-icon-button","","matTooltip","Back to Inbox",3,"routerLink"],["fxHide","","fxShow.gt-xs",""],["type","button","fxHide","","fxShow.gt-xs","","mat-icon-button","","matTooltip","Archive"],["type","button","fxHide","","fxShow.gt-xs","","mat-icon-button","","matTooltip","Mark as Spam"],["type","button","fxHide","","fxShow.gt-xs","","mat-icon-button","","matTooltip","Delete",3,"click"],["fxHide","","fxShow.gt-xs","",3,"matMenuTriggerFor"],["icon","folder","matTooltip","Move to","fxHide","","fxShow.gt-xs","",1,"button",3,"availableLabels","labels","addLabel","removeLabel"],["matTooltip","Labels","fxHide","","fxShow.gt-xs","",1,"button",3,"availableLabels","labels","addLabel","removeLabel"],["type","button","mat-icon-button",""],["fxLayout","column",1,"mail-content"],["fxFlex","noshrink","fxLayout","row","fxLayoutAlign","space-between start",1,"head","border-bottom"],["fxLayout","column","fxLayoutAlign","start start"],[1,"subject"],["fxLayout","row","fxLayoutGap","8px",1,"labels"],[3,"color",4,"ngFor","ngForOf"],["fxLayoutAlign","end center",1,"actions"],[3,"isStarred","starred"],[3,"availableLabels","labels","addLabel","removeLabel"],["fxFlex","noshrink","fxLayout","column","fxLayoutAlign","start","fxLayout.gt-xs","row","fxLayoutAlign.gt-xs","space-between",1,"info"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","16px"],[1,"picture",3,"src"],["fxLayout","column"],[1,"from"],["fxLayout","row","fxLayoutAlign","start center",1,"to","secondary-text"],["fxFlexAlign.xs","end","fxLayout","row","fxLayoutAlign","end center","fxLayoutGap","16px",1,"extra"],[1,"when","secondary-text"],["mat-icon-button","",1,"options","icon",3,"matMenuTriggerFor"],["fxFlex","grow",1,"content"],["class","reply border-top","fxFlex","noshrink","fxLayout","row","fxLayoutAlign","space-between center",3,"click",4,"ngIf"],["class","replying border-top",4,"ngIf"],["mailOptions","matMenu"],["mat-menu-item",""],[3,"color"],["fxFlex","noshrink","fxLayout","row","fxLayoutAlign","space-between center",1,"reply","border-top",3,"click"],["src","assets/img/avatars/noavatar.png",1,"avatar"],[1,"text"],[1,"semi-bold"],["fxLayout","row","fxLayoutAlign","end center","fxLayoutGap","8px"],[1,"replying","border-top"],[1,"editor",3,"placeholder"],["fxLayout","row","fxLayoutAlign","end center","fxLayoutGap","8px",1,"actions"],["mat-button","",3,"click"],["mat-fab","","color","primary",3,"click"]],template:function(t,n){if(1&t&&(v.Tb(0,"div",0),v.Tb(1,"div",1),v.Tb(2,"button",2),v.Tb(3,"mat-icon"),v.Rc(4,"arrow_back"),v.Sb(),v.Sb(),v.Ob(5,"mat-divider",3),v.Tb(6,"button",4),v.Tb(7,"mat-icon"),v.Rc(8,"archive"),v.Sb(),v.Sb(),v.Tb(9,"button",5),v.Tb(10,"mat-icon"),v.Rc(11,"backspace"),v.Sb(),v.Sb(),v.Tb(12,"button",6),v.bc("click",(function(){return n.removeMail()})),v.Tb(13,"mat-icon"),v.Rc(14,"delete"),v.Sb(),v.Sb(),v.Ob(15,"mat-divider",7),v.Tb(16,"fury-inbox-mail-label-list",8),v.bc("addLabel",(function(t){return n.addLabel(t)}))("removeLabel",(function(t){return n.removeLabel(t)})),v.gc(17,"async"),v.Sb(),v.Tb(18,"fury-inbox-mail-label-list",9),v.bc("addLabel",(function(t){return n.addLabel(t)}))("removeLabel",(function(t){return n.removeLabel(t)})),v.gc(19,"async"),v.Sb(),v.Ob(20,"mat-divider",3),v.Tb(21,"button",10),v.Tb(22,"mat-icon"),v.Rc(23,"more_vert"),v.Sb(),v.Sb(),v.Sb(),v.Tb(24,"fury-scrollbar"),v.Tb(25,"div",11),v.Tb(26,"div",12),v.Tb(27,"div",13),v.Tb(28,"div",14),v.Rc(29),v.gc(30,"async"),v.Sb(),v.Tb(31,"div",15),v.Pc(32,nt,2,2,"fury-inbox-mail-label",16),v.gc(33,"async"),v.Sb(),v.Sb(),v.Tb(34,"div",17),v.Tb(35,"fury-inbox-mail-star",18),v.bc("starred",(function(){return n.toggleStarred()})),v.gc(36,"async"),v.Sb(),v.Tb(37,"fury-inbox-mail-label-list",19),v.bc("addLabel",(function(t){return n.addLabel(t)}))("removeLabel",(function(t){return n.removeLabel(t)})),v.gc(38,"async"),v.Sb(),v.Sb(),v.Sb(),v.Tb(39,"div",20),v.Tb(40,"div",21),v.Ob(41,"img",22),v.gc(42,"async"),v.Tb(43,"div",23),v.Tb(44,"div",24),v.Rc(45),v.gc(46,"async"),v.Sb(),v.Tb(47,"div",25),v.Rc(48),v.gc(49,"async"),v.Tb(50,"mat-icon"),v.Rc(51,"arrow_drop_down"),v.Sb(),v.Sb(),v.Sb(),v.Sb(),v.Tb(52,"div",26),v.Tb(53,"div",27),v.Rc(54),v.gc(55,"async"),v.Sb(),v.Tb(56,"button",28),v.Tb(57,"mat-icon"),v.Rc(58,"more_vert"),v.Sb(),v.Sb(),v.Sb(),v.Sb(),v.Tb(59,"div",29),v.Rc(60),v.gc(61,"async"),v.Sb(),v.Pc(62,et,17,0,"div",30),v.Pc(63,it,9,6,"div",31),v.Sb(),v.Sb(),v.Sb(),v.Tb(64,"mat-menu",null,32),v.Tb(66,"button",33),v.Tb(67,"mat-icon"),v.Rc(68,"markunread_mailbox"),v.Sb(),v.Rc(69," Mark as unread "),v.Sb(),v.Tb(70,"button",33),v.Tb(71,"mat-icon"),v.Rc(72,"label"),v.Sb(),v.Rc(73," Labels "),v.Sb(),v.Ob(74,"mat-divider"),v.Tb(75,"button",33),v.Tb(76,"mat-icon"),v.Rc(77,"delete"),v.Sb(),v.Rc(78," Delete "),v.Sb(),v.Sb()),2&t){var e=v.Ac(65);v.Cb(2),v.mc("routerLink",v.qc(41,st)),v.Cb(13),v.mc("matMenuTriggerFor",e),v.Cb(1),v.mc("availableLabels",n.availableLabels)("labels",v.hc(17,19,n.mail$).labels),v.Cb(2),v.mc("availableLabels",n.availableLabels)("labels",v.hc(19,21,n.mail$).labels),v.Cb(11),v.Sc(v.hc(30,23,n.mail$).subject),v.Cb(3),v.mc("ngForOf",v.hc(33,25,n.mail$).labels),v.Cb(3),v.mc("isStarred",v.hc(36,27,n.mail$).starred),v.Cb(2),v.mc("availableLabels",n.availableLabels)("labels",v.hc(38,29,n.mail$).labels),v.Cb(4),v.oc("src","http://i.pravatar.cc/35?u=",null==v.hc(42,31,n.mail$).from?null:v.hc(42,31,n.mail$).from.name,"",v.Gc),v.Cb(4),v.Sc(null==v.hc(46,33,n.mail$).from?null:v.hc(46,33,n.mail$).from.name),v.Cb(3),v.Tc(" to ",null==v.hc(49,35,n.mail$).to?null:v.hc(49,35,n.mail$).to.name," "),v.Cb(6),v.Sc(null==v.hc(55,37,n.mail$).when?null:v.hc(55,37,n.mail$).when.fromNow()),v.Cb(2),v.mc("matMenuTriggerFor",e),v.Cb(4),v.Tc(" ",v.hc(61,39,n.mail$).content," "),v.Cb(2),v.mc("ngIf",!n.replying),v.Cb(1),v.mc("ngIf",n.replying)}},directives:[S.d,S.b,S.c,C.a,K.a,m.g,O.a,L.a,P.b,T.d,tt,M.a,S.e,r.n,A,S.a,r.o,T.e,T.b,H,l.a],pipes:[r.b],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex:1}.inbox-mail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{height:64px;padding-left:8px;padding-right:8px}.inbox-mail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], .inbox-mail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{margin-left:8px;margin-right:8px}.inbox-mail[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .vertical-divider[_ngcontent-%COMP%]{width:1px;height:calc(100% - 24px);margin:12px 8px}.inbox-mail[_ngcontent-%COMP%]   .mail-content[_ngcontent-%COMP%]     .scroll-content{display:flex;flex-direction:column;flex:1}.inbox-mail[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{padding:24px}.inbox-mail[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .subject[_ngcontent-%COMP%]{font:var(--font-title)}.inbox-mail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{padding:24px}.inbox-mail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%]{height:40px;width:40px;border-radius:50%}.inbox-mail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%]{font:var(--font-subheading-1)}.inbox-mail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%], .inbox-mail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]{white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis}.inbox-mail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .to[_ngcontent-%COMP%]{font:var(--font-body-1)}.inbox-mail[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .extra[_ngcontent-%COMP%]   .when[_ngcontent-%COMP%]{white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis}.inbox-mail[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:0 24px 24px}.inbox-mail[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%]{padding:24px;cursor:pointer}.inbox-mail[_ngcontent-%COMP%]   .replying[_ngcontent-%COMP%]{padding:24px}.inbox-mail[_ngcontent-%COMP%]   .replying[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin-top:24px}"]}),at),dt=function(){return{height:"100px"}},ft=((ct=function(){function n(e){t(this,n),this.dialogRef=e}return e(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(t){return new(t||ct)(v.Nb(D.h))},ct.\u0275cmp=v.Hb({type:ct,selectors:[["fury-inbox-compose"]],decls:22,vars:3,consts:[["mat-dialog-title",""],["fxLayout","column"],["value","davidsmith@example.com","matInput","","disabled",""],["matInput","","required",""],["matInput",""],["placeholder","Write your message"],["align","end","fxLayout","row","fxLayoutAlign","end center","fxLayoutGap","24px"],["type","button","mat-icon-button",""],["type","button","mat-raised-button","","color","primary",3,"click"]],template:function(t,n){1&t&&(v.Tb(0,"h2",0),v.Rc(1,"Compose Mail"),v.Sb(),v.Tb(2,"mat-dialog-content",1),v.Tb(3,"mat-form-field"),v.Tb(4,"mat-label"),v.Rc(5,"From"),v.Sb(),v.Ob(6,"input",2),v.Sb(),v.Tb(7,"mat-form-field"),v.Tb(8,"mat-label"),v.Rc(9,"To"),v.Sb(),v.Ob(10,"input",3),v.Sb(),v.Tb(11,"mat-form-field"),v.Tb(12,"mat-label"),v.Rc(13,"Subject"),v.Sb(),v.Ob(14,"input",4),v.Sb(),v.Ob(15,"quill-editor",5),v.Sb(),v.Tb(16,"mat-dialog-actions",6),v.Tb(17,"button",7),v.Tb(18,"mat-icon"),v.Rc(19,"attach_file"),v.Sb(),v.Sb(),v.Tb(20,"button",8),v.bc("click",(function(){return n.dialogRef.close()})),v.Rc(21," SEND "),v.Sb(),v.Sb()),2&t&&(v.Cb(15),v.Kc(v.qc(2,dt)))},directives:[D.i,D.f,S.d,X.d,X.h,B.b,l.a,D.c,S.c,S.e,C.a,O.a],styles:[""]}),ct),gt=i("XhcP"),pt=i("MutI"),xt=function(){return["/apps/inbox/primary"]},vt=function(){return["/apps/inbox/social"]},ht=function(){return["/apps/inbox/promotions"]},St=function(){return["/apps/inbox/starred"]},yt=function(){return["/apps/inbox/sent"]},Ct=function(){return["/apps/inbox/drafts"]},Tt=function(){return["/apps/inbox/spam"]},Ot=function(){return["/apps/inbox/trash"]},Mt=((rt=function(){function n(){t(this,n)}return e(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(t){return new(t||rt)},rt.\u0275cmp=v.Hb({type:rt,selectors:[["fury-inbox-navigation"]],inputs:{responsive:"responsive"},decls:46,vars:32,consts:[["fxFlex","grow"],[1,"navigation"],["matSubheader",""],["matRipple","","routerLinkActive","active",1,"secondary-text",3,"routerLink"],["matListIcon",""],["matLine","",3,"fxHide","fxShow.gt-sm"]],template:function(t,n){1&t&&(v.Tb(0,"fury-scrollbar",0),v.Tb(1,"mat-list",1),v.Tb(2,"div",2),v.Rc(3,"Inbox"),v.Sb(),v.Tb(4,"mat-list-item",3),v.Tb(5,"mat-icon",4),v.Rc(6,"inbox"),v.Sb(),v.Tb(7,"div",5),v.Rc(8,"Primary"),v.Sb(),v.Sb(),v.Tb(9,"mat-list-item",3),v.Tb(10,"mat-icon",4),v.Rc(11,"group"),v.Sb(),v.Tb(12,"div",5),v.Rc(13,"Social"),v.Sb(),v.Sb(),v.Tb(14,"mat-list-item",3),v.Tb(15,"mat-icon",4),v.Rc(16,"local_offer"),v.Sb(),v.Tb(17,"div",5),v.Rc(18,"Promotions"),v.Sb(),v.Sb(),v.Ob(19,"mat-divider"),v.Tb(20,"mat-list-item",3),v.Tb(21,"mat-icon",4),v.Rc(22,"star"),v.Sb(),v.Tb(23,"div",5),v.Rc(24,"Starred"),v.Sb(),v.Sb(),v.Tb(25,"mat-list-item",3),v.Tb(26,"mat-icon",4),v.Rc(27,"send"),v.Sb(),v.Tb(28,"div",5),v.Rc(29,"Sent Mails"),v.Sb(),v.Sb(),v.Tb(30,"mat-list-item",3),v.Tb(31,"mat-icon",4),v.Rc(32,"drafts"),v.Sb(),v.Tb(33,"div",5),v.Rc(34,"Drafts"),v.Sb(),v.Sb(),v.Ob(35,"mat-divider"),v.Tb(36,"mat-list-item",3),v.Tb(37,"mat-icon",4),v.Rc(38,"backspace"),v.Sb(),v.Tb(39,"div",5),v.Rc(40,"Spam"),v.Sb(),v.Sb(),v.Tb(41,"mat-list-item",3),v.Tb(42,"mat-icon",4),v.Rc(43,"delete"),v.Sb(),v.Tb(44,"div",5),v.Rc(45,"Trash"),v.Sb(),v.Sb(),v.Sb(),v.Sb()),2&t&&(v.Cb(4),v.mc("routerLink",v.qc(24,xt)),v.Cb(3),v.mc("fxHide",n.responsive)("fxShow.gt-sm",n.responsive),v.Cb(2),v.mc("routerLink",v.qc(25,vt)),v.Cb(3),v.mc("fxHide",n.responsive)("fxShow.gt-sm",n.responsive),v.Cb(2),v.mc("routerLink",v.qc(26,ht)),v.Cb(3),v.mc("fxHide",n.responsive)("fxShow.gt-sm",n.responsive),v.Cb(3),v.mc("routerLink",v.qc(27,St)),v.Cb(3),v.mc("fxHide",n.responsive)("fxShow.gt-sm",n.responsive),v.Cb(2),v.mc("routerLink",v.qc(28,yt)),v.Cb(3),v.mc("fxHide",n.responsive)("fxShow.gt-sm",n.responsive),v.Cb(2),v.mc("routerLink",v.qc(29,Ct)),v.Cb(3),v.mc("fxHide",n.responsive)("fxShow.gt-sm",n.responsive),v.Cb(3),v.mc("routerLink",v.qc(30,Tt)),v.Cb(3),v.mc("fxHide",n.responsive)("fxShow.gt-sm",n.responsive),v.Cb(2),v.mc("routerLink",v.qc(31,Ot)),v.Cb(3),v.mc("fxHide",n.responsive)("fxShow.gt-sm",n.responsive))},directives:[M.a,S.b,pt.a,pt.f,pt.d,W.s,m.h,m.g,O.a,pt.c,W.j,P.b,L.a],styles:[".navigation[_ngcontent-%COMP%]{margin-top:24px}.navigation[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{cursor:pointer;margin-top:8px;margin-bottom:8px;position:relative;outline:none;border-radius:8px}.navigation[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{font-weight:500}.navigation[_ngcontent-%COMP%]   .mat-divider[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px}"]}),rt),Lt=[{path:"",component:(bt=function(){function n(e){t(this,n),this.dialog=e}return e(n,[{key:"ngOnInit",value:function(){}},{key:"openCompose",value:function(){this.dialog.open(ft)}}]),n}(),bt.\u0275fac=function(t){return new(t||bt)(v.Nb(D.b))},bt.\u0275cmp=v.Hb({type:bt,selectors:[["fury-inbox"]],decls:32,vars:1,consts:[[1,"drawer-container"],["mode","over"],["drawer",""],[1,"drawer-navigation"],["gdRows","auto 1fr",1,"drawer-content"],["gdColumns","250px 1fr","gdColumns.lt-md","116px 1fr","gdColumns.lt-sm","1fr",1,"header","elevation"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutAlign.lt-md","center center","fxLayoutAlign.lt-sm","start center",1,"logo"],["fxHide.gt-xs","","mat-icon-button","","type","button",3,"click"],["fxHide","","fxShow.gt-xs",""],["fxHide.sm",""],["fxLayout","row","fxLayoutAlign","start center",1,"search-bar","card","elevation"],[1,"icon"],["fxFlex","","placeholder","Search...","type","search",1,"search","card","text"],["gdColumns","250px 1fr","gdColumns.lt-md","116px 1fr","gdColumns.lt-sm","1fr",1,"page-container"],["fxHide","","fxLayout","column","fxShow.gt-xs","",1,"navigation-container"],["fxFlex","0 0 auto","fxLayout","row","fxLayoutAlign","center center",1,"compose"],["color","primary","fxFlex","","fxHide","","fxShow.gt-sm","","mat-raised-button","","type","button",3,"click"],["color","primary","fxHide.gt-sm","","mat-mini-fab","","type","button"],[3,"responsive"],[1,"content","card","elevation"]],template:function(t,n){if(1&t){var e=v.Ub();v.Tb(0,"mat-drawer-container",0),v.Tb(1,"mat-drawer",1,2),v.Tb(3,"div",3),v.Ob(4,"fury-inbox-navigation"),v.Sb(),v.Sb(),v.Tb(5,"mat-drawer-content",4),v.Tb(6,"div",5),v.Tb(7,"div",6),v.Tb(8,"button",7),v.bc("click",(function(){return v.Ec(e),v.Ac(2).open()})),v.Tb(9,"mat-icon"),v.Rc(10,"menu"),v.Sb(),v.Sb(),v.Tb(11,"mat-icon",8),v.Rc(12,"mail"),v.Sb(),v.Tb(13,"span",9),v.Rc(14,"Inbox"),v.Sb(),v.Sb(),v.Tb(15,"div",10),v.Tb(16,"mat-icon",11),v.Rc(17,"search"),v.Sb(),v.Ob(18,"input",12),v.Sb(),v.Sb(),v.Tb(19,"div",13),v.Tb(20,"div",14),v.Tb(21,"div",15),v.Tb(22,"button",16),v.bc("click",(function(){return n.openCompose()})),v.Tb(23,"mat-icon",11),v.Rc(24,"edit"),v.Sb(),v.Rc(25," Compose "),v.Sb(),v.Tb(26,"button",17),v.Tb(27,"mat-icon"),v.Rc(28,"edit"),v.Sb(),v.Sb(),v.Sb(),v.Ob(29,"fury-inbox-navigation",18),v.Sb(),v.Tb(30,"div",19),v.Ob(31,"router-outlet"),v.Sb(),v.Sb(),v.Sb(),v.Sb()}2&t&&(v.Cb(29),v.mc("responsive",!0))},directives:[gt.b,gt.a,Mt,gt.c,w.c,w.d,S.d,S.c,C.a,P.b,O.a,S.b,m.k],styles:[".drawer-container[_ngcontent-%COMP%]{height:100%}.drawer-content[_ngcontent-%COMP%]{overflow:hidden}.drawer-navigation[_ngcontent-%COMP%]{padding:0 24px;overflow:hidden}.header[_ngcontent-%COMP%]{padding:48px 24px 112px 0;background-size:cover;z-index:10}@media screen and (max-width:599px){.header[_ngcontent-%COMP%]{padding:8px 8px 72px}}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{color:#fff;padding-left:24px;font:var(--font-display-1)}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{padding-right:12px}@media screen and (min-width:599px) and (max-width:959px){.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding-left:0}.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{padding-right:0}}@media screen and (max-width:599px){.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding-left:0;margin-bottom:8px}}.header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]{border-radius:8px;overflow:hidden}.header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{vertical-align:middle;margin-right:14px;margin-left:16px}.header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{border:0;height:54px;outline:none}.page-container[_ngcontent-%COMP%]{margin-top:-64px;overflow:hidden}.navigation-container[_ngcontent-%COMP%]{padding:0 24px 24px;z-index:20}.navigation-container[_ngcontent-%COMP%]   .compose[_ngcontent-%COMP%]{height:64px}.navigation-container[_ngcontent-%COMP%]   .compose[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{margin-left:-24px;padding-right:8px}.content[_ngcontent-%COMP%]{margin-right:24px;margin-bottom:24px;border-radius:8px;z-index:20;overflow:hidden}@media screen and (max-width:599px){.content[_ngcontent-%COMP%]{margin:0 8px 8px}}"]}),bt),children:[{path:"",redirectTo:"primary",pathMatch:"full",data:{scrollDisabled:!0}},{path:":category",component:q,data:{scrollDisabled:!0}},{path:"mail/:id",component:mt,data:{scrollDisabled:!0}}],data:{scrollDisabled:!0}}],wt=((ut=function n(){t(this,n)}).\u0275mod=v.Lb({type:ut}),ut.\u0275inj=v.Kb({factory:function(t){return new(t||ut)},imports:[[m.j.forChild(Lt)],m.j]}),ut),Pt=((lt=function n(){t(this,n)}).\u0275mod=v.Lb({type:lt}),lt.\u0275inj=v.Kb({factory:function(t){return new(t||lt)},providers:[h],imports:[[r.c,wt,u.a,b.w,l.b.forRoot(),s.a,c.d]]}),lt)}}])}();