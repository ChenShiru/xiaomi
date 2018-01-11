/**
 * Created by csriioo on 2018/1/9.
 */
/*ÂÖ²¥Í¼¿ªÊ¼*/
 var prevIdx=0;
var timer;
$('.btns li').on('click',function(){
   $this=$(this);
    $(this).addClass('chos').siblings().removeClass('chos');
    $('.img-box img').eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
    prevIdx=$this.index();
});
$('#prev-btn').on('click',function(){
 prevIdx--;
    if(prevIdx==-1){
        prevIdx=$('.img-box img').length-1;
    }
    $('.btns li').eq(prevIdx).addClass('chos').siblings().removeClass('chos');
    $('.img-box img').eq(prevIdx).stop().fadeIn().siblings().stop().fadeOut();


});
$('#next-btn').on('click',function(){
    prevIdx++;
    if(prevIdx>=$('.img-box img').length){
        prevIdx=0;
    }
    $('.btns li').eq(prevIdx).addClass('chos').siblings().removeClass('chos');
    $('.img-box img').eq(prevIdx).stop().fadeIn().siblings().stop().fadeOut();


});

run();
function run(){
    timer = setInterval(function(){
        prevIdx++;
        if(prevIdx == $('.img-box img').length){
            prevIdx=0;
        }
        $('.btns li').eq(prevIdx).triggerHandler('click');
    },1000);
}
$('.slide').on('mouseover',function(){
   clearInterval(timer);
}).on('mouseout',function(){
    run();
});
/*ÂÖ²¥Í¼½áÊø*/