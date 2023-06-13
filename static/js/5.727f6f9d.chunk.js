(this["webpackJsonp@pumapay/pull-payments-ui"]=this["webpackJsonp@pumapay/pull-payments-ui"]||[]).push([[5],{323:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(21),a=t(17);function i(){var e,n=Object(a.b)().chainId,t=Object(r.d)((function(e){return e.supported_tokens}));return n&&null!==(e=t[n])&&void 0!==e?e:{}}},327:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i})),t.d(n,"d",(function(){return c})),t.d(n,"c",(function(){return o}));var r=t(10),a={y:31536e3,mo:2592e3,w:604800,d:86400,h:3600,m:60,s:1},i={label:"Day(s)",periodInSeconds:86400},c=[{label:"Minute(s)",periodInSeconds:60,env:"TEST"},{label:"Hour(s)",periodInSeconds:3600,env:"TEST"},{label:"Day(s)",periodInSeconds:86400,env:"TEST,PROD"},{label:"Week(s)",periodInSeconds:604800,env:"TEST,PROD"},{label:"Month(s)",periodInSeconds:2592e3,env:"TEST,PROD"},{label:"Quarter(s)",periodInSeconds:7776e3,env:"TEST,PROD"},{label:"Year(s)",periodInSeconds:31536e3,env:"TEST,PROD"}],o=(r.c.All,r.c[r.d.Recurring],r.c[r.d.RecurringFreeTrial],r.c[r.d.RecurringPaidTrial],r.c[r.d.RecurringDynamic],r.c[r.d.Single],r.c[r.d.SingleDynamic],[{id:0,value:"Status: All"},{id:1,value:"ACTIVE"},{id:2,value:"INACTIVE"},{id:3,value:"SUSPENDED"}])},340:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r,a,i=t(4),c=t(7),o=t(1),l=c.default.div(r||(r=Object(i.a)(["\n  padding-left: 30px;\n  width: 190px;\n  border-right: 1px solid #ddd;\n  padding-right: 10px;\n  margin-right: 20px;\n\n  .progress-item {\n    padding: 15px 0;\n    position: relative;\n    &:not(:last-child):before {\n      content: '';\n      position: absolute;\n      height: 100%;\n      border: 1px solid #ddd;\n      top: 30px;\n      left: -20px;\n    }\n    span {\n      align-items: center;\n      width: 20px;\n      height: 20px;\n      border-radius: 50%;\n      position: absolute;\n      left: -29px;\n      display: flex;\n      justify-content: center;\n    }\n    span.pending {\n      background: #fff;\n      border: 1px solid #a3a3a3;\n    }\n    span.completed {\n      background: #00d48b;\n      &:before {\n        content: '';\n        display: inline-block;\n        width: 7px;\n        height: 4px;\n        border-left: 2px solid #fff;\n        border-bottom: 2px solid #fff;\n        transform: rotate(312deg);\n      }\n    }\n    span.current {\n      background: #00d48b;\n      &:before {\n        content: '';\n        display: inline-block;\n        width: 8px;\n        height: 8px;\n        border-radius: 50%;\n        background: #fff;\n        transform: rotate(312deg);\n      }\n    }\n  }\n  label {\n    font-size: 16px;\n  }\n  p {\n    color: #756f82;\n    font-size: 12px;\n    margin-top: 5px;\n  }\n"]))),d=c.default.div(a||(a=Object(i.a)([""])));function s(e){var n,t=window.location.href.split("/").pop();return Object(o.jsxs)(l,{className:"progressBar",children:[Object(o.jsxs)(d,{className:"progress-item",children:[Object(o.jsx)("span",{className:u(t)?"current":"completed"}),Object(o.jsx)("label",{htmlFor:"",children:"Billing Model"}),Object(o.jsx)("p",{children:"Choose a billing model"})]}),Object(o.jsxs)(d,{className:"progress-item",children:[Object(o.jsx)("span",{className:u(t)?"pending":"current"}),Object(o.jsx)("label",{htmlFor:"",children:"Setup"}),Object(o.jsx)("p",{children:"Set price and currency"})]}),Object(o.jsxs)(d,{className:"progress-item",children:[Object(o.jsx)("span",{className:(n=t,"create/widget-preview"!==n?"pending":"current")}),Object(o.jsx)("label",{htmlFor:"",children:"Integration"}),Object(o.jsx)("p",{children:"Embed code snippet"})]})]})}function u(e){return"create/choose-billing-model-type"===e}},423:function(e,n,t){"use strict";var r,a=t(16),i=t(24),c=t(4),o=t(807),l=t(817),d=t(7),s=t(10),u=t(0),b=t(97),p=t(318),m=t(323),j=t(335),f=t(327),g=t(1),h=function(e){e.billingModelId;var n,t,r=e.billingModelType,a=e.billingModelDetails,c=e.widgetData,o=Object(m.a)(),l=Object(u.useState)((null===a||void 0===a?void 0:a.trialType)?null===a||void 0===a?void 0:a.trialType:0),d=Object(i.a)(l,2),b=d[0],p=d[1];Object(u.useEffect)((function(){p(null===a||void 0===a?void 0:a.trialType)}),[null===a||void 0===a?void 0:a.trialType]);var h=s.d[r]===s.d.RecurringDynamic,x=Object.keys(o).length>0&&(null===(n=Object.keys(o))||void 0===n?void 0:n.map((function(e){return Object(g.jsx)("option",{value:o[e].address,children:o[e].symbol},o[e].address)}))),O=function(e){var n=f.d.find((function(n){return Number(n.periodInSeconds)===Number(e.target.value)}));"bm-trial-period-frequency"===e.target.id?c.bmTrialDuration.setter(n):c.bmDurationPeriod.setter(n)},v=f.d.map((function(e){return Object(g.jsx)("option",{value:e.periodInSeconds,children:e.label},e.periodInSeconds)})),y=Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{className:"attribute",children:"Trial Duration"}),Object(g.jsxs)("div",{className:"trial-period-frequency",children:[Object(g.jsx)(j.a,{id:"bm-trial-period",name:"bm-trial-period",type:"number",value:c.bmTrialPeriod.value,min:"1",onChange:function(e){c.bmTrialPeriod.setter(e.target.value)},placeholder:"enter trial period"}),Object(g.jsx)(j.b,{id:"bm-trial-period-frequency",name:"bm-trial-period-frequency",defaultValue:c.bmTrialDuration.value.periodInSeconds,onChange:O,children:v})]})]});return Object(g.jsx)("div",{className:"code-wrap",children:Object(g.jsxs)("div",{className:"body",children:[Object(g.jsx)("span",{className:"attribute",children:"BillingModelName"}),Object(g.jsx)(j.a,{id:"bm-reference-name",name:"bm-reference-name",type:"text",value:c.bmName.value,onChange:function(e){c.bmName.setter(e.target.value)},placeholder:"enter billing name"}),Object(g.jsx)("span",{className:"attribute",children:"SellingPrice"}),Object(g.jsx)(j.a,{id:"bm-selling-price",name:"bm-selling-price",type:"text",value:c.bmPrice.value,onChange:function(e){c.bmPrice.setter(e.target.value)},placeholder:"enter selling price"}),Object(g.jsx)("span",{className:"attribute",children:"SellingToken"}),Object(g.jsx)(j.b,{id:"bm-currency",name:"bm-currency",style:{width:"100px",borderRadius:"4px 0 0 4px",background:"black"},defaultValue:null===(t=c.bmCurrency.value)||void 0===t?void 0:t.address,onChange:function(e){c.bmCurrency.setter(o[e.target.value])},children:x}),h&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{className:"attribute",children:"Number of payment"}),Object(g.jsx)(j.a,{id:"bm-no-of-payments",name:"bm-no-of-payments",type:"number",min:"1",value:c.bmNoOfPayments.value,onChange:function(e){c.bmNoOfPayments.setter(e.target.value)},placeholder:"enter number of payment"}),Object(g.jsx)("span",{className:"attribute",children:"Frequency"}),Object(g.jsxs)("div",{className:"frequency",children:[Object(g.jsx)(j.a,{id:"bm-frequency",name:"bm-frequency",type:"number",value:c.bmFrequency.value,min:"1",onChange:function(e){c.bmFrequency.setter(e.target.value)},placeholder:"enter frequency"}),Object(g.jsx)(j.b,{id:"bm-frequency-period",name:"bm-frequency-period",defaultValue:c.bmDurationPeriod.value.periodInSeconds,onChange:O,children:v})]}),Object(g.jsxs)("div",{className:"trialPeriod",children:[b===s.a.NoTrial?"":y,b===s.a.PaidTrial?Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"attribute",children:"Trial Amount"}),Object(g.jsx)(j.a,{id:"bm-trial-amount",name:"bm-trial-amount",type:"number",value:c.bmInitialAmount.value,min:"1",onChange:function(e){c.bmInitialAmount.setter(e.target.value)},placeholder:"enter paid trail amount"})]}):""]})]})]})})},x=t(375),O=t.n(x),v=t(98),y=t.n(v),w=d.default.div(r||(r=Object(c.a)(["\n   {\n    .nav-link {\n      color: #5c5c5c;\n      pointer-events: all !important;\n    }\n    .tab-content > div {\n      width: 75%;\n    }\n    .code-copy {\n      float: left;\n      #CopyButtonPrimary {\n        border-color: #7023ff;\n        margin-right: 10px;\n        background: #7023ff;\n        color: #fff;\n        width: 120px;\n        display: inline-block;\n        padding: 8px;\n        border-radius: 10px;\n      }\n    }\n    .notice-box {\n      box-shadow: 2px 5px 10px 2px #4a435926;\n      border-radius: 15px;\n      padding: 30px 30px 80px;\n      text-align: center;\n      margin-bottom: 20px;\n      &.Single,\n      &.SingleDynamic {\n        height: 270px;\n      }\n      &.Recurring {\n        height: 340px;\n      }\n      &.RecurringFreeTrial,\n      &.RecurringPaidTrial {\n        height: 360px;\n      }\n      .connect-btn {\n        background: #7023ff;\n        border: 0;\n        padding: 12px 40px;\n        border-radius: 10px;\n        color: #fff;\n        font-size: 14px;\n      }\n      p.power {\n        font-size: 9px;\n        color: #b2acbf;\n      }\n    }\n\n    .billing-model-details {\n      margin-bottom: 1rem;\n      .billing-model-merchant-name {\n        > a {\n          text-decoration: none;\n        }\n      }\n      .billing-model-title {\n        ::-webkit-scrollbar {\n          display: none;\n        }\n        white-space: nowrap;\n        overflow: scroll;\n        text-overflow: '...';\n      }\n      .billing-model-price {\n        font-size: 2rem;\n      }\n      .billing-model-duration {\n        font-size: 0.8rem;\n        margin-bottom: 2rem;\n        color: #5c5c5c;\n      }\n    }\n    .code-wrap {\n      padding: 8px;\n      width: 100%;\n      height: 236px;\n      overflow-x: auto;\n      overflow-y: auto;\n      /* white-space: nowrap; */\n      /* overflow-x: hidden; */\n      background-color: #000;\n      color: #fff;\n      text-align: left;\n      line-height: 25px;\n      margin: 4px 4px 20px;\n      .body {\n        color: #e6db74;\n        font-size: 15px;\n        line-height: 2;\n        padding-left: 20px;\n\n        span.attribute {\n          color: #a6e22e;\n        }\n        input {\n          background: #242424;\n          width: 310px;\n        }\n      }\n    }\n\n    .frequency,\n    .trial-period-frequency {\n      #bm-trial-period-frequency,\n      #bm-frequency-period {\n        width: 110px;\n        background: black;\n      }\n      display: flex;\n      flex-wrap: wrap;\n    }\n\n    #bm-trial-period {\n      width: 150px;\n    }\n    #bm-trial-amount {\n      width: 200px;\n    }\n  }\n"])));n.a=function(e){var n,t,r,c,d,j,x=e.billingModelType,v=e.billingModelId,S=e.billingModelDetails,N=e.isPreview,P=void 0!==N&&N,T=Object(p.a)().t,k=Object(m.a)(),M=Object(u.useState)(!1),I=Object(i.a)(M,2),D=I[0],R=I[1],F=Object(u.useState)(""),q=Object(i.a)(F,2),C=q[0],B=q[1],E=Object(u.useState)(""),A=Object(i.a)(E,2),X=A[0],U=A[1],z=Object(u.useState)(0),W=Object(i.a)(z,2),G=W[0],L=W[1],Y=Object(u.useState)(0),K=Object(i.a)(Y,2),V=K[0],H=K[1],J=Object(u.useState)(0),_=Object(i.a)(J,2),Q=_[0],Z=_[1],$=Object(u.useState)(0),ee=Object(i.a)($,2),ne=ee[0],te=ee[1],re=Object(u.useState)(0),ae=Object(i.a)(re,2),ie=ae[0],ce=ae[1],oe=Object(u.useState)({address:"0xc5d495EEaA84942095b769342bC71125721692Da",symbol:"PMA",name:"PumaPay",decimals:18}),le=Object(i.a)(oe,2),de=le[0],se=le[1],ue=Object(u.useState)(f.a),be=Object(i.a)(ue,2),pe=be[0],me=be[1],je=Object(u.useState)(f.a),fe=Object(i.a)(je,2),ge=fe[0],he=fe[1],xe=Object(u.useState)(""),Oe=Object(i.a)(xe,2),ve=Oe[0],ye=Oe[1],we=Object(u.useState)(""),Se=Object(i.a)(we,2),Ne=Se[0],Pe=Se[1],Te={bmName:{value:X,setter:U},bmPrice:{value:G,setter:L},bmNoOfPayments:{value:V,setter:H},bmTrialPeriod:{value:Q,setter:Z},bmFrequency:{value:ne,setter:te},bmInitialAmount:{value:ie,setter:ce},bmCurrency:{value:de,setter:se},bmDurationPeriod:{value:pe,setter:me},bmTrialDuration:{value:ge,setter:he}};Object(u.useEffect)((function(){ye(null===S||void 0===S?void 0:S.merchantName),Pe(null===S||void 0===S?void 0:S.merchantUrl)}),[S]);var ke=(n={},Object(a.a)(n,s.d.Recurring,"recurringPullPayment"),Object(a.a)(n,s.d.RecurringFreeTrial,"recurringPullPaymentWithFreeTrial"),Object(a.a)(n,s.d.RecurringPaidTrial,"recurringPullPaymentWithPaidTrial"),Object(a.a)(n,s.d.RecurringDynamic,"recurringDynamicPullPayment"),Object(a.a)(n,s.d.Single,"singlePullPayment"),Object(a.a)(n,s.d.SingleDynamic,"singleDynamicPullPayment"),n);Object(u.useEffect)((function(){if(x){var e="\n        \x3c!-- !! Please DO NOT Update OR Edit the BillingModelId and BillingModelType !! --\x3e\n        \x3c!-- !! NOTE: The UniqueReference can be used so that the merchant can specify\n            a unique string to so that this subscription can be identified.\n            If the merchant does not specify UniqueReference, one will be created on the smart contract --\x3e";switch(x){case String(s.d.Single):case String(s.d.RecurringPaidTrial):case String(s.d.RecurringFreeTrial):case String(s.d.Recurring):e+='<PumaPayWidget\n                        BillingModelId="'.concat(v,'"\n                        BillingModelType="').concat(ke[x],'"\n                        UniqueReference=""\n                      ></PumaPayWidget>');break;case String(s.d.SingleDynamic):e+='<PumaPayWidget\n                      BillingModelId="'.concat(v,'"\n                      BillingModelType="').concat(ke[x],'"\n                      UniqueReference=""\n                      BillingModelName="').concat(X,'"\n                      SellingPrice="').concat(G,'"\n                      SellingToken="').concat(null===de||void 0===de?void 0:de.address,'"\n                    ></PumaPayWidget>');break;case String(s.d.RecurringDynamic):e+='<PumaPayWidget\n                        BillingModelId="'.concat(v,'"\n                        BillingModelType="').concat(ke[x],'"\n                        UniqueReference=""\n                        BillingModelName="').concat(X,'"\n                        SellingPrice="').concat(G,'"\n                        SellingToken="').concat(null===de||void 0===de?void 0:de.address,'"\n                        NumberOfPayments="').concat(V,'"\n                        Frequency="').concat(ne*pe.periodInSeconds,'"\n                        ').concat((null===S||void 0===S?void 0:S.trialType)!==s.a.NoTrial?'TrialPeriod="'.concat(Q*ge.periodInSeconds,'"'):"","\n                        ").concat((null===S||void 0===S?void 0:S.trialType)===s.a.PaidTrial?'InitialAmount="'.concat(ie,'"'):"","\n                      >\n                    </PumaPayWidget>");break;default:return void console.error("Invalid billing model type!!")}e+='\n<script src="https://assets.pumapay.io/widget'.concat("/",'widgetScript.js"><\/script>'),B(e)}}),[X,G,V,Q,ne,ie,de,pe,ge,x,v]);return Object(g.jsxs)(w,{children:[Object(g.jsxs)(o.a,{defaultActiveKey:"widget",id:"uncontrolled-tab-example",className:"mb-3",children:[Object(g.jsxs)(l.a,{eventKey:"widget",title:"Widget",children:[Object(g.jsx)("p",{children:T("widgetDescription")}),Object(g.jsx)("p",{children:T("widgetNote")}),Object(g.jsxs)("div",{className:"notice-box ".concat(s.d[x]),children:[Object(g.jsxs)("div",{className:"billing-model-details",children:[Object(g.jsx)("h4",{className:"billing-model-title",children:Object(s.t)(s.d[x])?""!==X?X:"{Billing Model Name}":null===S||void 0===S?void 0:S.name}),Object(g.jsx)("div",{className:"billing-model-merchant-name",children:Object(g.jsx)("a",{href:Ne||(null===S||void 0===S?void 0:S.merchantUrl),rel:"noreferrer",target:"_blank",children:Object(s.t)(s.d[x])?""!==ve?ve:"{Merchant Name}":null===S||void 0===S?void 0:S.merchantName})}),Object(g.jsx)("div",{className:"billing-model-price",children:Object(s.t)(s.d[x])?0!==G?"".concat(G," ").concat(null===de||void 0===de?void 0:de.symbol):"{000} {XXX}":Object(g.jsxs)(g.Fragment,{children:[(null===S||void 0===S?void 0:S.amount)/Math.pow(10,null===k||void 0===k||null===(t=k[null===S||void 0===S?void 0:S.token])||void 0===t?void 0:t.decimals),"\xa0",null===k||void 0===k||null===(r=k[null===S||void 0===S?void 0:S.token])||void 0===r?void 0:r.symbol]})}),Object(g.jsx)("div",{className:"billing-model-duration",children:Object(s.s)(s.d[x])?"One time payment":Object(g.jsxs)(g.Fragment,{children:["You will be charged every ".concat(Object(s.t)(s.d[x])?ne&&0!==ne?O()(ne*(null===pe||void 0===pe?void 0:pe.periodInSeconds),{largest:1,round:!0,unitMeasures:f.b}):"{XXX}":O()(null===S||void 0===S?void 0:S.frequency,{largest:1,round:!0,unitMeasures:f.b})),Object(g.jsx)("br",{}),"until ".concat(Object(s.t)(s.d[x])?ne&&V&&0!==ne&&0!==V?y()(y.a.now()+ne*pe.periodInSeconds*V*1e3).format("ll"):"{XXX}":y()(y.a.now()+(null===S||void 0===S?void 0:S.numberOfPayments)*(null===S||void 0===S?void 0:S.frequency)*1e3).format("ll")),Object(g.jsx)("br",{}),"(".concat(Object(s.t)(s.d[x])?V&&0!==V?V:"{XXX}":null===S||void 0===S?void 0:S.numberOfPayments," charges in total)"),(Object(s.t)(s.d[x])||Object(s.w)(s.d[x]))&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("br",{}),Q===s.a.NoTrial||(null===S||void 0===S?void 0:S.trialType)===s.a.NoTrial?"":s.d[x]===s.d.RecurringFreeTrial||(null===S||void 0===S?void 0:S.trialType)===s.a.FreeTrial||Q===s.a.FreeTrial?"You have a free trial":"You have a trial (".concat(Object(s.t)(s.d[x])?ie||"{XXX}":Object(s.m)(null===S||void 0===S?void 0:S.initialAmount.toString(),null===k||void 0===k||null===(c=k[null===S||void 0===S?void 0:S.token])||void 0===c?void 0:c.decimals.toString())," ").concat((null===k||void 0===k||null===(d=k[null===S||void 0===S?void 0:S.token])||void 0===d?void 0:d.symbol)?null===k||void 0===k||null===(j=k[null===S||void 0===S?void 0:S.token])||void 0===j?void 0:j.symbol:de.symbol,")"),Q===s.a.NoTrial||(null===S||void 0===S?void 0:S.trialType)===s.a.NoTrial?"":" of ",Object(s.t)(s.d[x])?Q&&0!==Q?" ".concat(Q," ").concat(ge.label):Q===s.a.NoTrial||(null===S||void 0===S?void 0:S.trialType)===s.a.NoTrial?"":"{XXX}":O()(null===S||void 0===S?void 0:S.trialPeriod,{largest:1,round:!0,unitMeasures:f.b})]}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),"Note: You can cancel your subscription at any time"]})})]}),Object(g.jsx)("button",{className:"connect-btn",children:"Connect Wallet"}),Object(g.jsx)("p",{className:"power",children:"Powered by PumaPay v3.0"})]})]}),!P&&Object(g.jsxs)(l.a,{eventKey:"code",title:"Code",tabClassName:P?"disabled":"",disabled:P,children:[Object(g.jsx)("p",{children:"Copy the code snippet and add it to your website"}),Object(g.jsx)("div",{className:"code-wrap",children:Object(g.jsx)("pre",{children:Object(g.jsxs)("code",{children:[Object(g.jsx)("span",{className:"tags",children:"<PumaPayWidget"}),Object(g.jsxs)("div",{className:"body",children:[Object(g.jsx)("span",{className:"attribute",children:"BillingModelId"}),"=",'"'.concat(v,'"'),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"attribute",children:"BillingModelType"}),"=",'"'.concat(ke[x],'"'),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"attribute",children:"UniqueReference"}),"=",'""',Object(g.jsx)("br",{}),Object(s.t)(s.d[x])&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{className:"attribute",children:"BillingModelName"}),"=",'"'.concat(X,'"'),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"attribute",children:"SellingPrice"}),"=",'"'.concat(G,'"'),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"attribute",children:"SellingToken"}),"=",'"'.concat(null===de||void 0===de?void 0:de.address,'"'),Object(g.jsx)("br",{}),s.d[x]===s.d.RecurringDynamic&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{className:"attribute",children:"NumberOfPayments"}),"=",'"'.concat(V,'"'),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"attribute",children:"Frequency"}),"=",'"'.concat(ne*pe.periodInSeconds,'"'),Object(g.jsx)("br",{}),(null===S||void 0===S?void 0:S.trialType)!==s.a.NoTrial&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{className:"attribute",children:"TrialPeriod"}),"=",'"'.concat(Q*ge.periodInSeconds,'"'),Object(g.jsx)("br",{})]}),(null===S||void 0===S?void 0:S.trialType)==s.a.PaidTrial&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{className:"attribute",children:"InitialAmount"}),"=",'"'.concat(ie,'"'),Object(g.jsx)("br",{})]})]})]})]}),">",Object(g.jsx)("span",{className:"tags",children:"</PumaPayWidget> "}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:"tags",children:"<script"}),Object(g.jsxs)("div",{className:"body",children:[Object(g.jsx)("span",{className:"attribute",children:"src"}),'="https://assets.pumapay.io/widget',"/",'widgetScript.js"']}),">",Object(g.jsx)("span",{className:"tags",children:"<\/script>"})]})})})]}),Object(s.t)(s.d[x])&&!P&&Object(g.jsxs)(l.a,{eventKey:"config",title:"Configuration",tabClassName:P?"disabled":"",disabled:P,children:[Object(g.jsx)("p",{children:"You can configure the dynamic fields of your billing model "}),Object(g.jsx)(h,{billingModelId:v,billingModelType:x,billingModelDetails:S,widgetData:Te})]}),!P&&Object(g.jsxs)(l.a,{eventKey:"css",title:"CSS",tabClassName:P?"disabled":"",disabled:P,children:[Object(g.jsx)("p",{children:"You will be able to customise the look and feel of the widget."}),Object(g.jsx)("div",{style:{width:"100%",textAlign:"center"},children:"Coming Soon!"})]})]}),!P&&Object(g.jsx)("div",{className:"code-copy",children:Object(g.jsx)(b.b,{id:"CopyButtonPrimary",onClick:function(){navigator.clipboard.writeText(C).then((function(){R(!0),setTimeout((function(){R(!1)}),3e3)}),(function(e){console.error("Could not copy text: "+e)}))},children:D?"Copied":"Copy"})})]})}},805:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return C}));var r,a,i,c=t(3),o=t.n(c),l=t(36),d=t(24),s=t(4),u=t(0),b=t(318),p=t(7),m=t(90),j=t(17),f=t(10),g=t(97),h=t(83),x=t(27),O=t(62),v=t(125),y=t(21),w=t(37),S=t(51),N=t(159),P=t(158),T=t(340),k=t(215),M=t(80),I=t(423),D=t(1),R=p.default.div(r||(r=Object(s.a)(["\n  .sideContent {\n    margin-bottom: 90px;\n  }\n  .tab-wrapper {\n    margin-top: 25px;\n    .tab-content .tab-pane {\n      display: none;\n      &.active {\n        display: block;\n      }\n      h3 {\n        font-size: 16px;\n        font-weight: 500;\n      }\n\n      .btn-theme {\n        background: #7023ff;\n        border: 0;\n        padding: 12px 40px;\n        border-radius: 10px;\n        color: #fff;\n        font-size: 14px;\n      }\n      p.power {\n        font-size: 9px;\n        color: #b2acbf;\n      }\n      p {\n        font-size: 14px;\n        color: #756f82;\n        margin-bottom: 20px;\n      }\n      .notice-box {\n        box-shadow: 2px 5px 10px 2px #4a435926;\n        border-radius: 15px;\n        padding: 30px 30px 80px;\n        text-align: center;\n        margin-bottom: 20px;\n      }\n      .code-box {\n        background: #1a1526;\n        color: #cbcbcb;\n        padding: 10px 20px;\n        border-radius: 8px;\n        table tr td:first-child {\n          padding: 0 20px 0 0;\n        }\n      }\n    }\n    .tab-menu {\n      display: flex;\n      border-bottom: 1px solid #ddd;\n      margin-bottom: 20px;\n      font-size: 14px;\n      .tab-item {\n        padding: 7px 9px;\n        color: #756f82;\n        cursor: pointer;\n      }\n\n      .tab-item.active {\n        color: #7023ff;\n        border-bottom: 2px solid #7023ff;\n      }\n    }\n  }\n  .tab-footer {\n    display: flex;\n    justify-content: space-between;\n\n    .code-copy {\n      display: flex;\n      align-items: center;\n    }\n  }\n  .arrow {\n    margin: 0 20px 0 0;\n    padding-top: 1.7rem;\n    cursor: pointer;\n  }\n  &.open {\n    padding-left: 220px;\n    height: 80vh;\n    overflow-y: hidden;\n    margin-top: 1rem;\n    padding-right: 2rem;\n  }\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  padding-left: 100px;\n  padding-right: 20px;\n"]))),F=p.default.div(a||(a=Object(s.a)(["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n  padding: 20px;\n  background: #fff;\n  border-top: 1px solid #ddd;\n  text-align: right;\n  button {\n    width: 120px;\n    height: 40px;\n    font-size: 14px;\n    border-radius: 10px;\n    display: inline-block;\n    padding: 5px !important;\n  }\n"]))),q=p.default.div(i||(i=Object(s.a)(["\n  margin-left: 0;\n"])));function C(){var e=Object(b.a)().t,n=Object(j.b)(),t=n.account,r=n.chainId,a=Object(w.h)().state,i=Object(w.g)(),c=Object(y.c)(),s=Object(u.useContext)(P.a),p=Object(u.useState)(!1),C=Object(d.a)(p,2),B=C[0],E=C[1],A=Object(u.useState)(!1),X=Object(d.a)(A,2),U=X[0],z=X[1],W=Object(u.useState)(""),G=Object(d.a)(W,2),L=G[0],Y=G[1],K=Object(u.useState)(""),V=Object(d.a)(K,2),H=V[0],J=V[1],_=Object(u.useState)(""),Q=Object(d.a)(_,2),Z=Q[0],$=Q[1],ee=Object(u.useState)(null),ne=Object(d.a)(ee,2),te=ne[0],re=ne[1],ae=Object(u.useState)(!1),ie=Object(d.a)(ae,2),ce=ie[0],oe=ie[1],le=Object(u.useState)(null),de=Object(d.a)(le,2),se=de[0],ue=de[1],be=Object(u.useState)(null),pe=Object(d.a)(be,2),me=pe[0],je=pe[1],fe=Object(u.useState)(null),ge=Object(d.a)(fe,2),he=ge[0],xe=ge[1],Oe=Object(u.useState)(null),ve=Object(d.a)(Oe,2),ye=ve[0],we=ve[1],Se=Object(u.useState)(!1),Ne=Object(d.a)(Se,2),Pe=(Ne[0],Ne[1]),Te=Object(u.useState)(1),ke=Object(d.a)(Te,2),Me=ke[0],Ie=ke[1],De=Object(u.useState)(1),Re=Object(d.a)(De,2),Fe=Re[0],qe=Re[1],Ce=Object(u.useState)(1),Be=Object(d.a)(Ce,2),Ee=Be[0],Ae=Be[1],Xe=Object(u.useState)(null),Ue=Object(d.a)(Xe,2),ze=Ue[0],We=Ue[1],Ge=Object(u.useState)(1),Le=Object(d.a)(Ge,2),Ye=Le[0],Ke=Le[1],Ve=Object(u.useState)({label:"Hourly",periodInSeconds:3600}),He=Object(d.a)(Ve,2),Je=He[0],_e=He[1],Qe=Object(u.useState)({label:"Hourly",periodInSeconds:3600}),Ze=Object(d.a)(Qe,2),$e=Ze[0],en=Ze[1],nn=Object(u.useState)({label:"Days",periodInSeconds:86400}),tn=Object(d.a)(nn,2),rn=tn[0],an=tn[1],cn=Object(u.useState)(1),on=Object(d.a)(cn,2),ln=on[0],dn=on[1],sn=Object(u.useState)(1),un=Object(d.a)(sn,2),bn=un[0],pn=un[1];Object(u.useEffect)((function(){a&&(z(a.isEdit),je(a.title),Y(a.merchantName),J(a.merchantUrl),$(a.reference),xe(a.price),we(a.currency),Pe(a.checked),Ie(a.numberOfTrialPeriods),Ke(a.noOfDurationPeriods),qe(a.bmFrequency),_e(a.bmFrequencyPeriod),en(a.durationPeriod),an(a.trialPeriod),dn(a.initialAmount),re(a.billingModelType),pn(a.trialType),oe(a.onUpdate),ue(a.billingModelId),Ae(a.bmFrequencyPeriod?a.bmFrequency*a.bmFrequencyPeriod.periodInSeconds:null),We(a.durationPeriod?Math.floor(a.durationPeriod.periodInSeconds*a.noOfDurationPeriods/(a.bmFrequency*a.bmFrequencyPeriod.periodInSeconds)):null))}),[a]),a||console.log("need to retrieve missing bm details");var mn=Object(x.k)(),jn=Object(x.j)(),fn=Object(x.i)(),gn=Object(x.d)(),hn=Object(x.f)(),xn=Object(x.h)(),On=Object(v.c)(null===a||void 0===a?void 0:a.currency.address),vn=function(e,n){i.push("/merchant/billing-model-details?billing-model-type=".concat(f.d[e],"&billing-model-id=").concat(n.events[0].args[0].toString()))},yn=function(){var e=Object(l.a)(o.a.mark((function e(n,a,i){var l,d,s,u,b,p=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=p.length>3&&void 0!==p[3]&&p[3],d="".concat(f.c[a]," billing model ").concat(l?"updated":"created"),s=n.hash,u={tokenAddress:null===On||void 0===On?void 0:On.address,amount:i||"Dynamic",name:me,merchantName:L,merchantUrl:H,uniqueReference:Z},c(Object(O.a)({hash:s,from:t,chainId:r,bmCreation:u,summary:d})),e.next=7,n.wait(f.g);case 7:b=e.sent,E(!1),vn(a,b);case 10:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),wn=function(e,n){throw E(!1),console.debug("Failed to create BM for ".concat(n,". Reason: ").concat(e.message)),e},Sn=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((null===a||void 0===a?void 0:a.currency.address)||(alert("invalid currency address"),i.push("/merchant/dashboard")),E(!0),f.d[te]!==f.d.SingleDynamic){e.next=7;break}return e.next=5,Nn(jn,f.d.SingleDynamic,String(he));case 5:e.next=9;break;case 7:return e.next=9,Pn(mn,f.d.Single,String(he));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Nn=function(){var e=Object(l.a)(o.a.mark((function e(n,r,a){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.estimateGas.createBillingModel(t,L,Z,H).catch((function(e){return console.error(e),null}));case 2:return i=e.sent,e.abrupt("return",n.createBillingModel(t,L,Z,H,{gasLimit:Object(f.j)(i)}).then(function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,yn(n,r,a);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){wn(e,r)})));case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),Pn=function(){var e=Object(l.a)(o.a.mark((function e(n,r,a){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,n.estimateGas.createBillingModel(t,me,L,Z,H,a,null===ye||void 0===ye?void 0:ye.address).catch((function(e){return console.error(e),null}));case 3:return i=e.sent,e.abrupt("return",n.createBillingModel(t,me,L,Z,H,a,null===ye||void 0===ye?void 0:ye.address,{gasLimit:Object(f.j)(i)}).then(function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,yn(n,r,a);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){wn(e,r)})));case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),Tn=function(){var e=Object(l.a)(o.a.mark((function e(n,r){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.estimateGas.createBillingModel(t,bn,L,Z,H).catch((function(e){return console.error(e),null}));case 2:return a=e.sent,e.abrupt("return",n.createBillingModel(t,bn,L,Z,H,{gasLimit:Object(f.i)(a)}).then(function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,yn(n,r);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){wn(e,r)})));case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),kn=function(){var e=Object(l.a)(o.a.mark((function e(n,r,a){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.estimateGas.createBillingModel(t,me,L,Z,H,a,null===ye||void 0===ye?void 0:ye.address,Ee,ze).catch((function(e){return console.error(e),null}));case 2:return i=e.sent,e.abrupt("return",n.createBillingModel(t,me,L,Z,H,a,null===ye||void 0===ye?void 0:ye.address,Ee,ze,{gasLimit:Object(f.i)(i)}).then(function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,yn(n,r);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){wn(e,r)})));case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),Mn=function(){var e=Object(l.a)(o.a.mark((function e(n,r,a){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.estimateGas.createBillingModel(t,me,L,Z,H,a,null===ye||void 0===ye?void 0:ye.address,Ee,(Number(rn.periodInSeconds)*Number(Me)).toString(),ze).catch((function(e){return console.error(e),null}));case 2:return i=e.sent,e.abrupt("return",n.createBillingModel(t,me,L,Z,H,a,null===ye||void 0===ye?void 0:ye.address,Ee,(Number(rn.periodInSeconds)*Number(Me)).toString(),ze,{gasLimit:Object(f.i)(i)}).then(function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,yn(n,r);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){wn(e,r)})));case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),In=function(){var e=Object(l.a)(o.a.mark((function e(n,r,a){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.estimateGas.createBillingModel(t,me,L,Z,H,a,null===ye||void 0===ye?void 0:ye.address,Ee,(Number(rn.periodInSeconds)*Number(Me)).toString(),String(ln),ze).catch((function(e){return console.error(e),null}));case 2:return i=e.sent,e.abrupt("return",n.createBillingModel(t,me,L,Z,H,a,null===ye||void 0===ye?void 0:ye.address,Ee,(Number(rn.periodInSeconds)*Number(Me)).toString(),String(ln),ze,{gasLimit:Object(f.i)(i)}).then(function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,yn(n,r);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){wn(e,r)})));case 4:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),Dn=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(!0),f.d[te]!==f.d.RecurringDynamic){e.next=6;break}return e.next=4,Tn(gn,f.d.RecurringDynamic);case 4:e.next=18;break;case 6:e.t0=bn,e.next=e.t0===f.a.FreeTrial?9:e.t0===f.a.PaidTrial?12:(e.t0,f.a.NoTrial,15);break;case 9:return e.next=11,Mn(hn,f.d.RecurringFreeTrial,String(he));case 11:case 14:case 17:return e.abrupt("break",18);case 12:return e.next=14,In(xn,f.d.RecurringPaidTrial,String(he));case 15:return e.next=17,kn(fn,f.d.Recurring,String(he));case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Rn=function(){var e=Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,mn.estimateGas.editBillingModel(se,t,me,String(he),null===ye||void 0===ye?void 0:ye.address,L,H);case 2:return n=e.sent,E(!0),e.abrupt("return",mn.editBillingModel(se,t,me,String(he),null===ye||void 0===ye?void 0:ye.address,L,H,{gasLimit:Object(f.j)(n)}).then(function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,yn(n,f.d.Single,he,!0);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){throw E(!1),console.debug("Failed to update billing model. Reason:",e),e})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fn=function(){var e=Object(l.a)(o.a.mark((function e(){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=bn,e.next=e.t0===f.a.FreeTrial?3:e.t0===f.a.PaidTrial?5:e.t0===f.a.NoTrial?7:9;break;case 3:return n=hn,e.abrupt("break",9);case 5:return n=xn,e.abrupt("break",9);case 7:return n=fn,e.abrupt("break",9);case 9:return e.next=11,n.estimateGas.editBillingModel(se,t,me,L,H);case 11:return r=e.sent,E(!0),e.abrupt("return",n.editBillingModel(se,t,me,L,H,{gasLimit:Object(f.i)(r)}).then(function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,yn(n,f.d[te],he,!0);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){throw E(!1),console.debug("Failed to edit billing model. Reason:",e),e})));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),qn={name:me,merchantName:L,merchantUrl:H,amount:he,token:null===ye||void 0===ye?void 0:ye.address,trialType:bn,numberOfPayments:ze||null,frequency:Ee||null,initialAmount:ln,trialPeriod:rn?rn.periodInSeconds*Number(String(Me)):null};return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(R,{className:s?" open":"",children:[Object(D.jsx)(T.a,{}),Object(D.jsx)("div",{className:"arrow",children:Object(D.jsx)("img",{src:k.default,alt:"arrow",onClick:function(){f.d[te]===f.d.Single||f.d[te]===f.d.SingleDynamic?i.push({pathname:U?"/merchant/single-billing/edit-billing-model?billing-model-type=".concat(te,"&billing-model-id=").concat(se):"/merchant/create/single-billing-model",state:{name:me,amount:he,token:null===ye||void 0===ye?void 0:ye.address,merchantName:L,uniqueReference:Z,merchantUrl:H,isDynamic:f.d[te]===f.d.SingleDynamic}}):i.push({pathname:U?"/merchant/recurring-billing/edit-billing-model?billing-model-type=".concat(te,"&billing-model-id=").concat(se):"/merchant/create/recurring-billing-model",state:{name:me,merchantName:L,uniqueReference:Z,merchantUrl:H,amount:he,token:null===ye||void 0===ye?void 0:ye.address,numberOfTrialPeriods:Me,noOfDurationPeriods:Ye,durationPeriod:$e,bmFrequency:Fe,bmFrequencyPeriod:Je,trialType:bn,initialAmount:ln,trialPeriod:rn,isDynamic:f.d[te]===f.d.RecurringDynamic}})}})}),Object(D.jsxs)("div",{className:"sideContent",children:[Object(D.jsx)(q,{children:Object(D.jsx)(m.a,{style:{width:"55%"},gap:"lg",justify:"center",children:Object(D.jsx)(N.a,{title:e("preview"),info:e("previewDescription")})})}),Object(D.jsx)(I.a,{billingModelType:f.d[te],billingModelDetails:qn,isPreview:!0})]}),Object(D.jsx)(h.Box,{as:"form",onSubmit:function(e){return function(e){if(e.preventDefault(),Object(f.s)(f.d[te])){if(ce)return void Rn().then(function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}));Sn().then(function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}))}else{if(ce)return void Fn().then(function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}));Dn().then(function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){return console.error(e)}))}}(e)},children:Object(D.jsxs)(F,{className:"btn-wrap",style:{zIndex:1},children:[Object(D.jsx)(g.b,{style:{borderColor:"#B2ACBF",marginRight:"10px",background:"transparent",color:"#000",width:"130px",display:"inline-block",padding:"10px",borderRadius:"10px"},as:S.b,to:"/merchant/create/choose-billing-model-type",children:"Cancel"}),Object(D.jsx)(g.b,{id:"create-bm-button",style:{padding:16},children:ce?B?Object(D.jsx)(M.a,{}):"Update":B?Object(D.jsx)(M.a,{}):"Create"})]})})]})})}}}]);
//# sourceMappingURL=5.727f6f9d.chunk.js.map