(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/call.8fa7ae30.svg"},19:function(e,t,a){e.exports=a.p+"static/media/close-envelope.f56f05f0.svg"},20:function(e,t,a){e.exports=a.p+"static/media/dollar-symbol.87a53135.svg"},21:function(e,t,a){e.exports=a.p+"static/media/credit-cards-payment.b60864af.svg"},22:function(e,t,a){e.exports=a(52)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(17),l=a.n(c),i=(a(28),a(3)),r=a(4),o=a(6),u=a(5),m=a(7),d=(a(29),a(30),a(8)),h=a(18),p=a.n(h),f=a(19),v=a.n(f),g=a(9),E=a.n(g),N=a(2),C=a.n(N),b=a(20),k=a.n(b),y=a(21),S=a.n(y),O=(a(50),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={clientId:"",friends:"",nodes:"",nickname:"",amount:"",trans:""},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({clientId:this.props.user._id}),this.getFriends(),this.getTransactions(),this.getNodes()}},{key:"getFriends",value:function(){var e=this;C.a.get("/api/user/getallusers").then(function(t){e.setState({friends:t.data.users})})}},{key:"getTransactions",value:function(){var e=this;C.a.get("/api/users/".concat(this.state.clientId,"/getusertrans")).then(function(t){e.setState({trans:t.data.trans})})}},{key:"makeTransaction",value:function(){var e=this,t=this.state,a=t.toNodeId,n=t.nodeId,s=t.amount;a!==n?C.a.post("/api/users/".concat(this.state.clientId,"/createtrans"),{toNodeId:a,nodeId:n,amount:s}).then(function(t){e.getTransactions(),e.setState({amount:""})}):alert("Not Allowed to Send Money to the Same Account")}},{key:"getNodes",value:function(){var e=this;C.a.get("/api/users/".concat(this.state.clientId,"/getallnodes")).then(function(t){e.setState({nodes:t.data.nodes})})}},{key:"createNode",value:function(){var e=this;this.state.nickname.length&&C.a.post("/api/users/".concat(this.state.clientId,"/createnode"),{accountName:this.state.nickname}).then(function(){e.setState({nickname:""}),e.getNodes()})}},{key:"handleChange",value:function(e,t){this.setState(Object(d.a)({},e,t.target.value))}},{key:"getPayToNodes",value:function(e){var t=this;C.a.get("/api/users/".concat(e,"/getallnodes")).then(function(e){t.setState({accounts:e.data.nodes})})}},{key:"render",value:function(){var e=this,t=this.state.friends&&this.state.friends.map(function(t){if(t.documents.length)return s.a.createElement("div",{className:"friendsBox",key:t._id,onClick:function(){return e.getPayToNodes(t._id)}},s.a.createElement("p",null,t.legal_names[0]),s.a.createElement("img",{className:"friendIcon",src:E.a,alt:""}))}),a=this.state.accounts&&this.state.accounts.map(function(e){return s.a.createElement("option",{value:e._id,key:e._id},e.info.nickname)}),n=this.state.nodes?this.state.nodes.map(function(e){return s.a.createElement("div",{className:"accountName"},s.a.createElement("img",{src:S.a,alt:"",width:"15px",className:"creditCards"}),e.info.nickname)}):s.a.createElement("div",null,"No Accounts"),c=this.state.nodes?this.state.nodes.map(function(e){return s.a.createElement("option",{value:e._id},e.info.nickname)}):s.a.createElement("option",null,"No Accounts"),l=this.state.trans&&this.state.trans.map(function(e){return s.a.createElement("div",{className:"history"},s.a.createElement("div",{className:"completedTrans"},s.a.createElement("p",null,e.from.nickname),s.a.createElement("p",null,e.amount.amount," ",e.amount.currency),s.a.createElement("p",null,e.to.user.legal_names[0]," (",e.to.nickname,")")),s.a.createElement("p",{className:"id"},"ID ",e._id))});return this.props.user._id?s.a.createElement("div",{className:"Dashboard"},s.a.createElement("div",{className:"account"},s.a.createElement("h2",null,"YOUR ACCOUNTS"),n,s.a.createElement("div",{className:"new"},"To Create A New Account:",s.a.createElement("input",{placeholder:"Account Name",value:this.state.nickname,onChange:function(t){return e.handleChange("nickname",t)}})),s.a.createElement("button",{className:"createAccount",onClick:function(){return e.createNode()}},"Create an Account")),s.a.createElement("div",{className:"transaction"},s.a.createElement("div",{className:"payment"},s.a.createElement("button",{className:"sendMoney",onClick:function(){return e.makeTransaction()}},"Send To"),s.a.createElement("div",{className:"select"},s.a.createElement("select",{onChange:function(t){return e.setState({toNodeId:t.target.value})}},s.a.createElement("option",{value:"None"},this.state.accounts?"SELECT ACCOUNT":"CLICK USER TO PAY"),s.a.createElement("option",{value:"5c86c1a64b7ba9102a5d13b4"},"TEST ACCOUNT"),a)),s.a.createElement("div",null,s.a.createElement("img",{className:"money",src:k.a,alt:""}),s.a.createElement("input",{className:"dollarAmount",placeholder:"USD",value:this.state.amount,onChange:function(t){return e.handleChange("amount",t)}})),s.a.createElement("div",null,"From"),s.a.createElement("div",{className:"select"},s.a.createElement("select",{onChange:function(t){return e.setState({nodeId:t.target.value})}},s.a.createElement("option",{value:"None"},"Select Your Account"),c))),s.a.createElement("div",{className:"transactionHistory"},s.a.createElement("div",{className:"title"},"H I S T O R Y"),l)),s.a.createElement("div",{className:"friendsContainer"},s.a.createElement("div",{className:"friends"},s.a.createElement("h1",null,"CLICK USER TO PAY"),s.a.createElement("div",{className:"pushH1"},t)))):s.a.createElement("div",null,"loading...")}}]),t}(n.Component)),I=(a(51),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={user:"",fullName:"",email:"",phone:"",loading:"Create User"},e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e,t){this.setState(Object(d.a)({},e,t.target.value))}},{key:"createUser",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.fullName,s=a.email,c=a.phone;this.setState({loading:"loading..."}),C.a.post("/api/user/createuser",{name:n,email:s,phoneNumbers:c}).then(function(e){t.setState({user:e.data.body})}).catch(function(e){return t.setState({err:"first and last? vaild email (or test@test.com)? and vaild phone (or 901.111.1111)?",loading:"Create User"})})}},{key:"render",value:function(){var e=this;return console.log(this.state),this.state.user?s.a.createElement(O,{user:this.state.user}):s.a.createElement("div",{className:"Login"},s.a.createElement("img",{className:"loginLogo",src:"https://lever-client-logos.s3.amazonaws.com/16dff1b6-769e-4d60-9543-f53b90cdc26a-1548987132030.png",alt:""}),s.a.createElement("div",{className:"loginInputs"},this.state.err&&s.a.createElement("p",null,this.state.err),s.a.createElement("form",{className:"loginForm",onSubmit:function(t){return e.createUser(t)}},s.a.createElement("div",null,s.a.createElement("img",{className:"logo profile",src:E.a,alt:""}),s.a.createElement("input",{className:"logininput",placeholder:"Full Name",onChange:function(t){return e.handleChange("fullName",t)}})),s.a.createElement("div",null,s.a.createElement("img",{className:"logo mail",src:v.a,alt:""}),s.a.createElement("input",{className:"logininput",placeholder:"Email",type:"email",onChange:function(t){return e.handleChange("email",t)}})),s.a.createElement("div",null,s.a.createElement("img",{className:"logo phone",src:p.a,alt:""}),s.a.createElement("input",{className:"logininput",placeholder:"Phone Number",type:"tel",onChange:function(t){return e.handleChange("phone",t)}})),s.a.createElement("input",{className:"createUser",id:"UX",type:"submit",value:this.state.loading}))))}}]),t}(n.Component)),T=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(I,null))}}]),t}(n.Component);l.a.render(s.a.createElement(T,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/man-user.2e1cb196.svg"}},[[22,1,2]]]);
//# sourceMappingURL=main.a1a04d46.chunk.js.map