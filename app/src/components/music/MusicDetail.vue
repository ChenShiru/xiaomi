<template>
    <div>
        <aplayer autoplay :music="musicData"  v-if="isShow"></aplayer>
    </div>
</template>

<script>
    import axios from 'axios';
    import Aplayer from 'vue-aplayer';
    export default {
        data(){
            return{
                musicData:[],
                isShow:false
            }
        },
         components: {
            Aplayer
        },
        mounted:function(){
            this.$store.commit('change','rgb(33, 150, 243)');
          this.$store.commit('changeTitle','Movies');
            axios.get('/static/data/musicdata.json').then(res=>{
                var arr = res.data.musicData;
                for(var i = 0;i<arr.length;i++){
                     //解构
                    var {title,author,src:url,musicImgSrc:pic,lrc} = arr[i];
                    //对象属性简写
                    var obj = {title,author,url,pic,lrc}
                    this.musicData.push(obj);
                }
                this.isShow=true;
            })
        }
    }
</script>

<style scoped>

</style>