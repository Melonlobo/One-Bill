(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"7d4Y":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("tk/3"),i=n("sXtk"),s=n("fXoL");let l=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getTenantsDetails(t,e=1){return this.http.get(`${this.baseUrl}/billsettlement/tenants/${t}/${e}`)}getUnits(t){return this.http.get(this.baseUrl+"/billsettlement/units/"+t)}getAccountNumbers(t){return this.http.get(this.baseUrl+"/billsettlement/AccountNumbers/"+t)}getPaymentModes(){return this.http.get(this.baseUrl+"/billsettlement/paymentmodes")}getBanks(t){let e=new a.f;return t&&(e=e.append("unitNumber",""+t.unitNumber),e=e.append("tenantId",""+t.tenantId),e=e.append("phoneNumber",""+t.phoneNumber)),this.http.get(this.baseUrl+"/billsettlement/banks",{params:e})}getBillSettlementDetails(t){let e=new a.f;return t&&(e=e.append("unitNumber",""+t.unitNumber),e=e.append("tenantId",""+t.tenantId),e=e.append("billPeriodId",""+t.billPeriodId),e=e.append("settlementDate",""+t.settlementDate),e=e.append("billType",""+t.billType),e=e.append("clientId",""+t.clientId)),this.http.get(this.baseUrl+"/billsettlement/finalsettlement/details",{params:e})}getBillDetails(t){let e=new a.f;return t&&(e=e.append("utilityTypeId",""+t.utilityTypeId),e=e.append("billPeriodId",""+t.billPeriodId),e=e.append("clientId",""+t.clientId),e=e.append("tenantId",""+t.tenantId)),this.http.get(this.baseUrl+"/billsettlement/unbilledconsumption",{params:e})}generateBillDetails(t){return this.http.post(this.baseUrl+"/billsettlement/generate/unbilledconsumption",t)}getOutStandingBillDetails(t){let e=new a.f;return t&&(e=e.append("unitNumber",""+t.unitNumber),e=e.append("tenantId",""+t.tenantId),e=e.append("billPeriodId",""+t.billPeriodId),e=e.append("settlementDate",""+t.settlementDate),e=e.append("billType",""+t.billType),e=e.append("clientId",""+t.clientId)),this.http.get(this.baseUrl+"/billsettlement/outstandingbills",{params:e})}getTenantBillDetails(t){let e=new a.f;return e=e.append("tenantId",""+t),this.http.get(this.baseUrl+"/billsettlement/outstandingbills",{params:e})}saveUnBilledConsumptions(t){return this.http.post(this.baseUrl+"/billsettlement/unbilledconsumption",t)}saveOutstandingBills(t){return this.http.post(this.baseUrl+"/billsettlement/outstandingbills",t)}saveBillPayments(t){return this.http.post(this.baseUrl+"/billsettlement/billpayments",t)}getInvoiceBillDetails(t){let e=new a.f;return t&&(e=e.append("billMasterId",""+t)),this.http.get(this.baseUrl+"/template/billmasterdetails",{params:e})}getReceiptDetails(t){let e=new a.f;return t&&(e=e.append("paymentId",""+t)),this.http.get(this.baseUrl+"/template/paymentdetails",{params:e})}saveRefund(t){return this.http.post(this.baseUrl+"/billsettlement/refund",t)}getBillFailDetails(t){let e=new a.f;return t&&(e=e.append("consumptionType",""+t.consumptionTypeId),e=e.append("utilityTypeId",""+t.utilityTypeId),e=e.append("fromDate",""+t.fromDate),e=e.append("toDate",""+t.toDate),e=e.append("days",""+t.days),e=e.append("percentage",""+t.percentage),e=e.append("billPeriodId",""+t.billPeriodId),e=e.append("clientId",""+t.clientId)),this.http.get(this.baseUrl+"/billsettlement/failed/bills",{params:e})}saveConsumptionRange(t){return this.http.post(this.baseUrl+"/billsettlement/consumption/range",t)}updateFaileBillsStatus(t){return this.http.put(this.baseUrl+"/billsettlement/failed/bills/update",t)}updateBillMasterSyncStatus(t){return this.http.put(this.baseUrl+"/billsettlement/sync/bills/update",t)}updatePaymentSyncStatus(t){return this.http.put(this.baseUrl+"/billsettlement/sync/payment/update",t)}updateRefundSyncStatus(t){return this.http.put(this.baseUrl+"/billsettlement/sync/refund/update",t)}updateCreditNoteSyncStatus(t){return this.http.put(this.baseUrl+"/billsettlement/sync/creditnote/update",t)}deleteConsumptionAlert(t,e){return this.http.put(this.baseUrl+"/billsettlement/consumptionAlert/delete/"+t,e)}invoiceGeneration(t){return this.http.post(this.baseUrl+"/file/report/invoice/generate",t)}updateBillMasterApprovedStatus(t){return this.http.put(this.baseUrl+"/billsettlement/approved/bills/update",t)}regenerateRejectedBillMasters(t){return this.http.put(this.baseUrl+"/billsettlement/regenerate/billmasters",t)}generateOtherTypeInvoiceDetail(t,e){let n=new a.f;return n=n.append("clientId",""+t),n=n.append("contractId",""+e),this.http.post(`${this.baseUrl}/billsettlement/contract/invoice/billmaster/${t}/${e}`,null)}updateOtherTypeConsumption(t){return this.http.put(this.baseUrl+"/billsettlement/othertype/consumption/update",t)}updatBillMasterRejectedStatus(t){return this.http.put(this.baseUrl+"/billsettlement/rejected/bills/update",t)}saveCreditNote(t){return this.http.post(this.baseUrl+"/billsettlement/creditnote",t)}getCreditNoteDetails(t){let e=new a.f;return t&&(e=e.append("fromDate",""+t.fromDate),e=e.append("toDate",""+t.toDate),e=e.append("billPeriodId",""+t.billPeriodId),e=e.append("clientId",""+t.clientId)),this.http.get(this.baseUrl+"/bills/creditnote/history",{params:e})}getConsumptioSavedAlertDetails(t){var e,n;let i=new a.f;return t&&(i=i.append("consumptionTypeId",""+(null!==(e=t.consumptionTypeId)&&void 0!==e?e:0)),i=i.append("utilityTypeId",""+(null!==(n=t.utilityTypeId)&&void 0!==n?n:0)),i=i.append("clientId",""+t.clientId)),this.http.get(this.baseUrl+"/billsettlement/saved/consumption/range/details",{params:i})}getConumptionAlertDetails(t){var e,n,i,s,l;let r=new a.f;return t&&(r=r.append("consumptionTypeId",""+t.consumptionTypeId),r=r.append("utilityTypeId",""+t.utilityTypeId),r=r.append("fromDate",""+(null!==(e=t.fromDate)&&void 0!==e?e:"")),r=r.append("startDate",""+(null!==(n=t.startDate)&&void 0!==n?n:"")),r=r.append("endDate",""+(null!==(i=t.endDate)&&void 0!==i?i:"")),r=r.append("percentage",""+t.percentage),r=r.append("fromBillPeriodId",""+(null!==(s=t.fromBillPeriodId)&&void 0!==s?s:0)),r=r.append("toBillPeriodId",""+(null!==(l=t.toBillPeriodId)&&void 0!==l?l:0)),r=r.append("clientId",""+t.clientId)),this.http.get(this.baseUrl+"/billsettlement/consumption/alert",{params:r})}getRefundAmount(t,e){let n=new a.f;return t&&(n=n.append("ownerId",""+t),n=n.append("paymentId",""+e)),this.http.get(this.baseUrl+"/billsettlement/refundAmount",{params:n})}creditNoteSummaryView(t){return this.http.post(this.baseUrl+"/file/report/creditnote/summary",t)}creditNoteView(t){return this.http.post(this.baseUrl+"/file/report/creditnote",t)}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(a.c),s.Xb(i.a))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},RzHG:function(t,e,n){"use strict";n.r(e),n.d(e,"AdvancePaymentModule",(function(){return q}));var a=n("3Pt+"),i=n("9xt4"),s=n("y/v/"),l=n("ofXK"),r=n("KthW"),o=n("WCGO"),p=n("QMK6"),c=n("VE2z"),d=n("q8Jb"),u=n("kmnG"),m=n("qFsG"),h=n("jaxi"),b=n("NFeN"),f=n("STbY"),y=n("0jmt"),g=n("/t3+"),v=n("Qu3c"),I=n("tyNb"),D=n("Ku73"),w=n("nStZ"),S=n("lW2b"),T=n("fXoL"),U=n("wd/R"),P=n("dNgK"),C=n("Nm8O"),N=n("b6Qw"),k=n("0IaG"),A=n("XiUz"),M=n("iadO"),B=n("bTqV"),x=n("d3UM"),F=n("f0Cb"),O=n("FKr1");function j(t,e){if(1&t&&(T.Tb(0,"mat-option",15),T.Rc(1),T.Sb()),2&t){const t=e.$implicit;T.mc("value",t.id),T.Cb(1),T.Tc("",t.ownerName," ")}}function R(t,e){if(1&t){const t=T.Ub();T.Tb(0,"mat-form-field",2),T.Tb(1,"mat-label"),T.Rc(2,"Owner or Tenant"),T.Sb(),T.Tb(3,"mat-select",11),T.bc("valueChange",(function(e){return T.Ec(t),T.fc().tenantId=e})),T.Tb(4,"input",12,13),T.bc("keydown",(function(e){return T.Ec(t),T.fc().handleInput(e)}))("keyup",(function(e){return T.Ec(t),T.fc().search(e.target.value)})),T.Sb(),T.Ob(6,"mat-divider"),T.Pc(7,j,2,2,"mat-option",14),T.Sb(),T.Sb()}if(2&t){const t=T.fc();T.Cb(3),T.mc("value",t.tenantId),T.Cb(4),T.mc("ngForOf",t.allTenants)}}let Y=(()=>{class t{constructor(t,e,n,a){this.snackbar=t,this.date=e,this.jwtHelperService=n,this.cookieService=a,this.searchClicked=new T.o,this.manageParams={},this.allTenants=[],this.fliterTenants=[],this.fromDate="",this.toDate="",this.tenantId=0,this.tenant="",this.clientId=0,this.role="",this.ownerId=0,this.fliterTenants=this.tenants}get tenants(){return this.allTenants}set tenants(t){this.allTenants=this.fliterTenants=t}ngOnInit(){var t;let e=this.cookieService.get("access_token");const n=this.jwtHelperService.decodeToken(e);n&&(this.role=n["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]),this.ownerId=null!==(t=parseInt(this.cookieService.get("ownerId")))&&void 0!==t?t:0,this.clientId=parseInt(this.cookieService.get("globalClientId"))}onSearch(){this.fromDate&&this.toDate||this.tenantId?(this.manageParams={fromDate:""+(""==this.fromDate?"":U(this.fromDate).format("YYYY-MM-DD")),toDate:""+(""==this.toDate?"":U(this.toDate).format("YYYY-MM-DD")),tenantId:""+this.tenantId,clientId:this.clientId},this.searchClicked.emit(this.manageParams)):this.snackbar.open("Invalid search parameters",null,{duration:5e3,verticalPosition:"top",horizontalPosition:"end",panelClass:["yellow-snackbar"]})}search(t){let e=this.select(t.toLowerCase());this.allTenants=e}select(t){let e=[];if(t)for(let n of this.fliterTenants)n.ownerName.toLowerCase().indexOf(t)>-1&&e.push(n);else e=this.fliterTenants;return e}handleInput(t){t.stopPropagation()}}return t.\u0275fac=function(e){return new(e||t)(T.Nb(P.b),T.Nb(l.f),T.Nb(C.a),T.Nb(N.a))},t.\u0275cmp=T.Hb({type:t,selectors:[["app-advance-payment-toolbar"]],inputs:{tenants:"tenants"},outputs:{searchClicked:"searchClicked"},decls:23,vars:7,consts:[[1,"person","padding-bottom"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutGap.gt-sm","8px"],["color","primary",1,"result"],["id","fromDate","name","fromDate","matInput","","readonly","",3,"ngModel","matDatepicker","click","ngModelChange","focus"],["matSuffix","",3,"for"],["formDatepickerRef1",""],["id","toDate","name","toDate","matInput","","readonly","",3,"ngModel","matDatepicker","click","ngModelChange","focus"],["formDatepickerRef2",""],["class","result","color","primary",4,"ngIf"],[1,"fury-flex-form-field"],["mat-icon-button","",3,"click"],["id","tenant","name","tenant",3,"value","valueChange"],["matInput","","focused","'true'","type","text","autocomplete","off","placeholder","search",1,"myInput",3,"keydown","keyup"],["myInput",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,e){if(1&t){const t=T.Ub();T.Tb(0,"mat-dialog-content"),T.Tb(1,"div",0),T.Tb(2,"form"),T.Tb(3,"div",1),T.Tb(4,"mat-form-field",2),T.Tb(5,"mat-label"),T.Rc(6,"From Date"),T.Sb(),T.Tb(7,"input",3),T.bc("click",(function(){return T.Ec(t),T.Ac(10).open()}))("ngModelChange",(function(t){return e.fromDate=t}))("focus",(function(){return T.Ec(t),T.Ac(10).open()})),T.Sb(),T.Ob(8,"mat-datepicker-toggle",4),T.Ob(9,"mat-datepicker",null,5),T.Sb(),T.Tb(11,"mat-form-field",2),T.Tb(12,"mat-label"),T.Rc(13,"To Date"),T.Sb(),T.Tb(14,"input",6),T.bc("click",(function(){return T.Ec(t),T.Ac(17).open()}))("ngModelChange",(function(t){return e.toDate=t}))("focus",(function(){return T.Ec(t),T.Ac(17).open()})),T.Sb(),T.Ob(15,"mat-datepicker-toggle",4),T.Ob(16,"mat-datepicker",null,7),T.Sb(),T.Pc(18,R,8,2,"mat-form-field",8),T.Tb(19,"div",9),T.Tb(20,"button",10),T.bc("click",(function(){return e.onSearch()})),T.Tb(21,"mat-icon"),T.Rc(22,"search"),T.Sb(),T.Sb(),T.Sb(),T.Sb(),T.Sb(),T.Sb(),T.Sb()}if(2&t){const t=T.Ac(10),n=T.Ac(17);T.Cb(7),T.mc("ngModel",e.fromDate)("matDatepicker",t),T.Cb(1),T.mc("for",t),T.Cb(6),T.mc("ngModel",e.toDate)("matDatepicker",n),T.Cb(1),T.mc("for",n),T.Cb(3),T.mc("ngIf",0==e.ownerId)}},directives:[k.f,a.z,a.r,a.s,A.d,A.e,u.d,u.h,m.b,a.c,M.b,a.q,a.t,M.d,u.j,M.a,l.o,B.a,b.a,x.a,F.a,l.n,O.n],styles:[".button[_ngcontent-%COMP%]{line-height:50px}.myInput[_ngcontent-%COMP%]{height:50px!important;padding:10px!important}"]}),t})();var H=n("EUZL"),_=n("7d4Y"),L=n("KHMF"),E=n("a8hA"),V=n("sXtk"),X=n("xBcV"),G=n("rvYj"),$=n("4FRi"),z=n("uxLP");const K=["htmlData"],W=[{path:"",component:(()=>{class t{constructor(t,e,n,a,i,s,l,r,o,p){var c,d,u;this.billService=t,this.date=e,this.currency=n,this.snackbar=a,this.decimalPipe=i,this.billSettlementService=s,this.jwtHelperService=l,this.clientSelectionService=r,this.cookieService=o,this.envService=p,this.role="",this._gap=16,this.gap=this._gap+"px",this.col2=`1 1 calc(50% - ${this._gap/2}px)`,this.col3=`1 1 calc(33.3333% - ${this._gap/1.5}px)`,this.advancePayments=[],this.selectedRows=[],this.tenants=[],this.columns=[],this.manageParams={},this.columnNames=[],this.dateFormat="",this.currencyFormat="",this.roundFormat="",this.visibleButtons=[],this.advanceDateColumnName="Date",this.advanceAmountColumnName="Advance Amount",this.accountNumber="Account Number",this.ownerNameColumnName="Owner/Tenant",this.paymentNumberColumnName="Payment No",this.dateFormat=null!==(c=Object(L.e)("DateFormat"))&&void 0!==c?c:p.dateFormat,this.currencyFormat=null!==(d=Object(L.e)("Currency"))&&void 0!==d?d:p.currencyFormat,this.roundFormat=null!==(u=Object(L.e)("RoundOff"))&&void 0!==u?u:p.roundOffFormat}get visibleColumns(){return this.columns.filter(t=>t.visible).map(t=>t.property)}addVisibleButtons(){this.visibleButtons=[{property:"advanceAdjust"}]}ngOnInit(){this.clientSelectionService.setIsClientVisible(!0);let t=this.cookieService.get("access_token");const e=this.jwtHelperService.decodeToken(t);e&&(this.role=e["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]),this.getTenants(),this.createColumnNames(),this.createGridColumns(),this.addVisibleButtons(),this.clientId=parseInt(this.cookieService.get("globalClientId"))}createGridColumns(){this.columns=["advanceDatelocal","paymentNumber","accountNumber","ownerName","advanceAmountLocal","action"]}createColumnNames(){this.columnNames=[{name:this.advanceDateColumnName,property:"advanceDatelocal"},{name:this.paymentNumberColumnName,property:"paymentNumber"},{name:this.accountNumber,property:"accountNumber"},{name:this.ownerNameColumnName,property:"ownerName"},{name:this.advanceAmountColumnName,property:"advanceAmountLocal",columnAlign:{"text-align":"right"}},{name:"Actions",property:"actions"}]}getAdvancePaymentDetails(t){this.manageParams=t,this.advancePayments=[],t.fromDate=""==t.fromDate?"":U(t.fromDate).format("YYYY-MM-DD"),t.toDate=""==t.toDate?"":U(t.toDate).format("YYYY-MM-DD"),this.billService.getAdvancePaymentDetails(t).subscribe(t=>{this.dateFormat=Object(L.e)("DateFormat"),this.roundFormat=Object(L.e)("RoundOff"),this.currencyFormat=Object(L.e)("Currency"),t.forEach(t=>{t.advanceDatelocal=this.date.transform(t.advanceDate.toString(),this.dateFormat.toString()),t.advanceAmountLocal=this.currency.transform(t.advanceAmount,this.currencyFormat.toString(),!0,this.roundFormat)}),this.advancePayments=t})}adjustBillsWithAdvance(){let t=parseInt(this.manageParams.tenantId);this.billService.adjustBillsWithAdvance(t).subscribe({next:t=>{1==t?this.notificationMessage("Advance Adjustments Successful.","green-snackbar"):this.notificationMessage("Advance Adjustments already done.","yellow-snackbar")},error:t=>{this.notificationMessage(t,"red-snackbar")}})}getTenants(){this.clientId=parseInt(this.cookieService.get("globalClientId")),this.billSettlementService.getTenantsDetails(this.clientId).subscribe(t=>{this.tenants=t})}getJsonData(){this.tableData=[],null!=this.advancePayments&&this.advancePayments.forEach(t=>{let e={AdvanceDate:this.date.transform(t.advanceDate,"yyyy-MM-dd"),PaymentNumber:t.paymentNumber,AccountNumber:t.accountNumber,OwnerName:t.ownerName,AdvanceAmount:this.currency.transform(t.advanceAmount,this.currencyFormat.toString(),!0,this.roundFormat)};this.tableData.push(e)})}notificationMessage(t,e){this.snackbar.open(t,null,{duration:5e3,verticalPosition:"top",horizontalPosition:"end",panelClass:[e]})}onExport(){if(this.advancePayments&&this.advancePayments.length>0){if(this.getJsonData(),null!=this.tableData&&this.tableData.length>0){const t=H.utils.json_to_sheet(this.tableData),e=H.utils.book_new();H.utils.book_append_sheet(e,t,"Sheet1"),H.writeFile(e,"AdvancePayment.xlsx")}}else this.notificationMessage("No Data to Export","yellow-snackbar")}}return t.\u0275fac=function(e){return new(e||t)(T.Nb(S.a),T.Nb(l.f),T.Nb(l.d),T.Nb(P.b),T.Nb(l.g),T.Nb(_.a),T.Nb(C.a),T.Nb(E.a),T.Nb(N.a),T.Nb(V.a))},t.\u0275cmp=T.Hb({type:t,selectors:[["fury-advance-payment"]],viewQuery:function(t,e){var n;1&t&&(T.Vc(K,!0),T.Jc(Y,!0)),2&t&&(T.zc(n=T.cc())&&(e.htmlData=n.first),T.zc(n=T.cc())&&(e.advancePaymentToolbarComponent=n.first))},decls:15,vars:6,consts:[["mode","card",2,"margin-top","27px"],["fxLayout","column"],["color","primary",1,"position-fixed"],["src","assets/img/fav-icon.png",1,"img-style"],[1,"toolbar-spacer"],["matTooltip","Export","mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon",3,"click"],["fxFlex","grow",1,"basic-forms","route-animations-elements"],["fxLayout","column",1,"result","padding-top"],[3,"tenants","searchClicked"],[3,"tableData","columnsToDisplay","visibleButtons","columnNames","advanceAdjustedRow"]],template:function(t,e){1&t&&(T.Tb(0,"fury-page-layout",0),T.Tb(1,"fury-page-layout-content",1),T.Tb(2,"mat-toolbar",2),T.Ob(3,"img",3),T.Tb(4,"span"),T.Rc(5,"Advance Payment"),T.Sb(),T.Ob(6,"span",4),T.Tb(7,"button",5),T.bc("click",(function(){return e.onExport()})),T.Tb(8,"mat-icon"),T.Rc(9,"import_export"),T.Sb(),T.Sb(),T.Sb(),T.Tb(10,"fury-card",6),T.Tb(11,"fury-card-content",1),T.Tb(12,"div",7),T.Tb(13,"app-advance-payment-toolbar",8),T.bc("searchClicked",(function(t){return e.getAdvancePaymentDetails(t)})),T.Sb(),T.Tb(14,"fury-expandable-table-structure",9),T.bc("advanceAdjustedRow",(function(){return e.adjustBillsWithAdvance()})),T.Sb(),T.Sb(),T.Sb(),T.Sb(),T.Sb(),T.Sb()),2&t&&(T.Cb(10),T.mc("@fadeInUp",void 0),T.Cb(3),T.mc("tenants",e.tenants),T.Cb(1),T.mc("tableData",e.advancePayments)("columnsToDisplay",e.columns)("visibleButtons",e.visibleButtons)("columnNames",e.columnNames))},directives:[X.a,G.a,A.d,g.a,B.a,v.a,b.a,$.a,A.b,$.c,Y,z.a],styles:[".toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.button[_ngcontent-%COMP%]{line-height:50px}.img-style[_ngcontent-%COMP%]{width:32px}.position-fixed[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;top:0;z-index:5}"],data:{animation:[w.a,D.a]}}),t})()}];let J=(()=>{class t{}return t.\u0275mod=T.Lb({type:t}),t.\u0275inj=T.Kb({factory:function(e){return new(e||t)},imports:[[I.j.forChild(W)],I.j]}),t})(),q=(()=>{class t{}return t.\u0275mod=T.Lb({type:t}),t.\u0275inj=T.Kb({factory:function(e){return new(e||t)},providers:[l.f,l.g],imports:[[l.c,J,a.l,i.a,s.a,r.a,o.a,a.w,p.a,c.a,y.a,d.a,u.f,m.c,h.c,b.b,f.c,g.b,v.b]]}),t})()},lW2b:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("tk/3"),i=n("sXtk"),s=n("fXoL");let l=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getUtilityTypes(){return this.http.get(this.baseUrl+"/bills/utilitytypes")}getBillPeriods(t){return this.http.get(this.baseUrl+"/bills/billperiods/"+t)}saveAdvancePayment(t){return this.http.post(this.baseUrl+"/bills/advancepayment",t)}getBillHistory(t){let e=new a.f;return t&&(e=e.append("fromDate",""+t.fromDate),e=e.append("toDate",""+t.toDate),t.billPeriodId&&(e=e.append("billPeriodId",""+t.billPeriodId)),t.billFeeType&&(e=e.append("billFeeType",""+t.billFeeType)),t.billType&&(e=e.append("billType",""+t.billType)),t.tenantId&&(e=e.append("ownerId",""+t.tenantId)),t.clientId&&(e=e.append("clientId",""+t.clientId))),this.http.get(this.baseUrl+"/bills/billhistory",{params:e})}getAccountStatement(t){let e=new a.f;return t&&(e=e.append("fromDate",""+t.fromDate),e=e.append("toDate",""+t.toDate),t.tenantId&&(e=e.append("ownerId",""+t.tenantId)),t.clientId&&(e=e.append("clientId",""+t.clientId))),this.http.get(this.baseUrl+"/bills/account/statement",{params:e})}getPaymentHistory(t){let e=new a.f;return t&&(e=e.append("fromDate",""+t.fromDate),e=e.append("toDate",""+t.toDate),e=e.append("paymentMode",""+t.paymentMode),e=e.append("paymentId",""+t.paymentId),e=e.append("ownerId",""+t.tenantId),e=e.append("clientId",""+t.clientId)),this.http.get(this.baseUrl+"/bills/paymenthistory",{params:e})}getPaymentDetail(t,e){let n=new a.f;return t&&(n=n.append("paymentId",""+t)),e&&(n=n.append("clientId",""+e)),this.http.get(this.baseUrl+"/bills/payment/detail",{params:n})}cancelBillHistory(t){const e={headers:new a.e({"Content-Type":"application/json"}),body:t};return this.http.delete(this.baseUrl+"/billsettlement/CancelBillHistory",e)}getBillCancelledHistory(t){let e=new a.f;return t&&(e=e.append("fromDate",""+t.fromDate),e=e.append("toDate",""+t.toDate),e=e.append("billPeriodId",""+t.billPeriodId),e=e.append("clientId",""+t.clientId)),this.http.get(this.baseUrl+"/bills/billcancelhistory",{params:e})}cancelPaymentHistory(t){const e={headers:new a.e({"Content-Type":"application/json"}),body:t};return this.http.delete(this.baseUrl+"/billsettlement/CancelPaymentHistory",e)}getPaymentCancelHistory(t){let e=new a.f;return t&&(e=e.append("fromDate",""+t.fromDate),e=e.append("toDate",""+t.toDate),e=e.append("paymentMode",""+t.paymentMode),e=e.append("clientId",""+t.clientId)),this.http.get(this.baseUrl+"/bills/paymentcancelhistory",{params:e})}getUtilities(t){return this.http.get(this.baseUrl+"/dashboard/"+t+"/Utilities")}GetPaymentDue(t,e,n,i,s){let l=new a.f;return l=l.append("fromDate",""+t),l=l.append("toDate",""+e),l=l.append("billPeriodId",""+n),l=l.append("ownerId",""+i),l=l.append("clientId",""+s),this.http.get(this.baseUrl+"/bills/paymentdue",{params:l})}GetRefundReport(t,e,n,i){let s=new a.f;return s=s.append("fromDate",""+t),s=s.append("toDate",""+e),s=s.append("ownerId",""+n),s=s.append("clientId",""+i),this.http.get(this.baseUrl+"/bills/refund",{params:s})}getInvoiceAgingReport(t,e){let n=new a.f;return n=n.append("clientId",""+t),n=n.append("toDate",""+e),this.http.get(this.baseUrl+"/bills/invoiceAging",{params:n})}getConsolidatedData(t,e){let n=new a.f;return n=n.append("clientId",""+t),n=n.append("billPeriodId",""+e),this.http.get(this.baseUrl+"/bills/consolidatedReport",{params:n})}getAdvancePaymentDetails(t){let e=new a.f;return t&&(e=e.append("fromDate",""+t.fromDate),e=e.append("toDate",""+t.toDate),e=e.append("ownerId",""+t.tenantId),e=e.append("clientId",""+t.clientId)),this.http.get(this.baseUrl+"/bills/advancePaymentDetails",{params:e})}adjustBillsWithAdvance(t){let e=new a.f;return e=e.append("ownerId",""+t),this.http.put(`${this.baseUrl}/billsettlement/adjustBillsWithAdvance/${t}`,null)}getAdvanceInHandForOwnerTenant(t){let e=new a.f;return e=e.append("clientId",""+t),this.http.get(this.baseUrl+"/bills/advanceInHandForOwnerTenant",{params:e})}updateIsFailedStatusInBills(t){return this.http.put(this.baseUrl+"/bills/isFailed/update",t)}UpdateIsBillFailedStatusInBillMaster(t){return this.http.put(this.baseUrl+"/bills/isBillFailed/update/billMaster",t)}invoiceView(t){return this.http.post(this.baseUrl+"/file/report/invoice",t)}receiptView(t){return this.http.post(this.baseUrl+"/file/report/receipt",t)}sdReceiptView(t){return this.http.post(this.baseUrl+"/file/report/sdreceipt",t)}accountStatementView(t){return this.http.post(this.baseUrl+"/file/report/account/statement",t)}accountStatementSummaryView(t){return this.http.post(this.baseUrl+"/file/report/account/statement/summary",t)}billSummaryView(t){return this.http.post(this.baseUrl+"/file/report/bill/summary",t)}billConsumptionDetails(t,e=!1){let n=new a.f;return t&&(n=n.append("billPeriodId",""+t.billPeriodId),n=n.append("clientId",""+t.clientId),n=n.append("fromDate",""+t.fromDate),n=n.append("toDate",""+t.toDate),n=n.append("isApproved",""+e)),this.http.get(this.baseUrl+"/bills/consumption/details",{params:n})}invoicePreview(t){return this.http.post(this.baseUrl+"/file/report/invoice/preview",t)}}return t.\u0275fac=function(e){return new(e||t)(s.Xb(a.c),s.Xb(i.a))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);