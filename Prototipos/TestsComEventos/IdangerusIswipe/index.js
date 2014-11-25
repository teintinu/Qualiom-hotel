window.onload = function () {
    var mySwiper = new Swiper('.swiper-container', {
        //Your options here:
        mode: 'horizontal',
        loop: true
        //etc..
    });
}

/*
Or with jQuery/Zepto
*/
$(function () {
    var mySwiper = $('.swiper-container').swiper({
        //Your options here:
        mode: 'horizontal',
        loop: true
        //etc..
    });
});