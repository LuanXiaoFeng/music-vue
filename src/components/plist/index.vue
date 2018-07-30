<template>
    <div class="plistindex">
    <mu-paper :z-depth="1" class="demo-loadmore-wrap">
        <ul class="mu-list">
        <router-link v-for="val,key in list" :to="{'path':`/plist/list/${key}`}" class="topbox">
            <li
                avatar 
                button 
                :ripple="true"
                
            >
            <div class="mu-avatar">
                <img :src="val.imgurl.replace(/{size}/,'')">
            </div>
            <div class="title_name">
                <mu-list-item-title>
                    {{val.specialname}}   
                </mu-list-item-title>
                <mu-icon value="headset" size="18" color="#9b9b9b"></mu-icon>
                <span>{{val.playcount}}</span>
            </div>
            <div class="ico">
                <mu-icon value="keyboard_arrow_right" size="34" :right="true"></mu-icon>
            </div>
            </li>
            </router-link>
        </ul>
    </mu-paper>
</div>
</template>

<script>
import {songpage as data} from '../../json.js'
// import axios from 'axios'
    export default {
        name:"Plist",
        created(){
            this.$store.commit('playOff');
        },
        data(){
            return {
                list:[]
            }
        },
        // async mounted() {
        //     let list=await list.rank;
        //     this.list.push(...list);
        // },
        // /plist/index&json=true
        async mounted() {
            // let d=await axios.get('/api/plist/index&json=true')
            let d=data.plist.list.info;
            // console.log(d)
            this.list.push(...d);
        },
    }
</script>

<style>
.plistindex .demo-loadmore-wrap {
  width: 100%;
  max-width: 100%;
  height: 84vh;
  display: flex;
  overflow:hidden;
  flex-direction: column;
}
.plistindex .mu-avatar{
    border-radius:0;
    width:5rem !important;
    height:5rem !important;
    float:left;
}
.plistindex .mu-avatar img{
    border-radius:0;
}
.plistindex .mu-item.has-avatar{
    height:auto;
    width:100%;
}
.plistindex .mu-item-action{
    min-width:auto;
    float: right;
}
.plistindex .mu-item-title{
    margin-left:0.7rem;
    height:auto;
    overflow: inherit;
    white-space: inherit;
    text-overflow: inherit;
}
.plistindex .mu-item-title{
    font-size:.8rem;
}
.plistindex .mu-item{
    padding:0;
}
.plistindex .mu-list li{
    padding-bottom:0.5rem;
    margin:0rem .5rem 0.5rem .5rem;
    border-bottom:1px solid #ccc;
    overflow:hidden;
    color:#333;
    list-style:none;
}
.plistindex .title_name{
    width: 10rem;
    margin-left: .5rem;
    float: left;
    margin-top: 0.5rem;
}
.plistindex .ico{
    float:right;
    margin-top:1.5rem;
}
.plistindex .title_name .material-icons{
    margin:.6rem 0 0 .5rem;
    float:left;
}
.plistindex .title_name span{
    float:left;
    margin:.4rem 0 0 .3rem;
    color:#9b9b9b;
    font-size:.8rem;
}
</style>