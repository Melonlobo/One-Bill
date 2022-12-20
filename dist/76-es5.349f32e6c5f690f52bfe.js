!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function i(t,i,e){return i&&n(t.prototype,i),e&&n(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{Tos5:function(t,n,i){var e,a,o;o=function(t){function n(t,n,i,e){t.hasOwnProperty(n)||(t[n]=e.apply(null,i))}n(t=t?t._modules:{},"Extensions/NoDataToDisplay.js",[t["Core/Chart/Chart.js"],t["Core/Utilities.js"]],(function(t,n){var i=n.addEvent,e=n.extend,a=n.getOptions;n=t.prototype,a=a(),e(a.lang,{noData:"No data to display"}),a.noData={attr:{zIndex:1},position:{x:0,y:0,align:"center",verticalAlign:"middle"},style:{fontWeight:"bold",fontSize:"12px",color:"#666666"}},n.showNoData=function(t){var n=this.options;t=t||n&&n.lang.noData,n=n&&(n.noData||{}),this.renderer&&(this.noDataLabel||(this.noDataLabel=this.renderer.label(t,0,0,void 0,void 0,void 0,n.useHTML,void 0,"no-data").add()),this.styledMode||this.noDataLabel.attr(n.attr).css(n.style||{}),this.noDataLabel.align(e(this.noDataLabel.getBBox(),n.position||{}),!1,"plotBox"))},n.hideNoData=function(){this.noDataLabel&&(this.noDataLabel=this.noDataLabel.destroy())},n.hasData=function(){for(var t=this.series||[],n=t.length;n--;)if(t[n].hasData()&&!t[n].options.isInternal)return!0;return this.loadingShown},i(t,"render",(function(){this.hasData()?this.hideNoData():this.showNoData()}))})),n(t,"masters/modules/no-data-to-display.src.js",[],(function(){}))},t.exports?(o.default=o,t.exports=o):(e=[i("6n/F")],void 0===(a=(function(t){return o(t),o.Highcharts=t,o}).apply(n,e))||(t.exports=a))},cWc3:function(n,e,a){"use strict";a.r(e),a.d(e,"OpenTicketsDashboardModule",(function(){return J}));var o,s=a("ofXK"),r=a("tyNb"),l=a("tk/3"),h=a("sXtk"),c=a("fXoL"),u=((o=function(){function n(i,e){t(this,n),this.httpClient=i,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}return i(n,[{key:"getBillandConsumption",value:function(t,n,i){var e=new l.f;return e=(e=(e=e.append("ownerId",""+t)).append("unitId",""+n)).append("utilityTypeId",""+i),this.httpClient.get(this.baseUrl+"/ownerTenantDashboard/AverageMonthlyUsage",{params:e})}},{key:"getPaymentDetails",value:function(t,n,i){var e=new l.f;return e=(e=(e=e.append("ownerId",""+t)).append("unitId",""+n)).append("utilityTypeId",""+i),this.httpClient.get(this.baseUrl+"/ownerTenantDashboard/AccountStatus",{params:e})}},{key:"getBarChartData",value:function(t,n,i){var e=new l.f;return e=(e=(e=e.append("ownerId",""+t)).append("unitId",""+n)).append("utilityTypeId",""+i),this.httpClient.get(this.baseUrl+"/ownerTenantDashboard/BarChartData",{params:e})}},{key:"getOwnerTenantDashboardData",value:function(t,n,i,e,a,o){var s=new l.f;return s=(s=(s=(s=(s=(s=s.append("ownerId",""+t)).append("unitId",""+n)).append("utilityTypeId",""+i)).append("clientId",""+e)).append("type",""+a)).append("deviceId",""+o),this.httpClient.get(this.baseUrl+"/ownerTenantDashboard/dashboard/data",{params:s})}},{key:"getUnits",value:function(t){return this.httpClient.get(this.baseUrl+"/ownerTenantDashboard/"+t+"/GetUnits")}},{key:"setBarChart",value:function(t,n,i,e){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=i;return{chart:{height:325,type:"column"},credits:{enabled:!1},title:{text:null},subtitle:{text:null},xAxis:{categories:t.labels},yAxis:{min:0,title:{text:n,style:{fontSize:"12px",fontFamily:"Roboto"}}},legend:{layout:"horizontal",align:"center",verticalAlign:"top",x:0,y:0,floating:!1,shadow:!1},tooltip:{formatter:function(){return"Cost"==o?this.x+": "+e+this.y.toFixed(a):this.x+": "+this.y.toFixed(a)+e}},lang:{noData:"No data to display"},noData:{style:{fontWeight:"bold",fontSize:"15px"}},plotOptions:{column:{pointPadding:.1,borderWidth:0,pointWidth:15}},series:[{name:i,data:t.datas,type:"column"}]}}}]),n}()).\u0275fac=function(t){return new(t||o)(c.Xb(l.c),c.Xb(h.a))},o.\u0275prov=c.Jb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),d=a("6n/F"),p=a("cIyM"),m=a("DuJv"),b=a("zSPf"),g=a("3R10"),y=a("KcIl"),f=a("KHMF"),C=a("a8hA"),v=a("Nm8O"),S=a("b6Qw"),D=a("XiUz"),O=a("Wp6s"),T=a("0IaG"),x=a("kmnG"),w=a("d3UM"),I=a("3Pt+"),P=a("jaxi"),M=a("FKr1");function k(t,n){1&t&&c.Ob(0,"fury-ticketlist")}function U(t,n){if(1&t&&(c.Tb(0,"p",31),c.Rc(1),c.Sb()),2&t){var i=c.fc();c.Cb(1),c.Tc("On ",i.LastBillDate," ")}}function F(t,n){if(1&t&&(c.Tb(0,"p",31),c.Rc(1),c.Sb()),2&t){var i=c.fc();c.Cb(1),c.Tc("On ",i.ConsumptionDate," ")}}function L(t,n){if(1&t&&(c.Tb(0,"p",31),c.Rc(1),c.Sb()),2&t){var i=c.fc();c.Cb(1),c.Tc("On ",i.LastPaidDate," ")}}function B(t,n){1&t&&c.Ob(0,"p",32)}function N(t,n){if(1&t&&(c.Tb(0,"mat-option",33),c.Rc(1),c.Sb()),2&t){var i=n.$implicit;c.mc("value",i.id),c.Cb(1),c.Sc(i.description)}}function _(t,n){if(1&t&&(c.Tb(0,"mat-option",33),c.Rc(1),c.Sb()),2&t){var i=n.$implicit;c.mc("value",i.id),c.Cb(1),c.Sc(i.utilityType)}}function R(t,n){if(1&t&&(c.Tb(0,"mat-button-toggle",34),c.Rc(1),c.Sb()),2&t){var i=n.$implicit,e=n.index;c.nc("id",i),c.nc("value",i),c.mc("checked",0===e),c.Cb(1),c.Sc(i)}}function z(t,n){if(1&t){var i=c.Ub();c.Tb(0,"button",35),c.bc("click",(function(t){return c.Ec(i),c.fc().showDailyData(t)})),c.Rc(1),c.Sb()}if(2&t){var e=n.$implicit;c.nc("id",e),c.Cb(1),c.Tc(" ",e," ")}}a("Tos5")(d);var j,E,A,W=[{path:"",component:(j=function(){function n(i,e,a,o,s,r,l,h,c,u,d,p,m,b){var g,y,C;t(this,n),this.openticketsService=i,this.tenantOwnerService=e,this.route=a,this.masterService=o,this.menuItemService=s,this.ticketsList=r,this.date=l,this.jwtHelperService=h,this.router=c,this.decimalPipe=u,this.cookieService=d,this.clientSelectionService=p,this.contractService=m,this.envService=b,this.utilityUnit="",this.reportType="",this.dailyChart=["CurrentMonth","PreviousMonth"],this.typeId=1,this.unit="",this.ticketsLength=0,this.consumptionBarChartOptions={},this.dctConsumptionChart={},this.barChartOptions={},this.dctBarChart={},this.lstType=["Consumption","Cost"],this.blnShowChart=!1,this.lstunitNo=[],this.lstutilityType=[],this.type="Consumption",this.LastBill="0",this.LastConsumption="0",this.LastPaid="0",this.TotalDue="0",this.ownerName="Tenant / Owner",this.dateFormat="",this.currency="",this.roundFormat="",this.consumptionRoundOffFormat=Object(f.e)("ConsumptionRoundOff"),this.roundOff=0,this.ownerId=Number(this.cookieService.get("ownerId")),this.blnShow=!1,this.dailyTitle="",this.clientId=0,this.dateFormat=null!==(g=Object(f.e)("DateFormat"))&&void 0!==g?g:b.dateFormat,this.currency=null!==(y=Object(f.e)("Currency"))&&void 0!==y?y:b.currencyFormat,this.roundFormat=null!==(C=Object(f.e)("RoundOff"))&&void 0!==C?C:b.roundOffFormat}return i(n,[{key:"onPopState",value:function(t){"Admin"==this.role&&(this.menuItemService.setIsAuthenticatedUser(!0),this.cookieService.delete("ownerId","/",this.envService.cookieDomain),this.cookieService.delete("ownerName","/",this.envService.cookieDomain),this.cookieService.delete("external_role","/",this.envService.cookieDomain))}},{key:"ngOnInit",value:function(){var t=this;this.clientSelectionService.setIsClientVisible(!1),this.currencySymbol=Object(s.A)(this.currency,"narrow"),this.clientId=parseInt(this.cookieService.get("globalClientId"));var n=this.cookieService.get("access_token"),i=this.jwtHelperService.decodeToken(n);i&&(this.role=i["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]);var e=new Date;this.firstDate=new Date(e.getFullYear(),e.getMonth(),1),this.lastDate=new Date(e.getFullYear(),e.getMonth()+1,0),this.title="Last 12 Months "+("Consumption"===this.type?"Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle="Daily "+("Consumption"===this.type?"Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle+=" - "+this.date.transform(this.firstDate.toString(),this.dateFormat.toString())+"-"+this.date.transform(this.lastDate.toString(),this.dateFormat.toString()),"Admin"==this.role&&(this.ownerName=this.cookieService.get("ownerName")),this.ticketsLength=this.ticketsList.lstData1.length,this.dctBarChart.labels=[],this.dctBarChart.datas=[],this.barChartOptions=this.openticketsService.setBarChart(this.dctBarChart,"",this.type,"",this.roundOff),d.chart("barChartId",this.barChartOptions),this.dctConsumptionChart.labels=[],this.dctConsumptionChart.datas=[],this.consumptionBarChartOptions=this.setDailyConsumptionChart(this.dctConsumptionChart),d.chart("barChartId2",this.consumptionBarChartOptions),this.route&&this.route.paramMap.subscribe((function(n){n&&(t.menuItemService.setIsExteranlUser(t.envService.externalRoles.ownerExternal),t.cookieService.set("external_role",t.envService.externalRoles.ownerExternal.toString()))})),this.getUnits(),this.menuItemService.setIsClientChange(!0)}},{key:"paymentNavigation",value:function(){this.router.navigateByUrl("bills/tenant-payment")}},{key:"setData",value:function(){var t=this;this.title="Last 12 Months "+("Consumption"===this.type?"Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle="Daily "+("Consumption"===this.type?"Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle+=" - "+this.date.transform(this.firstDate.toString(),this.dateFormat.toString())+"-"+this.date.transform(this.lastDate.toString(),this.dateFormat.toString());var n="",i={labels:[],datas:[]};this.LastBill=this.decimalPipe.transform(0,this.roundFormat),this.LastConsumption=this.decimalPipe.transform(0,this.roundFormat),this.TotalDue=this.decimalPipe.transform(0,this.roundFormat),this.LastPaid=this.decimalPipe.transform(0,this.roundFormat);var e="Consumption"===this.type?this.utilityUnit:this.currencySymbol;this.consumptionRoundOffFormat=Object(f.e)("ConsumptionRoundOff",this.utilityType),this.roundOff="Consumption"==this.type?parseInt(this.consumptionRoundOffFormat.substring(this.consumptionRoundOffFormat.indexOf("-")+1,this.consumptionRoundOffFormat.length)):parseInt(this.roundFormat.substring(this.roundFormat.indexOf("-")+1,this.roundFormat.length)),this.openticketsService.getOwnerTenantDashboardData(this.ownerId,this.unitNo,this.utilityType,this.clientId,this.typeId,this.deviceId).subscribe((function(a){if(a){if(a.barChartDataList&&a.barChartDataList.length){n="Consumption"===t.type?"Consumption in ["+t.utilityUnit+"]":"Charge in ["+t.currencySymbol+"]";var o=a.barChartDataList;Object.keys(o).map((function(t){i.labels.push(o[t].month),i.datas.push(Number(o[t].unitConsumption))})),t.barChartOptions=t.openticketsService.setBarChart(i,n,t.type,e,t.roundOff),document.getElementById("barChartId")&&d.chart("barChartId",t.barChartOptions)}else t.barChartOptions=t.openticketsService.setBarChart(t.dctBarChart,n,t.type,e,t.roundOff),document.getElementById("barChartId")&&d.chart("barChartId",t.barChartOptions);a.accountStatus&&(t.LastPaid=t.decimalPipe.transform(a.accountStatus.lastPaid,t.roundFormat),"1900-01-01T00:00:00"!=a.accountStatus.lastPaidDate.toString()&&(t.LastPaidDate=t.date.transform(a.accountStatus.lastPaidDate,t.dateFormat.toString())),t.TotalDue=a.accountStatus.totalDue<0?"("+t.decimalPipe.transform(a.accountStatus.totalDue.toString(),t.roundFormat)+")":t.decimalPipe.transform(a.accountStatus.totalDue.toString(),t.roundFormat)),a.averageMonthlyUsage&&(t.LastBill=t.decimalPipe.transform(a.averageMonthlyUsage.lastBill,t.roundFormat),null!=a.averageMonthlyUsage.lastBillDate&&"1900-01-01T00:00:00"!=a.averageMonthlyUsage.lastBillDate.toString()&&(t.LastBillDate=t.date.transform(a.averageMonthlyUsage.lastBillDate,t.dateFormat.toString())),t.LastConsumption=t.decimalPipe.transform(a.averageMonthlyUsage.lastConsumption,t.roundFormat),null!=a.averageMonthlyUsage.consumptionDate&&"1900-01-01T00:00:00"!=a.averageMonthlyUsage.consumptionDate.toString()&&(t.ConsumptionDate=t.date.transform(a.averageMonthlyUsage.consumptionDate,t.dateFormat.toString()))),t.blnShow=!0,t.blnShowChart=!0}else t.blnShow=!1,t.blnShowChart=!1,t.barChartOptions=t.openticketsService.setBarChart(t.dctBarChart,n,t.type,e,t.roundOff),document.getElementById("barChartId")&&d.chart("barChartId",t.barChartOptions)}),(function(i){t.blnShow=!1,t.blnShowChart=!1,t.barChartOptions=t.openticketsService.setBarChart(t.dctBarChart,n,t.type,e,t.roundOff),document.getElementById("barChartId")&&d.chart("barChartId",t.barChartOptions)})),this.setDates(),this.makeDailyChart()}},{key:"getUtilityUnit",value:function(){var t=this;this.utilityUnit="",null!=this.utilityType&&this.tenantOwnerService.getUtilityUnit(this.utilityType).subscribe((function(n){""!=n&&(t.utilityUnit=n.utilityUnit,t.setData())}))}},{key:"onDropdownChange",value:function(){this.onChangeUtilityType(),null!=this.unitNo&&null!=this.utilityType?this.getUtilityUnit():this.blnShowChart=!1}},{key:"getUnits",value:function(){var t=this;this.openticketsService.getUnits(this.ownerId).subscribe((function(n){var i,e;n&&(t.lstunitNo=[],t.lstunitNo=n,t.unitNo=t.lstunitNo&&t.lstunitNo.length?t.lstunitNo[0].id:0,t.getUtilities(null===(e=null===(i=t.lstunitNo)||void 0===i?void 0:i[0])||void 0===e?void 0:e.id))}))}},{key:"onUtilityChange",value:function(){this.getUtilities(this.unitNo)}},{key:"getUtilities",value:function(t){var n=this;this.lstutilityType=[],this.tenantOwnerService.getTenantUtilityDetails(this.ownerId,t).subscribe((function(t){var i,e;t&&(n.lstutilityType=t,n.lstutilityType.length>0&&(n.utilityType=null===(i=n.lstutilityType)||void 0===i?void 0:i[0].utilityTypeId,n.deviceId=null===(e=n.lstutilityType)||void 0===e?void 0:e[0].id,n.onDropdownChange()))}))}},{key:"onChangeUtilityType",value:function(){var t,n=this;this.utilityType&&this.deviceId&&this.lstutilityType&&(this.utilityType=null===(t=this.lstutilityType.find((function(t){return t.id===n.deviceId})))||void 0===t?void 0:t.utilityTypeId)}},{key:"setDailyConsumptionChart",value:function(t){var n,i=this.type;n=this.consumptionRoundOffFormat&&"Consumption"==this.type?parseInt(this.consumptionRoundOffFormat.substring(this.consumptionRoundOffFormat.indexOf("-")+1,this.consumptionRoundOffFormat.length)):parseInt(this.roundFormat.substring(this.roundFormat.indexOf("-")+1,this.roundFormat.length));var e="Consumption"===this.type?this.utilityUnit:this.currencySymbol,a="";return t.datas.length>0&&(a="Consumption"===this.type?"Consumption in ["+this.utilityUnit+"]":"Charge in ["+this.currencySymbol+"]"),{chart:{height:325,type:"line"},credits:{enabled:!1},title:{text:"",style:{fontFamily:"Roboto",fontWeight:"bold"}},subtitle:{text:null},xAxis:{categories:this.formatLabel(t.labels)},yAxis:{min:0,title:{text:a,style:{fontSize:"12px",fontFamily:"Roboto"}}},legend:{itemStyle:{color:"#000000",fontWeight:"normal"},layout:"horizontal",align:"center",verticalAlign:"top",x:0,y:0,floating:!1,shadow:!1},tooltip:{formatter:function(){return"Cost"==i?this.x+": "+e+this.y.toFixed(n):this.x+": "+this.y.toFixed(n)+e}},colors:["#3366CC"],plotOptions:{column:{pointPadding:.2,borderWidth:0,pointWidth:8,color:"rgb(63, 81, 181)"}},lang:{noData:"No data to display"},noData:{style:{fontWeight:"bold",fontSize:"15px"}},series:[{name:this.type,data:t.datas}]}}},{key:"formatLabel",value:function(t){return t.map((function(t){return t.length>7&&(t=t.slice(0,5)+".."),t}))}},{key:"makeDailyChart",value:function(){var t=this;if(this.dctConsumptionChart={},this.dctConsumptionChart.labels=[],this.dctConsumptionChart.datas=[],this.consumptionBarChartOptions=this.setDailyConsumptionChart(this.dctConsumptionChart),document.getElementById("barChartId2")&&d.chart("barChartId2",this.consumptionBarChartOptions),""==this.reportType){var n=document.getElementById(this.dailyChart[0]);document.querySelectorAll(".revbuttons button.active").forEach((function(t){t.className=""})),null!=n&&(n.className="active",this.reportType=this.dailyChart[0])}this.tenantOwnerService.getOwnerTenantConsumptionData(this.ownerId,this.unitNo,this.utilityType,this.clientId,this.typeId,this.reportType,this.deviceId).subscribe((function(n){if(n)if(t.dctConsumptionChart={},t.dctConsumptionChart.labels=[],t.dctConsumptionChart.datas=[],n.dayWiseConsumptionDatas&&n.dayWiseConsumptionDatas.length){var i=n.dayWiseConsumptionDatas;t.unit=n.dayWiseConsumptionDatas[0].unit,t.unit=t.unit.toUpperCase(),Object.keys(i).map((function(n){t.dctConsumptionChart.labels.push(i[n].dayId),t.dctConsumptionChart.datas.push(Number(i[n].consumption))})),t.consumptionBarChartOptions=t.setDailyConsumptionChart(t.dctConsumptionChart),document.getElementById("barChartId2")&&d.chart("barChartId2",t.consumptionBarChartOptions)}else t.consumptionBarChartOptions=t.setDailyConsumptionChart(t.dctConsumptionChart),document.getElementById("barChartId2")&&d.chart("barChartId2",t.consumptionBarChartOptions);else t.consumptionBarChartOptions=t.setDailyConsumptionChart(t.dctConsumptionChart),document.getElementById("barChartId2")&&d.chart("barChartId2",t.consumptionBarChartOptions)}),(function(n){t.barChartOptions=t.setDailyConsumptionChart(t.dctConsumptionChart),document.getElementById("barChartId2")&&d.chart("barChartId2",t.barChartOptions)}))}},{key:"showDailyData",value:function(t){var n=(t.target||t.srcElement||t.currentTarget).attributes.id.nodeValue,i=document.getElementById(n);document.querySelectorAll(".revbuttons button.active").forEach((function(t){t.className=""})),i.className="active",this.reportType=n,this.setDates(),this.dailyTitle="Daily "+("Consumption"===this.type?"Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle+=" - "+this.date.transform(this.firstDate.toString(),this.dateFormat.toString())+"-"+this.date.transform(this.lastDate.toString(),this.dateFormat.toString()),null!=this.unitNo&&null!=this.utilityType&&this.makeDailyChart()}},{key:"setDates",value:function(){var t=new Date;"CurrentMonth"==this.reportType?(this.firstDate=new Date(t.getFullYear(),t.getMonth(),1),this.lastDate=new Date(t.getFullYear(),t.getMonth()+1,0)):"PreviousMonth"==this.reportType&&(this.firstDate=new Date(t.getFullYear(),t.getMonth()-1,1),this.lastDate=new Date(t.getFullYear(),t.getMonth(),0))}},{key:"onTypeChange",value:function(){this.getUtilityUnit(),this.unit="Consumption"===this.type?this.utilityUnit:this.currencySymbol,this.setDates(),this.title="Last 12 Months "+("Consumption"===this.type?" Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle="Daily "+("Consumption"===this.type?"Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle+=" - "+this.date.transform(this.firstDate.toString(),this.dateFormat.toString())+"-"+this.date.transform(this.lastDate.toString(),this.dateFormat.toString())}},{key:"onValChange",value:function(t){this.getUtilityUnit(),null!=t&&(this.type=t.value),this.typeId="Cost"===this.type?2:1,this.unit="Consumption"===this.type?this.utilityUnit:this.currencySymbol,this.setDates(),this.title="Last 12 Months "+("Consumption"===this.type?" Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle="Daily "+("Consumption"===this.type?"Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle+=" - "+this.date.transform(this.firstDate.toString(),this.dateFormat.toString())+"-"+this.date.transform(this.lastDate.toString(),this.dateFormat.toString())}}]),n}(),j.\u0275fac=function(t){return new(t||j)(c.Nb(u),c.Nb(y.a),c.Nb(r.a),c.Nb(b.a),c.Nb(p.a),c.Nb(m.a),c.Nb(s.f),c.Nb(v.a),c.Nb(r.f),c.Nb(s.g),c.Nb(S.a),c.Nb(C.a),c.Nb(g.a),c.Nb(h.a))},j.\u0275cmp=c.Hb({type:j,selectors:[["fury-open-tickets-dashboard"]],hostBindings:function(t,n){1&t&&c.bc("popstate",(function(t){return n.onPopState(t)}),!1,c.Dc)},decls:68,vars:23,consts:[[4,"ngIf"],["fxLayout","column","fxLayoutGap","2%",2,"padding","27px"],["fxLayout","row","fxLayout.xs","column",1,"toolBar"],[1,"toolBar"],["fxLayout","row","fxLayout.xs","column","fxLayoutGap","15px"],["fxFlex","",1,"mat-elevation-z4","LastBillTile"],[2,"padding-top","20px"],[1,"fontSize"],[1,"lastBill"],["class","rightAlign",4,"ngIf"],["fxFlex","",1,"mat-elevation-z4","Consumption"],["fxFlex","",1,"mat-elevation-z4","LastPaid"],["fxFlex","",1,"mat-elevation-z4","dues"],["style","padding-bottom:20px;",4,"ngIf"],[1,"customMatToolbar"],["mat-dialog-title",""],["fxLayout","row","fxLayout.xs","column","fxLayoutGap","2%"],["fxFlex","30%;"],["name","unitNo","id","unitNoId","placeholder","Unit Number",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["name","utilityType","id","utilityTypeId","placeholder","Utility Type",3,"ngModel","ngModelChange"],[2,"float","right"],["name","fontStyle","aria-label","Font Style",1,"buttons",2,"font-size","small","float","right",3,"value","change"],["style","padding: 0px;",3,"id","checked","value",4,"ngFor","ngForOf"],["fxLayout","row","fxLayout.xs","column","fxLayout.sm","column","fxLayoutGap","6px",1,"content",2,"margin-left","20px","width","98%"],[2,"width","100%","overflow","scroll"],[1,"mat-elevation-z4",2,"height","435px","display","inline-flex","flex-flow","row wrap"],["id","barChartId"],[1,"revbuttons"],[3,"id","click",4,"ngFor","ngForOf"],["id","barChartId2"],[1,"rightAlign"],[2,"padding-bottom","20px"],[3,"value"],[2,"padding","0px",3,"id","checked","value"],[3,"id","click"]],template:function(t,n){1&t&&(c.Pc(0,k,1,0,"fury-ticketlist",0),c.Tb(1,"div",1),c.Tb(2,"span",2),c.Tb(3,"span"),c.Rc(4),c.Sb(),c.Tb(5,"span",3),c.Rc(6," \xa0 Dashboard"),c.Sb(),c.Sb(),c.Tb(7,"div",4),c.Tb(8,"mat-card",5),c.Ob(9,"span",6),c.Tb(10,"span",7),c.Rc(11,"Last Bill"),c.Sb(),c.Ob(12,"span",6),c.Tb(13,"p",8),c.Rc(14),c.Sb(),c.Pc(15,U,2,1,"p",9),c.Sb(),c.Tb(16,"mat-card",10),c.Ob(17,"span",6),c.Tb(18,"span",7),c.Rc(19,"Average Bill"),c.Sb(),c.Ob(20,"span",6),c.Tb(21,"p",8),c.Rc(22),c.Sb(),c.Pc(23,F,2,1,"p",9),c.Sb(),c.Tb(24,"mat-card",11),c.Ob(25,"span",6),c.Tb(26,"span",7),c.Rc(27,"Last Paid Amount"),c.Sb(),c.Ob(28,"span",6),c.Tb(29,"p",8),c.Rc(30),c.Sb(),c.Pc(31,L,2,1,"p",9),c.Sb(),c.Tb(32,"mat-card",12),c.Ob(33,"span",6),c.Tb(34,"span",7),c.Rc(35,"Total Due"),c.Sb(),c.Ob(36,"span",6),c.Tb(37,"p",8),c.Rc(38),c.Sb(),c.Pc(39,B,1,0,"p",13),c.Sb(),c.Sb(),c.Tb(40,"h6",14),c.Tb(41,"div",15),c.Rc(42,"Units and Utilities"),c.Sb(),c.Sb(),c.Tb(43,"mat-card",16),c.Tb(44,"mat-form-field",17),c.Tb(45,"mat-select",18),c.bc("ngModelChange",(function(t){return n.unitNo=t}))("ngModelChange",(function(){return n.onUtilityChange()})),c.Pc(46,N,2,2,"mat-option",19),c.Sb(),c.Sb(),c.Tb(47,"mat-form-field",17),c.Tb(48,"mat-select",20),c.bc("ngModelChange",(function(t){return n.deviceId=t}))("ngModelChange",(function(){return n.onDropdownChange()})),c.Pc(49,_,2,2,"mat-option",19),c.Sb(),c.Sb(),c.Sb(),c.Tb(50,"div",21),c.Tb(51,"mat-button-toggle-group",22),c.bc("change",(function(t){return n.onValChange(t)})),c.Pc(52,R,2,4,"mat-button-toggle",23),c.Sb(),c.Sb(),c.Tb(53,"div",24),c.Tb(54,"div",25),c.Tb(55,"mat-card",26),c.Tb(56,"h3"),c.Tb(57,"b"),c.Rc(58),c.Sb(),c.Sb(),c.Ob(59,"div",27),c.Sb(),c.Sb(),c.Tb(60,"div",25),c.Tb(61,"mat-card",26),c.Tb(62,"h3"),c.Tb(63,"b"),c.Rc(64),c.Sb(),c.Sb(),c.Tb(65,"div",28),c.Pc(66,z,2,2,"button",29),c.Sb(),c.Ob(67,"div",30),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&t&&(c.mc("ngIf",n.ticketsLength>0),c.Cb(4),c.Tc("",n.ownerName,"'s"),c.Cb(10),c.Uc("",n.currencySymbol,"",n.LastBill," "),c.Cb(1),c.mc("ngIf",n.blnShow&&null!=n.LastBillDate&&""!=n.LastBillDate),c.Cb(7),c.Uc("",n.currencySymbol,"",n.LastConsumption," "),c.Cb(1),c.mc("ngIf",n.blnShow&&null!=n.ConsumptionDate&&""!=n.ConsumptionDate),c.Cb(7),c.Uc("",n.currencySymbol,"",n.LastPaid," "),c.Cb(1),c.mc("ngIf",n.blnShow&&null!=n.LastPaidDate&&""!=n.LastPaidDate),c.Cb(7),c.Uc("",n.currencySymbol,"",n.TotalDue," "),c.Cb(1),c.mc("ngIf",n.blnShow&&null!=n.LastPaidDate&&""!=n.LastPaidDate),c.Cb(6),c.mc("ngModel",n.unitNo),c.Cb(1),c.mc("ngForOf",n.lstunitNo),c.Cb(2),c.mc("ngModel",n.deviceId),c.Cb(1),c.mc("ngForOf",n.lstutilityType),c.Cb(2),c.mc("value",n.type),c.Cb(1),c.mc("ngForOf",n.lstType),c.Cb(6),c.Sc(n.title),c.Cb(6),c.Sc(n.dailyTitle),c.Cb(2),c.mc("ngForOf",n.dailyChart))},directives:[s.o,D.d,D.e,O.a,D.b,T.i,x.d,w.a,I.q,I.t,s.n,P.b,m.a,M.n,P.a],styles:[".heading[_ngcontent-%COMP%]{background:#1976d2;font-size:17px;height:0}.child-2[_ngcontent-%COMP%]{background:#fff;min-height:50px;border:thin solid #ddd;align-items:center}.button-style[_ngcontent-%COMP%]{margin-bottom:5%}.button-style[_ngcontent-%COMP%], .nodata[_ngcontent-%COMP%]{align-self:center;justify-content:center}.nodata[_ngcontent-%COMP%]{width:80%;height:16%;margin-top:6%;color:grey;display:flex}.img-style[_ngcontent-%COMP%]{width:32px}.header-row[_ngcontent-%COMP%]{flex-direction:row;background-color:#e0eef1;min-height:40%}.content[_ngcontent-%COMP%], .header-row[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.content[_ngcontent-%COMP%]{flex-direction:column}.card-data[_ngcontent-%COMP%]{height:70%;align-self:stretch}.div-height[_ngcontent-%COMP%]{min-height:117px}.lastBill[_ngcontent-%COMP%]{font-size:xx-large;margin:0;text-align:right;padding-top:10px}.fontSize[_ngcontent-%COMP%], .lastBill[_ngcontent-%COMP%]{vertical-align:middle;font-weight:700}.fontSize[_ngcontent-%COMP%]{font-size:medium}.LastBillTile[_ngcontent-%COMP%]{background:#03a9f4;color:#fff;max-width:100%;min-height:150px;padding-bottom:20px}.Consumption[_ngcontent-%COMP%]{background:#dc0a59}.Consumption[_ngcontent-%COMP%], .dues[_ngcontent-%COMP%]{color:#fff;max-width:100%;min-height:150px;padding-bottom:40px}.dues[_ngcontent-%COMP%]{background:#10c8cd}.LastPaid[_ngcontent-%COMP%]{background:#3f51b5;color:#fff;max-width:100%;min-height:150px;padding-bottom:40px}.rightAlign[_ngcontent-%COMP%]{float:right}.alignCenter[_ngcontent-%COMP%]{vertical-align:middle}.noDataChart1[_ngcontent-%COMP%]{padding-top:26%}.noDataChart1[_ngcontent-%COMP%], .noDataChart2[_ngcontent-%COMP%]{height:180px;color:grey;align-self:center;justify-content:center;display:flex}.noDataChart2[_ngcontent-%COMP%]{padding-top:20%}.top10Padding[_ngcontent-%COMP%]{padding-top:10px}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#fff;background-color:#9e9fa3;outline:none}.buttons[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#0051b4;color:#fff}.revbuttons[_ngcontent-%COMP%]{min-width:310px;text-align:right;font-size:0}.revbuttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;border:none;border-radius:16px;background-color:#f8f8f8 0 0 no-repeat padding-box;font-size:1rem;padding:.5rem;outline:none;transition-duration:.3s;margin:4px auto}.revbuttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#fff;background-color:#2e3246;outline:none}.revbuttons[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#0051b4;color:#fff}.toolBar[_ngcontent-%COMP%]{font-size:x-large;font-weight:700;line-height:50px}.customMatToolbar[_ngcontent-%COMP%]{font-weight:35px;font-size:larger}.mat-button-toggle-group[_ngcontent-%COMP%]{height:45px}.mat-button-toggle[_ngcontent-%COMP%]{width:100px}.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#0051b4;color:#fff!important}"]}),j)}],G=((E=function n(){t(this,n)}).\u0275mod=c.Lb({type:E}),E.\u0275inj=c.Kb({factory:function(t){return new(t||E)},imports:[[r.j.forChild(W)],r.j]}),E),H=a("KthW"),K=a("WCGO"),X=a("7EHt"),Y=a("BWpj"),J=((A=function n(){t(this,n)}).\u0275mod=c.Lb({type:A}),A.\u0275inj=c.Kb({factory:function(t){return new(t||A)},providers:[m.a,s.g],imports:[[s.c,G,O.g,H.a,I.w,w.b,M.o,I.l,K.a,X.b,Y.TicketlistModule]]}),A)}}])}();