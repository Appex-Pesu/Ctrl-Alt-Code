(this["webpackJsonphackathon-website-template"]=this["webpackJsonphackathon-website-template"]||[]).push([[0],{40:function(e,t,c){},67:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},81:function(e,t,c){},85:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(23),l=c.n(a),i=c(6),r=c(41),o=c(25),j=c(18),d=c(3),h=c(19),b=c(27),x=c(12),m=c(32),p=c(7),O=c(42),A=c.n(O),u=c(4),f=c(26),g=c(30),v=c(31),y=c(37),w=c(35),N=(c(67),c(0)),E=function(e){Object(y.a)(c,e);var t=Object(w.a)(c);function c(e){var s;return Object(g.a)(this,c),(s=t.call(this,e)).state={height:0},s}return Object(v.a)(c,[{key:"componentDidMount",value:function(){var e=this;window.setTimeout((function(){var t=l.a.findDOMNode(e).querySelector(".panel__inner").scrollHeight;e.setState({height:t})}),333)}},{key:"render",value:function(){var e=this.props,t=e.label,c=e.content,s=e.activeTab,n=e.index,a=e.activateTab,l=this.state.height,i=s===n,r={height:"".concat(i?l:0,"px")};return Object(N.jsxs)("div",{className:"panel",role:"tabpanel","aria-expanded":i,children:[Object(N.jsx)("button",{className:"panel__label",role:"tab",onClick:a,children:t}),Object(N.jsx)("div",{className:"panel__inner",style:r,"aria-hidden":!i,children:Object(N.jsx)("p",{className:"panel__content",children:c})})]})}}]),c}(n.a.Component),C=function(e){Object(y.a)(c,e);var t=Object(w.a)(c);function c(e){var s;return Object(g.a)(this,c),(s=t.call(this,e)).state={activeTab:1},s.activateTab=s.activateTab.bind(Object(f.a)(s)),s}return Object(v.a)(c,[{key:"activateTab",value:function(e){this.setState((function(t){return{activeTab:t.activeTab===e?-1:e}}))}},{key:"render",value:function(){var e=this,t=this.props.panels,c=this.state.activeTab;return Object(N.jsx)("div",{className:"accordion",role:"tablist",children:t.map((function(t,s){return Object(N.jsx)(E,Object(u.a)(Object(u.a)({activeTab:c,index:s},t),{},{activateTab:e.activateTab.bind(null,s)}),s)}))})}}]),c}(n.a.Component);c(69);c.p,c.p;var R=c.p+"static/media/boy.9e16116b.png",k="data:image/png;base64,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",D=(c.p,c.p,"data:image/png;base64,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"),T=(c.p,c.p+"static/media/solana.1148ac06.png"),I=(c.p,c.p,c(70),c.p,c.p,c.p,c.p,{About:" Ctrl + Alt + Code is a dynamic 24-hour hackathon designed for coding enthusiasts to develop real-world applications. This event promotes teamwork, inspires students to explore careers in technology, and sparks innovative solutions to address the challenges faced by humanity. Unlock your potential and demonstrate your skills in this exciting hackathon.",TITLE:"Ctrl + Alt + Code",Typed_effect:["Code.","Compile.","Collaborate."],SHORT_DESCRIPTION:"30th and 31st August, 2024",desc:"PES University(RR-Campus), Bangalore",IMG_SRC:R,DISCORD_LINK:"",JUDGES_FORM_LINK:"https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u",HACKERS_REGISTRATION_FORM_LINK:"https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u"}),S="https://www.instagram.com/appex.pesu/",L="https://www.linkedin.com/company/appex-pesu/",U="mailto:appexpesu5@gmail.com",Q=(N.Fragment,[[[{label:"What is Ctrl+Alt+Code?",content:"Ctrl+Alt+Code is a 24 hour hackathon based on the latest technical fields that will bring together several teams to generate high-value actionable business ideas and product concepts. This hackathon covers the domains of web development, app development , blockchain , artificial intelligence and machine learning."},{label:"Who can participate?",content:"Ctrl+Alt+Code is open to all undergraduate students. Acceptance of applications is based on their interest in the available domains"},{label:"When will the applications close?",content:"TBD."},{label:"Is it free of cost?",content:"Participation in Ctrl+Alt+Code will be 400/- per team."}],[{label:"How do you evaluate the applications?",content:"We can get to know more about you from your past projects, open source contributions, GitHub profile."},{label:"What could be the size of each team?",content:"A particular team can contain members from 3-4."},{label:"Do you provide travel reimbursement to hackers?",content:"The hackathon cannot cover the travel and other expenses for the attendees."},{label:"Did we miss something?",content:"Write us at appexpesu5@gmail.com or DM us us your question on Instagram @appex.pesu, Our team will reach out to you as soon as possible."}]]]),B=c(43),M=c.n(B);c(71);function P(){return Object(N.jsx)("div",{className:"typing-div",children:Object(N.jsx)("h1",{children:Object(N.jsx)(M.a,{strings:I.Typed_effect,typeSpeed:80,loop:!0})})})}c(72);var z=function(e){return Object(N.jsxs)("button",{className:e.class,children:[Object(N.jsx)("i",{className:e.icon}),e.type,Object(N.jsx)("div",{className:"overlay",children:Object(N.jsx)("div",{className:"overlay-text",children:e.overlay})})]})},H=function(e){return Object(N.jsxs)("div",{className:"AboutMe",children:[Object(N.jsx)("h2",{children:I.TITLE}),Object(N.jsx)(P,{}),Object(N.jsx)("h3",{style:{marginBottom:"20px",fontSize:"25px"},children:I.SHORT_DESCRIPTION}),Object(N.jsx)("h3",{style:{fontSize:"25px",marginBottom:"25px"},children:I.desc}),Object(N.jsx)("div",{className:"d-inline-block apply-button","data-hackathon-slug":"Ctrl+Alt+Code","data-button-theme":"light",style:{height:"44px",width:"312px"}})]})},Z=function(){return Object(N.jsx)("div",{className:"Myinfo",children:Object(N.jsx)(H,{})})};c(73);function X(){return Object(N.jsx)("h1",{className:"shead",style:{color:"white"},children:"Sponsors & Partners"})}function F(){return Object(N.jsx)("h1",{className:"shead",children:"  "})}function G(){return Object(N.jsxs)("div",{className:"joinT sponsorUS",children:[Object(N.jsx)("h3",{style:{color:"00ffff"},children:"Interested in Sponsoring? "}),Object(N.jsx)("a",{href:"mailto:appexpesu5@gmail.com",children:Object(N.jsx)(z,{className:"sponsor_btn",style:{backgroundColor:"white"},type:"Sponsor us"})})," "]})}var W=c(5),J=c.n(W),V=c(47);c(76);var Y=function(){return Object(V.a)(),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"container text-center p-5",children:[Object(N.jsx)("div",{children:Object(N.jsx)("h1",{style:{color:"white",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(N.jsx)(J.a,{color:"lightGreen",children:"Overall Prizes"})})}),Object(N.jsx)("hr",{style:{borderWidth:"5px",color:"white"}}),Object(N.jsxs)("div",{className:"row",children:[Object(N.jsxs)("div",{className:"col-sm-6 col-md-4 p-5",style:{borderRadius:"30px",borderColor:"purple"},children:[Object(N.jsx)("h2",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(N.jsx)(J.a,{color:"red",children:"\u20b920,000/-"})}),Object(N.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},className:"card-body",children:Object(N.jsx)(J.a,{color:"white",children:Object(N.jsx)("p",{style:{fontSize:"25px"},className:"card-text",children:"Winners"})})})]}),Object(N.jsxs)("div",{className:"col-sm-6 col-md-4 p-5",style:{borderRadius:"30px",borderColor:"00ffff"},children:[Object(N.jsx)("h2",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(N.jsx)(J.a,{color:"green",children:"\u20b912,500/-"})}),Object(N.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},className:"card-body",children:Object(N.jsx)(J.a,{color:"white",children:Object(N.jsx)("p",{style:{fontSize:"25px"},className:"card-text",children:"1st Runner Ups"})})})]}),Object(N.jsxs)("div",{className:"col-sm-6 col-md-4 p-5",style:{borderRadius:"30px",borderColor:"00ffff"},children:[Object(N.jsx)("h2",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(N.jsx)(J.a,{color:"blue",children:"\u20b97,500/-"})}),Object(N.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},className:"card-body",children:Object(N.jsx)(J.a,{color:"white",children:Object(N.jsx)("p",{style:{fontSize:"25px"},className:"card-text",children:"2nd Runner Ups"})})})]})]})]})})},K=c(13),q=c(17),_=c.p+"static/media/bg.968acede.jpg";var $=function(){return Object(N.jsxs)("div",{className:"container text-center my-5 p-5",children:[Object(N.jsx)("h1",{style:{color:"white",marginTop:"30px",marginBottom:"50px"},children:"About Us"}),Object(N.jsxs)("div",{className:"row justify-content-center",children:[Object(N.jsx)("div",{className:"col-sm-6",style:{marginTop:"0%"},children:Object(N.jsx)("img",{className:"img-fluid",style:{marginBottom:"50px"},src:_,alt:"ietextrinity"})}),Object(N.jsx)("div",{className:"col-sm-6",children:Object(N.jsxs)("div",{style:{color:"white",textAlign:"left"},children:[Object(N.jsxs)(J.a,{children:[" ",Object(N.jsx)("p",{children:"Ctrl + Alt + Code is a 24-hour hackathon that offers coding enthusiasts the chance to create real-world applications. This hackathon promotes collaboration, encourages students to pursue careers in technology, and stimulates creativity to tackle various challenges faced by humanity. Unleash your potential and show us what you\u2019ve got."})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{className:"my-4 container",style:{backgroundColor:"whitesmoke",color:"black",borderRadius:"10px",width:"auto"},children:Object(N.jsxs)(J.a,{fontSize:"22px",color:"black",children:[" ",Object(N.jsx)(q.b,{style:{marginRight:"7px"}}),"PES University (RR-Campus), Bangalore"]})}),Object(N.jsxs)("p",{className:" container my-4",style:{backgroundColor:"white",color:"black",borderRadius:"10px",width:"auto"},children:[" ",Object(N.jsxs)(J.a,{fontSize:"22px",color:"black",children:[Object(N.jsx)(q.a,{style:{marginRight:"7px"}})," Deadline: TBD"]})]}),Object(N.jsx)("p",{className:" container my-4",style:{backgroundColor:"white",color:"black",borderRadius:"10px",width:"auto"},children:Object(N.jsxs)(J.a,{fontSize:"22px",color:"black",children:[Object(N.jsx)(q.c,{style:{marginRight:"7px"}}),"3-4 members per team"," "]})})]})]})})]})]})};var ee=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"container text-center my-5",children:[Object(N.jsx)("h1",{style:{color:"white",marginTop:"10px"},children:"Tracks"}),Object(N.jsxs)("div",{className:"row justify-content-center mb-5",children:[Object(N.jsxs)("div",{className:"col-sm-6 col-xl-4 p-5 px-xl-4",children:[Object(N.jsx)("h1",{style:{color:"white"},children:"GenAI & ML"}),Object(N.jsx)(K.a,{src:"https://lottie.host/97d5a331-e866-46f0-a5fd-855426b36cfe/uFVawog4ZA.json",className:"player",loop:!0,autoplay:!0})]}),Object(N.jsxs)("div",{className:"col-sm-6 col-xl-4 p-5 px-xl-4",children:[Object(N.jsx)("h1",{style:{color:"white"},children:"Web3 & Cybersecurity"}),Object(N.jsx)(K.a,{src:"https://assets8.lottiefiles.com/packages/lf20_8jmombpq.json",className:"player",loop:!0,autoplay:!0})]}),Object(N.jsxs)("div",{className:"col-sm-6 col-xl-4 p-5 px-xl-4",children:[Object(N.jsx)("h1",{style:{color:"white"},children:"Web/App Dev"}),Object(N.jsx)(K.a,{src:"https://assets4.lottiefiles.com/packages/lf20_foZ22A.json",className:"player",loop:!0,autoplay:!0})]})]}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:"row justify-content-center",children:[Object(N.jsxs)("div",{className:"col-sm-6 col-xl-4 p-5 px-xl-4",children:[Object(N.jsx)("h1",{style:{color:"white"},children:"EdTech"}),Object(N.jsx)(K.a,{src:"https://lottie.host/821f57a8-d4f7-4b7b-81c6-78c9fae00e8b/Ny0Q7JfS6g.json",className:"player",loop:!0,autoplay:!0})]}),Object(N.jsxs)("div",{className:"col-sm-6 col-xl-4 p-5 px-xl-4",children:[Object(N.jsx)("h1",{style:{color:"white"},children:"AR/VR"}),Object(N.jsx)(K.a,{src:"https://lottie.host/19de7402-b5ca-4b6e-b524-7cf1598d66c7/BTPFjLnmJM.json",className:"player",loop:!0,autoplay:!0})]}),Object(N.jsxs)("div",{className:"col-sm-6 col-xl-4 p-5 px-xl-4",children:[Object(N.jsx)("h1",{style:{color:"white"},children:"Open Innovation"}),Object(N.jsx)(K.a,{src:"https://lottie.host/1403d0cc-4ba8-44cb-933c-f653e6367034/ZkmHLKes09.json",className:"player",loop:!0,autoplay:!0})]})]})]})})};var te,ce=function(){return Object(N.jsxs)("div",{style:{borderColor:"white",color:"white"},children:[Object(N.jsx)("section",{className:"",children:Object(N.jsx)("div",{className:"container text-center text-md-start mt-5",children:Object(N.jsxs)("div",{className:"row mt-3",children:[Object(N.jsxs)("div",{className:"col-md-3 col-lg-3 col-xl-3 mx-auto mb-4",style:{marginBottom:"20px"},children:[Object(N.jsx)("h2",{style:{display:"flex",justifyContent:"center",alignItems:"center"},className:"text-uppercase fw-bold mb-4",children:Object(N.jsxs)(J.a,{fontSize:"20px",children:[Object(N.jsx)("i",{className:"fas fa-map-marker-alt me-3"}),"Pin location"]})}),Object(N.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.573875735365!2d77.53346577582614!3d12.935086915676319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e468d8d36d3%3A0x694d74f6ac640acf!2sPES%20University!5e0!3m2!1sen!2sin!4v1721993834890!5m2!1sen!2sin",style:{width:"300",height:"200",border:"0",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}})]}),Object(N.jsx)("div",{className:"col-md-3 col-lg-6 col-xl-6 mx-auto mb-4",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(N.jsxs)(J.a,{children:[Object(N.jsx)("h2",{className:"text-uppercase fw-bold mb-4",children:"Useful links"}),Object(N.jsx)("p",{children:Object(N.jsx)("a",{href:"#prizes",className:"text-reset",children:"Prizes"})})," ",Object(N.jsxs)("p",{children:[" ",Object(N.jsx)("a",{href:"#faqs",className:"text-reset",children:"Faq's"})]})," ",Object(N.jsx)("p",{children:Object(N.jsx)("a",{href:"#sponsors",className:"text-reset",children:"Sponsors"})})]})}),Object(N.jsx)("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(N.jsxs)(J.a,{children:[Object(N.jsx)("h2",{className:"text-uppercase fw-bold mb-4",children:"Contact"}),Object(N.jsxs)("p",{children:[Object(N.jsx)("i",{className:"fas fa-envelope me-6"})," ","appexpesu5@gmail.com"]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("i",{className:"fas fa-phone "})," Sanjana - +91 70227 61027"]}),Object(N.jsxs)("p",{children:[Object(N.jsx)("i",{className:"fas fa-phone"})," Sharanya - +91\xa073493 91048"]})]})})]})})}),Object(N.jsx)("div",{className:"text-center p-4",style:{backgroundColor:"black"},children:Object(N.jsxs)("h2",{children:[" ","\xa92023 Copyright\xa0 : \xa0",Object(N.jsx)("a",{className:"text-reset fw-bold",href:"https://appex-pesu.vercel.app",children:"Appex PESU"})]})})]})},se=(c.p,c.p+"static/media/icons8-instagram.8b3118bd.svg"),ne=c.p+"static/media/icons8-linkedin-2.5121e7a1.svg",ae=c.p+"static/media/icons8-mail.181a0f43.svg",le=(c.p,c(77),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=(t[0],t[1]),n=Object(s.useState)(!0),a=Object(i.a)(n,2);a[0],a[1];Object(s.useEffect)((function(){return window.addEventListener("scroll",l),function(){window.removeEventListener("scroll",l)}}),[]);var l=function(e){window.scrollY>2800?c(!0):window.scrollY<2800&&c(!1)};return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"footer",style:{backgroundColor:"black"},children:[Object(N.jsx)("h1",{style:{color:"white"},children:"  "}),Object(N.jsxs)("div",{className:"social-icons-container",children:[Object(N.jsx)("div",{className:"social-icon",children:Object(N.jsx)("a",{rel:"noreferrer",target:"_blank",href:S,children:Object(N.jsx)("img",{src:se,alt:""})})}),Object(N.jsx)("div",{className:"social-icon",children:Object(N.jsx)("a",{rel:"noreferrer",target:"_blank",href:L,children:Object(N.jsx)("img",{src:ne,alt:""})})}),Object(N.jsx)("div",{className:"social-icon",children:Object(N.jsx)("a",{rel:"noreferrer",target:"_blank",href:U,children:Object(N.jsx)("img",{src:ae,alt:""})})})]}),Object(N.jsx)("link",{href:"https://netdna.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.css",rel:"stylesheet"})]})})}),ie=(c(78),c(40),function(e,t){return Object(N.jsx)(p.a,{children:e.map((function(e,t){return Object(N.jsx)(x.a,{sm:12,lg:6,md:6,children:Object(N.jsx)(C,{style:{color:"white"},panels:e})},t)}))},t)});function re(){b.a.div(te||(te=Object(o.a)(["\n    display: block;\n    width: 40%;\n\n    @media (max-width: 1000px) {\n      margin: 0;\n      display: ",";\n      height: 100vh;\n      width: 100vw;\n      position: fixed;\n      top: ",";\n      transition: top 1s;\n      .nav-content {\n        height: 35%;\n        background-color: rgba(50, 13, 136);\n      }\n    }\n  "])),(function(e){return e.toggle?"none":"static"}),(function(e){return e.toggle?"-1000px":"0px"}));var e=Object(s.useState)(),t=Object(i.a)(e,2);t[0];!function(e,t,c){var n="(".concat(e,": ").concat(t,"px)");Object(s.useEffect)((function(){var e=window.matchMedia(n);function t(e){e.matches?c(!0):c(!1)}return e.matches?c(!0):c(!1),e.addEventListener("change",t),function(){e.removeEventListener("change",t)}}))}("min-width",1e3,t[1]);var c=Object(s.useState)(null),n=Object(i.a)(c,2),a=n[0],l=n[1],r=Object(s.useRef)(null);return Object(s.useEffect)((function(){return a||l(A()({el:r.current,mouseControls:!0,touchControls:!0,gyroControls:!1,backgroundColor:0,color:0,shininess:47,waveHeight:40,waveSpeed:.55,zoom:1.06})),function(){a&&a.destroy()}}),[a]),Object(N.jsxs)("div",{className:"Whole_div",style:{backgroundColor:"black"},children:[Object(N.jsx)("div",{className:"color_sectiom",id:"home",ref:r,children:Object(N.jsx)(m.a,{fluid:!0,children:Object(N.jsx)(p.a,{className:"Row info",children:Object(N.jsx)(x.a,{className:"info-div",sm:12,children:Object(N.jsx)(Z,{})})})})}),Object(N.jsxs)(m.a,{fluid:!0,children:[Object(N.jsx)($,{}),Object(N.jsx)(ee,{}),Object(N.jsx)(p.a,{className:"prizesection",id:"prizes",children:Object(N.jsx)(Y,{})}),Object(N.jsxs)(p.a,{className:"sponsorSection",id:"sponsors",children:[Object(N.jsx)(X,{}),Object(N.jsx)(G,{})]}),Object(N.jsxs)(p.a,{className:"sponsorSection",id:"faqs",children:[Object(N.jsx)(F,{}),Object(N.jsxs)("div",{className:"container text-center p-5 ",style:{color:"white"},children:[Object(N.jsxs)("div",{children:[" ",Object(N.jsx)("h1",{style:{color:"white",marginBottom:"30px"},children:" FAQ's"})]}),Q.map(ie)]})]})]}),Object(N.jsx)("hr",{style:{borderWidth:"5px",color:"white"}}),Object(N.jsx)(le,{}),Object(N.jsx)("div",{id:"contact",children:Object(N.jsx)(ce,{})})]})}var oe,je=c.p+"static/media/ham-c.8ab7632d.svg",de=c.p+"static/media/ham.a63ab4de.svg",he=(c(81),function(){return Object(N.jsxs)(s.Fragment,{children:[Object(N.jsx)("h1",{children:"cgdsjhgfchds"}),Object(N.jsx)("h1",{children:"cgdsjhgfchds"}),Object(N.jsx)("h1",{children:"cgdsjhgfchds"}),Object(N.jsx)("h1",{children:"cgdsjhgfchds"}),Object(N.jsx)("h1",{children:"cgdsjhgfchds"}),Object(N.jsx)("h1",{children:"cgdsjhgfchds"}),Object(N.jsx)("h1",{children:"cgdsjhgfchds"}),Object(N.jsx)("h1",{children:"cgdsjhgfchds"})]})}),be=b.a.div(oe||(oe=Object(o.a)(["\n  display: block;\n  width: 40%;\n\n  @media (max-width: 1000px) {\n    margin: 0;\n    display: ",";\n    height: 100vh;\n    width: 100vw;\n    position: fixed;\n    top: ",";\n    transition: top 1s;\n    .nav-content {\n      height: 35%;\n      background-color: rgba(50, 13, 136);\n    }\n  }\n"])),(function(e){return e.toggle?"none":"static"}),(function(e){return e.toggle?"-1000px":"0px"})),xe=function(e){Object(r.a)(e);var t=Object(s.useState)(!0),c=Object(i.a)(t,2),n=c[0],a=c[1],l=Object(s.useState)(!1),o=Object(i.a)(l,2),b=o[0],x=o[1],m=Object(s.useRef)(),p=function(e){window.scrollY>=66?x(!0):x(!1)};Object(s.useEffect)((function(){return window.addEventListener("scroll",p),function(){return window.removeEventListener("scroll",p)}}),[]);var O=function(e,t){t.current.contains(e.target)?a(!1):a(!0)};return Object(s.useEffect)((function(){return document.addEventListener("mousedown",(function(e){return O(e,m)})),function(){document.removeEventListener("mousedown",(function(e){return O(e,m)}))}}),[]),Object(N.jsxs)(j.a,{children:[Object(N.jsxs)("nav",{className:"nav_bar ".concat(b&&"nav_bar-offset-crossed"),children:[Object(N.jsxs)(be,{toggle:n,children:[Object(N.jsx)("div",{className:"nav-content",ref:m,children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:Object(N.jsx)(h.a,{to:"#home",children:Object(N.jsx)("img",{src:"https://i.ibb.co/nDdRq5k/COCLOGO.jpg",width:"40",height:"40"})})}),Object(N.jsx)("li",{children:Object(N.jsxs)(h.a,{to:"#prizes",style:{textDecoration:"none"},children:[Object(N.jsx)("span",{className:"links",style:{fontFamily:"monospace"},children:"Prizes"})," "]})}),Object(N.jsx)("li",{children:Object(N.jsxs)(h.a,{to:"#sponsors",style:{textDecoration:"none"},children:[Object(N.jsx)("span",{className:"links",style:{fontFamily:"monospace"},children:"Sponsors"})," "]})}),Object(N.jsx)("li",{children:Object(N.jsxs)(h.a,{to:"#faqs",style:{textDecoration:"none"},children:[Object(N.jsx)("span",{className:"links",style:{fontFamily:"monospace"},children:"FAQ's"})," "]})}),Object(N.jsx)("li",{children:Object(N.jsxs)(h.a,{to:"#contact",style:{textDecoration:"none"},children:[Object(N.jsx)("span",{className:"links",style:{fontFamily:"monospace"},children:"Contact Us"})," "]})}),Object(N.jsx)("img",{className:"s-close",onClick:function(){return a(!0)},src:je})]})}),Object(N.jsx)("div",{className:"ease"})]}),Object(N.jsx)("img",{className:"s-open",onClick:function(){return a(!1)},src:de})]}),Object(N.jsxs)(d.c,{children:[Object(N.jsx)(d.a,{path:"/blog",exact:!0,children:Object(N.jsx)(he,{})}),Object(N.jsx)(d.a,{path:"/",exact:!0,children:Object(N.jsx)(re,{})})]})]})},me=Object(u.a)({index:1,selectedData:[],selectedEvent:{},dates:[]},{month:12,year:2021}),pe=function(e,t){switch(t.type){case"UPDATE_CALENDER_VIEW":return Object(u.a)(Object(u.a)({},e),{},{index:t.data});case"SHOW_EVENTS_FOR_SELECTED_DATE":return Object(u.a)(Object(u.a)({},e),{},{selectedData:t.data});case"UPDATE_DATES":return Object(u.a)(Object(u.a)({},e),{},{dates:t.data});case"MONTH_FORWARD":return 12===e.month?Object(u.a)(Object(u.a)({},e),{},{month:1,year:e.year+1}):Object(u.a)(Object(u.a)({},e),{},{month:e.month+1});case"MONTH_BACKWARD":return 1===e.month?Object(u.a)(Object(u.a)({},e),{},{month:12,year:e.year-1}):Object(u.a)(Object(u.a)({},e),{},{month:e.month-1});default:return e}},Oe=Object(s.createContext)(null),Ae=function(e){var t=e.children,c=Object(s.useReducer)(pe,me),n=Object(i.a)(c,2),a=n[0],l=n[1],r=Object(s.useMemo)((function(){return{state:a,dispatch:l}}),[a]);return Object(N.jsx)(Oe.Provider,{value:r,children:t})},ue=document.getElementById("body");l.a.render(Object(N.jsx)(n.a.Fragment,{children:Object(N.jsx)(Ae,{children:Object(N.jsx)(xe,{})})}),ue)}},[[85,1,2]]]);
//# sourceMappingURL=main.fa417ff2.chunk.js.map