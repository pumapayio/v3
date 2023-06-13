(this["webpackJsonp@pumapay/pull-payments-ui"]=this["webpackJsonp@pumapay/pull-payments-ui"]||[]).push([[6],{327:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return l})),t.d(n,"d",(function(){return c})),t.d(n,"c",(function(){return r}));var i=t(10),a={y:31536e3,mo:2592e3,w:604800,d:86400,h:3600,m:60,s:1},l={label:"Day(s)",periodInSeconds:86400},c=[{label:"Minute(s)",periodInSeconds:60,env:"TEST"},{label:"Hour(s)",periodInSeconds:3600,env:"TEST"},{label:"Day(s)",periodInSeconds:86400,env:"TEST,PROD"},{label:"Week(s)",periodInSeconds:604800,env:"TEST,PROD"},{label:"Month(s)",periodInSeconds:2592e3,env:"TEST,PROD"},{label:"Quarter(s)",periodInSeconds:7776e3,env:"TEST,PROD"},{label:"Year(s)",periodInSeconds:31536e3,env:"TEST,PROD"}],r=(i.c.All,i.c[i.d.Recurring],i.c[i.d.RecurringFreeTrial],i.c[i.d.RecurringPaidTrial],i.c[i.d.RecurringDynamic],i.c[i.d.Single],i.c[i.d.SingleDynamic],[{id:0,value:"Status: All"},{id:1,value:"ACTIVE"},{id:2,value:"INACTIVE"},{id:3,value:"SUSPENDED"}])},361:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"c",(function(){return r})),t.d(n,"b",(function(){return d})),t.d(n,"d",(function(){return o}));var i=t(21),a=t(17),l=t(10);function c(){var e=Object(a.b)().chainId,n=Object(i.d)((function(e){return e.my_billing_models}));if(!e)return[];var t=[],c=function(i){if(!n[e]||!n[e][i])return"continue";Object.keys(n[e][i]).map((function(a,l){t.push(n[e][i][a])}))};for(var r in l.d)c(r);return t}function r(e,n){var t=Object(a.b)().chainId,l=Object(i.d)((function(e){return e.my_billing_models}));return t&&l[t]&&l[t][e]&&l[t][e][n]?l[t][e][n]:null}function d(e,n,t){var l=Object(a.b)().chainId,c=Object(i.d)((function(e){return e.my_billing_models}));return l&&c[l]&&c[l][e]&&c[l][e][n]?c[l][e][n].subscriptions.find((function(e){return e.id===t})):null}function o(e,n){var t=Object(a.b)().chainId,l=Object(i.d)((function(e){return e.my_billing_models}));return t&&l[t]&&l[t][e]&&l[t][e][n]?l[t][e][n].subscriptions:[]}},409:function(e,n,t){"use strict";var i,a=t(4),l=t(7),c=t(98),r=t.n(c),d=t(323),o=t(1),s=l.default.div(i||(i=Object(a.a)(["\n  &:not(:last-child) {\n    border-right: 1px solid #ddd;\n  }\n\n  span.status {\n    display: inline-block;\n    width: 8px;\n    height: 8px;\n    background: #27ae60;\n    border-radius: 50%;\n  }\n  h3 {\n    margin: 0;\n    font-weight: 500;\n  }\n\n  padding: 5px 25px;\n  p {\n    font-size: 10px;\n    color: #959595;\n    margin: 0;\n  }\n  h2 {\n    font-size: 10px;\n    font-weight: 100;\n    display: flex;\n    align-items: center;\n    white-space: nowrap;\n  }\n"])));n.a=function(e){var n,t=e&&e.billingModelDetails?e.billingModelDetails:null,i=Object(d.a)()[null===(n=e.billingModelDetails)||void 0===n?void 0:n.token];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"aside-total",style:{display:"flex"},children:[Object(o.jsxs)(s,{className:"total-earning",children:[Object(o.jsx)("h2",{children:"Billing Model Name"}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:Object(o.jsxs)("span",{children:[null===t||void 0===t?void 0:t.name,Number(null===t||void 0===t?void 0:t.creationTime)>0&&Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{className:"status"})," Active since"," ",r()(1e3*Number(null===t||void 0===t?void 0:t.creationTime)).format("ll")]})]})})]}),Object(o.jsxs)(s,{className:"total-earning",children:[Object(o.jsx)("h2",{children:"Price, Currency"}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:Object(o.jsxs)("span",{children:[(null===i||void 0===i?void 0:i.decimals)?Number(null===t||void 0===t?void 0:t.amount)/Math.pow(10,i.decimals):"Loading..."," ",null===i||void 0===i?void 0:i.symbol]})})]}),Object(o.jsxs)(s,{className:"total-earning",children:[Object(o.jsx)("h2",{children:"Charged"}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:Object(o.jsx)("span",{children:Object(o.jsxs)("h3",{children:[(null===t||void 0===t?void 0:t.subscriptionIDs.length)>0&&(null===i||void 0===i?void 0:i.decimals)?Number(null===t||void 0===t?void 0:t.amount)/Math.pow(10,null===i||void 0===i?void 0:i.decimals)*(null===t||void 0===t?void 0:t.totalPayments):"0"," ",null===i||void 0===i?void 0:i.symbol,Object(o.jsx)("span",{className:"small"})]})})})]})]})})}},423:function(e,n,t){"use strict";var i,a=t(16),l=t(24),c=t(4),r=t(807),d=t(817),o=t(7),s=t(10),b=t(0),u=t(97),m=t(318),j=t(323),p=t(335),g=t(327),v=t(1),h=function(e){e.billingModelId;var n,t,i=e.billingModelType,a=e.billingModelDetails,c=e.widgetData,r=Object(j.a)(),d=Object(b.useState)((null===a||void 0===a?void 0:a.trialType)?null===a||void 0===a?void 0:a.trialType:0),o=Object(l.a)(d,2),u=o[0],m=o[1];Object(b.useEffect)((function(){m(null===a||void 0===a?void 0:a.trialType)}),[null===a||void 0===a?void 0:a.trialType]);var h=s.d[i]===s.d.RecurringDynamic,O=Object.keys(r).length>0&&(null===(n=Object.keys(r))||void 0===n?void 0:n.map((function(e){return Object(v.jsx)("option",{value:r[e].address,children:r[e].symbol},r[e].address)}))),x=function(e){var n=g.d.find((function(n){return Number(n.periodInSeconds)===Number(e.target.value)}));"bm-trial-period-frequency"===e.target.id?c.bmTrialDuration.setter(n):c.bmDurationPeriod.setter(n)},f=g.d.map((function(e){return Object(v.jsx)("option",{value:e.periodInSeconds,children:e.label},e.periodInSeconds)})),y=Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{className:"attribute",children:"Trial Duration"}),Object(v.jsxs)("div",{className:"trial-period-frequency",children:[Object(v.jsx)(p.a,{id:"bm-trial-period",name:"bm-trial-period",type:"number",value:c.bmTrialPeriod.value,min:"1",onChange:function(e){c.bmTrialPeriod.setter(e.target.value)},placeholder:"enter trial period"}),Object(v.jsx)(p.b,{id:"bm-trial-period-frequency",name:"bm-trial-period-frequency",defaultValue:c.bmTrialDuration.value.periodInSeconds,onChange:x,children:f})]})]});return Object(v.jsx)("div",{className:"code-wrap",children:Object(v.jsxs)("div",{className:"body",children:[Object(v.jsx)("span",{className:"attribute",children:"BillingModelName"}),Object(v.jsx)(p.a,{id:"bm-reference-name",name:"bm-reference-name",type:"text",value:c.bmName.value,onChange:function(e){c.bmName.setter(e.target.value)},placeholder:"enter billing name"}),Object(v.jsx)("span",{className:"attribute",children:"SellingPrice"}),Object(v.jsx)(p.a,{id:"bm-selling-price",name:"bm-selling-price",type:"text",value:c.bmPrice.value,onChange:function(e){c.bmPrice.setter(e.target.value)},placeholder:"enter selling price"}),Object(v.jsx)("span",{className:"attribute",children:"SellingToken"}),Object(v.jsx)(p.b,{id:"bm-currency",name:"bm-currency",style:{width:"100px",borderRadius:"4px 0 0 4px",background:"black"},defaultValue:null===(t=c.bmCurrency.value)||void 0===t?void 0:t.address,onChange:function(e){c.bmCurrency.setter(r[e.target.value])},children:O}),h&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{className:"attribute",children:"Number of payment"}),Object(v.jsx)(p.a,{id:"bm-no-of-payments",name:"bm-no-of-payments",type:"number",min:"1",value:c.bmNoOfPayments.value,onChange:function(e){c.bmNoOfPayments.setter(e.target.value)},placeholder:"enter number of payment"}),Object(v.jsx)("span",{className:"attribute",children:"Frequency"}),Object(v.jsxs)("div",{className:"frequency",children:[Object(v.jsx)(p.a,{id:"bm-frequency",name:"bm-frequency",type:"number",value:c.bmFrequency.value,min:"1",onChange:function(e){c.bmFrequency.setter(e.target.value)},placeholder:"enter frequency"}),Object(v.jsx)(p.b,{id:"bm-frequency-period",name:"bm-frequency-period",defaultValue:c.bmDurationPeriod.value.periodInSeconds,onChange:x,children:f})]}),Object(v.jsxs)("div",{className:"trialPeriod",children:[u===s.a.NoTrial?"":y,u===s.a.PaidTrial?Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{className:"attribute",children:"Trial Amount"}),Object(v.jsx)(p.a,{id:"bm-trial-amount",name:"bm-trial-amount",type:"number",value:c.bmInitialAmount.value,min:"1",onChange:function(e){c.bmInitialAmount.setter(e.target.value)},placeholder:"enter paid trail amount"})]}):""]})]})]})})},O=t(375),x=t.n(O),f=t(98),y=t.n(f),N=o.default.div(i||(i=Object(c.a)(["\n   {\n    .nav-link {\n      color: #5c5c5c;\n      pointer-events: all !important;\n    }\n    .tab-content > div {\n      width: 75%;\n    }\n    .code-copy {\n      float: left;\n      #CopyButtonPrimary {\n        border-color: #7023ff;\n        margin-right: 10px;\n        background: #7023ff;\n        color: #fff;\n        width: 120px;\n        display: inline-block;\n        padding: 8px;\n        border-radius: 10px;\n      }\n    }\n    .notice-box {\n      box-shadow: 2px 5px 10px 2px #4a435926;\n      border-radius: 15px;\n      padding: 30px 30px 80px;\n      text-align: center;\n      margin-bottom: 20px;\n      &.Single,\n      &.SingleDynamic {\n        height: 270px;\n      }\n      &.Recurring {\n        height: 340px;\n      }\n      &.RecurringFreeTrial,\n      &.RecurringPaidTrial {\n        height: 360px;\n      }\n      .connect-btn {\n        background: #7023ff;\n        border: 0;\n        padding: 12px 40px;\n        border-radius: 10px;\n        color: #fff;\n        font-size: 14px;\n      }\n      p.power {\n        font-size: 9px;\n        color: #b2acbf;\n      }\n    }\n\n    .billing-model-details {\n      margin-bottom: 1rem;\n      .billing-model-merchant-name {\n        > a {\n          text-decoration: none;\n        }\n      }\n      .billing-model-title {\n        ::-webkit-scrollbar {\n          display: none;\n        }\n        white-space: nowrap;\n        overflow: scroll;\n        text-overflow: '...';\n      }\n      .billing-model-price {\n        font-size: 2rem;\n      }\n      .billing-model-duration {\n        font-size: 0.8rem;\n        margin-bottom: 2rem;\n        color: #5c5c5c;\n      }\n    }\n    .code-wrap {\n      padding: 8px;\n      width: 100%;\n      height: 236px;\n      overflow-x: auto;\n      overflow-y: auto;\n      /* white-space: nowrap; */\n      /* overflow-x: hidden; */\n      background-color: #000;\n      color: #fff;\n      text-align: left;\n      line-height: 25px;\n      margin: 4px 4px 20px;\n      .body {\n        color: #e6db74;\n        font-size: 15px;\n        line-height: 2;\n        padding-left: 20px;\n\n        span.attribute {\n          color: #a6e22e;\n        }\n        input {\n          background: #242424;\n          width: 310px;\n        }\n      }\n    }\n\n    .frequency,\n    .trial-period-frequency {\n      #bm-trial-period-frequency,\n      #bm-frequency-period {\n        width: 110px;\n        background: black;\n      }\n      display: flex;\n      flex-wrap: wrap;\n    }\n\n    #bm-trial-period {\n      width: 150px;\n    }\n    #bm-trial-amount {\n      width: 200px;\n    }\n  }\n"])));n.a=function(e){var n,t,i,c,o,p,O=e.billingModelType,f=e.billingModelId,T=e.billingModelDetails,S=e.isPreview,P=void 0!==S&&S,w=Object(m.a)().t,D=Object(j.a)(),M=Object(b.useState)(!1),I=Object(l.a)(M,2),C=I[0],k=I[1],R=Object(b.useState)(""),q=Object(l.a)(R,2),F=q[0],B=q[1],E=Object(b.useState)(""),X=Object(l.a)(E,2),A=X[0],W=X[1],U=Object(b.useState)(0),_=Object(l.a)(U,2),z=_[0],Y=_[1],K=Object(b.useState)(0),V=Object(l.a)(K,2),J=V[0],L=V[1],H=Object(b.useState)(0),Q=Object(l.a)(H,2),G=Q[0],Z=Q[1],$=Object(b.useState)(0),ee=Object(l.a)($,2),ne=ee[0],te=ee[1],ie=Object(b.useState)(0),ae=Object(l.a)(ie,2),le=ae[0],ce=ae[1],re=Object(b.useState)({address:"0xc5d495EEaA84942095b769342bC71125721692Da",symbol:"PMA",name:"PumaPay",decimals:18}),de=Object(l.a)(re,2),oe=de[0],se=de[1],be=Object(b.useState)(g.a),ue=Object(l.a)(be,2),me=ue[0],je=ue[1],pe=Object(b.useState)(g.a),ge=Object(l.a)(pe,2),ve=ge[0],he=ge[1],Oe=Object(b.useState)(""),xe=Object(l.a)(Oe,2),fe=xe[0],ye=xe[1],Ne=Object(b.useState)(""),Te=Object(l.a)(Ne,2),Se=Te[0],Pe=Te[1],we={bmName:{value:A,setter:W},bmPrice:{value:z,setter:Y},bmNoOfPayments:{value:J,setter:L},bmTrialPeriod:{value:G,setter:Z},bmFrequency:{value:ne,setter:te},bmInitialAmount:{value:le,setter:ce},bmCurrency:{value:oe,setter:se},bmDurationPeriod:{value:me,setter:je},bmTrialDuration:{value:ve,setter:he}};Object(b.useEffect)((function(){ye(null===T||void 0===T?void 0:T.merchantName),Pe(null===T||void 0===T?void 0:T.merchantUrl)}),[T]);var De=(n={},Object(a.a)(n,s.d.Recurring,"recurringPullPayment"),Object(a.a)(n,s.d.RecurringFreeTrial,"recurringPullPaymentWithFreeTrial"),Object(a.a)(n,s.d.RecurringPaidTrial,"recurringPullPaymentWithPaidTrial"),Object(a.a)(n,s.d.RecurringDynamic,"recurringDynamicPullPayment"),Object(a.a)(n,s.d.Single,"singlePullPayment"),Object(a.a)(n,s.d.SingleDynamic,"singleDynamicPullPayment"),n);Object(b.useEffect)((function(){if(O){var e="\n        \x3c!-- !! Please DO NOT Update OR Edit the BillingModelId and BillingModelType !! --\x3e\n        \x3c!-- !! NOTE: The UniqueReference can be used so that the merchant can specify\n            a unique string to so that this subscription can be identified.\n            If the merchant does not specify UniqueReference, one will be created on the smart contract --\x3e";switch(O){case String(s.d.Single):case String(s.d.RecurringPaidTrial):case String(s.d.RecurringFreeTrial):case String(s.d.Recurring):e+='<PumaPayWidget\n                        BillingModelId="'.concat(f,'"\n                        BillingModelType="').concat(De[O],'"\n                        UniqueReference=""\n                      ></PumaPayWidget>');break;case String(s.d.SingleDynamic):e+='<PumaPayWidget\n                      BillingModelId="'.concat(f,'"\n                      BillingModelType="').concat(De[O],'"\n                      UniqueReference=""\n                      BillingModelName="').concat(A,'"\n                      SellingPrice="').concat(z,'"\n                      SellingToken="').concat(null===oe||void 0===oe?void 0:oe.address,'"\n                    ></PumaPayWidget>');break;case String(s.d.RecurringDynamic):e+='<PumaPayWidget\n                        BillingModelId="'.concat(f,'"\n                        BillingModelType="').concat(De[O],'"\n                        UniqueReference=""\n                        BillingModelName="').concat(A,'"\n                        SellingPrice="').concat(z,'"\n                        SellingToken="').concat(null===oe||void 0===oe?void 0:oe.address,'"\n                        NumberOfPayments="').concat(J,'"\n                        Frequency="').concat(ne*me.periodInSeconds,'"\n                        ').concat((null===T||void 0===T?void 0:T.trialType)!==s.a.NoTrial?'TrialPeriod="'.concat(G*ve.periodInSeconds,'"'):"","\n                        ").concat((null===T||void 0===T?void 0:T.trialType)===s.a.PaidTrial?'InitialAmount="'.concat(le,'"'):"","\n                      >\n                    </PumaPayWidget>");break;default:return void console.error("Invalid billing model type!!")}e+='\n<script src="https://assets.pumapay.io/widget'.concat("/",'widgetScript.js"><\/script>'),B(e)}}),[A,z,J,G,ne,le,oe,me,ve,O,f]);return Object(v.jsxs)(N,{children:[Object(v.jsxs)(r.a,{defaultActiveKey:"widget",id:"uncontrolled-tab-example",className:"mb-3",children:[Object(v.jsxs)(d.a,{eventKey:"widget",title:"Widget",children:[Object(v.jsx)("p",{children:w("widgetDescription")}),Object(v.jsx)("p",{children:w("widgetNote")}),Object(v.jsxs)("div",{className:"notice-box ".concat(s.d[O]),children:[Object(v.jsxs)("div",{className:"billing-model-details",children:[Object(v.jsx)("h4",{className:"billing-model-title",children:Object(s.t)(s.d[O])?""!==A?A:"{Billing Model Name}":null===T||void 0===T?void 0:T.name}),Object(v.jsx)("div",{className:"billing-model-merchant-name",children:Object(v.jsx)("a",{href:Se||(null===T||void 0===T?void 0:T.merchantUrl),rel:"noreferrer",target:"_blank",children:Object(s.t)(s.d[O])?""!==fe?fe:"{Merchant Name}":null===T||void 0===T?void 0:T.merchantName})}),Object(v.jsx)("div",{className:"billing-model-price",children:Object(s.t)(s.d[O])?0!==z?"".concat(z," ").concat(null===oe||void 0===oe?void 0:oe.symbol):"{000} {XXX}":Object(v.jsxs)(v.Fragment,{children:[(null===T||void 0===T?void 0:T.amount)/Math.pow(10,null===D||void 0===D||null===(t=D[null===T||void 0===T?void 0:T.token])||void 0===t?void 0:t.decimals),"\xa0",null===D||void 0===D||null===(i=D[null===T||void 0===T?void 0:T.token])||void 0===i?void 0:i.symbol]})}),Object(v.jsx)("div",{className:"billing-model-duration",children:Object(s.s)(s.d[O])?"One time payment":Object(v.jsxs)(v.Fragment,{children:["You will be charged every ".concat(Object(s.t)(s.d[O])?ne&&0!==ne?x()(ne*(null===me||void 0===me?void 0:me.periodInSeconds),{largest:1,round:!0,unitMeasures:g.b}):"{XXX}":x()(null===T||void 0===T?void 0:T.frequency,{largest:1,round:!0,unitMeasures:g.b})),Object(v.jsx)("br",{}),"until ".concat(Object(s.t)(s.d[O])?ne&&J&&0!==ne&&0!==J?y()(y.a.now()+ne*me.periodInSeconds*J*1e3).format("ll"):"{XXX}":y()(y.a.now()+(null===T||void 0===T?void 0:T.numberOfPayments)*(null===T||void 0===T?void 0:T.frequency)*1e3).format("ll")),Object(v.jsx)("br",{}),"(".concat(Object(s.t)(s.d[O])?J&&0!==J?J:"{XXX}":null===T||void 0===T?void 0:T.numberOfPayments," charges in total)"),(Object(s.t)(s.d[O])||Object(s.w)(s.d[O]))&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("br",{}),G===s.a.NoTrial||(null===T||void 0===T?void 0:T.trialType)===s.a.NoTrial?"":s.d[O]===s.d.RecurringFreeTrial||(null===T||void 0===T?void 0:T.trialType)===s.a.FreeTrial||G===s.a.FreeTrial?"You have a free trial":"You have a trial (".concat(Object(s.t)(s.d[O])?le||"{XXX}":Object(s.m)(null===T||void 0===T?void 0:T.initialAmount.toString(),null===D||void 0===D||null===(c=D[null===T||void 0===T?void 0:T.token])||void 0===c?void 0:c.decimals.toString())," ").concat((null===D||void 0===D||null===(o=D[null===T||void 0===T?void 0:T.token])||void 0===o?void 0:o.symbol)?null===D||void 0===D||null===(p=D[null===T||void 0===T?void 0:T.token])||void 0===p?void 0:p.symbol:oe.symbol,")"),G===s.a.NoTrial||(null===T||void 0===T?void 0:T.trialType)===s.a.NoTrial?"":" of ",Object(s.t)(s.d[O])?G&&0!==G?" ".concat(G," ").concat(ve.label):G===s.a.NoTrial||(null===T||void 0===T?void 0:T.trialType)===s.a.NoTrial?"":"{XXX}":x()(null===T||void 0===T?void 0:T.trialPeriod,{largest:1,round:!0,unitMeasures:g.b})]}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"Note: You can cancel your subscription at any time"]})})]}),Object(v.jsx)("button",{className:"connect-btn",children:"Connect Wallet"}),Object(v.jsx)("p",{className:"power",children:"Powered by PumaPay v3.0"})]})]}),!P&&Object(v.jsxs)(d.a,{eventKey:"code",title:"Code",tabClassName:P?"disabled":"",disabled:P,children:[Object(v.jsx)("p",{children:"Copy the code snippet and add it to your website"}),Object(v.jsx)("div",{className:"code-wrap",children:Object(v.jsx)("pre",{children:Object(v.jsxs)("code",{children:[Object(v.jsx)("span",{className:"tags",children:"<PumaPayWidget"}),Object(v.jsxs)("div",{className:"body",children:[Object(v.jsx)("span",{className:"attribute",children:"BillingModelId"}),"=",'"'.concat(f,'"'),Object(v.jsx)("br",{}),Object(v.jsx)("span",{className:"attribute",children:"BillingModelType"}),"=",'"'.concat(De[O],'"'),Object(v.jsx)("br",{}),Object(v.jsx)("span",{className:"attribute",children:"UniqueReference"}),"=",'""',Object(v.jsx)("br",{}),Object(s.t)(s.d[O])&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{className:"attribute",children:"BillingModelName"}),"=",'"'.concat(A,'"'),Object(v.jsx)("br",{}),Object(v.jsx)("span",{className:"attribute",children:"SellingPrice"}),"=",'"'.concat(z,'"'),Object(v.jsx)("br",{}),Object(v.jsx)("span",{className:"attribute",children:"SellingToken"}),"=",'"'.concat(null===oe||void 0===oe?void 0:oe.address,'"'),Object(v.jsx)("br",{}),s.d[O]===s.d.RecurringDynamic&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{className:"attribute",children:"NumberOfPayments"}),"=",'"'.concat(J,'"'),Object(v.jsx)("br",{}),Object(v.jsx)("span",{className:"attribute",children:"Frequency"}),"=",'"'.concat(ne*me.periodInSeconds,'"'),Object(v.jsx)("br",{}),(null===T||void 0===T?void 0:T.trialType)!==s.a.NoTrial&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{className:"attribute",children:"TrialPeriod"}),"=",'"'.concat(G*ve.periodInSeconds,'"'),Object(v.jsx)("br",{})]}),(null===T||void 0===T?void 0:T.trialType)==s.a.PaidTrial&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("span",{className:"attribute",children:"InitialAmount"}),"=",'"'.concat(le,'"'),Object(v.jsx)("br",{})]})]})]})]}),">",Object(v.jsx)("span",{className:"tags",children:"</PumaPayWidget> "}),Object(v.jsx)("br",{}),Object(v.jsx)("span",{className:"tags",children:"<script"}),Object(v.jsxs)("div",{className:"body",children:[Object(v.jsx)("span",{className:"attribute",children:"src"}),'="https://assets.pumapay.io/widget',"/",'widgetScript.js"']}),">",Object(v.jsx)("span",{className:"tags",children:"<\/script>"})]})})})]}),Object(s.t)(s.d[O])&&!P&&Object(v.jsxs)(d.a,{eventKey:"config",title:"Configuration",tabClassName:P?"disabled":"",disabled:P,children:[Object(v.jsx)("p",{children:"You can configure the dynamic fields of your billing model "}),Object(v.jsx)(h,{billingModelId:f,billingModelType:O,billingModelDetails:T,widgetData:we})]}),!P&&Object(v.jsxs)(d.a,{eventKey:"css",title:"CSS",tabClassName:P?"disabled":"",disabled:P,children:[Object(v.jsx)("p",{children:"You will be able to customise the look and feel of the widget."}),Object(v.jsx)("div",{style:{width:"100%",textAlign:"center"},children:"Coming Soon!"})]})]}),!P&&Object(v.jsx)("div",{className:"code-copy",children:Object(v.jsx)(u.b,{id:"CopyButtonPrimary",onClick:function(){navigator.clipboard.writeText(F).then((function(){k(!0),setTimeout((function(){k(!1)}),3e3)}),(function(e){console.error("Could not copy text: "+e)}))},children:C?"Copied":"Copy"})})]})}},792:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return N}));var i,a,l=t(4),c=t(0),r=t(7),d=t(158),o=t(361),s=t(10),b=t(37),u=t(221),m=t(51),j=t(409),p=t(423),g=t(411),v=t(215),h=t(90),O=t(80),x=t(1),f=r.default.a(i||(i=Object(l.a)(["\n  &:hover {\n    .sidebar-text {\n      color: #7023FF;\n    }\n    .default {\n      display: none;\n    }\n    .focus {\n      display: inline;\n    }\n  }\n  display: flex;\n  font-size: 13px;\n  margin: auto 0;\n  text-decoration: none;\n  .focus {\n    display: none;\n  }\n  img {\n    margin-right: 10px;\n  }\n}"]))),y=r.default.div(a||(a=Object(l.a)(["\n  &.open {\n    padding-left: 220px;\n    padding-right: 2rem;\n    margin-top: 1rem;\n  }\n\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  padding-left: 100px;\n  padding-right: 20px;\n\n  .icon-wrap {\n    cursor: pointer;\n    float: right;\n  }\n\n  .top-wrap > .aside-total {\n    float: left;\n    width: 60%;\n  }\n\n  .loader-wrapper {\n    line-height: 30vh;\n\n    svg {\n      height: 2rem;\n      width: 2rem;\n    }\n  }\n"])));function N(){var e=Object(c.useContext)(d.a),n=Object(b.g)(),t=Object(b.h)().search,i=new URLSearchParams(t),a=i.get("billing-model-type"),l=i.get("billing-model-id"),r=Object(o.d)(s.d[a],l),N=Object(o.c)(s.d[a],l);return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(y,{className:e?" open":"",children:[null===N?Object(x.jsx)(h.a,{gap:"lg",justify:"center",style:{height:"30vh"},children:Object(x.jsx)("div",{className:"loader-wrapper",children:Object(x.jsx)(O.a,{})})}):Object(x.jsxs)("div",{className:"tap-main",children:[Object(x.jsx)("div",{className:"icon-wrap",children:a!==String(s.d.SingleDynamic)&&a!==String(s.d.RecurringDynamic)&&Object(x.jsx)("img",{src:u.default,alt:"edit",onClick:function(){return function(e){n.push({pathname:"/merchant/".concat(a===String(s.d.Single)?"single":"recurring","-billing/edit-billing-model"),search:"?billing-model-type=".concat(a,"&billing-model-id=").concat(l),state:e})}(N)}})}),Object(x.jsxs)("div",{className:"top-wrap row",children:[Object(x.jsx)(h.a,{gap:"lg",justify:"flex-start",children:Object(x.jsxs)(f,{style:{color:"#756F82",marginBottom:"1rem"},as:m.b,to:"/merchant/dashboard",children:[Object(x.jsx)("img",{src:v.default,alt:"arrow"})," Back to Dashboard"]})}),Object(x.jsx)("div",{className:"billing-card-info-container col-md-6",children:a!==String(s.d.SingleDynamic)&&a!==String(s.d.RecurringDynamic)&&Object(x.jsx)(j.a,{billingModelDetails:N})}),Object(x.jsx)("div",{className:"widget-container col-md-6",children:Object(x.jsx)(p.a,{billingModelType:s.d[a],billingModelId:l,billingModelDetails:N})})]})]}),Object(x.jsx)(g.a,{type:s.f.MyCustomers,billingModelType:s.d[a],billingModel:N,subscriptionsData:r})]})})}}}]);
//# sourceMappingURL=6.67c2858c.chunk.js.map