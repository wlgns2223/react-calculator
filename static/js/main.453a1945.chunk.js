(this.webpackJsonpmyreact=this.webpackJsonpmyreact||[]).push([[0],{18:function(e,t,r){},19:function(e,t,r){},23:function(e,t,r){"use strict";r.r(t);var n,c=r(0),a=r.n(c),o=r(9),u=r.n(o),l=(r(18),r(3)),i=(r(19),r(4)),j=r(1),b=i.c.div(n||(n=Object(l.a)(["\n  width: 512px;\n  height: 728px;\n  border-radius: 16px;\n  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);\n  margin: 0 auto;\n  margin-top: 3rem;\n  padding: 16px;\n  background-color: #2c2e43;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-direction: column;\n"])));function x(e){var t=e.children;return Object(j.jsx)(b,{children:t})}var s=r(13),d=r(2);function p(e){var t=e.lvalue,r=e.rvalue,n=e.operator;switch(n){case"/":return 0===r?(alert("\uc624\ub958: 0\uc73c\ub85c \ub098\ub204\uae30. \uc5f0\uc0b0\uc744 \ucd08\uae30\ud654 \ud569\ub2c8\ub2e4."),{rvalue:null,lvalue:null,operator:"",current:0,keyInput:!1}):t/r;case"X":return t*r;case"-":case"+":return t+r;default:throw new Error("Unhandled Operator: ".concat(n))}}function y(e){return Object(d.a)(Object(d.a)({},e),{},{lvalue:null===e.lvalue?e.rvalue:e.lvalue,rvalue:"-"===e.operator?-e.current:e.current})}var O={rvalue:null,lvalue:null,operator:"",current:0,keyInput:!1};function v(e,t){switch(t.type){case"key":return function(e,t){var r=e.keyInput,n=e.current;if(!r)return Object(d.a)(Object(d.a)({},e),{},{keyInput:!0,current:t.text});var c=10*n+t.text;return Object(d.a)(Object(d.a)({},e),{},{current:c})}(e,t);case"unary":return function(e,t){var r=e.current;switch(t.text){case"AC":return{rvalue:null,lvalue:null,operator:"",current:0,keyInput:!1};case"+/-":return Object(d.a)(Object(d.a)({},e),{},{current:-r});case"%":return Object(d.a)(Object(d.a)({},e),{},{current:r/100});default:return Object(d.a)({},e)}}(e,t);case"binary":return function(e,t){try{if(e.keyInput){if(null===e.rvalue&&null===e.lvalue)return Object(d.a)(Object(d.a)({},e),{},{lvalue:null,rvalue:e.current,operator:t.text,keyInput:!1});var r=p(e=y(e));return{lvalue:r,rvalue:e.rvalue,operator:t.text,current:r,keyInput:!1}}}catch(n){throw new Error(n)}return Object(d.a)(Object(d.a)({},e),{},{operator:t.text})}(e,t);case"calculate":return function(e){(e.keyInput||null===e.lvalue)&&(e=y(e));var t=p(e);return Object(d.a)(Object(d.a)({},e),{},{lvalue:t,current:t,keyInput:!1})}(e);default:throw new Error("Unhandled Type Error ".concat(t.type))}}var f,h,g=Object(c.createContext)(),k=Object(c.createContext)();function w(e){var t=e.children,r=Object(c.useReducer)(v,O),n=Object(s.a)(r,2),a=n[0],o=n[1];return Object(j.jsx)(g.Provider,{value:a,children:Object(j.jsx)(k.Provider,{value:o,children:t})})}function m(){var e=Object(c.useContext)(g);if("number"!==typeof e&&!e)throw new Error("State Context Undefined ".concat(e));return e}var C,I,E,P=i.c.div(f||(f=Object(l.a)(["\n  padding: 24px 20px;\n  border-bottom: 1px solid #ffd523;\n  width: 100%;\n"]))),F=i.c.div(h||(h=Object(l.a)(["\n  background-color: white;\n  border: 1px solid white;\n  border-radius: 4px;\n  width: 100%;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-size: 2.25rem;\n  overflow-x: scroll;\n"])));function G(){var e=m().current,t=m();return console.log(t),Object(j.jsx)(P,{children:Object(j.jsx)(F,{children:e})})}var U,Z={darkGray:"#595260",gold:"#ffd523",gray:"b2b1b9"},S=i.c.div(C||(C=Object(l.a)(["\n  background-color: #b2b1b9;\n  border-radius: 50%;\n  color: white;\n  height: 105px;\n  width: 105px;\n\n  cursor: pointer;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 3.75rem;\n\n  margin-bottom: 10px;\n\n  ","\n\n  ","\n"])),(function(e){return e.isZero&&Object(i.b)(I||(I=Object(l.a)(["\n      width: 242px;\n      border-radius: 32px;\n    "])))}),(function(e){var t=Z[e.color];return Object(i.b)(E||(E=Object(l.a)(["\n      background-color: ",";\n    "])),t)}));function T(e){var t=e.text,r=e.isZero,n=e.color,a=e.type,o=function(){var e=Object(c.useContext)(k);if(!e)throw new Error("Dispatch Context Undefined ".concat(e));return e}();return Object(j.jsx)(S,{isZero:r,color:n,onClick:function(){o({type:a,text:t})},children:t})}T.defaultProps={color:"gray"};var z,A=i.c.div(U||(U=Object(l.a)(["\n  padding: 32px 20px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"])));function B(){return Object(j.jsxs)(A,{children:[Object(j.jsx)(T,{text:"AC",color:"darkGray",type:"unary"}),Object(j.jsx)(T,{text:"+/-",color:"darkGray",type:"unary"}),Object(j.jsx)(T,{text:"%",color:"darkGray",type:"unary"}),Object(j.jsx)(T,{text:"/",color:"gold",type:"binary"}),Object(j.jsx)(T,{text:7,type:"key"}),Object(j.jsx)(T,{text:8,type:"key"}),Object(j.jsx)(T,{text:9,type:"key"}),Object(j.jsx)(T,{text:"X",color:"gold",type:"binary"}),Object(j.jsx)(T,{text:4,type:"key"}),Object(j.jsx)(T,{text:5,type:"key"}),Object(j.jsx)(T,{text:6,type:"key"}),Object(j.jsx)(T,{text:"-",color:"gold",type:"binary"}),Object(j.jsx)(T,{text:1,type:"key"}),Object(j.jsx)(T,{text:2,type:"key"}),Object(j.jsx)(T,{text:3,type:"key"}),Object(j.jsx)(T,{text:"+",color:"gold",type:"binary"}),Object(j.jsx)(T,{text:0,isZero:!0,type:"key"}),Object(j.jsx)(T,{text:".",type:"point"}),Object(j.jsx)(T,{text:"=",color:"gold",type:"calculate"})]})}var D=Object(i.a)(z||(z=Object(l.a)(["\nbody{\n  background-color: white;\n}\n"])));var J=function(){return Object(j.jsxs)(w,{children:[Object(j.jsx)(D,{}),Object(j.jsxs)(x,{children:[Object(j.jsx)(G,{}),Object(j.jsx)(B,{})]})]})},L=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,24)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),n(e),c(e),a(e),o(e)}))};u.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(J,{})}),document.getElementById("root")),L()}},[[23,1,2]]]);
//# sourceMappingURL=main.453a1945.chunk.js.map