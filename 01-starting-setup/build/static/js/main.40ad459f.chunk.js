(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(4),c=n.n(s),a=(n(13),n(1)),i=n(2),l=(n(14),n(0)),j=function(e){var t=e.date.toLocaleString("en-US",{month:"short"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),s=e.date.getFullYear();return Object(l.jsxs)("div",{className:"expense-date",children:[Object(l.jsx)("div",{className:"expense-date__month",children:t}),Object(l.jsx)("div",{className:"expense-date__year",children:s}),Object(l.jsx)("div",{className:"expense-date__day",children:n})]})},o=(n(16),function(e){var t=Object(a.useState)(e.title),n=Object(i.a)(t,2),s=n[0],c=n[1],o=Object(a.useState)(e.title),d=Object(i.a)(o,2),r=(d[0],d[1],Object(a.useState)(e.title)),u=Object(i.a)(r,2);u[0],u[1];return Object(l.jsxs)("div",{className:"expense-item",children:[Object(l.jsx)(j,{date:e.date}),Object(l.jsxs)("div",{className:"expense-item__description",children:[" ",Object(l.jsx)("h2",{children:s})]}),Object(l.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]}),Object(l.jsx)("button",{onClick:function(){c("updated"),console.log("ExpenseItem evaluated by react")},children:"click to change title"})]})}),d=(n(17),n(18),function(e){return Object(l.jsxs)("div",{className:"expenses",children:[Object(l.jsx)(o,{title:e.items[0].title,amount:e.items[0].amount,date:e.items[0].date}),Object(l.jsx)(o,{title:e.items[1].title,amount:e.items[1].amount,date:e.items[1].date}),Object(l.jsx)(o,{title:e.items[2].title,amount:e.items[2].amount,date:e.items[2].date}),Object(l.jsx)(o,{title:e.items[3].title,amount:e.items[3].amount,date:e.items[3].date})]})}),r=(n(19),n(20),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=(t[0],t[1]),s=Object(a.useState)(""),c=Object(i.a)(s,2),j=(c[0],c[1]),o=Object(a.useState)(""),d=Object(i.a)(o,2),r=(d[0],d[1]);return Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"new-expense__controls",children:[Object(l.jsx)("div",{className:"new-expense__control"}),Object(l.jsx)("label",{className:"new-expense__control label",children:"title"}),Object(l.jsx)("input",{className:"new-expense__control input",type:"text",onChange:function(e){n(e.target.value)}})]}),Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("label",{className:"new-expense__control label",children:"Amount"}),Object(l.jsx)("input",{className:"new-expense__control input",type:"number",min:"0.01",step:"0.01",onChange:function(e){j(e.target.value)}}),Object(l.jsx)("div",{}),Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("label",{className:"new-expense__control label",children:"date"}),Object(l.jsx)("input",{className:"new-expense__control input",type:"date",min:"2019-01-01",max:"2022-12-30",onChange:function(e){r(e.target.value)}})]})]}),Object(l.jsx)("div",{className:"new-expense__actions",children:Object(l.jsx)("button",{type:"submit",children:"Add Expense"})})]})}),u=function(){return Object(l.jsx)("div",{className:"new-expense",children:Object(l.jsx)(r,{})})},m=function(){var e=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"let's start"}),Object(l.jsx)(u,{}),Object(l.jsx)(d,{items:e})]})};c.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(m,{}))}],[[21,1,2]]]);
//# sourceMappingURL=main.40ad459f.chunk.js.map