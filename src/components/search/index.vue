<template>
    <div id="search">
        <mu-appbar style="width: 100%;">
            <mu-button icon slot="left" @click="$router.go(-1)">
                <mu-icon value="keyboard_arrow_left" size="45" color="#ccc"></mu-icon>
            </mu-button>
            搜索
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>
        <div class="s">
            <input type="text" v-model="val"/>
            <mu-button 
                class="search" 
                color="primary"
                :to="{path:`/search/list/${val}`}"
                >搜索
            </mu-button>
        </div>
        <mu-paper :z-depth="1" class="demo-list-wrap">
            <mu-list>
                <mu-list-item v-for="val in list">
                    <mu-list-item-title>{{val.keyword}}</mu-list-item-title>
                </mu-list-item>
            </mu-list>
        </mu-paper>
    </div>
</template>

<script>
import jsonp from 'fetch-jsonp';
    export default {
        name:"Search",
        data(){
            return {
                list:[],
                val:'讲真的'
            }
        },
        created() {
            this.$store.commit('playOff');
            jsonp('http://mobilecdn.kugou.com/api/v3/search/hot?format=jsonp&plat=0&count=30',{
                jsonpCallback:'callback'
            })
            .then(e=>e.json())
            .then(data=>{
                this.list=data.data.info;
                console.log(data)
            })
        },
    }
</script>

<style>
#search{
    height:92vh;
    overflow-y:auto;
}
#search .mu-appbar{
    background:#fff;
    color:#444;
    text-align:center;
    font-family:"微软雅黑" !important;
    box-shadow:none;
}
.s{
    padding: .7143rem;
    background: #fbfbfb;
    text-align:center;
}
.s input{
    display: inline-block;
    vertical-align: middle;
    font-size: 1rem;
    width: 70%;
    padding: .2rem .0714rem .2rem .7rem;
    margin-right: 3%;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    color: #959595;
    outline:none;
}
.s .search{
    width: 17.25%;
    height: 1.9rem;
    line-height: 1.9rem;
    border: none;
    border-radius: 5px;
    text-align: center;
    color: #959595;
    display:inline-block;
    background: #e5e5e5;
    vertical-align: middle;
}
#search .mu-item{
    height:3rem;
    border-bottom:1px solid #ccc;
}
</style>