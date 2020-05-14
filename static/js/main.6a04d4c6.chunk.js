(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{193:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(24),l=t.n(s),c=(t(80),t(81),t(198)),i=t(64),o=t.n(i);var d=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{bg:"dark",variant:"dark"},r.a.createElement(c.a.Brand,{href:"#"},r.a.createElement("img",{src:o.a,style:{width:"300px",height:"90px"}}))),r.a.createElement("div",null,e.lastupdated))},m=t(3),u=t.n(m),f=t(8),h=t(67),p=t(68),g=t(71),b=t(73),v=t(195),y=t(36),E=t.n(y),w=t(196),N=t(197);var x=function(e){return r.a.createElement(v.a,{style:{fontSize:"150%",fontStyle:"bold",margin:"10px 0px 10px 0px",background:"#FFFFFF"}},r.a.createElement(w.a,null,r.a.createElement(N.a,null,r.a.createElement("b",null,"Total")," : ",e.summary.total," \xa0",r.a.createElement("i",{className:"fa fa-arrow-up"}),e.todays.cases),r.a.createElement(N.a,null,r.a.createElement("b",null,"Recovered")," : ",e.summary.discharged," \xa0",r.a.createElement("i",{className:"fa fa-arrow-up",style:{color:"green"}}),e.todays.recovered),r.a.createElement(N.a,null,r.a.createElement("b",null,"Deaths")," : ",e.summary.deaths,"\xa0",r.a.createElement("i",{className:"fa fa-arrow-up",style:{color:"red"}}),e.todays.death)))};var k=function(e){var a=e.states.length>0?e.states.map((function(a){return r.a.createElement("div",{className:"card m-1",key:a.loc,style:{width:"300px"}},!0===a.high?r.a.createElement("div",{className:"card-header btn bg-danger font-weight-bolder d-flex"},r.a.createElement("h5",{style:{flex:3},onClick:function(){return!a.fav&&e.addToFav(a.loc)}},a.loc),r.a.createElement("p",{style:{flex:1}},r.a.createElement("i",{className:"fa fa-arrow-up",style:{color:"red"}})," ","\xa0",a.increase)):!0===a.medium?r.a.createElement("div",{className:"card-header btn bg-warning font-weight-bolder d-flex"},r.a.createElement("h5",{style:{flex:3},onClick:function(){return!a.fav&&e.addToFav(a.loc)}},a.loc),r.a.createElement("p",{style:{flex:1}},r.a.createElement("i",{className:"fa fa-arrow-up",style:{color:"orange"}}),"\xa0",a.increase)):r.a.createElement("div",{className:"card-header btn bg-primary font-weight-bolder d-flex"},r.a.createElement("h5",{style:{flex:3},onClick:function(){return!a.fav&&e.addToFav(a.loc)}},a.loc),r.a.createElement("p",{style:{flex:1}},r.a.createElement("i",{className:"fa fa-arrow-up",style:{color:"green"}}),"\xa0",a.increase)),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Total",!0===a.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},a.totalConfirmed):!0===a.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},a.totalConfirmed):r.a.createElement("span",{className:"badge badge-primary badge-pill"},a.totalConfirmed)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Recovered",!0===a.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},a.discharged):!0===a.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},a.discharged):r.a.createElement("span",{className:"badge badge-primary badge-pill"},a.discharged)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Deaths",!0===a.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},a.deaths):!0===a.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},a.deaths):r.a.createElement("span",{className:"badge badge-primary badge-pill"},a.deaths)))))})):"";return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row w-100 mt-2"},a))};var O=function(e){var a=e.states.length>0?e.states.map((function(e){return r.a.createElement("div",{className:"card m-2",key:e.loc,style:{width:"300px"}},!0===e.high?r.a.createElement("div",{className:"card-header btn bg-danger font-weight-bolder d-flex"},r.a.createElement("h5",{style:{flex:3}},r.a.createElement("i",{className:"fa fa-star"}),e.loc),r.a.createElement("p",{style:{flex:1}},r.a.createElement("i",{className:"fa fa-arrow-up",style:{color:"red"}})," ","\xa0",e.increase)):!0===e.meduim?r.a.createElement("div",{className:"card-header btn bg-warning font-weight-bolder d-flex"},r.a.createElement("h5",{style:{flex:3}}," ",r.a.createElement("i",{className:"fa fa-star"}),e.loc),r.a.createElement("p",{style:{flex:1}},r.a.createElement("i",{className:"fa fa-arrow-up",style:{color:"orange"}}),"\xa0",e.increase)):r.a.createElement("div",{className:"card-header btn bg-primary font-weight-bolder d-flex"},r.a.createElement("h5",{style:{flex:3}}," ",r.a.createElement("i",{className:"fa fa-star"}),e.loc),r.a.createElement("p",{style:{flex:1}},r.a.createElement("i",{className:"fa fa-arrow-up",style:{color:"green"}}),"\xa0",e.increase)),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Total",!0===e.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},e.totalConfirmed):!0===e.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},e.totalConfirmed):r.a.createElement("span",{className:"badge badge-primary badge-pill"},e.totalConfirmed)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Discharged",!0===e.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},e.discharged):!0===e.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},e.discharged):r.a.createElement("span",{className:"badge badge-primary badge-pill"},e.discharged)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Deaths",!0===e.high?r.a.createElement("span",{className:"badge badge-danger badge-pill"},e.deaths):!0===e.low?r.a.createElement("span",{className:"badge badge-warning badge-pill"},e.deaths):r.a.createElement("span",{className:"badge badge-primary badge-pill"},e.deaths)))))})):"";return 0!==e.states.length&&r.a.createElement("div",{className:"container mb-lg-5"},r.a.createElement("div",{className:"row w-100 mt-2"},a))},D=t(69);var j=function(e){return r.a.createElement(D.a,{data:e.chartData})},C=function(e){Object(b.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={summary:Object,todays:{recovered:0,cases:0,death:0},states:[],favstates:[],yesterday:[],chartData:{labels:[],datasets:[{data:[],label:"",backgroundColor:[]}]}},e}return Object(p.a)(t,[{key:"getRandomColor",value:function(){var e=Object(f.a)(u.a.mark((function e(){var a,t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Math.round(16777215*Math.random()),t=a>>16,n=a>>8&255,r=255&a,e.abrupt("return","rgba("+t+", "+n+", "+r+", 0.6)");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;this.addToFav.bind(this),this.getDataOfLastest().then((function(){e.getDataOfHistory()}))}},{key:"addTotalAndFav",value:function(){var e=Object(f.a)(u.a.mark((function e(a){var t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.state.chartData.datasets[0].label="State",e.next=3,a.map(function(){var e=Object(f.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.fav=void 0!==t.state.fav.find((function(e){return e===a.loc})),t.state.chartData.labels.push(a.loc),t.state.chartData.datasets[0].data.push(a.totalConfirmed),e.t0=t.state.chartData.datasets[0].backgroundColor,e.next=6,t.getRandomColor();case 6:return e.t1=e.sent,e.t0.push.call(e.t0,e.t1),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}());case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"checkHighLow",value:function(){var e=Object(f.a)(u.a.mark((function e(a){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,a.map((function(e){return t<e.totalConfirmed&&(t=e.totalConfirmed),e})),n=t-(t-1)/3,r=t-(t-1)/3*2,a.map((function(e){return e.totalConfirmed>=n?e.high=!0:e.totalConfirmed>r&&(e.medium=!0),e})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"findIncrease",value:function(){var e=Object(f.a)(u.a.mark((function e(a){var t,n=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.todays,a.map((function(e){var a=n.state.yesterday.find((function(a){return a.loc===e.loc}));e.increase=e.totalConfirmed-a.totalConfirmed,t.cases+=e.increase,t.recovered=e.discharged-a.discharged,t.death=e.deaths-a.deaths})),this.setState({todays:t}),e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"manipulateData",value:function(){var e=Object(f.a)(u.a.mark((function e(a){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.t1=this,e.next=4,this.addTotalAndFav(a);case 4:return e.t2=e.sent,e.next=7,e.t1.checkHighLow.call(e.t1,e.t2);case 7:return e.t3=e.sent,e.next=10,e.t0.findIncrease.call(e.t0,e.t3);case 10:for(a=e.sent,t=this.state.states,n=this.state.favstates,r=0;r<a.length;r++)a[r].fav?n.push(a[r]):t.push(a[r]);this.setState({states:t,favstates:n});case 15:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"getDataOfHistory",value:function(){var e=Object(f.a)(u.a.mark((function e(){var a,t=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=JSON,e.next=3,window.localStorage.getItem("covidstatesfav");case 3:return e.t1=e.sent,void 0===(a=e.t0.parse.call(e.t0,e.t1))||null===a?this.setState({fav:[]}):this.setState({fav:a}),e.next=8,E.a.get("https://api.rootnet.in/covid19-in/stats/latest").then((function(e){return e.data.data})).then((function(e){t.setState({summary:e.summary}),t.manipulateData(e.regional)}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDataOfLastest",value:function(){var e=Object(f.a)(u.a.mark((function e(){var a=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.rootnet.in/covid19-in/stats/history").then((function(e){return e.data.data})).then(function(){var e=Object(f.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({yesterday:t[t.length-2].regional});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"addToFav",value:function(){var e=Object(f.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.state.fav.push(a),window.localStorage.setItem("covidstatesfav",JSON.stringify(this.state.fav)),window.location.reload();case 3:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(x,{summary:this.state.summary,todays:this.state.todays}),r.a.createElement(j,{chartData:this.state.chartData}),r.a.createElement(O,{states:this.state.favstates,getDataOfHistory:this.getDataOfHistory}),r.a.createElement(k,{states:this.state.states,getDataOfHistory:this.getDataOfHistory,addToFav:this.addToFav.bind(this)}))}}]),t}(n.Component);var F=function(e){return r.a.createElement("div",{className:"footer-copyright bg-dark text-white text-center py-3"},"@ Rishabh Anand(Rishabh-1999) @Arihant Jain(Destroyer)")};var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(C,null),r.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,a,t){e.exports=t.p+"static/media/logo.15431f3b.png"},75:function(e,a,t){e.exports=t(193)},80:function(e,a,t){},81:function(e,a,t){}},[[75,1,2]]]);
//# sourceMappingURL=main.6a04d4c6.chunk.js.map