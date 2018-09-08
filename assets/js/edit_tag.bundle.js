"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function e(t,n,r){function i(o,a){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!a&&l)return l(o,!0);if(s)return s(o,!0);throw new Error("Cannot find module '"+o+"'")}var u=n[o]={exports:{}};t[o][0].call(u.exports,function(e){var n=t[o][1][e];return i(n?n:e)},u,u.exports,e,t,n,r)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){(function(e){!function(e){function r(e){this.tokens=[],this.tokens.links={},this.options=e||f.defaults,this.rules=d.normal,this.options.gfm&&(this.options.tables?this.rules=d.tables:this.rules=d.gfm)}function i(e,t){if(this.options=t||f.defaults,this.links=e,this.rules=m.normal,this.renderer=this.options.renderer||new s,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=m.breaks:this.rules=m.gfm:this.options.pedantic&&(this.rules=m.pedantic)}function s(e){this.options=e||{}}function o(){}function a(e){this.tokens=[],this.token=null,this.options=e||f.defaults,this.options.renderer=this.options.renderer||new s,this.renderer=this.options.renderer,this.renderer.options=this.options}function l(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function u(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function p(e,t){return e=e.source,t=t||"",{replace:function(t,n){return n=n.source||n,n=n.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,n),this},getRegex:function(){return new RegExp(e,t)}}}function h(e,t){return b[" "+e]||(/^[^:]+:\/*[^\/]*$/.test(e)?b[" "+e]=e+"/":b[" "+e]=e.replace(/[^\/]*$/,"")),e=b[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^\/]*)[\s\S]*/,"$1")+t:e+t}function c(){}function g(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function f(e,t,n){if("undefined"==typeof e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null),t=g({},f.defaults,t||{});var i,s,o=t.highlight,u=0;try{i=r.lex(e,t)}catch(p){return n(p)}s=i.length;var h=function(e){if(e)return t.highlight=o,n(e);var r;try{r=a.parse(i,t)}catch(s){e=s}return t.highlight=o,e?n(e):n(null,r)};if(!o||o.length<3)return h();if(delete t.highlight,!s)return h();for(;u<i.length;u++)!function(e){return"code"!==e.type?--s||h():o(e.text,e.lang,function(t,n){return t?h(t):null==n||n===e.text?--s||h():(e.text=n,e.escaped=!0,void(--s||h()))})}(i[u])}else try{return t&&(t=g({},f.defaults,t)),a.parse(r.lex(e,t),t)}catch(p){if(p.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||f.defaults).silent)return"<p>An error occurred:</p><pre>"+l(p.message+"",!0)+"</pre>";throw p}}var d={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:c,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:c,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:c,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,text:/^[^\n]+/};d._label=/(?:\\[\[\]]|[^\[\]])+/,d._title=/(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/,d.def=p(d.def).replace("label",d._label).replace("title",d._title).getRegex(),d.bullet=/(?:[*+-]|\d+\.)/,d.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,d.item=p(d.item,"gm").replace(/bull/g,d.bullet).getRegex(),d.list=p(d.list).replace(/bull/g,d.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+d.def.source+")").getRegex(),d._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",d.html=p(d.html).replace("comment",/<!--[\s\S]*?-->/).replace("closed",/<(tag)[\s\S]+?<\/\1>/).replace("closing",/<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/).replace(/tag/g,d._tag).getRegex(),d.paragraph=p(d.paragraph).replace("hr",d.hr).replace("heading",d.heading).replace("lheading",d.lheading).replace("tag","<"+d._tag).getRegex(),d.blockquote=p(d.blockquote).replace("paragraph",d.paragraph).getRegex(),d.normal=g({},d),d.gfm=g({},d.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),d.gfm.paragraph=p(d.paragraph).replace("(?!","(?!"+d.gfm.fences.source.replace("\\1","\\2")+"|"+d.list.source.replace("\\1","\\3")+"|").getRegex(),d.tables=g({},d.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),r.rules=d,r.lex=function(e,t){var n=new r(t);return n.lex(e)},r.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},r.prototype.token=function(e,t){e=e.replace(/^ +$/gm,"");for(var n,r,i,s,o,a,l,u,p,h,c;e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),a={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},u=0;u<a.align.length;u++)/^ *-+: *$/.test(a.align[u])?a.align[u]="right":/^ *:-+: *$/.test(a.align[u])?a.align[u]="center":/^ *:-+ *$/.test(a.align[u])?a.align[u]="left":a.align[u]=null;for(u=0;u<a.cells.length;u++)a.cells[u]=a.cells[u].split(/ *\| */);this.tokens.push(a)}else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),s=i[2],c=s.length>1,this.tokens.push({type:"list_start",ordered:c,start:c?+s:""}),i=i[0].match(this.rules.item),n=!1,h=i.length,u=0;u<h;u++)a=i[u],l=a.length,a=a.replace(/^ *([*+-]|\d+\.) +/,""),~a.indexOf("\n ")&&(l-=a.length,a=this.options.pedantic?a.replace(/^ {1,4}/gm,""):a.replace(new RegExp("^ {1,"+l+"}","gm"),"")),this.options.smartLists&&u!==h-1&&(o=d.bullet.exec(i[u+1])[0],s===o||s.length>1&&o.length>1||(e=i.slice(u+1).join("\n")+e,u=h-1)),r=n||/\n\n(?!\s*$)/.test(a),u!==h-1&&(n="\n"===a.charAt(a.length-1),r||(r=n)),this.tokens.push({type:r?"loose_item_start":"list_item_start"}),this.token(a,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),i[3]&&(i[3]=i[3].substring(1,i[3].length-1)),p=i[1].toLowerCase(),this.tokens.links[p]||(this.tokens.links[p]={href:i[2],title:i[3]});else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),a={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},u=0;u<a.align.length;u++)/^ *-+: *$/.test(a.align[u])?a.align[u]="right":/^ *:-+: *$/.test(a.align[u])?a.align[u]="center":/^ *:-+ *$/.test(a.align[u])?a.align[u]="left":a.align[u]=null;for(u=0;u<a.cells.length;u++)a.cells[u]=a.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(a)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var m={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:c,tag:/^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:c,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};m._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,m._email=/[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,m.autolink=p(m.autolink).replace("scheme",m._scheme).replace("email",m._email).getRegex(),m._inside=/(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,m._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,m.link=p(m.link).replace("inside",m._inside).replace("href",m._href).getRegex(),m.reflink=p(m.reflink).replace("inside",m._inside).getRegex(),m.normal=g({},m),m.pedantic=g({},m.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),m.gfm=g({},m.normal,{escape:p(m.escape).replace("])","~|])").getRegex(),url:p(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email",m._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:p(m.text).replace("]|","~]|").replace("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()}),m.breaks=g({},m.gfm,{br:p(m.br).replace("{2,}","*").getRegex(),text:p(m.gfm.text).replace("{2,}","*").getRegex()}),i.rules=m,i.output=function(e,t,n){var r=new i(t,n);return r.output(e)},i.prototype.output=function(e){for(var t,n,r,i,s="";e;)if(i=this.rules.escape.exec(e))e=e.substring(i[0].length),s+=i[1];else if(i=this.rules.autolink.exec(e))e=e.substring(i[0].length),"@"===i[2]?(n=l(this.mangle(i[1])),r="mailto:"+n):(n=l(i[1]),r=n),s+=this.renderer.link(r,null,n);else if(this.inLink||!(i=this.rules.url.exec(e))){if(i=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(i[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(i[0])&&(this.inLink=!1),e=e.substring(i[0].length),s+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):l(i[0]):i[0];else if(i=this.rules.link.exec(e))e=e.substring(i[0].length),this.inLink=!0,s+=this.outputLink(i,{href:i[2],title:i[3]}),this.inLink=!1;else if((i=this.rules.reflink.exec(e))||(i=this.rules.nolink.exec(e))){if(e=e.substring(i[0].length),t=(i[2]||i[1]).replace(/\s+/g," "),t=this.links[t.toLowerCase()],!t||!t.href){s+=i[0].charAt(0),e=i[0].substring(1)+e;continue}this.inLink=!0,s+=this.outputLink(i,t),this.inLink=!1}else if(i=this.rules.strong.exec(e))e=e.substring(i[0].length),s+=this.renderer.strong(this.output(i[2]||i[1]));else if(i=this.rules.em.exec(e))e=e.substring(i[0].length),s+=this.renderer.em(this.output(i[2]||i[1]));else if(i=this.rules.code.exec(e))e=e.substring(i[0].length),s+=this.renderer.codespan(l(i[2].trim(),!0));else if(i=this.rules.br.exec(e))e=e.substring(i[0].length),s+=this.renderer.br();else if(i=this.rules.del.exec(e))e=e.substring(i[0].length),s+=this.renderer.del(this.output(i[1]));else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),s+=this.renderer.text(l(this.smartypants(i[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else i[0]=this.rules._backpedal.exec(i[0])[0],e=e.substring(i[0].length),"@"===i[2]?(n=l(i[0]),r="mailto:"+n):(n=l(i[0]),r="www."===i[1]?"http://"+n:n),s+=this.renderer.link(r,null,n);return s},i.prototype.outputLink=function(e,t){var n=l(t.href),r=t.title?l(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,l(e[1]))},i.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},i.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},s.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+l(t,!0)+'">'+(n?e:l(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:l(e,!0))+"\n</code></pre>"},s.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},s.prototype.html=function(e){return e},s.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},s.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},s.prototype.list=function(e,t,n){var r=t?"ol":"ul",i=t&&1!==n?' start="'+n+'"':"";return"<"+r+i+">\n"+e+"</"+r+">\n"},s.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},s.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},s.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},s.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},s.prototype.tablecell=function(e,t){var n=t.header?"th":"td",r=t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">";return r+e+"</"+n+">\n"},s.prototype.strong=function(e){return"<strong>"+e+"</strong>"},s.prototype.em=function(e){return"<em>"+e+"</em>"},s.prototype.codespan=function(e){return"<code>"+e+"</code>"},s.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},s.prototype.del=function(e){return"<del>"+e+"</del>"},s.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(u(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(i){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}this.options.baseUrl&&!k.test(e)&&(e=h(this.options.baseUrl,e));var s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>"},s.prototype.image=function(e,t,n){this.options.baseUrl&&!k.test(e)&&(e=h(this.options.baseUrl,e));var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},s.prototype.text=function(e){return e},o.prototype.strong=o.prototype.em=o.prototype.codespan=o.prototype.del=o.prototype.text=function(e){return e},o.prototype.link=o.prototype.image=function(e,t,n){return""+n},o.prototype.br=function(){return""},a.parse=function(e,t){var n=new a(t);return n.parse(e)},a.prototype.parse=function(e){this.inline=new i(e.links,this.options),this.inlineText=new i(e.links,g({},this.options,{renderer:new o})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},a.prototype.next=function(){return this.token=this.tokens.pop()},a.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},a.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},a.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,u(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,i="",s="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(i+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});s+=this.renderer.tablerow(n)}return this.renderer.table(i,s);case"blockquote_start":for(s="";"blockquote_end"!==this.next().type;)s+=this.tok();return this.renderer.blockquote(s);case"list_start":s="";for(var o=this.token.ordered,a=this.token.start;"list_end"!==this.next().type;)s+=this.tok();return this.renderer.list(s,o,a);case"list_item_start":for(s="";"list_item_end"!==this.next().type;)s+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(s);case"loose_item_start":for(s="";"list_item_end"!==this.next().type;)s+=this.tok();return this.renderer.listitem(s);case"html":var l=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(l);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var b={},k=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;c.exec=c,f.options=f.setOptions=function(e){return g(f.defaults,e),f},f.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new s,xhtml:!1,baseUrl:null},f.Parser=a,f.parser=a.parse,f.Renderer=s,f.TextRenderer=o,f.Lexer=r,f.lexer=r.lex,f.InlineLexer=i,f.inlineLexer=i.output,f.parse=f,"undefined"!=typeof t&&"object"===("undefined"==typeof n?"undefined":_typeof(n))?t.exports=f:"function"==typeof define&&define.amd?define(function(){return f}):e.marked=f}(this||("undefined"!=typeof window?window:e))}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){!function(e,r){"function"==typeof define&&define.amd?define(r):"object"===("undefined"==typeof n?"undefined":_typeof(n))?t.exports=r():e.NProgress=r()}(this,function(){function e(e,t,n){return e<t?t:e>n?n:e}function t(e){return 100*(-1+e)}function n(e,n,r){var i;return i="translate3d"===u.positionUsing?{transform:"translate3d("+t(e)+"%,0,0)"}:"translate"===u.positionUsing?{transform:"translate("+t(e)+"%,0)"}:{"margin-left":t(e)+"%"},i.transition="all "+n+"ms "+r,i}function r(e,t){var n="string"==typeof e?e:o(e);return n.indexOf(" "+t+" ")>=0}function i(e,t){var n=o(e),i=n+t;r(n,t)||(e.className=i.substring(1))}function s(e,t){var n,i=o(e);r(e,t)&&(n=i.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function o(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function a(e){e&&e.parentNode&&e.parentNode.removeChild(e)}var l={};l.version="0.2.0";var u=l.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};l.configure=function(e){var t,n;for(t in e)n=e[t],void 0!==n&&e.hasOwnProperty(t)&&(u[t]=n);return this},l.status=null,l.set=function(t){var r=l.isStarted();t=e(t,u.minimum,1),l.status=1===t?null:t;var i=l.render(!r),s=i.querySelector(u.barSelector),o=u.speed,a=u.easing;return i.offsetWidth,p(function(e){""===u.positionUsing&&(u.positionUsing=l.getPositioningCSS()),h(s,n(t,o,a)),1===t?(h(i,{transition:"none",opacity:1}),i.offsetWidth,setTimeout(function(){h(i,{transition:"all "+o+"ms linear",opacity:0}),setTimeout(function(){l.remove(),e()},o)},o)):setTimeout(e,o)}),this},l.isStarted=function(){return"number"==typeof l.status},l.start=function(){l.status||l.set(0);var e=function t(){setTimeout(function(){l.status&&(l.trickle(),t())},u.trickleSpeed)};return u.trickle&&e(),this},l.done=function(e){return e||l.status?l.inc(.3+.5*Math.random()).set(1):this},l.inc=function(t){var n=l.status;return n?("number"!=typeof t&&(t=(1-n)*e(Math.random()*n,.1,.95)),n=e(n+t,0,.994),l.set(n)):l.start()},l.trickle=function(){return l.inc(Math.random()*u.trickleRate)},function(){var e=0,t=0;l.promise=function(n){return n&&"resolved"!==n.state()?(0===t&&l.start(),e++,t++,n.always(function(){t--,0===t?(e=0,l.done()):l.set((e-t)/e)}),this):this}}(),l.render=function(e){if(l.isRendered())return document.getElementById("nprogress");i(document.documentElement,"nprogress-busy");var n=document.createElement("div");n.id="nprogress",n.innerHTML=u.template;var r,s=n.querySelector(u.barSelector),o=e?"-100":t(l.status||0),p=document.querySelector(u.parent);return h(s,{transition:"all 0 linear",transform:"translate3d("+o+"%,0,0)"}),u.showSpinner||(r=n.querySelector(u.spinnerSelector),r&&a(r)),p!=document.body&&i(p,"nprogress-custom-parent"),p.appendChild(n),n},l.remove=function(){s(document.documentElement,"nprogress-busy"),s(document.querySelector(u.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&a(e)},l.isRendered=function(){return!!document.getElementById("nprogress")},l.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var p=function(){function e(){var n=t.shift();n&&n(e)}var t=[];return function(n){t.push(n),1==t.length&&e()}}(),h=function(){function e(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})}function t(e){var t=document.body.style;if(e in t)return e;for(var n,r=i.length,s=e.charAt(0).toUpperCase()+e.slice(1);r--;)if(n=i[r]+s,n in t)return n;return e}function n(n){return n=e(n),s[n]||(s[n]=t(n))}function r(e,t,r){t=n(t),e.style[t]=r}var i=["Webkit","O","Moz","ms"],s={};return function(e,t){var n,i,s=arguments;if(2==s.length)for(n in t)i=t[n],void 0!==i&&t.hasOwnProperty(n)&&r(e,n,i);else r(e,s[1],s[2])}}();return l})},{}],3:[function(e,t,n){var r=e("marked"),i=e("nprogress");$(function(){function e(){return $("#tag-form").serialize()}function t(){$("#slug").val(Postleaf.Slug($("#slug").val()))}function n(){var e=$("#slug").val(),t=$.trim($("#name").val()),n=$(r($.trim($("#description").val()))).text(),i=$.trim($("#meta-title").val()),s=$.trim($("#meta-description").val());$(".search-engine-preview .slug").text(e),$(".search-engine-preview-title").text(i||t),$(".search-engine-preview-description").text(s||n)}var s=$("#tag-form").attr("data-changes-saved"),o=e(),a=$("#tag-form").attr("data-create-action"),l=$("#tag-form").attr("data-save-confirmation"),u=$("#tag-form").attr("data-tag-created"),p=$("#tag-form").attr("data-tag-id"),h=$("#tag-form").attr("data-update-action");$("#name").on("change paste",function(){$("#slug").val()||$("#slug").val(Postleaf.Slug(this.value))}),$("#slug").on("change paste",t),$(".image-control").imageControl().on("uploadProgress.imageControl",function(e,t){return i.set(.9*t)}).on("uploadComplete.imageControl",function(){return i.done(!1)}),$("#name, #description, #slug, #meta-title, #meta-description").on("change keyup paste",n),n(),$("#tag-form").ajaxSubmit({url:function(){return p?h.replace(":id",p):a},method:function(){return p?"PUT":"POST"},before:i.start,after:i.done,error:function(e){e.message&&$.announce.warning(e.message)},success:function(t){if(t.tag){var n=p?s:u.replace(":name",t.tag.name);$.announce.success(n),p=t.tag.id,o=e()}}}),$("[data-save]").on("click",function(){return $("#tag-form").submit()}),$("#sidebar").find('[data-toggle="tab"]').on("show.bs.tab",function(){var e=this.href;0===$(this).index()&&(e=e.split("#")[0]),window.history.replaceState({},"",e)}),location.hash&&$("#sidebar").find('[data-toggle="tab"][href="'+location.hash+'"]').each(function(){$(this).tab("show")}),window.onbeforeunload=function(){if(e()!==o)return l}})},{marked:1,nprogress:2}]},{},[3]);