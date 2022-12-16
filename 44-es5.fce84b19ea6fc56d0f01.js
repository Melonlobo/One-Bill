!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{WFQN:function(t,r,a){"use strict";a.d(r,"a",(function(){return s}));var n=a("tk/3"),c=a("sXtk"),o=a("fXoL"),s=function(){var t=function(){function t(i,r){e(this,t),this.http=i,this.envService=r,this.baseUrl="",this.baseUrl=r.backend}return i(t,[{key:"getReplacedMeters",value:function(e){return this.http.get(this.baseUrl+"/devicelistreplacements/clientId/"+e)}},{key:"createMeterReplacement",value:function(e){return this.http.post(this.baseUrl+"/devicelistreplacements/",e)}},{key:"GetUtilityTypes",value:function(e){var t=new n.f;return t=t.append("clientId",""+e),this.http.get(this.baseUrl+"/devicelistreplacements/UtilityTypes",{params:t})}},{key:"getAllUnits",value:function(e,t){var i=new n.f;return i=(i=i.append("clientId",""+e)).append("utilityTypeId",""+t),this.http.get(this.baseUrl+"/devicelistreplacements/Units",{params:i})}},{key:"GetActiveDevices",value:function(e,t){var i=new n.f;return i=(i=i.append("clientId",""+e)).append("utilityTypeId",""+t),this.http.get(this.baseUrl+"/devicelistreplacements/ActiveDevices",{params:i})}},{key:"getMeterErrorDetails",value:function(e){return this.http.post(this.baseUrl+"/devicelistreplacements/MeterError",e)}},{key:"GetParametersList",value:function(){return this.http.get(this.baseUrl+"/devicelistreplacements/Parameters")}},{key:"getDeviceDataDetails",value:function(e){return this.http.post(this.baseUrl+"/devicelistreplacements/DeviceData",e)}},{key:"GetMeterList",value:function(e){var t=new n.f;return t=t.append("clientId",""+e),this.http.get(this.baseUrl+"/devicelistreplacements/MeterList",{params:t})}},{key:"getDeviceGroupMeterList",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",r=new n.f;return r=(r=(r=r.append("meterTypeId",""+e)).append("groupId",""+t)).append("clientId",""+i),this.http.get(this.baseUrl+"/devicelistreplacements/type/group/meterList",{params:r})}},{key:"getV1DeviceGroupMeterList",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",r=new n.f;return r=(r=(r=r.append("meterTypeId",""+e)).append("groupId",""+t)).append("clientId",""+i),this.http.get(this.baseUrl+"/devicelistreplacements/v1/type/group/meterListFilterByClient",{params:r})}},{key:"getV1DeviceGroupMeterListWithoutFlowTypeFilter",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",r=new n.f;return r=(r=(r=r.append("meterTypeId",""+e)).append("groupId",""+t)).append("clientId",""+i),this.http.get(this.baseUrl+"/devicelistreplacements/V1/type/group/meterListFilterByClientWithoutFlowTypeFilter",{params:r})}},{key:"getV1MeterList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=new n.f;return t=t.append("clientId",""+e),this.http.get(this.baseUrl+"/devicelistreplacements/v1/meterListFilterByClient",{params:t})}},{key:"getClients",value:function(){return this.http.get(this.baseUrl+"/devicelistreplacements/v1/clients")}},{key:"getV1MeterGroupList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=new n.f;return t=t.append("meterTypeId",""+e),this.http.get(this.baseUrl+"/devicelistreplacements/v1/meterGroups",{params:t})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Xb(n.c),o.Xb(c.a))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},YaQ2:function(t,r,a){"use strict";a.d(r,"a",(function(){return l}));var n=a("fXoL"),c=a("ofXK");function o(e,t){if(1&e&&(n.Tb(0,"small"),n.Rc(1),n.Ob(2,"br"),n.Sb()),2&e){var i=t.$implicit;n.Cb(1),n.Tc(" ",i," ")}}function s(e,t){if(1&e&&(n.Tb(0,"div"),n.Pc(1,o,3,1,"small",1),n.Sb()),2&e){var i=n.fc();n.Cb(1),n.mc("ngForOf",i.listOfErrors())}}var l=function(){var t=function(){function t(){var i=this;e(this,t),this.PATTERN_ERROR_MESSAGE={"/^[a-zA-Z ]*$/":"Accepts only alphabets with spaces","/^[a-zA-Z0-9]*$/":"Accepts only alphanumeric values with no spaces","/^[a-zA-Z0-9 ]*$/":"Accepts only alphanumeric values with spaces","/^[0-9]*$/":"Accepts only numbers","^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$":"Enter valid email address of format test@mail.com"},this.ERROR_MESSAGE={required:function(){return"This field is required"},minlength:function(e){return"Min ".concat(e.requiredLength," chars is required but got only ").concat(e.actualLength)},maxlength:function(e){return"Max chars allowed is ".concat(e.requiredLength," but got ").concat(e.actualLength)},pattern:function(e){return""+i.PATTERN_ERROR_MESSAGE[e.requiredPattern]},email:function(){return"Enter valid email address of format test@mail.com"}}}return i(t,[{key:"ngOnInit",value:function(){}},{key:"shouldShowErrors",value:function(){return this.ctrl&&this.ctrl.errors&&this.ctrl.touched}},{key:"listOfErrors",value:function(){var e=this;return Object.keys(this.ctrl.errors).map((function(t){return e.ERROR_MESSAGE[t](e.ctrl.getError(t))}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Hb({type:t,selectors:[["app-show-errors"]],inputs:{ctrl:"ctrl"},decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&n.Pc(0,s,2,1,"div",0),2&e&&n.mc("ngIf",t.shouldShowErrors())},directives:[c.o,c.n],styles:["small[_ngcontent-%COMP%]{color:red}"]}),t}()},"a+RD":function(t,r,a){"use strict";a.d(r,"a",(function(){return C}));var n=a("fXoL"),c=a("xgIS"),o=a("/uUt"),s=a("Kj3r"),l=a("ofXK"),u=a("STbY"),m=a("XiUz"),p=a("NFeN"),f=a("bTqV"),d=a("bSwM"),b=a("3Pt+"),h=["filter"];function y(e,t){if(1&e&&(n.Tb(0,"button",12),n.Tb(1,"mat-icon"),n.Rc(2,"filter_list"),n.Sb(),n.Sb()),2&e){n.fc(2);var i=n.Ac(3);n.mc("matMenuTriggerFor",i)}}function v(e,t){if(1&e&&(n.Tb(0,"div",5),n.Tb(1,"div",6),n.Rc(2),n.Sb(),n.Tb(3,"div",7),n.Tb(4,"mat-icon",8),n.Rc(5,"search"),n.Sb(),n.Ob(6,"input",9,10),n.Sb(),n.Pc(8,y,3,1,"button",11),n.kc(9,1),n.Sb()),2&e){var i=n.fc();n.Cb(2),n.Sc(i.name),n.Cb(6),n.mc("ngIf",!i.hideFilter)}}function g(e,t){if(1&e){var i=n.Ub();n.Tb(0,"button",13),n.bc("click",(function(e){n.Ec(i);var r=t.$implicit;return n.fc().toggleColumnVisibility(r,e)})),n.Tb(1,"mat-checkbox",14,15),n.bc("ngModelChange",(function(e){return n.Ec(i),t.$implicit.visible=e}))("click",(function(e){return n.Ec(i),e.stopPropagation()})),n.Rc(3),n.Sb(),n.Sb()}if(2&e){var r=t.$implicit;n.Cb(1),n.mc("ngModel",r.visible),n.Cb(2),n.Tc(" ",r.name," ")}}var S=["*",[["",8,"actions"]]],T=["*",".actions"],C=function(){var t=function(){function t(){e(this,t),this.filterChange=new n.o}return i(t,[{key:"ngAfterViewInit",value:function(){var e=this;this.hideHeader||Object(c.a)(this.filter.nativeElement,"keyup").pipe(Object(o.a)(),Object(s.a)(150)).subscribe((function(){e.filterChange.emit(e.filter.nativeElement.value)}))}},{key:"toggleColumnVisibility",value:function(e,t){t.stopPropagation(),t.stopImmediatePropagation(),e.visible=!e.visible}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Hb({type:t,selectors:[["fury-list"]],viewQuery:function(e,t){var i;1&e&&n.Vc(h,!0),2&e&&n.zc(i=n.cc())&&(t.filter=i.first)},inputs:{name:"name",columns:"columns",hideHeader:"hideHeader",hideFilter:"hideFilter"},outputs:{filterChange:"filterChange"},ngContentSelectors:T,decls:6,vars:2,consts:[[1,"fury-list-table"],["class","fury-list-header","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxLayoutGap.gt-xs","24px",4,"ngIf"],["yPosition","below","xPosition","before"],["columnFilter","matMenu"],["class","checkbox-item mat-menu-item",3,"click",4,"ngFor","ngForOf"],["fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px","fxLayoutGap.gt-xs","24px",1,"fury-list-header"],[1,"fury-list-name"],["fxLayout","row","fxLayoutAlign","start center","fxFlex",""],[1,"fury-filter-input-icon"],["fxFlex","","placeholder","Search\u2026",1,"fury-filter-input"],["filter",""],["class","fury-column-filter","type","button","mat-icon-button","",3,"matMenuTriggerFor",4,"ngIf"],["type","button","mat-icon-button","",1,"fury-column-filter",3,"matMenuTriggerFor"],[1,"checkbox-item","mat-menu-item",3,"click"],[1,"checkbox",3,"ngModel","ngModelChange","click"],["checkbox",""]],template:function(e,t){1&e&&(n.lc(S),n.Tb(0,"div",0),n.Pc(1,v,10,2,"div",1),n.Tb(2,"mat-menu",2,3),n.Pc(4,g,4,2,"button",4),n.Sb(),n.kc(5),n.Sb()),2&e&&(n.Cb(1),n.mc("ngIf",!t.hideHeader),n.Cb(3),n.mc("ngForOf",t.columns))},directives:[l.o,u.e,l.n,m.d,m.c,m.e,m.b,p.a,f.a,u.d,d.a,b.q,b.t],styles:[".fury-list-table{display:flex;flex-direction:column}.fury-list-table .fury-list-header{padding-left:24px;padding-right:24px;height:64px;border-top-left-radius:8px;border-top-right-radius:8px}@media screen and (max-width:599px){.fury-list-table .fury-list-header{height:auto;padding-top:24px;padding-bottom:24px}}.fury-list-table .fury-list-header .fury-list-name{font-size:20px;line-height:32px;font-weight:500;padding-right:24px}@media screen and (max-width:599px){.fury-list-table .fury-list-header .fury-list-name{border-right:none}}.fury-list-table .fury-list-header .fury-filter-input{font-size:16px;line-height:1.125;border:none;height:32px}.fury-list-table .fury-list-header .fury-filter-input:focus{outline:none}.fury-list-table .fury-list-header .fury-filter-input-icon{width:1.2em;vertical-align:bottom;height:22px;font-size:22px;margin-right:8px}.fury-list-table table{width:100%}.fury-list-table .mat-header-row .mat-header-cell .mat-sort-header-button{text-transform:uppercase}.fury-list-table .mat-cell.image-cell,.fury-list-table .mat-header-cell.image-cell{flex:0;width:59px}.fury-list-table .mat-cell.image-cell img,.fury-list-table .mat-header-cell.image-cell img{border-radius:50%;height:35px;width:35px;margin-right:24px;vertical-align:middle}.fury-list-table .mat-cell,.fury-list-table .mat-header-cell{white-space:nowrap;padding-left:12px;padding-right:12px}.fury-list-table .mat-cell.actions-cell,.fury-list-table .mat-header-cell.actions-cell{flex:0;width:40px;overflow:visible}.fury-list-table .paginator{display:block}"],encapsulation:2}),t}()},seMb:function(t,i,r){"use strict";r.d(i,"a",(function(){return c}));var a=r("3Pt+"),n=r("fXoL"),c=function(){var t=function t(){e(this,t),this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$",this.nameValidators=a.y.compose([a.y.required,a.y.minLength(1),a.y.maxLength(256)]),this.optionalNameValidators=a.y.compose([a.y.minLength(1),a.y.maxLength(256),a.y.pattern(/^[a-zA-Z ]*$/)]),this.emailValidators=a.y.compose([a.y.required,a.y.pattern(this.emailPattern)]),this.mobileNumberValidators=a.y.compose([a.y.required,a.y.pattern(/^[0-9]*$/)]),this.addressValidators=a.y.compose([a.y.required,a.y.minLength(1),a.y.maxLength(256),a.y.pattern(/^[a-zA-Z0-9 ]*$/)]),this.subjectValidator=a.y.compose([a.y.required,a.y.minLength(1),a.y.maxLength(1e3),a.y.pattern(/^[a-zA-Z0-9 ]*$/)]),this.optionsAddressValidators=a.y.compose([a.y.minLength(1),a.y.maxLength(256),a.y.pattern(/^[a-zA-Z0-9 ]*$/)]),this.postalCodeValidators=a.y.compose([a.y.pattern(/^[a-zA-Z0-9]*$/)]),this.requiredAlphanumericNoSpaces=a.y.compose([a.y.required,a.y.minLength(1),a.y.maxLength(256),a.y.pattern(/^[a-zA-Z0-9]*$/)]),this.passwordValidators=a.y.compose([a.y.required,a.y.minLength(8)])};return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"yWK+":function(t,r,a){"use strict";a.r(r),a.d(r,"CreateMeterReplacementModule",(function(){return ge}));var n=a("ofXK"),c=a("3Pt+"),o=a("q8Jb"),s=a("0jmt"),l=a("KthW"),u=a("WCGO"),m=a("VE2z"),p=a("tyNb"),f=a("M9IT"),d=a("Dh3D"),b=a("+0xr"),h=a("jtHE"),y=a("pLZG"),v=a("WFQN"),g=function t(i){e(this,t),this.id=i.id||0,this.replacementDate=i.replacementDate||"",this.deviceName=i.deviceName||"",this.utilityTypeId=i.utilityTypeId||0,this.utilityType=i.utilityType||"",this.unitId=i.unitId||0,this.unitNumber=i.unitNumber||"",this.reading=i.reading||"",this.deviceStatus=i.deviceStatus||"",this.isConnected=i.isConnected||!1,this.remarks=i.remarks||"",this.clientId=i.clientId||0},S=a("0IaG"),T=a("seMb"),C=a("sOHO"),w=a("Ooy/"),k=a("m6b6"),R=a("Scjl"),x=a("zSPf"),I=a("fXoL"),M=a("b6Qw"),L=a("/t3+"),O=a("bTqV"),U=a("NFeN"),P=a("MutI"),N=a("4FRi"),F=a("XiUz"),A=a("kmnG"),D=a("qFsG"),E=a("YaQ2"),z=a("/1cH"),q=a("d3UM"),$=a("FKr1");function G(e,t){if(1&e&&(I.Tb(0,"mat-option",28),I.Rc(1),I.Sb()),2&e){var i=t.$implicit;I.mc("value",i.description),I.Cb(1),I.Tc(" ",i.description," ")}}function V(e,t){if(1&e&&(I.Tb(0,"mat-option",28),I.Rc(1),I.Sb()),2&e){var i=t.$implicit;I.mc("value",i.description),I.Cb(1),I.Tc("",i.description," ")}}function j(e,t){if(1&e&&(I.Tb(0,"mat-option",28),I.Rc(1),I.Sb()),2&e){var i=t.$implicit;I.mc("value",i.description),I.Cb(1),I.Tc(" ",i.description," ")}}function H(e,t){if(1&e&&(I.Tb(0,"mat-option",28),I.Rc(1),I.Sb()),2&e){var i=t.$implicit;I.mc("value",i.id),I.Cb(1),I.Tc(" ",i.description,"")}}var X,K=((X=function(){function t(i,r,a,n,c,o,s,l,u){e(this,t),this.defaults=i,this.dialogRef=r,this.fb=a,this.metadataService=n,this.meterReplacementService=c,this.datePipe=o,this.masterService=s,this.fv=l,this.cookieService=u,r.disableClose=!0}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.defaults||(this.defaults=new g({})),this.clientId=parseInt(this.cookieService.get("globalClientId")),this.meterReplacementService.GetUtilityTypes(this.clientId).subscribe((function(t){e.metadataUtilityTypes=t.map((function(e){return new w.a(e)})),e.filteredUtilityTypes=t})),this.masterService.getSystemMasterdata(42,0).subscribe((function(t){e.metadataDeviceStatus=t,e.filteredDeviceStatus=t}));var t=new Date,i=("0"+t.getDate()).slice(-2),r=("0"+(t.getMonth()+1)).slice(-2)+"/"+i+"/"+t.getFullYear();r=new Date(r).toISOString().substr(0,10),this.form=this.fb.group({replacementDate:[this.defaults.replacementDate||r,c.y.required],utilityTypeId:[this.defaults.utilityTypeId||"",c.y.required],utilityType:[this.defaults.utilityType||"",c.y.required],unitId:[this.defaults.unitId||"",c.y.required],unitNumber:[this.defaults.unitNumber||"",c.y.required],id:[this.defaults.id||"",c.y.required],deviceName:[this.defaults.deviceName||"",c.y.required],reading:[this.defaults.reading||"",c.y.required],deviceStatus:[this.defaults.deviceStatus||"",c.y.required],remarks:[this.defaults.remarks||"",c.y.required]}),this.form.controls.utilityType.valueChanges.subscribe((function(t){e.filteredUtilityTypes=e.filterUtilityType(t)})),this.form.controls.unitNumber.valueChanges.subscribe((function(t){e.filteredUnits=e.filterUnit(t)})),this.form.controls.deviceName.valueChanges.subscribe((function(t){e.filteredMeters=e.filterMeters(t)}))}},{key:"filterUtilityType",value:function(e){return null!=e?this.metadataUtilityTypes.filter((function(t){return 0===t.description.toLowerCase().indexOf(e.toLowerCase())})):this.metadataUtilityTypes}},{key:"filterUnit",value:function(e){return null!=e?this.metadataUnits.filter((function(t){return 0===t.description.toLowerCase().indexOf(e.toLowerCase())})):this.metadataUnits}},{key:"filterMeters",value:function(e){return null!=e?this.metadataMeters.filter((function(t){return 0===t.description.toLowerCase().indexOf(e.toLowerCase())})):this.metadataMeters}},{key:"save",value:function(){this.createMeterReplacement()}},{key:"createMeterReplacement",value:function(){Object.assign(this.defaults,this.form.value),this.defaults.clientId=this.clientId,this.dialogRef.close(new g(this.defaults))}},{key:"selectUtilityType",value:function(e){var t=this;this.metadataUtilityTypes.forEach((function(i){e.option.value==i.description&&(t.form.controls.utilityTypeId.setValue(i.id),t.defaults.utilityTypeId=i.id,t.onUtilityTypeSelect(i.id))}))}},{key:"selectUnit",value:function(e){var t=this;this.metadataUnits.forEach((function(i){e.option.value==i.description&&t.form.controls.unitId.setValue(i.id)}))}},{key:"selectMeter",value:function(e){var t=this;this.metadataMeters.forEach((function(i){e.option.value==i.description&&t.form.controls.id.setValue(i.id)}))}},{key:"onUtilityTypeSelect",value:function(e){var t=this;this.clientId=parseInt(this.cookieService.get("globalClientId")),this.meterReplacementService.getAllUnits(this.clientId,e).subscribe((function(e){t.metadataUnits=e.map((function(e){return new k.a(e)})),t.filteredUnits=e})),this.meterReplacementService.GetActiveDevices(this.clientId,e).subscribe((function(e){t.metadataMeters=e.map((function(e){return new R.a(e)})),t.filteredMeters=e}))}},{key:"close",value:function(){this.dialogRef.close()}}]),t}()).id=100,X.\u0275fac=function(e){return new(e||X)(I.Nb(S.a),I.Nb(S.h),I.Nb(c.f),I.Nb(C.a),I.Nb(v.a),I.Nb(n.f),I.Nb(x.a),I.Nb(T.a),I.Nb(M.a))},X.\u0275cmp=I.Hb({type:X,selectors:[["fury-meter-replacement-create-update"]],decls:82,vars:16,consts:[["mat-dialog-title",""],["role","toolbar",1,"task-header"],[1,"fx-spacer"],["mat-icon-button","",3,"click"],["title","Close","mat-list-icon",""],[3,"formGroup","ngSubmit"],[1,"mat-dlg-content"],[1,"padding-top"],[1,"person"],["fxLayout","column","fxLayout.gt-sm","row","fxLayoutGap.gt-sm","20px"],["fxFlex",""],["type","date","formControlName","replacementDate","matInput",""],[3,"ctrl"],["matInput","","formControlName","utilityType",3,"matAutocomplete"],[3,"optionSelected"],["utility","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","unitNumber",3,"matAutocomplete"],["unit","matAutocomplete"],["fxFlex","",1,"titleSelector"],["matInput","","formControlName","deviceName",3,"matAutocomplete"],["meter","matAutocomplete"],["type","number","formControlName","reading","matInput",""],["formControlName","deviceStatus"],["value","0"],["type","text","formControlName","remarks","matInput",""],["fxLayout","row","fxLayoutAlign","end center"],["mat-button","",3,"disabled"],[3,"value"]],template:function(e,t){if(1&e&&(I.Tb(0,"div",0),I.Tb(1,"mat-toolbar",1),I.Tb(2,"span"),I.Rc(3,"Meter Replacement"),I.Sb(),I.Ob(4,"span",2),I.Tb(5,"button",3),I.bc("click",(function(){return t.close()})),I.Tb(6,"mat-icon",4),I.Rc(7,"close"),I.Sb(),I.Sb(),I.Sb(),I.Sb(),I.Tb(8,"form",5),I.bc("ngSubmit",(function(){return t.save()})),I.Tb(9,"mat-dialog-content",6),I.Tb(10,"fury-card"),I.Tb(11,"fury-card-content",7),I.Tb(12,"div",8),I.Tb(13,"div",9),I.Tb(14,"mat-form-field",10),I.Tb(15,"mat-label"),I.Rc(16,"Date"),I.Sb(),I.Ob(17,"input",11),I.Ob(18,"app-show-errors",12),I.Tb(19,"mat-hint"),I.Rc(20,"Please select Date"),I.Sb(),I.Sb(),I.Tb(21,"mat-form-field",10),I.Tb(22,"mat-label"),I.Rc(23,"Utility Type"),I.Sb(),I.Ob(24,"input",13),I.Tb(25,"mat-autocomplete",14,15),I.bc("optionSelected",(function(e){return t.selectUtilityType(e)})),I.Pc(27,G,2,2,"mat-option",16),I.Sb(),I.Ob(28,"app-show-errors",12),I.Tb(29,"mat-hint"),I.Rc(30,"Please select a Utility Type"),I.Sb(),I.Sb(),I.Tb(31,"mat-form-field",10),I.Tb(32,"mat-label"),I.Rc(33,"Unit"),I.Sb(),I.Ob(34,"input",17),I.Tb(35,"mat-autocomplete",14,18),I.bc("optionSelected",(function(e){return t.selectUnit(e)})),I.Pc(37,V,2,2,"mat-option",16),I.Sb(),I.Ob(38,"app-show-errors",12),I.Tb(39,"mat-hint"),I.Rc(40,"Please select a Unit"),I.Sb(),I.Sb(),I.Sb(),I.Sb(),I.Tb(41,"div",8),I.Tb(42,"div",9),I.Tb(43,"mat-form-field",19),I.Tb(44,"mat-label"),I.Rc(45,"Meter"),I.Sb(),I.Ob(46,"input",20),I.Tb(47,"mat-autocomplete",14,21),I.bc("optionSelected",(function(e){return t.selectMeter(e)})),I.Pc(49,j,2,2,"mat-option",16),I.Sb(),I.Ob(50,"app-show-errors",12),I.Tb(51,"mat-hint"),I.Rc(52,"Please select a Meter"),I.Sb(),I.Sb(),I.Tb(53,"mat-form-field",10),I.Tb(54,"mat-label"),I.Rc(55,"Reading"),I.Sb(),I.Ob(56,"input",22),I.Ob(57,"app-show-errors",12),I.Tb(58,"mat-hint"),I.Rc(59,"Please enter meter reading"),I.Sb(),I.Sb(),I.Tb(60,"mat-form-field",10),I.Tb(61,"mat-label"),I.Rc(62,"Device Status"),I.Sb(),I.Tb(63,"mat-select",23),I.Tb(64,"mat-option",24),I.Rc(65,"--Select--"),I.Sb(),I.Pc(66,H,2,2,"mat-option",16),I.Sb(),I.Ob(67,"app-show-errors",12),I.Tb(68,"mat-hint"),I.Rc(69,"Please select Device Status"),I.Sb(),I.Sb(),I.Sb(),I.Sb(),I.Tb(70,"div",8),I.Tb(71,"div",9),I.Tb(72,"mat-form-field",10),I.Tb(73,"mat-label"),I.Rc(74,"Remarks"),I.Sb(),I.Ob(75,"input",25),I.Ob(76,"app-show-errors",12),I.Tb(77,"mat-hint"),I.Rc(78,"Please enter remarks"),I.Sb(),I.Sb(),I.Sb(),I.Sb(),I.Sb(),I.Sb(),I.Sb(),I.Tb(79,"mat-dialog-actions",26),I.Tb(80,"button",27),I.Rc(81,"CREATE METER REPLACEMENT"),I.Sb(),I.Sb(),I.Sb()),2&e){var i=I.Ac(26),r=I.Ac(36),a=I.Ac(48);I.Cb(8),I.mc("formGroup",t.form),I.Cb(10),I.mc("ctrl",t.form.get("replacementDate")),I.Cb(6),I.mc("matAutocomplete",i),I.Cb(3),I.mc("ngForOf",t.filteredUtilityTypes),I.Cb(1),I.mc("ctrl",t.form.get("utilityTypeId")),I.Cb(6),I.mc("matAutocomplete",r),I.Cb(3),I.mc("ngForOf",t.filteredUnits),I.Cb(1),I.mc("ctrl",t.form.get("unitId")),I.Cb(8),I.mc("matAutocomplete",a),I.Cb(3),I.mc("ngForOf",t.filteredMeters),I.Cb(1),I.mc("ctrl",t.form.get("id")),I.Cb(7),I.mc("ctrl",t.form.get("reading")),I.Cb(9),I.mc("ngForOf",t.metadataDeviceStatus),I.Cb(1),I.mc("ctrl",t.form.get("deviceStatus")),I.Cb(9),I.mc("ctrl",t.form.get("remarks")),I.Cb(4),I.mc("disabled",!t.form.valid)}},directives:[S.i,L.a,O.a,U.a,P.c,c.z,c.r,c.k,S.f,N.a,N.c,F.d,F.e,A.d,F.b,A.h,c.c,D.b,c.q,c.i,E.a,A.g,z.c,z.a,n.n,c.u,q.a,$.n,S.c,F.c],styles:[".task-header[_ngcontent-%COMP%]{background-color:transparent;padding:0 5px;height:20px}.fx-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),X),Z=a("KHMF"),_=a("sXtk"),Q=a("dNgK"),W=a("xBcV"),J=a("Hbgg"),Y=a("rnAf"),B=a("rvYj"),ee=a("a+RD");function te(e,t){if(1&e&&(I.Tb(0,"th",14),I.Rc(1),I.Sb()),2&e){var i=I.fc(2).$implicit;I.Cb(1),I.Tc(" ",i.name,"")}}function ie(e,t){if(1&e&&(I.Tb(0,"td",15),I.Rc(1),I.Sb()),2&e){var i=t.$implicit,r=I.fc(2).$implicit;I.Cb(1),I.Tc(" ",i[r.property]," ")}}function re(e,t){if(1&e&&(I.Rb(0,11),I.Pc(1,te,2,1,"th",12),I.Pc(2,ie,2,1,"td",13),I.Qb()),2&e){var i=I.fc().$implicit;I.mc("matColumnDef",i.property)}}function ae(e,t){if(1&e&&(I.Rb(0),I.Pc(1,re,3,1,"ng-container",10),I.Qb()),2&e){var i=t.$implicit;I.Cb(1),I.mc("ngIf",i.isModelProperty)}}function ne(e,t){1&e&&I.Ob(0,"tr",16)}function ce(e,t){1&e&&I.Ob(0,"tr",17)}var oe,se,le,ue,me=function(){return[]},pe=[{path:"",component:(oe=function(){function t(i,r,a,n,c,o){var s;e(this,t),this.meterReplacementService=i,this.snackbar=r,this.date=a,this.dialog=n,this.cookieService=c,this.envService=o,this.subject$=new h.a(1),this.data$=this.subject$.asObservable(),this.dateFormat="",this.displayedColumns=[{name:"Date",property:"replacementDateLocal",visible:!0,isModelProperty:!0},{name:"Meter Name",property:"deviceName",visible:!0,isModelProperty:!0},{name:"Utility Type",property:"utilityType",visible:!0,isModelProperty:!0},{name:"Last Reading",property:"reading",visible:!0,isModelProperty:!0},{name:"Issue",property:"remarks",visible:!0,isModelProperty:!0}],this.pageSize=8,this.columnsProps=this.displayedColumns.map((function(e){return e.property})),this.dateFormat=null!==(s=Object(Z.e)("DateFormat"))&&void 0!==s?s:o.dateFormat}return i(t,[{key:"ngOnInit",value:function(){this.getReplacedMetersList()}},{key:"ngAfterViewInit",value:function(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}},{key:"notificationMessage",value:function(e,t){this.snackbar.open(e,null,{duration:5e3,verticalPosition:"top",horizontalPosition:"end",panelClass:[t]})}},{key:"createMeterReplacements",value:function(){var e=this;this.dialog.open(K).afterClosed().subscribe((function(t){t&&e.meterReplacementService.createMeterReplacement(t).subscribe({next:function(t){e.snackbar.open("Meter Replaced successfully.",null,{duration:5e3,verticalPosition:"top",horizontalPosition:"center",panelClass:["green-snackbar"]}),e.getReplacedMetersList()},error:function(t){e.notificationMessage("Meter Replacement failed.","red-snackbar")}})}))}},{key:"onFilterChange",value:function(e){this.dataSource&&(e=(e=e.trim()).toLowerCase(),this.dataSource.filter=e)}},{key:"getReplacedMetersList",value:function(){var e=this;this.clientId=parseInt(this.cookieService.get("globalClientId")),this.meterReplacementService.getReplacedMeters(this.clientId).subscribe({next:function(t){t=t.map((function(e){return new g(e)})),e.subject$.next(t)},error:function(t){e.notificationMessage("Meter Replacements Not Found.","red-snackbar")}}),this.dataSource=new b.k(this.meterReplacements),this.data$.pipe(Object(y.a)((function(e){return!!e}))).subscribe((function(t){e.meterReplacements=t,t.forEach((function(t){t.replacementDateLocal=e.date.transform(t.replacementDate.toString(),e.dateFormat.toString())})),e.dataSource.data=t})),this.ngAfterViewInit()}},{key:"ngOnDestroy",value:function(){}},{key:"content",set:function(e){this.sort=e,this.sort&&(this.dataSource.sort=this.sort)}},{key:"visibleColumns",get:function(){return this.displayedColumns.filter((function(e){return e.visible})).map((function(e){return e.property}))}}]),t}(),oe.\u0275fac=function(e){return new(e||oe)(I.Nb(v.a),I.Nb(Q.b),I.Nb(n.f),I.Nb(S.b),I.Nb(M.a),I.Nb(_.a))},oe.\u0275cmp=I.Hb({type:oe,selectors:[["fury-create-meter-replacement"]],viewQuery:function(e,t){var i;1&e&&(I.Jc(f.a,!0),I.Vc(d.a,!0)),2&e&&(I.zc(i=I.cc())&&(t.paginator=i.first),I.zc(i=I.cc())&&(t.content=i.first))},inputs:{displayedColumns:"displayedColumns"},decls:14,vars:10,consts:[["mode","card"],["current","Meter Replacements",3,"crumbs"],["name","Meter Replacements",3,"columns","filterChange"],[1,"actions"],["type","button","mat-mini-fab","","color","primary",1,"create",3,"click"],["mat-table","","matSort","",3,"dataSource"],[4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["class","clickable route-animations-elements","mat-row","",4,"matRowDef","matRowDefColumns"],[1,"paginator",3,"pageSize"],[3,"matColumnDef",4,"ngIf"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-row",""],["mat-row","",1,"clickable","route-animations-elements"]],template:function(e,t){1&e&&(I.Tb(0,"fury-page-layout",0),I.Tb(1,"fury-page-layout-header"),I.Ob(2,"fury-breadcrumbs",1),I.Sb(),I.Tb(3,"fury-page-layout-content"),I.Tb(4,"fury-list",2),I.bc("filterChange",(function(e){return t.onFilterChange(e)})),I.Tb(5,"div",3),I.Tb(6,"button",4),I.bc("click",(function(){return t.createMeterReplacements()})),I.Tb(7,"mat-icon"),I.Rc(8,"add"),I.Sb(),I.Sb(),I.Sb(),I.Tb(9,"table",5),I.Pc(10,ae,2,1,"ng-container",6),I.Pc(11,ne,1,0,"tr",7),I.Pc(12,ce,1,0,"tr",8),I.Sb(),I.Ob(13,"mat-paginator",9),I.Sb(),I.Sb(),I.Sb()),2&e&&(I.Cb(2),I.mc("@fadeInRight",void 0)("crumbs",I.qc(9,me)),I.Cb(1),I.mc("@fadeInUp",void 0),I.Cb(1),I.mc("columns",t.displayedColumns),I.Cb(5),I.mc("dataSource",t.dataSource),I.Cb(1),I.mc("ngForOf",t.displayedColumns),I.Cb(1),I.mc("matHeaderRowDef",t.visibleColumns),I.Cb(1),I.mc("matRowDefColumns",t.visibleColumns),I.Cb(1),I.mc("pageSize",t.pageSize))},directives:[W.a,J.a,Y.a,B.a,ee.a,O.a,U.a,b.j,d.a,n.n,b.g,b.i,f.a,n.o,b.c,b.e,b.b,b.d,d.b,b.a,b.f,b.h],styles:[""]}),oe)}],fe=((se=function t(){e(this,t)}).\u0275mod=I.Lb({type:se}),se.\u0275inj=I.Kb({factory:function(e){return new(e||se)},imports:[[p.j.forChild(pe)],p.j]}),se),de=a("GiUZ"),be=a("YUcS"),he=a("QibW"),ye=a("wZkO"),ve=((ue=function t(){e(this,t)}).\u0275mod=I.Lb({type:ue}),ue.\u0275inj=I.Kb({factory:function(e){return new(e||ue)},imports:[[n.c,c.l,m.a,s.a,c.w,be.a,l.a,S.g,D.c,O.b,U.b,he.c,q.b,ye.c,de.a]]}),ue),ge=((le=function t(){e(this,t)}).\u0275mod=I.Lb({type:le}),le.\u0275inj=I.Kb({factory:function(e){return new(e||le)},imports:[[n.c,c.l,l.a,u.a,fe,de.a,c.w,m.a,ve,s.a,o.a]]}),le)}}])}();