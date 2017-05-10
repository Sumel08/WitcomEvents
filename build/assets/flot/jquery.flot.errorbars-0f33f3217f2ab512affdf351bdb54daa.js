//# sourceMappingURL=jquery.flot.errorbars.js.map
(function(w){function D(c,b,f,m){if(b.points.errorbars){c=[{x:!0,number:!0,required:!0},{y:!0,number:!0,required:!0}];f=b.points.errorbars;if("x"==f||"xy"==f)b.points.xerr.asymmetric&&c.push({x:!0,number:!0,required:!0}),c.push({x:!0,number:!0,required:!0});if("y"==f||"xy"==f)b.points.yerr.asymmetric&&c.push({y:!0,number:!0,required:!0}),c.push({y:!0,number:!0,required:!0});m.format=c}}function B(c,b,f,m,e,v,h,C,a,y,n){m+=y;e+=y;v+=y;"x"==b.err?(e>f+a?t(c,[[e,m],[Math.max(f+a,n[0]),m]]):h=!1,v<f-
a?t(c,[[Math.min(f-a,n[1]),m],[v,m]]):C=!1):(e<m-a?t(c,[[f,e],[f,Math.min(m-a,n[0])]]):h=!1,v>m+a?t(c,[[f,Math.max(m+a,n[1])],[f,v]]):C=!1);a=null!=b.radius?b.radius:a;h&&("-"==b.upperCap?"x"==b.err?t(c,[[e,m-a],[e,m+a]]):t(c,[[f-a,e],[f+a,e]]):w.isFunction(b.upperCap)&&("x"==b.err?b.upperCap(c,e,m,a):b.upperCap(c,f,e,a)));C&&("-"==b.lowerCap?"x"==b.err?t(c,[[v,m-a],[v,m+a]]):t(c,[[f-a,v],[f+a,v]]):w.isFunction(b.lowerCap)&&("x"==b.err?b.lowerCap(c,v,m,a):b.lowerCap(c,f,v,a)))}function t(c,b){c.beginPath();
c.moveTo(b[0][0],b[0][1]);for(var f=1;f<b.length;f++)c.lineTo(b[f][0],b[f][1]);c.stroke()}function E(c,b){var f=c.getPlotOffset();b.save();b.translate(f.left,f.top);w.each(c.getData(),function(c,e){if(e.points.errorbars&&(e.points.xerr.show||e.points.yerr.show)){c=e.datapoints.points;var f=e.datapoints.pointsize,h=[e.xaxis,e.yaxis],t=e.points.radius,a=[e.points.xerr,e.points.yerr],y=!1;if(h[0].p2c(h[0].max)<h[0].p2c(h[0].min)){var y=!0,n=a[0].lowerCap;a[0].lowerCap=a[0].upperCap;a[0].upperCap=n}var w=
!1;h[1].p2c(h[1].min)<h[1].p2c(h[1].max)&&(w=!0,n=a[1].lowerCap,a[1].lowerCap=a[1].upperCap,a[1].upperCap=n);for(var p=0;p<e.datapoints.points.length;p+=f){var x,d=e.datapoints.points,q=null,r=null,k=null,l=null;x=e.points.xerr;var g=e.points.yerr,u=e.points.errorbars;"x"==u||"xy"==u?x.asymmetric?(q=d[p+2],r=d[p+3],"xy"==u&&(g.asymmetric?(k=d[p+4],l=d[p+5]):k=d[p+4])):(q=d[p+2],"xy"==u&&(g.asymmetric?(k=d[p+3],l=d[p+4]):k=d[p+3])):"y"==u&&(g.asymmetric?(k=d[p+2],l=d[p+3]):k=d[p+2]);null==r&&(r=q);
null==l&&(l=k);d=[q,r,k,l];x.show||(d[0]=null,d[1]=null);g.show||(d[2]=null,d[3]=null);x=d;for(g=0;g<a.length;g++)if(d=[h[g].min,h[g].max],x[g*a.length]&&(q=c[p],r=c[p+1],k=[q,r][g]+x[g*a.length+1],l=[q,r][g]-x[g*a.length],"x"!=a[g].err||!(r>h[1].max||r<h[1].min||k<h[0].min||l>h[0].max)))if("y"!=a[g].err||!(q>h[0].max||q<h[0].min||k<h[1].min||l>h[1].max)){var z=u=!0;k>d[1]&&(u=!1,k=d[1]);l<d[0]&&(z=!1,l=d[0]);if("x"==a[g].err&&y||"y"==a[g].err&&w)n=l,l=k,k=n,n=z,z=u,u=n,n=d[0],d[0]=d[1],d[1]=n;q=
h[0].p2c(q);r=h[1].p2c(r);k=h[g].p2c(k);l=h[g].p2c(l);d[0]=h[g].p2c(d[0]);d[1]=h[g].p2c(d[1]);var n=a[g].lineWidth?a[g].lineWidth:e.points.lineWidth,A=null!=e.points.shadowSize?e.points.shadowSize:e.shadowSize;0<n&&0<A&&(A/=2,b.lineWidth=A,b.strokeStyle="rgba(0,0,0,0.1)",B(b,a[g],q,r,k,l,u,z,t,A+A/2,d),b.strokeStyle="rgba(0,0,0,0.2)",B(b,a[g],q,r,k,l,u,z,t,A/2,d));b.strokeStyle=a[g].color?a[g].color:e.color;b.lineWidth=n;B(b,a[g],q,r,k,l,u,z,t,0,d)}}}});b.restore()}w.plot.plugins.push({init:function(c){c.hooks.processRawData.push(D);
c.hooks.draw.push(E)},options:{series:{points:{errorbars:null,xerr:{err:"x",show:null,asymmetric:null,upperCap:null,lowerCap:null,color:null,radius:null},yerr:{err:"y",show:null,asymmetric:null,upperCap:null,lowerCap:null,color:null,radius:null}}}},name:"errorbars",version:"1.0"})})(jQuery);