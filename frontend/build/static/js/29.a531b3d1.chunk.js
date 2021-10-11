(this.webpackJsonpdineli=this.webpackJsonpdineli||[]).push([[29],{1094:function(e,t,n){"use strict";n.r(t);var r=n(111),s=n(7),c=n(112),o=n(1),a=n(107),i=n(110),l=n.n(i),u=n(109),d=n(420),p=n(524),m=n(12),b=n(9),j={property:[{required:!0,message:"This field is required",trigger:"blur"}],tokenAddress:[{required:!0,message:"This field is required",trigger:"blur"}],tokenSymbol:[{required:!0,message:"This field is required",trigger:"blur"}],purchasePrice:[{required:!0,message:"This field is required",trigger:"blur"}],quantity:[{required:!0,message:"This field is required",trigger:"blur"}],salePrice:[{required:!0,message:"This field is required",trigger:"blur"}]};t.default=function(e){var t=Object(u.c)(),n=Object(m.g)(),i=Object(o.useRef)(),h=Object(u.d)((function(e){return e.property.propertyData})),y=Object(u.d)((function(e){return e.auth.user}));Object(o.useEffect)((function(){t(Object(d.c)())}),[]);var g=Object(o.useState)({property:"",user:"",tokenAddress:"",tokenSymbol:"",purchasePrice:0,quantity:0,salePrice:0,status:!1}),f=Object(c.a)(g,2),O=f[0],x=f[1],k=function(e,t){x(Object(s.a)(Object(s.a)({},O),{},Object(r.a)({},e,t)))};return Object(b.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center overflow-hidden",children:Object(b.jsx)("div",{style:{width:"80%"},children:Object(b.jsx)(l.a,{bottom:!0,delay:200,children:Object(b.jsxs)(a.Form,{ref:i,model:O,rules:j,labelWidth:"100",className:"login-ruleForm d-font-bold",labelPosition:"top",style:{border:"2px solid #03ffa4",margin:20,borderRadius:10},children:[Object(b.jsx)(a.Layout.Row,{style:{fontSize:25,margin:"-1px 0px 15px 0px"},children:Object(b.jsx)(a.Layout.Col,{span:"24",children:Object(b.jsxs)("div",{className:"grid-content d-content-highlight d-flex",style:{borderRadius:"10px 10px 1px 1px"},children:[Object(b.jsx)("div",{className:"ms-3",children:"Token Detail"}),Object(b.jsx)("div",{className:"ms-auto me-3 d-flex align-items-center",children:Object(b.jsx)("img",{src:"imgs/logo3.png",alt:"logo",style:{height:"35px"}})})]})})}),Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsx)(a.Form.Item,{label:"Property",prop:"property",children:Object(b.jsx)(a.Select,{className:"w-100",value:O.property,onChange:function(e){return k("property",e)},children:h.map((function(e){return Object(b.jsx)(a.Select.Option,{value:e.address1,children:e.address1})}))})})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsx)(a.Form.Item,{label:"User",prop:"user",children:Object(b.jsx)(a.Input,{type:"user",value:y.username,autoComplete:"off",disabled:!0})})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsx)(a.Form.Item,{label:"Token Address",prop:"tokenAddress",children:Object(b.jsx)(a.Input,{value:O.tokenAddress,onChange:function(e){return k("tokenAddress",e)}})})}),Object(b.jsx)("div",{className:"col-md-6",children:Object(b.jsx)(a.Form.Item,{label:"Token Symbol",prop:"tokenSymbol",children:Object(b.jsx)(a.Input,{value:O.tokenSymbol,onChange:function(e){return k("tokenSymbol",e)}})})}),Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)(a.Form.Item,{label:"Purchase Price",prop:"purchasePrice",children:Object(b.jsx)(a.Input,{type:"number",value:O.purchasePrice,onChange:function(e){return k("purchasePrice",e)}})})}),Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)(a.Form.Item,{label:"Sale Price",prop:"salePrice",children:Object(b.jsx)(a.Input,{type:"number",value:O.salePrice,onChange:function(e){return k("salePrice",e)}})})}),Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)(a.Form.Item,{label:"Quantity",prop:"quantity",children:Object(b.jsx)(a.Input,{type:"number",value:O.quantity,onChange:function(e){return k("quantity",e)}})})}),Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsx)(a.Form.Item,{label:"Status",prop:"status",children:Object(b.jsx)(a.Checkbox,{checked:O.status,onChange:function(e){return k("status",e)}})})}),Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsx)(a.Form.Item,{style:{textAlign:"center"},children:Object(b.jsx)(a.Button,{type:"success",onClick:function(){i.current.validate((function(e){if(e){var r={userId:y.id,propertyId:h.find((function(e){return e.address1==O.property})).id,tokenAddress:O.tokenAddress,tokenSymbol:O.tokenSymbol,purchasePrice:O.purchasePrice,salePrice:O.salePrice,quantity:O.quantity,status:O.status};t(Object(p.a)(r)),n.push("/admin/tokens")}}))},children:"Create"})})})]})})]})})})})}},420:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(35),s=n(419),c=n(107),o=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,a=function(e){return function(t){o=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,Object(s.d)("/api/admin/property",e,o).then((function(n){c.Notification.success({title:"Success",message:"House Properties Submit Success!",type:"success"}),t({type:r.a,payload:e})})).catch((function(e){console.log(e),c.Notification.error({title:"Failed",message:"Please try again.",type:"Warning"})}))}},i=function(e){return function(t){o=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,console.log("token",o),Object(s.d)("/api/admin/property/update",e,o).then((function(n){c.Notification.success({title:"Success",message:"House Properties Update Success!",type:"success"}),t({type:r.f,payload:e})})).catch((function(e){console.log(e),c.Notification.error({title:"Failed",message:"Please try again.",type:"Warning"})}))}},l=function(e){return function(t){return Object(s.c)("/api/property?count=".concat(e)).then((function(e){for(var n=e.data,s=0;s<n.length;s++)n[s].monthlyNetRent=n[s].monthlyGrossRent-n[s].monthlyCosts,n[s].yearlyNetRent=12*(n[s].monthlyGrossRent-n[s].monthlyCosts),n[s].fee=n[s].generatedToken*n[s].tokenValue*10/100,n[s].totalInvestment=n[s].generatedToken*n[s].tokenValue+n[s].initMaintainanceReserve+n[s].fee,n[s].expectedYield=12*(n[s].monthlyGrossRent-n[s].monthlyCosts)/(n[s].generatedToken*n[s].tokenValue)*100,n[s].imageData=n[s].imageData.split(",");t({type:r.d,payload:n})})).catch((function(e){t({type:r.e})}))}},u=function(e){return function(t){return Object(s.c)("/api/property/id?ID=".concat(e)).then((function(e){var n=e.data;return n.monthlyGrossRent=n.monthlyGrossRent,n.monthlyNetRent=n.monthlyGrossRent-n.monthlyCosts,n.yearlyNetRent=12*(n.monthlyGrossRent-n.monthlyCosts),n.fee=n.generatedToken*n.tokenValue*10/100,n.totalInvestment=n.generatedToken*n.tokenValue+n.initMaintainanceReserve+n.fee,n.expectedYield=12*(n.monthlyGrossRent-n.monthlyCosts)/parseFloat(n.generatedToken*n.tokenValue)*100,n.imageData=n.imageData.split(","),t({type:r.b,payload:n})})).catch((function(e){return t({type:r.c})}))}}},524:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n(49),s=n(419),c=n(107),o=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,a=function(e){return function(t){o=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,Object(s.d)("/api/admin/token",e,o).then((function(n){c.Notification.success({title:"Success",message:"House Properties Submit Success!",type:"success"}),t({type:r.a,payload:e})})).catch((function(e){console.log(e),c.Notification.error({title:"Failed",message:"Please try again.",type:"Warning"})}))}},i=function(e){return function(t){return Object(s.c)("/api/token?count=".concat(e)).then((function(e){var n=e.data;t({type:r.d,payload:n})})).catch((function(e){t({type:r.e})}))}}}}]);
//# sourceMappingURL=29.a531b3d1.chunk.js.map