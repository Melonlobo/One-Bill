(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/Ty6":function(t,e,s){"use strict";s.d(e,"a",(function(){return x}));var n=s("nStZ"),i=s("Ku73"),a=s("KGtp"),r=s("cIyM"),o=s("nST0"),c=s("+WJP"),u=s("0EQZ"),l=s("a8hA"),p=s("fXoL"),h=s("dNgK"),d=s("xBcV"),b=s("rvYj"),m=s("XiUz"),g=s("/t3+"),f=s("bTqV"),v=s("Qu3c"),y=s("NFeN"),w=s("4FRi"),U=s("kmnG"),I=s("d3UM"),T=s("ofXK"),S=s("FKr1");function k(t,e){if(1&t&&(p.Tb(0,"mat-option",13),p.Rc(1),p.Sb()),2&t){const t=e.$implicit;p.mc("value",t.value),p.Cb(1),p.Tc("",t.label," ")}}function C(t,e){if(1&t){const t=p.Ub();p.Tb(0,"fury-card-content",1),p.Tb(1,"div",14),p.Tb(2,"app-table-structure",15),p.bc("selectedRows",(function(e){return p.Ec(t),p.fc().onSelectedRows(e)})),p.Sb(),p.Sb(),p.Sb()}if(2&t){const t=p.fc();p.Cb(2),p.mc("tableData",t.menuItems)("columns",t.columns)("hideHeader",!1)}}let x=(()=>{class t{constructor(t,e,s,n,i){this.menuItemService=t,this.ClientService=e,this.snackbar=s,this.clientSelectionService=n,this.ref=i,this._gap=16,this.gap=this._gap+"px",this.col2=`1 1 calc(50% - ${this._gap/2}px)`,this.col3=`1 1 calc(33.3333% - ${this._gap/1.5}px)`,this.menuItems=[],this.selectedRows=[],this.columns=[],this.roles=[],this.nameColumnName="Page Name"}ngOnInit(){this.clientSelectionService.setIsClientVisible(!1),this.getRoles(),this.getMenuItems(),this.createGridColumns()}ngAfterViewInit(){this.ref.detectChanges(),this.tableStructureComponent=new c.a}createGridColumns(){this.columns=[{name:"Checkbox",property:"checkbox",visible:!0},{name:this.nameColumnName,property:"name",visible:!0,isModelProperty:!0}]}getRoles(){this.roles=[],this.ClientService.getRoles().subscribe(t=>{t&&t.forEach(t=>{this.roles.push({label:t.name,value:Number(t.id)})})})}onSave(){let t=[];this.selectedRows&&this.selectedRows.length&&this.selectedRows.forEach(e=>{t.push({id:this.roleId.toString(),name:"",menuItemId:e.id})}),t&&t.length&&this.menuItemService.addUserPagePermissions(t).subscribe({next:t=>{t&&this.notificationMessage("Role page permission added successfully","green-snackbar")},error:t=>{this.notificationMessage("Role page permission failed","red-snackbar")}})}onChangeRoles(t){this.roleId=t;const e=this.roles.find(e=>e.value===t).label;this.getRoleMenuItems(e)}getRoleMenuItems(t){this.selectedRows=[],this.tableStructureComponent.selection=new u.c(!0,this.selectedRows),this.menuItemService.getRoleMenuItems(t).subscribe(t=>{t&&this.menuItems&&(t.forEach(t=>{const e=this.menuItems.find(e=>e.id===t.menuItemId);e&&this.selectedRows.push(e)}),this.tableStructureComponent.selection=new u.c(!0,this.selectedRows))})}getMenuItems(){this.menuItemService.getMenuItems().subscribe(t=>{let e=[];t&&t.forEach(t=>{t.routeOrFunction&&e.push(t)}),this.menuItems=e.sort((t,e)=>t.name.localeCompare(e.name))})}notificationMessage(t,e){this.snackbar.open(t,null,{duration:5e3,verticalPosition:"top",horizontalPosition:"end",panelClass:[e]})}onSelectedRows(t){this.selectedRows=[],this.selectedRows=t}}return t.\u0275fac=function(e){return new(e||t)(p.Nb(r.a),p.Nb(o.a),p.Nb(h.b),p.Nb(l.a),p.Nb(p.h))},t.\u0275cmp=p.Hb({type:t,selectors:[["app-user-page-permissions"]],viewQuery:function(t,e){var s;1&t&&p.Vc(c.a,!0),2&t&&p.zc(s=p.cc())&&(e.tableStructureComponent=s.first)},decls:20,vars:7,consts:[["mode","card",2,"margin-top","20px"],["fxLayout","column"],["color","primary",1,"position-fixed"],["src","assets/img/fav-icon.png",1,"img-style"],[1,"toolbar-spacer"],["mat-icon-button","","matTooltip","Save",3,"disabled","click"],["fxFlex","noshrink","fxLayout","column","fxLayout.gt-sm","row","fxLayoutAlign.gt-sm","start stretch",3,"fxLayoutGap"],["fxFlex","grow",1,"basic-forms","route-animations-elements",3,"fxFlex.gt-sm"],[1,"card-spacer"],[1,"dropdown"],["id","roles","name","roles",3,"value","selectionChange","valueChange"],[3,"value",4,"ngFor","ngForOf"],["fxLayout","column",4,"ngIf"],[3,"value"],["fxLayout","column",1,"result"],[3,"tableData","columns","hideHeader","selectedRows"]],template:function(t,e){1&t&&(p.Tb(0,"fury-page-layout",0),p.Tb(1,"fury-page-layout-content",1),p.Tb(2,"mat-toolbar",2),p.Ob(3,"img",3),p.Tb(4,"span"),p.Rc(5,"Roles & Permission"),p.Sb(),p.Ob(6,"span",4),p.Tb(7,"button",5),p.bc("click",(function(){return e.onSave()})),p.Tb(8,"mat-icon"),p.Rc(9,"save"),p.Sb(),p.Sb(),p.Sb(),p.Tb(10,"div",6),p.Tb(11,"fury-card",7),p.Ob(12,"div",8),p.Tb(13,"fury-card-content",9),p.Tb(14,"mat-form-field"),p.Tb(15,"mat-label"),p.Rc(16,"Roles"),p.Sb(),p.Tb(17,"mat-select",10),p.bc("selectionChange",(function(t){return e.onChangeRoles(t.value)}))("valueChange",(function(t){return e.roleId=t})),p.Pc(18,k,2,2,"mat-option",11),p.Sb(),p.Sb(),p.Sb(),p.Pc(19,C,3,3,"fury-card-content",12),p.Sb(),p.Sb(),p.Sb(),p.Sb()),2&t&&(p.Cb(7),p.mc("disabled",!(e.roleId>0)),p.Cb(3),p.mc("fxLayoutGap",e.gap),p.Cb(1),p.mc("fxFlex.gt-sm",e.col2)("@fadeInUp",void 0),p.Cb(6),p.mc("value",e.roleId),p.Cb(1),p.mc("ngForOf",e.roles),p.Cb(1),p.mc("ngIf",e.roleId>0))},directives:[d.a,b.a,m.d,g.a,f.a,v.a,y.a,m.b,m.c,m.e,w.a,w.c,U.d,U.h,I.a,T.n,T.o,S.n,c.a],styles:[".card-spacer[_ngcontent-%COMP%]{height:11px}.dropdown[_ngcontent-%COMP%]{flex-direction:column;width:300px;padding-top:1%}.toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.img-style[_ngcontent-%COMP%]{width:32px}.position-fixed[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;top:0;z-index:5}"],data:{animation:[n.a,i.a,a.a]}}),t})()},"/sTe":function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("tk/3"),i=s("sXtk"),a=s("fXoL");let r=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}createAlertSettingsEMS(t){return this.http.post(this.baseUrl+"/alarmsettings",t)}getMeterList(t,e=0,s=0){let i=new n.f;return i=i.append("groupId",""+s),i=i.append("meterTypeId",""+e),i=i.append("clientId",""+t),this.http.get(this.baseUrl+"/alarmsettings/meterList",{params:i})}getv1MeterList(t,e=0,s=0){let i=new n.f;return i=i.append("groupId",""+s),i=i.append("meterTypeId",""+e),i=i.append("clientId",""+t),this.http.get(this.baseUrl+"/alarmsettings/V1/meterList",{params:i})}getParametersList(){return this.http.get(this.baseUrl+"/alarmsettings/parameters")}getAlertSettings(t){return this.http.get(this.baseUrl+"/alarmsettings/GetAllAlarmSettings/"+t)}getv1AlertSettings(t){let e=new n.f;return e=e.append("clientId",""+t),this.http.get(this.baseUrl+"/alarmsettings/GetAllV1AlarmSettings",{params:e})}deleteAlertSettings(t){return this.http.delete(this.baseUrl+"/alarmsettings/"+t)}getAlarmDetails(t){return this.http.post(this.baseUrl+"/alarmsettings/alarmDetails",t)}saveCreateMeterGroup(t){return this.http.post(this.baseUrl+"/alarmsettings/metertype/group/meter",t)}deleteMeterGroup(t=0,e=0){let s=new n.f;return s=s.append("meterTypeId",""+t),s=s.append("meterGroupId",""+e),this.http.delete(this.baseUrl+"/alarmsettings/metertypeGroup/meter",{params:s})}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(n.c),a.Xb(i.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"0E0g":function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var n=s("0IaG"),i=s("cIyM"),a=s("fXoL"),r=s("tyNb"),o=s("b6Qw"),c=s("IkSl"),u=s("bTqV");let l=(()=>{class t{constructor(t,e,s,n,i){this.router=t,this.dialogRef=e,this.data=s,this.menuItemService=n,this.cookieService=i,this.fileName="",e.disableClose=!0,this.fileName=s.fileName}ngOnInit(){}decline(){this.dialogRef.close(),this.router.navigate(["/login"])}accept(){const t={userId:this.cookieService.get("userId"),isAccepted:!0,userAcceptanceFileId:this.data.id};this.menuItemService.createUserAcceptanceLog(t).subscribe({next:t=>{this.dialogRef.close()},error:()=>{this.dialogRef.close()}})}}return t.\u0275fac=function(e){return new(e||t)(a.Nb(r.f),a.Nb(n.h),a.Nb(n.a),a.Nb(i.a),a.Nb(o.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["fury-login-credentials"]],decls:12,vars:2,consts:[["fxLayout","column","flexLayoutGap","10px"],[1,"title-row"],[2,"display","block",3,"src","render-text"],["flexLayoutGap","10px",1,"flex-container"],[1,"start-div"],["color","primary","mat-button","","type","button",3,"click"],["color","primary","mat-raised-button","","type","button",3,"click"]],template:function(t,e){1&t&&(a.Tb(0,"div",0),a.Tb(1,"div",1),a.Tb(2,"h2"),a.Tb(3,"b"),a.Rc(4,"Read and Accept the End User Agreement"),a.Sb(),a.Sb(),a.Sb(),a.Ob(5,"pdf-viewer",2),a.Tb(6,"div",3),a.Ob(7,"div",4),a.Tb(8,"button",5),a.bc("click",(function(){return e.decline()})),a.Rc(9,"Decline "),a.Sb(),a.Tb(10,"button",6),a.bc("click",(function(){return e.accept()})),a.Rc(11,"Accept "),a.Sb(),a.Sb(),a.Sb()),2&t&&(a.Cb(5),a.mc("src",e.fileName)("render-text",!0))},directives:[c.a,u.a],styles:[".container[_ngcontent-%COMP%]{flex-direction:column}.flex-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.title-row[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),t})()},"1Z3b":function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("sXtk"),i=s("fXoL"),a=s("tk/3");let r=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getChartData(t){return this.http.post(this.baseUrl+"/dashboardchart/ViewDashboardChart",t)}getMeterTypes(){return this.http.get(this.baseUrl+"/dashboardchart/MeterTypeData")}}return t.\u0275fac=function(e){return new(e||t)(i.Xb(a.c),i.Xb(n.a))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"3R10":function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("tk/3"),i=s("sXtk"),a=s("fXoL");let r=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getContracts(t){return this.http.get(this.baseUrl+"/contracts/clientId/"+t)}getContractById(t){return this.http.get(this.baseUrl+"/contracts/"+t)}createContract(t){return this.http.post(this.baseUrl+"/contracts/",t)}updateContractById(t,e){return this.http.put(this.baseUrl+"/contracts/"+t,e)}activateContractById(t){return this.http.put(this.baseUrl+"/contracts/activate/"+t,null)}renewContract(t,e){return this.http.patch(this.baseUrl+"/contracts/"+t,e)}deleteContractById(t,e){const s={headers:new n.e({"Content-Type":"application/json"}),body:e};return this.http.delete(this.baseUrl+"/contracts/"+t,s)}suspendContractById(t,e){const s={headers:new n.e({"Content-Type":"application/json"}),body:e};return this.http.delete(this.baseUrl+"/contracts/"+t+"/suspend",s)}getSecurityDeposit(t){return this.http.get(this.baseUrl+"/contracts/SecurityDeposit/"+t)}getTenants(t){return this.http.get(this.baseUrl+"/contracts/tenants/clientId/"+t)}getMovedOutTenants(t){return this.http.get(this.baseUrl+"/contracts/ExpiredContracts/clientId/"+t)}getUtilities(t){return this.http.get(this.baseUrl+"/clients/"+t+"/utilities")}getUnits(t){return this.http.get(this.baseUrl+"/clients/"+t+"/units")}getContractsAboutToExpire(t){return this.http.get(this.baseUrl+"/contracts/AboutToExpire/clientId/"+t)}getUtilityDetails(t,e){return this.http.get(this.baseUrl+"/contracts/utility/"+t+"/"+e)}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(n.c),a.Xb(i.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"5cYQ":function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("tk/3"),i=s("sXtk"),a=s("fXoL");let r=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getAnnouncements(t){return this.http.get(this.baseUrl+"/announcements/clientId/"+t)}getAnnouncementById(t){return this.http.get(this.baseUrl+"/announcements/"+t)}createAnnouncement(t){return this.http.post(this.baseUrl+"/announcements/",t)}updateAnnouncementById(t,e){return this.http.put(this.baseUrl+"/announcements/"+t,e)}deleteAnnouncementById(t,e){const s={headers:new n.e({"Content-Type":"application/json"}),body:e};return this.http.delete(this.baseUrl+"/announcements/"+t,s)}getClients(){return this.http.get(this.baseUrl+"/announcements/clients")}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(n.c),a.Xb(i.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"6zYn":function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));class n{constructor(t){this.id=t.id||0,this.unitId=t.unitId||0,this.unit=t.unit||"",this.startDate=t.startDate||""}}},Ektq:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("tk/3"),i=s("sXtk"),a=s("fXoL");let r=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getVariablePays(t){return this.http.get(this.baseUrl+"/variablepays/clientId/"+t)}getVariablePayId(t){return this.http.get(this.baseUrl+"/variablepays/"+t)}createVariablePay(t){return this.http.post(this.baseUrl+"/variablepays/",t)}updateVariablePayById(t,e){return this.http.put(this.baseUrl+"/variablepays/"+t,e)}deleteVariablePayById(t,e){const s={headers:new n.e({"Content-Type":"application/json"}),body:e};return this.http.delete(this.baseUrl+"/variablepays/"+t,s)}getUnitsOfTenant(t){return this.http.get(this.baseUrl+"/variablepays/GetTenantUnits/"+t)}GetUnitsWithTenantName(t){let e=new n.f;return e=e.append("clientId",""+t),this.http.get(this.baseUrl+"/variablepays/TenantUnits",{params:e})}getVariableAmount(t){let e=new n.f;return e=e.append("accountHeadId",""+t),this.http.get(this.baseUrl+"/variablepays/VariableAmount",{params:e})}getTenants(t){return this.http.get(this.baseUrl+"/variablepays/tenants/clientId/"+t)}getBillPeriods(t){return this.http.get(this.baseUrl+"/variablepays/billPeriods/clientId/"+t)}getAccountHeads(t){return this.http.get(this.baseUrl+"/variablepays/accountHeads/clientId/"+t)}getConsumptionValue(t,e,s){let i=new n.f;return i=i.append("ownerId",""+t),i=i.append("billPeriodId",""+e),i=i.append("accountHeadId",""+s),this.http.get(this.baseUrl+"/variablepays/billtype/consumption",{params:i})}createOtherTypeConsumptionVariablePay(t,e){return this.http.post(this.baseUrl+"/variablepays/"+e+"/consumption",t)}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(n.c),a.Xb(i.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},HDyx:function(t,e,s){"use strict";s.d(e,"a",(function(){return b}));var n=s("fXoL"),i=s("b6Qw"),a=s("0IaG"),r=s("3Pt+"),o=s("ofXK"),c=s("bTqV"),u=s("Qu3c"),l=s("NFeN");function p(t,e){if(1&t){const t=n.Ub();n.Tb(0,"button",4),n.bc("click",(function(){return n.Ec(t),n.fc().onSendReceipt()})),n.Tb(1,"mat-icon"),n.Rc(2,"email"),n.Sb(),n.Sb()}if(2&t){const t=n.fc();n.mc("disabled",!t.hide)}}function h(t,e){if(1&t){const t=n.Ub();n.Tb(0,"button",5),n.bc("click",(function(){return n.Ec(t),n.fc().onPrint()})),n.Tb(1,"mat-icon"),n.Rc(2,"print"),n.Sb(),n.Sb()}if(2&t){const t=n.fc();n.mc("disabled",!t.hide)}}function d(t,e){if(1&t){const t=n.Ub();n.Tb(0,"button",6),n.bc("click",(function(){return n.Ec(t),n.fc().onExport()})),n.Tb(1,"mat-icon"),n.Rc(2,"import_export"),n.Sb(),n.Sb()}if(2&t){const t=n.fc();n.mc("disabled",!t.hide)}}let b=(()=>{class t{constructor(t){this.cookieService=t,this.ownerId=0,this.hide=!0,this.show=!0,this.visible=!0,this.sendReceiptClicked=new n.o,this.printClicked=new n.o,this.exportClicked=new n.o}ngOnInit(){var t;this.ownerId=null!==(t=parseInt(this.cookieService.get("ownerId")))&&void 0!==t?t:0}onSendReceipt(){this.sendReceiptClicked.emit()}onPrint(){this.printClicked.emit()}onExport(){this.exportClicked.emit()}}return t.\u0275fac=function(e){return new(e||t)(n.Nb(i.a))},t.\u0275cmp=n.Hb({type:t,selectors:[["fury-payment-history-footer-toolbar"]],inputs:{hide:"hide",show:"show",visible:"visible"},outputs:{sendReceiptClicked:"sendReceiptClicked",printClicked:"printClicked",exportClicked:"exportClicked"},decls:6,vars:3,consts:[[1,"person"],["matTooltip","Email","mat-icon-button","","class","example-icon","aria-label","Example icon-button with menu icon",3,"disabled","click",4,"ngIf"],["matTooltip","Print","mat-icon-button","","class","example-icon","aria-label","Example icon-button with menu icon",3,"disabled","click",4,"ngIf"],["matTooltip","Export","mat-icon-button","","class","example-icon","aria-label","Example icon-button with menu icon",3,"disabled","click",4,"ngIf"],["matTooltip","Email","mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon",3,"disabled","click"],["matTooltip","Print","mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon",3,"disabled","click"],["matTooltip","Export","mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon",3,"disabled","click"]],template:function(t,e){1&t&&(n.Tb(0,"mat-dialog-content"),n.Tb(1,"div",0),n.Tb(2,"form"),n.Pc(3,p,3,1,"button",1),n.Pc(4,h,3,1,"button",2),n.Pc(5,d,3,1,"button",3),n.Sb(),n.Sb(),n.Sb()),2&t&&(n.Cb(3),n.mc("ngIf",e.show),n.Cb(1),n.mc("ngIf",e.visible),n.Cb(1),n.mc("ngIf",0==e.ownerId))},directives:[a.f,r.z,r.r,r.s,o.o,c.a,u.a,l.a],styles:[".button[_ngcontent-%COMP%]{line-height:50px}"]}),t})()},HrJb:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var n=s("7o/Q");function i(t){return e=>e.lift(new a(t,e))}class a{constructor(t,e){this.predicate=t,this.source=e}call(t,e){return e.subscribe(new r(t,this.predicate,this.source))}}class r extends n.a{constructor(t,e,s){super(t),this.predicate=e,this.source=s,this.count=0,this.index=0}_next(t){this.predicate?this._tryPredicate(t):this.count++}_tryPredicate(t){let e;try{e=this.predicate(t,this.index++,this.source)}catch(s){return void this.destination.error(s)}e&&this.count++}_complete(){this.destination.next(this.count),this.destination.complete()}}},JX19:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("tk/3"),i=s("sXtk"),a=s("fXoL");let r=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getUtilities(t){return this.http.get(this.baseUrl+"/v1/energy-dashboard/"+t+"/utilities")}getOverallEnergyCost(t,e,s,i){let a=new n.f;return a=a.append("clientId",""+t),a=a.append("utilityType",""+e),a=a.append("reportType",""+s),a=a.append("isCurrent",""+i),this.http.get(this.baseUrl+"/v1/energy-dashboard/overallEnergyCost",{params:a})}getConsumptionData(t="0",e="",s=""){let i=new n.f;return i=i.append("clientId",""+t),i=i.append("utilityType",""+e),i=i.append("reportType",""+s),this.http.get(this.baseUrl+"/v1/energy-dashboard/consumptionChart",{params:i})}getOverallGroupWiseEnergyCost(t="0",e="",s="",i){let a=new n.f;return a=a.append("clientId",""+t),a=a.append("meterGroupId",""+e),a=a.append("reportType",""+s),a=a.append("isCurrent",""+i),this.http.get(this.baseUrl+"/v1/energy-dashboard/overallGroupwiseEnergyCost",{params:a})}getGroupWiseEnergyCost(t="0",e="",s=""){let i=new n.f;return i=i.append("clientId",""+t),i=i.append("utilityType",""+e),i=i.append("reportType",""+s),this.http.get(this.baseUrl+"/v1/energy-dashboard/groupWiseEnergyCost",{params:i})}getUtilityData(){let t=new n.f;return this.http.post(this.baseUrl+"/dashboard/meterData",{params:t})}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(n.c),a.Xb(i.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},JyMN:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var n=s("zyfE"),i=s("qIvx"),a=s("jhGZ"),r=s("6zYn");class o{constructor(t){this.id=t.id||0,this.clientId=t.clientId||"",this.ownerName=t.ownerName||"",this.dob=t.dob||null,this.title=t.title||"",this.titleId=t.titleId||0,this.firstName=t.firstName||"",this.lastName=t.lastName||"",this.mobile=t.mobile||"",this.email=t.email||"",this.entityType=t.entityType||"Tenant",this.accountNumber=t.accountNumber||"",this.companyName=t.companyName||"",this.photo=t.photo||"",this.isCompany=t.isCompany||!1,this.isOwner=t.isOwner,this.userId=t.userId||"",this.trn=t.trn||"",this.isContractExists=t.isContractExists||!1,this.addresses=(t.addresses||[]).map(t=>new n.a(t)),this.bankDetails=(t.bankDetails||[]).map(t=>new i.a(t)),this.documents=(t.documents||[]).map(t=>new a.a(t)),this.userDetails=t.userDetails||{},this.ownerships=(t.ownerships||[]).map(t=>new r.a(t))}get fullName(){let t="";return this.title&&""!==this.title&&(t+=this.title+" "),this.firstName&&""!==this.firstName&&(t+=this.firstName+" "),this.lastName&&""!==this.lastName&&(t+=this.lastName),t}}},"K+kB":function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var n=s("fXoL");let i=(()=>{class t{constructor(){this.messageSource=!1}getMessage(){return this.messageSource}setMessage(t){return this.messageSource=t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},KcIl:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("tk/3"),i=s("sXtk"),a=s("fXoL");let r=(()=>{class t{constructor(t,e){this.httpClient=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getBillandConsumption(t,e,s){let i=new n.f;return i=i.append("ownerId",""+t),i=i.append("unitId",""+e),i=i.append("utilityTypeId",""+s),this.httpClient.get(this.baseUrl+"/ownerTenantDashboard/AverageMonthlyUsage",{params:i})}getPaymentDetails(t,e,s){let i=new n.f;return i=i.append("ownerId",""+t),i=i.append("unitId",""+e),i=i.append("utilityTypeId",""+s),this.httpClient.get(this.baseUrl+"/ownerTenantDashboard/AccountStatus",{params:i})}getOwnerTenantName(t){let e=new n.f;return e=e.append("ownerId",""+t),this.httpClient.get(this.baseUrl+"/ownerTenantDashboard/ownerTenantName",{params:e})}getOwnerTenantDashboardData(t,e,s,i,a,r){let o=new n.f;return o=o.append("ownerId",""+t),o=o.append("unitId",""+e),o=o.append("utilityTypeId",""+s),o=o.append("type",""+a),o=o.append("clientId",""+i),o=o.append("deviceId",""+r),this.httpClient.get(this.baseUrl+"/ownerTenantDashboard/dashboard/data",{params:o})}getOwnerTenantConsumptionData(t,e,s,i,a,r,o){let c=new n.f;return c=c.append("ownerId",""+t),c=c.append("unitId",""+e),c=c.append("utilityTypeId",""+s),c=c.append("type",""+a),c=c.append("clientId",""+i),c=c.append("deviceId",""+o),this.httpClient.get("PreviousMonth"==r?this.baseUrl+"/ownerTenantDashboard/dashboard/PreviousMonthdaywisedata":this.baseUrl+"/ownerTenantDashboard/dashboard/daywisedata",{params:c})}getNews(t){return this.httpClient.get(this.baseUrl+"/announcements/"+t)}getUnits(t){return this.httpClient.get(this.baseUrl+"/ownerTenantDashboard/"+t+"/GetUnits")}getUtilities(t){return this.httpClient.get(this.baseUrl+"/owners/"+t+"/GetUtilities")}getUtilitiesForUnit(t,e){let s=new n.f;return s=s.append("tenantId",""+t),s=s.append("unitId",""+e),this.httpClient.get(this.baseUrl+"/ownerTenantDashboard/GetUtilities",{params:s})}getTenantUtilityDetails(t,e){return this.httpClient.get(this.baseUrl+"/ownerTenantDashboard/utilityTenant/"+t+"/"+e)}getUtilityUnit(t){let e=new n.f;return e=e.append("utilityTypeId",""+t),this.httpClient.get(this.baseUrl+"/ownerTenantDashboard/utilityUnit",{params:e})}setBarChart(t,e="Consumption in [KWH]",s="Consumption",n="",i=0){let a=s;return{chart:{height:325,type:"column"},credits:{enabled:!1},title:{text:null},subtitle:{text:null},xAxis:{categories:t.labels},yAxis:{min:0,title:{text:e}},lang:{noData:"No data to display"},noData:{style:{fontWeight:"bold",fontSize:"15px"}},legend:{layout:"horizontal",align:"left",verticalAlign:"top",x:0,y:0,floating:!1,shadow:!1},tooltip:{formatter:function(){return"Cost"==a?this.x+": "+n+this.y.toFixed(i):this.x+": "+this.y.toFixed(i)+n}},plotOptions:{column:{pointPadding:.1,borderWidth:0,pointWidth:15}},series:[{name:s,data:t.datas,type:"column"}]}}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(n.c),a.Xb(i.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Li0i:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));var n=s("wd/R");const i=[{message:"Hey David! How's it going?",when:n().subtract(35,"minutes"),who:"partner"},{message:"You wanted to go golfing you remember? What about this weekend?",when:n().subtract(34,"minutes"),who:"partner"},{message:"Hey! I'm good. Sure, let's meet on Saturday at the golf club, okay?",when:n().subtract(28,"minutes"),who:"me"},{message:"Sure thing! I hope we can finally beat our record this time. :)",when:n().subtract(26,"minutes"),who:"partner"},{message:"Awesome! We surely will. ;)",when:n().subtract(22,"minutes"),who:"me"},{message:"See you on Saturday!",when:n().subtract(21,"minutes"),who:"me"}];let a=[{picture:"assets/img/avatars/13.jpg",name:"Lawrence Larson",messages:i,lastMessageTime:n().subtract(170,"minutes"),lastMessage:"commodo deserunt enim"},{picture:"assets/img/avatars/10.jpg",name:"Therese Alvarez",messages:i,lastMessageTime:n().subtract(371,"minutes"),lastMessage:"sunt duis dolor"},{picture:"assets/img/avatars/3.jpg",name:"Roseann Dejesus",messages:i,lastMessageTime:n().subtract(410,"minutes"),lastMessage:"et duis ex"},{picture:"assets/img/avatars/15.jpg",name:"Lorena Aguirre",messages:i,lastMessageTime:n().subtract(239,"minutes"),lastMessage:"consectetur dolor ea"},{picture:"assets/img/avatars/18.jpg",name:"Ayala Martinez",messages:i,lastMessageTime:n().subtract(534,"minutes"),lastMessage:"velit reprehenderit in"},{picture:"assets/img/avatars/10.jpg",name:"Helene Curtis",messages:i,lastMessageTime:n().subtract(215,"minutes"),lastMessage:"enim aute dolore"},{picture:"assets/img/avatars/20.jpg",name:"Donovan Vega",messages:i,lastMessageTime:n().subtract(539,"minutes"),lastMessage:"eiusmod aute et"},{picture:"assets/img/avatars/4.jpg",name:"Frieda Robbins",messages:i,lastMessageTime:n().subtract(187,"minutes"),lastMessage:"officia excepteur elit"},{picture:"assets/img/avatars/20.jpg",name:"Dolores Rojas",messages:i,lastMessageTime:n().subtract(30,"minutes"),lastMessage:"ad duis ex"},{picture:"assets/img/avatars/16.jpg",name:"Lila Wade",messages:i,lastMessageTime:n().subtract(158,"minutes"),lastMessage:"in nostrud anim"},{picture:"assets/img/avatars/19.jpg",name:"Toni Knapp",messages:i,lastMessageTime:n().subtract(288,"minutes"),lastMessage:"consectetur id tempor"}]},"Nr/g":function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("tk/3"),i=s("sXtk"),a=s("fXoL");let r=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getMeterTypes(){return this.http.get(this.baseUrl+"/benchmarksettings/GetMeterTypeData")}getMeters(t,e){let s=new n.f;return s=s.append("clientId",""+t),s=s.append("meterTypeId",""+e),this.http.get(this.baseUrl+"/benchmarksettings/meterList",{params:s})}getParameters(t){let e=new n.f;return e=e.append("meterTypeName",""+t),this.http.get(this.baseUrl+"/benchmarksettings/parameters",{params:e})}viewParameterChart(t,e,s,i){let a=new n.f;return a=a.append("meterId",""+t),a=a.append("parameterId",""+e),a=a.append("meterTypeName",""+s),a=a.append("searchDate",""+i),this.http.get(this.baseUrl+"/dashboardchart/ViewParameterChart",{params:a})}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(n.c),a.Xb(i.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},R3oc:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("ofXK"),i=s("WCGO"),a=s("fXoL");let r=(()=>{class t{}return t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({factory:function(e){return new(e||t)},imports:[[n.c,i.a]]}),t})()},Ytuj:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("tk/3"),i=s("sXtk"),a=s("fXoL");let r=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getDocuments(){return this.http.get(this.baseUrl+"/register")}getUnits(t){return this.http.get(this.baseUrl+"/register/getUnits/clientId/"+t)}getClients(){return this.http.get(this.baseUrl+"/register/getClients")}getUserEnabledActions(t){let e=new n.f;return t&&(e=e.append("userId",t)),this.http.get(this.baseUrl+"/register/user/enabled/actions",{params:e})}getCompanyLogo(){return this.http.get(this.baseUrl+"/register/logo")}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(n.c),a.Xb(i.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},aGrj:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var n=s("eIep");function i(t,e){return e?Object(n.a)(()=>t,e):Object(n.a)(()=>t)}},ctVQ:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("tk/3"),i=s("sXtk"),a=s("fXoL");let r=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getBillPeriods(t){return this.http.get(this.baseUrl+"/billperiods/clientId/"+t)}getBillPeriodsById(t){return this.http.get(this.baseUrl+"/billperiods/"+t)}createBillPeriod(t){return this.http.post(this.baseUrl+"/billperiods/",t)}updateBillPeriodById(t,e){return this.http.put(this.baseUrl+"/billperiods/"+t,e)}deleteBillPeriodById(t,e){const s={headers:new n.e({"Content-Type":"application/json"}),body:e};return this.http.delete(this.baseUrl+"/billperiods/"+t,s)}getBillSettings(t){return this.http.get(this.baseUrl+"/billperiods/billSettings/"+t)}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(n.c),a.Xb(i.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},dDrv:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("sXtk"),i=s("fXoL"),a=s("tk/3");let r=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getMeterTypes(){return this.http.get(this.baseUrl+"/dashboardchart/Estidama/ParameterData")}viewEstidamaChart(t){return this.http.post(this.baseUrl+"/dashboardchart/ViewEstidamaChart",t)}}return t.\u0275fac=function(e){return new(e||t)(i.Xb(a.c),i.Xb(n.a))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},hqoi:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("fXoL"),i=s("tyNb");const a=function(){return[]};let r=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Hb({type:t,selectors:[["fury-page-layout-demo-content"]],decls:41,vars:4,consts:[[1,"margin-0"],[1,"margin-top-0","secondary-text"],[3,"routerLink"],["id","tincidunt-veni-tellus-orci-aenean-consectetuer"],["src","assets/img/demo/mountain-cinematic.jpg"]],template:function(t,e){1&t&&(n.Tb(0,"h1",0),n.Rc(1,"Cinematic Mountain View"),n.Sb(),n.Tb(2,"h3",1),n.Rc(3,"Example Page Layout"),n.Sb(),n.Tb(4,"p"),n.Rc(5,"Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit."),n.Sb(),n.Tb(6,"p"),n.Rc(7,"Eget aenean tellus venenatis. Donec odio tempus. Felis arcu "),n.Tb(8,"a",2),n.Rc(9,"pretium metus"),n.Sb(),n.Rc(10," nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean."),n.Sb(),n.Tb(11,"h2",3),n.Rc(12,"Tincidunt veni tellus orci aenean consectetuer"),n.Sb(),n.Tb(13,"p"),n.Rc(14,"Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus mus ac ante viverra. A aenean sit augue curabitur et parturient nisi sed enim. Nulla nec quis sit quisque sem commodo ultricies neque. Lorem eget venenatis dui ante luctus ultricies tellus montes. Quis in sapien tempus."),n.Sb(),n.Ob(15,"img",4),n.Tb(16,"p"),n.Rc(17,"Aliquam enim arcu ut. Vulputate pede nisi arcu ut nullam. Ac elit ut ullamcorper aenean dolor pede nec aliquam. Cum enim a. Ut dui phasellus cras. Vivamus pulvinar justo faucibus nec semper lorem nullam."),n.Sb(),n.Tb(18,"blockquote"),n.Rc(19,"Quis adipiscing ligula donec ullamcorper tellus. Id odio vulputate aliquam nullam vitae tincidunt semper etiam quam donec quis.\n"),n.Sb(),n.Tb(20,"p"),n.Rc(21,"Ut pede leo libero cum ridiculus quis arcu natoque ullamcorper eget nulla sociis. Semper condimentum quam integer lorem. Amet ac "),n.Tb(22,"em"),n.Rc(23,"dis semper eget"),n.Sb(),n.Rc(24," a dictum ligula. Justo eu ut. Id ridiculus lorem ut amet dis orci tellus etiam aenean pellentesque. Ultricies dui vel ipsum eleifend dolor ante donec justo nullam."),n.Sb(),n.Tb(25,"h2"),n.Rc(26,"Eu ridiculus fringilla"),n.Sb(),n.Tb(27,"p"),n.Rc(28,"Nam dictum vitae penatibus ligula id sem eget ante faucibus feugiat nascetur vel. Pretium vitae mus rhoncus sit maecenas quam felis orci adipiscing. Aenean parturient eget quam. Leo vel lorem sociis phasellus arcu dolor. Dis donec eu pede."),n.Sb(),n.Tb(29,"p"),n.Rc(30,"Venenatis ante veni nullam ridiculus penatibus "),n.Tb(31,"a",2),n.Rc(32,"vidi eu consectetuer"),n.Sb(),n.Rc(33," integer. Vulputate ipsum lorem nascetur rhoncus. Aliquam vitae elit blandit enim eget laoreet. Dapibus leo sociis quis nulla adipiscing amet integer sem ullamcorper in maecenas eu imperdiet."),n.Sb(),n.Tb(34,"p"),n.Rc(35,"Ante blandit amet ultricies ut in nam massa rhoncus. Eget eu massa nisi quis viverra dapibus aliquam. Id ridiculus lorem ut amet dis orci tellus etiam aenean pellentesque."),n.Sb(),n.Tb(36,"p"),n.Rc(37,"Maecenas tempus aenean nulla "),n.Tb(38,"strong"),n.Rc(39,"viverra neque"),n.Sb(),n.Rc(40," vel nec cras justo sapien condimentum ut varius. Blandit sem etiam vel nullam vulputate sociis amet varius dolor. Vitae a ut. Etiam rhoncus ante sit. Nisi nullam donec dui eu phasellus a elementum elit faucibus nec. Eros eu pulvinar pede luctus sit aenean lorem."),n.Sb()),2&t&&(n.Cb(8),n.mc("routerLink",n.qc(2,a)),n.Cb(23),n.mc("routerLink",n.qc(3,a)))},directives:[i.i],styles:[""]}),t})()},kLqA:function(t,e,s){"use strict";e.__esModule=!0;var n=function(){function t(e){if(!e)throw new TypeError("Invalid argument; `value` has no value.");this.value=t.EMPTY,e&&t.isGuid(e)&&(this.value=e)}return t.isGuid=function(e){var s=e.toString();return e&&(e instanceof t||t.validator.test(s))},t.create=function(){return new t([t.gen(2),t.gen(1),t.gen(1),t.gen(1),t.gen(3)].join("-"))},t.createEmpty=function(){return new t("emptyguid")},t.parse=function(e){return new t(e)},t.raw=function(){return[t.gen(2),t.gen(1),t.gen(1),t.gen(1),t.gen(3)].join("-")},t.gen=function(t){for(var e="",s=0;s<t;s++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e},t.prototype.equals=function(e){return t.isGuid(e)&&this.value===e.toString()},t.prototype.isEmpty=function(){return this.value===t.EMPTY},t.prototype.toString=function(){return this.value},t.prototype.toJSON=function(){return{value:this.value}},t.validator=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i"),t.EMPTY="00000000-0000-0000-0000-000000000000",t}();e.Guid=n},kg1N:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("tk/3"),i=s("sXtk"),a=s("fXoL");let r=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getPages(){return this.http.get(this.baseUrl+"/dashboardchart/PageData")}getVolts(){return this.http.get(this.baseUrl+"/dashboardchart/MeterGroupData")}getMeterListByClientId(t){let e=new n.f;return e=e.append("clientId",""+t),this.http.get(this.baseUrl+"/dashboardchart/MeterDataByClientID",{params:e})}getMeterData(t){return this.http.post(this.baseUrl+"/dashboardchart/ViewLCDChart",t)}getTreeViewList(){return this.http.get(this.baseUrl+"/dashboardchart/MeterGroupData")}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(n.c),a.Xb(i.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},qnpF:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var n=s("ofXK"),i=s("3Pt+"),a=s("KthW"),r=s("WCGO"),o=s("0jmt"),c=s("+0xr"),u=s("fXoL");let l=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(e){return new(e||t)},imports:[[n.c,i.l,a.a,r.a,o.a,c.l]]}),t})()},rUwa:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("tk/3"),i=s("sXtk"),a=s("fXoL");let r=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getTenantsDetails(){return this.http.get(this.baseUrl+"/api/billsettlement/tenants")}getCommunicationSummary(t,e){let s=new n.f;return s=s.append("clientId",""+t),s=s.append("tenantId",""+e),this.http.get(this.baseUrl+"/owners/communicationSummary",{params:s})}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(n.c),a.Xb(i.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},vagN:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("sXtk"),i=s("fXoL"),a=s("tk/3");let r=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getTaxSettings(){return this.http.get(this.baseUrl+"/taxSettings/tax-settings")}createTaxSetting(t){return this.http.post(this.baseUrl+"/taxSettings/",t)}updateTaxSettingById(t,e){return this.http.put(this.baseUrl+"/taxSettings/"+t,e)}deleteTaxSettingById(t){return this.http.delete(this.baseUrl+"/taxSettings/"+t)}getNonGroupTaxSettings(){return this.http.get(this.baseUrl+"/taxSettings/nonGroupTaxSettings")}getComputationType(){return this.http.get(this.baseUrl+"/taxSettings/computationType")}getAllTaxSettings(){return this.http.get(this.baseUrl+"/taxSettings/taxSettingsList")}}return t.\u0275fac=function(e){return new(e||t)(i.Xb(a.c),i.Xb(n.a))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},wbzJ:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("tk/3"),i=s("sXtk"),a=s("fXoL");let r=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getVoucherEntries(){return this.http.get(this.baseUrl+"/voucherEntries")}createVoucherEntry(t){return this.http.post(this.baseUrl+"/voucherEntries",t)}getFilteredVoucherEntries(t,e,s,i){let a=new n.f;return a=a.append("voucherType",""+t),a=a.append("voucherName",""+e),a=a.append("fromDate",""+s),a=a.append("toDate",""+i),this.http.get(this.baseUrl+"/voucherEntries/filteredVoucherEntries",{params:a})}getVouchersToExport(t,e,s,i,a){let r=new n.f;return r=r.append("voucherType",""+t),r=r.append("voucherName",""+e),r=r.append("fromDate",""+s),r=r.append("toDate",""+i),r=r.append("clientId",""+a),this.http.get(this.baseUrl+"/voucherEntries/vouchers/export",{params:r})}updateVoucherEntryToXML(t){return this.http.post(this.baseUrl+"/voucherEntries/voucherentry/xml",t)}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(n.c),a.Xb(i.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},wh6T:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s("tk/3"),i=s("sXtk"),a=s("fXoL");let r=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getWorkflowRules(t){let e=new n.f;return e=e.append("clientId",""+t),this.http.get(this.baseUrl+"/workflowrule/items",{params:e})}updateWorkflowRules(t){return this.http.put(this.baseUrl+"/workflowrule/items",t)}}return t.\u0275fac=function(e){return new(e||t)(a.Xb(n.c),a.Xb(i.a))},t.\u0275prov=a.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);