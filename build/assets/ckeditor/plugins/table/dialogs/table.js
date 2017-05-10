//# sourceMappingURL=table.js.map
(function(){function v(a){for(var e,n=0,m=0,p,c=a.$.rows.length;m<c;m++){p=a.$.rows[m];for(var d=e=0,b,g=p.cells.length;d<g;d++)b=p.cells[d],e+=b.colSpan;e>n&&(n=e)}return n}function r(a){return function(){var e=this.getValue();(e=!!(CKEDITOR.dialog.validate.integer()(e)&&0<e))||(alert(a),this.select());return e}}function q(a,e){var n=function(c){return new CKEDITOR.dom.element(c,a.document)},q=a.editable(),p=a.plugins.dialogadvtab;return{title:a.lang.table.title,minWidth:310,minHeight:CKEDITOR.env.ie?
310:280,onLoad:function(){var c=this,a=c.getContentElement("advanced","advStyles");if(a)a.on("change",function(){var a=this.getStyle("width",""),d=c.getContentElement("info","txtWidth");d&&d.setValue(a,!0);a=this.getStyle("height","");(d=c.getContentElement("info","txtHeight"))&&d.setValue(a,!0)})},onShow:function(){var c=a.getSelection(),d=c.getRanges(),b,g=this.getContentElement("info","txtRows"),h=this.getContentElement("info","txtCols"),t=this.getContentElement("info","txtWidth"),f=this.getContentElement("info",
"txtHeight");"tableProperties"==e&&((c=c.getSelectedElement())&&c.is("table")?b=c:0<d.length&&(CKEDITOR.env.webkit&&d[0].shrink(CKEDITOR.NODE_ELEMENT),b=a.elementPath(d[0].getCommonAncestor(!0)).contains("table",1)),this._.selectedElement=b);b?(this.setupContent(b),g&&g.disable(),h&&h.disable()):(g&&g.enable(),h&&h.enable());t&&t.onChange();f&&f.onChange()},onOk:function(){var c=a.getSelection(),d=this._.selectedElement&&c.createBookmarks(),b=this._.selectedElement||n("table"),g={};this.commitContent(g,
b);if(g.info){g=g.info;if(!this._.selectedElement)for(var h=b.append(n("tbody")),e=parseInt(g.txtRows,10)||0,f=parseInt(g.txtCols,10)||0,k=0;k<e;k++)for(var l=h.append(n("tr")),m=0;m<f;m++){var p=l.append(n("td"));CKEDITOR.env.ie||p.append(n("br"))}e=g.selHeaders;if(!b.$.tHead&&("row"==e||"both"==e)){l=new CKEDITOR.dom.element(b.$.createTHead());h=b.getElementsByTag("tbody").getItem(0);h=h.getElementsByTag("tr").getItem(0);for(k=0;k<h.getChildCount();k++)f=h.getChild(k),f.type==CKEDITOR.NODE_ELEMENT&&
!f.data("cke-bookmark")&&(f.renameNode("th"),f.setAttribute("scope","col"));l.append(h.remove())}if(null!==b.$.tHead&&"row"!=e&&"both"!=e){l=new CKEDITOR.dom.element(b.$.tHead);h=b.getElementsByTag("tbody").getItem(0);for(m=h.getFirst();0<l.getChildCount();){h=l.getFirst();for(k=0;k<h.getChildCount();k++)f=h.getChild(k),f.type==CKEDITOR.NODE_ELEMENT&&(f.renameNode("td"),f.removeAttribute("scope"));h.insertBefore(m)}l.remove()}if(!this.hasColumnHeaders&&("col"==e||"both"==e))for(l=0;l<b.$.rows.length;l++)f=
new CKEDITOR.dom.element(b.$.rows[l].cells[0]),f.renameNode("th"),f.setAttribute("scope","row");if(this.hasColumnHeaders&&"col"!=e&&"both"!=e)for(k=0;k<b.$.rows.length;k++)l=new CKEDITOR.dom.element(b.$.rows[k]),"tbody"==l.getParent().getName()&&(f=new CKEDITOR.dom.element(l.$.cells[0]),f.renameNode("td"),f.removeAttribute("scope"));g.txtHeight?b.setStyle("height",g.txtHeight):b.removeStyle("height");g.txtWidth?b.setStyle("width",g.txtWidth):b.removeStyle("width");b.getAttribute("style")||b.removeAttribute("style")}if(this._.selectedElement)try{c.selectBookmarks(d)}catch(q){}else a.insertElement(b),
setTimeout(function(){var c=new CKEDITOR.dom.element(b.$.rows[0].cells[0]),d=a.createRange();d.moveToPosition(c,CKEDITOR.POSITION_AFTER_START);d.select()},0)},contents:[{id:"info",label:a.lang.table.title,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"text",id:"txtRows","default":3,label:a.lang.table.rows,required:!0,controlStyle:"width:5em",validate:r(a.lang.table.invalidRows),setup:function(c){this.setValue(c.$.rows.length)},
commit:m},{type:"text",id:"txtCols","default":2,label:a.lang.table.columns,required:!0,controlStyle:"width:5em",validate:r(a.lang.table.invalidCols),setup:function(c){this.setValue(v(c))},commit:m},{type:"html",html:"&nbsp;"},{type:"select",id:"selHeaders",requiredContent:"th","default":"",label:a.lang.table.headers,items:[[a.lang.table.headersNone,""],[a.lang.table.headersRow,"row"],[a.lang.table.headersColumn,"col"],[a.lang.table.headersBoth,"both"]],setup:function(c){var a=this.getDialog();a.hasColumnHeaders=
!0;for(var b=0;b<c.$.rows.length;b++){var e=c.$.rows[b].cells[0];if(e&&"th"!=e.nodeName.toLowerCase()){a.hasColumnHeaders=!1;break}}null!==c.$.tHead?this.setValue(a.hasColumnHeaders?"both":"row"):this.setValue(a.hasColumnHeaders?"col":"")},commit:m},{type:"text",id:"txtBorder",requiredContent:"table[border]","default":a.filter.check("table[border]")?1:0,label:a.lang.table.border,controlStyle:"width:3em",validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidBorder),setup:function(c){this.setValue(c.getAttribute("border")||
"")},commit:function(c,a){this.getValue()?a.setAttribute("border",this.getValue()):a.removeAttribute("border")}},{id:"cmbAlign",type:"select",requiredContent:"table[align]","default":"",label:a.lang.common.align,items:[[a.lang.common.notSet,""],[a.lang.common.alignLeft,"left"],[a.lang.common.alignCenter,"center"],[a.lang.common.alignRight,"right"]],setup:function(a){this.setValue(a.getAttribute("align")||"")},commit:function(a,d){this.getValue()?d.setAttribute("align",this.getValue()):d.removeAttribute("align")}}]},
{type:"vbox",padding:0,children:[{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtWidth",requiredContent:"table{width}",controlStyle:"width:5em",label:a.lang.common.width,title:a.lang.common.cssLengthTooltip,"default":a.filter.check("table{width}")?500>q.getSize("width")?"100%":500:0,getValue:u,validate:CKEDITOR.dialog.validate.cssLength(a.lang.common.invalidCssLength.replace("%1",a.lang.common.width)),onChange:function(){var a=this.getDialog().getContentElement("advanced","advStyles");a&&
a.updateStyle("width",this.getValue())},setup:function(a){this.setValue(a.getStyle("width"))},commit:m}]},{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtHeight",requiredContent:"table{height}",controlStyle:"width:5em",label:a.lang.common.height,title:a.lang.common.cssLengthTooltip,"default":"",getValue:u,validate:CKEDITOR.dialog.validate.cssLength(a.lang.common.invalidCssLength.replace("%1",a.lang.common.height)),onChange:function(){var a=this.getDialog().getContentElement("advanced","advStyles");
a&&a.updateStyle("height",this.getValue())},setup:function(a){(a=a.getStyle("height"))&&this.setValue(a)},commit:m}]},{type:"html",html:"&nbsp;"},{type:"text",id:"txtCellSpace",requiredContent:"table[cellspacing]",controlStyle:"width:3em",label:a.lang.table.cellSpace,"default":a.filter.check("table[cellspacing]")?1:0,validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidCellSpacing),setup:function(a){this.setValue(a.getAttribute("cellSpacing")||"")},commit:function(a,d){this.getValue()?d.setAttribute("cellSpacing",
this.getValue()):d.removeAttribute("cellSpacing")}},{type:"text",id:"txtCellPad",requiredContent:"table[cellpadding]",controlStyle:"width:3em",label:a.lang.table.cellPad,"default":a.filter.check("table[cellpadding]")?1:0,validate:CKEDITOR.dialog.validate.number(a.lang.table.invalidCellPadding),setup:function(a){this.setValue(a.getAttribute("cellPadding")||"")},commit:function(a,d){this.getValue()?d.setAttribute("cellPadding",this.getValue()):d.removeAttribute("cellPadding")}}]}]},{type:"html",align:"right",
html:""},{type:"vbox",padding:0,children:[{type:"text",id:"txtCaption",requiredContent:"caption",label:a.lang.table.caption,setup:function(a){this.enable();a=a.getElementsByTag("caption");if(0<a.count()){a=a.getItem(0);var d=a.getFirst(CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT));d&&!d.equals(a.getBogus())?(this.disable(),this.setValue(a.getText())):(a=CKEDITOR.tools.trim(a.getText()),this.setValue(a))}},commit:function(c,d){if(this.isEnabled()){c=this.getValue();var b=d.getElementsByTag("caption");
if(c)0<b.count()?(b=b.getItem(0),b.setHtml("")):(b=new CKEDITOR.dom.element("caption",a.document),d.getChildCount()?b.insertBefore(d.getFirst()):b.appendTo(d)),b.append(new CKEDITOR.dom.text(c,a.document));else if(0<b.count())for(c=b.count()-1;0<=c;c--)b.getItem(c).remove()}}},{type:"text",id:"txtSummary",requiredContent:"table[summary]",label:a.lang.table.summary,setup:function(a){this.setValue(a.getAttribute("summary")||"")},commit:function(a,d){this.getValue()?d.setAttribute("summary",this.getValue()):
d.removeAttribute("summary")}}]}]},p&&p.createAdvancedTab(a,null,"table")]}}var u=CKEDITOR.tools.cssLength,m=function(a){var e=this.id;a.info||(a.info={});a.info[e]=this.getValue()};CKEDITOR.dialog.add("table",function(a){return q(a,"table")});CKEDITOR.dialog.add("tableProperties",function(a){return q(a,"tableProperties")})})();