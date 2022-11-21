'use strice'; //'use strict'

($(function(){
    sideMenu();
}));

function sideMenu(){
    $('.side-menu__btn').click(function(){
        $(this).addClass('is-click');
    })
}