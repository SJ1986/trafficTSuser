'use strice'; //'use strict'

($(function(){
    sideMenu();
    gnbFn();
    imgSwitch();
}));

function sideMenu(){
    $('.side-menu__btn').click(function(){
        $(this).addClass('is-click');
    })
}

function gnbFn(){
    $('.gnb').mouseover(function(){
        gnb_Open();
        $('header').addClass('is-open');
    });
    $('.gnb > a').hover(function(){
        $('.gnb > a').removeClass('is-active');
        $(this).addClass('is-active');
    });
    $('header').mouseleave(function(){
        gnb_Close();
    });
    $('nav').mouseover(function(){
        gnb_Close();
    });
}
function gnb_Open(){
	TweenMax.killAll();
	TweenMax.to($("header"), 0.7, {
		height:462,
		ease:'easeOutExpo',
	});
}
function gnb_Close(){
	TweenMax.killAll();
	TweenMax.to($("header"), 0.5, {
		height:132,
    ease:'ease',
    onComplete:function(){
            $('header').removeClass('is-open');
		}
	});
}

function imgSwitch(){
    $('.fullpage-box__quickLink > a').each(function() {
        var nowImg = $(this).find('img');  
        var srcName = nowImg.attr('src');  
        var newSrc = srcName.substring(0, srcName.lastIndexOf('.'));
        $(this).hover(function() { 
            $(this).find('img').attr('src', newSrc+ '-on.' + /[^.]+$/.exec(srcName)); 
            $(this).addClass('on');
        }, function() {
            $(this).find('img').attr('src', newSrc + '.' + /[^.]+$/.exec(srcName)); 
            $(this).removeClass('on');
        });    
    });
}