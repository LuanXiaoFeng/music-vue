<template>
    <div id="searchList"> 
        <mu-appbar style="width: 100%;">
            <mu-button icon slot="left" @click="$router.go(-1)">
                <mu-icon value="keyboard_arrow_left" size="45" color="#ccc"></mu-icon>
            </mu-button>
            搜索
            <mu-button flat slot="right"></mu-button>
        </mu-appbar>      
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            
            <mu-list textline="three-line">
                <mu-list-item 
                button
                v-for="val in list"
                @click="$store.dispatch('play',val.hash)"
                >
                    <mu-list-item-content>
                        <mu-list-item-title>{{val.filename}}</mu-list-item-title>
                    </mu-list-item-content>
                    <mu-icon 
                    value="play_for_work"
                    color="#444"
                    right
                    ></mu-icon>
                </mu-list-item>
                
            </mu-list>
        </mu-paper>
    </div>
</template>

<script>
import jsonp from 'fetch-jsonp';
    export default {
        name:"Slist",
        created(){
            this.$store.commit('playOff');
        },
        data(){
            return {
                list:[],
                val:this.$route.params.name
            }
        },
        async mounted() {
            let name=this.$route.params.name;
            let d=await jsonp('http://mobilecdn.kugou.com/api/v3/search/song?format=jsonp&keyword='+ name +'&page=1&pagesize=30&showtype=1',{
                jsonpCallback:'callback'
            })
            let json=await d.json()
            this.list=json.data.info;
        }
    }
</script>

<style>
#searchList{
    width:100%;
}
#searchList .mu-carousel{
    height: 8.5714rem;
}
#searchList .mu-carousel img{
    height:100%;
}
#searchList .demo-loadmore-wrap {
  width: 100%;
  max-width: 100%;
  height: 84vh;
  display: flex;
  flex-direction: column;
}
#searchList .demo-loadmore-wrap .mu-appbar {
    width: 100%;
  }
#searchList .mu-list{
    padding:0;
}
#searchList .mu-list>li{
    padding:0;
    margin:0 8px;
    height: 4.0714rem;
    line-height:4.0714rem;
    border-bottom:1px solid #ccc;
}
#searchList .mu-list-three-line .mu-item{
    height: 4.0714rem;
}
#searchList{
    height:92vh;
    overflow-y:auto;
}
#searchList .mu-appbar{
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
#searchList .mu-item{
    height:3rem;
    border-bottom:1px solid #ccc;
}
</style>