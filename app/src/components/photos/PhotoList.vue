<template>
    <div>
       
        <h2>Photo</h2>
        <h2>Photo</h2>
        <h2>Photo</h2>
        <h2>Photo</h2>
        
    </div>
</template>

<script>

    export default {
        mounted:function(){
            this.$store.commit('change','rgb(63,81,181)')
            this.$store.commit('changeTitle','Photo')
        }
    }
</script>

<style scoped>

</style>