$(document).ready(function($) {
	$('.draggable').draggable({
		appendTo: '#droppable',
		helper: 'clone',
		revert: 'invalid',
		grid: [20, 20],
		cancel: ''
	});


	$('#droppable').droppable({
		accept: '.draggable',
    drop: function(event, ui) {
    	var $clone = ui.helper.clone();
    	$clone.removeClass('draggable');
    	$(this).append($clone.draggable({
    		containment: '#droppable',
        grid: [20,20],
        cancel: '',
    	}));
    	
      /*$(this).append($(ui.draggable).clone());
			$(ui.draggable).clone().addClass('clone');
		  $(ui.draggable).clone().removeClass('ui-draggable');
		  $('.clone').draggable({
		      containment: '#droppable',
		      grid: [10,10]
		  });*/
    },

	});

});