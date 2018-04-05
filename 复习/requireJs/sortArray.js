/**
 * Created by csriioo on 2018/4/5.
 */
define(['isArray'],function(isArray){

   function sortArray(arr){
       if(isArray(arr)){
           return arr.sort(function(a,b){
               return a-b;
           })
       }else{
           return '请输入数组';
       }

   }
   return sortArray;
});