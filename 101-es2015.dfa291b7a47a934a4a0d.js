(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{vyCc:function(t,n,e){"use strict";e.r(n),e.d(n,"ChatUiModule",(function(){return G}));var a=e("ofXK"),c=e("tyNb"),o=e("3Pt+"),r=e("1myf"),i=e("wd/R"),s=e("ZS9X"),b=e("Li0i"),g=e("lJxs"),m=e("1G5W"),d=e("CP7g"),l=e("fXoL"),h=e("pD6V"),p=e("XiUz"),u=e("XhcP"),C=e("bTqV"),f=e("STbY"),x=e("NFeN"),O=e("MutI"),M=e("znSr"),w=e("kmnG"),S=e("qFsG"),P=e("f0Cb"),_=e("FKr1");const T=["messagesScroll"];function y(t,n){if(1&t){const t=l.Ub();l.Tb(0,"mat-list-item",36),l.bc("click",(function(){l.Ec(t);const e=n.$implicit;return l.fc().setActiveChat(e)})),l.Ob(1,"img",37),l.Tb(2,"h3",38),l.Rc(3),l.Sb(),l.Tb(4,"p",39),l.Rc(5),l.Sb(),l.Sb()}if(2&t){const t=n.$implicit;l.Cb(1),l.mc("src",t.picture,l.Gc),l.Cb(2),l.Sc(t.name),l.Cb(2),l.Tc(" ",t.lastMessage,"")}}function v(t,n){if(1&t&&(l.Tb(0,"div",43),l.Ob(1,"img",17),l.Tb(2,"span",44),l.Rc(3),l.Sb(),l.Sb()),2&t){const t=l.fc().$implicit,n=l.fc();l.Cb(1),l.mc("src",n.activeChat.picture,l.Gc),l.Cb(2),l.Sc(t.message)}}function L(t,n){if(1&t&&(l.Tb(0,"div",45),l.Tb(1,"span",46),l.Rc(2),l.Sb(),l.Ob(3,"img",7),l.Sb()),2&t){const t=l.fc().$implicit;l.Cb(2),l.Sc(t.message)}}function R(t,n){1&t&&(l.Tb(0,"div",40),l.Pc(1,v,4,2,"div",41),l.Pc(2,L,4,1,"div",42),l.Sb()),2&t&&(l.mc("ngSwitch",n.$implicit.who),l.Cb(1),l.mc("ngSwitchCase","partner"),l.Cb(1),l.mc("ngSwitchCase","me"))}const F=[{path:"",component:(()=>{class t{constructor(t,n){this.cd=t,this.mediaObserver=n,this.drawerOpen=!0,this.drawerMode="side"}ngOnInit(){this.replyCtrl=new o.g,this.chats=Object(r.a)(b.a,"lastMessageTime").reverse(),this.activeChat=this.chats[0],this.mediaObserver.asObservable().pipe(Object(g.a)(()=>this.mediaObserver.isActive("lt-md")),Object(m.a)(Object(d.a)(this))).subscribe(t=>t?this.hideDrawer():this.showDrawer())}showDrawer(){this.drawerOpen=!0,this.drawerMode="side"}hideDrawer(){this.drawerOpen=!1,this.drawerMode="over"}setActiveChat(t){this.activeChat=t,"over"===this.drawerMode&&(this.drawerOpen=!1)}send(){this.replyCtrl.value&&(this.chats[0].messages.push({message:this.replyCtrl.value,when:i(),who:"me"}),this.replyCtrl.reset(),this.cd.markForCheck(),setTimeout(()=>{this.messagesScroll.scrollbarRef.getScrollElement().scrollTo(0,this.messagesScroll.scrollbarRef.getScrollElement().scrollHeight)},10))}clearMessages(t){t.messages.length=0}ngOnDestroy(){}}return t.\u0275fac=function(n){return new(n||t)(l.Nb(l.h),l.Nb(h.g))},t.\u0275cmp=l.Hb({type:t,selectors:[["fury-chat-ui"]],viewQuery:function(t,n){var e;1&t&&l.Jc(T,!0,s.a),2&t&&l.zc(e=l.cc())&&(n.messagesScroll=e.first)},decls:87,vars:10,consts:[["fxLayout","column","fxLayoutAlign","start center",1,"chat"],[1,"header","elevation"],["fxFlex","auto",1,"chat-drawer-container","elevation","route-animations-elements"],[1,"chat-drawer",3,"opened","mode"],["drawer",""],["fxLayout","column",2,"height","100%"],["fxFlex","none","fxLayout","row","fxLayoutAlign","space-between center",1,"toolbar","app-bar","border-bottom"],["src","assets/img/avatars/one.jpg",1,"avatar"],["fxFlex",""],["mat-icon-button","",3,"matMenuTriggerFor"],["fxFlex","auto"],[1,"contacts"],["class","contact","matRipple","",3,"click",4,"ngFor","ngForOf"],["fxLayout","column",1,"chat-drawer-content"],["fxLayout","row","fxFlex","none","fxLayoutAlign","space-between center",1,"toolbar","app-bar","border-bottom"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","12px",1,"current-contact"],["type","button","mat-icon-button","","fxHide.gt-sm","",3,"click"],[1,"avatar",3,"src"],["fxLayout","column"],[1,"name"],[1,"status","secondary-text"],["fxLayout","row","fxLayoutAlign","end center",1,"actions"],["mat-icon-button",""],["fxFlex","",1,"messages-container","background"],["messagesScroll",""],[1,"messages"],["class","chat-message","fxLayout","column","fxLayoutAlign","end start",3,"ngSwitch",4,"ngFor","ngForOf"],["fxFlex","none","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","24px",1,"reply","fury-form-field","fury-form-field-remove-hint-bar"],["appearance","fill","fxFlex","",1,"reply-field"],["matInput","",3,"formControl","keyup.enter"],["matSuffix","","mat-icon-button","","color","primary",3,"disabled","click"],["xPosition","before"],["userMenu","matMenu"],["mat-menu-item",""],["chatMenu","matMenu"],["mat-menu-item","",3,"click"],["matRipple","",1,"contact",3,"click"],["matListAvatar","",3,"src"],["matLine","",1,"name"],["matLine","",1,"message","secondary-text"],["fxLayout","column","fxLayoutAlign","end start",1,"chat-message",3,"ngSwitch"],["class","partner","fxFlexAlign","start","fxLayout","row","fxLayoutAlign","start start",4,"ngSwitchCase"],["class","me","fxFlexAlign","end","fxLayout","row","fxLayoutAlign","end start",4,"ngSwitchCase"],["fxFlexAlign","start","fxLayout","row","fxLayoutAlign","start start",1,"partner"],[1,"message","card"],["fxFlexAlign","end","fxLayout","row","fxLayoutAlign","end start",1,"me"],[1,"message","background-primary","color-primary-contrast"]],template:function(t,n){if(1&t){const t=l.Ub();l.Tb(0,"div",0),l.Ob(1,"div",1),l.Tb(2,"mat-drawer-container",2),l.Tb(3,"mat-drawer",3,4),l.Tb(5,"div",5),l.Tb(6,"div",6),l.Ob(7,"img",7),l.Ob(8,"span",8),l.Tb(9,"button",9),l.Tb(10,"mat-icon"),l.Rc(11,"more_vert"),l.Sb(),l.Sb(),l.Sb(),l.Tb(12,"div",10),l.Tb(13,"mat-nav-list",11),l.Pc(14,y,6,3,"mat-list-item",12),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(15,"mat-drawer-content",13),l.Tb(16,"div",14),l.Tb(17,"div",15),l.Tb(18,"button",16),l.bc("click",(function(){return l.Ec(t),l.Ac(4).open()})),l.Tb(19,"mat-icon"),l.Rc(20,"menu"),l.Sb(),l.Sb(),l.Ob(21,"img",17),l.Tb(22,"div",18),l.Tb(23,"span",19),l.Rc(24),l.Sb(),l.Tb(25,"span",20),l.Rc(26,"Online"),l.Sb(),l.Sb(),l.Sb(),l.Tb(27,"div",21),l.Tb(28,"button",22),l.Tb(29,"mat-icon"),l.Rc(30,"attach_file"),l.Sb(),l.Sb(),l.Tb(31,"button",9),l.Tb(32,"mat-icon"),l.Rc(33,"more_vert"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(34,"fury-scrollbar",23,24),l.Tb(36,"div",25),l.Pc(37,R,3,3,"div",26),l.Sb(),l.Sb(),l.Tb(38,"div",27),l.Tb(39,"mat-form-field",28),l.Tb(40,"mat-label"),l.Rc(41,"Write your message"),l.Sb(),l.Tb(42,"input",29),l.bc("keyup.enter",(function(){return n.send()})),l.Sb(),l.Tb(43,"button",30),l.bc("click",(function(){return n.send()})),l.Tb(44,"mat-icon"),l.Rc(45,"send"),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Sb(),l.Tb(46,"mat-menu",31,32),l.Tb(48,"button",33),l.Tb(49,"mat-icon"),l.Rc(50,"account_circle"),l.Sb(),l.Tb(51,"span"),l.Rc(52,"Profile"),l.Sb(),l.Sb(),l.Tb(53,"button",33),l.Tb(54,"mat-icon"),l.Rc(55,"settings"),l.Sb(),l.Tb(56,"span"),l.Rc(57,"Settings"),l.Sb(),l.Sb(),l.Tb(58,"button",33),l.Tb(59,"mat-icon"),l.Rc(60,"help"),l.Sb(),l.Tb(61,"span"),l.Rc(62,"Help"),l.Sb(),l.Sb(),l.Ob(63,"mat-divider"),l.Tb(64,"button",33),l.Tb(65,"mat-icon"),l.Rc(66,"exit_to_app"),l.Sb(),l.Tb(67,"span"),l.Rc(68,"Logout"),l.Sb(),l.Sb(),l.Sb(),l.Tb(69,"mat-menu",null,34),l.Tb(71,"button",33),l.Tb(72,"mat-icon"),l.Rc(73,"account_circle"),l.Sb(),l.Tb(74,"span"),l.Rc(75,"Contact Info"),l.Sb(),l.Sb(),l.Tb(76,"button",33),l.Tb(77,"mat-icon"),l.Rc(78,"volume_mute"),l.Sb(),l.Tb(79,"span"),l.Rc(80,"Mute Chat"),l.Sb(),l.Sb(),l.Ob(81,"mat-divider"),l.Tb(82,"button",35),l.bc("click",(function(){return n.clearMessages(n.activeChat)})),l.Tb(83,"mat-icon"),l.Rc(84,"clear_all"),l.Sb(),l.Tb(85,"span"),l.Rc(86,"Clear Messages"),l.Sb(),l.Sb(),l.Sb()}if(2&t){const t=l.Ac(47),e=l.Ac(70);l.Cb(3),l.mc("opened",n.drawerOpen)("mode",n.drawerMode),l.Cb(6),l.mc("matMenuTriggerFor",t),l.Cb(5),l.mc("ngForOf",n.chats),l.Cb(7),l.mc("src",n.activeChat.picture,l.Gc),l.Cb(3),l.Sc(n.activeChat.name),l.Cb(7),l.mc("matMenuTriggerFor",e),l.Cb(6),l.mc("ngForOf",n.chats[0].messages),l.Cb(5),l.mc("formControl",n.replyCtrl),l.Cb(1),l.mc("disabled",!n.replyCtrl.value)}},directives:[p.d,p.c,u.b,p.b,u.a,C.a,f.d,x.a,O.g,a.n,u.c,p.e,M.b,s.a,w.d,w.h,S.b,o.c,o.q,o.h,w.j,f.e,f.b,P.a,O.d,_.s,O.b,_.j,a.q,a.r,p.a],styles:[".chat[_ngcontent-%COMP%]{height:100%}.chat[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{width:100%;min-height:35%;max-height:35%;background:#fff url(/assets/img/backgrounds/chat.png);background-size:cover;position:absolute}.chat[_ngcontent-%COMP%]   .chat-drawer-container[_ngcontent-%COMP%]{height:100%;width:100%;max-width:80%;margin-top:5.8333333333%;max-height:calc(100% - 17.5%);border-radius:8px}@media screen and (max-width:599px){.chat[_ngcontent-%COMP%]   .chat-drawer-container[_ngcontent-%COMP%]{max-width:95%}}.chat[_ngcontent-%COMP%]   .chat-drawer[_ngcontent-%COMP%]{width:100%;max-width:280px}.chat[_ngcontent-%COMP%]   .chat-drawer[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{height:64px;min-height:64px;max-height:64px;padding-left:16px;padding-right:16px}.chat[_ngcontent-%COMP%]   .chat-drawer[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{position:relative}.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]{overflow:hidden}.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{height:64px;min-height:64px;max-height:64px;padding-left:24px;padding-right:24px}@media screen and (max-width:599px){.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px}}.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font:var(--font-subheading-1)}.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .toolbar[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{font:var(--font-body-1);line-height:1.25}.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]{min-height:0}.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]{padding:24px}.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]{margin:12px 0}.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{padding:8px;position:relative;box-shadow:0 0 0 -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);border-radius:8px}.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .partner[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{margin-left:12px}.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages[_ngcontent-%COMP%]   .chat-message[_ngcontent-%COMP%]   .me[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{margin-right:12px}.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%]{padding-left:24px;padding-right:24px}@media screen and (max-width:599px){.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px}}.chat[_ngcontent-%COMP%]   .chat-drawer-content[_ngcontent-%COMP%]   .reply[_ngcontent-%COMP%]   .reply-field[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px}"]}),t})()}];let A=(()=>{class t{}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(n){return new(n||t)},imports:[[c.j.forChild(F)],c.j]}),t})();var k=e("51bB"),j=e("KthW");let G=(()=>{class t{}return t.\u0275mod=l.Lb({type:t}),t.\u0275inj=l.Kb({factory:function(n){return new(n||t)},imports:[[a.c,A,o.w,j.a,k.a]]}),t})()}}]);