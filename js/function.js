$(document).ready(function() {

	// First screen full height
	function setHeiHeight() {
	    $('.first__screen').css({
	        minHeight: $(window).height() + 'px'
	    });
	}
	setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
	$(window).resize( setHeiHeight ); // обновляем при изменении размеров окна


	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});

	// Scroll to ID // Плавный скролл к элементу при нажатии на ссылку. В ссылке указываем ID элемента
	// $('#main__menu a[href^="#"]').click( function(){ 
	// 	var scroll_el = $(this).attr('href'); 
	// 	if ($(scroll_el).length != 0) {
	// 	$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
	// 	}
	// 	return false;
	// });

	// Stiky menu // Липкое меню. При прокрутке к элементу #header добавляется класс .stiky который и стилизуем
    // $(document).ready(function(){
    //     var HeaderTop = $('#header').offset().top;
        
    //     $(window).scroll(function(){
    //             if( $(window).scrollTop() > HeaderTop ) {
    //                     $('#header').addClass('stiky');
    //             } else {
    //                     $('#header').removeClass('stiky');
    //             }
    //     });
    // });

	 $('.review__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		// fade: true,
		asNavFor: '.review__slider_nav'
	});

	$('.review__slider_nav').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.review__slider',
		dots: false,
		arrows: false,
		centerMode: true,
		focusOnSelect: true
	});

    // var months = [
    //     'января',
    //     'февраля',
    //     'марта',
    //     'апреля',
    //     'мая',
    //     'июня',
    //     'июля',
    //     'августа',
    //     'сентября',
    //     'октября',
    //     'ноября',
    //     'декабря',
    // ];
    
    // function plural(number, titles) {
    //     var cases = [2, 0, 1, 1, 1, 2];
    //     number = Math.abs(number);
    //     return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    // }
    
    // function calculate($calculator) {
    //     var $jsAmount = $calculator.find('.js-amount');
    //     var amount = +$jsAmount.val();
    //     var $jsDays = $calculator.find('.js-days');
    //     var days = +$jsDays.val();
    //     if (amount < +$jsAmount.prop("min") || amount > +$jsAmount.prop("max") || days < +$jsDays.prop("min") || days > +$jsDays.prop("max")) {
    //         return;
    //     }
        
    //     var ratio = +$calculator.data('ratio');
    //     var $targetTake = $('.' + $calculator.data('target-take') + ' > span');
    //     var $targetPercent = $('.' + $calculator.data('target-percent') + ' > span');
    //     var $targetGiveBack = $('.' + $calculator.data('target-give-back') + ' > span');
    //     var $targetGiveBackDate = $('.' + $calculator.data('target-give-back-date') + ' > span');
        
    //     var take = amount;
    //     var percent = Math.ceil(amount * ratio * days);
    //     var giveBack = take + percent;
        
    //     var giveBackDate = new Date();
    //     giveBackDate.setDate(giveBackDate.getDate() + days);
    //     giveBackDateString = giveBackDate.getDate() + ' ' + months[giveBackDate.getMonth()] + ' ' + giveBackDate.getFullYear();
        
    //     $targetTake.html(take);
    //     $targetPercent.html(percent);
    //     $targetGiveBack.html(giveBack);
    //     $targetGiveBackDate.html(giveBackDateString);
        
    //     var amountR = +$calculator.data('amountR');
    //     var popoverItem = $calculator.data('popoverItem');
    //     var popoverObj = popoverItem.data('bs.popover');
    //     var popoverText = "Можно получить";
    //     var $tabsLi = $calculator.closest('.tab').children('.nav-tabs').find('li');
    //     //  показывать или нет таб о повторном кредите
    //     if (amount >= amountR) {
    //         $tabsLi.first().removeClass('active');
    //         $tabsLi.last().addClass('active');
    //         if (popoverObj) {
    //             popoverText = "Можно получить,погасив займ на " + ((+take) - (+$calculator.data("amountD"))) + " рублей.";
    //         }
    //     } else {
    //         $tabsLi.first().addClass('active');
    //         $tabsLi.last().removeClass('active');
    //     }
    //     if (popoverObj) {
    //         popoverObj.options.content = popoverText;
    //         popoverObj.setContent();
    //         if (popoverItem.is(':hover')) {
    //             popoverItem.popover("show");
    //         }
    //     }

    // }
    
    // fix инициализируем слайдеры
    $('.js-slider').slider({
		range: "min",
		value: 37,
		min: 1,
		max: 700,
		slide: function( event, ui ) {
			// $( "#amount" ).val( "$" + ui.value );
		}
    });

    $('.js-slider').each(function(){
    	var slider = $(this);

    	slider.slider({
			range: "min",
			value: 37,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				// $( "#amount" ).val( "$" + ui.value );
			}
		});
    });

    // $('.js-slider').each(function(){
    //     var $slider = $(this);
    //     var $calculator = $slider.closest('.js-calculator');
    //     var inputClass = 'js-amount';
    //     var $jsAmount = $calculator.find('.js-amount');
    //     var min = +$jsAmount.prop("min");;
    //     var max = +$jsAmount.prop("max");;
    //     var value = +$jsAmount.val();
    //     var step = 100; // amount slider
    //     if ($slider.hasClass('js-slider-days')) {
    //         inputClass = 'js-days';
    //         var $jsDays = $calculator.find('.js-days');
    //         min = +$jsDays.prop("min");
    //         max = +$jsDays.prop("max");
    //         value = +$jsDays.val();
    //         step = 1; // days slider
    //     }
    //     var $input = $calculator.find('.' + inputClass);
    //     $slider.slider({
    //         range: "max",
    //         min: min,
    //         max: max,
    //         value: value,
    //         step: step,
    //         slide: function(event, ui) {
    //             $input.val(ui.value).change();
    //         },
    //         create: function(event, ui) {
    //             var $target = $(event.target);
    //             if ($target.hasClass('slider-range-money')) {
    //                 var popOverItem = $target.children('.ui-slider-handle');

    //                 popOverItem.data('toggle', 'popover');
    //                 popOverItem.data('trigger', 'hover');
    //                 popOverItem.data('content', 'Можно получить');
    //                 popOverItem.data('placement', 'bottom');
    //                 popOverItem.popover();
    //                 $calculator.data('popoverItem', popOverItem);
    //             }
    //         }
    //     })
    //     $input.on('change keyup', function(){
    //         var inputValue = +$input.val();
    //         if (inputValue > max) {
    //             inputValue = max;
    //             $input.val(inputValue);
    //         }
    //         $slider.slider({value: inputValue});
    //         if ($input.hasClass('js-days')) {
    //             $input.siblings('.js-days-str').html(plural(inputValue, ['день', 'дня', 'дней']));
    //         }
    //         calculate($calculator);
    //     });
    //     $input.on('blur', function(){
    //         var inputValue = +$input.val();
    //         if (inputValue < min) {
    //             inputValue = min;
    //             $input.val(inputValue);
    //         } else if (inputValue > max) {
    //             inputValue = max;
    //             $input.val(inputValue);
    //         }
    //     });
        
    //     // calculate($calculator);
    // });

});