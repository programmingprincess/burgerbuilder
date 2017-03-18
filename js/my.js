	$(document).ready(function($) {
	var price = 0;

	$('.cutting-board').click(function(){
		$(this).html('<h2>$' + price.toFixed(2) + '</h2>');
	});

	$(function() {
			$('#burger-builder').sortable({
				revert: true,
				start: function(event, ui) {
					if(!$(ui.item).hasClass('dropped')) {
						var padding = parseInt($('#burger-builder').css('padding-top'));
						console.log($(ui.item));
						console.log($(ui.item).height());
						console.log(padding);
						padding -= ($(ui.item).height() - 7);
						console.log(padding);
						if(padding >=20)
							$('#burger-builder').css('padding-top', padding);
						
						calcPrice($(ui.item));
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

	function calcPrice(item) {
		if(item.hasClass('tomato'))
			price += 0.50;
		else if(item.hasClass('patty'))
			price += 3;
		else if(item.hasClass('top'))
			price += 1;
		else if(item.hasClass('bot'))
			price += 1;
		else if(item.hasClass('lettuce'))
			price += 1;
		else if(item.hasClass('cheese'))
			price += 1.50;
	}
});