(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(4),r=n.n(s),o=(n(9),n(2)),u=(n(10),n(0)),j=function(t){var e=t.addItem,n=t.text,c=t.setText,i=t.inputerror,s=function(t){13===t.which&&e()};return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"text",value:n,onChange:function(t){return c(t.target.value)},onKeyPress:s}),Object(u.jsx)("button",{onClick:e,onKeyPress:s,children:"ADD "}),Object(u.jsx)("p",{children:i})]})},a=function(t){var e=t.items,n=t.setItems;return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{children:e.map((function(t,c){return Object(u.jsx)("div",{children:Object(u.jsxs)("li",{children:[t,Object(u.jsx)("button",{value:t,onClick:function(t){n(e.filter((function(t){return e.indexOf(t)!==c})))},children:"Clear"})]})},c)}))})})};var d=function(){var t=Object(c.useState)(""),e=Object(o.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)([]),r=Object(o.a)(s,2),d=r[0],l=r[1],b=Object(c.useState)(""),h=Object(o.a)(b,2),x=h[0],O=h[1],f=function(){O("Write something you eejit!")};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"To-not-do List!"}),Object(u.jsx)(j,{items:d,setItems:l,addItem:function(){""===n?f():d.includes(n)?O("Thats already on the list Idiot!!"):(O(""),l(d.concat(n)))},text:n,setText:i,inputerror:x,setInputError:O}),Object(u.jsx)(a,{items:d,text:n,setItems:l})]})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),s(t),r(t)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),l()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.7039394a.chunk.js.map