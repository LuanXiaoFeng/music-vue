<template>
   <div class="singerlist">
   <mu-appbar style="width: 100%;" color="primary">
        <mu-button icon slot="left" @click="$router.go(-1)">
            <mu-icon value="keyboard_arrow_left" size="45" color="#666"></mu-icon>
        </mu-button>
        
        <mu-button flat slot="right"></mu-button>
    </mu-appbar>
    <mu-paper :z-depth="1" class="demo-loadmore-wrap">
        <ul class="mu-list">
            <router-link 
                to="/singer"
                v-for="val,key in list"
            >
                <li 
                    avatar 
                    button 
                    :ripple="true"
                >
                <div class="mu-avatar">
                    <img :src="val.imgurl.replace(/{size}/,'200')">
                </div>
                <mu-list-item-title class="title_box">{{val.singername}}</mu-list-item-title>
                <div class="ico">
                    <mu-icon value="keyboard_arrow_right" size="34"></mu-icon>
                </div>
                </li>
            </router-link>
        </ul>
        <mu-divider></mu-divider>
    </mu-paper>
</div>
</template>

<script>
import axios from 'axios'
    export default {
        name:"Singerlist",
        data(){
            return {
                list:[]
            }
        },
        async mounted() {
            let id=this.$route.params.id||'88';
            // console.log(id)
            let d=await axios.get('/api/singer/list/?json=true?classid='+id)
            // console.log(d)
            this.list.push(...d.data.singers.list.info);
        },
    }
</script>

<style>
.singerlist .demo-loadmore-wrap {
  width: 100%;
  max-width: 100%;
  height: 84vh;
  display: flex;
  flex-direction: column;
}
.singerlist .mu-avatar{
    border-radius:0;
    width:5rem !important;
    height:5rem !important;
    float:left;
}
.singerlist .mu-avatar img{
    border-radius:0;
}
.singerlist .mu-item.has-avatar{
    height:auto;
}
.singerlist .mu-item-action{
    min-width:auto;
}
.singerlist .mu-item-title{
    margin-left:0.7rem;
}
.singerlist .mu-item-title{
    font-size:1rem;
}
.singerlist .mu-item{
    padding:0;
}
.singerlist .mu-list li{
    padding-bottom:0.5rem;
    margin:0 .5rem 0.5rem .5rem;
    border-bottom:1px solid #ccc;
    color:#333;
    height:5.5rem;
    overflow:hidden;
    list-style:none;
}
.singerlist .mu-primary-color{
    background:#fff;
    color:#666;
    text-align:center;
}
.singerlist .mu-list .title_box{
    float:left;
    width:8rem;
    height:5.5rem;
    line-height:5rem;
}
.singerlist .ico{
    float:right;
    margin-top:1.5rem;
}
</style>