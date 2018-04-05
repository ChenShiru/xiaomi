/**
 * Created by csriioo on 2018/4/5.
 */
requirejs.config({
    paths: {
        jquery:'jquery-1.12.4'
    }
});
define(['jquery'],function($){

    function Dialog(arg){
        var _this = this;
        this.defaultValue={
          width:300,
          height:400
        };
        $.extend(this.defaultValue,arg);
        this.$mask=$('<div class="mask"></div>');/*用this.属性，下面的方法才能访问到*/
        this.$container=$('<div class="container"></div>');
        this.$title=$('<div class="title"></div>');
        this.$H2 = $('<h2></h2>').html(this.defaultValue.title);
        this.$close=$('<span class="close">x</span>').
            on('click',function(){
                _this.close();
            });
        this.$content=$('<div class="content"></div>');
    }
    Dialog.prototype.open=function(){
        this.$container.appendTo(this.$mask).append(this.$title).append( this.$content)
            .css({
                width:this.defaultValue.width,
                height:this.defaultValue.height,
                marginLeft:-this.defaultValue.width/2,
                marginTop:-this.defaultValue.height/2
            });
        this.$title.append(this.$H2).append(this.$close);
        this.$content.load(this.defaultValue.content);
        $('body').append(this.$mask);
    };
    Dialog.prototype.close = function(){
        this.$mask.remove();
    }
    return Dialog;
});