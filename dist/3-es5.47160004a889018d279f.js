!function(){function e(t,n){return(e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(t,n)}function t(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=i(e);if(t){var s=i(this).constructor;r=Reflect.construct(o,arguments,s)}else r=o.apply(this,arguments);return n(this,r)}}function n(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{CzEO:function(n,i,o){"use strict";o.d(i,"a",(function(){return E})),o.d(i,"b",(function(){return C}));var l=o("ofXK"),u=o("fXoL"),c=o("mrSG"),h=o("jhN1"),d=o("3Pt+"),f=[[["","quill-editor-toolbar",""]]],g=["[quill-editor-toolbar]"],m={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},v=function(e,t){return e||t||"html"},b=new u.s("config"),p=function(){var e=function(){function e(t){s(this,e),this.config=t,this.count=0,this.config||(this.config={modules:m})}return a(e,[{key:"getQuill",value:function(){var e=this;return this.count++,this.Quill||1!==this.count||(this.$importPromise=new Promise((function(t){return Object(c.a)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i,r,s=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.e(110).then(o.t.bind(null,"kzlf",7));case 2:r=e.sent,this.Quill=r.default?r.default:r,null===(n=this.config.customOptions)||void 0===n||n.forEach((function(e){var t=s.Quill.import(e.import);t.whitelist=e.whitelist,s.Quill.register(t,!0,s.config.suppressGlobalRegisterWarning)})),null===(i=this.config.customModules)||void 0===i||i.forEach((function(e){var t=e.implementation,n=e.path;s.Quill.register(n,t,s.config.suppressGlobalRegisterWarning)})),t(this.Quill);case 4:case"end":return e.stop()}}),e,this)})))}))),this.$importPromise}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Xb(b))},e.\u0275prov=Object(u.Jb)({factory:function(){return new e(Object(u.Xb)(b))},token:e,providedIn:"root"}),e}(),y=function(){var e=function(){function e(t,n,i,r,o,l,a){var c=this;s(this,e),this.elementRef=t,this.domSanitizer=n,this.doc=i,this.platformId=r,this.renderer=o,this.zone=l,this.service=a,this.required=!1,this.customToolbarPosition="top",this.sanitize=!1,this.styles=null,this.strict=!0,this.customOptions=[],this.customModules=[],this.preserveWhitespace=!1,this.trimOnValidation=!1,this.onEditorCreated=new u.o,this.onEditorChanged=new u.o,this.onContentChanged=new u.o,this.onSelectionChanged=new u.o,this.onFocus=new u.o,this.onBlur=new u.o,this.disabled=!1,this.valueGetter=function(e,t){var n=t.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==n&&"<div><br></div>"!==n||(n=null);var i=n,r=v(c.format,c.service.config.format);if("text"===r)i=e.getText();else if("object"===r)i=e.getContents();else if("json"===r)try{i=JSON.stringify(e.getContents())}catch(o){i=e.getText()}return i},this.valueSetter=function(e,t){var n=v(c.format,c.service.config.format);if("html"===n)return c.sanitize&&(t=c.domSanitizer.sanitize(u.K.HTML,t)),e.clipboard.convert(t);if("json"===n)try{return JSON.parse(t)}catch(i){return[{insert:t}]}return t},this.selectionChangeHandler=function(e,t,n){var i=!e&&!!c.onModelTouched;(c.onBlur.observers.length||c.onFocus.observers.length||c.onSelectionChanged.observers.length||i)&&c.zone.run((function(){null===e?c.onBlur.emit({editor:c.quillEditor,source:n}):null===t&&c.onFocus.emit({editor:c.quillEditor,source:n}),c.onSelectionChanged.emit({editor:c.quillEditor,oldRange:t,range:e,source:n}),i&&c.onModelTouched()}))},this.textChangeHandler=function(e,t,n){var i=c.quillEditor.getText(),r=c.quillEditor.getContents(),o=c.editorElem.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==o&&"<div><br></div>"!==o||(o=null);var s=c.trackChanges||c.service.config.trackChanges,l=("user"===n||s&&"all"===s)&&!!c.onModelChange;(c.onContentChanged.observers.length||l)&&c.zone.run((function(){l&&c.onModelChange(c.valueGetter(c.quillEditor,c.editorElem)),c.onContentChanged.emit({content:r,delta:e,editor:c.quillEditor,html:o,oldDelta:t,source:n,text:i})}))},this.editorChangeHandler=function(e,t,n,i){if(c.onEditorChanged.observers.length)if("text-change"===e){var r=c.quillEditor.getText(),o=c.quillEditor.getContents(),s=c.editorElem.querySelector(".ql-editor").innerHTML;"<p><br></p>"!==s&&"<div><br></div>"!==s||(s=null),c.zone.run((function(){c.onEditorChanged.emit({content:o,delta:t,editor:c.quillEditor,event:e,html:s,oldDelta:n,source:i,text:r})}))}else c.onEditorChanged.emit({editor:c.quillEditor,event:e,oldRange:n,range:t,source:i})}}return a(e,[{key:"ngAfterViewInit",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,i,o,s,a,c,h,d,f,g,b=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(l.C)(this.platformId)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.service.getQuill();case 4:if(t=e.sent,this.elementRef.nativeElement.insertAdjacentHTML("top"===this.customToolbarPosition?"beforeend":"afterbegin",this.preserveWhitespace?"<pre quill-editor-element></pre>":"<div quill-editor-element></div>"),this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]"),n=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),i=Object.assign({},this.modules||this.service.config.modules),n?i.toolbar=n:void 0===i.toolbar&&(i.toolbar=m.toolbar),void 0===(o=void 0!==this.placeholder?this.placeholder:this.service.config.placeholder)&&(o="Insert text here ..."),this.styles&&Object.keys(this.styles).forEach((function(e){b.renderer.setStyle(b.editorElem,e,b.styles[e])})),this.classes&&this.addClasses(this.classes),this.customOptions.forEach((function(e){var n=t.import(e.import);n.whitelist=e.whitelist,t.register(n,!0)})),this.customModules.forEach((function(e){var n=e.implementation,i=e.path;t.register(i,n)})),(s=this.bounds&&"self"===this.bounds?this.editorElem:this.bounds)||(s=this.service.config.bounds?this.service.config.bounds:this.doc.body),!(a=this.debug)&&!1!==a&&this.service.config.debug&&(a=this.service.config.debug),(c=this.readOnly)||!1===this.readOnly||(c=void 0!==this.service.config.readOnly&&this.service.config.readOnly),(h=this.scrollingContainer)||null===this.scrollingContainer||(h=null===this.service.config.scrollingContainer||this.service.config.scrollingContainer?this.service.config.scrollingContainer:null),(d=this.formats)||void 0!==d||(d=this.service.config.formats?r(this.service.config.formats):null===this.service.config.formats?null:void 0),this.zone.runOutsideAngular((function(){b.quillEditor=new t(b.editorElem,{bounds:s,debug:a,formats:d,modules:i,placeholder:o,readOnly:c,scrollingContainer:h,strict:b.strict,theme:b.theme||(b.service.config.theme?b.service.config.theme:"snow")})})),this.content){if("object"===(f=v(this.format,this.service.config.format)))this.quillEditor.setContents(this.content,"silent");else if("text"===f)this.quillEditor.setText(this.content,"silent");else if("json"===f)try{this.quillEditor.setContents(JSON.parse(this.content),"silent")}catch(p){this.quillEditor.setText(this.content,"silent")}else this.sanitize&&(this.content=this.domSanitizer.sanitize(u.K.HTML,this.content)),g=this.quillEditor.clipboard.convert(this.content),this.quillEditor.setContents(g,"silent");this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.quillEditor.on("editor-change",this.editorChangeHandler),this.quillEditor.on("selection-change",this.selectionChangeHandler),this.quillEditor.on("text-change",this.textChangeHandler),setTimeout((function(){b.onValidatorChanged&&b.onValidatorChanged(),b.onEditorCreated.emit(b.quillEditor)}));case 21:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnDestroy",value:function(){this.quillEditor&&(this.quillEditor.off("selection-change",this.selectionChangeHandler),this.quillEditor.off("text-change",this.textChangeHandler),this.quillEditor.off("editor-change",this.editorChangeHandler))}},{key:"ngOnChanges",value:function(e){var t=this;if(this.quillEditor){if(e.readOnly&&this.quillEditor.enable(!e.readOnly.currentValue),e.placeholder&&(this.quillEditor.root.dataset.placeholder=e.placeholder.currentValue),e.styles){var n=e.styles.currentValue,i=e.styles.previousValue;i&&Object.keys(i).forEach((function(e){t.renderer.removeStyle(t.editorElem,e)})),n&&Object.keys(n).forEach((function(e){t.renderer.setStyle(t.editorElem,e,t.styles[e])}))}if(e.classes){var r=e.classes.currentValue,o=e.classes.previousValue;o&&this.removeClasses(o),r&&this.addClasses(r)}}}},{key:"addClasses",value:function(t){var n=this;e.normalizeClassNames(t).forEach((function(e){n.renderer.addClass(n.editorElem,e)}))}},{key:"removeClasses",value:function(t){var n=this;e.normalizeClassNames(t).forEach((function(e){n.renderer.removeClass(n.editorElem,e)}))}},{key:"writeValue",value:function(e){this.content=e;var t=v(this.format,this.service.config.format);if(this.quillEditor){if(e)return void("text"===t?this.quillEditor.setText(e):this.quillEditor.setContents(this.valueSetter(this.quillEditor,this.content)));this.quillEditor.setText("")}}},{key:"setDisabledState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.disabled;this.disabled=e,this.quillEditor&&(e?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}},{key:"registerOnChange",value:function(e){this.onModelChange=e}},{key:"registerOnTouched",value:function(e){this.onModelTouched=e}},{key:"registerOnValidatorChange",value:function(e){this.onValidatorChanged=e}},{key:"validate",value:function(){if(!this.quillEditor)return null;var e={},t=!0,n=this.quillEditor.getText(),i=this.trimOnValidation?n.trim().length:1===n.length&&0===n.trim().length?0:n.length-1;return this.minLength&&i&&i<this.minLength&&(e.minLengthError={given:i,minLength:this.minLength},t=!1),this.maxLength&&i>this.maxLength&&(e.maxLengthError={given:i,maxLength:this.maxLength},t=!1),this.required&&!i&&(e.requiredError={empty:!0},t=!1),t?null:e}}],[{key:"normalizeClassNames",value:function(e){return e.trim().split(" ").reduce((function(e,t){var n=t.trim();return n&&e.push(n),e}),[])}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Nb(u.l),u.Nb(h.b),u.Nb(l.e),u.Nb(u.D),u.Nb(u.G),u.Nb(u.B),u.Nb(p))},e.\u0275dir=u.Ib({type:e,inputs:{required:"required",customToolbarPosition:"customToolbarPosition",sanitize:"sanitize",styles:"styles",strict:"strict",customOptions:"customOptions",customModules:"customModules",preserveWhitespace:"preserveWhitespace",trimOnValidation:"trimOnValidation",valueGetter:"valueGetter",valueSetter:"valueSetter",format:"format",theme:"theme",modules:"modules",debug:"debug",readOnly:"readOnly",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",formats:"formats",scrollingContainer:"scrollingContainer",bounds:"bounds",trackChanges:"trackChanges",classes:"classes"},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur"},features:[u.Ab]}),e}(),E=function(){var n=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(r,n);var i=t(r);function r(e,t,n,o,l,a,u){return s(this,r),i.call(this,e,t,n,o,l,a,u)}return r}(y);return n.\u0275fac=function(e){return new(e||n)(u.Nb(u.l),u.Nb(h.b),u.Nb(l.e),u.Nb(u.D),u.Nb(u.G),u.Nb(u.B),u.Nb(p))},n.\u0275cmp=u.Hb({type:n,selectors:[["quill-editor"]],features:[u.Bb([{multi:!0,provide:d.o,useExisting:Object(u.W)((function(){return n}))},{multi:!0,provide:d.n,useExisting:Object(u.W)((function(){return n}))}]),u.zb],ngContentSelectors:g,decls:1,vars:0,template:function(e,t){1&e&&(u.lc(f),u.kc(0))},encapsulation:2}),n}(),C=function(){var e=function(){function e(){s(this,e)}return a(e,null,[{key:"forRoot",value:function(t){return{ngModule:e,providers:[{provide:b,useValue:t}]}}}]),e}();return e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({factory:function(t){return new(t||e)},providers:[p],imports:[[l.c]]}),e}()},mrSG:function(e,t,n){"use strict";function i(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{a(i.next(e))}catch(t){o(t)}}function l(e){try{a(i.throw(e))}catch(t){o(t)}}function a(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((i=i.apply(e,t||[])).next())}))}n.d(t,"a",(function(){return i}))}}])}();