<template>
    <div id="plist">
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            
            <mu-list textline="three-line">
                <mu-card-media :title="title">
                    <router-link to="/plist" class="back_img">
                        <mu-icon value="keyboard_arrow_left" size="45" color="#fff"></mu-icon>
                    </router-link>
                    <img :src="img">
                </mu-card-media>
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
// import axios from 'axios'
import {songpage } from '../../json.js'
    export default {
        name:"Pl",
        data(){
            return {
                list:[],
                img:'',
                title:''
            }
        },
        async mounted() {
            let id=this.$route.params.id||'0';
            // let d=await axios.get('/api/rank/info/&json=true?rankid='+id);
            let d=songpage.plist.list.info[id*1];
            this.list=d.songs;
            this.img=d.imgurl.replace(/{size}/,'');
            this.title=d.specialname;
        },
    }
</script>

<style >
#plist{
    width:100%;
}
#plist .mu-carousel{
    height: 8.5714rem;
}
#plist .mu-carousel img{
    height:100%;
}
#plist .demo-loadmore-wrap {
  width: 100%;
  max-width: 100%;
  height: 92vh;
  display: flex;
  flex-direction: column;
}
#plist .demo-loadmore-wrap .mu-appbar {
    width: 100%;
  }
#plist .mu-list{
    padding:0;
}
#plist .mu-list>li{
    padding:0;
    margin:0 8px;
    height: 4.0714rem;
    line-height:4.0714rem;
    border-bottom:1px solid #ccc;
}
#plist .mu-list-three-line .mu-item{
    height: 4.0714rem;
}
#plist .mu-card-media{
    width: 100%;
    height: 13.5rem;
    position: relative;
    overflow: hidden;
}
#plist .mu-card-media img{
    width: 100%;
    margin-top: -3.5rem;
}
#plist .back_img{
    position:absolute;
}
#plist .mu-card-media-title .mu-card-title{
    font-size:20px;
}
</style>