<template>
    <mu-appbar style="width: 100%;" color="primary" id="logo">
        <h1>
            <img src="../../assets/images/logo.png"/>
        </h1>
        <router-link to="/search">
            
                <i class="ico"></i>
        </router-link>
       
    </mu-appbar>
</template>

<script>
    export default {
        name:'Nav'
    }
</script>

<style>
#logo h1{
    width: 7.286rem;
    height: 1.67857rem;
    margin:0;
    float:left;
}
#logo h1 img{
    width:100%;
    vertical-align:top;
}
#logo .ico{
    width: 1.2143rem;
    height: 1.2143rem;
    display:inline-block;
    background:url(../../assets/images/search.png) no-repeat center center;
    background-size: 100%;
    float:right;
    margin-top:.3rem;
}
</style>