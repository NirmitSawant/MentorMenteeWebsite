
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],"__proto__"!==d&&g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;d<c;d++)if(!1===b.call(a[d],d,a[d]))break}else for(d in a)if(!1===b.call(a[d],d,a[d]))break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?c<0?Math.max(0,d+c):c:0;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(d<c)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)(d=!b(a[f],f))!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;g<d;g++)null!=(e=b(a[g],g,c))&&h.push(e);else for(g in a)null!=(e=b(a[g],g,c))&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;if("string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a))return c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"!==c&&!n.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=fa(),z=fa(),A=fa(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(xa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ea(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+pa(r[h]);s=r.join(","),w=_.test(a)&&na(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function fa(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ga(a){return a[u]=!0,a}function ha(a){var b=n.createElement("div");try{return!!a(b)}catch(xa){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ia(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ja(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ka(a){return function(b){return"input"===b.nodeName.toLowerCase()&&b.type===a}}function la(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ma(a){return ga(function(b){return b=+b,ga(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function na(a){return a&&void 0!==a.getElementsByTagName&&a}c=ea.support={},f=ea.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ea.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ha(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ha(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ha(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(void 0!==b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c=void 0!==a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return void 0!==b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if(void 0!==b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ha(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ha(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ha(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d||(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ja(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ja(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ea.matches=function(a,b){return ea(a,null,null,b)},ea.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(xa){}return ea(b,n,null,[a]).length>0},ea.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ea.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ea.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ea.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ea.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ea.selectors={cacheLength:50,createPseudo:ga,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ea.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ea.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||void 0!==a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ea.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),!1===t)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return(t-=e)===d||t%d==0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ea.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ga(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ga(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ga(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ga(function(a){return function(b){return ea(a,b).length>0}}),contains:ga(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ga(function(a){return V.test(a||"")||ea.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return(c=c.toLowerCase())===a||0===c.indexOf(a+"-")}while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return!1===a.disabled},disabled:function(a){return!0===a.disabled},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,!0===a.selected},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ma(function(){return[0]}),last:ma(function(a,b){return[b-1]}),eq:ma(function(a,b,c){return[c<0?c+b:c]}),even:ma(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:ma(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:ma(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:ma(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ka(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=la(b);function oa(){}oa.prototype=d.filters=d.pseudos,d.setFilters=new oa,g=ea.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ea.error(a):z(a,i).slice(0)};function pa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function qa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function ra(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sa(a,b,c){for(var d=0,e=b.length;d<e;d++)ea(a,b[d],c);return c}function ta(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function ua(a,b,c,d,e,f){return d&&!d[u]&&(d=ua(d)),e&&!e[u]&&(e=ua(e,f)),ga(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||sa(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ta(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ta(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ta(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function va(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=qa(function(a){return a===b},h,!0),l=qa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[qa(ra(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return ua(i>1&&ra(m),i>1&&pa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,i<e&&va(a.slice(i,e)),e<f&&va(a=a.slice(e)),e<f&&pa(a))}m.push(c)}return ra(m)}function wa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ta(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ea.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ga(f):f}return h=ea.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=va(b[c]),f[u]?d.push(f):e.push(f);f=A(a,wa(e,d)),f.selector=a}return f},i=ea.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(!(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0]))return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&na(b.parentNode)||b))){if(j.splice(i,1),!(a=f.length&&pa(j)))return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&na(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ha(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ha(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ia("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ha(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ia("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ha(function(a){return null==a.getAttribute("disabled")})||ia(K,function(a,b,c){var d;if(!c)return!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ea}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;b<e;b++)if(n.contains(d[b],this))return!0}));for(b=0;b<e;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(!(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a))||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if((f=d.getElementById(e[2]))&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))}).prototype=n.fn,A=n(d);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do{a=a[b]}while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.uniqueSort(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g;function G(a){var b={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)!1===f[h].apply(c[0],c[1])&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function b(c){n.each(c,function(c,d){n.isFunction(d)?a.unique&&j.has(d)||f.push(d):d&&d.length&&"string"!==n.type(d)&&b(d)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);b<d;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(!0===a?--n.readyWait:n.isReady)||(n.isReady=!0,!0!==a&&--n.readyWait>0||(H.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function I(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J)):(d.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(I(),n.ready())}n.ready.promise=function(b){if(!H)if(H=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J);else{d.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&function b(){if(!n.isReady){try{c.doScroll("left")}catch(e){return a.setTimeout(b,50)}I(),n.ready()}}()}return H.promise(b)},n.ready.promise();var K;for(K in n(l))break;l.ownFirst="0"===K,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;(c=d.getElementsByTagName("body")[0])&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),void 0!==b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var L=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return(1===c||9===c)&&(!b||!0!==b&&a.getAttribute("classid")===b)},M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if("string"==typeof(c=a.getAttribute(d))){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:M.test(c)?n.parseJSON(c):c)}catch(e){}n.data(a,b,c)}else c=void 0}return c}function P(a){var b
    ;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(L(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?null==(f=g[b])&&(f=g[n.camelCase(b)]):f=g,f}}function R(a,b,c){if(L(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return!!(a=a.nodeType?n.cache[a[n.expando]]:a[n.expando])&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),O(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?O(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)(c=n._data(f[g],a+"queueHooks"))&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return(c=d.getElementsByTagName("body")[0])&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),void 0!==b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do{f=f||".5",k/=f,n.style(a,b,k+j)}while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)X(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Y=/^(?:checkbox|radio)$/i,Z=/<([\w:-]+)/,$=/^$|\/(?:java|ecma)script/i,_=/^\s+/,aa="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ba(a){var b=aa.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var ca={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};ca.optgroup=ca.option,ca.tbody=ca.tfoot=ca.colgroup=ca.caption=ca.thead,ca.th=ca.td;function da(a,b){var c,d,e=0,f=void 0!==a.getElementsByTagName?a.getElementsByTagName(b||"*"):void 0!==a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,da(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function ea(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var fa=/<|&#?\w+;/,ga=/<tbody/i;function ha(a){Y.test(a.type)&&(a.defaultChecked=a.checked)}function ia(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ba(b),q=[],r=0;r<o;r++)if((g=a[r])||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(fa.test(g)){i=i||p.appendChild(b.createElement("div")),j=(Z.exec(g)||["",""])[1].toLowerCase(),m=ca[j]||ca._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&_.test(g)&&q.push(b.createTextNode(_.exec(g)[0])),!l.tbody){g="table"!==j||ga.test(g)?"<table>"!==m[1]||ga.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(da(q,"input"),ha),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=da(p.appendChild(g),"script"),h&&ea(i),c){f=0;while(g=i[f++])$.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=!1===e.attributes[c].expando);e=null}();var ja=/^(?:input|select|textarea)$/i,ka=/^key/,la=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ma=/^(?:focusinfocus|focusoutblur)$/,na=/^([^.]*)(?:\.(.+)|)/;function oa(){return!0}function pa(){return!1}function qa(){try{return d.activeElement}catch(a){}}function ra(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ra(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),!1===e)e=pa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return void 0===n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=na.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&!1!==j.setup.call(a,d,p,k)||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=na.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&!1!==l.teardown.call(a,p,r.handle)||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ma.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||!1!==l.trigger.apply(e,c))){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,ma.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),(g=h&&i[h])&&g.apply&&L(i)&&(b.result=g.apply(i,c),!1===b.result&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||!1===l._default.apply(p.pop(),c))&&L(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||!1!==k.preDispatch.call(this,a)){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,void 0!==(d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i))&&!1===(a.result=d)&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(!0!==i.disabled||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=la.test(f)?this.mouseHooks:ka.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==qa()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){if(this===qa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(n.nodeName(this,"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&(void 0===a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){if(!(this instanceof n.Event))return new n.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&!1===a.returnValue?oa:pa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),this[n.expando]=!0},n.Event.prototype={constructor:n.Event,isDefaultPrevented:pa,isPropagationStopped:pa,isImmediatePropagationStopped:pa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=oa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=oa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=oa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){if(n.nodeName(this,"form"))return!1;n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){if(n.nodeName(this,"form"))return!1;n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){if(ja.test(this.nodeName))return"checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1;n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ja.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type)return a.handleObj.handler.apply(this,arguments)},teardown:function(){return n.event.remove(this,"._change"),!ja.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return ra(this,a,b,c,d)},one:function(a,b,c,d){return ra(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return!1!==b&&"function"!=typeof b||(c=b,b=void 0),!1===c&&(c=pa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return n.event.trigger(a,b,c,!0)}});var sa=/ jQuery\d+="(?:null|\d+)"/g,ta=new RegExp("<(?:"+aa+")[\\s/>]","i"),ua=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,va=/<script|<style|<link/i,wa=/checked\s*(?:[^=]|=\s*.checked.)/i,xa=/^true\/(.*)/,ya=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,za=ba(d),Aa=za.appendChild(d.createElement("div"));function Ba(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Ca(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Da(a){var b=xa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ea(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Fa(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Ca(b).text=a.text,Da(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Y.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ga(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&wa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ga(f,b,c,d)});if(o&&(k=ia(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(da(k,"script"),Ca),h=i.length;m<o;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,da(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Da),m=0;m<h;m++)g=i[m],$.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(ya,"")));k=e=null}return a}function Ha(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(da(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&ea(da(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ua,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ta.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Aa.innerHTML=a.outerHTML,Aa.removeChild(f=Aa.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=da(f),h=da(a),g=0;null!=(e=h[g]);++g)d[g]&&Fa(e,d[g]);if(b)if(c)for(h=h||da(a),d=d||da(f),g=0;null!=(e=h[g]);g++)Ea(e,d[g]);else Ea(a,f);return d=da(f,"script"),d.length>0&&ea(d,!i&&da(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||L(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||void 0===d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ga,detach:function(a){return Ha(this,a,!0)},remove:function(a){return Ha(this,a)},text:function(a){return X(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ga(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){Ba(this,a).appendChild(a)}})},prepend:function(){return Ga(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ba(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ga(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ga(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(da(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return X(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(sa,""):void 0;if("string"==typeof a&&!va.test(a)&&(l.htmlSerialize||!ta.test(a))&&(l.leadingWhitespace||!_.test(a))&&!ca[(Z.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(da(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ga(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(da(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;d<=h;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ia,Ja={HTML:"block",BODY:"block"};function Ka(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function La(a){var b=d,c=Ja[a];return c||(c=Ka(a,b),"none"!==c&&c||(Ia=(Ia||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ia[0].contentWindow||Ia[0].contentDocument).document,b.write(),b.close(),c=Ka(a,b),Ia.detach()),Ja[a]=c),c}var Ma=/^margin/,Na=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Oa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Pa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",(f=0===k[0].offsetHeight)&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}j.style&&(j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}}))}();var Qa,Ra,Sa=/^(top|right|bottom|left)$/;a.getComputedStyle?(Qa=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Ra=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Qa(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Na.test(g)&&Ma.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Pa.currentStyle&&(Qa=function(a){return a.currentStyle},Ra=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Qa(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Na.test(g)&&!Sa.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ta(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ua=/alpha\([^)]*\)/i,Va=/opacity\s*=\s*([^)]*)/i,Wa=/^(none|table(?!-c[ea]).+)/,Xa=new RegExp("^("+S+")(.*)$","i"),Ya={position:"absolute",visibility:"hidden",display:"block"},Za={letterSpacing:"0",fontWeight:"400"},$a=["Webkit","O","Moz","ms"],_a=d.createElement("div").style;function ab(a){if(a in _a)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=$a.length;while(c--)if((a=$a[c]+b)in _a)return a}function bb(a,b){for(var c,d,e,f=[],g=0,h=a.length;g<h;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",La(d.nodeName)))):(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;g<h;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function cb(a,b,c){var d=Xa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function db(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function eb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Qa(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(e<=0||null==e){if(e=Ra(a,b,f),(e<0||null==e)&&(e=a.style[b]),Na.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+db(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ra(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=ab(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=ab(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ra(a,b,d)),"normal"===f&&b in Za&&(f=Za[b]),""===c||c?(e=parseFloat(f),!0===c||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){if(c)return Wa.test(n.css(a,"display"))&&0===a.offsetWidth?Oa(a,Ya,function(){return eb(a,b,d)}):eb(a,b,d)},set:function(a,c,d){var e=d&&Qa(a);return cb(a,c,d?db(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Va.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Ua,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ua.test(f)?f.replace(Ua,e):f+" "+e)}}),n.cssHooks.marginRight=Ta(l.reliableMarginRight,function(a,b){if(b)return Oa(a,{display:"inline-block"},Ra,[a,"marginRight"])}),n.cssHooks.marginLeft=Ta(l.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ra(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Oa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px"}),n.each({
    margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Ma.test(a)||(n.cssHooks[a+b].set=cb)}),n.fn.extend({css:function(a,b){return X(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Qa(a),e=b.length;g<e;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return bb(this,!0)},hide:function(){return bb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function fb(a,b,c,d,e){return new fb.prototype.init(a,b,c,d,e)}n.Tween=fb,fb.prototype={constructor:fb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=fb.propHooks[this.prop];return a&&a.get?a.get(this):fb.propHooks._default.get(this)},run:function(a){var b,c=fb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):fb.propHooks._default.set(this),this}},fb.prototype.init.prototype=fb.prototype,fb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},fb.propHooks.scrollTop=fb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=fb.prototype.init,n.fx.step={};var gb,hb,ib=/^(?:toggle|show|hide)$/,jb=/queueHooks$/;function kb(){return a.setTimeout(function(){gb=void 0}),gb=n.now()}function lb(a,b){var c,d={height:a},e=0;for(b=b?1:0;e<4;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function mb(a,b,c){for(var d,e=(pb.tweeners[b]||[]).concat(pb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function nb(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),"inline"===(k="none"===j?n._data(a,"olddisplay")||La(a.nodeName):j)&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==La(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ib.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?La(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=mb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function ob(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),(g=n.cssHooks[d])&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function pb(a,b,c){var d,e,f=0,g=pb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=gb||kb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:gb||kb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(ob(k,j.opts.specialEasing);f<g;f++)if(d=pb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,mb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(pb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(F);for(var c,d=0,e=a.length;d<e;d++)c=a[d],pb.tweeners[c]=pb.tweeners[c]||[],pb.tweeners[c].unshift(b)},prefilters:[nb],prefilter:function(a,b){b?pb.prefilters.unshift(a):pb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&!0!==d.queue||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=pb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||!1===f.queue?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&!1!==a&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&jb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(lb(b,!0),a,d,e)}}),n.each({slideDown:lb("show"),slideUp:lb("hide"),slideToggle:lb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(gb=n.now();c<b.length;c++)(a=b[c])()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),gb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){hb||(hb=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(hb),hb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var qb=/\r/g,rb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),(b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()])&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return(b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()])&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(qb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(rb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||e<0,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){if(n.isArray(b))return a.checked=n.inArray(n(a).val(),b)>-1}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb,tb,ub=n.expr.attrHandle,vb=/^(?:checked|selected)$/i,wb=l.getSetAttribute,xb=l.input;n.fn.extend({attr:function(a,b){return X(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return void 0===a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?tb:sb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?xb&&wb||!vb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(wb?c:d)}}),tb={set:function(a,b,c){return!1===b?n.removeAttr(a,c):xb&&wb||!vb.test(c)?a.setAttribute(!wb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ub[b]||n.find.attr;xb&&wb||!vb.test(b)?ub[b]=function(a,b,d){var e,f;return d||(f=ub[b],ub[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ub[b]=f),e}:ub[b]=function(a,b,c){if(!c)return a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),xb&&wb||(n.attrHooks.value={set:function(a,b,c){if(!n.nodeName(a,"input"))return sb&&sb.set(a,b,c);a.defaultValue=b}}),wb||(sb={set:function(a,b,c){var d=a.getAttributeNode(c);if(d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c))return b}},ub.id=ub.name=ub.coords=function(a,b,c){var d;if(!c)return(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);if(c&&c.specified)return c.value},set:sb.set},n.attrHooks.contenteditable={set:function(a,b,c){sb.set(a,""!==b&&b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){if(""===c)return a.setAttribute(b,"auto"),c}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var yb=/^(?:input|select|textarea|button|object)$/i,zb=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return X(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):yb.test(a.nodeName)||zb.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Ab=/[\t\r\n\f]/g;function Bb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Bb(this)))});if("string"==typeof a&&a){b=a.match(F)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Bb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(F)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Bb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Bb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||!1===a?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Bb(c)+" ").replace(Ab," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Cb=a.location,Db=n.now(),Eb=/\?/,Fb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Fb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Gb=/#.*$/,Hb=/([?&])_=[^&]*/,Ib=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Jb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kb=/^(?:GET|HEAD)$/,Lb=/^\/\//,Mb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Nb={},Ob={},Pb="*/".concat("*"),Qb=Cb.href,Rb=Mb.exec(Qb.toLowerCase())||[];function Sb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Tb(a,b,c,d){var e={},f=a===Ob;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ub(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Vb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Wb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(!(g=j[i+" "+f]||j["* "+f]))for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){!0===g?g=j[e]:!0!==j[e]&&(f=h[0],k.unshift(h[1]));break}if(!0!==g)if(g&&a.throws)b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Qb,type:"GET",isLocal:Jb.test(Rb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ub(Ub(a,n.ajaxSettings),b):Ub(n.ajaxSettings,a)},ajaxPrefilter:Sb(Nb),ajaxTransport:Sb(Ob),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Ib.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(u<2)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),x(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Qb)+"").replace(Gb,"").replace(Lb,Rb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(F)||[""],null==l.crossDomain&&(d=Mb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Rb[1]&&d[2]===Rb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Rb[3]||("http:"===Rb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Tb(Nb,l,c,w),2===u)return w;i=n.event&&l.global,i&&0==n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Kb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Eb.test(f)?"&":"?")+l.data,delete l.data),!1===l.cache&&(l.url=Hb.test(f)?f.replace(Hb,"$1_="+Db++):f+(Eb.test(f)?"&":"?")+"_="+Db++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&!1!==l.contentType||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Pb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(!1===l.beforeSend.call(m,w,l)||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Tb(Ob,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,x)}catch(y){if(!(u<2))throw y;x(-1,y)}}else x(-1,"No Transport");function x(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&b<300||304===b,d&&(v=Vb(l,w,d)),v=Wb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),(x=w.getResponseHeader("etag"))&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",b<0&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Xb(a){return a.style&&a.style.display||n.css(a,"display")}function Yb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Xb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Yb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Zb=/%20/g,$b=/\[\]$/,_b=/\r?\n/g,ac=/^(?:submit|button|image|reset|file)$/i,bc=/^(?:input|select|textarea|keygen)/i;function cc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||$b.test(a)?d(a,e):cc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)cc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)cc(c,a[c],b,e);return d.join("&").replace(Zb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&bc.test(this.nodeName)&&!ac.test(a)&&(this.checked||!Y.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(_b,"\r\n")}}):{name:b.name,value:c.replace(_b,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?hc():d.documentMode>8?gc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&gc()||hc()}:gc;var dc=0,ec={},fc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ec)ec[a](void 0,!0)}),l.cors=!!fc&&"withCredentials"in fc,(fc=l.ajax=!!fc)&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++dc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete ec[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=ec[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function gc(){try{return new a.XMLHttpRequest}catch(b){}}function hc(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ic=[],jc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ic.pop()||n.expando+"_"+Db++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=!1!==b.jsonp&&(jc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&jc.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(jc,"$1"+e):!1!==b.jsonp&&(b.url+=(Eb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ic.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ia([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var kc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&kc)return kc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function lc(a){return n.isWindow(a)?a:9===a.nodeType&&(a.defaultView||a.parentWindow)}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(void 0!==e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=lc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Pa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return X(this,function(a,d,e){var f=lc(a);if(void 0===e)return f?b in f?f[b]:f.document.documentElement[d]:a[d];f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ta(l.pixelPosition,function(a,c){if(c)return c=Ra(a,b),Na.test(c)?n(a).position()[b]+"px":c})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(!0===d||!0===e?"margin":"border")
    ;return X(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var mc=a.jQuery,nc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=nc),b&&a.jQuery===n&&(a.jQuery=mc),n},b||(a.jQuery=a.$=n),n});
    jQuery.noConflict();

    /*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});


/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */
!function(factory){"use strict";"function"==typeof define&&define.amd?define(["jquery"],factory):jQuery&&!jQuery.fn.hoverIntent&&factory(jQuery)}(function($){"use strict";var cX,cY,_cfg={interval:100,sensitivity:6,timeout:0},INSTANCE_COUNT=0,track=function(ev){cX=ev.pageX,cY=ev.pageY},compare=function(ev,$el,s,cfg){if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity)return $el.off(s.event,track),delete s.timeoutId,s.isActive=!0,ev.pageX=cX,ev.pageY=cY,delete s.pX,delete s.pY,cfg.over.apply($el[0],[ev]);s.pX=cX,s.pY=cY,s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg)},cfg.interval)},delay=function(ev,$el,s,out){return delete $el.data("hoverIntent")[s.id],out.apply($el[0],[ev])};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var instanceId=INSTANCE_COUNT++,cfg=$.extend({},_cfg);$.isPlainObject(handlerIn)?(cfg=$.extend(cfg,handlerIn),$.isFunction(cfg.out)||(cfg.out=cfg.over)):cfg=$.isFunction(handlerOut)?$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector}):$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});var handleHover=function(e){var ev=$.extend({},e),$el=$(this),hoverIntentData=$el.data("hoverIntent");hoverIntentData||$el.data("hoverIntent",hoverIntentData={});var state=hoverIntentData[instanceId];state||(hoverIntentData[instanceId]=state={id:instanceId}),state.timeoutId&&(state.timeoutId=clearTimeout(state.timeoutId));var mousemove=state.event="mousemove.hoverIntent.hoverIntent"+instanceId;if("mouseenter"===e.type){if(state.isActive)return;state.pX=ev.pageX,state.pY=ev.pageY,$el.off(mousemove,track).on(mousemove,track),state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg)},cfg.interval)}else{if(!state.isActive)return;$el.off(mousemove,track),state.timeoutId=setTimeout(function(){delay(ev,$el,state,cfg.out)},cfg.timeout)}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}});


/*! Magnific Popup - v1.0.0 - 2015-09-17
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
;(function (factory) { 
    if (typeof define === 'function' && define.amd) { 
     // AMD. Register as an anonymous module. 
     define(['jquery'], factory); 
     } else if (typeof exports === 'object') { 
     // Node/CommonJS 
     factory(require('jquery')); 
     } else { 
     // Browser globals 
     factory(window.jQuery || window.Zepto); 
     } 
     }(function($) { 
    
    /*>>core*/
    /**
     * 
     * Magnific Popup Core JS file
     * 
     */
    
    
    /**
     * Private static constants
     */
    var CLOSE_EVENT = 'Close',
        BEFORE_CLOSE_EVENT = 'BeforeClose',
        AFTER_CLOSE_EVENT = 'AfterClose',
        BEFORE_APPEND_EVENT = 'BeforeAppend',
        MARKUP_PARSE_EVENT = 'MarkupParse',
        OPEN_EVENT = 'Open',
        CHANGE_EVENT = 'Change',
        NS = 'mfp',
        EVENT_NS = '.' + NS,
        READY_CLASS = 'mfp-ready',
        REMOVING_CLASS = 'mfp-removing',
        PREVENT_CLOSE_CLASS = 'mfp-prevent-close';
    
    
    /**
     * Private vars 
     */
    /*jshint -W079 */
    var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
        MagnificPopup = function(){},
        _isJQ = !!(window.jQuery),
        _prevStatus,
        _window = $(window),
        _document,
        _prevContentType,
        _wrapClasses,
        _currPopupType;
    
    
    /**
     * Private functions
     */
    var _mfpOn = function(name, f) {
            mfp.ev.on(NS + name + EVENT_NS, f);
        },
        _getEl = function(className, appendTo, html, raw) {
            var el = document.createElement('div');
            el.className = 'mfp-'+className;
            if(html) {
                el.innerHTML = html;
            }
            if(!raw) {
                el = $(el);
                if(appendTo) {
                    el.appendTo(appendTo);
                }
            } else if(appendTo) {
                appendTo.appendChild(el);
            }
            return el;
        },
        _mfpTrigger = function(e, data) {
            mfp.ev.triggerHandler(NS + e, data);
    
            if(mfp.st.callbacks) {
                // converts "mfpEventName" to "eventName" callback and triggers it if it's present
                e = e.charAt(0).toLowerCase() + e.slice(1);
                if(mfp.st.callbacks[e]) {
                    mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
                }
            }
        },
        _getCloseBtn = function(type) {
            if(type !== _currPopupType || !mfp.currTemplate.closeBtn) {
                mfp.currTemplate.closeBtn = $( mfp.st.closeMarkup.replace('%title%', mfp.st.tClose ) );
                _currPopupType = type;
            }
            return mfp.currTemplate.closeBtn;
        },
        // Initialize Magnific Popup only when called at least once
        _checkInstance = function() {
            if(!$.magnificPopup.instance) {
                /*jshint -W020 */
                mfp = new MagnificPopup();
                mfp.init();
                $.magnificPopup.instance = mfp;
            }
        },
        // CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
        supportsTransitions = function() {
            var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
                v = ['ms','O','Moz','Webkit']; // 'v' for vendor
    
            if( s['transition'] !== undefined ) {
                return true; 
            }
                
            while( v.length ) {
                if( v.pop() + 'Transition' in s ) {
                    return true;
                }
            }
                    
            return false;
        };
    
    
    
    /**
     * Public functions
     */
    MagnificPopup.prototype = {
    
        constructor: MagnificPopup,
    
        /**
         * Initializes Magnific Popup plugin. 
         * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
         */
        init: function() {
            var appVersion = navigator.appVersion;
            mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1; 
            mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
            mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
            mfp.isAndroid = (/android/gi).test(appVersion);
            mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
            mfp.supportsTransition = supportsTransitions();
    
            // We disable fixed positioned lightbox on devices that don't handle it nicely.
            // If you know a better way of detecting this - let me know.
            mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent) );
            _document = $(document);
    
            mfp.popupsCache = {};
        },
    
        /**
         * Opens popup
         * @param  data [description]
         */
        open: function(data) {
    
            var i;
    
            if(data.isObj === false) { 
                // convert jQuery collection to array to avoid conflicts later
                mfp.items = data.items.toArray();
    
                mfp.index = 0;
                var items = data.items,
                    item;
                for(i = 0; i < items.length; i++) {
                    item = items[i];
                    if(item.parsed) {
                        item = item.el[0];
                    }
                    if(item === data.el[0]) {
                        mfp.index = i;
                        break;
                    }
                }
            } else {
                mfp.items = $.isArray(data.items) ? data.items : [data.items];
                mfp.index = data.index || 0;
            }
    
            // if popup is already opened - we just update the content
            if(mfp.isOpen) {
                mfp.updateItemHTML();
                return;
            }
            
            mfp.types = []; 
            _wrapClasses = '';
            if(data.mainEl && data.mainEl.length) {
                mfp.ev = data.mainEl.eq(0);
            } else {
                mfp.ev = _document;
            }
    
            if(data.key) {
                if(!mfp.popupsCache[data.key]) {
                    mfp.popupsCache[data.key] = {};
                }
                mfp.currTemplate = mfp.popupsCache[data.key];
            } else {
                mfp.currTemplate = {};
            }
    
    
    
            mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data ); 
            mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;
    
            if(mfp.st.modal) {
                mfp.st.closeOnContentClick = false;
                mfp.st.closeOnBgClick = false;
                mfp.st.showCloseBtn = false;
                mfp.st.enableEscapeKey = false;
            }
            
    
            // Building markup
            // main containers are created only once
            if(!mfp.bgOverlay) {
    
                // Dark overlay
                mfp.bgOverlay = _getEl('bg').on('click'+EVENT_NS, function() {
                    mfp.close();
                });
    
                mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click'+EVENT_NS, function(e) {
                    if(mfp._checkIfClose(e.target)) {
                        mfp.close();
                    }
                });
    
                mfp.container = _getEl('container', mfp.wrap);
            }
    
            mfp.contentContainer = _getEl('content');
            if(mfp.st.preloader) {
                mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
            }
    
    
            // Initializing modules
            var modules = $.magnificPopup.modules;
            for(i = 0; i < modules.length; i++) {
                var n = modules[i];
                n = n.charAt(0).toUpperCase() + n.slice(1);
                mfp['init'+n].call(mfp);
            }
            _mfpTrigger('BeforeOpen');
    
    
            if(mfp.st.showCloseBtn) {
                // Close button
                if(!mfp.st.closeBtnInside) {
                    mfp.wrap.append( _getCloseBtn() );
                } else {
                    _mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
                        values.close_replaceWith = _getCloseBtn(item.type);
                    });
                    _wrapClasses += ' mfp-close-btn-in';
                }
            }
    
            if(mfp.st.alignTop) {
                _wrapClasses += ' mfp-align-top';
            }
    
        
    
            if(mfp.fixedContentPos) {
                mfp.wrap.css({
                    overflow: mfp.st.overflowY,
                    overflowX: 'hidden',
                    overflowY: mfp.st.overflowY
                });
            } else {
                mfp.wrap.css({ 
                    top: _window.scrollTop() - parseInt($('html').css('margin-top')),
                    position: 'absolute'
                });
            }
            if( mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos) ) {
                mfp.bgOverlay.css({
                    height: _document.height(),
                    position: 'absolute'
                });
            }
    
            
    
            if(mfp.st.enableEscapeKey) {
                // Close on ESC key
                _document.on('keyup' + EVENT_NS, function(e) {
                    if(e.keyCode === 27) {
                        mfp.close();
                    }
                });
            }
    
            _window.on('resize' + EVENT_NS, function() {
                mfp.updateSize();
            });
    
    
            if(!mfp.st.closeOnContentClick) {
                _wrapClasses += ' mfp-auto-cursor';
            }
            
            if(_wrapClasses)
                mfp.wrap.addClass(_wrapClasses);
    
    
            // this triggers recalculation of layout, so we get it once to not to trigger twice
            var windowHeight = mfp.wH = _window.height();
    
            
            var windowStyles = {};
    
            if( mfp.fixedContentPos ) {
                if(mfp._hasScrollBar(windowHeight)){
                    var s = mfp._getScrollbarSize();
                    if(s) {
                        windowStyles.marginRight = s;
                    }
                }
            }
    
            if(mfp.fixedContentPos) {
                if(!mfp.isIE7) {
                    windowStyles.overflow = 'hidden';
                } else {
                    // ie7 double-scroll bug
                    $('body, html').css('overflow', 'hidden');
                }
            }
    
            
            
            var classesToadd = mfp.st.mainClass;
            if(mfp.isIE7) {
                classesToadd += ' mfp-ie7';
            }
            if(classesToadd) {
                mfp._addClassToMFP( classesToadd );
            }
    
            // add content
            mfp.updateItemHTML();
    
            _mfpTrigger('BuildControls');
    
            // remove scrollbar, add margin e.t.c
            $('html').css(windowStyles);
            
            // add everything to DOM
            mfp.bgOverlay.add(mfp.wrap).prependTo( mfp.st.prependTo || $(document.body) );
    
            // Save last focused element
            mfp._lastFocusedEl = document.activeElement;
            
            // Wait for next cycle to allow CSS transition
            setTimeout(function() {
                
                if(mfp.content) {
                    mfp._addClassToMFP(READY_CLASS);
                    mfp._setFocus();
                } else {
                    // if content is not defined (not loaded e.t.c) we add class only for BG
                    mfp.bgOverlay.addClass(READY_CLASS);
                }
                
                // Trap the focus in popup
                _document.on('focusin' + EVENT_NS, mfp._onFocusIn);
    
            }, 16);
    
            mfp.isOpen = true;
            mfp.updateSize(windowHeight);
            _mfpTrigger(OPEN_EVENT);
    
            return data;
        },
    
        /**
         * Closes the popup
         */
        close: function() {
            if(!mfp.isOpen) return;
            _mfpTrigger(BEFORE_CLOSE_EVENT);
    
            mfp.isOpen = false;
            // for CSS3 animation
            if(mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition )  {
                mfp._addClassToMFP(REMOVING_CLASS);
                setTimeout(function() {
                    mfp._close();
                }, mfp.st.removalDelay);
            } else {
                mfp._close();
            }
        },
    
        /**
         * Helper for close() function
         */
        _close: function() {
            _mfpTrigger(CLOSE_EVENT);
    
            var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';
    
            mfp.bgOverlay.detach();
            mfp.wrap.detach();
            mfp.container.empty();
    
            if(mfp.st.mainClass) {
                classesToRemove += mfp.st.mainClass + ' ';
            }
    
            mfp._removeClassFromMFP(classesToRemove);
    
            if(mfp.fixedContentPos) {
                var windowStyles = {marginRight: ''};
                if(mfp.isIE7) {
                    $('body, html').css('overflow', '');
                } else {
                    windowStyles.overflow = '';
                }
                $('html').css(windowStyles);
            }
            
            _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
            mfp.ev.off(EVENT_NS);
    
            // clean up DOM elements that aren't removed
            mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
            mfp.bgOverlay.attr('class', 'mfp-bg');
            mfp.container.attr('class', 'mfp-container');
    
            // remove close button from target element
            if(mfp.st.showCloseBtn &&
            (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
                if(mfp.currTemplate.closeBtn)
                    mfp.currTemplate.closeBtn.detach();
            }
    
    
            if(mfp._lastFocusedEl) {
                //$(mfp._lastFocusedEl).focus(); // put tab focus back
            }
            mfp.currItem = null;	
            mfp.content = null;
            mfp.currTemplate = null;
            mfp.prevHeight = 0;
    
            _mfpTrigger(AFTER_CLOSE_EVENT);
        },
        
        updateSize: function(winHeight) {
    
            if(mfp.isIOS) {
                // fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
                var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
                var height = window.innerHeight * zoomLevel;
                mfp.wrap.css('height', height);
                mfp.wH = height;
            } else {
                mfp.wH = winHeight || _window.height();
            }
            // Fixes #84: popup incorrectly positioned with position:relative on body
            if(!mfp.fixedContentPos) {
                mfp.wrap.css('height', mfp.wH);
            }
    
            _mfpTrigger('Resize');
    
        },
    
        /**
         * Set content of popup based on current index
         */
        updateItemHTML: function() {
            var item = mfp.items[mfp.index];
    
            // Detach and perform modifications
            mfp.contentContainer.detach();
    
            if(mfp.content)
                mfp.content.detach();
    
            if(!item.parsed) {
                item = mfp.parseEl( mfp.index );
            }
    
            var type = item.type;	
    
            _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
            // BeforeChange event works like so:
            // _mfpOn('BeforeChange', function(e, prevType, newType) { });
            
            mfp.currItem = item;
    
            
    
            
    
            if(!mfp.currTemplate[type]) {
                var markup = mfp.st[type] ? mfp.st[type].markup : false;
    
                // allows to modify markup
                _mfpTrigger('FirstMarkupParse', markup);
    
                if(markup) {
                    mfp.currTemplate[type] = $(markup);
                } else {
                    // if there is no markup found we just define that template is parsed
                    mfp.currTemplate[type] = true;
                }
            }
    
            if(_prevContentType && _prevContentType !== item.type) {
                mfp.container.removeClass('mfp-'+_prevContentType+'-holder');
            }
            
            var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
            mfp.appendContent(newContent, type);
    
            item.preloaded = true;
    
            _mfpTrigger(CHANGE_EVENT, item);
            _prevContentType = item.type;
            
            // Append container back after its content changed
            mfp.container.prepend(mfp.contentContainer);
    
            _mfpTrigger('AfterChange');
        },
    
    
        /**
         * Set HTML content of popup
         */
        appendContent: function(newContent, type) {
            mfp.content = newContent;
            
            if(newContent) {
                if(mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
                    mfp.currTemplate[type] === true) {
                    // if there is no markup, we just append close button element inside
                    if(!mfp.content.find('.mfp-close').length) {
                        mfp.content.append(_getCloseBtn());
                    }
                } else {
                    mfp.content = newContent;
                }
            } else {
                mfp.content = '';
            }
    
            _mfpTrigger(BEFORE_APPEND_EVENT);
            mfp.container.addClass('mfp-'+type+'-holder');
    
            mfp.contentContainer.append(mfp.content);
        },
    
    
    
        
        /**
         * Creates Magnific Popup data object based on given data
         * @param  {int} index Index of item to parse
         */
        parseEl: function(index) {
            var item = mfp.items[index],
                type;
    
            if(item.tagName) {
                item = { el: $(item) };
            } else {
                type = item.type;
                item = { data: item, src: item.src };
            }
    
            if(item.el) {
                var types = mfp.types;
    
                // check for 'mfp-TYPE' class
                for(var i = 0; i < types.length; i++) {
                    if( item.el.hasClass('mfp-'+types[i]) ) {
                        type = types[i];
                        break;
                    }
                }
    
                item.src = item.el.attr('data-mfp-src');
                if(!item.src) {
                    item.src = item.el.attr('href');
                }
            }
    
            item.type = type || mfp.st.type || 'inline';
            item.index = index;
            item.parsed = true;
            mfp.items[index] = item;
            _mfpTrigger('ElementParse', item);
    
            return mfp.items[index];
        },
    
    
        /**
         * Initializes single popup or a group of popups
         */
        addGroup: function(el, options) {
            var eHandler = function(e) {
                e.mfpEl = this;
                mfp._openClick(e, el, options);
            };
    
            if(!options) {
                options = {};
            } 
    
            var eName = 'click.magnificPopup';
            options.mainEl = el;
            
            if(options.items) {
                options.isObj = true;
                el.off(eName).on(eName, eHandler);
            } else {
                options.isObj = false;
                if(options.delegate) {
                    el.off(eName).on(eName, options.delegate , eHandler);
                } else {
                    options.items = el;
                    el.off(eName).on(eName, eHandler);
                }
            }
        },
        _openClick: function(e, el, options) {
            var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
    
    
            if(!midClick && ( e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ) ) {
                return;
            }
    
            var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
    
            if(disableOn) {
                if($.isFunction(disableOn)) {
                    if( !disableOn.call(mfp) ) {
                        return true;
                    }
                } else { // else it's number
                    if( _window.width() < disableOn ) {
                        return true;
                    }
                }
            }
            
            if(e.type) {
                e.preventDefault();
    
                // This will prevent popup from closing if element is inside and popup is already opened
                if(mfp.isOpen) {
                    e.stopPropagation();
                }
            }
                
    
            options.el = $(e.mfpEl);
            if(options.delegate) {
                options.items = el.find(options.delegate);
            }
            mfp.open(options);
        },
    
    
        /**
         * Updates text on preloader
         */
        updateStatus: function(status, text) {
    
            if(mfp.preloader) {
                if(_prevStatus !== status) {
                    mfp.container.removeClass('mfp-s-'+_prevStatus);
                }
    
                if(!text && status === 'loading') {
                    text = mfp.st.tLoading;
                }
    
                var data = {
                    status: status,
                    text: text
                };
                // allows to modify status
                _mfpTrigger('UpdateStatus', data);
    
                status = data.status;
                text = data.text;
    
                mfp.preloader.html(text);
    
                mfp.preloader.find('a').on('click', function(e) {
                    e.stopImmediatePropagation();
                });
    
                mfp.container.addClass('mfp-s-'+status);
                _prevStatus = status;
            }
        },
    
    
        /*
            "Private" helpers that aren't private at all
         */
        // Check to close popup or not
        // "target" is an element that was clicked
        _checkIfClose: function(target) {
    
            if($(target).hasClass(PREVENT_CLOSE_CLASS)) {
                return;
            }
    
            var closeOnContent = mfp.st.closeOnContentClick;
            var closeOnBg = mfp.st.closeOnBgClick;
    
            if(closeOnContent && closeOnBg) {
                return true;
            } else {
    
                // We close the popup if click is on close button or on preloader. Or if there is no content.
                if(!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0]) ) {
                    return true;
                }
    
                // if click is outside the content
                if(  (target !== mfp.content[0] && !$.contains(mfp.content[0], target))  ) {
                    if(closeOnBg) {
                        // last check, if the clicked element is in DOM, (in case it's removed onclick)
                        if( $.contains(document, target) ) {
                            return true;
                        }
                    }
                } else if(closeOnContent) {
                    return true;
                }
    
            }
            return false;
        },
        _addClassToMFP: function(cName) {
            mfp.bgOverlay.addClass(cName);
            mfp.wrap.addClass(cName);
        },
        _removeClassFromMFP: function(cName) {
            this.bgOverlay.removeClass(cName);
            mfp.wrap.removeClass(cName);
        },
        _hasScrollBar: function(winHeight) {
            return (  (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()) );
        },
        _setFocus: function() {
            (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
        },
        _onFocusIn: function(e) {
            if( e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target) ) {
                mfp._setFocus();
                return false;
            }
        },
        _parseMarkup: function(template, values, item) {
            var arr;
            if(item.data) {
                values = $.extend(item.data, values);
            }
            _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item] );
    
            $.each(values, function(key, value) {
                if(value === undefined || value === false) {
                    return true;
                }
                arr = key.split('_');
                if(arr.length > 1) {
                    var el = template.find(EVENT_NS + '-'+arr[0]);
    
                    if(el.length > 0) {
                        var attr = arr[1];
                        if(attr === 'replaceWith') {
                            if(el[0] !== value[0]) {
                                el.replaceWith(value);
                            }
                        } else if(attr === 'img') {
                            if(el.is('img')) {
                                el.attr('src', value);
                            } else {
                                el.replaceWith( '<img src="'+value+'" class="' + el.attr('class') + '" />' );
                            }
                        } else {
                            el.attr(arr[1], value);
                        }
                    }
    
                } else {
                    template.find(EVENT_NS + '-'+key).html(value);
                }
            });
        },
    
        _getScrollbarSize: function() {
            // thx David
            if(mfp.scrollbarSize === undefined) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
                document.body.appendChild(scrollDiv);
                mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
            }
            return mfp.scrollbarSize;
        }
    
    }; /* MagnificPopup core prototype end */
    
    
    
    
    /**
     * Public static functions
     */
    $.magnificPopup = {
        instance: null,
        proto: MagnificPopup.prototype,
        modules: [],
    
        open: function(options, index) {
            _checkInstance();	
    
            if(!options) {
                options = {};
            } else {
                options = $.extend(true, {}, options);
            }
                
    
            options.isObj = true;
            options.index = index || 0;
            return this.instance.open(options);
        },
    
        close: function() {
            return $.magnificPopup.instance && $.magnificPopup.instance.close();
        },
    
        registerModule: function(name, module) {
            if(module.options) {
                $.magnificPopup.defaults[name] = module.options;
            }
            $.extend(this.proto, module.proto);			
            this.modules.push(name);
        },
    
        defaults: {   
    
            // Info about options is in docs:
            // http://dimsemenov.com/plugins/magnific-popup/documentation.html#options
            
            disableOn: 0,	
    
            key: null,
    
            midClick: false,
    
            mainClass: '',
    
            preloader: true,
    
            focus: '', // CSS selector of input to focus after popup is opened
            
            closeOnContentClick: false,
    
            closeOnBgClick: true,
    
            closeBtnInside: true, 
    
            showCloseBtn: true,
    
            enableEscapeKey: true,
    
            modal: false,
    
            alignTop: false,
        
            removalDelay: 0,
    
            prependTo: null,
            
            fixedContentPos: 'auto', 
        
            fixedBgPos: 'auto',
    
            overflowY: 'auto',
    
            closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
    
            tClose: 'Close (Esc)',
    
            tLoading: 'Loading...'
    
        }
    };
    
    
    
    $.fn.magnificPopup = function(options) {
        _checkInstance();
    
        var jqEl = $(this);
    
        // We call some API method of first param is a string
        if (typeof options === "string" ) {
    
            if(options === 'open') {
                var items,
                    itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
                    index = parseInt(arguments[1], 10) || 0;
    
                if(itemOpts.items) {
                    items = itemOpts.items[index];
                } else {
                    items = jqEl;
                    if(itemOpts.delegate) {
                        items = items.find(itemOpts.delegate);
                    }
                    items = items.eq( index );
                }
                mfp._openClick({mfpEl:items}, jqEl, itemOpts);
            } else {
                if(mfp.isOpen)
                    mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
            }
    
        } else {
            // clone options obj
            options = $.extend(true, {}, options);
            
            /*
             * As Zepto doesn't support .data() method for objects 
             * and it works only in normal browsers
             * we assign "options" object directly to the DOM element. FTW!
             */
            if(_isJQ) {
                jqEl.data('magnificPopup', options);
            } else {
                jqEl[0].magnificPopup = options;
            }
    
            mfp.addGroup(jqEl, options);
    
        }
        return jqEl;
    };
    
    
    //Quick benchmark
    /*
    var start = performance.now(),
        i,
        rounds = 1000;
    
    for(i = 0; i < rounds; i++) {
    
    }
    console.log('Test #1:', performance.now() - start);
    
    start = performance.now();
    for(i = 0; i < rounds; i++) {
    
    }
    console.log('Test #2:', performance.now() - start);
    */
    
    
    /*>>core*/
    
    /*>>inline*/
    
    var INLINE_NS = 'inline',
        _hiddenClass,
        _inlinePlaceholder, 
        _lastInlineElement,
        _putInlineElementsBack = function() {
            if(_lastInlineElement) {
                _inlinePlaceholder.after( _lastInlineElement.addClass(_hiddenClass) ).detach();
                _lastInlineElement = null;
            }
        };
    
    $.magnificPopup.registerModule(INLINE_NS, {
        options: {
            hiddenClass: 'hide', // will be appended with `mfp-` prefix
            markup: '',
            tNotFound: 'Content not found'
        },
        proto: {
    
            initInline: function() {
                mfp.types.push(INLINE_NS);
    
                _mfpOn(CLOSE_EVENT+'.'+INLINE_NS, function() {
                    _putInlineElementsBack();
                });
            },
    
            getInline: function(item, template) {
    
                _putInlineElementsBack();
    
                if(item.src) {
                    var inlineSt = mfp.st.inline,
                        el = $(item.src);
    
                    if(el.length) {
    
                        // If target element has parent - we replace it with placeholder and put it back after popup is closed
                        var parent = el[0].parentNode;
                        if(parent && parent.tagName) {
                            if(!_inlinePlaceholder) {
                                _hiddenClass = inlineSt.hiddenClass;
                                _inlinePlaceholder = _getEl(_hiddenClass);
                                _hiddenClass = 'mfp-'+_hiddenClass;
                            }
                            // replace target inline element with placeholder
                            _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
                        }
    
                        mfp.updateStatus('ready');
                    } else {
                        mfp.updateStatus('error', inlineSt.tNotFound);
                        el = $('<div>');
                    }
    
                    item.inlineElement = el;
                    return el;
                }
    
                mfp.updateStatus('ready');
                mfp._parseMarkup(template, {}, item);
                return template;
            }
        }
    });
    
    /*>>inline*/
    
    /*>>ajax*/
    var AJAX_NS = 'ajax',
        _ajaxCur,
        _removeAjaxCursor = function() {
            if(_ajaxCur) {
                $(document.body).removeClass(_ajaxCur);
            }
        },
        _destroyAjaxRequest = function() {
            _removeAjaxCursor();
            if(mfp.req) {
                mfp.req.abort();
            }
        };
    
    $.magnificPopup.registerModule(AJAX_NS, {
    
        options: {
            settings: null,
            cursor: 'mfp-ajax-cur',
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
    
        proto: {
            initAjax: function() {
                mfp.types.push(AJAX_NS);
                _ajaxCur = mfp.st.ajax.cursor;
    
                _mfpOn(CLOSE_EVENT+'.'+AJAX_NS, _destroyAjaxRequest);
                _mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
            },
            getAjax: function(item) {
    
                if(_ajaxCur) {
                    $(document.body).addClass(_ajaxCur);
                }
    
                mfp.updateStatus('loading');
    
                var opts = $.extend({
                    url: item.src,
                    success: function(data, textStatus, jqXHR) {
                        var temp = {
                            data:data,
                            xhr:jqXHR
                        };
    
                        _mfpTrigger('ParseAjax', temp);
    
                        mfp.appendContent( $(temp.data), AJAX_NS );
    
                        item.finished = true;
    
                        _removeAjaxCursor();
    
                        mfp._setFocus();
    
                        setTimeout(function() {
                            mfp.wrap.addClass(READY_CLASS);
                        }, 16);
    
                        mfp.updateStatus('ready');
    
                        _mfpTrigger('AjaxContentAdded');
                    },
                    error: function() {
                        _removeAjaxCursor();
                        item.finished = item.loadError = true;
                        mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
                    }
                }, mfp.st.ajax.settings);
    
                mfp.req = $.ajax(opts);
    
                return '';
            }
        }
    });
    
    
    
    
    
        
    
    /*>>ajax*/
    
    /*>>image*/
    var _imgInterval,
        _getTitle = function(item) {
            if(item.data && item.data.title !== undefined) 
                return item.data.title;
    
            var src = mfp.st.image.titleSrc;
    
            if(src) {
                if($.isFunction(src)) {
                    return src.call(mfp, item);
                } else if(item.el) {
                    return item.el.attr(src) || '';
                }
            }
            return '';
        };
    
    $.magnificPopup.registerModule('image', {
    
        options: {
            markup: '<div class="mfp-figure">'+
                        '<div class="mfp-close"></div>'+
                        '<figure>'+
                            '<div class="mfp-img"></div>'+
                            '<figcaption>'+
                                '<div class="mfp-bottom-bar">'+
                                    '<div class="mfp-title"></div>'+
                                    '<div class="mfp-counter"></div>'+
                                '</div>'+
                            '</figcaption>'+
                        '</figure>'+
                    '</div>',
            cursor: 'mfp-zoom-out-cur',
            titleSrc: 'title', 
            verticalFit: true,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
    
        proto: {
            initImage: function() {
                var imgSt = mfp.st.image,
                    ns = '.image';
    
                mfp.types.push('image');
    
                _mfpOn(OPEN_EVENT+ns, function() {
                    if(mfp.currItem.type === 'image' && imgSt.cursor) {
                        $(document.body).addClass(imgSt.cursor);
                    }
                });
    
                _mfpOn(CLOSE_EVENT+ns, function() {
                    if(imgSt.cursor) {
                        $(document.body).removeClass(imgSt.cursor);
                    }
                    _window.off('resize' + EVENT_NS);
                });
    
                _mfpOn('Resize'+ns, mfp.resizeImage);
                if(mfp.isLowIE) {
                    _mfpOn('AfterChange', mfp.resizeImage);
                }
            },
            resizeImage: function() {
                var item = mfp.currItem;
                if(!item || !item.img) return;
    
                if(mfp.st.image.verticalFit) {
                    var decr = 0;
                    // fix box-sizing in ie7/8
                    if(mfp.isLowIE) {
                        decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'),10);
                    }
                    item.img.css('max-height', mfp.wH-decr);
                }
            },
            _onImageHasSize: function(item) {
                if(item.img) {
                    
                    item.hasSize = true;
    
                    if(_imgInterval) {
                        clearInterval(_imgInterval);
                    }
                    
                    item.isCheckingImgSize = false;
    
                    _mfpTrigger('ImageHasSize', item);
    
                    if(item.imgHidden) {
                        if(mfp.content)
                            mfp.content.removeClass('mfp-loading');
                        
                        item.imgHidden = false;
                    }
    
                }
            },
    
            /**
             * Function that loops until the image has size to display elements that rely on it asap
             */
            findImageSize: function(item) {
    
                var counter = 0,
                    img = item.img[0],
                    mfpSetInterval = function(delay) {
    
                        if(_imgInterval) {
                            clearInterval(_imgInterval);
                        }
                        // decelerating interval that checks for size of an image
                        _imgInterval = setInterval(function() {
                            if(img.naturalWidth > 0) {
                                mfp._onImageHasSize(item);
                                return;
                            }
    
                            if(counter > 200) {
                                clearInterval(_imgInterval);
                            }
    
                            counter++;
                            if(counter === 3) {
                                mfpSetInterval(10);
                            } else if(counter === 40) {
                                mfpSetInterval(50);
                            } else if(counter === 100) {
                                mfpSetInterval(500);
                            }
                        }, delay);
                    };
    
                mfpSetInterval(1);
            },
    
            getImage: function(item, template) {
    
                var guard = 0,
    
                    // image load complete handler
                    onLoadComplete = function() {
                        if(item) {
                            if (item.img[0].complete) {
                                item.img.off('.mfploader');
                                
                                if(item === mfp.currItem){
                                    mfp._onImageHasSize(item);
    
                                    mfp.updateStatus('ready');
                                }
    
                                item.hasSize = true;
                                item.loaded = true;
    
                                _mfpTrigger('ImageLoadComplete');
                                
                            }
                            else {
                                // if image complete check fails 200 times (20 sec), we assume that there was an error.
                                guard++;
                                if(guard < 200) {
                                    setTimeout(onLoadComplete,100);
                                } else {
                                    onLoadError();
                                }
                            }
                        }
                    },
    
                    // image error handler
                    onLoadError = function() {
                        if(item) {
                            item.img.off('.mfploader');
                            if(item === mfp.currItem){
                                mfp._onImageHasSize(item);
                                mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
                            }
    
                            item.hasSize = true;
                            item.loaded = true;
                            item.loadError = true;
                        }
                    },
                    imgSt = mfp.st.image;
    
    
                var el = template.find('.mfp-img');
                if(el.length) {
                    var img = document.createElement('img');
                    img.className = 'mfp-img';
                    if(item.el && item.el.find('img').length) {
                        img.alt = item.el.find('img').attr('alt');
                    }
                    item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
                    img.src = item.src;
    
                    // without clone() "error" event is not firing when IMG is replaced by new IMG
                    // TODO: find a way to avoid such cloning
                    if(el.is('img')) {
                        item.img = item.img.clone();
                    }
    
                    img = item.img[0];
                    if(img.naturalWidth > 0) {
                        item.hasSize = true;
                    } else if(!img.width) {										
                        item.hasSize = false;
                    }
                }
    
                mfp._parseMarkup(template, {
                    title: _getTitle(item),
                    img_replaceWith: item.img
                }, item);
    
                mfp.resizeImage();
    
                if(item.hasSize) {
                    if(_imgInterval) clearInterval(_imgInterval);
    
                    if(item.loadError) {
                        template.addClass('mfp-loading');
                        mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src) );
                    } else {
                        template.removeClass('mfp-loading');
                        mfp.updateStatus('ready');
                    }
                    return template;
                }
    
                mfp.updateStatus('loading');
                item.loading = true;
    
                if(!item.hasSize) {
                    item.imgHidden = true;
                    template.addClass('mfp-loading');
                    mfp.findImageSize(item);
                } 
    
                return template;
            }
        }
    });
    
    
    
    /*>>image*/
    
    /*>>zoom*/
    var hasMozTransform,
        getHasMozTransform = function() {
            if(hasMozTransform === undefined) {
                hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
            }
            return hasMozTransform;		
        };
    
    $.magnificPopup.registerModule('zoom', {
    
        options: {
            enabled: false,
            easing: 'ease-in-out',
            duration: 300,
            opener: function(element) {
                return element.is('img') ? element : element.find('img');
            }
        },
    
        proto: {
    
            initZoom: function() {
                var zoomSt = mfp.st.zoom,
                    ns = '.zoom',
                    image;
                    
                if(!zoomSt.enabled || !mfp.supportsTransition) {
                    return;
                }
    
                var duration = zoomSt.duration,
                    getElToAnimate = function(image) {
                        var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
                            transition = 'all '+(zoomSt.duration/1000)+'s ' + zoomSt.easing,
                            cssObj = {
                                position: 'fixed',
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                '-webkit-backface-visibility': 'hidden'
                            },
                            t = 'transition';
    
                        cssObj['-webkit-'+t] = cssObj['-moz-'+t] = cssObj['-o-'+t] = cssObj[t] = transition;
    
                        newImg.css(cssObj);
                        return newImg;
                    },
                    showMainContent = function() {
                        mfp.content.css('visibility', 'visible');
                    },
                    openTimeout,
                    animatedImg;
    
                _mfpOn('BuildControls'+ns, function() {
                    if(mfp._allowZoom()) {
    
                        clearTimeout(openTimeout);
                        mfp.content.css('visibility', 'hidden');
    
                        // Basically, all code below does is clones existing image, puts in on top of the current one and animated it
                        
                        image = mfp._getItemToZoom();
    
                        if(!image) {
                            showMainContent();
                            return;
                        }
    
                        animatedImg = getElToAnimate(image); 
                        
                        animatedImg.css( mfp._getOffset() );
    
                        mfp.wrap.append(animatedImg);
    
                        openTimeout = setTimeout(function() {
                            animatedImg.css( mfp._getOffset( true ) );
                            openTimeout = setTimeout(function() {
    
                                showMainContent();
    
                                setTimeout(function() {
                                    animatedImg.remove();
                                    image = animatedImg = null;
                                    _mfpTrigger('ZoomAnimationEnded');
                                }, 16); // avoid blink when switching images 
    
                            }, duration); // this timeout equals animation duration
    
                        }, 16); // by adding this timeout we avoid short glitch at the beginning of animation
    
    
                        // Lots of timeouts...
                    }
                });
                _mfpOn(BEFORE_CLOSE_EVENT+ns, function() {
                    if(mfp._allowZoom()) {
    
                        clearTimeout(openTimeout);
    
                        mfp.st.removalDelay = duration;
    
                        if(!image) {
                            image = mfp._getItemToZoom();
                            if(!image) {
                                return;
                            }
                            animatedImg = getElToAnimate(image);
                        }
                        
                        
                        animatedImg.css( mfp._getOffset(true) );
                        mfp.wrap.append(animatedImg);
                        mfp.content.css('visibility', 'hidden');
                        
                        setTimeout(function() {
                            animatedImg.css( mfp._getOffset() );
                        }, 16);
                    }
    
                });
    
                _mfpOn(CLOSE_EVENT+ns, function() {
                    if(mfp._allowZoom()) {
                        showMainContent();
                        if(animatedImg) {
                            animatedImg.remove();
                        }
                        image = null;
                    }	
                });
            },
    
            _allowZoom: function() {
                return mfp.currItem.type === 'image';
            },
    
            _getItemToZoom: function() {
                if(mfp.currItem.hasSize) {
                    return mfp.currItem.img;
                } else {
                    return false;
                }
            },
    
            // Get element postion relative to viewport
            _getOffset: function(isLarge) {
                var el;
                if(isLarge) {
                    el = mfp.currItem.img;
                } else {
                    el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
                }
    
                var offset = el.offset();
                var paddingTop = parseInt(el.css('padding-top'),10);
                var paddingBottom = parseInt(el.css('padding-bottom'),10);
                offset.top -= ( $(window).scrollTop() - paddingTop );
    
    
                /*
                
                Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.
    
                 */
                var obj = {
                    width: el.width(),
                    // fix Zepto height+padding issue
                    height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
                };
    
                // I hate to do this, but there is no another option
                if( getHasMozTransform() ) {
                    obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
                } else {
                    obj.left = offset.left;
                    obj.top = offset.top;
                }
                return obj;
            }
    
        }
    });
    
    
    
    /*>>zoom*/
    
    /*>>iframe*/
    
    var IFRAME_NS = 'iframe',
        _emptyPage = '//about:blank',
        
        _fixIframeBugs = function(isShowing) {
            if(mfp.currTemplate[IFRAME_NS]) {
                var el = mfp.currTemplate[IFRAME_NS].find('iframe');
                if(el.length) { 
                    // reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
                    if(!isShowing) {
                        el[0].src = _emptyPage;
                    }
    
                    // IE8 black screen bug fix
                    if(mfp.isIE8) {
                        el.css('display', isShowing ? 'block' : 'none');
                    }
                }
            }
        };
    
    $.magnificPopup.registerModule(IFRAME_NS, {
    
        options: {
            markup: '<div class="mfp-iframe-scaler">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+
                    '</div>',
    
            srcAction: 'iframe_src',
    
            // we don't care and support only one default type of URL by default
            patterns: {
                youtube: {
                    index: 'youtube.com', 
                    id: 'v=', 
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                },
          /*nectar addition*/
          youtube_compressed_url: {
                    index: 'youtu.be/', 
                    id: '/', 
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                },
          /*nectar addition end*/
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }
            }
        },
    
        proto: {
            initIframe: function() {
                mfp.types.push(IFRAME_NS);
    
                _mfpOn('BeforeChange', function(e, prevType, newType) {
                    if(prevType !== newType) {
                        if(prevType === IFRAME_NS) {
                            _fixIframeBugs(); // iframe if removed
                        } else if(newType === IFRAME_NS) {
                            _fixIframeBugs(true); // iframe is showing
                        } 
                    }// else {
                        // iframe source is switched, don't do anything
                    //}
                });
    
                _mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
                    _fixIframeBugs();
                });
            },
    
            getIframe: function(item, template) {
                var embedSrc = item.src;
                var iframeSt = mfp.st.iframe;
                    
                $.each(iframeSt.patterns, function() {
                    if(embedSrc.indexOf( this.index ) > -1) {
                        if(this.id) {
                            if(typeof this.id === 'string') {
                                embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length, embedSrc.length);
                            } else {
                                embedSrc = this.id.call( this, embedSrc );
                            }
                        }
                        embedSrc = this.src.replace('%id%', embedSrc );
                        return false; // break;
                    }
                });
                
                var dataObj = {};
                if(iframeSt.srcAction) {
                    dataObj[iframeSt.srcAction] = embedSrc;
                }
                mfp._parseMarkup(template, dataObj, item);
    
                mfp.updateStatus('ready');
    
                return template;
            }
        }
    });
    
    
    
    /*>>iframe*/
    
    /*>>gallery*/
    /**
     * Get looped index depending on number of slides
     */
    var _getLoopedId = function(index) {
            var numSlides = mfp.items.length;
            if(index > numSlides - 1) {
                return index - numSlides;
            } else  if(index < 0) {
                return numSlides + index;
            }
            return index;
        },
        _replaceCurrTotal = function(text, curr, total) {
            return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
        };
    
    $.magnificPopup.registerModule('gallery', {
    
        options: {
            enabled: false,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0,2],
            navigateByImgClick: true,
            arrows: true,
    
            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '%curr% of %total%'
        },
    
        proto: {
            initGallery: function() {
    
                var gSt = mfp.st.gallery,
                    ns = '.mfp-gallery',
                    supportsFastClick = Boolean($.fn.mfpFastClick);
    
                mfp.direction = true; // true - next, false - prev
                
                if(!gSt || !gSt.enabled ) return false;
    
                _wrapClasses += ' mfp-gallery';
    
                _mfpOn(OPEN_EVENT+ns, function() {
    
                    if(gSt.navigateByImgClick) {
                        mfp.wrap.on('click'+ns, '.mfp-img', function() {
                            if(mfp.items.length > 1) {
                                mfp.next();
                                return false;
                            }
                        });
                    }
    
                    _document.on('keydown'+ns, function(e) {
                        if (e.keyCode === 37) {
                            mfp.prev();
                        } else if (e.keyCode === 39) {
                            mfp.next();
                        }
                    });
                });
    
                _mfpOn('UpdateStatus'+ns, function(e, data) {
                    if(data.text) {
                        data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
                    }
                });
    
                _mfpOn(MARKUP_PARSE_EVENT+ns, function(e, element, values, item) {
                    var l = mfp.items.length;
                    values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
                });
    
                _mfpOn('BuildControls' + ns, function() {
                    if(mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
                        var markup = gSt.arrowMarkup,
                            arrowLeft = mfp.arrowLeft = $( markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left') ).addClass(PREVENT_CLOSE_CLASS),			
                            arrowRight = mfp.arrowRight = $( markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right') ).addClass(PREVENT_CLOSE_CLASS);
    
                        var eName = supportsFastClick ? 'mfpFastClick' : 'click';
                        arrowLeft[eName](function() {
                            mfp.prev();
                        });			
                        arrowRight[eName](function() {
                            mfp.next();
                        });	
    
                        // Polyfill for :before and :after (adds elements with classes mfp-a and mfp-b)
                        if(mfp.isIE7) {
                            _getEl('b', arrowLeft[0], false, true);
                            _getEl('a', arrowLeft[0], false, true);
                            _getEl('b', arrowRight[0], false, true);
                            _getEl('a', arrowRight[0], false, true);
                        }
    
                        mfp.container.append(arrowLeft.add(arrowRight));
                    }
                });
    
                _mfpOn(CHANGE_EVENT+ns, function() {
                    if(mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);
    
                    mfp._preloadTimeout = setTimeout(function() {
                        mfp.preloadNearbyImages();
                        mfp._preloadTimeout = null;
                    }, 16);		
                });
    
    
                _mfpOn(CLOSE_EVENT+ns, function() {
                    _document.off(ns);
                    mfp.wrap.off('click'+ns);
                
                    if(mfp.arrowLeft && supportsFastClick) {
                        mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
                    }
                    mfp.arrowRight = mfp.arrowLeft = null;
                });
    
            }, 
            next: function() {
                mfp.direction = true;
                mfp.index = _getLoopedId(mfp.index + 1);
                mfp.updateItemHTML();
            },
            prev: function() {
                mfp.direction = false;
                mfp.index = _getLoopedId(mfp.index - 1);
                mfp.updateItemHTML();
            },
            goTo: function(newIndex) {
                mfp.direction = (newIndex >= mfp.index);
                mfp.index = newIndex;
                mfp.updateItemHTML();
            },
            preloadNearbyImages: function() {
                var p = mfp.st.gallery.preload,
                    preloadBefore = Math.min(p[0], mfp.items.length),
                    preloadAfter = Math.min(p[1], mfp.items.length),
                    i;
    
                for(i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
                    mfp._preloadItem(mfp.index+i);
                }
                for(i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
                    mfp._preloadItem(mfp.index-i);
                }
            },
            _preloadItem: function(index) {
                index = _getLoopedId(index);
    
                if(mfp.items[index].preloaded) {
                    return;
                }
    
                var item = mfp.items[index];
                if(!item.parsed) {
                    item = mfp.parseEl( index );
                }
    
                _mfpTrigger('LazyLoad', item);
    
                if(item.type === 'image') {
                    item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
                        item.hasSize = true;
                    }).on('error.mfploader', function() {
                        item.hasSize = true;
                        item.loadError = true;
                        _mfpTrigger('LazyLoadError', item);
                    }).attr('src', item.src);
                }
    
    
                item.preloaded = true;
            }
        }
    });
    
    /*
    Touch Support that might be implemented some day
    
    addSwipeGesture: function() {
        var startX,
            moved,
            multipleTouches;
    
            return;
    
        var namespace = '.mfp',
            addEventNames = function(pref, down, move, up, cancel) {
                mfp._tStart = pref + down + namespace;
                mfp._tMove = pref + move + namespace;
                mfp._tEnd = pref + up + namespace;
                mfp._tCancel = pref + cancel + namespace;
            };
    
        if(window.navigator.msPointerEnabled) {
            addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
        } else if('ontouchstart' in window) {
            addEventNames('touch', 'start', 'move', 'end', 'cancel');
        } else {
            return;
        }
        _window.on(mfp._tStart, function(e) {
            var oE = e.originalEvent;
            multipleTouches = moved = false;
            startX = oE.pageX || oE.changedTouches[0].pageX;
        }).on(mfp._tMove, function(e) {
            if(e.originalEvent.touches.length > 1) {
                multipleTouches = e.originalEvent.touches.length;
            } else {
                //e.preventDefault();
                moved = true;
            }
        }).on(mfp._tEnd + ' ' + mfp._tCancel, function(e) {
            if(moved && !multipleTouches) {
                var oE = e.originalEvent,
                    diff = startX - (oE.pageX || oE.changedTouches[0].pageX);
    
                if(diff > 20) {
                    mfp.next();
                } else if(diff < -20) {
                    mfp.prev();
                }
            }
        });
    },
    */
    
    
    /*>>gallery*/
    
    /*>>retina*/
    
    var RETINA_NS = 'retina';
    
    $.magnificPopup.registerModule(RETINA_NS, {
        options: {
            replaceSrc: function(item) {
                return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
            },
            ratio: 1 // Function or number.  Set to 1 to disable.
        },
        proto: {
            initRetina: function() {
                if(window.devicePixelRatio > 1) {
    
                    var st = mfp.st.retina,
                        ratio = st.ratio;
    
                    ratio = !isNaN(ratio) ? ratio : ratio();
    
                    if(ratio > 1) {
                        _mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
                            item.img.css({
                                'max-width': item.img[0].naturalWidth / ratio,
                                'width': '100%'
                            });
                        });
                        _mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
                            item.src = st.replaceSrc(item, ratio);
                        });
                    }
                }
    
            }
        }
    });
    
    /*>>retina*/
    
    /*>>fastclick*/
    /**
     * FastClick event implementation. (removes 300ms delay on touch devices)
     * Based on https://developers.google.com/mobile/articles/fast_buttons
     *
     * You may use it outside the Magnific Popup by calling just:
     *
     * $('.your-el').mfpFastClick(function() {
     *     console.log('Clicked!');
     * });
     *
     * To unbind:
     * $('.your-el').destroyMfpFastClick();
     * 
     * 
     * Note that it's a very basic and simple implementation, it blocks ghost click on the same element where it was bound.
     * If you need something more advanced, use plugin by FT Labs https://github.com/ftlabs/fastclick
     * 
     */
    
    (function() {
        var ghostClickDelay = 1000,
            supportsTouch = 'ontouchstart' in window,
            unbindTouchMove = function() {
                _window.off('touchmove'+ns+' touchend'+ns);
            },
            eName = 'mfpFastClick',
            ns = '.'+eName;
    
    
        // As Zepto.js doesn't have an easy way to add custom events (like jQuery), so we implement it in this way
        $.fn.mfpFastClick = function(callback) {
    
            return $(this).each(function() {
    
                var elem = $(this),
                    lock;
    
                if( supportsTouch ) {
    
                    var timeout,
                        startX,
                        startY,
                        pointerMoved,
                        point,
                        numPointers;
    
                    elem.on('touchstart' + ns, function(e) {
                        pointerMoved = false;
                        numPointers = 1;
    
                        point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
                        startX = point.clientX;
                        startY = point.clientY;
    
                        _window.on('touchmove'+ns, function(e) {
                            point = e.originalEvent ? e.originalEvent.touches : e.touches;
                            numPointers = point.length;
                            point = point[0];
                            if (Math.abs(point.clientX - startX) > 10 ||
                                Math.abs(point.clientY - startY) > 10) {
                                pointerMoved = true;
                                unbindTouchMove();
                            }
                        }).on('touchend'+ns, function(e) {
                            unbindTouchMove();
                            if(pointerMoved || numPointers > 1) {
                                return;
                            }
                            lock = true;
                            e.preventDefault();
                            clearTimeout(timeout);
                            timeout = setTimeout(function() {
                                lock = false;
                            }, ghostClickDelay);
                            callback();
                        });
                    });
    
                }
    
                elem.on('click' + ns, function() {
                    if(!lock) {
                        callback();
                    }
                });
            });
        };
    
        $.fn.destroyMfpFastClick = function() {
            $(this).off('touchstart' + ns + ' click' + ns);
            if(supportsTouch) _window.off('touchmove'+ns+' touchend'+ns);
        };
    })();
    
    /*>>fastclick*/
     _checkInstance(); }));


/**
 * Main Salient script file.
 *
 * @package Salient
 * @author ThemeNectar
 */
 /* global jQuery */
 /* global Waypoint */
 /* global imagesLoaded */
 /* global Flickity */
	
 (function($, window, document) {
	
	"use strict";
	
	// Document ready event.
	jQuery(document).ready(function ($) {
		
		// Initialize Nectar DOM helper.
		nectarDOMInfo.init();
		
		// Priority calls
		nectarBoxRollInit();
		nectarFullPageInit();
		
		// Header navigation.
		initSF();
		navigationSearchInit();
		centeredNavBottomBarInit();
		centeredLogoHeaderInit();
		headerNavPreInit();
		headerNavScrollInit();
		headerNavOffsetInit();
		
		// Page builder elements.
		salientPageBuilderElInit(); 
		
		// Column related.
		columnBGColors();
		vcMobileColumnsInit();
		
		// Row related.
		fullWidthSections();
		fwsClasses();
		fwCarouselLinkFix();
		fullWidthSectionsPreInit();
		firstFWSection();
		parallaxScrollInit();
		parallaxRowsBGCals();
		fullWidthRowPaddingAdjust();
		fullWidthContentColumns();		
		oneFourthClasses();	
		fixIeFlexbox();
		vcFullHeightRowInit();
		
		// Media.
		lightBoxInit();
		audioVideoVis();
		responsiveVideoIframesInit();
		responsiveVideoIframes();
		videoBGInit();
				
		// Off canvas navigation.
		mobileNavMegamenuCorrect();
		materialSkinOCM_Init();
		OCM_dropdownMarkup();
		OCM_dropdownIconPos();
		clickToggleSubmenus();
		OCM_init();
		
		// Page header
		pageHeaderInit();
		
		// Footer.
		footerRevealInit();
		
		// Third party.
		wooCommerceEvents();
		fancySelectStyling();

		// Scrolling
		infiniteScrollInit();
		scrollToTopInit();
		animatedAnchorLinks();
		updatePerspectiveOriginInit();
		sectionDownArrowEvent();

		// Cross browser assist.
		crossBrowserAdjust();
		bfCacheAssist();
		
		// Front end editing.
		wpBakeryFrontendInit();
		
		// Page transitions and waypoint activation.
		pageTransitionInit();
		
		

		// Main Debounced Resize Event.
		$window.off('smartresize.srInit');
		$window.on('smartresize.srInit', smartResizeInit);
		
		// Main Resize Event.
		$window.off('resize.srInit');
		$window.on('resize.srInit', resizeInit);
		
		// Window Load Event.
		$window.on('load', function () {
			
			// Set header space.
			if ( $(window).scrollTop() == 0 ) {
				headerSpace();
			}
	
			$('video').css('visibility', 'visible');
			
			// Scroll to anchor
			pageLoadHashInit();
			
			// Row/Column related.
			fullWidthContentColumns();
			parallaxRowsBGCals();
			
			// Video BG
			resizeVideoToCover();
			
		});	
		
		
	});
	
	
		// Theme vars.
		var $window                 = $(window),
		$body                       = $('body'),
		$offCanvasEl                = $('#slide-out-widget-area'),
		$offCanvasBG                = $('#slide-out-widget-area-bg'),
		$headerOuterEl              = $('#header-outer'),
		$headerSecondaryEl          = $('#header-secondary-outer'),
		$searchButtonEl             = $('#header-outer #search-btn a'),
		$wpAdminBar                 = $('#wpadminbar'),
		$loadingScreenEl            = $('#ajax-loading-screen'),
		$bodyBorderTop              = $('.body-border-top'),
		$pageHeaderBG               = $('#page-header-bg'),
		$bodyBorderWidth            = ($('.body-border-right').length > 0) ? $('.body-border-right').width() : 0,
		$logoHeight                 = ($headerOuterEl.is('[data-logo-height]')) ? parseInt($headerOuterEl.attr('data-logo-height')) : 30,
		headerPadding               = ($headerOuterEl.is('[data-padding]')) ? parseInt($headerOuterEl.attr('data-padding')) : 28,
		logoShrinkNum               = ($headerOuterEl.is('[data-shrink-num]')) ? $headerOuterEl.attr('data-shrink-num') : 6,
		condenseHeaderLayout        = ($headerOuterEl.is('[data-condense="true"]')) ? true : false, 
		usingLogoImage              = ($headerOuterEl.is('[data-using-logo="1"]')) ? true : false,
		headerResize                = ($headerOuterEl.is('[data-header-resize="1"]')) ? true : false,
		headerHideUntilNeeded       = ($body.is('[data-hhun]')) ? $body.attr('data-hhun') : '',
		$animationEasing            = ($body.is('[data-cae]')) ? $body.attr('data-cae') : 'easeOutCubic',
		$animationDuration          = ($body.is('[data-cad]')) ? $body.attr('data-cad') : '650',
		$portfolio_containers       = [],
		$svgIcons                   = [],
		$nectarCustomSliderRotate   = [],
		$flickitySliders            = [],
		$fsProjectSliderArr         = [],
		$wooFlickityCarousels       = [],
		$liquidBG_EL                = [],
		$testimonialSliders         = [],
		$mouseParallaxScenes        = [],
		$nectarMasonryBlogs         = [],
		$standAnimatedColTimeout    = [],
		$animatedSVGIconTimeout     = [],
		$projectCarouselSliderArr   = [],
		$tabbedClickCount           = 0,
		$fullscreenSelector         = '',
		$bodyBorderHeaderColorMatch = false,
		nectarBoxRoll               = {
			animating: 'false',
			perspect: 'not-rolled'
		},
		$nectarFullPage             = {
			$usingFullScreenRows: false
		},
		$svgResizeTimeout,
		$bodyBorderSizeToRemove;
		
		if( $bodyBorderTop.length > 0 ) {
			
			if ( $bodyBorderTop.css('background-color') == '#ffffff' && $body.attr('data-header-color') == 'light' ||
				$bodyBorderTop.css('background-color') == 'rgb(255, 255, 255)' && $body.attr('data-header-color') == 'light' ||
				$bodyBorderTop.css('background-color') == $headerOuterEl.attr('data-user-set-bg')) {
				$bodyBorderHeaderColorMatch = true;
			}
			
		}


		
		/**
		* Nectar DOM info helper.
		*
		* @since 9.0
		*/
		var nectarDOMInfo = {
												
			usingMobileBrowser: (navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)) ? true : false,
			usingFrontEndEditor: (typeof window.vc_iframe === 'undefined') ? false : true,
			getWindowSize: function() {
				nectarDOMInfo.winH                  = window.innerHeight;
				nectarDOMInfo.winW                  = window.innerWidth;
				nectarDOMInfo.adminBarHeight        = ($wpAdminBar.length > 0) ? $wpAdminBar.height() : 0;
				nectarDOMInfo.secondaryHeaderHeight = ($headerSecondaryEl.length > 0 && $headerSecondaryEl.css('display') != 'none') ? $headerSecondaryEl.outerHeight() : 0;
			},
			scrollTop: 0,
			scrollPosMouse: function() {
				return $window.scrollTop();
			},
			scrollPosRAF: function() {
				nectarDOMInfo.scrollTop = $window.scrollTop();
				requestAnimationFrame(nectarDOMInfo.scrollPosRAF);
			},
			bindEvents: function() {
				
				if (!nectarDOMInfo.usingMobileBrowser) {
					$window.on('scroll', function() {
						nectarDOMInfo.scrollTop = nectarDOMInfo.scrollPosMouse();
					});
				} else {
					requestAnimationFrame(nectarDOMInfo.scrollPosRAF);
				}
				
				$window.on('resize', nectarDOMInfo.getWindowSize);
				
			},
			init: function() {
				// Re-cache WP admin bar after DOM ready
				$wpAdminBar = $('#wpadminbar');
				
				// Get values and bind events
				this.getWindowSize();
				this.scrollTop = this.scrollPosMouse();
				this.bindEvents();
			}
			
		};
		
		


		/**
		* Debounced resize event
		*
		* @since 2.0
		*/
		
		function smartResizeInit() {
			fullWidthContentColumns();
			parallaxRowsBGCals();
			headerSpace();
			OCM_overflowState();
			showOnLeftSubMenu();
		}
		
	
		
		/**
		* Main resize event.
		*
		* @since 2.0
		*/
		function resizeInit() {
			fullWidthSections();
			fullWidthContentColumns();
			addOrRemoveSF();
			responsiveVideoIframes();
			
			if (!nectarDOMInfo.usingMobileBrowser) {
				parallaxRowsBGCals();
			}
	
		}
		


		/**
		* Flexslider plugin initialization.
		*
		* @since 5.0
		*/
		function flexsliderInit() {
			$('.flex-gallery').each(function () {
				
				if (!$().flexslider) {
					return;
				}
				
				var $that = $(this);
				
				imagesLoaded($(this), function () {
					
					$that.flexslider({
						animation: 'fade',
						smoothHeight: false,
						animationSpeed: 500,
						useCSS: false,
						touch: true
					});
					
					////gallery slider add arrows
					$('.flex-gallery .flex-direction-nav li a.flex-next').html('<i class="fa fa-angle-right"></i>');
					$('.flex-gallery .flex-direction-nav li a.flex-prev').html('<i class="fa fa-angle-left"></i>');
					
				});
				
			});
		}
		
		
		
		/**
		* Flickity plugin initialization.
		*
		* @since 7.0
		*/
		function flickityInit() {
			
			if ($('.nectar-flickity:not(.masonry)').length == 0) {
				return false;
			}
			
			$flickitySliders = [];
			$('.nectar-flickity:not(.masonry)').each(function (i) {
				
				$(this).removeClass(function (index, className) {
					return (className.match(/(^|\s)instance-\S+/g) || []).join(' ');
				});
				$(this).addClass('instance-' + i);
				
				var $freeScrollBool   = ($(this).is('[data-free-scroll]') && $(this).attr('data-free-scroll') == 'true') ? true : false,
				$groupCellsBool       = true,
				$flickContainBool     = true,
				$flcikAttr            = 0.025,
				$paginationBool       = false,
				$nextPrevArrowBool    = true,
				$flickCellAlign       = 'center';
				
				if ($(this).is('[data-format="fixed_text_content_fullwidth"]')) {
					$flickCellAlign   = 'left';
					$groupCellsBool   = false;
					$flickContainBool = false;
					$flcikAttr        = 0.02;
				}
				
				if ($freeScrollBool == true) {
					$groupCellsBool = false;
				}
				
				if ($(this).attr('data-controls').length > 0 && 
				$(this).attr('data-controls') == 'next_prev_arrows') {
					$paginationBool     = false;
					$nextPrevArrowBool  = true;
				} else {
					$paginationBool     = true;
					$nextPrevArrowBool  = false;
				}
				
				if ($(this).attr('data-controls').length > 0 && 
				$(this).attr('data-controls') == 'none') {
					$paginationBool     = false;
					$nextPrevArrowBool  = false;
				}
				
				var $flickity_autoplay = false;
				
				if ($(this).is('[data-autoplay]') && 
				$(this).attr('data-autoplay') == 'true') {
					
					$flickity_autoplay = true;
					
					if ($(this).is('[data-autoplay-dur]') && 
					$(this).attr('data-autoplay-dur').length > 0) {
						
						if (parseInt($(this).attr('data-autoplay-dur')) > 100 && 
						parseInt($(this).attr('data-autoplay-dur')) < 30000) {
							$flickity_autoplay = parseInt($(this).attr('data-autoplay-dur'));
						}
						
					}
					
				}
				
				var $that 								= $(this);
				var $frontEndEditorDrag 	= ($('body.vc_editor').length > 0) ? false : true;
				var $frontEndEditorPause 	= ($('body.vc_editor').length > 0) ? true : false;
				
				$flickitySliders[i] = new Flickity('.nectar-flickity.instance-' + i, {
					contain: $flickContainBool,
					draggable: $frontEndEditorDrag,
					lazyLoad: false,
					imagesLoaded: true,
					percentPosition: true,
					cellAlign: $flickCellAlign,
					groupCells: $groupCellsBool,
					prevNextButtons: $nextPrevArrowBool,
					freeScroll: $freeScrollBool,
					pageDots: $paginationBool,
					resize: true,
					selectedAttraction: $flcikAttr,
					autoPlay: $flickity_autoplay,
					pauseAutoPlayOnHover: $frontEndEditorPause,
					setGallerySize: true,
					wrapAround: true,
					accessibility: false,
					arrowShape: {
						x0: 20,
						x1: 70,
						y1: 30,
						x2: 70,
						y2: 25,
						x3: 70
					}
				});
				
				
				if ($(this).is('[data-format="fixed_text_content_fullwidth"]') && !nectarDOMInfo.usingFrontEndEditor) {
					
					var $onMobileBrowser = nectarDOMInfo.usingMobileBrowser;
					
					$flickitySliders[i].on('scroll', function () {
						
						if ($onMobileBrowser) {
							return;
						}
						
						var $flkSlideWidth 	= $that.find('.cell').outerWidth() + 25,
						$leftHeaderSize 		= ($('body[data-header-format="left-header"]').length > 0 && $window.width() > 1000) ? 275 : 0,
						$extraWindowSpace 	= (($window.width() + $leftHeaderSize) - $that.parents('.main-content').width()) / 2;
						
						$extraWindowSpace += parseInt($that.css('margin-left')) + 2;
						
						$flickitySliders[i].slides.forEach(function (slide, j) {
							
							var $scaleAmt     = 1,
							$translateXAmt    = 0,
							$rotateAmt        = 0,
							$slideZIndex      = 10,
							$opacityAmt       = 1,
							$slideOffset      = $(slide.cells[0].element).offset().left,
							flkInstanceSlide  = $('.nectar-flickity.instance-' + i + ' .cell:nth-child(' + (j + 1) + ')');
							
							if ($slideOffset - $extraWindowSpace < 0 && 
								$slideOffset - $extraWindowSpace > $flkSlideWidth * -1) {
									
								$scaleAmt       = 1 + (($slideOffset - $extraWindowSpace) / 1500);
								$opacityAmt     = 1 + (($slideOffset - $extraWindowSpace + 70) / 550);
								$translateXAmt  = (($slideOffset - $extraWindowSpace)) * -1;
								$rotateAmt      = (($slideOffset - $extraWindowSpace) / 25) * -1;
								
							} else {
								$scaleAmt       = 1;
								$opacityAmt     = 1;
								$translateXAmt  = 0;
								$rotateAmt      = 0;
							}
							
							if ($slideOffset + 5 - $extraWindowSpace < 0 && 
								$slideOffset - $extraWindowSpace > $flkSlideWidth * -1) {
									
								$slideZIndex = 5;
							} else {
								$slideZIndex = 10;
							}
							
							flkInstanceSlide.css({
								'z-index': $slideZIndex
							});
							
							flkInstanceSlide.find('.inner-wrap-outer').css({
								'transform': 'perspective(800px) translateX(' + $translateXAmt + 'px) rotateY(' + $rotateAmt + 'deg) translateZ(0)',
								'opacity': $opacityAmt
							});
							
							flkInstanceSlide.find('.inner-wrap').css({
								'transform': 'scale(' + $scaleAmt + ') translateZ(0)'
							});
							
						});
						
					});
					
				}
				
				var $removeHiddenTimeout;
				
				$flickitySliders[i].on('dragStart', function () {
					
					clearTimeout($removeHiddenTimeout);
					$that.addClass('is-dragging');
					
					$that
						.find('.flickity-prev-next-button')
						.addClass('hidden');
				});
				
				$flickitySliders[i].on('dragEnd', function () {
					
					$that.removeClass('is-dragging');
					$removeHiddenTimeout = setTimeout(function () {
						$that
							.find('.flickity-prev-next-button')
							.removeClass('hidden');
							
					}, 600);
					
				});
				
				$('.flickity-prev-next-button').on('click', function () {
					
					clearTimeout($removeHiddenTimeout);
					
					$(this).parents('.nectar-flickity')
						.find('.flickity-prev-next-button')
						.addClass('hidden');
					
					$removeHiddenTimeout = setTimeout(function () {
						$that
							.find('.flickity-prev-next-button')
							.removeClass('hidden');
					}, 600);
					
				});
				
				
				// Images loaded.
				if ($that.hasClass('nectar-carousel')) {
					imagesLoaded($that, function () {
						nectarCarouselFlkEH($that);
					});
				}
				
			});
			
			
			// Resize event.
			var $usingNectarCarouselFlk = ($('.nectar-carousel.nectar-flickity:not(.masonry)').length > 0) ? true : false;
			
			if ($usingNectarCarouselFlk) {
				$window.on('resize',setNectarCarouselFlkEH);
			}
			
		}
		
		

		
		/**
		* Flickity equal height helper.
		*
		* @since 7.0
		*/
		function setNectarCarouselFlkEH() {
			$('.nectar-carousel.nectar-flickity:not(.masonry)').each(function () {
				nectarCarouselFlkEH($(this));
			});
		}
		

		
		/**
		* Flickity equal height calculations.
		*
		* @since 7.0
		*/
		function nectarCarouselFlkEH($slider_instance) {
			
			var $tallestSlideCol = 0;
			
			$slider_instance
				.find('.flickity-slider > .cell')
				.css('height', 'auto');
			
			$slider_instance.find('.flickity-slider > .cell').each(function () {
				
				if( $(this).height() > $tallestSlideCol ) {
					$tallestSlideCol = $(this).height();
				}
			
			});
			
			if ($tallestSlideCol < 10) {
				$tallestSlideCol = 'auto';
			}
			
			//set even height
			$slider_instance
				.find('.flickity-slider > .cell')
				.css('height', $tallestSlideCol + 'px');
			
		}
		
		
		
		/**
		* twentytwenty plugin initialization.
		*
		* @since 7.0
		*/
		function twentytwentyInit() {
			$('.twentytwenty-container').each(function () {
				var $that = $(this);
				
				if ($that.find('.twentytwenty-handle').length == 0) {
					$(this).imagesLoaded(function () {
						$that.twentytwenty();
					});
				}
				
			});
		}
		
		

		

		/**
		* Superfish initialization and submenu functionality. 
		*
		* @since 2.0
		*/
		function initSF() {
			
			addOrRemoveSF();
			
			if ($('body[data-header-format="left-header"]').length == 0) {
				
				var $disableHI;
				
				if (!($('#header-outer[data-megamenu-rt="1"]').length > 0 && 
				$('#header-outer[data-transparent-header="true"]').length > 0)) {
					$disableHI = true;
				} else {
					$disableHI = false;
				}
				
				$(".sf-menu:not(.buttons)").superfish({
					delay: 650,
					speed: 'fast',
					disableHI: $disableHI,
					speedOut: 'fast',
					animation: {
						opacity: 'show'
					}
				});
				
				// Pull right/left menu
				$('#header-outer .sf-menu.buttons li.menu-item').on('mouseover',function(){
					$(this).addClass('sfHover');
				});
				$('#header-outer .sf-menu.buttons li.menu-item').on('mouseleave',function(){
					var $that = $(this);
					
					if( $that.is('.menu-item-has-children') ) {
						setTimeout(function () {
							if( !$that.is(':hover') ) {
								$that.removeClass('sfHover');
							}
						}, 200);
					} else {
							$that.removeClass('sfHover');
					}
				});
				
				// Areas that do not use megamenu.
				$('#header-secondary-outer li.megamenu, .sf-menu.buttons li.megamenu').removeClass('megamenu');
				
				$('#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul').each(function () {
					
					if ($(this).offset().left + $(this).outerWidth() > $window.width()) {
						$(this).addClass('on-left-side');
						$(this).find('ul').addClass('on-left-side');
					}
					
				});
				
				// Megamenu multi section per column title support.
				$('body:not([data-header-format="left-header"]) header#top nav > ul > li.megamenu > ul > li > ul > li:has("> ul")').addClass('has-ul');
				
				// Full width megamenu.
				if ($('body[data-megamenu-width="full-width"]').length > 0 && $('ul.sub-menu').length > 0) {
					megamenuFullwidth();
					$window.on('smartresize', megamenuFullwidth);
					$('header#top nav > ul > li.megamenu > .sub-menu').css('box-sizing', 'content-box');
				}
				
				// Extra hover class for megamenu check.
				$('header#top nav > ul.sf-menu > li.menu-item').on('mouseenter', function () {
					$(this).addClass('menu-item-over');
				});
				$('header#top nav > ul.sf-menu > li.menu-item').on('mouseleave', function () {
					$(this).removeClass('menu-item-over');
				});
				
				// Remove arrows on mega menu item.
				$('header#top nav .megamenu .sub-menu a.sf-with-ul .sf-sub-indicator, header#top .megamenu .sub-menu a .sf-sub-indicator').remove();
				
				// Blank title megamenu columns.
				$('header#top nav > ul > li.megamenu > ul.sub-menu > li > a').each(function () {
					if ($(this).text() == 'â€“') {
						$(this).remove();
					}
				});

			}
			

			// Deactivate hide header until needed effect on phone.
			if (nectarDOMInfo.usingMobileBrowser && $('#header-outer[data-remove-fixed="1"]').length == 0) {
				$body.attr('data-hhun', '0');
			}
			
		}
		
		
		
		/**
		* Calculates the "Header Mega Menu Width - Full screen width" theme option.
		*
		* @since 6.0
		*/
		function megamenuFullwidth() {
			
			var $windowWidth = $window.width();
			var $headerContainerWidth = $('header#top > .container').width();
			$('header#top nav > ul > li.megamenu > .sub-menu').css({
				'padding-left': ($windowWidth - $headerContainerWidth) / 2 + 'px',
				'padding-right': ($windowWidth + 2 - $headerContainerWidth) / 2 + 'px',
				'width': $headerContainerWidth,
				'left': '-' + ($windowWidth - $headerContainerWidth) / 2 + 'px'
			});
		}
		
		
		/**
		* Hide main navigation on mobile.
		*
		* @since 2.0
		*/
		function addOrRemoveSF() {
			
			if (nectarDOMInfo.winW < 1000 && $body.attr('data-responsive') == '1') {
				$body.addClass('mobile');
				$('header#top nav').css('display', 'none');
			} else {
				$body.removeClass('mobile');
				$('header#top nav').css('display', '');
				$('.slide-out-widget-area-toggle #toggle-nav .lines-button').removeClass('close');
			}
			
			
		}
		
		
		/**
		* Calculates whether submenu needs to display aligned opposite (from lack of space).
		*
		* @since 2.0
		*/
		function showOnLeftSubMenu() {
			
			// Show on left class for minimal styling.
			$('#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul').each(function () {
				
				$(this).removeClass('on-left-side');
				
				if ($(this).offset().left + $(this).outerWidth() > $window.width()) {
					$(this).addClass('on-left-side');
					$(this).find('ul').addClass('on-left-side');
				} else {
					$(this).removeClass('on-left-side');
					$(this).find('ul').removeClass('on-left-side');
				}
				
			});
		}
		
		

		
		/**
		* Caroufredsel plugin initialization.
		*
		* @since 2.0
		*/
		function standardCarouselInit() {
			
			if ($('.carousel').length == 0) {
				return;
			}
			
			if (typeof SalientRecentProjectsCarousel !== 'undefined') {
				$('ul.carousel.portfolio-items').each(function (i) {
					$projectCarouselSliderArr[i] = new SalientRecentProjectsCarousel($(this));
				});
			}
			
			$('ul.carousel:not(".clients"):not(.portfolio-items)').each(function () {
				
				var $that       = $(this),
				maxCols         = ($(this).parents('.carousel-wrap').attr('data-full-width') == 'true') ? 'auto' : 3,
				scrollNum       = ($(this).parents('.carousel-wrap').attr('data-full-width') == 'true') ? 'auto' : '',
				colWidth        = ($(this).parents('.carousel-wrap').attr('data-full-width') == 'true') ? 500 : 453,
				$autoplayBool   = ($(this).attr('data-autorotate') == 'true') ? true : false,
				$themeSkin      = true,
				$themeSkin2     = true;
				
				var scrollSpeed, easing;
				
				if ($('body.ascend').length > 0 && $(this).parents('.carousel-wrap').attr('data-full-width') != 'true' || 
				$('body.material').length > 0 && $(this).parents('.carousel-wrap').attr('data-full-width') != 'true') {
					
					if ($(this).find('li').length % 3 === 0) {
						$themeSkin  = true;
						$themeSkin2 = true;
					} else {
						$themeSkin  = false;
						$themeSkin2 = true;
					}
					
				} else {
					$themeSkin 	= true;
					$themeSkin2 = true;
				}
				
				scrollSpeed = (parseInt($(this).attr('data-scroll-speed'))) ? parseInt($(this).attr('data-scroll-speed')) : 700;
				easing = ($(this).is('[data-easing]')) ? $(this).attr('data-easing') : 'linear';
				
				var $element = $that;
				if ($that.find('img').length == 0) {
					$element = $body;
				}
				
				imagesLoaded($element, function () {
					
					$that.carouFredSel({
						circular: $themeSkin,
						infinite: $themeSkin2,
						height: 'auto',
						responsive: true,
						items: {
							width: colWidth,
							visible: {
								min: 1,
								max: maxCols
							}
						},
						swipe: {
							onTouch: true,
							onMouse: true,
							options: {
								excludedElements: "button, input, select, textarea, .noSwipe",
								tap: function (event, target) {
									if ($(target).attr('href') && 
									!$(target).is('[target="_blank"]') && 
									!$(target).is('[rel^="prettyPhoto"]') && 
									!$(target).is('.magnific-popup') && 
									!$(target).is('.magnific')) {
										window.open($(target).attr('href'), '_self');
									}
								}
							},
							onBefore: function () {
								// Hover effect.
								$that.find('.work-item').trigger('mouseleave');
								$that.find('.work-item .work-info a').trigger('mouseup');
							}
						},
						scroll: {
							items: scrollNum,
							easing: easing,
							duration: scrollSpeed,
							onBefore: function () {
								
								if ($('body.ascend').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true' || 
								$('body.material').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true') {
									
									$that.parents('.carousel-wrap')
										.find('.item-count .total')
										.html(Math.ceil($that.find('> li').length / $that.triggerHandler("currentVisible").length));
								
								}
							},
							onAfter: function () {
								if ($('body.ascend').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true' || 
								$('body.material').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true') {
									
									$that.parents('.carousel-wrap')
										.find('.item-count .current')
										.html($that.triggerHandler('currentPage') + 1);
										
									$that.parents('.carousel-wrap')
										.find('.item-count .total')
										.html(Math.ceil($that.find('> li').length / $that.triggerHandler("currentVisible").length));
								
								}
							}
							
						},
						prev: {
							button: function () {
								return $that.parents('.carousel-wrap').find('.carousel-prev');
							}
						},
						next: {
							button: function () {
								return $that.parents('.carousel-wrap').find('.carousel-next');
							}
						},
						auto: {
							play: $autoplayBool
						}
					}, {
						transition: true
					}).animate({
						'opacity': 1
					}, 1300);
					
					$that
						.parents('.carousel-wrap')
						.wrap('<div class="carousel-outer">');
					
					if ($that.parents('.carousel-wrap').attr('data-full-width') == 'true') {
						$that
							.parents('.carousel-outer')
							.css('overflow', 'visible');
					}
					
					// Add count for non full width ascend skin.
					if ($('body.ascend').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true' || 
					$('body.material').length > 0 && $that.parents('.carousel-wrap').attr('data-full-width') != 'true') {
						$('<div class="item-count"><span class="current">1</span>/<span class="total">' + ($that.find('> li').length / $that.triggerHandler("currentVisible").length) + '</span></div>').insertAfter($that.parents('.carousel-wrap').find('.carousel-prev'));
					}
					
					$that.addClass('finished-loading');
					
					carouselHeightCalcs();
					
				}); 
				
			}); 
			
			// Resize
			$window.off('smartresize.carouselHeightCalcs');
			$window.on('smartresize.carouselHeightCalcs', carouselHeightCalcs);

		}
		
		
		
		
		
		
		
		/**
		* Full width carousel link event.
		*
		* @since 4.0
		*/
		function fwCarouselLinkFix() {
			
			var $mousePosStart      = 0,
			$mousePosEnd            = 0,
			fwCarouselLinkSelector  = '.carousel-wrap .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a';
			
			$(fwCarouselLinkSelector).on('mousedown', function (e) {
				$mousePosStart = e.clientX;
			});
			
			$(fwCarouselLinkSelector).on('mouseup', function (e) {
				$mousePosEnd = e.clientX;
			});
			
			$(fwCarouselLinkSelector).on('click', function () {
				if (Math.abs($mousePosStart - $mousePosEnd) > 10) {
					return false;
				}
			});
			
		}
		

		
		
		
		/**
		* Owl carousel plugin initialization.
		*
		* @since 6.0
		*/
		function owlCarouselInit() {
			
			if ( $('.owl-carousel').length === 0 ) {
				return;
			}
			
			$('.owl-carousel').each(function () {
				
				$(this).addClass('owl-theme'); 
				
				var $that         = $(this),
				$autoRotateBool   = $that.attr('data-autorotate'),
				$autoRotateSpeed  = $that.attr('data-autorotation-speed'),
				$owlLoopBool      = ($that.is('[data-loop="true"]')) ? true : false;
				
				$(this).owlCarousel({
					responsive: {
						0: {
							items: $(this).attr('data-mobile-cols')
						},
						690: {
							items: $(this).attr('data-tablet-cols')
						},
						1000: {
							items: $(this).attr('data-desktop-small-cols')
						},
						1300: {
							items: $(this).attr('data-desktop-cols')
						}
					},
					autoplay: $autoRotateBool,
					autoplayTimeout: $autoRotateSpeed,
					loop: $owlLoopBool,
					smartSpeed: 350,
					onTranslate: function () {
						$that.addClass('moving');
					},
					onTranslated: function () {
						$that.removeClass('moving');
					}
					
				});
				
				$(this).on('changed.owl.carousel', function (event) {
					if (event.item.count - event.page.size == event.item.index) {
						
						$(event.target).find('.owl-dots div:last')
							.addClass('active')
							.siblings()
							.removeClass('active');
					}
					
				});
				
			});
			
		}
		
		
		/**
		* Owl carousel animate items.
		*
		* @since 6.0
		*/
		function owl_carousel_animate() {
			
			$($fullscreenSelector + '.owl-carousel[data-enable-animation="true"]').each(function () {
				
				var $owlOffsetPos 	= ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
				var $animationDelay = 0; 
				
				if($(this).is('[data-animation-delay]') && 
				$(this).attr('data-animation-delay').length > 0 && 
				$(this).attr('data-animation') != 'false') {
					$animationDelay = $(this).attr('data-animation-delay');
				}
				
				var $that = $(this);
				var waypoint = new Waypoint({
					element: $that,
					handler: function () {
						
						if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
							waypoint.destroy();
							return;
						}
						
						setTimeout(function () {
							$that.find('.owl-stage > .owl-item').each(function (i) {
								
								var $that = $(this);
								$that.delay(i * 200).transition({
									'opacity': '1',
									'y': '0'
								}, 600, 'easeOutQuart');
							});
							$that.addClass('animated-in');
							
						}, $animationDelay);
						
						waypoint.destroy();
					},
					offset: $owlOffsetPos
					
				});
				
			});
			
		}
		
		
		/**
		* Update WooCommerce Flickity count.
		*
		* Updates next/prev count for carousels on mobile devices.
		*
		* @since 9.0
		*/
		function updateWooFlickityCount(e) {
			var slideNumber = e.data.wooFlickity.selectedIndex + 1;
			e.data.wooFlickityCount.text(slideNumber + '/' + e.data.wooFlickity.slides.length);
		}
		
		
		
		/**
		* Product carousel initialization.
		*
		* @since 4.0
		*/
		function productCarouselInit() {
			
			if ($('.products-carousel').length === 0 && $('.nectar-woo-flickity').length === 0) {
				return;
			}
			
			$('.products-carousel').each(function () {
				
				var $that     = $(this).find('ul'),
				maxCols       = 'auto',
				scrollNum     = 'auto',
				colWidth      = ($(this).parents('.full-width-content ').length > 0) ? 400 : 353,
				scrollSpeed   = 800,
				easing        = 'easeInOutQuart';
				
				var $element = $that;
				if ($that.find('img').length == 0) {
					$element = $body;
				}
				
				// Controls on hover.
				$(this).append('<a class="carousel-prev" href="#"><i class="icon-salient-left-arrow"></i></a> <a class="carousel-next" href="#"><i class="icon-salient-right-arrow"></i></a>');
				
				imagesLoaded($element, function () {
					
					$that.carouFredSel({
						circular: true,
						responsive: true,
						items: {
							width: colWidth,
							visible: {
								min: 1,
								max: maxCols
							}
						},
						swipe: {
							onTouch: true,
							onMouse: true,
							options: {
								excludedElements: "button, input, select, textarea, .noSwipe",
								tap: function (event, target) {
									
									if ($(target).attr('href') && 
									!$(target).is('[target="_blank"]') && 
									!$(target).hasClass('add_to_wishlist') && 
									!$(target).hasClass('add_to_cart_button') && 
									!$(target).is('[rel^="prettyPhoto"]'))	{
										window.open($(target).attr('href'), '_self');
									}
									
									if ($(target).parent().attr('href') && 
									!$(target).parent().is('[target="_blank"]') && 
									!$(target).parent().hasClass('add_to_wishlist') && 
									!$(target).parent().hasClass('add_to_cart_button') && 
									!$(target).parent().is('[rel^="prettyPhoto"]')) {
										window.open($(target).parent().attr('href'), '_self');
									}
									
								}
							},
							onBefore: function () {
								$that.find('.product-wrap').trigger('mouseleave');
								$that.find('.product a').trigger('mouseup');
							}
						},
						scroll: {
							items: scrollNum,
							easing: easing,
							duration: scrollSpeed
						},
						prev: {
							button: function () {
								return $that.parents('.carousel-wrap').find('.carousel-prev');
							}
						},
						next: {
							button: function () {
								return $that.parents('.carousel-wrap').find('.carousel-next');
							}
						},
						auto: {
							play: false
						}
					}).animate({
						'opacity': 1
					}, 1300);
					
					$that.parents('.carousel-wrap').wrap('<div class="carousel-outer">');
					
					$that.addClass('finished-loading');
					fullWidthContentColumns();
					$window.trigger('resize');
					
				}); 
				
				
			}); 
			
			
			
			$wooFlickityCarousels = [];
			$('.nectar-woo-flickity').each(function (i) {
				
				var $that = $(this);
				
				$(this).find('.products > li').each(function () {
					$(this).wrap('<div class="flickity-cell"></div>');
				});
				
				fullWidthSections();
				
				var pageDotsBool 	= ($that.is('[data-controls="bottom-pagination"]')) ? true : false,
				arrowsBool				= ($that.is('[data-controls="bottom-pagination"]')) ? false : true,
				$autoplay 				= ($that.is('[data-autorotate-speed]') && parseInt($that.attr('data-autorotate-speed')) > 800) ? parseInt($that.attr('data-autorotate-speed')) : 5000;
				
				if (!$that.is('[data-autorotate="true"]')) {
					$autoplay = false;
				}
				
				$(this).find('ul').addClass('generate-markup');
				
				$wooFlickityCarousels[i] = $(this).find('ul');
				
				if (arrowsBool == true) {
					$wooFlickityCarousels[i].on('ready.flickity', function () {
						var flickityPrv = $that.find('.flickity-prev-next-button.previous').detach();
						var flickityNxt = $that.find('.flickity-prev-next-button.next').detach();
						
						$that.find('.nectar-woo-carousel-top').append(flickityPrv).append(flickityNxt);
					});
				}
				
				$wooFlickityCarousels[i].flickity({
					draggable: true,
					lazyLoad: false,
					imagesLoaded: true,
					cellAlign: 'left',
					groupCells: pageDotsBool,
					prevNextButtons: arrowsBool,
					pageDots: pageDotsBool,
					resize: true,
					percentPosition: true,
					setGallerySize: true,
					wrapAround: true,
					autoPlay: $autoplay,
					accessibility: false
				});
				
				
				// Mobile pagination numbers.
				if (arrowsBool == true) {
					
					$that.find('.flickity-prev-next-button').append('<svg width="65px" height="65px" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><circle stroke-width="3" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle> <circle class="time" stroke-width="3" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg>');
					
					var $wooFlickityCount = $('<div class="woo-flickity-count" />');
					$that.append($wooFlickityCount);
					var $wooFlickityData = $wooFlickityCarousels[i].data('flickity');
					
					var $eventData = {
						data: {
							wooFlickity: $wooFlickityData, 
							wooFlickityCount: $wooFlickityCount
						}
					};
					
					updateWooFlickityCount($eventData);
					
					$wooFlickityCarousels[i].on('select.flickity', { wooFlickity: $wooFlickityData, wooFlickityCount: $wooFlickityCount }, updateWooFlickityCount );
				}
				
			});
			
		}
		


		

		/**
		* Standard Carousel Height Calculations.
		*
		* @since 2.0
		*/
		function carouselHeightCalcs() {
			
			// Standard carousels
			$('.carousel.finished-loading:not(".portfolio-items, .clients"), .caroufredsel_wrapper .products.finished-loading').each(function () {
				
				var tallestColumn = 0;
				
				$(this).find('> li').each(function () {
					
					if( $(this).height() > tallestColumn ) {
						tallestColumn = $(this).height();
					}
					
				});
				
				$(this).css('height', tallestColumn + 5);
				$(this).parents('.caroufredsel_wrapper').css('height', tallestColumn + 5);
				
				if ($('body.ascend').length > 0 && $(this).parents('.carousel-wrap').attr('data-full-width') != 'true' || 
				$('body.material').length > 0 && $(this).parents('.carousel-wrap').attr('data-full-width') != 'true') {
					
					$(this).parents('.carousel-wrap').find('.item-count .current').html(Math.ceil(($(this).triggerHandler("currentPosition") + 1) / $(this).triggerHandler("currentVisible").length));
					$(this).parents('.carousel-wrap').find('.item-count .total').html(Math.ceil($(this).find('> li').length / $(this).triggerHandler("currentVisible").length));
				}
				
			});
			
		}
		
		
		
		/**
		* Clients carousel element.
		*
		* @since 2.0
		*/
		function clientsCarouselInit() {
			
			if ( $('.carousel.clients').length === 0 ) {
				return;
			}
			
			$('.carousel.clients').each(function () {
				
				var $that       = $(this);
				var $autoRotate = (!$(this).hasClass('disable-autorotate')) ? true : false;
				var columns;
				
				columns = (parseInt($(this).attr('data-max'))) ? parseInt($(this).attr('data-max')) : 5;
				
				if ($window.width() < 690 && $body.attr('data-responsive') == '1') {
					columns = 2;
					$(this).addClass('phone');
				}
				
				var $element = $that;
				if ($that.find('img').length == 0) {
					$element = $body;
				}
				
				imagesLoaded($element, function () {
					
					$that.carouFredSel({
						circular: true,
						responsive: true,
						items: {
							
							height: $that.find('> div:first').height(),
							width: $that.find('> div:first').width(),
							visible: {
								min: 1,
								max: columns
							}
						},
						swipe: {
							onTouch: true,
							onMouse: true
						},
						scroll: {
							items: 1,
							easing: 'easeInOutCubic',
							duration: '800',
							pauseOnHover: true
						},
						auto: {
							play: $autoRotate,
							timeoutDuration: 2700
						}
					}).animate({
						'opacity': 1
					}, 1300);
					
					$that.addClass('finished-loading');
					$that.parents('.carousel-wrap').wrap('<div class="carousel-outer">');

					$window.trigger('resize');

				});
				
			});
			
			$window.off('smartresize.clientsCarouselHeight',clientsCarouselHeightRecalc);
			$window.on('smartresize.clientsCarouselHeight',clientsCarouselHeightRecalc);
		}
		
		


		
		
		/**
		* Clients carousel height calculations.
		*
		* @since 2.0
		*/
		function clientsCarouselHeightRecalc() {
			
			var tallestImage = 0;
			
			$('.carousel.clients.finished-loading').each(function () {
				
				$(this).find('> div').each(function () {
					
					if( $(this).height() > tallestImage ) {
						tallestImage = $(this).height();
					}
					
				});
				
				$(this).css('height', tallestImage);
				$(this).parent().css('height', tallestImage);
			});
		}
		
		$window.on("orientationchange", function () {
			setTimeout(clientsCarouselHeightRecalc, 200);
		});
		
		
		
		/**
		* Adds grabbing classes onto carousels when dragging.
		*
		* @since 3.0
		*/
		function carouselfGrabbingClass() {
			
			$body.on('mousedown', '.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a', function () {
				$(this).addClass('active');
			});
			
			$body.on('mouseup', '.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a', function () {
				$(this).removeClass('active');
			});
			
			// Arrow hover class.
			$('body.ascend, body.material').on('mouseover', '.carousel-next', function () {
				$(this).parent().find('.carousel-prev, .item-count').addClass('next-hovered');
			});
			
			$('body.ascend, body.material').on('mouseleave', '.carousel-next', function () {
				$(this).parent().find('.carousel-prev, .item-count').removeClass('next-hovered');
			});
			
		}
		
		
		
		



		/**
		* Client element fade in animation.
		*
		* @since 3.0
		* @see waypoints
		*/
		function clientsFadeIn() {
			
			var $clientsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
			$($fullscreenSelector + '.clients.fade-in-animation').each(function () {
				
				var $that = $(this),
				waypoint 	= new Waypoint({
					element: $that,
					handler: function () {
						
						if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
							waypoint.destroy();
							return;
						}
						
						$that.find('> div').each(function (i) {
							$(this).delay(i * 80).transition({
								'opacity': "1"
							}, 450);
						});
						
						// Add the css transition class back in after the aniamtion is done.
						setTimeout(function () {
							$that.addClass('completed');
						}, ($that.find('> div').length * 80) + 450);
						
						
						$that.addClass('animated-in');
						waypoint.destroy();
					},
					offset: $clientsOffsetPos
					
				});
			});
		}
		
		
		
		/*-------------------------------------------------------------------------*/
		/*	Helper Functions
		/*-------------------------------------------------------------------------*/
		
		
		/**
		* Cross browser request animation frame.
		*
		* @since 4.0
		*/
		window.requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(f) {
			setTimeout(f, 1000 / 60);
		}
		
		
		/**
		* Smart resize.
		*
		* @since 1.0
		*/
		var $event = $.event,
		dispatchMethod = $.event.handle ? 'handle' : 'dispatch',
		resizeTimeout;
		
		$event.special.smartresize = {
			setup: function() {
				$(this).on( "resize", $event.special.smartresize.handler );
			},
			teardown: function() {
				$(this).off( "resize", $event.special.smartresize.handler );
			},
			handler: function( event, execAsap ) {

				var context = this,
				args = arguments;
				
				event.type = "smartresize";
				
				if ( resizeTimeout ) { 
					clearTimeout( resizeTimeout ); 
				}
				resizeTimeout = setTimeout(function() {
					$event[ dispatchMethod ].apply( context, args );
				}, execAsap === "execAsap"? 0 : 100 );
			}
		};
		
		$.fn.smartresize = function( fn ) {
			return fn ? this.on( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
		};
		
		
		/**
		* Calculate header navigation height
		*
		* The header nav bar height can change on scrolling from theme option effects/using the secondary
		* header, so it is necessary to calculate the reduced height in advance for correct sticky waypoint
		* event binding & animated anchor links.
		*
		* @since 10.5
		* @return {number} Height of nav bar.
		*/
		function calcHeaderNavHeight() {
			
			var navHeight;
			
			// Left header format, no header template, hide header until needed.
			if( ($body.is('[data-header-format="left-header"]') && nectarDOMInfo.winW >= 1000) ||
			$body.is('[data-hhun="1"]') && nectarDOMInfo.winW >= 1000 ||
			$('.page-template-template-no-header-footer').length > 0 || 
			$('.page-template-template-no-header').length > 0) {
				
				navHeight = 0;
				
			} 
			
			// Regular Header 
			else {
				
				var headerPadding2 	= headerPadding - headerPadding / 1.8;
				var $headerNavSpace = $headerOuterEl.outerHeight();

				// Secondary header bar.
				if( $headerSecondaryEl.length > 0 && $body.is('.material') ||
						$headerSecondaryEl.length > 0	&& !$body.is('.material') && nectarDOMInfo.winW < 1000) {
					$headerNavSpace -=	nectarDOMInfo.secondaryHeaderHeight;
				}
		
				// Check for header resize effect.
				if( $headerOuterEl.is('[data-header-resize="1"]') && !$headerOuterEl.is('.small-nav') && nectarDOMInfo.winW >= 1000 ) {
					navHeight = $headerNavSpace - (parseInt(logoShrinkNum) + headerPadding2 * 2);
				} else {
					navHeight = $headerNavSpace;
				}

			}
			
			// Condense header effect.
			if ( nectarDOMInfo.winW >= 1000 && $('#header-outer[data-condense="true"]').length > 0 ) {
				
				var $headerSpan9 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');
				navHeight = $headerOuterEl.height() - (parseInt($headerSpan9.position().top) - parseInt($headerOuterEl.find('#logo').css('margin-top'))) - parseInt(nectarDOMInfo.secondaryHeaderHeight);
				
			}
			
			return navHeight;
			
		}
		
		
		/**
		* Removes CSS outlines in an accessible manner.
		*
		* @since 10.5
		*/
		(function(d){

			var style_element = d.createElement('STYLE'),
					dom_events = 'addEventListener' in d,
					add_event_listener = function(type, callback){
						if(dom_events){
							d.addEventListener(type, callback);
						}else{
							d.attachEvent('on' + type, callback);
						}
					},
					set_css = function(css_text){
					!!style_element.styleSheet ? style_element.styleSheet.cssText = css_text : style_element.innerHTML = css_text;
				};

			d.getElementsByTagName('HEAD')[0].appendChild(style_element);

			add_event_listener('mousedown', function(){
				set_css(':focus{outline:0}::-moz-focus-inner{border:0;}');
			});

			add_event_listener('keydown', function(){
				set_css('');
			});

		})(document);
		
		
		
		/**
		* Cursor position.
		*
		* @since 4.0
		*/
		jQuery.fn.setCursorPosition = function (position) {
			
			if (this.length == 0) {
				return this;
			}
			return $(this).setSelection(position, position);
		};
		
		
		/**
		* Set selection in input.
		*
		* @since 4.0
		*/
		jQuery.fn.setSelection = function (selectionStart, selectionEnd) {
			if (this.length == 0) {
				return this;
			}
			var input = this[0];
			
			if (input.createTextRange) {
				var range = input.createTextRange();
				range.collapse(true);
				range.moveEnd('character', selectionEnd);
				range.moveStart('character', selectionStart);
				range.select();
			} else if (input.setSelectionRange) {
				input.focus();
				input.setSelectionRange(selectionStart, selectionEnd);
			}
			
			return this;
		};
		
		$.extend($.expr[':'], {
			transparent: function (elem, i, attr) {
				return ($(elem).css("opacity") === "0");
			}
		});
		
		
		
		/**
		* Converts to hex.
		*
		* @since 3.0
		*/
		function hex(x) {
			return ("0" + parseInt(x).toString(16)).slice(-2);
		}
		
		/**
		* CSS color RGB helper.
		*
		* @since 3.0
		*/
		$.cssHooks.color = {
			get: function (elem) {
				
				var color;
				
				if (elem.currentStyle) {
					color = elem.currentStyle["color"];
				} else if (window.getComputedStyle) {
					color = document.defaultView.getComputedStyle(elem,
						null).getPropertyValue("color");
					}
					if (color.search("rgb") == -1) {
						return color;
					} else {
						color = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
						
						if (color) {
							return "#" + hex(color[1]) + hex(color[2]) + hex(color[3]);
						}
					}
				}
			};
			
			/**
			* CSS background color RGB helper.
			*
			* @since 3.0
			*/
			$.cssHooks.backgroundColor = {
				get: function (elem) {
					
					var bg;
					
					if (elem.currentStyle) {
						bg = elem.currentStyle["backgroundColor"];
					} else if (window.getComputedStyle) {
						bg = document.defaultView.getComputedStyle(elem,
							null).getPropertyValue("background-color");
						}
						if (bg.search("rgb") == -1) {
							return bg;
						} else {
							bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
							
							if (bg) {
								return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
							}
						}
					}
				};
				
				
			/**
			* Unique ID generator.
			*
			* @since 10.5
			*/
			function uniqueIdGenerate() {
				return Math.floor(Math.random() * 10000); 
			}
			
				
			/**
			* Animated page scroll
			*
			* @since 9.0
			*/
			function nectar_scrollToY(scrollTargetY, speed, easing) {
				
				var scrollY = window.scrollY || document.documentElement.scrollTop,
				scrollTargetY = scrollTargetY || 0,
				speed = speed || 2000,
				easing = easing || 'easeOutSine',
				currentTime = 0;
				
				var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));
				
				var easingEquations = {
					easeInOutQuint: function (pos) {
						if ((pos /= 0.5) < 1) {
							return 0.5 * Math.pow(pos, 5);
						}
						return 0.5 * (Math.pow((pos - 2), 5) + 2);
					}
				};
				
				function tick() {
					currentTime += 1 / 60;
					
					var p = currentTime / time;
					var t = easingEquations[easing](p);
					
					if (p < 1) {
						requestAnimationFrame(tick);
						
						window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
					} else {
						window.scrollTo(0, scrollTargetY);
					}
				}
				
				tick();
		}
		

		/*
		* Bootstrap ScrollSpy Component
		* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE) */
		(function ($) {
			
			function s(e, i) {
				var r = $.proxy(this.process, this);
				this.$body = $("body"), this.$scrollElement = $($(e).is("body") ? window : e), 
				this.options = $.extend({}, s.DEFAULTS, i), 
				this.selector = (this.options.target || "") + " ul li > a", 
				this.offsets = [], 
				this.targets = [], 
				this.activeTarget = null, 
				this.scrollHeight = 0, 
				this.$scrollElement.on("scroll.bs.scrollspy", r), 
				this.refresh(), 
				this.process();
			}
			
			function e(e) {
				return this.each(function () {
					var i = $(this),
					r = i.data("bs.scrollspy"),
					o = "object" == typeof e && e;
					r || i.data("bs.scrollspy", r = new s(this, o)), "string" == typeof e && r[e]()
				})
			}
			
			s.VERSION = "3.2.0", 
			s.DEFAULTS = {
				offset: 10
			}, 
			s.prototype.getScrollHeight = function () {
				return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
			}, 
			s.prototype.refresh = function () {
				var s = "offset",
				e = 0;
				$.isWindow(this.$scrollElement[0]) || (s = "position", e = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
				var i = this;
				this.$body.find(this.selector).map(function () {
					var i = $(this),
					r = i.data("target") || i.attr("href"),
					o = /^#./.test(r) && $(r);
					return o && o.length && o.is(":visible") && [
						[o[s]().top + e, r]
					] || null
				}).sort(function (t, s) {
					return t[0] - s[0]
				}).each(function () {
					i.offsets.push(this[0]), i.targets.push(this[1])
				})
			}, 
			s.prototype.process = function () {
				
				var $pageSubMenu = 0;
				
				if( $('.page-submenu[data-sticky="true"]').length > 0 && $('body[data-hhun="1"]').length == 0 
				|| $('.page-submenu[data-sticky="true"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length > 0 ) {
					$pageSubMenu = $('.page-submenu').height();
				} 
				
				var t, s = this.$scrollElement.scrollTop() + this.options.offset + $pageSubMenu,
				e = this.getScrollHeight(),
				i = this.options.offset + e - this.$scrollElement.height() - $pageSubMenu,
				r = this.offsets,
				o = this.targets,
				l = this.activeTarget;
				if (this.scrollHeight != e && this.refresh(), s >= i) {
					return l != (t = o[o.length - 1]) && this.activate(t);
				}
				if (l && s <= r[0]) {
					return l != (t = o[0]) && this.activate(t);
				}
				for (t = r.length; t--;) l != o[t] && s >= r[t] && (!r[t + 1] || s <= r[t + 1]) && this.activate(o[t])
			}, 
			s.prototype.activate = function (s) {
				this.activeTarget = s, $(this.selector).parentsUntil(this.options.target, ".current-menu-item").removeClass("current-menu-item").removeClass('sfHover');
				var e = this.selector + '[data-target="' + s + '"],' + this.selector + '[href="' + s + '"]',
				i = $(e).parents("li").addClass("current-menu-item");
				i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("current-menu-item")), i.trigger("activate.bs.scrollspy")
			};
			
			var i = $.fn.scrollspy;
			
			$.fn.scrollspy = e, 
			$.fn.scrollspy.Constructor = s, 
			$.fn.scrollspy.noConflict = function () {
				return $.fn.scrollspy = i, this
			}
			
		}(jQuery));
					
		
		/**
		* Mobile break point checker
		*
		* @since 9.0
		*/		
		function mobileBreakPointCheck() {
			
			var $mobileBreakpoint       = ($('body[data-header-breakpoint]').length > 0 && $body.attr('data-header-breakpoint') != '1000') ? parseInt($body.attr('data-header-breakpoint')) : 1000;
			var $withinCustomBreakpoint = false;
			
			if ($mobileBreakpoint != 1000) {
				if ($('body[data-user-set-ocm="1"][data-slide-out-widget-area-style="slide-out-from-right-hover"]').length == 0 && nectarDOMInfo.winW > 1000 && nectarDOMInfo.winW <= $mobileBreakpoint) {
					$withinCustomBreakpoint = true;
				}
			}
			
			return $withinCustomBreakpoint;
		}
		
		/**
		* Extract a URL
		*
		* @since 5.0
		*/
		function extractUrl(input) {
			return input.replace(/"/g, "").replace(/url\(|\)$/ig, "");
		}
		
		/**
		* Extract query params
		*
		* @since 10.5
		*/		
		function getQueryParams(qs) {
			qs = qs.split("+").join(" ");
			var params = {},
			tokens,
			re = /[?&]?([^=]+)=([^&]*)/g;
			
			while (tokens = re.exec(qs)) {
				params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
			}
			
			return params;
		}
		
		var nectarGetQueryParam = getQueryParams(document.location.search);
		
		
		/**
		* Check whether an el is visible.
		*
		* @since 6.0
		*/
		(function (t) {
			var i = t(window);
			t.fn.visible = function (t, e, o) {
				if (!(this.length < 1)) {
					var r = this.length > 1 ? this.eq(0) : this,
					n = r.get(0),
					f = i.width(),
					h = i.height(),
					o = o ? o : "both",
					l = e === !0 ? n.offsetWidth * n.offsetHeight : !0;
					if ("function" == typeof n.getBoundingClientRect) {
						var g = n.getBoundingClientRect(),
						u = g.top >= 0 && g.top < h,
						s = g.bottom > 0 && g.bottom <= h,
						c = g.left >= 0 && g.left < f,
						a = g.right > 0 && g.right <= f,
						v = t ? u || s : u && s,
						b = t ? c || a : c && a;
						if ("both" === o) {
							return l && v && b;
						}
						if ("vertical" === o) {
							return l && v;
						}
						if ("horizontal" === o) {
							return l && b
						}
					} else {
						var d = i.scrollTop(),
						p = d + h,
						w = i.scrollLeft(),
						m = w + f,
						y = r.offset(),
						z = y.top,
						B = z + r.height(),
						C = y.left,
						R = C + r.width(),
						j = t === !0 ? B : z,
						q = t === !0 ? z : B,
						H = t === !0 ? R : C,
						L = t === !0 ? C : R;
						if ("both" === o) {
							return !!l && p >= q && j >= d && m >= L && H >= w;
						}
						if ("vertical" === o) {
							return !!l && p >= q && j >= d;
						}
						if ("horizontal" === o) {
							return !!l && m >= L && H >= w;
						}
					}
				}
			};
			
		}(jQuery));
		
		
		/**
		* Count to a specific number
		*
		* @since 8.0
		*/
		var CountUp = function (target, startVal, endVal, decimals, duration, options) {
			
			var lastTime = 0;
			var vendors = ['webkit', 'moz', 'ms', 'o'];
			for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
				window.cancelAnimationFrame =
				window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
			}
			if (!window.requestAnimationFrame) {
				window.requestAnimationFrame = function (callback) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function () {
						callback(currTime + timeToCall);
					},
					timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
			}
			if (!window.cancelAnimationFrame) {
				window.cancelAnimationFrame = function (id) {
					clearTimeout(id);
				};
			}
			
			var self = this;
			
			self.options = {
				useEasing: true, 
				useGrouping: true, 
				separator: ',', 
				decimal: '.', 
				easingFn: null, 
				formattingFn: null 
			};
			// Extend default options with passed options object
			for (var key in options) {
				if (options.hasOwnProperty(key)) {
					self.options[key] = options[key];
				}
			}
			if (self.options.separator === '') {
				self.options.useGrouping = false;
			}
			if (!self.options.prefix) {
				self.options.prefix = '';
			}
			if (!self.options.suffix) {
				self.options.suffix = '';
			}
			
			self.d = (typeof target === 'string') ? document.getElementById(target) : target;
			self.startVal = Number(startVal);
			self.endVal = Number(endVal);
			self.countDown = (self.startVal > self.endVal);
			self.frameVal = self.startVal;
			self.decimals = Math.max(0, decimals || 0);
			self.dec = Math.pow(10, self.decimals);
			self.duration = Number(duration) * 1000 || 2000;
			
			self.formatNumber = function (nStr) {
				nStr = nStr.toFixed(self.decimals);
				nStr += '';
				var x, x1, x2, rgx;
				x = nStr.split('.');
				x1 = x[0];
				x2 = x.length > 1 ? self.options.decimal + x[1] : '';
				rgx = /(\d+)(\d{3})/;
				if (self.options.useGrouping) {
					while (rgx.test(x1)) {
						x1 = x1.replace(rgx, '$1' + self.options.separator + '$2');
					}
				}
				return self.options.prefix + x1 + x2 + self.options.suffix;
			};
			// Robert Penner's easeOutExpo
			self.easeOutExpo = function (t, b, c, d) {
				return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
			};
			
			self.easingFn = self.options.easingFn ? self.options.easingFn : self.easeOutExpo;
			self.formattingFn = self.options.formattingFn ? self.options.formattingFn : self.formatNumber;
			
			self.version = function () {
				return '1.7.1';
			};
			
			// Print value to target
			self.printValue = function (value) {
				var result = self.formattingFn(value);
				
				if (self.d.tagName === 'INPUT') {
					this.d.value = result;
				} else if (self.d.tagName === 'text' || self.d.tagName === 'tspan') {
					this.d.textContent = result;
				} else {
					this.d.innerHTML = result;
				}
			};
			
			self.count = function (timestamp) {
				
				if (!self.startTime) {
					self.startTime = timestamp;
				}
				
				self.timestamp = timestamp;
				var progress = timestamp - self.startTime;
				self.remaining = self.duration - progress;
				
				// To ease or not to ease
				if (self.options.useEasing) {
					if (self.countDown) {
						self.frameVal = self.startVal - self.easingFn(progress, 0, self.startVal - self.endVal, self.duration);
					} else {
						self.frameVal = self.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration);
					}
				} else {
					if (self.countDown) {
						self.frameVal = self.startVal - ((self.startVal - self.endVal) * (progress / self.duration));
					} else {
						self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
					}
				}
				
				// Don't go past endVal since progress can exceed duration in the last frame
				if (self.countDown) {
					self.frameVal = (self.frameVal < self.endVal) ? self.endVal : self.frameVal;
				} else {
					self.frameVal = (self.frameVal > self.endVal) ? self.endVal : self.frameVal;
				}
				
				// Decimal
				self.frameVal = Math.round(self.frameVal * self.dec) / self.dec;
				
				// Format and print value
				self.printValue(self.frameVal);
				
				// Whether to continue
				if (progress < self.duration) {
					self.rAF = requestAnimationFrame(self.count);
				} else {
					if (self.callback) {
						self.callback();
					}
				}
			};
			// Start animation
			self.start = function (callback) {
				self.callback = callback;
				self.rAF = requestAnimationFrame(self.count);
				return false;
			};
			// Toggles pause/resume animation
			self.pauseResume = function () {
				if (!self.paused) {
					self.paused = true;
					cancelAnimationFrame(self.rAF);
				} else {
					self.paused = false;
					delete self.startTime;
					self.duration = self.remaining;
					self.startVal = self.frameVal;
					requestAnimationFrame(self.count);
				}
			};
			// Reset to startVal so animation can be run again
			self.reset = function () {
				self.paused = false;
				delete self.startTime;
				self.startVal = startVal;
				cancelAnimationFrame(self.rAF);
				self.printValue(self.startVal);
			};
			// Pass a new endVal and start animation
			self.update = function (newEndVal) {
				cancelAnimationFrame(self.rAF);
				self.paused = false;
				delete self.startTime;
				self.startVal = self.frameVal;
				self.endVal = Number(newEndVal);
				self.countDown = (self.startVal > self.endVal);
				self.rAF = requestAnimationFrame(self.count);
			};
			
			// Format startVal on initialization
			self.printValue(self.startVal);
		};
		
		var easeOutCubic = function (t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b;
		};
		
		
		/**
		* Create styles
		*
		* @since 10.5
		*/
		function nectarCreateStyle(styles, name) {
			
			if(styles.length > 0) {
				
				var head = document.head || document.getElementsByTagName('head')[0];
				var style = document.createElement('style');
				
				style.type = 'text/css';
				if (style.styleSheet) {
					style.styleSheet.cssText = styles;
				} else {
					style.appendChild(document.createTextNode(styles));
				}
				
				$(style).attr('id', name);
				$('head').find('#'+name).remove();
				head.appendChild(style);
				
			}
			
		}
		
		
		
		
		/**
		* FancyBox lightbox.
		*
		* @since 8.0
		*/
		function fancyBoxInit() {
			
			// Convert prettyPhoto links
			$('a.pp')
				.removeClass('pp')
				.attr('data-fancybox', '');
				
			$("a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])")
				.removeAttr('rel')
				.attr('data-fancybox', '');
			
			var $unique_id = uniqueIdGenerate();
			
			// Image gallery nectar.
			$('.wpb_gallery .wpb_gallery_slidesnectarslider_style').each(function() {
				$unique_id = uniqueIdGenerate();
				$(this).find('.swiper-slide a:not(.ext-url-link)').attr('data-fancybox', 'group_' + $unique_id);
			});
			
			// Flexslider.
			$('.wpb_gallery_slides.wpb_flexslider:not([data-onclick="custom_link"])').each(function() {
				$unique_id = uniqueIdGenerate();
				$(this).find('.slides > li > a').attr('data-fancybox', 'group_' + $unique_id);
			});
			
			// Touch enabled gallery.
			$('.wpb_gallery_slidesflickity_style').each(function() {
				$unique_id = uniqueIdGenerate();
				$(this).find('.cell > a:not(.ext-url-link)').attr('data-fancybox', 'group_' + $unique_id);
			});
			
			// Add galleries to portfolios.
			$('.portfolio-items, .wpb_gallery_slidesparallax_image_grid').each(function() {
				$unique_id = uniqueIdGenerate();
				if ($(this).find('.pretty_photo').length > 0) {
					
					$(this).find('.pretty_photo')
						.removeClass('pretty_photo')
						.attr('data-fancybox', 'group_' + $unique_id);
						
				} else if ($(this).find('a[rel*="prettyPhoto["]').length > 0) {
					
					$(this).find('a[rel*="prettyPhoto["]')
						.removeAttr('rel')
						.attr('data-fancybox', 'group_' + $unique_id);
				}
				
			});
			
			// Nectar auto lightbox theme option.
			if ($body.hasClass('nectar-auto-lightbox')) {
				
				$('.gallery').each(function() {
					if ($(this).find('.gallery-icon a[rel^="prettyPhoto"]').length == 0) {
						var $unique_id = uniqueIdGenerate();
						$(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]')
							.attr('data-fancybox', 'group_' + $unique_id)
							.removeClass('pretty_photo');
					}
				});
				
				$('.main-content img').each(function() {
					
					if ($(this).parent().is("[href]") && 
					!$(this).parent().is(".magnific-popup") && 
					$(this).parents('.tiled-gallery').length == 0 && 
					$(this).parents('.product-image').length == 0 && 
					$(this).parents('.iosSlider.product-slider').length == 0) {
						
						var match = $(this).parent().attr('href').match(/\.(jpg|png|gif)\b/);
						if (match) {
							$(this).parent().attr('data-fancybox', '');
						}
					}
				});
			}
			
			// Regular.
			var fbMarginArr = ($('body.admin-bar').length > 0) ? [60, 100] : [60, 100];
			if (nectarDOMInfo.winW < 1000) {
				fbMarginArr = [0, 0];
			}
			$("[data-fancybox]").fancybox({
				animationEffect: "zoom-in-out",
				animationDuration: 350,
				buttons: [
					'fullScreen',
					'zoom',
					'close'
				],
				margin: fbMarginArr,
				loop: true,
				caption: function() {
					return $(this).attr('title');
				},
				beforeLoad: function(instance) {
					
					if (typeof instance.current.src !== 'string') {
						$.fancybox.close(true);
					}
					
				},
				mobile: {
					margin: 0
				}
			});
		}
		
		/**
		* Magnific lightbox.
		*
		* @since 6.0
		*/
		function magnificInit() {
			
			// Convert old pp links
			$('a.pp')
				.removeClass('pp')
				.addClass('magnific-popup');
				
			$("a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])")
				.removeAttr('rel')
				.addClass('magnific-popup');
			
			// Image gallery nectar.
			$('.wpb_gallery .wpb_gallery_slidesnectarslider_style').each(function() {
				$(this).find('.swiper-slide a:not(.ext-url-link)').addClass('pretty_photo');
			});
			
			// Flexslider.
			$('.wpb_gallery_slides.wpb_flexslider:not([data-onclick="custom_link"])').each(function() {
				$(this).find('.slides > li > a').addClass('pretty_photo');
			});
			
			// Touch enabled gallery.
			$('.wpb_gallery_slidesflickity_style').each(function() {
				$(this).find('.cell > a:not(.ext-url-link)').addClass('pretty_photo');
			});
			
			// Add galleries to portfolios.
			$('.portfolio-items, .wpb_gallery .swiper-slide, .wpb_gallery_slidesflickity_style .cell, .wpb_gallery_slides.wpb_flexslider ul > li, .wpb_gallery .parallax-grid-item').each(function() {
				
				if ($(this).find('.pretty_photo').length > 0) {
					
					$(this)
						.find('.pretty_photo')
						.removeClass('pretty_photo')
						.addClass('gallery')
						.addClass('magnific');
					
				} else if ($(this).find('a[rel*="prettyPhoto["]').length > 0) {
					
					$(this)
						.find('a[rel*="prettyPhoto["]')
						.removeAttr('rel')
						.addClass('gallery')
						.addClass('magnific');
				}
				
			});
			
			$("a[data-rel='prettyPhoto[product-gallery]']").each(function() {
				$(this)
					.removeAttr('data-rel')
					.addClass('magnific')
					.addClass('gallery');
			});
			
			// Nectar auto lightbox theme option.
			if ($body.hasClass('nectar-auto-lightbox')) {
				$('.gallery').each(function() {
					if ($(this).find('.gallery-icon a[rel^="prettyPhoto"]').length == 0) {
						
						$(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]')
							.addClass('magnific')
							.addClass('gallery')
							.removeClass('pretty_photo');
					}
				});
				
				$('.main-content img').each(function() {
					
					if ($(this).parent().is("[href]") && 
					!$(this).parent().is(".magnific-popup") && 
					$(this).parents('.tiled-gallery').length == 0 && 
					$(this).parents('.product-image').length == 0 && 
					$(this).parents('.iosSlider.product-slider').length == 0) {
						
						var match = $(this).parent().attr('href').match(/\.(jpg|png|gif)\b/);
						if (match) {
							
							$(this).parent()
								.addClass('magnific-popup')
								.addClass('image-link');
						}
					}
					
				});
				
			}
			
			
			// Regular.
			$('a.magnific-popup:not(.gallery):not(.nectar_video_lightbox)').magnificPopup({
				type: 'image',
				callbacks: {
					imageLoadComplete: function() {
						var $that = this;
						setTimeout(function() {
							$that.wrap.addClass('mfp-image-loaded');
						}, 10);
					},
					beforeOpen: function() {
						this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					},
					open: function() {
						
						$.magnificPopup.instance.next = function() {
							var $that = this;
							
							this.wrap.removeClass('mfp-image-loaded');
							setTimeout(function() {
								$.magnificPopup.proto.next.call($that);
							}, 100);
						};
						
						$.magnificPopup.instance.prev = function() {
							var $that = this;
							
							this.wrap.removeClass('mfp-image-loaded');
							setTimeout(function() {
								$.magnificPopup.proto.prev.call($that);
							}, 100);
						};
						
					}
				},
				fixedContentPos: false,
				mainClass: 'mfp-zoom-in',
				removalDelay: 400
			});
			
			// Video.
			$('a.magnific-popup.nectar_video_lightbox, .magnific_nectar_video_lightbox a.link_text, .swiper-slide a[href*=youtube], .swiper-slide a[href*=vimeo], .nectar-video-box a.full-link.magnific-popup').magnificPopup({
				type: 'iframe',
				fixedContentPos: false,
				mainClass: 'mfp-zoom-in',
				removalDelay: 400
			});
			
			
			// Galleries.
			$('a.magnific.gallery').each(function() {
				
				var $parentRow = ($(this).closest('.wpb_column').length > 0) ? $(this).closest('.wpb_column') : $(this).parents('.row');
				
				if ($parentRow.length > 0 && !$parentRow.hasClass('lightbox-col')) {
					
					$parentRow.magnificPopup({
						type: 'image',
						delegate: 'a.magnific',
						mainClass: 'mfp-zoom-in',
						fixedContentPos: false,
						callbacks: {
							
							elementParse: function(item) {
								
								if ($(item.el.context).is('[href]') && $(item.el.context).attr('href').indexOf('iframe=true') != -1 || 
								$(item.el.context).is('[href]') && $(item.el.context).attr('href').indexOf('https://www.youtube.com/watch') != -1) {
									item.type = 'iframe';
								} else if ($(item.el.context).is('[href]') && $(item.el.context).attr('href').indexOf('video-popup-') != -1) {
									item.type = 'inline';
								} else {
									item.type = 'image';
								}
							},
							
							imageLoadComplete: function() {
								var $that = this;
								setTimeout(function() {
									$that.wrap.addClass('mfp-image-loaded');
								}, 10);
							},
							
							beforeOpen: function() {
								this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
							},
							
							open: function() {
								
								// Self hosted video.
								if ($(this.content).find('.mejs-video video').length > 0 && $().mediaelementplayer) {
									$(this.content).find('.mejs-video video')[0].player.remove();
									
									var $that = this;
									setTimeout(function() {
										$($that.content).find('video').mediaelementplayer();
										$($that.content).find('.mejs-video video')[0].player.play();
									}, 50);
									
								}
								
								$.magnificPopup.instance.next = function() {
									var $that = this;
									
									this.wrap.removeClass('mfp-image-loaded');
									setTimeout(function() {
										$.magnificPopup.proto.next.call($that);
										
										// Self hosted video.
										if ($($that.content).find('.mejs-video video').length > 0) {
											$($that.content).find('.mejs-video video')[0].play();
										}
										
									}, 100);
								};
								
								$.magnificPopup.instance.prev = function() {
									var $that = this;
									
									this.wrap.removeClass('mfp-image-loaded');
									setTimeout(function() {
										$.magnificPopup.proto.prev.call($that);
										
										// Self hosted video.
										if ($($that.content).find('.mejs-video video').length > 0) {
											$($that.content).find('.mejs-video video')[0].play();
										}
									}, 100);
								};
								
							},
							
							close: function() {
								// Self hosted video.
								if ($(this.content).find('.mejs-video video').length > 0) {
									$(this.content).find('.mejs-video video')[0].load();
								}
							}
						},
						removalDelay: 400,
						gallery: {
							enabled: true
						}
					});
					
					$parentRow.addClass('lightbox-col');
				}
				
			});
			
		}
		
		
		/**
		* Lightbox initialization.
		*
		* Determines which lightbox to use based on theme option.
		*
		* @since 8.0
		*/
		function lightBoxInit() {
			
			setTimeout(function(){
				if ($('body[data-ls="magnific"]').length > 0 || $('body[data-ls="pretty_photo"]').length > 0) {
					magnificInit();
				} else if ($('body[data-ls="fancybox"]').length > 0) {
					fancyBoxInit();
				}
			},100);
			
		}
		
		
		/**
		* WPBakery page builder standard animations.
		*
		* @since 7.0
		* @see waypoints
		*/
		function vcWaypoints() {
			
			$($fullscreenSelector + ' .wpb_animate_when_almost_visible').each(function () {
				
				var $that     = $(this),
				$vcOffsetPos  = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '90%',
				waypoint      = new Waypoint({
					element: $that,
					handler: function () {
						
						if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated')) {
							waypoint.destroy();
							return;
						}
						
						$that.addClass("animated");
						$that.addClass("wpb_start_animation");
						waypoint.destroy();
						
						if ($that.is('.nectar-button') && $('body[data-button-style*="rounded_shadow"]').length > 0) {
							setTimeout(function () {
								$that.removeClass('wpb_start_animation');
							}, 1100);
						}
						
					},
					offset: $vcOffsetPos
					
				});
				
			});
		}
		
		
		
		/**
		* Milestone element initialization.
		*
		* @since 4.0
		* @see waypoints
		*/
		function milestoneInit() {
			
			$('.nectar-milestone').each(function () {
				
				// Symbol
				if ($(this).is('[data-symbol]')) {
					
					if ($(this).find('.symbol-wrap').length == 0) {
						
						if ($(this).attr('data-symbol-pos') == 'before') {
							$(this)
								.find('.number')
								.prepend('<div class="symbol-wrap"><span class="symbol">' + $(this).attr('data-symbol') + '</span></div>');
						} else {
							$(this)
								.find('.number')
								.append('<div class="symbol-wrap"><span class="symbol">' + $(this).attr('data-symbol') + '</span></div>');
						}
					}
					
					var $symbol_size;
					
					if ($(this).attr('data-symbol-size') == $(this).find('.number').attr('data-number-size') && $(this).attr('data-symbol-alignment') == 'superscript') {
						$symbol_size = 32;
					} else {
						$symbol_size = parseInt($(this).attr('data-symbol-size'));
					}
					
					$(this).find('.symbol-wrap').css({
						'font-size': $symbol_size + 'px',
						'line-height': $symbol_size + 'px'
					});
				}
				
				$(this).find('.number').css({
					'font-size': $(this).find('.number').attr('data-number-size') + 'px',
					'line-height': $(this).find('.number').attr('data-number-size') + 'px'
				});
			});
			
			if (!$body.hasClass('mobile') && $('.nectar-milestone').length > 0 || $body.hasClass('rtl') && $('.nectar-milestone').length > 0) {
				
				// Blur effect
				var $blurCssString = '';
				$($fullscreenSelector + '.nectar-milestone.motion_blur').each(function (i) {
					
					$(this).removeClass(function (index, className) {
						return (className.match(/(^|\s)instance-\S+/g) || []).join(' ');
					});
					
					$(this).addClass('instance-' + i);
					
					var $currentColor = $(this).find('.number').css('color'),
					colorInt 					= parseInt($currentColor.substring(1), 16);
					
					var	R = (colorInt & 0xFF0000) >> 16,
					G     = (colorInt & 0x00FF00) >> 8,
					B     = (colorInt & 0x0000FF) >> 0;
					
					var $rgbaColorStart = 'rgba(' + R + ',' + G + ',' + B + ',0.2)',
					$rgbaColorEnd 			= 'rgba(' + R + ',' + G + ',' + B + ',1)',
					$numberSize 				= parseInt($(this).find('.number').attr('data-number-size'));
					
					$blurCssString += '@keyframes motion-blur-number-' + i + ' { ' +
					' 0% { ' +
					'opacity: 0;' +
					'color: ' + $rgbaColorStart + '; ' +
					'text-shadow: 0 ' + $numberSize / 20 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 10 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 6 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 5 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 4 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 20 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 10 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 6 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 5 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 4 + 'px 0 ' + $rgbaColorStart + '; ' +
					'transform: translateZ(0px) translateY(-100%); ' +
					'-webkit-transform: translateZ(0px) translateY(-100%); ' +
					'} ' +
					'33% { opacity: 1 }' +
					'100% { ' +
					'color: ' + $rgbaColorEnd + '; ' +
					'text-shadow: none; ' +
					'transform: translateZ(0px) translateY(0px); ' +
					'-webkit-transform: translateZ(0px) translateY(0px); ' +
					'} ' +
					'} ' +
					'@-webkit-keyframes motion-blur-number-' + i + ' { ' +
					' 0% { ' +
					'opacity: 0;' +
					'color: ' + $rgbaColorStart + '; ' +
					'text-shadow: 0 ' + $numberSize / 20 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 10 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 6 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 5 + 'px 0 ' + $rgbaColorStart + ', 0 ' + $numberSize / 4 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 20 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 10 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 6 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 5 + 'px 0 ' + $rgbaColorStart + ', 0 -' + $numberSize / 4 + 'px 0 ' + $rgbaColorStart + '; ' +
					'transform: translateZ(0px) translateY(-100%); ' +
					'-webkit-transform: translateZ(0px) translateY(-100%); ' +
					'} ' +
					'33% { opacity: 1 }' +
					'100% { ' +
					'color: ' + $rgbaColorEnd + '; ' +
					'text-shadow: none; ' +
					'transform: translateZ(0px) translateY(0px); ' +
					'-webkit-transform: translateZ(0px) translateY(0px); ' +
					'} ' +
					'} ' +
					'.nectar-milestone.motion_blur.instance-' + i + ' .number span.in-sight { animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-' + i + '; -webkit-animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-' + i + '; } ';
					
					// Separate each character into spans
					var $symbol = $(this).find('.symbol-wrap').clone();
					$(this).find('.symbol-wrap').remove();
					
					var characters 	= $(this).find('.number').text().split("");
					var $this 			= $(this).find('.number');
					
					$this.empty();
					$.each(characters, function (i, el) {
						$this.append("<span>" + el + "</span");
					});
					
					// Handle symbol
					if ($(this).has('[data-symbol]')) {
						if ($(this).attr('data-symbol-pos') == 'after') {
							$this.append($symbol);
						} else {
							$this.prepend($symbol);
						}
					}
					
				});
				
				// Style
				nectarCreateStyle($blurCssString, 'milestone-blur');
				
				// Activate
				milestoneWaypoint();
				
			}
			
		}
		
		
		/**
		* Milestone animation
		*
		* @since 4.0
		*/
		function milestoneWaypoint() {
			
			$($fullscreenSelector + '.nectar-milestone').each(function () {
				
				// Animation
				var $offset = ($('#nectar_fullscreen_rows').length > 0) ? '250%' : '98%',
				$that       = $(this),
				waypoint    = new Waypoint({
					element: $that,
					handler: function () {
						
						if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
							waypoint.destroy();
							return;
						}
						
						var $endNum = parseInt($that.find('.number span:not(.symbol)').text().replace(/,/g, ''));
						
						if (!$that.hasClass('motion_blur')) {
							
							var countOptions = {
								easingFn: easeOutCubic
							};
							var $countEle = $that.find('.number span:not(.symbol)')[0];
							var numAnim 	= new CountUp($countEle, 0, $endNum, 0, 2.2, countOptions);
							numAnim.start();
							
						} else {
							$that.find('span').each(function (i) {
								var $that = $(this);
								setTimeout(function () {
									$that.addClass('in-sight');
								}, 200 * i);
							});
						}
						
						
						$that.addClass('animated-in');
						waypoint.destroy();
					},
					offset: $offset
					
				});
				
			});
		}
		
		
		
		/**
		* Tabbed element change section event.
		*
		* @since 10.5
		*/
		function tabbedChangeSection(clickedTab) {
			
			var $id = clickedTab.parents('li').index() + 1;
			var $frontEndEditorTabDiv = ($('body.vc_editor').length > 0) ? '> .wpb_tab ' : '';
			
			if (!clickedTab.hasClass('active-tab') && !clickedTab.hasClass('loading')) {
				
				clickedTab.parents('ul')
					.find('a')
					.removeClass('active-tab');
					
				clickedTab
					.addClass('active-tab');
				
				clickedTab.parents('.tabbed').find('> div:not(.clear)' + $frontEndEditorTabDiv).css({
						'visibility': 'hidden',
						'position': 'absolute',
						'opacity': '0',
						'left': '-9999px',
						'display': 'none'
					}).removeClass('visible-tab');
				
				if ($('body.vc_editor').length > 0) {

					var $data_m_id = (clickedTab.parent().is('[data-m-id]')) ? clickedTab.parent().attr('data-m-id') : '';
					
					clickedTab.parents('.tabbed').find('> div[data-model-id="' + $data_m_id + '"]' + $frontEndEditorTabDiv).css({
						'visibility': 'visible',
						'position': 'relative',
						'left': '0',
						'display': 'block'
					}).stop().transition({
						'opacity': 1
					}, 400).addClass('visible-tab');

					convertFrontEndPadding();
					
				} else {
					clickedTab.parents('.tabbed').find('> div:nth-of-type(' + $id + ')' + $frontEndEditorTabDiv).css({
						'visibility': 'visible',
						'position': 'relative',
						'left': '0',
						'display': 'block'
					}).stop().transition({
						'opacity': 1
					}, 400).addClass('visible-tab');
				}
				
				if (clickedTab.parents('.tabbed').find('> div:nth-of-type(' + $id + ') .iframe-embed').length > 0 || 
				clickedTab.parents('.tabbed').find('> div:nth-of-type(' + $id + ') .portfolio-items').length > 0) {
					setTimeout(function () {
						$window.trigger('resize');
					}, 10);
				}
			}
			
			// Waypoint checking
			if ($tabbedClickCount != 0) {
				
				var $currentVisTab = clickedTab.parents('.tabbed').find('> div:nth-of-type(' + $id + ')' + $frontEndEditorTabDiv);
				
				if ($currentVisTab.find('.nectar-progress-bar').length > 0) {
					progressBars();
				}
				if ($currentVisTab.find('.divider-small-border [data-animate="yes"]').length > 0 || 
				$currentVisTab.find('.divider-border [data-animate="yes"]').length > 0) {
					dividers();
				}
				if ($currentVisTab.find('img.img-with-animation').length > 0 ||
				$currentVisTab.find('.col.has-animation').length > 0 ||
				$currentVisTab.find('.nectar_cascading_images').length > 0 ||
				$currentVisTab.find('.wpb_column.has-animation').length > 0) {
					colAndImgAnimations();
					cascadingImageBGSizing();
				}
				if ($currentVisTab.find('.column-image-bg-wrap[data-bg-animation="displace-filter-fade"]').length > 0) {
					
					for (var k = 0; k < $liquidBG_EL.length; k++) {
						
						if ($($liquidBG_EL[k].canvasContainer).parents('.wpb_tab').length > 0 && 
						$($liquidBG_EL[k].canvasContainer).parents('.wpb_tab').css('visibility') != 'hidden') {
							
							// Add bg to container
							if ($($liquidBG_EL[k].canvasContainer).find('.image-added-to-stage').length == 0) {
								$liquidBG_EL[k].imgContainer.addChild($liquidBG_EL[k].bg);
							}
							$($liquidBG_EL[k].canvasContainer).find('.nectar-liquid-bg').addClass('image-added-to-stage');
							
							// Resize calcs
							$liquidBG_EL[k].resize();
							
							// Animate
							if ($($liquidBG_EL[k].canvasContainer).find('.nectar-liquid-bg.animated-in').length == 0) {
								$liquidBG_EL[k].animateProps($liquidBG_EL[k]);
							}
							
						}
					}
				}
				if ($currentVisTab.find('.nectar-milestone').length > 0) {
					milestoneWaypoint();
				}
				if ($currentVisTab.find('.nectar_image_with_hotspots[data-animation="true"]').length > 0) {
					imageWithHotspots();
					setTimeout(function(){
						$window.trigger('resize');
					},100);
				}
				if ($currentVisTab.find('.nectar-fancy-ul').length > 0) {
					nectarFancyUlInit();
				}
				if ($currentVisTab.find('.nectar-split-heading').length > 0) {
					splitLineHeadings();
				}
				if ($currentVisTab.find('.wpb_column[data-border-animation="true"]').length > 0) {
					animatedColBorders();
				}
				if ($currentVisTab.find('.wpb_animate_when_almost_visible').length > 0) {
					vcWaypoints();
				}
				if ($currentVisTab.find('.nectar-animated-title').length > 0) {
					animatedTitles();
				}
				if ($currentVisTab.find('.nectar-highlighted-text').length > 0) {
					highlightedText();
				}
				if ($currentVisTab.find('.nectar_food_menu_item').length > 0) {
					foodMenuItems();
				}
				if (clickedTab.parents('.wpb_row').length > 0) {
					
					if ($currentVisTab.find('.vc_pie_chart').length > 0 ||
					$currentVisTab.find('.wp-video-shortcode').length > 0 ||
					$currentVisTab.find('.post-area.masonry .posts-container').length > 0 ||
					$currentVisTab.find('.twentytwenty-container').length > 0 ||
					clickedTab.parents('#nectar_fullscreen_rows[data-content-overflow="scrollbar"]').length > 0 ||
					clickedTab.parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.wpb_gallery').length > 0 ||
					clickedTab.parents('.wpb_row').next().hasClass('parallax_section')) {
						$window.trigger('resize');
					}
					
					if ($currentVisTab.find('.nectar-flickity').length > 0 && typeof Flickity != 'undefined') {
						var tabbedFlkty = Flickity.data(clickedTab.parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.nectar-flickity')[0]);
						tabbedFlkty.resize();
					}
					
					if ($currentVisTab.find('.nectar-woo-flickity').length > 0 && typeof Flickity != 'undefined') {
						var wootabbedFlkty = Flickity.data(clickedTab.parents('.tabbed').find('> div:nth-of-type(' + $id + ')').find('.nectar-woo-flickity > ul')[0]);
						wootabbedFlkty.resize();
					}
					
				}
				
				//SVG icons
				$currentVisTab.find('.svg-icon-holder').each(function (i) {
					
					var $that = $(this);
					
					setTimeout(function () {
						
						var $animationDelay = 0; 

						if($that.is('[data-animation-delay]') && 
						$that.attr('data-animation-delay').length > 0 && 
						$that.attr('data-animation') != 'false') {
							$animationDelay = $that.attr('data-animation-delay');
						}

						clearTimeout($animatedSVGIconTimeout[i]);
						
						if ($that.attr('data-animation') == 'false') {
							$that.css('opacity', '1');
							$svgIcons[$that.find('svg').attr('id').slice(-1)].finish();
						} else {
							
							$svgIcons[$that.find('svg').attr('id').slice(-1)].reset();
							$animatedSVGIconTimeout[i] = setTimeout(function () {
								$svgIcons[$that.find('svg').attr('id').slice(-1)].play();
							}, $animationDelay);
							
						}
					}, 150);
				});
				
			}
			
			// Fix columns inside tabs
			clickedTab.parents('.tabbed').find('.wpb_row').each(function () {
				if (typeof $(this).find('[class*="vc_col-"]').first().offset() != 'undefined') {
					
					var $firstChildOffset = $(this).find('[class*="vc_col-"]').first().offset().left;
					
					$(this).find('[class*="vc_col-"]').each(function () {
						$(this).removeClass('no-left-margin');
						if ($(this).offset().left < $firstChildOffset + 15) {
							$(this).addClass('no-left-margin');
						} else {
							$(this).removeClass('no-left-margin');
						}
					});
				}
				
			});
			
			$tabbedClickCount++;
			
			// Magic line
			if (clickedTab.parent().parent().find('.magic-line').length > 0) {
				magicLineCalc(clickedTab);
			}

		}
		
		
		/**
		* Tabbed element magic line - used for style "Minimal alt"
		*
		* @since 7.0
		*/
		function magicLineCalc($ele) {
			
			var el, leftPos, ratio;
			
			el = $ele.parent();
			if (el.length) {
				leftPos = el.position().left;
				ratio = el.width();
			} else {
				leftPos = ratio = 0;
			}
			
			$ele.parent().parent()
				.find('.magic-line')
				.css('transform', 'translateX(' + leftPos + 'px) scaleX(' + ratio + ')');
		}
		
		
		/**
		* Tabbed element deep linking.
		*
		* @since 3.0
		*/
		function tabbbedDeepLinking() {
			
			if (typeof nectarGetQueryParam['tab'] != 'undefined') {
				$('.wpb_tabs_nav').each(function () {
					
					$(this).find('li').each(function () {
						
						var $currentText  = $(this).find('a').clone(),
						$getText          = nectarGetQueryParam['tab'],
						$that             = $(this);
						
						$currentText.find('svg').remove();
						$currentText = $currentText.text();
						$currentText = $currentText.replace(/\s+/g, '-').toLowerCase();
						
						// SVG icons.
						if( $currentText.length > 0 && $currentText.substring(0,1) === '-' ) {
							$currentText = $currentText.substring(1);
						}
						
						$getText = $getText.replace(/\s+/g, '-').replace(/</g, '&lt;').replace(/"/g, '&quot;').toLowerCase();
												
						if ($currentText == $getText) {
							
							$(this).find('a').trigger('click');
							
							setTimeout(function () {
								$that.find('a').trigger('click');
							}, 501);
						}
						
					});
					
				});
				
			}
			
		}
		
		
		
		/**
		* Tabbed element initialization.
		*
		* @since 3.0
		*/
		function tabbedInit() {
			
			// Click event
			$body.on('click', '.tabbed > ul li:not(.cta-button) a', function(){
				tabbedChangeSection($(this));
				return false;
			});
			
			$('.tabbed').each(function () {
				
				var $that;
				
				// Handle icons
				$(this).find('.wpb_tab').each(function (i) {
					
					if ($(this).is('[data-tab-icon]') && $(this).attr('data-tab-icon').length > 0) {
						
						$(this)
							.parents('.tabbed')
							.addClass('using-icons');
						
						$(this)
							.parents('.tabbed')
							.find('.wpb_tabs_nav li:nth-child(' + (i + 1) + ') > a')
							.prepend('<i class="' + $(this).attr("data-tab-icon") + '"></i>');
						
					}
					
					// SVG icons
					if ($(this).find('.im-icon-wrap.tab-icon').length > 0) {
						
						var $svg_icon_markup = $(this).find('.im-icon-wrap.tab-icon').detach();
						$(this).parents('.tabbed')
							.find('.wpb_tabs_nav li:nth-child(' + (i + 1) + ') > a')
							.prepend($svg_icon_markup);
					}
					
				});
				

				if ($(this).find('.swiper-container').length == 0 && 
					$(this).find('.testimonial_slider').length == 0 && 
					$(this).find('.portfolio-items:not(".carousel")').length == 0 && 
					$(this).find('.wpb_gallery .portfolio-items').length == 0 && 
					$(this).find('iframe').length == 0) {
						$(this).find('> ul li:first-child a').trigger('click');
				}
				
				if ($(this).find('.testimonial_slider').length > 0 || 
				$(this).find('.portfolio-items:not(".carousel")').length > 0 || 
				$(this).find('.wpb_gallery .portfolio-items').length > 0 || 
				$(this).find('iframe').length > 0) {
					
					$that = $(this);
					$(this).find('.wpb_tab').show().css({
						'opacity': 0,
						'height': '1px'
					});
					
					$(this).find('> ul li a').addClass('loading');
					
					setTimeout(function () {
						$that.find('.wpb_tab').hide().css({
							'opacity': 1,
							'height': 'auto'
						});
						
						$that.find('> ul li a').removeClass('loading');
						$that.find('> ul li:first-child a').trigger('click');
						tabbbedDeepLinking();
						
					}, 900);
				}
				
				$that = $(this);
				
				// Minimal alt effect
				setTimeout(function () {
					if ($that.is('[data-style="minimal_alt"]')) {
						$that.find('> ul').append('<li class="magic-line" />');
						magicLineCalc($that.find('> ul > li:first-child > a'));
					}
				}, 100);
				
				
			});
			
			// Minimal alt resize event.
			if ( $('.tabbed[data-style="minimal_alt"]').length > 0 ) {
				$window.on('smartresize',function(){
					magicLineCalc($('.tabbed[data-style="minimal_alt"] > ul > li > a.active-tab'));
				});
				
			}
			
			
			tabbbedDeepLinking();
			
		}
		
		
		
		
		

		
		/**
		* Toggle Panels element deep linking.
		*
		* @since 3.0
		*/
		function accordionDeepLinking() {
			
			if (typeof nectarGetQueryParam['toggle'] != 'undefined') {
				$('.toggles').each(function () {
					
					$(this).find('.toggle').each(function () {
						var $currentText = $(this).find('h3 a').clone();
						var $getText = nectarGetQueryParam['toggle'];
						
						$($currentText).find('i').remove();
						$currentText = $currentText.text();
						$currentText = $currentText.replace(/\s+/g, '-').toLowerCase();
						$getText = $getText.replace(/\s+/g, '-').replace(/</g, '&lt;').replace(/"/g, '&quot;').toLowerCase();
						
						if ($currentText == $getText) {
							$(this).find('h3 a').trigger('click');
						}
					});
				});
			}
			
		}
		
		
		
		/**
		* Toggle Panels element initialization.
		*
		* @since 3.0
		*/
		function accordionInit() {
			
			// Regular toggle click event
			$body.on('click', '.toggle h3 a', function () {
				
				if (!$(this).parents('.toggles').hasClass('accordion')) {
					
					$(this).parents('.toggle')
						.find('> div')
						.slideToggle(300);
						
					$(this).parents('.toggle')
						.toggleClass('open');
					
					// Switch icon
					if ($(this).parents('.toggle').hasClass('open')) {
						$(this)
							.find('i')
							.attr('class', 'icon-minus-sign');
					} else {
						$(this)
							.find('i')
							.attr('class', 'icon-plus-sign');
					}
					
					if ($(this).parents('.toggle').find('> div .iframe-embed').length > 0 && 
					$(this).parents('.toggle').find('> div iframe.iframe-embed').height() == '0') {
						responsiveVideoIframes();
					}
					
					if ($(this).parents('.full-width-content').length > 0) {
						setTimeout(function () {
							fullWidthContentColumns();
						}, 300);
					}
					
					if ($('#nectar_fullscreen_rows').length > 0) {
						setTimeout(function () {
							$window.trigger('smartresize');
						}, 300);
					}
					return false;
				}
			});
			
			// Accordion click event
			$body.on('click', '.accordion .toggle h3 a', function () {
				
				if ($(this).parents('.toggle').hasClass('open')) {
					return false;
				}
				
				var $t;
				var $parentToggles  = $(this).parents('.toggles');
				var $parentToggle   = $(this).parents('.toggle');
				
				$parentToggles.find('.toggle > div').slideUp(300);
				$parentToggles.find('.toggle h3 a i').attr('class', 'icon-plus-sign');
				$parentToggles.find('.toggle').removeClass('open');
				$parentToggle.find('> div').slideDown(300);
				$parentToggle.addClass('open');
				
				// Switch icon
				if ($parentToggle.hasClass('open')) {
					$(this).find('i').attr('class', 'icon-minus-sign');
				} else {
					$(this).find('i').attr('class', 'icon-plus-sign');
				}
				
				if ($(this).parents('.full-width-content').length > 0) {
					clearTimeout($t);
					$t = setTimeout(function () {
						fullWidthContentColumns();
					}, 400);
				}
				if ($('#nectar_fullscreen_rows').length > 0) {
					clearTimeout($t);
					$t = setTimeout(function () {
						$window.trigger('smartresize');
					}, 400);
				}
				
				return false;
				
			});
			
			
			$('.accordion').each(function () {
				$(this).find('> .toggle').first().addClass('open').find('> div').show();
				$(this).find('> .toggle').first().find('a i').attr('class', 'icon-minus-sign');
			});
			
			
			$('.toggles').each(function () {
				
				var $isAccordion = ($(this).hasClass('accordion')) ? true : false;
				
				$(this).find('.toggle').each(function () {
					if ($(this).find('> div .testimonial_slider').length > 0 || $(this).find('> div iframe').length > 0) {
						var $that = $(this);
						$(this).find('> div').show().css({
							'opacity': 0,
							'height': '1px',
							'padding': '0'
						});
						
						for (var i = 0; i < $testimonialSliders.length; i++) {
							$testimonialSliders[i].testimonialHeightResize();
						}
						
						setTimeout(function () {
							$that.find('> div').hide().css({
								'opacity': 1,
								'height': 'auto',
								'padding': '10px 14px'
							});
							if ($isAccordion == true && $that.index() == 0) {
								$that.find('> div').slideDown(300);
							}
						}, 900);
					}
				});
				
			});
			
			accordionDeepLinking();
			
		}
		
		

		
		
		/**
		* Color hex to rgb
		*
		* @since 3.0
		*/
		function shadeColor(hex, lum) {
					
				// Validate hex string
				hex = String(hex).replace(/[^0-9a-f]/gi, '');
				if (hex.length < 6) {
					hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
				}
				lum = lum || 0;
				
				// Convert to decimal and change luminosity
				var rgb = "#",
				c, i;
				for (i = 0; i < 3; i++) {
					c = parseInt(hex.substr(i * 2, 2), 16);
					c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
					rgb += ("00" + c).substr(c.length);
				}
				
				return rgb;
		}
						
			/**
			* Jumbo size 3D nectar button.
			*
			* @since 3.0
			*/	
			function createExtraJumboSize() {
				
				$('.nectar-3d-transparent-button').each(function () {
					
					if ($(this).css('visibility') != 'visible') {
						return;
					}
					
					var $that   = $(this),
					$size       = $that.attr('data-size'),
					$padding    = 0;
					
					var $vert_height_divider = 1.7;
					
					if ($size == 'extra_jumbo') {
						
						var $font_size;
						
						if (nectarDOMInfo.winW < 1000 && nectarDOMInfo.winW > 690) {
							$padding    = 64;
							$font_size  = 34;
							$that.find('.back-3d rect').attr('stroke-width', '12');
							$vert_height_divider = 1.7;
						} else if (nectarDOMInfo.winW <= 690) {
							$padding    = 46;
							$font_size  = 16;
							$that.find('.back-3d rect').attr('stroke-width', '10');
							$vert_height_divider = 1.7;
						} else {
							$padding    = 100;
							$font_size  = 64;
							$that.find('.back-3d rect').attr('stroke-width', '20');
							$vert_height_divider = 1.6;
						}
						
						
						$that.find('svg text').attr('font-size', $font_size);
						
						var $boundingRect = $(this).find('.back-3d .button-text')[0].getBoundingClientRect(),
						$text_width       = $boundingRect.width,
						$text_height      = $font_size * 1.5;
						
						$that.css({
							'width': ($text_width + $padding * 1.5) + 'px',
							'height': ($text_height + $padding) + 'px'
						});
						
						$that.find('> a').css({
							'height': ($text_height + $padding) + 'px'
						});
						
						$that.find('.back-3d svg, .front-3d svg').css({
							'width': ($text_width + $padding * 1.5) + 'px',
							'height': ($text_height + $padding) + 'px'
						}).attr('viewBox', '0 0 ' + ($text_width + $padding) + ' ' + ($text_height + $padding));
						
						$that.find('svg text').attr('transform', 'matrix(1 0 0 1 ' + ($text_width + $padding * 1.6) / 2 + ' ' + (($text_height + $padding) / $vert_height_divider) + ')');
						$that.find('.front-3d ').css('transform-origin', '50% 50% -' + ($text_height + $padding) / 2 + 'px');
						$that.find('.back-3d').css('transform-origin', '50% 50% -' + ($text_height + $padding) / 2 + 'px');
						
					}
					
				});
				
			}
				
				
			/**
			* Nectar Button custom coloring
			*
			* @since 3.0
			*/
			function coloredButtons() {

				$('.nectar-button.see-through[data-color-override], .nectar-button.see-through-2[data-color-override], .nectar-button.see-through-3[data-color-override]').each(function () {
					
					var $usingMaterialSkin = ($('body.material[data-button-style^="rounded"]').length > 0) ? true : false;
					$(this).css('visibility', 'visible');
					
					if ($(this).hasClass('see-through-3') && $(this).attr('data-color-override') == 'false') {
						return true;
					}
					
					var $color;
					var $that;
					
					if ($(this).attr('data-color-override') != 'false') {
						$color = $(this).attr('data-color-override');
					} else {
						
						if ($(this).parents('.dark').length > 0) {
							$color = '#000000';
						}	else {
							$color = '#ffffff';
						}
						
					}
					
					if (!$(this).hasClass('see-through-3')) {
						$(this).css('color', $color);
					}
					
					$(this).find('i').css('color', $color);
					
					var colorInt        = parseInt($color.substring(1), 16);
					var $hoverColor     = ($(this).has('[data-hover-color-override]')) ? $(this).attr('data-hover-color-override') : 'no-override';
					var $hoverTextColor = ($(this).has('[data-hover-text-color-override]')) ? $(this).attr('data-hover-text-color-override') : '#fff';
					
					var R = (colorInt & 0xFF0000) >> 16;
					var G = (colorInt & 0x00FF00) >> 8;
					var B = (colorInt & 0x0000FF) >> 0;
					
					var $opacityStr = ($(this).hasClass('see-through-3')) ? '1' : '0.75';
					
					$(this).css('border-color', 'rgba(' + R + ',' + G + ',' + B + ',' + $opacityStr + ')');
					
					// Material theme skin buttons w/ icons starting
					if ($usingMaterialSkin) {
						$(this).find('i').css({
							'background-color': 'rgba(' + R + ',' + G + ',' + B + ',1)',
							'box-shadow': '0px 8px 15px rgba(' + R + ',' + G + ',' + B + ',0.24)'
						});
					}
					
					if ($(this).hasClass('see-through')) {
						
						$that = $(this);
						
						$(this).on('mouseenter touchstart', function () {
							$that.css('border-color', 'rgba(' + R + ',' + G + ',' + B + ',1)');
						});
						
						$(this).on('mouseleave touchtouchend', function () {
							$that.css('border-color', 'rgba(' + R + ',' + G + ',' + B + ',1)');
							$opacityStr = ($(this).hasClass('see-through-3')) ? '1' : '0.75';
							$that.css('border-color', 'rgba(' + R + ',' + G + ',' + B + ',' + $opacityStr + ')');
						});
						
					} else {
						
						$(this).find('i').css('color', $hoverTextColor);
						
						if ($hoverColor != 'no-override') {
							
							$that = $(this);
							
							$(this).on('mouseenter touchstart', function () {
								
								$that.css({
									'border-color': $hoverColor,
									'background-color': $hoverColor,
									'color': $hoverTextColor
								});
								
								// Material buttons w/ icons over
								if ($usingMaterialSkin) {
									$that.find('i').css({
										'background-color': '',
										'box-shadow': ''
									});
								}
							});
							
							$(this).on('mouseleave touchtouchend', function () {
								
								$opacityStr = ($(this).hasClass('see-through-3')) ? '1' : '0.75';
								
								if ($usingMaterialSkin) {
									$that.find('i').css({
										'background-color': 'rgba(' + R + ',' + G + ',' + B + ',1)',
										'box-shadow': '0px 8px 15px rgba(' + R + ',' + G + ',' + B + ',0.24)'
									});
								}
								
								if (!$that.hasClass('see-through-3')) {
									$that.css({
										'border-color': 'rgba(' + R + ',' + G + ',' + B + ',' + $opacityStr + ')',
										'background-color': 'transparent',
										'color': $color
									});
								} else {
									$that.css({
										'border-color': 'rgba(' + R + ',' + G + ',' + B + ',' + $opacityStr + ')',
										'background-color': 'transparent'
									});
								}
								
							});

						} else {
							
							$that = $(this);
							
							$(this).on('mouseenter touchstart', function () {
								
								$that.css({
									'border-color': $hoverColor,
									'color': $hoverTextColor
								});
								
							});
							
							$(this).on('mouseleave touchtouchend', function () {
								
								$opacityStr = ($that.hasClass('see-through-3')) ? '1' : '0.75';
								$that.css({
									'border-color': 'rgba(' + R + ',' + G + ',' + B + ',' + $opacityStr + ')',
									'color': $hoverTextColor
								});
								
							});

						}
					}
				});
				
				$('.nectar-button:not(.see-through):not(.see-through-2):not(.see-through-3)[data-color-override]').each(function () {
					
					$(this).css('visibility', 'visible');
					
					if ($(this).attr('data-color-override') != 'false') {
						
						var $color = $(this).attr('data-color-override');

						$(this)
							.removeClass('accent-color')
							.removeClass('extra-color-1')
							.removeClass('extra-color-2')
							.removeClass('extra-color-3')
							.css('background-color', $color);
					}
					
				});
				
				
				// Solid color tilt 
				if ($('.swiper-slide .solid_color_2').length > 0 || $('.tilt-button-inner').length > 0) {
					
					var $tiltButtonCssString = '';
					var $color;
					
					$('.swiper-slide .solid_color_2 a').each(function (i) {
						
						$(this).addClass('instance-' + i);
						
						if ($(this).attr('data-color-override') != 'false') {
							$color = $(this).attr('data-color-override');
						} else {
							if ($(this).parents('.dark').length > 0) {
								$color = '#000000';
							}
							else {
								$color = '#ffffff';
							}
						}
						
						$(this).css('color', $color);
						$(this).find('i').css('color', $color);
						
						var $currentColor = $(this).css('background-color'),
						$topColor         = shadeColor($currentColor, 0.13),
						$bottomColor      = shadeColor($currentColor, -0.15);
						
						$tiltButtonCssString += '.swiper-slide .solid_color_2 a.instance-' + i + ':after { background-color: ' + $topColor + ';  }' + ' .swiper-slide .solid_color_2 a.instance-' + i + ':before { background-color: ' + $bottomColor + '; } ';
						
					});
					
					
					$('.tilt-button-wrap a').each(function (i) {
						
						$(this).addClass('instance-' + i);
						
						var $currentColor = $(this).css('background-color');
						var $color;
						
						if ($(this).attr('data-color-override') != 'false') {
							$color = $(this).attr('data-color-override');
							$(this).css('background-color', $color);
							$currentColor = $color;
						}
						
						var $topColor = shadeColor($currentColor, 0.13),
						$bottomColor  = shadeColor($currentColor, -0.15);
						
						$tiltButtonCssString += '.tilt-button-wrap a.instance-' + i + ':after { background-color: ' + $topColor + ';  }' + ' .tilt-button-wrap a.instance-' + i + ':before { background-color: ' + $bottomColor + '; } ';
						
					});
					
					// Style
					nectarCreateStyle($tiltButtonCssString, 'tilt-button');
					
				}
				
				
				// Transparent 3D
				if ($('.nectar-3d-transparent-button').length > 0) {
					
					var $3dTransButtonCssString = '';
					$('.nectar-3d-transparent-button').each(function (i) {
						
						var $that = $(this),
						$size 		= $that.attr('data-size'),
						$padding 	= 0,
						v1 				= 1.5,
						v2 				= 1.65,
						$font_size;
						
						// Size
						if ($size == 'large') {
							$padding 		= 46;
							$font_size 	= 16;
							v1 					= 1.5;
							v2 					= 1.7;
						} else if ($size == 'medium') {
							$padding 		= 30;
							$font_size 	= 16;
						} else if ($size == 'small') {
							$padding 		= 20;
							$font_size 	= 12;
						} else if ($size == 'jumbo') {
							$padding 		= 54;
							$font_size 	= 24;
							v1 					= 1.5;
							v2 					= 1.68;
						} else if ($size == 'extra_jumbo') {
							$padding 		= 100;
							$font_size 	= 64;
							v1 					= 1.6;
							v2 					= 1.6;
						}
						
						$that.find('svg text').attr('font-size', $font_size);
						
						var $boundingRect = $(this).find('.back-3d .button-text')[0].getBoundingClientRect(),
						$text_width       = $boundingRect.width,
						$text_height      = $font_size * 1.5;
						
						$that.css({
							'width': ($text_width + $padding * 1.5) + 'px',
							'height': ($text_height + $padding) + 'px'
						});
						
						$that.find('> a').css({
							'height': ($text_height + $padding) + 'px'
						});
						
						$that.find('.back-3d svg, .front-3d svg').css({
							'width': ($text_width + $padding * 1.5) + 'px',
							'height': ($text_height + $padding) + 'px'
						}).attr('viewBox', '0 0 ' + ($text_width + $padding) + ' ' + ($text_height + $padding));

						$that.find('svg text').attr('transform', 'matrix(1 0 0 1 ' + ($text_width + $padding * v1) / 2 + ' ' + (($text_height + $padding) / v2) + ')');
						$that.find('.front-3d, .back-3d').css('transform-origin', '50% 50% -' + ($text_height + $padding) / 2 + 'px');
						
						// Mask
						$(this).find('.front-3d svg > rect').attr('id', 'masked-rect-id-' + i);
						$(this).find('.front-3d defs mask').attr('id', 'button-text-mask-' + i);
						
						$that.css('visibility', 'visible');
						$3dTransButtonCssString += '#masked-rect-id-' + i + ' { mask: url(#button-text-mask-' + i + '); -webkit-mask: url(#button-text-mask-' + i + ')} ';
						
					});
					
					// Extra jumbo resize
					createExtraJumboSize();
					$window.on('smartresize', createExtraJumboSize);
					
					// Style
					nectarCreateStyle($3dTransButtonCssString, 'nectar-td-button');
					
				}
				
				// Gradient btn init
				setTimeout(function () {
					$('.nectar-button[class*="color-gradient"] .start').removeClass('loading');
				}, 150);
				// No grad for ff
				if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 || 
				navigator.userAgent.indexOf("MSIE ") > -1 || 
				navigator.userAgent.match(/Trident\/7\./)) {
					$('.nectar-button[class*="color-gradient"] .start').addClass('no-text-grad');
				}
			}
			
			
			
				
			/**
			* Shortcode icon large style
			*
			* @since 1.0
			*/
			function largeIconHover() {
				$('.icon-3x').each(function () {
					$(this).closest('.col').on('mouseenter', function () {
						$(this).find('.icon-3x').addClass('hovered');
					});
					
					$(this).closest('.col').on('mouseleave', function () {
						$(this).find('.icon-3x').removeClass('hovered');
					});
				});
				
				if (navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.match(/Trident\/7\./)) {
					$('[class^="icon-"][class*="color-gradient"], .nectar_icon_wrap[data-color*="extra-color-gradient"] .nectar_icon, .nectar-gradient-text').addClass('no-grad');
				}
			}
			
			

				/**
				* Team member element - fullscreen style.
				*
				* @since 7.0
				*/
				function teamMemberFullscreen() {
					
					if ( $('.team-member').length === 0 ) {
						return;
					}
					
					// Open click event
					$body.on('click', '.team-member[data-style="bio_fullscreen"]', function () {
						
						if ($('.nectar_team_member_overlay').length > 0) {
							return;
						}
						
						var $usingBoxedClass  = ($('body > #boxed').length > 0) ? 'in-boxed' : null,
						$teamMemberMeta       = $(this).find('.nectar_team_bio').html(),
						$teamMemberImg        = ($(this).find('.nectar_team_bio_img[data-img-src]').length > 0) ? $(this).find('.nectar_team_bio_img').attr('data-img-src') : '';
						
						$body.append('<div class="nectar_team_member_overlay ' + $usingBoxedClass + '"><div class="inner-wrap"><div class="team_member_details"><div class="bio-inner"><span class="mobile-close"></span><h2>' + $(this).find('.team-meta h3').html() + '</h2><div class="title">' + $(this).find('.team-meta p').html() + '</div><div class="team-desc">' + $teamMemberMeta + '</div></div></div><div class="team_member_picture"><div class="team_member_image_bg_cover"></div><div class="team_member_picture_wrap"><div class="team_member_image"></div></div></div></div></div><div class="nectar_team_member_close ' + $usingBoxedClass + '"><div class="inner"></div></div>');
						
						if ($teamMemberImg.length > 0) {
							
							// Fade in img on load
							var teamTmpImg = new Image();
							teamTmpImg.src = $teamMemberImg;
							teamTmpImg.onload = function () {
								$('.nectar_team_member_overlay .team_member_image').css('opacity', '1');
							};
							$('.nectar_team_member_overlay .team_member_image').css({
								'background-image': 'url("' + $teamMemberImg + '")'
							});
						}
						
						var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $window.width() > 1000) ? 0 : $headerOuterEl.height();
						$('.nectar_team_member_overlay .inner-wrap').css({
							'padding-top': $headerNavSpace
						});
						
						// No-scroll class - ios ready
						if ($('.using-mobile-browser').length > 0) {
							$('body,html').addClass('nectar-no-scrolling');
						}
						
						teamFullscreenResize();
						
						// Transition in
						$('.nectar_team_member_overlay')
							.addClass('open')
							.addClass('animating');
						
						setTimeout(function () {
							$('.nectar_team_member_close').addClass('visible');
							$('.nectar_team_member_overlay').removeClass('animating');
						}, 500);
						
						// Bind close mousemove
						$(document).on('mousemove', teamMousemoveOn);
						
						// Bind overflow
						if ($('.using-mobile-browser').length == 0) {
							fullscreenBioScrolling();
						}
						
						if ($('.team-member[data-style="bio_fullscreen"]').length > 0 && nectarDOMInfo.usingMobileBrowser) {
							$('.nectar_team_member_overlay').addClass('on-mobile');
						}
						
					});
					
					// Close click event
					$body.on('click', '.nectar_team_member_overlay', function () {
						
						if (!$(this).hasClass('animating')) {
							
							$('.nectar_team_member_overlay').removeClass('open');
							$('.nectar_team_member_close').removeClass('visible');
							
							if ($('.using-mobile-browser').length > 0) {
								$('body,html').removeClass('nectar-no-scrolling');
							}
							
							setTimeout(function () {
								
								// Unbind close mousemove
								$(document).off('mousemove', teamMousemoveOn);
								
								$('.nectar_team_member_overlay, .nectar_team_member_close').remove();
								
							}, 820);
						}
					});
					
					if ($('.team-member[data-style="bio_fullscreen"]').length > 0) {
						$window.on('resize', teamFullscreenResize);
					}

				}
				
				
				/**
				* Team member element fullscreen resize event.
				*
				* @since 7.0
				*/
				function teamFullscreenResize() {
					var $leftHeaderSize = ($('body[data-header-format="left-header"]').length > 0 && $window.width() > 1000) ? 275 : 0;
					$('.nectar_team_member_overlay').css({
						'width': $window.width() - $leftHeaderSize,
						'left': $leftHeaderSize
					});
				}
				
				/**
				* Team member element fullscreen overflow scrolling event.
				*
				* @since 7.0
				*/
				function fullscreenBioScrolling() {
					$('.nectar_team_member_overlay .inner-wrap').mousewheel(function (event, delta) {
						this.scrollTop -= (delta * 30);
						event.preventDefault();
					});
					
				}
				
				/**
				* Team member element fullscreen close button follow on mousemove.
				*
				* @since 7.0
				*/
				function teamMousemoveOn(e) {
					
					if ($('a:hover').length > 0) {
						$('.nectar_team_member_close .inner').removeClass('visible');
					} else {
						$('.nectar_team_member_close .inner').addClass('visible');
					}
					$('.nectar_team_member_close').css({
						left: e.pageX - 26,
						top: e.pageY - nectarDOMInfo.scrollTop - 29
					});
				}
				
				

				

				
				
				/**
				* WPBakery column element BG hover
				*
				* @since 5.0
				*/
				function columnBGColors() {
					
					var $columnColorCSS = '';
					
					$('.wpb_column').each(function (i) {
						
						$(this).removeClass(function (index, className) {
							return (className.match(/(^|\s)instance-\S+/g) || []).join(' ');
						});
						
						$(this).addClass('instance-' + i);
						
						// BG color
						if ($(this).attr('data-has-bg-color') == 'true') {
							if ($(this).is('[data-animation*="reveal"]') && $(this).hasClass('has-animation')) {
								$columnColorCSS += '.wpb_column.instance-' + i + ' > .column-bg-overlay { background-color:' + $(this).attr('data-bg-color') + ';  opacity: ' + $(this).attr('data-bg-opacity') + '; }';
							} else {
								$columnColorCSS += '.wpb_column.instance-' + i + ' > .column-bg-overlay{ background-color:' + $(this).attr('data-bg-color') + ';  opacity: ' + $(this).attr('data-bg-opacity') + '; }';
							}
						}
						
						// Hover bg color
						if ($(this).is('[data-hover-bg^="#"]')) {
							if ($(this).is('[data-animation*="reveal"]') && $(this).hasClass('has-animation')) {
								$columnColorCSS += '.wpb_column.instance-' + i + ':hover > .column-bg-overlay { background-color: ' + $(this).attr('data-hover-bg') + '!important; opacity: ' + $(this).attr('data-hover-bg-opacity') + '!important; }';
							} else {
								$columnColorCSS += '.wpb_column.instance-' + i + ':hover > .column-bg-overlay { background-color: ' + $(this).attr('data-hover-bg') + '!important; opacity: ' + $(this).attr('data-hover-bg-opacity') + '!important; }';
							}
							
						}
					});
					
					// Style
					nectarCreateStyle($columnColorCSS, 'column-bg-colors');
					
				}
				


				/**
				* Displace filter column/row BG effect
				*
				* @since 10.5
				*/
				function nectarLiquidBGs() {
					$liquidBG_EL = [];
					
					if (typeof NectarLiquid == 'undefined' || nectarDOMInfo.usingFrontEndEditor) {
						return;
					}
					
					$('.row-bg-wrap[data-bg-animation*="displace-filter"] .row-bg.using-image, .column-image-bg-wrap[data-bg-animation*="displace-filter"] .column-image-bg').each(function (i) {
						
						var $that_el = $(this);
						var $type;
						var $el_type;
						
						if ($(this).is('.row-bg')) {
							$type = $(this).parents('.row-bg-wrap').attr('data-bg-animation');
							$el_type = 'row';
						} 
						else if ($(this).is('.column-image-bg')) {
							$type = $(this).parents('.column-image-bg-wrap').attr('data-bg-animation');
							$el_type = 'col';
						}
						
						$liquidBG_EL[i] = new NectarLiquid($that_el, $type, $el_type);
						
					});
				}
				
				
				
				/**
				* Morphing outline element creation.
				*
				* @since 5.0
				*/
				function morphingOutlines() {
					
					if ($('.morphing-outline').length > 0) {
						
						var $morphingOutlineCSS 	= '',
						$frontEndEditorMOSelector = ($('body.vc_editor').length > 0) ? '' : '>';
						
						$('.morphing-outline').each(function (i) {
							
							$(this).removeClass(function (index, className) {
								return (className.match(/(^|\s)instance-\S+/g) || []).join(' ');
							});
							
							$(this).addClass('instance-' + i).css({
								'visibility': 'visible'
							});
							
							var $width  = $(this).find('.inner').width(),
							$height     = $(this).find('.inner').height(),
							$border     = parseInt($(this).attr("data-border-thickness")),
							$hover      = ($('body[data-button-style*="rounded"]').length > 0) ? ':hover' : '',
							$hover2     = ($('body[data-button-style*="rounded"]').length > 0) ? '' : ':hover';
							
							$morphingOutlineCSS += 'body .morphing-outline.instance-' + i + ' .inner > * { color: ' + $(this).attr("data-starting-color") + '; } ';
							$morphingOutlineCSS += 'body .morphing-outline.instance-' + i + ' .inner:after  { border-width:' + $(this).attr("data-border-thickness") + 'px ; border-color: ' + $(this).attr("data-starting-color") + '; } ';
							
							$morphingOutlineCSS += 'body .wpb_column:hover > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner > *, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner > * { color: ' + $(this).attr("data-hover-color") + '; } ';
							$morphingOutlineCSS += 'body .wpb_column:hover > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after  { border-color: ' + $(this).attr("data-hover-color") + '; } ';
						
							// Padding calcs
							$morphingOutlineCSS += 'body .wpb_column' + $hover2 + ' > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column' + $hover2 + ' > .vc_column-inner > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after { padding: ' + (($width + 100 + $border * 2 - $height) / 2 - $border) + 'px 50px}';
							$morphingOutlineCSS += '.morphing-outline.instance-' + i + ' { padding: ' + (30 + ($width + 80 + $border * 2 - $height) / 2 - $border) + 'px 50px}'; 
							$morphingOutlineCSS += 'body .wpb_column' + $hover2 + ' > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column' + $hover2 + ' > .vc_column-inner > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after { top: -' + parseInt((($width + 100 + $border * 2 - $height) / 2 - $border) + $border) + 'px }';
							
							$morphingOutlineCSS += 'body .wpb_column > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column > .vc_column-inner > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after { left: -' + parseInt(50 + $border) + 'px }';
							
							// Hover
							$morphingOutlineCSS += 'body .wpb_column' + $hover + ' > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column' + $hover + ' > .vc_column-inner > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after { padding: 50px 50px}';
							$morphingOutlineCSS += 'body .wpb_column' + $hover + ' > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after, body .wpb_column' + $hover + ' > .vc_column-inner > .wpb_wrapper ' + $frontEndEditorMOSelector + ' .morphing-outline.instance-' + i + ' .inner:after { top: -' + parseInt(50 + $border) + 'px }';
							
						});
						
						// Style
						nectarCreateStyle($morphingOutlineCSS, 'morphing-outlines');
						
					}
					
				}
				
				
				/**
				* Morphing outline element initialization.
				*
				* @since 5.0
				*/
				function morphingOutlinesInit() {
					
					if($('.morphing-outline').length > 0) {
						
						// Create style.
						setTimeout(morphingOutlines, 100);
						setTimeout(fullWidthContentColumns, 125);
						
						// Handle resize.
						$window.on('smartresize', morphingOutlines);
						
					}
					
				}
				
			

				
				/**
				* SVG icon element animations
				*
				* @since 6.0
				* @see waypoints
				*/
				function svgAnimations() {
					
					var $svgOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
					
					if ($svgIcons.length == 0) {
						
						$('.svg-icon-holder:not(.animated-in)').has('svg').each(function (i) {
							
							var $that = $(this);
							
							if (nectarDOMInfo.usingMobileBrowser) {
								$that.attr('data-animation', 'false');
							}
							// Size
							$that.find('svg').css({
								'height': parseInt($that.attr('data-size')) + 'px',
								'width': parseInt($that.attr('data-size')) + 'px'
							});
							
							// Animation
							$(this).find('svg').attr('id', 'nectar-svg-animation-instance-' + i);
							
							var $animationSpeed = ($that.is('[data-animation-speed]') && $that.attr('data-animation-speed').length > 0) ? $that.attr('data-animation-speed') : 200;
							
							if ($that.attr('data-animation') == 'false') {
								$animationSpeed = 1;
								$that.css('opacity', '1');
							}
							
							if (!$that.hasClass('bound')) {
								$svgIcons[i] = new Vivus($that.find('svg').attr('id'), {
									type: 'delayed',
									pathTimingFunction: Vivus.EASE_OUT,
									animTimingFunction: Vivus.LINEAR,
									duration: $animationSpeed,
									onReady: svgInit
								});
							}
							
							if ($animationSpeed !== 1) {
								
								var waypoint = new Waypoint({
									element: $that,
									handler: function () {
										if ($that.hasClass('animated-in')) {
											waypoint.destroy();
											return;
										}
										
										checkIfReady();
										$that.addClass('animated-in');
										waypoint.destroy();
									},
									offset: $svgOffsetPos
									
								});
								
							} else {
								checkIfReady();
							}
							
							function checkIfReady() {
								
								var $animationDelay = 0; 
								
								if($that.is('[data-animation-delay]') && 
								$that.attr('data-animation-delay').length > 0 && 
								$that.attr('data-animation') != 'false') {
									$animationDelay = $that.attr('data-animation-delay');
								}
								
								var $iconID = $that.find('svg').attr('id').replace(/[^0-9]/g, '');
								
								if ($svgIcons[$iconID].isReady == true) {
									setTimeout(function () {
										$that.css('opacity', '1');
										$svgIcons[$iconID].reset().play();
									}, $animationDelay);
								} else {
									setTimeout(checkIfReady, 50);
								}
							}
							
							function svgInit() {
								
								//set size
								$that.css({
									'height': parseInt($that.attr('data-size')) + 'px',
									'width': parseInt($that.attr('data-size')) + 'px'
								});
								
							}
							
							$that.addClass('bound');
							
						});
						

						// SVG in equal height column resize
						if ($('.vc_row-o-equal-height .svg-icon-holder[data-animation="true"]').length > 0 && 
						$('#nectar_fullscreen_rows').length == 0) {
							
							$window.on('smartresize', function () {
								clearTimeout($svgResizeTimeout);
								$svgResizeTimeout = setTimeout(function () {
									
									if ($svgIcons.length > 0) {
										$('.svg-icon-holder.animated-in').each(function () {
											
											$(this).css('opacity', '1');
											if ($(this).is('[id]')) {
												var $iconID = $(this).attr('id').replace(/[^0-9]/g, '');
												$svgIcons[$iconID].finish();
											}
											
										});
									}
									
								}, 300);
								
							});
							
						}
						
					} 
					
					// After svg animated icons initalized
					else {
						$('.svg-icon-holder').addClass('animated-in').css('opacity', '1');
					}
					
					// Full vc row support
					$('#nectar_fullscreen_rows .svg-icon-holder.animated-in').has('svg').each(function (i) {
						
						var $animationDelay = 0; 
						
						if($(this).is('[data-animation-delay]') && 
						$(this).attr('data-animation-delay').length > 0 && 
						$(this).attr('data-animation') != 'false') {
							$animationDelay = $(this).attr('data-animation-delay');
						}
						
						var $that = $(this);
						
						var $iconID = $that.find('svg').attr('id').replace(/[^0-9]/g, '');
						
						clearTimeout($animatedSVGIconTimeout[i]);
						
						if ($that.attr('data-animation') == 'false') {
							
							$that.css('opacity', '1');
							$svgIcons[$iconID].finish();
							
						} else {
							
							if ($(this).parents('.active').length > 0 || 
							$(this).parents('#footer-outer').length > 0 || 
							$('body.mobile').length > 0) {
								
								$svgIcons[$iconID].reset();
								$animatedSVGIconTimeout[i] = setTimeout(function () {
									$svgIcons[$iconID].play();
								}, $animationDelay);
								
							} else {
								$svgIcons[$iconID].reset().stop();
							}
						}
					});
					
				}
				
				
				
				/**
				* Fancy unordered list element initialization.
				*
				* @since 4.0
				* @see waypoints
				*/
				function nectarFancyUlInit() {
					
					$($fullscreenSelector + '.nectar-fancy-ul').each(function () {

						var $icon       = $(this).attr('data-list-icon'),
						$color          = $(this).attr('data-color'),
						$animation      = $(this).attr('data-animation'),
						$animationDelay = 0; 
						
						if($(this).is('[data-animation-delay]') && 
							$(this).attr('data-animation-delay').length > 0 && 
							$(this).attr('data-animation') != 'false') {
							$animationDelay = $(this).attr('data-animation-delay');
						}
						
						$(this).find('li').each(function () {
							if ($(this).find('> i').length == 0) {
								$(this).prepend('<i class="icon-default-style ' + $icon + ' ' + $color + '"></i> ');
							}
						});
						
						
						if ($animation == 'true') {
							
							var $that = $(this),
							waypoint 	= new Waypoint({
								element: $that,
								handler: function () {
									
									if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
										waypoint.destroy();
										return;
									}
									
									setTimeout(function () {
										$that.find('li').each(function (i) {
											var $that = $(this);
											$that.delay(i * 220).transition({
												'opacity': '1',
												'left': '0'
											}, 220, 'easeOutCubic');
										});
									}, $animationDelay);
									
									$that.addClass('animated-in');
									waypoint.destroy();
								},
								offset: 'bottom-in-view'
								
							});
							
						}
						
					});
					
				}
				
				

				/**
				* Flipbox element height calculations.
				*
				* @since 7.0
				*/
				function flipBoxHeights() {
					
					$('.nectar-flip-box').each(function () {
						
						var $flipBoxMinHeight = parseInt($(this).attr('data-min-height')),
						$flipBoxHeight        = $(this).find('.flip-box-front .inner').height();
						
						if ($(this).find('.flip-box-back .inner').height() > $(this).find('.flip-box-front .inner').height()) {
							$flipBoxHeight = $(this).find('.flip-box-back .inner').height();
						}
						
						if ($flipBoxHeight >= $flipBoxMinHeight - 80) {
							$(this).find('> div').css('height', $flipBoxHeight + 80);
						} else {
							$(this).find('> div').css('height', 'auto');
						}
						
						// Safari needs 3D translate.
						if ($(this).parent().hasClass('wpb_wrapper')) {
							$(this).parent().css('transform', 'translateZ(0)');
						}
						
					});
				}
				
				
				
				
				/**
				* Flipbox element events.
				*
				* @since 7.0
				*/
				function flipBoxInit() {
					
					if( $('.nectar-flip-box').length > 0 ) {
						
						// Mobile gets click.
						if (nectarDOMInfo.usingMobileBrowser) {
							$body.on('click', '.nectar-flip-box', function () {
								$(this).toggleClass('flipped');
							});
						}
						
						flipBoxHeights();
						
						// Handle resize.
						$window.on('smartresize', flipBoxHeights);
					}
					
				}
				
				


				/**
				* Parallax Scrolling
				*
				* @since 3.0
				*/
				$.fn.parallaxScroll = function (xpos, speedFactor, outerHeight) {
					
					var $windowDOMWidth = nectarDOMInfo.winW,
					$windowDOMHeight    = nectarDOMInfo.winH,
					$orientationChange  = 0,
					$this               = $(this),
					firstTop            = $this.offset().top;
					
					// Get the starting position of each element to have parallax applied to it		
					$this.each(function () {
						firstTop = $this.offset().top;
					});
					
					var getHeight = function (jqo) {
						return jqo.outerHeight(true);
					};

					// setup defaults if arguments aren't specified
					if (arguments.length < 1 || xpos === null) {
						xpos = "50%";
					}
					if (arguments.length < 2 || speedFactor === null) {
						speedFactor = 0.25;
					}
					if (arguments.length < 3 || outerHeight === null) {
						outerHeight = true;
					}
					
					var $onMobileBrowser      = nectarDOMInfo.usingMobileBrowser,
					classic_mobile_menu_open  = false,
					firstSection              = false,
					$element                  = $this,
					height                    = getHeight($element);
					
					
					$this.find('.row-bg.using-image, .page-header-bg-image, .image-bg, .video-wrap').addClass('translate');
					
					setInterval(function () {
						
						height = getHeight($element);
						classic_mobile_menu_open = ($('body.classic_mobile_menu_open.mobile').length > 0) ? true : false;
						
					}, 600);
					

					if($element.parents('.top-level').length > 0 && $element.parents('.parallax_slider_outer').length > 0 || 
					$element.parents('.top-level').length > 0 && $element.is('.nectar-recent-posts-single_featured') || 
					$element.is('.wpb_row.top-level') || 
					$('.wpb_row').length == 0) {
						firstSection = true;
					}
					
					if ($('.wpb_row').length == 0 && $element.parents('.parallax_slider_outer').length > 0 && $element.is('[data-full-width="true"]') ||
					($('#portfolio-extra').length > 0 && $element.parents('.parallax_slider_outer').length > 0 && $element.parents('.wpb_row').length > 0 && $element.parents('.wpb_row').index() == '0')) {
						firstSection = true;
					}
					
					if (nectarDOMInfo.usingFrontEndEditor) {
						firstSection = false;
					}
					
					var nectarSliderElBool = $this.is('.nectar-slider-wrap');
					var pageHeaderBool     = ($this.find('.page-header-bg-image').length > 0) ? true : false;
					var $elToParallax      = false;
					
					if (nectarSliderElBool) {
						
						if ($this.find('.video-wrap').length > 0 || $this.find('.image-bg').length > 0) {
							$elToParallax = $this.find('.video-wrap, .image-bg');
						}
						
					} else {
						
						if ($this.find('.row-bg.using-image').length > 0) {
							$elToParallax = $this.find('.row-bg.using-image');
						} else if ($this.find('.page-header-bg-image').length > 0) {
							$elToParallax = $this.find('.page-header-bg-image');
						}
						
					}
					
					
					function update() {
						
						firstTop = $element.offset().top;

						// Check if totally above or totally below viewport.
						if ($elToParallax == false || 
							firstTop + height < nectarDOMInfo.scrollTop || 
							firstTop > nectarDOMInfo.scrollTop + nectarDOMInfo.winH || 
							$('body.material-ocm-open').length > 0) {
							// Skip processing.
						} else {
							
							// Nectar slider
							if (nectarSliderElBool) {
								
								if (firstSection) {
									// Top level row
									if (!classic_mobile_menu_open) {
										$this.find('.video-wrap, .image-bg').css({
											'transform': 'translate3d(0, ' + parseFloat(nectarDOMInfo.scrollTop * speedFactor) + 'px, 0)'
										});
									}
								} else {
									$this.find('.video-wrap, .image-bg').css({
										'transform': 'translate3d(0, ' + parseFloat((($windowDOMHeight + nectarDOMInfo.scrollTop - firstTop) * speedFactor)) + 'px, 0)'
									});
								}
								
							} else {
								
								// Rows
								if (firstSection) {
									// Top level row
									if (!classic_mobile_menu_open) {
										$elToParallax.css({
											'transform': 'translate3d(0, ' + parseFloat(nectarDOMInfo.scrollTop * speedFactor) + 'px, 0)'
										});
									}
								} else {
									// Regular rows further down page
									$elToParallax.css({
										'transform': 'translate3d(0, ' + parseFloat((($windowDOMHeight + nectarDOMInfo.scrollTop - firstTop) * speedFactor)) + 'px, 0), scale(1.005)'
									});
								}
								
								// Page header
								if (pageHeaderBool && !classic_mobile_menu_open) {
									$elToParallax.css({
										'transform': 'translate3d(0, ' + parseFloat(nectarDOMInfo.scrollTop * speedFactor) + 'px, 0)'
									});
								}
								
							}

						}
						
						
						//if on mobile, auto RAF
						if ($onMobileBrowser) {
							requestAnimationFrame(update);
						}
						
					}
					
					if (window.addEventListener) {
						
							if (nectarDOMInfo.usingFrontEndEditor || !nectarDOMInfo.usingMobileBrowser) {
								$window.on('resize', function () {
									$windowDOMWidth = nectarDOMInfo.winW;
									$windowDOMHeight = nectarDOMInfo.winH;
								});
							}
							
							if (nectarDOMInfo.usingFrontEndEditor) {
								
								$window.on('scroll.parallaxSections', update);
								
							} else if (!nectarDOMInfo.usingMobileBrowser) {
								
								window.addEventListener('scroll', function () {
									requestAnimationFrame(update);
								}, false);
								
							} else {
								
								//if on mobile, auto RAF
								requestAnimationFrame(update);

								window.addEventListener("orientationchange", function () {
									$orientationChange = 1;
								});
								
								$window.on('resize', function () {
									if (($window.width() != $windowDOMWidth && $window.height != $windowDOMHeight) || $orientationChange == 1) {
										
										//store the current window dimensions
										$windowDOMWidth = nectarDOMInfo.winW;
										$windowDOMHeight = nectarDOMInfo.winH;
										
										$orientationChange = 0;
									}
								});
								
							}
						
					}
					
					$window.on('resize.parallaxSections', update);
					
					update();
					
				};
				
				
				
				
				/**
				* Nectar Slider force full width parent row when using full width element option.
				*
				* @since 4.0
				*/
				function fullWidthSectionsPreInit() {
					$('.wpb_row .vc_col-sm-12 .nectar-slider-wrap[data-full-width="true"]').each(function () {
						if ($(this).parents('.wpb_row.full-width-section').length == 0 && $(this).parents('.wpb_row.full-width-content').length == 0) {
							$(this).parents('.wpb_row').addClass('full-width-section');
						}
					});
				}
				
				
				
				/**
				* Full width section calculations.
				*
				* @since 4.0
				*/
				function fullWidthSections() {
					
					var $windowInnerWidth = nectarDOMInfo.winW,
					$bodyBorderWidth      = ($('.body-border-right').length > 0 && $windowInnerWidth > 1000) ? parseInt($('.body-border-right').width()) * 2 : 0,
					$container_width      = ($('.container-wrap').length > 0) ? parseInt($('.container-wrap').outerWidth()) : $window.width();
					
					var $windowWidth,
					$justOutOfSight,
					$mainContentWidth;
					
					if ($('#boxed').length == 1) {
						$justOutOfSight = ((parseInt($('.container-wrap').width()) - parseInt($('.main-content').width())) / 2) + 4;
					} else {
						
						// Ext responsive mode is on - add the extra padding into the calcs
						var $extResponsivePadding = ($('body[data-ext-responsive="true"]').length > 0 && $windowInnerWidth >= 1000) ? 180 : 0;
						
						if ($container_width - $bodyBorderWidth <= parseInt($('.main-content').css('max-width'))) {
							$windowWidth = parseInt($('.main-content').css('max-width'));
						} else {
							$windowWidth = $container_width - $bodyBorderWidth;
						}
						
						
						var $contentWidth = parseInt($('.main-content').css('max-width'));
						
						// Single post fullwidth
						if ($('body.single-post[data-ext-responsive="true"]').length > 0 && $('.container-wrap.no-sidebar').length > 0) {
							$contentWidth = $('.post-area').width();
							$extResponsivePadding = 0;
						}
						
						$justOutOfSight = Math.ceil((($windowWidth + $extResponsivePadding - $contentWidth) / 2));
					}
					
					
					// Full width content row type.
					$('.carousel-outer').has('.carousel-wrap[data-full-width="true"]').css('overflow', 'visible');
					
					$('.carousel-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), .full-width-content').each(function () {
						
						var $leftHeaderSize = ($('#header-outer[data-format="left-header"]').length > 0 && $windowInnerWidth >= 1000) ? parseInt($('#header-outer[data-format="left-header"]').width()) : 0;
						var $bodyBorderWidth = ($('.body-border-right').length > 0 && $windowInnerWidth > 1000) ? (parseInt($('.body-border-right').width()) * 2) - 2 : 0;
						
						// Single post fullwidth.
						if ($('#boxed').length == 1) {
							
							$mainContentWidth = ($('#nectar_fullscreen_rows').length == 0) ? parseInt($('.main-content').width()) : parseInt($(this).parents('.container').width());
							
							if ($('body.single-post[data-ext-responsive="true"]').length > 0 && $('.container-wrap.no-sidebar').length > 0 && $(this).parents('.post-area').length > 0) {
								$contentWidth         = $('.post-area').width();
								$extResponsivePadding = 0;
								$windowWidth          = $container_width - $bodyBorderWidth;
								$justOutOfSight       = Math.ceil((($windowWidth + $extResponsivePadding - $contentWidth) / 2));
							} else {
								if ($(this).parents('.page-submenu').length > 0) {
									$justOutOfSight = ((parseInt($('.container-wrap').width()) - $mainContentWidth) / 2);
								}
								else {
									$justOutOfSight = ((parseInt($('.container-wrap').width()) - $mainContentWidth) / 2) + 4;
								}
							}
						} else {
							
							if ($('body.single-post[data-ext-responsive="true"]').length > 0 && $('.container-wrap.no-sidebar').length > 0 && $(this).parents('.post-area').length > 0) {
								
								$contentWidth         = $('.post-area').width();
								$extResponsivePadding = 0;
								$windowWidth          = $container_width - $bodyBorderWidth;
							
							} else {
								
								var $mainContentMaxWidth = ($('#nectar_fullscreen_rows').length == 0) ? parseInt($('.main-content').css('max-width')) : parseInt($(this).parents('.container').css('max-width'));
								
								if ($container_width - $bodyBorderWidth <= $mainContentMaxWidth) {
									$windowWidth = $mainContentMaxWidth;
								}
								
								$contentWidth         = $mainContentMaxWidth;
								$extResponsivePadding = ($('body[data-ext-responsive="true"]').length > 0 && nectarDOMInfo.winW >= 1000) ? 180 : 0;
								
								if ($leftHeaderSize > 0) {
									$extResponsivePadding = ($('body[data-ext-responsive="true"]').length > 0 && nectarDOMInfo.winW >= 1000) ? 120 : 0;
								}
								
							}
							
							$justOutOfSight = Math.ceil((($windowWidth + $extResponsivePadding - $contentWidth) / 2));
						}
						
						var $extraSpace = 0;
						if ($(this).hasClass('carousel-wrap')) {
							$extraSpace = 1;
						}
						if ($(this).hasClass('portfolio-items')) {
							$extraSpace = 5;
						}
						
						var $carouselWidth = ($('#boxed').length == 1) ? $mainContentWidth + parseInt($justOutOfSight * 2) : $container_width - $bodyBorderWidth + $extraSpace;
						
						// When using gutter on portfolio don't add extra space
						if ($('#boxed').length == 0 && $(this).hasClass('portfolio-items') && $(this).is('[data-gutter*="px"]') && $(this).attr('data-gutter').length > 0 && $(this).attr('data-gutter') != 'none') {
							if ($container_width > 1000) {
								$carouselWidth = $container_width - $bodyBorderWidth + 3;
							}
							else {
								$carouselWidth = $container_width - $bodyBorderWidth;
							}
						}
						
						if ($(this).parent().hasClass('default-style')) {
							
							$mainContentWidth = ($('#nectar_fullscreen_rows').length == 0) ? parseInt($('.main-content').width()) : parseInt($(this).parents('.container').width());
							
							if ($('#boxed').length != 0) {
								$carouselWidth  = ($('#boxed').length == 1) ? $mainContentWidth + parseInt($justOutOfSight * 2) : $container_width + $extraSpace;
							} else {
								$carouselWidth  = ($('#boxed').length == 1) ? $mainContentWidth + parseInt($justOutOfSight * 2) : ($container_width - $bodyBorderWidth) - (($container_width - $bodyBorderWidth) * 0.025) + $extraSpace;
								$windowWidth    = ($container_width - $bodyBorderWidth <= $mainContentWidth) ? $mainContentWidth : ($container_width - $bodyBorderWidth) - (($container_width - $bodyBorderWidth) * 0.025);
								$justOutOfSight = Math.ceil((($windowWidth - $mainContentWidth) / 2));
							}
							
						} 
						
						else if ($(this).parent().hasClass('spaced')) {
							
							$mainContentWidth = ($('#nectar_fullscreen_rows').length == 0) ? parseInt($('.main-content').width()) : parseInt($(this).parents('.container').width());
							
							if ($('#boxed').length != 0) {
								$carouselWidth = ($('#boxed').length == 1) ? $mainContentWidth + parseInt($justOutOfSight * 2) - ($container_width * 0.02) : $container_width + $extraSpace;
							} else {
								$carouselWidth = ($('#boxed').length == 1) ? $mainContentWidth + parseInt($justOutOfSight * 2) : ($container_width - $bodyBorderWidth) - Math.ceil(($container_width - $bodyBorderWidth) * 0.02) + $extraSpace;
								var $windowWidth2 = ($container_width - $bodyBorderWidth <= $mainContentWidth) ? $mainContentWidth : ($container_width - $bodyBorderWidth) - (($container_width - $bodyBorderWidth) * 0.02);
								$justOutOfSight = Math.ceil((($windowWidth2 - $mainContentWidth) / 2) + 2);
							}
						}
						
						// Make sure the element/row is capable of going full width.
						if (!$(this).parents('.span_9').length > 0 && 
						!$(this).parent().hasClass('span_3') && 
						$(this).parent().attr('id') != 'sidebar-inner' && 
						$(this).parent().attr('id') != 'portfolio-extra' &&
						!$(this).find('.carousel-wrap[data-full-width="true"]').length > 0 &&
						!$(this).find('.nectar-carousel-flickity-fixed-content').length > 0 &&
						!$(this).find('.portfolio-items:not(".carousel")[data-col-num="elastic"]').length > 0) {
							
							// Escape if inside woocoommerce page and not using applicable layout
							if ($('.single-product').length > 0 && 
							$(this).parents('#tab-description').length > 0 && 
							$(this).parents('.full-width-tabs').length == 0) {
								
								$(this).css({
									'visibility': 'visible'
								});
								
							} else {
								// Portfolio.
								if ($(this).hasClass('portfolio-items')) {
									$(this).css({
										'margin-left': -$justOutOfSight,
										'left': 0,
										'width': $carouselWidth,
										'visibility': 'visible'
									});
									
								} else {
									
									// Fullscreen page rows left.
									if ($('#nectar_fullscreen_rows').length > 0 && $(this).hasClass('wpb_row')) {
										
										$(this).css({
											'margin-left': -$justOutOfSight,
											'width': $carouselWidth,
											'visibility': 'visible'
										});
										
									} else {
										// Regular rows.
										$(this).css({
											'left': 0,
											'margin-left': -$justOutOfSight,
											'width': $carouselWidth,
											'visibility': 'visible'
										});
									}
									
								}
								
							}
						} 
						
						else if ($(this).parent().attr('id') == 'portfolio-extra' && $('#full_width_portfolio').length != 0) {
							
							$(this).css({
								'left': 0,
								'margin-left': -$justOutOfSight,
								'width': $carouselWidth,
								'visibility': 'visible'
							});
							
						} else {
							
							$(this).css({
								'margin-left': 0,
								'width': 'auto',
								'left': '0',
								'visibility': 'visible'
							});
						}
						
					});
					
				}
				

				
				/**
				* Parallax scroll speed helper.
				*
				* @since 4.0
				*/
				function parallaxSrollSpeed(speedString) {
					
					var speed;
					switch (speedString) {
						case 'slow':
							speed = 0.6;
							break;
						case 'medium':
							speed = 0.4;
							break;
						case 'fast':
							speed = 0.25;
							break;
					}

					return speed;
				}
				
				
				/**
				* Parallax scroll initialization.
				*
				* @since 4.0
				*/
				function parallaxScrollInit() {
					
					if (nectarDOMInfo.usingMobileBrowser && $('body[data-remove-m-parallax="1"]').length > 0) {
						return;
					}
					
					parallaxRowsBGCals();
					
					$('.nectar-recent-posts-single_featured, .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, .parallax_slider_outer .nectar-slider-wrap').each(function () {
						var $id = $(this).attr('id');
						
						if ( $(this).find('[data-parallax-speed="fixed"]').length == 0) {
							
							if ($(this).find('.row-bg').length == 0) {
								//set default scroll speed if not defined
								$('#' + $id).parallaxScroll("50%", 0.25);
							} else {
								$('#' + $id + ".parallax_section").parallaxScroll("50%", parallaxSrollSpeed($(this).find('.row-bg').attr('data-parallax-speed')));
							}
							
						} 
						
						$(this).addClass('nectar-parallax-enabled');
						
					});
					
				}
				
				
				/**
				* First full width row on page
				*
				* @since 4.0
				*/
				function firstFWSection() {
					$('.full-width-section.wpb_row, .full-width-content.wpb_row').each(function () {
						
						if (!$(this).parent().hasClass('span_9') && 
						!$(this).parent().hasClass('span_3') && 
						$(this).parent().attr('id') != 'sidebar-inner') {
							
							if ($(this).parents('#portfolio-extra').length > 0 && $('#full_width_portfolio').length == 0) {
								return false;
							}
							
							if ($(this).index() == '0' && 
							$pageHeaderBG.length == 0 && 
							$('.page-header-no-bg').length == 0 &&
							$('.project-title').length == 0 && 
							$('body.single').length == 0 &&
							$('.project-title').length == 0) {
								
								$(this).addClass('first-section');
								var $that = $(this);
								setTimeout(function () {
									$that.addClass('loaded');
								}, 50);
								
							}
							
						}
						
					});
				}
				
				
				
				
				
				/**
				* Parallax row background height calculations.
				*
				* @since 6.0
				*/
				function parallaxRowsBGCals() {
					
					if (nectarDOMInfo.usingMobileBrowser && $('body[data-remove-m-parallax="1"]').length > 0) {
						return;
					}
					
					$('.nectar-recent-posts-single_featured, .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, .parallax_slider_outer .nectar-slider-wrap .slide-bg-wrap').each(function () {
						
						var $non_page_builder_slider;
						
						if ($(this).find('.row-bg').length == 0 && $(this).find('.page-header-bg-image').length > 0) {
							//skip processing.
						} else if ($(this).find('.row-bg').length == 0 && $(this).find('.image-bg').length > 0) {
							
							$non_page_builder_slider = false;
							
							// First nectar slider shortcode without page builder
							if ($('.wpb_row').length == 0 && 
							$(this).parents('.nectar-slider-wrap[data-full-width="true"]').length > 0 && 
							$(this).parents('.parallax_slider_outer').length > 0 && 
							$(this).parents('.parallax_slider_outer').index() == '1') {
								$non_page_builder_slider = true;
							}
							
							// Portfolio first
							if ($('#portfolio-extra').length > 0 && 
							$(this).parents('.wpb_row').length > 0 && 
							$(this).parents('.parallax_slider_outer').length > 0 && 
							$(this).parents('.wpb_row').index() == '0') {
								$non_page_builder_slider = true;
							}
							
							// Set heights.
							if ($(this).parents('.top-level').length > 0 && !nectarDOMInfo.usingFrontEndEditor || 
							$non_page_builder_slider && !nectarDOMInfo.usingFrontEndEditor) {
								$(this).find('.image-bg').css({
									'height': Math.ceil($(this).parent().offset().top * 0.25) + $(this).outerHeight(true)
								});
							} else {
								$(this).find('.image-bg').css({
									'height': Math.ceil($window.height() * 0.25) + $(this).outerHeight(true)
								});
							}
							
						} 
						
						// Video backgrounds.
						else if ($(this).find('.row-bg').length == 0 && $(this).find('.video-wrap').length > 0) {
							
							$non_page_builder_slider = false;
							// First nectar slider shortcode without page builder
							if ($('.wpb_row').length == 0 && 
							$(this).parents('.nectar-slider-wrap[data-full-width="true"]').length > 0 && 
							$(this).parents('.parallax_slider_outer').length > 0 && 
							$(this).parents('.parallax_slider_outer').index() == '1') {
								$non_page_builder_slider = true;
							}
							// Portfolio first
							if ($('#portfolio-extra').length > 0 && 
							$(this).parents('.wpb_row').length > 0 && 
							$(this).parents('.parallax_slider_outer').length > 0 && 
							$(this).parents('.wpb_row').index() == '0') {
								$non_page_builder_slider = true;
							}
							
							// Set heights.
							if ($(this).parents('.top-level').length > 0 && !nectarDOMInfo.usingFrontEndEditor || 
							$non_page_builder_slider && !nectarDOMInfo.usingFrontEndEditor) {
								
								$(this).find('.video-wrap').css({
									'height': Math.ceil($(this).parent().offset().top * 0.25) + $(this).outerHeight(true)
								});
							} 
							
							else {
								$(this).find('.video-wrap').css({
									'height': Math.ceil($window.height() * 0.25) + $(this).outerHeight(true)
								});
							}
							
							var vid     = $(this).find('.video-wrap video'),
							vid_w_orig  = 1280,
							vid_h_orig  = 720;
							
							// Get the parent element size
							var container_w = vid.parent().width(),
							container_h     = vid.parent().height(),
							scale_w         = container_w / vid_w_orig,
							scale_h         = container_h / vid_h_orig;
							
							var scale       = scale_w > scale_h ? scale_w : scale_h;
							
							// Scale the video.
							vid.width(scale * vid_w_orig);
							vid.height(scale * vid_h_orig);
							
						} else {
							
							if ($(this).is('.nectar-recent-posts-single_featured') && $(this).parents('.top-level').length > 0 && !nectarDOMInfo.usingFrontEndEditor) {
								//skip processing.
							} else if (!$(this).hasClass('top-level') || nectarDOMInfo.usingFrontEndEditor) {
								
								var $ifFast = ($(this).find('.row-bg[data-parallax-speed="fast"]').length > 0) ? 60 : 0;
								$(this).find('.row-bg').css({
									'height': Math.ceil($window.height() * parallaxSrollSpeed($(this).find('.row-bg').attr('data-parallax-speed'))) + $(this).outerHeight(true) + $ifFast
								});
								
							}
							
						}

					});
					
				}
				
				
				/**
				* Class names added for specific full width section rows at top
				*
				* @since 3.0
				*/
				function fwsClasses() {
					
					$('.wpb_wrapper > .nectar-slider-wrap[data-full-width="true"]').each(function () {
						if (!$(this).parent().hasClass('span_9') && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner') {
							if ($(this).parents('.wpb_row').index() == '0') {
								$(this).addClass('first-nectar-slider');
							}
						}
					});
					
					var $contentElementsNum = ($('#portfolio-extra').length == 0) ? $('.main-content > .row > *').length : $('.main-content > .row #portfolio-extra > *').length;
					
					if ($('#portfolio-extra').length == 0) {
						$contentElementsNum = ($('.main-content > .row > .wpb_row').length > 0) ? $('.main-content > .row > .wpb_row').length : $('.main-content > .row > *').length;
					} else {
						$contentElementsNum = $('.main-content > .row #portfolio-extra > *').length;
					}
					
					$('.full-width-section, .full-width-content:not(.page-submenu .full-width-content):not(.blog-fullwidth-wrap), .row > .nectar-slider-wrap[data-full-width="true"], .wpb_wrapper > .nectar-slider-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]').each(function () {
						
						if (!$(this).parent().hasClass('span_9') && !$(this).parent().hasClass('span_3') && $(this).parent().attr('id') != 'sidebar-inner') {
							
							if ($(this).parents('.wpb_row').length > 0) {
								
								if ($(this).parents('#portfolio-extra').length > 0 && 
									$('#full_width_portfolio').length == 0) {
									return false;
								}
								
								////first
								if ($(this).parents('.wpb_row').index() == '0' && $pageHeaderBG.length != 0) {
									//skip processing.
								} 
								else if ($(this).parents('.wpb_row').index() == '0' && 
								$pageHeaderBG.length == 0 && $('.page-header-no-bg').length == 0 && 
								$('.project-title').length == 0 && $(this).parents('.wpb_row').index() == '0' && 
								$('.project-title').length == 0 && $('body[data-bg-header="true"]').length == 0) {
									
									if ($('.single').length == 0) {
										$('.container-wrap').css('padding-top', '0px');
									} else {
										$(this).addClass('first-section');
									}
									
								}
								
								// Check if it's also last (i.e. the only fws)
								if ($(this).parents('.wpb_row').index() == $contentElementsNum - 1 && $('#respond').length == 0) {
									if ($(this).attr('id') != 'portfolio-filters-inline') {
										$('.container-wrap').css('padding-bottom', '0px');
										$('#call-to-action .triangle').remove();
									}
								}
								
							} else {
								
								if ($(this).parents('#portfolio-extra').length > 0 && $('#full_width_portfolio').length == 0) {
									return false;
								}
								
								if ($(this).find('.portfolio-filters-inline').length == 0 && $(this).attr('id') != 'post-area') {
									
									////first
									if ($(this).index() == '0' && $pageHeaderBG.length != 0) {
										//skip processing.
									} 
									else if ($(this).index() == '0' && $pageHeaderBG.length == 0 && 
									$(this).index() == '0' && $('.page-header-no-bg').length == 0 && 
									$(this).index() == '0' && !$(this).hasClass('blog_next_prev_buttons') && 
									!$(this).hasClass('nectar-shop-outer') && $(this).parents('.pum-container').length == 0) {
										
										if ($('body[data-header-resize="0"]').length == 1 && $('.single').length == 0 || $('body.material').length > 0 && $('.single').length == 0) {
											
											if (!$('body.blog .blog-fullwidth-wrap > .masonry:not(.meta-overlaid)').length > 0) {
												$('.container-wrap').css('padding-top', '0px');
											}
											
										} 
										
										else {
											$(this).addClass('first-section');
										}
										
									}
									
									//check if it's also last (i.e. the only fws)
									if ($(this).index() == $contentElementsNum - 1 && $('#respond').length == 0 && $('body.woocommerce-checkout').length == 0) {
										$('.container-wrap').css('padding-bottom', '0px');
										$('.bottom_controls').css('margin-top', '0px');
										$('#call-to-action .triangle').remove();
									}
									
								}
							}
						}
						
					});
					
					
					$('#portfolio-extra > .nectar-slider-wrap[data-full-width="true"], .portfolio-wrap').each(function () {
						//check if it's last 
						if ($(this).index() == $contentElementsNum - 1 && $('#commentform').length == 0 && $('#pagination').length == 0) {
							if (parseInt($('.container-wrap').css('padding-bottom')) > 0) {
								$(this).css('margin-bottom', '-40px');
							}
							$('#call-to-action .triangle').remove();
						}
					});
					
					
					$('.portfolio-filters').each(function () {
						////first
						if ($(this).index() == '0' && $pageHeaderBG.length != 0 || $(this).index() == '0') {
							$(this).addClass('first-section nder-page-header');
						} else if ($(this).index() == '0' && $pageHeaderBG.length == 0 || $(this).index() == '0') {
							$(this).css({
								'margin-top': '0px'
							}).addClass('first-section');
						}
					});
					
					
					$('.portfolio-filters-inline').each(function () {
						////first
						if ($(this).parents('.wpb_row').length > 0) {
							//skip processing.
						} else {
							if ($(this).index() == '0' && $pageHeaderBG.length != 0 || $(this).index() == '0') {
								$(this).addClass('first-section nder-page-header');
							} else if ($(this).index() == '0' && $pageHeaderBG.length == 0 || $(this).index() == '0') {
								
								$(this).css({
									'margin-top': '-30px',
									'padding-top': '50px'
								}).addClass('first-section');
								
							}
						}
						
					});
					
					
				}
				
				

			
				
				
				/**
				* Full width row padding adjust calculations.
				*
				* @since 3.0
				*/
				function fullWidthRowPaddingAdjustCalc() {
					
					if ($('#boxed').length == 0) {
						
						$('.full-width-section[data-top-percent], .full-width-section[data-bottom-percent], .full-width-content[data-top-percent], .full-width-content[data-bottom-percent]').each(function () {
							
							var $windowHeight = $window.width(),
							$topPadding       = ($(this).attr('data-top-percent')) ? $(this).attr('data-top-percent') : 'skip',
							$bottomPadding    = ($(this).attr('data-bottom-percent')) ? $(this).attr('data-bottom-percent') : 'skip';
							
							//top
							if ($topPadding != 'skip') {
								$(this).css('padding-top', $windowHeight * (parseInt($topPadding) / 100));
							}
							
							//bottom
							if ($bottomPadding != 'skip') {
								$(this).css('padding-bottom', $windowHeight * (parseInt($bottomPadding) / 100));
							}
							
						});
					}
				}
				
				
				/**
				* Full width row padding adjust initialization
				*
				* @since 10.5
				*/
				function fullWidthRowPaddingAdjust() {
					
					if (nectarDOMInfo.usingMobileBrowser) {
						fullWidthRowPaddingAdjustCalc();
					}
					
					$window.on('resize', fullWidthRowPaddingAdjustCalc);
					
				}
				
				
				
				
				
				/**
				* Full width content row auto equal height cols.
				*
				* @since 4.0
				*/
				function fullWidthContentColumns() {
					
					var $frontEndEditorElDiv = ($('body.vc_editor').length > 0) ? '.vc_element > ' : '';
					
					$('.main-content > .row > ' + $frontEndEditorElDiv + ' .full-width-content, #portfolio-extra > ' + $frontEndEditorElDiv + ' .full-width-content, .woocommerce-tabs #tab-description > .full-width-content, .post-area.span_12 article .content-inner > .full-width-content').each(function () {
						
						// Only set the height if more than one column
						if ($(this).find('> .span_12 > ' + $frontEndEditorElDiv + ' .col').length > 1) {
							
							var tallestColumn       = 0;
							var $columnInnerHeight  = 0;
							var $column_inner_selector;
							
							$(this).find('> .span_12 > ' + $frontEndEditorElDiv + '  .col').each(function () {
								
								$column_inner_selector = ($(this).find('> .vc_column-inner > .wpb_wrapper').length > 0) ? '.vc_column-inner' : '.column-inner-wrap > .column-inner';
								
								var $padding = parseInt($(this).css('padding-top'));
								var $frontEndEditorElPadding = ($frontEndEditorElDiv.length > 2 && $(this).find('> .vc_column-inner').length > 0) ? parseInt($(this).find('> .vc_column-inner').css('padding-top')) : 0;
								
								if( $(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper').height() + ($padding * 2) + $frontEndEditorElPadding > tallestColumn ) {
									tallestColumn = $(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper').height() + ($padding * 2) + $frontEndEditorElPadding;
								}
								
							});
							
							$(this).find('> .span_12 > ' + $frontEndEditorElDiv + ' .col').each(function () {
								
								$column_inner_selector = ($(this).find('> .vc_column-inner > .wpb_wrapper').length > 0) ? '.vc_column-inner' : '.column-inner-wrap > .column-inner';
								
								// Columns with content
								if ($(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper > *').length > 0) {
									
									// Added in 7.6 to fix equal height columns 
									if ($frontEndEditorElDiv.length < 2 && !$(this).parent().parent().hasClass('vc_row-o-equal-height')) {
										$(this).css('height', tallestColumn);
									} else if ($frontEndEditorElDiv.length > 2 && !$(this).parent().parent().parent().hasClass('vc_row-o-equal-height')) {
										$(this).css('height', tallestColumn);
									}
								}
								
								// Empty columns
								else {
									if ($(this).is('[data-using-bg="true"]')) {
										
										$(this).css('min-height', tallestColumn);
										
										if ($(this).is('[data-animation*="reveal"]')) {
											$(this).find('.column-inner')
												.css('min-height', tallestColumn);
										}
										
									}
								}
								
							});
							
							// Nested column height
							if (nectarDOMInfo.winW < 1000) {
								$(this).find('> .span_12 > ' + $frontEndEditorElDiv + ' .col .wpb_row .col').css('min-height', '0px');
							} 
							
							// Vertically center
							if ($(this).hasClass('vertically-align-columns') && 
							nectarDOMInfo.winW > 1000 && 
							!$(this).hasClass('vc_row-o-equal-height')) {
								
								// Parent columns
								$(this).find('> .span_12 > ' + $frontEndEditorElDiv + ' .col').each(function () {
									
									$column_inner_selector = ($(this).find('> .vc_column-inner > .wpb_wrapper').length > 0) ? '.vc_column-inner' : '.column-inner-wrap > .column-inner';
									
									$columnInnerHeight = $(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper').height();
									
									var $marginCalc = ($(this).height() / 2) - ($columnInnerHeight / 2);
									
									if ($marginCalc <= 0) {
										$marginCalc = 0;
									}
									
									$(this).find('> ' + $column_inner_selector + ' > .wpb_wrapper')
										.css('margin-top', $marginCalc)
										.css('margin-bottom', $marginCalc);
									
								});
								
								
							}
							
						}
						
					});
					
					
					// Equal height columns in container type with reveal columns
					$('.main-content > .row > .wpb_row:not(.full-width-content).vc_row-o-equal-height').each(function () {
						if ($(this).find('>.span_12 > ' + $frontEndEditorElDiv + ' .wpb_column[data-animation*="reveal"]').length > 0) {
							
							var tallestColumn = 0;
							
							$(this).find('> .span_12 > ' + $frontEndEditorElDiv + ' .col').each(function () {
								
								var $padding = parseInt($(this).find('> .column-inner-wrap > .column-inner').css('padding-top'));
								
								if( $(this).find('> .column-inner-wrap > .column-inner').height() + ($padding * 2) > tallestColumn ) {
									tallestColumn = $(this).find('> .column-inner-wrap > .column-inner').height() + ($padding * 2);
								}
								
							});
							
							$(this).find('> .span_12 > ' + $frontEndEditorElDiv + ' .col').each(function () {
								
								// Columns with content
								if ($(this).find('> .column-inner-wrap > .column-inner .wpb_wrapper > *').length > 0) {
									$(this).find('> .column-inner-wrap').css('height', tallestColumn);
								}
								// Empty columns
								else {
									$(this).css('min-height', tallestColumn);
									if ($(this).is('[data-animation*="reveal"]')) {
										$(this).find('.column-inner').css('min-height', tallestColumn);
									}
								}
							});
							
						}
					});
					
					// Using equal height option, top/bottom padding % needs to be convered into px for cross browser (flex bug)
					$('.wpb_row.vc_row-o-equal-height>.span_12> ' + $frontEndEditorElDiv + '.wpb_column[class*="padding-"][data-padding-pos="all"]').each(function () {
						if ($(this).parents('.tabbed').length == 0) {
							$(this).css({
								'padding-top': $(this).css('padding-left'),
								'padding-bottom': $(this).css('padding-left')
							});
						}
					});
					
				}
				
				
				
				
				/**
				* Mouse parallax row option.
				*
				* @since 4.0
				*/
				function mouseParallaxInit() {
					
					$('.wpb_row:has(.nectar-parallax-scene)').each(function (i) {
						
						var $strength = parseInt($(this).find('.nectar-parallax-scene').attr('data-scene-strength'));
						
						$mouseParallaxScenes[i] = $(this).find('.nectar-parallax-scene').parallax({
							scalarX: $strength,
							scalarY: $strength
						});
						
						// Wait until the images in the scene have loaded.
						var images = $(this).find('.nectar-parallax-scene li');
						
						$.each(images, function () {
							if ($(this).find('div').length > 0) {
								var el = $(this).find('div'),
								image = el.css('background-image').replace(/"/g, '').replace(/url\(|\)$/ig, '');
								if (image && image !== '' && image !== 'none') {
									images = images.add($('<img>').attr('src', image));
								}
							}
						});
						
					});
					
				}
				
				

				
				
				
				/**
				* Add checkmark icons to unorder list with checkmark class.
				*
				* @since 2.0
				*/
				function ulCheckmarks() {
					$('ul.checks li').each(function () {
						if ($(this).find('i.icon-ok-sign').length == 0) {
							$(this).prepend('<i class="icon-ok-sign"></i>');
						}
					});
				}
				


				
				/**
				* Page builder row background layer animations.
				*
				* @since 9.0
				* @see waypoints
				*/
				function rowBGAnimations() {
					
					var $rowBGAnimationsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '93%';
					
					$($fullscreenSelector + '.row-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]):not([data-bg-animation*="displace-filter"]) .row-bg.using-image').each(function () {
						
						var $that = $(this);
						var waypoint = new Waypoint({
							element: $that.parents('.row-bg-wrap'),
							handler: function () {
								
								if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
									waypoint.destroy();
									return;
								}
								
								$that.parents('.inner-wrap').addClass('animated-in');
								
								waypoint.destroy();
							},
							offset: $rowBGAnimationsOffsetPos
						});
						
					});
					
				}
				
				
				/**
				* Page builder column background layer animations.
				*
				* @since 9.0
				* @see waypoints
				*/
				function columnBGAnimations() {
					
					var $rowBGAnimationsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '93%';
					
					$($fullscreenSelector + '.column-image-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]):not([data-bg-animation*="displace-filter"]) .column-image-bg').each(function () {
						
						var $that = $(this);
						
						var waypoint = new Waypoint({
							element: $that.parents('.column-image-bg-wrap'),
							handler: function () {
								
								if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
									waypoint.destroy();
									return;
								}
								
								$that.parents('.inner-wrap').addClass('animated-in');
								
								waypoint.destroy();
							},
							offset: $rowBGAnimationsOffsetPos
						});
						
					});
					
				}
				
				
				
				/**
				* Page builder column and image animations.
				*
				* @since 4.0
				* @see waypoints
				*/
				function colAndImgAnimations() {
					
					var $colAndImgOffsetPos       = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '88%';
					var $colAndImgRevealOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '70%';
					
					$($fullscreenSelector + 'img.img-with-animation').each(function () {
						
						var $that = $(this);
						
						var waypoint = new Waypoint({
							element: $that,
							handler: function () {
								
								if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
									waypoint.destroy();
									return;
								}
								
								if (!nectarDOMInfo.usingMobileBrowser || $('body[data-responsive="0"]').length > 0) {
									
									var $delay = $that.attr('data-delay');
									
									if ($that.attr('data-animation') == 'fade-in-from-left' || $that.attr('data-animation') == 'fade-in-from-right') {
										$that.delay($delay).transition({
											'opacity': 1,
											'x': '0px'
										}, $animationDuration, $animationEasing);
									} else if ($that.attr('data-animation') == 'fade-in-from-bottom') {
										$that.delay($delay).transition({
											'opacity': 1,
											'y': '0px'
										}, $animationDuration, $animationEasing);
									} else if ($that.attr('data-animation') == 'fade-in') {
										$that.delay($delay).transition({
											'opacity': 1
										}, $animationDuration, $animationEasing);
									} else if ($that.attr('data-animation') == 'grow-in') {
										setTimeout(function () {
											$that.transition({
												scale: 1,
												'opacity': 1
											}, $animationDuration, $animationEasing);
										}, $delay);
									} else if ($that.attr('data-animation') == 'flip-in') {
										setTimeout(function () {
											$that.transition({
												rotateY: 0,
												'opacity': 1
											}, $animationDuration, $animationEasing);
										}, $delay);
									} else if ($that.attr('data-animation') == 'flip-in-vertical') {
										setTimeout(function () {
											$that.transition({
												rotateX: 0,
												'opacity': 1
											}, $animationDuration, $animationEasing);
										}, $delay);
									}
									
									$that.addClass('animated-in');
									
								}
								
								waypoint.destroy();
								
							},
							offset: $colAndImgOffsetPos
						});
						
						
						
					});
					
					
					$($fullscreenSelector + '.nectar_cascading_images').each(function () {
						
						var $that           = $(this);
						var $animationDelay = ($(this).is('[data-animation-timing]')) ? $(this).attr('data-animation-timing') : 175;
						$animationDelay     = parseInt($animationDelay);
						
						var waypoint = new Waypoint({
							element: $that,
							handler: function () {
								
								if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
									waypoint.destroy();
									return;
								}
								
								if (!nectarDOMInfo.usingMobileBrowser || $('body[data-responsive="0"]').length > 0) {
									
									$that.find('.cascading-image').each(function (i) {
										
										var $that2 = $(this);
										
										if ($that2.attr('data-animation') == 'flip-in' || $that2.attr('data-animation') == 'flip-in-vertical') {
											setTimeout(function () {
												$that2.find('.inner-wrap').css({
													'opacity': 1,
													'transform': 'rotate(0deg) translateZ(0px)'
												});
											}, i * $animationDelay);
										} else {
											setTimeout(function () {
												$that2.find('.inner-wrap').css({
													'opacity': 1,
													'transform': 'translateX(0px) translateY(0px) scale(1,1) translateZ(0px)'
												});
											}, i * $animationDelay);
										}
										
										
									});
									
									$that.addClass('animated-in');
									
								}
								
								waypoint.destroy();
								
							},
							offset: $colAndImgOffsetPos
						});
						
					});
					

					$($fullscreenSelector + '.col.has-animation:not([data-animation*="reveal"]), ' + $fullscreenSelector + '.wpb_column.has-animation:not([data-animation*="reveal"]), ' + $fullscreenSelector + '.nectar-fancy-box.has-animation').each(function (i) {
						
						var $that = $(this);
						
						//set perspective for vertical flip
						if ($that.is('[data-animation="flip-in-vertical"]') || $that.is('[data-animation="slight-twist"]')) {
							$that.parents('.col.span_12').addClass('flip-in-vertical-wrap');
						}
						
						var waypoint = new Waypoint({
							element: $that,
							handler: function () {
								
								if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
									waypoint.destroy();
									return;
								}
								
								if (!nectarDOMInfo.usingMobileBrowser || $('body[data-responsive="0"]').length > 0) {
									
									var $delay = $that.attr('data-delay');
									
									if ($that.attr('data-animation') == 'fade-in-from-left' || $that.attr('data-animation') == 'fade-in-from-right') {
										
										$standAnimatedColTimeout[i] = setTimeout(function () {
											$that.transition({
												'opacity': 1,
												'x': '0px'
											}, $animationDuration, $animationEasing);
										}, $delay);
										
									} else if ($that.attr('data-animation') == 'fade-in-from-bottom') {
										
										$standAnimatedColTimeout[i] = setTimeout(function () {
											$that.transition({
												'opacity': 1,
												'y': '0px'
											}, $animationDuration, $animationEasing);
										}, $delay);
										
									} else if ($that.attr('data-animation') == 'fade-in') {
										
										$standAnimatedColTimeout[i] = setTimeout(function () {
											$that.transition({
												'opacity': 1
											}, $animationDuration, $animationEasing);
										}, $delay);
										
									} else if ($that.attr('data-animation') == 'grow-in' || $that.attr('data-animation') == 'zoom-out') {
										
										$standAnimatedColTimeout[i] = setTimeout(function () {
											$that.transition({
												scale: 1,
												'opacity': 1
											}, $animationDuration, $animationEasing);
										}, $delay);
										
									} else if ($that.attr('data-animation') == 'flip-in') {
										
										$standAnimatedColTimeout[i] = setTimeout(function () {
											$that.transition({
												rotateY: 0,
												'opacity': 1
											}, $animationDuration, $animationEasing);
										}, $delay);
										
									} else if ($that.attr('data-animation') == 'flip-in-vertical') {
										
										$standAnimatedColTimeout[i] = setTimeout(function () {
											$that.transition({
												rotateX: 0,
												y: 0,
												'opacity': 1
											}, $animationDuration, $animationEasing);
										}, $delay);
										
									} else if ($that.attr('data-animation') == 'slight-twist') {
										
										$standAnimatedColTimeout[i] = setTimeout(function () {
											anime({
												targets: $that[0],
												rotateY: [20, 0],
												rotateZ: [-4, 0],
												opacity: 1,
												easing: $animationEasing,
												duration: $animationDuration
											});
										}, $delay);
										
									}
									
									//boxed column hover fix
									if ($that.hasClass('boxed')) {
										$that.addClass('no-pointer-events');
										setTimeout(function () {
											$that.removeClass('no-pointer-events');
										}, parseInt($animationDuration) + parseInt($delay) + 30);
									}
									
									$that.addClass('animated-in');
									
								}
								
								waypoint.destroy();
							},
							offset: $colAndImgOffsetPos
						});
						
					});
					
					
					$($fullscreenSelector + '.wpb_column.has-animation[data-animation*="reveal"]').each(function () {
						
						var $that = $(this),
						waypoint 	= new Waypoint({
							element: $that,
							handler: function () {
								
								if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
									waypoint.destroy();
									return;
								}
								
								var $delay = $that.attr('data-delay');
								
								if (!nectarDOMInfo.usingMobileBrowser || $('body[data-responsive="0"]').length > 0) {
									
									if ($that.attr('data-animation') == 'reveal-from-bottom' || $that.attr('data-animation') == 'reveal-from-top') {
										
										setTimeout(function () {
											
											if ($that.hasClass('animated-in')) {
												$that.find('.column-inner-wrap, .column-inner').transition({
													'y': 0
												}, $animationDuration, $animationEasing, function () {
													$that.find('.column-inner-wrap, .column-inner').addClass('no-transform');
												});
											}
											
										}, $delay);
										
									} else if ($that.attr('data-animation') == 'reveal-from-right' || $that.attr('data-animation') == 'reveal-from-left') {
										setTimeout(function () {
											if ($that.hasClass('animated-in')) {
												
												$that.find('.column-inner-wrap, .column-inner').transition({
													'x': 0
												}, $animationDuration, $animationEasing, function () {
													$that.find('.column-inner-wrap, .column-inner').addClass('no-transform');
												});
												
											}
										}, $delay);
									}
									
									$that.addClass('animated-in');
									
								}
								
								waypoint.destroy();
							},
							offset: $colAndImgRevealOffsetPos
						});
						
					});
					
				}
				
				
				
				/**
				* Cascading images element sizing
				*
				* @since 6.0
				*/
				function cascadingImageBGSizing() {
					
					$('.nectar_cascading_images').each(function () {
						
						//handle max width for cascading images in equal height columns
						if ($(this).parents('.vc_row-o-equal-height').length > 0 && $(this).parents('.wpb_column').length > 0) {
							$(this).css('max-width', $(this).parents('.wpb_column').width());
						}
						
						//set size for layers with no images
						$(this).find('.bg-color').each(function () {
							
							var $bgColorHeight  = 0;
							var $bgColorWidth   = 0;
							
							if ($(this).parent().find('.img-wrap').length == 0) {
								
								var $firstSibling = $(this).parents('.cascading-image').siblings('.cascading-image[data-has-img="true"]').first();
								
								$firstSibling.css({
									'position': 'relative',
									'visiblity': 'hidden'
								});
								
								$bgColorHeight 	= $firstSibling.find('.img-wrap').height();
								$bgColorWidth 	= $firstSibling.find('.img-wrap').width();
								
								if ($firstSibling.index() == 0) {
									$firstSibling.css({
										'visiblity': 'visible'
									});
								} else {
									$firstSibling.css({
										'position': 'absolute',
										'visiblity': 'visible'
									});
								}
							} else {
								$bgColorHeight 	= $(this).parent().find('.img-wrap').height();
								$bgColorWidth 	= $(this).parent().find('.img-wrap').width();
							}
							
							$(this).css({
								'height': $bgColorHeight,
								'width': $bgColorWidth
							});
						});
					});
					
				}
				
				
				
				
				/**
				* Cascading images element initialization.
				*
				* @since 10.5
				*/
				function cascadingImageInit() {
					
					if ($('.nectar_cascading_images').length > 0) {
						imagesLoaded($('.nectar_cascading_images'), function () {
							cascadingImageBGSizing();
						});
						
						$window.on('resize', cascadingImageBGSizing);
					}
					
				}
				
				
				
				
				/**
				* Split line heading element initialization.
				*
				* @since 10.5
				* @see waypoints
				*/
				function splitLineHeadings() {
					
					var $splitLineOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
					$($fullscreenSelector + '.nectar-split-heading').each(function () {
						
						var $that = $(this);
						
						var waypoint = new Waypoint({
							element: $that,
							handler: function () {
								
								if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated-in')) {
									waypoint.destroy();
									return;
								}
								
								if (!nectarDOMInfo.usingMobileBrowser || $('body[data-responsive="0"]').length > 0) {
									
									
									$that.find('.heading-line').each(function (i) {
										
										$(this).find('> div').delay(i * 70).transition({
											'y': '0px'
										}, $animationDuration, $animationEasing);
										
									});
									
									
									$that.addClass('animated-in');
									
								}
								
								waypoint.destroy();
							},
							offset: $splitLineOffsetPos
						});
						
					});
				}
				
				
				
				/**
				* Progress bar element initialization.
				*
				* @since 3.0
				* @see waypoints
				*/
				function progressBars() {
					
					var $progressBarsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
					$($fullscreenSelector + '.nectar-progress-bar').parent().each(function () {
						
						var $that = $(this),
						waypoint 	= new Waypoint({
							element: $that,
							handler: function () {
								
								if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) {
									waypoint.destroy();
									return;
								}
								
								if ($progressBarsOffsetPos == '100%') {
									$that.find('.nectar-progress-bar .bar-wrap').css('opacity', '1');
								}
								
								$that.find('.nectar-progress-bar').each(function (i) {
									
									var percent = $(this).find('span').attr('data-width'),
									$endNum 		= parseInt($(this).find('span strong i').text()),
									$that 			= $(this);
									
									$that.find('span').delay(i * 90).transition({
										'width': percent + '%'
									}, 1050, 'easeInOutQuint', function () {});
									
									setTimeout(function () {
										
										var countOptions = {
											useEasing: false
										};
										var $countEle = $that.find('span strong i')[0];
										var numAnim = new CountUp($countEle, 0, $endNum, 0, 1, countOptions);
										numAnim.start();
										
										$that.find('span strong').transition({
											'opacity': 1
										}, 550, 'easeInCirc');
									}, (i * 90));
									
									////100% progress bar 
									if (percent == '100') {
										$that.find('span strong').addClass('full');
									}
								});
								
								$that.addClass('completed');
								
								waypoint.destroy();
								
							},
							offset: $progressBarsOffsetPos
						});
						
					});
				}
				
				
				
				/**
				* Page builder column border animations.
				*
				* @since 8.0
				* @see waypoints
				*/
				function animatedColBorders() {
					
					var $progressBarsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '75%';
					$($fullscreenSelector + '.wpb_column[data-border-animation="true"]').each(function () {
						
						var $that = $(this),
						waypoint  = new Waypoint({
							element: $that,
							handler: function () {
								
								if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) {
									waypoint.destroy();
									return;
								}
								
								var $borderDelay = ($that.attr('data-border-animation-delay').length > 0) ? parseInt($that.attr('data-border-animation-delay')) : 0;
								setTimeout(function () {
									$that.find('.border-wrap').addClass('animation');
									$that.find('.border-wrap').addClass('completed');
								}, $borderDelay);
								
								waypoint.destroy();
								
							},
							offset: $progressBarsOffsetPos
						});
						
					});
				}
				
				
				
				/**
				* Food menu item element.
				*
				* @since 8.0
				* @see waypoints
				*/
				function foodMenuItems() {
					
					var $foodItemOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '80%';
					$($fullscreenSelector + '.nectar_food_menu_item').parent().each(function () {
						
						var $that = $(this),
						waypoint  = new Waypoint({
							element: $that,
							handler: function () {
								
								if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) {
									waypoint.destroy();
									return;
								}
								
								$that.find('.nectar_food_menu_item').each(function (i) {
									
									var $that = $(this);
									
									setTimeout(function () {
										$that.addClass('animated-in');
									}, i * 150);
									
								});
								
								waypoint.destroy();
								
							},
							offset: $foodItemOffsetPos
						});
						
					});
				}
				

				
				/**
				* Divider element
				*
				* @since 3.0
				* @see waypoints
				*/
				function dividers() {
					
					var $dividerOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
					
					$($fullscreenSelector + '.divider-small-border[data-animate="yes"], ' + $fullscreenSelector + '.divider-border[data-animate="yes"]').each(function () {
						
						var $lineDur  = ($(this).hasClass('divider-small-border')) ? 1300 : 1500,
						$that         = $(this),
						waypoint      = new Waypoint({
							element: $that,
							handler: function () {
								
								if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) {
									waypoint.destroy();
									return;
								}
								
								$that.each(function () {
									
									$(this).css({
										'transform': 'scale(0,1)',
										'visibility': 'visible'
									});
									var $that = $(this);
									
									$that.delay($that.attr('data-animation-delay')).transition({
										'transform': 'scale(1, 1)'
									}, $lineDur, 'cubic-bezier(.18,1,.22,1)');
									
								});
								
								$that.addClass('completed');
								
								waypoint.destroy();
								
							},
							offset: $dividerOffsetPos
						});
						
					});
				}
				
				
				
				/**
				* Image with hotspots element hover event
				*
				* @since 7.0
				*/
				function hotSpotHoverBind() {
					
					//add pulse animation
					$('.nectar_image_with_hotspots[data-hotspot-icon="numerical"]').each(function () {
						$(this).find('.nectar_hotspot_wrap').each(function (i) {
							var $that = $(this);
							setTimeout(function () {
								$that.find('.nectar_hotspot').addClass('pulse');
							}, i * 300);
						});
					});
					
					
					var hotSpotHoverTimeout = [];
					
					$('.nectar_image_with_hotspots:not([data-tooltip-func="click"]) .nectar_hotspot').each(function (i) {
						
						hotSpotHoverTimeout[i] = '';
						
						$(this).on('mouseover', function () {
							clearTimeout(hotSpotHoverTimeout[i]);
							$(this).parent().css({
								'z-index': '400',
								'height': 'auto',
								'width': 'auto'
							});
						});
						
						$(this).on('mouseleave', function () {
							
							var $that = $(this);
							$that.parent().css({
								'z-index': 'auto'
							});
							
							hotSpotHoverTimeout[i] = setTimeout(function () {
								$that.parent().css({
									'height': '30px',
									'width': '30px'
								});
							}, 300);
							
						});
						
					});
					
				}
				
				

				/**
				* Image with hotspots element responsive behavior.
				*
				* @since 7.0
				*/
				function responsiveTooltips() {
					
					$('.nectar_image_with_hotspots').each(function () {
						
						$(this).find('.nectar_hotspot_wrap').each(function () {
							
							if (nectarDOMInfo.winW > 690) {
								
								// Remove click if applicable
								if ($(this).parents('.nectar_image_with_hotspots[data-tooltip-func="hover"]').length > 0) {
									$(this).find('.nectar_hotspot').removeClass('click');
									$(this).find('.nttip').removeClass('open');
								}
								
								$(this).find('.nttip .inner a.tipclose').remove();
								$('.nttip').css('height', 'auto');
								
								// Reset for positioning
								$(this).css({
									'width': 'auto',
									'height': 'auto'
								});
								
								$(this).find('.nttip')
									.removeClass('force-right')
									.removeClass('force-left')
									.removeClass('force-top')
									.css('width', 'auto');
								
								var $tipOffset = $(this).find('.nttip').offset();
								
								// Against right side 
								if ($tipOffset.left > $(this).parents('.nectar_image_with_hotspots').width() - 200) {
									$(this).find('.nttip').css('width', '250px');
								}
								else {
									$(this).find('.nttip').css('width', 'auto');
								}
								
								// Responsive
								if ($tipOffset.left < 0) {
									$(this).find('.nttip').addClass('force-right');
								}
								else if ($tipOffset.left + $(this).find('.nttip').outerWidth(true) > nectarDOMInfo.winW) {
									$(this).find('.nttip').addClass('force-left').css('width', '250px');
								}
								else if ($tipOffset.top + $(this).find('.nttip').height() + 35 > $window.height() && $('#nectar_fullscreen_rows').length > 0) {
									$(this).find('.nttip').addClass('force-top');
								}
								
								if ($(this).find('> .open').length == 0) {
									
									$(this).css({
										'width': '30px',
										'height': '30px'
									});
								}
								
							} else {
								
								//fixed position
								$(this).find('.nttip')
									.removeClass('force-left')
									.removeClass('force-right')
									.removeClass('force-top');
								
								$(this).find('.nectar_hotspot').addClass('click');
								
								if ($(this).find('.nttip a.tipclose').length == 0) {
									$(this).find('.nttip .inner').append('<a href="#" class="tipclose"><span></span></a>');
								}
								
								// Change height of fixed
								$('.nttip').css('height', $window.height());
							}
						});
					});
					
				}
				

				/**
				* Image with hotspots events
				*
				* @since 10.5
				*/
				function imageWithHotspotEvents() {
					
					if( $('.nectar_image_with_hotspots').length == 0 ) {
						return;
					}
					
					// Hover
					hotSpotHoverBind();
					
					// Click
					$body.on('click', '.nectar_hotspot.click', function () {
						$(this).parents('.nectar_image_with_hotspots').find('.nttip').removeClass('open');
						$(this).parent().find('.nttip').addClass('open');
						
						$(this).parents('.nectar_image_with_hotspots').find('.nectar_hotspot').removeClass('open');
						$(this).parent().find('.nectar_hotspot').addClass('open');
						
						if (nectarDOMInfo.winW > 690) {
							$(this).parent().css({
								'z-index': '120',
								'height': 'auto',
								'width': 'auto'
							});
							
							var $that = $(this);
							
							setTimeout(function () {
								$that.parents('.nectar_image_with_hotspots').find('.nectar_hotspot_wrap').each(function () {
									
									if ($(this).find('> .open').length == 0) {
										$(this).css({
											'height': '30px',
											'width': '30px',
											'z-index': 'auto'
										});
									}
								});
							}, 300);
						}
						
						if (nectarDOMInfo.winW <= 690) {
							$(this).parents('.wpb_row, [class*="vc_col-"]').css('z-index', '200');
						}
						
						return false;
					});
					
					$body.on('click', '.nectar_hotspot.open', function () {
						$(this).parent().find('.nttip').removeClass('open');
						$(this).parent().find('.nectar_hotspot').removeClass('open');
						
						$(this).parents('.wpb_row').css('z-index', 'auto');
						
						return false;
					});
					
					$body.on('click', '.nttip.open', function () {
						if (nectarDOMInfo.winW < 690) {
							$(this).parents('.nectar_image_with_hotspots').find('.nttip').removeClass('open');
							$(this).parents('.nectar_image_with_hotspots').find('.nectar_hotspot').removeClass('open');
							$(this).parents('.wpb_row').css('z-index', 'auto');
							return false;
						}
					});
					
					
					// Calculate on init.
					responsiveTooltips();
					
					// Resize event.
					$window.on('resize',responsiveTooltips);
					
				}
				
				

				/**
				* Image with hotspots initialization.
				*
				* @since 7.0
				* @see waypoints
				*/
				function imageWithHotspots() {
					
					var $imageWithHotspotsOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '50%';
					
					$($fullscreenSelector + '.nectar_image_with_hotspots[data-animation="true"]').each(function () {
						
						var $that = $(this);
						var waypoint = new Waypoint({
							element: $that,
							handler: function () {
								
								if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) {
									waypoint.destroy();
									return;
								}
								
								$that.addClass('completed');
								$that.find('.nectar_hotspot_wrap').each(function (i) {
									var $that2 = $(this);
									var $extrai = ($that2.parents('.col.has-animation').length > 0) ? 1 : 0;
									setTimeout(function () {
										$that2.addClass('animated-in');
									}, 175 * (i + $extrai));
								});
								
								waypoint.destroy();
								
							},
							offset: $imageWithHotspotsOffsetPos
						});
						
					});
					

				}
				
				

				
				/**
				* Animated title element initialization.
				*
				* @since 7.0
				* @see waypoints
				*/
				function animatedTitles() {
					
					var $animatedTitlesOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
					
					$($fullscreenSelector + '.nectar-animated-title').each(function () {
						
						var $that = $(this),
						waypoint 	= new Waypoint({
							element: $that,
							handler: function () {
								
								if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) {
									waypoint.destroy();
									return;
								}
								
								$that.addClass('completed');
								
								waypoint.destroy();
								
							},
							offset: $animatedTitlesOffsetPos
						});
						
					});
				}
				
				
				
				
				/**
				* Highlighted Text element initialization.
				*
				* @since 9.0
				* @see waypoints
				*/
				function highlightedText() {
					
					var $highlightedTextOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : 'bottom-in-view';
					var highlightedColorCss = '';
					
					$($fullscreenSelector + '.nectar-highlighted-text').each(function (i) {
						
						// Custom color 
						if ($(this).is('[data-using-custom-color="true"]')) {
							
							var $custom_highlight_color = $(this).attr('data-color');
							
							$(this).addClass('instance-' + i);
							
							highlightedColorCss += '.nectar-highlighted-text.instance-' + i + ' em:before { background-color: ' + $custom_highlight_color + '; }';

						}
						
						if (nectarDOMInfo.usingMobileBrowser) {
							$(this).find('em').addClass('animated');
						}
						
						// Waypoint
						var $that = $(this);
						var waypoint = new Waypoint({
							element: $that,
							handler: function () {
								
								if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('animated')) {
									waypoint.destroy();
									return;
								}
								
								$that.find('em').each(function (i) {
									var $highlighted_em = $(this);
									setTimeout(function () {
										$highlighted_em.addClass('animated');
									}, i * 300);
									
								});
								
								waypoint.destroy();
								
							},
							offset: $highlightedTextOffsetPos
						});
						
					});
					
					// Style
					nectarCreateStyle(highlightedColorCss, 'highlighted-text');
					
				}
				
				
				
				
				/**
				* Pricing table element height calculations.
				*
				* @since 2.0
				*/
				function pricingTableHeight() {
					
					var $tallestCol;
					
					$('.pricing-table[data-style="default"]').each(function () {
						$tallestCol = 0;
						
						$(this).find('> div ul').each(function () {
							
							if( $(this).height() > $tallestCol ) {
								$tallestCol = $(this).height();
							}

						});
						
						//safety net incase pricing tables height couldn't be determined
						if ($tallestCol == 0) {
							$tallestCol = 'auto';
						}
						
						//set even height
						$(this).find('> div ul').css('height', $tallestCol);
						
					});
				}
				
				
				
				
				/**
				* Testimonial slider element initialization.
				*
				* @since 10.5
				*/
				function nectarTestimonialSliders() {
					
					$testimonialSliders = [];
					
					if (typeof NectarTestimonialSlider == 'undefined') {
						return;
					}
					
					$('.testimonial_slider').each(function (i) {
						
						var $that_el  = $(this),
						$type         = ($(this).is('[data-style]')) ? $(this).attr('data-style') : 'none';
						
						$testimonialSliders[i] = new NectarTestimonialSlider($that_el, $type, resizeVideoToCover, fullWidthContentColumns);
						
						
						if ($(this).is('.disable-height-animation:not([data-style*="multiple_visible"])')) {
							$testimonialSliders[i].testimonialSliderHeight();
							setTimeout($testimonialSliders[i].testimonialSliderHeight.bind($testimonialSliders[i]), 500);
						}
						
						if ($(this).is('.testimonial_slider[data-style="multiple_visible_minimal"]')) {
							$testimonialSliders[i].testimonialSliderHeightMinimalMult();
							setTimeout($testimonialSliders[i].testimonialSliderHeightMinimalMult.bind($testimonialSliders[i]), 500);
						}
						
					});
					

				}
				
				
				/**
				* Testimonial slider element resize binding.
				*
				* @since 10.5
				*/
				function nectarTestimonialSlidersEvents() {
					
					$window.off('smartresize.nectarTestimonials');
					$window.off('resize.nectarTestimonialsMin');
					
					if($testimonialSliders.length > 0) {
						$window.on('smartresize.nectarTestimonials',nectarTestimonialMainResize);
					}
					
					if( $('.testimonial_slider[data-style="multiple_visible_minimal"]').length > 0 ) {
						$window.on('resize.nectarTestimonialsMin',nectarTestimonialMiniamlResize);
					}
					
				}
				
				function nectarTestimonialMainResize() {
						for (var i = 0; i < $testimonialSliders.length; i++) {
							$testimonialSliders[i].testimonialSliderHeight();
							$testimonialSliders[i].testimonialHeightResize();
						}
				}
				function nectarTestimonialMiniamlResize() {
						for (var i = 0; i < $testimonialSliders.length; i++) {
							$testimonialSliders[i].testimonialSliderHeightMinimalMult();
						}
				}
				
				
				
				/**
				* Icon list element initialization.
				*
				* @since 6.0
				* @see waypoints
				*/
				function iconList() {
					
					var $iconListOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '250%' : '75%';
					
					$($fullscreenSelector + '.nectar-icon-list[data-animate="true"]').each(function () {
						
						var $that = $(this),
						waypoint 	= new Waypoint({
							element: $that,
							handler: function () {
								
								if ($that.parents('.wpb_tab').length > 0 && $that.parents('.wpb_tab').css('visibility') == 'hidden' || $that.hasClass('completed')) {
									waypoint.destroy();
									return;
								}
								
								$that.each(function () {
									
									var $listItemAnimationDelay = ($that.is('[data-direction="horizontal"]')) ? 100 : 300;
									
									$(this).find('.nectar-icon-list-item').each(function (i) {
										var $thatt = $(this);
										setTimeout(function () {
											$thatt.addClass('animated');
										}, i * $listItemAnimationDelay);
									});
									
								});
								
								$that.addClass('completed');
								
								waypoint.destroy();
								
							},
							offset: $iconListOffsetPos
						});
						
					});
				}
				
				
				
				/**
				* Get the BG color of parent column/row.
				*
				* @since 6.0
				*/
				function narrowParentBGC(element) {
					
					var narrowedBGC;
					
					if (element.parents('.wpb_column[data-bg-color*="#"]').length > 0 && element.parents('.wpb_column[data-bg-opacity="1"]').length > 0) {
						narrowedBGC = element.parents('.wpb_column').attr('data-bg-color');
					} 
					else if (element.parents('.wpb_row').length > 0 && element.parents('.wpb_row').find('.row-bg.using-bg-color').length > 0 ||
						element.parents('.wpb_row').length > 0 && element.parents('.wpb_row').find('.row-bg.using-bg-color-excluded').length > 0) {
						narrowedBGC = element.parents('.wpb_row').find('.row-bg').css('background-color');
					} 
					else {
						if ($('#nectar_fullscreen_rows').length > 0) {
							narrowedBGC = $('#nectar_fullscreen_rows > .wpb_row .full-page-inner-wrap').css('background-color');
						}
						else {
							narrowedBGC = $('.container-wrap').css('background-color');
						}
					}
					
					return narrowedBGC;
					
				}
				

				/**
				* Icon BG matching row BG
				*
				* @since 6.0
				*/
				function nectarIconMatchColoring() {
					
					var nectarMatchingBGCss = '';
					
					// Icon list
					$('.nectar-icon-list[data-icon-style="border"], .nectar_icon_wrap[data-style="border-animation"][data-color*="extra-color-gradient-"]').each(function (i) {
						
						var $bgColorToSet = narrowParentBGC($(this));
						
						if( $(this).hasClass('nectar-icon-list') ) {
							$(this).find('.list-icon-holder').css('background-color', $bgColorToSet);
						}
						else {

							$(this).removeClass(function (index, className) {
								return (className.match(/(^|\s)instance-\S+/g) || []).join(' ');
							});
							
							$(this).addClass('instance-' + i);
							nectarMatchingBGCss += '.nectar_icon_wrap.instance-' + i + ' .nectar_icon:before { background-color: ' + $bgColorToSet + '!important; }';
						}
						
					});
					
					// Material gradient btns
					$('body.material .nectar-button.see-through[class*="m-extra-color-gradient"]').each(function (i) {
						
						var $bgColorToSet = narrowParentBGC($(this));
						
						$(this).removeClass(function (index, className) {
							return (className.match(/(^|\s)instance-\S+/g) || []).join(' ');
						});
						
						$(this).addClass('instance-' + i);
						nectarMatchingBGCss += '.nectar-button.see-through.instance-' + i + ':after { background-color: ' + $bgColorToSet + '!important; }';
						
					});
					
					// Style
					nectarCreateStyle(nectarMatchingBGCss, 'nectaricon-color-match');
					
				}
				
				
				
				

				/**
				* One fourth column classes.
				*
				* @since 2.0
				*/
				function oneFourthClasses() {
					
					$('.col.span_3, .vc_span3, .vc_col-sm-3').each(function () {
						if (!$(this).is('[data-t-w-inherits="small_desktop"]')) {
							
							var $currentDiv = $(this);
							var $nextDiv    = $(this).next('div');
							
							if ($nextDiv.hasClass('span_3') && !$currentDiv.hasClass('one-fourths') || 
							$nextDiv.hasClass('vc_span3') && !$currentDiv.hasClass('one-fourths') || 
							$nextDiv.hasClass('vc_col-sm-3') && !$currentDiv.hasClass('one-fourths')) {
								$currentDiv.addClass('one-fourths clear-both');
								$nextDiv.addClass('one-fourths right-edge');
							}
						}
					});
					
					// Make empty second 1/2 half columns display right on iPad
					$('.span_12 .col.span_6').each(function () {
						if ($(this).next('div').hasClass('span_6') && $.trim($(this).next('div').html()).length == 0) {
							$(this).addClass('empty-second');
						}
					});
					
				}
				

				
				
				/**
				* Responsive video iframes initialization.
				*
				* @since 3.0
				*/
				function responsiveVideoIframesInit() {
					
						$('iframe').each(function () {
							
							// Make sure the iframe has a src
							if (typeof $(this).attr('src') != 'undefined' && 
							!$(this).hasClass('skip-nectar-video-size') && 
							!$(this).hasClass('iframe-embed') && 
							$(this).parents('.ult_modal').length == 0 && 
							$(this).parents('.ls-slide').length == 0 && 
							$(this).parents('.esg-entry-media').length == 0 && 
							$(this).parents('.wpb_video_widget.wpb_content_element').length == 0) {
								
								var embedSrcLower = $(this).attr('src').toLowerCase();
								
								if (embedSrcLower.indexOf("youtube") >= 0 || 
								embedSrcLower.indexOf("vimeo") >= 0 || 
								embedSrcLower.indexOf("twitch.tv") >= 0 || 
								embedSrcLower.indexOf("kickstarter") >= 0 || 
								embedSrcLower.indexOf("embed-ssl.ted") >= 0 || 
								embedSrcLower.indexOf("dailymotion") >= 0) {
									
									$(this).addClass('iframe-embed');
									
									if ($(this).width() < $(this).parent().width()) {
										$(this)
											.attr('data-aspectRatio', $(this).height() / $(this).width())
											.removeAttr('height')
											.removeAttr('width');
									} else {
										$(this)
											.attr('data-aspectRatio', '0.56')
											.removeAttr('height')
											.removeAttr('width');
									}
									
									if ($(this).parents('.post-area.masonry.classic').length > 0) {
										$(this)
											.attr('data-aspectRatio', '0.56')
											.removeAttr('height')
											.removeAttr('width');
									}
									
								}
								
							}
							
						});
					
				}
				
				
				/**
				* Responsive video iframes.
				*
				* @since 3.0
				*/
				function responsiveVideoIframes() {
					
					$('iframe[data-aspectRatio]').each(function () {
						
						var $el   = $(this),
						newWidth  = $el.parent().width();
						
						// In nectar slider
						if ($(this).parents('.swiper-slide').length > 0) {
							if ($(this).is(':visible')) {
								$el
									.width(newWidth)
									.height(newWidth * $el.attr('data-aspectRatio'));
							}
						}
						// All others
						else {
							$el
								.width(newWidth)
								.height(newWidth * $el.attr('data-aspectRatio'));
						}

					});
					
				}
				
				
				/**
				* Reveal the audio/video elements after the size has been calculated.
				*
				* @since 10.5
				*/
				function audioVideoVis() {
					
					//unwrap post and protfolio videos
					$('.video-wrap iframe').unwrap();
					$('#sidebar iframe[src]').unwrap();
					
					$('audio')
						.attr('width', '100%')
						.attr('height', '100%')
						.css('visibility', 'visible');
					
					if ($body.hasClass('mobile')) {
						$('video').css('visibility', 'hidden');
					} else {
						$('video').css('visibility', 'visible');
					}
					
					
					$('.wp-video').each(function () {
						var video = $(this).find('video').get(0);
						video.addEventListener('loadeddata', function () {
							$window.trigger('resize');
						}, false);
					});
					
					//webkit video back button fix 
					$('.main-content iframe[src]').each(function () {
						$(this).css({
							'opacity': '1',
							'visibility': 'visible'
						});
					});
					
				}
				

			
				
				
				/**
				* Nectar video background size calculations
				*
				* @since 5.0
				*/
				function resizeVideoToCover() {

					var vid_w_orig  = 1280,
					vid_h_orig      = 720,
					min_w           = 1200;
					
					$('.nectar-video-wrap').each(function () {
						
						var $containerHeight, $containerWidth;
						
						if ($(this).find('video').length == 0) {
							return;
						}
						
						if ($(this).parents('#page-header-bg').length > 0) {
							
							if ($('.container-wrap.auto-height').length > 0) {
								return false;
							}
							
							$containerHeight  = $(this).parents('#page-header-bg').outerHeight();
							$containerWidth   = $(this).parents('#page-header-bg').outerWidth();
						} else {
							
							if ($(this).hasClass('column-video')) {
								$containerHeight  = $(this).parents('.wpb_column').outerHeight();
								$containerWidth   = $(this).parents('.wpb_column').outerWidth();
							} else {
								$containerHeight  = $(this).parents('.wpb_row').outerHeight();
								$containerWidth   = ($(this).parents('.full-width-section').length > 0) ? nectarDOMInfo.winW : $(this).parents('.wpb_row').outerWidth();
							}
						}
						
						// Set the video viewport to the window size
						$(this).width($containerWidth);
						if ($(this).parents('#page-header-bg').length > 0) {
							$(this).height($containerHeight);
						}
						
						// Use largest scale factor of horizontal/vertical
						var scale_h = $containerWidth / vid_w_orig,
						scale_v     = ($containerHeight - $containerHeight) / vid_h_orig,
						scale       = scale_h > scale_v ? scale_h : scale_v;
						
						// Update minium width to never allow excess space
						min_w = 1280 / 720 * ($containerHeight + 40);
						
						// Don't allow scaled width < minimum video width
						if (scale * vid_w_orig < min_w) {
							scale = min_w / vid_w_orig;
						}
						
						// Now scale the video
						$(this).find('video, .mejs-overlay, .mejs-poster').width(Math.ceil(scale * vid_w_orig + 0));
						$(this).find('video, .mejs-overlay, .mejs-poster').height(Math.ceil(scale * vid_h_orig + 0));
						
						// And center it by scrolling the video viewport
						$(this).scrollLeft(($(this).find('video').width() - $containerWidth) / 2);
						$(this).scrollTop(($(this).find('video').height() - ($containerHeight)) / 2);
						$(this).find('.mejs-overlay, .mejs-poster').scrollTop(($(this).find('video').height() - ($containerHeight)) / 2);
						
						
						// Align bottom
						if ($(this).attr('data-bg-alignment') == 'center bottom' || $(this).attr('data-bg-alignment') == 'bottom') {
							$(this).scrollTop(($(this).find('video').height() - ($containerHeight + 6)));
						}
						// Align top
						else if ($(this).attr('data-bg-alignment') == 'center top' || $(this).attr('data-bg-alignment') == 'top') {
							$(this).scrollTop(0);
						}
						
						// Add loaded class
						$(this).addClass('position-loaded');
					});
					
				}
				
				
				
				/**
				* Nectar video background initialization.
				*
				* @since 5.0
				*/
				function videoBGInit() {
					
					if ($('.nectar-video-wrap').length == 0 && $('.nectar-youtube-bg').length == 0) {
						return;
					}
					
					setTimeout(function () {
						
						resizeVideoToCover();
						
						// Resize
						$window.on('resize',resizeVideoToCover);
						
						$('.video-color-overlay').each(function () {
							$(this).css('background-color', $(this).attr('data-color'));
						});
						
						$('.nectar-video-wrap').each(function () {
							
							if ($(this).find('video').length == 0) {
								return;
							}
							
							var $headerVideo  = ($(this).parents('#page-header-bg').length > 0) ? true : false;
							var $that         = $(this);
							var videoReady    = setInterval(function () {
								
								if ($that.find('video').get(0).readyState > 3) {
									
									if (!nectarDOMInfo.usingMobileBrowser) {
										$that.transition({
											'opacity': '1'
										}, 400);
										$that.find('video').transition({
											'opacity': '1'
										}, 400);
										$that.parent().find('.video-color-overlay').transition({
											'opacity': '0.7'
										}, 400);
										if ($headerVideo == true) {
											pageHeaderTextEffect();
										}
									}
									
									// Remove page loading screen
									$loadingScreenEl.addClass('loaded');
									setTimeout(function () {
										$loadingScreenEl.addClass('hidden');
									}, 1000);
									
									
									clearInterval(videoReady);
								}
								
							}, 60);
							
							if (nectarDOMInfo.usingMobileBrowser) {
								if ($that.parents('.full-width-section').length > 0 && $that.parents('#nectar_fullscreen_rows').length == 0) {
									$that.css('left', '50%');
								} else {
									$that.css('left', '0px');
								}
								
								if ($headerVideo == true) {
									pageHeaderTextEffect();
								}
								$that.find('video')[0].onplay = function () {
									$that.transition({
										'opacity': '1'
									}, 400);
									$that.find('video').transition({
										'opacity': '1'
									}, 400);
									$that.parent().find('.video-color-overlay').transition({
										'opacity': '0.7'
									}, 400);
								};
							}
							
						});
					}, 300);
					
					
					if (nectarDOMInfo.usingMobileBrowser) {
						
						$('.nectar-video-wrap').each(function () {
							
							if (!$(this).find('video').is('[muted]')) {
								
								// Autoplay not supported unless muted
								$(this).parent().find('.mobile-video-image').show();
								$(this).remove();
							}
							
						});

					}
					
					
					$('.wpb_row:has(".nectar-video-wrap"):not(.fp-section)').each(function (i) {
						$(this).css('z-index', 100 + i);
					});
					
					
					$(".vc_row").each(function () {
						var youtubeUrl, youtubeId, $row = jQuery(this);
						$row.find('.nectar-youtube-bg').length > 0 ? (youtubeUrl = $row.find('.nectar-youtube-bg span').text(), youtubeId = nectarExtractYoutubeId(youtubeUrl), youtubeId && ($row.find(".vc_video-bg").remove(), nectarInsertYoutubeVideoAsBackground($row.find('.nectar-youtube-bg'), youtubeId))) : $row.find(".nectar-youtube-bg").remove();
						
						// Remove yt url
						$row.find('.nectar-youtube-bg span').remove();
						
						if (!nectarDOMInfo.usingMobileBrowser) {
							$row.find('.nectar-video-wrap, .nectar-youtube-bg').css({
								'opacity': '1',
								'width': '100%',
								'height': '100%'
							});
						}
						$row.find('.video-color-overlay').transition({
							'opacity': '0.7'
						}, 400);
					});
					
					
					function nectarInsertYoutubeVideoAsBackground($element, youtubeId, counter) {
						if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function () {
							nectarInsertYoutubeVideoAsBackground($element, youtubeId, counter++)
						}, 100);
						var $container = $element.prepend('<div class="vc_video-bg"><div class="inner"></div></div>').find(".inner");
						new YT.Player($container[0], {
							width: "100%",
							height: "100%",
							videoId: youtubeId,
							playerVars: {
								playlist: youtubeId,
								iv_load_policy: 3,
								enablejsapi: 1,
								disablekb: 1,
								autoplay: 1,
								controls: 0,
								showinfo: 0,
								rel: 0,
								loop: 1
							},
							events: {
								onReady: function (event) {
									event.target.mute().setLoop(!0);
									nectarResizeVideoBackground($element);
								}
							}
						}), nectarResizeVideoBackground($element), jQuery(window).on("resize", function () {
							nectarResizeVideoBackground($element);
						});
						
						setTimeout(function () {
							nectarResizeVideoBackground($element);
						}, 100);
					}
					
					function nectarResizeVideoBackground($element) {
						var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
						containerH = $element.innerHeight(),
						ratio1 = 16,
						ratio2 = 9;
						ratio1 / ratio2 > containerW / containerH ? (iframeW = containerH * (ratio1 / ratio2),
						iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px", iframeW += "px", iframeH += "px") : (iframeW = containerW, iframeH = containerW * (ratio2 / ratio1), marginTop = -Math.round((iframeH - containerH) / 2) + "px",
						marginLeft = -Math.round((iframeW - containerW) / 2) + "px", iframeW += "px", iframeH += "px"),
						$element.find(".vc_video-bg iframe").css({
							maxWidth: "1000%",
							marginLeft: marginLeft,
							marginTop: marginTop,
							width: iframeW,
							height: iframeH
						});
					}
					
					function nectarExtractYoutubeId(url) {
						
						if ("undefined" == typeof url) {
							return !1;
						}
						
						var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
						return null !== id ? id[1] : !1
					}
					
					
				}
				
				
				

				
				
				
				/*-------------------------------------------------------------------------*/
				/*	Header + Search
				/*-------------------------------------------------------------------------*/
				
				/**
				* Correct megamenus in mobile navigation.
				*
				* @since 8.0
				*/
				function mobileNavMegamenuCorrect() {
					
					////mobile megamenus without titles / nested groupings
					var $mobileNavSelector = '.off-canvas-menu-container.mobile-only ';
					
					$($mobileNavSelector + '.megamenu > ul > li > a').each(function () {
						if ($(this).text() == 'â€“') {
							var $navLIs = $(this).parent().find('> ul > li').clone();
							$(this).parent().find('ul').remove();
							$(this).parent().parent().append($navLIs);
							$(this).parent().remove();
						}
					});
					
				}
				
				
				
				
				
				
				
				
				/**
				* Material theme skin off canvas menu initialization.
				*
				* @since 10.5
				*/
				function materialSkinOCM_Init() {
					
					if ($('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length > 0) {
						OCM_materialWidth();
					}
					
					OCM_materialIconMarkup();
					materialSkinTransition();
					
					$window.on('resize', OCM_materialSize);
					
				}
				
				

				
				/**
				* Material theme skin transition helper
				*
				* @since 10.5
				*/
				function materialSkinTransition() {
					
					if ($('body.material[data-header-search="true"]').length > 0 || 
					$('body.material .ocm-effect-wrap').length > 0) {
						
						var materialTransTO,
						allowMaterialResizeCalc = false,
						orientTrack = 0,
						$winDOMWidth  = nectarDOMInfo.winW,
						$winDOMHeight = nectarDOMInfo.winH;
						
						// For mobile make sure the orientation has changed.
						window.addEventListener("orientationchange", function () {
							orientTrack = 1;
						});
							
						// Resize.
						$window.on('resize', function () {
							
							if( nectarDOMInfo.usingMobileBrowser ) {
								// Mobile.
								if (($window.width() != $winDOMWidth && $window.height != $winDOMHeight) || orientTrack === 1) {
									
									// Store the current window dimensions.
									$winDOMWidth  = nectarDOMInfo.winW;
									$winDOMHeight = nectarDOMInfo.winH;
									
									// Reset orientation change tracker.
									orientTrack = 0;
									
									// Set to allow.
									allowMaterialResizeCalc = true;
									
								}
							} else {
								// Desktop always allows.
								allowMaterialResizeCalc = true;
							}
							
							if(allowMaterialResizeCalc) {
								
								clearTimeout(materialTransTO);
								
								$('body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow')
									.addClass('no-material-transition');
								
								materialTransTO = setTimeout(function () {
									$('body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow')
										.removeClass('no-material-transition');
								}, 250);
								
								OCM_materialWidth();

								// Reset allow.
								allowMaterialResizeCalc = false;
								
							} // endif for allow.
							
						}); // end resize.
						
					}
					
				}
				
				
				
				/**
				* Calculate off canvas menu slide out from right on hover
				*
				* @since 8.0
				*/
				function calculateHoverNavMinHeight() {
					
					var $widgetHeights = 0;
					$('#slide-out-widget-area > .widget').each(function () {
						$widgetHeights += $(this).height();
					});
					
					var $menuHeight; 

					if(($offCanvasEl.height() - 25 - $('.bottom-meta-wrap').outerHeight(true) - $widgetHeights) > $('#slide-out-widget-area .off-canvas-menu-container:last-child').height()) {
						$menuHeight = $offCanvasEl.height() - 25 - $('.bottom-meta-wrap').outerHeight(true) - $widgetHeights;
					} else {
						$menuHeight = $('#slide-out-widget-area .off-canvas-menu-container:last-child').height();
					}
					
					$('#slide-out-widget-area .inner').css({
						'height': 'auto',
						'min-height': $menuHeight
					});
					
					$('#slide-out-widget-area > .inner .off-canvas-menu-container').transition({
						y: '-' + ($('#slide-out-widget-area > .inner .off-canvas-menu-container:last-child').height() / 2) + 'px'
					}, 0);
					
				}
				
				
				/**
				* Material theme skin off canvas menu width.
				*
				* @since 8.0
				*/
				function OCM_materialWidth() {

					$('#slide-out-widget-area.slide-out-from-right').css({
						'padding-top': $window.height() * 0.1,
						'padding-bottom': $window.height() * 0.1
					});
					
					OCM_overflowState();
				}
				
				

				/**
				* Material theme skin off canvas menu icon markup
				*
				* @since 8.0
				*/
				function OCM_materialIconMarkup() {
					
					if ($('body.material').length > 0 && $('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length == 0 ) {
						
						if ($('body[data-slide-out-widget-area-style*="fullscreen"]').length == 0 && $('#mobile-menu').length == 0) {
							var $menuIconClone = $('header#top nav ul .slide-out-widget-area-toggle a > span > i').clone();
							$menuIconClone.addClass('hover-effect');
							$('header#top nav ul .slide-out-widget-area-toggle a > span').append($menuIconClone);
							
							var $menuIconClone2 = $('header#top .slide-out-widget-area-toggle.mobile-icon a > span > i').clone();
							$menuIconClone2.addClass('hover-effect');
							$('header#top .slide-out-widget-area-toggle.mobile-icon a > span').append($menuIconClone2);
						}
						
						$('body:not([data-slide-out-widget-area-style="slide-out-from-right"]) header#top .slide-out-widget-area-toggle a > span')
							.append($('<span class="close-wrap"> <span class="close-line close-line1"></span> <span class="close-line close-line2"></span> </span>'));
					}
					
					if ($('body.material #boxed').length > 0 && $('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length > 0) {
						$('#ajax-content-wrap > .slide-out-widget-area-toggle.slide-out-hover-icon-effect').insertAfter('.ocm-effect-wrap');
					}
					
					//move material skin default ocm
					if ($('body.material').length > 0 && $('body[data-slide-out-widget-area-style*="fullscreen"]').length == 0) {
						$('body.material #slide-out-widget-area.slide-out-from-right .slide_out_area_close').insertAfter('.ocm-effect-wrap');
						$('#slide-out-widget-area-bg').insertAfter('.ocm-effect-wrap');
						$offCanvasEl.insertAfter('.ocm-effect-wrap');
					}
					
				}
				

				
				/**
				* Material theme skin off canvas menu height
				*
				* @since 8.0
				*/
				function OCM_materialSize() {
					if ($('.ocm-effect-wrap.material-ocm-open').length > 0) {
						
						$('.ocm-effect-wrap').css({
							'height': $window.height()
						});
						
						$('.ocm-effect-wrap-inner').css({
							'padding-top': nectarDOMInfo.adminBarHeight
						});

					}
				}
				

				
				/**
				* Off canvas menu dropdown markup
				*
				* @since 8.0
				*/
				function OCM_dropdownMarkup() {
					var $nectar_ocm_dropdown_func = ($('#slide-out-widget-area[data-dropdown-func]').length > 0) ? $offCanvasEl.attr('data-dropdown-func') : 'default';
					if ($nectar_ocm_dropdown_func == 'separate-dropdown-parent-link') {
						$('#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children').append('<span class="ocm-dropdown-arrow"><i class="fa fa-angle-down"></i></span>');
					}
				}
				
				
				
				
				
				/**
				* Off canvas menu dropdown icon position.
				*
				* @since 8.0
				*/
				function OCM_dropdownIconPos() {
					$('#slide-out-widget-area[class*="slide-out-from-right"] .off-canvas-menu-container li.menu-item-has-children').each(function () {
						$(this).find('.ocm-dropdown-arrow').css({
							'top': $(this).find('a').height() / 2
						});
					});
				}
				
				
				
				

				
				/**
				* Off canvas menu overflow scrolling.
				*
				* @since 8.0
				*/
				function OCM_overflowState() {
					
					//switch position of social media/extra info based on screen size
					if (nectarDOMInfo.winW < 1000 || 
					$('body > #boxed').length > 0 || 
					$('.ocm-effect-wrap-inner > #boxed').length > 0) {
						
						$('#slide-out-widget-area.fullscreen .off-canvas-social-links, #slide-out-widget-area.fullscreen-alt .off-canvas-social-links').appendTo('#slide-out-widget-area .inner');
						$('#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text').appendTo('#slide-out-widget-area .inner');
						
					} else {
						$('#slide-out-widget-area.fullscreen .off-canvas-social-links,#slide-out-widget-area.fullscreen-alt .off-canvas-social-links').appendTo('#slide-out-widget-area .inner-wrap');
						$('#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text').appendTo('#slide-out-widget-area .inner-wrap');
					}
					
					//add overflow
					if ($('#slide-out-widget-area[class*="fullscreen"] .inner').height() >= $window.height() - 100) {
						$('#slide-out-widget-area[class*="fullscreen"] .inner, #slide-out-widget-area[class*="fullscreen"]').addClass('overflow-state');
					} else {
						$('#slide-out-widget-area[class*="fullscreen"] .inner, #slide-out-widget-area[class*="fullscreen"]').removeClass('overflow-state');
					}
					
					$('#slide-out-widget-area[class*="fullscreen"] .inner').transition({
						y: '-' + ($('#slide-out-widget-area[class*="fullscreen"] .inner').height() / 2) + 'px'
					}, 0);
					
					//close mobile only slide out widget area if switching back to desktop
					if ($('.slide-out-from-right.open .off-canvas-menu-container.mobile-only').length > 0 && $('body.mobile').length == 0) {
						$('#slide-out-widget-area .slide_out_area_close').trigger('click');
					}
					
					//sizing for dropdown
					OCM_dropdownIconPos();
					
				}
				
				
	
				/**
				* Off canvas menu: slide out from right hover open.
				*
				* @since 10.5
				*/
				function OCM_slideOutRightHoverOpen() {
					
					calculateHoverNavMinHeight();
					
					if (nectarDOMInfo.usingMobileBrowser && $('#slide-out-widget-area.open').length > 0) {
						OCM_mobileSlideOutRightHoverCloseCheck();
						return;
					}
					
					$offCanvasEl.css({
						'transform': 'translate3d(0,0,0)'
					}).addClass('open');
					
					// Icon effect
					// Set position
					if ($('header#top .container .span_9 > .slide-out-widget-area-toggle').length > 0) {
						
						var $hIconEl       = $('.slide-out-hover-icon-effect'),
						secondaryBarHeight = nectarDOMInfo.secondaryHeaderHeight;
						
						var $nectarHamMenuPos;
						
						if ($('body.mobile').length > 0) {
							
							$hIconEl.css({
								'top': $('header#top .span_9 > .slide-out-widget-area-toggle a').offset().top - nectarDOMInfo.scrollTop,
								'right': parseInt($('#header-outer header > .container').css('padding-right')) + 1
							});
							
						} else {
							
							if ($bodyBorderHeaderColorMatch) {
								
								var $extraCushion = ($('#header-outer[data-has-menu="false"]').length > 0) ? 2 : 1;
								$hIconEl.css({
									'top': nectarDOMInfo.adminBarHeight + secondaryBarHeight + parseInt($('header#top nav >ul .slide-out-widget-area-toggle a').css('padding-top')),
									'right': 29 + $extraCushion
								});
								
							} else {
								
								if ($('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0) {
									$nectarHamMenuPos = ($('header#top .span_9 > .slide-out-widget-area-toggle').css('display') == 'block') ? $('header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon').position() : $('header#top .span_3 .right-side .slide-out-widget-area-toggle > div').offset();
									
									$hIconEl.css({
										'top': parseInt($nectarHamMenuPos.top) - nectarDOMInfo.scrollTop,
										'right': parseInt($('#header-outer header >.container').css('padding-right')) + 2
									});
								} else {
									
									if( $body.hasClass('ascend') ) {
										$nectarHamMenuPos = ($('header#top .span_9 > .slide-out-widget-area-toggle').css('display') == 'block') ? $('header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon').position() : $('header#top nav .buttons .slide-out-widget-area-toggle > div a > span').position();
									} else {
										$nectarHamMenuPos = ($('header#top .span_9 > .slide-out-widget-area-toggle').css('display') == 'block') ? $('header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon').position() : $('header#top nav .buttons .slide-out-widget-area-toggle > div').position();
									}
									
									
									if ($('#header-secondary-outer.hide-up').length > 0) {
										secondaryBarHeight = 0;
									}
									
									$hIconEl.css({
										'top': nectarDOMInfo.adminBarHeight + secondaryBarHeight + parseInt($nectarHamMenuPos.top),
										'right': parseInt($('#header-outer header >.container').css('padding-right')) + 2
									});
								}
								
							} // No body border color match.
							
						} //Not on mobile.
						
					}
					
					////Open
					$('.slide-out-hover-icon-effect .lines-button')
						.removeClass('no-delay')
						.addClass('unhidden-line');
					
					if ($('#header-outer[data-permanent-transparent="1"]').length == 0 && 
						$('#nectar_fullscreen_rows').length == 0 && 
						!nectarDOMInfo.usingFrontEndEditor && 
						nectarDOMInfo.winW > 1000) {
						
						if (!(nectarDOMInfo.scrollTop == 0 && $('#header-outer.transparent').length > 0)) {
							
							if ($('body.mobile').length == 0 && $bodyBorderHeaderColorMatch) {
								
								$headerOuterEl.attr('data-transparent', 'true').addClass('no-bg-color').addClass('slide-out-hover');
								$('#header-outer header, #header-outer > .cart-outer').addClass('all-hidden');
							}
							
						}
						
						if ($('#header-outer[data-remove-fixed="1"]').length == 0 && $('body.mobile').length == 0 && $bodyBorderHeaderColorMatch) {

							if (headerResize == true) {
								
								$window.off('scroll', bigNav);
								$window.off('scroll', smallNav);

							} else {
								$window.off('scroll', opaqueCheck);
								$window.off('scroll', transparentCheck);
							}
						}
						
					}
					
					if (!nectarDOMInfo.usingMobileBrowser) {
						$window.on('mousemove.rightOffsetCheck', OCM_slideOutRightHoverCloseCheck);
					}
					
				}
				
				
				/**
				* Off canvas menu: slide out from right hover close
				*
				* @since 10.5
				*/
				function OCM_slideOutRightHoverCloseCheck(e) {
					
					var $windowWidth = $window.width();
					
					if (e.clientX < $windowWidth - 340 - $bodyBorderWidth && $offCanvasEl.hasClass('mouse-accessed')) {
						
						$offCanvasEl.removeClass('mouse-accessed');
						$window.off('mousemove.rightOffsetCheck', OCM_slideOutRightHoverCloseCheck);
						
						$offCanvasEl.css({
							'transform': 'translate3d(341px,0,0)'
						}).removeClass('open');
						
						$headerOuterEl.removeClass('style-slide-out-from-right');
						
						$('.slide-out-hover-icon-effect .lines-button')
							.removeClass('unhidden-line')
							.addClass('no-delay');
						
						if ($('#header-outer[data-permanent-transparent="1"]').length == 0) {
							
							if ($('#header-outer[data-remove-fixed="1"]').length == 0 && $('body.mobile').length == 0 && $bodyBorderHeaderColorMatch) {
								
								if ($('body.mobile').length == 0) {
									$headerOuterEl.removeClass('no-bg-color');
									$('#header-outer header, #header-outer > .cart-outer').removeClass('all-hidden');
								}
							}
							
							if ($('#header-outer[data-remove-fixed="1"]').length == 0 && $('body.mobile').length == 0 && $bodyBorderHeaderColorMatch) {
	
								if (headerResize == true) {
									
									$window.off('scroll.headerResizeEffect');
									
									if (nectarDOMInfo.scrollTop == 0) {
										
										$window.on('scroll.headerResizeEffect', smallNav);
										
										if ($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && 
										$bodyBorderTop.length > 0 && 
										$bodyBorderHeaderColorMatch == true && 
										$('#header-outer.pseudo-data-transparent').length > 0) {
											
											$('#header-outer[data-full-width="true"] header > .container').stop(true, true).animate({
												'padding': '0'
											}, {
												queue: false,
												duration: 250,
												easing: 'easeOutCubic'
											});
											
										}
									} else {
										$window.on('scroll.headerResizeEffect', bigNav);
									}
									
								} else {
									
									$window.off('scroll.headerResizeEffectOpaque');
									$window.on('scroll.headerResizeEffectOpaque', opaqueCheck);
								}
							}
						}
					}
					
				}
				
				
				/**
				* Off canvas menu: mobile slide out from right hover close.
				*
				* @since 10.5
				*/
				function OCM_mobileSlideOutRightHoverCloseCheck() {
					
					$offCanvasEl.css({
						'transform': 'translate3d(341px,0,0)'
					}).removeClass('open');
					
					$headerOuterEl.removeClass('style-slide-out-from-right');
					
					$('.slide-out-hover-icon-effect .lines-button')
						.removeClass('unhidden-line')
						.addClass('no-delay');
					
					if ($('#header-outer[data-permanent-transparent="1"]').length == 0) {
						
						$headerOuterEl.removeClass('no-bg-color');
						$('#header-outer header').removeClass('all-hidden');
						
					}
					
					
					if ($('#header-outer[data-remove-fixed="1"]').length == 0 && $('body.mobile').length == 0 && $bodyBorderHeaderColorMatch) {
						
						if (headerResize == true) {
							
							$window.off('scroll.headerResizeEffect');
							
							if (nectarDOMInfo.scrollTop == 0) {
								
								$window.on('scroll.headerResizeEffect', smallNav);
								
								if ($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && 
								$bodyBorderTop.length > 0 && 
								$bodyBorderHeaderColorMatch == true && 
								$('#header-outer.pseudo-data-transparent').length > 0) {
									
									$('#header-outer[data-full-width="true"] header > .container').stop(true, true).animate({
										'padding': '0'
									}, {
										queue: false,
										duration: 250,
										easing: 'easeOutCubic'
									});
									
								}
							} 
							
							else {
								$window.on('scroll.headerResizeEffect', bigNav);
							}
							
						} else {
							
							$window.off('scroll.headerResizeEffectOpaque');
							$window.on('scroll.headerResizeEffectOpaque', opaqueCheck);
							
						}
						
					}

				}
				
				
				
				/**
				* Off canvas menu: slide out from right hover initialization.
				*
				* @since 10.5
				*/
				function OCM_slideOutRightHoverInit() {
					
						if ($('#ajax-content-wrap > .slide-out-widget-area-toggle').length == 0) {
							
							//icon effect html creation
							$('<div class="slide-out-widget-area-toggle slide-out-hover-icon-effect" data-icon-animation="simple-transform"><div> <a href="#sidewidgetarea" class="closed"> <span> <i class="lines-button x2"> <i class="lines"></i> </i> </span> </a> </div> </div>').insertAfter('#slide-out-widget-area');
							
							if ($('#header-outer[data-has-menu="true"]').length > 0 || $('body[data-header-search="true"]').length > 0) {
								$('.slide-out-widget-area-toggle').addClass('small');
							}
						}
						
						
						//hover triggered
						if (!nectarDOMInfo.usingMobileBrowser) {
							$body.on('mouseenter', '#header-outer .slide-out-widget-area-toggle:not(.std-menu) a', OCM_slideOutRightHoverOpen);
							$offCanvasEl.on('mouseenter', function () {
								$(this).addClass('mouse-accessed');
							});
							
						} else {
							$body.on('click', '.slide-out-widget-area-toggle:not(.std-menu) a', OCM_slideOutRightHoverOpen);
						}
						
						$window.on('smartresize', calculateHoverNavMinHeight);

					
				}
				

				/**
				* Off canvas menu: slide out from right open.
				*
				* @since 10.5
				*/
				function OCM_slideOutRightOpen() {
					
						var $slideOutAmount = ($bodyBorderTop.length > 0 && $('body.mobile').length == 0) ? $bodyBorderTop.height() : 0;
						
						if ($('body.material').length == 0) {
							
							//calc height if used bottom meta
							$('#slide-out-widget-area .inner').css({
								'height': 'auto',
								'min-height': $offCanvasEl.height() - 25 - $('.bottom-meta-wrap').height()
							});
							
							if ($('#boxed').length == 0) {
								
								$('.container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image, #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title').stop(true).transition({
									x: '-300px'
								}, 700, 'easeInOutCubic');
								
								var $withinCustomBreakpoint = mobileBreakPointCheck();
								
								if ($('#header-outer[data-format="centered-logo-between-menu"]').length == 0 || $withinCustomBreakpoint) {
									
									if ($('#header-outer[data-transparency-option="1"]').length == 0 || 
									($('#header-outer[data-transparency-option="1"]').length > 0 && $('#header-outer[data-full-width="true"]').length == 0) || 
									$('body.mobile').length > 0) {
										
										$headerOuterEl.stop(true).css('transform', 'translateY(0)').transition({
											x: '-' + (300 + $slideOutAmount) + 'px'
										}, 700, 'easeInOutCubic');
										
									} else {
										
										$headerOuterEl.stop(true).css('transform', 'translateY(0)').transition({
											x: '-' + (300 + $slideOutAmount) + 'px',
											'background-color': 'transparent',
											'border-bottom': '1px solid rgba(255,255,255,0.22)'
										}, 700, 'easeInOutCubic');
										
									}
								} else {
									$('#header-outer header#top nav > ul.buttons, body:not(.material) #header-outer .cart-outer .cart-menu-wrap').transition({
										x: '-300px'
									}, 700, 'easeInOutCubic');
								}
								
							}
							
							$offCanvasEl.stop(true).transition({
								x: '-' + $slideOutAmount + 'px'
							}, 700, 'easeInOutCubic').addClass('open');
							
							
							if ($('#boxed').length == 0) {
								
								// Full width menu adjustments
								if ($('#header-outer[data-full-width="true"]').length > 0 && !$body.hasClass('mobile')) {
									$headerOuterEl.addClass('highzI');
									$('#ascrail2000').addClass('z-index-adj');
									
									if ($('#header-outer[data-format="centered-logo-between-menu"]').length == 0) {
										
										if ($bodyBorderWidth == 0) {
											$('header#top #logo').stop(true).transition({
												x: (300 + $slideOutAmount) + 'px'
											}, 700, 'easeInOutCubic');
										}
										
									}
									
									$('header#top .slide-out-widget-area-toggle .lines-button').addClass('close');
									
									$('body #header-outer nav > ul > li > a').css({
										'margin-bottom': '0'
									});
									
								}
								
							}
							
							$headerOuterEl.addClass('style-slide-out-from-right');
							
							// Fade In BG Overlay
							$offCanvasBG.css({
								'height': '100%',
								'width': '100%'
							}).stop(true).transition({
								'opacity': 1
							}, 700, 'easeInOutCubic', function () {
								$('.slide-out-widget-area-toggle:not(.std-menu) > div > a').removeClass('animating');
							});
							
							// Hide menu if no space
							if ($('#header-outer[data-format="centered-logo-between-menu"]').length == 0) {
								
								var $logoWidth = ($('#logo img:visible').length > 0) ? $('#logo img:visible').width() : $('#logo').width();
								
								if ($('header#top nav > .sf-menu').offset().left - $logoWidth - 300 < 20) {
									$headerOuterEl.addClass('hidden-menu');
								}
								
							} else {
								$headerOuterEl.addClass('hidden-menu-items');
							}
							
							
							if ($('#header-outer[data-remove-fixed="1"]').length == 0 && nectarDOMInfo.winW > 1000) {
								
								if ($bodyBorderHeaderColorMatch == true && headerResize == true) {
									
									$headerOuterEl.stop(true).transition({
										y: '0'
									}, 0).addClass('transparent').css('transition', 'transform');
									if ($headerOuterEl.attr('data-transparent-header') != 'true') {
										$headerOuterEl.attr('data-transparent-header', 'true').addClass('pseudo-data-transparent');
									}
									
									$window.off('scroll', bigNav);
									$window.off('scroll', smallNav);
									
								} else if ($bodyBorderHeaderColorMatch == true) {
									
									$headerOuterEl.addClass('transparent');
									$window.off('scroll', opaqueCheck);
									$window.off('scroll', transparentCheck);
									
									if ($headerOuterEl.attr('data-transparent-header') != 'true') {
										$headerOuterEl.attr('data-transparent-header', 'true').addClass('pseudo-data-transparent');
									}
								}
							}
							
						} else if ($('body.material').length > 0) {
							
							// Material theme skin slide out from right
							
							//move ajax loading outside
							if ($loadingScreenEl.length > 0 && $('.ocm-effect-wrap #ajax-loading-screen').length > 0) {
								$loadingScreenEl.insertBefore('.ocm-effect-wrap');
							}
							
							// Hide secondary header when not at top with hhun
							if (nectarDOMInfo.scrollTop > 40) {
								
								$('body[data-hhun="1"] #header-secondary-outer').addClass('hidden');
							}
							
							
							setTimeout(function () {
								$('.slide-out-widget-area-toggle:not(.std-menu) > div > a').removeClass('animating');
							}, 300);
							$('#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle').addClass('material-open');
							
							
							// Handle bottom bar nav
							if ($('body:not(.mobile) #header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0 && 
							$('#header-outer[data-format="centered-menu-bottom-bar"] .span_9').css('display') != 'none') {
								
								$('#header-outer:not(.fixed-menu)').css('top', nectarDOMInfo.adminBarHeight - nectarDOMInfo.scrollTop + 'px');
								
								if ($headerSecondaryEl.length > 0 && $('#header-outer.fixed-menu').length > 0) {
									$headerSecondaryEl.css('visibility', 'hidden');
								}
								
							}
							
							$('#ajax-content-wrap').css({
								'position': 'relative',
								'top': '-' + nectarDOMInfo.scrollTop + 'px'
							});

							$('.ocm-effect-wrap-inner').css({
								'padding-top': nectarDOMInfo.adminBarHeight
							});
							
							$('#fp-nav').addClass('material-ocm-open');
							
							$body.addClass('material-ocm-open');
							$body.addClass('nectar-no-flex-height');
							
							$('.ocm-effect-wrap').css({
								'height': nectarDOMInfo.winH
							});
							
							setTimeout(function () {
								$('.ocm-effect-wrap').addClass('material-ocm-open');
							}, 40);
							
							
							$('body > .slide_out_area_close').addClass('follow-body');
							
							//icon effect
							$('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').addClass('effect-shown');
							
							//handle hhun when at top
							$('body[data-hhun="1"]:not(.no-scroll):not(.mobile) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({
								'transition': 'none',
								'transform': 'translateY(' + nectarDOMInfo.adminBarHeight + 'px)'
							});
							
							setTimeout(function () {
								$('body > .slide_out_area_close').addClass('material-ocm-open');
							}, 350);
							
							
						}
						
				}
				
				
				/**
				* Off canvas menu: slide out from right close.
				*
				* @since 10.5
				*/
				function OCM_slideOutRightClose() {
					
					if ($('body.material').length == 0) {
						
						$('.container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image,  #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title').stop(true).transition({
							x: '0px'
						}, 700, 'easeInOutCubic');
						
						if ($('#header-outer[data-transparency-option="1"]').length > 0 && $('#boxed').length == 0) {
							var $currentRowBG = ($('#header-outer[data-current-row-bg-color]').length > 0) ? $headerOuterEl.attr('data-current-row-bg-color') : $headerOuterEl.attr('data-user-set-bg');
							$headerOuterEl.stop(true).transition({
								x: '0px',
								'background-color': $currentRowBG
							}, 700, 'easeInOutCubic');
						} else {
							$headerOuterEl.stop(true).transition({
								x: '0px'
							}, 700, 'easeInOutCubic');
						}
						
						$offCanvasEl.stop(true).transition({
							x: '301px'
						}, 700, 'easeInOutCubic').removeClass('open');
						
						
						if ($('#boxed').length == 0) {
							if ($('#header-outer[data-full-width="true"]').length > 0) {
								$headerOuterEl.removeClass('highzI');
								$('header#top #logo').stop(true).transition({
									x: '0px'
								}, 700, 'easeInOutCubic');
								$('.lines-button').removeClass('close');
								
							}
						}
						
						if ($('#header-outer[data-format="centered-logo-between-menu"]').length > 0) {
							$('#header-outer header#top nav > ul.buttons, #header-outer .cart-outer .cart-menu-wrap').stop(true).transition({
								x: '0px'
							}, 700, 'easeInOutCubic');
						}
						
						//fade out overlay
						$offCanvasBG.stop(true).transition({
							'opacity': 0
						}, 700, 'easeInOutCubic', function () {
							
							$('.slide-out-widget-area-toggle a').removeClass('animating');
							
							$(this).css({
								'height': '1px',
								'width': '1px'
							});
							
							if ($('#header-outer[data-remove-fixed="1"]').length == 0) {
								
								//hide menu if transparent, user has scrolled down and hhun is on
								if ($headerOuterEl.hasClass('parallax-contained') && 
								nectarDOMInfo.scrollTop > 0 && 
								$('#header-outer[data-permanent-transparent="1"]').length == 0) {
									$headerOuterEl.removeClass('parallax-contained').addClass('detached').removeClass('transparent');
								} 
								else if (nectarDOMInfo.scrollTop == 0 && $('body[data-hhun="1"]').length > 0 && $('#page-header-bg[data-parallax="1"]').length > 0 ||
								nectarDOMInfo.scrollTop == 0 && $('body[data-hhun="1"]').length > 0 && $('.parallax_slider_outer').length > 0) {
									
									if ($('#header-outer[data-transparency-option="1"]').length > 0) {
										$headerOuterEl.addClass('transparent');
									}
									
									$headerOuterEl
										.addClass('parallax-contained')
										.removeClass('detached');
									
								}
								
							}
							
							//fix for fixed subpage menu
							$('.container-wrap').css('transform', 'none');
							
						});
						
						
						$headerOuterEl.removeClass('style-slide-out-from-right');
						
					
						if ($('#header-outer[data-remove-fixed="1"]').length == 0) {
							
							if ($bodyBorderHeaderColorMatch == true && 
								headerResize == true && 
								nectarDOMInfo.winW > 1000) {
								
								$window.off('scroll.headerResizeEffect');
								if (nectarDOMInfo.scrollTop == 0) {
									
									$window.on('scroll.headerResizeEffect', smallNav);
									
									if ($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && 
									$bodyBorderTop.length > 0 && 
									$bodyBorderHeaderColorMatch == true && 
									$('#header-outer.pseudo-data-transparent').length > 0) {
										
										$('#header-outer[data-full-width="true"] header > .container').stop(true, true).animate({
											'padding': '0'
										}, {
											queue: false,
											duration: 250,
											easing: 'easeOutCubic'
										});
										
									}
								} else {
									$window.on('scroll.headerResizeEffect', bigNav);
								}
								
								if ($headerOuterEl.hasClass('pseudo-data-transparent')) {
									
									$headerOuterEl.attr('data-transparent-header', 'false')
										.removeClass('pseudo-data-transparent')
										.removeClass('transparent');
								}
								
								$headerOuterEl.css('transition', 'transform');
								
							} else if ($bodyBorderHeaderColorMatch == true && nectarDOMInfo.winW > 1000) {
								
								$window.off('scroll.headerResizeEffectOpaque');
								$window.on('scroll.headerResizeEffectOpaque', opaqueCheck);
								
								$headerOuterEl.css('transition', 'transform');
								
								if ($headerOuterEl.hasClass('pseudo-data-transparent')) {
									$headerOuterEl.attr('data-transparent-header', 'false')
										.removeClass('pseudo-data-transparent')
										.removeClass('transparent');
								}
							}
						}
					} 
					
					else if ($('body.material').length > 0) {
						
						//material
						$offCanvasEl.removeClass('open');
						
						$('#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle').removeClass('material-open');
						$('.ocm-effect-wrap, .ocm-effect-wrap-shadow, body > .slide_out_area_close, #fp-nav').removeClass('material-ocm-open');
						
						$('body > .slide_out_area_close').removeClass('follow-body');
						
						setTimeout(function () {
							$('.slide-out-widget-area-toggle a').removeClass('animating');
							
							$body.removeClass('material-ocm-open');
							$body.removeClass('nectar-no-flex-height');
							
							$('.ocm-effect-wrap').css({
								'height': '100%'
							});
							
							$('.ocm-effect-wrap-inner').css({
								'padding-top': '0'
							});
							
							$window.scrollTop(Math.abs(parseInt($('#ajax-content-wrap').css('top'))));
							
							$('#ajax-content-wrap').css({
								'position': '',
								'top': ''
							});
							
							
							//handle bottom bar nav
							if ($('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0 && 
							$('#header-outer[data-format="centered-menu-bottom-bar"] .span_9').css('display') != 'none' && 
							$('body.mobile').length == 0) {
								
								$('#header-outer:not(.fixed-menu)').css('top', '');
								$headerSecondaryEl.css('visibility', '');
								
							}
							
							//handle hhun when at top
							$('body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({
								'transform': ''
							});
							setTimeout(function () {
								$('body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({
									'transition': ''
								});
							}, 30);
							
							
							$('body[data-hhun="1"] #header-secondary-outer.hidden').removeClass('hidden');
							
						}, 900);
						
						setTimeout(function () {
							
							//icon effect
							$('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a')
								.addClass('no-trans')
								.removeClass('effect-shown');
								
						}, 200);
						
						setTimeout(function () {
							//icon
							$('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').removeClass('no-trans');
						}, 500);
						
					}
					
				}
				
				
				
				
				/**
				* Off canvas menu: fullscreen open.
				*
				* @since 10.5
				*/
				function OCM_fullscreenOpen() {
					
					if ($('body.material').length > 0) {
						$('header#top .slide-out-widget-area-toggle a').addClass('menu-push-out');
					}
					
					// Scroll away from fixed reveal footer if shown (firefox bug with bluring over it)
					var $scrollDelay = 0;
					var $scrollDelay2 = 0;
					
					if (nectarDOMInfo.scrollTop + $window.height() > $('.blurred-wrap').height() && $('#nectar_fullscreen_rows').length == 0) {
						$('body,html').stop().animate({
							scrollTop: $('.blurred-wrap').height() - $window.height()
						}, 600, 'easeInOutCubic');
						$scrollDelay = 550;
						$scrollDelay2 = 200;
					}
					
					$('header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button').addClass('close');
					setTimeout(function () {
						$('.blurred-wrap').addClass('blurred');
					}, $scrollDelay);
					$('#slide-out-widget-area.fullscreen').show().addClass('open');
					
					if ($('.nectar-social.fixed').length == 0) {
						hideToTop();
					}
					
					// Remove box shadow incase at the top of the page with nectar box roll above
					$('.container-wrap').addClass('no-shadow');
					$headerOuterEl.stop(true).css('transform', 'translateY(0)');
					
					setTimeout(function () {
						
						$('.off-canvas-menu-container .menu > li').each(function (i) {
							$(this).delay(i * 50).transition({
								y: 0,
								'opacity': 1
							}, 800, 'easeOutExpo');
						});
						
						$('#slide-out-widget-area.fullscreen .widget').each(function (i) {
							$(this).delay(i * 100).transition({
								y: 0,
								'opacity': 1
							}, 800, 'easeOutExpo');
						});
					}, 370 + $scrollDelay2);
					
					setTimeout(function () {
						$('#slide-out-widget-area .off-canvas-social-links').addClass('line-shown');
						
						$('#slide-out-widget-area .off-canvas-social-links li').each(function (i) {
							$(this).delay(i * 50).transition({
								'scale': 1
							}, 400, 'easeOutCubic');
						});
						
						$('#slide-out-widget-area .bottom-text').transition({
							'opacity': 0.7
						}, 400, 'easeOutCubic');
					}, 750 + $scrollDelay2);
					
					// Fade In BG Overlay
					setTimeout(function () {
						var $easing = ($('body.mobile').length > 0) ? 'easeOutCubic' : 'easeInOutQuint';
						$offCanvasBG.css({
							'height': '100%',
							'width': '100%'
						}).show().stop(true).transition({
							'y': '0%'
						}, 920, $easing, function () {
							$('.slide-out-widget-area-toggle > div > a').removeClass('animating');
						});
					}, 50 + $scrollDelay2);
					
					// Overflow state 
					OCM_overflowState();
					
					if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && $('.container-wrap').hasClass('no-scroll')) {
						$('#ajax-content-wrap').addClass('at-content');
					}
					
					if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 || $('.mobile').length == 0 && $('#header-outer.transparent').length == 0) {
						$('#slide-out-widget-area.fullscreen .inner-wrap').css('padding-top', $headerOuterEl.height());
					}
					
				}
				
				
				/**
				* Off canvas menu: fullscreen close.
				*
				* @since 10.5
				*/
				function OCM_fullscreenClose() {
					
					if ($('body.material').length > 0) {
						setTimeout(function () {
							$('header#top .slide-out-widget-area-toggle a').removeClass('menu-push-out');
						}, 350);
					}
					
					$('.slide-out-widget-area-toggle:not(.std-menu) .lines-button').removeClass('close');
					$('.blurred-wrap').removeClass('blurred');
					$('#slide-out-widget-area.fullscreen').transition({
						'opacity': 0
					}, 700, 'easeOutQuad', function () {
						$('#slide-out-widget-area.fullscreen').hide().css('opacity', '1');
					}).removeClass('open');
					$('#slide-out-widget-area.fullscreen .widget').transition({
						'opacity': 0
					}, 700, 'easeOutQuad', function () {
						$(this).transition({
							y: '110px'
						}, 0);
					});
					
					setTimeout(function () {
						$('.off-canvas-menu-container .menu > li').transition({
							y: '80px',
							'opacity': 0
						}, 0);
						$('#slide-out-widget-area .off-canvas-social-links li').transition({
							'scale': 0
						}, 0);
						$('#slide-out-widget-area .off-canvas-social-links').removeClass('line-shown');
						$('#slide-out-widget-area .bottom-text').transition({
							'opacity': 0
						}, 0);
						
						// Close submenu items
						$('#slide-out-widget-area .menuwrapper .menu').removeClass('subview');
						$('#slide-out-widget-area .menuwrapper .menu li').removeClass('subview subviewopen');
						$('#slide-out-widget-area.fullscreen .inner .off-canvas-menu-container').css('height', 'auto');
					}, 800);
					
					setTimeout(function () {
						if ($('.nectar-social.fixed').length == 0) {
							showToTop();
						}
						$('.container-wrap').removeClass('no-shadow');
					}, 500);
					
					// Fade out overlay
					$offCanvasBG.stop(true).transition({
						'opacity': 0
					}, 900, 'easeOutQuad', function () {
						
						if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && $('.container-wrap').hasClass('no-scroll')) {
							$('#ajax-content-wrap').removeClass('at-content');
						}
						if ($('.mobile #header-outer[data-permanent-transparent="false"]').length == 0) {
							$('#slide-out-widget-area.fullscreen .inner-wrap').css('padding-top', '0');
						}
						
						$('.slide-out-widget-area-toggle a').removeClass('animating');
						
						var $opacity = 0.4;
						
						if ($offCanvasBG.hasClass('solid')) {
							$opacity = 1;
						}
						if ($offCanvasBG.hasClass('dark')) {
							$opacity = 0.93;
						}
						if ($offCanvasBG.hasClass('medium')) {
							$opacity = 0.6;
						}
						if ($offCanvasBG.hasClass('light')) {
							$opacity = 0.4;
						}
						$(this).css({
							'height': '1px',
							'width': '1px',
							'opacity': $opacity
						}).transition({
							y: '-100%'
						}, 0);
					});
					
				}
				
				
				/**
				* Off canvas menu: fullscreen alt open.
				*
				* @since 10.5
				*/
				function OCM_fullscreenAltOpen() {
					
					if ($('body.material').length > 0) {
						$('header#top .slide-out-widget-area-toggle a').addClass('menu-push-out');
					}
					
					$('header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button').addClass('close');
					$('#slide-out-widget-area.fullscreen-alt').show().addClass('open');
					$offCanvasBG.addClass('open');
					
					$('body > div[class*="body-border"]').css('z-index', '9995');
					
					$('.off-canvas-menu-container .menu').transition({
						y: '0px',
						'opacity': 1
					}, 0);
					
					if ($('.nectar-social.fixed').length == 0) {
						hideToTop();
					}
					
					if ($('#header-outer.transparent').length > 0) {
						
						if ($bodyBorderTop.length > 0) {
							$('.admin-bar #slide-out-widget-area-bg.fullscreen-alt').css({
								'padding-top': ($bodyBorderTop.outerHeight(true) + 32) + 'px'
							});
							$('body:not(.admin-bar) #slide-out-widget-area-bg.fullscreen-alt').css({
								'padding-top': ($bodyBorderTop.outerHeight(true)) + 'px'
							});
						}
					}
					
					// Set translateY to 0 in all cases
					$headerOuterEl.stop(true).css('transform', 'translateY(0)');
					
					if ($('#logo .starting-logo').length > 0 && 
					$window.width() > 1000 && 
					$('#header-outer[data-format="centered-menu-bottom-bar"].fixed-menu').length == 0 && 
					$('body.material #header-outer[data-condense="true"]').length == 0 && 
					!nectarDOMInfo.usingFrontEndEditor) {
						
						$headerOuterEl.stop(true).css('transform', 'translateY(0)').addClass('transparent');
						if ($headerOuterEl.attr('data-transparent-header') != 'true') {
							$headerOuterEl.attr('data-transparent-header', 'true').addClass('pseudo-data-transparent');
						}
						
					}
					
					$('.off-canvas-menu-container .clip-wrap').css('transition-duration', '0s');
					
					setTimeout(function () {
						
						$('.off-canvas-menu-container .menu > li').each(function (i) {
							$(this).delay(i * 50).transition({
								y: 0,
								'opacity': 1
							}, 750, 'easeOutCubic').addClass('no-pointer-events');
						});
						
						setTimeout(function () {
							$('.off-canvas-menu-container .menu > li').removeClass('no-pointer-events');
							$('.off-canvas-menu-container .clip-wrap').css('transition-duration', '.45s');
						}, 500);
						
						$('#slide-out-widget-area.fullscreen-alt .widget').each(function (i) {
							$(this).delay(i * 100).transition({
								y: 0,
								'opacity': 1
							}, 650, 'easeOutCubic');
						});
					}, 200);
					
					setTimeout(function () {
						$('#slide-out-widget-area .off-canvas-social-links').addClass('line-shown');
						
						$('#slide-out-widget-area .off-canvas-social-links li').css('opacity', '1').each(function (i) {
							$(this).delay(i * 50).transition({
								'scale': 1
							}, 400, 'easeOutCubic');
						});
						$('#slide-out-widget-area .bottom-text').transition({
							'opacity': 1
						}, 600, 'easeOutCubic');
					}, 200);
					
					// Fade In BG Overlay
					var $opacity = 0.4;
					
					if ($offCanvasBG.hasClass('solid')) {
						$opacity = 1;
					}
					if ($offCanvasBG.hasClass('dark')) {
						$opacity = 0.97;
					}
					if ($offCanvasBG.hasClass('medium')) {
						$opacity = 0.6;
					}
					if ($offCanvasBG.hasClass('light')) {
						$opacity = 0.4;
					}
					$offCanvasBG.removeClass('no-transition');
					
					
					$offCanvasBG.addClass('padding-removed').css({
						'height': '100%',
						'width': '100%',
						'left': '0',
						'opacity': $opacity
					});
					
					
					setTimeout(function () {
						$('.slide-out-widget-area-toggle > div > a').removeClass('animating');
					}, 600);
					
					
					// Overflow state 
					OCM_overflowState();
					
					if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && 
					$('.container-wrap').hasClass('no-scroll')) {
						$('#ajax-content-wrap').addClass('at-content');
					}
					
					if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 || 
					$('.mobile').length == 0 && $('#header-outer.transparent').length == 0) {
						$('#slide-out-widget-area.fullscreen-alt .inner-wrap').css('padding-top', $headerOuterEl.height());
					}
					
				}

				
				/**
				* Off canvas menu: fullscreen alt close.
				*
				* @since 10.5
				*/
				function OCM_fullscreenAltClose() {
					
					if ($('body.material').length > 0) {
						setTimeout(function () {
							$('header#top .slide-out-widget-area-toggle a').removeClass('menu-push-out');
						}, 350);
					}
					
					$('.slide-out-widget-area-toggle:not(.std-menu) .lines-button').removeClass('close');
					$('.blurred-wrap').removeClass('blurred');
					$offCanvasBG.removeClass('open');
					
					$('#slide-out-widget-area.fullscreen-alt .widget').transition({
						'opacity': 0
					}, 500, 'easeOutQuad', function () {
						$(this).transition({
							y: '40px'
						}, 0);
					});
					$('#slide-out-widget-area .bottom-text, #slide-out-widget-area .off-canvas-social-links li').transition({
						'opacity': 0
					}, 250, 'easeOutQuad');
					$('#slide-out-widget-area .off-canvas-social-links').removeClass('line-shown');
					
					$('.off-canvas-menu-container .menu').transition({
						y: '-13px',
						'opacity': 0
					}, 400);
					
					
					setTimeout(function () {
						$('.off-canvas-menu-container .menu > li').stop(true, true).transition({
							y: '40px',
							'opacity': 0
						}, 0);
						$('#slide-out-widget-area .off-canvas-social-links li').transition({
							'scale': 0
						}, 0);
						$('#slide-out-widget-area .off-canvas-social-links').removeClass('line-shown');
						
						// Close submenu items
						$('#slide-out-widget-area .menuwrapper .menu').removeClass('subview');
						$('#slide-out-widget-area .menuwrapper .menu li').removeClass('subview subviewopen');
						$('#slide-out-widget-area.fullscreen-alt .inner .off-canvas-menu-container').css('height', 'auto');
						
						if ($('.mobile #header-outer[data-permanent-transparent="false"]').length > 0 && $('.container-wrap').hasClass('no-scroll')) {
							$('#ajax-content-wrap').removeClass('at-content');
						}
						
						if ($('.mobile #header-outer[data-permanent-transparent="false"]').length == 0) {
							$('#slide-out-widget-area.fullscreen-alt .inner-wrap').css('padding-top', '0');
						}
						
						$('.slide-out-widget-area-toggle a').removeClass('animating');
						
						$offCanvasBG.css({
							'height': '1px',
							'width': '1px',
							'left': '-100%'
						});
						
						$('#slide-out-widget-area.fullscreen-alt').hide().removeClass('open');
						
					}, 550);
					
					setTimeout(function () {
						if ($('.nectar-social.fixed').length == 0) {
							showToTop();
						}
					}, 600);
					
					// Fade out overlay
					setTimeout(function () {
						$offCanvasBG.removeClass('padding-removed');
					}, 50);
					
					
					var borderDelay = ($bodyBorderHeaderColorMatch == true) ? 150 : 50;
					
					setTimeout(function () {
						$offCanvasBG.stop(true).css({
							'opacity': 0
						});
						if ($('#header-outer[data-transparent-header="true"]').length > 0) {
							$('body > div[class*="body-border"]').css('z-index', '10000');
						}
					}, borderDelay);
					
					setTimeout(function () {
						$('#header-outer.transparent.small-nav, #header-outer.transparent.detached, #header-outer:not([data-permanent-transparent="1"]).transparent.scrolled-down').removeClass('transparent');
						
						if ($headerOuterEl.hasClass('pseudo-data-transparent')) {
							
							$headerOuterEl.attr('data-transparent-header', 'false')
								.removeClass('pseudo-data-transparent')
								.removeClass('transparent');
						}
						
					}, 100);
					
				}
				
				
				/**
				* Off canvas menu: simple dropdown open.
				*
				* @since 10.5
				*/
				function OCM_simpleDropdownOpen() {
					
					$('#mobile-menu').show();
					
					$('header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button').addClass('close');
					
					if ($('body.material').length > 0) {
						$('header#top .slide-out-widget-area-toggle a').addClass('menu-push-out');
					}
					
					setTimeout(function () {
						$('.slide-out-widget-area-toggle > div > a').removeClass('animating');
					}, 100);
					
				}
				
				/**
				* Off canvas menu: simple dropdown close.
				*
				* @since 10.5
				*/
				function OCM_simpleDropdownClose() {
					$('#mobile-menu').hide();
					
					$('.slide-out-widget-area-toggle:not(.std-menu) .lines-button').removeClass('close');
					
					setTimeout(function () {
						if ($('body.material').length > 0) {
							$('header#top .slide-out-widget-area-toggle a').removeClass('menu-push-out');
						}
						$('.slide-out-widget-area-toggle a').removeClass('animating');
					}, 350);
				}
				
				
				/**
				* Off canvas menu: simple dropdown click events.
				*
				* @since 10.5
				*/
				function OCM_simpleStyleInit() {
					
					if( $('#header-outer #mobile-menu').length == 0 ) {
						return;
					}
					
					$('#header-outer #mobile-menu li.megamenu').removeClass('megamenu');
					
					// Add icons/markup.
					$('#header-outer #mobile-menu ul li').each(function(){
						$(this).find('a').wrapInner('<span></span>');
						if($(this).find('> ul').length > 0) {
							$(this).find('> a').append('<span class="sf-sub-indicator"><i class="fa fa-angle-down"></i></span>');
						}
					});
					
					// Click event.
					$('#header-outer #mobile-menu .sf-sub-indicator').on('click', function(){
						
						var $parentLI = $(this).parent().parent();
						
						$parentLI.toggleClass('current-open-item');
						
						// Open.
						if( $parentLI.hasClass('current-open-item') ) {
							$parentLI.find('> ul').show();
							setTimeout(function(){
								$parentLI.addClass('visible');
							},30);
						} else {
							// Close.
							$parentLI.find('ul').hide();
							// Ensure open children also close.
							$parentLI.find('li').removeClass('visible').removeClass('current-open-item');
							$parentLI.removeClass('visible');
						}

						return false;
						
					});
					
					// Resize event.
					$window.on('smartresize', function(){
						
						if( nectarDOMInfo.winW > 1000 && $('.slide-out-widget-area-toggle.mobile-icon a.open').length > 0 ) {

						$('.slide-out-widget-area-toggle.mobile-icon a')
							.addClass('non-human-allowed')
							.trigger('click');
							
							setTimeout(function () {
									$('.slide-out-widget-area-toggle.mobile-icon a').removeClass('non-human-allowed');
							}, 100);
							
						}
							
					});
					
				}
				
				
				/**
				* Off canvas menu click triggered styles initialization
				*
				* @since 10.5
				*/
				function OCM_clickTriggeredStylesInit() {
					
					// Click triggered open bind.
					$body.on('click', '.slide-out-widget-area-toggle:not(.std-menu) a.closed:not(.animating)', function () {
						
						if (nectarBoxRoll.animating == 'true' || $('.slide-out-from-right-hover').length > 0) {
							return false;
						}
						
						$headerOuterEl.removeClass('no-transition');
						
						// Slide out from right.
						if ($offCanvasEl.hasClass('slide-out-from-right')) {
							OCM_slideOutRightOpen();
						} 
						// Fullscreen.
						else if ($offCanvasEl.hasClass('fullscreen')) {
							OCM_fullscreenOpen();
						} 
						// Fullscreen Alt.
						else if ($offCanvasEl.hasClass('fullscreen-alt')) {
							OCM_fullscreenAltOpen();
						} 
						// Simple dropdown.
						else if( $('#header-outer #mobile-menu').length > 0 ) {
							OCM_simpleDropdownOpen();
						}
						
	
						// Add open class
						if( $('#header-outer #mobile-menu').length == 0 ) {
							
							$headerOuterEl
								.removeClass('side-widget-closed')
								.addClass('side-widget-open');
						
						
							// Give header transparent state
							if ($('#header-outer[data-transparency-option="1"]').length > 0 && 
							$('#boxed').length == 0 && 
							$('#header-outer[data-full-width="true"]').length > 0 && 
							!nectarDOMInfo.usingFrontEndEditor) {
								
								if ($('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length == 0 && 
								$('body.material #header-outer[data-condense="true"]').length == 0) {
									
									$headerOuterEl.addClass('transparent');
									
								}
								
							}
							
							// Dark slide transparent nav
							if ($('#header-outer.dark-slide.transparent').length > 0 && 
							$('#boxed').length == 0 && 
							$('body.material-ocm-open').length == 0) {
								$headerOuterEl
									.removeClass('dark-slide')
									.addClass('temp-removed-dark-slide');
							}

						} // Not using simple OCM.
						
						
						$('.slide-out-widget-area-toggle > div > a')
							.removeClass('closed')
							.addClass('open');
							
						$('.slide-out-widget-area-toggle > div > a').addClass('animating');
						
						return false;
					
					});
					
	
	
					// Close event bind.
					$body.on('click', '.slide-out-widget-area-toggle:not(.std-menu) a.open:not(.animating), #slide-out-widget-area .slide_out_area_close, > .slide_out_area_close, #slide-out-widget-area-bg.slide-out-from-right, .material-ocm-open #ajax-content-wrap', function (e) {
						
						if (e.originalEvent == undefined && 
							$('.slide_out_area_close.non-human-allowed').length == 0 && 
							$('.slide-out-widget-area-toggle.mobile-icon a.non-human-allowed').length == 0) {
							return;
						}
						
						if ($('.slide-out-widget-area-toggle:not(.std-menu) a.animating').length > 0) {
							return;
						}
						
						$headerOuterEl.removeClass('no-transition');
						
						$('.slide-out-widget-area-toggle:not(.std-menu) a')
							.removeClass('open')
							.addClass('closed');
							
						$('.slide-out-widget-area-toggle:not(.std-menu) a')
							.addClass('animating');
						
						// Slide out from right.
						if ($offCanvasEl.hasClass('slide-out-from-right')) {
							OCM_slideOutRightClose();
						} 
						
						// Fullscreen.
						else if ($offCanvasEl.hasClass('fullscreen')) {
							OCM_fullscreenClose();
						} 
						// Fullscreen alt.
						else if ($offCanvasEl.hasClass('fullscreen-alt')) {
							OCM_fullscreenAltClose();
						}
						// Simple dropdown.
						else if( $('#header-outer #mobile-menu').length > 0 ) {
							OCM_simpleDropdownClose();
						}
						
						if( $('#header-outer #mobile-menu').length == 0 ) {
							
							// Dark slide transparent nav
							if ($('#header-outer.temp-removed-dark-slide.transparent').length > 0 && $('#boxed').length == 0) {
								$headerOuterEl
									.removeClass('temp-removed-dark-slide')
									.addClass('dark-slide');
							}
							
							// Remove header transparent state
							if ($('#header-outer[data-permanent-transparent="1"]').length == 0 && $('#slide-out-widget-area.fullscreen-alt').length == 0) {
								
								if ($('.nectar-box-roll').length == 0) {
									if ($('#header-outer.small-nav').length > 0 || 
									$('#header-outer.scrolled-down').length > 0) {
										$headerOuterEl.removeClass('transparent');
									}
								} 
								else {
									if ($('#header-outer.small-nav').length > 0 || 
									$('#header-outer.scrolled-down').length > 0 || 
									$('.container-wrap.auto-height').length > 0) {
										$headerOuterEl.removeClass('transparent');
									}
								}
								
							}
							
							// Remove hidden menu
							$headerOuterEl.removeClass('hidden-menu');
							
							$headerOuterEl
								.removeClass('side-widget-open')
								.addClass('side-widget-closed');
									
						} // Not using simple OCM.
						
						return false;
						
					});
					
				}
				
				
				/**
				* Off canvas menu main initialization.
				*
				* @since 10.5
				*/
				function OCM_init() {
					
					if ($('#slide-out-widget-area.slide-out-from-right-hover').length > 0) {
						OCM_slideOutRightHoverInit();
					} else {
						OCM_clickTriggeredStylesInit();
						OCM_simpleStyleInit();
					}
					
					
					if ($('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length == 0 && 
					$('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length == 0) {
						
						fullscreenMenuInit();
						
					} else if ($('body.using-mobile-browser[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length > 0) {
						
						// Close OCM on mobile when clicking anchor on same page 
						$('body #slide-out-widget-area .inner .off-canvas-menu-container li a[href]').on('click', function () {
							
							if ($(this).attr('href') != '#') {
								OCM_close($(this).parent());
							}
							
						});
						
					}
					
					// Page fullscreen row close OCM fullscreen
					if ($('#nectar_fullscreen_rows').length > 0 && $('body[data-slide-out-widget-area-style*="fullscreen"]').length > 0) {
						
						$('body #slide-out-widget-area .inner .off-canvas-menu-container li a[href]').on('click', function () {
							
							var $link_href = ($(this).is('[href^="#"]')) ? $(this).attr('href') : '';
							if ($link_href != '#' && $('div[data-fullscreen-anchor-id="' + $link_href.substr($link_href.indexOf("#") + 1) + '"]').length > 0) {
								
								setTimeout(function () {
									
									$('#slide-out-widget-area .slide_out_area_close')
										.addClass('non-human-allowed')
										.trigger('click');
										
								}, 100);
								
								setTimeout(function () {
									$('#slide-out-widget-area .slide_out_area_close').removeClass('non-human-allowed');
								}, 150);
								
							}
							
						});
					}
					
					
					// Submenu link hover fix
					$body.on('mouseover', '#slide-out-widget-area .off-canvas-menu-container .menuwrapper > .sub-menu li > a', function () {
						var $currentTxt = $(this).text();
						$('.off-canvas-menu-container .menuwrapper .menu li > a').removeClass('hovered');
						$('.off-canvas-menu-container .menuwrapper .menu li > a:contains(' + $currentTxt + ')').addClass('hovered');
					});
					
					$body.on('mouseover', '.off-canvas-menu-container .menuwrapper .menu li > a', function () {
						$('.off-canvas-menu-container .menuwrapper .menu li > a').removeClass('hovered');
					});
					
					
					// Bind mousewheel.
					setTimeout(OCM_scrolling, 500);
					
					// Handle mobile scrolling.
					if (nectarDOMInfo.usingMobileBrowser) {
						$offCanvasEl.addClass('mobile');
					}
					
					
				}
				
		


				/**
				* Off canvas menu scrolling.
				*
				* @since 10.5
				*/
				function OCM_scrolling() {
					
					$offCanvasEl.mousewheel(function (event, delta) {
						
						this.scrollTop -= (delta * 30);
						
						event.preventDefault();
					});
					
				}
				
		
				
				/**
				* Off canvas menu close.
				*
				* @since 10.5
				*/
				function OCM_close(item) {
					
					if ($('#slide-out-widget-area.open').length > 0) {
						
						var $windowCurrentLocation = window.location.href.split("#")[0];
						var $windowClickedLocation = item.find('> a').attr('href').split("#")[0];
						
						if ($windowCurrentLocation == $windowClickedLocation || item.find('a[href^="#"]').length > 0) {
							if (item.parents('.slide-out-from-right-hover').length > 0) {
								$('.slide-out-widget-area-toggle.slide-out-hover-icon-effect a').trigger('click');
							} else {
								$('.slide-out-widget-area-toggle a').trigger('click');
							}
							
						}
					}
					
				}
				
				
				
				
				/**
				* Click based submenus.
				*
				* Used by left header layout and off canvas menu.
				*
				* @since 10.5
				*/
				function clickToggleSubmenus() {
					
					if (!$('#header-outer[data-format="left-header"]').length > 0 &&
					!$('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length > 0 &&
					!$('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length > 0) {
						return;
					}
					
					// Remove megamenu class.
					$('#header-outer[data-format="left-header"] nav li.megamenu').removeClass('megamenu');
					
					var $ocm_link_selector;
					
					if ($('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length > 0) {
						$ocm_link_selector = '#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children > .ocm-dropdown-arrow';
					} else {
						$ocm_link_selector = 'body.material #slide-out-widget-area[class*="slide-out-from-right"] .off-canvas-menu-container li.menu-item-has-children > a';
					}
					
					// Click event.
					$('#header-outer[data-format="left-header"] nav li.menu-item-has-children > a, ' + $ocm_link_selector).on('click', function () {
						
						if ($(this).parent().hasClass('open-submenu')) {
							$(this).parent().find('.sub-menu').css({
								'max-height': '0'
							});
							$(this).parent().removeClass('open-submenu');
						} else {
							
							// Get max height.
							var $that = $(this);
							var $maxSubMenuHeight;
							
							$that.parent()
								.find('> .sub-menu')
								.addClass('no-trans');
							
							setTimeout(function () {
								
								$that.parent().find('> .sub-menu').css({
									'max-height': 'none',
									'position': 'absolute',
									'visibility': 'hidden'
								});
								
								$maxSubMenuHeight = $that.parent().find('> .sub-menu').height();
								
								$that.parent()
									.find('> .sub-menu')
									.removeClass('no-trans');
									
								$that.parent().find('> .sub-menu').css({
									'max-height': '0',
									'position': 'relative',
									'visibility': 'visible'
								});
								
							}, 25);
							
							setTimeout(function () {
								
								// Reset Max Height.
								$that.closest('ul')
									.find('li.menu-item-has-children')
									.removeClass('open-submenu');
									
								$that.closest('ul').find('li.menu-item-has-children > .sub-menu').css({
									'max-height': '0'
								});
								
								$that.parent().addClass('open-submenu');
								
								$that.parent()
									.find('> .sub-menu')
									.css('max-height', $maxSubMenuHeight);
								
								// Add height to open parents.
								if ($that.parents('ul').length > 0) {
									
									$that.parents('ul:not(.sf-menu)').each(function () {
										$(this).css('max-height');
										$(this).css('max-height', parseInt($(this).height() + parseInt($(this).css('padding-top')) * 2 + $maxSubMenuHeight) + 'px');
									});
								}
								
								
							}, 50);
						}
						
						return false;
						
					});
					
					// Start open for current page items.	
					if($('#header-outer[data-format="left-header"] nav .sf-menu > .current-menu-ancestor.menu-item-has-children > ul > li.current-menu-item').length > 0) {
						$('#header-outer[data-format="left-header"] nav .sf-menu > .current-menu-ancestor.menu-item-has-children > a').trigger('click');
					}

					
				}
				
				
				
				
				
				
				
				
				/**
				* DLMenu - plugin used for submenus in off canvas menu.
				*
				* @since 6.0
				*/
				$.DLMenu = function (options, element) {
					this.$el = $(element);
					this._init(options);
				};
				
				// the options
				$.DLMenu.defaults = {
					// classes for the animation effects
					animationClasses: {
						classin: 'dl-animate-in-1',
						classout: 'dl-animate-out-1'
					},
					onLevelClick: function () {
						return false;
					},
					onLinkClick: function () {
						return false;
					}
				};
				
				$.DLMenu.prototype = {
					_init: function (options) {
						
						// options
						this.options = $.extend(true, {}, $.DLMenu.defaults, options);
						this._config();
						
						var animEndEventNames = {
							'WebkitAnimation': 'webkitAnimationEnd',
							'OAnimation': 'oAnimationEnd',
							'msAnimation': 'MSAnimationEnd',
							'animation': 'animationend'
						},
						transEndEventNames = {
							'WebkitTransition': 'webkitTransitionEnd',
							'MozTransition': 'transitionend',
							'OTransition': 'oTransitionEnd',
							'msTransition': 'MSTransitionEnd',
							'transition': 'transitionend'
						};
						// animation end event name
						this.animEndEventName = animEndEventNames['animation'] + '.menu';
						// transition end event name
						this.transEndEventName = transEndEventNames['transition'] + '.menu',
						// support for css animations and css transitions
						this.supportAnimations = true,
						this.supportTransitions = true;
						this._initEvents();
						
					},
					_config: function () {
						this.open 			= false;
						this.$trigger 	= this.$el.children('.trigger');
						this.$menu 			= this.$el.children('ul.menu');
						this.$menuitems = this.$menu.find('li:not(.back) > a');
						
						this.$el.find('ul.sub-menu')
							.prepend('<li class="back"><a href="#"> ' + $offCanvasEl.attr('data-back-txt') + ' </a></li>');
							
						this.$back = this.$menu.find('li.back');
					},
					_initEvents: function () {
						
						var self = this;
						
						this.$trigger.on('click.menu', function () {
							
							if (self.open) {
								self._closeMenu();
							} else {
								self._openMenu();
							}
							return false;
							
						});
						
						this.$menuitems.on('click.menu', function (event) {
							
							
							var $item = $(this).parent('li'),
							$submenu = $item.children('ul.sub-menu');
							
							$('.fullscreen-alt .off-canvas-menu-container .clip-wrap, .fullscreen-alt .off-canvas-menu-container .clip-wrap span').css('transition-duration', '0s');
							
							if ($submenu.length > 0) {
								
								var $flyin = $submenu.clone().css('opacity', 0).insertAfter(self.$menu),
								onAnimationEndFn = function () {
									self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classout).addClass('subview');
									$item.addClass('subviewopen').parents('.subviewopen:first').removeClass('subviewopen').addClass('subview');
									$flyin.remove();
									setTimeout(function () {
										$('.off-canvas-menu-container .menu > li').removeClass('no-pointer-events');
										$('.off-canvas-menu-container .clip-wrap, .off-canvas-menu-container .clip-wrap span').css('transition-duration', '.45s');
									}, 300);

								};
								
								setTimeout(function () {
									$flyin.addClass(self.options.animationClasses.classin);
									self.$menu.addClass(self.options.animationClasses.classout);
									if (self.supportAnimations) {
										self.$menu.on(self.animEndEventName, onAnimationEndFn);
									} else {
										onAnimationEndFn.call();
									}
									
									self.options.onLevelClick($item, $item.children('a:first').text());
								});
								
								
								$item.parents('.off-canvas-menu-container').css('height', $item.parents('.off-canvas-menu-container').find('.menuwrapper .menu').height()).transition({
									'height': $flyin.height()
								}, 500, 'easeInOutQuad');
								
								
								return false;
								
							} else {
								
								self.options.onLinkClick($item.find('> a'), event);
							}
							
							OCM_close($item);
							
						});
						
						
						
						this.$back.on('click.menu', function () {
							
							var $this = $(this),
							$submenu 	= $this.parents('ul.sub-menu:first'),
							$item 		= $submenu.parent(),
							$flyin 		= $submenu.clone().insertAfter(self.$menu);
							
							var onAnimationEndFn = function () {
								self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classin);
								$flyin.remove();
							};
							
							setTimeout(function () {
								$flyin.addClass(self.options.animationClasses.classout);
								self.$menu.addClass(self.options.animationClasses.classin);
								if (self.supportAnimations) {
									self.$menu.on(self.animEndEventName, onAnimationEndFn);
								} else {
									onAnimationEndFn.call();
								}
								
								$item.removeClass('subviewopen');
								
								var $subview = $this.parents('.subview:first');
								if ($subview.is('li')) {
									$subview.addClass('subviewopen');
								}
								$subview.removeClass('subview');
							});
							
							
							$item.parents('.off-canvas-menu-container').css('height', $item.parents('.off-canvas-menu-container').find('.menuwrapper .menu').height());
							
							setTimeout(function () {
								$item.parents('.off-canvas-menu-container').transition({
									'height': $item.parent().height()
								}, 500, 'easeInOutQuad');
							}, 50);
							
							
							return false;
							
						});
						
					},
					closeMenu: function () {
						if (this.open) {
							this._closeMenu();
						}
					},
					_closeMenu: function () {
						var self = this,
						onTransitionEndFn = function () {
							self.$menu.off(self.transEndEventName);
							self._resetMenu();
						};
						
						this.$menu.removeClass('menuopen');
						this.$menu.addClass('menu-toggle');
						this.$trigger.removeClass('active');
						
						if (this.supportTransitions) {
							this.$menu.on(this.transEndEventName, onTransitionEndFn);
						} else {
							onTransitionEndFn.call();
						}
						
						this.open = false;
					},
					openMenu: function () {
						if (!this.open) {
							this._openMenu();
						}
					},
					_openMenu: function () {
						var self = this;
						$body.off('click').on('click.menu', function () {
							self._closeMenu();
						});
						this.$menu.addClass('menuopen menu-toggle').on(this.transEndEventName, function () {
							$(this).removeClass('menu-toggle');
						});
						this.$trigger.addClass('active');
						this.open = true;
					},
					_resetMenu: function () {
						this.$menu.removeClass('subview');
						this.$menuitems.removeClass('subview subviewopen');
					}
				};
				
				var logError = function (message) {
					if (window.console) {
						window.console.error(message);
					}
				};
				
				$.fn.dlmenu = function (options) {
					if (typeof options === 'string') {
						var args = Array.prototype.slice.call(arguments, 1);
						this.each(function () {
							var instance = $.data(this, 'menu');
							if (!instance) {
								logError("cannot call methods on menu prior to initialization; " +
								"attempted to call method '" + options + "'");
								return;
							}
							if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
								logError("no such method '" + options + "' for menu instance");
								return;
							}
							instance[options].apply(instance, args);
						});
					} else {
						this.each(function () {
							var instance = $.data(this, 'menu');
							if (instance) {
								instance._init();
							} else {
								instance = $.data(this, 'menu', new $.DLMenu(options, this));
							}
						});
					}
					return this;
				};
				
				
				/**
				* Initialize DL menu.
				*
				* @since 6.0
				*/
				function fullscreenMenuInit() {
					
					$('#slide-out-widget-area .off-canvas-menu-container .menu').wrap('<div class="menu-wrap menuwrapper" />');
					$('#slide-out-widget-area .off-canvas-menu-container .menu').addClass('menuopen');
					
					var $ocmAnimationClassNum = ($('#slide-out-widget-area.fullscreen-alt').length > 0) ? '4' : '5';
					$('#slide-out-widget-area .off-canvas-menu-container .menu-wrap').dlmenu({
						animationClasses: {
							classin: 'dl-animate-in-' + $ocmAnimationClassNum,
							classout: 'dl-animate-out-' + $ocmAnimationClassNum
						}
					});
					
				}
				
			

			
				
				
				
				
				
				/**
				* Set the page header height when using "slide down" theme option effect.
				*
				* @since 2.0
				*/
				function pageHeaderSlideInHeight() {
					
					var pageHeaderHeight = parseInt($pageHeaderBG.height());
					$('body[data-aie="slide-down"] #page-header-wrap:not(.fullscreen-header)').css('height', pageHeaderHeight + 'px');
					
				}
				
				
				/**
				* Fired after page header image has loaded.
				*
				* @since 2.0
				*/
				function pageHeaderAfterLoad() {
					
					// Transparent
					if ($('#header-outer[data-transparent-header="true"]').length > 0) {
						$('#page-header-bg[data-parallax="1"]').css({
							'top': nectarDOMInfo.adminBarHeight
						});
					} else {
						
						if ($('body[data-header-resize="0"]').length == 0 && $('body.material').length == 0) {
							$('#page-header-bg[data-parallax="1"]').css({
								'top': ($('#page-header-wrap').offset().top) + 'px'
							});
						}
					}
					
					//fade in header
					if ($('#ajax-content-wrap').length == 0 || !$body.hasClass('ajax-loaded')) {
						$('#page-header-bg[data-parallax="1"]').animate({
							'opacity': 1
						}, 350, 'easeInCubic');
					} else if ($('#ajax-content-wrap').length == 1) {
						$('#page-header-bg[data-parallax="1"]').css({
							'opacity': 1
						});
					}
					
					$('#page-header-bg[data-parallax="1"] .nectar-particles').append('<div class="fade-out" />');
					
				}
				
				
				
				/**
				* Page header unload event.
				*
				* @since 2.0
				*/
				function pageHeaderUnload() {
					
					if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
						window.onunload = function () {
							
							pageHeaderInit();
							
							$('#page-header-bg[data-parallax="1"] .span_6').css({
								'opacity': 1
							});
							
						};
					}
					
				}
				
				
				/**
				* Page header initialization.
				*
				* @since 2.0
				*/
				function pageHeaderInit() {
					
					var $headerRemoveStickyness = ($('body[data-hhun="1"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length > 0) ? 1 : 0;

					if ($('#page-header-bg[data-parallax="1"]').length > 0) {
						
						// Fade in
						var img           = new Image(),
						pageHeaderHeight  = parseInt($pageHeaderBG.height()),
						$initialImgCheck  = extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'));
						
						if ($initialImgCheck && $initialImgCheck.indexOf('.') !== -1) {
							img.onload = function () {
								pageHeaderAfterLoad();
							};
							
							img.src = extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'));
							
						} else {
							pageHeaderAfterLoad();
						}
						
						
						if ($('body[data-hhun="1"]').length > 0 && !$('#header-outer[data-remove-fixed="1"]').length > 0) {
							$headerOuterEl.addClass('parallax-contained');
						}
						
						// Calculate on scroll.
						window.addEventListener('scroll', function () {
							if( nectarDOMInfo.winW > 1000 ) {
								window.requestAnimationFrame(parallaxPageHeaderCalc);
							}
						}, false);
					
					}
					
					var $pt_timeout = ($('body[data-ajax-transitions="true"]').length > 0 && $('#page-header-bg[data-animate-in-effect="slide-down"]').length > 0) ? 350 : 0;
					
					if ($pageHeaderBG.length > 0) {
						
						// Slide in height effect.
						setTimeout(function () {
							pageHeaderSlideInHeight();
						}, $pt_timeout);
						
						// Using bg classname.
						var $initialImgCheckAscend = extractUrl($pageHeaderBG.css('background-image'));
						if ($initialImgCheckAscend && $initialImgCheckAscend.indexOf('.') !== -1) {
							$pageHeaderBG.addClass('has-bg');
						}
						
						// Resize slide in height.
						$window.on('smartresize',pageHeaderSlideInHeight);
						
					}
					
					function parallaxPageHeaderCalc() {

						var $scrollTop = nectarDOMInfo.scrollTop,
						$multiplier1   = 0.4,
						$multiplier2   = 0.09;
						
						if (!$body.hasClass('mobile') && 
						navigator.userAgent.match(/iPad/i) == null && 
						$('body.material-ocm-open').length == 0) {
							
							// Material needs to set top for when effect wrap sets transform.
							if (nectarDOMInfo.winW > 1000) {
								$('body:not("[data-header-format=\'left-header\']") #page-header-bg').css('top', $('#ajax-content-wrap').offset().top);
							} else {
								$('body:not("[data-header-format=\'left-header\']") #page-header-bg').css('top', '0');
							}
							
							// Calc bg pos.
							if ($('#page-header-bg.out-of-sight').length == 0) {
								
								if ($headerRemoveStickyness) {
									$pageHeaderBG.css({
										'transform': 'translateY(' + $scrollTop * -0.55 + 'px)'
									});
									$('#page-header-bg .span_6 .inner-wrap, body[data-button-style="rounded"] #page-header-bg .scroll-down-wrap, #page-header-bg[data-post-hs="default_minimal"] .author-section').css({
										'transform': 'translateY(' + $scrollTop * -0.45 + 'px)'
									});
									
								} else {
									$pageHeaderBG.css({
										'transform': 'translateY(' + $scrollTop * -$multiplier1 + 'px)'
									});
									$('#page-header-bg .span_6 .inner-wrap, body[data-button-style="rounded"] #page-header-bg .section-down-arrow, #page-header-bg[data-post-hs="default_minimal"] .author-section').css({
										'transform': 'translateY(' + $scrollTop * -$multiplier2 + 'px)'
									});
									$('#page-header-bg .span_6 .inner-wrap,  #page-header-bg[data-post-hs="default_minimal"] .author-section').css({
										'opacity': 1 - ($scrollTop / (pageHeaderHeight - 60))
									});
								}
								
	
								if ($('#page-header-bg .span_6 .inner-wrap').css('opacity') == 0) {
									$('#page-header-bg .span_6 .inner-wrap, #page-header-bg .portfolio-filters').hide();
								} else {
									$('#page-header-bg .span_6 .inner-wrap, #page-header-bg .portfolio-filters').show();
								}
								
								
							} 
							
							// Hide elements to allow other parallax sections to work in webkit browsers.
							if (($scrollTop / (pageHeaderHeight + $('#header-space').height() + nectarDOMInfo.adminBarHeight)) > 1) {
								$('#page-header-bg, .nectar-particles, #page-header-bg .fade-out').css('visibility', 'hidden').hide().addClass('out-of-sight');
							} 
							else {
								$('#page-header-bg, .nectar-particles, #page-header-bg .fade-out').css('visibility', 'visible').show().removeClass('out-of-sight');
								
								// Ensure header is centered.
								pageHeaderHeight = parseInt($pageHeaderBG.height());
								$('#page-header-bg .container > .row').css('top', 0);
								
							}
	
						}
	
					}
					
					if ($pageHeaderBG.length > 0) {
						
						// Bind unload event
						pageHeaderUnload();
						
						// Initialize text effects.
						if( $('.nectar-box-roll').length == 0 ) {
							pageHeaderTextEffectInit();
						}
						
					}

				}
				
				
				




				/**
				* Page header text effect markup creation.
				*
				* @since 6.0
				*/
				function pageHeaderTextEffectMarkup() {
					
					$pageHeaderBG.each(function () {
						
						if ($(this).attr('data-text-effect') == 'rotate_in') {
							
							var $topHeading = 'none';
							
							if ($(this).find('.span_6 h1').length > 0) {
								$topHeading = 'h1';
							}

							if ($topHeading != 'none') {
								
								var $selector = ($(this).find('.nectar-particles').length > 0) ? '.inner-wrap.shape-1' : '.span_6';
								
								$(this).find($selector).find($topHeading).addClass('top-heading').contents().filter(function () {
									return this.nodeType === 3 && typeof this.data != 'undefined' && this.data.replace(/\s+/, "");
								}).wrap('<span class="wraped"></span>');
								
								$(this).find($selector).find('.wraped').each(function () {
									
									var textNode  = $(this),
									text          = textNode.text().split(' '),
									replace       = '';
									
									$.each(text, function (index, value) {
										if (value.replace(/\s+/, "")) {
											replace += '<span class="wraped"><span>' + value + '</span></span> ';
										}
									});
									
									textNode.replaceWith($(replace));
									
								});
								
							} 
							
						} 
						
					});
					
				}
				
				
				/**
				* Page header text effect animation.
				*
				* @since 6.0
				*/
				function pageHeaderTextEffect() {
					
					if ($('#page-header-bg .nectar-particles').length == 0 && $('#page-header-bg[data-text-effect="none"]').length == 0 || 
					$('.nectar-box-roll').length > 0 && $('#page-header-bg .nectar-particles').length == 0) {
						
						var $selector = ($('.nectar-box-roll').length == 0) ? '#page-header-bg .span_6' : '.nectar-box-roll .overlaid-content .span_6';
						
						$($selector).find('.wraped').each(function (i) {
							$(this).find('span').delay(i * 370).transition({
								rotateX: '0',
								'opacity': 1,
								y: 0
							}, 400, 'easeOutQuad');
						});
						
						setTimeout(function () {
							
							$($selector).find('.inner-wrap > *:not(.top-heading)').each(function (i) {
								$(this).delay(i * 370).transition({
									rotateX: '0',
									'opacity': 1,
									y: 0
								}, 650, 'easeOutQuad');
							});
							
							$('.scroll-down-wrap').removeClass('hidden');
							
						}, $($selector).find('.wraped').length * 370);
					}
					
				}
				
				
				/**
				* Page header text effect initialization.
				*
				* @since 6.0
				*/
				function pageHeaderTextEffectInit() {
					
					pageHeaderTextEffectMarkup();
					
					var $effectTimeout = ($loadingScreenEl.length > 0) ? 800 : 0;
					
					if ($('#page-header-bg .nectar-video-wrap video').length == 0) {
						setTimeout(pageHeaderTextEffect, $effectTimeout);
					}
					
				}
				
				
				

				


				/**
				* Permanent transparent header effect.
				*
				* @since 6.0
				*/
				function midnightInit() {
					
					if ($('#header-outer[data-permanent-transparent="1"]').length > 0 && 
					$('body[data-bg-header="true"]').length > 0) {
						

						// Pages that set no midnight coloring.
						if ($('.container-wrap div[data-midnight]').length == 0) {
							$('.container-wrap').attr('data-midnight', 'dark');
						}
						
						//// Cache midnight compat divs.
						var $midnightCompatArr = [];
						$('div[data-midnight]').each(function () {
							
							if ($(this).attr('data-midnight') == 'light' && $(this).parents('.pum-content').length == 0 || 
							$(this).attr('data-midnight') == 'dark' && $(this).parents('.pum-content').length == 0) {
								$midnightCompatArr.push($(this));
							}
							
						});
						
						
						if ($midnightCompatArr.length > 0) {
							
							$.each($midnightCompatArr, function (k, v) {
								
								if (v.attr('data-midnight') == 'light' || v.attr('data-midnight') == 'dark') {
									
									var $that     = v;
									var waypoint  = new Waypoint({
										element: $that,
										handler: function (direction) {
											
											if ($('body.material-ocm-open').length > 0) {
												return;
											}
											
											var $textColor;
											
											if (direction == 'down') {
												$textColor = ($that.attr('data-midnight') == 'light') ? '' : 'dark-slide';
												$headerOuterEl.removeClass('dark-slide').addClass($textColor);
												
											} else {
												
												var $prevMidItem;
												
												if (k - 1 >= 0) {
													$prevMidItem = k - 1;
												} else {
													$prevMidItem = k;
												}
												
												$textColor = ($midnightCompatArr[$prevMidItem].attr('data-midnight') == 'light') ? '' : 'dark-slide';
												$headerOuterEl.removeClass('dark-slide').addClass($textColor);
												
											}
											
										},
										offset: $headerOuterEl.height()
										
									});
									
								}
								
							}); 
							
						} 
						
					} 
					
					
				}
				
				
				

				/**
				* Box roll header effect initialization.
				*
				* @since 6.0
				*/
				function nectarBoxRollInit() {
					if ($('.nectar-box-roll').length > 0 && typeof NectarBoxRoll !== 'undefined') {
						pageHeaderTextEffectInit();
						nectarBoxRoll = new NectarBoxRoll(nectarDOMInfo, waypoints, midnightInit, pageLoadHash, resizeVideoToCover);
					}
				}
				
			
			
				
				/**
				* Create all waypoints.
				*
				* @since 6.0
				*/
				function waypoints() {
					rowBGAnimations();
					columnBGAnimations();
					colAndImgAnimations();
					progressBars();
					dividers();
					iconList();
					animatedTitles();
					highlightedText();
					imageWithHotspots();
					clientsFadeIn();
					splitLineHeadings();
					svgAnimations();
					milestoneInit();
					nectarFancyUlInit();
					owl_carousel_animate();
					headerRowColorInheritInit();
					morphingOutlines();
					animatedColBorders();
					foodMenuItems();
					vcWaypoints();
				}
				
				
				
				/**
				* Salient page builder elements initialization.
				*
				* @since 10.5
				*/
				function salientPageBuilderElInit() {
					flexsliderInit();
					setTimeout(flickityInit, 100);
					twentytwentyInit();
					standardCarouselInit();
					productCarouselInit();
					clientsCarouselInit();
					carouselfGrabbingClass();
					setTimeout(tabbedInit, 60);
					accordionInit();
					largeIconHover();
					nectarIconMatchColoring();
					coloredButtons();
					teamMemberFullscreen();
					flipBoxInit();
					owlCarouselInit();
					mouseParallaxInit();
					ulCheckmarks();
					morphingOutlinesInit();
					cascadingImageInit();
					imageWithHotspotEvents();
					pricingTableHeight();
					pageSubmenuInit();
					nectarLiquidBGs();
					nectarTestimonialSliders();
					nectarTestimonialSlidersEvents();
					recentPostsTitleOnlyEqualHeight();
					recentPostsInit();
					parallaxItemHoverEffect();
					fsProjectSliderInit();
					postMouseEvents();
					masonryPortfolioInit();
					masonryBlogInit();
					portfolioCustomColoring();
					searchResultMasonryInit();
					stickySidebarInit();
					portfolioSidebarFollow();
				}
				
				
				
				
				/***************** WooCommerce *****************/
				
				
				/**
				* Add quantity buttons to WooCommerce pages 
				*
				* @since 10.5
				*/
				function wooQauntityBtns() {
					
					jQuery(document.body).on('updated_cart_totals', function () {
						
						if ($('.plus').length == 0) {
							$('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)')
								.addClass('buttons_added')
								.append('<input type="button" value="+" class="plus" />')
								.prepend('<input type="button" value="-" class="minus" />');
						}
					});
					
					
					// Quantity buttons
					if ($('.plus').length == 0) {
						
						$('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)')
							.addClass('buttons_added')
							.append('<input type="button" value="+" class="plus" />')
							.prepend('<input type="button" value="-" class="minus" />');
						
						$(document).on('click', '.plus, .minus', function () {
							
							// Get values
							var $qty   = $(this).closest('.quantity').find('.qty'),
							currentVal = parseFloat($qty.val()),
							max        = parseFloat($qty.attr('max')),
							min        = parseFloat($qty.attr('min')),
							step       = $qty.attr('step');
							
							// Format values
							if (!currentVal || currentVal === '' || currentVal === 'NaN') {
								currentVal = 0;
							}
							if (max === '' || max === 'NaN') {
								max = '';
							}
							if (min === '' || min === 'NaN') {
								min = 0;
							}
							if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') {
								step = 1;
							}
							
							// Change the value
							if ($(this).is('.plus')) {
								
								if (max && (max == currentVal || currentVal > max)) {
									$qty.val(max);
								} else {
									$qty.val(currentVal + parseFloat(step));
								}
								
							} else {
								
								if (min && (min == currentVal || currentVal < min)) {
									$qty.val(min);
								} else if (currentVal > 0) {
									$qty.val(currentVal - parseFloat(step));
								}
								
							}
							
							// Trigger change event
							$qty.trigger('change');
							
						});
					}
					
				}
				
				
				
				/**
				* WooCommerce plugin events.
				*
				* @since 10.5
				*/
				function wooCommerceEvents() {
					
					var wooCartTimeout;
					
					// Notification.
					$body.on('click', '.product .add_to_cart_button', function () {
						
						var $productHeading = ($(this).parents('li').find('h2').length > 0) ? 'h2' : 'h3',
						productToAdd        = $(this).parents('li').find($productHeading).text();
						
						$('#header-outer .cart-notification span.item-name').html(productToAdd);
						
					});
					
					// Notification hover.
					$body.on('mouseenter', '#header-outer .cart-notification', function () {

						$(this).hide();
						
						$('#header-outer .widget_shopping_cart')
							.addClass('open')
							.stop(true, true)
							.show();
							
						$('#header-outer .cart_list')
							.stop(true, true)
							.show();

						clearTimeout(wooCartTimeout);
						
					});
					
					
					// Cart dropdown.
					var $headerCartSelector = '#header-outer .nectar-woo-cart';
					
					if ($($headerCartSelector).length > 0) {
						
						$($headerCartSelector).hoverIntent(function () {
							
							$('#header-outer .widget_shopping_cart')
								.addClass('open')
								.stop(true, true)
								.show();
								
							$('#header-outer .cart_list')
								.stop(true, true)
								.show();
								
							clearTimeout(wooCartTimeout);
							
							$('#header-outer .cart-notification').hide();
					
						});
					}
					
					
					$body.on('mouseleave', $headerCartSelector, function () {
						var $that = $(this);
						setTimeout(function () {
							if (!$that.is(':hover')) {
								$('#header-outer .widget_shopping_cart')
									.removeClass('open')
									.stop(true, true)
									.fadeOut(300);
									
								$('#header-outer .cart_list')
									.stop(true, true)
									.fadeOut(300);
							}
						}, 200);
					});
					
					if ($('#header-outer[data-cart="false"]').length == 0) {
						
						$body.on('added_to_cart', shopping_cart_dropdown_show);
						$body.on('added_to_cart', shopping_cart_dropdown);
						
						// Update header cart markup after ajax remove.
						$body.on('removed_from_cart', wooCartImgPos);
					}
					
					function shopping_cart_dropdown() {
						
						if (!$('.widget_shopping_cart .widget_shopping_cart_content .cart_list .empty').length && 
						$('.widget_shopping_cart .widget_shopping_cart_content .cart_list').length > 0) {
							
							$('.cart-menu-wrap').addClass('has_products');
							$('header#top nav > ul, #search-outer #search #close a, header#top .span_9 >.slide-out-widget-area-toggle').addClass('product_added');
							
							if (!$('.cart-menu-wrap').hasClass('static')) {
								$('.cart-menu-wrap, #mobile-cart-link').addClass('first-load');
							}
							
							// Change position of img in cart nav dropdown.
							wooCartImgPos();
							
						}
						
					}
					
					
					function shopping_cart_dropdown_show(e) {
						
						clearTimeout(wooCartTimeout);
						
						if (!$('.widget_shopping_cart .widget_shopping_cart_content .cart_list .empty').length && 
						$('.widget_shopping_cart .widget_shopping_cart_content .cart_list').length > 0 && 
						typeof e.type != 'undefined') {
							
							// Standalone woocommerce add to cart buttons.
							if ($('#header-outer .cart-notification .item-name').length > 0 && 
							$('#header-outer .cart-notification .item-name').text().length == 0) {
								return;
							}
							
							// Before cart has slide in.
							if (!$('#header-outer .cart-menu-wrap').hasClass('has_products')) {
								
								setTimeout(function () {
									$('#header-outer .cart-notification').fadeIn(400);
								}, 400);
								
							} else if (!$('#header-outer .cart-notification').is(':visible')) {
								$('#header-outer .cart-notification').fadeIn(400);
							} else {
								$('#header-outer .cart-notification').show();
							}
							wooCartTimeout = setTimeout(hideCart, 2700);
							
						}
					}
					
					function hideCart() {
						$('#header-outer .cart-notification').stop(true, true).fadeOut();
					}
					
					function checkForWooItems() {
						
						var checkForCartItems = setInterval(shopping_cart_dropdown, 250);
						setTimeout(function () {
							clearInterval(checkForCartItems);
						}, 4500);
						
					}
					
					function wooCartImgPos() {
						$('#header-outer .widget_shopping_cart .cart_list li, #slide-out-widget-area .widget_shopping_cart .cart_list li').each(function () {
							
							if ($(this).find('> img').length == 0 && $(this).find('.product-meta').length == 0) {
								
								var productCartImgLinkSrc = ($(this).find('> a[href]:not(.remove)').length > 0) ? $(this).find('> a[href]:not(.remove)').attr('href') : '';
								var productCartImg        = $(this).find('> a > img').clone();
								
								$(this).wrapInner('<div class="product-meta" />');
								$(this).prepend(productCartImg);
								
								if (productCartImgLinkSrc.length > 0) {
									productCartImg.wrap('<a href="' + productCartImgLinkSrc + '"></a>');
								}
								
							}
							
						});
					}
					
					if ($('#header-outer[data-cart="false"]').length == 0) {
						checkForWooItems();
					}
					
					function nectarAccountPageTabs() {
						
						// Not on account page.
						if ($('body.woocommerce-account #customer_login').length == 0) {
							return;
						}
						
						// Create HTML.
						$('.woocommerce-account .woocommerce > #customer_login').prepend('<div class="nectar-form-controls" />');
						
						$('.woocommerce-account .woocommerce > #customer_login > div:not(.nectar-form-controls)').each(function () {
							var $title = $(this).find('> h2').text();
							$('#customer_login .nectar-form-controls').append('<div class="control">' + $title + '</div>');
						});
						
						// Click event.
						$('.woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control').on('click', function () {
							
							$('.woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control').removeClass('active');
							$(this).addClass('active');
							
							var formIndex = $(this).index() + 1;
							$('#customer_login div[class*="u-column"]').hide();
							$('#customer_login div[class*="u-column"].col-' + formIndex).show();
							
							setTimeout(function () {
								$('#customer_login div[class*="u-column"]').removeClass('visible');
								$('#customer_login div[class*="u-column"].col-' + formIndex).addClass('visible');
							}, 30);
							
						});
						
						// Starting.
						$('.woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control:nth-child(1)').trigger('click');
						
					}
					
					nectarAccountPageTabs();
					
					// Text on hover effect.
					$body.on('mouseover', '.text_on_hover .product-wrap, .text_on_hover > a:first-child', function () {
						$(this).parent().addClass('hovered');
					});
					
					$body.on('mouseout', '.text_on_hover .product-wrap, .text_on_hover > a:first-child', function () {
						$(this).parent().removeClass('hovered');
					});

					
					// Caterial/fancy parallax hover effect zindex.
					if ($('.material.product').length > 0 || 
					$('.minimal.product').length > 0 || 
					$('.nectar-fancy-box[data-style="parallax_hover"]').length > 0 || 
					$('.nectar-category-grid[data-shadow-hover="yes"]').length > 0) {
						
						var $productZindex = 101;
						
						$body.on('mouseenter', '.material.product, .minimal.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item', function () {
							$productZindex++;
							$(this).css('z-index', $productZindex + 1);
						});
						
						$body.on('mouseleave', '.material.product, .minimal.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item', function () {
							
							var $that = $(this);
							setTimeout(function () {
								if (!$that.is(':hover')) {
									$that.css('z-index', 100);
								}
							}, 350);
						});
						
						// Reset to stop zindex from getting too high.
						setInterval(function () {
							if ($('.nectar-fancy-box[data-style="parallax_hover"]:hover').length > 0 || 
							$('.minimal.product:hover').length > 0) {
								return;
							}
							
							$('.material.product:not(:hover), .minimal.product:not(:hover), .nectar-fancy-box[data-style="parallax_hover"]:not(:hover), .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item:not(:hover)').css('z-index', 100);
							$productZindex = 101;
						}, 10000);
						
					}
					
					function minimalProductHover() {
						
						// Add icons.
						$('.products .classic .product-wrap .add_to_cart_button').wrapInner('<span />');
						$('.products .classic .product-wrap .add_to_cart_button').prepend('<i class="normal icon-salient-cart"></i>');
						
						// Bind hover.
						$body.on('mouseover', '.products .minimal.product', function () {
							minimalProductCalc($(this));
						});
						
						$body.on('mouseleave', '.products .minimal.product', function () {
							
							$(this).find('.background-color-expand').css({
								'transform': 'scale(1)'
							});
							
						});
						
						// Starting trigger mouse over.
						$('.products .minimal.product').each(function () {
							if ($(this).is(':hover')) {
								$(this).trigger('mouseover');
							}
						});
					}
					
					function minimalProductCalc(el) {
						
						var $item   = el,
						$itemWidth  = $item.width(),
						$itemHeight = $item.height(),
						$wChange    = (parseInt($itemWidth) + 40) / parseInt($itemWidth),
						$hChange    = (parseInt($itemHeight) + 40) / parseInt($itemHeight);
						
						$item.addClass('hover-bound');
						
						$item.find('.background-color-expand').css({
							'transform': 'scale(' + $wChange + ',' + $hChange + ') translateY(0px)'
						});
						
					}
					
					minimalProductHover();
					

					
					// Mobile widget filters.
					$('.woocommerce #sidebar .widget.woocommerce').each(function () {
						
						// Skip widgets without any titles.
						if ($(this).find('> h4').length == 0) {
							$(this).addClass('no-widget-title');
						}
					});
					
					$body.on('click', '#sidebar .widget.woocommerce:not(.widget_price_filter) h4', function () {
						
						if ($window.width() < 1000) {
							if ($(this).parent().is('.widget_product_tag_cloud')) {
								$(this).parent().find('> div').slideToggle();
							}
							$(this).parent()
								.find('> ul')
								.slideToggle();
								
							$(this).parent()
								.toggleClass('open-filter');
						}
						
					});
					
					// Slide in cart event.
					$body.on('mouseenter', '#header-outer [data-cart-style="slide_in"] .cart-menu-wrap', openRightCart);
					
					function openRightCart() {
						
						if ($('.nectar-slide-in-cart ul.cart_list li:not(.empty)').length > 0) {
							
							$('.nectar-slide-in-cart').addClass('open');
							$window.on('mousemove.rightCartOffsetCheck', closeCartCheck);
							
						}
					}
					
					function closeCartCheck(e) {
						
						var $windowWidth = $window.width();
						if (e.clientX < $windowWidth - 370 - $bodyBorderWidth) {
							
							$window.off('mousemove.rightCartOffsetCheck', closeCartCheck);
							
							$('.nectar-slide-in-cart').removeClass('open');
							
						}
						
					}
					
					// Add quantity buttons if needed.
					wooQauntityBtns();
				
				}
				
				
				


				/**
		     * Search in navigation functionality.
		     *
		     * @since 10.5
		     */

				function navigationSearchInit() {
					
					var $placeholder = ($('#search-outer #search input[type=text][data-placeholder]').length > 0) ? $('#search-outer #search input[type=text]').attr('data-placeholder') : '';
					
					// Material skin add search BG markup.
					if ($body.hasClass('material') && $('#header-outer .bg-color-stripe').length == 0) {
						$headerOuterEl.append('<div class="bg-color-stripe" />');
					}
					
					// Prevent jumping on click.
					$body.on('click', '#search-btn a', function () {
						return false;
					});
					
					// Open search on mouseup.
					$body.on('click', '#search-btn a:not(.inactive), #header-outer .mobile-search', function () {
						
						if ($(this).hasClass('open-search')) {
							return false;
						}
						
						// Close menu on original skin.
						if( $body.hasClass('original') &&	$('.slide-out-widget-area-toggle.mobile-icon a.open').length > 0 ) {
							$('.slide-out-widget-area-toggle.mobile-icon a')
								.addClass('non-human-allowed')
								.trigger('click');
								
								setTimeout(function () {
										$('.slide-out-widget-area-toggle.mobile-icon a').removeClass('non-human-allowed');
								}, 100);
						}
						
						if ($body.hasClass('ascend') || 
						$('body[data-header-format="left-header"]').length > 0 && $('body.material').length == 0) {
							
							// Ascend theme skin.
							$('#search-outer > #search form, #search-outer #search .span_12 span, #search-outer #search #close').css('opacity', 0);
							
							$('#search-outer > #search form').css('transform', 'translateY(-30px)');
							$('#search-outer #search .span_12 span').css('transform', 'translateY(20px)');
							
							$('#search-outer').show();
							$('#search-outer').stop().transition({
								scale: '1,0',
								'opacity': 1
							}, 0).transition({
								scale: '1,1'
							}, 700, 'cubic-bezier(0.2, 1, 0.3, 1)');
							
							$('#search-outer > #search form').delay(350).transition({
								'opacity': 1,
								'transform': 'translateY(0)'
							}, 700, 'cubic-bezier(0.2, 1, 0.3, 1)');
							
							$('#search-outer #search #close').delay(500).transition({
								'opacity': 1
							}, 700, 'cubic-bezier(0.2, 1, 0.3, 1)');
							
							
							$('#search-outer #search .span_12 span').delay(450).transition({
								'opacity': 1,
								'transform': 'translateY(0)'
							}, 700, 'cubic-bezier(0.2, 1, 0.3, 1)');
							
						} 
						
						else if (!$body.hasClass('material')) {
							// Original theme skin.
							$('#search-outer').stop(true).fadeIn(600, 'easeOutExpo');
						} 
						else {
							
							// Material theme skin.
							$('#header-outer[data-transparent-header="true"] .bg-color-stripe').css('transition', '');
							$('#search-outer, #ajax-content-wrap').addClass('material-open');
							$headerOuterEl.addClass('material-search-open');
							$('#fp-nav').addClass('material-ocm-open');

						}
						
						
						setTimeout(function () {
							
							$('#search input[type=text]').trigger('focus');
							
							if ($('#search input[type=text]').attr('value') == $placeholder) {
								$('#search input[type=text]').setCursorPosition(0);
							}
							
						}, 300);
						
						
						$(this).toggleClass('open-search');
						
						// Close slide out widget area.
						$('.slide-out-widget-area-toggle a:not(#toggle-nav).open:not(.animating)').trigger('click');
						
						return false;
						
					});
					
					// Handle the placeholder value.
					$('body:not(.material)').on('keydown', '#search input[type=text]', function () {
						if ($(this).attr('value') == $placeholder) {
							$(this).attr('value', '');
						}
					});
					
					$('body:not(.material)').on('keyup', '#search input[type=text]', function () {
						if ($(this).attr('value') == '') {
							$(this).attr('value', $placeholder);
							$(this).setCursorPosition(0);
						}
					});
					
					
					// Close search btn event.
					$body.on('click', '#close', function () {
						closeSearch();
						$searchButtonEl.removeClass('open-search');
						$('#header-outer .mobile-search').removeClass('open-search');
						return false;
					});
					
					// Original and Ascend skin close search when clicking off.
					$('body:not(.material)').on('blur', '#search-box input[type=text]', function () {
						closeSearch();
						$searchButtonEl.removeClass('open-search');
						$('#header-outer .mobile-search').removeClass('open-search');
					});
					
					
					// Material skin close when clicking off the search.
					$('body.material').on('click', '#ajax-content-wrap', function (e) {
						if (e.originalEvent !== undefined) {
							closeSearch();
							$searchButtonEl.removeClass('open-search');
							$('#header-outer .mobile-search').removeClass('open-search');
						}
					});
					
					// Material skin close on esc button event.
					if ($('body.material').length > 0) {
						$(document).on('keyup', function (e) {
							
							if (e.keyCode == 27) {
								closeSearch();
								$searchButtonEl.removeClass('open-search');
								
								// Close ocm material
								if ($('.ocm-effect-wrap.material-ocm-open').length > 0) {
									$('.slide-out-widget-area-toggle.material-open a').trigger('click');
								}
							}
							
						});
					}
					

				
					// Called to hide the search bar.
					function closeSearch() {
						
						if ($body.hasClass('ascend') || $('body[data-header-format="left-header"]').length > 0 && $('body.material').length == 0) {
							$('#search-outer').stop().transition({
								'opacity': 0
							}, 300, 'cubic-bezier(0.2, 1, 0.3, 1)');
							$searchButtonEl.addClass('inactive');
							setTimeout(function () {
								$('#search-outer').hide();
								$searchButtonEl.removeClass('inactive');
							}, 300);
						} else if ($('body.material').length == 0) {
							$('#search-outer').stop(true).fadeOut(450, 'easeOutExpo');
						}
						
						if ($body.hasClass('material')) {
							$('#ajax-content-wrap').removeClass('material-open');
							$headerOuterEl.removeClass('material-search-open');
							$('#search-outer').removeClass('material-open');
							$('#fp-nav').removeClass('material-ocm-open');
						}
						
					}
				
				}
				
				
			
			
			
				
				/**
				 * Header layout "Centered header bottom bar" functionality. 
				 *
				 * @since 9.0
				 */
				function centeredNavBottomBarReposition() {
					
					var $headerOuter      = $headerOuterEl,
					$headerSpan9          = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),
					$headerSpan3          = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_3'),
					$secondaryHeader      = $headerSecondaryEl,
					$headerBtns           = $headerSpan3.find('nav >ul.buttons'),
					$navLogoMargin        = parseInt($('body.material #header-outer').attr('data-padding')),
					$navLogoHeight        = parseInt($('body.material #header-outer').attr('data-logo-height')),
					$triggerCondition     = ($navLogoMargin*2) + $navLogoHeight - parseInt(nectarDOMInfo.adminBarHeight) + parseInt(nectarDOMInfo.secondaryHeaderHeight);
					
					if ($secondaryHeader.length > 0) {
						
						if ($('#header-outer[data-remove-fixed="1"]').length == 0 && $('#header-outer[data-condense="true"]').length > 0) {
							setTimeout(function () {
								nectarDOMInfo.secondaryHeaderHeight = $headerSecondaryEl.outerHeight();
							}, 50);
						}
						
					}
					
					// Helper to determine if custom mobile breakpoint is active.
					function condenseCustomBreakPointHelper() {
						var $withinCustomBreakpoint = mobileBreakPointCheck();
						
						// Adding class to prevent logo from hiding when opening OCM
						if ( $withinCustomBreakpoint ) {
							$headerOuterEl.addClass('within-custom-breakpoint');
						} else {
							$headerOuterEl.removeClass('within-custom-breakpoint');
						}
					}
					
					
					// Bind events if "Condense Header On Scroll" effect is enabled.
					if ($('#header-outer[data-condense="true"]').length > 0) {
						
						$window.on('scroll.centeredNavCondense', centeredNavBottomFixed_Scroll);
						$window.trigger('scroll');
						
						$window.on('resize', function(){
							if(nectarDOMInfo.winW < 1000 ) {
								$headerOuter.addClass('force-condense-remove');
								$window.off('scroll.centeredNavCondense');
							}
						});
						
						$window.smartresize(function () {
							condenseCustomBreakPointHelper();
							
							if(nectarDOMInfo.winW >= 1000 ) {

								// Coming from mobile.
								if($headerOuter.hasClass('force-condense-remove')) {

									// Remove condense effect.
									centeredNavBottomFixed_Scroll();
									$headerOuter.removeClass('force-condense-remove');
									
									// See if the condense effect needs to be reapplied.
									setTimeout(function() {
										
										if(nectarDOMInfo.scrollTop >= $triggerCondition) {
											$headerOuter.addClass('force-condense');
											centeredNavBottomFixed_Scroll();
											$headerOuter.removeClass('force-condense');
										}
										// Bind scroll event.
										$window.on('scroll.centeredNavCondense', centeredNavBottomFixed_Scroll);
									},200);
	
								}
							}
							
						}); 
						
						condenseCustomBreakPointHelper();
						
					}
					
					
					
					function centeredNavBottomFixed_Scroll() {
						
						// Bypass calculating.
						if (nectarDOMInfo.winW < 1000 || 
							$('body.material-ocm-open').length > 0 || 
							$('#header-outer[data-has-menu="true"][data-format="centered-menu-bottom-bar"] .span_9').css('display') == 'none') {
							return;
						}
						
						$bodyBorderTop = ($bodyBorderTop.length > 0 && nectarDOMInfo.secondaryHeaderHeight > 0) ? $bodyBorderTop.height() : 0;
						
						// Add condense effect.
						if ($headerOuter.hasClass('force-condense') || !$headerOuter.hasClass('fixed-menu') && nectarDOMInfo.scrollTop >= $triggerCondition) {
			
							var amountToMove = (parseInt($headerSpan9.position().top) - $navLogoMargin - parseInt(nectarDOMInfo.adminBarHeight)) + parseInt(nectarDOMInfo.secondaryHeaderHeight) - $bodyBorderTop;
							
							// Megamenu removes transparency option
							if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && $('#header-outer .megamenu').length > 0 && $('#header-outer[data-transparent-header="true"]').length > 0) {
								$headerOuterEl.removeClass('no-transition');
							}
							
							$headerOuter.addClass('fixed-menu').removeClass('transparent').css({
								'top': '-' + amountToMove + 'px',
								'position': 'fixed'
							});
							
							var $headerNavBarOffset  = $('header#top .span_9 nav >ul').offset().top;
							var $headerButtonsOffset = $headerBtns.offset().top;
						
							
							var $headerButtonsHeight = ($headerSpan9.find('.sf-menu > li > a').length > 0) ? (20 - parseInt($headerSpan9.find('.sf-menu > li > a').height())) / 2 : 2;
							
							$headerBtns.css('transform', 'translateY(' + (parseInt($headerNavBarOffset) - parseInt($headerButtonsOffset) - $headerButtonsHeight - 1) + 'px)');
							$headerBtns.find('.nectar-woo-cart').css('height', $headerOuter.height() + parseInt($headerOuter.css('top')) - parseInt(nectarDOMInfo.adminBarHeight));
							
						} 
						
						// Remove condense effect.
						else if ($headerOuter.hasClass('force-condense-remove') || $headerOuter.hasClass('fixed-menu') && nectarDOMInfo.scrollTop < $triggerCondition ) {
							
							$headerOuter.removeClass('fixed-menu').css({
								'top': '0',
								'position': 'absolute'
							});

							$headerBtns.css('transform', 'translateY(0px)');
							$headerBtns.find('.nectar-woo-cart').css('height', '');
							
							if ($('#header-outer.transparent').length == 0) {
								
								if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && 
								$('#header-outer .megamenu').length > 0) {
									$headerOuterEl.removeClass('no-transition');
								}
								
								if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && 
								$('#header-outer[data-transparent-header="true"]').length > 0 && 
								$('#header-outer .megamenu').length > 0) {
									
									if ($headerOuterEl.attr('data-transparent-header') == 'true' && 
									$('.nectar-box-roll').length == 0 && 
									$('.megamenu.sfHover').length == 0) {
										
										$headerOuterEl.addClass('transparent');
										$headerOuterEl.removeClass('no-transition');
										
									} 
									else if ($headerOuterEl.attr('data-transparent-header') == 'true' && 
									$('.nectar-box-roll').length == 0 && 
									$('.megamenu.sfHover').length > 0) {
										
										$headerOuterEl.addClass('no-transition');
									}
									
								} 
								
								else {
									if ($headerOuterEl.attr('data-transparent-header') == 'true' && $('.nectar-box-roll').length == 0) {
										$headerOuterEl.addClass('transparent');
									}
								}
								
							} // endif transparent header conditional.

							
						} // End Remove condense effect.
						
					} // End centeredNavBottomFixed_Scroll.
					
	
					
				}
				
				
				
				
				/**
				 * Header layout "Centered header bottom bar" initialization. 
				 *
				 * @since 10.5
				 */
				function centeredNavBottomBarInit() {
					
					if ($('#header-outer[data-format="centered-menu-bottom-bar"]').length > 0) {
						centeredNavBottomBarReposition();
					}
					
				}	
					
				
				
				
				
				/**
				* Header layout "Centered logo between menu".
				*
				* Splits the main navigation menu into two sections placed on each side of logo.
				*
				* @since 8.0
				*/
				function centeredLogoMargins() {
					
					if (nectarDOMInfo.winW > 1000) {
						
						var $navItemLength = $('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li').length;
						
						if ($('#header-outer #social-in-menu').length > 0) {
							$navItemLength--;
						}
						
						var $centerLogoWidth,
						$extraMenuSpace;
						
						if ($('#header-outer #top .row .col.span_3 #logo img:visible').length == 0) {
							$centerLogoWidth = parseInt($('#header-outer #top .row .col.span_3').width());
						} else {
							$centerLogoWidth = parseInt($('#header-outer #top .row .col.span_3 img:visible').width());
						}
						
						if ($('#header-outer[data-lhe="animated_underline"]').length > 0) {
							$extraMenuSpace = parseInt($('header#top nav > ul > li:first-child > a').css('margin-right'));
						} else {
							$extraMenuSpace = parseInt($('header#top nav > ul > li:first-child > a').css('padding-right'));
						}
						
						if ($extraMenuSpace > 30) {
							$extraMenuSpace += 45;
						} else if ($extraMenuSpace > 20) {
							$extraMenuSpace += 40;
						} else {
							$extraMenuSpace += 30;
						}
						
						if (!$body.hasClass('rtl')) {
							$('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:nth-child(' + Math.floor($navItemLength / 2) + ')').css({
								'margin-right': ($centerLogoWidth + $extraMenuSpace) + 'px'
							}).addClass('menu-item-with-margin');
						} else {
							$('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:nth-child(' + Math.floor($navItemLength / 2) + ')').css({
								'margin-left': ($centerLogoWidth + $extraMenuSpace) + 'px'
							}).addClass('menu-item-with-margin');
						}
						
						var $leftMenuWidth 	= 0;
						var $rightMenuWidth = 0;
						
						$('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:not(#social-in-menu)').each(function (i) {
							if (i + 1 <= Math.floor($navItemLength / 2)) {
								$leftMenuWidth += $(this).width();
							} else {
								$rightMenuWidth += $(this).width();
							}
							
						});
						
						var $menuDiff = Math.abs($rightMenuWidth - $leftMenuWidth);
						
						if ($leftMenuWidth > $rightMenuWidth || ($body.hasClass('rtl') && $leftMenuWidth < $rightMenuWidth) ) {
							$('#header-outer #top .row > .col.span_9').css('padding-right', $menuDiff);
						} else {
							$('#header-outer #top .row > .col.span_9').css('padding-left', $menuDiff);
						}
						
						$('#header-outer[data-format="centered-logo-between-menu"] nav').css('visibility', 'visible');
						
					} 
					
					else if ($('#header-outer[data-format="centered-logo-between-menu"]').length > 0 && nectarDOMInfo.winW < 1000) {
						$('#header-outer .row > .col.span_9').css({
							'padding-right': '0',
							'padding-left': '0'
						});
					}
					
				}
				
				
				/**
				* Header layout "Centered logo between menu" initialization.
				*
				* @since 10.5
				*/
				function centeredLogoHeaderInit() {
					
					if($('#header-outer[data-format="centered-logo-between-menu"]').length > 0) {
						
						if(!usingLogoImage) {
							centeredLogoMargins();
						}
						else if(usingLogoImage && $('#header-outer[data-format="centered-logo-between-menu"]').length > 0 && $('header#top #logo img:first[src]').length > 0) {
							
							//fadein img on load
							var tempLogoImg = new Image();
							tempLogoImg.src = $('header#top #logo img:first').attr('src');
							
							tempLogoImg.onload = function() {
								centeredLogoMargins();
							};
							
						}
						
						// Resize event.
						$window.on('smartresize', centeredLogoMargins);
						
					}
					
				}
				
				
				
				
				
				
				
				
				/**
				* Handle basic items before initializing effects.
				*
				* @since 10.5
				*/	
				function headerNavPreInit() {
					
					// Deactivate hide header until needed effect on mobile.
					if (nectarDOMInfo.usingMobileBrowser && $('#header-outer[data-remove-fixed="1"]').length == 0) {
						$body.attr('data-hhun', '0');
					}
					
					// Page fullscreen rows does not need permanent transparent.
					if ($('#nectar_fullscreen_rows').length > 0) {
						($headerOuterEl.attr('data-permanent-transparent', 'false'));
					}
					
					// Set mobile header height.
					if (nectarDOMInfo.usingMobileBrowser && $('#header-outer[data-mobile-fixed="1"]').length > 0 && 
					$('#header-outer[data-transparent-header="true"]').length == 0) {
						$('#header-space').css('height', $headerOuterEl.outerHeight());
					}
					
				}
				
				

				
				
				
				/**
				* Hide header until needed.
				*
				* Used when "Header Hide Until Needed" is active.
				*
				* @since 10.5
				*/	
				function hhunHeaderEffect() {
					
					var previousScroll  = 0, // previous scroll position
					menuOffset          = 250, // height of menu (once scroll passed it, menu is hidden)
					hideShowOffset      = 6; // scrolling value after which triggers hide/show menu
					
					// Called in RAF loop to calculate the header visibility.
					function hhunCalcs() {
						
						$headerOuterEl.addClass('detached');
						
						var currentScroll = nectarDOMInfo.scrollTop, // Gets current scroll position
						scrollDifference 	= Math.abs(currentScroll - previousScroll); // Calculates how fast user is scrolling
						
						// Stop scrolling while animated anchors / box roll
						if ($('body.animated-scrolling').length > 0 && $('#header-outer.detached').length > 0 || $('body.no-scroll').length > 0) {
							
							if (nectarDOMInfo.winW > 999) {
								
								if (currentScroll > menuOffset) {
									
									// Alter scroll tracking to continue hiding menu.
									previousScroll = nectarDOMInfo.scrollTop;
									currentScroll = nectarDOMInfo.scrollTop;
										
								}
								
								requestAnimationFrame(hhunCalcs);
								return;
							}
						}
						
						// Stop when material ocm or material search is open
						if ($('body.material-ocm-open').length > 0 || $('#search-outer.material-open').length > 0) {
							if (nectarDOMInfo.winW > 999) {
								requestAnimationFrame(hhunCalcs);
								return;
							}
						}
						
						// Stop on mobile if not using sticky option
						if ($('#header-outer[data-mobile-fixed="false"]').length > 0 && $('body.mobile').length > 0) {
							$headerOuterEl.removeClass('detached');
							return;
						}
						
						
						
						if (!$headerOuterEl.hasClass('side-widget-open') && !$('#header-outer .slide-out-widget-area-toggle a').hasClass('animating')) {
							
							var heightToAdjust;
							
							// Remove transparent and body border margin
							if (currentScroll > 1) {
								if ($('#header-outer[data-permanent-transparent="1"]').length == 0) {
									$headerOuterEl.removeClass('transparent');
									$headerOuterEl.addClass('scrolling');
								}
								
								// Handle secondary header
								if ($headerSecondaryEl.length > 0) {
									if (currentScroll > menuOffset) {
										$headerSecondaryEl.addClass('hide-up');
										$headerOuterEl.css('transform', 'translateY(-' + nectarDOMInfo.secondaryHeaderHeight + 'px)');
									} else {
										$headerSecondaryEl.removeClass('hide-up');
										$headerOuterEl.css('transform', '0px)');
									}
								}
								
							}
							
							// Scrolled past menu
							if (currentScroll > menuOffset) {
								
								// Scrolled past detach point add class to fix menu
								if (!$headerOuterEl.hasClass('detached')) {
									
									$headerOuterEl
										.addClass('detached')
										.removeClass('parallax-contained');
								}
								
								$headerOuterEl.removeClass('no-transition');
								
								
								// Scrolling faster than hideShowOffset hide/show menu
								if (scrollDifference >= hideShowOffset) {
									
									if (currentScroll > previousScroll) {
										
										// Hide menu
										if (!$headerOuterEl.hasClass('invisible')) {
											
											$headerOuterEl
												.addClass('invisible')
												.removeClass('at-top');
											
											// Close submenus
											if ($(".sf-menu").length > 0 && $().superfish) {
												$(".sf-menu").superfish('hide');
												$('header#top nav > ul.sf-menu > li.menu-item-over').removeClass('menu-item-over');
											}
											
										}
										
										$('.page-submenu.stuck')
											.css('transform', 'translateY(0px)')
											.addClass('header-not-visible');

									} else {
										
										// Show menu
										if ($headerOuterEl.hasClass('invisible')) {
											$headerOuterEl.removeClass('invisible');
										}
										
										// Page submenu adjust
										heightToAdjust = $headerOuterEl.outerHeight();
										
										if( $headerSecondaryEl.length > 0) {
											heightToAdjust -=	nectarDOMInfo.secondaryHeaderHeight;
										}
	
										if ($bodyBorderTop.length > 0 && $('body.mobile').length == 0) {
											
											$bodyBorderSizeToRemove = ($bodyBorderHeaderColorMatch) ? $bodyBorderTop.height() : 0;
										
											$('.page-submenu.stuck')
												.css('transform', 'translateY(' + (heightToAdjust - $bodyBorderSizeToRemove) + 'px)')
												.removeClass('header-not-visible');
											
										} else {
											$('.page-submenu.stuck')
												.css('transform', 'translateY(' + heightToAdjust + 'px)')
												.removeClass('header-not-visible');
										}
										
									}
								}
								
							} else {
								
		
								var $topDetachNum = ($('#header-outer[data-using-secondary="1"]').length > 0) ? 32 : 0;
								if ($bodyBorderTop.length > 0) {
									$topDetachNum = ($('#header-outer[data-using-secondary="1"]').length > 0) ? 32 + $bodyBorderTop.height() : $bodyBorderTop.height();
								}
								
								if (currentScroll <= $topDetachNum) {
									
									$headerOuterEl
										.addClass('at-top')
										.removeClass('invisible')
										.removeClass('scrolling');
									
									if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && 
									$('#header-outer[data-transparent-header="true"]').length > 0 && 
									$('#header-outer .megamenu').length > 0) {
										
										if ($('#header-outer[data-transparent-header="true"]').length > 0 && 
										$('.nectar-box-roll').length == 0 && 
										$('.megamenu.sfHover').length == 0) {
											
											$headerOuterEl
												.addClass('transparent')
												.css('transform', 'translateY(0)')
												.removeClass('no-transition');
											
										} else if ($('.nectar-box-roll').length > 0) {
											
											$headerOuterEl
												.css('transform', 'translateY(0)')
												.addClass('at-top-before-box');
										}
										
									} else {
										
										if ($('#header-outer[data-transparent-header="true"]').length > 0 && 
										$('.nectar-box-roll').length == 0) {
											
											$headerOuterEl
												.addClass('transparent')
												.css('transform', 'translateY(0)');
												
										} else if ($('.nectar-box-roll').length > 0) {
											
											$headerOuterEl
												.css('transform', 'translateY(0)')
												.addClass('at-top-before-box');
										}
									}
									
									if ($('#page-header-bg[data-parallax="1"]').length > 0) {
										
										$headerOuterEl
											.addClass('parallax-contained')
											.css('transform', 'translateY(0)');
									}
									
								}
								
							}
							
							// At the bottom of document - show menu
							if ((nectarDOMInfo.winH + window.scrollY) >= document.body.offsetHeight) {
								
								$headerOuterEl.removeClass('invisible');
								
								// Page submenu adjust
								heightToAdjust = $headerOuterEl.outerHeight();
								if( $headerSecondaryEl.length > 0) {
									heightToAdjust -=	nectarDOMInfo.secondaryHeaderHeight;
								}
								
								if ($bodyBorderTop.length > 0 && $('body.mobile').length == 0) {
									
									$bodyBorderSizeToRemove = ($bodyBorderHeaderColorMatch) ? $bodyBorderTop.height() : 0;
									$('.page-submenu.stuck')
										.css('transform', 'translateY(' + (heightToAdjust - $bodyBorderSizeToRemove) + 'px)')
										.removeClass('header-not-visible');
								} else {
									
									$('.page-submenu.stuck')
										.css('transform', 'translateY(' + heightToAdjust + 'px)')
										.removeClass('header-not-visible');
								}
								
							}
							
						}
						
						// Keep track of current scroll position
						previousScroll = currentScroll;
						
						if (nectarDOMInfo.winW > 999) {
							requestAnimationFrame(hhunCalcs);
						}
						
					}
					
					// Start the animation loop.
					hhunCalcs();
					
				}
				
		

				/**
				* Shrink the header navigation size.
				*
				* Used when "Header Resize On Scroll" is active.
				*
				* @since 1.0
				*/	
				function smallNav() {
					
					var $offset          = nectarDOMInfo.scrollTop,
					$windowWidth         = nectarDOMInfo.winW,
					$scrollTriggerOffset = ($body.is('.material')) ? 150 : 30;
					
					if ($offset > $scrollTriggerOffset && $windowWidth > 1000 && $('body.material-ocm-open').length == 0) {
						
						
						// Going to small when material search is closing, it must be closed immediately
						if ($body.is('.material')) {
							
							if ($('#search-outer.material-open').length == 0) {
								$('#header-outer[data-transparent-header="true"] .bg-color-stripe').css('transition', 'none');
							}
							
							// Secondary header
							if ($headerSecondaryEl.length > 0) {
								$headerSecondaryEl.addClass('hide-up');
								$headerOuterEl.css('transform', 'translateY(-' + nectarDOMInfo.secondaryHeaderHeight + 'px)');
							}
							
						}
						
						if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && 
						$('#header-outer[data-transparent-header="true"]').length > 0 && 
						$('#header-outer .megamenu').length > 0) {
							
							if ($headerOuterEl.attr('data-transparent-header') == 'true' && 
							$('#header-outer.side-widget-open').length == 0 && 
							$('#header-outer[data-permanent-transparent="1"]').length == 0 && 
							$('.megamenu.sfHover').length == 0) {
								$headerOuterEl.removeClass('transparent');
								$headerOuterEl.removeClass('no-transition');
							}
							
						} else {
							
							if ($headerOuterEl.attr('data-transparent-header') == 'true' && 
							$('#header-outer.side-widget-open').length == 0 && 
							$('#header-outer[data-permanent-transparent="1"]').length == 0) {
								$headerOuterEl.removeClass('transparent');
							}
							
						}
						
						$('#header-outer, #search-outer').addClass('small-nav');
						
						// Body border full width side padding
						if ($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && 
						$bodyBorderTop.length > 0 && 
						$bodyBorderHeaderColorMatch == true) {
							
							$('#header-outer[data-full-width="true"] header > .container').stop(true, true).animate({
								'padding': '0'
							}, {
								queue: false,
								duration: 250,
								easing: 'easeOutCubic'
							});
							
						}
						
						if ($('body.material').length > 0) {
							$('header#top nav > ul > li.menu-item-with-margin').stop(true, true).animate({
								'margin-right': (parseInt($('header#top nav > ul > li.menu-item-with-margin').css('margin-right')) - parseInt(logoShrinkNum) * 3) + 'px'
							}, {
								queue: false,
								duration: 310,
								easing: 'easeOutQuad'
							});
						}
						
						// Box roll effect
						if ($('.nectar-box-roll').length > 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) {
							$('#ajax-content-wrap').animate({
								'margin-top': (Math.floor(($logoHeight - logoShrinkNum) + (headerPadding * 2) / 1.8 + nectarDOMInfo.adminBarHeight + nectarDOMInfo.secondaryHeaderHeight))
							}, {
								queue: false,
								duration: 250,
								easing: 'easeOutCubic'
							});
						}
					
						$window.off('scroll.headerResizeEffect', smallNav);
						$window.on('scroll.headerResizeEffect', bigNav);
						
						// Dark slider coloring border 
						$('#header-outer[data-transparent-header="true"]').css('transition', 'transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out');
						$('#header-outer[data-transparent-header="true"] .cart-menu').css('transition', 'none');
						setTimeout(function () {
							$('#header-outer[data-transparent-header="true"]').css('transition', 'transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out');
							$('#header-outer[data-transparent-header="true"] .cart-menu').css('transition', 'border-color 0.30s ease');
						}, 300);
						
					}
					
				}
				
				
				/**
				* Return header navigation size to full.
				*
				* Used when "Header Resize On Scroll" is active.
				*
				* @since 1.0
				*/	
				function bigNav() {
					
					var $offset          = nectarDOMInfo.scrollTop,
					$windowWidth         = nectarDOMInfo.winW,
					$scrollTriggerOffset = ($body.is('.material')) ? 150 : 30;
					
					if ($body.is('.material-ocm-open')) {
						return false;
					}
					
					if ($offset <= $scrollTriggerOffset && $windowWidth > 1000 || $('.small-nav').length > 0 && $('#ajax-content-wrap.no-scroll').length > 0) {
						
						$('#header-outer, #search-outer').removeClass('small-nav');
						
						if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && 
						$('#header-outer[data-transparent-header="true"]').length > 0 && 
						$('#header-outer .megamenu').length > 0) {
							
							if ($headerOuterEl.attr('data-transparent-header') == 'true' && 
							$('.nectar-box-roll').length == 0 && 
							$('.megamenu.sfHover').length == 0) {
								
								$headerOuterEl.addClass('transparent');
								$headerOuterEl.removeClass('no-transition');
							}
							
						} else {
							
							if ($headerOuterEl.attr('data-transparent-header') == 'true' && $('.nectar-box-roll').length == 0) {
								$headerOuterEl.addClass('transparent');
							}
							
						}
						
						// Body border full width side padding
						if ($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length > 0 && 
						$bodyBorderTop.length > 0 && 
						$bodyBorderHeaderColorMatch == true) {
							
							$('#header-outer[data-full-width="true"] header > .container').stop(true, true).animate({
								'padding': '0 28px'
							}, {
								queue: false,
								duration: 250,
								easing: 'easeOutCubic'
							});
							
						}
						
						
						if ($('body.material').length > 0) {
							
							$('header#top nav > ul > li.menu-item-with-margin').stop(true, true).animate({
								'margin-right': (parseInt($('header#top nav > ul > li.menu-item-with-margin').css('margin-right')) + parseInt(logoShrinkNum) * 3) + 'px'
							}, {
								queue: false,
								duration: 140,
								easing: 'easeOutQuad'
							});
							
						}
						
						
						// Secondary header
						if ($headerSecondaryEl.length > 0) {
							
							$headerSecondaryEl.removeClass('hide-up');
							$headerOuterEl
								.removeClass('hide-up')
								.css('transform', 'translateY(0%)');
								
						}
						
						// Box roll
						if ($('.nectar-box-roll').length > 0 && $('#header-outer[data-permanent-transparent="1"]').length == 0) {
							$('#ajax-content-wrap').animate({
								'margin-top': (Math.floor(($logoHeight) + (headerPadding * 2) + nectarDOMInfo.adminBarHeight + nectarDOMInfo.secondaryHeaderHeight))
							}, {
								queue: false,
								duration: 250,
								easing: 'easeOutCubic'
							});
						}
						
						$window.off('scroll.headerResizeEffect', bigNav);
						$window.on('scroll.headerResizeEffect', smallNav);
						
						// Dark slider coloring border
						$('#header-outer[data-transparent-header="true"]').css('transition', 'transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out');
						$('#header-outer[data-transparent-header="true"] .cart-menu').css('transition', 'none');
						setTimeout(function () {
							$('#header-outer[data-transparent-header="true"]').css('transition', 'transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out');
							$('#header-outer[data-transparent-header="true"] .cart-menu').css('transition', 'border-color 0.30s ease');
						}, 300);
					}
					
				}
				
				
				
				/**
				* Default scroll event to handle transparency/secondary header when no header effects are enabled.
				*
				* @since 4.0
				*/	
				function opaqueCheck() {
					
					// The condense header effect will bypass this unless in the custom mobile breakpoint (which is defined in theme options).
					if ($('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0 && !$headerOuterEl.hasClass('within-custom-breakpoint') ) {
						return;
					}
					
					if (nectarDOMInfo.scrollTop > 0) {
						
						if ($('body.material').length > 0) {
							$headerOuterEl.addClass('scrolled-down');
							
							// Secondary header
							if ($headerSecondaryEl.length > 0 && nectarDOMInfo.winW > 1000) {
								$headerSecondaryEl.addClass('hide-up');
								$headerOuterEl.css('transform', 'translateY(-' + nectarDOMInfo.secondaryHeaderHeight + 'px)');
							}
						}
						
						if ($headerOuterEl.attr('data-transparent-header') == 'true' && $('#header-outer[data-permanent-transparent="1"]').length == 0) {
							$headerOuterEl.removeClass('transparent').addClass('scrolled-down');
						}
						
						// Switch event to watch.
						$window.off('scroll.headerResizeEffectOpaque', opaqueCheck);
						$window.on('scroll.headerResizeEffectOpaque', transparentCheck);
					}
				}
				
				
				/**
				* Default scroll event to handle transparency/secondary header when no header effects are enabled.
				*
				* @since 4.0
				*/	
				function transparentCheck() {
					
					// The condense header effect will bypass this unless in the custom mobile breakpoint (which is defined in theme options).
					if ($('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0 && !$headerOuterEl.hasClass('within-custom-breakpoint') ) {
						return;
					}
					
					if (nectarDOMInfo.scrollTop == 0 && $('body.material-ocm-open').length == 0) {
						
						if ($('#header-outer[data-megamenu-rt="1"]').length > 0 && 
						$('#header-outer[data-transparent-header="true"]').length > 0 && 
						$('#header-outer .megamenu').length > 0) {
							
							if ($headerOuterEl.attr('data-transparent-header') == 'true' && $('.megamenu.sfHover').length == 0) {
								
								$headerOuterEl
									.addClass('transparent')
									.removeClass('scrolled-down');
									
								$headerOuterEl.removeClass('no-transition');
								
							} else if ($headerOuterEl.attr('data-transparent-header') == 'true') {
								
								$headerOuterEl.removeClass('scrolled-down');
							}
							
						} else {
							
							if ($headerOuterEl.attr('data-transparent-header') == 'true') {
								$headerOuterEl
									.addClass('transparent')
									.removeClass('scrolled-down');
							}
							
						}
						
						if ($('body.material').length > 0) {
							$headerOuterEl.removeClass('scrolled-down');
							
							// Secondary header
							if ($headerSecondaryEl.length > 0 && nectarDOMInfo.winW > 1000) {
								
								$headerSecondaryEl.removeClass('hide-up');
								$headerOuterEl
									.removeClass('hide-up')
									.css('transform', 'translateY(0%)');
							}
						}
						
						// Switch event to watch.
						$window.off('scroll.headerResizeEffectOpaque', transparentCheck);
						$window.on('scroll.headerResizeEffectOpaque', opaqueCheck);
					}
					
				}
				
				
				

				/**
				* Mobile header event for handling transparency/secondary header.
				*
				* @since 10.5
				* @see bindScrollEffectsMobile
				*/	
				function mobileHeaderRAF() {
					
					if ($('body.material-ocm-open').length > 0) {
						requestAnimationFrame(mobileHeaderRAF);
						return;
					}
					// Scrolled down.
					if (nectarDOMInfo.scrollTop > 80) {
						
						if (!$headerOuterEl.is('[data-permanent-transparent="1"]')) {
							$headerOuterEl.removeClass('transparent');
						}
						
						if (nectarDOMInfo.secondaryHeaderHeight > 0) {
							$headerSecondaryEl.addClass('hide-up');
							$headerOuterEl.css('transform', 'translateY(-' + nectarDOMInfo.secondaryHeaderHeight + 'px)');
						}
						
					} 
					// At top.
					else {
						
						if ($headerOuterEl.is('[data-transparent-header="true"]')) {
							$headerOuterEl.addClass('transparent');
						}
						
						if (nectarDOMInfo.secondaryHeaderHeight > 0) {
							$headerSecondaryEl.removeClass('hide-up');
							$headerOuterEl.css('transform', 'translateY(0px)');
						}
						
					}
					
					if (nectarDOMInfo.winW < 1000) {
						requestAnimationFrame(mobileHeaderRAF);
					}
				}
				
				
				
				/**
				* Bind mobile header scroll effects.
				*
				* @since 10.5
				* @see headerNavScrollInit
				*/	
				function bindScrollEffectsMobile() {
					
					if (nectarDOMInfo.winW > 999) {
						return;
					}
					
					// Unbind desktop effects.
					$window.off('scroll.headerResizeEffect');
					$window.off('scroll.headerResizeEffectOpaque');
					
					// Remove HHUN classes.
					$headerOuterEl
						.removeClass('scrolled-down')
						.removeClass('detached')
						.removeClass('invisible')
						.removeClass('at-top')
						.css('transform', 'none');
					
					// Handle mobile transparent class.
					if ($('#header-outer[data-mobile-fixed="1"]').length > 0) {
						requestAnimationFrame(mobileHeaderRAF);
					} else if ($headerOuterEl.attr('data-transparent-header') == 'true') {
						$headerOuterEl.addClass('transparent');
					}
					
					$window.off('smartresize.nectarNavScrollEffects');
					$window.on('smartresize.nectarNavScrollEffects', bindScrollEffectsDesktop);
					
				}
				
				/**
				* Bind deaktop header scroll effects.
				*
				* @since 10.5
				* @see headerNavScrollInit
				*/	
				function bindScrollEffectsDesktop() {
					
					if (nectarDOMInfo.winW < 1000) {
						return;
					}
					
					if (headerResize == true && headerHideUntilNeeded != '1') {

						$window.off('scroll.headerResizeEffect');
						
						if ($('#nectar_fullscreen_rows').length == 0) {
							$window.on('scroll.headerResizeEffect', smallNav);
						} else if ($('#nectar_fullscreen_rows[data-mobile-disable="on"]').length > 0 && nectarDOMInfo.usingMobileBrowser) {
							$window.on('scroll.headerResizeEffect', smallNav);
						}
						
					} else if (headerHideUntilNeeded != '1') {

						$window.off('scroll.headerResizeEffectOpaque');
						$window.on('scroll.headerResizeEffectOpaque', opaqueCheck);
						
					} else if (headerHideUntilNeeded == '1') {
						

						if ($('.nectar-box-roll').length > 0) {
							$headerOuterEl.addClass('at-top-before-box');
						}
						
						// Don't trigger for header remove stickiness.
						if ($('#header-outer[data-remove-fixed="1"]').length == 0) {
							hhunHeaderEffect();
						}
						
					} //end if hhun
					
					// Condense header effect coming from mobile.
					if ($('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length > 0 ) {
						
						if( $headerSecondaryEl.length > 0 ) {
							// Remove transform.
							$headerOuterEl.css('transform','');
						}

						if ( nectarDOMInfo.scrollTop > 200 && !$headerOuterEl.hasClass('fixed-menu') ) {
							$headerOuterEl.addClass('fixed-menu');
						}
						
					}
					
					// Only bind mobile if applicable.
					
					$window.off('smartresize.nectarNavScrollEffects');
					$window.on('smartresize.nectarNavScrollEffects', bindScrollEffectsMobile);

				}
				


				/**
				* Header Navigation scroll events initialization.
				*
				* @since 10.5
				*/			
				function headerNavScrollInit() {

					// Remove transparent class if page loaded further down.
					if ($('#header-outer[data-remove-fixed="1"]').length == 0 && nectarDOMInfo.winW > 1000) {
						if ( $(window).scrollTop() != 0 && $('#header-outer.transparent[data-permanent-transparent="false"]').length == 1) {
							$headerOuterEl.removeClass('transparent');
						}
					}
					
					// Permanent transparent header.
					if ($('#nectar_fullscreen_rows').length == 0 && $('.nectar-box-roll').length == 0) {
						midnightInit();
					}

					// Determine which events to bind at start.
					if (nectarDOMInfo.winW < 1000 && $('.nectar-box-roll').length == 0) {
						bindScrollEffectsMobile();
						$window.on('smartresize.nectarNavScrollEffects', bindScrollEffectsMobile);
					} else {
						bindScrollEffectsDesktop();
						$window.on('smartresize.nectarNavScrollEffects', bindScrollEffectsDesktop);
					}

				}	
				
				
				


				
				/**
				* Set the header space div height.
				*
				* @since 10.5
				*/	
				function headerSpace() {
					
					if ($('.mobile').length > 0) {
						
						if (nectarDOMInfo.winH < nectarDOMInfo.winW && nectarDOMInfo.winW > 1000) {
							if ($('#header-outer.small-nav').length == 0) {
								$('#header-space').css('height', $headerOuterEl.outerHeight());
							}
						} else {
							$('#header-space').css('height', $headerOuterEl.outerHeight());
						}
						
					} else {
						
						if ($('.nectar-parallax-scene.first-section').length == 0) {
							
							var headerPadding2 = headerPadding - headerPadding / 1.8;
							var $headerHeight = ($('#header-outer[data-header-resize="1"]').length > 0 && $('.small-nav').length > 0) ? $headerOuterEl.outerHeight() + (parseInt(logoShrinkNum) + headerPadding2 * 2) : $headerOuterEl.outerHeight();
							
							$('#header-space').css('height', $headerHeight);
							
						}
						
					}
					
				}
				
				
				
				/**
				* Handle header nav distance away from top to account for admin bar.
				*
				* @since 10.5
				*/	
				
				function headerNavOffsetInit() {
					
					var lastPosition     = -1;
					var $headerScrollTop = nectarDOMInfo.scrollTop;
					
					// Verify scroll pos has changed before calculating.
					function headerOffsetAdjust() {
						
						if ($('body.compose-mode').length > 0) {
							return;
						}
						
						$headerScrollTop = nectarDOMInfo.scrollTop;
						
						if (lastPosition == $headerScrollTop) {
							requestAnimationFrame(headerOffsetAdjust);
							return false;
						} else {
							lastPosition = $headerScrollTop;
						}
						
						headerOffsetAdjustCalc();
						requestAnimationFrame(headerOffsetAdjust);
						
					}
					
					// Called when scrolling occurs.
					function headerOffsetAdjustCalc() {
						
						var $eleHeight = 0;
						
						// Mobile.
						if ($('body.mobile').length > 0 || (condenseHeaderLayout == true && $('#header-outer .span_9').css('display') == 'none')) {

							$eleHeight = 0;
							var $endOffset = ($wpAdminBar.css('position') == 'fixed') ? $wpAdminBar.height() : 0;
							
							$eleHeight += nectarDOMInfo.adminBarHeight;
							
							if ($eleHeight - $headerScrollTop > $endOffset) {
								$headerOuterEl.css('top', $eleHeight - $headerScrollTop + 'px');
							} else {
								$headerOuterEl.css('top', $endOffset);
							}
							
						} 
						// Desktop
						else {
							if ( condenseHeaderLayout == false ) {
								
								$eleHeight = 0;
								
								if( !$headerOuterEl.is('[data-remove-fixed="1"]') ) {
									$eleHeight += nectarDOMInfo.adminBarHeight;
								}
								$headerOuterEl.css('top', $eleHeight + 'px');
							}
						}
						
					}
					
					// Bind event and begin if needed.
					if ($('#header-outer[data-mobile-fixed="1"]').length > 0 && $wpAdminBar.length > 0) {
						
						if ($('#nectar_fullscreen_rows').length == 0) {
							requestAnimationFrame(headerOffsetAdjust);
						} else if ($('#nectar_fullscreen_rows').length > 0 && nectarDOMInfo.usingMobileBrowser) {
							requestAnimationFrame(headerOffsetAdjust);
						}
						
						$window.smartresize(headerOffsetAdjustCalc);
						
					}
					
				}
				
				
				
				
				
				
					
				/**
				* Calculate the minimum body height when using the footer reveal effect or material OCM
				*
				* @since 7.0
				*/
				function footerRevealCalcs() {
					
					var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $window.width() > 1000) ? 0 : $headerOuterEl.outerHeight();
					
					if ($window.height() - $wpAdminBar.height() - $headerNavSpace - $('#footer-outer').height() - 1 - $pageHeaderBG.height() - $('.page-header-no-bg').height() > 0) {
						var $resizeExtra = ($('body:not(.material) #header-outer[data-header-resize="1"]').length > 0) ? 55 : 0;
						$('body[data-footer-reveal="1"] .container-wrap').css({
							'margin-bottom': $('#footer-outer').height() - 1
						});
						
						$('.container-wrap').css({
							'min-height': $window.height() - $wpAdminBar.height() - $headerNavSpace - $('#footer-outer').height() - 1 - $('.page-header-no-bg').height() - $pageHeaderBG.height() + $resizeExtra
						});
						
					} else {
						$('body[data-footer-reveal="1"] .container-wrap').css({
							'margin-bottom': $('#footer-outer').height() - 1
						});
					}
					
					if ($window.width() < 1000) {
						$('#footer-outer').attr('data-midnight', 'light');
					}
					else {
						$('#footer-outer').removeAttr('data-midnight');
					}
				}
				
				
				/**
				* Initialize footer reveal and bind event
				*
				* @since 10.5
				*/
				function footerRevealInit() {
					
					if ($('body[data-footer-reveal="1"]').length > 0 || $('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length > 0) {
						
						setTimeout(function () {
							footerRevealCalcs();
						}, 60);
						footerRevealCalcs();
						
						$window.on('resize', footerRevealCalcs);
	
						if ($('bodybody[data-footer-reveal="1"][data-footer-reveal-shadow="large_2"]').length > 0) $('.container-wrap').css({
							boxShadow: '0 70px 110px -30px ' + $('#footer-outer').css('backgroundColor')
						});
						
					}
					
				}
				
				

				
				
				/**
				* Switch header navigation BG color to match row BG color that is passes.
				*
				* Only called when using "Header Inherit Row Color" option.
				*
				* @since 5.0
				*/
				function headerRowColorInheritInit() {
					
					if ($('body[data-header-inherit-rc="true"]').length > 0 && $('.mobile').length == 0 && $('#header-outer[data-transparent-header="true"]').length > 0 ) {
						
						var headerOffset = $logoHeight / 2 + headerPadding + nectarDOMInfo.adminBarHeight;
						
						if( $('#header-outer[data-permanent-transparent="1"]').length == 0 ) {
							headerOffset = ($logoHeight - logoShrinkNum) + Math.ceil((headerPadding * 2) / 1.8) + nectarDOMInfo.adminBarHeight;
						} 
						
						$('.main-content > .row > .wpb_row').each(function () {
							
							var $that = $(this);
							var $textColor;
							
							var waypoint = new Waypoint({
								element: $that,
								handler: function (direction) {
									
									//User is scrolling down.
									if (direction == 'down') {
										
										if ($that.find('.row-bg.using-bg-color').length > 0) {
											
											$textColor = ($that.find('> .col.span_12.light').length > 0) ? 'light-text' : 'dark-text';
											
											$headerOuterEl
												.css('background-color', $that.find('.row-bg').css('background-color'))
												.removeClass('light-text')
												.removeClass('dark-text')
												.addClass($textColor);
											
											$headerOuterEl.attr('data-current-row-bg-color', $that.find('.row-bg').css('background-color'));
											$('body.material #header-outer .bg-color-stripe').css('background-color', $that.find('.row-bg').css('background-color'));
											
										} else {
											
											$headerOuterEl
												.css('background-color', $headerOuterEl.attr('data-user-set-bg'))
												.removeClass('light-text')
												.removeClass('dark-text');
											
											$headerOuterEl.attr('data-current-row-bg-color', $headerOuterEl.attr('data-user-set-bg'));
											$('body.material #header-outer .bg-color-stripe').css('background-color', '');
											
										}
										
									} 
									
									//User is scrolling up.
									else {
										
										if ($that.prev('div.wpb_row').find('.row-bg.using-bg-color').length > 0) {
											
											$textColor = ($that.prev('div.wpb_row').find('> .col.span_12.light').length > 0) ? 'light-text' : 'dark-text';
											
											$headerOuterEl
												.css('background-color', $that.prev('div.wpb_row').find('.row-bg').css('background-color'))
												.removeClass('light-text')
												.removeClass('dark-text')
												.addClass($textColor);
											
											$headerOuterEl.attr('data-current-row-bg-color', $that.prev('div.wpb_row').find('.row-bg').css('background-color'));
											$('body.material #header-outer .bg-color-stripe').css('background-color', $that.prev('div.wpb_row').find('.row-bg').css('background-color'));
											
										} else {
											
											$headerOuterEl
												.css('background-color', $headerOuterEl.attr('data-user-set-bg'))
												.removeClass('light-text')
												.removeClass('dark-text');
											
											$headerOuterEl.attr('data-current-row-bg-color', $headerOuterEl.attr('data-user-set-bg'));
											$('body.material #header-outer .bg-color-stripe').css('background-color', '');
											
										}
										
									}
									
								},
								offset: headerOffset
								
							}); // End of waypoint bind.
							
						}); // End of loop through rows.
						
					}
					
				}
				
				
				
				/****************sticky page submenu******************/
				
				(function () {
					
					var $ = window.jQuery,
					Waypoint = window.Waypoint,
					$offsetHeight = calcHeaderNavHeight(),
					$headerHeight = calcHeaderNavHeight();

					$window.on('smartresize', function () {
						
						$offsetHeight = calcHeaderNavHeight();
						
						if ($wpAdminBar.length > 0 && 
							$wpAdminBar.css('position') == 'fixed') {
							$offsetHeight += $wpAdminBar.height();
						}
						
						if ($bodyBorderTop.length > 0 && 
							$window.width() > 1000 && 
							$('body[data-hhun="1"]').length > 0) {
							$offsetHeight += $bodyBorderTop.height();
						}
						
						// Recalc for resizing (same as stuck/unstuck logic below)
						if ($('.page-submenu.stuck').length > 0) {
							
							$('.page-submenu.stuck')
								.addClass('no-trans')
								.css('top', $offsetHeight)
								.css('transform', 'translateY(0)').addClass('stuck');
							
							setTimeout(function () {
								$('.page-submenu.stuck').removeClass('no-trans');
							}, 50);
							
							$('.page-submenu.stuck')
								.parents('.wpb_row')
								.css('z-index', 10000);
							
							// Boxed layout
							if ($('#boxed').length > 0) {
								
								var $negMargin = ($window.width() > 1000) ? $('.container-wrap').width() * 0.04 : 39;
								
								$('.page-submenu.stuck').css({
									'margin-left': '-' + $negMargin + 'px',
									'width': $('.container-wrap').width()
								});
								
							}
							
						} else {
							
							$('.page-submenu.stuck')
								.css('top', '0')
								.removeClass('stuck');
								
							$('.page-submenu.stuck')
								.parents('.wpb_row')
								.css('z-index', 'auto');
							
							if ($('#boxed').length > 0) {
								$('.page-submenu.stuck').css({
									'margin-left': '0px',
									'width': '100%'
								});
							}
							
						}
						
					});
					
					/* http://imakewebthings.com/waypoints/shortcuts/sticky-elements */
					function Sticky(options) {
						this.options = $.extend({}, Waypoint.defaults, Sticky.defaults, options);
						this.element = this.options.element;
						this.$element = $(this.element);
						this.createWrapper();
						this.createWaypoint();
					}
					
					/* Private */
					Sticky.prototype.createWaypoint = function () {
						
						var originalHandler = this.options.handler;
						
						$offsetHeight = calcHeaderNavHeight();
						
						if ($wpAdminBar.length > 0 && $wpAdminBar.css('position') == 'fixed') {
							$offsetHeight += $wpAdminBar.height();
						}
						
						if ($bodyBorderTop.length > 0 && $window.width() > 1000 && $('body[data-hhun="1"]').length > 0) {
							$offsetHeight += $bodyBorderTop.height();
						}
						
						this.waypoint = new Waypoint($.extend({}, this.options, {
							element: this.wrapper,
							handler: $.proxy(function (direction) {
								var shouldBeStuck = this.options.direction.indexOf(direction) > -1;
								var wrapperHeight = shouldBeStuck ? this.$element.outerHeight(true) : '';
								
								this.$wrapper.height(wrapperHeight);
								if (shouldBeStuck) {
									
									this.$element
										.addClass('no-trans')
										.css('top', $offsetHeight)
										.css('transform', 'translateY(0)')
										.addClass('stuck');
									
									var $that = this;
									
									setTimeout(function () {
										$that.$element.removeClass('no-trans');
									}, 50);
									
									this.$element.parents('.wpb_row').css('z-index', 10000);
									
									//boxed
									if ($('#boxed').length > 0) {
										var $negMargin = ($window.width() > 1000) ? $('.container-wrap').width() * 0.04 : 39;
										this.$element.css({
											'margin-left': '-' + $negMargin + 'px',
											'width': $('.container-wrap').width()
										});
									}
									
								} else {
									this.$element.css('top', '0').removeClass('stuck');
									
									if ($('#boxed').length > 0) this.$element.css({
										'margin-left': '0px',
										'width': '100%'
									});
								}
								
								if (originalHandler) {
									originalHandler.call(this, direction);
								}
							}, this),
							offset: $offsetHeight
						}));
						
						var $that = this;
						
						
						setInterval(function () {
							
							if ($('body[data-hhun="1"] #header-outer.detached:not(.invisible)').length > 0) {
								
								var heightToAdjust = $headerOuterEl.outerHeight();
								
								if( $headerSecondaryEl.length > 0) {
									heightToAdjust -=	nectarDOMInfo.secondaryHeaderHeight;
								}
								
								$that.waypoint.options.offset = $offsetHeight + heightToAdjust;
							}
							else {
								$that.waypoint.options.offset = $offsetHeight;
							}
							
							Waypoint.refreshAll();
							
						}, 100);
						
						
					};
					
					/* Private */
					Sticky.prototype.createWrapper = function () {
						if (this.options.wrapper) {
							this.$element.wrap(this.options.wrapper);
						}
						this.$wrapper = this.$element.parent();
						this.wrapper  = this.$wrapper[0];
					};
					
					/* Public */
					Sticky.prototype.destroy = function () {
						
						if (this.$element.parent()[0] === this.wrapper) {
							this.waypoint.destroy();
							this.$element.removeClass(this.options.stuckClass);
							if (this.options.wrapper) {
								this.$element.unwrap();
							}
						}
						
					};
					
					Sticky.defaults = {
						wrapper: '<div class="sticky-wrapper" />',
						stuckClass: 'stuck',
						direction: 'down right'
					};
					
					Waypoint.Sticky = Sticky;
					
				}());
				
				
				
				/**
				* Page submenu page builder element.
				*
				* @since 10.5
				*/
				
				function pageSubmenuInit() {
					
					if ($('.page-submenu[data-sticky="true"]').length > 0 && $('#nectar_fullscreen_rows').length == 0) {
						
						// Remove outside of column setups 
						if ($('.page-submenu').parents('.span_12').find('> .wpb_column').length > 1) {
							
							var pageMenu      = $('.page-submenu').clone(),
							pageMenuParentRow = $('.page-submenu').parents('.wpb_row');
							
							$('.page-submenu').remove();
							pageMenuParentRow.before(pageMenu);
						}
						
						var sticky = new Waypoint.Sticky({
							element: $('.page-submenu[data-sticky="true"]')[0]
						});
						
					}
					
					// Adjust to be higher.
					if ($('#nectar_fullscreen_rows').length == 0) {
						
						$('.page-submenu')
							.parents('.wpb_row')
							.css('z-index', 10000);
					}
					
					// Bind events.
					$('.page-submenu .mobile-menu-link').on('click', function () {
						
						$(this).parents('.page-submenu')
							.find('ul')
							.stop(true)
							.slideToggle(350);
							
						return false;
						
					});
					
					$('.page-submenu ul li a').on('click', function () {
						
						if ($('body.mobile').length > 0) {
							$(this).parents('.page-submenu')
								.find('ul')
								.stop(true)
								.slideToggle(350);
						}
						
					});
					
				}
				


				
				/**
				* Page builder full height row option.
				*
				* @since 8.0
				*/
				
				function vcFullHeightRow() {
					
					var $element = $(".vc_row-o-full-height:first");
					if ($element.length) {
						
						var windowHeight, offsetTop, fullHeight;
						windowHeight = $window.height();
						
						$(".vc_row-o-full-height").each(function () {
							
							offsetTop = $(this).offset().top;
							
							if (offsetTop < windowHeight && 
								$(this).hasClass('top-level') && 
								!nectarDOMInfo.usingFrontEndEditor) {
									
								fullHeight = 100 - offsetTop / (windowHeight / 100);
								$(this).css("min-height", fullHeight + "vh");
								$(this).find('> .col.span_12').css("min-height", fullHeight + "vh");
								
							} else {
								
								$(this).css("min-height", windowHeight);
								$(this).find('> .col.span_12').css("min-height", windowHeight);
								
							}
							
						});
						
					}
					
				}
				
				
				/**
				* Page builder full height row init.
				*
				* @since 10.5
				*/
				
				function vcFullHeightRowInit() {
					
					if( $('.vc_row-o-full-height').length > 0 ) {
						vcFullHeightRow();
						$window.on('smartresize', vcFullHeightRow);
					}
					
				}
				
				
				/**
				* Page builder equal height row IE helper.
				*
				* @since 8.0
				*/
				function fixIeFlexbox() {
					var ua = window.navigator.userAgent,
					msie = ua.indexOf("MSIE ");
					(msie > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function () {
						"flex" === $(this).find('> .span_12').css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
					})
				}
				
				
				

				
				
				
				
				
				/**
				* Recent post height
				*
				* @since 10.5
				*/
				function recentPostsTitleOnlyEqualHeight() {
					
					function recentPostHeight() {
						
						$('.blog-recent[data-style="title_only"]').each(function () {
							
							if ($(this).find('> .col').length > 1) {
								return false;
							}
							var $parentsSeletor = $(this).parent().parent().parent();
							
							if ($parentsSeletor.hasClass('vc_col-sm-3') ||
							$parentsSeletor.hasClass('vc_col-sm-4') ||
							$parentsSeletor.hasClass('vc_col-sm-6') ||
							$parentsSeletor.hasClass('vc_col-sm-8') ||
							$parentsSeletor.hasClass('vc_col-sm-9')) {
								
								if ($('body.mobile').length == 0 && $(this).next('div').length == 0) {
									var tallestColumn = 0;
									
									$(this).find('> .col').css('padding', '50px 20px');
									
									$(this).parents('.span_12').find(' > .wpb_column').each(function () {
										
										if( Math.floor($(this).height()) > tallestColumn ) {
											tallestColumn = Math.floor($(this).height());
										}
										
									});
									
									if (Math.floor($(this).find('> .col').outerHeight(true)) < Math.floor($(this).parents('.wpb_row').height()) - 1) {
										$(this).find('> .col').css('padding-top', (tallestColumn - $(this).find('> .col').height()) / 2 + 'px');
										$(this).find('> .col').css('padding-bottom', (tallestColumn - $(this).find('> .col').height()) / 2 + 'px');
									}
									
								} else {
									$(this).find('> .col').css('padding', '50px 20px');
								}
							}
						});
						
					}
					
					// Set heights.
					if( $('.blog-recent[data-style="title_only"]').length > 0 ) {
						recentPostHeight();
						$window.on('smartresize',recentPostHeight);
					}
					
				}
				
				
				

				
				/**
				* Helper to calculate recent post slider height
				*
				* @since 7.0
				*/
				function recentPostSliderHeight() {
					
					$('.nectar-recent-posts-slider').each(function () {
						
						var $minHeight   = 250,
						$definedHeight   = parseInt($(this).attr('data-height')),
						dif              = ($('body[data-ext-responsive="true"]').length > 0) ? $window.width() / 1400 : $window.width() / 1100,
						$sliderSelectors = $(this).find('.nectar-recent-post-slide, .flickity-viewport');
						
						if (nectarDOMInfo.winW > 1000 && $('#boxed').length == 0) {
							
							if ($(this).parents('.full-width-content').length == 0) {
								
								if ($('body[data-ext-responsive="true"]').length > 0 && nectarDOMInfo.winW >= 1400) {
									$sliderSelectors.css('height', Math.ceil($definedHeight));
								} else if ($('body[data-ext-responsive="true"]').length == 0 && nectarDOMInfo.winW >= 1100) {
									$sliderSelectors.css('height', Math.ceil($definedHeight));
								} else {
									$sliderSelectors.css('height', Math.ceil($definedHeight * dif));
								}
								
							} else {
								$sliderSelectors.css('height', Math.ceil($definedHeight * dif));
							}
							
						} else {
							
							// Column sliders
							var $parentCol = ($(this).parents('.wpb_column').length > 0) ? $(this).parents('.wpb_column') : $(this).parents('.col');
							
							if ($parentCol.length == 0) {
								$parentCol = $('.main-content');
							}
							
							if (!$parentCol.hasClass('vc_span12') && 
							!$parentCol.hasClass('main-content') && 
							!$parentCol.hasClass('span_12') && 
							!$parentCol.hasClass('vc_col-sm-12')) {
								
								var $parentColWidth = sliderColumnDesktopWidth($parentCol),
								$aspectRatio 				= $definedHeight / $parentColWidth;
								
								// Min height
								if ($aspectRatio * $parentCol.width() <= $minHeight) {
									$sliderSelectors.css('height', $minHeight);
								} else {
									$sliderSelectors.css('height', $aspectRatio * $parentCol.width());
								}
								
							}
							
							// Regular
							else {
								
								// Min height
								if ($definedHeight * dif <= $minHeight) {
									$sliderSelectors.css('height', $minHeight);
								} else {
									$sliderSelectors.css('height', Math.ceil($definedHeight * dif));
								}
								
							}
							
						}
						
					});
					
				}
				

				function sliderColumnDesktopWidth(parentCol) {
					
					var $parentColWidth = 1100,
					$columnNumberParsed = $(parentCol).attr('class').match(/\d+/);
					
					if ($columnNumberParsed == '2') {
						$parentColWidth = 170
					} else if ($columnNumberParsed == '3') {
						$parentColWidth = 260
					} else if ($columnNumberParsed == '4') {
						$parentColWidth = 340
					} else if ($columnNumberParsed == '6') {
						$parentColWidth = 530
					} else if ($columnNumberParsed == '8') {
						$parentColWidth = 700
					} else if ($columnNumberParsed == '9') {
						$parentColWidth = 805
					} else if ($columnNumberParsed == '10') {
						$parentColWidth = 916.3
					} else if ($columnNumberParsed == '12') {
						$parentColWidth = 1100
					}
					
					return $parentColWidth;
				}
				
				
				/**
				* Spit text into separate lines to animate in 
				*
				* @since 7.0
				*/
				
				function splitLineText() {
					$('.nectar-recent-posts-single_featured.multiple_featured').each(function () {
						
						var $slideClass = ($(this).find('.project-slides').length > 0) ? '.project-slide' : '.nectar-recent-post-slide',
						$slideInfoClass = ($(this).find('.project-slides').length > 0) ? '.project-info h1' : '.inner-wrap h2 a';
						
						$(this).find($slideClass).each(function () {
							
							$(this).find($slideInfoClass).each(function () {
								
								var textArr = $(this).text();
								textArr = textArr.trim();
								textArr = textArr.split(' ');
								
								$(this)[0].innerHTML = '';
								
								for (var i = 0; i < textArr.length; i++) {
									$(this)[0].innerHTML += '<span>' + textArr[i] + '</span> ';
								}
								
							});
							
							$(this).find($slideInfoClass + ' > span').wrapInner('<span class="inner" />');
							
						});
						
					});
					
				}
				
				
				/**
				* Create recent post sliders
				*
				* @since 7.0
				*/
				function recentPostsFlickityInit() {
					
				
					if ($('.nectar-recent-posts-slider-inner').length > 0) {
						
						var $rpFGroupCells = ($('.nectar-recent-posts-slider_multiple_visible').length > 0) ? '90%' : false;
						
						var $rpF = $('.nectar-recent-posts-slider-inner').flickity({
							contain: true,
							groupCells: $rpFGroupCells,
							draggable: true,
							lazyLoad: false,
							imagesLoaded: true,
							percentPosition: true,
							prevNextButtons: false,
							pageDots: true,
							resize: true,
							setGallerySize: true,
							wrapAround: true,
							accessibility: false
						});
						
						setTimeout(function () {
							$('.nectar-recent-posts-slider-inner').addClass('loaded');
						}, 1150);
						var flkty = $rpF.data('flickity');
						
						$rpF.on('dragStart.flickity', function () {
							$('.flickity-viewport').addClass('is-moving');
						});
						
						$rpF.on('dragEnd.flickity', function () {
							$('.flickity-viewport').removeClass('is-moving');
						});
						
						var $dragTimeout;
						
						$rpF.on('select.flickity', function () {
							
							$('.flickity-viewport').addClass('no-hover');
							clearTimeout($dragTimeout);
							$dragTimeout = setTimeout(function () {
								$('.flickity-viewport').removeClass('no-hover');
							}, 400);
							
						});
						
						recentPostSliderHeight();
						$window.on('resize', recentPostSliderHeight);
						
						if (!nectarDOMInfo.usingMobileBrowser && !nectarDOMInfo.usingFrontEndEditor) {
							$window.on('resize', recentPostSliderParallaxMargins);
						}
						
						
					}
					

					
					// Multiple featured controls
					function multipleLargeFeaturedInit() {
						$('.nectar-recent-posts-single_featured.multiple_featured').each(function (sliderIndex) {
							
							if ($(this).find('> .normal-container').length > 0) {
								$(this).find('> .normal-container').remove();
							}
							
							$(this).append('<div class="normal-container container"> <ul class="controls" data-color="' + $(this).attr('data-button-color') + '" data-num="' + $(this).find('.nectar-recent-post-slide').length + '"></ul> </div>');
							var $that = $(this);
							var tallestFeaturedSlide = 0;
							var $slideClickTimeout;
							
							// Store instance
							$nectarCustomSliderRotate[sliderIndex] = {
								autorotate: ''
							};
							
							$(this).find('.nectar-recent-post-slide').each(function (i) {
								
								if ($(this).find('.recent-post-container').height() > tallestFeaturedSlide) {
									$(this).siblings().removeClass('tallest');
									$(this).addClass('tallest');
									tallestFeaturedSlide = $(this).find('.recent-post-container').height();
								}
								
								var $activeClass = (i == 0 && $(this).parents('.nectar-recent-posts-single_featured.multiple_featured[data-autorotate="none"]').length > 0) ? 'class="active"' : '';
								$that.find('.controls').append('<li ' + $activeClass + '><span class="title">' + $(this).find('h2').text() + '</span></li>');
							});
							
							$(this).addClass('js-loaded');
							

							// Click event
							$(this).find('.controls li').on('click', function (e) {
								
								if ($(this).hasClass('active')) {
									return;
								}
								
								if (e.originalEvent !== undefined) {
									$(this).parent().find('.active').addClass('trans-out');
								}
								
								var $index = $(this).index(),
								$oldIndex  = $(this).parent().find('.active').index(),
								$that      = $(this);
								
								clearTimeout($slideClickTimeout);
								
								$(this).siblings().removeClass('active');
								$(this).addClass('active');
								
								$slideClickTimeout = setTimeout(function () {
									
									$that.parents('.multiple_featured')
										.find('.nectar-recent-post-slide:not(:eq(' + $index + '))')
										.css('opacity', '0')
										.removeClass('active');
										
									$that.parent()
										.find('.trans-out')
										.removeClass('trans-out');
										
								}, 300);
								
								$that.parents('.multiple_featured')
									.find('.nectar-recent-post-slide:not(:eq(' + $index + '))')
									.css('z-index', '10');
									
								$that.parents('.multiple_featured')
									.find('.nectar-recent-post-slide:eq(' + $oldIndex + ')')
									.css('z-index', '15');
								
								$(this).parents('.multiple_featured').find('.nectar-recent-post-slide').eq($index).css({
									'opacity': '1',
									'z-index': '20'
								}).addClass('active');
								
								if ($(this).parents('.multiple_featured').attr('data-autorotate') != 'none') {
									nectarCustomSliderResetRotate($that.parents('.nectar-recent-posts-single_featured.multiple_featured'), sliderIndex);
								}
							});
							
							
							// Autorotate
							$that = $(this);
							
							if ($(this).attr('data-autorotate').length > 0 && 
							$(this).attr('data-autorotate') != 'none' && 
							$('body.vc_editor').length == 0) {
								
								setTimeout(function () {
									var slide_interval = (parseInt($that.attr('data-autorotate')) < 100) ? 4000 : parseInt($that.attr('data-autorotate'));
									
									$nectarCustomSliderRotate[sliderIndex].autorotate = setInterval(function () {
										nectarCustomSliderRotate($that)
									}, slide_interval);
									
									// Set first active class
									$that
										.find('.controls > li:first-child')
										.addClass('active');
									
								}, 30);
								
							}
							
						});
						
						splitLineText();
						$window.on('resize', splitLineText);
						
					}
					
					multipleLargeFeaturedInit();
					
				}
				

				
				/**
				* Default recent post slider parallax RAF loop.
				*
				* @since 7.0
				*/
				function recentPostSliderParallax() {
					
					$('.nectar-recent-posts-slider').each(function () {
						
						var $offset        = parseInt($(this).find('.flickity-slider').position().left),
						$slides            = $(this).find('.nectar-recent-post-slide'),
						$slideLength       = $slides.length,
						$slideWidth        = $slides.width(),
						$lastChildIndex    = $(this).find('.nectar-recent-post-slide:last-child').index(),
						$slideFirstChildBG =	$(this).find('.nectar-recent-post-slide:first-child .nectar-recent-post-bg'),
						$slideLastChildBG  = $(this).find('.nectar-recent-post-slide:last-child .nectar-recent-post-bg');
						
						// First going to last
						if ($offset >= -3) {
							$slideLastChildBG.css('margin-left', parseInt(Math.ceil($slideWidth / 3.5)) + 'px');
						} else {
							$slideLastChildBG.css('margin-left', '-' + parseInt(Math.ceil($slideWidth / 3.5 * $lastChildIndex)) + 'px');
						}
						
						// Last going to first
						if (Math.abs($offset) >= ($slideLength - 1) * $slideWidth) {
							$slideFirstChildBG.css('margin-left', '-' + parseInt(Math.ceil(($slideWidth / 3.5) * $slideLength)) + 'px');
						} else {
							$slideFirstChildBG.css('margin-left', '0px');
						}
						
						$(this)
							.find('.nectar-recent-post-bg')
							.css('transform', 'translateX(' + Math.ceil($(this).find('.flickity-slider').position().left / -3.5) + 'px)');
						
					});
					
					requestAnimationFrame(recentPostSliderParallax);
					
				}
				
				/**
				* Default recent post slider margin calculations.
				*
				* @since 7.0
				*/
				function recentPostSliderParallaxMargins() {
					
					$('.nectar-recent-posts-slider').each(function () {
						
						var $slideWidth = $(this).find('.nectar-recent-post-slide').width();
						
						$(this).find('.nectar-recent-post-slide').each(function (i) {
							$(this).find('.nectar-recent-post-bg').css('margin-left', '-' + parseInt(Math.ceil($slideWidth / 3.5) * i) + 'px');
						});
						
					});
					
				}
				
				
				
				/**
				* Initialize all recent post elements.
				*
				* @since 7.0
				*/
				function recentPostsInit() {
					
					// Start flickity based sliders.
					recentPostsFlickityInit();
					
					
					// Classic enhanced specific 
					$('.blog-recent[data-style="classic_enhanced_alt"] .inner-wrap').each(function () {
						$(this).find('.post-featured-img').each(function () {
							var $src = $(this).find('img').attr('src');
							$(this).css('background-image', 'url(' + $src + ')');
						});
					});
					
					$('.blog-recent[data-style="classic_enhanced"]').each(function () {
						if ($(this).find('.inner-wrap.has-post-thumbnail').length == 0) {
							$(this).addClass('no-thumbs');
						}
					});
					
					// Regular recent posts slider.
					if (!nectarDOMInfo.usingMobileBrowser) {
						if ($('.nectar-recent-posts-slider').length > 0 && !nectarDOMInfo.usingFrontEndEditor) {
							window.requestAnimationFrame(recentPostSliderParallax);
						}
					}
					
					if (!nectarDOMInfo.usingMobileBrowser && !nectarDOMInfo.usingFrontEndEditor) {
						recentPostSliderParallaxMargins();
					}
					
				}
				
				

				
				/**
				* Parallax on mousemove effect
				*
				* @since 10.5
				*/
				function parallaxItemHoverEffect() {
					
					//change sizer pos
					$('.style-5').each(function () {
						$(this)
							.find('.sizer')
							.insertBefore($(this).find('.parallaxImg'));
					});
					
					// Set parent zindex
					$('.style-5')
						.parents('.wpb_row')
						.css('z-index', '100');
					
					var d         = document,
					bd            = d.getElementsByTagName('body')[0],
					win           = window,
					imgs          = d.querySelectorAll('.parallaxImg'),
					totalImgs     = imgs.length,
					supportsTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints;
					
					if (totalImgs <= 0) {
						return;
					}
					
					// Build HTML
					for (var l = 0; l < totalImgs; l++) {
						
						var thisImg = imgs[l],
						layerElems = thisImg.querySelectorAll('.parallaxImg-layer'),
						totalLayerElems = layerElems.length;
						
						if (totalLayerElems <= 0) {
							continue;
						}
						
						while (thisImg.firstChild) {
							thisImg.removeChild(thisImg.firstChild);
						}
						
						var lastMove = 0;
						
						//throttle performance for all browser other than chrome
						var eventThrottle = $('html').hasClass('cssreflections') ? 1 : 80;
						if (eventThrottle == 80) {
							$body.addClass('cssreflections');
						}
						
						var containerHTML = d.createElement('div'),
						shineHTML = d.createElement('div'),
						shadowHTML = d.createElement('div'),
						layersHTML = d.createElement('div'),
						layers = [];
						
						thisImg.id = 'parallaxImg__' + l;
						containerHTML.className = 'parallaxImg-container';
						shadowHTML.className = 'parallaxImg-shadow';
						layersHTML.className = 'parallaxImg-layers';
						
						for (var i = 0; i < totalLayerElems; i++) {
							
							var layer = d.createElement('div'),
							layerInner = d.createElement('div'),
							imgSrc = layerElems[i].getAttribute('data-img');
							
							$(layer).html($(layerElems[i]).html());
							layer.className = 'parallaxImg-rendered-layer';
							layer.setAttribute('data-layer', i);
							
							if (i == 0 && $(thisImg).parents('.wpb_gallery').length == 0) {
								layerInner.className = 'bg-img';
								layerInner.style.backgroundImage = 'url(' + imgSrc + ')';
								layer.appendChild(layerInner);
							}
							layersHTML.appendChild(layer);
							
							layers.push(layer);
						}
						
						containerHTML.appendChild(layersHTML);
						thisImg.appendChild(containerHTML);
						$(thisImg).wrap('<div class="parallaxImg-wrap" />');
						if (!(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)) {
							$(thisImg).parent().append(shadowHTML);
						}
						
						if (supportsTouch && $('body.using-mobile-browser').length > 0) {
							// Stop processing.
						} else {
							(function (_thisImg, _layers, _totalLayers, _shine) {
								$(thisImg).parents('.style-5').on('mousemove', function (e) {
									
									var parentEl = $(this);
									var now = Date.now();
									if (now > lastMove + eventThrottle) {
										lastMove = now;
										window.requestAnimationFrame(function () {
											processMovement(e, false, _thisImg, _layers, _totalLayers, _shine, parentEl);
										});
									}
									
									
								});
								$(thisImg).parents('.style-5').on('mouseenter', function (e) {
									processEnter(e, _thisImg, _layers, _totalLayers, _shine);
								});
								$(thisImg).parents('.style-5').on('mouseleave', function (e) {
									processExit(e, _thisImg, _layers, _totalLayers, _shine);
								});
							})(thisImg, layers, totalLayerElems, shineHTML);
						}
						
						// Set the depths
						(function (_thisImg, _layers, _totalLayers, _shine) {
							depths(false, _thisImg, _layers, _totalLayers, _shine);
							window.addEventListener('resize', function () {
								depths(false, _thisImg, _layers, _totalLayers, _shine);
							});
						})(thisImg, layers, totalLayerElems, shineHTML);
					}
					
					function processMovement(e, touchEnabled, elem, layers, totalLayers, shine, parentEl) {
						
						// Stop raf if exit already called
						if (!$(elem.firstChild).hasClass('over')) {
							processExit(e, elem, layers, totalLayers, shine);
							return false
						}
						
						// Set up multipliers
						var yMult = 0.03;
						var xMult = 0.063;
						
						if ($(elem).parents('.col.wide').length > 0) {
							yMult = 0.03;
							xMult = 0.063;
						} else if ($(elem).parents('.col.regular').length > 0 || $(elem).parents('.wpb_gallery').length > 0) {
							yMult = 0.045;
							xMult = 0.045;
						} else if ($(elem).parents('.col.tall').length > 0) {
							yMult = 0.05;
							xMult = 0.015;
						} else if ($(elem).parents('.col.wide_tall').length > 0) {
							yMult = 0.04;
							xMult = 0.04;
						} else if (parentEl.hasClass('nectar-fancy-box')) {
							yMult = 0.045;
							xMult = 0.022;
						} else {
							yMult = 0.045;
							xMult = 0.075;
						}
						
						var bdst = nectarDOMInfo.scrollTop,
						bdsl = bd.scrollLeft,
						pageX = (touchEnabled) ? e.touches[0].pageX : e.pageX,
						pageY = (touchEnabled) ? e.touches[0].pageY : e.pageY,
						offsets = elem.getBoundingClientRect(),
						w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth, 
						h = elem.clientHeight || elem.offsetHeight || elem.scrollHeight, 
						wMultiple = 320 / w,
						offsetX = 0.52 - (pageX - offsets.left - bdsl) / w, 
						offsetY = 0.52 - (pageY - offsets.top - bdst) / h, 
						dy = (pageY - offsets.top - bdst) - h / 2, 
						dx = (pageX - offsets.left - bdsl) - w / 2, 
						yRotate = (offsetX - dx) * (yMult * wMultiple), 
						xRotate = (dy - offsetY) * (xMult * wMultiple); 
						
						var imgCSS;
						
						if ($(elem).parents('.wpb_gallery').length > 0) {
							imgCSS = ' perspective(' + w * 3 + 'px) rotateX(' + -xRotate * 1.9 + 'deg) rotateY(' + -yRotate * 1.3 + 'deg)'; 
						} else {
							
							if ($(elem).parents('.wide_tall').length == 0 && 
							$(elem).parents('.wide').length == 0 && 
							$(elem).parents('.tall').length == 0) {
								var $scaleAmount = (parentEl.hasClass('nectar-fancy-box')) ? '1.06' : '1.03';
								var $offsetAmount = (parentEl.hasClass('nectar-fancy-box')) ? '-2' : '-10';
								imgCSS = ' perspective(' + w * 3 + 'px) rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)  translateY(' + offsetY * $offsetAmount + 'px) translateX(' + offsetX * $offsetAmount + 'px) scale(' + $scaleAmount + ')'; 
							} else {
								imgCSS = ' perspective(' + w * 3 + 'px) rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)  translateY(' + offsetY * -10 + 'px) translateX(' + offsetX * -10 + 'px) scale(1.013)'; 
							}
							
						}
						
						
						// Container transform
						$(elem).find('.parallaxImg-container').css('transform', imgCSS);
						
						if (!(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)) {
							$(elem).parents('.parallaxImg-wrap').find('.parallaxImg-shadow').css('transform', imgCSS);
						}
						
						
					}
					
					
					function processEnter(e, elem) {
						
						elem.firstChild.className += ' over';
						elem.className += ' over';
						
						$(elem).addClass('transition');
						
						if ($(elem).parents('.wpb_gallery').length > 0) {
							setTimeout(function () {
								$(elem).removeClass('transition');
							}, 450);
						} else {
							setTimeout(function () {
								$(elem).removeClass('transition');
							}, 200);
						}
						
					}
					
					
					function processExit(e, elem) {
						
						var w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth;
						var container = elem.firstChild;
						
						container.className = container.className.replace(' over', '');
						elem.className = elem.className.replace(' over', '');
						$(container).css('transform', 'perspective(' + w * 3 + 'px) rotateX(0deg) rotateY(0deg) translateZ(0)');
						$(elem).parents('.parallaxImg-wrap').find('.parallaxImg-shadow').css('transform', 'perspective(' + w * 3 + 'px) rotateX(0deg) rotateY(0deg) translateZ(0)');
						
						$(elem).addClass('transition');
						setTimeout(function () {
							$(elem).removeClass('transition');
						}, 200);
						
					}
					
					
					function depths(touchEnabled, elem, layers, totalLayers) {
						
						var w = elem.clientWidth || elem.offsetWidth || elem.scrollWidth;
						var container = elem.firstChild;
						
						// Set z
						for (var ly = 0; ly < totalLayers; ly++) {
							if (ly == 0) {
								$(layers[ly]).css('transform', 'translateZ(0px)');
							}
							else {
								$(layers[ly]).css('transform', 'translateZ(' + (w * 3) / 27 * (ly * 1.1) + 'px) ');
							}
							
						}
						
						totalLayers = totalLayers + 3;
						
						// Set perspective from beginning
						$(container).css('transform', 'perspective(' + w * 3 + 'px)');
						
					}
					
				}
				
				
				


				/**
				* Salient slider rotation 
				*
				* @since 10.5
				*/
				function nectarCustomSliderRotate(slider) {
					
					if ($('body.vc_editor').length > 0) {
						return;
					}
					
					var $controlSelector = (slider.find('.project-slides').length > 0) ? '.dot-nav > span' : '.controls > li',
					$controlSelectorInd  = (slider.find('.project-slides').length > 0) ? 'span' : ' li',
					$slideLength         = slider.find($controlSelector).length,
					$currentSlide        = slider.find($controlSelector + '.active').index();
					
					if ($currentSlide + 1 == $slideLength) {
						slider.find($controlSelector + ':first-child').trigger('click');
					} else {
						slider.find($controlSelector + '.active').next($controlSelectorInd).trigger('click');
					}
				}
				
				
				/**
				* Salient slider rotation reset
				*
				* @since 10.5
				*/
				function nectarCustomSliderResetRotate(slider, index) {
					clearInterval($nectarCustomSliderRotate[index].autorotate);
					
					// Reinit autorotate
					if (slider.attr('data-autorotate').length > 0) {
						var slide_interval = (parseInt(slider.attr('data-autorotate')) < 100) ? 4000 : parseInt(slider.attr('data-autorotate'));
						$nectarCustomSliderRotate[index].autorotate = setInterval(function () {
							nectarCustomSliderRotate(slider)
						}, slide_interval);
					}
				}
				
				
				
				/**
				* Fullscreen recent project slider
				*
				* @since 10.5
				*/
				function fsProjectSliderInit() {
					
					$fsProjectSliderArr = [];
					
					if (typeof SalientRecentProjectsFullScreen === 'undefined') {
						return;
					}
					
					$('.nectar_fullscreen_zoom_recent_projects').each(function (i) {
						$fsProjectSliderArr[i] = new SalientRecentProjectsFullScreen($(this));
					});
					
				}
				
				

				
				
				/**
				* Portfolio single template sticky sidebar
				*
				* @since 6.0
				*/
				function portfolioSidebarFollow() {
					
					var sidebarFollow = $('.single-portfolio #sidebar').attr('data-follow-on-scroll');
					
					if ($('body.single-portfolio').length == 0 || $('#sidebar[data-follow-on-scroll]').length == 0) {
						return;
					}
					
					sidebarFollow = $('.single-portfolio #sidebar').attr('data-follow-on-scroll');
					
					if (sidebarFollow == 1 && 
						!$body.hasClass('mobile') && 
						parseInt($('#sidebar').height()) + 50 <= parseInt($('.post-area').height())) {
						
						//padding from top of screen
						var $ssExtraTopSpace = 50;
						
						if ($('#header-outer[data-remove-fixed="0"]').length > 0 && 
						$('body[data-hhun="1"]').length == 0) {
							
							$ssExtraTopSpace += $headerOuterEl.outerHeight();
							
							// Resize effect
							if ($('#header-outer[data-shrink-num][data-header-resize="1"]').length > 0) {
								var headerPadding2 = parseInt($headerOuterEl.attr('data-padding')) - parseInt($headerOuterEl.attr('data-padding')) / 1.8;
								$ssExtraTopSpace -= logoShrinkNum;
								$ssExtraTopSpace -= headerPadding2;
							}
							
							// Condense
							if ($('body.mobile').length == 0 && $('#header-outer[data-condense="true"]').length > 0) {
								
								var $headerSpan9 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');
								
								$ssExtraTopSpace = 50;
								$ssExtraTopSpace += $headerOuterEl.height() - (parseInt($headerSpan9.position().top) - parseInt($('#header-outer #logo').css('margin-top'))) - parseInt(nectarDOMInfo.secondaryHeaderHeight);
							}

						}
						
						if ($wpAdminBar.length > 0) {
							$ssExtraTopSpace += $wpAdminBar.outerHeight();
						}
						

						$('.single-portfolio #sidebar').theiaStickySidebar({
							additionalMarginTop: $ssExtraTopSpace,
							updateSidebarHeight: false
						});
						
						
					} 
					
				} 
				
				
				

				
				/**
				* Infinite scroll pagination
				*
				* @since 6.0
				*/
				function infiniteScrollInit() {
					
					if ($('.infinite_scroll').length > 0) {
						
						// Portfolio
						$('.portfolio-items.infinite_scroll').infinitescroll({
							navSelector: "div#pagination",
							nextSelector: "div#pagination a:first",
							itemSelector: ".portfolio-items.infinite_scroll .element",
							finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
							msgText: " ",
						}, function (newElements) {
							
							
							var $container 	= $('.portfolio-items.infinite_scroll:not(.carousel)'),
							$newElems 			= $(newElements).css('opacity', 0);
							
							// Ensure that images load before adding to masonry layout
							$newElems.imagesLoaded(function () {
								
								$(newElements).css('opacity', 1);
								
								$container.isotope('appended', $(newElements));
								
								$(newElements).find('.work-item').addClass('ajax-loaded');
								$(newElements).addClass('ajax-loaded');
								
								// Show elems now they're ready
								$(newElements).find('.work-meta, .nectar-love-wrap').css({
									'opacity': 1
								});
								
								// Keep current filtering
								if ($('.portfolio-filters-inline').length > 0 || $('.portfolio-filters').length > 0) {
									
									var selector;
									
									if ($('.portfolio-filters-inline').length > 0) {
										selector = $('.portfolio-filters-inline a.active').attr('data-filter');
									} else {
										selector = $('.portfolio-filters a.active').attr('data-filter');
									}
									
									$('.portfolio-filters-inline a.active').attr('data-filter');
									$container.isotope({
										filter: selector
									});
								}
								
								// Set width
								for (var i = 0; i < $portfolio_containers.length; i++) {
									$portfolio_containers[i].reLayout();
								}
								
								if ($(newElements).find('.work-item.style-5').length > 0) {
									parallaxItemHoverEffect();
								}
								
								if ($(newElements).find('.inner-wrap').attr('data-animation') == 'none') {
									$('.portfolio-items .col .inner-wrap').removeClass('animated');
								} else {
									
									for (var i = 0; i < $portfolio_containers.length; i++) {
										$portfolio_containers[i].masonryZindex();
										$portfolio_containers[i].portfolioAccentColor();
									}
									
									$(newElements).each(function () {
										
										var $portfolioOffsetPos = ($('#nectar_fullscreen_rows').length > 0) ? '200%' : '90%';
										
										// Not already visible
										var $that = $(this);
										var waypoint = new Waypoint({
											element: $that,
											handler: function () {
												
												var $portfolioAnimationDelay = ($that.is('[data-masonry-type="photography"].masonry-items')) ? 85 : 115;
												
												setTimeout(function () {
													$that.addClass("animated-in");
												}, $portfolioAnimationDelay * $that.attr('data-delay-amount'));
												
												
												waypoint.destroy();
											},
											offset: $portfolioOffsetPos
											
										}); 
										
										
									}); 
								}
								
								
								// Lightbox reinit.
								$('.portfolio-items').each(function () {
									var $unique_id = uniqueIdGenerate();
									$(this).find('a[rel^="prettyPhoto"], a.pretty_photo').attr('rel', 'prettyPhoto[' + $unique_id + '_gal]').removeClass('pretty_photo');
								});
								
			
								$('.portfolio-items').each(function () {
									var $unique_id = uniqueIdGenerate();
									$(this).find('a[data-fancybox^="group_"]').attr('data-fancybox', 'group_' + $unique_id);
								});
								
								lightBoxInit();
								
								setTimeout(function () {
									
									for (var i = 0; i < $portfolio_containers.length; i++) {
										$portfolio_containers[i].masonryZindex();
										$portfolio_containers[i].reLayout();
										$portfolio_containers[i].isotopeCatSelection();
									}
									$(newElements).removeClass('ajax-loaded');
								}, 700);
								
								parallaxRowsBGCals();
								
							});
							
							
						});
						
						// Blog
						$('.post-area.infinite_scroll .posts-container').infinitescroll({
							navSelector: "div#pagination",
							nextSelector: "div#pagination a:first",
							itemSelector: ".post-area .posts-container .post",
							finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
							msgText: " "
						}, function (newElements) {
							
							// Only trigger recalc of waypoints and elements if needed
							if ($('.masonry.classic').length > 0 || $('.post-area:not(.masonry):not(.featured_img_left)').length > 0 || $('.post-area.standard-minimal').length > 0) {
								
								// Gallery
								flexsliderInit();
								
								
								// Media players
								if ($().mediaelementplayer) {
									$(newElements).find('.wp-audio-shortcode, .wp-video-shortcode').mediaelementplayer();
								}
								
								
								// Lightbox
								lightBoxInit();
								
								// Carousels
								if ($('.carousel').length > 0) {
									standardCarouselInit();
									clientsCarouselInit();
								}
								
								// Waypoints
								waypoints();
								
								// Testimonial slider
								$('.testimonial_slider').animate({
									'opacity': '1'
								}, 800);
								nectarTestimonialSliders();
								nectarTestimonialSlidersEvents();

								setTimeout(function () {
									responsiveVideoIframesInit();
									responsiveVideoIframes();
									$window.trigger('resize');
								}, 500);
								
								
								parallaxRowsBGCals();
								
								$window.trigger('resize');
								
							} // Non meta overlaid style 
							else {
								parallaxRowsBGCals();
								
								$window.trigger('resize');
							}
							
							// Trigger Masonry as a callback
							var $container = $('.posts-container');
							if ($container.parent().hasClass('masonry')) {
								
								$(newElements).addClass('masonry-blog-item');
								
							
							} //if masonry
							
							
							// Loading effect   
							
							//// hide new items while they are loading
							var $newElems = $(newElements);
							//// ensure that images load before adding to masonry layout
							
							if ($newElems.find('img').length == 0) {
								$newElems = $('body');
							}
							
							$newElems.imagesLoaded(function () {
								
								if ($container.parent().hasClass('masonry') && 
									!$container.parent().hasClass('auto_meta_overlaid_spaced')) {
									$container.isotope('appended', $(newElements));
								}
								
								for (var i = 0; i < $nectarMasonryBlogs.length; i++) {
									$nectarMasonryBlogs[i].flickityBlogInit();
								}
								
								$(newElements).addClass('ajax-loaded');
								// Show elems now they're ready
								
								
								// Classic enhanced specific 
								if ($container.parent().hasClass('classic_enhanced')) {
									$container.find('.large_featured.has-post-thumbnail.ajax-loaded .post-featured-img, .wide_tall.has-post-thumbnail.ajax-loaded .post-featured-img').each(function () {
										var $src = $(this).find('img').attr('src');
										$(this).css('background-image', 'url(' + $src + ')');
									});
									
									$container.find('.large_featured.ajax-loaded .nectar-flickity, .wide_tall.ajax-loaded .nectar-flickity').each(function () {
										
										$(this).find('.cell').each(function () {
											var $src = $(this).find('img').attr('src');
											$(this).css('background-image', 'url(' + $src + ')');
										});
										
									});
								}
								
								
								if ($(newElements).parents('.posts-container').attr('data-animation') == 'none') {
									$(newElements).find('.inner-wrap').removeClass('animated');
								} else {
									
									for (var i = 0; i < $nectarMasonryBlogs.length; i++) {
										$nectarMasonryBlogs[i].blogMasonryZindex();
									}
									
									$(newElements).each(function () {
										
										var $that = $(this);
										var waypoint = new Waypoint({
											
											element: $that,
											handler: function () {
												
												setTimeout(function () {
													$that.addClass("animated-in");
												}, 80 * $that.attr('data-delay-amount'));
												
												waypoint.destroy();
											},
											offset: '90%'
											
										});
										
										
									}); 
								}
								
								setTimeout(function () {
									$(newElements).removeClass('ajax-loaded');
								}, 700);
								
								
							});
							

						});
						
					}
					
				}
				
				
				
				
				

				/**
				* Scroll to top scroll bind.
				*
				* @since 2.0
				*/
				function toTopBind() {
					
					if ($('#to-top').length > 0 && $window.width() > 1020 || 
					$('#to-top').length > 0 && $('#to-top.mobile-enabled').length > 0) {
						
						if (nectarDOMInfo.scrollTop > 350) {
							$window.on('scroll', hideToTop);
						} else {
							$window.on('scroll', showToTop);
						}
					}
					
				}

				/**
				* Scroll to top show.
				*
				* @since 2.0
				*/
				function showToTop() {
					
					if (nectarDOMInfo.scrollTop > 350 && !$offCanvasEl.is('.fullscreen.open') ) {
						
						$('#to-top').stop().transition({
							'bottom': '17px'
						}, 350, 'easeInOutCubic');
						
						$window.off('scroll', showToTop);
						$window.on('scroll', hideToTop);
					}
					
				}
				
				
				/**
				* Scroll to top hide.
				*
				* @since 2.0
				*/
				function hideToTop() {
					
					if (nectarDOMInfo.scrollTop < 350 || $offCanvasEl.is('.fullscreen.open') ) {
						
						var $animationTiming = ($('#slide-out-widget-area.fullscreen.open').length > 0) ? 1150 : 350;
						
						$('#to-top').stop().transition({
							'bottom': '-30px'
						}, $animationTiming, 'easeInOutQuint');
						
						$window.off('scroll', hideToTop);
						$window.on('scroll', showToTop);
						
					}
				}
				
				
				/**
				* Scroll to top initialization.
				*
				* @since 10.5
				*/
				function scrollToTopInit() {

					// Show/hide based on scroll pos
					if ($('.nectar-social.fixed').length == 0) {
						toTopBind();
					} 
					
					
					// Rounded style
					if ($('body[data-button-style*="rounded"]').length > 0) {
						var $clone = $('#to-top .fa-angle-up').clone();
						$clone.addClass('top-icon');
						$('#to-top').prepend($clone);
					}
					
					// Scroll up click event
					$body.on('click', '#to-top, a[href="#top"]', function () {
						$('body,html').stop().animate({
							scrollTop: 0
						}, 800, 'easeOutQuad', function () {
							if ($('.nectar-box-roll').length > 0) {
								$body.trigger('mousewheel', [1, 0, 0]);
							}
						});
						return false;
					});
					
				}
				
				
				
				
				
				
				
				
				
				/**
				* Scrollspy plugin initialization.
				*
				* @since 5.0
				*/
				function scrollSpyInit() {
					
					var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $window.width() > 1000) ? 0 : $headerOuterEl.outerHeight();
					
					if ($('.page-template-template-no-header-footer').length > 0 || $('.page-template-template-no-header').length > 0) {
						$headerNavSpace = 0;
					}
					
					//prevent jump to rop on empty items
					$('header#top .sf-menu li a[href="#"]').on('click', function (e) {
						e.preventDefault();
					});
					
					if ($('#nectar_fullscreen_rows').length == 0 || $nectarFullPage.$usingFullScreenRows == false) {
						
						$('a.nectar-next-section').each(function () {
							
							if ($(this).parents('.wpb_row:not(.inner_row)').length > 0) {
								
								var $parentRow = $(this).parents('.wpb_row:not(.inner_row)'),
								$parentRowIndex = $(this).parents('.wpb_row:not(.inner_row)').index();
								
								if ($parentRow.parent().find('> .wpb_row[id]:eq(' + ($parentRowIndex + 1) + ')').length > 0) {
									var $nextRowID = $parentRow.parent().find('> .wpb_row:eq(' + ($parentRowIndex + 1) + ')').attr('id');
									$(this).attr('href', '#' + $nextRowID);
								}
								
							}
							
						});
					} 
					
					else if ($().fullpage) {
						$('a.nectar-next-section').on('click', function () {
							$.fn.fullpage.moveSectionDown();
							return false;
						});
					}
					
					
					// Links in off canvas menu.
					if ($('#slide-out-widget-area .off-canvas-menu-container').length > 0) {
						$('#slide-out-widget-area .off-canvas-menu-container').find("a[href*='" + location.pathname + "']").each(function () {
							
							var $href = $(this).attr('href');
							
							// Regular animated anchors.
							if ($href != '#' && $href.indexOf("#") != -1 && $('div' + $href.substr($href.indexOf("#"))).length > 0) {
								$(this).attr('href', $href.substr($href.indexOf("#")));
								
								$(this).parent()
									.removeClass('current_page_item')
									.removeClass('current-menu-item');
							}
							
							// Fullpage is a little different.
							if ($('div[data-fullscreen-anchor-id="' + $href.substr($href.indexOf("#") + 1) + '"]').length > 0) {
								
								$(this).parent()
									.removeClass('current_page_item')
									.removeClass('current-menu-item');
							}
							
						});
					}
					
					// Links in header navigation.
					$("#header-outer").find("a[href*='" + location.pathname + "']").each(function () {
						
						var $href = $(this).attr('href');
						
						// Regular animated anchors
						if ($href.indexOf("#") != -1 && $('div' + $href.substr($href.indexOf("#"))).length > 0) {
							
							$(this).attr('href', $href.substr($href.indexOf("#")));
							$(this).parent()
								.removeClass('current_page_item')
								.removeClass('current-menu-item');
						}
						
						// Fullpage is a little different
						if ($('div[data-fullscreen-anchor-id="' + $href.substr($href.indexOf("#") + 1) + '"]').length > 0) {
							
							$(this).parent()
								.removeClass('current_page_item')
								.removeClass('current-menu-item');
						}
						
					});
					
					// Start scrollspy.
					var $target = ($('.page-submenu[data-sticky="true"]').length == 0) ? '#header-outer nav' : '.page-submenu';
					$body.scrollspy({
						target: $target,
						offset: $headerNavSpace + nectarDOMInfo.adminBarHeight + 40
					});
					
				}
				
				
				
				
				/**
				* Called to scroll to hash link on page load
				*
				* @since 5.0
				*/
				function pageLoadHash() {
					
					var $hash = window.location.hash;

					if( $hash && $hash.length > 0 ) {
						$hash = $hash.replace(/<|>/g,'');
					}

					var $hashSubstrng   = ($hash && $hash.length > 0) ? $hash.substring(1, $hash.length) : 0,
					headerPadding2      = parseInt($headerOuterEl.attr('data-padding')) * 2,
					$hasSlashLength     = 0;
					
					// If the hash has slashes 
					if ($hashSubstrng) {
						$hasSlashLength = $hashSubstrng.split("/");
						$hasSlashLength = $hasSlashLength.length;
					}
					
					if ($hashSubstrng && $hasSlashLength > 1) {
						$hashSubstrng = $hashSubstrng.replace(/\//g, "");
						$hash         = $hash.replace(/\//g, "");
					}
					
					if ($hash && $('.main-content').find($hash).length > 0 || 
					$hash && $('.main-content').find('[data-fullscreen-anchor-id="' + $hashSubstrng + '"]').length > 0) {
						
						var $hashObj    = ($('.main-content').find($hash).length > 0) ? $('.main-content').find($hash) : $('.main-content').find('[data-fullscreen-anchor-id="' + $hashSubstrng + '"]'),
						$headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $window.width() > 1000) ? 0 : $('#header-space').outerHeight();
						
						if ($('.page-template-template-no-header-footer').length > 0 || $('.page-template-template-no-header').length > 0) {
							$headerNavSpace = 0;
						}
						
						var $timeoutVar = 0;
						
						if ($('.nectar-box-roll').length > 0 && $('.container-wrap.bottomBoxOut').length > 0) {
							nectarBoxRoll.boxRoll(null, -1);
							$timeoutVar = 2050;
						}
						
						setTimeout(function () {
							
							var $scrollTopDistance;
							
							if ($('body[data-permanent-transparent="1"]').length == 0) {
								
								if (!$body.hasClass('mobile')) {
									var $resize = ($('#header-outer[data-header-resize="0"]').length > 0) ? 0 : parseInt(logoShrinkNum) + headerPadding2 * 2;
									if ($('#header-outer[data-remove-fixed="1"]').length > 0) {
										$headerNavSpace = 0;
									}
									$scrollTopDistance = $hashObj.offset().top - parseInt($headerNavSpace) + $resize + 3 - nectarDOMInfo.adminBarHeight;
									

									// Condense
									if ($('body.mobile').length == 0 && $('#header-outer[data-condense="true"]').length > 0) {
										
										var $headerSpan9       = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),
										$headerHeightStored    = $headerOuterEl.height(),
										$headerHeightCondensed = $headerHeightStored - (parseInt($headerSpan9.height()) + parseInt($('#header-outer #logo').css('margin-top')));
										
										$scrollTopDistance = $hashObj.offset().top - parseInt($headerNavSpace) + $headerHeightCondensed - nectarDOMInfo.adminBarHeight;
									}

								} else {
									$scrollTopDistance = ($('#header-outer[data-mobile-fixed="1"]').length > 0) ? $hashObj.offset().top + 2 - $headerNavSpace + nectarDOMInfo.adminBarHeight : $hashObj.offset().top - nectarDOMInfo.adminBarHeight + 1;
								}
								
							} else {
								$scrollTopDistance = $hashObj.offset().top - nectarDOMInfo.adminBarHeight + 1;
							}
							
							if ($('body[data-hhun="1"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length == 0) {
								
								// Alter offset 
								if ($('#header-outer.detached').length == 0) {
									$scrollTopDistance = $scrollTopDistance + $headerNavSpace;
								}
							}
							
							var $pageSubMenu = ($('.page-submenu[data-sticky="true"]').length > 0) ? $('.page-submenu').height() : 0;
							var $headerSecondary;
							
							if ($('body.material').length > 0 &&
								$headerSecondaryEl.length > 0 &&
								$('body[data-hhun="1"]').length == 0 &&
								$('#header-outer[data-remove-fixed="1"]').length == 0 &&
								!$body.hasClass('mobile')) {
								
								$headerSecondary = $headerSecondaryEl.height();
								
							} else {
								$headerSecondary = 0;
							}
							
							nectar_scrollToY($scrollTopDistance - $pageSubMenu + $headerSecondary, 700, 'easeInOutQuint');
							
						}, $timeoutVar);
					}
				}
				
				
				/**
				* Initialize page load hash functionality
				*
				* @since 10.5
				*/
				function pageLoadHashInit() {
				
					if ($('body[data-animated-anchors="true"]').length > 0) {
						if ($('.nectar-box-roll').length == 0 && $('#nectar_fullscreen_rows').length == 0) {
							
							// Inside tabs
							if (typeof nectarGetQueryParam['tab'] != 'undefined') {
								setTimeout(function () {
									pageLoadHash();
								}, 800);
							}
							// Regular
							else {
								pageLoadHash();
							}
							
						}
						
						if ($('#nectar_fullscreen_rows[data-mobile-disable="on"]').length > 0 && $('.nectar-box-roll').length == 0 && 
						nectarDOMInfo.usingMobileBrowser) {
							pageLoadHash();
						}
						
					}
					
				}
				
				
				/**
				* Animated anchor link theme option.
				*
				* @since 10.5
				*/
				function animatedAnchorLinks() {
					
					if ($('body[data-animated-anchors="true"]').length > 0 || 
					$('.single-product [data-gallery-style="left_thumb_sticky"]').length > 0) {
						
						var headerPadding2 = headerPadding - headerPadding / 1.8;
						
						setTimeout(scrollSpyInit, 200);
						
						var $animatedScrollingTimeout;
						
						$body.on('click', '#header-outer nav .sf-menu a, #footer-outer .nectar-button, #mobile-menu li a, .container-wrap a:not(.wpb_tabs_nav a):not(.um-woo-view-order):not(.magnific):not([data-fancybox]):not(.woocommerce-tabs .tabs a):not(.slider-prev):not(.slider-next):not(.testimonial-next-prev a), .swiper-slide .button a, #slide-out-widget-area a, #slide-out-widget-area .inner div a', function (e) {
						
							var $hash = $(this).prop("hash");
							
							$body.addClass('animated-scrolling');
							
							clearTimeout($animatedScrollingTimeout);
							
							$animatedScrollingTimeout = setTimeout(function () {
								$body.removeClass('animated-scrolling');
							}, 850);
							
							var $headerNavSpace = ($('body[data-header-format="left-header"]').length > 0 && $window.width() > 1000) ? 0 : $('#header-space').outerHeight();
							
							if ($('.page-template-template-no-header-footer').length > 0 || $('.page-template-template-no-header').length > 0) {
								$headerNavSpace = 0;
							}
							
							if ($hash && $body.find($hash).length > 0 && $hash != '#top' && $hash != '' && $(this).attr('href').indexOf(window.location.href.split("#")[0]) !== -1 || 
							$(this).is('[href^="#"]') && $hash != '' && $body.find($hash).length > 0 && $hash != '#top') {
	
								//update hash
								if (!$(this).hasClass('skip-hash')) {
									if (history.pushState) {
										history.pushState(null, null, $hash);
									} else {
										location.hash = $hash;
									}
								}
								
								if ($(this).parents('ul').length > 0) {
									
									$(this)
										.parents('ul')
										.find('li')
										.removeClass('current-menu-item');
								}
								
								// Side widget area click
								if ($(this).parents('#slide-out-widget-area').length > 0) {
									
									if ($('body.material[data-slide-out-widget-area-style="slide-out-from-right"].material-ocm-open').length > 0) {
										
										$('body > .slide_out_area_close')
											.addClass('non-human-allowed')
											.trigger('click');
											
										// Sroll
										var $clickedLinkStore = $(this);
										
										setTimeout(function () {
											$clickedLinkStore.trigger('click');
										}, 1000);
										
									} else {
										$('#slide-out-widget-area .slide_out_area_close')
											.addClass('non-human-allowed')
											.trigger('click');
									}
									
									setTimeout(function () {
										if ($('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length > 0) {
											$('body > .slide_out_area_close').removeClass('non-human-allowed');
											
										} else {
											$('#slide-out-widget-area .slide_out_area_close').removeClass('non-human-allowed');
										}
									}, 100);
								}
								
								// Mobile menu click
								if ( $(this).parents('#mobile-menu').length > 0 ) {
									$('.slide-out-widget-area-toggle.mobile-icon a')
										.addClass('non-human-allowed')
										.trigger('click');
										
										setTimeout(function () {
												$('.slide-out-widget-area-toggle.mobile-icon a').removeClass('non-human-allowed');
										}, 100);
								}
								
								var $mobileMenuHeight = ($(this).parents('#mobile-menu').length > 0) ? $(this).parents('#mobile-menu').height() : null;
								var $timeoutVar       = 1;
								var $that             = $(this);
								
								if ($('.nectar-box-roll').length > 0 && $('.container-wrap.bottomBoxOut').length > 0) {
									nectarBoxRoll.boxRoll(null, -1);
									$timeoutVar = 2050;
								}
								
								
								setTimeout(function () {
									
									var $scrollTopDistance;
									
									// Scrolling
									if ($('body[data-permanent-transparent="1"]').length == 0) {
										
										if (!$body.hasClass('mobile')) {
											var $resize = ($('#header-outer[data-header-resize="0"]').length > 0) ? 0 : parseInt(logoShrinkNum) + headerPadding2 * 2;
											if ($('#header-outer[data-remove-fixed="1"]').length > 0) {
												$headerNavSpace = 0;
											}
											
											$scrollTopDistance = $($hash).offset().top - $mobileMenuHeight - parseInt($headerNavSpace) + $resize + 3 - nectarDOMInfo.adminBarHeight;
											
											// Condense
											if ($('body.mobile').length == 0 && $('#header-outer[data-condense="true"]').length > 0) {
												
												var $headerSpan9       = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),
												$headerHeightStored    = $headerOuterEl.height(),
												$headerHeightCondensed = $headerHeightStored - (parseInt($headerSpan9.height()) + parseInt($('#header-outer #logo').css('margin-top')));
												$scrollTopDistance     = $($hash).offset().top - parseInt($headerNavSpace) + $headerHeightCondensed - nectarDOMInfo.adminBarHeight;
												
											}
											
											
										} else {
											$scrollTopDistance = ($('#header-outer[data-mobile-fixed="1"]').length > 0) ? $($hash).offset().top + 2 - $headerNavSpace + nectarDOMInfo.adminBarHeight : $($hash).offset().top - $mobileMenuHeight - nectarDOMInfo.adminBarHeight + 1;
										}
										
									} else {
										$scrollTopDistance = $($hash).offset().top - nectarDOMInfo.adminBarHeight + 1;
									}
									
									if ($('body[data-hhun="1"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length == 0) {
										
										// Alter offset 
										if ($('#header-outer.detached').length == 0 || $that.parents('.page-submenu[data-sticky="true"]').length > 0) {
											$scrollTopDistance = $scrollTopDistance + $headerNavSpace;
										}
										
										// Hide top header
										if ($that.parents('.page-submenu[data-sticky="true"]').length > 0) {
											
											$('#header-outer.detached').addClass('invisible');
											$('.page-submenu')
												.addClass('header-not-visible')
												.css('transform', 'translateY(0px)');
												
										}
									}
									
									var $pageSubMenu = ($that.parents('.page-submenu[data-sticky="true"]').length > 0) ? $that.parents('.page-submenu').height() : 0;
									var $headerSecondary;
									
									if ($('body.material').length > 0 &&
										$headerSecondaryEl.length > 0 &&
										$('body[data-hhun="1"]').length == 0 &&
										$('#header-outer[data-remove-fixed="1"]').length == 0 &&
										!$body.hasClass('mobile')) {
										
										$headerSecondary = $headerSecondaryEl.height();
										
									} else {
										
										if($('body[data-hhun="1"]').length > 0 && 
											$headerSecondaryEl.length > 0 &&
											!$body.hasClass('mobile') &&
											$('#header-outer[data-remove-fixed="1"]').length == 0) {
											$headerSecondary = $headerSecondaryEl.height();
										} else {
											$headerSecondary = 0;
										}

									}

	
									nectar_scrollToY($scrollTopDistance - $pageSubMenu + $headerSecondary, 700, 'easeInOutQuint');
									
								}, $timeoutVar);
								
								e.preventDefault();
								
							}
							
							if ($hash == '#top') {
								// Side widget area click
								if ($(this).parents('#slide-out-widget-area').length > 0) {
									$('#slide-out-widget-area .slide_out_area_close').trigger('click');
								}
							}
							
						});
						
						
					}
					
				}
				
				
				
				
				
				
				/**
				* Search results masonry layout.
				*
				* @since 10.0
				*/
				function searchResultMasonry() {
					
					var $searchContainer = $('#search-results'),
					$dividerNum          = ($searchContainer.is('[data-layout="masonry-no-sidebar"]')) ? 4 : 3;
					
					$searchContainer.imagesLoaded(function () {
						
						$searchContainer.isotope({
							itemSelector: '.result',
							layoutMode: 'packery',
							packery: {
								columnWidth: $('#search-results').width() / $dividerNum
							}
						});
						
						$searchContainer
							.find('article')
							.css('opacity', '1');
						
					});
					
					$window.on('resize', function () {
						$searchContainer.isotope({
							layoutMode: 'packery',
							packery: {
								columnWidth: $('#search-results').width() / $dividerNum
							}
						});
					});
					
				}
				
				
				/**
				* Search results masonry layout initialization.
				*
				* @since 10.5
				*/
				function searchResultMasonryInit() {
					if ($('body.search-results').length > 0 && 
					$('#search-results article').length > 0 && 
					$('#search-results[data-layout="list-no-sidebar"]').length == 0) {
						searchResultMasonry();
					}
				}
				


			
				/**
				* Custom colors for portfolio grid elements.
				*
				* @since 10.5
				*/
				function portfolioCustomColoring() {
					
					//portfolio colors
					if ($('.portfolio-items .col .style-3-alt').length > 0 || 
					$('.portfolio-items .col .style-3').length > 0 || 
					$('.portfolio-items .col .style-2').length > 0 || 
					$('.portfolio-items .col .style-5').length > 0) {
						
						var portfolioColorCss = '';
						
						$('.portfolio-items .col').each(function () {
							
							var $titleColor = $(this).attr('data-title-color'),
							$subTitleColor  = $(this).attr('data-subtitle-color');
							
							if ($titleColor.length > 0) {
								portfolioColorCss += '.col[data-title-color="' + $titleColor + '"] .vert-center h3, .portfolio-items[data-ps="6"] .col[data-title-color="' + $titleColor + '"] .work-meta h4 { color: ' + $titleColor + '!important; } ';
								portfolioColorCss += ' .portfolio-items[data-ps="8"] .col[data-title-color="' + $titleColor + '"] .line { background-color: ' + $titleColor + '; }';
								portfolioColorCss += '.portfolio-items[data-ps="8"] .col[data-title-color="' + $titleColor + '"] .next-arrow line { stroke: ' + $titleColor + '; } ';
							}
							if ($subTitleColor.length > 0) {
								portfolioColorCss += '.col[data-subtitle-color="' + $subTitleColor + '"] .vert-center p, .portfolio-items[data-ps="6"] .col[data-title-color="' + $titleColor + '"] .work-meta p { color: ' + $subTitleColor + '; } ';
							}
							
						});
						
						//style
						nectarCreateStyle(portfolioColorCss, 'nectar-portfolio-colors');
						
					}
					
				}
				
				
				
				
				/**
				* Single post pagination/recent post mouse events
				*
				* @since 10.5
				*/
				function postMouseEvents() {
					
					
					$body.on('mouseover', '.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a', function () {
						$(this).parents('.grav-wrap')
							.find('img')
							.addClass('hovered');
					});
					
					$body.on('mouseleave', '.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a', function () {
						$(this).parents('.grav-wrap')
							.find('img')
							.removeClass('hovered');
					});
					
					$body.on('mouseleave', '.container-wrap[data-nav-pos="after_project_2"] #portfolio-nav ul li, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul li', function () {
						$(this).addClass('mouse-leaving');
					});
					
				}
				
				

				
				/**
				* Masonry portfolio initialization.
				*
				* @since 10.5
				*/
				function masonryPortfolioInit() {
					
					$portfolio_containers = [];
					
					$('.portfolio-items:not(.carousel)').each(function (i) {
						
						$(this).attr('instance', i);
						$(this).parent().parent().find('div[class^=portfolio-filters]').attr('instance', i);
						
						if (typeof SalientPortfolio !== 'undefined') {
							$portfolio_containers[i] = new SalientPortfolio($(this), fullWidthContentColumns);
						}
						
					});
					
				}
				
				


				/**
				* Perspective load in styling.
				*
				* @since 8.0
				*/
				function updatePerspectiveOrigin() {
						
						if( nectarDOMInfo.winW > 690 ) {
							$('.posts-container[data-load-animation="perspective"]').css('perspective-origin', '50% ' + (nectarDOMInfo.scrollTop + nectarDOMInfo.winH) + 'px');
						}
						requestAnimationFrame(updatePerspectiveOrigin);
					
				}
				
				
				/**
				* Perspective load in styling.
				*
				* @since 8.0
				*/
				function updatePerspectiveOriginInit() {
					
					if ($('.posts-container[data-load-animation="perspective"]').length > 0) {
						requestAnimationFrame(updatePerspectiveOrigin);
					}
					
				}
				

				
				/**
				* Blog load in animation.
				*
				* @since 3.0
				*/
				function blogLoadIn(post_container) {
					
					if (post_container.attr('data-load-animation') == 'none') {
						
						post_container
							.find('.inner-wrap')
							.removeClass('animated');

					} else {
						
						post_container.find('article').each(function (i) {
							
							// Loaded visible
							if ($(this).visible(true)) {
								
								$(this).delay(110 * i).queue(function (next) {
									$(this).addClass("animated-in");
									next();
								});
								
								
							} else {
								
								// Not already visible
								var $that    = $(this);
								var waypoint = new Waypoint({
									
									element: $that,
									handler: function () {
										
										setTimeout(function () {
											$that.addClass("animated-in");
										}, 80 * $that.attr('data-delay-amount'));
										
										waypoint.destroy();
									},
									offset: '90%'
									
								});
							}
							
						});
						
					}
					
				}
				

				/**
				* Masonry blog initialization.
				*
				* @since 10.5
				*/
				function masonryBlogInit() {
					
					$nectarMasonryBlogs = [];
					
					$('.posts-container').each(function (i) {
						
						if ($(this).parent().hasClass('masonry') && !$(this).parent().hasClass('auto_meta_overlaid_spaced')) {
							
							if (typeof NectarMasonryBlog == 'undefined') {
								return;
							}
							
							$nectarMasonryBlogs[i] = new NectarMasonryBlog($(this), fullWidthSections, blogLoadIn);
							
						} else {
							
							blogLoadIn($(this));
							
						}
						
					});
				}
				

				
				/**
				* Sticky Sidebar initialization.
				*
				* @since 10.5
				*/
				function stickySidebarInit() {
					
					if (!$().theiaStickySidebar) {
						return;
					}
					
					$('#sidebar[data-nectar-ss="true"], #sidebar[data-nectar-ss="1"]').each(function () {
						
						// Padding from top of screen
						var $ssExtraTopSpace = 50;
						
						if ($('#header-outer[data-remove-fixed="0"]').length > 0 && 
						$('body[data-hhun="1"]').length == 0 && 
						$('#header-outer[data-format="left-header"]').length == 0) {
							
							$ssExtraTopSpace += $headerOuterEl.outerHeight();
							
							// Resize effect
							if ($('#header-outer[data-shrink-num][data-header-resize="1"]').length > 0) {
								var headerPadding2 = parseInt($headerOuterEl.attr('data-padding')) - parseInt($headerOuterEl.attr('data-padding')) / 1.8;
								$ssExtraTopSpace -= logoShrinkNum;
								$ssExtraTopSpace -= headerPadding2;
							}
							
							// Condense
							if ($('body.mobile').length == 0 && $('#header-outer[data-condense="true"]').length > 0) {
								
								var $headerSpan9 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');
								$ssExtraTopSpace = 50;
								$ssExtraTopSpace += $headerOuterEl.height() - (parseInt($headerSpan9.position().top) - parseInt($('#header-outer #logo').css('margin-top'))) - parseInt(nectarDOMInfo.secondaryHeaderHeight);
							}

						}
						
						if ($wpAdminBar.length > 0) {
							$ssExtraTopSpace += $wpAdminBar.outerHeight();
						}
						

						if ($(this).parents('.wpb_widgetised_column').length > 0) {
							
							if ($('body.vc_editor').length > 0) {
								// Skip processing.
							} else {
								$(this).parents('.wpb_column').theiaStickySidebar({
									additionalMarginTop: $ssExtraTopSpace,
									updateSidebarHeight: false
								});
							}
							
						} else {
							$(this).theiaStickySidebar({
								additionalMarginTop: $ssExtraTopSpace,
								updateSidebarHeight: false
							});
						}
						
					});
				}
				

				
				
				
				/**
				* Section down arrow animated link
				*
				* @since 10.5
				*/
				function sectionDownArrowEvent() {
					
					var headerPadding2 = headerPadding - headerPadding / 1.8;
					
					$body.on('click', '.section-down-arrow', function () {
						
						if ($(this).parents('.nectar-box-roll').length > 0) {
							return false;
						}
						
						var $currentSection = $(this).parents('#page-header-bg'),
						$topDistance        = $currentSection.height(),
						$offset             = ($currentSection.parents('.first-section').length == 0 || $('body[data-transparent-header="false"]').length > 0) ? $currentSection.offset().top : 0,
						$bodyBorderSize     = ($bodyBorderTop.length > 0 && $window.width() > 1000) ? $bodyBorderTop.height() : 0,
						$headerNavSpace     = ($('body[data-header-format="left-header"]').length > 0) ? 0 : $('#header-space').height(),
						$materialSecondary  = 0;
						
						if ($('body.material').length > 0 && $headerSecondaryEl.length > 0) {
							$materialSecondary = $headerSecondaryEl.height();
						}
						
						if ($('body[data-permanent-transparent="1"]').length == 0) {
							
							// Regular
							if (!$body.hasClass('mobile')) {
								
								if ($('body[data-hhun="1"]').length > 0 && $('#header-outer[data-remove-fixed="1"]').length == 0) {
									$('body,html').stop().animate({
										scrollTop: parseInt($topDistance) + $offset + 2 - $bodyBorderSize * 2
									}, 1000, 'easeInOutCubic');
								} else {
									
									var $resize = ($('#header-outer[data-header-resize="0"]').length > 0) ? 0 : parseInt(logoShrinkNum) + headerPadding2 * 2;
									if ($('#header-outer[data-remove-fixed="1"]').length > 0) {
										$headerNavSpace = 0;
										$offset = 0;
									}
									
									// Condense
									if ($('body.mobile').length == 0 && $('#header-outer[data-condense="true"]').length > 0) {
										var $headerSpan9 = $('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');
										$headerNavSpace = $headerOuterEl.height() - (parseInt($headerSpan9.position().top) - parseInt($('#header-outer #logo').css('margin-top'))) - parseInt(nectarDOMInfo.secondaryHeaderHeight);
									}
									
									$('body,html').stop().animate({
										scrollTop: parseInt($topDistance - $headerNavSpace) + $resize + 3 + $offset + $materialSecondary
									}, 1000, 'easeInOutCubic');
									
								}
								
							} else {
								
								var $scrollPos;
								
								if($('#header-outer[data-mobile-fixed="1"]').length > 0) {
									$scrollPos = parseInt($topDistance) - $headerNavSpace + parseInt($currentSection.offset().top) + 2;
								} else {
									$scrollPos = parseInt($topDistance) + parseInt($currentSection.offset().top) + 2;
								}
								
								$('body,html').stop().animate({
									scrollTop: $scrollPos - $bodyBorderSize * 2
								}, 1000, 'easeInOutCubic');
							}
							
						} else {
							// Permanent transparent
							$('body,html').stop().animate({
								scrollTop: parseInt($topDistance) + parseInt($currentSection.offset().top) + 2 - $bodyBorderSize * 2
							}, 1000, 'easeInOutCubic');
						}
						return false;
					});
					
				}
				
				
				

				
				/**
				* Displace filter column/row BG effect - fullpage
				*
				* @since 10.5
				*/
				function nectarLiquidBGFP() {
					
					$('.nectar-liquid-bg').removeClass('animated-in');
					
					for (var k = 0; k < $liquidBG_EL.length; k++) {
						
						if ($liquidBG_EL[k].animationType == 'displace-filter-fade' && $($liquidBG_EL[k].canvasContainer).parents('.fp-section.active').length > 0) {
							
							//add bg to container
							if ($($liquidBG_EL[k].canvasContainer).find('.image-added-to-stage').length == 0) {
								$liquidBG_EL[k].imgContainer.addChild($liquidBG_EL[k].bg);
							}
							
							$($liquidBG_EL[k].canvasContainer)
								.find('.nectar-liquid-bg')
								.addClass('image-added-to-stage');
							
							$liquidBG_EL[k].animateProps($liquidBG_EL[k]);
							
						}
					}
				}
				
				
				/**
				* Page Full Screen Rows
				*
				* @since 10.5
				*/
				function nectarFullPageInit() {
					
					if ($('#nectar_fullscreen_rows').length > 0 && $().fullpage) {
						
						$fullscreenSelector = (window.vc_iframe) ? '.vc_element.vc_vc_row.active ' : '.wpb_row.active ';
						
						$nectarFullPage = new NectarFullScreenRows(waypoints, $mouseParallaxScenes, nectarLiquidBGFP, nectarDOMInfo, responsiveTooltips, $standAnimatedColTimeout, $svgIcons);
						
					}
					
				}
				
				

				
				/**
				* Cross browser adjustments.
				*
				* @since 1.0
				*/
				function crossBrowserAdjust() {
					
					// Add specific class if on device for better tablet tracking.
					if (nectarDOMInfo.usingMobileBrowser) {
						$body.addClass('using-mobile-browser');
					}
					
					// Add class for old IE.
					var ua = window.navigator.userAgent;
					var msie = ua.indexOf("Edge/");
					if (msie > 0) {
						$body.addClass('msie');
					}
					
					// For users updating to 8 with a custom, old header template file
					if ($('html.js').length == 0) {
						$('html').removeClass('no-js').addClass('js');
					}
					
					//remove br's from code tag
					$('code').find('br').remove();
					
					// Contact form 7.
					$('.wpcf7-form p:has(input[type=submit])').css('padding-bottom', '0px');
					
					$('.full-width-content .wpcf7-submit').on('click', function () {
						setTimeout(function () {
							fullWidthContentColumns();
						}, 1000);
						setTimeout(function () {
							fullWidthContentColumns();
						}, 2000);
					});
					
					// Gravity form inside fw content row
					$('.gform_body').on('click', function () {
						setTimeout(function () {
							fullWidthContentColumns();
						}, 200);
					});
					
					// Popup Maker.
					$('.pum.pum-theme-salient-page-builder-optimized button.pum-close').wrapInner('<span />');
					
					// pum inside fspr
					if ($('#nectar_fullscreen_rows').length > 0 && 
					$('.pum-container .pum-content > .wpb_row .full-page-inner > .container > .span_12').length > 0) {
						$('.pum-container .pum-content > .wpb_row .full-page-inner > .container > .span_12').unwrap();
					}
										
					// Blog bottom padding
					if ($('.single .blog_next_prev_buttons').length > 0) { 
						$('.container-wrap').css('padding-bottom', 0);
					}
					
					// Remove margin on last cols inside of full width sections 
					$('.full-width-section').each(function () {
						$(this).find('> .span_12 > div.col_last').last().css('margin-bottom', '0');
					});
					
					// Remove boxed style from full width content
					$('.full-width-content .col.boxed').removeClass('boxed');
					
					// Neg marg z-index adjust
					$('.wpb_column.neg-marg').parents('.wpb_row').css('z-index', '110');
					

				}
				
			
			
				
				//vc col mobile fixes
				function vcMobileColumns() {
					
						$('.wpb_row').each(function () {
							if (typeof $(this).find('.span_12').offset() != 'undefined') {
								
								$(this).find('[class*="vc_col-"]').each(function () {
									
									var $firstChildOffset = $(this).parents('.span_12').offset().left;
									
									$(this).removeClass('no-left-margin');
									
									if ($(this).offset().left < $firstChildOffset + 27) {
										$(this).addClass('no-left-margin');
									} else {
										$(this).removeClass('no-left-margin');
									}
								});
							}
						});
				}
				
				function vcMobileColumnsInit() {
					
					var $winDOMWidth   = nectarDOMInfo.winW,
					$winDOMHeight      = nectarDOMInfo.winH,
					$orientChangeTrack = 0;
					
					if ($('[class*="vc_col-xs-"], [class*="vc_col-md-"], [class*="vc_col-lg-"]').length > 0) {
						
						// Trigger immediately.
						vcMobileColumns();
						
						// Resize.
						if( !nectarDOMInfo.usingMobileBrowser ) {
							// Bind normally for desktop.
							$window.on('resize',vcMobileColumns);
						}
						else {
							
							// For mobile make sure the orientation has changed.
							window.addEventListener("orientationchange", function () {
								$orientChangeTrack = 1;
							});
							
							$window.on('resize', function () {
								
								if (($window.width() != $winDOMWidth && $window.height != $winDOMHeight) || $orientChangeTrack === 1) {
									
									vcMobileColumns();
									
									// Store the current window dimensions.
									$winDOMWidth  = nectarDOMInfo.winW;
									$winDOMHeight = nectarDOMInfo.winH;
									
									// Reset orientation change tracker.
									$orientChangeTrack = 0;
								}
								
							});
							
							
						} // end mobile only. 

					} // endif vc offset cols found.
					
					
				}
				
			
				

				/**
				* Select2 plugin initialization.
				*
				* @since 5.0
				*/
				function select2Init() {
					
					$('select:not(.state_select):not(.country_select):not(.comment-form-rating #rating):not(#tribe-bar-form select):not(.woocommerce-currency-switcher)').each(function () {
						
						// Prevent search from triggering on small devices.
						var $minimumToSearch = ( nectarDOMInfo.winW > 690 ) ? 7 : 200;
						
						if ($(this).parents('#buddypress').length == 0) {
							
							if ($(this).parents('.woocommerce-ordering').length == 0) {
								$(this).select2({
									minimumResultsForSearch: $minimumToSearch,
									width: '100%'
								});
							} else {
								$(this).select2({
									minimumResultsForSearch: $minimumToSearch,
									dropdownAutoWidth: true
								});
							}
						}
						
					});
				}
				
				
				/**
				* Fancy select styling theme option.
				*
				* @since 10.5
				*/
				function fancySelectStyling() {
				
					if ( $('body[data-fancy-form-rcs="1"]').length > 0 ) {
						
						$('select:not(.comment-form-rating #rating)').each(function () {
							
							var $selector;
							
							//cf7
							if ($(this).parents('.wpcf7-form-control-wrap').length > 0) {
								
								//select 2 already initialized
								if ($(this).parents('.wpcf7-form-control-wrap').find('.select2-container').length > 0) {
									$selector = $($(this).prev('.select2-container'));
								} else {
									$selector = $(this);
								}
								
								//if label is found
								if ($selector.parents('.wpcf7-form-control-wrap').parent().find('label').length == 1) {
									$selector.parents('.wpcf7-form-control-wrap').parent().wrapInner('<div class="fancy-select-wrap" />');
								} else {
									//default wrap
									$selector.wrap('<div class="fancy-select-wrap" />');
								}
							}
							//default
							else {
								
								//select 2 already initialized
								if ($(this).prev('.select2-container').length > 0) {
									$selector = $(this).prev('.select2-container');
								} else {
									$selector = $(this);
								}
								
								if ($(this).parents('#buddypress').length == 0 && $(this).parents('.widget_categories').length == 0) {
									//if label is found
									if ($selector.prev('label').length == 1) {
										$selector.prev('label').andSelf().wrapAll('<div class="fancy-select-wrap" />');
									} else if ($selector.next('label').length == 1) {
										$selector.next('label').andSelf().wrapAll('<div class="fancy-select-wrap" />');
									} else {
										//default wrap
										$selector.wrap('<div class="fancy-select-wrap" />');
									}
								}
								
							}
						});
						
						select2Init();
						
					}
						
				}
				
				

				
				
				/**
				* Back/Forward Safari cache assist.
				*
				* @since 10.5
				*/
				function bfCacheAssist() {
					
					//Back/forward cache OCM close
					if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || 
					navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
						
						window.onpageshow = function (event) {
							
							if (event.persisted) {
								
								// Play video BGs
								$('.nectar-video-wrap, .nectar-slider-wrap .swiper-slide .video-wrap').each(function () {
									
									if ($(this).find('video').length > 0) {
										$(this).find('video')[0].play();
									}
									
								});
								
								
								// Close mobile nav
								
								//// Material Skin.
								if ($('body.material-ocm-open').length > 0) {
									$('body > .slide_out_area_close').addClass('non-human-allowed').trigger('click');
									
									setTimeout(function () {
										$('body > .slide_out_area_close').removeClass('non-human-allowed');
									}, 100);
									
								} else if ($('#slide-out-widget-area.slide-out-from-right-hover.open').length > 0 && navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
									OCM_mobileSlideOutRightHoverCloseCheck();
								}
								// Others
								else if ($('#slide-out-widget-area.fullscreen.open').length > 0 || 
								$('#slide-out-widget-area.fullscreen-alt.open').length > 0 || 
								$('#slide-out-widget-area.slide-out-from-right.open').length > 0) {
									
									$('#slide-out-widget-area .slide_out_area_close').addClass('non-human-allowed');
									$('.slide-out-widget-area-toggle:not(.std-menu) a.open')
										.addClass('non-human-allowed')
										.trigger('click');
										
									setTimeout(function () {
										$('#slide-out-widget-area .slide_out_area_close').removeClass('non-human-allowed');
									}, 100);
									
								}
								
							} // Loaded from bf cache
							
						}; // onpage show
						
					} 
					
				}
				
				
			
				
				

				/*-------------------------------------------------------------------------*/
				/*	WPBakery Frontend Editor
				/*-------------------------------------------------------------------------*/
				
				/**
				* Control adjustments
				*
				* @since 10.0
				*/
				function addRowCtrls() {
					
					//remove padding for rows with only fullwidth ns
					$('.wpb_row').removeClass('only-ns');
					
					$('.nectar-slider-wrap[data-full-width="true"], .page-submenu, .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), .blog-fullwidth-wrap')
						.parents('.wpb_row')
						.addClass('only-ns');
					
					//padding when column contains item that could get lost under column controls 
					$('body.vc_editor.compose-mode .wpb_row .vc_vc_column > .wpb_column > .vc_column-inner').each(function() {
						
						if ($(this).find('> .vc_element-container > div').length > 0) {
							
							if ($(this).find('> .vc_element-container > div:first-child').is('.vc_vc_row_inner')) {
								$(this).find('> .vc_element-container > div:first-child').addClass('first-inner-row-el');
							} else {
								$(this).find('> .vc_element-container > div:first-child').removeClass('first-inner-row-el');
							}
							
						}
						
					});
					
				} //addRowCtrl end
				
				
				/**
				* Convert front end padding
				*
				* Needed due to different markup in front end page builder view.
				*
				* @since 10.0
				*/
				function convertFrontEndPadding() {
					
					$('.vc_element > .wpb_column[class*="padding-"][class*="-percent"]').each(function() {
						
						var $elPaddingPercent = 4;
						
						var elclassName = this.className.match(/padding-\d+/);
						if (elclassName) {
							$elPaddingPercent = elclassName[0].match(/\d+/);
							if ($elPaddingPercent) {
								$elPaddingPercent = $elPaddingPercent[0] / 100;
							} else {
								$elPaddingPercent = 0;
							}
						}
						
						if ($elPaddingPercent) {
							var $parentRowWidth = $(this).parents('.span_12').width();
							
							if ($(this).is('[data-padding-pos="all"]')) {
								$(this).css('padding', $parentRowWidth * $elPaddingPercent);
							} else if ($(this).is('[data-padding-pos="top"]')) {
								$(this).css('padding-top', $parentRowWidth * $elPaddingPercent);
							} else if ($(this).is('[data-padding-pos="bottom"]')) {
								$(this).css('padding-bottom', $parentRowWidth * $elPaddingPercent);
							} else if ($(this).is('[data-padding-pos="left"]')) {
								$(this).css('padding-left', $parentRowWidth * $elPaddingPercent);
							} else if ($(this).is('[data-padding-pos="right"]')) {
								$(this).css('padding-right', $parentRowWidth * $elPaddingPercent);
							} else if ($(this).is('[data-padding-pos="top-bottom"]')) {
								$(this).css({
									'padding-top': $parentRowWidth * $elPaddingPercent,
									'padding-bottom': $parentRowWidth * $elPaddingPercent,
								});
							} else if ($(this).is('[data-padding-pos="top-right"]')) {
								$(this).css({
									'padding-top': $parentRowWidth * $elPaddingPercent,
									'padding-right': $parentRowWidth * $elPaddingPercent,
								});
							} else if ($(this).is('[data-padding-pos="bottom-right"]')) {
								$(this).css({
									'padding-right': $parentRowWidth * $elPaddingPercent,
									'padding-bottom': $parentRowWidth * $elPaddingPercent,
								});
							} else if ($(this).is('[data-padding-pos="bottom-left"]')) {
								$(this).css({
									'padding-left': $parentRowWidth * $elPaddingPercent,
									'padding-bottom': $parentRowWidth * $elPaddingPercent,
								});
							} else if ($(this).is('[data-padding-pos="left-right"]')) {
								$(this).css({
									'padding-left': $parentRowWidth * $elPaddingPercent,
									'padding-right': $parentRowWidth * $elPaddingPercent,
								});
							}
						}
						
					}); 
					
					$('.wpb_row[class*="vc_custom_"]').each(function() {
						
						$(this).parent().addClass('no-bottom-margin');
						
					});
					
				} 
				
				
				/**
				* WPBakery Front end editor integration
				*
				* @since 10.0
				*/
				function wpBakeryFrontendInit() {
					
					// Set up controls/column padding.
					setTimeout(function() {
						
						if ($('body.compose-mode').length > 0) {
							$('.container-wrap').addClass('visible-editor-controls');
						}
						
						if (nectarDOMInfo.usingFrontEndEditor) {
							addRowCtrls();
							convertFrontEndPadding();
							$window.smartresize(convertFrontEndPadding);
						}
						
					}, 200);
					
					// Bind reload event
					$window.on('vc_reload', function() {
						
						addRowCtrls();
						columnBGColors();
						coloredButtons();
						twentytwentyInit();
						parallaxRowsBGCals();
						flexsliderInit();
						accordionInit();
						ulCheckmarks();
						oneFourthClasses();
						carouselfGrabbingClass();
						
						if ($('.carousel').length > 0) {
							standardCarouselInit();
							clientsCarouselInit();
							carouselHeightCalcs();
						}
	
						if ($('.owl-carousel').length > 0) {
							$('.owl-carousel').each(function() {
								$(this).trigger('destroy.owl.carousel').removeClass('owl-loaded');
								$(this).find('.owl-stage-outer .owl-stage > *').unwrap();
								$(this).find('.owl-stage-outer > *').unwrap();
								$(this).find('.owl-item > *').unwrap();
								$(this).find('.owl-dots').remove();
								$(this).find('.owl-nav').remove();
							});
							owlCarouselInit();
						}
						
						if ($('.nectar_cascading_images').length > 0) {
							imagesLoaded($('.nectar_cascading_images'), function() {
								cascadingImageBGSizing();
							});
						}
						
						fullWidthSections();
						fwsClasses();
						recentPostsInit();
						fullWidthRowPaddingAdjust();
						
						/*flickity carousels*/
						if ($flickitySliders.length > 0) {
							for (var i = 0; i < $flickitySliders.length; i++) {
								
								$flickitySliders[i].reloadCells();
								$flickitySliders[i].off('scroll.flickity');
								$flickitySliders[i].off('dragStart.flickity');
								$flickitySliders[i].off('dragEnd.flickity');
								
							}
						}
						
						setTimeout(function() {
							
							flickityInit();
							if ($flickitySliders.length > 0) {
								for (var i = 0; i < $flickitySliders.length; i++) {
									$flickitySliders[i].reloadCells();
									$flickitySliders[i].resize();
								}
							}
							
						}, 100);
						
						/*flickity product carousels*/
						if ($wooFlickityCarousels.length > 0) {
							for (var i = 0; i < $wooFlickityCarousels.length; i++) {
								
								$wooFlickityCarousels[i].flickity('reloadCells');
								$wooFlickityCarousels[i].off('scroll.flickity');
								$wooFlickityCarousels[i].off('dragStart.flickity');
								$wooFlickityCarousels[i].off('dragEnd.flickity');
								
							}
						}
						
						setTimeout(function() {
							
							if ($('.nectar-woo-flickity').length > 0) {
								productCarouselInit();
							}
							if ($wooFlickityCarousels.length > 0) {
								for (var i = 0; i < $wooFlickityCarousels.length; i++) {
									$wooFlickityCarousels[i].flickity('reloadCells');
									$wooFlickityCarousels[i].flickity('resize');
								}
							}
							
						}, 100);
						
						nectarTestimonialSliders();
						
						for (var i = 0; i < $testimonialSliders.length; i++) {
							
							if ($testimonialSliders[i].type == 'multiple_visible' || 
							$testimonialSliders[i].type == 'multiple_visible_minimal') {
								
								$testimonialSliders[i].flickityEl.flickity('reloadCells');
								$testimonialSliders[i].flickityEl.off('select.flickity');
								nectarTestimonialSliders();
								$testimonialSliders[i].flickityEl.resize();
							}
							
							$testimonialSliders[i].testimonialSliderHeight();
						}
						nectarTestimonialSlidersEvents();
						
						pricingTableHeight();
						nectarIconMatchColoring();
						lightBoxInit();
						imageWithHotspotEvents();
						largeIconHover();
						nectarBoxRollInit();
						midnightInit();
						responsiveVideoIframesInit();
						responsiveVideoIframes();
						fullWidthContentColumns();
						setTimeout(fullWidthContentColumns, 1000);
						videoBGInit();
						vcFullHeightRowInit();
						$window.off('scroll.parallaxSections').off('resize.parallaxSections');
						parallaxScrollInit();
						masonryBlogInit();
						masonryPortfolioInit();
						
						if ($portfolio_containers.length > 0) {
							for (var i = 0; i < $portfolio_containers.length; i++) {
								$portfolio_containers[i].portfolioAccentColor();
							}
						}
						
						parallaxItemHoverEffect();
						fsProjectSliderInit();
						
						setTimeout(function() {
							if ($('.nectar_fullscreen_zoom_recent_projects').length > 0) {
								
								if ($fsProjectSliderArr.length > 0) {
									for (var i = 0; i < $fsProjectSliderArr.length; i++) {
										$fsProjectSliderArr[i].sliderCalcs();
									}
								}
								
							}
						}, 300);
						
						$window.unbind('.infscr');
						infiniteScrollInit();
						mouseParallaxInit();
						
						//play video BGs
						$('.nectar-video-wrap').each(function() {
							if ($(this).find('video').length > 0) {
								$(this).find('video').css('visibility', 'visible');
							}
						});
						
						//tablet inherits small desktop
						$('.wpb_column[data-t-w-inherits]').each(function() {
							if ($(this).is('[data-t-w-inherits="small_desktop"]')) {
								$(this).parent().addClass('inherits-s-desktop-col');
							} else {
								$(this).parent().removeClass('inherits-s-desktop-col');
							}
						});
						
						//full screen page rows
						if ($('#nectar_fullscreen_rows').length > 0) {
							
							if ($('#nectar_fullscreen_rows > .vc_element').length == 0) {
								$('#nectar_fullscreen_rows').prepend('<div class="vc_element empty_placeholder" />');
							}
							
							
							if ($('#nectar_fullscreen_rows > .vc_element:not(.empty_placeholder)').length > 0) {
								$('#nectar_fullscreen_rows >.vc_element.empty_placeholder').remove();
							}
							
							
							$.fn.fullpage.destroy('all');
							nectarFullPageInit();
							
							//keep tooltip active status
							var nectarFPOffsets = [{
								el: '',
								offset: 0
							}];
							
							////create list of offsets
							$('#nectar_fullscreen_rows > div.vc_element').each(function(i) {
								nectarFPOffsets[i] = {
									el: $(this),
									offset: $(this).offset().top
								};
							});
							
							
							////start active on that index
							
							//move back to first section when all have been deleted but one
							if ($('#nectar_fullscreen_rows > div.vc_element').length === 1) {
								$('#nectar_fullscreen_rows').css({
									'transform': 'translate3d(0,0,0)'
								});
							}
							
							$body.scrollTo(0, 0);
							
							
						} else {
							
							//remove container wrap padding/margin when needded
							if ($('body .main-content > .row > .vc_element:first > .wpb_row[class*="full-width-"]').length > 0 || 
							$('body .main-content > .row > .vc_element:first .nectar-slider-wrap[data-full-width="true"]').length > 0) {
								$('.container-wrap').css({
									'padding-top': '0',
									'margin-top': '0'
								});
							} else {
								$('.container-wrap').css({
									'padding-top': '40px'
								});
							}
							
						}
						
						//reset svg icon arr
						$svgIcons = [];
						$('.svg-icon-holder')
							.removeClass('animated-in')
							.removeClass('bound');
						
						
						//gmap
						if ($('.vc_nectar_gmap').length > 0) {
							
							setTimeout(function() {
								
								if (typeof google === 'object' && typeof google.maps === 'object') {
									window.mapAPI_Loaded();
								} else {
									
									if (window.nectarLove.mapApiKey.length > 0) {
										$.getScript('https://maps.google.com/maps/api/js?sensor=false&key=' + window.nectarLove.mapApiKey + '&callback=mapAPI_Loaded');
									}
								}
								
							}, 100);
						}
						
	
						stickySidebarInit();
						
	
						if (typeof window.Waypoint != 'undefined') {
							Waypoint.destroyAll();
							waypoints();
						}
						
					});
					
				}
				
				
				
				
				
				
				
				
				/**
				* Page transitions and waypoint triggering
				*
				* @since 10.5
				*/
				function pageTransitionInit() {
					
					if ($('body[data-ajax-transitions="true"]').length > 0 && $('#ajax-loading-screen[data-method="standard"]').length > 0) {
						
						$('html').addClass('page-trans-loaded');
						
						// Fade loading animation
						if ($('#ajax-loading-screen[data-effect="standard"]').length > 0) {
							
							if ($('.nectar-particles').length == 0) {
								
								$loadingScreenEl.transition({
									'opacity': 0
								}, 500, function () {
									$(this).css({
										'display': 'none'
									});
								});
								$('#ajax-loading-screen .loading-icon').transition({
									'opacity': 0
								}, 500);
								
							}
							
							// Bind waypoints after loading screen has left
							if ($('.nectar-box-roll').length == 0) {
								setTimeout(function () {
									waypoints();
								}, 550);
							}
							
						} 
						
						// Swipe loading animation
						else {
							
							if ($('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0) {
								setTimeout(function () {
									$loadingScreenEl.addClass('loaded');
								}, 60);
							}
							
							if ($('#page-header-wrap #page-header-bg[data-animate-in-effect="zoom-out"] .nectar-video-wrap').length == 0) {
								setTimeout(function () {
									$('#ajax-loading-screen:not(.loaded)').addClass('loaded');
									setTimeout(function () {
										$loadingScreenEl.addClass('hidden');
									}, 1000);
								}, 150);
							}
							
	
							// Bind waypoints after loading screen has left
							if ($('.nectar-box-roll').length == 0 && $('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0) {
								setTimeout(function () {
									waypoints();
								}, 750);
							} else if ($('.nectar-box-roll').length == 0) setTimeout(function () {
								waypoints();
							}, 350);
							
						}
						
	
						// Safari back/prev fix
						if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1 || 
						navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
							
							window.onunload = function () {
								$loadingScreenEl.stop().transition({
									'opacity': 0
								}, 800, function () {
									$(this).css({
										'display': 'none'
									});
								});
								$('#ajax-loading-screen .loading-icon').transition({
									'opacity': 0
								}, 600);
							};
							window.onpageshow = function (event) {
								
								if (event.persisted) {
									
									$loadingScreenEl.stop().transition({
										'opacity': 0
									}, 800, function () {
										$(this).css({
											'display': 'none'
										});
									});
									$('#ajax-loading-screen .loading-icon').transition({
										'opacity': 0
									}, 600);
									
								} 
								
							};
							
						} 
						
						else if (navigator.userAgent.indexOf('Firefox') != -1) {
							window.onunload = function () {};
						}
						
						
						// Remove excess loading images if using page transitions.
						$('.portfolio-loading, .nectar-slider-loading .loading-icon').remove();
						
						
						if ($('#ajax-loading-screen[data-disable-fade-on-click="1"]').length == 0) {
							
							if ($('body.using-mobile-browser #ajax-loading-screen[data-method="standard"][data-disable-mobile="1"]').length == 0) {
								
								var ignore_onbeforeunload = false;
								$('a[href^="mailto"], a[href^="tel"]').on('click', function () {
									ignore_onbeforeunload = true;
								});
								window.addEventListener('beforeunload', function () {
									
									if (!ignore_onbeforeunload) {
										$loadingScreenEl.addClass('set-to-fade');
										transitionPage();
									}
									ignore_onbeforeunload = false;
								});
							}
							
						} 
						
						
					} 
					
					// No page transitions
					else {
						
						if ($('.nectar-box-roll').length == 0 && !nectarDOMInfo.usingFrontEndEditor) {
							
							// Waypoints.
							setTimeout(function () {
								waypoints();
							}, 100);
						}
						
					}
					
	
					function transitionPage() {
						
						if ($('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length > 0) {
							$loadingScreenEl.removeClass('loaded');
							$loadingScreenEl.addClass('in-from-right');
							
							setTimeout(function () {
								$loadingScreenEl.addClass('loaded');
							}, 30);
							
						} 
						else {
							if ($('#ajax-loading-screen[data-effect="center_mask_reveal"]').length > 0) {
								$loadingScreenEl.css('opacity', '0').css('display', 'block').transition({
									'opacity': '1'
								}, 450);
							} else {
								$loadingScreenEl.show().transition({
									'opacity': '1'
								}, 450);
							}
						}
						
					}
					
				}
				


}(window.jQuery, window, document));