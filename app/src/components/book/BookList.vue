<template>
     <div>
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>
</template>

<script>
    import vueswipe from "vue-swipe/dist/vue-swipe.css";
    import { Swipe, SwipeItem } from "vue-swipe";
    export default {
        mounted:function(){
            this.$store.commit('change','rgb(121,85,72)')
            this.$store.commit('changeTitle','Book')
        },
        components: {
    Swipe,
    SwipeItem
  }
    };
</script>

<style scoped>
.my-swipe {
  height: 200px;
}

.slide1 {
  /* background-color: #0089dc; */
 background: url('https://img3.doubanio.com/lpic/s6989253.jpg') center center no-repeat ;
   background-size: contain; 
   
}

.slide2 {
  /* background-color: #ffd705; */
  background: url('https://img3.doubanio.com/lpic/s29620814.jpg') center center no-repeat;
  background-size: contain; 
 
   
}

.slide3 {
 /*  background-color: #ff2d4b; */
  background: url('https://img3.doubanio.com/lpic/s29663054.jpg') center center no-repeat;
  background-size: contain; 
}
</style>