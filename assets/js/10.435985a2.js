(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{152:function(t,s,o){"use strict";var n=o(4),e=o(15),a=o(16),c=o(63),i=o(59),r=o(6),l=o(99).f,d=o(98).f,u=o(9).f,v=o(97).trim,f=n.Number,g=f,p=f.prototype,m="Number"==a(o(61)(p)),C="trim"in String.prototype,_=function(t){var s=i(t,!1);if("string"==typeof s&&s.length>2){var o,n,e,a=(s=C?s.trim():v(s,3)).charCodeAt(0);if(43===a||45===a){if(88===(o=s.charCodeAt(2))||120===o)return NaN}else if(48===a){switch(s.charCodeAt(1)){case 66:case 98:n=2,e=49;break;case 79:case 111:n=8,e=55;break;default:return+s}for(var c,r=s.slice(2),l=0,d=r.length;l<d;l++)if((c=r.charCodeAt(l))<48||c>e)return NaN;return parseInt(r,n)}}return+s};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var s=arguments.length<1?0:t,o=this;return o instanceof f&&(m?r((function(){p.valueOf.call(o)})):"Number"!=a(o))?c(new g(_(s)),o,f):_(s)};for(var h,w=o(8)?l(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;w.length>b;b++)e(g,h=w[b])&&!e(f,h)&&u(f,h,d(g,h));f.prototype=p,p.constructor=f,o(11)(n,"Number",f)}},153:function(t,s,o){"use strict";var n=o(3),e=o(60)(!0);n(n.P,"Array",{includes:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),o(96)("includes")},154:function(t,s,o){"use strict";var n=o(3),e=o(157);n(n.P+n.F*o(158)("includes"),"String",{includes:function(t){return!!~e(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},157:function(t,s,o){var n=o(62),e=o(17);t.exports=function(t,s,o){if(n(s))throw TypeError("String#"+o+" doesn't accept regex!");return String(e(t))}},158:function(t,s,o){var n=o(2)("match");t.exports=function(t){var s=/./;try{"/./"[t](s)}catch(o){try{return s[n]=!1,!"/./"[t](s)}catch(t){}}return!0}},165:function(t,s,o){},166:function(t,s,o){},173:function(t,s,o){"use strict";o(165)},174:function(t,s,o){"use strict";o(166)},186:function(t,s,o){"use strict";o(14),o(26),o(153),o(154),o(152);var n={props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","center","right"].includes(t)}}},computed:{rowStyle:function(){return{marginLeft:-this.gutter/2+"px",marginRight:-this.gutter/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach((function(s){s.gutter=t.gutter}))}},e=(o(173),o(1)),a=Object(e.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"405a2239",null);s.a=a.exports},187:function(t,s,o){"use strict";var n=o(10),e=(o(152),o(153),o(154),o(26),o(14),o(20),o(27),function(t){var s=Object.keys(t),o=!0;return s.forEach((function(t){["span","offset"].includes(t)||(o=!1)})),o}),a={props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:e},narrowPc:{type:Object,validator:e},pc:{type:Object,validator:e},widePc:{type:Object,validator:e}},data:function(){return{gutter:0}},computed:{colClass:function(){var t=this.span,s=this.offset,o=this.ipad,e=this.narrowPc,a=this.pc,c=this.widePc;return[t&&"col-".concat(t),s&&"offset-".concat(s)].concat(Object(n.a)(o?["col-ipad-".concat(o.span)]:[]),Object(n.a)(e?["col-narrow-pc-".concat(e.span)]:[]),Object(n.a)(a?["col-pc-".concat(a.span)]:[]),Object(n.a)(c?["col-wide-pc-".concat(c.span)]:[]))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},c=(o(174),o(1)),i=Object(c.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"593afbf9",null);s.a=i.exports},200:function(t,s,o){},218:function(t,s,o){"use strict";o(200)},238:function(t,s,o){"use strict";o.r(s);o(25),o(95);var n=o(186),e=o(187),a={components:{GRow:n.a,GCol:e.a},data:function(){return{content:'\n          * {\n            box-sizing: border-box;\n          }\n          <g-row class="demoRow" gutter="10">\n            <g-col span="8">\n              <div class="demoCol">8</div>\n            </g-col>\n            <g-col span="8" offset="8">\n              <div class="demoCol">8</div>\n            </g-col>\n          </g-row>\n          <g-row class="demoRow" gutter="10">\n            <g-col span="6" offset="6">\n              <div class="demoCol">6</div>\n            </g-col>\n            <g-col span="6" offset="6">\n              <div class="demoCol">6</div>\n            </g-col>\n          </g-row>\n          <g-row class="demoRow" gutter="10">\n            <g-col span="4">\n              <div class="demoCol">4</div>\n            </g-col>\n            <g-col span="4" offset="4">\n              <div class="demoCol">4</div>\n            </g-col>\n            <g-col span="4" offset="8">\n              <div class="demoCol">4</div>\n            </g-col>\n          </g-row>\n          <g-row class="demoRow" gutter="10">\n            <g-col span="2">\n              <div class="demoCol">2</div>\n            </g-col>\n            <g-col span="2" offset="2">\n              <div class="demoCol">2</div>\n            </g-col>\n            <g-col span="2">\n              <div class="demoCol">2</div>\n            </g-col>\n            <g-col span="2" offset="2">\n              <div class="demoCol">2</div>\n            </g-col>\n            <g-col span="2">\n              <div class="demoCol">2</div>\n            </g-col>\n            <g-col span="2" offset="2">\n              <div class="demoCol">2</div>\n            </g-col>\n            <g-col span="2">\n              <div class="demoCol">2</div>\n            </g-col>\n            <g-col span="2" offset="2">\n              <div class="demoCol">2</div>\n            </g-col>\n          </g-row>\n          '.replace(/^ {8}/gm,"").trim()}}},c=(o(218),o(1)),i=Object(c.a)(a,(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticStyle:{"padding-top":"16px"}},[o("h2",[t._v("设置空隙")]),t._v(" "),t._m(0),t._v(" "),o("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"8"}},[o("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),o("g-col",{attrs:{span:"8",offset:"8"}},[o("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),o("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"6",offset:"6"}},[o("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),o("g-col",{attrs:{span:"6",offset:"6"}},[o("div",{staticClass:"demoCol"},[t._v("6")])])],1),t._v(" "),o("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"4"}},[o("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4",offset:"4"}},[o("div",{staticClass:"demoCol"},[t._v("4")])]),t._v(" "),o("g-col",{attrs:{span:"4",offset:"8"}},[o("div",{staticClass:"demoCol"},[t._v("4")])])],1),t._v(" "),o("g-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[o("g-col",{attrs:{span:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2",offset:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2",offset:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2",offset:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])]),t._v(" "),o("g-col",{attrs:{span:"2",offset:"2"}},[o("div",{staticClass:"demoCol"},[t._v("2")])])],1),t._v(" "),t._m(1),t._v(" "),o("pre",[o("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("预览")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("代码")])])}],!1,null,"c95d5896",null);s.default=i.exports}}]);