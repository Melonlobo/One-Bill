!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function n(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{BLLs:function(e,o,a){"use strict";a.r(o),a.d(o,"SummaryChartModule",(function(){return U}));var i,c=a("ofXK"),r=a("tyNb"),b=a("a8hA"),l=a("tk/3"),s=a("sXtk"),u=a("fXoL"),f=((i=function(){function e(n,o){t(this,e),this.http=n,this.envService=o,this.baseUrl="",this.baseUrl=o.backend}return n(e,[{key:"getTypes",value:function(){return this.http.get(this.baseUrl+"/dashboardchart/Summary/GateWayTypeData")}},{key:"getPageContent",value:function(t){var e=new l.f;return e=e.append("GateWayType",""+t),this.http.get(this.baseUrl+"/dashboardchart/ViewSummary",{params:e})}}]),e}()).\u0275fac=function(t){return new(t||i)(u.Xb(l.c),u.Xb(s.a))},i.\u0275prov=u.Jb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),d=a("XiUz"),p=a("/t3+"),m=a("Wp6s"),h=a("bTqV"),g=a("NFeN"),S=a("7EHt");function y(t,e){1&t&&(u.Tb(0,"div",8),u.Ob(1,"mat-progress-spinner",9),u.Sb())}function T(t,e){if(1&t&&(u.Tb(0,"div",10),u.Tb(1,"mat-card",11),u.Tb(2,"button",12),u.Tb(3,"mat-icon",13),u.Rc(4,"computer"),u.Sb(),u.Sb(),u.Tb(5,"h3",14),u.Rc(6," Total Nodes "),u.Tb(7,"b"),u.Rc(8),u.Sb(),u.Sb(),u.Sb(),u.Tb(9,"mat-card",11),u.Tb(10,"button",15),u.Tb(11,"mat-icon",13),u.Rc(12,"location_on"),u.Sb(),u.Sb(),u.Tb(13,"h3",14),u.Rc(14," Total Location "),u.Tb(15,"b"),u.Rc(16),u.Sb(),u.Sb(),u.Sb(),u.Tb(17,"mat-card",16),u.Tb(18,"button",17),u.Tb(19,"mat-icon",13),u.Rc(20,"location_city"),u.Sb(),u.Sb(),u.Tb(21,"h3",14),u.Rc(22," Total Sub Location "),u.Tb(23,"b"),u.Rc(24),u.Sb(),u.Sb(),u.Sb(),u.Tb(25,"mat-card",11),u.Tb(26,"button",18),u.Tb(27,"mat-icon",13),u.Rc(28,"network_wifi"),u.Sb(),u.Sb(),u.Tb(29,"h3",14),u.Rc(30," Total Gateway "),u.Tb(31,"b"),u.Rc(32),u.Sb(),u.Sb(),u.Sb(),u.Sb()),2&t){var n=u.fc();u.Cb(8),u.Sc(n.lstMeter.totalNodes),u.Cb(8),u.Sc(n.lstMeter.totalLocation),u.Cb(8),u.Sc(n.lstMeter.totalSubLocation),u.Cb(8),u.Sc(n.lstMeter.totalGateWay)}}function x(t,e){1&t&&(u.Tb(0,"label"),u.Rc(1,"-------"),u.Sb())}function v(t,e){if(1&t&&(u.Tb(0,"tr"),u.Tb(1,"td",23),u.Rc(2),u.Sb(),u.Tb(3,"td",23),u.Rc(4),u.Sb(),u.Tb(5,"td",23),u.Rc(6),u.Sb(),u.Sb()),2&t){var n=e.$implicit;u.Cb(2),u.Sc(n.meterName),u.Cb(2),u.Sc(n.modelName),u.Cb(2),u.Sc(n.meterTypeName)}}function w(t,e){if(1&t&&(u.Tb(0,"mat-expansion-panel",21),u.Tb(1,"mat-expansion-panel-header"),u.Tb(2,"mat-panel-title"),u.Tb(3,"h5"),u.Tb(4,"b"),u.Tb(5,"label"),u.Rc(6),u.Sb(),u.Pc(7,x,2,0,"label",22),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(8,"table"),u.Tb(9,"thead"),u.Tb(10,"th",23),u.Rc(11,"Meter Name"),u.Sb(),u.Tb(12,"th",23),u.Rc(13,"Model Name"),u.Sb(),u.Tb(14,"th",23),u.Rc(15,"Meter Type Name"),u.Sb(),u.Sb(),u.Tb(16,"tbody"),u.Pc(17,v,7,3,"tr",24),u.Sb(),u.Sb(),u.Sb()),2&t){var n=e.$implicit;u.Cb(6),u.Tc(" ",n.groupName," "),u.Cb(1),u.mc("ngIf",!n.groupName),u.Cb(10),u.mc("ngForOf",n.meterSummaryDetails)}}function C(t,e){if(1&t&&(u.Tb(0,"div",19),u.Tb(1,"mat-accordion"),u.Pc(2,w,18,3,"mat-expansion-panel",20),u.Sb(),u.Sb()),2&t){var n=u.fc();u.Cb(2),u.mc("ngForOf",n.lstMeter.meterGroupList)}}function M(t,e){1&t&&(u.Tb(0,"mat-card",25),u.Tb(1,"label"),u.Tb(2,"b"),u.Rc(3," No Data Found "),u.Sb(),u.Sb(),u.Sb())}var P,O,k,R=[{path:"",component:(P=function(){function e(n,o){t(this,e),this.summaryChartService=n,this.clientSelectionService=o,this.type="",this.showSpinner=!1,this.lstMeter={}}return n(e,[{key:"ngOnInit",value:function(){this.clientSelectionService.setIsClientVisible(!1),this.getTypes(),this.showSpinner=!1}},{key:"getTypes",value:function(){var t=this;this.showSpinner=!0,this.summaryChartService.getTypes().subscribe({next:function(e){e&&(t.lstType=e.gateWayTypeList,t.type=t.lstType[0].name,t.onTypeChange(t.type),t.showSpinner=!1)},error:function(e){t.showSpinner=!1}})}},{key:"onTypeChange",value:function(t){var e=this;this.summaryChartService.getPageContent(this.type).subscribe((function(t){e.lstMeter=t||{}}))}}]),e}(),P.\u0275fac=function(t){return new(t||P)(u.Nb(f),u.Nb(b.a))},P.\u0275cmp=u.Hb({type:P,selectors:[["fury-summary-chart"]],decls:10,vars:4,consts:[["fxLayout","column wrap","fxLayoutGap","7px",2,"padding","27px 27px 27px 27px"],["class","loading-indicator",4,"ngIf"],["color","primary",1,"position-fixed"],["src","assets/img/fav-icon.png",1,"img-style"],[1,"toolbar-spacer"],["fxLayout","row","fxLayoutGap","10px",4,"ngIf"],["class","scrollit",4,"ngIf"],["fxFlex","","class","text-align",4,"ngIf"],[1,"loading-indicator"],["mode","indeterminate","color","accent"],["fxLayout","row","fxLayoutGap","10px"],["fxLayoutGap","75px","fxFlexLayout","column",1,"mat-elevation-z4","card-height"],["mat-raised-button","","fxFlex","",1,"true-button","node-color"],[1,"icon-color"],["fxFlex",""],["mat-raised-button","","fxFlex","",1,"true-button","location-color"],["fxLayoutGap","35px","fxFlexLayout","column",1,"mat-elevation-z4","card-height"],["mat-raised-button","","fxFlex","",1,"true-button","gateway-color"],["mat-raised-button","","fxFlex","",1,"true-button","sub-location-color"],[1,"scrollit"],["id","divId","class","child-2",4,"ngFor","ngForOf"],["id","divId",1,"child-2"],[4,"ngIf"],[1,"column-width"],[4,"ngFor","ngForOf"],["fxFlex","",1,"text-align"]],template:function(t,e){1&t&&(u.Tb(0,"div",0),u.Pc(1,y,2,0,"div",1),u.Tb(2,"mat-toolbar",2),u.Ob(3,"img",3),u.Tb(4,"span"),u.Rc(5,"Meter Summary"),u.Sb(),u.Ob(6,"span",4),u.Sb(),u.Pc(7,T,33,4,"div",5),u.Pc(8,C,3,1,"div",6),u.Pc(9,M,4,0,"mat-card",7),u.Sb()),2&t&&(u.Cb(1),u.mc("ngIf",e.showSpinner),u.Cb(6),u.mc("ngIf",e.lstMeter),u.Cb(1),u.mc("ngIf",e.lstMeter),u.Cb(1),u.mc("ngIf",!e.lstMeter))},directives:[d.d,d.e,c.o,p.a,m.a,h.a,d.b,g.a,S.a,c.n,S.c,S.d,S.e],styles:['.scrollit[_ngcontent-%COMP%]{overflow:scroll;height:570px}#divId[_ngcontent-%COMP%]:hover{background-color:#ddd}.img-style[_ngcontent-%COMP%]{width:32px}.flex-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.true-button[_ngcontent-%COMP%]{max-width:10%!important;max-height:50%;align-items:flex-start}.card-height[_ngcontent-%COMP%]{height:50%}.node-color[_ngcontent-%COMP%]{background-color:orange}.location-color[_ngcontent-%COMP%]{background-color:green}.gateway-color[_ngcontent-%COMP%]{background-color:orchid}.sub-location-color[_ngcontent-%COMP%]{background-color:#4169e1}.icon-color[_ngcontent-%COMP%]{color:#fff}.align-text[_ngcontent-%COMP%]{align-items:flex-end}.column-width[_ngcontent-%COMP%]{min-width:200px;text-align:center}.position-fixed[_ngcontent-%COMP%]{position:sticky;position:-webkit-sticky;top:0;z-index:5}.loading-indicator[_ngcontent-%COMP%]{position:fixed;z-index:999;height:2em;width:2em;overflow:show;margin:auto;top:0;left:0;bottom:0;right:0}.loading-indicator[_ngcontent-%COMP%]:before{content:"";display:block;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.3)}']}),P)}],L=((O=function e(){t(this,e)}).\u0275mod=u.Lb({type:O}),O.\u0275inj=u.Kb({factory:function(t){return new(t||O)},imports:[[r.j.forChild(R)],r.j]}),O),_=a("d3UM"),F=a("FKr1"),I=a("3Pt+"),N=a("YUcS"),G=a("kmnG"),U=((k=function e(){t(this,e)}).\u0275mod=u.Lb({type:k}),k.\u0275inj=u.Kb({factory:function(t){return new(t||k)},imports:[[c.c,L,_.b,F.o,m.g,p.b,g.b,I.l,I.w,N.a,G.f,S.b,h.b]]}),k)}}])}();