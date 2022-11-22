'use strice'; //'use strict'

($(function(){
    sideMenu();
    imgSwitch();
}));

function sideMenu(){
    $('.side-menu__btn').click(function(){
        $(this).addClass('is-click');
    })
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