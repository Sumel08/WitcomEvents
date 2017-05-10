//# sourceMappingURL=bootstrap-select.js.map
!function(e){e.expr[":"].icontains=function(a,b,d){return 0<=e(a).text().toUpperCase().indexOf(d[3].toUpperCase())};var n=function(a,b,d){d&&(d.stopPropagation(),d.preventDefault());this.$element=e(a);this.$menu=this.$button=this.$newElement=null;this.options=e.extend({},e.fn.selectpicker.defaults,this.$element.data(),"object"==typeof b&&b);null===this.options.title&&(this.options.title=this.$element.attr("title"));this.val=n.prototype.val;this.render=n.prototype.render;this.refresh=n.prototype.refresh;
this.setStyle=n.prototype.setStyle;this.selectAll=n.prototype.selectAll;this.deselectAll=n.prototype.deselectAll;this.init()};n.prototype={constructor:n,init:function(){this.$element.hide();this.multiple=this.$element.prop("multiple");var a=this.$element.attr("id");this.$newElement=this.createView();this.$element.after(this.$newElement);this.$menu=this.$newElement.find("> .dropdown-menu");this.$button=this.$newElement.find("> button");this.$searchbox=this.$newElement.find("input");if(void 0!==a){var b=
this;this.$button.attr("data-id",a);e('label[for="'+a+'"]').click(function(a){a.preventDefault();b.$button.focus()})}this.checkDisabled();this.clickListener();this.options.liveSearch&&this.liveSearchListener();this.render();this.liHeight();this.setStyle();this.setWidth();this.options.container&&this.selectPosition();this.$menu.data("this",this);this.$newElement.data("this",this)},createDropdown:function(){return e('<div class="btn-group bootstrap-select'+(this.multiple?" show-tick":"")+'"><button type="button" class="btn dropdown-toggle selectpicker" data-toggle="dropdown"><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">'+
(this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"")+(this.options.liveSearch?'<div class="bootstrap-select-searchbox"><input type="text" class="input-block-level form-control" /></div>':"")+'<ul class="dropdown-menu inner selectpicker" role="menu"></ul></div></div>')},createView:function(){var a=this.createDropdown(),b=this.createLi();a.find("ul").append(b);return a},reloadLi:function(){this.destroyLi();
var a=this.createLi();this.$menu.find("ul").append(a)},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var a=this,b=[],d="";this.$element.find("option").each(function(){var c=e(this),d=c.attr("class")||"",k=c.attr("style")||"",g=c.data("content")?c.data("content"):c.html(),h=void 0!==c.data("subtext")?'<small class="muted text-muted">'+c.data("subtext")+"</small>":"",l=void 0!==c.data("icon")?'<i class="'+a.options.iconBase+" "+c.data("icon")+'"></i> ':"";""!==l&&(c.is(":disabled")||
c.parent().is(":disabled"))&&(l="<span>"+l+"</span>");c.data("content")||(g=l+'<span class="text">'+g+h+"</span>");a.options.hideDisabled&&(c.is(":disabled")||c.parent().is(":disabled"))?b.push('<a style="min-height: 0; padding: 0"></a>'):c.parent().is("optgroup")&&!0!==c.data("divider")?0===c.index()?(h=c.parent().attr("label"),l=void 0!==c.parent().data("subtext")?'<small class="muted text-muted">'+c.parent().data("subtext")+"</small>":"",h=(c.parent().data("icon")?'<i class="'+c.parent().data("icon")+
'"></i> ':"")+'<span class="text">'+h+l+"</span>",0!==c[0].index?b.push('<div class="div-contain"><div class="divider"></div></div><dt>'+h+"</dt>"+a.createA(g,"opt "+d,k)):b.push("<dt>"+h+"</dt>"+a.createA(g,"opt "+d,k))):b.push(a.createA(g,"opt "+d,k)):!0===c.data("divider")?b.push('<div class="div-contain"><div class="divider"></div></div>'):!0===e(this).data("hidden")?b.push(""):b.push(a.createA(g,d,k))});e.each(b,function(a,b){d+="<li rel="+a+">"+b+"</li>"});this.multiple||0!==this.$element.find("option:selected").length||
this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected");return e(d)},createA:function(a,b,d){return'<a tabindex="0" class="'+b+'" style="'+d+'">'+a+'<i class="'+this.options.iconBase+" "+this.options.tickIcon+' icon-ok check-mark"></i></a>'},render:function(){var a=this;this.$element.find("option").each(function(b){a.setDisabled(b,e(this).is(":disabled")||e(this).parent().is(":disabled"));a.setSelected(b,e(this).is(":selected"))});this.tabIndex();var b=
this.$element.find("option:selected").map(function(){var b=e(this),c=b.data("icon")&&a.options.showIcon?'<i class="'+a.options.iconBase+" "+b.data("icon")+'"></i> ':"",d;d=a.options.showSubtext&&b.attr("data-subtext")&&!a.multiple?' <small class="muted text-muted">'+b.data("subtext")+"</small>":"";return b.data("content")&&a.options.showContent?b.data("content"):void 0!==b.attr("title")?b.attr("title"):c+b.html()+d}).toArray(),d=this.multiple?b.join(this.options.multipleSeparator):b[0];if(this.multiple&&
-1<this.options.selectedTextFormat.indexOf("count")){var c=this.options.selectedTextFormat.split(">"),m=this.options.hideDisabled?":not([disabled])":"";if(1<c.length&&b.length>c[1]||1==c.length&&2<=b.length)d=this.options.countSelectedText.replace("{0}",b.length).replace("{1}",this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])'+m).length)}d||(d=void 0!==this.options.title?this.options.title:this.options.noneSelectedText);this.$button.attr("title",e.trim(d));this.$newElement.find(".filter-option").html(d)},
setStyle:function(a,b){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device/gi,""));a=a?a:this.options.style;"add"==b?this.$button.addClass(a):"remove"==b?this.$button.removeClass(a):(this.$button.removeClass(this.options.style),this.$button.addClass(a))},liHeight:function(){var a=this.$menu.parent().clone().appendTo("body"),b=a.addClass("open").find("> .dropdown-menu"),d=b.find("li > a").outerHeight(),c=this.options.header?b.find(".popover-title").outerHeight():
0,b=this.options.liveSearch?b.find(".bootstrap-select-searchbox").outerHeight():0;a.remove();this.$newElement.data("liHeight",d).data("headerHeight",c).data("searchHeight",b)},setSize:function(){var a=this,b=this.$menu,d=b.find(".inner"),c=this.$newElement.outerHeight(),m=this.$newElement.data("liHeight"),k=this.$newElement.data("headerHeight"),g=this.$newElement.data("searchHeight"),h=b.find("li .divider").outerHeight(!0),l=parseInt(b.css("padding-top"))+parseInt(b.css("padding-bottom"))+parseInt(b.css("border-top-width"))+
parseInt(b.css("border-bottom-width")),f=this.options.hideDisabled?":not(.disabled)":"",n=e(window),q=l+parseInt(b.css("margin-top"))+parseInt(b.css("margin-bottom"))+2,p,r,t,u=function(){r=a.$newElement.offset().top-n.scrollTop();t=n.height()-r-c};u();this.options.header&&b.css("padding-top",0);"auto"==this.options.size?(h=function(){var c;u();p=t-q;a.options.dropupAuto&&a.$newElement.toggleClass("dropup",r>t&&p-q<b.height());a.$newElement.hasClass("dropup")&&(p=r-q);c=3<b.find("li").length+b.find("dt").length?
3*m+q-2:0;b.css({"max-height":p+"px",overflow:"hidden","min-height":c+"px"});d.css({"max-height":p-k-g-l+"px","overflow-y":"auto","min-height":c-l+"px"})},h(),e(window).resize(h),e(window).scroll(h)):this.options.size&&"auto"!=this.options.size&&b.find("li"+f).length>this.options.size&&(f=b.find("li"+f+" > *").filter(":not(.div-contain)").slice(0,this.options.size).last().parent().index(),f=b.find("li").slice(0,f+1).find(".div-contain").length,p=m*this.options.size+f*h+l,a.options.dropupAuto&&this.$newElement.toggleClass("dropup",
r>t&&p<b.height()),b.css({"max-height":p+k+g+"px",overflow:"hidden"}),d.css({"max-height":p-l+"px","overflow-y":"auto"}))},setWidth:function(){if("auto"==this.options.width){this.$menu.css("min-width","0");var a=this.$newElement.clone().appendTo("body"),b=a.find("> .dropdown-menu").css("width");a.remove();this.$newElement.css("width",b)}else"fit"==this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",
""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){var a=this,b=e("<div />"),d,c,m=function(a){b.addClass(a.attr("class")).toggleClass("dropup",a.hasClass("dropup"));d=a.offset();c=a.hasClass("dropup")?0:a[0].offsetHeight;b.css({top:d.top+c,left:d.left,width:a[0].offsetWidth,position:"absolute"})};
this.$newElement.on("click",function(){m(e(this));b.appendTo(a.options.container);b.toggleClass("open",!e(this).hasClass("open"));b.append(a.$menu)});e(window).resize(function(){m(a.$newElement)});e(window).on("scroll",function(){m(a.$newElement)});e("html").on("click",function(c){1>e(c.target).closest(a.$newElement).length&&b.removeClass("open")})},mobile:function(){this.$element.addClass("mobile-device").appendTo(this.$newElement);this.options.container&&this.$menu.hide()},refresh:function(){this.reloadLi();
this.render();this.setWidth();this.setStyle();this.checkDisabled();this.liHeight()},update:function(){this.reloadLi();this.setWidth();this.setStyle();this.checkDisabled();this.liHeight()},setSelected:function(a,b){this.$menu.find("li").eq(a).toggleClass("selected",b)},setDisabled:function(a,b){b?this.$menu.find("li").eq(a).addClass("disabled").find("a").attr("href","#").attr("tabindex",-1):this.$menu.find("li").eq(a).removeClass("disabled").find("a").removeAttr("href").attr("tabindex",0)},isDisabled:function(){return this.$element.is(":disabled")},
checkDisabled:function(){var a=this;this.isDisabled()?this.$button.addClass("disabled").attr("tabindex",-1):(this.$button.hasClass("disabled")&&this.$button.removeClass("disabled"),-1==this.$button.attr("tabindex")&&(this.$element.data("tabindex")||this.$button.removeAttr("tabindex")));this.$button.click(function(){return!a.isDisabled()})},tabIndex:function(){this.$element.is("[tabindex]")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex")))},
clickListener:function(){var a=this;e("body").on("touchstart.dropdown",".dropdown-menu",function(a){a.stopPropagation()});this.$newElement.on("click",function(){a.setSize();a.options.liveSearch||a.multiple||setTimeout(function(){a.$menu.find(".selected a").focus()},10)});this.$menu.on("click","li a",function(b){var d=e(this).parent().index(),c=a.$element.val(),m=a.$element.prop("selectedIndex");a.multiple&&b.stopPropagation();b.preventDefault();a.isDisabled()||e(this).parent().hasClass("disabled")||
(b=a.$element.find("option"),d=b.eq(d),a.multiple?(b=d.prop("selected"),d.prop("selected",!b)):(b.prop("selected",!1),d.prop("selected",!0)),a.multiple?a.options.liveSearch&&a.$searchbox.focus():a.$button.focus(),(c!=a.$element.val()&&a.multiple||m!=a.$element.prop("selectedIndex")&&!a.multiple)&&a.$element.change())});this.$menu.on("click","li.disabled a, li dt, li .div-contain, .popover-title, .popover-title :not(.close)",function(b){b.target==this&&(b.preventDefault(),b.stopPropagation(),a.options.liveSearch?
a.$searchbox.focus():a.$button.focus())});this.$menu.on("click",".popover-title .close",function(){a.$button.focus()});this.$searchbox.on("click",function(a){a.stopPropagation()});this.$element.change(function(){a.render()})},liveSearchListener:function(){var a=this,b=e('<li class="no-results"></li>');this.$newElement.on("click.dropdown.data-api",function(){a.$menu.find(".active").removeClass("active");a.$searchbox.val()&&(a.$searchbox.val(""),a.$menu.find("li").show(),b.parent().length&&b.remove());
a.multiple||a.$menu.find(".selected").addClass("active");setTimeout(function(){a.$searchbox.focus()},10)});this.$searchbox.on("input propertychange",function(){a.$searchbox.val()?(a.$menu.find("li").show().not(":icontains("+a.$searchbox.val()+")").hide(),a.$menu.find("li").filter(":visible:not(.no-results)").length?b.parent().length&&b.remove():(b.parent().length&&b.remove(),b.html('No results match "'+a.$searchbox.val()+'"').show(),a.$menu.find("li").last().after(b))):(a.$menu.find("li").show(),
b.parent().length&&b.remove());a.$menu.find("li.active").removeClass("active");a.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus();e(this).focus()});this.$menu.on("mouseenter","a",function(b){a.$menu.find(".active").removeClass("active");e(b.currentTarget).parent().not(".disabled").addClass("active")});this.$menu.on("mouseleave","a",function(){a.$menu.find(".active").removeClass("active")})},val:function(a){return void 0!==a?(this.$element.val(a),this.$element.change(),
this.$element):this.$element.val()},selectAll:function(){this.$element.find("option").prop("selected",!0).attr("selected","selected");this.render()},deselectAll:function(){this.$element.find("option").prop("selected",!1).removeAttr("selected");this.render()},keydown:function(a){var b,d,c,m,k,g,h,l,f,n,q,p={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",
81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};b=e(this);c=b.parent();b.is("input")&&(c=b.parent().parent());f=c.data("this");f.options.liveSearch&&(c=b.parent().parent());f.options.container&&(c=f.$menu);d=e("[role=menu] li:not(.divider) a",c);q=f.$menu.parent().hasClass("open");f.options.liveSearch&&(/(^9$|27)/.test(a.keyCode)&&q&&0===f.$menu.find(".active").length&&(a.preventDefault(),f.$menu.parent().removeClass("open"),
f.$button.focus()),d=e("[role=menu] li:not(.divider):visible",c),b.val()||/(38|40)/.test(a.keyCode)||0===d.filter(".active").length&&(d=f.$newElement.find("li").filter(":icontains("+p[a.keyCode]+")")));if(d.length){if(/(38|40)/.test(a.keyCode))q||f.$menu.parent().addClass("open"),c=d.index(d.filter(":focus")),k=d.parent(":not(.disabled):visible").first().index(),g=d.parent(":not(.disabled):visible").last().index(),m=d.eq(c).parent().nextAll(":not(.disabled):visible").eq(0).index(),h=d.eq(c).parent().prevAll(":not(.disabled):visible").eq(0).index(),
l=d.eq(m).parent().prevAll(":not(.disabled):visible").eq(0).index(),f.options.liveSearch&&(d.each(function(a){e(this).is(":not(.disabled)")&&e(this).data("index",a)}),c=d.index(d.filter(".active")),k=d.filter(":not(.disabled):visible").first().data("index"),g=d.filter(":not(.disabled):visible").last().data("index"),m=d.eq(c).nextAll(":not(.disabled):visible").eq(0).data("index"),h=d.eq(c).prevAll(":not(.disabled):visible").eq(0).data("index"),l=d.eq(m).prevAll(":not(.disabled):visible").eq(0).data("index")),
n=b.data("prevIndex"),38==a.keyCode&&(f.options.liveSearch&&--c,c!=l&&c>h&&(c=h),c<k&&(c=k),c==n&&(c=g)),40==a.keyCode&&(f.options.liveSearch&&(c+=1),-1==c&&(c=0),c!=l&&c<m&&(c=m),c>g&&(c=g),c==n&&(c=k)),b.data("prevIndex",c),f.options.liveSearch?(a.preventDefault(),b.is(".dropdown-toggle")||(d.removeClass("active"),d.eq(c).addClass("active").find("a").focus(),b.focus())):d.eq(c).focus();else if(!b.is("input")){var r=[];d.each(function(){e(this).parent().is(":not(.disabled)")&&e.trim(e(this).text().toLowerCase()).substring(0,
1)==p[a.keyCode]&&r.push(e(this).parent().index())});c=e(document).data("keycount");c++;e(document).data("keycount",c);e.trim(e(":focus").text().toLowerCase()).substring(0,1)!=p[a.keyCode]?(c=1,e(document).data("keycount",c)):c>=r.length&&(e(document).data("keycount",0),c>r.length&&(c=1));d.eq(r[c-1]).focus()}/(13|32|^9$)/.test(a.keyCode)&&q&&(/(32)/.test(a.keyCode)||a.preventDefault(),f.options.liveSearch?/(32)/.test(a.keyCode)||(f.$menu.find(".active a").click(),b.focus()):e(":focus").click(),e(document).data("keycount",
0));if(/(^9$|27)/.test(a.keyCode)&&q&&(f.multiple||f.options.liveSearch)||/(27)/.test(a.keyCode)&&!q)f.$menu.parent().removeClass("open"),f.$button.focus()}},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},destroy:function(){this.$newElement.remove();this.$element.remove()}};e.fn.selectpicker=function(a,b){var d=arguments,c,m=this.each(function(){if(e(this).is("select")){var k=e(this),g=k.data("selectpicker"),h="object"==typeof a&&a;if(!g)k.data("selectpicker",g=
new n(this,h,b));else if(h)for(var l in h)g.options[l]=h[l];"string"==typeof a&&(k=a,g[k]instanceof Function?([].shift.apply(d),c=g[k].apply(g,d)):c=g.options[k])}});return void 0!==c?c:m};e.fn.selectpicker.defaults={style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",noneSelectedText:"Nothing selected",countSelectedText:"{0} of {1} selected",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,multipleSeparator:", ",
iconBase:"glyphicon",tickIcon:"glyphicon-ok"};e(document).data("keycount",0).on("keydown",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input",n.prototype.keydown).on("focusin.modal",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input",function(a){a.stopPropagation()})}(window.jQuery);