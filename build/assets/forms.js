//# sourceMappingURL=forms.js.map
$(document).ready(function(){$(".selectpicker").selectpicker();$("#tags").tags({suggestions:"alpha bravo charlie delta echo foxtrot golf hotel india".split(" "),tagData:["juliett","kilo"]});$(".editable").editable();$("#rootwizard").bootstrapWizard();$("[data-mask]").length&&$("[data-mask]").each(function(){$this=$(this);var a=$this.attr("data-mask")||"error...",b=$this.attr("data-mask-placeholder")||"X";$this.mask(a,{placeholder:b})})});