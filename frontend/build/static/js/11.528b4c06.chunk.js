(this.webpackJsonpdineli=this.webpackJsonpdineli||[]).push([[11],{1094:function(e,t,n){"use strict";n.r(t);var a=n(432),s=n.n(a),i=n(449),r=n(419),c=n(1),o=n(106),u=n(109),l=n.n(u),d=n(433),p=n(1106),y=n(66),m=n(108),b=n(458),f=n(490),j=n(492),h=n(9);t.default=function(e){var t,n,a,u,x=Object(m.c)(),v=Object(c.useState)(-1),O=Object(r.a)(v,2),g=O[0],T=O[1],w=Object(m.d)((function(e){return e.user.userData})),N=Object(m.d)((function(e){return e.token.tokenData})),A=Object(m.d)((function(e){return e.credential.credentialData}));Object(c.useEffect)((function(){x(Object(b.b)()),x(Object(f.b)())}),[]);var k=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),T(-1),i={fromAddress:t.target.fromAddress.value,toAddress:t.target.toAddress.value,tokenAddress:t.target.tokenAddress.value,tokenAmount:t.target.tokenAmount.value,chainId:42},e.next=5,Object(j.a)(null===(n=A[0])||void 0===n?void 0:n.infuraProjectEndpoint,null===(a=A[0])||void 0===a?void 0:a.walletPrivateKey,i.fromAddress,i.toAddress,i.tokenAddress,i.tokenAmount,i.chainId);case 5:e.sent.success?o.Notification.success({title:"Success",message:"Transaction Success!",type:"success"}):o.Notification.error({title:"Failed",message:"Transaction failed. Please try again!",type:"Warning"});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center overflow-hidden",children:[Object(h.jsx)("div",{style:{width:"80%"},children:Object(h.jsxs)(l.a,{bottom:!0,delay:200,children:[Object(h.jsx)("h1",{style:{textAlign:"center"},className:"d-font-bold d-text-90 d-white",children:"Users"}),Object(h.jsx)("div",{className:"d-flex",children:Object(h.jsx)(y.b,{to:"/admin/users/new",className:"ms-auto",children:Object(h.jsx)(o.Button,{type:"outlined",children:"New User"})})}),Object(h.jsxs)("div",{className:"login-ruleForm mt-4",labelposition:"top",style:{border:"2px solid #03ffa4",borderRadius:"10px 10px 0 0"},children:[Object(h.jsx)(o.Layout.Row,{style:{fontSize:25,margin:"-1px 0px 0 0px"},children:Object(h.jsx)(o.Layout.Col,{span:"24",children:Object(h.jsxs)("div",{className:"grid-content d-content-highlight d-flex",style:{borderRadius:"10px 10px 1px 1px"},children:[Object(h.jsx)("div",{className:"ms-3",children:"List"}),Object(h.jsx)("div",{className:"ms-auto me-3 d-flex align-items-center",children:Object(h.jsx)("img",{src:"imgs/logo3.png",alt:"logo",style:{height:"35px"}})})]})})}),Object(h.jsx)("div",{className:"w-100 overflow-auto",children:Object(h.jsxs)(d.a,{striped:!0,hover:!0,variant:"dark",style:{margin:0},className:"text-center",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"bg-secondary",children:"#"}),Object(h.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Email"}),Object(h.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Wallet Address"}),Object(h.jsx)("th",{className:"bg-secondary",style:{minWidth:130},children:"Role"})]})}),Object(h.jsx)("tbody",{children:w.map((function(e,t){return Object(h.jsxs)("tr",{onClick:function(){return T(t)},style:{cursor:"pointer"},children:[Object(h.jsx)("td",{children:t+1}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:e.walletAddress}),Object(h.jsx)("td",{children:e.role[0]})]},t)}))})]})})]})]})}),Object(h.jsxs)(p.a,{show:g>=0,onHide:function(){return T(-1)},children:[Object(h.jsx)(p.a.Header,{children:Object(h.jsx)(p.a.Title,{children:"Transfer Token"})}),Object(h.jsx)(p.a.Body,{children:Object(h.jsxs)("form",{onSubmit:k,children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"From:"})," ",null===(t=A[0])||void 0===t?void 0:t.walletPublicKey]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"To:"})," ",null===(n=w[g])||void 0===n?void 0:n.walletAddress]}),Object(h.jsx)("input",{name:"fromAddress",value:(null===(a=A[0])||void 0===a?void 0:a.walletPublicKey)||"",hidden:!0,readOnly:!0}),Object(h.jsx)("input",{name:"toAddress",value:(null===(u=w[g])||void 0===u?void 0:u.walletAddress)||"",hidden:!0,readOnly:!0})]}),Object(h.jsxs)("div",{className:"form-group mt-2",children:[Object(h.jsx)("label",{children:"Token:"}),Object(h.jsx)("select",{className:"form-select",name:"tokenAddress",children:null===N||void 0===N?void 0:N.map((function(e,t){return Object(h.jsx)("option",{value:e.tokenAddress,children:e.tokenAddress},t)}))})]}),Object(h.jsx)("div",{className:"form-group mt-3",children:Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsx)("input",{type:"number",className:"form-control",step:"any",name:"tokenAmount",required:!0,placeholder:"Input the amount to transfer"}),Object(h.jsx)("button",{type:"submit",className:"btn btn-secondary ms-2",children:"Send"})]})})]})}),Object(h.jsx)(p.a.Footer,{children:Object(h.jsx)(o.Button,{variant:"secondary",onClick:function(){return T(-1)},children:"Close"})})]})]})}},458:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var a=n(67),s=n(418),i=n(106),r=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,c=function(e){return function(t){Object(s.d)("/api/admin/user",e,r).then((function(n){i.Notification.success({title:"Success",message:"House Properties Submit Success!",type:"success"}),t({type:a.a,payload:e})})).catch((function(e){console.log(e),i.Notification.error({title:"Failed",message:"Please try again.",type:"Warning"})}))}},o=function(e){return function(t){return Object(s.c)("/api/user?count=".concat(e)).then((function(e){var n=e.data;t({type:a.b,payload:n})})).catch((function(e){t({type:a.c})}))}}},490:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var a=n(51),s=n(418),i=n(106),r=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).accessToken:null,c=function(e){return function(t){Object(s.d)("/api/admin/token",e,r).then((function(n){i.Notification.success({title:"Success",message:"House Properties Submit Success!",type:"success"}),t({type:a.a,payload:e})})).catch((function(e){console.log(e),i.Notification.error({title:"Failed",message:"Please try again.",type:"Warning"})}))}},o=function(e){return function(t){return Object(s.c)("/api/token?count=".concat(e)).then((function(e){var n=e.data;t({type:a.d,payload:n})})).catch((function(e){t({type:a.e})}))}}},492:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(432),s=n.n(a),i=n(449),r=n(525),c=n.n(r),o=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}];var u=function(){var e=Object(i.a)(s.a.mark((function e(t,n,a,i,r,u,l){var d,p,y,m,b,f,j;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=new c.a(new c.a.providers.HttpProvider(t)),p=d.utils.toHex(62e5),e.prev=2,y=new d.eth.Contract(o,r),u=d.utils.toWei(u,"ether"),m=y.methods.transfer(i,u).encodeABI(),b={gasLimit:p,to:r,data:m,chainId:l},e.next=9,d.eth.accounts.signTransaction(b,n);case 9:return f=e.sent,e.next=12,d.eth.sendSignedTransaction(f.rawTransaction);case 12:return j=e.sent,console.log("[transfer result]",j),e.abrupt("return",{success:!0,data:j});case 17:return e.prev=17,e.t0=e.catch(2),console.log("[err]",e.t0),e.abrupt("return",{success:!1});case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t,n,a,s,i,r,c){return e.apply(this,arguments)}}()},528:function(e,t){},529:function(e,t){},531:function(e,t){},532:function(e,t){},538:function(e,t){},539:function(e,t){},544:function(e,t){},545:function(e,t){},550:function(e,t){},551:function(e,t){},556:function(e,t){},557:function(e,t){},559:function(e,t){},562:function(e,t){},563:function(e,t){},565:function(e,t){},570:function(e,t){},572:function(e,t){},573:function(e,t){},575:function(e,t){}}]);
//# sourceMappingURL=11.528b4c06.chunk.js.map