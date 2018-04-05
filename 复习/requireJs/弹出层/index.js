/**
 * Created by csriioo on 2018/4/5.
 */
requirejs.config({
    paths: {
        jquery:'jquery-1.12.4'
    }
});
require(['jquery','dialog'],function($,Dialog){
    $('#btn').on('click',function(){
        var dialog = new Dialog({
            width:800,
            title:'dsdad',
            content:'content.html'
        });
        dialog.open()
        $('body').on('click','#cancel',function(){
            dialog.close();
        })
    })

});