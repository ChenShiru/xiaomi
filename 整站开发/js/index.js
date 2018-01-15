/**
 * Created by csriioo on 2018/1/14.
 */
$(function(){
   $('.bottom-box ul li').click(function(){
         var idx=$('.bottom-box ul li').index(this);
         showBrandList(idx);

   })
});
function showBrandList(index){
    var $rollobj = $(".brand");
    var rollWidth = $rollobj.find("li").width();
    rollWidth=rollWidth*4;
    $rollobj.stop(true,false).animate({left: -rollWidth*index},1000);
}
/*ÂÖ²¥Í¼*/
/*
var prevIdx=0;
var timer;
$('.left').on('click',function(){
    prevIdx--;
    if(prevIdx==-1){
        prevIdx=$('.roll img').length-1;
    }
    $('.roll img').eq(prevIdx).stop().fadeIn().siblings().stop().fadeOut();


});
$('.next').on('click',function(){
    prevIdx++;
    if(prevIdx>=$('.roll img').length){
        prevIdx=0;
    }
    $('.roll img').eq(prevIdx).stop().fadeIn().siblings().stop().fadeOut();


});

run();
function run(){
    timer = setInterval(function(){
        prevIdx++;
        if(prevIdx == $('.roll img').length){
            prevIdx=0;
        }
        $('.next').eq(prevIdx).triggerHandler('click');
    },1000);
}
$('.slide').on('mouseover',function(){
    clearInterval(timer);
}).on('mouseout',function(){
    run();
});*/
