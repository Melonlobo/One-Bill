(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"6d0E":function(t,i,n){"use strict";n.r(i),n.d(i,"TenantOwnerDashboardModule",(function(){return A}));var e=n("ofXK"),o=n("Wp6s"),a=n("KthW"),s=n("d3UM"),r=n("FKr1"),h=n("tyNb"),l=n("KcIl"),c=n("6n/F"),u=n("fXoL"),d=n("b6Qw"),m=n("XiUz"),p=n("0IaG"),b=n("7EHt");function g(t,i){if(1&t&&(u.Tb(0,"label"),u.Rc(1),u.Sb()),2&t){const t=u.fc(2).$implicit;u.Cb(1),u.Tc(" ",t.title," ")}}function C(t,i){if(1&t&&(u.Tb(0,"label"),u.Rc(1),u.gc(2,"slice"),u.Sb()),2&t){const t=u.fc(2).$implicit;u.Cb(1),u.Tc("",u.jc(2,1,t.title,0,135)," ...")}}function y(t,i){if(1&t&&(u.Tb(0,"label"),u.Pc(1,g,2,1,"label",8),u.Pc(2,C,3,5,"label",8),u.Sb()),2&t){const t=u.fc().index,i=u.fc(2);u.Cb(1),u.mc("ngIf",i.panelOpenState[t]),u.Cb(1),u.mc("ngIf",!i.panelOpenState[t])}}function f(t,i){if(1&t&&(u.Tb(0,"label"),u.Rc(1),u.Sb()),2&t){const t=u.fc().$implicit;u.Cb(1),u.Tc(" ",t.title," ")}}function S(t,i){1&t&&(u.Tb(0,"label"),u.Rc(1,"-------"),u.Sb())}function O(t,i){if(1&t){const t=u.Ub();u.Tb(0,"mat-expansion-panel",7),u.bc("opened",(function(){u.Ec(t);const n=i.index;return u.fc(2).panelOpenState[n]=!0}))("closed",(function(){u.Ec(t);const n=i.index;return u.fc(2).panelOpenState[n]=!1})),u.Tb(1,"mat-expansion-panel-header"),u.Tb(2,"mat-panel-title"),u.Tb(3,"h5"),u.Tb(4,"b"),u.Pc(5,y,3,2,"label",8),u.Pc(6,f,2,1,"label",8),u.Pc(7,S,2,0,"label",8),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(8,"label"),u.Rc(9),u.Sb(),u.Sb()}if(2&t){const t=i.$implicit;u.Cb(5),u.mc("ngIf",t.title.length>135),u.Cb(1),u.mc("ngIf",t.title.length<=135),u.Cb(1),u.mc("ngIf",!t.title),u.Cb(2),u.Tc(" ",t.content," ")}}function T(t,i){if(1&t&&(u.Tb(0,"div",1),u.Tb(1,"h6",2),u.Tb(2,"div",3),u.Rc(3,"Announcements"),u.Sb(),u.Sb(),u.Ob(4,"div",4),u.Tb(5,"div",5),u.Tb(6,"mat-accordion"),u.Pc(7,O,10,4,"mat-expansion-panel",6),u.Sb(),u.Sb(),u.Sb()),2&t){const t=u.fc();u.Cb(7),u.mc("ngForOf",t.lstNews)}}let v=(()=>{class t{constructor(t,i){this.tenantOwnerService=t,this.cookieService=i,this.lstNews=[],this.divHeight="50px",this.panelOpenState=[]}ngOnInit(){this.getNews()}getNews(){this.ownerId=Number(this.cookieService.get("ownerId")),this.tenantOwnerService.getNews(this.ownerId).subscribe(t=>{t&&(this.lstNews=[],this.lstNews=t)})}}return t.\u0275fac=function(i){return new(i||t)(u.Nb(l.a),u.Nb(d.a))},t.\u0275cmp=u.Hb({type:t,selectors:[["fury-news"]],decls:1,vars:1,consts:[["flexLayout","column","fxLayoutGap","2%","class","div-news",4,"ngIf"],["flexLayout","column","fxLayoutGap","2%",1,"div-news"],[1,"customMatToolbar"],["mat-dialog-title",""],["flexLayout","row",2,"min-height","20px"],["flexLayout","row",1,"scrollit"],["id","divId","class","child-2",3,"opened","closed",4,"ngFor","ngForOf"],["id","divId",1,"child-2",3,"opened","closed"],[4,"ngIf"]],template:function(t,i){1&t&&u.Pc(0,T,8,1,"div",0),2&t&&u.mc("ngIf",i.lstNews.length>0)},directives:[e.o,m.e,p.i,b.a,e.n,b.c,b.d,b.e],pipes:[e.w],styles:[".child-2[_ngcontent-%COMP%]{background:#fff;border:thin solid #ddd;align-items:center;width:99.9%}.textstyles[_ngcontent-%COMP%]{text-decoration:none;margin-left:10px}span[_ngcontent-%COMP%]{font-weight:500;font-family:Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol}#divId[_ngcontent-%COMP%]:hover{background-color:#e0eef1}.scrollit[_ngcontent-%COMP%]{padding:0;margin:0}.heading[_ngcontent-%COMP%]{background:#1976d2;font-size:17px;height:0}.div-news[_ngcontent-%COMP%]{padding:0}.customMatToolbar[_ngcontent-%COMP%]{font-weight:35px;font-size:larger;margin-bottom:0}"]}),t})();var D=n("KHMF"),x=n("a8hA"),w=n("sXtk"),I=n("kmnG"),P=n("3Pt+"),M=n("jaxi");function F(t,i){if(1&t&&(u.Tb(0,"p",29),u.Rc(1),u.Sb()),2&t){const t=u.fc();u.Cb(1),u.Tc("On ",t.LastBillDate," ")}}function U(t,i){if(1&t&&(u.Tb(0,"p",29),u.Rc(1),u.Sb()),2&t){const t=u.fc();u.Cb(1),u.Tc("On ",t.ConsumptionDate," ")}}function B(t,i){if(1&t&&(u.Tb(0,"p",29),u.Rc(1),u.Sb()),2&t){const t=u.fc();u.Cb(1),u.Tc("On ",t.LastPaidDate," ")}}function L(t,i){1&t&&u.Ob(0,"p",30)}function N(t,i){if(1&t&&(u.Tb(0,"mat-option",31),u.Rc(1),u.Sb()),2&t){const t=i.$implicit;u.mc("value",t.id),u.Cb(1),u.Sc(t.description)}}function _(t,i){if(1&t&&(u.Tb(0,"mat-option",31),u.Rc(1),u.Sb()),2&t){const t=i.$implicit;u.mc("value",t.id),u.Cb(1),u.Sc(t.utilityType)}}function R(t,i){if(1&t&&(u.Tb(0,"mat-button-toggle",32),u.Rc(1),u.Sb()),2&t){const t=i.$implicit,n=i.index;u.nc("id",t),u.nc("value",t),u.mc("checked",0===n),u.Cb(1),u.Sc(t)}}function k(t,i){if(1&t){const t=u.Ub();u.Tb(0,"button",33),u.bc("click",(function(i){return u.Ec(t),u.fc().showDailyData(i)})),u.Rc(1),u.Sb()}if(2&t){const t=i.$implicit;u.nc("id",t),u.Cb(1),u.Tc(" ",t," ")}}n("Tos5")(c);const E=[{path:"",component:(()=>{class t{constructor(t,i,n,e,o,a,s,r){var h,l,c;this.tenantOwnerService=t,this.newsComponent=i,this.router=n,this.date=e,this.decimalPipe=o,this.clientSelectionService=a,this.cookieService=s,this.envService=r,this.utilityUnit="",this.reportType="",this.dailyChart=["CurrentMonth","PreviousMonth"],this.barChartOptions={},this.consumptionBarChartOptions={},this.dctBarChart={},this.dctConsumptionChart={},this.unit="",this.deviceId=0,this.lstunitNo=[],this.lstutilityType=[],this.lstType=["Consumption","Cost"],this.LastBill="0",this.LastBillDate="",this.LastConsumption="0",this.typeId=1,this.type="Consumption",this.LastPaid="0",this.TotalDue="0",this.title="",this.dailyTitle="",this.dateFormat="",this.currency="",this.roundFormat="",this.consumptionRoundOffFormat=Object(D.e)("ConsumptionRoundOff"),this.roundOff=0,this.blnShow=!1,this.ownerName="",this.dateFormat=null!==(h=Object(D.e)("DateFormat"))&&void 0!==h?h:r.dateFormat,this.currency=null!==(l=Object(D.e)("Currency"))&&void 0!==l?l:r.currencyFormat,this.roundFormat=null!==(c=Object(D.e)("RoundOff"))&&void 0!==c?c:r.roundOffFormat}ngOnInit(){this.clientSelectionService.setIsClientVisible(!1),this.currencySymbol=Object(e.A)(this.currency,"narrow"),this.clientId=this.cookieService.get("globalClientId"),this.dctBarChart.labels=[],this.dctBarChart.datas=[];let t=new Date;this.firstDate=new Date(t.getFullYear(),t.getMonth(),1),this.lastDate=new Date(t.getFullYear(),t.getMonth()+1,0),this.title="Last 12 Months "+("Consumption"===this.type?" Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle="Daily "+("Consumption"===this.type?"Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle+=" - "+this.date.transform(this.firstDate.toString(),this.dateFormat.toString())+"-"+this.date.transform(this.lastDate.toString(),this.dateFormat.toString());let i="Consumption"===this.type?this.utilityUnit:this.currencySymbol;this.setConsumptionRoundOff(0),this.barChartOptions=this.tenantOwnerService.setBarChart(this.dctBarChart,i),document.getElementById("tbarChartId")&&c.chart("tbarChartId",this.barChartOptions),this.consumptionBarChartOptions=this.setDailyConsumptionChart(this.dctConsumptionChart,"",this.type),document.getElementById("tbarChartId2")&&c.chart("tbarChartId2",this.consumptionBarChartOptions),this.ownerId=Number(this.cookieService.get("ownerId")),this.tenantOwnerService.getOwnerTenantName(this.ownerId).subscribe(t=>{t&&(this.ownerName=t.ownerTenantName)}),this.getUnits()}paymentNavigation(){this.router.navigateByUrl("bills/tenant-payment")}getUnits(){this.tenantOwnerService.getUnits(this.ownerId).subscribe(t=>{var i;t&&(this.lstunitNo=[],this.lstunitNo=t,this.lstunitNo.length>0&&(this.unitNo=null===(i=this.lstunitNo)||void 0===i?void 0:i[0].id,this.getUtilities()))})}getUtilities(){null!=this.unitNo&&this.tenantOwnerService.getTenantUtilityDetails(this.ownerId,this.unitNo).subscribe(t=>{var i,n;t&&(this.lstutilityType=[],this.lstutilityType=t,this.lstutilityType.length>0&&(this.utilityType=null===(i=this.lstutilityType)||void 0===i?void 0:i[0].utilityTypeId,this.deviceId=null===(n=this.lstutilityType)||void 0===n?void 0:n[0].id,this.getUtilityUnit()))})}getUtilityUnit(){this.utilityUnit="",this.tenantOwnerService.getUtilityUnit(this.utilityType).subscribe(t=>{""!=t&&(this.utilityUnit=t.utilityUnit,this.setData())})}onDropdownChange(){this.getUtilities()}onUtilityTypeChange(){this.onChangeUtilityType(),this.getUtilityUnit()}onChangeUtilityType(){var t;this.utilityType&&this.deviceId&&this.lstutilityType&&(this.utilityType=null===(t=this.lstutilityType.find(t=>t.id===this.deviceId))||void 0===t?void 0:t.utilityTypeId)}setButtonStyle(){let t=document.getElementById(this.reportType);document.querySelectorAll(".revbuttons button.active").forEach((function(t){t.className=""})),t.className="active"}onTypeChange(){this.unit="Consumption"===this.type?this.utilityUnit:this.currencySymbol,this.setDates(),this.title="Last 12 Months "+("Consumption"===this.type?" Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle="Daily "+("Consumption"===this.type?"Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle+=" - "+this.date.transform(this.firstDate.toString(),this.dateFormat.toString())+"-"+this.date.transform(this.lastDate.toString(),this.dateFormat.toString()),null!=this.unitNo&&null!=this.utilityType&&this.setData()}onValChange(t){null!=t&&(this.type=t.value),this.unit="Consumption"===this.type?this.utilityUnit:this.currencySymbol,this.typeId="Cost"===this.type?2:1,this.setDates(),this.title="Last 12 Months "+("Consumption"===this.type?" Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle="Daily "+("Consumption"===this.type?"Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle+=" - "+this.date.transform(this.firstDate.toString(),this.dateFormat.toString())+"-"+this.date.transform(this.lastDate.toString(),this.dateFormat.toString()),this.barChartOptions=this.tenantOwnerService.setBarChart(this.dctBarChart,"",this.type,this.unit),document.getElementById("tbarChartId")&&c.chart("tbarChartId",this.barChartOptions),this.consumptionBarChartOptions=this.setDailyConsumptionChart(this.dctConsumptionChart,"",this.type),document.getElementById("tbarChartId2")&&c.chart("tbarChartId2",this.consumptionBarChartOptions),null!=this.unitNo&&null!=this.utilityType&&this.setData()}setConsumptionRoundOff(t){this.consumptionRoundOffFormat=Object(D.e)("ConsumptionRoundOff",t),this.roundOff=this.consumptionRoundOffFormat&&"Consumption"==this.type?parseInt(this.consumptionRoundOffFormat.substring(this.consumptionRoundOffFormat.indexOf("-")+1,this.consumptionRoundOffFormat.length)):parseInt(this.roundFormat.substring(this.roundFormat.indexOf("-")+1,this.roundFormat.length))}setData(){this.dctBarChart={},this.dctBarChart.labels=[],this.dctBarChart.datas=[],this.LastBill=this.decimalPipe.transform(0,this.roundFormat),this.LastConsumption=this.decimalPipe.transform(0,this.roundFormat),this.TotalDue=this.decimalPipe.transform(0,this.roundFormat),this.LastPaid=this.decimalPipe.transform(0,this.roundFormat),this.title="Last 12 Months "+("Consumption"===this.type?" Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle="Daily "+("Consumption"===this.type?"Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle+=" - "+this.date.transform(this.firstDate.toString(),this.dateFormat.toString())+"-"+this.date.transform(this.lastDate.toString(),this.dateFormat.toString());let t="Consumption"===this.type?this.utilityUnit:this.currencySymbol;this.setConsumptionRoundOff(Number(this.utilityType));const i="Consumption"===this.type?"Consumption in ["+this.utilityUnit+"]":"Charge in ["+this.currencySymbol+"]";if(null!=this.unitNo&&null!=this.utilityType&&this.tenantOwnerService.getOwnerTenantDashboardData(this.ownerId,this.unitNo,this.utilityType,Number(this.clientId),this.typeId,this.deviceId).subscribe(n=>{if(n){if(n.barChartDataList&&n.barChartDataList.length){let e=n.barChartDataList;this.dctBarChart={},this.dctBarChart.labels=[],this.dctBarChart.datas=[],Object.keys(e).map(t=>{this.dctBarChart.labels.push(e[t].month),this.dctBarChart.datas.push(Number(e[t].unitConsumption))}),this.barChartOptions=this.tenantOwnerService.setBarChart(this.dctBarChart,i,this.type,t,this.roundOff),document.getElementById("tbarChartId")&&c.chart("tbarChartId",this.barChartOptions)}else this.barChartOptions=this.tenantOwnerService.setBarChart(this.dctBarChart,i,this.type,t,this.roundOff),document.getElementById("tbarChartId")&&c.chart("tbarChartId",this.barChartOptions);n.accountStatus&&(this.LastPaid=this.decimalPipe.transform(n.accountStatus.lastPaid,this.roundFormat),"1900-01-01T00:00:00"!=n.accountStatus.lastPaidDate.toString()&&(this.LastPaidDate=this.date.transform(n.accountStatus.lastPaidDate,this.dateFormat.toString())),this.TotalDue=n.accountStatus.totalDue<0?"("+this.decimalPipe.transform(n.accountStatus.totalDue.toString(),this.roundFormat)+")":this.decimalPipe.transform(n.accountStatus.totalDue.toString(),this.roundFormat)),n.averageMonthlyUsage&&(this.LastBill=this.decimalPipe.transform(n.averageMonthlyUsage.lastBill,this.roundFormat),null!=n.averageMonthlyUsage.lastBillDate&&"1900-01-01T00:00:00"!=n.averageMonthlyUsage.lastBillDate.toString()&&(this.LastBillDate=this.date.transform(n.averageMonthlyUsage.lastBillDate,this.dateFormat.toString())),this.LastConsumption=this.decimalPipe.transform(n.averageMonthlyUsage.lastConsumption,this.roundFormat),null!=n.averageMonthlyUsage.consumptionDate&&"1900-01-01T00:00:00"!=n.averageMonthlyUsage.consumptionDate.toString()&&(this.ConsumptionDate=this.date.transform(n.averageMonthlyUsage.consumptionDate,this.dateFormat.toString()))),this.blnShow=!0}else this.blnShow=!1,this.barChartOptions=this.tenantOwnerService.setBarChart(this.dctBarChart,i,this.type,t,this.roundOff),document.getElementById("tbarChartId")&&c.chart("tbarChartId",this.barChartOptions)},n=>{this.blnShow=!1,this.barChartOptions=this.tenantOwnerService.setBarChart(this.dctBarChart,i,this.type,t,this.roundOff),document.getElementById("tbarChartId")&&c.chart("tbarChartId",this.barChartOptions)}),""==this.reportType){this.reportType=this.dailyChart[0];let t=document.getElementById(this.dailyChart[0]);document.querySelectorAll(".revbuttons button.active").forEach((function(t){t.className=""})),t.className="active"}this.setDates(),this.makeDailyChart()}makeDailyChart(){let t="";this.dctConsumptionChart={},this.dctConsumptionChart.labels=[],this.dctConsumptionChart.datas=[],this.unitNo&&this.utilityType&&this.tenantOwnerService.getOwnerTenantConsumptionData(this.ownerId,this.unitNo,this.utilityType,this.clientId,this.typeId,this.reportType,this.deviceId).subscribe(i=>{if(i)if(this.dctConsumptionChart={},this.dctConsumptionChart.labels=[],this.dctConsumptionChart.datas=[],i.dayWiseConsumptionDatas&&i.dayWiseConsumptionDatas.length){t="Consumption"===this.type?"Consumption in ["+this.utilityUnit+"]":"Charge in ["+this.currencySymbol+"]";let n=i.dayWiseConsumptionDatas;this.unit=i.dayWiseConsumptionDatas[0].unit,this.unit=this.unit.toUpperCase(),Object.keys(n).map(t=>{this.dctConsumptionChart.labels.push(n[t].dayId),this.dctConsumptionChart.datas.push(Number(n[t].consumption))}),this.consumptionBarChartOptions=this.setDailyConsumptionChart(this.dctConsumptionChart,t,this.type),document.getElementById("tbarChartId2")&&c.chart("tbarChartId2",this.consumptionBarChartOptions)}else this.consumptionBarChartOptions=this.setDailyConsumptionChart(this.dctConsumptionChart,t,this.type),document.getElementById("tbarChartId2")&&c.chart("tbarChartId2",this.consumptionBarChartOptions);else this.consumptionBarChartOptions=this.setDailyConsumptionChart(this.dctConsumptionChart,t,this.type),document.getElementById("tbarChartId2")&&c.chart("tbarChartId2",this.consumptionBarChartOptions)},t=>{this.barChartOptions=this.setDailyConsumptionChart(this.dctConsumptionChart,"",this.type),document.getElementById("tbarChartId2")&&c.chart("tbarChartId2",this.barChartOptions)})}setDailyConsumptionChart(t,i="Consumption in ["+this.utilityUnit+"]",n="Consumption"){let e=0,o=n;e=this.consumptionRoundOffFormat&&"Consumption"==this.type?parseInt(this.consumptionRoundOffFormat.substring(this.consumptionRoundOffFormat.indexOf("-")+1,this.consumptionRoundOffFormat.length)):parseInt(this.roundFormat.substring(this.roundFormat.indexOf("-")+1,this.roundFormat.length));let a="Consumption"===this.type?this.utilityUnit:this.currencySymbol;return{chart:{height:325,type:"line"},credits:{enabled:!1},title:{text:"",style:{fontFamily:"Roboto",fontWeight:"bold"}},subtitle:{text:null},xAxis:{categories:null!=t.labels?this.formatLabel(t.labels):""},yAxis:{min:0,title:{text:i,style:{fontSize:"12px",fontFamily:"Roboto"}}},lang:{noData:"No data to display"},noData:{style:{fontWeight:"bold",fontSize:"15px"}},legend:{itemStyle:{color:"#000000",fontWeight:"normal"},layout:"horizontal",align:"left",verticalAlign:"top",x:0,y:0,floating:!1,shadow:!1},tooltip:{formatter:function(){return"Cost"==o?this.x+": "+a+this.y.toFixed(e):this.x+": "+this.y.toFixed(e)+a}},colors:["#3366CC"],plotOptions:{column:{pointPadding:.2,borderWidth:0,pointWidth:8,color:"rgb(63, 81, 181)"}},series:[{name:n,data:t.datas}]}}formatLabel(t){return t.map(t=>(t.length>7&&(t=t.slice(0,5)+".."),t))}showDailyData(t){let i=(t.target||t.srcElement||t.currentTarget).attributes.id.nodeValue,n=document.getElementById(i);document.querySelectorAll(".revbuttons button.active").forEach((function(t){t.className=""})),n.className="active",this.reportType=i,this.setDates(),this.title="Last 12 Months "+("Consumption"===this.type?" Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle="Daily "+("Consumption"===this.type?"Consumption Chart ["+this.utilityUnit+"]":"Usage Charges Chart ["+this.currencySymbol+"]"),this.dailyTitle+=" - "+this.date.transform(this.firstDate.toString(),this.dateFormat.toString())+"-"+this.date.transform(this.lastDate.toString(),this.dateFormat.toString()),this.makeDailyChart()}setDates(){let t=new Date;"CurrentMonth"==this.reportType?(this.firstDate=new Date(t.getFullYear(),t.getMonth(),1),this.lastDate=new Date(t.getFullYear(),t.getMonth()+1,0)):"PreviousMonth"==this.reportType&&(this.firstDate=new Date(t.getFullYear(),t.getMonth()-1,1),this.lastDate=new Date(t.getFullYear(),t.getMonth(),0))}}return t.\u0275fac=function(i){return new(i||t)(u.Nb(l.a),u.Nb(v),u.Nb(h.f),u.Nb(e.f),u.Nb(e.g),u.Nb(x.a),u.Nb(d.a),u.Nb(w.a))},t.\u0275cmp=u.Hb({type:t,selectors:[["fury-tenant-owner-dashboard"]],decls:65,vars:22,consts:[["fxLayout","column","fxLayoutGap","2%",2,"padding","1%"],["fxLayout","row","fxLayout.xs","column",1,"toolBar"],["fxLayout","row","fxLayout.xs","column","fxLayoutGap","15px",2,"height","20%"],["fxFlex","",1,"mat-elevation-z4","LastBillTile"],[2,"padding-top","20px"],[1,"fontSize"],[1,"lastBill"],["class","rightAlign",4,"ngIf"],["fxFlex","",1,"mat-elevation-z4","Consumption"],["fxFlex","",1,"mat-elevation-z4","LastPaid"],["fxFlex","",1,"mat-elevation-z4","dues"],["style","padding-bottom:20px;",4,"ngIf"],[1,"customMatToolbar"],["mat-dialog-title",""],["fxLayout","row","fxLayout.xs","column","fxLayoutGap","2%"],["fxFlex","30%;"],["name","unitNo","id","unitNoId","placeholder","Unit Number",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["name","utilityType","id","utilityTypeId","placeholder","Utility Type",3,"ngModel","ngModelChange"],[2,"float","right"],["name","fontStyle","aria-label","Font Style",1,"buttons",2,"font-size","small","float","right",3,"value","change"],["style","padding: 0px;",3,"id","checked","value",4,"ngFor","ngForOf"],["fxLayout","row","fxLayout.xs","column","fxLayout.sm","column","fxLayoutGap","6px",1,"content",2,"margin-left","20px","width","98%"],[2,"width","100%","overflow","scroll"],[1,"mat-elevation-z4",2,"height","435px","display","inline-flex","flex-flow","row wrap"],["id","tbarChartId"],[1,"revbuttons"],[3,"id","click",4,"ngFor","ngForOf"],["id","tbarChartId2"],[1,"rightAlign"],[2,"padding-bottom","20px"],[3,"value"],[2,"padding","0px",3,"id","checked","value"],[3,"id","click"]],template:function(t,i){1&t&&(u.Tb(0,"div",0),u.Tb(1,"span",1),u.Rc(2),u.Sb(),u.Tb(3,"div",2),u.Tb(4,"mat-card",3),u.Ob(5,"span",4),u.Tb(6,"span",5),u.Rc(7,"Last Bill"),u.Sb(),u.Ob(8,"span",4),u.Tb(9,"p",6),u.Rc(10),u.Sb(),u.Pc(11,F,2,1,"p",7),u.Sb(),u.Tb(12,"mat-card",8),u.Ob(13,"span",4),u.Tb(14,"span",5),u.Rc(15,"Average Bill"),u.Sb(),u.Ob(16,"span",4),u.Tb(17,"p",6),u.Rc(18),u.Sb(),u.Pc(19,U,2,1,"p",7),u.Sb(),u.Tb(20,"mat-card",9),u.Ob(21,"span",4),u.Tb(22,"span",5),u.Rc(23,"Last Paid Amount"),u.Sb(),u.Ob(24,"span",4),u.Tb(25,"p",6),u.Rc(26),u.Sb(),u.Pc(27,B,2,1,"p",7),u.Sb(),u.Tb(28,"mat-card",10),u.Ob(29,"span",4),u.Tb(30,"span",5),u.Rc(31,"Total Due"),u.Sb(),u.Ob(32,"span",4),u.Tb(33,"p",6),u.Rc(34),u.Sb(),u.Pc(35,L,1,0,"p",11),u.Sb(),u.Sb(),u.Ob(36,"fury-news"),u.Tb(37,"h6",12),u.Tb(38,"div",13),u.Rc(39,"Units and Utilities"),u.Sb(),u.Sb(),u.Tb(40,"mat-card",14),u.Tb(41,"mat-form-field",15),u.Tb(42,"mat-select",16),u.bc("ngModelChange",(function(t){return i.unitNo=t}))("ngModelChange",(function(){return i.onDropdownChange()})),u.Pc(43,N,2,2,"mat-option",17),u.Sb(),u.Sb(),u.Tb(44,"mat-form-field",15),u.Tb(45,"mat-select",18),u.bc("ngModelChange",(function(t){return i.deviceId=t}))("ngModelChange",(function(){return i.onUtilityTypeChange()})),u.Pc(46,_,2,2,"mat-option",17),u.Sb(),u.Sb(),u.Sb(),u.Tb(47,"div",19),u.Tb(48,"mat-button-toggle-group",20),u.bc("change",(function(t){return i.onValChange(t)})),u.Pc(49,R,2,4,"mat-button-toggle",21),u.Sb(),u.Sb(),u.Tb(50,"div",22),u.Tb(51,"div",23),u.Tb(52,"mat-card",24),u.Tb(53,"h3"),u.Tb(54,"b"),u.Rc(55),u.Sb(),u.Sb(),u.Ob(56,"div",25),u.Sb(),u.Sb(),u.Tb(57,"div",23),u.Tb(58,"mat-card",24),u.Tb(59,"h3"),u.Tb(60,"b"),u.Rc(61),u.Sb(),u.Sb(),u.Tb(62,"div",26),u.Pc(63,k,2,2,"button",27),u.Sb(),u.Ob(64,"div",28),u.Sb(),u.Sb(),u.Sb(),u.Sb()),2&t&&(u.Cb(2),u.Tc(" Welcome, ",i.ownerName," "),u.Cb(8),u.Uc("",i.currencySymbol,"",i.LastBill," "),u.Cb(1),u.mc("ngIf",i.blnShow&&null!=i.LastBillDate&&""!=i.LastBillDate),u.Cb(7),u.Uc("",i.currencySymbol,"",i.LastConsumption," "),u.Cb(1),u.mc("ngIf",i.blnShow&&null!=i.ConsumptionDate&&""!=i.ConsumptionDate),u.Cb(7),u.Uc("",i.currencySymbol,"",i.LastPaid," "),u.Cb(1),u.mc("ngIf",i.blnShow&&null!=i.LastPaidDate&&""!=i.LastPaidDate),u.Cb(7),u.Uc("",i.currencySymbol,"",i.TotalDue," "),u.Cb(1),u.mc("ngIf",i.blnShow&&null!=i.LastPaidDate&&""!=i.LastPaidDate),u.Cb(7),u.mc("ngModel",i.unitNo),u.Cb(1),u.mc("ngForOf",i.lstunitNo),u.Cb(2),u.mc("ngModel",i.deviceId),u.Cb(1),u.mc("ngForOf",i.lstutilityType),u.Cb(2),u.mc("value",i.type),u.Cb(1),u.mc("ngForOf",i.lstType),u.Cb(6),u.Tc(" ",i.title,""),u.Cb(6),u.Tc(" ",i.dailyTitle,""),u.Cb(2),u.mc("ngForOf",i.dailyChart))},directives:[m.d,m.e,o.a,m.b,e.o,v,p.i,I.d,s.a,P.q,P.t,e.n,M.b,r.n,M.a],styles:[".heading[_ngcontent-%COMP%]{background:#1976d2;font-size:17px;height:0}.child-2[_ngcontent-%COMP%]{background:#fff;min-height:50px;border:thin solid #ddd;align-items:center}.button-style[_ngcontent-%COMP%]{margin-bottom:5%}.button-style[_ngcontent-%COMP%], .nodata[_ngcontent-%COMP%]{align-self:center;justify-content:center}.nodata[_ngcontent-%COMP%]{width:80%;height:16%;margin-top:6%;color:grey;display:flex}.img-style[_ngcontent-%COMP%]{width:32px}.header-row[_ngcontent-%COMP%]{flex-direction:row;background-color:#e0eef1;min-height:40%}.content[_ngcontent-%COMP%], .header-row[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.content[_ngcontent-%COMP%]{flex-direction:column;min-width:50%;max-width:100%}.card-data[_ngcontent-%COMP%]{height:70%;align-self:stretch}.div-height[_ngcontent-%COMP%]{min-height:125px}.lastBill[_ngcontent-%COMP%]{font-size:xx-large;margin:0;text-align:right}.fontSize[_ngcontent-%COMP%], .lastBill[_ngcontent-%COMP%]{vertical-align:middle;font-weight:700}.fontSize[_ngcontent-%COMP%]{font-size:medium}.LastBillTile[_ngcontent-%COMP%]{background:#03a9f4;color:#fff;max-width:100%;min-height:150px;padding-bottom:20px}.Consumption[_ngcontent-%COMP%]{background:#dc0a59}.Consumption[_ngcontent-%COMP%], .dues[_ngcontent-%COMP%]{color:#fff;max-width:100%;min-height:150px;padding-bottom:40px}.dues[_ngcontent-%COMP%]{background:#10c8cd}.LastPaid[_ngcontent-%COMP%]{background:#3f51b5;color:#fff;max-width:100%;min-height:150px;padding-bottom:40px}.rightAlign[_ngcontent-%COMP%]{float:right}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#fff;background-color:#9e9fa3;outline:none}.buttons[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#0051b4;color:#fff}.revbuttons[_ngcontent-%COMP%]{min-width:310px;text-align:right;font-size:0}.revbuttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer;border:none;border-radius:16px;background-color:#f8f8f8 0 0 no-repeat padding-box;font-size:1rem;padding:.5rem;outline:none;transition-duration:.3s;margin:4px auto}.revbuttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#fff;background-color:#9e9fa3;outline:none}.revbuttons[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#0051b4;color:#fff}.toolBar[_ngcontent-%COMP%]{font-size:x-large;font-weight:700;line-height:50px;margin-bottom:10px!important}.customMatToolbar[_ngcontent-%COMP%]{font-weight:35px;font-size:larger;margin-bottom:0!important}.mat-button-toggle-group[_ngcontent-%COMP%]{height:45px}.mat-button-toggle[_ngcontent-%COMP%]{width:100px}.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#0051b4;color:#fff!important}"]}),t})()}];let z=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(i){return new(i||t)},imports:[[h.j.forChild(E)],h.j]}),t})();var j=n("WCGO");let A=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(i){return new(i||t)},providers:[v,e.g],imports:[[e.c,z,o.g,a.a,P.w,s.b,r.o,P.l,j.a,b.b]]}),t})()},Tos5:function(t,i,n){var e,o,a;a=function(t){function i(t,i,n,e){t.hasOwnProperty(i)||(t[i]=e.apply(null,n))}i(t=t?t._modules:{},"Extensions/NoDataToDisplay.js",[t["Core/Chart/Chart.js"],t["Core/Utilities.js"]],(function(t,i){var n=i.addEvent,e=i.extend,o=i.getOptions;i=t.prototype,o=o(),e(o.lang,{noData:"No data to display"}),o.noData={attr:{zIndex:1},position:{x:0,y:0,align:"center",verticalAlign:"middle"},style:{fontWeight:"bold",fontSize:"12px",color:"#666666"}},i.showNoData=function(t){var i=this.options;t=t||i&&i.lang.noData,i=i&&(i.noData||{}),this.renderer&&(this.noDataLabel||(this.noDataLabel=this.renderer.label(t,0,0,void 0,void 0,void 0,i.useHTML,void 0,"no-data").add()),this.styledMode||this.noDataLabel.attr(i.attr).css(i.style||{}),this.noDataLabel.align(e(this.noDataLabel.getBBox(),i.position||{}),!1,"plotBox"))},i.hideNoData=function(){this.noDataLabel&&(this.noDataLabel=this.noDataLabel.destroy())},i.hasData=function(){for(var t=this.series||[],i=t.length;i--;)if(t[i].hasData()&&!t[i].options.isInternal)return!0;return this.loadingShown},n(t,"render",(function(){this.hasData()?this.hideNoData():this.showNoData()}))})),i(t,"masters/modules/no-data-to-display.src.js",[],(function(){}))},t.exports?(a.default=a,t.exports=a):(e=[n("6n/F")],void 0===(o=(function(t){return a(t),a.Highcharts=t,a}).apply(i,e))||(t.exports=o))}}]);