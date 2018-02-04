<template>
    <div class="test1">
        <h2>我是测试页面1</h2>
        <router-link to="/subTest1/">subTest1</router-link>
        <!-- <router-link :to="{name:'subTest2',params:{id:2,name:'xx'}}">subTest2</router-link> -->
        <router-link to="/subTest2/5/lisi">subTest2</router-link>
        <router-link to="/home">redicect</router-link>
        <router-link to="/redirect/6/lisi">redirectparams</router-link>
        <router-link to="/abc">abc</router-link>
        <router-link to="/xyz">error</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .test1{
        height: 300px;
        background: #ff0000;
    }

</style>