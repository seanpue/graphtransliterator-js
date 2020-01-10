!function(e){var t={};function s(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=t,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";const{DirectedGraph:n}=s(1),{decompressSettings:r}=s(2);class i extends Error{}class o extends i{constructor(e){super(e),this.name="NoMatchingTransliterationRuleError"}}class l extends i{constructor(e){super(e),this.name="UnrecognizableInputTokenError"}}class a{constructor(e){let t=e.graphtransliterator_version,s=e.compressed_settings;var i;s&&((e=r(s)).graphtransliterator_version=t),this.tokens=e.tokens,this.rules=e.rules,this.tokensByClass=e.tokens_by_class||function(e){let t={};for(let[s,n]of Object.entries(e))n.forEach((function(e){e in t||(t[e]=new Set),t[e].add(s)}));return t}(this.tokens),this.tokenizerPattern=e.tokenizer_pattern||(i=this.tokens,"("+Object.keys(i).sort((function(e,t){return t.length-e.length||e.localeCompare(t)})).map((function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})).join("|")+")"),this.whitespace=e.whitespace,this.onmatchRules=e.onmatch_rules,this.onmatchRulesLookup=e.onmatch_rules_lookup||function(e,t){if(void 0===t)return;var s={};return t.forEach((t,n)=>{for(let[r,i]of Object.entries(e))if(i.indexOf(t.next_classes[0])>=0)for(let[i,o]of Object.entries(e))if(o.indexOf(t.prev_classes[t.prev_classes.length-1])>=0){r in s||(s[r]={});let e=s[r];i in e||(e[i]=[]),e[i].push(n)}}),s}(this.tokens,this.onmatchRules),this.metadata=e.metadata||{},this.graph=e.graph||function(e){let t=new n;t.addNode({type:"Start"});var s=0;return e.forEach((n,r)=>{s=0,n.tokens.forEach(e=>{var r=t.node[s],i=r.token_children||{},o=i[e];o>=0||(o=t.addNode({type:"token",token:e})[0],t.addEdge(s,o,{token:e}),i[e]=o,r.token_children=i);var l=t.edge[s][o];(l.cost||1)>n.cost&&(l.cost=n.cost),s=o});var i=t.addNode({type:"rule",rule_key:r,accepting:!0})[0],o=t.node[s],l=o.rule_children||[];l.push(i),o.rule_children=l.sort((s,n)=>e[t.node[s].rule_key].cost-e[t.node[n].rule_key].cost);var a=t.addEdge(s,i,{cost:n.cost});if(n.prev_classes||n.prev_tokens||n.next_tokens||n.next_classes){let e={};n.prev_classes&&(e.prev_classes=n.prev_classes),n.prev_tokens&&(e.prev_tokens=n.prev_tokens),n.next_tokens&&(e.next_tokens=n.next_tokens),n.next_classes&&(e.next_classes=n.next_classes),a.constraints=e}}),t.node.forEach((s,n)=>{let r={},i=s.rule_children;void 0!==i&&(r.__rules__=i.sort((s,n)=>e[t.node[s].rule_key].cost-e[t.node[n].rule_key].cost),delete s.rule_children);let o=s.token_children;if(o){for(let[e,s]of Object.entries(o))r[e]=[s],void 0!==i&&r[e].push(...i),r[e].sort((e,s)=>t.edge[n][e].cost-t.edge[n][s].cost);delete s.token_children}s.ordered_children=r}),t}(this.rules),this.ignoreErrors=e.ignore_errors,this.version=e.version,this.coverage=e.coverage,this.tokenizer=RegExp(this.tokenizerPattern,"g"),this.lastRuleKeys=[],this.lastInputDetails=[],this.lastInputTokens=[],this.lastRuleKeys=[],this.lastHasErrors=!1}get lastMatchedRules(){return this.lastRuleKeys.map(e=>this.rules[e])}get lastMatchedRuleTokens(){return this.lastRuleKeys.map(e=>this.rules[e].tokens)}isWhitespace(e){return this.tokens[e].includes(this.whitespace.token_class)}static fromDict(e){return new a(e)}tokenize(e){let t=this.tokenizer;t.lastIndex=0;for(var s=[{token:this.whitespace.default}],n=!0;t.lastIndex<e.length;){var r=t.lastIndex;let i=t.exec(e);if(null===i)s.push({matched:!1,startIndex:r,endIndex:e.length,string:e.substring(r,e.length),token:this.whitespace.default}),t.lastIndex=e.length;else{i.index>r&&s.push({matched:!1,startIndex:r,endIndex:i.index,string:e.substring(r,i.index),token:this.whitespace.default});let o=i[0];if(this.whitespace.consolidate)if(this.isWhitespace(o)){if(o=this.whitespace.default,n){let e=s[s.length-1].string;s[s.length-1].string=e?e+i[0]:i[0];continue}n=!0}else n=!1;s.push({matched:!0,startIndex:i.index,endIndex:t.lastIndex,string:i[0],token:o})}}if(this.whitespace.consolidate&&s.length>1&&!0===s[s.length-1].matched&&this.isWhitespace(s[s.length-1].token)){let e=s.pop();s.push({token:this.whitespace.default,string:e.string})}else s.push({token:this.whitespace.default});return s}matchConstraints(e,t,s,n){let r=e.constraints;if(void 0===r)return!0;for(let[e,i]of Object.entries(r))if("prev_tokens"===e){let e=s;if(e-=this.rules[t.rule_key].tokens.length,e-=i.length,!this.matchTokens(e,i,n,!0,!1,!1))return!1}else if("next_tokens"===e){let e=s;if(!this.matchTokens(e,i,n,!1,!0,!1))return!1}else if("prev_classes"===e){let e=s;e-=this.rules[t.rule_key].tokens.length;let o=r.prev_tokens;if(o&&(e-=o.length),e-=i.length,!this.matchTokens(e,i,n,!0,!1,!0))return!1}else if("next_classes"===e){let e=s,t=r.next_tokens;if(t&&(e+=t.length),!this.matchTokens(e,i,n,!1,!0,!0))return!1}return!0}matchTokens(e,t,s,n,r,i){if(n&&e<0)return!1;if(r&&e+t.length>s.length)return!1;for(let n=0;n<t.length;n++)if(i){let r=this.tokens[s[e+n]];if(!(r&&r.indexOf(t[n])>=0))return!1}else if(s[e+n]!==t[n])return!1;return!0}matchAt(e,t,s=!1){let n=this.graph,r=n.node,i=n.edge;var o=[],l=[];function a(e,s){let n=[],i=r[e].ordered_children;if(i)if(n=i[t[s]],n)n.slice().reverse().forEach((function(t){l.unshift([t,e,s])}));else{let t=i.__rules__;t&&t.slice().reverse().forEach((function(t){l.unshift([t,e,s])}))}}for(a(0,e);l.length>0;){let[e,n,c]=l.shift(),h=r[e],u=i[n][e];if(h.accepting&&this.matchConstraints(u,h,c,t)){if(s){o.push(h.rule_key);continue}return h.rule_key}c<t.length-1&&(c+=1),a(e,c)}if(s)return o}matchAllAt(e,t){return this.matchAt(e,t,!0)}transliterate(e){let t=this.tokenize(e),s=Boolean(t.find(e=>!1===e.matched));if(s){let s="Unrecognized tokens: "+t.filter(e=>!1===e.matched).map(e=>'"'+e.string+'" at pos '+e.startIndex).join(", ")+' of "'+e+'"';if(!this.ignoreErrors)throw new l(s);console.log(s)}let n=t.map(e=>e.token);this.lastInputDetails=t,this.lastInputTokens=n,this.lastRuleKeys=[],this.lastHasErrors=s;let r=1,i="";for(;r<n.length-1;){let s=this.matchAt(r,n);if(void 0===s){let s="No matching transliteration rule at pos "+t[r].startIndex+' of "'+e+'"';if(this.ignoreErrors){console.log(s),r+=1;continue}throw new o(s)}this.lastRuleKeys.push(s);let l=this.rules[s],c=l.tokens;if(this.onmatchRules){let e,t=n[r-1],s=n[r],o=this.onmatchRulesLookup[s];if(o&&(e=o[t]),e)for(var a=0;a<e.length;a++){let t=e[a],s=this.onmatchRules[t];if(this.matchTokens(r-s.prev_classes.length,s.prev_classes,n,!0,!1,!0)&&this.matchTokens(r,s.next_classes,n,!1,!0,!0)){i+=s.production;break}}}i+=l.production,r+=c.length}return i}}e.exports={GraphTransliterator:a,GraphTransliteratorError:i,NoMatchingTransliterationRuleError:o,UnrecognizableInputTokenError:l}},function(e,t,s){"use strict";e.exports={DirectedGraph:class{constructor(e,t,s){if(this.node=e||[],this.edge=t||{},this.edge_list=s||[],t&&!s)for(const e in t)for(const s in t[e])this.edge_list.push([parseInt(e,10),parseInt(s,10)])}addNode(e){e||(e=[]);let t=this.node.length;return this.node.push(e),[t,this.node[t]]}addEdge(e,t,s){return s||(s={}),e in this.edge||(this.edge[e]={}),this.edge[e][t]=s,this.edge_list.push([e,t]),this.edge[e][t]}}}},function(e,t){e.exports={decompressSettings:function(e){function t(e){return Math.log2(1+1/(1-e))}function s(e){return Object.keys(e).forEach(t=>(null===e[t]||e[t]==={})&&delete e[t]),e}function n(e){let[n,r,i]=e,o={};function l(e){let t=n[e];if(0!==t)return t.map(e=>g[e])}return n&&(o.constraints=s({prev_classes:l(0),prev_tokens:l(1),next_tokens:function(e){let t=n[e];if(0!==t)return t.map(e=>f[e])}(2),next_classes:l(3)})),o.cost=t(r),-1!==i&&(o.token=f[i]),o}let r,i,[o,l,a,c,h,u,d,p]=e,f=l,g=o,_=Object.assign({},...Object.entries(a).map(([e,t])=>({[f[e]]:t.map(e=>g[e])}))),k=c.map(e=>({production:e[0],prev_classes:e[1]?e[1].map(e=>g[e]):[],prev_tokens:e[2]?e[2].map(e=>f[e]):[],tokens:e[3].map(e=>f[e]),next_tokens:e[4]?e[4].map(e=>f[e]):[],next_classes:e[5]?e[5].map(e=>g[e]):[],cost:t(e[6])})),m={default:h[0],token_class:h[1],consolidate:h[2]},v=u?u.map(e=>({prev_classes:e[0].map(e=>g[e]),next_classes:e[1].map(e=>g[e]),production:e[2]})):void 0;if(p){let[e,t,o]=p;i=e,r={node:t.map(e=>(function(e){function t(t){let s=e[t],n={};for(let[e,t]of Object.entries(s))e=parseInt(e,10),-1===e?n.__rules__=t:n[f[e]]=t;return n}let n=i[e[0]],r=1===e[1]||!1,o={};return"Start"===n?o={type:n,accepting:r,ordered_children:t(2)}:"rule"===n?o={type:n,accepting:r,rule_key:e[2]}:"token"===n&&(o={type:n,accepting:r,token:f[e[2]],ordered_children:t(3)}),s(o)})(e)),edge:Object.assign({},...Object.entries(o).map(([e,t])=>({[e]:Object.assign({},...Object.entries(t).map(([e,t])=>({[e]:n(t)})))})))}}return{tokens:_,rules:k,whitespace:m,onmatch_rules:v,graph:r,metadata:d}}}}]);