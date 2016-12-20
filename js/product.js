'use strict';

$(function(){
	window.onresize = function(){
		document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75 + 'px';
	};
	document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75 + 'px';

	/*-----------------toumingceng----------------------*/
	$('#menu').click(function(){
		$('#x_close').show();
	})
	$('#close').click(function(){
		$('#x_close').hide();
	})
	/*-----------------tab----------------------*/
	 var swiper = new Swiper('.swiper-container', {
        speed: 300,
        onSlideChangeStart: function () {
            $(".icon_2 .active").removeClass('active')
            $(".icon_2 li").eq(swiper.activeIndex).addClass('active')
        }
    });
    $(".icon_2 li").on('touchstart mousedown', function (e) {
        e.preventDefault();
        $(".icon_2 .active").removeClass('active');
        $(this).addClass('active');
        swiper.slideTo($(this).index())
    })
    $(".icon_2 ul li").click(function (e) {
        e.preventDefault()
    })
});