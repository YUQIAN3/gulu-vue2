(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{150:function(e,t,n){},155:function(e,t,n){"use strict";n(150)},156:function(e,t,n){"use strict";var r={props:["name"]},a=(n(155),n(1)),s=Object(a.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"g-icon"},[t("use",{attrs:{"xlink:href":"#icon-"+this.name}})])}),[],!1,null,"9e006f64",null);t.a=s.exports},175:function(e,t,n){},193:function(e,t,n){"use strict";n(175)},195:function(e,t,n){"use strict";var r={components:{Icon:n(156).a},props:{value:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:String}}},a=(n(193),n(1)),s=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper",class:{error:e.error}},[n("input",{attrs:{disabled:e.disabled,readonly:e.readonly,type:"text"},domProps:{value:e.value},on:{change:function(t){e.$emit("change",t,"hello")},input:function(t){e.$emit("input",t.target.value)}}}),e._v(" "),e.error?[n("icon",{staticClass:"icon-error",attrs:{name:"error"}}),e._v(" "),n("span",{staticClass:"errorMessage"},[e._v(e._s(e.error))])]:e._e()],2)}),[],!1,null,"3cc17852",null);t.a=s.exports},240:function(e,t,n){"use strict";n.r(t);n(25),n(95);var r={components:{GInput:n(195).a},data:function(){return{value:"1",content:"\n          data:{\n            value: '1'\n          }\n          <g-input v-model=\"value\"></g-input>\n          <div>\n            value: {{value}}\n          </div>\n          ".replace(/^ {8}/gm,"").trim()}}},a=n(1),s=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[e._v("双向绑定")]),e._v(" "),e._m(0),e._v(" "),n("g-input",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),n("div",[e._v("\n    value: "+e._s(e.value)+"\n  ")]),e._v(" "),e._m(1),e._v(" "),n("pre",[n("code",[e._v(e._s(e.content))])])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("预览")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("代码")])])}],!1,null,null,null);t.default=s.exports}}]);