'use strict';

DOMReady(function(){
	/*-------------我们的服务----------------*/
	var oServe = document.getElementById('serve');
	var aServebtn = oServe.getElementsByTagName('a');
	for(var i =0; i<aServebtn.length; i++){
		aServebtn[i].onclick = function(){
			for(var i=0; i<aServebtn.length; i++){
				aServebtn[i].className = '';
			}
			this.className ='links';
		};
	}
});