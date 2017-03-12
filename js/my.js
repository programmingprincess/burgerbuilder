$(document).ready(function($) {

	$(function() {
			$('#burger-builder').sortable({
				revert: true,
				start: function(event, ui) {
					if(!$(ui.item).hasClass('dropped')) {
						var padding = parseInt($('#burger-builder').css('padding-top'));
						console.log($(ui.item));
						console.log($(ui.item).height());
						console.log(padding);
						padding -= ($(ui.item).height() - 2);
						console.log(padding);
						$('#burger-builder').css('padding-top', padding);
						$(ui.item).addClass('dropped');
					}
				}
			});
			$('.draggable').draggable({
				connectToSortable: '#burger-builder',
				helper: 'clone',
				revert: 'invalid'
			});
			$('ul, li').disableSelection();
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