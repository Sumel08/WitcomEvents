//# sourceMappingURL=jquery.flot.selection.js.map
(function(l){l.plot.plugins.push({init:function(b){function q(a){c.active&&(r(a),b.getPlaceholder().trigger("plotselecting",[p()]))}function t(a){1==a.which&&(document.body.focus(),void 0!==document.onselectstart&&null==h.onselectstart&&(h.onselectstart=document.onselectstart,document.onselectstart=function(){return!1}),void 0!==document.ondrag&&null==h.ondrag&&(h.ondrag=document.ondrag,document.ondrag=function(){return!1}),u(c.first,a),c.active=!0,m=function(a){m=null;void 0!==document.onselectstart&&
(document.onselectstart=h.onselectstart);void 0!==document.ondrag&&(document.ondrag=h.ondrag);c.active=!1;r(a);n()?v():(b.getPlaceholder().trigger("plotunselected",[]),b.getPlaceholder().trigger("plotselecting",[null]))},l(document).one("mouseup",m))}function p(){if(!n()||!c.show)return null;var a={},k=c.first,d=c.second;l.each(b.getAxes(),function(c,b){if(b.used){var f=b.c2p(k[b.direction]);b=b.c2p(d[b.direction]);a[c]={from:Math.min(f,b),to:Math.max(f,b)}}});return a}function v(){var a=p();b.getPlaceholder().trigger("plotselected",
[a]);a.xaxis&&a.yaxis&&b.getPlaceholder().trigger("selected",[{x1:a.xaxis.from,y1:a.yaxis.from,x2:a.xaxis.to,y2:a.yaxis.to}])}function u(a,k){var d=b.getOptions(),e=b.getPlaceholder().offset(),g=b.getPlotOffset(),f=k.pageX-e.left-g.left,h=b.width();a.x=0>f?0:f>h?h:f;k=k.pageY-e.top-g.top;e=b.height();a.y=0>k?0:k>e?e:k;"y"==d.selection.mode&&(a.x=a==c.first?0:b.width());"x"==d.selection.mode&&(a.y=a==c.first?0:b.height())}function r(a){null!=a.pageX&&(u(c.second,a),n()?(c.show=!0,b.triggerRedrawOverlay()):
w(!0))}function w(a){c.show&&(c.show=!1,b.triggerRedrawOverlay(),a||b.getPlaceholder().trigger("plotunselected",[]))}function x(a,c){var d,e,g,f,h=b.getAxes(),l;for(l in h)if(d=h[l],d.direction==c&&(f=c+d.n+"axis",a[f]||1!=d.n||(f=c+"axis"),a[f])){e=a[f].from;g=a[f].to;break}a[f]||(d="x"==c?b.getXAxes()[0]:b.getYAxes()[0],e=a[c+"1"],g=a[c+"2"]);null!=e&&null!=g&&e>g&&(a=e,e=g,g=a);return{from:e,to:g,axis:d}}function n(){var a=b.getOptions().selection.minSize;return Math.abs(c.second.x-c.first.x)>=
a&&Math.abs(c.second.y-c.first.y)>=a}var c={first:{x:-1,y:-1},second:{x:-1,y:-1},show:!1,active:!1},h={},m=null;b.clearSelection=w;b.setSelection=function(a,k){var d,e=b.getOptions();"y"==e.selection.mode?(c.first.x=0,c.second.x=b.width()):(d=x(a,"x"),c.first.x=d.axis.p2c(d.from),c.second.x=d.axis.p2c(d.to));"x"==e.selection.mode?(c.first.y=0,c.second.y=b.height()):(d=x(a,"y"),c.first.y=d.axis.p2c(d.from),c.second.y=d.axis.p2c(d.to));c.show=!0;b.triggerRedrawOverlay();!k&&n()&&v()};b.getSelection=
p;b.hooks.bindEvents.push(function(a,c){null!=a.getOptions().selection.mode&&(c.mousemove(q),c.mousedown(t))});b.hooks.drawOverlay.push(function(a,b){if(c.show&&n()){var d=a.getPlotOffset();a=a.getOptions();b.save();b.translate(d.left,d.top);d=l.color.parse(a.selection.color);b.strokeStyle=d.scale("a",.8).toString();b.lineWidth=1;b.lineJoin=a.selection.shape;b.fillStyle=d.scale("a",.4).toString();d=Math.min(c.first.x,c.second.x)+.5;a=Math.min(c.first.y,c.second.y)+.5;var e=Math.abs(c.second.x-c.first.x)-
1,g=Math.abs(c.second.y-c.first.y)-1;b.fillRect(d,a,e,g);b.strokeRect(d,a,e,g);b.restore()}});b.hooks.shutdown.push(function(a,b){b.unbind("mousemove",q);b.unbind("mousedown",t);m&&l(document).unbind("mouseup",m)})},options:{selection:{mode:null,color:"#e8cfac",shape:"round",minSize:5}},name:"selection",version:"1.1"})})(jQuery);