(function(t){function e(e){for(var n,i,o=e[0],u=e[1],c=e[2],l=0,d=[];l<o.length;l++)i=o[l],r[i]&&d.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var u=a[i];0!==r[u]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function i(t){return o.p+"js/"+({examples:"examples",reference:"reference"}[t]||t)+"."+{examples:"8843bdf9",reference:"42fa920a"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=n);var s,u=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t),s=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+s+")");i.type=n,i.request=s,a[1](i)}r[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,u.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-bootstrap-typeahead/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1902:function(t,e,a){"use strict";var n=a("3222"),r=a.n(n);r.a},"256b":function(t,e,a){"use strict";var n=a("741e"),r=a.n(n);r.a},2856:function(t,e,a){},3222:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{type:"dark",variant:"gradient-primary",toggleable:""}},[a("b-navbar-brand",{attrs:{to:"/"}},[t._v("vue-bootstrap-typeahead")]),a("b-navbar-toggle",{attrs:{target:"nav_dropdown_collapse"}}),a("b-collapse",{attrs:{"is-nav":"",id:"nav_dropdown_collapse"}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),a("b-nav-item",{attrs:{to:"/reference"}},[t._v("Reference")]),a("b-nav-item",{attrs:{to:"/examples"}},[t._v("Examples")]),a("b-nav-item",{attrs:{href:"https://github.com/alexurquhart/vue-bootstrap-typeahead",target:"_blank"}},[t._v("GitHub")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-text",[a("a",{staticClass:"github-button",attrs:{href:"https://github.com/alexurquhart/vue-bootstrap-typeahead","data-size":"large","data-show-count":"true","aria-label":"Star alexurquhart/vue-bootstrap-typeahead on GitHub"}},[t._v("Star")])])],1)],1)],1),a("router-view"),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row mt-4 border-top justify-content-center"},[a("div",{staticClass:"col pt-4 pb-4"},[a("p",{staticClass:"small text-muted text-center"},[t._v("\n          Made by "),a("a",{attrs:{href:"https://alexurquhart.com",target:"_blank"}},[t._v("Alex Urquhart")])])])])])}],i=(a("2dd8"),{name:"App"}),o=i,u=(a("5c0b"),a("2877")),c=Object(u["a"])(o,r,s,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,p=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},[t._m(1),a("div",{staticClass:"col-md-6"},[a("country-search")],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 mt-4 mb-4"},[a("b-btn",{staticClass:"shadow",attrs:{to:"reference",size:"lg",variant:"primary",block:""}},[t._v("\n          Read the Docs\n        ")])],1),a("div",{staticClass:"col-md-6 mt-4 mb-4"},[a("b-btn",{staticClass:"shadow",attrs:{to:"examples",size:"lg",variant:"secondary",block:""}},[t._v("\n          View The Example Gallery\n        ")])],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h2",[t._v("Getting Started")]),a("p",{staticClass:"lead"},[t._v("Installation")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"bash"},[t._v("$ npm install vue-bootstrap-typeahead --save")])]),t._m(2),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"html"},[t._v('\n<link href="https://unpkg.com/vue-bootstrap-typeahead/dist/VueBootstrapTypeahead.css" rel="stylesheet">\n<script src="https://unpkg.com/vue-bootstrap-typeahead"><\/script>')])]),a("p",{staticClass:"lead"},[t._v("Registration")]),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"javascript"},[t._v("import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'\n\n// Don't forget to include the Bootstrap CSS/SCSS files!\nimport 'bootstrap/scss/bootstrap.scss'\n\n// Global registration\nVue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)\n\n// OR\n\n// Local registration\nexport default {\n    components: {\n        VueBootstrapTypeahead\n    }\n}")])]),a("p",{staticClass:"lead"},[t._v("Basic Usage")]),t._m(3),a("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[a("code",{staticClass:"html"},[t._v("<vue-bootstrap-typeahead\n  v-model=\"query\"\n  :data=\"['Canada', 'USA', 'Mexico']\"\n/>")])])])])])},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h1",[t._v("A simple typeahead for Vue 2 using Bootstrap 4")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6"},[a("ul",[a("li",[a("code",[t._v("bootstrap-vue")]),t._v(" compatible")]),a("li",[t._v("Append and prepend icons and buttons")]),a("li",[t._v("Works well with API JSON responses")])]),a("div",{staticClass:"d-flex justify-content-center"},[a("a",{attrs:{href:"https://www.npmjs.com/package/vue-bootstrap-typeahead",target:"_blank"}},[a("img",{staticClass:"mb-3 img-fluid",attrs:{src:"https://nodei.co/npm/vue-bootstrap-typeahead.png"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"lead"},[t._v("Minified UMD and CommonJS builds are available in the "),a("code",[t._v("dist")]),t._v(" folder. The component is also available on unpkg.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The only required "),a("code",[t._v("props")]),t._v(" are a "),a("code",[t._v("v-model")]),t._v(" and a "),a("code",[t._v("data")]),t._v(" array.")])}],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"shadow-sm",attrs:{title:"Demo Country Search"}},[a("p",{staticClass:"card-text"},[t._v("\n    Type a country:\n  ")]),a("vue-bootstrap-typeahead",{attrs:{data:t.countries,serializer:function(t){return t.name},placeholder:"Canada, United States, etc...","query-transformer":t.queryTransformer},on:{hit:t.handleHit},scopedSlots:t._u([{key:"suggestion",fn:function(e){var n=e.data,r=e.htmlText;return[a("span",{domProps:{innerHTML:t._s(r)}}),t._v(" "),a("small",[t._v(t._s(n.code))])]}}]),model:{value:t.cntrySearch,callback:function(e){t.cntrySearch=e},expression:"cntrySearch"}},[a("template",{slot:"append"},[a("b-btn",{attrs:{variant:"success"},on:{click:t.search}},[t._v("\n        Go\n      ")])],1)],2)],1)},v=[],m=(a("96cf"),a("3040")),g=(a("386d"),a("a481"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:t.sizeClasses},[t.$slots.prepend||t.prepend?a("div",{ref:"prependDiv",staticClass:"input-group-prepend"},[t._t("prepend",[a("span",{staticClass:"input-group-text"},[t._v(t._s(t.prepend))])])],2):t._e(),a("input",{ref:"input",class:"form-control "+t.inputClass,attrs:{type:"search",placeholder:t.placeholder,"aria-label":t.placeholder,autocomplete:"off"},domProps:{value:t.inputValue},on:{focus:function(e){t.isFocused=!0},blur:t.handleBlur,input:function(e){t.handleInput(e.target.value)}}}),t.$slots.append||t.append?a("div",{staticClass:"input-group-append"},[t._t("append",[a("span",{staticClass:"input-group-text"},[t._v(t._s(t.append))])])],2):t._e()]),a("vue-bootstrap-typeahead-list",{directives:[{name:"show",rawName:"v-show",value:t.isFocused&&t.data.length>0,expression:"isFocused && data.length > 0"}],ref:"list",staticClass:"vbt-autcomplete-list",attrs:{query:t.inputValue,data:t.formattedData,"background-variant":t.backgroundVariant,"text-variant":t.textVariant,maxMatches:t.maxMatches,minMatchingChars:t.minMatchingChars,"query-transformer":t.queryTransformer,rawResults:t.rawResults},on:{hit:t.handleHit},scopedSlots:t._u([t._l(t.$scopedSlots,function(e,a){return{key:a,fn:function(e){var n=e.data,r=e.htmlText;return[t._t(a,null,null,{data:n,htmlText:r})]}}})])})],1)}),b=[],y=(a("c5f6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-group shadow"},t._l(t.matchedItems,function(e,n){return a("vue-bootstrap-typeahead-list-item",{key:n,attrs:{data:e.data,"html-text":t.highlight(e.text),"background-variant":t.backgroundVariant,"text-variant":t.textVariant},nativeOn:{click:function(a){t.handleHit(e,a)}},scopedSlots:t._u([{key:"suggestion",fn:function(e){var a=e.data,n=e.htmlText;return t.$scopedSlots.suggestion?[t._t("suggestion",null,null,{data:a,htmlText:n})]:void 0}}])})}))}),_=[],x=(a("4917"),a("55dd"),a("3b2b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{class:t.textClasses,attrs:{tabindex:"0",href:"#"},on:{mouseover:function(e){t.active=!0},mouseout:function(e){t.active=!1}}},[t._t("suggestion",[a("span",{domProps:{innerHTML:t._s(t.htmlText)}})],null,{data:t.data,htmlText:t.htmlText})],2)}),C=[],w={name:"VueBootstrapTypeaheadListItem",props:{data:{},htmlText:{type:String},backgroundVariant:{type:String},textVariant:{type:String}},data:function(){return{active:!1}},computed:{textClasses:function(){var t="";return t+=this.active?"active":"",t+=this.backgroundVariant?" bg-".concat(this.backgroundVariant):"",t+=this.textVariant?" text-".concat(this.textVariant):"","vbst-item list-group-item list-group-item-action ".concat(t)}}},S=w,T=Object(u["a"])(S,x,C,!1,null,null,null);T.options.__file="VueBootstrapTypeaheadListItem.vue";var k=T.exports;function $(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;")}function V(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var q={name:"VueBootstrapTypeaheadList",components:{VueBootstrapTypeaheadListItem:k},props:{data:{type:Array,required:!0,validator:function(t){return t instanceof Array}},query:{type:String,default:""},backgroundVariant:{type:String},textVariant:{type:String},maxMatches:{type:Number,default:10},minMatchingChars:{type:Number,default:2},queryTransformer:{type:Function,default:function(t){return t},validator:function(t){return t instanceof Function}},rawResults:{type:Boolean}},computed:{highlight:function(){var t=this;return function(e){if(e=$(e),0===t.query.length)return e;var a=new RegExp(t.escapedQuery,"gi");return e.replace(a,"<strong>$&</strong>")}},escapedQuery:function(){return this.queryTransformer(V($(this.query)))},matchedItems:function(){if(this.rawResults)return this.data;if(0===this.query.length||this.query.length<this.minMatchingChars)return[];var t=new RegExp(this.escapedQuery,"gi");return this.data.filter(function(e){return null!==e.text.match(t)}).sort(function(e,a){var n=e.text.indexOf(e.text.match(t)[0]),r=a.text.indexOf(a.text.match(t)[0]);return n<r?-1:n>r?1:0}).slice(0,this.maxMatches)}},methods:{handleHit:function(t,e){this.$emit("hit",t),e.preventDefault()}}},j=q,B=Object(u["a"])(j,y,_,!1,null,null,null);B.options.__file="VueBootstrapTypeaheadList.vue";var O=B.exports,M=a("6dd8"),E={name:"VueBootstrapTypehead",components:{VueBootstrapTypeaheadList:O},props:{size:{type:String,default:null,validator:function(t){return["lg","sm"].indexOf(t)>-1}},value:{type:String},data:{type:Array,required:!0,validator:function(t){return t instanceof Array}},serializer:{type:Function,default:function(t){return t},validator:function(t){return t instanceof Function}},queryTransformer:{type:Function,default:function(t){return t},validator:function(t){return t instanceof Function}},backgroundVariant:String,textVariant:String,inputClass:{type:String,default:""},maxMatches:{type:Number,default:10},minMatchingChars:{type:Number,default:2},placeholder:String,prepend:String,append:String,rawResults:Boolean},computed:{sizeClasses:function(){return this.size?"input-group input-group-".concat(this.size):"input-group"},formattedData:function(){var t=this;return this.data instanceof Array?this.data.map(function(e,a){return{id:a,data:e,text:t.serializer(e)}}):[]}},methods:{resizeList:function(t){var e=t.getBoundingClientRect(),a=this.$refs.list.$el.style;if(a.width=e.width+"px",this.$refs.prependDiv){var n=this.$refs.prependDiv.getBoundingClientRect();a.marginLeft=n.width+"px"}},handleHit:function(t){"undefined"!==typeof this.value&&this.$emit("input",t.text),this.inputValue=t.text,this.$emit("hit",t.data),this.$refs.input.blur(),this.isFocused=!1},handleBlur:function(t){var e=t.relatedTarget;e&&e.classList.contains("vbst-item")||(this.isFocused=!1)},handleInput:function(t){this.inputValue=t,"undefined"!==typeof this.value&&this.$emit("input",t)}},data:function(){return{isFocused:!1,inputValue:""}},mounted:function(){var t=this;this.$_ro=new M["a"](function(e){t.resizeList(t.$refs.input)}),this.$_ro.observe(this.$refs.input),this.$_ro.observe(this.$refs.list.$el)},beforeDestroy:function(){this.$_ro.disconnect()}},R=E,A=(a("941c"),Object(u["a"])(R,g,b,!1,null,"0ed6672e",null));A.options.__file="VueBootstrapTypeahead.vue";var L=A.exports,z={name:"CountrySearch",components:{VueBootstrapTypeahead:L},data:function(){return{cntrySearch:"",countries:[],selectedCountry:{}}},methods:{queryTransformer:function(t){return t.replace(/[ -]/g,"[ -]")},handleHit:function(t){this.selectedCountry=t,this.search()},search:function(){var t=document.createElement("a");t.href="https://en.wikipedia.org/wiki/".concat(this.cntrySearch),t.target="_blank",document.body.appendChild(t),t.click()}},mounted:function(){var t=Object(m["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("countries.json");case 2:return e=t.sent,t.next=5,e.json();case 5:this.countries=t.sent;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},H=z,F=(a("256b"),Object(u["a"])(H,f,v,!1,null,null,null));F.options.__file="CountrySearch.vue";var P=F.exports,D={name:"Home",components:{CountrySearch:P}},N=D,I=(a("1902"),Object(u["a"])(N,d,h,!1,null,"5f59e8be",null));I.options.__file="Home.vue";var G=I.exports;n["a"].use(p["a"]);var U=new p["a"]({routes:[{path:"/",name:"home",component:G},{path:"/reference",name:"reference",component:function(){return a.e("reference").then(a.bind(null,"62dc"))}},{path:"/examples",component:function(){return a.e("examples").then(a.bind(null,"a451"))},children:[{name:"examples",path:"",component:function(){return a.e("examples").then(a.bind(null,"b97d"))}},{path:"basic-example",component:function(){return a.e("examples").then(a.bind(null,"b97d"))}},{path:"working-with-apis",component:function(){return a.e("examples").then(a.bind(null,"3184"))}},{path:"prepending-and-appending",component:function(){return a.e("examples").then(a.bind(null,"69b7"))}},{name:"custom-suggestion-slot",path:"custom-suggestion-slot",component:function(){return a.e("examples").then(a.bind(null,"757d"))}}]}]}),J=a("9f7b"),Q=a("2315"),W=a.n(Q),K=a("1ad2"),X=a.n(K);a("581d"),a("6d93");n["a"].use(W.a),n["a"].config.productionTip=!1,n["a"].use(J["a"]),n["a"].use(X.a,{id:"UA-29172866-5",enabled:!0,vueRouter:U}),new n["a"]({router:U,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("2856"),r=a.n(n);r.a},"741e":function(t,e,a){},"941c":function(t,e,a){"use strict";var n=a("f801"),r=a.n(n);r.a},f801:function(t,e,a){}});
//# sourceMappingURL=app.48d4ae2e.js.map