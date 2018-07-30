<template>
    <mu-carousel :cycle="false" interval="10000000" :hide-controls="true">
        <mu-carousel-item v-for="val,key in list">
            <img :src="val.imgurl">
        </mu-carousel-item>
    </mu-carousel>
</template>

<script>
    export default {
        name:"Carousel",
        data(){
            return {
                list:this.$store.state.indexData.banner
            }
        }
    }
</script>

<style>

</style>