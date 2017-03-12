$(document).ready(function($) {

	$(function() {
			$('#burger-builder').sortable({
				revert: true,
				start: function(event, ui) {
					var padding = parseInt($('#burger-builder').css('padding-top'));
					padding -= $(ui.item).height() + 22;
					$('#burger-builder').css('padding-top', padding);
				}
			});
			$('.draggable').draggable({
				connectToSortable: '#burger-builder',
				helper: 'clone',
				revert: 'invalid'
			});
			$('ul li').disableSelection();
	});

	

	/*$('.draggable').draggable({
		appendTo: '#droppable',
		helper: 'clone',
		revert: 'invalid',
		grid: [20, 20]
	});


	$('#droppable').droppable({
		hoverClass : 'ui-state-highlight',
		accept: '.draggable',
    drop: function(event, ui) {
    	var $clone = ui.helper.clone();
    	$clone.removeClass('draggable');
    	$(this).append($clone.draggable({
    		containment: '#droppable',
        grid: [20,20]
    	}));
			//$(ui.draggable).clone().appendTo(this);
			//$(ui.draggable).remove();
    }
	});*/
});