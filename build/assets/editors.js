//# sourceMappingURL=editors.js.map
$(function(){$("#bootstrap-editor").wysihtml5();$("textarea#ckeditor_standard").ckeditor({width:"98%",height:"150px",toolbar:[{name:"document",items:"Source - NewPage Preview - Templates".split(" ")},"Cut Copy Paste PasteText PasteFromWord - Undo Redo".split(" "),{name:"basicstyles",items:["Bold","Italic"]}]});$("textarea#ckeditor_full").ckeditor({width:"98%",height:"150px"})});
tinymce.init({selector:"#tinymce_basic",plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table contextmenu paste"],toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"});
tinymce.init({selector:"#tinymce_full",plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor"],toolbar1:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",toolbar2:"print preview media | forecolor backcolor emoticons",
image_advtab:!0,templates:[{title:"Test template 1",content:"Test 1"},{title:"Test template 2",content:"Test 2"}]});