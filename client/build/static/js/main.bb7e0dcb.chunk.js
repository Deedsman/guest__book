(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(12),i=c.n(a),r=(c(32),c(33),c(6)),l=c(5),o=c(7),d=c(1),u=function(e){var t=e.name,c=e.message,n=e.date;return Object(d.jsx)("div",{className:"messageBlock",children:Object(d.jsx)("div",{className:"col s12",children:Object(d.jsx)("div",{className:"card-panel grey lighten-5 z-depth-1",children:Object(d.jsxs)("div",{className:"row valign-wrapper",children:[Object(d.jsxs)("div",{className:"col s2 nameUser",children:[t," :"]}),Object(d.jsx)("div",{className:"col s10",children:Object(d.jsx)("div",{className:"black-text messageUser",children:c})}),Object(d.jsx)("div",{className:"col s2 dateUser",children:n})]})})})})},j=s.a.memo(u),b=c(3),h=c(14),m="ADD_USER",O="LOAD_USERS",p={users:[]},v=function(){return function(e){try{h.get("/api",{headers:{"Content-Type":"application/json"}}).then((function(t){var c=t.data;e({type:O,users:c})})).then((function(){console.log("list guests loaded")}))}catch(t){console.log(t)}}},x=c(27),f=function(e){var t,c,s,a,i,u=Object(x.a)(),b=u.register,m=u.handleSubmit,O=u.formState.errors,p=Object(o.c)((function(e){return e.user.users})),v=Object(n.useState)(""),f=Object(l.a)(v,2),g=f[0],y=f[1],N=Object(n.useState)(""),w=Object(l.a)(N,2),S=w[0],D=w[1],A=Object(o.b)(),E=p.map((function(e,t){return Object(d.jsx)(j,{name:e.name,message:e.text,date:e.date},e._id)})),F=function(e){var t,c=new Date,n=c.getFullYear()+"/"+c.getMonth()+"/"+c.getDate(),s={name:e.name,text:e.text,date:n};A((t={type:"ADD_USER",users:s},function(e){e(t),h.post("/api/guest",Object(r.a)({},t.users),{headers:{"Content-Type":"application/json"}}).then((function(){console.log("guest added")})).catch((function(e){console.log(e)}))})),D("")};return Object(d.jsxs)("div",{className:"row",children:[E,Object(d.jsx)("form",{className:"col s12",onSubmit:m(F),onKeyPress:function(e){"Enter"===e.code&&!0===e.ctrlKey&&m(F(e))},children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"input-field col s2",children:[Object(d.jsx)("input",Object(r.a)(Object(r.a)({},b("name",{required:!0,maxLength:20,pattern:/\w/})),{},{onChange:function(e){y(e.target.value)},id:"first_name2",type:"text",className:"validate",value:g,onKeyPress:function(e){"Enter"===e.code&&e.preventDefault()}})),"required"===(null===O||void 0===O||null===(t=O.name)||void 0===t?void 0:t.type)&&Object(d.jsx)("p",{children:"This field is required"}),"maxLength"===(null===O||void 0===O||null===(c=O.name)||void 0===c?void 0:c.type)&&Object(d.jsx)("p",{children:"First name cannot exceed 20 characters"}),"pattern"===(null===O||void 0===O||null===(s=O.name)||void 0===s?void 0:s.type)&&Object(d.jsx)("p",{children:"Alphabetical characters only"}),Object(d.jsx)("label",{className:"active",htmlFor:"first_name2",children:"Enter Name"})]}),Object(d.jsxs)("div",{className:"input-field col s8",children:[Object(d.jsx)("textarea",Object(r.a)(Object(r.a)({},b("text",{required:!0,pattern:/^[a-zA-Z0-9]+$/})),{},{id:"icon_prefix2",className:"materialize-textarea",onChange:function(e){D(e.target.value)},required:!0,rows:"5",value:S})),"required"===(null===O||void 0===O||null===(a=O.text)||void 0===a?void 0:a.type)&&Object(d.jsx)("p",{children:"This field is required"}),"pattern"===(null===O||void 0===O||null===(i=O.text)||void 0===i?void 0:i.type)&&Object(d.jsx)("p",{children:"Alphabetical characters only"}),Object(d.jsx)("label",{htmlFor:"icon_prefix2",children:"Message"})]}),Object(d.jsx)("div",{className:"input-field col s2",children:Object(d.jsx)("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",children:"Add message"})})]})})]})};var g=function(){var e=Object(o.b)();return Object(n.useEffect)((function(){e(v())}),[e]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h4",{className:"App-header",children:"Hello Guests"}),Object(d.jsx)(f,{})]})},y=c(11),N=c(25),w=c(26),S=Object(y.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(r.a)(Object(r.a)({},e),{},{users:t.users});case m:var c=t.users;return Object(r.a)(Object(r.a)({},e),{},{users:[c].concat(Object(b.a)(e.users))});default:return e}}}),D=Object(y.createStore)(S,Object(N.composeWithDevTools)(Object(y.applyMiddleware)(w.a)));window.store=D;var A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(o.a,{store:D,children:Object(d.jsx)(g,{})})}),document.getElementById("root")),A()}},[[61,1,2]]]);
//# sourceMappingURL=main.bb7e0dcb.chunk.js.map