(this.webpackJsonpejercicio2=this.webpackJsonpejercicio2||[]).push([[0],{22:function(e,a,t){e.exports=t(32)},23:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);t(23);var n=t(0),l=t.n(n),r=t(19),c=t.n(r),i=t(1),o=t(7),m=t(2),s=l.a.createContext(),u=function(){var e=Object(n.useContext)(s).value2,a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(m.g)();return l.a.createElement("header",null,l.a.createElement("nav",{className:"nav"},l.a.createElement("ul",null,l.a.createElement("li",{className:"nav-item active"},l.a.createElement(o.b,{exact:!0,to:"/crud-app"},"Home")),!t&&l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{exact:!0,to:"/login"},"Sign In")),!t&&l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{exact:!0,to:"/sign-up"},"Sign Up")),t&&l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{exact:!0,to:"/crud"},"CRUD")),t&&l.a.createElement("li",{className:"nav-item"},l.a.createElement("button",{onClick:function(){r((function(e){return!e})),localStorage.setItem("auth-email",""),localStorage.setItem("auth-password",""),c.push("/crud-app")},className:"btn btn-danger"},"LogOut")))))},d=t(5),p=function(){var e,a,t=Object(n.useContext)(s).value2,r=Object(i.a)(t,2),c=r[0],o=r[1],u=Object(n.useState)(""),p=Object(i.a)(u,2),b=p[0],g=p[1],E=Object(n.useState)(""),h=Object(i.a)(E,2),v=h[0],f=h[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"login-card",className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h2",{className:"text-center"},"SIGN IN"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=localStorage.getItem("auth-email"),t=localStorage.getItem("auth-password");a===b&&t===v?(o((function(e){return!e})),localStorage.setItem("login-validate","true")):(alert("usuario o contrase\xf1a incorrecta"),g(""),f(""))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),l.a.createElement("input",(e={type:"email",id:"email",className:"form-control"},Object(d.a)(e,"id","exampleInputEmail1"),Object(d.a)(e,"aria-describedby","emailHelp"),Object(d.a)(e,"placeholder","Enter email"),Object(d.a)(e,"value",b),Object(d.a)(e,"onChange",(function(e){return g(e.target.value)})),e)),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Tu informacion es privada y no sera compartida con nadie.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),l.a.createElement("input",(a={type:"password",id:"email",className:"form-control"},Object(d.a)(a,"id","exampleInputPassword1"),Object(d.a)(a,"placeholder","Password"),Object(d.a)(a,"required",!0),Object(d.a)(a,"minLength","3"),Object(d.a)(a,"maxLength","20"),Object(d.a)(a,"value",v),Object(d.a)(a,"onChange",(function(e){return f(e.target.value)})),a))),l.a.createElement("input",{type:"submit",id:"button",value:"submit",className:"btn btn-primary deep-purple btn-block"})))),c&&l.a.createElement(m.a,{to:"/crud"}))},b=function(e){var a=e.userData,t=e.setHandleModal;return l.a.createElement("div",{className:"modal",tabIndex:"-1",role:"dialog",style:{display:"block",marginTop:"5em"}},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"About"),l.a.createElement("button",{onClick:function(){t((function(e){return!e}))},type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",null,"ID: ",a.id),l.a.createElement("p",null,"Name : ",a.name),l.a.createElement("p",null,"Username: ",a.username),l.a.createElement("p",null,"Email : ",a.email),l.a.createElement("p",null,"Address: ",a.address.street)),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{onClick:function(){t((function(e){return!e}))},type:"button",className:"btn btn-primary","data-dismiss":"modal"},"Close")))))},g=t(21),E=t.n(g),h=function(){var e=Object(n.useContext)(s).value,a=Object(i.a)(e,2),t=a[0],r=(a[1],Object(n.useState)(!1)),c=Object(i.a)(r,2),o=c[0],m=c[1],u=Object(n.useState)([]),d=Object(i.a)(u,2),p=d[0],g=d[1],h=Object(n.useState)(0),v=Object(i.a)(h,2),f=v[0],y=v[1],N=5*f,j=t.slice(N,N+5).map((function(e){return l.a.createElement("div",{className:"card",style:{width:"18rem"},key:e.id},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},e.name),l.a.createElement("p",{className:"card-text"},e.email),l.a.createElement("button",{onClick:function(){return a=e,m((function(e){return!e})),void g(a);var a},className:"btn btn-primary"},"Ver")))})),O=Math.ceil(t.length/5);return l.a.createElement(l.a.Fragment,null,o&&l.a.createElement(b,{userData:p,setHandleModal:m}),l.a.createElement("div",{className:"grid-template"},t.length>0?j:l.a.createElement("div",null,l.a.createElement("p",null,"No hay informacion"))),l.a.createElement(E.a,{previousLabel:"\u2190 Previous",nextLabel:"Next \u2192",pageCount:O,onPageChange:function(e){var a=e.selected;y(a)},containerClassName:"pagination",previousLinkClassName:"pagination__link",nextLinkClassName:"pagination__link",disabledClassName:"pagination__link--disabled",activeClassName:"pagination__link--active"}))},v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null))},f=t(11),y=function(){var e=Object(n.useContext)(s).value,a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),m=o[0],u=o[1],d=Object(n.useState)(""),p=Object(i.a)(d,2),b=p[0],g=p[1],E=Object(n.useState)(""),h=Object(i.a)(E,2),v=h[0],y=h[1],N=Object(n.useState)(""),j=Object(i.a)(N,2),O=j[0],x=j[1],C=function(e,a,n){var l=t;l.map((function(t){t.id===e&&("name"===a&&(t.name=n),"username"===a&&(t.username=n),"email"===a&&(t.email=n),"address"===a&&(t.address.street=n))})),r(Object(f.a)(l))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={};a.id=t.length+1,a.name=m,a.username=b,a.email=v,a.address={street:O},console.log(a),r([].concat(Object(f.a)(t),[a])),u(""),g(""),y(""),x("")},className:"form-create"},l.a.createElement("h2",{className:"text-center"},"Create a new user"),l.a.createElement("input",{type:"text",placeholder:"nombre",value:m,onChange:function(e){return u(e.target.value)}}),l.a.createElement("input",{type:"text",placeholder:"usuario",value:b,onChange:function(e){return g(e.target.value)}}),l.a.createElement("input",{type:"email",placeholder:"correo",value:v,onChange:function(e){return y(e.target.value)}}),l.a.createElement("input",{type:"text",placeholder:"direccion",value:O,onChange:function(e){return x(e.target.value)}}),l.a.createElement("input",{className:"btn btn-success",type:"submit",value:"Create"})))),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Nombre"),l.a.createElement("th",{scope:"col"},"Usuario"),l.a.createElement("th",{scope:"col"},"Correo E"),l.a.createElement("th",{scope:"col"},"Direccion"),l.a.createElement("th",{scope:"col"},"Opcion"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"name",value:e.name,onChange:function(a){return C(e.id,a.target.name,a.target.value)},className:"input__field"})),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"username",value:e.username,onChange:function(a){return C(e.id,a.target.name,a.target.value)},className:"input__field"})," "),l.a.createElement("td",null,l.a.createElement("input",{type:"email",name:"email",value:e.email,onChange:function(a){return C(e.id,a.target.name,a.target.value)},className:"input__field"})," "),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"address",value:e.address.street,onChange:function(a){return C(e.id,a.target.name,a.target.value)},className:"input__field"})," "),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-danger",onClick:function(a){return function(e){var a=t.filter((function(a){return a.id!==e}));r(Object(f.a)(a))}(e.id)}},"Eliminar")))})))))},N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"404 NO EXISTE"))},j=function(){var e=Object(n.useContext)(s).value2,a=Object(i.a)(e,2),t=a[0];a[1];return l.a.createElement(l.a.Fragment,null,t?l.a.createElement(y,null):l.a.createElement(N,null))},O=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),s=o[0],u=o[1],d=Object(m.g)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"login-card",className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h2",{className:"text-center"},"SIGN UP"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),localStorage.setItem("auth-email","".concat(t)),localStorage.setItem("auth-password","".concat(s)),localStorage.setItem("login-validate",""),d.push("/login")}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",value:t,onChange:function(e){return r(e.target.value)}}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Tu informacion es privada y no sera compartida con nadie.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",required:!0,minLength:"3",maxLength:"20",value:s,onChange:function(e){return u(e.target.value)}})),l.a.createElement("input",{type:"submit",value:"submit",className:"btn btn-primary"})))))},x=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],C=function(){var e=Object(n.useContext)(s).value,a=Object(i.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)((function(){t(x)}),[]),null},S=function(){var e=Object(n.useContext)(s).value2,a=Object(i.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)((function(){var e=localStorage.getItem("auth-email"),a=localStorage.getItem("auth-password"),n=localStorage.getItem("login-validate");e&&a&&n&&t((function(e){return!e}))}),[]),l.a.createElement(o.a,null,l.a.createElement(C,null),l.a.createElement(u,null),l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/crud-app",component:v}),l.a.createElement(m.b,{exact:!0,path:"/login",component:p}),l.a.createElement(m.b,{exact:!0,path:"/sign-up",component:O}),l.a.createElement(m.b,{exact:!0,path:"/crud",component:j}),l.a.createElement(m.b,{component:N})))};c.a.render(l.a.createElement((function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(!1),m=Object(i.a)(o,2),u=m[0],d=m[1];return l.a.createElement(s.Provider,{value:{value:[r,c],value2:[u,d]}},e.children)}),null,l.a.createElement(S,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a77106b0.chunk.js.map