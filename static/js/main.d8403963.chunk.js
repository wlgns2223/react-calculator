(this.webpackJsonpmyreact=this.webpackJsonpmyreact||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var r,c=n(0),a=n.n(c),o=n(8),i=n.n(o),u=(n(20),n(3)),l=(n(21),n(4)),d=n(2),b=l.c.div(r||(r=Object(u.a)(["\n  width: 512px;\n  height: 728px;\n  border-radius: 16px;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);\n  margin: 0 auto;\n  margin-top: 3rem;\n  padding: 16px;\n  background-color: #2c2e43;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-direction: column;\n"])));function s(t){var e=t.children;return Object(d.jsx)(b,{children:e})}var p,j,v,x,O,f=n(1),y=n(15),g={darkGray:"#595260",gold:"#ffd523",gray:"#b2b1b9"},h=Object(l.d)(p||(p=Object(u.a)(["\n0% {\n  transform: scale(1);\n} \n\n50% {\n  transform: scale(0.85);\n}\n\n100%{\n  transform: scale(1);\n}\n"]))),m=l.c.button(j||(j=Object(u.a)(["\n  background-color: #b2b1b9;\n  border-radius: 50%;\n  color: white;\n  height: 105px;\n  width: 105px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 3.75rem;\n\n  margin-bottom: 10px;\n\n  ","\n\n  ","\n\n  ","\n\n  &:active {\n    animation: "," 300ms linear;\n  }\n  transition: all 300ms ease-in-out;\n"])),(function(t){return t.isZero&&Object(l.b)(v||(v=Object(u.a)(["\n      width: 242px;\n      border-radius: 32px;\n    "])))}),(function(t){var e=g[t.color];return Object(l.b)(x||(x=Object(u.a)(["\n      background-color: ",";\n    "])),e)}),(function(t){var e=t.active,n=t.color;return e&&Object(l.b)(O||(O=Object(u.a)(["\n      background-color: white;\n      color: ",";\n    "])),g[n])}),h);function k(t){var e=t.akey,n=t.dispatch,r=t.onToggle,a=e.id,o=e.color,i=e.type,u=e.text,l=e.active;console.log("RERENDERING"+a);var b="0"===u,s=Object(c.useCallback)((function(){n({type:i,text:u}),r(a)}),[i,u,n]);return Object(d.jsx)(m,{isZero:b,color:o,onClick:s,active:l,children:u})}var w=a.a.memo(k);function I(t,e){return!1===t.keyInput?Object(f.a)(Object(f.a)({},t),{},{keyInput:!0,current:e.text}):Object(f.a)(Object(f.a)({},t),{},{current:F(t,e)})}function F(t,e){return t.current+e.text}function C(t,e){switch(e.text){case"AC":return Object(f.a)({},_);case"+/-":return Object(f.a)(Object(f.a)({},t),{},{current:-t.current+""});case"%":return Object(f.a)(Object(f.a)({},t),{},{current:t.current/100+""});default:return Object(f.a)({},t)}}function T(t){return null!==t?t.slice(t.indexOf(".")).length-1:-1}function N(t){var e=t.lvalue,n=t.rvalue,r=t.operator,c=function(t,e){var n=T(t),r=T(e);return Math.max(n,r)}(e,n),a=parseFloat(e,10),o=parseFloat(n,10);switch(r){case"/":return function(t){return 0===t}(n)?(alert("\uc624\ub958: 0\uc73c\ub85c \ub098\ub204\uae30. \uc5f0\uc0b0\uc744 \ucd08\uae30\ud654 \ud569\ub2c8\ub2e4."),{rvalue:null,lvalue:null,operator:"",current:0,keyInput:!1}):parseFloat(a/o).toFixed(c)+"";case"X":return parseFloat(a*o).toFixed(c)+"";case"-":case"+":return parseFloat(a+o).toFixed(c)+"";default:return"0"}}function E(t){return Object(f.a)(Object(f.a)({},t),{},{lvalue:null===t.lvalue?t.rvalue:t.lvalue,rvalue:"-"===t.operator?"-"+t.current:t.current})}function A(t,e){try{if(!0===t.keyInput){if(function(t){var e=t.rvalue,n=t.lvalue;return null===e&&null===n}(t))return Object(f.a)(Object(f.a)({},t),{},{lvalue:null,rvalue:t.current,operator:e.text,keyInput:!1});var n=N(t=E(t));return{lvalue:n,rvalue:t.rvalue,operator:e.text,current:n,keyInput:!1}}}catch(r){throw new Error(r)}return Object(f.a)(Object(f.a)({},t),{},{operator:e.text})}function P(t){(function(t){var e=t.keyInput,n=t.lvalue;return e||null===n})(t)&&(t=E(t));var e=N(t);return Object(f.a)(Object(f.a)({},t),{},{lvalue:e,current:e,keyInput:!1})}var U="calculator/KEY_INPUT",G="calculator/UNARY_INPUT",R="calculator/BINARY_INPUT",L="calculator/CALCULATE_INPUT",_={rvalue:null,lvalue:null,operator:"",current:"0",keyInput:!1};var B,S,Y,z=[{id:1,text:"AC",color:"darkGray",type:G,active:!1},{id:2,text:"+/-",color:"darkGray",type:G,active:!1},{id:3,text:"%",color:"darkGray",type:G,active:!1},{id:4,text:"/",color:"gold",type:R,active:!1},{id:5,text:"7",color:"gray",type:U,active:!1},{id:6,text:"8",color:"gray",type:U,active:!1},{id:7,text:"9",color:"gray",type:U,active:!1},{id:8,text:"X",color:"gold",type:R,active:!1},{id:9,text:"4",color:"gray",type:U,active:!1},{id:10,text:"5",color:"gray",type:U,active:!1},{id:11,text:"6",color:"gray",type:U,active:!1},{id:12,text:"-",color:"gold",type:R,active:!1},{id:13,text:"1",color:"gray",type:U,active:!1},{id:14,text:"2",color:"gray",type:U,active:!1},{id:15,text:"3",color:"gray",type:U,active:!1},{id:16,text:"+",color:"gold",type:R,active:!1},{id:17,text:"0",color:"gray",type:U,active:!1},{id:18,text:".",color:"gray",type:U,active:!1},{id:19,text:"=",color:"gold",type:L,active:!1}],D=n(6),J=l.c.div(B||(B=Object(u.a)(["\n  padding: 32px 20px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"])));function M(){var t=Object(c.useState)(z),e=Object(y.a)(t,2),n=e[0],r=e[1],a=Object(D.b)(),o=Object(c.useCallback)((function(t){var e=n.map((function(t){return t.active?Object(f.a)(Object(f.a)({},t),{},{active:!1}):t})).map((function(e){return e.id===t?Object(f.a)(Object(f.a)({},e),{},{active:!e.active}):e}));r(e)}),[]);return Object(d.jsx)(J,{children:n.map((function(t){return Object(d.jsx)(w,{akey:t,dispatch:a,onToggle:o},t.id)}))})}var X,Z=l.c.div(S||(S=Object(u.a)(["\n  padding: 24px 20px;\n  border-bottom: 1px solid #ffd523;\n  width: 100%;\n"]))),K=l.c.div(Y||(Y=Object(u.a)(["\n  background-color: white;\n  border: 1px solid white;\n  border-radius: 4px;\n  width: 100%;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-size: 2.25rem;\n  overflow-x: scroll;\n"])));function q(t){var e=t.current;return Object(d.jsx)(Z,{children:Object(d.jsx)(K,{children:e})})}function H(){var t=Object(D.c)((function(t){return t.reducer})).current;return Object(d.jsx)(q,{current:t})}var Q=Object(l.a)(X||(X=Object(u.a)(["\nbody{\n  background-color: white;\n}\n"])));var V=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Q,{}),Object(d.jsxs)(s,{children:[Object(d.jsx)(H,{}),Object(d.jsx)(M,{})]})]})},W=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),a(t),o(t)}))},$=n(9),tt=Object($.a)({reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case U:return I(t,e);case G:return C(t,e);case R:return A(t,e);case L:return P(t);default:return Object(f.a)({},t)}}}),et=Object($.b)(tt);i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(D.a,{store:et,children:Object(d.jsx)(V,{})})}),document.getElementById("root")),W()}},[[28,1,2]]]);
//# sourceMappingURL=main.d8403963.chunk.js.map