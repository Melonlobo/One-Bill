(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"0Gkm":function(e,t,a){"use strict";a.r(t),a.d(t,"MeterDeviceDataDetailsModule",(function(){return Ce}));var i=a("ofXK"),s=a("tyNb"),n=a("Ku73"),r=a("nStZ"),o=a("WFQN"),c=a("wd/R"),l=a("kg1N"),h=a("EUZL"),m=a("dDrv"),d=a("Nr/g"),u=a("+0xr"),p=a("M9IT"),g=a("Dh3D"),b=a("jtHE"),f=a("pLZG"),y=a("KHMF"),C=a("a8hA"),S=a("sXtk"),D=a("cFdI"),w=a("6n/F"),v=a("fXoL"),P=a("dNgK"),R=a("3Pt+"),M=a("Nm8O"),T=a("b6Qw"),x=a("xBcV"),N=a("rvYj"),F=a("XiUz"),O=a("/t3+"),k=a("bTqV"),I=a("Qu3c"),L=a("NFeN"),V=a("4FRi"),j=a("bSwM"),q=a("kmnG"),E=a("d3UM"),A=a("qFsG"),_=a("f0Cb"),z=a("FKr1"),K=a("iadO"),W=a("Xa2L"),Z=a("Wp6s");const $=["allSelected"],G=["allParameterSelected"];function U(e,t){1&e&&(v.Tb(0,"div",42),v.Ob(1,"mat-progress-spinner",43),v.Sb())}function H(e,t){if(1&e){const e=v.Ub();v.Tb(0,"mat-form-field"),v.Tb(1,"mat-label"),v.Rc(2,"Data Frequency"),v.Sb(),v.Tb(3,"input",44),v.bc("ngModelChange",(function(t){return v.Ec(e),v.fc().dataFrequency=t})),v.Sb(),v.Tb(4,"mat-hint"),v.Rc(5,"Please enter Data Frequency (1-24)"),v.Sb(),v.Sb()}if(2&e){const e=v.fc();v.Cb(3),v.mc("ngModel",e.dataFrequency)}}function X(e,t){if(1&e&&(v.Tb(0,"mat-option",45),v.Rc(1),v.Sb()),2&e){const e=t.$implicit;v.mc("value",e.description),v.Cb(1),v.Sc(e.description)}}function Y(e,t){if(1&e){const e=v.Ub();v.Tb(0,"mat-option",46),v.bc("click",(function(){v.Ec(e);const t=v.fc(),a=v.Ac(36);return t.togglePerOne(a.viewValue)})),v.Rc(1),v.Sb()}if(2&e){const e=t.$implicit;v.mc("optionSelected",e.selected)("value",e.id),v.Cb(1),v.Tc(" ",e.deviceName," ")}}function Q(e,t){if(1&e){const e=v.Ub();v.Tb(0,"mat-option",46),v.bc("click",(function(){v.Ec(e);const t=v.fc(),a=v.Ac(47);return t.toggleParametersPerOne(a.viewValue)})),v.Rc(1),v.Sb()}if(2&e){const e=t.$implicit;v.mc("optionSelected",e.selected)("value",e.id),v.Cb(1),v.Tc(" ",e.description," ")}}function B(e,t){1&e&&(v.Tb(0,"mat-label"),v.Rc(1,"From Date"),v.Sb())}function J(e,t){1&e&&(v.Tb(0,"mat-label"),v.Rc(1,"Reading Date"),v.Sb())}function ee(e,t){if(1&e){const e=v.Ub();v.Tb(0,"mat-form-field",27),v.Tb(1,"mat-label"),v.Rc(2,"To Date"),v.Sb(),v.Tb(3,"input",47),v.bc("click",(function(){return v.Ec(e),v.Ac(6).open()}))("ngModelChange",(function(t){return v.Ec(e),v.fc().toDate=t}))("focus",(function(){return v.Ec(e),v.Ac(6).open()})),v.Sb(),v.Ob(4,"mat-datepicker-toggle",29),v.Ob(5,"mat-datepicker",null,48),v.Sb()}if(2&e){const e=v.Ac(6),t=v.fc();v.Cb(3),v.mc("ngModel",t.toDate)("matDatepicker",e),v.Cb(1),v.mc("for",e)}}function te(e,t){1&e&&(v.Tb(0,"div",49),v.Tb(1,"mat-card",50),v.Ob(2,"div",51),v.Sb(),v.Sb())}function ae(e,t){if(1&e&&(v.Tb(0,"th",55),v.Rc(1),v.Sb()),2&e){const e=v.fc().$implicit;v.Cb(1),v.Tc(" ",e.name,"")}}function ie(e,t){if(1&e&&(v.Tb(0,"td",56),v.Rc(1),v.Sb()),2&e){const e=t.$implicit,a=v.fc().$implicit;v.Cb(1),v.Tc(" ",e[a.property]," ")}}function se(e,t){if(1&e&&(v.Rb(0),v.Rb(1,52),v.Pc(2,ae,2,1,"th",53),v.Pc(3,ie,2,1,"td",54),v.Qb(),v.Qb()),2&e){const e=t.$implicit;v.Cb(1),v.mc("matColumnDef",e.property)}}function ne(e,t){1&e&&v.Ob(0,"tr",57)}function re(e,t){1&e&&v.Ob(0,"tr",58)}const oe=[{path:"",component:(()=>{class e{constructor(e,t,a,i,s,n,r,o,c,l,h,m,d){var p;this.snackbar=e,this.fb=t,this.date=a,this.decimalPipe=i,this.generalDashBoardService=s,this.jwtHelperService=n,this.meterService=r,this.estidamaChartService=o,this.parameterChartService=c,this.meterReplacementService=l,this.clientSelectionService=h,this.cookieService=m,this.envService=d,this.showSpinner=!1,this.columns=[],this.columnNames=[],this.deviceData=[],this.exportedData=[],this.dateFormat="",this.consumptionRoundOffFormat=Object(y.e)("ConsumptionRoundOff"),this.fromDate="",this.toDate="",this.parameterIds=["V30","V1","V7","V8","V19"],this.meterIds=[],this.meters=[],this.filterMeters=[],this.selectedData="",this.selectedMeters=[],this.selectedParameters=[],this.selectedParametersName=[],this.group=null,this.subGroup=null,this.hierarchicalData=[],this.blnSubroup=!0,this.meterReading={},this.showLastReading=!1,this.showDataFrequency=!1,this.showZeroValueReading=!1,this.meterTypes=[],this.isDataFrequency=!1,this.showChart=!1,this.pollingDateColumnName="Polling Date",this.pollingTimeColumnName="Polling Time",this.deviceNameColumnName="Device Name",this.unitNumberColumnName="Unit Number",this.displayedColumns=[{name:this.pollingDateColumnName,property:"PollingDate"},{name:this.pollingTimeColumnName,property:"PollingTime"},{name:this.deviceNameColumnName,property:"DeviceName"},{name:this.unitNumberColumnName,property:"UnitNumber"}],this.pageSize=20,this.subject$=new b.a(1),this.data$=this.subject$.asObservable(),this.dateFormat=null!==(p=Object(y.e)("DateFormat"))&&void 0!==p?p:d.dateFormat,this.dataSource=new u.k,this.dataSource.data=[]}set content(e){this.sort=e,this.sort&&(this.dataSource.sort=this.sort)}get visibleColumns(){return this.displayedColumns.map(e=>e.property)}createGridColumns(){this.columns=["PollingDate","PollingTime","DeviceName","UnitNumber"]}createColumnNames(){this.displayedColumns=[{name:this.pollingDateColumnName,property:"PollingDate"},{name:this.pollingTimeColumnName,property:"PollingTime"},{name:this.deviceNameColumnName,property:"DeviceName"},{name:this.unitNumberColumnName,property:"UnitNumber"}]}ngOnInit(){if(this.clientSelectionService.setIsClientVisible(!0),this.getClientId(),this.form=this.fb.group({meterTypeId:[""],meterIds:[""],parameterIds:[""],fromDate:[""],toDate:[""],dataFrequency:[""]}),this.createColumnNames(),this.selectedParameters)for(let e=0;e<this.selectedParameters.length;e++)this.columns.push(this.selectedParameters[e]),this.displayedColumns.push({name:this.selectedParameters[e],property:this.selectedParameters[e]});this.getMeterTypes()}getClientId(){let e=this.cookieService.get("access_token");const t=this.jwtHelperService.decodeToken(e);if(t&&(this.role=t["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]),this.role&&"ems"==this.role.toLowerCase()){const e=this.cookieService.get("filterData");if(e){let t=JSON.parse(e);this.clientId=""==t.strClientId?"0":t.strClientId}}else this.clientId=this.cookieService.get("globalClientId")}ngAfterViewInit(){this.dataSource&&(this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort)}notificationMessage(e,t){this.snackbar.open(e,null,{duration:5e3,verticalPosition:"top",horizontalPosition:"end",panelClass:[t]})}getMeterTypes(){this.meterTypes=[],this.selectedMeters=[],this.metadataMeters=[],this.parameters=[],this.selectedParameters=[],this.generalDashBoardService.getUtilities(this.clientId).subscribe(e=>{e&&(this.meterTypes=e,this.meterTypeId=this.meterTypes[0].id,this.meterTypeName=this.meterTypes[0].description,this.onMeterTypeChange())})}onMeterTypeChange(e=null){e&&(this.meterTypeName=e.value),this.meterTypes.find(e=>{e.description==this.meterTypeName&&(this.meterTypeId=e.id)}),this.getMeters(),this.getParameters()}getMeters(){var e;this.metadataMeters=[],this.selectedMeters=[],this.meterReplacementService.getV1DeviceGroupMeterListWithoutFlowTypeFilter(null!==(e=this.meterTypeId)&&void 0!==e?e:0,0,this.clientId).subscribe(e=>{e&&(this.metadataMeters=this.filteredMeters=e)})}getParameters(){this.parameters=[],this.selectedParameters=[],this.parameterChartService.getParameters(this.meterTypeName).subscribe(e=>{e&&(this.parameters=this.fliterParameters=e)})}onSearch(){let e,t={labels:[],datas:[]},a="";if(this.meterReadings={},this.showChart=!1,this.showSpinner=!0,this.fromDate=""==this.fromDate?"":c(this.fromDate).format("YYYY-MM-DD"),this.toDate=""==this.toDate?"":c(this.toDate).format("YYYY-MM-DD"),this.exportedData=[],this.showLastReading&&(this.toDate=""),this.selectedData="",this.parameters)for(let i=0;i<this.parameters.length;i++)this.selectedParameters.find(e=>this.parameters[i].id==e)&&(this.selectedData&&this.selectedData.length>0&&(this.selectedData+=","),this.selectedData+=this.parameters[i].description);if(""!=this.fromDate&&this.selectedData&&this.selectedData.length>0&&this.selectedMeters&&this.selectedMeters.length>0&&(0==this.showLastReading&&""!=this.toDate||this.showLastReading&&""==this.toDate)&&(this.showDataFrequency&&this.dataFrequency>0&&this.dataFrequency<=24||!this.showDataFrequency)){this.displayedColumns=[],this.consumptionRoundOffFormat=Object(y.e)("ConsumptionRoundOff",0,this.meterTypeName),this.consumptionRoundOffFormat&&""!=this.consumptionRoundOffFormat&&(e=parseInt(this.consumptionRoundOffFormat.substring(this.consumptionRoundOffFormat.indexOf("-")+1,this.consumptionRoundOffFormat.length))),this.createColumnNames();let i=[];if(this.displayedColumns.forEach(e=>{i.push(e.name.replace(" ",""))}),this.selectedParametersName=[],this.deviceData=[],this.selectedData&&(this.selectedParametersName=this.selectedData.split(",")),this.selectedParametersName){for(let e=0;e<this.selectedParametersName.length;e++)"Select All"!=this.selectedParametersName[e]&&(this.columns.push(this.selectedParametersName[e].trim()),this.displayedColumns.push({name:this.selectedParametersName[e].trim(),property:this.selectedParametersName[e].trim()}));0==this.showZeroValueReading&&0==this.showLastReading&&this.selectedParametersName&&this.selectedMeters&&1==this.selectedParametersName.length&&1==this.selectedMeters.length&&(this.showChart=!0,a=this.selectedParametersName[0],this.meterReadings=this.setMeterReadingsChart(t,"KWH",a,e),document.getElementById("rhcontainer")&&w.chart("rhcontainer",this.meterReadings))}let s=this.selectedMeters.findIndex(e=>0==e);s>=0&&this.selectedMeters.splice(s,1);let n=this.selectedParameters.findIndex(e=>0==e);n>=0&&this.selectedParameters.splice(n,1),this.meterReading.MeterId=this.selectedMeters.join(","),this.meterReading.ParameterId=this.selectedParameters.join(","),this.meterReading.FromDate=this.fromDate,this.meterReading.ToDate=this.toDate,this.meterReading.isDataFrequency=this.showDataFrequency,this.showDataFrequency&&(this.meterReading.dataFrequency=this.dataFrequency),this.meterReading.LastReading=this.showLastReading?"1":"0",this.meterReading.clientId=parseInt(this.clientId),this.meterReading.isZeroValueReading=this.showZeroValueReading,this.meterReplacementService.getDeviceDataDetails(this.meterReading).subscribe({next:s=>{s&&(this.deviceData=this.deviceData||[],s.forEach(e=>{this.deviceData.push(Object.assign({},e))}),this.deviceData.forEach(e=>{e.PollingDate=this.date.transform(e.PollingDate.toString(),this.dateFormat.toString());for(let t in e)if(!i.includes(t)&&"deviceid"!=t.toLowerCase()){let a=e[t].substring(0,e[t].indexOf(" ")),i=e[t].substring(e[t].indexOf(" ")+1,e[t].length);e[t]=this.decimalPipe.transform(a,this.consumptionRoundOffFormat)+" "+i}if(0==this.showZeroValueReading&&0==this.showLastReading&&this.selectedParametersName&&this.selectedMeters&&1==this.selectedParametersName.length&&1==this.selectedMeters.length){let i=e[a].substring(0,e[a].indexOf(" ")).replaceAll(",","");if(0!=i){var s=e.PollingTime.split(":",2).join(":");t.labels.push(e.PollingDate+" "+s),t.datas.push(Number(i))}}}),this.deviceData.forEach(e=>this.exportedData.push(Object.assign({},e))),this.subject$.next(this.deviceData),this.dataSource=new u.k(this.deviceData),this.data$.pipe(Object(f.a)(e=>!!e)).subscribe(e=>{this.dataSource.data=e}),this.ngAfterViewInit(),this.selectedParametersName&&this.selectedMeters&&1==this.selectedParametersName.length&&1==this.selectedMeters.length&&(this.meterReadings=this.setMeterReadingsChart(t,"KWH",a,e),document.getElementById("rhcontainer")&&w.chart("rhcontainer",this.meterReadings)),this.showSpinner=!1)},error:e=>{this.deviceData=[],this.subject$.next(this.deviceData),this.dataSource=new u.k(this.deviceData),this.data$.pipe(Object(f.a)(e=>!!e)).subscribe(e=>{this.dataSource.data=e}),this.ngAfterViewInit(),this.showSpinner=!1}})}else this.notificationMessage("Invalid search parameters","yellow-snackbar"),this.deviceData=[],this.subject$.next(this.deviceData),this.dataSource=new u.k(this.deviceData),this.data$.pipe(Object(f.a)(e=>!!e)).subscribe(e=>{this.dataSource.data=e}),this.ngAfterViewInit(),this.showSpinner=!1;this.showSpinner=!1}onFilterChange(e){this.dataSource&&(e=(e=e.trim()).toLowerCase(),this.dataSource.filter=e)}selectedValue(e){}toggleAllSelection(){this.form.controls.meterIds.patchValue(this.allSelected.selected?[...this.metadataMeters.map(e=>e.id),0]:[])}toggleAllParameterSelection(){this.form.controls.parameterIds.patchValue(this.allParameterSelected.selected?[...this.parameters.map(e=>e.id),0]:[])}togglePerOne(e){if(this.allSelected.selected)return this.allSelected.deselect(),!1;this.form.controls.meterIds.value.length==this.metadataMeters.length&&this.allSelected.select()}toggleParametersPerOne(e){if(this.allParameterSelected.selected)return this.allParameterSelected.deselect(),!1;this.form.controls.parameterIds.value.length==this.parameters.length&&this.allParameterSelected.select()}toggleShowLastReading(e){this.showLastReading=!e,this.showLastReading&&(this.showDataFrequency=e,this.showZeroValueReading=e)}toggleShowDataFrequency(e){this.showDataFrequency=!e,this.showDataFrequency&&(this.showLastReading=e,this.showZeroValueReading=e)}toggleZeroValueReading(e){this.showZeroValueReading=!e,this.showZeroValueReading&&(this.showLastReading=e,this.showDataFrequency=e)}searchParameters(e){let t=this.selectParameters(e.toLowerCase());this.parameters=t}selectParameters(e){let t=[];for(let a of this.fliterParameters)a.description.toLowerCase().indexOf(e)>-1&&t.push(a);return t}searchMeterType(e){let t=this.selectMeterType(e.toLowerCase());this.metadataMeters=t}selectMeterType(e){let t=[];for(let a of this.filteredMeters)a.deviceName.toLowerCase().indexOf(e)>-1&&t.push(a);return t}validateDataFrequency(){}onExport(){if(this.exportedData&&this.exportedData.length>0){this.exportedData.forEach(e=>{e.PollingDate=this.date.transform(e.PollingDate,"yyyy-MM-dd")});const e=h.utils.json_to_sheet(this.exportedData),t=h.utils.book_new();h.utils.book_append_sheet(t,e,"Sheet1"),h.writeFile(t,"Reading History.xlsx")}else this.notificationMessage("No Data to Export","yellow-snackbar")}handleInput(e){e.stopPropagation()}setMeterReadingsChart(e,t,a,i){return{chart:{height:387,type:"line"},credits:{enabled:!1},title:{text:"Meter Reading Trends",style:{fontFamily:"Roboto",fontWeight:"bold"}},subtitle:{text:null},xAxis:[{categories:this.formatLabel(e.labels),uniqueNames:!0}],yAxis:{min:0,title:{text:a+" in "+t,style:{fontSize:"12px",fontFamily:"Roboto"}}},tooltip:{formatter:function(){return this.x+": "+this.y.toFixed(i)+t}},colors:["#3366CC"],plotOptions:{column:{pointPadding:.2,borderWidth:0,pointWidth:8,color:"rgb(63, 81, 181)"}},lang:{noData:"No data to display"},noData:{style:{fontWeight:"bold",fontSize:"15px"}},series:[{name:"Meter Reading",data:e.datas}],legend:{align:"center",verticalAlign:"top",layout:"vertical"}}}formatLabel(e){return e}}return e.\u0275fac=function(t){return new(t||e)(v.Nb(P.b),v.Nb(R.f),v.Nb(i.f),v.Nb(i.g),v.Nb(D.a),v.Nb(M.a),v.Nb(l.a),v.Nb(m.a),v.Nb(d.a),v.Nb(o.a),v.Nb(C.a),v.Nb(T.a),v.Nb(S.a))},e.\u0275cmp=v.Hb({type:e,selectors:[["fury-create-device-data-details"]],viewQuery:function(e,t){var a;1&e&&(v.Jc(p.a,!0),v.Vc(g.a,!0),v.Vc($,!0),v.Vc(G,!0)),2&e&&(v.zc(a=v.cc())&&(t.paginator=a.first),v.zc(a=v.cc())&&(t.content=a.first),v.zc(a=v.cc())&&(t.allSelected=a.first),v.zc(a=v.cc())&&(t.allParameterSelected=a.first))},inputs:{displayedColumns:"displayedColumns"},decls:69,vars:27,consts:[["mode","card",2,"margin-top","20px"],["class","loading-indicator",4,"ngIf"],["fxLayout","column"],["color","primary",1,"position-fixed"],["src","assets/img/fav-icon.png",1,"img-style"],[1,"toolbar-spacer"],["matTooltip","Export","mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon",3,"click"],[1,"fury-flex-form-field"],["fxFlex","grow",1,"basic-forms","route-animations-elements"],[1,"person","padding-top"],[1,"alignRight"],["color","primary",1,"padding-right",3,"checked","change"],[4,"ngIf"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutGap.gt-sm","10px",1,"customFlex","padding-top"],["fxLayout","row","fxLayoutGap","10px","fxFlex","100%",3,"formGroup"],["fxFlex","15%"],["name","meterType","id","meterTypeId","placeholder","Select a Meter Type","formControlName","meterTypeId",3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["multiple","","formControlName","meterIds",3,"ngModel","ngModelChange"],["matInput","","focused","'true'","type","text","autocomplete","off","placeholder","search",1,"myInput",3,"keyup","keydown"],["myInput",""],[3,"value","click"],["allSelected",""],[3,"optionSelected","value","click",4,"ngFor","ngForOf"],["multiple","","formControlName","parameterIds",3,"ngModel","ngModelChange","selectionChange"],["matInput","","focused","'true'","type","text","autocomplete","off","placeholder","search",1,"myInput",3,"keydown","keyup"],["allParameterSelected",""],["color","primary","fxFlex","15%"],["id","FromDate","formControlName","fromDate","name","FromDate","matInput","","readonly","",3,"ngModel","matDatepicker","click","ngModelChange","focus"],["matSuffix","",3,"for"],["formDatepickerRef1",""],["color","primary","fxFlex","15%",4,"ngIf"],["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon",3,"click"],[1,"searchPadding"],["fxFlex","",4,"ngIf"],["fxLayout","column",1,"padding-top"],["fxLayout","column","fxFlex","grow",3,"filterChange"],["mat-table","","matSort","",2,"width","100%",3,"dataSource"],[4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["class","clickable route-animations-elements","mat-row","",4,"matRowDef","matRowDefColumns"],[1,"paginator",3,"pageSize"],[1,"loading-indicator"],["mode","indeterminate","color","accent"],["type","number","matInput","",3,"ngModel","ngModelChange"],[3,"value"],[3,"optionSelected","value","click"],["id","ToDate","formControlName","toDate","name","ToDate","matInput","","readonly","",3,"ngModel","matDatepicker","click","ngModelChange","focus"],["formDatepickerRef2",""],["fxFlex",""],[1,"mat-elevation-z4"],["id","rhcontainer"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row","",1,"clickable","route-animations-elements"]],template:function(e,t){if(1&e){const e=v.Ub();v.Tb(0,"fury-page-layout",0),v.Pc(1,U,2,0,"div",1),v.Tb(2,"fury-page-layout-content",2),v.Tb(3,"mat-toolbar",3),v.Ob(4,"img",4),v.Tb(5,"span"),v.Rc(6,"Reading History"),v.Sb(),v.Ob(7,"span",5),v.Tb(8,"button",6),v.bc("click",(function(){return t.onExport()})),v.Tb(9,"mat-icon"),v.Rc(10,"import_export"),v.Sb(),v.Sb(),v.Ob(11,"div",7),v.Sb(),v.Tb(12,"fury-card",8),v.Tb(13,"fury-card-content"),v.Tb(14,"div",9),v.Tb(15,"div",10),v.Tb(16,"mat-checkbox",11),v.bc("change",(function(){return t.toggleZeroValueReading(t.showZeroValueReading)})),v.Rc(17,"Show Zero Value Reading "),v.Sb(),v.Tb(18,"mat-checkbox",11),v.bc("change",(function(){return t.toggleShowLastReading(t.showLastReading)})),v.Rc(19,"Show Last Reading "),v.Sb(),v.Tb(20,"mat-checkbox",11),v.bc("change",(function(){return t.toggleShowDataFrequency(t.showDataFrequency)})),v.Rc(21,"Data Frequency "),v.Sb(),v.Pc(22,H,6,1,"mat-form-field",12),v.Sb(),v.Sb(),v.Tb(23,"div",13),v.Tb(24,"form",14),v.Tb(25,"mat-form-field",15),v.Tb(26,"mat-select",16),v.bc("ngModelChange",(function(e){return t.meterTypeName=e}))("selectionChange",(function(e){return t.onMeterTypeChange(e)})),v.Pc(27,X,2,2,"mat-option",17),v.Sb(),v.Sb(),v.Tb(28,"mat-form-field",15),v.Tb(29,"mat-label"),v.Rc(30,"Meters"),v.Sb(),v.Tb(31,"mat-select",18),v.bc("ngModelChange",(function(e){return t.selectedMeters=e})),v.Tb(32,"input",19,20),v.bc("keyup",(function(e){return t.searchMeterType(e.target.value)}))("keydown",(function(e){return t.handleInput(e)})),v.Sb(),v.Ob(34,"mat-divider"),v.Tb(35,"mat-option",21,22),v.bc("click",(function(){return t.toggleAllSelection()})),v.Rc(37,"Select All "),v.Sb(),v.Pc(38,Y,2,3,"mat-option",23),v.Sb(),v.Sb(),v.Tb(39,"mat-form-field",15),v.Tb(40,"mat-label"),v.Rc(41,"Parameters"),v.Sb(),v.Tb(42,"mat-select",24),v.bc("ngModelChange",(function(e){return t.selectedParameters=e}))("selectionChange",(function(e){return t.selectedValue(e)})),v.Tb(43,"input",25,20),v.bc("keydown",(function(e){return t.handleInput(e)}))("keyup",(function(e){return t.searchParameters(e.target.value)})),v.Sb(),v.Ob(45,"mat-divider"),v.Tb(46,"mat-option",21,26),v.bc("click",(function(){return t.toggleAllParameterSelection()})),v.Rc(48," Select All"),v.Sb(),v.Pc(49,Q,2,3,"mat-option",23),v.Sb(),v.Sb(),v.Tb(50,"mat-form-field",27),v.Pc(51,B,2,0,"mat-label",12),v.Pc(52,J,2,0,"mat-label",12),v.Tb(53,"input",28),v.bc("click",(function(){return v.Ec(e),v.Ac(56).open()}))("ngModelChange",(function(e){return t.fromDate=e}))("focus",(function(){return v.Ec(e),v.Ac(56).open()})),v.Sb(),v.Ob(54,"mat-datepicker-toggle",29),v.Ob(55,"mat-datepicker",null,30),v.Sb(),v.Pc(57,ee,7,3,"mat-form-field",31),v.Tb(58,"button",32),v.bc("click",(function(){return t.onSearch()})),v.Tb(59,"mat-icon",33),v.Rc(60,"search"),v.Sb(),v.Sb(),v.Sb(),v.Sb(),v.Pc(61,te,3,0,"div",34),v.Tb(62,"div",35),v.Tb(63,"fury-list",36),v.bc("filterChange",(function(e){return t.onFilterChange(e)})),v.Tb(64,"table",37),v.Pc(65,se,4,1,"ng-container",38),v.Pc(66,ne,1,0,"tr",39),v.Pc(67,re,1,0,"tr",40),v.Sb(),v.Sb(),v.Ob(68,"mat-paginator",41),v.Sb(),v.Sb(),v.Sb(),v.Sb(),v.Sb()}if(2&e){const e=v.Ac(56);v.Cb(1),v.mc("ngIf",t.showSpinner),v.Cb(11),v.mc("@fadeInUp",void 0),v.Cb(4),v.mc("checked",t.showZeroValueReading),v.Cb(2),v.mc("checked",t.showLastReading),v.Cb(2),v.mc("checked",t.showDataFrequency),v.Cb(2),v.mc("ngIf",1==t.showDataFrequency),v.Cb(2),v.mc("formGroup",t.form),v.Cb(2),v.mc("ngModel",t.meterTypeName),v.Cb(1),v.mc("ngForOf",t.meterTypes),v.Cb(4),v.mc("ngModel",t.selectedMeters),v.Cb(4),v.mc("value",0),v.Cb(3),v.mc("ngForOf",t.metadataMeters),v.Cb(4),v.mc("ngModel",t.selectedParameters),v.Cb(4),v.mc("value",0),v.Cb(3),v.mc("ngForOf",t.parameters),v.Cb(2),v.mc("ngIf",0==t.showLastReading),v.Cb(1),v.mc("ngIf",1==t.showLastReading),v.Cb(1),v.mc("ngModel",t.fromDate)("matDatepicker",e),v.Cb(1),v.mc("for",e),v.Cb(3),v.mc("ngIf",0==t.showLastReading),v.Cb(4),v.mc("ngIf",1==t.showChart),v.Cb(3),v.mc("dataSource",t.dataSource),v.Cb(1),v.mc("ngForOf",t.displayedColumns),v.Cb(1),v.mc("matHeaderRowDef",t.visibleColumns),v.Cb(1),v.mc("matRowDefColumns",t.visibleColumns),v.Cb(1),v.mc("pageSize",t.pageSize)}},directives:[x.a,i.o,N.a,F.d,O.a,k.a,I.a,L.a,V.a,F.b,V.c,j.a,F.e,R.z,R.r,R.k,q.d,E.a,R.q,R.i,i.n,q.h,A.b,_.a,z.n,R.c,K.b,K.d,q.j,K.a,u.j,g.a,u.g,u.i,p.a,W.a,R.u,R.t,q.g,Z.a,u.c,u.e,u.b,u.d,g.b,u.a,u.f,u.h],styles:['.toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.button[_ngcontent-%COMP%]{line-height:50px}.seach-icon[_ngcontent-%COMP%]{vertical-align:middle;padding-top:1%;margin-left:1%;cursor:pointer}.divWidth[_ngcontent-%COMP%]{width:10px}.searchPadding[_ngcontent-%COMP%]{padding-top:5%}.alignRight[_ngcontent-%COMP%]{text-align:right}.alignMargin[_ngcontent-%COMP%]{margin-left:30px}.customFlex[_ngcontent-%COMP%]{justify-content:space-evenly}.img-style[_ngcontent-%COMP%]{width:32px}.myInput[_ngcontent-%COMP%]{height:50px!important;padding:10px!important}.loading-indicator[_ngcontent-%COMP%]{position:fixed;z-index:999;height:2em;width:2em;overflow:show;margin:auto;top:0;left:0;bottom:0;right:0}.loading-indicator[_ngcontent-%COMP%]:before{content:"";display:block;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.3)}.padding-right[_ngcontent-%COMP%]{padding-right:1%}.mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%]{white-space:nowrap;padding-left:.5%;padding-right:.5%}.position-fixed[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;top:0;z-index:5}'],data:{animation:[r.a,n.a]}}),e})()}];let ce=(()=>{class e{}return e.\u0275mod=v.Lb({type:e}),e.\u0275inj=v.Kb({factory:function(t){return new(t||e)},imports:[[s.j.forChild(oe)],s.j]}),e})();var le=a("YUcS"),he=a("hXFv"),me=a("8bGj"),de=a("WCGO"),ue=a("QMK6"),pe=a("VE2z"),ge=a("q8Jb"),be=a("KthW"),fe=a("9xt4"),ye=a("y/v/");let Ce=(()=>{class e{}return e.\u0275mod=v.Lb({type:e}),e.\u0275inj=v.Kb({factory:function(t){return new(t||e)},providers:[i.g],imports:[[i.c,ce,fe.a,ye.a,be.a,E.b,z.o,Z.g,O.b,L.b,R.l,R.w,le.a,k.b,A.c,q.f,he.a,p.b,me.a,de.a,ue.a,pe.a,ge.a]]}),e})()},"9xt4":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var i=a("ofXK"),s=a("3Pt+"),n=a("KthW"),r=a("WCGO"),o=a("0jmt"),c=a("+0xr"),l=a("zWnM"),h=a("zeEN"),m=a("fXoL");let d=(()=>{class e{}return e.\u0275mod=m.Lb({type:e}),e.\u0275inj=m.Kb({factory:function(t){return new(t||e)},imports:[[i.c,s.l,n.a,r.a,o.a,c.l,l.a,h.a]]}),e})()},"y/v/":function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var i=a("ofXK"),s=a("3Pt+"),n=a("KthW"),r=a("WCGO"),o=a("0jmt"),c=a("+0xr"),l=a("fXoL");let h=(()=>{class e{}return e.\u0275mod=l.Lb({type:e}),e.\u0275inj=l.Kb({factory:function(t){return new(t||e)},imports:[[i.c,s.l,n.a,r.a,o.a,c.l]]}),e})()},zWnM:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a("fXoL");let s=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(t){return new(t||e)},imports:[[]]}),e})()},zeEN:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a("fXoL");let s=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(t){return new(t||e)},imports:[[]]}),e})()}}]);