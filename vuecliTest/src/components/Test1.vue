<template>
    <div class="test1">
            <h2>我是测试页面</h2>
            <router-link to="/subTest/">subTest</router-link>
            <!-- <router-link :to="{name:'subTest2',params:{id:1,name:'xx'}}">subTest2</router-link> -->
            <router-link to="/subTest2/5/lisi">subTest2</router-link>
            <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .test1{
        width: 200px;
        height: 200px;
        margin: 0 auto;
        background: #ff0000;
    }
</style>