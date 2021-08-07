(this["webpackJsonpmoney-converter"]=this["webpackJsonpmoney-converter"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('{"BD":"BDT","BE":"EUR","BF":"XOF","BG":"BGN","BA":"BAM","BB":"BBD","WF":"XPF","BL":"EUR","BM":"BMD","BN":"BND","BO":"BOB","BH":"BHD","BI":"BIF","BJ":"XOF","BT":"BTN","JM":"JMD","BV":"NOK","BW":"BWP","WS":"WST","BQ":"USD","BR":"BRL","BS":"BSD","JE":"GBP","BY":"BYR","BZ":"BZD","RU":"RUB","RW":"RWF","RS":"RSD","TL":"USD","RE":"EUR","TM":"TMT","TJ":"TJS","RO":"RON","TK":"NZD","GW":"XOF","GU":"USD","GT":"GTQ","GS":"GBP","GR":"EUR","GQ":"XAF","GP":"EUR","JP":"JPY","GY":"GYD","GG":"GBP","GF":"EUR","GE":"GEL","GD":"XCD","GB":"GBP","GA":"XAF","SV":"USD","GN":"GNF","GM":"GMD","GL":"DKK","GI":"GIP","GH":"GHS","OM":"OMR","TN":"TND","JO":"JOD","HR":"HRK","HT":"HTG","HU":"HUF","HK":"HKD","HN":"HNL","HM":"AUD","VE":"VEF","PR":"USD","PS":"ILS","PW":"USD","PT":"EUR","SJ":"NOK","PY":"PYG","IQ":"IQD","PA":"PAB","PF":"XPF","PG":"PGK","PE":"PEN","PK":"PKR","PH":"PHP","PN":"NZD","PL":"PLN","PM":"EUR","ZM":"ZMK","EH":"MAD","EE":"EUR","EG":"EGP","ZA":"ZAR","EC":"USD","IT":"EUR","VN":"VND","SB":"SBD","ET":"ETB","SO":"SOS","ZW":"ZWL","SA":"SAR","ES":"EUR","ER":"ERN","ME":"EUR","MD":"MDL","MG":"MGA","MF":"EUR","MA":"MAD","MC":"EUR","UZ":"UZS","MM":"MMK","ML":"XOF","MO":"MOP","MN":"MNT","MH":"USD","MK":"MKD","MU":"MUR","MT":"EUR","MW":"MWK","MV":"MVR","MQ":"EUR","MP":"USD","MS":"XCD","MR":"MRO","IM":"GBP","UG":"UGX","TZ":"TZS","MY":"MYR","MX":"MXN","IL":"ILS","FR":"EUR","IO":"USD","SH":"SHP","FI":"EUR","FJ":"FJD","FK":"FKP","FM":"USD","FO":"DKK","NI":"NIO","NL":"EUR","NO":"NOK","NA":"NAD","VU":"VUV","NC":"XPF","NE":"XOF","NF":"AUD","NG":"NGN","NZ":"NZD","NP":"NPR","NR":"AUD","NU":"NZD","CK":"NZD","XK":"EUR","CI":"XOF","CH":"CHF","CO":"COP","CN":"CNY","CM":"XAF","CL":"CLP","CC":"AUD","CA":"CAD","CG":"XAF","CF":"XAF","CD":"CDF","CZ":"CZK","CY":"EUR","CX":"AUD","CR":"CRC","CW":"ANG","CV":"CVE","CU":"CUP","SZ":"SZL","SY":"SYP","SX":"ANG","KG":"KGS","KE":"KES","SS":"SSP","SR":"SRD","KI":"AUD","KH":"KHR","KN":"XCD","KM":"KMF","ST":"STD","SK":"EUR","KR":"KRW","SI":"EUR","KP":"KPW","KW":"KWD","SN":"XOF","SM":"EUR","SL":"SLL","SC":"SCR","KZ":"KZT","KY":"KYD","SG":"SGD","SE":"SEK","SD":"SDG","DO":"DOP","DM":"XCD","DJ":"DJF","DK":"DKK","VG":"USD","DE":"EUR","YE":"YER","DZ":"DZD","US":"USD","UY":"UYU","YT":"EUR","UM":"USD","LB":"LBP","LC":"XCD","LA":"LAK","TV":"AUD","TW":"TWD","TT":"TTD","TR":"TRY","LK":"LKR","LI":"CHF","LV":"EUR","TO":"TOP","LT":"LTL","LU":"EUR","LR":"LRD","LS":"LSL","TH":"THB","TF":"EUR","TG":"XOF","TD":"XAF","TC":"USD","LY":"LYD","VA":"EUR","VC":"XCD","AE":"AED","AD":"EUR","AG":"XCD","AF":"AFN","AI":"XCD","VI":"USD","IS":"ISK","IR":"IRR","AM":"AMD","AL":"ALL","AO":"AOA","AQ":"","AS":"USD","AR":"ARS","AU":"AUD","AT":"EUR","AW":"AWG","IN":"INR","AX":"EUR","AZ":"AZN","IE":"EUR","ID":"IDR","UA":"UAH","QA":"QAR","MZ":"MZN"}')},37:function(e,t,c){},38:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);c(37),c(38);var n=c(18),r=c(4),a=c(2),s=c(11),i=c(0),o=c(22),u=c(1),l=function(e){var t=e.title,c=e.buttonText,r=e.buttonHref;return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"header-wrapper",children:[Object(u.jsx)("span",{className:"page__title",children:t}),Object(u.jsx)("nav",{className:"nav",children:Object(u.jsx)(n.b,{to:r,className:"nav__btn",children:c})})]})})})},j=c(10),O=c(13),b=c.n(O),R=c(19),d=c(25),N=c.n(d),U=N.a.create({baseURL:"https://api.frankfurter.app/"}),S=function(e){return U.get("latest?from=".concat(e)).then((function(e){return e.data}))},f=function(e,t,c){return U.get("latest?amount=".concat(c,"&from=").concat(e,"&to=").concat(t)).then((function(e){return e.data}))},D="GET_RATE_SUCCESS",h="START_CURRENCY_RATE_UPDATE",E="START_CURRENCY_RATE_UPDATE",m="GET_COUNTRY_CODES_SUCCESS",C="START_FETCHING",p="STOP_FETCHING",x={exchangeRateResult:{amount:1,base:"",date:"",rates:{}},countryCodes:{},isFetching:!1,isCurrencyUpdate:!1},T=function(){return{type:C}},v=function(){return{type:p}},A=function(e){return{type:D,payload:e}},_=function(e){return function(){var t=Object(R.a)(b.a.mark((function t(c){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(T()),t.next=3,S(e);case 3:n=t.sent,c(A(n)),c(v());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},G=function(e){var t=e.clickHandler,c=e.currencyName;return Object(u.jsx)("li",{onClick:function(){return t(c)},className:"select__item",children:Object(u.jsx)("span",{children:c})})},M=function(e){var t=e.countryCode,c=e.currencyName,n=e.currencyValue;return Object(u.jsxs)("li",{className:"converter__item",children:[Object(u.jsx)("img",{src:"https://www.countryflags.io/".concat(t,"/flat/64.png"),alt:"",className:"converter__flag"}),Object(u.jsx)("span",{className:"converter__currency",children:c}),Object(u.jsx)("span",{className:"converter__value",children:n})]})},B=function(){var e={};Object.keys(o).forEach((function(t){return e[o[t]]=t}));var t=Object(j.c)((function(e){return e.exchangeRate})),c=t.exchangeRateResult.rates,n=Object(i.useState)(!1),r=Object(s.a)(n,2),O=r[0],b=r[1],R=Object(i.useState)((function(){var e=localStorage.getItem("baseCurrency")||"RUB";return{RUB:"RUB"===e,EUR:"EUR"===e,USD:"USD"===e,CNY:"CNY"===e}})),d=Object(s.a)(R,2),N=d[0],U=d[1],S=Object(j.b)();Object(i.useEffect)((function(){Object.keys(N).map((function(e){N[e]&&S(_(e))}))}),[]);var f=function(e){S(_(e)),localStorage.setItem("baseCurrency",e),U((function(t){var c=Object(a.a)({},t);return Object.keys(c).forEach((function(t){c[t]=t===e})),c}))};return Object(u.jsxs)("div",{className:"page-wrapper",children:[Object(u.jsx)(l,{title:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442",buttonText:"\u041e\u0431\u043c\u0435\u043d \u0432\u0430\u043b\u044e\u0442",buttonHref:"/exchange"}),Object(u.jsx)("main",{className:"main",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("section",{className:"converter",children:[Object(u.jsx)("h1",{className:"converter__title",children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"}),Object(u.jsxs)("div",{className:"converter__body",children:[Object(u.jsxs)("div",{className:"converter__controls",children:[Object(u.jsx)("input",{type:"text",className:"input-field",value:"1",readOnly:!0}),Object(u.jsxs)("div",{onClick:function(){return b(!O)},className:"select"+(O?" open":""),children:[Object(u.jsx)("div",{className:"select__selected",children:Object(u.jsx)("span",{children:Object.keys(N).map((function(e){if(N[e])return e}))})}),Object(u.jsx)("ul",{className:"select__list",children:Object.keys(N).map((function(e,t){if(!N[e])return Object(u.jsx)(G,{clickHandler:f,currencyName:e},t)}))})]})]}),Object(u.jsx)("div",{className:"converter__results",children:Object(u.jsx)("ul",{className:"converter__list",children:t.isFetching?Object(u.jsx)("div",{className:"loading-wrapper"+(t.isFetching?" loading":"")}):Object.keys(c).map((function(t,n){return Object(u.jsx)(M,{currencyName:t,currencyValue:c[t],countryCode:e[t]},n)}))})})]})]})})})]})},F="START_FETCHING",g="STOP_FETCHING",y="START_UPDATING",P="STOP_UPDATING",K="CHANGE_SUCCESS",L={isFetching:!1,isUpdating:!1,changeResult:{rates:{}}},I=function(){return{type:F}},H=function(){return{type:g}},X=function(e){return{type:K,payload:e}},Y=c(35),Z=c.n(Y),k=function(){var e=Object(j.c)((function(e){return e.exchange})),t=Object(i.useState)({from:!1,to:!1}),c=Object(s.a)(t,2),n=c[0],r=c[1],o=Object(i.useState)(1),O=Object(s.a)(o,2),d=O[0],N=O[1],U=Object(i.useState)((function(){var e=localStorage.getItem("baseCurrencyFrom")||"RUB",t=localStorage.getItem("baseCurrencyTo")||"EUR";return{RUB:{from:"RUB"===e,to:"RUB"===t},EUR:{from:"EUR"===e,to:"EUR"===t},USD:{from:"USD"===e,to:"USD"===t},CNY:{from:"CNY"===e,to:"CNY"===t}}})),S=Object(s.a)(U,2),D=S[0],h=S[1],E=Object(j.b)(),m=Object(i.useCallback)(Z()((function(e,t,c){return E(function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return function(){var n=Object(R.a)(b.a.mark((function n(r){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(I()),n.next=3,f(e,t,c);case 3:a=n.sent,r(X(a)),r(H());case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(e,t,c))}),500),[]);Object(i.useEffect)((function(){var e=null,t=null;Object.keys(D).forEach((function(c){D[c].to?t=c:D[c].from&&(e=c)})),m(e,t,d)}),[D,d]);var C=function(e){localStorage.setItem("baseCurrencyTo",e),h((function(t){var c=Object(a.a)({},t);return Object.keys(c).forEach((function(t){c[t].to=t===e})),c}))},p=function(e){localStorage.setItem("baseCurrencyFrom",e),h((function(t){var c=Object(a.a)({},t);return Object.keys(c).forEach((function(t){c[t].from=t===e})),c}))};return Object(u.jsxs)("div",{className:"page-wrapper",children:[Object(u.jsx)(l,{title:"\u041e\u0431\u043c\u0435\u043d \u0432\u0430\u043b\u044e\u0442",buttonText:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442",buttonHref:"/exchange_rate"}),Object(u.jsx)("main",{className:"main",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("section",{className:"converter",children:[Object(u.jsx)("h1",{className:"converter__title",children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"}),Object(u.jsxs)("div",{className:"converter__body",children:[Object(u.jsxs)("div",{className:"converter__controls exchange",children:[Object(u.jsx)("input",{onChange:function(e){N(parseInt(e.target.value))},type:"number",className:"input-field",value:d}),Object(u.jsxs)("div",{onClick:function(){return r((function(e){return Object(a.a)(Object(a.a)({},e),{},{from:!e.from})}))},className:"select"+(n.from?" open":""),children:[Object(u.jsx)("div",{className:"select__selected",children:Object(u.jsx)("span",{children:Object.keys(D).map((function(e){if(D[e].from)return e}))})}),Object(u.jsx)("ul",{className:"select__list",children:Object.keys(D).map((function(e,t){if(!D[e].from&&!D[e].to)return Object(u.jsx)(G,{clickHandler:p,currencyName:e},t)}))})]})]}),Object(u.jsxs)("div",{className:"converter__controls result",children:[Object(u.jsx)("div",{className:"loading-wrapper"+(e.isFetching?" loading":""),children:Object(u.jsx)("input",{type:"text",className:"input-field",value:e.changeResult.rates&&!e.isFetching?Object.values(e.changeResult.rates)[0]:"",readOnly:!0})}),Object(u.jsxs)("div",{onClick:function(){return r((function(e){return Object(a.a)(Object(a.a)({},e),{},{to:!e.to})}))},className:"select"+(n.to?" open":""),children:[Object(u.jsx)("div",{className:"select__selected",children:Object(u.jsx)("span",{children:Object.keys(D).map((function(e){if(D[e].to)return e}))})}),Object(u.jsx)("ul",{className:"select__list",children:Object.keys(D).map((function(e,t){if(!D[e].to&&!D[e].from)return Object(u.jsx)(G,{clickHandler:C,currencyName:e},t)}))})]})]})]})]})})})]})},V=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(n.a,{children:Object(u.jsxs)(r.d,{children:[Object(u.jsx)(r.b,{exact:!0,path:"/exchange_rate",component:B}),Object(u.jsx)(r.b,{exact:!0,path:"/exchange",component:k}),Object(u.jsx)(r.b,{path:"/",children:Object(u.jsx)(r.a,{to:"/exchange_rate"})})]})})})},W=c(15),w=c(36),J=Object(W.b)({exchangeRate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case D:return Object(a.a)(Object(a.a)({},e),{},{exchangeRateResult:Object(a.a)(Object(a.a)({},n),{},{rates:Object(a.a)({},null===n||void 0===n?void 0:n.rates)})});case h:return Object(a.a)(Object(a.a)({},e),{},{isCurrencyUpdate:!0});case E:return Object(a.a)(Object(a.a)({},e),{},{isCurrencyUpdate:!1});case m:return Object(a.a)(Object(a.a)({},e),{},{countryCodes:Object(a.a)({},n)});case C:return Object(a.a)(Object(a.a)({},e),{},{isFetching:!0});case p:return Object(a.a)(Object(a.a)({},e),{},{isFetching:!1});default:return e}},exchange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case K:return Object(a.a)(Object(a.a)({},e),{},{changeResult:{rates:Object(a.a)({},n)}});case F:return Object(a.a)(Object(a.a)({},e),{},{isFetching:!0});case g:return Object(a.a)(Object(a.a)({},e),{},{isFetching:!1});case y:return Object(a.a)(Object(a.a)({},e),{},{isUpdating:!0});case P:return Object(a.a)(Object(a.a)({},e),{},{isUpdating:!1});default:return e}}}),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.c,q=Object(W.d)(J,Q(Object(W.a)(w.a)));window.__store__=q;var z=q,$=c(17);c.n($).a.render(Object(u.jsx)(j.a,{store:z,children:Object(u.jsx)(V,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.d171b905.chunk.js.map