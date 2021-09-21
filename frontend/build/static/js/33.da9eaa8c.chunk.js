(this.webpackJsonpdineli=this.webpackJsonpdineli||[]).push([[33],{1091:function(e,t,n){"use strict";n.r(t);var r=n(112),l=n(1),s=n(12),a=n(107),i=n(110),o=n.n(i),c=n(109),u=n(420),d=n(419),m=n(9),b={rentStartsDate:[{required:!0,message:"This field is required",trigger:"blur"}],generatedToken:[{required:!0,message:"This field is required",trigger:"blur"}],propertyType:[{required:!0,message:"This field is required",trigger:"blur"}],neighborhood:[{required:!0,message:"This field is required",trigger:"blur"}],squareFeet:[{required:!0,message:"This field is required",trigger:"blur"}],lotSize:[{required:!0,message:"This field is required",trigger:"blur"}],bedroomOrBath:[{required:!0,message:"This field is required",trigger:"blur"}],constructionYear:[{required:!0,message:"This field is required",trigger:"blur"}],currentStatusOfProperty:[{required:!0,message:"This field is required",trigger:"blur"}],section8:[{required:!0,message:"This field is required",trigger:"blur"}],monthlyGrossRent:[{required:!0,message:"This field is required",trigger:"blur"}],tax:[{required:!0,message:"This field is required",trigger:"blur"}],insuranceFee:[{required:!0,message:"This field is required",trigger:"blur"}],utility:[{required:!0,message:"This field is required",trigger:"blur"}],assetPrice:[{required:!0,message:"This field is required",trigger:"blur"}],fee:[{required:!0,message:"This field is required",trigger:"blur"}],initMaintainanceReserve:[{required:!0,message:"This field is required",trigger:"blur"}]},j=[{key:"single",label:"Single Family"},{key:"multi",label:"Multiple Family"}],h=[{key:"fully",label:"Fully Rented"},{key:"partially",label:"Partially Rented"},{key:"not",label:"Not Rented"}],p=[{key:"true",label:"Yes"},{key:"false",label:"No"}],g=[{key:"tenant-paid",label:"Tenant-Paid always"}];t.default=function(e){var t=Object(l.useState)({address1:null,address2:null,pos_latitude:null,pos_longitude:null,imageData:null,rentStartsDate:null,monthlyRentPerToken:null,tokenValue:null,generatedToken:null,propertyType:null,neighborhood:null,squareFeet:0,lotSize:0,bedroomOrBath:0,constructionYear:null,currentStatusOfProperty:null,section8:null,monthlyGrossRent:0,monthlyCosts:null,propertyManagementFee:null,platformFee:null,tax:0,insuranceFee:0,utility:null,assetPrice:0,fee:0,initMaintainanceReserve:0}),n=Object(r.a)(t,2),i=n[0],y=n[1],x=Object(c.c)(),O=Object(s.g)(),f=Object(l.useRef)(),v=Object(l.useState)(null),F=Object(r.a)(v,2),I=F[0],N=F[1],T=function(e,t){var n=Object.assign({},i);n[e]=t;var r="monthlyGrossRent"==e?t:n.monthlyGrossRent;"monthlyGrossRent"==e?(n.propertyManagementFee=(.08*r).toFixed(2),n.platformFee=(.02*r).toFixed(2)):"generatedToken"!=e&&"assetPrice"!=e||(n.tokenValue=0!=n.generatedToken?(n.assetPrice/parseFloat(n.generatedToken)).toFixed(2):null),n.monthlyCosts=-(-n.propertyManagementFee-n.platformFee-n.tax-n.insuranceFee-n.fee).toFixed(2),n.monthlyRentPerToken=0!=n.generatedToken?(n.monthlyCosts/n.generatedToken).toFixed(2):null,y(n)};return Object(m.jsx)("div",{className:"d-flex flex-column justify-content-center align-items-center overflow-hidden",children:Object(m.jsx)("div",{style:{width:"80%"},children:Object(m.jsx)(o.a,{bottom:!0,delay:200,children:Object(m.jsxs)(a.Form,{ref:f,model:i,rules:b,labelWidth:"100",className:"login-ruleForm d-font-bold",labelPosition:"top",style:{border:"2px solid #03ffa4",margin:20,borderRadius:10},children:[Object(m.jsx)(a.Layout.Row,{style:{fontSize:25,margin:"-1px 0px 15px 0px"},children:Object(m.jsx)(a.Layout.Col,{span:"24",children:Object(m.jsxs)("div",{className:"grid-content d-content-highlight d-flex",style:{borderRadius:"10px 10px 1px 1px"},children:[Object(m.jsx)("div",{className:"ms-3",children:"Property Detail"}),Object(m.jsx)("div",{className:"ms-auto me-3 d-flex align-items-center",children:Object(m.jsx)("img",{src:"imgs/logo3.png",alt:"logo",style:{height:"35px"}})})]})})}),Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)("h3",{className:"my-3 text-white",children:"Property Highlights"}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsxs)("div",{className:"bg-white d-flex rounded justify-content-center align-items-center position-relative overflow-hidden d-inline-block w-100",style:{height:150},children:[I?Object(m.jsx)("img",{src:URL.createObjectURL(I),className:"w-100 h-100 img-thumbnail"}):Object(m.jsx)("div",{className:"text-muted bg-white",style:{fontSize:50},children:"+"}),Object(m.jsx)("input",{type:"file",onChange:function(e){N(e.target.files[0])},className:"position-absolute top-0 left-0 opacity-0 w-100 h-100 cursor-pointer"})]})}),Object(m.jsxs)("div",{className:"col-md-9 mt-4",children:[Object(m.jsx)(a.Form.Item,{label:"Address1",prop:"address1",children:Object(m.jsx)(a.Input,{type:"text",value:i.address1,onChange:function(e){return T("address1",e)}})}),Object(m.jsx)(a.Form.Item,{label:"Address2",prop:"address2",children:Object(m.jsx)(a.Input,{type:"text",value:i.address2,onChange:function(e){return T("address2",e)}})})]}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Construction Year",prop:"constructionYear",children:Object(m.jsx)(a.Input,{type:"date",value:i.constructionYear,onChange:function(e){return T("constructionYear",e)}})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Price",prop:"assetPrice",children:Object(m.jsx)(a.Input,{type:"number",value:i.assetPrice,onChange:function(e){return T("assetPrice",e)}})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Type",prop:"propertyType",children:Object(m.jsx)(a.Select,{className:"w-100",value:i.propertyType,onChange:function(e){return T("propertyType",e)},children:j.map((function(e){return Object(m.jsx)(a.Select.Option,{value:e.key,label:e.label,children:e.label})}))})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Bedroom/Bath",prop:"bedroomOrBath",children:Object(m.jsx)(a.Input,{type:"number",value:i.bedroomOrBath,onChange:function(e){return T("bedroomOrBath",e)}})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Square Feet",prop:"squareFeet",children:Object(m.jsx)(a.Input,{type:"number",value:i.squareFeet,onChange:function(e){return T("squareFeet",e)}})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Lot Size",prop:"lotSize",children:Object(m.jsx)(a.Input,{type:"number",value:i.lotSize,onChange:function(e){return T("lotSize",e)}})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Neighborhood",prop:"neighborhood",children:Object(m.jsx)(a.Input,{type:"text",value:i.neighborhood,onChange:function(e){return T("neighborhood",e)}})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Section 8",prop:"section8",children:Object(m.jsx)(a.Select,{className:"w-100",value:i.section8,onChange:function(e){return T("section8",e)},children:p.map((function(e){return Object(m.jsx)(a.Select.Option,{value:e.key,label:e.label,children:e.label})}))})})}),Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsx)("hr",{style:{color:"white"}})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Rent Starts From",prop:"rentStartsDate",children:Object(m.jsx)(a.Input,{type:"date",value:i.rentStartsDate,onChange:function(e){return T("rentStartsDate",e)}})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Current Status",prop:"currentStatusOfProperty",children:Object(m.jsx)(a.Select,{className:"w-100",value:i.currentStatusOfProperty,onChange:function(e){return T("currentStatusOfProperty",e)},children:h.map((function(e){return Object(m.jsx)(a.Select.Option,{value:e.key,label:e.label,children:e.label})}))})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Utilities",prop:"utility",children:Object(m.jsx)(a.Select,{className:"w-100",value:i.utility,onChange:function(e){return T("utility",e)},children:g.map((function(e){return Object(m.jsx)(a.Select.Option,{value:e.key,label:e.label,children:e.label})}))})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Maintain Reserve",prop:"initMaintainanceReserve",children:Object(m.jsx)(a.Input,{type:"number",value:i.initMaintainanceReserve,onChange:function(e){return T("initMaintainanceReserve",e)}})})}),Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsx)("hr",{style:{color:"white"}})}),Object(m.jsx)("div",{className:"col-md-6 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Monthly Gross Rent",prop:"monthlyGrossRent",children:Object(m.jsx)(a.Input,{type:"number",value:i.monthlyGrossRent,onChange:function(e){return T("monthlyGrossRent",e)}})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Tax",prop:"tax",children:Object(m.jsx)(a.Input,{type:"number",value:i.tax,onChange:function(e){return T("tax",e)}})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Insurance",prop:"insuranceFee",children:Object(m.jsx)(a.Input,{type:"number",value:i.insuranceFee,onChange:function(e){return T("insuranceFee",e)}})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Fee",prop:"fee",children:Object(m.jsx)(a.Input,{type:"number",value:i.fee,onChange:function(e){return T("fee",e)}})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Monthly Cost",prop:"monthlyCosts",children:Object(m.jsx)(a.Input,{type:"number",value:i.monthlyCosts,onChange:function(e){return T("monthlyCosts",e)},disabled:!0})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Property Manage Fee",prop:"propertyManagementFee",children:Object(m.jsx)(a.Input,{type:"text",value:i.propertyManagementFee,onChange:function(e){return T("propertyManagementFee",e)},disabled:!0})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Platform Fee",prop:"platformFee",children:Object(m.jsx)(a.Input,{type:"text",value:i.platformFee,onChange:function(e){return T("platformFee",e)},disabled:!0})})}),Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsx)("hr",{style:{color:"white"}})}),Object(m.jsx)("div",{className:"col-md-6 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Token Amount",prop:"generatedToken",children:Object(m.jsx)(a.Input,{type:"number",value:i.generatedToken,onChange:function(e){return T("generatedToken",e)}})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Month Rent Per Token",prop:"monthlyRentPerToken",children:Object(m.jsx)(a.Input,{type:"number",value:i.monthlyRentPerToken,onChange:function(e){return T("monthlyRentPerToken",e)},disabled:!0})})}),Object(m.jsx)("div",{className:"col-md-3 mt-4",children:Object(m.jsx)(a.Form.Item,{label:"Token Value",prop:"tokenValue",children:Object(m.jsx)(a.Input,{type:"number",value:i.tokenValue,onChange:function(e){return T("tokenValue",e)},disabled:!0})})})]})]}),Object(m.jsx)(a.Form.Item,{style:{textAlign:"center"},children:Object(m.jsx)(a.Button,{type:"primary",nativeType:"submit",onClick:function(e){e.preventDefault(),f.current.validate((function(e){var t=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,n=new FormData;n.append("img",I,I.name),Object(d.d)("/api/admin/image/upload",n,t).then((function(e){console.log("[Image Uploaded]",e);var t=Object.assign({},i);t.imageData=[e.data.imgPath],x(Object(u.a)(t)),O.push("/admin/properties")})).catch((function(e){console.log("[Image Upload Fail]",e)}))}))},children:"Create"})})]})})})})}},420:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n(41),l=n(419),s=n(107),a=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,i=function(e){return function(t){Object(l.d)("/api/admin/property",e,a).then((function(n){s.Notification.success({title:"Success",message:"House Properties Submit Success!",type:"success"}),t({type:r.a,payload:e})})).catch((function(e){console.log(e),s.Notification.error({title:"Failed",message:"Please try again.",type:"Warning"})}))}},o=function(e){return function(t){return Object(l.c)("/api/property?count=".concat(e)).then((function(e){for(var n=e.data,l=0;l<n.length;l++)n[l].monthlyNetRent=n[l].monthlyGrossRent-n[l].monthlyCosts,n[l].yearlyNetRent=12*(n[l].monthlyGrossRent-n[l].monthlyCosts),n[l].totalInvestment=n[l].generatedToken*n[l].tokenValue,n[l].expectedYield=12*(n[l].monthlyGrossRent-n[l].monthlyCosts)/(n[l].generatedToken*n[l].tokenValue),n[l].imageData=n[l].imageData.split(",");t({type:r.d,payload:n})})).catch((function(e){t({type:r.e})}))}},c=function(e){return function(t){return Object(l.c)("/api/property/id?ID=".concat(e)).then((function(e){var n=e.data;return n.monthlyGrossRent=n.monthlyGrossRent,n.monthlyNetRent=n.monthlyGrossRent-n.monthlyCosts,n.yearlyNetRent=12*(n.monthlyGrossRent-n.monthlyCosts),n.totalInvestment=n.generatedToken*n.tokenValue,n.expectedYield=12*(n.monthlyGrossRent-n.monthlyCosts)/parseFloat(n.generatedToken*n.tokenValue),n.imageData=n.imageData.split(","),t({type:r.b,payload:n})})).catch((function(e){return t({type:r.c})}))}}}}]);
//# sourceMappingURL=33.da9eaa8c.chunk.js.map