(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{BLLs:function(t,e,o){"use strict";o.r(e),o.d(e,"SummaryChartModule",(function(){return _}));var n=o("ofXK"),a=o("tyNb"),c=o("a8hA"),i=o("tk/3"),r=o("sXtk"),b=o("fXoL");let s=(()=>{class t{constructor(t,e){this.http=t,this.envService=e,this.baseUrl="",this.baseUrl=e.backend}getTypes(){return this.http.get(this.baseUrl+"/dashboardchart/Summary/GateWayTypeData")}getPageContent(t){let e=new i.f;return e=e.append("GateWayType",""+t),this.http.get(this.baseUrl+"/dashboardchart/ViewSummary",{params:e})}}return t.\u0275fac=function(e){return new(e||t)(b.Xb(i.c),b.Xb(r.a))},t.\u0275prov=b.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=o("XiUz"),d=o("/t3+"),p=o("Wp6s"),m=o("bTqV"),h=o("NFeN"),u=o("7EHt");function g(t,e){1&t&&(b.Tb(0,"div",8),b.Ob(1,"mat-progress-spinner",9),b.Sb())}function f(t,e){if(1&t&&(b.Tb(0,"div",10),b.Tb(1,"mat-card",11),b.Tb(2,"button",12),b.Tb(3,"mat-icon",13),b.Rc(4,"computer"),b.Sb(),b.Sb(),b.Tb(5,"h3",14),b.Rc(6," Total Nodes "),b.Tb(7,"b"),b.Rc(8),b.Sb(),b.Sb(),b.Sb(),b.Tb(9,"mat-card",11),b.Tb(10,"button",15),b.Tb(11,"mat-icon",13),b.Rc(12,"location_on"),b.Sb(),b.Sb(),b.Tb(13,"h3",14),b.Rc(14," Total Location "),b.Tb(15,"b"),b.Rc(16),b.Sb(),b.Sb(),b.Sb(),b.Tb(17,"mat-card",16),b.Tb(18,"button",17),b.Tb(19,"mat-icon",13),b.Rc(20,"location_city"),b.Sb(),b.Sb(),b.Tb(21,"h3",14),b.Rc(22," Total Sub Location "),b.Tb(23,"b"),b.Rc(24),b.Sb(),b.Sb(),b.Sb(),b.Tb(25,"mat-card",11),b.Tb(26,"button",18),b.Tb(27,"mat-icon",13),b.Rc(28,"network_wifi"),b.Sb(),b.Sb(),b.Tb(29,"h3",14),b.Rc(30," Total Gateway "),b.Tb(31,"b"),b.Rc(32),b.Sb(),b.Sb(),b.Sb(),b.Sb()),2&t){const t=b.fc();b.Cb(8),b.Sc(t.lstMeter.totalNodes),b.Cb(8),b.Sc(t.lstMeter.totalLocation),b.Cb(8),b.Sc(t.lstMeter.totalSubLocation),b.Cb(8),b.Sc(t.lstMeter.totalGateWay)}}function S(t,e){1&t&&(b.Tb(0,"label"),b.Rc(1,"-------"),b.Sb())}function T(t,e){if(1&t&&(b.Tb(0,"tr"),b.Tb(1,"td",23),b.Rc(2),b.Sb(),b.Tb(3,"td",23),b.Rc(4),b.Sb(),b.Tb(5,"td",23),b.Rc(6),b.Sb(),b.Sb()),2&t){const t=e.$implicit;b.Cb(2),b.Sc(t.meterName),b.Cb(2),b.Sc(t.modelName),b.Cb(2),b.Sc(t.meterTypeName)}}function y(t,e){if(1&t&&(b.Tb(0,"mat-expansion-panel",21),b.Tb(1,"mat-expansion-panel-header"),b.Tb(2,"mat-panel-title"),b.Tb(3,"h5"),b.Tb(4,"b"),b.Tb(5,"label"),b.Rc(6),b.Sb(),b.Pc(7,S,2,0,"label",22),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(8,"table"),b.Tb(9,"thead"),b.Tb(10,"th",23),b.Rc(11,"Meter Name"),b.Sb(),b.Tb(12,"th",23),b.Rc(13,"Model Name"),b.Sb(),b.Tb(14,"th",23),b.Rc(15,"Meter Type Name"),b.Sb(),b.Sb(),b.Tb(16,"tbody"),b.Pc(17,T,7,3,"tr",24),b.Sb(),b.Sb(),b.Sb()),2&t){const t=e.$implicit;b.Cb(6),b.Tc(" ",t.groupName," "),b.Cb(1),b.mc("ngIf",!t.groupName),b.Cb(10),b.mc("ngForOf",t.meterSummaryDetails)}}function x(t,e){if(1&t&&(b.Tb(0,"div",19),b.Tb(1,"mat-accordion"),b.Pc(2,y,18,3,"mat-expansion-panel",20),b.Sb(),b.Sb()),2&t){const t=b.fc();b.Cb(2),b.mc("ngForOf",t.lstMeter.meterGroupList)}}function C(t,e){1&t&&(b.Tb(0,"mat-card",25),b.Tb(1,"label"),b.Tb(2,"b"),b.Rc(3," No Data Found "),b.Sb(),b.Sb(),b.Sb())}const w=[{path:"",component:(()=>{class t{constructor(t,e){this.summaryChartService=t,this.clientSelectionService=e,this.type="",this.showSpinner=!1,this.lstMeter={}}ngOnInit(){this.clientSelectionService.setIsClientVisible(!1),this.getTypes(),this.showSpinner=!1}getTypes(){this.showSpinner=!0,this.summaryChartService.getTypes().subscribe({next:t=>{t&&(this.lstType=t.gateWayTypeList,this.type=this.lstType[0].name,this.onTypeChange(this.type),this.showSpinner=!1)},error:t=>{this.showSpinner=!1}})}onTypeChange(t){this.summaryChartService.getPageContent(this.type).subscribe(t=>{this.lstMeter=t||{}})}}return t.\u0275fac=function(e){return new(e||t)(b.Nb(s),b.Nb(c.a))},t.\u0275cmp=b.Hb({type:t,selectors:[["fury-summary-chart"]],decls:10,vars:4,consts:[["fxLayout","column wrap","fxLayoutGap","7px",2,"padding","27px 27px 27px 27px"],["class","loading-indicator",4,"ngIf"],["color","primary",1,"position-fixed"],["src","assets/img/fav-icon.png",1,"img-style"],[1,"toolbar-spacer"],["fxLayout","row","fxLayoutGap","10px",4,"ngIf"],["class","scrollit",4,"ngIf"],["fxFlex","","class","text-align",4,"ngIf"],[1,"loading-indicator"],["mode","indeterminate","color","accent"],["fxLayout","row","fxLayoutGap","10px"],["fxLayoutGap","75px","fxFlexLayout","column",1,"mat-elevation-z4","card-height"],["mat-raised-button","","fxFlex","",1,"true-button","node-color"],[1,"icon-color"],["fxFlex",""],["mat-raised-button","","fxFlex","",1,"true-button","location-color"],["fxLayoutGap","35px","fxFlexLayout","column",1,"mat-elevation-z4","card-height"],["mat-raised-button","","fxFlex","",1,"true-button","gateway-color"],["mat-raised-button","","fxFlex","",1,"true-button","sub-location-color"],[1,"scrollit"],["id","divId","class","child-2",4,"ngFor","ngForOf"],["id","divId",1,"child-2"],[4,"ngIf"],[1,"column-width"],[4,"ngFor","ngForOf"],["fxFlex","",1,"text-align"]],template:function(t,e){1&t&&(b.Tb(0,"div",0),b.Pc(1,g,2,0,"div",1),b.Tb(2,"mat-toolbar",2),b.Ob(3,"img",3),b.Tb(4,"span"),b.Rc(5,"Meter Summary"),b.Sb(),b.Ob(6,"span",4),b.Sb(),b.Pc(7,f,33,4,"div",5),b.Pc(8,x,3,1,"div",6),b.Pc(9,C,4,0,"mat-card",7),b.Sb()),2&t&&(b.Cb(1),b.mc("ngIf",e.showSpinner),b.Cb(6),b.mc("ngIf",e.lstMeter),b.Cb(1),b.mc("ngIf",e.lstMeter),b.Cb(1),b.mc("ngIf",!e.lstMeter))},directives:[l.d,l.e,n.o,d.a,p.a,m.a,l.b,h.a,u.a,n.n,u.c,u.d,u.e],styles:['.scrollit[_ngcontent-%COMP%]{overflow:scroll;height:570px}#divId[_ngcontent-%COMP%]:hover{background-color:#ddd}.img-style[_ngcontent-%COMP%]{width:32px}.flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.true-button[_ngcontent-%COMP%]{max-width:10%!important;max-height:50%;align-items:flex-start}.card-height[_ngcontent-%COMP%]{height:50%}.node-color[_ngcontent-%COMP%]{background-color:orange}.location-color[_ngcontent-%COMP%]{background-color:green}.gateway-color[_ngcontent-%COMP%]{background-color:orchid}.sub-location-color[_ngcontent-%COMP%]{background-color:#4169e1}.icon-color[_ngcontent-%COMP%]{color:#fff}.align-text[_ngcontent-%COMP%]{align-items:flex-end}.column-width[_ngcontent-%COMP%]{min-width:200px;text-align:center}.position-fixed[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;top:0;z-index:5}.loading-indicator[_ngcontent-%COMP%]{position:fixed;z-index:999;height:2em;width:2em;overflow:show;margin:auto;top:0;left:0;bottom:0;right:0}.loading-indicator[_ngcontent-%COMP%]:before{content:"";display:block;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.3)}']}),t})()}];let M=(()=>{class t{}return t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({factory:function(e){return new(e||t)},imports:[[a.j.forChild(w)],a.j]}),t})();var v=o("d3UM"),P=o("FKr1"),O=o("3Pt+"),R=o("YUcS"),L=o("kmnG");let _=(()=>{class t{}return t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({factory:function(e){return new(e||t)},imports:[[n.c,M,v.b,P.o,p.g,d.b,h.b,O.l,O.w,R.a,L.f,u.b,m.b]]}),t})()}}]);