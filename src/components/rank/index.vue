<template>
<div class="rankindex">
    <mu-paper :z-depth="1" class="demo-loadmore-wrap">
        <ul class="mu-list">
            <router-link 
                v-for="val,key in list"
                :to="{'path':'/rank/info/'+val.rankid}"
            >
                <li
                    avatar 
                    button 
                    :ripple="true"
                >
                    <div class="mu-avatar">
                        <img :src="val.imgurl.replace(/{size}/,'')">
                    </div>
                    <mu-list-item-title class="title_box">{{val.rankname}}</mu-list-item-title>
                    <div class="ico">
                        <mu-icon value="keyboard_arrow_right" size="34"></mu-icon>
                    </div>
                </li>
            </router-link>
        </ul>
    </mu-paper>
</div>
</template>

<script>
    import {list as data} from '../../json.js'
    export default {
        name:"Rank",
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
        mounted() {
            let d=data.rank.list;
            // console.log(d)
            this.list.push(...d);
        },
    }
</script>

<style>
.rankindex .demo-loadmore-wrap {
  width: 100%;
  max-width: 100%;
  height: 84vh;
  display: flex;
  flex-direction: column;
}
.rankindex .mu-avatar{
    border-radius:0;
    width:5rem !important;
    height:5rem !important;
    float:left;
}
.rankindex .mu-avatar img{
    border-radius:0;
}
.rankindex .mu-item-action{
    min-width:auto;
}
.rankindex .mu-item-title{
    margin-left:0.7rem;
}
.rankindex .mu-item-title{
    font-size:1rem;
}
.rankindex .mu-item{
    padding:0;
}
.rankindex .mu-list li{
    padding-bottom:0.5rem;
    margin:0 .5rem 0.5rem .5rem;
    border-bottom:1px solid #ccc;
    list-style:none;
    color:#333;
    height:5.5rem;
    overflow:hidden;
}
.rankindex .mu-list .title_box{
    float:left;
    width:8rem;
    height:5.5rem;
    line-height:5rem;
}
.rankindex .ico{
    float:right;
    margin-top:1.5rem;
}
</style>