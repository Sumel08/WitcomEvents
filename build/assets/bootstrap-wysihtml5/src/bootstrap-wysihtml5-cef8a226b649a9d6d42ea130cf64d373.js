//# sourceMappingURL=bootstrap-wysihtml5.js.map
!function(c,p){var n={"font-styles":function(a,b){return"<li class='dropdown'><a class='btn btn-default dropdown-toggle"+(b&&b.size?" btn-"+b.size:"")+"' data-toggle='dropdown' href='#'><i class='glyphicon glyphicon-font'></i>&nbsp;<span class='current-font'>"+a.font_styles.normal+"</span>&nbsp;<b class='caret'></b></a><ul class='dropdown-menu'><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='div' tabindex='-1'>"+a.font_styles.normal+"</a></li><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h1' tabindex='-1'>"+
a.font_styles.h1+"</a></li><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h2' tabindex='-1'>"+a.font_styles.h2+"</a></li><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h3' tabindex='-1'>"+a.font_styles.h3+"</a></li><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h4'>"+a.font_styles.h4+"</a></li><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h5'>"+a.font_styles.h5+"</a></li><li><a data-wysihtml5-command='formatBlock' data-wysihtml5-command-value='h6'>"+
a.font_styles.h6+"</a></li></ul></li>"},emphasis:function(a,b){b=b&&b.size?" btn-"+b.size:"";return"<li><div class='btn-group'><a class='btn btn-default"+b+"' data-wysihtml5-command='bold' title='CTRL+B' tabindex='-1'>"+a.emphasis.bold+"</a><a class='btn btn-default"+b+"' data-wysihtml5-command='italic' title='CTRL+I' tabindex='-1'>"+a.emphasis.italic+"</a><a class='btn btn-default"+b+"' data-wysihtml5-command='underline' title='CTRL+U' tabindex='-1'>"+a.emphasis.underline+"</a></div></li>"},lists:function(a,
b){b=b&&b.size?" btn-"+b.size:"";return"<li><div class='btn-group'><a class='btn btn-default"+b+"' data-wysihtml5-command='insertUnorderedList' title='"+a.lists.unordered+"' tabindex='-1'><i class='glyphicon glyphicon-list'></i></a><a class='btn btn-default"+b+"' data-wysihtml5-command='insertOrderedList' title='"+a.lists.ordered+"' tabindex='-1'><i class='glyphicon glyphicon-th-list'></i></a><a class='btn btn-default"+b+"' data-wysihtml5-command='Outdent' title='"+a.lists.outdent+"' tabindex='-1'><i class='glyphicon glyphicon-indent-right'></i></a><a class='btn btn-default"+
b+"' data-wysihtml5-command='Indent' title='"+a.lists.indent+"' tabindex='-1'><i class='glyphicon glyphicon-indent-left'></i></a></div></li>"},link:function(a,b){return"<li><div class='bootstrap-wysihtml5-insert-link-modal modal hide fade'><div class='modal-header'><a class='close' data-dismiss='modal'>&times;</a><h3>"+a.link.insert+"</h3></div><div class='modal-body'><input value='http://' class='bootstrap-wysihtml5-insert-link-url input-xlarge'><label class='checkbox'> <input type='checkbox' class='bootstrap-wysihtml5-insert-link-target' checked>"+
a.link.target+"</label></div><div class='modal-footer'><a href='#' class='btn btn-default' data-dismiss='modal'>"+a.link.cancel+"</a><a href='#' class='btn btn-primary' data-dismiss='modal'>"+a.link.insert+"</a></div></div><a class='btn btn-default"+(b&&b.size?" btn-"+b.size:"")+"' data-wysihtml5-command='createLink' title='"+a.link.insert+"' tabindex='-1'><i class='glyphicon glyphicon-share'></i></a></li>"},image:function(a,b){return"<li><div class='bootstrap-wysihtml5-insert-image-modal modal hide fade'><div class='modal-header'><a class='close' data-dismiss='modal'>&times;</a><h3>"+
a.image.insert+"</h3></div><div class='modal-body'><input value='http://' class='bootstrap-wysihtml5-insert-image-url input-xlarge'></div><div class='modal-footer'><a href='#' class='btn btn-default' data-dismiss='modal'>"+a.image.cancel+"</a><a href='#' class='btn btn-primary' data-dismiss='modal'>"+a.image.insert+"</a></div></div><a class='btn btn-default"+(b&&b.size?" btn-"+b.size:"")+"' data-wysihtml5-command='insertImage' title='"+a.image.insert+"' tabindex='-1'><i class='glyphicon glyphicon-picture'></i></a></li>"},
html:function(a,b){return"<li><div class='btn-group'><a class='btn btn-default"+(b&&b.size?" btn-"+b.size:"")+"' data-wysihtml5-action='change_view' title='"+a.html.edit+"' tabindex='-1'><i class='glyphicon glyphicon-pencil'></i></a></div></li>"},color:function(a,b){return"<li class='dropdown'><a class='btn btn-default dropdown-toggle"+(b&&b.size?" btn-"+b.size:"")+"' data-toggle='dropdown' href='#' tabindex='-1'><span class='current-color'>"+a.colours.black+"</span>&nbsp;<b class='caret'></b></a><ul class='dropdown-menu'><li><div class='wysihtml5-colors' data-wysihtml5-command-value='black'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='black'>"+
a.colours.black+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='silver'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='silver'>"+a.colours.silver+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='gray'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='gray'>"+a.colours.gray+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='maroon'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='maroon'>"+
a.colours.maroon+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='red'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='red'>"+a.colours.red+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='purple'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='purple'>"+a.colours.purple+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='green'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='green'>"+
a.colours.green+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='olive'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='olive'>"+a.colours.olive+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='navy'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='navy'>"+a.colours.navy+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='blue'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='blue'>"+
a.colours.blue+"</a></li><li><div class='wysihtml5-colors' data-wysihtml5-command-value='orange'></div><a class='wysihtml5-colors-title' data-wysihtml5-command='foreColor' data-wysihtml5-command-value='orange'>"+a.colours.orange+"</a></li></ul></li>"}},h=function(a,b){this.el=a;var d=b||l,e;for(e in d.customTemplates)n[e]=d.customTemplates[e];this.toolbar=this.createToolbar(a,d);this.editor=this.createEditor(b);window.editor=this.editor;c("iframe.wysihtml5-sandbox").each(function(a,b){c(b.contentWindow).off("focus.wysihtml5").on({"focus.wysihtml5":function(){c("li.dropdown").removeClass("open")}})})};
h.prototype={constructor:h,createEditor:function(a){a=a||{};a=c.extend(!0,{},a);a.toolbar=this.toolbar[0];var b=new p.Editor(this.el[0],a);if(a&&a.events)for(var d in a.events)b.on(d,a.events[d]);return b},createToolbar:function(a,b){var d=this;a=c("<ul/>",{"class":"wysihtml5-toolbar",style:"display:none"});var e=b.locale||l.locale||"en",f;for(f in l){var m=!1;void 0!==b[f]?!0===b[f]&&(m=!0):m=l[f];!0===m&&(a.append(n[f](q[e],b)),"html"===f&&this.initHtml(a),"link"===f&&this.initInsertLink(a),"image"===
f&&this.initInsertImage(a))}if(b.toolbar)for(f in b.toolbar)a.append(b.toolbar[f]);a.find("a[data-wysihtml5-command='formatBlock']").click(function(a){a=c(a.target||a.srcElement);d.toolbar.find(".current-font").text(a.html())});a.find("a[data-wysihtml5-command='foreColor']").click(function(a){a=c(a.target||a.srcElement);d.toolbar.find(".current-color").text(a.html())});this.el.before(a);return a},initHtml:function(a){a.find("a[data-wysihtml5-action='change_view']").click(function(b){a.find("a.btn").not("a[data-wysihtml5-action='change_view']").toggleClass("disabled")})},
initInsertImage:function(a){var b=this,d=a.find(".bootstrap-wysihtml5-insert-image-modal"),e=d.find(".bootstrap-wysihtml5-insert-image-url"),f=d.find("a.btn-primary"),m=e.val(),g,k=function(){var a=e.val();e.val(m);b.editor.currentView.element.focus();g&&(b.editor.composer.selection.setBookmark(g),g=null);b.editor.composer.commands.exec("insertImage",a)};e.keypress(function(a){13==a.which&&(k(),d.modal("hide"))});f.click(k);d.on("shown",function(){e.focus()});d.on("hide",function(){b.editor.currentView.element.focus()});
a.find("a[data-wysihtml5-command=insertImage]").click(function(){if(c(this).hasClass("wysihtml5-command-active"))return!0;b.editor.currentView.element.focus(!1);g=b.editor.composer.selection.getBookmark();d.appendTo("body").modal("show");d.on("click.dismiss.modal",'[data-dismiss="modal"]',function(a){a.stopPropagation()});return!1})},initInsertLink:function(a){var b=this,d=a.find(".bootstrap-wysihtml5-insert-link-modal"),e=d.find(".bootstrap-wysihtml5-insert-link-url"),f=d.find(".bootstrap-wysihtml5-insert-link-target"),
g=d.find("a.btn-primary"),l=e.val(),k,h=function(){var a=e.val();e.val(l);b.editor.currentView.element.focus();k&&(b.editor.composer.selection.setBookmark(k),k=null);var c=f.prop("checked");b.editor.composer.commands.exec("createLink",{href:a,target:c?"_blank":"_self",rel:c?"nofollow":""})};e.keypress(function(a){13==a.which&&(h(),d.modal("hide"))});g.click(h);d.on("shown",function(){e.focus()});d.on("hide",function(){b.editor.currentView.element.focus()});a.find("a[data-wysihtml5-command=createLink]").click(function(){if(c(this).hasClass("wysihtml5-command-active"))return!0;
b.editor.currentView.element.focus(!1);k=b.editor.composer.selection.getBookmark();d.appendTo("body").modal("show");d.on("click.dismiss.modal",'[data-dismiss="modal"]',function(a){a.stopPropagation()});return!1})}};var g={resetDefaults:function(){c.fn.wysihtml5.defaultOptions=c.extend(!0,{},c.fn.wysihtml5.defaultOptionsCache)},bypassDefaults:function(a){return this.each(function(){var b=c(this);b.data("wysihtml5",new h(b,a))})},shallowExtend:function(a){a=c.extend({},c.fn.wysihtml5.defaultOptions,
a||{},c(this).data());return g.bypassDefaults.apply(this,[a])},deepExtend:function(a){a=c.extend(!0,{},c.fn.wysihtml5.defaultOptions,a||{});return g.bypassDefaults.apply(this,[a])},init:function(a){return g.shallowExtend.apply(this,[a])}};c.fn.wysihtml5=function(a){if(g[a])return g[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)c.error("Method "+a+" does not exist on jQuery.wysihtml5");else return g.init.apply(this,arguments)};c.fn.wysihtml5.Constructor=h;var l=c.fn.wysihtml5.defaultOptions=
{"font-styles":!0,color:!1,emphasis:!0,lists:!0,html:!1,link:!0,image:!0,events:{},parserRules:{classes:{"wysiwyg-color-silver":1,"wysiwyg-color-gray":1,"wysiwyg-color-white":1,"wysiwyg-color-maroon":1,"wysiwyg-color-red":1,"wysiwyg-color-purple":1,"wysiwyg-color-fuchsia":1,"wysiwyg-color-green":1,"wysiwyg-color-lime":1,"wysiwyg-color-olive":1,"wysiwyg-color-yellow":1,"wysiwyg-color-navy":1,"wysiwyg-color-blue":1,"wysiwyg-color-teal":1,"wysiwyg-color-aqua":1,"wysiwyg-color-orange":1},tags:{b:{},i:{},
br:{},ol:{},ul:{},li:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},blockquote:{},u:1,img:{check_attributes:{width:"numbers",alt:"alt",src:"url",height:"numbers"}},a:{check_attributes:{href:"url",target:"alt",rel:"alt"}},span:1,div:1,code:1,pre:1}},stylesheets:["./vendors/bootstrap-wysihtml5/lib/css/wysiwyg-color.css"],locale:"en"};"undefined"===typeof c.fn.wysihtml5.defaultOptionsCache&&(c.fn.wysihtml5.defaultOptionsCache=c.extend(!0,{},c.fn.wysihtml5.defaultOptions));var q=c.fn.wysihtml5.locale={en:{font_styles:{normal:"Normal text",
h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",h5:"Heading 5",h6:"Heading 6"},emphasis:{bold:"Bold",italic:"Italic",underline:"Underline"},lists:{unordered:"Unordered list",ordered:"Ordered list",outdent:"Outdent",indent:"Indent"},link:{insert:"Insert link",cancel:"Cancel",target:"Open link in new window"},image:{insert:"Insert image",cancel:"Cancel"},html:{edit:"Edit HTML"},colours:{black:"Black",silver:"Silver",gray:"Grey",maroon:"Maroon",red:"Red",purple:"Purple",green:"Green",olive:"Olive",
navy:"Navy",blue:"Blue",orange:"Orange"}}}}(window.jQuery,window.wysihtml5);