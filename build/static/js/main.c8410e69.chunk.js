(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{139:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(35),n=s.n(a),r=(s(82),s(83),s(5)),i=s(3),l=s.n(i),o=s(9),d=s(4),j=s(10),b=s(0),u=function(){return Object(b.jsx)("div",{className:"page-loader-wrapper",children:Object(b.jsxs)("div",{className:"loader",children:[Object(b.jsx)("div",{className:"m-t-30",children:Object(b.jsx)("img",{className:"zmdi-hc-spin",src:"/assets/images/logo.svg",width:"48",height:"48",alt:"Compass"})}),Object(b.jsx)("p",{children:"Please wait..."})]})})},m=s(72),h=s.n(m),O=s(12),p=Object(O.a)(),x=h.a.create({baseURL:"http://localhost:4000/api",headers:{"content-type":"application/json"}});x.interceptors.request.use((function(e){var t=localStorage.getItem("access_token");return e.headers.Authorization="Bearer "+t,e}),(function(e){Promise.reject(e)})),x.interceptors.response.use((function(e){return e}),(function(e){var t;return 401===(null===(t=e.response)||void 0===t?void 0:t.status)&&p.push("/login"),Promise.reject(e)}));var f,v=x,g=s(38),N=s(8),w=function(e){var t=e.children;return Object(b.jsxs)("div",{children:[Object(b.jsx)(g.a,{children:Object(b.jsx)("link",{rel:"stylesheet",href:"assets/css/authentication.css"})}),Object(b.jsx)("nav",{className:"navbar navbar-expand-lg fixed-top navbar-transparent bg-transparent",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"navbar-translate n_logo",children:Object(b.jsxs)("button",{className:"navbar-toggler",type:"button",children:[Object(b.jsx)("span",{className:"navbar-toggler-bar bar1"}),Object(b.jsx)("span",{className:"navbar-toggler-bar bar2"}),Object(b.jsx)("span",{className:"navbar-toggler-bar bar3"})]})}),Object(b.jsx)("div",{className:"navbar-collapse",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsxs)("span",{className:"nav-link",title:"Follow us on Google",children:[Object(b.jsx)("i",{className:"zmdi zmdi-google"}),Object(b.jsx)("p",{className:"d-lg-none d-xl-none",children:"Google"})]})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsxs)("span",{className:"nav-link",title:"Like us on Facebook",children:[Object(b.jsx)("i",{className:"zmdi zmdi-facebook"}),Object(b.jsx)("p",{className:"d-lg-none d-xl-none",children:"Facebook"})]})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsxs)("span",{className:"nav-link",title:"Follow us on Github",children:[Object(b.jsx)("i",{className:"zmdi zmdi-github"}),Object(b.jsx)("p",{className:"d-lg-none d-xl-none",children:"Github"})]})})]})})]})}),Object(b.jsxs)("div",{className:"page-header",children:[Object(b.jsx)("div",{className:"page-header-image",style:{backgroundImage:"url(assets/images/login.jpg)"}}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"col-md-12 content-center",children:Object(b.jsx)("div",{className:"card-plain",children:t})})}),Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"copyright",children:Object(b.jsxs)("span",{children:["App Chat ",Object(b.jsx)(N.a,{to:"/",children:"K\u1ef3 Smile"})]})})})})]})]})},y=function(e){var t=Object(j.c)((function(e){return e.auth.user})),s=window.location.pathname;return Object(b.jsxs)("aside",{id:"leftsidebar",className:"sidebar",children:[Object(b.jsx)("div",{className:"menu",children:Object(b.jsxs)("ul",{className:"list",children:[Object(b.jsx)("li",{style:{margin:"20px 0px 40px 0px"},children:Object(b.jsxs)("div",{className:"user-info",children:[Object(b.jsx)("div",{className:"image",children:Object(b.jsx)("a",{href:"profile.html",children:Object(b.jsx)("img",{src:null===t||void 0===t?void 0:t.avatar,alt:"User"})})}),Object(b.jsx)("div",{className:"detail",style:{margin:"10px 0px 20px 0px"},children:Object(b.jsx)("h5",{children:null===t||void 0===t?void 0:t.username})})]})}),Object(b.jsx)("li",{className:s.includes("chat")?"active":"",children:Object(b.jsxs)(N.a,{to:"/",children:[Object(b.jsx)("i",{className:"zmdi zmdi-comments"}),Object(b.jsx)("span",{children:"Chat"})]})}),Object(b.jsx)("li",{className:s.includes("password")?"active":"",children:Object(b.jsxs)(N.a,{to:"/change-password",children:[Object(b.jsx)("i",{className:"zmdi zmdi-account-box-phone"}),Object(b.jsx)("span",{children:"Change Password"})]})})]})}),Object(b.jsxs)("span",{className:"life",children:["App Chat \xa0",Object(b.jsx)("i",{className:"fa fa-heart-o"}),"\xa0 K\u1ef3 Smile"]})]})},z=function(){var e=Object(r.f)();return Object(b.jsx)("nav",{className:"navbar",children:Object(b.jsxs)("div",{className:"col-12",children:[Object(b.jsx)("ul",{className:"nav navbar-nav navbar-left",children:Object(b.jsx)("li",{children:Object(b.jsx)("a",{className:"toggle-left-side",children:Object(b.jsx)("i",{className:"zmdi zmdi-swap"})})})}),Object(b.jsxs)("ul",{className:"nav navbar-nav navbar-right",children:[Object(b.jsxs)("li",{className:"dropdown",children:[Object(b.jsxs)("a",{className:"dropdown-toggle","data-toggle":"dropdown",role:"button",children:[Object(b.jsx)("i",{className:"zmdi zmdi-notifications"}),Object(b.jsxs)("div",{className:"notify",children:[Object(b.jsx)("span",{className:"heartbit"}),Object(b.jsx)("span",{className:"point"})]})]}),Object(b.jsxs)("ul",{className:"dropdown-menu dropdown-menu-right slideDown",children:[Object(b.jsx)("li",{className:"header",children:"NOTIFICATIONS"}),Object(b.jsx)("li",{className:"body",children:Object(b.jsxs)("ul",{className:"menu list-unstyled",children:[Object(b.jsxs)("li",{children:[" ",Object(b.jsxs)("a",{children:[Object(b.jsx)("div",{className:"icon-circle bg-blue",children:Object(b.jsx)("i",{className:"zmdi zmdi-account"})}),Object(b.jsxs)("div",{className:"menu-info",children:[Object(b.jsx)("h4",{children:"8 New Members joined"}),Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"zmdi zmdi-time"})," 14 mins ago "]})]})]})," "]}),Object(b.jsxs)("li",{children:[" ",Object(b.jsxs)("a",{children:[Object(b.jsx)("div",{className:"icon-circle bg-amber",children:Object(b.jsx)("i",{className:"zmdi zmdi-shopping-cart"})}),Object(b.jsxs)("div",{className:"menu-info",children:[Object(b.jsx)("h4",{children:"4 Sales made"}),Object(b.jsxs)("p",{children:[" ",Object(b.jsx)("i",{className:"zmdi zmdi-time"})," 22 mins ago "]})]})]})," "]}),Object(b.jsxs)("li",{children:[" ",Object(b.jsxs)("a",{children:[Object(b.jsx)("div",{className:"icon-circle bg-red",children:Object(b.jsx)("i",{className:"zmdi zmdi-delete"})}),Object(b.jsxs)("div",{className:"menu-info",children:[Object(b.jsxs)("h4",{children:[Object(b.jsx)("b",{children:"Nancy Doe"})," Deleted account"]}),Object(b.jsxs)("p",{children:[" ",Object(b.jsx)("i",{className:"zmdi zmdi-time"})," 3 hours ago "]})]})]})," "]}),Object(b.jsxs)("li",{children:[" ",Object(b.jsxs)("a",{children:[Object(b.jsx)("div",{className:"icon-circle bg-green",children:Object(b.jsx)("i",{className:"zmdi zmdi-edit"})}),Object(b.jsxs)("div",{className:"menu-info",children:[Object(b.jsxs)("h4",{children:[Object(b.jsx)("b",{children:"Nancy"})," Changed name"]}),Object(b.jsxs)("p",{children:[" ",Object(b.jsx)("i",{className:"zmdi zmdi-time"})," 2 hours ago "]})]})]})," "]}),Object(b.jsxs)("li",{children:[" ",Object(b.jsxs)("a",{children:[Object(b.jsx)("div",{className:"icon-circle bg-grey",children:Object(b.jsx)("i",{className:"zmdi zmdi-comment-text"})}),Object(b.jsxs)("div",{className:"menu-info",children:[Object(b.jsxs)("h4",{children:[Object(b.jsx)("b",{children:"John"})," Commented your post"]}),Object(b.jsxs)("p",{children:[" ",Object(b.jsx)("i",{className:"zmdi zmdi-time"})," 4 hours ago "]})]})]})," "]}),Object(b.jsxs)("li",{children:[" ",Object(b.jsxs)("a",{children:[Object(b.jsx)("div",{className:"icon-circle bg-purple",children:Object(b.jsx)("i",{className:"zmdi zmdi-refresh"})}),Object(b.jsxs)("div",{className:"menu-info",children:[Object(b.jsxs)("h4",{children:[Object(b.jsx)("b",{children:"John"})," Updated status"]}),Object(b.jsxs)("p",{children:[" ",Object(b.jsx)("i",{className:"zmdi zmdi-time"})," 3 hours ago "]})]})]})," "]}),Object(b.jsxs)("li",{children:[" ",Object(b.jsxs)("a",{children:[Object(b.jsx)("div",{className:"icon-circle bg-light-blue",children:Object(b.jsx)("i",{className:"zmdi zmdi-settings"})}),Object(b.jsxs)("div",{className:"menu-info",children:[Object(b.jsx)("h4",{children:"Settings Updated"}),Object(b.jsxs)("p",{children:[" ",Object(b.jsx)("i",{className:"zmdi zmdi-time"})," Yesterday "]})]})]})]})]})}),Object(b.jsxs)("li",{className:"footer",children:[" ",Object(b.jsx)("a",{children:"View All Notifications"})," "]})]})]}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{onClick:function(){localStorage.removeItem("access_token"),e.push("/login")},className:"mega-menu","data-close":"true",children:Object(b.jsx)("i",{className:"zmdi zmdi-power"})})})]})]})})},S=function(e){var t=e.children;return Object(b.jsxs)("div",{className:"main-default",children:[Object(b.jsx)(y,{}),Object(b.jsx)("div",{className:"main-default__top",children:Object(b.jsx)(z,{})}),Object(b.jsx)("div",{className:"main-default__bottom",children:t}),Object(b.jsx)(g.a,{children:Object(b.jsx)("link",{rel:"stylesheet",href:"/assets/css/chatapp.css"})})]})},k="FETCH_USER",_="LOGOUT_USER",E="LOGIN",C="UPDATE_USER_ONLINES";!function(e){e[e.AUTH=0]="AUTH",e[e.DEFAULT=1]="DEFAULT"}(f||(f={}));var P,R=function(e){var t=Object(j.b)(),s=Object(c.useState)(!0),a=Object(d.a)(s,2),n=a[0],i=a[1],m=function(){var e=Object(o.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/users/fetch-current-user");case 2:s=e.sent,t((c=s.data,{type:k,payload:{user:c}})),i(!1);case 5:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(c.useEffect)((function(){e.isAuth&&m()}),[]),n&&e.isAuth)return Object(b.jsx)(u,{});var h=function(){return Object(b.jsx)(r.a,{exact:e.exact,path:e.path,component:e.component})};switch(e.layout){case f.AUTH:return Object(b.jsx)(w,{children:Object(b.jsx)(h,{})});case f.DEFAULT:default:return Object(b.jsx)(S,{children:Object(b.jsx)(h,{})})}},A=s(2);!function(e){e[e.SUCCESS=0]="SUCCESS",e[e.ERROR=1]="ERROR"}(P||(P={}));var T=function(e){var t=e.type,s=e.message,a=e.isShow,n=e.onClose;return Object(c.useEffect)((function(){return a&&document.body.classList.add("open__popup"),function(){document.body.classList.remove("open__popup")}}),[a]),Object(b.jsxs)("div",{className:"popup center"+(a?" active":""),children:[Object(b.jsx)("div",{className:"icon "+(t===P.SUCCESS?"":"error"),children:Object(b.jsx)("i",{className:"fa fa-times"})}),Object(b.jsx)("div",{className:"title",children:t===P.SUCCESS?"Success!!":"Error!!"}),Object(b.jsx)("div",{className:"description",children:s}),Object(b.jsx)("div",{className:"dismiss-btn",children:Object(b.jsx)("button",{className:"btn",id:"dismiss-popup-btn",onClick:function(){return n?n(!a):null},children:"Close"})})]})};T.defaultProps={message:"asdasdasd"};var U=s(20),I=function(){var e=Object(r.f)(),t=Object(c.useState)(!0),s=Object(d.a)(t,2),a=s[0];s[1];return Object(c.useEffect)((function(){function t(){return(t=Object(o.a)(l.a.mark((function t(){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("/users/last-user");case 2:s=t.sent,e.push("/chat/"+s.data[0]._id);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),a?Object(b.jsx)(u,{}):Object(b.jsx)("div",{children:"chat"})},L=s(21),F=s.p+"static/media/loading_black.503bde28.gif",D=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!1),i=Object(d.a)(n,2),u=i[0],m=(i[1],Object(j.c)((function(e){return e.auth.user}))),h=Object(r.g)(),O=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={fromId:null===m||void 0===m?void 0:m._id,toId:h.id,content:s},e.next=3,v.post("/messages",t);case 3:a("");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"input-group p-t-15",children:[Object(b.jsx)("input",{type:"text",className:"form-control",name:"content",value:s,onChange:function(e){return a(e.target.value)},onKeyUp:function(e){return function(e){"Enter"===e.key&&O()}(e)},placeholder:"Enter text here..."}),Object(b.jsx)("span",{className:"input-group-addon",style:{cursor:"pointer"},onClick:O,children:u?Object(b.jsx)("img",{src:F,width:"22 ",height:"22",alt:""}):Object(b.jsx)("i",{className:"zmdi zmdi-mail-send"})})]})},H=s(75),G=s.n(H),B=s.p+"static/media/loading.5a284895.gif",Z=function(e){var t=e.messages,s=e.loadMore,c=Object(j.c)((function(e){return e.auth.user}));return Object(b.jsxs)("ul",{children:[s&&Object(b.jsx)("li",{style:{textAlign:"center",marginBottom:"0px"},children:Object(b.jsx)("img",{src:B,width:"30",height:"30",alt:""})}),null===t||void 0===t?void 0:t.map((function(e,t){return Object(b.jsxs)("li",{className:"clearfix",children:[Object(b.jsx)("div",{className:"message-data "+((null===c||void 0===c?void 0:c._id)===e.fromId._id?"text-right":"")}),Object(b.jsxs)("div",{className:"message-info right",children:[Object(b.jsx)("div",{className:"message-info__image",children:(null===c||void 0===c?void 0:c._id)!==e.fromId._id?Object(b.jsx)("img",{src:e.fromId.avatar,width:"30",height:"30",alt:""}):Object(b.jsx)("div",{})}),Object(b.jsxs)("div",{className:"message-info__message "+((null===c||void 0===c?void 0:c._id)===e.fromId._id?"right":""),children:[Object(b.jsx)("div",{className:"message "+((null===c||void 0===c?void 0:c._id)===e.fromId._id?"other-message right":"my-message"),children:e.content}),Object(b.jsx)("div",{className:"time",children:Object(b.jsx)("span",{className:"message-data-time",children:G()(e.created_at).locale("en").format("LLLL")})})]})]})]},t)}))]})},M=function(e){var t=e.count,s=Object(r.g)(),a=Object(c.useState)(void 0),n=Object(d.a)(a,2),i=n[0],j=n[1];return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/users/"+s.id);case 2:t=e.sent,j(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),i?Object(b.jsxs)("div",{className:"chat-header clearfix",children:[Object(b.jsx)("img",{src:null===i||void 0===i?void 0:i.avatar,alt:"avatar",width:"45",height:"45"}),Object(b.jsxs)("div",{className:"chat-about",children:[Object(b.jsx)("div",{className:"chat-with",children:(null===i||void 0===i?void 0:i.username)||""}),Object(b.jsxs)("div",{className:"chat-num-messages",children:["Already ",t||0," messages"]})]}),Object(b.jsx)("span",{className:"list_btn btn btn-primary btn-round float-md-right",children:Object(b.jsx)("i",{className:"zmdi zmdi-comments"})})]}):Object(b.jsx)("div",{children:"loading..."})},q=function(e){var t=e.user,s=Object(r.g)(),a=Object(c.useState)(!1),n=Object(d.a)(a,2),i=n[0],l=n[1],o=Object(j.c)((function(e){return e.auth.user_onlines}));return Object(c.useEffect)((function(){s.id&&s.id===t._id&&l(!0)}),[s]),Object(b.jsx)(N.a,{to:"/chat/"+t._id,children:Object(b.jsxs)("li",{className:"clearfix user-item "+(i?"active":""),children:[Object(b.jsx)("img",{className:o.includes(String(t._id))?"active":"",src:t.avatar,alt:"avatar",width:"45",height:"45"}),Object(b.jsxs)("div",{className:"about",children:[Object(b.jsx)("div",{className:"name",children:t.username}),Object(b.jsxs)("div",{className:"status "+(o.includes(String(t._id))?"active":""),children:[Object(b.jsx)("i",{className:"zmdi zmdi-circle offline "+(o.includes(String(t._id))?"active":"")}),o.includes(String(t._id))?"online":"offline"]})]})]},t._id)})},J=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!0),i=Object(d.a)(n,2),u=i[0],m=i[1],h=Object(c.useRef)(V),O=Object(j.b)();Object(r.g)();return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/users");case 2:t=e.sent,a(Object(L.a)(t.data.rows)),m(!1),h.current.emit("get_users_online");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}h.current.emit("join_room"),function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){if(s.length)return h.current.on("get_users_online",(function(e){O({type:C,payload:{listUserId:e}});var t=Object(L.a)(s);s.forEach((function(s){e.includes(s._id)&&function(e,t,s){if(s===t)return e;for(var c=e[t],a=s<t?-1:1,n=t;n!==s;n+=a)e[n]=e[n+a];e[s]=c}(t,function(e,t){var s=-1;return e.forEach((function(e,c){e._id===t&&(s=c)})),s}(t,s._id),0)})),a(t)})),function(){V.off("get_users_online")}}),[s]),u?Object(b.jsx)("div",{children:"loading..."}):Object(b.jsx)("ul",{className:"chat-list list-unstyled m-b-0",children:s.map((function(e){return Object(b.jsx)(q,{user:e},e._id)}))})},K=s(47),Y=s.n(K),W=[{path:"/login",isAuth:!1,layout:f.AUTH,component:function(){var e=Object(c.useState)({open:!1,message:"",type:P.ERROR}),t=Object(d.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)({email:"",password:""}),i=Object(d.a)(n,2),u=i[0],m=i[1],h=Object(r.f)(),O=Object(j.b)(),p=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,u.email.length){e.next=4;break}return a(Object(A.a)(Object(A.a)({},s),{},{type:P.ERROR,message:"Username should not be empty",open:!0})),e.abrupt("return");case 4:if(u.password.length){e.next=7;break}return a(Object(A.a)(Object(A.a)({},s),{},{type:P.ERROR,message:"Password should not be empty",open:!0})),e.abrupt("return");case 7:if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(u.email)){e.next=10;break}return a(Object(A.a)(Object(A.a)({},s),{},{open:!0,type:P.ERROR,message:"Email isn't valid"})),e.abrupt("return");case 10:return e.next=12,v.post("/auth/login",u);case 12:t=e.sent,O((c=t.data,{type:E,payload:c})),h.push("/home"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),e.t0&&(null===e.t0||void 0===e.t0?void 0:e.t0.response.data.message)&&a(Object(A.a)(Object(A.a)({},s),{},{open:!0,type:P.ERROR,message:null===e.t0||void 0===e.t0?void 0:e.t0.response.data.message}));case 20:case"end":return e.stop()}var c}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),x=function(e){var t=e.target,s=t.name,c=t.value;m(Object(A.a)(Object(A.a)({},u),{},Object(U.a)({},s,c)))};return Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)(T,{isShow:s.open,message:s.message,onClose:function(e){return t=e,void a(Object(A.a)(Object(A.a)({},s),{},{open:t}));var t}}),Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"logo-container",children:Object(b.jsx)("img",{src:"assets/images/logo.svg",alt:""})}),Object(b.jsx)("h5",{children:"Login"})]}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("div",{className:"input-group input-lg",children:[Object(b.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return x(e)},name:"email",autoComplete:"off",placeholder:"Enter Email"}),Object(b.jsx)("span",{className:"input-group-addon",children:Object(b.jsx)("i",{className:"zmdi zmdi-account-circle"})})]}),Object(b.jsxs)("div",{className:"input-group input-lg",children:[Object(b.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){return x(e)},name:"password",autoComplete:"off",className:"form-control"}),Object(b.jsx)("span",{className:"input-group-addon",children:Object(b.jsx)("i",{className:"zmdi zmdi-lock"})})]})]}),Object(b.jsxs)("div",{className:"footer text-center",children:[Object(b.jsx)("span",{className:"btn l-cyan btn-round btn-lg btn-block waves-effect waves-light",onClick:p,children:"Sign In"}),Object(b.jsxs)("h6",{className:"m-t-20",children:[Object(b.jsx)(N.a,{to:"/forgot-password",className:"link",children:"Forgot Password ? "}),Object(b.jsx)(N.a,{to:"/register",style:{textDecoration:"underline",color:"white"},children:"Register"})]})]})]})},exact:!0},{path:"/register",isAuth:!1,layout:f.AUTH,component:function(){var e=Object(c.useState)({email:"",username:"",password:""}),t=Object(d.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)({open:!1,message:"",type:P.ERROR}),i=Object(d.a)(n,2),j=i[0],u=i[1],m=Object(c.useState)(!1),h=Object(d.a)(m,2),O=h[0],p=h[1],x=Object(r.f)(),f=function(e){var t=e.target,c=t.name,n=t.value;a(Object(A.a)(Object(A.a)({},s),{},Object(U.a)({},c,n)))},g=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,O){e.next=4;break}return u(Object(A.a)(Object(A.a)({},j),{},{open:!0,type:P.ERROR,message:"You need agree to theterms of usage"})),e.abrupt("return");case 4:if(s.username.length&&s.password.length&&s.password.length){e.next=7;break}return u(Object(A.a)(Object(A.a)({},j),{},{open:!0,type:P.ERROR,message:"Email or Name or Password should not be empty"})),e.abrupt("return");case 7:if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(s.email)){e.next=10;break}return u(Object(A.a)(Object(A.a)({},j),{},{open:!0,type:P.ERROR,message:"Email isn't valid"})),e.abrupt("return");case 10:return e.next=12,v.post("/auth/create",s);case 12:u(Object(A.a)(Object(A.a)({},j),{},{open:!0,type:P.SUCCESS,message:"Account has been created successfully !!!"})),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),e.t0&&e.t0.response.data.message&&u(Object(A.a)(Object(A.a)({},j),{},{open:!0,type:P.ERROR,message:e.t0.response.data.message}));case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)(T,{isShow:j.open,message:j.message,type:j.type,onClose:function(e){return function(e){j.type===P.SUCCESS&&x.push("/login"),u(Object(A.a)(Object(A.a)({},j),{},{open:e}))}(e)}}),Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"logo-container",children:Object(b.jsx)("img",{src:"assets/images/logo.svg",alt:""})}),Object(b.jsx)("h5",{children:"Sign Up"})]}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsxs)("div",{className:"input-group",children:[Object(b.jsx)("input",{type:"text",className:"form-control",name:"username",onChange:function(e){return f(e)},placeholder:"Enter Name"}),Object(b.jsx)("span",{className:"input-group-addon",children:Object(b.jsx)("i",{className:"zmdi zmdi-account-circle"})})]}),Object(b.jsxs)("div",{className:"input-group",children:[Object(b.jsx)("input",{type:"text",className:"form-control",name:"email",onChange:function(e){return f(e)},placeholder:"Enter Email"}),Object(b.jsx)("span",{className:"input-group-addon",children:Object(b.jsx)("i",{className:"zmdi zmdi-email"})})]}),Object(b.jsxs)("div",{className:"input-group",children:[Object(b.jsx)("input",{type:"password",placeholder:"Password",name:"password",onChange:function(e){return f(e)},className:"form-control"}),Object(b.jsx)("span",{className:"input-group-addon",children:Object(b.jsx)("i",{className:"zmdi zmdi-lock"})})]})]}),Object(b.jsxs)("div",{className:"checkbox",children:[Object(b.jsx)("input",{id:"terms",type:"checkbox",onChange:function(e){return function(e){p(e.target.checked)}(e)}}),Object(b.jsxs)("label",{htmlFor:"terms",children:["I read and agree to the ",Object(b.jsx)("span",{children:"terms of usage"})]})]}),Object(b.jsxs)("div",{className:"footer text-center",children:[Object(b.jsx)("span",{onClick:g,className:"btn l-cyan btn-round btn-lg btn-block waves-effect waves-light",children:"SIGN UP"}),Object(b.jsx)("h6",{className:"m-t-20",children:Object(b.jsx)(N.a,{to:"/login",className:"link",href:"sign-in.html",children:"You already have a membership?"})})]})]})},exact:!0},{path:"/forgot-password",isAuth:!1,layout:f.AUTH,component:function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(!1),r=Object(d.a)(n,2),i=r[0],j=r[1],u=Object(c.useState)({open:!1,message:"",type:P.ERROR}),m=Object(d.a)(u,2),h=m[0],O=m[1],p=function(){var e=Object(o.a)(l.a.mark((function e(){var t,c,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,v.post("/auth/forgot-password",{email:s});case 4:O(Object(A.a)(Object(A.a)({},h),{},{open:!0,message:"A secrete password has been sent to your mail, let's check and change the new password to be access to the app, if you have any issues, please contact me",type:P.SUCCESS})),a(""),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0&&(null===e.t0||void 0===e.t0||null===(t=e.t0.response)||void 0===t||null===(c=t.data)||void 0===c?void 0:c.message)&&O(Object(A.a)(Object(A.a)({},h),{},{open:!0,type:P.ERROR,message:null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message}));case 11:return e.prev=11,j(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)(T,{isShow:h.open,message:h.message,type:h.type,onClose:function(e){return O(Object(A.a)(Object(A.a)({},h),{},{open:e}))}}),Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"logo-container",children:Object(b.jsx)("img",{src:"assets/images/logo.svg",alt:""})}),Object(b.jsx)("h5",{children:"Forgot Password?"}),Object(b.jsx)("span",{children:"Enter your e-mail address below to reset your password."})]}),Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)("div",{className:"input-group input-lg",children:[Object(b.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return a(e.target.value)},autoComplete:"off",placeholder:"Enter Email"}),Object(b.jsx)("span",{className:"input-group-addon",children:Object(b.jsx)("i",{className:"zmdi zmdi-email"})})]})}),Object(b.jsxs)("div",{className:"footer text-center",children:[Object(b.jsx)("button",{disabled:i,onClick:p,className:"btn l-cyan btn-round btn-lg btn-block waves-effect waves-light",children:i?"LOADING...":"SUBMIT"}),Object(b.jsx)("h6",{className:"m-t-20",children:Object(b.jsx)(N.a,{to:"/login",className:"link",style:{textDecoration:"underline"},children:"Back to Login?"})})]})]})},exact:!0},{path:"/home",isAuth:!0,layout:f.DEFAULT,component:I,exact:!0},{path:"/",isAuth:!0,layout:f.DEFAULT,component:I,exact:!0},{path:"/chat/:id",isAuth:!0,layout:f.DEFAULT,component:function(){var e=Object(j.c)((function(e){return e.auth.user})),t=Object(c.useState)([]),s=Object(d.a)(t,2),a=s[0],n=s[1],i=Object(c.useRef)(V),u=Object(c.useRef)([]),m=Object(c.useRef)(0),h=Object(c.useRef)(!0),O=Object(c.useRef)(!1),p=Object(c.useState)(0),x=Object(d.a)(p,2),f=x[0],g=x[1],w=Object(c.useState)(!0),y=Object(d.a)(w,2),z=y[0],S=y[1],k=Object(c.useState)(!1),_=Object(d.a)(k,2),E=_[0],C=_[1],P=Object(c.useRef)(null),R=Object(r.g)(),A=function(){var e=Object(o.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=document.querySelector(".chat-history"),0!==Number(s.scrollTop)||E||O.current||(C(!0),setTimeout(Object(o.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/messages/message-by-id?id="+R.id+"&skip="+m.current);case 2:(t=e.sent).data.rows.length&&!O.current?(s=[].concat(Object(L.a)(t.data.rows),Object(L.a)(u.current)),u.current=s,console.log(u.current.length),n(u.current),g(t.data.count),m.current+=20,C(!1)):(O.current=!0,C(!1));case 4:case"end":return e.stop()}}),e)}))),1e3));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/messages/message-by-id?id="+R.id);case 2:t=e.sent,u.current=t.data.rows,n(u.current),g(t.data.count),m.current+=20,S(!1),h.current=!1;case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){if(a.length)return i.current.on("create_message",(function(t){if((null===e||void 0===e?void 0:e._id)===t.fromId._id&&R.id===t.toId._id||(null===e||void 0===e?void 0:e._id)===t.toId._id&&R.id===t.fromId._id){n([].concat(Object(L.a)(a),[t]));var s=document.querySelector(".chat-history");s&&(s.scrollTop=s.scrollHeight)}})),!0===h.current&&setTimeout((function(){var e;null===(e=P.current)||void 0===e||e.addEventListener("scroll",(function(e){return A(e)}));var t=document.querySelector(".chat-history");t&&(t.scrollTop=t.scrollHeight)}),500),function(){V.off("create_message")}}),[a]),Object(c.useEffect)((function(){}),[]),z?Object(b.jsx)("div",{children:"loading...."}):Object(b.jsxs)("section",{className:"content chat_detail",children:[Object(b.jsx)("div",{className:"block-header",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg-7 col-md-6 col-sm-12 div_breadcrumb",children:Object(b.jsxs)("h2",{children:["Chat",Object(b.jsx)("small",{className:"text-muted",children:"Welcome to App Chat"})]})}),Object(b.jsx)("div",{className:"col-lg-5 col-md-6 col-sm-12",children:Object(b.jsxs)("ul",{className:"breadcrumb float-md-right",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsxs)(N.a,{to:"/",href:"index-2.html",children:[Object(b.jsx)("i",{className:"zmdi zmdi-home"})," Home"]})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(N.a,{to:"/",children:"App"})}),Object(b.jsx)("li",{className:"breadcrumb-item active",children:"Chat"})]})})]})}),Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("div",{className:"row clearfix",children:Object(b.jsx)("div",{className:"col-lg-12 col-xl-12",children:Object(b.jsxs)("div",{className:"card chat-app",children:[Object(b.jsxs)("div",{id:"plist",className:"people-list",children:[Object(b.jsxs)("div",{className:"input-group",children:[Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Search..."}),Object(b.jsx)("span",{className:"input-group-addon",children:Object(b.jsx)("i",{className:"zmdi zmdi-search"})})]}),Object(b.jsx)("div",{className:"tab-content",children:Object(b.jsx)("div",{role:"tabpanel",className:"tab-pane slideRight active",id:"people",children:Object(b.jsx)(J,{})})})]}),Object(b.jsxs)("div",{className:"chat",children:[Object(b.jsx)(M,{count:f}),Object(b.jsx)("div",{className:"chat-history",ref:P,children:Object(b.jsx)(Z,{messages:a,loadMore:E})}),Object(b.jsx)("div",{className:"chat-message clearfix",children:Object(b.jsx)(D,{})})]})]})})})})]})},exact:!0},{path:"/change-password",isAuth:!0,layout:f.DEFAULT,component:function(){var e=Object(r.f)(),t=Object(c.useState)({currentPassword:"",newPassword:"",confirmPassword:""}),s=Object(d.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)({currentPassword:[!1,"The password not be empty"],newPassword:[!1,"The new password not be empty"],confirmPassword:[!1,"The new password not be empty"]}),j=Object(d.a)(i,2),u=j[0],m=j[1],h=function(e){var t=e.target,s=t.name,c=t.value;n(Object(A.a)(Object(A.a)({},a),{},Object(U.a)({},s,c))),m({currentPassword:[!1,"The password not be empty"],newPassword:[!1,"The new password not be empty"],confirmPassword:[!1,"The new password not be empty"]})},O=function(){var t=Object(o.a)(l.a.mark((function t(){var s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==a.currentPassword){t.next=3;break}return m(Object(A.a)(Object(A.a)({},u),{},{currentPassword:[!0,"The password not be empty"]})),t.abrupt("return");case 3:if(""!==a.newPassword){t.next=6;break}return m(Object(A.a)(Object(A.a)({},u),{},{newPassword:[!0,"The new password not be empty"]})),t.abrupt("return");case 6:if(""!==a.confirmPassword){t.next=9;break}return m(Object(A.a)(Object(A.a)({},u),{},{confirmPassword:[!0,"The confirm password not be empty"]})),t.abrupt("return");case 9:if(a.currentPassword!==a.newPassword){t.next=12;break}return m(Object(A.a)(Object(A.a)({},u),{},{newPassword:[!0,"The current password and The new password must not be the same"]})),t.abrupt("return");case 12:if(a.confirmPassword===a.newPassword){t.next=15;break}return m(Object(A.a)(Object(A.a)({},u),{},{confirmPassword:[!0,"The new password and The confirm password don't match"]})),t.abrupt("return");case 15:return t.prev=15,s={currentPassword:a.currentPassword,newPassword:a.newPassword},t.next=19,v.post("/users/change-password",s);case 19:Y()({title:"Success",text:"Updated sucessfully !",icon:"success",buttons:["Close",!1]}).then((function(){localStorage.removeItem("access_token"),e.push("/login")})),t.next=26;break;case 22:t.prev=22,t.t0=t.catch(15),console.log(t.t0.response),t.t0&&t.t0.response.data.message&&Y()({title:"Error!",text:t.t0.response.data.message,icon:"error",buttons:["Close",!1]});case 26:case"end":return t.stop()}}),t,null,[[15,22]])})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("section",{className:"content change_passowrd",children:[Object(b.jsx)("div",{className:"block-header",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg-7 col-md-6 col-sm-12 div_breadcrumb",children:Object(b.jsxs)("h2",{children:["Chat",Object(b.jsx)("small",{className:"text-muted",children:"Welcome to App Chat"})]})}),Object(b.jsx)("div",{className:"col-lg-5 col-md-6 col-sm-12",children:Object(b.jsxs)("ul",{className:"breadcrumb float-md-right",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsxs)(N.a,{to:"/",href:"index-2.html",children:[Object(b.jsx)("i",{className:"zmdi zmdi-home"})," Home"]})}),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(N.a,{to:"/",children:"App"})}),Object(b.jsx)("li",{className:"breadcrumb-item active",children:"Form"})]})})]})}),Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("div",{className:"row clearfix",children:Object(b.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"header text-center",children:Object(b.jsx)("h1",{children:"Change Password"})}),Object(b.jsx)("div",{className:"body",children:Object(b.jsxs)("div",{id:"form_validation",children:[Object(b.jsxs)("div",{className:"form-group form-float",children:[Object(b.jsx)("input",{type:"text",className:"form-control "+(u.currentPassword[0]?"border--red":""),value:a.currentPassword,placeholder:"Password Current",onChange:function(e){return h(e)},name:"currentPassword"}),u.currentPassword[0]&&Object(b.jsx)("span",{className:"color--red ml-3",children:u.confirmPassword[1]})]}),Object(b.jsxs)("div",{className:"form-group form-float",children:[Object(b.jsx)("input",{type:"text",className:"form-control "+(u.newPassword[0]?"border--red":""),value:a.newPassword,placeholder:"New Password",onChange:function(e){return h(e)},name:"newPassword"}),u.newPassword[0]&&Object(b.jsx)("span",{className:"color--red ml-3",children:u.newPassword[1]})]}),Object(b.jsxs)("div",{className:"form-group form-float",children:[Object(b.jsx)("input",{type:"email",className:"form-control "+(u.confirmPassword[0]?"border--red":""),value:a.confirmPassword,placeholder:"Confirm Password",onChange:function(e){return h(e)},name:"confirmPassword"}),u.confirmPassword[0]&&Object(b.jsx)("span",{className:"color--red ml-3",children:u.confirmPassword[1]})]}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("div",{children:Object(b.jsxs)(N.a,{to:"/profile",children:[Object(b.jsx)("i",{className:"zmdi zmdi-long-arrow-right"}),"\xa0 Profile ???"]})})}),Object(b.jsx)("button",{className:"btn btn-raised btn-primary btn-round waves-effect",onClick:O,children:"SUBMIT"})]})})]})})})})]})},exact:!0}],$=s(76),V=Object($.io)("http://localhost:4000/socket",{transports:["websocket"],auth:{token:localStorage.getItem("access_token")||""}}),Q=function(){return Object(b.jsx)(r.b,{history:p,children:Object(b.jsx)(r.c,{children:W.map((function(e,t){return Object(b.jsx)(R,{exact:e.exact,component:e.component,path:e.path,isAuth:e.isAuth,layout:e.layout},t)}))})})},X=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,140)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))},ee=s(23),te=s(77),se={isAuth:!1,access_token:localStorage.getItem("access_token")||"",user:void 0,user_onlines:[]};var ce=Object(ee.b)({auth:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,s=arguments.length>1?arguments[1]:void 0;switch(null===s||void 0===s?void 0:s.type){case E:return localStorage.setItem("access_token",s.payload.access_token),Object(A.a)(Object(A.a)({},t),{},{isAuth:!0,token:null===s||void 0===s||null===(e=s.payload)||void 0===e?void 0:e.access_token,user:s.payload.user});case k:return Object(A.a)(Object(A.a)({},t),{},{user:s.payload.user});case _:return Object(A.a)(Object(A.a)({},t),{},{isAuth:!1});case C:return Object(A.a)(Object(A.a)({},t),{},{user_onlines:s.payload.listUserId});default:return Object(A.a)({},t)}}}),ae=ee.c,ne=function(){var e=[te.a],t=[ee.a.apply(void 0,e)];return Object(ee.d)(ce,ae.apply(void 0,t))}();n.a.render(Object(b.jsx)(j.a,{store:ne,children:Object(b.jsx)(Q,{})}),document.getElementById("root")),X()},82:function(e,t,s){},83:function(e,t,s){}},[[139,1,2]]]);
//# sourceMappingURL=main.c8410e69.chunk.js.map