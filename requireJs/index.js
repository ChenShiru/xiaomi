/**
 * Created by Administrator on 2017/12/10.
 */
require(['sortArray'],function(sortArray){
    var arr1=[1,5,4,6,7,32,9];
     var obj={
         name:"dfsdfds"
     };
    console.log(sortArray(arr1));
});
//AMD
define(function(require){
   var arr=[1,3,5,90,13,2];
    var obj={
        name:'dsfdsfsdfds'
    };
    var sortArray =require('sortArray');
    console.log(sortArray(arr));
});
//CMD
