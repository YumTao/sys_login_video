(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56830af9","chunk-2d0df437","chunk-2d0df437"],{"88bc":function(e,t,a){(function(t){var a=1/0,l=9007199254740991,r="[object Arguments]",o="[object Function]",n="[object GeneratorFunction]",s="[object Symbol]",i="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,m=i||c||Function("return this")();function p(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function d(e,t){var a=-1,l=e?e.length:0,r=Array(l);while(++a<l)r[a]=t(e[a],a,e);return r}function u(e,t){var a=-1,l=t.length,r=e.length;while(++a<l)e[r+a]=t[a];return e}var f=Object.prototype,h=f.hasOwnProperty,v=f.toString,b=m.Symbol,C=f.propertyIsEnumerable,g=b?b.isConcatSpreadable:void 0,w=Math.max;function y(e,t,a,l,r){var o=-1,n=e.length;a||(a=x),r||(r=[]);while(++o<n){var s=e[o];t>0&&a(s)?t>1?y(s,t-1,a,l,r):u(r,s):l||(r[r.length]=s)}return r}function T(e,t){return e=Object(e),E(e,t,(function(t,a){return a in e}))}function E(e,t,a){var l=-1,r=t.length,o={};while(++l<r){var n=t[l],s=e[n];a(s,n)&&(o[n]=s)}return o}function j(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var a=arguments,l=-1,r=w(a.length-t,0),o=Array(r);while(++l<r)o[l]=a[t+l];l=-1;var n=Array(t+1);while(++l<t)n[l]=a[l];return n[t]=o,p(e,this,n)}}function x(e){return k(e)||N(e)||!!(g&&e&&e[g])}function O(e){if("string"==typeof e||J(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function N(e){return S(e)&&h.call(e,"callee")&&(!C.call(e,"callee")||v.call(e)==r)}var k=Array.isArray;function R(e){return null!=e&&$(e.length)&&!F(e)}function S(e){return L(e)&&R(e)}function F(e){var t=A(e)?v.call(e):"";return t==o||t==n}function $(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=l}function A(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function L(e){return!!e&&"object"==typeof e}function J(e){return"symbol"==typeof e||L(e)&&v.call(e)==s}var M=j((function(e,t){return null==e?{}:T(e,d(y(t,1),O))}));e.exports=M}).call(this,a("c8ba"))},e5ab:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-row",{attrs:{gutter:{xs:8,sm:16,md:24,lg:32}}},[a("a-col",{attrs:{span:12}},[a("a-form-item",{staticStyle:{"margin-right":"-35px"},attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"模板CODE"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["templateCode",e.validatorRules.templateCode],expression:"['templateCode', validatorRules.templateCode ]"}],attrs:{disabled:e.disable,placeholder:"请输入模板编码"}})],1)],1),a("a-col",{attrs:{span:12}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"模板类型"}},[a("j-dict-select-tag",{directives:[{name:"decorator",rawName:"v-decorator",value:["templateType",e.validatorRules.templateType],expression:"['templateType', validatorRules.templateType ]"}],attrs:{triggerChange:!0,dictCode:"msgType",placeholder:"请选择模板类型"},on:{change:e.handleChangeTemplateType}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{span:24,pull:"2"}},[a("a-form-item",{staticStyle:{"margin-left":"-15px"},attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"模板标题"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["templateName",e.validatorRules.templateName],expression:"['templateName', validatorRules.templateName]"}],staticStyle:{width:"122%"},attrs:{placeholder:"请输入模板标题"}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{span:24,pull:"4"}},[a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.useEditor,expression:"!useEditor"}],staticStyle:{"margin-left":"4px",width:"126%"},attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"模板内容"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["templateContent",e.validatorRules.templateContent],expression:"['templateContent', validatorRules.templateContent ]"}],attrs:{placeholder:"请输入模板内容",autosize:{minRows:8,maxRows:8}}})],1)],1)],1),a("a-row",{staticClass:"form-row",attrs:{gutter:24}},[a("a-col",{attrs:{span:24,pull:"4"}},[a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.useEditor,expression:"useEditor"}],staticStyle:{"margin-left":"4px",width:"126%"},attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"模板内容"}},[a("j-editor",{model:{value:e.templateEditorContent,callback:function(t){e.templateEditorContent=t},expression:"templateEditorContent"}})],1)],1)],1)],1)],1)],1)},r=[],o=a("0fea"),n=a("88bc"),s=a.n(n),i=a("4ec3"),c=a("a061"),m={name:"SysMessageTemplateModal",components:{JEditor:c["default"]},data:function(){return{title:"操作",visible:!1,disable:!0,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{templateCode:{rules:[{required:!0,message:"请输入模板CODE!"},{validator:this.validateTemplateCode}]},templateName:{rules:[{required:!0,message:"请输入模板标题!"}]},templateContent:{rules:[]},templateType:{rules:[{required:!0,message:"请输入模板类型!"}]}},url:{add:"/sys/message/sysMessageTemplate/add",edit:"/sys/message/sysMessageTemplate/edit"},useEditor:!1,templateEditorContent:""}},created:function(){},methods:{add:function(){this.disable=!1,this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.useEditor=2==e.templateType||4==e.templateType,this.useEditor?this.templateEditorContent=e.templateContent:this.templateEditorContent="",this.visible=!0,this.$nextTick((function(){t.useEditor?t.form.setFieldsValue(s()(t.model,"templateCode","templateName","templateTestJson","templateType")):t.form.setFieldsValue(s()(t.model,"templateCode","templateContent","templateName","templateTestJson","templateType"))}))},close:function(){this.$emit("close"),this.visible=!1,this.disable=!0},handleOk:function(){var e=this;this.model.templateType=this.templateType;var t=this;this.form.validateFields((function(a,l){if(!a){t.confirmLoading=!0;var r="",n="";e.model.id?(r+=e.url.edit,n="put"):(r+=e.url.add,n="post");var s=Object.assign(e.model,l);e.useEditor&&(s.templateContent=e.templateEditorContent),Object(o["h"])(r,s,n).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},validateTemplateCode:function(e,t,a){var l={tableName:"sys_sms_template",fieldName:"template_code",fieldVal:t,dataId:this.model.id};Object(i["m"])(l).then((function(e){e.success?a():a(e.message)}))},handleCancel:function(){this.close()},handleChangeTemplateType:function(e){this.useEditor=2==e||4==e}}},p=m,d=a("2877"),u=Object(d["a"])(p,l,r,!1,null,"45efade7",null);t["default"]=u.exports}}]);