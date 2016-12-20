'use strict';

$(function(){
	window.onresize = function(){
		document.documentElement.style.fontSize = documnet.documentElement.clientWidth/3.75 + 'px';
	};
	document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75 + 'px';

	/*-----------------toumingceng----------------------*/
	$('#menu').click(function(){
		$('#x_close').show();
	})
	$('#close').click(function(){
		$('#x_close').hide();
	})
	$('#contact1').click(function(){
		$('#x_close').hide();
	})
	/*-----------------tab-------------------*/
	var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: true,
        slidesPerView: 'auto',
        grabCursor: true
    });

});
