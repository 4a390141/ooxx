(function(t){function e(e){for(var n,i,s=e[0],l=e[1],u=e[2],d=0,m=[];d<s.length;d++)i=s[d],r[i]&&m.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0d2e":function(t,e,a){"use strict";var n=a("ae26"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("router-link",{attrs:{to:"/index"}},[t._v("Home")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{right:""}},[a("router-link",{attrs:{to:"/leaveComments"}},[t._v("留言")])],1),a("b-nav-item-dropdown",{attrs:{right:""}},[a("template",{slot:"button-content"},[a("em",[t._v("User")])]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],2)],1)],1)],1)],1),a("router-view")],1)},o=[],i=(a("5c0b"),a("2877")),s={},l=Object(i["a"])(s,r,o,!1,null,null,null),u=l.exports,c=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"leaveComments"},[a("b-card-group",{attrs:{deck:""}},[a("b-card",{attrs:{"border-variant":"primary",header:"輸入","header-bg-variant":"primary","header-text-variant":"white",align:"center"}},[a("b-form",{on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[a("label",{attrs:{for:"feedback-name"}},[t._v("姓名")]),a("b-input",{attrs:{state:t.name_validation,id:"feedback-name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("b-form-invalid-feedback",{attrs:{state:t.name_validation}},[t._v("\n            Your user ID must be 3-12 characters long.\n          ")]),a("label",{attrs:{for:"feedback-msg"}},[t._v("留言")]),a("b-input",{attrs:{state:t.msg_validation,id:"feedback-msg"},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}}),a("b-form-invalid-feedback",{attrs:{state:t.msg_validation}},[t._v("\n            Your user ID must be 3-12 characters long.\n          ")]),a("b-button",{attrs:{block:"",variant:"primary"},on:{click:t.addComment}},[t._v("Block Level Button")])],1)],1)],1),a("div",[a("b-card",{attrs:{"bg-variant":"dark","text-variant":"white",title:"Card Title"}},[a("b-card-text",[t._v("\n          With supporting text below as a natural lead-in to additional content.\n        ")])],1)],1)],1)},m=[],f=(a("7f7f"),a("8aa5")),p=a.n(f),v={name:"leaveComments",components:{},data:function(){return{commentsList:p.a.database().ref("/commentsList/"),name:"",msg:"",leaveCommentsList:[]}},computed:{name_validation:function(){return this.name.length>2&&this.name.length<13},msg_validation:function(){return this.msg.length>2&&this.msg.length<13}},methods:{addComment:function(){var t=this,e={name:t.name,msg:t.msg,sort:t.leaveCommentsList.length||0,flag:"N"};t.insertComment(e)},insertComment:function(t){var e=this;e.commentsList.push(t)}}},b=v,g=(a("0d2e"),Object(i["a"])(b,d,m,!1,null,null,null)),h=g.exports;n["default"].use(c["a"]);var _=new c["a"]({mode:"history",base:"",routes:[{path:"/leaveComments",name:"leaveComments",component:h}]}),y=a("2f62");n["default"].use(y["a"]);var x=new y["a"].Store({state:{},mutations:{},actions:{}}),k=a("5f5b"),w={apiKey:"AIzaSyCgW5dRMaPyjm_f2Q6_fo3UgLC7V2m-Ylg",authDomain:"ooxx-73434.firebaseapp.com",databaseURL:"https://ooxx-73434.firebaseio.com",projectId:"ooxx-73434",storageBucket:"",messagingSenderId:"559671550450",appId:"1:559671550450:web:e1b9a6f3459c2dbb"};p.a.initializeApp(w),n["default"].config.productionTip=!1,n["default"].use(k["a"]),new n["default"]({router:_,store:x,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),r=a.n(n);r.a},"5e27":function(t,e,a){},ae26:function(t,e,a){}});
//# sourceMappingURL=app.1e6154dc.js.map