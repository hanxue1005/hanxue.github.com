'use strict';
;(function(win,doc){
	function changeSize(){
		doc.documentElement.style.fontSize = 50*(doc.documentElement.clientWidth/320) + 'px';
	};
	win.addEventListener('resize',changeSize,false);
	changeSize();
})(window,document);