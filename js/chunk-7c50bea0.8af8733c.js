(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c50bea0","chunk-4bf00405","chunk-2d0ba8d9"],{"062f":function(e,t,a){},3864:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{staticStyle:{height:"100%"},attrs:{loading:e.cardLoading,bordered:!1}},[a("a-spin",{attrs:{spinning:e.loading}},[a("a-input-search",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{placeholder:"输入机构名称查询...",enterButton:""},on:{search:e.handleSearch}}),a("a-tree",{attrs:{showLine:"",checkStrictly:"",expandedKeys:e.expandedKeys,selectedKeys:e.selectedKeys,dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.treeDataSource},on:{"update:expandedKeys":function(t){e.expandedKeys=t},"update:expanded-keys":function(t){e.expandedKeys=t},select:e.handleTreeSelect}})],1)],1)},r=[],i=a("4ec3"),s={name:"AddressListLeft",props:["value"],data:function(){return{cardLoading:!0,loading:!1,treeDataSource:[],selectedKeys:[],expandedKeys:[]}},created:function(){this.queryTreeData()},methods:{queryTreeData:function(e){this.commonRequestThen(Object(i["D"])({departName:e||void 0}))},handleSearch:function(e){e?this.commonRequestThen(Object(i["T"])({keyWord:e})):this.queryTreeData()},handleTreeSelect:function(e,t){if(e.length>0&&this.selectedKeys[0]!==e[0]){this.selectedKeys=[e[0]];var a=t.node.dataRef.orgCode;this.emitInput(a)}},emitInput:function(e){this.$emit("input",e)},commonRequestThen:function(e){var t=this;this.loading=!0,e.then((function(e){e.success?t.treeDataSource=e.result:t.$message.warn(e.message)})).finally((function(){t.loading=!1,t.cardLoading=!1}))}}},o=s,c=a("2877"),l=Object(c["a"])(o,n,r,!1,null,"1d28f146",null);t["default"]=l.exports},5648:function(e,t,a){},6515:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{attrs:{type:"flex",gutter:16}},[a("a-col",{attrs:{md:5,sm:24}},[a("address-list-left",{model:{value:e.currentOrgCode,callback:function(t){e.currentOrgCode=t},expression:"currentOrgCode"}})],1),a("a-col",{attrs:{md:19,sm:24}},[a("address-list-right",{model:{value:e.currentOrgCode,callback:function(t){e.currentOrgCode=t},expression:"currentOrgCode"}})],1)],1)},r=[],i=a("3864"),s=a("cb6b"),o={name:"AddressList",components:{AddressListLeft:i["default"],AddressListRight:s["default"]},data:function(){return{description:"通讯录页面",currentOrgCode:""}},methods:{}},c=o,l=(a("8d4b"),a("2877")),d=Object(l["a"])(c,n,r,!1,null,"0f56c3a6",null);t["default"]=d.exports},"6c7d":function(e,t,a){"use strict";var n=a("b4a6"),r=a.n(n);r.a},"8d4b":function(e,t,a){"use strict";var n=a("5648"),r=a.n(n);r.a},b4a6:function(e,t,a){},cb6b:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{staticClass:"j-address-list-right-card-box",attrs:{loading:e.cardLoading,bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:6,sm:12}},[a("a-form-item",{staticStyle:{"margin-left":"8px"},attrs:{label:"姓名"}},[a("a-input",{attrs:{placeholder:"请输入姓名查询"},model:{value:e.queryParam.realname,callback:function(t){e.$set(e.queryParam,"realname",t)},expression:"queryParam.realname"}})],1)],1),a("a-col",{attrs:{md:6,sm:12}},[a("a-form-item",{staticStyle:{"margin-left":"8px"},attrs:{label:"工号"}},[a("a-input",{attrs:{placeholder:"请输入工号查询"},model:{value:e.queryParam.workNo,callback:function(t){e.$set(e.queryParam,"workNo",t)},expression:"queryParam.workNo"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{staticStyle:{"margin-left":"18px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"userId",pagination:e.ipagination,columns:e.columns,dataSource:e.dataSource,loading:e.loading},on:{change:e.handleTableChange}})],1)},r=[],i=a("0fea"),s=a("b65a");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d={name:"AddressListRight",mixins:[s["a"]],components:{},props:["value"],data:function(){var e=this;return{description:"用户信息",cardLoading:!0,positionInfo:{},columns:[{title:"#",key:"rowIndex",dataIndex:"",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"姓名",width:"15%",align:"center",dataIndex:"realname"},{title:"工号",width:"15%",align:"center",dataIndex:"workNo"},{title:"部门",width:"20%",align:"center",dataIndex:"departName"},{title:"职务",width:"15%",align:"center",dataIndex:"post",customRender:function(t){return(t||"").split(",").map((function(t){return e.positionInfo[t]?e.positionInfo[t]:t})).join(",")}},{title:"手机",width:"15%",align:"center",dataIndex:"telephone"},{title:"公司邮箱",width:"15%",align:"center",dataIndex:"email"}],url:{list:"/sys/user/queryByOrgCodeForAddressList",listByPosition:"/sys/position/list"}}},watch:{value:{immediate:!0,handler:function(e){this.dataSource=[],this.loadData(1,e)}}},created:function(){this.queryPositionInfo()},methods:{loadData:function(e,t){var a=this;this.loading=!0,1===e&&(this.ipagination.current=1),t?Object(i["c"])(this.url.list,c({orgCode:t},this.getQueryParams())).then((function(e){e.success&&(a.dataSource=e.result.records,a.ipagination.total=e.result.total)})).finally((function(){a.loading=!1,a.cardLoading=!1})):Object(i["c"])(this.url.list,c({},this.getQueryParams())).then((function(e){e.success&&(a.dataSource=e.result.records,a.ipagination.total=e.result.total)})).finally((function(){a.loading=!1,a.cardLoading=!1}))},searchQuery:function(){this.loadData(1,this.value)},searchReset:function(){this.queryParam={},this.loadData(1,this.value)},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"===a.order?"asc":"desc"),this.ipagination=e,this.loadData(null,this.value)},queryPositionInfo:function(){var e=this;Object(i["c"])(this.url.listByPosition,{pageSize:99999}).then((function(t){if(t.success){var a={};t.result.records.forEach((function(e){a[e["code"]]=e["name"]})),e.positionInfo=a}}))}}},u=d,f=(a("d5e7"),a("6c7d"),a("2877")),h=Object(f["a"])(u,n,r,!1,null,"4c512d05",null);t["default"]=h.exports},d5e7:function(e,t,a){"use strict";var n=a("062f"),r=a.n(n);r.a}}]);