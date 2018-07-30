<template>
    <div id="info">
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            
            <mu-list textline="three-line">
                <mu-card-media :title="img.rankname">
                    <router-link to="/rank" class="back_img">
                        <mu-icon value="keyboard_arrow_left" size="45" color="#fff"></mu-icon>
                    </router-link>
                    <img :src="img.imgurl?img.imgurl.replace(/{size}/,''):''">
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
import axios from 'axios'
    export default {
        name:"Info",
        data(){
            return {
                list:[],
                img:''
            }
        },
        async mounted() {
            let id=this.$route.params.id||'6666';
            let d=await axios.get('/api/rank/info/&json=true?rankid='+id);
            this.list=d.data.songs.list;
            this.img=d.data.info;
        },
    }
</script>

<style >
#info{
    width:100%;
}
#info .mu-carousel{
    height: 8.5714rem;
}
#info .mu-carousel img{
    height:100%;
}
#info .demo-loadmore-wrap {
  width: 100%;
  max-width: 100%;
  height: 92vh;
  display: flex;
  flex-direction: column;
}
#info .demo-loadmore-wrap .mu-appbar {
    width: 100%;
  }
#info .mu-list{
    padding:0;
}
#info .mu-list>li{
    padding:0;
    margin:0 8px;
    height: 4.0714rem;
    line-height:4.0714rem;
    border-bottom:1px solid #ccc;
}
#info .mu-list-three-line .mu-item{
    height: 4.0714rem;
}
#info .mu-card-media{
    width: 100%;
    height: 12.5rem;
    position: relative;
    overflow: hidden;
}
#info .mu-card-media img{
    height:100%;
}
#info .back_img{
    position:absolute;
}
</style>