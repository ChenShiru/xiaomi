/**
 * Created by csriioo on 2018/4/5.
 */
/*
 require(['add'],function(add){
 console.log(add(5,6));
 });*/
require(['sortArray'],function(sortArray){
        var arr =[1,8,5,44,3,6,10];
        var obj ={
                name:'zs'
        };
        console.log(sortArray(obj));
});

/*
* AMD:依赖前置
* CMD：依赖就近
*
* */