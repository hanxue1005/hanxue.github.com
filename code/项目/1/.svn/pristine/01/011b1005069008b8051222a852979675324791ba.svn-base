'use strict';

window.onload = function(){

	window.onresize = function(){
		document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75 + 'px';
	};
	document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75 + 'px';

	/*按钮显示隐藏*/
	var oMenu = document.getElementById('menu');
	var oClose = document.getElementById('close');
	var oIcon = document.getElementById('icon');
	var oHeader_close = document.getElementById('header_close');
	oMenu.onclick = function(){
		oMenu.style.display = 'none';
		oClose.style.display = 'block';
		oHeader_close.style.display = 'block';
	};
	oClose.onclick = function(){
		oMenu.style.display = 'block';
		oClose.style.display = 'none';
		oHeader_close.style.display = 'none';
	};

	/*选项卡*/
	 var swiper = new Swiper('.swiper-container', {
        speed: 500,
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
};
