(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{18:function(e,s,c){},19:function(e,s,c){},20:function(e,s,c){},27:function(e,s,c){"use strict";c.r(s);var t=c(1),n=c.n(t),a=c(11),i=c.n(a),r=(c(18),c(19),c(20),c(0)),l=function(){return Object(r.jsxs)("div",{className:"about",children:[Object(r.jsxs)("div",{id:"header",className:"section",children:[Object(r.jsx)("img",{alt:"",className:"img-circle",src:"https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg"}),Object(r.jsx)("p",{children:"Siddhesh Kubal"})]}),Object(r.jsxs)("div",{className:"section scrollTopBuffer",id:"about",children:[Object(r.jsx)("h1",{children:Object(r.jsx)("span",{children:"About Me"})}),Object(r.jsxs)("p",{children:["Hey! I'm ",Object(r.jsx)("strong",{children:"Siddhesh"}),".I\u2019ve always been a great problem solver, an independent extrovert, and a technophile obsessed with the latest devices. Today, I\u2019m working from home as a software engineer for Quantiphi, Inc., and I get to show off all these elements of who I am. I started learning to code when I was a teenager, though it was always more of a hobby than a career focus. After a college education in Computer Science, and continuing to pursue that hobby, I realized software engineering was the right field for me."]}),Object(r.jsx)("p",{className:"quote",children:'"Declare variables, not war"'})]})]})},o=c(5),j=function(){var e=Object(t.useState)({fields:{name:"",email:""},errors:{name:"",email:""}}),s=Object(o.a)(e,2),c=s[0],n=s[1],a=function(e){var s=c.fields;s[e.target.name]=e.target.value,n({fields:s,errors:c.errors})},i=function(e){var s=c.errors;s[e.target.name]="",n({fields:c.fields,errors:s})};return Object(r.jsx)("div",{className:"contact scrollTopBuffer",id:"contact",children:Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h1",{children:Object(r.jsx)("span",{children:"Contact Me"})}),Object(r.jsxs)("svg",{className:"face",height:"100",width:"100",children:[Object(r.jsx)("circle",{cx:"50",cy:"50",r:"50",fill:"#FDD835"}),Object(r.jsx)("circle",{cx:"30",cy:"30",r:"10",fill:"#FFFFFF"}),Object(r.jsx)("circle",{cx:"70",cy:"30",r:"10",fill:"#FFFFFF"}),Object(r.jsx)("circle",{cx:"30",cy:"30",r:"5",fill:"#000000"}),Object(r.jsx)("circle",{cx:"70",cy:"30",r:"5",fill:"#000000"}),Object(r.jsx)("path",{d:"M 30 70 q 20 20 40 0",stroke:"#FFFFFF",strokeWidth:"5",fill:"none"})]}),Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"pos-rel",children:[Object(r.jsx)("input",{name:"name",placeholder:"Name",type:"text",required:!0,onChange:a,onFocus:i}),Object(r.jsx)("span",{className:"error-msg",children:c.errors.name})]}),Object(r.jsxs)("div",{className:"pos-rel",children:[Object(r.jsx)("input",{name:"email",placeholder:"Email",type:"email",required:!0,onChange:a,onFocus:i}),Object(r.jsx)("span",{className:"error-msg",children:c.errors.email})]}),Object(r.jsx)("textarea",{name:"message",placeholder:"Message",required:!0,onChange:a,onFocus:i}),Object(r.jsx)("button",{className:"submit",onClick:function(e){e.preventDefault(),!function(){var e=c.fields,s=c.errors,t=!0,a=" shoudn't be empty",i="Only letters please",r=" is not valid";if(console.log("NAMEEEEEEEEEEEEEEEE IS "),console.log(e.name),e.name||(t=!1,s.name="Name ".concat(a)),e.name.length>0&&(e.name.match(/^[a-zA-Z]+$/)||(t=!1,s.name=i)),e.email.trim()||(t=!1,s.email="Email ".concat(a)),e.email.length>0){var l=e.email.lastIndexOf("@"),o=e.email.lastIndexOf(".");l<o&&l>0&&-1===e.email.indexOf("@@")&&o>2&&e.email.length-o>2||(t=!1,s.email="Email ".concat(r))}return n({fields:e,errors:s}),t}()?console.log("form not valid"):console.log("form validated")},children:"Send"})]})]})})},d=c(12),h=function(){var e=Object(t.useState)([{name:"Home",isActive:!0,id:1},{name:"About",isActive:!1,id:2},{name:"Skills",isActive:!1,id:3},{name:"Projects",isActive:!1,id:4},{name:"Contact",isActive:!1,id:5},{name:"Follow",isActive:!1,id:6}]),s=Object(o.a)(e,2),c=s[0];s[1];return Object(r.jsx)("nav",{className:"navbar",children:c.map((function(e){return Object(r.jsx)(d.a,{to:"#".concat(e.name.toLowerCase()),smooth:!0,className:"navLinks ".concat(e.isActive?"active":""),children:e.name},e.id)}))})},b=function(){return Object(r.jsx)("div",{className:"skills scrollTopBuffer",id:"skills",children:Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h1",{children:Object(r.jsx)("span",{children:"My Skills"})}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["C, C++, Python ",Object(r.jsx)("br",{}),Object(r.jsx)("progress",{min:"0",max:"100",value:"90"})]}),Object(r.jsxs)("li",{children:["Data Structures and Algo ",Object(r.jsx)("br",{}),Object(r.jsx)("progress",{min:"0",max:"100",value:"90"})]}),Object(r.jsxs)("li",{children:["Django and Flask ",Object(r.jsx)("br",{}),Object(r.jsx)("progress",{min:"0",max:"100",value:"80"})]})]})]})})},m=function(){return Object(r.jsxs)("div",{className:"work section scrollTopBuffer",id:"projects",children:[Object(r.jsx)("div",{className:"",children:Object(r.jsx)("h1",{children:Object(r.jsx)("span",{children:"My work"})})}),Object(r.jsxs)("div",{className:"flex-container",children:[Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h4",{children:Object(r.jsx)("b",{children:"Performance management system App"})}),Object(r.jsx)("p",{children:"worked on the backend, creating several Rest APIs for Authentication, Goals Management, and Employee Tracking using Django Rest Framework."})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h4",{children:Object(r.jsx)("b",{children:"Online Blogging App"})}),Object(r.jsx)("p",{children:"Created numerous REST APIs that enable users to create and modify blogs with various tags, as well as read, like, and comment on other people's blogs and subscribe to their favorite bloggers."})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h4",{children:Object(r.jsx)("b",{children:"Movie Recommendation System"})}),Object(r.jsx)("p",{children:"worked on web Implementations of Recommendation System using Python Flask and MySQL Database."})]}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h4",{children:Object(r.jsx)("b",{children:"Budget Management Application:"})}),Object(r.jsx)("p",{children:"Calculating a budget based on CRUD actions. The user can provide the income details, expenses details and can see the budget at the top with details stored."})]})]})]})},x=function(){return Object(r.jsx)("div",{className:"follow",id:"follow",children:Object(r.jsxs)("div",{className:"section",id:"contacts",children:[Object(r.jsx)("h1",{children:Object(r.jsx)("span",{children:"Follow Me"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("a",{href:"#",children:Object(r.jsx)("img",{alt:"Insta",src:"https://workingwithdog.com/wp-content/uploads/2016/05/new_instagram_logo-1024x1024.jpg"})}),Object(r.jsx)("a",{href:"#",children:Object(r.jsx)("img",{alt:"Facebook",src:"https://www.sololearn.com/Uploads/icons/facebook.png"})}),Object(r.jsx)("a",{href:"#",children:Object(r.jsx)("img",{alt:"Twitter",src:"https://www.sololearn.com/Uploads/icons/twitter.png"})})]})]})})},O=function(){var e=document.querySelectorAll(".section"),s=new IntersectionObserver((function(e,s){e.forEach((function(s){console.log(e)}))}),{});e.forEach((function(e){s.observe(e)}))};var u=function(){return window.addEventListener("load",(function(e){O()}),!1),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(h,{}),Object(r.jsxs)("div",{className:"padding10",children:[Object(r.jsx)(l,{}),Object(r.jsx)(b,{}),Object(r.jsx)(m,{}),Object(r.jsx)(j,{}),Object(r.jsx)(x,{})]})]})},f=c(4);i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(f.a,{children:Object(r.jsx)(u,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.02d16687.chunk.js.map