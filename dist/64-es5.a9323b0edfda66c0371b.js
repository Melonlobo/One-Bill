!function(){function t(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||e(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{N0MT:function(a,n,i){"use strict";i.r(n),i.d(n,"EstidamaChartModule",(function(){return rt}));var s=i("ofXK"),l=i("tyNb"),h=i("dDrv"),c=i("wd/R"),m=i("6n/F"),p=i("i680"),u=(i("DaQG"),i("wOnQ")),f=i.n(u),d=i("zSPf"),g=i("WFQN"),b=i("KHMF"),v=i("sXtk"),y=i("fXoL"),C=i("3Pt+"),M=i("b6Qw"),D=i("XiUz"),T=i("/t3+"),I=i("znSr"),S=i("Wp6s"),L=i("kmnG"),k=i("d3UM"),x=i("qFsG"),F=i("f0Cb"),w=i("FKr1"),N=i("bTqV"),O=i("NFeN"),P=i("iadO"),Y=i("bSwM"),G=["allMetersSelected"];function R(t,e){1&t&&(y.Tb(0,"div",30),y.Ob(1,"mat-progress-spinner",31),y.Sb())}function E(t,e){if(1&t&&(y.Tb(0,"mat-option",32),y.Rc(1),y.Sb()),2&t){var a=e.$implicit;y.mc("value",a.meterTypeName),y.Cb(1),y.Tc("",a.meterTypeName," ")}}function U(t,e){if(1&t&&(y.Tb(0,"mat-option",32),y.Rc(1),y.Sb()),2&t){var a=e.$implicit;y.mc("value",a.id),y.Cb(1),y.Sc(a.description)}}function W(t,e){if(1&t){var a=y.Ub();y.Tb(0,"mat-option",14),y.bc("click",(function(){y.Ec(a);var t=y.fc(),e=y.Ac(20);return t.toggleMeterPerOne(e.viewValue)})),y.Rc(1),y.Sb()}if(2&t){var r=e.$implicit;y.mc("value",r.id),y.Cb(1),y.Tc(" ",r.deviceName," ")}}function A(t,e){if(1&t&&(y.Tb(0,"mat-option",32),y.Rc(1),y.Sb()),2&t){var a=e.$implicit;y.mc("value",a.value),y.Cb(1),y.Sc(a.value)}}function z(t,e){if(1&t&&(y.Tb(0,"mat-option",32),y.Rc(1),y.Sb()),2&t){var a=e.$implicit;y.mc("value",a.value),y.Cb(1),y.Sc(a.value)}}function B(t,e){if(1&t&&(y.Tb(0,"mat-option",32),y.Rc(1),y.Sb()),2&t){var a=e.$implicit;y.mc("value",a.value),y.Cb(1),y.Sc(a.value)}}function V(t,e){if(1&t){var a=y.Ub();y.Tb(0,"mat-form-field"),y.Tb(1,"mat-select",33),y.bc("ngModelChange",(function(t){return y.Ec(a),y.fc().toYear=t})),y.Pc(2,B,2,2,"mat-option",8),y.Sb(),y.Sb()}if(2&t){var r=y.fc();y.Cb(1),y.mc("ngModel",r.toYear),y.Cb(1),y.mc("ngForOf",r.lstToYear)}}function j(t,e){if(1&t&&(y.Tb(0,"mat-option",32),y.Rc(1),y.Sb()),2&t){var a=e.$implicit;y.mc("value",a.name),y.Cb(1),y.Sc(a.value)}}function H(t,e){if(1&t){var a=y.Ub();y.Tb(0,"mat-form-field"),y.Tb(1,"mat-select",34),y.bc("ngModelChange",(function(t){return y.Ec(a),y.fc().fromMonth=t})),y.Pc(2,j,2,2,"mat-option",8),y.Sb(),y.Sb()}if(2&t){var r=y.fc();y.Cb(1),y.mc("ngModel",r.fromMonth),y.Cb(1),y.mc("ngForOf",r.lstFromMonth)}}function _(t,e){if(1&t&&(y.Tb(0,"mat-option",32),y.Rc(1),y.Sb()),2&t){var a=e.$implicit;y.mc("value",a.name),y.Cb(1),y.Sc(a.value)}}function X(t,e){if(1&t){var a=y.Ub();y.Tb(0,"mat-form-field"),y.Tb(1,"mat-select",35),y.bc("ngModelChange",(function(t){return y.Ec(a),y.fc().toMonth=t})),y.Pc(2,_,2,2,"mat-option",8),y.Sb(),y.Sb()}if(2&t){var r=y.fc();y.Cb(1),y.mc("ngModel",r.toMonth),y.Cb(1),y.mc("ngForOf",r.lstToMonth)}}function $(t,e){if(1&t){var a=y.Ub();y.Tb(0,"mat-form-field"),y.Tb(1,"mat-label"),y.Rc(2,"Date"),y.Sb(),y.Tb(3,"input",36),y.bc("ngModelChange",(function(t){return y.Ec(a),y.fc().fromDate=t})),y.Sb(),y.Ob(4,"mat-datepicker-toggle",37),y.Ob(5,"mat-datepicker",null,38),y.Sb()}if(2&t){var r=y.Ac(6),n=y.fc();y.Cb(3),y.mc("matDatepicker",r)("ngModel",n.fromDate),y.Cb(1),y.mc("for",r)}}function K(t,e){if(1&t){var a=y.Ub();y.Tb(0,"mat-form-field"),y.Tb(1,"mat-label"),y.Rc(2,"Compare Date"),y.Sb(),y.Tb(3,"input",36),y.bc("ngModelChange",(function(t){return y.Ec(a),y.fc().toDate=t})),y.Sb(),y.Ob(4,"mat-datepicker-toggle",37),y.Ob(5,"mat-datepicker",null,39),y.Sb()}if(2&t){var r=y.Ac(6),n=y.fc();y.Cb(3),y.mc("matDatepicker",r)("ngModel",n.toDate),y.Cb(1),y.mc("for",r)}}function Q(t,e){if(1&t){var a=y.Ub();y.Tb(0,"mat-checkbox",40),y.bc("ngModelChange",(function(t){return y.Ec(a),y.fc().blnCompare=t})),y.Rc(1,"Compare"),y.Sb()}if(2&t){var r=y.fc();y.mc("ngModel",r.blnCompare)}}i("Tos5")(m);var J,q,Z,tt=[{path:"",component:(J=function(){function a(t,e,n,o,i,s,l,h){var c,p;r(this,a),this.estidamaChartService=t,this.date=e,this.fb=n,this.masterService=o,this.decimalPipe=i,this.meterReplacementService=s,this.cookieService=l,this.envService=h,this.blnToDate=!1,this.blnToYear=!1,this.blnFromMonth=!1,this.blnToMonth=!1,this.blnFromDate=!1,this.peak="",this.consumption="",this.average="",this.showSpinner=!1,this.Highcharts1=m,this.chartConstructor1="chart",this.barChartOptions={},this.blnCompare=!1,this.meterType="",this.meterTypeId=0,this.lstMeterType=[],this.meterGroup=null,this.lstMeterGroup=[],this.meterId="",this.lstMeterName=[],this.lstFilterMeterName=[],this.reportType=null,this.lstReportType=[],this.fromYear=null,this.lstFromYear=[],this.toYear=null,this.lstToYear=[],this.fromMonth=null,this.fromMonthName="",this.lstFromMonth=[],this.toMonth=null,this.toMonthName="",this.lstToMonth=[],this.fromDate=new Date,this.toDate=new Date,this.selectedMeters=[],this.estidamaChart={},this.clientId="",this.meterGroupList=[],this.dateFormat="",this.roundOffFormat="",this.chartData={},this.dateFormat=null!==(c=Object(b.e)("DateFormat"))&&void 0!==c?c:h.dateFormat,this.roundOffFormat=null!==(p=Object(b.e)("RoundOff"))&&void 0!==p?p:h.roundOffFormat}return o(a,[{key:"ngOnInit",value:function(){this.form=this.fb.group({meters:[""]});var t=this.cookieService.get("filterData");if(t){var e=JSON.parse(t);this.clientId=""==e.strClientId?"0":e.strClientId}this.getMeterTypes(),this.getDeviceGroups()}},{key:"getMeterTypes",value:function(){var t=this;this.lstMeterType=[],this.meterGroupList=[],this.lstMeterGroup=[],this.lstMeterName=[],this.estidamaChartService.getMeterTypes().subscribe((function(e){e&&(t.lstMeterType=e.meterTypeList,t.meterType=t.lstMeterType[0].meterTypeName,t.meterTypeId=t.lstMeterType[0].meterTypeID,t.meterGroupList=e.meterGroupList,t.lstReportType=e.reportTypeList,t.lstReportType.length>0&&(t.reportType=t.lstReportType[0].value),t.lstFromYear=e.fromYearList,t.lstFromYear.length>0&&(t.fromYear=t.lstFromYear[0].value),t.lstToYear=e.toYearList,t.lstToYear.length>0&&(t.toYear=t.lstToYear[0].value),t.lstFromMonth=e.fromWeekList,t.lstFromMonth.length>0&&(t.fromMonth=t.lstFromMonth[0].name),t.lstToMonth=e.toWeekList,t.lstToMonth.length>0&&(t.toMonth=t.lstToMonth[0].name),t.getMeters())}))}},{key:"getDeviceGroups",value:function(){var t=this;this.lstMeterGroup=[],this.masterService.getUserMasterdata(71,0).subscribe((function(e){t.lstMeterGroup=e,t.lstMeterGroup.splice(0,0,{id:0,description:"All"}),t.meterGroup=0,t.getMeters()}))}},{key:"onMeterTypeChange",value:function(t){var e;this.meterType=t,this.meterTypeId=null===(e=this.lstMeterType.find((function(e){return e.meterTypeName===t})))||void 0===e?void 0:e.meterTypeID,this.getMeters()}},{key:"onMeterGroupChange",value:function(t){this.meterGroup=t,this.meterGroup=0,this.getMeters()}},{key:"getMeters",value:function(){var t,e,a=this;this.lstMeterName=[],this.meterId="",this.selectedMeters=[],this.meterReplacementService.getV1DeviceGroupMeterList(null!==(t=this.meterTypeId)&&void 0!==t?t:0,null!==(e=this.meterGroup)&&void 0!==e?e:0,this.clientId).subscribe((function(t){t&&(a.lstMeterName=a.lstFilterMeterName=t)}))}},{key:"onReportTypeChange",value:function(t){"Yearly"==this.reportType&&(this.blnCompare=!1)}},{key:"viewEstidamaChart",value:function(){var t=this;this.showSpinner=!0;var e="",a="";"Hourly"!=this.reportType&&"Daily"!=this.reportType||(e=null==this.fromDate?"":c(this.fromDate).format("YYYY-MM-DD"),a=null==this.toDate?"":c(this.toDate).format("YYYY-MM-DD")),this.lstFromMonth.find((function(e){e.name==t.fromMonth&&(t.fromMonthName=e.value)})),this.lstToMonth.find((function(e){e.name==t.toMonth&&(t.toMonthName=e.value)}));var r={labels:[],datas:[],comparisonDatas:[]};this.barChartOptions=this.setBarChart(r),document.getElementById("echacontainer")&&m.chart("echacontainer",this.barChartOptions);var n=this.selectedMeters.findIndex((function(t){return 0==t}));n>=0&&this.selectedMeters.splice(n,1),this.meterId=this.selectedMeters.join(","),""!=this.meterId&&""!=this.meterType&&null!=this.reportType&&null!=this.fromYear&&(this.estidamaChart.MeterId=this.meterId,this.estidamaChart.GroupId=this.meterGroup.toString(),this.estidamaChart.MeterTypeName=this.meterType,this.estidamaChart.ClientId=this.clientId,this.estidamaChart.ReportType=this.reportType,this.estidamaChart.FromYear=this.fromYear,this.estidamaChart.ToYear=this.toYear,this.estidamaChart.FromDate=e,this.estidamaChart.ToDate=a,this.estidamaChart.FromMonth=this.fromMonth,this.estidamaChart.ToMonth=this.toMonth,this.estidamaChart.BlnCompare=this.blnCompare,this.estidamaChartService.viewEstidamaChart(this.estidamaChart).subscribe({next:function(e){if(e){t.peak=e.peak,t.average=e.average,t.consumption=e.consumption;var a="Estidama Dashboard "+t.reportType;if(e){t.chartData=e;var n=e.graphItemList[0].fromDate,o=e.graphItemList[0].toDate;e.graphItemList&&e.graphItemList.length&&e.graphItemList.forEach((function(t){r.labels.push(t.name),r.datas.push(Number(t.value));var e=t.fromDate,a=t.toDate;n=e<n?e:n,o=a>o?a:o})),e.graphItemComparisonList&&e.graphItemComparisonList.length&&e.graphItemComparisonList.forEach((function(t){r.comparisonDatas.push(Number(t.value))})),a=a+" "+t.date.transform(n,t.dateFormat.toString())+"-"+t.date.transform(o,t.dateFormat.toString())}t.barChartOptions=t.setBarChart(r,t.blnCompare?"line":"column",a,t.chartData.graphItemList[0].benchMark),document.getElementById("echacontainer")&&m.chart("echacontainer",t.barChartOptions),t.showSpinner=!1}else t.showSpinner=!1},error:function(e){t.showSpinner=!1}}))}},{key:"setBarChart",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"column",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Estidama Dashboard",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{lang:{noData:"No data to display"},noData:{style:{fontWeight:"bold",fontSize:"15px"}},chart:{height:325,width:1e3,type:e},credits:{enabled:!1},title:{text:a,style:{fontFamily:"Roboto",fontWeight:10}},subtitle:{text:null},xAxis:{categories:t.labels},yAxis:{min:0,title:{text:"Consumption in KWH",style:{fontSize:"12px",fontFamily:"Roboto"}},plotLines:[{value:r,color:"red",dashStyle:"shortdash",width:2,label:{text:"Bench Mark"}}]},legend:{itemStyle:{color:"#000000",fontWeight:"normal",fontFamily:"Roboto"},layout:"horizontal",align:"center",verticalAlign:"top",x:0,y:0,floating:!1,shadow:!1},tooltip:{formatter:function(){return this.x+": "+this.y}},plotOptions:{column:{pointPadding:.2,borderWidth:0,pointWidth:10}},series:[{name:"Hourly"===this.reportType?this.date.transform(this.fromDate,this.dateFormat.toString()):"Daily"===this.reportType?this.fromMonthName:"Weekly"===this.reportType||"Monthly"===this.reportType?this.fromYear:"Consumption Chart",data:t.datas,type:e,color:"#008ECC"},{name:t.comparisonDatas&&t.comparisonDatas.length?"Hourly"===this.reportType?this.date.transform(this.toDate,this.dateFormat.toString()):"Daily"===this.reportType?this.toMonthName:"Weekly"===this.reportType||"Monthly"===this.reportType?this.toYear:"Consumption Chart":"",data:t.comparisonDatas,type:e,color:t.comparisonDatas&&t.comparisonDatas.length?"#87556f":"#FFFFFF"}]}}},{key:"generarPDF",value:function(){var t=this,e=document.getElementById("echacontainer");f()(e,{background:"white",scale:3}).then((function(e){var a=new Image;a.src=e.toDataURL("image/PNG");var r=new p.default({orientation:"portrait",unit:"pt",format:"letter"}),n=r.getImageProperties(a),o=r.internal.pageSize.getWidth()-10,i=n.height*o/n.width;r.addImage(a,"PNG",5,5,o,i,void 0,"FAST");var s=[],l=[],h=[],c=0,m=0;if("Hourly"===t.reportType){if(s=t.blnCompare?["Date","Compare Date","Hours","Value","Compare Value","BenchMark"]:["Date","Hours","Value","BenchMark"],t.chartData&&t.chartData.graphItemList&&t.chartData.graphItemList.length){for(var u=function(e){if(h.push(t.date.transform(t.fromDate,t.dateFormat.toString())),t.blnCompare&&h.push(t.date.transform(t.toDate,t.dateFormat.toString())),h.push(t.chartData.graphItemList[e].name),h.push(t.chartData.graphItemList[e].value),t.blnCompare&&t.chartData.graphItemComparisonList&&t.chartData.graphItemComparisonList.length){var a=t.chartData.graphItemComparisonList.find((function(a){return a.name===t.chartData.graphItemList[e].name}));a&&h.push(a.value)}h.push(t.chartData.graphItemList[e].benchMark),l.push(h),h=[]},f=0;f<t.chartData.graphItemList.length;f++)u(f);t.chartData.graphItemList.forEach((function(t){c+=Number(t.value)})),t.chartData.graphItemComparisonList.forEach((function(t){m+=Number(t.value)}))}}else if("Daily"===t.reportType){if(s=t.blnCompare?["Date","Compare Month","Month","Value","Compare Value","BenchMark"]:["Date","Month","Value","BenchMark"],t.chartData&&t.chartData.graphItemList&&t.chartData.graphItemList.length){for(var d=function(e){if(h.push(t.date.transform(t.chartData.graphItemList[e].fromDate,t.dateFormat.toString())),t.blnCompare&&t.chartData.graphItemComparisonList&&t.chartData.graphItemComparisonList.length){var a=t.chartData.graphItemComparisonList.find((function(a){return a.name===t.chartData.graphItemList[e].name}));a&&h.push(t.date.transform(a.fromDate,t.dateFormat.toString()))}if(h.push(t.chartData.graphItemList[e].name),h.push(t.chartData.graphItemList[e].value),t.blnCompare&&t.chartData.graphItemComparisonList&&t.chartData.graphItemComparisonList.length){var r=t.chartData.graphItemComparisonList.find((function(a){return a.name===t.chartData.graphItemList[e].name}));r&&h.push(r.value)}h.push(t.chartData.graphItemList[e].benchMark),l.push(h),h=[]},g=0;g<t.chartData.graphItemList.length;g++)d(g);t.chartData.graphItemList.forEach((function(t){c+=Number(t.value)})),t.chartData.graphItemComparisonList.forEach((function(t){m+=Number(t.value)}))}}else if("Weekly"===t.reportType){if(s=t.blnCompare?["Date","Compare Date","Weeks","Value","Compare Value","BenchMark"]:["Date","Weeks","Value","BenchMark"],t.chartData&&t.chartData.graphItemList&&t.chartData.graphItemList.length){for(var b=function(e){var a=t.date.transform(t.chartData.graphItemList[e].fromDate,t.dateFormat.toString()),r=t.date.transform(t.chartData.graphItemList[e].toDate,t.dateFormat.toString());if(h.push(a+" - "+r),t.blnCompare&&t.chartData.graphItemComparisonList&&t.chartData.graphItemComparisonList.length){var n=t.chartData.graphItemComparisonList.find((function(a){return a.name===t.chartData.graphItemList[e].name}));if(n){var o=t.date.transform(n.fromDate,t.dateFormat.toString()),i=t.date.transform(n.toDate,t.dateFormat.toString());h.push(o+" - "+i)}}if(h.push(t.chartData.graphItemList[e].name),h.push(t.chartData.graphItemList[e].value),t.blnCompare&&t.chartData.graphItemComparisonList&&t.chartData.graphItemComparisonList.length){var s=t.chartData.graphItemComparisonList.find((function(a){return a.name===t.chartData.graphItemList[e].name}));s&&h.push(s.value)}h.push(t.chartData.graphItemList[e].benchMark),l.push(h),h=[]},v=0;v<t.chartData.graphItemList.length;v++)b(v);t.chartData.graphItemList.forEach((function(t){c+=Number(t.value)})),t.chartData.graphItemComparisonList.forEach((function(t){m+=Number(t.value)}))}}else if("Monthly"===t.reportType){if(s=t.blnCompare?["Date","Compare Date","Months","Value","Compare Value","BenchMark"]:["Date","Months","Value","BenchMark"],t.chartData&&t.chartData.graphItemList&&t.chartData.graphItemList.length){for(var y=function(e){var a=t.date.transform(t.chartData.graphItemList[e].fromDate,t.dateFormat.toString()),r=t.date.transform(t.chartData.graphItemList[e].toDate,t.dateFormat.toString());if(h.push(a+" - "+r),t.blnCompare&&t.chartData.graphItemComparisonList&&t.chartData.graphItemComparisonList.length){var n=t.chartData.graphItemComparisonList.find((function(a){return a.name===t.chartData.graphItemList[e].name}));if(n){var o=t.date.transform(n.fromDate,t.dateFormat.toString()),i=t.date.transform(n.toDate,t.dateFormat.toString());h.push(o+" - "+i)}}if(h.push(t.chartData.graphItemList[e].name),h.push(t.chartData.graphItemList[e].value),t.blnCompare&&t.chartData.graphItemComparisonList&&t.chartData.graphItemComparisonList.length){var s=t.chartData.graphItemComparisonList.find((function(a){return a.name===t.chartData.graphItemList[e].name}));s&&h.push(s.value)}h.push(t.chartData.graphItemList[e].benchMark),l.push(h),h=[]},C=0;C<t.chartData.graphItemList.length;C++)y(C);t.chartData.graphItemList.forEach((function(t){c+=Number(t.value)})),t.chartData.graphItemComparisonList.forEach((function(t){m+=Number(t.value)}))}}else if(s=["Year","Value","BenchMark"],t.chartData&&t.chartData.graphItemList&&t.chartData.graphItemList.length){for(var M=0;M<t.chartData.graphItemList.length;M++)h.push(t.chartData.graphItemList[M].name),h.push(t.chartData.graphItemList[M].value),h.push(t.chartData.graphItemList[M].benchMark),l.push(h),h=[];t.chartData.graphItemList.forEach((function(t){c+=Number(t.value)}))}return"Yearly"!==t.reportType&&h.push(""),t.blnCompare&&h.push(""),h.push("Total"),h.push(t.decimalPipe.transform(c,t.roundOffFormat.toString()).replace(",","")),t.blnCompare&&h.push(t.decimalPipe.transform(m,t.roundOffFormat.toString()).replace(",","")),h.push(""),l.push(h),r.autoTable(s,l,{startX:50,startY:i+20,didDrawPage:function(t){var e="Page "+t.pageCount;"function"==typeof r.putTotalPages&&r.rect(5,5,r.internal.pageSize.width-10,r.internal.pageSize.height-10,"S"),r.setFontSize(9);var a=r.internal.pageSize.height||r.internal.pageSize.getHeight();r.text(e,t.settings.margin.left,a-10)},styles:{overflow:"linebreak",cellWidth:"wrap",fontSize:9,cellPadding:6,overflowColumns:"linebreak",lineColor:[0,0,0]},margin:{left:50},theme:"grid",tableWidth:"auto",cellWidth:"wrap",columnStyles:{0:{cellWidth:t.blnCompare?110:150,halign:"center"},1:{cellWidth:t.blnCompare?110:120,halign:"center"},2:{cellWidth:t.blnCompare?65:120,halign:"center"},3:{cellWidth:t.blnCompare?65:120,halign:"center"},4:{cellWidth:80,halign:"center"},5:{cellWidth:80,halign:"center"}},headStyles:{lineWidth:.1,lineColor:[0,0,0],halign:"center",fillColor:[25,118,210]}}),r})).then((function(t){t.save("Estidama Chart.pdf")}))}},{key:"search",value:function(t){var e=this.select(t);this.lstMeterName=e}},{key:"select",value:function(t){var a=[];if(t){var r,n=function(t,a){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=e(t))||a&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return s=t.done,t},e:function(t){l=!0,i=t},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw i}}}}(this.lstFilterMeterName);try{for(n.s();!(r=n.n()).done;){var o=r.value;o.deviceName.toLowerCase().indexOf(t)>-1&&a.push(o)}}catch(i){n.e(i)}finally{n.f()}}else a=this.lstFilterMeterName;return a}},{key:"toggleMetersAllSelection",value:function(){this.form.controls.meters.patchValue(this.allMetersSelected.selected?[].concat(t(this.lstMeterName.map((function(t){return t.id}))),[0]):[])}},{key:"toggleMeterPerOne",value:function(t){if(this.allMetersSelected.selected)return this.allMetersSelected.deselect(),!1;this.form.controls.meters.value.length==this.lstMeterName.length&&this.allMetersSelected.select()}}]),a}(),J.\u0275fac=function(t){return new(t||J)(y.Nb(h.a),y.Nb(s.f),y.Nb(C.f),y.Nb(d.a),y.Nb(s.g),y.Nb(g.a),y.Nb(M.a),y.Nb(v.a))},J.\u0275cmp=y.Hb({type:J,selectors:[["fury-estidama-chart"]],viewQuery:function(t,e){var a;1&t&&y.Vc(G,!0),2&t&&y.zc(a=y.cc())&&(e.allMetersSelected=a.first)},decls:64,vars:23,consts:[["fxLayout","column",2,"padding","27px"],["class","loading-indicator",4,"ngIf"],["color","primary",1,"position-fixed"],["src","assets/img/fav-icon.png",1,"img-style",3,"fxHide.xs"],["fxLayout","row","fxLayout.xs","column"],["fxLayout","column","fxLayoutGap","2%"],["fxLayout","row","fxLayout.xs","column","fxLayoutGap","2%"],["name","meterType","id","meterTypeId","placeholder","Meter Type",3,"ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["fxFlex",""],["name","meterGroup","id","meterGroupId","placeholder","Meter Group",3,"ngModel","ngModelChange","selectionChange"],["multiple","","placeholder","Select a Meter",1,"multiSelectCustom",3,"ngModel","formControl","ngModelChange"],["matInput","","focused","'true'","type","text","autocomplete","off","placeholder","search",1,"myInput",3,"keyup"],["myInput",""],[3,"value","click"],["allMetersSelected",""],[3,"value","click",4,"ngFor","ngForOf"],["name","reportType","id","reportTypeId","placeholder","Report Type",3,"ngModel","ngModelChange","selectionChange"],["name","fromYear","id","fromYearId","placeholder","FromYear",3,"ngModel","ngModelChange"],[4,"ngIf"],[3,"ngModel","ngModelChange",4,"ngIf"],["color","primary","mat-raised-button","",1,"common-buttons",3,"click"],["fxLayout","row","fxLayoutGap","10%"],["fxLayoutGap","75px","fxFlexLayout","column",1,"mat-elevation-z4","card-height","consumption"],[1,"consumption-icon"],["fxLayoutGap","75px","fxFlexLayout","column",1,"mat-elevation-z4","card-height","average"],[1,"average-icon"],["fxLayoutGap","35px","fxFlexLayout","column",1,"mat-elevation-z4","card-height","peak"],[1,"peak-icon"],["id","echacontainer"],[1,"loading-indicator"],["mode","indeterminate","color","accent"],[3,"value"],["name","toYear","id","toYearId","placeholder","To Year",3,"ngModel","ngModelChange"],["name","fromMonth","id","fromMonthId","placeholder","From Month",3,"ngModel","ngModelChange"],["name","toMonth","id","toMonthId","placeholder","To Month",3,"ngModel","ngModelChange"],["matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],["fromDat",""],["toDat",""],[3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(y.Tb(0,"div",0),y.Pc(1,R,2,0,"div",1),y.Tb(2,"mat-toolbar",2),y.Ob(3,"img",3),y.Tb(4,"span",4),y.Rc(5,"Energy Report"),y.Sb(),y.Sb(),y.Tb(6,"mat-card",5),y.Tb(7,"div",6),y.Tb(8,"mat-form-field"),y.Tb(9,"mat-select",7),y.bc("ngModelChange",(function(t){return e.meterType=t}))("selectionChange",(function(t){return e.onMeterTypeChange(t.value)})),y.Pc(10,E,2,2,"mat-option",8),y.Sb(),y.Sb(),y.Tb(11,"mat-form-field",9),y.Tb(12,"mat-select",10),y.bc("ngModelChange",(function(t){return e.meterGroup=t}))("selectionChange",(function(t){return e.onMeterGroupChange(t.value)})),y.Pc(13,U,2,2,"mat-option",8),y.Sb(),y.Sb(),y.Tb(14,"mat-form-field",9),y.Tb(15,"mat-select",11),y.bc("ngModelChange",(function(t){return e.selectedMeters=t})),y.Tb(16,"input",12,13),y.bc("keyup",(function(t){return e.search(t.target.value)})),y.Sb(),y.Ob(18,"mat-divider"),y.Tb(19,"mat-option",14,15),y.bc("click",(function(){return e.toggleMetersAllSelection()})),y.Rc(21,"Select All"),y.Sb(),y.Pc(22,W,2,2,"mat-option",16),y.Sb(),y.Sb(),y.Tb(23,"mat-form-field",9),y.Tb(24,"mat-select",17),y.bc("ngModelChange",(function(t){return e.reportType=t}))("selectionChange",(function(t){return e.onReportTypeChange(t.value)})),y.Pc(25,A,2,2,"mat-option",8),y.Sb(),y.Sb(),y.Tb(26,"mat-form-field",9),y.Tb(27,"mat-select",18),y.bc("ngModelChange",(function(t){return e.fromYear=t})),y.Pc(28,z,2,2,"mat-option",8),y.Sb(),y.Sb(),y.Sb(),y.Tb(29,"div",6),y.Pc(30,V,3,2,"mat-form-field",19),y.Pc(31,H,3,2,"mat-form-field",19),y.Pc(32,X,3,2,"mat-form-field",19),y.Pc(33,$,7,3,"mat-form-field",19),y.Pc(34,K,7,3,"mat-form-field",19),y.Pc(35,Q,2,1,"mat-checkbox",20),y.Tb(36,"button",21),y.bc("click",(function(){return e.viewEstidamaChart()})),y.Rc(37," APPLY "),y.Sb(),y.Tb(38,"button",21),y.bc("click",(function(){return e.generarPDF()})),y.Rc(39," PRINT "),y.Sb(),y.Sb(),y.Sb(),y.Tb(40,"mat-card",22),y.Tb(41,"mat-card",23),y.Tb(42,"mat-icon",24),y.Rc(43,"pages"),y.Sb(),y.Tb(44,"h3",9),y.Rc(45," Consumption "),y.Tb(46,"b"),y.Rc(47),y.Sb(),y.Sb(),y.Sb(),y.Tb(48,"mat-card",25),y.Tb(49,"mat-icon",26),y.Rc(50,"pages"),y.Sb(),y.Tb(51,"h3",9),y.Rc(52," Average "),y.Tb(53,"b"),y.Rc(54),y.Sb(),y.Sb(),y.Sb(),y.Tb(55,"mat-card",27),y.Tb(56,"mat-icon",28),y.Rc(57,"pages"),y.Sb(),y.Tb(58,"h3",9),y.Rc(59," Peak "),y.Tb(60,"b"),y.Rc(61),y.Sb(),y.Sb(),y.Sb(),y.Sb(),y.Tb(62,"mat-card",22),y.Ob(63,"div",29),y.Sb(),y.Sb()),2&t&&(y.Cb(1),y.mc("ngIf",e.showSpinner),y.Cb(2),y.mc("fxHide.xs",!0),y.Cb(6),y.mc("ngModel",e.meterType),y.Cb(1),y.mc("ngForOf",e.lstMeterType),y.Cb(2),y.mc("ngModel",e.meterGroup),y.Cb(1),y.mc("ngForOf",e.lstMeterGroup),y.Cb(2),y.mc("ngModel",e.selectedMeters)("formControl",e.form.controls.meters),y.Cb(4),y.mc("value",0),y.Cb(3),y.mc("ngForOf",e.lstMeterName),y.Cb(2),y.mc("ngModel",e.reportType),y.Cb(1),y.mc("ngForOf",e.lstReportType),y.Cb(2),y.mc("ngModel",e.fromYear),y.Cb(1),y.mc("ngForOf",e.lstFromYear),y.Cb(2),y.mc("ngIf",("Weekly"==e.reportType||"Monthly"==e.reportType)&&e.blnCompare),y.Cb(1),y.mc("ngIf","Daily"==e.reportType),y.Cb(1),y.mc("ngIf","Daily"==e.reportType&&e.blnCompare),y.Cb(1),y.mc("ngIf","Hourly"==e.reportType),y.Cb(1),y.mc("ngIf","Hourly"==e.reportType&&e.blnCompare),y.Cb(1),y.mc("ngIf","Yearly"!=e.reportType),y.Cb(12),y.Tc(" ",e.consumption,""),y.Cb(7),y.Sc(e.average),y.Cb(7),y.Sc(e.peak))},directives:[D.d,s.o,T.a,I.b,S.a,D.e,L.d,k.a,C.q,C.t,s.n,D.b,C.h,x.b,F.a,w.n,N.a,O.a,L.h,P.b,C.c,P.d,L.j,P.a,Y.a],styles:['.heading[_ngcontent-%COMP%]{background:#1976d2;font-size:17px;height:0}.img-style[_ngcontent-%COMP%]{width:32px}.common-buttons[_ngcontent-%COMP%]{height:50%}.mat-card[class*=mat-elevation-z].consumption[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px #ff4500,0 1px 1px 0 #ff4500,0 1px 3px 0 #ff4500}.mat-card[class*=mat-elevation-z].average[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px #2bbb18,0 1px 1px 0 #2bbb18,0 1px 3px 0 #2bbb18}.mat-card[class*=mat-elevation-z].peak[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px red,0 1px 1px 0 red,0 1px 3px 0 red}.card-height[_ngcontent-%COMP%]{min-width:26%}.consumption-icon[_ngcontent-%COMP%]{background-color:#ff4500;color:#fff}.average-icon[_ngcontent-%COMP%]{background-color:#2bbb18;color:#fff}.peak-icon[_ngcontent-%COMP%]{background-color:red;color:#fff}.myInput[_ngcontent-%COMP%]{height:50px!important;padding:10px!important}.position-fixed[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;top:0;z-index:5}.loading-indicator[_ngcontent-%COMP%]{position:fixed;z-index:999;height:2em;width:2em;overflow:show;margin:auto;top:0;left:0;bottom:0;right:0}.loading-indicator[_ngcontent-%COMP%]:before{content:"";display:block;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.3)}']}),J)}],et=((q=function t(){r(this,t)}).\u0275mod=y.Lb({type:q}),q.\u0275inj=y.Kb({factory:function(t){return new(t||q)},imports:[[l.j.forChild(tt)],l.j]}),q),at=i("YUcS"),rt=((Z=function t(){r(this,t)}).\u0275mod=y.Lb({type:Z}),Z.\u0275inj=y.Kb({factory:function(t){return new(t||Z)},providers:[s.f,s.g],imports:[[s.c,et,C.l,C.w,at.a,N.b,x.c,L.f,k.b,w.o,T.b,S.g,Y.b,P.c,O.b,F.b]]}),Z)},Tos5:function(t,e,a){var r,n,o;o=function(t){function e(t,e,a,r){t.hasOwnProperty(e)||(t[e]=r.apply(null,a))}e(t=t?t._modules:{},"Extensions/NoDataToDisplay.js",[t["Core/Chart/Chart.js"],t["Core/Utilities.js"]],(function(t,e){var a=e.addEvent,r=e.extend,n=e.getOptions;e=t.prototype,n=n(),r(n.lang,{noData:"No data to display"}),n.noData={attr:{zIndex:1},position:{x:0,y:0,align:"center",verticalAlign:"middle"},style:{fontWeight:"bold",fontSize:"12px",color:"#666666"}},e.showNoData=function(t){var e=this.options;t=t||e&&e.lang.noData,e=e&&(e.noData||{}),this.renderer&&(this.noDataLabel||(this.noDataLabel=this.renderer.label(t,0,0,void 0,void 0,void 0,e.useHTML,void 0,"no-data").add()),this.styledMode||this.noDataLabel.attr(e.attr).css(e.style||{}),this.noDataLabel.align(r(this.noDataLabel.getBBox(),e.position||{}),!1,"plotBox"))},e.hideNoData=function(){this.noDataLabel&&(this.noDataLabel=this.noDataLabel.destroy())},e.hasData=function(){for(var t=this.series||[],e=t.length;e--;)if(t[e].hasData()&&!t[e].options.isInternal)return!0;return this.loadingShown},a(t,"render",(function(){this.hasData()?this.hideNoData():this.showNoData()}))})),e(t,"masters/modules/no-data-to-display.src.js",[],(function(){}))},t.exports?(o.default=o,t.exports=o):(r=[a("6n/F")],void 0===(n=(function(t){return o(t),o.Highcharts=t,o}).apply(e,r))||(t.exports=n))},WFQN:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=a("tk/3"),i=a("sXtk"),s=a("fXoL"),l=function(){var t=function(){function t(e,a){r(this,t),this.http=e,this.envService=a,this.baseUrl="",this.baseUrl=a.backend}return o(t,[{key:"getReplacedMeters",value:function(t){return this.http.get(this.baseUrl+"/devicelistreplacements/clientId/"+t)}},{key:"createMeterReplacement",value:function(t){return this.http.post(this.baseUrl+"/devicelistreplacements/",t)}},{key:"GetUtilityTypes",value:function(t){var e=new n.f;return e=e.append("clientId",""+t),this.http.get(this.baseUrl+"/devicelistreplacements/UtilityTypes",{params:e})}},{key:"getAllUnits",value:function(t,e){var a=new n.f;return a=(a=a.append("clientId",""+t)).append("utilityTypeId",""+e),this.http.get(this.baseUrl+"/devicelistreplacements/Units",{params:a})}},{key:"GetActiveDevices",value:function(t,e){var a=new n.f;return a=(a=a.append("clientId",""+t)).append("utilityTypeId",""+e),this.http.get(this.baseUrl+"/devicelistreplacements/ActiveDevices",{params:a})}},{key:"getMeterErrorDetails",value:function(t){return this.http.post(this.baseUrl+"/devicelistreplacements/MeterError",t)}},{key:"GetParametersList",value:function(){return this.http.get(this.baseUrl+"/devicelistreplacements/Parameters")}},{key:"getDeviceDataDetails",value:function(t){return this.http.post(this.baseUrl+"/devicelistreplacements/DeviceData",t)}},{key:"GetMeterList",value:function(t){var e=new n.f;return e=e.append("clientId",""+t),this.http.get(this.baseUrl+"/devicelistreplacements/MeterList",{params:e})}},{key:"getDeviceGroupMeterList",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",r=new n.f;return r=(r=(r=r.append("meterTypeId",""+t)).append("groupId",""+e)).append("clientId",""+a),this.http.get(this.baseUrl+"/devicelistreplacements/type/group/meterList",{params:r})}},{key:"getV1DeviceGroupMeterList",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",r=new n.f;return r=(r=(r=r.append("meterTypeId",""+t)).append("groupId",""+e)).append("clientId",""+a),this.http.get(this.baseUrl+"/devicelistreplacements/v1/type/group/meterListFilterByClient",{params:r})}},{key:"getV1DeviceGroupMeterListWithoutFlowTypeFilter",value:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0",r=new n.f;return r=(r=(r=r.append("meterTypeId",""+t)).append("groupId",""+e)).append("clientId",""+a),this.http.get(this.baseUrl+"/devicelistreplacements/V1/type/group/meterListFilterByClientWithoutFlowTypeFilter",{params:r})}},{key:"getV1MeterList",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new n.f;return e=e.append("clientId",""+t),this.http.get(this.baseUrl+"/devicelistreplacements/v1/meterListFilterByClient",{params:e})}},{key:"getClients",value:function(){return this.http.get(this.baseUrl+"/devicelistreplacements/v1/clients")}},{key:"getV1MeterGroupList",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new n.f;return e=e.append("meterTypeId",""+t),this.http.get(this.baseUrl+"/devicelistreplacements/v1/meterGroups",{params:e})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s.Xb(n.c),s.Xb(i.a))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();