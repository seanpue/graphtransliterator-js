var graphtransliterator;(()=>{var t={190:(t,e,r)=>{"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){s=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(t,e)||o(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=r(799).DirectedGraph,u=r(677).decompressSettings,c=r(16),l=c.NoMatchingTransliterationRuleError,h=c.UnrecognizableInputTokenError,f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r,i=e.graphtransliterator_version,c=e.compressed_settings;c&&((e=u(c)).graphtransliterator_version=i),this.tokens=e.tokens,this.rules=e.rules,this.tokensByClass=e.tokens_by_class||function(t){for(var e={},r=function(){var t=n(a[o],2),r=t[0];t[1].forEach((function(t){t in e||(e[t]=new Set),e[t].add(r)}))},o=0,a=Object.entries(t);o<a.length;o++)r();return e}(this.tokens),this.tokenizerPattern=e.tokenizer_pattern||(r=this.tokens,"("+Object.keys(r).sort((function(t,e){return e.length-t.length||t.localeCompare(e)})).map((function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})).join("|")+")"),this.whitespace=e.whitespace,this.onmatchRules=e.onmatch_rules,this.onmatchRulesLookup=e.onmatch_rules_lookup||function(t,e){if(void 0!==e){var r={};return e.forEach((function(e,o){for(var a=0,i=Object.entries(t);a<i.length;a++){var s=n(i[a],2),u=s[0];if(s[1].indexOf(e.next_classes[0])>=0)for(var c=0,l=Object.entries(t);c<l.length;c++){var h=n(l[c],2),f=h[0];if(h[1].indexOf(e.prev_classes[e.prev_classes.length-1])>=0){u in r||(r[u]={});var p=r[u];f in p||(p[f]=[]),p[f].push(o)}}}})),r}}(this.tokens,this.onmatchRules),this.metadata=e.metadata||{},this.graph=e.graph||function(t){var e=new s;e.addNode({type:"Start"});var r=0;return t.forEach((function(n,o){r=0,n.tokens.forEach((function(t){var o=e.node[r],a=o.token_children||{},i=a[t];i>=0||(i=e.addNode({type:"token",token:t})[0],e.addEdge(r,i,{token:t}),a[t]=i,o.token_children=a);var s=e.edge[r][i];(s.cost||1)>n.cost&&(s.cost=n.cost),r=i}));var a=e.addNode({type:"rule",rule_key:o,accepting:!0})[0],i=e.node[r],s=i.rule_children||[];s.push(a),i.rule_children=s.sort((function(r,n){return t[e.node[r].rule_key].cost-t[e.node[n].rule_key].cost}));var u=e.addEdge(r,a,{cost:n.cost});if(n.prev_classes||n.prev_tokens||n.next_tokens||n.next_classes){var c={};n.prev_classes&&(c.prev_classes=n.prev_classes),n.prev_tokens&&(c.prev_tokens=n.prev_tokens),n.next_tokens&&(c.next_tokens=n.next_tokens),n.next_classes&&(c.next_classes=n.next_classes),u.constraints=c}})),e.node.forEach((function(r,i){var s={},u=r.rule_children;void 0!==u&&(s.__rules__=u.sort((function(r,n){return t[e.node[r].rule_key].cost-t[e.node[n].rule_key].cost})),delete r.rule_children);var c,l=r.token_children;if(l){for(var h=0,f=Object.entries(l);h<f.length;h++){var p,d=n(f[h],2),y=d[0],v=d[1];s[y]=[v],void 0!==u&&(p=s[y]).push.apply(p,function(t){if(Array.isArray(t))return a(t)}(c=u)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(c)||o(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s[y].sort((function(t,r){return e.edge[i][t].cost-e.edge[i][r].cost}))}delete r.token_children}r.ordered_children=s})),e}(this.rules),this.ignoreErrors=e.ignore_errors,this.version=e.version,this.coverage=e.coverage,this.tokenizer=RegExp(this.tokenizerPattern,"g"),this.lastRuleKeys=[],this.lastInputDetails=[],this.lastInputTokens=[],this.lastRuleKeys=[],this.lastHasErrors=!1}var e,r,c;return e=t,c=[{key:"fromDict",value:function(e){return new t(e)}}],(r=[{key:"lastMatchedRules",get:function(){var t=this;return this.lastRuleKeys.map((function(e){return t.rules[e]}))}},{key:"lastMatchedRuleTokens",get:function(){var t=this;return this.lastRuleKeys.map((function(e){return t.rules[e].tokens}))}},{key:"isWhitespace",value:function(t){return this.tokens[t].includes(this.whitespace.token_class)}},{key:"tokenize",value:function(t){var e=this.tokenizer;e.lastIndex=0;for(var r=[{token:this.whitespace.default}],n=!0;e.lastIndex<t.length;){var o=e.lastIndex,a=e.exec(t);if(null===a)r.push({matched:!1,startIndex:o,endIndex:t.length,string:t.substring(o,t.length),token:this.whitespace.default}),e.lastIndex=t.length;else{a.index>o&&r.push({matched:!1,startIndex:o,endIndex:a.index,string:t.substring(o,a.index),token:this.whitespace.default});var i=a[0];if(this.whitespace.consolidate)if(this.isWhitespace(i)){if(i=this.whitespace.default,n){var s=r[r.length-1].string;r[r.length-1].string=s?s+a[0]:a[0];continue}n=!0}else n=!1;r.push({matched:!0,startIndex:a.index,endIndex:e.lastIndex,string:a[0],token:i})}}if(this.whitespace.consolidate&&r.length>1&&!0===r[r.length-1].matched&&this.isWhitespace(r[r.length-1].token)){var u=r.pop();r.push({token:this.whitespace.default,string:u.string})}else r.push({token:this.whitespace.default});return r}},{key:"matchConstraints",value:function(t,e,r,o){var a=t.constraints;if(void 0===a)return!0;for(var i=0,s=Object.entries(a);i<s.length;i++){var u=n(s[i],2),c=u[0],l=u[1];if("prev_tokens"===c){var h=r;if(h-=this.rules[e.rule_key].tokens.length,h-=l.length,!this.matchTokens(h,l,o,!0,!1,!1))return!1}else if("next_tokens"===c){var f=r;if(!this.matchTokens(f,l,o,!1,!0,!1))return!1}else if("prev_classes"===c){var p=r;p-=this.rules[e.rule_key].tokens.length;var d=a.prev_tokens;if(d&&(p-=d.length),p-=l.length,!this.matchTokens(p,l,o,!0,!1,!0))return!1}else if("next_classes"===c){var y=r,v=a.next_tokens;if(v&&(y+=v.length),!this.matchTokens(y,l,o,!1,!0,!0))return!1}}return!0}},{key:"matchTokens",value:function(t,e,r,n,o,a){if(n&&t<0)return!1;if(o&&t+e.length>r.length)return!1;for(var i=0;i<e.length;i++)if(a){var s=this.tokens[r[t+i]];if(!(s&&s.indexOf(e[i])>=0))return!1}else if(r[t+i]!==e[i])return!1;return!0}},{key:"matchAt",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=this.graph,a=o.node,i=o.edge,s=[],u=[];function c(t,r){var n=[],o=a[t].ordered_children;if(o)if(n=o[e[r]])n.slice().reverse().forEach((function(e){u.unshift([e,t,r])}));else{var i=o.__rules__;i&&i.slice().reverse().forEach((function(e){u.unshift([e,t,r])}))}}for(c(0,t);u.length>0;){var l=u.shift(),h=n(l,3),f=h[0],p=h[1],d=h[2],y=a[f],v=i[p][f];if(y.accepting&&this.matchConstraints(v,y,d,e)){if(r){s.push(y.rule_key);continue}return y.rule_key}d<e.length-1&&(d+=1),c(f,d)}if(r)return s}},{key:"matchAllAt",value:function(t,e){return this.matchAt(t,e,!0)}},{key:"transliterate",value:function(t){var e=this.tokenize(t),r=Boolean(e.find((function(t){return!1===t.matched})));if(r){var n="Unrecognized tokens: "+e.filter((function(t){return!1===t.matched})).map((function(t){return'"'+t.string+'" at pos '+t.startIndex})).join(", ")+' of "'+t+'"';if(!this.ignoreErrors)throw new h(n);console.log(n)}var o=e.map((function(t){return t.token}));this.lastInputDetails=e,this.lastInputTokens=o,this.lastRuleKeys=[],this.lastHasErrors=r;for(var a=1,i="";a<o.length-1;){var s=this.matchAt(a,o);if(void 0===s){var u="No matching transliteration rule at pos "+e[a].startIndex+' of "'+t+'"';if(this.ignoreErrors){console.log(u),a+=1;continue}throw new l(u)}this.lastRuleKeys.push(s);var c=this.rules[s],f=c.tokens;if(this.onmatchRules){var p=void 0,d=o[a-1],y=o[a],v=this.onmatchRulesLookup[y];if(v&&(p=v[d]),p)for(var g=0;g<p.length;g++){var m=p[g],b=this.onmatchRules[m];if(this.matchTokens(a-b.prev_classes.length,b.prev_classes,o,!0,!1,!0)&&this.matchTokens(a,b.next_classes,o,!1,!0,!0)){i+=b.production;break}}}i+=c.production,a+=f.length}return i}}])&&i(e.prototype,r),c&&i(e,c),t}();t.exports={GraphTransliterator:f}},677:t=>{function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){s=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(t,e)||o(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}t.exports={decompressSettings:function(t){function o(t){return Math.log2(1+1/(1-t))}var a,i,s=n(t,8),u=s[0],c=s[1],l=s[2],h=s[3],f=s[4],p=s[5],d=s[6],y=s[7],v=c,g=u,m=Object.assign.apply(Object,[{}].concat(r(Object.entries(l).map((function(t){var r=n(t,2),o=r[0],a=r[1];return e({},v[o],a.map((function(t){return g[t]})))}))))),b=h.map((function(t){return{production:t[0],prev_classes:t[1]?t[1].map((function(t){return g[t]})):[],prev_tokens:t[2]?t[2].map((function(t){return v[t]})):[],tokens:t[3].map((function(t){return v[t]})),next_tokens:t[4]?t[4].map((function(t){return v[t]})):[],next_classes:t[5]?t[5].map((function(t){return g[t]})):[],cost:o(t[6])}})),_={default:f[0],token_class:f[1],consolidate:f[2]},k=p?p.map((function(t){return{prev_classes:t[0].map((function(t){return g[t]})),next_classes:t[1].map((function(t){return g[t]})),production:t[2]}})):void 0;if(y){var w=n(y,3),x=w[0],R=w[1],T=w[2];i=x,a={node:R.map((function(t){return function(t){function e(e){for(var r=t[e],o={},a=0,i=Object.entries(r);a<i.length;a++){var s=n(i[a],2),u=s[0],c=s[1];-1===(u=parseInt(u,10))?o.__rules__=c:o[v[u]]=c}return o}var r=i[t[0]],o=1===t[1]||!1,a={};return"Start"===r?a={type:r,accepting:o,ordered_children:e(2)}:"rule"===r?a={type:r,accepting:o,rule_key:t[2]}:"token"===r&&(a={type:r,accepting:o,token:v[t[2]],ordered_children:e(3)}),a}(t)})),edge:Object.assign.apply(Object,[{}].concat(r(Object.entries(T).map((function(t){var a=n(t,2),i=a[0],s=a[1];return e({},i,Object.assign.apply(Object,[{}].concat(r(Object.entries(s).map((function(t){var r=n(t,2);return e({},r[0],function(t){var e=n(t,3),r=e[0],a=e[1],i=e[2],s={};function u(t){return r[t].map((function(t){return g[t]}))}return r&&(s.constraints={prev_classes:u(0),prev_tokens:u(1),next_tokens:(2,r[2].map((function(t){return v[t]}))),next_classes:u(3)}),s.cost=o(a),-1!==i&&(s.token=v[i]),s}(r[1]))}))))))})))))}}return{tokens:m,rules:b,whitespace:_,onmatch_rules:k,graph:a,metadata:d}}}},16:t=>{"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function o(t){var e=u();return function(){var r,n=l(t);if(e){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}function a(t,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function i(t){var e="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return s(t,arguments,l(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),c(n,t)})(t)}function s(t,e,r){return(s=u()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&c(o,r.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(t){n(a,t);var e=o(a);function a(){return r(this,a),e.apply(this,arguments)}return a}(i(Error)),f=function(t){n(a,t);var e=o(a);function a(t){var n;return r(this,a),(n=e.call(this,t)).name="NoMatchingTransliterationRuleError",n}return a}(h),p=function(t){n(a,t);var e=o(a);function a(t){var n;return r(this,a),(n=e.call(this,t)).name="UnrecognizableInputTokenError",n}return a}(h);t.exports={GraphTransliteratorError:h,NoMatchingTransliterationRuleError:f,UnrecognizableInputTokenError:p}},799:t=>{"use strict";function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function(){function t(e,r,n){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.node=e||[],this.edge=r||{},this.edge_list=n||[],r&&!n)for(var o in r)for(var a in r[o])this.edge_list.push([parseInt(o,10),parseInt(a,10)])}var r,n;return r=t,(n=[{key:"addNode",value:function(t){t||(t=[]);var e=this.node.length;return this.node.push(t),[e,this.node[e]]}},{key:"addEdge",value:function(t,e,r){return r||(r={}),t in this.edge||(this.edge[t]={}),this.edge[t][e]=r,this.edge_list.push([t,e]),this.edge[t][e]}}])&&e(r.prototype,n),t}();t.exports={DirectedGraph:r}},241:(t,e,r)=>{"use strict";var n=r(799).DirectedGraph,o=r(190).GraphTransliterator,a=r(16),i=a.GraphTransliteratorError,s=a.NoMatchingTransliterationRuleError,u=a.UnrecognizableInputTokenError,c=r(694);t.exports={DirectedGraph:n,GraphTransliterator:o,GraphTransliteratorError:i,NoMatchingTransliterationRuleError:s,UnrecognizableInputTokenError:u,transliterators:c}},213:(t,e,r)=>{var n=new(0,r(171).Bundled)(r(580),r(327));t.exports=n},254:(t,e,r)=>{var n=new(0,r(171).Bundled)(r(434),r(92));t.exports=n},171:(t,e,r)=>{function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(s,t);var e,r,n=(e=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=i(e);if(r){var o=i(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return a(this,t)});function s(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(r=n.call(this,t)).settings=t,r.tests=e,r}return s}(r(190).GraphTransliterator);t.exports={Bundled:s}},694:(t,e,r)=>{var n=r(171).Bundled;t.exports={Bundled:n,Example:r(213),ITRANSDevanagariToUnicode:r(254)}},580:t=>{"use strict";t.exports=JSON.parse('{"graphtransliterator_version":"1.2.0","compressed_settings":[["consonant","vowel","whitespace"],[" ","a","b"],[[2],[1],[0]],[["!B!",[0],[1],[2],[1],[0],-5],["A",0,0,[1],0,0,-1],["B",0,0,[2],0,0,-1],[" ",0,0,[0],0,0,-1]],[" ","whitespace",0],[[[1],[1],","]],{"name":"example","version":"1.0.0","description":"An Example Bundled Transliterator","url":"https://github.com/seanpue/graphtransliterator/tree/master/transliterator/sample","author":"Author McAuthorson","author_email":"author_mcauthorson@msu.edu","license":"MIT License","keywords":["example"],"project_urls":{"Documentation":"https://github.com/seanpue/graphtransliterator/tree/master/graphtransliterator/transliterators/example","Source":"https://github.com/seanpue/graphtransliterator/tree/graphtransliterator/transliterators/example","Tracker":"https://github.com/seanpue/graphtransliterator/issues"}},null]}')},327:t=>{"use strict";t.exports=JSON.parse('{" ":" ","a":"A","aa":"A,A","babab":"BA!B!AB","b":"B"}')},434:t=>{"use strict";t.exports=JSON.parse('{"graphtransliterator_version":"1.2.0","compressed_settings":[["consonant","vowel","vowel_sign","wb","whitespace"],["\\t"," ",",",".D",".Dh",".N",".a",".h",".m",".n","0","1","2","3","4","5","6","7","8","9","A","A.c","AUM","Ch","D","Dh","G","GY","H","I","J","K","L","LLI","LLi","L^i","M","N","OM","R","RRI","RRi","R^i","Rs.","Sh","T","Th","U","Y","^e","^n","^o","a","a.c","a.e","aa","ai","au","b","bh","ch","chh","d","dh","dny","e","ee","f","g","gh","h","i","ii","j","jh","j~n","k","kSh","kh","l","ld","m","n","o","p","ph","q","r","s","sh","t","th","u","uu","v","x","y","z","zh","|","||","~N","~Rs.","~n","ṅ"],[[3,4],[3,4],[3],[0],[0],[2],[3],[3],[2],[2],[3],[3],[3],[3],[3],[3],[3],[3],[3],[3],[1],[1],[3],[0],[0],[0],[0],[0],[3],[1],[0],[0],[0],[1],[1],[1],[2],[0],[3],[0],[1],[1],[1],[3],[0],[0],[0],[1],[0],[1],[0],[1],[1],[1],[2],[1],[1],[1],[0],[0],[0],[0],[0],[0],[0],[1],[1],[0],[0],[0],[0],[1],[1],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[1],[0],[0],[0],[0],[0],[0],[0],[0],[1],[1],[0],[0],[0],[0],[0],[3],[3],[0],[3],[0],[0]],[["ा",[0],0,[20],0,0,-2],["ॉ",[0],0,[21],0,0,-2],["ी",[0],0,[29],0,0,-2],["ॣ",[0],0,[33],0,0,-2],["ॢ",[0],0,[34],0,0,-2],["ॢ",[0],0,[35],0,0,-2],["ॄ",[0],0,[40],0,0,-2],["ृ",[0],0,[41],0,0,-2],["ृ",[0],0,[42],0,0,-2],["ू",[0],0,[47],0,0,-2],["ॆ",[0],0,[49],0,0,-2],["ॊ",[0],0,[51],0,0,-2],["",[0],0,[52],0,0,-2],["ॅ",[0],0,[53],0,0,-2],["ा",[0],0,[55],0,0,-2],["ै",[0],0,[56],0,0,-2],["ौ",[0],0,[57],0,0,-2],["े",[0],0,[65],0,0,-2],["ी",[0],0,[66],0,0,-2],["ि",[0],0,[71],0,0,-2],["ी",[0],0,[72],0,0,-2],["ो",[0],0,[83],0,0,-2],["ु",[0],0,[92],0,0,-2],["ू",[0],0,[93],0,0,-2],["\\t",0,0,[0],0,0,-1],[" ",0,0,[1],0,0,-1],[",",0,0,[2],0,0,-1],["ड़",0,0,[3],0,0,-1],["ढ़",0,0,[4],0,0,-1],["ँ",0,0,[5],0,0,-1],["ऽ",0,0,[6],0,0,-1],["्‌",0,0,[7],0,0,-1],["ं",0,0,[8],0,0,-1],["ं",0,0,[9],0,0,-1],["०",0,0,[10],0,0,-1],["१",0,0,[11],0,0,-1],["२",0,0,[12],0,0,-1],["३",0,0,[13],0,0,-1],["४",0,0,[14],0,0,-1],["५",0,0,[15],0,0,-1],["६",0,0,[16],0,0,-1],["७",0,0,[17],0,0,-1],["८",0,0,[18],0,0,-1],["९",0,0,[19],0,0,-1],["आ",0,0,[20],0,0,-1],["ऑ",0,0,[21],0,0,-1],["ॐ",0,0,[22],0,0,-1],["छ",0,0,[23],0,0,-1],["ड",0,0,[24],0,0,-1],["ढ",0,0,[25],0,0,-1],["ग़",0,0,[26],0,0,-1],["ज्ञ",0,0,[27],0,0,-1],["ः",0,0,[28],0,0,-1],["ई",0,0,[29],0,0,-1],["ज़",0,0,[30],0,0,-1],["ख़",0,0,[31],0,0,-1],["ळ",0,0,[32],0,0,-1],["ॡ",0,0,[33],0,0,-1],["ऌ",0,0,[34],0,0,-1],["ऌ",0,0,[35],0,0,-1],["ं",0,0,[36],0,0,-1],["ण",0,0,[37],0,0,-1],["ॐ",0,0,[38],0,0,-1],["ऱ",0,0,[39],0,0,-1],["ॠ",0,0,[40],0,0,-1],["ऋ",0,0,[41],0,0,-1],["ऋ",0,0,[42],0,0,-1],["₹",0,0,[43],0,0,-1],["ष",0,0,[44],0,0,-1],["ट",0,0,[45],0,0,-1],["ठ",0,0,[46],0,0,-1],["ऊ",0,0,[47],0,0,-1],["य़",0,0,[48],0,0,-1],["ऎ",0,0,[49],0,0,-1],["ऩ",0,0,[50],0,0,-1],["ऒ",0,0,[51],0,0,-1],["अ",0,0,[52],0,0,-1],["ऍ",0,0,[53],0,0,-1],["ॲ",0,0,[54],0,0,-1],["आ",0,0,[55],0,0,-1],["ऐ",0,0,[56],0,0,-1],["औ",0,0,[57],0,0,-1],["ब",0,0,[58],0,0,-1],["भ",0,0,[59],0,0,-1],["च",0,0,[60],0,0,-1],["छ",0,0,[61],0,0,-1],["द",0,0,[62],0,0,-1],["ध",0,0,[63],0,0,-1],["ज्ञ",0,0,[64],0,0,-1],["ए",0,0,[65],0,0,-1],["ई",0,0,[66],0,0,-1],["फ़",0,0,[67],0,0,-1],["ग",0,0,[68],0,0,-1],["घ",0,0,[69],0,0,-1],["ह",0,0,[70],0,0,-1],["इ",0,0,[71],0,0,-1],["ई",0,0,[72],0,0,-1],["ज",0,0,[73],0,0,-1],["झ",0,0,[74],0,0,-1],["ज्ञ",0,0,[75],0,0,-1],["क",0,0,[76],0,0,-1],["क्ष",0,0,[77],0,0,-1],["ख",0,0,[78],0,0,-1],["ल",0,0,[79],0,0,-1],["ळ",0,0,[80],0,0,-1],["म",0,0,[81],0,0,-1],["न",0,0,[82],0,0,-1],["ओ",0,0,[83],0,0,-1],["प",0,0,[84],0,0,-1],["फ",0,0,[85],0,0,-1],["क़",0,0,[86],0,0,-1],["र",0,0,[87],0,0,-1],["स",0,0,[88],0,0,-1],["श",0,0,[89],0,0,-1],["त",0,0,[90],0,0,-1],["थ",0,0,[91],0,0,-1],["उ",0,0,[92],0,0,-1],["ऊ",0,0,[93],0,0,-1],["व",0,0,[94],0,0,-1],["क्ष",0,0,[95],0,0,-1],["य",0,0,[96],0,0,-1],["ज़",0,0,[97],0,0,-1],["ऴ",0,0,[98],0,0,-1],["।",0,0,[99],0,0,-1],["॥",0,0,[100],0,0,-1],["ङ",0,0,[101],0,0,-1],["₹",0,0,[102],0,0,-1],["ञ",0,0,[103],0,0,-1],["ङ",0,0,[104],0,0,-1]],[" ","whitespace",0],[[[0],[0],"्"]],{"name":"ITRANSDevanagariToUnicode","description":"ITRANS Devanagari to Unicode Transliterator","version":"0.1.0","url":"https://github.com/seanpue/graphtransliterator/tree/graphtransliterator/transliterators/itrans_devanagari_to_unicode","author":"A. Sean Pue","author_email":"pue@msu.edu","license":"MIT","keywords":["devanagari","ITRANS","Hindi","Sanskrit"],"project_urls":{"Documentation":"https://github.com/seanpue/graphtransliterator/tree/master/graphtransliterator/transliterators/itrans_devanagari_to_unicode","Source":"https://github.com/seanpue/graphtransliterator/tree/graphtransliterator/transliterators/itrans_devanagari_to_unicode","Tracker":"https://github.com/seanpue/graphtransliterator/issues"}},null]}')},92:t=>{"use strict";t.exports=JSON.parse('{"0":"०","1":"१","2":"२","3":"३","4":"४","5":"५","6":"६","7":"७","8":"८","9":"९","\\t":"\\t"," ":" ",",":",",".D":"ड़",".Dh":"ढ़",".N":"ँ",".a":"ऽ",".h":"्‌",".m":"ं",".n":"ं","A":"आ","A.c":"ऑ","AUM":"ॐ","Ch":"छ","D":"ड","Dh":"ढ","G":"ग़","GY":"ज्ञ","H":"ः","I":"ई","J":"ज़","K":"ख़","L":"ळ","LLI":"ॡ","LLi":"ऌ","L^i":"ऌ","M":"ं","N":"ण","OM":"ॐ","R":"ऱ","RRI":"ॠ","RRi":"ऋ","R^i":"ऋ","Rs.":"₹","Sh":"ष","T":"ट","Th":"ठ","U":"ऊ","Y":"य़","^e":"ऎ","^n":"ऩ","^o":"ऒ","a":"अ","a.c":"ऍ","a.e":"ॲ","aa":"आ","ai":"ऐ","au":"औ","b":"ब","bh":"भ","ch":"च","chh":"छ","d":"द","dh":"ध","dny":"ज्ञ","dnyA":"ज्ञा","dnyA.c":"ज्ञॉ","dnyI":"ज्ञी","dnyLLI":"ज्ञॣ","dnyLLi":"ज्ञॢ","dnyL^i":"ज्ञॢ","dnyRRI":"ज्ञॄ","dnyRRi":"ज्ञृ","dnyR^i":"ज्ञृ","dnyU":"ज्ञू","dny^e":"ज्ञॆ","dny^o":"ज्ञॊ","dnya":"ज्ञ","dnya.c":"ज्ञॅ","dnyaa":"ज्ञा","dnyai":"ज्ञै","dnyau":"ज्ञौ","dnydny":"ज्ञ्ज्ञ","dnye":"ज्ञे","dnyee":"ज्ञी","dnyi":"ज्ञि","dnyii":"ज्ञी","dnyo":"ज्ञो","dnyu":"ज्ञु","dnyuu":"ज्ञू","e":"ए","ee":"ई","f":"फ़","g":"ग","gh":"घ","h":"ह","i":"इ","ii":"ई","j":"ज","jh":"झ","j~n":"ज्ञ","k":"क","kSh":"क्ष","kh":"ख","l":"ल","ld":"ळ","m":"म","n":"न","o":"ओ","p":"प","ph":"फ","q":"क़","r":"र","s":"स","sh":"श","t":"त","th":"थ","u":"उ","uu":"ऊ","v":"व","x":"क्ष","y":"य","z":"ज़","zh":"ऴ","|":"।","||":"॥","~N":"ङ","~Rs.":"₹","~n":"ञ","ṅ":"ङ"}')}},e={},r=function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}(241);graphtransliterator=r})();