(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b124276a"],{"553e":function(e,t,a){},"7f76":function(e,t,a){"use strict";var n=a("553e"),i=a.n(n);i.a},b3c4:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-modal",{attrs:{centered:"",title:e.title,width:1e3,visible:e.visible,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:10}},[a("a-form-item",{attrs:{label:"用户账号"}},[a("a-input",{attrs:{placeholder:"请输入用户账号"},model:{value:e.queryParam.username,callback:function(t){e.$set(e.queryParam,"username",t)},expression:"queryParam.username"}})],1)],1),a("a-col",{attrs:{span:8}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",[a("a-table",{attrs:{size:"small",bordered:"",rowKey:"id",columns:e.columns1,dataSource:e.dataSource1,pagination:e.ipagination,loading:e.loading,scroll:{y:240},rowSelection:{selectedRowKeys:e.selectedRowKeys,onSelectAll:e.onSelectAll,onSelect:e.onSelect,onChange:e.onSelectChange}},on:{change:e.handleTableChange}})],1)])],1)},i=[],s=a("ca00"),r=a("0fea"),l={name:"SelectUserModal",data:function(){return{title:"添加已有用户",names:[],visible:!1,placement:"right",description:"",queryParam:{},columns1:[{title:"#",dataIndex:"",key:"rowIndex",width:50,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"用户账号",align:"center",width:100,dataIndex:"username"},{title:"用户名称",align:"center",width:100,dataIndex:"realname"},{title:"性别",align:"center",width:100,dataIndex:"sex_dictText"},{title:"电话",align:"center",width:100,dataIndex:"phone"},{title:"部门",align:"center",width:150,dataIndex:"orgCode"}],columns2:[{title:"用户账号",align:"center",dataIndex:"username"},{title:"用户名称",align:"center",dataIndex:"realname"},{title:"操作",dataIndex:"action",align:"center",width:100,scopedSlots:{customRender:"action"}}],dataSource1:[],dataSource2:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},loading:!1,selectedRowKeys:[],selectedRows:[],url:{list:"/sys/user/list"}}},created:function(){this.loadData()},methods:{searchQuery:function(){this.loadData(1)},searchReset:function(){this.queryParam={},this.loadData(1)},handleCancel:function(){this.visible=!1},handleOk:function(){this.dataSource2=this.selectedRowKeys,this.$emit("selectFinished",this.dataSource2),this.visible=!1},add:function(){this.visible=!0},loadData:function(e){var t=this;1===e&&(this.ipagination.current=1);var a=this.getQueryParams();Object(r["c"])(this.url.list,a).then((function(e){e.success&&(t.dataSource1=e.result.records,t.ipagination.total=e.result.total)}))},getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.field=this.getQueryField(),e.pageNo=this.ipagination.current,e.pageSize=this.ipagination.pageSize,Object(s["d"])(e)},getQueryField:function(){},onSelectAll:function(e,t,a){if(!0===e)for(var n=0;n<a.length;n++)this.dataSource2.push(a[n]);else for(var i=0;i<a.length;i++)this.dataSource2.splice(this.dataSource2.indexOf(a[i]),1)},onSelect:function(e,t){if(!0===t)this.dataSource2.push(e);else{var a=this.dataSource2.indexOf(e);a>=0&&this.dataSource2.splice(this.dataSource2.indexOf(e),1)}},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},handleDelete:function(e){this.dataSource2.splice(this.dataSource2.indexOf(e),1)},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()}}},o=l,c=(a("7f76"),a("2877")),d=Object(c["a"])(o,n,i,!1,null,"3f080a9a",null);t["default"]=d.exports}}]);