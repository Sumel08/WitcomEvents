//# sourceMappingURL=jquery.flot.threshold.js.map
(function(q){q.plot.plugins.push({init:function(w){function r(k,b,h,l,a){var f=h.pointsize,m,n,d,p,g=q.extend({},b);g.datapoints={points:[],pointsize:f,format:h.format};g.label=null;g.color=a;g.threshold=null;g.originSeries=b;g.data=[];var e=h.points,r=b.lines.show,t=[],u=[],c;for(a=0;a<e.length;a+=f){m=e[a];n=e[a+1];p=d;d=n<l?t:u;if(r&&p!=d&&null!=m&&0<a&&null!=e[a-f]){var v=m+(l-n)*(m-e[a-f])/(n-e[a-f+1]);p.push(v);p.push(l);for(c=2;c<f;++c)p.push(e[a+c]);d.push(null);d.push(null);for(c=2;c<f;++c)d.push(e[a+
c]);d.push(v);d.push(l);for(c=2;c<f;++c)d.push(e[a+c])}d.push(m);d.push(n);for(c=2;c<f;++c)d.push(e[a+c])}h.points=u;g.datapoints.points=t;0<g.datapoints.points.length&&(b=q.inArray(b,k.getData()),k.getData().splice(b+1,0,g))}w.hooks.processDatapoints.push(function(k,b,h){b.threshold&&(b.threshold instanceof Array?(b.threshold.sort(function(b,a){return b.below-a.below}),q(b.threshold).each(function(l,a){r(k,b,h,a.below,a.color)})):r(k,b,h,b.threshold.below,b.threshold.color))})},options:{series:{threshold:null}},
name:"threshold",version:"1.2"})})(jQuery);