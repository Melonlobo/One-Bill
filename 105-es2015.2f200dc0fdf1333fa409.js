(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"V+Q9":function(e,t,i){"use strict";i.r(t),i.d(t,"MeterReadingModule",(function(){return Q}));var r=i("ofXK"),n=i("tyNb"),a=i("3Pt+"),o=i("M9IT"),s=i("+0xr"),c=i("hXFv"),l=i("kg1N"),p=i("Nr/g"),h=i("WFQN"),d=i("a8hA"),m=i("KHMF"),g=i("cFdI"),b=i("fXoL"),u=i("Nm8O"),f=i("b6Qw"),y=i("XiUz"),T=i("/t3+"),S=i("Wp6s"),x=i("kmnG"),C=i("d3UM"),v=i("qFsG"),M=i("f0Cb"),w=i("FKr1"),O=i("bTqV"),P=i("NFeN"),k=i("znSr");const F=["treeelement"],D=["allMeterTypesSelected"],N=["allParamtersSelected"];function I(e,t){1&e&&(b.Tb(0,"div",26),b.Ob(1,"mat-progress-spinner",27),b.Sb())}function L(e,t){if(1&e&&(b.Tb(0,"mat-option",28),b.Rc(1),b.Sb()),2&e){const e=t.$implicit;b.mc("value",e.description),b.Cb(1),b.Sc(e.description)}}function _(e,t){if(1&e){const e=b.Ub();b.Tb(0,"mat-option",14),b.bc("click",(function(){b.Ec(e);const t=b.fc(),i=b.Ac(19);return t.toggleMeterTypesPerOne(i.viewValue)})),b.Rc(1),b.Sb()}if(2&e){const e=t.$implicit;b.mc("value",e.id),b.Cb(1),b.Tc(" ",e.deviceName," ")}}function R(e,t){if(1&e){const e=b.Ub();b.Tb(0,"mat-option",14),b.bc("click",(function(){b.Ec(e);const t=b.fc(),i=b.Ac(28);return t.toggleParametersPerOne(i.viewValue)})),b.Rc(1),b.Sb()}if(2&e){const e=t.$implicit;b.mc("value",e.id),b.Cb(1),b.Tc(" ",e.description," ")}}function V(e,t){if(1&e&&(b.Tb(0,"div",35),b.Tb(1,"div",36),b.Tb(2,"b",37),b.Rc(3),b.Sb(),b.Tb(4,"b",38),b.Rc(5),b.Sb(),b.Sb(),b.Sb()),2&e){const e=t.$implicit;b.Cb(3),b.Tc(" ",e.pramName,""),b.Cb(2),b.Tc(" ",e.pramValue," ")}}const z=function(e,t){return{color:e,background:t}};function A(e,t){if(1&e&&(b.Tb(0,"mat-card",29),b.Tb(1,"h3",30),b.Tb(2,"div",31),b.Tb(3,"mat-icon",32),b.Rc(4,"circle "),b.Sb(),b.Sb(),b.Rc(5),b.Sb(),b.Pc(6,V,6,2,"div",33),b.Tb(7,"h3",34),b.Rc(8),b.Sb(),b.Sb()),2&e){const e=t.$implicit;b.Cb(3),b.mc("ngStyle",b.sc(4,z,e.meterBgColor,e.meterBgColor)),b.Cb(2),b.Tc(" ",e.meterName," "),b.Cb(1),b.mc("ngForOf",e.meterParameters),b.Cb(2),b.Sc(e.updatedTime)}}function j(e,t){1&e&&(b.Tb(0,"mat-card",39),b.Tb(1,"label"),b.Tb(2,"b"),b.Rc(3," No Data Found "),b.Sb(),b.Sb(),b.Sb())}const G=function(){return[8,12,16,24,100]},U=[{path:"",component:(()=>{class e{constructor(e,t,i,r,n,a,o,c,l,p){this.changeDetectorRef=e,this.meterService=t,this.parameterChartService=i,this.decimalPipe=r,this.generalDashBoardService=n,this.meterReplacementService=a,this.clientSelectionService=o,this.fb=c,this.jwtHelperService=l,this.cookieService=p,this.showSpinner=!1,this.meterTypeConfig={displayKey:"meterName",search:!0,height:"200px",customComparator:()=>{},placeholder:"Meter Type",searchOnKey:"meterName",clearOnSelection:!0},this.meterGroupList=[],this.lstMeterGroup=[],this.group=null,this.subGroup=null,this.meterType="",this.filterMeterType=[],this.consumptionRoundOffFormat=Object(m.e)("ConsumptionRoundOff"),this.blnSubroup=!0,this.blnMeterType=!0,this.meterData={},this.divHeight="129px;",this.blnTreeView=!1,this.showCheckBox=!0,this.hierarchicalData=[],this.field={dataSource:this.hierarchicalData,id:"id",text:"name",child:"subChild"},this.txtSearch="",this.voltType=[],this.lstpageNo=[],this.lstvoltType=[],this.fliterVoltType=[],this.cardData=[],this.dataSource=new s.k(this.cardData),this.length="",this.pageSize="12",this.meterTypes=[],this.dropdownSettings={singleSelection:!1,idField:"meterID",textField:"meterName",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:3,allowSearchFilter:!1}}ngOnInit(){this.clientSelectionService.setIsClientVisible(!0),this.txtForm=this.fb.group({meterType:["",a.y.compose([a.y.required])],voltType:[null,a.y.compose([a.y.required])]}),this.getClientId(),this.getMeterTypes()}getClientId(){let e=this.cookieService.get("access_token");const t=this.jwtHelperService.decodeToken(e);if(t&&(this.role=t["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]),this.role&&"ems"==this.role.toLowerCase()){const e=this.cookieService.get("filterData");if(e){let t=JSON.parse(e);this.clientId=""==t.strClientId?"0":t.strClientId}}else this.clientId=this.cookieService.get("globalClientId")}getMeterTypes(){this.meterTypes=[],this.lstMeterType=[],this.lstvoltType=[],this.generalDashBoardService.getUtilities(this.clientId).subscribe(e=>{e&&(this.meterTypes=e,this.meterTypeId=this.meterTypes[0].id,this.meterTypeName=this.meterTypes[0].description,this.meterGroupList=e.meterGroupList,this.onMeterTypeChange())})}onMeterTypeChange(e=null){e&&(this.meterTypeName=e.value),this.meterTypes.find(e=>{e.description==this.meterTypeName&&(this.meterTypeId=e.id)}),this.getMeters(),this.getParameters()}getMeters(){var e;this.lstMeterType=[],this.lstMeter=[],this.meterReplacementService.getV1DeviceGroupMeterListWithoutFlowTypeFilter(null!==(e=this.meterTypeId)&&void 0!==e?e:0,0,this.clientId).subscribe(e=>{e&&(this.lstMeterType=this.filterMeterType=e)})}getParameters(){this.lstvoltType=[],this.voltType=[],this.parameterChartService.getParameters(this.meterTypeName).subscribe(e=>{e&&(this.lstvoltType=this.fliterVoltType=e)})}getData(){this.cardData=[],this.showSpinner=!0,this.meterType="";let e=0;this.lstMeter.forEach(t=>{e++,this.meterType+=t,this.lstMeter.length!=e&&(this.meterType+=",")});let t=this.voltType.indexOf(0);t>=0&&this.voltType.splice(t,1);let i=this.voltType.join(",");this.meterData.MeterId=this.meterType,this.meterData.ParameterId=i,this.meterService.getMeterData(this.meterData).subscribe({next:e=>{e?(this.cardData=[],this.cardData=e,this.cardData&&this.cardData.length>0&&(this.consumptionRoundOffFormat=Object(m.e)("ConsumptionRoundOff",0,this.meterTypeName),this.cardData.forEach(e=>{e.meterParameters.forEach(e=>{let t=e.pramValue.substring(e.pramValue.indexOf(" ")+1,e.pramValue.length),i=e.pramValue.substring(0,e.pramValue.indexOf(" "));e.pramValue=this.decimalPipe.transform(i,this.consumptionRoundOffFormat)+" "+t})})),this.length=this.cardData.length.toString(),this.changeDetectorRef.detectChanges(),this.dataSource=new s.k(this.cardData),this.dataSource.paginator=this.paginator,this.obs=this.dataSource.connect(),this.showSpinner=!1):(this.cardData=[],this.changeDetectorRef.detectChanges(),this.dataSource=new s.k(this.cardData),this.dataSource.paginator=this.paginator,this.obs=this.dataSource.connect(),this.showSpinner=!1)},error:e=>{this.cardData=[],this.changeDetectorRef.detectChanges(),this.dataSource=new s.k(this.cardData),this.dataSource.paginator=this.paginator,this.obs=this.dataSource.connect(),this.showSpinner=!1}})}getMeterData(){this.getData(),setInterval(()=>{this.getData()},24e4)}openTreeView(){1==this.blnTreeView?(this.divHeight="129px",this.blnTreeView=!1):(this.divHeight="259px",this.blnTreeView=!0)}toggleMeterTypesAllSelection(){this.txtForm.controls.meterType.patchValue(this.allMeterTypesSelected.selected?[...this.lstMeterType.map(e=>e.id),0]:[])}toggleMeterTypesPerOne(e){if(this.allMeterTypesSelected.selected)return this.allMeterTypesSelected.deselect(),!1;this.txtForm.controls.meterType.value.length==this.lstMeterType.length&&this.allMeterTypesSelected.select()}toggleParametersAllSelection(){this.txtForm.controls.voltType.patchValue(this.allParamtersSelected.selected?[...this.lstvoltType.map(e=>e.id),0]:[])}toggleParametersPerOne(e){if(this.allParamtersSelected.selected)return this.allParamtersSelected.deselect(),!1;this.txtForm.controls.voltType.value.length==this.lstvoltType.length&&this.allParamtersSelected.select()}searchParameters(e){let t=this.selectParameters(e.toLowerCase());this.lstvoltType=t}selectParameters(e){let t=[];for(let i of this.fliterVoltType)i.description.toLowerCase().indexOf(e)>-1&&t.push(i);return t}searchMeterType(e){let t=this.selectMeterType(e.toLowerCase());this.lstMeterType=t}selectMeterType(e){let t=[];for(let i of this.filterMeterType)i.deviceName.toLowerCase().indexOf(e)>-1&&t.push(i);return t}handleInput(e){e.stopPropagation()}}return e.\u0275fac=function(t){return new(t||e)(b.Nb(b.h),b.Nb(l.a),b.Nb(p.a),b.Nb(r.g),b.Nb(g.a),b.Nb(h.a),b.Nb(d.a),b.Nb(a.f),b.Nb(u.a),b.Nb(f.a))},e.\u0275cmp=b.Hb({type:e,selectors:[["fury-meter-reading"]],viewQuery:function(e,t){var i;1&e&&(b.Vc(F,!0),b.Vc(o.a,!0),b.Vc(D,!0),b.Vc(N,!0)),2&e&&(b.zc(i=b.cc())&&(t.tree=i.first),b.zc(i=b.cc())&&(t.paginator=i.first),b.zc(i=b.cc())&&(t.allMeterTypesSelected=i.first),b.zc(i=b.cc())&&(t.allParamtersSelected=i.first))},decls:40,vars:20,consts:[["fxLayout","column wrap",2,"padding","27px 27px 27px 27px"],["class","loading-indicator",4,"ngIf"],["color","primary",1,"position-fixed"],["src","assets/img/fav-icon.png",1,"img-style"],[1,"toolbar-spacer"],["fxLayout","row",2,"height","129px"],["fxLayoutGap","2px","fxFlexLayout","row","fxFlex","",1,"mat-elevation-z4"],["fxFlexLayout","column","fxFlex","80%","fxLayoutGap","25px",2,"margin-top","2% !important"],["name","meterType","id","meterTypeId","placeholder","Select a Meter Type",3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["fxFlex","20%",1,"left-space"],["multiple","","placeholder","Select a Meter",1,"multiSelectCustom",3,"ngModel","formControl","ngModelChange"],["matInput","","focused","'true'","type","text","autocomplete","off","placeholder","search",1,"myInput",3,"keydown","keyup"],["myInput",""],[3,"value","click"],["allMeterTypesSelected",""],[3,"value","click",4,"ngFor","ngForOf"],["multiple","","placeholder","Parameters",1,"multiSelectCustom",3,"ngModel","formControl","ngModelChange"],["allParamtersSelected",""],["fxFlex","20%"],["fxFlexLayout","row","color","primary","mat-raised-button","",1,"common-buttons",3,"disabled","click"],["fxLayoutGap","8px",1,"card-data"],["class","mat-elevation-z8","class","meter-card",4,"ngFor","ngForOf"],["fxFlex","","class","text-align",4,"ngIf"],[1,"paginator"],[3,"length","pageSize","pageSizeOptions","page"],[1,"loading-indicator"],["mode","indeterminate","color","accent"],[3,"value"],[1,"meter-card"],[2,"margin-top","0px","background-color","#e8e8e8"],[1,"blink_me"],[1,"white-icon",3,"ngStyle"],["class","parameterCustom","style","padding:2%;",4,"ngFor","ngForOf"],[2,"background-color","#e8e8e8"],[1,"parameterCustom",2,"padding","2%"],["fxLayout","row","fxLayoutGap","100"],["fxLayoutAlign","start center","fxFlex","50"],["fxLayoutAlign","end center","fxFlex","50","fxLayoutAlign","end center"],["fxFlex","",1,"text-align"]],template:function(e,t){1&e&&(b.Tb(0,"div",0),b.Pc(1,I,2,0,"div",1),b.Tb(2,"mat-toolbar",2),b.Ob(3,"img",3),b.Tb(4,"span"),b.Rc(5,"Live Meter Reading"),b.Sb(),b.Ob(6,"span",4),b.Sb(),b.Tb(7,"div",5),b.Tb(8,"mat-card",6),b.Tb(9,"div",7),b.Tb(10,"mat-form-field"),b.Tb(11,"mat-select",8),b.bc("ngModelChange",(function(e){return t.meterTypeName=e}))("selectionChange",(function(e){return t.onMeterTypeChange(e)})),b.Pc(12,L,2,2,"mat-option",9),b.Sb(),b.Sb(),b.Tb(13,"mat-form-field",10),b.Tb(14,"mat-select",11),b.bc("ngModelChange",(function(e){return t.lstMeter=e})),b.Tb(15,"input",12,13),b.bc("keydown",(function(e){return t.handleInput(e)}))("keyup",(function(e){return t.searchMeterType(e.target.value)})),b.Sb(),b.Ob(17,"mat-divider"),b.Tb(18,"mat-option",14,15),b.bc("click",(function(){return t.toggleMeterTypesAllSelection()})),b.Rc(20,"Select All"),b.Sb(),b.Pc(21,_,2,2,"mat-option",16),b.Sb(),b.Sb(),b.Tb(22,"mat-form-field",10),b.Tb(23,"mat-select",17),b.bc("ngModelChange",(function(e){return t.voltType=e})),b.Tb(24,"input",12,13),b.bc("keydown",(function(e){return t.handleInput(e)}))("keyup",(function(e){return t.searchParameters(e.target.value)})),b.Sb(),b.Ob(26,"mat-divider"),b.Tb(27,"mat-option",14,18),b.bc("click",(function(){return t.toggleParametersAllSelection()})),b.Rc(29,"Select All"),b.Sb(),b.Pc(30,R,2,2,"mat-option",16),b.Sb(),b.Sb(),b.Tb(31,"div",19),b.Tb(32,"button",20),b.bc("click",(function(){return t.getMeterData()})),b.Rc(33," APPLY "),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(34,"div",21),b.Pc(35,A,9,7,"mat-card",22),b.gc(36,"async"),b.Sb(),b.Pc(37,j,4,0,"mat-card",23),b.Tb(38,"div",24),b.Tb(39,"mat-paginator",25),b.bc("page",(function(e){return t.pageEvent=e})),b.Sb(),b.Sb(),b.Sb()),2&e&&(b.Cb(1),b.mc("ngIf",t.showSpinner),b.Cb(10),b.mc("ngModel",t.meterTypeName),b.Cb(1),b.mc("ngForOf",t.meterTypes),b.Cb(2),b.mc("ngModel",t.lstMeter)("formControl",t.txtForm.controls.meterType),b.Cb(4),b.mc("value",0),b.Cb(3),b.mc("ngForOf",t.lstMeterType),b.Cb(2),b.mc("ngModel",t.voltType)("formControl",t.txtForm.controls.voltType),b.Cb(4),b.mc("value",0),b.Cb(3),b.mc("ngForOf",t.lstvoltType),b.Cb(2),b.mc("disabled",t.txtForm.invalid),b.Cb(3),b.mc("ngForOf",b.hc(36,17,t.obs)),b.Cb(2),b.mc("ngIf",0==t.cardData.length),b.Cb(2),b.mc("length",t.length)("pageSize",t.pageSize)("pageSizeOptions",b.qc(19,G)))},directives:[y.d,r.o,T.a,S.a,y.e,y.b,x.d,C.a,a.q,a.t,r.n,a.h,v.b,M.a,w.n,O.a,o.a,P.a,r.p,k.c,y.c],pipes:[r.b],styles:['.heading[_ngcontent-%COMP%]{background:#1976d2;font-size:17px;height:0}.paginator[_ngcontent-%COMP%]{margin-top:4%}.common-buttons[_ngcontent-%COMP%]{align-self:center;margin-top:4%;margin-left:15px}.text-align[_ngcontent-%COMP%]{text-align:center}.img-style[_ngcontent-%COMP%]{width:32px}.ngx-dropdown-container[_ngcontent-dvk-c365][_ngcontent-%COMP%]{height:20%!important}.nodata[_ngcontent-%COMP%]{width:80%;height:16%;margin-top:6%;color:grey;align-self:center}.mat-icon[_ngcontent-%COMP%]{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;border-radius:73%}.white-icon[_ngcontent-%COMP%]{color:green;background:green;transform:scale(.5);margin:0;padding:0}.search[_ngcontent-%COMP%]{border:1;outline:none}.blink_me[_ngcontent-%COMP%]{-webkit-animation:blinker 1s linear infinite;animation:blinker 1s linear infinite;margin:0;padding:0}@-webkit-keyframes blinker{50%{opacity:0}}@keyframes blinker{50%{opacity:0}}.meter-card[_ngcontent-%COMP%]{text-align:center;height:52%;width:20%;min-width:20%;min-height:52%;margin-top:10px;padding:0;border:10px solid #002365;box-shadow:10px #444 solid;background-color:rgba(255,251,251,.986);border-radius:1%;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}.card-data[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly}.mat-card-content[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child, .mat-card[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{margin-top:3%}.left-space[_ngcontent-%COMP%]{margin-left:30px}[_nghost-%COMP%]     .multiselect-dropdown .dropdown-btn{display:inline-block;height:37px;width:100%;padding:6px 12px;margin-bottom:0;font-size:12px;font-weight:400;text-align:left;vertical-align:middle;cursor:pointer;margin-top:1px;position:relative}[_nghost-%COMP%]     .mat-paginator{justify-content:flex-end}.parameterCustom[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{max-width:30px;text-align:left}.myInput[_ngcontent-%COMP%]{height:50px!important;padding:10px!important}.position-fixed[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;top:0;z-index:5}.loading-indicator[_ngcontent-%COMP%]{position:fixed;z-index:999;height:2em;width:2em;overflow:show;margin:auto;top:0;left:0;bottom:0;right:0}.loading-indicator[_ngcontent-%COMP%]:before{content:"";display:block;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.3)}']}),e})()}];let H=(()=>{class e{}return e.\u0275mod=b.Lb({type:e}),e.\u0275inj=b.Kb({factory:function(t){return new(t||e)},imports:[[n.j.forChild(U)],n.j]}),e})();var K=i("YUcS"),q=i("8bGj");let B=(()=>{let e=class{transform(e,t){return e&&t?e.filter(e=>this.applyFilter(e,t)):e}applyFilter(e,t){return"string"==typeof e.text&&"string"==typeof t.text?!(t.text&&e.text&&-1===e.text.toLowerCase().indexOf(t.text.toLowerCase())):!(t.text&&e.text&&-1===e.text.toString().toLowerCase().indexOf(t.text.toString().toLowerCase()))}};return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=b.Mb({name:"multiSelectFilter",type:e,pure:!1}),e})();var E;let $=(()=>{let e=E=class{static forRoot(){return{ngModule:E}}};return e.\u0275mod=b.Lb({type:e}),e.\u0275inj=b.Kb({factory:function(t){return new(t||e)},providers:[B],imports:[[r.c,a.l]]}),e})(),Q=(()=>{class e{}return e.\u0275mod=b.Lb({type:e}),e.\u0275inj=b.Kb({factory:function(t){return new(t||e)},providers:[r.g],imports:[[r.c,H,C.b,w.o,S.g,T.b,P.b,a.l,M.b,a.w,K.a,O.b,v.c,x.f,c.a,o.b,q.a,$]]}),e})()}}]);