(this.webpackJsonpdineli=this.webpackJsonpdineli||[]).push([[34],{1098:function(e,t,n){"use strict";n.r(t);var a=n(419),c=n(1),i=n(108),r=n(12),o=n(106),s=n(109),l=n.n(s),u=n(581),d=n(418),m=n(9),b={name:[{required:!0,message:"Please input website title",trigger:"blur"}],job:[{required:!0,message:"Please input job",trigger:"blur"}]};t.default=function(e){var t=Object(i.c)(),n=Object(r.g)(),s=Object(c.useRef)(),j=Object(c.useState)({name:"",job:"",content:"",avatar:""}),f=Object(a.a)(j,2),h=f[0],p=f[1],g=Object(c.useState)(null),x=Object(a.a)(g,2),O=x[0],v=x[1],y=function(e,t){var n=Object.assign({},h);n[e]=t,p(n)};return Object(m.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center overflow-hidden",children:Object(m.jsx)("div",{style:{width:"80%"},children:Object(m.jsx)(l.a,{bottom:!0,delay:200,children:Object(m.jsxs)(o.Form,{ref:s,model:h,rules:b,labelWidth:"100",className:"login-ruleForm d-font-bold",labelPosition:"top",style:{border:"2px solid #03ffa4",margin:20,borderRadius:10},children:[Object(m.jsx)(o.Layout.Row,{style:{fontSize:25,margin:"-1px 0px 15px 0px"},children:Object(m.jsx)(o.Layout.Col,{span:"24",children:Object(m.jsxs)("div",{className:"grid-content d-content-highlight d-flex",style:{borderRadius:"10px 10px 1px 1px"},children:[Object(m.jsx)("div",{className:"ms-3",children:"Team Membar"}),Object(m.jsx)("div",{className:"ms-auto me-3 d-flex align-items-center",children:Object(m.jsx)("img",{src:"imgs/logo3.png",alt:"logo",style:{height:"35px"}})})]})})}),Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsx)(o.Form.Item,{label:"Name",prop:"name",children:Object(m.jsx)(o.Input,{value:h.name,onChange:function(e){return y("name",e)}})})}),Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsx)(o.Form.Item,{label:"Job",prop:"job",children:Object(m.jsx)(o.Input,{type:"job",value:h.job,onChange:function(e){return y("job",e)},autoComplete:"off"})})}),Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsx)(o.Form.Item,{label:"Content",prop:"content",children:Object(m.jsx)(o.Input,{value:h.content,onChange:function(e){return y("content",e)}})})}),Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsx)(o.Form.Item,{label:"Avatar",children:Object(m.jsxs)("div",{className:"bg-white d-flex rounded justify-content-center align-items-center position-relative overflow-hidden d-inline-block w-100",style:{height:36},children:[O?Object(m.jsx)("div",{className:"text-muted bg-white",children:O.name}):Object(m.jsx)("div",{className:"text-muted bg-white",style:{fontSize:30},children:"+"}),Object(m.jsx)("input",{type:"file",onChange:function(e){v(e.target.files[0])},className:"position-absolute top-0 left-0 opacity-0 w-100 h-100"})]})})}),Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsx)(o.Form.Item,{style:{textAlign:"center"},children:Object(m.jsx)(o.Button,{type:"success",onClick:function(){s.current.validate((function(e){if(!e||!O)return!1;var a=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,c=new FormData;c.append("img",O,O.name),Object(d.d)("/api/admin/image/upload",c,a).then((function(e){console.log("[Image Uploaded]",e);var a=Object.assign({},h);a.avatar=e.data.imgPath,t(Object(u.a)(a)),n.push("/admin/teams")})).catch((function(e){console.log("[Image Upload Fail]",e)}))}))},children:"Create"})})})]})})]})})})})}},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(110);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,c=!1,i=void 0;try{for(var r,o=e[Symbol.iterator]();!(a=(r=o.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==o.return||o.return()}finally{if(c)throw i}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},581:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var a=n(52),c=n(418),i=n(106),r=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,o=function(e){return function(t){Object(c.d)("/api/admin/team",e,r).then((function(n){i.Notification.success({title:"Success",message:"House Properties Submit Success!",type:"success"}),t({type:a.a,payload:e})})).catch((function(e){console.log(e),i.Notification.error({title:"Failed",message:"Please try again.",type:"Warning"})}))}},s=function(e){return function(t){return Object(c.c)("/api/team?count=".concat(e)).then((function(e){var n=e.data;t({type:a.d,payload:n})})).catch((function(e){t({type:a.e})}))}}}}]);
//# sourceMappingURL=34.f03c6fa2.chunk.js.map