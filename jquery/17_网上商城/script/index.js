/**
 * Created by apple on 17/12/3.
 */
/*
$(function(){

    $('#skin li').on('click',function(){
        changeSkin( this.id );
    });
    var $skin = $.cookie('MyCssSkin') || 'skin_0';
    var cookie_skin = $.cookie("MyCssSkin");
    if (cookie_skin) {
        changeSkin( cookie_skin );
    }
});
function changeSkin(skinName){
    $("#"+skinName).addClass("selected")
        .siblings().removeClass("selected");
    $("#cssfile").attr("href","styles/skin/"+ skinName +".css");
    $.cookie( "MyCssSkin" ,  skinName , {expires: 10 });

}*/
/*����*/
var $skin = $.cookie('MyCssSkin') || 'skin_0';
$(function(){
$('#skin li').on('click',function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $skin=$(this).attr('id');
    $("#cssfile").attr("href","styles/skin/"+ $skin +".css");
    $.cookie('MyCssSkin',$skin,{expires:7});
});
    $('#'+$skin).trigger('click');
});
/* �����ı���Ч�� */
$(function(){
    $("#inputSearch").focus(function(){
        $(this).addClass("focus");
        if($(this).val() ==this.defaultValue){
            $(this).val("");
        }
    }).blur(function(){
        $(this).removeClass("focus");
        if ($(this).val() == '') {
            $(this).val(this.defaultValue);
        }
    })
});
/*�ֲ�ͼ����*/
var prevIdx = 0;
var timer;
$(function(){
    $('#jnBtn a').on('mouseover',function(){
         $this = $(this);
        $(this).addClass('chos').siblings().removeClass('chos');
        $('#JS_imgWrap img').eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
        prevIdx = $this.index();

    });
    run();
    function run(){
        timer = setInterval(function(){
            prevIdx++;
            if(prevIdx == $('#JS_imgWrap img').length ){
                prevIdx = 0;
            }
            $('#jnBtn a').eq(prevIdx).triggerHandler('mouseover');

        },1000)
    }
    $('#jnImageroll').on('mouseover',function(){
        clearInterval(timer);
    }).on('mouseout',function(){
        run();
    })
});
/*����*/
$(function(){
    $('#nav li').hover(function(){
        $(this).find('.jnNav').show()

    },function(){
        $(this).find('.jnNav').hide();
    })
})
/*��ʾ��*/
$(function(){
    var x = 10;
    var y = 20;
    $(".tooltip").on('mouseover',function(e){

        var $tip = $("<span id='tip'>"+ $(this).attr('title') +"</span>");
        $("body").append($tip);
        $("#tip")
            .css({
                "top": (e.pageY+y) + "px",
                "left": (e.pageX+x)  + "px"
            });	  //����x�����y���꣬������ʾ
        this.title="";
    }).mouseout(function(){
        this.title = $('#tip').html();
        $("#tip").remove();   //�Ƴ�
    }).mousemove(function(e){
        $("#tip")
            .css({
                "top": (e.pageY+y) + "px",
                "left": (e.pageX+x)  + "px"
            });
    });
});


