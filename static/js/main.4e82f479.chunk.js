(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{70:function(n,e,t){"use strict";t.r(e);var c=t(0),r=t.n(c),o=t(28),i=t.n(o),a=t(15),s=t(50),l=t(8),d=t(7),b=t(17),j=t(9),h=t(29),p="https://api.coinpaprika.com/v1";function u(){return fetch("".concat(p,"/coins")).then((function(n){return n.json()}))}var x=t(44),f=t.n(x),O=t(1);var g=function(n){var e=n.coinId,t=Object(a.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(p,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),c=t.isLoading,r=t.data;return Object(O.jsx)("div",{children:c?"Loading chart...":Object(O.jsx)(f.a,{type:"line",series:[{name:"Price",data:null===r||void 0===r?void 0:r.map((function(n){return n.close}))}],options:{theme:{mode:"dark"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},yaxis:{show:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===r||void 0===r?void 0:r.map((function(n){return n.time_close}))},fill:{type:"gradient",gradient:{gradientToColors:["#0be881"],stops:[0,100]}},colors:["#0fbcf9"],tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(2))}}}}})})};var m,v,y,k,w,C,I,L,q,S,z=function(){return Object(O.jsx)("h1",{children:"Price"})},P=d.c.h1(m||(m=Object(l.a)(["\n  font-size: 48px;\n  margin-right:80px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),Q=d.c.span(v||(v=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),M=d.c.div(y||(y=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),T=d.c.header(k||(k=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),F=d.c.div(w||(w=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),A=d.c.div(C||(C=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),D=d.c.p(I||(I=Object(l.a)(["\n  margin: 20px 0px;\n"]))),$=d.c.div(L||(L=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),_=d.c.span(q||(q=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor})),B=d.c.button(S||(S=Object(l.a)(["\n  font-size: 30px;\n  padding:3px 20px 8px 20px;\n  border: none;\n  border-radius: 20px;\n  color: ",";\n  background-color: transparent;\n  margin-right: 30px;\n  cursor: pointer;\n  :hover{\n    background-color: #00000030;\n  }\n"])),(function(n){return n.theme.accentColor}));var H,J,R,E,U,G,K,N=function(){var n=Object(j.g)().coinId,e=Object(j.f)().state,t=Object(j.h)("/:coinId/price"),c=Object(j.h)("/:coinId/chart"),r=Object(a.useQuery)(["info",n],(function(){return function(n){return fetch("".concat(p,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)})),o=r.isLoading,i=r.data,s=Object(a.useQuery)(["tickers",n],(function(){return function(n){return fetch("".concat(p,"/tickers/").concat(n)).then((function(n){return n.json()}))}(n)}),{refetchInterval:5e3}),l=s.isLoading,d=s.data,u=o||l;return Object(O.jsxs)(M,{children:[Object(O.jsx)(h.a,{children:Object(O.jsx)("title",{children:(null===e||void 0===e?void 0:e.name)?e.name:u?"Loading...":null===i||void 0===i?void 0:i.name})}),Object(O.jsxs)(T,{children:[Object(O.jsx)(b.b,{to:"/",children:Object(O.jsx)(B,{children:"\u2190"})}),Object(O.jsx)(P,{children:(null===e||void 0===e?void 0:e.name)?e.name:u?"Loading...":null===i||void 0===i?void 0:i.name})]}),u?Object(O.jsx)(Q,{children:"Loading..."}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(F,{children:[Object(O.jsxs)(A,{children:[Object(O.jsx)("span",{children:"Rank:"}),Object(O.jsx)("span",{children:null===i||void 0===i?void 0:i.rank})]}),Object(O.jsxs)(A,{children:[Object(O.jsx)("span",{children:"Symbol:"}),Object(O.jsxs)("span",{children:["$",null===i||void 0===i?void 0:i.symbol]})]}),Object(O.jsxs)(A,{children:[Object(O.jsx)("span",{children:"Price:"}),Object(O.jsxs)("span",{children:["$",null===d||void 0===d?void 0:d.quotes.USD.price.toFixed(3)]})]})]}),Object(O.jsx)(D,{children:null===i||void 0===i?void 0:i.description}),Object(O.jsxs)(F,{children:[Object(O.jsxs)(A,{children:[Object(O.jsx)("span",{children:"Total Suply:"}),Object(O.jsx)("span",{children:null===d||void 0===d?void 0:d.total_supply})]}),Object(O.jsxs)(A,{children:[Object(O.jsx)("span",{children:"Max Supply:"}),Object(O.jsx)("span",{children:null===d||void 0===d?void 0:d.max_supply})]})]}),Object(O.jsxs)($,{children:[Object(O.jsx)(_,{isActive:null!==c,children:Object(O.jsx)(b.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(O.jsx)(_,{isActive:null!==t,children:Object(O.jsx)(b.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/:coinId/chart",children:Object(O.jsx)(g,{coinId:n})}),Object(O.jsx)(j.a,{path:"/:coinId/price",children:Object(O.jsx)(z,{})})]})]})]})},V=d.c.div(H||(H=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),W=d.c.header(J||(J=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),X=d.c.ul(R||(R=Object(l.a)([""]))),Y=d.c.li(E||(E=Object(l.a)(["\n  background-color: white;\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),Z=d.c.h1(U||(U=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),nn=d.c.span(G||(G=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),en=d.c.img(K||(K=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var tn=function(){var n=Object(a.useQuery)("allCoins",u),e=n.isLoading,t=n.data;return Object(O.jsxs)(V,{children:[Object(O.jsx)(W,{children:Object(O.jsx)(h.a,{children:Object(O.jsx)(Z,{children:"\ucf54\uc778"})})}),e?Object(O.jsx)(nn,{children:"Loading..."}):Object(O.jsx)(X,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(O.jsx)(Y,{children:Object(O.jsxs)(b.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(O.jsx)(en,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})};var cn,rn,on=function(){return Object(O.jsx)(b.a,{children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/:coinId",children:Object(O.jsx)(N,{})}),Object(O.jsx)(j.a,{path:"/",children:Object(O.jsx)(tn,{})})]})})},an=t(49),sn={bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#9c88ff"},ln={bgColor:"pink",textColor:"black",accentColor:"yellow"},dn=Object(d.b)(cn||(cn=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor})),bn=d.c.button(rn||(rn=Object(l.a)(["\n  position: absolute;\n  top:5px;\n  right:5px;\n  color: ",";\n  border-color: ",";\n  border: 1px solid;\n  border-radius: 20px;\n  background-color: transparent;\n  padding: 5px 20px;\n  cursor: pointer;\n  :hover{\n    background-color: #0000002d;\n  }\n"])),(function(n){return n.theme.accentColor}),(function(n){return n.theme.accentColor}));var jn=function(){var n=Object(c.useState)(!0),e=Object(s.a)(n,2),t=e[0],r=e[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(d.a,{theme:t?sn:ln,children:[Object(O.jsx)(bn,{onClick:function(){r(!t)},children:"Change Mode"}),Object(O.jsx)(dn,{}),Object(O.jsx)(on,{}),Object(O.jsx)(an.ReactQueryDevtools,{initialIsOpen:!0})]})})},hn=new a.QueryClient;i.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(a.QueryClientProvider,{client:hn,children:Object(O.jsx)(jn,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.4e82f479.chunk.js.map