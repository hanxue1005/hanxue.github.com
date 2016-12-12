'use strict';
function domReady(fn){
    if(document.addEventListener){
        document.addEventListener('DOMContentLoaded',function(){
            fn && fn();
        },false)
    }else{
        document.attachEvent('onreadystatechange',function(){
            if(document.readyState == 'complete'){
                fn && fn();
            }
        })
    }
}
domReady(function () {
    /*-------------header-------------*/
    var oUl = document.getElementById('ul1');
    var aLi = oUl.children;
    var oPos = document.getElementById('pos');
    var left = 0;
    for (var i = 0; i < aLi.length - 1; i++) {
        aLi[i].onmouseover = function () {
            doMove(oPos, 'left', this.offsetLeft);
        };
        aLi[i].onmouseout = function () {
            doMove(oPos, 'left', left);
        };
        aLi[i].onclick = function () {
            left = this.offsetLeft;
            doMove(oPos, 'left', left);
        };
    }
    /*-------------header的你封装函数-------------*/
    (function () {
        var start = 0;
        var iSpeed = 20;
        window.doMove = function (obj, name, iTarget) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                iSpeed += (iTarget - start) / 5;
                iSpeed *= 0.8;
                start += iSpeed;
                obj.style[name] = start + 'px';

                if (Math.round(iSpeed) == 0 && Math.round(start) == iTarget) {
                    clearInterval(obj.timer);
                    obj.style[name] = iTarget + 'px';
                }
            }, 16);
        };
    })();
    /*$(function (){
     var left = 0;
     for(var i =0; i<$('li').length; i++){
     $('li').mouseover(function () {
     doMove($('#pos'),'left',$(this).offset().left()
     )
     })
     $('li').mouseout(function () {
     doMove($('#pos'),'left',left)
     })
     $('li').mouseout(function () {
     left=$(this).offset().left();
     doMove($('#pos'),'left',left);
     })
     }
     (function (){
     var start=0;
     var iSpeed=20;
     window.doMove=function (obj,name,iTarget){
     clearInterval(obj.timer);
     obj.timer=setInterval(function (){
     iSpeed+=(iTarget-start)/5;
     iSpeed*=0.8;
     start+=iSpeed;
     obj.style[name]=start+'px';

     if(Math.round(iSpeed)==0&&Math.round(start)==iTarget){
     clearInterval(obj.timer);
     obj.style[name]=iTarget+'px';
     }
     },16);
     };
     })();
     });*/
    /*-------------content-------------*/
    var oPlay = document.getElementById('play');
    var oOl = oPlay.children[0];
    var aBtn = oOl.children;
    var oUl = oPlay.children[1];
    var aLi = oUl.children;
    var iNow = 0;
    var timer = null;
    function tab(){
        for(var i = 0; i<aBtn.length; i++){
            aBtn[i].className = '';
            aLi[i].className = '';
        }
        aBtn[iNow].className = 'active';
        aLi[iNow].className = 'on';
    }
    function next(){
        iNow++;
        if(iNow>aBtn.length-1){
            iNow = 0;
        }
        tab();
    }
    for(var i = 0; i<aBtn.length; i++){
        aBtn[i].index = i;
        (function(i){
            aBtn[i].onclick = function(){
                iNow = i;
                tab();
            };
        })(i);
    }
    oPlay.onmouseenter = function () {
        clearInterval(timer);
    }
    oPlay.onmouseleave = function () {
        timer = setInterval(next,1000);
    }
    timer = setInterval(next,1000);
    /*-------------font-------------*/

});




