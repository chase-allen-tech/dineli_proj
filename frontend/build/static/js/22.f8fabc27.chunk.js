(this.webpackJsonpdineli=this.webpackJsonpdineli||[]).push([[22],{1083:function(e,t,a){"use strict";a.r(t);var c=a(63),l=a(64),s=a(114),n=a(66),i=a(65),o=a(1),r=a(107),d=a(433),b=(a(741),a(9)),j=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(c.a)(this,a),(l=t.call(this,e)).state={key:"dashboard",options:[{value:"Option1",label:"Calculate total capital"},{value:"Option1",label:"Calculate total capital"},{value:"Option1",label:"Calculate total capital"}],options1:[{value:"Option1",label:"chaque mois"},{value:"Option1",label:"chaque mois"},{value:"Option1",label:"chaque mois"}],value:""},l.handleSelect=l.handleSelect.bind(Object(s.a)(l)),l}return Object(l.a)(a,[{key:"handleSelect",value:function(e){this.setState({key:e})}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"img-box img-box-calculator",children:Object(b.jsx)("div",{className:"d-white d-font-black d-text-90",style:{marginBottom:"25%"}})}),Object(b.jsx)(r.Layout.Row,{children:Object(b.jsx)(r.Layout.Col,{span:"24",children:Object(b.jsx)("div",{className:"grid-content bg-purple-dark",children:Object(b.jsx)("div",{className:"d-white d-font-black d-text-90 text-center",style:{marginTop:"2%"},children:"Savings calculator"})})})}),Object(b.jsx)("div",{style:{margin:"6% 15% 0% 15%"},children:Object(b.jsxs)(d.a,{striped:!0,bordered:!0,hovers:!0,className:"calculator-table d-font-book",children:[Object(b.jsx)("thead",{style:{backgroundColor:"#03ffa4",margin:"5% 2% 0% 5%"},children:Object(b.jsx)("tr",{children:Object(b.jsxs)("th",{colSpan:2,children:[Object(b.jsx)("img",{src:"imgs/calculator/calculator.png",alt:"calculator",style:{marginLeft:"1%"}}),Object(b.jsx)(r.Select,{className:"d-font-book d-text-18",value:this.state.value,style:{width:"85%",margin:"1% 0% 1% 2%"},children:this.state.options.map((function(e){return Object(b.jsx)(r.Select.Option,{label:e.label,value:e.value},e.value)}))})]})})}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{backgroundColor:"RGB(51, 69, 77)",textAlign:"right",paddingTop:"2%",width:"50%"},className:"d-white",children:"Starting placement:"}),Object(b.jsxs)("td",{style:{width:"50%"},children:[Object(b.jsx)(r.Input,{style:{width:"50%"}}),Object(b.jsx)("span",{className:"icon-euro d-highlight d-font-book",children:" \u20ac"})]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{backgroundColor:"RGB(51, 69, 77)",textAlign:"right",paddingTop:"2%"},className:"d-white",children:"Periodic savings:"}),Object(b.jsxs)("td",{children:[Object(b.jsx)(r.Input,{style:{width:"50%"}}),Object(b.jsxs)("span",{className:"icon-euro d-highlight d-font-book",children:[" \u20ac",Object(b.jsx)(r.Select,{className:"d-font-book",value:this.state.value,style:{width:"40%"},children:this.state.options1.map((function(e){return Object(b.jsx)(r.Select.Option,{label:e.label,value:e.value},e.value)}))})]})]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{backgroundColor:"RGB(51, 69, 77)",textAlign:"right",paddingTop:"2%"},className:"d-white",children:"Duration of placement:"}),Object(b.jsxs)("td",{children:[Object(b.jsx)(r.Input,{style:{width:"50%"}}),Object(b.jsx)("span",{className:"icon-euro d-highlight d-font-book",children:" ann\xe9es"})]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{backgroundColor:"RGB(51, 69, 77)",textAlign:"right",paddingTop:"2%"},className:"d-white",children:"Expected annual rate of return:"}),Object(b.jsxs)("td",{children:[Object(b.jsx)(r.Input,{style:{width:"50%"}}),Object(b.jsx)("span",{className:"icon-euro d-highlight d-font-book",children:" %"})]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{backgroundColor:"RGB(51, 69, 77)",textAlign:"right",paddingTop:"2%"},className:"d-white",children:"Total capital:"}),Object(b.jsxs)("td",{children:[Object(b.jsx)(r.Input,{style:{width:"50%"}}),Object(b.jsx)("span",{className:"icon-euro d-highlight d-font-book",children:" \u20ac"})]})]}),Object(b.jsx)("tr",{children:Object(b.jsxs)("td",{colSpan:2,className:"text-center",children:[Object(b.jsx)(r.Button,{className:"d-font-book d-content-highlight d-black",style:{marginLeft:"6%",color:"#000000"},type:"success",children:"Calculate"}),Object(b.jsx)(r.Button,{className:"d-font-book d-white",style:{backgroundColor:"RGB(51, 69, 77)"},type:"success",children:"New Calculation"})]})}),Object(b.jsx)("tr",{style:{borderColor:"black"},children:"."}),Object(b.jsx)("tr",{style:{borderColor:"black"},children:Object(b.jsxs)("td",{colSpan:2,children:[Object(b.jsx)("span",{className:"d-highlight d-font-bold d-text-48",children:"Three possible options"}),Object(b.jsxs)("span",{className:"d-white d-font-book",children:[Object(b.jsx)("br",{}),"You can",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"calculate the capital at term that you will have at the end of your savings plan (click on \u201ccalculate total capital\u201d.",Object(b.jsx)("br",{}),"But if you know how much capital you will need in X years, you can, knowing how much you can save per month",Object(b.jsx)("br",{}),"or year,",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),'calculate the initial capital you need, (click on "calculate the initial',Object(b.jsx)("br",{}),'payment" or, knowing how much you can',Object(b.jsx)("br",{}),"save today,",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"calculate the amount of periodic savings you can build.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("span",{className:"d-highlight d-font-book text-decoration-underline",children:["The main savings products [complete file]",Object(b.jsx)("br",{})]})]})})]})]})})]})}}]),a}(o.Component);t.default=j},433:function(e,t,a){"use strict";var c=a(10),l=a(14),s=a(67),n=a.n(s),i=a(1),o=a.n(i),r=a(108),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],b=o.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,i=e.striped,b=e.bordered,j=e.borderless,h=e.hover,u=e.size,x=e.variant,O=e.responsive,p=Object(l.a)(e,d),g=Object(r.a)(a,"table"),m=n()(s,g,x&&g+"-"+x,u&&g+"-"+u,i&&g+"-striped",b&&g+"-bordered",j&&g+"-borderless",h&&g+"-hover"),v=o.a.createElement("table",Object(c.a)({},p,{className:m,ref:t}));if(O){var y=g+"-responsive";return"string"===typeof O&&(y=y+"-"+O),o.a.createElement("div",{className:y},v)}return v}));t.a=b},741:function(e,t,a){}}]);
//# sourceMappingURL=22.f8fabc27.chunk.js.map