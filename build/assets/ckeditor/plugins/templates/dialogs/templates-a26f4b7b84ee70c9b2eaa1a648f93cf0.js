//# sourceMappingURL=templates.js.map
(function(){CKEDITOR.dialog.add("templates",function(c){function r(a,b){var m=CKEDITOR.dom.element.createFromHtml('<a href="javascript:void(0)" tabIndex="-1" role="option" ><div class="cke_tpl_item"></div></a>'),e='<table style="width:350px;" class="cke_tpl_preview" role="presentation"><tr>';a.image&&b&&(e+='<td class="cke_tpl_preview_img"><img src="'+CKEDITOR.getUrl(b+a.image)+'"'+(CKEDITOR.env.ie6Compat?' onload="this.width=this.width"':"")+' alt="" title=""></td>');e+='<td style="white-space:normal;"><span class="cke_tpl_title">'+
a.title+"</span><br/>";a.description&&(e+="<span>"+a.description+"</span>");m.getFirst().setHtml(e+"</td></tr></table>");m.on("click",function(){t(a.html)});return m}function t(a){var b=CKEDITOR.dialog.getCurrent();b.getValueOf("selectTpl","chkInsertOpt")?(c.fire("saveSnapshot"),c.setData(a,function(){b.hide();var a=c.createRange();a.moveToElementEditStart(c.editable());a.select();setTimeout(function(){c.fire("saveSnapshot")},0)})):(c.insertHtml(a),b.hide())}function k(a){var b=a.data.getTarget(),
c=g.equals(b);if(c||g.contains(b)){var e=a.data.getKeystroke(),f=g.getElementsByTag("a"),d;if(f){if(c)d=f.getItem(0);else switch(e){case 40:d=b.getNext();break;case 38:d=b.getPrevious();break;case 13:case 32:b.fire("click")}d&&(d.focus(),a.data.preventDefault())}}}var h=CKEDITOR.plugins.get("templates");CKEDITOR.document.appendStyleSheet(CKEDITOR.getUrl(h.path+"dialogs/templates.css"));var g,h="cke_tpl_list_label_"+CKEDITOR.tools.getNextNumber(),f=c.lang.templates,n=c.config;return{title:c.lang.templates.title,
minWidth:CKEDITOR.env.ie?440:400,minHeight:340,contents:[{id:"selectTpl",label:f.title,elements:[{type:"vbox",padding:5,children:[{id:"selectTplText",type:"html",html:"<span>"+f.selectPromptMsg+"</span>"},{id:"templatesList",type:"html",focus:!0,html:'<div class="cke_tpl_list" tabIndex="-1" role="listbox" aria-labelledby="'+h+'"><div class="cke_tpl_loading"><span></span></div></div><span class="cke_voice_label" id="'+h+'">'+f.options+"</span>"},{id:"chkInsertOpt",type:"checkbox",label:f.insertOption,
"default":n.templates_replaceContent}]}]}],buttons:[CKEDITOR.dialog.cancelButton],onShow:function(){var a=this.getContentElement("selectTpl","templatesList");g=a.getElement();CKEDITOR.loadTemplates(n.templates_files,function(){var b=(n.templates||"default").split(",");if(b.length){var c=g;c.setHtml("");for(var e=0,h=b.length;e<h;e++)for(var d=CKEDITOR.getTemplates(b[e]),k=d.imagesPath,d=d.templates,q=d.length,l=0;l<q;l++){var p=r(d[l],k);p.setAttribute("aria-posinset",l+1);p.setAttribute("aria-setsize",
q);c.append(p)}a.focus()}else g.setHtml('<div class="cke_tpl_empty"><span>'+f.emptyListMsg+"</span></div>")});this._.element.on("keydown",k)},onHide:function(){this._.element.removeListener("keydown",k)}}})})();