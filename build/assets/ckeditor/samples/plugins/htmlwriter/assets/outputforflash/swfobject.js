//# sourceMappingURL=swfobject.js.map
var swfobject=function(){function y(){if(!w){try{var a=d.getElementsByTagName("body")[0].appendChild(d.createElement("span"));a.parentNode.removeChild(a)}catch(c){return}w=!0;for(var a=B.length,b=0;b<a;b++)B[b]()}}function P(a){w?a():B[B.length]=a}function Q(a){if(typeof p.addEventListener!=k)p.addEventListener("load",a,!1);else if(typeof d.addEventListener!=k)d.addEventListener("load",a,!1);else if(typeof p.attachEvent!=k)Y(p,"onload",a);else if("function"==typeof p.onload){var b=p.onload;p.onload=
function(){b();a()}}else p.onload=a}function Z(){var a=d.getElementsByTagName("body")[0],b=d.createElement(v);b.setAttribute("type",C);var c=a.appendChild(b);if(c){var f=0;(function(){if(typeof c.GetVariable!=k){var g=c.GetVariable("$version");g&&(g=g.split(" ")[1].split(","),e.pv=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)])}else if(10>f){f++;setTimeout(arguments.callee,10);return}a.removeChild(b);c=null;H()})()}else H()}function H(){var a=r.length;if(0<a)for(var b=0;b<a;b++){var c=r[b].id,
f=r[b].callbackFn,g={success:!1,id:c};if(0<e.pv[0]){var d=q(c);if(d)if(!D(r[b].swfVersion)||e.wk&&312>e.wk)if(r[b].expressInstall&&I()){g={};g.data=r[b].expressInstall;g.width=d.getAttribute("width")||"0";g.height=d.getAttribute("height")||"0";d.getAttribute("class")&&(g.styleclass=d.getAttribute("class"));d.getAttribute("align")&&(g.align=d.getAttribute("align"));for(var h={},d=d.getElementsByTagName("param"),l=d.length,m=0;m<l;m++)"movie"!=d[m].getAttribute("name").toLowerCase()&&(h[d[m].getAttribute("name")]=
d[m].getAttribute("value"));J(g,h,c,f)}else aa(d),f&&f(g);else x(c,!0),f&&(g.success=!0,g.ref=K(c),f(g))}else if(x(c,!0),f)(c=K(c))&&typeof c.SetVariable!=k&&(g.success=!0,g.ref=c),f(g)}}function K(a){var b=null;(a=q(a))&&"OBJECT"==a.nodeName&&(typeof a.SetVariable!=k?b=a:(a=a.getElementsByTagName(v)[0])&&(b=a));return b}function I(){return!E&&D("6.0.65")&&(e.win||e.mac)&&!(e.wk&&312>e.wk)}function J(a,b,c,f){E=!0;L=f||null;R={success:!1,id:c};var g=q(c);if(g){"OBJECT"==g.nodeName?(A=M(g),F=null):
(A=g,F=c);a.id=S;if(typeof a.width==k||!/%$/.test(a.width)&&310>parseInt(a.width,10))a.width="310";if(typeof a.height==k||!/%$/.test(a.height)&&137>parseInt(a.height,10))a.height="137";d.title=d.title.slice(0,47)+" - Flash Player Installation";f=e.ie&&e.win?"ActiveX":"PlugIn";f="MMredirectURL="+p.location.toString().replace(/&/g,"%26")+"&MMplayerType="+f+"&MMdoctitle="+d.title;b.flashvars=typeof b.flashvars!=k?b.flashvars+("&"+f):f;e.ie&&e.win&&4!=g.readyState&&(f=d.createElement("div"),c+="SWFObjectNew",
f.setAttribute("id",c),g.parentNode.insertBefore(f,g),g.style.display="none",function(){4==g.readyState?g.parentNode.removeChild(g):setTimeout(arguments.callee,10)}());N(a,b,c)}}function aa(a){if(e.ie&&e.win&&4!=a.readyState){var b=d.createElement("div");a.parentNode.insertBefore(b,a);b.parentNode.replaceChild(M(a),b);a.style.display="none";(function(){4==a.readyState?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)})()}else a.parentNode.replaceChild(M(a),a)}function M(a){var b=d.createElement("div");
if(e.win&&e.ie)b.innerHTML=a.innerHTML;else if(a=a.getElementsByTagName(v)[0])if(a=a.childNodes)for(var c=a.length,f=0;f<c;f++)1==a[f].nodeType&&"PARAM"==a[f].nodeName||8==a[f].nodeType||b.appendChild(a[f].cloneNode(!0));return b}function N(a,b,c){var f,g=q(c);if(e.wk&&312>e.wk)return f;if(g)if(typeof a.id==k&&(a.id=c),e.ie&&e.win){var u="",h;for(h in a)a[h]!=Object.prototype[h]&&("data"==h.toLowerCase()?b.movie=a[h]:"styleclass"==h.toLowerCase()?u+=' class="'+a[h]+'"':"classid"!=h.toLowerCase()&&
(u+=" "+h+'="'+a[h]+'"'));h="";for(var l in b)b[l]!=Object.prototype[l]&&(h+='<param name="'+l+'" value="'+b[l]+'" />');g.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+u+">"+h+"</object>";G[G.length]=a.id;f=q(a.id)}else{l=d.createElement(v);l.setAttribute("type",C);for(var m in a)a[m]!=Object.prototype[m]&&("styleclass"==m.toLowerCase()?l.setAttribute("class",a[m]):"classid"!=m.toLowerCase()&&l.setAttribute(m,a[m]));for(u in b)b[u]!=Object.prototype[u]&&"movie"!=u.toLowerCase()&&
(a=l,h=u,m=b[u],c=d.createElement("param"),c.setAttribute("name",h),c.setAttribute("value",m),a.appendChild(c));g.parentNode.replaceChild(l,g);f=l}return f}function T(a){var b=q(a);b&&"OBJECT"==b.nodeName&&(e.ie&&e.win?(b.style.display="none",function(){if(4==b.readyState){var c=q(a);if(c){for(var f in c)"function"==typeof c[f]&&(c[f]=null);c.parentNode.removeChild(c)}}else setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))}function q(a){var b=null;try{b=d.getElementById(a)}catch(c){}return b}
function Y(a,b,c){a.attachEvent(b,c);z[z.length]=[a,b,c]}function D(a){var b=e.pv;a=a.split(".");a[0]=parseInt(a[0],10);a[1]=parseInt(a[1],10)||0;a[2]=parseInt(a[2],10)||0;return b[0]>a[0]||b[0]==a[0]&&b[1]>a[1]||b[0]==a[0]&&b[1]==a[1]&&b[2]>=a[2]?!0:!1}function U(a,b,c,f){if(!e.ie||!e.mac){var g=d.getElementsByTagName("head")[0];g&&(c=c&&"string"==typeof c?c:"screen",f&&(O=n=null),n&&O==c||(f=d.createElement("style"),f.setAttribute("type","text/css"),f.setAttribute("media",c),n=g.appendChild(f),
e.ie&&e.win&&typeof d.styleSheets!=k&&0<d.styleSheets.length&&(n=d.styleSheets[d.styleSheets.length-1]),O=c),e.ie&&e.win?n&&typeof n.addRule==v&&n.addRule(a,b):n&&typeof d.createTextNode!=k&&n.appendChild(d.createTextNode(a+" {"+b+"}")))}}function x(a,b){V&&(b=b?"visible":"hidden",w&&q(a)?q(a).style.visibility=b:U("#"+a,"visibility:"+b))}function W(a){return null!=/[\\\"<>\.;]/.exec(a)&&typeof encodeURIComponent!=k?encodeURIComponent(a):a}var k="undefined",v="object",C="application/x-shockwave-flash",
S="SWFObjectExprInst",p=window,d=document,t=navigator,X=!1,B=[function(){X?Z():H()}],r=[],G=[],z=[],A,F,L,R,w=!1,E=!1,n,O,V=!0,e=function(){var a=typeof d.getElementById!=k&&typeof d.getElementsByTagName!=k&&typeof d.createElement!=k,b=t.userAgent.toLowerCase(),c=t.platform.toLowerCase(),f=c?/win/.test(c):/win/.test(b),c=c?/mac/.test(c):/mac/.test(b),b=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,g=!+"\v1",e=[0,0,0],h=null;if(typeof t.plugins!=k&&typeof t.plugins["Shockwave Flash"]==
v)!(h=t.plugins["Shockwave Flash"].description)||typeof t.mimeTypes!=k&&t.mimeTypes[C]&&!t.mimeTypes[C].enabledPlugin||(X=!0,g=!1,h=h.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),e[0]=parseInt(h.replace(/^(.*)\..*$/,"$1"),10),e[1]=parseInt(h.replace(/^.*\.(.*)\s.*$/,"$1"),10),e[2]=/[a-zA-Z]/.test(h)?parseInt(h.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof p.ActiveXObject!=k)try{var l=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");l&&(h=l.GetVariable("$version"))&&(g=!0,h=h.split(" ")[1].split(","),
e=[parseInt(h[0],10),parseInt(h[1],10),parseInt(h[2],10)])}catch(m){}return{w3:a,pv:e,wk:b,ie:g,win:f,mac:c}}();(function(){e.w3&&((typeof d.readyState!=k&&"complete"==d.readyState||typeof d.readyState==k&&(d.getElementsByTagName("body")[0]||d.body))&&y(),w||(typeof d.addEventListener!=k&&d.addEventListener("DOMContentLoaded",y,!1),e.ie&&e.win&&(d.attachEvent("onreadystatechange",function(){"complete"==d.readyState&&(d.detachEvent("onreadystatechange",arguments.callee),y())}),p==top&&function(){if(!w){try{d.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,
0);return}y()}}()),e.wk&&function(){w||(/loaded|complete/.test(d.readyState)?y():setTimeout(arguments.callee,0))}(),Q(y)))})();(function(){e.ie&&e.win&&window.attachEvent("onunload",function(){for(var a=z.length,b=0;b<a;b++)z[b][0].detachEvent(z[b][1],z[b][2]);a=G.length;for(b=0;b<a;b++)T(G[b]);for(var c in e)e[c]=null;e=null;for(var f in swfobject)swfobject[f]=null;swfobject=null})})();return{registerObject:function(a,b,c,f){if(e.w3&&a&&b){var d={};d.id=a;d.swfVersion=b;d.expressInstall=c;d.callbackFn=
f;r[r.length]=d;x(a,!1)}else f&&f({success:!1,id:a})},getObjectById:function(a){if(e.w3)return K(a)},embedSWF:function(a,b,c,d,g,u,h,l,m,p){var q={success:!1,id:b};e.w3&&!(e.wk&&312>e.wk)&&a&&b&&c&&d&&g?(x(b,!1),P(function(){c+="";d+="";var e={};if(m&&typeof m===v)for(var n in m)e[n]=m[n];e.data=a;e.width=c;e.height=d;n={};if(l&&typeof l===v)for(var r in l)n[r]=l[r];if(h&&typeof h===v)for(var t in h)n.flashvars=typeof n.flashvars!=k?n.flashvars+("&"+t+"="+h[t]):t+"="+h[t];if(D(g))r=N(e,n,b),e.id==
b&&x(b,!0),q.success=!0,q.ref=r;else{if(u&&I()){e.data=u;J(e,n,b,p);return}x(b,!0)}p&&p(q)})):p&&p(q)},switchOffAutoHideShow:function(){V=!1},ua:e,getFlashPlayerVersion:function(){return{major:e.pv[0],minor:e.pv[1],release:e.pv[2]}},hasFlashPlayerVersion:D,createSWF:function(a,b,c){if(e.w3)return N(a,b,c)},showExpressInstall:function(a,b,c,d){e.w3&&I()&&J(a,b,c,d)},removeSWF:function(a){e.w3&&T(a)},createCSS:function(a,b,c,d){e.w3&&U(a,b,c,d)},addDomLoadEvent:P,addLoadEvent:Q,getQueryParamValue:function(a){var b=
d.location.search||d.location.hash;if(b){/\?/.test(b)&&(b=b.split("?")[1]);if(null==a)return W(b);for(var b=b.split("&"),c=0;c<b.length;c++)if(b[c].substring(0,b[c].indexOf("="))==a)return W(b[c].substring(b[c].indexOf("=")+1))}return""},expressInstallCallback:function(){if(E){var a=q(S);a&&A&&(a.parentNode.replaceChild(A,a),F&&(x(F,!0),e.ie&&e.win&&(A.style.display="block")),L&&L(R));E=!1}}}}();