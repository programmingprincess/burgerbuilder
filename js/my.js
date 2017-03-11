$(document).ready(function($) {
	$('.draggable').draggable({
		appendTo: '#droppable',
		help: 'clone',
		revert: 'invalid',
		grid: [20, 20],
		cancel: ''
	});


	$('#droppable').droppable({
		accept: '.draggable',
    drop: function(event, ui) {
      var $clone = ui.helper.clone();


      $clone.draggable({
      	containment: '#droppable',
        grid: [20,20],
        cancel: '',
      });
    },

	});

});